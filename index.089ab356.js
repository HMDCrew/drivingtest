/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */let e,t,i;const n="srgb",r="srgb-linear",s="display-p3",a="300 es";/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */class o{addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let i=this._listeners;void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(t)&&i[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let i=this._listeners;return void 0!==i[e]&&-1!==i[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let i=this._listeners,n=i[e];if(void 0!==n){let e=n.indexOf(t);-1!==e&&n.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners,i=t[e.type];if(void 0!==i){e.target=this;// Make a copy, in case listeners are removed while iterating.
let t=i.slice(0);for(let i=0,n=t.length;i<n;i++)t[i].call(this,e);e.target=null}}}const l=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let h=1234567;const u=Math.PI/180,c=180/Math.PI;// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function d(){let e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=l[255&e]+l[e>>8&255]+l[e>>16&255]+l[e>>24&255]+"-"+l[255&t]+l[t>>8&255]+"-"+l[t>>16&15|64]+l[t>>24&255]+"-"+l[63&i|128]+l[i>>8&255]+"-"+l[i>>16&255]+l[i>>24&255]+l[255&n]+l[n>>8&255]+l[n>>16&255]+l[n>>24&255];// .toLowerCase() here flattens concatenated strings to save heap memory space.
return r.toLowerCase()}function p(e,t,i){return Math.max(t,Math.min(i,e))}// compute euclidean modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
function f(e,t){return(e%t+t)%t}// https://en.wikipedia.org/wiki/Linear_interpolation
function m(e,t,i){return(1-i)*e+i*t}function g(e){return(e&e-1)==0&&0!==e}function _(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function v(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function x(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function y(e,t){switch(t.constructor){case Float32Array:return e;case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw Error("Invalid component type.")}}const M={DEG2RAD:u,RAD2DEG:c,generateUUID:d,clamp:p,euclideanModulo:f,mapLinear:// Linear mapping from range <a1, a2> to range <b1, b2>
function(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)},inverseLerp:// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
function(e,t,i){return e!==t?(i-e)/(t-e):0},lerp:m,damp:// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
function(e,t,i,n){return m(e,t,1-Math.exp(-i*n))},pingpong:// https://www.desmos.com/calculator/vcsjnyz7x4
function(e,t=1){return t-Math.abs(f(e,2*t)-t)},smoothstep:// http://en.wikipedia.org/wiki/Smoothstep
function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t))*e*(3-2*e)},smootherstep:function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t))*e*e*(e*(6*e-15)+10)},randInt:// Random integer from <low, high> interval
function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:// Random float from <low, high> interval
function(e,t){return e+Math.random()*(t-e)},randFloatSpread:// Random float from <-range/2, range/2> interval
function(e){return e*(.5-Math.random())},seededRandom:// Deterministic pseudo-random float in the interval [ 0, 1 ]
function(e){void 0!==e&&(h=e);// Mulberry32 generator
let t=h+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296},degToRad:function(e){return e*u},radToDeg:function(e){return e*c},isPowerOfTwo:g,ceilPowerOfTwo:_,floorPowerOfTwo:v,setQuaternionFromProperEuler:function(e,t,i,n,r){// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles
// rotations are applied to the axes in the order specified by 'order'
// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
// angles are in radians
let s=Math.cos,a=Math.sin,o=s(i/2),l=a(i/2),h=s((t+n)/2),u=a((t+n)/2),c=s((t-n)/2),d=a((t-n)/2),p=s((n-t)/2),f=a((n-t)/2);switch(r){case"XYX":e.set(o*u,l*c,l*d,o*h);break;case"YZY":e.set(l*d,o*u,l*c,o*h);break;case"ZXZ":e.set(l*c,l*d,o*u,o*h);break;case"XZX":e.set(o*u,l*f,l*p,o*h);break;case"YXY":e.set(l*p,o*u,l*f,o*h);break;case"ZYZ":e.set(l*f,l*p,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:y,denormalize:x};class w{constructor(e=0,t=0){w.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return(// assumes min < max, componentwise
this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this)}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){// computes the angle in radians with respect to the positive x-axis
let e=Math.atan2(-this.y,-this.x)+Math.PI;return e}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(0===t)return Math.PI/2;let i=this.dot(e)/t;// clamp, to handle numerical problems
return Math.acos(p(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class S{constructor(){S.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,r,s,a,o,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=o,h[6]=i,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],h=i[4],u=i[7],c=i[2],d=i[5],p=i[8],f=n[0],m=n[3],g=n[6],_=n[1],v=n[4],x=n[7],y=n[2],M=n[5],w=n[8];return r[0]=s*f+a*_+o*y,r[3]=s*m+a*v+o*M,r[6]=s*g+a*x+o*w,r[1]=l*f+h*_+u*y,r[4]=l*m+h*v+u*M,r[7]=l*g+h*x+u*w,r[2]=c*f+d*_+p*y,r[5]=c*m+d*v+p*M,r[8]=c*g+d*x+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],h=e[8];return t*s*h-t*a*l-i*r*h+i*a*o+n*r*l-n*s*o}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],h=e[8],u=h*s-a*l,c=a*o-h*r,d=l*r-s*o,p=t*u+i*c+n*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);let f=1/p;return e[0]=u*f,e[1]=(n*l-h*i)*f,e[2]=(a*i-n*s)*f,e[3]=c*f,e[4]=(h*t-n*o)*f,e[5]=(n*r-a*t)*f,e[6]=d*f,e[7]=(i*o-l*t)*f,e[8]=(s*t-i*r)*f,this}transpose(){let e;let t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,a){let o=Math.cos(r),l=Math.sin(r);return this.set(i*o,i*l,-i*(o*s+l*a)+s+e,-n*l,n*o,-n*(-l*s+o*a)+a+t,0,0,1),this}//
scale(e,t){return this.premultiply(b.makeScale(e,t)),this}rotate(e){return this.premultiply(b.makeRotation(-e)),this}translate(e,t){return this.premultiply(b.makeTranslation(e,t)),this}// for 2D Transforms
makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){// counterclockwise
let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}//
equals(e){let t=this.elements,i=e.elements;for(let e=0;e<9;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const b=/*@__PURE__*/new S;function T(e){// assumes larger values usually on last
for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;// account for PRIMITIVE_RESTART_FIXED_INDEX, #24565
return!1}function A(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function E(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function C(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array;/**
 * Matrices converting P3 <-> Rec. 709 primaries, without gamut mapping
 * or clipping. Based on W3C specifications for sRGB and Display P3,
 * and ICC specifications for the D50 connection space. Values in/out
 * are _linear_ sRGB and _linear_ Display P3.
 *
 * Note that both sRGB and Display P3 use the sRGB transfer functions.
 *
 * Reference:
 * - http://www.russellcottrell.com/photo/matrixCalculator.htm
 */const R=/*@__PURE__*/new S().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-.0000001,1e-7,.9105199]),P=/*@__PURE__*/new S().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),L={[r]:e=>e,[n]:e=>e.convertSRGBToLinear(),[s]:function(e){// Display P3 uses the sRGB transfer functions
return e.convertSRGBToLinear().applyMatrix3(P)}},D={[r]:e=>e,[n]:e=>e.convertLinearToSRGB(),[s]:function(e){// Display P3 uses the sRGB transfer functions
return e.applyMatrix3(R).convertLinearToSRGB()}},O={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(legacyMode){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!legacyMode},get workingColorSpace(){return r},set workingColorSpace(colorSpace){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(e,t,i){if(!1===this.enabled||t===i||!t||!i)return e;let n=L[t],r=D[i];if(void 0===n||void 0===r)throw Error(`Unsupported color space conversion, "${t}" to "${i}".`);return r(n(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)}};class I{static getDataURL(t){let i;if(/^data:/i.test(t.src)||"undefined"==typeof HTMLCanvasElement)return t.src;if(t instanceof HTMLCanvasElement)i=t;else{void 0===e&&(e=A("canvas")),e.width=t.width,e.height=t.height;let n=e.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=e}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){let t=A("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let e=0;e<r.length;e++)r[e]=255*E(r[e]/255);return i.putImageData(n,0,0),t}if(!e.data)return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e;{let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*E(t[e]/255)):t[e]=E(t[e]);return{data:t,width:e.width,height:e.height}}}}class N{constructor(e=null){this.isSource=!0,this.uuid=d(),this.data=e,this.version=0}set needsUpdate(e){!0===e&&this.version++}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.images[this.uuid])return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(null!==n){let e;if(Array.isArray(n)){// cube texture
e=[];for(let t=0,i=n.length;t<i;t++)n[t].isDataTexture?e.push(z(n[t].image)):e.push(z(n[t]))}else e=z(n);i.url=e}return t||(e.images[this.uuid]=i),i}}function z(e){return"undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap?I.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U=0;class k extends o{constructor(e=k.DEFAULT_IMAGE,t=k.DEFAULT_MAPPING,i=1001,n=1001,r=1006,s=1008,a=1023,o=1009,l=k.DEFAULT_ANISOTROPY,h=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U++}),this.uuid=d(),this.name="",this.source=new N(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new w(0,0),this.repeat=new w(1,1),this.center=new w(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new S,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,// Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
//
// Also changing the encoding after already used by a Material will not automatically make the Material
// update. You need to explicitly call Material.needsUpdate to trigger it to recompile.
this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(300!==this.mapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}}k.DEFAULT_IMAGE=null,k.DEFAULT_MAPPING=300,k.DEFAULT_ANISOTROPY=1;class B{constructor(e=0,t=0,i=0,n=1){B.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
// q is assumed to be normalized
this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n;let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],h=r[5],u=r[9],c=r[2],d=r[6],p=r[10];if(.01>Math.abs(a-l)&&.01>Math.abs(o-c)&&.01>Math.abs(u-d)){// singularity found
// first check for identity matrix which must have +1 for all terms
// in leading diagonal and zero in other terms
if(.1>Math.abs(a+l)&&.1>Math.abs(o+c)&&.1>Math.abs(u+d)&&.1>Math.abs(s+h+p-3))return(// this singularity is identity matrix so angle = 0
this.set(1,0,0,0),this);// zero angle, arbitrary axis
let e=(s+1)/2,r=(h+1)/2,f=(p+1)/2,m=(a+l)/4,g=(o+c)/4,_=(u+d)/4;return e>r&&e>f?e<.01?(t=0,i=.707106781,n=.707106781):(i=m/(t=Math.sqrt(e)),n=g/t):r>f?r<.01?(t=.707106781,i=0,n=.707106781):(t=m/(i=Math.sqrt(r)),n=_/i):f<.01?(t=.707106781,i=.707106781,n=0):(t=g/(n=Math.sqrt(f)),i=_/n),this.set(t,i,n,Math.PI),this;// return 180 deg rotation
}// as we have reached here there are no singularities so we can handle normally
let f=Math.sqrt((d-u)*(d-u)+(o-c)*(o-c)+(l-a)*(l-a));// used to normalize
return .001>Math.abs(f)&&(f=1),// prevent divide by zero, should not happen if matrix is orthogonal and should be
// caught by singularity test above, but I've left it in just in case
this.x=(d-u)/f,this.y=(o-c)/f,this.z=(l-a)/f,this.w=Math.acos((s+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return(// assumes min < max, componentwise
this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this)}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/class F extends o{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new B(0,0,e,t),this.scissorTest=!1,this.viewport=new B(0,0,e,t),this.texture=new k({width:e,height:t,depth:1},i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==i.generateMipmaps&&i.generateMipmaps,this.texture.internalFormat=void 0!==i.internalFormat?i.internalFormat:null,this.texture.minFilter=void 0!==i.minFilter?i.minFilter:1006,this.depthBuffer=void 0===i.depthBuffer||i.depthBuffer,this.stencilBuffer=void 0!==i.stencilBuffer&&i.stencilBuffer,this.depthTexture=void 0!==i.depthTexture?i.depthTexture:null,this.samples=void 0!==i.samples?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;// ensure image object is not shared, see #20328
let t=Object.assign({},e.texture.image);return this.texture.source=new N(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class V extends k{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,a){// fuzz-free, array-based Quaternion SLERP operation
let o=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],c=r[s+0],d=r[s+1],p=r[s+2],f=r[s+3];if(0===a){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(1===a){e[t+0]=c,e[t+1]=d,e[t+2]=p,e[t+3]=f;return}if(u!==f||o!==c||l!==d||h!==p){let e=1-a,t=o*c+l*d+h*p+u*f,i=t>=0?1:-1,n=1-t*t;// Skip the Slerp for tiny steps to avoid numeric problems:
if(n>Number.EPSILON){let r=Math.sqrt(n),s=Math.atan2(r,t*i);e=Math.sin(e*s)/r,a=Math.sin(a*s)/r}let r=a*i;// Normalize in case we just did a lerp:
if(o=o*e+c*r,l=l*e+d*r,h=h*e+p*r,u=u*e+f*r,e===1-a){let e=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=e,l*=e,h*=e,u*=e}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,s){let a=i[n],o=i[n+1],l=i[n+2],h=i[n+3],u=r[s],c=r[s+1],d=r[s+2],p=r[s+3];return e[t]=a*p+h*u+o*d-l*c,e[t+1]=o*p+h*c+l*u-a*d,e[t+2]=l*p+h*d+a*c-o*u,e[t+3]=h*p-a*u-o*c-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,n=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(i/2),h=a(n/2),u=a(r/2),c=o(i/2),d=o(n/2),p=o(r/2);switch(s){case"XYZ":this._x=c*h*u+l*d*p,this._y=l*d*u-c*h*p,this._z=l*h*p+c*d*u,this._w=l*h*u-c*d*p;break;case"YXZ":this._x=c*h*u+l*d*p,this._y=l*d*u-c*h*p,this._z=l*h*p-c*d*u,this._w=l*h*u+c*d*p;break;case"ZXY":this._x=c*h*u-l*d*p,this._y=l*d*u+c*h*p,this._z=l*h*p+c*d*u,this._w=l*h*u-c*d*p;break;case"ZYX":this._x=c*h*u-l*d*p,this._y=l*d*u+c*h*p,this._z=l*h*p-c*d*u,this._w=l*h*u+c*d*p;break;case"YZX":this._x=c*h*u+l*d*p,this._y=l*d*u+c*h*p,this._z=l*h*p-c*d*u,this._w=l*h*u-c*d*p;break;case"XZY":this._x=c*h*u-l*d*p,this._y=l*d*u-c*h*p,this._z=l*h*p+c*d*u,this._w=l*h*u+c*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return!1!==t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
// assumes axis is normalized
let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
let t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],h=t[6],u=t[10],c=i+a+u;if(c>0){let e=.5/Math.sqrt(c+1);this._w=.25/e,this._x=(h-o)*e,this._y=(r-l)*e,this._z=(s-n)*e}else if(i>a&&i>u){let e=2*Math.sqrt(1+i-a-u);this._w=(h-o)/e,this._x=.25*e,this._y=(n+s)/e,this._z=(r+l)/e}else if(a>u){let e=2*Math.sqrt(1+a-i-u);this._w=(r-l)/e,this._x=(n+s)/e,this._y=.25*e,this._z=(o+h)/e}else{let e=2*Math.sqrt(1+u-i-a);this._w=(s-n)/e,this._x=(r+l)/e,this._y=(o+h)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){// assumes direction vectors vFrom and vTo are normalized
let i=e.dot(t)+1;return i<Number.EPSILON?(// vFrom and vTo point in opposite directions
i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0):(this._x=0,this._y=-e.z,this._z=e.y)):(// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3
this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x),this._w=i,this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(p(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);return 0===i||this.slerp(e,Math.min(1,t/i)),this}identity(){return this.set(0,0,0,1)}invert(){// quaternion is assumed to have unit length
return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
let i=e._x,n=e._y,r=e._z,s=e._w,a=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+s*a+n*l-r*o,this._y=n*h+s*o+r*a-i*l,this._z=r*h+s*l+i*o-n*a,this._w=s*h-i*a-n*o-r*l,this._onChangeCallback(),this}slerp(e,t){if(0===t)return this;if(1===t)return this.copy(e);let i=this._x,n=this._y,r=this._z,s=this._w,a=s*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=n,this._z=r,this;let o=1-a*a;if(o<=Number.EPSILON){let e=1-t;return this._w=e*s+t*this._w,this._x=e*i+t*this._x,this._y=e*n+t*this._y,this._z=e*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(o),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,c=Math.sin(t*h)/l;return this._w=s*u+this._w*c,this._x=i*u+this._x*c,this._y=n*u+this._y*c,this._z=r*u+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){// Derived from http://planning.cs.uiuc.edu/node198.html
// Note, this source uses w, x, y, z ordering,
// so we swap the order below.
let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return void 0===i&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(q.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(q.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,a=e.z,o=e.w,l=o*t+s*n-a*i,h=o*i+a*t-r*n,u=o*n+r*i-s*t,c=-r*t-s*i-a*n;return(// calculate result * inverse quat
this.x=l*o+-(c*r)+-(h*a)- -(u*s),this.y=h*o+-(c*s)+-(u*r)- -(l*a),this.z=u*o+-(c*a)+-(l*s)- -(h*r),this)}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){// input: THREE.Matrix4 affine matrix
// vector interpreted as a direction
let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return(// assumes min < max, componentwise
this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this)}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}// TODO lengthSquared?
lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=n*o-r*a,this.y=r*s-i*o,this.z=i*a-n*s,this}projectOnVector(e){let t=e.lengthSq();if(0===t)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return W.copy(this).projectOnVector(e),this.sub(W)}reflect(e){// reflect incident vector off plane orthogonal to normal
// normal is assumed to have unit length
return this.sub(W.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(0===t)return Math.PI/2;let i=this.dot(e)/t;// clamp, to handle numerical problems
return Math.acos(p(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){// Derived from https://mathworld.wolfram.com/SpherePointPicking.html
let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const W=/*@__PURE__*/new G,q=/*@__PURE__*/new H;class j{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(X.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(X.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=X.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(// Computes the world-axis-aligned bounding box of an object (including its children),
// accounting for both the object's, and children's, world transforms
e.updateWorldMatrix(!1,!1),void 0!==e.boundingBox)null===e.boundingBox&&e.computeBoundingBox(),Y.copy(e.boundingBox),Y.applyMatrix4(e.matrixWorld),this.union(Y);else{let i=e.geometry;if(void 0!==i){if(t&&void 0!==i.attributes&&void 0!==i.attributes.position){let t=i.attributes.position;for(let i=0,n=t.count;i<n;i++)X.fromBufferAttribute(t,i).applyMatrix4(e.matrixWorld),this.expandByPoint(X)}else null===i.boundingBox&&i.computeBoundingBox(),Y.copy(i.boundingBox),Y.applyMatrix4(e.matrixWorld),this.union(Y)}}let i=e.children;for(let e=0,n=i.length;e<n;e++)this.expandByObject(i[e],t);return this}containsPoint(e){return!(e.x<this.min.x)&&!(e.x>this.max.x)&&!(e.y<this.min.y)&&!(e.y>this.max.y)&&!(e.z<this.min.z)&&!(e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){// This can potentially have a divide by zero if the box
// has a size dimension of 0.
return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){// using 6 splitting planes to rule out intersections.
return!(e.max.x<this.min.x)&&!(e.min.x>this.max.x)&&!(e.max.y<this.min.y)&&!(e.min.y>this.max.y)&&!(e.max.z<this.min.z)&&!(e.min.z>this.max.z)}intersectsSphere(e){// If that point is inside the sphere, the AABB and sphere intersect.
return(// Find the point on the AABB closest to the sphere center.
this.clampPoint(e.center,X),X.distanceToSquared(e.center)<=e.radius*e.radius)}intersectsPlane(e){// We compute the minimum and maximum dot product values. If those values
// are on the same side (back or front) of the plane, then there is no intersection.
let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;// compute box center and extents
this.getCenter(ei),en.subVectors(this.max,ei),// translate triangle to aabb origin
K.subVectors(e.a,ei),Z.subVectors(e.b,ei),Q.subVectors(e.c,ei),// compute edge vectors for triangle
$.subVectors(Z,K),ee.subVectors(Q,Z),et.subVectors(K,Q);// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
let t=[0,-$.z,$.y,0,-ee.z,ee.y,0,-et.z,et.y,$.z,0,-$.x,ee.z,0,-ee.x,et.z,0,-et.x,-$.y,$.x,0,-ee.y,ee.x,0,-et.y,et.x,0];return!!(ea(t,K,Z,Q,en)&&ea(// test 3 face normals from the aabb
t=[1,0,0,0,1,0,0,0,1],K,Z,Q,en))&&(// finally testing the face normal of the triangle
// use already existing triangle edge vectors here
er.crossVectors($,ee),ea(t=[er.x,er.y,er.z],K,Z,Q,en))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,X).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(X).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(// NOTE: I am using a binary pattern to specify all 2^3 combinations below
J[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),J[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),J[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),J[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),J[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),J[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),J[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),J[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(J)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const J=[/*@__PURE__*/new G,/*@__PURE__*/new G,/*@__PURE__*/new G,/*@__PURE__*/new G,/*@__PURE__*/new G,/*@__PURE__*/new G,/*@__PURE__*/new G,/*@__PURE__*/new G],X=/*@__PURE__*/new G,Y=/*@__PURE__*/new j,K=/*@__PURE__*/new G,Z=/*@__PURE__*/new G,Q=/*@__PURE__*/new G,$=/*@__PURE__*/new G,ee=/*@__PURE__*/new G,et=/*@__PURE__*/new G,ei=/*@__PURE__*/new G,en=/*@__PURE__*/new G,er=/*@__PURE__*/new G,es=/*@__PURE__*/new G;function ea(e,t,i,n,r){for(let s=0,a=e.length-3;s<=a;s+=3){es.fromArray(e,s);// project the aabb onto the separating axis
let a=r.x*Math.abs(es.x)+r.y*Math.abs(es.y)+r.z*Math.abs(es.z),o=t.dot(es),l=i.dot(es),h=n.dot(es);// actual test, basically see if either of the most extreme of the triangle points intersects r
if(Math.max(-Math.max(o,l,h),Math.min(o,l,h))>a)// the axis is separating and we can exit
return!1}return!0}const eo=/*@__PURE__*/new j,el=/*@__PURE__*/new G,eh=/*@__PURE__*/new G;class eu{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;void 0!==t?i.copy(t):eo.setFromPoints(e).getCenter(i);let n=0;for(let t=0,r=e.length;t<r;t++)n=Math.max(n,i.distanceToSquared(e[t]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?// Empty sphere produces empty bounding box
e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius)),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);let t=el.lengthSq();if(t>this.radius*this.radius){// calculate the minimal sphere
let e=Math.sqrt(t),i=(e-this.radius)*.5;this.center.addScaledVector(el,i/e),this.radius+=i}return this}union(e){return e.isEmpty()||(this.isEmpty()?this.copy(e):!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(eh)),this.expandByPoint(el.copy(e.center).sub(eh)))),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ec=/*@__PURE__*/new G,ed=/*@__PURE__*/new G,ep=/*@__PURE__*/new G,ef=/*@__PURE__*/new G,em=/*@__PURE__*/new G,eg=/*@__PURE__*/new G,e_=/*@__PURE__*/new G;class ev{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ec)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ec.subVectors(e,this.origin).dot(this.direction);return(// point behind the ray
t<0?this.origin.distanceToSquared(e):(ec.copy(this.origin).addScaledVector(this.direction,t),ec.distanceToSquared(e)))}distanceSqToSegment(e,t,i,n){let r,s,a,o;// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
// It returns the min distance between the ray and the segment
// defined by v0 and v1
// It can also set two optional targets :
// - The closest point on the ray
// - The closest point on the segment
ed.copy(e).add(t).multiplyScalar(.5),ep.copy(t).sub(e).normalize(),ef.copy(this.origin).sub(ed);let l=.5*e.distanceTo(t),h=-this.direction.dot(ep),u=ef.dot(this.direction),c=-ef.dot(ep),d=ef.lengthSq(),p=Math.abs(1-h*h);if(p>0){if(// The ray and segment are not parallel.
r=h*c-u,s=h*u-c,o=l*p,r>=0){if(s>=-o){if(s<=o){// region 0
// Minimum at interior points of ray and segment.
let e=1/p;r*=e,s*=e,a=r*(r+h*s+2*u)+s*(h*r+s+2*c)+d}else a=-(r=Math.max(0,-(h*// region 1
(s=l)+u)))*r+s*(s+2*c)+d}else a=-(r=Math.max(0,-(h*// region 5
(s=-l)+u)))*r+s*(s+2*c)+d}else s<=-o?(s=// region 4
(r=Math.max(0,-(-h*l+u)))>0?-l:Math.min(Math.max(-l,-c),l),a=-r*r+s*(s+2*c)+d):s<=o?(// region 3
r=0,a=(s=Math.min(Math.max(-l,-c),l))*(s+2*c)+d):(s=// region 2
(r=Math.max(0,-(h*l+u)))>0?l:Math.min(Math.max(-l,-c),l),a=-r*r+s*(s+2*c)+d)}else // Ray and segment are parallel.
s=h>0?-l:l,a=-(r=Math.max(0,-(h*s+u)))*r+s*(s+2*c)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,r),n&&n.copy(ed).addScaledVector(ep,s),a}intersectSphere(e,t){ec.subVectors(e.center,this.origin);let i=ec.dot(this.direction),n=ec.dot(ec)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),a=i-s,o=i+s;return(// test to see if t1 is behind the ray - if so, return null
o<0?null:a<0?this.at(o,t):this.at(a,t))}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(0===t)return(// line is coplanar, return origin
0===e.distanceToPoint(this.origin)?0:null);let i=-(this.origin.dot(e.normal)+e.constant)/t;// Return if the ray never intersects the plane
return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return null===i?null:this.at(i,t)}intersectsPlane(e){// check if the ray lies on the plane first
let t=e.distanceToPoint(this.origin);if(0===t)return!0;let i=e.normal.dot(this.direction);return i*t<0}intersectBox(e,t){let i,n,r,s,a,o;let l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,c=this.origin;return(l>=0?(i=(e.min.x-c.x)*l,n=(e.max.x-c.x)*l):(i=(e.max.x-c.x)*l,n=(e.min.x-c.x)*l),h>=0?(r=(e.min.y-c.y)*h,s=(e.max.y-c.y)*h):(r=(e.max.y-c.y)*h,s=(e.min.y-c.y)*h),i>s||r>n)?null:((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),u>=0?(a=(e.min.z-c.z)*u,o=(e.max.z-c.z)*u):(a=(e.max.z-c.z)*u,o=(e.min.z-c.z)*u),i>o||a>n)?null:((a>i||i!=i)&&(i=a),(o<n||n!=n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return null!==this.intersectBox(e,ec)}intersectTriangle(e,t,i,n,r){let s;// Compute the offset origin, edges, and normal.
// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
em.subVectors(t,e),eg.subVectors(i,e),e_.crossVectors(em,eg);// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
let a=this.direction.dot(e_);if(a>0){if(n)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}ef.subVectors(this.origin,e);let o=s*this.direction.dot(eg.crossVectors(ef,eg));// b1 < 0, no intersection
if(o<0)return null;let l=s*this.direction.dot(em.cross(ef));// b2 < 0, no intersection
if(l<0||o+l>a)return null;// Line intersects triangle, check if ray does.
let h=-s*ef.dot(e_);return(// t < 0, no intersection
h<0?null:this.at(h/a,r))}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ex{constructor(){ex.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,r,s,a,o,l,h,u,c,d,p,f,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=h,g[10]=u,g[14]=c,g[3]=d,g[7]=p,g[11]=f,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ex().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){// this method does not support reflection matrices
let t=this.elements,i=e.elements,n=1/ey.setFromMatrixColumn(e,0).length(),r=1/ey.setFromMatrixColumn(e,1).length(),s=1/ey.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,s=Math.cos(i),a=Math.sin(i),o=Math.cos(n),l=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if("XYZ"===e.order){let e=s*h,i=s*u,n=a*h,r=a*u;t[0]=o*h,t[4]=-o*u,t[8]=l,t[1]=i+n*l,t[5]=e-r*l,t[9]=-a*o,t[2]=r-e*l,t[6]=n+i*l,t[10]=s*o}else if("YXZ"===e.order){let e=o*h,i=o*u,n=l*h,r=l*u;t[0]=e+r*a,t[4]=n*a-i,t[8]=s*l,t[1]=s*u,t[5]=s*h,t[9]=-a,t[2]=i*a-n,t[6]=r+e*a,t[10]=s*o}else if("ZXY"===e.order){let e=o*h,i=o*u,n=l*h,r=l*u;t[0]=e-r*a,t[4]=-s*u,t[8]=n+i*a,t[1]=i+n*a,t[5]=s*h,t[9]=r-e*a,t[2]=-s*l,t[6]=a,t[10]=s*o}else if("ZYX"===e.order){let e=s*h,i=s*u,n=a*h,r=a*u;t[0]=o*h,t[4]=n*l-i,t[8]=e*l+r,t[1]=o*u,t[5]=r*l+e,t[9]=i*l-n,t[2]=-l,t[6]=a*o,t[10]=s*o}else if("YZX"===e.order){let e=s*o,i=s*l,n=a*o,r=a*l;t[0]=o*h,t[4]=r-e*u,t[8]=n*u+i,t[1]=u,t[5]=s*h,t[9]=-a*h,t[2]=-l*h,t[6]=i*u+n,t[10]=e-r*u}else if("XZY"===e.order){let e=s*o,i=s*l,n=a*o,r=a*l;t[0]=o*h,t[4]=-u,t[8]=l*h,t[1]=e*u+r,t[5]=s*h,t[9]=i*u-n,t[2]=n*u-i,t[6]=a*h,t[10]=r*u+e}return(// bottom row
t[3]=0,t[7]=0,t[11]=0,// last column
t[12]=0,t[13]=0,t[14]=0,t[15]=1,this)}makeRotationFromQuaternion(e){return this.compose(ew,e,eS)}lookAt(e,t,i){let n=this.elements;return eA.subVectors(e,t),0===eA.lengthSq()&&(eA.z=1),eA.normalize(),eb.crossVectors(i,eA),0===eb.lengthSq()&&(1===Math.abs(i.z)?eA.x+=1e-4:eA.z+=1e-4,eA.normalize(),eb.crossVectors(i,eA)),eb.normalize(),eT.crossVectors(eA,eb),n[0]=eb.x,n[4]=eT.x,n[8]=eA.x,n[1]=eb.y,n[5]=eT.y,n[9]=eA.y,n[2]=eb.z,n[6]=eT.z,n[10]=eA.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],a=i[4],o=i[8],l=i[12],h=i[1],u=i[5],c=i[9],d=i[13],p=i[2],f=i[6],m=i[10],g=i[14],_=i[3],v=i[7],x=i[11],y=i[15],M=n[0],w=n[4],S=n[8],b=n[12],T=n[1],A=n[5],E=n[9],C=n[13],R=n[2],P=n[6],L=n[10],D=n[14],O=n[3],I=n[7],N=n[11],z=n[15];return r[0]=s*M+a*T+o*R+l*O,r[4]=s*w+a*A+o*P+l*I,r[8]=s*S+a*E+o*L+l*N,r[12]=s*b+a*C+o*D+l*z,r[1]=h*M+u*T+c*R+d*O,r[5]=h*w+u*A+c*P+d*I,r[9]=h*S+u*E+c*L+d*N,r[13]=h*b+u*C+c*D+d*z,r[2]=p*M+f*T+m*R+g*O,r[6]=p*w+f*A+m*P+g*I,r[10]=p*S+f*E+m*L+g*N,r[14]=p*b+f*C+m*D+g*z,r[3]=_*M+v*T+x*R+y*O,r[7]=_*w+v*A+x*P+y*I,r[11]=_*S+v*E+x*L+y*N,r[15]=_*b+v*C+x*D+y*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],a=e[5],o=e[9],l=e[13],h=e[2],u=e[6],c=e[10],d=e[14],p=e[3],f=e[7],m=e[11],g=e[15];//TODO: make this more efficient
//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
return p*(+r*o*u-n*l*u-r*a*c+i*l*c+n*a*d-i*o*d)+f*(+t*o*d-t*l*c+r*s*c-n*s*d+n*l*h-r*o*h)+m*(+t*l*u-t*a*d-r*s*u+i*s*d+r*a*h-i*l*h)+g*(-n*a*h-t*o*u+t*a*c+n*s*u-i*s*c+i*o*h)}transpose(){let e;let t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],h=e[8],u=e[9],c=e[10],d=e[11],p=e[12],f=e[13],m=e[14],g=e[15],_=u*m*l-f*c*l+f*o*d-a*m*d-u*o*g+a*c*g,v=p*c*l-h*m*l-p*o*d+s*m*d+h*o*g-s*c*g,x=h*f*l-p*u*l+p*a*d-s*f*d-h*a*g+s*u*g,y=p*u*o-h*f*o-p*a*c+s*f*c+h*a*m-s*u*m,M=t*_+i*v+n*x+r*y;if(0===M)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/M;return e[0]=_*w,e[1]=(f*c*r-u*m*r-f*n*d+i*m*d+u*n*g-i*c*g)*w,e[2]=(a*m*r-f*o*r+f*n*l-i*m*l-a*n*g+i*o*g)*w,e[3]=(u*o*r-a*c*r-u*n*l+i*c*l+a*n*d-i*o*d)*w,e[4]=v*w,e[5]=(h*m*r-p*c*r+p*n*d-t*m*d-h*n*g+t*c*g)*w,e[6]=(p*o*r-s*m*r-p*n*l+t*m*l+s*n*g-t*o*g)*w,e[7]=(s*c*r-h*o*r+h*n*l-t*c*l-s*n*d+t*o*d)*w,e[8]=x*w,e[9]=(p*u*r-h*f*r-p*i*d+t*f*d+h*i*g-t*u*g)*w,e[10]=(s*f*r-p*a*r+p*i*l-t*f*l-s*i*g+t*a*g)*w,e[11]=(h*a*r-s*u*r-h*i*l+t*u*l+s*i*d-t*a*d)*w,e[12]=y*w,e[13]=(h*f*n-p*u*n+p*i*c-t*f*c-h*i*m+t*u*m)*w,e[14]=(p*a*n-s*f*n-p*i*o+t*f*o+s*i*m-t*a*m)*w,e[15]=(s*u*n-h*a*n+h*i*o-t*u*o-s*i*c+t*a*c)*w,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){// Based on http://www.gamedev.net/reference/articles/article1199.asp
let i=Math.cos(t),n=Math.sin(t),r=1-i,s=e.x,a=e.y,o=e.z,l=r*s,h=r*a;return this.set(l*s+i,l*a-n*o,l*o+n*a,0,l*a+n*o,h*a+i,h*o-n*s,0,l*o-n*a,h*o+n*s,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,s=t._y,a=t._z,o=t._w,l=r+r,h=s+s,u=a+a,c=r*l,d=r*h,p=r*u,f=s*h,m=s*u,g=a*u,_=o*l,v=o*h,x=o*u,y=i.x,M=i.y,w=i.z;return n[0]=(1-(f+g))*y,n[1]=(d+x)*y,n[2]=(p-v)*y,n[3]=0,n[4]=(d-x)*M,n[5]=(1-(c+g))*M,n[6]=(m+_)*M,n[7]=0,n[8]=(p+v)*w,n[9]=(m-_)*w,n[10]=(1-(c+f))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=ey.set(n[0],n[1],n[2]).length(),s=ey.set(n[4],n[5],n[6]).length(),a=ey.set(n[8],n[9],n[10]).length(),o=this.determinant();o<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],// scale the rotation part
eM.copy(this);let l=1/r,h=1/s,u=1/a;return eM.elements[0]*=l,eM.elements[1]*=l,eM.elements[2]*=l,eM.elements[4]*=h,eM.elements[5]*=h,eM.elements[6]*=h,eM.elements[8]*=u,eM.elements[9]*=u,eM.elements[10]*=u,t.setFromRotationMatrix(eM),i.x=r,i.y=s,i.z=a,this}makePerspective(e,t,i,n,r,s){let a=this.elements;return a[0]=2*r/(t-e),a[4]=0,a[8]=(t+e)/(t-e),a[12]=0,a[1]=0,a[5]=2*r/(i-n),a[9]=(i+n)/(i-n),a[13]=0,a[2]=0,a[6]=0,a[10]=-(s+r)/(s-r),a[14]=-2*s*r/(s-r),a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,r,s){let a=this.elements,o=1/(t-e),l=1/(i-n),h=1/(s-r);return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-((t+e)*o),a[1]=0,a[5]=2*l,a[9]=0,a[13]=-((i+n)*l),a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-((s+r)*h),a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let e=0;e<16;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ey=/*@__PURE__*/new G,eM=/*@__PURE__*/new ex,ew=/*@__PURE__*/new G(0,0,0),eS=/*@__PURE__*/new G(1,1,1),eb=/*@__PURE__*/new G,eT=/*@__PURE__*/new G,eA=/*@__PURE__*/new G,eE=/*@__PURE__*/new ex,eC=/*@__PURE__*/new H;class eR{constructor(e=0,t=0,i=0,n=eR.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
let n=e.elements,r=n[0],s=n[4],a=n[8],o=n[1],l=n[5],h=n[9],u=n[2],c=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(p(a,-1,1)),.9999999>Math.abs(a)?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(c,l),this._z=0);break;case"YXZ":this._x=Math.asin(-p(h,-1,1)),.9999999>Math.abs(h)?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(p(c,-1,1)),.9999999>Math.abs(c)?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-p(u,-1,1)),.9999999>Math.abs(u)?(this._x=Math.atan2(c,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(p(o,-1,1)),.9999999>Math.abs(o)?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-p(s,-1,1)),.9999999>Math.abs(s)?(this._x=Math.atan2(c,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===i&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eE.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eE,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return(// WARNING: this discards revolution information -bhouston
eC.setFromEuler(this),this.setFromQuaternion(eC,e))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eR.DEFAULT_ORDER="XYZ";class eP{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let eL=0;const eD=/*@__PURE__*/new G,eO=/*@__PURE__*/new H,eI=/*@__PURE__*/new ex,eN=/*@__PURE__*/new G,ez=/*@__PURE__*/new G,eU=/*@__PURE__*/new G,ek=/*@__PURE__*/new H,eB=/*@__PURE__*/new G(1,0,0),eF=/*@__PURE__*/new G(0,1,0),eV=/*@__PURE__*/new G(0,0,1),eH={type:"added"},eG={type:"removed"};class eW extends o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eL++}),this.uuid=d(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=eW.DEFAULT_UP.clone();let e=new G,t=new eR,i=new H,n=new G(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ex},normalMatrix:{value:new S}}),this.matrix=new ex,this.matrixWorld=new ex,this.matrixAutoUpdate=eW.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=eW.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new eP,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){// assumes axis is normalized
this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){// assumes q is normalized
this.quaternion.copy(e)}rotateOnAxis(e,t){return(// rotate object on axis in object space
// axis is assumed to be normalized
eO.setFromAxisAngle(e,t),this.quaternion.multiply(eO),this)}rotateOnWorldAxis(e,t){return(// rotate object on axis in world space
// axis is assumed to be normalized
// method assumes no rotated parent
eO.setFromAxisAngle(e,t),this.quaternion.premultiply(eO),this)}rotateX(e){return this.rotateOnAxis(eB,e)}rotateY(e){return this.rotateOnAxis(eF,e)}rotateZ(e){return this.rotateOnAxis(eV,e)}translateOnAxis(e,t){return(// translate object by distance along axis in object space
// axis is assumed to be normalized
eD.copy(e).applyQuaternion(this.quaternion),this.position.add(eD.multiplyScalar(t)),this)}translateX(e){return this.translateOnAxis(eB,e)}translateY(e){return this.translateOnAxis(eF,e)}translateZ(e){return this.translateOnAxis(eV,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(eI.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eN.copy(e):eN.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ez.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?eI.lookAt(ez,eN,this.up):eI.lookAt(eN,ez,this.up),this.quaternion.setFromRotationMatrix(eI),n&&(eI.extractRotation(n.matrixWorld),eO.setFromRotationMatrix(eI),this.quaternion.premultiply(eO.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?console.error("THREE.Object3D.add: object can't be added as a child of itself.",e):e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eH)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return -1!==t&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eG)),this}removeFromParent(){let e=this.parent;return null!==e&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(eG)}return this.children.length=0,this}attach(e){return(// adds object as a child of this, while maintaining the object's world transform
// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)
this.updateWorldMatrix(!0,!1),eI.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),eI.multiply(e.parent.matrixWorld)),e.applyMatrix4(eI),this.add(e),e.updateWorldMatrix(!1,!0),this)}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let n=this.children[i],r=n.getObjectByProperty(e,t);if(void 0!==r)return r}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectsByProperty(e,t);r.length>0&&(i=i.concat(r))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ez,e,eU),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ez,ek,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);// update children
let t=this.children;for(let i=0,n=t.length;i<n;i++){let n=t[i];(!0===n.matrixWorldAutoUpdate||!0===e)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;// update children
if(!0===e&&null!==i&&!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t){let e=this.children;for(let t=0,i=e.length;t<i;t++){let i=e[t];!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!1,!0)}}}toJSON(e){// meta is a string when called from JSON.stringify
let t=void 0===e||"string"==typeof e,i={};t&&(// initialize meta obj
e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});// standard Object3D serialization
let n={};//
function r(t,i){return void 0===t[i.uuid]&&(t[i.uuid]=i.toJSON(e)),i.uuid}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),!0===this.castShadow&&(n.castShadow=!0),!0===this.receiveShadow&&(n.receiveShadow=!0),!1===this.visible&&(n.visible=!1),!1===this.frustumCulled&&(n.frustumCulled=!1),0!==this.renderOrder&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(n.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let t=this.geometry.parameters;if(void 0!==t&&void 0!==t.shapes){let i=t.shapes;if(Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let n=i[t];r(e.shapes,n)}else r(e.shapes,i)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),void 0!==this.material){if(Array.isArray(this.material)){let t=[];for(let i=0,n=this.material.length;i<n;i++)t.push(r(e.materials,this.material[i]));n.material=t}else n.material=r(e.materials,this.material)}//
if(this.children.length>0){n.children=[];for(let t=0;t<this.children.length;t++)n.children.push(this.children[t].toJSON(e).object)}//
if(this.animations.length>0){n.animations=[];for(let t=0;t<this.animations.length;t++){let i=this.animations[t];n.animations.push(r(e.animations,i))}}if(t){let t=s(e.geometries),n=s(e.materials),r=s(e.textures),a=s(e.images),o=s(e.shapes),l=s(e.skeletons),h=s(e.animations),u=s(e.nodes);t.length>0&&(i.geometries=t),n.length>0&&(i.materials=n),r.length>0&&(i.textures=r),a.length>0&&(i.images=a),o.length>0&&(i.shapes=o),l.length>0&&(i.skeletons=l),h.length>0&&(i.animations=h),u.length>0&&(i.nodes=u)}return i.object=n,i;// extract data from the cache hash
// remove metadata on each item
// and return as array
function s(e){let t=[];for(let i in e){let n=e[i];delete n.metadata,t.push(n)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){let i=e.children[t];this.add(i.clone())}return this}}eW.DEFAULT_UP=/*@__PURE__*/new G(0,1,0),eW.DEFAULT_MATRIX_AUTO_UPDATE=!0,eW.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const eq=/*@__PURE__*/new G,ej=/*@__PURE__*/new G,eJ=/*@__PURE__*/new G,eX=/*@__PURE__*/new G,eY=/*@__PURE__*/new G,eK=/*@__PURE__*/new G,eZ=/*@__PURE__*/new G,eQ=/*@__PURE__*/new G,e$=/*@__PURE__*/new G,e0=/*@__PURE__*/new G;let e1=!1;class e3{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),eq.subVectors(e,t),n.cross(eq);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}// static/instance method to calculate barycentric coordinates
// based on: http://www.blackpawn.com/texts/pointinpoly/default.html
static getBarycoord(e,t,i,n,r){eq.subVectors(n,t),ej.subVectors(i,t),eJ.subVectors(e,t);let s=eq.dot(eq),a=eq.dot(ej),o=eq.dot(eJ),l=ej.dot(ej),h=ej.dot(eJ),u=s*l-a*a;// collinear or singular triangle
if(0===u)// not sure if this is the best idea, maybe should be returning undefined
return r.set(-2,-1,-1);let c=1/u,d=(l*o-a*h)*c,p=(s*h-a*o)*c;// barycentric coordinates must always sum to 1
return r.set(1-d-p,p,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,eX),eX.x>=0&&eX.y>=0&&eX.x+eX.y<=1}static getUV(e,t,i,n,r,s,a,o){return!1===e1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),e1=!0),this.getInterpolation(e,t,i,n,r,s,a,o)}static getInterpolation(e,t,i,n,r,s,a,o){return this.getBarycoord(e,t,i,n,eX),o.setScalar(0),o.addScaledVector(r,eX.x),o.addScaledVector(s,eX.y),o.addScaledVector(a,eX.z),o}static isFrontFacing(e,t,i,n){// strictly front facing
return eq.subVectors(i,t),ej.subVectors(e,t),0>eq.cross(ej).dot(n)}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return eq.subVectors(this.c,this.b),ej.subVectors(this.a,this.b),.5*eq.cross(ej).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return e3.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return e3.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return!1===e1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),e1=!0),e3.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return e3.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return e3.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return e3.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i,n;let r=this.a,s=this.b,a=this.c;// algorithm thanks to Real-Time Collision Detection by Christer Ericson,
// published by Morgan Kaufmann Publishers, (c) 2005 Elsevier Inc.,
// under the accompanying license; see chapter 5.1.5 for detailed explanation.
// basically, we're distinguishing which of the voronoi regions of the triangle
// the point lies in with the minimum amount of redundant computation.
eY.subVectors(s,r),eK.subVectors(a,r),eQ.subVectors(e,r);let o=eY.dot(eQ),l=eK.dot(eQ);if(o<=0&&l<=0)return t.copy(r);e$.subVectors(e,s);let h=eY.dot(e$),u=eK.dot(e$);if(h>=0&&u<=h)return t.copy(s);let c=o*u-h*l;if(c<=0&&o>=0&&h<=0)// edge region of AB; barycentric coords (1-v, v, 0)
return i=o/(o-h),t.copy(r).addScaledVector(eY,i);e0.subVectors(e,a);let d=eY.dot(e0),p=eK.dot(e0);if(p>=0&&d<=p)return t.copy(a);let f=d*l-o*p;if(f<=0&&l>=0&&p<=0)// edge region of AC; barycentric coords (1-w, 0, w)
return n=l/(l-p),t.copy(r).addScaledVector(eK,n);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)// edge region of BC; barycentric coords (0, 1-w, w)
return eZ.subVectors(a,s),n=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(eZ,n);// edge region of BC
// face region
let g=1/(m+f+c);return(// u = va * denom
i=f*g,n=c*g,t.copy(r).addScaledVector(eY,i).addScaledVector(eK,n))}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let e2=0;class e5 extends o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=d(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(void 0!==e)for(let t in e){let i=e[t];if(void 0===i){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(void 0===n){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=void 0===e||"string"==typeof e;t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};// TODO: Copied from Object3D.toJSON
function n(e){let t=[];for(let i in e){let n=e[i];delete n.metadata,t.push(n)}return t}if(// standard Material serialization
i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),void 0!==this.sheen&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(i.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,void 0!==this.combine&&(i.combine=this.combine)),void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.transmission&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),void 0!==this.thickness&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(i.size=this.size),null!==this.shadowSide&&(i.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(i.blending=this.blending),0!==this.side&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),!0===this.polygonOffset&&(i.polygonOffset=!0),0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),void 0!==this.dashSize&&(i.dashSize=this.dashSize),void 0!==this.gapSize&&(i.gapSize=this.gapSize),void 0!==this.scale&&(i.scale=this.scale),!0===this.dithering&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(i.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=this.premultipliedAlpha),!0===this.forceSinglePass&&(i.forceSinglePass=this.forceSinglePass),!0===this.wireframe&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(i.flatShading=this.flatShading),!1===this.visible&&(i.visible=!1),!1===this.toneMapped&&(i.toneMapped=!1),!1===this.fog&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let t=n(e.textures),r=n(e.images);t.length>0&&(i.textures=t),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(null!==t){let e=t.length;i=Array(e);for(let n=0;n!==e;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}}const e4={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},e6={h:0,s:0,l:0},e8={h:0,s:0,l:0};function e7(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*6*(2/3-i):e}class e9{constructor(e,t,i){if(this.isColor=!0,this.r=1,this.g=1,this.b=1,void 0===t&&void 0===i)return this.set(e);return this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,O.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=O.workingColorSpace){return this.r=e,this.g=t,this.b=i,O.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=O.workingColorSpace){if(// h,s,l ranges are in 0.0 - 1.0
e=f(e,1),t=p(t,0,1),i=p(i,0,1),0===t)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+t):i+t-i*t,r=2*i-n;this.r=e7(r,n,e+1/3),this.g=e7(r,n,e),this.b=e7(r,n,e-1/3)}return O.toWorkingColorSpace(this,n),this}setStyle(e,t=n){let i;function r(t){void 0!==t&&1>parseFloat(t)&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;let s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){// rgb(255,0,0) rgba(255,0,0,0.5)
this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,O.toWorkingColorSpace(this,t),r(n[4]);break}(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))&&(// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,O.toWorkingColorSpace(this,t),r(n[4]));break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){// hsl(120,50%,50%) hsla(120,50%,50%,0.5)
let e=parseFloat(n[1])/360,i=parseFloat(n[2])/100,s=parseFloat(n[3])/100;return r(n[4]),this.setHSL(e,i,s,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){// hex color
let n=i[1],r=n.length;if(3===r)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(6===r)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=n){// color keywords
let i=e4[e.toLowerCase()];return void 0!==i?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=E(e.r),this.g=E(e.g),this.b=E(e.b),this}copyLinearToSRGB(e){return this.r=C(e.r),this.g=C(e.g),this.b=C(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=n){return O.fromWorkingColorSpace(te.copy(this),e),p(255*te.r,0,255)<<16^p(255*te.g,0,255)<<8^p(255*te.b,0,255)<<0}getHexString(e=n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=O.workingColorSpace){let i,n;// h,s,l ranges are in 0.0 - 1.0
O.fromWorkingColorSpace(te.copy(this),t);let r=te.r,s=te.g,a=te.b,o=Math.max(r,s,a),l=Math.min(r,s,a),h=(l+o)/2;if(l===o)i=0,n=0;else{let e=o-l;switch(n=h<=.5?e/(o+l):e/(2-o-l),o){case r:i=(s-a)/e+(s<a?6:0);break;case s:i=(a-r)/e+2;break;case a:i=(r-s)/e+4}i/=6}return e.h=i,e.s=n,e.l=h,e}getRGB(e,t=O.workingColorSpace){return O.fromWorkingColorSpace(te.copy(this),t),e.r=te.r,e.g=te.g,e.b=te.b,e}getStyle(e=n){O.fromWorkingColorSpace(te.copy(this),e);let t=te.r,i=te.g,r=te.b;return e!==n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${255*t|0},${255*i|0},${255*r|0})`}offsetHSL(e,t,i){return this.getHSL(e6),e6.h+=e,e6.s+=t,e6.l+=i,this.setHSL(e6.h,e6.s,e6.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(e6),e.getHSL(e8);let i=m(e6.h,e8.h,t),n=m(e6.s,e8.s,t),r=m(e6.l,e8.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const te=/*@__PURE__*/new e9;e9.NAMES=e4;class tt extends e5{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new e9(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ti=/*@__PURE__*/new G,tn=/*@__PURE__*/new w;class tr{constructor(e,t,i=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(2===this.itemSize)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXY(t,tn.x,tn.y);else if(3===this.itemSize)for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}set(e,t=0){return(// Matching BufferAttribute constructor, do not normalize the array.
this.array.set(e,t),this)}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=x(t,this.array)),t}setX(e,t){return this.normalized&&(t=y(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=x(t,this.array)),t}setY(e,t){return this.normalized&&(t=y(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=x(t,this.array)),t}setZ(e,t){return this.normalized&&(t=y(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=x(t,this.array)),t}setW(e,t){return this.normalized&&(t=y(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=y(t,this.array),i=y(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=y(t,this.array),i=y(i,this.array),n=y(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=y(t,this.array),i=y(i,this.array),n=y(n,this.array),r=y(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),35044!==this.usage&&(e.usage=this.usage),(0!==this.updateRange.offset||-1!==this.updateRange.count)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ts extends tr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ta extends tr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class to extends tr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tl=0;const th=/*@__PURE__*/new ex,tu=/*@__PURE__*/new eW,tc=/*@__PURE__*/new G,td=/*@__PURE__*/new j,tp=/*@__PURE__*/new j,tf=/*@__PURE__*/new G;class tm extends o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tl++}),this.uuid=d(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T(e)?ta:ts)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return void 0!==this.attributes[e]}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;void 0!==t&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(void 0!==i){let t=new S().getNormalMatrix(e);i.applyNormalMatrix(t),i.needsUpdate=!0}let n=this.attributes.tangent;return void 0!==n&&(n.transformDirection(e),n.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return th.makeRotationFromQuaternion(e),this.applyMatrix4(th),this}rotateX(e){return(// rotate geometry around world x-axis
th.makeRotationX(e),this.applyMatrix4(th),this)}rotateY(e){return(// rotate geometry around world y-axis
th.makeRotationY(e),this.applyMatrix4(th),this)}rotateZ(e){return(// rotate geometry around world z-axis
th.makeRotationZ(e),this.applyMatrix4(th),this)}translate(e,t,i){return(// translate geometry
th.makeTranslation(e,t,i),this.applyMatrix4(th),this)}scale(e,t,i){return(// scale geometry
th.makeScale(e,t,i),this.applyMatrix4(th),this)}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tc).negate(),this.translate(tc.x,tc.y,tc.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new to(t,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new j);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(void 0!==e)// process morph attributes if present
{if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];td.setFromBufferAttribute(i),this.morphTargetsRelative?(tf.addVectors(this.boundingBox.min,td.min),this.boundingBox.expandByPoint(tf),tf.addVectors(this.boundingBox.max,td.max),this.boundingBox.expandByPoint(tf)):(this.boundingBox.expandByPoint(td.min),this.boundingBox.expandByPoint(td.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new eu);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){// first, find the center of the bounding sphere
let i=this.boundingSphere.center;// process morph attributes if present
if(td.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];tp.setFromBufferAttribute(i),this.morphTargetsRelative?(tf.addVectors(td.min,tp.min),td.expandByPoint(tf),tf.addVectors(td.max,tp.max),td.expandByPoint(tf)):(td.expandByPoint(tp.min),td.expandByPoint(tp.max))}td.getCenter(i);// second, try to find a boundingSphere with a radius smaller than the
// boundingSphere of the boundingBox: sqrt(3) smaller in the best case
let n=0;for(let t=0,r=e.count;t<r;t++)tf.fromBufferAttribute(e,t),n=Math.max(n,i.distanceToSquared(tf));// process morph attributes if present
if(t)for(let r=0,s=t.length;r<s;r++){let s=t[r],a=this.morphTargetsRelative;for(let t=0,r=s.count;t<r;t++)tf.fromBufferAttribute(s,t),a&&(tc.fromBufferAttribute(e,t),tf.add(tc)),n=Math.max(n,i.distanceToSquared(tf))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;// based on http://www.terathon.com/code/tangent.html
// (per vertex tangents)
if(null===e||void 0===t.position||void 0===t.normal||void 0===t.uv){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,n=t.position.array,r=t.normal.array,s=t.uv.array,a=n.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new tr(new Float32Array(4*a),4));let o=this.getAttribute("tangent").array,l=[],h=[];for(let e=0;e<a;e++)l[e]=new G,h[e]=new G;let u=new G,c=new G,d=new G,p=new w,f=new w,m=new w,g=new G,_=new G,v=this.groups;0===v.length&&(v=[{start:0,count:i.length}]);for(let e=0,t=v.length;e<t;++e){let t=v[e],r=t.start,a=t.count;for(let e=r,t=r+a;e<t;e+=3)!function(e,t,i){u.fromArray(n,3*e),c.fromArray(n,3*t),d.fromArray(n,3*i),p.fromArray(s,2*e),f.fromArray(s,2*t),m.fromArray(s,2*i),c.sub(u),d.sub(u),f.sub(p),m.sub(p);let r=1/(f.x*m.y-m.x*f.y);isFinite(r)&&(g.copy(c).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(r),_.copy(d).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(r),l[e].add(g),l[t].add(g),l[i].add(g),h[e].add(_),h[t].add(_),h[i].add(_))}(i[e+0],i[e+1],i[e+2])}let x=new G,y=new G,M=new G,S=new G;function b(e){M.fromArray(r,3*e),S.copy(M);let t=l[e];// Gram-Schmidt orthogonalize
x.copy(t),x.sub(M.multiplyScalar(M.dot(t))).normalize(),// Calculate handedness
y.crossVectors(S,t);let i=y.dot(h[e]);o[4*e]=x.x,o[4*e+1]=x.y,o[4*e+2]=x.z,o[4*e+3]=i<0?-1:1}for(let e=0,t=v.length;e<t;++e){let t=v[e],n=t.start,r=t.count;for(let e=n,t=n+r;e<t;e+=3)b(i[e+0]),b(i[e+1]),b(i[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(void 0!==t){let i=this.getAttribute("normal");if(void 0===i)i=new tr(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let e=0,t=i.count;e<t;e++)i.setXYZ(e,0,0,0);let n=new G,r=new G,s=new G,a=new G,o=new G,l=new G,h=new G,u=new G;// indexed elements
if(e)for(let c=0,d=e.count;c<d;c+=3){let d=e.getX(c+0),p=e.getX(c+1),f=e.getX(c+2);n.fromBufferAttribute(t,d),r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,f),h.subVectors(s,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,f),a.add(h),o.add(h),l.add(h),i.setXYZ(d,a.x,a.y,a.z),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let e=0,a=t.count;e<a;e+=3)n.fromBufferAttribute(t,e+0),r.fromBufferAttribute(t,e+1),s.fromBufferAttribute(t,e+2),h.subVectors(s,r),u.subVectors(n,r),h.cross(u),i.setXYZ(e+0,h.x,h.y,h.z),i.setXYZ(e+1,h.x,h.y,h.z),i.setXYZ(e+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tf.fromBufferAttribute(e,t),tf.normalize(),e.setXYZ(t,tf.x,tf.y,tf.z)}toNonIndexed(){function e(e,t){let i=e.array,n=e.itemSize,r=e.normalized,s=new i.constructor(t.length*n),a=0,o=0;for(let r=0,l=t.length;r<l;r++){a=e.isInterleavedBufferAttribute?t[r]*e.data.stride+e.offset:t[r]*n;for(let e=0;e<n;e++)s[o++]=i[a++]}return new tr(s,n,r)}//
if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new tm,i=this.index.array,n=this.attributes;// attributes
for(let r in n){let s=n[r],a=e(s,i);t.setAttribute(r,a)}// morph attributes
let r=this.morphAttributes;for(let n in r){let s=[],a=r[n];for(let t=0,n=a.length;t<n;t++){let n=a[t],r=e(n,i);s.push(r)}t.morphAttributes[n]=s}t.morphTargetsRelative=this.morphTargetsRelative;// groups
let s=this.groups;for(let e=0,i=s.length;e<i;e++){let i=s[e];t.addGroup(i.start,i.count,i.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(// standard BufferGeometry serialization
e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),void 0!==this.parameters){let t=this.parameters;for(let i in t)void 0!==t[i]&&(e[i]=t[i]);return e}// for simplicity the code assumes attributes are not shared across geometries, see #15811
e.data={attributes:{}};let t=this.index;null!==t&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let t in i){let n=i[t];e.data.attributes[t]=n.toJSON(e.data)}let n={},r=!1;for(let t in this.morphAttributes){let i=this.morphAttributes[t],s=[];for(let t=0,n=i.length;t<n;t++){let n=i[t];s.push(n.toJSON(e.data))}s.length>0&&(n[t]=s,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return null!==a&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){// reset
this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;// used for storing cloned, shared data
let t={};// name
this.name=e.name;// index
let i=e.index;null!==i&&this.setIndex(i.clone(t));// attributes
let n=e.attributes;for(let e in n){let i=n[e];this.setAttribute(e,i.clone(t))}// morph attributes
let r=e.morphAttributes;for(let e in r){let i=[],n=r[e];for(let e=0,r=n.length;e<r;e++)i.push(n[e].clone(t));this.morphAttributes[e]=i}this.morphTargetsRelative=e.morphTargetsRelative;// groups
let s=e.groups;for(let e=0,t=s.length;e<t;e++){let t=s[e];this.addGroup(t.start,t.count,t.materialIndex)}// bounding box
let a=e.boundingBox;null!==a&&(this.boundingBox=a.clone());// bounding sphere
let o=e.boundingSphere;return null!==o&&(this.boundingSphere=o.clone()),// draw range
this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,// user data
this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tg=/*@__PURE__*/new ex,t_=/*@__PURE__*/new ev,tv=/*@__PURE__*/new eu,tx=/*@__PURE__*/new G,ty=/*@__PURE__*/new G,tM=/*@__PURE__*/new G,tw=/*@__PURE__*/new G,tS=/*@__PURE__*/new G,tb=/*@__PURE__*/new G,tT=/*@__PURE__*/new w,tA=/*@__PURE__*/new w,tE=/*@__PURE__*/new w,tC=/*@__PURE__*/new G,tR=/*@__PURE__*/new G,tP=/*@__PURE__*/new G,tL=/*@__PURE__*/new G,tD=/*@__PURE__*/new G;class tO extends eW{constructor(e=new tm,t=new tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry,t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let e=t[i[0]];if(void 0!==e){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,i=e.length;t<i;t++){let i=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=t}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){tb.set(0,0,0);for(let i=0,n=r.length;i<n;i++){let n=a[i],o=r[i];0!==n&&(tS.fromBufferAttribute(o,e),s?tb.addScaledVector(tS,n):tb.addScaledVector(tS.sub(t),n))}t.add(tb)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){let i;let n=this.geometry,r=this.material,s=this.matrixWorld;if(void 0===r||(null===n.boundingSphere&&n.computeBoundingSphere(),tv.copy(n.boundingSphere),tv.applyMatrix4(s),t_.copy(e.ray).recast(e.near),!1===tv.containsPoint(t_.origin)&&(null===t_.intersectSphere(tv,tx)||t_.origin.distanceToSquared(tx)>(e.far-e.near)**2))||(//
tg.copy(s).invert(),t_.copy(e.ray).applyMatrix4(tg),null!==n.boundingBox&&!1===t_.intersectsBox(n.boundingBox)))return;let a=n.index,o=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.attributes.normal,c=n.groups,d=n.drawRange;if(null!==a){// indexed buffer geometry
if(Array.isArray(r))for(let n=0,s=c.length;n<s;n++){let s=c[n],o=r[s.materialIndex],p=Math.max(s.start,d.start),f=Math.min(a.count,Math.min(s.start+s.count,d.start+d.count));for(let n=p;n<f;n+=3){let r=a.getX(n),c=a.getX(n+1),d=a.getX(n+2);(i=tI(this,o,e,t_,l,h,u,r,c,d))&&(i.faceIndex=Math.floor(n/3),i.face.materialIndex=s.materialIndex,t.push(i))}}else{let n=Math.max(0,d.start),s=Math.min(a.count,d.start+d.count);for(let o=n;o<s;o+=3){let n=a.getX(o),s=a.getX(o+1),c=a.getX(o+2);(i=tI(this,r,e,t_,l,h,u,n,s,c))&&(i.faceIndex=Math.floor(o/3),t.push(i))}}}else if(void 0!==o){// non-indexed buffer geometry
if(Array.isArray(r))for(let n=0,s=c.length;n<s;n++){let s=c[n],a=r[s.materialIndex],p=Math.max(s.start,d.start),f=Math.min(o.count,Math.min(s.start+s.count,d.start+d.count));for(let n=p;n<f;n+=3){let r=n,o=n+1,c=n+2;(i=tI(this,a,e,t_,l,h,u,r,o,c))&&(i.faceIndex=Math.floor(n/3),i.face.materialIndex=s.materialIndex,t.push(i))}}else{let n=Math.max(0,d.start),s=Math.min(o.count,d.start+d.count);for(let a=n;a<s;a+=3){let n=a,s=a+1,o=a+2;(i=tI(this,r,e,t_,l,h,u,n,s,o))&&(i.faceIndex=Math.floor(a/3),t.push(i))}}}}}function tI(e,t,i,n,r,s,a,o,l,h){e.getVertexPosition(o,ty),e.getVertexPosition(l,tM),e.getVertexPosition(h,tw);let u=function(e,t,i,n,r,s,a,o){if(null===(1===t.side?n.intersectTriangle(a,s,r,!0,o):n.intersectTriangle(r,s,a,0===t.side,o)))return null;tD.copy(o),tD.applyMatrix4(e.matrixWorld);let l=i.ray.origin.distanceTo(tD);return l<i.near||l>i.far?null:{distance:l,point:tD.clone(),object:e}}(e,t,i,n,ty,tM,tw,tL);if(u){r&&(tT.fromBufferAttribute(r,o),tA.fromBufferAttribute(r,l),tE.fromBufferAttribute(r,h),u.uv=e3.getInterpolation(tL,ty,tM,tw,tT,tA,tE,new w)),s&&(tT.fromBufferAttribute(s,o),tA.fromBufferAttribute(s,l),tE.fromBufferAttribute(s,h),u.uv2=e3.getInterpolation(tL,ty,tM,tw,tT,tA,tE,new w)),a&&(tC.fromBufferAttribute(a,o),tR.fromBufferAttribute(a,l),tP.fromBufferAttribute(a,h),u.normal=e3.getInterpolation(tL,ty,tM,tw,tC,tR,tP,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let e={a:o,b:l,c:h,normal:new G,materialIndex:0};e3.getNormal(ty,tM,tw,e.normal),u.face=e}return u}class tN extends tm{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};let a=this;// segments
n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);// buffers
let o=[],l=[],h=[],u=[],c=0,d=0;function p(e,t,i,n,r,s,p,f,m,g,_){let v=s/m,x=p/g,y=s/2,M=p/2,w=f/2,S=m+1,b=g+1,T=0,A=0,E=new G;// generate vertices, normals and uvs
for(let s=0;s<b;s++){let a=s*x-M;for(let o=0;o<S;o++){let c=o*v-y;// set values to correct vector component
E[e]=c*n,E[t]=a*r,E[i]=w,// now apply vector to vertex buffer
l.push(E.x,E.y,E.z),// set values to correct vector component
E[e]=0,E[t]=0,E[i]=f>0?1:-1,// now apply vector to normal buffer
h.push(E.x,E.y,E.z),// uvs
u.push(o/m),u.push(1-s/g),// counters
T+=1}}// indices
// 1. you need three indices to draw a single face
// 2. a single segment consists of two faces
// 3. so we need to generate six (2*3) indices per segment
for(let e=0;e<g;e++)for(let t=0;t<m;t++){let i=c+t+S*e,n=c+t+S*(e+1),r=c+(t+1)+S*(e+1),s=c+(t+1)+S*e;// faces
o.push(i,n,s),o.push(n,r,s),// increase counter
A+=6}// add a group to the geometry. this will ensure multi material support
a.addGroup(d,A,_),// calculate new start value for groups
d+=A,// update total number of vertices
c+=T}// build each side of the box geometry
p("z","y","x",-1,-1,i,t,e,s,r,0),p("z","y","x",1,-1,i,t,-e,s,r,1),p("x","z","y",1,1,e,i,t,n,s,2),p("x","z","y",1,-1,e,i,-t,n,s,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),// build geometry
this.setIndex(o),this.setAttribute("position",new to(l,3)),this.setAttribute("normal",new to(h,3)),this.setAttribute("uv",new to(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tN(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}/**
 * Uniform Utilities
 */function tz(e){let t={};for(let i in e)for(let n in t[i]={},e[i]){let r=e[i][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=r.clone():Array.isArray(r)?t[i][n]=r.slice():t[i][n]=r}return t}function tU(e){let t={};for(let i=0;i<e.length;i++){let n=tz(e[i]);for(let e in n)t[e]=n[e]}return t}function tk(e){return null===e.getRenderTarget()&&3001===e.outputEncoding?n:r}// Legacy
const tB={clone:tz,merge:tU};class tF extends e5{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader="void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1// set to use shader texture LOD
},// When rendered geometry doesn't include these attributes but the material does,
// use these default values in WebGL. This avoids errors when buffer data is missing.
this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==e&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tz(e.uniforms),this.uniformsGroups=function(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);for(let i in t.glslVersion=this.glslVersion,t.uniforms={},this.uniforms){let n=this.uniforms[i],r=n.value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let e in this.extensions)!0===this.extensions[e]&&(i[e]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tV extends eW{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ex,this.projectionMatrix=new ex,this.projectionMatrixInverse=new ex}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tH extends tV{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}/**
	 * Sets the FOV by focal length in respect to the current .filmGauge.
	 *
	 * The default film gauge is 35, so that the focal length can be specified for
	 * a 35mm (full frame) camera.
	 *
	 * Values for focal length and film gauge must have the same unit.
	 */setFocalLength(e){/** see {@link http://www.bobatkins.com/photography/technical/field_of_view.html} */let t=.5*this.getFilmHeight()/e;this.fov=2*c*Math.atan(t),this.updateProjectionMatrix()}/**
	 * Calculates the focal length from the current .fov and .filmGauge.
	 */getFocalLength(){let e=Math.tan(.5*u*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*c*Math.atan(Math.tan(.5*u*this.fov)/this.zoom)}getFilmWidth(){// film not completely covered in portrait format (aspect < 1)
return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){// film not completely covered in landscape format (aspect > 1)
return this.filmGauge/Math.max(this.aspect,1)}/**
	 * Sets an offset in a larger frustum. This is useful for multi-window or
	 * multi-monitor/multi-machine setups.
	 *
	 * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
	 * the monitors are in grid like this
	 *
	 *   +---+---+---+
	 *   | A | B | C |
	 *   +---+---+---+
	 *   | D | E | F |
	 *   +---+---+---+
	 *
	 * then for each monitor you would call it like this
	 *
	 *   const w = 1920;
	 *   const h = 1080;
	 *   const fullWidth = w * 3;
	 *   const fullHeight = h * 2;
	 *
	 *   --A--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
	 *   --B--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
	 *   --C--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
	 *   --D--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
	 *   --E--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
	 *   --F--
	 *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
	 *
	 *   Note there is no reason monitors have to be the same size or in a grid.
	 */setViewOffset(e,t,i,n,r,s){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*u*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,s=this.view;if(null!==this.view&&this.view.enabled){let e=s.fullWidth,a=s.fullHeight;r+=s.offsetX*n/e,t-=s.offsetY*i/a,n*=s.width/e,i*=s.height/a}let a=this.filmOffset;0!==a&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tG extends eW{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let n=new tH(-90,1,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);let r=new tH(-90,1,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);let s=new tH(-90,1,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);let a=new tH(-90,1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);let o=new tH(-90,1,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);let l=new tH(-90,1,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){null===this.parent&&this.updateMatrixWorld();let i=this.renderTarget,[n,r,s,a,o,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,c=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;let d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,o),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=c,i.texture.needsPMREMUpdate=!0}}class tW extends k{constructor(e,t,i,n,r,s,a,o,l,h){super(e=void 0!==e?e:[],t=void 0!==t?t:301,i,n,r,s,a,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tq extends F{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new tW(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),// By convention -- likely based on the RenderMan spec from the 1990's -- cube maps are specified by WebGL (and three.js)
// in a coordinate system in which positive-x is to the right when looking up the positive-z axis -- in other words,
// in a left-handed coordinate system. By continuing this convention, preexisting cube maps continued to render correctly.
// three.js uses a right-handed coordinate system. So environment maps used in three.js appear to have px and nx swapped
// and the flag isRenderTargetTexture controls this conversion. The flip is not required when using WebGLCubeRenderTarget.texture
// as a cube texture (this is detected when isRenderTargetTexture is set to true for cube textures).
this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,this.texture.minFilter=void 0!==t.minFilter?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:/* glsl */`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:/* glsl */`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new tN(5,5,5),r=new tF({name:"CubemapFromEquirect",uniforms:tz(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;let s=new tO(n,r),a=t.minFilter;1008===t.minFilter&&(t.minFilter=1006);let o=new tG(1,10,this);return o.update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(r)}}const tj=/*@__PURE__*/new G,tJ=/*@__PURE__*/new G,tX=/*@__PURE__*/new S;class tY{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,// normal is assumed to be normalized
this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=tj.subVectors(i,t).cross(tJ.subVectors(e,t)).normalize();return(// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?
this.setFromNormalAndCoplanarPoint(n,e),this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){// Note: will lead to a divide by zero if the plane is invalid.
let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(tj),n=this.normal.dot(i);if(0===n)return(// line is coplanar, return origin
0===this.distanceToPoint(e.start)?t.copy(e.start):null);let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.
let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tX.getNormalMatrix(e),n=this.coplanarPoint(tj).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tK=/*@__PURE__*/new eu,tZ=/*@__PURE__*/new G;class tQ{constructor(e=new tY,t=new tY,i=new tY,n=new tY,r=new tY,s=new tY){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,n=i[0],r=i[1],s=i[2],a=i[3],o=i[4],l=i[5],h=i[6],u=i[7],c=i[8],d=i[9],p=i[10],f=i[11],m=i[12],g=i[13],_=i[14],v=i[15];return t[0].setComponents(a-n,u-o,f-c,v-m).normalize(),t[1].setComponents(a+n,u+o,f+c,v+m).normalize(),t[2].setComponents(a+r,u+l,f+d,v+g).normalize(),t[3].setComponents(a-r,u-l,f-d,v-g).normalize(),t[4].setComponents(a-s,u-h,f-p,v-_).normalize(),t[5].setComponents(a+s,u+h,f+p,v+_).normalize(),this}intersectsObject(e){if(void 0!==e.boundingSphere)null===e.boundingSphere&&e.computeBoundingSphere(),tK.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;null===t.boundingSphere&&t.computeBoundingSphere(),tK.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tK)}intersectsSprite(e){return tK.center.set(0,0,0),tK.radius=.7071067811865476,tK.applyMatrix4(e.matrixWorld),this.intersectsSphere(tK)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let e=0;e<6;e++){let r=t[e].distanceToPoint(i);if(r<n)return!1}return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(// corner at max distance
tZ.x=n.normal.x>0?e.max.x:e.min.x,tZ.y=n.normal.y>0?e.max.y:e.min.y,tZ.z=n.normal.z>0?e.max.z:e.min.z,0>n.distanceToPoint(tZ))return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(0>t[i].distanceToPoint(e))return!1;return!0}clone(){return new this.constructor().copy(this)}}function t$(){let e=null,t=!1,i=null,n=null;function r(t,s){i(t,s),n=e.requestAnimationFrame(r)}return{start:function(){!0!==t&&null!==i&&(n=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(e){i=e},setContext:function(t){e=t}}}function t0(e,t){let i=t.isWebGL2,n=new WeakMap;return{get://
function(e){return e.isInterleavedBufferAttribute&&(e=e.data),n.get(e)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=n.get(t);i&&(e.deleteBuffer(i.buffer),n.delete(t))},update:function(t,r){if(t.isGLBufferAttribute){let e=n.get(t);(!e||e.version<t.version)&&n.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);let s=n.get(t);void 0===s?n.set(t,function(t,n){let r;let s=t.array,a=t.usage,o=e.createBuffer();if(e.bindBuffer(n,o),e.bufferData(n,s,a),t.onUploadCallback(),s instanceof Float32Array)r=5126;else if(s instanceof Uint16Array){if(t.isFloat16BufferAttribute){if(i)r=5131;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.")}else r=5123}else if(s instanceof Int16Array)r=5122;else if(s instanceof Uint32Array)r=5125;else if(s instanceof Int32Array)r=5124;else if(s instanceof Int8Array)r=5120;else if(s instanceof Uint8Array)r=5121;else if(s instanceof Uint8ClampedArray)r=5121;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:o,type:r,bytesPerElement:s.BYTES_PER_ELEMENT,version:t.version}}(t,r)):s.version<t.version&&(!function(t,n,r){let s=n.array,a=n.updateRange;e.bindBuffer(r,t),-1===a.count?e.bufferSubData(r,0,s):(i?e.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s,a.offset,a.count):e.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s.subarray(a.offset,a.offset+a.count)),a.count=-1),n.onUploadCallback()}(s.buffer,t,r),s.version=t.version)}}}class t1 extends tm{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,s=t/2,a=Math.floor(i),o=Math.floor(n),l=a+1,h=o+1,u=e/a,c=t/o,d=[],p=[],f=[],m=[];for(let e=0;e<h;e++){let t=e*c-s;for(let i=0;i<l;i++){let n=i*u-r;p.push(n,-t,0),f.push(0,0,1),m.push(i/a),m.push(1-e/o)}}for(let e=0;e<o;e++)for(let t=0;t<a;t++){let i=t+l*e,n=t+l*(e+1),r=t+1+l*(e+1),s=t+1+l*e;d.push(i,n,s),d.push(n,r,s)}this.setIndex(d),this.setAttribute("position",new to(p,3)),this.setAttribute("normal",new to(f,3)),this.setAttribute("uv",new to(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t1(e.width,e.height,e.widthSegments,e.heightSegments)}}const t3={alphamap_fragment:"#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif",alphatest_pars_fragment:"#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",iridescence_fragment:"#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			 return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float R21 = R12;\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = dFdx( surf_pos.xyz );\n		vec3 vSigmaY = dFdy( surf_pos.xyz );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",color_fragment:"#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",color_pars_vertex:"#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",color_vertex:"#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",common:"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n	return dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_v0 0.339\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_v1 0.276\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_v4 0.046\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_v5 0.016\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_v6 0.0038\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",lights_lambert_fragment:"LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",lights_lambert_pars_fragment:"varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( LEGACY_LIGHTS )\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#else\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometry.viewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",map_fragment:"#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",morphcolor_vertex:"#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif",normal_fragment_begin:"float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#ifdef USE_NORMALMAP_TANGENTSPACE\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",normal_pars_fragment:"#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",normal_pars_vertex:"#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",normal_vertex:"#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",clearcoat_normal_fragment_begin:"#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",clearcoat_pars_fragment:"#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",iridescence_pars_fragment:"#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",output_fragment:"#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n	return packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",shadowmap_pars_vertex:"#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",shadowmap_vertex:"#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",transmission_fragment:"#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",transmission_pars_fragment:"#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		\n		vec2 lodFudge = pow( 1.95, lod ) / fullSize;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec2 fullSize = vec2( textureSize( sampler, 0 ) );\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif",uv_pars_fragment:"#ifdef USE_UV\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n	varying vec2 vUv;\n#endif\n#ifdef USE_UV2\n	attribute vec2 uv2;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",uv_vertex:"#ifdef USE_UV\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",background_frag:"uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",backgroundCube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",backgroundCube_frag:"#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",meshlambert_frag:"#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",meshnormal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",meshnormal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",shadow_vert:"#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}"},t2={common:{diffuse:{value:/*@__PURE__*/new e9(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:/*@__PURE__*/new S},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/new S},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:/*@__PURE__*/new S}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:/*@__PURE__*/new S}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:/*@__PURE__*/new S}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:/*@__PURE__*/new S},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:/*@__PURE__*/new S},normalScale:{value:/*@__PURE__*/new w(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:/*@__PURE__*/new S},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:/*@__PURE__*/new S}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:/*@__PURE__*/new S}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:/*@__PURE__*/new S}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:/*@__PURE__*/new e9(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},// TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:/*@__PURE__*/new e9(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:/*@__PURE__*/new S}},sprite:{diffuse:{value:/*@__PURE__*/new e9(16777215)},opacity:{value:1},center:{value:/*@__PURE__*/new w(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:/*@__PURE__*/new S},alphaMap:{value:null},alphaTest:{value:0}}},t5={basic:{uniforms:/*@__PURE__*/tU([t2.common,t2.specularmap,t2.envmap,t2.aomap,t2.lightmap,t2.fog]),vertexShader:t3.meshbasic_vert,fragmentShader:t3.meshbasic_frag},lambert:{uniforms:/*@__PURE__*/tU([t2.common,t2.specularmap,t2.envmap,t2.aomap,t2.lightmap,t2.emissivemap,t2.bumpmap,t2.normalmap,t2.displacementmap,t2.fog,t2.lights,{emissive:{value:/*@__PURE__*/new e9(0)}}]),vertexShader:t3.meshlambert_vert,fragmentShader:t3.meshlambert_frag},phong:{uniforms:/*@__PURE__*/tU([t2.common,t2.specularmap,t2.envmap,t2.aomap,t2.lightmap,t2.emissivemap,t2.bumpmap,t2.normalmap,t2.displacementmap,t2.fog,t2.lights,{emissive:{value:/*@__PURE__*/new e9(0)},specular:{value:/*@__PURE__*/new e9(1118481)},shininess:{value:30}}]),vertexShader:t3.meshphong_vert,fragmentShader:t3.meshphong_frag},standard:{uniforms:/*@__PURE__*/tU([t2.common,t2.envmap,t2.aomap,t2.lightmap,t2.emissivemap,t2.bumpmap,t2.normalmap,t2.displacementmap,t2.roughnessmap,t2.metalnessmap,t2.fog,t2.lights,{emissive:{value:/*@__PURE__*/new e9(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}// temporary
}]),vertexShader:t3.meshphysical_vert,fragmentShader:t3.meshphysical_frag},toon:{uniforms:/*@__PURE__*/tU([t2.common,t2.aomap,t2.lightmap,t2.emissivemap,t2.bumpmap,t2.normalmap,t2.displacementmap,t2.gradientmap,t2.fog,t2.lights,{emissive:{value:/*@__PURE__*/new e9(0)}}]),vertexShader:t3.meshtoon_vert,fragmentShader:t3.meshtoon_frag},matcap:{uniforms:/*@__PURE__*/tU([t2.common,t2.bumpmap,t2.normalmap,t2.displacementmap,t2.fog,{matcap:{value:null}}]),vertexShader:t3.meshmatcap_vert,fragmentShader:t3.meshmatcap_frag},points:{uniforms:/*@__PURE__*/tU([t2.points,t2.fog]),vertexShader:t3.points_vert,fragmentShader:t3.points_frag},dashed:{uniforms:/*@__PURE__*/tU([t2.common,t2.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:t3.linedashed_vert,fragmentShader:t3.linedashed_frag},depth:{uniforms:/*@__PURE__*/tU([t2.common,t2.displacementmap]),vertexShader:t3.depth_vert,fragmentShader:t3.depth_frag},normal:{uniforms:/*@__PURE__*/tU([t2.common,t2.bumpmap,t2.normalmap,t2.displacementmap,{opacity:{value:1}}]),vertexShader:t3.meshnormal_vert,fragmentShader:t3.meshnormal_frag},sprite:{uniforms:/*@__PURE__*/tU([t2.sprite,t2.fog]),vertexShader:t3.sprite_vert,fragmentShader:t3.sprite_frag},background:{uniforms:{uvTransform:{value:/*@__PURE__*/new S},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:t3.background_vert,fragmentShader:t3.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:t3.backgroundCube_vert,fragmentShader:t3.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:t3.cube_vert,fragmentShader:t3.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:t3.equirect_vert,fragmentShader:t3.equirect_frag},distanceRGBA:{uniforms:/*@__PURE__*/tU([t2.common,t2.displacementmap,{referencePosition:{value:/*@__PURE__*/new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:t3.distanceRGBA_vert,fragmentShader:t3.distanceRGBA_frag},shadow:{uniforms:/*@__PURE__*/tU([t2.lights,t2.fog,{color:{value:/*@__PURE__*/new e9(0)},opacity:{value:1}}]),vertexShader:t3.shadow_vert,fragmentShader:t3.shadow_frag}};t5.physical={uniforms:/*@__PURE__*/tU([t5.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:/*@__PURE__*/new S},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:/*@__PURE__*/new S},clearcoatNormalScale:{value:/*@__PURE__*/new w(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:/*@__PURE__*/new S},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:/*@__PURE__*/new S},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:/*@__PURE__*/new S},sheen:{value:0},sheenColor:{value:/*@__PURE__*/new e9(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:/*@__PURE__*/new S},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:/*@__PURE__*/new S},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:/*@__PURE__*/new S},transmissionSamplerSize:{value:/*@__PURE__*/new w},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:/*@__PURE__*/new S},attenuationDistance:{value:0},attenuationColor:{value:/*@__PURE__*/new e9(0)},specularColor:{value:/*@__PURE__*/new e9(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:/*@__PURE__*/new S},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:/*@__PURE__*/new S}}]),vertexShader:t3.meshphysical_vert,fragmentShader:t3.meshphysical_frag};const t4={r:0,b:0,g:0};function t6(e,t,i,n,r,s,a){let o,l;let h=new e9(0),u=!0===s?0:1,c=null,d=0,p=null;function f(t,i){t.getRGB(t4,tk(e)),n.buffers.color.setClear(t4.r,t4.g,t4.b,i,a)}return{getClearColor:function(){return h},setClearColor:function(e,t=1){h.set(e),f(h,u=t)},getClearAlpha:function(){return u},setClearAlpha:function(e){f(h,u=e)},render:function(n,s){let a=!1,m=!0===s.isScene?s.background:null;if(m&&m.isTexture){let e=s.backgroundBlurriness>0;// use PMREM if the user wants to blur the background
m=(e?i:t).get(m)}// Ignore background in AR
// TODO: Reconsider this.
let g=e.xr,_=g.getSession&&g.getSession();_&&"additive"===_.environmentBlendMode&&(m=null),null===m?f(h,u):m&&m.isColor&&(f(m,1),a=!0),(e.autoClear||a)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),m&&(m.isCubeTexture||306===m.mapping)?(void 0===l&&((l=new tO(new tN(1,1,1),new tF({name:"BackgroundCubeMaterial",uniforms:tz(t5.backgroundCube.uniforms),vertexShader:t5.backgroundCube.vertexShader,fragmentShader:t5.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(e,t,i){this.matrixWorld.copyPosition(i.matrixWorld)},// add "envMap" material property so the renderer can evaluate it like for built-in materials
Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&!1===m.isRenderTargetTexture?-1:1,l.material.uniforms.backgroundBlurriness.value=s.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=s.backgroundIntensity,l.material.toneMapped=3001!==m.encoding,(c!==m||d!==m.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,c=m,d=m.version,p=e.toneMapping),l.layers.enableAll(),// push to the pre-sorted opaque render list
n.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(void 0===o&&((o=new tO(new t1(2,2),new tF({name:"BackgroundMaterial",uniforms:tz(t5.background.uniforms),vertexShader:t5.background.vertexShader,fragmentShader:t5.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),// add "map" material property so the renderer can evaluate it like for built-in materials
Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(o)),o.material.uniforms.t2D.value=m,o.material.uniforms.backgroundIntensity.value=s.backgroundIntensity,o.material.toneMapped=3001!==m.encoding,!0===m.matrixAutoUpdate&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||d!==m.version||p!==e.toneMapping)&&(o.material.needsUpdate=!0,c=m,d=m.version,p=e.toneMapping),o.layers.enableAll(),// push to the pre-sorted opaque render list
n.unshift(o,o.geometry,o.material,0,0,null))}}}function t8(e,t,i,n){let r=e.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||null!==s,o={},l=p(null),h=l,u=!1;function c(t){return n.isWebGL2?e.bindVertexArray(t):s.bindVertexArrayOES(t)}function d(t){return n.isWebGL2?e.deleteVertexArray(t):s.deleteVertexArrayOES(t)}function p(e){let t=[],i=[],n=[];for(let e=0;e<r;e++)t[e]=0,i[e]=0,n[e]=0;return{// for backward compatibility on non-VAO support browser
geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:i,attributeDivisors:n,object:e,attributes:{},index:null}}function f(){let e=h.newAttributes;for(let t=0,i=e.length;t<i;t++)e[t]=0}function m(e){g(e,0)}function g(i,r){let s=h.newAttributes,a=h.enabledAttributes,o=h.attributeDivisors;if(s[i]=1,0===a[i]&&(e.enableVertexAttribArray(i),a[i]=1),o[i]!==r){let s=n.isWebGL2?e:t.get("ANGLE_instanced_arrays");s[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](i,r),o[i]=r}}function _(){let t=h.newAttributes,i=h.enabledAttributes;for(let n=0,r=i.length;n<r;n++)i[n]!==t[n]&&(e.disableVertexAttribArray(n),i[n]=0)}function v(t,i,r,s,a,o){!0===n.isWebGL2&&(5124===r||5125===r)?e.vertexAttribIPointer(t,i,r,a,o):e.vertexAttribPointer(t,i,r,s,a,o)}function x(){y(),u=!0,h!==l&&c((h=l).object)}// for backward-compatibility
function y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(r,l,d,x,y){let M=!1;if(a){let t=function(t,i,r){let a=!0===r.wireframe,l=o[t.id];void 0===l&&(l={},o[t.id]=l);let h=l[i.id];void 0===h&&(h={},l[i.id]=h);let u=h[a];return void 0===u&&(u=p(n.isWebGL2?e.createVertexArray():s.createVertexArrayOES()),h[a]=u),u}(x,d,l);h!==t&&c((h=t).object),(M=function(e,t,i,n){let r=h.attributes,s=t.attributes,a=0,o=i.getAttributes();for(let t in o){let i=o[t];if(i.location>=0){let i=r[t],n=s[t];if(void 0===n&&("instanceMatrix"===t&&e.instanceMatrix&&(n=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(n=e.instanceColor)),void 0===i||i.attribute!==n||n&&i.data!==n.data)return!0;a++}}return h.attributesNum!==a||h.index!==n}(r,x,d,y))&&function(e,t,i,n){let r={},s=t.attributes,a=0,o=i.getAttributes();for(let t in o){let i=o[t];if(i.location>=0){let i=s[t];void 0===i&&("instanceMatrix"===t&&e.instanceMatrix&&(i=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(i=e.instanceColor));let n={};n.attribute=i,i&&i.data&&(n.data=i.data),r[t]=n,a++}}h.attributes=r,h.attributesNum=a,h.index=n}(r,x,d,y)}else{let e=!0===l.wireframe;(h.geometry!==x.id||h.program!==d.id||h.wireframe!==e)&&(h.geometry=x.id,h.program=d.id,h.wireframe=e,M=!0)}null!==y&&i.update(y,34963),(M||u)&&(u=!1,function(r,s,a,o){if(!1===n.isWebGL2&&(r.isInstancedMesh||o.isInstancedBufferGeometry)&&null===t.get("ANGLE_instanced_arrays"))return;f();let l=o.attributes,h=a.getAttributes(),u=s.defaultAttributeValues;for(let t in h){let n=h[t];if(n.location>=0){let s=l[t];if(void 0===s&&("instanceMatrix"===t&&r.instanceMatrix&&(s=r.instanceMatrix),"instanceColor"===t&&r.instanceColor&&(s=r.instanceColor)),void 0!==s){let t=s.normalized,a=s.itemSize,l=i.get(s);// TODO Attribute may not be available on context restore
if(void 0===l)continue;let h=l.buffer,u=l.type,c=l.bytesPerElement;if(s.isInterleavedBufferAttribute){let i=s.data,l=i.stride,d=s.offset;if(i.isInstancedInterleavedBuffer){for(let e=0;e<n.locationSize;e++)g(n.location+e,i.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=i.meshPerAttribute*i.count)}else for(let e=0;e<n.locationSize;e++)m(n.location+e);e.bindBuffer(34962,h);for(let e=0;e<n.locationSize;e++)v(n.location+e,a/n.locationSize,u,t,l*c,(d+a/n.locationSize*e)*c)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<n.locationSize;e++)g(n.location+e,s.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<n.locationSize;e++)m(n.location+e);e.bindBuffer(34962,h);for(let e=0;e<n.locationSize;e++)v(n.location+e,a/n.locationSize,u,t,a*c,a/n.locationSize*e*c)}}else if(void 0!==u){let i=u[t];if(void 0!==i)switch(i.length){case 2:e.vertexAttrib2fv(n.location,i);break;case 3:e.vertexAttrib3fv(n.location,i);break;case 4:e.vertexAttrib4fv(n.location,i);break;default:e.vertexAttrib1fv(n.location,i)}}}}_()}(r,l,d,x),null!==y&&e.bindBuffer(34963,i.get(y).buffer))},reset:x,resetDefaultState:y,dispose:function(){for(let e in x(),o){let t=o[e];for(let e in t){let i=t[e];for(let e in i)d(i[e].object),delete i[e];delete t[e]}delete o[e]}},releaseStatesOfGeometry:function(e){if(void 0===o[e.id])return;let t=o[e.id];for(let e in t){let i=t[e];for(let e in i)d(i[e].object),delete i[e];delete t[e]}delete o[e.id]},releaseStatesOfProgram:function(e){for(let t in o){let i=o[t];if(void 0===i[e.id])continue;let n=i[e.id];for(let e in n)d(n[e].object),delete n[e];delete i[e.id]}},initAttributes:f,enableAttribute:m,disableUnusedAttributes:_}}function t7(e,t,i,n){let r;let s=n.isWebGL2;//
this.setMode=function(e){r=e},this.render=function(t,n){e.drawArrays(r,t,n),i.update(n,r,1)},this.renderInstances=function(n,a,o){let l,h;if(0!==o){if(s)l=e,h="drawArraysInstanced";else if(l=t.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",null===l){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}l[h](r,n,a,o),i.update(a,r,o)}}}function t9(e,t,i){let n;function r(t){if("highp"===t){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s="undefined"!=typeof WebGL2RenderingContext&&"WebGL2RenderingContext"===e.constructor.name,a=void 0!==i.precision?i.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||t.has("WEBGL_draw_buffers"),h=!0===i.logarithmicDepthBuffer,u=e.getParameter(34930),c=e.getParameter(35660),d=e.getParameter(3379),p=e.getParameter(34076),f=e.getParameter(34921),m=e.getParameter(36347),g=e.getParameter(36348),_=e.getParameter(36349),v=c>0,x=s||t.has("OES_texture_float"),y=s?e.getParameter(36183):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==n)return n;if(!0===t.has("EXT_texture_filter_anisotropic")){let i=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:v&&x,maxSamples:y}}function ie(e){let t=this,i=null,n=0,r=!1,s=!1,a=new tY,o=new S,l={value:null,needsUpdate:!1};function h(e,i,n,r){let s=null!==e?e.length:0,h=null;if(0!==s){if(h=l.value,!0!==r||null===h){let t=n+4*s,r=i.matrixWorldInverse;o.getNormalMatrix(r),(null===h||h.length<t)&&(h=new Float32Array(t));for(let t=0,i=n;t!==s;++t,i+=4)a.copy(e[t]).applyMatrix4(r,o),a.normal.toArray(h,i),h[i+3]=a.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=s,t.numIntersection=0,h}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let i=0!==e.length||t||// enable state of previous frame - the clipping code has to
// run another frame in order to reset the state:
0!==n||r;return r=t,n=e.length,i},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(e,t){i=h(e,t,0)},this.setState=function(a,o,u){let c=a.clippingPlanes,d=a.clipIntersection,p=a.clipShadows,f=e.get(a);if(r&&null!==c&&0!==c.length&&(!s||p)){let e=s?0:n,t=4*e,r=f.clippingState||null;l.value=r,r=h(c,o,t,u);for(let e=0;e!==t;++e)r[e]=i[e];f.clippingState=r,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=e}else // there's no local clipping
s?h(null):(l.value!==i&&(l.value=i,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0)}}function it(e){let t=new WeakMap;function i(e,t){return 303===t?e.mapping=301:304===t&&(e.mapping=302),e}function n(e){let i=e.target;i.removeEventListener("dispose",n);let r=t.get(i);void 0!==r&&(t.delete(i),r.dispose())}return{get:function(r){if(r&&r.isTexture&&!1===r.isRenderTargetTexture){let s=r.mapping;if(303===s||304===s){if(t.has(r)){let e=t.get(r).texture;return i(e,r.mapping)}{let s=r.image;if(!s||!(s.height>0))return null;{let a=new tq(s.height/2);return a.fromEquirectangularTexture(e,r),t.set(r,a),r.addEventListener("dispose",n),i(a.texture,r.mapping)}}}}return r},dispose:function(){t=new WeakMap}}}class ii extends tV{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,s=i+e,a=n+t,o=n-t;if(null!==this.view&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=e*this.view.offsetX,s=r+e*this.view.width,a-=t*this.view.offsetY,o=a-t*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}}// The standard deviations (radians) associated with the extra mips. These are
// chosen to approximate a Trowbridge-Reitz distribution function times the
// geometric shadowing function. These sigma values squared must match the
// variance #defines in cube_uv_reflection_fragment.glsl.js.
const ir=[.125,.215,.35,.446,.526,.582],is=/*@__PURE__*/new ii,ia=/*@__PURE__*/new e9;let io=null;// Golden Ratio
const il=(1+Math.sqrt(5))/2,ih=1/il,iu=[/*@__PURE__*/new G(1,1,1),/*@__PURE__*/new G(-1,1,1),/*@__PURE__*/new G(1,1,-1),/*@__PURE__*/new G(-1,1,-1),/*@__PURE__*/new G(0,il,ih),/*@__PURE__*/new G(0,il,-ih),/*@__PURE__*/new G(ih,0,il),/*@__PURE__*/new G(-ih,0,il),/*@__PURE__*/new G(il,ih,0),/*@__PURE__*/new G(-il,ih,0)];/**
 * This class generates a Prefiltered, Mipmapped Radiance Environment Map
 * (PMREM) from a cubeMap environment texture. This allows different levels of
 * blur to be quickly accessed based on material roughness. It is packed into a
 * special CubeUV format that allows us to perform custom interpolation so that
 * we can support nonlinear formats such as RGBE. Unlike a traditional mipmap
 * chain, it only goes down to the LOD_MIN level (above), and then creates extra
 * even more filtered 'mips' at the same LOD_MIN resolution, associated with
 * higher roughness levels. In this way we maintain resolution to smoothly
 * interpolate diffuse lighting while limiting sampling computation.
 *
 * Paper: Fast, Accurate Image-Based Lighting
 * https://drive.google.com/file/d/15y8r_UpKlU9SvV4ILb0C3qCPecS8pvLz/view
*/class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}/**
	 * Generates a PMREM from a supplied Scene, which can be faster than using an
	 * image if networking bandwidth is low. Optional sigma specifies a blur radius
	 * in radians to be applied to the scene before PMREM generation. Optional near
	 * and far planes ensure the scene is rendered in its entirety (the cubeCamera
	 * is placed at the origin).
	 */fromScene(e,t=0,i=.1,n=100){io=this._renderer.getRenderTarget(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}/**
	 * Generates a PMREM from an equirectangular texture, which can be either LDR
	 * or HDR. The ideal input image size is 1k (1024 x 512),
	 * as this matches best with the 256 x 256 cubemap output.
	 */fromEquirectangular(e,t=null){return this._fromTexture(e,t)}/**
	 * Generates a PMREM from an cubemap texture, which can be either LDR
	 * or HDR. The ideal input cube size is 256 x 256,
	 * as this matches best with the 256 x 256 cubemap output.
	 */fromCubemap(e,t=null){return this._fromTexture(e,t)}/**
	 * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
	 * your texture's network fetch for increased concurrency.
	 */compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}/**
	 * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
	 * your texture's network fetch for increased concurrency.
	 */compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}/**
	 * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
	 * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
	 * one of them will cause any others to also become unusable.
	 */dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}// private interface
_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(io),e.scissorTest=!1,ip(e,0,0,e.width,e.height)}_fromTexture(e,t){301===e.mapping||302===e.mapping?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},n=id(e,t,i);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=id(e,t,i);let{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(e){let t=[],i=[],n=[],r=e,s=e-4+1+ir.length;for(let a=0;a<s;a++){let s=Math.pow(2,r);i.push(s);let o=1/s;a>e-4?o=ir[a-e+4-1]:0===a&&(o=0),n.push(o);let l=1/(s-2),h=-l,u=1+l,c=[h,h,u,h,u,u,h,h,u,u,h,u],d=new Float32Array(108),p=new Float32Array(72),f=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,i=e>2?0:-1,n=[t,i,0,t+2/3,i,0,t+2/3,i+1,0,t,i,0,t+2/3,i+1,0,t,i+1,0];d.set(n,18*e),p.set(c,12*e);let r=[e,e,e,e,e,e];f.set(r,6*e)}let m=new tm;m.setAttribute("position",new tr(d,3)),m.setAttribute("uv",new tr(p,2)),m.setAttribute("faceIndex",new tr(f,1)),t.push(m),r>4&&r--}return{lodPlanes:t,sizeLods:i,sigmas:n}}(n)),this._blurMaterial=function(e,t,i){let n=new Float32Array(20),r=new G(0,1,0),s=new tF({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:i_(),fragmentShader:/* glsl */`

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
		`,blending:0,depthTest:!1,depthWrite:!1});return s}(n,e,t)}return n}_compileMaterial(e){let t=new tO(this._lodPlanes[0],e);this._renderer.compile(t,is)}_sceneToCubeUV(e,t,i,n){let r=new tH(90,1,t,i),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(ia),o.toneMapping=0,o.autoClear=!1;let u=new tt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),c=new tO(new tN,u),d=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,d=!0):(u.color.copy(ia),d=!0);for(let t=0;t<6;t++){let i=t%3;0===i?(r.up.set(0,s[t],0),r.lookAt(a[t],0,0)):1===i?(r.up.set(0,0,s[t]),r.lookAt(0,a[t],0)):(r.up.set(0,s[t],0),r.lookAt(0,0,a[t]));let l=this._cubeSize;ip(n,i*l,t>2?l:0,l,l),o.setRenderTarget(n),d&&o.render(c,r),o.render(e,r)}c.geometry.dispose(),c.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,n=301===e.mapping||302===e.mapping;n?(null===this._cubemapMaterial&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=im());let r=n?this._cubemapMaterial:this._equirectMaterial,s=new tO(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let o=this._cubeSize;ip(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,is)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let i=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),n=iu[(t-1)%iu.length];this._blur(e,t-1,t,i,n)}t.autoClear=i}/**
	 * This is a two-pass Gaussian blur for a cubemap. Normally this is done
	 * vertically and horizontally, but this breaks down on a cube. Here we apply
	 * the blur latitudinally (around the poles), and then longitudinally (towards
	 * the poles) to approximate the orthogonally-separable blur. It is least
	 * accurate at the poles, but still does a decent job.
	 */_blur(e,t,i,n,r){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",r),this._halfBlur(s,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,s,a){let o=this._renderer,l=this._blurMaterial;"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new tO(this._lodPlanes[n],l),u=l.uniforms,c=this._sizeLods[i]-1,d=isFinite(r)?Math.PI/(2*c):2*Math.PI/39,p=r/d,f=isFinite(r)?1+Math.floor(3*p):20;f>20&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let m=[],g=0;for(let e=0;e<20;++e){let t=e/p,i=Math.exp(-t*t/2);m.push(i),0===e?g+=i:e<f&&(g+=2*i)}for(let e=0;e<m.length;e++)m[e]=m[e]/g;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=m,u.latitudinal.value="latitudinal"===s,a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=d,u.mipInt.value=_-i;let v=this._sizeLods[n],x=3*v*(n>_-4?n-_+4:0),y=4*(this._cubeSize-v);ip(t,x,y,3*v,2*v),o.setRenderTarget(t),o.render(h,is)}}function id(e,t,i){let n=new F(e,t,i);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ip(e,t,i,n,r){e.viewport.set(t,i,n,r),e.scissor.set(t,i,n,r)}function im(){return new tF({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:i_(),fragmentShader:/* glsl */`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ig(){return new tF({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:i_(),fragmentShader:/* glsl */`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function i_(){return/* glsl */`

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
	`}function iv(e){let t=new WeakMap,i=null;function n(e){let i=e.target;i.removeEventListener("dispose",n);let r=t.get(i);void 0!==r&&(t.delete(i),r.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=303===s||304===s,o=301===s||302===s;// equirect/cube map to cubeUV conversion
if(a||o){if(r.isRenderTargetTexture&&!0===r.needsPMREMUpdate){r.needsPMREMUpdate=!1;let n=t.get(r);return null===i&&(i=new ic(e)),n=a?i.fromEquirectangular(r,n):i.fromCubemap(r,n),t.set(r,n),n.texture}if(t.has(r))return t.get(r).texture;{let s=r.image;if(!(a&&s&&s.height>0||o&&s&&function(e){let t=0;for(let i=0;i<6;i++)void 0!==e[i]&&t++;return 6===t}(s)))return null;{null===i&&(i=new ic(e));let s=a?i.fromEquirectangular(r):i.fromCubemap(r);return t.set(r,s),r.addEventListener("dispose",n),s.texture}}}}return r},dispose:function(){t=new WeakMap,null!==i&&(i.dispose(),i=null)}}}function ix(e){let t={};function i(i){let n;if(void 0!==t[i])return t[i];switch(i){case"WEBGL_depth_texture":n=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=e.getExtension(i)}return t[i]=n,n}return{has:function(e){return null!==i(e)},init:function(e){e.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(e){let t=i(e);return null===t&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),t}}}function iy(e,t,i,n){let r={},s=new WeakMap;function a(e){let o=e.target;for(let e in null!==o.index&&t.remove(o.index),o.attributes)t.remove(o.attributes[e]);o.removeEventListener("dispose",a),delete r[o.id];let l=s.get(o);l&&(t.remove(l),s.delete(o)),n.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,//
i.memory.geometries--}function o(e){let i=[],n=e.index,r=e.attributes.position,a=0;if(null!==n){let e=n.array;a=n.version;for(let t=0,n=e.length;t<n;t+=3){let n=e[t+0],r=e[t+1],s=e[t+2];i.push(n,r,r,s,s,n)}}else{let e=r.array;a=r.version;for(let t=0,n=e.length/3-1;t<n;t+=3){let e=t+0,n=t+1,r=t+2;i.push(e,n,n,r,r,e)}}let o=new(T(i)?ta:ts)(i,1);o.version=a;// Updating index buffer in VAO now. See WebGLBindingStates
//
let l=s.get(e);l&&t.remove(l),//
s.set(e,o)}return{get:function(e,t){return!0===r[t.id]||(t.addEventListener("dispose",a),r[t.id]=!0,i.memory.geometries++),t},update:function(e){let i=e.attributes;// Updating index buffer in VAO now. See WebGLBindingStates.
for(let e in i)t.update(i[e],34962);// morph targets
let n=e.morphAttributes;for(let e in n){let i=n[e];for(let e=0,n=i.length;e<n;e++)t.update(i[e],34962)}},getWireframeAttribute:function(e){let t=s.get(e);if(t){let i=e.index;null!==i&&t.version<i.version&&o(e)}else o(e);return s.get(e)}}}function iM(e,t,i,n){let r,s,a;let o=n.isWebGL2;//
this.setMode=function(e){r=e},this.setIndex=function(e){s=e.type,a=e.bytesPerElement},this.render=function(t,n){e.drawElements(r,n,s,t*a),i.update(n,r,1)},this.renderInstances=function(n,l,h){let u,c;if(0!==h){if(o)u=e,c="drawElementsInstanced";else if(u=t.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",null===u){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[c](r,l,s,n*a,h),i.update(l,r,h)}}}function iw(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(e,i,n){switch(t.calls++,i){case 4:t.triangles+=n*(e/3);break;case 1:t.lines+=n*(e/2);break;case 3:t.lines+=n*(e-1);break;case 2:t.lines+=n*e;break;case 0:t.points+=n*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function iS(e,t){return e[0]-t[0]}function ib(e,t){return Math.abs(t[1])-Math.abs(e[1])}function iT(e,t,i){let n={},r=new Float32Array(8),s=new WeakMap,a=new B,o=[];for(let e=0;e<8;e++)o[e]=[e,0];return{update:function(l,h,u){let c=l.morphTargetInfluences;if(!0===t.isWebGL2){// instead of using attributes, the WebGL 2 code path encodes morph targets
// into an array of data textures. Each layer represents a single morph target.
let n=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,r=void 0!==n?n.length:0,o=s.get(h);if(void 0===o||o.count!==r){void 0!==o&&o.texture.dispose();let e=void 0!==h.morphAttributes.position,i=void 0!==h.morphAttributes.normal,n=void 0!==h.morphAttributes.color,l=h.morphAttributes.position||[],u=h.morphAttributes.normal||[],c=h.morphAttributes.color||[],d=0;!0===e&&(d=1),!0===i&&(d=2),!0===n&&(d=3);let p=h.attributes.position.count*d,f=1;p>t.maxTextureSize&&(f=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let m=new Float32Array(p*f*4*r),g=new V(m,p,f,r);g.type=1015,g.needsUpdate=!0;// fill buffer
let _=4*d;for(let t=0;t<r;t++){let r=l[t],s=u[t],o=c[t],h=p*f*4*t;for(let t=0;t<r.count;t++){let l=t*_;!0===e&&(a.fromBufferAttribute(r,t),m[h+l+0]=a.x,m[h+l+1]=a.y,m[h+l+2]=a.z,m[h+l+3]=0),!0===i&&(a.fromBufferAttribute(s,t),m[h+l+4]=a.x,m[h+l+5]=a.y,m[h+l+6]=a.z,m[h+l+7]=0),!0===n&&(a.fromBufferAttribute(o,t),m[h+l+8]=a.x,m[h+l+9]=a.y,m[h+l+10]=a.z,m[h+l+11]=4===o.itemSize?a.w:1)}}o={count:r,texture:g,size:new w(p,f)},s.set(h,o),h.addEventListener("dispose",function e(){g.dispose(),s.delete(h),h.removeEventListener("dispose",e)})}//
let l=0;for(let e=0;e<c.length;e++)l+=c[e];let d=h.morphTargetsRelative?1:1-l;u.getUniforms().setValue(e,"morphTargetBaseInfluence",d),u.getUniforms().setValue(e,"morphTargetInfluences",c),u.getUniforms().setValue(e,"morphTargetsTexture",o.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",o.size)}else{// When object doesn't have morph target influences defined, we treat it as a 0-length array
// This is important to make sure we set up morphTargetBaseInfluence / morphTargetInfluences
let t=void 0===c?0:c.length,i=n[h.id];if(void 0===i||i.length!==t){// initialise list
i=[];for(let e=0;e<t;e++)i[e]=[e,0];n[h.id]=i}// Collect influences
for(let e=0;e<t;e++){let t=i[e];t[0]=e,t[1]=c[e]}i.sort(ib);for(let e=0;e<8;e++)e<t&&i[e][1]?(o[e][0]=i[e][0],o[e][1]=i[e][1]):(o[e][0]=Number.MAX_SAFE_INTEGER,o[e][1]=0);o.sort(iS);let s=h.morphAttributes.position,a=h.morphAttributes.normal,l=0;for(let e=0;e<8;e++){let t=o[e],i=t[0],n=t[1];i!==Number.MAX_SAFE_INTEGER&&n?(s&&h.getAttribute("morphTarget"+e)!==s[i]&&h.setAttribute("morphTarget"+e,s[i]),a&&h.getAttribute("morphNormal"+e)!==a[i]&&h.setAttribute("morphNormal"+e,a[i]),r[e]=n,l+=n):(s&&!0===h.hasAttribute("morphTarget"+e)&&h.deleteAttribute("morphTarget"+e),a&&!0===h.hasAttribute("morphNormal"+e)&&h.deleteAttribute("morphNormal"+e),r[e]=0)}// GLSL shader uses formula baseinfluence * base + sum(target * influence)
// This allows us to switch between absolute morphs and relative morphs without changing shader code
// When baseinfluence = 1 - sum(influence), the above is equivalent to sum((target - base) * influence)
let d=h.morphTargetsRelative?1:1-l;u.getUniforms().setValue(e,"morphTargetBaseInfluence",d),u.getUniforms().setValue(e,"morphTargetInfluences",r)}}}}function iA(e,t,i,n){let r=new WeakMap;function s(e){let t=e.target;t.removeEventListener("dispose",s),i.remove(t.instanceMatrix),null!==t.instanceColor&&i.remove(t.instanceColor)}return{update:function(e){let a=n.render.frame,o=e.geometry,l=t.get(e,o);return r.get(l)!==a&&(t.update(l),r.set(l,a)),e.isInstancedMesh&&(!1===e.hasEventListener("dispose",s)&&e.addEventListener("dispose",s),i.update(e.instanceMatrix,34962),null!==e.instanceColor&&i.update(e.instanceColor,34962)),l},dispose:function(){r=new WeakMap}}}/**
 * Uniforms of a program.
 * Those form a tree structure with a special top-level container for the root,
 * which you get by calling 'new WebGLUniforms( gl, program )'.
 *
 *
 * Properties of inner nodes including the top-level container:
 *
 * .seq - array of nested uniforms
 * .map - nested uniforms by name
 *
 *
 * Methods of all nodes except the top-level container:
 *
 * .setValue( gl, value, [textures] )
 *
 * 		uploads a uniform value(s)
 *  	the 'textures' parameter is needed for sampler uniforms
 *
 *
 * Static methods of the top-level container (textures factorizations):
 *
 * .upload( gl, seq, values, textures )
 *
 * 		sets uniforms in 'seq' to 'values[id].value'
 *
 * .seqWithValue( seq, values ) : filteredSeq
 *
 * 		filters 'seq' entries with corresponding entry in values
 *
 *
 * Methods of the top-level container (textures factorizations):
 *
 * .setValue( gl, name, value, textures )
 *
 * 		sets uniform with  name 'name' to 'value'
 *
 * .setOptional( gl, obj, prop )
 *
 * 		like .set for an optional property of the object
 *
 */const iE=/*@__PURE__*/new k,iC=/*@__PURE__*/new V,iR=/*@__PURE__*/new class extends k{constructor(e=null,t=1,i=1,n=1){// We're going to add .setXXX() methods for setting properties later.
// Users can still set in DataTexture3D directly.
//
//	const texture = new THREE.DataTexture3D( data, width, height, depth );
// 	texture.anisotropy = 16;
//
// See #14839
super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},iP=/*@__PURE__*/new tW,iL=[],iD=[],iO=new Float32Array(16),iI=new Float32Array(9),iN=new Float32Array(4);// Flattening for arrays of vectors and matrices
function iz(e,t,i){let n=e[0];if(n<=0||n>0)return e;// unoptimized: ! isNaN( firstElem )
// see http://jacksondunstan.com/articles/983
let r=t*i,s=iL[r];if(void 0===s&&(s=new Float32Array(r),iL[r]=s),0!==t){n.toArray(s,0);for(let n=1,r=0;n!==t;++n)r+=i,e[n].toArray(s,r)}return s}function iU(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function ik(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}// Texture unit allocation
function iB(e,t){let i=iD[t];void 0===i&&(i=new Int32Array(t),iD[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}// --- Setters ---
// Note: Defining these methods externally, because they come in a bunch
// and this way their names minify.
// Single scalar
function iF(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}// Single float vector (from flat array or THREE.VectorN)
function iV(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(iU(i,t))return;e.uniform2fv(this.addr,t),ik(i,t)}}function iH(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(void 0!==t.r)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(iU(i,t))return;e.uniform3fv(this.addr,t),ik(i,t)}}function iG(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(iU(i,t))return;e.uniform4fv(this.addr,t),ik(i,t)}}// Single matrix (from flat array or THREE.MatrixN)
function iW(e,t){let i=this.cache,n=t.elements;if(void 0===n){if(iU(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ik(i,t)}else{if(iU(i,n))return;iN.set(n),e.uniformMatrix2fv(this.addr,!1,iN),ik(i,n)}}function iq(e,t){let i=this.cache,n=t.elements;if(void 0===n){if(iU(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ik(i,t)}else{if(iU(i,n))return;iI.set(n),e.uniformMatrix3fv(this.addr,!1,iI),ik(i,n)}}function ij(e,t){let i=this.cache,n=t.elements;if(void 0===n){if(iU(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ik(i,t)}else{if(iU(i,n))return;iO.set(n),e.uniformMatrix4fv(this.addr,!1,iO),ik(i,n)}}// Single integer / boolean
function iJ(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}// Single integer / boolean vector (from flat array or THREE.VectorN)
function iX(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(iU(i,t))return;e.uniform2iv(this.addr,t),ik(i,t)}}function iY(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(iU(i,t))return;e.uniform3iv(this.addr,t),ik(i,t)}}function iK(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(iU(i,t))return;e.uniform4iv(this.addr,t),ik(i,t)}}// Single unsigned integer
function iZ(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}// Single unsigned integer vector (from flat array or THREE.VectorN)
function iQ(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(iU(i,t))return;e.uniform2uiv(this.addr,t),ik(i,t)}}function i$(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(iU(i,t))return;e.uniform3uiv(this.addr,t),ik(i,t)}}function i0(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(iU(i,t))return;e.uniform4uiv(this.addr,t),ik(i,t)}}// Single texture (2D / Cube)
function i1(e,t,i){let n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture2D(t||iE,r)}function i3(e,t,i){let n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(t||iR,r)}function i2(e,t,i){let n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTextureCube(t||iP,r)}function i5(e,t,i){let n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(t||iC,r)}// Array of scalars
function i4(e,t){e.uniform1fv(this.addr,t)}// Array of vectors (from flat array or array of THREE.VectorN)
function i6(e,t){let i=iz(t,this.size,2);e.uniform2fv(this.addr,i)}function i8(e,t){let i=iz(t,this.size,3);e.uniform3fv(this.addr,i)}function i7(e,t){let i=iz(t,this.size,4);e.uniform4fv(this.addr,i)}// Array of matrices (from flat array or array of THREE.MatrixN)
function i9(e,t){let i=iz(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function ne(e,t){let i=iz(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function nt(e,t){let i=iz(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}// Array of integer / boolean
function ni(e,t){e.uniform1iv(this.addr,t)}// Array of integer / boolean vectors (from flat array)
function nn(e,t){e.uniform2iv(this.addr,t)}function nr(e,t){e.uniform3iv(this.addr,t)}function ns(e,t){e.uniform4iv(this.addr,t)}// Array of unsigned integer
function na(e,t){e.uniform1uiv(this.addr,t)}// Array of unsigned integer vectors (from flat array)
function no(e,t){e.uniform2uiv(this.addr,t)}function nl(e,t){e.uniform3uiv(this.addr,t)}function nh(e,t){e.uniform4uiv(this.addr,t)}// Array of textures (2D / 3D / Cube / 2DArray)
function nu(e,t,i){let n=this.cache,r=t.length,s=iB(i,r);iU(n,s)||(e.uniform1iv(this.addr,s),ik(n,s));for(let e=0;e!==r;++e)i.setTexture2D(t[e]||iE,s[e])}function nc(e,t,i){let n=this.cache,r=t.length,s=iB(i,r);iU(n,s)||(e.uniform1iv(this.addr,s),ik(n,s));for(let e=0;e!==r;++e)i.setTexture3D(t[e]||iR,s[e])}function nd(e,t,i){let n=this.cache,r=t.length,s=iB(i,r);iU(n,s)||(e.uniform1iv(this.addr,s),ik(n,s));for(let e=0;e!==r;++e)i.setTextureCube(t[e]||iP,s[e])}function np(e,t,i){let n=this.cache,r=t.length,s=iB(i,r);iU(n,s)||(e.uniform1iv(this.addr,s),ik(n,s));for(let e=0;e!==r;++e)i.setTexture2DArray(t[e]||iC,s[e])}// --- Uniform Classes ---
class nf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=// Helper to pick the right setter for the singular case
function(e){switch(e){case 5126:return iF;// FLOAT
case 35664:return iV;// _VEC2
case 35665:return iH;// _VEC3
case 35666:return iG;// _VEC4
case 35674:return iW;// _MAT2
case 35675:return iq;// _MAT3
case 35676:return ij;// _MAT4
case 5124:case 35670:return iJ;// INT, BOOL
case 35667:case 35671:return iX;// _VEC2
case 35668:case 35672:return iY;// _VEC3
case 35669:case 35673:return iK;// _VEC4
case 5125:return iZ;// UINT
case 36294:return iQ;// _VEC2
case 36295:return i$;// _VEC3
case 36296:return i0;// _VEC4
case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return i3;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return i5}}(t.type);// this.path = activeInfo.name; // DEBUG
}}class nm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=// Helper to pick the right setter for a pure (bottom-level) array
function(e){switch(e){case 5126:return i4;// FLOAT
case 35664:return i6;// _VEC2
case 35665:return i8;// _VEC3
case 35666:return i7;// _VEC4
case 35674:return i9;// _MAT2
case 35675:return ne;// _MAT3
case 35676:return nt;// _MAT4
case 5124:case 35670:return ni;// INT, BOOL
case 35667:case 35671:return nn;// _VEC2
case 35668:case 35672:return nr;// _VEC3
case 35669:case 35673:return ns;// _VEC4
case 5125:return na;// UINT
case 36294:return no;// _VEC2
case 36295:return nl;// _VEC3
case 36296:return nh;// _VEC4
case 35678:case 36198:case 36298:case 36306:case 35682:return nu;case 35679:case 36299:case 36307:return nc;case 35680:case 36300:case 36308:case 36293:return nd;case 36289:case 36303:case 36311:case 36292:return np}}(t.type);// this.path = activeInfo.name; // DEBUG
}}class ng{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let s=n[r];s.setValue(e,t[s.id],i)}}}// --- Top-level ---
// Parser - builds up the property tree from the path strings
const n_=/(\w+)(\])?(\[|\.)?/g;// extracts
// 	- the identifier (member name or array index)
//  - followed by an optional right bracket (found when array index)
//  - followed by an optional left bracket or dot (type of subscript)
//
// Note: These portions can be read in a non-overlapping fashion and
// allow straightforward parsing of the hierarchy that WebGL encodes
// in the uniform names.
function nv(e,t){e.seq.push(t),e.map[t.id]=t}// Root Container
class nx{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){let i=e.getActiveUniform(t,n),r=e.getUniformLocation(t,i.name);!function(e,t,i){let n=e.name,r=n.length;for(// reset RegExp object, because of the early exit of a previous run
n_.lastIndex=0;;){let s=n_.exec(n),a=n_.lastIndex,o=s[1],l="]"===s[2],h=s[3];if(l&&(o|=0),void 0===h||"["===h&&a+2===r){// bare name or "pure" bottom-level array "[0]" suffix
nv(i,void 0===h?new nf(o,e,t):new nm(o,e,t));break}{// step into inner node / create it in case it doesn't exist
let e=i.map,t=e[o];void 0===t&&nv(i,t=new ng(o)),i=t}}}(i,r,this)}}setValue(e,t,i,n){let r=this.map[t];void 0!==r&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];void 0!==n&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){let s=t[r],a=i[s.id];!1!==a.needsUpdate&&s.setValue(e,a.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let r=e[n];r.id in t&&i.push(r)}return i}}function ny(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}let nM=0;function nw(e,t,i){let n=e.getShaderParameter(t,35713),r=e.getShaderInfoLog(t).trim();if(n&&""===r)return"";let s=/ERROR: 0:(\d+)/.exec(r);if(!s)return r;{// --enable-privileged-webgl-extension
// console.log( '**' + type + '**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );
let n=parseInt(s[1]);return i.toUpperCase()+"\n\n"+r+"\n\n"+function(e,t){let i=e.split("\n"),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let e=r;e<s;e++){let r=e+1;n.push(`${r===t?">":" "} ${r}: ${i[e]}`)}return n.join("\n")}(e.getShaderSource(t),n)}}function nS(e){return""!==e}function nb(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nT(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}// Resolve Includes
const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function nE(e){return e.replace(nA,nC)}function nC(e,t){let i=t3[t];if(void 0===i)throw Error("Can not resolve #include <"+t+">");return nE(i)}// Unroll Loops
const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nP(e){return e.replace(nR,nL)}function nL(e,t,i,n){let r="";for(let e=parseInt(t);e<parseInt(i);e++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return r}//
function nD(e){let t="precision "+e.precision+" float;\nprecision "+e.precision+" int;";return"highp"===e.precision?t+="\n#define HIGH_PRECISION":"mediump"===e.precision?t+="\n#define MEDIUM_PRECISION":"lowp"===e.precision&&(t+="\n#define LOW_PRECISION"),t}function nO(e,t,i,n){let r,s,o,l,h,u;// TODO Send this event to Three.js DevTools
// console.log( 'WebGLProgram', cacheKey );
let c=e.getContext(),d=i.defines,p=i.vertexShader,f=i.fragmentShader,m=(h="SHADOWMAP_TYPE_BASIC",1===i.shadowMapType?h="SHADOWMAP_TYPE_PCF":2===i.shadowMapType?h="SHADOWMAP_TYPE_PCF_SOFT":3===i.shadowMapType&&(h="SHADOWMAP_TYPE_VSM"),h),g=function(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV"}return t}(i),_=(u="ENVMAP_MODE_REFLECTION",i.envMap&&302===i.envMapMode&&(u="ENVMAP_MODE_REFRACTION"),u),v=function(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD"}return t}(i),x=function(e){let t=e.envMapCubeUVHeight;if(null===t)return null;let i=Math.log2(t)-2;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:1/t,maxMip:i}}(i),y=i.isWebGL2?"":function(e){let t=[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||"physical"===e.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""];return t.filter(nS).join("\n")}(i),M=function(e){let t=[];for(let i in e){let n=e[i];!1!==n&&t.push("#define "+i+" "+n)}return t.join("\n")}(d),w=c.createProgram(),S=i.glslVersion?"#version "+i.glslVersion+"\n":"";i.isRawShaderMaterial?((r=[M].filter(nS).join("\n")).length>0&&(r+="\n"),(s=[y,M].filter(nS).join("\n")).length>0&&(s+="\n")):(r=[nD(i),"#define SHADER_NAME "+i.shaderName,M,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",//
i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",//
i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs2?"#define USE_UV2":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif","\n"].filter(nS).join("\n"),s=[y,nD(i),"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs2?"#define USE_UV2":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==i.toneMapping?"#define TONE_MAPPING":"",0!==i.toneMapping?t3.tonemapping_pars_fragment:"",0!==i.toneMapping?function(e,t){let i;switch(t){case 1:i="Linear";break;case 2:i="Reinhard";break;case 3:i="OptimizedCineon";break;case 4:i="ACESFilmic";break;case 5:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",t3.encodings_pars_fragment,function(e,t){let i=function(e){switch(e){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}("linearToOutputTexel",i.outputEncoding),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"","\n"].filter(nS).join("\n")),p=nT(p=nb(p=nE(p),i),i),f=nT(f=nb(f=nE(f),i),i),p=nP(p),f=nP(f),i.isWebGL2&&!0!==i.isRawShaderMaterial&&(// GLSL 3.0 conversion for built-in materials and ShaderMaterial
S="#version 300 es\n",r="precision mediump sampler2DArray;\n#define attribute in\n#define varying out\n#define texture2D texture\n"+r,s=["#define varying in",i.glslVersion===a?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+s);let b=S+r+p,T=S+s+f,A=ny(c,35633,b),E=ny(c,35632,T);// check for link errors
if(c.attachShader(w,A),c.attachShader(w,E),void 0!==i.index0AttributeName?c.bindAttribLocation(w,0,i.index0AttributeName):!0===i.morphTargets&&c.bindAttribLocation(w,0,"position"),c.linkProgram(w),e.debug.checkShaderErrors){let t=c.getProgramInfoLog(w).trim(),i=c.getShaderInfoLog(A).trim(),n=c.getShaderInfoLog(E).trim(),a=!0,o=!0;if(!1===c.getProgramParameter(w,35714)){if(a=!1,"function"==typeof e.debug.onShaderError)e.debug.onShaderError(c,w,A,E);else{// default error reporting
let e=nw(c,A,"vertex"),i=nw(c,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(w,35715)+"\n\nProgram Info Log: "+t+"\n"+e+"\n"+i)}}else""!==t?console.warn("THREE.WebGLProgram: Program Info Log:",t):(""===i||""===n)&&(o=!1);o&&(this.diagnostics={runnable:a,programLog:t,vertexShader:{log:i,prefix:r},fragmentShader:{log:n,prefix:s}})}return(// Clean up
// Crashes in iOS9 and iOS10. #18402
// gl.detachShader( program, glVertexShader );
// gl.detachShader( program, glFragmentShader );
c.deleteShader(A),c.deleteShader(E),this.getUniforms=function(){return void 0===o&&(o=new nx(c,w)),o},this.getAttributes=function(){return void 0===l&&(l=function(e,t){let i={},n=e.getProgramParameter(t,35721);for(let r=0;r<n;r++){let n=e.getActiveAttrib(t,r),s=n.name,a=1;35674===n.type&&(a=2),35675===n.type&&(a=3),35676===n.type&&(a=4),// console.log( 'THREE.WebGLProgram: ACTIVE VERTEX ATTRIBUTE:', name, i );
i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:a}}return i}(c,w)),l},// free resource
this.destroy=function(){n.releaseStatesOfProgram(this),c.deleteProgram(w),this.program=void 0},//
this.name=i.shaderName,this.id=nM++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=A,this.fragmentShader=E,this)}let nI=0;class nN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return!1===s.has(n)&&(s.add(n),n.usedTimes++),!1===s.has(r)&&(s.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,0===e.usedTimes&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return void 0===i&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return void 0===i&&(i=new nz(e),t.set(e,i)),i}}class nz{constructor(e){this.id=nI++,this.code=e,this.usedTimes=0}}function nU(e,t,i,n,r,s,a){let o=new eP,l=new nN,h=[],u=r.isWebGL2,c=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(e){return 1===e?"uv2":"uv"}return{getParameters:function(s,o,h,g,_){let v,x,y,M;let w=g.fog,S=_.geometry,b=s.isMeshStandardMaterial?g.environment:null,T=(s.isMeshStandardMaterial?i:t).get(s.envMap||b),A=T&&306===T.mapping?T.image.height:null,E=f[s.type];null!==s.precision&&(p=r.getMaxPrecision(s.precision))!==s.precision&&console.warn("THREE.WebGLProgram.getParameters:",s.precision,"not supported, using",p,"instead.");//
let C=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,R=void 0!==C?C.length:0,P=0;if(void 0!==S.morphAttributes.position&&(P=1),void 0!==S.morphAttributes.normal&&(P=2),void 0!==S.morphAttributes.color&&(P=3),E){let e=t5[E];v=e.vertexShader,x=e.fragmentShader}else v=s.vertexShader,x=s.fragmentShader,l.update(s),y=l.getVertexShaderID(s),M=l.getFragmentShaderID(s);let L=e.getRenderTarget(),D=!0===_.isInstancedMesh,O=!!s.map,I=!!s.matcap,N=!!T,z=!!s.aoMap,U=!!s.lightMap,k=!!s.bumpMap,B=!!s.normalMap,F=!!s.displacementMap,V=!!s.emissiveMap,H=!!s.metalnessMap,G=!!s.roughnessMap,W=s.clearcoat>0,q=s.iridescence>0,j=s.sheen>0,J=s.transmission>0,X=W&&!!s.clearcoatMap,Y=W&&!!s.clearcoatNormalMap,K=W&&!!s.clearcoatRoughnessMap,Z=q&&!!s.iridescenceMap,Q=q&&!!s.iridescenceThicknessMap,$=j&&!!s.sheenColorMap,ee=j&&!!s.sheenRoughnessMap,et=!!s.specularMap,ei=!!s.specularColorMap,en=!!s.specularIntensityMap,er=J&&!!s.transmissionMap,es=J&&!!s.thicknessMap,ea=!!s.gradientMap,eo=!!s.alphaMap,el=s.alphaTest>0,eh=!!s.extensions,eu=!!S.attributes.uv2,ec={isWebGL2:u,shaderID:E,shaderName:s.type,vertexShader:v,fragmentShader:x,defines:s.defines,customVertexShaderID:y,customFragmentShaderID:M,isRawShaderMaterial:!0===s.isRawShaderMaterial,glslVersion:s.glslVersion,precision:p,instancing:D,instancingColor:D&&null!==_.instanceColor,supportsVertexTextures:d,outputEncoding:null===L?e.outputEncoding:!0===L.isXRRenderTarget?L.texture.encoding:3e3,map:O,matcap:I,envMap:N,envMapMode:N&&T.mapping,envMapCubeUVHeight:A,aoMap:z,lightMap:U,bumpMap:k,normalMap:B,displacementMap:d&&F,emissiveMap:V,normalMapObjectSpace:B&&1===s.normalMapType,normalMapTangentSpace:B&&0===s.normalMapType,decodeVideoTexture:O&&!0===s.map.isVideoTexture&&3001===s.map.encoding,metalnessMap:H,roughnessMap:G,clearcoat:W,clearcoatMap:X,clearcoatNormalMap:Y,clearcoatRoughnessMap:K,iridescence:q,iridescenceMap:Z,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:$,sheenRoughnessMap:ee,specularMap:et,specularColorMap:ei,specularIntensityMap:en,transmission:J,transmissionMap:er,thicknessMap:es,gradientMap:ea,opaque:!1===s.transparent&&1===s.blending,alphaMap:eo,alphaTest:el,combine:s.combine,//
mapUv:O&&m(s.map.channel),aoMapUv:z&&m(s.aoMap.channel),lightMapUv:U&&m(s.lightMap.channel),bumpMapUv:k&&m(s.bumpMap.channel),normalMapUv:B&&m(s.normalMap.channel),displacementMapUv:F&&m(s.displacementMap.channel),emissiveMapUv:V&&m(s.emissiveMap.channel),metalnessMapUv:H&&m(s.metalnessMap.channel),roughnessMapUv:G&&m(s.roughnessMap.channel),clearcoatMapUv:X&&m(s.clearcoatMap.channel),clearcoatNormalMapUv:Y&&m(s.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(s.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(s.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(s.iridescenceThicknessMap.channel),sheenColorMapUv:$&&m(s.sheenColorMap.channel),sheenRoughnessMapUv:ee&&m(s.sheenRoughnessMap.channel),specularMapUv:et&&m(s.specularMap.channel),specularColorMapUv:ei&&m(s.specularColorMap.channel),specularIntensityMapUv:en&&m(s.specularIntensityMap.channel),transmissionMapUv:er&&m(s.transmissionMap.channel),thicknessMapUv:es&&m(s.thicknessMap.channel),alphaMapUv:eo&&m(s.alphaMap.channel),//
vertexTangents:B&&!!S.attributes.tangent,vertexColors:s.vertexColors,vertexAlphas:!0===s.vertexColors&&!!S.attributes.color&&4===S.attributes.color.itemSize,vertexUvs2:eu,pointsUvs:!0===_.isPoints&&!!S.attributes.uv&&(O||eo),fog:!!w,useFog:!0===s.fog,fogExp2:w&&w.isFogExp2,flatShading:!0===s.flatShading,sizeAttenuation:!0===s.sizeAttenuation,logarithmicDepthBuffer:c,skinning:!0===_.isSkinnedMesh,morphTargets:void 0!==S.morphAttributes.position,morphNormals:void 0!==S.morphAttributes.normal,morphColors:void 0!==S.morphAttributes.color,morphTargetsCount:R,morphTextureStride:P,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:s.dithering,shadowMapEnabled:e.shadowMap.enabled&&h.length>0,shadowMapType:e.shadowMap.type,toneMapping:s.toneMapped?e.toneMapping:0,useLegacyLights:e.useLegacyLights,premultipliedAlpha:s.premultipliedAlpha,doubleSided:2===s.side,flipSided:1===s.side,useDepthPacking:s.depthPacking>=0,depthPacking:s.depthPacking||0,index0AttributeName:s.index0AttributeName,extensionDerivatives:eh&&!0===s.extensions.derivatives,extensionFragDepth:eh&&!0===s.extensions.fragDepth,extensionDrawBuffers:eh&&!0===s.extensions.drawBuffers,extensionShaderTextureLOD:eh&&!0===s.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:s.customProgramCacheKey()};return ec},getProgramCacheKey:function(t){let i=[];if(t.shaderID?i.push(t.shaderID):(i.push(t.customVertexShaderID),i.push(t.customFragmentShaderID)),void 0!==t.defines)for(let e in t.defines)i.push(e),i.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(i.push(t.precision),i.push(t.outputEncoding),i.push(t.envMapMode),i.push(t.envMapCubeUVHeight),i.push(t.mapUv),i.push(t.alphaMapUv),i.push(t.lightMapUv),i.push(t.aoMapUv),i.push(t.bumpMapUv),i.push(t.normalMapUv),i.push(t.displacementMapUv),i.push(t.emissiveMapUv),i.push(t.metalnessMapUv),i.push(t.roughnessMapUv),i.push(t.clearcoatMapUv),i.push(t.clearcoatNormalMapUv),i.push(t.clearcoatRoughnessMapUv),i.push(t.iridescenceMapUv),i.push(t.iridescenceThicknessMapUv),i.push(t.sheenColorMapUv),i.push(t.sheenRoughnessMapUv),i.push(t.specularMapUv),i.push(t.specularColorMapUv),i.push(t.specularIntensityMapUv),i.push(t.transmissionMapUv),i.push(t.thicknessMapUv),i.push(t.combine),i.push(t.fogExp2),i.push(t.sizeAttenuation),i.push(t.morphTargetsCount),i.push(t.morphAttributeCount),i.push(t.numDirLights),i.push(t.numPointLights),i.push(t.numSpotLights),i.push(t.numSpotLightMaps),i.push(t.numHemiLights),i.push(t.numRectAreaLights),i.push(t.numDirLightShadows),i.push(t.numPointLightShadows),i.push(t.numSpotLightShadows),i.push(t.numSpotLightShadowsWithMaps),i.push(t.shadowMapType),i.push(t.toneMapping),i.push(t.numClippingPlanes),i.push(t.numClipIntersection),i.push(t.depthPacking),o.disableAll(),t.isWebGL2&&o.enable(0),t.supportsVertexTextures&&o.enable(1),t.instancing&&o.enable(2),t.instancingColor&&o.enable(3),t.matcap&&o.enable(4),t.envMap&&o.enable(5),t.normalMapObjectSpace&&o.enable(6),t.normalMapTangentSpace&&o.enable(7),t.clearcoat&&o.enable(8),t.iridescence&&o.enable(9),t.alphaTest&&o.enable(10),t.vertexColors&&o.enable(11),t.vertexAlphas&&o.enable(12),t.vertexUvs2&&o.enable(13),t.vertexTangents&&o.enable(14),i.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.skinning&&o.enable(4),t.morphTargets&&o.enable(5),t.morphNormals&&o.enable(6),t.morphColors&&o.enable(7),t.premultipliedAlpha&&o.enable(8),t.shadowMapEnabled&&o.enable(9),t.useLegacyLights&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.decodeVideoTexture&&o.enable(17),t.opaque&&o.enable(18),t.pointsUvs&&o.enable(19),i.push(o.mask),i.push(e.outputEncoding)),i.push(t.customProgramCacheKey),i.join()},getUniforms:function(e){let t;let i=f[e.type];if(i){let e=t5[i];t=tB.clone(e.uniforms)}else t=e.uniforms;return t},acquireProgram:function(t,i){let n;// Check if code has been already compiled
for(let e=0,t=h.length;e<t;e++){let t=h[e];if(t.cacheKey===i){n=t,++n.usedTimes;break}}return void 0===n&&(n=new nO(e,i,t,s),h.push(n)),n},releaseProgram:function(e){if(0==--e.usedTimes){// Remove from unordered set
let t=h.indexOf(e);h[t]=h[h.length-1],h.pop(),// Free WebGL resources
e.destroy()}},releaseShaderCache:function(e){l.remove(e)},// Exposed for resource monitoring & error feedback via renderer.info:
programs:h,dispose:function(){l.dispose()}}}function nk(){let e=new WeakMap;return{get:function(t){let i=e.get(t);return void 0===i&&(i={},e.set(t,i)),i},remove:function(t){e.delete(t)},update:function(t,i,n){e.get(t)[i]=n},dispose:function(){e=new WeakMap}}}function nB(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function nF(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function nV(){let e=[],t=0,i=[],n=[],r=[];function s(i,n,r,s,a,o){let l=e[t];return void 0===l?(l={id:i.id,object:i,geometry:n,material:r,groupOrder:s,renderOrder:i.renderOrder,z:a,group:o},e[t]=l):(l.id=i.id,l.object=i,l.geometry=n,l.material=r,l.groupOrder=s,l.renderOrder=i.renderOrder,l.z=a,l.group=o),t++,l}return{opaque:i,transmissive:n,transparent:r,init:function(){t=0,i.length=0,n.length=0,r.length=0},push:function(e,t,a,o,l,h){let u=s(e,t,a,o,l,h);a.transmission>0?n.push(u):!0===a.transparent?r.push(u):i.push(u)},unshift:function(e,t,a,o,l,h){let u=s(e,t,a,o,l,h);a.transmission>0?n.unshift(u):!0===a.transparent?r.unshift(u):i.unshift(u)},finish:function(){// Clear references from inactive renderItems in the list
for(let i=t,n=e.length;i<n;i++){let t=e[i];if(null===t.id)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}},sort:function(e,t){i.length>1&&i.sort(e||nB),n.length>1&&n.sort(t||nF),r.length>1&&r.sort(t||nF)}}}function nH(){let e=new WeakMap;return{get:function(t,i){let n;let r=e.get(t);return void 0===r?(n=new nV,e.set(t,[n])):i>=r.length?(n=new nV,r.push(n)):n=r[i],n},dispose:function(){e=new WeakMap}}}function nG(){let e={};return{get:function(t){let i;if(void 0!==e[t.id])return e[t.id];switch(t.type){case"DirectionalLight":i={direction:new G,color:new e9};break;case"SpotLight":i={position:new G,direction:new G,color:new e9,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new e9,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new e9,groundColor:new e9};break;case"RectAreaLight":i={color:new e9,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=i,i}}}let nW=0;function nq(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function nj(e,t){let i=new nG,n=function(){let e={};return{get:function(t){let i;if(void 0!==e[t.id])return e[t.id];switch(t.type){case"DirectionalLight":case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new w};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new w,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let e=0;e<9;e++)r.probe.push(new G);let s=new G,a=new ex,o=new ex;return{setup:function(s,a){let o=0,l=0,h=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let u=0,c=0,d=0,p=0,f=0,m=0,g=0,_=0,v=0,x=0;// ordering : [shadow casting + map texturing, map texturing, shadow casting, none ]
s.sort(nq);// artist-friendly light intensity scaling factor
let y=!0===a?Math.PI:1;for(let e=0,t=s.length;e<t;e++){let t=s[e],a=t.color,M=t.intensity,w=t.distance,S=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)o+=a.r*M*y,l+=a.g*M*y,h+=a.b*M*y;else if(t.isLightProbe)for(let e=0;e<9;e++)r.probe[e].addScaledVector(t.sh.coefficients[e],M);else if(t.isDirectionalLight){let e=i.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*y),t.castShadow){let e=t.shadow,i=n.get(t);i.shadowBias=e.bias,i.shadowNormalBias=e.normalBias,i.shadowRadius=e.radius,i.shadowMapSize=e.mapSize,r.directionalShadow[u]=i,r.directionalShadowMap[u]=S,r.directionalShadowMatrix[u]=t.shadow.matrix,m++}r.directional[u]=e,u++}else if(t.isSpotLight){let e=i.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(a).multiplyScalar(M*y),e.distance=w,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,r.spot[d]=e;let s=t.shadow;if(t.map&&(r.spotLightMap[v]=t.map,v++,// make sure the lightMatrix is up to date
// TODO : do it if required only
s.updateMatrices(t),t.castShadow&&x++),r.spotLightMatrix[d]=s.matrix,t.castShadow){let e=n.get(t);e.shadowBias=s.bias,e.shadowNormalBias=s.normalBias,e.shadowRadius=s.radius,e.shadowMapSize=s.mapSize,r.spotShadow[d]=e,r.spotShadowMap[d]=S,_++}d++}else if(t.isRectAreaLight){let e=i.get(t);e.color.copy(a).multiplyScalar(M),e.halfWidth.set(.5*t.width,0,0),e.halfHeight.set(0,.5*t.height,0),r.rectArea[p]=e,p++}else if(t.isPointLight){let e=i.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*y),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,i=n.get(t);i.shadowBias=e.bias,i.shadowNormalBias=e.normalBias,i.shadowRadius=e.radius,i.shadowMapSize=e.mapSize,i.shadowCameraNear=e.camera.near,i.shadowCameraFar=e.camera.far,r.pointShadow[c]=i,r.pointShadowMap[c]=S,r.pointShadowMatrix[c]=t.shadow.matrix,g++}r.point[c]=e,c++}else if(t.isHemisphereLight){let e=i.get(t);e.skyColor.copy(t.color).multiplyScalar(M*y),e.groundColor.copy(t.groundColor).multiplyScalar(M*y),r.hemi[f]=e,f++}}p>0&&(t.isWebGL2?(// WebGL 2
r.rectAreaLTC1=t2.LTC_FLOAT_1,r.rectAreaLTC2=t2.LTC_FLOAT_2):!0===e.has("OES_texture_float_linear")?(r.rectAreaLTC1=t2.LTC_FLOAT_1,r.rectAreaLTC2=t2.LTC_FLOAT_2):!0===e.has("OES_texture_half_float_linear")?(r.rectAreaLTC1=t2.LTC_HALF_1,r.rectAreaLTC2=t2.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=o,r.ambient[1]=l,r.ambient[2]=h;let M=r.hash;(M.directionalLength!==u||M.pointLength!==c||M.spotLength!==d||M.rectAreaLength!==p||M.hemiLength!==f||M.numDirectionalShadows!==m||M.numPointShadows!==g||M.numSpotShadows!==_||M.numSpotMaps!==v)&&(r.directional.length=u,r.spot.length=d,r.rectArea.length=p,r.point.length=c,r.hemi.length=f,r.directionalShadow.length=m,r.directionalShadowMap.length=m,r.pointShadow.length=g,r.pointShadowMap.length=g,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=m,r.pointShadowMatrix.length=g,r.spotLightMatrix.length=_+v-x,r.spotLightMap.length=v,r.numSpotLightShadowsWithMaps=x,M.directionalLength=u,M.pointLength=c,M.spotLength=d,M.rectAreaLength=p,M.hemiLength=f,M.numDirectionalShadows=m,M.numPointShadows=g,M.numSpotShadows=_,M.numSpotMaps=v,r.version=nW++)},setupView:function(e,t){let i=0,n=0,l=0,h=0,u=0,c=t.matrixWorldInverse;for(let t=0,d=e.length;t<d;t++){let d=e[t];if(d.isDirectionalLight){let e=r.directional[i];e.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),e.direction.sub(s),e.direction.transformDirection(c),i++}else if(d.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(c),e.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),e.direction.sub(s),e.direction.transformDirection(c),l++}else if(d.isRectAreaLight){let e=r.rectArea[h];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(c),// extract local rotation of light to derive width/height half vectors
o.identity(),a.copy(d.matrixWorld),a.premultiply(c),o.extractRotation(a),e.halfWidth.set(.5*d.width,0,0),e.halfHeight.set(0,.5*d.height,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),h++}else if(d.isPointLight){let e=r.point[n];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(c),n++}else if(d.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(d.matrixWorld),e.direction.transformDirection(c),u++}}},state:r}}function nJ(e,t){let i=new nj(e,t),n=[],r=[];return{init:function(){n.length=0,r.length=0},state:{lightsArray:n,shadowsArray:r,lights:i},setupLights:function(e){i.setup(n,e)},setupLightsView:function(e){i.setupView(n,e)},pushLight:function(e){n.push(e)},pushShadow:function(e){r.push(e)}}}function nX(e,t){let i=new WeakMap;return{get:function(n,r=0){let s;let a=i.get(n);return void 0===a?(s=new nJ(e,t),i.set(n,[s])):r>=a.length?(s=new nJ(e,t),a.push(s)):s=a[r],s},dispose:function(){i=new WeakMap}}}class nY extends e5{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nK extends e5{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function nZ(e,t,i){let n=new tQ,r=new w,s=new w,a=new B,o=new nY({depthPacking:3201}),l=new nK,h={},u=i.maxTextureSize,c={0:1,1:0,2:2},d=new tF({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new w},radius:{value:4}},vertexShader:"void main() {\n	gl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new tm;f.setAttribute("position",new tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new tO(f,d),g=this;function _(t,i,n,r){let s=null,a=!0===n.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(void 0!==a)s=a;else if(s=!0===n.isPointLight?l:o,e.localClippingEnabled&&!0===i.clipShadows&&Array.isArray(i.clippingPlanes)&&0!==i.clippingPlanes.length||i.displacementMap&&0!==i.displacementScale||i.alphaMap&&i.alphaTest>0||i.map&&i.alphaTest>0){// in this case we need a unique material instance reflecting the
// appropriate state
let e=s.uuid,t=i.uuid,n=h[e];void 0===n&&(n={},h[e]=n);let r=n[t];void 0===r&&(r=s.clone(),n[t]=r),s=r}if(s.visible=i.visible,s.wireframe=i.wireframe,3===r?s.side=null!==i.shadowSide?i.shadowSide:i.side:s.side=null!==i.shadowSide?i.shadowSide:c[i.side],s.alphaMap=i.alphaMap,s.alphaTest=i.alphaTest,s.map=i.map,s.clipShadows=i.clipShadows,s.clippingPlanes=i.clippingPlanes,s.clipIntersection=i.clipIntersection,s.displacementMap=i.displacementMap,s.displacementScale=i.displacementScale,s.displacementBias=i.displacementBias,s.wireframeLinewidth=i.wireframeLinewidth,s.linewidth=i.linewidth,!0===n.isPointLight&&!0===s.isMeshDistanceMaterial){let t=e.properties.get(s);t.light=n}return s}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(i,o,l){if(!1===g.enabled||!1===g.autoUpdate&&!1===g.needsUpdate||0===i.length)return;let h=e.getRenderTarget(),c=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.state;// Set GL state for depth map.
v.setBlending(0),v.buffers.color.setClear(1,1,1,1),v.buffers.depth.setTest(!0),v.setScissorTest(!1);// render depth map
for(let h=0,c=i.length;h<c;h++){let c=i[h],f=c.shadow;if(void 0===f){console.warn("THREE.WebGLShadowMap:",c,"has no shadow.");continue}if(!1===f.autoUpdate&&!1===f.needsUpdate)continue;r.copy(f.mapSize);let g=f.getFrameExtents();if(r.multiply(g),s.copy(f.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/g.x),r.x=s.x*g.x,f.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/g.y),r.y=s.y*g.y,f.mapSize.y=s.y)),null===f.map){let e=3!==this.type?{minFilter:1003,magFilter:1003}:{};f.map=new F(r.x,r.y,e),f.map.texture.name=c.name+".shadowMap",f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let x=f.getViewportCount();for(let i=0;i<x;i++){let r=f.getViewport(i);a.set(s.x*r.x,s.y*r.y,s.x*r.z,s.y*r.w),v.viewport(a),f.updateMatrices(c,i),n=f.getFrustum(),function i(r,s,a,o,l){if(!1===r.visible)return;let h=r.layers.test(s.layers);if(h&&(r.isMesh||r.isLine||r.isPoints)&&(r.castShadow||r.receiveShadow&&3===l)&&(!r.frustumCulled||n.intersectsObject(r))){r.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,r.matrixWorld);let i=t.update(r),n=r.material;if(Array.isArray(n)){let t=i.groups;for(let s=0,h=t.length;s<h;s++){let h=t[s],u=n[h.materialIndex];if(u&&u.visible){let t=_(r,u,o,l);e.renderBufferDirect(a,null,i,t,r,h)}}}else if(n.visible){let t=_(r,n,o,l);e.renderBufferDirect(a,null,i,t,r,null)}}let u=r.children;for(let e=0,t=u.length;e<t;e++)i(u[e],s,a,o,l)}(o,l,f.camera,c,this.type)}!0!==f.isPointLightShadow&&3===this.type&&function(i,n){let s=t.update(m);d.defines.VSM_SAMPLES!==i.blurSamples&&(d.defines.VSM_SAMPLES=i.blurSamples,p.defines.VSM_SAMPLES=i.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),null===i.mapPass&&(i.mapPass=new F(r.x,r.y)),// vertical pass
d.uniforms.shadow_pass.value=i.map.texture,d.uniforms.resolution.value=i.mapSize,d.uniforms.radius.value=i.radius,e.setRenderTarget(i.mapPass),e.clear(),e.renderBufferDirect(n,null,s,d,m,null),// horizontal pass
p.uniforms.shadow_pass.value=i.mapPass.texture,p.uniforms.resolution.value=i.mapSize,p.uniforms.radius.value=i.radius,e.setRenderTarget(i.map),e.clear(),e.renderBufferDirect(n,null,s,p,m,null)}(f,l),f.needsUpdate=!1}g.needsUpdate=!1,e.setRenderTarget(h,c,f)}}function nQ(e,t,i){let n=i.isWebGL2,r=new function(){let t=!1,i=new B,n=null,r=new B(0,0,0,0);return{setMask:function(i){n===i||t||(e.colorMask(i,i,i,i),n=i)},setLocked:function(e){t=e},setClear:function(t,n,s,a,o){!0===o&&(t*=a,n*=a,s*=a),i.set(t,n,s,a),!1===r.equals(i)&&(e.clearColor(t,n,s,a),r.copy(i))},reset:function(){t=!1,n=null,r.set(-1,0,0,0)}}},s=new function(){let t=!1,i=null,n=null,r=null;return{setTest:function(e){e?F(2929):V(2929)},setMask:function(n){i===n||t||(e.depthMask(n),i=n)},setFunc:function(t){if(n!==t){switch(t){case 0:e.depthFunc(512);break;case 1:e.depthFunc(519);break;case 2:e.depthFunc(513);break;case 3:default:e.depthFunc(515);break;case 4:e.depthFunc(514);break;case 5:e.depthFunc(518);break;case 6:e.depthFunc(516);break;case 7:e.depthFunc(517)}n=t}},setLocked:function(e){t=e},setClear:function(t){r!==t&&(e.clearDepth(t),r=t)},reset:function(){t=!1,i=null,n=null,r=null}}},a=new function(){let t=!1,i=null,n=null,r=null,s=null,a=null,o=null,l=null,h=null;return{setTest:function(e){t||(e?F(2960):V(2960))},setMask:function(n){i===n||t||(e.stencilMask(n),i=n)},setFunc:function(t,i,a){(n!==t||r!==i||s!==a)&&(e.stencilFunc(t,i,a),n=t,r=i,s=a)},setOp:function(t,i,n){(a!==t||o!==i||l!==n)&&(e.stencilOp(t,i,n),a=t,o=i,l=n)},setLocked:function(e){t=e},setClear:function(t){h!==t&&(e.clearStencil(t),h=t)},reset:function(){t=!1,i=null,n=null,r=null,s=null,a=null,o=null,l=null,h=null}}},o=new WeakMap,l=new WeakMap,h={},u={},c=new WeakMap,d=[],p=null,f=!1,m=null,g=null,_=null,v=null,x=null,y=null,M=null,w=!1,S=null,b=null,T=null,A=null,E=null,C=e.getParameter(35661),R=!1,P=e.getParameter(7938);-1!==P.indexOf("WebGL")?R=parseFloat(/^WebGL (\d)/.exec(P)[1])>=1:-1!==P.indexOf("OpenGL ES")&&(R=parseFloat(/^OpenGL ES (\d)/.exec(P)[1])>=2);let L=null,D={},O=e.getParameter(3088),I=e.getParameter(2978),N=new B().fromArray(O),z=new B().fromArray(I);function U(t,i,n){let r=new Uint8Array(4),s=e.createTexture();// 4 is required to match default unpack alignment of 4.
e.bindTexture(t,s),e.texParameteri(t,10241,9728),e.texParameteri(t,10240,9728);for(let t=0;t<n;t++)e.texImage2D(i+t,0,6408,1,1,0,6408,5121,r);return s}let k={};//
function F(t){!0!==h[t]&&(e.enable(t),h[t]=!0)}function V(t){!1!==h[t]&&(e.disable(t),h[t]=!1)}k[3553]=U(3553,3553,1),k[34067]=U(34067,34069,6),// init
r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),F(2929),s.setFunc(3),q(!1),j(1),F(2884),W(0);let H={100:32774,101:32778,102:32779};if(n)H[103]=32775,H[104]=32776;else{let e=t.get("EXT_blend_minmax");null!==e&&(H[103]=e.MIN_EXT,H[104]=e.MAX_EXT)}let G={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function W(t,i,n,r,s,a,o,l){if(0===t){!0===f&&(V(3042),f=!1);return}if(!1===f&&(F(3042),f=!0),5!==t){if(t!==m||l!==w){if((100!==g||100!==x)&&(e.blendEquation(32774),g=100,x=100),l)switch(t){case 1:e.blendFuncSeparate(1,771,1,771);break;case 2:e.blendFunc(1,1);break;case 3:e.blendFuncSeparate(0,769,0,1);break;case 4:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}else switch(t){case 1:e.blendFuncSeparate(770,771,1,771);break;case 2:e.blendFunc(770,1);break;case 3:e.blendFuncSeparate(0,769,0,1);break;case 4:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}_=null,v=null,y=null,M=null,m=t,w=l}return}// custom blending
s=s||i,a=a||n,o=o||r,(i!==g||s!==x)&&(e.blendEquationSeparate(H[i],H[s]),g=i,x=s),(n!==_||r!==v||a!==y||o!==M)&&(e.blendFuncSeparate(G[n],G[r],G[a],G[o]),_=n,v=r,y=a,M=o),m=t,w=!1}//
function q(t){S!==t&&(t?e.frontFace(2304):e.frontFace(2305),S=t)}function j(t){0!==t?(F(2884),t!==b&&(1===t?e.cullFace(1029):2===t?e.cullFace(1028):e.cullFace(1032))):V(2884),b=t}function J(t,i,n){t?(F(32823),(A!==i||E!==n)&&(e.polygonOffset(i,n),A=i,E=n)):V(32823)}return{buffers:{color:r,depth:s,stencil:a},enable:F,disable:V,bindFramebuffer:function(t,i){return u[t]!==i&&(e.bindFramebuffer(t,i),u[t]=i,n&&(36009===t&&(u[36160]=i),36160===t&&(u[36009]=i)),!0)},drawBuffers:function(n,r){let s=d,a=!1;if(n){if(void 0===(s=c.get(r))&&(s=[],c.set(r,s)),n.isWebGLMultipleRenderTargets){let e=n.texture;if(s.length!==e.length||36064!==s[0]){for(let t=0,i=e.length;t<i;t++)s[t]=36064+t;s.length=e.length,a=!0}}else 36064!==s[0]&&(s[0]=36064,a=!0)}else 1029!==s[0]&&(s[0]=1029,a=!0);a&&(i.isWebGL2?e.drawBuffers(s):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(s))},useProgram:function(t){return p!==t&&(e.useProgram(t),p=t,!0)},setBlending:W,setMaterial:function(e,t){2===e.side?V(2884):F(2884);let i=1===e.side;t&&(i=!i),q(i),1===e.blending&&!1===e.transparent?W(0):W(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),s.setFunc(e.depthFunc),s.setTest(e.depthTest),s.setMask(e.depthWrite),r.setMask(e.colorWrite);let n=e.stencilWrite;a.setTest(n),n&&(a.setMask(e.stencilWriteMask),a.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),a.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),J(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),!0===e.alphaToCoverage?F(32926):V(32926)},setFlipSided:q,setCullFace:j,setLineWidth:function(t){t!==T&&(R&&e.lineWidth(t),T=t)},setPolygonOffset:J,setScissorTest:function(e){e?F(3089):V(3089)},activeTexture:// texture
function(t){void 0===t&&(t=33984+C-1),L!==t&&(e.activeTexture(t),L=t)},bindTexture:function(t,i,n){void 0===n&&(n=null===L?33984+C-1:L);let r=D[n];void 0===r&&(r={type:void 0,texture:void 0},D[n]=r),(r.type!==t||r.texture!==i)&&(L!==n&&(e.activeTexture(n),L=n),e.bindTexture(t,i||k[t]),r.type=t,r.texture=i)},unbindTexture:function(){let t=D[L];void 0!==t&&void 0!==t.type&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexImage3D:function(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage2D:function(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage3D:function(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},updateUBOMapping:function(t,i){let n=l.get(i);void 0===n&&(n=new WeakMap,l.set(i,n));let r=n.get(t);void 0===r&&(r=e.getUniformBlockIndex(i,t.name),n.set(t,r))},uniformBlockBinding:function(t,i){let n=l.get(i),r=n.get(t);o.get(i)!==r&&(// bind shader specific block index to global block point
e.uniformBlockBinding(i,r,t.__bindingPointIndex),o.set(i,r))},texStorage2D:function(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texStorage3D:function(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage2D:function(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage3D:function(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},scissor://
function(t){!1===N.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),N.copy(t))},viewport:function(t){!1===z.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),z.copy(t))},reset://
function(){// reset state
e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(519,0,4294967295),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),!0===n&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),// reset internals
h={},L=null,D={},u={},c=new WeakMap,d=[],p=null,f=!1,m=null,g=null,_=null,v=null,x=null,y=null,M=null,w=!1,S=null,b=null,T=null,A=null,E=null,N.set(0,0,e.canvas.width,e.canvas.height),z.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),a.reset()}}}function n$(e,t,i,n,r,s,a){let o;let l=r.isWebGL2,h=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap,_=new WeakMap,x=!1;try{x="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(e){// Ignore any errors
}function y(e,t){// Use OffscreenCanvas when available. Specially needed in web workers
return x?new OffscreenCanvas(e,t):A("canvas")}function M(e,t,i,n){let r=1;// only perform resize if necessary
if((e.width>n||e.height>n)&&(r=n/Math.max(e.width,e.height)),r<1||!0===t){// only perform resize for certain image types
if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){let n=t?v:Math.floor,s=n(r*e.width),a=n(r*e.height);void 0===o&&(o=y(s,a));// cube textures can't reuse the same canvas
let l=i?y(s,a):o;l.width=s,l.height=a;let h=l.getContext("2d");return h.drawImage(e,0,0,s,a),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+s+"x"+a+")."),l}"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+").")}return e}function w(e){return g(e.width)&&g(e.height)}function S(e,t){return e.generateMipmaps&&t&&1003!==e.minFilter&&1006!==e.minFilter}function b(t){e.generateMipmap(t)}function T(i,n,r,s,a=!1){if(!1===l)return n;if(null!==i){if(void 0!==e[i])return e[i];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+i+"'")}let o=n;return 6403===n&&(5126===r&&(o=33326),5131===r&&(o=33325),5121===r&&(o=33321)),33319===n&&(5126===r&&(o=33328),5131===r&&(o=33327),5121===r&&(o=33323)),6408===n&&(5126===r&&(o=34836),5131===r&&(o=34842),5121===r&&(o=3001===s&&!1===a?35907:32856),32819===r&&(o=32854),32820===r&&(o=32855)),(33325===o||33326===o||33327===o||33328===o||34842===o||34836===o)&&t.get("EXT_color_buffer_float"),o}function E(e,t,i){return!0===S(e,i)||e.isFramebufferTexture&&1003!==e.minFilter&&1006!==e.minFilter?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}// Fallback filters for non-power-of-2 textures
function C(e){return 1003===e||1004===e||1005===e?9728:9729}//
function R(e){let t=e.target;t.removeEventListener("dispose",R),//
function(e){let t=n.get(e);if(void 0===t.__webglInit)return;// check if it's necessary to remove the WebGLTexture object
let i=e.source,r=_.get(i);if(r){let n=r[t.__cacheKey];n.usedTimes--,0===n.usedTimes&&L(e),0===Object.keys(r).length&&_.delete(i)}n.remove(e)}(t),t.isVideoTexture&&m.delete(t)}function P(t){let i=t.target;i.removeEventListener("dispose",P),function(t){let i=t.texture,r=n.get(t),s=n.get(i);if(void 0!==s.__webglTexture&&(e.deleteTexture(s.__webglTexture),a.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++)e.deleteFramebuffer(r.__webglFramebuffer[t]),r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[t]);else{if(e.deleteFramebuffer(r.__webglFramebuffer),r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let t=0;t<r.__webglColorRenderbuffer.length;t++)r.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[t]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,r=i.length;t<r;t++){let r=n.get(i[t]);r.__webglTexture&&(e.deleteTexture(r.__webglTexture),a.memory.textures--),n.remove(i[t])}n.remove(i),n.remove(t)}(i)}function L(t){let i=n.get(t);e.deleteTexture(i.__webglTexture);let r=t.source,s=_.get(r);delete s[i.__cacheKey],a.memory.textures--}//
let D=0;//
function O(e,t){let r=n.get(e);if(e.isVideoTexture&&function(e){let t=a.render.frame;// Check the last frame we updated the VideoTexture
m.get(e)!==t&&(m.set(e,t),e.update())}(e),!1===e.isRenderTargetTexture&&e.version>0&&r.__version!==e.version){let i=e.image;if(null===i)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(!1===i.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(r,e,t);return}}i.bindTexture(3553,r.__webglTexture,33984+t)}let N={1e3:10497,1001:33071,1002:33648},z={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function U(i,s,a){if(a?(e.texParameteri(i,10242,N[s.wrapS]),e.texParameteri(i,10243,N[s.wrapT]),(32879===i||35866===i)&&e.texParameteri(i,32882,N[s.wrapR]),e.texParameteri(i,10240,z[s.magFilter]),e.texParameteri(i,10241,z[s.minFilter])):(e.texParameteri(i,10242,33071),e.texParameteri(i,10243,33071),(32879===i||35866===i)&&e.texParameteri(i,32882,33071),(1001!==s.wrapS||1001!==s.wrapT)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(i,10240,C(s.magFilter)),e.texParameteri(i,10241,C(s.minFilter)),1003!==s.minFilter&&1006!==s.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===t.has("EXT_texture_filter_anisotropic")){let a=t.get("EXT_texture_filter_anisotropic");1003!==s.magFilter&&(1005===s.minFilter||1008===s.minFilter)&&(1015!==s.type||!1!==t.has("OES_texture_float_linear"))&&(!1!==l||1016!==s.type||!1!==t.has("OES_texture_half_float_linear"))&&(s.anisotropy>1||n.get(s).__currentAnisotropy)&&(e.texParameterf(i,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),n.get(s).__currentAnisotropy=s.anisotropy)}}function k(t,i){let n=!1;void 0===t.__webglInit&&(t.__webglInit=!0,i.addEventListener("dispose",R));// create Source <-> WebGLTextures mapping if necessary
let r=i.source,s=_.get(r);void 0===s&&(s={},_.set(r,s));// check if there is already a WebGLTexture object for the given texture parameters
let o=function(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.encoding),t.join()}(i);if(o!==t.__cacheKey){void 0===s[o]&&(// create new entry
s[o]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,// when a new instance of WebGLTexture was created, a texture upload is required
// even if the image contents are identical
n=!0),s[o].usedTimes++;// every time the texture cache key changes, it's necessary to check if an instance of
// WebGLTexture can be deleted in order to avoid a memory leak.
let r=s[t.__cacheKey];void 0!==r&&(s[t.__cacheKey].usedTimes--,0===r.usedTimes&&L(i)),// store references to cache key and WebGLTexture object
t.__cacheKey=o,t.__webglTexture=s[o].texture}return n}function B(t,r,a){let o=3553;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(o=35866),r.isData3DTexture&&(o=32879);let h=k(t,r),u=r.source;i.bindTexture(o,t.__webglTexture,33984+a);let d=n.get(u);if(u.version!==d.__version||!0===h){let t;i.activeTexture(33984+a),e.pixelStorei(37440,r.flipY),e.pixelStorei(37441,r.premultiplyAlpha),e.pixelStorei(3317,r.unpackAlignment),e.pixelStorei(37443,0);let n=!l&&(1001!==r.wrapS||1001!==r.wrapT||1003!==r.minFilter&&1006!==r.minFilter)&&!1===w(r.image),p=M(r.image,n,!1,c);p=q(r,p);let f=w(p)||l,m=s.convert(r.format,r.encoding),g=s.convert(r.type),_=T(r.internalFormat,m,g,r.encoding,r.isVideoTexture);U(o,r,f);let v=r.mipmaps,x=l&&!0!==r.isVideoTexture,y=void 0===d.__version||!0===h,A=E(r,p,f);if(r.isDepthTexture)// populate depth texture with dummy data
_=6402,l?_=1015===r.type?36012:1014===r.type?33190:1020===r.type?35056:33189:1015===r.type&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),1026===r.format&&6402===_&&1012!==r.type&&1014!==r.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),r.type=1014,g=s.convert(r.type)),1027===r.format&&6402===_&&(// Depth stencil textures need the DEPTH_STENCIL internal format
// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
_=34041,1020!==r.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),r.type=1020,g=s.convert(r.type))),y&&(x?i.texStorage2D(3553,1,_,p.width,p.height):i.texImage2D(3553,0,_,p.width,p.height,0,m,g,null));else if(r.isDataTexture){// use manually created mipmaps if available
// if there are no manual mipmaps
// set 0 level mipmap and then use GL to generate other mipmap levels
if(v.length>0&&f){x&&y&&i.texStorage2D(3553,A,_,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)t=v[e],x?i.texSubImage2D(3553,e,0,0,t.width,t.height,m,g,t.data):i.texImage2D(3553,e,_,t.width,t.height,0,m,g,t.data);r.generateMipmaps=!1}else x?(y&&i.texStorage2D(3553,A,_,p.width,p.height),i.texSubImage2D(3553,0,0,0,p.width,p.height,m,g,p.data)):i.texImage2D(3553,0,_,p.width,p.height,0,m,g,p.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){x&&y&&i.texStorage3D(35866,A,_,v[0].width,v[0].height,p.depth);for(let e=0,n=v.length;e<n;e++)t=v[e],1023!==r.format?null!==m?x?i.compressedTexSubImage3D(35866,e,0,0,0,t.width,t.height,p.depth,m,t.data,0,0):i.compressedTexImage3D(35866,e,_,t.width,t.height,p.depth,0,t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):x?i.texSubImage3D(35866,e,0,0,0,t.width,t.height,p.depth,m,g,t.data):i.texImage3D(35866,e,_,t.width,t.height,p.depth,0,m,g,t.data)}else{x&&y&&i.texStorage2D(3553,A,_,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)t=v[e],1023!==r.format?null!==m?x?i.compressedTexSubImage2D(3553,e,0,0,t.width,t.height,m,t.data):i.compressedTexImage2D(3553,e,_,t.width,t.height,0,t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):x?i.texSubImage2D(3553,e,0,0,t.width,t.height,m,g,t.data):i.texImage2D(3553,e,_,t.width,t.height,0,m,g,t.data)}}else if(r.isDataArrayTexture)x?(y&&i.texStorage3D(35866,A,_,p.width,p.height,p.depth),i.texSubImage3D(35866,0,0,0,0,p.width,p.height,p.depth,m,g,p.data)):i.texImage3D(35866,0,_,p.width,p.height,p.depth,0,m,g,p.data);else if(r.isData3DTexture)x?(y&&i.texStorage3D(32879,A,_,p.width,p.height,p.depth),i.texSubImage3D(32879,0,0,0,0,p.width,p.height,p.depth,m,g,p.data)):i.texImage3D(32879,0,_,p.width,p.height,p.depth,0,m,g,p.data);else if(r.isFramebufferTexture){if(y){if(x)i.texStorage2D(3553,A,_,p.width,p.height);else{let e=p.width,t=p.height;for(let n=0;n<A;n++)i.texImage2D(3553,n,_,e,t,0,m,g,null),e>>=1,t>>=1}}}else // regular Texture (image, video, canvas)
// use manually created mipmaps if available
// if there are no manual mipmaps
// set 0 level mipmap and then use GL to generate other mipmap levels
if(v.length>0&&f){x&&y&&i.texStorage2D(3553,A,_,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)t=v[e],x?i.texSubImage2D(3553,e,0,0,m,g,t):i.texImage2D(3553,e,_,m,g,t);r.generateMipmaps=!1}else x?(y&&i.texStorage2D(3553,A,_,p.width,p.height),i.texSubImage2D(3553,0,0,0,m,g,p)):i.texImage2D(3553,0,_,m,g,p);S(r,f)&&b(o),d.__version=u.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}// Render targets
// Setup storage for target texture and bind it to correct framebuffer
function F(t,r,a,o,l){let h=s.convert(a.format,a.encoding),u=s.convert(a.type),c=T(a.internalFormat,h,u,a.encoding),d=n.get(r);d.__hasExternalTextures||(32879===l||35866===l?i.texImage3D(l,0,c,r.width,r.height,r.depth,0,h,u,null):i.texImage2D(l,0,c,r.width,r.height,0,h,u,null)),i.bindFramebuffer(36160,t),W(r)?p.framebufferTexture2DMultisampleEXT(36160,o,l,n.get(a).__webglTexture,0,G(r)):(3553===l||l>=34069&&l<=34074)&&e.framebufferTexture2D(36160,o,l,n.get(a).__webglTexture,0),i.bindFramebuffer(36160,null)}// Setup storage for internal depth/stencil buffers and bind to correct framebuffer
function V(t,i,n){if(e.bindRenderbuffer(36161,t),i.depthBuffer&&!i.stencilBuffer){let r=33189;if(n||W(i)){let t=i.depthTexture;t&&t.isDepthTexture&&(1015===t.type?r=36012:1014===t.type&&(r=33190));let n=G(i);W(i)?p.renderbufferStorageMultisampleEXT(36161,n,r,i.width,i.height):e.renderbufferStorageMultisample(36161,n,r,i.width,i.height)}else e.renderbufferStorage(36161,r,i.width,i.height);e.framebufferRenderbuffer(36160,36096,36161,t)}else if(i.depthBuffer&&i.stencilBuffer){let r=G(i);n&&!1===W(i)?e.renderbufferStorageMultisample(36161,r,35056,i.width,i.height):W(i)?p.renderbufferStorageMultisampleEXT(36161,r,35056,i.width,i.height):e.renderbufferStorage(36161,34041,i.width,i.height),e.framebufferRenderbuffer(36160,33306,36161,t)}else{let t=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture];for(let r=0;r<t.length;r++){let a=t[r],o=s.convert(a.format,a.encoding),l=s.convert(a.type),h=T(a.internalFormat,o,l,a.encoding),u=G(i);n&&!1===W(i)?e.renderbufferStorageMultisample(36161,u,h,i.width,i.height):W(i)?p.renderbufferStorageMultisampleEXT(36161,u,h,i.width,i.height):e.renderbufferStorage(36161,h,i.width,i.height)}}e.bindRenderbuffer(36161,null)}// Setup GL resources for a non-texture depth buffer
function H(t){let r=n.get(t),s=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!r.__autoAllocateDepthBuffer){if(s)throw Error("target.depthTexture not supported in Cube render targets");!// Setup resources for a Depth Texture for a FBO (needs an extension)
function(t,r){let s=r&&r.isWebGLCubeRenderTarget;if(s)throw Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(36160,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(r.depthTexture).__webglTexture&&r.depthTexture.image.width===r.width&&r.depthTexture.image.height===r.height||(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),O(r.depthTexture,0);let a=n.get(r.depthTexture).__webglTexture,o=G(r);if(1026===r.depthTexture.format)W(r)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,a,0,o):e.framebufferTexture2D(36160,36096,3553,a,0);else if(1027===r.depthTexture.format)W(r)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,a,0,o):e.framebufferTexture2D(36160,33306,3553,a,0);else throw Error("Unknown depthTexture format")}(r.__webglFramebuffer,t)}else if(s){r.__webglDepthbuffer=[];for(let n=0;n<6;n++)i.bindFramebuffer(36160,r.__webglFramebuffer[n]),r.__webglDepthbuffer[n]=e.createRenderbuffer(),V(r.__webglDepthbuffer[n],t,!1)}else i.bindFramebuffer(36160,r.__webglFramebuffer),r.__webglDepthbuffer=e.createRenderbuffer(),V(r.__webglDepthbuffer,t,!1);i.bindFramebuffer(36160,null)}function G(e){return Math.min(d,e.samples)}function W(e){let i=n.get(e);return l&&e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==i.__useRenderToTexture}function q(e,i){let n=e.encoding,r=e.format,s=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||1035===e.format||3e3!==n&&(3001===n?!1===l?!0===t.has("EXT_sRGB")&&1023===r?(e.format=1035,// it's not possible to generate mips in WebGL 1 with this extension
e.minFilter=1006,e.generateMipmaps=!1):i=I.sRGBToLinear(i):(1023!==r||1009!==s)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",n)),i}//
this.allocateTextureUnit=function(){let e=D;return e>=h&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+h),D+=1,e},this.resetTextureUnits=function(){D=0},this.setTexture2D=O,this.setTexture2DArray=function(e,t){let r=n.get(e);if(e.version>0&&r.__version!==e.version){B(r,e,t);return}i.bindTexture(35866,r.__webglTexture,33984+t)},this.setTexture3D=function(e,t){let r=n.get(e);if(e.version>0&&r.__version!==e.version){B(r,e,t);return}i.bindTexture(32879,r.__webglTexture,33984+t)},this.setTextureCube=function(t,r){let a=n.get(t);if(t.version>0&&a.__version!==t.version){(function(t,r,a){if(6!==r.image.length)return;let o=k(t,r),h=r.source;i.bindTexture(34067,t.__webglTexture,33984+a);let c=n.get(h);if(h.version!==c.__version||!0===o){let t;i.activeTexture(33984+a),e.pixelStorei(37440,r.flipY),e.pixelStorei(37441,r.premultiplyAlpha),e.pixelStorei(3317,r.unpackAlignment),e.pixelStorei(37443,0);let n=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,p=[];for(let e=0;e<6;e++)n||d?p[e]=d?r.image[e].image:r.image[e]:p[e]=M(r.image[e],!1,!0,u),p[e]=q(r,p[e]);let f=p[0],m=w(f)||l,g=s.convert(r.format,r.encoding),_=s.convert(r.type),v=T(r.internalFormat,g,_,r.encoding),x=l&&!0!==r.isVideoTexture,y=void 0===c.__version||!0===o,A=E(r,f,m);if(U(34067,r,m),n){x&&y&&i.texStorage2D(34067,A,v,f.width,f.height);for(let e=0;e<6;e++){t=p[e].mipmaps;for(let n=0;n<t.length;n++){let s=t[n];1023!==r.format?null!==g?x?i.compressedTexSubImage2D(34069+e,n,0,0,s.width,s.height,g,s.data):i.compressedTexImage2D(34069+e,n,v,s.width,s.height,0,s.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):x?i.texSubImage2D(34069+e,n,0,0,s.width,s.height,g,_,s.data):i.texImage2D(34069+e,n,v,s.width,s.height,0,g,_,s.data)}}}else{t=r.mipmaps,x&&y&&(t.length>0&&A++,i.texStorage2D(34067,A,v,p[0].width,p[0].height));for(let e=0;e<6;e++)if(d){x?i.texSubImage2D(34069+e,0,0,0,p[e].width,p[e].height,g,_,p[e].data):i.texImage2D(34069+e,0,v,p[e].width,p[e].height,0,g,_,p[e].data);for(let n=0;n<t.length;n++){let r=t[n],s=r.image[e].image;x?i.texSubImage2D(34069+e,n+1,0,0,s.width,s.height,g,_,s.data):i.texImage2D(34069+e,n+1,v,s.width,s.height,0,g,_,s.data)}}else{x?i.texSubImage2D(34069+e,0,0,0,g,_,p[e]):i.texImage2D(34069+e,0,v,g,_,p[e]);for(let n=0;n<t.length;n++){let r=t[n];x?i.texSubImage2D(34069+e,n+1,0,0,g,_,r.image[e]):i.texImage2D(34069+e,n+1,v,g,_,r.image[e])}}}S(r,m)&&b(34067),c.__version=h.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version})(a,t,r);return}i.bindTexture(34067,a.__webglTexture,33984+r)},this.rebindTextures=// rebind framebuffer with external textures
function(e,t,i){let r=n.get(e);void 0!==t&&F(r.__webglFramebuffer,e,e.texture,36064,3553),void 0!==i&&H(e)},this.setupRenderTarget=// Set up GL resources for the render target
function(t){let o=t.texture,h=n.get(t),u=n.get(o);t.addEventListener("dispose",P),!0!==t.isWebGLMultipleRenderTargets&&(void 0===u.__webglTexture&&(u.__webglTexture=e.createTexture()),u.__version=o.version,a.memory.textures++);let c=!0===t.isWebGLCubeRenderTarget,d=!0===t.isWebGLMultipleRenderTargets,p=w(t)||l;// Setup framebuffer
if(c){h.__webglFramebuffer=[];for(let t=0;t<6;t++)h.__webglFramebuffer[t]=e.createFramebuffer()}else{if(h.__webglFramebuffer=e.createFramebuffer(),d){if(r.drawBuffers){let i=t.texture;for(let t=0,r=i.length;t<r;t++){let r=n.get(i[t]);void 0===r.__webglTexture&&(r.__webglTexture=e.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.")}if(l&&t.samples>0&&!1===W(t)){let n=d?o:[o];h.__webglMultisampledFramebuffer=e.createFramebuffer(),h.__webglColorRenderbuffer=[],i.bindFramebuffer(36160,h.__webglMultisampledFramebuffer);for(let i=0;i<n.length;i++){let r=n[i];h.__webglColorRenderbuffer[i]=e.createRenderbuffer(),e.bindRenderbuffer(36161,h.__webglColorRenderbuffer[i]);let a=s.convert(r.format,r.encoding),o=s.convert(r.type),l=T(r.internalFormat,a,o,r.encoding,!0===t.isXRRenderTarget),u=G(t);e.renderbufferStorageMultisample(36161,u,l,t.width,t.height),e.framebufferRenderbuffer(36160,36064+i,36161,h.__webglColorRenderbuffer[i])}e.bindRenderbuffer(36161,null),t.depthBuffer&&(h.__webglDepthRenderbuffer=e.createRenderbuffer(),V(h.__webglDepthRenderbuffer,t,!0)),i.bindFramebuffer(36160,null)}}// Setup color buffer
if(c){i.bindTexture(34067,u.__webglTexture),U(34067,o,p);for(let e=0;e<6;e++)F(h.__webglFramebuffer[e],t,o,36064,34069+e);S(o,p)&&b(34067),i.unbindTexture()}else if(d){let e=t.texture;for(let r=0,s=e.length;r<s;r++){let s=e[r],a=n.get(s);i.bindTexture(3553,a.__webglTexture),U(3553,s,p),F(h.__webglFramebuffer,t,s,36064+r,3553),S(s,p)&&b(3553)}i.unbindTexture()}else{let e=3553;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l?e=t.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(e,u.__webglTexture),U(e,o,p),F(h.__webglFramebuffer,t,o,36064,e),S(o,p)&&b(e),i.unbindTexture()}t.depthBuffer&&H(t)},this.updateRenderTargetMipmap=function(e){let t=w(e)||l,r=!0===e.isWebGLMultipleRenderTargets?e.texture:[e.texture];for(let s=0,a=r.length;s<a;s++){let a=r[s];if(S(a,t)){let t=e.isWebGLCubeRenderTarget?34067:3553,r=n.get(a).__webglTexture;i.bindTexture(t,r),b(t),i.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(l&&t.samples>0&&!1===W(t)){let r=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],s=t.width,a=t.height,o=16384,l=[],h=t.stencilBuffer?33306:36096,u=n.get(t),c=!0===t.isWebGLMultipleRenderTargets;// If MRT we need to remove FBO attachments
if(c)for(let t=0;t<r.length;t++)i.bindFramebuffer(36160,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+t,36161,null),i.bindFramebuffer(36160,u.__webglFramebuffer),e.framebufferTexture2D(36009,36064+t,3553,null,0);i.bindFramebuffer(36008,u.__webglMultisampledFramebuffer),i.bindFramebuffer(36009,u.__webglFramebuffer);for(let i=0;i<r.length;i++){l.push(36064+i),t.depthBuffer&&l.push(h);let d=void 0!==u.__ignoreDepthValues&&u.__ignoreDepthValues;if(!1===d&&(t.depthBuffer&&(o|=256),t.stencilBuffer&&(o|=1024)),c&&e.framebufferRenderbuffer(36008,36064,36161,u.__webglColorRenderbuffer[i]),!0===d&&(e.invalidateFramebuffer(36008,[h]),e.invalidateFramebuffer(36009,[h])),c){let t=n.get(r[i]).__webglTexture;e.framebufferTexture2D(36009,36064,3553,t,0)}e.blitFramebuffer(0,0,s,a,0,0,s,a,o,9728),f&&e.invalidateFramebuffer(36008,l)}// If MRT since pre-blit we removed the FBO we need to reconstruct the attachments
if(i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),c)for(let t=0;t<r.length;t++){i.bindFramebuffer(36160,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+t,36161,u.__webglColorRenderbuffer[t]);let s=n.get(r[t]).__webglTexture;i.bindFramebuffer(36160,u.__webglFramebuffer),e.framebufferTexture2D(36009,36064+t,3553,s,0)}i.bindFramebuffer(36009,u.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=F,this.useMultisampledRTT=W}function n0(e,t,i){let n=i.isWebGL2;return{convert:function(i,r=null){let s;if(1009===i)return 5121;if(1017===i)return 32819;if(1018===i)return 32820;if(1010===i)return 5120;if(1011===i)return 5122;if(1012===i)return 5123;if(1013===i)return 5124;if(1014===i)return 5125;if(1015===i)return 5126;if(1016===i)return n?5131:null!==(s=t.get("OES_texture_half_float"))?s.HALF_FLOAT_OES:null;if(1021===i)return 6406;if(1023===i)return 6408;if(1024===i)return 6409;if(1025===i)return 6410;if(1026===i)return 6402;if(1027===i)return 34041;// WebGL 1 sRGB fallback
if(1035===i)return null!==(s=t.get("EXT_sRGB"))?s.SRGB_ALPHA_EXT:null;// WebGL2 formats.
if(1028===i)return 6403;if(1029===i)return 36244;if(1030===i)return 33319;if(1031===i)return 33320;if(1033===i)return 36249;// S3TC
if(33776===i||33777===i||33778===i||33779===i){if(3001===r){if(null===(s=t.get("WEBGL_compressed_texture_s3tc_srgb")))return null;if(33776===i)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(33777===i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(33778===i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(33779===i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(null===(s=t.get("WEBGL_compressed_texture_s3tc")))return null;if(33776===i)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===i)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===i)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===i)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}}// PVRTC
if(35840===i||35841===i||35842===i||35843===i){if(null===(s=t.get("WEBGL_compressed_texture_pvrtc")))return null;if(35840===i)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===i)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===i)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===i)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}// ETC1
if(36196===i)return null!==(s=t.get("WEBGL_compressed_texture_etc1"))?s.COMPRESSED_RGB_ETC1_WEBGL:null;// ETC2
if(37492===i||37496===i){if(null===(s=t.get("WEBGL_compressed_texture_etc")))return null;if(37492===i)return 3001===r?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(37496===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}// ASTC
if(37808===i||37809===i||37810===i||37811===i||37812===i||37813===i||37814===i||37815===i||37816===i||37817===i||37818===i||37819===i||37820===i||37821===i){if(null===(s=t.get("WEBGL_compressed_texture_astc")))return null;if(37808===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(37809===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(37810===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(37811===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(37812===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(37813===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(37814===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(37815===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(37816===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(37817===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(37818===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(37819===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(37820===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(37821===i)return 3001===r?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}// BPTC
if(36492===i){if(null===(s=t.get("EXT_texture_compression_bptc")))return null;if(36492===i)return 3001===r?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}// RGTC
if(36283===i||36284===i||36285===i||36286===i){if(null===(s=t.get("EXT_texture_compression_rgtc")))return null;if(36492===i)return s.COMPRESSED_RED_RGTC1_EXT;if(36284===i)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(36285===i)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(36286===i)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return(//
1020===i?n?34042:null!==(s=t.get("WEBGL_depth_texture"))?s.UNSIGNED_INT_24_8_WEBGL:null:void 0!==e[i]?e[i]:null)}}}class n1 extends tH{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class n3 extends eW{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n2={type:"move"};class n5{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new n3,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new n3,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new n3,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null,a=this._targetRay,o=this._grip,l=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState){if(l&&e.hand){for(let n of(s=!0,e.hand.values())){// Update the joints groups with the XRJoint poses
let e=t.getJointPose(n,i),r=this._getHandJoint(l,n);null!==e&&(r.matrix.fromArray(e.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.jointRadius=e.radius),r.visible=null!==e}// Custom events
// Check pinchz
let n=l.joints["index-finger-tip"],r=l.joints["thumb-tip"],a=n.position.distanceTo(r.position);l.inputState.pinching&&a>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&a<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==o&&e.gripSpace&&null!==(r=t.getPose(e.gripSpace,i))&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1);null!==a&&(null===(n=t.getPose(e.targetRaySpace,i))&&null!==r&&(n=r),null!==n&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n2)))}return null!==a&&(a.visible=null!==n),null!==o&&(o.visible=null!==r),null!==l&&(l.visible=null!==s),this}// private method
_getHandJoint(e,t){if(void 0===e.joints[t.jointName]){let i=new n3;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class n4 extends k{constructor(e,t,i,n,r,s,a,o,l,h){if(1026!==(h=void 0!==h?h:1026)&&1027!==h)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===i&&1026===h&&(i=1014),void 0===i&&1027===h&&(i=1020),super(null,n,r,s,a,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=void 0!==a?a:1003,this.minFilter=void 0!==o?o:1003,this.flipY=!1,this.generateMipmaps=!1}}class n6 extends o{constructor(e,t){super();let i=this,n=null,r=1,s=null,a="local-floor",o=1,l=null,h=null,u=null,d=null,p=null,f=null,m=t.getContextAttributes(),g=null,_=null,v=[],x=[],y=new Set,M=new Map,w=new tH;w.layers.enable(1),w.viewport=new B;let S=new tH;S.layers.enable(2),S.viewport=new B;let b=[w,S],T=new n1;T.layers.enable(1),T.layers.enable(2);let A=null,E=null;//
function C(e){let t=x.indexOf(e.inputSource);if(-1===t)return;let i=v[t];void 0!==i&&i.dispatchEvent({type:e.type,data:e.inputSource})}function R(){n.removeEventListener("select",C),n.removeEventListener("selectstart",C),n.removeEventListener("selectend",C),n.removeEventListener("squeeze",C),n.removeEventListener("squeezestart",C),n.removeEventListener("squeezeend",C),n.removeEventListener("end",R),n.removeEventListener("inputsourceschange",P);for(let e=0;e<v.length;e++){let t=x[e];null!==t&&(x[e]=null,v[e].disconnect(t))}A=null,E=null,// restore framebuffer/rendering state
e.setRenderTarget(g),p=null,d=null,u=null,n=null,_=null,//
N.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function P(e){// Notify disconnected
for(let t=0;t<e.removed.length;t++){let i=e.removed[t],n=x.indexOf(i);n>=0&&(x[n]=null,v[n].disconnect(i))}// Notify connected
for(let t=0;t<e.added.length;t++){let i=e.added[t],n=x.indexOf(i);if(-1===n){// Assign input source a controller that currently has no input source
for(let e=0;e<v.length;e++){if(e>=x.length){x.push(i),n=e;break}if(null===x[e]){x[e]=i,n=e;break}}// If all controllers do currently receive input we ignore new ones
if(-1===n)break}let r=v[n];r&&r.connect(i)}}//
this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return void 0===t&&(t=new n5,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return void 0===t&&(t=new n5,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return void 0===t&&(t=new n5,v[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){r=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){a=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return null!==d?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(h){if(null!==(n=h)){if(g=e.getRenderTarget(),n.addEventListener("select",C),n.addEventListener("selectstart",C),n.addEventListener("selectend",C),n.addEventListener("squeeze",C),n.addEventListener("squeezestart",C),n.addEventListener("squeezeend",C),n.addEventListener("end",R),n.addEventListener("inputsourceschange",P),!0!==m.xrCompatible&&await t.makeXRCompatible(),void 0===n.renderState.layers||!1===e.capabilities.isWebGL2){let i={antialias:void 0!==n.renderState.layers||m.antialias,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,i),n.updateRenderState({baseLayer:p}),_=new F(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let i=null,s=null,a=null;m.depth&&(a=m.stencil?35056:33190,i=m.stencil?1027:1026,s=m.stencil?1020:1014);let o={colorFormat:32856,depthFormat:a,scaleFactor:r};d=(u=new XRWebGLBinding(n,t)).createProjectionLayer(o),n.updateRenderState({layers:[d]}),_=new F(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new n4(d.textureWidth,d.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,i),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});let l=e.properties.get(_);l.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await n.requestReferenceSpace(a),N.setContext(n),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};//
let L=new G,D=new G;function O(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(null===n)return;T.near=S.near=w.near=e.near,T.far=S.far=w.far=e.far,(A!==T.near||E!==T.far)&&(// Note that the new renderState won't apply until the next frame. See #18320
n.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,E=T.far);let t=e.parent,i=T.cameras;O(T,t);for(let e=0;e<i.length;e++)O(i[e],t);2===i.length?/**
		 * Assumes 2 cameras that are parallel and share an X-axis, and that
		 * the cameras' projection and world matrices have already been set.
		 * And that near and far planes are identical for both cameras.
		 * Visualization of this technique: https://computergraphics.stackexchange.com/a/4765
		 */function(e,t,i){L.setFromMatrixPosition(t.matrixWorld),D.setFromMatrixPosition(i.matrixWorld);let n=L.distanceTo(D),r=t.projectionMatrix.elements,s=i.projectionMatrix.elements,a=r[14]/(r[10]-1),o=r[14]/(r[10]+1),l=(r[9]+1)/r[5],h=(r[9]-1)/r[5],u=(r[8]-1)/r[0],c=(s[8]+1)/s[0],d=n/(-u+c),p=-(d*u);// TODO: Better way to apply this offset?
t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(p),e.translateZ(d),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();// Find the union of the frustum values of the cameras and scale
// the values so that the near plane's position does not change in world space,
// although must now be relative to the new union camera.
let f=a+d,m=o+d,g=a*u-p,_=a*c+(n-p),v=l*o/m*f,x=h*o/m*f;e.projectionMatrix.makePerspective(g,_,v,x,f,m),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}(T,w,S):T.projectionMatrix.copy(w.projectionMatrix),// update user camera and its children
function(e,t,i){null===i?e.matrix.copy(t.matrixWorld):(e.matrix.copy(i.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0);let n=e.children;for(let e=0,t=n.length;e<t;e++)n[e].updateMatrixWorld(!0);e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=2*c*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}(e,T,t)},this.getCamera=function(){return T},this.getFoveation=function(){if(null!==d||null!==p)return o},this.setFoveation=function(e){// 0 = no foveation = full resolution
// 1 = maximum foveation = the edges render at lower resolution
o=e,null!==d&&(d.fixedFoveation=e),null!==p&&void 0!==p.fixedFoveation&&(p.fixedFoveation=e)},this.getPlanes=function(){return y};// Animation Loop
let I=null,N=new t$;N.setAnimationLoop(function(t,n){if(h=n.getViewerPose(l||s),f=n,null!==h){let t=h.views;null!==p&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let i=!1;// check if it's necessary to rebuild cameraVR's camera list
t.length!==T.cameras.length&&(T.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],s=null;if(null!==p)s=p.getViewport(r);else{let t=u.getViewSubImage(d,r);s=t.viewport,0===n&&(e.setRenderTargetTextures(_,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(_))}let a=b[n];void 0===a&&((a=new tH).layers.enable(n),a.viewport=new B,b[n]=a),a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.projectionMatrix.fromArray(r.projectionMatrix),a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),a.viewport.set(s.x,s.y,s.width,s.height),0===n&&(T.matrix.copy(a.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),!0===i&&T.cameras.push(a)}}//
for(let e=0;e<v.length;e++){let t=x[e],i=v[e];null!==t&&void 0!==i&&i.update(t,n,l||s)}if(I&&I(t,n),n.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:n.detectedPlanes});let e=null;for(let t of y)n.detectedPlanes.has(t)||(null===e&&(e=[]),e.push(t));if(null!==e)for(let t of e)y.delete(t),M.delete(t),i.dispatchEvent({type:"planeremoved",data:t});for(let e of n.detectedPlanes)if(y.has(e)){let t=M.get(e);e.lastChangedTime>t&&(M.set(e,e.lastChangedTime),i.dispatchEvent({type:"planechanged",data:e}))}else y.add(e),M.set(e,n.lastChangedTime),i.dispatchEvent({type:"planeadded",data:e})}f=null}),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}}function n8(e,t){function i(e,t){!0===e.matrixAutoUpdate&&e.updateMatrix(),t.value.copy(e.matrix)}function n(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map,i(r.map,n.mapTransform)),r.alphaMap&&(n.alphaMap.value=r.alphaMap,i(r.alphaMap,n.alphaMapTransform)),r.bumpMap&&(n.bumpMap.value=r.bumpMap,i(r.bumpMap,n.bumpMapTransform),n.bumpScale.value=r.bumpScale,1===r.side&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,i(r.normalMap,n.normalMapTransform),n.normalScale.value.copy(r.normalScale),1===r.side&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,i(r.displacementMap,n.displacementMapTransform),n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap,i(r.emissiveMap,n.emissiveMapTransform)),r.specularMap&&(n.specularMap.value=r.specularMap,i(r.specularMap,n.specularMapTransform)),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);let s=t.get(r).envMap;if(s&&(n.envMap.value=s,n.flipEnvMap.value=s.isCubeTexture&&!1===s.isRenderTargetTexture?-1:1,n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio),r.lightMap){n.lightMap.value=r.lightMap;// artist-friendly light intensity scaling factor
let t=!0===e.useLegacyLights?Math.PI:1;n.lightMapIntensity.value=r.lightMapIntensity*t,i(r.lightMap,n.lightMapTransform)}r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity,i(r.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(t,i){i.color.getRGB(t.fogColor.value,tk(e)),i.isFog?(t.fogNear.value=i.near,t.fogFar.value=i.far):i.isFogExp2&&(t.fogDensity.value=i.density)},refreshMaterialUniforms:function(e,r,s,a,o){r.isMeshBasicMaterial?n(e,r):r.isMeshLambertMaterial?n(e,r):r.isMeshToonMaterial?(n(e,r),r.gradientMap&&(e.gradientMap.value=r.gradientMap)):r.isMeshPhongMaterial?(n(e,r),e.specular.value.copy(r.specular),e.shininess.value=Math.max(r.shininess,1e-4)):r.isMeshStandardMaterial?(n(e,r),function(e,n){e.metalness.value=n.metalness,n.metalnessMap&&(e.metalnessMap.value=n.metalnessMap,i(n.metalnessMap,e.metalnessMapTransform)),e.roughness.value=n.roughness,n.roughnessMap&&(e.roughnessMap.value=n.roughnessMap,i(n.roughnessMap,e.roughnessMapTransform));let r=t.get(n).envMap;r&&(e.envMapIntensity.value=n.envMapIntensity)}(e,r),r.isMeshPhysicalMaterial&&(e.ior.value=r.ior,r.sheen>0&&(e.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),e.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(e.sheenColorMap.value=r.sheenColorMap,i(r.sheenColorMap,e.sheenColorMapTransform)),r.sheenRoughnessMap&&(e.sheenRoughnessMap.value=r.sheenRoughnessMap,i(r.sheenRoughnessMap,e.sheenRoughnessMapTransform))),r.clearcoat>0&&(e.clearcoat.value=r.clearcoat,e.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(e.clearcoatMap.value=r.clearcoatMap,i(r.clearcoatMap,e.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,i(r.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(e.clearcoatNormalMap.value=r.clearcoatNormalMap,i(r.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),1===r.side&&e.clearcoatNormalScale.value.negate())),r.iridescence>0&&(e.iridescence.value=r.iridescence,e.iridescenceIOR.value=r.iridescenceIOR,e.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(e.iridescenceMap.value=r.iridescenceMap,i(r.iridescenceMap,e.iridescenceMapTransform)),r.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=r.iridescenceThicknessMap,i(r.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),r.transmission>0&&(e.transmission.value=r.transmission,e.transmissionSamplerMap.value=o.texture,e.transmissionSamplerSize.value.set(o.width,o.height),r.transmissionMap&&(e.transmissionMap.value=r.transmissionMap,i(r.transmissionMap,e.transmissionMapTransform)),e.thickness.value=r.thickness,r.thicknessMap&&(e.thicknessMap.value=r.thicknessMap,i(r.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=r.attenuationDistance,e.attenuationColor.value.copy(r.attenuationColor)),e.specularIntensity.value=r.specularIntensity,e.specularColor.value.copy(r.specularColor),r.specularColorMap&&(e.specularColorMap.value=r.specularColorMap,i(r.specularColorMap,e.specularColorMapTransform)),r.specularIntensityMap&&(e.specularIntensityMap.value=r.specularIntensityMap,i(r.specularIntensityMap,e.specularIntensityMapTransform)))):r.isMeshMatcapMaterial?(n(e,r),r.matcap&&(e.matcap.value=r.matcap)):r.isMeshDepthMaterial?n(e,r):r.isMeshDistanceMaterial?(n(e,r),function(e,i){let n=t.get(i).light;e.referencePosition.value.setFromMatrixPosition(n.matrixWorld),e.nearDistance.value=n.shadow.camera.near,e.farDistance.value=n.shadow.camera.far}(e,r)):r.isMeshNormalMaterial?n(e,r):r.isLineBasicMaterial?(e.diffuse.value.copy(r.color),e.opacity.value=r.opacity,r.map&&(e.map.value=r.map,i(r.map,e.mapTransform)),r.isLineDashedMaterial&&(e.dashSize.value=r.dashSize,e.totalSize.value=r.dashSize+r.gapSize,e.scale.value=r.scale)):r.isPointsMaterial?(e.diffuse.value.copy(r.color),e.opacity.value=r.opacity,e.size.value=r.size*s,e.scale.value=.5*a,r.map&&(e.map.value=r.map,i(r.map,e.uvTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest)):r.isSpriteMaterial?(e.diffuse.value.copy(r.color),e.opacity.value=r.opacity,e.rotation.value=r.rotation,r.map&&(e.map.value=r.map,i(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest)):r.isShadowMaterial?(e.color.value.copy(r.color),e.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1);// #15581
}}}function n7(e,t,i,n){let r={},s={},a=[],o=i.isWebGL2?e.getParameter(35375):0;function l(e){let t={boundary:0,storage:0// bytes
};return"number"==typeof e?(// float/int
t.boundary=4,t.storage=4):e.isVector2?(// vec2
t.boundary=8,t.storage=8):e.isVector3||e.isColor?(// vec3
t.boundary=16,t.storage=12):e.isVector4?(// vec4
t.boundary=16,t.storage=16):e.isMatrix3?(// mat3 (in STD140 a 3x3 matrix is represented as 3x4)
t.boundary=48,t.storage=48):e.isMatrix4?(// mat4
t.boundary=64,t.storage=64):e.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",e),t}function h(t){let i=t.target;i.removeEventListener("dispose",h);let n=a.indexOf(i.__bindingPointIndex);a.splice(n,1),e.deleteBuffer(r[i.id]),delete r[i.id],delete s[i.id]}return{bind:function(e,t){let i=t.program;n.uniformBlockBinding(e,i)},update:function(i,u){let c=r[i.id];void 0===c&&(function(e){// determine total buffer size according to the STD140 layout
// Hint: STD140 is the only supported layout in WebGL 2
let t=e.uniforms,i=0,n=0;for(let e=0,r=t.length;e<r;e++){let r=t[e],s={boundary:0,storage:0// bytes
},a=Array.isArray(r.value)?r.value:[r.value];for(let e=0,t=a.length;e<t;e++){let t=a[e],i=l(t);s.boundary+=i.boundary,s.storage+=i.storage}//
if(// the following two properties will be used for partial buffer updates
r.__data=new Float32Array(s.storage/Float32Array.BYTES_PER_ELEMENT),r.__offset=i,e>0){n=i%16;let e=16-n;// check for chunk overflow
0!==n&&e-s.boundary<0&&(// add padding and adjust offset
i+=16-n,r.__offset=i)}i+=s.storage}// ensure correct final padding
(n=i%16)>0&&(i+=16-n),//
e.__size=i,e.__cache={}}(i),c=function(t){// the setup of an UBO is independent of a particular shader program but global
let i=function(){for(let e=0;e<o;e++)if(-1===a.indexOf(e))return a.push(e),e;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();t.__bindingPointIndex=i;let n=e.createBuffer(),r=t.__size,s=t.usage;return e.bindBuffer(35345,n),e.bufferData(35345,r,s),e.bindBuffer(35345,null),e.bindBufferBase(35345,i,n),n}(i),r[i.id]=c,i.addEventListener("dispose",h));// ensure to update the binding points/block indices mapping for this program
let d=u.program;n.updateUBOMapping(i,d);// update UBO once per frame
let p=t.render.frame;s[i.id]!==p&&(function(t){let i=r[t.id],n=t.uniforms,s=t.__cache;e.bindBuffer(35345,i);for(let t=0,i=n.length;t<i;t++){let i=n[t];// partly update the buffer if necessary
if(!0===function(e,t,i){let n=e.value;if(void 0===i[t]){// cache entry does not exist so far
if("number"==typeof n)i[t]=n;else{let e=Array.isArray(n)?n:[n],r=[];for(let t=0;t<e.length;t++)r.push(e[t].clone());i[t]=r}return!0}// compare current value with cached entry
if("number"==typeof n){if(i[t]!==n)return i[t]=n,!0}else{let e=Array.isArray(i[t])?i[t]:[i[t]],r=Array.isArray(n)?n:[n];for(let t=0;t<e.length;t++){let i=e[t];if(!1===i.equals(r[t]))return i.copy(r[t]),!0}}return!1}(i,t,s)){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let s=0;s<n.length;s++){let a=n[s],o=l(a);"number"==typeof a?(i.__data[0]=a,e.bufferSubData(35345,t+r,i.__data)):a.isMatrix3?(// manually converting 3x3 to 3x4
i.__data[0]=a.elements[0],i.__data[1]=a.elements[1],i.__data[2]=a.elements[2],i.__data[3]=a.elements[0],i.__data[4]=a.elements[3],i.__data[5]=a.elements[4],i.__data[6]=a.elements[5],i.__data[7]=a.elements[0],i.__data[8]=a.elements[6],i.__data[9]=a.elements[7],i.__data[10]=a.elements[8],i.__data[11]=a.elements[0]):(a.toArray(i.__data,r),r+=o.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(35345,t,i.__data)}}e.bindBuffer(35345,null)}(i),s[i.id]=p)},dispose:function(){for(let t in r)e.deleteBuffer(r[t]);a=[],r={},s={}}}}class n9{constructor(e={}){let t,i,n,r,s,a,o,l,h,u,c,d,p,f,m,g,_,v,x,y,M,w,S,b,T;let{canvas:E=function(){let e=A("canvas");return e.style.display="block",e}(),context:C=null,depth:R=!0,stencil:P=!0,alpha:L=!1,antialias:D=!1,premultipliedAlpha:O=!0,preserveDrawingBuffer:I=!1,powerPreference:N="default",failIfMajorPerformanceCaveat:z=!1}=e;this.isWebGLRenderer=!0,t=null!==C?C.getContextAttributes().alpha:L;let U=null,k=null,V=[],H=[];// public properties
this.domElement=E,// Debug configuration container
this.debug={/**
			 * Enables error checking and reporting when shader programs are being compiled
			 * @type {boolean}
			 */checkShaderErrors:!0,/**
			 * Callback for custom error reporting.
			 * @type {?Function}
			 */onShaderError:null},// clearing
this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,// scene graph
this.sortObjects=!0,// user-defined clipping
this.clippingPlanes=[],this.localClippingEnabled=!1,// physically based shading
this.outputEncoding=3e3,// physical lights
this.useLegacyLights=!0,// tone mapping
this.toneMapping=0,this.toneMappingExposure=1;// internal properties
let W=this,q=!1,j=0,J=0,X=null,Y=-1,K=null,Z=new B,Q=new B,$=null,ee=E.width,et=E.height,ei=1,en=null,er=null,es=new B(0,0,ee,et),ea=new B(0,0,ee,et),eo=!1,el=new tQ,eh=!1,eu=!1,ec=null,ed=new ex,ep=new G,ef={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function em(){return null===X?ei:1}// initialize
let eg=C;function e_(e,t){for(let i=0;i<e.length;i++){let n=e[i],r=E.getContext(n,t);if(null!==r)return r}return null}try{if("setAttribute"in E&&E.setAttribute("data-engine","three.js r151"),// event listeners must be registered before WebGL context is created, see #12753
E.addEventListener("webglcontextlost",eM,!1),E.addEventListener("webglcontextrestored",ew,!1),E.addEventListener("webglcontextcreationerror",eS,!1),null===eg){let e=["webgl2","webgl","experimental-webgl"];if(!0===W.isWebGL1Renderer&&e.shift(),eg=e_(e,{alpha:!0,depth:R,stencil:P,antialias:D,premultipliedAlpha:O,preserveDrawingBuffer:I,powerPreference:N,failIfMajorPerformanceCaveat:z}),null===eg){if(e_(e))throw Error("Error creating WebGL context with your selected attributes.");throw Error("Error creating WebGL context.")}}void 0===eg.getShaderPrecisionFormat&&(eg.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error("THREE.WebGLRenderer: "+e.message),e}function ev(){i=new ix(eg),n=new t9(eg,i,e),i.init(n),S=new n0(eg,i,n),r=new nQ(eg,i,n),s=new iw,a=new nk,o=new n$(eg,i,r,a,n,S,s),l=new it(W),h=new iv(W),u=new t0(eg,n),b=new t8(eg,i,u,n),c=new iy(eg,u,s,b),d=new iA(eg,c,u,s),y=new iT(eg,n,o),_=new ie(a),p=new nU(W,l,h,i,n,b,_),f=new n8(W,a),m=new nH,g=new nX(i,n),x=new t6(W,l,h,r,d,t,O),v=new nZ(W,d,n),T=new n7(eg,s,n,r),M=new t7(eg,i,s,n),w=new iM(eg,i,s,n),s.programs=p.programs,W.capabilities=n,W.extensions=i,W.properties=a,W.renderLists=m,W.shadowMap=v,W.state=r,W.info=s}ev();// xr
let ey=new n6(W,eg);// Events
function eM(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function ew(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;let e=s.autoReset,t=v.enabled,i=v.autoUpdate,n=v.needsUpdate,r=v.type;ev(),s.autoReset=e,v.enabled=t,v.autoUpdate=i,v.needsUpdate=n,v.type=r}function eS(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function eb(e){let t=e.target;t.removeEventListener("dispose",eb),function(e){let t=a.get(e).programs;void 0!==t&&(t.forEach(function(e){p.releaseProgram(e)}),e.isShaderMaterial&&p.releaseShaderCache(e))}(t),a.remove(t)}this.xr=ey,// API
this.getContext=function(){return eg},this.getContextAttributes=function(){return eg.getContextAttributes()},this.forceContextLoss=function(){let e=i.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){let e=i.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return ei},this.setPixelRatio=function(e){void 0!==e&&(ei=e,this.setSize(ee,et,!1))},this.getSize=function(e){return e.set(ee,et)},this.setSize=function(e,t,i=!0){if(ey.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=e,et=t,E.width=Math.floor(e*ei),E.height=Math.floor(t*ei),!0===i&&(E.style.width=e+"px",E.style.height=t+"px"),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e.set(ee*ei,et*ei).floor()},this.setDrawingBufferSize=function(e,t,i){ee=e,et=t,ei=i,E.width=Math.floor(e*i),E.height=Math.floor(t*i),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return e.copy(Z)},this.getViewport=function(e){return e.copy(es)},this.setViewport=function(e,t,i,n){e.isVector4?es.set(e.x,e.y,e.z,e.w):es.set(e,t,i,n),r.viewport(Z.copy(es).multiplyScalar(ei).floor())},this.getScissor=function(e){return e.copy(ea)},this.setScissor=function(e,t,i,n){e.isVector4?ea.set(e.x,e.y,e.z,e.w):ea.set(e,t,i,n),r.scissor(Q.copy(ea).multiplyScalar(ei).floor())},this.getScissorTest=function(){return eo},this.setScissorTest=function(e){r.setScissorTest(eo=e)},this.setOpaqueSort=function(e){en=e},this.setTransparentSort=function(e){er=e},// Clearing
this.getClearColor=function(e){return e.copy(x.getClearColor())},this.setClearColor=function(){x.setClearColor.apply(x,arguments)},this.getClearAlpha=function(){return x.getClearAlpha()},this.setClearAlpha=function(){x.setClearAlpha.apply(x,arguments)},this.clear=function(e=!0,t=!0,i=!0){let n=0;e&&(n|=16384),t&&(n|=256),i&&(n|=1024),eg.clear(n)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},//
this.dispose=function(){E.removeEventListener("webglcontextlost",eM,!1),E.removeEventListener("webglcontextrestored",ew,!1),E.removeEventListener("webglcontextcreationerror",eS,!1),m.dispose(),g.dispose(),a.dispose(),l.dispose(),h.dispose(),d.dispose(),b.dispose(),T.dispose(),p.dispose(),ey.dispose(),ey.removeEventListener("sessionstart",eA),ey.removeEventListener("sessionend",eE),ec&&(ec.dispose(),ec=null),eC.stop()},// Buffer rendering
this.renderBufferDirect=function(e,t,i,s,d,p){let m;null===t&&(t=ef);let g=d.isMesh&&0>d.matrixWorld.determinant(),v=function(e,t,i,s,u){var c;!0!==t.isScene&&(t=ef),o.resetTextureUnits();let d=t.fog,p=s.isMeshStandardMaterial?t.environment:null,m=null===X?W.outputEncoding:!0===X.isXRRenderTarget?X.texture.encoding:3e3,g=(s.isMeshStandardMaterial?h:l).get(s.envMap||p),v=!0===s.vertexColors&&!!i.attributes.color&&4===i.attributes.color.itemSize,x=!!s.normalMap&&!!i.attributes.tangent,M=!!i.morphAttributes.position,w=!!i.morphAttributes.normal,S=!!i.morphAttributes.color,b=s.toneMapped?W.toneMapping:0,A=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,E=void 0!==A?A.length:0,C=a.get(s),R=k.state.lights;if(!0===eh&&(!0===eu||e!==K)){let t=e===K&&s.id===Y;// we might want to call this function with some ClippingGroup
// object instead of the material, once it becomes feasible
// (#8465, #8379)
_.setState(s,e,t)}//
let P=!1;s.version===C.__version?C.needsLights&&C.lightsStateVersion!==R.state.version?P=!0:C.outputEncoding!==m?P=!0:u.isInstancedMesh&&!1===C.instancing?P=!0:u.isInstancedMesh||!0!==C.instancing?u.isSkinnedMesh&&!1===C.skinning?P=!0:u.isSkinnedMesh||!0!==C.skinning?C.envMap!==g?P=!0:!0===s.fog&&C.fog!==d?P=!0:void 0!==C.numClippingPlanes&&(C.numClippingPlanes!==_.numPlanes||C.numIntersection!==_.numIntersection)?P=!0:C.vertexAlphas!==v?P=!0:C.vertexTangents!==x?P=!0:C.morphTargets!==M?P=!0:C.morphNormals!==w?P=!0:C.morphColors!==S?P=!0:C.toneMapping!==b?P=!0:!0===n.isWebGL2&&C.morphTargetsCount!==E&&(P=!0):P=!0:P=!0:(P=!0,C.__version=s.version);//
let L=C.currentProgram;!0===P&&(L=eD(s,t,u));let D=!1,O=!1,I=!1,N=L.getUniforms(),z=C.uniforms;if(r.useProgram(L.program)&&(D=!0,O=!0,I=!0),s.id!==Y&&(Y=s.id,O=!0),D||K!==e){// load material specific uniforms
// (shader material also gets them for the sake of genericity)
if(N.setValue(eg,"projectionMatrix",e.projectionMatrix),n.logarithmicDepthBuffer&&N.setValue(eg,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),K!==e&&(K=e,// lighting uniforms depend on the camera so enforce an update
// now, in case this material supports lights - or later, when
// the next material that does gets activated:
O=!0,I=!0),s.isShaderMaterial||s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshStandardMaterial||s.envMap){let t=N.map.cameraPosition;void 0!==t&&t.setValue(eg,ep.setFromMatrixPosition(e.matrixWorld))}(s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshLambertMaterial||s.isMeshBasicMaterial||s.isMeshStandardMaterial||s.isShaderMaterial)&&N.setValue(eg,"isOrthographic",!0===e.isOrthographicCamera),(s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshLambertMaterial||s.isMeshBasicMaterial||s.isMeshStandardMaterial||s.isShaderMaterial||s.isShadowMaterial||u.isSkinnedMesh)&&N.setValue(eg,"viewMatrix",e.matrixWorldInverse)}// skinning and morph target uniforms must be set even if material didn't change
// auto-setting of texture unit for bone and morph texture must go before other textures
// otherwise textures used for skinning and morphing can take over texture units reserved for other material textures
if(u.isSkinnedMesh){N.setOptional(eg,u,"bindMatrix"),N.setOptional(eg,u,"bindMatrixInverse");let e=u.skeleton;e&&(n.floatVertexTextures?(null===e.boneTexture&&e.computeBoneTexture(),N.setValue(eg,"boneTexture",e.boneTexture,o),N.setValue(eg,"boneTextureSize",e.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let U=i.morphAttributes;// UBOs
if((void 0!==U.position||void 0!==U.normal||void 0!==U.color&&!0===n.isWebGL2)&&y.update(u,i,L),(O||C.receiveShadow!==u.receiveShadow)&&(C.receiveShadow=u.receiveShadow,N.setValue(eg,"receiveShadow",u.receiveShadow)),s.isMeshGouraudMaterial&&null!==s.envMap&&(z.envMap.value=g,z.flipEnvMap.value=g.isCubeTexture&&!1===g.isRenderTargetTexture?-1:1),O&&(N.setValue(eg,"toneMappingExposure",W.toneMappingExposure),C.needsLights&&(c=I,z.ambientLightColor.needsUpdate=c,z.lightProbe.needsUpdate=c,z.directionalLights.needsUpdate=c,z.directionalLightShadows.needsUpdate=c,z.pointLights.needsUpdate=c,z.pointLightShadows.needsUpdate=c,z.spotLights.needsUpdate=c,z.spotLightShadows.needsUpdate=c,z.rectAreaLights.needsUpdate=c,z.hemisphereLights.needsUpdate=c),d&&!0===s.fog&&f.refreshFogUniforms(z,d),f.refreshMaterialUniforms(z,s,ei,et,ec),nx.upload(eg,C.uniformsList,z,o)),s.isShaderMaterial&&!0===s.uniformsNeedUpdate&&(nx.upload(eg,C.uniformsList,z,o),s.uniformsNeedUpdate=!1),s.isSpriteMaterial&&N.setValue(eg,"center",u.center),// common matrices
N.setValue(eg,"modelViewMatrix",u.modelViewMatrix),N.setValue(eg,"normalMatrix",u.normalMatrix),N.setValue(eg,"modelMatrix",u.matrixWorld),s.isShaderMaterial||s.isRawShaderMaterial){let e=s.uniformsGroups;for(let t=0,i=e.length;t<i;t++)if(n.isWebGL2){let i=e[t];T.update(i,L),T.bind(i,L)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return L}(e,t,i,s,d);r.setMaterial(s,g);//
let x=i.index,S=1;!0===s.wireframe&&(x=c.getWireframeAttribute(i),S=2);//
let A=i.drawRange,E=i.attributes.position,C=A.start*S,R=(A.start+A.count)*S;null!==p&&(C=Math.max(C,p.start*S),R=Math.min(R,(p.start+p.count)*S)),null!==x?(C=Math.max(C,0),R=Math.min(R,x.count)):null!=E&&(C=Math.max(C,0),R=Math.min(R,E.count));let P=R-C;if(P<0||P===1/0)return;//
b.setup(d,s,v,i,x);let L=M;//
if(null!==x&&(m=u.get(x),(L=w).setIndex(m)),d.isMesh)!0===s.wireframe?(r.setLineWidth(s.wireframeLinewidth*em()),L.setMode(1)):L.setMode(4);else if(d.isLine){let e=s.linewidth;void 0===e&&(e=1),r.setLineWidth(e*em()),d.isLineSegments?L.setMode(1):d.isLineLoop?L.setMode(2):L.setMode(3)}else d.isPoints?L.setMode(0):d.isSprite&&L.setMode(4);if(d.isInstancedMesh)L.renderInstances(C,P,d.count);else if(i.isInstancedBufferGeometry){let e=void 0!==i._maxInstanceCount?i._maxInstanceCount:1/0,t=Math.min(i.instanceCount,e);L.renderInstances(C,P,t)}else L.render(C,P)},// Compile
this.compile=function(e,t){function i(e,t,i){!0===e.transparent&&2===e.side&&!1===e.forceSinglePass?(e.side=1,e.needsUpdate=!0,eD(e,t,i),e.side=0,e.needsUpdate=!0,eD(e,t,i),e.side=2):eD(e,t,i)}(k=g.get(e)).init(),H.push(k),e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(W.useLegacyLights),e.traverse(function(t){let n=t.material;if(n){if(Array.isArray(n))for(let r=0;r<n.length;r++){let s=n[r];i(s,e,t)}else i(n,e,t)}}),H.pop(),k=null};// Animation Loop
let eT=null;function eA(){eC.stop()}function eE(){eC.start()}let eC=new t$;function eR(e,t,s,a){let l=e.opaque,h=e.transmissive,u=e.transparent;k.setupLightsView(s),!0===eh&&_.setGlobalState(W.clippingPlanes,s),h.length>0&&function(e,t,r,s){if(null===ec){let e=n.isWebGL2;ec=new F(1024,1024,{generateMipmaps:!0,type:i.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:e&&!0===D?4:0});// debug
/*
				const geometry = new PlaneGeometry();
				const material = new MeshBasicMaterial( { map: _transmissionRenderTarget.texture } );

				const mesh = new Mesh( geometry, material );
				scene.add( mesh );
				*/}//
let a=W.getRenderTarget();W.setRenderTarget(ec),W.clear();// Turn off the features which can affect the frag color for opaque objects pass.
// Otherwise they are applied twice in opaque objects pass and transmission objects pass.
let l=W.toneMapping;W.toneMapping=0,eP(e,r,s),o.updateMultisampleRenderTarget(ec),o.updateRenderTargetMipmap(ec);let h=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],n=i.object,a=i.geometry,o=i.material,l=i.group;if(2===o.side&&n.layers.test(s.layers)){let e=o.side;o.side=1,o.needsUpdate=!0,eL(n,r,s,a,o,l),o.side=e,o.needsUpdate=!0,h=!0}}!0===h&&(o.updateMultisampleRenderTarget(ec),o.updateRenderTargetMipmap(ec)),W.setRenderTarget(a),W.toneMapping=l}(l,h,t,s),a&&r.viewport(Z.copy(a)),l.length>0&&eP(l,t,s),h.length>0&&eP(h,t,s),u.length>0&&eP(u,t,s),// Ensure depth buffer writing is enabled so it can be cleared on next render
r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),r.setPolygonOffset(!1)}function eP(e,t,i){let n=!0===t.isScene?t.overrideMaterial:null;for(let r=0,s=e.length;r<s;r++){let s=e[r],a=s.object,o=s.geometry,l=null===n?s.material:n,h=s.group;a.layers.test(i.layers)&&eL(a,t,i,o,l,h)}}function eL(e,t,i,n,r,s){e.onBeforeRender(W,t,i,n,r,s),e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),r.onBeforeRender(W,t,i,n,e,s),!0===r.transparent&&2===r.side&&!1===r.forceSinglePass?(r.side=1,r.needsUpdate=!0,W.renderBufferDirect(i,t,n,r,e,s),r.side=0,r.needsUpdate=!0,W.renderBufferDirect(i,t,n,r,e,s),r.side=2):W.renderBufferDirect(i,t,n,r,e,s),e.onAfterRender(W,t,i,n,r,s)}function eD(e,t,i){!0!==t.isScene&&(t=ef);let n=a.get(e),r=k.state.lights,s=k.state.shadowsArray,o=r.state.version,u=p.getParameters(e,r.state,s,t,i),c=p.getProgramCacheKey(u),d=n.programs;// always update environment and fog - changing these trigger an getProgram call, but it's possible that the program doesn't change
n.environment=e.isMeshStandardMaterial?t.environment:null,n.fog=t.fog,n.envMap=(e.isMeshStandardMaterial?h:l).get(e.envMap||n.environment),void 0===d&&(// new material
e.addEventListener("dispose",eb),d=new Map,n.programs=d);let f=d.get(c);if(void 0!==f){if(n.currentProgram===f&&n.lightsStateVersion===o)return eO(e,u),f}else u.uniforms=p.getUniforms(e),e.onBuild(i,u,W),e.onBeforeCompile(u,W),f=p.acquireProgram(u,c),d.set(c,f),n.uniforms=u.uniforms;let m=n.uniforms;(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(m.clippingPlanes=_.uniform),eO(e,u),// store the light setup it was created for
n.needsLights=e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights,n.lightsStateVersion=o,n.needsLights&&(// wire up the material to this renderer's lighting state
m.ambientLightColor.value=r.state.ambient,m.lightProbe.value=r.state.probe,m.directionalLights.value=r.state.directional,m.directionalLightShadows.value=r.state.directionalShadow,m.spotLights.value=r.state.spot,m.spotLightShadows.value=r.state.spotShadow,m.rectAreaLights.value=r.state.rectArea,m.ltc_1.value=r.state.rectAreaLTC1,m.ltc_2.value=r.state.rectAreaLTC2,m.pointLights.value=r.state.point,m.pointLightShadows.value=r.state.pointShadow,m.hemisphereLights.value=r.state.hemi,m.directionalShadowMap.value=r.state.directionalShadowMap,m.directionalShadowMatrix.value=r.state.directionalShadowMatrix,m.spotShadowMap.value=r.state.spotShadowMap,m.spotLightMatrix.value=r.state.spotLightMatrix,m.spotLightMap.value=r.state.spotLightMap,m.pointShadowMap.value=r.state.pointShadowMap,m.pointShadowMatrix.value=r.state.pointShadowMatrix);let g=f.getUniforms(),v=nx.seqWithValue(g.seq,m);return n.currentProgram=f,n.uniformsList=v,f}function eO(e,t){let i=a.get(e);i.outputEncoding=t.outputEncoding,i.instancing=t.instancing,i.skinning=t.skinning,i.morphTargets=t.morphTargets,i.morphNormals=t.morphNormals,i.morphColors=t.morphColors,i.morphTargetsCount=t.morphTargetsCount,i.numClippingPlanes=t.numClippingPlanes,i.numIntersection=t.numClipIntersection,i.vertexAlphas=t.vertexAlphas,i.vertexTangents=t.vertexTangents,i.toneMapping=t.toneMapping}eC.setAnimationLoop(function(e){eT&&eT(e)}),"undefined"!=typeof self&&eC.setContext(self),this.setAnimationLoop=function(e){eT=e,ey.setAnimationLoop(e),null===e?eC.stop():eC.start()},ey.addEventListener("sessionstart",eA),ey.addEventListener("sessionend",eE),// Rendering
this.render=function(e,t){if(void 0!==t&&!0!==t.isCamera){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(!0===q)return;!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===ey.enabled&&!0===ey.isPresenting&&(!0===ey.cameraAutoUpdate&&ey.updateCamera(t),t=ey.getCamera()),!0===e.isScene&&e.onBeforeRender(W,e,t,X),(k=g.get(e,H.length)).init(),H.push(k),ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),el.setFromProjectionMatrix(ed),eu=this.localClippingEnabled,eh=_.init(this.clippingPlanes,eu),(U=m.get(e,V.length)).init(),V.push(U),function e(t,i,n,r){if(!1===t.visible)return;let a=t.layers.test(i.layers);if(a){if(t.isGroup)n=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(i);else if(t.isLight)k.pushLight(t),t.castShadow&&k.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||el.intersectsSprite(t)){r&&ep.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ed);let e=d.update(t),i=t.material;i.visible&&U.push(t,e,i,n,ep.z,null)}}else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.frame!==s.render.frame&&(t.skeleton.update(),t.skeleton.frame=s.render.frame),!t.frustumCulled||el.intersectsObject(t))){r&&ep.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ed);let e=d.update(t),i=t.material;if(Array.isArray(i)){let r=e.groups;for(let s=0,a=r.length;s<a;s++){let a=r[s],o=i[a.materialIndex];o&&o.visible&&U.push(t,e,o,n,ep.z,a)}}else i.visible&&U.push(t,e,i,n,ep.z,null)}}let o=t.children;for(let t=0,s=o.length;t<s;t++)e(o[t],i,n,r)}(e,t,0,W.sortObjects),U.finish(),!0===W.sortObjects&&U.sort(en,er),!0===eh&&_.beginShadows();let i=k.state.shadowsArray;if(v.render(i,e,t),!0===eh&&_.endShadows(),!0===this.info.autoReset&&this.info.reset(),//
x.render(U,e),// render scene
k.setupLights(W.useLegacyLights),t.isArrayCamera){let i=t.cameras;for(let t=0,n=i.length;t<n;t++){let n=i[t];eR(U,e,n,n.viewport)}}else eR(U,e,t);null!==X&&(// resolve multisample renderbuffers to a single-sample texture if necessary
o.updateMultisampleRenderTarget(X),// Generate mipmap if we're using any kind of mipmap filtering
o.updateRenderTargetMipmap(X)),!0===e.isScene&&e.onAfterRender(W,e,t),// _gl.finish();
b.resetDefaultState(),Y=-1,K=null,H.pop(),k=H.length>0?H[H.length-1]:null,V.pop(),U=V.length>0?V[V.length-1]:null},this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(e,t,n){a.get(e.texture).__webglTexture=t,a.get(e.depthTexture).__webglTexture=n;let r=a.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=void 0===n,r.__autoAllocateDepthBuffer||!0!==i.has("WEBGL_multisampled_render_to_texture")||(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let i=a.get(e);i.__webglFramebuffer=t,i.__useDefaultFramebuffer=void 0===t},this.setRenderTarget=function(e,t=0,i=0){X=e,j=t,J=i;let s=!0,l=null,h=!1,u=!1;if(e){let i=a.get(e);void 0!==i.__useDefaultFramebuffer?(// We need to make sure to rebind the framebuffer.
r.bindFramebuffer(36160,null),s=!1):void 0===i.__webglFramebuffer?o.setupRenderTarget(e):i.__hasExternalTextures&&o.rebindTextures(e,a.get(e.texture).__webglTexture,a.get(e.depthTexture).__webglTexture);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(u=!0);let d=a.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(l=d[t],h=!0):l=n.isWebGL2&&e.samples>0&&!1===o.useMultisampledRTT(e)?a.get(e).__webglMultisampledFramebuffer:d,Z.copy(e.viewport),Q.copy(e.scissor),$=e.scissorTest}else Z.copy(es).multiplyScalar(ei).floor(),Q.copy(ea).multiplyScalar(ei).floor(),$=eo;let c=r.bindFramebuffer(36160,l);if(c&&n.drawBuffers&&s&&r.drawBuffers(e,l),r.viewport(Z),r.scissor(Q),r.setScissorTest($),h){let n=a.get(e.texture);eg.framebufferTexture2D(36160,36064,34069+t,n.__webglTexture,i)}else if(u){let n=a.get(e.texture),r=t||0;eg.framebufferTextureLayer(36160,36064,n.__webglTexture,i||0,r)}Y=-1},this.readRenderTargetPixels=function(e,t,s,o,l,h,u){if(!(e&&e.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let c=a.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&void 0!==u&&(c=c[u]),c){r.bindFramebuffer(36160,c);try{let r=e.texture,a=r.format,u=r.type;if(1023!==a&&S.convert(a)!==eg.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let c=1016===u&&(i.has("EXT_color_buffer_half_float")||n.isWebGL2&&i.has("EXT_color_buffer_float"));if(1009!==u&&S.convert(u)!==eg.getParameter(35738)&&// Edge and Chrome Mac < 52 (#9513)
!(1015===u&&(n.isWebGL2||i.has("OES_texture_float")||i.has("WEBGL_color_buffer_float")))&&// Chrome Mac >= 52 and Firefox
!c){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}// the following if statement ensures valid read requests (no out-of-bounds pixels, see #8604)
t>=0&&t<=e.width-o&&s>=0&&s<=e.height-l&&eg.readPixels(t,s,o,l,S.convert(a),S.convert(u),h)}finally{// restore framebuffer of current render target if necessary
let e=null!==X?a.get(X).__webglFramebuffer:null;r.bindFramebuffer(36160,e)}}},this.copyFramebufferToTexture=function(e,t,i=0){let n=Math.pow(2,-i),s=Math.floor(t.image.width*n),a=Math.floor(t.image.height*n);o.setTexture2D(t,0),eg.copyTexSubImage2D(3553,i,0,0,e.x,e.y,s,a),r.unbindTexture()},this.copyTextureToTexture=function(e,t,i,n=0){let s=t.image.width,a=t.image.height,l=S.convert(i.format),h=S.convert(i.type);o.setTexture2D(i,0),// As another texture upload may have changed pixelStorei
// parameters, make sure they are correct for the dstTexture
eg.pixelStorei(37440,i.flipY),eg.pixelStorei(37441,i.premultiplyAlpha),eg.pixelStorei(3317,i.unpackAlignment),t.isDataTexture?eg.texSubImage2D(3553,n,e.x,e.y,s,a,l,h,t.image.data):t.isCompressedTexture?eg.compressedTexSubImage2D(3553,n,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,l,t.mipmaps[0].data):eg.texSubImage2D(3553,n,e.x,e.y,l,h,t.image),0===n&&i.generateMipmaps&&eg.generateMipmap(3553),r.unbindTexture()},this.copyTextureToTexture3D=function(e,t,i,n,s=0){let a;if(W.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let l=e.max.x-e.min.x+1,h=e.max.y-e.min.y+1,u=e.max.z-e.min.z+1,c=S.convert(n.format),d=S.convert(n.type);if(n.isData3DTexture)o.setTexture3D(n,0),a=32879;else if(n.isDataArrayTexture)o.setTexture2DArray(n,0),a=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}eg.pixelStorei(37440,n.flipY),eg.pixelStorei(37441,n.premultiplyAlpha),eg.pixelStorei(3317,n.unpackAlignment);let p=eg.getParameter(3314),f=eg.getParameter(32878),m=eg.getParameter(3316),g=eg.getParameter(3315),_=eg.getParameter(32877),v=i.isCompressedTexture?i.mipmaps[0]:i.image;eg.pixelStorei(3314,v.width),eg.pixelStorei(32878,v.height),eg.pixelStorei(3316,e.min.x),eg.pixelStorei(3315,e.min.y),eg.pixelStorei(32877,e.min.z),i.isDataTexture||i.isData3DTexture?eg.texSubImage3D(a,s,t.x,t.y,t.z,l,h,u,c,d,v.data):i.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),eg.compressedTexSubImage3D(a,s,t.x,t.y,t.z,l,h,u,c,v.data)):eg.texSubImage3D(a,s,t.x,t.y,t.z,l,h,u,c,d,v),eg.pixelStorei(3314,p),eg.pixelStorei(32878,f),eg.pixelStorei(3316,m),eg.pixelStorei(3315,g),eg.pixelStorei(32877,_),0===s&&n.generateMipmaps&&eg.generateMipmap(a),r.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?o.setTextureCube(e,0):e.isData3DTexture?o.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?o.setTexture2DArray(e,0):o.setTexture2D(e,0),r.unbindTexture()},this.resetState=function(){j=0,J=0,X=null,r.reset(),b.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}(class extends n9{}).prototype.isWebGL1Renderer=!0;class re{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=void 0!==e?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=d()}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=d()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){//
return void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=d()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rt=/*@__PURE__*/new G;class ri{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}setX(e,t){return this.normalized&&(t=y(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=y(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=y(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=y(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=x(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=x(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=x(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=x(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=y(t,this.array),i=y(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=y(t,this.array),i=y(i,this.array),n=y(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=y(t,this.array),i=y(i,this.array),n=y(n,this.array),r=y(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ri(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized);{console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[i+t])}return new tr(new this.array.constructor(e),this.itemSize,this.normalized)}}toJSON(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized};{console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[i+t])}// de-interleave data and save it as an ordinary buffer attribute for now
return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}}}const rn=/*@__PURE__*/new G,rr=/*@__PURE__*/new B,rs=/*@__PURE__*/new B,ra=/*@__PURE__*/new G,ro=/*@__PURE__*/new ex,rl=/*@__PURE__*/new G;class rh extends tO{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ex,this.bindMatrixInverse=new ex,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;null===this.boundingBox&&(this.boundingBox=new j),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let e=0;e<t.count;e++)rl.fromBufferAttribute(t,e),this.applyBoneTransform(e,rl),this.boundingBox.expandByPoint(rl)}computeBoundingSphere(){let e=this.geometry;null===this.boundingSphere&&(this.boundingSphere=new eu),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let e=0;e<t.count;e++)rl.fromBufferAttribute(t,e),this.applyBoneTransform(e,rl),this.boundingSphere.expandByPoint(rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,void 0===t&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new B,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),"attached"===this.bindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():"detached"===this.bindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;rr.fromBufferAttribute(n.attributes.skinIndex,e),rs.fromBufferAttribute(n.attributes.skinWeight,e),rn.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let n=rs.getComponent(e);if(0!==n){let r=rr.getComponent(e);ro.multiplyMatrices(i.bones[r].matrixWorld,i.boneInverses[r]),t.addScaledVector(ra.copy(rn).applyMatrix4(ro),n)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class ru extends eW{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rc extends k{constructor(e=null,t=1,i=1,n,r,s,a,o,l=1003,h=1003,u,c){super(null,s,a,o,l,h,n,r,u,c),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=/*@__PURE__*/new ex,rp=/*@__PURE__*/new ex;class rf{constructor(e=[],t=[]){this.uuid=d(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;// calculate inverse bone matrices if necessary
if(this.boneMatrices=new Float32Array(16*e.length),0===t.length)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new ex)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new ex;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){// recover the bind-time world matrices
for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}// compute the local matrices, positions, rotations and scales
for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;// flatten bone matrices to array
for(let n=0,r=e.length;n<r;n++){// compute the offset between the current and the original transform
let r=e[n]?e[n].matrixWorld:rp;rd.multiplyMatrices(r,t[n]),rd.toArray(i,16*n)}null!==n&&(n.needsUpdate=!0)}clone(){return new rf(this.bones,this.boneInverses)}computeBoneTexture(){// layout (1 matrix = 4 pixels)
//      RGBA RGBA RGBA RGBA (=> column1, column2, column3, column4)
//  with  8x8  pixel texture max   16 bones * 4 pixels =  (8 * 8)
//       16x16 pixel texture max   64 bones * 4 pixels = (16 * 16)
//       32x32 pixel texture max  256 bones * 4 pixels = (32 * 32)
//       64x64 pixel texture max 1024 bones * 4 pixels = (64 * 64)
let e=Math.sqrt(4*this.bones.length);// 4 pixels needed for 1 matrix
e=Math.max(e=_(e),4);let t=new Float32Array(e*e*4);// 4 floats per RGBA pixel
t.set(this.boneMatrices);let i=new rc(t,e,e,1023,1015);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let n=e.bones[i],r=t[n];void 0===r&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),r=new ru),this.bones.push(r),this.boneInverses.push(new ex().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let r=t[n];e.bones.push(r.uuid);let s=i[n];e.boneInverses.push(s.toArray())}return e}}class rm extends tr{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rg=/*@__PURE__*/new ex,r_=/*@__PURE__*/new ex,rv=[],rx=/*@__PURE__*/new j,ry=/*@__PURE__*/new ex,rM=/*@__PURE__*/new tO,rw=/*@__PURE__*/new eu;class rS extends tO{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rm(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<i;e++)this.setMatrixAt(e,ry)}computeBoundingBox(){let e=this.geometry,t=this.count;null===this.boundingBox&&(this.boundingBox=new j),null===e.boundingBox&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rg),rx.copy(e.boundingBox).applyMatrix4(rg),this.boundingBox.union(rx)}computeBoundingSphere(){let e=this.geometry,t=this.count;null===this.boundingSphere&&(this.boundingSphere=new eu),null===e.boundingSphere&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rg),rw.copy(e.boundingSphere).applyMatrix4(rg),this.boundingSphere.union(rw)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),null!==e.instanceColor&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(rM.geometry=this.geometry,rM.material=this.material,void 0!==rM.material&&(null===this.boundingSphere&&this.computeBoundingSphere(),rw.copy(this.boundingSphere),rw.applyMatrix4(i),!1!==e.ray.intersectsSphere(rw)))// now test each instance
for(let r=0;r<n;r++){// calculate the world matrix for each instance
this.getMatrixAt(r,rg),r_.multiplyMatrices(i,rg),// the mesh represents this single instance
rM.matrixWorld=r_,rM.raycast(e,rv);// process the result of raycast
for(let e=0,i=rv.length;e<i;e++){let i=rv[e];i.instanceId=r,i.object=this,t.push(i)}rv.length=0}}setColorAt(e,t){null===this.instanceColor&&(this.instanceColor=new rm(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class rb extends e5{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new e9(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rT=/*@__PURE__*/new G,rA=/*@__PURE__*/new G,rE=/*@__PURE__*/new ex,rC=/*@__PURE__*/new ev,rR=/*@__PURE__*/new eu;class rP extends eW{constructor(e=new tm,t=new rb){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;// we assume non-indexed geometry
if(null===e.index){let t=e.attributes.position,i=[0];for(let e=1,n=t.count;e<n;e++)rT.fromBufferAttribute(t,e-1),rA.fromBufferAttribute(t,e),i[e]=i[e-1],i[e]+=rT.distanceTo(rA);e.setAttribute("lineDistance",new to(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(null===i.boundingSphere&&i.computeBoundingSphere(),rR.copy(i.boundingSphere),rR.applyMatrix4(n),rR.radius+=r,!1===e.ray.intersectsSphere(rR))return;//
rE.copy(n).invert(),rC.copy(e.ray).applyMatrix4(rE);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new G,h=new G,u=new G,c=new G,d=this.isLineSegments?2:1,p=i.index,f=i.attributes,m=f.position;if(null!==p){let i=Math.max(0,s.start),n=Math.min(p.count,s.start+s.count);for(let r=i,s=n-1;r<s;r+=d){let i=p.getX(r),n=p.getX(r+1);l.fromBufferAttribute(m,i),h.fromBufferAttribute(m,n);let s=rC.distanceSqToSegment(l,h,c,u);if(s>o)continue;c.applyMatrix4(this.matrixWorld);let a=e.ray.origin.distanceTo(c);a<e.near||a>e.far||t.push({distance:a,// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:u.clone().applyMatrix4(this.matrixWorld),index:r,face:null,faceIndex:null,object:this})}}else{let i=Math.max(0,s.start),n=Math.min(m.count,s.start+s.count);for(let r=i,s=n-1;r<s;r+=d){l.fromBufferAttribute(m,r),h.fromBufferAttribute(m,r+1);let i=rC.distanceSqToSegment(l,h,c,u);if(i>o)continue;c.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(c);n<e.near||n>e.far||t.push({distance:n,// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:u.clone().applyMatrix4(this.matrixWorld),index:r,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry,t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let e=t[i[0]];if(void 0!==e){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,i=e.length;t<i;t++){let i=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=t}}}}}const rL=/*@__PURE__*/new G,rD=/*@__PURE__*/new G;class rO extends rP{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;// we assume non-indexed geometry
if(null===e.index){let t=e.attributes.position,i=[];for(let e=0,n=t.count;e<n;e+=2)rL.fromBufferAttribute(t,e),rD.fromBufferAttribute(t,e+1),i[e]=0===e?0:i[e-1],i[e+1]=i[e]+rL.distanceTo(rD);e.setAttribute("lineDistance",new to(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rI extends rP{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rN extends e5{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new e9(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rz=/*@__PURE__*/new ex,rU=/*@__PURE__*/new ev,rk=/*@__PURE__*/new eu,rB=/*@__PURE__*/new G;class rF extends eW{constructor(e=new tm,t=new rN){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(null===i.boundingSphere&&i.computeBoundingSphere(),rk.copy(i.boundingSphere),rk.applyMatrix4(n),rk.radius+=r,!1===e.ray.intersectsSphere(rk))return;//
rz.copy(n).invert(),rU.copy(e.ray).applyMatrix4(rz);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=i.index,h=i.attributes,u=h.position;if(null!==l){let i=Math.max(0,s.start),r=Math.min(l.count,s.start+s.count);for(let s=i;s<r;s++){let i=l.getX(s);rB.fromBufferAttribute(u,i),rV(rB,i,o,n,e,t,this)}}else{let i=Math.max(0,s.start),r=Math.min(u.count,s.start+s.count);for(let s=i;s<r;s++)rB.fromBufferAttribute(u,s),rV(rB,s,o,n,e,t,this)}}updateMorphTargets(){let e=this.geometry,t=e.morphAttributes,i=Object.keys(t);if(i.length>0){let e=t[i[0]];if(void 0!==e){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,i=e.length;t<i;t++){let i=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=t}}}}}function rV(e,t,i,n,r,s,a){let o=rU.distanceSqToPoint(e);if(o<i){let i=new G;rU.closestPointToPoint(e,i),i.applyMatrix4(n);let l=r.ray.origin.distanceTo(i);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:i,index:t,face:null,object:a})}}/**
 * Extensible curve object.
 *
 * Some common of curve methods:
 * .getPoint( t, optionalTarget ), .getTangent( t, optionalTarget )
 * .getPointAt( u, optionalTarget ), .getTangentAt( u, optionalTarget )
 * .getPoints(), .getSpacedPoints()
 * .getLength()
 * .updateArcLengths()
 *
 * This following curves inherit from THREE.Curve:
 *
 * -- 2D curves --
 * THREE.ArcCurve
 * THREE.CubicBezierCurve
 * THREE.EllipseCurve
 * THREE.LineCurve
 * THREE.QuadraticBezierCurve
 * THREE.SplineCurve
 *
 * -- 3D curves --
 * THREE.CatmullRomCurve3
 * THREE.CubicBezierCurve3
 * THREE.LineCurve3
 * THREE.QuadraticBezierCurve3
 *
 * A series of curves can be represented as a THREE.CurvePath.
 *
 **/class rH{constructor(){this.type="Curve",this.arcLengthDivisions=200}// Virtual base class method to overwrite and implement in subclasses
//	- t [0 .. 1]
getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}// Get point at relative position in curve according to arc length
// - u [0 .. 1]
getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}// Get sequence of points using getPoint( t )
getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}// Get sequence of points using getPointAt( u )
getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}// Get total curve arc length
getLength(){let e=this.getLengths();return e[e.length-1]}// Get list of cumulative segment lengths
getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)t.push(r+=(i=this.getPoint(s/e)).distanceTo(n)),n=i;return this.cacheArcLengths=t,t;// { sums: cache, sum: sum }; Sum is in the last element.
}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}// Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
getUtoTmapping(e,t){let i;let n=this.getLengths(),r=0,s=n.length;i=t||e*n[s-1];// binary search for the index with largest value smaller than target u distance
let a=0,o=s-1,l;for(;a<=o;)if((l=n[r=Math.floor(a+(o-a)/2)]-i)<0)a=r+1;else if(l>0)o=r-1;else{o=r;break;// DONE
}if(n[r=o]===i)return r/(s-1);// we could get finer grain at lengths, or use simple interpolation between two points
let h=n[r],u=n[r+1],c=(r+(i-h)/(u-h))/(s-1);return c}// Returns a unit vector tangent at t
// In case any sub curve does not implement its tangent derivation,
// 2 points a small delta apart will be used to find its gradient
// which seems to give a reasonable approximation
getTangent(e,t){let i=e-1e-4,n=e+1e-4;i<0&&(i=0),n>1&&(n=1);let r=this.getPoint(i),s=this.getPoint(n),a=t||(r.isVector2?new w:new G);return a.copy(s).sub(r).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){// see http://www.cs.indiana.edu/pub/techreports/TR425.pdf
let i=new G,n=[],r=[],s=[],a=new G,o=new ex;// compute the tangent vectors for each segment on the curve
for(let t=0;t<=e;t++){let i=t/e;n[t]=this.getTangentAt(i,new G)}// select an initial normal vector perpendicular to the first tangent vector,
// and in the direction of the minimum tangent xyz component
r[0]=new G,s[0]=new G;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),c=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),c<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),s[0].crossVectors(n[0],r[0]);// compute the slowly-varying normal and binormal vectors for each segment on the curve
for(let t=1;t<=e;t++){if(r[t]=r[t-1].clone(),s[t]=s[t-1].clone(),a.crossVectors(n[t-1],n[t]),a.length()>Number.EPSILON){a.normalize();let e=Math.acos(p(n[t-1].dot(n[t]),-1,1));// clamp for floating pt errors
r[t].applyMatrix4(o.makeRotationAxis(a,e))}s[t].crossVectors(n[t],r[t])}// if the curve is closed, postprocess the vectors so the first and last normal vectors are the same
if(!0===t){let t=Math.acos(p(r[0].dot(r[e]),-1,1));t/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(t=-t);for(let i=1;i<=e;i++)// twist a little...
r[i].applyMatrix4(o.makeRotationAxis(n[i],t*i)),s[i].crossVectors(n[i],r[i])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rG extends rH{constructor(e=0,t=0,i=1,n=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(e,t){let i=t||new w,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;// ensures that deltaAngle is 0 .. 2 PI
for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=s?0:n),!0!==this.aClockwise||s||(r===n?r=-n:r-=n);let a=this.aStartAngle+e*r,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(0!==this.aRotation){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),i=o-this.aX,n=l-this.aY;// Rotate the point about the center of the ellipse.
o=i*e-n*t+this.aX,l=i*t+n*e+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}/**
 * Centripetal CatmullRom Curve - which is useful for avoiding
 * cusps and self-intersections in non-uniform catmull rom curves.
 * http://www.cemyuksel.com/research/catmullrom_param/catmullrom.pdf
 *
 * curve.type accepts centripetal(default), chordal and catmullrom
 * curve.tension is used for catmullrom which defaults to 0.5
 *//*
Based on an optimized c++ solution in
 - http://stackoverflow.com/questions/9489736/catmull-rom-curve-with-no-cusps-and-no-self-intersections/
 - http://ideone.com/NoEbVM

This CubicPoly class could be used for reusing some variables and calculations,
but for three.js curve use, it could be possible inlined and flatten into a single function call
which can be placed in CurveUtils.
*/function rW(){let e=0,t=0,i=0,n=0;/*
	 * Compute coefficients for a cubic polynomial
	 *   p(s) = c0 + c1*s + c2*s^2 + c3*s^3
	 * such that
	 *   p(0) = x0, p(1) = x1
	 *  and
	 *   p'(0) = t0, p'(1) = t1.
	 */function r(r,s,a,o){e=r,t=a,i=-3*r+3*s-2*a-o,n=2*r-2*s+a+o}return{initCatmullRom:function(e,t,i,n,s){r(t,i,s*(i-e),s*(n-t))},initNonuniformCatmullRom:function(e,t,i,n,s,a,o){// compute tangents when parameterized in [t1,t2]
let l=(t-e)/s-(i-e)/(s+a)+(i-t)/a,h=(i-t)/a-(n-t)/(a+o)+(n-i)/o;r(t,i,// rescale tangents for parametrization in [0,1]
l*=a,h*=a)},calc:function(r){let s=r*r;return e+t*r+i*s+n*(s*r)}}}//
const rq=/*@__PURE__*/new G,rj=/*@__PURE__*/new rW,rJ=/*@__PURE__*/new rW,rX=/*@__PURE__*/new rW;/**
 * Bezier Curves formulas obtained from
 * https://en.wikipedia.org/wiki/B%C3%A9zier_curve
 */function rY(e,t,i,n,r){let s=(n-t)*.5,a=(r-i)*.5,o=e*e;return(2*i-2*n+s+a)*(e*o)+(-3*i+3*n-2*s-a)*o+s*e+i}function rK(e,t,i,n){return(//
function(e,t){let i=1-e;return i*i*t}(e,t)+2*(1-e)*e*i+e*e*n)}function rZ(e,t,i,n,r){return(//
function(e,t){let i=1-e;return i*i*i*t}(e,t)+function(e,t){let i=1-e;return 3*i*i*e*t}(e,i)+3*(1-e)*e*e*n+e*e*e*r)}class rQ extends rH{constructor(e=new w,t=new w,i=new w,n=new w){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new w){let i=this.v0,n=this.v1,r=this.v2,s=this.v3;return t.set(rZ(e,i.x,n.x,r.x,s.x),rZ(e,i.y,n.y,r.y,s.y)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class r$ extends rH{constructor(e=new w,t=new w){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new w){return 1===e?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t}// Line curve is linear, so we can overwrite default getPointAt
getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class r0 extends rH{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=this.v0,n=this.v1,r=this.v2;return t.set(rK(e,i.x,n.x,r.x),rK(e,i.y,n.y,r.y)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class r1 extends rH{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){let i=this.v0,n=this.v1,r=this.v2;return t.set(rK(e,i.x,n.x,r.x),rK(e,i.y,n.y,r.y),rK(e,i.z,n.z,r.z)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class r3 extends rH{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new w){let i=this.points,n=(i.length-1)*e,r=Math.floor(n),s=n-r,a=i[0===r?r:r-1],o=i[r],l=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return t.set(rY(s,a.x,o.x,l.x,h.x),rY(s,a.y,o.y,l.y,h.y)),t}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(new w().fromArray(i))}return this}}var r2,r5,r4,r6=/*#__PURE__*/Object.freeze({__proto__:null,ArcCurve:class extends rG{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}},CatmullRomCurve3:class extends rH{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new G){let i,n;let r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:0===l&&o===s-1&&(o=s-2,l=1),this.closed||o>0?i=r[(o-1)%s]:(// extrapolate first point
rq.subVectors(r[0],r[1]).add(r[0]),i=rq);let h=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?n=r[(o+2)%s]:(// extrapolate last point
rq.subVectors(r[s-1],r[s-2]).add(r[s-1]),n=rq),"centripetal"===this.curveType||"chordal"===this.curveType){// init Centripetal / Chordal Catmull-Rom
let e="chordal"===this.curveType?.5:.25,t=Math.pow(i.distanceToSquared(h),e),r=Math.pow(h.distanceToSquared(u),e),s=Math.pow(u.distanceToSquared(n),e);r<1e-4&&(r=1),t<1e-4&&(t=r),s<1e-4&&(s=r),rj.initNonuniformCatmullRom(i.x,h.x,u.x,n.x,t,r,s),rJ.initNonuniformCatmullRom(i.y,h.y,u.y,n.y,t,r,s),rX.initNonuniformCatmullRom(i.z,h.z,u.z,n.z,t,r,s)}else"catmullrom"===this.curveType&&(rj.initCatmullRom(i.x,h.x,u.x,n.x,this.tension),rJ.initCatmullRom(i.y,h.y,u.y,n.y,this.tension),rX.initCatmullRom(i.z,h.z,u.z,n.z,this.tension));return t.set(rj.calc(l),rJ.calc(l),rX.calc(l)),t}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(new G().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},CubicBezierCurve:rQ,CubicBezierCurve3:class extends rH{constructor(e=new G,t=new G,i=new G,n=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new G){let i=this.v0,n=this.v1,r=this.v2,s=this.v3;return t.set(rZ(e,i.x,n.x,r.x,s.x),rZ(e,i.y,n.y,r.y,s.y),rZ(e,i.z,n.z,r.z,s.z)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},EllipseCurve:rG,LineCurve:r$,LineCurve3:class extends rH{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){return 1===e?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t}// Line curve is linear, so we can overwrite default getPointAt
getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},QuadraticBezierCurve:r0,QuadraticBezierCurve3:r1,SplineCurve:r3});/**************************************************************
 *	Curved Path - a curve path is simply a array of connected
 *  curves, but retains the api of a curve
 **************************************************************/class r8 extends rH{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){// Add a line curve if start and end of lines are not connected
let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new r$(t,e))}// To get accurate point with reference to
// entire path distance at time t,
// following has to be done:
// 1. Length of each sub path have to be known
// 2. Locate and identify type of curve
// 3. Get t for the curve
// 4. Return curve.getPointAt(t')
getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;// To think about boundaries points.
for(;r<n.length;){if(n[r]>=i){let e=n[r]-i,s=this.curves[r],a=s.getLength(),o=0===a?0:1-e/a;return s.getPointAt(o,t)}r++}return null;// loop where sum != 0, sum > d , sum+1 <d
}// We cannot use the default THREE.Curve getPoint() with getLength() because in
// THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
// getPoint() depends on getLength
getLength(){let e=this.getCurveLengths();return e[e.length-1]}// cacheLengths must be recalculated.
updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}// Compute lengths and cache them
// We cannot overwrite getLengths() because UtoT mapping uses it.
getCurveLengths(){// We use cache values if curves and cache array are same length
if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;// Get length of sub-curve
// Push sums into cached array
let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)e.push(t+=this.curves[i].getLength());return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t;let i=[];for(let n=0,r=this.curves;n<r.length;n++){let s=r[n],a=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(a);for(let e=0;e<o.length;e++){let n=o[e];t&&t.equals(n)||(i.push(n),t=n);// ensures no consecutive points are duplicates
}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let i=e.curves[t];this.curves.push(new r6[i.type]().fromJSON(i))}return this}}class r7 extends r8{constructor(e){super(),this.type="Path",this.currentPoint=new w,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new r$(this.currentPoint.clone(),new w(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new r0(this.currentPoint.clone(),new w(e,t),new w(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){let a=new rQ(this.currentPoint.clone(),new w(e,t),new w(i,n),new w(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e/*Array of Vector*/){let t=[this.currentPoint.clone()].concat(e),i=new r3(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+a,t+o,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,a,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,r,s,a,o),this}absellipse(e,t,i,n,r,s,a,o){let l=new rG(e,t,i,n,r,s,a,o);if(this.curves.length>0){// if a previous curve is present, attempt to join
let e=l.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class r9 extends tm{constructor(e=[new w(0,-.5),new w(.5,0),new w(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),// clamp phiLength so it's in range of [ 0, 2PI ]
n=p(n,0,2*Math.PI);// buffers
let r=[],s=[],a=[],o=[],l=[],h=1/t,u=new G,c=new w,d=new G,f=new G,m=new G,g=0,_=0;// pre-compute normals for initial "meridian"
for(let t=0;t<=e.length-1;t++)switch(t){case 0:g=e[t+1].x-e[t].x,_=e[t+1].y-e[t].y,d.x=1*_,d.y=-g,d.z=0*_,m.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case e.length-1:o.push(m.x,m.y,m.z);break;default:g=e[t+1].x-e[t].x,_=e[t+1].y-e[t].y,d.x=1*_,d.y=-g,d.z=0*_,f.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),o.push(d.x,d.y,d.z),m.copy(f)}// generate vertices, uvs and normals
for(let r=0;r<=t;r++){let d=i+r*h*n,p=Math.sin(d),f=Math.cos(d);for(let i=0;i<=e.length-1;i++){// vertex
u.x=e[i].x*p,u.y=e[i].y,u.z=e[i].x*f,s.push(u.x,u.y,u.z),// uv
c.x=r/t,c.y=i/(e.length-1),a.push(c.x,c.y);// normal
let n=o[3*i+0]*p,h=o[3*i+1],d=o[3*i+0]*f;l.push(n,h,d)}}// indices
for(let i=0;i<t;i++)for(let t=0;t<e.length-1;t++){let n=t+i*e.length,s=n+e.length,a=n+e.length+1,o=n+1;// faces
r.push(n,s,o),r.push(a,o,s)}// build geometry
this.setIndex(r),this.setAttribute("position",new to(s,3)),this.setAttribute("uv",new to(a,2)),this.setAttribute("normal",new to(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r9(e.points,e.segments,e.phiStart,e.phiLength)}}class se extends r9{constructor(e=1,t=1,i=4,n=8){let r=new r7;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new se(e.radius,e.length,e.capSegments,e.radialSegments)}}class st extends tm{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);// buffers
let r=[],s=[],a=[],o=[],l=new G,h=new w;// center point
s.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let r=0,u=3;r<=t;r++,u+=3){let c=i+r/t*n;// vertex
l.x=e*Math.cos(c),l.y=e*Math.sin(c),s.push(l.x,l.y,l.z),// normal
a.push(0,0,1),// uvs
h.x=(s[u]/e+1)/2,h.y=(s[u+1]/e+1)/2,o.push(h.x,h.y)}// indices
for(let e=1;e<=t;e++)r.push(e,e+1,0);// build geometry
this.setIndex(r),this.setAttribute("position",new to(s,3)),this.setAttribute("normal",new to(a,3)),this.setAttribute("uv",new to(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class si extends tm{constructor(e=1,t=1,i=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};let l=this;n=Math.floor(n),r=Math.floor(r);// buffers
let h=[],u=[],c=[],d=[],p=0,f=[],m=i/2,g=0;function _(i){// save the index of the first center vertex
let r=p,s=new w,f=new G,_=0,v=!0===i?e:t,x=!0===i?1:-1;// first we generate the center vertex data of the cap.
// because the geometry needs one set of uvs per face,
// we must generate a center vertex per face/segment
for(let e=1;e<=n;e++)// vertex
u.push(0,m*x,0),// normal
c.push(0,x,0),// uv
d.push(.5,.5),// increase index
p++;// save the index of the last center vertex
let y=p;// now we generate the surrounding vertices, normals and uvs
for(let e=0;e<=n;e++){let t=e/n,i=t*o+a,r=Math.cos(i),l=Math.sin(i);// vertex
f.x=v*l,f.y=m*x,f.z=v*r,u.push(f.x,f.y,f.z),// normal
c.push(0,x,0),// uv
s.x=.5*r+.5,s.y=.5*l*x+.5,d.push(s.x,s.y),// increase index
p++}// generate indices
for(let e=0;e<n;e++){let t=r+e,n=y+e;!0===i?h.push(n,n+1,t):h.push(n+1,n,t),_+=3}// add a group to the geometry. this will ensure multi material support
l.addGroup(g,_,!0===i?1:2),// calculate new start value for groups
g+=_}// generate geometry
(function(){let s=new G,_=new G,v=0,x=(t-e)/i;// generate vertices, normals and uvs
for(let l=0;l<=r;l++){let h=[],g=l/r,v=g*(t-e)+e;for(let e=0;e<=n;e++){let t=e/n,r=t*o+a,l=Math.sin(r),f=Math.cos(r);// vertex
_.x=v*l,_.y=-g*i+m,_.z=v*f,u.push(_.x,_.y,_.z),// normal
s.set(l,x,f).normalize(),c.push(s.x,s.y,s.z),// uv
d.push(t,1-g),// save index of vertex in respective row
h.push(p++)}// now save vertices of the row in our index array
f.push(h)}// generate indices
for(let e=0;e<n;e++)for(let t=0;t<r;t++){// we use the index array to access the correct indices
let i=f[t][e],n=f[t+1][e],r=f[t+1][e+1],s=f[t][e+1];// faces
h.push(i,n,s),h.push(n,r,s),// update group counter
v+=6}// add a group to the geometry. this will ensure multi material support
l.addGroup(g,v,0),// calculate new start value for groups
g+=v})(),!1===s&&(e>0&&_(!0),t>0&&_(!1)),// build geometry
this.setIndex(h),this.setAttribute("position",new to(u,3)),this.setAttribute("normal",new to(c,3)),this.setAttribute("uv",new to(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sn extends si{constructor(e=1,t=1,i=32,n=1,r=!1,s=0,a=2*Math.PI){super(0,e,t,i,n,r,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(e){return new sn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends tm{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};// default buffer data
let r=[],s=[];function a(e){r.push(e.x,e.y,e.z)}function o(t,i){let n=3*t;i.x=e[n+0],i.y=e[n+1],i.z=e[n+2]}function l(e,t,i,n){n<0&&1===e.x&&(s[t]=e.x-1),0===i.x&&0===i.z&&(s[t]=n/2/Math.PI+.5)}// Angle around the Y axis, counter-clockwise when looking from above.
function h(e){return Math.atan2(e.z,-e.x)}// the subdivision creates the vertex buffer data
// helper functions
(function(e){let i=new G,n=new G,r=new G;// iterate over all faces and apply a subdivision with the given detail value
for(let s=0;s<t.length;s+=3)// get the vertices of the face
o(t[s+0],i),o(t[s+1],n),o(t[s+2],r),// perform subdivision
function(e,t,i,n){let r=n+1,s=[];// construct all of the vertices for this subdivision
for(let n=0;n<=r;n++){s[n]=[];let a=e.clone().lerp(i,n/r),o=t.clone().lerp(i,n/r),l=r-n;for(let e=0;e<=l;e++)0===e&&n===r?s[n][e]=a:s[n][e]=a.clone().lerp(o,e/l)}// construct all of the faces
for(let e=0;e<r;e++)for(let t=0;t<2*(r-e)-1;t++){let i=Math.floor(t/2);t%2==0?(a(s[e][i+1]),a(s[e+1][i]),a(s[e][i])):(a(s[e][i+1]),a(s[e+1][i+1]),a(s[e+1][i]))}}(i,n,r,e)})(n),// all vertices should lie on a conceptual sphere with a given radius
function(e){let t=new G;// iterate over the entire buffer and apply the radius to each vertex
for(let i=0;i<r.length;i+=3)t.x=r[i+0],t.y=r[i+1],t.z=r[i+2],t.normalize().multiplyScalar(e),r[i+0]=t.x,r[i+1]=t.y,r[i+2]=t.z}(i),// finally, create the uv data
function(){let e=new G;for(let t=0;t<r.length;t+=3){e.x=r[t+0],e.y=r[t+1],e.z=r[t+2];let i=h(e)/2/Math.PI+.5,n=Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))/Math.PI+.5;s.push(i,1-n)}(function(){let e=new G,t=new G,i=new G,n=new G,a=new w,o=new w,u=new w;for(let c=0,d=0;c<r.length;c+=9,d+=6){e.set(r[c+0],r[c+1],r[c+2]),t.set(r[c+3],r[c+4],r[c+5]),i.set(r[c+6],r[c+7],r[c+8]),a.set(s[d+0],s[d+1]),o.set(s[d+2],s[d+3]),u.set(s[d+4],s[d+5]),n.copy(e).add(t).add(i).divideScalar(3);let p=h(n);l(a,d+0,e,p),l(o,d+2,t,p),l(u,d+4,i,p)}})(),function(){// handle case when face straddles the seam, see #3269
for(let e=0;e<s.length;e+=6){// uv data of a single face
let t=s[e+0],i=s[e+2],n=s[e+4],r=Math.max(t,i,n),a=Math.min(t,i,n);// 0.9 is somewhat arbitrary
r>.9&&a<.1&&(t<.2&&(s[e+0]+=1),i<.2&&(s[e+2]+=1),n<.2&&(s[e+4]+=1))}}()}(),// build non-indexed geometry
this.setAttribute("position",new to(r,3)),this.setAttribute("normal",new to(r.slice(),3)),this.setAttribute("uv",new to(s,2)),0===n?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.vertices,e.indices,e.radius,e.details)}}class ss extends sr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[// (±1, ±1, ±1)
-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,// (0, ±1/φ, ±φ)
0,-n,-i,0,-n,i,0,n,-i,0,n,i,// (±1/φ, ±φ, 0)
-n,-i,0,-n,i,0,n,-i,0,n,i,0,// (±φ, 0, ±1/φ)
-i,0,-n,i,0,-n,-i,0,n,i,0,n];super(r,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ss(e.radius,e.detail)}}class sa extends r7{constructor(e){super(e),this.uuid=d(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}// get points of shape and holes (keypoints based on segments parameter)
extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let i=e.holes[t];this.holes.push(new r7().fromJSON(i))}return this}}/**
 * Port from https://github.com/mapbox/earcut (v2.2.4)
 */const so={triangulate:function(e,t,i=2){let n,r,s,a,o,l,h;let u=t&&t.length,c=u?t[0]*i:e.length,d=sl(e,0,c,i,!0),p=[];if(!d||d.next===d.prev)return p;// if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
if(u&&(d=// link every hole into the outer loop, producing a single-ring polygon without holes
function(e,t,i,n){let r,s,a,o,l;let h=[];for(r=0,s=t.length;r<s;r++)a=t[r]*n,o=r<s-1?t[r+1]*n:e.length,(l=sl(e,a,o,n,!1))===l.next&&(l.steiner=!0),h.push(// find the leftmost node of a polygon ring
function(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e)return i}(l));// process holes from left to right
for(h.sort(su),r=0;r<h.length;r++)i=// find a bridge between vertices that connects hole with an outer ring and link it
function(e,t){let i=// David Eberly's algorithm for finding a bridge between hole and outer polygon
function(e,t){let i=t,n=-1/0,r,s=e.x,a=e.y;// find a segment intersected by a ray from the hole's leftmost point to the left;
// segment's endpoint with lesser x will be potential connection point
do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let e=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(e<=s&&e>n&&(n=e,r=i.x<i.next.x?i:i.next,e===s))return r;// hole touches outer segment; pick leftmost endpoint
}i=i.next}while(i!==t)if(!r)return null;// look for points inside the triangle of hole point, segment intersection and endpoint;
// if there are no points found, we have a valid connection;
// otherwise choose the point of the minimum angle with the ray as connection point
let o=r,l=r.x,h=r.y,u=1/0,c;i=r;do{var d,p;s>=i.x&&i.x>=l&&s!==i.x&&sd(a<h?s:n,a,l,h,a<h?n:s,a,i.x,i.y)&&(c=Math.abs(a-i.y)/(s-i.x),sv(i,e)&&(c<u||c===u&&(i.x>r.x||i.x===r.x&&(d=r,p=i,0>sp(d.prev,d,p.prev)&&0>sp(p.next,d,d.next))))&&(r=i,u=c)),i=i.next}while(i!==o)return r}(e,t);if(!i)return t;let n=sx(i,e);return(// filter collinear points around the cuts
sh(n,n.next),sh(i,i.next))}(h[r],i);return i}(e,t,d,i)),e.length>80*i){n=s=e[0],r=a=e[1];for(let t=i;t<c;t+=i)o=e[t],l=e[t+1],o<n&&(n=o),l<r&&(r=l),o>s&&(s=o),l>a&&(a=l);h=0!==// minX, minY and invSize are later used to transform coords into integers for z-order calculation
(h=Math.max(s-n,a-r))?32767/h:0}return(// main ear slicing loop which triangulates a polygon (given as a linked list)
function e(t,i,n,r,s,a,o){if(!t)return;// interlink polygon nodes in z-order
!o&&a&&// interlink polygon nodes in z-order
function(e,t,i,n){let r=e;do 0===r.z&&(r.z=sc(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e)r.prevZ.nextZ=null,r.prevZ=null,// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function(e){let t,i,n,r,s,a,o,l,h=1;do{for(i=e,e=null,s=null,a=0;i;){for(a++,n=i,o=0,t=0;t<h&&(o++,n=n.nextZ);t++);for(l=h;o>0||l>0&&n;)0!==o&&(0===l||!n||i.z<=n.z)?(r=i,i=i.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;i=n}s.nextZ=null,h*=2}while(a>1)}(r)}(t,r,s,a);let l=t,h,u;// iterate through ears, slicing them one by one
for(;t.prev!==t.next;){if(h=t.prev,u=t.next,a?function(e,t,i,n){let r=e.prev,s=e.next;if(sp(r,e,s)>=0)return!1;// reflex, can't be an ear
let a=r.x,o=e.x,l=s.x,h=r.y,u=e.y,c=s.y,d=a<o?a<l?a:l:o<l?o:l,p=h<u?h<c?h:c:u<c?u:c,f=a>o?a>l?a:l:o>l?o:l,m=h>u?h>c?h:c:u>c?u:c,g=sc(d,p,t,i,n),_=sc(f,m,t,i,n),v=e.prevZ,x=e.nextZ;// look for points inside the triangle in both directions
for(;v&&v.z>=g&&x&&x.z<=_;){if(v.x>=d&&v.x<=f&&v.y>=p&&v.y<=m&&v!==r&&v!==s&&sd(a,h,o,u,l,c,v.x,v.y)&&sp(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=f&&x.y>=p&&x.y<=m&&x!==r&&x!==s&&sd(a,h,o,u,l,c,x.x,x.y)&&sp(x.prev,x,x.next)>=0))return!1;x=x.nextZ}// look for remaining points in decreasing z-order
for(;v&&v.z>=g;){if(v.x>=d&&v.x<=f&&v.y>=p&&v.y<=m&&v!==r&&v!==s&&sd(a,h,o,u,l,c,v.x,v.y)&&sp(v.prev,v,v.next)>=0)return!1;v=v.prevZ}// look for remaining points in increasing z-order
for(;x&&x.z<=_;){if(x.x>=d&&x.x<=f&&x.y>=p&&x.y<=m&&x!==r&&x!==s&&sd(a,h,o,u,l,c,x.x,x.y)&&sp(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}(t,r,s,a):// check whether a polygon node forms a valid ear with adjacent nodes
function(e){let t=e.prev,i=e.next;if(sp(t,e,i)>=0)return!1;// reflex, can't be an ear
// now make sure we don't have other points inside the potential ear
let n=t.x,r=e.x,s=i.x,a=t.y,o=e.y,l=i.y,h=n<r?n<s?n:s:r<s?r:s,u=a<o?a<l?a:l:o<l?o:l,c=n>r?n>s?n:s:r>s?r:s,d=a>o?a>l?a:l:o>l?o:l,p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=c&&p.y>=u&&p.y<=d&&sd(n,a,r,o,s,l,p.x,p.y)&&sp(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}(t)){// cut off the triangle
i.push(h.i/n|0),i.push(t.i/n|0),i.push(u.i/n|0),sM(t),// skipping the next vertex leads to less sliver triangles
t=u.next,l=u.next;continue}// if we looped through the whole remaining polygon and can't find any more ears
if((t=u)===l){// try filtering points and slicing again
o?1===o?e(t=// go through all polygon nodes and cure small local self-intersections
function(e,t,i){let n=e;do{let r=n.prev,s=n.next.next;!sf(r,s)&&sm(r,n,n.next,s)&&sv(r,s)&&sv(s,r)&&(t.push(r.i/i|0),t.push(n.i/i|0),t.push(s.i/i|0),// remove two nodes involved
sM(n),sM(n.next),n=e=s),n=n.next}while(n!==e)return sh(n)}(sh(t),i,n),i,n,r,s,a,2):2===o&&// try splitting polygon into two and triangulate them independently
function(t,i,n,r,s,a){// look for a valid diagonal that divides the polygon into two
let o=t;do{let t=o.next.next;for(;t!==o.prev;){var l,h;if(o.i!==t.i&&(l=o,h=t,l.next.i!==h.i&&l.prev.i!==h.i&&!// check if a polygon diagonal intersects any polygon segments
function(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&sm(i,i.next,e,t))return!0;i=i.next}while(i!==e)return!1}(l,h)&&// dones't intersect other edges
(sv(l,h)&&sv(h,l)&&// check if the middle point of a polygon diagonal is inside the polygon
function(e,t){let i=e,n=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e)return n}(l,h)&&// locally visible
(sp(l.prev,l,h.prev)||sp(l,h.prev,h))||// does not create opposite-facing sectors
sf(l,h)&&sp(l.prev,l,l.next)>0&&sp(h.prev,h,h.next)>0))){// split the polygon in two by the diagonal
let l=sx(o,t);// filter colinear points around the cuts
o=sh(o,o.next),l=sh(l,l.next),// run earcut on each half
e(o,i,n,r,s,a,0),e(l,i,n,r,s,a,0);return}t=t.next}o=o.next}while(o!==t)}(t,i,n,r,s,a):e(sh(t),i,n,r,s,a,1);break}}}(d,p,i,n,r,h,0),p)}};// create a circular doubly linked list from polygon points in the specified winding order
function sl(e,t,i,n,r){let s,a;if(r===function(e,t,i,n){let r=0;for(let s=t,a=i-n;s<i;s+=n)r+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return r}(e,t,i,n)>0)for(s=t;s<i;s+=n)a=sy(s,e[s],e[s+1],a);else for(s=i-n;s>=t;s-=n)a=sy(s,e[s],e[s+1],a);return a&&sf(a,a.next)&&(sM(a),a=a.next),a}// eliminate colinear or duplicate points
function sh(e,t){if(!e)return e;t||(t=e);let i=e,n;do if(n=!1,!i.steiner&&(sf(i,i.next)||0===sp(i.prev,i,i.next))){if(sM(i),(i=t=i.prev)===i.next)break;n=!0}else i=i.next;while(n||i!==t)return t}function su(e,t){return e.x-t.x}// z-order of a point given coords and inverse of the longer side of data bbox
function sc(e,t,i,n,r){return(e=((e=((e=((e=(// coords are transformed into non-negative 15-bit integer range
(e=(e-i)*r|0)|e<<8)&16711935)|e<<4)&252645135)|e<<2)&858993459)|e<<1)&1431655765)|(t=((t=((t=((t=((t=(t-n)*r|0)|t<<8)&16711935)|t<<4)&252645135)|t<<2)&858993459)|t<<1)&1431655765)<<1}// check if a point lies within a convex triangle
function sd(e,t,i,n,r,s,a,o){return(r-a)*(t-o)>=(e-a)*(s-o)&&(e-a)*(n-o)>=(i-a)*(t-o)&&(i-a)*(s-o)>=(r-a)*(n-o)}// signed area of a triangle
function sp(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}// check if two points are equal
function sf(e,t){return e.x===t.x&&e.y===t.y}// check if two segments intersect
function sm(e,t,i,n){let r=s_(sp(e,t,i)),s=s_(sp(e,t,n)),a=s_(sp(i,n,e)),o=s_(sp(i,n,t));return!!(r!==s&&a!==o||0===r&&sg(e,i,t)||0===s&&sg(e,n,t)||0===a&&sg(i,e,n)||0===o&&sg(i,t,n))}// for collinear points p, q, r, check if point q lies on segment pr
function sg(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function s_(e){return e>0?1:e<0?-1:0}// check if a polygon diagonal is locally inside the polygon
function sv(e,t){return 0>sp(e.prev,e,e.next)?sp(e,t,e.next)>=0&&sp(e,e.prev,t)>=0:0>sp(e,t,e.prev)||0>sp(e,e.next,t)}// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function sx(e,t){let i=new sw(e.i,e.x,e.y),n=new sw(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}// create a node and optionally link it with previous one (in a circular doubly linked list)
function sy(e,t,i,n){let r=new sw(e,t,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function sM(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function sw(e,t,i){// vertex index in coordinates array
this.i=e,// vertex coordinates
this.x=t,this.y=i,// previous and next vertex nodes in a polygon ring
this.prev=null,this.next=null,// z-order curve value
this.z=0,// previous and next nodes in z-order
this.prevZ=null,this.nextZ=null,// indicates whether this is a steiner point
this.steiner=!1}class sS{// calculate area of the contour polygon
static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*i}static isClockWise(e){return 0>sS.area(e)}static triangulateShape(e,t){let i=[],n=[],r=[];// flat array of vertices like [ x0,y0, x1,y1, x2,y2, ... ]
sb(e),sT(i,e);//
let s=e.length;t.forEach(sb);for(let e=0;e<t.length;e++)n.push(s),s+=t[e].length,sT(i,t[e]);//
let a=so.triangulate(i,n);//
for(let e=0;e<a.length;e+=3)r.push(a.slice(e,e+3));return r}}function sb(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function sT(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}/**
 * Creates extruded geometry from a path shape.
 *
 * parameters = {
 *
 *  curveSegments: <int>, // number of points on the curves
 *  steps: <int>, // number of points for z-side extrusions / used for subdividing segments of extrude spline too
 *  depth: <float>, // Depth to extrude the shape
 *
 *  bevelEnabled: <bool>, // turn on bevel
 *  bevelThickness: <float>, // how deep into the original shape bevel goes
 *  bevelSize: <float>, // how far from shape outline (including bevelOffset) is bevel
 *  bevelOffset: <float>, // how far from shape outline does bevel start
 *  bevelSegments: <int>, // number of bevel layers
 *
 *  extrudePath: <THREE.Curve> // curve to extrude shape along
 *
 *  UVGenerator: <Object> // object that provides UV generator functions
 *
 * }
 */class sA extends tm{constructor(e=new sa([new w(.5,.5),new w(-.5,.5),new w(-.5,-.5),new w(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let s=0,a=e.length;s<a;s++){let a=e[s];!// functions
function(e){let s,a,o,l;let h=[],u=void 0!==t.curveSegments?t.curveSegments:12,c=void 0!==t.steps?t.steps:1,d=void 0!==t.depth?t.depth:1,p=void 0===t.bevelEnabled||t.bevelEnabled,f=void 0!==t.bevelThickness?t.bevelThickness:.2,m=void 0!==t.bevelSize?t.bevelSize:f-.1,g=void 0!==t.bevelOffset?t.bevelOffset:0,_=void 0!==t.bevelSegments?t.bevelSegments:3,v=t.extrudePath,x=void 0!==t.UVGenerator?t.UVGenerator:sE,y,M=!1;v&&(y=v.getSpacedPoints(c),M=!0,p=!1,// SETUP TNB variables
// TODO1 - have a .isClosed in spline?
s=v.computeFrenetFrames(c,!1),// console.log(splineTube, 'splineTube', splineTube.normals.length, 'steps', steps, 'extrudePts', extrudePts.length);
a=new G,o=new G,l=new G),p||(_=0,f=0,m=0,g=0);// Variables initialization
let S=e.extractPoints(u),b=S.shape,T=S.holes,A=!sS.isClockWise(b);if(A){b=b.reverse();// Maybe we should also check if holes are in the opposite direction, just to be safe ...
for(let e=0,t=T.length;e<t;e++){let t=T[e];sS.isClockWise(t)&&(T[e]=t.reverse())}}let E=sS.triangulateShape(b,T),C=b;for(let e=0,t=T.length;e<t;e++){let t=T[e];b=b.concat(t)}function R(e,t,i){return t||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.clone().addScaledVector(t,i)}let P=b.length,L=E.length;// Find directions for point movement
function D(e,t,i){let n,r,s;// good reading for geometry algorithms (here: line-line intersection)
// http://geomalgorithms.com/a05-_intersect-1.html
let a=e.x-t.x,o=e.y-t.y,l=i.x-e.x,h=i.y-e.y,u=a*a+o*o,c=a*h-o*l;if(Math.abs(c)>Number.EPSILON){// not collinear
// length of vectors for normalizing
let c=Math.sqrt(u),d=Math.sqrt(l*l+h*h),p=t.x-o/c,f=t.y+a/c,m=i.x-h/d,g=i.y+l/d,_=((m-p)*h-(g-f)*l)/(a*h-o*l);// vector from inPt to intersection point
n=p+a*_-e.x,r=f+o*_-e.y;// Don't normalize!, otherwise sharp corners become ugly
//  but prevent crazy spikes
let v=n*n+r*r;if(v<=2)return new w(n,r);s=Math.sqrt(v/2)}else{// handle special case of collinear edges
let e=!1;// assumes: opposite
a>Number.EPSILON?l>Number.EPSILON&&(e=!0):a<-Number.EPSILON?l<-Number.EPSILON&&(e=!0):Math.sign(o)===Math.sign(h)&&(e=!0),e?(// console.log("Warning: lines are a straight sequence");
n=-o,r=a,s=Math.sqrt(u)):(// console.log("Warning: lines are a straight spike");
n=a,r=o,s=Math.sqrt(u/2))}return new w(n/s,r/s)}let O=[];for(let e=0,t=C.length,i=t-1,n=e+1;e<t;e++,i++,n++)i===t&&(i=0),n===t&&(n=0),//  (j)---(i)---(k)
// console.log('i,j,k', i, j , k)
O[e]=D(C[e],C[i],C[n]);let I=[],N,z=O.concat();for(let e=0,t=T.length;e<t;e++){let t=T[e];N=[];for(let e=0,i=t.length,n=i-1,r=e+1;e<i;e++,n++,r++)n===i&&(n=0),r===i&&(r=0),//  (j)---(i)---(k)
N[e]=D(t[e],t[n],t[r]);I.push(N),z=z.concat(N)}// Loop bevelSegments, 1 for the front, 1 for the back
for(let e=0;e<_;e++){//for ( b = bevelSegments; b > 0; b -- ) {
let t=e/_,i=f*Math.cos(t*Math.PI/2),n=m*Math.sin(t*Math.PI/2)+g;// contract shape
for(let e=0,t=C.length;e<t;e++){let t=R(C[e],O[e],n);B(t.x,t.y,-i)}// expand holes
for(let e=0,t=T.length;e<t;e++){let t=T[e];N=I[e];for(let e=0,r=t.length;e<r;e++){let r=R(t[e],N[e],n);B(r.x,r.y,-i)}}}let U=m+g;// Back facing vertices
for(let e=0;e<P;e++){let t=p?R(b[e],z[e],U):b[e];M?(// v( vert.x, vert.y + extrudePts[ 0 ].y, extrudePts[ 0 ].x );
o.copy(s.normals[0]).multiplyScalar(t.x),a.copy(s.binormals[0]).multiplyScalar(t.y),l.copy(y[0]).add(o).add(a),B(l.x,l.y,l.z)):B(t.x,t.y,0)}// Add stepped vertices...
// Including front facing vertices
for(let e=1;e<=c;e++)for(let t=0;t<P;t++){let i=p?R(b[t],z[t],U):b[t];M?(// v( vert.x, vert.y + extrudePts[ s - 1 ].y, extrudePts[ s - 1 ].x );
o.copy(s.normals[e]).multiplyScalar(i.x),a.copy(s.binormals[e]).multiplyScalar(i.y),l.copy(y[e]).add(o).add(a),B(l.x,l.y,l.z)):B(i.x,i.y,d/c*e)}// Add bevel segments planes
//for ( b = 1; b <= bevelSegments; b ++ ) {
for(let e=_-1;e>=0;e--){let t=e/_,i=f*Math.cos(t*Math.PI/2),n=m*Math.sin(t*Math.PI/2)+g;// contract shape
for(let e=0,t=C.length;e<t;e++){let t=R(C[e],O[e],n);B(t.x,t.y,d+i)}// expand holes
for(let e=0,t=T.length;e<t;e++){let t=T[e];N=I[e];for(let e=0,r=t.length;e<r;e++){let r=R(t[e],N[e],n);M?B(r.x,r.y+y[c-1].y,y[c-1].x+i):B(r.x,r.y,d+i)}}}function k(e,t){let r=e.length;for(;--r>=0;){let s=r,a=r-1;a<0&&(a=e.length-1);//console.log('b', i,j, i-1, k,vertices.length);
for(let e=0,r=c+2*_;e<r;e++){let r=P*e,o=P*(e+1),l=t+s+r,h=t+a+r,u=t+a+o,c=t+s+o;!function(e,t,r,s){V(e),V(t),V(s),V(t),V(r),V(s);let a=n.length/3,o=x.generateSideWallUV(i,n,a-6,a-3,a-2,a-1);H(o[0]),H(o[1]),H(o[3]),H(o[1]),H(o[2]),H(o[3])}(l,h,u,c)}}}function B(e,t,i){h.push(e),h.push(t),h.push(i)}function F(e,t,r){V(e),V(t),V(r);let s=n.length/3,a=x.generateTopUV(i,n,s-3,s-2,s-1);H(a[0]),H(a[1]),H(a[2])}function V(e){n.push(h[3*e+0]),n.push(h[3*e+1]),n.push(h[3*e+2])}function H(e){r.push(e.x),r.push(e.y)}/* Faces */// Top and bottom faces
/////  Internal functions
(function(){let e=n.length/3;if(p){let e=0*P;// steps + 1
// Bottom faces
for(let t=0;t<L;t++){let i=E[t];F(i[2]+e,i[1]+e,i[0]+e)}e=P*(c+2*_);// Top faces
for(let t=0;t<L;t++){let i=E[t];F(i[0]+e,i[1]+e,i[2]+e)}}else{// Bottom faces
for(let e=0;e<L;e++){let t=E[e];F(t[2],t[1],t[0])}// Top faces
for(let e=0;e<L;e++){let t=E[e];F(t[0]+P*c,t[1]+P*c,t[2]+P*c)}}i.addGroup(e,n.length/3-e,0)})(),// Sides faces
// Create faces for the z-sides of the shape
function(){let e=n.length/3,t=0;k(C,0),t+=C.length;for(let e=0,i=T.length;e<i;e++){let i=T[e];k(i,t),//, true
t+=i.length}i.addGroup(e,n.length/3-e,1)}()}(a)}// build geometry
this.setAttribute("position",new to(n,3)),this.setAttribute("uv",new to(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return function(e,t,i){if(i.shapes=[],Array.isArray(e))for(let t=0,n=e.length;t<n;t++){let n=e[t];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),void 0!==t.extrudePath&&(i.options.extrudePath=t.extrudePath.toJSON()),i}(t,i,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let r=t[e.shapes[n]];i.push(r)}let n=e.options.extrudePath;return void 0!==n&&(e.options.extrudePath=new r6[n.type]().fromJSON(n)),new sA(i,e.options)}}const sE={generateTopUV:function(e,t,i,n,r){let s=t[3*i],a=t[3*i+1],o=t[3*n],l=t[3*n+1],h=t[3*r],u=t[3*r+1];return[new w(s,a),new w(o,l),new w(h,u)]},generateSideWallUV:function(e,t,i,n,r,s){let a=t[3*i],o=t[3*i+1],l=t[3*i+2],h=t[3*n],u=t[3*n+1],c=t[3*n+2],d=t[3*r],p=t[3*r+1],f=t[3*r+2],m=t[3*s],g=t[3*s+1],_=t[3*s+2];return Math.abs(o-u)<Math.abs(a-h)?[new w(a,1-l),new w(h,1-c),new w(d,1-f),new w(m,1-_)]:[new w(o,1-l),new w(u,1-c),new w(p,1-f),new w(g,1-_)]}};class sC extends sr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1];super(n,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sC(e.radius,e.detail)}}class sR extends sr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sR(e.radius,e.detail)}}class sP extends tm{constructor(e=.5,t=1,i=32,n=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);// buffers
let a=[],o=[],l=[],h=[],u=e,c=(t-e)/n,d=new G,p=new w;// generate vertices, normals and uvs
for(let e=0;e<=n;e++){for(let e=0;e<=i;e++){// values are generate from the inside of the ring to the outside
let n=r+e/i*s;// vertex
d.x=u*Math.cos(n),d.y=u*Math.sin(n),o.push(d.x,d.y,d.z),// normal
l.push(0,0,1),// uv
p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}// increase the radius for next row of vertices
u+=c}// indices
for(let e=0;e<n;e++){let t=e*(i+1);for(let e=0;e<i;e++){let n=e+t,r=n+i+1,s=n+i+2,o=n+1;// faces
a.push(n,r,o),a.push(r,s,o)}}// build geometry
this.setIndex(a),this.setAttribute("position",new to(o,3)),this.setAttribute("normal",new to(l,3)),this.setAttribute("uv",new to(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sP(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sL extends tm{constructor(e=new sa([new w(0,.5),new w(-.5,-.5),new w(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};// buffers
let i=[],n=[],r=[],s=[],a=0,o=0;// allow single and array values for "shapes" parameter
if(!1===Array.isArray(e))l(e);else for(let t=0;t<e.length;t++)l(e[t]),this.addGroup(a,o,t),a+=o,o=0;// helper functions
function l(e){let a=n.length/3,l=e.extractPoints(t),h=l.shape,u=l.holes;// check direction of vertices
!1===sS.isClockWise(h)&&(h=h.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];!0===sS.isClockWise(t)&&(u[e]=t.reverse())}let c=sS.triangulateShape(h,u);// join vertices of inner and outer paths to a single array
for(let e=0,t=u.length;e<t;e++){let t=u[e];h=h.concat(t)}// vertices, normals, uvs
for(let e=0,t=h.length;e<t;e++){let t=h[e];n.push(t.x,t.y,0),r.push(0,0,1),s.push(t.x,t.y)}// indices
for(let e=0,t=c.length;e<t;e++){let t=c[e],n=t[0]+a,r=t[1]+a,s=t[2]+a;i.push(n,r,s),o+=3}}// build geometry
this.setIndex(i),this.setAttribute("position",new to(n,3)),this.setAttribute("normal",new to(r,3)),this.setAttribute("uv",new to(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return function(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let n=e[i];t.shapes.push(n.uuid)}else t.shapes.push(e.uuid);return t}(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let r=t[e.shapes[n]];i.push(r)}return new sL(i,e.curveSegments)}}class sD extends tm{constructor(e=1,t=32,i=16,n=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let o=Math.min(s+a,Math.PI),l=0,h=[],u=new G,c=new G,d=[],p=[],f=[],m=[];// generate vertices, normals and uvs
for(let d=0;d<=i;d++){let g=[],_=d/i,v=0;0===d&&0===s?v=.5/t:d===i&&o===Math.PI&&(v=-.5/t);for(let i=0;i<=t;i++){let o=i/t;// vertex
u.x=-e*Math.cos(n+o*r)*Math.sin(s+_*a),u.y=e*Math.cos(s+_*a),u.z=e*Math.sin(n+o*r)*Math.sin(s+_*a),p.push(u.x,u.y,u.z),// normal
c.copy(u).normalize(),f.push(c.x,c.y,c.z),// uv
m.push(o+v,1-_),g.push(l++)}h.push(g)}// indices
for(let e=0;e<i;e++)for(let n=0;n<t;n++){let t=h[e][n+1],r=h[e][n],a=h[e+1][n],l=h[e+1][n+1];(0!==e||s>0)&&d.push(t,r,l),(e!==i-1||o<Math.PI)&&d.push(r,a,l)}// build geometry
this.setIndex(d),this.setAttribute("position",new to(p,3)),this.setAttribute("normal",new to(f,3)),this.setAttribute("uv",new to(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sD(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sO extends sr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sO(e.radius,e.detail)}}class sI extends tm{constructor(e=1,t=.4,i=12,n=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);// buffers
let s=[],a=[],o=[],l=[],h=new G,u=new G,c=new G;// generate vertices, normals and uvs
for(let s=0;s<=i;s++)for(let d=0;d<=n;d++){let p=d/n*r,f=s/i*Math.PI*2;// vertex
u.x=(e+t*Math.cos(f))*Math.cos(p),u.y=(e+t*Math.cos(f))*Math.sin(p),u.z=t*Math.sin(f),a.push(u.x,u.y,u.z),// normal
h.x=e*Math.cos(p),h.y=e*Math.sin(p),c.subVectors(u,h).normalize(),o.push(c.x,c.y,c.z),// uv
l.push(d/n),l.push(s/i)}// generate indices
for(let e=1;e<=i;e++)for(let t=1;t<=n;t++){// indices
let i=(n+1)*e+t-1,r=(n+1)*(e-1)+t-1,a=(n+1)*(e-1)+t,o=(n+1)*e+t;// faces
s.push(i,r,o),s.push(r,a,o)}// build geometry
this.setIndex(s),this.setAttribute("position",new to(a,3)),this.setAttribute("normal",new to(o,3)),this.setAttribute("uv",new to(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sI(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class sN extends tm{constructor(e=1,t=.4,i=64,n=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:s},i=Math.floor(i),n=Math.floor(n);// buffers
let a=[],o=[],l=[],h=[],u=new G,c=new G,d=new G,p=new G,f=new G,m=new G,g=new G;// generate vertices, normals and uvs
for(let a=0;a<=i;++a){// the radian "u" is used to calculate the position on the torus curve of the current tubular segment
let v=a/i*r*Math.PI*2;// now we calculate two points. P1 is our current position on the curve, P2 is a little farther ahead.
// these points are used to create a special "coordinate space", which is necessary to calculate the correct vertex positions
_(v,r,s,e,d),_(v+.01,r,s,e,p),// calculate orthonormal basis
m.subVectors(p,d),g.addVectors(p,d),f.crossVectors(m,g),g.crossVectors(f,m),// normalize B, N. T can be ignored, we don't use it
f.normalize(),g.normalize();for(let e=0;e<=n;++e){// now calculate the vertices. they are nothing more than an extrusion of the torus curve.
// because we extrude a shape in the xy-plane, there is no need to calculate a z-value.
let r=e/n*Math.PI*2,s=-t*Math.cos(r),p=t*Math.sin(r);// now calculate the final vertex position.
// first we orient the extrusion with our basis vectors, then we add it to the current position on the curve
u.x=d.x+(s*g.x+p*f.x),u.y=d.y+(s*g.y+p*f.y),u.z=d.z+(s*g.z+p*f.z),o.push(u.x,u.y,u.z),// normal (P1 is always the center/origin of the extrusion, thus we can use it to calculate the normal)
c.subVectors(u,d).normalize(),l.push(c.x,c.y,c.z),// uv
h.push(a/i),h.push(e/n)}}// generate indices
for(let e=1;e<=i;e++)for(let t=1;t<=n;t++){// indices
let i=(n+1)*(e-1)+(t-1),r=(n+1)*e+(t-1),s=(n+1)*e+t,o=(n+1)*(e-1)+t;// faces
a.push(i,r,o),a.push(r,s,o)}// this function calculates the current position on the torus curve
function _(e,t,i,n,r){let s=i/t*e,a=Math.cos(s);r.x=n*(2+a)*.5*Math.cos(e),r.y=n*(2+a)*Math.sin(e)*.5,r.z=n*Math.sin(s)*.5}// build geometry
this.setIndex(a),this.setAttribute("position",new to(o,3)),this.setAttribute("normal",new to(l,3)),this.setAttribute("uv",new to(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sN(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class sz extends tm{constructor(e=new r1(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let s=e.computeFrenetFrames(t,r);// expose internals
this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;// helper variables
let a=new G,o=new G,l=new w,h=new G,u=[],c=[],d=[],p=[];function f(r){// we use getPointAt to sample evenly distributed points from the given path
h=e.getPointAt(r/t,h);// retrieve corresponding normal and binormal
let l=s.normals[r],d=s.binormals[r];// generate normals and vertices for the current segment
for(let e=0;e<=n;e++){let t=e/n*Math.PI*2,r=Math.sin(t),s=-Math.cos(t);// normal
o.x=s*l.x+r*d.x,o.y=s*l.y+r*d.y,o.z=s*l.z+r*d.z,o.normalize(),c.push(o.x,o.y,o.z),// vertex
a.x=h.x+i*o.x,a.y=h.y+i*o.y,a.z=h.z+i*o.z,u.push(a.x,a.y,a.z)}}// create buffer data
// functions
(function(){for(let e=0;e<t;e++)f(e);// if the geometry is not closed, generate the last row of vertices and normals
// at the regular position on the given path
//
// if the geometry is closed, duplicate the first row of vertices and normals (uvs will differ)
f(!1===r?t:0),// uvs are generated in a separate function.
// this makes it easy compute correct values for closed geometries
function(){for(let e=0;e<=t;e++)for(let i=0;i<=n;i++)l.x=e/t,l.y=i/n,d.push(l.x,l.y)}(),// finally create faces
function(){for(let e=1;e<=t;e++)for(let t=1;t<=n;t++){let i=(n+1)*(e-1)+(t-1),r=(n+1)*e+(t-1),s=(n+1)*e+t,a=(n+1)*(e-1)+t;// faces
p.push(i,r,a),p.push(r,s,a)}}()})(),// build geometry
this.setIndex(p),this.setAttribute("position",new to(u,3)),this.setAttribute("normal",new to(c,3)),this.setAttribute("uv",new to(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){// This only works for built-in curves (e.g. CatmullRomCurve3).
// User defined curves or instances of CurvePath will not be deserialized.
return new sz(new r6[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class sU extends e5{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new e9(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new e9(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new w(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sk extends sU{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new w(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return p(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new e9(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new e9(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new e9(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}// same as Array.prototype.slice, but also works on typed arrays
function sB(e,t,i){return sV(e)?new e.constructor(e.subarray(t,void 0!==i?i:e.length)):e.slice(t,i)}// converts an array to a specific type
function sF(e,t,i){return e&&// let 'undefined' and 'null' pass
(i||e.constructor!==t)?"number"==typeof t.BYTES_PER_ELEMENT?new t(e):Array.prototype.slice.call(e):e}function sV(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}// uses the array previously returned by 'getKeyframeOrder' to sort data
function sH(e,t,i){let n=e.length,r=new e.constructor(n);for(let s=0,a=0;a!==n;++s){let n=i[s]*t;for(let i=0;i!==t;++i)r[a++]=e[n+i]}return r}// function for parsing AOS keyframe formats
function sG(e,t,i,n){let r=1,s=e[0];for(;void 0!==s&&void 0===s[n];)s=e[r++];if(void 0===s)return;// no data
let a=s[n];if(void 0!==a){if(Array.isArray(a))do void 0!==(a=s[n])&&(t.push(s.time),i.push.apply(i,a)),s=e[r++];while(void 0!==s)else if(void 0!==a.toArray)do void 0!==(a=s[n])&&(t.push(s.time),a.toArray(i,i.length)),s=e[r++];while(void 0!==s)else do void 0!==(a=s[n])&&(t.push(s.time),i.push(a)),s=e[r++];while(void 0!==s)}// no data
}/**
 * Abstract base class of interpolants over parametric samples.
 *
 * The parameter domain is one dimensional, typically the time or a path
 * along a curve defined by the data.
 *
 * The sample values can have any dimensionality and derived classes may
 * apply special interpretations to the data.
 *
 * This class provides the interval seek in a Template Method, deferring
 * the actual interpolation to derived classes.
 *
 * Time complexity is O(1) for linear access crossing at most two points
 * and O(log N) for random access, where N is the number of positions.
 *
 * References:
 *
 * 		http://www.oodesign.com/template-method-pattern.html
 *
 */class sW{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==n?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let s;i:{//- See http://jsperf.com/comparison-to-undefined/3
//- slower code:
//-
//- 				if ( t >= t1 || t1 === undefined ) {
n:if(!(e<n)){for(let s=i+2;;){if(void 0===n){if(e<r)break n;return(// after end
i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1))}if(i===s)break;// this loop
if(r=n,e<(n=t[++i]))break t}// prepare binary search on the right side of the index
s=t.length;break i}//- slower code:
//-					if ( t < t0 || t0 === undefined ) {
if(!(e>=r)){// looping?
let a=t[1];e<a&&(i=2,r=a);// linear reverse scan
for(let s=i-2;;){if(void 0===r)return(// before start
this._cachedIndex=0,this.copySampleValue_(0));if(i===s)break;// this loop
if(n=r,e>=(r=t[--i-1]))break t}// prepare binary search on the left side of the index
s=i,i=0;break i}break e}// linear scan
// binary search
for(;i<s;){let n=i+s>>>1;e<t[n]?s=n:i=n+1}// check boundary cases, again
if(n=t[i],void 0===(r=t[i-1]))return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===n)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}// seek
this._cachedIndex=i,this.intervalChanged_(i,r,n)}// validate_interval
return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){// copies a sample value to the result buffer
let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let e=0;e!==n;++e)t[e]=i[r+e];return t}// Template methods for derived classes:
interpolate_(){throw Error("call to abstract method");// implementations shall return this.resultBuffer
}intervalChanged_(){// empty
}}/**
 * Fast and simple cubic spline interpolant.
 *
 * It was derived from a Hermitian construction setting the first derivative
 * at each sample position to the linear slope between neighboring positions
 * over their parameter interval.
 */class sq extends sW{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,s=e+1,a=n[r],o=n[s];if(void 0===a)switch(this.getSettings_().endingStart){case 2401:// f'(t0) = 0
r=e,a=2*t-i;break;case 2402:// use the other end of the curve
r=n.length-2,a=t+n[r]-n[r+1];break;default:// f''(t0) = 0 a.k.a. Natural Spline
r=e,a=i}if(void 0===o)switch(this.getSettings_().endingEnd){case 2401:// f'(tN) = 0
s=e,o=2*i-t;break;case 2402:// use the other end of the curve
s=1,o=i+n[1]-n[0];break;default:// f''(tN) = 0, a.k.a. Natural Spline
s=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-i),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,h=this._offsetPrev,u=this._offsetNext,c=this._weightPrev,d=this._weightNext,p=(i-t)/(n-t),f=p*p,m=f*p,g=-c*m+2*c*f-c*p,_=(1+c)*m+(-1.5-2*c)*f+(-.5+c)*p+1,v=(-1-d)*m+(1.5+d)*f+.5*p,x=d*m-d*f;// combine data linearly
for(let e=0;e!==a;++e)r[e]=g*s[h+e]+_*s[l+e]+v*s[o+e]+x*s[u+e];return r}}class sj extends sW{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,h=(i-t)/(n-t),u=1-h;for(let e=0;e!==a;++e)r[e]=s[l+e]*u+s[o+e]*h;return r}}/**
 *
 * Interpolant that evaluates to the sample value at the position preceding
 * the parameter.
 */class sJ extends sW{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e/*, t0, t, t1 */){return this.copySampleValue_(e-1)}}class sX{constructor(e,t,i,n){if(void 0===e)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===t||0===t.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sF(t,this.TimeBufferType),this.values=sF(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}// Serialization (in static context, because of constructor invocation
// and automatic invocation of .toJSON):
static toJSON(e){let t;let i=e.constructor;// derived classes can define a static toJSON method
if(i.toJSON!==this.toJSON)t=i.toJSON(e);else{// by default, we assume the data can be serialized as-is
t={name:e.name,times:sF(e.times,Array),values:sF(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(t.interpolation=i)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new sJ(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sj(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sq(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(void 0===t){let t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){// fall back to default, unless the default itself is messed up
if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);// fatal, in this case
}return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}// move all keyframes either forwards or backwards in time
shift(e){if(0!==e){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}// scale all keyframe times by a factor (useful for frame <-> seconds conversions)
scale(e){if(1!==e){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}// removes keyframes before and after animation without changing any values within the range [startTime, endTime].
// IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
trim(e,t){let i=this.times,n=i.length,r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;-1!==s&&i[s]>t;)--s;if(++s,0!==r||s!==n){r>=s&&(r=(s=Math.max(s,1))-1);let e=this.getValueSize();this.times=sB(i,r,s),this.values=sB(this.values,r*e,s*e)}return this}// ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let t=0;t!==r;t++){let n=i[t];if("number"==typeof n&&isNaN(n)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,t,n),e=!1;break}if(null!==s&&s>n){console.error("THREE.KeyframeTrack: Out of order keys.",this,t,n,s),e=!1;break}s=n}if(void 0!==n&&sV(n))for(let t=0,i=n.length;t!==i;++t){let i=n[t];if(isNaN(i)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,t,i),e=!1;break}}return e}// removes equivalent sequential keys as common in morph target sequences
// (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
optimize(){// times or values may be shared with other tracks, so overwriting is unsafe
let e=sB(this.times),t=sB(this.values),i=this.getValueSize(),n=2302===this.getInterpolation(),r=e.length-1,s=1;for(let a=1;a<r;++a){let r=!1,o=e[a],l=e[a+1];// remove adjacent keyframes scheduled at the same time
if(o!==l&&(1!==a||o!==e[0])){if(n)r=!0;else{// remove unnecessary keyframes same as their neighbors
let e=a*i,n=e-i,s=e+i;for(let a=0;a!==i;++a){let i=t[e+a];if(i!==t[n+a]||i!==t[s+a]){r=!0;break}}}}// in-place compaction
if(r){if(a!==s){e[s]=e[a];let n=a*i,r=s*i;for(let e=0;e!==i;++e)t[r+e]=t[n+e]}++s}}// flush last keyframe (compaction looks ahead)
if(r>0){e[s]=e[r];for(let e=r*i,n=s*i,a=0;a!==i;++a)t[n+a]=t[e+a];++s}return s!==e.length?(this.times=sB(e,0,s),this.values=sB(t,0,s*i)):(this.times=e,this.values=t),this}clone(){let e=sB(this.times,0),t=sB(this.values,0),i=this.constructor,n=new i(this.name,e,t);return(// Interpolant argument to constructor is not saved, so copy the factory method directly.
n.createInterpolant=this.createInterpolant,n)}}sX.prototype.TimeBufferType=Float32Array,sX.prototype.ValueBufferType=Float32Array,sX.prototype.DefaultInterpolation=2301;/**
 * A Track of Boolean keyframe values.
 */class sY extends sX{}sY.prototype.ValueTypeName="bool",sY.prototype.ValueBufferType=Array,sY.prototype.DefaultInterpolation=2300,sY.prototype.InterpolantFactoryMethodLinear=void 0,sY.prototype.InterpolantFactoryMethodSmooth=void 0;/**
 * A Track of keyframe values that represent color.
 */class sK extends sX{}sK.prototype.ValueTypeName="color";/**
 * A Track of numeric keyframe values.
 */class sZ extends sX{}sZ.prototype.ValueTypeName="number";/**
 * Spherical linear unit quaternion interpolant.
 */class sQ extends sW{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-t)/(n-t),l=e*a;for(let e=l+a;l!==e;l+=4)H.slerpFlat(r,0,s,l-a,s,l,o);return r}}/**
 * A Track of quaternion keyframe values.
 */class s$ extends sX{InterpolantFactoryMethodLinear(e){return new sQ(this.times,this.values,this.getValueSize(),e)}}s$.prototype.ValueTypeName="quaternion",// ValueBufferType is inherited
s$.prototype.DefaultInterpolation=2301,s$.prototype.InterpolantFactoryMethodSmooth=void 0;/**
 * A Track that interpolates Strings
 */class s0 extends sX{}s0.prototype.ValueTypeName="string",s0.prototype.ValueBufferType=Array,s0.prototype.DefaultInterpolation=2300,s0.prototype.InterpolantFactoryMethodLinear=void 0,s0.prototype.InterpolantFactoryMethodSmooth=void 0;/**
 * A Track of vectored keyframe values.
 */class s1 extends sX{}s1.prototype.ValueTypeName="vector";class s3{constructor(e,t=-1,i,n=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=d(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let e=0,r=i.length;e!==r;++e)t.push((function(e){if(void 0===e.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=function(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sZ;case"vector":case"vector2":case"vector3":case"vector4":return s1;case"color":return sK;case"quaternion":return s$;case"bool":case"boolean":return sY;case"string":return s0}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}(e.type);if(void 0===e.times){let t=[],i=[];sG(e.keys,t,i,"value"),e.times=t,e.values=i}return(// derived classes can define a static parse method
void 0!==t.parse?t.parse(e):new t(e.name,e.times,e.values,e.interpolation))})(i[e]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,n=i.length;e!==n;++e)t.push(sX.toJSON(i[e]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,s=[];for(let e=0;e<r;e++){let a=[],o=[];a.push((e+r-1)%r,e,(e+1)%r),o.push(0,1,0);let l=// returns an array by which times and values can be sorted
function(e){let t=e.length,i=Array(t);for(let e=0;e!==t;++e)i[e]=e;return i.sort(function(t,i){return e[t]-e[i]}),i}(a);a=sH(a,1,l),o=sH(o,1,l),n||0!==a[0]||(a.push(r),o.push(o[0])),s.push(new sZ(".morphTargetInfluences["+t[e].name+"]",a,o).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;Array.isArray(e)||(i=e.geometry&&e.geometry.animations||e.animations);for(let e=0;e<i.length;e++)if(i[e].name===t)return i[e];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;// sort morph target names into animation groups based
// patterns like Walk_001, Walk_002, Run_001, Run_002
for(let t=0,i=e.length;t<i;t++){let i=e[t],s=i.name.match(r);if(s&&s.length>1){let e=s[1],t=n[e];t||(n[e]=t=[]),t.push(i)}}let s=[];for(let e in n)s.push(this.CreateFromMorphTargetSequence(e,n[e],t,i));return s}// parse the animation.hierarchy format
static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(e,t,i,n,r){// only return track if there are actually keys.
if(0!==i.length){let s=[],a=[];sG(i,s,a,n),0!==s.length&&r.push(new e(t,s,a))}},n=[],r=e.name||"default",s=e.fps||30,a=e.blendMode,o=e.length||-1,l=e.hierarchy||[];for(let e=0;e<l.length;e++){let r=l[e].keys;// skip empty tracks
if(r&&0!==r.length){// process morph targets
if(r[0].morphTargets){let e;// figure out all morph targets used in this track
let t={};for(e=0;e<r.length;e++)if(r[e].morphTargets)for(let i=0;i<r[e].morphTargets.length;i++)t[r[e].morphTargets[i]]=-1;// create a track for each morph target with all zero
// morphTargetInfluences except for the keys in which
// the morphTarget is named.
for(let i in t){let t=[],s=[];for(let n=0;n!==r[e].morphTargets.length;++n){let n=r[e];t.push(n.time),s.push(n.morphTarget===i?1:0)}n.push(new sZ(".morphTargetInfluence["+i+"]",t,s))}o=t.length*s}else{// ...assume skeletal animation
let s=".bones["+t[e].name+"]";i(s1,s+".position",r,"pos",n),i(s$,s+".quaternion",r,"rot",n),i(s1,s+".scale",r,"scl",n)}}}if(0===n.length)return null;let h=new this(r,o,n,a);return h}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let e=this.tracks[i];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}const s2={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&// console.log( 'THREE.Cache', 'Adding key:', key );
(this.files[e]=t)},get:function(e){if(!1!==this.enabled)// console.log( 'THREE.Cache', 'Checking key:', key );
return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class s5{constructor(e,t,i){let n;let r=this,s=!1,a=0,o=0,l=[];// Refer to #5689 for the reason why we don't set .onStart
// in the constructor
this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(e){o++,!1===s&&void 0!==r.onStart&&r.onStart(e,a,o),s=!0},this.itemEnd=function(e){a++,void 0!==r.onProgress&&r.onProgress(e,a,o),a===o&&(s=!1,void 0!==r.onLoad&&r.onLoad())},this.itemError=function(e){void 0!==r.onError&&r.onError(e)},this.resolveURL=function(e){return n?n(e):e},this.setURLModifier=function(e){return n=e,this},this.addHandler=function(e,t){return l.push(e,t),this},this.removeHandler=function(e){let t=l.indexOf(e);return -1!==t&&l.splice(t,2),this},this.getHandler=function(e){for(let t=0,i=l.length;t<i;t+=2){let i=l[t],n=l[t+1];if(i.global&&(i.lastIndex=0),i.test(e))return n}return null}}}const s4=/*@__PURE__*/new s5;class s6{constructor(e){this.manager=void 0!==e?e:s4,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const s8={};class s7 extends Error{constructor(e,t){super(e),this.response=t}}class s9 extends s6{constructor(e){super(e)}load(e,t,i,n){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let r=s2.get(e);if(void 0!==r)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;// Check if request is duplicate
if(void 0!==s8[e]){s8[e].push({onLoad:t,onProgress:i,onError:n});return}// Initialise array for duplicate requests
s8[e]=[],s8[e].push({onLoad:t,onProgress:i,onError:n});// create request
let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,o=this.responseType;// start the fetch
fetch(s).then(t=>{if(200===t.status||0===t.status){// Workaround: Checking if response.body === undefined for Alipay browser #23548
if(0===t.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===t.body||void 0===t.body.getReader)return t;let i=s8[e],n=t.body.getReader(),r=t.headers.get("Content-Length")||t.headers.get("X-File-Size"),s=r?parseInt(r):0,a=0!==s,o=0,l=new ReadableStream({start(e){(function t(){n.read().then(({done:n,value:r})=>{if(n)e.close();else{o+=r.byteLength;let n=new ProgressEvent("progress",{lengthComputable:a,loaded:o,total:s});for(let e=0,t=i.length;e<t;e++){let t=i[e];t.onProgress&&t.onProgress(n)}e.enqueue(r),t()}})})()}});return new Response(l)}throw new s7(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>{let t=new DOMParser;return t.parseFromString(e,a)});case"json":return e.json();default:if(void 0===a)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(a),i=t&&t[1]?t[1].toLowerCase():void 0,n=new TextDecoder(i);return e.arrayBuffer().then(e=>n.decode(e))}}}).then(t=>{// Add to cache only on HTTP success, so that we do not cache
// error response bodies as proper responses to requests.
s2.add(e,t);let i=s8[e];delete s8[e];for(let e=0,n=i.length;e<n;e++){let n=i[e];n.onLoad&&n.onLoad(t)}}).catch(t=>{// Abort errors and other errors are handled the same
let i=s8[e];if(void 0===i)throw(// When onLoad was called and url was deleted in `loading`
this.manager.itemError(e),t);delete s8[e];for(let e=0,n=i.length;e<n;e++){let n=i[e];n.onError&&n.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ae extends s6{constructor(e){super(e)}load(e,t,i,n){void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,s=s2.get(e);if(void 0!==s)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;let a=A("img");function o(){h(),s2.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(t){h(),n&&n(t),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),"data:"!==e.slice(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class at extends s6{constructor(e){super(e)}load(e,t,i,n){let r=new k,s=new ae(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(e){r.image=e,r.needsUpdate=!0,void 0!==t&&t(r)},i,n),r}}class ai extends eW{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new e9(e),this.intensity=t}dispose(){// Empty here in base class; some subclasses override.
}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,void 0!==this.groundColor&&(t.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(t.object.distance=this.distance),void 0!==this.angle&&(t.object.angle=this.angle),void 0!==this.decay&&(t.object.decay=this.decay),void 0!==this.penumbra&&(t.object.penumbra=this.penumbra),void 0!==this.shadow&&(t.object.shadow=this.shadow.toJSON()),t}}const an=/*@__PURE__*/new ex,ar=/*@__PURE__*/new G,as=/*@__PURE__*/new G;class aa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new w(512,512),this.map=null,this.mapPass=null,this.matrix=new ex,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tQ,this._frameExtents=new w(1,1),this._viewportCount=1,this._viewports=[new B(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ar.setFromMatrixPosition(e.matrixWorld),t.position.copy(ar),as.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(as),t.updateMatrixWorld(),an.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(an),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(an)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return 0!==this.bias&&(e.bias=this.bias),0!==this.normalBias&&(e.normalBias=this.normalBias),1!==this.radius&&(e.radius=this.radius),(512!==this.mapSize.x||512!==this.mapSize.y)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ao extends aa{constructor(){super(new tH(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*c*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class al extends ai{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(eW.DEFAULT_UP),this.updateMatrix(),this.target=new eW,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new ao}get power(){// compute the light's luminous power (in lumens) from its intensity (in candela)
// by convention for a spotlight, luminous power (lm) = π * luminous intensity (cd)
return this.intensity*Math.PI}set power(e){// set the light's intensity (in candela) from the desired luminous power (in lumens)
this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ah=/*@__PURE__*/new ex,au=/*@__PURE__*/new G,ac=/*@__PURE__*/new G;class ad extends aa{constructor(){super(new tH(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new w(4,2),this._viewportCount=6,this._viewports=[// These viewports map a cube-map onto a 2D texture with the
// following orientation:
//
//  xzXZ
//   y Y
//
// X - Positive x direction
// x - Negative x direction
// Y - Positive y direction
// y - Negative y direction
// Z - Positive z direction
// z - Negative z direction
// positive X
new B(2,1,1,1),// negative X
new B(0,1,1,1),// positive Z
new B(3,1,1,1),// negative Z
new B(1,1,1,1),// positive Y
new B(3,0,1,1),// negative Y
new B(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),au.setFromMatrixPosition(e.matrixWorld),i.position.copy(au),ac.copy(i.position),ac.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ac),i.updateMatrixWorld(),n.makeTranslation(-au.x,-au.y,-au.z),ah.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah)}}class ap extends ai{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ad}get power(){// compute the light's luminous power (in lumens) from its intensity (in candela)
// for an isotropic light source, luminous power (lm) = 4 π luminous intensity (cd)
return 4*this.intensity*Math.PI}set power(e){// set the light's intensity (in candela) from the desired luminous power (in lumens)
this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class af extends aa{constructor(){super(new ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class am extends ai{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(eW.DEFAULT_UP),this.updateMatrix(),this.target=new eW,this.shadow=new af}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ag{static decodeText(e){if("undefined"!=typeof TextDecoder)return new TextDecoder().decode(e);// Avoid the String.fromCharCode.apply(null, array) shortcut, which
// throws a "maximum call stack size exceeded" error for large arrays.
let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{// merges multi-byte utf-8 characters.
return decodeURIComponent(escape(t))}catch(e){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return -1===t?"./":e.slice(0,t+1)}static resolveURL(e,t){return(// Invalid URL
"string"!=typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e))?e:t+e)}}class a_ extends s6{constructor(e){super(e),this.isImageBitmapLoader=!0,"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,s=s2.get(e);if(void 0!==s)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;let a={};a.credentials="anonymous"===this.crossOrigin?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(i){s2.add(e,i),t&&t(i),r.manager.itemEnd(e)}).catch(function(t){n&&n(t),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class av{static getContext(){return void 0===t&&(t=new(window.AudioContext||window.webkitAudioContext)),t}static setContext(e){t=e}}class ax{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ay(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ay();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ay(){return("undefined"==typeof performance?Date:performance).now();// see #10732
}const aM=/*@__PURE__*/new G,aw=/*@__PURE__*/new H,aS=/*@__PURE__*/new G,ab=/*@__PURE__*/new G;class aT extends eW{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(!0===this.isPlaying){console.warn("THREE.Audio: Audio is already playing.");return}if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.");return}return!0===this.isPlaying&&(// update current progress
this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,null!==this.source&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),!0===this._connected?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this;// only set detune when available
}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,!0===this.isPlaying&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}// Characters [].:/ are reserved for track binding syntax.
const aA="\\[\\]\\.:\\/",aE=RegExp("["+aA+"]","g"),aC="[^"+aA+"]",aR="[^"+aA.replace("\\.","")+"]",aP=/*@__PURE__*//((?:WC+[\/:])*)/.source.replace("WC",aC),aL=/*@__PURE__*//(WCOD+)?/.source.replace("WCOD",aR),aD=/*@__PURE__*//(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",aC),aO=/*@__PURE__*//\.(WC+)(?:\[(.+)\])?/.source.replace("WC",aC),aI=RegExp("^"+aP+aL+aD+aO+"$"),aN=["material","materials","bones","map"];// Note: This class uses a State pattern on a per-method basis:
// 'bind' sets 'this.getValue' / 'setValue' and shadows the
// prototype version of these methods with one that represents
// the bound state. When the property is not found, the methods
// become no-ops.
class az{constructor(e,t,i){this.path=t,this.parsedPath=i||az.parseTrackName(t),this.node=az.findNode(e,this.parsedPath.nodeName),this.rootNode=e,// initial state of these methods that calls 'bind'
this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new az.Composite(e,t,i):new az(e,t,i)}/**
	 * Replaces spaces with underscores and removes unsupported characters from
	 * node names, to ensure compatibility with parseTrackName().
	 *
	 * @param {string} name Node name to be sanitized.
	 * @return {string}
	 */static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(aE,"")}static parseTrackName(e){let t=aI.exec(e);if(null===t)throw Error("PropertyBinding: Cannot parse trackName: "+e);let i={// directoryName: matches[ 1 ], // (tschw) currently unused
nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(void 0!==n&&-1!==n){let e=i.nodeName.substring(n+1);// Object names must be checked against an allowlist. Otherwise, there
// is no way to parse 'foo.bar.baz': 'baz' must be a property, but
// 'bar' could be the objectName, or part of a nodeName (which can
// include '.' characters).
-1!==aN.indexOf(e)&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=e)}if(null===i.propertyName||0===i.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(void 0===t||""===t||"."===t||-1===t||t===e.name||t===e.uuid)return e;// search into skeleton bones.
if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(void 0!==i)return i}// search into node subtree.
if(e.children){let i=function(e){for(let n=0;n<e.length;n++){let r=e[n];if(r.name===t||r.uuid===t)return r;let s=i(r.children);if(s)return s}return null},n=i(e.children);if(n)return n}return null}// these are used to "bind" a nonexistent property
_getValue_unavailable(){}_setValue_unavailable(){}// Getters
_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}// Direct
_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}// EntireArray
_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}// ArrayElement
_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}// HasToFromArray
_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}// create getter / setter pair for a property in the scene graph
bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;// ensure there is a value node
if(e||(e=az.findNode(this.rootNode,t.nodeName),this.node=e),// set fail state so we can just 'return' on error
this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let n=t.objectIndex;// special cases were we need to reach deeper into the hierarchy to get the face materials....
switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}// potential future optimization: skip this if propertyIndex is already an integer
// and convert the integer string to a true integer.
e=e.skeleton.bones;// support resolving morphTarget names into indices.
for(let t=0;t<e.length;t++)if(e[t].name===n){n=t;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(void 0===e[i]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(void 0!==n){if(void 0===e[n]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[n]}}// resolve property
let s=e[n];if(void 0===s){let i=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+i+"."+n+" but it wasn't found.",e);return}// determine versioning scheme
let a=this.Versioning.None;this.targetObject=e,void 0!==e.needsUpdate?a=this.Versioning.NeedsUpdate:void 0!==e.matrixWorldNeedsUpdate&&(a=this.Versioning.MatrixWorldNeedsUpdate);// determine how the property gets bound
let o=this.BindingType.Direct;if(void 0!==r){// access a sub element of the property array (only primitives are supported right now)
if("morphTargetInfluences"===n){// potential optimization, skip this if propertyIndex is already an integer, and convert the integer string to a true integer.
// support resolving morphTarget names into indices.
if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}void 0!==e.morphTargetDictionary[r]&&(r=e.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else void 0!==s.fromArray&&void 0!==s.toArray?(// must use copy for Object3D.Euler/Quaternion
o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;// select getter / setter
this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,// back to the prototype version of getValue / setValue
// note: avoiding to mutate the shape of 'this' via 'delete'
this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}az.Composite=class{constructor(e,t,i){let n=i||az.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();// bind all binding
let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];// and only call .getValue on the first
void 0!==n&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},az.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},az.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},az.prototype.GetterByBindingType=[az.prototype._getValue_direct,az.prototype._getValue_array,az.prototype._getValue_arrayElement,az.prototype._getValue_toArray],az.prototype.SetterByBindingTypeAndVersioning=[[// Direct
az.prototype._setValue_direct,az.prototype._setValue_direct_setNeedsUpdate,az.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[// EntireArray
az.prototype._setValue_array,az.prototype._setValue_array_setNeedsUpdate,az.prototype._setValue_array_setMatrixWorldNeedsUpdate],[// ArrayElement
az.prototype._setValue_arrayElement,az.prototype._setValue_arrayElement_setNeedsUpdate,az.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[// HasToFromArray
az.prototype._setValue_fromArray,az.prototype._setValue_fromArray_setNeedsUpdate,az.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],new Float32Array(1),"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"151"}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="151");/**
 * The MIT License
 *
 * Copyright © 2022 Yuka authors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *//**
* Class for representing a telegram, an envelope which contains a message
* and certain metadata like sender and receiver. Part of the messaging system
* for game entities.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class aU{/**
	* Constructs a new telegram object.
	*
	* @param {GameEntity} sender - The sender.
	* @param {GameEntity} receiver - The receiver.
	* @param {String} message - The actual message.
	* @param {Number} delay - A time value in millisecond used to delay the message dispatching.
	* @param {Object} data - An object for custom data.
	*/constructor(e,t,i,n,r){/**
		* The sender.
		* @type {GameEntity}
		*/this.sender=e,/**
		* The receiver.
		* @type {GameEntity}
		*/this.receiver=t,/**
		* The actual message.
		* @type {String}
		*/this.message=i,/**
		* A time value in millisecond used to delay the message dispatching.
		* @type {Number}
		*/this.delay=n,/**
		* An object for custom data.
		* @type {Object}
		*/this.data=r}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){return{type:this.constructor.name,sender:this.sender.uuid,receiver:this.receiver.uuid,message:this.message,delay:this.delay,data:this.data}}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {Telegram} A reference to this telegram.
	*/fromJSON(e){return this.sender=e.sender,this.receiver=e.receiver,this.message=e.message,this.delay=e.delay,this.data=e.data,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {Telegram} A reference to this telegram.
	*/resolveReferences(e){return this.sender=e.get(this.sender),this.receiver=e.get(this.receiver),this}}/* istanbul ignore next *//**
* Class with a logger interface. Messages are only logged to console if
* their log level is smaller or equal than the current log level.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class ak{/**
	* Sets the log level for the logger. Allow values are: *LOG*,
	* *WARN*, *ERROR*, *SILENT*. The default level is *WARN*. The constants
	* are accessible over the *Logger.LEVEL* namespace.
	*
	* @param {Number} level - The log level.
	*/static setLevel(e){aB=e}/**
	* Logs a message with the level *LOG*.
	*
	* @param {...Any} args - The arguments to log.
	*/static log(...e){aB<=ak.LEVEL.LOG&&console.log(...e)}/**
	* Logs a message with the level *WARN*.
	*
	* @param {...Any} args - The arguments to log.
	*/static warn(...e){aB<=ak.LEVEL.WARN&&console.warn(...e)}/**
	* Logs a message with the level *ERROR*.
	*
	* @param {...Any} args - The arguments to log.
	*/static error(...e){aB<=ak.LEVEL.ERROR&&console.error(...e)}}ak.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let aB=ak.LEVEL.WARN;/**
* This class is the core of the messaging system for game entities and used by the
* {@link EntityManager}. The implementation can directly dispatch messages or use a
* delayed delivery for deferred communication. This can be useful if a game entity
* wants to inform itself about a particular event in the future.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class aF{/**
	* Constructs a new message dispatcher.
	*/constructor(){/**
		* A list of delayed telegrams.
		* @type {Array<Telegram>}
		* @readonly
		*/this.delayedTelegrams=[]}/**
	* Delivers the message to the receiver.
	*
	* @param {Telegram} telegram - The telegram to deliver.
	* @return {MessageDispatcher} A reference to this message dispatcher.
	*/deliver(e){let t=e.receiver;return!1===t.handleMessage(e)&&ak.warn("YUKA.MessageDispatcher: Message not handled by receiver: %o",t),this}/**
	* Receives the raw telegram data and decides how to dispatch the telegram (with or without delay).
	*
	* @param {GameEntity} sender - The sender.
	* @param {GameEntity} receiver - The receiver.
	* @param {String} message - The actual message.
	* @param {Number} delay - A time value in millisecond used to delay the message dispatching.
	* @param {Object} data - An object for custom data.
	* @return {MessageDispatcher} A reference to this message dispatcher.
	*/dispatch(e,t,i,n,r){let s=new aU(e,t,i,n,r);return n<=0?this.deliver(s):this.delayedTelegrams.push(s),this}/**
	* Used to process delayed messages.
	*
	* @param {Number} delta - The time delta.
	* @return {MessageDispatcher} A reference to this message dispatcher.
	*/dispatchDelayedMessages(e){let t=this.delayedTelegrams.length;for(;t--;){let i=this.delayedTelegrams[t];i.delay-=e,i.delay<=0&&(this.deliver(i),this.delayedTelegrams.pop())}return this}/**
	* Clears the internal state of this message dispatcher.
	*
	* @return {MessageDispatcher} A reference to this message dispatcher.
	*/clear(){return this.delayedTelegrams.length=0,this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e={type:this.constructor.name,delayedTelegrams:[]};// delayed telegrams
for(let t=0,i=this.delayedTelegrams.length;t<i;t++){let i=this.delayedTelegrams[t];e.delayedTelegrams.push(i.toJSON())}return e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {MessageDispatcher} A reference to this message dispatcher.
	*/fromJSON(e){this.clear();let t=e.delayedTelegrams;for(let e=0,i=t.length;e<i;e++){let i=t[e],n=new aU().fromJSON(i);this.delayedTelegrams.push(n)}return this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {MessageDispatcher} A reference to this message dispatcher.
	*/resolveReferences(e){let t=this.delayedTelegrams;for(let i=0,n=t.length;i<n;i++){let n=t[i];n.resolveReferences(e)}return this}}const aV=[];for(let e=0;e<256;e++)aV[e]=(e<16?"0":"")+e.toString(16);/**
* Class with various math helpers.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class aH{/**
	* Computes the signed area of a rectangle defined by three points.
	* This method can also be used to calculate the area of a triangle.
	*
	* @param {Vector3} a - The first point in 3D space.
	* @param {Vector3} b - The second point in 3D space.
	* @param {Vector3} c - The third point in 3D space.
	* @return {Number} The signed area.
	*/static area(e,t,i){return(i.x-e.x)*(t.z-e.z)-(t.x-e.x)*(i.z-e.z)}/**
	* Returns the indices of the maximum values of the given array.
	*
	* @param {Array<Number>} array - The input array.
	* @return {Array<Number>} Array of indices into the array.
	*/static argmax(e){let t=Math.max(...e),i=[];for(let n=0,r=e.length;n<r;n++)e[n]===t&&i.push(n);return i}/**
	* Returns a random sample from a given array.
	*
	* @param {Array<Any>} array - The array that is used to generate the random sample.
	* @param {Array<Number>} probabilities - The probabilities associated with each entry. If not given, the sample assumes a uniform distribution over all entries.
	* @return {Any} The random sample value.
	*/static choice(e,t=null){let i=Math.random();if(null===t)return e[Math.floor(Math.random()*e.length)];{let n=0,r=e.map((e,i)=>n+=t[i]).findIndex(e=>e>=i);return e[r]}}/**
	* Ensures the given scalar value is within a given min/max range.
	*
	* @param {Number} value - The value to clamp.
	* @param {Number} min - The min value.
	* @param {Number} max - The max value.
	* @return {Number} The clamped value.
	*/static clamp(e,t,i){return Math.max(t,Math.min(i,e))}/**
	* Computes a RFC4122 Version 4 complied Universally Unique Identifier (UUID).
	*
	* @return {String} The UUID.
	*/static generateUUID(){// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/21963136#21963136
let e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=aV[255&e]+aV[e>>8&255]+aV[e>>16&255]+aV[e>>24&255]+"-"+aV[255&t]+aV[t>>8&255]+"-"+aV[t>>16&15|64]+aV[t>>24&255]+"-"+aV[63&i|128]+aV[i>>8&255]+"-"+aV[i>>16&255]+aV[i>>24&255]+aV[255&n]+aV[n>>8&255]+aV[n>>16&255]+aV[n>>24&255];return r.toUpperCase()}/**
	* Computes a random float value within a given min/max range.
	*
	* @param {Number} min - The min value.
	* @param {Number} max - The max value.
	* @return {Number} The random float value.
	*/static randFloat(e,t){return e+Math.random()*(t-e)}/**
	* Computes a random integer value within a given min/max range.
	*
	* @param {Number} min - The min value.
	* @param {Number} max - The max value.
	* @return {Number} The random integer value.
	*/static randInt(e,t){return e+Math.floor(Math.random()*(t-e+1))}}/**
* Class representing a 3D vector.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class aG{/**
	* Constructs a new 3D vector with the given values.
	*
	* @param {Number} x - The x component.
	* @param {Number} y - The y component.
	* @param {Number} z - The z component.
	*/constructor(e=0,t=0,i=0){/**
		* The x component.
		* @type {Number}
		*/this.x=e,/**
		* The y component.
		* @type {Number}
		*/this.y=t,/**
		* The z component.
		* @type {Number}
		*/this.z=i}/**
	* Sets the given values to this 3D vector.
	*
	* @param {Number} x - The x component.
	* @param {Number} y - The y component.
	* @param {Number} z - The z component.
	* @return {Vector3} A reference to this vector.
	*/set(e,t,i){return this.x=e,this.y=t,this.z=i,this}/**
	* Copies all values from the given 3D vector to this 3D vector.
	*
	* @param {Vector3} v - The vector to copy.
	* @return {Vector3} A reference to this vector.
	*/copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}/**
	* Creates a new 3D vector and copies all values from this 3D vector.
	*
	* @return {Vector3} A new 3D vector.
	*/clone(){return new this.constructor().copy(this)}/**
	* Adds the given 3D vector to this 3D vector.
	*
	* @param {Vector3} v - The vector to add.
	* @return {Vector3} A reference to this vector.
	*/add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}/**
	* Adds the given scalar to this 3D vector.
	*
	* @param {Number} s - The scalar to add.
	* @return {Vector3} A reference to this vector.
	*/addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}/**
	* Adds two given 3D vectors and stores the result in this 3D vector.
	*
	* @param {Vector3} a - The first vector of the operation.
	* @param {Vector3} b - The second vector of the operation.
	* @return {Vector3} A reference to this vector.
	*/addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}/**
	* Subtracts the given 3D vector from this 3D vector.
	*
	* @param {Vector3} v - The vector to substract.
	* @return {Vector3} A reference to this vector.
	*/sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}/**
	* Subtracts the given scalar from this 3D vector.
	*
	* @param {Number} s - The scalar to substract.
	* @return {Vector3} A reference to this vector.
	*/subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}/**
	* Subtracts two given 3D vectors and stores the result in this 3D vector.
	*
	* @param {Vector3} a - The first vector of the operation.
	* @param {Vector3} b - The second vector of the operation.
	* @return {Vector3} A reference to this vector.
	*/subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}/**
	* Multiplies the given 3D vector with this 3D vector.
	*
	* @param {Vector3} v - The vector to multiply.
	* @return {Vector3} A reference to this vector.
	*/multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}/**
	* Multiplies the given scalar with this 3D vector.
	*
	* @param {Number} s - The scalar to multiply.
	* @return {Vector3} A reference to this vector.
	*/multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}/**
	* Multiplies two given 3D vectors and stores the result in this 3D vector.
	*
	* @param {Vector3} a - The first vector of the operation.
	* @param {Vector3} b - The second vector of the operation.
	* @return {Vector3} A reference to this vector.
	*/multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}/**
	* Divides the given 3D vector through this 3D vector.
	*
	* @param {Vector3} v - The vector to divide.
	* @return {Vector3} A reference to this vector.
	*/divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}/**
	* Divides the given scalar through this 3D vector.
	*
	* @param {Number} s - The scalar to multiply.
	* @return {Vector3} A reference to this vector.
	*/divideScalar(e){return this.x/=e,this.y/=e,this.z/=e,this}/**
	* Divides two given 3D vectors and stores the result in this 3D vector.
	*
	* @param {Vector3} a - The first vector of the operation.
	* @param {Vector3} b - The second vector of the operation.
	* @return {Vector3} A reference to this vector.
	*/divideVectors(e,t){return this.x=e.x/t.x,this.y=e.y/t.y,this.z=e.z/t.z,this}/**
	* Reflects this vector along the given normal.
	*
	* @param {Vector3} normal - The normal vector.
	* @return {Vector3} A reference to this vector.
	*/reflect(e){// solve r = v - 2( v * n ) * n
return this.sub(aW.copy(e).multiplyScalar(2*this.dot(e)))}/**
	* Ensures this 3D vector lies in the given min/max range.
	*
	* @param {Vector3} min - The min range.
	* @param {Vector3} max - The max range.
	* @return {Vector3} A reference to this vector.
	*/clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}/**
	* Compares each vector component of this 3D vector and the
	* given one and stores the minimum value in this instance.
	*
	* @param {Vector3} v - The 3D vector to check.
	* @return {Vector3} A reference to this vector.
	*/min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}/**
	* Compares each vector component of this 3D vector and the
	* given one and stores the maximum value in this instance.
	*
	* @param {Vector3} v - The 3D vector to check.
	* @return {Vector3} A reference to this vector.
	*/max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}/**
	* Computes the dot product of this and the given 3D vector.
	*
	* @param {Vector3} v - The given 3D vector.
	* @return {Number} The results of the dor product.
	*/dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}/**
	* Computes the cross product of this and the given 3D vector and
	* stores the result in this 3D vector.
	*
	* @param {Vector3} v - A 3D vector.
	* @return {Vector3} A reference to this vector.
	*/cross(e){let t=this.x,i=this.y,n=this.z;return this.x=i*e.z-n*e.y,this.y=n*e.x-t*e.z,this.z=t*e.y-i*e.x,this}/**
	* Computes the cross product of the two given 3D vectors and
	* stores the result in this 3D vector.
	*
	* @param {Vector3} a - The first 3D vector.
	* @param {Vector3} b - The second 3D vector.
	* @return {Vector3} A reference to this vector.
	*/crossVectors(e,t){let i=e.x,n=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=n*o-r*a,this.y=r*s-i*o,this.z=i*a-n*s,this}/**
	* Computes the angle between this and the given vector.
	*
	* @param {Vector3} v - A 3D vector.
	* @return {Number} The angle in radians.
	*/angleTo(e){let t=Math.sqrt(this.squaredLength()*e.squaredLength());if(0===t)return 0;let i=this.dot(e)/t;// clamp, to handle numerical problems
return Math.acos(aH.clamp(i,-1,1))}/**
	* Computes the length of this 3D vector.
	*
	* @return {Number} The length of this 3D vector.
	*/length(){return Math.sqrt(this.squaredLength())}/**
	* Computes the squared length of this 3D vector.
	* Calling this method is faster than calling {@link Vector3#length},
	* since it avoids computing a square root.
	*
	* @return {Number} The squared length of this 3D vector.
	*/squaredLength(){return this.dot(this)}/**
	* Computes the manhattan length of this 3D vector.
	*
	* @return {Number} The manhattan length of this 3D vector.
	*/manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}/**
	* Computes the euclidean distance between this 3D vector and the given one.
	*
	* @param {Vector3} v - A 3D vector.
	* @return {Number} The euclidean distance between two 3D vectors.
	*/distanceTo(e){return Math.sqrt(this.squaredDistanceTo(e))}/**
	* Computes the squared euclidean distance between this 3D vector and the given one.
	* Calling this method is faster than calling {@link Vector3#distanceTo},
	* since it avoids computing a square root.
	*
	* @param {Vector3} v - A 3D vector.
	* @return {Number} The squared euclidean distance between two 3D vectors.
	*/squaredDistanceTo(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}/**
	* Computes the manhattan distance between this 3D vector and the given one.
	*
	* @param {Vector3} v - A 3D vector.
	* @return {Number} The manhattan distance between two 3D vectors.
	*/manhattanDistanceTo(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return Math.abs(t)+Math.abs(i)+Math.abs(n)}/**
	* Normalizes this 3D vector.
	*
	* @return {Vector3} A reference to this vector.
	*/normalize(){return this.divideScalar(this.length()||1)}/**
	* Multiplies the given 4x4 matrix with this 3D vector
	*
	* @param {Matrix4} m - A 4x4 matrix.
	* @return {Vector3} A reference to this vector.
	*/applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}/**
	* Multiplies the given quaternion with this 3D vector.
	*
	* @param {Quaternion} q - A quaternion.
	* @return {Vector3} A reference to this vector.
	*/applyRotation(e){let t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,a=e.z,o=e.w,l=o*t+s*n-a*i,h=o*i+a*t-r*n,u=o*n+r*i-s*t,c=-r*t-s*i-a*n;return(// calculate result * inverse quat
this.x=l*o+-(c*r)+-(h*a)- -(u*s),this.y=h*o+-(c*s)+-(u*r)- -(l*a),this.z=u*o+-(c*a)+-(l*s)- -(h*r),this)}/**
	* Extracts the position portion of the given 4x4 matrix and stores it in this 3D vector.
	*
	* @param {Matrix4} m - A 4x4 matrix.
	* @return {Vector3} A reference to this vector.
	*/extractPositionFromMatrix(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}/**
	* Transform this direction vector by the given 4x4 matrix.
	*
	* @param {Matrix4} m - A 4x4 matrix.
	* @return {Vector3} A reference to this vector.
	*/transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}/**
	* Sets the components of this 3D vector from a column of a 3x3 matrix.
	*
	* @param {Matrix3} m - A 3x3 matrix.
	* @param {Number} i - The index of the column.
	* @return {Vector3} A reference to this vector.
	*/fromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}/**
	* Sets the components of this 3D vector from a column of a 4x4 matrix.
	*
	* @param {Matrix3} m - A 4x4 matrix.
	* @param {Number} i - The index of the column.
	* @return {Vector3} A reference to this vector.
	*/fromMatrix4Column(e,t){return this.fromArray(e.elements,4*t)}/**
	* Sets the components of this 3D vector from a spherical coordinate.
	*
	* @param {Number} radius - The radius.
	* @param {Number} phi - The polar or inclination angle in radians. Should be in the range of (−π/2, +π/2].
	* @param {Number} theta - The azimuthal angle in radians. Should be in the range of (−π, +π].
	* @return {Vector3} A reference to this vector.
	*/fromSpherical(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}/**
	* Sets the components of this 3D vector from an array.
	*
	* @param {Array<Number>} array - An array.
	* @param {Number} offset - An optional offset.
	* @return {Vector3} A reference to this vector.
	*/fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this}/**
	* Copies all values of this 3D vector to the given array.
	*
	* @param {Array<Number>} array - An array.
	* @param {Number} offset - An optional offset.
	* @return {Array<Number>} The array with the 3D vector components.
	*/toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}/**
	* Returns true if the given 3D vector is deep equal with this 3D vector.
	*
	* @param {Vector3} v - The 3D vector to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}}const aW=new aG,aq=new aG(0,1,0),aj=new aG,aJ=new aG,aX=new aG,aY=new aG,aK=[2,2,1],aZ=[1,0,0];/**
* Class representing a 3x3 matrix. The elements of the matrix
* are stored in column-major order.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class aQ{/**
	* Constructs a new 3x3 identity matrix.
	*/constructor(){/**
		* The elements of the matrix in column-major order.
		* @type {Array<Number>}
		*/this.elements=[1,0,0,0,1,0,0,0,1]}/**
	* Sets the given values to this matrix. The arguments are in row-major order.
	*
	* @param {Number} n11 - An element of the matrix.
	* @param {Number} n12 - An element of the matrix.
	* @param {Number} n13 - An element of the matrix.
	* @param {Number} n21 - An element of the matrix.
	* @param {Number} n22 - An element of the matrix.
	* @param {Number} n23 - An element of the matrix.
	* @param {Number} n31 - An element of the matrix.
	* @param {Number} n32 - An element of the matrix.
	* @param {Number} n33 - An element of the matrix.
	* @return {Matrix3} A reference to this matrix.
	*/set(e,t,i,n,r,s,a,o,l){let h=this.elements;return h[0]=e,h[3]=t,h[6]=i,h[1]=n,h[4]=r,h[7]=s,h[2]=a,h[5]=o,h[8]=l,this}/**
	* Copies all values from the given matrix to this matrix.
	*
	* @param {Matrix3} m - The matrix to copy.
	* @return {Matrix3} A reference to this matrix.
	*/copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}/**
	* Creates a new matrix and copies all values from this matrix.
	*
	* @return {Matrix3} A new matrix.
	*/clone(){return new this.constructor().copy(this)}/**
	* Transforms this matrix to an identity matrix.
	*
	* @return {Matrix3} A reference to this matrix.
	*/identity(){return this.set(1,0,0,0,1,0,0,0,1),this}/**
	* Multiplies this matrix with the given matrix.
	*
	* @param {Matrix3} m - The matrix to multiply.
	* @return {Matrix3} A reference to this matrix.
	*/multiply(e){return this.multiplyMatrices(this,e)}/**
	* Multiplies this matrix with the given matrix.
	* So the order of the multiplication is switched compared to {@link Matrix3#multiply}.
	*
	* @param {Matrix3} m - The matrix to multiply.
	* @return {Matrix3} A reference to this matrix.
	*/premultiply(e){return this.multiplyMatrices(e,this)}/**
	* Multiplies two given matrices and stores the result in this matrix.
	*
	* @param {Matrix3} a - The first matrix of the operation.
	* @param {Matrix3} b - The second matrix of the operation.
	* @return {Matrix3} A reference to this matrix.
	*/multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],h=i[4],u=i[7],c=i[2],d=i[5],p=i[8],f=n[0],m=n[3],g=n[6],_=n[1],v=n[4],x=n[7],y=n[2],M=n[5],w=n[8];return r[0]=s*f+a*_+o*y,r[3]=s*m+a*v+o*M,r[6]=s*g+a*x+o*w,r[1]=l*f+h*_+u*y,r[4]=l*m+h*v+u*M,r[7]=l*g+h*x+u*w,r[2]=c*f+d*_+p*y,r[5]=c*m+d*v+p*M,r[8]=c*g+d*x+p*w,this}/**
	* Multiplies the given scalar with this matrix.
	*
	* @param {Number} s - The scalar to multiply.
	* @return {Matrix3} A reference to this matrix.
	*/multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}/**
	* Extracts the basis vectors and stores them to the given vectors.
	*
	* @param {Vector3} xAxis - The first result vector for the x-axis.
	* @param {Vector3} yAxis - The second result vector for the y-axis.
	* @param {Vector3} zAxis - The third result vector for the z-axis.
	* @return {Matrix3} A reference to this matrix.
	*/extractBasis(e,t,i){return e.fromMatrix3Column(this,0),t.fromMatrix3Column(this,1),i.fromMatrix3Column(this,2),this}/**
	* Makes a basis from the given vectors.
	*
	* @param {Vector3} xAxis - The first basis vector for the x-axis.
	* @param {Vector3} yAxis - The second basis vector for the y-axis.
	* @param {Vector3} zAxis - The third basis vector for the z-axis.
	* @return {Matrix3} A reference to this matrix.
	*/makeBasis(e,t,i){return this.set(e.x,t.x,i.x,e.y,t.y,i.y,e.z,t.z,i.z),this}/**
	* Creates a rotation matrix that orients an object to face towards a specified target direction.
	*
	* @param {Vector3} localForward - Specifies the forward direction in the local space of the object.
	* @param {Vector3} targetDirection - Specifies the desired world space direction the object should look at.
	* @param {Vector3} localUp - Specifies the up direction in the local space of the object.
	* @return {Matrix3} A reference to this matrix.
	*/lookAt(e,t,i){return aj.crossVectors(i,e).normalize(),// orthonormal linear basis A { localRight, localUp, localForward } for the object local space
aJ.crossVectors(aq,t).normalize(),0===aJ.squaredLength()&&(// handle case when it's not possible to build a basis from targetDirection and worldUp
// slightly shift targetDirection in order to avoid collinearity
aY.copy(t).addScalar(Number.EPSILON),aJ.crossVectors(aq,aY).normalize()),aX.crossVectors(t,aJ).normalize(),// orthonormal linear basis B { worldRight, perpWorldUp, targetDirection } for the desired target orientation
a$.makeBasis(aJ,aX,t),a0.makeBasis(aj,i,e),// construct a matrix that maps basis A to B
this.multiplyMatrices(a$,a0.transpose()),this}/**
	* Transposes this matrix.
	*
	* @return {Matrix3} A reference to this matrix.
	*/transpose(){let e;let t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}/**
	* Computes the element index according to the given column and row.
	*
	* @param {Number} column - Index of the column.
	* @param {Number} row - Index of the row.
	* @return {Number} The index of the element at the provided row and column.
	*/getElementIndex(e,t){return 3*e+t}/**
	* Computes the frobenius norm. It's the squareroot of the sum of all
	* squared matrix elements.
	*
	* @return {Number} The frobenius norm.
	*/frobeniusNorm(){let e=this.elements,t=0;for(let i=0;i<9;i++)t+=e[i]*e[i];return Math.sqrt(t)}/**
	* Computes the  "off-diagonal" frobenius norm. Assumes the matrix is symmetric.
	*
	* @return {Number} The "off-diagonal" frobenius norm.
	*/offDiagonalFrobeniusNorm(){let e=this.elements,t=0;for(let i=0;i<3;i++){let n=e[this.getElementIndex(aK[i],aZ[i])];t+=2*n*n;// multiply the result by two since the matrix is symetric
}return Math.sqrt(t)}/**
	* Computes the eigenvectors and eigenvalues.
	*
	* Reference: https://github.com/AnalyticalGraphicsInc/cesium/blob/411a1afbd36b72df64d7362de6aa934730447234/Source/Core/Matrix3.js#L1141 (Apache License 2.0)
	*
	* The values along the diagonal of the diagonal matrix are the eigenvalues.
	* The columns of the unitary matrix are the corresponding eigenvectors.
	*
	* @param {Object} result - An object with unitary and diagonal properties which are matrices onto which to store the result.
	* @return {Object} An object with unitary and diagonal properties which are matrices onto which to store the result.
	*/eigenDecomposition(e){let t=0,i=0;e.unitary.identity(),e.diagonal.copy(this);let n=e.unitary,r=e.diagonal,s=Number.EPSILON*r.frobeniusNorm();for(;i<10&&r.offDiagonalFrobeniusNorm()>s;)r.shurDecomposition(a$),a0.copy(a$).transpose(),r.multiply(a$),r.premultiply(a0),n.multiply(a$),++t>2&&(i++,t=0);return e}/**
	* Finds the largest off-diagonal term and then creates a matrix
	* which can be used to help reduce it.
	*
	* @param {Matrix3} result - The result matrix.
	* @return {Matrix3} The result matrix.
	*/shurDecomposition(e){let t=0,i=1,n=this.elements;for(let e=0;e<3;e++){let r=Math.abs(n[this.getElementIndex(aK[e],aZ[e])]);r>t&&(t=r,i=e)}let r=1,s=0,a=aZ[i],o=aK[i];if(Math.abs(n[this.getElementIndex(o,a)])>Number.EPSILON){let e;let t=n[this.getElementIndex(o,o)],i=n[this.getElementIndex(a,a)],l=n[this.getElementIndex(o,a)],h=(t-i)/2/l;r=1/Math.sqrt(1+(e=h<0?-1/(-h+Math.sqrt(1+h*h)):1/(h+Math.sqrt(1+h*h)))*e),s=e*r}return e.identity(),e.elements[this.getElementIndex(a,a)]=r,e.elements[this.getElementIndex(o,o)]=r,e.elements[this.getElementIndex(o,a)]=s,e.elements[this.getElementIndex(a,o)]=-s,e}/**
	* Creates a rotation matrix from the given quaternion.
	*
	* @param {Quaternion} q - A quaternion representing a rotation.
	* @return {Matrix3} A reference to this matrix.
	*/fromQuaternion(e){let t=this.elements,i=e.x,n=e.y,r=e.z,s=e.w,a=i+i,o=n+n,l=r+r,h=i*a,u=i*o,c=i*l,d=n*o,p=n*l,f=r*l,m=s*a,g=s*o,_=s*l;return t[0]=1-(d+f),t[3]=u-_,t[6]=c+g,t[1]=u+_,t[4]=1-(h+f),t[7]=p-m,t[2]=c-g,t[5]=p+m,t[8]=1-(h+d),this}/**
	* Sets the elements of this matrix by extracting the upper-left 3x3 portion
	* from a 4x4 matrix.
	*
	* @param {Matrix4} m - A 4x4 matrix.
	* @return {Matrix3} A reference to this matrix.
	*/fromMatrix4(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[4],t[4]=i[5],t[5]=i[6],t[6]=i[8],t[7]=i[9],t[8]=i[10],this}/**
	* Sets the elements of this matrix from an array.
	*
	* @param {Array<Number>} array - An array.
	* @param {Number} offset - An optional offset.
	* @return {Matrix3} A reference to this matrix.
	*/fromArray(e,t=0){let i=this.elements;for(let n=0;n<9;n++)i[n]=e[n+t];return this}/**
	* Copies all elements of this matrix to the given array.
	*
	* @param {Array<Number>} array - An array.
	* @param {Number} offset - An optional offset.
	* @return {Array<Number>} The array with the elements of the matrix.
	*/toArray(e,t=0){let i=this.elements;return e[t+0]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}/**
	* Returns true if the given matrix is deep equal with this matrix.
	*
	* @param {Matrix3} m - The matrix to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){let t=this.elements,i=e.elements;for(let e=0;e<9;e++)if(t[e]!==i[e])return!1;return!0}}const a$=new aQ,a0=new aQ,a1=new aQ,a3=new aG;/**
* Class representing a quaternion.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class a2{/**
	* Constructs a new quaternion with the given values.
	*
	* @param {Number} x - The x component.
	* @param {Number} y - The y component.
	* @param {Number} z - The z component.
	* @param {Number} w - The w component.
	*/constructor(e=0,t=0,i=0,n=1){/**
		* The x component.
		* @type {Number}
		*/this.x=e,/**
		* The y component.
		* @type {Number}
		*/this.y=t,/**
		* The z component.
		* @type {Number}
		*/this.z=i,/**
		* The w component.
		* @type {Number}
		*/this.w=n}/**
	* Sets the given values to this quaternion.
	*
	* @param {Number} x - The x component.
	* @param {Number} y - The y component.
	* @param {Number} z - The z component.
	* @param {Number} w - The w component.
	* @return {Quaternion} A reference to this quaternion.
	*/set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}/**
	* Copies all values from the given quaternion to this quaternion.
	*
	* @param {Quaternion} q - The quaternion to copy.
	* @return {Quaternion} A reference to this quaternion.
	*/copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}/**
	* Creates a new quaternion and copies all values from this quaternion.
	*
	* @return {Quaternion} A new quaternion.
	*/clone(){return new this.constructor().copy(this)}/**
	* Computes the inverse of this quaternion.
	*
	* @return {Quaternion} A reference to this quaternion.
	*/inverse(){return this.conjugate().normalize()}/**
	* Computes the conjugate of this quaternion.
	*
	* @return {Quaternion} A reference to this quaternion.
	*/conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}/**
	* Computes the dot product of this and the given quaternion.
	*
	* @param {Quaternion} q - The given quaternion.
	* @return {Quaternion} A reference to this quaternion.
	*/dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}/**
	* Computes the length of this quaternion.
	*
	* @return {Number} The length of this quaternion.
	*/length(){return Math.sqrt(this.squaredLength())}/**
	* Computes the squared length of this quaternion.
	*
	* @return {Number} The squared length of this quaternion.
	*/squaredLength(){return this.dot(this)}/**
	* Normalizes this quaternion.
	*
	* @return {Quaternion} A reference to this quaternion.
	*/normalize(){let e=this.length();return 0===e?(this.x=0,this.y=0,this.z=0,this.w=1):(e=1/e,this.x=this.x*e,this.y=this.y*e,this.z=this.z*e,this.w=this.w*e),this}/**
	* Multiplies this quaternion with the given quaternion.
	*
	* @param {Quaternion} q - The quaternion to multiply.
	* @return {Quaternion} A reference to this quaternion.
	*/multiply(e){return this.multiplyQuaternions(this,e)}/**
	* Multiplies the given quaternion with this quaternion.
	* So the order of the multiplication is switched compared to {@link Quaternion#multiply}.
	*
	* @param {Quaternion} q - The quaternion to multiply.
	* @return {Quaternion} A reference to this quaternion.
	*/premultiply(e){return this.multiplyQuaternions(e,this)}/**
	* Multiplies two given quaternions and stores the result in this quaternion.
	*
	* @param {Quaternion} a - The first quaternion of the operation.
	* @param {Quaternion} b - The second quaternion of the operation.
	* @return {Quaternion} A reference to this quaternion.
	*/multiplyQuaternions(e,t){let i=e.x,n=e.y,r=e.z,s=e.w,a=t.x,o=t.y,l=t.z,h=t.w;return this.x=i*h+s*a+n*l-r*o,this.y=n*h+s*o+r*a-i*l,this.z=r*h+s*l+i*o-n*a,this.w=s*h-i*a-n*o-r*l,this}/**
	* Computes the shortest angle between two rotation defined by this quaternion and the given one.
	*
	* @param {Quaternion} q - The given quaternion.
	* @return {Number} The angle in radians.
	*/angleTo(e){return 2*Math.acos(Math.abs(aH.clamp(this.dot(e),-1,1)))}/**
	* Transforms this rotation defined by this quaternion towards the target rotation
	* defined by the given quaternion by the given angular step. The rotation will not overshoot.
	*
	* @param {Quaternion} q - The target rotation.
	* @param {Number} step - The maximum step in radians.
	* @param {Number} tolerance - A tolerance value in radians to tweak the result
	* when both rotations are considered to be equal.
	* @return {Boolean} Whether the given quaternion already represents the target rotation.
	*/rotateTo(e,t,i=1e-4){let n=this.angleTo(e);return n<i||(this.slerp(e,Math.min(1,t/n)),!1)}/**
	* Creates a quaternion that orients an object to face towards a specified target direction.
	*
	* @param {Vector3} localForward - Specifies the forward direction in the local space of the object.
	* @param {Vector3} targetDirection - Specifies the desired world space direction the object should look at.
	* @param {Vector3} localUp - Specifies the up direction in the local space of the object.
	* @return {Quaternion} A reference to this quaternion.
	*/lookAt(e,t,i){a1.lookAt(e,t,i),this.fromMatrix3(a1)}/**
	* Spherically interpolates between this quaternion and the given quaternion by t.
	* The parameter t is clamped to the range [0, 1].
	*
	* @param {Quaternion} q - The target rotation.
	* @param {Number} t - The interpolation parameter.
	* @return {Quaternion} A reference to this quaternion.
	*/slerp(e,t){if(0===t)return this;if(1===t)return this.copy(e);let i=this.x,n=this.y,r=this.z,s=this.w,a=s*e.w+i*e.x+n*e.y+r*e.z;if(a<0?(this.w=-e.w,this.x=-e.x,this.y=-e.y,this.z=-e.z,a=-a):this.copy(e),a>=1)return this.w=s,this.x=i,this.y=n,this.z=r,this;let o=Math.sqrt(1-a*a);if(.001>Math.abs(o))return this.w=.5*(s+this.w),this.x=.5*(i+this.x),this.y=.5*(n+this.y),this.z=.5*(r+this.z),this;let l=Math.atan2(o,a),h=Math.sin((1-t)*l)/o,u=Math.sin(t*l)/o;return this.w=s*h+this.w*u,this.x=i*h+this.x*u,this.y=n*h+this.y*u,this.z=r*h+this.z*u,this}/**
	* Extracts the rotation of the given 4x4 matrix and stores it in this quaternion.
	*
	* @param {Matrix4} m - A 4x4 matrix.
	* @return {Quaternion} A reference to this quaternion.
	*/extractRotationFromMatrix(e){let t=a1.elements,i=e.elements,n=1/a3.fromMatrix4Column(e,0).length(),r=1/a3.fromMatrix4Column(e,1).length(),s=1/a3.fromMatrix4Column(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=i[4]*r,t[4]=i[5]*r,t[5]=i[6]*r,t[6]=i[8]*s,t[7]=i[9]*s,t[8]=i[10]*s,this.fromMatrix3(a1),this}/**
	* Sets the components of this quaternion from the given euler angle (YXZ order).
	*
	* @param {Number} x - Rotation around x axis in radians.
	* @param {Number} y - Rotation around y axis in radians.
	* @param {Number} z - Rotation around z axis in radians.
	* @return {Quaternion} A reference to this quaternion.
	*/fromEuler(e,t,i){// from 3D Math Primer for Graphics and Game Development
// 8.7.5 Converting Euler Angles to a Quaternion
// assuming YXZ (head/pitch/bank or yaw/pitch/roll) order
let n=Math.cos(t/2),r=Math.cos(e/2),s=Math.cos(i/2),a=Math.sin(t/2),o=Math.sin(e/2),l=Math.sin(i/2);return this.w=n*r*s+a*o*l,this.x=n*o*s+a*r*l,this.y=a*r*s-n*o*l,this.z=n*r*l-a*o*s,this}/**
	* Returns an euler angel (YXZ order) representation of this quaternion.
	*
	* @param {Object} euler - The resulting euler angles.
	* @return {Object} The resulting euler angles.
	*/toEuler(e){// from 3D Math Primer for Graphics and Game Development
// 8.7.6 Converting a Quaternion to Euler Angles
// extract pitch
let t=-2*(this.y*this.z-this.x*this.w);return Math.abs(t)>.9999?(// looking straight up or down
e.x=.5*Math.PI*t,e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=0):(e.x=Math.asin(t),e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=Math.atan2(this.x*this.y+this.w*this.z,.5-this.x*this.x-this.z*this.z)),e}/**
	* Sets the components of this quaternion from the given 3x3 rotation matrix.
	*
	* @param {Matrix3} m - The rotation matrix.
	* @return {Quaternion} A reference to this quaternion.
	*/fromMatrix3(e){let t=e.elements,i=t[0],n=t[3],r=t[6],s=t[1],a=t[4],o=t[7],l=t[2],h=t[5],u=t[8],c=i+a+u;if(c>0){let e=.5/Math.sqrt(c+1);this.w=.25/e,this.x=(h-o)*e,this.y=(r-l)*e,this.z=(s-n)*e}else if(i>a&&i>u){let e=2*Math.sqrt(1+i-a-u);this.w=(h-o)/e,this.x=.25*e,this.y=(n+s)/e,this.z=(r+l)/e}else if(a>u){let e=2*Math.sqrt(1+a-i-u);this.w=(r-l)/e,this.x=(n+s)/e,this.y=.25*e,this.z=(o+h)/e}else{let e=2*Math.sqrt(1+u-i-a);this.w=(s-n)/e,this.x=(r+l)/e,this.y=(o+h)/e,this.z=.25*e}return this}/**
	* Sets the components of this quaternion from an array.
	*
	* @param {Array<Number>} array - An array.
	* @param {Number} offset - An optional offset.
	* @return {Quaternion} A reference to this quaternion.
	*/fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}/**
	* Copies all values of this quaternion to the given array.
	*
	* @param {Array<Number>} array - An array.
	* @param {Number} offset - An optional offset.
	* @return {Array<Number>} The array with the quaternion components.
	*/toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}/**
	* Returns true if the given quaternion is deep equal with this quaternion.
	*
	* @param {Quaternion} q - The quaternion to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}}/**
* Class representing a 4x4 matrix. The elements of the matrix
* are stored in column-major order.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class a5{/**
	* Constructs a new 4x4 identity matrix.
	*/constructor(){/**
		* The elements of the matrix in column-major order.
		* @type {Array<Number>}
		*/this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}/**
	* Sets the given values to this matrix. The arguments are in row-major order.
	*
	* @param {Number} n11 - An element of the matrix.
	* @param {Number} n12 - An element of the matrix.
	* @param {Number} n13 - An element of the matrix.
	* @param {Number} n14 - An element of the matrix.
	* @param {Number} n21 - An element of the matrix.
	* @param {Number} n22 - An element of the matrix.
	* @param {Number} n23 - An element of the matrix.
	* @param {Number} n24 - An element of the matrix.
	* @param {Number} n31 - An element of the matrix.
	* @param {Number} n32 - An element of the matrix.
	* @param {Number} n33 - An element of the matrix.
	* @param {Number} n34 - An element of the matrix.
	* @param {Number} n41 - An element of the matrix.
	* @param {Number} n42 - An element of the matrix.
	* @param {Number} n43 - An element of the matrix.
	* @param {Number} n44 - An element of the matrix.
	* @return {Matrix4} A reference to this matrix.
	*/set(e,t,i,n,r,s,a,o,l,h,u,c,d,p,f,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=h,g[10]=u,g[14]=c,g[3]=d,g[7]=p,g[11]=f,g[15]=m,this}/**
	* Copies all values from the given matrix to this matrix.
	*
	* @param {Matrix4} m - The matrix to copy.
	* @return {Matrix4} A reference to this matrix.
	*/copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}/**
	* Creates a new matrix and copies all values from this matrix.
	*
	* @return {Matrix4} A new matrix.
	*/clone(){return new this.constructor().copy(this)}/**
	* Transforms this matrix to an identity matrix.
	*
	* @return {Matrix4} A reference to this matrix.
	*/identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}/**
	* Multiplies this matrix with the given matrix.
	*
	* @param {Matrix4} m - The matrix to multiply.
	* @return {Matrix4} A reference to this matrix.
	*/multiply(e){return this.multiplyMatrices(this,e)}/**
	* Multiplies this matrix with the given matrix.
	* So the order of the multiplication is switched compared to {@link Matrix4#multiply}.
	*
	* @param {Matrix4} m - The matrix to multiply.
	* @return {Matrix4} A reference to this matrix.
	*/premultiply(e){return this.multiplyMatrices(e,this)}/**
	* Multiplies two given matrices and stores the result in this matrix.
	*
	* @param {Matrix4} a - The first matrix of the operation.
	* @param {Matrix4} b - The second matrix of the operation.
	* @return {Matrix4} A reference to this matrix.
	*/multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,s=i[0],a=i[4],o=i[8],l=i[12],h=i[1],u=i[5],c=i[9],d=i[13],p=i[2],f=i[6],m=i[10],g=i[14],_=i[3],v=i[7],x=i[11],y=i[15],M=n[0],w=n[4],S=n[8],b=n[12],T=n[1],A=n[5],E=n[9],C=n[13],R=n[2],P=n[6],L=n[10],D=n[14],O=n[3],I=n[7],N=n[11],z=n[15];return r[0]=s*M+a*T+o*R+l*O,r[4]=s*w+a*A+o*P+l*I,r[8]=s*S+a*E+o*L+l*N,r[12]=s*b+a*C+o*D+l*z,r[1]=h*M+u*T+c*R+d*O,r[5]=h*w+u*A+c*P+d*I,r[9]=h*S+u*E+c*L+d*N,r[13]=h*b+u*C+c*D+d*z,r[2]=p*M+f*T+m*R+g*O,r[6]=p*w+f*A+m*P+g*I,r[10]=p*S+f*E+m*L+g*N,r[14]=p*b+f*C+m*D+g*z,r[3]=_*M+v*T+x*R+y*O,r[7]=_*w+v*A+x*P+y*I,r[11]=_*S+v*E+x*L+y*N,r[15]=_*b+v*C+x*D+y*z,this}/**
	* Multiplies the given scalar with this matrix.
	*
	* @param {Number} s - The scalar to multiply.
	* @return {Matrix4} A reference to this matrix.
	*/multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}/**
	* Extracts the basis vectors and stores them to the given vectors.
	*
	* @param {Vector3} xAxis - The first result vector for the x-axis.
	* @param {Vector3} yAxis - The second result vector for the y-axis.
	* @param {Vector3} zAxis - The third result vector for the z-axis.
	* @return {Matrix4} A reference to this matrix.
	*/extractBasis(e,t,i){return e.fromMatrix4Column(this,0),t.fromMatrix4Column(this,1),i.fromMatrix4Column(this,2),this}/**
	* Makes a basis from the given vectors.
	*
	* @param {Vector3} xAxis - The first basis vector for the x-axis.
	* @param {Vector3} yAxis - The second basis vector for the y-axis.
	* @param {Vector3} zAxis - The third basis vector for the z-axis.
	* @return {Matrix4} A reference to this matrix.
	*/makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}/**
	* Composes a matrix from the given position, quaternion and scale.
	*
	* @param {Vector3} position - A vector representing a position in 3D space.
	* @param {Quaternion} rotation - A quaternion representing a rotation.
	* @param {Vector3} scale - A vector representing a 3D scaling.
	* @return {Matrix4} A reference to this matrix.
	*/compose(e,t,i){return this.fromQuaternion(t),this.scale(i),this.setPosition(e),this}/**
	* Scales this matrix by the given 3D vector.
	*
	* @param {Vector3} v - A 3D vector representing a scaling.
	* @return {Matrix4} A reference to this matrix.
	*/scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}/**
	* Sets the translation part of the 4x4 matrix to the given position vector.
	*
	* @param {Vector3} v - A 3D vector representing a position.
	* @return {Matrix4} A reference to this matrix.
	*/setPosition(e){let t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this}/**
	* Transposes this matrix.
	*
	* @return {Matrix4} A reference to this matrix.
	*/transpose(){let e;let t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}/**
	* Computes the inverse of this matrix and stored the result in the given matrix.
	*
	* You can not invert a matrix with a determinant of zero. If you attempt this, the method returns a zero matrix instead.
	*
	* @param {Matrix4} m - The result matrix.
	* @return {Matrix4} The result matrix.
	*/getInverse(e){let t=this.elements,i=e.elements,n=t[0],r=t[1],s=t[2],a=t[3],o=t[4],l=t[5],h=t[6],u=t[7],c=t[8],d=t[9],p=t[10],f=t[11],m=t[12],g=t[13],_=t[14],v=t[15],x=d*_*u-g*p*u+g*h*f-l*_*f-d*h*v+l*p*v,y=m*p*u-c*_*u-m*h*f+o*_*f+c*h*v-o*p*v,M=c*g*u-m*d*u+m*l*f-o*g*f-c*l*v+o*d*v,w=m*d*h-c*g*h-m*l*p+o*g*p+c*l*_-o*d*_,S=n*x+r*y+s*M+a*w;if(0===S)return e.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/S;return i[0]=x*b,i[1]=(g*p*a-d*_*a-g*s*f+r*_*f+d*s*v-r*p*v)*b,i[2]=(l*_*a-g*h*a+g*s*u-r*_*u-l*s*v+r*h*v)*b,i[3]=(d*h*a-l*p*a-d*s*u+r*p*u+l*s*f-r*h*f)*b,i[4]=y*b,i[5]=(c*_*a-m*p*a+m*s*f-n*_*f-c*s*v+n*p*v)*b,i[6]=(m*h*a-o*_*a-m*s*u+n*_*u+o*s*v-n*h*v)*b,i[7]=(o*p*a-c*h*a+c*s*u-n*p*u-o*s*f+n*h*f)*b,i[8]=M*b,i[9]=(m*d*a-c*g*a-m*r*f+n*g*f+c*r*v-n*d*v)*b,i[10]=(o*g*a-m*l*a+m*r*u-n*g*u-o*r*v+n*l*v)*b,i[11]=(c*l*a-o*d*a-c*r*u+n*d*u+o*r*f-n*l*f)*b,i[12]=w*b,i[13]=(c*g*s-m*d*s+m*r*p-n*g*p-c*r*_+n*d*_)*b,i[14]=(m*l*s-o*g*s-m*r*h+n*g*h+o*r*_-n*l*_)*b,i[15]=(o*d*s-c*l*s+c*r*h-n*d*h-o*r*p+n*l*p)*b,e}/**
	* Computes the maximum scale value for all three axis.
	*
	* @return {Number} The maximum scale value.
	*/getMaxScale(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}/**
	* Uses the given quaternion to transform the upper left 3x3 part to a rotation matrix.
	* Other parts of the matrix are equal to the identiy matrix.
	*
	* @param {Quaternion} q - A quaternion representing a rotation.
	* @return {Matrix4} A reference to this matrix.
	*/fromQuaternion(e){let t=this.elements,i=e.x,n=e.y,r=e.z,s=e.w,a=i+i,o=n+n,l=r+r,h=i*a,u=i*o,c=i*l,d=n*o,p=n*l,f=r*l,m=s*a,g=s*o,_=s*l;return t[0]=1-(d+f),t[4]=u-_,t[8]=c+g,t[1]=u+_,t[5]=1-(h+f),t[9]=p-m,t[2]=c-g,t[6]=p+m,t[10]=1-(h+d),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}/**
	* Sets the upper-left 3x3 portion of this matrix by the given 3x3 matrix. Other
	* parts of the matrix are equal to the identiy matrix.
	*
	* @param {Matrix3} m - A 3x3 matrix.
	* @return {Matrix4} A reference to this matrix.
	*/fromMatrix3(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=0,t[4]=i[3],t[5]=i[4],t[6]=i[5],t[7]=0,t[8]=i[6],t[9]=i[7],t[10]=i[8],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}/**
	* Sets the elements of this matrix from an array.
	*
	* @param {Array<Number>} array - An array.
	* @param {Number} offset - An optional offset.
	* @return {Matrix4} A reference to this matrix.
	*/fromArray(e,t=0){let i=this.elements;for(let n=0;n<16;n++)i[n]=e[n+t];return this}/**
	* Copies all elements of this matrix to the given array.
	*
	* @param {Array<Number>} array - An array.
	* @param {Number} offset - An optional offset.
	* @return {Array<Number>} The array with the elements of the matrix.
	*/toArray(e,t=0){let i=this.elements;return e[t+0]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}/**
	* Returns true if the given matrix is deep equal with this matrix.
	*
	* @param {Matrix4} m - The matrix to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){let t=this.elements,i=e.elements;for(let e=0;e<16;e++)if(t[e]!==i[e])return!1;return!0}}const a4=new a2,a6=new aG,a8=new aG,a7=new a2;/**
* Base class for all game entities.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class a9{/**
	* Constructs a new game entity.
	*/constructor(){/**
		* The name of this game entity.
		* @type {String}
		*/this.name="",/**
		* Whether this game entity is active or not.
		* @type {Boolean}
		* @default true
		*/this.active=!0,/**
		* The child entities of this game entity.
		* @type {Array<GameEntity>}
		*/this.children=[],/**
		* A reference to the parent entity of this game entity.
		* Automatically set when added to a {@link GameEntity}.
		* @type {?GameEntity}
		* @default null
		* @readonly
		*/this.parent=null,/**
		* A list of neighbors of this game entity.
		* @type {Array<GameEntity>}
		* @readonly
		*/this.neighbors=[],/**
		* Game entities within this radius are considered as neighbors of this entity.
		* @type {Number}
		* @default 1
		*/this.neighborhoodRadius=1,/**
		* Whether the neighborhood of this game entity is updated or not.
		* @type {Boolean}
		* @default false
		*/this.updateNeighborhood=!1,/**
		* The position of this game entity.
		* @type {Vector3}
		*/this.position=new aG,/**
		* The rotation of this game entity.
		* @type {Quaternion}
		*/this.rotation=new a2,/**
		* The scaling of this game entity.
		* @type {Vector3}
		*/this.scale=new aG(1,1,1),/**
		* The default forward vector of this game entity.
		* @type {Vector3}
		* @default (0,0,1)
		*/this.forward=new aG(0,0,1),/**
		* The default up vector of this game entity.
		* @type {Vector3}
		* @default (0,1,0)
		*/this.up=new aG(0,1,0),/**
		* The bounding radius of this game entity in world units.
		* @type {Number}
		* @default 0
		*/this.boundingRadius=0,/**
		* The maximum turn rate of this game entity in radians per seconds.
		* The only method that uses this property right now is {@link GameEntity#rotateTo}.
		* @type {Number}
		* @default π
		*/this.maxTurnRate=Math.PI,/**
		* Whether the entity can activate a trigger or not.
		* @type {Boolean}
		* @default true
		*/this.canActivateTrigger=!0,/**
		* A reference to the entity manager of this game entity.
		* Automatically set when added to an {@link EntityManager}.
		* @type {EntityManager}
		* @default null
		* @readonly
		*/this.manager=null,// private properties
// local transformation matrix. no part of the public API due to caching
this._localMatrix=new a5,// internal world matrix reference (only accessible via a getter)
this._worldMatrix=new a5,// per-entity cache in order to avoid unnecessary matrix calculations
this._cache={position:new aG,rotation:new a2,scale:new aG(1,1,1)},// render component
this._renderComponent=null,this._renderComponentCallback=null,// flag to indicate whether the entity was updated by its manager at least once or not
this._started=!1,//
this._uuid=null,// if set to true, it means the world matrix requires a recomputation
this._worldMatrixDirty=!1}/**
	* A transformation matrix representing the world space of this game entity.
	* @type {Matrix4}
	* @readonly
	*/get worldMatrix(){return this._updateWorldMatrix(),this._worldMatrix}/**
	* Unique ID, primarily used in context of serialization/deserialization.
	* @type {String}
	* @readonly
	*/get uuid(){return null===this._uuid&&(this._uuid=aH.generateUUID()),this._uuid}/**
	* Executed when this game entity is updated for the first time by its {@link EntityManager}.
	*
	* @return {GameEntity} A reference to this game entity.
	*/start(){return this}/**
	* Updates the internal state of this game entity. Normally called by {@link EntityManager#update}
	* in each simulation step.
	*
	* @param {Number} delta - The time delta.
	* @return {GameEntity} A reference to this game entity.
	*/update(){return this}/**
	* Adds a game entity as a child to this game entity.
	*
	* @param {GameEntity} entity - The game entity to add.
	* @return {GameEntity} A reference to this game entity.
	*/add(e){return null!==e.parent&&e.parent.remove(e),this.children.push(e),e.parent=this,this}/**
	* Removes a game entity as a child from this game entity.
	*
	* @param {GameEntity} entity - The game entity to remove.
	* @return {GameEntity} A reference to this game entity.
	*/remove(e){let t=this.children.indexOf(e);return this.children.splice(t,1),e.parent=null,this}/**
	* Computes the current direction (forward) vector of this game entity
	* and stores the result in the given vector.
	*
	* @param {Vector3} result - The direction vector of this game entity.
	* @return {Vector3} The direction vector of this game entity.
	*/getDirection(e){return e.copy(this.forward).applyRotation(this.rotation).normalize()}/**
	* Directly rotates the entity so it faces the given target position.
	*
	* @param {Vector3} target - The target position.
	* @return {GameEntity} A reference to this game entity.
	*/lookAt(e){let t=this.parent;return null!==t?(this.getWorldPosition(a8),a6.subVectors(e,a8).normalize(),this.rotation.lookAt(this.forward,a6,this.up),a7.extractRotationFromMatrix(t.worldMatrix).inverse(),this.rotation.premultiply(a7)):(a6.subVectors(e,this.position).normalize(),this.rotation.lookAt(this.forward,a6,this.up)),this}/**
	* Given a target position, this method rotates the entity by an amount not
	* greater than {@link GameEntity#maxTurnRate} until it directly faces the target.
	*
	* @param {Vector3} target - The target position.
	* @param {Number} delta - The time delta.
	* @param {Number} tolerance - A tolerance value in radians to tweak the result
	* when a game entity is considered to face a target.
	* @return {Boolean} Whether the entity is faced to the target or not.
	*/rotateTo(e,t,i=1e-4){let n=this.parent;return null!==n?(this.getWorldPosition(a8),a6.subVectors(e,a8).normalize(),a4.lookAt(this.forward,a6,this.up),a7.extractRotationFromMatrix(n.worldMatrix).inverse(),a4.premultiply(a7)):(a6.subVectors(e,this.position).normalize(),a4.lookAt(this.forward,a6,this.up)),this.rotation.rotateTo(a4,this.maxTurnRate*t,i)}/**
	* Computes the current direction (forward) vector of this game entity
	* in world space and stores the result in the given vector.
	*
	* @param {Vector3} result - The direction vector of this game entity in world space.
	* @return {Vector3} The direction vector of this game entity in world space.
	*/getWorldDirection(e){return a7.extractRotationFromMatrix(this.worldMatrix),e.copy(this.forward).applyRotation(a7).normalize()}/**
	* Computes the current position of this game entity in world space and
	* stores the result in the given vector.
	*
	* @param {Vector3} result - The position of this game entity in world space.
	* @return {Vector3} The position of this game entity in world space.
	*/getWorldPosition(e){return e.extractPositionFromMatrix(this.worldMatrix)}/**
	* Sets a renderable component of a 3D engine with a sync callback for this game entity.
	*
	* @param {Object} renderComponent - A renderable component of a 3D engine.
	* @param {Function} callback - A callback that can be used to sync this game entity with the renderable component.
	* @return {GameEntity} A reference to this game entity.
	*/setRenderComponent(e,t){return this._renderComponent=e,this._renderComponentCallback=t,this}/**
	* Holds the implementation for the message handling of this game entity.
	*
	* @param {Telegram} telegram - The telegram with the message data.
	* @return {Boolean} Whether the message was processed or not.
	*/handleMessage(){return!1}/**
	* Holds the implementation for the line of sight test of this game entity.
	* This method is used by {@link Vision#visible} in order to determine whether
	* this game entity blocks the given line of sight or not. Implement this method
	* when your game entity acts as an obstacle.
	*
	* @param {Ray} ray - The ray that represents the line of sight.
	* @param {Vector3} intersectionPoint - The intersection point.
	* @return {Vector3} The intersection point.
	*/lineOfSightTest(){return null}/**
	* Sends a message with the given data to the specified receiver.
	*
	* @param {GameEntity} receiver - The receiver.
	* @param {String} message - The actual message.
	* @param {Number} delay - A time value in millisecond used to delay the message dispatching.
	* @param {Object} data - An object for custom data.
	* @return {GameEntity} A reference to this game entity.
	*/sendMessage(e,t,i=0,n=null){return null!==this.manager?this.manager.sendMessage(this,e,t,i,n):ak.error("YUKA.GameEntity: The game entity must be added to a manager in order to send a message."),this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){return{type:this.constructor.name,uuid:this.uuid,name:this.name,active:this.active,children:oe(this.children),parent:null!==this.parent?this.parent.uuid:null,neighbors:oe(this.neighbors),neighborhoodRadius:this.neighborhoodRadius,updateNeighborhood:this.updateNeighborhood,position:this.position.toArray([]),rotation:this.rotation.toArray([]),scale:this.scale.toArray([]),forward:this.forward.toArray([]),up:this.up.toArray([]),boundingRadius:this.boundingRadius,maxTurnRate:this.maxTurnRate,canActivateTrigger:this.canActivateTrigger,worldMatrix:this.worldMatrix.toArray([]),_localMatrix:this._localMatrix.toArray([]),_cache:{position:this._cache.position.toArray([]),rotation:this._cache.rotation.toArray([]),scale:this._cache.scale.toArray([])},_started:this._started}}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {GameEntity} A reference to this game entity.
	*/fromJSON(e){return this.name=e.name,this.active=e.active,this.neighborhoodRadius=e.neighborhoodRadius,this.updateNeighborhood=e.updateNeighborhood,this.position.fromArray(e.position),this.rotation.fromArray(e.rotation),this.scale.fromArray(e.scale),this.forward.fromArray(e.forward),this.up.fromArray(e.up),this.boundingRadius=e.boundingRadius,this.maxTurnRate=e.maxTurnRate,this.canActivateTrigger=e.canActivateTrigger,this.children=e.children.slice(),this.neighbors=e.neighbors.slice(),this.parent=e.parent,this._localMatrix.fromArray(e._localMatrix),this._worldMatrix.fromArray(e.worldMatrix),this._cache.position.fromArray(e._cache.position),this._cache.rotation.fromArray(e._cache.rotation),this._cache.scale.fromArray(e._cache.scale),this._started=e._started,this._uuid=e.uuid,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {GameEntity} A reference to this game entity.
	*/resolveReferences(e){//
let t=this.neighbors;for(let i=0,n=t.length;i<n;i++)t[i]=e.get(t[i]);//
let i=this.children;for(let t=0,n=i.length;t<n;t++)i[t]=e.get(i[t]);return(//
this.parent=e.get(this.parent)||null,this)}// Updates the transformation matrix representing the local space.
_updateMatrix(){let e=this._cache;e.position.equals(this.position)&&e.rotation.equals(this.rotation)&&e.scale.equals(this.scale)||(this._localMatrix.compose(this.position,this.rotation,this.scale),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale),this._worldMatrixDirty=!0)}_updateWorldMatrix(){let e=this.parent;if(null!==e&&e._updateWorldMatrix(),this._updateMatrix(),!0===this._worldMatrixDirty){null===e?this._worldMatrix.copy(this._localMatrix):this._worldMatrix.multiplyMatrices(this.parent._worldMatrix,this._localMatrix),this._worldMatrixDirty=!1;// invalidate world matrices of children
let t=this.children;for(let e=0,i=t.length;e<i;e++){let i=t[e];i._worldMatrixDirty=!0}}}// deprecated
updateWorldMatrix(){return(// this warning will be removed with v1.0.0
console.warn("GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."),this)}}function oe(e){let t=[];for(let i=0,n=e.length;i<n;i++)t.push(e[i].uuid);return t}const ot=new aG,oi=new aG;/**
* Class representing moving game entities.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments GameEntity
*/class on extends a9{/**
	* Constructs a new moving entity.
	*/constructor(){super(),/**
		* The velocity of this game entity.
		* @type {Vector3}
		*/this.velocity=new aG,/**
		* The maximum speed at which this game entity may travel.
		* @type {Number}
		* @default 1
		*/this.maxSpeed=1,/**
		* Whether the orientation of this game entity will be updated based on the velocity or not.
		* @type {Boolean}
		* @default true
		*/this.updateOrientation=!0}/**
	* Updates the internal state of this game entity.
	*
	* @param {Number} delta - The time delta.
	* @return {MovingEntity} A reference to this moving entity.
	*/update(e){return this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),// calculate displacement
ot.copy(this.velocity).multiplyScalar(e),// calculate target position
oi.copy(this.position).add(ot),this.updateOrientation&&this.getSpeedSquared()>1e-8&&this.lookAt(oi),// update position
this.position.copy(oi),this}/**
	* Returns the current speed of this game entity.
	*
	* @return {Number} The current speed.
	*/getSpeed(){return this.velocity.length()}/**
	* Returns the current speed in squared space of this game entity.
	*
	* @return {Number} The current speed in squared space.
	*/getSpeedSquared(){return this.velocity.squaredLength()}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.velocity=this.velocity.toArray([]),e.maxSpeed=this.maxSpeed,e.updateOrientation=this.updateOrientation,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {MovingEntity} A reference to this moving entity.
	*/fromJSON(e){return super.fromJSON(e),this.velocity.fromArray(e.velocity),this.maxSpeed=e.maxSpeed,this.updateOrientation=e.updateOrientation,this}}/**
* Base class for all concrete steering behaviors. They produce a force that describes
* where an agent should move and how fast it should travel to get there.
*
* Note: All built-in steering behaviors assume a {@link Vehicle#mass} of one. Different values can lead to an unexpected results.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class or{/**
	* Constructs a new steering behavior.
	*/constructor(){/**
		* Whether this steering behavior is active or not.
		* @type {Boolean}
		* @default true
		*/this.active=!0,/**
		* Can be used to tweak the amount that a steering force contributes to the total steering force.
		* @type {Number}
		* @default 1
		*/this.weight=1}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(){}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){return{type:this.constructor.name,active:this.active,weight:this.weight}}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {SteeringBehavior} A reference to this steering behavior.
	*/fromJSON(e){return this.active=e.active,this.weight=e.weight,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {SteeringBehavior} A reference to this steering behavior.
	*/resolveReferences(){}}const os=new aG,oa=new aG;/**
* This steering behavior produces a force that keeps a vehicle’s heading aligned with its neighbors.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class oo extends or{/**
	* Constructs a new alignment behavior.
	*/constructor(){super()}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){os.set(0,0,0);let i=e.neighbors;// iterate over all neighbors to calculate the average direction vector
for(let e=0,t=i.length;e<t;e++){let t=i[e];t.getDirection(oa),os.add(oa)}return i.length>0&&(os.divideScalar(i.length),// produce a force to align the vehicle's heading
e.getDirection(oa),t.subVectors(os,oa)),t}}const ol=new aG,oh=new aG;/**
* This steering behavior produces a force that directs an agent toward a target position.
* Unlike {@link SeekBehavior}, it decelerates so the agent comes to a gentle halt at the target position.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class ou extends or{/**
	* Constructs a new arrive behavior.
	*
	* @param {Vector3} target - The target vector.
	* @param {Number} deceleration - The amount of deceleration.
	* @param {Number} tolerance - A tolerance value in world units to prevent the vehicle from overshooting its target.
	*/constructor(e=new aG,t=3,i=0){super(),/**
		* The target vector.
		* @type {Vector3}
		*/this.target=e,/**
		* The amount of deceleration.
		* @type {Number}
		* @default 3
		*/this.deceleration=t,/**
		* A tolerance value in world units to prevent the vehicle from overshooting its target.
		* @type {Number}
		* @default 0
		*/this.tolerance=i}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.target,n=this.deceleration;oh.subVectors(i,e.position);let r=oh.length();if(r>this.tolerance){// calculate the speed required to reach the target given the desired deceleration
let t=r/n;// make sure the speed does not exceed the max
t=Math.min(t,e.maxSpeed),// from here proceed just like "seek" except we don't need to normalize
// the "displacement" vector because we have already gone to the trouble
// of calculating its length.
ol.copy(oh).multiplyScalar(t/r)}else ol.set(0,0,0);return t.subVectors(ol,e.velocity)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.target=this.target.toArray([]),e.deceleration=this.deceleration,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {ArriveBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.deceleration=e.deceleration,this}}const oc=new aG;/**
* This steering behavior produces a force that directs an agent toward a target position.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class od extends or{/**
	* Constructs a new seek behavior.
	*
	* @param {Vector3} target - The target vector.
	*/constructor(e=new aG){super(),/**
		* The target vector.
		* @type {Vector3}
		*/this.target=e}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.target;// The steering force returned by this method is the force required,
// which when added to the agent’s current velocity vector gives the desired velocity.
// To achieve this you simply subtract the agent’s current velocity from the desired velocity.
return(// First the desired velocity is calculated.
// This is the velocity the agent would need to reach the target position in an ideal world.
// It represents the vector from the agent to the target,
// scaled to be the length of the maximum possible speed of the agent.
oc.subVectors(i,e.position).normalize(),oc.multiplyScalar(e.maxSpeed),t.subVectors(oc,e.velocity))}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.target=this.target.toArray([]),e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {SeekBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this}}const op=new aG;/**
* This steering produces a steering force that moves a vehicle toward the center of mass of its neighbors.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class of extends or{/**
	* Constructs a new cohesion behavior.
	*/constructor(){super(),// internal behaviors
this._seek=new od}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){op.set(0,0,0);let i=e.neighbors;// iterate over all neighbors to calculate the center of mass
for(let e=0,t=i.length;e<t;e++){let t=i[e];op.add(t.position)}return i.length>0&&(op.divideScalar(i.length),// seek to it
this._seek.target=op,this._seek.calculate(e,t),// the magnitude of cohesion is usually much larger than separation
// or alignment so it usually helps to normalize it
t.normalize()),t}}const om=new aG;/**
* This steering behavior produces a force that steers an agent away from a target position.
* It's the opposite of {@link SeekBehavior}.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class og extends or{/**
	* Constructs a new flee behavior.
	*
	* @param {Vector3} target - The target vector.
	* @param {Number} panicDistance - The agent only flees from the target if it is inside this radius.
	*/constructor(e=new aG,t=10){super(),/**
		* The target vector.
		* @type {Vector3}
		*/this.target=e,/**
		* The agent only flees from the target if it is inside this radius.
		* @type {Number}
		* @default 10
		*/this.panicDistance=t}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.target,n=e.position.squaredDistanceTo(i);return n<=this.panicDistance*this.panicDistance&&(// from here, the only difference compared to seek is that the desired
// velocity is calculated using a vector pointing in the opposite direction
om.subVectors(e.position,i).normalize(),0===om.squaredLength()&&om.set(0,0,1),om.multiplyScalar(e.maxSpeed),t.subVectors(om,e.velocity)),t}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.target=this.target.toArray([]),e.panicDistance=this.panicDistance,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {FleeBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.panicDistance=e.panicDistance,this}}const o_=new aG,ov=new aG,ox=new aG;/**
* This steering behavior is is almost the same as {@link PursuitBehavior} except that
* the agent flees from the estimated future position of the pursuer.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class oy extends or{/**
	* Constructs a new evade behavior.
	*
	* @param {MovingEntity} pursuer - The agent to evade from.
	* @param {Number} panicDistance - The agent only flees from the pursuer if it is inside this radius.
	* @param {Number} predictionFactor - This factor determines how far the vehicle predicts the movement of the pursuer.
	*/constructor(e=null,t=10,i=1){super(),/**
		* The agent to evade from.
		* @type {?MovingEntity}
		* @default null
		*/this.pursuer=e,/**
		* The agent only flees from the pursuer if it is inside this radius.
		* @type {Number}
		* @default 10
		*/this.panicDistance=t,/**
		* This factor determines how far the vehicle predicts the movement of the pursuer.
		* @type {Number}
		* @default 1
		*/this.predictionFactor=i,// internal behaviors
this._flee=new og}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.pursuer;o_.subVectors(i.position,e.position);let n=o_.length()/(e.maxSpeed+i.getSpeed());return n*=this.predictionFactor,// calculate new velocity and predicted future position
ov.copy(i.velocity).multiplyScalar(n),ox.addVectors(i.position,ov),// now flee away from predicted future position of the pursuer
this._flee.target=ox,this._flee.panicDistance=this.panicDistance,this._flee.calculate(e,t),t}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.pursuer=this.pursuer?this.pursuer.uuid:null,e.panicDistance=this.panicDistance,e.predictionFactor=this.predictionFactor,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {EvadeBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.pursuer=e.pursuer,this.panicDistance=e.panicDistance,this.predictionFactor=e.predictionFactor,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {EvadeBehavior} A reference to this behavior.
	*/resolveReferences(e){this.pursuer=e.get(this.pursuer)||null}}/**
* Class for representing a walkable path.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class oM{/**
	* Constructs a new path.
	*/constructor(){/**
		* Whether this path is looped or not.
		* @type {Boolean}
		*/this.loop=!1,this._waypoints=[],this._index=0}/**
	* Adds the given waypoint to this path.
	*
	* @param {Vector3} waypoint - The waypoint to add.
	* @return {Path} A reference to this path.
	*/add(e){return this._waypoints.push(e),this}/**
	* Clears the internal state of this path.
	*
	* @return {Path} A reference to this path.
	*/clear(){return this._waypoints.length=0,this._index=0,this}/**
	* Returns the current active waypoint of this path.
	*
	* @return {Vector3} The current active waypoint.
	*/current(){return this._waypoints[this._index]}/**
	* Returns true if this path is not looped and the last waypoint is active.
	*
	* @return {Boolean} Whether this path is finished or not.
	*/finished(){let e=this._waypoints.length-1;return!0!==this.loop&&this._index===e}/**
	* Makes the next waypoint of this path active. If the path is looped and
	* {@link Path#finished} returns true, the path starts from the beginning.
	*
	* @return {Path} A reference to this path.
	*/advance(){return this._index++,this._index===this._waypoints.length&&(!0===this.loop?this._index=0:this._index--),this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e={type:this.constructor.name,loop:this.loop,_waypoints:[],_index:this._index},t=this._waypoints;for(let i=0,n=t.length;i<n;i++){let n=t[i];e._waypoints.push(n.toArray([]))}return e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {Path} A reference to this path.
	*/fromJSON(e){this.loop=e.loop,this._index=e._index;// waypoints
let t=e._waypoints;for(let e=0,i=t.length;e<i;e++){let i=t[e];this._waypoints.push(new aG().fromArray(i))}return this}}/**
* This steering behavior produces a force that moves a vehicle along a series of waypoints forming a path.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class ow extends or{/**
	* Constructs a new follow path behavior.
	*
	* @param {Path} path - The path to follow.
	* @param {Number} nextWaypointDistance - The distance the agent seeks for the next waypoint.
	*/constructor(e=new oM,t=1){super(),/**
		* The path to follow.
		* @type {Path}
		*/this.path=e,/**
		* The distance the agent seeks for the next waypoint.
		* @type {Number}
		* @default 1
		*/this.nextWaypointDistance=t,// internal behaviors
this._arrive=new ou,this._seek=new od}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.path,n=i.current().squaredDistanceTo(e.position);n<this.nextWaypointDistance*this.nextWaypointDistance&&i.advance();let r=i.current();return!0===i.finished()?(this._arrive.target=r,this._arrive.calculate(e,t)):(this._seek.target=r,this._seek.calculate(e,t)),t}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.path=this.path.toJSON(),e.nextWaypointDistance=this.nextWaypointDistance,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {FollowPathBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.path.fromJSON(e.path),this.nextWaypointDistance=e.nextWaypointDistance,this}}const oS=new aG,ob=new aG,oT=new aG,oA=new aG;/**
* This steering behavior produces a force that moves a vehicle to the midpoint
* of the imaginary line connecting two other agents.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class oE extends or{/**
	* Constructs a new interpose behavior.
	*
	* @param {MovingEntity} entity1 - The first agent.
	* @param {MovingEntity} entity2 - The second agent.
	* @param {Number} deceleration - The amount of deceleration.
	*/constructor(e=null,t=null,i=3){super(),/**
		* The first agent.
		* @type {?MovingEntity}
		* @default null
		*/this.entity1=e,/**
		* The second agent.
		* @type {?MovingEntity}
		* @default null
		*/this.entity2=t,/**
		* The amount of deceleration.
		* @type {Number}
		* @default 3
		*/this.deceleration=i,// internal behaviors
this._arrive=new ou}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.entity1,n=this.entity2;// first we need to figure out where the two entities are going to be
// in the future. This is approximated by determining the time
// taken to reach the mid way point at the current time at max speed
oS.addVectors(i.position,n.position).multiplyScalar(.5);let r=e.position.distanceTo(oS)/e.maxSpeed;return(// now we have the time, we assume that entity 1 and entity 2 will
// continue on a straight trajectory and extrapolate to get their future positions
ob.copy(i.velocity).multiplyScalar(r),oT.addVectors(i.position,ob),ob.copy(n.velocity).multiplyScalar(r),oA.addVectors(n.position,ob),// calculate the mid point of these predicted positions
oS.addVectors(oT,oA).multiplyScalar(.5),// then steer to arrive at it
this._arrive.deceleration=this.deceleration,this._arrive.target=oS,this._arrive.calculate(e,t),t)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.entity1=this.entity1?this.entity1.uuid:null,e.entity2=this.entity2?this.entity2.uuid:null,e.deceleration=this.deceleration,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {InterposeBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.entity1=e.entity1,this.entity2=e.entity2,this.deceleration=e.deceleration,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {InterposeBehavior} A reference to this behavior.
	*/resolveReferences(e){this.entity1=e.get(this.entity1)||null,this.entity2=e.get(this.entity2)||null}}const oC=new aG,oR=new aG,oP=new aG,oL=[new aG,new aG,new aG,new aG,new aG,new aG,new aG,new aG];/**
* Class representing an axis-aligned bounding box (AABB).
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class oD{/**
	* Constructs a new AABB with the given values.
	*
	* @param {Vector3} min - The minimum bounds of the AABB.
	* @param {Vector3} max - The maximum bounds of the AABB.
	*/constructor(e=new aG,t=new aG){/**
		* The minimum bounds of the AABB.
		* @type {Vector3}
		*/this.min=e,/**
		* The maximum bounds of the AABB.
		* @type {Vector3}
		*/this.max=t}/**
	* Sets the given values to this AABB.
	*
	* @param {Vector3} min - The minimum bounds of the AABB.
	* @param {Vector3} max - The maximum bounds of the AABB.
	* @return {AABB} A reference to this AABB.
	*/set(e,t){return this.min=e,this.max=t,this}/**
	* Copies all values from the given AABB to this AABB.
	*
	* @param {AABB} aabb - The AABB to copy.
	* @return {AABB} A reference to this AABB.
	*/copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}/**
	* Creates a new AABB and copies all values from this AABB.
	*
	* @return {AABB} A new AABB.
	*/clone(){return new this.constructor().copy(this)}/**
	* Ensures the given point is inside this AABB and stores
	* the result in the given vector.
	*
	* @param {Vector3} point - A point in 3D space.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/clampPoint(e,t){return t.copy(e).clamp(this.min,this.max),t}/**
	* Returns true if the given point is inside this AABB.
	*
	* @param {Vector3} point - A point in 3D space.
	* @return {Boolean} The result of the containments test.
	*/containsPoint(e){return!(e.x<this.min.x)&&!(e.x>this.max.x)&&!(e.y<this.min.y)&&!(e.y>this.max.y)&&!(e.z<this.min.z)&&!(e.z>this.max.z)}/**
	* Expands this AABB by the given point. So after this method call,
	* the given point lies inside the AABB.
	*
	* @param {Vector3} point - A point in 3D space.
	* @return {AABB} A reference to this AABB.
	*/expand(e){return this.min.min(e),this.max.max(e),this}/**
	* Computes the center point of this AABB and stores it into the given vector.
	*
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/getCenter(e){return e.addVectors(this.min,this.max).multiplyScalar(.5)}/**
	* Computes the size (width, height, depth) of this AABB and stores it into the given vector.
	*
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/getSize(e){return e.subVectors(this.max,this.min)}/**
	* Returns true if the given AABB intersects this AABB.
	*
	* @param {AABB} aabb - The AABB to test.
	* @return {Boolean} The result of the intersection test.
	*/intersectsAABB(e){return!(e.max.x<this.min.x)&&!(e.min.x>this.max.x)&&!(e.max.y<this.min.y)&&!(e.min.y>this.max.y)&&!(e.max.z<this.min.z)&&!(e.min.z>this.max.z)}/**
	* Returns true if the given bounding sphere intersects this AABB.
	*
	* @param {BoundingSphere} sphere - The bounding sphere to test.
	* @return {Boolean} The result of the intersection test.
	*/intersectsBoundingSphere(e){// if that point is inside the sphere, the AABB and sphere intersect.
return(// find the point on the AABB closest to the sphere center
this.clampPoint(e.center,oC),oC.squaredDistanceTo(e.center)<=e.radius*e.radius)}/**
	* Returns true if the given plane intersects this AABB.
	*
	* Reference: Testing Box Against Plane in Real-Time Collision Detection
	* by Christer Ericson (chapter 5.2.3)
	*
	* @param {Plane} plane - The plane to test.
	* @return {Boolean} The result of the intersection test.
	*/intersectsPlane(e){let t=e.normal;this.getCenter(oR),oP.subVectors(this.max,oR);// compute the projection interval radius of b onto L(t) = c + t * plane.normal
let i=oP.x*Math.abs(t.x)+oP.y*Math.abs(t.y)+oP.z*Math.abs(t.z),n=e.distanceToPoint(oR);return Math.abs(n)<=i}/**
	* Returns the normal for a given point on this AABB's surface.
	*
	* @param {Vector3} point - The point on the surface
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/getNormalFromSurfacePoint(e,t){let i;// from https://www.gamedev.net/forums/topic/551816-finding-the-aabb-surface-normal-from-an-intersection-point-on-aabb/
t.set(0,0,0);let n=1/0;return this.getCenter(oR),this.getSize(oP),// transform point into local space of AABB
oC.copy(e).sub(oR),// x-axis
(i=Math.abs(oP.x-Math.abs(oC.x)))<n&&(n=i,t.set(1*Math.sign(oC.x),0,0)),// y-axis
(i=Math.abs(oP.y-Math.abs(oC.y)))<n&&(n=i,t.set(0,1*Math.sign(oC.y),0)),// z-axis
(i=Math.abs(oP.z-Math.abs(oC.z)))<n&&t.set(0,0,1*Math.sign(oC.z)),t}/**
	* Sets the values of the AABB from the given center and size vector.
	*
	* @param {Vector3} center - The center point of the AABB.
	* @param {Vector3} size - The size of the AABB per axis.
	* @return {AABB} A reference to this AABB.
	*/fromCenterAndSize(e,t){return oC.copy(t).multiplyScalar(.5),this.min.copy(e).sub(oC),this.max.copy(e).add(oC),this}/**
	* Computes an AABB that encloses the given set of points.
	*
	* @param {Array<Vector3>} points - An array of 3D vectors representing points in 3D space.
	* @return {AABB} A reference to this AABB.
	*/fromPoints(e){this.min.set(1/0,1/0,1/0),this.max.set(-1/0,-1/0,-1/0);for(let t=0,i=e.length;t<i;t++)this.expand(e[t]);return this}/**
	* Transforms this AABB with the given 4x4 transformation matrix.
	*
	* @param {Matrix4} matrix - The 4x4 transformation matrix.
	* @return {AABB} A reference to this AABB.
	*/applyMatrix4(e){let t=this.min,i=this.max;return oL[0].set(t.x,t.y,t.z).applyMatrix4(e),oL[1].set(t.x,t.y,i.z).applyMatrix4(e),oL[2].set(t.x,i.y,t.z).applyMatrix4(e),oL[3].set(t.x,i.y,i.z).applyMatrix4(e),oL[4].set(i.x,t.y,t.z).applyMatrix4(e),oL[5].set(i.x,t.y,i.z).applyMatrix4(e),oL[6].set(i.x,i.y,t.z).applyMatrix4(e),oL[7].set(i.x,i.y,i.z).applyMatrix4(e),this.fromPoints(oL)}/**
	* Returns true if the given AABB is deep equal with this AABB.
	*
	* @param {AABB} aabb - The AABB to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){return{type:this.constructor.name,min:this.min.toArray([]),max:this.max.toArray([])}}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {AABB} A reference to this AABB.
	*/fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oO=new oD;/**
* Class representing a bounding sphere.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class oI{/**
	* Constructs a new bounding sphere with the given values.
	*
	* @param {Vector3} center - The center position of the bounding sphere.
	* @param {Number} radius - The radius of the bounding sphere.
	*/constructor(e=new aG,t=0){/**
		* The center position of the bounding sphere.
		* @type {Vector3}
		*/this.center=e,/**
		* The radius of the bounding sphere.
		* @type {Number}
		*/this.radius=t}/**
	* Sets the given values to this bounding sphere.
	*
	* @param {Vector3} center - The center position of the bounding sphere.
	* @param {Number} radius - The radius of the bounding sphere.
	* @return {BoundingSphere} A reference to this bounding sphere.
	*/set(e,t){return this.center=e,this.radius=t,this}/**
	* Copies all values from the given bounding sphere to this bounding sphere.
	*
	* @param {BoundingSphere} sphere - The bounding sphere to copy.
	* @return {BoundingSphere} A reference to this bounding sphere.
	*/copy(e){return this.center.copy(e.center),this.radius=e.radius,this}/**
	* Creates a new bounding sphere and copies all values from this bounding sphere.
	*
	* @return {BoundingSphere} A new bounding sphere.
	*/clone(){return new this.constructor().copy(this)}/**
	* Ensures the given point is inside this bounding sphere and stores
	* the result in the given vector.
	*
	* @param {Vector3} point - A point in 3D space.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/clampPoint(e,t){t.copy(e);let i=this.center.squaredDistanceTo(e);return i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}/**
	* Returns true if the given point is inside this bounding sphere.
	*
	* @param {Vector3} point - A point in 3D space.
	* @return {Boolean} The result of the containments test.
	*/containsPoint(e){return e.squaredDistanceTo(this.center)<=this.radius*this.radius}/**
	* Returns true if the given bounding sphere intersects this bounding sphere.
	*
	* @param {BoundingSphere} sphere - The bounding sphere to test.
	* @return {Boolean} The result of the intersection test.
	*/intersectsBoundingSphere(e){let t=this.radius+e.radius;return e.center.squaredDistanceTo(this.center)<=t*t}/**
	* Returns true if the given plane intersects this bounding sphere.
	*
	* Reference: Testing Sphere Against Plane in Real-Time Collision Detection
	* by Christer Ericson (chapter 5.2.2)
	*
	* @param {Plane} plane - The plane to test.
	* @return {Boolean} The result of the intersection test.
	*/intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}/**
	* Returns the normal for a given point on this bounding sphere's surface.
	*
	* @param {Vector3} point - The point on the surface
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/getNormalFromSurfacePoint(e,t){return t.subVectors(e,this.center).normalize()}/**
	* Computes a bounding sphere that encloses the given set of points.
	*
	* @param {Array<Vector3>} points - An array of 3D vectors representing points in 3D space.
	* @return {BoundingSphere} A reference to this bounding sphere.
	*/fromPoints(e){return(// Using an AABB is a simple way to compute a bounding sphere for a given set
// of points. However, there are other more complex algorithms that produce a
// more tight bounding sphere. For now, this approach is a good start.
oO.fromPoints(e),oO.getCenter(this.center),this.radius=this.center.distanceTo(oO.max),this)}/**
	* Transforms this bounding sphere with the given 4x4 transformation matrix.
	*
	* @param {Matrix4} matrix - The 4x4 transformation matrix.
	* @return {BoundingSphere} A reference to this bounding sphere.
	*/applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScale(),this}/**
	* Returns true if the given bounding sphere is deep equal with this bounding sphere.
	*
	* @param {BoundingSphere} sphere - The bounding sphere to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){return e.center.equals(this.center)&&e.radius===this.radius}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){return{type:this.constructor.name,center:this.center.toArray([]),radius:this.radius}}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {BoundingSphere} A reference to this bounding sphere.
	*/fromJSON(e){return this.center.fromArray(e.center),this.radius=e.radius,this}}const oN=new aG,oz=new aG,oU=new aG,ok=new aG,oB=new aG,oF=new a5,oV=new a5,oH=new oD;/**
* Class representing a ray in 3D space.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class oG{/**
	* Constructs a new ray with the given values.
	*
	* @param {Vector3} origin - The origin of the ray.
	* @param {Vector3} direction - The direction of the ray.
	*/constructor(e=new aG,t=new aG){/**
		* The origin of the ray.
		* @type {Vector3}
		*/this.origin=e,/**
		* The direction of the ray.
		* @type {Vector3}
		*/this.direction=t}/**
	* Sets the given values to this ray.
	*
	* @param {Vector3} origin - The origin of the ray.
	* @param {Vector3} direction - The direction of the ray.
	* @return {Ray} A reference to this ray.
	*/set(e,t){return this.origin=e,this.direction=t,this}/**
	* Copies all values from the given ray to this ray.
	*
	* @param {Ray} ray - The ray to copy.
	* @return {Ray} A reference to this ray.
	*/copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}/**
	* Creates a new ray and copies all values from this ray.
	*
	* @return {Ray} A new ray.
	*/clone(){return new this.constructor().copy(this)}/**
	* Computes a position on the ray according to the given t value
	* and stores the result in the given 3D vector. The t value has a range of
	* [0, Infinity] where 0 means the position is equal with the origin of the ray.
	*
	* @param {Number} t - A scalar value representing a position on the ray.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/at(e,t){// t has to be zero or positive
return t.copy(this.direction).multiplyScalar(e).add(this.origin)}/**
	* Performs a ray/sphere intersection test and stores the intersection point
	* to the given 3D vector. If no intersection is detected, *null* is returned.
	*
	* @param {BoundingSphere} sphere - A bounding sphere.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/intersectBoundingSphere(e,t){oN.subVectors(e.center,this.origin);let i=oN.dot(this.direction),n=oN.dot(oN)-i*i,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),a=i-s,o=i+s;return(// test to see if both t0 and t1 are behind the ray - if so, return null
a<0&&o<0?null:a<0?this.at(o,t):this.at(a,t))}/**
	* Performs a ray/sphere intersection test. Returns either true or false if
	* there is a intersection or not.
	*
	* @param {BoundingSphere} sphere - A bounding sphere.
	* @return {boolean} Whether there is an intersection or not.
	*/intersectsBoundingSphere(e){let t;let i=new aG,n=i.subVectors(e.center,this.origin).dot(this.direction);return n<0?t=this.origin.squaredDistanceTo(e.center):(i.copy(this.direction).multiplyScalar(n).add(this.origin),t=i.squaredDistanceTo(e.center)),t<=e.radius*e.radius}/**
	* Performs a ray/AABB intersection test and stores the intersection point
	* to the given 3D vector. If no intersection is detected, *null* is returned.
	*
	* @param {AABB} aabb - An AABB.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/intersectAABB(e,t){let i,n,r,s,a,o;let l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,c=this.origin;return(l>=0?(i=(e.min.x-c.x)*l,n=(e.max.x-c.x)*l):(i=(e.max.x-c.x)*l,n=(e.min.x-c.x)*l),h>=0?(r=(e.min.y-c.y)*h,s=(e.max.y-c.y)*h):(r=(e.max.y-c.y)*h,s=(e.min.y-c.y)*h),i>s||r>n)?null:((r>i||i!=i)&&(i=r),(s<n||n!=n)&&(n=s),u>=0?(a=(e.min.z-c.z)*u,o=(e.max.z-c.z)*u):(a=(e.max.z-c.z)*u,o=(e.min.z-c.z)*u),i>o||a>n)?null:((a>i||i!=i)&&(i=a),(o<n||n!=n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}/**
	* Performs a ray/AABB intersection test. Returns either true or false if
	* there is a intersection or not.
	*
	* @param {AABB} aabb - An axis-aligned bounding box.
	* @return {boolean} Whether there is an intersection or not.
	*/intersectsAABB(e){return null!==this.intersectAABB(e,oN)}/**
	* Performs a ray/plane intersection test and stores the intersection point
	* to the given 3D vector. If no intersection is detected, *null* is returned.
	*
	* @param {Plane} plane - A plane.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/intersectPlane(e,t){let i;let n=e.normal.dot(this.direction);if(0===n){if(0!==e.distanceToPoint(this.origin))return null;i=0}else i=-(this.origin.dot(e.normal)+e.constant)/n;// there is no intersection if t is negative
return i>=0?this.at(i,t):null}/**
	* Performs a ray/plane intersection test. Returns either true or false if
	* there is a intersection or not.
	*
	* @param {Plane} plane - A plane.
	* @return {boolean} Whether there is an intersection or not.
	*/intersectsPlane(e){// check if the ray lies on the plane first
let t=e.distanceToPoint(this.origin);if(0===t)return!0;let i=e.normal.dot(this.direction);return i*t<0}/**
	* Performs a ray/OBB intersection test and stores the intersection point
	* to the given 3D vector. If no intersection is detected, *null* is returned.
	*
	* @param {OBB} obb - An orientend bounding box.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/intersectOBB(e,t){return(// perform ray <-> AABB intersection test
(// the idea is to perform the intersection test in the local space
// of the OBB.
e.getSize(oB),oH.fromCenterAndSize(oN.set(0,0,0),oB),oF.fromMatrix3(e.rotation),oF.setPosition(e.center),// transform ray to the local space of the OBB
oW.copy(this).applyMatrix4(oF.getInverse(oV)),oW.intersectAABB(oH,t))?t.applyMatrix4(oF):null)}/**
	* Performs a ray/OBB intersection test. Returns either true or false if
	* there is a intersection or not.
	*
	* @param {OBB} obb - An orientend bounding box.
	* @return {boolean} Whether there is an intersection or not.
	*/intersectsOBB(e){return null!==this.intersectOBB(e,oN)}/**
	* Performs a ray/convex hull intersection test and stores the intersection point
	* to the given 3D vector. If no intersection is detected, *null* is returned.
	* The implementation is based on "Fast Ray-Convex Polyhedron Intersection"
	* by Eric Haines, GRAPHICS GEMS II
	*
	* @param {ConvexHull} convexHull - A convex hull.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/intersectConvexHull(e,t){let i=e.faces,n=-1/0,r=1/0;for(let e=0,t=i.length;e<t;e++){let t=i[e],s=t.plane,a=s.distanceToPoint(this.origin),o=s.normal.dot(this.direction);// if the origin is on the positive side of a plane (so the plane can "see" the origin) and
// the ray is turned away or parallel to the plane, there is no intersection
if(a>0&&o>=0)return null;// compute the distance from the ray’s origin to the intersection with the plane
let l=0!==o?-a/o:0;// only proceed if the distance is positive. since the ray has a direction, the intersection point
// would lie "behind" the origin with a negative distance
if(!(l<=0)&&(o>0?r=Math.min(l,r):n=Math.max(l,n),n>r))return null}return n!==-1/0?this.at(n,t):this.at(r,t),t}/**
	* Performs a ray/convex hull intersection test. Returns either true or false if
	* there is a intersection or not.
	*
	* @param {ConvexHull} convexHull - A convex hull.
	* @return {boolean} Whether there is an intersection or not.
	*/intersectsConvexHull(e){return null!==this.intersectConvexHull(e,oN)}/**
	* Performs a ray/triangle intersection test and stores the intersection point
	* to the given 3D vector. If no intersection is detected, *null* is returned.
	*
	* @param {Triangle} triangle - A triangle.
	* @param {Boolean} backfaceCulling - Whether back face culling is active or not.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/intersectTriangle(e,t,i){let n;// reference: https://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
let r=e.a,s=e.b,a=e.c;oz.subVectors(s,r),oU.subVectors(a,r),ok.crossVectors(oz,oU);let o=this.direction.dot(ok);if(o>0){if(t)return null;n=1}else{if(!(o<0))return null;n=-1,o=-o}oN.subVectors(this.origin,r);let l=n*this.direction.dot(oU.crossVectors(oN,oU));// b1 < 0, no intersection
if(l<0)return null;let h=n*this.direction.dot(oz.cross(oN));// b2 < 0, no intersection
if(h<0||l+h>o)return null;// line intersects triangle, check if ray does
let u=-n*oN.dot(ok);return(// t < 0, no intersection
u<0?null:this.at(u/o,i))}/**
	* Performs a ray/BVH intersection test and stores the intersection point
	* to the given 3D vector. If no intersection is detected, *null* is returned.
	*
	* @param {BVH} bvh - A BVH.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/intersectBVH(e,t){return e.root.intersectRay(this,t)}/**
	* Performs a ray/BVH intersection test. Returns either true or false if
	* there is a intersection or not.
	*
	* @param {BVH} bvh - A BVH.
	* @return {boolean} Whether there is an intersection or not.
	*/intersectsBVH(e){return e.root.intersectsRay(this)}/**
	* Transforms this ray by the given 4x4 matrix.
	*
	* @param {Matrix4} m - The 4x4 matrix.
	* @return {Ray} A reference to this ray.
	*/applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}/**
	* Returns true if the given ray is deep equal with this ray.
	*
	* @param {Ray} ray - The ray to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}const oW=new oG,oq=new a5,oj=new aG,oJ=new aG,oX=new aG,oY=new oI,oK=new oG(new aG(0,0,0),new aG(0,0,1));/**
* This steering behavior produces a force so a vehicle avoids obstacles lying in its path.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @author {@link https://github.com/robp94|robp94}
* @augments SteeringBehavior
*/class oZ extends or{/**
	* Constructs a new obstacle avoidance behavior.
	*
	* @param {Array<GameEntity>} obstacles - An Array with obstacle of type {@link GameEntity}.
	*/constructor(e=[]){super(),/**
		* An Array with obstacle of type {@link GameEntity}.
		* @type {Array<GameEntity>}
		*/this.obstacles=e,/**
		* This factor determines how much the vehicle decelerates if an intersection occurs.
		* @type {Number}
		* @default 0.2
		*/this.brakingWeight=.2,/**
		* Minimum length of the detection box used for intersection tests.
		* @type {Number}
		* @default 4
		*/this.dBoxMinLength=4}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.obstacles,n=null,r=1/0,s=this.dBoxMinLength+e.getSpeed()/e.maxSpeed*this.dBoxMinLength;e.worldMatrix.getInverse(oq);for(let t=0,a=i.length;t<a;t++){let a=i[t];if(a!==e&&(// calculate this obstacle's position in local space of the vehicle
oj.copy(a.position).applyMatrix4(oq),oj.z>0&&Math.abs(oj.z)<s)){// if the distance from the x axis to the object's position is less
// than its radius + half the width of the detection box then there is a potential intersection
let t=a.boundingRadius+e.boundingRadius;Math.abs(oj.x)<t&&(// do intersection test in local space of the vehicle
oY.center.copy(oj),oY.radius=t,oK.intersectBoundingSphere(oY,oX),oX.z<r&&(// save new minimum distance
r=oX.z,// save closest obstacle
n=a,// save local position for force calculation
oJ.copy(oj)))}}// if we have found an intersecting obstacle, calculate a steering force away from it
if(null!==n){// the closer the agent is to an object, the stronger the steering force should be
let i=1+(s-oJ.z)/s;// calculate the lateral force
t.x=(n.boundingRadius-oJ.x)*i,// apply a braking force proportional to the obstacles distance from the vehicle
t.z=(n.boundingRadius-oJ.z)*this.brakingWeight,// finally, convert the steering vector from local to world space (just apply the rotation)
t.applyRotation(e.rotation)}return t}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();e.obstacles=[],e.brakingWeight=this.brakingWeight,e.dBoxMinLength=this.dBoxMinLength;// obstacles
for(let t=0,i=this.obstacles.length;t<i;t++)e.obstacles.push(this.obstacles[t].uuid);return e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {ObstacleAvoidanceBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.obstacles=e.obstacles,this.brakingWeight=e.brakingWeight,this.dBoxMinLength=e.dBoxMinLength,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {ObstacleAvoidanceBehavior} A reference to this behavior.
	*/resolveReferences(e){let t=this.obstacles;for(let i=0,n=t.length;i<n;i++)t[i]=e.get(t[i])}}const oQ=new aG,o$=new aG,o0=new aG,o1=new aG;/**
* This steering behavior produces a force that keeps a vehicle at a specified offset from a leader vehicle.
* Useful for creating formations.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class o3 extends or{/**
	* Constructs a new offset pursuit behavior.
	*
	* @param {Vehicle} leader - The leader vehicle.
	* @param {Vector3} offset - The offset from the leader.
	*/constructor(e=null,t=new aG){super(),/**
		* The leader vehicle.
		* @type {?Vehicle}
		* @default null
		*/this.leader=e,/**
		* The offset from the leader.
		* @type {Vector3}
		*/this.offset=t,// internal behaviors
this._arrive=new ou,this._arrive.deceleration=1.5}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.leader,n=this.offset;// calculate the offset's position in world space
oQ.copy(n).applyMatrix4(i.worldMatrix),// calculate the vector that points from the vehicle to the offset position
o$.subVectors(oQ,e.position);// the lookahead time is proportional to the distance between the leader
// and the pursuer and is inversely proportional to the sum of both
// agent's velocities
let r=o$.length()/(e.maxSpeed+i.getSpeed());return(// calculate new velocity and predicted future position
o0.copy(i.velocity).multiplyScalar(r),o1.addVectors(oQ,o0),// now arrive at the predicted future position of the offset
this._arrive.target=o1,this._arrive.calculate(e,t),t)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.leader=this.leader?this.leader.uuid:null,e.offset=this.offset,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {OffsetPursuitBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.leader=e.leader,this.offset=e.offset,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {OffsetPursuitBehavior} A reference to this behavior.
	*/resolveReferences(e){this.leader=e.get(this.leader)||null}}const o2=new aG,o5=new aG,o4=new aG,o6=new aG,o8=new aG;/**
* This steering behavior is useful when an agent is required to intercept a moving agent.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class o7 extends or{/**
	* Constructs a new pursuit behavior.
	*
	* @param {MovingEntity} evader - The agent to pursue.
	* @param {Number} predictionFactor - This factor determines how far the vehicle predicts the movement of the evader.
	*/constructor(e=null,t=1){super(),/**
		* The agent to pursue.
		* @type {?MovingEntity}
		* @default null
		*/this.evader=e,/**
		* This factor determines how far the vehicle predicts the movement of the evader.
		* @type {Number}
		* @default 1
		*/this.predictionFactor=t,// internal behaviors
this._seek=new od}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.evader;o2.subVectors(i.position,e.position),// 1. if the evader is ahead and facing the agent then we can just seek for the evader's current position
e.getDirection(o5),i.getDirection(o4);// first condition: evader must be in front of the pursuer
let n=o2.dot(o5)>0,r=-.95>o5.dot(o4);if(!0===n&&!0===r)return this._seek.target=i.position,this._seek.calculate(e,t),t;// 2. evader not considered ahead so we predict where the evader will be
// the lookahead time is proportional to the distance between the evader
// and the pursuer. and is inversely proportional to the sum of the
// agent's velocities
let s=o2.length()/(e.maxSpeed+i.getSpeed());return s*=this.predictionFactor,// calculate new velocity and predicted future position
o6.copy(i.velocity).multiplyScalar(s),o8.addVectors(i.position,o6),// now seek to the predicted future position of the evader
this._seek.target=o8,this._seek.calculate(e,t),t}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.evader=this.evader?this.evader.uuid:null,e.predictionFactor=this.predictionFactor,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {PursuitBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.evader=e.evader,this.predictionFactor=e.predictionFactor,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {PursuitBehavior} A reference to this behavior.
	*/resolveReferences(e){this.evader=e.get(this.evader)||null}}const o9=new aG;/**
* This steering produces a force that steers a vehicle away from those in its neighborhood region.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class le extends or{/**
	* Constructs a new separation behavior.
	*/constructor(){super()}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=e.neighbors;for(let n=0,r=i.length;n<r;n++){let r=i[n];o9.subVectors(e.position,r.position);let s=o9.length();0===s&&(s=1e-4),// scale the force inversely proportional to the agents distance from its neighbor
o9.normalize().divideScalar(s),t.add(o9)}return t}}const lt=new aG,li=new aG;/**
* This steering behavior produces a steering force that will give the
* impression of a random walk through the agent’s environment. The behavior only
* produces a 2D force (XZ).
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class ln extends or{/**
	* Constructs a new wander behavior.
	*
	* @param {Number} radius - The radius of the wander circle for the wander behavior.
	* @param {Number} distance - The distance the wander circle is projected in front of the agent.
	* @param {Number} jitter - The maximum amount of displacement along the sphere each frame.
	*/constructor(e=1,t=5,i=5){super(),/**
		* The radius of the constraining circle for the wander behavior.
		* @type {Number}
		* @default 1
		*/this.radius=e,/**
		* The distance the wander sphere is projected in front of the agent.
		* @type {Number}
		* @default 5
		*/this.distance=t,/**
		* The maximum amount of displacement along the sphere each frame.
		* @type {Number}
		* @default 5
		*/this.jitter=i,this._targetLocal=new aG,//
function(e,t){let i=Math.random()*Math.PI*2;t.x=e*Math.cos(i),t.z=e*Math.sin(i)}(this.radius,this._targetLocal)}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t,i){// this behavior is dependent on the update rate, so this line must be
// included when using time independent frame rate
let n=this.jitter*i;return(// prepare random vector
li.x=aH.randFloat(-1,1)*n,li.z=aH.randFloat(-1,1)*n,// add random vector to the target's position
this._targetLocal.add(li),// re-project this new vector back onto a unit sphere
this._targetLocal.normalize(),// increase the length of the vector to the same as the radius of the wander sphere
this._targetLocal.multiplyScalar(this.radius),// move the target into a position wanderDist in front of the agent
lt.copy(this._targetLocal),lt.z+=this.distance,// project the target into world space
lt.applyMatrix4(e.worldMatrix),// and steer towards it
t.subVectors(lt,e.position),t)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.radius=this.radius,e.distance=this.distance,e.jitter=this.jitter,e._targetLocal=this._targetLocal.toArray([]),e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {WanderBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this.distance=e.distance,this.jitter=e.jitter,this._targetLocal.fromArray(e._targetLocal),this}}const lr=new aG;/**
* This class is responsible for managing the steering of a single vehicle. The steering manager
* can manage multiple steering behaviors and combine their produced force into a single one used
* by the vehicle.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class ls{/**
	* Constructs a new steering manager.
	*
	* @param {Vehicle} vehicle - The vehicle that owns this steering manager.
	*/constructor(e){/**
		* The vehicle that owns this steering manager.
		* @type {Vehicle}
		*/this.vehicle=e,/**
		* A list of all steering behaviors.
		* @type {Array<SteeringBehavior>}
		* @readonly
		*/this.behaviors=[],this._steeringForce=new aG,this._typesMap=new Map}/**
	* Adds the given steering behavior to this steering manager.
	*
	* @param {SteeringBehavior} behavior - The steering behavior to add.
	* @return {SteeringManager} A reference to this steering manager.
	*/add(e){return this.behaviors.push(e),this}/**
	* Removes the given steering behavior from this steering manager.
	*
	* @param {SteeringBehavior} behavior - The steering behavior to remove.
	* @return {SteeringManager} A reference to this steering manager.
	*/remove(e){let t=this.behaviors.indexOf(e);return this.behaviors.splice(t,1),this}/**
	* Clears the internal state of this steering manager.
	*
	* @return {SteeringManager} A reference to this steering manager.
	*/clear(){return this.behaviors.length=0,this}/**
	* Calculates the steering forces for all active steering behaviors and
	* combines it into a single result force. This method is called in
	* {@link Vehicle#update}.
	*
	* @param {Number} delta - The time delta.
	* @param {Vector3} result - The force/result vector.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t){return this._calculateByOrder(e),t.copy(this._steeringForce)}// this method calculates how much of its max steering force the vehicle has
// left to apply and then applies that amount of the force to add
_accumulate(e){// calculate how much steering force the vehicle has used so far
let t=this._steeringForce.length(),i=this.vehicle.maxForce-t;// return false if there is no more force left to use
if(i<=0)return!1;// calculate the magnitude of the force we want to add
let n=e.length();return n>i&&e.normalize().multiplyScalar(i),// add force
this._steeringForce.add(e),!0}_calculateByOrder(e){let t=this.behaviors;// reset steering force
this._steeringForce.set(0,0,0);// calculate for each behavior the respective force
for(let i=0,n=t.length;i<n;i++){let n=t[i];if(!0===n.active&&(lr.set(0,0,0),n.calculate(this.vehicle,lr,e),lr.multiplyScalar(n.weight),!1===this._accumulate(lr)))return}}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e={type:"SteeringManager",behaviors:[]},t=this.behaviors;for(let i=0,n=t.length;i<n;i++){let n=t[i];e.behaviors.push(n.toJSON())}return e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {SteeringManager} A reference to this steering manager.
	*/fromJSON(e){this.clear();let t=e.behaviors;for(let e=0,i=t.length;e<i;e++){let i;let n=t[e],r=n.type;switch(r){case"SteeringBehavior":i=new or().fromJSON(n);break;case"AlignmentBehavior":i=new oo().fromJSON(n);break;case"ArriveBehavior":i=new ou().fromJSON(n);break;case"CohesionBehavior":i=new of().fromJSON(n);break;case"EvadeBehavior":i=new oy().fromJSON(n);break;case"FleeBehavior":i=new og().fromJSON(n);break;case"FollowPathBehavior":i=new ow().fromJSON(n);break;case"InterposeBehavior":i=new oE().fromJSON(n);break;case"ObstacleAvoidanceBehavior":i=new oZ().fromJSON(n);break;case"OffsetPursuitBehavior":i=new o3().fromJSON(n);break;case"PursuitBehavior":i=new o7().fromJSON(n);break;case"SeekBehavior":i=new od().fromJSON(n);break;case"SeparationBehavior":i=new le().fromJSON(n);break;case"WanderBehavior":i=new ln().fromJSON(n);break;default:// handle custom type
let s=this._typesMap.get(r);if(void 0!==s)i=new s().fromJSON(n);else{ak.warn("YUKA.SteeringManager: Unsupported steering behavior type:",r);continue}}this.add(i)}return this}/**
	 * Registers a custom type for deserialization. When calling {@link SteeringManager#fromJSON}
	 * the steering manager is able to pick the correct constructor in order to create custom
	 * steering behavior.
	 *
	 * @param {String} type - The name of the behavior type.
	 * @param {Function} constructor - The constructor function.
	 * @return {SteeringManager} A reference to this steering manager.
	 */registerType(e,t){return this._typesMap.set(e,t),this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {SteeringManager} A reference to this steering manager.
	*/resolveReferences(e){let t=this.behaviors;for(let i=0,n=t.length;i<n;i++){let n=t[i];n.resolveReferences(e)}return this}}/**
* This class can be used to smooth the result of a vector calculation. One use case
* is the smoothing of the velocity vector of game entities in order to avoid a shaky
* movements due to conflicting forces.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @author {@link https://github.com/robp94|robp94}
*/class la{/**
	* Constructs a new smoother.
	*
	* @param {Number} count - The amount of samples the smoother will use to average a vector.
	*/constructor(e=10){/**
		* The amount of samples the smoother will use to average a vector.
		* @type {Number}
		* @default 10
		*/this.count=e,this._history=[],this._slot=0;// initialize history with Vector3s
for(let e=0;e<this.count;e++)this._history[e]=new aG}/**
	* Calculates for the given value a smooth average.
	*
	* @param {Vector3} value - The value to smooth.
	* @param {Vector3} average - The calculated average.
	* @return {Vector3} The calculated average.
	*/calculate(e,t){// ensure, average is a zero vector
t.set(0,0,0),this._slot===this.count&&(this._slot=0),// overwrite the oldest value with the newest
this._history[this._slot].copy(e),// increase slot index
this._slot++;// now calculate the average of the history array
for(let e=0;e<this.count;e++)t.add(this._history[e]);return t.divideScalar(this.count),t}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e={type:this.constructor.name,count:this.count,_history:[],_slot:this._slot},t=this._history;for(let i=0,n=t.length;i<n;i++){let n=t[i];e._history.push(n.toArray([]))}return e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {Smoother} A reference to this smoother.
	*/fromJSON(e){this.count=e.count,this._slot=e._slot;// history
let t=e._history;this._history.length=0;for(let e=0,i=t.length;e<i;e++){let i=t[e];this._history.push(new aG().fromArray(i))}return this}}const lo=new aG,ll=new aG,lh=new aG,lu=new aG,lc=new aG;/**
* This type of game entity implements a special type of locomotion, the so called
* *Vehicle Model*. The class uses basic physical metrics in order to implement a
* realistic movement.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @author {@link https://github.com/robp94|robp94}
* @augments MovingEntity
*/class ld extends on{/**
	* Constructs a new vehicle.
	*/constructor(){super(),/**
		* The mass of the vehicle in kilogram.
		* @type {Number}
		* @default 1
		*/this.mass=1,/**
		* The maximum force this entity can produce to power itself.
		* @type {Number}
		* @default 100
		*/this.maxForce=100,/**
		* The steering manager of this vehicle.
		* @type {SteeringManager}
		*/this.steering=new ls(this),/**
		* An optional smoother to avoid shakiness due to conflicting steering behaviors.
		* @type {?Smoother}
		* @default null
		*/this.smoother=null}/**
	* This method is responsible for updating the position based on the force produced
	* by the internal steering manager.
	*
	* @param {Number} delta - The time delta.
	* @return {Vehicle} A reference to this vehicle.
	*/update(e){return(// calculate steering force
this.steering.calculate(e,lo),// acceleration = force / mass
lh.copy(lo).divideScalar(this.mass),// update velocity
this.velocity.add(lh.multiplyScalar(e)),this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),// calculate displacement
ll.copy(this.velocity).multiplyScalar(e),// calculate target position
lu.copy(this.position).add(ll),!0===this.updateOrientation&&null===this.smoother&&this.getSpeedSquared()>1e-8&&this.lookAt(lu),// update position
this.position.copy(lu),!0===this.updateOrientation&&null!==this.smoother&&(this.smoother.calculate(this.velocity,lc),ll.copy(lc).multiplyScalar(e),lu.copy(this.position).add(ll),this.lookAt(lu)),this)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.mass=this.mass,e.maxForce=this.maxForce,e.steering=this.steering.toJSON(),e.smoother=this.smoother?this.smoother.toJSON():null,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {Vehicle} A reference to this vehicle.
	*/fromJSON(e){return super.fromJSON(e),this.mass=e.mass,this.maxForce=e.maxForce,this.steering=new ls(this).fromJSON(e.steering),this.smoother=e.smoother?new la().fromJSON(e.smoother):null,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {Vehicle} A reference to this vehicle.
	*/resolveReferences(e){super.resolveReferences(e),this.steering.resolveReferences(e)}}/**
* Base class for representing trigger regions. It's a predefine region in 3D space,
* owned by one or more triggers. The shape of the trigger can be arbitrary.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class lp{/**
	* Returns true if the bounding volume of the given game entity touches/intersects
	* the trigger region. Must be implemented by all concrete trigger regions.
	*
	* @param {GameEntity} entity - The entity to test.
	* @return {Boolean} Whether this trigger touches the given game entity or not.
	*/touching(){return!1}/**
	* Updates this trigger region. Must be implemented by all concrete trigger regions.
	*
	* @param {Trigger} trigger - The trigger that owns this region.
	* @return {TriggerRegion} A reference to this trigger region.
	*/update(){return this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){return{type:this.constructor.name}}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {TriggerRegion} A reference to this trigger region.
	*/fromJSON(){return this}}const lf=new oI,lm=new aG;/**
* Class for representing a rectangular trigger region as an AABB.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments TriggerRegion
*/class lg extends lp{/**
	* Constructs a new rectangular trigger region with the given values.
	*
	* @param {Vector3} size - The size of the region.
	*/constructor(e=new aG){super(),/**
		* The size of the region.
		* @type {Vector3}
		*/this.size=e,this._aabb=new oD}/**
	* Returns true if the bounding volume of the given game entity touches/intersects
	* the trigger region.
	*
	* @param {GameEntity} entity - The entity to test.
	* @return {Boolean} Whether this trigger touches the given game entity or not.
	*/touching(e){return lf.set(e.position,e.boundingRadius),this._aabb.intersectsBoundingSphere(lf)}/**
	* Updates this trigger region.
	*
	* @param {Trigger} trigger - The trigger that owns this region.
	* @return {RectangularTriggerRegion} A reference to this trigger region.
	*/update(e){return e.getWorldPosition(lm),this._aabb.fromCenterAndSize(lm,this.size),this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.size=this.size.toArray([]),e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {RectangularTriggerRegion} A reference to this trigger region.
	*/fromJSON(e){return super.fromJSON(e),this.size.fromArray(e.size),this}}const l_=new oI;/**
* Class for representing a spherical trigger region as a bounding sphere.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments TriggerRegion
*/class lv extends lp{/**
	* Constructs a new spherical trigger region.
	*
	* @param {Number} radius - The radius of the region.
	*/constructor(e=0){super(),/**
		* The radius of the region.
		* @type {Number}
		* @default 0
		*/this.radius=e,//
this._boundingSphere=new oI}/**
	* Returns true if the bounding volume of the given game entity touches/intersects
	* the trigger region.
	*
	* @param {GameEntity} entity - The entity to test.
	* @return {Boolean} Whether this trigger touches the given game entity or not.
	*/touching(e){return e.getWorldPosition(l_.center),l_.radius=e.boundingRadius,this._boundingSphere.intersectsBoundingSphere(l_)}/**
	* Updates this trigger region.
	*
	* @param {Trigger} trigger - The trigger that owns this region.
	* @return {SphericalTriggerRegion} A reference to this trigger region.
	*/update(e){return e.getWorldPosition(this._boundingSphere.center),this._boundingSphere.radius=this.radius,this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.radius=this.radius,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {SphericalTriggerRegion} A reference to this trigger region.
	*/fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this}}/**
* Base class for representing triggers. A trigger generates an action if a game entity
* touches its trigger region, a predefine area in 3D space.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments GameEntity
*/class lx extends a9{/**
	* Constructs a new trigger with the given values.
	*
	* @param {TriggerRegion} region - The region of the trigger.
	*/constructor(e=new lp){super(),/**
		* The region of the trigger.
		* @type {TriggerRegion}
		*/this.region=e,//
this.canActivateTrigger=!1,this._typesMap=new Map}/**
	* This method is called per simulation step for all game entities. If the game
	* entity touches the region of the trigger, the respective action is executed.
	*
	* @param {GameEntity} entity - The entity to test
	* @return {Trigger} A reference to this trigger.
	*/check(e){return!0===this.region.touching(e)&&this.execute(e),this}/**
	* This method is called when the trigger should execute its action.
	* Must be implemented by all concrete triggers.
	*
	* @param {GameEntity} entity - The entity that touched the trigger region.
	* @return {Trigger} A reference to this trigger.
	*/execute(){}/**
	* Updates the region of this trigger. Called by the {@link EntityManager} per
	* simulation step.
	*
	* @return {Trigger} A reference to this trigger.
	*/updateRegion(){return this.region.update(this),this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.region=this.region.toJSON(),e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {Trigger} A reference to this trigger.
	*/fromJSON(e){super.fromJSON(e);let t=e.region,i=t.type;switch(i){case"TriggerRegion":this.region=new lp().fromJSON(t);break;case"RectangularTriggerRegion":this.region=new lg().fromJSON(t);break;case"SphericalTriggerRegion":this.region=new lv().fromJSON(t);break;default:// handle custom type
let n=this._typesMap.get(i);void 0!==n?this.region=new n().fromJSON(t):ak.warn("YUKA.Trigger: Unsupported trigger region type:",t.type)}return this}/**
	 * Registers a custom type for deserialization. When calling {@link Trigger#fromJSON}
	 * the trigger is able to pick the correct constructor in order to create custom
	 * trigger regions.
	 *
	 * @param {String} type - The name of the trigger region.
	 * @param {Function} constructor - The constructor function.
	 * @return {Trigger} A reference to this trigger.
	 */registerType(e,t){return this._typesMap.set(e,t),this}}const ly=[],lM=new aG,lw=new aG,lS=new aG;/**
* Class representing a plane in 3D space. The plane is specified in Hessian normal form.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class lb{/**
	* Constructs a new plane with the given values.
	*
	* @param {Vector3} normal - The normal vector of the plane.
	* @param {Number} constant - The distance of the plane from the origin.
	*/constructor(e=new aG(0,0,1),t=0){/**
		* The normal vector of the plane.
		* @type {Vector3}
		*/this.normal=e,/**
		* The distance of the plane from the origin.
		* @type {Number}
		*/this.constant=t}/**
	* Sets the given values to this plane.
	*
	* @param {Vector3} normal - The normal vector of the plane.
	* @param {Number} constant - The distance of the plane from the origin.
	* @return {Plane} A reference to this plane.
	*/set(e,t){return this.normal=e,this.constant=t,this}/**
	* Copies all values from the given plane to this plane.
	*
	* @param {Plane} plane - The plane to copy.
	* @return {Plane} A reference to this plane.
	*/copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}/**
	* Creates a new plane and copies all values from this plane.
	*
	* @return {Plane} A new plane.
	*/clone(){return new this.constructor().copy(this)}/**
	* Computes the signed distance from the given 3D vector to this plane.
	* The sign of the distance indicates the half-space in which the points lies.
	* Zero means the point lies on the plane.
	*
	* @param {Vector3} point - A point in 3D space.
	* @return {Number} The signed distance.
	*/distanceToPoint(e){return this.normal.dot(e)+this.constant}/**
	* Sets the values of the plane from the given normal vector and a coplanar point.
	*
	* @param {Vector3} normal - A normalized vector.
	* @param {Vector3} point - A coplanar point.
	* @return {Plane} A reference to this plane.
	*/fromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}/**
	* Sets the values of the plane from three given coplanar points.
	*
	* @param {Vector3} a - A coplanar point.
	* @param {Vector3} b - A coplanar point.
	* @param {Vector3} c - A coplanar point.
	* @return {Plane} A reference to this plane.
	*/fromCoplanarPoints(e,t,i){return lM.subVectors(i,t).cross(lw.subVectors(e,t)).normalize(),this.fromNormalAndCoplanarPoint(lM,e),this}/**
	* Performs a plane/plane intersection test and stores the intersection point
	* to the given 3D vector. If no intersection is detected, *null* is returned.
	*
	* Reference: Intersection of Two Planes in Real-Time Collision Detection
	* by Christer Ericson (chapter 5.4.4)
	*
	* @param {Plane} plane - The plane to test.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/intersectPlane(e,t){// compute direction of intersection line
lS.crossVectors(this.normal,e.normal);// if d is zero, the planes are parallel (and separated)
// or coincident, so they’re not considered intersecting
let i=lS.dot(lS);return 0===i?null:(// compute point on intersection line
lM.copy(e.normal).multiplyScalar(this.constant),lw.copy(this.normal).multiplyScalar(e.constant),t.crossVectors(lM.sub(lw),lS).divideScalar(i),t)}/**
	* Returns true if the given plane intersects this plane.
	*
	* @param {Plane} plane - The plane to test.
	* @return {Boolean} The result of the intersection test.
	*/intersectsPlane(e){let t=this.normal.dot(e.normal);return 1!==Math.abs(t)}/**
	* Projects the given point onto the plane. The result is written
	* to the given vector.
	*
	* @param {Vector3} point - The point to project onto the plane.
	* @param {Vector3} result - The projected point.
	* @return {Vector3} The projected point.
	*/projectPoint(e,t){return lM.copy(this.normal).multiplyScalar(this.distanceToPoint(e)),t.subVectors(e,lM),t}/**
	* Returns true if the given plane is deep equal with this plane.
	*
	* @param {Plane} plane - The plane to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}//
function lT(){!1===document.hidden&&this.reset()}new oI,new aG,new aG,new aG,new oG,new lb,new a5,new aG,new aG,new aG,new aG;/**
* Base class for representing a term in a {@link FuzzyRule}.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class lA{/**
	* Clears the degree of membership value.
	*
	* @return {FuzzyTerm} A reference to this term.
	*/clearDegreeOfMembership(){}/**
	* Returns the degree of membership.
	*
	* @return {Number} Degree of membership.
	*/getDegreeOfMembership(){}/**
	* Updates the degree of membership by the given value. This method is used when
	* the term is part of a fuzzy rule's consequent.
	*
	* @param {Number} value - The value used to update the degree of membership.
	* @return {FuzzyTerm} A reference to this term.
	*/updateDegreeOfMembership(){}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){return{type:this.constructor.name}}}/**
* Base class for representing more complex fuzzy terms based on the
* composite design pattern.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzyTerm
*/class lE extends lA{/**
	* Constructs a new fuzzy composite term with the given values.
	*
	* @param {Array<FuzzyTerm>} terms - An arbitrary amount of fuzzy terms.
	*/constructor(e=[]){super(),/**
		* List of fuzzy terms.
		* @type {Array<FuzzyTerm>}
		*/this.terms=e}/**
	* Clears the degree of membership value.
	*
	* @return {FuzzyCompositeTerm} A reference to this term.
	*/clearDegreeOfMembership(){let e=this.terms;for(let t=0,i=e.length;t<i;t++)e[t].clearDegreeOfMembership();return this}/**
	* Updates the degree of membership by the given value. This method is used when
	* the term is part of a fuzzy rule's consequent.
	*
	* @param {Number} value - The value used to update the degree of membership.
	* @return {FuzzyCompositeTerm} A reference to this term.
	*/updateDegreeOfMembership(e){let t=this.terms;for(let i=0,n=t.length;i<n;i++)t[i].updateDegreeOfMembership(e);return this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();e.terms=[];for(let t=0,i=this.terms.length;t<i;t++){let i=this.terms[t];i instanceof lE?e.terms.push(i.toJSON()):e.terms.push(i.uuid)}return e}}/**
* Class for representing an AND operator. Can be used to construct
* fuzzy rules.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzyCompositeTerm
*/class lC extends lE{/**
	* Constructs a new fuzzy AND operator with the given values. The constructor
	* accepts and arbitrary amount of fuzzy terms.
	*/constructor(){let e=Array.from(arguments);super(e)}/**
	* Returns the degree of membership. The AND operator returns the minimum
	* degree of membership of the sets it is operating on.
	*
	* @return {Number} Degree of membership.
	*/getDegreeOfMembership(){let e=this.terms,t=1/0;for(let i=0,n=e.length;i<n;i++){let n=e[i],r=n.getDegreeOfMembership();r<t&&(t=r)}return t}}/**
* Hedges are special unary operators that can be employed to modify the meaning
* of a fuzzy set. The FAIRLY fuzzy hedge widens the membership function.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzyCompositeTerm
*/class lR extends lE{/**
	* Constructs a new fuzzy FAIRLY hedge with the given values.
	*
	* @param {FuzzyTerm} fuzzyTerm - The fuzzy term this hedge is working on.
	*/constructor(e=null){let t=null!==e?[e]:[];super(t)}// FuzzyTerm API
/**
	* Clears the degree of membership value.
	*
	* @return {FuzzyFAIRLY} A reference to this fuzzy hedge.
	*/clearDegreeOfMembership(){let e=this.terms[0];return e.clearDegreeOfMembership(),this}/**
	* Returns the degree of membership.
	*
	* @return {Number} Degree of membership.
	*/getDegreeOfMembership(){let e=this.terms[0],t=e.getDegreeOfMembership();return Math.sqrt(t)}/**
	* Updates the degree of membership by the given value.
	*
	* @return {FuzzyFAIRLY} A reference to this fuzzy hedge.
	*/updateDegreeOfMembership(e){let t=this.terms[0];return t.updateDegreeOfMembership(Math.sqrt(e)),this}}/**
* Class for representing an OR operator. Can be used to construct
* fuzzy rules.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzyCompositeTerm
*/class lP extends lE{/**
	* Constructs a new fuzzy AND operator with the given values. The constructor
	* accepts and arbitrary amount of fuzzy terms.
	*/constructor(){let e=Array.from(arguments);super(e)}/**
	* Returns the degree of membership. The AND operator returns the maximum
	* degree of membership of the sets it is operating on.
	*
	* @return {Number} Degree of membership.
	*/getDegreeOfMembership(){let e=this.terms,t=-1/0;for(let i=0,n=e.length;i<n;i++){let n=e[i],r=n.getDegreeOfMembership();r>t&&(t=r)}return t}}/**
* Hedges are special unary operators that can be employed to modify the meaning
* of a fuzzy set. The FAIRLY fuzzy hedge widens the membership function.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzyCompositeTerm
*/class lL extends lE{/**
	* Constructs a new fuzzy VERY hedge with the given values.
	*
	* @param {FuzzyTerm} fuzzyTerm - The fuzzy term this hedge is working on.
	*/constructor(e=null){let t=null!==e?[e]:[];super(t)}// FuzzyTerm API
/**
	* Clears the degree of membership value.
	*
	* @return {FuzzyVERY} A reference to this fuzzy hedge.
	*/clearDegreeOfMembership(){let e=this.terms[0];return e.clearDegreeOfMembership(),this}/**
	* Returns the degree of membership.
	*
	* @return {Number} Degree of membership.
	*/getDegreeOfMembership(){let e=this.terms[0],t=e.getDegreeOfMembership();return t*t}/**
	* Updates the degree of membership by the given value.
	*
	* @return {FuzzyVERY} A reference to this fuzzy hedge.
	*/updateDegreeOfMembership(e){let t=this.terms[0];return t.updateDegreeOfMembership(e*e),this}}/**
* Base class for fuzzy sets. This type of sets are defined by a membership function
* which can be any arbitrary shape but are typically triangular or trapezoidal. They define
* a gradual transition from regions completely outside the set to regions completely
* within the set, thereby enabling a value to have partial membership to a set.
*
* This class is derived from {@link FuzzyTerm} so it can be directly used in fuzzy rules.
* According to the composite design pattern, a fuzzy set can be considered as an atomic fuzzy term.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzyTerm
*/class lD extends lA{/**
	* Constructs a new fuzzy set with the given values.
	*
	* @param {Number} representativeValue - The maximum of the set's membership function.
	*/constructor(e=0){super(),/**
		* Represents the degree of membership to this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.degreeOfMembership=0,/**
		* The maximum of the set's membership function. For instance, if
		* the set is triangular then this will be the peak point of the triangular.
		* If the set has a plateau then this value will be the mid point of the
		* plateau. Used to avoid runtime calculations.
		* @type {Number}
		* @default 0
		*/this.representativeValue=e,/**
		* Represents the left border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.left=0,/**
		* Represents the right border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.right=0,//
this._uuid=null}/**
	* Unique ID, primarily used in context of serialization/deserialization.
	* @type {String}
	* @readonly
	*/get uuid(){return null===this._uuid&&(this._uuid=aH.generateUUID()),this._uuid}/**
	* Computes the degree of membership for the given value. Notice that this method
	* does not set {@link FuzzySet#degreeOfMembership} since other classes use it in
	* order to calculate intermediate degree of membership values. This method be
	* implemented by all concrete fuzzy set classes.
	*
	* @param {Number} value - The value used to calculate the degree of membership.
	* @return {Number} The degree of membership.
	*/computeDegreeOfMembership(){}// FuzzyTerm API
/**
	* Clears the degree of membership value.
	*
	* @return {FuzzySet} A reference to this fuzzy set.
	*/clearDegreeOfMembership(){return this.degreeOfMembership=0,this}/**
	* Returns the degree of membership.
	*
	* @return {Number} Degree of membership.
	*/getDegreeOfMembership(){return this.degreeOfMembership}/**
	* Updates the degree of membership by the given value. This method is used when
	* the set is part of a fuzzy rule's consequent.
	*
	* @return {FuzzySet} A reference to this fuzzy set.
	*/updateDegreeOfMembership(e){return e>this.degreeOfMembership&&(this.degreeOfMembership=e),this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.degreeOfMembership=this.degreeOfMembership,e.representativeValue=this.representativeValue,e.left=this.left,e.right=this.right,e.uuid=this.uuid,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {FuzzySet} A reference to this fuzzy set.
	*/fromJSON(e){return this.degreeOfMembership=e.degreeOfMembership,this.representativeValue=e.representativeValue,this.left=e.left,this.right=e.right,this._uuid=e.uuid,this}}/**
* Class for representing a fuzzy set that has a left shoulder shape. The range between
* the midpoint and left border point represents the same DOM.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzySet
*/class lO extends lD{/**
	* Constructs a new left shoulder fuzzy set with the given values.
	*
	* @param {Number} left - Represents the left border of this fuzzy set.
	* @param {Number} midpoint - Represents the peak value of this fuzzy set.
	* @param {Number} right - Represents the right border of this fuzzy set.
	*/constructor(e=0,t=0,i=0){super((t+e)/2),/**
		* Represents the left border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.left=e,/**
		* Represents the peak value of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.midpoint=t,/**
		* Represents the right border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.right=i}/**
	* Computes the degree of membership for the given value.
	*
	* @param {Number} value - The value used to calculate the degree of membership.
	* @return {Number} The degree of membership.
	*/computeDegreeOfMembership(e){let t=this.midpoint,i=this.left,n=this.right;return(// find DOM if the given value is left of the center or equal to the center
e>=i&&e<=t?1:e>t&&e<=n?1/(n-t)*(n-e):0)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.midpoint=this.midpoint,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {LeftShoulderFuzzySet} A reference to this fuzzy set.
	*/fromJSON(e){return super.fromJSON(e),this.midpoint=e.midpoint,this}}/**
* Class for representing a fuzzy set that has a right shoulder shape. The range between
* the midpoint and right border point represents the same DOM.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzySet
*/class lI extends lD{/**
	* Constructs a new right shoulder fuzzy set with the given values.
	*
	* @param {Number} left - Represents the left border of this fuzzy set.
	* @param {Number} midpoint - Represents the peak value of this fuzzy set.
	* @param {Number} right - Represents the right border of this fuzzy set.
	*/constructor(e=0,t=0,i=0){super((t+i)/2),/**
		* Represents the left border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.left=e,/**
		* Represents the peak value of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.midpoint=t,/**
		* Represents the right border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.right=i}/**
	* Computes the degree of membership for the given value.
	*
	* @param {Number} value - The value used to calculate the degree of membership.
	* @return {Number} The degree of membership.
	*/computeDegreeOfMembership(e){let t=this.midpoint,i=this.left,n=this.right;return(// find DOM if the given value is left of the center or equal to the center
e>=i&&e<=t?1/(t-i)*(e-i):e>t&&e<=n?1:0)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.midpoint=this.midpoint,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {RightShoulderFuzzySet} A reference to this fuzzy set.
	*/fromJSON(e){return super.fromJSON(e),this.midpoint=e.midpoint,this}}/**
* Class for representing a fuzzy set that is a singleton. In its range, the degree of
* membership is always one.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzySet
*/class lN extends lD{/**
	* Constructs a new singleton fuzzy set with the given values.
	*
	* @param {Number} left - Represents the left border of this fuzzy set.
	* @param {Number} midpoint - Represents the peak value of this fuzzy set.
	* @param {Number} right - Represents the right border of this fuzzy set.
	*/constructor(e=0,t=0,i=0){super(t),/**
		* Represents the left border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.left=e,/**
		* Represents the peak value of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.midpoint=t,/**
		* Represents the right border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.right=i}/**
	* Computes the degree of membership for the given value.
	*
	* @param {Number} value - The value used to calculate the degree of membership.
	* @return {Number} The degree of membership.
	*/computeDegreeOfMembership(e){let t=this.left,i=this.right;return e>=t&&e<=i?1:0}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.midpoint=this.midpoint,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {SingletonFuzzySet} A reference to this fuzzy set.
	*/fromJSON(e){return super.fromJSON(e),this.midpoint=e.midpoint,this}}/**
* Class for representing a fuzzy set that has a triangular shape. It can be defined
* by a left point, a midpoint (peak) and a right point.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments FuzzySet
*/class lz extends lD{/**
	* Constructs a new triangular fuzzy set with the given values.
	*
	* @param {Number} left - Represents the left border of this fuzzy set.
	* @param {Number} midpoint - Represents the peak value of this fuzzy set.
	* @param {Number} right - Represents the right border of this fuzzy set.
	*/constructor(e=0,t=0,i=0){super(t),/**
		* Represents the left border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.left=e,/**
		* Represents the peak value of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.midpoint=t,/**
		* Represents the right border of this fuzzy set.
		* @type {Number}
		* @default 0
		*/this.right=i}/**
	* Computes the degree of membership for the given value.
	*
	* @param {Number} value - The value used to calculate the degree of membership.
	* @return {Number} The degree of membership.
	*/computeDegreeOfMembership(e){let t=this.midpoint,i=this.left,n=this.right;return(// find DOM if the given value is left of the center or equal to the center
e>=i&&e<=t?1/(t-i)*(e-i):e>t&&e<=n?1/(n-t)*(n-e):0)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.midpoint=this.midpoint,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {TriangularFuzzySet} A reference to this fuzzy set.
	*/fromJSON(e){return super.fromJSON(e),this.midpoint=e.midpoint,this}}/**
* Class for representing a fuzzy rule. Fuzzy rules are comprised of an antecedent and
* a consequent in the form: IF antecedent THEN consequent.
*
* Compared to ordinary if/else statements with discrete values, the consequent term
* of a fuzzy rule can fire to a matter of degree.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class lU{/**
	* Constructs a new fuzzy rule with the given values.
	*
	* @param {FuzzyTerm} antecedent - Represents the condition of the rule.
	* @param {FuzzyTerm} consequence - Describes the consequence if the condition is satisfied.
	*/constructor(e=null,t=null){/**
		* Represents the condition of the rule.
		* @type {?FuzzyTerm}
		* @default null
		*/this.antecedent=e,/**
		* Describes the consequence if the condition is satisfied.
		* @type {?FuzzyTerm}
		* @default null
		*/this.consequence=t}/**
	* Initializes the consequent term of this fuzzy rule.
	*
	* @return {FuzzyRule} A reference to this fuzzy rule.
	*/initConsequence(){return this.consequence.clearDegreeOfMembership(),this}/**
	* Evaluates the rule and updates the degree of membership of the consequent term with
	* the degree of membership of the antecedent term.
	*
	* @return {FuzzyRule} A reference to this fuzzy rule.
	*/evaluate(){return this.consequence.updateDegreeOfMembership(this.antecedent.getDegreeOfMembership()),this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e={},t=this.antecedent,i=this.consequence;return e.type=this.constructor.name,e.antecedent=t instanceof lE?t.toJSON():t.uuid,e.consequence=i instanceof lE?i.toJSON():i.uuid,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @param {Map<String,FuzzySet>} fuzzySets - Maps fuzzy sets to UUIDs.
	* @return {FuzzyRule} A reference to this fuzzy rule.
	*/fromJSON(e,t){function i(e){if("string"==typeof e)return t.get(e)||null;{let t;// composite term
let n=e.type;switch(n){case"FuzzyAND":t=new lC;break;case"FuzzyOR":t=new lP;break;case"FuzzyVERY":t=new lL;break;case"FuzzyFAIRLY":t=new lR;break;default:ak.error("YUKA.FuzzyRule: Unsupported operator type:",n);return}let r=e.terms;for(let e=0,n=r.length;e<n;e++)t.terms.push(i(r[e]));return t}}return this.antecedent=i(e.antecedent),this.consequence=i(e.consequence),this}}/**
* Class for representing a fuzzy linguistic variable (FLV). A FLV is the
* composition of one or more fuzzy sets to represent a concept or domain
* qualitatively. For example fuzzs sets "Dumb", "Average", and "Clever"
* are members of the fuzzy linguistic variable "IQ".
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class lk{/**
	* Constructs a new fuzzy linguistic variable.
	*/constructor(){/**
		* An array of the fuzzy sets that comprise this FLV.
		* @type {Array<FuzzySet>}
		* @readonly
		*/this.fuzzySets=[],/**
		* The minimum value range of this FLV. This value is
		* automatically updated when adding/removing fuzzy sets.
		* @type {Number}
		* @default Infinity
		* @readonly
		*/this.minRange=1/0,/**
		* The maximum value range of this FLV. This value is
		* automatically updated when adding/removing fuzzy sets.
		* @type {Number}
		* @default - Infinity
		* @readonly
		*/this.maxRange=-1/0}/**
	* Adds the given fuzzy set to this FLV.
	*
	* @param {FuzzySet} fuzzySet - The fuzzy set to add.
	* @return {FuzzyVariable} A reference to this FLV.
	*/add(e){return this.fuzzySets.push(e),e.left<this.minRange&&(this.minRange=e.left),e.right>this.maxRange&&(this.maxRange=e.right),this}/**
	* Removes the given fuzzy set from this FLV.
	*
	* @param {FuzzySet} fuzzySet - The fuzzy set to remove.
	* @return {FuzzyVariable} A reference to this FLV.
	*/remove(e){let t=this.fuzzySets,i=t.indexOf(e);t.splice(i,1),// iterate over all fuzzy sets to recalculate the min/max range
this.minRange=1/0,this.maxRange=-1/0;for(let e=0,i=t.length;e<i;e++){let i=t[e];i.left<this.minRange&&(this.minRange=i.left),i.right>this.maxRange&&(this.maxRange=i.right)}return this}/**
	* Fuzzifies a value by calculating its degree of membership in each of
	* this variable's fuzzy sets.
	*
	* @param {Number} value - The crips value to fuzzify.
	* @return {FuzzyVariable} A reference to this FLV.
	*/fuzzify(e){if(e<this.minRange||e>this.maxRange){ak.warn("YUKA.FuzzyVariable: Value for fuzzification out of range.");return}let t=this.fuzzySets;for(let i=0,n=t.length;i<n;i++){let n=t[i];n.degreeOfMembership=n.computeDegreeOfMembership(e)}return this}/**
	* Defuzzifies the FLV using the "Average of Maxima" (MaxAv) method.
	*
	* @return {Number} The defuzzified, crips value.
	*/defuzzifyMaxAv(){// the average of maxima (MaxAv for short) defuzzification method scales the
// representative value of each fuzzy set by its DOM and takes the average
let e=this.fuzzySets,t=0,i=0;for(let n=0,r=e.length;n<r;n++){let r=e[n];t+=r.degreeOfMembership,i+=r.representativeValue*r.degreeOfMembership}return 0===t?0:i/t}/**
	* Defuzzifies the FLV using the "Centroid" method.
	*
	* @param {Number} samples - The amount of samples used for defuzzification.
	* @return {Number} The defuzzified, crips value.
	*/defuzzifyCentroid(e=10){let t=this.fuzzySets,i=(this.maxRange-this.minRange)/e,n=0,r=0;for(let s=1;s<=e;s++){let e=this.minRange+s*i;for(let i=0,s=t.length;i<s;i++){let s=t[i],a=Math.min(s.degreeOfMembership,s.computeDegreeOfMembership(e));n+=a,r+=e*a}}return 0===n?0:r/n}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e={type:this.constructor.name,fuzzySets:[],minRange:this.minRange.toString(),maxRange:this.maxRange.toString()};for(let t=0,i=this.fuzzySets.length;t<i;t++){let i=this.fuzzySets[t];e.fuzzySets.push(i.toJSON())}return e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {FuzzyVariable} A reference to this fuzzy variable.
	*/fromJSON(e){this.minRange=parseFloat(e.minRange),this.maxRange=parseFloat(e.maxRange);for(let t=0,i=e.fuzzySets.length;t<i;t++){let i=e.fuzzySets[t];switch(i.type){case"LeftShoulderFuzzySet":this.fuzzySets.push(new lO().fromJSON(i));break;case"RightShoulderFuzzySet":this.fuzzySets.push(new lI().fromJSON(i));break;case"SingletonFuzzySet":this.fuzzySets.push(new lN().fromJSON(i));break;case"TriangularFuzzySet":this.fuzzySets.push(new lz().fromJSON(i));break;default:ak.error("YUKA.FuzzyVariable: Unsupported fuzzy set type:",i.type)}}return this}}/**
* Class for representing a fuzzy module. Instances of this class are used by
* game entities for fuzzy inference. A fuzzy module is a collection of fuzzy variables
* and the rules that operate on them.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class lB{/**
	* Constructs a new fuzzy module.
	*/constructor(){/**
		* An array of the fuzzy rules.
		* @type {Array<FuzzyRule>}
		* @readonly
		*/this.rules=[],/**
		* A map of FLVs.
		* @type {Map<String,FuzzyVariable>}
		* @readonly
		*/this.flvs=new Map}/**
	* Adds the given FLV under the given name to this fuzzy module.
	*
	* @param {String} name - The name of the FLV.
	* @param {FuzzyVariable} flv - The FLV to add.
	* @return {FuzzyModule} A reference to this fuzzy module.
	*/addFLV(e,t){return this.flvs.set(e,t),this}/**
	* Remove the FLV under the given name from this fuzzy module.
	*
	* @param {String} name - The name of the FLV to remove.
	* @return {FuzzyModule} A reference to this fuzzy module.
	*/removeFLV(e){return this.flvs.delete(e),this}/**
	* Adds the given fuzzy rule to this fuzzy module.
	*
	* @param {FuzzyRule} rule - The fuzzy rule to add.
	* @return {FuzzyModule} A reference to this fuzzy module.
	*/addRule(e){return this.rules.push(e),this}/**
	* Removes the given fuzzy rule from this fuzzy module.
	*
	* @param {FuzzyRule} rule - The fuzzy rule to remove.
	* @return {FuzzyModule} A reference to this fuzzy module.
	*/removeRule(e){let t=this.rules,i=t.indexOf(e);return t.splice(i,1),this}/**
	* Calls the fuzzify method of the defined FLV with the given value.
	*
	* @param {String} name - The name of the FLV
	* @param {Number} value - The crips value to fuzzify.
	* @return {FuzzyModule} A reference to this fuzzy module.
	*/fuzzify(e,t){let i=this.flvs.get(e);return i.fuzzify(t),this}/**
	* Given a fuzzy variable and a defuzzification method this returns a crisp value.
	*
	* @param {String} name - The name of the FLV
	* @param {String} type - The type of defuzzification.
	* @return {Number} The defuzzified, crips value.
	*/defuzzify(e,t=lB.DEFUZ_TYPE.MAXAV){let i;let n=this.flvs,r=this.rules;this._initConsequences();for(let e=0,t=r.length;e<t;e++){let t=r[e];t.evaluate()}let s=n.get(e);switch(t){case lB.DEFUZ_TYPE.MAXAV:i=s.defuzzifyMaxAv();break;case lB.DEFUZ_TYPE.CENTROID:i=s.defuzzifyCentroid();break;default:ak.warn("YUKA.FuzzyModule: Unknown defuzzification method:",t),i=s.defuzzifyMaxAv()}return i}_initConsequences(){let e=this.rules;// initializes the consequences of all rules.
for(let t=0,i=e.length;t<i;t++){let i=e[t];i.initConsequence()}return this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e={rules:[],flvs:[]},t=this.rules;for(let i=0,n=t.length;i<n;i++)e.rules.push(t[i].toJSON());// flvs
let i=this.flvs;for(let[t,n]of i)e.flvs.push({name:t,flv:n.toJSON()});return e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {FuzzyModule} A reference to this fuzzy module.
	*/fromJSON(e){let t=new Map,i=e.flvs;// used for rules
for(let e=0,n=i.length;e<n;e++){let n=i[e],r=n.name,s=new lk().fromJSON(n.flv);for(let e of(this.addFLV(r,s),s.fuzzySets))t.set(e.uuid,e)}// rules
let n=e.rules;for(let e=0,i=n.length;e<i;e++){let i=n[e],r=new lU().fromJSON(i,t);this.addRule(r)}return this}}lB.DEFUZ_TYPE=Object.freeze({MAXAV:0,CENTROID:1});/**
* Base class for representing a goal in context of Goal-driven agent design.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class lF{/**
	* Constructs a new goal.
	*
	* @param {GameEntity} owner - The owner of this goal.
	*/constructor(e=null){/**
		* The owner of this goal.
		* @type {?GameEntity}
		* @default null
		*/this.owner=e,/**
		* The status of this goal.
		* @type {Status}
		* @default INACTIVE
		*/this.status=lF.STATUS.INACTIVE}/**
	* Executed when this goal is activated.
	*/activate(){}/**
	* Executed in each simulation step.
	*/execute(){}/**
	* Executed when this goal is satisfied.
	*/terminate(){}/**
	* Goals can handle messages. Many don't though, so this defines a default behavior
	*
	* @param {Telegram} telegram - The telegram with the message data.
	* @return {Boolean} Whether the message was processed or not.
	*/handleMessage(){return!1}/**
	* Returns true if the status of this goal is *ACTIVE*.
	*
	* @return {Boolean} Whether the goal is active or not.
	*/active(){return this.status===lF.STATUS.ACTIVE}/**
	* Returns true if the status of this goal is *INACTIVE*.
	*
	* @return {Boolean} Whether the goal is inactive or not.
	*/inactive(){return this.status===lF.STATUS.INACTIVE}/**
	* Returns true if the status of this goal is *COMPLETED*.
	*
	* @return {Boolean} Whether the goal is completed or not.
	*/completed(){return this.status===lF.STATUS.COMPLETED}/**
	* Returns true if the status of this goal is *FAILED*.
	*
	* @return {Boolean} Whether the goal is failed or not.
	*/failed(){return this.status===lF.STATUS.FAILED}/**
	* Ensures the goal is replanned if it has failed.
	*
	* @return {Goal} A reference to this goal.
	*/replanIfFailed(){return!0===this.failed()&&(this.status=lF.STATUS.INACTIVE),this}/**
	* Ensures the goal is activated if it is inactive.
	*
	* @return {Goal} A reference to this goal.
	*/activateIfInactive(){return!0===this.inactive()&&(this.status=lF.STATUS.ACTIVE,this.activate()),this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){return{type:this.constructor.name,owner:this.owner.uuid,status:this.status}}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {Goal} A reference to this goal.
	*/fromJSON(e){return this.owner=e.owner,this.status=e.status,this}/**
	* Restores UUIDs with references to GameEntity objects.
	*
	* @param {Map<String,GameEntity>} entities - Maps game entities to UUIDs.
	* @return {Goal} A reference to this goal.
	*/resolveReferences(e){return this.owner=e.get(this.owner)||null,this}}lF.STATUS=Object.freeze({ACTIVE:"active",INACTIVE:"inactive",COMPLETED:"completed",FAILED:"failed"// the goal has failed and will either replan or be removed on the next update
}),new aG,new aG,new aG,new aG(1,0,0),new aG(0,1,0),new aG(0,0,1),new aG,new aG,new aG,new aG;const lV=new aG,lH=new aG;/**
* Class representing a 3D line segment.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class lG{/**
	* Constructs a new line segment with the given values.
	*
	* @param {Vector3} from - The start point of the line segment.
	* @param {Vector3} to - The end point of the line segment.
	*/constructor(e=new aG,t=new aG){/**
		* The start point of the line segment.
		* @type {Vector3}
		*/this.from=e,/**
		* The end point of the line segment.
		* @type {Vector3}
		*/this.to=t}/**
	* Sets the given values to this line segment.
	*
	* @param {Vector3} from - The start point of the line segment.
	* @param {Vector3} to - The end point of the line segment.
	* @return {LineSegment} A reference to this line segment.
	*/set(e,t){return this.from=e,this.to=t,this}/**
	* Copies all values from the given line segment to this line segment.
	*
	* @param {LineSegment} lineSegment - The line segment to copy.
	* @return {LineSegment} A reference to this line segment.
	*/copy(e){return this.from.copy(e.from),this.to.copy(e.to),this}/**
	* Creates a new line segment and copies all values from this line segment.
	*
	* @return {LineSegment} A new line segment.
	*/clone(){return new this.constructor().copy(this)}/**
	* Computes the difference vector between the end and start point of this
	* line segment and stores the result in the given vector.
	*
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/delta(e){return e.subVectors(this.to,this.from)}/**
	* Computes a position on the line segment according to the given t value
	* and stores the result in the given 3D vector. The t value has usually a range of
	* [0, 1] where 0 means start position and 1 the end position.
	*
	* @param {Number} t - A scalar value representing a position on the line segment.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/at(e,t){return this.delta(t).multiplyScalar(e).add(this.from)}/**
	* Computes the closest point on an infinite line defined by the line segment.
	* It's possible to clamp the closest point so it does not exceed the start and
	* end position of the line segment.
	*
	* @param {Vector3} point - A point in 3D space.
	* @param {Boolean} clampToLine - Indicates if the results should be clamped.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The closest point.
	*/closestPointToPoint(e,t,i){let n=this.closestPointToPointParameter(e,t);return this.at(n,i)}/**
	* Computes a scalar value which represents the closest point on an infinite line
	* defined by the line segment. It's possible to clamp this value so it does not
	* exceed the start and end position of the line segment.
	*
	* @param {Vector3} point - A point in 3D space.
	* @param {Boolean} clampToLine - Indicates if the results should be clamped.
	* @return {Number} A scalar representing the closest point.
	*/closestPointToPointParameter(e,t=!0){lV.subVectors(e,this.from),lH.subVectors(this.to,this.from);let i=lH.dot(lH),n=lH.dot(lV),r=n/i;return t&&(r=aH.clamp(r,0,1)),r}/**
	* Returns true if the given line segment is deep equal with this line segment.
	*
	* @param {LineSegment} lineSegment - The line segment to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){return e.from.equals(this.from)&&e.to.equals(this.to)}}const lW=new aG,lq=new aG,lj=new aG,lJ=new aG,lX=new aG,lY=new aG,lK=new aG;/**
* Implementation of a half-edge data structure, also known as
* {@link https://en.wikipedia.org/wiki/Doubly_connected_edge_list Doubly connected edge list}.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class lZ{/**
	* Constructs a new half-edge.
	*
	* @param {Vector3} vertex - The vertex of this half-edge. It represents the head/destination of the respective full edge.
	*/constructor(e=new aG){/**
		* The vertex of this half-edge. It represents the head/destination of the respective full edge.
		* @type {Vector3}
		*/this.vertex=e,/**
		* A reference to the next half-edge.
		* @type {?HalfEdge}
		* @default null
		*/this.next=null,/**
		* A reference to the previous half-edge.
		* @type {?HalfEdge}
		* @default null
		*/this.prev=null,/**
		* A reference to the opponent half-edge.
		* @type {?HalfEdge}
		* @default null
		*/this.twin=null,/**
		* A reference to its polygon/face.
		* @type {?Polygon}
		* @default null
		*/this.polygon=null}/**
	* Returns the tail of this half-edge. That's a reference to the previous
	* half-edge vertex.
	*
	* @return {Vector3} The tail vertex.
	*/tail(){return this.prev?this.prev.vertex:null}/**
	* Returns the head of this half-edge. That's a reference to the own vertex.
	*
	* @return {Vector3} The head vertex.
	*/head(){return this.vertex}/**
	* Computes the length of this half-edge.
	*
	* @return {Number} The length of this half-edge.
	*/length(){let e=this.tail(),t=this.head();return null!==e?e.distanceTo(t):-1}/**
	* Computes the squared length of this half-edge.
	*
	* @return {Number} The squared length of this half-edge.
	*/squaredLength(){let e=this.tail(),t=this.head();return null!==e?e.squaredDistanceTo(t):-1}/**
	* Links the given opponent half edge with this one.
	*
	* @param {HalfEdge} edge - The opponent edge to link.
	* @return {HalfEdge} A reference to this half edge.
	*/linkOpponent(e){return this.twin=e,e.twin=this,this}/**
	* Computes the direction of this half edge. The method assumes the half edge
	* has a valid reference to a previous half edge.
	*
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/getDirection(e){return e.subVectors(this.vertex,this.prev.vertex).normalize()}}/**
* Class for representing a planar polygon with an arbitrary amount of edges.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @author {@link https://github.com/robp94|robp94}
*/class lQ{/**
	* Constructs a new polygon.
	*/constructor(){/**
		* The centroid of this polygon.
		* @type {Vector3}
		*/this.centroid=new aG,/**
		* A reference to the first half-edge of this polygon.
		* @type {?HalfEdge}
		* @default null
		*/this.edge=null,/**
		* A plane abstraction of this polygon.
		* @type {Plane}
		*/this.plane=new lb}/**
	* Creates the polygon based on the given array of points in 3D space.
	* The method assumes the contour (the sequence of points) is defined
	* in CCW order.
	*
	* @param {Array<Vector3>} points - The array of points.
	* @return {Polygon} A reference to this polygon.
	*/fromContour(e){let t=[];if(e.length<3)return ak.error("YUKA.Polygon: Unable to create polygon from contour. It needs at least three points."),this;for(let i=0,n=e.length;i<n;i++){let n=new lZ(e[i]);t.push(n)}// link edges
for(let e=0,i=t.length;e<i;e++){let n,r,s;0===e?(n=t[e],r=t[i-1],s=t[e+1]):e===i-1?(n=t[e],r=t[e-1],s=t[0]):(n=t[e],r=t[e-1],s=t[e+1]),n.prev=r,n.next=s,n.polygon=this}return(//
this.edge=t[0],//
this.plane.fromCoplanarPoints(e[0],e[1],e[2]),this)}/**
	* Computes the centroid for this polygon.
	*
	* @return {Polygon} A reference to this polygon.
	*/computeCentroid(){let e=this.centroid,t=this.edge,i=0;e.set(0,0,0);do e.add(t.vertex),i++,t=t.next;while(t!==this.edge)return e.divideScalar(i),this}/**
	* Returns true if the polygon contains the given point.
	*
	* @param {Vector3} point - The point to test.
	* @param {Number} epsilon - A tolerance value.
	* @return {Boolean} Whether this polygon contain the given point or not.
	*/contains(e,t=.001){let i=this.plane,n=this.edge;// convex test
do{let t=n.tail(),i=n.head();if(!1===l$(t,i,e))return!1;n=n.next}while(n!==this.edge)// ensure the given point lies within a defined tolerance range
let r=i.distanceToPoint(e);return!(Math.abs(r)>t)}/**
	* Returns true if the polygon is convex.
	*
	* @param {Boolean} ccw - Whether the winding order is CCW or not.
	* @return {Boolean} Whether this polygon is convex or not.
	*/convex(e=!0){let t=this.edge;do{let i=t.tail(),n=t.head(),r=t.next.head();if(e){if(!1===l$(i,n,r))return!1}else if(!1===l$(r,n,i))return!1;t=t.next}while(t!==this.edge)return!0}/**
	* Returns true if the polygon is coplanar.
	*
	* @param {Number} epsilon - A tolerance value.
	* @return {Boolean} Whether this polygon is coplanar or not.
	*/coplanar(e=.001){let t=this.plane,i=this.edge;do{let n=t.distanceToPoint(i.vertex);if(Math.abs(n)>e)return!1;i=i.next}while(i!==this.edge)return!0}/**
	* Computes the signed distance from the given 3D vector to this polygon. The method
	* uses the polygon's plane abstraction in order to compute this value.
	*
	* @param {Vector3} point - A point in 3D space.
	* @return {Number} The signed distance from the given point to this polygon.
	*/distanceToPoint(e){return this.plane.distanceToPoint(e)}/**
	* Determines the contour (sequence of points) of this polygon and
	* stores the result in the given array.
	*
	* @param {Array<Vector3>} result - The result array.
	* @return {Array<Vector3>} The result array.
	*/getContour(e){let t=this.edge;e.length=0;do e.push(t.vertex),t=t.next;while(t!==this.edge)return e}}// from the book "Computational Geometry in C, Joseph O'Rourke"
function l$(e,t,i){return aH.area(e,t,i)>=0}/**
* Base class for polyhedra. It is primarily designed for the internal usage in Yuka.
* Objects of this class are always build up from faces. The edges, vertices and
* the polyhedron's centroid have to be derived from a valid face definition with the
* respective methods.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class l0{/**
	* Constructs a new polyhedron.
	*/constructor(){/**
		* The faces of this polyhedron.
		* @type {Array<Polygon>}
		*/this.faces=[],/**
		* A list of unique edges (no opponent half edges).
		* @type {Array<HalfEdge>}
		*/this.edges=[],/**
		* A list of unique vertices.
		* @type {Array<Vector3>}
		*/this.vertices=[],/**
		* The centroid of this polyhedron.
		* @type {Vector3}
		*/this.centroid=new aG}/**
	* Computes the centroid of this polyhedron. Assumes its faces
	* have valid centroids.
	*
	* @return {Polyhedron} A reference to this polyhedron.
	*/computeCentroid(){let e=this.centroid,t=this.faces;e.set(0,0,0);for(let i=0,n=t.length;i<n;i++){let n=t[i];e.add(n.centroid)}return e.divideScalar(t.length),this}/**
	* Computes unique vertices of this polyhedron. Assumes {@link Polyhedron#faces}
	* is properly set.
	*
	* @return {Polyhedron} A reference to this polyhedron.
	*/computeUniqueVertices(){let e=this.faces,t=this.vertices;t.length=0;let i=new Set;// iterate over all faces
for(let t=0,n=e.length;t<n;t++){let n=e[t],r=n.edge;// process all edges of a faces
do // add vertex to set (assuming half edges share unique vertices)
i.add(r.vertex),r=r.next;while(r!==n.edge)}return t.push(...i),this}/**
	* Computes unique edges of this polyhedron. Assumes {@link Polyhedron#faces}
	* is properly set.
	*
	* @return {Polyhedron} A reference to this polyhedron.
	*/computeUniqueEdges(){let e=this.faces,t=this.edges;t.length=0;// iterate over all faces
for(let i=0,n=e.length;i<n;i++){let n=e[i],r=n.edge;// process all edges of a faces
do!1===t.includes(r.twin)&&t.push(r),r=r.next;while(r!==n.edge)}return this}/**
	* Configures this polyhedron so it does represent the given AABB.
	*
	* @return {Polyhedron} A reference to this polyhedron.
	*/fromAABB(e){this.faces.length=0,this.vertices.length=0;let t=e.min,i=e.max,n=[new aG(i.x,i.y,i.z),new aG(i.x,i.y,t.z),new aG(i.x,t.y,i.z),new aG(i.x,t.y,t.z),new aG(t.x,i.y,i.z),new aG(t.x,i.y,t.z),new aG(t.x,t.y,i.z),new aG(t.x,t.y,t.z)];this.vertices.push(...n);let r=new lQ().fromContour([n[4],n[0],n[1],n[5]]),s=new lQ().fromContour([n[2],n[3],n[1],n[0]]),a=new lQ().fromContour([n[6],n[2],n[0],n[4]]),o=new lQ().fromContour([n[3],n[7],n[5],n[1]]),l=new lQ().fromContour([n[3],n[2],n[6],n[7]]),h=new lQ().fromContour([n[7],n[6],n[4],n[5]]);return(// link edges
r.edge.linkOpponent(h.edge.prev),r.edge.next.linkOpponent(a.edge.prev),r.edge.next.next.linkOpponent(s.edge.prev),r.edge.prev.linkOpponent(o.edge.prev),l.edge.linkOpponent(o.edge.next),l.edge.next.linkOpponent(s.edge.next),l.edge.next.next.linkOpponent(a.edge.next),l.edge.prev.linkOpponent(h.edge.next),h.edge.linkOpponent(o.edge.next.next),o.edge.linkOpponent(s.edge.next.next),s.edge.linkOpponent(a.edge.next.next),a.edge.linkOpponent(h.edge.next.next),//
this.faces.push(r,s,a,o,l,h),// compute centroids
r.computeCentroid(),s.computeCentroid(),a.computeCentroid(),o.computeCentroid(),l.computeCentroid(),h.computeCentroid(),e.getCenter(this.centroid),//
this.computeUniqueEdges(),this)}}const l1=new lG,l3=new lb,l2=new aG,l5=new aG(0,1,0),l4=new /**
* Implementation of the separating axis theorem (SAT). Used to detect intersections
* between convex polyhedra. The code is based on the presentation {@link http://twvideo01.ubm-us.net/o1/vault/gdc2013/slides/822403Gregorius_Dirk_TheSeparatingAxisTest.pdf The Separating Axis Test between convex polyhedra}
* by Dirk Gregorius (Valve Software) from GDC 2013.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class{/**
	* Returns true if the given convex polyhedra intersect. A polyhedron is just
	* an array of {@link Polygon} objects.
	*
	* @param {Polyhedron} polyhedronA - The first convex polyhedron.
	* @param {Polyhedron} polyhedronB - The second convex polyhedron.
	* @return {Boolean} Whether there is an intersection or not.
	*/intersects(e,t){let i=this._checkFaceDirections(e,t);if(i)return!1;let n=this._checkFaceDirections(t,e);if(n)return!1;let r=this._checkEdgeDirections(e,t);return!r}// check possible separating axes from the first given polyhedron. the axes
// are derived from the respective face normals
_checkFaceDirections(e,t){let i=e.faces;for(let e=0,n=i.length;e<n;e++){let n=i[e],r=n.plane;lq.copy(r.normal).multiplyScalar(-1);let s=this._getSupportVertex(t,lq),a=r.distanceToPoint(s);if(a>0)return!0;// separating axis found
}return!1}// check with possible separating axes computed via the cross product between
// all edge combinations of both polyhedra
_checkEdgeDirections(e,t){let i=e.edges,n=t.edges;for(let t=0,r=i.length;t<r;t++){let r=i[t];for(let t=0,i=n.length;t<i;t++){let i=n[t];// edge pruning: only consider edges if they build a face on the minkowski difference
if(r.getDirection(lj),i.getDirection(lJ),this._minkowskiFace(r,lj,i,lJ)){// compute axis
let t=this._distanceBetweenEdges(r,lj,i,lJ,e);if(t>0)return!0;// separating axis found
}}}return!1}// return the most extreme vertex into a given direction
_getSupportVertex(e,t){let i=-1/0,n=null,r=e.vertices;for(let e=0,s=r.length;e<s;e++){let s=r[e],a=s.dot(t);// check vertex to find the best support point
a>i&&(i=a,n=s)}return n}// returns true if the given edges build a face on the minkowski difference
_minkowskiFace(e,t,i,n){// get face normals which define the vertices of the arcs on the gauss map
let r=e.polygon.plane.normal,s=e.twin.polygon.plane.normal;lX.copy(i.polygon.plane.normal),lY.copy(i.twin.polygon.plane.normal),// negate normals c and d to account for minkowski difference
lX.multiplyScalar(-1),lY.multiplyScalar(-1);// compute triple products
// it's not necessary to compute the cross product since edges of convex polyhedron
// have same direction as the cross product between their adjacent face normals
let a=lX.dot(t),o=lY.dot(t),l=r.dot(n),h=s.dot(n);// check signs of plane test
return a*o<0&&l*h<0&&a*h>0}// use gauss map to compute the distance between two edges
_distanceBetweenEdges(e,t,i,n,r){return(// skip parallel edges
1===Math.abs(t.dot(n))?-1/0:(// build plane through one edge
lW.crossVectors(t,n).normalize(),0>lW.dot(lK.subVectors(e.vertex,r.centroid))&&lW.multiplyScalar(-1),lW.dot(lK.subVectors(i.vertex,e.vertex))))}};/**
* Class representing a convex hull. This is an implementation of the Quickhull algorithm
* based on the presentation {@link http://media.steampowered.com/apps/valve/2014/DirkGregorius_ImplementingQuickHull.pdf Implementing QuickHull}
* by Dirk Gregorius (Valve Software) from GDC 2014. The algorithm has an average runtime
* complexity of O(nlog(n)), whereas in the worst case it takes O(n²).
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments Polyhedron
*/class l6 extends l0{/**
	* Constructs a new convex hull.
	*/constructor(){super(),/**
		* Whether faces of the convex hull should be merged or not.
		* @type {Boolean}
		* @default true
		*/this.mergeFaces=!0,// tolerance value for various (float) compare operations
this._tolerance=-1,// this array represents the vertices which will be enclosed by the convex hull
this._vertices=[],// two doubly linked lists for easier vertex processing
this._assigned=new l9,this._unassigned=new l9}/**
	* Returns true if the given point is inside this convex hull.
	*
	* @param {Vector3} point - A point in 3D space.
	* @return {Boolean} Whether the given point is inside this convex hull or not.
	*/containsPoint(e){let t=this.faces;// use the internal plane abstraction of each face in order to test
// on what half space the point lies
for(let i=0,n=t.length;i<n;i++)// if the signed distance is greater than the tolerance value, the point
// is outside and we can stop processing
if(t[i].distanceToPoint(e)>this._tolerance)return!1;return!0}/**
	* Returns true if this convex hull intersects with the given AABB.
	*
	* @param {AABB} aabb - The AABB to test.
	* @return {Boolean} Whether this convex hull intersects with the given AABB or not.
	*/intersectsAABB(e){if(void 0===i)i=new l0().fromAABB(e);else{// otherwise just ensure up-to-date vertex data.
// the topology of the polyhedron is equal for all AABBs
let t=e.min,n=e.max,r=i.vertices;r[0].set(n.x,n.y,n.z),r[1].set(n.x,n.y,t.z),r[2].set(n.x,t.y,n.z),r[3].set(n.x,t.y,t.z),r[4].set(t.x,n.y,n.z),r[5].set(t.x,n.y,t.z),r[6].set(t.x,t.y,n.z),r[7].set(t.x,t.y,t.z),e.getCenter(i.centroid)}return l4.intersects(this,i)}/**
	* Returns true if this convex hull intersects with the given one.
	*
	* @param {ConvexHull} convexHull - The convex hull to test.
	* @return {Boolean} Whether this convex hull intersects with the given one or not.
	*/intersectsConvexHull(e){return l4.intersects(this,e)}/**
	* Computes a convex hull that encloses the given set of points. The computation requires
	* at least four points.
	*
	* @param {Array<Vector3>} points - An array of 3D vectors representing points in 3D space.
	* @return {ConvexHull} A reference to this convex hull.
	*/fromPoints(e){if(e.length<4)return ak.error("YUKA.ConvexHull: The given points array needs at least four points."),this;// wrap all points into the internal vertex data structure
for(let t=0,i=e.length;t<i;t++)this._vertices.push(new l7(e[t]));return(// generate the convex hull
this._generate(),this)}// private API
// adds a single face to the convex hull by connecting it with the respective horizon edge
_addAdjoiningFace(e,t){// all the half edges are created in ccw order thus the face is always pointing outside the hull
let i=new l8(e.point,t.prev.vertex,t.vertex);return this.faces.push(i),// join face.getEdge( - 1 ) with the horizon's opposite edge face.getEdge( - 1 ) = face.getEdge( 2 )
i.getEdge(-1).linkOpponent(t.twin),i.getEdge(0);// the half edge whose vertex is the given one
}// adds new faces by connecting the horizon with the new point of the convex hull
_addNewFaces(e,t){let i=[],n=null,r=null;for(let s=0,a=t.length;s<a;s++){// returns the right side edge
let a=this._addAdjoiningFace(e,t[s]);null===n?n=a:a.next.linkOpponent(r),i.push(a.polygon),r=a}return(// perform final join of new faces
n.next.linkOpponent(r),i)}// assigns a single vertex to the given face. that means this face can "see"
// the vertex and its distance to the vertex is greater than all other faces
_addVertexToFace(e,t){return e.face=t,null===t.outside?(this._assigned.append(e),t.outside=e):this._assigned.insertAfter(t.outside,e),this}// the base iteration of the algorithm. adds a new vertex to the convex hull by
// connecting faces from the horizon with it.
_addVertexToHull(e){let t=[];this._unassigned.clear(),this._computeHorizon(e.point,null,e.face,t);let i=this._addNewFaces(e,t);return(// reassign 'unassigned' vertices to the new faces
this._resolveUnassignedPoints(i),this)}// frees memory by resetting internal data structures
_reset(){return this._vertices.length=0,this._assigned.clear(),this._unassigned.clear(),this}// computes the initial hull of the algorithm. it's a tetrahedron created
// with the extreme vertices of the given set of points
_computeInitialHull(){let e,t,i,n,r,s;let a=this._vertices,o=this._computeExtremes(),l=o.min,h=o.max;s=h.x.point.x-l.x.point.x,e=l.x,t=h.x,// check y
(r=h.y.point.y-l.y.point.y)>s&&(e=l.y,t=h.y,s=r),// check z
(r=h.z.point.z-l.z.point.z)>s&&(e=l.z,t=h.z),// 2. The next vertex 'v2' is the one farthest to the line formed by 'v0' and 'v1'
s=-1/0,l1.set(e.point,t.point);for(let n=0,o=a.length;n<o;n++){let o=a[n];o!==e&&o!==t&&(l1.closestPointToPoint(o.point,!0,l2),(r=l2.squaredDistanceTo(o.point))>s&&(s=r,i=o))}// 3. The next vertex 'v3' is the one farthest to the plane 'v0', 'v1', 'v2'
s=-1/0,l3.fromCoplanarPoints(e.point,t.point,i.point);for(let o=0,l=a.length;o<l;o++){let l=a[o];l!==e&&l!==t&&l!==i&&(r=Math.abs(l3.distanceToPoint(l.point)))>s&&(s=r,n=l)}// handle case where all points lie in one plane
if(0===l3.distanceToPoint(n.point))throw"ERROR: YUKA.ConvexHull: All extreme points lie in a single plane. Unable to compute convex hull.";// build initial tetrahedron
let u=this.faces;0>l3.distanceToPoint(n.point)?(// the face is not able to see the point so 'plane.normal' is pointing outside the tetrahedron
u.push(new l8(e.point,t.point,i.point),new l8(n.point,t.point,e.point),new l8(n.point,i.point,t.point),new l8(n.point,e.point,i.point)),// set the twin edge
// join face[ i ] i > 0, with the first face
u[1].getEdge(2).linkOpponent(u[0].getEdge(1)),u[2].getEdge(2).linkOpponent(u[0].getEdge(2)),u[3].getEdge(2).linkOpponent(u[0].getEdge(0)),// join face[ i ] with face[ i + 1 ], 1 <= i <= 3
u[1].getEdge(1).linkOpponent(u[2].getEdge(0)),u[2].getEdge(1).linkOpponent(u[3].getEdge(0)),u[3].getEdge(1).linkOpponent(u[1].getEdge(0))):(// the face is able to see the point so 'plane.normal' is pointing inside the tetrahedron
u.push(new l8(e.point,i.point,t.point),new l8(n.point,e.point,t.point),new l8(n.point,t.point,i.point),new l8(n.point,i.point,e.point)),// set the twin edge
// join face[ i ] i > 0, with the first face
u[1].getEdge(2).linkOpponent(u[0].getEdge(0)),u[2].getEdge(2).linkOpponent(u[0].getEdge(2)),u[3].getEdge(2).linkOpponent(u[0].getEdge(1)),// join face[ i ] with face[ i + 1 ], 1 <= i <= 3
u[1].getEdge(0).linkOpponent(u[2].getEdge(1)),u[2].getEdge(0).linkOpponent(u[3].getEdge(1)),u[3].getEdge(0).linkOpponent(u[1].getEdge(1)));// initial assignment of vertices to the faces of the tetrahedron
for(let o=0,l=a.length;o<l;o++){let l=a[o];if(l!==e&&l!==t&&l!==i&&l!==n){s=this._tolerance;let e=null;for(let t=0;t<4;t++)(r=u[t].distanceToPoint(l.point))>s&&(s=r,e=u[t]);null!==e&&this._addVertexToFace(l,e)}}return this}// computes the extreme vertices of used to compute the initial convex hull
_computeExtremes(){let e=new aG(1/0,1/0,1/0),t=new aG(-1/0,-1/0,-1/0),i={x:null,y:null,z:null},n={x:null,y:null,z:null};// compute the min/max points on all six directions
for(let r=0,s=this._vertices.length;r<s;r++){let s=this._vertices[r],a=s.point;a.x<e.x&&(e.x=a.x,i.x=s),a.y<e.y&&(e.y=a.y,i.y=s),a.z<e.z&&(e.z=a.z,i.z=s),a.x>t.x&&(t.x=a.x,n.x=s),a.y>t.y&&(t.y=a.y,n.y=s),a.z>t.z&&(t.z=a.z,n.z=s)}return(// use min/max vectors to compute an optimal epsilon
this._tolerance=3*Number.EPSILON*(Math.max(Math.abs(e.x),Math.abs(t.x))+Math.max(Math.abs(e.y),Math.abs(t.y))+Math.max(Math.abs(e.z),Math.abs(t.z))),{min:i,max:n})}// computes the horizon, an array of edges enclosing the faces that are able
// to see the new vertex
_computeHorizon(e,t,i,n){let r;if(i.outside){let e=i.outside;// remove all vertices from the given face
this._removeAllVerticesFromFace(i),// mark the face vertices to be reassigned to other faces
this._unassigned.appendChain(e)}i.active=!1,r=null===t?t=i.getEdge(0):t.next;do{let t=r.twin,i=t.polygon;i.active&&(i.distanceToPoint(e)>this._tolerance?this._computeHorizon(e,t,i,n):n.push(r)),r=r.next}while(r!==t)return this}// this method controls the basic flow of the algorithm
_generate(){let e;for(this.faces.length=0,this._computeInitialHull();e=this._nextVertexToAdd();)this._addVertexToHull(e);return this._updateFaces(),this._postprocessHull(),this._reset(),this}// final tasks after computing the hull
_postprocessHull(){let e=this.faces,t=this.edges;if(!0===this.mergeFaces){// merges faces if the result is still convex and coplanar
let i={};// gather unique edges and temporarily sort them
this.computeUniqueEdges(),t.sort((e,t)=>t.length()-e.length());// process edges from longest to shortest
for(let n=0,r=t.length;n<r;n++){let r=t[n];if(!1===this._mergePossible(r))continue;// cache current references for possible restore
i.prev=r.prev,i.next=r.next,i.prevTwin=r.twin.prev,i.nextTwin=r.twin.next,// temporarily change the first polygon in order to represent both polygons
r.prev.next=r.twin.next,r.next.prev=r.twin.prev,r.twin.prev.next=r.next,r.twin.next.prev=r.prev;let s=r.polygon;s.edge=r.prev;let a=s.plane.normal.dot(l5)>=0;if(!0===s.convex(a)&&!0===s.coplanar(this._tolerance)){// correct polygon reference of all edges
let t=s.edge;do t.polygon=s,t=t.next;while(t!==s.edge)// delete obsolete polygon
let i=e.indexOf(r.twin.polygon);e.splice(i,1)}else // restore
i.prev.next=r,i.next.prev=r,i.prevTwin.next=r.twin,i.nextTwin.prev=r.twin,s.edge=r}// recompute centroid of faces
for(let t=0,i=e.length;t<i;t++)e[t].computeCentroid()}return(// compute centroid of convex hull and the final edge and vertex list
this.computeCentroid(),this.computeUniqueEdges(),this.computeUniqueVertices(),this)}// checks if the given edge can be used to merge convex regions
_mergePossible(e){let t=e.polygon,i=e.twin;do{// we can only use an edge to merge two regions if the adjacent region does not have any edges
// apart from edge.twin already connected to the region.
if(i!==e.twin&&i.twin.polygon===t)return!1;i=i.next}while(e.twin!==i)return!0}// determines the next vertex that should added to the convex hull
_nextVertexToAdd(){let e=null;// if the 'assigned' list of vertices is empty, no vertices are left
if(!1===this._assigned.empty()){let t=0,i=this._assigned.first(),n=i.face;// now calculate the farthest vertex that face can see
do{let r=n.distanceToPoint(i.point);r>t&&(t=r,e=i),i=i.next}while(null!==i&&i.face===n)}return e}// updates the faces array after the computation of the convex hull
// it ensures only visible faces are in the result set
_updateFaces(){let e=this.faces,t=[];for(let i=0,n=e.length;i<n;i++){let n=e[i];// only respect visible but not deleted or merged faces
n.active&&t.push(n)}return this.faces.length=0,this.faces.push(...t),this}// removes all vertices from the given face. necessary when deleting a face
// which is necessary when the hull is going to be expanded
_removeAllVerticesFromFace(e){if(null!==e.outside){// reference to the first and last vertex of this face
let t=e.outside;t.face=null;let i=e.outside;for(;null!==i.next&&i.next.face===e;)(i=i.next).face=null;e.outside=null,this._assigned.removeChain(t,i)}return this}// removes a single vertex from the given face
_removeVertexFromFace(e,t){return e.face=null,e===t.outside&&(null!==e.next&&e.next.face===t?t.outside=e.next:t.outside=null),this._assigned.remove(e),this}// ensure that all unassigned points are reassigned to other faces of the
// current convex hull. this method is always executed after the hull was
// expanded
_resolveUnassignedPoints(e){if(!1===this._unassigned.empty()){let t=this._unassigned.first();do{// buffer 'next' reference since addVertexToFace() can change it
let i=t.next,n=this._tolerance,r=null;for(let i=0,s=e.length;i<s;i++){let s=e[i];if(s.active){let e=s.distanceToPoint(t.point);e>n&&(n=e,r=s)}}null!==r&&this._addVertexToFace(t,r),t=i}while(null!==t)}return this}}class l8 extends lQ{constructor(e=new aG,t=new aG,i=new aG){super(),this.outside=null,this.active=!0,this.fromContour([e,t,i]),this.computeCentroid()}getEdge(e){let t=this.edge;for(;e>0;)t=t.next,e--;for(;e<0;)t=t.prev,e++;return t}}// special data structures for the quick hull implementation
class l7{constructor(e=new aG){this.point=e,this.prev=null,this.next=null,this.face=null}}class l9{constructor(){this.head=null,this.tail=null}first(){return this.head}last(){return this.tail}clear(){return this.head=this.tail=null,this}insertAfter(e,t){return t.prev=e,t.next=e.next,t.next?t.next.prev=t:this.tail=t,e.next=t,this}append(e){return null===this.head?this.head=e:this.tail.next=e,e.prev=this.tail,e.next=null,this.tail=e,this}appendChain(e){for(null===this.head?this.head=e:this.tail.next=e,e.prev=this.tail;null!==e.next;)e=e.next;return this.tail=e,this}remove(e){return null===e.prev?this.head=e.next:e.prev.next=e.next,null===e.next?this.tail=e.prev:e.next.prev=e.prev,e.prev=null,e.next=null,this}removeChain(e,t){return null===e.prev?this.head=t.next:e.prev.next=t.next,null===t.next?this.tail=e.prev:t.next.prev=e.prev,e.prev=null,t.next=null,this}empty(){return null===this.head}}const he={unitary:new aQ,diagonal:new aQ},ht={c:null,u:[new aG,new aG,new aG],e:[]// half width
},hi={c:null,u:[new aG,new aG,new aG],e:[]// half width
},hn=[[],[],[]],hr=[[],[],[]],hs=[],ha=new aG,ho=new aG,hl=new aG,hh=new aG,hu=new aG,hc=new /**
* Class representing an oriented bounding box (OBB). Similar to an AABB, it's a
* rectangular block but with an arbitrary orientation. When using {@link OBB#fromPoints},
* the implementation tries to provide a tight-fitting oriented bounding box. In
* many cases, the result is better than an AABB or bounding sphere but worse than a
* convex hull. However, it's more efficient to work with OBBs compared to convex hulls.
* In general, OBB's are a good compromise between performance and tightness.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class{/**
	* Constructs a new OBB with the given values.
	*
	* @param {Vector3} center - The center of this OBB.
	* @param {Vector3} halfSizes - The half sizes of the OBB (defines its width, height and depth).
	* @param {Matrix3} rotation - The rotation of this OBB.
	*/constructor(e=new aG,t=new aG,i=new aQ){/**
		* The center of this OBB.
		* @type {Vector3}
		*/this.center=e,/**
		* The half sizes of the OBB (defines its width, height and depth).
		* @type {Vector3}
		*/this.halfSizes=t,/**
		* The rotation of this OBB.
		* @type {Matrix3}
		*/this.rotation=i}/**
	* Sets the given values to this OBB.
	*
	* @param {Vector3} center - The center of this OBB
	* @param {Vector3} halfSizes - The half sizes of the OBB (defines its width, height and depth).
	* @param {Matrix3} rotation - The rotation of this OBB.
	* @return {OBB} A reference to this OBB.
	*/set(e,t,i){return this.center=e,this.halfSizes=t,this.rotation=i,this}/**
	* Copies all values from the given OBB to this OBB.
	*
	* @param {OBB} obb - The OBB to copy.
	* @return {OBB} A reference to this OBB.
	*/copy(e){return this.center.copy(e.center),this.halfSizes.copy(e.halfSizes),this.rotation.copy(e.rotation),this}/**
	* Creates a new OBB and copies all values from this OBB.
	*
	* @return {OBB} A new OBB.
	*/clone(){return new this.constructor().copy(this)}/**
	* Computes the size (width, height, depth) of this OBB and stores it into the given vector.
	*
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/getSize(e){return e.copy(this.halfSizes).multiplyScalar(2)}/**
	* Ensures the given point is inside this OBB and stores
	* the result in the given vector.
	*
	* Reference: Closest Point on OBB to Point in Real-Time Collision Detection
	* by Christer Ericson (chapter 5.1.4)
	*
	* @param {Vector3} point - A point in 3D space.
	* @param {Vector3} result - The result vector.
	* @return {Vector3} The result vector.
	*/clampPoint(e,t){let i=this.halfSizes;hh.subVectors(e,this.center),this.rotation.extractBasis(ha,ho,hl),// start at the center position of the OBB
t.copy(this.center);// project the target onto the OBB axes and walk towards that point
let n=aH.clamp(hh.dot(ha),-i.x,i.x);t.add(ha.multiplyScalar(n));let r=aH.clamp(hh.dot(ho),-i.y,i.y);t.add(ho.multiplyScalar(r));let s=aH.clamp(hh.dot(hl),-i.z,i.z);return t.add(hl.multiplyScalar(s)),t}/**
	* Returns true if the given point is inside this OBB.
	*
	* @param {Vector3} point - A point in 3D space.
	* @return {Boolean} Whether the given point is inside this OBB or not.
	*/containsPoint(e){// project v1 onto each axis and check if these points lie inside the OBB
return hh.subVectors(e,this.center),this.rotation.extractBasis(ha,ho,hl),Math.abs(hh.dot(ha))<=this.halfSizes.x&&Math.abs(hh.dot(ho))<=this.halfSizes.y&&Math.abs(hh.dot(hl))<=this.halfSizes.z}/**
	* Returns true if the given AABB intersects this OBB.
	*
	* @param {AABB} aabb - The AABB to test.
	* @return {Boolean} The result of the intersection test.
	*/intersectsAABB(e){return this.intersectsOBB(hc.fromAABB(e))}/**
	* Returns true if the given bounding sphere intersects this OBB.
	*
	* @param {BoundingSphere} sphere - The bounding sphere to test.
	* @return {Boolean} The result of the intersection test.
	*/intersectsBoundingSphere(e){// if that point is inside the sphere, the OBB and sphere intersect
return(// find the point on the OBB closest to the sphere center
this.clampPoint(e.center,hu),hu.squaredDistanceTo(e.center)<=e.radius*e.radius)}/**
	* Returns true if the given OBB intersects this OBB.
	*
	* Reference: OBB-OBB Intersection in Real-Time Collision Detection
	* by Christer Ericson (chapter 4.4.1)
	*
	* @param {OBB} obb - The OBB to test.
	* @param {Number} epsilon - The epsilon (tolerance) value.
	* @return {Boolean} The result of the intersection test.
	*/intersectsOBB(e,t=Number.EPSILON){let i,n;// prepare data structures (the code uses the same nomenclature like the reference)
ht.c=this.center,ht.e[0]=this.halfSizes.x,ht.e[1]=this.halfSizes.y,ht.e[2]=this.halfSizes.z,this.rotation.extractBasis(ht.u[0],ht.u[1],ht.u[2]),hi.c=e.center,hi.e[0]=e.halfSizes.x,hi.e[1]=e.halfSizes.y,hi.e[2]=e.halfSizes.z,e.rotation.extractBasis(hi.u[0],hi.u[1],hi.u[2]);// compute rotation matrix expressing b in a’s coordinate frame
for(let e=0;e<3;e++)for(let t=0;t<3;t++)hn[e][t]=ht.u[e].dot(hi.u[t]);// compute translation vector
hh.subVectors(hi.c,ht.c),// bring translation into a’s coordinate frame
hs[0]=hh.dot(ht.u[0]),hs[1]=hh.dot(ht.u[1]),hs[2]=hh.dot(ht.u[2]);// compute common subexpressions. Add in an epsilon term to
// counteract arithmetic errors when two edges are parallel and
// their cross product is (near) null
for(let e=0;e<3;e++)for(let i=0;i<3;i++)hr[e][i]=Math.abs(hn[e][i])+t;// test axes L = A0, L = A1, L = A2
for(let e=0;e<3;e++)if(i=ht.e[e],n=hi.e[0]*hr[e][0]+hi.e[1]*hr[e][1]+hi.e[2]*hr[e][2],Math.abs(hs[e])>i+n)return!1;// test axes L = B0, L = B1, L = B2
for(let e=0;e<3;e++)if(i=ht.e[0]*hr[0][e]+ht.e[1]*hr[1][e]+ht.e[2]*hr[2][e],n=hi.e[e],Math.abs(hs[0]*hn[0][e]+hs[1]*hn[1][e]+hs[2]*hn[2][e])>i+n)return!1;return(// test axis L = A0 x B0
i=ht.e[1]*hr[2][0]+ht.e[2]*hr[1][0],n=hi.e[1]*hr[0][2]+hi.e[2]*hr[0][1],!(Math.abs(hs[2]*hn[1][0]-hs[1]*hn[2][0])>i+n)&&(// test axis L = A0 x B1
i=ht.e[1]*hr[2][1]+ht.e[2]*hr[1][1],n=hi.e[0]*hr[0][2]+hi.e[2]*hr[0][0],!(Math.abs(hs[2]*hn[1][1]-hs[1]*hn[2][1])>i+n)&&(// test axis L = A0 x B2
i=ht.e[1]*hr[2][2]+ht.e[2]*hr[1][2],n=hi.e[0]*hr[0][1]+hi.e[1]*hr[0][0],!(Math.abs(hs[2]*hn[1][2]-hs[1]*hn[2][2])>i+n)&&(// test axis L = A1 x B0
i=ht.e[0]*hr[2][0]+ht.e[2]*hr[0][0],n=hi.e[1]*hr[1][2]+hi.e[2]*hr[1][1],!(Math.abs(hs[0]*hn[2][0]-hs[2]*hn[0][0])>i+n)&&(// test axis L = A1 x B1
i=ht.e[0]*hr[2][1]+ht.e[2]*hr[0][1],n=hi.e[0]*hr[1][2]+hi.e[2]*hr[1][0],!(Math.abs(hs[0]*hn[2][1]-hs[2]*hn[0][1])>i+n)&&(// test axis L = A1 x B2
i=ht.e[0]*hr[2][2]+ht.e[2]*hr[0][2],n=hi.e[0]*hr[1][1]+hi.e[1]*hr[1][0],!(Math.abs(hs[0]*hn[2][2]-hs[2]*hn[0][2])>i+n)&&(// test axis L = A2 x B0
i=ht.e[0]*hr[1][0]+ht.e[1]*hr[0][0],n=hi.e[1]*hr[2][2]+hi.e[2]*hr[2][1],!(Math.abs(hs[1]*hn[0][0]-hs[0]*hn[1][0])>i+n)&&(// test axis L = A2 x B1
i=ht.e[0]*hr[1][1]+ht.e[1]*hr[0][1],n=hi.e[0]*hr[2][2]+hi.e[2]*hr[2][0],!(Math.abs(hs[1]*hn[0][1]-hs[0]*hn[1][1])>i+n)&&(// test axis L = A2 x B2
i=ht.e[0]*hr[1][2]+ht.e[1]*hr[0][2],n=hi.e[0]*hr[2][1]+hi.e[1]*hr[2][0],!(Math.abs(hs[1]*hn[0][2]-hs[0]*hn[1][2])>i+n))))))))))}/**
	* Returns true if the given plane intersects this OBB.
	*
	* Reference: Testing Box Against Plane in Real-Time Collision Detection
	* by Christer Ericson (chapter 5.2.3)
	*
	* @param {Plane} plane - The plane to test.
	* @return {Boolean} The result of the intersection test.
	*/intersectsPlane(e){this.rotation.extractBasis(ha,ho,hl);// compute the projection interval radius of this OBB onto L(t) = this->center + t * p.normal;
let t=this.halfSizes.x*Math.abs(e.normal.dot(ha))+this.halfSizes.y*Math.abs(e.normal.dot(ho))+this.halfSizes.z*Math.abs(e.normal.dot(hl)),i=e.normal.dot(this.center)-e.constant;// Intersection occurs when distance d falls within [-r,+r] interval
return Math.abs(i)<=t}/**
	* Computes the OBB from an AABB.
	*
	* @param {AABB} aabb - The AABB.
	* @return {OBB} A reference to this OBB.
	*/fromAABB(e){return e.getCenter(this.center),e.getSize(this.halfSizes).multiplyScalar(.5),this.rotation.identity(),this}/**
	* Computes the minimum enclosing OBB for the given set of points. The method is an
	* implementation of {@link http://gamma.cs.unc.edu/users/gottschalk/main.pdf Collision Queries using Oriented Bounding Boxes}
	* by Stefan Gottschalk.
	* According to the dissertation, the quality of the fitting process varies from
	* the respective input. This method uses the best approach by computing the
	* covariance matrix based on the triangles of the convex hull (chapter 3.4.3).
	*
	* However, the implementation is susceptible to {@link https://en.wikipedia.org/wiki/Regular_polygon regular polygons}
	* like cubes or spheres. For such shapes, it's recommended to verify the quality
	* of the produced OBB. Consider to use an AABB or bounding sphere if the result
	* is not satisfying.
	*
	* @param {Array<Vector3>} points - An array of 3D vectors representing points in 3D space.
	* @return {OBB} A reference to this OBB.
	*/fromPoints(e){let t,i,n,r,s,a;let o=new l6().fromPoints(e),l=o.faces,h=[],u=[];for(let e=0,t=l.length;e<t;e++){let t=l[e],i=t.edge;h.length=0;// gather edges
do h.push(i),i=i.next;while(i!==t.edge)// triangulate
let n=h.length-2;for(let e=1;e<=n;e++){let t=h[0].vertex,i=h[e+0].vertex,n=h[e+1].vertex;u.push(t.x,t.y,t.z),u.push(i.x,i.y,i.z),u.push(n.x,n.y,n.z)}}// 2. build covariance matrix
let c=new aG,d=new aG,p=new aG,f=new aG,m=new aG,g=new aG,_=new aG,v=new aG,x=0;t=i=n=r=s=a=0;for(let e=0,o=u.length;e<o;e+=9){c.fromArray(u,e),d.fromArray(u,e+3),p.fromArray(u,e+6),_.set(0,0,0),_.add(c).add(d).add(p).divideScalar(3),f.subVectors(d,c),m.subVectors(p,c);let o=g.crossVectors(f,m).length()/2;// .length() represents the frobenius norm here
v.add(g.copy(_).multiplyScalar(o)),x+=o,t+=(9*_.x*_.x+c.x*c.x+d.x*d.x+p.x*p.x)*(o/12),i+=(9*_.x*_.y+c.x*c.y+d.x*d.y+p.x*p.y)*(o/12),n+=(9*_.x*_.z+c.x*c.z+d.x*d.z+p.x*p.z)*(o/12),r+=(9*_.y*_.y+c.y*c.y+d.y*d.y+p.y*p.y)*(o/12),s+=(9*_.y*_.z+c.y*c.z+d.y*d.z+p.y*p.z)*(o/12),a+=(9*_.z*_.z+c.z*c.z+d.z*d.z+p.z*p.z)*(o/12)}v.divideScalar(x),t/=x,i/=x,n/=x,r/=x,s/=x,a/=x,t-=v.x*v.x,i-=v.x*v.y,n-=v.x*v.z,r-=v.y*v.y,s-=v.y*v.z,a-=v.z*v.z;let y=new aQ;y.elements[0]=t,y.elements[1]=i,y.elements[2]=n,y.elements[3]=i,y.elements[4]=r,y.elements[5]=s,y.elements[6]=n,y.elements[7]=s,y.elements[8]=a,// 3. compute rotation, center and half sizes
y.eigenDecomposition(he);let M=he.unitary,w=new aG,S=new aG,b=new aG;M.extractBasis(w,S,b);let T=-1/0,A=-1/0,E=-1/0,C=1/0,R=1/0,P=1/0;for(let t=0,i=e.length;t<i;t++){let i=e[t];T=Math.max(w.dot(i),T),A=Math.max(S.dot(i),A),E=Math.max(b.dot(i),E),C=Math.min(w.dot(i),C),R=Math.min(S.dot(i),R),P=Math.min(b.dot(i),P)}return w.multiplyScalar(.5*(C+T)),S.multiplyScalar(.5*(R+A)),b.multiplyScalar(.5*(P+E)),// center
this.center.add(w).add(S).add(b),this.halfSizes.x=T-C,this.halfSizes.y=A-R,this.halfSizes.z=E-P,// halfSizes
this.halfSizes.multiplyScalar(.5),// rotation
this.rotation.copy(M),this}/**
	* Returns true if the given OBB is deep equal with this OBB.
	*
	* @param {OBB} obb - The OBB to test.
	* @return {Boolean} The result of the equality test.
	*/equals(e){return e.center.equals(this.center)&&e.halfSizes.equals(this.halfSizes)&&e.rotation.equals(this.rotation)}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){return{type:this.constructor.name,center:this.center.toArray([]),halfSizes:this.halfSizes.toArray([]),rotation:this.rotation.toArray([])}}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {OBB} A reference to this OBB.
	*/fromJSON(e){return this.center.fromArray(e.center),this.halfSizes.fromArray(e.halfSizes),this.rotation.fromArray(e.rotation),this}};new aG,new aG,new aG,new aG,new lG,new aG,Int8Array,Uint8Array,Int16Array,Uint16Array,Uint32Array,Float32Array,new aG,new oD,new aG,new aG,new oG,new aG,new aG;const hd=new aG,hp=new aG,hf=new aG,hm=new lG,hg=new aG;/**
* This steering behavior produces a force that keeps a vehicle close to its path. It is intended
* to use it in combination with {@link FollowPathBehavior} in order to realize a more strict path following.
*
* @author {@link https://github.com/Mugen87|Mugen87}
* @augments SteeringBehavior
*/class h_ extends or{/**
	* Constructs a new on path behavior.
	*
	* @param {Path} path - The path to stay close to.
	* @param {Number} radius - Defines the width of the path. With a smaller radius, the vehicle will have to follow the path more closely.
	* @param {Number} predictionFactor - Determines how far the behavior predicts the movement of the vehicle.
	*/constructor(e=new oM,t=.1,i=1){super(),/**
		* The path to stay close to.
		* @type {Path}
		*/this.path=e,/**
		* Defines the width of the path. With a smaller radius, the vehicle will have to follow the path more closely.
		* @type {Number}
		* @default 0.1
		*/this.radius=t,/**
		* Determines how far the behavior predicts the movement of the vehicle.
		* @type {Number}
		* @default 1
		*/this.predictionFactor=i,// internal behaviors
this._seek=new od}/**
	* Calculates the steering force for a single simulation step.
	*
	* @param {Vehicle} vehicle - The game entity the force is produced for.
	* @param {Vector3} force - The force/result vector.
	* @param {Number} delta - The time delta.
	* @return {Vector3} The force/result vector.
	*/calculate(e,t/*, delta */){let i=this.path;// predicted future position
hd.copy(e.velocity).multiplyScalar(this.predictionFactor),hp.addVectors(e.position,hd);// compute closest line segment and normal point. the normal point is computed by projecting
// the predicted position of the vehicle on a line segment.
let n=1/0,r=i._waypoints.length;// handle looped paths differently since they have one line segment more
r=!0===i.loop?r:r-1;for(let e=0;e<r;e++){hm.from=i._waypoints[e],!0===i.loop&&e===r-1?hm.to=i._waypoints[0]:hm.to=i._waypoints[e+1],hm.closestPointToPoint(hp,!0,hf);let t=hp.squaredDistanceTo(hf);t<n&&(n=t,hg.copy(hf))}return n>this.radius*this.radius&&i._waypoints.length>1&&(this._seek.target=hg,this._seek.calculate(e,t)),t}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e=super.toJSON();return e.path=this.path.toJSON(),e.radius=this.radius,e.predictionFactor=this.predictionFactor,e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {OnPathBehavior} A reference to this behavior.
	*/fromJSON(e){return super.fromJSON(e),this.path.fromJSON(e.path),this.radius=e.radius,this.predictionFactor=e.predictionFactor,this}}function hv(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hx(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var hy,hM,hw,hS,hb,hT,hA,hE,hC,hR,hP,hL,hD,hO,hI,hN,hz,hU,hk,hB,hF,hV,hH,hG,hW,/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */hq,hj={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hJ={duration:.5,overwrite:!1,delay:0},hX=2*Math.PI,hY=hX/4,hK=0,hZ=Math.sqrt,hQ=Math.cos,h$=Math.sin,h0=function(e){return"string"==typeof e},h1=function(e){return"function"==typeof e},h3=function(e){return"number"==typeof e},h2=function(e){return void 0===e},h5=function(e){return"object"==typeof e},h4=function(e){return!1!==e},h6=function(){return"undefined"!=typeof window},h8=function(e){return h1(e)||h0(e)},h7="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},h9=Array.isArray,ue=/(?:-?\.?\d|\.)+/gi,ut=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ui=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,un=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ur=/[+-]=-?[.\d]+/,us=/[^,'"\[\]\s]+/gi,ua=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,uo={},ul={},uh=function(e){return(ul=uk(e,uo))&&dL},uu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},uc=function(e,t){return!t&&console.warn(e)},ud=function(e,t){return e&&(uo[e]=t)&&ul&&(ul[e]=t)||uo},up=function(){return 0},uf={suppressEvents:!0,isStart:!0,kill:!1},um={suppressEvents:!0,kill:!1},ug={suppressEvents:!0},u_={},uv=[],ux={},uy={},uM={},uw=30,uS=[],ub="",uT=function(e){var t,i,n=e[0];if(h5(n)||h1(n)||(e=[e]),!(t=(n._gsap||{}).harness)){for(// find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
i=uS.length;i--&&!uS[i].targetTest(n););t=uS[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new cj(e[i],t)))||e.splice(i,1);return e},uA=function(e){return e._gsap||uT(cl(e))[0]._gsap},uE=function(e,t,i){return(i=e[t])&&h1(i)?e[t]():h2(i)&&e.getAttribute&&e.getAttribute(t)||i},uC=function(e,t){return(e=e.split(",")).forEach(t)||e},uR=function(e){return Math.round(1e5*e)/1e5||0},uP=function(e){return Math.round(1e7*e)/1e7||0},uL=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),"+"===i?e+n:"-"===i?e-n:"*"===i?e*n:e/n},uD=function(e,t){for(//searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
var i=t.length,n=0;0>e.indexOf(t[n])&&++n<i;);return n<i},uO=function(){var e,t,i=uv.length,n=uv.slice(0);for(e=0,ux={},uv.length=0;e<i;e++)(t=n[e])&&t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0)._lazy=0)},uI=function(e,t,i,n){uv.length&&!hz&&uO(),e.render(t,i,n||hz&&t<0&&(e._initted||e._startAt)),uv.length&&!hz&&uO()},uN=function(e){var t=parseFloat(e);return(t||0===t)&&(e+"").match(us).length<2?t:h0(e)?e.trim():e},uz=function(e){return e},uU=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},uk=function(e,t){for(var i in t)e[i]=t[i];return e},uB=function e(t,i){for(var n in i)"__proto__"!==n&&"constructor"!==n&&"prototype"!==n&&(t[n]=h5(i[n])?e(t[n]||(t[n]={}),i[n]):i[n]);return t},uF=function(e,t){var i,n={};for(i in e)i in t||(n[i]=e[i]);return n},uV=function(e){var t,i=e.parent||hk,n=e.keyframes?(t=h9(e.keyframes),function(e,i){for(var n in i)n in e||"duration"===n&&t||"ease"===n||(e[n]=i[n])}):uU;if(h4(e.inherit))for(;i;)n(e,i.vars.defaults),i=i.parent||i._dp;return e},uH=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},uG=function(e,t,i,n,r){void 0===i&&(i="_first"),void 0===n&&(n="_last");var s,a=e[n];if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},uW=function(e,t,i,n){void 0===i&&(i="_first"),void 0===n&&(n="_last");var r=t._prev,s=t._next;r?r._next=s:e[i]===t&&(e[i]=s),s?s._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},uq=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},uj=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(// performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
var i=e;i;)i._dirty=1,i=i.parent;return e},uJ=function(e){for(var t=e.parent;t&&t.parent;)//sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
t._dirty=1,t.totalDuration(),t=t.parent;return e},uX=function(e,t,i,n){return e._startAt&&(hz?e._startAt.revert(um):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},uY=function(e){return e._repeat?uK(e._tTime,e=e.duration()+e._rDelay)*e:0},uK=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},uZ=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},uQ=function(e){return e._end=uP(e._start+(e._tDur/Math.abs(e._ts||e._rts||1e-8)||0))},u$=function(e,t){// adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=uP(i._time-(e._ts>0?t/e._ts:-(((e._dirty?e.totalDuration():e._tDur)-t)/e._ts))),uQ(e),i._dirty||uj(i,e)),e},/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/u0=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(// in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
i=uZ(e.rawTime(),t),(!t._dur||cr(0,t.totalDuration(),i)-t._tTime>1e-8)&&t.render(i,!0)),uj(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){//in case any of the ancestors had completed but should now be enabled...
if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-.00000001;// helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
}},u1=function(e,t,i,n){return t.parent&&uq(t),t._start=uP((h3(i)?i:i||e!==hk?ct(e,i,t):e._time)+t._delay),t._end=uP(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),uG(e,t,"_first","_last",e._sort?"_start":0),u4(t)||(e._recent=t),n||u0(e,t),e._ts<0&&u$(e,e._tTime),e},u3=function(e,t){return(uo.ScrollTrigger||uu("scrollTrigger",t))&&uo.ScrollTrigger.create(t,e)},u2=function(e,t,i,n,r){return(c4(e,t,r),e._initted)?!i&&e._pt&&!hz&&(e._dur&&!1!==e.vars.lazy||!e._dur&&e.vars.lazy)&&hG!==cL.frame?(uv.push(e),e._lazy=[r,n],1):void 0:1},u5=function e(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(0>i.rawTime()||e(i))},u4=function(e){var t=e.data;return"isFromStart"===t||"isStart"===t},u6=function(e,t,i,n){var r,s,a,o=e.ratio,l=t<0||!t&&(!e._start&&u5(e)&&!(!e._initted&&u4(e))||(e._ts<0||e._dp._ts<0)&&!u4(e))?0:1,h=e._rDelay,u=0;if(h&&e._repeat&&(s=uK(// in case there's a zero-duration tween that has a repeat with a repeatDelay
u=cr(0,e._tDur,t),h),e._yoyo&&1&s&&(l=1-l),s!==uK(e._tTime,h)&&(// if iteration changed
o=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==o||hz||n||1e-8===e._zTime||!t&&e._zTime){if(!e._initted&&u2(e,t,n,i,u))return;for(a=e._zTime,e._zTime=t||(i?1e-8:0),i||(i=t&&!a),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=u,r=e._pt;r;)r.r(l,r.d),r=r._next;t<0&&uX(e,t,i,!0),e._onUpdate&&!i&&cx(e,"onUpdate"),u&&e._repeat&&!i&&e.parent&&cx(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&uq(e,1),i||hz||(cx(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},u8=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if("isPause"===n.data&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if("isPause"===n.data&&n._start<t)return n;n=n._prev}},u7=function(e,t,i,n){var r=e._repeat,s=uP(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:uP(s*(r+1)+e._rDelay*r):s,a>0&&!n&&u$(e,e._tTime=e._tDur*a),e.parent&&uQ(e),i||uj(e.parent,e),e},u9=function(e){return e instanceof cX?uj(e):u7(e,e._dur)},ce={_start:0,endTime:up,totalDuration:up},ct=function e(t,i,n){var r,s,a,o=t.labels,l=t._recent||ce,h=t.duration()>=1e8?l.endTime(!1):t._dur;return h0(i)&&(isNaN(i)||i in o)?(//if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
s=i.charAt(0),a="%"===i.substr(-1),r=i.indexOf("="),"<"===s||">"===s)?(r>=0&&(i=i.replace(/=/,"")),("<"===s?l._start:l.endTime(l._repeat>=0))+(parseFloat(i.substr(1))||0)*(a?(r<0?l:n).totalDuration()/100:1)):r<0?(i in o||(o[i]=h),o[i]):(s=parseFloat(i.charAt(r-1)+i.substr(r+1)),a&&n&&(s=s/100*(h9(n)?n[0]:n).totalDuration()),r>1?e(t,i.substr(0,r-1),n)+s:h+s):null==i?h:+i},ci=function(e,t,i){var n,r,s=h3(t[1]),a=(s?2:1)+(e<2?0:1),o=t[a];if(s&&(o.duration=t[1]),o.parent=i,e){for(n=o,r=i;r&&!("immediateRender"in n);)// inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
n=r.vars.defaults||{},r=h4(r.vars.inherit)&&r.parent;o.immediateRender=h4(n.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return new di(t[0],o,t[a+1])},cn=function(e,t){return e||0===e?t(e):t},cr=function(e,t,i){return i<e?e:i>t?t:i},cs=function(e,t){return h0(e)&&(t=ua.exec(e))?t[1]:""},ca=[].slice,co=function(e,t){return e&&h5(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&h5(e[0]))&&!e.nodeType&&e!==hB},cl=function(e,t,i){var n;return hU&&!t&&hU.selector?hU.selector(e):h0(e)&&!i&&(hF||!cD())?ca.call((t||hV).querySelectorAll(e),0):h9(e)?(void 0===n&&(n=[]),e.forEach(function(e){var t;return h0(e)&&!i||co(e,1)?(t=n).push.apply(t,cl(e)):n.push(e)})||n):co(e)?ca.call(e,0):e?[e]:[]},ch=function(e){return e=cl(e)[0]||uc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return cl(t,i.querySelectorAll?i:i===e?uc("Invalid scope")||hV.createElement("div"):e)}},cu=function(e){return e.sort(function(){return .5-Math.random()})},//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
cc=function(e){if(h1(e))return e;var t=h5(e)?e:{each:e},i=cV(t.ease),n=t.from||0,r=parseFloat(t.base)||0,s={},a=n>0&&n<1,o=isNaN(n)||a,l=t.axis,h=n,u=n;return h0(n)?h=u=({center:.5,edges:.5,end:1})[n]||0:!a&&o&&(h=n[0],u=n[1]),function(e,a,c){var d,p,f,m,g,_,v,x,y,M=(c||t).length,w=s[M];if(!w){if(!(y="auto"===t.grid?0:(t.grid||[1,1e8])[1])){for(v=-1e8;v<(v=c[y++].getBoundingClientRect().left)&&y<M;);y<M&&y--}for(_=0,w=s[M]=[],d=o?Math.min(y,M)*h-.5:n%y,p=1e8===y?0:o?M*u/y-.5:n/y|0,v=0,x=1e8;_<M;_++)f=_%y-d,m=p-(_/y|0),w[_]=g=l?Math.abs("y"===l?m:f):hZ(f*f+m*m),g>v&&(v=g),g<x&&(x=g);"random"===n&&cu(w),w.max=v-x,w.min=x,w.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(y>M?M-1:l?"y"===l?M/y:y:Math.max(y,M/y))||0)*("edges"===n?-1:1),w.b=M<0?r-M:r,w.u=cs(t.amount||t.each)||0,i=i&&M<0?cB(i):i}return M=(w[e]-w.min)/w.max||0,uP(w.b+(i?i(M):M)*w.v)+w.u;//round in order to work around floating point errors
}},cd=function(e){//pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
var t=Math.pow(10,((e+"").split(".")[1]||"").length);//to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
return function(i){var n=uP(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(h3(i)?0:cs(i));// n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
}},cp=function(e,t){var i,n,r=h9(e);return!r&&h5(e)&&(i=r=e.radius||1e8,e.values?(n=!h3((e=cl(e.values))[0]))&&(i*=i):e=cd(e.increment)),cn(t,r?h1(e)?function(t){return Math.abs((n=e(t))-t)<=i?n:t}:function(t){for(var r,s,a=parseFloat(n?t.x:t),o=parseFloat(n?t.y:0),l=1e8,h=0,u=e.length;u--;)(r=n?(r=e[u].x-a)*r+(s=e[u].y-o)*s:Math.abs(e[u]-a))<l&&(l=r,h=u);return h=!i||l<=i?e[h]:t,n||h===t||h3(t)?h:h+cs(t)}:cd(e))},cf=function(e,t,i,n){return cn(h9(e)?!t:!0===i?(i=0,!1):!n,function(){return h9(e)?e[~~(Math.random()*e.length)]:(n=(i=i||1e-5)<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+.99*i))/i)*i*n)/n})},cm=function(e,t,i){return cn(i,function(i){return e[~~t(i)]})},cg=function(e){for(//replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
var t,i,n,r,s=0,a="";~(t=e.indexOf("random(",s));)n=e.indexOf(")",t),r="["===e.charAt(t+7),i=e.substr(t+7,n-t-7).match(r?us:ue),a+=e.substr(s,t-s)+cf(r?i:+i[0],r?0:+i[1],+i[2]||1e-5),s=n+1;return a+e.substr(s,e.length-s)},c_=function(e,t,i,n,r){var s=t-e,a=n-i;return cn(r,function(t){return i+((t-e)/s*a||0)})},cv=function(e,t,i){//used for nextLabel() and previousLabel()
var n,r,s,a=e.labels,o=1e8;for(n in a)(r=a[n]-t)<0==!!i&&r&&o>(r=Math.abs(r))&&(s=n,o=r);return s},cx=function(e,t,i){var n,r,s,a=e.vars,o=a[t],l=hU,h=e._ctx;if(o)return n=a[t+"Params"],r=a.callbackScope||e,i&&uv.length&&uO(),h&&(hU=h),s=n?o.apply(r,n):o.call(r),hU=l,s},cy=function(e){return uq(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hz),1>e.progress()&&cx(e,"onInterrupt"),e},cM=[],cw=function(e){if(h6()&&e){var t=// edge case: some build tools may pass in a null/undefined value
(e=!e.name&&e.default||e).name,i=h1(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:up,render:dd,add:c3,kill:df,modifier:dp,rawVars:0},s={targetTest:0,get:0,getSetter:dl,aliases:{},register:0};if(cD(),e!==n){if(uy[t])return;uU(n,uU(uF(e,r),s)),uk(n.prototype,uk(r,uF(e,s))),uy[n.prop=t]=n,e.targetTest&&(uS.push(n),u_[t]=1),t=("css"===t?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ud(t,n),e.register&&e.register(dL,n,d_)}else e&&cM.push(e)},cS={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
cb=function(e,t,i){return(6*(e+=e<0?1:e>1?-1:0)<1?t+(i-t)*e*6:e<.5?i:3*e<2?t+(i-t)*(2/3-e)*6:t)*255+.5|0},cT=function(e,t,i){var n,r,s,a,o,l,h,u,c,d,p=e?h3(e)?[e>>16,e>>8&255,255&e]:0:cS.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),cS[e])p=cS[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+//for shorthand like #9F0 or #9F0F (could have alpha)
(n=e.charAt(1))+n+(r=e.charAt(2))+r+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[// hex with alpha, like #fd5e53ff
(p=parseInt(e.substr(1,6),16))>>16,p>>8&255,255&p,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&255,255&e]}else if("hsl"===e.substr(0,3)){if(p=d=e.match(ue),t){if(~e.indexOf("="))return(//if relative values are found, just return the raw strings with the relative prefixes in place.
p=e.match(ut),i&&p.length<4&&(p[3]=1),p)}else a=+p[0]%360/360,o=+p[1]/100,r=(l=+p[2]/100)<=.5?l*(o+1):l+o-l*o,n=2*l-r,p.length>3&&(p[3]*=1),p[0]=cb(a+1/3,n,r),p[1]=cb(a,n,r),p[2]=cb(a-1/3,n,r)}else p=e.match(ue)||cS.transparent;p=p.map(Number)}return t&&!d&&(l=((h=Math.max(n=p[0]/255,r=p[1]/255,s=p[2]/255))+(u=Math.min(n,r,s)))/2,h===u?a=o=0:(c=h-u,o=l>.5?c/(2-h-u):c/(h+u),a=(h===n?(r-s)/c+(r<s?6:0):h===r?(s-n)/c+2:(n-r)/c+4)*60),p[0]=~~(a+.5),p[1]=~~(100*o+.5),p[2]=~~(100*l+.5)),i&&p.length<4&&(p[3]=1),p},cA=function(e){// strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
var t=[],i=[],n=-1;return e.split(cC).forEach(function(e){var r=e.match(ui)||[];t.push.apply(t,r),i.push(n+=r.length+1)}),t.c=i,t},cE=function(e,t,i){var n,r,s,a,o="",l=(e+o).match(cC),h=t?"hsla(":"rgba(",u=0;if(!l)return e;if(l=l.map(function(e){return(e=cT(e,t,1))&&h+(t?e[0]+","+e[1]+"%,"+e[2]+"%,"+e[3]:e.join(","))+")"}),i&&(s=cA(e),(n=i.c).join(o)!==s.c.join(o)))for(a=(r=e.replace(cC,"1").split(ui)).length-1;u<a;u++)o+=r[u]+(~n.indexOf(u)?l.shift()||h+"0,0,0,0)":(s.length?s:l.length?l:i).shift());if(!r)for(a=(r=e.split(cC)).length-1;u<a;u++)o+=r[u]+l[u];return o+r[a]},cC=function(){var e,t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(e in cS)t+="|"+e+"\\b";return RegExp(t+")","gi")}(),cR=/hsl[a]?\(/,cP=function(e){var t,i=e.join(" ");if(cC.lastIndex=0,cC.test(i))return t=cR.test(i),e[1]=cE(e[1],t),e[0]=cE(e[0],t,cA(e[1])),!0},cL=(hA=Date.now,hE=500,hC=33,hP=hR=hA(),hL=1e3/240,hD=1e3/240,hO=[],hI=function e(t){var i,n,r,s,a=hA()-hP,o=!0===t;if(a>hE&&(hR+=a-hC),hP+=a,((i=(r=hP-hR)-hD)>0||o)&&(s=++hS.frame,hb=r-1e3*hS.time,hS.time=r/=1e3,hD+=i+(i>=hL?4:hL-i),n=1),o||(hy=hM(e)),n)for(hT=0;hT<hO.length;hT++)hO[hT](r,hb,s,t)},hS={time:0,frame:0,tick:function(){hI(!0)},deltaRatio:function(e){return hb/(1e3/(e||60))},wake:function(){hH&&(!hF&&h6()&&(hV=(hB=hF=window).document||{},uo.gsap=dL,(hB.gsapVersions||(hB.gsapVersions=[])).push(dL.version),uh(ul||hB.GreenSockGlobals||!hB.gsap&&hB||{}),hw=hB.requestAnimationFrame,cM.forEach(cw)),hy&&hS.sleep(),hM=hw||function(e){return setTimeout(e,hD-1e3*hS.time+1|0)},hq=1,hI(2))},sleep:function(){(hw?hB.cancelAnimationFrame:clearTimeout)(hy),hq=0,hM=up},lagSmoothing:function(e,t){hC=Math.min(t||33,hE=e||1/0)},fps:function(e){hL=1e3/(e||240),hD=1e3*hS.time+hL},add:function(e,t,i){var n=t?function(t,i,r,s){e(t,i,r,s),hS.remove(n)}:e;return hS.remove(e),hO[i?"unshift":"push"](n),cD(),n},remove:function(e,t){~(t=hO.indexOf(e))&&hO.splice(t,1)&&hT>=t&&hT--},_listeners:hO}),cD=function(){return!hq&&cL.wake()},/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/cO={},cI=/^[\d.\-M][\d.\-,\s]/,cN=/["']/g,cz=function(e){for(//takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
var t,i,n,r={},s=e.substr(1,e.length-3).split(":"),a=s[0],o=1,l=s.length;o<l;o++)i=s[o],t=o!==l-1?i.lastIndexOf(","):i.length,n=i.substr(0,t),r[a]=isNaN(n)?n.replace(cN,"").trim():+n,a=i.substr(t+1).trim();return r},cU=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},ck=function(e){//name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
var t=(e+"").split("("),i=cO[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[cz(t[1])]:cU(e).split(",").map(uN)):cO._CE&&cI.test(e)?cO._CE("",e):i},cB=function(e){return function(t){return 1-e(1-t)}},cF=function e(t,i){for(var n,r=t._first;r;)r instanceof cX?e(r,i):!r.vars.yoyoEase||r._yoyo&&r._repeat||r._yoyo===i||(r.timeline?e(r.timeline,i):(n=r._ease,r._ease=r._yEase,r._yEase=n,r._yoyo=i)),r=r._next},cV=function(e,t){return e&&(h1(e)?e:cO[e]||ck(e))||t},cH=function(e,t,i,n){void 0===i&&(i=function(e){return 1-t(1-e)}),void 0===n&&(n=function(e){return e<.5?t(2*e)/2:1-t((1-e)*2)/2});var r,s={easeIn:t,easeOut:i,easeInOut:n};return uC(e,function(e){for(var t in cO[e]=uo[e]=s,cO[r=e.toLowerCase()]=i,s)cO[r+("easeIn"===t?".in":"easeOut"===t?".out":".inOut")]=cO[e+"."+t]=s[t]}),s},cG=function(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e((t-.5)*2)/2}},cW=function e(t,i,n){var r=i>=1?i:1,s=(n||(t?.3:.45))/(i<1?i:1),a=s/hX*(Math.asin(1/r)||0),o=function(e){return 1===e?1:r*Math.pow(2,-10*e)*h$((e-a)*s)+1},l="out"===t?o:"in"===t?function(e){return 1-o(1-e)}:cG(o);return s=hX/s,l.config=function(i,n){return e(t,i,n)},l},cq=function e(t,i){void 0===i&&(i=1.70158);var n=function(e){return e?--e*e*((i+1)*e+i)+1:0},r="out"===t?n:"in"===t?function(e){return 1-n(1-e)}:cG(n);return r.config=function(i){return e(t,i)},r};// a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
uC("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var i=t<5?t+1:t;cH(e+",Power"+(i-1),t?function(e){return Math.pow(e,i)}:function(e){return e},function(e){return 1-Math.pow(1-e,i)},function(e){return e<.5?Math.pow(2*e,i)/2:1-Math.pow((1-e)*2,i)/2})}),cO.Linear.easeNone=cO.none=cO.Linear.easeIn,cH("Elastic",cW("in"),cW("out"),cW()),cK=2*(cY=1/2.75),cZ=2.5*cY,cH("Bounce",function(e){return 1-cQ(1-e)},cQ=function(e){return e<cY?7.5625*e*e:e<cK?7.5625*Math.pow(e-1.5/2.75,2)+.75:e<cZ?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*Math.pow(e-2.625/2.75,2)+.984375}),cH("Expo",function(e){return e?Math.pow(2,10*(e-1)):0}),cH("Circ",function(e){return-(hZ(1-e*e)-1)}),cH("Sine",function(e){return 1===e?1:-hQ(e*hY)+1}),cH("Back",cq("in"),cq("out"),cq()),cO.SteppedEase=cO.steps=uo.SteppedEase={config:function(e,t){void 0===e&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0;return function(e){return((n*cr(0,.99999999,e)|0)+r)*i}}},hJ.ease=cO["quad.out"],uC("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return ub+=e+","+e+"Params,"});var cj=function(e,t){this.id=hK++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uE,this.set=t?t.getSetter:dl},cJ=/*#__PURE__*/function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(// TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,u7(this,+e.duration,1,1),this.data=e.data,hU&&(this._ctx=hU,hU.data.push(this)),hq||cL.wake()}var t=e.prototype;return t.delay=function(e){return e||0===e?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,u7(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(cD(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
for(u$(this,e),!i._dp||i.parent||u0(i,this);i&&i.parent;)i.parent._time!==i._start+(i._ts>=0?i._tTime/i._ts:-((i.totalDuration()-i._tTime)/i._ts))&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&u1(this._dp,this,this._start-this._delay)}return this._tTime===e&&(this._dur||t)&&(!this._initted||1e-8!==Math.abs(this._zTime))&&(e||this._initted||!this.add&&!this._ptLookup)||(// check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
this._ts||(this._pTime=e),//if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
//   this._lock = 1;
uI(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+uY(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time;// note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(1&this.iteration())?1-e:e)+uY(this),t):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(e,t){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*i,t):this._repeat?uK(this._tTime,i)+1:1}// potential future addition:
,t.timeScale=function(e,t){if(!arguments.length)return -.00000001===this._rts?0:this._rts;// recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
if(this._rts===e)return this;var i=this.parent&&this._ts?uZ(this.parent._time,this):this._tTime;// make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
return(// future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
//(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
// prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
this._rts=+e||0,this._ts=this._ps||-.00000001===e?0:this._rts,this.totalTime(cr(-Math.abs(this._delay),this._tDur,i),!1!==t),uQ(this),uJ(this))},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cD(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&1e-8!==Math.abs(this._zTime)&&(this._tTime-=1e-8)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=e;var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&u1(t,this,e-this._delay),this}return this._start},t.endTime=function(e){return this._start+(h4(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;// _dp = detached parent
return t?e&&(!this._ts||this._repeat&&this._time&&1>this.totalProgress())?this._tTime%(this._dur+this._rDelay):this._ts?uZ(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){void 0===e&&(e=ug);var t=hz;return hz=e,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),"nested"!==this.data&&!1!==e.kill&&this.kill(),hz=t,this},t.globalTime=function(e){for(var t=this,i=arguments.length?e:t.rawTime();t;)i=t._start+i/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):i;// the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,u9(this)):-2===this._repeat?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,u9(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(ct(this,e),h4(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,h4(t))},t.play=function(e,t){return null!=e&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return null!=e&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return null!=e&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-.00000001:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-.00000001,this},t.isActive=function(){var e,t=this.parent||this._dp,i=this._start;return!!(!t||this._ts&&this._initted&&t.isActive()&&(e=t.rawTime(!0))>=i&&e<this.endTime(!0)-1e-8)},t.eventCallback=function(e,t,i){var n=this.vars;return arguments.length>1?(t?(n[e]=t,i&&(n[e+"Params"]=i),"onUpdate"===e&&(this._onUpdate=t)):delete n[e],this):n[e]},t.then=function(e){var t=this;return new Promise(function(i){var n=h1(e)?e:uz,r=function(){var e=t.then;t.then=null,h1(n)&&(n=n(t))&&(n.then||n===t)&&(t.then=e),i(n),t.then=e};t._initted&&1===t.totalProgress()&&t._ts>=0||!t._tTime&&t._ts<0?r():t._prom=r})},t.kill=function(){cy(this)},e}();uU(cJ.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-.00000001,_prom:0,_ps:!1,_rts:1});var cX=/*#__PURE__*/function(e){function t(t,i){var n;return void 0===t&&(t={}),(n=e.call(this,t)||this).labels={},n.smoothChildTiming=!!t.smoothChildTiming,n.autoRemoveChildren=!!t.autoRemoveChildren,n._sort=h4(t.sortChildren),hk&&u1(t.parent||hk,hv(n),i),t.reversed&&n.reverse(),t.paused&&n.paused(!0),t.scrollTrigger&&u3(hv(n),t.scrollTrigger),n}hx(t,e);var i=t.prototype;return i.to=function(e,t,i){return ci(0,arguments,this),this},i.from=function(e,t,i){return ci(1,arguments,this),this},i.fromTo=function(e,t,i,n){return ci(2,arguments,this),this},i.set=function(e,t,i){return t.duration=0,t.parent=this,uV(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new di(e,t,ct(this,i),1),this},i.call=function(e,t,i){return u1(this,di.delayedCall(0,e,t),i)}//ONLY for backward compatibility! Maybe delete?
,i.staggerTo=function(e,t,i,n,r,s,a){return i.duration=t,i.stagger=i.stagger||n,i.onComplete=s,i.onCompleteParams=a,i.parent=this,new di(e,i,ct(this,r)),this},i.staggerFrom=function(e,t,i,n,r,s,a){return i.runBackwards=1,uV(i).immediateRender=h4(i.immediateRender),this.staggerTo(e,t,i,n,r,s,a)},i.staggerFromTo=function(e,t,i,n,r,s,a,o){return n.startAt=i,uV(n).immediateRender=h4(n.immediateRender),this.staggerTo(e,t,n,r,s,a,o)},i.render=function(e,t,i){var n,r,s,a,o,l,h,u,c,d,p,f,m=this._time,g=this._dirty?this.totalDuration():this._tDur,_=this._dur,v=e<=0?0:uP(e),x=this._zTime<0!=e<0&&(this._initted||!_);if(this!==hk&&v>g&&e>=0&&(v=g),v!==this._tTime||i||x){if(m!==this._time&&_&&(//if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
v+=this._time-m,e+=this._time-m),n=v,c=this._start,l=!(u=this._ts),x&&(_||(m=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(//adjust the time for repeats and yoyos
p=this._yoyo,o=_+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(100*o+e,t,i);/*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */if(n=uP(v%o),v===g?(// the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
a=this._repeat,n=_):((a=~~(v/o))&&a===v/o&&(n=_,a--),n>_&&(n=_)),d=uK(this._tTime,o),!m&&this._tTime&&d!==a&&this._tTime-d*o-this._dur<=0&&(d=a),p&&1&a&&(n=_-n,f=1),a!==d&&!this._lock){var y=p&&1&d,M=y===(p&&1&a);if(a<d&&(y=!y),m=y?0:v%_?_:v,this._lock=1,this.render(m||(f?0:uP(a*o)),t,!_)._lock=0,this._tTime=v,!t&&this.parent&&cx(this,"onRepeat"),this.vars.repeatRefresh&&!f&&(this.invalidate()._lock=1),m&&m!==this._time||!this._ts!==l||this.vars.onRepeat&&!this.parent&&!this._act||(_=this._dur,g=this._tDur,M&&(this._lock=2,m=y?_:-.0001,this.render(m,!0),this.vars.repeatRefresh&&!f&&this.invalidate()),this._lock=0,!this._ts&&!l))return this;//in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
cF(this,f)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=u8(this,uP(m),uP(n)))&&(v-=n-(n=h._start)),this._tTime=v,this._time=n,this._act=!u,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,m=0),!m&&n&&!t&&!a&&(cx(this,"onStart"),this._tTime!==v))return this;if(n>=m&&e>=0)for(r=this._first;r;){if(s=r._next,(r._act||n>=r._start)&&r._ts&&h!==r){if(r.parent!==this)return this.render(e,t,i);if(r.render(r._ts>0?(n-r._start)*r._ts:(r._dirty?r.totalDuration():r._tDur)+(n-r._start)*r._ts,t,i),n!==this._time||!this._ts&&!l){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
h=0,s&&(v+=this._zTime=-.00000001);break}}r=s}else{r=this._last;for(var w=e<0?e:n;r;){if(s=r._prev,(r._act||w<=r._end)&&r._ts&&h!==r){if(r.parent!==this)return this.render(e,t,i);if(r.render(r._ts>0?(w-r._start)*r._ts:(r._dirty?r.totalDuration():r._tDur)+(w-r._start)*r._ts,t,i||hz&&(r._initted||r._startAt)),n!==this._time||!this._ts&&!l){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
h=0,s&&(v+=this._zTime=w?-.00000001:1e-8);break}}r=s}}if(h&&!t&&(this.pause(),h.render(n>=m?0:-.00000001)._zTime=n>=m?1:-1,this._ts))return(//the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
this._start=c,uQ(this),this.render(e,t,i));this._onUpdate&&!t&&cx(this,"onUpdate",!0),(v===g&&this._tTime>=this.totalDuration()||!v&&m)&&(c===this._start||Math.abs(u)!==Math.abs(this._ts))&&!this._lock&&(// remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
(e||!_)&&(v===g&&this._ts>0||!v&&this._ts<0)&&uq(this,1),t||e<0&&!m||!v&&!m&&g||(cx(this,v===g&&e>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(v<g&&this.timeScale()>0)&&this._prom()))}return this},i.add=function(e,t){var i=this;if(h3(t)||(t=ct(this,t,e)),!(e instanceof cJ)){if(h9(e))return e.forEach(function(e){return i.add(e,t)}),this;if(h0(e))return this.addLabel(e,t);if(!h1(e))return this;e=di.delayedCall(0,e)}return this!==e?u1(this,e,t):this;//don't allow a timeline to be added to itself as a child!
},i.getChildren=function(e,t,i,n){void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===i&&(i=!0),void 0===n&&(n=-1e8);for(var r=[],s=this._first;s;)s._start>=n&&(s instanceof di?t&&r.push(s):(i&&r.push(s),e&&r.push.apply(r,s.getChildren(!0,t,i)))),s=s._next;return r},i.getById=function(e){for(var t=this.getChildren(1,1,1),i=t.length;i--;)if(t[i].vars.id===e)return t[i]},i.remove=function(e){return h0(e)?this.removeLabel(e):h1(e)?this.killTweensOf(e):(uW(this,e),e===this._recent&&(this._recent=this._last),uj(this))},i.totalTime=function(t,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=uP(cL.time-(this._ts>0?t/this._ts:-((this.totalDuration()-t)/this._ts)))),e.prototype.totalTime.call(this,t,i),this._forcing=0,this):this._tTime},i.addLabel=function(e,t){return this.labels[e]=ct(this,t),this},i.removeLabel=function(e){return delete this.labels[e],this},i.addPause=function(e,t,i){var n=di.delayedCall(0,t||up,i);return n.data="isPause",this._hasPause=1,u1(this,n,ct(this,e))},i.removePause=function(e){var t=this._first;for(e=ct(this,e);t;)t._start===e&&"isPause"===t.data&&uq(t),t=t._next},i.killTweensOf=function(e,t,i){for(var n=this.getTweensOf(e,i),r=n.length;r--;)c$!==n[r]&&n[r].kill(e,t);return this},i.getTweensOf=function(e,t){for(var i,n=[],r=cl(e),s=this._first,a=h3(t);s;)s instanceof di?uD(s._targets,r)&&(a?(!c$||s._initted&&s._ts)&&s.globalTime(0)<=t&&s.globalTime(s.totalDuration())>t:!t||s.isActive())&&n.push(s):(i=s.getTweensOf(r,t)).length&&n.push.apply(n,i),s=s._next;return n}// potential future feature - targets() on timelines
,i.tweenTo=function(e,t){t=t||{};var i,n=this,r=ct(n,e),s=t,a=s.startAt,o=s.onStart,l=s.onStartParams,h=s.immediateRender,u=di.to(n,uU({ease:t.ease||"none",lazy:!1,immediateRender:!1,time:r,overwrite:"auto",duration:t.duration||Math.abs((r-(a&&"time"in a?a.time:n._time))/n.timeScale())||1e-8,onStart:function(){if(n.pause(),!i){var e=t.duration||Math.abs((r-(a&&"time"in a?a.time:n._time))/n.timeScale());u._dur!==e&&u7(u,e,0,1).render(u._time,!0,!0),i=1}o&&o.apply(u,l||[])}},t));return h?u.render(0):u},i.tweenFromTo=function(e,t,i){return this.tweenTo(t,uU({startAt:{time:ct(this,e)}},i))},i.recent=function(){return this._recent},i.nextLabel=function(e){return void 0===e&&(e=this._time),cv(this,ct(this,e))},i.previousLabel=function(e){return void 0===e&&(e=this._time),cv(this,ct(this,e),1)},i.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+1e-8)},i.shiftChildren=function(e,t,i){void 0===i&&(i=0);for(var n,r=this._first,s=this.labels;r;)r._start>=i&&(r._start+=e,r._end+=e),r=r._next;if(t)for(n in s)s[n]>=i&&(s[n]+=e);return uj(this)},i.invalidate=function(t){var i=this._first;for(this._lock=0;i;)i.invalidate(t),i=i._next;return e.prototype.invalidate.call(this,t)},i.clear=function(e){void 0===e&&(e=!0);for(var t,i=this._first;i;)t=i._next,this.remove(i),i=t;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),uj(this)},i.totalDuration=function(e){var t,i,n,r=0,s=this._last,a=1e8;if(arguments.length)return this.timeScale((this._repeat<0?this.duration():this.totalDuration())/(this.reversed()?-e:e));if(this._dirty){for(n=this.parent;s;)t=s._prev,s._dirty&&s.totalDuration(),(i=s._start)>a&&this._sort&&s._ts&&!this._lock?(//in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
this._lock=1,u1(this,s,i-s._delay,1)._lock=0):a=i,i<0&&s._ts&&(//children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
r-=i,(!n&&!this._dp||n&&n.smoothChildTiming)&&(this._start+=i/this._ts,this._time-=i,this._tTime-=i),this.shiftChildren(-i,!1,-1/0),a=0),s._end>r&&s._ts&&(r=s._end),s=t;u7(this,this===hk&&this._time>r?this._time:r,1,1),this._dirty=0}return this._tDur},t.updateRoot=function(e){if(hk._ts&&(uI(hk,uZ(e,hk)),hG=cL.frame),cL.frame>=uw){uw+=hj.autoSleep||120;var t=hk._first;if((!t||!t._ts)&&hj.autoSleep&&cL._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||cL.sleep()}}},t}(cJ);uU(cX.prototype,{_lock:0,_hasPause:0,_forcing:0});var cY,cK,cZ,cQ,c$,c0,c1=function(e,t,i,n,r,s,a){//note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
var o,l,h,u,c,d,p,f,m=new d_(this._pt,e,t,0,1,dc,null,r),g=0,_=0;for(m.b=i,m.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=cg(n)),s&&(s(f=[i,n],e,t),i=f[0],n=f[1]),l=i.match(un)||[];o=un.exec(n);)u=o[0],c=n.substring(g,o.index),h?h=(h+1)%5:"rgba("===c.substr(-5)&&(h=1),u!==l[_++]&&(d=parseFloat(l[_-1])||0,m._pt={_next:m._pt,p:c||1===_?c:",",//note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
s:d,c:"="===u.charAt(1)?uL(d,u)-d:parseFloat(u)-d,m:h&&h<4?Math.round:0},g=un.lastIndex);return m.c=g<n.length?n.substring(g,n.length):"",m.fp=a,(ur.test(n)||p)&&(m.e=0),this._pt=m,m},c3=function(e,t,i,n,r,s,a,o,l,h){h1(n)&&(n=n(r||0,e,s));var u,c=e[t],d="get"!==i?i:h1(c)?l?e[t.indexOf("set")||!h1(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():c,p=h1(c)?l?ds:dr:dn;if(h0(n)&&(~n.indexOf("random(")&&(n=cg(n)),"="===n.charAt(1)&&((u=uL(d,n)+(cs(d)||0))||0===u)&&(n=u)),!h||d!==n||c0)return isNaN(d*n)||""===n?(c||t in e||uu(t,n),c1.call(this,e,t,d,n,p,o||hj.stringFilter,l)):(// fun fact: any number multiplied by "" is evaluated as the number 0!
u=new d_(this._pt,e,t,+d||0,n-(d||0),"boolean"==typeof c?du:dh,0,p),l&&(u.fp=l),a&&u.modifier(a,this,e),this._pt=u)},c2=function(e,t,i,n,r){if(h1(e)&&(e=c9(e,r,t,i,n)),!h5(e)||e.style&&e.nodeType||h9(e)||h7(e))return h0(e)?c9(e,r,t,i,n):e;var s,a={};for(s in e)a[s]=c9(e[s],r,t,i,n);return a},c5=function(e,t,i,n,r,s){var a,o,l,h;if(uy[e]&&!1!==(a=new uy[e]).init(r,a.rawVars?t[e]:c2(t[e],n,r,s,i),i,n,s)&&(i._pt=o=new d_(i._pt,r,e,0,1,a.render,a,0,a.priority),i!==hW))for(l=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=o;return a},c4=function e(t,i,n){var r,s,a,o,l,h,u,c,d,p,f,m,g,_=t.vars,v=_.ease,x=_.startAt,y=_.immediateRender,M=_.lazy,w=_.onUpdate,S=_.runBackwards,b=_.yoyoEase,T=_.keyframes,A=_.autoRevert,E=t._dur,C=t._startAt,R=t._targets,P=t.parent,L=P&&"nested"===P.data?P.vars.targets:R,D="auto"===t._overwrite&&!hN,O=t.timeline;if(!O||T&&v||(v="none"),t._ease=cV(v,hJ.ease),t._yEase=b?cB(cV(!0===b?v:b,hJ.ease)):0,b&&t._yoyo&&!t._repeat&&(//there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
b=t._yEase,t._yEase=t._ease,t._ease=b),t._from=!O&&!!_.runBackwards,!O||T&&!_.stagger){if(m=//if there's an internal timeline, skip all the parsing because we passed that task down the chain.
(c=R[0]?uA(R[0]).harness:0)&&_[c.prop],r=uF(_,u_),C&&(C._zTime<0&&C.progress(1),i<0&&S&&y&&!A?C.render(-1,!0):C.revert(S&&E?um:uf),// don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
C._lazy=0),x){if(uq(t._startAt=di.set(R,uU({data:"isStart",overwrite:!1,parent:P,immediateRender:!0,lazy:!C&&h4(M),startAt:null,delay:0,onUpdate:w&&function(){return cx(t,"onUpdate")},stagger:0},x))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(hz||!y&&!A)&&t._startAt.revert(um),y&&E&&i<=0&&n<=0){// check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
i&&(t._zTime=i);return;//we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
}}else if(S&&E&&!C){if(i&&(y=!1),a=uU({overwrite:!1,data:"isFromStart",//we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
lazy:y&&!C&&h4(M),immediateRender:y,//zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
stagger:0,parent:P//ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
},r),m&&(a[c.prop]=m),uq(t._startAt=di.set(R,a)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(hz?t._startAt.revert(um):t._startAt.render(-1,!0)),t._zTime=i,y){if(!i)return}else e(t._startAt,1e-8,1e-8);//ensures that the initial values are recorded
}for(s=0,t._pt=t._ptCache=0,M=E&&h4(M)||M&&!E;s<R.length;s++){if(u=(l=R[s])._gsap||uT(R)[s]._gsap,t._ptLookup[s]=p={},ux[u.id]&&uv.length&&uO(),f=L===R?s:L.indexOf(l),c&&!1!==(d=new c).init(l,m||r,t,f,L)&&(t._pt=o=new d_(t._pt,l,d.name,0,1,d.render,d,0,d.priority),d._props.forEach(function(e){p[e]=o}),d.priority&&(h=1)),!c||m)for(a in r)uy[a]&&(d=c5(a,r,t,f,l,L))?d.priority&&(h=1):p[a]=o=c3.call(t,l,a,"get",r[a],f,L,0,_.stringFilter);t._op&&t._op[s]&&t.kill(l,t._op[s]),D&&t._pt&&(c$=t,hk.killTweensOf(l,p,t.globalTime(i)),g=!t.parent,c$=0),t._pt&&M&&(ux[u.id]=1)}h&&dg(t),t._onInit&&t._onInit(t)}t._onUpdate=w,t._initted=(!t._op||t._pt)&&!g,T&&i<=0&&O.render(1e8,!0,!0)},c6=function(e,t,i,n,r,s,a,o){var l,h,u,c,d=(e._pt&&e._ptCache||(e._ptCache={}))[t];if(!d)for(d=e._ptCache[t]=[],u=e._ptLookup,c=e._targets.length;c--;){if((l=u[c][t])&&l.d&&l.d._pt)for(// it's a plugin, so find the nested PropTween
l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return(// there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
// if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
c0=1,e.vars[t]="+=0",c4(e,a),c0=0,o?uc(t+" not eligible for reset"):1);// if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
d.push(l)}for(c=d.length;c--;)(l=(h=d[c])._pt||h).s=(n||0===n)&&!r?n:l.s+(n||0)+s*l.c,l.c=i-l.s,h.e&&(h.e=uR(i)+cs(h.e)),h.b&&(h.b=l.s+cs(h.b))},c8=function(e,t){var i,n,r,s,a=e[0]?uA(e[0]).harness:0,o=a&&a.aliases;if(!o)return t;for(n in i=uk({},t),o)if(n in i)for(r=(s=o[n].split(",")).length;r--;)i[s[r]]=i[n];return i},c7=function(e,t,i,n){var r,s,a=t.ease||n||"power1.inOut";if(h9(t))s=i[e]||(i[e]=[]),t.forEach(function(e,i){return s.push({t:i/(t.length-1)*100,v:e,e:a})});else for(r in t)s=i[r]||(i[r]=[]),"ease"===r||s.push({t:parseFloat(e),v:t[r],e:a})},c9=function(e,t,i,n,r){return h1(e)?e.call(t,i,n,r):h0(e)&&~e.indexOf("random(")?cg(e):e},de=ub+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dt={};uC(de+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return dt[e]=1});var di=/*#__PURE__*/function(e){function t(t,i,n,r){"number"==typeof i&&(n.duration=i,i=n,n=null);var s,a,o,l,h,u,c,d,p,f=(s=e.call(this,r?i:uV(i))||this).vars,m=f.duration,g=f.delay,_=f.immediateRender,v=f.stagger,x=f.overwrite,y=f.keyframes,M=f.defaults,w=f.scrollTrigger,S=f.yoyoEase,b=i.parent||hk,T=(h9(t)||h7(t)?h3(t[0]):"length"in i)?[t]:cl(t);if(s._targets=T.length?uT(T):uc("GSAP target "+t+" not found. https://gsap.com",!hj.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=x,y||v||h8(m)||h8(g)){if(i=s.vars,(a=s.timeline=new cX({data:"nested",defaults:M||{},targets:b&&"nested"===b.data?b.vars.targets:T})).kill(),a.parent=a._dp=hv(s),a._start=0,v||h8(m)||h8(g)){if(h=T.length,d=v&&cc(v),h5(v))//users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
for(u in v)~de.indexOf(u)&&(p||(p={}),p[u]=v[u]);for(o=0;o<h;o++)(l=uF(i,dt)).stagger=0,S&&(l.yoyoEase=S),p&&uk(l,p),c=T[o],l.duration=+c9(m,hv(s),o,c,T),l.delay=(+c9(g,hv(s),o,c,T)||0)-s._delay,!v&&1===h&&l.delay&&(// if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
s._delay=g=l.delay,s._start+=g,l.delay=0),a.to(c,l,d?d(o,c,T):0),a._ease=cO.none;a.duration()?m=g=0:s.timeline=0}else if(y){uV(uU(a.vars.defaults,{ease:"none"})),a._ease=cV(y.ease||i.ease||"none");var A,E,C,R=0;if(h9(y))y.forEach(function(e){return a.to(T,e,">")}),a.duration();else{for(u in l={},y)"ease"===u||"easeEach"===u||c7(u,y[u],l,y.easeEach);for(u in l)for(o=0,A=l[u].sort(function(e,t){return e.t-t.t}),R=0;o<A.length;o++)(C={ease:(E=A[o]).e,duration:(E.t-(o?A[o-1].t:0))/100*m})[u]=E.v,a.to(T,C,R),R+=C.duration;a.duration()<m&&a.to({},{duration:m-a.duration()})}}m||s.duration(m=a.duration())}else s.timeline=0;//speed optimization, faster lookups (no going up the prototype chain)
return!0!==x||hN||(c$=hv(s),hk.killTweensOf(T),c$=0),u1(b,hv(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(_||!m&&!y&&s._start===uP(b._time)&&h4(_)&&function e(t){return!t||t._ts&&e(t.parent)}(hv(s))&&"nested"!==b.data)&&(s._tTime=-.00000001,s.render(Math.max(0,-g)||0)),w&&u3(hv(s),w),s}hx(t,e);var i=t.prototype;return i.render=function(e,t,i){var n,r,s,a,o,l,h,u,c,d=this._time,p=this._tDur,f=this._dur,m=e<0,g=e>p-1e-8&&!m?p:e<1e-8?0:e;if(f){if(g!==this._tTime||!e||i||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m){if(//this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
n=g,u=this.timeline,this._repeat){if(//adjust the time for repeats and yoyos
a=f+this._rDelay,this._repeat<-1&&m)return this.totalTime(100*a+e,t,i);if(n=uP(g%a),g===p?(// the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
s=this._repeat,n=f):((s=~~(g/a))&&s===uP(g/a)&&(n=f,s--),n>f&&(n=f)),(l=this._yoyo&&1&s)&&(c=this._yEase,n=f-n),o=uK(this._tTime,a),n===d&&!i&&this._initted&&s===o)return(//could be during the repeatDelay part. No need to render and fire callbacks.
this._tTime=g,this);s!==o&&(u&&this._yEase&&cF(u,l),this.vars.repeatRefresh&&!l&&!this._lock&&this._time!==f&&this._initted&&(// this._time will === dur when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
this._lock=i=1,this.render(uP(a*s),!0).invalidate()._lock=0))}if(!this._initted){if(u2(this,m?e:n,i,t,g))return this._tTime=0,this;if(d!==this._time&&!(i&&this.vars.repeatRefresh&&s!==o))return this;if(f!==this._dur)return this.render(e,t,i)}if(this._tTime=g,this._time=n,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(c||this._ease)(n/f),this._from&&(this.ratio=h=1-h),n&&!d&&!t&&!s&&(cx(this,"onStart"),this._tTime!==g))return this;for(r=this._pt;r;)r.r(h,r.d),r=r._next;u&&u.render(e<0?e:!n&&l?-.00000001:u._dur*u._ease(n/this._dur),t,i)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(m&&uX(this,e,t,i),cx(this,"onUpdate")),this._repeat&&s!==o&&this.vars.onRepeat&&!t&&this.parent&&cx(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&uX(this,e,!0,!0),(e||!f)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&uq(this,1),!t&&!(m&&!d)&&(g||d||l)&&(// if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
cx(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}}else u6(this,e,t,i);return this},i.targets=function(){return this._targets},i.invalidate=function(t){return(t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t))},i.resetTo=function(e,t,i,n,r){hq||cL.wake(),this._ts||this.play();var s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return(// possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
// if (_isObject(property)) { // performance optimization
// 	for (p in property) {
// 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
// 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
// 		}
// 	}
// } else {
(this._initted||c4(this,s),c6(this,e,t,i,n,this._ease(s/this._dur),s,r))?this.resetTo(e,t,i,n,1):(//}
u$(this,0),this.parent||uG(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))// if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
)},i.kill=function(e,t){if(void 0===t&&(t="all"),!e&&(!t||"all"===t))return this._lazy=this._pt=0,this.parent?cy(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,c$&&!0!==c$.vars.overwrite)._first||cy(this),this.parent&&i!==this.timeline.totalDuration()&&u7(this,this._dur*this.timeline._tDur/i,0,1),this}var n,r,s,a,o,l,h,u=this._targets,c=e?cl(e):u,d=this._ptLookup,p=this._pt;if((!t||"all"===t)&&uH(u,c))return"all"===t&&(this._pt=0),cy(this);for(n=this._op=this._op||[],"all"!==t&&(h0(t)&&(o={},uC(t,function(e){return o[e]=1}),t=o),t=c8(u,t)),h=u.length;h--;)if(~c.indexOf(u[h]))for(o in r=d[h],"all"===t?(n[h]=t,a=r,s={}):(s=n[h]=n[h]||{},a=t),a)(l=r&&r[o])&&("kill"in l.d&&!0!==l.d.kill(o)||uW(this,l,"_pt"),delete r[o]),"all"!==s&&(s[o]=1);return this._initted&&!this._pt&&p&&cy(this),this},t.to=function(e,i){return new t(e,i,arguments[2])},t.from=function(e,t){return ci(1,arguments)},t.delayedCall=function(e,i,n,r){return new t(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:i,onReverseComplete:i,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:r});// we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
},t.fromTo=function(e,t,i){return ci(2,arguments)},t.set=function(e,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new t(e,i)},t.killTweensOf=function(e,t,i){return hk.killTweensOf(e,t,i)},t}(cJ);uU(di.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
uC("staggerTo,staggerFrom,staggerFromTo",function(e){di[e]=function(){var t=new cX,i=ca.call(arguments,0);return i.splice("staggerFromTo"===e?5:4,0,0),t[e].apply(t,i)}});/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */var dn=function(e,t,i){return e[t]=i},dr=function(e,t,i){return e[t](i)},ds=function(e,t,i,n){return e[t](n.fp,i)},da=function(e,t,i){return e.setAttribute(t,i)},dl=function(e,t){return h1(e[t])?dr:h2(e[t])&&e.setAttribute?da:dn},dh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},du=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dc=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(1===e&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c;//we use the "c" of the PropTween to store the final chunk of non-numeric text.
}t.set(t.t,t.p,n,t)},dd=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},dp=function(e,t,i,n){for(var r,s=this._pt;s;)r=s._next,s.p===n&&s.modifier(e,t,i),s=r},df=function(e){for(var t,i,n=this._pt;n;)i=n._next,(n.p!==e||n.op)&&n.op!==e?n.dep||(t=1):uW(this,n,"_pt"),n=i;return!t},dm=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},dg=function(e){for(var t,i,n,r,s=e._pt;s;){for(t=s._next,i=n;i&&i.pr>s.pr;)i=i._next;(s._prev=i?i._prev:r)?s._prev._next=s:n=s,(s._next=i)?i._prev=s:r=s,s=t}e._pt=n},d_=/*#__PURE__*/function(){function e(e,t,i,n,r,s,a,o,l){this.t=t,this.s=n,this.c=r,this.p=i,this.r=s||dh,this.d=a||this,this.set=o||dn,this.pr=l||0,this._next=e,e&&(e._prev=this)}return e.prototype.modifier=function(e,t,i){this.mSet=this.mSet||this.set,this.set=dm,this.m=e,this.mt=i,this.tween=t},e}();//PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
uC(ub+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return u_[e]=1}),uo.TweenMax=uo.TweenLite=di,uo.TimelineLite=uo.TimelineMax=cX,hk=new cX({sortChildren:!1,defaults:hJ,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),hj.stringFilter=cP;var dv=[],dx={},dy=[],dM=0,dw=0,dS=function(e){return(dx[e]||dy).map(function(e){return e()})},db=function(){var e=Date.now(),t=[];e-dM>2&&(dS("matchMediaInit"),dv.forEach(function(e){var i,n,r,s,a=e.queries,o=e.conditions;for(n in a)(i=hB.matchMedia(a[n]).matches)&&(r=1),i!==o[n]&&(o[n]=i,s=1);s&&(e.revert(),r&&t.push(e))}),dS("matchMediaRevert"),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),dM=e,dS("matchMedia"))},dT=/*#__PURE__*/function(){function e(e,t){this.selector=t&&ch(t),this.data=[],this._r=[],this.isReverted=!1,this.id=dw++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,i){h1(e)&&(i=t,t=e,e=h1);var n=this,r=function(){var e,r=hU,s=n.selector;return r&&r!==n&&r.data.push(n),i&&(n.selector=ch(i)),hU=n,e=t.apply(n,arguments),h1(e)&&n._r.push(e),hU=r,n.selector=s,n.isReverted=!1,e};return n.last=r,e===h1?r(n,function(e){return n.add(null,e)}):e?n[e]=r:r},t.ignore=function(e){var t=hU;hU=null,e(this),hU=t},t.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof e?t.push.apply(t,i.getTweens()):i instanceof di&&!(i.parent&&"nested"===i.parent.data)&&t.push(i)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var i=this;if(e?function(){for(var t,n=i.getTweens(),r=i.data.length;r--;)"isFlip"===// Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
(t=i.data[r]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return n.splice(n.indexOf(e),1)}));// save as an object so that we can cache the globalTime for each tween to optimize performance during the sort
for(n.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=i.data.length;r--;)// make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
(t=i.data[r])instanceof cX?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):t instanceof di||!t.revert||t.revert(e);i._r.forEach(function(t){return t(e,i)}),i.isReverted=!0}():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var n=dv.length;n--;)dv[n].id===this.id&&dv.splice(n,1)},t.revert=function(e){this.kill(e||{})},e}(),dA=/*#__PURE__*/function(){function e(e){this.contexts=[],this.scope=e}var t=e.prototype;return t.add=function(e,t,i){h5(e)||(e={matches:e});var n,r,s,a=new dT(0,i||this.scope),o=a.conditions={};for(r in hU&&!a.selector&&(a.selector=hU.selector),this.contexts.push(a),t=a.add("onMatch",t),a.queries=e,e)"all"===r?s=1:(n=hB.matchMedia(e[r]))&&(0>dv.indexOf(a)&&dv.push(a),(o[r]=n.matches)&&(s=1),n.addListener?n.addListener(db):n.addEventListener("change",db));return s&&t(a,function(e){return a.add(null,e)}),this}// refresh() {
,t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),dE={registerPlugin:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(e){return cw(e)})},timeline:function(e){return new cX(e)},getTweensOf:function(e,t){return hk.getTweensOf(e,t)},getProperty:function(e,t,i,n){h0(e)&&(e=cl(e)[0]);var r=uA(e||{}).get,s=i?uz:uN;return"native"===i&&(i=""),e?t?s((uy[t]&&uy[t].get||r)(e,t,i,n)):function(t,i,n){return s((uy[t]&&uy[t].get||r)(e,t,i,n))}:e},quickSetter:function(e,t,i){if((e=cl(e)).length>1){var n=e.map(function(e){return dL.quickSetter(e,t,i)}),r=n.length;return function(e){for(var t=r;t--;)n[t](e)}}e=e[0]||{};var s=uy[t],a=uA(e),o=a.harness&&(a.harness.aliases||{})[t]||t,l=s?function(t){var n=new s;hW._pt=0,n.init(e,i?t+i:t,hW,0,[e]),n.render(1,n),hW._pt&&dd(1,hW)}:a.set(e,o);return s?l:function(t){return l(e,o,i?t+i:t,a,1)}},quickTo:function(e,t,i){var n,r=dL.to(e,uk(((n={})[t]="+=0.1",n.paused=!0,n),i||{})),s=function(e,i,n){return r.resetTo(t,e,i,n)};return s.tween=r,s},isTweening:function(e){return hk.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=cV(e.ease,hJ.ease)),uB(hJ,e||{})},config:function(e){return uB(hj,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,s=e.extendTimeline;(n||"").split(",").forEach(function(e){return e&&!uy[e]&&!uo[e]&&uc(t+" effect requires "+e+" plugin.")}),uM[t]=function(e,t,n){return i(cl(e),uU(t||{},r),n)},s&&(cX.prototype[t]=function(e,i,n){return this.add(uM[t](e,h5(i)?i:(n=i)&&{},this),n)})},registerEase:function(e,t){cO[e]=cV(t)},parseEase:function(e,t){return arguments.length?cV(e,t):cO},getById:function(e){return hk.getById(e)},exportRoot:function(e,t){void 0===e&&(e={});var i,n,r=new cX(e);for(r.smoothChildTiming=h4(e.smoothChildTiming),hk.remove(r),r._dp=0,r._time=r._tTime=hk._time,i=hk._first;i;)n=i._next,(t||!(!i._dur&&i instanceof di&&i.vars.onComplete===i._targets[0]))&&u1(r,i,i._start-i._delay),i=n;return u1(hk,r,0),r},context:function(e,t){return e?new dT(e,t):hU},matchMedia:function(e){return new dA(e)},matchMediaRefresh:function(){return dv.forEach(function(e){var t,i,n=e.conditions;for(i in n)n[i]&&(n[i]=!1,t=1);t&&e.revert()})||db()},addEventListener:function(e,t){var i=dx[e]||(dx[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=dx[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:function e(t,i,n){// NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
var r=i-t;return h9(t)?cm(t,e(0,t.length),i):cn(n,function(e){return(r+(e-t)%r)%r+t})},wrapYoyo:function e(t,i,n){var r=i-t,s=2*r;return h9(t)?cm(t,e(0,t.length-1),i):cn(n,function(e){return e=(s+(e-t)%s)%s||0,t+(e>r?s-e:e)})},distribute:cc,random:cf,snap:cp,normalize:function(e,t,i){return c_(e,t,0,1,i)},getUnit:cs,clamp:function(e,t,i){return cn(i,function(i){return cr(e,t,i)})},splitColor:cT,toArray:cl,selector:ch,mapRange:c_,pipe:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(e,t){return t(e)},e)}},unitize:function(e,t){return function(i){return e(parseFloat(i))+(t||cs(i))}},interpolate:function e(t,i,n,r){var s=isNaN(t+i)?0:function(e){return(1-e)*t+e*i};if(!s){var a,o,l,h,u,c=h0(t),d={};if(!0===n&&(r=1)&&(n=null),c)t={p:t},i={p:i};else if(h9(t)&&!h9(i)){for(o=1,l=[],u=(h=t.length)-2;o<h;o++)l.push(e(t[o-1],t[o]));//build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
h--,s=function(e){var t=Math.min(u,~~(e*=h));return l[t](e-t)},n=i}else r||(t=uk(h9(t)?[]:{},t));if(!l){for(a in i)c3.call(d,t,a,"get",i[a]);s=function(e){return dd(e,d)||(c?t.p:t)}}}return cn(n,s)},shuffle:cu},install:uh,effects:uM,ticker:cL,updateRoot:cX.updateRoot,plugins:uy,globalTimeline:hk,core:{PropTween:d_,globals:ud,Tween:di,Timeline:cX,Animation:cJ,getCache:uA,_removeLinkedListItem:uW,reverting:function(){return hz},context:function(e){return e&&hU&&(hU.data.push(e),e._ctx=hU),hU},suppressOverwrites:function(e){return hN=e}}};uC("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return dE[e]=di[e]}),cL.add(cX.updateRoot),hW=dE.to({},{duration:0});var dC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},dR=function(e,t){var i,n,r,s=e._targets;for(i in t)for(n=s.length;n--;)(r=e._ptLookup[n][i])&&(r=r.d)&&(r._pt&&(r=dC(r,i)),r&&r.modifier&&r.modifier(t[i],e,s[n],i))},dP=function(e,t){return{name:e,rawVars:1,//don't pre-process function-based values or "random()" strings.
init:function(e,i,n){n._onInit=function(e){var n,r;if(h0(i)&&(n={},uC(i,function(e){return n[e]=1}),i=n),t){for(r in n={},i)n[r]=t(i[r]);i=n}dR(e,i)}}}},dL=dE.registerPlugin({name:"attr",init:function(e,t,i,n,r){var s,a,o;for(s in this.tween=i,t)o=e.getAttribute(s)||"",(a=this.add(e,"setAttribute",(o||0)+"",t[s],n,r,0,0,s)).op=s,a.b=o,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)hz?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},dP("roundProps",cd),dP("modifiers"),dP("snap",cp))||dE;//register core plugins
di.version=cX.version=dL.version="3.12.3",hH=1,h6()&&cD(),cO.Power0,cO.Power1,cO.Power2,cO.Power3,cO.Power4,cO.Linear,cO.Quad,cO.Cubic,cO.Quart,cO.Quint,cO.Strong,cO.Elastic,cO.Back,cO.SteppedEase,cO.Bounce,cO.Sine,cO.Expo,cO.Circ;/*!
 * CSSPlugin 3.12.3
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var dD,dO,dI,dN,dz,dU,dk,dB={},dF=180/Math.PI,dV=Math.PI/180,dH=Math.atan2,dG=/([A-Z])/g,dW=/(left|right|width|margin|padding|x)/i,dq=/[\s,\(]\S/,dj={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dJ=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dX=function(e,t){return t.set(t.t,t.p,1===e?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dY=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dK=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},dZ=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dQ=function(e,t){return t.set(t.t,t.p,1!==e?t.b:t.e,t)},d$=function(e,t,i){return e.style[t]=i},d0=function(e,t,i){return e.style.setProperty(t,i)},d1=function(e,t,i){return e._gsap[t]=i},d3=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},d2=function(e,t,i,n,r){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(r,s)},d5=function(e,t,i,n,r){var s=e._gsap;s[t]=i,s.renderTransform(r,s)},d4="transform",d6=d4+"Origin",d8=function e(t,i){var n=this,r=this.target,s=r.style,a=r._gsap;if(t in dB&&s){if(this.tfm=this.tfm||{},"transform"===t)return dj.transform.split(",").forEach(function(t){return e.call(n,t,i)});if(~(t=dj[t]||t).indexOf(",")?t.split(",").forEach(function(e){return n.tfm[e]=pm(r,e)}):this.tfm[t]=a.x?a[t]:pm(r,t),t===d6&&(this.tfm.zOrigin=a.zOrigin),this.props.indexOf(d4)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(d6,i,"")),t=d4}(s||i)&&this.props.push(t,i,s[t])},d7=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},d9=function(){var e,t,i=this.props,n=this.target,r=n.style,s=n._gsap;for(e=0;e<i.length;e+=3)i[e+1]?n[i[e]]=i[e+2]:i[e+2]?r[i[e]]=i[e+2]:r.removeProperty("--"===i[e].substr(0,2)?i[e]:i[e].replace(dG,"-$1").toLowerCase());if(this.tfm){for(t in this.tfm)s[t]=this.tfm[t];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),(e=dU())&&e.isStart||r[d4]||(d7(r),s.zOrigin&&r[d6]&&(r[d6]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},pe=function(e,t){var i={target:e,props:[],revert:d9,save:d8};return e._gsap||dL.core.getCache(e),t&&t.split(",").forEach(function(e){return i.save(e)}),i},pt=function(e,t){var i=dD.createElementNS?dD.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):dD.createElement(e);//some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
return i&&i.style?i:dD.createElement(e);//some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},pi=function e(t,i,n){var r=getComputedStyle(t);return r[i]||r.getPropertyValue(i.replace(dG,"-$1").toLowerCase())||r.getPropertyValue(i)||!n&&e(t,pr(i)||i,1)||"";//css variables may not need caps swapped out for dashes and lowercase.
},pn="O,Moz,ms,Ms,Webkit".split(","),pr=function(e,t,i){var n=(t||dN).style,r=5;if(e in n&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(pn[r]+e in n););return r<0?null:(3===r?"ms":r>=0?pn[r]:"")+e},ps=function(){"undefined"!=typeof window&&window.document&&(dO=(dD=window.document).documentElement,dN=pt("div")||{style:{}},pt("div"),d6=(d4=pr(d4))+"Origin",dN.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dk=!!pr("perspective"),dU=dL.core.reverting,dI=1)},pa=function e(t){//works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
var i,n=pt("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,s=this.nextSibling,a=this.style.cssText;if(dO.appendChild(n),n.appendChild(this),this.style.display="block",t)try{i=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=e}catch(e){}else this._gsapBBox&&(i=this._gsapBBox());return r&&(s?r.insertBefore(this,s):r.appendChild(this)),dO.removeChild(n),this.style.cssText=a,i},po=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},pl=function(e){var t;try{t=e.getBBox();//Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
}catch(i){t=pa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===pa||(t=pa.call(e,!0)),!t||t.width||t.x||t.y?t:{x:+po(e,["x","cx","x1"])||0,y:+po(e,["y","cy","y1"])||0,width:0,height:0}},ph=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&pl(e))},pu=function(e,t){if(t){var i,n=e.style;t in dB&&t!==d6&&(t=d4),n.removeProperty?(("ms"===(i=t.substr(0,2))||"webkit"===t.substr(0,6))&&(t="-"+t),n.removeProperty("--"===i?t:t.replace(dG,"-$1").toLowerCase())):n.removeAttribute(t)}},pc=function(e,t,i,n,r,s){var a=new d_(e._pt,t,i,0,1,s?dQ:dZ);return e._pt=a,a.b=n,a.e=r,e._props.push(i),a},pd={deg:1,rad:1,turn:1},pp={grid:1,flex:1},pf=function e(t,i,n,r){var s,a,o,l,h=parseFloat(n)||0,u=(n+"").trim().substr((h+"").length)||"px",c=dN.style,d=dW.test(i),p="svg"===t.tagName.toLowerCase(),f=(p?"client":"offset")+(d?"Width":"Height"),m="px"===r,g="%"===r;if(r===u||!h||pd[r]||pd[u])return h;if("px"===u||m||(h=e(t,i,n,"px")),l=t.getCTM&&ph(t),(g||"%"===u)&&(dB[i]||~i.indexOf("adius")))return s=l?t.getBBox()[d?"width":"height"]:t[f],uR(g?h/s*100:h/100*s);if(c[d?"width":"height"]=100+(m?u:r),a=~i.indexOf("adius")||"em"===r&&t.appendChild&&!p?t:t.parentNode,l&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==dD&&a.appendChild||(a=dD.body),(o=a._gsap)&&g&&o.width&&d&&o.time===cL.time&&!o.uncache)return uR(h/o.width*100);if(g&&("height"===i||"width"===i)){// if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
var _=t.style[i];t.style[i]=100+r,s=t[f],_?t.style[i]=_:pu(t,i)}else(g||"%"===u)&&!pp[pi(a,"display")]&&(c.position=pi(t,"position")),a===t&&(c.position="static"),a.appendChild(dN),s=dN[f],a.removeChild(dN),c.position="absolute";return d&&g&&((o=uA(a)).time=cL.time,o.width=a[f]),uR(m?s*h/100:s&&h?100/s*h:0)},pm=function(e,t,i,n){var r;return dI||ps(),t in dj&&"transform"!==t&&~(t=dj[t]).indexOf(",")&&(t=t.split(",")[0]),dB[t]&&"transform"!==t?(r=pE(e,n),r="transformOrigin"!==t?r[t]:r.svg?r.origin:pC(pi(e,d6))+" "+r.zOrigin+"px"):(!(r=e.style[t])||"auto"===r||n||~(r+"").indexOf("calc("))&&(r=py[t]&&py[t](e,t,i)||pi(e,t)||uE(e,t)||("opacity"===t?1:0)),i&&!~(r+"").trim().indexOf(" ")?pf(e,t,r,i)+i:r},pg=function(e,t,i,n){// note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
if(!i||"none"===i){// some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
var r=pr(t,e,1),s=r&&pi(e,r,1);s&&s!==i?(t=r,i=s):"borderColor"===t&&(i=pi(e,"borderTopColor"));// Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
}var a,o,l,h,u,c,d,p,f,m,g,_=new d_(this._pt,e.style,t,0,1,dc),v=0,x=0;if(_.b=i,_.e=n,i+="","auto"==(n+="")&&(c=e.style[t],e.style[t]=n,n=pi(e,t)||n,c?e.style[t]=c:pu(e,t)),cP(a=[i,n]),i=a[0],n=a[1],l=i.match(ui)||[],(n.match(ui)||[]).length){for(;o=ui.exec(n);)d=o[0],f=n.substring(v,o.index),u?u=(u+1)%5:("rgba("===f.substr(-5)||"hsla("===f.substr(-5))&&(u=1),d!==(c=l[x++]||"")&&(h=parseFloat(c)||0,g=c.substr((h+"").length),"="===d.charAt(1)&&(d=uL(h,d)+g),p=parseFloat(d),m=d.substr((p+"").length),v=ui.lastIndex-m.length,m||(//if something like "perspective:300" is passed in and we must add a unit to the end
m=m||hj.units[t]||g,v!==n.length||(n+=m,_.e+=m)),g!==m&&(h=pf(e,t,c,m)||0),// these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
_._pt={_next:_._pt,p:f||1===x?f:",",//note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
s:h,c:p-h,m:u&&u<4||"zIndex"===t?Math.round:0});_.c=v<n.length?n.substring(v,n.length):"";//we use the "c" of the PropTween to store the final part of the string (after the last number)
}else _.r="display"===t&&"none"===n?dQ:dZ;return ur.test(n)&&(_.e=0),this._pt=_,_},p_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pv=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return("top"===i||"bottom"===i||"left"===n||"right"===n)&&(//the user provided them in the wrong order, so flip them
e=i,i=n,n=e),t[0]=p_[i]||i,t[1]=p_[n]||n,t.join(" ")},px=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i,n,r,s=t.t,a=s.style,o=t.u,l=s._gsap;if("all"===o||!0===o)a.cssText="",n=1;else for(r=(o=o.split(",")).length;--r>-1;)dB[i=o[r]]&&(n=1,i="transformOrigin"===i?d6:d4),pu(s,i);n&&(pu(s,d4),l&&(l.svg&&s.removeAttribute("transform"),pE(s,1),l.uncache=1,d7(a)))}},py={clearProps:function(e,t,i,n,r){if("isFromStart"!==r.data){var s=e._pt=new d_(e._pt,t,i,0,0,px);return s.u=n,s.pr=-10,s.tween=r,e._props.push(i),1}}},/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */pM=[1,0,0,1,0,0],pw={},pS=function(e){return"matrix(1, 0, 0, 1, 0, 0)"===e||"none"===e||!e},pb=function(e){var t=pi(e,d4);return pS(t)?pM:t.substr(7).match(ut).map(uR)},pT=function(e,t){var i,n,r,s,a=e._gsap||uA(e),o=e.style,l=pb(e);return a.svg&&e.getAttribute("transform")?"1,0,0,1,0,0"===(l=[(r=e.transform.baseVal.consolidate().matrix).a,r.b,r.c,r.d,r.e,r.f]).join(",")?pM:l:(l!==pM||e.offsetParent||e===dO||a.svg||(//note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
//browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
r=o.display,o.display="block",(i=e.parentNode)&&e.offsetParent||(// note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
s=1,n=e.nextElementSibling,dO.appendChild(e)),l=pb(e),r?o.display=r:pu(e,"display"),s&&(n?i.insertBefore(e,n):i?i.appendChild(e):dO.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},pA=function(e,t,i,n,r,s){var a,o,l,h,u=e._gsap,c=r||pT(e,!0),d=u.xOrigin||0,p=u.yOrigin||0,f=u.xOffset||0,m=u.yOffset||0,g=c[0],_=c[1],v=c[2],x=c[3],y=c[4],M=c[5],w=t.split(" "),S=parseFloat(w[0])||0,b=parseFloat(w[1])||0;i?c!==pM&&(o=g*x-_*v)&&(//if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
l=S*(x/o)+b*(-v/o)+(v*M-x*y)/o,h=S*(-_/o)+b*(g/o)-(g*M-_*y)/o,S=l,b=h):(S=(a=pl(e)).x+(~w[0].indexOf("%")?S/100*a.width:S),b=a.y+(~(w[1]||w[0]).indexOf("%")?b/100*a.height:b),"xOrigin"in u||!S&&!b||(S-=a.x,b-=a.y)),n||!1!==n&&u.smooth?(y=S-d,M=b-p,u.xOffset=f+(y*g+M*v)-y,u.yOffset=m+(y*_+M*x)-M):u.xOffset=u.yOffset=0,u.xOrigin=S,u.yOrigin=b,u.smooth=!!n,u.origin=t,u.originIsAbsolute=!!i,e.style[d6]="0px 0px",s&&(pc(s,u,"xOrigin",d,S),pc(s,u,"yOrigin",p,b),pc(s,u,"xOffset",f,u.xOffset),pc(s,u,"yOffset",m,u.yOffset)),e.setAttribute("data-svg-origin",S+" "+b)},pE=function(e,t){var i=e._gsap||new cj(e);if("x"in i&&!t&&!i.uncache)return i;var n,r,s,a,o,l,h,u,c,d,p,f,m,g,_,v,x,y,M,w,S,b,T,A,E,C,R,P,L,D,O,I,N=e.style,z=i.scaleX<0,U=getComputedStyle(e),k=pi(e,d6)||"0";return n=r=s=l=h=u=c=d=p=0,a=o=1,i.svg=!!(e.getCTM&&ph(e)),U.translate&&(("none"!==U.translate||"none"!==U.scale||"none"!==U.rotate)&&(N[d4]=("none"!==U.translate?"translate3d("+(U.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==U.rotate?"rotate("+U.rotate+") ":"")+("none"!==U.scale?"scale("+U.scale.split(" ").join(",")+") ":"")+("none"!==U[d4]?U[d4]:"")),N.scale=N.rotate=N.translate="none"),g=pT(e,i.svg),i.svg&&(i.uncache?(// if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
E=e.getBBox(),k=i.xOrigin-E.x+"px "+(i.yOrigin-E.y)+"px",A=""):A=!t&&e.getAttribute("data-svg-origin"),pA(e,A||k,!!A||i.originIsAbsolute,!1!==i.smooth,g)),f=i.xOrigin||0,m=i.yOrigin||0,g!==pM&&(y=g[0],M=g[1],w=g[2],S=g[3],n=b=g[4],r=T=g[5],6===g.length?(a=Math.sqrt(y*y+M*M),o=Math.sqrt(S*S+w*w),l=y||M?dH(M,y)*dF:0,(c=w||S?dH(w,S)*dF+l:0)&&(o*=Math.abs(Math.cos(c*dV))),i.svg&&(n-=f-(f*y+m*w),r-=m-(f*M+m*S))):(I=g[6],D=g[7],R=g[8],P=g[9],L=g[10],O=g[11],n=g[12],r=g[13],s=g[14],h=(_=dH(I,L))*dF,_&&(A=b*(v=Math.cos(-_))+R*(x=Math.sin(-_)),E=T*v+P*x,C=I*v+L*x,R=-(b*x)+R*v,P=-(T*x)+P*v,L=-(I*x)+L*v,O=-(D*x)+O*v,b=A,T=E,I=C),u=(_=dH(-w,L))*dF,_&&(A=y*(v=Math.cos(-_))-R*(x=Math.sin(-_)),E=M*v-P*x,C=w*v-L*x,O=S*x+O*v,y=A,M=E,w=C),l=(_=dH(M,y))*dF,_&&(A=y*(v=Math.cos(_))+M*(x=Math.sin(_)),E=b*v+T*x,M=M*v-y*x,T=T*v-b*x,y=A,b=E),h&&Math.abs(h)+Math.abs(l)>359.9&&(//when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
h=l=0,u=180-u),a=uR(Math.sqrt(y*y+M*M+w*w)),o=uR(Math.sqrt(T*T+I*I)),c=Math.abs(_=dH(b,T))>2e-4?_*dF:0,p=O?1/(O<0?-O:O):0),i.svg&&(//sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
A=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!pS(pi(e,d4)),A&&e.setAttribute("transform",A))),Math.abs(c)>90&&270>Math.abs(c)&&(z?(a*=-1,c+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,c+=c<=0?180:-180)),t=t||i.uncache,i.x=n-((i.xPercent=n&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-n)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+"px",i.y=r-((i.yPercent=r&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-r)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+"px",i.z=s+"px",i.scaleX=uR(a),i.scaleY=uR(o),i.rotation=uR(l)+"deg",i.rotationX=uR(h)+"deg",i.rotationY=uR(u)+"deg",i.skewX=c+"deg",i.skewY=d+"deg",i.transformPerspective=p+"px",(i.zOrigin=parseFloat(k.split(" ")[2])||!t&&i.zOrigin||0)&&(N[d6]=pC(k)),i.svg||(i.xOffset=i.yOffset=0),i.force3D=hj.force3D,i.renderTransform=i.svg?pO:dk?pD:pP,i.uncache=0,i},pC=function(e){return(e=e.split(" "))[0]+" "+e[1]},pR=function(e,t,i){var n=cs(t);return uR(parseFloat(t)+parseFloat(pf(e,"x",i+"px",n)))+n},pP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pD(e,t)},pL="0deg",pD=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,s=i.x,a=i.y,o=i.z,l=i.rotation,h=i.rotationY,u=i.rotationX,c=i.skewX,d=i.skewY,p=i.scaleX,f=i.scaleY,m=i.transformPerspective,g=i.force3D,_=i.target,v=i.zOrigin,x="",y="auto"===g&&e&&1!==e||!0===g;// Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
if(v&&(u!==pL||h!==pL)){var M,w=parseFloat(h)*dV,S=Math.sin(w),b=Math.cos(w);s=pR(_,s,-(S*(M=Math.cos(w=parseFloat(u)*dV))*v)),a=pR(_,a,-(-Math.sin(w)*v)),o=pR(_,o,-(b*M*v)+v)}"0px"!==m&&(x+="perspective("+m+") "),(n||r)&&(x+="translate("+n+"%, "+r+"%) "),(y||"0px"!==s||"0px"!==a||"0px"!==o)&&(x+="0px"!==o||y?"translate3d("+s+", "+a+", "+o+") ":"translate("+s+", "+a+") "),l!==pL&&(x+="rotate("+l+") "),h!==pL&&(x+="rotateY("+h+") "),u!==pL&&(x+="rotateX("+u+") "),(c!==pL||d!==pL)&&(x+="skew("+c+", "+d+") "),(1!==p||1!==f)&&(x+="scale("+p+", "+f+") "),_.style[d4]=x||"translate(0, 0)"},pO=function(e,t){var i,n,r,s,a,o=t||this,l=o.xPercent,h=o.yPercent,u=o.x,c=o.y,d=o.rotation,p=o.skewX,f=o.skewY,m=o.scaleX,g=o.scaleY,_=o.target,v=o.xOrigin,x=o.yOrigin,y=o.xOffset,M=o.yOffset,w=o.forceCSS,S=parseFloat(u),b=parseFloat(c);d=parseFloat(d),p=parseFloat(p),(f=parseFloat(f))&&(p+=//for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
f=parseFloat(f),d+=f),d||p?(d*=dV,p*=dV,i=Math.cos(d)*m,n=Math.sin(d)*m,r=-(Math.sin(d-p)*g),s=Math.cos(d-p)*g,p&&(f*=dV,r*=a=Math.sqrt(1+(a=Math.tan(p-f))*a),s*=a,f&&(i*=a=Math.sqrt(1+(a=Math.tan(f))*a),n*=a)),i=uR(i),n=uR(n),r=uR(r),s=uR(s)):(i=m,s=g,n=r=0),(S&&!~(u+"").indexOf("px")||b&&!~(c+"").indexOf("px"))&&(S=pf(_,"x",u,"px"),b=pf(_,"y",c,"px")),(v||x||y||M)&&(S=uR(S+v-(v*i+x*r)+y),b=uR(b+x-(v*n+x*s)+M)),(l||h)&&(S=uR(S+l/100*//The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
(a=_.getBBox()).width),b=uR(b+h/100*a.height)),a="matrix("+i+","+n+","+r+","+s+","+S+","+b+")",_.setAttribute("transform",a),w&&(_.style[d4]=a)},pI=function(e,t,i,n,r){var s,a,o=h0(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?dF:1)-n,h=n+l+"deg";return o&&("short"===(s=r.split("_")[1])&&(l%=360)!=l%180&&(l+=l<0?360:-360),"cw"===s&&l<0?l=(l+36e9)%360-360*~~(l/360):"ccw"===s&&l>0&&(l=(l-36e9)%360-360*~~(l/360))),e._pt=a=new d_(e._pt,t,i,n,l,dX),a.e=h,a.u="deg",e._props.push(i),a},pN=function(e,t){// Internet Explorer doesn't have Object.assign(), so we recreate it here.
for(var i in t)e[i]=t[i];return e},pz=function(e,t,i){//for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
var n,r,s,a,o,l,h,u=pN({},i._gsap),c=i.style;for(r in u.svg?(s=i.getAttribute("transform"),i.setAttribute("transform",""),c[d4]=t,n=pE(i,1),pu(i,d4),i.setAttribute("transform",s)):(s=getComputedStyle(i)[d4],c[d4]=t,n=pE(i,1),c[d4]=s),dB)(s=u[r])!==(a=n[r])&&0>"perspective,force3D,transformOrigin,svgOrigin".indexOf(r)&&(o=cs(s)!==(h=cs(a))?pf(i,r,s,h):parseFloat(s),l=parseFloat(a),e._pt=new d_(e._pt,n,r,o,l-o,dJ),e._pt.u=h||0,e._props.push(r));pN(n,u)};// handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
uC("padding,margin,Width,Radius",function(e,t){var i="Right",n="Bottom",r="Left",s=(t<3?["Top",i,n,r]:["Top"+r,"Top"+i,n+i,n+r]).map(function(i){return t<2?e+i:"border"+i+e});py[t>1?"border"+e:e]=function(e,t,i,n,r){var a,o;if(arguments.length<4)return 5===(o=// getter, passed target, property, and unit (from _get())
(a=s.map(function(t){return pm(e,t,i)})).join(" ")).split(a[0]).length?a[0]:o;a=(n+"").split(" "),o={},s.forEach(function(e,t){return o[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,o,r)}});var pU={name:"css",register:ps,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var s,a,o,l,h,u,c,d,p,f,m,g,_,v,x,y,M=this._props,w=e.style,S=i.vars.startAt;for(c in dI||ps(),this.styles=this.styles||pe(e),y=this.styles.props,this.tween=i,t)if("autoRound"!==c&&(a=t[c],!(uy[c]&&c5(c,t,i,n,e,r)))){if(h=typeof a,u=py[c],"function"===h&&(h=typeof(a=a.call(i,n,e,r))),"string"===h&&~a.indexOf("random(")&&(a=cg(a)),u)u(this,e,c,a,i)&&(x=1);else if("--"===c.substr(0,2))//CSS variable
s=(getComputedStyle(e).getPropertyValue(c)+"").trim(),a+="",cC.lastIndex=0,cC.test(s)||(// colors don't have units
d=cs(s),p=cs(a)),p?d!==p&&(s=pf(e,c,s,p)+p):d&&(a+=d),this.add(w,"setProperty",s,a,n,r,0,0,c),M.push(c),y.push(c,0,w[c]);else if("undefined"!==h){if(S&&c in S?(h0(// in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
s="function"==typeof S[c]?S[c].call(i,n,e,r):S[c])&&~s.indexOf("random(")&&(s=cg(s)),cs(s+"")||"auto"===s||(s+=hj.units[c]||cs(pm(e,c))||""),"="===(s+"").charAt(1)&&(s=pm(e,c))):s=pm(e,c),l=parseFloat(s),(f="string"===h&&"="===a.charAt(1)&&a.substr(0,2))&&(a=a.substr(2)),o=parseFloat(a),c in dj&&("autoAlpha"===c&&(1===l&&"hidden"===pm(e,"visibility")&&o&&(l=0),y.push("visibility",0,w.visibility),pc(this,w,"visibility",l?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==c&&"transform"!==c&&~(c=dj[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in dB){if(this.styles.save(c),g||((_=e._gsap).renderTransform&&!t.parseTransform||pE(e,t.parseTransform),v=!1!==t.smoothOrigin&&_.smooth,(g=this._pt=new d_(this._pt,w,d4,0,1,_.renderTransform,_,0,-1)).dep=1),"scale"===c)this._pt=new d_(this._pt,_,"scaleY",_.scaleY,(f?uL(_.scaleY,f+o):o)-_.scaleY||0,dJ),this._pt.u=0,M.push("scaleY",c),c+="X";else if("transformOrigin"===c){y.push(d6,0,w[d6]),a=pv(a),_.svg?pA(e,a,0,v,0,this):((p=parseFloat(a.split(" ")[2])||0)!==_.zOrigin&&pc(this,_,"zOrigin",_.zOrigin,p),pc(this,w,c,pC(s),pC(a)));continue}else if("svgOrigin"===c){pA(e,a,1,v,0,this);continue}else if(c in pw){pI(this,_,c,l,f?uL(l,f+a):a);continue}else if("smoothOrigin"===c){pc(this,_,"smooth",_.smooth,a);continue}else if("force3D"===c){_[c]=a;continue}else if("transform"===c){pz(this,a,e);continue}}else c in w||(c=pr(c)||c);if(m||(o||0===o)&&(l||0===l)&&!dq.test(a)&&c in w)d=(s+"").substr((l+"").length),o||(o=0),p=cs(a)||(c in hj.units?hj.units[c]:d),d!==p&&(l=pf(e,c,s,p)),this._pt=new d_(this._pt,m?_:w,c,l,(f?uL(l,f+o):o)-l,m||"px"!==p&&"zIndex"!==c||!1===t.autoRound?dJ:dK),this._pt.u=p||0,d!==p&&"%"!==p&&(//when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
this._pt.b=s,this._pt.r=dY);else if(c in w)pg.call(this,e,c,s,f?f+a:a);else if(c in e)this.add(e,c,s||e[c],f?f+a:a,n,r);else if("parseTransform"!==c){uu(c,a);continue}m||(c in w?y.push(c,0,w[c]):y.push(c,1,s||e[c])),M.push(c)}}x&&dg(this)},render:function(e,t){if(t.tween._time||!dU())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:pm,aliases:dj,getSetter:function(e,t,i){//returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
var n=dj[t];return n&&0>n.indexOf(",")&&(t=n),t in dB&&t!==d6&&(e._gsap.x||pm(e,"x"))?i&&dz===i?"scale"===t?d3:d1:(dz=i||{},"scale"===t?d2:d5):e.style&&!h2(e.style[t])?d$:~t.indexOf("-")?d0:dl(e,t)},core:{_removeProperty:pu,_getMatrix:pT}};dL.utils.checkPrefix=pr,dL.core.getStyleSaver=pe,r4=uC((r2="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(r5="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(e){dB[e]=1}),uC(r5,function(e){hj.units[e]="deg",pw[e]=1}),dj[r4[13]]=r2+","+r5,uC("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(e){var t=e.split(":");dj[t[1]]=r4[t[0]]}),uC("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){hj.units[e]="px"}),dL.registerPlugin(pU);var pk=dL.registerPlugin(pU)||dL;/**
 * @param {BufferGeometry} geometry
 * @param {number} drawMode
 * @return {BufferGeometry}
 */function pB(e,t){if(0===t)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(2!==t&&1!==t)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e;{let i=e.getIndex();// generate index if not present
if(null===i){let t=[],n=e.getAttribute("position");if(void 0===n)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let e=0;e<n.count;e++)t.push(e);e.setIndex(t),i=e.getIndex()}//
let n=i.count-2,r=[];if(2===t)for(let e=1;e<=n;e++)r.push(i.getX(0)),r.push(i.getX(e)),r.push(i.getX(e+1));else // gl.TRIANGLE_STRIP
for(let e=0;e<n;e++)e%2==0?(r.push(i.getX(e)),r.push(i.getX(e+1)),r.push(i.getX(e+2))):(r.push(i.getX(e+2)),r.push(i.getX(e+1)),r.push(i.getX(e)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");// build final geometry
let s=e.clone();return s.setIndex(r),s.clearGroups(),s}}/* GLTFREGISTRY */function pF(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}pk.core.Tween;/*********************************//********** EXTENSIONS ***********//*********************************/const pV={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};/**
 * Punctual Lights Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
 */class pH{constructor(e){this.parser=e,this.name=pV.KHR_LIGHTS_PUNCTUAL,// Object3D instance caches
this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let n=t[i];n.extensions&&n.extensions[this.name]&&void 0!==n.extensions[this.name].light&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){let t;let i=this.parser,n="light:"+e,r=i.cache.get(n);if(r)return r;let s=i.json,a=s.extensions&&s.extensions[this.name]||{},o=a.lights||[],l=o[e],h=new e9(16777215);void 0!==l.color&&h.fromArray(l.color);let u=void 0!==l.range?l.range:0;switch(l.type){case"directional":(t=new am(h)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new ap(h)).distance=u;break;case"spot":(t=new al(h)).distance=u,// Handle spotlight properties.
l.spot=l.spot||{},l.spot.innerConeAngle=void 0!==l.spot.innerConeAngle?l.spot.innerConeAngle:0,l.spot.outerConeAngle=void 0!==l.spot.outerConeAngle?l.spot.outerConeAngle:Math.PI/4,t.angle=l.spot.outerConeAngle,t.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return(// Some lights (e.g. spot) default to a position other than the origin. Reset the position
// here, because node-level parsing will only override position if explicitly specified.
t.position.set(0,0,0),t.decay=2,fd(t,l),void 0!==l.intensity&&(t.intensity=l.intensity),t.name=i.createUniqueName(l.name||"light_"+e),r=Promise.resolve(t),i.cache.add(n,r),r)}getDependency(e,t){if("light"===e)return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,n=i.json,r=n.nodes[e],s=r.extensions&&r.extensions[this.name]||{},a=s.light;return void 0===a?null:this._loadLight(a).then(function(e){return i._getNodeRef(t.cache,a,e)})}}/**
 * Unlit Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
 */class pG{constructor(){this.name=pV.KHR_MATERIALS_UNLIT}getMaterialType(){return tt}extendParams(e,t,i){let n=[];e.color=new e9(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let t=r.baseColorFactor;e.color.fromArray(t),e.opacity=t[3]}void 0!==r.baseColorTexture&&n.push(i.assignTexture(e,"map",r.baseColorTexture,3001))}return Promise.all(n)}}/**
 * Materials Emissive Strength Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/blob/5768b3ce0ef32bc39cdf1bef10b948586635ead3/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md
 */class pW{constructor(e){this.parser=e,this.name=pV.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return void 0!==r&&(t.emissiveIntensity=r),Promise.resolve()}}/**
 * Clearcoat Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
 */class pq{constructor(e){this.parser=e,this.name=pV.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser,i=t.json.materials[e];return i.extensions&&i.extensions[this.name]?sk:null}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];if(void 0!==s.clearcoatFactor&&(t.clearcoat=s.clearcoatFactor),void 0!==s.clearcoatTexture&&r.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),void 0!==s.clearcoatRoughnessFactor&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),void 0!==s.clearcoatRoughnessTexture&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),void 0!==s.clearcoatNormalTexture&&(r.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),void 0!==s.clearcoatNormalTexture.scale)){let e=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new w(e,e)}return Promise.all(r)}}/**
 * Iridescence Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_iridescence
 */class pj{constructor(e){this.parser=e,this.name=pV.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser,i=t.json.materials[e];return i.extensions&&i.extensions[this.name]?sk:null}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];return void 0!==s.iridescenceFactor&&(t.iridescence=s.iridescenceFactor),void 0!==s.iridescenceTexture&&r.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),void 0!==s.iridescenceIor&&(t.iridescenceIOR=s.iridescenceIor),void 0===t.iridescenceThicknessRange&&(t.iridescenceThicknessRange=[100,400]),void 0!==s.iridescenceThicknessMinimum&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),void 0!==s.iridescenceThicknessMaximum&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),void 0!==s.iridescenceThicknessTexture&&r.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}/**
 * Sheen Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
 */class pJ{constructor(e){this.parser=e,this.name=pV.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser,i=t.json.materials[e];return i.extensions&&i.extensions[this.name]?sk:null}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new e9(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=n.extensions[this.name];return void 0!==s.sheenColorFactor&&t.sheenColor.fromArray(s.sheenColorFactor),void 0!==s.sheenRoughnessFactor&&(t.sheenRoughness=s.sheenRoughnessFactor),void 0!==s.sheenColorTexture&&r.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,3001)),void 0!==s.sheenRoughnessTexture&&r.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}/**
 * Transmission Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
 * Draft: https://github.com/KhronosGroup/glTF/pull/1698
 */class pX{constructor(e){this.parser=e,this.name=pV.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser,i=t.json.materials[e];return i.extensions&&i.extensions[this.name]?sk:null}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];return void 0!==s.transmissionFactor&&(t.transmission=s.transmissionFactor),void 0!==s.transmissionTexture&&r.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}/**
 * Materials Volume Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
 */class pY{constructor(e){this.parser=e,this.name=pV.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser,i=t.json.materials[e];return i.extensions&&i.extensions[this.name]?sk:null}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];t.thickness=void 0!==s.thicknessFactor?s.thicknessFactor:0,void 0!==s.thicknessTexture&&r.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let a=s.attenuationColor||[1,1,1];return t.attenuationColor=new e9(a[0],a[1],a[2]),Promise.all(r)}}/**
 * Materials ior Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
 */class pK{constructor(e){this.parser=e,this.name=pV.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser,i=t.json.materials[e];return i.extensions&&i.extensions[this.name]?sk:null}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=void 0!==r.ior?r.ior:1.5,Promise.resolve()}}/**
 * Materials specular Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
 */class pZ{constructor(e){this.parser=e,this.name=pV.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser,i=t.json.materials[e];return i.extensions&&i.extensions[this.name]?sk:null}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];t.specularIntensity=void 0!==s.specularFactor?s.specularFactor:1,void 0!==s.specularTexture&&r.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));let a=s.specularColorFactor||[1,1,1];return t.specularColor=new e9(a[0],a[1],a[2]),void 0!==s.specularColorTexture&&r.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,3001)),Promise.all(r)}}/**
 * BasisU Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
 */class pQ{constructor(e){this.parser=e,this.name=pV.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(!(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0))return null;throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures")}return t.loadTextureImage(e,r.source,s)}}/**
 * WebP Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
 */class p${constructor(e){this.parser=e,this.name=pV.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],a=n.images[s.source],o=i.textureLoader;if(a.uri){let e=i.options.manager.getHandler(a.uri);null!==e&&(o=e)}return this.detectSupport().then(function(r){if(r)return i.loadTextureImage(e,s.source,o);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");// Fall back to PNG or JPEG.
return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;// Lossy test image. Support for lossy images doesn't guarantee support for all
// WebP images, unfortunately.
t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}}/**
 * AVIF Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_avif
 */class p0{constructor(e){this.parser=e,this.name=pV.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],a=n.images[s.source],o=i.textureLoader;if(a.uri){let e=i.options.manager.getHandler(a.uri);null!==e&&(o=e)}return this.detectSupport().then(function(r){if(r)return i.loadTextureImage(e,s.source,o);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");// Fall back to PNG or JPEG.
return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;// Lossy test image.
t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}}/**
 * meshopt BufferView Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
 */class p1{constructor(e){this.name=pV.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(!i.extensions||!i.extensions[this.name])return null;{let e=i.extensions[this.name],n=this.parser.getDependency("buffer",e.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(!(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0))return null;throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files")}return n.then(function(t){let i=e.byteOffset||0,n=e.byteLength||0,s=e.count,a=e.byteStride,o=new Uint8Array(t,i,n);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(s,a,o,e.mode,e.filter).then(function(e){return e.buffer}):r.ready.then(function(){let t=new ArrayBuffer(s*a);return r.decodeGltfBuffer(new Uint8Array(t),s,a,o,e.mode,e.filter),t})})}}}/**
 * GPU Instancing Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_mesh_gpu_instancing
 *
 */class p3{constructor(e){this.name=pV.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||void 0===i.mesh)return null;let n=t.meshes[i.mesh];// No Points or Lines + Instancing support yet
for(let e of n.primitives)if(e.mode!==fi.TRIANGLES&&e.mode!==fi.TRIANGLE_STRIP&&e.mode!==fi.TRIANGLE_FAN&&void 0!==e.mode)return null;let r=i.extensions[this.name],s=r.attributes,a=[],o={};for(let e in s)a.push(this.parser.getDependency("accessor",s[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),i=t.isGroup?t.children:[t],n=e[0].count,r=[];for(let e of i){// Temporal variables
let t=new ex,i=new G,s=new H,a=new G(1,1,1),l=new rS(e.geometry,e.material,n);for(let e=0;e<n;e++)o.TRANSLATION&&i.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&s.fromBufferAttribute(o.ROTATION,e),o.SCALE&&a.fromBufferAttribute(o.SCALE,e),l.setMatrixAt(e,t.compose(i,s,a));// Add instance attributes to the geometry, excluding TRS.
for(let t in o)"TRANSLATION"!==t&&"ROTATION"!==t&&"SCALE"!==t&&e.geometry.setAttribute(t,o[t]);eW.prototype.copy.call(l,e),this.parser.assignFinalMaterial(l),r.push(l)}return t.isGroup?(t.clear(),t.add(...r),t):r[0]}))}}/* BINARY EXTENSION */const p2="glTF",p5={JSON:1313821514,BIN:5130562};class p4{constructor(e){this.name=pV.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,12),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==p2)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-12,r=new DataView(e,12),s=0;for(;s<n;){let t=r.getUint32(s,!0);s+=4;let n=r.getUint32(s,!0);if(s+=4,n===p5.JSON){let n=new Uint8Array(e,12+s,t);this.content=i.decode(n)}else if(n===p5.BIN){let i=12+s;this.body=e.slice(i,i+t)}// Clients must ignore chunks with unknown types.
s+=t}if(null===this.content)throw Error("THREE.GLTFLoader: JSON content not found.")}}/**
 * DRACO Mesh Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
 */class p6{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pV.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},o={},l={};for(let e in s){let t=fo[e]||e.toLowerCase();a[t]=s[e]}for(let t in e.attributes){let n=fo[t]||t.toLowerCase();if(void 0!==s[t]){let r=i.accessors[e.attributes[t]],s=fn[r.componentType];l[n]=s.name,o[n]=!0===r.normalized}}return t.getDependency("bufferView",r).then(function(e){return new Promise(function(t){n.decodeDracoFile(e,function(e){for(let t in e.attributes){let i=e.attributes[t],n=o[t];void 0!==n&&(i.normalized=n)}t(e)},a,l)})})}}/**
 * Texture Transform Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
 */class p8{constructor(){this.name=pV.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(void 0===t.texCoord||t.texCoord===e.channel)&&void 0===t.offset&&void 0===t.rotation&&void 0===t.scale||(e=e.clone(),void 0!==t.texCoord&&(e.channel=t.texCoord),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}/**
 * Mesh Quantization Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
 */class p7{constructor(){this.name=pV.KHR_MESH_QUANTIZATION}}/*********************************//********** INTERPOLATION ********//*********************************/// Spline Interpolation
// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
class p9 extends sW{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){// Copies a sample value to the result buffer. See description of glTF
// CUBICSPLINE values layout in interpolate_() function below.
let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let e=0;e!==n;e++)t[e]=i[r+e];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=2*a,l=3*a,h=n-t,u=(i-t)/h,c=u*u,d=c*u,p=e*l,f=p-l,m=-2*d+3*c,g=d-c,_=1-m,v=g-c+u;// Layout of keyframe output values for CUBICSPLINE animations:
//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
for(let e=0;e!==a;e++){let t=s[f+e+a],i=s[f+e+o]*h,n=s[p+e+a],l=s[p+e]*h;// splineVertex_k
r[e]=_*t+v*i+m*n+g*l}return r}}const fe=new H;class ft extends p9{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return fe.fromArray(r).normalize().toArray(r),r}}/*********************************//********** INTERNALS ************//*********************************//* CONSTANTS */const fi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fr={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},fs={33071:1001,33648:1002,10497:1e3},fa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fl={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fh={CUBICSPLINE:void 0,// keyframe track will be initialized with a default interpolation type, then modified.
LINEAR:2301,STEP:2300},fu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fc(e,t,i){// Add unknown glTF extensions to an object's userData.
for(let n in i.extensions)void 0===e[n]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=i.extensions[n])}/**
 * @param {Object3D|Material|BufferGeometry} object
 * @param {GLTF.definition} gltfDef
 */function fd(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function fp(e){let t="",i=Object.keys(e).sort();for(let n=0,r=i.length;n<r;n++)t+=i[n]+":"+e[i[n]]+";";return t}function ff(e){// Reference:
// https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data
switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}const fm=new ex;/* GLTF PARSER */class fg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,// loader object cache
this.cache=new pF,// associations between Three.js objects and glTF elements
this.associations=new Map,// BufferGeometry caching
this.primitiveCache={},// Node cache
this.nodeCache={},// Object3D instance caches
this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},// Track node names, to ensure no duplicates
this.nodeNamesUsed={};// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
// expensive work of uploading a texture to the GPU off the main thread.
let i=!1,n=!1,r=-1;"undefined"!=typeof navigator&&(i=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),r=(n=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),"undefined"==typeof createImageBitmap||i||n&&r<98?this.textureLoader=new at(this.options.manager):this.textureLoader=new a_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new s9(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;// Clear the loader cache
this.cache.removeAll(),this.nodeCache={},// Mark the special nodes/meshes in json for efficient parse
this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(t){let s={scene:t[0][n.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:n.asset,parser:i,userData:{}};fc(r,s,n),fd(s,n),Promise.all(i._invokeAll(function(e){return e.afterRoot&&e.afterRoot(s)})).then(function(){e(s)})}).catch(t)}/**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];// Nothing in the node definition indicates whether it is a Bone or an
// Object3D. Use the skins' joint references to mark bones.
for(let i=0,n=t.length;i<n;i++){let n=t[i].joints;for(let t=0,i=n.length;t<i;t++)e[n[t]].isBone=!0}// Iterate over all nodes, marking references to shared resources,
// as well as skeleton joints.
for(let t=0,n=e.length;t<n;t++){let n=e[t];void 0!==n.mesh&&(this._addNodeRef(this.meshCache,n.mesh),void 0!==n.skin&&(i[n.mesh].isSkinnedMesh=!0)),void 0!==n.camera&&this._addNodeRef(this.cameraCache,n.camera)}}/**
	 * Counts references to shared node / Object3D resources. These resources
	 * can be reused, or "instantiated", at multiple nodes in the scene
	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
	 * Textures) can be reused directly and are not marked here.
	 *
	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	 */_addNodeRef(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}/** Returns a reference to a shared resource, cloning it if necessary. */_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(e,t)=>{let i=this.associations.get(e);for(let[n,s]of(null!=i&&this.associations.set(t,i),e.children.entries()))r(s,t.children[n])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}/**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
	 */getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case"mesh":n=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(!(n=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)})))throw Error("Unknown type: "+e)}this.cache.add(i,n)}return n}/**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+("mesh"===e?"es":"s")]||[];t=Promise.all(n.map(function(t,n){return i.getDependency(e,n)})),this.cache.add(e,t)}return t}/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");// If present, GLB container is required to be the first buffer.
if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[pV.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(e,r){i.load(ag.resolveURL(t.uri,n.path),e,void 0,function(){r(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){let i=t.byteLength||0,n=t.byteOffset||0;return e.slice(n,n+i)})}/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
	 */loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(void 0===n.bufferView&&void 0===n.sparse){let e=fa[n.type],t=fn[n.componentType],i=!0===n.normalized,r=new t(n.count*e);return Promise.resolve(new tr(r,e,i))}let r=[];return void 0!==n.bufferView?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),void 0!==n.sparse&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(e){let r,s;let a=e[0],o=fa[n.type],l=fn[n.componentType],h=l.BYTES_PER_ELEMENT,u=h*o,c=n.byteOffset||0,d=void 0!==n.bufferView?i.bufferViews[n.bufferView].byteStride:void 0,p=!0===n.normalized;// The buffer is not interleaved if the stride is the item size in bytes.
if(d&&d!==u){// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
// This makes sure that IBA.count reflects accessor.count properly
let e=Math.floor(c/d),i="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+e+":"+n.count,u=t.cache.get(i);u||(r=new l(a,e*d,n.count*d/h),// Integer parameters to IB/IBA are in array elements, not bytes.
u=new re(r,d/h),t.cache.add(i,u)),s=new ri(u,o,c%d/h,p)}else r=null===a?new l(n.count*o):new l(a,c,n.count*o),s=new tr(r,o,p);// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
if(void 0!==n.sparse){let t=fa.SCALAR,i=fn[n.sparse.indices.componentType],r=n.sparse.indices.byteOffset||0,h=n.sparse.values.byteOffset||0,u=new i(e[1],r,n.sparse.count*t),c=new l(e[2],h,n.sparse.count*o);null!==a&&(s=new tr(s.array.slice(),s.itemSize,s.normalized));for(let e=0,t=u.length;e<t;e++){let t=u[e];if(s.setX(t,c[e*o]),o>=2&&s.setY(t,c[e*o+1]),o>=3&&s.setZ(t,c[e*o+2]),o>=4&&s.setW(t,c[e*o+3]),o>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return s})}/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture|null>}
	 */loadTexture(e){let t=this.json,i=this.options,n=t.textures[e],r=n.source,s=t.images[r],a=this.textureLoader;if(s.uri){let e=i.manager.getHandler(s.uri);null!==e&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let n=this,r=this.json,s=r.textures[e],a=r.images[t],o=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(t,i).then(function(t){t.flipY=!1,t.name=s.name||a.name||"",""===t.name&&"string"==typeof a.uri&&!1===a.uri.startsWith("data:image/")&&(t.name=a.uri);let i=r.samplers||{},o=i[s.sampler]||{};return t.magFilter=fr[o.magFilter]||1006,t.minFilter=fr[o.minFilter]||1008,t.wrapS=fs[o.wrapS]||1e3,t.wrapT=fs[o.wrapT]||1e3,n.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){let i=this.json,n=this.options;if(void 0!==this.sourceCache[e])return this.sourceCache[e].then(e=>e.clone());let r=i.images[e],s=self.URL||self.webkitURL,a=r.uri||"",o=!1;if(void 0!==r.bufferView)a=this.getDependency("bufferView",r.bufferView).then(function(e){o=!0;let t=new Blob([e],{type:r.mimeType});return a=s.createObjectURL(t)});else if(void 0===r.uri)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(a).then(function(e){return new Promise(function(i,r){let s=i;!0===t.isImageBitmapLoader&&(s=function(e){let t=new k(e);t.needsUpdate=!0,i(t)}),t.load(ag.resolveURL(e,n.path),s,void 0,r)})}).then(function(e){var t;return!0===o&&s.revokeObjectURL(a),e.userData.mimeType=r.mimeType||((t=r.uri).search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/)?"image/jpeg":t.search(/\.webp($|\?)/i)>0||0===t.search(/^data\:image\/webp/)?"image/webp":"image/png"),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),e});return this.sourceCache[e]=l,l}/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise<Texture>}
	 */assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(void 0!==i.texCoord&&i.texCoord>0&&((s=s.clone()).channel=i.texCoord),r.extensions[pV.KHR_TEXTURE_TRANSFORM]){let e=void 0!==i.extensions?i.extensions[pV.KHR_TEXTURE_TRANSFORM]:void 0;if(e){let t=r.associations.get(s);s=r.extensions[pV.KHR_TEXTURE_TRANSFORM].extendTexture(s,e),r.associations.set(s,t)}}return void 0!==n&&(s.encoding=n),e[t]=s,s})}/**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accommodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
	 */assignFinalMaterial(e){let t=e.geometry,i=e.material,n=void 0===t.attributes.tangent,r=void 0!==t.attributes.color,s=void 0===t.attributes.normal;if(e.isPoints){let e="PointsMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new rN,e5.prototype.copy.call(t,i),t.color.copy(i.color),t.map=i.map,t.sizeAttenuation=!1,this.cache.add(e,t)),i=t}else if(e.isLine){let e="LineBasicMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new rb,e5.prototype.copy.call(t,i),t.color.copy(i.color),t.map=i.map,this.cache.add(e,t)),i=t}// Clone the material if it will be modified
if(n||r||s){let e="ClonedMaterial:"+i.uuid+":";n&&(e+="derivative-tangents:"),r&&(e+="vertex-colors:"),s&&(e+="flat-shading:");let t=this.cache.get(e);t||(t=i.clone(),r&&(t.vertexColors=!0),s&&(t.flatShading=!0),n&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(i))),i=t}e.material=i}getMaterialType(){return sU}/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<Material>}
	 */loadMaterial(e){let t;let i=this,n=this.json,r=this.extensions,s=n.materials[e],a={},o=s.extensions||{},l=[];if(o[pV.KHR_MATERIALS_UNLIT]){let e=r[pV.KHR_MATERIALS_UNLIT];t=e.getMaterialType(),l.push(e.extendParams(a,s,i))}else{// Specification:
// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material
let n=s.pbrMetallicRoughness||{};if(a.color=new e9(1,1,1),a.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;a.color.fromArray(e),a.opacity=e[3]}void 0!==n.baseColorTexture&&l.push(i.assignTexture(a,"map",n.baseColorTexture,3001)),a.metalness=void 0!==n.metallicFactor?n.metallicFactor:1,a.roughness=void 0!==n.roughnessFactor?n.roughnessFactor:1,void 0!==n.metallicRoughnessTexture&&(l.push(i.assignTexture(a,"metalnessMap",n.metallicRoughnessTexture)),l.push(i.assignTexture(a,"roughnessMap",n.metallicRoughnessTexture))),t=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,a)})))}!0===s.doubleSided&&(a.side=2);let h=s.alphaMode||fu.OPAQUE;if(h===fu.BLEND?(a.transparent=!0,// See: https://github.com/mrdoob/three.js/issues/17706
a.depthWrite=!1):(a.transparent=!1,h===fu.MASK&&(a.alphaTest=void 0!==s.alphaCutoff?s.alphaCutoff:.5)),void 0!==s.normalTexture&&t!==tt&&(l.push(i.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new w(1,1),void 0!==s.normalTexture.scale)){let e=s.normalTexture.scale;a.normalScale.set(e,e)}return void 0!==s.occlusionTexture&&t!==tt&&(l.push(i.assignTexture(a,"aoMap",s.occlusionTexture)),void 0!==s.occlusionTexture.strength&&(a.aoMapIntensity=s.occlusionTexture.strength)),void 0!==s.emissiveFactor&&t!==tt&&(a.emissive=new e9().fromArray(s.emissiveFactor)),void 0!==s.emissiveTexture&&t!==tt&&l.push(i.assignTexture(a,"emissiveMap",s.emissiveTexture,3001)),Promise.all(l).then(function(){let n=new t(a);return s.name&&(n.name=s.name),fd(n,s),i.associations.set(n,{materials:e}),s.extensions&&fc(r,n,s),n})}/** When Object3D instances are targeted by animation, they need unique names. */createUniqueName(e){let t=az.sanitizeNodeName(e||""),i=t;for(let e=1;this.nodeNamesUsed[i];++e)i=t+"_"+e;return this.nodeNamesUsed[i]=!0,i}/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<BufferGeometry>>}
	 */loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache,r=[];for(let s=0,a=e.length;s<a;s++){let a=e[s],o=function(e){let t=e.extensions&&e.extensions[pV.KHR_DRACO_MESH_COMPRESSION];return t?"draco:"+t.bufferView+":"+t.indices+":"+fp(t.attributes):e.indices+":"+fp(e.attributes)+":"+e.mode}(a),l=n[o];if(l)r.push(l.promise);else{let e;e=a.extensions&&a.extensions[pV.KHR_DRACO_MESH_COMPRESSION]?function(e){return i[pV.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(i){return f_(i,e,t)})}(a):f_(new tm,a,t),// Cache this geometry
n[o]={primitive:a,promise:e},r.push(e)}}return Promise.all(r)}/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<Group|Mesh|SkinnedMesh>}
	 */loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,a=[];for(let e=0,t=s.length;e<t;e++){var o;let t=void 0===s[e].material?(void 0===(o=this.cache).DefaultMaterial&&(o.DefaultMaterial=new sU({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),o.DefaultMaterial):this.getDependency("material",s[e].material);a.push(t)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(i){let a=i.slice(0,i.length-1),o=i[i.length-1],l=[];for(let i=0,h=o.length;i<h;i++){let h;let u=o[i],c=s[i],d=a[i];if(c.mode===fi.TRIANGLES||c.mode===fi.TRIANGLE_STRIP||c.mode===fi.TRIANGLE_FAN||void 0===c.mode)!0===// .isSkinnedMesh isn't in glTF spec. See ._markDefs()
(h=!0===r.isSkinnedMesh?new rh(u,d):new tO(u,d)).isSkinnedMesh&&h.normalizeSkinWeights(),c.mode===fi.TRIANGLE_STRIP?h.geometry=pB(h.geometry,1):c.mode===fi.TRIANGLE_FAN&&(h.geometry=pB(h.geometry,2));else if(c.mode===fi.LINES)h=new rO(u,d);else if(c.mode===fi.LINE_STRIP)h=new rP(u,d);else if(c.mode===fi.LINE_LOOP)h=new rI(u,d);else if(c.mode===fi.POINTS)h=new rF(u,d);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+c.mode);Object.keys(h.geometry.morphAttributes).length>0&&/**
 * @param {Mesh} mesh
 * @param {GLTF.Mesh} meshDef
 */function(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(let i=0,n=t.weights.length;i<n;i++)e.morphTargetInfluences[i]=t.weights[i];// .extras has user-defined data, so check that .extras.targetNames is an array.
if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let t=0,n=i.length;t<n;t++)e.morphTargetDictionary[i[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}(h,r),h.name=t.createUniqueName(r.name||"mesh_"+e),fd(h,r),c.extensions&&fc(n,h,c),t.assignFinalMaterial(h),l.push(h)}for(let i=0,n=l.length;i<n;i++)t.associations.set(l[i],{meshes:e,primitives:i});if(1===l.length)return l[0];let h=new n3;t.associations.set(h,{meshes:e});for(let e=0,t=l.length;e<t;e++)h.add(l[e]);return h})}/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */loadCamera(e){let t;let i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return"perspective"===i.type?t=new tH(M.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):"orthographic"===i.type&&(t=new ii(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),fd(t,i),Promise.resolve(t)}/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Skeleton>}
	 */loadSkin(e){let t=this.json.skins[e],i=[];for(let e=0,n=t.joints.length;e<n;e++)i.push(this._loadNodeShallow(t.joints[e]));return void 0!==t.inverseBindMatrices?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(e){let i=e.pop(),n=[],r=[];for(let s=0,a=e.length;s<a;s++){let a=e[s];if(a){n.push(a);let e=new ex;null!==i&&e.fromArray(i.array,16*s),r.push(e)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[s])}return new rf(n,r)})}/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<AnimationClip>}
	 */loadAnimation(e){let t=this.json,i=t.animations[e],n=i.name?i.name:"animation_"+e,r=[],s=[],a=[],o=[],l=[];for(let e=0,t=i.channels.length;e<t;e++){let t=i.channels[e],n=i.samplers[t.sampler],h=t.target,u=h.node,c=void 0!==i.parameters?i.parameters[n.input]:n.input,d=void 0!==i.parameters?i.parameters[n.output]:n.output;void 0!==h.node&&(r.push(this.getDependency("node",u)),s.push(this.getDependency("accessor",c)),a.push(this.getDependency("accessor",d)),o.push(n),l.push(h))}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(e){let t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=[];for(let e=0,n=t.length;e<n;e++){let n;let l=t[e],h=i[e],u=r[e],c=s[e],d=a[e];if(void 0===l)continue;switch(l.updateMatrix(),fl[d.path]){case fl.weights:n=sZ;break;case fl.rotation:n=s$;break;case fl.position:case fl.scale:default:n=s1}let p=l.name?l.name:l.uuid,f=void 0!==c.interpolation?fh[c.interpolation]:2301,m=[];fl[d.path]===fl.weights?l.traverse(function(e){e.morphTargetInfluences&&m.push(e.name?e.name:e.uuid)}):m.push(p);let g=u.array;if(u.normalized){let e=ff(g.constructor),t=new Float32Array(g.length);for(let i=0,n=g.length;i<n;i++)t[i]=g[i]*e;g=t}for(let e=0,t=m.length;e<t;e++){let t=new n(m[e]+"."+fl[d.path],h.array,g,f);"CUBICSPLINE"===c.interpolation&&(t.createInterpolant=function(e){// A CUBICSPLINE keyframe in glTF has three output values for each input value,
// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
// must be divided by three to get the interpolant's sampleSize argument.
let t=this instanceof s$?ft:p9;return new t(this.times,this.values,this.getValueSize()/3,e)},// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),o.push(t)}}return new s3(n,void 0,o)})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return void 0===n.mesh?null:i.getDependency("mesh",n.mesh).then(function(e){let t=i._getNodeRef(i.meshCache,n.mesh,e);return void 0!==n.weights&&t.traverse(function(e){if(e.isMesh)for(let t=0,i=n.weights.length;t<i;t++)e.morphTargetInfluences[t]=n.weights[t]}),t})}/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<Object3D>}
	 */loadNode(e){let t=this.json,i=t.nodes[e],n=this._loadNodeShallow(e),r=[],s=i.children||[];for(let e=0,t=s.length;e<t;e++)r.push(this.getDependency("node",s[e]));let a=void 0===i.skin?Promise.resolve(null):this.getDependency("skin",i.skin);return Promise.all([n,Promise.all(r),a]).then(function(e){let t=e[0],i=e[1],n=e[2];null!==n&&// child glTF nodes have not been added to this node yet.
t.traverse(function(e){e.isSkinnedMesh&&e.bind(n,fm)});for(let e=0,n=i.length;e<n;e++)t.add(i[e]);return t})}// ._loadNodeShallow() parses a single node.
// skin and child nodes are created and added in .loadNode() (no '_' prefix).
_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;// This method is called from .loadNode() and .loadSkin().
// Cache a node to avoid duplication.
if(void 0!==this.nodeCache[e])return this.nodeCache[e];let r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",a=[],o=n._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return o&&a.push(o),void 0!==r.camera&&a.push(n.getDependency("camera",r.camera).then(function(e){return n._getNodeRef(n.cameraCache,r.camera,e)})),n._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){a.push(e)}),this.nodeCache[e]=Promise.all(a).then(function(t){let a;if((a=!0===r.isBone?new ru:t.length>1?new n3:1===t.length?t[0]:new eW)!==t[0])for(let e=0,i=t.length;e<i;e++)a.add(t[e]);if(r.name&&(a.userData.name=r.name,a.name=s),fd(a,r),r.extensions&&fc(i,a,r),void 0!==r.matrix){let e=new ex;e.fromArray(r.matrix),a.applyMatrix4(e)}else void 0!==r.translation&&a.position.fromArray(r.translation),void 0!==r.rotation&&a.quaternion.fromArray(r.rotation),void 0!==r.scale&&a.scale.fromArray(r.scale);return n.associations.has(a)||n.associations.set(a,{}),n.associations.get(a).nodes=e,a}),this.nodeCache[e]}/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<Group>}
	 */loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new n3;i.name&&(r.name=n.createUniqueName(i.name)),fd(r,i),i.extensions&&fc(t,r,i);let s=i.nodes||[],a=[];for(let e=0,t=s.length;e<t;e++)a.push(n.getDependency("node",s[e]));return Promise.all(a).then(function(e){for(let t=0,i=e.length;t<i;t++)r.add(e[t]);return n.associations=(e=>{let t=new Map;for(let[e,i]of n.associations)(e instanceof e5||e instanceof k)&&t.set(e,i);return e.traverse(e=>{let i=n.associations.get(e);null!=i&&t.set(e,i)}),t})(r),r})}}/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */function f_(e,t,i){let n=t.attributes,r=[];for(let t in n){let s=fo[t]||t.toLowerCase();// Skip attributes already provided by e.g. Draco extension.
s in e.attributes||r.push(function(t,n){return i.getDependency("accessor",t).then(function(t){e.setAttribute(n,t)})}(n[t],s))}if(void 0!==t.indices&&!e.index){let n=i.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});r.push(n)}return fd(e,t),!/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 */function(e,t,i){let n=t.attributes,r=new j;if(void 0===n.POSITION)return;{let e=i.json.accessors[n.POSITION],t=e.min,s=e.max;// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
if(void 0!==t&&void 0!==s){if(r.set(new G(t[0],t[1],t[2]),new G(s[0],s[1],s[2])),e.normalized){let t=ff(fn[e.componentType]);r.min.multiplyScalar(t),r.max.multiplyScalar(t)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}let s=t.targets;if(void 0!==s){let e=new G,t=new G;for(let n=0,r=s.length;n<r;n++){let r=s[n];if(void 0!==r.POSITION){let n=i.json.accessors[r.POSITION],s=n.min,a=n.max;// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
if(void 0!==s&&void 0!==a){if(// we need to get max of absolute components because target weight is [-1,1]
t.setX(Math.max(Math.abs(s[0]),Math.abs(a[0]))),t.setY(Math.max(Math.abs(s[1]),Math.abs(a[1]))),t.setZ(Math.max(Math.abs(s[2]),Math.abs(a[2]))),n.normalized){let e=ff(fn[n.componentType]);t.multiplyScalar(e)}// Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
// to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
// are used to implement key-frame animations and as such only two are active at a time - this results in very large
// boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
e.max(t)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}// As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
r.expandByVector(e)}e.boundingBox=r;let a=new eu;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=a}(e,t,i),Promise.all(r).then(function(){return void 0!==t.targets?/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
 *
 * @param {BufferGeometry} geometry
 * @param {Array<GLTF.Target>} targets
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */function(e,t,i){let n=!1,r=!1,s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e];if(void 0!==i.POSITION&&(n=!0),void 0!==i.NORMAL&&(r=!0),void 0!==i.COLOR_0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(e);let a=[],o=[],l=[];for(let h=0,u=t.length;h<u;h++){let u=t[h];if(n){let t=void 0!==u.POSITION?i.getDependency("accessor",u.POSITION):e.attributes.position;a.push(t)}if(r){let t=void 0!==u.NORMAL?i.getDependency("accessor",u.NORMAL):e.attributes.normal;o.push(t)}if(s){let t=void 0!==u.COLOR_0?i.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(t)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(t){let i=t[0],a=t[1],o=t[2];return n&&(e.morphAttributes.position=i),r&&(e.morphAttributes.normal=a),s&&(e.morphAttributes.color=o),e.morphTargetsRelative=!0,e})}(e,t.targets,i):e})}const fv=new WeakMap;/* WEB WORKER */function fx(){let e,t;onmessage=function(i){let n=i.data;switch(n.type){case"init":e=n.decoderConfig,t=new Promise(function(t/*, reject*/){e.onModuleLoaded=function(e){// Module is Promise-like. Wrap before resolving to avoid loop.
t({draco:e})},DracoDecoderModule(e)});break;case"decode":let r=n.buffer,s=n.taskConfig;t.then(e=>{let t=e.draco,i=new t.Decoder;try{let e=function(e,t,i,n){let r,s;let a=n.attributeIDs,o=n.attributeTypes,l=t.GetEncodedGeometryType(i);if(l===e.TRIANGULAR_MESH)r=new e.Mesh,s=t.DecodeArrayToMesh(i,i.byteLength,r);else if(l===e.POINT_CLOUD)r=new e.PointCloud,s=t.DecodeArrayToPointCloud(i,i.byteLength,r);else throw Error("THREE.DRACOLoader: Unexpected geometry type.");if(!s.ok()||0===r.ptr)throw Error("THREE.DRACOLoader: Decoding failed: "+s.error_msg());let h={index:null,attributes:[]};// Gather all vertex attributes.
for(let i in a){let s,l;let u=self[o[i]];// A Draco file may be created with default vertex attributes, whose attribute IDs
// are mapped 1:1 from their semantic name (POSITION, NORMAL, ...). Alternatively,
// a Draco file may contain a custom set of attributes, identified by known unique
// IDs. glTF files always do the latter, and `.drc` files typically do the former.
if(n.useUniqueIDs)l=a[i],s=t.GetAttributeByUniqueId(r,l);else{if(-1===(l=t.GetAttributeId(r,e[a[i]])))continue;s=t.GetAttribute(r,l)}let c=function(e,t,i,n,r,s){let a=s.num_components(),o=i.num_points(),l=o*a,h=l*r.BYTES_PER_ELEMENT,u=function(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(e,r),c=e._malloc(h);t.GetAttributeDataArrayForAllPoints(i,s,u,h,c);let d=new r(e.HEAPF32.buffer,c,l).slice();return e._free(c),{name:n,array:d,itemSize:a}}(e,t,r,i,u,s);"color"===i&&(c.vertexColorSpace=n.vertexColorSpace),h.attributes.push(c)}return l===e.TRIANGULAR_MESH&&(h.index=function(e,t,i){let n=i.num_faces(),r=3*n,s=4*r,a=e._malloc(s);t.GetTrianglesUInt32Array(i,s,a);let o=new Uint32Array(e.HEAPF32.buffer,a,r).slice();return e._free(a),{array:o,itemSize:1}}(e,t,r)),e.destroy(r),h}(t,i,new Int8Array(r),s),a=e.attributes.map(e=>e.array.buffer);e.index&&a.push(e.index.array.buffer),self.postMessage({type:"decode",id:n.id,geometry:e},a)}catch(e){console.error(e),self.postMessage({type:"error",id:n.id,error:e.message})}finally{t.destroy(i)}})}}}function fy(e){let t=new Map,i=new Map,n=e.clone();return function e(t,i,n){n(t,i);for(let r=0;r<t.children.length;r++)e(t.children[r],i.children[r],n)}(e,n,function(e,n){t.set(n,e),i.set(e,n)}),n.traverse(function(e){if(!e.isSkinnedMesh)return;let n=t.get(e),r=n.skeleton.bones;e.skeleton=n.skeleton.clone(),e.bindMatrix.copy(n.bindMatrix),e.skeleton.bones=r.map(function(e){return i.get(e)}),e.bind(e.skeleton,e.bindMatrix)}),n}const fM=[],fw=[],fS=[],fb=new oM;fb.add(new aG(5.91,.3,125.92)),fb.add(new aG(5.72,.3,93.68)),fM.push(fb);const fT=new oM;fT.add(new aG(6.21,.3,30.19)),fT.add(new aG(7.07,.3,24.66)),fT.add(new aG(33.32,.3,24.36)),fM.push(fT);const fA=new oM;fA.add(new aG(93.03,.3,24.5)),fA.add(new aG(102,.3,22.84)),fA.add(new aG(102.42,.3,-1.27)),fM.push(fA);const fE=new oM;fE.add(new aG(102.5,.3,-66)),fE.add(new aG(99.92,.3,-73.97)),fE.add(new aG(76,.3,-75.41)),fM.push(fE);const fC=new oM;fC.add(new aG(11.86,.3,-75.86)),fC.add(new aG(5.98,.3,-75.96)),fC.add(new aG(5.63,.3,-102.59)),fM.push(fC);const fR=new oM;fR.add(new aG(5.97,.3,-161.04)),fR.add(new aG(4.55,.3,-169.5)),fR.add(new aG(-20.11,.3,-170.21)),fM.push(fR);const fP=new oM;fP.add(new aG(-82.82,.3,-171.17)),fP.add(new aG(-115.08,.3,-170.5)),fM.push(fP);//Red cars
const fL=new oM;fL.add(new aG(1.38,.3,109.32)),fL.add(new aG(3.91,.3,118.82)),fL.add(new aG(27.74,.3,119.04)),fw.push(fL);const fD=new oM;fD.add(new aG(1.13,.3,14.01)),fD.add(new aG(3.7,.3,22.64)),fD.add(new aG(26.53,.3,24.73)),fw.push(fD);const fO=new oM;fO.add(new aG(107.5,.3,20.33)),fO.add(new aG(102.63,.3,18.32)),fO.add(new aG(102.45,.3,-8.42)),fw.push(fO);const fI=new oM;fI.add(new aG(97.45,.3,-81.35)),fI.add(new aG(97.98,.3,-50.34)),fw.push(fI);const fN=new oM;fN.add(new aG(-3.55,.3,-71.24)),fN.add(new aG(5.51,.3,-73.1)),fN.add(new aG(6.15,.3,-97.01)),fw.push(fN);const fz=new oM;fz.add(new aG(1.45,.3,-175.84)),fz.add(new aG(-.64,.3,-170.2)),fz.add(new aG(-25.56,.3,-170.28)),fw.push(fz);const fU=new oM;fU.add(new aG(-98.74,.3,-166.74)),fU.add(new aG(-67.84,.3,-166.61)),fw.push(fU);//Blue cars
const fk=new oM;fk.add(new aG(-3.55,.3,119.5)),fk.add(new aG(33.29,.3,118.85)),fS.push(fk);const fB=new oM;fB.add(new aG(-4.08,.3,24.64)),fB.add(new aG(39.31,.3,24.53)),fS.push(fB);const fF=new oM;fF.add(new aG(98.08,.3,14.95)),fF.add(new aG(98.53,.3,45.91)),fS.push(fF);const fV=new oM;fV.add(new aG(93.599,.3,-70.83)),fV.add(new aG(101.51,.3,-75.48)),fV.add(new aG(102.25,.3,-96.45)),fS.push(fV);const fH=new oM;fH.add(new aG(-88.88,.3,-160.78)),fH.add(new aG(-89,.3,-192.14)),fS.push(fH);const fG=[{question:"Q1: in which order may the vehicles proceed?",answer1:"Blue, yellow, red",answer2:"Red, yellow, blue",answer3:"Red, blue, yellow"},{question:"Q2: which vehicle goes last?",answer1:"The red vehicle",answer2:"The blue vehicle",answer3:"The yellow vehicle"},{question:"Q3: which vehicle goes first?",answer1:"The blue vehicle",answer2:"The yellow vehicle",answer3:"The red vehicle"},{question:"Q4: when should the red vehicle proceed?",answer1:"Before the yellow vehicle",answer2:"Before the blue vehicle",answer3:"After both vehicles"},{question:"Q5: which vehicle must give way?",answer1:"The yellow vehicle",answer2:"The red vehicle",answer3:"Both proceed at the same time"},{question:"Q6: which vehicle must give way?",answer1:"The yellow vehicle",answer2:"The red vehicle",answer3:"Both proceed at the same time"},{question:"Q7: which vehicles proceed at the same time?",answer1:"The yellow and blue vehicles",answer2:"The yellow and red vehicles",answer3:"The blue and red vehicles"}],fW={yellow:{left:{front:new G(.83,.66,1.76),back:new G(.76,.83,-1.68)},right:{front:new G(-.83,.66,1.76),back:new G(-.76,.83,-1.68)}},red:{left:{front:new G(.72,.48,1.86),back:new G(.68,.6,-1.8)},right:{front:new G(-.72,.48,1.86),back:new G(-.68,.6,-1.8)}},blue:{left:{front:new G(.72,.45,1.64),back:new G(.62,.66,-1.68)},right:{front:new G(-.72,.45,1.64),back:new G(-.62,.66,-1.68)}}},fq={yellowCar:{frontRight:"SUV_FrontRightWheel",frontLeft:"SUV_FrontLeftWheel",back:"SUV_BackWheels"},redCar:{frontRight:"NormalCar1_FrontRightWheel",frontLeft:"NormalCar1_FrontLeftWheel",back:"NormalCar1_BackWheels"},blueCar:{frontRight:"SportsCar_FrontRightWheel",frontLeft:"SportsCar_FrontLeftWheel",back:"SportsCar_BackWheels"}},fj=new class extends eW{constructor(){super(),this.type="AudioListener",this.context=av.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,// private
this._clock=new ax}getInput(){return this.gain}removeFilter(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(aM,aw,aS),ab.set(0,0,-1).applyQuaternion(aw),t.positionX){// code path for Chrome (see #14393)
let e=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(aM.x,e),t.positionY.linearRampToValueAtTime(aM.y,e),t.positionZ.linearRampToValueAtTime(aM.z,e),t.forwardX.linearRampToValueAtTime(ab.x,e),t.forwardY.linearRampToValueAtTime(ab.y,e),t.forwardZ.linearRampToValueAtTime(ab.z,e),t.upX.linearRampToValueAtTime(i.x,e),t.upY.linearRampToValueAtTime(i.y,e),t.upZ.linearRampToValueAtTime(i.z,e)}else t.setPosition(aM.x,aM.y,aM.z),t.setOrientation(ab.x,ab.y,ab.z,i.x,i.y,i.z)}},fJ=new class extends s6{constructor(e){super(e)}load(e,t,i,n){let r=this,s=new s9(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(i){try{// Create a copy of the buffer. The `decodeAudioData` method
// detaches the buffer when complete, preventing reuse.
let e=i.slice(0),n=av.getContext();n.decodeAudioData(e,function(e){t(e)})}catch(t){n?n(t):console.error(t),r.manager.itemError(e)}},i,n)}},fX=[{},{},{},{},{},{},{}];fJ.load("./assets/car_quiz/sounds/q1.mp3",e=>{fX[0].question=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q1a1.mp3",e=>{fX[0].answer1=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q1a2.mp3",e=>{fX[0].answer2=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q1a3.mp3",e=>{fX[0].answer3=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q2.mp3",e=>{fX[1].question=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q2a1.mp3",e=>{fX[1].answer1=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q2a2.mp3",e=>{fX[1].answer2=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q2a3.mp3",e=>{fX[1].answer3=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q3.mp3",e=>{fX[2].question=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q3a1.mp3",e=>{fX[2].answer1=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q3a2.mp3",e=>{fX[2].answer2=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q3a3.mp3",e=>{fX[2].answer3=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q4.mp3",e=>{fX[3].question=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q4a1.mp3",e=>{fX[3].answer1=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q4a2.mp3",e=>{fX[3].answer2=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q4a3.mp3",e=>{fX[3].answer3=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q5.mp3",e=>{fX[4].question=new aT(fj).setBuffer(e),fX[5].question=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q5a1.mp3",e=>{fX[4].answer1=new aT(fj).setBuffer(e),fX[5].answer1=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q5a2.mp3",e=>{fX[4].answer2=new aT(fj).setBuffer(e),fX[5].answer2=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q5a3.mp3",e=>{fX[4].answer3=new aT(fj).setBuffer(e),fX[5].answer3=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q7.mp3",e=>{fX[6].question=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q7a1.mp3",e=>{fX[6].answer1=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q7a2.mp3",e=>{fX[6].answer2=new aT(fj).setBuffer(e)}),fJ.load("./assets/car_quiz/sounds/q7a3.mp3",e=>{fX[6].answer3=new aT(fj).setBuffer(e)});const fY=[],fK=[],fZ=[];let fQ=0;const f$=new sD(.1),f0=new tt({color:16745216}),f1=new tO(f$,f0),f3=document.querySelector(".score span");let f2=0;const f5=new n9({antialias:!0});f5.setClearColor(9754875),f5.setSize(window.innerWidth,window.innerHeight);const f4=document.querySelector(".header button"),f6=document.querySelector(".header h1"),f8=document.querySelector(".explanation"),f7=document.querySelector(".explanation button"),f9=document.querySelector(".questions p"),me=document.getElementById("option1"),mt=document.getElementById("option2"),mi=document.getElementById("option3"),mn=document.getElementById("a1-symbol"),mr=document.getElementById("a2-symbol"),ms=document.getElementById("a3-symbol"),ma=document.getElementById("a1-text"),mo=document.getElementById("a2-text"),ml=document.getElementById("a3-text");let mh=!1,mu=1,mc=3,md=144;const mp=new class extends eW{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.environment&&(this.environment=e.environment.clone()),null!==e.fog&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return null!==this.fog&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},mf=new tH(45,window.innerWidth/window.innerHeight,.1,1e3),mm=new class extends ai{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}(14803425,.3),mg=new class extends ai{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(eW.DEFAULT_UP),this.updateMatrix(),this.groundColor=new e9(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}(9754875,10288942,.3),m_=new am(16777215,.7),mv=new /**
* This class is used for managing all central objects of a game like
* game entities.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class{/**
	* Constructs a new entity manager.
	*/constructor(){/**
		* A list of {@link GameEntity game entities}.
		* @type {Array<GameEntity>}
		* @readonly
		*/this.entities=[],/**
		* A reference to a spatial index.
		* @type {?CellSpacePartitioning}
		* @default null
		*/this.spatialIndex=null,this._triggers=[],this._indexMap=new Map,this._typesMap=new Map,this._messageDispatcher=new aF}/**
	* Adds a game entity to this entity manager.
	*
	* @param {GameEntity} entity - The game entity to add.
	* @return {EntityManager} A reference to this entity manager.
	*/add(e){return this.entities.push(e),e.manager=this,this}/**
	* Removes a game entity from this entity manager.
	*
	* @param {GameEntity} entity - The game entity to remove.
	* @return {EntityManager} A reference to this entity manager.
	*/remove(e){let t=this.entities.indexOf(e);return this.entities.splice(t,1),e.manager=null,this}/**
	* Clears the internal state of this entity manager.
	*
	* @return {EntityManager} A reference to this entity manager.
	*/clear(){return this.entities.length=0,this._messageDispatcher.clear(),this}/**
	* Returns an entity by the given name. If no game entity is found, *null*
	* is returned. This method should be used once (e.g. at {@link GameEntity#start})
	* and the result should be cached for later use.
	*
	* @param {String} name - The name of the game entity.
	* @return {GameEntity} The found game entity.
	*/getEntityByName(e){let t=this.entities;for(let i=0,n=t.length;i<n;i++){let n=t[i];if(n.name===e)return n}return null}/**
	* The central update method of this entity manager. Updates all
	* game entities and delayed messages.
	*
	* @param {Number} delta - The time delta.
	* @return {EntityManager} A reference to this entity manager.
	*/update(e){let t=this.entities,i=this._triggers;// update entities
for(let i=t.length-1;i>=0;i--){let n=t[i];this.updateEntity(n,e)}// process triggers (this is done after the entity update to ensure
// up-to-date world matries)
for(let e=i.length-1;e>=0;e--){let t=i[e];this.processTrigger(t)}return this._triggers.length=0,// handle messaging
this._messageDispatcher.dispatchDelayedMessages(e),this}/**
	* Updates a single entity.
	*
	* @param {GameEntity} entity - The game entity to update.
	* @param {Number} delta - The time delta.
	* @return {EntityManager} A reference to this entity manager.
	*/updateEntity(e,t){if(!0===e.active){this.updateNeighborhood(e),!1===e._started&&(e.start(),e._started=!0),// update entity
e.update(t);// update children
let i=e.children;for(let e=i.length-1;e>=0;e--){let n=i[e];this.updateEntity(n,t)}// update spatial index
if(e instanceof lx&&this._triggers.push(e),null!==this.spatialIndex){let t=this._indexMap.get(e)||-1;t=this.spatialIndex.updateEntity(e,t),this._indexMap.set(e,t)}// update render component
let n=e._renderComponent,r=e._renderComponentCallback;null!==n&&null!==r&&r(e,n)}return this}/**
	* Updates the neighborhood of a single game entity.
	*
	* @param {GameEntity} entity - The game entity to update.
	* @return {EntityManager} A reference to this entity manager.
	*/updateNeighborhood(e){if(!0===e.updateNeighborhood){e.neighbors.length=0,null!==this.spatialIndex?this.spatialIndex.query(e.position,e.neighborhoodRadius,ly):(// worst case runtime complexity with O(n²)
ly.length=0,ly.push(...this.entities));// verify if candidates are within the predefined range
let t=e.neighborhoodRadius*e.neighborhoodRadius;for(let i=0,n=ly.length;i<n;i++){let n=ly[i];if(e!==n&&!0===n.active){let i=e.position.squaredDistanceTo(n.position);i<=t&&e.neighbors.push(n)}}}return this}/**
	* Processes a single trigger.
	*
	* @param {Trigger} trigger - The trigger to process.
	* @return {EntityManager} A reference to this entity manager.
	*/processTrigger(e){e.updateRegion();// ensure its region is up-to-date
let t=this.entities;for(let i=t.length-1;i>=0;i--){let n=t[i];e!==n&&!0===n.active&&!0===n.canActivateTrigger&&e.check(n)}return this}/**
	* Interface for game entities so they can send messages to other game entities.
	*
	* @param {GameEntity} sender - The sender.
	* @param {GameEntity} receiver - The receiver.
	* @param {String} message - The actual message.
	* @param {Number} delay - A time value in millisecond used to delay the message dispatching.
	* @param {Object} data - An object for custom data.
	* @return {EntityManager} A reference to this entity manager.
	*/sendMessage(e,t,i,n,r){return this._messageDispatcher.dispatch(e,t,i,n,r),this}/**
	* Transforms this instance into a JSON object.
	*
	* @return {Object} The JSON object.
	*/toJSON(){let e={type:this.constructor.name,entities:[],_messageDispatcher:this._messageDispatcher.toJSON()};for(let t=0,i=this.entities.length;t<i;t++)!// entities
function t(i){e.entities.push(i.toJSON());for(let e=0,n=i.children.length;e<n;e++)t(i.children[e])}(this.entities[t]);return e}/**
	* Restores this instance from the given JSON object.
	*
	* @param {Object} json - The JSON object.
	* @return {EntityManager} A reference to this entity manager.
	*/fromJSON(e){this.clear();let t=e.entities,i=e._messageDispatcher,n=new Map;for(let e=0,i=t.length;e<i;e++){let i;let r=t[e],s=r.type;switch(s){case"GameEntity":i=new a9().fromJSON(r);break;case"MovingEntity":i=new on().fromJSON(r);break;case"Vehicle":i=new ld().fromJSON(r);break;case"Trigger":i=new lx().fromJSON(r);break;default:// handle custom type
let a=this._typesMap.get(s);if(void 0!==a)i=new a().fromJSON(r);else{ak.warn("YUKA.EntityManager: Unsupported entity type:",s);continue}}n.set(i.uuid,i),null===i.parent&&this.add(i)}// resolve UUIDs to game entity objects
for(let e of n.values())e.resolveReferences(n);return(// restore delayed messages
this._messageDispatcher.fromJSON(i),this)}/**
	* Registers a custom type for deserialization. When calling {@link EntityManager#fromJSON}
	* the entity manager is able to pick the correct constructor in order to create custom
	* game entities.
	*
	* @param {String} type - The name of the entity type.
	* @param {Function} constructor - The constructor function.
	* @return {EntityManager} A reference to this entity manager.
	*/registerType(e,t){return this._typesMap.set(e,t),this}},mx=document.querySelector(".progress-bar-container"),my=document.getElementById("progress-bar"),mM=new s5,mw=new class extends s6{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new pq(e)}),this.register(function(e){return new pQ(e)}),this.register(function(e){return new p$(e)}),this.register(function(e){return new p0(e)}),this.register(function(e){return new pJ(e)}),this.register(function(e){return new pX(e)}),this.register(function(e){return new pY(e)}),this.register(function(e){return new pK(e)}),this.register(function(e){return new pW(e)}),this.register(function(e){return new pZ(e)}),this.register(function(e){return new pj(e)}),this.register(function(e){return new pH(e)}),this.register(function(e){return new p1(e)}),this.register(function(e){return new p3(e)})}load(e,t,i,n){let r;let s=this;r=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:ag.extractUrlBase(e),// Tells the LoadingManager to track an extra item, which resolves after
// the model is fully loaded. This means the count of items loaded will
// be incorrect, but ensures manager.onLoad() does not fire early.
this.manager.itemStart(e);let a=function(t){n?n(t):console.error(t),s.manager.itemError(e),s.manager.itemEnd(e)},o=new s9(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(i){try{s.parse(i,r,function(i){t(i),s.manager.itemEnd(e)},a)}catch(e){a(e)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return -1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return -1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;let s={},a={},o=new TextDecoder;if("string"==typeof e)r=JSON.parse(e);else if(e instanceof ArrayBuffer){let t=o.decode(new Uint8Array(e,0,4));if(t===p2){try{s[pV.KHR_BINARY_GLTF]=new p4(e)}catch(e){n&&n(e);return}r=JSON.parse(s[pV.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(e))}else r=e;if(void 0===r.asset||r.asset.version[0]<2){n&&n(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new fg(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](l);a[t.name]=t,// Workaround to avoid determining as unknown extension
// in addUnknownExtensionsToUserData().
// Remove this workaround if we move all the existing
// extension handlers to plugin system
s[t.name]=!0}if(r.extensionsUsed)for(let e=0;e<r.extensionsUsed.length;++e){let t=r.extensionsUsed[e],i=r.extensionsRequired||[];switch(t){case pV.KHR_MATERIALS_UNLIT:s[t]=new pG;break;case pV.KHR_DRACO_MESH_COMPRESSION:s[t]=new p6(r,this.dracoLoader);break;case pV.KHR_TEXTURE_TRANSFORM:s[t]=new p8;break;case pV.KHR_MESH_QUANTIZATION:s[t]=new p7;break;default:i.indexOf(t)>=0&&void 0===a[t]&&console.warn('THREE.GLTFLoader: Unknown extension "'+t+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}(mM),mS=new class extends s6{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){let r=new s9(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,e=>{this.parse(e,t,n)},i,n)}parse(e,t,i){this.decodeDracoFile(e,t,null,null,n).catch(i)}decodeDracoFile(e,t,i,n,s=r){let a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t)}decodeGeometry(e,t){let i;let n=JSON.stringify(t);// Check for an existing task using this buffer. A transferred buffer cannot be transferred
// again from this thread.
if(fv.has(e)){let t=fv.get(e);if(t.key===n)return t.promise;if(0===e.byteLength)// transfer the buffer back, and decode again with the second configuration. That
// is complex, and I don't know of any reason to decode a Draco buffer twice in
// different ways, so this is left unimplemented.
throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(r,s).then(n=>(i=n,new Promise((n,s)=>{i._callbacks[r]={resolve:n,reject:s},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e]);// this.debug();
    }))).then(e=>this._createGeometry(e.geometry));return(// Remove task from the task list.
// Note: replaced '.finally()' with '.catch().then()' block - iOS 11 support (#19416)
a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),// Cache the task result.
fv.set(e,{key:n,promise:a}),a)}_createGeometry(e){let t=new tm;e.index&&t.setIndex(new tr(e.index.array,1));for(let i=0;i<e.attributes.length;i++){let n=e.attributes[i],r=n.name,s=n.array,a=n.itemSize,o=new tr(s,a);"color"===r&&this._assignVertexColorSpace(o,n.vertexColorSpace),t.setAttribute(r,o)}return t}_assignVertexColorSpace(e,t){// While .drc files do not specify colorspace, the only 'official' tooling
// is PLY and OBJ converters, which use sRGB. We'll assume sRGB when a .drc
// file is passed into .load() or .parse(). GLTFLoader uses internal APIs
// to decode geometry, and vertex colors are already Linear-sRGB in there.
if(t!==n)return;let i=new e9;for(let t=0,n=e.count;t<n;t++)i.fromBufferAttribute(e,t).convertSRGBToLinear(),e.setXYZ(t,i.r,i.g,i.b)}_loadLibrary(e,t){let i=new s9(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((t,n)=>{i.load(e,t,void 0,n)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(t=>{let i=t[0];e||(this.decoderConfig.wasmBinary=t[1]);let n=fx.toString(),r=["/* draco decoder */",i,"","/* worker */",n.substring(n.indexOf("{")+1,n.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:"init",decoderConfig:this.decoderConfig}),e.onmessage=function(t){let i=t.data;switch(i.type){case"decode":e._callbacks[i.id].resolve(i);break;case"error":e._callbacks[i.id].reject(i);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+i.type+'"')}},this.workerPool.push(e)}else this.workerPool.sort(function(e,t){return e._taskLoad>t._taskLoad?-1:1});let i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,""!==this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),this}};mM.onProgress=(e,t,i)=>{my.value=t/i*100},mM.onLoad=()=>{mx.style.display="none"},mM.onError=e=>{console.log(`Error loading: ${e}`)},mf.position.set(3,10,218),mf.lookAt(mp.position),mf.add(fj),mp.add(mm),mp.add(mg),mp.add(m_),f5.outputColorSpace=n,mS.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/"),mS.setDecoderConfig({type:"js"}),mw.setDRACOLoader(mS),mw.load("./assets/car_quiz/terrain.glb",e=>{let t=e.scene;mp.add(t)},e=>{console.log(e.loaded/e.total*100+"% loaded")},e=>{console.error("An error happened:",e)});const mb=(e,t)=>{t.matrix.copy(e.worldMatrix)},mT=(e,t)=>{let i=f1.clone();i.position.copy(t.front),e.add(i);let n=f1.clone();n.position.copy(t.back),e.add(n)},mA=(e,t,i,n,r)=>{let s=new n3;mp.add(s),s.matrixAutoUpdate=!1;let a=fy(e);s.add(a);let o=new ld;o.setRenderComponent(s,mb),i.add(o);let l=new ow(t,2),h=new h_(t);return h.radius=.1,o.position.copy(t.current()),o.maxSpeed=5,o.steering.add(h),o.steering.add(l),l.active=!1,o.rotation.fromEuler(0,n,0),r&&mT(s,r),{vehicle:o,modelGroup:a}};mw.load("./assets/car_quiz/SUV.glb",e=>{let t=e.scene,i=mA(t,fM[0],mv,Math.PI),n=mA(t,fM[1],mv,Math.PI,fW.yellow.right),r=mA(t,fM[2],mv,Math.PI/2,fW.yellow.left),s=mA(t,fM[3],mv,Math.PI,fW.yellow.left),a=mA(t,fM[4],mv,-Math.PI/2,fW.yellow.right),o=mA(t,fM[5],mv,Math.PI,fW.yellow.left),l=mA(t,fM[6],mv,-Math.PI/2);fY.push(i,n,r,s,a,o,l)}),mw.load("./assets/car_quiz/red.glb",e=>{let t=e.scene,i=mA(t,fw[0],mv,0,fW.red.left),n=mA(t,fw[1],mv,0,fW.red.left),r=mA(t,fw[2],mv,-Math.PI/2,fW.red.right),s=mA(t,fw[3],mv,0),a=mA(t,fw[4],mv,Math.PI/2,fW.red.left),o=mA(t,fw[5],mv,0,fW.red.right),l=mA(t,fw[6],mv,Math.PI/2);fK.push(i,n,r,s,a,o,l)}),mw.load("./assets/car_quiz/blue.glb",e=>{let t=e.scene,i=mA(t,fS[0],mv,Math.PI/2),n=mA(t,fS[1],mv,Math.PI/2),r=mA(t,fS[2],mv,0),s=mA(t,fS[3],mv,Math.PI/2,fW.blue.left),a=mA(t,fS[4],mv,Math.PI);fZ.push(i,n,r,s,a)});const mE=(e,t,i,n)=>{f9.textContent=e,ma.textContent=t,mo.textContent=i,ml.textContent=n};f4.addEventListener("click",()=>{let e=pk.timeline();e.to(f4,{autoAlpha:0,y:"-=20",duration:.5}).to(f6,{autoAlpha:0,y:"-=20",duration:1},0).to(mf.position,{z:144,duration:4},0).to(mf.rotation,{x:-.4,duration:4},0).to(f9,{autoAlpha:1,duration:.2,onComplete:()=>{fX[mu-1].question.play()}},"+=0.7").to(me,{rotateX:0,duration:.2,onComplete:()=>{fX[mu-1].answer1.play()}},"+=2.5").to(mt,{rotateX:0,duration:.2,onComplete:()=>{fX[mu-1].answer2.play()}},"+=2.4").to(mi,{rotateX:0,duration:.2,onComplete:()=>{fX[mu-1].answer3.play(),mh=!1}},"+=2.4")}),mw.load("./assets/car_quiz/arrow.glb",e=>{let t=e.scene,i=(e,i=0)=>{let n=fy(t);n.position.copy(e),n.rotation.y=i,mp.add(n)};i(new G(5.91,2,125.92),Math.PI),i(new G(6.21,2,30.19),.5*Math.PI),i(new G(93.03,2,24.5),Math.PI),i(new G(102.5,2,-66),-.5*Math.PI),i(new G(11.86,2,-75.86),Math.PI),i(new G(5.97,2,-161.04),-.5*Math.PI),i(new G(-82.82,2,-171.17),-Math.PI/2),//Arrows for red cars
i(new G(1.38,2,109.32),.5*Math.PI),i(new G(1.13,2,14.01),.5*Math.PI),i(new G(107.5,2,20.33),Math.PI),i(new G(97.45,2,-81.35)),i(new G(-3.55,2,-71.24),Math.PI),i(new G(1.45,2,-175.84),-.5*Math.PI),i(new G(-98.74,2,-166.74),Math.PI/2),//Arrows for blue cars
i(new G(-3.55,2,119.5),.5*Math.PI),i(new G(-4.08,2,24.64),.5*Math.PI),i(new G(98.08,2,14.95)),i(new G(93.599,2,-70.83),Math.PI),i(new G(-88.88,2,-160.78),Math.PI)});const mC=(e,t,i)=>{mn.style.backgroundImage=`url('./assets/car_quiz/symbols/${e}.png')`,mr.style.backgroundImage=`url('./assets/car_quiz/symbols/${t}.png')`,ms.style.backgroundImage=`url('./assets/car_quiz/symbols/${i}.png')`},mR=(e,t,i,n)=>{setTimeout(()=>{t.vehicle.steering.behaviors[1].active=!0,pk.to(t.modelGroup.getObjectByName(i.frontRight).rotation,{x:"+=60",duration:20}),pk.to(t.modelGroup.getObjectByName(i.frontLeft).rotation,{x:"+=60",duration:20}),pk.to(t.modelGroup.getObjectByName(i.back).rotation,{x:"+=60",duration:20}),n&&fQ++},e)},mP=e=>{if(!mh){switch(fQ){case 0:mC("correct","incorrect","incorrect"),mR(3e3,fY[fQ],fq.yellowCar,null),mR(5e3,fK[fQ],fq.redCar,!0),mR(0,fZ[fQ],fq.blueCar),"option1"===e.id&&(f2++,f3.textContent=f2);break;case 1:mC("correct","incorrect","incorrect"),mR(3e3,fY[fQ],fq.yellowCar),mR(5e3,fK[fQ],fq.redCar,!0),mR(0,fZ[fQ],fq.blueCar),"option1"===e.id&&(f2++,f3.textContent=f2);break;case 2:mC("incorrect","incorrect","correct"),mR(3e3,fY[fQ],fq.yellowCar),mR(0,fK[fQ],fq.redCar),mR(5e3,fZ[fQ],fq.blueCar,!0),"option3"===e.id&&(f2++,f3.textContent=f2);break;case 3:mC("correct","incorrect","incorrect"),mR(5e3,fY[fQ],fq.yellowCar,!0),mR(3e3,fK[fQ],fq.redCar),mR(0,fZ[fQ],fq.blueCar),"option1"===e.id&&(f2++,f3.textContent=f2);break;case 4:mC("incorrect","correct","incorrect"),mR(0,fY[fQ],fq.yellowCar),mR(3e3,fK[fQ],fq.redCar,!0),"option2"===e.id&&(f2++,f3.textContent=f2);break;case 5:mC("correct","incorrect","incorrect"),mR(3e3,fY[fQ],fq.yellowCar,!0),mR(0,fK[fQ],fq.redCar),"option1"===e.id&&(f2++,f3.textContent=f2);break;case 6:mC("incorrect","correct","incorrect"),mR(3e3,fY[fQ],fq.yellowCar,!0),mR(3e3,fK[fQ],fq.redCar),mR(0,fZ[fQ-2],fq.blueCar),"option2"===e.id&&(f2++,f3.textContent=f2)}e.style.backgroundColor="white",e.style.color="black",pk.to(f8,{autoAlpha:1,y:"-=10",duration:.5}),mh=!0}};me.addEventListener("click",mP.bind(null,me)),mt.addEventListener("click",mP.bind(null,mt)),mi.addEventListener("click",mP.bind(null,mi));const mL=()=>{me.style.backgroundColor="black",me.style.color="white",mt.style.backgroundColor="black",mt.style.color="white",mi.style.backgroundColor="black",mi.style.color="white",mn.style.backgroundImage="",mr.style.backgroundImage="",ms.style.backgroundImage=""};f7.addEventListener("click",()=>{switch(++mu){case 2:md=51;break;case 3:mc=100;break;case 4:md=-45;break;case 5:mc=4;break;case 6:md=-145;break;case 6:mc=-91,md=-140,f7.disabled=!0}let e=pk.timeline();e.to(mf.position,{x:mc,z:md,duration:4}).to(f9,{autoAlpha:0,duration:.2},0).to(f8,{autoAlpha:0,y:"+=10",duration:.5},0).to(me,{rotateX:90,duration:.2},"-=3.7").to(mt,{rotateX:90,duration:.2},"-=3.5").to(mi,{rotateX:90,duration:.2,onComplete:()=>{mL(),mE(fG[mu-1].question,fG[mu-1].answer1,fG[mu-1].answer2,fG[mu-1].answer3)}},"-=3.3").to(f9,{autoAlpha:1,duration:.2,onComplete:()=>{fX[mu-1].question.play()}},"-=0.5").to(me,{rotateX:0,duration:.2,onComplete:()=>{fX[mu-1].answer1.play()}},"+=2.5").to(mt,{rotateX:0,duration:.2,onComplete:()=>{fX[mu-1].answer2.play()}},"+=2.4").to(mi,{rotateX:0,duration:.2,onComplete:()=>{mh=!1,fX[mu-1].answer3.play()}},"+=2.4")});const mD=new /**
* Class for representing a timer.
*
* @author {@link https://github.com/Mugen87|Mugen87}
*/class{/**
	* Constructs a new time object.
	*/constructor(){this._previousTime=0,this._currentTime=0,this._delta=0,this._elapsed=0,this._timescale=1,this._useFixedDelta=!1,this._fixedDelta=16.67,// use Page Visibility API to avoid large time delta values
this._usePageVisibilityAPI="undefined"!=typeof document&&void 0!==document.hidden,!0===this._usePageVisibilityAPI&&(this._pageVisibilityHandler=lT.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}/**
	* Disables the usage of a fixed delta value.
	*
	* @return {Time} A reference to this time object.
	*/disableFixedDelta(){return this._useFixedDelta=!1,this}/**
	* Frees all internal resources.
	*
	* @return {Time} A reference to this time object.
	*/dispose(){return!0===this._usePageVisibilityAPI&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}/**
	* Enables the usage of a fixed delta value. Can be useful for debugging and testing.
	*
	* @return {Time} A reference to this time object.
	*/enableFixedDelta(){return this._useFixedDelta=!0,this}/**
	* Returns the delta time in seconds. Represents the completion time in seconds since
	* the last simulation step.
	*
	* @return {Number} The delta time in seconds.
	*/getDelta(){return this._delta/1e3}/**
	* Returns the elapsed time in seconds. It's the accumulated
	* value of all previous time deltas.
	*
	* @return {Number} The elapsed time in seconds.
	*/getElapsed(){return this._elapsed/1e3}/**
	* Returns the fixed delta time in seconds.
	*
	* @return {Number} The fixed delta time in seconds.
	*/getFixedDelta(){return this._fixedDelta/1e3}/**
	* Returns the timescale value.
	*
	* @return {Number} The timescale value.
	*/getTimescale(){return this._timescale}/**
	* Resets this time object.
	*
	* @return {Time} A reference to this time object.
	*/reset(){return this._currentTime=this._now(),this}/**
	* Sets a fixed time delta value.
	*
	* @param {Number} fixedDelta - Fixed time delta in seconds.
	* @return {Time} A reference to this time object.
	*/setFixedDelta(e){return this._fixedDelta=1e3*e,this}/**
	* Sets a timescale value. This value represents the scale at which time passes.
	* Can be used for slow down or  accelerate the simulation.
	*
	* @param {Number} timescale - The timescale value.
	* @return {Time} A reference to this time object.
	*/setTimescale(e){return this._timescale=e,this}/**
	* Updates the internal state of this time object.
	*
	* @return {Time} A reference to this time object.
	*/update(){return!0===this._useFixedDelta?this._delta=this._fixedDelta:(this._previousTime=this._currentTime,this._currentTime=this._now(),this._delta=this._currentTime-this._previousTime),this._delta*=this._timescale,this._elapsed+=this._delta,this}// private
_now(){return("undefined"==typeof performance?Date:performance).now()}};f5.setAnimationLoop(e=>{Math.sin(e/130)>0?f1.material.color.setHex(14429954):f1.material.color.setHex(16745216);let t=mD.update().getDelta();mv.update(t),f5.render(mp,mf)}),window.addEventListener("resize",()=>{mf.aspect=window.innerWidth/window.innerHeight,mf.updateProjectionMatrix(),f5.setSize(window.innerWidth,window.innerHeight)}),document.body.appendChild(f5.domElement);//# sourceMappingURL=index.089ab356.js.map

//# sourceMappingURL=index.089ab356.js.map
