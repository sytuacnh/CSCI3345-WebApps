let doClickStuff;
(function(){
'use strict';Object.freeze({assumingES6:!0,productionMode:!0,linkerVersion:"1.0.1",fileLevelThis:this});const l=Math.imul,aa=Math.clz32;let m;function ba(a){for(const b in a)return b}class n{constructor(a){this.ra=a}toString(){return String.fromCharCode(this.ra)}}
function p(a){switch(typeof a){case "string":return"java.lang.String";case "number":return ca(a)?a<<24>>24===a?"java.lang.Byte":a<<16>>16===a?"java.lang.Short":"java.lang.Integer":"java.lang.Float";case "boolean":return"java.lang.Boolean";case "undefined":return"java.lang.Void";default:return null===a?a.Uc():a instanceof q?"java.lang.Long":a instanceof n?"java.lang.Character":a&&a.$classData?a.$classData.name:null.Vc()}}
function r(a,b){return a&&a.$classData||null===a?a.j(b):"number"===typeof a?Object.is(a,b):a instanceof n?b instanceof n?t(a)===t(b):!1:u.prototype.j.call(a,b)}function da(a){switch(typeof a){case "string":return v(a);case "number":return a=+a,a=ea(fa(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||null===a?a.g():a instanceof n?t(a):ha(a)}}let ia=0;const ja=new WeakMap;
function ha(a){switch(typeof a){case "string":case "number":case "bigint":case "boolean":case "undefined":return da(a);default:if(null===a)return 0;{let b=ja.get(a);void 0===b&&(ia=b=ia+1|0,ja.set(a,b));return b}}}function ca(a){return"number"===typeof a&&(a|0)===a&&1/a!==1/-0}function t(a){return null===a?0:a.ra}
function w(a,b,c,d,f){var e=new ka;const h=ba(a);e.o=c;e.ea="L"+b+";";e.ta=f||function(g,k){return!!(g&&g.$classData&&g.$classData.P===k&&g.$classData.O.o[h])};e.name=b;e.isInterface=!1;e.isInstance=d||function(g){return!!(g&&g.$classData&&g.$classData.o[h])};return e}
class ka{constructor(){this.sa=void 0;this.O=this.o=null;this.P=0;this.Oa=null;this.ea="";this.ta=this.ca=void 0;this.name="";this.isJSClass=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}hb(){var a=y;const b="longZero"===a.Oa?m:a.Oa;class c extends u{constructor(h){super();if("number"===typeof h){this.Na=Array(h);for(let g=0;g<h;g++)this.Na[g]=b}else this.Na=h}}c.prototype.$classData=this;const d="["+a.ea,f=a.O||a,e=a.P+1;this.sa=c;this.o={a:1,va:1,b:1};this.O=f;this.P=
e;this.name=this.ea=d;this.isArrayClass=!0;this.isInstance=function(h){return f.ta(h,e)};return this}}class u{g(){return ha(this)}j(a){return this===a}c(){const a=p(this),b=this.g();return a+"@"+(+(b>>>0)).toString(16)}["toString"](){return this.c()}}const la=w({a:0},"java.lang.Object",{a:1},function(a){return null!==a},function(a,b){if(a=a&&a.$classData){const c=a.P||0;return!(c<b)&&(c>b||!a.O.isPrimitive)}return!1});u.prototype.$classData=la;class ma extends u{}
const na=w({Pa:0},"example.Hello$",{Pa:1,a:1});ma.prototype.$classData=na;let z=void 0;function ea(a,b){const c=b|0;if(c===b&&-Infinity!==1/b)return c;a.wa[0]=b;a=new q(a.S[a.ya]|0,a.S[a.xa]|0);return a.f^a.e}
class oa extends u{constructor(){super();this.wa=this.S=this.C=null;this.ga=!1;this.ya=this.xa=0;A=this;this.C=new ArrayBuffer(8);this.S=new Int32Array(this.C,0,2);new Float32Array(this.C,0,2);this.wa=new Float64Array(this.C,0,1);this.S[0]=16909060;this.xa=(this.ga=1===((new Int8Array(this.C,0,8))[0]|0))?0:1;this.ya=this.ga?1:0}}const pa=w({qb:0},"java.lang.FloatingPointBits$",{qb:1,a:1});oa.prototype.$classData=pa;let A=void 0;function fa(){A||(A=new oa);return A}
class qa extends u{constructor(){super();this.za=null;B=this;this.za=new ra(!1);new ra(!0)}}const sa=w({Bb:0},"java.lang.System$Streams$",{Bb:1,a:1});qa.prototype.$classData=sa;let B=void 0;function ta(){B||(B=new qa);return B}w({Fb:0},"java.lang.Void",{Fb:1,a:1},a=>void 0===a);function C(){ua||(ua=new va);var a=ua;0===(67108864&a.m)&&0===(67108864&a.m)&&(0===(33554432&a.m)&&0===(33554432&a.m)&&(a.na=window,a.m|=33554432),a.ma=a.na.document,a.m|=67108864);return a.ma}
class va extends u{constructor(){super();this.ma=this.na=null;this.m=0}}const wa=w({Ya:0},"org.scalajs.dom.package$",{Ya:1,a:1});va.prototype.$classData=wa;let ua=void 0;class xa extends u{}class ya extends u{constructor(){super();this.Ka=null;D=this;this.Ka=new za}}const Aa=w({$b:0},"scala.collection.Iterator$",{$b:1,a:1});ya.prototype.$classData=Aa;let D=void 0;
function Ba(a,b){if(b instanceof n)return t(a)===t(b);if(Ca(b)){if("number"===typeof b)return+b===t(a);if(b instanceof q){b=null===b?m:b;const c=b.e;a=t(a);const d=a>>31;return b.f===a&&c===d}return null===b?null===a:r(b,a)}return null===a&&null===b}
function E(a,b,c){if(b===c)c=!0;else if(Ca(b))a:if(Ca(c))c=Da(b,c);else{if(c instanceof n){if("number"===typeof b){c=+b===t(c);break a}if(b instanceof q){a=null===b?m:b;b=a.e;c=t(c);const d=c>>31;c=a.f===c&&b===d;break a}}c=null===b?null===c:r(b,c)}else c=b instanceof n?Ba(b,c):null===b?null===c:r(b,c);return c}
function Da(a,b){if("number"===typeof a){a=+a;if("number"===typeof b)return a===+b;if(b instanceof q){var c=null===b?m:b;b=c.f;c=c.e;return a===Ea(F(),b,c)}return!1}if(a instanceof q){c=null===a?m:a;a=c.f;c=c.e;if(b instanceof q){b=null===b?m:b;const d=b.e;return a===b.f&&c===d}return"number"===typeof b?(b=+b,Ea(F(),a,c)===b):!1}return null===a?null===b:r(a,b)}class Fa extends u{}const Ga=w({Ic:0},"scala.runtime.BoxesRunTime$",{Ic:1,a:1});Fa.prototype.$classData=Ga;let Ha=void 0;
function H(){Ha||(Ha=new Fa);return Ha}function Ia(a){Ja||(Ja=new Ka);var b=a.F()+"(";return(new La(a)).da(Ma(),b,",",")").l.d}class Ka extends u{}const Na=w({Kc:0},"scala.runtime.ScalaRunTime$",{Kc:1,a:1});Ka.prototype.$classData=Na;let Ja=void 0;
function Oa(a,b){if(null===b)return 0;if("number"===typeof b){a=+b;b=2147483647<a?2147483647:-2147483648>a?-2147483648:a|0;if(b===a)a=b;else{b=F();var c=b;if(-9223372036854775808>a)c.N=-2147483648,c=0;else if(0x7fffffffffffffff<=a)c.N=2147483647,c=-1;else{{const d=a|0,f=a/4294967296|0;c.N=0>a&&0!==d?-1+f|0:f;c=d}}b=b.N;a=Ea(F(),c,b)===a?c^b:ea(fa(),a)}return a}return b instanceof q?(a=null===b?m:b,b=new q(a.f,a.e),a=b.f,b=b.e,a=b===a>>31?a:a^b):da(b)}
class Pa extends u{W(a,b){a=this.ia(a,b);return-430675100+l(5,a<<13|a>>>19|0)|0}ia(a,b){b=l(-862048943,b);b=l(461845907,b<<15|b>>>17|0);return a^b}Q(a,b){a^=b;a=l(-2048144789,a^(a>>>16|0));a=l(-1028477387,a^(a>>>13|0));return a^=a>>>16|0}}const Qa=w({Nc:0},"scala.runtime.Statics$",{Nc:1,a:1});Pa.prototype.$classData=Qa;let Ra=void 0;function I(){Ra||(Ra=new Pa);return Ra}class Sa extends u{}const Ta=w({yc:0},"scala.scalajs.js.package$",{yc:1,a:1});Sa.prototype.$classData=Ta;let Ua=void 0;
function Va(a){const b={};a.B(new J(((c,d)=>f=>{d[f.y]=f.z})(Wa,b)));return b}class Xa extends u{}const Ya=w({zc:0},"scala.scalajs.js.special.package$",{zc:1,a:1});Xa.prototype.$classData=Ya;let Wa=void 0;class Za extends u{}const $a=w({Gc:0},"scala.scalajs.runtime.package$",{Gc:1,a:1});Za.prototype.$classData=$a;let K=void 0;class ab extends u{constructor(a){super();this.Ba=a}c(){return"DynamicVariable("+this.Ba+")"}}const bb=w({Lb:0},"scala.util.DynamicVariable",{Lb:1,a:1});
ab.prototype.$classData=bb;function cb(a){var b=db();const c=a.D();if(0===c)return v(a.F());{var d=-889275714;let f=0;for(;f<c;){const e=a.E(f);d=b.W(d,Oa(I(),e));f=1+f|0}return b.Q(d,c)}}function eb(a,b,c){const d=new fb(0);c=new fb(c);b.B(new J(((f,e,h)=>g=>{e.r=f.W(e.r,Oa(I(),g));h.r=1+h.r|0})(a,c,d)));return a.Q(c.r,d.r)}
class gb extends u{W(a,b){a=this.ia(a,b);return-430675100+l(5,a<<13|a>>>19|0)|0}ia(a,b){b=l(-862048943,b);b=l(461845907,b<<15|b>>>17|0);return a^b}Q(a,b){a^=b;a=l(-2048144789,a^(a>>>16|0));a=l(-1028477387,a^(a>>>13|0));return a^=a>>>16|0}}
function hb(a,b){if(null===a.M){var c=b.prototype,d=c.componentWillMount,f=L().i.componentWillMount;E(H(),d,f)&&(c.componentWillMount=void 0);d=c.componentDidMount;f=L().i.componentDidMount;E(H(),d,f)&&(c.componentDidMount=void 0);d=c.componentWillReceiveProps;f=L().i.componentWillReceiveProps;E(H(),d,f)?c.componentWillReceiveProps=void 0:c.componentWillReceiveProps=((e,h)=>function(g){L();h.call(this,"object"===typeof g&&g.hasOwnProperty("__")?g.__:M(this._base._propsReader,g))})(a,c.componentWillReceiveProps);
d=c.shouldComponentUpdate;f=L().i.shouldComponentUpdate;E(H(),d,f)?c.shouldComponentUpdate=void 0:c.shouldComponentUpdate=((e,h)=>function(g,k){L();g="object"===typeof g&&g.hasOwnProperty("__")?g.__:M(this._base._propsReader,g);L();return k=!!h.call(this,g,"object"===typeof k&&k.hasOwnProperty("__")?k.__:M(this._base._stateReader,k))})(a,c.shouldComponentUpdate);d=c.componentWillUpdate;f=L().i.componentWillUpdate;E(H(),d,f)?c.componentWillUpdate=void 0:c.componentWillUpdate=((e,h)=>function(g,k){L();
g="object"===typeof g&&g.hasOwnProperty("__")?g.__:M(this._base._propsReader,g);L();h.call(this,g,"object"===typeof k&&k.hasOwnProperty("__")?k.__:M(this._base._stateReader,k))})(a,c.componentWillUpdate);d=c.getSnapshotBeforeUpdate;f=L().i.getSnapshotBeforeUpdate;E(H(),d,f)?c.getSnapshotBeforeUpdate=void 0:c.getSnapshotBeforeUpdate=((e,h)=>function(g,k){L();g="object"===typeof g&&g.hasOwnProperty("__")?g.__:M(this._base._propsReader,g);L();return k=h.call(this,g,"object"===typeof k&&k.hasOwnProperty("__")?
k.__:M(this._base._stateReader,k))})(a,c.getSnapshotBeforeUpdate);d=c.componentDidUpdate;f=L().i.componentDidUpdate;E(H(),d,f)?c.componentDidUpdate=void 0:(d=c.componentDidUpdate,c.componentDidUpdateScala=d,c.componentDidUpdate=((e,h)=>function(g,k,x){L();g="object"===typeof g&&g.hasOwnProperty("__")?g.__:M(this._base._propsReader,g);L();h.call(this,g,"object"===typeof k&&k.hasOwnProperty("__")?k.__:M(this._base._stateReader,k),x)})(a,d));d=c.componentWillUnmount;f=L().i.componentWillUnmount;E(H(),
d,f)&&(c.componentWillUnmount=void 0);d=c.componentDidCatch;f=L().i.componentDidCatch;E(H(),d,f)&&(c.componentDidCatch=void 0);c._base=a;c=Object.getOwnPropertyDescriptor(c,"initialState");a.needsExtraApply=void 0!==c?void 0!==c.writable:!1;null!==a.ba&&(b.getDerivedStateFromProps=(e=>(h,g)=>{L();h="object"===typeof h&&h.hasOwnProperty("__")?h.__:M(e._propsReader,h);L();g="object"===typeof g&&g.hasOwnProperty("__")?g.__:M(e._stateReader,g);g=N(e.ba,h,g);return g=null===g?null:O().h?P(L(),e._stateWriter,
g):{__:g}})(a));null!==a.aa&&(b.getDerivedStateFromError=(e=>h=>{h=e.aa.n(h);return h=null===h?null:O().h?P(L(),e._stateWriter,h):{__:h}})(a));a.M=b}return a.M}function ib(a){a.ba=null;a.aa=null;a.pa=null;a.qa=null;a.M=null;a.L=null}function jb(a,b,c){b={__:b};if(null===a.L){var d=a.qa,f=a.pa;null!==f&&(a._stateReader=f);null!==d&&(a._stateWriter=d);c=N(O().oa,hb(a,c),a);a.L=c}return[a.L,b]}class kb extends u{constructor(){super();this.L=this.M=this.qa=this.pa=this.aa=this.ba=null}}
class lb extends u{constructor(){super();this.oa=null;this.h=!1;Q=this;this.oa=new mb((()=>a=>a)(this));this.h=!1}}const nb=w({$a:0},"slinky.core.BaseComponentWrapper$",{$a:1,a:1});lb.prototype.$classData=nb;let Q=void 0;function O(){Q||(Q=new lb);return Q}function M(a,b){const c=b.__value;return b.hasOwnProperty("__value")?ob(a,c):ob(a,b)}function P(a,b,c){a=b.rd(c);return"object"===typeof a?a:{__value:a}}
class pb extends u{constructor(){super();this.i=null;R=this;const a=new (qb())(null);Object.defineProperty(a,"initialState",{get:function(){},configurable:!0});a.render=function(){return null};this.i=a}}const rb=w({bb:0},"slinky.core.DefinitionBase$",{bb:1,a:1});pb.prototype.$classData=rb;let R=void 0;function L(){R||(R=new pb);return R}class sb extends u{}const tb=w({cb:0},"slinky.core.annotations.react$",{cb:1,a:1});sb.prototype.$classData=tb;let S=void 0;
function ob(a,b){(a="object"===typeof b&&null!==b&&void 0!==b.__?b.__:a.Tc(b))&&a.$classData&&a.$classData.o.Sc&&(a.__slinky_raw=b);return a}class ub extends u{}function Ca(a){return a instanceof ub||"number"===typeof a}function vb(a,b){a.ha=b;a.Cb=null;a.Db=!0;a.Eb=!0;"[object Error]"!==Object.prototype.toString.call(a)&&void 0!==Error.captureStackTrace&&Error.captureStackTrace(a)}
class wb extends Error{constructor(){super();this.Cb=this.ha=null;this.Eb=this.Db=!1}c(){const a=p(this),b=this.ha;return null===b?a:a+": "+b}g(){return u.prototype.g.call(this)}j(a){return u.prototype.j.call(this,a)}get ["message"](){var a=this.ha;return a=null===a?"":a}get ["name"](){return p(this)}["toString"](){return this.c()}}
function xb(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+aa(1E9)|0)-(0!==b?aa(b):32+aa(a)|0)|0,d=c,f=0===(32&d)?1E9<<d:0;d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d;var e=a,h=b;for(a=b=0;0<=c&&0!==(-2097152&h);){var g=e,k=h;const x=f,G=d;if(k===G?(-2147483648^g)>=(-2147483648^x):(-2147483648^k)>=(-2147483648^G))g=h,k=d,h=e-f|0,g=(-2147483648^h)>(-2147483648^e)?-1+(g-k|0)|0:g-k|0,e=h,h=g,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;g=d>>>1|0;f=f>>>1|0|d<<31;d=g}c=h;if(0===c?-1147483648<=(-2147483648^
e):-2147483648<=(-2147483648^c))c=4294967296*h+ +(e>>>0),d=c/1E9,f=d/4294967296|0,d=b+(d|0)|0,a=(-2147483648^d)<(-2147483648^b)?1+(a+f|0)|0:a+f|0,b=d,e=c%1E9|0;c=""+e;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}function Ea(a,b,c){return 0>c?-(4294967296*+((0!==b?~c:-c|0)>>>0)+ +((-b|0)>>>0)):4294967296*c+ +(b>>>0)}class yb extends u{constructor(){super();this.N=0}}const zb=w({eb:0},"org.scalajs.linker.runtime.RuntimeLong$",{eb:1,a:1,b:1});yb.prototype.$classData=zb;
let Ab=void 0;function F(){Ab||(Ab=new yb);return Ab}function Bb(a,b,c,d,f){const e=new Cb(!0);Db(b,c);a.B(new J(((h,g,k,x)=>G=>{if(g.ka)Eb(k,G),g.ka=!1;else return Db(k,x),Eb(k,G)})(a,e,b,d)));Db(b,f);return b}class Fb extends u{c(){return"\x3cfunction0\x3e"}}class Gb extends u{c(){return"\x3cfunction1\x3e"}}class Hb extends u{c(){return"\x3cfunction2\x3e"}}class Cb extends u{constructor(a){super();this.ka=a}c(){return""+this.ka}}const Ib=w({Hc:0},"scala.runtime.BooleanRef",{Hc:1,a:1,b:1});
Cb.prototype.$classData=Ib;class fb extends u{constructor(a){super();this.r=a}c(){return""+this.r}}const Jb=w({Jc:0},"scala.runtime.IntRef",{Jc:1,a:1,b:1});fb.prototype.$classData=Jb;class Kb extends u{}const Lb=w({wc:0},"scala.scalajs.js.Dynamic$literal$",{wc:1,a:1,Xc:1});Kb.prototype.$classData=Lb;let Mb=void 0;function Nb(a){var b=db();return eb(b,a,b.Ca)}class Ob extends gb{constructor(){super();this.Ca=0;Pb=this;this.Ca=v("Seq");v("Map");v("Set")}}
const Qb=w({Mb:0},"scala.util.hashing.MurmurHash3$",{Mb:1,ad:1,a:1});Ob.prototype.$classData=Qb;let Pb=void 0;function db(){Pb||(Pb=new Ob);return Pb}class Rb extends kb{}function Sb(a){var b=Tb;a=new Ub("Enter Input:",a);const c=Vb();return jb(b,a,c)}class Wb extends Rb{constructor(){super();ib(this)}}const Xb=w({Qa:0},"example.TestComponent$",{Qa:1,ab:1,Za:1,a:1});Wb.prototype.$classData=Xb;let Tb=void 0;class Yb extends Rb{constructor(){super();ib(this)}}
const Zb=w({Ta:0},"example.TopComponent$",{Ta:1,ab:1,Za:1,a:1});Yb.prototype.$classData=Zb;let $b=void 0;w({lb:0},"java.lang.Boolean",{lb:1,a:1,b:1,k:1},a=>"boolean"===typeof a);w({nb:0},"java.lang.Character",{nb:1,a:1,b:1,k:1},a=>a instanceof n);class ac extends wb{}class bc extends xa{constructor(){super();this.Aa=null;cc=this;this.Aa=new ab(ta().za);ta()}}const dc=w({Ib:0},"scala.Console$",{Ib:1,Wc:1,a:1,Zc:1});bc.prototype.$classData=dc;let cc=void 0;function ec(a,b){return(c=>()=>fc(c))(b)}
function T(a,b){return(c=>d=>c.n(d))(b)}class gc extends u{}const hc=w({vc:0},"scala.scalajs.js.Any$",{vc:1,a:1,md:1,nd:1});gc.prototype.$classData=hc;let ic=void 0;function U(){ic||(ic=new gc);return ic}function fc(a){return(0,a.Bc)()}class jc extends Fb{constructor(a){super();this.Bc=a}}const kc=w({Ac:0},"scala.scalajs.runtime.AnonFunction0",{Ac:1,od:1,a:1,Oc:1});jc.prototype.$classData=kc;class J extends Gb{constructor(a){super();this.Dc=a}n(a){return(0,this.Dc)(a)}}
const lc=w({Cc:0},"scala.scalajs.runtime.AnonFunction1",{Cc:1,pd:1,a:1,la:1});J.prototype.$classData=lc;function N(a,b,c){return(0,a.Fc)(b,c)}class mb extends Hb{constructor(a){super();this.Fc=a}}const mc=w({Ec:0},"scala.scalajs.runtime.AnonFunction2",{Ec:1,qd:1,a:1,Pc:1});mb.prototype.$classData=mc;class nc extends u{}w({mb:0},"java.lang.Byte",{mb:1,u:1,a:1,b:1,k:1},a=>"number"===typeof a&&a<<24>>24===a&&1/a!==1/-0);w({ob:0},"java.lang.Double",{ob:1,u:1,a:1,b:1,k:1},a=>"number"===typeof a);
w({pb:0},"java.lang.Float",{pb:1,u:1,a:1,b:1,k:1},a=>"number"===typeof a);w({tb:0},"java.lang.Integer",{tb:1,u:1,a:1,b:1,k:1},a=>ca(a));w({xb:0},"java.lang.Long",{xb:1,u:1,a:1,b:1,k:1},a=>a instanceof q);class oc extends ac{}w({zb:0},"java.lang.Short",{zb:1,u:1,a:1,b:1,k:1},a=>"number"===typeof a&&a<<16>>16===a&&1/a!==1/-0);function v(a){let b=0,c=1,d=-1+(a.length|0)|0;for(;0<=d;)b=b+l(65535&(a.charCodeAt(d)|0),c)|0,c=l(31,c),d=-1+d|0;return b}
const y=w({fb:0},"java.lang.String",{fb:1,a:1,b:1,k:1,ua:1},a=>"string"===typeof a);class pc extends u{constructor(){super();this.d=null}c(){return this.d}q(){return this.d.length|0}}const qc=w({Ab:0},"java.lang.StringBuilder",{Ab:1,a:1,ua:1,ib:1,b:1});pc.prototype.$classData=qc;
class q extends ub{constructor(a,b){super();this.f=a;this.e=b}j(a){return a instanceof q?this.f===a.f&&this.e===a.e:!1}g(){return this.f^this.e}c(){F();var a=this.f,b=this.e;return b===a>>31?""+a:0>b?"-"+xb(-a|0,0!==a?~b:-b|0):xb(a,b)}}const rc=w({db:0},"org.scalajs.linker.runtime.RuntimeLong",{db:1,u:1,a:1,b:1,k:1});q.prototype.$classData=rc;class sc extends u{B(a){for(;this.p();)a.n(this.v())}c(){return"\x3citerator\x3e"}da(a,b,c,d){return Bb(this,a,b,c,d)}}let tc=void 0;
function V(){if(!tc){class a extends Object{constructor(b,c){super();Object.defineProperty(this,"name",{configurable:!0,enumerable:!0,writable:!0,value:null});Object.defineProperty(this,"value",{configurable:!0,enumerable:!0,writable:!0,value:null});this.name=b;this.value=c}}tc=a}return tc}function uc(a,b){a.setState(T(U(),new J(((c,d)=>f=>{L();f=d.n("object"===typeof f&&f.hasOwnProperty("__")?f.__:M(c._base._stateReader,f));return O().h?P(L(),c._base._stateWriter,f):{__:f}})(a,b))))}
function vc(a,b){a.setState(((c,d)=>(f,e)=>{L();f="object"===typeof f&&f.hasOwnProperty("__")?f.__:M(c._base._stateReader,f);L();e=N(d,f,"object"===typeof e&&e.hasOwnProperty("__")?e.__:M(c._base._propsReader,e));return e=O().h?P(L(),c._base._stateWriter,e):{__:e}})(a,b))}function wc(a,b,c){a.setState(T(U(),new J(((d,f)=>e=>{L();e=f.n("object"===typeof e&&e.hasOwnProperty("__")?e.__:M(d._base._stateReader,e));return O().h?P(L(),d._base._stateWriter,e):{__:e}})(a,b))),ec(U(),c))}
function xc(a,b,c){a.setState(((d,f)=>(e,h)=>{L();e="object"===typeof e&&e.hasOwnProperty("__")?e.__:M(d._base._stateReader,e);L();h=N(f,e,"object"===typeof h&&h.hasOwnProperty("__")?h.__:M(d._base._propsReader,h));return h=O().h?P(L(),d._base._stateWriter,h):{__:h}})(a,b),ec(U(),c))}let yc=void 0;
function qb(){if(!yc){class a extends React.Component{constructor(b){super(b);Ua||(Ua=new Sa);void 0!==this._base&&(b=this.initialState,b=this._base.needsExtraApply?b():b,O().h?b=P(L(),this._base._stateWriter,b):(Mb||(Mb=new Kb),K||(K=new Za),b=new zc([new Ac("__",b)]),Wa||(Wa=new Xa),b=Va(b)),this.state=b)}get ["props_scala"](){var b=this.props;L();return b="object"===typeof b&&b.hasOwnProperty("__")?b.__:M(this._base._propsReader,b)}get ["state_scala"](){var b=this.state;L();return b="object"===
typeof b&&b.hasOwnProperty("__")?b.__:M(this._base._stateReader,b)}["setState_scala_1"](b){b=O().h?P(L(),this._base._stateWriter,b):{__:b};this.setState(b)}["setState_scala_2"](b){uc(this,b)}["setState_scala_3"](b){vc(this,b)}["setState_scala_4"](b,c){b=O().h?P(L(),this._base._stateWriter,b):{__:b};this.setState(b,ec(U(),c))}["setState_scala_5"](b,c){wc(this,b,c)}["setState_scala_6"](b,c){xc(this,b,c)}["componentWillMount"](){}["componentDidMount"](){}["componentWillReceiveProps"](){}["shouldComponentUpdate"](){return!0}["componentWillUpdate"](){}["getSnapshotBeforeUpdate"](){return null}["componentDidUpdate"](b,
c,...d){switch(d.length|0){case 1:this.componentDidUpdateScala(b,c);break;case 0:break;default:throw"No matching overload";}}["componentWillUnmount"](){}["componentDidCatch"](){}}yc=a}return yc}let Bc=void 0;function W(){if(!Bc){class a extends Object{constructor(b,c){super();Object.defineProperty(this,"name",{configurable:!0,enumerable:!0,writable:!0,value:null});Object.defineProperty(this,"value",{configurable:!0,enumerable:!0,writable:!0,value:null});this.name=b;this.value=c}}Bc=a}return Bc}
function Cc(a){for(var b=[a.props_scala.J],c=["h1",{}],d=0,f=b.length|0;d<f;){var e=b[d];if(e instanceof V())c[1][e.name]=e.value;else if(e instanceof W()){if(!e.value.t()){var h=c[1],g=e.name;e=e.value.s();h[g]=e}}else c.push(e)|0;d=1+d|0}if(null===c[0])throw new X("This tag has already been built into a ReactElement, and cannot be reused");b=React.createElement.apply(React,c);c[0]=null;c=new (V())("type","text");d=a.state_scala.K;d=new (V())("value",d);f=new J((x=>G=>{x.state_scala;x.setState_scala_1(new Dc(G.target.value))})(a));
c=[c,d,new (V())("onChange",T(U(),f))];d=["input",{}];f=0;for(h=c.length|0;f<h;){var k=c[f];k instanceof V()?d[1][k.name]=k.value:k instanceof W()?k.value.t()||(g=d[1],e=k.name,k=k.value.s(),g[e]=k):d.push(k)|0;f=1+f|0}if(null===d[0])throw new X("This tag has already been built into a ReactElement, and cannot be reused");c=React.createElement.apply(React,d);d[0]=null;a=new J((x=>()=>{fc(x.props_scala.I)})(a));d=["Go Back",new (V())("onClick",T(U(),a))];a=["button",{}];f=0;for(h=d.length|0;f<h;)k=
d[f],k instanceof V()?a[1][k.name]=k.value:k instanceof W()?k.value.t()||(g=a[1],e=k.name,k=k.value.s(),g[e]=k):a.push(k)|0,f=1+f|0;if(null===a[0])throw new X("This tag has already been built into a ReactElement, and cannot be reused");d=React.createElement.apply(React,a);a[0]=null;a=[b,c,d];b=["div",{}];c=0;for(d=a.length|0;c<d;)g=a[c],g instanceof V()?b[1][g.name]=g.value:g instanceof W()?g.value.t()||(f=b[1],h=g.name,g=g.value.s(),f[h]=g):b.push(g)|0,c=1+c|0;if(null===b[0])throw new X("This tag has already been built into a ReactElement, and cannot be reused");
a=React.createElement.apply(React,b);b[0]=null;return a}let Ec=void 0;function Vb(){if(!Ec){class a extends qb(){constructor(b){super(b);S||(S=new sb)}get ["initialState"](){return new Dc("")}["render"](){return Cc(this)}}Ec=a}return Ec}
class Ub extends u{constructor(a,b){super();this.J=a;this.I=b}F(){return"Props"}D(){return 2}E(a){switch(a){case 0:return this.J;case 1:return this.I;default:throw new Y(""+a);}}g(){return cb(this)}c(){return Ia(this)}j(a){return this===a?!0:a instanceof Ub?this.J===a.J?this.I===a.I:!1:!1}}const Fc=w({Ra:0},"example.TestComponent$Props",{Ra:1,a:1,ja:1,G:1,H:1,b:1});Ub.prototype.$classData=Fc;
class Dc extends u{constructor(a){super();this.K=a}F(){return"State"}D(){return 1}E(a){if(0===a)return this.K;throw new Y(""+a);}g(){return cb(this)}c(){return Ia(this)}j(a){return this===a?!0:a instanceof Dc?this.K===a.K:!1}}const Gc=w({Sa:0},"example.TestComponent$State",{Sa:1,a:1,ja:1,G:1,H:1,b:1});Dc.prototype.$classData=Gc;
function Hc(a){if(a.state_scala.x){Tb||(Tb=new Wb);var b=Sb(new jc((k=>()=>{k.setState_scala_1((k.state_scala,new Z(!1)))})(a)));if(null===b[0])throw new X("This component has already been built into a ReactElement, and cannot be reused");a=React.createElement.apply(React,b);b[0]=null;return a}b=["Top Level"];for(var c=["h1",{}],d=0,f=b.length|0;d<f;){var e=b[d];if(e instanceof V())c[1][e.name]=e.value;else if(e instanceof W()){if(!e.value.t()){var h=c[1],g=e.name;e=e.value.s();h[g]=e}}else c.push(e)|
0;d=1+d|0}if(null===c[0])throw new X("This tag has already been built into a ReactElement, and cannot be reused");b=React.createElement.apply(React,c);c[0]=null;a=new J((k=>()=>{k.setState_scala_1((k.state_scala,new Z(!0)))})(a));c=["View Input",new (V())("onClick",T(U(),a))];a=["button",{}];d=0;for(f=c.length|0;d<f;)e=c[d],e instanceof V()?a[1][e.name]=e.value:e instanceof W()?e.value.t()||(h=a[1],g=e.name,e=e.value.s(),h[g]=e):a.push(e)|0,d=1+d|0;if(null===a[0])throw new X("This tag has already been built into a ReactElement, and cannot be reused");
c=React.createElement.apply(React,a);a[0]=null;a=[b,c];b=["div",{}];c=0;for(d=a.length|0;c<d;)g=a[c],g instanceof V()?b[1][g.name]=g.value:g instanceof W()?g.value.t()||(f=b[1],h=g.name,g=g.value.s(),f[h]=g):b.push(g)|0,c=1+c|0;if(null===b[0])throw new X("This tag has already been built into a ReactElement, and cannot be reused");a=React.createElement.apply(React,b);b[0]=null;return a}let Ic=void 0;
class Z extends u{constructor(a){super();this.x=a}F(){return"State"}D(){return 1}E(a){if(0===a)return this.x;throw new Y(""+a);}g(){var a=this.x?1231:1237;a=I().W(-889275714,a);return I().Q(a,1)}c(){return Ia(this)}j(a){return this===a?!0:a instanceof Z?this.x===a.x:!1}}const Jc=w({Ua:0},"example.TopComponent$State",{Ua:1,a:1,ja:1,G:1,H:1,b:1});Z.prototype.$classData=Jc;class Kc extends nc{constructor(){super()}}w({jb:0},"java.lang.ArithmeticException",{jb:1,U:1,R:1,V:1,a:1,b:1});
class X extends oc{constructor(a){super();vb(this,a)}}const Lc=w({rb:0},"java.lang.IllegalStateException",{rb:1,U:1,R:1,V:1,a:1,b:1});X.prototype.$classData=Lc;class Y extends oc{constructor(a){super();vb(this,a)}}const Mc=w({sb:0},"java.lang.IndexOutOfBoundsException",{sb:1,U:1,R:1,V:1,a:1,b:1});Y.prototype.$classData=Mc;w({vb:0},"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{vb:1,Xa:1,a:1,Va:1,kb:1,Wa:1});class Nc extends oc{constructor(){super();vb(this,null)}}
const Oc=w({yb:0},"java.lang.NegativeArraySizeException",{yb:1,U:1,R:1,V:1,a:1,b:1});Nc.prototype.$classData=Oc;class Pc extends oc{constructor(a){super();vb(this,a)}}const Qc=w({Gb:0},"java.util.NoSuchElementException",{Gb:1,U:1,R:1,V:1,a:1,b:1});Pc.prototype.$classData=Qc;class za extends sc{p(){return!1}v(){throw new Pc("next on empty iterator");}}const Rc=w({ac:0},"scala.collection.Iterator$$anon$2",{ac:1,Ea:1,a:1,Ja:1,Y:1,X:1});za.prototype.$classData=Rc;
class La extends sc{constructor(a){super();this.La=0;this.Mc=a;this.$=0;this.La=a.D()}p(){return this.$<this.La}v(){const a=this.Mc.E(this.$);this.$=1+this.$|0;return a}}const Sc=w({Lc:0},"scala.runtime.ScalaRunTime$$anon$1",{Lc:1,Ea:1,a:1,Ja:1,Y:1,X:1});La.prototype.$classData=Sc;
class Ac extends u{constructor(a,b){super();this.y=a;this.z=b}D(){return 2}E(a){a:switch(a){case 0:a=this.y;break a;case 1:a=this.z;break a;default:throw new Y(""+a);}return a}c(){return"("+this.y+","+this.z+")"}F(){return"Tuple2"}g(){return cb(this)}j(a){return this===a?!0:a instanceof Ac?E(H(),this.y,a.y)&&E(H(),this.z,a.z):!1}}const Tc=w({gb:0},"scala.Tuple2",{gb:1,a:1,Yc:1,ja:1,G:1,H:1,b:1});Ac.prototype.$classData=Tc;class Uc extends Kc{constructor(){super()}}
function Vc(a){cc||(cc=new bc);for(var b=cc.Aa.Ba;""!==a;){const d=a.indexOf("\n")|0;if(0>d)b.T=""+b.T+a,a="";else{var c=""+b.T+a.substring(0,d);"undefined"!==typeof console&&(b.wb&&console.error?console.error(c):console.log(c));b.T="";a=a.substring(1+d|0)}}}class ra extends Uc{constructor(a){super();this.wb=a;this.T=""}}const Wc=w({ub:0},"java.lang.JSConsoleBasedPrintStream",{ub:1,Rc:1,Qc:1,Xa:1,a:1,Va:1,kb:1,Wa:1,ib:1});ra.prototype.$classData=Wc;
class Xc extends sc{constructor(a,b,c){super();this.w=0;this.Ha=null;this.Ia=c;if(null===a)throw K||(K=new Za),null;this.Ha=a;this.w=b}p(){return this.w<this.Ia}v(){this.w>=this.Ia&&(D||(D=new ya),D.Ka.v());const a=this.Ha.A(this.w);this.w=1+this.w|0;return a}}const Yc=w({Wb:0},"scala.collection.IndexedSeqLike$Elements",{Wb:1,Ea:1,a:1,Ja:1,Y:1,X:1,bd:1,H:1,b:1});Xc.prototype.$classData=Yc;
class Zc extends u{Ma(){a:{const f=p(this);let e=-1+(f.length|0)|0;for(;;)if(-1!==e&&36===(65535&(f.charCodeAt(e)|0)))e=-1+e|0;else break;if(-1===e||46===(65535&(f.charCodeAt(e)|0)))var a="";else for(a="";;){for(var b=1+e|0;;)if(-1!==e&&57>=(65535&(f.charCodeAt(e)|0))&&48<=(65535&(f.charCodeAt(e)|0)))e=-1+e|0;else break;for(var c=e;;)if(-1!==e&&36!==(65535&(f.charCodeAt(e)|0))&&46!==(65535&(f.charCodeAt(e)|0)))e=-1+e|0;else break;const h=1+e|0;if(e===c&&b!==(f.length|0))break a;for(;;)if(-1!==e&&
36===(65535&(f.charCodeAt(e)|0)))e=-1+e|0;else break;c=-1===e?!0:46===(65535&(f.charCodeAt(e)|0));var d;(d=c)||(d=65535&(f.charCodeAt(h)|0),d=90<d&&127>d||65>d,d=!d);if(d&&(b=f.substring(h,b),a=""===a?b:b+"."+a,c))break a}}return a}da(a,b,c,d){return Bb(this,a,b,c,d)}}function $c(a,b){let c=0;const d=a.q();for(;c<d;)b.n(a.A(c)),c=1+c|0}
function ad(a,b){if(b&&b.$classData&&b.$classData.o.Ga){const c=a.q();if(c===b.q()){let d=0;for(;d<c&&E(H(),a.A(d),b.A(d));)d=1+d|0;return d===c}return!1}a:{a=a.fa();for(b=b.fa();a.p()&&b.p();)if(!E(H(),a.v(),b.v())){b=!1;break a}b=!a.p()&&!b.p()}return b}class bd extends Zc{}class cd extends bd{c(){var a=this.Ma()+"(";return this.da(Ma(),a,", ",")").l.d}j(a){return a&&a.$classData&&a.$classData.o.Fa?a===this||this.Da(a):!1}}class dd extends cd{}class ed extends dd{}
function Ma(){var a=new fd,b=16,c=new pc;c.d="";if(0>b)throw new Nc;c.d=""+c.d;a.l=c;return a}function Db(a,b){a=a.l;a.d=""+a.d+b}function Eb(a,b){const c=a.l;c.d+=""+b;return a}class fd extends dd{constructor(){super();this.l=null}B(a){$c(this,a)}Da(a){return ad(this,a)}g(){return Nb(this)}fa(){return new Xc(this,0,this.l.q())}q(){return this.l.q()}c(){return this.l.d}n(a){return new n(65535&(this.l.d.charCodeAt(a|0)|0))}A(a){return new n(65535&(this.l.d.charCodeAt(a)|0))}}
const gd=w({tc:0},"scala.collection.mutable.StringBuilder",{tc:1,lc:1,Ob:1,Nb:1,Pb:1,a:1,ec:1,fc:1,kc:1,hc:1,Y:1,X:1,Ub:1,bc:1,Tb:1,ic:1,Yb:1,Qb:1,Rb:1,Zb:1,G:1,cc:1,Kb:1,la:1,Fa:1,Sb:1,dc:1,rc:1,qc:1,uc:1,Jb:1,sc:1,nc:1,Hb:1,va:1,ua:1,oc:1,Ga:1,Vb:1,pc:1,fd:1,Xb:1,$c:1,k:1,ld:1,mc:1,jc:1,gc:1,H:1,b:1});fd.prototype.$classData=gd;
class zc extends ed{constructor(a){super();this.Z=a}B(a){$c(this,a)}Da(a){return ad(this,a)}g(){return Nb(this)}fa(){return new Xc(this,0,this.Z.length|0)}A(a){return this.Z[a]}q(){return this.Z.length|0}Ma(){return"WrappedArray"}n(a){return this.Z[a|0]}}
const hd=w({xc:0},"scala.scalajs.js.WrappedArray",{xc:1,gd:1,lc:1,Ob:1,Nb:1,Pb:1,a:1,ec:1,fc:1,kc:1,hc:1,Y:1,X:1,Ub:1,bc:1,Tb:1,ic:1,Yb:1,Qb:1,Rb:1,Zb:1,G:1,cc:1,Kb:1,la:1,Fa:1,Sb:1,dc:1,rc:1,qc:1,uc:1,Jb:1,sc:1,nc:1,Hb:1,va:1,id:1,jd:1,jc:1,gc:1,dd:1,cd:1,ed:1,oc:1,Ga:1,Vb:1,pc:1,hd:1,kd:1,Xb:1,mc:1});zc.prototype.$classData=hd;m=new q(0,0);doClickStuff=function(){z||(z=new ma);Vc("Button clicked.\n")};y.ca||(y.ca=(new ka).hb());new y.ca.sa([]);
{z||(z=new ma);Vc("Hello World.\n");let a=1;for(;;){Vc(a+"\n");if(10===a)break;a=1+a|0}C().getElementById("title").innerHTML="Scala.js";C().getElementById("content").innerHTML="This is a tutorial on using Scala.js.";{var id=C().getElementById("content");const e=C().createElement("p"),h=C().createTextNode("This is a new paragraph.");e.appendChild(h);id.appendChild(e)}C().getElementById("canvas").getContext("2d").fillRect(100,100,200,150);const b=ReactDOM;var jd;$b||($b=new Yb);jd=$b;const c=function(){if(!Ic){class e extends qb(){constructor(h){super(h);
S||(S=new sb)}get ["initialState"](){return new Z(!1)}["render"](){return Hc(this)}}Ic=e}return Ic}(),d=jb(jd,void 0,c);if(null===d[0])throw new X("This component has already been built into a ReactElement, and cannot be reused");const f=React.createElement.apply(React,d);d[0]=null;b.render(f,C().getElementById("react-root"))};
}).call(this);
//# sourceMappingURL=scalajs-only-opt.js.map