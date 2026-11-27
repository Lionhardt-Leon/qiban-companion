(()=>{var ug=Object.defineProperty;var hg=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var dg=(i,e)=>{for(var t in e)ug(i,t,{get:e[t],enumerable:!0})};var pf={};dg(pf,{AsyncCompress:()=>vg,AsyncDecompress:()=>wg,AsyncDeflate:()=>ef,AsyncGunzip:()=>nf,AsyncGzip:()=>vg,AsyncInflate:()=>Kl,AsyncUnzipInflate:()=>Dg,AsyncUnzlib:()=>sf,AsyncZipDeflate:()=>Ig,AsyncZlib:()=>Mg,Compress:()=>Fl,DecodeUTF8:()=>Ag,Decompress:()=>zl,Deflate:()=>kn,EncodeUTF8:()=>Rg,FlateErrorCode:()=>yg,Gunzip:()=>go,Gzip:()=>Fl,Inflate:()=>gn,Unzip:()=>Fg,UnzipInflate:()=>Ug,UnzipPassThrough:()=>ff,Unzlib:()=>yo,Zip:()=>Pg,ZipDeflate:()=>Cg,ZipPassThrough:()=>ia,Zlib:()=>Bl,compress:()=>bg,compressSync:()=>Ol,decompress:()=>Eg,decompressSync:()=>Tg,deflate:()=>tf,deflateSync:()=>oa,gunzip:()=>rf,gunzipSync:()=>xo,gzip:()=>bg,gzipSync:()=>Ol,inflate:()=>jl,inflateSync:()=>Jr,strFromU8:()=>Ql,strToU8:()=>Yi,unzip:()=>Og,unzipSync:()=>Bg,unzlib:()=>af,unzlibSync:()=>_o,zip:()=>Lg,zipSync:()=>Ng,zlib:()=>Sg,zlibSync:()=>kl});function ur(i,e){return typeof i=="function"&&(e=i,i={}),this.ondata=e,i}function tf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),Kr(i,e,[$r],function(n){return Zi(oa(n.data[0],n.data[1]))},0,t)}function oa(i,e){return lr(i,e||{},0,0)}function jl(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),Kr(i,e,[Zr],function(n){return Zi(Jr(n.data[0],Wl(n.data[1])))},1,t)}function Jr(i,e){return sa(i,{i:2},e&&e.out,e&&e.dictionary)}function bg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),Kr(i,e,[$r,$d,function(){return[Ol]}],function(n){return Zi(Ol(n.data[0],n.data[1]))},2,t)}function Ol(i,e){e||(e={});var t=Yr(),n=i.length;t.p(i);var r=lr(i,e,Yl(e),8),s=r.length;return Xl(r,e),bt(r,s-8,t.d()),bt(r,s-4,n),r}function rf(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),Kr(i,e,[Zr,Kd,function(){return[xo]}],function(n){return Zi(xo(n.data[0],n.data[1]))},3,t)}function xo(i,e){var t=ql(i);return t+8>i.length&&je(6,"invalid gzip data"),sa(i.subarray(t,-8),{i:2},e&&e.out||new ht(Qd(i)),e&&e.dictionary)}function Sg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),Kr(i,e,[$r,jd,function(){return[kl]}],function(n){return Zi(kl(n.data[0],n.data[1]))},4,t)}function kl(i,e){e||(e={});var t=bo();t.p(i);var n=lr(i,e,e.dictionary?6:2,4);return Zl(n,e),bt(n,n.length-4,t.d()),n}function af(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),Kr(i,e,[Zr,Jd,function(){return[_o]}],function(n){return Zi(_o(n.data[0],Wl(n.data[1])))},5,t)}function _o(i,e){return sa(i.subarray($l(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function Eg(i,e,t){return t||(t=e,e={}),typeof t!="function"&&je(7),i[0]==31&&i[1]==139&&i[2]==8?rf(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?jl(i,e,t):af(i,e,t)}function Tg(i,e){return i[0]==31&&i[1]==139&&i[2]==8?xo(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Jr(i,e):_o(i,e)}function Yi(i,e){if(e){for(var t=new ht(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Dd)return Dd.encode(i);for(var r=i.length,s=new ht(i.length+(i.length>>1)),a=0,o=function(u){s[a++]=u},n=0;n<r;++n){if(a+5>s.length){var l=new ht(a+8+(r-n<<1));l.set(s),s=l}var c=i.charCodeAt(n);c<128||e?o(c):c<2048?(o(192|c>>6),o(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|i.charCodeAt(++n)&1023,o(240|c>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|c&63)):(o(224|c>>12),o(128|c>>6&63),o(128|c&63))}return Bn(s,0,a)}function Ql(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Hl)return Hl.decode(i);var r=cf(i),s=r.s,t=r.r;return t.length&&je(8),s}}function Lg(i,e,t){t||(t=e,e={}),typeof t!="function"&&je(7);var n={};Jl(i,"",n,e);var r=Object.keys(n),s=r.length,a=0,o=0,l=s,c=new Array(s),u=[],d=function(){for(var m=0;m<u.length;++m)u[m]()},h=function(m,f){vo(function(){t(m,f)})};vo(function(){h=t});var p=function(){var m=new ht(o+22),f=a,b=o-a;o=0;for(var M=0;M<l;++M){var x=c[M];try{var S=x.c.length;Gr(m,o,x,x.f,x.u,S);var y=30+x.f.length+qi(x.extra),T=o+y;m.set(x.c,T),Gr(m,a,x,x.f,x.u,S,o,x.m),a+=16+y+(x.m?x.m.length:0),o=T+S}catch(_){return h(_,null)}}eu(m,a,c.length,b,f),h(null,m)};s||p();for(var g=function(m){var f=r[m],b=n[f],M=b[0],x=b[1],S=Yr(),y=M.length;S.p(M);var T=Yi(f),_=T.length,E=x.comment,R=E&&Yi(E),I=R&&R.length,O=qi(x.extra),B=x.level==0?0:8,N=function(V,L){if(V)d(),h(V,null);else{var C=L.length;c[m]=aa(x,{size:y,crc:S.d(),c:L,f:T,m:R,u:_!=f.length||R&&E.length!=I,compression:B}),a+=30+_+O+C,o+=76+2*(_+O)+(I||0)+C,--s||p()}};if(_>65535&&N(je(11,0,1),null),!B)N(null,M);else if(y<16e4)try{N(null,oa(M,x))}catch(V){N(V,null)}else u.push(tf(M,x,N))},v=0;v<l;++v)g(v);return d}function Ng(i,e){e||(e={});var t={},n=[];Jl(i,"",t,e);var r=0,s=0;for(var a in t){var o=t[a],l=o[0],c=o[1],u=c.level==0?0:8,d=Yi(a),h=d.length,p=c.comment,g=p&&Yi(p),v=g&&g.length,m=qi(c.extra);h>65535&&je(11);var f=u?oa(l,c):l,b=f.length,M=Yr();M.p(l),n.push(aa(c,{size:l.length,crc:M.d(),c:f,f:d,m:g,u:h!=a.length||g&&p.length!=v,o:r,compression:u})),r+=30+h+m+b,s+=76+2*(h+m)+(v||0)+b}for(var x=new ht(s+22),S=r,y=s-r,T=0;T<n.length;++T){var d=n[T];Gr(x,d.o,d,d.f,d.u,d.c.length);var _=30+d.f.length+qi(d.extra);x.set(d.c,d.o+_),Gr(x,r,d,d.f,d.u,d.c.length,d.o,d.m),r+=16+_+(d.m?d.m.length:0)}return eu(x,r,n.length,y,S),x}function Og(i,e,t){t||(t=e,e={}),typeof t!="function"&&je(7);var n=[],r=function(){for(var m=0;m<n.length;++m)n[m]()},s={},a=function(m,f){vo(function(){t(m,f)})};vo(function(){a=t});for(var o=i.length-22;Bt(i,o)!=101010256;--o)if(!o||i.length-o>65558)return a(je(13,0,1),null),r;var l=un(i,o+8);if(l){var c=l,u=Bt(i,o+16),d=u==4294967295||c==65535;if(d){var h=Bt(i,o-12);d=Bt(i,h)==101075792,d&&(c=l=Bt(i,h+32),u=Bt(i,h+48))}for(var p=e&&e.filter,g=function(m){var f=hf(i,u,d),b=f[0],M=f[1],x=f[2],S=f[3],y=f[4],T=f[5],_=uf(i,T);u=y;var E=function(I,O){I?(r(),a(I,null)):(O&&(s[S]=O),--l||a(null,s))};if(!p||p({name:S,size:M,originalSize:x,compression:b}))if(!b)E(null,Bn(i,_,_+M));else if(b==8){var R=i.subarray(_,_+M);if(x<524288||M>.8*x)try{E(null,Jr(R,{out:new ht(x)}))}catch(I){E(I,null)}else n.push(jl(R,{size:x},E))}else E(je(14,"unknown compression type "+b,1),null);else E(null,null)},v=0;v<c;++v)g(v)}else a(null,{});return r}function Bg(i,e){for(var t={},n=i.length-22;Bt(i,n)!=101010256;--n)(!n||i.length-n>65558)&&je(13);var r=un(i,n+8);if(!r)return{};var s=Bt(i,n+16),a=s==4294967295||r==65535;if(a){var o=Bt(i,n-12);a=Bt(i,o)==101075792,a&&(r=Bt(i,o+32),s=Bt(i,o+48))}for(var l=e&&e.filter,c=0;c<r;++c){var u=hf(i,s,a),d=u[0],h=u[1],p=u[2],g=u[3],v=u[4],m=u[5],f=uf(i,m);s=v,(!l||l({name:g,size:h,originalSize:p,compression:d}))&&(d?d==8?t[g]=Jr(i.subarray(f,f+h),{out:new ht(p)}):je(14,"unknown compression type "+d):t[g]=Bn(i,f,f+h))}return t}var Nd,xg,ht,hn,ra,Wr,Xr,ta,Fd,Od,Vl,po,Bd,kd,Nl,na,bi,Mt,On,Mi,Mt,Mt,Mt,Mt,Vr,Mt,zd,Hd,Vd,Gd,uo,Fn,ho,qr,Bn,yg,Wd,je,sa,si,zr,fo,mo,Ul,Hr,Gl,Dl,Xd,Xi,qd,Yd,Yr,bo,lr,aa,Ud,lo,_g,Zd,Zr,$r,$d,Kd,jd,Jd,Zi,Wl,Kr,zn,jr,un,Bt,Ll,bt,Xl,ql,Qd,Yl,Zl,$l,kn,ef,gn,Kl,Fl,vg,go,nf,Bl,Mg,yo,sf,zl,wg,Jl,Dd,Hl,of,cf,Ag,Rg,lf,uf,hf,df,qi,Gr,eu,ia,Cg,Ig,Pg,ff,Ug,Dg,Fg,vo,mf=hg(()=>{Nd={},xg=(function(i,e,t,n,r){var s=new Worker(Nd[e]||(Nd[e]=URL.createObjectURL(new Blob([i+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return s.onmessage=function(a){var o=a.data,l=o.$e$;if(l){var c=new Error(l[0]);c.code=l[1],c.stack=l[2],r(c,null)}else r(null,o)},s.postMessage(t,n),s}),ht=Uint8Array,hn=Uint16Array,ra=Int32Array,Wr=new ht([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xr=new ht([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ta=new ht([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fd=function(i,e){for(var t=new hn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new ra(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Od=Fd(Wr,2),Vl=Od.b,po=Od.r;Vl[28]=258,po[258]=28;Bd=Fd(Xr,0),kd=Bd.b,Nl=Bd.r,na=new hn(32768);for(Mt=0;Mt<32768;++Mt)bi=(Mt&43690)>>1|(Mt&21845)<<1,bi=(bi&52428)>>2|(bi&13107)<<2,bi=(bi&61680)>>4|(bi&3855)<<4,na[Mt]=((bi&65280)>>8|(bi&255)<<8)>>1;On=(function(i,e,t){for(var n=i.length,r=0,s=new hn(e);r<n;++r)i[r]&&++s[i[r]-1];var a=new hn(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new hn(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],d=a[i[r]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)o[na[d]>>l]=c}else for(o=new hn(n),r=0;r<n;++r)i[r]&&(o[r]=na[a[i[r]-1]++]>>15-i[r]);return o}),Mi=new ht(288);for(Mt=0;Mt<144;++Mt)Mi[Mt]=8;for(Mt=144;Mt<256;++Mt)Mi[Mt]=9;for(Mt=256;Mt<280;++Mt)Mi[Mt]=7;for(Mt=280;Mt<288;++Mt)Mi[Mt]=8;Vr=new ht(32);for(Mt=0;Mt<32;++Mt)Vr[Mt]=5;zd=On(Mi,9,0),Hd=On(Mi,9,1),Vd=On(Vr,5,0),Gd=On(Vr,5,1),uo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Fn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},ho=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},qr=function(i){return(i+7)/8|0},Bn=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new ht(i.subarray(e,t))},yg={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14},Wd=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],je=function(i,e,t){var n=new Error(e||Wd[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,je),!t)throw n;return n},sa=function(i,e,t,n){var r=i.length,s=n?n.length:0;if(!r||e.f&&!e.l)return t||new ht(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new ht(r*3));var c=function(ge){var pe=t.length;if(ge>pe){var we=new ht(Math.max(pe*2,ge));we.set(t),t=we}},u=e.f||0,d=e.p||0,h=e.b||0,p=e.l,g=e.d,v=e.m,m=e.n,f=r*8;do{if(!p){u=Fn(i,d,1);var b=Fn(i,d+1,3);if(d+=3,b)if(b==1)p=Hd,g=Gd,v=9,m=5;else if(b==2){var y=Fn(i,d,31)+257,T=Fn(i,d+10,15)+4,_=y+Fn(i,d+5,31)+1;d+=14;for(var E=new ht(_),R=new ht(19),I=0;I<T;++I)R[ta[I]]=Fn(i,d+I*3,7);d+=T*3;for(var O=uo(R),B=(1<<O)-1,N=On(R,O,1),I=0;I<_;){var V=N[Fn(i,d,B)];d+=V&15;var M=V>>4;if(M<16)E[I++]=M;else{var L=0,C=0;for(M==16?(C=3+Fn(i,d,3),d+=2,L=E[I-1]):M==17?(C=3+Fn(i,d,7),d+=3):M==18&&(C=11+Fn(i,d,127),d+=7);C--;)E[I++]=L}}var $=E.subarray(0,y),F=E.subarray(y);v=uo($),m=uo(F),p=On($,v,1),g=On(F,m,1)}else je(1);else{var M=qr(d)+4,x=i[M-4]|i[M-3]<<8,S=M+x;if(S>r){l&&je(0);break}o&&c(h+x),t.set(i.subarray(M,S),h),e.b=h+=x,e.p=d=S*8,e.f=u;continue}if(d>f){l&&je(0);break}}o&&c(h+131072);for(var U=(1<<v)-1,G=(1<<m)-1,ce=d;;ce=d){var L=p[ho(i,d)&U],de=L>>4;if(d+=L&15,d>f){l&&je(0);break}if(L||je(2),de<256)t[h++]=de;else if(de==256){ce=d,p=null;break}else{var he=de-254;if(de>264){var I=de-257,q=Wr[I];he=Fn(i,d,(1<<q)-1)+Vl[I],d+=q}var ue=g[ho(i,d)&G],H=ue>>4;ue||je(3),d+=ue&15;var F=kd[H];if(H>3){var q=Xr[H];F+=ho(i,d)&(1<<q)-1,d+=q}if(d>f){l&&je(0);break}o&&c(h+131072);var J=h+he;if(h<F){var _e=s-F,Fe=Math.min(F,J);for(_e+h<0&&je(3);h<Fe;++h)t[h]=n[_e+h]}for(;h<J;++h)t[h]=t[h-F]}}e.l=p,e.p=ce,e.b=h,e.f=u,p&&(u=1,e.m=v,e.d=g,e.n=m)}while(!u);return h!=t.length&&a?Bn(t,0,h):t.subarray(0,h)},si=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},zr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},fo=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:Xi,l:0};if(r==1){var a=new ht(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(S,y){return S.f-y.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,u=1,d=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};u!=r-1;)o=t[t[c].f<t[d].f?c++:d++],l=t[c!=u&&t[c].f<t[d].f?c++:d++],t[u++]={s:-1,f:o.f+l.f,l:o,r:l};for(var h=s[0].s,n=1;n<r;++n)s[n].s>h&&(h=s[n].s);var p=new hn(h+1),g=mo(t[u-1],p,0);if(g>e){var n=0,v=0,m=g-e,f=1<<m;for(s.sort(function(y,T){return p[T.s]-p[y.s]||y.f-T.f});n<r;++n){var b=s[n].s;if(p[b]>e)v+=f-(1<<g-p[b]),p[b]=e;else break}for(v>>=m;v>0;){var M=s[n].s;p[M]<e?v-=1<<e-p[M]++-1:++n}for(;n>=0&&v;--n){var x=s[n].s;p[x]==e&&(--p[x],++v)}g=e}return{t:new ht(p),l:g}},mo=function(i,e,t){return i.s==-1?Math.max(mo(i.l,e,t+1),mo(i.r,e,t+1)):e[i.s]=t},Ul=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new hn(++e),n=0,r=i[0],s=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(i[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=i[o]}return{c:t.subarray(0,n),n:e}},Hr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Gl=function(i,e,t){var n=t.length,r=qr(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Dl=function(i,e,t,n,r,s,a,o,l,c,u){si(e,u++,t),++r[256];for(var d=fo(r,15),h=d.t,p=d.l,g=fo(s,15),v=g.t,m=g.l,f=Ul(h),b=f.c,M=f.n,x=Ul(v),S=x.c,y=x.n,T=new hn(19),_=0;_<b.length;++_)++T[b[_]&31];for(var _=0;_<S.length;++_)++T[S[_]&31];for(var E=fo(T,7),R=E.t,I=E.l,O=19;O>4&&!R[ta[O-1]];--O);var B=c+5<<3,N=Hr(r,Mi)+Hr(s,Vr)+a,V=Hr(r,h)+Hr(s,v)+a+14+3*O+Hr(T,R)+2*T[16]+3*T[17]+7*T[18];if(l>=0&&B<=N&&B<=V)return Gl(e,u,i.subarray(l,l+c));var L,C,$,F;if(si(e,u,1+(V<N)),u+=2,V<N){L=On(h,p,0),C=h,$=On(v,m,0),F=v;var U=On(R,I,0);si(e,u,M-257),si(e,u+5,y-1),si(e,u+10,O-4),u+=14;for(var _=0;_<O;++_)si(e,u+3*_,R[ta[_]]);u+=3*O;for(var G=[b,S],ce=0;ce<2;++ce)for(var de=G[ce],_=0;_<de.length;++_){var he=de[_]&31;si(e,u,U[he]),u+=R[he],he>15&&(si(e,u,de[_]>>5&127),u+=de[_]>>12)}}else L=zd,C=Mi,$=Vd,F=Vr;for(var _=0;_<o;++_){var q=n[_];if(q>255){var he=q>>18&31;zr(e,u,L[he+257]),u+=C[he+257],he>7&&(si(e,u,q>>23&31),u+=Wr[he]);var ue=q&31;zr(e,u,$[ue]),u+=F[ue],ue>3&&(zr(e,u,q>>5&8191),u+=Xr[ue])}else zr(e,u,L[q]),u+=C[q]}return zr(e,u,L[256]),u+C[256]},Xd=new ra([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Xi=new ht(0),qd=function(i,e,t,n,r,s){var a=s.z||i.length,o=new ht(n+a+5*(1+Math.ceil(a/7e3))+r),l=o.subarray(n,o.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var d=Xd[e-1],h=d>>13,p=d&8191,g=(1<<t)-1,v=s.p||new hn(32768),m=s.h||new hn(g+1),f=Math.ceil(t/3),b=2*f,M=function(be){return(i[be]^i[be+1]<<f^i[be+2]<<b)&g},x=new ra(25e3),S=new hn(288),y=new hn(32),T=0,_=0,E=s.i||0,R=0,I=s.w||0,O=0;E+2<a;++E){var B=M(E),N=E&32767,V=m[B];if(v[N]=V,m[B]=N,I<=E){var L=a-E;if((T>7e3||R>24576)&&(L>423||!c)){u=Dl(i,l,0,x,S,y,_,R,O,E-O,u),R=T=_=0,O=E;for(var C=0;C<286;++C)S[C]=0;for(var C=0;C<30;++C)y[C]=0}var $=2,F=0,U=p,G=N-V&32767;if(L>2&&B==M(E-G))for(var ce=Math.min(h,L)-1,de=Math.min(32767,E),he=Math.min(258,L);G<=de&&--U&&N!=V;){if(i[E+$]==i[E+$-G]){for(var q=0;q<he&&i[E+q]==i[E+q-G];++q);if(q>$){if($=q,F=G,q>ce)break;for(var ue=Math.min(G,q-2),H=0,C=0;C<ue;++C){var J=E-G+C&32767,_e=v[J],Fe=J-_e&32767;Fe>H&&(H=Fe,V=J)}}}N=V,V=v[N],G+=N-V&32767}if(F){x[R++]=268435456|po[$]<<18|Nl[F];var ge=po[$]&31,pe=Nl[F]&31;_+=Wr[ge]+Xr[pe],++S[257+ge],++y[pe],I=E+$,++T}else x[R++]=i[E],++S[i[E]]}}for(E=Math.max(E,I);E<a;++E)x[R++]=i[E],++S[i[E]];u=Dl(i,l,c,x,S,y,_,R,O,E-O,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=m,s.p=v,s.i=E,s.w=I)}else{for(var E=s.w||0;E<a+c;E+=65535){var we=E+65535;we>=a&&(l[u/8|0]=c,we=a),u=Gl(l,u+1,i.subarray(E,we))}s.i=a}return Bn(o,0,n+qr(u)+r)},Yd=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),Yr=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Yd[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},bo=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length|0,a=0;a!=s;){for(var o=Math.min(a+2655,s);a<o;++a)r+=n+=t[a];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|(i&65280)<<8|(e&255)<<8|e>>8}}},lr=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new ht(s.length+i.length);a.set(s),a.set(i,s.length),i=a,r.w=s.length}return qd(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},aa=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Ud=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var o=n[a],l=s[a];if(typeof o=="function"){e+=";"+l+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var d in o.prototype)e+=";"+l+".prototype."+d+"="+o.prototype[d].toString()}else e+=c}else t[l]=o}return e},lo=[],_g=function(i){var e=[];for(var t in i)i[t].buffer&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},Zd=function(i,e,t,n){if(!lo[t]){for(var r="",s={},a=i.length-1,o=0;o<a;++o)r=Ud(i[o],r,s);lo[t]={c:Ud(i[a],r,s),e:s}}var l=aa({},lo[t].e);return xg(lo[t].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,l,_g(l),n)},Zr=function(){return[ht,hn,ra,Wr,Xr,ta,Vl,kd,Hd,Gd,na,Wd,On,uo,Fn,ho,qr,Bn,je,sa,Jr,Zi,Wl]},$r=function(){return[ht,hn,ra,Wr,Xr,ta,po,Nl,zd,Mi,Vd,Vr,na,Xd,Xi,On,si,zr,fo,mo,Ul,Hr,Gl,Dl,qr,Bn,qd,lr,oa,Zi]},$d=function(){return[Xl,Yl,bt,Yr,Yd]},Kd=function(){return[ql,Qd]},jd=function(){return[Zl,bt,bo]},Jd=function(){return[$l]},Zi=function(i){return postMessage(i,[i.buffer])},Wl=function(i){return i&&{out:i.size&&new ht(i.size),dictionary:i.dictionary}},Kr=function(i,e,t,n,r,s){var a=Zd(t,n,r,function(o,l){a.terminate(),s(o,l)});return a.postMessage([i,e],e.consume?[i.buffer]:[]),function(){a.terminate()}},zn=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){e.data.length?(i.push(e.data[0],e.data[1]),postMessage([e.data[0].length])):i.flush()}},jr=function(i,e,t,n,r,s,a){var o,l=Zd(i,n,r,function(c,u){c?(l.terminate(),e.ondata.call(e,c)):Array.isArray(u)?u.length==1?(e.queuedSize-=u[0],e.ondrain&&e.ondrain(u[0])):(u[1]&&l.terminate(),e.ondata.call(e,c,u[0],u[1])):a(u)});l.postMessage(t),e.queuedSize=0,e.push=function(c,u){e.ondata||je(5),o&&e.ondata(je(4,0,1),null,!!u),e.queuedSize+=c.length,l.postMessage([c,o=u],[c.buffer])},e.terminate=function(){l.terminate()},s&&(e.flush=function(){l.postMessage([])})},un=function(i,e){return i[e]|i[e+1]<<8},Bt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},Ll=function(i,e){return Bt(i,e)+Bt(i,e+4)*4294967296},bt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},Xl=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&bt(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},ql=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&je(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Qd=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Yl=function(i){return 10+(i.filename?i.filename.length+1:0)},Zl=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;if(i[0]=120,i[1]=n<<6|(e.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,e.dictionary){var r=bo();r.p(e.dictionary),bt(i,2,r.d())}},$l=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&je(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&je(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};kn=(function(){function i(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new ht(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return i.prototype.p=function(e,t){this.ondata(lr(e,this.o,0,0,this.s),t)},i.prototype.push=function(e,t){this.ondata||je(5),this.s.l&&je(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new ht(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var s=this.b.length-this.s.z;this.b.set(e.subarray(0,s),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(s),32768),this.s.z=e.length-s+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2)},i.prototype.flush=function(){this.ondata||je(5),this.s.l&&je(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2},i})(),ef=(function(){function i(e,t){jr([$r,function(){return[zn,kn]}],this,ur.call(this,e,t),function(n){var r=new kn(n.data);onmessage=zn(r)},6,1)}return i})();gn=(function(){function i(e,t){typeof e=="function"&&(t=e,e={}),this.ondata=t;var n=e&&e.dictionary&&e.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new ht(32768),this.p=new ht(0),n&&this.o.set(n)}return i.prototype.e=function(e){if(this.ondata||je(5),this.d&&je(4),!this.p.length)this.p=e;else if(e.length){var t=new ht(this.p.length+e.length);t.set(this.p),t.set(e,this.p.length),this.p=t}},i.prototype.c=function(e){this.s.i=+(this.d=e||!1);var t=this.s.b,n=sa(this.p,this.s,this.o);this.ondata(Bn(n,t,this.s.b),this.d),this.o=Bn(n,this.s.b-32768),this.s.b=this.o.length,this.p=Bn(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i})(),Kl=(function(){function i(e,t){jr([Zr,function(){return[zn,gn]}],this,ur.call(this,e,t),function(n){var r=new gn(n.data);onmessage=zn(r)},7,0)}return i})();Fl=(function(){function i(e,t){this.c=Yr(),this.l=0,this.v=1,kn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),this.l+=e.length,kn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=lr(e,this.o,this.v&&Yl(this.o),t&&8,this.s);this.v&&(Xl(n,this.o),this.v=0),t&&(bt(n,n.length-8,this.c.d()),bt(n,n.length-4,this.l)),this.ondata(n,t)},i.prototype.flush=function(){kn.prototype.flush.call(this)},i})(),vg=(function(){function i(e,t){jr([$r,$d,function(){return[zn,kn,Fl]}],this,ur.call(this,e,t),function(n){var r=new Fl(n.data);onmessage=zn(r)},8,1)}return i})();go=(function(){function i(e,t){this.v=1,this.r=0,gn.call(this,e,t)}return i.prototype.push=function(e,t){if(gn.prototype.e.call(this,e),this.r+=e.length,this.v){var n=this.p.subarray(this.v-1),r=n.length>3?ql(n):4;if(r>n.length){if(!t)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(r),this.v=0}gn.prototype.c.call(this,t),this.s.f&&!this.s.l&&!t&&(this.v=qr(this.s.p)+9,this.s={i:0},this.o=new ht(0),this.push(new ht(0),t))},i})(),nf=(function(){function i(e,t){var n=this;jr([Zr,Kd,function(){return[zn,gn,go]}],this,ur.call(this,e,t),function(r){var s=new go(r.data);s.onmember=function(a){return postMessage(a)},onmessage=zn(s)},9,0,function(r){return n.onmember&&n.onmember(r)})}return i})();Bl=(function(){function i(e,t){this.c=bo(),this.v=1,kn.call(this,e,t)}return i.prototype.push=function(e,t){this.c.p(e),kn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){var n=lr(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&(Zl(n,this.o),this.v=0),t&&bt(n,n.length-4,this.c.d()),this.ondata(n,t)},i.prototype.flush=function(){kn.prototype.flush.call(this)},i})(),Mg=(function(){function i(e,t){jr([$r,jd,function(){return[zn,kn,Bl]}],this,ur.call(this,e,t),function(n){var r=new Bl(n.data);onmessage=zn(r)},10,1)}return i})();yo=(function(){function i(e,t){gn.call(this,e,t),this.v=e&&e.dictionary?2:1}return i.prototype.push=function(e,t){if(gn.prototype.e.call(this,e),this.v){if(this.p.length<6&&!t)return;this.p=this.p.subarray($l(this.p,this.v-1)),this.v=0}t&&(this.p.length<4&&je(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),gn.prototype.c.call(this,t)},i})(),sf=(function(){function i(e,t){jr([Zr,Jd,function(){return[zn,gn,yo]}],this,ur.call(this,e,t),function(n){var r=new yo(n.data);onmessage=zn(r)},11,0)}return i})();zl=(function(){function i(e,t){this.o=ur.call(this,e,t)||{},this.G=go,this.I=gn,this.Z=yo}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n){e.ondata(t,n)}},i.prototype.push=function(e,t){if(this.ondata||je(5),this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new ht(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;this.p.length>2&&(this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(this.o):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(this.o):new this.Z(this.o),this.i(),this.s.push(this.p,t),this.p=null)}},i})(),wg=(function(){function i(e,t){zl.call(this,e,t),this.queuedSize=0,this.G=nf,this.I=Kl,this.Z=sf}return i.prototype.i=function(){var e=this;this.s.ondata=function(t,n,r){e.ondata(t,n,r)},this.s.ondrain=function(t){e.queuedSize-=t,e.ondrain&&e.ondrain(t)}},i.prototype.push=function(e,t){this.queuedSize+=e.length,zl.prototype.push.call(this,e,t)},i})();Jl=function(i,e,t,n){for(var r in i){var s=i[r],a=e+r,o=n;Array.isArray(s)&&(o=aa(n,s[1]),s=s[0]),s instanceof ht?t[a]=[s,o]:(t[a+="/"]=[new ht(0),o],Jl(s,a,t,n))}},Dd=typeof TextEncoder<"u"&&new TextEncoder,Hl=typeof TextDecoder<"u"&&new TextDecoder,of=0;try{Hl.decode(Xi,{stream:!0}),of=1}catch{}cf=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:Bn(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},Ag=(function(){function i(e){this.ondata=e,of?this.t=new TextDecoder:this.p=Xi}return i.prototype.push=function(e,t){if(this.ondata||je(5),t=!!t,this.t){this.ondata(this.t.decode(e,{stream:!0}),t),t&&(this.t.decode().length&&je(8),this.t=null);return}this.p||je(4);var n=new ht(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=cf(n),s=r.s,a=r.r;t?(a.length&&je(8),this.p=null):this.p=a,this.ondata(s,t)},i})(),Rg=(function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){this.ondata||je(5),this.d&&je(4),this.ondata(Yi(e),this.d=t||!1)},i})();lf=function(i){return i==1?3:i<6?2:i==9?1:0},uf=function(i,e){return e+30+un(i,e+26)+un(i,e+28)},hf=function(i,e,t){var n=un(i,e+28),r=Ql(i.subarray(e+46,e+46+n),!(un(i,e+8)&2048)),s=e+46+n,a=Bt(i,e+20),o=t&&a==4294967295?df(i,s):[a,Bt(i,e+24),Bt(i,e+42)],l=o[0],c=o[1],u=o[2];return[un(i,e+10),l,c,r,s+un(i,e+30)+un(i,e+32),u]},df=function(i,e){for(;un(i,e)!=1;e+=4+un(i,e+2));return[Ll(i,e+12),Ll(i,e+4),Ll(i,e+20)]},qi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&je(9),e+=n+4}return e},Gr=function(i,e,t,n,r,s,a,o){var l=n.length,c=t.extra,u=o&&o.length,d=qi(c);bt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var h=new Date(t.mtime==null?Date.now():t.mtime),p=h.getFullYear()-1980;if((p<0||p>119)&&je(10),bt(i,e,p<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>1),e+=4,s!=-1&&(bt(i,e,t.crc),bt(i,e+4,s<0?-s-2:s),bt(i,e+8,t.size)),bt(i,e+12,l),bt(i,e+14,d),e+=16,a!=null&&(bt(i,e,u),bt(i,e+6,t.attrs),bt(i,e+10,a),e+=14),i.set(n,e),e+=l,d)for(var g in c){var v=c[g],m=v.length;bt(i,e,+g),bt(i,e+2,m),i.set(v,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},eu=function(i,e,t,n,r){bt(i,e,101010256),bt(i,e+8,t),bt(i,e+10,t),bt(i,e+12,n),bt(i,e+16,r)},ia=(function(){function i(e){this.filename=e,this.c=Yr(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){this.ondata||je(5),this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i})(),Cg=(function(){function i(e,t){var n=this;t||(t={}),ia.call(this,e),this.d=new kn(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=lf(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){ia.prototype.push.call(this,e,t)},i})(),Ig=(function(){function i(e,t){var n=this;t||(t={}),ia.call(this,e),this.d=new ef(t,function(r,s,a){n.ondata(r,s,a)}),this.compression=8,this.flag=lf(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){ia.prototype.push.call(this,e,t)},i})(),Pg=(function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.ondata||je(5),this.d&2)this.ondata(je(4+(this.d&1)*8,0,1),null,!1);else{var n=Yi(e.filename),r=n.length,s=e.comment,a=s&&Yi(s),o=r!=e.filename.length||a&&s.length!=a.length,l=r+qi(e.extra)+30;r>65535&&this.ondata(je(11,0,1),null,!1);var c=new ht(l);Gr(c,0,e,n,o,-1);var u=[c],d=function(){for(var m=0,f=u;m<f.length;m++){var b=f[m];t.ondata(null,b,!1)}u=[]},h=this.d;this.d=0;var p=this.u.length,g=aa(e,{f:n,u:o,o:a,t:function(){e.terminate&&e.terminate()},r:function(){if(d(),h){var m=t.u[p+1];m?m.r():t.d=1}h=1}}),v=0;e.ondata=function(m,f,b){if(m)t.ondata(m,f,b),t.terminate();else if(v+=f.length,u.push(f),b){var M=new ht(16);bt(M,0,134695760),bt(M,4,e.crc),bt(M,8,v),bt(M,12,e.size),u.push(M),g.c=v,g.b=l+v+16,g.crc=e.crc,g.size=e.size,h&&g.r(),h=1}else h&&d()},this.u.push(g)}},i.prototype.end=function(){var e=this;if(this.d&2){this.ondata(je(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var a=s[r];n+=46+a.f.length+qi(a.extra)+(a.o?a.o.length:0)}for(var o=new ht(n+22),l=0,c=this.u;l<c.length;l++){var a=c[l];Gr(o,e,a,a.f,a.u,-a.c-2,t,a.o),e+=46+a.f.length+qi(a.extra)+(a.o?a.o.length:0),t+=a.b}eu(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i})();ff=(function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i})(),Ug=(function(){function i(){var e=this;this.i=new gn(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,null,t)}},i.compression=8,i})(),Dg=(function(){function i(e,t){var n=this;t<32e4?this.i=new gn(function(r,s){n.ondata(null,r,s)}):(this.i=new Kl(function(r,s,a){n.ondata(r,s,a)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=Bn(e,0)),this.i.push(e,t)},i.compression=8,i})(),Fg=(function(){function i(e){this.onfile=e,this.k=[],this.o={0:ff},this.p=Xi}return i.prototype.push=function(e,t){var n=this;if(this.onfile||je(5),this.p||je(4),this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var a=0,o=0,l=void 0,c=void 0;this.p.length?e.length?(c=new ht(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var u=c.length,d=this.c,h=d&&this.d,p=function(){var f,b=Bt(c,o);if(b==67324752){a=1,l=o,g.d=null,g.c=0;var M=un(c,o+6),x=un(c,o+8),S=M&2048,y=M&8,T=un(c,o+26),_=un(c,o+28);if(u>o+30+T+_){var E=[];g.k.unshift(E),a=2;var R=Bt(c,o+18),I=Bt(c,o+22),O=Ql(c.subarray(o+30,o+=30+T),!S);R==4294967295?(f=y?[-2]:df(c,o),R=f[0],I=f[1]):y&&(R=-1),o+=_,g.c=R;var B,N={name:O,compression:x,start:function(){if(N.ondata||je(5),!R)N.ondata(null,Xi,!0);else{var V=n.o[x];V||N.ondata(je(14,"unknown compression type "+x,1),null,!1),B=R<0?new V(O):new V(O,R,I),B.ondata=function(F,U,G){N.ondata(F,U,G)};for(var L=0,C=E;L<C.length;L++){var $=C[L];B.push($,!1)}n.k[0]==E&&n.c?n.d=B:B.push(Xi,!0)}},terminate:function(){B&&B.terminate&&B.terminate()}};R>=0&&(N.size=R,N.originalSize=I),g.onfile(N)}return"break"}else if(d){if(b==134695760)return l=o+=12+(d==-2&&8),a=3,g.c=0,"break";if(b==33639248)return l=o-=4,a=3,g.c=0,"break"}},g=this;o<u-4;++o){var v=p();if(v==="break")break}if(this.p=Xi,d<0){var m=a?c.subarray(0,l-12-(d==-2&&8)-(Bt(c,l-16)==134695760&&4)):c.subarray(0,o);h?h.push(m,!!a):this.k[+(a==2)].push(m)}if(a&2)return this.push(c.subarray(o),t);this.p=c.subarray(o)}t&&(this.c&&je(13),this.p=null)},i.prototype.register=function(e){this.o[e.compression]=e},i})(),vo=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(i){i()}});function oo(i,e){return(i.offset||0)+Math.max(0,e-i.start)/1e3*(i.rate||1)}function wd(i,e,t){!i||i.kind!=="standing-dance"||(i.offset=oo(i,t),i.start=t,i.rate=e)}function Ed(i){let e="enya-dance-playback-v1",t={tempo:1,amplitude:1},n=null,r={};function s(c,u,d,h){return Number.isFinite(c)?Math.max(u,Math.min(d,c)):h}function a(c){let u={tempo:s(c.tempo,.5,1.5,t.tempo),amplitude:s(c.amplitude,.5,1.2,t.amplitude)};i?.(u),t=u;try{localStorage.setItem(e,JSON.stringify(t))}catch{}for(let d of Object.keys(r))r[d].input.value=t[d],r[d].output.textContent=t[d].toFixed(2)+"\xD7"}try{let c=JSON.parse(localStorage.getItem(e)||"{}");t={tempo:s(c.tempo,.5,1.5,1),amplitude:s(c.amplitude,.5,1.2,1)}}catch{}function o(){n&&(n.hidden=!0)}function l(){if(n){n.hidden=!n.hidden;return}n=document.createElement("section"),n.style.cssText="position:fixed;top:13%;left:6%;right:6%;z-index:9;background:#24212bf5;color:white;padding:20px;border:1px solid #666;border-radius:20px;font:16px -apple-system,sans-serif";let c=document.createElement("h3");c.textContent="\u821E\u8E48\u5E45\u5EA6\u4E0E\u8282\u594F",n.append(c);let u=document.createElement("p");u.textContent="1\xD7 \u4F7F\u7528\u9ED8\u8BA4\u5E45\u5EA6\u548C\u52A8\u4F5C\u6E90\u539F\u901F\u3002\u901F\u5EA6\u53D8\u5316\u4FDD\u6301\u5F53\u524D\u52A8\u4F5C\u8FDB\u5EA6\u3002",n.append(u);for(let[d,h,p,g]of[["amplitude","\u52A8\u4F5C\u5E45\u5EA6",.5,1.2],["tempo","\u64AD\u653E\u901F\u5EA6",.5,1.5]]){let v=document.createElement("label"),m=document.createElement("span"),f=document.createElement("output"),b=document.createElement("input");m.textContent=h+" ",f.textContent=t[d].toFixed(2)+"\xD7",b.type="range",b.min=p,b.max=g,b.step=.05,b.value=t[d],b.style.cssText="display:block;width:100%;margin:14px 0",b.setAttribute("aria-label",h),b.oninput=()=>a({...t,[d]:Number(b.value)}),v.append(m,f,b),n.append(v),r[d]={input:b,output:f}}for(let[d,h]of[["\u6062\u590D\u539F\u901F\u4E0E\u539F\u5E45\u5EA6",()=>a({tempo:1,amplitude:1})],["\u5B8C\u6210",o]]){let p=document.createElement("button");p.textContent=d,p.onclick=h,n.append(p)}document.body.append(n)}return{get:()=>({...t}),set:a,toggle:l,close:o}}function Td(i,e){let t=document.createElement("section");t.id="lightingEditor",t.hidden=!0,t.style.cssText="position:fixed;left:5%;right:5%;bottom:21%;padding:18px;border-radius:20px;background:#211e29f5;color:white;z-index:10";let n=document.createElement("h3");n.textContent="\u91C7\u5149\u4E0E\u6750\u8D28",t.append(n);let r=new Map,s={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:1.9,fill:1,rim:.9},a,o;function l(){let f=i.lightingState();for(let[b,M]of r)M.value=f[b];a&&(a.checked=f.shadows),o&&(o.value=f.shadowSize)}function c(f){i.setLighting(f),localStorage.setItem(e,JSON.stringify(i.lightingState())),l()}try{i.setLighting(JSON.parse(localStorage.getItem(e))||s)}catch{i.setLighting(s)}for(let[f,b,M,x]of[["exposure","\u753B\u9762\u4EAE\u5EA6",.65,1.45],["warmth","\u51B7\u6696\u91C7\u5149",0,1],["reflection","\u6750\u8D28\u9AD8\u5149",0,1.5],["key","\u4E3B\u5149\u5F3A\u5EA6",0,3],["fill","\u8865\u5149\u5F3A\u5EA6",0,3],["rim","\u8F6E\u5ED3\u5149",0,3]]){let S=document.createElement("label");S.textContent=b;let y=document.createElement("input");y.id="lighting_"+f,y.type="range",y.min=M,y.max=x,y.step=".01",y.style.width="100%",y.oninput=()=>c({[f]:Number(y.value)}),r.set(f,y),S.append(y),t.append(S)}for(let[f,b]of[["\u6062\u590D\u67D4\u5149",()=>c(s)],["\u5B8C\u6210",()=>{t.hidden=!0}]]){let M=document.createElement("button");M.textContent=f,M.onclick=b,t.append(M)}let u=document.createElement("label");u.textContent="\u67D4\u548C\u6295\u5F71",a=document.createElement("input"),a.type="checkbox",a.id="lighting_shadows",a.checked=i.lightingState().shadows,a.onchange=()=>c({shadows:a.checked}),u.append(a),t.append(u);let d=document.createElement("label");d.textContent="\u8D34\u56FE\u6E05\u6670\u5EA6\uFF08\u91CD\u65B0\u6253\u5F00\u540E\u751F\u6548\uFF09";let h=document.createElement("select");h.id="lighting_resolution",h.add(new Option("\u6700\u9AD84K \xB7 \u81EA\u52A8\u663E\u5B58\u9884\u7B97","4096")),h.add(new Option("2K \xB7 \u8282\u7701\u663E\u5B58","2048")),h.value=localStorage.getItem("snowTextureLimit")==="2048"?"2048":"4096",h.onchange=()=>localStorage.setItem("snowTextureLimit",h.value),d.append(h),t.append(d),o=document.createElement("select"),o.id="lighting_shadowSize";for(let f of[512,1024,2048])o.add(new Option(f+" \xB7 \u9634\u5F71",String(f)));o.value=i.lightingState().shadowSize,o.onchange=()=>c({shadowSize:Number(o.value)}),t.append(o);let p=document.createElement("select");p.id="renderBudget";for(let[f,b]of[["quality","\u6027\u80FD\u6A21\u5F0F \xB7 60\u5E27\u6EE1\u753B\u8D28 / 1G\u663E\u5B58"],["adaptive","\u666E\u901A\u6A21\u5F0F \xB7 \u667A\u80FD\u5E73\u8861 / 512M\u663E\u5B58"],["battery","\u7701\u7535\u6A21\u5F0F \xB7 30\u5E27\u4F4E\u8017 / 192M\u663E\u5B58"]])p.add(new Option(b,f));p.value=i.performanceState().mode,p.onchange=()=>{localStorage.setItem("snowRenderMode",p.value),i.setRenderBudget({mode:p.value})},t.append(p);let g=document.createElement("pre");g.style.cssText="white-space:pre-wrap;font-size:12px",g.id="renderMetrics",t.append(g);let v=()=>{let f=i.performanceState(),b=i.textureBudgetState?.(),M=f.mode==="quality"?"\u6027\u80FD\u6A21\u5F0F":f.mode==="battery"?"\u7701\u7535\u6A21\u5F0F":"\u666E\u901A\u6A21\u5F0F";g.textContent=`GPU \u6E32\u67D3 \xB7 ${M} \xB7 ${f.fps}\u5E27\uFF08\u76EE\u6807${f.targetFPS}\uFF09
\u7F13\u51B2 ${f.drawingBuffer.join("\xD7")} \xB7 \u6BD4\u4F8B ${f.pixelRatio.toFixed(2)}
\u8D34\u56FE\u9884\u7B97 ${b?`${b.estimatedMiB}/${b.budgetMiB} MiB`:"\u2014"} \xB7 \u9634\u5F71 ${i.lightingState().shadowMapSize}px
\u7ED8\u5236 ${f.drawCalls} \xB7 \u4E09\u89D2\u5F62 ${f.triangles}
\u70ED\u72B6\u6001 ${f.thermal} \xB7 ${f.lowPower?"\u4F4E\u7535\u91CF\u6A21\u5F0F":"\u6B63\u5E38\u4F9B\u7535\u7B56\u7565"}`},m=setInterval(()=>{t.hidden||v()},1e3);return t.style.maxHeight="58vh",t.style.overflowY="auto",document.body.append(t),l(),{toggle(){t.hidden=!t.hidden,v()},close(){t.hidden=!0},dispose(){clearInterval(m),t.remove()}}}function Ad(i,e=""){let t=String(i||"");return!(!/^[a-z0-9_./-]+$/i.test(t)||t.startsWith("/")||t.includes("\\")||t.split("/").some(n=>!n||n==="."||n==="..")||e&&!t.startsWith(e))}var fg=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ri=(i,e)=>i>>>e|i<<32-e;function pg(i){if(!(i instanceof Uint8Array)||i.length>32*1024*1024)throw new Error("SHA-256 input limit");let e=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),t=new Uint32Array(64),n=64*Math.ceil((i.length+9)/64),r=new Uint8Array(64),s=new DataView(r.buffer);for(let a=0;a<n;a+=64){r.fill(0),r.set(i.subarray(a,a+64)),i.length>=a&&i.length<a+64&&(r[i.length-a]=128),a+64===n&&(s.setUint32(56,Math.floor(i.length/536870912)),s.setUint32(60,i.length*8>>>0));for(let m=0;m<16;m++)t[m]=s.getUint32(m*4);for(let m=16;m<64;m++){let f=t[m-15],b=t[m-2];t[m]=(ri(f,7)^ri(f,18)^f>>>3)+t[m-16]+(ri(b,17)^ri(b,19)^b>>>10)+t[m-7]}let[o,l,c,u,d,h,p,g]=e;for(let m=0;m<64;m++){let f=g+(ri(d,6)^ri(d,11)^ri(d,25))+(d&h^~d&p)+fg[m]+t[m]>>>0,b=(ri(o,2)^ri(o,13)^ri(o,22))+(o&l^o&c^l&c)>>>0;g=p,p=h,h=d,d=u+f>>>0,u=c,c=l,l=o,o=f+b>>>0}let v=[o,l,c,u,d,h,p,g];for(let m=0;m<8;m++)e[m]+=v[m]}return Array.from(e,a=>a.toString(16).padStart(8,"0")).join("")}async function Rl(i){return globalThis.crypto?.subtle?Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",i)),e=>e.toString(16).padStart(2,"0")).join(""):pg(i)}var kr={entries:1024,file:128*1024*1024,total:128*1024*1024,archive:64*1024*1024,pixels:64e6},Rd=new TextDecoder("utf-8",{fatal:!0});function Cd(i,e=/^(manifest\.json|LICENSE\.txt|layers\/[a-z0-9_.-]+\.png)$/i,t=kr.archive,n=kr.total){if(![kr.total,192*1024*1024,384*1024*1024,1536*1024*1024].includes(n))throw new Error("\u8D44\u6E90\u5305\u89E3\u538B\u4E0A\u9650\u975E\u6CD5");if(![kr.archive,128*1024*1024,256*1024*1024,1024*1024*1024].includes(t)||!(i instanceof Uint8Array)||i.length<22||i.length>t)throw new Error("\u8D44\u6E90\u5305\u5927\u5C0F\u975E\u6CD5");let r=new DataView(i.buffer,i.byteOffset,i.byteLength),s=-1;for(let p=i.length-22;p>=Math.max(0,i.length-65557);p--)if(r.getUint32(p,!0)===101010256&&p+22+r.getUint16(p+20,!0)===i.length){s=p;break}if(s<0||r.getUint16(s+4,!0)||r.getUint16(s+6,!0))throw new Error("\u4E0D\u652F\u6301\u5206\u5377\u6216\u65E0\u6548 ZIP");let a=r.getUint16(s+10,!0),o=r.getUint32(s+16,!0),l=r.getUint32(s+12,!0);if(!a||a>kr.entries||o+l!==s||r.getUint16(s+8,!0)!==a)throw new Error("ZIP \u76EE\u5F55\u6216\u6570\u91CF\u975E\u6CD5");let c=new Set,u=new Map,d=o,h=0;for(let p=0;p<a;p++){if(d+46>s||r.getUint32(d,!0)!==33639248)throw new Error("ZIP \u76EE\u5F55\u635F\u574F");let g=r.getUint16(d+8,!0),v=r.getUint16(d+10,!0),m=r.getUint16(d+28,!0),f=r.getUint16(d+30,!0),b=r.getUint16(d+32,!0),M=r.getUint32(d+24,!0);if(d+46+m+f+b>s)throw new Error("ZIP \u76EE\u5F55\u8D8A\u754C");let x=Rd.decode(i.subarray(d+46,d+46+m));if(!Ad(x)||c.has(x)||!e.test(x))throw new Error("\u975E\u6CD5\u6216\u91CD\u590D\u8D44\u6E90\u8DEF\u5F84");c.add(x),h+=M;let S=r.getUint32(d+38,!0)>>>16;if(g&1||![0,8].includes(v)||(S&61440)===40960||M>kr.file||h>n)throw new Error("\u52A0\u5BC6\u3001\u94FE\u63A5\u3001\u538B\u7F29\u65B9\u5F0F\u6216\u89E3\u538B\u5927\u5C0F\u4E0D\u652F\u6301");if(x==="manifest.json"&&M>1024*1024)throw new Error("manifest \u8FC7\u5927");let y=r.getUint32(d+42,!0);if(y+30>o||r.getUint32(y,!0)!==67324752)throw new Error("ZIP \u672C\u5730\u6761\u76EE\u975E\u6CD5");let T=r.getUint16(y+26,!0),_=r.getUint16(y+28,!0),E=r.getUint32(d+20,!0);if(y+30+T+_+E>o||Rd.decode(i.subarray(y+30,y+30+T))!==x)throw new Error("ZIP \u672C\u5730\u76EE\u5F55\u4E0D\u4E00\u81F4");u.set(x,{offset:y+30+T+_,compressed:E,original:M,method:v}),d+=46+m+f+b}if(d!==s||!c.has("manifest.json"))throw new Error("\u7F3A\u5C11 manifest");return{names:c,total:h,entries:u}}var Cl=/^[a-zA-Z0-9_-]{1,96}$/,mg=/^[a-f0-9]{64}$/,gg=new Set(["geometry","animation","texture","audio","config"]);function co(i){if(i?.schema!=="snowbreak-skin/1"||!Cl.test(i.characterId)||!Cl.test(i.skinId))throw new Error("Invalid skin identity");if(!Array.isArray(i.resources)||!i.resources.length||i.resources.length>256)throw new Error("Invalid resource count");let e=new Set,t=i.resources.map(n=>{if(!Cl.test(n.role)||e.has(n.role)||!mg.test(n.assetId)||!gg.has(n.kind))throw new Error("Invalid resource identity");return e.add(n.role),{role:n.role,assetId:n.assetId,kind:n.kind}});if(!t.some(n=>n.role==="body"&&n.kind==="geometry"))throw new Error("Missing body geometry");return{schema:i.schema,characterId:i.characterId,skinId:i.skinId,resources:t}}function Il({loadAsset:i,disposeAsset:e,onDisposeError:t=()=>{}}){if(typeof i!="function"||typeof e!="function")throw new Error("Asset adapter required");let n=0,r=null,s=null,a=!1;async function o(u){let d=await Promise.allSettled(u.map(({asset:h,descriptor:p})=>Promise.resolve().then(()=>e(h,p))));for(let h of d)if(h.status==="rejected")try{t(h.reason)}catch{}}async function l(u){if(a)throw new Error("Runtime disposed");let d=co(u),h=++n;s?.abort();let p=new AbortController;s=p;let g=await Promise.allSettled(d.resources.map(b=>Promise.resolve().then(()=>i(b,{signal:p.signal})))),v=g.flatMap((b,M)=>b.status==="fulfilled"?[{asset:b.value,descriptor:d.resources[M]}]:[]),m=g.find(b=>b.status==="rejected");if(h!==n||a||m){if(await o(v),h===n&&(s=null),h!==n||a)return{accepted:!1,reason:"superseded"};throw m.reason}let f=r;return r={manifest:d,resources:v},s=null,f&&await o(f.resources),h!==n||a?{accepted:!1,reason:"superseded"}:{accepted:!0,characterId:d.characterId,skinId:d.skinId}}async function c(){n++,s?.abort(),s=null;let u=r;r=null,u&&await o(u.resources)}return{load:l,clear:c,getAsset:u=>r?.resources.find(d=>d.descriptor.role===u)?.asset,async dispose(){a=!0,await c()},get current(){return r?{characterId:r.manifest.characterId,skinId:r.manifest.skinId,resources:r.resources.map(u=>({...u.descriptor})),originalInteractionVerified:!1}:null}}}function Id(i){let e=new DataView(i.buffer,i.byteOffset,i.byteLength),t,n,r;if(i.length>=33&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834&&e.getUint32(8)===13&&e.getUint32(12)===1229472850)t=e.getUint32(16),n=e.getUint32(20),r="image/png";else if(i.length>=26&&e.getUint32(0)===1380533830&&e.getUint32(8)===1464156752&&e.getUint32(4,!0)+8===i.length){let s,a,o=12;for(;o<i.length;){if(o+8>i.length)throw new Error("Truncated WebP chunk");let l=e.getUint32(o),c=e.getUint32(o+4,!0),u=o+8;if(u+c>i.length)throw new Error("WebP chunk outside asset");if(l===1095649613||l===1095650630)throw new Error("Animated textures are not supported");if(l===1448097880){if(c!==10||i[u]&2)throw new Error("Invalid WebP canvas");let d=h=>i[h]|i[h+1]<<8|i[h+2]<<16;a=[d(u+4)+1,d(u+7)+1]}if(l===1448097868){if(s||c<5||i[u]!==47)throw new Error("Invalid lossless WebP");let d=e.getUint32(u+1,!0);if(d>>>29)throw new Error("Unknown WebP version");s=[(d&16383)+1,(d>>>14&16383)+1]}o=u+c+(c&1)}if(o!==i.length||!s||a&&a.some((l,c)=>l!==s[c]))throw new Error("Lossless WebP size mismatch");[t,n]=s,r="image/webp"}else throw new Error("Texture must be PNG or lossless WebP");if(!t||!n||t>4096||n>4096)throw new Error("Texture dimensions exceed limit");return{width:t,height:n,mime:r}}function Pd(i){if(!Number.isInteger(i?.frames)||i.frames<2||i.frames>1800||!Number.isFinite(i.fps)||i.fps<=0||i.fps>120||!Array.isArray(i.tracks)||!i.tracks.length||i.tracks.length>512)throw new Error("Invalid animation bounds");if(i.encoding===void 0)return i;if(i.encoding!=="snowbreak-f32-tracks/1")throw new Error("Unknown animation encoding");let e=0,t=new Set,n=i.tracks.map(r=>{if(typeof r.bone!="string"||!r.bone.length||r.bone.length>128||t.has(r.bone))throw new Error("Invalid compact animation bone");t.add(r.bone);let s;if(r.constant!==void 0){if(r.values!==void 0||!Array.isArray(r.constant)||r.constant.length!==10||!r.constant.every(Number.isFinite))throw new Error("Invalid constant transform");let a=Float32Array.from(r.constant);e+=40,s=Array(i.frames).fill(a)}else{let a=i.frames*40;if(typeof r.values!="string"||r.values.length!==4*Math.ceil(a/3))throw new Error("Invalid packed transform size");let o=Uint8Array.from(atob(r.values),c=>c.charCodeAt(0));if(o.length!==a)throw new Error("Truncated animation track");let l=new Float32Array(o.buffer);if(!l.every(Number.isFinite))throw new Error("Non-finite packed transform");e+=a,s=Array.from({length:i.frames},(c,u)=>l.subarray(u*10,u*10+10))}if(e>32*1024*1024)throw new Error("Decoded animation exceeds limit");return{bone:r.bone,parent:r.parent,keys:s}});return{...i,tracks:n}}var Ld={geometry:64,animation:64,texture:32,audio:16,config:8};function Pl(i){if(typeof i!="function")throw new Error("Local asset reader required");return{async loadAsset(e,{signal:t}={}){let n=()=>{if(t?.aborted)throw new DOMException("Asset load aborted","AbortError")};if(n(),!/^[a-f0-9]{64}$/.test(e.assetId)||!Object.hasOwn(Ld,e.kind))throw new Error("Invalid asset descriptor");let r=await i(e.assetId,{signal:t});n();let s=r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):null;if(!s||!s.length||s.length>Ld[e.kind]*1024*1024)throw new Error("Asset size/type limit");if(await Rl(s)!==e.assetId)throw new Error("Asset integrity mismatch");n();let a=null;if(e.kind==="geometry"){let o=new DataView(s.buffer,s.byteOffset,s.byteLength);if(s.length<20||o.getUint32(0,!0)!==1179937895||o.getUint32(4,!0)!==2||o.getUint32(8,!0)!==s.length)throw new Error("Invalid GLB");let l=o.getUint32(12,!0);if(o.getUint32(16,!0)!==1313821514||l>s.length-20)throw new Error("Invalid GLB JSON");let c=JSON.parse(new TextDecoder().decode(s.subarray(20,20+l)));if((c.buffers||[]).some(u=>u.uri)||(c.images||[]).some(u=>u.uri))throw new Error("External GLB resource rejected")}else if(e.kind==="audio"){let o=new TextDecoder("ascii");if(s.length<12||o.decode(s.subarray(0,4))!=="RIFF"||o.decode(s.subarray(8,12))!=="WAVE")throw new Error("Invalid local WAV")}else e.kind==="texture"?a=Id(s):(e.kind==="animation"||e.kind==="config")&&(a=JSON.parse(new TextDecoder().decode(s)),e.kind==="animation"&&(a=Pd(a)));return{kind:e.kind,bytes:s,data:a}},disposeAsset(e){e.bytes=null,e.data=null}}}function gf(i,e){let t=null;if(i.schema==="snowbreak-collection/1"){if(!/^[A-Za-z0-9_-]{1,64}$/.test(i.characterId)||!Array.isArray(i.variants)||![1,2,4].includes(i.variants.length))throw new Error("Invalid character collection");let s=new Set;if(t=i.variants.map(a=>{if(!["standing","interaction"].includes(a.mode)||!["normal","nude","underwear","lv2"].includes(a.outfit)||a.id!==a.mode+"_"+a.outfit||s.has(a.id))throw new Error("Invalid collection variant");return s.add(a.id),{...a,manifest:co(a.manifest)}}),!s.has(i.defaultVariant)||t.some(a=>a.manifest.characterId!==i.characterId))throw new Error("Invalid collection default")}let n=t?t.map(s=>s.manifest):[co(i)],r=new Set(["manifest.json",...n.flatMap(s=>s.resources.map(a=>"assets/"+a.assetId))]);if(r.size!==e.size||[...r].some(s=>!e.has(s)))throw new Error("\u7F3A\u5931\u6216\u591A\u4F59\u8D44\u4EA7");return{variants:t,manifests:n}}async function xf(i){let e=await fetch("companion-snowbreak://local/pkg-index/"+encodeURIComponent(i));if(!e.ok)throw new Error("\u6D41\u5F0F\u89D2\u8272\u5305\u7D22\u5F15\u8BFB\u53D6\u5931\u8D25");let t=await e.json();if(!Array.isArray(t.names)||!t.manifest||typeof t.total!="number"||t.total>1536*1024*1024)throw new Error("\u89D2\u8272\u5305\u7D22\u5F15\u683C\u5F0F\u6216\u5927\u5C0F\u975E\u6CD5");let n=t.manifest,{variants:r,manifests:s}=gf(n,new Set(t.names));async function a(c){let u=await fetch("companion-snowbreak://local/pkg-entry/"+encodeURIComponent(i)+"/"+c);if(!u.ok)throw new Error("\u8D44\u6E90\u8BFB\u53D6\u5931\u8D25\uFF1A"+c.slice(0,12));return new Uint8Array(await u.arrayBuffer())}async function o(c){let u=r?.find(p=>p.id===c);if(r&&!u)throw new Error("Variant unavailable");let d=u?.manifest||s[0],h=Il(Pl(a));return await h.load(d),{runtime:h,manifest:d,selection:u?{id:u.id,mode:u.mode,outfit:u.outfit}:null,variants:r?.map(({id:p,mode:g,outfit:v})=>({id:p,mode:g,outfit:v}))||[],selectVariant:o}}let l;try{l=localStorage.getItem(n.characterId.toLowerCase()+"-collection-selection")}catch{}return o(r?.some(c=>c.id===l)?l:n.defaultVariant)}async function yf(i){let e=Cd(i,/^(manifest\.json|assets\/[a-f0-9]{64})$/,1073741824,1610612736),{inflateSync:t}=await Promise.resolve().then(()=>(mf(),pf));function n(c){let u=e.entries.get(c);if(!u)throw new Error("\u7F3A\u5C11\u8D44\u6E90\uFF1A"+c);let d=i.subarray(u.offset,u.offset+u.compressed),h=u.method===0?d.slice():t(d);if(h.length!==u.original)throw new Error("\u8D44\u6E90\u5305\u957F\u5EA6\u4E0D\u4E00\u81F4");return h}let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(n("manifest.json"))),{variants:s,manifests:a}=gf(r,e.names);async function o(c){let u=s?.find(p=>p.id===c);if(s&&!u)throw new Error("Variant unavailable");let d=u?.manifest||a[0],h=Il(Pl(async p=>n("assets/"+p)));return await h.load(d),{runtime:h,manifest:d,selection:u?{id:u.id,mode:u.mode,outfit:u.outfit}:null,variants:s?.map(({id:p,mode:g,outfit:v})=>({id:p,mode:g,outfit:v}))||[],selectVariant:o}}let l;try{l=localStorage.getItem(r.characterId.toLowerCase()+"-collection-selection")}catch{}return o(s?.some(c=>c.id===l)?l:r.defaultVariant)}function _f(i,e,t=4096,n=null){let r=n==="quality"||n==="performance",s=n==="battery"||n==="powersave",a=s||t===2048?2048:4096,l=(r?1024:s?192:n==="adaptive"||n==="balanced"?512:e.current.characterId==="Fenny"?256:320)*(a===2048&&!s?.5:1)*1024**2,c=new Map,u=r?2048:s?512:1024,d=r?2048:s?512:1024;for(let v of i?.materials||[])if(v.renderState?.opacity!==0)for(let[m,f]of[["diffuseAssetId",!1],["normalAssetId",!0],["ormAssetId",!0]]){let b=v[m];if(!b)continue;let M=(f?"normal:":"")+b,x=e.getAsset("texture_"+b)?.data;if(!x||![x.width,x.height].every(E=>Number.isInteger(E)&&E>0&&E<=4096))throw new Error("Missing texture dimensions");let S=/^(ma_|house_)/i.test(v.name),y=f?10:S?r?150:5:/head|face|eye/i.test(v.name)?1e3:/body00/i.test(v.name)?500:/body01/i.test(v.name)?400:/hair/i.test(v.name)?120:60,T=Math.min(a,f?u:S?d:4096),_=c.get(M);if(_){_.priority=Math.max(_.priority,y),_.cap=Math.max(_.cap,T);continue}c.set(M,{key:M,id:b,normal:f,width:x.width,height:x.height,cap:T,priority:y})}function h(v){let m=Math.min(1,v.cap/Math.max(v.width,v.height));return[Math.max(1,Math.round(v.width*m)),Math.max(1,Math.round(v.height*m))]}let p=v=>{let[m,f]=h(v);return m*f*4*4/3},g=()=>[...c.values()].reduce((v,m)=>v+p(m),0);for(;g()>l;){let v=[...c.values()].filter(m=>m.cap>512&&Math.max(m.width,m.height)>512).map(m=>({e:m,saving:p(m)-p({...m,cap:m.cap/2})})).filter(m=>m.saving>0).sort((m,f)=>m.e.priority/m.saving-f.e.priority/f.saving);if(!v.length)throw new Error("Texture memory budget exceeded");v[0].e.cap/=2}return{limitFor:(v,m=!1)=>c.get((m?"normal:":"")+v)?.cap||1024,snapshot:()=>({requestedLimit:a,budgetMiB:l/1024**2,estimatedMiB:Math.round(g()/1024**2*10)/10,textures:[...c.values()].map(v=>({id:v.id,normal:v.normal,source:[v.width,v.height],size:h(v)}))})}}var kg={performance:"quality",balanced:"adaptive",powersave:"battery"};function zg(i){return kg[i]||(["adaptive","quality","battery"].includes(i)?i:"adaptive")}function vf({now:i=()=>performance.now()}={}){let e="adaptive",t="nominal",n=!1,r=1,s=0,a=0,o=0,l=0,c=0,u=0,d=0,h=0,p=0,g=()=>e==="quality"?t==="critical"?30:60:e==="battery"?t==="critical"?20:30:t==="critical"?20:n||t==="serious"?30:60;function v(M,x,S){let y=e==="quality"?6e6:e==="battery"?14e5:3e6,T=e==="quality"?t==="critical"?2e6:y:t==="critical"?1e6:t==="serious"?16e5:y,_=e==="quality"?1:r;return Math.max(.5,Math.min(S||1,3,Math.sqrt(T/Math.max(1,M*x)))*_)}function m(M={}){return M.mode&&(e=zg(M.mode),e==="quality"&&(r=1)),M.thermal&&["nominal","fair","serious","critical"].includes(M.thermal)&&(t=M.thermal),typeof M.lowPower=="boolean"&&(n=M.lowPower),s=0,a=0,o=0,d=h=0,b()}function f(M=i()){let x=1e3/g();return s&&M-s<x-.75?!1:(s&&M-s<1e3&&(l+=M-s,c++),s=M,o++,a||(a=M),M-a>=2e3&&(u=o*1e3/(M-a),e==="adaptive"&&(d=u<g()*.78?d+1:0,h=u>g()*.94?h+1:0,d>=2&&r>.65?(r=Math.max(.65,r-.1),d=0,p++):h>=4&&r<1&&(r=Math.min(1,r+.05),h=0,p++)),a=M,o=0),!0)}function b(){return{mode:e,thermal:t,lowPower:n,targetFPS:g(),fps:Math.round(u*10)/10,meanFrameMs:c?Math.round(l/c*10)/10:0,scale:r,changes:p}}return{begin:f,configure:m,ratio:v,snapshot:b,resetClock(){s=0,a=0,o=0}}}var ap=0,Bu=1,op=2;var Oa=1,Mc=2,Ns=3,bn=0,mn=1,en=2,pi=0,Us=1,ku=2,zu=3,Hu=4,cp=5;var Er=100,lp=101,up=102,hp=103,dp=104,fp=200,pp=201,mp=202,gp=203,Vu=204,Gu=205,xp=206,yp=207,_p=208,vp=209,bp=210,Mp=211,Sp=212,wp=213,Ep=214,Ko=0,jo=1,Jo=2,ps=3,Qo=4,ec=5,tc=6,nc=7,Wu=0,Tp=1,Ap=2,jn=0,Xu=1,qu=2,Yu=3,Ba=4,Zu=5,$u=6,Ku=7,Eu="attached",Rp="detached",ju=300,sr=301,Tr=302,Sc=303,wc=304,ka=306,tr=1e3,Vn=1001,ms=1002,zt=1003,Ec=1004;var Ar=1005;var Ht=1006,Ds=1007;var Jn=1008;var Mn=1009,Ju=1010,Qu=1011,Fs=1012,Tc=1013,Qn=1014,In=1015,ei=1016,Ac=1017,Rc=1018,Os=1020,eh=35902,th=35899,nh=1021,ih=1022,Pn=1023,li=1026,ar=1027,Cc=1028,Ic=1029,or=1030,Pc=1031;var Lc=1033,za=33776,Ha=33777,Va=33778,Ga=33779,Nc=35840,Uc=35841,Dc=35842,Fc=35843,Oc=36196,Bc=37492,kc=37496,zc=37488,Hc=37489,Wa=37490,Vc=37491,Gc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,Zc=37813,$c=37814,Kc=37815,jc=37816,Jc=37817,Qc=37818,el=37819,tl=37820,nl=37821,il=36492,rl=36494,sl=36495,al=36283,ol=36284,Xa=36285,cl=36286;var gr=2300,xr=2301,Yo=2302,Tu=2303,Au=2400,Ru=2401,Cu=2402,Cp=2500;var rh=0,qa=1,Bs=2,Ip=3200;var ll=0,Pp=1,Gn="",Dt="srgb",pn="srgb-linear",ya="linear",Et="srgb";var Zo=7680;var Lp=519,Np=512,Up=513,Dp=514,ul=515,Fp=516,Op=517,hl=518,Bp=519,sh=35044,ah=35048;var oh="300 es",$n=2e3,gs=2001;function Hg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kp(){let i=xs("canvas");return i.style.display="block",i}var bf={},ys=null;function _a(...i){let e="THREE."+i.shift();ys?ys("log",e,...i):console.log(e,...i)}function zp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=zp(i);let e="THREE."+i.shift();if(ys)ys("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=zp(i);let e="THREE."+i.shift();if(ys)ys("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function mr(...i){let e=i.join(" ");e in bf||(bf[e]=!0,Je(...i))}function Hp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Vp={[Ko]:jo,[Jo]:tc,[Qo]:nc,[ps]:ec,[jo]:Ko,[tc]:Jo,[nc]:Qo,[ec]:ps},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=1234567,ga=Math.PI/180,yr=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function ch(i,e){return(i%e+e)%e}function Gg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Wg(i,e,t){return i!==e?(t-i)/(e-i):0}function xa(i,e,t){return(1-t)*i+t*e}function Xg(i,e,t,n){return xa(i,e,1-Math.exp(-t*n))}function qg(i,e=1){return e-Math.abs(ch(i,e*2)-e)}function Yg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $g(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kg(i,e){return i+Math.random()*(e-i)}function jg(i){return i*(.5-Math.random())}function Jg(i){i!==void 0&&(Mf=i);let e=Mf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qg(i){return i*ga}function e0(i){return i*yr}function t0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function n0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function i0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function r0(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Me={DEG2RAD:ga,RAD2DEG:yr,generateUUID:Kn,clamp:xt,euclideanModulo:ch,mapLinear:Gg,inverseLerp:Wg,lerp:xa,damp:Xg,pingpong:qg,smoothstep:Yg,smootherstep:Zg,randInt:$g,randFloat:Kg,randFloatSpread:jg,seededRandom:Jg,degToRad:Qg,radToDeg:e0,isPowerOfTwo:t0,ceilPowerOfTwo:n0,floorPowerOfTwo:i0,setQuaternionFromProperEuler:r0,normalize:Tt,denormalize:Zn},fh=class fh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fh.prototype.isVector2=!0;var ct=fh,He=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(d!==v||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+d*v;m<0&&(h=-h,p=-p,g=-g,v=-v,m=-m);let f=1-o;if(m<.9995){let b=Math.acos(m),M=Math.sin(b);f=Math.sin(f*b)/M,o=Math.sin(o*b)/M,l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+v*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+v*o;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-o*p,e[t+2]=c*g+u*p+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var D=ph,tu=new D,Sf=new He,mh=class mh{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],v=r[0],m=r[3],f=r[6],b=r[1],M=r[4],x=r[7],S=r[2],y=r[5],T=r[8];return s[0]=a*v+o*b+l*S,s[3]=a*m+o*M+l*y,s[6]=a*f+o*x+l*T,s[1]=c*v+u*b+d*S,s[4]=c*m+u*M+d*y,s[7]=c*f+u*x+d*T,s[2]=h*v+p*b+g*S,s[5]=h*m+p*M+g*y,s[8]=h*f+p*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=t*d+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(e,t)),this}rotate(e){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-e)),this}translate(e,t){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var ot=mh,nu=new ot,wf=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ef=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s0(){let i={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Et&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(r.r=fs(r.r),r.g=fs(r.g),r.b=fs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?ya:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pn]:{primaries:e,whitePoint:n,transfer:ya,toXYZ:wf,fromXYZ:Ef,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:wf,fromXYZ:Ef,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}var pt=s0();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qr,ic=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=xs("canvas")),Qr.width=e.width,Qr.height=e.height;let r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},a0=0,_s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(iu(r[a].image)):s.push(iu(r[a]))}else s=iu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ic.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var o0=0,ru=new D,jt=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vn,r=Vn,s=Ht,a=Jn,o=Pn,l=Mn,c=i.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Kn(),this.name="",this.source=new _s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=ju;jt.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,x=(p+1)/2,S=(f+1)/2,y=(u+h)/4,T=(d+v)/4,_=(g+m)/4;return M>x&&M>S?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=y/n,s=T/n):x>S?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=y/r,s=_/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=T/s,r=_/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var At=gh,rc=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new jt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new _s(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends rc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},va=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sc=class extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bc=class bc{constructor(e,t,n,r,s,a,o,l,c,u,d,h,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,h,p,g,v,m)}set(e,t,n,r,s,a,o,l,c,u,d,h,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=a*u,p=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,l0)}lookAt(e,t,n){let r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),$i.crossVectors(n,Tn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),$i.crossVectors(n,Tn)),$i.normalize(),Mo.crossVectors(Tn,$i),r[0]=$i.x,r[4]=Mo.x,r[8]=Tn.x,r[1]=$i.y,r[5]=Mo.y,r[9]=Tn.y,r[2]=$i.z,r[6]=Mo.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],b=n[3],M=n[7],x=n[11],S=n[15],y=r[0],T=r[4],_=r[8],E=r[12],R=r[1],I=r[5],O=r[9],B=r[13],N=r[2],V=r[6],L=r[10],C=r[14],$=r[3],F=r[7],U=r[11],G=r[15];return s[0]=a*y+o*R+l*N+c*$,s[4]=a*T+o*I+l*V+c*F,s[8]=a*_+o*O+l*L+c*U,s[12]=a*E+o*B+l*C+c*G,s[1]=u*y+d*R+h*N+p*$,s[5]=u*T+d*I+h*V+p*F,s[9]=u*_+d*O+h*L+p*U,s[13]=u*E+d*B+h*C+p*G,s[2]=g*y+v*R+m*N+f*$,s[6]=g*T+v*I+m*V+f*F,s[10]=g*_+v*O+m*L+f*U,s[14]=g*E+v*B+m*C+f*G,s[3]=b*y+M*R+x*N+S*$,s[7]=b*T+M*I+x*V+S*F,s[11]=b*_+M*O+x*L+S*U,s[15]=b*E+M*B+x*C+S*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15],b=l*p-c*h,M=o*p-c*d,x=o*h-l*d,S=a*p-c*u,y=a*h-l*u,T=a*d-o*u;return t*(v*b-m*M+f*x)-n*(g*b-m*S+f*y)+r*(g*M-v*S+f*T)-s*(g*x-v*y+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],b=t*o-n*a,M=t*l-r*a,x=t*c-s*a,S=n*l-r*o,y=n*c-s*o,T=r*c-s*l,_=u*v-d*g,E=u*m-h*g,R=u*f-p*g,I=d*m-h*v,O=d*f-p*v,B=h*f-p*m,N=b*B-M*O+x*I+S*R-y*E+T*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/N;return e[0]=(o*B-l*O+c*I)*V,e[1]=(r*O-n*B-s*I)*V,e[2]=(v*T-m*y+f*S)*V,e[3]=(h*y-d*T-p*S)*V,e[4]=(l*R-a*B-c*E)*V,e[5]=(t*B-r*R+s*E)*V,e[6]=(m*x-g*T-f*M)*V,e[7]=(u*T-h*x+p*M)*V,e[8]=(a*O-o*R+c*_)*V,e[9]=(n*R-t*O-s*_)*V,e[10]=(g*y-v*x+f*b)*V,e[11]=(d*x-u*y-p*b)*V,e[12]=(o*E-a*I-l*_)*V,e[13]=(t*I-n*E+r*_)*V,e[14]=(v*M-g*S-m*b)*V,e[15]=(u*S-d*M+h*b)*V,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,g=s*d,v=a*u,m=a*d,f=o*d,b=l*c,M=l*u,x=l*d,S=n.x,y=n.y,T=n.z;return r[0]=(1-(v+f))*S,r[1]=(p+x)*S,r[2]=(g-M)*S,r[3]=0,r[4]=(p-x)*y,r[5]=(1-(h+f))*y,r[6]=(m+b)*y,r[7]=0,r[8]=(g+M)*T,r[9]=(m-b)*T,r[10]=(1-(h+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=es.set(r[0],r[1],r[2]).length(),o=es.set(r[4],r[5],r[6]).length(),l=es.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xn.copy(this);let c=1/a,u=1/o,d=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=$n,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===$n)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===gs)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=$n,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r),g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===$n)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===gs)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bc.prototype.isMatrix4=!0;var Ze=bc,es=new D,Xn=new Ze,c0=new D(0,0,0),l0=new D(1,1,1),$i=new D,Mo=new D,Tn=new D,Tf=new Ze,Af=new He,Ii=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Af.setFromEuler(this),this.setFromQuaternion(Af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u0=0,Rf=new D,ts=new He,Si=new Ze,So=new D,ca=new D,h0=new D,d0=new He,Cf=new D(1,0,0),If=new D(0,1,0),Pf=new D(0,0,1),Lf={type:"added"},f0={type:"removed"},ns={type:"childadded",child:null},su={type:"childremoved",child:null},Ut=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Ii,n=new He,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ot}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Cf,e)}rotateY(e){return this.rotateOnAxis(If,e)}rotateZ(e){return this.rotateOnAxis(Pf,e)}translateOnAxis(e,t){return Rf.copy(e).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cf,e)}translateY(e){return this.translateOnAxis(If,e)}translateZ(e){return this.translateOnAxis(Pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ca,So,this.up):Si.lookAt(So,ca,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(Si),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lf),ns.child=e,this.dispatchEvent(ns),ns.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f0),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lf),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},p0={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},wo={h:0,s:0,l:0};function au(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=ch(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=au(a,s,e+1/3),this.g=au(a,s,e),this.b=au(a,s,e-1/3)}return pt.colorSpaceToWorking(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return pt.workingToColorSpace(sn.copy(this),e),Math.round(xt(sn.r*255,0,255))*65536+Math.round(xt(sn.g*255,0,255))*256+Math.round(xt(sn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(sn.copy(this),t);let n=sn.r,r=sn.g,s=sn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Dt){pt.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,r=sn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(wo);let n=xa(Ki.h,wo.h,t),r=xa(Ki.s,wo.s,t),s=xa(Ki.l,wo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Qe;Qe.NAMES=Gp;var _r=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new D,wi=new D,ou=new D,Ei=new D,is=new D,rs=new D,Nf=new D,cu=new D,lu=new D,uu=new D,hu=new At,du=new At,fu=new At,oi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qn.subVectors(r,t),wi.subVectors(n,t),ou.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(wi),l=qn.dot(ou),c=wi.dot(wi),u=wi.dot(ou),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return hu.setScalar(0),du.setScalar(0),fu.setScalar(0),hu.fromBufferAttribute(e,t),du.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hu,s.x),a.addScaledVector(du,s.y),a.addScaledVector(fu,s.z),a}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),wi.subVectors(e,t),qn.cross(wi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;is.subVectors(r,n),rs.subVectors(s,n),cu.subVectors(e,n);let l=is.dot(cu),c=rs.dot(cu);if(l<=0&&c<=0)return t.copy(n);lu.subVectors(e,r);let u=is.dot(lu),d=rs.dot(lu);if(u>=0&&d<=u)return t.copy(r);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(is,a);uu.subVectors(e,s);let p=is.dot(uu),g=rs.dot(uu);if(g>=0&&p<=g)return t.copy(s);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(rs,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Nf.subVectors(s,r),o=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Nf,o);let f=1/(m+v+h);return a=v*f,o=h*f,t.copy(n).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),To.subVectors(this.max,la),ss.subVectors(e.a,la),as.subVectors(e.b,la),os.subVectors(e.c,la),ji.subVectors(as,ss),Ji.subVectors(os,as),hr.subVectors(ss,os);let t=[0,-ji.z,ji.y,0,-Ji.z,Ji.y,0,-hr.z,hr.y,ji.z,0,-ji.x,Ji.z,0,-Ji.x,hr.z,0,-hr.x,-ji.y,ji.x,0,-Ji.y,Ji.x,0,-hr.y,hr.x,0];return!pu(t,ss,as,os,To)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,ss,as,os,To))?!1:(Ao.crossVectors(ji,Ji),t=[Ao.x,Ao.y,Ao.z],pu(t,ss,as,os,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,Eo=new Yt,ss=new D,as=new D,os=new D,ji=new D,Ji=new D,hr=new D,la=new D,To=new D,Ao=new D,dr=new D;function pu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){dr.fromArray(i,s);let o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=t.dot(dr),u=n.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Xt=new D,Ro=new ct,m0=0,Ft=class extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ba=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ma=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var fn=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},g0=new Yt,ua=new D,mu=new D,yn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):g0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);let t=ua.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ua,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(mu)),this.expandByPoint(ua.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},x0=0,Hn=new Ze,gu=new Ut,cs=new D,An=new Yt,ha=new Yt,Kt=new D,Jt=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hg(e)?Ma:ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(An.min,ha.min),An.expandByPoint(Kt),Kt.addVectors(An.max,ha.max),An.expandByPoint(Kt)):(An.expandByPoint(ha.min),An.expandByPoint(ha.max))}An.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),Kt.add(cs)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new D,l[_]=new D;let c=new D,u=new D,d=new D,h=new ct,p=new ct,g=new ct,v=new D,m=new D;function f(_,E,R){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,R),h.fromBufferAttribute(s,_),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,R),u.sub(c),d.sub(c),p.sub(h),g.sub(h);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),o[_].add(v),o[E].add(v),o[R].add(v),l[_].add(m),l[E].add(m),l[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,E=b.length;_<E;++_){let R=b[_],I=R.start,O=R.count;for(let B=I,N=I+O;B<N;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new D,x=new D,S=new D,y=new D;function T(_){S.fromBufferAttribute(r,_),y.copy(S);let E=o[_];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(y,E);let I=x.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,E=b.length;_<E;++_){let R=b[_],I=R.start,O=R.count;for(let B=I,N=I+O;B<N;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Ft(h,u,d)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ms=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},dn=new D,Ss=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xu=new D,y0=new D,_0=new ot,Rn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=xu.subVectors(n,t).cross(y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(xu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_0.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},v0=0,_n=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Us,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Gu,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ai=new D,yu=new D,Co=new D,Io=new D,nr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yu.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),Io.copy(this.origin).sub(yu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Co),o=Io.dot(this.direction),l=-Io.dot(Co),c=Io.lengthSq(),u=Math.abs(1-a*a),d,h,p,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(yu).addScaledVector(Co,h),p}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),r=Ai.dot(Ai)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,p=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,f=n.x-a.x,b=n.y-a.y,M=n.z-a.z,x=Math.abs(l),S=Math.abs(c),y=Math.abs(u),T,_,E,R,I,O,B,N,V,L,C,$;if(x>=S&&x>=y?(E=l,O=d,V=g,$=f,l>=0?(T=c,_=u,R=h,I=p,B=v,N=m,L=b,C=M):(T=u,_=c,R=p,I=h,B=m,N=v,L=M,C=b)):S>=y?(E=c,O=h,V=v,$=b,c>=0?(T=u,_=l,R=p,I=d,B=m,N=g,L=M,C=f):(T=l,_=u,R=d,I=p,B=g,N=m,L=f,C=M)):(E=u,O=p,V=m,$=M,u>=0?(T=l,_=c,R=d,I=h,B=g,N=v,L=f,C=b):(T=c,_=l,R=h,I=d,B=v,N=g,L=b,C=f)),E===0)return null;let F=T/E,U=_/E,G=1/E,ce=R-F*O,de=I-U*O,he=B-F*V,q=N-U*V,ue=L-F*$,H=C-U*$,J=ue*q-H*he,_e=ce*H-de*ue,Fe=he*de-q*ce;if(r){if(J<0||_e<0||Fe<0)return null}else if((J<0||_e<0||Fe<0)&&(J>0||_e>0||Fe>0))return null;let ge=J+_e+Fe;if(ge===0)return null;let pe=G*(J*O+_e*V+Fe*$);return(ge>0?pe<0:pe>0)?null:this.at(pe/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uf=new Ze,fr=new nr,Po=new yn,Df=new D,Lo=new D,No=new D,Uo=new D,_u=new D,Do=new D,Ff=new D,Fo=new D,Vt=class extends Ut{constructor(e=new Jt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Do.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],d=s[l];u!==0&&(_u.fromBufferAttribute(d,e),a?Do.addScaledVector(_u,u):Do.addScaledVector(_u.sub(t),u))}t.add(Do)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Po.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Po,Df)===null||fr.origin.distanceToSquared(Df)>(e.far-e.near)**2))&&(Uf.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Uf),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,S=M;x<S;x+=3){let y=o.getX(x),T=o.getX(x+1),_=o.getX(x+2);r=Oo(this,f,e,n,c,u,d,y,T,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let b=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);r=Oo(this,a,e,n,c,u,d,b,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,S=M;x<S;x+=3){let y=x,T=x+1,_=x+2;r=Oo(this,f,e,n,c,u,d,y,T,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let b=m,M=m+1,x=m+2;r=Oo(this,a,e,n,c,u,d,b,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function b0(i,e,t,n,r,s,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===bn,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:i}}function Oo(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Lo),i.getVertexPosition(l,No),i.getVertexPosition(c,Uo);let u=b0(i,e,t,n,Lo,No,Uo,Ff);if(u){let d=new D;oi.getBarycoord(Ff,Lo,No,Uo,d),r&&(u.uv=oi.getInterpolatedAttribute(r,o,l,c,d,new ct)),s&&(u.uv1=oi.getInterpolatedAttribute(s,o,l,c,d,new ct)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};oi.getNormal(Lo,No,Uo,h.normal),u.face=h,u.barycoord=d}return u}var da=new At,Of=new At,Bf=new At,M0=new At,kf=new Ze,Bo=new D,vu=new yn,zf=new Ze,bu=new nr,Sa=class extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eu,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingBox.expandByPoint(Bo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingSphere.expandByPoint(Bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vu.copy(this.boundingSphere),vu.applyMatrix4(r),e.ray.intersectsSphere(vu)!==!1&&(zf.copy(r).invert(),bu.copy(e.ray).applyMatrix4(zf),!(this.boundingBox!==null&&bu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Of.fromBufferAttribute(r.attributes.skinIndex,e),Bf.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(da.copy(t),t.set(0,0,0,0)):(da.set(...t,1),t.set(0,0,0)),da.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Bf.getComponent(s);if(a!==0){let o=Of.getComponent(s);kf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(M0.copy(da).applyMatrix4(kf),a)}}return t.isVector4&&(t.w=da.w),t.applyMatrix4(this.bindMatrixInverse)}},ws=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Es=class extends jt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=zt,u=zt,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hf=new Ze,S0=new Ze,wa=class i{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:S0;Hf.multiplyMatrices(o,t[s]),Hf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Es(t,e,e,Pn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(Je("Skeleton: No bone found with UUID:",s),a=new ws),this.bones.push(a),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let o=n[r];e.boneInverses.push(o.toArray())}return e}},Pi=class extends Ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ls=new Ze,Vf=new Ze,ko=[],Gf=new Yt,w0=new Ze,fa=new Vt,pa=new yn,Ea=class extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,w0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Gf.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Gf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),pa.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(n),e.ray.intersectsSphere(pa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ls),Vf.multiplyMatrices(n,ls),fa.matrixWorld=Vf,fa.raycast(e,ko);for(let a=0,o=ko.length;a<o;a++){let l=ko[a];l.instanceId=s,l.object=this,t.push(l)}ko.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Es(new Float32Array(r*this.count),r,this.count,Cc,In));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pr=new yn,E0=new ct(.5,.5),zo=new D,Ts=class{constructor(e=new Rn,t=new Rn,n=new Rn,r=new Rn,s=new Rn,a=new Rn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],v=s[9],m=s[10],f=s[11],b=s[12],M=s[13],x=s[14],S=s[15];if(r[0].setComponents(c-a,p-u,f-g,S-b).normalize(),r[1].setComponents(c+a,p+u,f+g,S+b).normalize(),r[2].setComponents(c+o,p+d,f+v,S+M).normalize(),r[3].setComponents(c-o,p-d,f-v,S-M).normalize(),n)r[4].setComponents(l,h,m,x).normalize(),r[5].setComponents(c-l,p-h,f-m,S-x).normalize();else if(r[4].setComponents(c-l,p-h,f-m,S-x).normalize(),t===$n)r[5].setComponents(c+l,p+h,f+m,S+x).normalize();else if(t===gs)r[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);let t=E0.distanceTo(e.center);return pr.radius=.7071067811865476+t,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ac=new D,oc=new D,Wf=new Ze,ma=new nr,Ho=new yn,Mu=new D,Xf=new D,vr=class extends Ut{constructor(e=new Jt,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ac.fromBufferAttribute(t,r-1),oc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ac.distanceTo(oc);e.setAttribute("lineDistance",new fn(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;Wf.copy(r).invert(),ma.copy(e.ray).applyMatrix4(Wf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let f=u.getX(v),b=u.getX(v+1),M=Vo(this,e,ma,l,f,b,v);M&&t.push(M)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),f=Vo(this,e,ma,l,v,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let f=Vo(this,e,ma,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){let v=Vo(this,e,ma,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Vo(i,e,t,n,r,s,a){let o=i.geometry.attributes.position;if(ac.fromBufferAttribute(o,r),oc.fromBufferAttribute(o,s),t.distanceSqToSegment(ac,oc,Mu,Xf)>n)return;Mu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Mu);if(!(c<e.near||c>e.far))return{distance:c,point:Xf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var qf=new D,Yf=new D,Ta=class extends vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qf.fromBufferAttribute(t,r),Yf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qf.distanceTo(Yf);e.setAttribute("lineDistance",new fn(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Aa=class extends vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Rs=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zf=new Ze,Iu=new nr,Go=new yn,Wo=new D,Ra=class extends Ut{constructor(e=new Jt,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;Zf.copy(r).invert(),Iu.copy(e.ray).applyMatrix4(Zf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,v=p;g<v;g++){let m=c.getX(g);Wo.fromBufferAttribute(d,m),$f(Wo,m,l,r,e,t,this)}}else{let h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=h,v=p;g<v;g++)Wo.fromBufferAttribute(d,g),$f(Wo,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function $f(i,e,t,n,r,s,a){let o=Iu.distanceSqToPoint(i);if(o<t){let l=new D;Iu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ca=class extends jt{constructor(e=[],t=sr,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ir=class extends jt{constructor(e,t,n=Qn,r,s,a,o=zt,l=zt,c,u=li,d=1){if(u!==li&&u!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cc=class extends ir{constructor(e,t=Qn,n=sr,r,s,a=zt,o=zt,l,c=li){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ia=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cs=class i extends Jt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(d,2));function g(v,m,f,b,M,x,S,y,T,_,E){let R=x/T,I=S/_,O=x/2,B=S/2,N=y/2,V=T+1,L=_+1,C=0,$=0,F=new D;for(let U=0;U<L;U++){let G=U*I-B;for(let ce=0;ce<V;ce++){let de=ce*R-O;F[v]=de*b,F[m]=G*M,F[f]=N,c.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[f]=y>0?1:-1,u.push(F.x,F.y,F.z),d.push(ce/T),d.push(1-U/_),C+=1}}for(let U=0;U<_;U++)for(let G=0;G<T;G++){let ce=h+G+V*U,de=h+G+V*(U+1),he=h+(G+1)+V*(U+1),q=h+(G+1)+V*U;l.push(ce,de,q),l.push(de,he,q),$+=6}o.addGroup(p,$,E),p+=$,h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var br=class i extends Jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let b=f*h-a;for(let M=0;M<c;M++){let x=M*d-s;g.push(x,-b,0),v.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let M=b+c*f,x=b+c*(f+1),S=b+1+c*(f+1),y=b+1+c*f;p.push(M,x,y),p.push(x,S,y)}this.setIndex(p),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Kf(r))r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Kf(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=Rr(i[t]);for(let r in n)e[r]=n[r]}return e}function Kf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function T0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Wp={clone:Rr,merge:on},A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=T0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new At().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},lc=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mr=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},an=class extends Mr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var uc=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hc=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $o(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function C0(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function jf(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function I0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var hi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dc=class extends hi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Au,endingEnd:Au}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ru:s=e,o=2*t-n;break;case Cu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ru:a=e,l=2*n-t;break;case Cu:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,f=-h*m+2*h*v-h*g,b=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-p)*m+(1.5+p)*v+.5*g,x=p*m-p*v;for(let S=0;S!==o;++S)s[S]=f*a[u+S]+b*a[c+S]+M*a[l+S]+x*a[d+S];return s}},fc=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}},pc=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mc=class extends hi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(r-t),v=1-g;for(let m=0;m!==o;++m)s[m]=a[c+m]*v+a[l+m]*g;return s}let h=o*2,p=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],f=p*h+g*2,b=d[f],M=d[f+1],x=e*h+g*2,S=u[x],y=u[x+1],T=L0(n,t,b,S,r);s[g]=Xp(T,v,M,y,m)}return s}};function Xp(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function P0(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function L0(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=Xp(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let l=P0(s,e,t,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var vn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),$o(e.settings)&&(n.settings={inTangents:er(e.settings.inTangents,Array),outTangents:er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break;case Tu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return Yo;case this.InterpolantFactoryMethodBezier:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;$o(this.settings)&&(Jf(this.settings.inTangents,e),Jf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){rt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Vg(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Yo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{let d=o*n,h=d-n,p=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[d+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,$o(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Jf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=xr;var Li=class extends vn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=gr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends vn{constructor(e,t,n,r){super(e,t,n,r)}};Pa.prototype.ValueTypeName="color";var Ni=class extends vn{constructor(e,t,n,r){super(e,t,n,r)}};Ni.prototype.ValueTypeName="number";var gc=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let u=c+o;c!==u;c+=4)He.slerpFlat(s,0,a,c-o,a,c,l);return s}},di=class extends vn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}};di.prototype.ValueTypeName="quaternion";di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends vn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=gr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends vn{constructor(e,t,n,r){super(e,t,n,r)}};Di.prototype.ValueTypeName="vector";var Is=class{constructor(e="",t=-1,n=[],r=Cp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(U0(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(vn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=C0(l);l=jf(l,1,u),c=jf(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ni(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(s);if(u&&u.length>1){let d=u[1],h=r[d];h||(r[d]=h=[]),h.push(c)}}let a=[];for(let o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function N0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ni;case"vector":case"vector2":case"vector3":case"vector4":return Di;case"color":return Pa;case"quaternion":return di;case"bool":case"boolean":return Li;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function U0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=N0(i.type);if(i.times===void 0){let n=[],r=[];I0(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),$o(i.settings)&&(t.settings={inTangents:er(i.settings.inTangents,Float32Array),outTangents:er(i.settings.outTangents,Float32Array)}),t}var ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Qf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Qf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Qf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var xc=class{constructor(e,t,n){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qp=new xc,fi=class{constructor(e){this.manager=e!==void 0?e:qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},Pu=class extends Error{constructor(e,t){super(e),this.response=t}},Ps=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ci.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:r});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ri[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0,v=0,m=new ReadableStream({start(f){b();function b(){d.read().then(({done:M,value:x})=>{if(M)f.close();else{v+=x.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let y=0,T=u.length;y<T;y++){let _=u[y];_.onProgress&&_.onProgress(S)}f.enqueue(x),b()}},M=>{f.error(M)})}}});return new Response(m)}else throw new Pu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ci.add(`file:${e}`,c);let u=Ri[e];delete Ri[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let d=0,h=u.length;d<h;d++){let p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var us=new WeakMap,yc=class extends fi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ci.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=us.get(a);d===void 0&&(d=[],us.set(a,d)),d.push({onLoad:t,onError:r})}return a}let o=xs("img");function l(){u(),t&&t(this);let d=us.get(this)||[];for(let h=0;h<d.length;h++){let p=d[h];p.onLoad&&p.onLoad(this)}us.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),ci.remove(`image:${e}`);let h=us.get(this)||[];for(let p=0;p<h.length;p++){let g=h[p];g.onError&&g.onError(d)}us.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ci.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Fi=class extends fi{constructor(e){super(e)}load(e,t,n,r){let s=new jt,a=new yc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Sr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},La=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Su=new Ze,ep=new D,tp=new D,Ls=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(ep),tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Su,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===gs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xo=new D,qo=new He,ai=new D,Na=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xo,qo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xo,qo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,qo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new D,np=new ct,ip=new ct,qt=class extends Na{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,np,ip),t.subVectors(ip,np)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lu=class extends Ls{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=yr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ua=class extends Sr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nu=class extends Ls{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},Da=class extends Sr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Nu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},rr=class extends Na{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uu=class extends Ls{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Uu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Bi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wu=new WeakMap,Fa=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ci.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{wu.has(a)===!0?(r&&r(wu.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),wu.set(l,c),ci.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ci.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hs=-90,ds=1,_c=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(hs,ds,e,t);r.layers=this.layers,this.add(r);let s=new qt(hs,ds,e,t);s.layers=this.layers,this.add(s);let a=new qt(hs,ds,e,t);a.layers=this.layers,this.add(a);let o=new qt(hs,ds,e,t);o.layers=this.layers,this.add(o);let l=new qt(hs,ds,e,t);l.layers=this.layers,this.add(l);let c=new qt(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var uh="\\[\\]\\.:\\/",D0=new RegExp("["+uh+"]","g"),hh="[^"+uh+"]",F0="[^"+uh.replace("\\.","")+"]",O0=/((?:WC+[\/:])*)/.source.replace("WC",hh),B0=/(WCOD+)?/.source.replace("WCOD",F0),k0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),H0=new RegExp("^"+O0+B0+k0+z0+"$"),V0=["material","materials","bones","map"],Du=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(D0,"")}static parseTrackName(e){let t=H0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);V0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Du;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var VM=new Float32Array(1);var rp=new Ze,wr=class{constructor(e,t,n=0,r=1/0){this.ray=new nr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rp),this}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(sp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Fu(e[r],this,n,t);return n.sort(sp),n}};function sp(i,e){return i.distance-e.distance}function Fu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Fu(s[a],e,t,!0)}}var xh=class xh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};xh.prototype.isMatrix2=!0;var Ou=xh;function dh(i,e,t,n){let r=G0(n);switch(t){case nh:return i*e;case Cc:return i*e/r.components*r.byteLength;case Ic:return i*e/r.components*r.byteLength;case or:return i*e*2/r.components*r.byteLength;case Pc:return i*e*2/r.components*r.byteLength;case ih:return i*e*3/r.components*r.byteLength;case Pn:return i*e*4/r.components*r.byteLength;case Lc:return i*e*4/r.components*r.byteLength;case za:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uc:case Fc:return Math.max(i,16)*Math.max(e,8)/4;case Nc:case Dc:return Math.max(i,8)*Math.max(e,8)/2;case Oc:case Bc:case zc:case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kc:case Wa:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case il:case rl:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case al:case ol:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xa:case cl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(i){switch(i){case Mn:case Ju:return{byteLength:1,components:1};case Fs:case Qu:case ei:return{byteLength:2,components:1};case Ac:case Rc:return{byteLength:2,components:4};case Qn:case Tc:case In:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function pm(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Y0(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
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
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
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
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
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
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ox=`#ifdef USE_IRIDESCENCE
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
#endif`,cx=`#ifdef USE_BUMPMAP
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xx=`#define PI 3.141592653589793
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
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_x=`vec3 transformedNormal = objectNormal;
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
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
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
}`,Fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
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
#endif`,qx=`uniform sampler2D dfgLUT;
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
}`,Yx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ry=`#if defined( USE_POINTS_UV )
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
#endif`,sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
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
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
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
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,My=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ly=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ny=`float getShadowMask() {
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
}`,Uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,Gy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`#include <common>
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
}`,t_=`#if DEPTH_PACKING == 3200
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
}`,n_=`#define DISTANCE
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
}`,i_=`#define DISTANCE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
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
}`,o_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,l_=`uniform vec3 diffuse;
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
}`,u_=`#define LAMBERT
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
}`,h_=`#define LAMBERT
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
}`,d_=`#define MATCAP
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
}`,f_=`#define MATCAP
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
}`,p_=`#define NORMAL
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
}`,m_=`#define NORMAL
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
}`,g_=`#define PHONG
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
}`,x_=`#define PHONG
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
}`,y_=`#define STANDARD
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
}`,__=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,b_=`#define TOON
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
}`,M_=`uniform float size;
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
}`,S_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,E_=`uniform vec3 color;
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
}`,T_=`uniform float rotation;
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
}`,A_=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Z0,alphahash_pars_fragment:$0,alphamap_fragment:K0,alphamap_pars_fragment:j0,alphatest_fragment:J0,alphatest_pars_fragment:Q0,aomap_fragment:ex,aomap_pars_fragment:tx,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:rx,beginnormal_vertex:sx,bsdfs:ax,iridescence_fragment:ox,bumpmap_pars_fragment:cx,clipping_planes_fragment:lx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:hx,clipping_planes_vertex:dx,color_fragment:fx,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:xx,cube_uv_reflection_fragment:yx,defaultnormal_vertex:_x,displacementmap_pars_vertex:vx,displacementmap_vertex:bx,emissivemap_fragment:Mx,emissivemap_pars_fragment:Sx,colorspace_fragment:wx,colorspace_pars_fragment:Ex,envmap_fragment:Tx,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Rx,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:zx,envmap_vertex:Ix,fog_vertex:Px,fog_pars_vertex:Lx,fog_fragment:Nx,fog_pars_fragment:Ux,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Fx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Bx,lights_pars_begin:kx,lights_toon_fragment:Hx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:qx,lights_fragment_begin:Yx,lights_fragment_maps:Zx,lights_fragment_end:$x,lightprobes_pars_fragment:Kx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:Jx,logdepthbuf_pars_vertex:Qx,logdepthbuf_vertex:ey,map_fragment:ty,map_pars_fragment:ny,map_particle_fragment:iy,map_particle_pars_fragment:ry,metalnessmap_fragment:sy,metalnessmap_pars_fragment:ay,morphinstance_vertex:oy,morphcolor_vertex:cy,morphnormal_vertex:ly,morphtarget_pars_vertex:uy,morphtarget_vertex:hy,normal_fragment_begin:dy,normal_fragment_maps:fy,normal_pars_fragment:py,normal_pars_vertex:my,normal_vertex:gy,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:vy,iridescence_pars_fragment:by,opaque_fragment:My,packing:Sy,premultiplied_alpha_fragment:wy,project_vertex:Ey,dithering_fragment:Ty,dithering_pars_fragment:Ay,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Cy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Py,shadowmap_vertex:Ly,shadowmask_pars_fragment:Ny,skinbase_vertex:Uy,skinning_pars_vertex:Dy,skinning_vertex:Fy,skinnormal_vertex:Oy,specularmap_fragment:By,specularmap_pars_fragment:ky,tonemapping_fragment:zy,tonemapping_pars_fragment:Hy,transmission_fragment:Vy,transmission_pars_fragment:Gy,uv_pars_fragment:Wy,uv_pars_vertex:Xy,uv_vertex:qy,worldpos_vertex:Yy,background_vert:Zy,background_frag:$y,backgroundCube_vert:Ky,backgroundCube_frag:jy,cube_vert:Jy,cube_frag:Qy,depth_vert:e_,depth_frag:t_,distance_vert:n_,distance_frag:i_,equirect_vert:r_,equirect_frag:s_,linedashed_vert:a_,linedashed_frag:o_,meshbasic_vert:c_,meshbasic_frag:l_,meshlambert_vert:u_,meshlambert_frag:h_,meshmatcap_vert:d_,meshmatcap_frag:f_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:x_,meshphysical_vert:y_,meshphysical_frag:__,meshtoon_vert:v_,meshtoon_frag:b_,points_vert:M_,points_frag:S_,shadow_vert:w_,shadow_frag:E_,sprite_vert:T_,sprite_frag:A_},Pe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},gi={basic:{uniforms:on([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:on([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:on([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:on([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:on([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:on([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:on([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:on([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:on([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:on([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:on([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:on([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:on([Pe.lights,Pe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};gi.physical={uniforms:on([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var dl={r:0,b:0,g:0},R_=new Ze,mm=new ot;mm.set(-1,0,0,0,1,0,0,0,1);function C_(i,e,t,n,r,s){let a=new Qe(0),o=r===!0?0:1,l,c,u=null,d=0,h=null;function p(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let x=b.backgroundBlurriness>0;M=e.get(M,x)}return M}function g(b){let M=!1,x=p(b);x===null?m(a,o):x&&x.isColor&&(m(x,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,M){let x=p(M);x&&(x.isCubeTexture||x.mapping===ka)?(c===void 0&&(c=new Vt(new Cs(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Rr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(R_.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mm),c.material.toneMapped=pt.getTransfer(x.colorSpace)!==Et,(u!==x||d!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Vt(new br(2,2),new Cn({name:"BackgroundMaterial",uniforms:Rr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=pt.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,M){b.getRGB(dl,lh(i)),t.buffers.color.setClear(dl.r,dl.g,dl.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:v,dispose:f}}function I_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,a=!1;function o(I,O,B,N,V){let L=!1,C=d(I,N,B,O);s!==C&&(s=C,c(s.object)),L=p(I,N,B,V),L&&g(I,N,B,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,x(I,O,B,N),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function d(I,O,B,N){let V=N.wireframe===!0,L=n[O.id];L===void 0&&(L={},n[O.id]=L);let C=I.isInstancedMesh===!0?I.id:0,$=L[C];$===void 0&&($={},L[C]=$);let F=$[B.id];F===void 0&&(F={},$[B.id]=F);let U=F[V];return U===void 0&&(U=h(l()),F[V]=U),U}function h(I){let O=[],B=[],N=[];for(let V=0;V<t;V++)O[V]=0,B[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:N,object:I,attributes:{},index:null}}function p(I,O,B,N){let V=s.attributes,L=O.attributes,C=0,$=B.getAttributes();for(let F in $)if($[F].location>=0){let G=V[F],ce=L[F];if(ce===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),G===void 0||G.attribute!==ce||ce&&G.data!==ce.data)return!0;C++}return s.attributesNum!==C||s.index!==N}function g(I,O,B,N){let V={},L=O.attributes,C=0,$=B.getAttributes();for(let F in $)if($[F].location>=0){let G=L[F];G===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(G=I.instanceColor));let ce={};ce.attribute=G,G&&G.data&&(ce.data=G.data),V[F]=ce,C++}s.attributes=V,s.attributesNum=C,s.index=N}function v(){let I=s.newAttributes;for(let O=0,B=I.length;O<B;O++)I[O]=0}function m(I){f(I,0)}function f(I,O){let B=s.newAttributes,N=s.enabledAttributes,V=s.attributeDivisors;B[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),V[I]!==O&&(i.vertexAttribDivisor(I,O),V[I]=O)}function b(){let I=s.newAttributes,O=s.enabledAttributes;for(let B=0,N=O.length;B<N;B++)O[B]!==I[B]&&(i.disableVertexAttribArray(B),O[B]=0)}function M(I,O,B,N,V,L,C){C===!0?i.vertexAttribIPointer(I,O,B,V,L):i.vertexAttribPointer(I,O,B,N,V,L)}function x(I,O,B,N){v();let V=N.attributes,L=B.getAttributes(),C=O.defaultAttributeValues;for(let $ in L){let F=L[$];if(F.location>=0){let U=V[$];if(U===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),U!==void 0){let G=U.normalized,ce=U.itemSize,de=e.get(U);if(de===void 0)continue;let he=de.buffer,q=de.type,ue=de.bytesPerElement,H=q===i.INT||q===i.UNSIGNED_INT||U.gpuType===Tc;if(U.isInterleavedBufferAttribute){let J=U.data,_e=J.stride,Fe=U.offset;if(J.isInstancedInterleavedBuffer){for(let ge=0;ge<F.locationSize;ge++)f(F.location+ge,J.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ge=0;ge<F.locationSize;ge++)m(F.location+ge);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ge=0;ge<F.locationSize;ge++)M(F.location+ge,ce/F.locationSize,q,G,_e*ue,(Fe+ce/F.locationSize*ge)*ue,H)}else{if(U.isInstancedBufferAttribute){for(let J=0;J<F.locationSize;J++)f(F.location+J,U.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let J=0;J<F.locationSize;J++)m(F.location+J);i.bindBuffer(i.ARRAY_BUFFER,he);for(let J=0;J<F.locationSize;J++)M(F.location+J,ce/F.locationSize,q,G,ce*ue,ce/F.locationSize*J*ue,H)}}else if(C!==void 0){let G=C[$];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(F.location,G);break;case 3:i.vertexAttrib3fv(F.location,G);break;case 4:i.vertexAttrib4fv(F.location,G);break;default:i.vertexAttrib1fv(F.location,G)}}}}b()}function S(){E();for(let I in n){let O=n[I];for(let B in O){let N=O[B];for(let V in N){let L=N[V];for(let C in L)u(L[C].object),delete L[C];delete N[V]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;let O=n[I.id];for(let B in O){let N=O[B];for(let V in N){let L=N[V];for(let C in L)u(L[C].object),delete L[C];delete N[V]}}delete n[I.id]}function T(I){for(let O in n){let B=n[O];for(let N in B){let V=B[N];if(V[I.id]===void 0)continue;let L=V[I.id];for(let C in L)u(L[C].object),delete L[C];delete V[I.id]}}}function _(I){for(let O in n){let B=n[O],N=I.isInstancedMesh===!0?I.id:0,V=B[N];if(V!==void 0){for(let L in V){let C=V[L];for(let $ in C)u(C[$].object),delete C[$];delete V[L]}delete B[N],Object.keys(B).length===0&&delete n[O]}}}function E(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function P_(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function L_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Mn&&T!==In&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:y}}function N_(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Rn,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let b=s?0:n,M=b*4,x=f.clippingState||null;l.value=x,x=u(g,h,M,p);for(let S=0;S!==M;++S)x[S]=t[S];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=p;M!==v;++M,x+=4)a.copy(d[M]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var zs=4,U_=6,D_=20,F_=256,Ya=new rr,Yp=new Qe,yh=null,_h=0,vh=0,bh=!1,O_=new D,Cr=new D,Vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=O_}=s;yh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,_h,vh),this._renderer.xr.enabled=bh,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ei,format:Pn,colorSpace:pn,depthBuffer:!1},r=Zp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=B_(s)),this._blurMaterial=z_(s,e,t),this._ggxMaterial=k_(s,e,t)}return r}_compileMaterial(e){let t=new Vt(new Jt,e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,n,r,s){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Yp),d.toneMapping=jn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Cs,new Qt({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,f=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,f=!0):(m.color.copy(Yp),f=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));let S=this._cubeSize;ks(r,x*S,M>2?S:0,S,S),d.setRenderTarget(r),f&&d.render(v,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===sr||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;ks(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ya)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,p=d*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-zs?n-g+zs:0),f=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,ks(s,m,f,3*v,2*v),r.setRenderTarget(s),r.render(o,Ya),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,ks(e,m,f,3*v,2*v),r.setRenderTarget(e),r.render(o,Ya)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],d=3*u*(r>this._lodMax-zs?r-this._lodMax+zs:0),h=4*(this._cubeSize-u);ks(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Ya)}};function B_(i){let e=[],t=[],n=i,r=i-zs+1+U_;for(let s=0;s<r;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,p=3,g=new Float32Array(p*h*d),v=new Float32Array(p*h*d);for(let f=0;f<d;f++){let b=f%3*2/3-1,M=f>2?0:-1,x=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];g.set(x,p*h*f);for(let S=0;S<h;S++){let y=u[S*2]*2-1,T=u[S*2+1]*2-1;f===0?Cr.set(1,T,y):f===1?Cr.set(-y,1,-T):f===2?Cr.set(-y,T,1):f===3?Cr.set(-1,T,-y):f===4?Cr.set(-y,-1,T):Cr.set(y,T,-1),Cr.toArray(v,(f*h+S)*p)}}let m=new Jt;m.setAttribute("position",new Ft(g,p)),m.setAttribute("outputDirection",new Ft(v,p)),t.push(new Vt(m,null)),n>zs&&n--}return{lodMeshes:t,sizeLods:e}}function Zp(i,e,t){let n=new xn(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function k_(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function z_(i,e,t){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:D_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function $p(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Kp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pl=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ca(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cs(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:pi});s.uniforms.tEquirect.value=t;let a=new Vt(r,s),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Ht),new _c(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function H_(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===Sc||p===wc)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new pl(g.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,g=p===Sc||p===wc,v=p===sr||p===Tr;if(g||v){let m=t.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Vs(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return g&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new Vs(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Sc?h.mapping=sr:p===wc&&(h.mapping=Tr),h}function l(h){let p=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function V_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&mr("WebGLRenderer: "+n+" extension not supported."),r}}}function G_(i,e,t,n){let r={},s=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(p!==null){let b=p.array;v=p.version;for(let M=0,x=b.length;M<x;M+=3){let S=b[M+0],y=b[M+1],T=b[M+2];h.push(S,y,y,T,T,S)}}else{let b=g.array;v=g.version;for(let M=0,x=b.length/3-1;M<x;M+=3){let S=M+0,y=M+1,T=M+2;h.push(S,y,y,T,T,S)}}let m=new(g.count>=65535?Ma:ba)(h,1);m.version=v;let f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){let h=s.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function W_(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,d*a,p),t.update(h,n,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,p);let v=0;for(let m=0;m<p;m++)v+=h[m];t.update(v,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function X_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function q_(i,e,t){let n=new WeakMap,r=new At;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=o.attributes.position.count*M,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let y=new Float32Array(x*S*4*d),T=new va(y,x,S,d);T.type=In,T.needsUpdate=!0;let _=M*4;for(let R=0;R<d;R++){let I=m[R],O=f[R],B=b[R],N=x*S*4*R;for(let V=0;V<I.count;V++){let L=V*_;p===!0&&(r.fromBufferAttribute(I,V),y[N+L+0]=r.x,y[N+L+1]=r.y,y[N+L+2]=r.z,y[N+L+3]=0),g===!0&&(r.fromBufferAttribute(O,V),y[N+L+4]=r.x,y[N+L+5]=r.y,y[N+L+6]=r.z,y[N+L+7]=0),v===!0&&(r.fromBufferAttribute(B,V),y[N+L+8]=r.x,y[N+L+9]=r.y,y[N+L+10]=r.z,y[N+L+11]=B.itemSize===4?r.w:1)}}h={count:d,texture:T,size:new ct(x,S)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Y_(i,e,t,n,r){let s=new WeakMap;function a(c){let u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Z_={[Xu]:"LINEAR_TONE_MAPPING",[qu]:"REINHARD_TONE_MAPPING",[Yu]:"CINEON_TONE_MAPPING",[Ba]:"ACES_FILMIC_TONE_MAPPING",[$u]:"AGX_TONE_MAPPING",[Ku]:"NEUTRAL_TONE_MAPPING",[Zu]:"CUSTOM_TONE_MAPPING"};function $_(i,e,t,n,r,s){let a=new xn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Jt;c.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new fn([0,2,0,0,2,0],2));let u=new lc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Vt(c,u),h=new rr(-1,1,1,-1,0,1),p=null,g=null,v=!1,m,f=null,b=[],M=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),l!==null&&l.setSize(x,S);for(let y=0;y<b.length;y++){let T=b[y];T.setSize&&T.setSize(x,S)}},this.setEffects=function(x){b=x,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,y=a.height;b.length>0&&o===null&&(o=new xn(S,y,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new xn(S,y,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let _=b[T];_.setSize&&_.setSize(S,y)}},this.begin=function(x,S){if(v||x.toneMapping===jn&&b.length===0)return!1;if(f=S,S!==null){let y=S.width,T=S.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return M===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=jn,!0},this.hasRenderPass=function(){return M},this.end=function(x,S){x.toneMapping=m,v=!0;let y=a,T=o;for(let _=0;_<b.length;_++){let E=b[_];E.enabled!==!1&&(E.render(x,T,y,S),E.needsSwap!==!1&&(y=T,T=T===o?l:o))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,u.defines={},pt.getTransfer(p)===Et&&(u.defines.SRGB_TRANSFER="");let _=Z_[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(f),x.render(d,h),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var gm=new jt,wh=new ir(1,1),xm=new va,ym=new sc,_m=new Ca,jp=[],Jp=[],Qp=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);function Gs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=jp[r];if(s===void 0&&(s=new Float32Array(r),jp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xl(i,e){let t=Jp[e];t===void 0&&(t=new Int32Array(e),Jp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function K_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;tm.set(n),i.uniformMatrix2fv(this.addr,!1,tm),$t(t,n)}}function tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;em.set(n),i.uniformMatrix3fv(this.addr,!1,em),$t(t,n)}}function nv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;Qp.set(n),i.uniformMatrix4fv(this.addr,!1,Qp),$t(t,n)}}function iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function hv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(wh.compareFunction=t.isReversedDepthBuffer()?hl:ul,s=wh):s=gm,t.setTexture2D(e||s,r)}function dv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ym,r)}function fv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_m,r)}function pv(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xm,r)}function mv(i){switch(i){case 5126:return K_;case 35664:return j_;case 35665:return J_;case 35666:return Q_;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return rv;case 35668:case 35672:return sv;case 35669:case 35673:return av;case 5125:return ov;case 36294:return cv;case 36295:return lv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return pv}}function gv(i,e){i.uniform1fv(this.addr,e)}function xv(i,e){let t=Gs(e,this.size,2);i.uniform2fv(this.addr,t)}function yv(i,e){let t=Gs(e,this.size,3);i.uniform3fv(this.addr,t)}function _v(i,e){let t=Gs(e,this.size,4);i.uniform4fv(this.addr,t)}function vv(i,e){let t=Gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bv(i,e){let t=Gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mv(i,e){let t=Gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sv(i,e){i.uniform1iv(this.addr,e)}function wv(i,e){i.uniform2iv(this.addr,e)}function Ev(i,e){i.uniform3iv(this.addr,e)}function Tv(i,e){i.uniform4iv(this.addr,e)}function Av(i,e){i.uniform1uiv(this.addr,e)}function Rv(i,e){i.uniform2uiv(this.addr,e)}function Cv(i,e){i.uniform3uiv(this.addr,e)}function Iv(i,e){i.uniform4uiv(this.addr,e)}function Pv(i,e,t){let n=this.cache,r=e.length,s=xl(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=wh:a=gm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Lv(i,e,t){let n=this.cache,r=e.length,s=xl(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ym,s[a])}function Nv(i,e,t){let n=this.cache,r=e.length,s=xl(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||_m,s[a])}function Uv(i,e,t){let n=this.cache,r=e.length,s=xl(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xm,s[a])}function Dv(i){switch(i){case 5126:return gv;case 35664:return xv;case 35665:return yv;case 35666:return _v;case 35674:return vv;case 35675:return bv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return wv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Uv}}var Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mv(t.type)}},Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},Ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function nm(i,e){i.seq.push(e),i.map[e.id]=e}function Fv(i,e,t){let n=i.name,r=n.length;for(Mh.lastIndex=0;;){let s=Mh.exec(n),a=Mh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){nm(t,c===void 0?new Eh(o,i,e):new Th(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Ah(o),nm(t,d)),t=d}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Fv(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function im(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ov=37297,Bv=0;function kv(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var rm=new ot;function zv(i){pt._getMatrix(rm,pt.workingColorSpace,i);let e=`mat3( ${rm.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case ya:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+kv(i.getShaderSource(e),o)}else return s}function Hv(i,e){let t=zv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Vv={[Xu]:"Linear",[qu]:"Reinhard",[Yu]:"Cineon",[Ba]:"ACESFilmic",[$u]:"AgX",[Ku]:"Neutral",[Zu]:"Custom"};function Gv(i,e){let t=Vv[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fl=new D;function Wv(){pt.getLuminanceCoefficients(fl);let i=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function qv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $a(i){return i!==""}function am(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function om(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(i){return i.replace(Zv,Kv)}var $v=new Map;function Kv(i,e){let t=ft[e];if(t===void 0){let n=$v.get(e);if(n!==void 0)t=ft[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rh(t)}var jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(i){return i.replace(jv,Jv)}function Jv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Qv={[Oa]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function eb(i){return Qv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tb={[sr]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE_UV"};function nb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ib={[Tr]:"ENVMAP_MODE_REFRACTION"};function rb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ib[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sb={[Wu]:"ENVMAP_BLENDING_MULTIPLY",[Tp]:"ENVMAP_BLENDING_MIX",[Ap]:"ENVMAP_BLENDING_ADD"};function ab(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sb[i.combine]||"ENVMAP_BLENDING_NONE"}function ob(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cb(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=eb(t),c=nb(t),u=rb(t),d=ab(t),h=ob(t),p=Xv(t),g=qv(s),v=r.createProgram(),m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($a).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($a).join(`
`),f.length>0&&(f+=`
`)):(m=[lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),f=[lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?ft.tonemapping_pars_fragment:"",t.toneMapping!==jn?Gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Hv("linearToOutputTexel",t.outputColorSpace),Wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($a).join(`
`)),a=Rh(a),a=am(a,t),a=om(a,t),o=Rh(o),o=am(o,t),o=om(o,t),a=cm(a),o=cm(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=b+m+a,x=b+f+o,S=im(r,r.VERTEX_SHADER,M),y=im(r,r.FRAGMENT_SHADER,x);r.attachShader(v,S),r.attachShader(v,y),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(I){if(i.debug.checkShaderErrors){let O=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(S)||"",N=r.getShaderInfoLog(y)||"",V=O.trim(),L=B.trim(),C=N.trim(),$=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,S,y);else{let U=sm(r,S,"vertex"),G=sm(r,y,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+U+`
`+G)}else V!==""?Je("WebGLProgram: Program Info Log:",V):(L===""||C==="")&&(F=!1);F&&(I.diagnostics={runnable:$,programLog:V,vertexShader:{log:L,prefix:m},fragmentShader:{log:C,prefix:f}})}r.deleteShader(S),r.deleteShader(y),_=new Hs(r,v),E=Yv(r,v)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,Ov)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=y,this}var lb=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ih(e),t.set(e,n)),n}},Ih=class{constructor(e){this.id=lb++,this.code=e,this.usedTimes=0}};function ub(i){return i===or||i===Wa||i===Xa}function hb(i,e,t,n,r,s){let a=new vs,o=new Ch,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,R,I,O,B){let N=I.fog,V=O.geometry,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,C=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=e.get(_.envMap||L,C),F=$&&$.mapping===ka?$.image.height:null,U=p[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Je("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let G=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=G!==void 0?G.length:0,de=0;V.morphAttributes.position!==void 0&&(de=1),V.morphAttributes.normal!==void 0&&(de=2),V.morphAttributes.color!==void 0&&(de=3);let he,q,ue,H;if(U){let ut=gi[U];he=ut.vertexShader,q=ut.fragmentShader}else{he=_.vertexShader,q=_.fragmentShader;let ut=o.getVertexShaderStage(_),_t=o.getFragmentShaderStage(_);o.update(_,ut,_t),ue=ut.id,H=_t.id}let J=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,pe=!!_.map,we=!!_.matcap,be=!!$,Be=!!_.aoMap,Q=!!_.lightMap,K=!!_.bumpMap&&_.wireframe===!1,re=!!_.normalMap,fe=!!_.displacementMap,ve=!!_.emissiveMap,Xe=!!_.metalnessMap,et=!!_.roughnessMap,X=_.anisotropy>0,Ve=_.clearcoat>0,Ne=_.dispersion>0,P=_.retroreflectivity>0,w=_.iridescence>0,Z=_.sheen>0,z=_.transmission>0,k=X&&!!_.anisotropyMap,ee=Ve&&!!_.clearcoatMap,oe=Ve&&!!_.clearcoatNormalMap,j=Ve&&!!_.clearcoatRoughnessMap,ae=w&&!!_.iridescenceMap,xe=w&&!!_.iridescenceThicknessMap,Ue=Z&&!!_.sheenColorMap,Ee=Z&&!!_.sheenRoughnessMap,Se=!!_.specularMap,De=!!_.specularColorMap,Ge=!!_.specularIntensityMap,it=z&&!!_.transmissionMap,Y=z&&!!_.thicknessMap,Te=!!_.gradientMap,le=!!_.alphaMap,Ae=_.alphaTest>0,Ie=!!_.alphaHash,me=!!_.extensions,We=jn;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(We=i.toneMapping);let Oe={shaderID:U,shaderType:_.type,shaderName:_.name,vertexShader:he,fragmentShader:q,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pe,matcap:we,envMap:be,envMapMode:be&&$.mapping,envMapCubeUVHeight:F,aoMap:Be,lightMap:Q,bumpMap:K,normalMap:re,displacementMap:fe,emissiveMap:ve,normalMapObjectSpace:re&&_.normalMapType===Pp,normalMapTangentSpace:re&&_.normalMapType===ll,packedNormalMap:re&&_.normalMapType===ll&&ub(_.normalMap.format),metalnessMap:Xe,roughnessMap:et,anisotropy:X,anisotropyMap:k,clearcoat:Ve,clearcoatMap:ee,clearcoatNormalMap:oe,clearcoatRoughnessMap:j,dispersion:Ne,retroreflection:P,iridescence:w,iridescenceMap:ae,iridescenceThicknessMap:xe,sheen:Z,sheenColorMap:Ue,sheenRoughnessMap:Ee,specularMap:Se,specularColorMap:De,specularIntensityMap:Ge,transmission:z,transmissionMap:it,thicknessMap:Y,gradientMap:Te,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:Ae,alphaHash:Ie,combine:_.combine,mapUv:pe&&g(_.map.channel),aoMapUv:Be&&g(_.aoMap.channel),lightMapUv:Q&&g(_.lightMap.channel),bumpMapUv:K&&g(_.bumpMap.channel),normalMapUv:re&&g(_.normalMap.channel),displacementMapUv:fe&&g(_.displacementMap.channel),emissiveMapUv:ve&&g(_.emissiveMap.channel),metalnessMapUv:Xe&&g(_.metalnessMap.channel),roughnessMapUv:et&&g(_.roughnessMap.channel),anisotropyMapUv:k&&g(_.anisotropyMap.channel),clearcoatMapUv:ee&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(_.sheenRoughnessMap.channel),specularMapUv:Se&&g(_.specularMap.channel),specularColorMapUv:De&&g(_.specularColorMap.channel),specularIntensityMapUv:Ge&&g(_.specularIntensityMap.channel),transmissionMapUv:it&&g(_.transmissionMap.channel),thicknessMapUv:Y&&g(_.thicknessMap.channel),alphaMapUv:le&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(re||X),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(pe||le),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&re===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:de,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:pe&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===Et,decodeVideoTextureEmissive:ve&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===Et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(f(E,_),b(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function f(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let E=p[_.type],R;if(E){let I=gi[E];R=Wp.clone(I.uniforms)}else R=_.uniforms;return R}function x(_,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new cb(i,E,_,r),c.push(R),u.set(E,R)),R}function S(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:T}}function db(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function fb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function um(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hm(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,v,m,f){let b=i[e];return b===void 0?(b={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:f},i[e]=b):(b.id=h.id,b.object=h,b.geometry=p,b.material=g,b.materialVariant=a(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=m,b.group=f),e++,b}function l(h,p,g,v,m,f,b){b.reversedDepth===!0&&(m=-m);let M=o(h,p,g,v,m,f);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):t.push(M)}function c(h,p,g,v,m,f){let b=o(h,p,g,v,m,f);g.transmission>0?n.unshift(b):g.transparent===!0?r.unshift(b):t.unshift(b)}function u(h,p){t.length>1&&t.sort(h||fb),n.length>1&&n.sort(p||um),r.length>1&&r.sort(p||um)}function d(){for(let h=e,p=i.length;h<p;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function pb(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new hm,i.set(n,[a])):r>=s.length?(a=new hm,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Qe};break;case"SpotLight":t={position:new D,direction:new D,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function gb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var xb=0;function yb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _b(i){let e=new mb,t=gb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new Ze,a=new Ze;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,b=0,M=0,x=0,S=0,y=0,T=0,_=0,E=0,R=0;c.sort(yb);for(let O=0,B=c.length;O<B;O++){let N=c[O],V=N.color,L=N.intensity,C=N.distance,$=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===or?$=N.shadow.map.texture:$=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=V.r*L,d+=V.g*L,h+=V.b*L;else if(N.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(N.sh.coefficients[F],L);R++}else if(N.isSunLight){let F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let U=N.shadow,G=t.get(N);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[g]=G,n.sunShadowMap[g]=$;let ce=U.getViewportCount();for(let de=0;de<ce;de++)n.sunShadowMatrix[v+de]=U.getMatrix(de),n.sunShadowCascade[v+de]=U._cascadeData[de];v+=ce,g++}n.sun[p]=F,p++}else if(N.isDirectionalLight){let F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let U=N.shadow,G=t.get(N);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=N.shadow.matrix,S++}n.directional[m]=F,m++}else if(N.isSpotLight){let F=e.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(V).multiplyScalar(L),F.distance=C,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,n.spot[b]=F;let U=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,U.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[b]=U.matrix,N.castShadow){let G=t.get(N);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,n.spotShadow[b]=G,n.spotShadowMap[b]=$,T++}b++}else if(N.isRectAreaLight){let F=e.get(N);F.color.copy(V).multiplyScalar(L),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=F,M++}else if(N.isPointLight){let F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity),F.distance=N.distance,F.decay=N.decay,N.castShadow){let U=N.shadow,G=t.get(N);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,G.shadowCameraNear=U.camera.near,G.shadowCameraFar=U.camera.far,n.pointShadow[f]=G,n.pointShadowMap[f]=$,n.pointShadowMatrix[f]=N.shadow.matrix,y++}n.point[f]=F,f++}else if(N.isHemisphereLight){let F=e.get(N);F.skyColor.copy(N.color).multiplyScalar(L),F.groundColor.copy(N.groundColor).multiplyScalar(L),n.hemi[x]=F,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==b||I.rectAreaLength!==M||I.hemiLength!==x||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==T||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=M,n.point.length=f,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=b,I.rectAreaLength=M,I.hemiLength=x,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=T,I.numSpotMaps=_,I.numLightProbes=R,n.version=xb++)}function l(c,u){let d=0,h=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){let x=c[b];if(x.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),d++}else if(x.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),h++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),g++}else if(x.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function dm(i){let e=new _b(i),t=[],n=[],r=[];function s(h){d.camera=h,t.length=0,n.length=0,r.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vb(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new dm(i),e.set(r,[o])):s>=a.length?(o=new dm(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
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
}`,Sb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],wb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],fm=new Ze,Za=new D,Sh=new D;function Eb(i,e,t){let n=new Ts,r=new ct,s=new ct,a=new At,o=new uc,l=new hc,c={},u=t.maxTextureSize,d={[bn]:mn,[mn]:bn,[en]:en},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:bb,fragmentShader:Mb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Vt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let f=this.type;this.render=function(y,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Mc&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oa);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=f!==this.type;B&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=y.length;N<V;N++){let L=y[N],C=L.shadow;if(C===void 0){Je("WebGLShadowMap:",L,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);let $=C.getFrameExtents();r.multiply($),s.copy(C.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,C.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,C.mapSize.y=s.y));let F=i.state.buffers.depth.getReversed();if(C.camera._reversedDepth=F,C.map===null||B===!0){if(C.map!==null&&(C.map.depthTexture!==null&&(C.map.depthTexture.dispose(),C.map.depthTexture=null),C.map.dispose()),this.type===Ns){if(L.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}C.map=new xn(r.x,r.y,{format:or,type:ei,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),C.map.texture.name=L.name+".shadowMap",C.map.depthTexture=new ir(r.x,r.y,In),C.map.depthTexture.name=L.name+".shadowMapDepth",C.map.depthTexture.format=li,C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=zt,C.map.depthTexture.magFilter=zt}else L.isPointLight?(C.map=new pl(r.x),C.map.depthTexture=new cc(r.x,Qn)):(C.map=new xn(r.x,r.y),C.map.depthTexture=new ir(r.x,r.y,Qn)),C.map.depthTexture.name=L.name+".shadowMap",C.map.depthTexture.format=li,this.type===Oa?(C.map.depthTexture.compareFunction=F?hl:ul,C.map.depthTexture.minFilter=Ht,C.map.depthTexture.magFilter=Ht):(C.map.depthTexture.compareFunction=null,C.map.depthTexture.minFilter=zt,C.map.depthTexture.magFilter=zt);C.camera.updateProjectionMatrix()}C.map.isWebGLCubeRenderTarget!==!0&&(C.map.width!==r.x||C.map.height!==r.y)&&C.map.setSize(r.x,r.y);let U=C.map.isWebGLCubeRenderTarget?6:C.getViewportCount();L.isPointLight!==!0&&C.updateMatrices(L,_);for(let G=0;G<U;G++){let ce=C.getCamera(G);if(L.isPointLight){let de=C.camera,he=C.matrix,q=L.distance||de.far;q!==de.far&&(de.far=q,de.updateProjectionMatrix()),Za.setFromMatrixPosition(L.matrixWorld),de.position.copy(Za),Sh.copy(de.position),Sh.add(Sb[G]),de.up.copy(wb[G]),de.lookAt(Sh),de.updateMatrixWorld(),he.makeTranslation(-Za.x,-Za.y,-Za.z),fm.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),C._frustum.setFromProjectionMatrix(fm,de.coordinateSystem,de.reversedDepth)}if(C.map.isWebGLCubeRenderTarget)i.setRenderTarget(C.map,G),i.clear();else{G===0&&(i.setRenderTarget(C.map),i.clear());let de=C.getViewport(G);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),O.viewport(a)}n=C.getFrustum(G),x(T,_,ce,L,this.type)}C.isPointLightShadow!==!0&&this.type===Ns&&b(C,_),C.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,I)};function b(y,T){let _=e.update(v);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null?y.mapPass=new xn(r.x,r.y,{format:or,type:ei}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(T,null,_,h,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value.set(y.map.width,y.map.height),p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(T,null,_,p,v,null)}function M(y,T,_,E){let R=null,I=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let O=R.uuid,B=T.uuid,N=c[O];N===void 0&&(N={},c[O]=N);let V=N[B];V===void 0&&(V=R.clone(),N[B]=V,T.addEventListener("dispose",S)),R=V}if(R.visible=T.visible,R.wireframe=T.wireframe,E===Ns?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:d[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=_}return R}function x(y,T,_,E,R){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===Ns)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);let B=e.update(y),N=y.material;if(Array.isArray(N)){let V=B.groups;for(let L=0,C=V.length;L<C;L++){let $=V[L],F=N[$.materialIndex];if(F&&F.visible){let U=M(y,F,E,R);y.onBeforeShadow(i,y,T,_,B,U,$),i.renderBufferDirect(_,null,B,U,y,$),y.onAfterShadow(i,y,T,_,B,U,$)}}}else if(N.visible){let V=M(y,N,E,R);y.onBeforeShadow(i,y,T,_,B,V,null),i.renderBufferDirect(_,null,B,V,y,null),y.onAfterShadow(i,y,T,_,B,V,null)}}let O=y.children;for(let B=0,N=O.length;B<N;B++)x(O[B],T,_,E,R)}function S(y){y.target.removeEventListener("dispose",S);for(let _ in c){let E=c[_],R=y.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Tb(i,e){function t(){let Y=!1,Te=new At,le=null,Ae=new At(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!Y&&(i.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){Y=Ie},setClear:function(Ie,me,We,Oe,ut){ut===!0&&(Ie*=Oe,me*=Oe,We*=Oe),Te.set(Ie,me,We,Oe),Ae.equals(Te)===!1&&(i.clearColor(Ie,me,We,Oe),Ae.copy(Te))},reset:function(){Y=!1,le=null,Ae.set(-1,0,0,0)}}}function n(){let Y=!1,Te=!1,le=null,Ae=null,Ie=null;return{setReversed:function(me){if(Te!==me){let We=e.get("EXT_clip_control");me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Te=me;let Oe=Ie;Ie=null,this.setClear(Oe)}},getReversed:function(){return Te},setTest:function(me){me?J(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(me){le!==me&&!Y&&(i.depthMask(me),le=me)},setFunc:function(me){if(Te&&(me=Vp[me]),Ae!==me){switch(me){case Ko:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case ec:i.depthFunc(i.GEQUAL);break;case tc:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=me}},setLocked:function(me){Y=me},setClear:function(me){Ie!==me&&(Ie=me,Te&&(me=1-me),i.clearDepth(me))},reset:function(){Y=!1,le=null,Ae=null,Ie=null,Te=!1}}}function r(){let Y=!1,Te=null,le=null,Ae=null,Ie=null,me=null,We=null,Oe=null,ut=null;return{setTest:function(_t){Y||(_t?J(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(_t){Te!==_t&&!Y&&(i.stencilMask(_t),Te=_t)},setFunc:function(_t,En,cn){(le!==_t||Ae!==En||Ie!==cn)&&(i.stencilFunc(_t,En,cn),le=_t,Ae=En,Ie=cn)},setOp:function(_t,En,cn){(me!==_t||We!==En||Oe!==cn)&&(i.stencilOp(_t,En,cn),me=_t,We=En,Oe=cn)},setLocked:function(_t){Y=_t},setClear:function(_t){ut!==_t&&(i.clearStencil(_t),ut=_t)},reset:function(){Y=!1,Te=null,le=null,Ae=null,Ie=null,me=null,We=null,Oe=null,ut=null}}}let s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,g=[],v=null,m=!1,f=null,b=null,M=null,x=null,S=null,y=null,T=null,_=new Qe(0,0,0),E=0,R=!1,I=null,O=null,B=null,N=null,V=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,$=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(F)[1]),C=$>=1):F.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),C=$>=2);let U=null,G={},ce=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),he=new At().fromArray(ce),q=new At().fromArray(de);function ue(Y,Te,le,Ae){let Ie=new Uint8Array(4),me=i.createTexture();i.bindTexture(Y,me),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<le;We++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Te+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return me}let H={};H[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(ps),K(!1),re(Bu),J(i.CULL_FACE),Be(pi);function J(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function _e(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function Fe(Y,Te){return h[Y]!==Te?(i.bindFramebuffer(Y,Te),h[Y]=Te,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Te),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function ge(Y,Te){let le=g,Ae=!1;if(Y){le=p.get(Te),le===void 0&&(le=[],p.set(Te,le));let Ie=Y.textures;if(le.length!==Ie.length||le[0]!==i.COLOR_ATTACHMENT0){for(let me=0,We=Ie.length;me<We;me++)le[me]=i.COLOR_ATTACHMENT0+me;le.length=Ie.length,Ae=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(le)}function pe(Y){return v!==Y?(i.useProgram(Y),v=Y,!0):!1}let we={[Er]:i.FUNC_ADD,[lp]:i.FUNC_SUBTRACT,[up]:i.FUNC_REVERSE_SUBTRACT};we[hp]=i.MIN,we[dp]=i.MAX;let be={[fp]:i.ZERO,[pp]:i.ONE,[mp]:i.SRC_COLOR,[Vu]:i.SRC_ALPHA,[bp]:i.SRC_ALPHA_SATURATE,[_p]:i.DST_COLOR,[xp]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[Gu]:i.ONE_MINUS_SRC_ALPHA,[vp]:i.ONE_MINUS_DST_COLOR,[yp]:i.ONE_MINUS_DST_ALPHA,[Mp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Ep]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(Y,Te,le,Ae,Ie,me,We,Oe,ut,_t){if(Y===pi){m===!0&&(_e(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),Y!==cp){if(Y!==f||_t!==R){if((b!==Er||S!==Er)&&(i.blendEquation(i.FUNC_ADD),b=Er,S=Er),_t)switch(Y){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ku:i.blendFunc(i.ONE,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ku:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zu:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hu:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",Y);break}M=null,x=null,y=null,T=null,_.set(0,0,0),E=0,f=Y,R=_t}return}Ie=Ie||Te,me=me||le,We=We||Ae,(Te!==b||Ie!==S)&&(i.blendEquationSeparate(we[Te],we[Ie]),b=Te,S=Ie),(le!==M||Ae!==x||me!==y||We!==T)&&(i.blendFuncSeparate(be[le],be[Ae],be[me],be[We]),M=le,x=Ae,y=me,T=We),(Oe.equals(_)===!1||ut!==E)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ut),_.copy(Oe),E=ut),f=Y,R=!1}function Q(Y,Te){Y.side===en?_e(i.CULL_FACE):J(i.CULL_FACE);let le=Y.side===mn;Te&&(le=!le),K(le),Y.blending===Us&&Y.transparent===!1?Be(pi):Be(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),s.setMask(Y.colorWrite);let Ae=Y.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ve(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(Y){I!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),I=Y)}function re(Y){Y!==ap?(J(i.CULL_FACE),Y!==O&&(Y===Bu?i.cullFace(i.BACK):Y===op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),O=Y}function fe(Y){Y!==B&&(C&&i.lineWidth(Y),B=Y)}function ve(Y,Te,le){Y?(J(i.POLYGON_OFFSET_FILL),(N!==Te||V!==le)&&(N=Te,V=le,a.getReversed()&&(Te=-Te),i.polygonOffset(Te,le))):_e(i.POLYGON_OFFSET_FILL)}function Xe(Y){Y?J(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function et(Y){Y===void 0&&(Y=i.TEXTURE0+L-1),U!==Y&&(i.activeTexture(Y),U=Y)}function X(Y,Te,le){le===void 0&&(U===null?le=i.TEXTURE0+L-1:le=U);let Ae=G[le];Ae===void 0&&(Ae={type:void 0,texture:void 0},G[le]=Ae),(Ae.type!==Y||Ae.texture!==Te)&&(U!==le&&(i.activeTexture(le),U=le),i.bindTexture(Y,Te||H[Y]),Ae.type=Y,Ae.texture=Te)}function Ve(){let Y=G[U];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ne(){try{i.compressedTexImage2D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function w(){try{i.texSubImage2D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function Z(){try{i.texSubImage3D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function k(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function ee(){try{i.texStorage2D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function oe(){try{i.texStorage3D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function j(){try{i.texImage2D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function ae(){try{i.texImage3D(...arguments)}catch(Y){rt("WebGLState:",Y)}}function xe(Y){return d[Y]!==void 0?d[Y]:i.getParameter(Y)}function Ue(Y,Te){d[Y]!==Te&&(i.pixelStorei(Y,Te),d[Y]=Te)}function Ee(Y){he.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),he.copy(Y))}function Se(Y){q.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),q.copy(Y))}function De(Y,Te){let le=c.get(Te);le===void 0&&(le=new WeakMap,c.set(Te,le));let Ae=le.get(Y);Ae===void 0&&(Ae=i.getUniformBlockIndex(Te,Y.name),le.set(Y,Ae))}function Ge(Y,Te){let Ae=c.get(Te).get(Y);l.get(Te)!==Ae&&(i.uniformBlockBinding(Te,Ae,Y.__bindingPointIndex),l.set(Te,Ae))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},U=null,G={},h={},p=new WeakMap,g=[],v=null,m=!1,f=null,b=null,M=null,x=null,S=null,y=null,T=null,_=new Qe(0,0,0),E=0,R=!1,I=null,O=null,B=null,N=null,V=null,he.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:_e,bindFramebuffer:Fe,drawBuffers:ge,useProgram:pe,setBlending:Be,setMaterial:Q,setFlipSided:K,setCullFace:re,setLineWidth:fe,setPolygonOffset:ve,setScissorTest:Xe,activeTexture:et,bindTexture:X,unbindTexture:Ve,compressedTexImage2D:Ne,compressedTexImage3D:P,texImage2D:j,texImage3D:ae,pixelStorei:Ue,getParameter:xe,updateUBOMapping:De,uniformBlockBinding:Ge,texStorage2D:ee,texStorage3D:oe,texSubImage2D:w,texSubImage3D:Z,compressedTexSubImage2D:z,compressedTexSubImage3D:k,scissor:Ee,viewport:Se,reset:it}}function Ab(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap,d=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,w){return g?new OffscreenCanvas(P,w):xs("canvas")}function m(P,w,Z){let z=1,k=Ne(P);if((k.width>Z||k.height>Z)&&(z=Z/Math.max(k.width,k.height)),z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ee=Math.floor(z*k.width),oe=Math.floor(z*k.height);h===void 0&&(h=v(ee,oe));let j=w?v(ee,oe):h;return j.width=ee,j.height=oe,j.getContext("2d").drawImage(P,0,0,ee,oe),Je("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+ee+"x"+oe+")."),j}else return"data"in P&&Je("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),P;return P}function f(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,w,Z,z,k,ee=!1){if(P!==null){if(i[P]!==void 0)return i[P];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe;z&&(oe=e.get("EXT_texture_norm16"),oe||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=w;if(w===i.RED&&(Z===i.FLOAT&&(j=i.R32F),Z===i.HALF_FLOAT&&(j=i.R16F),Z===i.UNSIGNED_BYTE&&(j=i.R8),Z===i.UNSIGNED_SHORT&&oe&&(j=oe.R16_EXT),Z===i.SHORT&&oe&&(j=oe.R16_SNORM_EXT)),w===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(j=i.R8UI),Z===i.UNSIGNED_SHORT&&(j=i.R16UI),Z===i.UNSIGNED_INT&&(j=i.R32UI),Z===i.BYTE&&(j=i.R8I),Z===i.SHORT&&(j=i.R16I),Z===i.INT&&(j=i.R32I)),w===i.RG&&(Z===i.FLOAT&&(j=i.RG32F),Z===i.HALF_FLOAT&&(j=i.RG16F),Z===i.UNSIGNED_BYTE&&(j=i.RG8),Z===i.UNSIGNED_SHORT&&oe&&(j=oe.RG16_EXT),Z===i.SHORT&&oe&&(j=oe.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(j=i.RG8UI),Z===i.UNSIGNED_SHORT&&(j=i.RG16UI),Z===i.UNSIGNED_INT&&(j=i.RG32UI),Z===i.BYTE&&(j=i.RG8I),Z===i.SHORT&&(j=i.RG16I),Z===i.INT&&(j=i.RG32I)),w===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),Z===i.UNSIGNED_INT&&(j=i.RGB32UI),Z===i.BYTE&&(j=i.RGB8I),Z===i.SHORT&&(j=i.RGB16I),Z===i.INT&&(j=i.RGB32I)),w===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),Z===i.UNSIGNED_INT&&(j=i.RGBA32UI),Z===i.BYTE&&(j=i.RGBA8I),Z===i.SHORT&&(j=i.RGBA16I),Z===i.INT&&(j=i.RGBA32I)),w===i.RGB&&(Z===i.UNSIGNED_SHORT&&oe&&(j=oe.RGB16_EXT),Z===i.SHORT&&oe&&(j=oe.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),w===i.RGBA){let ae=ee?ya:pt.getTransfer(k);Z===i.FLOAT&&(j=i.RGBA32F),Z===i.HALF_FLOAT&&(j=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(j=ae===Et?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&oe&&(j=oe.RGBA16_EXT),Z===i.SHORT&&oe&&(j=oe.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(P,w){let Z;return P?w===null||w===Qn||w===Os?Z=i.DEPTH24_STENCIL8:w===In?Z=i.DEPTH32F_STENCIL8:w===Fs&&(Z=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Qn||w===Os?Z=i.DEPTH_COMPONENT24:w===In?Z=i.DEPTH_COMPONENT32F:w===Fs&&(Z=i.DEPTH_COMPONENT16),Z}function y(P,w){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Ht?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function T(P){let w=P.target;w.removeEventListener("dispose",T),E(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&d.delete(w)}function _(P){let w=P.target;w.removeEventListener("dispose",_),I(w)}function E(P){let w=n.get(P);if(w.__webglInit===void 0)return;let Z=P.source,z=p.get(Z);if(z){let k=z[w.__cacheKey];k.usedTimes--,k.usedTimes===0&&R(P),Object.keys(z).length===0&&p.delete(Z)}n.remove(P)}function R(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let Z=P.source,z=p.get(Z);delete z[w.__cacheKey],a.memory.textures--}function I(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(w.__webglFramebuffer[z]))for(let k=0;k<w.__webglFramebuffer[z].length;k++)i.deleteFramebuffer(w.__webglFramebuffer[z][k]);else i.deleteFramebuffer(w.__webglFramebuffer[z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[z])}else{if(Array.isArray(w.__webglFramebuffer))for(let z=0;z<w.__webglFramebuffer.length;z++)i.deleteFramebuffer(w.__webglFramebuffer[z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let z=0;z<w.__webglColorRenderbuffer.length;z++)w.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Z=P.textures;for(let z=0,k=Z.length;z<k;z++){let ee=n.get(Z[z]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(Z[z])}n.remove(P)}let O=0;function B(){O=0}function N(){return O}function V(P){O=P}function L(){let P=O;return P>=r.maxTextures&&Je("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,P}function C(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function $(P,w){let Z=n.get(P);if(P.isVideoTexture&&X(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){let z=P.image;if(z===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Z,P,w);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+w)}function F(P,w){let Z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){_e(Z,P,w);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+w)}function U(P,w){let Z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){_e(Z,P,w);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+w)}function G(P,w){let Z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Z.__version!==P.version){Fe(Z,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+w)}let ce={[tr]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[ms]:i.MIRRORED_REPEAT},de={[zt]:i.NEAREST,[Ec]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Ds]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},he={[Np]:i.NEVER,[Bp]:i.ALWAYS,[Up]:i.LESS,[ul]:i.LEQUAL,[Dp]:i.EQUAL,[hl]:i.GEQUAL,[Fp]:i.GREATER,[Op]:i.NOTEQUAL};function q(P,w){if(w.type===In&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ht||w.magFilter===Ds||w.magFilter===Ar||w.magFilter===Jn||w.minFilter===Ht||w.minFilter===Ds||w.minFilter===Ar||w.minFilter===Jn)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ce[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ce[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ce[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,de[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,de[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===zt||w.minFilter!==Ar&&w.minFilter!==Jn||w.type===In&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ue(P,w){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",T));let z=w.source,k=p.get(z);k===void 0&&(k={},p.set(z,k));let ee=C(w);if(ee!==P.__cacheKey){k[ee]===void 0&&(k[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),k[ee].usedTimes++;let oe=k[P.__cacheKey];oe!==void 0&&(k[P.__cacheKey].usedTimes--,oe.usedTimes===0&&R(w)),P.__cacheKey=ee,P.__webglTexture=k[ee].texture}return Z}function H(P,w,Z){return Math.floor(Math.floor(P/Z)/w)}function J(P,w,Z,z){let ee=P.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Z,z,w.data);else{ee.sort((Ue,Ee)=>Ue.start-Ee.start);let oe=0;for(let Ue=1;Ue<ee.length;Ue++){let Ee=ee[oe],Se=ee[Ue],De=Ee.start+Ee.count,Ge=H(Se.start,w.width,4),it=H(Ee.start,w.width,4);Se.start<=De+1&&Ge===it&&H(Se.start+Se.count-1,w.width,4)===Ge?Ee.count=Math.max(Ee.count,Se.start+Se.count-Ee.start):(++oe,ee[oe]=Se)}ee.length=oe+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Ue=0,Ee=ee.length;Ue<Ee;Ue++){let Se=ee[Ue],De=Math.floor(Se.start/4),Ge=Math.ceil(Se.count/4),it=De%w.width,Y=Math.floor(De/w.width),Te=Ge,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,it),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(i.TEXTURE_2D,0,it,Y,Te,le,Z,z,w.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function _e(P,w,Z){let z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(z=i.TEXTURE_3D);let k=ue(P,w),ee=w.source;t.bindTexture(z,P.__webglTexture,i.TEXTURE0+Z);let oe=n.get(ee);if(ee.version!==oe.__version||k===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let le=pt.getPrimaries(pt.workingColorSpace),Ae=w.colorSpace===Gn?null:pt.getPrimaries(w.colorSpace),Ie=w.colorSpace===Gn||le===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ae=m(w.image,!1,r.maxTextureSize);ae=Ve(w,ae);let xe=s.convert(w.format,w.colorSpace),Ue=s.convert(w.type),Ee=x(w.internalFormat,xe,Ue,w.normalized,w.colorSpace,w.isVideoTexture);q(z,w);let Se,De=w.mipmaps,Ge=w.isVideoTexture!==!0,it=oe.__version===void 0||k===!0,Y=ee.dataReady,Te=y(w,ae);if(w.isDepthTexture)Ee=S(w.format===ar,w.type),it&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Ee,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ae.width,ae.height,0,xe,Ue,null));else if(w.isDataTexture)if(De.length>0){Ge&&it&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,De[0].width,De[0].height);for(let le=0,Ae=De.length;le<Ae;le++)Se=De[le],Ge?Y&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Se.width,Se.height,xe,Ue,Se.data):t.texImage2D(i.TEXTURE_2D,le,Ee,Se.width,Se.height,0,xe,Ue,Se.data);w.generateMipmaps=!1}else Ge?(it&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,ae.width,ae.height),Y&&J(w,ae,xe,Ue)):t.texImage2D(i.TEXTURE_2D,0,Ee,ae.width,ae.height,0,xe,Ue,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ee,De[0].width,De[0].height,ae.depth);for(let le=0,Ae=De.length;le<Ae;le++)if(Se=De[le],w.format!==Pn)if(xe!==null)if(Ge){if(Y)if(w.layerUpdates.size>0){let Ie=dh(Se.width,Se.height,w.format,w.type);for(let me of w.layerUpdates){let We=Se.data.subarray(me*Ie/Se.data.BYTES_PER_ELEMENT,(me+1)*Ie/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,me,Se.width,Se.height,1,xe,We)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,ae.depth,xe,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Ee,Se.width,Se.height,ae.depth,0,Se.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,ae.depth,xe,Ue,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Ee,Se.width,Se.height,ae.depth,0,xe,Ue,Se.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ge&&it&&t.texStorage2D(i.TEXTURE_2D,Te,Ee,De[0].width,De[0].height);for(let le=0,Ae=De.length;le<Ae;le++)Se=De[le],w.format!==Pn?xe!==null?Ge?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Se.width,Se.height,xe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Ee,Se.width,Se.height,0,Se.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Y&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Se.width,Se.height,xe,Ue,Se.data):t.texImage2D(i.TEXTURE_2D,le,Ee,Se.width,Se.height,0,xe,Ue,Se.data)}else if(w.isDataArrayTexture)if(Ge){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Ee,ae.width,ae.height,ae.depth),Y)if(w.layerUpdates.size>0){let le=dh(ae.width,ae.height,w.format,w.type);for(let Ae of w.layerUpdates){let Ie=ae.data.subarray(Ae*le/ae.data.BYTES_PER_ELEMENT,(Ae+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,ae.width,ae.height,1,xe,Ue,Ie)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,Ue,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,xe,Ue,ae.data);else if(w.isData3DTexture)Ge?(it&&t.texStorage3D(i.TEXTURE_3D,Te,Ee,ae.width,ae.height,ae.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,Ue,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,xe,Ue,ae.data);else if(w.isFramebufferTexture){if(it)if(Ge)t.texStorage2D(i.TEXTURE_2D,Te,Ee,ae.width,ae.height);else{let le=ae.width,Ae=ae.height;for(let Ie=0;Ie<Te;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ee,le,Ae,0,xe,Ue,null),le>>=1,Ae>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ae.parentNode!==le){le.appendChild(ae),d.add(w),le.onpaint=Ae=>{let Ie=Ae.changedElements;for(let me of d)Ie.includes(me.image)&&(me.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let Ie=i.RGBA,me=i.RGBA,We=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,me,We,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ge&&it){let le=Ne(De[0]);t.texStorage2D(i.TEXTURE_2D,Te,Ee,le.width,le.height)}for(let le=0,Ae=De.length;le<Ae;le++)Se=De[le],Ge?Y&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,xe,Ue,Se):t.texImage2D(i.TEXTURE_2D,le,Ee,xe,Ue,Se);w.generateMipmaps=!1}else if(Ge){if(it){let le=Ne(ae);t.texStorage2D(i.TEXTURE_2D,Te,Ee,le.width,le.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ue,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ee,xe,Ue,ae);f(w)&&b(z),oe.__version=ee.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Fe(P,w,Z){if(w.image.length!==6)return;let z=ue(P,w),k=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Z);let ee=n.get(k);if(k.version!==ee.__version||z===!0){t.activeTexture(i.TEXTURE0+Z);let oe=pt.getPrimaries(pt.workingColorSpace),j=w.colorSpace===Gn?null:pt.getPrimaries(w.colorSpace),ae=w.colorSpace===Gn||oe===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let xe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ue=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let me=0;me<6;me++)!xe&&!Ue?Ee[me]=m(w.image[me],!0,r.maxCubemapSize):Ee[me]=Ue?w.image[me].image:w.image[me],Ee[me]=Ve(w,Ee[me]);let Se=Ee[0],De=s.convert(w.format,w.colorSpace),Ge=s.convert(w.type),it=x(w.internalFormat,De,Ge,w.normalized,w.colorSpace),Y=w.isVideoTexture!==!0,Te=ee.__version===void 0||z===!0,le=k.dataReady,Ae=y(w,Se);q(i.TEXTURE_CUBE_MAP,w);let Ie;if(xe){Y&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,it,Se.width,Se.height);for(let me=0;me<6;me++){Ie=Ee[me].mipmaps;for(let We=0;We<Ie.length;We++){let Oe=Ie[We];w.format!==Pn?De!==null?Y?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,0,0,Oe.width,Oe.height,De,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,it,Oe.width,Oe.height,0,Oe.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,0,0,Oe.width,Oe.height,De,Ge,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We,it,Oe.width,Oe.height,0,De,Ge,Oe.data)}}}else{if(Ie=w.mipmaps,Y&&Te){Ie.length>0&&Ae++;let me=Ne(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,it,me.width,me.height)}for(let me=0;me<6;me++)if(Ue){Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ee[me].width,Ee[me].height,De,Ge,Ee[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,it,Ee[me].width,Ee[me].height,0,De,Ge,Ee[me].data);for(let We=0;We<Ie.length;We++){let ut=Ie[We].image[me].image;Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,0,0,ut.width,ut.height,De,Ge,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,it,ut.width,ut.height,0,De,Ge,ut.data)}}else{Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,De,Ge,Ee[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,it,De,Ge,Ee[me]);for(let We=0;We<Ie.length;We++){let Oe=Ie[We];Y?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,0,0,De,Ge,Oe.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,We+1,it,De,Ge,Oe.image[me])}}}f(w)&&b(i.TEXTURE_CUBE_MAP),ee.__version=k.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ge(P,w,Z,z,k,ee){let oe=s.convert(Z.format,Z.colorSpace),j=s.convert(Z.type),ae=x(Z.internalFormat,oe,j,Z.normalized,Z.colorSpace),xe=n.get(w),Ue=n.get(Z);if(Ue.__renderTarget=w,!xe.__hasExternalTextures){let Ee=Math.max(1,w.width>>ee),Se=Math.max(1,w.height>>ee);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?t.texImage3D(k,ee,ae,Ee,Se,w.depth,0,oe,j,null):t.texImage2D(k,ee,ae,Ee,Se,0,oe,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),et(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,k,Ue.__webglTexture,0,Xe(w)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,k,Ue.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(P,w,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let z=w.depthTexture,k=z&&z.isDepthTexture?z.type:null,ee=S(w.stencilBuffer,k),oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(w),ee,w.width,w.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(w),ee,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ee,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,P)}else{let z=w.textures;for(let k=0;k<z.length;k++){let ee=z[k],oe=s.convert(ee.format,ee.colorSpace),j=s.convert(ee.type),ae=x(ee.internalFormat,oe,j,ee.normalized,ee.colorSpace);et(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(w),ae,w.width,w.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(w),ae,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ae,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(P,w,Z){let z=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let k=n.get(w.depthTexture);if(k.__renderTarget=w,(!k.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z){if(k.__webglInit===void 0&&(k.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),k.__webglTexture===void 0){k.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),q(i.TEXTURE_CUBE_MAP,w.depthTexture);let xe=s.convert(w.depthTexture.format),Ue=s.convert(w.depthTexture.type),Ee;w.depthTexture.format===li?Ee=i.DEPTH_COMPONENT24:w.depthTexture.format===ar&&(Ee=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ee,w.width,w.height,0,xe,Ue,null)}}else $(w.depthTexture,0);let ee=k.__webglTexture,oe=Xe(w),j=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ae=w.depthTexture.format===ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===li)et(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,j,ee,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ae,j,ee,0);else if(w.depthTexture.format===ar)et(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,j,ee,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,ae,j,ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(P){let w=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let z=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),z){let k=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,z.removeEventListener("dispose",k)};z.addEventListener("dispose",k),w.__depthDisposeCallback=k}w.__boundDepthTexture=z}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(Z)for(let z=0;z<6;z++)we(w.__webglFramebuffer[z],P,z);else{let z=P.texture.mipmaps;z&&z.length>0?we(w.__webglFramebuffer[0],P,0):we(w.__webglFramebuffer,P,0)}else if(Z){w.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[z]),w.__webglDepthbuffer[z]===void 0)w.__webglDepthbuffer[z]=i.createRenderbuffer(),pe(w.__webglDepthbuffer[z],P,!1);else{let k=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,ee)}}else{let z=P.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),pe(w.__webglDepthbuffer,P,!1);else{let k=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(P,w,Z){let z=n.get(P);w!==void 0&&ge(z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&be(P)}function Q(P){let w=P.texture,Z=n.get(P),z=n.get(w);P.addEventListener("dispose",_);let k=P.textures,ee=P.isWebGLCubeRenderTarget===!0,oe=k.length>1;if(oe||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=w.version,a.memory.textures++),ee){Z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[j]=[];for(let ae=0;ae<w.mipmaps.length;ae++)Z.__webglFramebuffer[j][ae]=i.createFramebuffer()}else Z.__webglFramebuffer[j]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let j=0;j<w.mipmaps.length;j++)Z.__webglFramebuffer[j]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(oe)for(let j=0,ae=k.length;j<ae;j++){let xe=n.get(k[j]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&et(P)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let j=0;j<k.length;j++){let ae=k[j];Z.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[j]);let xe=s.convert(ae.format,ae.colorSpace),Ue=s.convert(ae.type),Ee=x(ae.internalFormat,xe,Ue,ae.normalized,ae.colorSpace,P.isXRRenderTarget===!0),Se=Xe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Ee,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,Z.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),q(i.TEXTURE_CUBE_MAP,w);for(let j=0;j<6;j++)if(w.mipmaps&&w.mipmaps.length>0)for(let ae=0;ae<w.mipmaps.length;ae++)ge(Z.__webglFramebuffer[j][ae],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae);else ge(Z.__webglFramebuffer[j],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(w)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let j=0,ae=k.length;j<ae;j++){let xe=k[j],Ue=n.get(xe),Ee=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Ue.__webglTexture),q(Ee,xe),ge(Z.__webglFramebuffer,P,xe,i.COLOR_ATTACHMENT0+j,Ee,0),f(xe)&&b(Ee)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,z.__webglTexture),q(j,w),w.mipmaps&&w.mipmaps.length>0)for(let ae=0;ae<w.mipmaps.length;ae++)ge(Z.__webglFramebuffer[ae],P,w,i.COLOR_ATTACHMENT0,j,ae);else ge(Z.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,j,0);f(w)&&b(j),t.unbindTexture()}P.depthBuffer&&be(P)}function K(P){let w=P.textures;for(let Z=0,z=w.length;Z<z;Z++){let k=w[Z];if(f(k)){let ee=M(P),oe=n.get(k).__webglTexture;t.bindTexture(ee,oe),b(ee),t.unbindTexture()}}}let re=[],fe=[];function ve(P){if(P.samples>0){if(et(P)===!1){let w=P.textures,Z=P.width,z=P.height,k=i.COLOR_BUFFER_BIT,ee=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(P),j=w.length>1;if(j)for(let xe=0;xe<w.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let ae=P.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[xe]);let Ue=n.get(w[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,Z,z,0,0,Z,z,k,i.NEAREST),l===!0&&(re.length=0,fe.length=0,re.push(i.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(re.push(ee),fe.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let xe=0;xe<w.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,oe.__webglColorRenderbuffer[xe]);let Ue=n.get(w[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Xe(P){return Math.min(r.maxSamples,P.samples)}function et(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(P){let w=a.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Ve(P,w){let Z=P.colorSpace,z=P.format,k=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==pn&&Z!==Gn&&(pt.getTransfer(Z)===Et?(z!==Pn||k!==Mn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",Z)),w}function Ne(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=G,this.rebindTextures=Be,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rb(i,e){function t(n,r=Gn){let s,a=pt.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ju)return i.BYTE;if(n===Qu)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===Tc)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===Pn)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Cc)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===or)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Lc)return i.RGBA_INTEGER;if(n===za||n===Ha||n===Va||n===Ga)if(a===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nc||n===Uc||n===Dc||n===Fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Wa||n===Vc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oc||n===Bc)return a===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zc)return s.COMPRESSED_R11_EAC;if(n===Hc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Wa)return s.COMPRESSED_RG11_EAC;if(n===Vc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Kc||n===jc||n===Jc||n===Qc||n===el||n===tl||n===nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$c)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qc)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===rl||n===sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===il)return a===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ol||n===Xa||n===cl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===al)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
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

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:Cb,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends ui{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new Ph,f={},b=t.getContextAttributes(),M=null,x=null,S=[],y=[],T=new ct,_=null,E=null,R=new qt;R.viewport=new At;let I=new qt;I.viewport=new At;let O=[R,I],B=new vc,N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=S[H];return J===void 0&&(J=new bs,S[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=S[H];return J===void 0&&(J=new bs,S[H]=J),J.getGripSpace()},this.getHand=function(H){let J=S[H];return J===void 0&&(J=new bs,S[H]=J),J.getHandSpace()};function L(H){let J=y.indexOf(H.inputSource);if(J===-1)return;let _e=S[J];_e!==void 0&&(_e.update(H.inputSource,H.frame,c||a),_e.dispatchEvent({type:H.type,data:H.inputSource}))}function C(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",$);for(let H=0;H<S.length;H++){let J=y[H];J!==null&&(y[H]=null,S[H].disconnect(J))}N=null,V=null,m.reset();for(let H in f)delete f[H];if(e.setRenderTarget(M),p=null,h=null,d=null,r=null,x=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),E!==null){let H=E.camera;H.fov=E.fov,H.zoom=E.zoom,H.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",C),r.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Fe=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?ar:li,Fe=b.stencil?Os:Qn);let pe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new xn(h.textureWidth,h.textureHeight,{format:Pn,type:Mn,depthTexture:new ir(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new xn(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(H){for(let J=0;J<H.removed.length;J++){let _e=H.removed[J],Fe=y.indexOf(_e);Fe>=0&&(y[Fe]=null,S[Fe].disconnect(_e))}for(let J=0;J<H.added.length;J++){let _e=H.added[J],Fe=y.indexOf(_e);if(Fe===-1){for(let pe=0;pe<S.length;pe++)if(pe>=y.length){y.push(_e),Fe=pe;break}else if(y[pe]===null){y[pe]=_e,Fe=pe;break}if(Fe===-1)break}let ge=S[Fe];ge&&ge.connect(_e)}}let F=new D,U=new D;function G(H,J,_e){F.setFromMatrixPosition(J.matrixWorld),U.setFromMatrixPosition(_e.matrixWorld);let Fe=F.distanceTo(U),ge=J.projectionMatrix.elements,pe=_e.projectionMatrix.elements,we=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),Be=(ge[9]+1)/ge[5],Q=(ge[9]-1)/ge[5],K=(ge[8]-1)/ge[0],re=(pe[8]+1)/pe[0],fe=we*K,ve=we*re,Xe=Fe/(-K+re),et=Xe*-K;if(J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(et),H.translateZ(Xe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ge[10]===-1)H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let X=we+Xe,Ve=be+Xe,Ne=fe-et,P=ve+(Fe-et),w=Be*be/Ve*X,Z=Q*be/Ve*X;H.projectionMatrix.makePerspective(Ne,P,w,Z,X,Ve),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ce(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let J=H.near,_e=H.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),B.near=I.near=R.near=J,B.far=I.far=R.far=_e,(N!==B.near||V!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,V=B.far),B.layers.mask=H.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let Fe=H.parent,ge=B.cameras;ce(B,Fe);for(let pe=0;pe<ge.length;pe++)ce(ge[pe],Fe);ge.length===2?G(B,R,I):B.projectionMatrix.copy(R.projectionMatrix),E===null&&H.isPerspectiveCamera&&(E={camera:H,fov:H.fov,zoom:H.zoom}),de(H,B,Fe)};function de(H,J,_e){_e===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(_e.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=yr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(H){return f[H]};let he=null;function q(H,J){if(u=J.getViewerPose(c||a),g=J,u!==null){let _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Fe=!1;_e.length!==B.cameras.length&&(B.cameras.length=0,Fe=!0);for(let be=0;be<_e.length;be++){let Be=_e[be],Q=null;if(p!==null)Q=p.getViewport(Be);else{let re=d.getViewSubImage(h,Be);Q=re.viewport,be===0&&(e.setRenderTargetTextures(x,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(x))}let K=O[be];K===void 0&&(K=new qt,K.layers.enable(be),K.viewport=new At,O[be]=K),K.matrix.fromArray(Be.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Be.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Q.x,Q.y,Q.width,Q.height),be===0&&(B.matrix.copy(K.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Fe===!0&&B.cameras.push(K)}let ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let be=d.getDepthInformation(_e[0]);be&&be.isValid&&be.texture&&m.init(be,r.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let be=0;be<_e.length;be++){let Be=_e[be].camera;if(Be){let Q=f[Be];Q||(Q=new Ia,f[Be]=Q);let K=d.getCameraImage(Be);Q.sourceTexture=K}}}}for(let _e=0;_e<S.length;_e++){let Fe=y[_e],ge=S[_e];Fe!==null&&ge!==void 0&&ge.update(Fe,J,c||a)}he&&he(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let ue=new pm;ue.setAnimationLoop(q),this.setAnimationLoop=function(H){he=H},this.dispose=function(){}}},Pb=new Ze,vm=new ot;vm.set(-1,0,0,0,1,0,0,0,1);function Lb(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,lh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,M,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=e.get(f),M=b.envMap,x=b.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vm),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Nb(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let y=S.program;n.uniformBlockBinding(x,y)}function c(x,S){let y=r[x.id];y===void 0&&(m(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",b));let T=S.program;n.updateUBOMapping(x,T);let _=e.render.frame;s[x.id]!==_&&(h(x),s[x.id]=_)}function u(x){let S=d();x.__bindingPointIndex=S;let y=i.createBuffer(),T=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let S=r[x.id],y=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=y.length;_<E;_++){let R=y[_];if(Array.isArray(R))for(let I=0,O=R.length;I<O;I++)p(R[I],_,I,T);else p(R,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,S,y,T){if(v(x,S,y,T)===!0){let _=x.__offset,E=x.value;if(Array.isArray(E)){let R=0;for(let I=0;I<E.length;I++){let O=E[I],B=f(O);g(O,x.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function g(x,S,y){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,y)}function v(x,S,y,T){let _=x.value,E=S+"_"+y;if(T[E]===void 0)return typeof _=="number"||typeof _=="boolean"?T[E]=_:ArrayBuffer.isView(_)?T[E]=_.slice():T[E]=_.clone(),!0;{let R=T[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return T[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(x){let S=x.uniforms,y=0,T=16;for(let E=0,R=S.length;E<R;E++){let I=Array.isArray(S[E])?S[E]:[S[E]];for(let O=0,B=I.length;O<B;O++){let N=I[O],V=Array.isArray(N.value)?N.value:[N.value];for(let L=0,C=V.length;L<C;L++){let $=V[L],F=f($),U=y%T,G=U%F.boundary,ce=U+G;y+=G,ce!==0&&T-ce<F.storage&&(y+=T-ce),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=F.storage}}}let _=y%T;return _>0&&(y+=T-_),x.__size=y,x.__cache={},this}function f(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",x),S}function b(x){let S=x.target;S.removeEventListener("dispose",b);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function M(){for(let x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}var Ub=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function Db(){return mi===null&&(mi=new Es(Ub,16,16,or,ei),mi.name="DFG_LUT",mi.minFilter=Ht,mi.magFilter=Ht,mi.wrapS=Vn,mi.wrapT=Vn,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var ml=class{constructor(e={}){let{canvas:t=kp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=p,m=new Set([Lc,Pc,Ic]),f=new Set([Mn,Qn,Fs,Os,Ac,Rc]),b=new Uint32Array(4),M=new Int32Array(4),x=new D,S=null,y=null,T=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,O=null,B=null,N=null,V=null;this._outputColorSpace=Dt;let L=0,C=0,$=null,F=-1,U=null,G=new At,ce=new At,de=null,he=new Qe(0),q=0,ue=t.width,H=t.height,J=1,_e=null,Fe=null,ge=new At(0,0,ue,H),pe=new At(0,0,ue,H),we=!1,be=new Ts,Be=!1,Q=!1,K=new Ze,re=new D,fe=new At,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function et(){return $===null?J:1}let X=n;function Ve(A,W){return t.getContext(A,W)}let Ne,P,w,Z,z,k,ee,oe,j,ae,xe,Ue,Ee,Se,De,Ge,it,Y,Te,le,Ae,Ie,me;try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",En,!1),X===null){let W="webgl2";if(X=Ve(W,A),X===null)throw Ve(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(A){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",En,!1),rt("WebGLRenderer: "+A.message),A}function We(){Ne=new V_(X),Ne.init(),Ae=new Rb(X,Ne),P=new L_(X,Ne,e,Ae),w=new Tb(X,Ne),P.reversedDepthBuffer&&h&&w.buffers.depth.setReversed(!0),B=X.createFramebuffer(),N=X.createFramebuffer(),V=X.createFramebuffer(),Z=new X_(X),z=new db,k=new Ab(X,Ne,w,z,P,Ae,Z),ee=new H_(R),oe=new Y0(X),Ie=new I_(X,oe),j=new G_(X,oe,Z,Ie),ae=new Y_(X,j,oe,Ie,Z),Y=new q_(X,P,k),De=new N_(z),xe=new hb(R,ee,Ne,P,Ie,De),Ue=new Lb(R,z),Ee=new pb,Se=new vb(Ne),it=new C_(R,ee,w,ae,g,l),Ge=new Eb(R,ae,P),me=new Nb(X,Z,P,w),Te=new P_(X,Ne,Z),le=new W_(X,Ne,Z),Z.programs=xe.programs,R.capabilities=P,R.extensions=Ne,R.properties=z,R.renderLists=Ee,R.shadowMap=Ge,R.state=w,R.info=Z}v!==Mn&&(E=new $_(v,t.width,t.height,o,r,s));let Oe=new Lh(R,X);this.xr=Oe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let A=Ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(ue,H,!1))},this.getSize=function(A){return A.set(ue,H)},this.setSize=function(A,W,se=!0){if(Oe.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=A,H=W,t.width=Math.floor(A*J),t.height=Math.floor(W*J),se===!0&&(t.style.width=A+"px",t.style.height=W+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ue*J,H*J).floor()},this.setDrawingBufferSize=function(A,W,se){ue=A,H=W,J=se,t.width=Math.floor(A*se),t.height=Math.floor(W*se),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(v===Mn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(ge)},this.setViewport=function(A,W,se,ne){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,W,se,ne),w.viewport(G.copy(ge).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(pe)},this.setScissor=function(A,W,se,ne){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,W,se,ne),w.scissor(ce.copy(pe).multiplyScalar(J).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){w.setScissorTest(we=A)},this.setOpaqueSort=function(A){_e=A},this.setTransparentSort=function(A){Fe=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,se=!0){let ne=0;if(A){let ie=!1;if($!==null){let Re=$.texture.format;ie=m.has(Re)}if(ie){let Re=$.texture.type,ze=f.has(Re),Le=it.getClearColor(),qe=it.getClearAlpha(),Ke=Le.r,dt=Le.g,gt=Le.b;ze?(b[0]=Ke,b[1]=dt,b[2]=gt,b[3]=qe,X.clearBufferuiv(X.COLOR,0,b)):(M[0]=Ke,M[1]=dt,M[2]=gt,M[3]=qe,X.clearBufferiv(X.COLOR,0,M))}else ne|=X.COLOR_BUFFER_BIT}W&&(ne|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),O=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",En,!1),it.dispose(),Ee.dispose(),Se.dispose(),z.dispose(),ee.dispose(),ae.dispose(),Ie.dispose(),me.dispose(),xe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Qs),Oe.removeEventListener("sessionend",ro),vi.stop()};function ut(A){A.preventDefault(),_a("WebGLRenderer: Context Lost."),I=!0}function _t(){_a("WebGLRenderer: Context Restored."),I=!1;let A=Z.autoReset,W=Ge.enabled,se=Ge.autoUpdate,ne=Ge.needsUpdate,ie=Ge.type;We(),Z.autoReset=A,Ge.enabled=W,Ge.autoUpdate=se,Ge.needsUpdate=ne,Ge.type=ie}function En(A){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function cn(A){let W=A.target;W.removeEventListener("dispose",cn),$s(W)}function $s(A){Ks(A),z.remove(A)}function Ks(A){let W=z.get(A).programs;W!==void 0&&(W.forEach(function(se){xe.releaseProgram(se)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,se,ne,ie,Re){W===null&&(W=ve);let ze=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Le=tt(A,W,se,ne,ie);w.setMaterial(ne,ze);let qe=se.index,Ke=1;if(ne.wireframe===!0){if(qe=j.getWireframeAttribute(se),qe===void 0)return;Ke=2}let dt=se.drawRange,gt=se.attributes.position,Ye=dt.start*Ke,wt=(dt.start+dt.count)*Ke;Re!==null&&(Ye=Math.max(Ye,Re.start*Ke),wt=Math.min(wt,(Re.start+Re.count)*Ke)),qe!==null?(Ye=Math.max(Ye,0),wt=Math.min(wt,qe.count)):gt!=null&&(Ye=Math.max(Ye,0),wt=Math.min(wt,gt.count));let Wt=wt-Ye;if(Wt<0||Wt===1/0)return;Ie.setup(ie,ne,Le,se,qe);let Nt,It=Te;if(qe!==null&&(Nt=oe.get(qe),It=le,It.setIndex(Nt)),ie.isMesh)ne.wireframe===!0?(w.setLineWidth(ne.wireframeLinewidth*et()),It.setMode(X.LINES)):It.setMode(X.TRIANGLES);else if(ie.isLine){let nn=ne.linewidth;nn===void 0&&(nn=1),w.setLineWidth(nn*et()),ie.isLineSegments?It.setMode(X.LINES):ie.isLineLoop?It.setMode(X.LINE_LOOP):It.setMode(X.LINE_STRIP)}else ie.isPoints?It.setMode(X.POINTS):ie.isSprite&&It.setMode(X.TRIANGLES);if(ie.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))It.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let nn=ie._multiDrawStarts,ke=ie._multiDrawCounts,ln=ie._multiDrawCount,yt=qe?oe.get(qe).bytesPerElement:1,Dn=z.get(ne).currentProgram.getUniforms();for(let ii=0;ii<ln;ii++)Dn.setValue(X,"_gl_DrawID",ii),It.render(nn[ii]/yt,ke[ii])}else if(ie.isInstancedMesh)It.renderInstances(Ye,Wt,ie.count);else if(se.isInstancedBufferGeometry){let nn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ke=Math.min(se.instanceCount,nn);It.renderInstances(Ye,Wt,ke)}else It.render(Ye,Wt)};function js(A,W,se,ne){O!==null&&A.isNodeMaterial&&O.setObject(ne,A),Be===!0&&De.setState(A,se,!1),A.transparent===!0&&A.side===en&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,ye(A,W,ne),A.side=bn,A.needsUpdate=!0,ye(A,W,ne),A.side=en):ye(A,W,ne)}this.compile=function(A,W,se=null){se===null&&(se=A),O!==null&&O.renderStart(A,W,se),y=Se.get(se),y.init(W),_.push(y),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(y.pushLight(ie),ie.castShadow&&y.pushShadow(ie))}),A!==se&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(y.pushLight(ie),ie.castShadow&&y.pushShadow(ie))}),y.setupLights(),O!==null&&O.updateLights(y.state.lightsArray),Q=this.localClippingEnabled,Be=De.init(this.clippingPlanes,Q),Be===!0&&De.setGlobalState(this.clippingPlanes,W),O!==null&&Ge.render(y.state.shadowsArray,se,W);let ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Re=ie.material;if(Re)if(Array.isArray(Re))for(let ze=0;ze<Re.length;ze++){let Le=Re[ze];js(Le,se,W,ie),ne.add(Le)}else js(Re,se,W,ie),ne.add(Re)}),y=_.pop(),O!==null&&O.renderEnd(),ne},this.compileAsync=function(A,W,se=null){let ne=this.compile(A,W,se);return new Promise(ie=>{function Re(){if(ne.forEach(function(ze){let qe=z.get(ze).currentProgram;(qe===void 0||qe.isReady())&&ne.delete(ze)}),ne.size===0){ie(A);return}setTimeout(Re,10)}Ne.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Js=null;function Al(A){Js&&Js(A)}function Qs(){vi.stop()}function ro(){vi.start()}let vi=new pm;vi.setAnimationLoop(Al),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(A){Js=A,Oe.setAnimationLoop(A),A===null?vi.stop():vi.start()},Oe.addEventListener("sessionstart",Qs),Oe.addEventListener("sessionend",ro),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(A,W);let se=Oe.enabled===!0&&Oe.isPresenting===!0,ne=E!==null&&($===null||se)&&E.begin(R,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(W),W=Oe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,$),y=Se.get(A,_.length),y.init(W),y.state.textureUnits=k.getTextureUnits(),_.push(y),K.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),be.setFromProjectionMatrix(K,$n,W.reversedDepth),Q=this.localClippingEnabled,Be=De.init(this.clippingPlanes,Q),S=Ee.get(A,T.length),S.init(),T.push(S),Oe.enabled===!0&&Oe.isPresenting===!0){let ze=R.xr.getDepthSensingMesh();ze!==null&&ea(ze,W,-1/0,R.sortObjects)}ea(A,W,0,R.sortObjects),S.finish(),O!==null&&O.updateLights(y.state.lightsArray),R.sortObjects===!0&&S.sort(_e,Fe),Xe=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,Xe&&it.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&De.beginShadows();let ie=y.state.shadowsArray;if(Ge.render(ie,A,W),Be===!0&&De.endShadows(),(ne&&E.hasRenderPass())===!1){let ze=S.opaque,Le=S.transmissive;if(y.setupLights(),W.isArrayCamera){let qe=W.cameras;if(Le.length>0)for(let Ke=0,dt=qe.length;Ke<dt;Ke++){let gt=qe[Ke];Hi(ze,Le,A,gt)}Xe&&it.render(A);for(let Ke=0,dt=qe.length;Ke<dt;Ke++){let gt=qe[Ke];so(S,A,gt,gt.viewport)}}else Le.length>0&&Hi(ze,Le,A,W),Xe&&it.render(A),so(S,A,W)}$!==null&&C===0&&(k.updateMultisampleRenderTarget($),k.updateRenderTargetMipmap($)),ne&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,W),Ie.resetDefaultState(),F=-1,U=null,_.pop(),_.length>0?(y=_[_.length-1],k.setTextureUnits(y.state.textureUnits),Be===!0&&De.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,O!==null&&O.renderEnd()};function ea(A,W,se,ne){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)y.pushLightProbeGrid(A);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(be)){ne&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);let ze=ae.update(A),Le=A.material;Le.visible&&S.push(A,ze,Le,se,fe.z,null,W)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(be))){let ze=ae.update(A),Le=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),fe.copy(ze.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(K)),Array.isArray(Le)){let qe=ze.groups;for(let Ke=0,dt=qe.length;Ke<dt;Ke++){let gt=qe[Ke],Ye=Le[gt.materialIndex];Ye&&Ye.visible&&S.push(A,ze,Ye,se,fe.z,gt,W)}}else Le.visible&&S.push(A,ze,Le,se,fe.z,null,W)}}let Re=A.children;for(let ze=0,Le=Re.length;ze<Le;ze++)ea(Re[ze],W,se,ne)}function so(A,W,se,ne){let{opaque:ie,transmissive:Re,transparent:ze}=A;y.setupLightsView(se),Be===!0&&De.setGlobalState(R.clippingPlanes,se),ne&&w.viewport(G.copy(ne)),ie.length>0&&Fr(ie,W,se),Re.length>0&&Fr(Re,W,se),ze.length>0&&Fr(ze,W,se),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Hi(A,W,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[ne.id]===void 0){let Ye=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[ne.id]=new xn(1,1,{generateMipmaps:!0,type:Ye?ei:Mn,minFilter:Jn,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Re=y.state.transmissionRenderTarget[ne.id],ze=ne.viewport||G;Re.setSize(ze.z*R.transmissionResolutionScale,ze.w*R.transmissionResolutionScale);let Le=R.getRenderTarget(),qe=R.getActiveCubeFace(),Ke=R.getActiveMipmapLevel();R.setRenderTarget(Re),R.getClearColor(he),q=R.getClearAlpha(),q<1&&R.setClearColor(16777215,.5),R.clear(),Xe&&it.render(se);let dt=R.toneMapping;R.toneMapping=jn;let gt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),Be===!0&&De.setGlobalState(R.clippingPlanes,ne),Fr(A,se,ne),k.updateMultisampleRenderTarget(Re),k.updateRenderTargetMipmap(Re),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let wt=0,Wt=W.length;wt<Wt;wt++){let Nt=W[wt],{object:It,geometry:nn,material:ke,group:ln}=Nt;if(ke.side===en&&It.layers.test(ne.layers)){let yt=ke.side;ke.side=mn,ke.needsUpdate=!0,ao(It,se,ne,nn,ke,ln),ke.side=yt,ke.needsUpdate=!0,Ye=!0}}Ye===!0&&(k.updateMultisampleRenderTarget(Re),k.updateRenderTargetMipmap(Re))}R.setRenderTarget(Le,qe,Ke),R.setClearColor(he,q),gt!==void 0&&(ne.viewport=gt),R.toneMapping=dt}function Fr(A,W,se){let ne=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Re=A.length;ie<Re;ie++){let ze=A[ie],{object:Le,geometry:qe,group:Ke}=ze,dt=ze.material;dt.allowOverride===!0&&ne!==null&&(dt=ne),Le.layers.test(se.layers)&&ao(Le,W,se,qe,dt,Ke)}}function ao(A,W,se,ne,ie,Re){O!==null&&ie.isNodeMaterial&&O.setObject(A,ie),A.onBeforeRender(R,W,se,ne,ie,Re),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(R,W,se,ne,A,Re),ie.transparent===!0&&ie.side===en&&ie.forceSinglePass===!1?(ie.side=mn,ie.needsUpdate=!0,R.renderBufferDirect(se,W,ne,ie,A,Re),ie.side=bn,ie.needsUpdate=!0,R.renderBufferDirect(se,W,ne,ie,A,Re),ie.side=en):R.renderBufferDirect(se,W,ne,ie,A,Re),A.onAfterRender(R,W,se,ne,ie,Re)}function ye(A,W,se){W.isScene!==!0&&(W=ve);let ne=z.get(A),ie=y.state.lights,Re=y.state.shadowsArray,ze=ie.state.version,Le=xe.getParameters(A,ie.state,Re,W,se,y.state.lightProbeGridArray),qe=xe.getProgramCacheKey(Le),Ke=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ne.fog=W.fog;let dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=ee.get(A.envMap||ne.environment,dt),ne.envMapRotation=ne.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",cn),Ke=new Map,ne.programs=Ke);let gt=Ke.get(qe);if(gt!==void 0){if(ne.currentProgram===gt&&ne.lightsStateVersion===ze)return $e(A,Le),gt}else Le.uniforms=xe.getUniforms(A),O!==null&&A.isNodeMaterial&&O.build(A,se,Le),A.onBeforeCompile(Le,R),gt=xe.acquireProgram(Le,qe),Ke.set(qe,gt),ne.uniforms=Le.uniforms;let Ye=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=De.uniform),$e(A,Le),ne.needsLights=lt(A),ne.lightsStateVersion=ze,ne.needsLights&&(Ye.ambientLightColor.value=ie.state.ambient,Ye.lightProbe.value=ie.state.probe,Ye.sunLights.value=ie.state.sun,Ye.sunLightShadows.value=ie.state.sunShadow,Ye.directionalLights.value=ie.state.directional,Ye.directionalLightShadows.value=ie.state.directionalShadow,Ye.spotLights.value=ie.state.spot,Ye.spotLightShadows.value=ie.state.spotShadow,Ye.rectAreaLights.value=ie.state.rectArea,Ye.ltc_1.value=ie.state.rectAreaLTC1,Ye.ltc_2.value=ie.state.rectAreaLTC2,Ye.pointLights.value=ie.state.point,Ye.pointLightShadows.value=ie.state.pointShadow,Ye.hemisphereLights.value=ie.state.hemi,Ye.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ye.sunShadowCascade.value=ie.state.sunShadowCascade,Ye.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ie.state.spotLightMatrix,Ye.spotLightMap.value=ie.state.spotLightMap,Ye.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=y.state.lightProbeGridArray.length>0,ne.currentProgram=gt,ne.uniformsList=null,gt}function te(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=Hs.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function $e(A,W){let se=z.get(A);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function at(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(W.matrixWorld);for(let se=0,ne=A.length;se<ne;se++){let ie=A[se];if(ie.texture!==null&&ie.boundingBox.containsPoint(x))return ie}return null}function tt(A,W,se,ne,ie){W.isScene!==!0&&(W=ve),k.resetTextureUnits();let Re=W.fog,ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?W.environment:null,Le=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:pt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ke=ee.get(ne.envMap||ze,qe),dt=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,gt=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!se.morphAttributes.position,wt=!!se.morphAttributes.normal,Wt=!!se.morphAttributes.color,Nt=jn;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Nt=R.toneMapping);let It=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,nn=It!==void 0?It.length:0,ke=z.get(ne),ln=y.state.lights;if(Be===!0&&(Q===!0||A!==U)){let Lt=A===U&&ne.id===F;De.setState(ne,A,Lt)}let yt=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ln.state.version||ke.outputColorSpace!==Le||ie.isBatchedMesh&&ke.batching===!1||!ie.isBatchedMesh&&ke.batching===!0||ie.isBatchedMesh&&ke.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&ke.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&ke.instancing===!1||!ie.isInstancedMesh&&ke.instancing===!0||ie.isSkinnedMesh&&ke.skinning===!1||!ie.isSkinnedMesh&&ke.skinning===!0||ie.isInstancedMesh&&ke.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ke.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ke.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ke.instancingMorph===!1&&ie.morphTexture!==null||ke.envMap!==Ke||ne.fog===!0&&ke.fog!==Re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==De.numPlanes||ke.numIntersection!==De.numIntersection)||ke.vertexAlphas!==dt||ke.vertexTangents!==gt||ke.morphTargets!==Ye||ke.morphNormals!==wt||ke.morphColors!==Wt||ke.toneMapping!==Nt||ke.morphTargetsCount!==nn||!!ke.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,ke.__version=ne.version);let Dn=ke.currentProgram;yt===!0&&(Dn=ye(ne,W,ie),O&&ne.isNodeMaterial&&O.onUpdateProgram(ne,Dn,ke));let ii=!1,Vi=!1,Or=!1,Ct=Dn.getUniforms(),Ot=ke.uniforms;if(w.useProgram(Dn.program)&&(ii=!0,Vi=!0,Or=!0),ne.id!==F&&(F=ne.id,Vi=!0),ke.needsLights){let Lt=at(y.state.lightProbeGridArray,ie);ke.lightProbeGrid!==Lt&&(ke.lightProbeGrid=Lt,Vi=!0)}if(ii||U!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ct.setValue(X,"projectionMatrix",A.projectionMatrix),Ct.setValue(X,"viewMatrix",A.matrixWorldInverse);let Wi=Ct.map.cameraPosition;Wi!==void 0&&Wi.setValue(X,re.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Ct.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,Vi=!0,Or=!0)}if(ke.needsLights&&(ln.state.sunShadowMap.length>0&&Ct.setValue(X,"sunShadowMap",ln.state.sunShadowMap,k),ln.state.directionalShadowMap.length>0&&Ct.setValue(X,"directionalShadowMap",ln.state.directionalShadowMap,k),ln.state.spotShadowMap.length>0&&Ct.setValue(X,"spotShadowMap",ln.state.spotShadowMap,k),ln.state.pointShadowMap.length>0&&Ct.setValue(X,"pointShadowMap",ln.state.pointShadowMap,k)),ie.isSkinnedMesh){Ct.setOptional(X,ie,"bindMatrix"),Ct.setOptional(X,ie,"bindMatrixInverse");let Lt=ie.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ct.setValue(X,"boneTexture",Lt.boneTexture,k))}ie.isBatchedMesh&&(Ct.setOptional(X,ie,"batchingTexture"),Ct.setValue(X,"batchingTexture",ie._matricesTexture,k),Ct.setOptional(X,ie,"batchingIdTexture"),Ct.setValue(X,"batchingIdTexture",ie._indirectTexture,k),Ct.setOptional(X,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Ct.setValue(X,"batchingColorTexture",ie._colorsTexture,k));let Gi=se.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Y.update(ie,se,Dn),(Vi||ke.receiveShadow!==ie.receiveShadow)&&(ke.receiveShadow=ie.receiveShadow,Ct.setValue(X,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&W.environment!==null&&(Ot.envMapIntensity.value=W.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Db()),Vi){if(Ct.setValue(X,"toneMappingExposure",R.toneMappingExposure),ke.needsLights&&nt(Ot,Or),Re&&ne.fog===!0&&Ue.refreshFogUniforms(Ot,Re),Ue.refreshMaterialUniforms(Ot,ne,J,H,y.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){let Lt=ke.lightProbeGrid;Ot.probesSH.value=Lt.texture,Ot.probesMin.value.copy(Lt.boundingBox.min),Ot.probesMax.value.copy(Lt.boundingBox.max),Ot.probesResolution.value.copy(Lt.resolution)}Hs.upload(X,te(ke),Ot,k)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hs.upload(X,te(ke),Ot,k),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(X,"center",ie.center),Ct.setValue(X,"modelViewMatrix",ie.modelViewMatrix),Ct.setValue(X,"normalMatrix",ie.normalMatrix),Ct.setValue(X,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){let Lt=ne.uniformsGroups;for(let Wi=0,Br=Lt.length;Wi<Br;Wi++){let Sd=Lt[Wi];me.update(Sd,Dn),me.bind(Sd,Dn)}}return Dn}function nt(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function lt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,W,se){let ne=z.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),z.get(A.texture).__webglTexture=W,z.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){let se=z.get(A);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,se=0){$=A,L=W,C=se;let ne=null,ie=!1,Re=!1;if(A){let Le=z.get(A);if(Le.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,Le.__webglFramebuffer),G.copy(A.viewport),ce.copy(A.scissor),de=A.scissorTest,w.viewport(G),w.scissor(ce),w.setScissorTest(de),F=-1;return}else if(Le.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(Le.__hasExternalTextures)k.rebindTextures(A,z.get(A.texture).__webglTexture,z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let dt=A.depthTexture;if(Le.__boundDepthTexture!==dt){if(dt!==null&&z.has(dt)&&(A.width!==dt.image.width||A.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}let qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Re=!0);let Ke=z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?ne=Ke[W][se]:ne=Ke[W],ie=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?ne=z.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?ne=Ke[se]:ne=Ke,G.copy(A.viewport),ce.copy(A.scissor),de=A.scissorTest}else G.copy(ge).multiplyScalar(J).floor(),ce.copy(pe).multiplyScalar(J).floor(),de=we;if(se!==0&&(ne=B),w.bindFramebuffer(X.FRAMEBUFFER,ne)&&w.drawBuffers(A,ne),w.viewport(G),w.scissor(ce),w.setScissorTest(de),ie){let Le=z.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,se)}else if(Re){let Le=W;for(let qe=0;qe<A.textures.length;qe++){let Ke=z.get(A.textures[qe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+qe,Ke.__webglTexture,se,Le)}}else if(A!==null&&se!==0){let Le=z.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Le.__webglTexture,se)}F=-1};function vt(A){let W=z.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=P.textureFormatReadable(A.format),W.__typeReadable=P.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,se,ne,ie,Re,ze,Le=0){if(!(A&&A.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe){w.bindFramebuffer(X.FRAMEBUFFER,qe);try{let Ke=A.textures[Le],dt=Ke.format,gt=Ke.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Le);let Ye=vt(Ke);if(Ye.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ne&&se>=0&&se<=A.height-ie&&X.readPixels(W,se,ne,ie,Ae.convert(dt),Ae.convert(gt),Re)}finally{let Ke=$!==null?z.get($).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,W,se,ne,ie,Re,ze,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe)if(W>=0&&W<=A.width-ne&&se>=0&&se<=A.height-ie){w.bindFramebuffer(X.FRAMEBUFFER,qe);let Ke=A.textures[Le],dt=Ke.format,gt=Ke.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Le);let Ye=vt(Ke);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,wt),X.bufferData(X.PIXEL_PACK_BUFFER,Re.byteLength,X.STREAM_READ),X.readPixels(W,se,ne,ie,Ae.convert(dt),Ae.convert(gt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Wt=$!==null?z.get($).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Wt);let Nt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Hp(X,Nt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,wt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Re),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(wt),X.deleteSync(Nt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,se=0){let ne=Math.pow(2,-se),ie=Math.floor(A.image.width*ne),Re=Math.floor(A.image.height*ne),ze=W!==null?W.x:0,Le=W!==null?W.y:0;k.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,se,0,0,ze,Le,ie,Re),w.unbindTexture()},this.copyTextureToTexture=function(A,W,se=null,ne=null,ie=0,Re=0){let ze,Le,qe,Ke,dt,gt,Ye,wt,Wt,Nt=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(se!==null)ze=se.max.x-se.min.x,Le=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,Ke=se.min.x,dt=se.min.y,gt=se.isBox3?se.min.z:0;else{let Ot=Math.pow(2,-ie);ze=Math.floor(Nt.width*Ot),Le=Math.floor(Nt.height*Ot),A.isDataArrayTexture?qe=Nt.depth:A.isData3DTexture?qe=Math.floor(Nt.depth*Ot):qe=1,Ke=0,dt=0,gt=0}ne!==null?(Ye=ne.x,wt=ne.y,Wt=ne.z):(Ye=0,wt=0,Wt=0);let It=Ae.convert(W.format),nn=Ae.convert(W.type),ke;W.isData3DTexture?(k.setTexture3D(W,0),ke=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(k.setTexture2DArray(W,0),ke=X.TEXTURE_2D_ARRAY):(k.setTexture2D(W,0),ke=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);let ln=w.getParameter(X.UNPACK_ROW_LENGTH),yt=w.getParameter(X.UNPACK_IMAGE_HEIGHT),Dn=w.getParameter(X.UNPACK_SKIP_PIXELS),ii=w.getParameter(X.UNPACK_SKIP_ROWS),Vi=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,Nt.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Nt.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Ke),w.pixelStorei(X.UNPACK_SKIP_ROWS,dt),w.pixelStorei(X.UNPACK_SKIP_IMAGES,gt);let Or=A.isDataArrayTexture||A.isData3DTexture,Ct=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){let Ot=z.get(A),Gi=z.get(W),Lt=z.get(Ot.__renderTarget),Wi=z.get(Gi.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,Lt.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Br=0;Br<qe;Br++)Or&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,z.get(A).__webglTexture,ie,gt+Br),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,z.get(W).__webglTexture,Re,Wt+Br)),X.blitFramebuffer(Ke,dt,ze,Le,Ye,wt,ze,Le,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||z.has(A)){let Ot=z.get(A),Gi=z.get(W);w.bindFramebuffer(X.READ_FRAMEBUFFER,N),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,V);for(let Lt=0;Lt<qe;Lt++)Or?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.__webglTexture,ie,gt+Lt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ot.__webglTexture,ie),Ct?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Gi.__webglTexture,Re,Wt+Lt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Gi.__webglTexture,Re),ie!==0?X.blitFramebuffer(Ke,dt,ze,Le,Ye,wt,ze,Le,X.COLOR_BUFFER_BIT,X.NEAREST):Ct?X.copyTexSubImage3D(ke,Re,Ye,wt,Wt+Lt,Ke,dt,ze,Le):X.copyTexSubImage2D(ke,Re,Ye,wt,Ke,dt,ze,Le);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ct?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(ke,Re,Ye,wt,Wt,ze,Le,qe,It,nn,Nt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(ke,Re,Ye,wt,Wt,ze,Le,qe,It,Nt.data):X.texSubImage3D(ke,Re,Ye,wt,Wt,ze,Le,qe,It,nn,Nt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Re,Ye,wt,ze,Le,It,nn,Nt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Re,Ye,wt,Nt.width,Nt.height,It,Nt.data):X.texSubImage2D(X.TEXTURE_2D,Re,Ye,wt,ze,Le,It,nn,Nt);w.pixelStorei(X.UNPACK_ROW_LENGTH,ln),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Dn),w.pixelStorei(X.UNPACK_SKIP_ROWS,ii),w.pixelStorei(X.UNPACK_SKIP_IMAGES,Vi),Re===0&&W.generateMipmaps&&X.generateMipmap(ke),w.unbindTexture()},this.initRenderTarget=function(A){z.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){L=0,C=0,$=null,w.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};function bm(i,e,t,n,{maxOffset:r=.16,maxFraction:s=.2,hipLimits:a=[22,15],kneeLimit:o=30,hipTwist:l=0,iterations:c=14}={}){if(e.parent!==i||t.parent!==e)throw new Error("Invalid leg chain");let u=C=>C.getWorldPosition(new D),d=[i,e,t].map(C=>C.quaternion.clone());i.updateWorldMatrix(!0,!0);let h=u(i),p=u(e),g=u(t),v=h.distanceTo(p)+p.distanceTo(g),m=n.clone().sub(g);if(![...n.toArray(),v].every(Number.isFinite)||v<.05)throw new Error("Invalid leg target");m.clampLength(0,Math.min(r,v*s));let f=g.clone().add(m),b=p.clone().sub(h).cross(g.clone().sub(p));if(b.lengthSq()<1e-8)return{accepted:!1,reason:"straight-leg-pole"};b.normalize();function M(C,$){let F=u(C);return C.worldToLocal(F.clone().add($)).sub(C.worldToLocal(F)).normalize()}let x=M(i,b),S=M(e,b),y=p.clone().sub(h).normalize(),T=M(i,new D().crossVectors(b,y).normalize()),_=Math.PI-h.clone().sub(p).angleTo(g.clone().sub(p)),E=l?[0,0,0,0]:[0,0,0],R=[Me.degToRad(a[0]),Me.degToRad(a[1]),...l?[Me.degToRad(l)]:[],Me.degToRad(o)],I=M(i,y);function O(C){return i.quaternion.copy(d[0]).multiply(new He().setFromAxisAngle(x,C[0])).multiply(new He().setFromAxisAngle(T,C[1])),l&&i.quaternion.multiply(new He().setFromAxisAngle(I,C[2])),e.quaternion.copy(d[1]).multiply(new He().setFromAxisAngle(S,C[C.length-1])),t.quaternion.copy(d[2]),i.updateWorldMatrix(!0,!0),u(t)}function B(){let C=u(i),$=u(e),F=u(t),U=$.clone().sub(C).cross(F.clone().sub($)),G=Math.PI-C.clone().sub($).angleTo(F.clone().sub($));return U.dot(b)>0&&G>=Math.min(_,Me.degToRad(5))-.001&&G<=Math.max(_,Me.degToRad(150))+.001}let N=E.slice(),V=g.distanceToSquared(f),L=.001;for(let C=0;C<c;C++){let $=O(E),F=f.clone().sub($);if(F.length()<8e-4)break;let U=E.map((q,ue)=>{let H=E.slice();return H[ue]+=L,O(H).sub($).multiplyScalar(1/L)});O(E);let G=new ot().set(...[0,1,2].flatMap(q=>[0,1,2].map(ue=>U.reduce((H,J)=>H+J.getComponent(q)*J.getComponent(ue),0)+(q===ue?5e-4:0)))),ce=F.clone().applyMatrix3(G.invert()),de=U.map(q=>q.dot(ce)),he=!1;for(let q of[1,.5,.25,.125]){let ue=E.map((J,_e)=>Me.clamp(J+Me.clamp(de[_e],-.15,.15)*q,-R[_e],R[_e]));if(O(ue),!B())continue;let H=u(t).distanceToSquared(f);if(!(H>=V)){N=ue.slice(),V=H,E.splice(0,E.length,...ue),he=!0;break}}if(!he)break}return O(N),{accepted:!0,angles:N,offset:m.length(),error:Math.sqrt(V),nativeFlex:_,flex:Math.PI-u(i).sub(u(e)).angleTo(u(t).sub(u(e))),kneePlaneDot:u(e).sub(u(i)).cross(u(t).sub(u(e))).normalize().dot(b)}}function Mm(i,e,t,n,r,s,a="Enya"){let o=r?.schema==="snowbreak-official-scenes/1";if(o&&r.characterId!==a)throw new Error("Scene interaction character mismatch");let l=o||r?.schema==="enya-official-scenes/1"?r.profiles:[];if(!Array.isArray(l)||l.length>16||new Set(l.map(Q=>Q.id)).size!==l.length)throw new Error("Invalid scene profiles");if(o)for(let Q of l){if(typeof Q.id!="string"||!Array.isArray(Q.contacts)||Q.contacts.length>16)throw new Error("Invalid source contacts");for(let K of Q.contacts){if(typeof K.bone!="string"||!["ik","unsupported"].includes(K.kind))throw new Error("Unknown source contact");if(K.kind==="ik"&&(!i.getObjectByName(K.ikBone)||!K.drag||!K.sizeCm||![K.sizeCm.X,K.sizeCm.Y,K.sizeCm.Z,...Object.values(K.drag.ScreenPercentToWorld||{}),...Object.values(K.drag.WorldSpaceLimit||{}),...Object.values(K.drag.WorldSpaceLmitLeftUp||{}),K.drag.DragRecoverTime].every(Number.isFinite)))throw new Error("Invalid source IK limits")}}let c={},u=[],d=null,h=!1,p=null,g=[],v=null,m={},f="",b=new Map,M=new Map,x=new Map,S=new Map,y=new Map,T=Q=>Q.getWorldPosition(new D),_=()=>l.find(Q=>Q.id===(c.scene?.()||"main")),E=()=>a==="Enya"&&["show_04","show_05"].includes(_()?.id),R=()=>(_()?.contacts||[]).filter(Q=>Q.kind==="ik"),I=document.createElement("div");I.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:3",document.body.append(I);let O=document.createElement("div");I.append(O);let B=document.createElement("button");B.textContent="\u8FD8\u539F\u817F\u90E8",B.style.cssText="position:fixed;right:5%;top:24%;pointer-events:auto;border:1px solid #8fc9ab;border-radius:18px;background:#203b32dd;color:white;padding:8px",B.onclick=()=>J("lower_legs"),I.append(B);function N(){for(let Q of u)Q.bone.quaternion.copy(Q.base);u=[]}function V(){return(_()?.contacts||[]).map(Q=>{let K=i.getObjectByName(Q.bone);if(!K)return null;let re=T(K).project(e),fe=t.getBoundingClientRect();return{id:Q.id,label:/Foot/.test(Q.bone)?Q.bone.includes("-L-")?"\u5DE6\u811A":"\u53F3\u811A":/Hand/.test(Q.bone)?"\u624B\u90E8":"\u5934\u90E8",x:fe.left+(re.x+1)*fe.width/2,y:fe.top+(1-re.y)*fe.height/2,supportedIK:Q.kind==="ik"}}).filter(Boolean)}function L(Q){let K=i.getObjectByName(Q.ikBone),re=K?.parent,fe=re?.parent;if(!fe?.isBone||!re?.isBone)throw Error("\u817F\u90E8\u9AA8\u9ABC\u5C42\u7EA7\u4E0D\u5B8C\u6574");return i.updateWorldMatrix(!0,!0),{contact:Q,foot:K,calf:re,thigh:fe,base:[fe,re,K].map(ve=>ve.quaternion.clone()),anchor:i.worldToLocal(T(K)),offset:new D,dx:0,dy:0}}function C(Q){if(!Q?.alphaVerified)return null;for(let K of R()){let re=i.getObjectByName(K.ikBone),fe=re?.worldToLocal(new D().fromArray(Q.point)),ve=K.sizeCm;if(fe&&Math.abs(fe.x)<ve.X*.01&&Math.abs(fe.y)<ve.Z*.01&&Math.abs(fe.z)<ve.Y*.01)return K}for(let K of R()){let re=K.ikBone.includes("-L-")?"L":"R";if((Q.skinBones||[]).some(fe=>fe?.startsWith("Bip001-"+re+"-")&&/Thigh|Calf|Foot/.test(fe)))return K}return null}function $(Q,K){if(!K||t.dataset.snowbreakPaused==="true"||t.dataset.snowbreakFrameEdit==="true"||document.querySelector("#snowSurfaceEdit")?.checked)return;for(let[Xe,et]of b)et.contact.ikBone===K.ikBone&&U(Xe,!0);Q.preventDefault(),Q.stopImmediatePropagation(),c.beforeDrag?.();let re=M.get(K.ikBone),fe=re?i.worldToLocal(T(re.foot)):null;N();let ve=L(K);re&&(ve.base=re.base,ve.anchor=fe),x.delete(K.ikBone),Object.assign(ve,{pointerId:Q.pointerId,x:Q.clientX,y:Q.clientY,dragging:!1,triggered:!1}),b.set(Q.pointerId,ve),t.setPointerCapture(Q.pointerId),p={contact:K.id,handle:Q.target?.dataset?.legHandle||null},K.voiceId&&c.voice?.(K.voiceId)}function F(Q){$(Q,C(n(Q.clientX,Q.clientY)))}function U(Q,K=!1){let re=b.get(Q);re&&(b.delete(Q),t.hasPointerCapture(Q)&&t.releasePointerCapture(Q),re.dragging&&(!K&&E()?(M.set(re.contact.ikBone,re),f="\u5DF2\u4FDD\u6301\u817F\u90E8\u8C03\u6574\uFF1B\u53EF\u9009\u62E9\u8FD8\u539F\u817F\u90E8\u6216\u8981\u6C42\u653E\u4E0B\u817F\u3002"):M.has(re.contact.ikBone)||x.set(re.contact.ikBone,{...re,releasedAt:performance.now()})),K||c.event?.({type:"touch",region:"leg",label:re.contact.ikBone.includes("-L-")?"\u5DE6\u817F\uFF0F\u811A":"\u53F3\u817F\uFF0F\u811A",gesture:re.dragging?"drag":"tap",source:"bounded-leg-control",confidence:1,completed:!0}))}function G(Q,K,re){return re?.endsWith("::Less")?Q<K:re?.endsWith("::Greater")?Q>K:null}function ce(Q){let K=b.get(Q.pointerId);if(!K||(Q.stopImmediatePropagation(),!K.dragging&&Math.hypot(Q.clientX-K.x,Q.clientY-K.y)<5))return;K.dragging=!0;let re=t.getBoundingClientRect(),fe=K.contact.drag,ve=E()?55:0,Xe=(Q.clientX-K.x)/Math.max(1,re.width)*(E()?100:fe.ScreenPercentToWorld?.X||0),et=(Q.clientY-K.y)/Math.max(1,re.height)*(E()?100:fe.ScreenPercentToWorld?.Y||0);K.dx=Me.clamp(Xe,-Math.max(ve,fe.WorldSpaceLmitLeftUp?.X||0),Math.max(ve,fe.WorldSpaceLimit?.X||0)),K.dy=Me.clamp(et,-Math.max(ve,fe.WorldSpaceLmitLeftUp?.Y||0),Math.max(ve,fe.WorldSpaceLimit?.Y||0));let X=new D().setFromMatrixColumn(e.matrixWorld,0),Ve=new D().setFromMatrixColumn(e.matrixWorld,1),Ne=X.multiplyScalar(K.dx*.01).addScaledVector(Ve,-K.dy*.01);if(K.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(Ne))),!E())for(let P of K.contact.thresholds||[]){let w=[G(K.dx,P.limit.X,P.xCompare),G(K.dy,P.limit.Y,P.yCompare)].filter(Z=>Z!==null);if(!K.triggered&&w.length&&w.every(Boolean)){K.triggered=!0,d={sampleId:P.sampleId,dx:K.dx,dy:K.dy,source:"serialized-drag-threshold"},U(Q.pointerId),c.reaction?.(P.sampleId);break}}}function de(Q){b.has(Q.pointerId)&&(Q.stopImmediatePropagation(),U(Q.pointerId))}function he(Q){U(Q.pointerId,!0)}function q(){for(let Q of[...b.keys()])U(Q,!0);N()}function ue(){q(),M.clear(),x.clear(),y.clear(),f=""}function H(){let Q=R().map(K=>K.ikBone.includes("-L-")?"left":"right");return[...new Set(Q.map(K=>"raise_"+K+"_leg")),...Q.includes("left")&&Q.includes("right")?["spread_legs"]:[],...Q.length?["lower_legs"]:[]]}function J(Q){if(!H().includes(Q))throw Error("\u5F53\u524D\u59FF\u52BF\u672A\u7ED1\u5B9A\u8BE5\u817F\u90E8\u52A8\u4F5C");if(q(),Q==="lower_legs"){for(let[fe,ve]of M)x.set(fe,{...ve,releasedAt:performance.now()});M.clear(),f="\u6B63\u5728\u653E\u4E0B\u53CC\u817F\uFF0C\u6062\u590D\u5F53\u524D\u539F\u4F5C\u59FF\u6001\u3002";return}N();let K=R(),re=K.filter(fe=>Q==="spread_legs"||Q.includes(fe.ikBone.includes("-L-")?"left":"right"));for(let fe of re){let ve=L(fe),Xe=i.getObjectByName(fe.ikBone.includes("-L-")?"Bip001-R-Thigh":"Bip001-L-Thigh"),et=T(ve.thigh).sub(T(Xe||ve.thigh.parent));if(et.lengthSq()<1e-8)continue;et.normalize();let X=new D(0,1,0).transformDirection(i.matrixWorld),Ve=T(ve.thigh).distanceTo(T(ve.calf))+T(ve.calf).distanceTo(T(ve.foot)),Ne=Q==="spread_legs"?et.multiplyScalar(Ve*(E()?.48:.18)).addScaledVector(X,Ve*.08):X.multiplyScalar(Ve*(E()?.36:.18)).addScaledVector(T(ve.thigh).sub(T(ve.foot)).normalize(),Ve*(E()?.2:0));ve.offset.copy(i.worldToLocal(i.getWorldPosition(new D).add(Ne))),ve.startedAt=performance.now(),M.set(fe.ikBone,ve),x.delete(fe.ikBone)}f=Q==="spread_legs"?"\u6B63\u5728\u6309\u5173\u8282\u8303\u56F4\u5206\u5F00\u53CC\u817F\u3002":Q.includes("left")?"\u6B63\u5728\u62AC\u8D77\u5DE6\u817F\u3002":"\u6B63\u5728\u62AC\u8D77\u53F3\u817F\u3002"}let _e=new Map;function Fe(Q,K=!1){if(!_e.has(Q.name)){let fe=[];i.traverse(ve=>{if(!ve.isSkinnedMesh)return;let Xe=ve.geometry.getAttribute("skinIndex"),et=ve.geometry.getAttribute("skinWeight");if(!Xe||!et)return;let X=new Set(ve.skeleton.bones.map((Ne,P)=>Ne.name===Q.name||Ne.name===Q.name.replace("-Foot","-Toe0")?P:-1).filter(Ne=>Ne>=0)),Ve=[];for(let Ne=0;Ne<Xe.count;Ne++){let P=0;for(let w=0;w<4;w++)X.has(Xe.getComponent(Ne,w))&&(P+=et.getComponent(Ne,w));P>.45&&Ve.push(Ne)}if(Ve.length){let Ne=ve.geometry.getAttribute("position"),P=new Set;for(let w of[-1,0,1])for(let Z of[-1,0,1])for(let z of[-1,0,1]){if(w===0&&Z===0&&z===0)continue;let k=-1/0,ee=Ve[0];for(let oe of Ve){let j=Ne.getX(oe)*w+Ne.getY(oe)*Z+Ne.getZ(oe)*z;j>k&&(k=j,ee=oe)}P.add(ee)}fe.push({mesh:ve,vertices:Ve,probes:[...P]})}}),_e.set(Q.name,fe)}let re=[];for(let{mesh:fe,vertices:ve,probes:Xe}of _e.get(Q.name))for(let et of K?ve:Xe)re.push(fe.getVertexPosition(et,new D).applyMatrix4(fe.matrixWorld));return re}function ge(Q,K){let re=T(Q).dot(K);return Me.clamp(Math.max(.04,...Fe(Q).map(fe=>re-fe.dot(K)))+.015,.055,.16)}function pe(){let Q=R(),K=t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true"||document.querySelector("#snowSurfaceEdit")?.checked;for(let[re,fe]of S)Q.some(ve=>ve.id===re)||(fe.remove(),S.delete(re));for(let re of Q){let fe=i.getObjectByName(re.ikBone);if(!fe)continue;let ve=S.get(re.id);ve||(ve=document.createElement("button"),ve.dataset.legHandle=String(re.id),ve.textContent=re.ikBone.includes("-L-")?"\u2195 \u62D6\u52A8\u5DE6\u817F":"\u2195 \u62D6\u52A8\u53F3\u817F",ve.style.cssText="position:fixed;pointer-events:auto;touch-action:none;border:1px solid #8fffc5;border-radius:22px;background:#203b32dd;color:white;font-size:12px;padding:9px;transform:translate(-50%,-50%);margin:0",ve.addEventListener("pointerdown",X=>$(X,re)),S.set(re.id,ve),I.append(ve));let Xe=t.getBoundingClientRect(),et=T(fe).lerp(T(fe.parent),.5).project(e);ve.hidden=!!K,ve.style.left=Me.clamp(Xe.left+(et.x+1)*Xe.width/2,55,Xe.right-55)+"px",ve.style.top=Me.clamp(Xe.top+(1-et.y)*Xe.height/2,100,Xe.bottom-150)+"px"}B.hidden=K||!M.size}function we(){let Q=performance.now();for(let[re]of b)t.hasPointerCapture(re)||U(re,!0);if(pe(),h){O.replaceChildren();for(let re of V()){let fe=document.createElement("span");fe.textContent=re.label,fe.style.cssText=`position:absolute;left:${re.x}px;top:${re.y}px;color:white;background:#222a;border-radius:14px;padding:5px`,O.append(fe)}}let K=new Map(M);for(let re of b.values())re.dragging&&K.set(re.contact.ikBone,re);for(let[re,fe]of x)fe.weight=Math.max(0,1-(Q-fe.releasedAt)/(1e3*Math.max(.15,fe.contact.drag.DragRecoverTime||.35))),fe.weight===0?x.delete(re):K.has(re)||K.set(re,fe);if(E()){for(let re of R())if(!K.has(re.ikBone)){let fe=L(re);fe.passive=!0,K.set(re.ikBone,fe)}}g=[],m={};for(let re of K.values()){let fe=[re.thigh,re.calf,re.foot],ve=fe.map(z=>z.quaternion.clone()),Xe=re.weight??(re.startedAt?Me.smoothstep(Math.min(1,(Q-re.startedAt)/450),0,1):1);fe.forEach((z,k)=>z.quaternion.copy(re.base[k])),i.updateWorldMatrix(!0,!0);let et=T(re.calf),X=T(re.foot),Ve=i.localToWorld(re.anchor.clone().add(re.offset)),Ne=0,P=.055,w=[...re.thigh.parent.matrixWorld.elements,...re.base.flatMap(z=>z.toArray()),...Ve.toArray(),...fe.flatMap(z=>[...z.position.toArray(),...z.scale.toArray()])],Z=y.get(re.contact.ikBone);if(Z&&Z.key.length===w.length&&w.every((z,k)=>Math.abs(z-Z.key[k])<1e-4)){fe.forEach((z,k)=>{z.quaternion.copy(ve[k]).slerp(Z.quaternions[k],Xe).normalize(),u.push({bone:z,base:ve[k],applied:z.quaternion.clone()})}),v={...Z.report,cached:!0},m[re.contact.ikBone]=v;continue}if(E()&&s){let z=s(X);if(z&&z.clearance>-.5&&z.clearance<.5){P=ge(re.foot,z.normal);for(let k=0;k<3;k++){let ee=0,oe=z.normal;for(let j of[.7,.85,1]){let ae=s(et.clone().lerp(Ve,j));ae&&(ee=Math.max(ee,(P-ae.clearance)/j),oe=ae.normal)}if(ee=Me.clamp(ee,0,.65-Ne),ee<5e-4)break;Ve.addScaledVector(oe,ee),Ne+=ee}}}Ne>0&&g.push({bone:re.foot.name,correction:Ne,radius:P});try{let z=E()?{maxOffset:.6,maxFraction:.8,hipLimits:[75,65],kneeLimit:95,hipTwist:45,iterations:36}:void 0;for(let k=0;k<4&&(fe.forEach((j,ae)=>j.quaternion.copy(re.base[ae])),v=bm(re.thigh,re.calf,re.foot,Ve,z),i.updateWorldMatrix(!0,!0),!(!E()||!s));k++){let ee=1/0,oe=new D(0,1,0);for(let j of Fe(re.foot)){let ae=s(j);ae&&ae.clearance<ee&&(ee=ae.clearance,oe=ae.normal)}if(v.footClearance=Number.isFinite(ee)?ee:null,ee>=.012)break;Ve.addScaledVector(oe,Math.min(.2,.018-ee))}y.set(re.contact.ikBone,{key:w,quaternions:fe.map(k=>k.quaternion.clone()),report:{...v}}),m[re.contact.ikBone]={...v,target:Ve.toArray(),actual:T(re.foot).toArray()},fe.forEach((k,ee)=>{let oe=k.quaternion.clone();k.quaternion.copy(ve[ee]).slerp(oe,Xe).normalize(),u.push({bone:k,base:ve[ee],applied:k.quaternion.clone()})})}catch(z){fe.forEach((k,ee)=>k.quaternion.copy(ve[ee])),f="\u817F\u90E8\u8C03\u6574\u53D7\u9650\uFF1A"+z.message}}if(K.size){i.updateWorldMatrix(!0,!0);let re=new Set;i.traverse(fe=>{fe.isSkinnedMesh&&!re.has(fe.skeleton)&&(fe.skeleton.update(),re.add(fe.skeleton))})}}let be=[["pointerdown",F],["pointermove",ce],["pointerup",de],["pointercancel",he],["lostpointercapture",he]];for(let[Q,K]of be)t.addEventListener(Q,K);let Be=()=>q();return window.addEventListener("blur",Be),{configure:Q=>c=Q,hitTest:(Q,K)=>C(n(Q,K))?.id,restore:N,tick:we,cancel:ue,suspend:q,command:J,available:H,profile:_,points:V,togglePoints(){return h=!h,h||O.replaceChildren(),V().length},headReaction:()=>_()?.contacts.find(Q=>/hari|Head/.test(Q.bone))?.thresholds?.[0]?.sampleId,legState:()=>({legs:M.size?"\u4FDD\u6301\u817F\u90E8\u59FF\u6001\uFF1A"+[...M.keys()].map(Q=>Q.includes("-L-")?"\u5DE6\u817F":"\u53F3\u817F").join("\u3001"):x.size?"\u6B63\u5728\u6062\u590D\u817F\u90E8\u59FF\u6001":"\u539F\u4F5C\u817F\u90E8\u59FF\u6001",lastResult:f,available:H()}),footMeshContacts:()=>Object.fromEntries(R().map(Q=>{let K=i.getObjectByName(Q.ikBone),re=K?Fe(K,!0).map(fe=>s?.(fe)?.clearance).filter(Number.isFinite):[];return[Q.ikBone,{samples:re.length,minClearance:re.length?Math.min(...re):null}]})),snapshot:()=>({scene:_()?.id,legSolve:v,solves:m,bedCorrections:g,lastPick:p,active:b.size>0,offset:b.size?[b.values().next().value.dx,b.values().next().value.dy]:null,recovering:x.size>0,held:[...M.keys()],lastEvent:d}),dispose(){ue(),I.remove();for(let[Q,K]of be)t.removeEventListener(Q,K);window.removeEventListener("blur",Be)}}}var Sm={chest:{frequency:2.8,damping:.38,compression:.0035,limit:.007,radius:.075},hips:{frequency:2.5,damping:.42,compression:.003,limit:.006,radius:.08},head:{frequency:5,damping:.9,compression:5e-4,limit:.001,radius:.045},face:{frequency:5,damping:.9,compression:3e-4,limit:7e-4,radius:.03},body:{frequency:4,damping:.68,compression:.0012,limit:.003,radius:.055}},yl=class{constructor(e="body"){e={forehead:"head",hair:"head",left_cheek:"face",right_cheek:"face"}[e]||e,this.profile=Sm[e]||Sm.body,this.offset=0,this.velocity=0,this.pressed=!1}press(){this.pressed=!0,this.velocity=Math.min(.12,this.velocity+this.profile.compression*8)}release(){this.pressed=!1}step(e){if(!Number.isFinite(e)||e<=0||e>.15){this.offset=this.velocity=0;return}let t=this.profile,n=2*Math.PI*t.frequency,r=Math.ceil(e*240),s=e/r;for(let a=0;a<r;a++)this.velocity+=((this.pressed?t.compression:0)-this.offset)*n*n*s-2*t.damping*n*this.velocity*s,this.velocity=Math.max(-.12,Math.min(.12,this.velocity)),this.offset+=this.velocity*s,Math.abs(this.offset)>t.limit&&(this.offset=Math.sign(this.offset)*t.limit,this.offset*this.velocity>0&&(this.velocity=0));!this.pressed&&Math.abs(this.offset)+Math.abs(this.velocity)<1e-5&&(this.offset=this.velocity=0)}get active(){return this.pressed||this.offset!==0||this.velocity!==0}};function wm(i,e,t){let n=new ct,r=new ct,s=0,a=0,o=!1,l=0,c=0,u=!1,d=!0,h=!1,p=0,g=[],v=new Map,m={value:Array.from({length:4},()=>new D)},f={value:Array.from({length:4},()=>new D)},b={value:[.05,.05,.05,.05]},M=new D,x=null;i.traverse(L=>{L.isMesh&&L.userData.snowbreakSurfaceKey&&v.set(L.userData.snowbreakSurfaceKey,L)});function S(L){let C=L.hit,$=v.get(C.mesh);if(!$||!C.barycentric)return new D().fromArray(C.point);let F=$.geometry.index,U=new D;for(let G=0;G<3;G++){let ce=F?F.getX(C.triangle*3+G):C.triangle*3+G;U.addScaledVector($.getVertexPosition(ce,new D),C.barycentric[G])}return $.localToWorld(U)}let y=[],T=new Map,_=new Set;i.traverse(L=>{if(L.isSkinnedMesh&&_.add(L.skeleton),L.isBone&&/^EyeJoint_[LR]$/.test(L.name)&&y.push(L),!L.isSkinnedMesh||!["skin","cloth-or-room"].includes(L.material?.userData.profile))return;let C=L.material,$=C.onBeforeCompile,F=C.customProgramCacheKey.bind(C);C.onBeforeCompile=U=>{$(U),Object.assign(U.uniforms,{senseCenters:m,senseOffsets:f,senseRadii:b}),U.vertexShader=`uniform vec3 senseCenters[4];uniform vec3 senseOffsets[4];uniform float senseRadii[4];
`+U.vertexShader,U.vertexShader=U.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec3 senseWorld=(modelMatrix*vec4(transformed,1.0)).xyz;
for(int senseI=0;senseI<4;senseI++){vec3 senseDelta=senseWorld-senseCenters[senseI];float senseWeight=exp(-dot(senseDelta,senseDelta)/(senseRadii[senseI]*senseRadii[senseI]));mvPosition.xyz+=(viewMatrix*vec4(senseOffsets[senseI]*senseWeight,0.0)).xyz;}
gl_Position=projectionMatrix*mvPosition;`)},C.customProgramCacheKey=()=>F()+"-surface-spring-v2",C.needsUpdate=!0});function E(L,C,$="camera"){$==="camera"&&(h||performance.now()<p)||!Number.isFinite(L)||!Number.isFinite(C)||(n.set(Me.clamp(L,-1,1),Me.clamp(C,-1,1)),s=performance.now()+1600)}function R(L){if(t.dataset.snowbreakFrameEdit==="true"||t.dataset.snowbreakPaused==="true")return;let C=t.getBoundingClientRect();p=performance.now()+1600,E((L.clientX-C.left)/C.width*2-1,1-(L.clientY-C.top)/C.height*2,"touch")}function I(L,C){if(!d||!L?.alphaVerified||!Array.isArray(L.point)||!v.has(L.mesh))return!1;x?.spring.release();let $=C?.id||L.anatomy?.id||"body",F=g.find(U=>!U.spring.pressed&&U.region===$&&S(U).distanceTo(new D().fromArray(L.point))<.04);return F?(x=F,x.hit=L):(g.length===4&&g.shift(),x={hit:L,region:$,spring:new yl($),direction:e.getWorldDirection(new D)},g.push(x)),x.spring.press(),o=u=!0,!0}let O=L=>{h=!0,R(L)},B=()=>{o=!1,h=!1,x?.spring.release(),x=null,p=performance.now()+1e3};t.addEventListener("pointerdown",O),t.addEventListener("pointermove",R),t.addEventListener("pointerup",B),t.addEventListener("pointercancel",B),t.addEventListener("lostpointercapture",B);function N(L=performance.now()){let C=Math.min(.04,Math.max(0,(L-a)/1e3));a=L,L>s&&n.set(0,0),r.lerp(n,1-Math.exp(-C*12));let $=new D().setFromMatrixColumn(e.matrixWorld,1),F=new D().setFromMatrixColumn(e.matrixWorld,0);for(let U of y){let G=U.quaternion.clone(),ce=new Ze().extractRotation(U.parent.matrixWorld),de=new Ze().makeRotationFromQuaternion(new He().setFromAxisAngle($,r.x*.07).multiply(new He().setFromAxisAngle(F,-r.y*.05))),he=ce.clone().invert().multiply(de).multiply(ce);U.quaternion.premultiply(new He().setFromRotationMatrix(he)).normalize(),U.updateWorldMatrix(!1,!0),T.set(U,{base:G,applied:U.quaternion.clone()})}for(let U=g.length-1;U>=0;U--)g[U].spring.step(C),g[U].spring.active||g.splice(U,1);c=0,l=0,u=g.length>0;for(let U=0;U<4;U++){let G=g[U];f.value[U].set(0,0,0),G&&(m.value[U].copy(S(G)),b.value[U]=G.spring.profile.radius,f.value[U].copy(G.direction).multiplyScalar(G.spring.offset),Math.abs(G.spring.offset)>Math.abs(c)&&(c=G.spring.offset),l+=Math.abs(G.spring.velocity))}if(y.length)for(let U of _)U.update()}function V(){for(let[L,C]of T)L.quaternion.angleTo(C.applied)<1e-6&&L.quaternion.copy(C.base);T.clear()}return{gaze:E,touch:I,tick:N,restore:V,reset(){V(),o=u=h=!1,p=0,c=l=0,g.length=0,x=null;for(let L of f.value)L.set(0,0,0);n.set(0,0),r.set(0,0)},snapshot:()=>({eyes:y.length,gaze:r.toArray(),offset:c,pressed:o,active:u,contacts:g.map(L=>({region:L.region,offset:L.spring.offset,velocity:L.spring.velocity,pressed:L.spring.pressed,center:S(L).toArray()}))}),dispose(){for(let[L,C]of[["pointerdown",O],["pointermove",R],["pointerup",B],["pointercancel",B],["lostpointercapture",B]])t.removeEventListener(L,C)}}}function Nh(i,e,t,n,r,{minFlex:s=0,maxFlex:a=180}={}){if(!Number.isFinite(s)||!Number.isFinite(a)||s<0||a>180||s>=a)throw new Error("Invalid elbow limits");let o=y=>y.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);for(let y of[i,e,t]){let T=y.getWorldScale(new D);if(Math.min(T.x,T.y,T.z)<=0||Math.max(T.x,T.y,T.z)-Math.min(T.x,T.y,T.z)>1e-5)throw new Error("Unsupported arm scale")}let l=o(i),c=o(e),u=o(t),d=l.distanceTo(c),h=c.distanceTo(u);if(![...n.toArray(),...r.toArray(),d,h].every(Number.isFinite)||Math.min(d,h)<1e-6)throw new Error("Invalid arm geometry");let p=n.clone().sub(l),g=p.length();if(g<1e-7)throw new Error("Arm target at shoulder");p.normalize();let v=y=>Math.sqrt(Math.max(0,d*d+h*h+2*d*h*Math.cos(Me.degToRad(y)))),m=Me.clamp(g,Math.max(Math.abs(d-h)+1e-6,v(a)),Math.min(d+h-1e-6,v(s))),f=r.clone().sub(l).addScaledVector(p,-r.clone().sub(l).dot(p));if(f.lengthSq()<1e-10)throw new Error("Ambiguous elbow pole");f.normalize();let b=(d*d-h*h+m*m)/(2*m),M=l.clone().addScaledVector(p,b).addScaledVector(f,Math.sqrt(Math.max(0,d*d-b*b))),x=l.clone().addScaledVector(p,m);function S(y,T,_){let E=o(y),R=o(T).sub(E).normalize(),I=_.clone().sub(E).normalize(),O=y.getWorldQuaternion(new He);O.premultiply(new He().setFromUnitVectors(R,I)),y.quaternion.copy(y.parent.getWorldQuaternion(new He).invert().multiply(O)).normalize(),y.updateWorldMatrix(!0,!0)}return S(i,e,M),S(e,t,x),{requested:n.toArray(),reachable:x.toArray(),hand:o(t).toArray(),clamped:Math.abs(m-g)>1e-5,error:o(t).distanceTo(x),elbowFlex:Me.radToDeg(Math.acos(Me.clamp((m*m-d*d-h*h)/(2*d*h),-1,1)))}}var Ir=Object.freeze({upper:100,lower:140,wrist:60,minFlex:8,maxFlex:145});function Uh(i,{side:e="right"}={}){if(!["left","right"].includes(e))throw new Error("Invalid arm side");let t=e==="right"?"R":"L",n=i.getObjectByName(`Bip001-${t}-UpperArm`),r=i.getObjectByName(`Bip001-${t}-Forearm`),s=i.getObjectByName(`Bip001-${t}-Hand`),a=i.getObjectByName("Bip001-Head"),o=!!(n?.isBone&&r?.parent===n&&s?.parent===r&&a?.isBone),l=null,c=null,u=g=>g.getWorldPosition(new D);function d(){l&&(n.quaternion.copy(l.upper),r.quaternion.copy(l.lower),s.quaternion.copy(l.wrist),i.updateWorldMatrix(!0,!0)),l=null}function h(){if(d(),!o)throw new Error("Original arm chain unavailable");i.updateWorldMatrix(!0,!0);let g=u(n),v=u(r),m=u(s),f=u(a),b=g.distanceTo(v)+v.distanceTo(m),M=g.clone().sub(f);if(M.y=0,M.length()<1e-5)throw new Error("Ambiguous shoulder direction");M.normalize();let x=f.clone().addScaledVector(M,b*.55);x.y+=b*.15;let S=g.clone().addScaledVector(M,b);S.y-=b*.35,l={upper:n.quaternion.clone(),lower:r.quaternion.clone(),wrist:s.quaternion.clone(),wristWorld:s.getWorldQuaternion(new He),start:m,target:x,pole:S},c=null}function p(g){if(!Number.isFinite(g))throw new Error("Invalid arm progress");if(!l)return;n.quaternion.copy(l.upper),r.quaternion.copy(l.lower),s.quaternion.copy(l.wrist),i.updateWorldMatrix(!0,!0);let v=Me.clamp(g,0,1),m=v<.3?v/.3:v>.7?(1-v)/.3:1,f=m*m*(3-2*m);if(f<1e-6)return;c=Nh(n,r,s,l.target,l.pole,Ir);let b={},M=[];function x(S,y,T,_,E){let R=S.quaternion.clone(),I=y.angleTo(R),O=Me.degToRad(T);I>O&&M.push(E),S.quaternion.copy(y).slerp(R,_*Math.min(1,O/Math.max(I,1e-10))).normalize(),b[E]=Me.radToDeg(y.angleTo(S.quaternion))}x(n,l.upper,Ir.upper,f,"upper"),x(r,l.lower,Ir.lower,f,"lower"),i.updateWorldMatrix(!0,!0),s.quaternion.copy(s.parent.getWorldQuaternion(new He).invert().multiply(l.wristWorld)),x(s,l.wrist,Ir.wrist,1,"wrist"),i.updateWorldMatrix(!0,!0),c={...c,solverError:c.error,hand:u(s).toArray(),error:u(s).distanceTo(l.target),angles:b,limited:M,weight:f}}return{begin:h,apply:p,restore:d,snapshot:()=>({available:o,active:!!l,side:"anatomical-"+e,experimental:!0,limits:Ir,result:c,hand:o?u(s).toArray():null,wrist:o?s.quaternion.toArray():null})}}function Em(i,e,t=()=>0){let n={};for(let[L,C]of[["left","L"],["right","R"]]){let $=i.getObjectByName(`Bip001-${C}-UpperArm`),F=i.getObjectByName(`Bip001-${C}-Forearm`),U=i.getObjectByName(`Bip001-${C}-Hand`);$?.isBone&&F?.parent===$&&U?.parent===F&&(n[L]={upper:$,lower:F,hand:U})}let r=i.getObjectByName("Bip001-Head"),s=[],a=new Set;i.traverse(L=>{L.isSkinnedMesh&&a.add(L.skeleton)}),i.traverse(L=>{if(L.isMesh&&L.morphTargetInfluences){let C=L.morphTargetDictionary||{},$=C.L_Eye_close??C.L_eye_close??C.eyecloseL??C.L_Eye_close_Spcl_Ty_neg_1,F=C.R_Eye_close??C.R_eye_close??C.eyecloseR??C.R_Eye_close_Spcl_Ty_neg_1;Number.isInteger($)&&s.push({mesh:L,index:$,name:"L_Eye_close"}),Number.isInteger(F)&&s.push({mesh:L,index:F,name:"R_Eye_close"})}});let o=["turn_left","turn_right","turn_back","face_front"];r&&n.left&&o.push("raise_left_hand"),r&&n.right&&o.push("raise_right_hand"),r&&n.left&&n.right&&o.push("raise_both_hands","lower_hands"),s.some(L=>L.name==="L_Eye_close")&&s.some(L=>L.name==="R_Eye_close")&&o.push("close_eyes","open_eyes"),r&&o.push("gesture_shy","gesture_nod","gesture_shake","gesture_tilt_left","gesture_tilt_right","gesture_look_left","gesture_look_right","gesture_bow"),r&&n.left&&n.right&&o.push("gesture_open_arms","gesture_wave_left","gesture_wave_right");let l=i.getObjectByName("Bip001-Spine2")||i.getObjectByName("Bip001-Spine"),c=null,u=0,d=0,h=[],p=[];i.traverse(L=>{if(L.isMesh&&L.morphTargetDictionary&&L.morphTargetInfluences){let C=L.morphTargetDictionary.Viseme_A;if(!Number.isInteger(C))return;let $=0,F=L.geometry?.morphAttributes?.position?.[C];if(F)for(let G=0;G<F.count;G++){let ce=Math.hypot(F.getX(G),F.getY(G),F.getZ(G));ce>$&&($=ce)}let U=$>.001?Me.clamp(.0125/$,.85,2.2):.85;p.push({mesh:L,index:C,gain:U})}});function g(L,C){if(!o.includes(L)||!L.startsWith("gesture_")||!Number.isFinite(C?.duration)||C.duration<1||C.duration>8||!Array.isArray(C.poses)||C.poses.length<2||C.poses.length>8)throw new Error("\u65E0\u6548\u80A2\u4F53\u52A8\u4F5C");let $=-1;for(let F of C.poses){if(F.smile!==void 0&&(!Number.isFinite(F.smile)||F.smile<0||F.smile>1))throw new Error("\u8868\u60C5\u8D8A\u754C");if(!Number.isFinite(F.time)||F.time<=$||F.time<0||F.time>C.duration)throw new Error("\u52A8\u4F5C\u65F6\u95F4\u65E0\u6548");$=F.time;for(let[U,G]of[["head",[45,25,20]],["torso",[20,15,15]],["leftHand",[1.5,2,1.5]],["rightHand",[1.5,2,1.5]]])if(F[U]&&(!Array.isArray(F[U])||F[U].length!==3||F[U].some((ce,de)=>!Number.isFinite(ce)||Math.abs(ce)>G[de])))throw new Error("\u52A8\u4F5C\u76EE\u6807\u8D8A\u754C")}if(C.poses[0].time!==0||$!==C.duration)throw new Error("\u52A8\u4F5C\u9996\u5C3E\u65E0\u6548");m.clear(),c={id:L,plan:C,start:performance.now()},S="\u6B63\u5728\u6267\u884C\uFF1A"+L}function v(L){if(!c)return null;let{plan:C}=c,$=(L-c.start)/1e3;if($>=C.duration)return S="\u5DF2\u5B8C\u6210\uFF1A"+c.id,c=null,null;let F=Math.max(0,C.poses.findIndex(q=>q.time>=$)-1),U=C.poses[F],G=C.poses[F+1],ce=Me.clamp(($-U.time)/(G.time-U.time),0,1),de=ce*ce*(3-2*ce),he={};for(let q of["head","torso","leftHand","rightHand"])(U[q]||G[q])&&(he[q]=[0,1,2].map(ue=>(U[q]?.[ue]||0)+((G[q]?.[ue]||0)-(U[q]?.[ue]||0))*de));return he.smile=(U.smile||0)+((G.smile||0)-(U.smile||0))*de,he}let m=new Set,f=!1,b=0,M=0,x=performance.now(),S="\u5C1A\u65E0\u52A8\u4F5C\u56DE\u6267",y={left:0,right:0},T=0,_=[],E=[],R={left:!1,right:!1};function I(){for(let L of _)L.bone.quaternion.angleTo(L.applied)<1e-6&&L.bone.quaternion.copy(L.base);_.length=0;for(let L of[...E,...h])Math.abs(L.mesh.morphTargetInfluences[L.index]-L.applied)<1e-6&&(L.mesh.morphTargetInfluences[L.index]=L.base);E.length=h.length=0}function O(L){if(!o.includes(L))throw new Error("\u5F53\u524D\u6A21\u578B\u4E0D\u652F\u6301\u8BE5\u8EAB\u4F53\u6307\u4EE4");return c=null,L==="raise_left_hand"&&m.add("left"),L==="raise_right_hand"&&m.add("right"),L==="raise_both_hands"&&(m=new Set(["left","right"])),L==="lower_hands"&&m.clear(),L==="close_eyes"&&(f=!0),L==="open_eyes"&&(f=!1),L==="turn_left"&&(M+=90),L==="turn_right"&&(M-=90),L==="turn_back"&&(M=180-t()),L==="face_front"&&(M=-t()),S="\u5DF2\u63A5\u6536\uFF1A"+L,N()}function B(){let L=performance.now(),C=Math.min(.25,(L-x)/1e3);x=L;let $=1-Math.exp(-9*C),F=v(L);if(F){i.updateWorldMatrix(!0,!0);let he=ge=>ge.getWorldPosition(new D),q=i.getObjectByName("Bip001-Pelvis"),ue=r&&q?he(r).sub(he(q)).normalize():new D(0,1,0),H=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new He)),J=i.getObjectByName("EyeJoint_L"),_e=i.getObjectByName("EyeJoint_R");if(r&&J&&_e){let ge=he(J).add(he(_e)).multiplyScalar(.5).sub(he(r));ge.addScaledVector(ue,-ge.dot(ue)),ge.length()>1e-5&&(H=ge.normalize())}let Fe=new D().crossVectors(ue,H).normalize();H.crossVectors(Fe,ue).normalize();for(let[ge,pe]of[[r,F.head],[l,F.torso]])if(ge&&pe){let we=ge.quaternion.clone(),be=ge.parent.getWorldQuaternion(new He),Be=new He().setFromAxisAngle(ue,Me.degToRad(-pe[0])).multiply(new He().setFromAxisAngle(Fe,Me.degToRad(pe[1]))).multiply(new He().setFromAxisAngle(H,Me.degToRad(pe[2])));ge.quaternion.premultiply(be.clone().invert().multiply(Be).multiply(be)).normalize(),_.push({bone:ge,base:we,applied:ge.quaternion.clone()}),ge.updateWorldMatrix(!1,!0)}}b+=(M-b)*$,e(b),R={left:!1,right:!1},i.updateWorldMatrix(!0,!0);let U=new D(0,1,0),G=i.getObjectByName("EyeJoint_L"),ce=i.getObjectByName("EyeJoint_R"),de=new D(0,0,1).applyQuaternion(i.getWorldQuaternion(new He));r&&G&&ce&&(de.copy(G.getWorldPosition(new D).add(ce.getWorldPosition(new D)).multiplyScalar(.5).sub(r.getWorldPosition(new D))),de.y=0,de.length()<1e-5&&de.set(0,0,1),de.normalize());for(let he of["left","right"]){y[he]+=((m.has(he)?1:0)-y[he])*$;let q=F?.[he+"Hand"],ue=q?Me.smoothstep(Math.hypot(...q),0,.25):y[he],H=n[he];if(!H||!r||ue<.001)continue;let J=K=>K.getWorldPosition(new D),_e=J(r),Fe=J(H.upper),ge=Fe.distanceTo(J(H.lower))+J(H.lower).distanceTo(J(H.hand)),pe=Fe.clone().sub(_e);if(pe.y=0,pe.length()<1e-6)continue;pe.normalize();let we=_e.clone().addScaledVector(pe,ge*.45);we.y+=ge*.18,q&&(we.copy(J(H.hand)).addScaledVector(pe,Math.abs(q[0])*ge),we.y+=q[1]*ge,we.addScaledVector(de,q[2]*ge));let be=Fe.clone().addScaledVector(de,ge*.7).addScaledVector(pe,ge*.2).addScaledVector(U,-ge*.2),Be=H.hand.getWorldQuaternion(new He),Q=[H.upper,H.lower,H.hand].map(K=>({bone:K,base:K.quaternion.clone()}));try{Nh(H.upper,H.lower,H.hand,we,be,Ir);for(let[Ve,Ne]of[H.upper,H.lower].entries()){let P=Q[Ve].base,w=Ne.quaternion.clone(),Z=P.angleTo(w),z=Me.degToRad([100,140][Ve]);Ne.quaternion.copy(P).slerp(w,ue*Math.min(1,z/Math.max(Z,1e-8))).normalize(),Ne.updateWorldMatrix(!1,!0)}let K=Be.clone(),re=Ve=>i.getObjectByName(`Bip001-${he==="left"?"L":"R"}-Finger${Ve}`),fe=re(1),ve=re(2),Xe=re(4);if(fe&&ve&&Xe){let Ve=J(fe).sub(J(Xe)).normalize(),Ne=J(ve).sub(J(H.hand));Ne.addScaledVector(Ve,-Ne.dot(Ve)).normalize();let P=new Ze().makeBasis(Ve,Ne,new D().crossVectors(Ve,Ne).normalize()),w=c?.id==="gesture_open_arms"?pe.clone():U.clone(),Z=de.clone().multiplyScalar(he==="left"?1:-1),z=new D().crossVectors(w,Z).normalize();w.crossVectors(Z,z).normalize();let k=new Ze().makeBasis(z,w,new D().crossVectors(z,w).normalize());K=new He().setFromRotationMatrix(k.multiply(P.invert())).multiply(H.hand.getWorldQuaternion(new He));let ee=K.clone().multiply(H.hand.getWorldQuaternion(new He).invert()),oe=J(H.hand).sub(J(H.lower)).normalize(),j=new D(ee.x,ee.y,ee.z).dot(oe),ae=Me.clamp(2*Math.atan2(j,ee.w),-Math.PI/2,Math.PI/2)*.6*ue;H.lower.quaternion.multiply(new He().setFromAxisAngle(H.hand.position.clone().normalize(),ae)).normalize(),H.lower.updateWorldMatrix(!1,!0)}let et=H.hand.parent.getWorldQuaternion(new He).invert().multiply(K),X=Q[2].base.angleTo(et);H.hand.quaternion.copy(Q[2].base).slerp(et,ue*Math.min(1,Me.degToRad(90)/Math.max(X,1e-8))).normalize(),H.hand.updateWorldMatrix(!1,!0);for(let Ve of Q)_.push({...Ve,applied:Ve.bone.quaternion.clone()});R[he]=J(H.hand).y>Fe.y+ge*.25}catch(K){for(let re of Q)re.bone.quaternion.copy(re.base);S="\u4E3E\u624B\u5931\u8D25\uFF1A"+K.message,m.delete(he)}}T+=((f?1:0)-T)*$;for(let he of s){let q=he.mesh.morphTargetInfluences[he.index]||0,ue=Me.lerp(q,f?1:0,T);E.push({...he,base:q,applied:ue}),he.mesh.morphTargetInfluences[he.index]=ue}F?.smile&&i.traverse(he=>{if(!he.isMesh||!he.morphTargetInfluences)return;let q=he.morphTargetDictionary||{};for(let ue of[q.L_Eye_smile??q.L_eye_smile??q.eyemileL??q.eyesmileL,q.R_Eye_smile??q.R_eye_smile??q.eyemileR??q.eyesmileR]){if(!Number.isInteger(ue))continue;let H=he.morphTargetInfluences[ue]||0,J=Math.max(H,Math.min(.5,F.smile));h.push({mesh:he,index:ue,base:H,applied:J}),he.morphTargetInfluences[ue]=J}}),d+=(u-d)*(1-Math.exp(-C*(u>d?24:16)));for(let he of p){let q=he.mesh.morphTargetInfluences[he.index]||0,ue=Math.max(q,d*(he.gain||.85));h.push({...he,base:q,applied:ue}),he.mesh.morphTargetInfluences[he.index]=ue}i.updateWorldMatrix(!0,!0);for(let he of a)he.update()}function N(){i.updateWorldMatrix(!0,!0);for(let $ of["left","right"]){let F=n[$];if(!F)continue;let U=F.upper.getWorldPosition(new D),G=F.lower.getWorldPosition(new D),ce=F.hand.getWorldPosition(new D);R[$]=ce.y>U.y+(U.distanceTo(G)+G.distanceTo(ce))*.25}let L=s.length?s.reduce(($,F)=>$+(F.mesh.morphTargetInfluences[F.index]||0),0)/s.length:0,C=b+t();return{available:[...o],eyes:s.length?L>.95?"\u5DF2\u95ED\u5408":L<.1?"\u7741\u5F00\u6216\u81EA\u7136\u7728\u773C":"\u534A\u95ED\u6216\u7728\u773C":"\u672A\u7ED1\u5B9A\u95ED\u773C\u5F62\u6001",handRaised:{...R},hands:R.left&&R.right?"\u53CC\u624B\u62AC\u8D77":R.left?"\u5DE6\u624B\u62AC\u8D77":R.right?"\u53F3\u624B\u62AC\u8D77":m.size?"\u6B63\u5728\u62AC\u624B\u6216\u53D7\u5173\u8282\u9650\u5236":"\u672A\u4FDD\u6301\u4E3E\u624B",facing:Math.abs(b-M)>2?"\u6B63\u5728\u8F6C\u8EAB":Math.abs((C%360+360)%360-180)<3?"\u80CC\u5411\u955C\u5934":Math.abs(C%360)<3?"\u9762\u5411\u955C\u5934":`\u76F8\u5BF9\u6B63\u9762\u8F6C\u5411${Math.round(C)}\u5EA6`,yaw:C,lastResult:S}}function V(){I(),u=d=0,c=null,m.clear(),f=!1,y.left=y.right=T=0,b=M=0,e(0),S="\u5DF2\u505C\u6B62\u5E76\u590D\u4F4D"}return{command:O,playGesture:g,tick:B,restore:I,snapshot:N,reset:V,setSpeechLevel:L=>{u=Number.isFinite(L)?Me.clamp(L,0,1):0},speechState:()=>({level:d,targets:p.length,weights:p.map(L=>L.mesh.morphTargetInfluences[L.index])}),releaseHands:()=>{m.clear(),c=null}}}function Tm(i){return/UpperArm|Forearm|Hand|Finger/.test(i.bone)?{...i,keys:i.keys.map(()=>i.keys[0])}:Dh(i)}function Dh(i){let e=i.keys.length-1;if(e<3)return i;let t=/BONE_(hari|hair|PD)_/.test(i.bone)?.22:.6,n=i.keys[0],r=i.keys.map((s,a)=>{let o=i.keys[(a-1+e)%e],l=i.keys[a%e],c=i.keys[(a+1)%e],u=s.slice();for(let h=0;h<3;h++)u[h]=n[h]+(.2*o[h]+.6*l[h]+.2*c[h]-n[h])*t;let d=new He().fromArray(o,3).slerp(new He().fromArray(l,3),.75).slerp(new He().fromArray(c,3),.2);return new He().fromArray(n,3).slerp(d,t).normalize().toArray(u,3),u});return r[e]=r[0].slice(),{...i,keys:r}}function Am(i,e,t,n,r=null){if(n.opacity===0){let f=new Qt({visible:!1,transparent:!0,opacity:0,depthWrite:!1});return f.userData.profile="hidden",f}let s=/eye01/.test(i),a=/eye01_shadow/.test(i),o=/face01_inst_2/.test(i),l=/face01/.test(i),c=/hair01/.test(i),u=/body00(?:_ma)?_inst|face01/.test(i),d=n.surface||"",h=d==="black-stocking",p=d==="white-stocking",g=h||p;if(n.opacity!==void 0&&(!Number.isFinite(n.opacity)||n.opacity<0||n.opacity>1))throw new Error("Invalid material opacity");let v={opacity:n.opacity??1,color:e?16777215:13289411,map:e,transparent:!!n.transparent,depthWrite:!n.transparent,alphaTest:e&&n.alphaCutoff||0,side:n.doubleSided===!1?bn:en},m;if(s)m=new Qt(v);else{let f=l?.22:u?.26:g?.32:.54,b={...v,normalMap:t||null,normalScale:new ct(f,-f)};c?Object.assign(b,{roughness:.34,metalness:.04,clearcoat:.42,clearcoatRoughness:.26,sheen:.35,sheenRoughness:.45,sheenColor:new Qe(16777215),envMapIntensity:.95}):l?Object.assign(b,{roughness:.54,metalness:0,clearcoat:.14,clearcoatRoughness:.42,sheen:.22,sheenRoughness:.55,sheenColor:new Qe(16770262),envMapIntensity:.45}):u?Object.assign(b,{roughness:.46,metalness:0,clearcoat:.24,clearcoatRoughness:.36,sheen:.28,sheenRoughness:.48,sheenColor:new Qe(16769232),envMapIntensity:.58}):h?Object.assign(b,{roughness:r?.92:.36,metalness:r?.35:.04,roughnessMap:r||null,metalnessMap:r||null,clearcoat:.34,clearcoatRoughness:.3,sheen:.68,sheenRoughness:.38,sheenColor:new Qe(10466008),envMapIntensity:.95}):p?Object.assign(b,{roughness:r?.92:.34,metalness:r?.2:.02,roughnessMap:r||null,metalnessMap:r||null,clearcoat:.36,clearcoatRoughness:.28,sheen:.72,sheenRoughness:.34,sheenColor:new Qe(16775423),envMapIntensity:.95}):r?Object.assign(b,{roughness:.92,metalness:.95,roughnessMap:r,metalnessMap:r,clearcoat:.38,clearcoatRoughnessMap:r,clearcoatRoughness:.78,envMapIntensity:1.15}):Object.assign(b,{roughness:.44,metalness:.08,clearcoat:.24,clearcoatRoughness:.36,envMapIntensity:.78}),m=new an(b),l||u?(m.onBeforeCompile=M=>{M.fragmentShader=M.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(mix(normal,vec3(0.0,0.0,1.0),${l?"0.68":"0.24"}));`)},m.customProgramCacheKey=()=>l?"enya-soft-face-v2":"enya-soft-skin-v3"):h?(m.onBeforeCompile=M=>{M.fragmentShader=M.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
{float siwaNdv=clamp(abs(dot(normalize(normal),normalize(vViewPosition))),0.0,1.0);float siwaCenter=pow(siwaNdv,1.55);float siwaLuma=dot(diffuseColor.rgb,vec3(0.299,0.587,0.114));vec3 siwaCenterTint=mix(diffuseColor.rgb*0.48,diffuseColor.rgb*vec3(0.56,0.45,0.43),smoothstep(0.05,0.34,siwaLuma));vec3 siwaEdgeTint=diffuseColor.rgb*vec3(0.06,0.065,0.09)+vec3(0.008,0.009,0.015);diffuseColor.rgb=mix(siwaEdgeTint,siwaCenterTint,siwaCenter);}`)},m.customProgramCacheKey=()=>"snowbreak-black-stocking-v1"):p&&(m.onBeforeCompile=M=>{M.fragmentShader=M.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
{float siwaNdv=clamp(abs(dot(normalize(normal),normalize(vViewPosition))),0.0,1.0);float siwaCenter=pow(siwaNdv,1.35);vec3 siwaEdge=min(vec3(1.0),diffuseColor.rgb*1.08+vec3(0.03,0.03,0.04));vec3 siwaMid=diffuseColor.rgb*vec3(0.98,0.92,0.90);diffuseColor.rgb=mix(siwaEdge,siwaMid,siwaCenter);}`)},m.customProgramCacheKey=()=>"snowbreak-white-stocking-v1")}return o?(m.polygonOffset=!0,m.polygonOffsetFactor=-1.5,m.polygonOffsetUnits=-1.5):n.transparent&&!a&&(m.polygonOffset=!0,m.polygonOffsetFactor=-.25,m.polygonOffsetUnits=-.25),m.userData.profile=s?"eye":l?"soft-face":c?"hair":u?"skin":"cloth-or-room",m}function Rm(i,e){e.outputColorSpace=Dt,e.toneMapping=Ba,e.toneMappingExposure=1.05;let t=new La(16774636,8228520,1.02);i.add(t);let n=new Oi(16773862,2.05);n.position.set(-2,4,5),i.add(n),i.add(n.target),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-15e-5,n.shadow.normalBias=.008,n.shadow.radius=2,e.shadowMap.enabled=!0,e.shadowMap.type=Mc;let r=new Oi(14477567,.85);r.position.set(3,2,4),i.add(r);let s=new Oi(15919359,1.25);s.position.set(1,3,-4),i.add(s);let a=new _r;a.background=new Qe(.12,.13,.16);let o=new br(1,1),l=[];for(let[m,f,b,M]of[[[-4,4,5],[4.5,7],16774118,5.2],[[5,2,3],[3.5,6],14478079,3.6],[[0,5,-4],[6,3],16770804,4.2],[[0,6,2],[5,2],16777215,3.4]]){let x=new Qt({color:b,side:en});x.color.multiplyScalar(M),l.push(x);let S=new Vt(o,x);S.position.fromArray(m),S.scale.set(f[0],f[1],1),S.lookAt(0,1,0),a.add(S)}let c=new Vs(e),u=c.fromScene(a,.045,.1,30);c.dispose(),o.dispose();for(let m of l)m.dispose();i.environment=u.texture;let d=2048;function h(m){n.shadow.mapSize.x!==m&&(n.shadow.mapSize.set(m,m),n.shadow.map?.dispose(),n.shadow.map=null,n.shadow.needsUpdate=!0)}let p={exposure:1.05,warmth:.5,reflection:1,shadows:!0,shadowSize:1024,key:2.05,fill:.85,rim:1.25};function g(m){let f={...p,...m};if(![f.exposure,f.warmth,f.reflection].every(Number.isFinite)||typeof f.shadows!="boolean"||f.exposure<.65||f.exposure>1.45||f.warmth<0||f.warmth>1||f.reflection<0||f.reflection>1.5)throw new Error("Invalid lighting settings");if(![512,1024,2048].includes(f.shadowSize)||![f.key,f.fill,f.rim].every(b=>Number.isFinite(b)&&b>=0&&b<=3))throw new Error("Invalid light quality");return h(Math.min(f.shadowSize,d)),p={exposure:f.exposure,warmth:f.warmth,reflection:f.reflection,shadows:f.shadows,shadowSize:f.shadowSize,key:f.key,fill:f.fill,rim:f.rim},n.intensity=p.key,r.intensity=p.fill,s.intensity=p.rim,e.toneMappingExposure=p.exposure,e.shadowMap.enabled=p.shadows,n.color.set(15331839).lerp(new Qe(16770247),p.warmth),i.environmentIntensity=p.reflection,{...p}}function v(m){let f=m.getCenter(new D),b=Math.max(1.5,m.getSize(new D).length()*.7);n.target.position.copy(f),n.position.copy(f).add(new D(-2,4,5).normalize().multiplyScalar(b*3)),Object.assign(n.shadow.camera,{left:-b,right:b,top:b,bottom:-b,near:.1,far:b*6}),n.shadow.camera.updateProjectionMatrix(),n.target.updateMatrixWorld()}return{set:g,frame:v,setBudget(m){let f=m.mode==="quality"||m.mode==="performance",b=m.mode==="battery"||m.mode==="powersave";d=f?m.thermal==="critical"?1024:2048:b||m.thermal==="critical"?512:m.thermal==="serious"||m.lowPower?1024:2048;let M=f?2048:b?512:p.shadowSize;h(Math.min(M,d))},snapshot:()=>({...p,environment:!0,shadowMapSize:n.shadow.mapSize.x}),dispose(){i.environment=null,u.dispose(),n.shadow.dispose(),n.target.removeFromParent();for(let m of[t,n,r,s])m.removeFromParent()}}}function Fh(i,e,t,n,r=null){let s=[t,r].filter(Boolean);if(!s.length)return{available:()=>[],apply(){},snapshot:()=>({available:!1})};let a=R=>["companion-upper-body-transfer/1","companion-upper-body-transfer/2","companion-upper-body-transfer/3"].includes(R.schema)&&["Yuki","UniversalMMD"].includes(R.sourceCharacter)&&/^[A-Za-z0-9_-]{1,64}$/.test(R.targetCharacter)&&Array.isArray(R.clips)&&R.clips.length<=24;for(let R of s){if(!a(R))throw new Error("Invalid learned motion catalog");if(R.schema.endsWith("/3")&&R.targetCharacter!=="Universal"&&(R.stance!=="standing"||n!=="standing"))throw new Error("Standing motion requires standing source")}let o=n==="standing",l=R=>{let I=[];if(i.traverse(O=>{O.isBone&&O.name===R&&I.push(O)}),I.length!==1)throw new Error("Learned motion bone missing/ambiguous: "+R);return I[0]},c=l("Bip001-Head"),u=i.getObjectByName("Bip001-Spine3")||i.getObjectByName("Bip001-Spine2")||l("Bip001-Spine"),d={};for(let[R,I]of[["left","L"],["right","R"]]){let O=l(`Bip001-${I}-UpperArm`),B=l(`Bip001-${I}-Forearm`),N=l(`Bip001-${I}-Hand`);if(B.parent!==O||N.parent!==B)throw new Error("Learned arm binding mismatch");d[R]={upper:O,lower:B,hand:N}}let h=R=>R.getWorldPosition(new D);i.updateWorldMatrix(!0,!0);let p=1,g=h(d.right.upper).sub(h(d.left.upper)).normalize(),v=h(c).sub(h(u)).normalize();new D().crossVectors(g,v).dot(e.position.clone().sub(h(u)))<0&&(p=-1);let m=new Map;for(let R of s){let I=R.schema.endsWith("/3")&&R.stance==="standing",O=R.targetCharacter==="Universal";for(let B of R.clips){if(!(["yuki_hello","yuki_Yes","yuki_No","yuki_Peace_hand","yuki_dance_90bpm","yuki_dance_120bpm","yuki_f_vibe_dance_60_bpm_002"].includes(B.id)||/^mmd_[a-zA-Z0-9_-]{1,48}$/.test(B.id))||m.has(B.id)||!Number.isInteger(B.frames)||B.frames<2||B.frames>1800||!Number.isFinite(B.fps)||B.fps<=0||B.fps>60)throw new Error("Invalid learned clip");let V={};for(let[G,ce]of Object.entries(B.channels||{})){let de=/^(left|right)(Curl[0-4]_[0-2]|Spread[0-4])$/.test(G)?1:["headDelta","chestDelta",...I?["pelvisDelta","leftFootDelta","rightFootDelta"]:[]].includes(G)?4:["leftUpper","leftLower","rightUpper","rightLower","rightHandWidth","rightHandForward","leftHandWidth","leftHandForward",...I?["leftThigh","rightThigh","leftCalf","rightCalf"]:[]].includes(G)||/^(left|right)Finger[0-4]_[0-2]$/.test(G)?3:0;if(!de||typeof ce!="string")throw new Error("Invalid learned channel");let he=Uint8Array.from(atob(ce),ue=>ue.charCodeAt(0));if(he.byteLength!==B.frames*de*4)throw new Error("Learned channel truncated");let q=new Float32Array(he.buffer);if(!q.every(Number.isFinite))throw new Error("Non-finite learned pose");if(de===1&&q.some(ue=>ue<-.31||ue>1.11))throw new Error("Invalid learned finger angle");for(let ue=0;de>1&&ue<B.frames;ue++){let H=0;for(let J=0;J<de;J++)H+=q[ue*de+J]**2;if(Math.abs(H-1)>.01)throw new Error("Invalid learned direction/quaternion")}V[G]={values:q,width:de}}if(!V.headDelta)throw new Error("Missing learned head reference");let L=B.id.startsWith("mmd_"),C=B.id.includes("dance")||L,$=C?I?"standing-dance":"seated-dance":B.id==="yuki_Peace_hand"?"peace":B.id==="yuki_hello"?"greeting":"head",F=C?["left","right"]:$==="head"?[]:["right"];if(!R.schema.endsWith("/1")&&(B.motionKind!==$||JSON.stringify(B.arms)!==JSON.stringify(F)))throw new Error("Invalid learned action capability");if(C&&!o&&!O)continue;let U=C?o&&I?"standing-dance":"seated-dance":$;if(U==="standing-dance"&&["pelvisDelta","leftThigh","rightThigh","leftCalf","rightCalf","leftFootDelta","rightFootDelta"].some(G=>!V[G]))throw new Error("Missing standing body channels");m.set(B.id,{...B,kind:U,arms:F,channels:V,duration:(B.frames-1)/B.fps})}}let f=Object.fromEntries([["left","L"],["right","R"]].map(([R,I])=>[R,Array.from({length:5},(O,B)=>[l(`Bip001-${I}-Finger${B}`),l(`Bip001-${I}-Finger${B}1`),l(`Bip001-${I}-Finger${B}2`)])])),b=o?l("Bip001-Pelvis"):null,M=o?Object.fromEntries([["left","L"],["right","R"]].map(([R,I])=>[R,{thigh:l(`Bip001-${I}-Thigh`),calf:l(`Bip001-${I}-Calf`),foot:l(`Bip001-${I}-Foot`),toe:l(`Bip001-${I}-Toe0`)}])):{},x={available:!0,mappedArmBones:4,mappedHeadBones:1,limited:0,legWrites:0,fingerWrites:0};function S(){let R=h(d.right.upper).sub(h(d.left.upper)).normalize(),I=h(c).sub(h(u));I.addScaledVector(R,-I.dot(R)).normalize();let O=new D().crossVectors(R,I).multiplyScalar(p).normalize();return{right:R,up:I,front:O,vector:B=>R.clone().multiplyScalar(B[0]).addScaledVector(I,B[1]).addScaledVector(O,B[2])}}let y=new Map,T=null,_=-1;function E(R,I,O,B={}){let N=m.get(R);if(!N||O<=0)return;let V=N.kind==="standing-dance",L=V&&Number.isFinite(B.amplitude)?Me.clamp(B.amplitude,.5,1.2):1;x.fingerWrites=0,x.armWrites=0,x.chestWrites=0,x.workspaceAdjusted=0,(R!==T||I<=_||I-_>.2)&&y.clear(),T=R,_=I,i.updateWorldMatrix(!0,!0);let C=S(),$=Me.clamp(I*N.fps,0,N.frames-1),F=Math.floor($),U=Math.min(F+1,N.frames-1),G=$-F;function ce(pe){let we=N.channels[pe];if(!we)return null;if(V&&we.width===1)return[Me.lerp(we.values[F],we.values[U],G)];if(V&&we.width===3)return new D().fromArray(we.values,F*3).lerp(new D().fromArray(we.values,U*3),G).normalize().toArray();if(we.width===1){let Be=0;for(let Q of[-2,-1,0,1,2]){let K=Me.clamp($+Q,0,N.frames-1),re=Math.floor(K),fe=Math.min(re+1,N.frames-1);Be+=(we.values[re]+(we.values[fe]-we.values[re])*(K-re))*(Q===0?.4:Math.abs(Q)===1?.2:.1)}return[Be]}if(we.width===4)return new He().fromArray(we.values,F*4).slerp(new He().fromArray(we.values,U*4),G).normalize().toArray();let be=new D;for(let Be of[-2,-1,0,1,2]){let Q=Me.clamp($+Be,0,N.frames-1),K=Math.floor(Q),re=Math.min(K+1,N.frames-1);be.add(new D().fromArray(we.values,K*3).lerp(new D().fromArray(we.values,re*3),Q-K).multiplyScalar(Be===0?.4:Math.abs(Be)===1?.2:.1))}return be.normalize().toArray()}function de(pe,we,be,Be,Q=O){let K=we.angleTo(be),re=Me.degToRad(Be);K>re&&x.limited++,pe.quaternion.copy(we).slerp(be,Q*Math.min(L,re/Math.max(K,1e-8))).normalize()}function he(pe,we,be,Be,Q=O){pe.parent.updateWorldMatrix(!0,!1);let K=pe.quaternion.clone(),re=K.clone(),fe=(we?we.position.clone():new D(1,0,0)).multiply(pe.scale).applyQuaternion(re).normalize(),ve=be.clone().transformDirection(pe.parent.matrixWorld.clone().invert()),Xe=new He().setFromUnitVectors(fe,ve).multiply(re).normalize();y.set(pe,Xe.clone()),de(pe,K,Xe,Be,Q),pe.updateWorldMatrix(!1,!0)}function q(pe,we,be,Be){let Q=new Ze().makeBasis(C.right,C.up,C.front),K=new Ze().makeRotationFromQuaternion(new He(...we)),re=Q.clone().multiply(K).multiply(Q.clone().invert());pe.parent.updateWorldMatrix(!0,!1);let fe=new Ze().extractRotation(pe.parent.matrixWorld),ve=fe.clone().invert().multiply(re).multiply(fe),Xe=pe.quaternion.clone(),et=new He().setFromRotationMatrix(ve).multiply(Xe).normalize();de(pe,Xe,et,be,Be),pe.updateWorldMatrix(!1,!0)}let ue=new D(0,1,0).transformDirection(i.parent.matrixWorld),H=V?Math.min(...Object.values(M).map(pe=>h(pe.foot).dot(ue))):0;x.legWrites=0,x.groundCorrection=0,x.sourceTime=I,x.sourceFrame=$,x.sourceFPS=N.fps,x.amplitude=L,x.sourceBPM=V?R.includes("90bpm")?90:R.includes("120bpm")?120:60:null,V&&(q(b,ce("pelvisDelta"),30,O),C=S());let J=ce("chestDelta");if(J&&(q(u,J,V?35:10,O*(V?1:.35)),C=S(),x.chestWrites=1),V){for(let[Q,K]of Object.entries(M)){if(K.calf.parent!==K.thigh||K.foot.parent!==K.calf)throw new Error("Standing leg hierarchy mismatch");he(K.thigh,K.calf,C.vector(ce(Q+"Thigh")),110,O),he(K.calf,K.foot,C.vector(ce(Q+"Calf")),150,O),q(K.foot,ce(Q+"FootDelta"),45,O),x.legWrites+=3}let pe=Me.clamp(H-Math.min(...Object.values(M).map(Q=>h(Q.foot).dot(ue))),-.18,.18),we=h(b),be=b.parent.matrixWorld.clone().invert(),Be=we.clone().addScaledVector(ue,pe).applyMatrix4(be).sub(we.clone().applyMatrix4(be));b.position.add(Be),b.updateWorldMatrix(!1,!0),x.groundCorrection=pe}function _e(pe,we,be,Be){let Q=h(pe.upper),K=h(pe.lower).distanceTo(Q),re=h(pe.hand).distanceTo(h(pe.lower)),fe=Q.clone().addScaledVector(C.vector(we),K),ve=fe.clone().addScaledVector(C.vector(be),re),Xe=h(u),et=ve.clone().sub(Xe),X=et.dot(C.right),Ve=et.dot(C.up),Ne=et.dot(C.front),P=[X,Ve,Ne];Ve=Me.clamp(Ve,-.16,.6);let w=(1-Me.smoothstep(Math.abs(X),.16,.28))*Me.smoothstep(Ve,-.42,-.32)*(1-Me.smoothstep(Ve,.18,.32));Ne+=Math.max(0,.23-Ne)*w,ve.copy(Xe).addScaledVector(C.right,X).addScaledVector(C.up,Ve).addScaledVector(C.front,Ne);let Z=ve.clone().sub(h(c));Z.length()<.14&&ve.copy(h(c)).add(Z.length()>.001?Z.setLength(.14):C.front.clone().multiplyScalar(.14)),(P[1]!==Ve||P[2]!==Ne)&&x.workspaceAdjusted++;let z=ve.clone().sub(Q),k=Me.clamp(z.length(),Math.abs(K-re)+.015,(K+re)*.98);z.normalize(),ve.copy(Q).addScaledVector(z,k);let ee=C.right.clone().multiplyScalar(Be==="right"?1:-1),oe=ee.clone().addScaledVector(C.front,.3).addScaledVector(C.up,.2);oe.addScaledVector(z,-oe.dot(z)),oe.length()<1e-4&&oe.copy(C.front).addScaledVector(z,-C.front.dot(z)),oe.normalize();let j=(K*K-re*re+k*k)/(2*k),ae=Math.sqrt(Math.max(0,K*K-j*j)),xe=Q.clone().addScaledVector(z,j).addScaledVector(oe,ae);return{upper:xe.clone().sub(Q).normalize(),lower:ve.sub(xe).normalize()}}for(let pe of N.arms){let Xe=function(){let ee=h(be[1][0]).sub(h(be[4][0])).normalize(),oe=h(be[2][0]).sub(h(we.hand));return oe.addScaledVector(ee,-oe.dot(ee)).normalize(),new Ze().makeBasis(ee,oe,new D().crossVectors(ee,oe).normalize())},we=d[pe],be=f[pe],Be=ce(pe+"Upper"),Q=ce(pe+"Lower");if(!Be||!Q)continue;let K=["greeting","peace"].includes(N.kind)?O*Me.smoothstep(Q[1],-1,1):O*(V?1:.72),re=N.kind==="seated-dance"?_e(we,Be,Q,pe):{upper:C.vector(Be),lower:C.vector(Q)};he(we.upper,we.lower,re.upper,120,K),he(we.lower,we.hand,re.lower,170,K),x.armWrites+=2;let fe=ce(pe+"HandWidth"),ve=ce(pe+"HandForward");if(!fe||!ve)continue;i.updateWorldMatrix(!0,!0);let et=C.vector(fe).normalize(),X=C.vector(ve);X.addScaledVector(et,-X.dot(et)).normalize();let Ve=new Ze().makeBasis(et,X,new D().crossVectors(et,X).normalize()),Ne=Ve.multiply(Xe().invert()),P=we.hand,w=new Ze().extractRotation(P.parent.matrixWorld),Z=w.clone().invert().multiply(Ne).multiply(w),z=P.quaternion.clone(),k=new He().setFromRotationMatrix(Z).multiply(z).normalize();de(P,z,k,N.kind==="greeting"?110:N.kind==="seated-dance"?75:110,K*(N.kind==="seated-dance"?.7:1)),P.updateWorldMatrix(!1,!0);for(let ee=0;ee<5;ee++)for(let oe=0;oe<3;oe++){let j=ce(`${pe}Finger${ee}_${oe}`);if(!j)continue;let ae=new D(...j).normalize(),xe=oe?new D(...ce(`${pe}Finger${ee}_${oe-1}`)).normalize():new D(0,1,0),Ue=Me.clamp(Math.atan2(-ae.z,Math.max(.1,ae.y))-Math.atan2(-xe.z,Math.max(.1,xe.y)),-.15,ee===0?.45:1.1),Ee=oe===0&&ee!==0?Me.clamp(Math.atan2(ae.x,ae.y),-.3,.3):0,Se=ce(`${pe}Curl${ee}_${oe}`),De=ce(`${pe}Spread${ee}`);Se&&(Ue=Se[0]),oe===0&&ee!==0&&De&&(Ee=De[0]),N.kind==="peace"&&(Ue=ee===1||ee===2?.02:ee===0?.4:.95,oe===0&&(Ee=ee===1?.14:ee===2?-.08:0));let Ge=pe==="left"?-1:1,it=be[ee][oe],Y=it.quaternion.clone(),le=new He().fromArray(it.userData.bindLocalQuaternion||Y.toArray()).multiply(new He().setFromAxisAngle(new D(0,0,1),Ee*Ge)).multiply(new He().setFromAxisAngle(new D(0,1,0),Ue*Ge));it.quaternion.copy(Y).slerp(le,O).normalize(),x.fingerWrites++}}let Fe=ce("headDelta");if(Fe){let pe=new Ze().makeBasis(C.right,C.up,C.front),we=new Ze().makeRotationFromQuaternion(new He(...Fe)),be=pe.clone().multiply(we).multiply(pe.clone().invert());c.parent.updateWorldMatrix(!0,!1);let Be=new Ze().extractRotation(c.parent.matrixWorld),Q=Be.clone().invert().multiply(be).multiply(Be),K=c.quaternion.clone(),re=new He().setFromRotationMatrix(Q).multiply(K).normalize();de(c,K,re,40)}i.updateWorldMatrix(!0,!0);let ge=new Set;i.traverse(pe=>{pe.isSkinnedMesh&&!ge.has(pe.skeleton)&&(pe.skeleton.update(),ge.add(pe.skeleton))})}return{available:()=>[...m.values()].map(R=>({id:R.id,label:R.label,duration:R.duration,arms:[...R.arms],kind:R.kind})),apply:E,snapshot:()=>{i.updateWorldMatrix(!0,!0);let R=S(),I=d.right;return{...x,parentDeterminant:I.upper.parent.matrixWorld.determinant(),rightUpper:h(I.lower).sub(h(I.upper)).normalize().toArray(),rightLower:h(I.hand).sub(h(I.lower)).normalize().toArray(),handHeight:h(I.hand).sub(h(I.lower)).dot(R.up)}}}}function Oh(i,e){if(e===rh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Bs||e===qa){let t=i.getIndex();if(t===null){let s=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Bs)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Cm(i){let e=new Map,t=new Map,n=i.clone();return Im(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Im(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Im(i.children[n],e.children[n],t)}var Lr=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new _l(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new _l(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new id(t)})}load(e,t,n,r){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Bi.extractUrlBase(e);a=Bi.resolveURL(c,this.path)}else a=Bi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ps(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dm){try{a[mt.KHR_BINARY_GLTF]=new rd(e)}catch(d){r&&r(d);return}s=JSON.parse(a[mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new hd(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case mt.KHR_MATERIALS_UNLIT:a[d]=new Vh;break;case mt.KHR_DRACO_MESH_COMPRESSION:a[d]=new sd(s,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:a[d]=new ad;break;case mt.KHR_MESH_QUANTIZATION:a[d]=new od;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function Fb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hh=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Oi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Da(u),c.distance=d;break;case"spot":c=new Ua(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Vh=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let r=[];e.color=new Qe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],pn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(s,s)}return Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Dt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(s[0],s[1],s[2],pn),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},jh=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(s[0],s[1],s[2],pn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Dt)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?an:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},ed=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},td=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},nd=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=r.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},_l=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,h,r.mode,r.filter),p})})}else return null}},id=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let c of r.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,p=[];for(let g of d){let v=new Ze,m=new D,f=new He,b=new D(1,1,1),M=new Ea(g.geometry,g.material,h);for(let S=0;S<h;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,S),l.SCALE&&b.fromBufferAttribute(l.SCALE,S),M.setMatrixAt(S,v.compose(m,f,b));let x=null;for(let S in l)if(S==="_COLOR_0"){let y=l[S];M.instanceColor=new Pi(y.array,y.itemSize,y.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(x===null){let T=M.geometry;x=new Jt,x.name=T.name;for(let _ in T.attributes)x.setAttribute(_,T.attributes[_]);for(let _ in T.morphAttributes)x.morphAttributes[_]=T.morphAttributes[_];T.index!==null&&x.setIndex(T.index),x.morphTargetsRelative=T.morphTargetsRelative;for(let _ of T.groups)x.addGroup(_.start,_.count,_.materialIndex);T.boundingBox!==null&&(x.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(x.boundingSphere=T.boundingSphere.clone()),x.drawRange.start=T.drawRange.start,x.drawRange.count=T.drawRange.count,x.userData=Object.assign({},T.userData),M.geometry=x}let y=l[S];x.setAttribute(S,new Pi(y.array,y.itemSize,y.normalized))}Ut.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Dm="glTF",Ka=12,Pm={JSON:1313821514,BIN:5130562},rd=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ka,s=new DataView(e,Ka),a=0;for(;a<r;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===Pm.JSON){let c=new Uint8Array(e,Ka+a,o);this.content=n.decode(c)}else if(l===Pm.BIN){let c=Ka+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let d=ld[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=ld[u]||u.toLowerCase();if(a[u]!==void 0){let h=n.accessors[e.attributes[u]],p=Ws[h.componentType];c[d]=p.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(p){for(let g in p.attributes){let v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}d(p)},o,c,pn,h)})})}},ad=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},od=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},vl=class extends hi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,d=(n-t)/u,h=d*d,p=h*d,g=e*c,v=g-c,m=-2*p+3*h,f=p-h,b=1-m,M=f-h+d;for(let x=0;x!==o;x++){let S=a[v+x+o],y=a[v+x+l]*u,T=a[g+x+o],_=a[g+x]*u;s[x]=b*S+M*y+m*T+f*_}return s}},Ob=new He,cd=class extends vl{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return Ob.fromArray(s).normalize().toArray(s),s}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lm={9728:zt,9729:Ht,9984:Ec,9985:Ds,9986:Ar,9987:Jn},Nm={33071:Vn,33648:ms,10497:tr},Bh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ld={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Bb={CUBICSPLINE:void 0,LINEAR:xr,STEP:gr},kh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),i.DefaultMaterial}function Pr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zb(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let d=e[c];if(n){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(h)}if(r){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(h)}if(s){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],d=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function Hb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vb(i){let e,t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zh(t.attributes):e=i.indices+":"+zh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+zh(i.targets[n]);return e}function zh(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ud(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Wb=new Ze,hd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new Fi(this.options.manager):this.textureLoader=new Fa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ps(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return Pr(s,o,r),xi(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,a){n.load(Bi.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=Bh[r.type],o=Ws[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new Ft(c,a,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Bh[r.type],c=Ws[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,v,m;if(p&&p!==d){let f=Math.floor(h/p),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count,M=t.cache.get(b);M||(v=new c(o,f*p,r.count*p/u),M=new Ms(v,p/u),t.cache.add(b,M)),m=new Ss(M,l,h%p/u,g)}else o===null?v=new c(r.count*l):v=new c(o,h,r.count*l),m=new Ft(v,l,g);if(r.sparse!==void 0){let f=Bh.SCALAR,b=Ws[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new b(a[1],M,r.sparse.count*f),y=new c(a[2],x,r.sparse.count*l);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,_=S.length;T<_;T++){let E=S[T];if(m.setX(E,y[T*l]),l>=2&&m.setY(E,y[T*l+1]),l>=3&&m.setZ(E,y[T*l+2]),l>=4&&m.setW(E,y[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Lm[h.magFilter]||Ht,u.minFilter=Lm[h.minFilter]||Jn,u.wrapS=Nm[h.wrapS]||tr,u.wrapT=Nm[h.wrapT]||tr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zt&&u.minFilter!==Ht,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=r.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(d){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(v){let m=new jt(v);m.needsUpdate=!0,h(m)}),t.load(Bi.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),xi(d,a),d.userData.mimeType=a.mimeType||Gb(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[mt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Rs,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new As,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mr}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){let d=r[mt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new Qe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],pn),o.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Dt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=en);let u=s.alphaMode||kh.OPAQUE;if(u===kh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===kh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Qt&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ct(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Qt&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Qt){let d=s.emissiveFactor;o.emissive=new Qe().setRGB(d[0],d[1],d[2],pn)}return s.emissiveTexture!==void 0&&a!==Qt&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(c).then(function(){let d=new a(o);return s.name&&(d.name=s.name),xi(d,s),t.associations.set(d,{materials:e}),s.extensions&&Pr(r,d,s),d})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Um(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Vb(c),d=r[u];if(d)a.push(d.promise);else{let h;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Um(new Jt,c,t),c.mode===Wn.TRIANGLE_STRIP?h=h.then(p=>Oh(p,qa)):c.mode===Wn.TRIANGLE_FAN&&(h=h.then(p=>Oh(p,Bs))),r[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?kb(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,g=u.length;p<g;p++){let v=u[p],m=a[p],f,b=c[p];if(m.mode===Wn.TRIANGLES||m.mode===Wn.TRIANGLE_STRIP||m.mode===Wn.TRIANGLE_FAN||m.mode===void 0){let M=s.isSkinnedMesh===!0,x=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");M&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=M&&x?new Sa(v,b):new Vt(v,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===Wn.LINES)f=new Ta(v,b);else if(m.mode===Wn.LINE_STRIP)f=new vr(v,b);else if(m.mode===Wn.LINE_LOOP)f=new Aa(v,b);else if(m.mode===Wn.POINTS)f=new Ra(v,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Hb(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),xi(f,s),m.extensions&&Pr(r,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Pr(r,d[0],s),d[0];let h=new kt;s.extensions&&Pr(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Me.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new rr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let d=a[c];if(d){o.push(d);let h=new Ze;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wa(o,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){let p=r.channels[d],g=r.samplers[p.sampler],v=p.target,m=v.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,b=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){let h=d[0],p=d[1],g=d[2],v=d[3],m=d[4],f=[];for(let M=0,x=h.length;M<x;M++){let S=h[M],y=p[M],T=g[M],_=v[M],E=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,y,T,_,E);if(R)for(let I=0;I<R.length;I++)f.push(R[I])}let b=new Is(s,void 0,f);return xi(b,r),b})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,Wb)});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);if(u.userData.pivot!==void 0&&d.length>0){let p=u.userData.pivot,g=d[0];u.pivot=new D().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new ws:c.length>1?u=new kt:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=a),xi(u,s),s.extensions&&Pr(n,u,s),s.matrix!==void 0){let d=new Ze;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new kt;n.name&&(s.name=r.createUniqueName(n.name)),xi(s,n),n.extensions&&Pr(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++){let h=l[u];h.parent!==null?s.add(Cm(h)):s.add(h)}let c=u=>{let d=new Map;for(let[h,p]of r.associations)(h instanceof _n||h instanceof jt)&&d.set(h,p);return u.traverse(h=>{let p=r.associations.get(h);p!=null&&d.set(h,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}cr[s.path]===cr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(cr[s.path]){case cr.weights:u=Ni;break;case cr.rotation:u=di;break;case cr.translation:case cr.scale:u=Di;break;default:n.itemSize===1?u=Ni:u=Di;break}let d=r.interpolation!==void 0?Bb[r.interpolation]:xr,h=this._getArrayFromAccessor(n);for(let p=0,g=l.length;p<g;p++){let v=new u(l[p]+"."+cr[s.path],t.array,h,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ud(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof di?cd:vl;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Xb(i,e,t){let n=e.attributes,r=new Yt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let u=ud(Ws[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,l=new D;for(let c=0,u=s.length;c<u;c++){let d=s[c];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){let v=ud(Ws[h.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;let a=new yn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Um(i,e,t){let n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=ld[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return pt.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),xi(i,e),Xb(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?zb(i,e.targets,t):i})}function Fm({Pitch:i,Yaw:e,Roll:t}){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid rotator");let n=Math.PI/360,r=Math.sin(i*n),s=Math.cos(i*n),a=Math.sin(e*n),o=Math.cos(e*n),l=Math.sin(t*n),c=Math.cos(t*n),u=c*r*a-l*s*o,d=-c*r*o-l*s*a,h=c*s*a-l*r*o,p=c*s*o+l*r*a;return[-u,-h,-d,p]}function Om(i){if(!i.isSkinnedMesh)return()=>null;let e=new Map(i.skeleton.bones.map((h,p)=>[h.name,new D().setFromMatrixPosition(i.skeleton.boneInverses[p].clone().invert())])),t=e.get("Bip001-Pelvis"),n=e.get("Bip001-Neck"),r=e.get("Bip001-L-UpperArm"),s=e.get("Bip001-R-UpperArm");if(!t||!n||!r||!s)return()=>null;let a=n.distanceTo(t);if(a<.05)return()=>null;let o=n.clone().sub(t).normalize(),l=s.clone().sub(r).normalize(),c=new D().crossVectors(l,o).normalize(),u=new D;for(let h of["L","R"]){let p=e.get("Bip001-"+h+"-Foot"),g=e.get("Bip001-"+h+"-Toe0");p&&g&&u.add(g.clone().sub(p))}u.dot(c)<0&&c.negate();let d=i.geometry.getAttribute("position");return(h,p,g)=>{if(!p||!["torso","leg","chest","hips",void 0].includes(g?.id))return null;let v=new D;for(let S=0;S<3;S++)v.addScaledVector(new D().fromBufferAttribute(d,h[S]),p.getComponent(S));let m=v.sub(t),f=Math.abs(m.dot(l))/a,b=m.dot(o)/a,M=m.dot(c)/a;if(f>.72)return null;let x=null;return b>-.38&&b<-.04&&f<.23&&M>.025?x="pelvis_front":b>-.35&&b<.18&&M<-.025?x="hips":b>.43&&b<1.02&&M>.025&&f<.67?x="chest":b>.1&&b<=.43&&M>.025?x=f>.48?"waist":"abdomen":b>.16&&b<1.02&&M<-.025&&(x="back"),x?{id:x,confidence:.85,source:"bind-pose-surface",coordinates:[f,b,M]}:null}}function qb(i=""){let e=i.toLowerCase();return/breast|bust|tit(?:for|_|\b)|oppai/.test(e)?"chest":/butt|glute/.test(e)?"hips":/eye|jaw|cheek|face|lip/.test(e)?"face":/head|hair/.test(e)?"head":/neck/.test(e)?"neck":/hand|finger|thumb|index|middle|ring|pinky/.test(e)?/(?:-l-|_l\b|left)/.test(e)?"left_hand":/(?:-r-|_r\b|right)/.test(e)?"right_hand":"hand":/upperarm|forearm|clavicle/.test(e)?"arm":/foot|toe/.test(e)?"foot":/thigh|calf|knee/.test(e)?"leg":/spine|pelvis|hip/.test(e)?"torso":null}function Bm(i){let e=new Map,t=0;for(let{name:r,weight:s}of i){if(!Number.isFinite(s)||s<=0)continue;t+=s;let a=qb(r);a&&e.set(a,(e.get(a)||0)+s)}let n=[...e].sort((r,s)=>s[1]-r[1])[0];return!n||t<=0||n[1]/t<.7?null:{id:n[0],confidence:Math.min(.95,n[1]/t),source:"weighted-skinned-triangle"}}function km(i,e,t,n=null){let r=new wr,s=new WeakMap,a=new Map,o=new WeakMap,l=0,c=document.createElement("canvas");c.width=c.height=32;let u=c.getContext("2d",{willReadFrequently:!0});function d(g,v){if(!["torso","leg"].includes(g?.id))return g;let m=U=>i.getObjectByName(U),f=U=>m(U)?.getWorldPosition(new D),b=f("Bip001-Pelvis"),M=f("Bip001-Neck"),x=f("Bip001-L-UpperArm"),S=f("Bip001-R-UpperArm"),y=f("Bip001-Head"),T=f("EyeJoint_L"),_=f("EyeJoint_R");if(!b||!M||!x||!S||!y||!T||!_)return g;let E=M.distanceTo(b);if(E<1e-5)return g;let R=M.clone().sub(b).normalize(),I=S.clone().sub(x).normalize(),O=new D().crossVectors(I,R).normalize(),N=T.add(_).multiplyScalar(.5).sub(y).dot(O);if(Math.abs(N)<E*.002)return g;N<0&&O.negate();let V=v.clone().sub(b),L=V.dot(R)/E,C=V.dot(O)/E;if(Math.abs(V.dot(I))/E>.7)return g;let F=null;return L>-.4&&L<.16&&C<-.025?F="hips":g.id==="torso"&&(L>.45&&L<.95&&C>.06?F="chest":L>.05&&L<.46&&C>.06?F="abdomen":L>.16&&L<.95&&C<-.06&&(F="back")),F?{id:F,confidence:.75,source:"rig-surface-estimate"}:g}function h(g){for(let v=g;v;v=v.parent)if(!v.visible)return!1;return!0}function p(g,v){if(!g||!v)return 1;try{let m=g.image,f=m.width,b=m.height;if(!f||!b||!u)return null;let M=v.clone();g.transformUv(M);let x=Math.min(f-1,Math.max(0,Math.floor(M.x*f))),S=Math.min(b-1,Math.max(0,Math.floor(M.y*b))),y=Math.floor(x/32)*32,T=Math.floor(S/32)*32;s.has(g)||s.set(g,++l);let _=s.get(g)+":"+y+":"+T,E=a.get(_);if(E)a.delete(_),a.set(_,E);else{u.clearRect(0,0,32,32),u.drawImage(m,y,T,Math.min(32,f-y),Math.min(32,b-T),0,0,Math.min(32,f-y),Math.min(32,b-T));let R=u.getImageData(0,0,32,32).data;E=new Uint8Array(1024);for(let I=0;I<1024;I++)E[I]=R[I*4+3];a.set(_,E),a.size>128&&a.delete(a.keys().next().value)}return E[(S-T)*32+x-y]/255}catch{return null}}return(g,v)=>{let m=t.getBoundingClientRect();if(!Number.isFinite(g)||!Number.isFinite(v)||!m.width||!m.height||g<m.left||g>m.right||v<m.top||v>m.bottom)return null;i.updateWorldMatrix(!0,!0),e.updateMatrixWorld();let f=[];i.traverse(M=>{M.isMesh&&h(M)&&(M.isSkinnedMesh&&(M.skeleton.update(),M.computeBoundingSphere(),M.computeBoundingBox()),f.push(M))});let b=new Set;n?.traverse(M=>{M.isMesh&&h(M)&&(f.push(M),b.add(M))}),r.setFromCamera(new ct((g-m.left)/m.width*2-1,-(v-m.top)/m.height*2+1),e);for(let M of r.intersectObjects(f,!1)){let x=M.object,S=x.material,y=p(x.userData.previewMap,M.uv),T=S.alphaTest||(S.transparent?.1:0);if(S.clippingPlanes?.some(C=>C.distanceToPoint(M.point)<0)||y!==null&&y<T)continue;if(b.has(x))return null;let _=[M.face.a,M.face.b,M.face.c],E=_.map(C=>x.getVertexPosition(C,new D)),R=x.worldToLocal(M.point.clone()),I=oi.getBarycoord(R,...E,new D),O=[],B=x.geometry.getAttribute("skinIndex"),N=x.geometry.getAttribute("skinWeight");if(x.isSkinnedMesh&&B&&N&&I)for(let C=0;C<3;C++)for(let $=0;$<4;$++)O.push({name:x.skeleton.bones[B.getComponent(_[C],$)]?.name,weight:N.getComponent(_[C],$)*I.getComponent(C)});o.has(x)||o.set(x,Om(x));let V=Bm(O),L=o.get(x)(_,I,V)||d(V,M.point);return{skinBones:O.filter(C=>C.weight>.05).map(C=>C.name),mesh:x.userData.snowbreakSurfaceKey,triangle:M.faceIndex,barycentric:I?.toArray(),anatomy:L,uv:M.uv?.toArray()||null,point:M.point.toArray(),distance:M.distance,alphaVerified:y!==null,material:x.userData.snowbreakMaterialName}}return null}}var ki={head:"\u5934\u90E8",forehead:"\u989D\u5934",hair:"\u5934\u53D1",left_cheek:"\u5DE6\u8138\u988A",right_cheek:"\u53F3\u8138\u988A",left_shoulder:"\u5DE6\u80A9",right_shoulder:"\u53F3\u80A9",face:"\u8138\u90E8",neck:"\u9888\u90E8",chest:"\u80F8\u90E8",pelvis_front:"\u9AA8\u76C6\u524D\u90E8",hips:"\u81C0\u90E8",torso:"\u8EAF\u5E72",waist:"\u8170\u90E8",abdomen:"\u8179\u90E8",back:"\u80CC\u90E8",arm:"\u624B\u81C2",hand:"\u624B",left_hand:"\u5DE6\u624B",right_hand:"\u53F3\u624B",leg:"\u817F\u90E8",foot:"\u811A"};function ja(i){return!i||typeof i.mesh!="string"||!Number.isInteger(i.triangle)||i.triangle<0?null:i.mesh+":"+i.triangle}function Nr(i,e){let t=ja(i),n=t&&e[t],r=typeof n=="string"?n:n?.id;if(!i?.alphaVerified)return null;if(n===void 0&&["weighted-skinned-triangle","rig-surface-estimate","bind-pose-surface"].includes(i.anatomy?.source)&&i.anatomy.confidence>=.7&&Object.hasOwn(ki,i.anatomy.id))return{...i.anatomy,label:ki[i.anatomy.id]+(i.anatomy.source==="rig-surface-estimate"?"\uFF08\u9AA8\u9ABC\u4F30\u8BA1\uFF09":""),group:i.anatomy.id};if(!Object.hasOwn(ki,r))return null;let s=r==="left_hand"?{group:"hand",side:"left"}:r==="right_hand"?{group:"hand",side:"right"}:{group:r};return typeof n=="string"?{id:r,label:ki[r],...s,confidence:1,source:"manual-skinned-triangle"}:n?.source!=="vision-reviewed"||n.visible!==!0||!Number.isFinite(n.confidence)||n.confidence<.7||n.confidence>1?null:{id:r,label:ki[r],...s,confidence:n.confidence,source:"vision-reviewed-skinned-triangle"}}var dd={pelvis_front:11701503,head:16765286,forehead:16765286,hair:14531430,left_cheek:16748451,right_cheek:16748451,left_shoulder:48121,right_shoulder:48121,face:16748451,neck:16041877,chest:15817653,hips:11640025,torso:14262374,waist:15119718,abdomen:16747586,back:10182117,arm:48121,hand:62932,left_hand:54964,right_hand:6553568,leg:9485933,foot:16704576};function zm(i,e,t){let n=new kt;n.visible=!1,e.add(n);let r=new Map;i.traverse(f=>{f.isMesh&&f.userData.snowbreakSurfaceKey&&r.set(f.userData.snowbreakSurfaceKey,f)});let s={},a=!1,o=!0,l=[],c=0,u=!1;function d(){for(let f of l)f.overlay.geometry.dispose(),f.overlay.material.dispose(),f.overlay.removeFromParent();l=[],c=0}function h(){d(),u=!1;let f=new Map;for(let[b,M]of Object.entries(s)){let x=/^(surface_\d+):(\d+)$/.exec(b);if(!x)continue;let S=r.get(x[1]),y=Number(x[2]);if(!S)continue;let T=S.geometry,_=T.getAttribute("position"),E=T.index,R=T.getAttribute("uv"),I=Nr({mesh:x[1],triangle:y,alphaVerified:!0},{[b]:M});if(!I||y*3+2>=(E?E.count:_.count)||S.userData.previewMap&&!R)continue;if(c>=5e3){u=!0;continue}c++;let O=x[1]+":"+I.id,B=f.get(O);B||(B={source:S,region:I.id,vertices:[],keys:[]},f.set(O,B)),B.keys.push(b);for(let N=0;N<3;N++)B.vertices.push(E?E.getX(y*3+N):y*3+N)}for(let b of f.values()){let M=new Jt;M.setAttribute("position",new Ft(new Float32Array(b.vertices.length*3),3).setUsage(ah));let x=b.source.geometry.getAttribute("uv");if(x){let _=new Float32Array(b.vertices.length*2);b.vertices.forEach((E,R)=>{_[R*2]=x.getX(E),_[R*2+1]=x.getY(E)}),M.setAttribute("uv",new Ft(_,2))}let S=b.source.material,y=new Qt({color:dd[b.region],map:b.source.userData.previewMap||null,transparent:!0,opacity:.7,alphaTest:(S.alphaTest||(S.transparent?.1:0))*.7,depthTest:!0,depthWrite:!1,side:S.side,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),T=new Vt(M,y);T.frustumCulled=!1,T.renderOrder=100,n.add(T),l.push({...b,overlay:T})}o=!1}function p(f){for(let b=f;b;b=b.parent)if(!b.visible)return!1;return!0}function g(){if(n.visible=a,!a)return;o&&h(),i.updateWorldMatrix(!0,!0);let f=new D,b=new Map;for(let M of l){let{source:x,overlay:S}=M;if(S.visible=p(x),!S.visible)continue;x.updateMatrixWorld(!0),x.isSkinnedMesh&&x.skeleton.update();let y=b.get(x);y||(y=new Map,b.set(x,y));let T=S.geometry.getAttribute("position");M.vertices.forEach((_,E)=>{let R=y.get(_);R||(x.getVertexPosition(_,f).applyMatrix4(x.matrixWorld),R=f.toArray(),y.set(_,R)),T.setXYZ(E,...R)}),T.needsUpdate=!0}}function v(){let f=l.find(M=>M.overlay.visible),b=f?.overlay.geometry.getAttribute("position");return{enabled:a,triangles:c,truncated:u,first:f&&b?{key:f.keys[0],vertices:[0,1,2].map(M=>new D().fromBufferAttribute(b,M).toArray()),screen:[0,1,2].map(M=>new D().fromBufferAttribute(b,M).project(t).toArray())}:null}}function m(f){let b=n.visible;n.visible=!1;try{return f()}finally{n.visible=b}}return{set(f,b=a){return s=f,a=!!b,o=!0,a||d(),g(),v()},update:g,snapshot:v,hideForCapture:m,dispose(){d(),n.removeFromParent()}}}function bl(i){let e=(t,n,r)=>Array.isArray(t)&&t.length===n&&t.every(s=>Number.isFinite(s)&&Math.abs(s)<=r);if(!i||!e(i.position,3,1e3)||!e(i.quaternion,4,1.01)||!e(i.scale,3,20)||i.scale.some(t=>t<.001)||Math.abs(i.quaternion.reduce((t,n)=>t+n*n,0)-1)>.001)throw new Error("Invalid scene transform");return new Ze().compose(new D(...i.position),new He(...i.quaternion).normalize(),new D(...i.scale))}async function Hm(i,e,t){let n=i.getAsset("localScene")?.data;if(!n)return{root:null,setVisible(){},setRoomVisible(){},setCutaway(){},updateView(){},snapshot:()=>({available:!1,originalSceneVerified:!1})};if(!["snowbreak-local-scene/1","snowbreak-local-scene/2"].includes(n.schema)||n.characterId!==i.current.characterId||n.originalSceneVerified!==!1||!/^[a-f0-9]{64}$/.test(n.sourceMapSha256)||!Array.isArray(n.objects)||!n.objects.length||n.objects.length>16)throw new Error("Invalid local scene");let r=bl(n.characterWorld).invert(),s=new kt,a=new kt,o=new Set,l=[],c=[],u=[],d=new Map,h=null;if(n.schema==="snowbreak-local-scene/2"){if(!Array.isArray(n.anchors)||!n.anchors.length||n.anchors.length>16)throw new Error("Invalid scene anchors");for(let y of n.anchors){if(typeof y.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(y.id)||d.has(y.id)||!Number.isFinite(y.viewYawDegrees)||Math.abs(y.viewYawDegrees)>180)throw new Error("Invalid scene anchor");d.set(y.id,{inverse:bl(y.characterWorld).invert(),viewYawDegrees:y.viewYawDegrees})}if(!d.has(n.defaultAnchorId))throw new Error("Missing default scene anchor")}s.add(a);let p=new Rn,g=!0;for(let y of n.objects){let T=i.getAsset(y.assetRole);if(typeof y.id!="string"||!/^[a-zA-Z0-9_-]{1,96}$/.test(y.id)||o.has(y.id)||T?.kind!=="geometry")throw new Error("Invalid scene object");if(y.group!==void 0&&!["room","furniture"].includes(y.group)||y.cutaway!==void 0&&typeof y.cutaway!="boolean")throw new Error("Invalid scene display group");o.add(y.id);let _=r.clone().multiply(bl(y.world)),E=(await new Lr().parseAsync(T.bytes.slice().buffer,"")).scene,R=0;E.traverse(O=>{if(O.isSkinnedMesh)throw new Error("Animated scene needs a separate binding");O.isMesh&&(R+=(O.geometry.index?.count||O.geometry.attributes.position.count)/3)});let I=new kt;I.name=y.id,I.matrixAutoUpdate=!1,I.matrix.copy(_),I.add(E),(y.group==="room"?a:s).add(I),t(E),E.traverse(O=>{O.isMesh&&(y.group==="room"&&(O.material.side=bn),y.cutaway&&(O.material.clippingPlanes=[p],n.schema==="snowbreak-local-scene/2"&&y.group==="furniture"&&(O.material.side=en),c.push(O.material)),(y.group==="room"||y.cutaway)&&(O.material.needsUpdate=!0))}),y.group!=="room"&&E.traverse(O=>{O.isMesh&&u.push(O)}),l.push({id:y.id,assetRole:y.assetRole,group:y.group||"furniture",cutaway:!!y.cutaway,triangles:R,matrix:_.toArray(),holder:I,world:bl(y.world)})}e.add(s),s.updateMatrixWorld(!0);function v(y,T){if(!c.length)return;let _=y.position.clone().sub(T),E=_.length();if(E<.001)return;_.divideScalar(E);let R=T.clone().addScaledVector(_,Math.min(n.schema==="snowbreak-local-scene/2"?.08:.65,E*.5));p.setFromNormalAndCoplanarPoint(_.negate(),R)}function m(y){let T=!!y;if(T!==g){g=T;for(let _ of c)_.clippingPlanes=g?[p]:null,_.needsUpdate=!0}}let f=new Map,b=new wr,M=new D(0,1,0);function x(y){if(!d.size)return null;let T=d.get(y);if(!T)throw new Error("Unknown source scene anchor");if(h!==y){h=y;for(let _ of l)_.holder.matrix.copy(T.inverse).multiply(_.world),_.matrix=_.holder.matrix.toArray();s.updateWorldMatrix(!0,!0),f.clear()}return T.viewYawDegrees}d.size&&x(n.defaultAnchorId);function S(y){if(!s.visible)return null;s.updateWorldMatrix(!0,!0);let T=s.worldToLocal(y.clone()),_=Math.round(T.x/.015)+":"+Math.round(T.z/.015),E=f.get(_);if(E===void 0){let R=new Yt().setFromObject(s).applyMatrix4(s.matrixWorld.clone().invert()),I=s.localToWorld(new D(T.x,R.max.y+.3,T.z)),O=M.clone().transformDirection(s.matrixWorld).negate();b.set(I,O),E=null;for(let B of b.intersectObjects(u,!1)){let N=B.face?.normal.clone().transformDirection(B.object.matrixWorld);if(N&&Math.abs(N.dot(O))>.65){E=s.worldToLocal(B.point.clone()).y;break}}f.set(_,E),f.size>512&&f.delete(f.keys().next().value)}return E===null?null:{clearance:T.y-E,normal:M.clone().transformDirection(s.matrixWorld),height:E}}return{root:s,contactSurface:S,setAnchor:x,hasCutaway:c.length>0,updateView:v,setRoomVisible:y=>{a.visible=!!y},setCutaway:m,setVisible:y=>{s.visible=!!y},snapshot:()=>({available:!0,visible:s.visible,activeAnchor:h,roomAvailable:a.children.length>0,roomVisible:a.visible,cutawayAvailable:c.length>0,cutaway:g,clipPlane:[...p.normal.toArray(),p.constant],objects:l.map(({holder:y,world:T,..._})=>({..._,matrix:[..._.matrix]})),originalSceneVerified:!1})}}var Yb=new Set(["head","left_hand","right_hand"]),Zb=new Set(["tap","double_tap","long_press","stroke"]);function Vm(i){if(i?.touchBindings===void 0)return[];if(!Array.isArray(i.touchBindings)||i.touchBindings.length>16)throw new Error("Invalid touch reaction bindings");let e=new Set;return i.touchBindings.map(t=>{let n=i.samples.find(r=>r.id===t.sampleId);if(!Yb.has(t.region)||e.has(t.region)||!n||t.source!=="local-confirmed-surface"||t.nativeTriggerVerified!==!1||!Array.isArray(t.gestures)||!t.gestures.length||t.gestures.some(r=>!Zb.has(r))||new Set(t.gestures).size!==t.gestures.length)throw new Error("Invalid confirmed surface binding");return e.add(t.region),{...t,gestures:[...t.gestures]}})}function Gm(i,e){return i?.schema!=="body-touch/1"||i.source!=="skinned-surface"||!["manual-skinned-triangle","vision-reviewed-skinned-triangle"].includes(i.regionSource)||!Number.isFinite(i.confidence)||i.confidence<.7||i.confidence>1||i.surface?.alphaVerified!==!0||!Number.isInteger(i.surface.triangle)||i.surface.triangle<0?null:e.find(t=>t.region===i.region&&t.gestures.includes(i.gesture))||null}function $b(i,e){if(e<=i[0][0])return i[0][1];if(e>=i.at(-1)[0])return i.at(-1)[1];let t=0,n=i.length-1;for(;n-t>1;){let u=t+n>>1;e<i[u][0]?n=u:t=u}let r=i[t],s=i[n],a=s[0]-r[0],o=(e-r[0])/a;if(r[4]===0)return r[1];if(r[4]===1)return r[1]+(s[1]-r[1])*o;let l=o*o,c=l*o;return(2*c-3*l+1)*r[1]+(c-2*l+o)*a*r[3]+(-2*c+3*l)*s[1]+(c-l)*a*s[2]}function Wm(i,e,t){if(!i)return{apply(){},snapshot:()=>({available:!1,originalExpressionFidelity:!1})};if(i.schema!=="snowbreak-morph-curves/1"||i.characterId!==e.current.characterId||i.originalExpressionFidelity!==!1||!Array.isArray(i.clips)||!i.clips.length||i.clips.length>24||!t)throw new Error("Invalid morph curve config");let n=new Map,r=new WeakMap,s=new Set,a=0;for(let h of i.clips){let p=e.getAsset(h.animationRole),g=e.current.resources.find(f=>f.role===h.animationRole);if(p?.kind!=="animation"||h.sourceSha256!==(p.data.generatorMetadata?.sourceSha256||g?.assetId)||!/^[a-f0-9]{64}$/.test(h.sourceSha256)||h.frames!==p.data.frames||h.fps!==p.data.fps||!Array.isArray(h.curves)||h.curves.length>64)throw new Error("Morph curve animation mismatch");let v=n.get(h.sourceSha256);if(v){if(v.frames!==h.frames||v.fps!==h.fps||JSON.stringify(v.curves)!==JSON.stringify(h.curves))throw new Error("Conflicting morph curve alias");r.set(p.data,h.sourceSha256);continue}let m=new Set;for(let f of h.curves){if(typeof f.name!="string"||!f.name.length||f.name.length>128||m.has(f.name)||!Array.isArray(f.keys)||!f.keys.length||f.keys.length>4096)throw new Error("Invalid morph curve identity");m.add(f.name),s.add(f.name);let b=-1/0;for(let M of f.keys){if(!Array.isArray(M)||M.length!==5||!M.every(Number.isFinite)||M[0]<-120||M[0]>120||M[0]<=b||Math.abs(M[1])>4||Math.abs(M[2])>1e6||Math.abs(M[3])>1e6||![0,1,2].includes(M[4]))throw new Error("Invalid morph curve key");if(b=M[0],++a>1e5)throw new Error("Morph curve key limit")}}n.set(h.sourceSha256,h),r.set(p.data,h.sourceSha256)}let o=[];if(t.traverse(h=>{if(!h.isMesh||!h.morphTargetDictionary||!h.morphTargetInfluences)return;let p=new Map;for(let g of s){let v=h.morphTargetDictionary[g];if(v!==void 0){if(!Number.isInteger(v)||v<0||v>=h.morphTargetInfluences.length)throw new Error("Invalid morph target index");p.set(g,v)}}p.size&&o.push({mesh:h,indices:p})}),[...s].some(h=>!o.some(p=>p.indices.has(h))))throw new Error("Missing exact morph target");let l=null,c=0,u={};function d(h,p){c=p,l=h&&r.get(h)||null,u={};let g=n.get(l);for(let v of g?.curves||[])u[v.name]=$b(v.keys,p);for(let{mesh:v,indices:m}of o)for(let[f,b]of m)v.morphTargetInfluences[b]=u[f]??0}return{apply:d,snapshot:()=>({available:!0,clips:n.size,targets:s.size,boundMeshes:o.length,totalKeys:a,activeSource:l,time:c,values:{...u},weights:o.map(({mesh:h,indices:p})=>Object.fromEntries([...p].map(([g,v])=>[g,h.morphTargetInfluences[v]]))),originalExpressionFidelity:!1})}}function fd(i){let e=new Map;return{name:"SnowbreakMorphTargetNames",beforeRoot(){for(let[t,n]of(i.json.meshes||[]).entries()){if(typeof n.extras!="string"||!n.extras.trimStart().startsWith("{"))continue;if(n.extras.length>65536)throw new Error("Morph metadata size limit");let r=JSON.parse(n.extras);if(!Object.hasOwn(r,"targetNames"))continue;let s=r.targetNames;if(Array.isArray(s)&&s.length===0&&n.primitives?.length&&n.primitives.every(l=>!l.targets?.length)){let{targetNames:l,...c}=r;n.extras=c;continue}if(!Array.isArray(s)||!s.length||s.length>128||new Set(s).size!==s.length||s.some(l=>typeof l!="string"||!l.length||l.length>128)||!n.primitives?.length||n.primitives.some(l=>(l.targets?.length||0)>s.length))throw new Error("Invalid exported morph names");e.set(t,s);let{targetNames:a,...o}=r;n.extras=o}},afterRoot(t){for(let n of t.scenes)n.traverse(r=>{if(!r.isMesh||!r.morphTargetInfluences)return;let s=i.associations.get(r),a=e.get(s?.meshes);if(!a)return;let o=i.json.meshes[s.meshes].primitives[s.primitives].targets?.length||0;if(r.morphTargetInfluences.length!==o)throw new Error("Morph primitive index mismatch");r.morphTargetDictionary=Object.fromEntries(a.slice(0,o).map((l,c)=>[l,c]))})}}}async function Xm(i,e,{isCurrent:t=()=>!0,universalMotions:n=null,performanceMode:r=null}={}){let s=()=>{if(!t())throw new DOMException("Character selection superseded","AbortError")};s();let a=e.getAsset("viewOrientation")?.data;if(a&&(a.schema!=="snowbreak-view-orientation/1"||!Number.isFinite(a.yawDegrees)||Math.abs(a.yawDegrees)>180))throw new Error("Invalid view orientation");let o=-Math.PI/2+Me.degToRad(a?.yawDegrees||0),l=new ml({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"}),c=new _r,u=new kt,d=new kt,h=new qt(32,1,.15,100);u.rotation.y=o,c.add(u),u.add(d);let p=Rm(c,l),g=vf();g.configure({mode:r||localStorage.getItem("snowRenderMode")||"adaptive"});let v=0;function m(z){return g.configure(z),p.setBudget(g.snapshot()),v=0,Z(),b()}function f(){N||l.renderLists?.dispose?.()}function b(){return{...g.snapshot(),backend:"WebGL2 / GPU skinning",drawingBuffer:[i.width,i.height],pixelRatio:l.getPixelRatio(),drawCalls:l.info.render.calls,triangles:l.info.render.triangles,gpuResources:{textures:l.info.memory.textures,geometries:l.info.memory.geometries},gpuTimingAvailable:!1}}let M=null,x,S,y,T,_,E,R=null,I=null,O=null,B=null,N=!1,V=null,L=0,C=[],$=new Set,F=new Set,U=new Set,G=new Map,ce=new Map,de=new Map,he=new Map,q=new Set,ue=new Map,H=e.getAsset("rootMotionPolicy")?.data,J=0,_e=0,Fe=0,ge=0,pe=null,we=null,be={scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1},Be=0,Q=0,K=null;function re(){u.rotation.set(Me.degToRad(be.pitch),o+Be+Me.degToRad(be.yaw),Me.degToRad(be.roll)),d.rotation.set(Me.degToRad(fe.pitch),Me.degToRad(fe.yaw+Q),Me.degToRad(fe.roll)),u.updateMatrixWorld(!0)}let fe={scale:1,x:0,y:0,depth:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1};function ve(z){let k={...fe,...z};if(Object.values(k).some(j=>!Number.isFinite(j)))throw new Error("Invalid character placement");for(let j of["x","y","depth"])k[j]=Me.clamp(k[j],-1.5,1.5);k.scale=Me.clamp(k.scale,.3,4),k.yaw=Me.clamp(k.yaw,-180,180),k.pitch=Me.clamp(k.pitch,-65,65),k.roll=Me.clamp(k.roll,-45,45),k.stretchX=k.stretchY=1,fe=k,u.updateWorldMatrix(!0,!1),h.updateMatrixWorld();let ee=new D(k.x,k.y,k.depth).applyQuaternion(h.quaternion),oe=u.matrixWorld.clone().invert();return d.position.copy(ee.transformDirection(oe).multiplyScalar(Math.hypot(k.x,k.y,k.depth))),d.scale.setScalar(k.scale),re(),{...fe}}function Xe(z){let k={...be,...z};for(let ee of["scale","x","y","yaw","pitch","roll","stretchX","stretchY"])if(!Number.isFinite(k[ee]))throw new Error("Invalid framing");return be={scale:Me.clamp(k.scale,.3,4),x:Me.clamp(k.x,-1.5,1.5),y:Me.clamp(k.y,-1.5,1.5),yaw:((k.yaw+180)%360+360)%360-180,pitch:Me.clamp(k.pitch,-65,65),roll:Me.clamp(k.roll,-45,45),stretchX:Me.clamp(k.stretchX,.65,1.5),stretchY:Me.clamp(k.stretchY,.65,1.5)},re(),Z(),{...be}}function et(){if(y){u.rotation.y=o,u.updateMatrixWorld(!0);let ee=y.getObjectByName("Bip001-L-UpperArm"),oe=y.getObjectByName("Bip001-R-UpperArm");if(ee&&oe){let j=ee.getWorldPosition(new D).sub(oe.getWorldPosition(new D)),ae=new D().crossVectors(j,new D(0,1,0));if(Math.hypot(ae.x,ae.z)>.02){Be=-Math.atan2(ae.x,ae.z),re();return}}}if(!K)return;u.rotation.y=o,u.updateMatrixWorld(!0);let z=K.bone.getWorldQuaternion(new He),k=K.axis.clone().applyQuaternion(z);Math.hypot(k.x,k.z)>.1&&(Be=K.heading-Math.atan2(k.x,k.z)),re()}function X(){return be.yaw=0,et(),Z(),{...be}}function Ve(z){z.traverse(k=>{if(k.isBone&&(k.userData.bindLocalQuaternion=k.quaternion.toArray()),!k.isMesh)return;$.add(k.geometry);for(let ae of Array.isArray(k.material)?k.material:[k.material]){F.add(ae);for(let xe of Object.values(ae))xe?.isTexture&&U.add(xe)}let ee=k.material.name,oe=G.get(ee)||null,j=he.get(ee)||{};if(k.userData.snowbreakSurfaceKey="surface_"+_e++,k.userData.snowbreakMaterialName=ee,k.userData.previewMap=oe,j.transparent!==void 0&&typeof j.transparent!="boolean")throw new Error("Invalid transparent override");if(j.renderOrder!==void 0&&(!Number.isInteger(j.renderOrder)||Math.abs(j.renderOrder)>100))throw new Error("Invalid material sorting");k.renderOrder=j.renderOrder||0,k.material=Am(ee,oe,ce.get(ee),j,de.get(ee)||null),F.add(k.material),k.castShadow=k.isSkinnedMesh&&!j.transparent,k.receiveShadow=k.material.userData.profile==="cloth-or-room"})}function Ne(z,k){if(!k)return;let ee=new Map(k.tracks.map(oe=>[oe.bone,oe]));z.traverse(oe=>{if(!oe.isBone)return;let j=ee.get(oe.name)?.keys?.[0];if(!j||j.length!==10||!j.every(Number.isFinite))throw new Error("\u9AA8\u9ABC\u521D\u59CB\u59FF\u6001\u7F3A\u5931");oe.position.fromArray(j),oe.quaternion.fromArray(j,3),oe.scale.fromArray(j,7)})}function P(z,k,ee=C,oe=!1){if(!k)return;let j=new Map(k.tracks.map(ae=>[ae.bone,ae]));if(j.size!==k.tracks.length)throw new Error("Duplicate animation bones");z.traverse(ae=>{if(!ae.isBone||z===y&&!q.has(ae)||oe&&!/^Bip001-(Spine[0-9]*|Neck|Head|[LR]-(Clavicle|UpperArm|Forearm|Hand|Finger[0-9]*))$/.test(ae.name))return;let xe=j.get(ae.name);if(!(oe&&!xe)){if(!xe||xe.keys.length!==k.frames||xe.keys.some(Ue=>Ue.length!==10||!Ue.every(Number.isFinite)||Math.abs(Ue.slice(3,7).reduce((Ee,Se)=>Ee+Se*Se,0)-1)>.05))throw new Error("Invalid bone animation");ee.push({bone:ae,track:xe,clip:k})}})}function w(){if(!N){N=!0,removeEventListener("resize",Z),l.setAnimationLoop(null),E?.dispose(),x?.dispose(),S?.dispose(),p.dispose();for(let z of $)z.dispose();for(let z of F)z.dispose();for(let z of U){z.dispose();let k=z.image;k?.close?k.close():k?.tagName==="CANVAS"?k.width=k.height=0:k?.tagName==="IMG"&&(k.src=""),z.image=null}G.clear(),ce.clear(),de.clear(),he.clear(),U.clear(),F.clear(),$.clear(),C.length=0,y?.removeFromParent(),_?.root?.removeFromParent(),l.renderLists?.dispose?.(),l.dispose()}}function Z(){if(N||!y)return;ge++;let z=i.clientWidth||innerWidth,k=i.clientHeight||innerHeight,ee=g.ratio(z,k,devicePixelRatio||1);(!pe||pe.w!==z||pe.h!==k||pe.ratio!==ee)&&(l.setPixelRatio(ee),l.setSize(z,k,!1),pe={w:z,h:k,ratio:ee},Fe++),h.aspect=z/k,u.updateMatrixWorld(!0),!R&&!we&&(y.traverse(Ge=>{Ge.isSkinnedMesh&&(Ge.skeleton.update(),Ge.computeBoundingBox())}),we=new Yt().setFromObject(y).applyMatrix4(u.matrixWorld.clone().invert()));let oe=(I||R||we).clone().applyMatrix4(u.matrixWorld),j=oe.getSize(new D),ae=oe.getCenter(new D);p.frame(oe);let xe=Math.tan(Me.degToRad(16)),Ue=Math.max(j.y/(2*xe),j.x/(2*xe*h.aspect))*1.25+j.z;if(R){Ue=0;for(let Ge of[oe.min.x,oe.max.x])for(let it of[oe.min.y,oe.max.y])for(let Y of[oe.min.z,oe.max.z])Ue=Math.max(Ue,Y-ae.z+Math.max(Math.abs(Ge-ae.x)/(xe*h.aspect),Math.abs(it-ae.y)/xe)*1.12)}let Ee=e.getAsset("localScene")?.data.schema==="snowbreak-local-scene/2",Se=!!_?.snapshot?.().available,De=!!I&&Se&&!Ee;h.position.copy(ae).add(new D(0,0,Ue)),h.lookAt(ae),h.zoom=De?1.05:be.scale,h.setViewOffset(z,k,De?0:-be.x*z,De?0:-be.y*k,z,k),h.updateProjectionMatrix(),h.projectionMatrix.elements[0]*=be.stretchX,h.projectionMatrix.elements[5]*=be.stretchY,h.projectionMatrixInverse.copy(h.projectionMatrix).invert(),_?.updateView(h,ae)}try{let En=function(ye){let te=Oe.get(ye);if(!te)throw new Error("Unknown sample");We=te.overlay?Y==="sample"&&We?We:{bindings:Y==="standby"?Te:Ae,duration:Y==="standby"?De:Ie,time:L,envelope:I}:null,me=ye,Ae=te.bindings,Ie=te.duration;let $e=Oe.get(te.sceneOf)||te,at=te.overlay?We.envelope:$e.sceneFraming?ue.get($e.sourceSha256):null;if(te.sceneFraming&&!at)throw new Error("Scene framing envelope missing");let tt=_.setAnchor?.($e.id??ye),nt=I!==at;if(tt!=null){let lt=-Math.PI/2+Me.degToRad(tt);nt||=Math.abs(o-lt)>1e-8,o=lt,Be=0,re()}return I=at,cn(0),!_.snapshot().available&&$e.sceneFraming&&(et(),nt=!0),nt&&Z(),{id:ye,label:te.label,duration:te.duration}},cn=function(ye,te=Ae,$e=Ie){if(N||!Number.isFinite(ye))return;let at=We&&te===Ae?We:null;at&&at.duration>0&&cn((at.time+ye)%at.duration,at.bindings,at.duration);let tt=Y;B=te[0]?.clip?.generatorMetadata?.sourceSha256||null,Y=te===Te&&De>0?"standby":"sample",L=Math.max(0,Math.min($e,ye));for(let{bone:nt,track:lt,clip:vt}of te){let A=L*vt.fps,W=Math.min(Math.floor(A),vt.frames-1),se=Math.min(W+1,vt.frames-1),ne=A-W,ie=lt.keys[W],Re=lt.keys[se];(!at||!q.has(nt))&&nt.position.set(Me.lerp(ie[0],Re[0],ne),Me.lerp(ie[1],Re[1],ne),Me.lerp(ie[2],Re[2],ne)),nt.quaternion.copy(Ee.fromArray(ie,3).slerp(Se.fromArray(Re,3),ne)),(!at||!q.has(nt))&&nt.scale.set(Me.lerp(ie[7],Re[7],ne),Me.lerp(ie[8],Re[8],ne),Me.lerp(ie[9],Re[9],ne))}if(ae.apply((te.find(nt=>!q.has(nt.bone))||te[0])?.clip,L),H){y.position.x=y.position.z=0,u.updateMatrixWorld(!0);let nt=y.getObjectByName(H.bone).getWorldPosition(new D).applyMatrix4(y.matrixWorld.clone().invert());y.position.x=H.reference[0]-nt.x,y.position.z=H.reference[1]-nt.z}u.updateMatrixWorld(!0),J=xe.length;for(let nt of xe)nt.update()},Fr=function(ye){return Hi=Fh(y,h,e.getAsset("learnedMotions")?.data,le?.stance,ye),Hi.available()},ao=function(){let ye=[];return y.updateWorldMatrix(!0,!0),y.traverse(te=>{te.userData.sourceAttachment&&te.traverse($e=>{if(!$e.isSkinnedMesh)return;$e.skeleton.update();let at=new D,tt=$e.geometry.attributes.position.count;for(let nt=0;nt<tt;nt++)at.add($e.getVertexPosition(nt,new D).applyMatrix4($e.matrixWorld));ye.push({kind:te.userData.sourceAttachment,vertices:tt,center:at.divideScalar(tt).toArray(),sharedBones:$e.skeleton.bones.every(nt=>y.getObjectByName(nt.name)===nt)})})}),ye};if(H&&(H.schema!=="snowbreak-home-root-lock/1"||H.bone!=="Bip001"||!Array.isArray(H.reference)||H.reference.length!==2||!H.reference.every(ye=>Number.isFinite(ye)&&Math.abs(ye)<10)))throw new Error("Invalid home root motion policy");let z=e.getAsset("materials")?.data;if(z){if(z.schema!=="snowbreak-material-preview/1"||z.originalShaderVerified!==!1||!Array.isArray(z.materials)||z.materials.length>64)throw new Error("Invalid material preview");M=_f(z,e,localStorage.getItem("snowTextureLimit")==="2048"?2048:4096,g.snapshot().mode);let ye=new Map;for(let te of z.materials){if(s(),typeof te.name!="string"||te.name.length>256||he.has(te.name))throw new Error("Invalid material identity");let $e=te.renderState||{};if($e.alphaCutoff!==void 0&&(!Number.isFinite($e.alphaCutoff)||$e.alphaCutoff<0||$e.alphaCutoff>1))throw new Error("Invalid material alpha");if($e.doubleSided!==void 0&&typeof $e.doubleSided!="boolean")throw new Error("Invalid material sidedness");if(he.set(te.name,$e),$e.opacity===0||!te.diffuseAssetId)continue;let at=e.getAsset("texture_"+te.diffuseAssetId);if(at?.kind!=="texture")throw new Error("Missing local diffuse texture");let tt=ye.get(te.diffuseAssetId);if(!tt){let nt=URL.createObjectURL(new Blob([at.bytes],{type:at.data?.mime||"image/png"}));try{tt=await new Fi().loadAsync(nt)}finally{URL.revokeObjectURL(nt)}let lt=M.limitFor(te.diffuseAssetId);if(tt.image.width>lt||tt.image.height>lt){let vt=document.createElement("canvas"),A=Math.min(lt/tt.image.width,lt/tt.image.height);vt.width=Math.round(tt.image.width*A),vt.height=Math.round(tt.image.height*A),vt.getContext("2d").drawImage(tt.image,0,0,vt.width,vt.height);let W=tt.image;tt.image=vt,W.src="",tt.needsUpdate=!0}tt.colorSpace=Dt,tt.anisotropy=l.capabilities.getMaxAnisotropy(),tt.flipY=!1,ye.set(te.diffuseAssetId,tt),U.add(tt)}if(G.set(te.name,tt),te.normalAssetId){if(!/^[a-f0-9]{64}$/.test(te.normalAssetId)||z.normalConvention!=="unreal-directx-green-down")throw new Error("Invalid normal texture declaration");let nt=e.getAsset("texture_"+te.normalAssetId);if(nt?.kind!=="texture")throw new Error("Missing original normal texture");let lt=ye.get("normal:"+te.normalAssetId);if(!lt){let vt=URL.createObjectURL(new Blob([nt.bytes],{type:nt.data?.mime||"image/png"}));try{lt=await new Fi().loadAsync(vt)}finally{URL.revokeObjectURL(vt)}let A=M.limitFor(te.normalAssetId,!0);if(lt.image.width>A||lt.image.height>A){let W=lt.image,se=document.createElement("canvas"),ne=A/Math.max(W.width,W.height);se.width=Math.round(W.width*ne),se.height=Math.round(W.height*ne),se.getContext("2d").drawImage(W,0,0,se.width,se.height),lt.image=se,W.src="",lt.needsUpdate=!0}lt.flipY=!1,lt.colorSpace=Gn,lt.anisotropy=l.capabilities.getMaxAnisotropy(),ye.set("normal:"+te.normalAssetId,lt),U.add(lt)}ce.set(te.name,lt)}if(te.ormAssetId){if(!/^[a-f0-9]{64}$/.test(te.ormAssetId))throw new Error("Invalid ORM texture declaration");let nt=e.getAsset("texture_"+te.ormAssetId);if(nt?.kind!=="texture")throw new Error("Missing ORM material texture");let lt=ye.get("orm:"+te.ormAssetId);if(!lt){let vt=URL.createObjectURL(new Blob([nt.bytes],{type:nt.data?.mime||"image/webp"}));try{lt=await new Fi().loadAsync(vt)}finally{URL.revokeObjectURL(vt)}let A=M.limitFor(te.ormAssetId,!0);if(lt.image.width>A||lt.image.height>A){let W=lt.image,se=document.createElement("canvas"),ne=A/Math.max(W.width,W.height);se.width=Math.round(W.width*ne),se.height=Math.round(W.height*ne),se.getContext("2d").drawImage(W,0,0,se.width,se.height),lt.image=se,W.src="",lt.needsUpdate=!0}lt.flipY=!1,lt.colorSpace=Gn,lt.anisotropy=l.capabilities.getMaxAnisotropy(),ye.set("orm:"+te.ormAssetId,lt),U.add(lt)}de.set(te.name,lt)}}}let k=e.getAsset("body");if(!k)throw new Error("\u7F3A\u5C11\u8EAB\u4F53\u6A21\u578B");let ee=e.getAsset("framingBounds")?.data;if(ee){let ye=te=>Array.isArray(te)&&te.length===3&&te.every($e=>Number.isFinite($e)&&Math.abs($e)<=100);if(ee.schema!=="snowbreak-framing-bounds/1"||ee.coordinateSchema!=="matching-glb-xzy-metres-reflection-v2"||ee.bodySha256!==e.current.resources.find(te=>te.role==="body")?.assetId||!ye(ee.min)||!ye(ee.max)||ee.min.some((te,$e)=>te>=ee.max[$e])||!Number.isInteger(ee.evaluatedFrames)||ee.evaluatedFrames<1)throw new Error("Invalid framing envelope");if(R=new Yt(new D(...ee.min),new D(...ee.max)),O=ee,ee.clips){if(!Array.isArray(ee.clips)||ee.clips.length>16)throw new Error("Invalid clip envelopes");for(let te of ee.clips){if(!/^[a-f0-9]{64}$/.test(te.sourceSha256)||ue.has(te.sourceSha256)||!ye(te.min)||!ye(te.max)||te.min.some(($e,at)=>$e>=te.max[at]))throw new Error("Invalid clip envelope");ue.set(te.sourceSha256,new Yt(new D(...te.min),new D(...te.max)))}}}y=(await new Lr().register(fd).parseAsync(k.bytes.slice().buffer,"")).scene,d.add(y),s(),Ve(y),y.traverse(ye=>{ye.isBone&&q.add(ye)});let oe=e.getAsset("bodyAnimation")?.data;B=oe?.generatorMetadata?.sourceSha256||null,Ne(y,oe),P(y,oe);let j=e.getAsset("faceAttachment")?.data;if(j){if(j.schema!=="snowbreak-face-attachment/1"||j.candidateOnly!==!0||j.originalAssemblyVerified!==!1||j.boneName!=="Bip001-Head"||j.socketName!=="socket_face01")throw new Error("Invalid face attachment candidate");let ye=y.getObjectByName(j.boneName),te=j.relativeLocationCm;if(!ye?.isBone||!te||![te.X,te.Y,te.Z].every(nt=>Number.isFinite(nt)&&Math.abs(nt)<100))throw new Error("Invalid socket parent or position");let $e=e.getAsset("face");if(!$e)throw new Error("Missing face geometry");T=(await new Lr().register(fd).parseAsync($e.bytes.slice().buffer,"")).scene,s(),Ve(T),Ne(T,e.getAsset("faceAnimation")?.data);let at=e.getAsset("faceAnimation")?.data;if(!at||!oe||at.frames!==oe.frames||at.fps!==oe.fps)throw new Error("Face/body sample timing mismatch");P(T,at);let tt=new kt;if(tt.position.set(te.X*.01,te.Z*.01,te.Y*.01),tt.quaternion.fromArray(Fm(j.relativeRotationDegrees)),ye.add(tt),tt.add(T),j.defaultVisible!==void 0&&typeof j.defaultVisible!="boolean")throw new Error("Invalid face visibility");T.visible=j.defaultVisible===!0}_=await Hm(e,u,Ve),s(),l.localClippingEnabled=!!_.hasCutaway;let ae=Wm(e.getAsset("morphCurves")?.data,e,T||y),xe=[];y.traverse(ye=>{ye.isSkinnedMesh&&!xe.includes(ye.skeleton)&&xe.push(ye.skeleton),ye.isSkinnedMesh&&(ye.frustumCulled=!1)});let Ue=oe?(oe.frames-1)/oe.fps:0,Ee=new He,Se=new He,De=0,Ge="D\u5F85\u673A",it=!1,Y="sample",Te=[],le=e.getAsset("stateTransition")?.data;if(le){let ye=le.schema==="snowbreak-state-preview/1"&&le.show==="Sc01_Hand_A_D"&&le.fromState==="A"&&le.toState==="D",te=le.schema==="snowbreak-standby-preview/1"&&le.characterId===e.current.characterId&&Number.isInteger(le.standbyConfigId)&&le.standbyConfigId>0&&Number.isInteger(le.sourceSkinId)&&/^[a-f0-9]{64}$/.test(le.sourceTableSha256)&&typeof le.label=="string"&&le.label.length<=40&&typeof le.startAsStandby=="boolean",$e=le.schema==="snowbreak-standby-preview/2"&&le.stance==="standing"&&le.characterId===e.current.characterId&&le.sourceBodySha256===e.getAsset("standbyBody")?.data.generatorMetadata?.sourceSha256&&le.startAsStandby===!0;if(!ye&&!te&&!$e||le.nativeInitializationVerified!==!1)throw new Error("Invalid destination state preview");(te||$e)&&(Ge=le.label,it=le.startAsStandby);let at=e.getAsset("standbyBody")?.data,tt=T?e.getAsset("standbyFace")?.data:null;if(!at||T&&(!tt||at.frames!==tt.frames||at.fps!==tt.fps))throw new Error("Standby clip timing mismatch");let nt=new Map(at.tracks.map(vt=>[vt.bone,vt])),lt=tt?new Map(tt.tracks.map(vt=>[vt.bone,vt])):new Map;Te=C.map(vt=>{let A=vt.clip===oe?at:tt,W=(vt.clip===oe?nt:lt).get(vt.bone.name);if(!W||W.keys.length!==A.frames||W.keys.some(se=>se.length!==10||!se.every(Number.isFinite)||Math.abs(se.slice(3,7).reduce((ne,ie)=>ne+ie*ie,0)-1)>.05))throw new Error("Invalid standby bone");return{bone:vt.bone,track:q.has(vt.bone)?Dh(W):W,clip:A}}),De=(at.frames-1)/at.fps}let Ae=C,Ie=Ue,me="default",We=null,Oe=new Map([["default",{bindings:C,duration:Ue,label:"\u539F\u59CB\u52A8\u753B\u6837\u672C"}]]),ut=e.getAsset("sampleCatalog")?.data;if(ut){if(!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(ut.schema)||ut.characterId!==e.current.characterId||ut.originalInteractionVerified!==!1||!Array.isArray(ut.samples)||!ut.samples.length||ut.samples.length>24||!/^[a-f0-9]{64}$/.test(ut.sourceTableSha256))throw new Error("Invalid sample catalog");Oe.clear();for(let te of ut.samples){if(typeof te.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(te.id)||Oe.has(te.id)||typeof te.label!="string"||te.label.length>64||ut.schema.endsWith("/1")&&(!Number.isInteger(te.sourceShowElementId)||te.sourceShowElementId<1))throw new Error("Invalid sample identity");let $e=e.getAsset(te.bodyRole),at=te.faceRole?e.getAsset(te.faceRole):null;if($e?.kind!=="animation"||T&&(at?.kind!=="animation"||($e.data.frames!==at.data.frames||$e.data.fps!==at.data.fps)&&!(te.independentFaceTiming===!0&&Number.isInteger(te.sourceShowElementId)&&te.sourceShowElementId>0)))throw new Error("Sample body/face mismatch");if(ut.schema.endsWith("/2")&&te.sourceBodySha256!==($e.data.generatorMetadata?.sourceSha256||e.current.resources.find(nt=>nt.role===te.bodyRole)?.assetId))throw new Error("Sample source mismatch");let tt=C;if((te.bodyRole!=="bodyAnimation"||T&&te.faceRole!=="faceAnimation")&&(tt=[],P(y,$e.data,tt,te.overlay==="upper-body"),T)){if(!at)throw new Error("Sample requires face");P(T,at.data,tt)}if(te.persistentState===!0&&e.current.characterId==="Fenny")for(let nt=0;nt<tt.length;nt++)q.has(tt[nt].bone)&&(tt[nt]={...tt[nt],track:Tm(tt[nt].track)});if(te.persistentState!==void 0&&typeof te.persistentState!="boolean")throw new Error("Invalid persistent scene flag");if(te.endPolicy!==void 0&&!["hold","loop"].includes(te.endPolicy))throw new Error("Invalid scene end policy");Oe.set(te.id,{id:te.id,bindings:tt,duration:Math.max(($e.data.frames-1)/$e.data.fps,at?(at.data.frames-1)/at.data.fps:0),overlay:te.overlay==="upper-body",label:te.label,sourceShowElementId:te.sourceShowElementId,sceneFraming:te.sceneFraming===!0,sourceSha256:$e.data.generatorMetadata?.sourceSha256,sceneOf:te.sceneOf,persistentState:te.persistentState===!0,endPolicy:te.endPolicy,afterScene:te.afterScene})}let ye=Oe.get(ut.defaultId);if(!ye||ye.bindings!==C)throw new Error("Default sample must reference primary clip");me=ut.defaultId;for(let te of Oe.values()){if(te.sceneOf!==void 0&&(typeof te.sceneOf!="string"||!Oe.has(te.sceneOf)))throw new Error("Missing reaction scene");if(te.afterScene!==void 0&&(typeof te.afterScene!="string"||!Oe.get(te.afterScene)?.persistentState))throw new Error("Invalid reaction destination scene")}}let _t=Vm(ut);u.updateMatrixWorld(!0);let $s=y.getObjectByName("Bip001-Pelvis")||y.getObjectByName("Bip001");if($s){let ye=$s.getWorldQuaternion(new He),te=[new D(1,0,0),new D(0,1,0),new D(0,0,1)].sort((at,tt)=>{let nt=at.clone().applyQuaternion(ye),lt=tt.clone().applyQuaternion(ye);return Math.hypot(lt.x,lt.z)-Math.hypot(nt.x,nt.z)})[0],$e=te.clone().applyQuaternion(ye);K={bone:$s,axis:te,heading:Math.atan2($e.x,$e.z)}}E=zm(y,c,h);let Ks=Em(y,ye=>{Q=ye,re()},()=>be.yaw+fe.yaw),js=km(y,h,i,_.root);S=Mm(y,h,i,js,e.getAsset("sceneInteractions")?.data,_.contactSurface,e.current.characterId),x=wm(y,h,i),Z(),await l.compileAsync(c,h),s(),addEventListener("resize",Z),l.setAnimationLoop(()=>{if(i.dataset.snowbreakPaused==="true"||document.hidden){g.resetClock();return}if(!g.begin())return;let ye=g.ratio(i.clientWidth||innerWidth,i.clientHeight||innerHeight,devicePixelRatio||1);Math.abs(ye-v)>.02&&(v=ye,Z()),Ks.restore(),S.restore(),x.restore(),V?.(),Ks.tick(),S.tick(),x.tick(),E.update(),l.render(c,h)});let Js=()=>{let ye=[];return y.traverse(te=>{te.isMesh&&ye.push({name:te.userData.snowbreakMaterialName,textured:!!te.userData.previewMap,normalMapped:!!te.material.normalMap,diffuseSize:te.material.map?[te.material.map.image.width,te.material.map.image.height]:null,normalSize:te.material.normalMap?[te.material.normalMap.image.width,te.material.normalMap.image.height]:null,anisotropy:te.material.map?.anisotropy||0,profile:te.material.userData.profile,alphaTest:te.material.alphaTest})}),ye},Al=ye=>y.traverse(te=>{te.isMesh&&(te.material.map=ye?te.userData.previewMap:null,te.material.color.set(te.material.map?16777215:13289411),te.material.needsUpdate=!0)}),Qs=()=>({available:!!T,visible:!!T?.visible,originalAssemblyVerified:!1}),ro=ye=>(T&&(T.visible=!!ye,Z()),Qs()),vi=(ye,te,$e)=>{if(N)throw new Error("Renderer disposed");E.hideForCapture(()=>{l.render(c,h),ye.drawImage(i,0,0,te,$e)})},ea=Uh(y),so=Uh(y,{side:"left"}),Hi=Fh(y,h,e.getAsset("learnedMotions")?.data,le?.stance,n);return{textureBudgetState:()=>M?.snapshot(),attachmentState:ao,performanceState:b,setRenderBudget:m,releaseCache:f,setUniversalMotions:Fr,projectedBone:ye=>{let te=y.getObjectByName(ye)?.getWorldPosition(new D).project(h),$e=i.getBoundingClientRect();return te?[$e.left+(te.x+1)*$e.width/2,$e.top+(1-te.y)*$e.height/2]:null},modelDragScale:()=>{let ye=Math.max(.05,y.getObjectByName("Bip001-Pelvis").getWorldPosition(new D).sub(h.position).dot(h.getWorldDirection(new D))),te=2*ye*Math.tan(Me.degToRad(h.fov/2))/h.zoom;return{x:te*h.aspect/be.stretchX,y:te/be.stretchY}},furnitureContacts:ye=>Object.fromEntries(ye.map(te=>{let $e=y.getObjectByName(te);return[te,$e?_.contactSurface?.($e.getWorldPosition(new D)):null]})),setModelFrame:ve,modelFrameState:()=>({...fe}),placementState:()=>({model:d.matrixWorld.toArray(),room:_.root?.matrixWorld.toArray(),camera:h.matrixWorld.toArray()}),embodiment:Ks,sceneInteractions:S,sensesState:x.snapshot,setGaze:x.gaze,senseTouch:x.touch,resetSenses:x.reset,postureState:()=>Object.fromEntries(["Bip001-Pelvis","Bip001-Head","Bip001-L-Thigh","Bip001-L-Calf","Bip001-L-Foot","Bip001-R-Thigh","Bip001-R-Calf","Bip001-R-Foot"].map(ye=>[ye,y.getObjectByName(ye)?.getWorldPosition(new D).toArray()])),presentationDefault:e.getAsset("presentationDefault")?.data,lightingState:p.snapshot,setLighting:p.set,boneWorldPoints:ye=>Object.fromEntries(ye.slice(0,32).map(te=>[te,y.getObjectByName(te)?.getWorldPosition(new D).toArray()])),bonePoseState:()=>{let ye=[];return y.traverse(te=>{te.isBone&&ye.push({name:te.name,position:te.position.toArray(),quaternion:te.quaternion.toArray(),scale:te.scale.toArray()})}),ye},cameraState:()=>({position:h.position.toArray(),projection:h.projectionMatrix.toArray()}),learnedOptions:()=>Hi.available(),applyLearnedMotion:(...ye)=>Hi.apply(...ye),learnedDiagnostics:()=>Hi.snapshot(),presentationDiagnostics:()=>({resizeCount:Fe,fitCount:ge}),touchBindings:()=>_t.map(ye=>({...ye,gestures:[...ye.gestures]})),setRoomVisible:_.setRoomVisible,setSceneCutaway:_.setCutaway,sceneState:_.snapshot,setSceneVisible:_.setVisible,morphState:ae.snapshot,framingEnvelopeState:()=>({precomputed:!!R,evaluatedFrames:O?.evaluatedFrames||0,perClip:ue.size,activeSource:B}),resourceState:()=>({sourceTextures:U.size,drawCalls:l.info.render.calls,triangles:l.info.render.triangles,geometries:l.info.memory.geometries,textures:l.info.memory.textures}),setSurfaceLabels:E.set,surfaceOverlayState:E.snapshot,armPreview:ea,leftArmPreview:so,dispose:w,pickSurface:js,drawSnapshot:vi,faceViewer:X,setFrame:Xe,frameState:()=>({...be}),displayOnly:!0,originalShaderVerified:!1,originalInteractionVerified:!1,materialState:Js,setTexturePreview:Al,faceCandidateState:Qs,showFaceCandidate:ro,selectSample:En,sampleOptions:()=>[...Oe].map(([ye,te])=>({id:ye,label:te.label,duration:te.duration,sourceShowElementId:te.sourceShowElementId,persistentState:te.persistentState,endPolicy:te.endPolicy,afterScene:te.afterScene})),get duration(){return Ie},seek:cn,standbyDuration:De,standbyLabel:Ge,startAsStandby:it,seekStandby:ye=>{I&&(I=null,Z());let te=_.setAnchor?.(ut?.defaultId);te!=null&&(o=-Math.PI/2+Me.degToRad(te),Be=0,re()),De>0&&cn(ye%De,Te,De)},setFrameHandler:ye=>V=ye,sampleState:()=>({lastSkeletonUpdates:J,sampleId:me,time:L,poseMode:Y,standbyDuration:De,nativeInitializationVerified:!1,viewYaw:u.rotation.y,autoYaw:Be,bodyBones:C.filter(ye=>ye.clip===oe).length,faceBones:C.filter(ye=>ye.clip!==oe).length,hand:y.getObjectByName("Bip001-R-Hand")?.getWorldPosition(new D).toArray()})}}catch(z){throw w(),z}}var Kb="action-plan/1",jb=["nod","shake","tilt","look_at","wave","hug","stretch","hands_on_hips","pet_head","lean_in","lean_back","laugh","shy","close_eyes","smile","think","raise_hand"],Jb={wave:"wave",hug:"hug",stretch:"stretch",hands_on_hips:"hips"},Qb={pet_head:["headpat","pethead","pathead","petting","strokehead"],hug:["hug","embrace"],wave:["wave","handwave","bye"],stretch:["stretch"],hands_on_hips:["handsonhips","hips"],nod:["nod"],shake:["shake","deny"],laugh:["laugh","giggle"],shy:["shy","blush","embarrass"],smile:["smile","grin"],tilt:["tilt","headtilt"],close_eyes:["closeeyes","eyesclose","blink"],think:["think","ponder"],look_at:["lookat","gaze"],lean_in:["leanin"],lean_back:["leanback"]},eM=/^(tap|touch|special|idle|wait|loop)(body|head|special|face|hair|hand|arm|chest|leg|foot)?\d*$/i,tM={nod:{headY:[[0,0],[.28,-7],[.62,4],[1,0]],eyeSmile:[[0,0],[.5,.25],[1,0]]},shake:{headX:[[0,0],[.2,6],[.45,-6],[.7,4],[1,0]]},tilt:{headZ:[[0,0],[.4,9],[.8,7],[1,0]],browY:[[0,0],[.4,.2],[1,0]]},pet_head:{headY:[[0,0],[.15,-8],[.8,-6],[1,0]],headZ:[[0,0],[.2,5],[.8,4],[1,0]],bodyX:[[0,0],[.2,2.5],[.8,2],[1,0]],cheek:[[0,0],[.2,.65],[1,0]],eyeSmile:[[0,0],[.25,.5],[.9,.45],[1,0]]},hug:{bodyX:[[0,0],[.3,4],[.8,3],[1,0]],eyeSmile:[[0,0],[.4,.5],[1,0]]},wave:{headZ:[[0,0],[.3,-6],[.7,-5],[1,0]],eyeSmile:[[0,0],[.3,.4],[1,0]]},lean_in:{bodyX:[[0,0],[.4,5],[1,0]],headY:[[0,0],[.4,-3],[1,0]]},lean_back:{bodyX:[[0,0],[.4,-5],[1,0]],headY:[[0,0],[.4,4],[1,0]]},laugh:{eyeSmile:[[0,0],[.3,.85],[1,0]],headY:[[0,0],[.25,-4],[.7,3],[1,0]]},shy:{headZ:[[0,0],[.3,-8],[1,0]],cheek:[[0,0],[.3,1],[1,0]]},smile:{eyeSmile:[[0,0],[.2,.9],[1,0]],mouthForm:[[0,0],[.2,.8],[1,0]]},think:{headY:[[0,0],[.4,4],[1,0]],headZ:[[0,0],[.5,8],[1,0]]},look_at:{gazeX:[[0,0],[.4,.6],[1,0]],gazeY:[[0,0],[.4,-.3],[1,0]]}},nM={nod:900,shake:1e3,tilt:1400,pet_head:1800,hug:2200,wave:2e3,stretch:2200,hands_on_hips:1600,laugh:1500,shy:1600,smile:2e3,close_eyes:3e3,think:2e3,look_at:1200,lean_in:1200,lean_back:1200},qm={shy:["shy","embarrass","blush","hot"],happy:["happy","smile","joy","fun"],warm:["smile","gentle","warm","normal"],sad:["sad","down","cry"],angry:["angry","mad","anger"],surprised:["surprise","shock"]},Ml=(i,e,t)=>Math.max(e,Math.min(t,i));function iM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(36)}function rM(i){let e=Object.keys(i.channels||{}).sort().map(r=>r+"="+i.channels[r]).join("|"),t=(i.motions||[]).map(r=>r.group+"#"+r.index).sort().join("|"),n=(i.expressions||[]).map(r=>r.name).sort().join("|");return e+"||"+t+"||"+n+"||"+JSON.stringify(i.localActions||{})}function sM(i){return[i.type,i.target,i.intensity,i.duration,i.priority,i.blend,i.emotion&&i.emotion.name,i.emotion&&i.emotion.intensity,i.speech&&i.speech.text,...i.type==="surface_reaction"?[i.source,i.withOriginalVoice]:[]].join("~")}function pd(i){let e=i&&typeof i=="object"?i:{},t=String(e.type||e.name||"").trim().toLowerCase(),n=String(e.target||"").trim().toLowerCase();return(t==="raise_left_hand"||t==="raise_right_hand")&&(n=t==="raise_left_hand"?"left":"right",t="raise_hand"),{type:t,target:n,intensity:Ml(Number.isFinite(e.intensity)?e.intensity:.7,0,1),duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:0,priority:Number.isFinite(e.priority)?e.priority:50,blend:e.blend==="queue"||e.blend==="additive"?e.blend:"replace",emotion:e.emotion&&typeof e.emotion=="object"?e.emotion:null,speech:e.speech&&typeof e.speech=="object"?e.speech:null,source:String(e.source||"ai"),...typeof e.withOriginalVoice=="boolean"?{withOriginalVoice:e.withOriginalVoice}:{}}}var $m=i=>!!i&&eM.test(i);function aM(i,e){let t=Array.isArray(e&&e.motions)?e.motions:[],n=t.find(s=>s&&s.semantic&&s.semantic!=="unknown"&&s.semantic===i.type);if(n)return{motion:n,tier:"confirmed",matchedBy:"semantic",confidence:.95};let r=Qb[i.type]||[];for(let s of r){let a=t.find(o=>!o||!o.nameHint||$m(o.nameHint)?!1:o.nameHint===s||o.nameHint.includes(s));if(a)return{motion:a,tier:"inferred",matchedBy:"name-hint:"+s,confidence:.75}}return null}function Ym(i,e,t){let n=Array.isArray(e&&e.motions)?e.motions:[],r=[];for(let s of n){if(!s||t&&s.group===t.group&&s.index===t.index||s.idle)continue;let a=$m(s.nameHint),o=s.nameHint?a?"generic-group":"unconfirmed-name":"unnamed-group";if(r.push({group:s.group,index:s.index,nameHint:s.nameHint||"",reason:o,requiresConfirmation:!0}),r.length>=8)break}return r}function Zm(i,e){let t=Array.isArray(e&&e.expressions)?e.expressions:[];if(!t.length)return null;let n=i.emotion&&i.emotion.name?[String(i.emotion.name).toLowerCase()]:[],r=[];for(let s of n)for(let a of qm[s]||[])r.push(a);for(let s of qm[i.type]||[])r.push(s);for(let s of r){let a=t.find(o=>{let l=String(o.name||"").toLowerCase(),c=Array.isArray(o.tags)?o.tags:[];return l.includes(s)||c.includes(s)});if(a)return a}return null}function oM(i,e){let t=e&&e.channels||{},n=tM[i.type];if(!n)return[];let r=[];for(let s of Object.keys(n)){let a=t[s];a&&r.push({ch:s,id:a,blend:"add",weight:1,curve:n[s].map(([o,l])=>[o,+(l*i.intensity).toFixed(4)])})}return r}function cM(i,e){let t=i&&i.channels||{},n=i&&i.channelMeta||{},r=.35+.35*Ml(Number.isFinite(e)?e:.7,0,1),s=[];for(let a of["eyeL","eyeR"]){let o=t[a];if(!o)continue;let l=n[a]||null,c=l&&Number.isFinite(l.default)?l.default:1,u=l&&Number.isFinite(l.min)?l.min:0,d=Ml(u+(c-u)*r,Math.min(c,u),Math.max(c,u));s.push({ch:a,id:o,blend:"set",weight:1,from:c,to:d,curve:[[0,c],[.18,d],[.75,d],[1,c]]})}return s}function lM(i){let e=i&&i.channels||{},t=i&&i.channelMeta||{},n=[];for(let r of["eyeL","eyeR"]){let s=e[r];if(!s)continue;let a=t[r]||null,o=a&&Number.isFinite(a.default)?a.default:1,l=a&&Number.isFinite(a.min)?a.min:0,c=l<o?l:o;n.push({ch:r,id:s,blend:"set",weight:1,from:o,to:c,curve:[[0,o],[.12,c],[.88,c],[1,o]]})}return n}function Ja(i,e,t={}){let n=pd(i),r=[],s=[],a=e&&typeof e=="object"?e:null,o={schema:Kb,action:n,planId:"",tracks:[],owns:[],candidates:[],semanticStatus:"none",duration:n.duration||nM[n.type]||1600,fadeIn:150,fadeOut:200,confidence:0,stopped:!1,warnings:r,degraded:s};if(o.planId=typeof t.planId=="string"&&t.planId?t.planId:"plan-"+(n.type||"none")+"-"+iM(sM(n)+"||"+(a?rM(a):"")),!n.type)return r.push("\u52A8\u4F5C\u7C7B\u578B\u4E3A\u7A7A"),o.stopped=!0,o;if(!jb.includes(n.type)&&n.type!=="surface_reaction")return r.push('\u672A\u77E5\u8BED\u4E49\u52A8\u4F5C "'+n.type+'"'),o.stopped=!0,o;if(!a||a.ok===!1)return r.push("\u80FD\u529B\u63CF\u8FF0\u4E0D\u53EF\u7528\uFF0C\u964D\u7EA7\u4E3A\u7EAF\u8BED\u97F3"),s.push("speech-only"),n.speech&&o.tracks.push({ch:"speech",text:n.speech.text||"",startAt:0}),o;if(o.candidates=Ym(n,a,null),n.type==="surface_reaction"){let c=a.localActions?.surface_reaction,u=c?.bindings?.[n.target];return a.kind!=="snowbreak"||c?.enabled!==!0||n.source!=="confirmed-surface-touch"||u?.nativeTriggerVerified!==!1||typeof u.sampleId!="string"||!Number.isFinite(u.animationDuration)||u.animationDuration<=0||u.animationDuration>6e4||!Number.isFinite(u.voiceDuration)||u.voiceDuration<0||u.voiceDuration>6e4?(o.stopped=!0,r.push("\u7F3A\u5C11\u672C\u5730\u786E\u8BA4\u7684\u8868\u9762\u53CD\u5E94\u80FD\u529B\u6216\u89E6\u78B0\u6765\u6E90"),o):(o.duration=n.withOriginalVoice===!1?u.animationDuration:Math.max(u.animationDuration,u.voiceDuration),o.fadeIn=0,o.fadeOut=0,o.semanticStatus="local-confirmed-surface",o.confidence=1,o.localReaction={sampleId:u.sampleId,nativeTriggerVerified:!1},o.owns=n.withOriginalVoice===!1?["motion"]:["motion","speech"],o.tracks=[{ch:"motion",group:"surface-reaction",index:0}],o)}if(n.type==="raise_hand"){let c=a.localActions?.raise_hand;return a.kind!=="snowbreak"||c?.enabled!==!0||c.experimental!==!0||!["left","right"].includes(n.target)||!Array.isArray(c.sides)||!c.sides.includes(n.target)?(o.stopped=!0,r.push("\u672C\u5730\u4E3E\u624B\u672A\u542F\u7528\u3001\u4FA7\u522B\u4E0D\u660E\u786E\u6216\u539F\u9AA8\u9ABC\u94FE\u7F3A\u5931"),o):(o.duration=3600,o.fadeIn=0,o.fadeOut=0,o.semanticStatus="experimental",o.confidence=.6,o.owns=["motion",n.target==="left"?"armL":"armR"],o.tracks.push({ch:"pose",name:"snowbreak-raise-hand",side:n.target}),o)}if(n.type==="close_eyes"){let c=lM(a);if(c.length)return s.push("param-set"),o.confidence=.6,o.tracks.push(...c),o.owns=c.map(u=>u.ch),n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o;r.push("\u6A21\u578B\u6CA1\u6709 eyeL/eyeR \u901A\u9053\uFF0Cclose_eyes \u65E0\u6CD5\u6267\u884C")}let l=aM(n,a);if(l){o.semanticStatus=l.tier,o.confidence=l.confidence,s.push("motion");let c=["motion"],u=a.parameterUsage&&a.parameterUsage.byGroup,d=u&&u[l.motion.group]&&u[l.motion.group][l.motion.index];Array.isArray(d)&&c.push(...d),o.tracks.push({ch:"motion",group:l.motion.group,index:l.motion.index,weight:1,fadeIn:o.fadeIn,fadeOut:o.fadeOut,matchedBy:l.matchedBy,semanticTier:l.tier}),o.owns=Array.from(new Set(c)),o.candidates=Ym(n,a,l.motion)}else{let c=Jb[n.type],u=a.poses||{};if(!!c&&(u[c]===!0||Array.isArray(u)&&u.includes(c)))s.push("pose"),o.confidence=.6,o.tracks.push({ch:"pose",name:c,weight:1,fadeIn:200,fadeOut:260}),o.owns=["pose","armL","armR"];else{let h=oM(n,a);if(h.length){if(s.push("param-track"),o.confidence=.45,n.type==="pet_head"){let p=cM(a,n.intensity);p.length&&o.tracks.push(...p)}o.tracks.push(...h),o.owns=o.tracks.filter(p=>p.id).map(p=>p.ch)}else{let p=Zm(n,a);p?(s.push("expression"),o.confidence=.3,o.tracks.push({ch:"expression",name:p.name,index:p.index,weight:n.intensity,hold:o.duration}),o.owns=["expression"]):(s.push("speech-only"),o.confidence=.1)}}}if(n.emotion&&n.emotion.name&&!o.tracks.some(c=>c.ch==="expression")){let c=Zm(n,a);c&&(o.tracks.push({ch:"expression",name:c.name,index:c.index,weight:Ml(Number(n.emotion.intensity)||.6,0,1),hold:Number(n.emotion.holdMs)||2200,blend:"additive"}),o.owns.includes("expression")||o.owns.push("expression"))}return n.speech&&n.speech.text&&o.tracks.push({ch:"speech",text:n.speech.text,startAt:n.speech.startAt||0}),o.tracks.length||r.push("\u8BE5\u80FD\u529B\u4E0B\u6CA1\u6709\u4EFB\u4F55\u53EF\u7528\u8868\u73B0\uFF08\u53EA\u5269\u6587\u672C\uFF09"),o.candidates.length&&r.push("\u5B58\u5728 "+o.candidates.length+" \u4E2A\u672A\u786E\u8BA4\u8BED\u4E49\u7684\u52A8\u4F5C\u7EC4\uFF0C\u672A\u81EA\u52A8\u6267\u884C"),o}var Sl=(i,e,t)=>Math.max(e,Math.min(t,i));function uM(i){return i*i*(3-2*i)}function hM(i,e){if(!Array.isArray(i)||!i.length)return 0;if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++){let[n,r]=i[t];if(e<=n){let[s,a]=i[t-1],o=n===s?0:(e-s)/(n-s);return a+(r-a)*uM(Sl(o,0,1))}}return i[i.length-1][1]}function Km(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t=i.handlers||{},n=Number.isFinite(i.maxQueue)?i.maxQueue:2,r=[],s=[],a=[],o={t:0,channels:{},actions:[],finished:[]};function l(M,x,S){a.push({at:e(),kind:M,planId:x.planId,type:x.action.type,...S||{}}),a.length>40&&a.shift()}function c(M,x,...S){if(typeof x=="function")try{x(...S)}catch{}}function u(M,x){let S={plan:M,t0:x,done:!1};r.push(S),l("start",M);for(let y of M.tracks)y.ch==="motion"?c("motion",t.onMotion,y.group,y.index,M):y.ch==="pose"?c("pose",t.onPose,y.name,M):y.ch==="expression"?c("expression",t.onExpression,y,M):y.ch==="speech"&&c("speech",t.onSpeech,y.text,M);return S}function d(M,x,S){if(M.done)return;M.done=!0;let y=r.indexOf(M);y>=0&&r.splice(y,1),l("end",M.plan,{reason:S}),c("end",t.onEnd,M.plan,S)}function h(M,x,S){let y=e(),T=S||Ja(M,x);if(!T||T.stopped||!T.tracks.length)return{accepted:!1,reason:"no-usable-plan",planId:T&&T.planId};let _=Number.isFinite(T.action.priority)?T.action.priority:50,E=r[0];if(E){let R=Number.isFinite(E.plan.action.priority)?E.plan.action.priority:50;if(_<R)return s.length>=n&&s.shift(),s.push({plan:T,at:y}),l("queued",T,{behind:E.plan.planId}),{accepted:!0,queued:!0,planId:T.planId};d(E,y,"preempted")}return u(T,y),{accepted:!0,queued:!1,planId:T.planId,plan:T}}function p(M,x){let S=Math.max(1,M.duration),y=Math.max(0,Math.min(M.fadeIn||0,S*.5)),T=Math.max(0,Math.min(M.fadeOut||0,S*.5)),_=x*S,E=S-T,R=1;return y>0&&_<y&&(R=_/y),T>0&&_>E&&(R=Math.min(R,(S-_)/T)),Sl(R,0,1)}function g(M,x,S,y){for(let T of x.tracks){if(!T.curve||!T.id)continue;let E=hM(T.curve,S)*(T.weight===void 0?1:T.weight)*y,R=M[T.id];T.blend==="set"?(!R||y>=R.weight)&&(M[T.id]={id:T.id,value:E,blend:"set",weight:y,ch:T.ch}):R&&R.blend==="set"?R.value+=E:M[T.id]={id:T.id,value:(R?R.value:0)+E,blend:"add",weight:Math.max(R?R.weight:0,y),ch:T.ch}}}function v(M){let x=e(),S={t:x,channels:{},actions:[],finished:[]};for(let y of r.slice()){let T=Sl((x-y.t0)/Math.max(1,y.plan.duration),0,1),_=p(y.plan,T);_>0&&g(S.channels,y.plan,T,_),S.actions.push({planId:y.plan.planId,type:y.plan.action.type,progress:T,weight:_}),T>=1&&(S.finished.push(y.plan.planId),d(y,x,"done"))}if(!r.length&&s.length){let y=s.shift();u(y.plan,x),l("dequeued",y.plan)}return o=S,S}function m(M,x){let S=r.find(y=>y.plan.planId===M);return S?(d(S,e(),x||"interrupt"),!0):!1}function f(M){for(let x of r.slice())d(x,e(),M||"clear");s.length=0}function b(){return{active:r.map(M=>({planId:M.plan.planId,type:M.plan.action.type,progress:Sl((e()-M.t0)/Math.max(1,M.plan.duration),0,1)})),queue:s.map(M=>({planId:M.plan.planId,type:M.plan.action.type})),lastFrame:{channels:Object.keys(o.channels).length,actions:o.actions.length},log:a.slice(-10)}}return{dispatch:h,tick:v,interrupt:m,clear:f,snapshot:b,get frame(){return o},get activeCount(){return r.length},get queuedCount(){return s.length}}}var dM={invite_pet:"pet_head",pet:"pet_head",hips:"hands_on_hips",look_media:"look_at",close_eyes:"close_eyes",smile:"smile",nod:"nod",shake:"shake",tilt:"tilt",hug:"hug",wave:"wave",stretch:"stretch",laugh:"laugh",shy:"shy",think:"think",lean_in:"lean_in",lean_back:"lean_back"};function md(i,e={}){let t=dM[i]||i;return pd({type:t,...e})}function jm(i,{now:e=()=>performance.now(),audio:t=null,audioForSample:n=null,beforeVoice:r=()=>{},onVoiceBusy:s=()=>{},onReactionEvent:a=()=>{}}={}){if(!Number.isFinite(i.duration)||i.duration<=0)throw new Error("Sample clip unavailable");let o=null,l=null,c=null,u=0,d="stopped",h=0,p=!1,g=!1,v=null,m=null,f=null,b=i.touchBindings?.()||[],M=()=>t?Math.max(i.duration,t.duration):i.duration;if(!Number.isFinite(M())||M()<=0)throw new Error("Audio metadata unavailable");let x=()=>p?t.ended?t.duration>=i.duration?M()*1e3:(v||(v={at:e(),time:t.duration*1e3}),Math.min(M()*1e3,v.time+Math.max(0,e()-v.at))):t.currentTime*1e3:e(),S={schema:"character-capability/1",ok:!0,kind:"snowbreak",channels:{},motions:[],expressions:[],localActions:{raise_hand:{enabled:!1,experimental:!0,sides:["left","right"].filter(q=>(q==="left"?i.leftArmPreview:i.armPreview)?.snapshot().available)}}},y=i.sampleOptions?.()||[],T=y.find(q=>q.persistentState)?.id||null;S.localActions.surface_reaction={enabled:b.length>0,bindings:Object.fromEntries(b.map(q=>{let ue=y.find(J=>J.id===q.sampleId),H=n?.(q.sampleId);return[q.region,{sampleId:q.sampleId,animationDuration:(ue?.duration||0)*1e3,voiceDuration:(H?.duration||0)*1e3,nativeTriggerVerified:!1}]}))};function _(q,ue,H="",J=!1){f={schema:"local-surface-reaction/1",id:ue.id,kind:q,sampleId:ue.sampleId,region:ue.touch.region,touch:ue.touch,withOriginalVoice:ue.withVoice,recovered:J,reason:H,source:"local-confirmed-surface",nativeTriggerVerified:!1};try{a(f)}catch{}}let E=Km({now:x,handlers:{onMotion:q=>d=q==="local-arm-preview"?"local-arm-preview":q==="standby-D"||q==="standby-local"?"standby-preview":"playing",onPose:(q,ue)=>{if(q!=="snowbreak-raise-hand")return;let H=ue.action.target==="left"?i.leftArmPreview:i.armPreview;try{i.seek(0),H.begin(),o=H,d="local-arm-preview"}catch{H?.restore(),d="arm-failed"}},onEnd:(q,ue)=>{if(h++,q.action.type==="surface_reaction"&&m?.id===q.planId){let H=m;if(m=null,p&&(t.pause(),ue!=="done"&&(t.currentTime=0),p=!1,v=null,s(!1)),ue==="done"){let J=!1;try{J=!!N().accepted&&d==="standby-preview"}catch{E.clear("restore-failed"),d="restore-failed"}_(J?"completed":"failed",H,J?"local-standby-restored":"local-standby-failed",J)}else _(ue.startsWith("audio-")?"failed":"cancelled",H,ue);return}if(q.action.type==="snowbreak_standby"&&ue==="done"){N();return}if(q.action.type==="snowbreak_arm_preview"||q.action.type==="raise_hand"){o?.restore(),o=null,d="stopped",i.seek(0),ue==="done"&&i.startAsStandby&&N();return}if(p&&(t.pause(),ue!=="done"&&(t.currentTime=0),p=!1,v=null,s(!1)),ue==="done"&&c){let H=c;c=null,I(H.id,H.time);return}d=ue==="done"?"sample-ended":"stopped",i.seek(ue==="done"?i.duration:0),ue==="done"&&(q.action.type==="snowbreak_standby"||g)&&N()}}});function R(){if(d==="standby-preview"&&V(),E.activeCount)return{accepted:!1,reason:"sample-busy"};let q={type:"snowbreak_sample",source:"manual-preview",priority:80};return E.dispatch(q,S,{schema:"action-plan/1",planId:"snowbreak-sample-"+ ++u,action:q,duration:(p?M():i.duration)*1e3,fadeIn:0,fadeOut:0,tracks:[{ch:"motion",group:"sample-body-face",index:0}]})}function I(q,ue=0){return y.find(H=>H.id===q)?.persistentState&&(T=q),V(),i.selectSample(q),l={id:q,time:ue},d="scene-preview",i.seek(Math.min(ue,i.duration)),{accepted:!0}}async function O(q,{withVoice:ue=!0}={}){let H=l||c;if(!H)return{accepted:!1};V(),i.selectSample(H.id),i.seek(H.time%i.duration),i.selectSample(q),he(n?.(q));let J=i.sampleOptions?.().find(_e=>_e.id===q)?.afterScene;return c=J?{id:J,time:0}:H,g=!1,ue&&t?G():R()}function B(q){if(l&&d==="scene-preview")return l.time+=Math.max(0,Math.min(100,q))/1e3,i.seek(l.id==="show_03"||i.sampleOptions?.().find(J=>J.id===l.id)?.endPolicy==="hold"?Math.min(l.time,i.duration):l.time%i.duration),{actions:[]};let ue=p?x()/1e3:null,H=E.tick(q);if(d==="arm-failed")return V(),d="arm-failed",H;if(H.actions.length){let J=H.actions[0];if(J.type==="snowbreak_arm_preview"||J.type==="raise_hand"){if(d==="local-arm-preview")try{o.apply(J.progress)}catch{V(),d="arm-failed"}return H}J.type==="snowbreak_standby"&&d==="standby-preview"?i.seekStandby(J.progress*i.standbyDuration):d!=="standby-preview"&&i.seek(ue===null?J.progress*i.duration:Math.min(i.duration,ue))}return H}function N(){if(T)return I(T);if(!(i.standbyDuration>0))return{accepted:!1,reason:"standby-unavailable"};E.clear("standby-switch");let q={type:"snowbreak_standby",source:"manual-preview",priority:10};return i.seekStandby(0),E.dispatch(q,S,{schema:"action-plan/1",planId:"snowbreak-standby-"+ ++u,action:q,duration:i.standbyDuration*1e3,tracks:[{ch:"motion",group:i.startAsStandby?"standby-local":"standby-D",index:0}]})}function V(q="sample-stop"){l=null,c=null,o?.restore(),o=null,h++,E.clear(q),t&&(t.pause(),t.currentTime=0),p=!1,v=null,s(!1),i.startAsStandby?i.seekStandby(0):i.seek(0),d="stopped"}function L(q="right"){if(!["left","right"].includes(q))return{accepted:!1,reason:"invalid-arm-side"};let ue=q==="left"?i.leftArmPreview:i.armPreview;if(!ue?.snapshot().available)return{accepted:!1,reason:"arm-chain-unavailable"};if(d==="standby-preview"&&V(),E.activeCount)return{accepted:!1,reason:"sample-busy"};i.seek(0);try{ue.begin(),o=ue}catch{return ue.restore(),o=null,{accepted:!1,reason:"arm-geometry-unavailable"}}let H={type:"snowbreak_arm_preview",side:q,source:"manual-preview",priority:80};return E.dispatch(H,S,{schema:"action-plan/1",planId:"snowbreak-arm-"+ ++u,action:H,duration:3600,tracks:[{ch:"motion",group:"local-arm-preview",index:0}]})}function C(q){S.localActions.raise_hand.enabled=!!q,!q&&o&&V()}function $(q,ue={}){let H=md(q,ue);if(H.type==="surface_reaction")return{accepted:!1,reason:"surface-event-required"};let J=Ja(H,S);if(J.stopped||!J.tracks.length)return{accepted:!1,reason:"unsupported-local-action",plan:J};if(d==="standby-preview"&&V(),E.activeCount)return{accepted:!1,reason:"sample-busy",plan:J};let _e=E.dispatch(H,S,J);return d==="arm-failed"?(V(),d="arm-failed",{accepted:!1,reason:"arm-geometry-unavailable",plan:J}):_e}async function F(q,{withVoice:ue=!0}={}){if(!b.length)return{accepted:!1,handled:!1,reason:"surface-binding-unavailable"};if(E.activeCount&&d!=="standby-preview")return{accepted:!1,handled:!0,reason:"sample-busy"};let H=Gm(q,b);if(!H)return{accepted:!1,handled:!1,reason:"unmapped-confirmed-surface"};if(!Number.isInteger(q.frequency)||q.frequency<1||q.frequency>=4)return{accepted:!1,handled:!0,reason:"touch-frequency"};let J=n?.(H.sampleId)||null;if(ue&&!J)return{accepted:!1,handled:!1,reason:"voice-unavailable"};let _e=md("surface_reaction",{target:H.region,source:"confirmed-surface-touch",priority:80,withOriginalVoice:!!ue}),Fe=Ja(_e,S,{planId:"surface-reaction-"+ ++u});if(Fe.stopped||!Fe.tracks.length)return{accepted:!1,handled:!1,reason:"unsupported-surface-reaction"};V();try{i.selectSample(H.sampleId),he(J)}catch{try{N()}catch{}return{accepted:!1,handled:!1,reason:"sample-selection-failed"}}let ge={id:Fe.planId,sampleId:H.sampleId,touch:q,withVoice:!!ue},pe=++h;m=ge,v=null,p=!!ue,ue&&(r(),t.currentTime=0,s(!0));let we=E.dispatch(_e,S,Fe);if(!we.accepted)return m=null,p=!1,s(!1),{...we,handled:!1};if(_("started",ge),!ue)return{...we,handled:!0};try{return await t.play(),pe!==h?{accepted:!1,handled:!0,reason:"superseded"}:{...we,handled:!0}}catch{return pe===h&&(V("audio-play-failed"),d="audio-failed"),{accepted:!1,handled:!0,reason:"audio-play-failed"}}}function U(q){if(t&&!n||!i.selectSample)return{accepted:!1,reason:"sample-selection-unavailable"};V();try{let ue=i.selectSample(q);return n&&he(n(q)),i.startAsStandby&&N(),{accepted:!0,...ue}}catch{return{accepted:!1,reason:"unknown-sample"}}}async function G(){if(!t)return{accepted:!1,reason:"voice-unavailable"};if(d==="standby-preview"&&V(),E.activeCount||p)return{accepted:!1,reason:"sample-busy"};let q=++h;r(),t.currentTime=0,v=null,p=!0,s(!0);let ue=R();try{return await t.play(),q!==h?{accepted:!1,reason:"superseded"}:ue}catch{return q===h&&(V("audio-play-failed"),d="audio-failed"),{accepted:!1,reason:"audio-play-failed"}}}let ce=()=>{p&&B(0)},de=()=>{p&&(V("audio-error"),d="audio-failed")};function he(q){if(q&&(!Number.isFinite(q.duration)||q.duration<=0))throw new Error("Audio metadata unavailable");t?.removeEventListener("ended",ce),t?.removeEventListener("error",de),t=q||null,v=null,t?.addEventListener("ended",ce),t?.addEventListener("error",de)}return he(t),{bus:E,capability:S,enterScene:I,playSceneReaction:O,dispatchSurfaceTouch:F,selectSample:U,setLocalActionsEnabled:C,dispatchSemantic:$,playArmPreview:L,playSample:R,playWithVoice:G,tick:B,stop:V,enterStandby:N,setStandbyAfterSample:q=>g=!!q,snapshot:()=>({sceneId:l?.id||c?.id||null,sceneTime:l?.time||0,localReaction:f?{...f,touch:void 0}:null,sampleDuration:i.duration,status:d,active:E.activeCount,voiceMode:p,standbyAfterSample:g,audioTime:t?.currentTime||0,audioDuration:t?.duration||0,audioTail:!!v,originalInteractionVerified:!1})}}async function Jm(i){if(i?.kind!=="audio")throw new Error("Missing original voice");let e=URL.createObjectURL(new Blob([i.bytes],{type:"audio/wav"})),t=new Audio;t.preload="auto";try{if(await new Promise((n,r)=>{let s=setTimeout(()=>{a(),r(new Error("Voice metadata timeout"))},1e4),a=()=>{clearTimeout(s),t.removeEventListener("loadedmetadata",o),t.removeEventListener("error",l)},o=()=>{a(),n()},l=()=>{a(),r(new Error("Voice decode failed"))};t.addEventListener("loadedmetadata",o),t.addEventListener("error",l),t.src=e,t.load()}),!Number.isFinite(t.duration)||t.duration<=0)throw new Error("Invalid voice duration");return{audio:t,dispose(){t.pause(),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e)}}}catch(n){throw t.removeAttribute("src"),t.load(),URL.revokeObjectURL(e),n}}async function Qm(i){let e=i.getAsset("voiceCatalog")?.data,t=i.getAsset("sampleCatalog")?.data;if(e?.schema==="snowbreak-voice-catalog/2")return fM(i,e,t);if(e?.schema!=="snowbreak-voice-catalog/1"||e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Array.isArray(e.samples)||!e.samples.length||e.samples.length>24||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256)throw new Error("Invalid voice catalog");let n=new Set,r=[];for(let l of e.samples){let c=t.samples.find(d=>d.id===l.id),u=i.getAsset(l.assetRole);if(n.has(l.id)||!c||c.sourceShowElementId!==l.sourceShowElementId||u?.kind!=="audio"||l.language!=="Chinese"||l.originalSyncVerified!==!1||!Number.isInteger(l.eventId)||l.eventId<=0||!Number.isInteger(l.voiceCharacterId)||l.voiceCharacterId<=0||typeof l.voiceId!="string"||l.voiceId.length>64)throw new Error("Voice sample identity mismatch");n.add(l.id),r.push({id:l.id,asset:u})}if(e.events!==void 0){if(!Array.isArray(e.events)||e.events.length>24)throw new Error("Invalid interaction voice events");for(let l of e.events){let c=i.getAsset(l.assetRole);if(n.has(l.id)||c?.kind!=="audio"||!Number.isInteger(l.eventId)||l.eventId<=0||l.language!=="Chinese")throw new Error("Invalid interaction voice");n.add(l.id),r.push({id:l.id,asset:c})}}if(!n.has(e.defaultId))throw new Error("Missing default voice");let s=await Promise.allSettled(r.map(l=>Jm(l.asset))),a=new Map,o=[];for(let l=0;l<s.length;l++){let c=s[l];c.status==="fulfilled"?a.set(r[l].id,c.value):o.push(r[l].id)}return{get audio(){return a.get(e.defaultId)?.audio||null},getAudio:l=>a.get(l)?.audio||null,failures:o,snapshot:()=>({available:[...a.keys()],failures:[...o],originalSyncVerified:!1}),dispose(){for(let l of a.values())l.dispose();a.clear()}}}async function fM(i,e,t){if(e.characterId!==i.current.characterId||e.originalSyncVerified!==!1||!Number.isInteger(e.sourceSkinId)||e.sourceSkinId<=0||!Array.isArray(e.samples)||e.samples.length>64||!["snowbreak-sample-catalog/1","snowbreak-sample-catalog/2"].includes(t?.schema)||e.defaultId!==t.defaultId||!/^[a-f0-9]{64}$/.test(e.sourceTableSha256)||e.sourceTableSha256!==t.sourceTableSha256||!Array.isArray(e.events)||e.events.length>64)throw new Error("Invalid bilingual voice catalog");let n=new Map,r=new Set,s=new Map,a=new Map,o=[];for(let[g,v]of[[e.samples,!0],[e.events,!1]])for(let m of g){let f=t.samples.find(y=>y.id===m.id),b=i.getAsset(m.assetRole),M=i.current.resources.find(y=>y.role===m.assetRole);if(typeof m.id!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.id)||b?.kind!=="audio"||!M||!["Chinese","Japanese"].includes(m.language)||m.sourceSkinId!==e.sourceSkinId||m.originalSyncVerified!==!1||!Number.isInteger(m.eventId)||m.eventId<=0||m.eventId>4294967295||typeof m.voiceId!="string"||!/^[a-zA-Z0-9_-]{1,64}$/.test(m.voiceId)||!Number.isFinite(m.weight)||m.weight<=0||m.weight>1e6||v&&(!f||f.sourceShowElementId!==void 0&&(!Number.isInteger(m.sourceShowElementId)||m.sourceShowElementId<=0||f.sourceShowElementId!==m.sourceShowElementId)))throw new Error("Bilingual voice identity mismatch");let x=m.language+":"+m.id+":"+m.eventId;if(r.has(x))throw new Error("Duplicate bilingual voice choice");r.add(x);let S=m.language+":"+m.id;n.has(S)||n.set(S,[]),n.get(S).push({hash:M.assetId,weight:m.weight,eventId:m.eventId}),s.set(M.assetId,b)}if(!r.size)throw new Error("Empty bilingual voice catalog");let l=[...s],c=0;await Promise.all(Array.from({length:Math.min(4,l.length)},async()=>{for(;c<l.length;){let[g,v]=l[c++];try{a.set(g,await Jm(v))}catch{o.push(g)}}}));let u="Chinese",d=!1;function h(){for(let g of a.values())g.audio.pause(),g.audio.currentTime=0}function p(g){if(d)return null;let v=(n.get(u+":"+g)||[]).filter(b=>a.has(b.hash)),m=v.reduce((b,M)=>b+M.weight,0);if(!v.length||!Number.isFinite(m)||m<=0)return null;let f=Math.random()*m;for(let b of v)if(f-=b.weight,f<0)return a.get(b.hash).audio;return a.get(v.at(-1).hash).audio}return{get audio(){return p(e.defaultId)},getAudio:p,stop:h,failures:o,setLanguage(g){if(!["Chinese","Japanese"].includes(g))throw new Error("Unsupported original voice language");u!==g&&(h(),u=g)},snapshot:()=>({language:u,available:[...n].filter(([g,v])=>g.startsWith(u+":")&&v.some(m=>a.has(m.hash))).map(([g])=>g.slice(u.length+1)),failures:[...o],originalSyncVerified:!1}),dispose(){d=!0;for(let g of a.values())g.dispose();a.clear()}}}var eg=(i,e)=>JSON.stringify(i)===JSON.stringify(e);function tg(i={},e=3e4){let t=new Map,n=[],r=[],s=null;function a(p,g){let v=/^(surface_\d+):(\d+)$/.exec(p);return!!v&&!!Nr({mesh:v[1],triangle:Number(v[2]),alphaVerified:!0},{[p]:g})}for(let[p,g]of Object.entries(i||{})){if(t.size>=e)break;a(p,g)&&t.set(p,typeof g=="object"?Object.freeze({...g}):g)}function o(p,g){g===void 0?t.delete(p):t.set(p,g)}function l(){if(s)throw new Error("\u5DF2\u6709\u6807\u6CE8\u64CD\u4F5C\u672A\u7ED3\u675F");s=new Map}function c(p,g){if(!s)throw new Error("\u6807\u6CE8\u64CD\u4F5C\u5C1A\u672A\u5F00\u59CB");if(g!==void 0&&!a(p,g))throw new Error("\u65E0\u6548\u8868\u9762\u6807\u7B7E");if(g!==void 0&&!t.has(p)&&t.size>=e)throw new Error("\u6807\u6CE8\u6570\u91CF\u8FBE\u5230\u4E0A\u9650");let v=t.get(p);if(eg(v,g))return!1;g&&typeof g=="object"&&(g=Object.freeze({...g})),s.has(p)?s.get(p).after=g:s.set(p,{key:p,before:v,after:g});let m=s.get(p);return eg(m.before,m.after)&&s.delete(p),o(p,g),!0}function u(){if(!s)return!1;let p=[...s.values()];return s=null,p.length?(n.push(p),n.length>30&&n.shift(),r.length=0,!0):!1}function d(){if(s){for(let p of s.values())o(p.key,p.before);s=null}}function h(p,g,v){if(s)throw new Error("\u8BF7\u5148\u7ED3\u675F\u5F53\u524D\u6807\u6CE8");let m=p.pop();if(!m)return!1;for(let f of m)o(f.key,f[v]);return g.push(m),!0}return{begin:l,set:c,commit:u,cancel:d,undo:()=>h(n,r,"before"),redo:()=>h(r,n,"after"),get:p=>t.get(p),has:p=>t.has(p),snapshot:()=>Object.fromEntries(t),state:()=>({count:t.size,undo:n.length,redo:r.length,editing:!!s})}}function ng(i,e,t,{load:n,save:r,tracker:s,onEvent:a,enabled:o}){let l={};try{l=n()}catch{}let c=tg(l),u=document.createElement("h3");u.textContent="\u7CBE\u7EC6\u89E6\u78B0\u8868\u9762\u6807\u6CE8",t.appendChild(u);let d=document.createElement("label"),h=document.createElement("input");h.type="checkbox",h.id="snowSurfaceEdit",d.append(h,document.createTextNode("\u6807\u6CE8\u6A21\u5F0F\uFF1A\u70B9\u6309\u6216\u62D6\u8FC7\u6A21\u578B\u8868\u9762\u5199\u5165\u90E8\u4F4D")),t.appendChild(d);let p=document.createElement("select");p.id="snowSurfaceRegion";for(let[U,G]of Object.entries(ki))p.add(new Option(G,U));p.add(new Option("\u64E6\u9664\u6807\u6CE8","")),t.appendChild(p);let g=document.createElement("label"),v=document.createElement("input");v.type="checkbox",v.id="snowSurfaceShow",g.append(v,document.createTextNode("\u663E\u793A\u5DF2\u6807\u6CE8\u8868\u9762\u989C\u8272\uFF08\u4EC5\u672C\u5730\u7F16\u8F91\u9884\u89C8\uFF09")),t.appendChild(g);let m=document.createElement("div");for(let[U,G]of Object.entries(ki)){let ce=document.createElement("span");ce.textContent="\u25A0 "+G+" ",ce.style.color="#"+dd[U].toString(16).padStart(6,"0"),m.appendChild(ce)}t.appendChild(m);let f=document.createElement("button"),b=document.createElement("button");f.id="snowSurfaceUndo",b.id="snowSurfaceRedo",f.textContent="\u64A4\u9500\u6807\u6CE8",b.textContent="\u91CD\u505A\u6807\u6CE8",t.append(f,b);let M=document.createElement("p");M.id="snowSurfaceOverlayInfo",t.appendChild(M);let x=document.createElement("button");x.id="snowSurfaceReset",x.textContent="\u91CD\u65B0\u81EA\u52A8\u8BC6\u522B\u90E8\u4F4D\uFF08\u53EF\u64A4\u9500\uFF09",t.append(x);let S=document.createElement("p");S.id="snowSurfaceStatus",S.textContent="\u989C\u8272\u53EA\u8868\u793A\u5DF2\u786E\u8BA4\u6807\u7B7E\uFF0C\u4E0D\u4EE3\u8868\u81EA\u52A8\u8BC6\u522B\u6B63\u786E\uFF1B\u672A\u6807\u6CE8\u8868\u9762\u6309\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\u53CA\u8499\u76AE\u6743\u91CD\u8BC6\u522B\uFF0C\u4E0D\u786E\u5B9A\u65F6\u4FDD\u6301\u672A\u77E5\u3002",t.appendChild(S);let y=null,T=0,_=!1,E=U=>{let G=ja(U);return Nr(U,G?{[G]:c.get(G)}:{})};function R(){if(_)return;let U=c.state();f.disabled=!U.undo,b.disabled=!U.redo;let G=i.setSurfaceLabels?.(c.snapshot(),v.checked);M.textContent=v.checked?`\u5DF2\u663E\u793A ${G?.triangles||0} \u4E2A\u6807\u7B7E\u4E09\u89D2\u5F62${G?.truncated?"\uFF08\u663E\u793A\u4E0A\u96505000\uFF0C\u5176\u4F59\u6807\u7B7E\u4ECD\u4FDD\u7559\uFF09":""}\uFF1B\u989C\u8272\u4E0D\u662F\u81EA\u52A8\u8BC6\u522B\u51C6\u786E\u7387\u3002`:"\u663E\u793A\u989C\u8272\u9ED8\u8BA4\u5173\u95ED\uFF1B\u64A4\u9500\u5386\u53F2\u4EC5\u4FDD\u7559\u672C\u6B21\u9875\u9762\u6700\u8FD130\u6B21\u64CD\u4F5C\u3002"}function I(){T||(T=requestAnimationFrame(()=>{T=0,R()}))}function O(){r(c.snapshot()),R()}function B(){if(!y)return;y.mode==="paint"&&c.cancel(),s.cancel();let U=y.id;y=null,e.hasPointerCapture(U)&&e.releasePointerCapture(U),R()}h.onchange=()=>{B(),h.checked&&(v.checked=!0),R()},p.onchange=B,v.onchange=R,f.onclick=()=>{B(),c.undo()&&(O(),S.textContent="\u5DF2\u64A4\u9500\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},b.onclick=()=>{B(),c.redo()&&(O(),S.textContent="\u5DF2\u91CD\u505A\u4E00\u6B21\u6807\u6CE8\u64CD\u4F5C\u3002")},x.onclick=()=>{B(),c.begin();for(let U of Object.keys(c.snapshot()))c.set(U,void 0);c.commit()&&O(),S.textContent="\u5DF2\u79FB\u9664\u5F53\u524D\u6A21\u578B\u7684\u65E7\u6807\u6CE8\uFF0C\u6539\u7528\u7ED1\u5B9A\u59FF\u6001\u5206\u533A\uFF1B\u53EF\u64A4\u9500\u3002"};function N(U){let G=ja(U);!G||!U.alphaVerified||(c.set(G,y.region||void 0),I(),S.textContent=`\u5F53\u524D\u5171 ${c.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B${ki[y.region]||"\u64E6\u9664"}\uFF0C\u677E\u624B\u4FDD\u5B58\u3002`)}function V(U){if(y||e.dataset.snowbreakFrameEdit==="true"||!h.checked&&!o())return;U.stopPropagation();let G=i.pickSurface(U.clientX,U.clientY);if(y={id:U.pointerId,mode:h.checked?"paint":"touch",region:p.value},e.setPointerCapture(U.pointerId),y.mode==="paint"){c.begin();try{N(G)}catch(ce){S.textContent=ce.message}}else{let ce=E(G);i.senseTouch?.(G,ce),ce?(s.begin({pointerId:U.pointerId,x:U.clientX,y:U.clientY,region:ce,source:"skinned-surface"}),y.known=!0,y.hit=G):G?.alphaVerified?(s.begin({pointerId:U.pointerId,x:U.clientX,y:U.clientY,region:{id:"body",label:"\u8EAB\u4F53\uFF08\u5177\u4F53\u90E8\u4F4D\u672A\u786E\u8BA4\uFF09",confidence:0,source:"unknown-skinned-triangle"},source:"skinned-surface"}),y.known=!0,y.hit=G):S.textContent="\u80CC\u666F\uFF1A\u672A\u547D\u4E2D\u89D2\u8272\u3002"}}function L(U){if(y?.id===U.pointerId){if(e.dataset.snowbreakFrameEdit==="true"){B();return}if(U.stopPropagation(),y.mode==="paint")try{N(i.pickSurface(U.clientX,U.clientY))}catch(G){S.textContent=G.message}else y.known&&s.move({pointerId:U.pointerId,x:U.clientX,y:U.clientY})}}function C(U){if(y?.id!==U.pointerId)return;U.stopPropagation();let G=y;if(y=null,G.mode==="paint")c.commit()&&O(),S.textContent=`\u5DF2\u4FDD\u5B58 ${c.state().count} \u4E2A\u8868\u9762\u4E09\u89D2\u5F62\uFF1B\u53EF\u64A4\u9500\u672C\u6B21\u7B14\u5212\u3002`;else if(G.known&&o()){let ce=s.finish({pointerId:U.pointerId,x:U.clientX,y:U.clientY});ce&&(ce.surface=G.hit,S.textContent="\u547D\u4E2D\u5DF2\u786E\u8BA4\u90E8\u4F4D\uFF1A"+ce.regionLabel,a(ce))}else s.cancel();e.hasPointerCapture(U.pointerId)&&e.releasePointerCapture(U.pointerId)}function $(U){y?.id===U.pointerId&&B()}for(let[U,G]of[["pointerdown",V],["pointermove",L],["pointerup",C],["pointercancel",$],["lostpointercapture",$]])e.addEventListener(U,G);function F(U){if(!Array.isArray(U)||U.length>80)throw new Error("\u5019\u9009\u6570\u91CF\u65E0\u6548");B(),c.begin();let G=0;try{for(let ce of U){let de=ja(ce.hit);if(!de||!ce.hit.alphaVerified||c.has(de)||c.state().count>=3e4)continue;let he={id:ce.id,source:"vision-reviewed",confidence:ce.confidence,model:String(ce.model||"").slice(0,128),visible:!0};Nr(ce.hit,{[de]:he})&&(c.set(de,he),G++)}c.commit()&&O()}catch(ce){throw c.cancel(),R(),ce}return S.textContent=`\u5DF2\u91C7\u7528 ${G} \u4E2A\u7ECF\u786E\u8BA4\u7684\u89C6\u89C9\u5019\u9009\uFF1B\u4FDD\u7559\u6240\u6709\u5DF2\u6709\u6807\u6CE8\uFF0C\u53EF\u6574\u6279\u64A4\u9500\u3002`,G}return R(),{applyReviewed:F,classify:E,state:c.state,dispose(){B(),_=!0,T&&cancelAnimationFrame(T);for(let[U,G]of[["pointerdown",V],["pointermove",L],["pointerup",C],["pointercancel",$],["lostpointercapture",$]])e.removeEventListener(U,G)}}}var Rt=(i,e,t,n,r,s,a=!1)=>({id:i,label:e,group:t,side:n,priority:r,rect:s,sensitive:a}),rg=[Rt("head_top","\u5934\u9876","head","",58,[.3,0,.4,.06]),Rt("hair","\u5934\u53D1","head","",40,[.22,.015,.56,.1]),Rt("forehead","\u989D\u5934","face","",64,[.3,.08,.4,.06]),Rt("eyes","\u773C\u775B","face","",76,[.28,.15,.44,.06],!0),Rt("left_cheek","\u5DE6\u8138\u988A","face","L",72,[.57,.175,.14,.065],!0),Rt("right_cheek","\u53F3\u8138\u988A","face","R",72,[.29,.175,.14,.065],!0),Rt("left_ear","\u5DE6\u8033","face","L",68,[.72,.165,.06,.07],!0),Rt("right_ear","\u53F3\u8033","face","R",68,[.22,.165,.06,.07],!0),Rt("mouth","\u5634\u90E8","face","",78,[.43,.235,.14,.05],!0),Rt("face","\u9762\u90E8\uFF08\u6574\u4F53\uFF09","face","",22,[.24,.07,.52,.22]),Rt("neck","\u8116\u9888","neck","",62,[.42,.285,.16,.055],!0),Rt("left_shoulder","\u5DE6\u80A9","arm","L",60,[.62,.315,.23,.065]),Rt("right_shoulder","\u53F3\u80A9","arm","R",60,[.15,.315,.23,.065]),Rt("chest","\u80F8\u524D","torso","",54,[.34,.35,.32,.12],!0),Rt("belly","\u8179\u90E8","torso","",52,[.37,.46,.26,.095],!0),Rt("waist","\u8170\u90E8","torso","",56,[.35,.545,.3,.065],!0),Rt("hips","\u81C0\u90E8","torso","",58,[.31,.6,.38,.09],!0),Rt("left_upper_arm","\u5DE6\u4E0A\u81C2","arm","L",66,[.755,.34,.125,.28]),Rt("right_upper_arm","\u53F3\u4E0A\u81C2","arm","R",66,[.12,.34,.125,.28]),Rt("left_hand","\u5DE6\u624B","arm","L",74,[.79,.61,.12,.095],!0),Rt("right_hand","\u53F3\u624B","arm","R",74,[.09,.61,.12,.095],!0),Rt("left_thigh","\u5DE6\u5927\u817F","leg","L",62,[.525,.675,.145,.135]),Rt("right_thigh","\u53F3\u5927\u817F","leg","R",62,[.33,.675,.145,.135]),Rt("left_knee","\u5DE6\u819D","leg","L",64,[.53,.8,.13,.055]),Rt("right_knee","\u53F3\u819D","leg","R",64,[.34,.8,.13,.055]),Rt("left_calf","\u5DE6\u5C0F\u817F","leg","L",62,[.535,.845,.115,.095]),Rt("right_calf","\u53F3\u5C0F\u817F","leg","R",62,[.35,.845,.115,.095]),Rt("left_foot","\u5DE6\u811A","foot","L",68,[.535,.93,.145,.07],!0),Rt("right_foot","\u53F3\u811A","foot","R",68,[.33,.93,.145,.07],!0)],ig=Object.freeze(Object.fromEntries(rg.map(i=>[i.id,Object.freeze({...i})]))),sT=Object.freeze(rg.map(i=>i.id));function sg(i){return ig[i]&&ig[i].label||String(i||"\u8EAB\u4F53")}var pM="body-touch/1",mM={tapMaxMs:340,doubleGapMs:320,longMinMs:520,strokeMinPx:42,strokeMinMs:110,moveTolerancePx:16,frequencyWindowMs:1600,maxPath:80};function ag(i={}){let e=typeof i.now=="function"?i.now:()=>typeof performance<"u"?performance.now():Date.now(),t={...mM,...i},n=null,r=null,s=[],a=i.modelId||"",o=i.source||"screen";function l(f){a=String(f||"")}function c(f){o=String(f||"screen")}function u(f){return f?(n={pointerId:f.pointerId,x0:Number(f.x)||0,y0:Number(f.y)||0,x:Number(f.x)||0,y:Number(f.y)||0,t0:e(),path:[[Number(f.x)||0,Number(f.y)||0]],region:f.region||null,confidence:Number(f.confidence)||0,source:f.source||o},{...n}):null}function d(f){if(!n||!f)return null;let b=Number(f.x)||0,M=Number(f.y)||0;return n.x=b,n.y=M,n.path.length<t.maxPath&&n.path.push([b,M]),{x:b,y:M,moved:Math.hypot(b-n.x0,M-n.y0)}}function h(){let f=0;for(let b=1;b<n.path.length;b++)f+=Math.hypot(n.path[b][0]-n.path[b-1][0],n.path[b][1]-n.path[b-1][1]);return{length:f,points:n.path.length}}function p(f,b){if(!n)return null;f&&d(f);let M=e(),x=Math.max(0,M-n.t0),S=n.x-n.x0,y=n.y-n.y0,T=Math.hypot(S,y),_=h(),E=b||"";if(!E)if(x>=t.longMinMs&&T<=t.moveTolerancePx)E="long_press";else if(T>=t.strokeMinPx&&x>=t.strokeMinMs&&_.length>=t.strokeMinPx)E="stroke";else if(T<=t.moveTolerancePx&&x<=t.tapMaxMs){let N=n.region&&(n.region.id||n.region)||"body";r&&M-r.at<=t.doubleGapMs&&r.region===N?(E="double_tap",r=null):(E="tap",r={at:M,region:N})}else E="drag";let R=n.region||{id:"body",label:"\u8EAB\u4F53",confidence:0,source:"fallback"},I=typeof R=="string"?R:R.id||"body";s.push({at:M,region:I}),s=s.filter(N=>M-N.at<=t.frequencyWindowMs);let O=s.filter(N=>N.region===I).length,B={schema:pM,type:"body_touch",modelId:a,region:I,regionLabel:R.label||sg(I),side:R.side||"",group:R.group||"",gesture:E,durationMs:Math.round(x),confidence:Number(R.confidence)||0,regionSource:R.source||"fallback",source:n.source||o,frequency:O,start:{x:+n.x0.toFixed(1),y:+n.y0.toFixed(1)},end:{x:+n.x.toFixed(1),y:+n.y.toFixed(1)},delta:{x:+S.toFixed(1),y:+y.toFixed(1)},distance:+T.toFixed(1),pathLength:+_.length.toFixed(1),at:Math.round(M)};return n=null,B}function g(){n=null}function v(){n=null,r=null,s=[]}function m(){return{active:!!n,region:n&&n.region&&(n.region.id||n.region)||null,lastTap:r,history:s.slice()}}return{begin:u,move:d,finish:p,cancel:g,reset:v,state:m,setModelId:l,setSource:c,config:t}}var Qa=Object.freeze({scale:1,x:0,y:0,yaw:0,pitch:0,roll:0,stretchX:1,stretchY:1}),gd=Object.freeze({...Qa,scale:3,x:-.12,y:-.02});function xd(i){return i&&Object.keys(Qa).every(e=>Number.isFinite(i[e]))&&i.scale>=.3&&i.scale<=4&&Math.abs(i.x)<=1.5&&Math.abs(i.y)<=1.5&&Math.abs(i.yaw)<=180&&Math.abs(i.pitch)<=65&&Math.abs(i.roll)<=45&&i.stretchX>=.65&&i.stretchX<=1.5&&i.stretchY>=.65&&i.stretchY<=1.5}function yd(i,e,t,{onEditing:n=()=>{},initialFrame:r=gd,title:s="\u5C55\u793A\u7F16\u8F91",idPrefix:a="presentation",allowDepth:o=!1,allowStretch:l=!0,verticalSign:c=1,dragScale:u=()=>({x:1,y:1})}={}){let d;try{d=JSON.parse(localStorage.getItem(t))}catch{}i.setFrame(xd(d)&&(!o||Number.isFinite(d.depth)&&Math.abs(d.depth)<=1.5)?d:xd(r)?r:gd);let h=document.createElement("section");h.id=a+"Editor",h.hidden=!0,h.style.cssText="position:fixed;bottom:18%;left:4%;right:4%;max-height:28%;overflow:auto;background:#201e29f2;padding:12px;border:1px solid #777;border-radius:18px;z-index:8";let p=document.createElement("button");p.id=a==="presentation"?"finishPresentation":"finishModel",p.textContent="\u5B8C\u6210"+s+"\u8C03\u6574",p.hidden=!0,p.style.cssText="position:fixed;bottom:19%;left:10%;right:10%;z-index:7",document.body.append(h,p);let g=!1,v=null,m=0,f=null,b=null,M=new Map,x=new Map,S=document.createElement("select");S.id=a+"DragMode",S.add(new Option("\u5355\u6307\u79FB\u52A8 / \u53CC\u6307\u7F29\u653E","move")),S.add(new Option("\u5355\u6307\u81EA\u7531\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E","rotate"));let y=document.createElement("div");y.textContent=s,h.append(y,S);let T=(F,U,G)=>{let ce=document.createElement("button");return ce.textContent=F,ce.id=U.replace("presentation",a),ce.onclick=G,h.append(ce),ce};function _(){localStorage.setItem(t,JSON.stringify(i.frameState()))}function E(){let F=i.frameState();for(let[U,G]of x)G.value=F[U]}function R(F){i.setFrame({...i.frameState(),...F}),E()}function I(){m=0,f&&(R(f),f=null)}function O(F){f={...f||{},...F},m||(m=requestAnimationFrame(I))}function B(F){m&&(cancelAnimationFrame(m),I()),!F&&v&&R(v),_(),g=!1,h.hidden=!0,p.hidden=!0;for(let U of M.keys())e.hasPointerCapture(U)&&e.releasePointerCapture(U);M.clear(),b=null,e.dataset.snowbreakFrameEdit="false",n(!1)}T("\u4E3B\u9875\u8FD1\u666F","presentationHome",()=>{R(xd(r)?r:gd),_()}),T("\u5B8C\u6574\u5165\u753B","presentationFull",()=>{R(Qa),_()}),T("\u6536\u8D77\u5DE5\u5177\uFF0C\u7EE7\u7EED\u624B\u52BF\u8C03\u6574","presentationFold",()=>{h.hidden=!0,p.hidden=!1}),T("\u4FDD\u5B58\u5E76\u9000\u51FA","presentationSave",()=>B(!0)),T("\u53D6\u6D88\u672C\u6B21\u8C03\u6574","presentationCancel",()=>B(!1)),p.onclick=()=>B(!0);for(let[F,U,G,ce,de]of[["scale","\u5927\u5C0F",.3,4,.01],["x","\u5DE6\u53F3\u4F4D\u7F6E",-1.5,1.5,.01],["y","\u4E0A\u4E0B\u4F4D\u7F6E",-1.5,1.5,.01],["yaw","\u5DE6\u53F3\u8F6C\u5411",-180,180,1],["pitch","\u4FEF\u4EF0",-65,65,1],["roll","\u4FA7\u8F6C",-45,45,1],...o?[["depth","\u524D\u540E\u4F4D\u79FB",-1.5,1.5,.01]]:[],...l?[["stretchX","\u6A2A\u5411\u62C9\u4F38",.65,1.5,.01],["stretchY","\u7EB5\u5411\u62C9\u4F38",.65,1.5,.01]]:[]]){let he=document.createElement("label");he.textContent=U;let q=document.createElement("input");q.type="range",q.min=G,q.max=ce,q.step=de,q.id=a+"_"+F,q.style.width="100%",q.oninput=()=>O({[F]:Number(q.value)}),q.onchange=()=>{I(),_()},x.set(F,q),he.append(q),h.append(he)}let N=F=>({x:F.clientX,y:F.clientY});function V(F){g&&(F.preventDefault(),F.stopImmediatePropagation(),M.set(F.pointerId,N(F)),e.setPointerCapture(F.pointerId),b={frame:i.frameState(),points:[...M.values()]})}function L(F){if(!g||!M.has(F.pointerId)||!b)return;F.preventDefault(),F.stopImmediatePropagation(),M.set(F.pointerId,N(F));let U=[...M.values()],G=b.points,ce=b.frame;if(U.length>=2&&G.length>=2){let de=he=>Math.hypot(he[0].x-he[1].x,he[0].y-he[1].y);O({scale:ce.scale*de(U)/Math.max(5,de(G))})}else if(U.length===1&&G.length===1){let de=(U[0].x-G[0].x)/e.clientWidth,he=(U[0].y-G[0].y)/e.clientHeight;O(S.value==="rotate"?{yaw:ce.yaw+de*300,pitch:ce.pitch+he*100}:{x:ce.x+de*u().x,y:ce.y+he*c*u().y})}}function C(F){!g||!M.has(F.pointerId)||(F.preventDefault(),F.stopImmediatePropagation(),M.delete(F.pointerId),e.hasPointerCapture(F.pointerId)&&e.releasePointerCapture(F.pointerId),m&&(cancelAnimationFrame(m),I()),_(),b={frame:i.frameState(),points:[...M.values()]})}let $=[["pointerdown",V],["pointermove",L],["pointerup",C],["pointercancel",C]];for(let[F,U]of $)e.addEventListener(F,U,!0);return{get active(){return g},toggle(){if(g){B(!0);return}g=!0,v=i.frameState(),E(),h.hidden=!1,p.hidden=!0,e.dataset.snowbreakFrameEdit="true",n(!0)},close:()=>{g&&B(!0)},dispose(){g&&B(!0);for(let[F,U]of $)e.removeEventListener(F,U,!0);h.remove(),p.remove()},state:()=>i.frameState()}}var lg=!0,ti=document.querySelector("#stage"),og=document.querySelector("#status"),zi=document.querySelector("#editor"),Un=null,eo=null,qs=null,cg=Promise.resolve(),to={},vd="Chinese",bd=null,ni=0,Ur="",Md,Ce,st,wn,El,Nn,yi,io,St,wl=0,Sn=!1,no=!0,Dr=Ed(i=>wd(St,i.tempo,performance.now())),_i=document.createElement("button");_i.id="finishPaint";_i.hidden=!0;_i.style.cssText="position:fixed;bottom:23%;left:8%;right:8%;z-index:5";document.body.appendChild(_i);function Zs(){let i=document.querySelector("#snowSurfaceEdit"),e=document.querySelector("#snowSurfaceShow");i&&(i.checked=!1,i.dispatchEvent(new Event("change"))),e&&(e.checked=!1,e.dispatchEvent(new Event("change"))),_i.hidden=!0,zi.classList.remove("open")}_i.onclick=Zs;var tn=i=>{let e={...i,nonce:Ur};window.webkit?.messageHandlers?.snowbreak?.postMessage(e),window.dispatchEvent(new CustomEvent("snowbreak-event",{detail:e}))},_d=i=>{og.textContent=i,og.hidden=!i};function Tl(){window.__snowbreakMigration=null,qs=null,yi?.dispose(),yi=null,Dr.close(),St=null,_i.hidden=!0,Nn?.dispose(),io?.dispose(),El?.dispose(),st?.stop("renderer-close"),wn?.dispose(),Ce?.dispose(),Md?.dispose(),io=Nn=El=st=wn=Ce=Md=null,zi.replaceChildren()}function Xs(i,e,t){let n=++ni,r=cg.catch(()=>{}).then(()=>n===ni?gM(i,e,t,n):void 0);return cg=r,r}async function gM(i,e,t,n){if(Ur=e,Sn=!1,ti.dataset.snowbreakPaused="false",t&&Un?.manifest?.characterId)try{localStorage.setItem(Un.manifest.characterId.toLowerCase()+"-collection-selection",t)}catch{}if(Tl(),_d("\u6B63\u5728\u52A0\u8F7D\u672C\u5730\u89D2\u8272\u2026"),t&&await new Promise(o=>setTimeout(o,120)),n!==ni)return;let r,s,a;try{if(t){if(!Un)throw new Error("\u8BF7\u5148\u5BFC\u5165\u89D2\u8272\u6574\u5408\u5305");r=await Un.selectVariant(t)}else{Un=null,eo=i;let x=typeof i=="string"?i.match(/^companion-snowbreak:\/\/local\/package\/([A-Za-z0-9._-]+)$/):null;if(x)r=await xf(x[1]);else{let S=await fetch(i);if(!S.ok)throw new Error("\u672C\u5730\u89D2\u8272\u5305\u8BFB\u53D6\u5931\u8D25");r=await yf(new Uint8Array(await S.arrayBuffer()))}}if(!/^[A-Za-z0-9_-]{1,64}$/.test(r.manifest.characterId))throw new Error("\u4E0D\u652F\u6301\u7684\u672C\u5730\u89D2\u8272\u5305");if(s=await Xm(ti,r.runtime,{isCurrent:()=>n===ni,universalMotions:bd,performanceMode:to.mode||null}),a=r.runtime.getAsset("voiceCatalog")?await Qm(r.runtime):{getAudio:()=>null,snapshot:()=>({available:[]}),dispose(){}},n!==ni){s.dispose(),a.dispose(),r.runtime.dispose();return}Un=r.variants.length?r:null,r.selection&&localStorage.setItem(r.manifest.characterId.toLowerCase()+"-collection-selection",r.selection.id),Md=r.runtime,Ce=s,wn=a,Ce.setRenderBudget(to),wn.setLanguage?.(vd);let o=Ce.sceneState().available?"#201d29":"transparent";document.body.style.background=o,document.documentElement.style.background=o,st=jm(Ce,{audioForSample:x=>wn.getAudio(x)}),Ce.sceneInteractions.configure({beforeDrag:()=>{St=null,Ce.embodiment.releaseHands(),Ce.resetSenses()},scene:()=>st.snapshot().sceneId||Ce.editingScene,reaction:x=>{st.playSceneReaction(x,{withVoice:no})},voice:x=>{if(no){let S=wn.getAudio(x);S&&(S.currentTime=0,S.play().catch(()=>{}))}},event:tn}),Ce.showFaceCandidate(!0);let l=Ce.sampleOptions().find(x=>x.id===Ce.sampleState().sampleId),c="resting-scene:"+r.manifest.characterId+":"+r.selection?.mode,u=localStorage.getItem(c);l?.persistentState?st.enterScene(Ce.sampleOptions().some(x=>x.id===u&&x.persistentState)?u:l.id):st.enterStandby(),Ce.sceneSelectionKey=c,Ce.faceViewer(),wl=performance.now();let d=null,h=x=>{if(tn({type:"editing",active:x}),x){let S=st.snapshot();d=S.sceneId?{id:S.sceneId,time:S.sceneTime}:null,Ce.editingScene=d?.id||null,Ce.sceneInteractions.cancel(),st.stop("placement-edit"),d&&(Ce.selectSample(d.id),Ce.seek(d.time%Ce.duration)),Zs()}else Sn||(d?st.enterScene(d.id,d.time):st.enterStandby(),d=null,Ce.editingScene=null)},p=()=>{yi?.dispose();let x=r.manifest.characterId==="Enya"?"":r.manifest.characterId.toLowerCase()+":";yi=yd({setFrame:Ce.setModelFrame,frameState:Ce.modelFrameState},ti,"model-placement:"+x+r.selection?.mode+":"+(st.snapshot().sceneId||"main"),{initialFrame:{...Qa,depth:0},title:"\u4EC5\u79FB\u52A8\u89D2\u8272",idPrefix:"model",allowDepth:!0,allowStretch:!1,verticalSign:-1,dragScale:Ce.modelDragScale,onEditing:h})};Ce.setupModelEditor=p,p(),Nn=yd(Ce,ti,"presentation:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId),{initialFrame:Ce.presentationDefault,onEditing:h}),io=Td(Ce,"lighting:"+(r.selection?r.manifest.characterId.toLowerCase()+"-"+r.selection.mode:r.manifest.skinId));let g="";Ce.setFrameHandler(()=>{let x=performance.now();if(Sn||st.tick(Math.min(100,Math.max(0,x-wl))),wl=x,!Sn&&St){let _=oo(St,x),E=St.duration,R=St.stop===void 0?1:Math.max(0,1-(x-St.stop)/300);if(_>=E||R===0)St=null;else{let I=Math.max(0,Math.min(1,_/.3,(E-_)/(.3*St.rate),R)),O=I*I*(3-2*I);Ce.applyLearnedMotion(St.id,_,O,{amplitude:Dr.get().amplitude})}}let S=st.snapshot(),y=St?"learned:"+St.id:S.status,T=y+":"+(S.sceneId||"")+":"+Ce.sampleState().sampleId;T!==g&&(g=T,tn({type:"selfState",state:Ys()}),tn({type:"playback",active:!!St||["playing","scene-preview","local-arm-preview"].includes(S.status),status:y,label:St?Ce.learnedOptions().find(_=>_.id===St.id)?.label:Ce.sampleOptions().find(_=>_.id===Ce.sampleState().sampleId)?.label}))});let v=r.manifest.resources.filter(x=>x.kind==="geometry").map(x=>x.assetId).join("-"),m="surface:"+r.manifest.skinId+":"+v;El=ng(Ce,ti,zi,{load:()=>JSON.parse(localStorage.getItem(m)||"{}"),save:x=>localStorage.setItem(m,JSON.stringify(x)),tracker:ag({modelId:r.manifest.skinId,source:"skinned-surface"}),enabled:()=>!Sn,onEvent:async x=>{n!==ni||Sn||(tn({type:"touch",region:x.region,label:x.regionLabel,gesture:x.gesture,confidence:x.confidence,source:x.regionSource,durationMs:x.durationMs,frequency:x.frequency,completed:!0}),lg||await st.dispatchSurfaceTouch(x,{withVoice:no}))}});let f=document.createElement("button");f.textContent="\u5173\u95ED\u5DE5\u5177",f.onclick=Zs,zi.prepend(f);let b=zi.querySelector("#snowSurfaceRegion"),M=zi.querySelector("#snowSurfaceEdit");M.addEventListener("change",()=>{M.checked&&(zi.classList.remove("open"),_i.textContent="\u5B8C\u6210"+b.selectedOptions[0].textContent+"\u6807\u6CE8",_i.hidden=!1)}),_d(""),tn({type:"ready",bodyActions:[...Ce.embodiment.snapshot().available,...Ce.sceneInteractions.available()],selection:r.selection,variants:r.variants,characterId:r.manifest.characterId,skinId:r.manifest.skinId,stance:r.runtime.getAsset("stateTransition")?.data.stance||"seated",samples:Ce.sampleOptions().map(x=>x.id),sampleLabels:Object.fromEntries(Ce.sampleOptions().map(x=>[x.id,x.label])),voices:wn.snapshot().available,learned:Ce.learnedOptions().map(x=>x.id)}),window.__snowbreakMigration={display:Ce,adapter:st,voices:wn,editor:El,presentation:Nn,manifest:r.manifest}}catch(o){if(n!==ni){s?.dispose(),a?.dispose(),r?.runtime.dispose();return}Tl(),s?.dispose(),a?.dispose(),r?.runtime.dispose(),_d("\u89D2\u8272\u52A0\u8F7D\u5931\u8D25\uFF1A"+String(o.message||o)),tn({type:"error",message:String(o.message||o)})}}async function xM(i){if(i.type==="hardwareBudget"){let e=to.mode;if(to={thermal:i.thermal,lowPower:i.lowPower,...i.mode?{mode:i.mode}:{}},i.mode)try{localStorage.setItem("snowRenderMode",i.mode)}catch{}if(Ce?.setRenderBudget(to),Ce&&i.reloadOnTierChange&&e&&i.mode&&e!==i.mode){if(Un?.selection?.id)return Xs(null,Ur,Un.selection.id);if(eo)return Xs(eo,Ur)}return}if(i.type==="releaseMemory"){if(wn?.stop?.(),Ce?.releaseCache?.(),i.reload){if(Un?.selection?.id)return Xs(null,Ur,Un.selection.id);if(eo)return Xs(eo,Ur)}return}if(i.type==="universalMotions"){if(bd=i.catalog||null,Ce){let e=Ce.setUniversalMotions(bd);tn({type:"universalReady",learned:e.map(t=>t.id)})}return}if(i.type==="dispose"){ni++,Tl();return}if(i.type==="load")return Xs(i.url,i.nonce);if(i.type==="variant")return Un?.variants.some(e=>e.id===i.id)?Xs(null,Ur,i.id):void 0;if(i.type==="voiceLanguage"){if(!["zh","ja"].includes(i.language))throw new Error("\u4E0D\u652F\u6301\u7684\u539F\u58F0\u8BED\u8A00");if(vd=i.language==="ja"?"Japanese":"Chinese",st){let e=st.snapshot();st.stop("voice-language-change"),wn?.setLanguage?.(vd),e.sceneId?st.enterScene(e.sceneId,e.sceneTime):st.enterStandby()}return}if(st){if(["body","gesture","sample","learned","stop"].includes(i.type)){wn?.stop?.();let e=Ce.sceneInteractions.snapshot();if(i.automatic&&(yi?.active||Nn?.active||e.active||e.recovering)){tn({type:"notice",message:"\u7F16\u8F91\u671F\u95F4\u5DF2\u6682\u505C\u81EA\u52A8\u52A8\u4F5C\uFF0C\u8BF7\u5B8C\u6210\u8C03\u6574\u540E\u518D\u4E92\u52A8\u3002"});return}yi?.close(),Nn?.close()}if(i.type==="body"){if(Sn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");if(Ce.sceneInteractions.available().includes(i.id)){Ce.sceneInteractions.command(i.id),tn({type:"selfState",state:Ys(),requestId:i.requestId});return}let e=ni;if(St=null,st.snapshot().sceneId||(st.stop("body-command"),st.enterStandby()),Ce.embodiment.command(i.id),await new Promise(t=>setTimeout(t,750)),e!==ni)return;tn({type:"selfState",state:Ys(),requestId:i.requestId});return}if(i.type==="gesture"){if(Sn)throw new Error("\u6A21\u578B\u6682\u505C\u4E2D");St=null,st.snapshot().sceneId||(st.stop("ai-gesture"),st.enterStandby()),Ce.embodiment.playGesture(i.id,i.plan),tn({type:"selfState",state:Ys()});return}if(i.type==="touchPolicy"){lg=!!i.aiControlled;return}if(i.type==="danceSettings"){Dr.set(i);return}if(i.type==="danceEdit"){Dr.toggle();return}if(i.type==="speechLevel"){Ce.embodiment.setSpeechLevel(i.value);return}if(i.type==="gaze"){Ce.setGaze(i.x,i.y);return}if(i.type==="pause"){if(Sn)return;wn?.stop?.(),yi?.close(),Dr.close();let e=st.snapshot();qs=e.sceneId?{id:e.sceneId,time:e.sceneTime}:null,Ce.sceneInteractions.suspend(),Ce.embodiment.reset(),Ce.resetSenses(),St=null,Sn=!0,io?.close(),Nn?.close(),ti.dataset.snowbreakPaused="true",st.stop("background"),Zs();return}if(i.type==="resume"){if(!Sn)return;Sn=!1,ti.dataset.snowbreakPaused="false",wl=performance.now(),qs?(st.enterScene(qs.id,qs.time),qs=null):st.enterStandby();return}if(i.type==="stop"){if(Ce.embodiment.reset(),St){St.stop=performance.now();return}st.stop(),st.enterStandby();return}if(i.type==="officialTouchPoints"){Ce.sceneInteractions.togglePoints()||tn({type:"notice",message:"\u5F53\u524D\u5305\uFF0F\u573A\u666F\u6CA1\u6709\u5DF2\u79FB\u690D\u7684\u539F\u4F5C\u89E6\u70B9\uFF1B\u4E92\u52A84\u30015\u9700\u4F7F\u7528\u65B0\u7248\u4E92\u52A8\u5305\u3002"});return}if(i.type==="edit"){St=null,Nn.close(),zi.classList.contains("open")||!_i.hidden?Zs():zi.classList.add("open");return}if(i.type==="lightingEdit"){Nn.close(),Zs(),io.toggle();return}if(i.type==="modelEdit"){St=null,Nn.close(),yi.toggle();return}if(i.type==="modelFrame"){Ce.setModelFrame(i.frame);return}if(i.type==="frameEdit"){St=null,yi.close(),Nn.toggle();return}if(i.type==="scene")return Ce.setSceneVisible(!!i.visible);if(i.type==="room")return Ce.setRoomVisible(!!i.visible);if(i.type==="voice"){if(no=!!i.enabled,!no){wn?.stop?.();let e=st.snapshot().sceneId;st.stop("voice-disabled"),e?st.enterScene(e):st.enterStandby()}return}if(i.type==="sample"&&Ce.sampleOptions().some(e=>e.id===i.id)){if(Ce.sceneInteractions.cancel(),/^show_0[2345]$/.test(i.id)||Ce.sampleOptions().find(t=>t.id===i.id)?.persistentState){St=null,yi.close(),Ce.embodiment.reset(),st.enterScene(i.id),Ce.sampleOptions().find(t=>t.id===i.id)?.persistentState&&localStorage.setItem(Ce.sceneSelectionKey,i.id),Ce.setupModelEditor(),tn({type:"selfState",state:Ys()});return}if(st.snapshot().sceneId){let t=i.id==="head"?Ce.sceneInteractions.headReaction():null;await st.playSceneReaction(t||i.id,{withVoice:!!i.withVoice});return}Ce.embodiment.releaseHands(),St=null,Nn.close(),Sn=!1,st.stop(),st.selectSample(i.id),st.setStandbyAfterSample(!0),(i.withVoice&&wn.getAudio(i.id)?await st.playWithVoice():st.playSample()).accepted||tn({type:"notice",message:"\u52A8\u4F5C\u6216\u539F\u58F0\u6682\u65F6\u65E0\u6CD5\u64AD\u653E\uFF0C\u53EF\u5173\u95ED\u539F\u58F0\u540E\u91CD\u8BD5\u3002"})}if(i.type==="learned"){Ce.embodiment.releaseHands();let e=Ce.learnedOptions().find(t=>t.id===i.id);if(!e)return;Nn.close(),st.stop("learned-motion"),st.enterStandby(),St={id:e.id,kind:e.kind,duration:e.duration,start:performance.now(),offset:0,rate:e.kind==="standing-dance"?Dr.get().tempo:1}}}}function Ys(){if(!Ce)return null;let i=Ce.embodiment.snapshot(),e=st?.snapshot(),t=Ce.sampleOptions().find(r=>r.id===Ce.sampleState().sampleId),n=Ce.sceneInteractions.legState();return{...i,legs:n.legs,available:[...i.available,...n.available],lastResult:e?.status==="playing"&&t?"\u6B63\u5728\u64AD\u653E\u539F\u4F5C\u52A8\u4F5C\uFF1A"+t.label:i.lastResult,legResult:n.lastResult,sourceAction:e?.status==="playing"?t?.id:null,learnedMotion:St?{id:St.id,time:oo(St,performance.now()),rate:St.rate,amplitude:Dr.get().amplitude}:null,interactionScene:e?.sceneId||null,outfit:Un?.selection?.outfit||"unknown",mode:Un?.selection?.mode||"unknown"}}function yM(){if(!Ce||Sn)throw new Error("\u6A21\u578B\u5C1A\u672A\u5C31\u7EEA");let i=document.createElement("canvas"),e=1024/Math.max(ti.width,ti.height);i.width=Math.round(ti.width*e),i.height=Math.round(ti.height*e);let t=i.getContext("2d");return t.fillStyle="#22202a",t.fillRect(0,0,i.width,i.height),Ce.drawSnapshot(t,i.width,i.height),i.toDataURL("image/jpeg",.65)}window.SnowbreakHost={inspect:Ys,portrait:yM,performance:()=>Ce?.performanceState(),receive:i=>{xM(i).catch(e=>tn({type:"notice",message:String(e.message||e)}))}};addEventListener("pagehide",()=>{ni++,Tl()});tn({type:"pageReady"});})();
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
