import{a as Lt,t as vn,c as ds,n as Rc}from"../chunks/disclose-version.BTWaxyko.js";import{i as Cc}from"../chunks/legacy.CqpHvOk8.js";import{w as dn,z as ps,R as Pc,$ as Dc,x as Lc,v as Uc,O as Ic,Z as Fl,H as Nc,y as uo,A as ms,F as Hi,V as Fc,as as Gr,B as Ol,C as Bl,D as Oc,M as fo,at as ho,au as Bc,Y as zc,av as Hc,I as Gc,L as Vc,P as kc,aw as Xa,ax as qa,m as Wc,a5 as po,ay as zl,az as Xc,aA as qc,T as Yc,aB as $c,aC as Kc,aa as mo,aD as Zc,p as jc,aE as _s,aF as Jc,a as Qc,d as Tt,g as Re,aG as xn,c as ke,f as ur,r as He,t as Ot,s as it,aH as eu,an as gs}from"../chunks/runtime.D4GSaHRR.js";import{s as _t,e as Gi}from"../chunks/render.CVavd_pH.js";import{o as tu,a as nu,i as Vi}from"../chunks/index-client.Bq46oyqL.js";let _o=!1;function iu(){_o||(_o=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function vs(n,e){return e}function ru(n,e,t,i){for(var r=[],s=e.length,a=0;a<s;a++)Bc(e[a].e,r,!0);var o=s>0&&r.length===0&&t!==null;if(o){var c=t.parentNode;zc(c),c.append(t),i.clear(),An(n,e[0].prev,e[s-1].next)}Hc(r,()=>{for(var l=0;l<s;l++){var u=e[l];o||(i.delete(u.k),An(n,u.prev,u.next)),Gc(u.e,!o)}})}function xs(n,e,t,i,r,s=null){var a=n,o={flags:e,items:new Map,first:null},c=(e&zl)!==0;if(c){var l=n;a=dn?ps(Pc(l)):l.appendChild(Dc())}dn&&Lc();var u=null,d=!1;Uc(()=>{var h=t(),m=Ic(h)?h:h==null?[]:Fl(h),_=m.length;if(d&&_===0)return;d=_===0;let x=!1;if(dn){var p=a.data===Nc;p!==(_===0)&&(a=uo(),ps(a),ms(!1),x=!0)}if(dn){for(var f=null,b,T=0;T<_;T++){if(Hi.nodeType===8&&Hi.data===Fc){a=Hi,x=!0,ms(!1);break}var S=m[T],C=i(S,T);b=Hl(Hi,o,f,null,S,C,T,r,e),o.items.set(C,b),f=b}_>0&&ps(uo())}if(!dn){var P=Vc;su(m,o,a,r,e,(P.f&Gr)!==0,i)}s!==null&&(_===0?u?Ol(u):u=Bl(()=>s(a)):u!==null&&Oc(u,()=>{u=null})),x&&ms(!0),t()}),dn&&(a=Hi)}function su(n,e,t,i,r,s,a){var V,Z,W,Q;var o=(r&Xc)!==0,c=(r&(Xa|qa))!==0,l=n.length,u=e.items,d=e.first,h=d,m,_=null,x,p=[],f=[],b,T,S,C;if(o)for(C=0;C<l;C+=1)b=n[C],T=a(b,C),S=u.get(T),S!==void 0&&((V=S.a)==null||V.measure(),(x??(x=new Set)).add(S));for(C=0;C<l;C+=1){if(b=n[C],T=a(b,C),S=u.get(T),S===void 0){var P=h?h.e.nodes_start:t;_=Hl(P,e,_,_===null?e.first:_.next,b,T,C,i,r),u.set(T,_),p=[],f=[],h=_.next;continue}if(c&&au(S,b,C,r),S.e.f&Gr&&(Ol(S.e),o&&((Z=S.a)==null||Z.unfix(),(x??(x=new Set)).delete(S))),S!==h){if(m!==void 0&&m.has(S)){if(p.length<f.length){var D=f[0],N;_=D.prev;var E=p[0],M=p[p.length-1];for(N=0;N<p.length;N+=1)go(p[N],D,t);for(N=0;N<f.length;N+=1)m.delete(f[N]);An(e,E.prev,M.next),An(e,_,E),An(e,M,D),h=D,_=M,C-=1,p=[],f=[]}else m.delete(S),go(S,h,t),An(e,S.prev,S.next),An(e,S,_===null?e.first:_.next),An(e,_,S),_=S;continue}for(p=[],f=[];h!==null&&h.k!==T;)(s||!(h.e.f&Gr))&&(m??(m=new Set)).add(h),f.push(h),h=h.next;if(h===null)continue;S=h}p.push(S),_=S,h=S.next}if(h!==null||m!==void 0){for(var A=m===void 0?[]:Fl(m);h!==null;)(s||!(h.e.f&Gr))&&A.push(h),h=h.next;var k=A.length;if(k>0){var B=r&zl&&l===0?t:null;if(o){for(C=0;C<k;C+=1)(W=A[C].a)==null||W.measure();for(C=0;C<k;C+=1)(Q=A[C].a)==null||Q.fix()}ru(e,A,B,u)}}o&&kc(()=>{var R;if(x!==void 0)for(S of x)(R=S.a)==null||R.apply()}),fo.first=e.first&&e.first.e,fo.last=_&&_.e}function au(n,e,t,i){i&Xa&&ho(n.v,e),i&qa?ho(n.i,t):n.i=t}function Hl(n,e,t,i,r,s,a,o,c){var l=(c&Xa)!==0,u=(c&qc)===0,d=l?u?Wc(r):po(r):r,h=c&qa?po(a):a,m={i:h,v:d,k:s,a:null,e:null,prev:t,next:i};try{return m.e=Bl(()=>o(n,d,h),dn),m.e.prev=t&&t.e,m.e.next=i&&i.e,t===null?e.first=m:(t.next=m,t.e.next=m.e),i!==null&&(i.prev=m,i.e.prev=m.e),m}finally{}}function go(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==i;){var a=Yc(s);r.before(s),s=a}}function An(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ou(n){if(dn){var e=!1,t=()=>{if(!e){if(e=!0,n.hasAttribute("value")){var i=n.value;jt(n,"value",null),n.value=i}if(n.hasAttribute("checked")){var r=n.checked;jt(n,"checked",null),n.checked=r}}};n.__on_r=t,$c(t),iu()}}function lu(n,e){var t=n.__attributes??(n.__attributes={});t.value===(t.value=e)||n.value===e&&(e!==0||n.nodeName!=="PROGRESS")||(n.value=e)}function jt(n,e,t,i){var r=n.__attributes??(n.__attributes={});dn&&(r[e]=n.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&n.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in n&&(n.__styles={}),e==="loading"&&(n[Kc]=t),t==null?n.removeAttribute(e):typeof t!="string"&&cu(n).includes(e)?n[e]=t:n.setAttribute(e,t))}var vo=new Map;function cu(n){var e=vo.get(n.nodeName);if(e)return e;vo.set(n.nodeName,e=[]);for(var t,i=mo(n),r=Element.prototype;r!==i;){t=Zc(i);for(var s in t)t[s].set&&e.push(s);i=mo(i)}return e}function uu(n,e,t){if(t){if(n.classList.contains(e))return;n.classList.add(e)}else{if(!n.classList.contains(e))return;n.classList.remove(e)}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="173",fu=0,xo=1,hu=2,Gl=1,du=2,hn=3,Pn=0,wt=1,Qt=2,Rn=0,vi=1,Mo=2,So=3,Eo=4,pu=5,Vn=100,mu=101,_u=102,gu=103,vu=104,xu=200,Mu=201,Su=202,Eu=203,ea=204,ta=205,yu=206,Tu=207,bu=208,Au=209,wu=210,Ru=211,Cu=212,Pu=213,Du=214,na=0,ia=1,ra=2,Ei=3,sa=4,aa=5,oa=6,la=7,$a=0,Lu=1,Uu=2,Cn=0,Iu=1,Nu=2,Fu=3,Ou=4,Bu=5,zu=6,Hu=7,Vl=300,yi=301,Ti=302,ca=303,ua=304,os=306,fa=1e3,Wn=1001,ha=1002,Zt=1003,Gu=1004,fr=1005,en=1006,Ms=1007,Xn=1008,gn=1009,kl=1010,Wl=1011,Zi=1012,Ka=1013,$n=1014,pn=1015,er=1016,Za=1017,ja=1018,bi=1020,Xl=35902,ql=1021,Yl=1022,$t=1023,$l=1024,Kl=1025,xi=1026,Ai=1027,Zl=1028,Ja=1029,jl=1030,Qa=1031,eo=1033,Vr=33776,kr=33777,Wr=33778,Xr=33779,da=35840,pa=35841,ma=35842,_a=35843,ga=36196,va=37492,xa=37496,Ma=37808,Sa=37809,Ea=37810,ya=37811,Ta=37812,ba=37813,Aa=37814,wa=37815,Ra=37816,Ca=37817,Pa=37818,Da=37819,La=37820,Ua=37821,qr=36492,Ia=36494,Na=36495,Jl=36283,Fa=36284,Oa=36285,Ba=36286,Vu=3200,ku=3201,Ql=0,Wu=1,wn="",zt="srgb",wi="srgb-linear",Zr="linear",et="srgb",ti=7680,yo=519,Xu=512,qu=513,Yu=514,ec=515,$u=516,Ku=517,Zu=518,ju=519,To=35044,bo="300 es",mn=2e3,jr=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yr=Math.PI/180,za=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Ju(n,e){return(n%e+e)%e}function Ss(n,e,t){return(1-t)*n+t*e}function ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,r,s,a,o,c,l){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],f=r[6],b=r[1],T=r[4],S=r[7],C=r[2],P=r[5],D=r[8];return s[0]=a*x+o*b+c*C,s[3]=a*p+o*T+c*P,s[6]=a*f+o*S+c*D,s[1]=l*x+u*b+d*C,s[4]=l*p+u*T+d*P,s[7]=l*f+u*S+d*D,s[2]=h*x+m*b+_*C,s[5]=h*p+m*T+_*P,s[8]=h*f+m*S+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,m=l*s-a*c,_=t*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Ne;function tc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qu(){const n=Jr("canvas");return n.style.display="block",n}const Ao={};function mi(n){n in Ao||(Ao[n]=!0,console.warn(n))}function ef(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function tf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wo=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ro=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){const n={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=_n(r.r),r.g=_n(r.g),r.b=_n(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wn?Zr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wi]:{primaries:e,whitePoint:i,transfer:Zr,toXYZ:wo,fromXYZ:Ro,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:wo,fromXYZ:Ro,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}const Ze=rf();function _n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ni;class sf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=Jr("canvas")),ni.width=e.width,ni.height=e.height;const i=ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ni}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_n(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_n(t[i]/255)*255):t[i]=_n(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let af=0;class nc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ys(r[a].image)):s.push(ys(r[a]))}else s=ys(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ys(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let of=0;class Rt extends Pi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=Wn,r=Wn,s=en,a=Xn,o=$t,c=gn,l=Rt.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=tr(),this.name="",this.source=new nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Vl;Rt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],_=c[9],x=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,S=(m+1)/2,C=(f+1)/2,P=(u+h)/4,D=(d+x)/4,N=(_+p)/4;return T>S&&T>C?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=D/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=D/s,r=N/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(d-x)/b,this.z=(h-u)/b,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lf extends Pi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Rt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new nc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends lf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ic extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cf extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(d!==x||c!==h||l!==m||u!==_){let p=1-o;const f=c*h+l*m+u*_+d*x,b=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const C=Math.sqrt(T),P=Math.atan2(C,f*b);p=Math.sin(p*P)/C,o=Math.sin(o*P)/C}const S=o*b;if(c=c*p+h*S,l=l*p+m*S,u=u*p+_*S,d=d*p+x*S,p===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*d+c*m-l*h,e[t+1]=c*_+u*h+l*d-o*m,e[t+2]=l*_+u*m+o*h-c*d,e[t+3]=u*_-o*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),h=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*m*_,this._y=l*m*d-h*u*_,this._z=l*u*_+h*m*d,this._w=l*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+l*m*_,this._y=l*m*d-h*u*_,this._z=l*u*_-h*m*d,this._w=l*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-l*m*_,this._y=l*m*d+h*u*_,this._z=l*u*_+h*m*d,this._w=l*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-l*m*_,this._y=l*m*d+h*u*_,this._z=l*u*_-h*m*d,this._w=l*u*d+h*m*_;break;case"YZX":this._x=h*u*d+l*m*_,this._y=l*m*d+h*u*_,this._z=l*u*_-h*m*d,this._w=l*u*d-h*m*_;break;case"XZY":this._x=h*u*d-l*m*_,this._y=l*m*d-h*u*_,this._z=l*u*_+h*m*d,this._w=l*u*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new O,Co=new nr;class ir{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hr.copy(i.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),dr.subVectors(this.max,Wi),ii.subVectors(e.a,Wi),ri.subVectors(e.b,Wi),si.subVectors(e.c,Wi),Mn.subVectors(ri,ii),Sn.subVectors(si,ri),In.subVectors(ii,si);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-In.z,In.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,In.z,0,-In.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-In.y,In.x,0];return!bs(t,ii,ri,si,dr)||(t=[1,0,0,0,1,0,0,0,1],!bs(t,ii,ri,si,dr))?!1:(pr.crossVectors(Mn,Sn),t=[pr.x,pr.y,pr.z],bs(t,ii,ri,si,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new O,new O,new O,new O,new O,new O,new O,new O],Wt=new O,hr=new ir,ii=new O,ri=new O,si=new O,Mn=new O,Sn=new O,In=new O,Wi=new O,dr=new O,pr=new O,Nn=new O;function bs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Nn.fromArray(n,s);const o=r.x*Math.abs(Nn.x)+r.y*Math.abs(Nn.y)+r.z*Math.abs(Nn.z),c=e.dot(Nn),l=t.dot(Nn),u=i.dot(Nn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const uf=new ir,Xi=new O,As=new O;class ls{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(As)),this.expandByPoint(Xi.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new O,ws=new O,mr=new O,En=new O,Rs=new O,_r=new O,Cs=new O;class rc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ws.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),En.copy(this.origin).sub(ws);const s=e.distanceTo(t)*.5,a=-this.direction.dot(mr),o=En.dot(this.direction),c=-En.dot(mr),l=En.lengthSq(),u=Math.abs(1-a*a);let d,h,m,_;if(u>0)if(d=a*c-o,h=a*o-c,_=s*u,d>=0)if(h>=-_)if(h<=_){const x=1/u;d*=x,h*=x,m=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ws).addScaledVector(mr,h),m}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),r=ln.dot(ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,r,s){Rs.subVectors(t,e),_r.subVectors(i,e),Cs.crossVectors(Rs,_r);let a=this.direction.dot(Cs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const c=o*this.direction.dot(_r.crossVectors(En,_r));if(c<0)return null;const l=o*this.direction.dot(Rs.cross(En));if(l<0||c+l>a)return null;const u=-o*En.dot(Cs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,s,a,o,c,l,u,d,h,m,_,x,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,d,h,m,_,x,p)}set(e,t,i,r,s,a,o,c,l,u,d,h,m,_,x,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ai.setFromMatrixColumn(e,0).length(),s=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*d,_=o*u,x=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+_*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,m=c*d,_=l*u,x=l*d;t[0]=h+x*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=x+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,m=c*d,_=l*u,x=l*d;t[0]=h-x*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,m=a*d,_=o*u,x=o*d;t[0]=c*u,t[4]=_*l-m,t[8]=h*l+x,t[1]=c*d,t[5]=x*l+h,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*u,t[4]=x-h*d,t[8]=_*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*d+_,t[10]=h-x*d}else if(e.order==="XZY"){const h=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+x,t[5]=a*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ff,e,hf)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),yn.crossVectors(i,Ut),yn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),yn.crossVectors(i,Ut)),yn.normalize(),gr.crossVectors(Ut,yn),r[0]=yn.x,r[4]=gr.x,r[8]=Ut.x,r[1]=yn.y,r[5]=gr.y,r[9]=Ut.y,r[2]=yn.z,r[6]=gr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],f=i[14],b=i[3],T=i[7],S=i[11],C=i[15],P=r[0],D=r[4],N=r[8],E=r[12],M=r[1],A=r[5],k=r[9],B=r[13],V=r[2],Z=r[6],W=r[10],Q=r[14],R=r[3],q=r[7],te=r[11],de=r[15];return s[0]=a*P+o*M+c*V+l*R,s[4]=a*D+o*A+c*Z+l*q,s[8]=a*N+o*k+c*W+l*te,s[12]=a*E+o*B+c*Q+l*de,s[1]=u*P+d*M+h*V+m*R,s[5]=u*D+d*A+h*Z+m*q,s[9]=u*N+d*k+h*W+m*te,s[13]=u*E+d*B+h*Q+m*de,s[2]=_*P+x*M+p*V+f*R,s[6]=_*D+x*A+p*Z+f*q,s[10]=_*N+x*k+p*W+f*te,s[14]=_*E+x*B+p*Q+f*de,s[3]=b*P+T*M+S*V+C*R,s[7]=b*D+T*A+S*Z+C*q,s[11]=b*N+T*k+S*W+C*te,s[15]=b*E+T*B+S*Q+C*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],f=e[15];return _*(+s*c*d-r*l*d-s*o*h+i*l*h+r*o*m-i*c*m)+x*(+t*c*m-t*l*h+s*a*h-r*a*m+r*l*u-s*c*u)+p*(+t*l*d-t*o*m-s*a*d+i*a*m+s*o*u-i*l*u)+f*(-r*o*u-t*c*d+t*o*h+r*a*d-i*a*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],f=e[15],b=d*p*l-x*h*l+x*c*m-o*p*m-d*c*f+o*h*f,T=_*h*l-u*p*l-_*c*m+a*p*m+u*c*f-a*h*f,S=u*x*l-_*d*l+_*o*m-a*x*m-u*o*f+a*d*f,C=_*d*c-u*x*c-_*o*h+a*x*h+u*o*p-a*d*p,P=t*b+i*T+r*S+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=b*D,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*f-i*h*f)*D,e[2]=(o*p*s-x*c*s+x*r*l-i*p*l-o*r*f+i*c*f)*D,e[3]=(d*c*s-o*h*s-d*r*l+i*h*l+o*r*m-i*c*m)*D,e[4]=T*D,e[5]=(u*p*s-_*h*s+_*r*m-t*p*m-u*r*f+t*h*f)*D,e[6]=(_*c*s-a*p*s-_*r*l+t*p*l+a*r*f-t*c*f)*D,e[7]=(a*h*s-u*c*s+u*r*l-t*h*l-a*r*m+t*c*m)*D,e[8]=S*D,e[9]=(_*d*s-u*x*s-_*i*m+t*x*m+u*i*f-t*d*f)*D,e[10]=(a*x*s-_*o*s+_*i*l-t*x*l-a*i*f+t*o*f)*D,e[11]=(u*o*s-a*d*s-u*i*l+t*d*l+a*i*m-t*o*m)*D,e[12]=C*D,e[13]=(u*x*r-_*d*r+_*i*h-t*x*h-u*i*p+t*d*p)*D,e[14]=(_*o*r-a*x*r-_*i*c+t*x*c+a*i*p-t*o*p)*D,e[15]=(a*d*r-u*o*r+u*i*c-t*d*c-a*i*h+t*o*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,m=s*u,_=s*d,x=a*u,p=a*d,f=o*d,b=c*l,T=c*u,S=c*d,C=i.x,P=i.y,D=i.z;return r[0]=(1-(x+f))*C,r[1]=(m+S)*C,r[2]=(_-T)*C,r[3]=0,r[4]=(m-S)*P,r[5]=(1-(h+f))*P,r[6]=(p+b)*P,r[7]=0,r[8]=(_+T)*D,r[9]=(p-b)*D,r[10]=(1-(h+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ai.set(r[0],r[1],r[2]).length();const a=ai.set(r[4],r[5],r[6]).length(),o=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const l=1/s,u=1/a,d=1/o;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=mn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(o===mn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===jr)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=mn){const c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(a-s),h=(t+e)*l,m=(i+r)*u;let _,x;if(o===mn)_=(a+s)*d,x=-2*d;else if(o===jr)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ai=new O,Xt=new at,ff=new O(0,0,0),hf=new O(1,1,1),yn=new O,gr=new O,Ut=new O,Po=new at,Do=new nr;class rn{constructor(e=0,t=0,i=0,r=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Po,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let df=0;const Lo=new O,oi=new nr,cn=new at,vr=new O,qi=new O,pf=new O,mf=new nr,Uo=new O(1,0,0),Io=new O(0,1,0),No=new O(0,0,1),Fo={type:"added"},_f={type:"removed"},li={type:"childadded",child:null},Ps={type:"childremoved",child:null};class gt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new O,t=new rn,i=new nr,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ne}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Uo,e)}rotateY(e){return this.rotateOnAxis(Io,e)}rotateZ(e){return this.rotateOnAxis(No,e)}translateOnAxis(e,t){return Lo.copy(e).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uo,e)}translateY(e){return this.translateOnAxis(Io,e)}translateZ(e){return this.translateOnAxis(No,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(qi,vr,this.up):cn.lookAt(vr,qi,this.up),this.quaternion.setFromRotationMatrix(cn),r&&(cn.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(cn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fo),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fo),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gt.DEFAULT_UP=new O(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new O,un=new O,Ds=new O,fn=new O,ci=new O,ui=new O,Oo=new O,Ls=new O,Us=new O,Is=new O,Ns=new lt,Fs=new lt,Os=new lt;class Gt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),un.subVectors(i,t),Ds.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(un),c=qt.dot(Ds),l=un.dot(un),u=un.dot(Ds),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(l*c-o*u)*h,_=(a*u-o*c)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ns.setScalar(0),Fs.setScalar(0),Os.setScalar(0),Ns.fromBufferAttribute(e,t),Fs.fromBufferAttribute(e,i),Os.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ns,s.x),a.addScaledVector(Fs,s.y),a.addScaledVector(Os,s.z),a}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),un.subVectors(e,t),qt.cross(un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),qt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Gt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ci.subVectors(r,i),ui.subVectors(s,i),Ls.subVectors(e,i);const c=ci.dot(Ls),l=ui.dot(Ls);if(c<=0&&l<=0)return t.copy(i);Us.subVectors(e,r);const u=ci.dot(Us),d=ui.dot(Us);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ci,a);Is.subVectors(e,s);const m=ci.dot(Is),_=ui.dot(Is);if(_>=0&&m<=_)return t.copy(s);const x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(ui,o);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return Oo.subVectors(s,r),o=(d-u)/(d-u+(m-_)),t.copy(r).addScaledVector(Oo,o);const f=1/(p+x+h);return a=x*f,o=h*f,t.copy(i).addScaledVector(ci,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Bs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Ju(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Bs(a,s,e+1/3),this.g=Bs(a,s,e),this.b=Bs(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=ac[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ze.fromWorkingColorSpace(Mt.copy(this),e),Math.round(We(Mt.r*255,0,255))*65536+Math.round(We(Mt.g*255,0,255))*256+Math.round(We(Mt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Mt.copy(this),t);const i=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=zt){Ze.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,r=Mt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(xr);const i=Ss(Tn.h,xr.h,t),r=Ss(Tn.s,xr.s,t),s=Ss(Tn.l,xr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Mt=new Ge;Ge.NAMES=ac;let gf=0;class Di extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=vi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(i.blending=this.blending),this.side!==Pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ea&&(i.blendSrc=this.blendSrc),this.blendDst!==ta&&(i.blendDst=this.blendDst),this.blendEquation!==Vn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class to extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new O,Mr=new Qe;let vf=0;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=To,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==To&&(e.usage=this.usage),e}}class oc extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lc extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vt extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xf=0;const Bt=new at,zs=new gt,fi=new O,It=new ir,Yi=new ir,pt=new O;class sn extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tc(e)?lc:oc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return zs.lookAt(e),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];It.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(It.min,Yi.min),It.expandByPoint(pt),pt.addVectors(It.max,Yi.max),It.expandByPoint(pt)):(It.expandByPoint(Yi.min),It.expandByPoint(Yi.max))}It.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)pt.fromBufferAttribute(o,l),c&&(fi.fromBufferAttribute(e,l),pt.add(fi)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new O,c[N]=new O;const l=new O,u=new O,d=new O,h=new Qe,m=new Qe,_=new Qe,x=new O,p=new O;function f(N,E,M){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),u.sub(l),d.sub(l),m.sub(h),_.sub(h);const A=1/(m.x*_.y-_.x*m.y);isFinite(A)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(A),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(A),o[N].add(x),o[E].add(x),o[M].add(x),c[N].add(p),c[E].add(p),c[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,E=b.length;N<E;++N){const M=b[N],A=M.start,k=M.count;for(let B=A,V=A+k;B<V;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new O,S=new O,C=new O,P=new O;function D(N){C.fromBufferAttribute(r,N),P.copy(C);const E=o[N];T.copy(E),T.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(P,E);const A=S.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,A)}for(let N=0,E=b.length;N<E;++N){const M=b[N],A=M.start,k=M.count;for(let B=A,V=A+k;B<V;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let m=0,_=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let f=0;f<u;f++)h[_++]=l[m++]}return new tn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bo=new at,Fn=new rc,Sr=new ls,zo=new O,Er=new O,yr=new O,Tr=new O,Hs=new O,br=new O,Ho=new O,Ar=new O;class Kt extends gt{constructor(e=new sn,t=new to){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(Hs.fromBufferAttribute(d,e),a?br.addScaledVector(Hs,u):br.addScaledVector(Hs.sub(t),u))}t.add(br)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere),Sr.applyMatrix4(s),Fn.copy(e.ray).recast(e.near),!(Sr.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(Sr,zo)===null||Fn.origin.distanceToSquared(zo)>(e.far-e.near)**2))&&(Bo.copy(s).invert(),Fn.copy(e.ray).applyMatrix4(Bo),!(i.boundingBox!==null&&Fn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],f=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,C=T;S<C;S+=3){const P=o.getX(S),D=o.getX(S+1),N=o.getX(S+2);r=wr(this,f,e,i,l,u,d,P,D,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const b=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);r=wr(this,a,e,i,l,u,d,b,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],f=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,C=T;S<C;S+=3){const P=S,D=S+1,N=S+2;r=wr(this,f,e,i,l,u,d,P,D,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const b=p,T=p+1,S=p+2;r=wr(this,a,e,i,l,u,d,b,T,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Mf(n,e,t,i,r,s,a,o){let c;if(e.side===wt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Pn,o),c===null)return null;Ar.copy(o),Ar.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ar);return l<t.near||l>t.far?null:{distance:l,point:Ar.clone(),object:n}}function wr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Er),n.getVertexPosition(c,yr),n.getVertexPosition(l,Tr);const u=Mf(n,e,t,i,Er,yr,Tr,Ho);if(u){const d=new O;Gt.getBarycoord(Ho,Er,yr,Tr,d),r&&(u.uv=Gt.getInterpolatedAttribute(r,o,c,l,d,new Qe)),s&&(u.uv1=Gt.getInterpolatedAttribute(s,o,c,l,d,new Qe)),a&&(u.normal=Gt.getInterpolatedAttribute(a,o,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new O,materialIndex:0};Gt.getNormal(Er,yr,Tr,h.normal),u.face=h,u.barycoord=d}return u}class Li extends sn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(d,2));function _(x,p,f,b,T,S,C,P,D,N,E){const M=S/D,A=C/N,k=S/2,B=C/2,V=P/2,Z=D+1,W=N+1;let Q=0,R=0;const q=new O;for(let te=0;te<W;te++){const de=te*A-B;for(let Ae=0;Ae<Z;Ae++){const De=Ae*M-k;q[x]=De*b,q[p]=de*T,q[f]=V,l.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[f]=P>0?1:-1,u.push(q.x,q.y,q.z),d.push(Ae/D),d.push(1-te/N),Q+=1}}for(let te=0;te<N;te++)for(let de=0;de<D;de++){const Ae=h+de+Z*te,De=h+de+Z*(te+1),X=h+(de+1)+Z*(te+1),ne=h+(de+1)+Z*te;c.push(Ae,De,ne),c.push(De,X,ne),R+=6}o.addGroup(m,R,E),m+=R,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=Ri(n[t]);for(const r in i)e[r]=i[r]}return e}function Sf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ef={clone:Ri,merge:Et};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=Sf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class uc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new O,Go=new Qe,Vo=new Qe;class Ht extends uc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,t){return this.getViewBounds(e,Go,Vo),t.subVectors(Vo,Go)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hi=-90,di=1;class bf extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(hi,di,e,t);r.layers=this.layers,this.add(r);const s=new Ht(hi,di,e,t);s.layers=this.layers,this.add(s);const a=new Ht(hi,di,e,t);a.layers=this.layers,this.add(a);const o=new Ht(hi,di,e,t);o.layers=this.layers,this.add(o);const c=new Ht(hi,di,e,t);c.layers=this.layers,this.add(c);const l=new Ht(hi,di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class fc extends Rt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:yi,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Li(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Ri(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wt,blending:Rn});s.uniforms.tEquirect.value=t;const a=new Kt(r,s),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=en),new bf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Rr extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wf={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),f=this._getHandJoint(l,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Rf extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vs=new O,Cf=new O,Pf=new Ne;class Hn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vs.subVectors(i,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pf.getNormalMatrix(e),r=this.coplanarPoint(Vs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new ls,Cr=new O;class no{constructor(e=new Hn,t=new Hn,i=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],f=r[12],b=r[13],T=r[14],S=r[15];if(i[0].setComponents(c-s,h-l,p-m,S-f).normalize(),i[1].setComponents(c+s,h+l,p+m,S+f).normalize(),i[2].setComponents(c+a,h+u,p+_,S+b).normalize(),i[3].setComponents(c-a,h-u,p-_,S-b).normalize(),i[4].setComponents(c-o,h-d,p-x,S-T).normalize(),t===mn)i[5].setComponents(c+o,h+d,p+x,S+T).normalize();else if(t===jr)i[5].setComponents(o,d,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Cr.x=r.normal.x>0?e.max.x:e.min.x,Cr.y=r.normal.y>0?e.max.y:e.min.y,Cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class io extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qr=new O,es=new O,ko=new at,$i=new rc,Pr=new ls,ks=new O,Wo=new O;class Df extends gt{constructor(e=new sn,t=new io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Qr.fromBufferAttribute(t,r-1),es.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Qr.distanceTo(es);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(r),Pr.radius+=s,e.ray.intersectsSphere(Pr)===!1)return;ko.copy(r).invert(),$i.copy(e.ray).applyMatrix4(ko);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=l){const f=u.getX(x),b=u.getX(x+1),T=Dr(this,e,$i,c,f,b,x);T&&t.push(T)}if(this.isLineLoop){const x=u.getX(_-1),p=u.getX(m),f=Dr(this,e,$i,c,x,p,_-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=l){const f=Dr(this,e,$i,c,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=Dr(this,e,$i,c,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Dr(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Qr.fromBufferAttribute(o,r),es.fromBufferAttribute(o,s),t.distanceSqToSegment(Qr,es,ks,Wo)>i)return;ks.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ks);if(!(l<e.near||l>e.far))return{distance:l,point:Wo.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Xo=new O,qo=new O;class hc extends Df{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Xo.fromBufferAttribute(t,r),qo.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Xo.distanceTo(qo);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dc extends Rt{constructor(e,t,i,r,s,a,o,c,l,u=xi){if(u!==xi&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xi&&(i=$n),i===void 0&&u===Ai&&(i=bi),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lr=new O,Ur=new O,Ws=new O,Ir=new Gt;class Lf extends sn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Yr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},m=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:x,b:p,c:f}=Ir;if(x.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),Ir.getNormal(Ws),d[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const T=(b+1)%3,S=d[b],C=d[T],P=Ir[u[b]],D=Ir[u[T]],N=`${S}_${C}`,E=`${C}_${S}`;E in h&&h[E]?(Ws.dot(h[E].normal)<=s&&(m.push(P.x,P.y,P.z),m.push(D.x,D.y,D.z)),h[E]=null):N in h||(h[N]={index0:l[b],index1:l[T],normal:Ws.clone()})}}for(const _ in h)if(h[_]){const{index0:x,index1:p}=h[_];Lr.fromBufferAttribute(o,x),Ur.fromBufferAttribute(o,p),m.push(Lr.x,Lr.y,Lr.z),m.push(Ur.x,Ur.y,Ur.z)}this.setAttribute("position",new Vt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class rr extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,h=t/c,m=[],_=[],x=[],p=[];for(let f=0;f<u;f++){const b=f*h-a;for(let T=0;T<l;T++){const S=T*d-s;_.push(S,-b,0),x.push(0,0,1),p.push(T/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){const T=b+l*f,S=b+l*(f+1),C=b+1+l*(f+1),P=b+1+l*f;m.push(T,S,P),m.push(S,C,P)}this.setIndex(m),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Uf extends Di{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class If extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nf extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ro extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xs=new at,Yo=new O,$o=new O;class Ff{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yo),$o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($o),t.updateMatrixWorld(),Xs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pc extends uc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Of extends Ff{constructor(){super(new pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bf extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Of}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zf extends ro{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hf extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Ko extends hc{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let h=0,m=0,_=-o;h<=t;h++,_+=a){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const x=h===s?i:r;x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3}const u=new sn;u.setAttribute("position",new Vt(c,3)),u.setAttribute("color",new Vt(l,3));const d=new io({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Zo(n,e,t,i){const r=Gf(i);switch(t){case ql:return n*e;case $l:return n*e;case Kl:return n*e*2;case Zl:return n*e/r.components*r.byteLength;case Ja:return n*e/r.components*r.byteLength;case jl:return n*e*2/r.components*r.byteLength;case Qa:return n*e*2/r.components*r.byteLength;case Yl:return n*e*3/r.components*r.byteLength;case $t:return n*e*4/r.components*r.byteLength;case eo:return n*e*4/r.components*r.byteLength;case Vr:case kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pa:case _a:return Math.max(n,16)*Math.max(e,8)/4;case da:case ma:return Math.max(n,8)*Math.max(e,8)/2;case ga:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qr:case Ia:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jl:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oa:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(n){switch(n){case gn:case kl:return{byteLength:1,components:1};case Zi:case Wl:case er:return{byteLength:2,components:1};case Za:case ja:return{byteLength:2,components:4};case $n:case Ka:case pn:return{byteLength:4,components:1};case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vf(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){const _=d[h],x=d[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,d[h]=x)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){const x=d[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
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
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nh=`#ifdef USE_IRIDESCENCE
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
#endif`,ih=`#ifdef USE_BUMPMAP
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
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hh=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ph=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ah=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ph=`#ifdef USE_GRADIENTMAP
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
}`,Dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ih=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Nh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Gh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vh=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$h=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jh=`#if defined( USE_POINTS_UV )
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
#endif`,Qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rd=`#ifdef USE_MORPHTARGETS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
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
#endif`,hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fd=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kd=`uniform sampler2D t2D;
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
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
}`,Kd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zd=`#define DISTANCE
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
}`,jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`uniform float scale;
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 diffuse;
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
}`,rp=`#define LAMBERT
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
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ap=`#define MATCAP
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
}`,op=`#define MATCAP
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
}`,lp=`#define NORMAL
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
}`,cp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,up=`#define PHONG
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
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,hp=`#define STANDARD
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
}`,dp=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,pp=`#define TOON
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
}`,mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_p=`uniform float size;
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
}`,gp=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mp=`uniform float rotation;
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
}`,Sp=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:kf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:$f,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:jf,batching_vertex:Jf,begin_vertex:Qf,beginnormal_vertex:eh,bsdfs:th,iridescence_fragment:nh,bumpmap_pars_fragment:ih,clipping_planes_fragment:rh,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:oh,color_fragment:lh,color_pars_fragment:ch,color_pars_vertex:uh,color_vertex:fh,common:hh,cube_uv_reflection_fragment:dh,defaultnormal_vertex:ph,displacementmap_pars_vertex:mh,displacementmap_vertex:_h,emissivemap_fragment:gh,emissivemap_pars_fragment:vh,colorspace_fragment:xh,colorspace_pars_fragment:Mh,envmap_fragment:Sh,envmap_common_pars_fragment:Eh,envmap_pars_fragment:yh,envmap_pars_vertex:Th,envmap_physical_pars_fragment:Nh,envmap_vertex:bh,fog_vertex:Ah,fog_pars_vertex:wh,fog_fragment:Rh,fog_pars_fragment:Ch,gradientmap_pars_fragment:Ph,lightmap_pars_fragment:Dh,lights_lambert_fragment:Lh,lights_lambert_pars_fragment:Uh,lights_pars_begin:Ih,lights_toon_fragment:Fh,lights_toon_pars_fragment:Oh,lights_phong_fragment:Bh,lights_phong_pars_fragment:zh,lights_physical_fragment:Hh,lights_physical_pars_fragment:Gh,lights_fragment_begin:Vh,lights_fragment_maps:kh,lights_fragment_end:Wh,logdepthbuf_fragment:Xh,logdepthbuf_pars_fragment:qh,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:$h,map_fragment:Kh,map_pars_fragment:Zh,map_particle_fragment:jh,map_particle_pars_fragment:Jh,metalnessmap_fragment:Qh,metalnessmap_pars_fragment:ed,morphinstance_vertex:td,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:rd,morphtarget_vertex:sd,normal_fragment_begin:ad,normal_fragment_maps:od,normal_pars_fragment:ld,normal_pars_vertex:cd,normal_vertex:ud,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:hd,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,opaque_fragment:_d,packing:gd,premultiplied_alpha_fragment:vd,project_vertex:xd,dithering_fragment:Md,dithering_pars_fragment:Sd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:Td,shadowmap_pars_vertex:bd,shadowmap_vertex:Ad,shadowmask_pars_fragment:wd,skinbase_vertex:Rd,skinning_pars_vertex:Cd,skinning_vertex:Pd,skinnormal_vertex:Dd,specularmap_fragment:Ld,specularmap_pars_fragment:Ud,tonemapping_fragment:Id,tonemapping_pars_fragment:Nd,transmission_fragment:Fd,transmission_pars_fragment:Od,uv_pars_fragment:Bd,uv_pars_vertex:zd,uv_vertex:Hd,worldpos_vertex:Gd,background_vert:Vd,background_frag:kd,backgroundCube_vert:Wd,backgroundCube_frag:Xd,cube_vert:qd,cube_frag:Yd,depth_vert:$d,depth_frag:Kd,distanceRGBA_vert:Zd,distanceRGBA_frag:jd,equirect_vert:Jd,equirect_frag:Qd,linedashed_vert:ep,linedashed_frag:tp,meshbasic_vert:np,meshbasic_frag:ip,meshlambert_vert:rp,meshlambert_frag:sp,meshmatcap_vert:ap,meshmatcap_frag:op,meshnormal_vert:lp,meshnormal_frag:cp,meshphong_vert:up,meshphong_frag:fp,meshphysical_vert:hp,meshphysical_frag:dp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:_p,points_frag:gp,shadow_vert:vp,shadow_frag:xp,sprite_vert:Mp,sprite_frag:Sp},oe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Jt={basic:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Et([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Et([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Et([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Et([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Et([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Et([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Et([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Et([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Et([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Et([oe.lights,oe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Jt.physical={uniforms:Et([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Nr={r:0,b:0,g:0},Bn=new rn,Ep=new at;function yp(n,e,t,i,r,s,a){const o=new Ge(0);let c=s===!0?0:1,l,u,d=null,h=0,m=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1;const C=_(T);C===null?f(o,c):C&&C.isColor&&(f(C,1),S=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,S){const C=_(S);C&&(C.isCubeTexture||C.mapping===os)?(u===void 0&&(u=new Kt(new Li(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ri(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Bn.copy(S.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(Bn)),u.material.toneMapped=Ze.getTransfer(C.colorSpace)!==et,(d!==C||h!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,h=C.version,m=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Kt(new rr(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ri(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(C.colorSpace)!==et,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=C,h=C.version,m=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,S){T.getRGB(Nr,cc(n)),i.buffers.color.setClear(Nr.r,Nr.g,Nr.b,S,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),c=S,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(o,c)},render:x,addToRenderList:p,dispose:b}}function Tp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,A,k,B,V){let Z=!1;const W=d(B,k,A);s!==W&&(s=W,l(s.object)),Z=m(M,B,k,V),Z&&_(M,B,k,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(M,A,k,B),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,A,k){const B=k.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let Z=V[A.id];Z===void 0&&(Z={},V[A.id]=Z);let W=Z[B];return W===void 0&&(W=h(c()),Z[B]=W),W}function h(M){const A=[],k=[],B=[];for(let V=0;V<t;V++)A[V]=0,k[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function m(M,A,k,B){const V=s.attributes,Z=A.attributes;let W=0;const Q=k.getAttributes();for(const R in Q)if(Q[R].location>=0){const te=V[R];let de=Z[R];if(de===void 0&&(R==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),R==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),te===void 0||te.attribute!==de||de&&te.data!==de.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function _(M,A,k,B){const V={},Z=A.attributes;let W=0;const Q=k.getAttributes();for(const R in Q)if(Q[R].location>=0){let te=Z[R];te===void 0&&(R==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),R==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const de={};de.attribute=te,te&&te.data&&(de.data=te.data),V[R]=de,W++}s.attributes=V,s.attributesNum=W,s.index=B}function x(){const M=s.newAttributes;for(let A=0,k=M.length;A<k;A++)M[A]=0}function p(M){f(M,0)}function f(M,A){const k=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;k[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),V[M]!==A&&(n.vertexAttribDivisor(M,A),V[M]=A)}function b(){const M=s.newAttributes,A=s.enabledAttributes;for(let k=0,B=A.length;k<B;k++)A[k]!==M[k]&&(n.disableVertexAttribArray(k),A[k]=0)}function T(M,A,k,B,V,Z,W){W===!0?n.vertexAttribIPointer(M,A,k,V,Z):n.vertexAttribPointer(M,A,k,B,V,Z)}function S(M,A,k,B){x();const V=B.attributes,Z=k.getAttributes(),W=A.defaultAttributeValues;for(const Q in Z){const R=Z[Q];if(R.location>=0){let q=V[Q];if(q===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const te=q.normalized,de=q.itemSize,Ae=e.get(q);if(Ae===void 0)continue;const De=Ae.buffer,X=Ae.type,ne=Ae.bytesPerElement,me=X===n.INT||X===n.UNSIGNED_INT||q.gpuType===Ka;if(q.isInterleavedBufferAttribute){const re=q.data,xe=re.stride,Be=q.offset;if(re.isInstancedInterleavedBuffer){for(let be=0;be<R.locationSize;be++)f(R.location+be,re.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<R.locationSize;be++)p(R.location+be);n.bindBuffer(n.ARRAY_BUFFER,De);for(let be=0;be<R.locationSize;be++)T(R.location+be,de/R.locationSize,X,te,xe*ne,(Be+de/R.locationSize*be)*ne,me)}else{if(q.isInstancedBufferAttribute){for(let re=0;re<R.locationSize;re++)f(R.location+re,q.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let re=0;re<R.locationSize;re++)p(R.location+re);n.bindBuffer(n.ARRAY_BUFFER,De);for(let re=0;re<R.locationSize;re++)T(R.location+re,de/R.locationSize,X,te,de*ne,de/R.locationSize*re*ne,me)}}else if(W!==void 0){const te=W[Q];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(R.location,te);break;case 3:n.vertexAttrib3fv(R.location,te);break;case 4:n.vertexAttrib4fv(R.location,te);break;default:n.vertexAttrib1fv(R.location,te)}}}}b()}function C(){N();for(const M in i){const A=i[M];for(const k in A){const B=A[k];for(const V in B)u(B[V].object),delete B[V];delete A[k]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const A=i[M.id];for(const k in A){const B=A[k];for(const V in B)u(B[V].object),delete B[V];delete A[k]}delete i[M.id]}function D(M){for(const A in i){const k=i[A];if(k[M.id]===void 0)continue;const B=k[M.id];for(const V in B)u(B[V].object),delete B[V];delete k[M.id]}}function N(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function bp(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];t.update(m,i,1)}function c(l,u,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ap(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==$t&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const N=D===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==gn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==pn&&!N)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:C,maxSamples:P}}function wp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Hn,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):l();else{const b=s?0:i,T=b*4;let S=f.clippingState||null;c.value=S,S=u(_,h,T,m);for(let C=0;C!==T;++C)S[C]=t[C];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const f=m+x*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,S=m;T!==x;++T,S+=4)a.copy(d[T]).applyMatrix4(b,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Rp(n){let e=new WeakMap;function t(a,o){return o===ca?a.mapping=yi:o===ua&&(a.mapping=Ti),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ca||o===ua)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Af(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const _i=4,jo=[.125,.215,.35,.446,.526,.582],kn=20,qs=new pc,Jo=new Ge;let Ys=null,$s=0,Ks=0,Zs=!1;const Gn=(1+Math.sqrt(5))/2,pi=1/Gn,Qo=[new O(-Gn,pi,0),new O(Gn,pi,0),new O(-pi,0,Gn),new O(pi,0,Gn),new O(0,Gn,-pi),new O(0,Gn,pi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class el{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ys=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ys,$s,Ks),this._renderer.xr.enabled=Zs,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ys=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),Zs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:er,format:$t,colorSpace:wi,depthBuffer:!1},r=tl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(s)),this._blurMaterial=Pp(s,e,t)}return r}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,i,r){const o=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Jo),u.toneMapping=Cn,u.autoClear=!1;const m=new to({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),_=new Kt(new Li,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Jo),x=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):b===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const T=this._cubeSize;Fr(r,b*T,f>2?T:0,T,T),u.setRenderTarget(r),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===yi||e.mapping===Ti;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Fr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,qs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qo[(r-s-1)%Qo.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Kt(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kn-1),x=s/_,p=isFinite(s)?1+Math.floor(u*x):kn;p>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);const f=[];let b=0;for(let D=0;D<kn;++D){const N=D/x,E=Math.exp(-N*N/2);f.push(E),D===0?b+=E:D<p&&(b+=2*E)}for(let D=0;D<f.length;D++)f[D]=f[D]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-i;const S=this._sizeLods[r],C=3*S*(r>T-_i?r-T+_i:0),P=4*(this._cubeSize-S);Fr(t,C,P,3*S,2*S),c.setRenderTarget(t),c.render(d,qs)}}function Cp(n){const e=[],t=[],i=[];let r=n;const s=n-_i+1+jo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-_i?c=jo[a-n+_i-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,x=3,p=2,f=1,b=new Float32Array(x*_*m),T=new Float32Array(p*_*m),S=new Float32Array(f*_*m);for(let P=0;P<m;P++){const D=P%3*2/3-1,N=P>2?0:-1,E=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];b.set(E,x*_*P),T.set(h,p*_*P);const M=[P,P,P,P,P,P];S.set(M,f*_*P)}const C=new sn;C.setAttribute("position",new tn(b,x)),C.setAttribute("uv",new tn(T,p)),C.setAttribute("faceIndex",new tn(S,f)),e.push(C),r>_i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tl(n,e,t){const i=new Kn(n,e,t);return i.texture.mapping=os,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Pp(n,e,t){const i=new Float32Array(kn),r=new O(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function nl(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function il(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===ca||c===ua,u=c===yi||c===Ti;if(l||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new el(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new el(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Lp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&mi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Up(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function l(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let T=0,S=b.length;T<S;T+=3){const C=b[T+0],P=b[T+1],D=b[T+2];h.push(C,P,P,D,D,C)}}else if(_!==void 0){const b=_.array;x=_.version;for(let T=0,S=b.length/3-1;T<S;T+=3){const C=T+0,P=T+1,D=T+2;h.push(C,P,P,D,D,C)}}else return;const p=new(tc(h)?lc:oc)(h,1);p.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Ip(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,m){n.drawElements(i,m,s,h*a),t.update(m,i,1)}function l(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,h*a,_),t.update(m,i,_))}function u(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,i,1)}function d(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)l(h[f]/a,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,_);let f=0;for(let b=0;b<_;b++)f+=m[b]*x[b];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Np(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Fp(n,e,t){const i=new WeakMap,r=new lt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let E=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),x===!0&&(T=3);let S=o.attributes.position.count*T,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*C*4*d),D=new ic(P,S,C,d);D.type=pn,D.needsUpdate=!0;const N=T*4;for(let M=0;M<d;M++){const A=p[M],k=f[M],B=b[M],V=S*C*4*M;for(let Z=0;Z<A.count;Z++){const W=Z*N;m===!0&&(r.fromBufferAttribute(A,Z),P[V+W+0]=r.x,P[V+W+1]=r.y,P[V+W+2]=r.z,P[V+W+3]=0),_===!0&&(r.fromBufferAttribute(k,Z),P[V+W+4]=r.x,P[V+W+5]=r.y,P[V+W+6]=r.z,P[V+W+7]=0),x===!0&&(r.fromBufferAttribute(B,Z),P[V+W+8]=r.x,P[V+W+9]=r.y,P[V+W+10]=r.z,P[V+W+11]=B.itemSize===4?r.w:1)}}h={count:d,texture:D,size:new Qe(S,C)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Op(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const _c=new Rt,rl=new dc(1,1),gc=new ic,vc=new cf,xc=new fc,sl=[],al=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Ui(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=sl[r];if(s===void 0&&(s=new Float32Array(r),sl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cs(n,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function Hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function Gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function Vp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,i))return;cl.set(i),n.uniformMatrix2fv(this.addr,!1,cl),ht(t,i)}}function kp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,i))return;ll.set(i),n.uniformMatrix3fv(this.addr,!1,ll),ht(t,i)}}function Wp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ft(t,i))return;ol.set(i),n.uniformMatrix4fv(this.addr,!1,ol),ht(t,i)}}function Xp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),ht(t,e)}}function Yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),ht(t,e)}}function $p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),ht(t,e)}}function Kp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),ht(t,e)}}function jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),ht(t,e)}}function Jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),ht(t,e)}}function Qp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(rl.compareFunction=ec,s=rl):s=_c,t.setTexture2D(e||s,r)}function em(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vc,r)}function tm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xc,r)}function nm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gc,r)}function im(n){switch(n){case 5126:return Bp;case 35664:return zp;case 35665:return Hp;case 35666:return Gp;case 35674:return Vp;case 35675:return kp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return $p;case 5125:return Kp;case 36294:return Zp;case 36295:return jp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}function rm(n,e){n.uniform1fv(this.addr,e)}function sm(n,e){const t=Ui(e,this.size,2);n.uniform2fv(this.addr,t)}function am(n,e){const t=Ui(e,this.size,3);n.uniform3fv(this.addr,t)}function om(n,e){const t=Ui(e,this.size,4);n.uniform4fv(this.addr,t)}function lm(n,e){const t=Ui(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cm(n,e){const t=Ui(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function um(n,e){const t=Ui(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fm(n,e){n.uniform1iv(this.addr,e)}function hm(n,e){n.uniform2iv(this.addr,e)}function dm(n,e){n.uniform3iv(this.addr,e)}function pm(n,e){n.uniform4iv(this.addr,e)}function mm(n,e){n.uniform1uiv(this.addr,e)}function _m(n,e){n.uniform2uiv(this.addr,e)}function gm(n,e){n.uniform3uiv(this.addr,e)}function vm(n,e){n.uniform4uiv(this.addr,e)}function xm(n,e,t){const i=this.cache,r=e.length,s=cs(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||_c,s[a])}function Mm(n,e,t){const i=this.cache,r=e.length,s=cs(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||vc,s[a])}function Sm(n,e,t){const i=this.cache,r=e.length,s=cs(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||xc,s[a])}function Em(n,e,t){const i=this.cache,r=e.length,s=cs(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||gc,s[a])}function ym(n){switch(n){case 5126:return rm;case 35664:return sm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return hm;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return _m;case 36295:return gm;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Em}}class Tm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=im(t.type)}}class bm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ym(t.type)}}class Am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const js=/(\w+)(\])?(\[|\.)?/g;function ul(n,e){n.seq.push(e),n.map[e.id]=e}function wm(n,e,t){const i=n.name,r=i.length;for(js.lastIndex=0;;){const s=js.exec(i),a=js.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ul(t,l===void 0?new Tm(o,n,e):new bm(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Am(o),ul(t,d)),t=d}}}class $r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);wm(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function fl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rm=37297;let Cm=0;function Pm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const hl=new Ne;function Dm(n){Ze._getMatrix(hl,Ze.workingColorSpace,n);const e=`mat3( ${hl.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Zr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function dl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Pm(n.getShaderSource(e),a)}else return r}function Lm(n,e){const t=Dm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Um(n,e){let t;switch(e){case Iu:t="Linear";break;case Nu:t="Reinhard";break;case Fu:t="Cineon";break;case Ou:t="ACESFilmic";break;case zu:t="AgX";break;case Hu:t="Neutral";break;case Bu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Or=new O;function Im(){Ze.getLuminanceCoefficients(Or);const n=Or.x.toFixed(4),e=Or.y.toFixed(4),t=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Fm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Om(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ki(n){return n!==""}function pl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ml(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(n){return n.replace(Bm,Hm)}const zm=new Map;function Hm(n,e){let t=Fe[e];if(t===void 0){const i=zm.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ha(t)}const Gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(n){return n.replace(Gm,Vm)}function Vm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function km(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===du?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yi:case Ti:e="ENVMAP_TYPE_CUBE";break;case os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function qm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $a:e="ENVMAP_BLENDING_MULTIPLY";break;case Lu:e="ENVMAP_BLENDING_MIX";break;case Uu:e="ENVMAP_BLENDING_ADD";break}return e}function Ym(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $m(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=km(t),l=Wm(t),u=Xm(t),d=qm(t),h=Ym(t),m=Nm(t),_=Fm(s),x=r.createProgram();let p,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ki).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ki).join(`
`),f.length>0&&(f+=`
`)):(p=[gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),f=[gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Um("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Lm("linearToOutputTexel",t.outputColorSpace),Im(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=Ha(a),a=pl(a,t),a=ml(a,t),o=Ha(o),o=pl(o,t),o=ml(o,t),a=_l(a),o=_l(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=b+p+a,S=b+f+o,C=fl(r,r.VERTEX_SHADER,T),P=fl(r,r.FRAGMENT_SHADER,S);r.attachShader(x,C),r.attachShader(x,P),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(A){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(P).trim();let Z=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,P);else{const Q=dl(r,C,"vertex"),R=dl(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+Q+`
`+R)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||V==="")&&(W=!1);W&&(A.diagnostics={runnable:Z,programLog:k,vertexShader:{log:B,prefix:p},fragmentShader:{log:V,prefix:f}})}r.deleteShader(C),r.deleteShader(P),N=new $r(r,x),E=Om(r,x)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Rm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=P,this}let Km=0;class Zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jm(e),t.set(e,i)),i}}class jm{constructor(e){this.id=Km++,this.code=e,this.usedTimes=0}}function Jm(n,e,t,i,r,s,a){const o=new sc,c=new Zm,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,M,A,k,B){const V=k.fog,Z=B.geometry,W=E.isMeshStandardMaterial?k.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),R=Q&&Q.mapping===os?Q.image.height:null,q=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const te=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,de=te!==void 0?te.length:0;let Ae=0;Z.morphAttributes.position!==void 0&&(Ae=1),Z.morphAttributes.normal!==void 0&&(Ae=2),Z.morphAttributes.color!==void 0&&(Ae=3);let De,X,ne,me;if(q){const qe=Jt[q];De=qe.vertexShader,X=qe.fragmentShader}else De=E.vertexShader,X=E.fragmentShader,c.update(E),ne=c.getVertexShaderID(E),me=c.getFragmentShaderID(E);const re=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,be=B.isBatchedMesh===!0,rt=!!E.map,tt=!!E.matcap,ze=!!Q,w=!!E.aoMap,vt=!!E.lightMap,Oe=!!E.bumpMap,Ve=!!E.normalMap,Se=!!E.displacementMap,$e=!!E.emissiveMap,Ee=!!E.metalnessMap,y=!!E.roughnessMap,g=E.anisotropy>0,F=E.clearcoat>0,K=E.dispersion>0,j=E.iridescence>0,Y=E.sheen>0,Me=E.transmission>0,ce=g&&!!E.anisotropyMap,ie=F&&!!E.clearcoatMap,Ce=F&&!!E.clearcoatNormalMap,J=F&&!!E.clearcoatRoughnessMap,se=j&&!!E.iridescenceMap,ve=j&&!!E.iridescenceThicknessMap,_e=Y&&!!E.sheenColorMap,fe=Y&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,we=!!E.specularColorMap,Xe=!!E.specularIntensityMap,L=Me&&!!E.transmissionMap,ae=Me&&!!E.thicknessMap,G=!!E.gradientMap,$=!!E.alphaMap,he=E.alphaTest>0,le=!!E.alphaHash,Le=!!E.extensions;let nt=Cn;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(nt=n.toneMapping);const dt={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:De,fragmentShader:X,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:be,batchingColor:be&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:wi,alphaToCoverage:!!E.alphaToCoverage,map:rt,matcap:tt,envMap:ze,envMapMode:ze&&Q.mapping,envMapCubeUVHeight:R,aoMap:w,lightMap:vt,bumpMap:Oe,normalMap:Ve,displacementMap:h&&Se,emissiveMap:$e,normalMapObjectSpace:Ve&&E.normalMapType===Wu,normalMapTangentSpace:Ve&&E.normalMapType===Ql,metalnessMap:Ee,roughnessMap:y,anisotropy:g,anisotropyMap:ce,clearcoat:F,clearcoatMap:ie,clearcoatNormalMap:Ce,clearcoatRoughnessMap:J,dispersion:K,iridescence:j,iridescenceMap:se,iridescenceThicknessMap:ve,sheen:Y,sheenColorMap:_e,sheenRoughnessMap:fe,specularMap:Ie,specularColorMap:we,specularIntensityMap:Xe,transmission:Me,transmissionMap:L,thicknessMap:ae,gradientMap:G,opaque:E.transparent===!1&&E.blending===vi&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:he,alphaHash:le,combine:E.combine,mapUv:rt&&x(E.map.channel),aoMapUv:w&&x(E.aoMap.channel),lightMapUv:vt&&x(E.lightMap.channel),bumpMapUv:Oe&&x(E.bumpMap.channel),normalMapUv:Ve&&x(E.normalMap.channel),displacementMapUv:Se&&x(E.displacementMap.channel),emissiveMapUv:$e&&x(E.emissiveMap.channel),metalnessMapUv:Ee&&x(E.metalnessMap.channel),roughnessMapUv:y&&x(E.roughnessMap.channel),anisotropyMapUv:ce&&x(E.anisotropyMap.channel),clearcoatMapUv:ie&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(E.sheenRoughnessMap.channel),specularMapUv:Ie&&x(E.specularMap.channel),specularColorMapUv:we&&x(E.specularColorMap.channel),specularIntensityMapUv:Xe&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:ae&&x(E.thicknessMap.channel),alphaMapUv:$&&x(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ve||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(rt||$),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:xe,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:rt&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===et,decodeVideoTextureEmissive:$e&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qt,flipSided:E.side===wt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)M.push(A),M.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(b(M,E),T(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function T(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const M=_[E.type];let A;if(M){const k=Jt[M];A=Ef.clone(k.uniforms)}else A=E.uniforms;return A}function C(E,M){let A;for(let k=0,B=u.length;k<B;k++){const V=u[k];if(V.cacheKey===M){A=V,++A.usedTimes;break}}return A===void 0&&(A=new $m(n,M,E,s),u.push(A)),A}function P(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function D(E){c.remove(E)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:N}}function Qm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function e_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,m,_,x,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=p),e++,f}function o(d,h,m,_,x,p){const f=a(d,h,m,_,x,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,_,x,p){const f=a(d,h,m,_,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||e_),i.length>1&&i.sort(h||vl),r.length>1&&r.sort(h||vl)}function u(){for(let d=e,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function t_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new xl,n.set(i,[a])):r>=s.length?(a=new xl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function n_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ge};break;case"SpotLight":t={position:new O,direction:new O,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function i_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let r_=0;function s_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a_(n){const e=new n_,t=i_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const r=new O,s=new at,a=new at;function o(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,x=0,p=0,f=0,b=0,T=0,S=0,C=0,P=0,D=0;l.sort(s_);for(let E=0,M=l.length;E<M;E++){const A=l[E],k=A.color,B=A.intensity,V=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=k.r*B,d+=k.g*B,h+=k.b*B;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],B);D++}else if(A.isDirectionalLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Q=A.shadow,R=t.get(A);R.shadowIntensity=Q.intensity,R.shadowBias=Q.bias,R.shadowNormalBias=Q.normalBias,R.shadowRadius=Q.radius,R.shadowMapSize=Q.mapSize,i.directionalShadow[m]=R,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=A.shadow.matrix,b++}i.directional[m]=W,m++}else if(A.isSpotLight){const W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(k).multiplyScalar(B),W.distance=V,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[x]=W;const Q=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,Q.updateMatrices(A),A.castShadow&&P++),i.spotLightMatrix[x]=Q.matrix,A.castShadow){const R=t.get(A);R.shadowIntensity=Q.intensity,R.shadowBias=Q.bias,R.shadowNormalBias=Q.normalBias,R.shadowRadius=Q.radius,R.shadowMapSize=Q.mapSize,i.spotShadow[x]=R,i.spotShadowMap[x]=Z,S++}x++}else if(A.isRectAreaLight){const W=e.get(A);W.color.copy(k).multiplyScalar(B),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=W,p++}else if(A.isPointLight){const W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){const Q=A.shadow,R=t.get(A);R.shadowIntensity=Q.intensity,R.shadowBias=Q.bias,R.shadowNormalBias=Q.normalBias,R.shadowRadius=Q.radius,R.shadowMapSize=Q.mapSize,R.shadowCameraNear=Q.camera.near,R.shadowCameraFar=Q.camera.far,i.pointShadow[_]=R,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=A.shadow.matrix,T++}i.point[_]=W,_++}else if(A.isHemisphereLight){const W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(B),W.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[f]=W,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==f||N.numDirectionalShadows!==b||N.numPointShadows!==T||N.numSpotShadows!==S||N.numSpotMaps!==C||N.numLightProbes!==D)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,N.directionalLength=m,N.pointLength=_,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=f,N.numDirectionalShadows=b,N.numPointShadows=T,N.numSpotShadows=S,N.numSpotMaps=C,N.numLightProbes=D,i.version=r_++)}function c(l,u){let d=0,h=0,m=0,_=0,x=0;const p=u.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const T=l[f];if(T.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(T.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:i}}function Ml(n){const e=new a_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function o_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ml(n),e.set(r,[o])):s>=a.length?(o=new Ml(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u_(n,e,t){let i=new no;const r=new Qe,s=new Qe,a=new lt,o=new If({depthPacking:ku}),c=new Nf,l={},u=t.maxTextureSize,d={[Pn]:wt,[wt]:Pn,[Qt]:Qt},h=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:l_,fragmentShader:c_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Kt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let f=this.type;this.render=function(P,D,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Rn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=f!==hn&&this.type===hn,V=f===hn&&this.type!==hn;for(let Z=0,W=P.length;Z<W;Z++){const Q=P[Z],R=Q.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const q=R.getFrameExtents();if(r.multiply(q),s.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,R.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,R.mapSize.y=s.y)),R.map===null||B===!0||V===!0){const de=this.type!==hn?{minFilter:Zt,magFilter:Zt}:{};R.map!==null&&R.map.dispose(),R.map=new Kn(r.x,r.y,de),R.map.texture.name=Q.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const te=R.getViewportCount();for(let de=0;de<te;de++){const Ae=R.getViewport(de);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),k.viewport(a),R.updateMatrices(Q,de),i=R.getFrustum(),S(D,N,R.camera,Q,this.type)}R.isPointLightShadow!==!0&&this.type===hn&&b(R,N),R.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(E,M,A)};function b(P,D){const N=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Kn(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,N,h,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,N,m,x,null)}function T(P,D,N,E){let M=null;const A=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)M=A;else if(M=N.isPointLight===!0?c:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const k=M.uuid,B=D.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let Z=V[B];Z===void 0&&(Z=M.clone(),V[B]=Z,D.addEventListener("dispose",C)),M=Z}if(M.visible=D.visible,M.wireframe=D.wireframe,E===hn?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:d[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=N}return M}function S(P,D,N,E,M){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===hn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const B=e.update(P),V=P.material;if(Array.isArray(V)){const Z=B.groups;for(let W=0,Q=Z.length;W<Q;W++){const R=Z[W],q=V[R.materialIndex];if(q&&q.visible){const te=T(P,q,E,M);P.onBeforeShadow(n,P,D,N,B,te,R),n.renderBufferDirect(N,null,B,te,P,R),P.onAfterShadow(n,P,D,N,B,te,R)}}}else if(V.visible){const Z=T(P,V,E,M);P.onBeforeShadow(n,P,D,N,B,Z,null),n.renderBufferDirect(N,null,B,Z,P,null),P.onAfterShadow(n,P,D,N,B,Z,null)}}const k=P.children;for(let B=0,V=k.length;B<V;B++)S(k[B],D,N,E,M)}function C(P){P.target.removeEventListener("dispose",C);for(const N in l){const E=l[N],M=P.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const f_={[na]:ia,[ra]:oa,[sa]:la,[Ei]:aa,[ia]:na,[oa]:ra,[la]:sa,[aa]:Ei};function h_(n,e){function t(){let L=!1;const ae=new lt;let G=null;const $=new lt(0,0,0,0);return{setMask:function(he){G!==he&&!L&&(n.colorMask(he,he,he,he),G=he)},setLocked:function(he){L=he},setClear:function(he,le,Le,nt,dt){dt===!0&&(he*=nt,le*=nt,Le*=nt),ae.set(he,le,Le,nt),$.equals(ae)===!1&&(n.clearColor(he,le,Le,nt),$.copy(ae))},reset:function(){L=!1,G=null,$.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,G=null,$=null,he=null;return{setReversed:function(le){if(ae!==le){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const nt=he;he=null,this.setClear(nt)}ae=le},getReversed:function(){return ae},setTest:function(le){le?re(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(le){G!==le&&!L&&(n.depthMask(le),G=le)},setFunc:function(le){if(ae&&(le=f_[le]),$!==le){switch(le){case na:n.depthFunc(n.NEVER);break;case ia:n.depthFunc(n.ALWAYS);break;case ra:n.depthFunc(n.LESS);break;case Ei:n.depthFunc(n.LEQUAL);break;case sa:n.depthFunc(n.EQUAL);break;case aa:n.depthFunc(n.GEQUAL);break;case oa:n.depthFunc(n.GREATER);break;case la:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=le}},setLocked:function(le){L=le},setClear:function(le){he!==le&&(ae&&(le=1-le),n.clearDepth(le),he=le)},reset:function(){L=!1,G=null,$=null,he=null,ae=!1}}}function r(){let L=!1,ae=null,G=null,$=null,he=null,le=null,Le=null,nt=null,dt=null;return{setTest:function(qe){L||(qe?re(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(qe){ae!==qe&&!L&&(n.stencilMask(qe),ae=qe)},setFunc:function(qe,Ct,Pt){(G!==qe||$!==Ct||he!==Pt)&&(n.stencilFunc(qe,Ct,Pt),G=qe,$=Ct,he=Pt)},setOp:function(qe,Ct,Pt){(le!==qe||Le!==Ct||nt!==Pt)&&(n.stencilOp(qe,Ct,Pt),le=qe,Le=Ct,nt=Pt)},setLocked:function(qe){L=qe},setClear:function(qe){dt!==qe&&(n.clearStencil(qe),dt=qe)},reset:function(){L=!1,ae=null,G=null,$=null,he=null,le=null,Le=null,nt=null,dt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,m=[],_=null,x=!1,p=null,f=null,b=null,T=null,S=null,C=null,P=null,D=new Ge(0,0,0),N=0,E=!1,M=null,A=null,k=null,B=null,V=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(R)[1]),W=Q>=1):R.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),W=Q>=2);let q=null,te={};const de=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),De=new lt().fromArray(de),X=new lt().fromArray(Ae);function ne(L,ae,G,$){const he=new Uint8Array(4),le=n.createTexture();n.bindTexture(L,le),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<G;Le++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ae+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return le}const me={};me[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(Ei),Oe(!1),Ve(xo),re(n.CULL_FACE),w(Rn);function re(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function xe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Be(L,ae){return d[L]!==ae?(n.bindFramebuffer(L,ae),d[L]=ae,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function be(L,ae){let G=m,$=!1;if(L){G=h.get(ae),G===void 0&&(G=[],h.set(ae,G));const he=L.textures;if(G.length!==he.length||G[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Le=he.length;le<Le;le++)G[le]=n.COLOR_ATTACHMENT0+le;G.length=he.length,$=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,$=!0);$&&n.drawBuffers(G)}function rt(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const tt={[Vn]:n.FUNC_ADD,[mu]:n.FUNC_SUBTRACT,[_u]:n.FUNC_REVERSE_SUBTRACT};tt[gu]=n.MIN,tt[vu]=n.MAX;const ze={[xu]:n.ZERO,[Mu]:n.ONE,[Su]:n.SRC_COLOR,[ea]:n.SRC_ALPHA,[wu]:n.SRC_ALPHA_SATURATE,[bu]:n.DST_COLOR,[yu]:n.DST_ALPHA,[Eu]:n.ONE_MINUS_SRC_COLOR,[ta]:n.ONE_MINUS_SRC_ALPHA,[Au]:n.ONE_MINUS_DST_COLOR,[Tu]:n.ONE_MINUS_DST_ALPHA,[Ru]:n.CONSTANT_COLOR,[Cu]:n.ONE_MINUS_CONSTANT_COLOR,[Pu]:n.CONSTANT_ALPHA,[Du]:n.ONE_MINUS_CONSTANT_ALPHA};function w(L,ae,G,$,he,le,Le,nt,dt,qe){if(L===Rn){x===!0&&(xe(n.BLEND),x=!1);return}if(x===!1&&(re(n.BLEND),x=!0),L!==pu){if(L!==p||qe!==E){if((f!==Vn||S!==Vn)&&(n.blendEquation(n.FUNC_ADD),f=Vn,S=Vn),qe)switch(L){case vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mo:n.blendFunc(n.ONE,n.ONE);break;case So:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case So:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,T=null,C=null,P=null,D.set(0,0,0),N=0,p=L,E=qe}return}he=he||ae,le=le||G,Le=Le||$,(ae!==f||he!==S)&&(n.blendEquationSeparate(tt[ae],tt[he]),f=ae,S=he),(G!==b||$!==T||le!==C||Le!==P)&&(n.blendFuncSeparate(ze[G],ze[$],ze[le],ze[Le]),b=G,T=$,C=le,P=Le),(nt.equals(D)===!1||dt!==N)&&(n.blendColor(nt.r,nt.g,nt.b,dt),D.copy(nt),N=dt),p=L,E=!1}function vt(L,ae){L.side===Qt?xe(n.CULL_FACE):re(n.CULL_FACE);let G=L.side===wt;ae&&(G=!G),Oe(G),L.blending===vi&&L.transparent===!1?w(Rn):w(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function Ve(L){L!==fu?(re(n.CULL_FACE),L!==A&&(L===xo?n.cullFace(n.BACK):L===hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),A=L}function Se(L){L!==k&&(W&&n.lineWidth(L),k=L)}function $e(L,ae,G){L?(re(n.POLYGON_OFFSET_FILL),(B!==ae||V!==G)&&(n.polygonOffset(ae,G),B=ae,V=G)):xe(n.POLYGON_OFFSET_FILL)}function Ee(L){L?re(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function y(L){L===void 0&&(L=n.TEXTURE0+Z-1),q!==L&&(n.activeTexture(L),q=L)}function g(L,ae,G){G===void 0&&(q===null?G=n.TEXTURE0+Z-1:G=q);let $=te[G];$===void 0&&($={type:void 0,texture:void 0},te[G]=$),($.type!==L||$.texture!==ae)&&(q!==G&&(n.activeTexture(G),q=G),n.bindTexture(L,ae||me[L]),$.type=L,$.texture=ae)}function F(){const L=te[q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){De.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function fe(L){X.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function Ie(L,ae){let G=l.get(ae);G===void 0&&(G=new WeakMap,l.set(ae,G));let $=G.get(L);$===void 0&&($=n.getUniformBlockIndex(ae,L.name),G.set(L,$))}function we(L,ae){const $=l.get(ae).get(L);c.get(ae)!==$&&(n.uniformBlockBinding(ae,$,L.__bindingPointIndex),c.set(ae,$))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,te={},d={},h=new WeakMap,m=[],_=null,x=!1,p=null,f=null,b=null,T=null,S=null,C=null,P=null,D=new Ge(0,0,0),N=0,E=!1,M=null,A=null,k=null,B=null,V=null,De.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:xe,bindFramebuffer:Be,drawBuffers:be,useProgram:rt,setBlending:w,setMaterial:vt,setFlipSided:Oe,setCullFace:Ve,setLineWidth:Se,setPolygonOffset:$e,setScissorTest:Ee,activeTexture:y,bindTexture:g,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:se,texImage3D:ve,updateUBOMapping:Ie,uniformBlockBinding:we,texStorage2D:Ce,texStorage3D:J,texSubImage2D:Y,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:ie,scissor:_e,viewport:fe,reset:Xe}}function d_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):Jr("canvas")}function x(y,g,F){let K=1;const j=Ee(y);if((j.width>F||j.height>F)&&(K=F/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Y=Math.floor(K*j.width),Me=Math.floor(K*j.height);d===void 0&&(d=_(Y,Me));const ce=g?_(Y,Me):d;return ce.width=Y,ce.height=Me,ce.getContext("2d").drawImage(y,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+Me+")."),ce}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),y;return y}function p(y){return y.generateMipmaps}function f(y){n.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,g,F,K,j=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=g;if(g===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),g===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),g===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),g===n.RGBA){const Me=j?Zr:Ze.getTransfer(K);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=Me===et?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(y,g){let F;return y?g===null||g===$n||g===bi?F=n.DEPTH24_STENCIL8:g===pn?F=n.DEPTH32F_STENCIL8:g===Zi&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===$n||g===bi?F=n.DEPTH_COMPONENT24:g===pn?F=n.DEPTH_COMPONENT32F:g===Zi&&(F=n.DEPTH_COMPONENT16),F}function C(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Zt&&y.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function P(y){const g=y.target;g.removeEventListener("dispose",P),N(g),g.isVideoTexture&&u.delete(g)}function D(y){const g=y.target;g.removeEventListener("dispose",D),M(g)}function N(y){const g=i.get(y);if(g.__webglInit===void 0)return;const F=y.source,K=h.get(F);if(K){const j=K[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(y),Object.keys(K).length===0&&h.delete(F)}i.remove(y)}function E(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const F=y.source,K=h.get(F);delete K[g.__cacheKey],a.memory.textures--}function M(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let j=0;j<g.__webglFramebuffer[K].length;j++)n.deleteFramebuffer(g.__webglFramebuffer[K][j]);else n.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)n.deleteFramebuffer(g.__webglFramebuffer[K]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let K=0,j=F.length;K<j;K++){const Y=i.get(F[K]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(F[K])}i.remove(y)}let A=0;function k(){A=0}function B(){const y=A;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),A+=1,y}function V(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Z(y,g){const F=i.get(y);if(y.isVideoTexture&&Se(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const K=y.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,y,g);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function W(y,g){const F=i.get(y);if(y.version>0&&F.__version!==y.version){X(F,y,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function Q(y,g){const F=i.get(y);if(y.version>0&&F.__version!==y.version){X(F,y,g);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function R(y,g){const F=i.get(y);if(y.version>0&&F.__version!==y.version){ne(F,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const q={[fa]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[ha]:n.MIRRORED_REPEAT},te={[Zt]:n.NEAREST,[Gu]:n.NEAREST_MIPMAP_NEAREST,[fr]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Ms]:n.LINEAR_MIPMAP_NEAREST,[Xn]:n.LINEAR_MIPMAP_LINEAR},de={[Xu]:n.NEVER,[ju]:n.ALWAYS,[qu]:n.LESS,[ec]:n.LEQUAL,[Yu]:n.EQUAL,[Zu]:n.GEQUAL,[$u]:n.GREATER,[Ku]:n.NOTEQUAL};function Ae(y,g){if(g.type===pn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===Ms||g.magFilter===fr||g.magFilter===Xn||g.minFilter===en||g.minFilter===Ms||g.minFilter===fr||g.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,q[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,q[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,q[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,te[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,te[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Zt||g.minFilter!==fr&&g.minFilter!==Xn||g.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function De(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",P));const K=g.source;let j=h.get(K);j===void 0&&(j={},h.set(K,j));const Y=V(g);if(Y!==y.__cacheKey){j[Y]===void 0&&(j[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[Y].usedTimes++;const Me=j[y.__cacheKey];Me!==void 0&&(j[y.__cacheKey].usedTimes--,Me.usedTimes===0&&E(g)),y.__cacheKey=Y,y.__webglTexture=j[Y].texture}return F}function X(y,g,F){let K=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=n.TEXTURE_3D);const j=De(y,g),Y=g.source;t.bindTexture(K,y.__webglTexture,n.TEXTURE0+F);const Me=i.get(Y);if(Y.version!==Me.__version||j===!0){t.activeTexture(n.TEXTURE0+F);const ce=Ze.getPrimaries(Ze.workingColorSpace),ie=g.colorSpace===wn?null:Ze.getPrimaries(g.colorSpace),Ce=g.colorSpace===wn||ce===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let J=x(g.image,!1,r.maxTextureSize);J=$e(g,J);const se=s.convert(g.format,g.colorSpace),ve=s.convert(g.type);let _e=T(g.internalFormat,se,ve,g.colorSpace,g.isVideoTexture);Ae(K,g);let fe;const Ie=g.mipmaps,we=g.isVideoTexture!==!0,Xe=Me.__version===void 0||j===!0,L=Y.dataReady,ae=C(g,J);if(g.isDepthTexture)_e=S(g.format===Ai,g.type),Xe&&(we?t.texStorage2D(n.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,_e,J.width,J.height,0,se,ve,null));else if(g.isDataTexture)if(Ie.length>0){we&&Xe&&t.texStorage2D(n.TEXTURE_2D,ae,_e,Ie[0].width,Ie[0].height);for(let G=0,$=Ie.length;G<$;G++)fe=Ie[G],we?L&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,fe.width,fe.height,se,ve,fe.data):t.texImage2D(n.TEXTURE_2D,G,_e,fe.width,fe.height,0,se,ve,fe.data);g.generateMipmaps=!1}else we?(Xe&&t.texStorage2D(n.TEXTURE_2D,ae,_e,J.width,J.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,se,ve,J.data)):t.texImage2D(n.TEXTURE_2D,0,_e,J.width,J.height,0,se,ve,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){we&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,_e,Ie[0].width,Ie[0].height,J.depth);for(let G=0,$=Ie.length;G<$;G++)if(fe=Ie[G],g.format!==$t)if(se!==null)if(we){if(L)if(g.layerUpdates.size>0){const he=Zo(fe.width,fe.height,g.format,g.type);for(const le of g.layerUpdates){const Le=fe.data.subarray(le*he/fe.data.BYTES_PER_ELEMENT,(le+1)*he/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,le,fe.width,fe.height,1,se,Le)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,fe.width,fe.height,J.depth,se,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,_e,fe.width,fe.height,J.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,fe.width,fe.height,J.depth,se,ve,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,_e,fe.width,fe.height,J.depth,0,se,ve,fe.data)}else{we&&Xe&&t.texStorage2D(n.TEXTURE_2D,ae,_e,Ie[0].width,Ie[0].height);for(let G=0,$=Ie.length;G<$;G++)fe=Ie[G],g.format!==$t?se!==null?we?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,G,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?L&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,fe.width,fe.height,se,ve,fe.data):t.texImage2D(n.TEXTURE_2D,G,_e,fe.width,fe.height,0,se,ve,fe.data)}else if(g.isDataArrayTexture)if(we){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,_e,J.width,J.height,J.depth),L)if(g.layerUpdates.size>0){const G=Zo(J.width,J.height,g.format,g.type);for(const $ of g.layerUpdates){const he=J.data.subarray($*G/J.data.BYTES_PER_ELEMENT,($+1)*G/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,se,ve,he)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,ve,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,se,ve,J.data);else if(g.isData3DTexture)we?(Xe&&t.texStorage3D(n.TEXTURE_3D,ae,_e,J.width,J.height,J.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,ve,J.data)):t.texImage3D(n.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,se,ve,J.data);else if(g.isFramebufferTexture){if(Xe)if(we)t.texStorage2D(n.TEXTURE_2D,ae,_e,J.width,J.height);else{let G=J.width,$=J.height;for(let he=0;he<ae;he++)t.texImage2D(n.TEXTURE_2D,he,_e,G,$,0,se,ve,null),G>>=1,$>>=1}}else if(Ie.length>0){if(we&&Xe){const G=Ee(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ae,_e,G.width,G.height)}for(let G=0,$=Ie.length;G<$;G++)fe=Ie[G],we?L&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,se,ve,fe):t.texImage2D(n.TEXTURE_2D,G,_e,se,ve,fe);g.generateMipmaps=!1}else if(we){if(Xe){const G=Ee(J);t.texStorage2D(n.TEXTURE_2D,ae,_e,G.width,G.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,ve,J)}else t.texImage2D(n.TEXTURE_2D,0,_e,se,ve,J);p(g)&&f(K),Me.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ne(y,g,F){if(g.image.length!==6)return;const K=De(y,g),j=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const Y=i.get(j);if(j.version!==Y.__version||K===!0){t.activeTexture(n.TEXTURE0+F);const Me=Ze.getPrimaries(Ze.workingColorSpace),ce=g.colorSpace===wn?null:Ze.getPrimaries(g.colorSpace),ie=g.colorSpace===wn||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,se=[];for(let $=0;$<6;$++)!Ce&&!J?se[$]=x(g.image[$],!0,r.maxCubemapSize):se[$]=J?g.image[$].image:g.image[$],se[$]=$e(g,se[$]);const ve=se[0],_e=s.convert(g.format,g.colorSpace),fe=s.convert(g.type),Ie=T(g.internalFormat,_e,fe,g.colorSpace),we=g.isVideoTexture!==!0,Xe=Y.__version===void 0||K===!0,L=j.dataReady;let ae=C(g,ve);Ae(n.TEXTURE_CUBE_MAP,g);let G;if(Ce){we&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ie,ve.width,ve.height);for(let $=0;$<6;$++){G=se[$].mipmaps;for(let he=0;he<G.length;he++){const le=G[he];g.format!==$t?_e!==null?we?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,le.width,le.height,_e,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Ie,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,le.width,le.height,_e,fe,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Ie,le.width,le.height,0,_e,fe,le.data)}}}else{if(G=g.mipmaps,we&&Xe){G.length>0&&ae++;const $=Ee(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ie,$.width,$.height)}for(let $=0;$<6;$++)if(J){we?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,se[$].width,se[$].height,_e,fe,se[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ie,se[$].width,se[$].height,0,_e,fe,se[$].data);for(let he=0;he<G.length;he++){const Le=G[he].image[$].image;we?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Le.width,Le.height,_e,fe,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Ie,Le.width,Le.height,0,_e,fe,Le.data)}}else{we?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_e,fe,se[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ie,_e,fe,se[$]);for(let he=0;he<G.length;he++){const le=G[he];we?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,_e,fe,le.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Ie,_e,fe,le.image[$])}}}p(g)&&f(n.TEXTURE_CUBE_MAP),Y.__version=j.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function me(y,g,F,K,j,Y){const Me=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),ie=T(F.internalFormat,Me,ce,F.colorSpace),Ce=i.get(g),J=i.get(F);if(J.__renderTarget=g,!Ce.__hasExternalTextures){const se=Math.max(1,g.width>>Y),ve=Math.max(1,g.height>>Y);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,Y,ie,se,ve,g.depth,0,Me,ce,null):t.texImage2D(j,Y,ie,se,ve,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,J.__webglTexture,0,Oe(g)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,j,J.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(y,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const K=g.depthTexture,j=K&&K.isDepthTexture?K.type:null,Y=S(g.stencilBuffer,j),Me=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Oe(g);Ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Y,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Y,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Y,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,y)}else{const K=g.textures;for(let j=0;j<K.length;j++){const Y=K[j],Me=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),ie=T(Y.internalFormat,Me,ce,Y.colorSpace),Ce=Oe(g);F&&Ve(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ie,g.width,g.height):Ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,ie,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ie,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(g.depthTexture);K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const j=K.__webglTexture,Y=Oe(g);if(g.depthTexture.format===xi)Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(g.depthTexture.format===Ai)Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Be(y){const g=i.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const K=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=K}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");xe(g.__webglFramebuffer,y)}else if(F){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=n.createRenderbuffer(),re(g.__webglDepthbuffer[K],y,!1);else{const j=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),re(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(y,g,F){const K=i.get(y);g!==void 0&&me(K.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Be(y)}function rt(y){const g=y.texture,F=i.get(y),K=i.get(g);y.addEventListener("dispose",D);const j=y.textures,Y=y.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=g.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let ie=0;ie<g.mipmaps.length;ie++)F.__webglFramebuffer[ce][ie]=n.createFramebuffer()}else F.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)F.__webglFramebuffer[ce]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,ie=j.length;ce<ie;ce++){const Ce=i.get(j[ce]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&Ve(y)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const ie=j[ce];F.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const Ce=s.convert(ie.format,ie.colorSpace),J=s.convert(ie.type),se=T(ie.internalFormat,Ce,J,ie.colorSpace,y.isXRRenderTarget===!0),ve=Oe(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),re(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)me(F.__webglFramebuffer[ce][ie],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ie);else me(F.__webglFramebuffer[ce],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,ie=j.length;ce<ie;ce++){const Ce=j[ce],J=i.get(Ce);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),Ae(n.TEXTURE_2D,Ce),me(F.__webglFramebuffer,y,Ce,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(Ce)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ce=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),Ae(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let ie=0;ie<g.mipmaps.length;ie++)me(F.__webglFramebuffer[ie],y,g,n.COLOR_ATTACHMENT0,ce,ie);else me(F.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,ce,0);p(g)&&f(ce),t.unbindTexture()}y.depthBuffer&&Be(y)}function tt(y){const g=y.textures;for(let F=0,K=g.length;F<K;F++){const j=g[F];if(p(j)){const Y=b(y),Me=i.get(j).__webglTexture;t.bindTexture(Y,Me),f(Y),t.unbindTexture()}}}const ze=[],w=[];function vt(y){if(y.samples>0){if(Ve(y)===!1){const g=y.textures,F=y.width,K=y.height;let j=n.COLOR_BUFFER_BIT;const Y=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(y),ce=g.length>1;if(ce)for(let ie=0;ie<g.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ie=0;ie<g.length;ie++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ie]);const Ce=i.get(g[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ce,0)}n.blitFramebuffer(0,0,F,K,0,0,F,K,j,n.NEAREST),c===!0&&(ze.length=0,w.length=0,ze.push(n.COLOR_ATTACHMENT0+ie),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ze.push(Y),w.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ie=0;ie<g.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ie]);const Ce=i.get(g[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Oe(y){return Math.min(r.maxSamples,y.samples)}function Ve(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Se(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function $e(y,g){const F=y.colorSpace,K=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==wi&&F!==wn&&(Ze.getTransfer(F)===et?(K!==$t||j!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function Ee(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=R,this.rebindTextures=be,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ve}function p_(n,e){function t(i,r=wn){let s;const a=Ze.getTransfer(r);if(i===gn)return n.UNSIGNED_BYTE;if(i===Za)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kl)return n.BYTE;if(i===Wl)return n.SHORT;if(i===Zi)return n.UNSIGNED_SHORT;if(i===Ka)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===ql)return n.ALPHA;if(i===Yl)return n.RGB;if(i===$t)return n.RGBA;if(i===$l)return n.LUMINANCE;if(i===Kl)return n.LUMINANCE_ALPHA;if(i===xi)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===Zl)return n.RED;if(i===Ja)return n.RED_INTEGER;if(i===jl)return n.RG;if(i===Qa)return n.RG_INTEGER;if(i===eo)return n.RGBA_INTEGER;if(i===Vr||i===kr||i===Wr||i===Xr)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===da||i===pa||i===ma||i===_a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ga||i===va||i===xa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ga||i===va)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ma||i===Sa||i===Ea||i===ya||i===Ta||i===ba||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===Da||i===La||i===Ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ma)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ea)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ya)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ta)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ba)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Aa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ra)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ca)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ua)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qr||i===Ia||i===Na)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qr)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jl||i===Fa||i===Oa||i===Ba)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
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

}`;class g_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dn({vertexShader:m_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends Pi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,_=null;const x=new g_,p=t.getContextAttributes();let f=null,b=null;const T=[],S=[],C=new Qe;let P=null;const D=new Ht;D.viewport=new lt;const N=new Ht;N.viewport=new lt;const E=[D,N],M=new Hf;let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=T[X];return ne===void 0&&(ne=new Gs,T[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=T[X];return ne===void 0&&(ne=new Gs,T[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=T[X];return ne===void 0&&(ne=new Gs,T[X]=ne),ne.getHandSpace()};function B(X){const ne=S.indexOf(X.inputSource);if(ne===-1)return;const me=T[ne];me!==void 0&&(me.update(X.inputSource,X.frame,l||a),me.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<T.length;X++){const ne=S[X];ne!==null&&(S[X]=null,T[X].disconnect(ne))}A=null,k=null,x.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,b=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,re=null,xe=null;p.depth&&(xe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=p.stencil?Ai:xi,re=p.stencil?bi:$n);const Be={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Kn(h.textureWidth,h.textureHeight,{format:$t,type:gn,depthTexture:new dc(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Kn(m.framebufferWidth,m.framebufferHeight,{format:$t,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(X){for(let ne=0;ne<X.removed.length;ne++){const me=X.removed[ne],re=S.indexOf(me);re>=0&&(S[re]=null,T[re].disconnect(me))}for(let ne=0;ne<X.added.length;ne++){const me=X.added[ne];let re=S.indexOf(me);if(re===-1){for(let Be=0;Be<T.length;Be++)if(Be>=S.length){S.push(me),re=Be;break}else if(S[Be]===null){S[Be]=me,re=Be;break}if(re===-1)break}const xe=T[re];xe&&xe.connect(me)}}const W=new O,Q=new O;function R(X,ne,me){W.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const re=W.distanceTo(Q),xe=ne.projectionMatrix.elements,Be=me.projectionMatrix.elements,be=xe[14]/(xe[10]-1),rt=xe[14]/(xe[10]+1),tt=(xe[9]+1)/xe[5],ze=(xe[9]-1)/xe[5],w=(xe[8]-1)/xe[0],vt=(Be[8]+1)/Be[0],Oe=be*w,Ve=be*vt,Se=re/(-w+vt),$e=Se*-w;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($e),X.translateZ(Se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),xe[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ee=be+Se,y=rt+Se,g=Oe-$e,F=Ve+(re-$e),K=tt*rt/y*Ee,j=ze*rt/y*Ee;X.projectionMatrix.makePerspective(g,F,K,j,Ee,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ne=X.near,me=X.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(me=x.depthFar)),M.near=N.near=D.near=ne,M.far=N.far=D.far=me,(A!==M.near||k!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,k=M.far),D.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,M.layers.mask=D.layers.mask|N.layers.mask;const re=X.parent,xe=M.cameras;q(M,re);for(let Be=0;Be<xe.length;Be++)q(xe[Be],re);xe.length===2?R(M,D,N):M.projectionMatrix.copy(D.projectionMatrix),te(X,M,re)};function te(X,ne,me){me===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=za*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let de=null;function Ae(X,ne){if(u=ne.getViewerPose(l||a),_=ne,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let re=!1;me.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let be=0;be<me.length;be++){const rt=me[be];let tt=null;if(m!==null)tt=m.getViewport(rt);else{const w=d.getViewSubImage(h,rt);tt=w.viewport,be===0&&(e.setRenderTargetTextures(b,w.colorTexture,h.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(b))}let ze=E[be];ze===void 0&&(ze=new Ht,ze.layers.enable(be),ze.viewport=new lt,E[be]=ze),ze.matrix.fromArray(rt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(rt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(tt.x,tt.y,tt.width,tt.height),be===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(ze)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const be=d.getDepthInformation(me[0]);be&&be.isValid&&be.texture&&x.init(e,be,r.renderState)}}for(let me=0;me<T.length;me++){const re=S[me],xe=T[me];re!==null&&xe!==void 0&&xe.update(re,ne,l||a)}de&&de(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const De=new mc;De.setAnimationLoop(Ae),this.setAnimationLoop=function(X){de=X},this.dispose=function(){}}}const zn=new rn,x_=new at;function M_(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,cc(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,b,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,b,T):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===wt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===wt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=e.get(f),T=b.envMap,S=b.envMapRotation;T&&(p.envMap.value=T,zn.copy(S),zn.x*=-1,zn.y*=-1,zn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(zn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,b,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=T*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function S_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const S=T.program;i.uniformBlockBinding(b,S)}function l(b,T){let S=r[b.id];S===void 0&&(_(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",p));const C=T.program;i.updateUBOMapping(b,C);const P=e.render.frame;s[b.id]!==P&&(h(b),s[b.id]=P)}function u(b){const T=d();b.__bindingPointIndex=T;const S=n.createBuffer(),C=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const T=r[b.id],S=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,D=S.length;P<D;P++){const N=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,M=N.length;E<M;E++){const A=N[E];if(m(A,P,E,C)===!0){const k=A.__offset,B=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let Z=0;Z<B.length;Z++){const W=B[Z],Q=x(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+V,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,T,S,C){const P=b.value,D=T+"_"+S;if(C[D]===void 0)return typeof P=="number"||typeof P=="boolean"?C[D]=P:C[D]=P.clone(),!0;{const N=C[D];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return C[D]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function _(b){const T=b.uniforms;let S=0;const C=16;for(let D=0,N=T.length;D<N;D++){const E=Array.isArray(T[D])?T[D]:[T[D]];for(let M=0,A=E.length;M<A;M++){const k=E[M],B=Array.isArray(k.value)?k.value:[k.value];for(let V=0,Z=B.length;V<Z;V++){const W=B[V],Q=x(W),R=S%C,q=R%Q.boundary,te=R+q;S+=q,te!==0&&C-te<Q.storage&&(S+=C-te),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Q.storage}}}const P=S%C;return P>0&&(S+=C-P),b.__size=S,b.__cache={},this}function x(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class E_{constructor(e={}){const{canvas:t=Qu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,f=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Cn,this.toneMappingExposure=1;const S=this;let C=!1,P=0,D=0,N=null,E=-1,M=null;const A=new lt,k=new lt;let B=null;const V=new Ge(0);let Z=0,W=t.width,Q=t.height,R=1,q=null,te=null;const de=new lt(0,0,W,Q),Ae=new lt(0,0,W,Q);let De=!1;const X=new no;let ne=!1,me=!1;this.transmissionResolutionScale=1;const re=new at,xe=new at,Be=new O,be=new lt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ze(){return N===null?R:1}let w=i;function vt(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),w===null){const U="webgl2";if(w=vt(U,v),w===null)throw vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Oe,Ve,Se,$e,Ee,y,g,F,K,j,Y,Me,ce,ie,Ce,J,se,ve,_e,fe,Ie,we,Xe,L;function ae(){Oe=new Lp(w),Oe.init(),we=new p_(w,Oe),Ve=new Ap(w,Oe,e,we),Se=new h_(w,Oe),Ve.reverseDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),$e=new Np(w),Ee=new Qm,y=new d_(w,Oe,Se,Ee,Ve,we,$e),g=new Rp(S),F=new Dp(S),K=new Vf(w),Xe=new Tp(w,K),j=new Up(w,K,$e,Xe),Y=new Op(w,j,K,$e),_e=new Fp(w,Ve,y),J=new wp(Ee),Me=new Jm(S,g,F,Oe,Ve,Xe,J),ce=new M_(S,Ee),ie=new t_,Ce=new o_(Oe),ve=new yp(S,g,F,Se,Y,m,c),se=new u_(S,Y,Ve),L=new S_(w,$e,Ve,Se),fe=new bp(w,Oe,$e),Ie=new Ip(w,Oe,$e),$e.programs=Me.programs,S.capabilities=Ve,S.extensions=Oe,S.properties=Ee,S.renderLists=ie,S.shadowMap=se,S.state=Se,S.info=$e}ae();const G=new v_(S,w);this.xr=G,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(v){v!==void 0&&(R=v,this.setSize(W,Q,!1))},this.getSize=function(v){return v.set(W,Q)},this.setSize=function(v,U,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,Q=U,t.width=Math.floor(v*R),t.height=Math.floor(U*R),z===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(W*R,Q*R).floor()},this.setDrawingBufferSize=function(v,U,z){W=v,Q=U,R=z,t.width=Math.floor(v*z),t.height=Math.floor(U*z),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(A)},this.getViewport=function(v){return v.copy(de)},this.setViewport=function(v,U,z,H){v.isVector4?de.set(v.x,v.y,v.z,v.w):de.set(v,U,z,H),Se.viewport(A.copy(de).multiplyScalar(R).round())},this.getScissor=function(v){return v.copy(Ae)},this.setScissor=function(v,U,z,H){v.isVector4?Ae.set(v.x,v.y,v.z,v.w):Ae.set(v,U,z,H),Se.scissor(k.copy(Ae).multiplyScalar(R).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(v){Se.setScissorTest(De=v)},this.setOpaqueSort=function(v){q=v},this.setTransparentSort=function(v){te=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(v=!0,U=!0,z=!0){let H=0;if(v){let I=!1;if(N!==null){const ee=N.texture.format;I=ee===eo||ee===Qa||ee===Ja}if(I){const ee=N.texture.type,ue=ee===gn||ee===$n||ee===Zi||ee===bi||ee===Za||ee===ja,pe=ve.getClearColor(),ge=ve.getClearAlpha(),Pe=pe.r,Ue=pe.g,ye=pe.b;ue?(_[0]=Pe,_[1]=Ue,_[2]=ye,_[3]=ge,w.clearBufferuiv(w.COLOR,0,_)):(x[0]=Pe,x[1]=Ue,x[2]=ye,x[3]=ge,w.clearBufferiv(w.COLOR,0,x))}else H|=w.COLOR_BUFFER_BIT}U&&(H|=w.DEPTH_BUFFER_BIT),z&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ve.dispose(),ie.dispose(),Ce.dispose(),Ee.dispose(),g.dispose(),F.dispose(),Y.dispose(),Xe.dispose(),L.dispose(),Me.dispose(),G.dispose(),G.removeEventListener("sessionstart",ar),G.removeEventListener("sessionend",Zn),an.stop()};function $(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=$e.autoReset,U=se.enabled,z=se.autoUpdate,H=se.needsUpdate,I=se.type;ae(),$e.autoReset=v,se.enabled=U,se.autoUpdate=z,se.needsUpdate=H,se.type=I}function le(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Le(v){const U=v.target;U.removeEventListener("dispose",Le),nt(U)}function nt(v){dt(v),Ee.remove(v)}function dt(v){const U=Ee.get(v).programs;U!==void 0&&(U.forEach(function(z){Me.releaseProgram(z)}),v.isShaderMaterial&&Me.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,z,H,I,ee){U===null&&(U=rt);const ue=I.isMesh&&I.matrixWorld.determinant()<0,pe=Fi(v,U,z,H,I);Se.setMaterial(H,ue);let ge=z.index,Pe=1;if(H.wireframe===!0){if(ge=j.getWireframeAttribute(z),ge===void 0)return;Pe=2}const Ue=z.drawRange,ye=z.attributes.position;let Ye=Ue.start*Pe,je=(Ue.start+Ue.count)*Pe;ee!==null&&(Ye=Math.max(Ye,ee.start*Pe),je=Math.min(je,(ee.start+ee.count)*Pe)),ge!==null?(Ye=Math.max(Ye,0),je=Math.min(je,ge.count)):ye!=null&&(Ye=Math.max(Ye,0),je=Math.min(je,ye.count));const ct=je-Ye;if(ct<0||ct===1/0)return;Xe.setup(I,H,pe,z,ge);let ot,Ke=fe;if(ge!==null&&(ot=K.get(ge),Ke=Ie,Ke.setIndex(ot)),I.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*ze()),Ke.setMode(w.LINES)):Ke.setMode(w.TRIANGLES);else if(I.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Se.setLineWidth(Te*ze()),I.isLineSegments?Ke.setMode(w.LINES):I.isLineLoop?Ke.setMode(w.LINE_LOOP):Ke.setMode(w.LINE_STRIP)}else I.isPoints?Ke.setMode(w.POINTS):I.isSprite&&Ke.setMode(w.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Ke.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ke.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Te=I._multiDrawStarts,mt=I._multiDrawCounts,Je=I._multiDrawCount,kt=ge?K.get(ge).bytesPerElement:1,ei=Ee.get(H).currentProgram.getUniforms();for(let Dt=0;Dt<Je;Dt++)ei.setValue(w,"_gl_DrawID",Dt),Ke.render(Te[Dt]/kt,mt[Dt])}else if(I.isInstancedMesh)Ke.renderInstances(Ye,ct,I.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,mt=Math.min(z.instanceCount,Te);Ke.renderInstances(Ye,ct,mt)}else Ke.render(Ye,ct)};function qe(v,U,z){v.transparent===!0&&v.side===Qt&&v.forceSinglePass===!1?(v.side=wt,v.needsUpdate=!0,Jn(v,U,z),v.side=Pn,v.needsUpdate=!0,Jn(v,U,z),v.side=Qt):Jn(v,U,z)}this.compile=function(v,U,z=null){z===null&&(z=v),f=Ce.get(z),f.init(U),T.push(f),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),v!==z&&v.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const H=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ee=I.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){const pe=ee[ue];qe(pe,z,I),H.add(pe)}else qe(ee,z,I),H.add(ee)}),T.pop(),f=null,H},this.compileAsync=function(v,U,z=null){const H=this.compile(v,U,z);return new Promise(I=>{function ee(){if(H.forEach(function(ue){Ee.get(ue).currentProgram.isReady()&&H.delete(ue)}),H.size===0){I(v);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ct=null;function Pt(v){Ct&&Ct(v)}function ar(){an.stop()}function Zn(){an.start()}const an=new mc;an.setAnimationLoop(Pt),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(v){Ct=v,G.setAnimationLoop(v),v===null?an.stop():an.start()},G.addEventListener("sessionstart",ar),G.addEventListener("sessionend",Zn),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,U,N),f=Ce.get(v,T.length),f.init(U),T.push(f),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(xe),me=this.localClippingEnabled,ne=J.init(this.clippingPlanes,me),p=ie.get(v,b.length),p.init(),b.push(p),G.enabled===!0&&G.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&Ln(ee,U,-1/0,S.sortObjects)}Ln(v,U,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(q,te),tt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,tt&&ve.addToRenderList(p,v),this.info.render.frame++,ne===!0&&J.beginShadows();const z=f.state.shadowsArray;se.render(z,v,U),ne===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,I=p.transmissive;if(f.setupLights(),U.isArrayCamera){const ee=U.cameras;if(I.length>0)for(let ue=0,pe=ee.length;ue<pe;ue++){const ge=ee[ue];Ii(H,I,v,ge)}tt&&ve.render(v);for(let ue=0,pe=ee.length;ue<pe;ue++){const ge=ee[ue];or(p,v,ge,ge.viewport)}}else I.length>0&&Ii(H,I,v,U),tt&&ve.render(v),or(p,v,U);N!==null&&D===0&&(y.updateMultisampleRenderTarget(N),y.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(S,v,U),Xe.resetDefaultState(),E=-1,M=null,T.pop(),T.length>0?(f=T[T.length-1],ne===!0&&J.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Ln(v,U,z,H){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){H&&be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(xe);const ue=Y.update(v),pe=v.material;pe.visible&&p.push(v,ue,pe,z,be.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){const ue=Y.update(v),pe=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),be.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),be.copy(ue.boundingSphere.center)),be.applyMatrix4(v.matrixWorld).applyMatrix4(xe)),Array.isArray(pe)){const ge=ue.groups;for(let Pe=0,Ue=ge.length;Pe<Ue;Pe++){const ye=ge[Pe],Ye=pe[ye.materialIndex];Ye&&Ye.visible&&p.push(v,ue,Ye,z,be.z,ye)}}else pe.visible&&p.push(v,ue,pe,z,be.z,null)}}const ee=v.children;for(let ue=0,pe=ee.length;ue<pe;ue++)Ln(ee[ue],U,z,H)}function or(v,U,z,H){const I=v.opaque,ee=v.transmissive,ue=v.transparent;f.setupLightsView(z),ne===!0&&J.setGlobalState(S.clippingPlanes,z),H&&Se.viewport(A.copy(H)),I.length>0&&jn(I,U,z),ee.length>0&&jn(ee,U,z),ue.length>0&&jn(ue,U,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ii(v,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Kn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?er:gn,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ee=f.state.transmissionRenderTarget[H.id],ue=H.viewport||A;ee.setSize(ue.z*S.transmissionResolutionScale,ue.w*S.transmissionResolutionScale);const pe=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(V),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),tt&&ve.render(z);const ge=S.toneMapping;S.toneMapping=Cn;const Pe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),ne===!0&&J.setGlobalState(S.clippingPlanes,H),jn(v,z,H),y.updateMultisampleRenderTarget(ee),y.updateRenderTargetMipmap(ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ye=0,Ye=U.length;ye<Ye;ye++){const je=U[ye],ct=je.object,ot=je.geometry,Ke=je.material,Te=je.group;if(Ke.side===Qt&&ct.layers.test(H.layers)){const mt=Ke.side;Ke.side=wt,Ke.needsUpdate=!0,Ni(ct,z,H,ot,Ke,Te),Ke.side=mt,Ke.needsUpdate=!0,Ue=!0}}Ue===!0&&(y.updateMultisampleRenderTarget(ee),y.updateRenderTargetMipmap(ee))}S.setRenderTarget(pe),S.setClearColor(V,Z),Pe!==void 0&&(H.viewport=Pe),S.toneMapping=ge}function jn(v,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let I=0,ee=v.length;I<ee;I++){const ue=v[I],pe=ue.object,ge=ue.geometry,Pe=H===null?ue.material:H,Ue=ue.group;pe.layers.test(z.layers)&&Ni(pe,U,z,ge,Pe,Ue)}}function Ni(v,U,z,H,I,ee){v.onBeforeRender(S,U,z,H,I,ee),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(S,U,z,H,v,ee),I.transparent===!0&&I.side===Qt&&I.forceSinglePass===!1?(I.side=wt,I.needsUpdate=!0,S.renderBufferDirect(z,U,H,I,v,ee),I.side=Pn,I.needsUpdate=!0,S.renderBufferDirect(z,U,H,I,v,ee),I.side=Qt):S.renderBufferDirect(z,U,H,I,v,ee),v.onAfterRender(S,U,z,H,I,ee)}function Jn(v,U,z){U.isScene!==!0&&(U=rt);const H=Ee.get(v),I=f.state.lights,ee=f.state.shadowsArray,ue=I.state.version,pe=Me.getParameters(v,I.state,ee,U,z),ge=Me.getProgramCacheKey(pe);let Pe=H.programs;H.environment=v.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(v.isMeshStandardMaterial?F:g).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",Le),Pe=new Map,H.programs=Pe);let Ue=Pe.get(ge);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===ue)return Qn(v,pe),Ue}else pe.uniforms=Me.getUniforms(v),v.onBeforeCompile(pe,S),Ue=Me.acquireProgram(pe,ge),Pe.set(ge,Ue),H.uniforms=pe.uniforms;const ye=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=J.uniform),Qn(v,pe),H.needsLights=us(v),H.lightsStateVersion=ue,H.needsLights&&(ye.ambientLightColor.value=I.state.ambient,ye.lightProbe.value=I.state.probe,ye.directionalLights.value=I.state.directional,ye.directionalLightShadows.value=I.state.directionalShadow,ye.spotLights.value=I.state.spot,ye.spotLightShadows.value=I.state.spotShadow,ye.rectAreaLights.value=I.state.rectArea,ye.ltc_1.value=I.state.rectAreaLTC1,ye.ltc_2.value=I.state.rectAreaLTC2,ye.pointLights.value=I.state.point,ye.pointLightShadows.value=I.state.pointShadow,ye.hemisphereLights.value=I.state.hemi,ye.directionalShadowMap.value=I.state.directionalShadowMap,ye.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ye.spotShadowMap.value=I.state.spotShadowMap,ye.spotLightMatrix.value=I.state.spotLightMatrix,ye.spotLightMap.value=I.state.spotLightMap,ye.pointShadowMap.value=I.state.pointShadowMap,ye.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function lr(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=$r.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Qn(v,U){const z=Ee.get(v);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Fi(v,U,z,H,I){U.isScene!==!0&&(U=rt),y.resetTextureUnits();const ee=U.fog,ue=H.isMeshStandardMaterial?U.environment:null,pe=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:wi,ge=(H.isMeshStandardMaterial?F:g).get(H.envMap||ue),Pe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,je=!!z.morphAttributes.color;let ct=Cn;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ct=S.toneMapping);const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=ot!==void 0?ot.length:0,Te=Ee.get(H),mt=f.state.lights;if(ne===!0&&(me===!0||v!==M)){const St=v===M&&H.id===E;J.setState(H,v,St)}let Je=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==mt.state.version||Te.outputColorSpace!==pe||I.isBatchedMesh&&Te.batching===!1||!I.isBatchedMesh&&Te.batching===!0||I.isBatchedMesh&&Te.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Te.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Te.instancing===!1||!I.isInstancedMesh&&Te.instancing===!0||I.isSkinnedMesh&&Te.skinning===!1||!I.isSkinnedMesh&&Te.skinning===!0||I.isInstancedMesh&&Te.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Te.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Te.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Te.instancingMorph===!1&&I.morphTexture!==null||Te.envMap!==ge||H.fog===!0&&Te.fog!==ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==J.numPlanes||Te.numIntersection!==J.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==Ue||Te.morphTargets!==ye||Te.morphNormals!==Ye||Te.morphColors!==je||Te.toneMapping!==ct||Te.morphTargetsCount!==Ke)&&(Je=!0):(Je=!0,Te.__version=H.version);let kt=Te.currentProgram;Je===!0&&(kt=Jn(H,U,I));let ei=!1,Dt=!1,zi=!1;const st=kt.getUniforms(),Nt=Te.uniforms;if(Se.useProgram(kt.program)&&(ei=!0,Dt=!0,zi=!0),H.id!==E&&(E=H.id,Dt=!0),ei||M!==v){Se.buffers.depth.getReversed()?(re.copy(v.projectionMatrix),tf(re),nf(re),st.setValue(w,"projectionMatrix",re)):st.setValue(w,"projectionMatrix",v.projectionMatrix),st.setValue(w,"viewMatrix",v.matrixWorldInverse);const yt=st.map.cameraPosition;yt!==void 0&&yt.setValue(w,Be.setFromMatrixPosition(v.matrixWorld)),Ve.logarithmicDepthBuffer&&st.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Dt=!0,zi=!0)}if(I.isSkinnedMesh){st.setOptional(w,I,"bindMatrix"),st.setOptional(w,I,"bindMatrixInverse");const St=I.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),st.setValue(w,"boneTexture",St.boneTexture,y))}I.isBatchedMesh&&(st.setOptional(w,I,"batchingTexture"),st.setValue(w,"batchingTexture",I._matricesTexture,y),st.setOptional(w,I,"batchingIdTexture"),st.setValue(w,"batchingIdTexture",I._indirectTexture,y),st.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(w,"batchingColorTexture",I._colorsTexture,y));const Ft=z.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&_e.update(I,z,kt),(Dt||Te.receiveShadow!==I.receiveShadow)&&(Te.receiveShadow=I.receiveShadow,st.setValue(w,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Nt.envMap.value=ge,Nt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Nt.envMapIntensity.value=U.environmentIntensity),Dt&&(st.setValue(w,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&Oi(Nt,zi),ee&&H.fog===!0&&ce.refreshFogUniforms(Nt,ee),ce.refreshMaterialUniforms(Nt,H,R,Q,f.state.transmissionRenderTarget[v.id]),$r.upload(w,lr(Te),Nt,y)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&($r.upload(w,lr(Te),Nt,y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(w,"center",I.center),st.setValue(w,"modelViewMatrix",I.modelViewMatrix),st.setValue(w,"normalMatrix",I.normalMatrix),st.setValue(w,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const St=H.uniformsGroups;for(let yt=0,hs=St.length;yt<hs;yt++){const Un=St[yt];L.update(Un,kt),L.bind(Un,kt)}}return kt}function Oi(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function us(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,U,z){Ee.get(v.texture).__webglTexture=U,Ee.get(v.depthTexture).__webglTexture=z;const H=Ee.get(v);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,U){const z=Ee.get(v);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const cr=w.createFramebuffer();this.setRenderTarget=function(v,U=0,z=0){N=v,P=U,D=z;let H=!0,I=null,ee=!1,ue=!1;if(v){const ge=Ee.get(v);if(ge.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(w.FRAMEBUFFER,null),H=!1;else if(ge.__webglFramebuffer===void 0)y.setupRenderTarget(v);else if(ge.__hasExternalTextures)y.rebindTextures(v,Ee.get(v.texture).__webglTexture,Ee.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ye=v.depthTexture;if(ge.__boundDepthTexture!==ye){if(ye!==null&&Ee.has(ye)&&(v.width!==ye.image.width||v.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(v)}}const Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);const Ue=Ee.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?I=Ue[U][z]:I=Ue[U],ee=!0):v.samples>0&&y.useMultisampledRTT(v)===!1?I=Ee.get(v).__webglMultisampledFramebuffer:Array.isArray(Ue)?I=Ue[z]:I=Ue,A.copy(v.viewport),k.copy(v.scissor),B=v.scissorTest}else A.copy(de).multiplyScalar(R).floor(),k.copy(Ae).multiplyScalar(R).floor(),B=De;if(z!==0&&(I=cr),Se.bindFramebuffer(w.FRAMEBUFFER,I)&&H&&Se.drawBuffers(v,I),Se.viewport(A),Se.scissor(k),Se.setScissorTest(B),ee){const ge=Ee.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,z)}else if(ue){const ge=Ee.get(v.texture),Pe=U;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,ge.__webglTexture,z,Pe)}else if(v!==null&&z!==0){const ge=Ee.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ge.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(v,U,z,H,I,ee,ue){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ee.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){Se.bindFramebuffer(w.FRAMEBUFFER,pe);try{const ge=v.texture,Pe=ge.format,Ue=ge.type;if(!Ve.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-H&&z>=0&&z<=v.height-I&&w.readPixels(U,z,H,I,we.convert(Pe),we.convert(Ue),ee)}finally{const ge=N!==null?Ee.get(N).__webglFramebuffer:null;Se.bindFramebuffer(w.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(v,U,z,H,I,ee,ue){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ee.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){const ge=v.texture,Pe=ge.format,Ue=ge.type;if(!Ve.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=v.width-H&&z>=0&&z<=v.height-I){Se.bindFramebuffer(w.FRAMEBUFFER,pe);const ye=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.bufferData(w.PIXEL_PACK_BUFFER,ee.byteLength,w.STREAM_READ),w.readPixels(U,z,H,I,we.convert(Pe),we.convert(Ue),0);const Ye=N!==null?Ee.get(N).__webglFramebuffer:null;Se.bindFramebuffer(w.FRAMEBUFFER,Ye);const je=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await ef(w,je,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ee),w.deleteBuffer(ye),w.deleteSync(je),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,U=null,z=0){v.isTexture!==!0&&(mi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,v=arguments[1]);const H=Math.pow(2,-z),I=Math.floor(v.image.width*H),ee=Math.floor(v.image.height*H),ue=U!==null?U.x:0,pe=U!==null?U.y:0;y.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,z,0,0,ue,pe,I,ee),Se.unbindTexture()};const Bi=w.createFramebuffer(),fs=w.createFramebuffer();this.copyTextureToTexture=function(v,U,z=null,H=null,I=0,ee=null){v.isTexture!==!0&&(mi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,v=arguments[1],U=arguments[2],ee=arguments[3]||0,z=null),ee===null&&(I!==0?(mi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=I,I=0):ee=0);let ue,pe,ge,Pe,Ue,ye,Ye,je,ct;const ot=v.isCompressedTexture?v.mipmaps[ee]:v.image;if(z!==null)ue=z.max.x-z.min.x,pe=z.max.y-z.min.y,ge=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,Ue=z.min.y,ye=z.isBox3?z.min.z:0;else{const Ft=Math.pow(2,-I);ue=Math.floor(ot.width*Ft),pe=Math.floor(ot.height*Ft),v.isDataArrayTexture?ge=ot.depth:v.isData3DTexture?ge=Math.floor(ot.depth*Ft):ge=1,Pe=0,Ue=0,ye=0}H!==null?(Ye=H.x,je=H.y,ct=H.z):(Ye=0,je=0,ct=0);const Ke=we.convert(U.format),Te=we.convert(U.type);let mt;U.isData3DTexture?(y.setTexture3D(U,0),mt=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(y.setTexture2DArray(U,0),mt=w.TEXTURE_2D_ARRAY):(y.setTexture2D(U,0),mt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Je=w.getParameter(w.UNPACK_ROW_LENGTH),kt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ei=w.getParameter(w.UNPACK_SKIP_PIXELS),Dt=w.getParameter(w.UNPACK_SKIP_ROWS),zi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ot.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ot.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ue),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ye);const st=v.isDataArrayTexture||v.isData3DTexture,Nt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const Ft=Ee.get(v),St=Ee.get(U),yt=Ee.get(Ft.__renderTarget),hs=Ee.get(St.__renderTarget);Se.bindFramebuffer(w.READ_FRAMEBUFFER,yt.__webglFramebuffer),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Un=0;Un<ge;Un++)st&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.get(v).__webglTexture,I,ye+Un),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,ee,ct+Un)),w.blitFramebuffer(Pe,Ue,ue,pe,Ye,je,ue,pe,w.DEPTH_BUFFER_BIT,w.NEAREST);Se.bindFramebuffer(w.READ_FRAMEBUFFER,null),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||Ee.has(v)){const Ft=Ee.get(v),St=Ee.get(U);Se.bindFramebuffer(w.READ_FRAMEBUFFER,Bi),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,fs);for(let yt=0;yt<ge;yt++)st?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ft.__webglTexture,I,ye+yt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ft.__webglTexture,I),Nt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,St.__webglTexture,ee,ct+yt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,St.__webglTexture,ee),I!==0?w.blitFramebuffer(Pe,Ue,ue,pe,Ye,je,ue,pe,w.COLOR_BUFFER_BIT,w.NEAREST):Nt?w.copyTexSubImage3D(mt,ee,Ye,je,ct+yt,Pe,Ue,ue,pe):w.copyTexSubImage2D(mt,ee,Ye,je,Pe,Ue,ue,pe);Se.bindFramebuffer(w.READ_FRAMEBUFFER,null),Se.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Nt?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(mt,ee,Ye,je,ct,ue,pe,ge,Ke,Te,ot.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(mt,ee,Ye,je,ct,ue,pe,ge,Ke,ot.data):w.texSubImage3D(mt,ee,Ye,je,ct,ue,pe,ge,Ke,Te,ot):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ee,Ye,je,ue,pe,Ke,Te,ot.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ee,Ye,je,ot.width,ot.height,Ke,ot.data):w.texSubImage2D(w.TEXTURE_2D,ee,Ye,je,ue,pe,Ke,Te,ot);w.pixelStorei(w.UNPACK_ROW_LENGTH,Je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,kt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ei),w.pixelStorei(w.UNPACK_SKIP_ROWS,Dt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,zi),ee===0&&U.generateMipmaps&&w.generateMipmap(mt),Se.unbindTexture()},this.copyTextureToTexture3D=function(v,U,z=null,H=null,I=0){return v.isTexture!==!0&&(mi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,v=arguments[2],U=arguments[3],I=arguments[4]||0),mi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,U,z,H,I)},this.initRenderTarget=function(v){Ee.get(v).__webglFramebuffer===void 0&&y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),Se.unbindTexture()},this.resetState=function(){P=0,D=0,N=null,Se.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function Kr(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function y_(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function Mc(n){let e,t,i;n.length!==2?(e=Kr,t=(o,c)=>Kr(n(o),c),i=(o,c)=>n(o)-c):(e=n===Kr||n===y_?n:T_,t=n,i=n);function r(o,c,l=0,u=o.length){if(l<u){if(e(c,c)!==0)return u;do{const d=l+u>>>1;t(o[d],c)<0?l=d+1:u=d}while(l<u)}return l}function s(o,c,l=0,u=o.length){if(l<u){if(e(c,c)!==0)return u;do{const d=l+u>>>1;t(o[d],c)<=0?l=d+1:u=d}while(l<u)}return l}function a(o,c,l=0,u=o.length){const d=r(o,c,l,u-1);return d>l&&i(o[d-1],c)>-i(o[d],c)?d-1:d}return{left:r,center:a,right:s}}function T_(){return 0}function b_(n){return n===null?NaN:+n}const A_=Mc(Kr),w_=A_.right;Mc(b_).center;const R_=Math.sqrt(50),C_=Math.sqrt(10),P_=Math.sqrt(2);function ts(n,e,t){const i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),a=s>=R_?10:s>=C_?5:s>=P_?2:1;let o,c,l;return r<0?(l=Math.pow(10,-r)/a,o=Math.round(n*l),c=Math.round(e*l),o/l<n&&++o,c/l>e&&--c,l=-l):(l=Math.pow(10,r)*a,o=Math.round(n/l),c=Math.round(e/l),o*l<n&&++o,c*l>e&&--c),c<o&&.5<=t&&t<2?ts(n,e,t*2):[o,c,l]}function D_(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const i=e<n,[r,s,a]=i?ts(e,n,t):ts(n,e,t);if(!(s>=r))return[];const o=s-r+1,c=new Array(o);if(i)if(a<0)for(let l=0;l<o;++l)c[l]=(s-l)/-a;else for(let l=0;l<o;++l)c[l]=(s-l)*a;else if(a<0)for(let l=0;l<o;++l)c[l]=(r+l)/-a;else for(let l=0;l<o;++l)c[l]=(r+l)*a;return c}function Ga(n,e,t){return e=+e,n=+n,t=+t,ts(n,e,t)[2]}function L_(n,e,t){e=+e,n=+n,t=+t;const i=e<n,r=i?Ga(e,n,t):Ga(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function U_(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function ao(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function Sc(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function sr(){}var ji=.7,ns=1/ji,Si="\\s*([+-]?\\d+)\\s*",Ji="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",nn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",I_=/^#([0-9a-f]{3,8})$/,N_=new RegExp(`^rgb\\(${Si},${Si},${Si}\\)$`),F_=new RegExp(`^rgb\\(${nn},${nn},${nn}\\)$`),O_=new RegExp(`^rgba\\(${Si},${Si},${Si},${Ji}\\)$`),B_=new RegExp(`^rgba\\(${nn},${nn},${nn},${Ji}\\)$`),z_=new RegExp(`^hsl\\(${Ji},${nn},${nn}\\)$`),H_=new RegExp(`^hsla\\(${Ji},${nn},${nn},${Ji}\\)$`),Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ao(sr,Qi,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:El,formatHex:El,formatHex8:G_,formatHsl:V_,formatRgb:yl,toString:yl});function El(){return this.rgb().formatHex()}function G_(){return this.rgb().formatHex8()}function V_(){return Ec(this).formatHsl()}function yl(){return this.rgb().formatRgb()}function Qi(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=I_.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?Tl(e):t===3?new At(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Br(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Br(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=N_.exec(n))?new At(e[1],e[2],e[3],1):(e=F_.exec(n))?new At(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=O_.exec(n))?Br(e[1],e[2],e[3],e[4]):(e=B_.exec(n))?Br(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=z_.exec(n))?wl(e[1],e[2]/100,e[3]/100,1):(e=H_.exec(n))?wl(e[1],e[2]/100,e[3]/100,e[4]):Sl.hasOwnProperty(n)?Tl(Sl[n]):n==="transparent"?new At(NaN,NaN,NaN,0):null}function Tl(n){return new At(n>>16&255,n>>8&255,n&255,1)}function Br(n,e,t,i){return i<=0&&(n=e=t=NaN),new At(n,e,t,i)}function k_(n){return n instanceof sr||(n=Qi(n)),n?(n=n.rgb(),new At(n.r,n.g,n.b,n.opacity)):new At}function Va(n,e,t,i){return arguments.length===1?k_(n):new At(n,e,t,i??1)}function At(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}ao(At,Va,Sc(sr,{brighter(n){return n=n==null?ns:Math.pow(ns,n),new At(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?ji:Math.pow(ji,n),new At(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new At(Yn(this.r),Yn(this.g),Yn(this.b),is(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:bl,formatHex:bl,formatHex8:W_,formatRgb:Al,toString:Al}));function bl(){return`#${qn(this.r)}${qn(this.g)}${qn(this.b)}`}function W_(){return`#${qn(this.r)}${qn(this.g)}${qn(this.b)}${qn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Al(){const n=is(this.opacity);return`${n===1?"rgb(":"rgba("}${Yn(this.r)}, ${Yn(this.g)}, ${Yn(this.b)}${n===1?")":`, ${n})`}`}function is(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Yn(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function qn(n){return n=Yn(n),(n<16?"0":"")+n.toString(16)}function wl(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new Yt(n,e,t,i)}function Ec(n){if(n instanceof Yt)return new Yt(n.h,n.s,n.l,n.opacity);if(n instanceof sr||(n=Qi(n)),!n)return new Yt;if(n instanceof Yt)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),a=NaN,o=s-r,c=(s+r)/2;return o?(e===s?a=(t-i)/o+(t<i)*6:t===s?a=(i-e)/o+2:a=(e-t)/o+4,o/=c<.5?s+r:2-s-r,a*=60):o=c>0&&c<1?0:a,new Yt(a,o,c,n.opacity)}function X_(n,e,t,i){return arguments.length===1?Ec(n):new Yt(n,e,t,i??1)}function Yt(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}ao(Yt,X_,Sc(sr,{brighter(n){return n=n==null?ns:Math.pow(ns,n),new Yt(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?ji:Math.pow(ji,n),new Yt(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new At(Js(n>=240?n-240:n+120,r,i),Js(n,r,i),Js(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Yt(Rl(this.h),zr(this.s),zr(this.l),is(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=is(this.opacity);return`${n===1?"hsl(":"hsla("}${Rl(this.h)}, ${zr(this.s)*100}%, ${zr(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Rl(n){return n=(n||0)%360,n<0?n+360:n}function zr(n){return Math.max(0,Math.min(1,n||0))}function Js(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const oo=n=>()=>n;function q_(n,e){return function(t){return n+t*e}}function Y_(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function $_(n){return(n=+n)==1?yc:function(e,t){return t-e?Y_(e,t,n):oo(isNaN(e)?t:e)}}function yc(n,e){var t=e-n;return t?q_(n,t):oo(isNaN(n)?e:n)}const Cl=function n(e){var t=$_(e);function i(r,s){var a=t((r=Va(r)).r,(s=Va(s)).r),o=t(r.g,s.g),c=t(r.b,s.b),l=yc(r.opacity,s.opacity);return function(u){return r.r=a(u),r.g=o(u),r.b=c(u),r.opacity=l(u),r+""}}return i.gamma=n,i}(1);function K_(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(s){for(r=0;r<t;++r)i[r]=n[r]*(1-s)+e[r]*s;return i}}function Z_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function j_(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),s=new Array(t),a;for(a=0;a<i;++a)r[a]=lo(n[a],e[a]);for(;a<t;++a)s[a]=e[a];return function(o){for(a=0;a<i;++a)s[a]=r[a](o);return s}}function J_(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function rs(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function Q_(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=lo(n[r],e[r]):i[r]=e[r];return function(s){for(r in t)i[r]=t[r](s);return i}}var ka=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Qs=new RegExp(ka.source,"g");function eg(n){return function(){return n}}function tg(n){return function(e){return n(e)+""}}function ng(n,e){var t=ka.lastIndex=Qs.lastIndex=0,i,r,s,a=-1,o=[],c=[];for(n=n+"",e=e+"";(i=ka.exec(n))&&(r=Qs.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),o[a]?o[a]+=s:o[++a]=s),(i=i[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,c.push({i:a,x:rs(i,r)})),t=Qs.lastIndex;return t<e.length&&(s=e.slice(t),o[a]?o[a]+=s:o[++a]=s),o.length<2?c[0]?tg(c[0].x):eg(e):(e=c.length,function(l){for(var u=0,d;u<e;++u)o[(d=c[u]).i]=d.x(l);return o.join("")})}function lo(n,e){var t=typeof e,i;return e==null||t==="boolean"?oo(e):(t==="number"?rs:t==="string"?(i=Qi(e))?(e=i,Cl):ng:e instanceof Qi?Cl:e instanceof Date?J_:Z_(e)?K_:Array.isArray(e)?j_:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Q_:rs)(n,e)}function ig(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function rg(n){return function(){return n}}function sg(n){return+n}var Pl=[0,1];function gi(n){return n}function Wa(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:rg(isNaN(e)?NaN:.5)}function ag(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function og(n,e,t){var i=n[0],r=n[1],s=e[0],a=e[1];return r<i?(i=Wa(r,i),s=t(a,s)):(i=Wa(i,r),s=t(s,a)),function(o){return s(i(o))}}function lg(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),s=new Array(i),a=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++a<i;)r[a]=Wa(n[a],n[a+1]),s[a]=t(e[a],e[a+1]);return function(o){var c=w_(n,o,1,i)-1;return s[c](r[c](o))}}function cg(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function ug(){var n=Pl,e=Pl,t=lo,i,r,s,a=gi,o,c,l;function u(){var h=Math.min(n.length,e.length);return a!==gi&&(a=ag(n[0],n[h-1])),o=h>2?lg:og,c=l=null,d}function d(h){return h==null||isNaN(h=+h)?s:(c||(c=o(n.map(i),e,t)))(i(a(h)))}return d.invert=function(h){return a(r((l||(l=o(e,n.map(i),rs)))(h)))},d.domain=function(h){return arguments.length?(n=Array.from(h,sg),u()):n.slice()},d.range=function(h){return arguments.length?(e=Array.from(h),u()):e.slice()},d.rangeRound=function(h){return e=Array.from(h),t=ig,u()},d.clamp=function(h){return arguments.length?(a=h?!0:gi,u()):a!==gi},d.interpolate=function(h){return arguments.length?(t=h,u()):t},d.unknown=function(h){return arguments.length?(s=h,d):s},function(h,m){return i=h,r=m,u()}}function fg(){return ug()(gi,gi)}function hg(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function ss(n,e){if((t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"))<0)return null;var t,i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function Ci(n){return n=ss(Math.abs(n)),n?n[1]:NaN}function dg(n,e){return function(t,i){for(var r=t.length,s=[],a=0,o=n[0],c=0;r>0&&o>0&&(c+o+1>i&&(o=Math.max(1,i-c)),s.push(t.substring(r-=o,r+o)),!((c+=o+1)>i));)o=n[a=(a+1)%n.length];return s.reverse().join(e)}}function pg(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var mg=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function as(n){if(!(e=mg.exec(n)))throw new Error("invalid format: "+n);var e;return new co({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}as.prototype=co.prototype;function co(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}co.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function _g(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var Tc;function gg(n,e){var t=ss(n,e);if(!t)return n+"";var i=t[0],r=t[1],s=r-(Tc=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return s===a?i:s>a?i+new Array(s-a+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+ss(n,Math.max(0,e+s-1))[0]}function Dl(n,e){var t=ss(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const Ll={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:hg,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Dl(n*100,e),r:Dl,s:gg,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Ul(n){return n}var Il=Array.prototype.map,Nl=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function vg(n){var e=n.grouping===void 0||n.thousands===void 0?Ul:dg(Il.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?Ul:pg(Il.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",o=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(d){d=as(d);var h=d.fill,m=d.align,_=d.sign,x=d.symbol,p=d.zero,f=d.width,b=d.comma,T=d.precision,S=d.trim,C=d.type;C==="n"?(b=!0,C="g"):Ll[C]||(T===void 0&&(T=12),S=!0,C="g"),(p||h==="0"&&m==="=")&&(p=!0,h="0",m="=");var P=x==="$"?t:x==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():"",D=x==="$"?i:/[%p]/.test(C)?a:"",N=Ll[C],E=/[defgprs%]/.test(C);T=T===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,T)):Math.max(0,Math.min(20,T));function M(A){var k=P,B=D,V,Z,W;if(C==="c")B=N(A)+B,A="";else{A=+A;var Q=A<0||1/A<0;if(A=isNaN(A)?c:N(Math.abs(A),T),S&&(A=_g(A)),Q&&+A==0&&_!=="+"&&(Q=!1),k=(Q?_==="("?_:o:_==="-"||_==="("?"":_)+k,B=(C==="s"?Nl[8+Tc/3]:"")+B+(Q&&_==="("?")":""),E){for(V=-1,Z=A.length;++V<Z;)if(W=A.charCodeAt(V),48>W||W>57){B=(W===46?r+A.slice(V+1):A.slice(V))+B,A=A.slice(0,V);break}}}b&&!p&&(A=e(A,1/0));var R=k.length+A.length+B.length,q=R<f?new Array(f-R+1).join(h):"";switch(b&&p&&(A=e(q+A,q.length?f-B.length:1/0),q=""),m){case"<":A=k+A+B+q;break;case"=":A=k+q+A+B;break;case"^":A=q.slice(0,R=q.length>>1)+k+A+B+q.slice(R);break;default:A=q+k+A+B;break}return s(A)}return M.toString=function(){return d+""},M}function u(d,h){var m=l((d=as(d),d.type="f",d)),_=Math.max(-8,Math.min(8,Math.floor(Ci(h)/3)))*3,x=Math.pow(10,-_),p=Nl[8+_/3];return function(f){return m(x*f)+p}}return{format:l,formatPrefix:u}}var Hr,bc,Ac;xg({thousands:",",grouping:[3],currency:["$",""]});function xg(n){return Hr=vg(n),bc=Hr.format,Ac=Hr.formatPrefix,Hr}function Mg(n){return Math.max(0,-Ci(Math.abs(n)))}function Sg(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ci(e)/3)))*3-Ci(Math.abs(n)))}function Eg(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Ci(e)-Ci(n))+1}function yg(n,e,t,i){var r=L_(n,e,t),s;switch(i=as(i??",f"),i.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(s=Sg(r,a))&&(i.precision=s),Ac(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=Eg(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=Mg(r))&&(i.precision=s-(i.type==="%")*2);break}}return bc(i)}function Tg(n){var e=n.domain;return n.ticks=function(t){var i=e();return D_(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return yg(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,s=i.length-1,a=i[r],o=i[s],c,l,u=10;for(o<a&&(l=a,a=o,o=l,l=r,r=s,s=l);u-- >0;){if(l=Ga(a,o,t),l===c)return i[r]=a,i[s]=o,e(i);if(l>0)a=Math.floor(a/l)*l,o=Math.ceil(o/l)*l;else if(l<0)a=Math.ceil(a*l)/l,o=Math.floor(o*l)/l;else break;c=l}return n},n}function wc(){var n=fg();return n.copy=function(){return cg(n,wc())},U_.apply(n,arguments),Tg(n)}var bg=vn('<div class="loading svelte-1peilnd"></div>'),Ag=vn('<div class="error svelte-1peilnd"> </div>'),wg=vn('<div class="error svelte-1peilnd">No schools data available</div>'),Rg=Rc('<rect class="histogram-bar svelte-1peilnd" tabindex="0" role="button"></rect>'),Cg=vn('<div class="year-mark svelte-1peilnd"><div class="year-line svelte-1peilnd"></div> <span class="svelte-1peilnd"> </span></div>'),Pg=vn('<div class="level-info svelte-1peilnd"><h5 class="svelte-1peilnd"> </h5> <ul class="svelte-1peilnd"><li class="svelte-1peilnd"> </li> <li class="svelte-1peilnd"> </li></ul></div>'),Dg=vn('<div class="info-content svelte-1peilnd"><div class="info-section svelte-1peilnd"><h3 class="svelte-1peilnd"> </h3> <p class="school-date svelte-1peilnd"> </p></div> <div class="info-section svelte-1peilnd"><h4 class="svelte-1peilnd">Location</h4> <ul class="svelte-1peilnd"><li class="svelte-1peilnd"> </li> <li class="svelte-1peilnd"> </li> <li class="svelte-1peilnd"> </li></ul></div> <div class="info-section svelte-1peilnd"><h4 class="svelte-1peilnd">Infrastructure</h4> <ul class="svelte-1peilnd"><li class="svelte-1peilnd"> </li> <li class="svelte-1peilnd"> </li> <li class="svelte-1peilnd"> </li> <li class="svelte-1peilnd"> </li> <li class="svelte-1peilnd"> </li> <li class="svelte-1peilnd"> </li></ul></div> <div class="info-section svelte-1peilnd"><h4 class="svelte-1peilnd">Education Levels</h4> <!></div></div>'),Lg=vn('<p class="no-data svelte-1peilnd">No school selected</p>'),Ug=vn('<div class="visualization-panel svelte-1peilnd"><canvas id="three-canvas" style="width: 100%; height: 100%;" class="svelte-1peilnd"></canvas> <div class="navigation-controls svelte-1peilnd"><button class="svelte-1peilnd">←</button> <button class="svelte-1peilnd">→</button></div></div> <div class="timeline-panel svelte-1peilnd"><div class="histogram-container svelte-1peilnd"><svg width="100%" height="100"></svg></div> <div class="slider-container svelte-1peilnd"><input type="range" class="timeline-slider svelte-1peilnd" step="1"> <div class="year-label svelte-1peilnd"> </div></div> <div class="year-labels svelte-1peilnd"><!></div></div> <div class="info-panel svelte-1peilnd"><h2 class="svelte-1peilnd">School Information</h2> <!></div> <div class="stats-panel svelte-1peilnd"><h2 class="svelte-1peilnd">Statistics</h2> <div class="charts-container"></div></div>',1),Ig=vn('<div class="explorer-container svelte-1peilnd"><!></div>');function Ng(n,e){jc(e,!1);const t=xn(),i=xn(),r=xn();let s=2e3,a=2025,o=xn(2e3),c=new Map,l=xn([]),u=xn(null),d=[],h=xn(null),m=xn(!0),_="";function x(R){return R.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}let p,f,b;function T(){const R=document.getElementById("three-canvas");if(!R){console.error("Canvas element not found");return}p=new Rf,p.background=new Ge(15790320),f=new Ht(45,R.clientWidth/R.clientHeight,.1,1e3),f.position.set(50,50,50),f.lookAt(0,0,0),b=new E_({canvas:R,antialias:!0,alpha:!0}),setTimeout(()=>{R&&b&&b.setSize(R.clientWidth,R.clientHeight)},0);const q=new zf(16777215,.6);p.add(q);const te=new Bf(16777215,.8);te.position.set(20,30,20),p.add(te);const de=new Ko(100,20);p.add(de),window.addEventListener("resize",()=>{const Ae=R.clientWidth,De=R.clientHeight;f.aspect=Ae/De,f.updateProjectionMatrix(),b.setSize(Ae,De)})}function S(R){p.children=p.children.filter(xe=>xe instanceof ro||xe instanceof Ko);const q=new rr(R.totalWidth,R.totalDepth),te=new to({color:9498256,transparent:!0,opacity:.3,side:Qt}),de=new Kt(q,te);de.rotation.x=-Math.PI/2,p.add(de);const Ae=new Li(R.flooredWidth,R.floors*3,R.flooredDepth),De=new Uf({color:8421504}),X=new Kt(Ae,De);X.position.y=R.floors*3/2,p.add(X);const ne=new Lf(Ae),me=new hc(ne,new io({color:0}));me.position.copy(X.position),p.add(me);const re=Math.max(R.totalWidth,R.totalDepth,R.floors*3);f.position.set(re*2,re*1.5,re*2),f.lookAt(0,0,0)}function C(){requestAnimationFrame(C),b.render(p,f)}function P(R){if(!R||!Re(l).length)return;if(d=Re(l).filter(te=>te.date===R),d.length===0){Tt(u,null);return}const q=Math.floor(Math.random()*d.length);Tt(u,d[q]),Re(u)&&S(Re(u))}function D(R){if(!Re(u)||d.length===0)return;const q=[...d].sort((Ae,De)=>Ae.raw.area_terreno-De.raw.area_terreno),te=q.findIndex(Ae=>{var De;return Ae.raw.cod_local===((De=Re(u))==null?void 0:De.raw.cod_local)});let de;R==="next"?de=te<q.length-1?te+1:te:de=te>0?te-1:te,Tt(u,q[de]),S(Re(u))}let N;function E(R){clearTimeout(N),N=window.setTimeout(()=>{P(R)},200)}function M(R){try{if(!R)return 2e3;const q=R.split("-");if(q.length!==3)return 2e3;const te=parseInt(q[0]);return isNaN(te)||te<1800||te>new Date().getFullYear()?(console.warn(`Invalid year in date: ${R}`),2e3):te}catch(q){return console.warn(`Error parsing date: ${R}`,q),2e3}}function A(R){if(!R)return"No date available";const[q,te,de]=R.split("-");return`${de}/${te}/${q}`}function k(R){try{if(!R)return null;const q=M(R.fecha_creacion_colegio);return q===2e3&&R.fecha_creacion_colegio&&console.warn(`Defaulted to 2000 for school ${R.cod_local}: ${R.fecha_creacion_colegio}`),{date:q,totalWidth:Math.sqrt(R.area_terreno||0),totalDepth:Math.sqrt(R.area_terreno||0),flooredWidth:Math.sqrt(R.area_techada_huella||0),flooredDepth:Math.sqrt(R.area_techada_huella||0),floors:R.pisos_mediana||1,raw:R}}catch(q){return console.error("Error processing school:",R,q),null}}async function B(){try{const R=await fetch("/api/schools");if(!R.ok)throw new Error(`HTTP error! status: ${R.status}`);const q=await R.text();try{return JSON.parse(q).map(k).filter(de=>de!==null)}catch{throw console.error("JSON Parse Error:",q.substring(0,200)),new Error("Invalid JSON response from server")}}catch(R){throw console.error("Load Error:",R),R}}tu(async()=>{try{Tt(m,!0),Tt(l,await B()),Tt(m,!1),Re(l).length>0?(console.log("Schools loaded successfully"),setTimeout(()=>{T(),C(),P(Re(o))},100)):Tt(h,"No schools data available")}catch(R){Tt(m,!1),console.error("Failed to initialize:",R),Tt(h,R instanceof Error?R.message:"Failed to initialize application")}}),nu(()=>{b&&(b.dispose(),b.forceContextLoss()),clearTimeout(N)}),_s(()=>{},()=>{Tt(t,Array.from(c.entries()).sort(([R],[q])=>R-q))}),_s(()=>{},()=>{Tt(i,Math.max(...Array.from(c.values()),1))}),_s(()=>Re(i),()=>{Tt(r,wc().domain([0,Re(i)]).range([0,90]))}),Jc(),Cc();var V=Ig(),Z=ke(V);{var W=R=>{var q=bg();q.textContent=`Loading schools data... ${_}`,Lt(R,q)},Q=R=>{var q=ds(),te=ur(q);{var de=De=>{var X=Ag(),ne=ke(X);He(X),Ot(()=>_t(ne,`Error: ${Re(h)??""}`)),Lt(De,X)},Ae=De=>{var X=ds(),ne=ur(X);{var me=xe=>{var Be=wg();Lt(xe,Be)},re=xe=>{var Be=Ug(),be=ur(Be),rt=it(ke(be),2),tt=ke(rt),ze=it(tt,2);He(rt),He(be);var w=it(be,2),vt=ke(w),Oe=ke(vt);xs(Oe,5,()=>Re(t),vs,(ie,Ce,J)=>{let se=()=>Re(Ce)[0],ve=()=>Re(Ce)[1];var _e=Rg();const fe=gs(()=>100/Re(t).length),Ie=gs(()=>Math.max(...Array.from(c.values()))),we=gs(()=>ve()/Re(Ie)*80);Ot(()=>{jt(_e,"x",`${J*Re(fe)}%`),jt(_e,"y",90-Re(we)),jt(_e,"width",`${Re(fe)-1}%`),jt(_e,"height",Re(we)),jt(_e,"aria-label",`${se()}: ${ve()} schools`),uu(_e,"active",se()===Re(o))}),Gi("click",_e,()=>{Tt(o,se()),P(se())}),Gi("keydown",_e,Xe=>{(Xe.key==="Enter"||Xe.key===" ")&&(Tt(o,se()),P(se()))}),Lt(ie,_e)}),He(Oe),He(vt);var Se=it(vt,2),$e=ke(Se);ou($e),jt($e,"min",s),jt($e,"max",a);var Ee=it($e,2),y=ke(Ee);Ot(()=>_t(y,`${Re(o)??""} (${(c.get(Re(o))||0)??""} schools)`)),He(Ee),He(Se);var g=it(Se,2),F=ke(g);{var K=ie=>{var Ce=ds(),J=ur(Ce);xs(J,1,()=>Array.from({length:13},(se,ve)=>s+Math.floor(ve*(a-s)/12)),vs,(se,ve)=>{var _e=Cg(),fe=it(ke(_e),2),Ie=ke(fe,!0);He(fe),He(_e),Ot(()=>{jt(_e,"style",`left: ${(Re(ve)-s)/(a-s)*100}%`),_t(Ie,Re(ve))}),Lt(se,_e)}),Lt(ie,Ce)};Vi(F,ie=>{ie(K)})}He(g),He(w);var j=it(w,2),Y=it(ke(j),2);{var Me=ie=>{var Ce=Dg(),J=ke(Ce),se=ke(J),ve=ke(se,!0);He(se);var _e=it(se,2),fe=ke(_e);Ot(()=>_t(fe,`Created: ${A(Re(u).raw.fecha_creacion_colegio)??""}`)),He(_e),He(J);var Ie=it(J,2),we=it(ke(Ie),2),Xe=ke(we),L=ke(Xe);He(Xe);var ae=it(Xe,2),G=ke(ae);He(ae);var $=it(ae,2),he=ke($);He($),He(we),He(Ie);var le=it(Ie,2),Le=it(ke(le),2),nt=ke(Le),dt=ke(nt);Ot(()=>_t(dt,`Land Area: ${x(Re(u).raw.area_terreno)??""} m²`)),He(nt);var qe=it(nt,2),Ct=ke(qe);Ot(()=>_t(Ct,`Built Area: ${x(Re(u).raw.area_techada_huella)??""} m²`)),He(qe);var Pt=it(qe,2),ar=ke(Pt);Ot(()=>_t(ar,`Coverage Ratio: ${(Re(u).raw.ratio_area_techada*100).toFixed(1)??""}%`)),He(Pt);var Zn=it(Pt,2),an=ke(Zn);He(Zn);var Ln=it(Zn,2),or=ke(Ln);He(Ln);var Ii=it(Ln,2),jn=ke(Ii);He(Ii),He(Le),He(le);var Ni=it(le,2),Jn=it(ke(Ni),2);xs(Jn,1,()=>Re(u).raw.niveles,vs,(lr,Qn)=>{var Fi=Pg(),Oi=ke(Fi),us=ke(Oi,!0);He(Oi);var cr=it(Oi,2),Bi=ke(cr),fs=ke(Bi);Ot(()=>_t(fs,`Students: ${x(Re(Qn).alumnos)??""}`)),He(Bi);var v=it(Bi,2),U=ke(v);He(v),He(cr),He(Fi),Ot(()=>{_t(us,Re(Qn).nivel),_t(U,`2024 Fees: ${Re(Qn).pensiones.rango_mensualidad_2024??""}`)}),Lt(lr,Fi)}),He(Ni),He(Ce),Ot(()=>{_t(ve,Re(u).raw.nombre_colegio),_t(L,`Region: ${Re(u).raw.region??""}`),_t(G,`Province: ${Re(u).raw.provincia??""}`),_t(he,`District: ${Re(u).raw.distrito??""}`),_t(an,`Floors: ${Re(u).raw.pisos_mediana??""}`),_t(or,`Land Type: ${Re(u).raw.tipo_terreno??""}`),_t(jn,`Land Usage: ${Re(u).raw.uso_terreno??""}`)}),Lt(ie,Ce)},ce=ie=>{var Ce=Lg();Lt(ie,Ce)};Vi(Y,ie=>{Re(u)?ie(Me):ie(ce,!1)})}He(j),eu(2),Ot(()=>lu($e,Re(o))),Gi("click",tt,()=>D("prev")),Gi("click",ze,()=>D("next")),Gi("input",$e,ie=>E(parseInt(ie.currentTarget.value))),Lt(xe,Be)};Vi(ne,xe=>{Re(l).length===0?xe(me):xe(re,!1)},!0)}Lt(De,X)};Vi(te,De=>{Re(h)?De(de):De(Ae,!1)},!0)}Lt(R,q)};Vi(Z,R=>{Re(m)?R(W):R(Q,!1)})}He(V),Lt(n,V),Qc()}function Vg(n){Ng(n,{})}export{Vg as component};
