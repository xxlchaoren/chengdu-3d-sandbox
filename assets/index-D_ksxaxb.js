(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const fl="180",ls={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nd=0,ql=1,id=2,Uh=1,Nh=2,jn=3,mi=0,Je=1,wn=2,Qn=0,cs=1,oa=2,jl=3,Zl=4,sd=5,Ci=100,rd=101,od=102,ad=103,ld=104,cd=200,hd=201,ud=202,dd=203,aa=204,la=205,fd=206,pd=207,md=208,gd=209,_d=210,xd=211,vd=212,Md=213,yd=214,ca=0,ha=1,ua=2,ds=3,da=4,fa=5,pa=6,ma=7,Fh=0,Sd=1,bd=2,fi=0,zh=1,Oh=2,Bh=3,pl=4,kh=5,Hh=6,Vh=7,Gh=300,fs=301,ps=302,ga=303,_a=304,ao=306,xa=1e3,Di=1001,va=1002,fn=1003,Ed=1004,fr=1005,Nn=1006,_o=1007,Li=1008,kn=1009,Wh=1010,Xh=1011,qs=1012,ml=1013,Ii=1014,Fn=1015,ti=1016,gl=1017,_l=1018,js=1020,Kh=35902,Yh=35899,qh=1021,jh=1022,Rn=1023,Zs=1026,$s=1027,xl=1028,vl=1029,Zh=1030,Ml=1031,yl=1033,Yr=33776,qr=33777,jr=33778,Zr=33779,Ma=35840,ya=35841,Sa=35842,ba=35843,Ea=36196,Ta=37492,wa=37496,Aa=37808,Ra=37809,Ca=37810,Pa=37811,Da=37812,La=37813,Ia=37814,Ua=37815,Na=37816,Fa=37817,za=37818,Oa=37819,Ba=37820,ka=37821,Ha=36492,Va=36494,Ga=36495,Wa=36283,Xa=36284,Ka=36285,Ya=36286,Td=3200,wd=3201,$h=0,Ad=1,di="",hn="srgb",ms="srgb-linear",eo="linear",pe="srgb",Hi=7680,$l=519,Rd=512,Cd=513,Pd=514,Jh=515,Dd=516,Ld=517,Id=518,Ud=519,Jl=35044,Nd=35048,Ql="300 es",zn=2e3,no=2001;class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const Vs=Math.PI/180,Js=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function Sl(i,t){return(i%t+t)%t}function Fd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zd(i,t,e){return i!==t?(e-i)/(t-i):0}function Gs(i,t,e){return(1-e)*i+e*t}function Od(i,t,e,n){return Gs(i,t,1-Math.exp(-e*n))}function Bd(i,t=1){return t-Math.abs(Sl(i,t*2)-t)}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gd(i,t){return i+Math.random()*(t-i)}function Wd(i){return i*(.5-Math.random())}function Xd(i){i!==void 0&&(tc=i);let t=tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kd(i){return i*Vs}function Yd(i){return i*Js}function qd(i){return(i&i-1)===0&&i!==0}function jd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $d(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yn={DEG2RAD:Vs,RAD2DEG:Js,generateUUID:Oi,clamp:Qt,euclideanModulo:Sl,mapLinear:Fd,inverseLerp:zd,lerp:Gs,damp:Od,pingpong:Bd,smoothstep:kd,smootherstep:Hd,randInt:Vd,randFloat:Gd,randFloatSpread:Wd,seededRandom:Xd,degToRad:Kd,radToDeg:Yd,isPowerOfTwo:qd,ceilPowerOfTwo:jd,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:$d,normalize:je,denormalize:ss};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ni{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const x=a*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new L,ec=new ni;class $t{constructor(t,e,n,s,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],S=s[4],x=s[7],R=s[2],T=s[5],A=s[8];return r[0]=o*_+a*y+l*R,r[3]=o*m+a*S+l*T,r[6]=o*p+a*x+l*A,r[1]=c*_+h*y+u*R,r[4]=c*m+h*S+u*T,r[7]=c*p+h*x+u*A,r[2]=d*_+f*y+g*R,r[5]=d*m+f*S+g*T,r[8]=d*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vo.makeScale(t,e)),this}rotate(t){return this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new $t;function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jd(){const i=io("canvas");return i.style.display="block",i}const nc={};function Qs(i){i in nc||(nc[i]=!0,console.warn(i))}function Qd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ic=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tf(){const i={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ms]:{primaries:t,whitePoint:n,transfer:eo,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const ae=tf();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class ef{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vi===void 0&&(Vi=io("canvas")),Vi.width=t.width,Vi.height=t.height;const s=Vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=io("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nf=0;class bl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mo(s[o].image)):r.push(Mo(s[o]))}else r=Mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;const yo=new L;class Qe extends zi{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=Di,s=Di,r=Nn,o=Li,a=Rn,l=kn,c=Qe.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Oi(),this.name="",this.source=new bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yo).x}get height(){return this.source.getSize(yo).y}get depth(){return this.source.getSize(yo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xa:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xa:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Gh;Qe.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(f+1)/2,R=(p+1)/2,T=(h+d)/4,A=(u+_)/4,P=(g+m)/4;return S>x&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Qe(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new bl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends rf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tu extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class of extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),mr.subVectors(this.max,Ds),Gi.subVectors(t.a,Ds),Wi.subVectors(t.b,Ds),Xi.subVectors(t.c,Ds),ri.subVectors(Wi,Gi),oi.subVectors(Xi,Wi),yi.subVectors(Gi,Xi);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-yi.z,yi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,yi.z,0,-yi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-yi.y,yi.x,0];return!So(e,Gi,Wi,Xi,mr)||(e=[1,0,0,0,1,0,0,0,1],!So(e,Gi,Wi,Xi,mr))?!1:(gr.crossVectors(ri,oi),e=[gr.x,gr.y,gr.z],So(e,Gi,Wi,Xi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,pr=new Bi,Gi=new L,Wi=new L,Xi=new L,ri=new L,oi=new L,yi=new L,Ds=new L,mr=new L,gr=new L,Si=new L;function So(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const af=new Bi,Ls=new L,bo=new L;class Ss{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):af.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(bo)),this.expandByPoint(Ls.copy(t.center).sub(bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xn=new L,Eo=new L,_r=new L,ai=new L,To=new L,xr=new L,wo=new L;class lo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Eo.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=ai.dot(this.direction),l=-ai.dot(_r),c=ai.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eo).addScaledVector(_r,d),f}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){To.subVectors(e,t),xr.subVectors(n,t),wo.crossVectors(To,xr);let o=this.direction.dot(wo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);const l=a*this.direction.dot(xr.crossVectors(ai,xr));if(l<0)return null;const c=a*this.direction.dot(To.cross(ai));if(c<0||l+c>o)return null;const h=-a*ai.dot(wo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lf,t,cf)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),li.crossVectors(n,an),li.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),li.crossVectors(n,an)),li.normalize(),vr.crossVectors(an,li),s[0]=li.x,s[4]=vr.x,s[8]=an.x,s[1]=li.y,s[5]=vr.y,s[9]=an.y,s[2]=li.z,s[6]=vr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],S=n[7],x=n[11],R=n[15],T=s[0],A=s[4],P=s[8],E=s[12],M=s[1],D=s[5],F=s[9],k=s[13],q=s[2],G=s[6],X=s[10],$=s[14],V=s[3],dt=s[7],xt=s[11],Et=s[15];return r[0]=o*T+a*M+l*q+c*V,r[4]=o*A+a*D+l*G+c*dt,r[8]=o*P+a*F+l*X+c*xt,r[12]=o*E+a*k+l*$+c*Et,r[1]=h*T+u*M+d*q+f*V,r[5]=h*A+u*D+d*G+f*dt,r[9]=h*P+u*F+d*X+f*xt,r[13]=h*E+u*k+d*$+f*Et,r[2]=g*T+_*M+m*q+p*V,r[6]=g*A+_*D+m*G+p*dt,r[10]=g*P+_*F+m*X+p*xt,r[14]=g*E+_*k+m*$+p*Et,r[3]=y*T+S*M+x*q+R*V,r[7]=y*A+S*D+x*G+R*dt,r[11]=y*P+S*F+x*X+R*xt,r[15]=y*E+S*k+x*$+R*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*y+n*S+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=y*A,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=S*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=x*A,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=R*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=l*c,S=l*h,x=l*u,R=n.x,T=n.y,A=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+x)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+S)*A,s[9]=(m-y)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const c=1/r,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=zn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===no)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===zn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===no)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new L,bn=new me,lf=new L(0,0,0),cf=new L(1,1,1),li=new L,vr=new L,an=new L,rc=new me,oc=new ni;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hf=0;const ac=new L,Yi=new ni,Kn=new me,Mr=new L,Is=new L,uf=new L,df=new ni,lc=new L(1,0,0),cc=new L(0,1,0),hc=new L(0,0,1),uc={type:"added"},ff={type:"removed"},qi={type:"childadded",child:null},Ao={type:"childremoved",child:null};class Pe extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new L,e=new Pn,n=new ni,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new $t}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(lc,t)}rotateY(t){return this.rotateOnAxis(cc,t)}rotateZ(t){return this.rotateOnAxis(hc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lc,t)}translateY(t){return this.translateOnAxis(cc,t)}translateZ(t){return this.translateOnAxis(hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Is,Mr,this.up):Kn.lookAt(Mr,Is,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uc),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ff),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new L(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new L,Yn=new L,Ro=new L,qn=new L,ji=new L,Zi=new L,dc=new L,Co=new L,Po=new L,Do=new L,Lo=new we,Io=new we,Uo=new we;class An{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),Yn.subVectors(n,e),Ro.subVectors(t,e);const o=En.dot(En),a=En.dot(Yn),l=En.dot(Ro),c=Yn.dot(Yn),h=Yn.dot(Ro),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Lo.setScalar(0),Io.setScalar(0),Uo.setScalar(0),Lo.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),Uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lo,r.x),o.addScaledVector(Io,r.y),o.addScaledVector(Uo,r.z),o}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),Yn.subVectors(t,e),En.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ji.subVectors(s,n),Zi.subVectors(r,n),Co.subVectors(t,n);const l=ji.dot(Co),c=Zi.dot(Co);if(l<=0&&c<=0)return e.copy(n);Po.subVectors(t,s);const h=ji.dot(Po),u=Zi.dot(Po);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ji,o);Do.subVectors(t,r);const f=ji.dot(Do),g=Zi.dot(Do);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Zi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return dc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(dc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ji,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},yr={h:0,s:0,l:0};function No(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Sl(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=No(o,r,t+1/3),this.g=No(o,r,t),this.b=No(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return ae.workingToColorSpace(We.copy(this),t),Math.round(Qt(We.r*255,0,255))*65536+Math.round(Qt(We.g*255,0,255))*256+Math.round(Qt(We.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=hn){ae.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(yr);const n=Gs(ci.h,yr.h,e),s=Gs(ci.s,yr.s,e),r=Gs(ci.l,yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new bt;bt.NAMES=eu;let pf=0;class bs extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=cs,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sr extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new L,Sr=new it;let mf=0;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}}class nu extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class iu extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gf=0;const xn=new me,Fo=new Pe,$i=new L,ln=new Bi,Us=new Bi,ke=new L;class Ue extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?iu:nu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(ln.min,Us.min),ln.expandByPoint(ke),ke.addVectors(ln.max,Us.max),ln.expandByPoint(ke)):(ln.expandByPoint(Us.min),ln.expandByPoint(Us.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),ke.add($i)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;const c=new L,h=new L,u=new L,d=new it,f=new it,g=new it,_=new L,m=new L;function p(P,E,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(_),a[E].add(_),a[M].add(_),l[P].add(m),l[E].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,E=y.length;P<E;++P){const M=y[P],D=M.start,F=M.count;for(let k=D,q=D+F;k<q;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new L,x=new L,R=new L,T=new L;function A(P){R.fromBufferAttribute(s,P),T.copy(R);const E=a[P];S.copy(E),S.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(T,E);const D=x.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,D)}for(let P=0,E=y.length;P<E;++P){const M=y[P],D=M.start,F=M.count;for(let k=D,q=D+F;k<q;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new me,bi=new lo,br=new Ss,pc=new L,Er=new L,Tr=new L,wr=new L,zo=new L,Ar=new L,mc=new L,Rr=new L;class Bt extends Pe{constructor(t=new Ue,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(zo.fromBufferAttribute(u,t),o?Ar.addScaledVector(zo,h):Ar.addScaledVector(zo.sub(e),h))}e.add(Ar)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(br.containsPoint(bi.origin)===!1&&(bi.intersectSphere(br,pc)===null||bi.origin.distanceToSquared(pc)>(t.far-t.near)**2))&&(fc.copy(r).invert(),bi.copy(t.ray).applyMatrix4(fc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,R=S;x<R;x+=3){const T=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);s=Cr(this,p,t,n,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=Cr(this,o,t,n,c,h,u,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,R=S;x<R;x+=3){const T=x,A=x+1,P=x+2;s=Cr(this,p,t,n,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,x=m+2;s=Cr(this,o,t,n,c,h,u,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _f(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===mi,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:i}}function Cr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Er),i.getVertexPosition(l,Tr),i.getVertexPosition(c,wr);const h=_f(i,t,e,n,Er,Tr,wr,mc);if(h){const u=new L;An.getBarycoord(mc,Er,Tr,wr,u),s&&(h.uv=An.getInterpolatedAttribute(s,a,l,c,u,new it)),r&&(h.uv1=An.getInterpolatedAttribute(r,a,l,c,u,new it)),o&&(h.normal=An.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};An.getNormal(Er,Tr,wr,d.normal),h.face=d,h.barycoord=u}return h}class pn extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(u,2));function g(_,m,p,y,S,x,R,T,A,P,E){const M=x/A,D=R/P,F=x/2,k=R/2,q=T/2,G=A+1,X=P+1;let $=0,V=0;const dt=new L;for(let xt=0;xt<X;xt++){const Et=xt*D-k;for(let Kt=0;Kt<G;Kt++){const ee=Kt*M-F;dt[_]=ee*y,dt[m]=Et*S,dt[p]=q,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[p]=T>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Kt/A),u.push(1-xt/P),$+=1}}for(let xt=0;xt<P;xt++)for(let Et=0;Et<A;Et++){const Kt=d+Et+G*xt,ee=d+Et+G*(xt+1),ct=d+(Et+1)+G*(xt+1),gt=d+(Et+1)+G*xt;l.push(Kt,ee,gt),l.push(ee,ct,gt),V+=6}a.addGroup(f,V,E),f+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=gs(i[e]);for(const s in n)t[s]=n[s]}return t}function xf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function su(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const tr={clone:gs,merge:Ze};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ru extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new L,gc=new it,_c=new it;class Mn extends ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,gc,_c),e.subVectors(_c,gc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class yf extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const l=new Mn(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new Mn(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ou extends Qe{constructor(t=[],e=fs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sf extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ou(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Qn});r.uniforms.tEquirect.value=e;const o=new Bt(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Nn),new yf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class dn extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bf={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Tl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new Tl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ef extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tf extends Qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=fn,h=fn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new me,xc=new me,Pr=[],vc=new Bi,wf=new me,Ns=new Bt,Fs=new Ss;class On extends Bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),vc.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(vc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Fs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),xc.multiplyMatrices(n,ts),Ns.matrixWorld=xc,Ns.raycast(t,Pr);for(let o=0,a=Pr.length;o<a;o++){const l=Pr[o];l.instanceId=r,l.object=this,e.push(l)}Pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tf(new Float32Array(s*this.count),s,this.count,xl,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bo=new L,Af=new L,Rf=new $t;class ui{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Bo.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rf.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Ss,Cf=new it(.5,.5),Dr=new L;class wl{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],S=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,p-g,R-y).normalize(),s[1].setComponents(c+o,f+h,p+g,R+y).normalize(),s[2].setComponents(c+a,f+u,p+_,R+S).normalize(),s[3].setComponents(c-a,f-u,p-_,R-S).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,p-m,R-x).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-x).normalize(),e===zn)s[5].setComponents(c+l,f+d,p+m,R+x).normalize();else if(e===no)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);const e=Cf.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Dr.x=s.normal.x>0?t.max.x:t.min.x,Dr.y=s.normal.y>0?t.max.y:t.min.y,Dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class au extends bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mc=new me,ja=new lo,Lr=new Ss,Ir=new L;class Pf extends Pe{constructor(t=new Ue,e=new au){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,t.ray.intersectsSphere(Lr)===!1)return;Mc.copy(s).invert(),ja.copy(t.ray).applyMatrix4(Mc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ir.fromBufferAttribute(u,m),yc(Ir,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ir.fromBufferAttribute(u,g),yc(Ir,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yc(i,t,e,n,s,r,o){const a=ja.distanceSqToPoint(i);if(a<e){const l=new L;ja.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class lu extends Qe{constructor(t,e,n=Ii,s,r,o,a=fn,l=fn,c,h=Zs,u=1){if(h!==Zs&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cu extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ii extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(f,2));function y(){const x=new L,R=new L;let T=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const E=[],M=P/r,D=M*(e-t)+t;for(let F=0;F<=s;F++){const k=F/s,q=k*l+a,G=Math.sin(q),X=Math.cos(q);R.x=D*G,R.y=-M*n+m,R.z=D*X,u.push(R.x,R.y,R.z),x.set(G,A,X).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-M),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const M=_[E][P],D=_[E+1][P],F=_[E+1][P+1],k=_[E][P+1];(t>0||E!==0)&&(h.push(M,D,k),T+=3),(e>0||E!==r-1)&&(h.push(D,F,k),T+=3)}c.addGroup(p,T,0),p+=T}function S(x){const R=g,T=new it,A=new L;let P=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const q=F/s*l+a,G=Math.cos(q),X=Math.sin(q);A.x=E*X,A.y=m*M,A.z=E*G,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=G*.5+.5,T.y=X*.5*M+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){const k=R+F,q=D+F;x===!0?h.push(q,q+1,k):h.push(q+1,q,k),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Es extends ii{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Es(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Al extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new L,x=new L,R=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],S),f(e[T+1],x),f(e[T+2],R),l(S,x,R,y)}function l(y,S,x,R){const T=R+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const E=y.clone().lerp(x,P/T),M=S.clone().lerp(x,P/T),D=T-P;for(let F=0;F<=D;F++)F===0&&P===T?A[P][F]=E:A[P][F]=E.clone().lerp(M,F/D)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){const M=Math.floor(E/2);E%2===0?(d(A[P][M+1]),d(A[P+1][M]),d(A[P][M])):(d(A[P][M+1]),d(A[P+1][M+1]),d(A[P+1][M]))}}function c(y){const S=new L;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(y),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const y=new L;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const x=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(x,1-R)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const S=o[y+0],x=o[y+2],R=o[y+4],T=Math.max(S,x,R),A=Math.min(S,x,R);T>.9&&A<.1&&(S<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){const x=y*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const y=new L,S=new L,x=new L,R=new L,T=new it,A=new it,P=new it;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),R.copy(y).add(S).add(x).divideScalar(3);const D=m(R);_(T,M+0,y,D),_(A,M+2,S,D),_(P,M+4,x,D)}}function _(y,S,x,R){R<0&&y.x===1&&(o[S]=y.x-1),x.x===0&&x.z===0&&(o[S]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.vertices,t.indices,t.radius,t.details)}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new it:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,s=[],r=[],o=[],a=new L,l=new me;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rl extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Df extends Rl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ur=new L,ko=new Cl,Ho=new Cl,Vo=new Cl;class Lf extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ur.subVectors(s[0],s[1]).add(s[0]),c=Ur);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ko.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Ho.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Vo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ho.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ko.calc(l),Ho.calc(l),Vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function If(i,t){const e=1-i;return e*e*t}function Uf(i,t){return 2*(1-i)*i*t}function Nf(i,t){return i*i*t}function Ws(i,t,e,n){return If(i,t)+Uf(i,e)+Nf(i,n)}function Ff(i,t){const e=1-i;return e*e*e*t}function zf(i,t){const e=1-i;return 3*e*e*i*t}function Of(i,t){return 3*(1-i)*i*i*t}function Bf(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return Ff(i,t)+zf(i,e)+Of(i,n)+Bf(i,s)}class hu extends Vn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kf extends Vn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y),Xs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uu extends Vn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hf extends Vn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends Vn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vf extends Vn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y),Ws(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fu extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Sc(a,l.x,c.x,h.x,u.x),Sc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var Za=Object.freeze({__proto__:null,ArcCurve:Df,CatmullRomCurve3:Lf,CubicBezierCurve:hu,CubicBezierCurve3:kf,EllipseCurve:Rl,LineCurve:uu,LineCurve3:Hf,QuadraticBezierCurve:du,QuadraticBezierCurve3:Vf,SplineCurve:fu});class Gf extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Za[s.type]().fromJSON(s))}return this}}class bc extends Gf{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new uu(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new du(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new hu(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new fu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Rl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class co extends bc{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new bc().fromJSON(s))}return this}}function Wf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=pu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=jf(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return er(r,o,e,a,l,c,0),o}function pu(i,t,e,n,s){let r;if(s===op(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ec(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ec(o/n|0,i[o],i[o+1],r);return r&&_s(r,r.next)&&(ir(r),r=r.next),r}function Ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_s(e,e.next)||Ce(e.prev,e,e.next)===0)){if(ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&tp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Kf(i,n,s,r):Xf(i)){t.push(l.i,i.i,c.i),ir(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Yf(Ui(i),t),er(i,t,e,n,s,r,2)):o===2&&qf(i,t,e,n,s,r):er(Ui(i),t,e,n,s,r,1);break}}}function Xf(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Os(s,a,r,l,o,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=$a(f,g,t,e,n),y=$a(_,m,t,e,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=p&&x&&x.z<=y;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Os(a,h,l,u,c,d,S.x,S.y)&&Ce(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Os(a,h,l,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Os(a,h,l,u,c,d,S.x,S.y)&&Ce(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Os(a,h,l,u,c,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Yf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!_s(n,s)&&gu(n,e,e.next,s)&&nr(n,s)&&nr(s,n)&&(t.push(n.i,e.i,s.i),ir(e),ir(e.next),e=i=s),e=e.next}while(e!==i);return Ui(e)}function qf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ip(o,a)){let l=_u(o,a);o=Ui(o,o.next),l=Ui(l,l.next),er(o,t,e,n,s,r,0),er(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function jf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=pu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(np(c))}s.sort(Zf);for(let r=0;r<s.length;r++)e=$f(s[r],e);return e}function Zf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function $f(i,t){const e=Jf(i,t);if(!e)return t;const n=_u(e,i);return Ui(n,n.next),Ui(e,e.next)}function Jf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(_s(i,e))return e;do{if(_s(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&mu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);nr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Qf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Qf(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function tp(i,t,e,n){let s=i;do s.z===0&&(s.z=$a(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ep(s)}function ep(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function $a(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function np(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function mu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Os(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&mu(i,t,e,n,s,r,o,a)}function ip(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sp(i,t)&&(nr(i,t)&&nr(t,i)&&rp(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||_s(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _s(i,t){return i.x===t.x&&i.y===t.y}function gu(i,t,e,n){const s=Fr(Ce(i,t,e)),r=Fr(Ce(i,t,n)),o=Fr(Ce(e,n,i)),a=Fr(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&Nr(i,e,t)||r===0&&Nr(i,n,t)||o===0&&Nr(e,i,n)||a===0&&Nr(e,t,n))}function Nr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fr(i){return i>0?1:i<0?-1:0}function sp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function nr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function rp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _u(i,t){const e=Ja(i.i,i.x,i.y),n=Ja(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ec(i,t,e,n){const s=Ja(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ja(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function op(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ap{static triangulate(t,e,n=2){return Wf(t,e,n)}}class os{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Tc(t),wc(n,t);let o=t.length;e.forEach(Tc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wc(n,e[l]);const a=ap.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Tc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class rr extends Ue{constructor(t=new co([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ve(s,3)),this.setAttribute("uv",new ve(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:lp;let S,x=!1,R,T,A,P;p&&(S=p.getSpacedPoints(h),x=!0,d=!1,R=p.computeFrenetFrames(h,!1),T=new L,A=new L,P=new L),d||(m=0,f=0,g=0,_=0);const E=a.extractPoints(c);let M=E.shape;const D=E.holes;if(!os.isClockWise(M)){M=M.reverse();for(let nt=0,J=D.length;nt<J;nt++){const Z=D[nt];os.isClockWise(Z)&&(D[nt]=Z.reverse())}}function k(nt){const Z=10000000000000001e-36;let j=nt[0];for(let ft=1;ft<=nt.length;ft++){const rt=ft%nt.length,pt=nt[rt],Yt=pt.x-j.x,Xt=pt.y-j.y,w=Yt*Yt+Xt*Xt,v=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(j.x),Math.abs(j.y)),z=Z*v*v;if(w<=z){nt.splice(rt,1),ft--;continue}j=pt}}k(M),D.forEach(k);const q=D.length,G=M;for(let nt=0;nt<q;nt++){const J=D[nt];M=M.concat(J)}function X(nt,J,Z){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(J,Z)}const $=M.length;function V(nt,J,Z){let j,ft,rt;const pt=nt.x-J.x,Yt=nt.y-J.y,Xt=Z.x-nt.x,w=Z.y-nt.y,v=pt*pt+Yt*Yt,z=pt*w-Yt*Xt;if(Math.abs(z)>Number.EPSILON){const W=Math.sqrt(v),et=Math.sqrt(Xt*Xt+w*w),K=J.x-Yt/W,It=J.y+pt/W,ut=Z.x-w/et,Pt=Z.y+Xt/et,Dt=((ut-K)*w-(Pt-It)*Xt)/(pt*w-Yt*Xt);j=K+pt*Dt-nt.x,ft=It+Yt*Dt-nt.y;const ot=j*j+ft*ft;if(ot<=2)return new it(j,ft);rt=Math.sqrt(ot/2)}else{let W=!1;pt>Number.EPSILON?Xt>Number.EPSILON&&(W=!0):pt<-Number.EPSILON?Xt<-Number.EPSILON&&(W=!0):Math.sign(Yt)===Math.sign(w)&&(W=!0),W?(j=-Yt,ft=pt,rt=Math.sqrt(v)):(j=pt,ft=Yt,rt=Math.sqrt(v/2))}return new it(j/rt,ft/rt)}const dt=[];for(let nt=0,J=G.length,Z=J-1,j=nt+1;nt<J;nt++,Z++,j++)Z===J&&(Z=0),j===J&&(j=0),dt[nt]=V(G[nt],G[Z],G[j]);const xt=[];let Et,Kt=dt.concat();for(let nt=0,J=q;nt<J;nt++){const Z=D[nt];Et=[];for(let j=0,ft=Z.length,rt=ft-1,pt=j+1;j<ft;j++,rt++,pt++)rt===ft&&(rt=0),pt===ft&&(pt=0),Et[j]=V(Z[j],Z[rt],Z[pt]);xt.push(Et),Kt=Kt.concat(Et)}let ee;if(m===0)ee=os.triangulateShape(G,D);else{const nt=[],J=[];for(let Z=0;Z<m;Z++){const j=Z/m,ft=f*Math.cos(j*Math.PI/2),rt=g*Math.sin(j*Math.PI/2)+_;for(let pt=0,Yt=G.length;pt<Yt;pt++){const Xt=X(G[pt],dt[pt],rt);Ft(Xt.x,Xt.y,-ft),j===0&&nt.push(Xt)}for(let pt=0,Yt=q;pt<Yt;pt++){const Xt=D[pt];Et=xt[pt];const w=[];for(let v=0,z=Xt.length;v<z;v++){const W=X(Xt[v],Et[v],rt);Ft(W.x,W.y,-ft),j===0&&w.push(W)}j===0&&J.push(w)}}ee=os.triangulateShape(nt,J)}const ct=ee.length,gt=g+_;for(let nt=0;nt<$;nt++){const J=d?X(M[nt],Kt[nt],gt):M[nt];x?(A.copy(R.normals[0]).multiplyScalar(J.x),T.copy(R.binormals[0]).multiplyScalar(J.y),P.copy(S[0]).add(A).add(T),Ft(P.x,P.y,P.z)):Ft(J.x,J.y,0)}for(let nt=1;nt<=h;nt++)for(let J=0;J<$;J++){const Z=d?X(M[J],Kt[J],gt):M[J];x?(A.copy(R.normals[nt]).multiplyScalar(Z.x),T.copy(R.binormals[nt]).multiplyScalar(Z.y),P.copy(S[nt]).add(A).add(T),Ft(P.x,P.y,P.z)):Ft(Z.x,Z.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){const J=nt/m,Z=f*Math.cos(J*Math.PI/2),j=g*Math.sin(J*Math.PI/2)+_;for(let ft=0,rt=G.length;ft<rt;ft++){const pt=X(G[ft],dt[ft],j);Ft(pt.x,pt.y,u+Z)}for(let ft=0,rt=D.length;ft<rt;ft++){const pt=D[ft];Et=xt[ft];for(let Yt=0,Xt=pt.length;Yt<Xt;Yt++){const w=X(pt[Yt],Et[Yt],j);x?Ft(w.x,w.y+S[h-1].y,S[h-1].x+Z):Ft(w.x,w.y,u+Z)}}}O(),tt();function O(){const nt=s.length/3;if(d){let J=0,Z=$*J;for(let j=0;j<ct;j++){const ft=ee[j];Ct(ft[2]+Z,ft[1]+Z,ft[0]+Z)}J=h+m*2,Z=$*J;for(let j=0;j<ct;j++){const ft=ee[j];Ct(ft[0]+Z,ft[1]+Z,ft[2]+Z)}}else{for(let J=0;J<ct;J++){const Z=ee[J];Ct(Z[2],Z[1],Z[0])}for(let J=0;J<ct;J++){const Z=ee[J];Ct(Z[0]+$*h,Z[1]+$*h,Z[2]+$*h)}}n.addGroup(nt,s.length/3-nt,0)}function tt(){const nt=s.length/3;let J=0;yt(G,J),J+=G.length;for(let Z=0,j=D.length;Z<j;Z++){const ft=D[Z];yt(ft,J),J+=ft.length}n.addGroup(nt,s.length/3-nt,1)}function yt(nt,J){let Z=nt.length;for(;--Z>=0;){const j=Z;let ft=Z-1;ft<0&&(ft=nt.length-1);for(let rt=0,pt=h+m*2;rt<pt;rt++){const Yt=$*rt,Xt=$*(rt+1),w=J+j+Yt,v=J+ft+Yt,z=J+ft+Xt,W=J+j+Xt;ie(w,v,z,W)}}}function Ft(nt,J,Z){l.push(nt),l.push(J),l.push(Z)}function Ct(nt,J,Z){ye(nt),ye(J),ye(Z);const j=s.length/3,ft=y.generateTopUV(n,s,j-3,j-2,j-1);C(ft[0]),C(ft[1]),C(ft[2])}function ie(nt,J,Z,j){ye(nt),ye(J),ye(j),ye(J),ye(Z),ye(j);const ft=s.length/3,rt=y.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);C(rt[0]),C(rt[1]),C(rt[3]),C(rt[1]),C(rt[2]),C(rt[3])}function ye(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function C(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Za[s.type]().fromJSON(s)),new rr(n,t.options)}}const lp={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,o),new it(a,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-u),new it(d,1-g),new it(_,1-p)]:[new it(a,1-l),new it(h,1-u),new it(f,1-g),new it(m,1-p)]}};function cp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Pl extends Al{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pl(t.radius,t.detail)}}class Ts extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let S=0;S<c;S++){const x=S*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const S=y+c*p,x=y+c*(p+1),R=y+1+c*(p+1),T=y+1+c*p;f.push(S,x,T),f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}class ho extends Ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new L,g=new it;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,S=y,x=y+n+1,R=y+n+2,T=y+1;a.push(S,x,T),a.push(x,R,T)}}this.setIndex(a),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class or extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-S),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=h[p][y+1],x=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(S,x,T),(p!==n-1||l<Math.PI)&&f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hn extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class hp extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nn extends bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class up extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dp extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Dl extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class fp extends Dl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Go=new me,Ac=new L,Rc=new L;class pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ac),Rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rc),e.updateMatrixWorld(),Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ll extends ru{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class mp extends pp{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cc extends Dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new mp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gp extends Dl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _p extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class xu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Pc=new me;class xp{constructor(t,e,n=0,s=1/0){this.ray=new lo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pc),this}intersectObject(t,e=!0,n=[]){return Qa(t,this,n,e),n.sort(Dc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Qa(t[s],this,n,e);return n.sort(Dc),n}}function Dc(i,t){return i.distance-t.distance}function Qa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Qa(r[o],t,e,!0)}}class tl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vp extends zi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Lc(i,t,e,n){const s=Mp(n);switch(e){case qh:return i*t;case xl:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case Zh:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case jh:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case yl:return i*t*4/s.components*s.byteLength;case Yr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:case ba:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case Sa:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ha:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mp(i){switch(i){case kn:case Wh:return{byteLength:1,components:1};case qs:case Xh:case ti:return{byteLength:2,components:1};case gl:case _l:return{byteLength:2,components:4};case Ii:case ml:case Fn:return{byteLength:4,components:1};case Kh:case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);function vu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
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
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,Mm=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dm=`#if defined( USE_POINTS_UV )
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
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
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
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,P0=`#define DISTANCE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,O0=`#define LAMBERT
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
}`,B0=`#define MATCAP
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
}`,k0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,V0=`#define NORMAL
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
}`,G0=`#define PHONG
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
}`,W0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,Y0=`#define TOON
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
}`,q0=`#define TOON
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
}`,j0=`uniform float size;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,J0=`uniform vec3 color;
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
}`,Q0=`uniform float rotation;
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
}`,tg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Sp,alphahash_pars_fragment:bp,alphamap_fragment:Ep,alphamap_pars_fragment:Tp,alphatest_fragment:wp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Dp,begin_vertex:Lp,beginnormal_vertex:Ip,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:zp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:kp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:qp,displacementmap_vertex:jp,emissivemap_fragment:Zp,emissivemap_pars_fragment:$p,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:xm,lights_physical_fragment:vm,lights_physical_pars_fragment:Mm,lights_fragment_begin:ym,lights_fragment_maps:Sm,lights_fragment_end:bm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Dm,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Um,morphcolor_vertex:Nm,morphnormal_vertex:Fm,morphtarget_pars_vertex:zm,morphtarget_vertex:Om,normal_fragment_begin:Bm,normal_fragment_maps:km,normal_pars_fragment:Hm,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:qm,opaque_fragment:jm,packing:Zm,premultiplied_alpha_fragment:$m,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:t0,roughnessmap_fragment:e0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:d0,tonemapping_fragment:f0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:_0,uv_pars_vertex:x0,uv_vertex:v0,worldpos_vertex:M0,background_vert:y0,background_frag:S0,backgroundCube_vert:b0,backgroundCube_frag:E0,cube_vert:T0,cube_frag:w0,depth_vert:A0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:D0,equirect_frag:L0,linedashed_vert:I0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:F0,meshlambert_vert:z0,meshlambert_frag:O0,meshmatcap_vert:B0,meshmatcap_frag:k0,meshnormal_vert:H0,meshnormal_frag:V0,meshphong_vert:G0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:K0,meshtoon_vert:Y0,meshtoon_frag:q0,points_vert:j0,points_frag:Z0,shadow_vert:$0,shadow_frag:J0,sprite_vert:Q0,sprite_frag:tg},_t={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},In={basic:{uniforms:Ze([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ze([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new bt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ze([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ze([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ze([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new bt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ze([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ze([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ze([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ze([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ze([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ze([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ze([_t.common,_t.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ze([_t.lights,_t.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};In.physical={uniforms:Ze([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const zr={r:0,b:0,g:0},Ti=new Pn,eg=new me;function ng(i,t,e,n,s,r,o){const a=new bt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const R=g(S);R===null?p(a,l):R&&R.isColor&&(p(R,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===ao)?(h===void 0&&(h=new Bt(new pn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:gs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(Ti)),h.material.toneMapped=ae.getTransfer(R.colorSpace)!==pe,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Bt(new Ts(2,2),new Xe({name:"BackgroundMaterial",uniforms:gs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ae.getTransfer(R.colorSpace)!==pe,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(zr,su(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:y}}function ig(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,D,F,k,q){let G=!1;const X=u(k,F,D);r!==X&&(r=X,c(r.object)),G=f(M,k,F,q),G&&g(M,k,F,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(M,D,F,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,F){const k=F.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let G=q[D.id];G===void 0&&(G={},q[D.id]=G);let X=G[k];return X===void 0&&(X=d(l()),G[k]=X),X}function d(M){const D=[],F=[],k=[];for(let q=0;q<e;q++)D[q]=0,F[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,D,F,k){const q=r.attributes,G=D.attributes;let X=0;const $=F.getAttributes();for(const V in $)if($[V].location>=0){const xt=q[V];let Et=G[V];if(Et===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),xt===void 0||xt.attribute!==Et||Et&&xt.data!==Et.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(M,D,F,k){const q={},G=D.attributes;let X=0;const $=F.getAttributes();for(const V in $)if($[V].location>=0){let xt=G[V];xt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));const Et={};Et.attribute=xt,xt&&xt.data&&(Et.data=xt.data),q[V]=Et,X++}r.attributes=q,r.attributesNum=X,r.index=k}function _(){const M=r.newAttributes;for(let D=0,F=M.length;D<F;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const F=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;F[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),q[M]!==D&&(i.vertexAttribDivisor(M,D),q[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let F=0,k=D.length;F<k;F++)D[F]!==M[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function S(M,D,F,k,q,G,X){X===!0?i.vertexAttribIPointer(M,D,F,q,G):i.vertexAttribPointer(M,D,F,k,q,G)}function x(M,D,F,k){_();const q=k.attributes,G=F.getAttributes(),X=D.defaultAttributeValues;for(const $ in G){const V=G[$];if(V.location>=0){let dt=q[$];if(dt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),dt!==void 0){const xt=dt.normalized,Et=dt.itemSize,Kt=t.get(dt);if(Kt===void 0)continue;const ee=Kt.buffer,ct=Kt.type,gt=Kt.bytesPerElement,O=ct===i.INT||ct===i.UNSIGNED_INT||dt.gpuType===ml;if(dt.isInterleavedBufferAttribute){const tt=dt.data,yt=tt.stride,Ft=dt.offset;if(tt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<V.locationSize;Ct++)p(V.location+Ct,tt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ct=0;Ct<V.locationSize;Ct++)m(V.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ct=0;Ct<V.locationSize;Ct++)S(V.location+Ct,Et/V.locationSize,ct,xt,yt*gt,(Ft+Et/V.locationSize*Ct)*gt,O)}else{if(dt.isInstancedBufferAttribute){for(let tt=0;tt<V.locationSize;tt++)p(V.location+tt,dt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let tt=0;tt<V.locationSize;tt++)m(V.location+tt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let tt=0;tt<V.locationSize;tt++)S(V.location+tt,Et/V.locationSize,ct,xt,Et*gt,Et/V.locationSize*tt*gt,O)}}else if(X!==void 0){const xt=X[$];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(V.location,xt);break;case 3:i.vertexAttrib3fv(V.location,xt);break;case 4:i.vertexAttrib4fv(V.location,xt);break;default:i.vertexAttrib1fv(V.location,xt)}}}}y()}function R(){P();for(const M in n){const D=n[M];for(const F in D){const k=D[F];for(const q in k)h(k[q].object),delete k[q];delete D[F]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const F in D){const k=D[F];for(const q in k)h(k[q].object),delete k[q];delete D[F]}delete n[M.id]}function A(M){for(const D in n){const F=n[D];if(F[M.id]===void 0)continue;const k=F[M.id];for(const q in k)h(k[q].object),delete k[q];delete F[M.id]}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function sg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function og(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ui,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,S=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,S,f);for(let R=0;R!==S;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ag(i){let t=new WeakMap;function e(o,a){return a===ga?o.mapping=fs:a===_a&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ga||a===_a)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const as=4,Ic=[.125,.215,.35,.446,.526,.582],Pi=20,Wo=new Ll,Uc=new bt;let Xo=null,Ko=0,Yo=0,qo=!1;const Ai=(1+Math.sqrt(5))/2,es=1/Ai,Nc=[new L(-Ai,es,0),new L(Ai,es,0),new L(-es,0,Ai),new L(es,0,Ai),new L(0,Ai,-es),new L(0,Ai,es),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],lg=new L;class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=lg}=r;Xo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,Ko,Yo),this._renderer.xr.enabled=qo,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ti,format:Rn,colorSpace:ms,depthBuffer:!1},s=zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(r)),this._blurMaterial=hg(r,t,e)}return s}_compileMaterial(t){const e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,s,r){const l=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Uc),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new sr({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new Bt(new pn,_);let p=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(Uc),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const R=this._cubeSize;Or(s,x*R,S>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===fs||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nc[(s-r-1)%Nc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Bt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const p=[];let y=0;for(let A=0;A<Pi;++A){const P=A/_,E=Math.exp(-P*P/2);p.push(E),A===0?y+=E:A<m&&(y+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[s],R=3*x*(s>S-as?s-S+as:0),T=4*(this._cubeSize-x);Or(e,R,T,3*x,2*x),l.setRenderTarget(e),l.render(u,Wo)}}function cg(i){const t=[],e=[],n=[];let s=i;const r=i-as+1+Ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-as?l=Ic[o-i+as-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,P=T>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(E,_*g*T),S.set(d,m*g*T);const M=[T,T,T,T,T,T];x.set(M,p*g*T)}const R=new Ue;R.setAttribute("position",new Fe(y,_)),R.setAttribute("uv",new Fe(S,m)),R.setAttribute("faceIndex",new Fe(x,p)),t.push(R),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zc(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hg(i,t,e){const n=new Float32Array(Pi),s=new L(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Oc(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Bc(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function ug(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ga||l===_a,h=l===fs||l===ps;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Fc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function dg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let S=0,x=y.length;S<x;S+=3){const R=y[S+0],T=y[S+1],A=y[S+2];d.push(R,T,T,A,A,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const R=S+0,T=S+1,A=S+2;d.push(R,T,T,A,A,R)}}else return;const m=new(Qh(d)?iu:nu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function pg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function mg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,t,e){const n=new WeakMap,s=new we;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const A=new Float32Array(R*T*4*u),P=new tu(A,R,T,u);P.type=Fn,P.needsUpdate=!0;const E=x*4;for(let D=0;D<u;D++){const F=p[D],k=y[D],q=S[D],G=R*T*4*D;for(let X=0;X<F.count;X++){const $=X*E;g===!0&&(s.fromBufferAttribute(F,X),A[G+$+0]=s.x,A[G+$+1]=s.y,A[G+$+2]=s.z,A[G+$+3]=0),_===!0&&(s.fromBufferAttribute(k,X),A[G+$+4]=s.x,A[G+$+5]=s.y,A[G+$+6]=s.z,A[G+$+7]=0),m===!0&&(s.fromBufferAttribute(q,X),A[G+$+8]=s.x,A[G+$+9]=s.y,A[G+$+10]=s.z,A[G+$+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new it(R,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function _g(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Mu=new Qe,kc=new lu(1,1),yu=new tu,Su=new of,bu=new ou,Hc=[],Vc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function uo(i,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),Be(e,n)}}function bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Be(e,n)}}function Eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),Be(e,n)}}function Tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function Ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Jh,r=kc):r=Mu,e.setTexture2D(t||r,s)}function Ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Su,s)}function Ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bu,s)}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yu,s)}function zg(i){switch(i){case 5126:return xg;case 35664:return vg;case 35665:return Mg;case 35666:return yg;case 35674:return Sg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Dg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function Og(i,t){i.uniform1fv(this.addr,t)}function Bg(i,t){const e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function kg(i,t){const e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Hg(i,t){const e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function Vg(i,t){const e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gg(i,t){const e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wg(i,t){const e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xg(i,t){i.uniform1iv(this.addr,t)}function Kg(i,t){i.uniform2iv(this.addr,t)}function Yg(i,t){i.uniform3iv(this.addr,t)}function qg(i,t){i.uniform4iv(this.addr,t)}function jg(i,t){i.uniform1uiv(this.addr,t)}function Zg(i,t){i.uniform2uiv(this.addr,t)}function $g(i,t){i.uniform3uiv(this.addr,t)}function Jg(i,t){i.uniform4uiv(this.addr,t)}function Qg(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Mu,r[o])}function t_(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Su,r[o])}function e_(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bu,r[o])}function n_(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yu,r[o])}function i_(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return kg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return Kg;case 35668:case 35672:return Yg;case 35669:case 35673:return qg;case 5125:return jg;case 36294:return Zg;case 36295:return $g;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}class s_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class r_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i_(e.type)}}class o_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function Kc(i,t){i.seq.push(t),i.map[t.id]=t}function a_(i,t,e){const n=i.name,s=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),o=jo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Kc(e,c===void 0?new s_(a,i,t):new r_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new o_(a),Kc(e,u)),e=u}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);a_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const l_=37297;let c_=0;function h_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qc=new $t;function u_(i){ae._getMatrix(qc,ae.workingColorSpace,i);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case eo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+h_(i.getShaderSource(t),a)}else return r}function d_(i,t){const e=u_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function f_(i,t){let e;switch(t){case zh:e="Linear";break;case Oh:e="Reinhard";break;case Bh:e="Cineon";break;case pl:e="ACESFilmic";break;case Hh:e="AgX";break;case Vh:e="Neutral";break;case kh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Br=new L;function p_(){ae.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function g_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function __(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Bs(i){return i!==""}function Zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const x_=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(x_,M_)}const v_=new Map;function M_(i,t){let e=Jt[t];if(e===void 0){const n=v_.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(y_,S_)}function S_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function b_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function E_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fs:case ps:t="ENVMAP_TYPE_CUBE";break;case ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ps&&(t="ENVMAP_MODE_REFRACTION"),t}function w_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fh:t="ENVMAP_BLENDING_MULTIPLY";break;case Sd:t="ENVMAP_BLENDING_MIX";break;case bd:t="ENVMAP_BLENDING_ADD";break}return t}function A_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function R_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=b_(e),c=E_(e),h=T_(e),u=w_(e),d=A_(e),f=m_(e),g=g_(r),_=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==fi?f_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,d_("linearToOutputTexel",e.outputColorSpace),p_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=el(o),o=Zc(o,e),o=$c(o,e),a=el(a),a=Zc(a,e),a=$c(a,e),o=Jc(o),a=Jc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,x=y+p+a,R=Yc(s,s.VERTEX_SHADER,S),T=Yc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(T)||"",G=F.trim(),X=k.trim(),$=q.trim();let V=!0,dt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const xt=jc(s,R,"vertex"),Et=jc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+xt+`
`+Et)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(X===""||$==="")&&(dt=!1);dt&&(D.diagnostics={runnable:V,programLog:G,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(R),s.deleteShader(T),P=new $r(s,_),E=__(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,l_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let C_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new D_(t),e.set(t,n)),n}}class D_{constructor(t){this.id=C_++,this.code=t,this.usedTimes=0}}function L_(i,t,e,n,s,r,o){const a=new El,l=new P_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,F,k){const q=F.fog,G=k.geometry,X=E.isMeshStandardMaterial?F.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),V=$&&$.mapping===ao?$.image.height:null,dt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const xt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Et=xt!==void 0?xt.length:0;let Kt=0;G.morphAttributes.position!==void 0&&(Kt=1),G.morphAttributes.normal!==void 0&&(Kt=2),G.morphAttributes.color!==void 0&&(Kt=3);let ee,ct,gt,O;if(dt){const fe=In[dt];ee=fe.vertexShader,ct=fe.fragmentShader}else ee=E.vertexShader,ct=E.fragmentShader,l.update(E),gt=l.getVertexShaderID(E),O=l.getFragmentShaderID(E);const tt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Ft=k.isInstancedMesh===!0,Ct=k.isBatchedMesh===!0,ie=!!E.map,ye=!!E.matcap,C=!!$,nt=!!E.aoMap,J=!!E.lightMap,Z=!!E.bumpMap,j=!!E.normalMap,ft=!!E.displacementMap,rt=!!E.emissiveMap,pt=!!E.metalnessMap,Yt=!!E.roughnessMap,Xt=E.anisotropy>0,w=E.clearcoat>0,v=E.dispersion>0,z=E.iridescence>0,W=E.sheen>0,et=E.transmission>0,K=Xt&&!!E.anisotropyMap,It=w&&!!E.clearcoatMap,ut=w&&!!E.clearcoatNormalMap,Pt=w&&!!E.clearcoatRoughnessMap,Dt=z&&!!E.iridescenceMap,ot=z&&!!E.iridescenceThicknessMap,St=W&&!!E.sheenColorMap,Gt=W&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,vt=!!E.specularColorMap,jt=!!E.specularIntensityMap,I=et&&!!E.transmissionMap,ht=et&&!!E.thicknessMap,mt=!!E.gradientMap,At=!!E.alphaMap,at=E.alphaTest>0,Q=!!E.alphaHash,Lt=!!E.extensions;let qt=fi;E.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(qt=i.toneMapping);const Se={shaderID:dt,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:ct,defines:E.defines,customVertexShaderID:gt,customFragmentShaderID:O,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&k._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&k.instanceColor!==null,instancingMorph:Ft&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ms,alphaToCoverage:!!E.alphaToCoverage,map:ie,matcap:ye,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:V,aoMap:nt,lightMap:J,bumpMap:Z,normalMap:j,displacementMap:d&&ft,emissiveMap:rt,normalMapObjectSpace:j&&E.normalMapType===Ad,normalMapTangentSpace:j&&E.normalMapType===$h,metalnessMap:pt,roughnessMap:Yt,anisotropy:Xt,anisotropyMap:K,clearcoat:w,clearcoatMap:It,clearcoatNormalMap:ut,clearcoatRoughnessMap:Pt,dispersion:v,iridescence:z,iridescenceMap:Dt,iridescenceThicknessMap:ot,sheen:W,sheenColorMap:St,sheenRoughnessMap:Gt,specularMap:Nt,specularColorMap:vt,specularIntensityMap:jt,transmission:et,transmissionMap:I,thicknessMap:ht,gradientMap:mt,opaque:E.transparent===!1&&E.blending===cs&&E.alphaToCoverage===!1,alphaMap:At,alphaTest:at,alphaHash:Q,combine:E.combine,mapUv:ie&&_(E.map.channel),aoMapUv:nt&&_(E.aoMap.channel),lightMapUv:J&&_(E.lightMap.channel),bumpMapUv:Z&&_(E.bumpMap.channel),normalMapUv:j&&_(E.normalMap.channel),displacementMapUv:ft&&_(E.displacementMap.channel),emissiveMapUv:rt&&_(E.emissiveMap.channel),metalnessMapUv:pt&&_(E.metalnessMap.channel),roughnessMapUv:Yt&&_(E.roughnessMap.channel),anisotropyMapUv:K&&_(E.anisotropyMap.channel),clearcoatMapUv:It&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:St&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(E.sheenRoughnessMap.channel),specularMapUv:Nt&&_(E.specularMap.channel),specularColorMapUv:vt&&_(E.specularColorMap.channel),specularIntensityMapUv:jt&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ht&&_(E.thicknessMap.channel),alphaMapUv:At&&_(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(j||Xt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(ie||At),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:ie&&E.map.isVideoTexture===!0&&ae.getTransfer(E.map.colorSpace)===pe,decodeVideoTextureEmissive:rt&&E.emissiveMap.isVideoTexture===!0&&ae.getTransfer(E.emissiveMap.colorSpace)===pe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===Je,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Lt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&E.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(y(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const M=g[E.type];let D;if(M){const F=In[M];D=tr.clone(F.uniforms)}else D=E.uniforms;return D}function R(E,M){let D;for(let F=0,k=h.length;F<k;F++){const q=h[F];if(q.cacheKey===M){D=q,++D.usedTimes;break}}return D===void 0&&(D=new R_(i,M,E,r),h.push(D)),D}function T(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function I_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function U_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||U_),n.length>1&&n.sort(d||th),s.length>1&&s.sort(d||th)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function N_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new eh,i.set(n,[o])):s>=r.length?(o=new eh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function F_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new bt};break;case"SpotLight":e={position:new L,direction:new L,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function z_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let O_=0;function B_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k_(i){const t=new F_,e=z_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new me,o=new me;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,S=0,x=0,R=0,T=0,A=0;c.sort(B_);for(let E=0,M=c.length;E<M;E++){const D=c[E],F=D.color,k=D.intensity,q=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*k,u+=F.g*k,d+=F.b*k;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],k);A++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,V=e.get(D);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=D.shadow.matrix,y++}n.directional[f]=X,f++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(k),X.distance=q,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[_]=X;const $=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,$.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=$.matrix,D.castShadow){const V=e.get(D);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=G,x++}_++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(F).multiplyScalar(k),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const $=D.shadow,V=e.get(D);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(k),X.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=A,n.version=O_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function nh(i){const t=new k_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function H_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new nh(i),t.set(s,[a])):r>=o.length?(a=new nh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function W_(i,t,e){let n=new wl;const s=new it,r=new it,o=new we,a=new up({depthPacking:wd}),l=new dp,c={},h=e.maxTextureSize,u={[mi]:Je,[Je]:mi,[wn]:wn},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:V_,fragmentShader:G_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==jn&&this.type===jn,q=p===jn&&this.type!==jn;for(let G=0,X=T.length;G<X;G++){const $=T[G],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const dt=V.getFrameExtents();if(s.multiply(dt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,V.mapSize.y=r.y)),V.map===null||k===!0||q===!0){const Et=this.type!==jn?{minFilter:fn,magFilter:fn}:{};V.map!==null&&V.map.dispose(),V.map=new Cn(s.x,s.y,Et),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const xt=V.getViewportCount();for(let Et=0;Et<xt;Et++){const Kt=V.getViewport(Et);o.set(r.x*Kt.x,r.y*Kt.y,r.x*Kt.z,r.y*Kt.w),F.viewport(o),V.updateMatrices($,Et),n=V.getFrustum(),x(A,P,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===jn&&y(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,D)};function y(T,A){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,f,_,null)}function S(T,A,P,E){let M=null;const D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=M.uuid,k=A.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let G=q[k];G===void 0&&(G=M.clone(),q[k]=G,A.addEventListener("dispose",R)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,E===jn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=P}return M}function x(T,A,P,E,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===jn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const k=t.update(T),q=T.material;if(Array.isArray(q)){const G=k.groups;for(let X=0,$=G.length;X<$;X++){const V=G[X],dt=q[V.materialIndex];if(dt&&dt.visible){const xt=S(T,dt,E,M);T.onBeforeShadow(i,T,A,P,k,xt,V),i.renderBufferDirect(P,null,k,xt,T,V),T.onAfterShadow(i,T,A,P,k,xt,V)}}}else if(q.visible){const G=S(T,q,E,M);T.onBeforeShadow(i,T,A,P,k,G,null),i.renderBufferDirect(P,null,k,G,T,null),T.onAfterShadow(i,T,A,P,k,G,null)}}const F=T.children;for(let k=0,q=F.length;k<q;k++)x(F[k],A,P,E,M)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const E=c[P],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const X_={[ca]:ha,[ua]:pa,[da]:ma,[ds]:fa,[ha]:ca,[pa]:ua,[ma]:da,[fa]:ds};function K_(i,t){function e(){let I=!1;const ht=new we;let mt=null;const At=new we(0,0,0,0);return{setMask:function(at){mt!==at&&!I&&(i.colorMask(at,at,at,at),mt=at)},setLocked:function(at){I=at},setClear:function(at,Q,Lt,qt,Se){Se===!0&&(at*=qt,Q*=qt,Lt*=qt),ht.set(at,Q,Lt,qt),At.equals(ht)===!1&&(i.clearColor(at,Q,Lt,qt),At.copy(ht))},reset:function(){I=!1,mt=null,At.set(-1,0,0,0)}}}function n(){let I=!1,ht=!1,mt=null,At=null,at=null;return{setReversed:function(Q){if(ht!==Q){const Lt=t.get("EXT_clip_control");Q?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),ht=Q;const qt=at;at=null,this.setClear(qt)}},getReversed:function(){return ht},setTest:function(Q){Q?tt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(Q){mt!==Q&&!I&&(i.depthMask(Q),mt=Q)},setFunc:function(Q){if(ht&&(Q=X_[Q]),At!==Q){switch(Q){case ca:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case da:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=Q}},setLocked:function(Q){I=Q},setClear:function(Q){at!==Q&&(ht&&(Q=1-Q),i.clearDepth(Q),at=Q)},reset:function(){I=!1,mt=null,At=null,at=null,ht=!1}}}function s(){let I=!1,ht=null,mt=null,At=null,at=null,Q=null,Lt=null,qt=null,Se=null;return{setTest:function(fe){I||(fe?tt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(fe){ht!==fe&&!I&&(i.stencilMask(fe),ht=fe)},setFunc:function(fe,Gn,Dn){(mt!==fe||At!==Gn||at!==Dn)&&(i.stencilFunc(fe,Gn,Dn),mt=fe,At=Gn,at=Dn)},setOp:function(fe,Gn,Dn){(Q!==fe||Lt!==Gn||qt!==Dn)&&(i.stencilOp(fe,Gn,Dn),Q=fe,Lt=Gn,qt=Dn)},setLocked:function(fe){I=fe},setClear:function(fe){Se!==fe&&(i.clearStencil(fe),Se=fe)},reset:function(){I=!1,ht=null,mt=null,At=null,at=null,Q=null,Lt=null,qt=null,Se=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,x=null,R=null,T=null,A=new bt(0,0,0),P=0,E=!1,M=null,D=null,F=null,k=null,q=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=$>=2);let dt=null,xt={};const Et=i.getParameter(i.SCISSOR_BOX),Kt=i.getParameter(i.VIEWPORT),ee=new we().fromArray(Et),ct=new we().fromArray(Kt);function gt(I,ht,mt,At){const at=new Uint8Array(4),Q=i.createTexture();i.bindTexture(I,Q),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<mt;Lt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ht+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Q}const O={};O[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(ds),Z(!1),j(ql),tt(i.CULL_FACE),nt(Qn);function tt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function yt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ft(I,ht){return u[I]!==ht?(i.bindFramebuffer(I,ht),u[I]=ht,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ct(I,ht){let mt=f,At=!1;if(I){mt=d.get(ht),mt===void 0&&(mt=[],d.set(ht,mt));const at=I.textures;if(mt.length!==at.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Lt=at.length;Q<Lt;Q++)mt[Q]=i.COLOR_ATTACHMENT0+Q;mt.length=at.length,At=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,At=!0);At&&i.drawBuffers(mt)}function ie(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const ye={[Ci]:i.FUNC_ADD,[rd]:i.FUNC_SUBTRACT,[od]:i.FUNC_REVERSE_SUBTRACT};ye[ad]=i.MIN,ye[ld]=i.MAX;const C={[cd]:i.ZERO,[hd]:i.ONE,[ud]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[_d]:i.SRC_ALPHA_SATURATE,[md]:i.DST_COLOR,[fd]:i.DST_ALPHA,[dd]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[gd]:i.ONE_MINUS_DST_COLOR,[pd]:i.ONE_MINUS_DST_ALPHA,[xd]:i.CONSTANT_COLOR,[vd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[yd]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(I,ht,mt,At,at,Q,Lt,qt,Se,fe){if(I===Qn){_===!0&&(yt(i.BLEND),_=!1);return}if(_===!1&&(tt(i.BLEND),_=!0),I!==sd){if(I!==m||fe!==E){if((p!==Ci||x!==Ci)&&(i.blendEquation(i.FUNC_ADD),p=Ci,x=Ci),fe)switch(I){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,S=null,R=null,T=null,A.set(0,0,0),P=0,m=I,E=fe}return}at=at||ht,Q=Q||mt,Lt=Lt||At,(ht!==p||at!==x)&&(i.blendEquationSeparate(ye[ht],ye[at]),p=ht,x=at),(mt!==y||At!==S||Q!==R||Lt!==T)&&(i.blendFuncSeparate(C[mt],C[At],C[Q],C[Lt]),y=mt,S=At,R=Q,T=Lt),(qt.equals(A)===!1||Se!==P)&&(i.blendColor(qt.r,qt.g,qt.b,Se),A.copy(qt),P=Se),m=I,E=!1}function J(I,ht){I.side===wn?yt(i.CULL_FACE):tt(i.CULL_FACE);let mt=I.side===Je;ht&&(mt=!mt),Z(mt),I.blending===cs&&I.transparent===!1?nt(Qn):nt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const At=I.stencilWrite;a.setTest(At),At&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function j(I){I!==nd?(tt(i.CULL_FACE),I!==D&&(I===ql?i.cullFace(i.BACK):I===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),D=I}function ft(I){I!==F&&(X&&i.lineWidth(I),F=I)}function rt(I,ht,mt){I?(tt(i.POLYGON_OFFSET_FILL),(k!==ht||q!==mt)&&(i.polygonOffset(ht,mt),k=ht,q=mt)):yt(i.POLYGON_OFFSET_FILL)}function pt(I){I?tt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function Yt(I){I===void 0&&(I=i.TEXTURE0+G-1),dt!==I&&(i.activeTexture(I),dt=I)}function Xt(I,ht,mt){mt===void 0&&(dt===null?mt=i.TEXTURE0+G-1:mt=dt);let At=xt[mt];At===void 0&&(At={type:void 0,texture:void 0},xt[mt]=At),(At.type!==I||At.texture!==ht)&&(dt!==mt&&(i.activeTexture(mt),dt=mt),i.bindTexture(I,ht||O[I]),At.type=I,At.texture=ht)}function w(){const I=xt[dt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(I){ee.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function Gt(I){ct.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ct.copy(I))}function Nt(I,ht){let mt=c.get(ht);mt===void 0&&(mt=new WeakMap,c.set(ht,mt));let At=mt.get(I);At===void 0&&(At=i.getUniformBlockIndex(ht,I.name),mt.set(I,At))}function vt(I,ht){const At=c.get(ht).get(I);l.get(ht)!==At&&(i.uniformBlockBinding(ht,At,I.__bindingPointIndex),l.set(ht,At))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,xt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,x=null,R=null,T=null,A=new bt(0,0,0),P=0,E=!1,M=null,D=null,F=null,k=null,q=null,ee.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:yt,bindFramebuffer:Ft,drawBuffers:Ct,useProgram:ie,setBlending:nt,setMaterial:J,setFlipSided:Z,setCullFace:j,setLineWidth:ft,setPolygonOffset:rt,setScissorTest:pt,activeTexture:Yt,bindTexture:Xt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:Dt,texImage3D:ot,updateUBOMapping:Nt,uniformBlockBinding:vt,texStorage2D:ut,texStorage3D:Pt,texSubImage2D:W,texSubImage3D:et,compressedTexSubImage2D:K,compressedTexSubImage3D:It,scissor:St,viewport:Gt,reset:jt}}function Y_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):io("canvas")}function _(w,v,z){let W=1;const et=Xt(w);if((et.width>z||et.height>z)&&(W=z/Math.max(et.width,et.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(W*et.width),It=Math.floor(W*et.height);u===void 0&&(u=g(K,It));const ut=v?g(K,It):u;return ut.width=K,ut.height=It,ut.getContext("2d").drawImage(w,0,0,K,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+It+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,v,z,W,et=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=v;if(v===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),v===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){const It=et?eo:ae.getTransfer(W);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=It===pe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(w,v){let z;return w?v===null||v===Ii||v===js?z=i.DEPTH24_STENCIL8:v===Fn?z=i.DEPTH32F_STENCIL8:v===qs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===js?z=i.DEPTH_COMPONENT24:v===Fn?z=i.DEPTH_COMPONENT32F:v===qs&&(z=i.DEPTH_COMPONENT16),z}function R(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==fn&&w.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){const v=w.target;v.removeEventListener("dispose",T),P(v),v.isVideoTexture&&h.delete(v)}function A(w){const v=w.target;v.removeEventListener("dispose",A),M(v)}function P(w){const v=n.get(w);if(v.__webglInit===void 0)return;const z=w.source,W=d.get(z);if(W){const et=W[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(w),Object.keys(W).length===0&&d.delete(z)}n.remove(w)}function E(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const z=w.source,W=d.get(z);delete W[v.__cacheKey],o.memory.textures--}function M(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let et=0;et<v.__webglFramebuffer[W].length;et++)i.deleteFramebuffer(v.__webglFramebuffer[W][et]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=w.textures;for(let W=0,et=z.length;W<et;W++){const K=n.get(z[W]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[W])}n.remove(w)}let D=0;function F(){D=0}function k(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function q(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function G(w,v){const z=n.get(w);if(w.isVideoTexture&&pt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(z,w,v);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function X(w,v){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){O(z,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function $(w,v){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){O(z,w,v);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function V(w,v){const z=n.get(w);if(w.version>0&&z.__version!==w.version){tt(z,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const dt={[xa]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},xt={[fn]:i.NEAREST,[Ed]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},Et={[Rd]:i.NEVER,[Ud]:i.ALWAYS,[Cd]:i.LESS,[Jh]:i.LEQUAL,[Pd]:i.EQUAL,[Id]:i.GEQUAL,[Dd]:i.GREATER,[Ld]:i.NOTEQUAL};function Kt(w,v){if(v.type===Fn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===_o||v.magFilter===fr||v.magFilter===Li||v.minFilter===Nn||v.minFilter===_o||v.minFilter===fr||v.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,dt[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,dt[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,dt[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,xt[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===fn||v.minFilter!==fr&&v.minFilter!==Li||v.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ee(w,v){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));const W=v.source;let et=d.get(W);et===void 0&&(et={},d.set(W,et));const K=q(v);if(K!==w.__cacheKey){et[K]===void 0&&(et[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),et[K].usedTimes++;const It=et[w.__cacheKey];It!==void 0&&(et[w.__cacheKey].usedTimes--,It.usedTimes===0&&E(v)),w.__cacheKey=K,w.__webglTexture=et[K].texture}return z}function ct(w,v,z){return Math.floor(Math.floor(w/z)/v)}function gt(w,v,z,W){const K=w.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,W,v.data);else{K.sort((ot,St)=>ot.start-St.start);let It=0;for(let ot=1;ot<K.length;ot++){const St=K[It],Gt=K[ot],Nt=St.start+St.count,vt=ct(Gt.start,v.width,4),jt=ct(St.start,v.width,4);Gt.start<=Nt+1&&vt===jt&&ct(Gt.start+Gt.count-1,v.width,4)===vt?St.count=Math.max(St.count,Gt.start+Gt.count-St.start):(++It,K[It]=Gt)}K.length=It+1;const ut=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ot=0,St=K.length;ot<St;ot++){const Gt=K[ot],Nt=Math.floor(Gt.start/4),vt=Math.ceil(Gt.count/4),jt=Nt%v.width,I=Math.floor(Nt/v.width),ht=vt,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,jt,I,ht,mt,z,W,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function O(w,v,z){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);const et=ee(w,v),K=v.source;e.bindTexture(W,w.__webglTexture,i.TEXTURE0+z);const It=n.get(K);if(K.version!==It.__version||et===!0){e.activeTexture(i.TEXTURE0+z);const ut=ae.getPrimaries(ae.workingColorSpace),Pt=v.colorSpace===di?null:ae.getPrimaries(v.colorSpace),Dt=v.colorSpace===di||ut===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ot=_(v.image,!1,s.maxTextureSize);ot=Yt(v,ot);const St=r.convert(v.format,v.colorSpace),Gt=r.convert(v.type);let Nt=S(v.internalFormat,St,Gt,v.colorSpace,v.isVideoTexture);Kt(W,v);let vt;const jt=v.mipmaps,I=v.isVideoTexture!==!0,ht=It.__version===void 0||et===!0,mt=K.dataReady,At=R(v,ot);if(v.isDepthTexture)Nt=x(v.format===$s,v.type),ht&&(I?e.texStorage2D(i.TEXTURE_2D,1,Nt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ot.width,ot.height,0,St,Gt,null));else if(v.isDataTexture)if(jt.length>0){I&&ht&&e.texStorage2D(i.TEXTURE_2D,At,Nt,jt[0].width,jt[0].height);for(let at=0,Q=jt.length;at<Q;at++)vt=jt[at],I?mt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,vt.width,vt.height,St,Gt,vt.data):e.texImage2D(i.TEXTURE_2D,at,Nt,vt.width,vt.height,0,St,Gt,vt.data);v.generateMipmaps=!1}else I?(ht&&e.texStorage2D(i.TEXTURE_2D,At,Nt,ot.width,ot.height),mt&&gt(v,ot,St,Gt)):e.texImage2D(i.TEXTURE_2D,0,Nt,ot.width,ot.height,0,St,Gt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,jt[0].width,jt[0].height,ot.depth);for(let at=0,Q=jt.length;at<Q;at++)if(vt=jt[at],v.format!==Rn)if(St!==null)if(I){if(mt)if(v.layerUpdates.size>0){const Lt=Lc(vt.width,vt.height,v.format,v.type);for(const qt of v.layerUpdates){const Se=vt.data.subarray(qt*Lt/vt.data.BYTES_PER_ELEMENT,(qt+1)*Lt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,qt,vt.width,vt.height,1,St,Se)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,ot.depth,St,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Nt,vt.width,vt.height,ot.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,ot.depth,St,Gt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Nt,vt.width,vt.height,ot.depth,0,St,Gt,vt.data)}else{I&&ht&&e.texStorage2D(i.TEXTURE_2D,At,Nt,jt[0].width,jt[0].height);for(let at=0,Q=jt.length;at<Q;at++)vt=jt[at],v.format!==Rn?St!==null?I?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,vt.width,vt.height,St,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Nt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?mt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,vt.width,vt.height,St,Gt,vt.data):e.texImage2D(i.TEXTURE_2D,at,Nt,vt.width,vt.height,0,St,Gt,vt.data)}else if(v.isDataArrayTexture)if(I){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,ot.width,ot.height,ot.depth),mt)if(v.layerUpdates.size>0){const at=Lc(ot.width,ot.height,v.format,v.type);for(const Q of v.layerUpdates){const Lt=ot.data.subarray(Q*at/ot.data.BYTES_PER_ELEMENT,(Q+1)*at/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,St,Gt,Lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,St,Gt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ot.width,ot.height,ot.depth,0,St,Gt,ot.data);else if(v.isData3DTexture)I?(ht&&e.texStorage3D(i.TEXTURE_3D,At,Nt,ot.width,ot.height,ot.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,St,Gt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ot.width,ot.height,ot.depth,0,St,Gt,ot.data);else if(v.isFramebufferTexture){if(ht)if(I)e.texStorage2D(i.TEXTURE_2D,At,Nt,ot.width,ot.height);else{let at=ot.width,Q=ot.height;for(let Lt=0;Lt<At;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Nt,at,Q,0,St,Gt,null),at>>=1,Q>>=1}}else if(jt.length>0){if(I&&ht){const at=Xt(jt[0]);e.texStorage2D(i.TEXTURE_2D,At,Nt,at.width,at.height)}for(let at=0,Q=jt.length;at<Q;at++)vt=jt[at],I?mt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,St,Gt,vt):e.texImage2D(i.TEXTURE_2D,at,Nt,St,Gt,vt);v.generateMipmaps=!1}else if(I){if(ht){const at=Xt(ot);e.texStorage2D(i.TEXTURE_2D,At,Nt,at.width,at.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Gt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Nt,St,Gt,ot);m(v)&&p(W),It.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function tt(w,v,z){if(v.image.length!==6)return;const W=ee(w,v),et=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const K=n.get(et);if(et.version!==K.__version||W===!0){e.activeTexture(i.TEXTURE0+z);const It=ae.getPrimaries(ae.workingColorSpace),ut=v.colorSpace===di?null:ae.getPrimaries(v.colorSpace),Pt=v.colorSpace===di||It===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Dt=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!Dt&&!ot?St[Q]=_(v.image[Q],!0,s.maxCubemapSize):St[Q]=ot?v.image[Q].image:v.image[Q],St[Q]=Yt(v,St[Q]);const Gt=St[0],Nt=r.convert(v.format,v.colorSpace),vt=r.convert(v.type),jt=S(v.internalFormat,Nt,vt,v.colorSpace),I=v.isVideoTexture!==!0,ht=K.__version===void 0||W===!0,mt=et.dataReady;let At=R(v,Gt);Kt(i.TEXTURE_CUBE_MAP,v);let at;if(Dt){I&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,jt,Gt.width,Gt.height);for(let Q=0;Q<6;Q++){at=St[Q].mipmaps;for(let Lt=0;Lt<at.length;Lt++){const qt=at[Lt];v.format!==Rn?Nt!==null?I?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,0,0,qt.width,qt.height,Nt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,jt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,0,0,qt.width,qt.height,Nt,vt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt,jt,qt.width,qt.height,0,Nt,vt,qt.data)}}}else{if(at=v.mipmaps,I&&ht){at.length>0&&At++;const Q=Xt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){I?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Nt,vt,St[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,St[Q].width,St[Q].height,0,Nt,vt,St[Q].data);for(let Lt=0;Lt<at.length;Lt++){const Se=at[Lt].image[Q].image;I?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,0,0,Se.width,Se.height,Nt,vt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,jt,Se.width,Se.height,0,Nt,vt,Se.data)}}else{I?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Nt,vt,St[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Nt,vt,St[Q]);for(let Lt=0;Lt<at.length;Lt++){const qt=at[Lt];I?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,0,0,Nt,vt,qt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Lt+1,jt,Nt,vt,qt.image[Q])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),K.__version=et.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function yt(w,v,z,W,et,K){const It=r.convert(z.format,z.colorSpace),ut=r.convert(z.type),Pt=S(z.internalFormat,It,ut,z.colorSpace),Dt=n.get(v),ot=n.get(z);if(ot.__renderTarget=v,!Dt.__hasExternalTextures){const St=Math.max(1,v.width>>K),Gt=Math.max(1,v.height>>K);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,K,Pt,St,Gt,v.depth,0,It,ut,null):e.texImage2D(et,K,Pt,St,Gt,0,It,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),rt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,et,ot.__webglTexture,0,ft(v)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,et,ot.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(w,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const W=v.depthTexture,et=W&&W.isDepthTexture?W.type:null,K=x(v.stencilBuffer,et),It=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=ft(v);rt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,K,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,w)}else{const W=v.textures;for(let et=0;et<W.length;et++){const K=W[et],It=r.convert(K.format,K.colorSpace),ut=r.convert(K.type),Pt=S(K.internalFormat,It,ut,K.colorSpace),Dt=ft(v);z&&rt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Pt,v.width,v.height):rt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,Pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const et=W.__webglTexture,K=ft(v);if(v.depthTexture.format===Zs)rt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(v.depthTexture.format===$s)rt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function ie(w){const v=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const et=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",et)};W.addEventListener("dispose",et),v.__depthDisposeCallback=et}v.__boundDepthTexture=W}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const W=w.texture.mipmaps;W&&W.length>0?Ct(v.__webglFramebuffer[0],w):Ct(v.__webglFramebuffer,w)}else if(z){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),Ft(v.__webglDepthbuffer[W],w,!1);else{const et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ft(v.__webglDepthbuffer,w,!1);else{const et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,v,z){const W=n.get(w);v!==void 0&&yt(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ie(w)}function C(w){const v=w.texture,z=n.get(w),W=n.get(v);w.addEventListener("dispose",A);const et=w.textures,K=w.isWebGLCubeRenderTarget===!0,It=et.length>1;if(It||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let Pt=0;Pt<v.mipmaps.length;Pt++)z.__webglFramebuffer[ut][Pt]=i.createFramebuffer()}else z.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)z.__webglFramebuffer[ut]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(It)for(let ut=0,Pt=et.length;ut<Pt;ut++){const Dt=n.get(et[ut]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&rt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<et.length;ut++){const Pt=et[ut];z.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const Dt=r.convert(Pt.format,Pt.colorSpace),ot=r.convert(Pt.type),St=S(Pt.internalFormat,Dt,ot,Pt.colorSpace,w.isXRRenderTarget===!0),Gt=ft(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)yt(z.__webglFramebuffer[ut][Pt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Pt);else yt(z.__webglFramebuffer[ut],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ut=0,Pt=et.length;ut<Pt;ut++){const Dt=et[ut],ot=n.get(Dt);let St=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(St=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,ot.__webglTexture),Kt(St,Dt),yt(z.__webglFramebuffer,w,Dt,i.COLOR_ATTACHMENT0+ut,St,0),m(Dt)&&p(St)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,W.__webglTexture),Kt(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let Pt=0;Pt<v.mipmaps.length;Pt++)yt(z.__webglFramebuffer[Pt],w,v,i.COLOR_ATTACHMENT0,ut,Pt);else yt(z.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,ut,0);m(v)&&p(ut),e.unbindTexture()}w.depthBuffer&&ie(w)}function nt(w){const v=w.textures;for(let z=0,W=v.length;z<W;z++){const et=v[z];if(m(et)){const K=y(w),It=n.get(et).__webglTexture;e.bindTexture(K,It),p(K),e.unbindTexture()}}}const J=[],Z=[];function j(w){if(w.samples>0){if(rt(w)===!1){const v=w.textures,z=w.width,W=w.height;let et=i.COLOR_BUFFER_BIT;const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(w),ut=v.length>1;if(ut)for(let Dt=0;Dt<v.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Pt=w.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Dt=0;Dt<v.length;Dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Dt]);const ot=n.get(v[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,z,W,0,0,z,W,et,i.NEAREST),l===!0&&(J.length=0,Z.length=0,J.push(i.COLOR_ATTACHMENT0+Dt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(J.push(K),Z.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Dt=0;Dt<v.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Dt]);const ot=n.get(v[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ft(w){return Math.min(s.maxSamples,w.samples)}function rt(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pt(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Yt(w,v){const z=w.colorSpace,W=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==ms&&z!==di&&(ae.getTransfer(z)===pe?(W!==Rn||et!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Xt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=ye,this.setupRenderTarget=C,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=rt}function q_(i,t){function e(n,s=di){let r;const o=ae.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===jh)return i.RGB;if(n===Rn)return i.RGBA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Zh)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===Yr||n===qr||n===jr||n===Zr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===ya||n===Sa||n===ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na||n===Fa||n===za||n===Oa||n===Ba||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===Ka||n===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
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

}`;class $_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new cu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xe({vertexShader:j_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J_ extends zi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new $_,p={},y=e.getContextAttributes();let S=null,x=null;const R=[],T=[],A=new it;let P=null;const E=new Mn;E.viewport=new we;const M=new Mn;M.viewport=new we;const D=[E,M],F=new _p;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let tt=R[O];return tt===void 0&&(tt=new Oo,R[O]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(O){let tt=R[O];return tt===void 0&&(tt=new Oo,R[O]=tt),tt.getGripSpace()},this.getHand=function(O){let tt=R[O];return tt===void 0&&(tt=new Oo,R[O]=tt),tt.getHandSpace()};function G(O){const tt=T.indexOf(O.inputSource);if(tt===-1)return;const yt=R[tt];yt!==void 0&&(yt.update(O.inputSource,O.frame,c||o),yt.dispatchEvent({type:O.type,data:O.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let O=0;O<R.length;O++){const tt=T[O];tt!==null&&(T[O]=null,R[O].disconnect(tt))}k=null,q=null,m.reset();for(const O in p)delete p[O];t.setRenderTarget(S),f=null,d=null,u=null,s=null,x=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ft=null,Ct=null;y.depth&&(Ct=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=y.stencil?$s:Zs,Ft=y.stencil?js:Ii);const ie={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ie),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Cn(d.textureWidth,d.textureHeight,{format:Rn,type:kn,depthTexture:new lu(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Cn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(O){for(let tt=0;tt<O.removed.length;tt++){const yt=O.removed[tt],Ft=T.indexOf(yt);Ft>=0&&(T[Ft]=null,R[Ft].disconnect(yt))}for(let tt=0;tt<O.added.length;tt++){const yt=O.added[tt];let Ft=T.indexOf(yt);if(Ft===-1){for(let ie=0;ie<R.length;ie++)if(ie>=T.length){T.push(yt),Ft=ie;break}else if(T[ie]===null){T[ie]=yt,Ft=ie;break}if(Ft===-1)break}const Ct=R[Ft];Ct&&Ct.connect(yt)}}const V=new L,dt=new L;function xt(O,tt,yt){V.setFromMatrixPosition(tt.matrixWorld),dt.setFromMatrixPosition(yt.matrixWorld);const Ft=V.distanceTo(dt),Ct=tt.projectionMatrix.elements,ie=yt.projectionMatrix.elements,ye=Ct[14]/(Ct[10]-1),C=Ct[14]/(Ct[10]+1),nt=(Ct[9]+1)/Ct[5],J=(Ct[9]-1)/Ct[5],Z=(Ct[8]-1)/Ct[0],j=(ie[8]+1)/ie[0],ft=ye*Z,rt=ye*j,pt=Ft/(-Z+j),Yt=pt*-Z;if(tt.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Yt),O.translateZ(pt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),Ct[10]===-1)O.projectionMatrix.copy(tt.projectionMatrix),O.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Xt=ye+pt,w=C+pt,v=ft-Yt,z=rt+(Ft-Yt),W=nt*C/w*Xt,et=J*C/w*Xt;O.projectionMatrix.makePerspective(v,z,W,et,Xt,w),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Et(O,tt){tt===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(tt.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let tt=O.near,yt=O.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),F.near=M.near=E.near=tt,F.far=M.far=E.far=yt,(k!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,q=F.far),F.layers.mask=O.layers.mask|6,E.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const Ft=O.parent,Ct=F.cameras;Et(F,Ft);for(let ie=0;ie<Ct.length;ie++)Et(Ct[ie],Ft);Ct.length===2?xt(F,E,M):F.projectionMatrix.copy(E.projectionMatrix),Kt(O,F,Ft)};function Kt(O,tt,yt){yt===null?O.matrix.copy(tt.matrixWorld):(O.matrix.copy(yt.matrixWorld),O.matrix.invert(),O.matrix.multiply(tt.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(tt.projectionMatrix),O.projectionMatrixInverse.copy(tt.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Js*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(O){return p[O]};let ee=null;function ct(O,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ft=!1;yt.length!==F.cameras.length&&(F.cameras.length=0,Ft=!0);for(let C=0;C<yt.length;C++){const nt=yt[C];let J=null;if(f!==null)J=f.getViewport(nt);else{const j=u.getViewSubImage(d,nt);J=j.viewport,C===0&&(t.setRenderTargetTextures(x,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(x))}let Z=D[C];Z===void 0&&(Z=new Mn,Z.layers.enable(C),Z.viewport=new we,D[C]=Z),Z.matrix.fromArray(nt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(nt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(J.x,J.y,J.width,J.height),C===0&&(F.matrix.copy(Z.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ft===!0&&F.cameras.push(Z)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const C=u.getDepthInformation(yt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Ct&&Ct.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<yt.length;C++){const nt=yt[C].camera;if(nt){let J=p[nt];J||(J=new cu,p[nt]=J);const Z=u.getCameraImage(nt);J.sourceTexture=Z}}}}for(let yt=0;yt<R.length;yt++){const Ft=T[yt],Ct=R[yt];Ft!==null&&Ct!==void 0&&Ct.update(Ft,tt,c||o)}ee&&ee(O,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const gt=new vu;gt.setAnimationLoop(ct),this.setAnimationLoop=function(O){ee=O},this.dispose=function(){}}}const wi=new Pn,Q_=new me;function tx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,su(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,wi.copy(x),wi.x*=-1,wi.y*=-1,wi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(wi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ex(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const x=S.program;n.uniformBlockBinding(y,x)}function c(y,S){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(y,R);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const S=u();y.__bindingPointIndex=S;const x=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],x=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=x.length;T<A;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,M=P.length;E<M;E++){const D=P[E];if(f(D,T,E,R)===!0){const F=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let G=0;G<k.length;G++){const X=k[G],$=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+q,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,x,R){const T=y.value,A=S+"_"+x;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const P=R[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const S=y.uniforms;let x=0;const R=16;for(let A=0,P=S.length;A<P;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,D=E.length;M<D;M++){const F=E[M],k=Array.isArray(F.value)?F.value:[F.value];for(let q=0,G=k.length;q<G;q++){const X=k[q],$=_(X),V=x%R,dt=V%$.boundary,xt=V+dt;x+=dt,xt!==0&&R-xt<$.storage&&(x+=R-xt),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=$.storage}}}const T=x%R;return T>0&&(x+=R-T),y.__size=x,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class nx{constructor(t={}){const{canvas:e=Jd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=hn;let T=0,A=0,P=null,E=-1,M=null;const D=new we,F=new we;let k=null;const q=new bt(0);let G=0,X=e.width,$=e.height,V=1,dt=null,xt=null;const Et=new we(0,0,X,$),Kt=new we(0,0,X,$);let ee=!1;const ct=new wl;let gt=!1,O=!1;const tt=new me,yt=new L,Ft=new we,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function ye(){return P===null?V:1}let C=n;function nt(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",at,!1),C===null){const U="webgl2";if(C=nt(U,b),C===null)throw nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let J,Z,j,ft,rt,pt,Yt,Xt,w,v,z,W,et,K,It,ut,Pt,Dt,ot,St,Gt,Nt,vt,jt;function I(){J=new dg(C),J.init(),Nt=new q_(C,J),Z=new rg(C,J,t,Nt),j=new K_(C,J),Z.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),ft=new mg(C),rt=new I_,pt=new Y_(C,J,j,rt,Z,Nt,ft),Yt=new ag(x),Xt=new ug(x),w=new yp(C),vt=new ig(C,w),v=new fg(C,w,ft,vt),z=new _g(C,v,w,ft),ot=new gg(C,Z,pt),ut=new og(rt),W=new L_(x,Yt,Xt,J,Z,vt,ut),et=new tx(x,rt),K=new N_,It=new H_(J),Dt=new ng(x,Yt,Xt,j,z,f,l),Pt=new W_(x,z,Z),jt=new ex(C,ft,Z,j),St=new sg(C,J,ft),Gt=new pg(C,J,ft),ft.programs=W.programs,x.capabilities=Z,x.extensions=J,x.properties=rt,x.renderLists=K,x.shadowMap=Pt,x.state=j,x.info=ft}I();const ht=new J_(x,C);this.xr=ht,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=J.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=J.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(X,$,!1))},this.getSize=function(b){return b.set(X,$)},this.setSize=function(b,U,B=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,$=U,e.width=Math.floor(b*V),e.height=Math.floor(U*V),B===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(X*V,$*V).floor()},this.setDrawingBufferSize=function(b,U,B){X=b,$=U,V=B,e.width=Math.floor(b*B),e.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,U,B,H){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,U,B,H),j.viewport(D.copy(Et).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Kt)},this.setScissor=function(b,U,B,H){b.isVector4?Kt.set(b.x,b.y,b.z,b.w):Kt.set(b,U,B,H),j.scissor(F.copy(Kt).multiplyScalar(V).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(b){j.setScissorTest(ee=b)},this.setOpaqueSort=function(b){dt=b},this.setTransparentSort=function(b){xt=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,B=!0){let H=0;if(b){let N=!1;if(P!==null){const lt=P.texture.format;N=lt===yl||lt===Ml||lt===vl}if(N){const lt=P.texture.type,Mt=lt===kn||lt===Ii||lt===qs||lt===js||lt===gl||lt===_l,Rt=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Vt=Rt.r,Wt=Rt.g,zt=Rt.b;Mt?(g[0]=Vt,g[1]=Wt,g[2]=zt,g[3]=Tt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Vt,_[1]=Wt,_[2]=zt,_[3]=Tt,C.clearBufferiv(C.COLOR,0,_))}else H|=C.COLOR_BUFFER_BIT}U&&(H|=C.DEPTH_BUFFER_BIT),B&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Dt.dispose(),K.dispose(),It.dispose(),rt.dispose(),Yt.dispose(),Xt.dispose(),z.dispose(),vt.dispose(),jt.dispose(),W.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Dn),ht.removeEventListener("sessionend",Vl),vi.stop()};function mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=ft.autoReset,U=Pt.enabled,B=Pt.autoUpdate,H=Pt.needsUpdate,N=Pt.type;I(),ft.autoReset=b,Pt.enabled=U,Pt.autoUpdate=B,Pt.needsUpdate=H,Pt.type=N}function at(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Q(b){const U=b.target;U.removeEventListener("dispose",Q),Lt(U)}function Lt(b){qt(b),rt.remove(b)}function qt(b){const U=rt.get(b).programs;U!==void 0&&(U.forEach(function(B){W.releaseProgram(B)}),b.isShaderMaterial&&W.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,H,N,lt){U===null&&(U=Ct);const Mt=N.isMesh&&N.matrixWorld.determinant()<0,Rt=Zu(b,U,B,H,N);j.setMaterial(H,Mt);let Tt=B.index,Vt=1;if(H.wireframe===!0){if(Tt=v.getWireframeAttribute(B),Tt===void 0)return;Vt=2}const Wt=B.drawRange,zt=B.attributes.position;let se=Wt.start*Vt,ge=(Wt.start+Wt.count)*Vt;lt!==null&&(se=Math.max(se,lt.start*Vt),ge=Math.min(ge,(lt.start+lt.count)*Vt)),Tt!==null?(se=Math.max(se,0),ge=Math.min(ge,Tt.count)):zt!=null&&(se=Math.max(se,0),ge=Math.min(ge,zt.count));const Le=ge-se;if(Le<0||Le===1/0)return;vt.setup(N,H,Rt,B,Tt);let be,xe=St;if(Tt!==null&&(be=w.get(Tt),xe=Gt,xe.setIndex(be)),N.isMesh)H.wireframe===!0?(j.setLineWidth(H.wireframeLinewidth*ye()),xe.setMode(C.LINES)):xe.setMode(C.TRIANGLES);else if(N.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),j.setLineWidth(Ot*ye()),N.isLineSegments?xe.setMode(C.LINES):N.isLineLoop?xe.setMode(C.LINE_LOOP):xe.setMode(C.LINE_STRIP)}else N.isPoints?xe.setMode(C.POINTS):N.isSprite&&xe.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))xe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ot=N._multiDrawStarts,Ae=N._multiDrawCounts,ue=N._multiDrawCount,rn=Tt?w.get(Tt).bytesPerElement:1,ki=rt.get(H).currentProgram.getUniforms();for(let on=0;on<ue;on++)ki.setValue(C,"_gl_DrawID",on),xe.render(Ot[on]/rn,Ae[on])}else if(N.isInstancedMesh)xe.renderInstances(se,Le,N.count);else if(B.isInstancedBufferGeometry){const Ot=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ae=Math.min(B.instanceCount,Ot);xe.renderInstances(se,Le,Ae)}else xe.render(se,Le)};function Se(b,U,B){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=Je,b.needsUpdate=!0,dr(b,U,B),b.side=mi,b.needsUpdate=!0,dr(b,U,B),b.side=wn):dr(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),p=It.get(B),p.init(U),S.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==B&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const lt=N.material;if(lt)if(Array.isArray(lt))for(let Mt=0;Mt<lt.length;Mt++){const Rt=lt[Mt];Se(Rt,B,N),H.add(Rt)}else Se(lt,B,N),H.add(lt)}),p=S.pop(),H},this.compileAsync=function(b,U,B=null){const H=this.compile(b,U,B);return new Promise(N=>{function lt(){if(H.forEach(function(Mt){rt.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){N(b);return}setTimeout(lt,10)}J.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let fe=null;function Gn(b){fe&&fe(b)}function Dn(){vi.stop()}function Vl(){vi.start()}const vi=new vu;vi.setAnimationLoop(Gn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(b){fe=b,ht.setAnimationLoop(b),b===null?vi.stop():vi.start()},ht.addEventListener("sessionstart",Dn),ht.addEventListener("sessionend",Vl),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(U),U=ht.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,P),p=It.get(b,S.length),p.init(U),S.push(p),tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ct.setFromProjectionMatrix(tt,zn,U.reversedDepth),O=this.localClippingEnabled,gt=ut.init(this.clippingPlanes,O),m=K.get(b,y.length),m.init(),y.push(m),ht.enabled===!0&&ht.isPresenting===!0){const lt=x.xr.getDepthSensingMesh();lt!==null&&mo(lt,U,-1/0,x.sortObjects)}mo(b,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(dt,xt),ie=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ie&&Dt.addToRenderList(m,b),this.info.render.frame++,gt===!0&&ut.beginShadows();const B=p.state.shadowsArray;Pt.render(B,b,U),gt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const lt=U.cameras;if(N.length>0)for(let Mt=0,Rt=lt.length;Mt<Rt;Mt++){const Tt=lt[Mt];Wl(H,N,b,Tt)}ie&&Dt.render(b);for(let Mt=0,Rt=lt.length;Mt<Rt;Mt++){const Tt=lt[Mt];Gl(m,b,Tt,Tt.viewport)}}else N.length>0&&Wl(H,N,b,U),ie&&Dt.render(b),Gl(m,b,U);P!==null&&A===0&&(pt.updateMultisampleRenderTarget(P),pt.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(x,b,U),vt.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],gt===!0&&ut.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function mo(b,U,B,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ct.intersectsSprite(b)){H&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);const Mt=z.update(b),Rt=b.material;Rt.visible&&m.push(b,Mt,Rt,B,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ct.intersectsObject(b))){const Mt=z.update(b),Rt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ft.copy(Mt.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(Rt)){const Tt=Mt.groups;for(let Vt=0,Wt=Tt.length;Vt<Wt;Vt++){const zt=Tt[Vt],se=Rt[zt.materialIndex];se&&se.visible&&m.push(b,Mt,se,B,Ft.z,zt)}}else Rt.visible&&m.push(b,Mt,Rt,B,Ft.z,null)}}const lt=b.children;for(let Mt=0,Rt=lt.length;Mt<Rt;Mt++)mo(lt[Mt],U,B,H)}function Gl(b,U,B,H){const N=b.opaque,lt=b.transmissive,Mt=b.transparent;p.setupLightsView(B),gt===!0&&ut.setGlobalState(x.clippingPlanes,B),H&&j.viewport(D.copy(H)),N.length>0&&ur(N,U,B),lt.length>0&&ur(lt,U,B),Mt.length>0&&ur(Mt,U,B),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Wl(b,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Cn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?ti:kn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const lt=p.state.transmissionRenderTarget[H.id],Mt=H.viewport||D;lt.setSize(Mt.z*x.transmissionResolutionScale,Mt.w*x.transmissionResolutionScale);const Rt=x.getRenderTarget(),Tt=x.getActiveCubeFace(),Vt=x.getActiveMipmapLevel();x.setRenderTarget(lt),x.getClearColor(q),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),ie&&Dt.render(B);const Wt=x.toneMapping;x.toneMapping=fi;const zt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),gt===!0&&ut.setGlobalState(x.clippingPlanes,H),ur(b,B,H),pt.updateMultisampleRenderTarget(lt),pt.updateRenderTargetMipmap(lt),J.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ge=0,Le=U.length;ge<Le;ge++){const be=U[ge],xe=be.object,Ot=be.geometry,Ae=be.material,ue=be.group;if(Ae.side===wn&&xe.layers.test(H.layers)){const rn=Ae.side;Ae.side=Je,Ae.needsUpdate=!0,Xl(xe,B,H,Ot,Ae,ue),Ae.side=rn,Ae.needsUpdate=!0,se=!0}}se===!0&&(pt.updateMultisampleRenderTarget(lt),pt.updateRenderTargetMipmap(lt))}x.setRenderTarget(Rt,Tt,Vt),x.setClearColor(q,G),zt!==void 0&&(H.viewport=zt),x.toneMapping=Wt}function ur(b,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,lt=b.length;N<lt;N++){const Mt=b[N],Rt=Mt.object,Tt=Mt.geometry,Vt=Mt.group;let Wt=Mt.material;Wt.allowOverride===!0&&H!==null&&(Wt=H),Rt.layers.test(B.layers)&&Xl(Rt,U,B,Tt,Wt,Vt)}}function Xl(b,U,B,H,N,lt){b.onBeforeRender(x,U,B,H,N,lt),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,B,H,b,lt),N.transparent===!0&&N.side===wn&&N.forceSinglePass===!1?(N.side=Je,N.needsUpdate=!0,x.renderBufferDirect(B,U,H,N,b,lt),N.side=mi,N.needsUpdate=!0,x.renderBufferDirect(B,U,H,N,b,lt),N.side=wn):x.renderBufferDirect(B,U,H,N,b,lt),b.onAfterRender(x,U,B,H,N,lt)}function dr(b,U,B){U.isScene!==!0&&(U=Ct);const H=rt.get(b),N=p.state.lights,lt=p.state.shadowsArray,Mt=N.state.version,Rt=W.getParameters(b,N.state,lt,U,B),Tt=W.getProgramCacheKey(Rt);let Vt=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?Xt:Yt).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",Q),Vt=new Map,H.programs=Vt);let Wt=Vt.get(Tt);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===Mt)return Yl(b,Rt),Wt}else Rt.uniforms=W.getUniforms(b),b.onBeforeCompile(Rt,x),Wt=W.acquireProgram(Rt,Tt),Vt.set(Tt,Wt),H.uniforms=Rt.uniforms;const zt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=ut.uniform),Yl(b,Rt),H.needsLights=Ju(b),H.lightsStateVersion=Mt,H.needsLights&&(zt.ambientLightColor.value=N.state.ambient,zt.lightProbe.value=N.state.probe,zt.directionalLights.value=N.state.directional,zt.directionalLightShadows.value=N.state.directionalShadow,zt.spotLights.value=N.state.spot,zt.spotLightShadows.value=N.state.spotShadow,zt.rectAreaLights.value=N.state.rectArea,zt.ltc_1.value=N.state.rectAreaLTC1,zt.ltc_2.value=N.state.rectAreaLTC2,zt.pointLights.value=N.state.point,zt.pointLightShadows.value=N.state.pointShadow,zt.hemisphereLights.value=N.state.hemi,zt.directionalShadowMap.value=N.state.directionalShadowMap,zt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,zt.spotShadowMap.value=N.state.spotShadowMap,zt.spotLightMatrix.value=N.state.spotLightMatrix,zt.spotLightMap.value=N.state.spotLightMap,zt.pointShadowMap.value=N.state.pointShadowMap,zt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Wt,H.uniformsList=null,Wt}function Kl(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=$r.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Yl(b,U){const B=rt.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Zu(b,U,B,H,N){U.isScene!==!0&&(U=Ct),pt.resetTextureUnits();const lt=U.fog,Mt=H.isMeshStandardMaterial?U.environment:null,Rt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ms,Tt=(H.isMeshStandardMaterial?Xt:Yt).get(H.envMap||Mt),Vt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Wt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),zt=!!B.morphAttributes.position,se=!!B.morphAttributes.normal,ge=!!B.morphAttributes.color;let Le=fi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Le=x.toneMapping);const be=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=be!==void 0?be.length:0,Ot=rt.get(H),Ae=p.state.lights;if(gt===!0&&(O===!0||b!==M)){const qe=b===M&&H.id===E;ut.setState(H,b,qe)}let ue=!1;H.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ae.state.version||Ot.outputColorSpace!==Rt||N.isBatchedMesh&&Ot.batching===!1||!N.isBatchedMesh&&Ot.batching===!0||N.isBatchedMesh&&Ot.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ot.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ot.instancing===!1||!N.isInstancedMesh&&Ot.instancing===!0||N.isSkinnedMesh&&Ot.skinning===!1||!N.isSkinnedMesh&&Ot.skinning===!0||N.isInstancedMesh&&Ot.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ot.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ot.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ot.instancingMorph===!1&&N.morphTexture!==null||Ot.envMap!==Tt||H.fog===!0&&Ot.fog!==lt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ut.numPlanes||Ot.numIntersection!==ut.numIntersection)||Ot.vertexAlphas!==Vt||Ot.vertexTangents!==Wt||Ot.morphTargets!==zt||Ot.morphNormals!==se||Ot.morphColors!==ge||Ot.toneMapping!==Le||Ot.morphTargetsCount!==xe)&&(ue=!0):(ue=!0,Ot.__version=H.version);let rn=Ot.currentProgram;ue===!0&&(rn=dr(H,U,N));let ki=!1,on=!1,Ps=!1;const Re=rn.getUniforms(),gn=Ot.uniforms;if(j.useProgram(rn.program)&&(ki=!0,on=!0,Ps=!0),H.id!==E&&(E=H.id,on=!0),ki||M!==b){j.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Re.setValue(C,"projectionMatrix",b.projectionMatrix),Re.setValue(C,"viewMatrix",b.matrixWorldInverse);const tn=Re.map.cameraPosition;tn!==void 0&&tn.setValue(C,yt.setFromMatrixPosition(b.matrixWorld)),Z.logarithmicDepthBuffer&&Re.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Re.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,on=!0,Ps=!0)}if(N.isSkinnedMesh){Re.setOptional(C,N,"bindMatrix"),Re.setOptional(C,N,"bindMatrixInverse");const qe=N.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Re.setValue(C,"boneTexture",qe.boneTexture,pt))}N.isBatchedMesh&&(Re.setOptional(C,N,"batchingTexture"),Re.setValue(C,"batchingTexture",N._matricesTexture,pt),Re.setOptional(C,N,"batchingIdTexture"),Re.setValue(C,"batchingIdTexture",N._indirectTexture,pt),Re.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Re.setValue(C,"batchingColorTexture",N._colorsTexture,pt));const _n=B.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ot.update(N,B,rn),(on||Ot.receiveShadow!==N.receiveShadow)&&(Ot.receiveShadow=N.receiveShadow,Re.setValue(C,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(gn.envMap.value=Tt,gn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),on&&(Re.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&$u(gn,Ps),lt&&H.fog===!0&&et.refreshFogUniforms(gn,lt),et.refreshMaterialUniforms(gn,H,V,$,p.state.transmissionRenderTarget[b.id]),$r.upload(C,Kl(Ot),gn,pt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&($r.upload(C,Kl(Ot),gn,pt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Re.setValue(C,"center",N.center),Re.setValue(C,"modelViewMatrix",N.modelViewMatrix),Re.setValue(C,"normalMatrix",N.normalMatrix),Re.setValue(C,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const qe=H.uniformsGroups;for(let tn=0,go=qe.length;tn<go;tn++){const Mi=qe[tn];jt.update(Mi,rn),jt.bind(Mi,rn)}}return rn}function $u(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Ju(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,U,B){const H=rt.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),rt.get(b.texture).__webglTexture=U,rt.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const B=rt.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Qu=C.createFramebuffer();this.setRenderTarget=function(b,U=0,B=0){P=b,T=U,A=B;let H=!0,N=null,lt=!1,Mt=!1;if(b){const Tt=rt.get(b);if(Tt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(Tt.__webglFramebuffer===void 0)pt.setupRenderTarget(b);else if(Tt.__hasExternalTextures)pt.rebindTextures(b,rt.get(b.texture).__webglTexture,rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const zt=b.depthTexture;if(Tt.__boundDepthTexture!==zt){if(zt!==null&&rt.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(b)}}const Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);const Wt=rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?N=Wt[U][B]:N=Wt[U],lt=!0):b.samples>0&&pt.useMultisampledRTT(b)===!1?N=rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?N=Wt[B]:N=Wt,D.copy(b.viewport),F.copy(b.scissor),k=b.scissorTest}else D.copy(Et).multiplyScalar(V).floor(),F.copy(Kt).multiplyScalar(V).floor(),k=ee;if(B!==0&&(N=Qu),j.bindFramebuffer(C.FRAMEBUFFER,N)&&H&&j.drawBuffers(b,N),j.viewport(D),j.scissor(F),j.setScissorTest(k),lt){const Tt=rt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,B)}else if(Mt){const Tt=U;for(let Vt=0;Vt<b.textures.length;Vt++){const Wt=rt.get(b.textures[Vt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,B,Tt)}}else if(b!==null&&B!==0){const Tt=rt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Tt.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(b,U,B,H,N,lt,Mt,Rt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){j.bindFramebuffer(C.FRAMEBUFFER,Tt);try{const Vt=b.textures[Rt],Wt=Vt.format,zt=Vt.type;if(!Z.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&B>=0&&B<=b.height-N&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Rt),C.readPixels(U,B,H,N,Nt.convert(Wt),Nt.convert(zt),lt))}finally{const Vt=P!==null?rt.get(P).__webglFramebuffer:null;j.bindFramebuffer(C.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,H,N,lt,Mt,Rt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt)if(U>=0&&U<=b.width-H&&B>=0&&B<=b.height-N){j.bindFramebuffer(C.FRAMEBUFFER,Tt);const Vt=b.textures[Rt],Wt=Vt.format,zt=Vt.type;if(!Z.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,se),C.bufferData(C.PIXEL_PACK_BUFFER,lt.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Rt),C.readPixels(U,B,H,N,Nt.convert(Wt),Nt.convert(zt),0);const ge=P!==null?rt.get(P).__webglFramebuffer:null;j.bindFramebuffer(C.FRAMEBUFFER,ge);const Le=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qd(C,Le,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,se),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,lt),C.deleteBuffer(se),C.deleteSync(Le),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,B=0){const H=Math.pow(2,-B),N=Math.floor(b.image.width*H),lt=Math.floor(b.image.height*H),Mt=U!==null?U.x:0,Rt=U!==null?U.y:0;pt.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,Mt,Rt,N,lt),j.unbindTexture()};const td=C.createFramebuffer(),ed=C.createFramebuffer();this.copyTextureToTexture=function(b,U,B=null,H=null,N=0,lt=null){lt===null&&(N!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=N,N=0):lt=0);let Mt,Rt,Tt,Vt,Wt,zt,se,ge,Le;const be=b.isCompressedTexture?b.mipmaps[lt]:b.image;if(B!==null)Mt=B.max.x-B.min.x,Rt=B.max.y-B.min.y,Tt=B.isBox3?B.max.z-B.min.z:1,Vt=B.min.x,Wt=B.min.y,zt=B.isBox3?B.min.z:0;else{const _n=Math.pow(2,-N);Mt=Math.floor(be.width*_n),Rt=Math.floor(be.height*_n),b.isDataArrayTexture?Tt=be.depth:b.isData3DTexture?Tt=Math.floor(be.depth*_n):Tt=1,Vt=0,Wt=0,zt=0}H!==null?(se=H.x,ge=H.y,Le=H.z):(se=0,ge=0,Le=0);const xe=Nt.convert(U.format),Ot=Nt.convert(U.type);let Ae;U.isData3DTexture?(pt.setTexture3D(U,0),Ae=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(pt.setTexture2DArray(U,0),Ae=C.TEXTURE_2D_ARRAY):(pt.setTexture2D(U,0),Ae=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const ue=C.getParameter(C.UNPACK_ROW_LENGTH),rn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ki=C.getParameter(C.UNPACK_SKIP_PIXELS),on=C.getParameter(C.UNPACK_SKIP_ROWS),Ps=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,be.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,be.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Vt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zt);const Re=b.isDataArrayTexture||b.isData3DTexture,gn=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const _n=rt.get(b),qe=rt.get(U),tn=rt.get(_n.__renderTarget),go=rt.get(qe.__renderTarget);j.bindFramebuffer(C.READ_FRAMEBUFFER,tn.__webglFramebuffer),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,go.__webglFramebuffer);for(let Mi=0;Mi<Tt;Mi++)Re&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,rt.get(b).__webglTexture,N,zt+Mi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,rt.get(U).__webglTexture,lt,Le+Mi)),C.blitFramebuffer(Vt,Wt,Mt,Rt,se,ge,Mt,Rt,C.DEPTH_BUFFER_BIT,C.NEAREST);j.bindFramebuffer(C.READ_FRAMEBUFFER,null),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||rt.has(b)){const _n=rt.get(b),qe=rt.get(U);j.bindFramebuffer(C.READ_FRAMEBUFFER,td),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,ed);for(let tn=0;tn<Tt;tn++)Re?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_n.__webglTexture,N,zt+tn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_n.__webglTexture,N),gn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qe.__webglTexture,lt,Le+tn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qe.__webglTexture,lt),N!==0?C.blitFramebuffer(Vt,Wt,Mt,Rt,se,ge,Mt,Rt,C.COLOR_BUFFER_BIT,C.NEAREST):gn?C.copyTexSubImage3D(Ae,lt,se,ge,Le+tn,Vt,Wt,Mt,Rt):C.copyTexSubImage2D(Ae,lt,se,ge,Vt,Wt,Mt,Rt);j.bindFramebuffer(C.READ_FRAMEBUFFER,null),j.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else gn?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Ae,lt,se,ge,Le,Mt,Rt,Tt,xe,Ot,be.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Ae,lt,se,ge,Le,Mt,Rt,Tt,xe,be.data):C.texSubImage3D(Ae,lt,se,ge,Le,Mt,Rt,Tt,xe,Ot,be):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,lt,se,ge,Mt,Rt,xe,Ot,be.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,lt,se,ge,be.width,be.height,xe,be.data):C.texSubImage2D(C.TEXTURE_2D,lt,se,ge,Mt,Rt,xe,Ot,be);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,rn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ki),C.pixelStorei(C.UNPACK_SKIP_ROWS,on),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ps),lt===0&&U.generateMipmaps&&C.generateMipmap(Ae),j.unbindTexture()},this.initRenderTarget=function(b){rt.get(b).__webglFramebuffer===void 0&&pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pt.setTextureCube(b,0):b.isData3DTexture?pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pt.setTexture2DArray(b,0):pt.setTexture2D(b,0),j.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,j.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const ih={type:"change"},Ul={type:"start"},Eu={type:"end"},kr=new lo,sh=new ui,ix=Math.cos(70*yn.DEG2RAD),ze=new L,en=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zo=1e-6;class sx extends vp{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new ni,this._lastTargetPosition=new L,this._quat=new ni().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tl,this._sphericalDelta=new tl,this._scale=1,this._panOffset=new L,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new L,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ox.bind(this),this._onPointerDown=rx.bind(this),this._onPointerUp=ax.bind(this),this._onContextMenu=px.bind(this),this._onMouseWheel=hx.bind(this),this._onKeyDown=ux.bind(this),this._onTouchStart=dx.bind(this),this._onTouchMove=fx.bind(this),this._onMouseDown=lx.bind(this),this._onMouseMove=cx.bind(this),this._interceptControlDown=mx.bind(this),this._interceptControlUp=gx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ih),this.update(),this.state=_e.NONE}update(t=null){const e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ze.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(kr.origin.copy(this.object.position),kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kr.direction))<ix?this.object.lookAt(this.target):(sh.setFromNormalAndCoplanarPoint(this.object.up,this.target),kr.intersectPlane(sh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zo||this._lastTargetPosition.distanceToSquared(this.target)>Zo?(this.dispatchEvent(ih),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ze.copy(s).sub(this.target);let r=ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function rx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ox(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ax(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eu),this.state=_e.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ul)}function cx(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hx(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(Ul),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Eu))}function ux(i){this.enabled!==!1&&this._handleKeyDown(i)}function dx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ul)}function fx(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function px(i){this.enabled!==!1&&i.preventDefault()}function mx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Jr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class As{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _x=new Ll(-1,1,1,-1,0,1);class xx extends Ue{constructor(){super(),this.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ve([0,2,0,0,2,0],2))}}const vx=new xx;class Nl{constructor(t){this._mesh=new Bt(vx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,_x)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Mx extends As{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=tr.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Nl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class rh extends As{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class yx extends As{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Sx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ti}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mx(Jr),this.copyPass.material.blending=Qn,this.clock=new xu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rh!==void 0&&(o instanceof rh?n=!0:o instanceof yx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bx extends As{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Ex={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xs extends As{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new bt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(r,o,{type:ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Cn(r,o,{type:ti});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Cn(r,o,{type:ti});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=Ex;this.highPassUniforms=tr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new it(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=tr.clone(Jr.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader,blending:oa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new bt,this._oldClearAlpha=1,this._basic=new sr,this._fsQuad=new Nl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}xs.BlurDirectionX=new it(1,0);xs.BlurDirectionY=new it(0,1);const Hr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Tx extends As{constructor(){super(),this.uniforms=tr.clone(Hr.uniforms),this.material=new hp({name:Hr.name,uniforms:this.uniforms,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader}),this._fsQuad=new Nl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===kh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const le=10,Fl=30.6577,Tu=104.0657,wu=110.98,Au=111.32*Math.cos(Fl*Math.PI/180);function Rs(i,t){const e=t*Math.PI/180;return{x:Math.sin(e)*i*le,z:-Math.cos(e)*i*le}}function wx(i){return(Math.atan2(i.x,-i.z)*180/Math.PI+360)%360}function ar(i){return Math.hypot(i.x,i.z)/le}function lr(i,t){return{x:(t-Tu)*Au*le,z:-(i-Fl)*wu*le}}function Ax(i){return i.map(([t,e])=>lr(t,e))}function Ru(i,t){return{lon:Tu+i/(Au*le),lat:Fl-t/(wu*le)}}function Rx(i,t,e,n,s){const r=s*s,o=r*s,a=(l,c,h,u)=>.5*(2*c+(h-l)*s+(2*l-5*c+4*h-u)*r+(3*c-l-3*h+u)*o);return{x:a(i.x,t.x,e.x,n.x),z:a(i.z,t.z,e.z,n.z)}}function Cx(i,t=16){if(i.length<2)return i.slice();const e=[],n=s=>i[Math.min(Math.max(s,0),i.length-1)];for(let s=0;s<i.length-1;s++){const r=n(s-1),o=n(s),a=n(s+1),l=n(s+2);for(let c=0;c<t;c++)e.push(Rx(r,o,a,l,c/t))}return e.push({...i[i.length-1]}),e}function Px(i,t){if(i.length<2||t<=0)return i.slice();const e=[{...i[0]}];let n=0;for(let s=1;s<i.length;s++){const r=i[s-1],o=i[s],a=Math.hypot(o.x-r.x,o.z-r.z);if(a<1e-6)continue;let l=n;for(;l+t<=a;){l+=t;const c=l/a;e.push({x:r.x+(o.x-r.x)*c,z:r.z+(o.z-r.z)*c})}n=a-l,s===i.length-1&&e.push({...o})}return e}function Cu(i,t=16,e=1.2){return Px(Cx(Ax(i),t),e)}function Dx(i){const t=i.slice();return t.push({...i[0]}),t}const Zt={uTime:{value:0},uNight:{value:0},uSunI:{value:0},uSunDir:{value:new L(0,1,0)},uSunColor:{value:new bt("#ffdca8")},uSkyZenith:{value:new bt("#3f7fc4")},uSkyHorizon:{value:new bt("#cfe0ee")},uGroundColor:{value:new bt("#3c4436")},uFogColor:{value:new bt("#cfe0ee")},uFogDensity:{value:.0016},uRain:{value:0},uMist:{value:0},uBandSel:{value:-1},uLitGain:{value:1.1}},$o={sandbox:{distance:340,polarDeg:52,fov:21},panorama:{distance:70,polarDeg:81,fov:52},map:{distance:470,polarDeg:3,fov:11}},Lx=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class Ix{renderer;scene=new Ef;camera;controls;composer;bloom;sunLight=null;mode="sandbox";quality="high";tween=null;tmpVec=new L;constructor(t){this.renderer=new nx({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=hn,this.renderer.toneMapping=pl,this.renderer.toneMappingExposure=1.06,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nh,this.renderer.info.autoReset=!1,this.camera=new Mn($o.sandbox.fov,1,.6,2600),this.camera.position.set(180,250,-230),this.controls=new sx(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.075,this.controls.target.set(0,6,30),this.controls.maxPolarAngle=89.5*yn.DEG2RAD,this.controls.minDistance=5,this.controls.maxDistance=950,this.controls.zoomSpeed=.9,this.controls.rotateSpeed=.62,this.controls.panSpeed=.85,this.composer=new Sx(this.renderer),this.composer.addPass(new bx(this.scene,this.camera)),this.bloom=new xs(new it(1,1),.45,.7,.8),this.composer.addPass(this.bloom),this.composer.addPass(new Tx),this.applyMode("sandbox",!0),this.resize()}resize(){const t=window.innerWidth,e=window.innerHeight,n=this.quality==="high"?2:this.quality==="medium"?1.5:1,s=Math.min(window.devicePixelRatio||1,n);this.renderer.setPixelRatio(s),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(s),this.composer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}setQuality(t){if(this.quality=t,this.renderer.shadowMap.enabled=t!=="low",this.bloom.enabled=t!=="low",this.sunLight){const e=t==="high"?2048:1024;this.sunLight.shadow.mapSize.width!==e&&(this.sunLight.shadow.mapSize.set(e,e),this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null)}this.resize()}applyMode(t,e=!1){this.mode=t;const n=$o[t],s=this.controls.target.clone(),r=new tl().setFromVector3(this.camera.position.clone().sub(s));r.radius=n.distance,r.phi=yn.clamp(n.polarDeg*yn.DEG2RAD,.02,Math.PI/2-.01);const o=s.clone().add(new L().setFromSpherical(r));e?(this.camera.position.copy(o),this.camera.fov=n.fov,this.camera.updateProjectionMatrix()):this.startTween(o,s,n.fov,.9)}focusPlanar(t,e,n=.5){const s=$o[this.mode],r=Math.max(10,Math.min(e*10,this.mode==="panorama"?120:520)),o=new L(t.x,Math.min(16,r*.1),t.z),a=Math.atan2(t.x,-t.z)*180/Math.PI,l=Rs(r/le,a+210),c=new L(t.x+l.x,r*n+6,t.z+l.z);this.startTween(c,o,s.fov,1.3)}resetView(){this.applyMode(this.mode)}startTween(t,e,n,s){this.tween={t:0,dur:s,fromPos:this.camera.position.clone(),toPos:t,fromTarget:this.controls.target.clone(),toTarget:e,fromFov:this.camera.fov,toFov:n}}update(t){if(this.tween){const s=this.tween;s.t=Math.min(1,s.t+t/s.dur);const r=Lx(s.t);this.camera.position.lerpVectors(s.fromPos,s.toPos,r),this.controls.target.lerpVectors(s.fromTarget,s.toTarget,r);const o=s.fromFov+(s.toFov-s.fromFov)*r;Math.abs(this.camera.fov-o)>.001&&(this.camera.fov=o,this.camera.updateProjectionMatrix()),s.t>=1&&(this.tween=null)}if(this.controls.update(),this.sunLight){const s=this.controls.target;this.sunLight.target.position.copy(s);const r=yn.clamp(this.camera.position.distanceTo(s)*.7,60,380),o=this.sunLight.shadow.camera;Math.abs(o.left+r)>1&&(o.left=-r,o.right=r,o.top=r,o.bottom=-r,o.updateProjectionMatrix())}const e=this.quality==="low"?0:this.quality==="high"?.3:.24,n=this.quality==="high"?.62:.44;this.bloom.strength=e+Zt.uNight.value*n}render(){this.renderer.info.reset(),this.composer.render()}projectToScreen(t){return this.tmpVec.copy(t).project(this.camera),{x:(this.tmpVec.x*.5+.5)*window.innerWidth,y:(-this.tmpVec.y*.5+.5)*window.innerHeight,visible:this.tmpVec.z<1&&Math.abs(this.tmpVec.x)<1.05&&Math.abs(this.tmpVec.y)<1.05}}}const Ri=Math.PI/180,Vr=30.6577*Ri,Ux=(104.0657-120)/15,Gr=[{elev:-22,zenith:"#04070f",horizon:"#0a1220",sun:"#16233c",ground:"#05080d"},{elev:-8,zenith:"#0a1428",horizon:"#22243a",sun:"#2a3252",ground:"#0b1018"},{elev:-1,zenith:"#1c3253",horizon:"#8a5f5a",sun:"#ff8a4a",ground:"#23201f"},{elev:5,zenith:"#2f5f96",horizon:"#e6a06a",sun:"#ffb066",ground:"#3a3930"},{elev:14,zenith:"#3c78bd",horizon:"#cdd9e6",sun:"#ffe0ad",ground:"#4a5340"},{elev:40,zenith:"#3b82cd",horizon:"#cbe0f1",sun:"#fff4dd",ground:"#55613f"},{elev:70,zenith:"#3f8ad6",horizon:"#d5e8f6",sun:"#ffffff",ground:"#5c6845"}];function Wr(i,t,e,n){const s=new bt(i),r=new bt(t);return n.copy(s).lerp(r,e)}function Nx(i){let t=0;for(;t<Gr.length-2&&i>Gr[t+1].elev;)t++;const e=Gr[t],n=Gr[t+1],s=yn.clamp((i-e.elev)/(n.elev-e.elev),0,1);return{zenith:Wr(e.zenith,n.zenith,s,new bt),horizon:Wr(e.horizon,n.horizon,s,new bt),sun:Wr(e.sun,n.sun,s,new bt),ground:Wr(e.ground,n.ground,s,new bt)}}class Fx{dome;sun;moon;hemi;ambient;mist;rain;rainVel;uniforms;weather="clear";seasonDeg=18;night=0;elevationDeg=40;fog=new Tl(new bt("#cfe0ee").getHex(),.0016);constructor(t){this.uniforms={uZenith:{value:new bt},uHorizon:{value:new bt},uSunCol:Zt.uSunColor,uSunDir:Zt.uSunDir,uGround:{value:new bt},uNight:Zt.uNight,uMist:{value:0},uCloud:{value:0},uTime:Zt.uTime};const e=new Xe({uniforms:this.uniforms,side:Je,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying vec3 vDir;
        uniform vec3 uZenith, uHorizon, uSunCol, uSunDir, uGround;
        uniform float uNight, uMist, uCloud, uTime;

        float hash(vec3 p) {
          p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }

        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          float grad = pow(clamp(h + 0.03, 0.0, 1.0), 0.44);
          vec3 col = mix(uHorizon, uZenith, grad);
          col = mix(col, uGround, smoothstep(0.005, -0.12, h));

          float sd = dot(d, normalize(uSunDir));
          float disc = smoothstep(0.9988, 0.9996, sd);
          float halo = pow(max(sd, 0.0), 7.0) * 0.30 + pow(max(sd, 0.0), 60.0) * 0.22;
          float cover = 1.0 - uCloud * 0.85;
          col += uSunCol * (disc * 5.0 + halo) * mix(1.0, cover, 0.8);

          vec3 md = -normalize(uSunDir);
          float mdf = dot(d, md);
          col += vec3(0.82, 0.88, 1.0) * (smoothstep(0.9990, 0.9997, mdf) * 2.4 + pow(max(mdf, 0.0), 55.0) * 0.05) * uNight;

          float starField = step(0.99918, hash(floor(d * 520.0))) * uNight;
          float twinkle = 0.72 + 0.28 * sin(uTime * 2.4 + hash(floor(d * 520.0)) * 40.0);
          col += vec3(starField) * twinkle * smoothstep(0.02, 0.32, h) * (1.0 - uMist) * (1.0 - uCloud);

          float glow = exp(-abs(h) * 8.5) * uNight;
          col += vec3(0.30, 0.19, 0.11) * glow * 0.85;

          gl_FragColor = vec4(col, 1.0);
        }
      `});this.dome=new Bt(new or(1500,40,24),e),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,t.add(this.dome),t.fog=this.fog,this.sun=new Cc("#fff2d8",2.6),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const n=this.sun.shadow.camera;n.near=40,n.far=900,n.left=-160,n.right=160,n.top=160,n.bottom=-160,this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.7,t.add(this.sun),t.add(this.sun.target),this.moon=new Cc("#a9c1ff",0),t.add(this.moon),this.hemi=new fp("#cfe0ee","#4a5340",.6),t.add(this.hemi),this.ambient=new gp("#ffffff",.18),t.add(this.ambient),this.mist=new dn;const s=new sr({color:"#dfe9f2",transparent:!0,opacity:0,depthWrite:!1,side:wn,fog:!1});for(let l=0;l<4;l++){const c=new Bt(new Ts(900,900,1,1),s.clone());c.rotation.x=-Math.PI/2,c.position.y=3+l*9,c.renderOrder=5,this.mist.add(c)}t.add(this.mist);const r=2600,o=new Float32Array(r*3);this.rainVel=new Float32Array(r);for(let l=0;l<r;l++)o[l*3]=(Math.random()-.5)*220,o[l*3+1]=Math.random()*90,o[l*3+2]=(Math.random()-.5)*220,this.rainVel[l]=55+Math.random()*45;const a=new Ue;a.setAttribute("position",new Fe(o,3)),this.rain=new Pf(a,new au({color:"#b9d3e8",size:1.1,sizeAttenuation:!0,transparent:!0,opacity:0,depthWrite:!1})),this.rain.frustumCulled=!1,t.add(this.rain)}setWeather(t){this.weather=t}solarTime(t){const e=(t+Ux-12)*15*Ri,n=this.seasonDeg*Ri,s=Math.asin(Math.sin(Vr)*Math.sin(n)+Math.cos(Vr)*Math.cos(n)*Math.cos(e));let r=Math.atan2(Math.sin(e),Math.cos(e)*Math.sin(Vr)-Math.tan(n)*Math.cos(Vr));return r=r/Ri,r<0&&(r+=360),{elevDeg:s/Ri,azimDeg:r}}update(t,e,n){const{elevDeg:s,azimDeg:r}=this.solarTime(t);this.elevationDeg=s;const o=s*Ri,a=(r+180)*Ri,l=new L(Math.sin(a)*Math.cos(o),Math.sin(o),-Math.cos(a)*Math.cos(o)).normalize();Zt.uSunDir.value.copy(l);const c=Nx(s);this.uniforms.uZenith.value.copy(c.zenith),this.uniforms.uHorizon.value.copy(c.horizon),this.uniforms.uGround.value.copy(c.ground),Zt.uSkyZenith.value.copy(c.zenith),Zt.uSkyHorizon.value.copy(c.horizon),Zt.uGroundColor.value.copy(c.ground),Zt.uSunColor.value.copy(c.sun);const h=yn.clamp((6-s)/12,0,1);this.night+=(h-this.night)*Math.min(1,n*4),Zt.uNight.value=this.night;const u=this.weather==="mist"?.75:this.weather==="rain"?.35:.12,d=this.weather==="rain"?.75:this.weather==="snow"?.6:this.weather==="mist"?.35:.06,f=this.weather==="rain"?1:0;Zt.uMist.value+=(u-Zt.uMist.value)*Math.min(1,n*2),Zt.uRain.value+=(f-Zt.uRain.value)*Math.min(1,n*2),this.uniforms.uMist.value=Zt.uMist.value,this.uniforms.uCloud.value=d;const g=yn.clamp(Math.sin(Math.max(o,0))+.06,0,1),_=Math.pow(yn.clamp(s/22,0,1),.72)*2.55*(1-d*.72);this.sun.intensity=Math.max(0,_),this.sun.color.copy(c.sun),this.sun.position.copy(l).multiplyScalar(420).add(e),this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld(),this.moon.intensity=this.night*.22*(1-d*.6),this.moon.position.copy(l).multiplyScalar(-420).add(e),this.hemi.color.copy(c.horizon),this.hemi.groundColor.copy(c.ground),this.hemi.intensity=.22+g*.34+this.night*.07,this.ambient.intensity=.06+this.night*.1+g*.06,this.ambient.color.copy(c.horizon).lerp(new bt("#3a2c22"),this.night*.6),Zt.uSunI.value=g;const m=38e-5+u*.0026+d*4e-4+this.night*2e-4;this.fog.color.copy(c.zenith).lerp(c.horizon,.42).lerp(new bt("#141a26"),this.night*.5),this.fog.density+=(m-this.fog.density)*Math.min(1,n*3),Zt.uFogColor.value.copy(this.fog.color),Zt.uFogDensity.value=this.fog.density,this.dome.position.copy(e);for(const y of this.mist.children){const S=y.material,x=yn.clamp(u-.1,0,.7)*(1-this.night*.45);S.opacity+=(x*.32-S.opacity)*Math.min(1,n*1.6),y.position.x=e.x,y.position.z=e.z,y.rotation.z+=n*.01}const p=this.rain.material;if(p.opacity+=(f*.55-p.opacity)*Math.min(1,n*2),p.opacity>.01){const y=this.rain.geometry.getAttribute("position");for(let S=0;S<y.count;S++){let x=y.getY(S)-this.rainVel[S]*n;x<-2&&(x=92),y.setY(S,x)}y.needsUpdate=!0,this.rain.position.set(e.x,e.y-40,e.z)}}}const so={quality:"high",view:"sandbox",hour:20.2,speed:.35,weather:"clear",litRatio:.55,layers:{terrain:!0,green:!0,water:!0,roads:!0,traffic:!0,buildings:!0,landmarks:!0,metro:!0,labels:!0},band:null,poiId:null},zx=[{label:"清晨",hour:6.6},{label:"正午",hour:13.1},{label:"黄昏",hour:19.9},{label:"深夜",hour:22.6}],Pu="cd-sandbox-state-v1";class Ox{state;listeners=new Set;constructor(){this.state=Bx()}get(t){return this.state[t]}set(t,e=!0){this.state={...this.state,...t},e&&Jo(this.state),this.emit()}setLayer(t,e){this.state={...this.state,layers:{...this.state.layers,[t]:e}},Jo(this.state),this.emit()}reset(){this.state={...so,layers:{...so.layers}},Jo(this.state),this.emit()}subscribe(t){return this.listeners.add(t),t(this.state),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t(this.state)}}function Bx(){const i={...so,layers:{...so.layers}};if(typeof localStorage>"u")return i;try{const t=localStorage.getItem(Pu);if(!t)return i;const e=JSON.parse(t);return{...i,...e,layers:{...i.layers,...e.layers??{}}}}catch{return i}}function Jo(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(Pu,JSON.stringify(i))}catch{}}function Qr(i){const t=Math.floor(i)%24,e=Math.floor((i-Math.floor(i))*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function Ut(i,t,e=0){let n=Math.imul(Math.round(i*977)^Math.round(t*761)^e,668265261);return n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,(n>>>0)/4294967296}function oh(i){return i*i*(3-2*i)}function kx(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=oh(i-n),o=oh(t-s),a=Ut(n,s,e),l=Ut(n+1,s,e),c=Ut(n,s+1,e),h=Ut(n+1,s+1,e);return a+(l-a)*r+(c-a)*o+(a-l-c+h)*r*o}function ks(i,t,e=4,n=0){let s=0,r=.5,o=1;for(let a=0;a<e;a++)s+=kx(i*o,t*o,n+a*101)*r,r*=.5,o*=2;return s}const Hx=[{id:"tianfu-square",name:"天府广场",lat:30.6577,lon:104.0657,heightM:0,category:"core",blurb:"成都的零公里点，8.8 万㎡ 广场；地面太阳神鸟图案直径 12 m，北侧为四川科技馆（原西南展览馆）。本沙盘所有环线半径与方位角都以这里为原点。",model:"tianfuSquare",flyKm:1.4,tag:"城市原点"},{id:"sichuan-science-hall",name:"四川科技馆",lat:30.6594,lon:104.0652,heightM:43,category:"core",blurb:"天府广场北侧，1950 年代苏式展览馆改建，金色屋顶是老成都天际线的一部分。",model:"hallBlock",flyKm:.6},{id:"chengdu-museum",name:"成都博物馆",lat:30.6568,lon:104.0618,heightM:40,category:"culture",blurb:"天府广场西侧，铜色格栅幕墙，讲成都两千年的城市史。",model:"hallBlock",flyKm:.7},{id:"sichuan-grand-theatre",name:"四川大剧院",lat:30.6601,lon:104.0663,heightM:36,category:"culture",blurb:"人民东路，原四川剧场旧址重建，1 座大剧场＋多功能剧场。",model:"hallBlock",flyKm:.6},{id:"renmin-park",name:"人民公园·保路运动纪念碑",lat:30.6605,lon:104.0545,heightM:32,category:"park",blurb:"1911 年四川保路运动纪念碑（1985 年迁建于此），辛亥保路纪念广场；鹤鸣茶社的老茶馆生活。",model:"monument",flyKm:.8,tag:"31.9 m（碑高待核）"},{id:"wenshu",name:"文殊院",lat:30.6678,lon:104.0745,heightM:18,category:"culture",blurb:"长江上游四大禅林之一，绕院建筑限高 18 m，是老城密度与院落秩序的样本。方位 1.9 km / 26°。",model:"temple",flyKm:.8},{id:"kuanzhai",name:"宽窄巷子",lat:30.668,lon:104.0568,heightM:12,category:"culture",blurb:"清代满城（少城）兵营胡同格局，宽巷子／窄巷子／井巷子三条平行街巷。",model:"oldStreet",flyKm:.7,tag:"少城街区"},{id:"qingyang",name:"青羊宫",lat:30.6598,lon:104.0358,heightM:20,category:"culture",blurb:"川西第一道观，八卦亭与铜羊；2.8 km / 275°，正好压在送仙桥一线。",model:"temple",flyKm:.8},{id:"wuhou",name:"武侯祠·锦里",lat:30.6418,lon:104.0455,heightM:16,category:"culture",blurb:"君臣合祀的武侯祠与仿古街锦里；一墙之隔是 226 年刘备下诏修建的惠陵。",model:"temple",flyKm:.9},{id:"dufu",name:"杜甫草堂",lat:30.6593,lon:104.0288,heightM:14,category:"culture",blurb:"759 年杜甫流寓成都的故居，茅屋、花径、大廨、工部祠，浣花溪旁 19 万㎡ 园林博物馆。",model:"thatchedCottage",flyKm:.8},{id:"jinsha",name:"金沙遗址博物馆",lat:30.6815,lon:104.011,heightM:28,category:"culture",blurb:"商周古蜀都城遗址（约公元前 1200—前 900 年），太阳神鸟金饰出土地；遗迹馆是亚洲最大单体保护棚之一。",model:"jinsha",flyKm:1.1,tag:"5.8 km / 295°"},{id:"taikoo-li",name:"春熙路·太古里",lat:30.6565,lon:104.0815,heightM:98,category:"tower",blurb:"大慈寺周边的开放式低街区＋高层公寓，1.5 km / 95°；成都最贵的临街铺面。",model:"taikooLi",flyKm:.9},{id:"ifs",name:"成都 IFS 国际金融中心",lat:30.6578,lon:104.081,heightM:248,category:"tower",blurb:"T1 塔楼 21 万㎡、高约 248 m；屋顶的「爬墙熊猫」高 15 m，是 Lawrence 2014 年的城市装置。",model:"ifsPanda",flyKm:.8,tag:"248 m"},{id:"tower-339",name:"四川广播电视塔（339）",lat:30.6683,lon:104.0923,heightM:339,category:"tower",blurb:"塔高 339 m、海拔 663 m，塔身有直径 60 m 的旋转餐厅与 218 m 处悬空观光厅；「339」是成都夜生活的代号。",model:"tvTower",flyKm:1.4,tag:"339 m"},{id:"hejunting",name:"合江亭",lat:30.6484,lon:104.0772,heightM:12,category:"culture",blurb:"府河与南河在此汇为锦江，六角重檐亭；两条内城河的全部坐标都收在这个点。",model:"pavilion",flyKm:.5,tag:"1.5 km / 133°"},{id:"jiuyanqiao",name:"九眼桥·安顺廊桥",lat:30.6372,lon:104.0938,heightM:24,category:"culture",blurb:"明万历始建的石拱桥旧名，现为锦江上的廊桥与成都最密集的酒吧街。",model:"stoneBridge",flyKm:.6},{id:"wangjianglou",name:"望江楼公园",lat:30.6352,lon:104.0945,heightM:39,category:"park",blurb:"为纪念薛涛而建，崇丽阁 4 层、高 39 m，取「既丽且崇」之意；园内 100 余种竹。",model:"wangjiangLou",flyKm:.7,tag:"3.7 km / 132°"},{id:"scu",name:"四川大学（望江校区）",lat:30.6348,lon:104.0935,heightM:60,category:"edu",blurb:"1896 年四川中西学堂，望江校区老图书馆与行政楼；校区沿 2.28 km / 130° 一线展开。",model:"campusGate",flyKm:1.2},{id:"uestc",name:"电子科技大学（清水河）",lat:30.6888,lon:104.0955,heightM:70,category:"edu",blurb:"1956 年建校，位于府青路—二仙桥以北 4.5 km / 40°，新校区在西区。",model:"campusGate",flyKm:1.3},{id:"dongjiao-memories",name:"东郊记忆",lat:30.6552,lon:104.1212,heightM:22,category:"culture",blurb:"1958 年国营红光电子管厂旧址改造的文化园区，苏式厂房与烟囱骨架保留。",model:"oldStreet",flyKm:.9,tag:"工业遗产"},{id:"global-center",name:"新世纪环球中心",lat:30.5682,lon:104.0655,heightM:100,category:"newcity",blurb:"500 m × 400 m 的巨蛋，占地 130 万㎡、建筑面积 176 万㎡，室内含水面长 300 m；9.9 km / 179°。",model:"globalCenter",flyKm:1.8,tag:"500×400 m"},{id:"eu-center",name:"中国—欧洲中心",lat:30.544,lon:104.0623,heightM:192,category:"tower",blurb:"天府大道南段的天使大厅造型塔楼，高 192 m；12.6 km / 182°。",model:"euCenter",flyKm:1.1,tag:"192 m"},{id:"software-park",name:"天府软件园",lat:30.5395,lon:104.0605,heightM:100,category:"newcity",blurb:"2004 年开园的 B／C 区网格，成都 IT 就业密度最高的片区；13.2 km / 182°。",model:"officePark",flyKm:1.6},{id:"shufeng-468",name:"绿地蜀峰 468",lat:30.5296,lon:104.058,heightM:388,category:"tower",blurb:"蜀锦路一带的超高层（规划 468 m，在建阶段高度待核）；14.2 km / 183°。",model:"cbdSupertall",flyKm:1.4,tag:"468 m（规划）"},{id:"twin-towers",name:"天府国际金融中心双子塔",lat:30.5578,lon:104.066,heightM:218,category:"tower",blurb:"双子塔各 218 m、44 层，LED 幕墙是整个金融城夜景的屏幕。",model:"twinTowers",flyKm:1.1,tag:"218 m"},{id:"jiaozi-ring",name:"交子之环",lat:30.5543,lon:104.0641,heightM:28,category:"newcity",blurb:"跨天府大道的红色圆环天桥，内径 90 m、外径 110 m，2021 年启用。桥位选在距双子塔 D∶H≈2∶1（约 430 m）处，正好看全 218 m 塔身。",model:"jiaoziRing",flyKm:.6,tag:"90—110 m"},{id:"phoenix-stadium",name:"凤凰山体育公园",lat:30.7285,lon:104.087,heightM:55,category:"newcity",blurb:"6 万座专业足球场＋1.8 万座综合体育馆，屋面最高点 55 m；北部最大的足球主场。",model:"stadium",flyKm:1.4,tag:"6 万座"},{id:"openair-music",name:"露天音乐公园",lat:30.7355,lon:104.0685,heightM:50,category:"park",blurb:"1 322.5 亩，主舞台看台可容 10 万人，屋顶结构最高点 49.75 m；金三角绿道枢纽。",model:"stadium",flyKm:1.3,tag:"10 万人"},{id:"panda-base",name:"成都大熊猫繁育研究基地",lat:30.705,lon:104.112,heightM:16,category:"park",blurb:"1987 年起步于斧头山，现 3.07 km²，是全球最大的人工繁育大熊猫种群基地。",model:"pandaBase",flyKm:1.6,tag:"3.07 km²"},{id:"natural-museum",name:"成都自然博物馆",lat:30.7195,lon:104.129,heightM:42,category:"culture",blurb:"成都理工大学旁，2022 年开放，「蜀犬吠日」造型屋面；9.1 km / 41°。",model:"hallBlock",flyKm:1.1},{id:"east-station",name:"成都东站",lat:30.6086,lon:104.1434,heightM:39,category:"transport",blurb:"14 台 26 线，站房 5.5 万㎡，东西雨棚 105 m × 305 m；成都最大铁路客运枢纽。",model:"stationRoof",flyKm:1.6,tag:"14 台 26 线"},{id:"north-station",name:"成都站（火车北站）",lat:30.6848,lon:104.0785,heightM:35,category:"transport",blurb:"1952 年建成，站房 3.8 万㎡，2022 年停客运扩建改造（8 台 16 线方案）。",model:"stationRoof",flyKm:1.1},{id:"south-station",name:"成都南站",lat:30.6093,lon:104.0715,heightM:30,category:"transport",blurb:"2013 年投用，站房 2.6 万㎡、雨棚 87.5 万㎡级规模，5.4 km / 186°。",model:"stationRoof",flyKm:1},{id:"shuangliu-airport",name:"双流国际机场",lat:30.5705,lon:103.9545,heightM:45,category:"transport",blurb:"距市中心 16 km；02L/20R 跑道 3600×60 m、02R/20L 3600×45 m，T1 15 万㎡＋T2 35 万㎡，228 个机位。",model:"airport",flyKm:3.2,tag:"2 跑道"},{id:"tianfu-airport",name:"天府国际机场",lat:30.3115,lon:104.4445,heightM:60,category:"transport",blurb:"距市中心 52.8 km，「太阳神鸟」六指造型航站楼；3 条跑道 4000／3800／3200 m，航站楼 71 万㎡，2021-06 投用。",model:"airportTianfu",flyKm:4,tag:"3 跑道"},{id:"donganhu",name:"东安湖公园",lat:30.607,lon:104.242,heightM:50,category:"park",blurb:"东郊垃圾场修复而来的 5 千亩湖；「一场三馆」含 4 万座体育场，屋顶开孔成太阳神鸟图案，屋面最高 50 m。",model:"donganhu",flyKm:1.8,tag:"大运会"},{id:"huilong",name:"汇龙公园",lat:30.5932,lon:104.192,heightM:24,category:"park",blurb:"青龙湖与沙河交汇的湿地楔形绿肺，「绿道＋湿地＋体育」复合体。",model:"pavilion",flyKm:1},{id:"danjing-tai",name:"丹景台（城市森林公园观景塔）",lat:30.415,lon:104.285,heightM:42,category:"nature",blurb:"龙泉山脉次高峰，海拔 702 m；2020-01-01 开放，核心区 955 亩，「太阳神鸟」观景平台可俯瞰东部新区。",model:"danjingTai",flyKm:1.2,tag:"海拔 702 m"},{id:"lihu",name:"麓湖",lat:30.4845,lon:104.0885,heightM:100,category:"newcity",blurb:"1 700 亩人工湖水系串起的群岛社区，成都「湖泊城市」实验。",model:"lakeCampus",flyKm:1.4},{id:"xibo-city",name:"中国西部国际博览城",lat:30.4612,lon:104.07,heightM:45,category:"newcity",blurb:"秦皇寺旁的展城，室内展场 45 万㎡，2019 年世界警察局长大会在此。",model:"expoHall",flyKm:1.6},{id:"xinglong-lake",name:"兴隆湖",lat:30.415,lon:104.0715,heightM:100,category:"newcity",blurb:"4 500 亩湖面、成都科学城核心，湖滨带「水下来水」的地下空间与超算中心。",model:"lakeCampus",flyKm:1.8,tag:"27.1 km / 177°"},{id:"sancha-lake",name:"三岔湖",lat:30.3025,lon:104.3355,heightM:0,category:"nature",blurb:"1972 年建水库，水域 27 km²、113 个岛状半岛，东部新区的蓝色心。",model:"lakeCampus",flyKm:2.4,tag:"27 km²"},{id:"zhengxing-cbd",name:"天府公园",lat:30.4615,lon:104.066,heightM:0,category:"newcity",blurb:"2 km² 中央公园，水体 44.3 万㎡，是总部商务区塔楼群的绿色客厅；21.8 km / 180°。",model:"officePark",flyKm:2},{id:"zhengxing-cbd-tower",name:"中海天府中心",lat:30.468,lon:104.063,heightM:488,category:"tower",blurb:"总部商务区第一梯队超高层，规划高 488.9 m（建成高度待核）。",model:"cbdSupertall",flyKm:1.8,tag:"488.9 m（规划）"},{id:"dujiangyan",name:"都江堰",lat:30.9985,lon:103.6155,heightM:20,category:"nature",blurb:"公元前 256 年李冰父子的无坝引水工程：鱼嘴分水、飞沙堰泄洪、宝瓶口控制内江水量，成都平原自流灌溉的起点。",model:"dujiangyanWeir",flyKm:2.6,tag:"56.6 km / 311°"},{id:"snow-mountain",name:"西岭雪山·幺妹峰",lat:30.7025,lon:103.1725,heightM:6250,category:"nature",blurb:"「窗含西岭千秋雪」的出处，大雪塘海拔 5364 m，邛崃山主峰四姑娘山幺妹峰 6250 m 在天际线尽头。",model:"snowPeaks",flyKm:8,tag:"约 100 km"},{id:"huanhu-park",name:"环城生态公园（天府绿道）",lat:30.6577,lon:104.205,heightM:0,category:"park",blurb:"绕城高速两侧 100 km 绿道、78 座桥梁、121 个公园，13.5 km 半径的绿色圆环。",model:"greenwayArch",flyKm:2.4,tag:"100 km"}],$n=[{name:"内环路",radiusKm:2.26,widthM:22,elevated:!0,year:1995},{name:"一环路",radiusKm:3.09,widthM:40,elevated:!1,year:1986},{name:"二环路",radiusKm:4.5,widthM:32,elevated:!0,year:1993},{name:"中环路",radiusKm:6.78,widthM:36,elevated:!1,year:2012},{name:"三环路",radiusKm:8.1,widthM:50,elevated:!1,year:2002},{name:"绕城高速（四环路）",radiusKm:13.5,widthM:40,elevated:!1,year:2001,southStretch:1.14},{name:"五环路（在建）",radiusKm:22.7,widthM:30,elevated:!1,year:2027},{name:"第二绕城高速（六环路）",radiusKm:35.5,widthM:28,elevated:!1,year:2015}],Du=[{name:"人民北路—北星大道",bearingDeg:0,lengthKm:24,widthM:44,axis:!0},{name:"川陕路—成绵高速",bearingDeg:13,lengthKm:18,widthM:32},{name:"建设路—成南高速",bearingDeg:45,lengthKm:20,widthM:36},{name:"双成大道—龙潭寺",bearingDeg:66,lengthKm:16,widthM:30},{name:"蜀都大道东段—东大路",bearingDeg:90,lengthKm:20,widthM:46,axis:!0},{name:"成龙大道—驿都大道",bearingDeg:96,lengthKm:24,widthM:40},{name:"成渝高速—天府机场高速",bearingDeg:137,lengthKm:34,widthM:40},{name:"剑南大道南延",bearingDeg:160,lengthKm:22,widthM:36,lateralKm:-1.6},{name:"人民南路—天府大道（百里城市中轴）",bearingDeg:180,lengthKm:34,widthM:60,axis:!0},{name:"红星路—红星路南延线",bearingDeg:180,lengthKm:24,widthM:36,lateralKm:1.1},{name:"益州大道—天府大道西辅轴",bearingDeg:202,lengthKm:20,widthM:32,lateralKm:-2.6},{name:"武侯大道—成雅高速",bearingDeg:226,lengthKm:22,widthM:38},{name:"光华大道—成温邛高速",bearingDeg:248,lengthKm:22,widthM:36},{name:"蜀都大道西段—金河街",bearingDeg:270,lengthKm:22,widthM:46,axis:!0},{name:"羊市街西延线—成灌高速",bearingDeg:288,lengthKm:22,widthM:36},{name:"西华大道—彭州",bearingDeg:315,lengthKm:20,widthM:34},{name:"北星大道二段—新都",bearingDeg:338,lengthKm:20,widthM:32}],Vx=[{name:"府河",widthM:46,main:!0,latLon:[[30.755,104.032],[30.727,104.058],[30.706,104.07],[30.686,104.076],[30.671,104.083],[30.66,104.088],[30.652,104.08],[30.6484,104.0772]]},{name:"锦江（南河）",widthM:44,main:!0,latLon:[[30.712,103.952],[30.692,103.988],[30.678,104.018],[30.665,104.038],[30.656,104.05],[30.651,104.062],[30.6484,104.0772]]},{name:"锦江下游",widthM:48,main:!0,latLon:[[30.6484,104.0772],[30.6425,104.0895],[30.636,104.1],[30.626,104.113],[30.614,104.128],[30.6005,104.146],[30.578,104.171],[30.545,104.196],[30.475,104.224]]},{name:"沙河",widthM:30,latLon:[[30.762,104.128],[30.733,104.132],[30.705,104.128],[30.682,104.126],[30.662,104.135],[30.642,104.152],[30.622,104.156],[30.6005,104.146]]},{name:"江安河",widthM:22,latLon:[[30.768,103.892],[30.738,103.94],[30.71,103.985],[30.695,104.028],[30.686,104.066],[30.706,104.07]]},{name:"毗河",widthM:20,latLon:[[30.845,103.828],[30.812,103.89],[30.785,103.962],[30.762,104.028],[30.755,104.032]]},{name:"金马河（岷江）",widthM:60,latLon:[[31.005,103.612],[30.885,103.688],[30.762,103.762],[30.628,103.835],[30.5,103.868],[30.402,103.905],[30.318,103.982]]},{name:"羊马河",widthM:26,latLon:[[30.965,103.702],[30.868,103.775],[30.762,103.828],[30.672,103.858],[30.6,103.872]]},{name:"潦河—第二绕城以北",widthM:24,latLon:[[31.035,103.688],[30.965,103.702],[30.888,103.744],[30.812,103.792]]},{name:"沱江支流（绛溪河）",widthM:26,latLon:[[30.638,104.352],[30.575,104.368],[30.505,104.398],[30.432,104.432],[30.362,104.462]]}],Gx=[{name:"兴隆湖",lat:30.415,lon:104.0715,radiusKm:.62,elongate:1.9,bearing:96},{name:"东安湖",lat:30.6055,lon:104.243,radiusKm:.55,elongate:1.5,bearing:25},{name:"北湖（青龙湖）",lat:30.7535,lon:104.1485,radiusKm:.45},{name:"升仙湖",lat:30.7355,lon:104.1155,radiusKm:.2},{name:"锦城湖",lat:30.596,lon:104.057,radiusKm:.35,elongate:1.6,bearing:180},{name:"麓湖",lat:30.4845,lon:104.0885,radiusKm:.42},{name:"三岔湖",lat:30.3025,lon:104.3355,radiusKm:1.15,elongate:1.7,bearing:40},{name:"鲁家滩（金马河）",lat:30.6955,lon:103.8075,radiusKm:.4},{name:"天鹤湖（东部新区）",lat:30.4055,lon:104.4325,radiusKm:.35},{name:"百花潭·浣花溪水面",lat:30.6515,lon:104.0415,radiusKm:.12},{name:"二仙桥公园水系",lat:30.6885,lon:104.1185,radiusKm:.12}],Wx=[{name:"浣花溪公园",lat:30.6545,lon:104.0345,radiusKm:.45,kind:"park"},{name:"文化公园",lat:30.6565,lon:104.0425,radiusKm:.22,kind:"park"},{name:"望江楼公园",lat:30.6352,lon:104.0945,radiusKm:.3,kind:"park",elongate:1.4,bearing:135},{name:"活水公园",lat:30.6655,lon:104.0885,radiusKm:.14,kind:"park"},{name:"新华公园",lat:30.6555,lon:104.1095,radiusKm:.2,kind:"park"},{name:"塔子山公园",lat:30.6405,lon:104.1335,radiusKm:.32,kind:"park"},{name:"离堆公园·杜甫草堂园林",lat:30.6615,lon:104.0275,radiusKm:.28,kind:"park"},{name:"百花潭公园",lat:30.6485,lon:104.0465,radiusKm:.18,kind:"park"},{name:"成都市植物园",lat:30.7205,lon:104.1055,radiusKm:.35,kind:"forest"},{name:"三圣乡·花乡农居",lat:30.6125,lon:104.1685,radiusKm:1.3,kind:"farm",elongate:1.6,bearing:135},{name:"北湖生态公园",lat:30.7485,lon:104.1425,radiusKm:1.2,kind:"forest"},{name:"青龙湖二期",lat:30.7315,lon:104.1665,radiusKm:1,kind:"forest"},{name:"凤凰山",lat:30.7395,lon:104.079,radiusKm:.9,kind:"forest"},{name:"天府艺术公园",lat:30.7275,lon:104.0395,radiusKm:.5,kind:"park"},{name:"怡心湖",lat:30.5225,lon:104.0355,radiusKm:.35,kind:"park"},{name:"怡龙生态公园",lat:30.5685,lon:104.0965,radiusKm:.4,kind:"forest"},{name:"牧马山",lat:30.4855,lon:103.9255,radiusKm:1.6,kind:"forest",elongate:1.5,bearing:45},{name:"龙泉山城市森林公园",lat:30.4625,lon:104.3085,radiusKm:4.2,kind:"forest",elongate:2.4,bearing:20},{name:"丹景台·城市之眼",lat:30.415,lon:104.285,radiusKm:.4,kind:"ridge"},{name:"长秋山森林公园",lat:30.3025,lon:103.8025,radiusKm:2.2,kind:"forest",elongate:1.6,bearing:320},{name:"天台山—西部山地",lat:30.3855,lon:103.2325,radiusKm:6,kind:"forest"},{name:"青城山—都江堰山林",lat:30.9625,lon:103.5825,radiusKm:4.5,kind:"forest"},{name:"龙门山·西岭雪山",lat:30.7025,lon:103.1725,radiusKm:7,kind:"ridge"},{name:"九顶山—岷山雪峰",lat:31.0255,lon:102.9125,radiusKm:9,kind:"ridge"},{name:"赵公山",lat:30.8925,lon:103.4625,radiusKm:3.2,kind:"ridge"},{name:"龙泉山脉主脊",lat:30.6525,lon:104.2925,radiusKm:4.5,kind:"ridge",elongate:2.6,bearing:25},{name:"天府公园",lat:30.4615,lon:104.066,radiusKm:.95,kind:"park",elongate:2,bearing:0},{name:"露天音乐公园",lat:30.7355,lon:104.0685,radiusKm:.55,kind:"park"}],$e={innerKm:12.1,outerKm:14.9,label:"天府绿道·环城生态公园"},Xx=[{name:"锦江区",fromDeg:92,toDeg:168,innerKm:0,outerKm:7.2,color:"#e0876a",note:"春熙路·太古里·三圣乡"},{name:"青羊区",fromDeg:200,toDeg:278,innerKm:0,outerKm:6.6,color:"#7fb7d9",note:"宽窄巷子·杜甫草堂·青羊宫"},{name:"金牛区",fromDeg:278,toDeg:22,innerKm:0,outerKm:8.4,color:"#9fc78a",note:"火车北站·荷花池·凤凰山"},{name:"武侯区",fromDeg:168,toDeg:200,innerKm:0,outerKm:8,color:"#d6b26a",note:"武侯祠·锦里·桐梓林"},{name:"成华区",fromDeg:22,toDeg:92,innerKm:0,outerKm:9.2,color:"#b593d6",note:"建设路·东郊记忆·熊猫基地"},{name:"成都高新区",fromDeg:158,toDeg:202,innerKm:7.6,outerKm:14.5,color:"#5fb6c9",note:"金融城·大源·天府软件园·环球中心"},{name:"天府新区成都直管区",fromDeg:152,toDeg:208,innerKm:14.8,outerKm:30,color:"#65c98b",note:"总部商务区·科学城·兴隆湖"},{name:"双流区",fromDeg:196,toDeg:252,innerKm:10,outerKm:24,color:"#c9975f",note:"双流国际机场·怡心湖"},{name:"龙泉驿区",fromDeg:68,toDeg:122,innerKm:11,outerKm:24,color:"#8fb36b",note:"成都经开区·东安湖·龙泉山"},{name:"温江区",fromDeg:252,toDeg:282,innerKm:11,outerKm:26,color:"#86a1cc",note:"鲁家滩·医学城"},{name:"郫都区",fromDeg:282,toDeg:316,innerKm:11,outerKm:26,color:"#c2d06b",note:"菁蓉镇·川菜博物馆"},{name:"新都区",fromDeg:316,toDeg:24,innerKm:10,outerKm:24,color:"#d98fa6",note:"香城·西南石油大学"},{name:"青白江区",fromDeg:24,toDeg:68,innerKm:14,outerKm:30,color:"#7fc4b8",note:"国际铁路港·城厢古城"},{name:"东部新区",fromDeg:122,toDeg:158,innerKm:14,outerKm:56,color:"#e2b155",note:"三岔湖·天府国际机场·绛溪河"},{name:"简阳市",fromDeg:158,toDeg:196,innerKm:26,outerKm:44,color:"#a9b7c9",note:"天府国际机场所在市"},{name:"都江堰市",fromDeg:288,toDeg:318,innerKm:34,outerKm:62,color:"#78bfa4",note:"拜水都江堰·青城山"}],Lu=[{name:"天府广场—盐道街",lat:30.6577,lon:104.0685,radiusKm:1.6,peakM:90,density:1},{name:"春熙路—东大街",lat:30.6565,lon:104.0835,radiusKm:1.2,peakM:160,density:1.05},{name:"攀成钢—锦江大道",lat:30.6435,lon:104.1065,radiusKm:1.4,peakM:150,density:.95},{name:"火车北站—人民北路",lat:30.6835,lon:104.0775,radiusKm:1.3,peakM:110,density:.9},{name:"建设路—电子科大",lat:30.6865,lon:104.0995,radiusKm:1.4,peakM:120,density:.95},{name:"双桥—万年场",lat:30.6695,lon:104.1265,radiusKm:1.5,peakM:105,density:.9},{name:"红牌楼—丽都花园",lat:30.6205,lon:104.0315,radiusKm:1.4,peakM:110,density:.95},{name:"桐梓林—神仙树",lat:30.6095,lon:104.0585,radiusKm:1.3,peakM:130,density:.95},{name:"光华—中坝",lat:30.6725,lon:104.0015,radiusKm:1.5,peakM:100,density:.9},{name:"金沙—一品天下",lat:30.6785,lon:104.0315,radiusKm:1.3,peakM:115,density:.95},{name:"成都南站—交子公园",lat:30.6085,lon:104.0715,radiusKm:1.5,peakM:165,density:1},{name:"高新南区 世纪城—天府软件园",lat:30.5605,lon:104.0655,radiusKm:2.3,peakM:210,density:1.05},{name:"金融城—双子塔",lat:30.5578,lon:104.066,radiusKm:1.9,peakM:240,density:1.1},{name:"大源—蜀锦路",lat:30.5515,lon:104.0505,radiusKm:1.8,peakM:185,density:1},{name:"华阳",lat:30.4955,lon:104.0545,radiusKm:1.6,peakM:130,density:.95},{name:"怡心湖",lat:30.5225,lon:104.0355,radiusKm:1.3,peakM:140,density:.9},{name:"天府新区 总部商务区",lat:30.465,lon:104.064,radiusKm:2.1,peakM:280,density:1},{name:"西博城—天府国际会议中心",lat:30.456,lon:104.075,radiusKm:1.6,peakM:150,density:.9},{name:"成都科学城（兴隆湖）",lat:30.4195,lon:104.0725,radiusKm:1.7,peakM:130,density:.85},{name:"煎茶—鹿溪河生态区",lat:30.4305,lon:104.0285,radiusKm:1.5,peakM:70,density:.55},{name:"龙泉驿城区",lat:30.5705,lon:104.2725,radiusKm:1.6,peakM:110,density:.85},{name:"十陵—青龙",lat:30.6395,lon:104.1855,radiusKm:1.3,peakM:90,density:.8},{name:"成都东站—西河",lat:30.6085,lon:104.1475,radiusKm:1.4,peakM:105,density:.85},{name:"双流城区",lat:30.5685,lon:103.9385,radiusKm:1.7,peakM:110,density:.85},{name:"蛟龙港—蛟龙港",lat:30.6065,lon:103.9885,radiusKm:1.3,peakM:85,density:.75},{name:"温江城区",lat:30.6955,lon:103.8205,radiusKm:1.7,peakM:100,density:.8},{name:"郫都城区",lat:30.7955,lon:103.8905,radiusKm:1.6,peakM:95,density:.8},{name:"红光—西华大学",lat:30.7775,lon:103.9625,radiusKm:1.3,peakM:85,density:.75},{name:"天回—北部新城",lat:30.7345,lon:104.0785,radiusKm:1.5,peakM:115,density:.85},{name:"新都城区",lat:30.8135,lon:104.1595,radiusKm:1.7,peakM:100,density:.8},{name:"大丰—三河",lat:30.7455,lon:104.0605,radiusKm:1.4,peakM:100,density:.85},{name:"龙潭寺",lat:30.7105,lon:104.1285,radiusKm:1.3,peakM:85,density:.75},{name:"青白江城区",lat:30.8685,lon:104.2495,radiusKm:1.5,peakM:90,density:.7},{name:"新津城区",lat:30.4085,lon:103.8125,radiusKm:1.4,peakM:80,density:.65},{name:"三岔—东部新区",lat:30.3385,lon:104.2245,radiusKm:1.6,peakM:120,density:.7},{name:"崇州城区",lat:30.6285,lon:103.6785,radiusKm:1.4,peakM:75,density:.6},{name:"彭州城区",lat:30.9855,lon:103.9405,radiusKm:1.4,peakM:75,density:.6},{name:"邛崃城区",lat:30.4085,lon:103.4625,radiusKm:1.4,peakM:70,density:.55},{name:"都江堰城区",lat:30.9885,lon:103.6205,radiusKm:1.5,peakM:75,density:.6}],Kx=[{name:"1号线",color:"#0f6fc4",lengthKm:41,stations:35,year:2010,note:"沿人民路—天府大道的南北主轴",latLon:[[30.7005,104.0685],[30.6855,104.0685],[30.6577,104.066],[30.6305,104.066],[30.6105,104.0665],[30.5805,104.0665],[30.5605,104.066],[30.5405,104.066],[30.5105,104.061],[30.4905,104.0565],[30.4725,104.0585],[30.4505,104.0585]]},{name:"2号线",color:"#e0761f",lengthKm:42,stations:32,year:2012,note:"犀浦—龙泉驿，横贯蜀都大道与东站",latLon:[[30.7545,103.9755],[30.7205,104.0085],[30.6805,104.0305],[30.6605,104.0565],[30.6585,104.0805],[30.6555,104.1055],[30.6405,104.1305],[30.6105,104.1455],[30.5905,104.1855],[30.5805,104.2725]]},{name:"3号线",color:"#d3559a",lengthKm:47,stations:37,year:2016,note:"熊猫大道—武侯祠—双流",latLon:[[30.7205,104.1055],[30.7005,104.0905],[30.6755,104.0805],[30.6525,104.0705],[30.6305,104.0505],[30.6105,104.0305],[30.5805,104.0005],[30.5605,103.9405]]},{name:"4号线",color:"#3f9e56",lengthKm:43,stations:30,year:2016,note:"温江—-city北部—西河",latLon:[[30.6905,103.8105],[30.6905,103.8605],[30.6805,103.9505],[30.6705,104.0305],[30.6655,104.0685],[30.6605,104.0755],[30.6655,104.0905],[30.6705,104.1205],[30.6805,104.2105]]},{name:"5号线",color:"#7a5fc0",lengthKm:47,stations:34,year:2019,note:"北部新城—永陵—大源—回龙",latLon:[[30.7605,104.0805],[30.7205,104.0705],[30.6805,104.0605],[30.6505,104.0505],[30.6205,104.0405],[30.5805,104.0305],[30.5405,104.0305],[30.4905,104.0305],[30.4405,104.0355]]},{name:"6号线",color:"#b5651d",lengthKm:42,stations:29,year:2020,note:"望丛祠—光华—IDI 园区东南",latLon:[[30.8005,103.8805],[30.7605,103.9605],[30.7005,104.0205],[30.6605,104.0505],[30.6205,104.0705],[30.5805,104.0905],[30.5305,104.1205],[30.4905,104.1505],[30.4505,104.1905]]},{name:"7号线",color:"#3aa6b8",ringKm:6.14,lengthKm:38.6,stations:31,year:2017,note:"环线（38.6km／31 站），套住中环路一带"},{name:"8号线",color:"#8fbf3f",lengthKm:36,stations:25,year:2020,note:"龙潭寺—琉璃场—蛟龙港",latLon:[[30.7105,104.1205],[30.6805,104.1005],[30.6505,104.0805],[30.6205,104.0605],[30.5805,104.0305],[30.5505,104.0005],[30.5305,103.9605]]},{name:"9号线",color:"#e0503a",lengthKm:22,stations:13,year:2020,note:"黄田坝—金融城",latLon:[[30.6705,103.9805],[30.6505,104.0305],[30.6305,104.0605],[30.6005,104.0705],[30.5705,104.0805],[30.5405,104.0905]]},{name:"10号线",color:"#3f78c9",lengthKm:38,stations:21,year:2017,note:"太平园—双流机场—新津",latLon:[[30.6205,104.0405],[30.6005,104.0105],[30.5805,103.9705],[30.5705,103.9545],[30.5405,103.9305],[30.4705,103.8805],[30.4105,103.8125]]},{name:"17号线",color:"#9aa3ad",lengthKm:26,stations:10,year:2021,note:"温江—机投桥",latLon:[[30.6905,103.8105],[30.6605,103.9005],[30.6405,104.0005],[30.6105,104.0305],[30.5605,104.0405]]},{name:"18号线",color:"#d30a0a",express:!0,lengthKm:67,stations:12,year:2020,note:"南北快线，火车南站直达天府机场",latLon:[[30.6105,104.0705],[30.5605,104.0705],[30.5005,104.0685],[30.4505,104.0705],[30.3905,104.1105],[30.3505,104.1805],[30.3155,104.3605],[30.3115,104.4445]]},{name:"19号线",color:"#f2c500",express:!0,lengthKm:61,stations:21,year:2023,note:"温江—双流—天府机场快线",latLon:[[30.6805,103.8305],[30.6505,103.9305],[30.6005,104.0305],[30.5405,104.0705],[30.4505,104.1105],[30.3705,104.2005],[30.3115,104.4445]]}],ah=new Map;function Yx(i){const t=ah.get(i.id);if(t)return t;const e=lr(i.lat,i.lon);return ah.set(i.id,e),e}const Un=[0,$n[1].radiusKm,$n[2].radiusKm,$n[3].radiusKm,$n[4].radiusKm,$n[5].radiusKm],gi=["一环内·老城","一环—二环","二环—中环","中环—三环","三环—绕城","绕城以外"];function nl(i){const t=Math.max(0,Math.min(Un.length-1,i|0));return{innerKm:Un[t],outerKm:t===Un.length-1?70:Un[t+1]}}function us(i){for(let t=Un.length-1;t>=0;t--)if(i>=Un[t]){const e=t===Un.length-1;return{index:t,name:gi[t],innerKm:Un[t],outerKm:e?70:Un[t+1]}}return{index:0,name:gi[0],innerKm:0,outerKm:Un[1]}}function qx(i,t){const e=t*Math.PI/180,n=i.southStretch??1,s=Math.max(0,Math.cos(e)),r=i.radiusKm*(1+(n-1)*s);return Rs(r,t)}function Iu(i){const t=ar(i),e=wx(i),n=Xx.filter(s=>{const r=t>=s.innerKm&&t<=s.outerKm,o=(s.toDeg-s.fromDeg+360)%360,a=(e-s.fromDeg+360)%360;return r&&a<=o});if(n.length)return n.find(s=>s.outerKm-s.innerKm>8)??n[0]}const un=(i,t,e)=>{const n=yn.clamp((e-i)/(t-i||1e-6),0,1);return n*n*(3-2*n)},lh=(i,t)=>Math.exp(-(i*i)/(t*t));function Ye(i,t){const e=i/le,n=t/le;let s=0;const r=-36-.2*Math.max(0,n)+4*Math.sin(n*.09)+3*ks(n*.05,3.1,3,7),o=un(r,r-46,e);s+=Math.pow(o,1.15)*44;const a=un(-30,-66,n)*un(-18,-60,e*-1+30);s+=Math.pow(yn.clamp(a+o-o*a,0,1),1.2)*30;const l=e-(25.2-.1*n+2.2*Math.sin(n*.11));s+=lh(l,4.2)*8.5*un(6,14,e);const c=un(24,52,e-.35*n);s+=c*(2.2+1.8*ks(e*.09,n*.09,3,21));const h=lh(e+34+.5*(n-20),9)*un(6,24,n)*9;s+=h;const u=ks(e*.16,n*.16,4,101)-.5;s+=u*(.15+Math.min(s,40)*.22);const d=ks(e*.055,n*.055,3,55);return s+=Math.pow(d,2)*Math.min(s,34)*.22,Math.max(-.6,s)}const jx=new bt("#74854a"),Zx=new bt("#7d8a4e"),$x=new bt("#8f8c86"),Jx=new bt("#6f7360"),Qx=new bt("#42603c"),tv=new bt("#2f4a30"),ev=new bt("#6c6660"),nv=new bt("#eef4f8"),iv=[.9,.95,.9,.84,.66,.26],sv=Du.map(i=>i.bearingDeg),rv=Lu.map(i=>{const t=lr(i.lat,i.lon);return{x:t.x,z:t.z,r:i.radiusKm*le*2.1,w:i.density}});function cr(i,t){const e=Math.hypot(i,t)/le;let n=iv[us(e).index];e>$e.innerKm-.5&&e<$e.outerKm+.5&&(n*=.3),e>$e.outerKm&&(n*=Math.max(.16,1-(e-$e.outerKm)/20));for(const s of rv){const r=i-s.x,o=t-s.z;if(Math.abs(r)>s.r||Math.abs(o)>s.r)continue;const a=1-Math.min(1,Math.hypot(r,o)/s.r);n=Math.max(n,a*a*s.w)}if(e>4){const s=(Math.atan2(i,-t)*180/Math.PI+360)%360;let r=999;for(const a of sv){const l=Math.abs((s-a+540)%360-180);l<r&&(r=l)}const o=e*Math.sin(r*Math.PI/180);o<1.2&&(n=Math.max(n,.8*(1-o/1.2)*Math.min(1,Math.max(.25,1-(e-14)/30))))}return Math.min(1,n)}function ov(i,t,e,n){const s=t/le,r=e/le,o=Ut(Math.round(s*3),Math.round(r*3),9);n.copy(Zx).lerp(jx,o*.6);const a=cr(t,e)*un(3,1.2,i);if(a>.04&&n.lerp($x,a*(.68+o*.26)),i>.4&&n.lerp(Jx,un(.4,2.4,i)*.35),i>1.2&&n.lerp(Qx,un(1.2,6,i)*.85),i>7&&n.lerp(tv,un(7,16,i)*.7),i>14&&n.lerp(ev,un(14,30,i)*.9),i>30){const c=30+Ut(Math.round(s*1.7),Math.round(r*1.7),71)*12;n.lerp(nv,un(c,c+8,i));const h=.82+.18*Ut(Math.round(s*2.3),Math.round(r*2.3),33);n.multiplyScalar(h)}}function av(i,t=2900,e=512){const n=new Ts(t,t,e,e);n.rotateX(-Math.PI/2);const s=n.getAttribute("position"),r=new Float32Array(s.count*3),o=new Float32Array(s.count),a=new bt;for(let h=0;h<s.count;h++){const u=s.getX(h),d=s.getZ(h),f=Ye(u,d);s.setY(h,f),ov(f,u,d,a),r[h*3]=a.r,r[h*3+1]=a.g,r[h*3+2]=a.b,o[h]=cr(u,d)*un(3,1.2,f)}n.setAttribute("color",new Fe(r,3)),n.setAttribute("aUrban",new Fe(o,1)),n.computeVertexNormals();const l=new nn({vertexColors:!0,roughness:.96,metalness:0,dithering:!0});lv(l);const c=new Bt(n,l);return c.receiveShadow=!0,c.name="terrain",i.add(c),c}function lv(i){i.onBeforeCompile=t=>{t.uniforms.uNight=Zt.uNight,t.uniforms.uMist=Zt.uMist,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aUrban;
varying float vUrban;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vUrban = aUrban;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform float uMist;
varying float vUrban;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         // 街灯照亮的从来不只是路面：巷子、广场、树冠之间都摊着一层散光，
         // 把街区底板之间的缝连成一片。卫星夜视图里那团不散的暖光就是这么来的。
         totalEmissiveRadiance += vec3(1.0, 0.52, 0.20) * uNight * vUrban * vUrban * 0.18;`).replace("#include <color_fragment>",`#include <color_fragment>
         diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.42,0.5,0.68), uNight*0.55);
         diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62,0.68,0.74), uMist*0.28);`)},i.customProgramCacheKey=()=>"cd-terrain"}function cv(i,t){const e=i.radiusKm*le,n=Math.max(64,Math.round(2*Math.PI*e/2.2)),s=[];for(let o=0;o<n;o++){const a=o/n*360;s.push(qx(i,a))}return vs(i.name,s,!0,"ring",{widthM:i.widthM,ringIndex:t,elevated:i.elevated})}function hv(i){const t=i.axis?0:1.2,e=i.lateralKm?i.lateralKm*le:0,n=Rs(1,i.bearingDeg),s={x:-n.z,z:n.x},r=[],o=1.6,a=i.lengthKm*le;for(let l=t*le;l<=a;l+=o)r.push({x:n.x*l+s.x*e,z:n.z*l+s.z*e});return vs(i.name,r,!1,"radial",{widthM:i.widthM})}function vs(i,t,e,n,s={}){let r=0;for(let o=1;o<t.length;o++)r+=Math.hypot(t[o].x-t[o-1].x,t[o].z-t[o-1].z);if(e){const o=t[t.length-1];r+=Math.hypot(o.x-t[0].x,o.z-t[0].z)}return{name:i,pts:t,ys:t.map(o=>Ye(o.x,o.z)),lengthUnits:r,closed:e,kind:n,...s}}const il=$n.map((i,t)=>cv(i,t)),sl=Du.map(hv),zl=Vx.map(i=>vs(i.name,Cu(i.latLon,12,1.6),!1,"river",{widthM:i.widthM})),uv=Kx.map(i=>{if(i.ringKm){const t=i.ringKm*le,e=Math.max(64,Math.round(2*Math.PI*t/2.4)),n=[];for(let s=0;s<e;s++)n.push(Rs(i.ringKm,s/e*360));return vs(i.name,n,!0,"metro",{color:i.color,express:i.express,stations:i.stations})}return vs(i.name,Cu(i.latLon??[],10,2),!1,"metro",{color:i.color,express:i.express,stations:i.stations})});(()=>{const i=($e.innerKm+$e.outerKm)/2,t=260,e=[];for(let n=0;n<t;n++)e.push(Rs(i,n/t*360));return vs($e.label,e,!0,"greenway")})();function Uu(i,t,e,n,s,r,o){const a=lr(t,e),l=n*le,c=l*s,h=(r-90)*Math.PI/180,u=[],d=48;for(let f=0;f<d;f++){const g=f/d*Math.PI*2,_=Math.cos(g)*c,m=Math.sin(g)*l;u.push({x:a.x+_*Math.cos(h)-m*Math.sin(h),z:a.z+_*Math.sin(h)+m*Math.cos(h)})}return{name:i,center:a,a:c,b:l,rot:h,ring:Dx(u),kind:o}}const Ol=Gx.map(i=>Uu(i.name,i.lat,i.lon,i.radiusKm,i.elongate??1,i.bearing??90)),rl=Wx.filter(i=>i.kind!=="ridge").map(i=>Uu(i.name,i.lat,i.lon,i.radiusKm,i.elongate??1,i.bearing??90,i.kind)),Ms=Hx.map(i=>{const t=Yx(i);return{...i,p:t,distKm:ar(t),bearingDeg:Math.atan2(t.x,-t.z)*180/Math.PI}}),dv=Lu.map(i=>({name:i.name,p:lr(i.lat,i.lon),radius:i.radiusKm*le,peakM:i.peakM,density:i.density}));function fo(i,t=0){const e=i.pts.length;return n=>{const s=Math.min(e-1,Math.max(0,Math.round(n*(e-1))));return i.ys[s]+t}}function ol(i){return i.elevated?.1:0}const al={core:"城市原点",tower:"超高层",culture:"历史文化",park:"公园生态",transport:"交通枢纽",edu:"高校园区",newcity:"天府新区",nature:"山水远景"},ch={terrain:"地形（龙门山—龙泉山）",green:"绿地 · 环城生态公园",water:"水系（锦江—府河—湖）",roads:"路网（环 + 放射）",traffic:"环线车流",buildings:"建筑（实例化）",landmarks:"地标",metro:"轨道交通",labels:"地名标注"},Xr={sandbox:"沙盘俯瞰",panorama:"贴地漫游",map:"正射地图"},zs={clear:"晴",mist:"雾",rain:"雨",snow:"雪"};function Bl(i){const t=[["坐标",`${i.lat.toFixed(4)}°N，${i.lon.toFixed(4)}°E`],["距天府广场",`${i.distKm.toFixed(2)} km · 方位 ${((i.bearingDeg+360)%360).toFixed(0)}°`]];return i.heightM&&t.push(["建成高度",`${i.heightM} m`]),i.tag&&t.push(["说明",i.tag]),{kind:al[i.category],title:i.name,body:i.blurb,facts:t}}function kt(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!==void 0&&(n.textContent=e),n}function ns(i,...t){const e=kt("section","sec");return e.append(kt("h3","sec-title",i),...t),e}function Qo(i,t,e){const n=kt("div","chips"),s=[];for(const[r,o]of i){const a=kt("button","chip",o);a.type="button",a.addEventListener("click",()=>e(r)),s.push([r,a]),n.append(a)}return{el:n,sync:()=>s.forEach(([r,o])=>o.classList.toggle("is-on",t(r)))}}function fv(i,t){const e=kt("div","panel"),n=[],s=kt("header","panel-head");s.append(kt("h1","panel-title","成都 · 3D 城市沙盘"),kt("p","panel-sub","环 + 放射路网 · 程序化生成 · 1 场景单位 = 100 m"));const r=Qo([["sandbox",Xr.sandbox],["panorama",Xr.panorama],["map",Xr.map]],ct=>i.state.view===ct,ct=>{i.set({view:ct}),t.setView(ct)}),o=Qo([["high","高"],["medium","中"],["low","低"]],ct=>i.state.quality===ct,ct=>{i.set({quality:ct}),t.setQuality(ct)});n.push(r.sync,o.sync);const a=kt("div","stack");a.append(kt("span","row-label","相机"),r.el,kt("span","row-label","画质（改建筑数量与阴影）"),o.el);const l=kt("span","mono"),c=kt("button","btn","暂停");c.type="button";const h=(ct,gt)=>{const O=kt("button","chip",gt);return O.type="button",O.addEventListener("click",()=>i.set({speed:i.state.speed>0?0:ct})),O},u=kt("input","slider");u.type="range",u.min="0",u.max="24",u.step="0.05",u.addEventListener("input",()=>i.set({hour:Number(u.value)}));const d=kt("div","chips"),f=kt("div","chips");for(const[ct,gt]of[[.12,"慢"],[.35,"常速"],[1.2,"快"],[4,"飞速"]])d.append(h(ct,gt));for(const ct of zx){const gt=kt("button","chip",`${ct.label} ${Qr(ct.hour)}`);gt.type="button",gt.addEventListener("click",()=>i.set({hour:ct.hour})),f.append(gt)}const g=kt("div","stack"),_=kt("div","row");_.append(kt("span","row-label","地方时"),l,c),g.append(_,u,d,f);const m=()=>{c.textContent=i.state.speed>0?"暂停":"播放";for(const[ct,gt]of Array.from(d.children).entries()){const O=[.12,.35,1.2,4][ct];gt.classList.toggle("is-on",i.state.speed===O)}for(const[ct,gt]of Array.from(f.children).entries()){const O=[6.6,12.4,18.7,22.6][ct];gt.classList.toggle("is-on",Math.abs(i.state.hour-O)<.03)}};n.push(m);const p=Qo([["clear",zs.clear],["mist",zs.mist],["rain",zs.rain],["snow",zs.snow]],ct=>i.state.weather===ct,ct=>i.set({weather:ct})),y=kt("span","mono"),S=kt("input","slider");S.type="range",S.min="0.05",S.max="0.95",S.step="0.05",S.addEventListener("input",()=>i.set({litRatio:Number(S.value)}));const x=kt("div","row");x.append(kt("span","row-label","夜间亮窗比例"),y),n.push(p.sync);const R=kt("div","stack");R.append(p.el,x,S);const T=kt("div","layers"),A=new Map;for(const ct of Object.keys(ch)){const gt=kt("label","layer"),O=document.createElement("input");O.type="checkbox",O.checked=i.state.layers[ct],O.addEventListener("change",()=>{i.setLayer(ct,O.checked),t.applyLayers(i.state.layers)}),A.set(ct,O),gt.append(O,kt("span",void 0,ch[ct])),T.append(gt)}const P=["一环内","一二环","二中环","中三环","三环—绕城","绕城外"],E=kt("div","chips"),M=[],D=[[null,"全部"],...gi.map((ct,gt)=>[ct,P[gt]])];for(const[ct,gt]of D){const O=kt("button","chip",gt);O.type="button",O.title=ct??"不过滤圈层",O.addEventListener("click",()=>{i.set({band:ct}),t.setBand(ct)}),M.push([ct,O]),E.append(O)}const F=kt("input","search");F.type="search",F.placeholder=`搜索 ${Ms.length} 个地标：双子塔、都江堰…`;const k=kt("div","poi-list"),q=new Map,G=()=>{const ct=F.value.trim();k.textContent="",q.clear();for(const gt of Ms){if(ct&&!gt.name.includes(ct)&&!gt.blurb.includes(ct)&&al[gt.category].includes(ct)===!1)continue;const O=kt("button","poi");O.type="button";const tt=gt.heightM&&gt.heightM>0?`${Math.round(gt.heightM)} m`:`距心 ${gt.distKm.toFixed(1)} km`;O.append(kt("span","poi-name",gt.name),kt("span","poi-meta",`${al[gt.category]} · ${tt}`)),O.addEventListener("click",()=>{i.set({poiId:gt.id}),t.flyTo(gt)}),q.set(gt.id,O),k.append(O)}};F.addEventListener("input",G),G();const X=kt("button","btn btn-wide","恢复默认视角与参数");X.type="button",X.addEventListener("click",()=>t.reset());const $=kt("div","panel-foot");$.append(X,kt("p","hint","拖拽旋转 · 滚轮缩放 · 右键平移 · 点击建筑看信息")),e.append(s,ns("视角",a),ns("昼夜循环",g),ns("天气 · 夜景",R),ns("图层",T),ns("圈层对比",E),ns("地标（点击飞入）",F,k),$);const V=kt("aside","info-card");V.hidden=!0;const dt=kt("div","hud"),xt=kt("div","hud-row"),Et=kt("div","hud-row hud-sub");dt.append(xt,Et);const Kt=()=>{u.value=String(i.state.hour),S.value=String(i.state.litRatio),l.textContent=Qr(i.state.hour),y.textContent=`${Math.round(i.state.litRatio*100)}%`;for(const[ct,gt]of A)gt.checked=i.state.layers[ct];for(const[ct,gt]of M)gt.classList.toggle("is-on",ct===i.state.band);for(const[ct,gt]of q)gt.classList.toggle("is-on",ct===i.state.poiId);for(const ct of n)ct()};i.subscribe(Kt);const ee=ct=>{V.textContent="",V.hidden=!1;const gt=kt("button","info-close","×");gt.type="button",gt.addEventListener("click",()=>{V.hidden=!0});const O=kt("dl","info-facts");for(const[tt,yt]of ct.facts)O.append(kt("dt",void 0,tt),kt("dd",void 0,yt));V.append(gt,kt("div","info-kind",ct.kind),kt("div","info-title",ct.title),kt("p","info-body",ct.body),O)};return{root:e,hud:dt,info:V,setStats(ct,gt,O,tt){const yt=i.state;xt.textContent=`${Qr(yt.hour)} · ${ct.toFixed(0)} FPS · ${(gt/1e3).toFixed(0)}k 三角面 · ${O} draw call`,Et.textContent=`${Xr[yt.view]} · ${zs[yt.weather]} · 建筑 ${tt.toLocaleString("zh-CN")} 栋 · 画质${yt.quality}`},showCard:ee,showPoi(ct){ee(Bl(ct))},hidePoi(){V.hidden=!0}}}function po(i,t={}){const e=!!t.closed,n=i.length,s=e?n+1:n,r=new Float32Array(s*2*3),o=new Float32Array(s*2*2),a=[];let l=0;const c=t.uvScale??1;for(let u=0;u<s;u++){const d=e?u%n:u,f=i[e?(d-1+n)%n:Math.max(d-1,0)],g=i[d],_=i[e?(d+1)%n:Math.min(d+1,n-1)];let m=_.x-f.x,p=_.z-f.z;const y=Math.hypot(m,p)||1;if(m/=y,p/=y,u>0){const P=e?i[(d-1+n)%n]:i[Math.max(d-1,0)];l+=Math.hypot(g.x-P.x,g.z-P.z)}const S=s>1?u/(s-1):0,x=(t.widthAt?t.widthAt(S):2)*.5,R=t.yAt?t.yAt(S):0,T=u*2;r[T*3]=g.x-p*x,r[T*3+1]=R,r[T*3+2]=g.z+m*x,r[(T+1)*3]=g.x+p*x,r[(T+1)*3+1]=R,r[(T+1)*3+2]=g.z-m*x;const A=l*c/10;o[T*2]=0,o[T*2+1]=A,o[(T+1)*2]=1,o[(T+1)*2+1]=A,u<s-1&&a.push(T,T+2,T+1,T+1,T+2,T+3)}const h=new Ue;return h.setAttribute("position",new Fe(r,3)),h.setAttribute("uv",new Fe(o,2)),h.setIndex(a),h.computeVertexNormals(),h.computeBoundingSphere(),h}const pv=100,re=i=>i/pv,Ht={plasterWarm:"#d8cfc0",plasterCool:"#c7cbd0",concrete:"#a9a6a0",brick:"#a8705a",oldRoof:"#4a4a52",glassDay:"#8fa6b8",glassCool:"#5c7f95",metal:"#8b9298",stone:"#b5ad9e",wood:"#8a6a45",white:"#eae7e1",red:"#b23a2e",gold:"#c8a15a",green:"#3f6b4a"},Nu=`
  varying vec3 vMeters;
  varying vec3 vFace;
  varying vec4 vDim;
  varying vec4 vWin;
  varying float vBand;
`,mv=`
  #ifdef CD_INSTANCED
    attribute vec4 aDim;
    attribute vec4 aWin;
    attribute float aBand;
  #else
    uniform vec4 uDim;
    uniform vec4 uWin;
  #endif
  ${Nu}
`,gv=`
  #ifdef CD_INSTANCED
    vMeters = position * aDim.xyz;
    vDim = aDim;
    vWin = aWin;
    vBand = aBand;
  #else
    vMeters = position;
    vDim = uDim;
    vWin = uWin;
    // 地标不参与圈层对比的压暗，始终作为可读的参照物。
    vBand = -2.0;
  #endif
  vFace = normal;
`,_v=`
  uniform float uBandSel;
  uniform float uLitGain;
  vec3 cdDiffuse;
  vec3 cdEmissive;
  float cdEmissiveStrength;

  float cdHash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void cdFacade(vec3 baseColor, float time, float night, float rain, float litRatio, vec3 glassTint) {
    vec3 an = abs(vFace);
    float isWall = step(an.y, 0.5);
    float alongX = step(0.5, an.x);
    float span = mix(vMeters.z, vMeters.x, alongX);
    float width = max(mix(vDim.z, vDim.x, alongX), 0.001);
    float height = max(vDim.y, 0.001);
    float kind = vWin.z;

    float floorH = kind < 0.5 ? 3.2 : (kind < 1.5 ? 3.9 : (kind < 2.5 ? 3.4 : 4.6));
    float bayW = kind < 0.5 ? 3.6 : (kind < 1.5 ? 3.1 : (kind < 2.5 ? 4.4 : 6.2));
    float floors = max(1.0, height / floorH);
    float bays = max(1.0, width / bayW);

    vec2 cell = vec2((span / width) * bays, (vMeters.y / height + 0.5) * floors);
    vec2 fid = floor(cell);
    vec2 f = fract(cell);

    float edge = smoothstep(0.0, 0.1, f.x) * smoothstep(1.0, 0.9, f.x) * smoothstep(0.0, 0.16, f.y) * smoothstep(1.0, 0.82, f.y);
    float glass = isWall * smoothstep(0.3, 0.7, edge);
    if (kind > 2.5) {
      // 工业厂房：只有顶层一排高窗。
      glass *= step(floors - 1.8, fid.y) * 0.85;
    }
    float balcony = isWall * (1.0 - step(0.5, kind)) * smoothstep(0.0, 0.18, f.y) * smoothstep(0.95, 0.72, f.y);

    float seed = vWin.y * 91.7 + floor(width * 10.0);
    float r = cdHash21(fid + vec2(seed, kind * 13.0));
    float r2 = cdHash21(fid * 1.7 + vec2(seed + 5.0, 3.0));
    float lit = clamp(litRatio * uLitGain, 0.0, 1.0);
    float on = step(1.0 - lit * (0.5 + 0.5 * r), r2);
    float flicker = 0.85 + 0.15 * sin(time * 0.5 + r * 62.0);

    vec3 wall = baseColor * (0.8 + 0.32 * r2);
    vec3 glassCol = mix(baseColor * 0.42, glassTint, 0.7);
    cdDiffuse = mix(wall, glassCol, glass) * (1.0 - balcony * 0.22);

    vec3 warm = vec3(1.0, 0.76, 0.44);
    vec3 cool = vec3(0.62, 0.8, 1.0);
    cdEmissive = mix(warm, cool, step(0.66, r));
    cdEmissiveStrength = glass * on * flicker * night * (1.0 - rain * 0.2) * mix(0.5, 1.0, step(0.5, kind));

    // 圈层对比：把不属于选中分区的建筑压成灰底，选中圈层的天际线一眼可读。
    if (uBandSel >= 0.0 && vBand > -1.5 && abs(vBand - uBandSel) > 0.5) {
      float g = dot(cdDiffuse, vec3(0.33333)) * 0.38;
      cdDiffuse = vec3(g);
      cdEmissiveStrength *= 0.05;
    }
  }
`;function Fu(i,t,e,n){const s=i.litRatio??.5,r=i.kind??0,o=new bt(i.glassTint??Ht.glassDay),a=new nn({color:new bt(i.base),roughness:i.roughness??.72,metalness:i.metalness??.05});t&&(a.defines={CD_INSTANCED:""});const l=e??new we(20,60,20,0),c=new we(0,r,r,0);return a.onBeforeCompile=h=>{h.uniforms.uTime=Zt.uTime,h.uniforms.uNight=Zt.uNight,h.uniforms.uRain=Zt.uRain,h.uniforms.uBandSel=Zt.uBandSel,h.uniforms.uLitGain=Zt.uLitGain,h.uniforms.uLitRatio={value:s},h.uniforms.uGlassTint={value:o},t||(h.uniforms.uDim={value:l},h.uniforms.uWin={value:c}),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
${mv}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${gv}`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uNight;
uniform float uRain;
uniform float uLitRatio;
uniform vec3 uGlassTint;
${Nu}
${_v}`).replace("#include <color_fragment>",`#include <color_fragment>
  cdFacade(diffuseColor.rgb, uTime, uNight, uRain, uLitRatio, uGlassTint);
  diffuseColor.rgb = cdDiffuse;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += cdEmissive * cdEmissiveStrength;`)},a.customProgramCacheKey=()=>`cd-facade-${t?"i":"s"}-${r}-${o.getHexString()}-${s*100|0}`,t||(a.userData.dim=l,a.userData.win=c),a}function Cs(i){const t=i.dims?new we(i.dims[0],i.dims[1],i.dims[2],0):void 0;return Fu(i,!1,t)}function xv(i){return Fu(i,!0)}function oe(i,t,e,n,s={}){const r=new pn(i,t,e),o=Cs({...n,dims:[i,t,e]}),a=new Bt(r,o);return a.position.set(s.x??0,s.y??t/2,s.z??0),a.rotation.y=s.rotY??0,a.castShadow=s.castShadow??!0,a.receiveShadow=!0,a}function st(i,t,e,n,s={}){const r=new Bt(new pn(i,t,e),n);return r.position.set(s.x??0,s.y??t/2,s.z??0),r.rotation.y=s.rotY??0,r.castShadow=s.shadow??!0,r.receiveShadow=!0,r}function ce(i,t,e,n,s,r={}){const o=new Bt(new ii(i,t,e,Math.max(3,n)),s);return o.position.set(r.x??0,r.y??e/2,r.z??0),o.castShadow=r.shadow??!0,o.receiveShadow=!0,o}function kl(i,t){const e=new qa(i,t);return e.setUsage(Nd),e}function vv(i){return kl(i,4)}function Mv(i){return kl(i,4)}function zu(i){return kl(i,1)}function yv(i){return zu(i)}const hh=new Map;function Y(i,t=.85,e=0){const n=`${i}|${t}|${e}`,s=hh.get(n);if(s)return s;const r=new nn({color:i,roughness:t,metalness:e});return hh.set(n,r),r}function Sv(i,t=1){return new nn({color:i,emissive:i,emissiveIntensity:t,roughness:.6,metalness:0})}const uh="#2f3237",bv="#3b3d40";function dh(i,t,e){const n=new nn({color:i,roughness:.88,metalness:.02});return n.onBeforeCompile=s=>{s.uniforms.uMarkings={value:t==="none"?0:t==="dash"?1:2},s.uniforms.uLanes={value:e},s.uniforms.uNight=Zt.uNight,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vUvR;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vUvR = uv;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uMarkings;
uniform float uLanes;
uniform float uNight;
varying vec2 vUvR;`).replace("#include <map_fragment>",`#include <map_fragment>
         float lane = fract(vUvR.x * uLanes);
         float atEdge = 1.0 - smoothstep(0.0, 0.035, min(lane, 1.0 - lane));
         float dash = step(0.45, fract(vUvR.y * 60.0));
         float line = uMarkings < 0.5 ? 0.0 : atEdge * (uMarkings < 1.5 ? dash : 1.0);
         diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.84, 0.85, 0.80), clamp(line, 0.0, 1.0) * 0.8);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         // 路灯照亮的是一条走廊，不只是标线：夜里路网本身就是成都最清楚的结构线。
         totalEmissiveRadiance += vec3(1.0, 0.74, 0.45) * uNight * (0.42 + 0.55 * clamp(line, 0.0, 1.0));`)},n.customProgramCacheKey=()=>`cd-road-${t}`,n}function fh(i,t,e){return po(i.pts,{widthAt:()=>t,yAt:fo(i,e),closed:i.closed,uvScale:1})}function Ev(i,t,e,n){const s=i.pts,r=s.length,o=i.lengthUnits/(i.closed?r:Math.max(1,r-1)),a=Math.max(1,Math.round(12/Math.max(.001,o))),l=Math.max(1,Math.floor(r/a)),c=new pn(1,1,1),h=new On(c,Y("#8d8b86",.9),l);h.castShadow=!0,h.frustumCulled=!1,h.name=`piers-${i.name}`;const u=new Pe,d=ol(i);for(let f=0;f<l;f++){const g=f*a%r,_=s[g];u.position.set(_.x,i.ys[g]+d/2,_.z),u.rotation.set(0,g/r*Math.PI*2,0),u.scale.set(n*.55,d,n*.55),u.updateMatrix(),h.setMatrixAt(f,u.matrix)}h.instanceMatrix.needsUpdate=!0,t.add(h),e.push(h,c)}function ph(i,t="high"){const e=new dn;e.name="roads";const n=[];for(const f of il){const g=re(f.widthM??24),_=ol(f),m=dh(f.ringIndex!==void 0&&f.ringIndex<4?bv:uh,f.elevated?"solid":"dash",Math.max(2,Math.round((f.widthM??24)/3.6))),p=fh(f,g,_+.004),y=new Bt(p,m);y.receiveShadow=!0,e.add(y),n.push(p,m),_>0&&t!=="low"&&Ev(f,e,n,g)}for(const f of sl){const g=re(f.widthM??30),_=dh(uh,"dash",Math.max(2,Math.round((f.widthM??30)/3.6))),m=fh(f,g,.004),p=new Bt(m,_);p.receiveShadow=!0,e.add(p),n.push(m,_)}const s=[...il,...sl],r=t==="high"?900:t==="medium"?520:240,o=[];for(let f=0;f<r;f++){const g=s[Ut(f,3.7,13)*s.length|0];g.pts.length&&o.push({path:g,offset:Ut(f,9.1,5),speed:.01+Ut(f,2.3,7)*.018,dir:Ut(f,5.5,11)>.5?1:-1})}const a=new pn(1,1,1),l=new nn({color:"#1d2025",roughness:.5,metalness:.3});l.onBeforeCompile=f=>{f.uniforms.uNight=Zt.uNight,f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         totalEmissiveRadiance += vec3(1.0, 0.88, 0.66) * uNight * 0.85;`)},l.customProgramCacheKey=()=>"cd-car";const c=new On(a,l,Math.max(1,o.length));c.frustumCulled=!1,c.name="traffic",e.add(c),n.push(a,l,c);const h=new Pe,u=(f,g)=>{const _=f.path.pts,m=_.length,p=((f.offset+g*f.speed*f.dir)%1+1)%1,y=Math.min(m-1,Math.max(0,Math.floor(p*m))),S=f.dir>0?(y+1)%m:(y-1+m)%m,x=_[y],R=_[S],T=re((f.path.widthM??24)/2)*.5*f.dir,A=R.x-x.x,P=R.z-x.z,E=Math.hypot(A,P)||1;return h.position.set(x.x-P/E*T,f.path.ys[y]+ol(f.path)+.012,x.z+A/E*T),h.rotation.set(0,Math.atan2(f.dir>0?A:-A,f.dir>0?P:-P),0),h.scale.set(re(4.2),re(1.7),re(1.9)),h.updateMatrix(),h.matrix};for(let f=0;f<o.length;f++)c.setMatrixAt(f,u(o[f],0));c.instanceMatrix.needsUpdate=!0;let d=0;return i.add(e),{group:e,update(f){d+=f;for(let g=0;g<o.length;g++)c.setMatrixAt(g,u(o[g],d));c.instanceMatrix.needsUpdate=!0},dispose(){i.remove(e);for(const f of n)f.dispose()}}}const Ou=`
  uniform float uTime;
  uniform float uNight;
  uniform float uRain;
  varying vec2 vUvW;

  float cdH(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float cdN(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(cdH(i), cdH(i + vec2(1.0, 0.0)), f.x), mix(cdH(i + vec2(0.0, 1.0)), cdH(i + vec2(1.0, 1.0)), f.x), f.y);
  }
`;function mh(i){const t=new nn({color:i>40?"#42594c":"#4f6149",roughness:.42,metalness:.12});return t.onBeforeCompile=e=>{e.uniforms.uTime=Zt.uTime,e.uniforms.uNight=Zt.uNight,e.uniforms.uRain=Zt.uRain,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vUvW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vUvW = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
${Ou}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
         float flow = vUvW.y * 90.0 - uTime * 0.55;
         float n1 = cdN(vec2(vUvW.x * 7.0, flow));
         float n2 = cdN(vec2(vUvW.x * 21.0 + 4.0, flow * 1.7));
         float chop = (n1 * 0.65 + n2 * 0.35);
         normal = normalize(normal + vec3((chop - 0.5) * 0.55, 0.0, (n2 - 0.5) * 0.35));
         float ripple = uRain * cdN(vec2(vUvW.x * 40.0 + uTime * 2.0, vUvW.y * 400.0 - uTime * 3.0));
         normal = normalize(normal + vec3(ripple * 0.5));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         float glimmer = pow(max(0.0, n2 - 0.45) * 2.0, 2.0);
         totalEmissiveRadiance += vec3(0.55, 0.72, 0.9) * glimmer * 0.06;
         totalEmissiveRadiance += vec3(1.0, 0.72, 0.36) * uNight * smoothstep(0.35, 0.95, n1) * 0.16;`)},t.customProgramCacheKey=()=>"cd-river",t}function Tv(){const i=new nn({color:"#3f5a52",roughness:.3,metalness:.16});return i.onBeforeCompile=t=>{t.uniforms.uTime=Zt.uTime,t.uniforms.uNight=Zt.uNight,t.uniforms.uRain=Zt.uRain,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vUvW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vUvW = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Ou}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
         float w = cdN(vUvW * 60.0 + vec2(uTime * 0.08, uTime * 0.05));
         float w2 = cdN(vUvW * 240.0 - vec2(uTime * 0.12, 0.0));
         normal = normalize(normal + vec3((w - 0.5) * 0.3 + uRain * (w2 - 0.5) * 0.8, 0.0, (w2 - 0.5) * 0.25));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         totalEmissiveRadiance += vec3(0.4, 0.6, 0.8) * uNight * pow(max(w - 0.5, 0.0), 2.0) * 0.5;`)},i.customProgramCacheKey=()=>"cd-lake",i}function wv(i){const t=new dn;t.name="water";const e=[],n=mh(50),s=mh(24);e.push(n,s);for(const o of zl){if(!o.pts.length)continue;const a=re(o.widthM??30),l=po(o.pts,{widthAt:()=>a,yAt:fo(o,-.012),closed:!1,uvScale:1}),c=new Bt(l,(o.widthM??30)>=40?n:s);c.receiveShadow=!0,c.name=`river-${o.name}`,t.add(c),e.push(l)}const r=Tv();e.push(r);for(const o of Ol){const a=o.ring,l=a.length-1,c=l+1,h=new Float32Array(c*3),u=new Float32Array(c*2),d=[],f=o.center.x,g=o.center.z;h[0]=f,h[1]=Ye(f,g)-.014,h[2]=g,u[0]=.5,u[1]=.5;for(let p=0;p<l;p++){const y=a[p];h[p*3+3]=y.x,h[p*3+4]=Ye(y.x,y.z)-.014,h[p*3+5]=y.z,u[p*2+2]=.5+(y.x-f)/(2*o.a),u[p*2+3]=.5+(y.z-g)/(2*o.b),d.push(0,p===l-1?1:p+2,p+1)}const _=new Ue;_.setAttribute("position",new Fe(h,3)),_.setAttribute("uv",new Fe(u,2)),_.setIndex(d),_.computeVertexNormals();const m=new Bt(_,r);m.receiveShadow=!0,m.name=`lake-${o.name}`,t.add(m),e.push(_)}return i.add(t),{group:t,dispose(){i.remove(t);for(const o of e)o.dispose()}}}function ta(i){const t=new nn({color:i,roughness:.95});return t.onBeforeCompile=e=>{e.uniforms.uNight=Zt.uNight,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
         vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
varying vec3 vWorldPos;`).replace("#include <map_fragment>",`#include <map_fragment>
         float turf = fract(sin(dot(floor(vWorldPos.xz / 3.0), vec2(12.9898, 78.233))) * 43758.5453);
         diffuseColor.rgb *= 0.82 + 0.36 * turf;
         diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.4, 0.5, 0.66), uNight * 0.5);`)},t.customProgramCacheKey=()=>`cd-turf-${i}`,t}function Av(i,t){const e=i.ring,n=e.length-1,s=new Float32Array((n+1)*3),r=i.center.x,o=i.center.z;s[0]=r,s[1]=Ye(r,o)+t,s[2]=o;for(let c=0;c<n;c++){const h=e[c];s[c*3+3]=h.x,s[c*3+4]=Ye(h.x,h.z)+t,s[c*3+5]=h.z}const a=[];for(let c=0;c<n;c++)a.push(0,c===n-1?1:c+2,c+1);const l=new Ue;return l.setAttribute("position",new Fe(s,3)),l.setIndex(a),l.computeVertexNormals(),l}function gh(i,t,e=220,n=.012){const s=new Float32Array(e*2*3),r=[];for(let a=0;a<e;a++){const l=a/e*Math.PI*2,c=Math.sin(l),h=-Math.cos(l),u=1+Math.max(0,Math.cos(l))*.1,d=c*i*le*u,f=h*i*le*u,g=c*t*le*u,_=h*t*le*u;s[a*6]=d,s[a*6+1]=Ye(d,f)+n,s[a*6+2]=f,s[a*6+3]=g,s[a*6+4]=Ye(g,_)+n,s[a*6+5]=_;const m=a*2,p=(a+1)%e*2;r.push(m,p,m+1,m+1,p,p+1)}const o=new Ue;return o.setAttribute("position",new Fe(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function _h(i,t,e){for(let n=0;n<t;n++){const s=Ut(n*1.7,i.center.x,3)*Math.PI*2,r=Math.sqrt(Ut(n,i.center.z,5)),o=Math.cos(s)*i.a*r*.94,a=Math.sin(s)*i.b*r*.94,l=i.center.x+o*Math.cos(i.rot)-a*Math.sin(i.rot),c=i.center.z+o*Math.sin(i.rot)+a*Math.cos(i.rot);e.push({x:l,z:c,h:6+Ut(n,7.3,9)*9,r:2.6+Ut(n,2.1,11)*2.4,tint:Ut(n,4.4,13)})}}function Rv(i,t,e,n){const s=Math.max(1,Math.round(t/2.2));for(let r=0;r<i.length;r+=s){const o=i[r],a=i[Math.min(i.length-1,r+1)],l=a.x-o.x,c=a.z-o.z,h=Math.hypot(l,c)||1,u=-c/h*e,d=l/h*e;for(const f of[-1,1]){const g=o.x+u*f,_=o.z+d*f;n.push({x:g,z:_,h:5+Ut(g,_,17)*6,r:1.8+Ut(_,g,19)*1.8,tint:Ut(g+_,3,23)})}}}function xh(i,t="high"){const e=new dn;e.name="green";const n=[],s=ta("#4f7a44"),r=ta("#4a6f3e"),o=ta("#8a9250");n.push(s,r,o);for(const m of rl){const p=Av(m,-.006),y=new Bt(p,m.kind==="farm"?o:s);y.receiveShadow=!0,y.name=`park-${m.name}`,e.add(y),n.push(p)}const a=gh($e.innerKm,$e.outerKm,300),l=new Bt(a,r);l.receiveShadow=!0,l.name="green-belt",e.add(l),n.push(a);const c=$n.find(m=>m.name==="三环路")??$n[4],h=gh(c.radiusKm+.06,c.radiusKm+.31,220,.03),u=new Bt(h,Y("#7d8a68",.82));u.receiveShadow=!0,u.name="panda-greenway",e.add(u),n.push(h);const d=[],f=t==="high"?120:t==="medium"?70:35;for(const m of rl)_h(m,m.b>20?f*2:f,d);for(const m of Ol)_h(m,Math.round(f/2),d);if(t!=="low")for(const m of zl.slice(0,5))Rv(m.pts,34,re((m.widthM??30)/2+14),d);const g=t==="high"?900:t==="medium"?480:220,_=($e.innerKm+$e.outerKm)/2;for(let m=0;m<g;m++){const y=m/g*360*Math.PI/180,S=(_+(Ut(m,3.3,7)-.5)*2.4)*le,x=Math.sin(y)*S,R=-Math.cos(y)*S;d.push({x,z:R,h:6+Ut(m,5,9)*7,r:2.4+Ut(m,6,11)*2,tint:Ut(m,8,13)})}if(d.length){const m=new Pl(1,0),p=new nn({color:"#3d6b3a",roughness:.95,flatShading:!0});p.onBeforeCompile=A=>{A.uniforms.uNight=Zt.uNight,A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
           diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.38, 0.46, 0.62), uNight * 0.6);`)},p.customProgramCacheKey=()=>"cd-canopy";const y=new On(m,p,d.length);y.castShadow=t!=="low",y.receiveShadow=!0,y.frustumCulled=!1,y.name="trees";const S=new ii(re(.4),re(.6),1,5),x=new On(S,Y("#5a4634",.95),d.length);x.frustumCulled=!1,x.name="trunks";const R=new Pe,T=new bt;d.forEach((A,P)=>{const E=Ye(A.x,A.z);R.position.set(A.x,E+re(A.h)+re(A.r)*.6,A.z),R.rotation.set(0,A.tint*6.28,0),R.scale.set(re(A.r),re(A.r*1.2),re(A.r)),R.updateMatrix(),y.setMatrixAt(P,R.matrix),T.setHSL(.26+A.tint*.05,.3+A.tint*.16,.2+A.tint*.13),y.setColorAt(P,T),R.position.set(A.x,E+re(A.h)/2,A.z),R.rotation.set(0,0,0),R.scale.set(1,re(A.h),1),R.updateMatrix(),x.setMatrixAt(P,R.matrix)}),y.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,y.instanceColor&&(y.instanceColor.needsUpdate=!0),e.add(y,x),n.push(m,p,S,y,x)}return i.add(e),{group:e,dispose(){i.remove(e);for(const m of n)m.dispose()}}}function vh(i){const t=new bt(i),e=new nn({color:t,roughness:.55,metalness:.1});return e.onBeforeCompile=n=>{n.uniforms.uNight=Zt.uNight,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         totalEmissiveRadiance += diffuseColor.rgb * (0.14 + uNight * 0.8);`)},e.customProgramCacheKey=()=>`cd-metro-${t.getHexString()}`,e}function Cv(i,t){const e=i.pts.length,n=[];if(e<2||t<=0)return n;const s=Math.max(1,Math.round((e-1)/t));for(let r=0;r<e;r+=s){const o=i.pts[r],a=r/(e-1);n.push(new L(o.x,fo(i,.05)(a),o.z))}return n}function Pv(i){const t=new dn;t.name="metro";const e=[],n=[];for(const s of uv){const r=po(s.pts,{widthAt:()=>re(s.express?9:6.5),yAt:fo(s,.028),closed:s.closed,uvScale:1}),o=new Bt(r,vh(s.color??"#8a8f96"));o.receiveShadow=!0,o.name=`metro-${s.name}`,t.add(o),e.push(r);const a=s.stations??Math.max(6,Math.round(s.lengthUnits/12));for(const l of Cv(s,a))n.push(l)}if(n.length){const s=new or(re(14),8,6),r=vh("#9aa1a8"),o=new On(s,r,n.length);o.frustumCulled=!1,o.name="metro-stations";const a=new Pe;n.forEach((l,c)=>{a.position.copy(l),a.scale.set(1,.55,1),a.updateMatrix(),o.setMatrixAt(c,a.matrix)}),o.instanceMatrix.needsUpdate=!0,t.add(o),e.push(s,o)}return i.add(t),{group:t,dispose(){i.remove(t);for(const s of e)s.dispose()}}}const Zn=3e3,cn=2,Tn=Math.round(Zn/cn),Mh=60,Dv=14,yh=i=>i*cn-Zn/2+cn/2,Sh=i=>i*cn-Zn/2+cn/2;class ea{data;constructor(){this.data=new Float32Array(Tn*Tn),this.data.fill(Mh)}stamp(t,e,n){const s=n+Dv,r=Math.max(0,Math.floor((t-s+Zn/2)/cn)),o=Math.min(Tn-1,Math.floor((t+s+Zn/2)/cn)),a=Math.max(0,Math.floor((e-s+Zn/2)/cn)),l=Math.min(Tn-1,Math.floor((e+s+Zn/2)/cn));for(let c=a;c<=l;c++){const h=Sh(c)-e,u=c*Tn;for(let d=r;d<=o;d++){const f=yh(d)-t,g=Math.sqrt(f*f+h*h)-n,_=u+d;g<this.data[_]&&(this.data[_]=g)}}}path(t,e){for(const n of t){const s=e(n),r=n.pts,o=r.length,a=n.closed?o:o-1;for(let l=0;l<a;l++){const c=r[(l+1)%o],h=r[l],u=Math.hypot(c.x-h.x,c.z-h.z),d=Math.max(1,Math.ceil(u/(cn*.5)));for(let f=0;f<d;f++){const g=f/d;this.stamp(h.x+(c.x-h.x)*g,h.z+(c.z-h.z)*g,s)}}}}disk(t,e,n,s=1,r=0){const o=n,a=n*s,l=Math.max(0,a-o),c=Math.max(1,Math.ceil(l/(cn*.6)));for(let h=0;h<=c;h++){const u=c===0?0:(h/c-.5)*2*l;this.stamp(t+Math.cos(r)*u,e+Math.sin(r)*u,o)}}ring(t,e,n=[]){const s=(t+e)/2,r=(e-t)/2;for(let o=0;o<Tn;o++){const a=Sh(o);for(let l=0;l<Tn;l++){const c=yh(l),h=Math.hypot(c,a),u=o*Tn+l;let d=h<t?t-h:h-e;if(n.length){const f=(Math.atan2(c,-a)*180/Math.PI+360)%360;for(const[g,_]of n){const m=(_-g+360)%360;if((f-g+360)%360<=m){d=Math.abs(h-s)-Math.max(2.4,r*.16);break}}}d<this.data[u]&&(this.data[u]=d)}}}sample(t,e){const n=Math.floor((t+Zn/2)/cn),s=Math.floor((e+Zn/2)/cn);return n<0||s<0||n>=Tn||s>=Tn?Mh:this.data[s*Tn+n]}}const Lv=[16,54,76,96,82,46],Iv=[.94,.9,.86,.8,.66,.24];class Uv{road=new ea;water=new ea;green=new ea;constructor(){this.road.path(il,t=>((t.widthM??24)/2+8)/100),this.road.path(sl,t=>((t.widthM??30)/2+6)/100),this.water.path(zl,t=>(t.widthM??30)/2/100);for(const t of Ol)this.water.disk(t.center.x,t.center.z,t.b,t.a/t.b,t.rot);for(const t of rl)this.green.disk(t.center.x,t.center.z,t.b,t.a/t.b,t.rot);this.green.ring($e.innerKm*le,$e.outerKm*le,[[165,200],[78,112],[240,300],[340,390],[128,150]])}roadProx(t,e){return this.road.sample(t,e)}blocked(t,e){return this.water.sample(t,e)<.05||this.green.sample(t,e)<.05||this.road.sample(t,e)<.02||Ye(t,e)>.7}heightM(t,e){const n=Math.hypot(t,e)/le,s=Lv[us(n).index];let r=0;for(const c of dv){const h=1-Math.min(1,Math.hypot(t-c.p.x,e-c.p.z)/c.radius);if(h<=0)continue;const u=h*h*c.peakM;u>r&&(r=u)}const o=this.roadProx(t,e),a=o<3?1+(3-o)*.12:1,l=ks(t*.02+5,e*.02+9,3,13);return Math.max(s,r)*a*(.55+l*.95)}density(t,e){const n=Math.hypot(t,e)/le;let s=Iv[us(n).index];n>$e.outerKm&&(s*=Math.max(.22,1-(n-$e.outerKm)/26));const r=Ut(Math.round(t*.5),Math.round(e*.5),21);return Math.max(0,Math.min(1,s*(.7+r*.6)))}classify(t,e){const n=Math.hypot(t,e)/le,s=us(n),r=this.heightM(t,e),o=this.density(t,e),a=Ut(Math.round(t),Math.round(e),31);let l;return s.index===0?l=a<.7?"hutong":"slab":s.index===5&&a<.4?l="village":r>120?l=a<.55?"tower":"office":a<.1?l="industrial":r>55?l=a<.5?"slab":"tower":l="slab",l==="hutong"?{heightM:Math.min(r,14),density:o,form:l,lit:.32}:l==="village"?{heightM:Math.min(r,24),density:o,form:l,lit:.25}:{heightM:r,density:o,form:l,lit:l==="office"||l==="tower"?.86:l==="slab"?.52:.22}}}let na=null;function Bu(){return na||(na=new Uv),na}const Nv={high:42e3,medium:24e3,low:12e3},Fv={high:46,medium:40,low:34},zv={high:.15,medium:.2,low:.26},Ov={hutong:{wRange:[12,26],dRange:[8,15],hScale:.5,hMin:5,hMax:13,kind:0,colors:[Ht.plasterWarm,"#cfc4b2",Ht.brick,"#9b8f80"],roofM:3.2},slab:{wRange:[30,62],dRange:[12,19],hScale:.85,hMin:18,hMax:110,kind:0,colors:[Ht.plasterCool,"#d4d0c6","#c3bdb2","#b9bfc6","#cbc2b4"],roofM:0},tower:{wRange:[22,42],dRange:[22,42],hScale:1.05,hMin:60,hMax:250,kind:1,colors:[Ht.concrete,"#9aa4ae","#b0aca4","#8f9aa6"],roofM:0},office:{wRange:[36,88],dRange:[26,62],hScale:.9,hMin:30,hMax:160,kind:1,colors:["#aebdc9","#9fb2c0","#c0c8cf",Ht.concrete],roofM:0},industrial:{wRange:[50,120],dRange:[26,56],hScale:.35,hMin:9,hMax:26,kind:3,colors:["#b4b7bb","#a3a8ad","#c2c0bb"],roofM:1.6},village:{wRange:[9,17],dRange:[7,13],hScale:.4,hMin:4,hMax:14,kind:0,colors:[Ht.white,"#d9d2c4","#c8bfae"],roofM:2.6}},Bv={0:"#7f95a6",1:Ht.glassCool,2:"#7d93a8",3:"#93a0a8"};function kv(i,t){const e=Bu(),n=Fv[i],s=[],r=zv[i],o=[0,...$n.map(a=>a.radiusKm),n];for(let a=0;a<o.length-1;a++){const l=o[a],c=Math.min(o[a+1],n);if(c<=l)continue;const h=us(l).index===0?r*.72:r*(1+a*.12);for(let u=l+h*.5;u<c;u+=h){const d=Math.max(8,Math.round(2*Math.PI*u/h));for(let f=0;f<d;f++){if(s.length>=t)return s;const _=f/d*Math.PI*2*180/Math.PI,m=(Ut(u*31.7,f,3)-.5)*(360/d)*.8,p=(Ut(u*7.1,f*1.7,5)-.5)*h*.7,y=u+p,x=(_+m)*Math.PI/180,R=1+Math.max(0,Math.cos(x))*.14,T=Math.sin(x)*y*R*le,A=-Math.cos(x)*y*R*le;if(e.blocked(T,A))continue;const P=e.classify(T,A),E=Math.max(P.density,cr(T,A)**2*1.15);if(Ut(Math.round(T*10),Math.round(A*10),11)>E)continue;const M=Ov[P.form],D=Ut(Math.round(T),Math.round(A),17),F=Ut(Math.round(A),Math.round(T),19),k=M.wRange[0]+D*(M.wRange[1]-M.wRange[0]),q=M.dRange[0]+F*(M.dRange[1]-M.dRange[0]);let G=Math.max(M.hMin,Math.min(M.hMax,P.heightM*M.hScale));const X=Ut(Math.round(T*.5),Math.round(A*.5),23);X>.965&&(G*=1.5+X),s.push({x:T,y:Ye(T,A),z:A,w:k,h:G,d:q,rot:x+(Ut(Math.round(T*2),Math.round(A*2),7)-.5)*.5,bearing:x,color:new bt(M.colors[Ut(Math.round(T),Math.round(A),29)*M.colors.length|0]),seed:Ut(Math.round(T),Math.round(A),41),kind:M.kind,band:us(y).index,roofM:M.roofM,span:Math.max(k,q),form:P.form,cell:h})}}}return s}function Hv(i){const t=Bu(),e=[];for(const n of i){if(n.form==="industrial")continue;const s=cr(n.x,n.z),r=n.cell*1e3*(.34+.62*s),o=s>.55?2:1;for(let a=0;a<o;a++){const l=Ut(Math.round(n.x)+a*7,Math.round(n.z)-a*3,61),c=Ut(Math.round(n.z)+a*5,Math.round(n.x)+a*11,67),h=(l-.5)*r*.7,u=(c-.5)*r*.7,d=Math.cos(n.bearing),f=Math.sin(n.bearing),g=n.x+h*d+u*f,_=n.z-h*f+u*d;if(t.blocked(g,_))continue;const m=.55+Ut(Math.round(g),Math.round(_),71)*.3;e.push({...n,x:g,z:_,y:Ye(g,_),w:n.w*m,d:n.d*m,h:Math.max(4,n.h*(.45+m*.6)),rot:n.bearing,span:n.span*m,seed:Ut(Math.round(g),Math.round(_),41)})}}return e}function bh(i,t="high"){const e=new dn;e.name="buildings";const n=kv(t,Nv[t]),s=n.concat(Hv(n)),r=new Pe,o=[],a=[],l=new Map;for(const d of s){const f=l.get(d.kind);f?f.push(d):l.set(d.kind,[d])}for(const[d,f]of l){const g=d===1?.5:d===0?.36:.16,_=xv({base:"#ffffff",glassTint:Bv[d],litRatio:g,roughness:d===1?.56:.78,metalness:d===1?.16:.04}),m=new pn(1,1,1),p=new Float32Array(f.length*4),y=new Float32Array(f.length*4),S=new Float32Array(f.length),x=new On(m,_,f.length);x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1,x.name=`buildings-kind${d}`,f.forEach((R,T)=>{r.position.set(R.x,R.y+re(R.h)/2,R.z),r.rotation.set(0,R.rot,0),r.scale.set(re(R.w),re(R.h),re(R.d)),r.updateMatrix(),x.setMatrixAt(T,r.matrix),x.setColorAt(T,R.color),p[T*4]=R.w,p[T*4+1]=R.h,p[T*4+2]=R.d,y[T*4+1]=R.seed,y[T*4+2]=d,S[T]=R.band}),m.setAttribute("aDim",vv(p)),m.setAttribute("aWin",Mv(y)),m.setAttribute("aBand",yv(S)),x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),e.add(x),a.push(x),o.push(m)}const c=n.filter(d=>d.form!=="industrial");if(c.length){const d=new pn(1,1,1),f=new nn({color:"#ffffff",roughness:.9,metalness:.02});f.onBeforeCompile=p=>{p.uniforms.uNight=Zt.uNight,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
attribute float aUrban;
attribute vec2 aUv;
varying float vUrban;
varying vec2 vFaceUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vUrban = aUrban;
 vFaceUv = aUv;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
varying float vUrban;
varying vec2 vFaceUv;`).replace("#include <color_fragment>",`#include <color_fragment>
           // 夜里要压掉底板白天的底色：不压，环境光会把全城照成一片纸板黄，
           // 琥珀色的光污染读不出来。
           diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.18, 0.20, 0.32), uNight * 0.92);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
           // 屋顶夜里是黑的，亮的是街：顶面只留薄薄一层反光，
           // 侧墙按「墙脚亮、檐口暗」模拟街灯洒在沿街立面上的光。
           float top = step(0.5, abs(vNormal.y));
           float street = 1.0 - vFaceUv.y;
           float spill = top * 0.20 + (1.0 - top) * (0.25 + 1.45 * street * street);
           totalEmissiveRadiance += vec3(1.0, 0.55, 0.22) * uNight * (vUrban * vUrban * 0.40 + vUrban * 0.06) * spill;`)},f.customProgramCacheKey=()=>"cd-plate";const g=new On(d,f,c.length),_=new Float32Array(c.length);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1,g.name="block-plates";const m=new bt;c.forEach((p,y)=>{const S=p.cell*1e3,x=cr(p.x,p.z);_[y]=x;const R=.92+Ut(Math.round(p.x),Math.round(p.z),43)*.2,T=S*(.34+.62*x)*R,A=p.d/Math.max(p.w,.001)>1.6?.6:1,P=Math.min(p.h*.5,(5+13*x)*(.7+p.seed*.6));r.position.set(p.x,p.y+re(P/2),p.z),r.rotation.set(0,p.bearing,0),r.scale.set(re(T),re(P),re(T*A)),r.updateMatrix(),g.setMatrixAt(y,r.matrix);const E=.13+x*.1+Ut(Math.round(p.z),Math.round(p.x),47)*.15,M=1-x;m.setRGB(E*(1.05+M*.08),E*(1+M*.02),E*(.96-M*.12)),g.setColorAt(y,m)}),d.setAttribute("aUrban",zu(_)),d.setAttribute("aUv",d.getAttribute("uv")),g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),e.add(g),a.push(g),o.push(d,f)}const h=s.filter(d=>d.roofM>0);if(h.length){const d=new Es(Math.SQRT1_2,Math.SQRT1_2,4),f=new nn({color:Ht.oldRoof,roughness:.92}),g=new On(d,f,h.length);g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1,g.name="pitched-roofs",h.forEach((_,m)=>{const p=re(_.span*.78);r.position.set(_.x,_.y+re(_.h)+re(_.roofM/2),_.z),r.rotation.set(0,_.rot+Math.PI/4,0),r.scale.set(p,re(_.roofM),p),r.updateMatrix(),g.setMatrixAt(m,r.matrix)}),g.instanceMatrix.needsUpdate=!0,e.add(g),a.push(g),o.push(d)}const u=s.filter(d=>d.h>90);if(u.length){const d=new pn(1,1,1),f=new nn({color:"#7d8288",roughness:.6,metalness:.25}),g=new On(d,f,u.length);g.castShadow=!0,g.frustumCulled=!1,g.name="roof-caps",u.forEach((_,m)=>{const p=2+_.seed*7;r.position.set(_.x,_.y+re(_.h)+re(p/2),_.z),r.rotation.set(0,_.rot,0),r.scale.set(re(_.w*.45),re(p),re(_.d*.45)),r.updateMatrix(),g.setMatrixAt(m,r.matrix)}),g.instanceMatrix.needsUpdate=!0,e.add(g),a.push(g),o.push(d)}return i.add(e),{group:e,count:s.length,dispose(){i.remove(e);for(const d of a)d.dispose();for(const d of o)d.dispose()}}}function ku(i,t){return Ye(i,t)}function Hu(i,t=0){const e=new dn;return e.position.set(i.x,ku(i.x,i.z)+t/100,i.z),e.scale.setScalar(.01),e}function Vv(i){return Math.atan2(-i.x,i.z)}const Vu=Math.PI/180,te=new pn(1,1,1).translate(0,.5,0),Ve=new ii(1,1,1,8).translate(0,.5,0),Ks=new Es(1,1,8).translate(0,.5,0),Hl=new Es(1,1,4).rotateY(Math.PI/4).translate(0,.5,0),pi=new or(1,10,7),hr=Gv();function Gv(){const i=[-.5,0,-.5],t=[-.5,0,.5],e=[.5,0,.5],n=[.5,0,-.5],s=[-.5,1,0],r=[.5,1,0],o=[i,s,r,i,r,n,t,e,r,t,r,s,i,t,s,n,r,e,i,e,t,i,n,e],a=[];for(const c of o)a.push(c[0],c[1],c[2]);const l=new Ue;return l.setAttribute("position",new ve(a,3)),l.computeVertexNormals(),l}const Eh=new Map;function he(i,t=1.2){const e=`${i}|${t}`,n=Eh.get(e);if(n)return n;const s=Sv(i,t);return Eh.set(e,s),s}const Wv=new me,Th=new L,wh=new ni,Xv=new Pn,Ah=new L;function wt(i,t,e,n=!0){const s=new On(i,t,Math.max(1,e.length));for(let r=0;r<e.length;r++){const o=e[r];Th.set(o.x??0,o.y??0,o.z??0),wh.setFromEuler(Xv.set(o.rx??0,o.ry??0,o.rz??0)),Ah.set(o.sx??1,o.sy??1,o.sz??1),s.setMatrixAt(r,Wv.compose(Th,wh,Ah))}return s.count=e.length,s.instanceMatrix.needsUpdate=!0,s.castShadow=n,s.receiveShadow=!0,e.length&&s.computeBoundingSphere(),s}function He(i,t,e,n=0,s=32,r=1,o=1){const a=new ho(Math.max(.02,i),Math.max(i+.05,t),s,1).rotateX(-Math.PI/2),l=new Bt(a,e);return l.position.y=n,l.scale.set(r,1,o),l.receiveShadow=!0,l}function Te(i,t,e,n,s=0,r=0,o=0){const a=new Bt(Hl,n);return a.scale.set(i*Math.SQRT1_2,e,t*Math.SQRT1_2),a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,a}function ll(i,t,e,n,s=0,r=0,o=0,a=0){const l=new Bt(hr,n);return l.scale.set(i,e,t),l.position.set(s,r,o),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,l}function ys(i,t,e,n,s=0,r=0,o=0){const a=new Bt(new Es(i,t,e),n);return a.scale.y=1,a.position.set(s,r+t/2,o),a.castShadow=!0,a.receiveShadow=!0,a}function Ni(i,t,e,n,s=0,r=.55,o=Y(Ht.red),a=0,l=0){const c=[],h=2*(t+e);for(let u=0;u<i;u++){const d=u/i*h;let f=0,g=0;d<t?(f=-t/2+d,g=-e/2):d<t+e?(f=t/2,g=-e/2+(d-t)):d<2*t+e?(f=t/2-(d-t-e),g=e/2):(f=-t/2,g=e/2-(d-2*t-e)),c.push({x:f+a,z:g+l,y:s,sx:r,sy:n,sz:r})}return wt(Ve,o,c)}function Me(i,t,e,n,s,r,o,a=Y(Ht.green)){const l=[];for(let c=0;c<i;c++){const h=Ut(c,o,3)*Math.PI*2,u=.22+.78*Ut(c,o,11),d=.72+.6*Ut(c,o,23);l.push({x:t+Math.cos(h)*n*u,z:e+Math.sin(h)*s*u,sy:r*d,sx:d*.6,sz:d*.6})}return wt(Ks,a,l)}function Gu(i,t,e,n,s,r,o,a,l=.88,c=0,h=0){let u=r,d=e,f=n;for(let g=0;g<t;g++)i.add(st(d,s,f,o,{x:c,y:u+s/2,z:h})),u+=s,i.add(Te(d*1.45,f*1.45,s*.6,a,c,u,h)),u+=s*.48,d*=l,f*=l}function De(i,t=0){const e=Hu(i.p);return e.rotation.y=Vv(i.p)+t*Vu,e}function si(i,t){const e=Hu(i.p);return e.rotation.y=-t*Vu,e}function Kv(i,t,e,n,s,r,o=0){const a=e-i,l=n-t,c=st(Math.hypot(a,l)||1,s,s,r,{x:(i+e)/2,y:(t+n)/2,z:o});return c.rotation.z=Math.atan2(l,a),c}const de=Y(Ht.oldRoof,.7),Fi=Y(Ht.wood,.82),Bn=Y(Ht.plasterWarm,.88),Jn=Y(Ht.red,.82),mn=Y(Ht.stone,.9),_i=Y(Ht.gold,.35,.65),Yv=Y("#b9a163",.95),ro=Y(Ht.brick,.9),xi=Y("#a9c4d2",.25,.4),Ke=Y("#c6bfb1",.92),Wu=Y("#3c3d40",.95),sn=Y(Ht.metal,.45,.6),qv=(i,t)=>{const e=si(i,0);return e.add(st(300,1.2,250,Ke,{y:.6})),e.add(ce(6,6,.7,26,_i,{y:1.5})),e.add(He(4.1,5.6,he("#ffc46a",1.5),2,26)),e.add(st(60,2.6,6,Y("#8e9a52",.95),{x:-84,z:30})),e.add(st(60,2.6,6,Y("#8e9a52",.95),{x:84,z:30})),t&&(e.add(oe(150,20,26,{base:Ht.plasterWarm,kind:2,litRatio:.32},{z:-140})),e.add(Te(164,40,9,_i,0,20,-140)),e.add(Ni(12,150,30,11,0,.8,Y("#b3ab9d"),0,-140)),e.add(Me(18,0,112,128,20,14,4))),e},jv=(i,t)=>{const e=i.name,n=De(i),s=i.heightM??38,r=e.includes("科技馆"),o=e.includes("成都博物馆"),a=e.includes("大剧院"),l=e.includes("自然"),c=l?170:r?150:o?110:126,h=o?62:l?96:44;if(n.add(oe(c,s,h,{base:r?Ht.plasterWarm:Ht.white,kind:2,litRatio:.34,roughness:.6},{})),n.add(st(c*1.16,2.4,h*1.14,Ke,{y:1.2})),r){n.add(Te(c*1.1,h*1.5,13,_i,0,s));const u=He(6.4,8,he("#fff0c4",1.1),0,20);u.position.set(0,s*.7,-h/2-.6),u.rotation.x=-Math.PI/2,n.add(u)}else if(o){const u=[];for(let d=0;d<=24;d++)u.push({x:-c/2+d*c/24,z:-h/2-1,sy:s*.74,sx:1.2,sz:1.2});for(let d=0;d<=24;d++)u.push({x:c/2+1,z:-h/2+d*h/24,sy:s*.74,sx:1.2,sz:1.2});for(let d=0;d<=24;d++)u.push({x:-c/2-1,z:-h/2+d*h/24,sy:s*.74,sx:1.2,sz:1.2});n.add(wt(te,Y("#8a5a3c",.55,.5),u,!1)),n.add(st(c*.6,6,h*.6,Y("#6e6a63"),{y:s+3}))}else if(a){const u=new Bt(new ii(h*.66,h*.66,c*.9,16,1,!1,0,Math.PI),xi);u.rotation.z=Math.PI/2,u.position.set(0,1,h/2-4),u.castShadow=!0,n.add(u),n.add(st(c*.9,3,22,Ke,{z:h/2+16,y:1.5}))}else if(l){const u=st(c*1.02,3.4,h*1.06,Y("#cfd6d8",.4,.35),{y:s+1});u.rotation.z=.13,u.rotation.x=-.05,n.add(u),n.add(st(24,s*.6,24,xi,{x:c*.3,y:s*.5,z:h*.2}))}if(t){n.add(wt(te,Ke,[{x:0,z:h/2+14,sx:c*.5,sy:1.2,sz:6},{x:0,z:h/2+22,sx:c*.62,sy:2.2,sz:6}],!1));const u=[];for(let d=0;d<5;d++)u.push({x:-40+d*20,z:h/2+34,sy:14,sx:.35,sz:.35});n.add(wt(Ve,sn,u,!1)),n.add(Me(10,0,-h/2-26,c*.5,16,12,9))}return n},Zv=(i,t)=>{const e=De(i),n=118,s=158;if(e.add(st(n,6.5,1.6,Jn,{z:s/2-3,y:3.25})),e.add(st(n,6.5,1.6,Jn,{z:-s/2+3,y:3.25})),e.add(st(1.6,6.5,s,Jn,{x:n/2-3,y:3.25})),e.add(st(1.6,6.5,s,Jn,{x:-n/2+3,y:3.25})),t&&(e.add(Te(n+6,7,2.2,de,0,6.5,s/2-3)),e.add(Te(n+6,7,2.2,de,0,6.5,-s/2+3)),e.add(Te(7,s+6,2.2,de,n/2-3,6.5)),e.add(Te(7,s+6,2.2,de,-n/2+3,6.5))),e.add(st(26,8,9,ro,{z:s/2-16,y:4})),e.add(Te(34,17,4.4,de,0,8,s/2-16)),e.add(st(56,1.8,40,mn,{z:8,y:.9})),e.add(st(38,9,24,Bn,{z:8,y:6.3})),e.add(Ni(14,43,28,9,1.8,.55,Y(Ht.red),0,8)),e.add(Te(52,36,3.4,de,0,10.8,8)),e.add(Te(40,27,5.2,de,0,14.2,8)),e.add(st(30,12,16,Bn,{z:-s/2+26,y:6})),e.add(Te(40,24,4.6,de,0,12,-s/2+26)),i.name.includes("文殊")&&(Gu(e,5,14,14,4.4,0,Bn,de,.85,-40,-28),e.add(ce(.5,1.5,6,6,_i,{x:-40,y:36,z:-28}))),i.name.includes("青羊")&&(e.add(ce(9,9.6,1,8,mn,{x:34,z:-24,y:.5})),e.add(Ni(8,15,15,7,1,.5,Y(Ht.red),34,-24)),e.add(ys(11.6,6,8,de,34,8,-24)),e.add(ce(2.6,2.6,3.4,8,_i,{x:34,y:16,z:-24}))),i.name.includes("武侯")){const r=[];for(let o=0;o<12;o++)r.push({x:-55+o%6*22,z:s/2+16+Math.floor(o/6)*20,sx:17,sy:6,sz:12});e.add(wt(te,ro,r)),e.add(wt(hr,de,r.map(o=>({x:o.x,z:o.z,y:6,sx:19,sy:3.2,sz:14}))))}return t&&(e.add(Me(22,0,-16,n*.42,s*.4,16,5,Y("#2f5741"))),e.add(ce(2.2,2.6,3.4,10,Y("#6b6560"),{z:36,y:1.7}))),e},$v=(i,t)=>{const e=De(i);if(i.name.includes("东郊记忆")){const o=[[-70,-34,150,20,44],[64,-46,90,17,36],[-16,62,120,22,38]];for(const[l,c,h,u,d]of o)e.add(oe(h,u,d,{base:Ht.brick,kind:3,litRatio:.3},{x:l,z:c})),e.add(Te(h*1.04,d*1.6,4.4,de,l,u,c));e.add(ce(2.8,4,62,10,Y("#9c5a4a",.85),{x:96,z:46})),e.add(ce(2.4,3.4,52,10,Y("#9c5a4a",.85),{x:120,z:46}));const a=[];for(let l=0;l<12;l++)a.push({x:-132+l*24,z:-34,sy:18,sx:.9,sz:.9,rz:(l%2?1:-1)*.3});return e.add(wt(Ve,sn,a,!1)),t&&e.add(Me(12,-40,106,80,24,13,6)),e}const n=[],s=t?3:2;for(let o=0;o<s;o++)for(let a=0;a<8;a++){const l=-84+a*24,c=-66+o*56;n.push({x:l,z:c,sx:17,sy:5.4+a%3*.9,sz:13}),a%4!==3&&n.push({x:l+6,z:c+24,sx:13,sy:5,sz:11})}e.add(wt(te,ro,n)),e.add(wt(hr,de,n.map(o=>({x:o.x,y:o.sy??5,z:o.z,sx:(o.sx??16)+2.4,sy:3,sz:(o.sz??12)+2}))));const r=[];for(let o=0;o<s;o++)r.push({x:0,z:-44+o*56,sx:210,sy:.4,sz:7});return e.add(wt(te,Y("#9c968b",.95),r,!1)),e.add(wt(te,Jn,[{x:-9,z:78,sy:11,sx:1.8,sz:1.8},{x:9,z:78,sy:11,sx:1.8,sz:1.8}])),e.add(st(24,2.2,3,Jn,{z:78,y:11})),e.add(st(30,1.8,4,Jn,{z:78,y:14.4})),e.add(Te(34,8,2.6,de,0,16.2,78)),t&&e.add(Me(10,0,-88,90,14,11,12)),e},Jv=(i,t)=>{const e=De(i),n=[[-30,34,16,11],[8,46,13,9],[38,26,15,10],[-14,-8,12,9]];for(const[r,o,a,l]of n)e.add(st(a,4.4,l,Y("#c9b79a",.92),{x:r,z:o,y:2.2})),e.add(ll(a+3.6,l+3,4.6,Yv,r,4.4,o));e.add(st(34,9,20,Bn,{z:-46,y:4.5})),e.add(Te(44,30,5.6,de,0,9,-46));const s=[];for(let r=0;r<12;r++)s.push({x:-66+r*11,z:10,sy:4.2,sx:.4,sz:.4});return e.add(wt(Ve,Fi,s,!1)),e.add(ll(136,7,2.2,de,-8,4.2,10)),e.add(st(46,.6,30,Y("#5f7f74",.35,.2),{x:52,z:-8,y:.3})),t&&(e.add(Me(16,0,0,74,62,15,17,Y("#3d6b46"))),e.add(wt(Ve,Y("#7f8a4a"),[{x:-52,z:46,sy:6,sx:.35,sz:.35},{x:-45,z:50,sy:5.4,sx:.35,sz:.35},{x:60,z:42,sy:6.2,sx:.35,sz:.35},{x:66,z:36,sy:5.6,sx:.35,sz:.35}],!1))),e},Qv=(i,t)=>{const e=De(i),n=new Bt(new ii(34,86,26,26),Y("#b7bcc0",.45,.4));n.scale.set(1.32,1,1),n.position.y=13,n.castShadow=!0,n.receiveShadow=!0,e.add(n),e.add(He(.4,33,xi,26.6,26,1.32,1)),e.add(st(230,.5,176,Y("#7f8f5c",.95),{y:.25})),e.add(ce(6,6,.6,24,_i,{x:66,z:44,y:.9}));const s=He(4,5.4,he("#ffcb72",1.6),1.3,24);if(s.position.set(66,1.3,44),e.add(s),e.add(oe(64,16,30,{base:Ht.concrete,kind:2,litRatio:.3},{x:-104,z:62})),t){const r=[];for(let o=0;o<14;o++)r.push({x:-70+o%7*22,z:-52-Math.floor(o/7)*22,sx:16,sy:1.2,sz:12});e.add(wt(te,Y("#8d7f6a",.95),r,!1)),e.add(Me(16,44,-74,90,26,13,21))}return e},tM=(i,t)=>{const e=De(i),n=[];for(let r=0;r<3;r++)for(let o=0;o<7;o++)n.push({x:-72+o*24,z:-30+r*30,sx:20,sy:8+o%2*3.4,sz:17});e.add(wt(te,Bn,n)),e.add(wt(hr,de,n.map(r=>({x:r.x,y:r.sy??8,z:r.z,sx:(r.sx??20)+2,sy:2.6,sz:(r.sz??17)+2,ry:Math.PI/2}))));const s=i.heightM??98;if(e.add(oe(46,s,40,{base:Ht.plasterCool,kind:1,litRatio:.55,roughness:.4},{x:-66,z:76})),t){e.add(oe(38,s*1.15,34,{base:"#7f97a6",kind:1,litRatio:.6,roughness:.35},{x:66,z:80}));const r=He(9,21,Y("#6f8b62",.95),.4,20);r.position.set(0,.4,70),e.add(r),e.add(Me(10,0,24,70,60,11,31))}return e},eM=(i,t)=>{const e=De(i);e.add(oe(96,34,74,{base:Ht.plasterWarm,kind:2,litRatio:.45},{z:12}));const n=i.heightM??248;e.add(oe(56,n,46,{base:"#6f8ea4",kind:1,litRatio:.6,glassTint:"#8fb4cc",roughness:.3},{x:-6,z:-20})),e.add(st(56,3,46,Y("#dfe6ea",.35,.4),{x:-6,y:n,z:-20})),e.add(ce(.6,2,26,6,sn,{x:-6,y:n+16,z:-20}));const s=Y("#f3f1ec",.6),r=Y("#1c1c1e",.6),o=new Bt(pi,s);o.scale.set(3.4,2.9,6.6),o.position.set(14,37,40),o.rotation.x=-.35,o.castShadow=!0,e.add(o);const a=new Bt(pi,s);return a.scale.setScalar(3.2),a.position.set(14,39.6,48.4),a.castShadow=!0,e.add(a),e.add(wt(pi,r,[{x:11.4,y:42.6,z:48.4,sx:1.1,sy:1.1,sz:1.1},{x:16.6,y:42.6,z:48.4,sx:1.1,sy:1.1,sz:1.1},{x:10.6,y:34.5,z:50.4,sx:1.3,sy:1.7,sz:1.3},{x:17.4,y:34.5,z:50.4,sx:1.3,sy:1.7,sz:1.3},{x:11.4,y:35.4,z:34.6,sx:1.5,sy:1.9,sz:1.5},{x:16.6,y:35.4,z:34.6,sx:1.5,sy:1.9,sz:1.5}])),t&&(e.add(st(96,1.2,8,he("#ffb765",.8),{z:50,y:34.6})),e.add(oe(40,96,36,{base:Ht.plasterCool,kind:1,litRatio:.5},{x:76,z:54})),e.add(Me(6,-44,62,34,20,10,41))),e},nM=(i,t)=>{const e=De(i),n=i.heightM??339;e.add(oe(96,14,78,{base:Ht.concrete,kind:2,litRatio:.4},{})),e.add(ce(4.5,17,200,12,Y(Ht.concrete,.8),{y:114})),e.add(ce(2.2,4.5,26,10,Y(Ht.concrete,.8),{y:227}));const s=new Bt(pi,Y("#cdd3d6",.5,.25));s.scale.set(28,17,28),s.position.y=212,s.castShadow=!0,e.add(s);const r=new Bt(new Hn(31,3.2,6,24).rotateX(Math.PI/2),Y("#e4e8ea",.45,.3));r.position.y=217,r.castShadow=!0,e.add(r),e.add(He(24,31,he("#ff9f52",1.2),224,24)),e.add(ce(.7,2.6,n-240,8,sn,{y:240+(n-240)/2}));const o=new Bt(pi,he("#ff5a4a",1.6));return o.scale.setScalar(1.8),o.position.y=n,e.add(o),t&&(e.add(He(6.6,9,he("#8fd8ff",.9),186,18)),e.add(He(8.4,11,he("#8fd8ff",.7),148,18)),e.add(wt(Ve,Y("#9aa1a6"),[{x:-15,z:-15,sy:26,sx:1.5,sz:1.5},{x:15,z:-15,sy:26,sx:1.5,sz:1.5},{x:-15,z:15,sy:26,sx:1.5,sz:1.5},{x:15,z:15,sy:26,sx:1.5,sz:1.5}],!1)),e.add(Me(8,0,78,70,22,12,43))),e},iM=(i,t)=>{const e=i.name.includes("汇龙"),n=De(i);return n.add(ce(e?15:11,e?16:12,1.4,6,mn,{y:.7})),n.add(Ni(6,15,15,6.4,1.4,.45,Jn)),n.add(ys(11.6,3.6,6,de,0,7.8)),n.add(ce(6.6,7.6,2.6,6,Bn,{y:11})),n.add(ys(9.4,4.6,6,de,0,12.2)),n.add(ce(.35,.9,2.6,6,_i,{y:17.4})),e?(n.add(st(6,.6,46,Fi,{z:32,y:1.2})),n.add(wt(te,Fi,[{x:-18,z:26,sx:26,sy:.5,sz:6},{x:20,z:36,sx:20,sy:.5,sz:6}],!1)),n.add(Me(14,0,-36,60,30,13,47,Y("#3c6b4c")))):n.add(st(72,.6,34,Y("#6f8f86",.35,.2),{z:36,y:.3})),t&&(n.add(wt(te,mn,[{x:-22,z:14,sx:4,sy:.9,sz:4},{x:22,z:14,sx:4,sy:.9,sz:4},{x:0,z:26,sx:4,sy:.9,sz:4}],!1)),n.add(Me(7,0,-26,40,20,11,53))),n},sM=(i,t)=>{const e=si(i,-45),n=96,s=Y("#a89a86",.9);e.add(st(n,2,13,mn,{y:6.6}));for(const r of[-30,0,30]){const o=new Bt(new Hn(13,2.4,5,14,Math.PI),s);o.position.set(r,5.4,0),o.scale.set(1,1,2.2),o.castShadow=!0,e.add(o)}if(e.add(wt(te,s,[{x:-n/2-5,sy:8,sx:12,sz:15},{x:n/2+5,sy:8,sx:12,sz:15},{x:-15,sy:6,sx:7,sz:9},{x:15,sy:6,sx:7,sz:9}])),e.add(st(n-14,7,10,Bn,{y:12.1})),e.add(ll(n-8,14,3.6,de,0,15.6)),e.add(Te(16,16,4.4,de,-n/2+8,15.6)),e.add(Te(16,16,4.4,de,n/2-8,15.6)),t){const r=[];for(let o=0;o<10;o++)r.push({x:-40+o*9,y:16.6,sx:1.3,sy:1.8,sz:1.3});e.add(wt(te,he("#ffb257",1.5),r,!1)),e.add(Me(6,0,34,46,14,11,59))}return e},rM=(i,t)=>{const e=De(i);e.add(st(52,5,46,mn,{y:2.5})),Gu(e,4,22,22,5.6,5,Bn,de,.9),e.add(ce(.5,1.6,6,6,_i,{y:44.6})),e.add(Ni(12,26,26,5.6,5,.55,Jn)),t&&(e.add(ce(7,7.6,1,6,mn,{x:-40,z:32,y:.5})),e.add(Ni(6,11,11,5.4,1,.4,Y(Ht.red),-40,32)),e.add(ys(9,4.4,6,de,-40,6.4,32))),e.add(st(30,8,16,ro,{x:42,z:28,y:4})),e.add(Te(38,24,4,de,42,8,28));const n=[];for(let s=0;s<(t?54:24);s++){const r=Ut(s,5,61)*Math.PI*2,o=26+Ut(s,9,61)*44;n.push({x:Math.cos(r)*o,z:Math.sin(r)*o+12,sy:11+Ut(s,13,61)*5,sx:.28,sz:.28})}return e.add(wt(Ve,Y("#5c8a4e",.9),n,!1)),t&&e.add(st(70,6,2,mn,{z:-32,y:3})),e},oM=(i,t)=>{const e=De(i),n=i.heightM??32;return e.add(He(.5,34,Ke,.2,28)),e.add(wt(te,mn,[{sx:30,sy:1.4,sz:30},{sx:22,sy:1.4,sz:22,y:1.4},{sx:14,sy:1.6,sz:14,y:2.8}],!1)),e.add(st(6.4,n-9,6.4,Y("#cdc7bb",.8),{y:4.4+(n-9)/2})),e.add(Te(8.8,8.8,5,Y("#bdb6a9",.8),0,n-4.6)),e.add(wt(te,Y("#b8b2a6"),[{x:-11,z:30,sy:12,sx:2,sz:2},{x:11,z:30,sy:12,sx:2,sz:2}])),e.add(st(26,2,2.6,Y("#b8b2a6"),{z:30,y:12})),e.add(Te(30,7,2.4,de,0,14,30)),t&&(e.add(Me(16,0,0,46,46,15,67,Y("#33604a"))),e.add(st(52,.6,8,Y("#6f8f7a",.45),{z:-34,y:.3}))),e},aM=(i,t)=>{const e=De(i),n=500,s=400;e.add(oe(n,48,s,{base:Ht.plasterCool,kind:2,litRatio:.3,roughness:.6},{}));const r=new co;r.moveTo(-s/2,0),r.quadraticCurveTo(0,104,s/2,0),r.lineTo(-s/2,0);const o=new rr(r,{depth:n,bevelEnabled:!1,curveSegments:14});o.rotateY(Math.PI/2),o.translate(-n/2,0,0);const a=new Bt(o,Y("#c3cacd",.45,.35));if(a.position.y=48,a.castShadow=!0,a.receiveShadow=!0,e.add(a),e.add(st(n+4,2.4,26,xi,{y:99})),e.add(st(n+6,1,8,he("#7fd4ff",.7),{y:100.6})),e.add(oe(46,132,46,{base:"#7c93a3",kind:1,litRatio:.55},{x:-n/2+62,z:-s/2+62})),t){const l=[];for(let c=0;c<24;c++)l.push({x:-n/2+11+c*(n/24),z:s/2+1,sx:1.6,sy:44,sz:1.6});e.add(wt(te,Y("#b4bbbe",.5,.3),l,!1)),e.add(st(n*.7,1.4,40,he("#ffb061",.5),{y:.9,z:s/2+34}))}return e},lM=(i,t)=>{const e=De(i),n=i.heightM??218;e.add(oe(200,10,64,{base:Ht.plasterCool,kind:2,litRatio:.45},{}));for(const s of[-56,56]){e.add(oe(60,n,34,{base:"#6b8ca4",kind:1,litRatio:.62,glassTint:"#8ab6d4",roughness:.28},{x:s,z:-8})),e.add(st(62,4,36,Y("#dfe6ea",.35,.4),{x:s,y:n,z:-8})),e.add(st(64,2.4,38,he("#6fd2ff",1.3),{x:s,y:n+6,z:-8})),e.add(ce(.7,2.4,34,6,sn,{x:s,y:n+26,z:-8}));const r=[];for(let o=0;o<7;o++)r.push({x:s-27+o*9,y:12,z:9.4,sx:1.3,sy:n-26,sz:.7});e.add(wt(te,he("#ff8a4c",.85),r,!1))}return t&&(e.add(st(150,1.4,26,he("#ffd08a",.6),{y:10.8,z:42})),e.add(wt(te,Y("#5f7a52"),[{x:-134,z:22,sx:22,sy:3,sz:22},{x:134,z:22,sx:22,sy:3,sz:22}],!1))),e},cM=(i,t)=>{const e=si(i,0),n=Y("#b8371f",.5,.35);e.add(He(45,55,Y("#c9c3b8",.85),28,44)),e.add(He(45,55,Y("#8f8a82"),26.4,44));const s=new Bt(new Hn(55,2.6,6,44).rotateX(Math.PI/2),n);s.position.y=31.4,s.castShadow=!0,e.add(s);const r=new Bt(new Hn(45,2,6,40).rotateX(Math.PI/2),n);r.position.y=31.4,r.castShadow=!0,e.add(r),e.add(He(54,55.6,he("#ff7a48",1.2),28.3,44));const o=[];for(let l=0;l<4;l++){const c=l/4*Math.PI*2+Math.PI/4;o.push({x:Math.cos(c)*50,z:Math.sin(c)*50,sy:28,sx:2.6,sz:2.6,rz:-Math.cos(c)*.08,rx:Math.sin(c)*.08})}e.add(wt(Ve,n,o));const a=[];for(let l=0;l<40;l++){const c=l/40*Math.PI*2;a.push({x:Math.cos(c)*54.4,z:Math.sin(c)*54.4,y:28.2,sy:1.6,sx:.28,sz:.28})}return e.add(wt(Ve,sn,a,!1)),t&&(e.add(He(44.4,45.6,he("#ff7a48",1),28.3,40)),e.add(st(14,6,4,he("#ffd39a",.9),{z:63,y:3}))),e},hM=(i,t)=>{const e=De(i),n=i.heightM??192,s=n*.66,r=n-s;e.add(oe(46,s,40,{base:"#7295ab",kind:1,litRatio:.58,glassTint:"#9dc0d8",roughness:.3},{z:-18})),e.add(oe(38,r,34,{base:"#7f9fb4",kind:1,litRatio:.6,roughness:.3},{y:s+r/2,z:-18})),e.add(st(40,3,36,he("#8fdcff",1.1),{y:n,z:-18}));const o=new co;o.moveTo(-52,0),o.lineTo(52,0),o.lineTo(10,46),o.closePath();const a=new rr(o,{depth:44,bevelEnabled:!1,curveSegments:1});a.translate(0,0,-22);const l=Cs({base:Ht.glassCool,kind:1,litRatio:.5,roughness:.22,metalness:.25});l.userData.dim.set(104,46,44,0),l.userData.win.set(0,1,1,0);const c=new Bt(a,l);return c.position.set(6,0,36),c.castShadow=!0,c.receiveShadow=!0,e.add(c),t&&(e.add(oe(34,74,32,{base:Ht.plasterCool,kind:1,litRatio:.5},{x:-64,z:30})),e.add(st(120,1.4,30,he("#ffd08a",.55),{y:.7,z:70}))),e},uM=(i,t)=>{const e=De(i);if(i.name.includes("公园")){e.add(st(340,.7,240,Y("#7f9a52",.95),{y:.35})),e.add(st(220,.6,46,Y("#4f7f8c",.32,.25),{y:.9,z:44})),e.add(st(300,.4,9,Ke,{y:1.1,z:-32})),e.add(Me(t?46:22,0,0,150,100,14,71));for(const s of t?[-92,92]:[92])e.add(ce(7,7.4,.9,6,mn,{x:s,z:-72,y:.45})),e.add(Ni(6,11,11,3.4,.9,.3,Fi,s,-72)),e.add(ys(9.6,3.8,6,de,s,4.3,-72));return e}e.add(st(320,6,230,Ke,{y:3}));const n=[];for(let s=0;s<2;s++)for(let r=0;r<4;r++)s===0&&r===1||!t&&(s===1||r===2)||n.push({x:-105+r*70,z:-60+s*120});for(const s of n){const r=s.x??0,o=s.z??0,a=40+Ut(r,o,3)*28;e.add(oe(52,a,42,{base:"#7f97a8",kind:1,litRatio:.55,roughness:.4},{x:r,y:6+a/2,z:o})),e.add(st(54,1.6,44,Y("#c9d2d4",.5),{x:r,y:6+a,z:o}))}return t&&(e.add(oe(80,92,46,{base:"#6d8ea3",kind:1,litRatio:.6},{x:150,y:52,z:0})),e.add(Me(24,0,0,150,105,12,73,Y("#4d7a52")))),e},dM=(i,t)=>{const e=De(i),n=i.heightM??400,s=[[.3,.68],[.28,.6],[.24,.52],[.18,.44]];let r=0;for(const[o,a]of s){const l=n*o;e.add(oe(64*a,l,52*a,{base:"#68899f",kind:1,litRatio:.62,glassTint:"#9dc4dd",roughness:.26},{y:r+l/2,z:-10})),r+=l}if(e.add(Te(40,32,n*.05,he("#9fe2ff",.85),0,r,-10)),e.add(ce(.6,2.2,n*.1,6,sn,{y:r+n*.1,z:-10})),e.add(oe(210,14,90,{base:Ht.plasterCool,kind:2,litRatio:.45},{z:44})),t){const o=[[-112,-62,.34],[110,-72,.44],[-118,80,.28],[114,98,.36],[4,-136,.5]];for(const[a,l,c]of o){const h=n*c;e.add(oe(44,h,38,{base:"#7b96a8",kind:1,litRatio:.55,roughness:.36},{x:a,z:l,y:14+h/2})),e.add(st(46,2,40,he("#7ccfff",.45),{x:a,z:l,y:14+h}))}e.add(He(70,98,Ke,.3,26))}return e},fM=(i,t)=>{const e=De(i);e.add(st(560,.8,430,Ke,{y:.4})),e.add(oe(520,34,62,{base:Ht.white,kind:2,litRatio:.4,roughness:.5},{z:-152})),e.add(st(524,2.6,66,Y("#d7dcde",.4,.3),{y:34,z:-152}));for(let n=0;n<(t?4:2);n++){const s=40+n*(t?62:124);e.add(oe(74,28,46,{base:"#dfe2e3",kind:3,litRatio:.34},{x:-162,z:s})),e.add(oe(74,28,46,{base:"#dfe2e3",kind:3,litRatio:.34},{x:162,z:s}))}if(e.add(st(24,20,250,xi,{y:10,z:122})),t){const n=[];for(let s=0;s<16;s++)n.push({x:-300+s*40,z:300,sy:14,sx:.6,sz:.6});e.add(wt(Ve,sn,n,!1)),e.add(wt(te,he("#ffd7a0",.9),n.map(s=>({x:s.x,y:14,z:s.z,sx:3,sy:.6,sz:1.2})),!1)),e.add(st(300,1.4,60,he("#9fd8ff",.4),{y:.9,z:-60}))}return e},pM=(i,t)=>{const e=De(i);if(i.name.includes("三岔湖")){const a=[],l=[];for(let c=0;c<6;c++){const h=Ut(c,3,91)*Math.PI*2,u=90+Ut(c,7,91)*230,d=Math.cos(h)*u,f=Math.sin(h)*u*.7,g=40+Ut(c,11,91)*66;a.push({x:d,z:f,sx:g,sy:3+Ut(c,13,91)*4,sz:g*.7}),l.push({x:d,z:f-8,y:6.4,sx:15*Math.SQRT1_2,sy:5.5,sz:15*Math.SQRT1_2})}return e.add(wt(Ve,Y("#6f8b58",.95),a)),e.add(wt(Hl,de,l)),e.add(st(9,1.4,90,Fi,{x:-22,z:62,y:3,rotY:.4})),t&&e.add(Me(20,0,0,250,170,11,83,Y("#40684b"))),e}e.add(st(420,.6,300,Y("#7d9260",.95),{y:.3}));const n=[[-120,-62,90,52,26],[-112,62,76,46,20],[58,-74,66,44,32]],s=t?n:n.slice(0,2);for(const[a,l,c,h,u]of s)e.add(oe(c,u,h,{base:Ht.white,kind:1,litRatio:.5,roughness:.45},{x:a,z:l})),e.add(st(c+3,1.4,h+3,Y("#c9d2d4",.5),{x:a,y:u,z:l}));const r=Cs({base:"#89a9bd",kind:1,litRatio:.55,roughness:.3,metalness:.2});r.userData.dim.set(196,30,144,0),r.userData.win.set(0,1,1,0);const o=new Bt(new ii(72,72,30,22,1,!1,0,Math.PI*1.35),r);return o.position.set(150,15,44),o.castShadow=!0,o.receiveShadow=!0,e.add(o),t&&(e.add(Me(30,-40,40,190,120,13,87)),e.add(st(180,.8,12,Ke,{y:.4,z:136}))),e};function Xu(i,t,e,n,s,r,o){const a=ce(t*.82,t,n,30,Y("#cfd3d4",.6),{});a.scale.z=e/t,i.add(a);const l=ce(t*.7,t*.7,1.2,26,Y("#4f7f42",.9),{});l.scale.z=e/t,l.position.y=1.4,i.add(l);const c=new Bt(new ho(t*.66,t*1.06,30,1).rotateX(-Math.PI/2),o);c.scale.set(1,1,e/t),c.position.y=s,c.castShadow=!0,i.add(c);const h=new Bt(new Hn(t*1.06,1.8,5,30).rotateX(Math.PI/2),sn);if(h.scale.set(1,1,e/t),h.position.y=s,i.add(h),r){const u=[];for(let d=0;d<20;d++){const f=d/20*Math.PI*2;u.push({x:Math.cos(f)*t*1.03,z:Math.sin(f)*e*1.03,sy:n*.72,sx:1.5,sz:1.5})}i.add(wt(Ve,Y("#b7bcbe",.5,.4),u,!1))}}const mM=(i,t)=>{const e=De(i);e.add(st(560,.6,430,Ke,{y:.3}));const n=Cs({base:"#e6eaec",kind:2,litRatio:.42,roughness:.4});n.userData.dim.set(300,50,240,0),n.userData.win.set(0,2,2,0),n.transparent=!0,n.opacity=.92,Xu(e,130,108,34,50,t,n),e.add(ce(52,52,1.4,24,Y("#2f3438",.7),{y:49.4})),e.add(He(46,52,he("#ffc46a",1.1),51,24));const s=[[-232,-122,110,70,34],[-238,12,96,64,30],[-232,134,84,58,26]];for(const[r,o,a,l,c]of s)e.add(oe(a,c,l,{base:Ht.plasterWarm,kind:2,litRatio:.45},{x:r,z:o})),e.add(Te(a+8,l+8,4,Y("#d8dfe1",.4,.3),r,c,o));return t&&(e.add(Me(24,120,176,160,60,13,101)),e.add(st(120,14,26,xi,{x:120,z:-176,y:7}))),e},gM=(i,t)=>{const e=De(i);if(i.name.includes("音乐")||(i.tag??"").includes("万人")){const s=ys(76,34,3,Y("#eef1f2",.4,.2),0,16,-74);s.scale.set(1,1,.7),s.rotation.y=.5,e.add(s),e.add(st(120,12,40,Y("#4a4e52",.7),{z:-74,y:6}));const r=[];for(let a=0;a<7;a++)for(let l=0;l<5;l++)r.push({x:-96+l*48,z:18+a*26,sx:46,sy:2.4+a*1.1,sz:22});e.add(wt(te,Y("#9a9488",.9),r,!1));const o=[];for(let a=0;a<6;a++){const l=a/6*Math.PI*2;o.push({x:Math.cos(l)*66,z:-74+Math.sin(l)*48,sy:42,sx:1.6,sz:1.6})}return e.add(wt(Ve,sn,o,!1)),t&&e.add(Me(22,0,130,150,60,14,103)),e}const n=Cs({base:"#e9edef",kind:2,litRatio:.4,roughness:.35});return n.userData.dim.set(280,55,230,0),n.userData.win.set(0,2,2,0),n.transparent=!0,n.opacity=.9,e.add(st(360,.6,300,Ke,{y:.3})),Xu(e,142,116,38,55,t,n),e.add(He(92,100,he("#ffd39a",.6),55.6,28,1.2,.95)),t&&(e.add(ce(3,4,62,8,Y("#b0b5b8",.5,.5),{x:-176,z:124})),e.add(Me(18,60,-146,120,40,13,107))),e},_M=(i,t)=>{const e=De(i);e.add(st(300,.6,250,Y("#728c56",.95),{y:.3}));const n=[[-80,-52,80],[60,-62,96],[-40,60,70],[90,58,64]];for(const[c,h,u]of n)e.add(oe(u,16,40,{base:Ht.plasterWarm,kind:2,litRatio:.4},{x:c,z:h})),e.add(Te(u+8,48,4.6,de,c,16,h));const s=[];for(let c=0;c<28;c++){const h=c/28*Math.PI*2;s.push({x:Math.cos(h)*120,z:Math.sin(h)*94,ry:-h,sx:28,sy:2.4,sz:.5})}e.add(wt(te,Y("#8f7a5c",.9),s,!1));const r=[];for(let c=0;c<(t?70:32);c++){const h=Ut(c,17,111)*Math.PI*2,u=58+Ut(c,23,111)*92;r.push({x:Math.cos(h)*u,z:Math.sin(h)*u,sy:7+Ut(c,29,111)*5,sx:.3,sz:.3})}e.add(wt(Ve,Y("#6f9a52",.9),r,!1));const o=[[-28,22,.5],[26,-12,2.1],[72,26,4.3]],a=[],l=[];for(const[c,h,u]of o){const d=Math.cos(u),f=Math.sin(u),g=(p,y)=>[c+p*d+y*f,h-p*f+y*d];a.push({x:c,z:h,y:2.4,ry:u,sx:2.6,sy:2.2,sz:3.6});const[_,m]=g(0,3.6);a.push({x:_,z:m,y:3.6,sx:2,sy:1.9,sz:1.9});for(const[p,y]of[[-1.7,1.4],[1.7,1.4],[-1.6,-1.6],[1.6,-1.6]]){const[S,x]=g(p,y);l.push({x:S,z:x,y:1.2,sx:.9,sy:1.2,sz:.9})}for(const p of[-1,1]){const[y,S]=g(p*1.1,4.2);l.push({x:y,z:S,y:5.3,sx:.7,sy:.7,sz:.7})}}return e.add(wt(pi,Y("#f4f2ee",.7),a)),e.add(wt(pi,Y("#1e1e20",.7),l)),t&&(e.add(st(60,1.2,10,Ke,{y:1.2,z:116})),e.add(Me(14,-96,96,70,40,15,113,Y("#3f6b4a")))),e},xM=(i,t)=>{const e=si(i,i.bearingDeg),n=i.name.includes("东"),s=i.name.includes("北"),r=n?305:s?210:250,o=n?105:s?62:87.5,a=i.heightM??39,l=n?14:s?8:11,c=Y("#c3c9cc",.45,.4);for(const d of[-1,1]){const f=st(o*.56,1.8,r,c,{x:d*o/4,y:a-4});f.rotation.z=-d*.13,e.add(f)}e.add(st(6,2.4,r+6,sn,{y:a-1}));const h=[];for(let d=0;d<Math.round(r/18);d++)for(const f of[-1,1])h.push({x:f*o/2.1,z:-r/2+9+d*18,sy:a-6,sx:1.3,sz:1.3});e.add(wt(Ve,Y("#b4b9bb",.5,.4),h));const u=[];for(let d=0;d<l;d++)u.push({x:-o/2+8+d*(o-16)/Math.max(1,l-1),sy:1.3,sx:6,sz:r*.96});if(e.add(wt(te,Y("#8e8b84",.95),u,!1)),e.add(wt(te,Wu,u.map(d=>({x:d.x,y:.2,z:d.z,sx:2.4,sy:.4,sz:d.sz})),!1)),e.add(oe(n?190:130,a*.66,62,{base:Ht.plasterWarm,kind:2,litRatio:.5},{z:r/2+42})),s&&(e.add(st(26,46,26,Y("#d3d0c8"),{x:-o/2-36,z:-40,y:23})),e.add(ce(.8,2.4,26,6,he("#ff6a52",1.2),{x:-o/2-36,y:59,z:-40}))),t){const d=[];for(let f=0;f<6;f++)d.push({x:0,y:a-8,z:-r/2+f*(r/5),sx:o*1.02,sy:.8,sz:.8});e.add(wt(te,sn,d,!1)),e.add(st(240,.8,60,Ke,{z:r/2+100,y:.4}))}return e};function Ys(i,t,e,n,s){i.add(st(n,.5,e,Wu,{x:t,y:.6}));for(let r=0;r<Math.round(e/90);r++)s.push({x:t,y:.95,z:-e/2+45+r*90,sx:1.6,sy:.3,sz:18})}const vM=(i,t)=>{const e=si(i,20),n=[];e.add(st(1080,.4,3880,Y("#7c7f78",.95),{y:.2,x:-70})),Ys(e,-300,3600,60,n),Ys(e,120,3600,45,n),e.add(wt(te,he("#f2f4f4",.8),n,!1)),e.add(oe(240,30,74,{base:Ht.white,kind:2,litRatio:.45},{x:-660,z:-170})),e.add(oe(430,40,118,{base:Ht.white,kind:2,litRatio:.5},{x:-720,z:270})),e.add(st(620,.5,250,Ke,{x:-340,z:40,y:.5}));for(const a of[-120,40,200])e.add(st(200,12,30,Y("#d9dcdd",.5),{x:-270,z:a,y:6}));e.add(ce(6,9,58,10,Y("#c8ccce",.6),{x:-430,z:440})),e.add(ce(11,8,8,10,xi,{x:-430,y:60,z:440}));const s=[],r=[],o=t?46:22;for(let a=0;a<o;a++){const l=Math.floor(a/12),c=-430+l*150+Ut(a,5,131)*40,h=-300+a%12*56+Ut(a,9,131)*12,u=l%2?.35:-.4;s.push({x:c,z:h,y:1.4,ry:u,sx:4,sy:4,sz:34}),r.push({x:c,z:h,y:2.4,ry:u,sx:36,sy:.8,sz:6})}return e.add(wt(te,Y("#e8eaeb",.5),s,!1)),e.add(wt(te,Y("#dcdfe1",.5),r,!1)),t&&(e.add(st(44,16,300,Y("#9fa4a6",.7),{x:-40,y:8,z:-60})),e.add(Me(14,-830,640,90,60,12,137))),e},MM=(i,t)=>{const e=si(i,18),n=[];e.add(st(1240,.4,4120,Y("#7c7f78",.95),{y:.2,x:70})),Ys(e,-420,4e3,60,n),Ys(e,-160,3800,60,n),Ys(e,600,3200,45,n),e.add(wt(te,he("#f2f4f4",.8),n,!1));const s=Cs({base:Ht.white,kind:2,litRatio:.55,roughness:.4});s.userData.dim.set(260,40,260,0),s.userData.win.set(0,2,2,0);const r=ce(130,130,40,26,s,{z:300});r.castShadow=!0,e.add(r),e.add(ce(96,132,16,26,xi,{y:48,z:300}));for(let l=0;l<6;l++){const c=l/6*Math.PI*2+Math.PI/6,h=Math.sin(c)*250,u=300-Math.cos(c)*250;e.add(oe(58,30,240,{base:"#eef0f1",kind:2,litRatio:.5,roughness:.4},{x:h,z:u,rotY:-c})),t&&e.add(st(60,3,240,he("#9fd8ff",.4),{x:h,y:30,z:u,rotY:-c}))}e.add(ce(214,214,.6,30,Y("#8f9a72",.95),{y:.4,z:300}));const o=[],a=[];for(let l=0;l<(t?40:18);l++){const c=l%6/6*Math.PI*2+Math.PI/6,h=172+Math.floor(l/8)*46,u=(l%8-3.5)*.1,d=Math.sin(c+u)*h,f=300-Math.cos(c+u)*h;o.push({x:d,z:f,y:1.4,ry:-c-u,sx:4,sy:4,sz:32}),a.push({x:d,z:f,y:2.4,ry:-c-u,sx:34,sy:.8,sz:5.6})}return e.add(wt(te,Y("#e8eaeb",.5),o,!1)),e.add(wt(te,Y("#dcdfe1",.5),a,!1)),t&&(e.add(ce(8,12,62,10,Y("#c8ccce",.6),{x:260,z:660})),e.add(oe(120,18,60,{base:Ht.plasterCool,kind:3,litRatio:.3},{x:-370,z:740}))),e},yM=(i,t)=>{const e=De(i);e.add(ce(46,58,4,22,mn,{y:2}));const n=[];for(let r=0;r<16;r++){const o=r/16*Math.PI*2;n.push({x:Math.cos(o)*40,z:Math.sin(o)*40,y:3,sx:2.6,sz:2.6,sy:30,rz:-Math.cos(o)*.3,rx:Math.sin(o)*.3})}e.add(wt(te,Y("#c9a86a",.45,.5),n)),e.add(He(16,44,Y("#d8cdb4",.8),30,26)),e.add(He(14,16.4,he("#ffc46a",1.4),30.8,22)),e.add(ce(13.6,13.6,1.2,20,Y("#3b4046",.7),{y:29.4}));const s=[];for(let r=0;r<30;r++){const o=r/30*Math.PI*2;s.push({x:Math.cos(o)*43,z:Math.sin(o)*43,y:30.2,sy:1.4,sx:.25,sz:.25})}return e.add(wt(Ve,sn,s,!1)),t&&(e.add(oe(28,10,18,{base:Ht.wood,kind:2,litRatio:.4},{x:70,z:22})),e.add(Me(26,0,0,92,78,15,149,Y("#38603f")))),e},SM=(i,t)=>{const e=De(i),n=i.name.includes("电子科技"),s=Y(n?"#b9b3a6":"#a86a52",.85);e.add(wt(te,s,[{x:-22,sx:9,sy:16,sz:7},{x:22,sx:9,sy:16,sz:7},{x:-40,sx:6,sy:9,sz:6},{x:40,sx:6,sy:9,sz:6}])),e.add(st(58,4.6,9,s,{y:18.3})),e.add(st(64,1.8,11,s,{y:21.5})),e.add(Te(70,15,4,de,0,22.4)),e.add(st(44,3.2,.8,he("#e8d9a8",.5),{y:13,z:-4.9})),e.add(st(120,.6,26,Ke,{z:32,y:.3}));const r=76,o=n?54:42;e.add(oe(r,o,40,{base:Ht.brick,kind:1,litRatio:.5},{x:-92,z:-114})),n||e.add(Te(r+12,52,7,de,-92,o,-114));const a=[];for(let l=0;l<(t?4:2);l++)a.push({x:40+l%2*74,z:-70-Math.floor(l/2)*82,sx:52,sy:44+l%3*9,sz:26});return e.add(wt(te,Y(n?"#c3c7cb":"#b07a63",.85),a)),t&&(e.add(Me(20,0,-60,120,90,14,151)),e.add(oe(60,24,34,{base:Ht.concrete,kind:3,litRatio:.4},{x:152,z:62}))),e},bM=(i,t)=>{const e=si(i,311),n=Y("#8c8577",.95),s=Y("#4a7f86",.32,.25);e.add(st(320,.6,900,n,{y:.3,z:-60})),e.add(st(110,.9,860,s,{x:-98,y:.9,z:-60})),e.add(st(140,.9,860,s,{x:102,y:.9,z:-60}));const r=new co;r.moveTo(-28,-60),r.lineTo(28,-60),r.lineTo(0,92),r.closePath();const o=new rr(r,{depth:12,bevelEnabled:!1,curveSegments:1});o.rotateX(-Math.PI/2);const a=new Bt(o,Y("#9c9483",.9));a.position.set(2,.8,0),a.castShadow=!0,e.add(a),e.add(st(14,4,150,Y("#a8a091",.9),{y:2,z:-110}));const l=new Bt(new Hn(120,6,4,16,1.1).rotateX(Math.PI/2),Y("#b0a894",.9));l.position.set(-40,1.6,-250),l.castShadow=!0,e.add(l),e.add(st(30,22,26,Y("#6f6a62",.95),{x:-80,z:-402,y:11})),e.add(st(30,20,26,Y("#6f6a62",.95),{x:-14,z:-402,y:10})),e.add(st(20,1.2,60,s,{x:-47,y:2,z:-390})),e.add(wt(te,Fi,[{x:118,sy:22,sx:4,sz:4},{x:252,sy:22,sx:4,sz:4}]));const c=Y("#5a5148",.6,.5),h=[[118,21],[152,12],[185,9],[218,12],[252,21]];for(const f of[-4.5,4.5])for(let g=0;g<h.length-1;g++)e.add(Kv(h[g][0],h[g][1],h[g+1][0],h[g+1][1],.6,c,f));const u=[],d=[];for(let f=0;f<12;f++){const g=f/11,_=118+g*134,m=21-Math.sin(g*Math.PI)*12;u.push({x:_,y:m-1.4,sx:13,sy:.8,sz:13}),d.push({x:_,y:m,sx:.45,sy:1.4,sz:.45})}e.add(wt(te,Fi,u,!1)),e.add(wt(te,c,d,!1));for(let f=0;f<(t?3:2);f++){const g=f*8;e.add(st(34,10,20,Bn,{x:196,y:g+5,z:-232-f*46})),e.add(Te(42,28,4.6,de,196,g+10,-232-f*46))}return t&&(e.add(Me(24,176,-320,90,130,16,157,Y("#38603f"))),e.add(st(26,3,12,mn,{x:2,y:1.5,z:62}))),e},EM=(i,t)=>{const e=ku(i.p.x,i.p.z)*100,n=l=>Math.max(l-e,320)+(l-4200)*.5,s=si(i,270),r=Y("#6c6660",.95),o=[[0,-1500,6250,1200],[-260,-700,5800,1020],[180,60,5364,1120],[-120,860,4800,960],[220,1480,4200,880]],a=[];for(const[l,c,h,u]of o){const d=n(h),f=new Bt(Ks,r);f.position.set(l,-340,c),f.scale.set(u,d,u*.78),f.castShadow=!0,s.add(f),a.push({x:l,y:d*.55-340,z:c,sx:u*.44,sy:d*.46,sz:u*.34})}if(s.add(wt(Ks,Y("#eef4f8",.6),a,!1)),t){const l=[];for(let c=0;c<7;c++)l.push({x:-900+Ut(c,3,161)*1600,z:-1900+c*600,y:-260,sx:720,sy:380+Ut(c,7,161)*460,sz:540});s.add(wt(Ks,Y("#5f6a58",.95),l,!1))}return s},TM=(i,t)=>{const e=si(i,i.bearingDeg+90),n=Y("#b8371f",.5,.35),s=new Bt(new Hn(26,1.9,6,26,Math.PI),n);s.position.y=4,s.castShadow=!0,e.add(s);const r=new Bt(new Hn(23,1.1,5,24,Math.PI),n);r.position.y=4,e.add(r);const o=[];for(const l of[-1,1]){for(let c=0;c<5;c++){const h=(.22+c*.16)*Math.PI;o.push({x:l*Math.cos(h)*24.5,y:4+Math.sin(h)*24.5,rz:l>0?h:Math.PI-h,sx:3.4,sy:.7,sz:.7})}e.add(st(2.4,8,6,mn,{x:l*26}))}e.add(wt(te,n,o,!1)),e.add(st(9,.7,190,Y("#3f7f6a",.85),{y:.9})),e.add(st(5,.6,190,Y("#8f8b82",.95),{z:9,y:.8}));const a=[];for(let l=0;l<10;l++)a.push({x:-7,z:-90+l*20,sy:5.4,sx:.28,sz:.28});return e.add(wt(Ve,sn,a,!1)),e.add(wt(te,he("#ffd7a0",1),a.map(l=>({x:l.x,y:5.6,z:l.z,sx:.8,sy:.5,sz:1.8})),!1)),t&&(e.add(st(16,5,7,Bn,{x:44,z:26})),e.add(st(12,3.4,.6,he("#7cd0a0",.7),{x:44,y:4,z:22.4})),e.add(Me(16,0,66,90,40,13,163))),e},wM={tianfuSquare:qv,hallBlock:jv,temple:Zv,oldStreet:$v,thatchedCottage:Jv,jinsha:Qv,taikooLi:tM,ifsPanda:eM,tvTower:nM,pavilion:iM,stoneBridge:sM,wangjiangLou:rM,monument:oM,globalCenter:aM,twinTowers:lM,jiaoziRing:cM,euCenter:hM,officePark:uM,cbdSupertall:dM,expoHall:fM,lakeCampus:pM,donganhu:mM,danjingTai:yM,stadium:gM,pandaBase:_M,stationRoof:xM,airport:vM,airportTianfu:MM,campusGate:SM,dujiangyanWeir:bM,snowPeaks:EM,greenwayArch:TM};function AM(i,t,e){const n=wM[i];return!n||!t||!t.p?null:n(t,e)}function Rh(i,t){const e=t?.detailed??!0,n=new dn;n.name="landmarks";for(const r of Ms){const o=r.model;if(!o)continue;const a=AM(o,r,e);a&&(a.name=`landmark:${r.id}`,a.userData={poiId:r.id,name:r.name,blurb:r.blurb,heightM:r.heightM??0,tag:r.tag??""},n.add(a))}const s=i.getObjectByName("landmarks");return s&&s!==n&&i.remove(s),i.add(n),n}const RM=new Set([te,Ve,Ks,Hl,pi,hr]);function CM(i){i.traverse(t=>{const e=t;e.geometry&&!RM.has(e.geometry)&&e.geometry.dispose()}),i.parent?.remove(i)}const cl=document.getElementById("stage"),Ch=document.getElementById("boot"),Ku=document.getElementById("boot-msg"),PM=document.getElementById("boot-fill"),hl=document.getElementById("labels");function DM(){return new Promise(i=>{let t=!1;const e=()=>{t||(t=!0,i())};requestAnimationFrame(e),window.setTimeout(e,32)})}async function Ln(i,t,e){Ku.textContent=i,PM.style.width=`${t}%`,await DM(),e()}const Ie=new Ox,ne=new Ix(cl),ul=new Fx(ne.scene);ne.sunLight=ul.sun;const Ee={roads:null,water:null,green:null,metro:null,buildings:null,landmarks:null};let oo=0,vn;function LM(i,t=220){const e=[];for(let n=0;n<t;n++)e.push(Rs(i,n/t*360));return e}function ia(i){const t=ne.scene.getObjectByName("band-overlay");t&&(t.traverse(a=>{const l=a;l.geometry?.dispose(),l.material?.dispose()}),ne.scene.remove(t));const e=i?gi.indexOf(i):-1;if(Zt.uBandSel.value=e,e<0)return;const{innerKm:n,outerKm:s}=nl(e),r=new dn;r.name="band-overlay";const o=new sr({color:"#ffc76b",transparent:!0,opacity:.55,side:wn});for(const a of[n,Math.min(s,40)]){if(a<=.05)continue;const l=LM(a),c=po(l,{widthAt:()=>.055,yAt:u=>{const d=l[Math.min(l.length-1,Math.round(u*(l.length-1)))];return Ye(d.x,d.z)+.05},closed:!0}),h=new Bt(c,o);h.renderOrder=4,r.add(h)}ne.scene.add(r)}function IM(i,t){const e=new me;i.getMatrixAt(t,e);const n=new L,s=new ni,r=new L;e.decompose(n,s,r);const o=Math.round(r.x*100),a=Math.round(r.z*100),l=Math.round(r.y*100),c=i.geometry.getAttribute("aBand"),h=c?c.getX(t):-1,u=Number(i.name.replace("buildings-kind",""))||0,d=["住宅（带阳台）","办公幕墙","商业裙房","工业厂房"][u]??"建筑",f={x:n.x,z:n.z},g=Ru(n.x,n.z),_=Iu(f);return{kind:`${gi[h]??"圈层未知"} · ${d}`,title:`${_?.name??"成都市"} 街区体量`,body:"这栋楼不是手工摆的：程序按「所在圈层基准高度 + 副中心强度 + 街区临路宽 + 随机起伏」推出体量，再用极坐标格网和环—放射路网咬合。点空地看行政区，点地标记它的资料。",facts:[["估算尺寸",`${o} × ${a} m，高 ${l} m（约 ${Math.max(1,Math.round(l/3.4))} 层）`],["所在圈层",gi[h]??"—"],["距天府广场",`${ar(f).toFixed(2)} km`],["经纬度",`${g.lat.toFixed(4)}°N，${g.lon.toFixed(4)}°E`]]}}function UM(i){const t=Iu(i),e=ar(i),n=Ru(i.x,i.z),s=NM(i).index;return{kind:"地面 · 未建模区域",title:t?t.name:"成都平原",body:t?`${t.note}。行政区在本沙盘里按「方位角 + 里程」扇区近似，不是法定界线。`:"成都平原海拔约 500 m，城区相对高差按 0 处理；真正的起伏在西侧龙门山和东侧龙泉山。",facts:[["距天府广场",`${e.toFixed(2)} km · 方位 ${((Math.atan2(i.x,-i.z)*180/Math.PI+360)%360).toFixed(0)}°`],["所在圈层",gi[s]??"绕城以外"],["海拔（相对）",`${(Ye(i.x,i.z)*100).toFixed(0)} m`],["经纬度",`${n.lat.toFixed(4)}°N，${n.lon.toFixed(4)}°E`]]}}function NM(i){const t=ar(i);for(let e=gi.length-1;e>=0;e--){const n=nl(e);if(t>=n.innerKm)return{index:e,...n}}return{index:0,...nl(0)}}let Yu=[];function FM(){hl.textContent="",Yu=Ms.map(i=>{const t=document.createElement("div"),e=(i.heightM??0)>=150||i.category==="core"||i.category==="nature";t.className=e?"lbl is-key":"lbl",t.textContent=i.name,t.hidden=!0;const n=Ye(i.p.x,i.p.z)+Math.max(.35,(i.heightM??0)/100+.22);return hl.append(t),{poi:i,el:t,pos:new L(i.p.x,n,i.p.z),key:e}})}const is=new L;function zM(i){const t=new Set,e=Yu.slice().sort((n,s)=>(s.poi.heightM??0)-(n.poi.heightM??0));for(const n of e){const s=i.distanceTo(n.pos);if((n.key?s>900:s>135)||ne.mode==="map"&&!n.key){n.el.hidden=!0;continue}if(is.copy(n.pos).project(ne.camera),is.z>1||Math.abs(is.x)>1||Math.abs(is.y)>1){n.el.hidden=!0;continue}const r=(is.x*.5+.5)*window.innerWidth,o=(-is.y*.5+.5)*window.innerHeight,a=`${Math.round(r/96)}:${Math.round(o/20)}`;if(t.has(a)){n.el.hidden=!0;continue}t.add(a),n.el.hidden=!1,n.el.style.transform=`translate(-50%, -120%) translate(${r.toFixed(0)}px, ${o.toFixed(0)}px)`}}function dl(i){const t=[["roads","roads"],["water","water"],["green","green"],["metro","metro"],["buildings","buildings"],["landmarks","landmarks"],["terrain","terrain"]];for(const[n,s]of t){const r=ne.scene.getObjectByName(s);r&&(r.visible=i[n])}const e=ne.scene.getObjectByName("traffic");e&&(e.visible=i.roads&&i.traffic),hl.style.display=i.labels?"":"none"}function OM(){Ee.roads?.dispose(),Ee.green?.dispose(),Ee.buildings?.dispose(),Ee.landmarks&&CM(Ee.landmarks),Ee.roads=null,Ee.green=null,Ee.buildings=null,Ee.landmarks=null}async function Ph(i,t){const e=i!=="low";t?(await Ln("铺设地形：龙门山 · 龙泉山 · 成都平原",12,()=>{ne.scene.getObjectByName("terrain")||av(ne.scene)}),await Ln("绘制锦江 · 府河 · 湖库水面",24,()=>{Ee.water=wv(ne.scene)}),await Ln("画出环 + 放射路网与高架桥墩",38,()=>{Ee.roads=ph(ne.scene,i)}),await Ln("铺公园 · 环城生态公园 · 行道树",52,()=>{Ee.green=xh(ne.scene,i)}),await Ln("拉出轨道交通线网与站点",62,()=>{Ee.metro=Pv(ne.scene)}),await Ln("生成建筑体量（InstancedMesh）",80,()=>{Ee.buildings=bh(ne.scene,i),oo=Ee.buildings.count}),await Ln("摆下成都地标与交通枢纽",95,()=>{Ee.landmarks=Rh(ne.scene,{detailed:e})})):(OM(),await Ln("按新画质重建路网与绿地",40,()=>{Ee.roads=ph(ne.scene,i),Ee.green=xh(ne.scene,i)}),await Ln("重铺建筑体量",70,()=>{Ee.buildings=bh(ne.scene,i),oo=Ee.buildings.count}),await Ln("重铺地标细节",90,()=>{Ee.landmarks=Rh(ne.scene,{detailed:e})})),FM(),dl(Ie.state.layers)}const Dh=new xp,Lh=new it;function BM(i,t){if(!Ee.buildings)return;Lh.set(i/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),Dh.setFromCamera(Lh,ne.camera);const e=[Ee.landmarks,Ee.buildings.group,ne.scene.getObjectByName("terrain")].filter(Boolean),n=Dh.intersectObjects(e,!0);for(const s of n){if(!s.object.visible)continue;let r=s.object;for(;r;){const a=r.userData?.poiId;if(a){const l=Ms.find(c=>c.id===a);if(l){Ie.set({poiId:l.id}),vn.showCard(Bl(l));return}}r=r.parent}const o=s.object;if(o.isInstancedMesh&&o.name.startsWith("buildings-kind")&&s.instanceId!==void 0){vn.showCard(IM(o,s.instanceId));return}if(s.object.name==="terrain"){Ie.set({poiId:null}),vn.showCard(UM({x:s.point.x,z:s.point.z}));return}}vn.hidePoi()}const qu=new xu;let Hs=Ie.state.hour,sa=0,Kr=0,ra=0,Ih=0;function ju(){requestAnimationFrame(ju);const i=Math.min(.05,qu.getDelta()),t=Ie.state;if(Hs=(Hs+i*t.speed+24)%24,sa+=i,sa>.3&&(sa=0,Ie.set({hour:Hs},!1)),Zt.uTime.value+=i,Zt.uLitGain.value=t.litRatio/.5,ul.setWeather(t.weather),ul.update(Hs,ne.camera.position,i),ne.update(i),Ee.roads?.update(i),ne.render(),Kr+=i,ra++,Kr>=.4){const e=ne.renderer.info.render;vn.setStats(ra/Kr*1,e.triangles,e.calls,oo),Kr=0,ra=0}Ih++,Ih%2===0&&t.layers.labels&&zM(ne.camera.position)}function to(i){Ie.set({view:i}),ne.applyMode(i)}function kM(i){let t=0,e=0,n=0;cl.addEventListener("pointerdown",s=>{t=s.clientX,e=s.clientY,n=performance.now()}),cl.addEventListener("pointerup",s=>{Math.hypot(s.clientX-t,s.clientY-e)<6&&performance.now()-n<450&&BM(s.clientX,s.clientY)}),window.addEventListener("resize",()=>ne.resize()),window.addEventListener("keydown",s=>{const r=s.target?.tagName;if(r==="INPUT"||r==="TEXTAREA")return;const o=s.key.toLowerCase();o==="1"?to("sandbox"):o==="2"?to("panorama"):o==="3"?to("map"):o==="r"?ne.resetView():o==="n"?Ie.set({hour:21.6}):o==="d"?Ie.set({hour:12.4}):o==="h"?i.classList.toggle("is-hidden"):o===" "&&(Ie.set({speed:Ie.state.speed>0?0:.35}),s.preventDefault())})}async function HM(){ne.applyMode(Ie.state.view,!0),ne.setQuality(Ie.state.quality),await Ph(Ie.state.quality,!0),ia(Ie.state.band),vn=fv(Ie,{flyTo(t){ne.focusPlanar(t.p,t.flyKm??1.2,Ie.state.view==="panorama"?.22:.5),vn.showCard(Bl(t))},setView:to,setQuality(t){ne.setQuality(t),Ph(t,!1)},applyLayers:dl,setBand:ia,reset(){Ie.reset(),ne.setQuality(Ie.state.quality),ne.applyMode(Ie.state.view,!0),ia(Ie.state.band),dl(Ie.state.layers)}}),document.body.append(vn.root,vn.hud,vn.info);const i=document.createElement("button");i.className="panel-toggle",i.type="button",i.textContent="控制台",i.addEventListener("click",()=>vn.root.classList.toggle("is-open")),document.body.append(i),kM(vn.root),Ku.textContent=`已生成 ${oo.toLocaleString("zh-CN")} 栋建筑 · ${Ms.length} 处地标 · ${Qr(Hs)}`,Ch.classList.add("is-done"),window.setTimeout(()=>Ch.remove(),800),qu.start(),ju()}HM();
