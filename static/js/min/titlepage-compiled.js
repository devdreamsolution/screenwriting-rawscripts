var g,aa=aa||{},k=this;function ba(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function da(){}function l(a){a.n=function(){return a.Ha||(a.Ha=new a)}}
function ea(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function fa(a){var b=ea(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function s(a){return"function"==ea(a)}function t(a){return a[ga]||(a[ga]=++ha)}var ga="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ha=0;function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return u.apply(null,arguments)}
function ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}var la=Date.now||function(){return+new Date};function v(a,b){function c(){}c.prototype=b.prototype;a.h=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ma(a){this.stack=Error().stack||"";a&&(this.message=String(a))}v(ma,Error);ma.prototype.name="CustomError";function na(a,b){for(var c=1;c<arguments.length;c++){var d=String(arguments[c]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,d)}return a}function oa(a){if(!pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ta,"&quot;"));return a}var qa=/&/g,ra=/</g,sa=/>/g,ta=/\"/g,pa=/[&<>\"]/;function ua(a,b){return a<b?-1:a>b?1:0};function va(a,b){b.unshift(a);ma.call(this,na.apply(null,b));b.shift()}v(va,ma);va.prototype.name="AssertionError";function wa(a,b){throw new va("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var w=Array.prototype,xa=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=q(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},za=w.every?function(a,b,c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=q(a)?a.split(""):
a,e=0;e<d;e++)if(e in f&&!b.call(c,f[e],e,a))return!1;return!0};function y(a,b){return 0<=xa(a,b)}function Aa(a,b){var c=xa(a,b);0<=c&&w.splice.call(a,c,1)}function Ba(a,b,c,d){w.splice.apply(a,Ca(arguments,1))}function Ca(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)};var z,Da,Ea,Fa,Ga;function Ha(){return k.navigator?k.navigator.userAgent:null}Ga=Fa=Ea=Da=z=!1;var B;if(B=Ha()){var Ia=k.navigator;z=0==B.indexOf("Opera");Da=!z&&-1!=B.indexOf("MSIE");Fa=(Ea=!z&&-1!=B.indexOf("WebKit"))&&-1!=B.indexOf("Mobile");Ga=!z&&!Ea&&"Gecko"==Ia.product}var Ja=z,C=Da,D=Ga,E=Ea,Ka=Fa,La=k.navigator,Ma=-1!=(La&&La.platform||"").indexOf("Win"),Na;
a:{var Oa="",F;if(Ja&&k.opera)var Pa=k.opera.version,Oa="function"==typeof Pa?Pa():Pa;else if(D?F=/rv\:([^\);]+)(\)|;)/:C?F=/MSIE\s+([^\);]+)(\)|;)/:E&&(F=/WebKit\/(\S+)/),F)var Qa=F.exec(Ha()),Oa=Qa?Qa[1]:"";if(C){var Ra,Sa=k.document;Ra=Sa?Sa.documentMode:void 0;if(Ra>parseFloat(Oa)){Na=String(Ra);break a}}Na=Oa}var Ta={};
function G(a){var b;if(!(b=Ta[a])){b=0;for(var c=String(Na).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var h=c[e]||"",n=d[e]||"",p=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var A=p.exec(h)||["","",""],r=m.exec(n)||["","",""];if(0==A[0].length&&0==r[0].length)break;b=ua(0==A[1].length?0:parseInt(A[1],10),0==r[1].length?0:parseInt(r[1],10))||ua(0==A[2].length,0==r[2].length)||
ua(A[2],r[2])}while(0==b)}b=Ta[a]=0<=b}return b}var Ua={};function Va(){return Ua[9]||(Ua[9]=C&&document.documentMode&&9<=document.documentMode)};!C||Va();var Wa=!C||Va();C&&G("8");!E||G("528");D&&G("1.9b")||C&&G("8")||Ja&&G("9.5")||E&&G("528");!D||G("8");function H(){}H.prototype.$=!1;H.prototype.m=function(){this.$||(this.$=!0,this.d())};H.prototype.d=function(){this.Da&&Xa.apply(null,this.Da)};function Xa(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];fa(d)?Xa.apply(null,d):d&&"function"==typeof d.m&&d.m()}};function I(a,b){this.type=a;this.currentTarget=this.target=b}v(I,H);I.prototype.d=function(){delete this.type;delete this.target;delete this.currentTarget};I.prototype.t=!1;I.prototype.U=!0;function Ya(a){Ya[" "](a);return a}Ya[" "]=da;function Za(a,b){a&&this.P(a,b)}v(Za,I);g=Za.prototype;g.target=null;g.relatedTarget=null;g.offsetX=0;g.offsetY=0;g.clientX=0;g.clientY=0;g.screenX=0;g.screenY=0;g.button=0;g.keyCode=0;g.charCode=0;g.ctrlKey=!1;g.altKey=!1;g.shiftKey=!1;g.metaKey=!1;
g.P=function(a,b){var c=this.type=a.type;I.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(D){var f;a:{try{Ya(d.nodeName);f=!0;break a}catch(e){}f=!1}f||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=E||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=E||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:
a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;delete this.U;delete this.t};g.d=function(){Za.h.d.call(this);this.relatedTarget=this.currentTarget=this.target=null};function $a(){}var ab=0;g=$a.prototype;g.key=0;g.u=!1;g.la=!1;g.P=function(a,b,c,d,f,e){if(s(a))this.wa=!0;else if(a&&a.handleEvent&&s(a.handleEvent))this.wa=!1;else throw Error("Invalid listener argument");this.D=a;this.Aa=b;this.src=c;this.type=d;this.I=!!f;this.ea=e;this.la=!1;this.key=++ab;this.u=!1};g.handleEvent=function(a){return this.wa?this.D.call(this.ea||this.src,a):this.D.handleEvent.call(this.D,a)};function bb(a){var b=J,c;for(c in b)a.call(void 0,b[c],c,b)}function cb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function db(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var eb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fb(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<eb.length;e++)c=eb[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var K={},L={},J={},M={};
function N(a,b,c,d,f){if(b){if("array"==ea(b)){for(var e=0;e<b.length;e++)N(a,b[e],c,d,f);return null}d=!!d;var h=L;b in h||(h[b]={c:0,f:0});h=h[b];d in h||(h[d]={c:0,f:0},h.c++);var h=h[d],n=t(a),p;h.f++;if(h[n])for(p=h[n],e=0;e<p.length;e++){if(h=p[e],h.D==c&&h.ea==f){if(h.u)break;return p[e].key}}else p=h[n]=[],h.c++;e=gb();e.src=a;h=new $a;h.P(c,e,a,b,d,f);c=h.key;e.key=c;p.push(h);K[c]=h;J[n]||(J[n]=[]);J[n].push(h);a.addEventListener?a!=k&&a.qa||a.addEventListener(b,e,d):a.attachEvent(b in M?
M[b]:M[b]="on"+b,e);return c}throw Error("Invalid event type");}function gb(){var a=hb,b=Wa?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function ib(a,b,c,d,f){if("array"==ea(b))for(var e=0;e<b.length;e++)ib(a,b[e],c,d,f);else{d=!!d;a:{e=L;if(b in e&&(e=e[b],d in e&&(e=e[d],a=t(a),e[a]))){a=e[a];break a}a=null}if(a)for(e=0;e<a.length;e++)if(a[e].D==c&&a[e].I==d&&a[e].ea==f){O(a[e].key);break}}}
function O(a){if(!K[a])return!1;var b=K[a];if(b.u)return!1;var c=b.src,d=b.type,f=b.Aa,e=b.I;c.removeEventListener?c!=k&&c.qa||c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in M?M[d]:M[d]="on"+d,f);c=t(c);f=L[d][e][c];if(J[c]){var h=J[c];Aa(h,b);0==h.length&&delete J[c]}b.u=!0;f.ya=!0;jb(d,e,c,f);delete K[a];return!0}
function jb(a,b,c,d){if(!d.S&&d.ya){for(var f=0,e=0;f<d.length;f++)d[f].u?d[f].Aa.src=null:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.ya=!1;0==e&&(delete L[a][b][c],L[a][b].c--,0==L[a][b].c&&(delete L[a][b],L[a].c--),0==L[a].c&&delete L[a])}}function kb(a){var b,c=0,d=null==b;b=!!b;if(null==a)bb(function(a){for(var e=a.length-1;0<=e;e--){var f=a[e];if(d||b==f.I)O(f.key),c++}});else if(a=t(a),J[a]){a=J[a];for(var f=a.length-1;0<=f;f--){var e=a[f];if(d||b==e.I)O(e.key),c++}}}
function lb(a,b,c,d,f){var e=1;b=t(b);if(a[b]){a.f--;a=a[b];a.S?a.S++:a.S=1;try{for(var h=a.length,n=0;n<h;n++){var p=a[n];p&&!p.u&&(e&=!1!==mb(p,f))}}finally{a.S--,jb(c,d,b,a)}}return Boolean(e)}function mb(a,b){var c=a.handleEvent(b);a.la&&O(a.key);return c}
function hb(a,b){if(!K[a])return!0;var c=K[a],d=c.type,f=L;if(!(d in f))return!0;var f=f[d],e,h;if(!Wa){e=b||ba("window.event");var n=!0 in f,p=!1 in f;if(n){if(0>e.keyCode||void 0!=e.returnValue)return!0;a:{var m=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(A){m=!0}if(m||void 0==e.returnValue)e.returnValue=!0}}m=new Za;m.P(e,this);e=!0;try{if(n){for(var r=[],ca=m.currentTarget;ca;ca=ca.parentNode)r.push(ca);h=f[!0];h.f=h.c;for(var x=r.length-1;!m.t&&0<=x&&h.f;x--)m.currentTarget=r[x],e&=lb(h,
r[x],d,!0,m);if(p)for(h=f[!1],h.f=h.c,x=0;!m.t&&x<r.length&&h.f;x++)m.currentTarget=r[x],e&=lb(h,r[x],d,!1,m)}else e=mb(c,m)}finally{r&&(r.length=0),m.m()}return e}d=new Za(b,this);try{e=mb(c,d)}finally{d.m()}return e};var nb;!C||Va();!D&&!C||C&&Va()||D&&G("1.9.1");C&&G("9");function ob(a){return(a=a.className)&&"function"==typeof a.split?a.split(/\s+/):[]}function pb(a,b){var c=ob(a),d;d=c;for(var f=Ca(arguments,1),e=0,h=0;h<f.length;h++)y(d,f[h])||(d.push(f[h]),e++);d=e==f.length;a.className=c.join(" ");return d}function qb(a,b){var c=ob(a),d;d=c;for(var f=Ca(arguments,1),e=0,h=0;h<d.length;h++)y(f,d[h])&&(Ba(d,h--,1),e++);d=e==f.length;a.className=c.join(" ");return d};function P(a,b){this.width=a;this.height=b}P.prototype.pa=function(){return new P(this.width,this.height)};P.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};P.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};function Q(a){return q(a)?document.getElementById(a):a}function rb(a){var b=document;return sb(b)?b.querySelectorAll("."+a):b.getElementsByClassName?b.getElementsByClassName(a):tb(a)}function sb(a){return a.querySelectorAll&&a.querySelector&&(!E||"CSS1Compat"==document.compatMode||G("528"))}
function tb(a){var b,c,d,f;b=document;if(sb(b)&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var e=b.getElementsByClassName(a);return e}e=b.getElementsByTagName("*");if(a){f={};for(c=d=0;b=e[c];c++){var h=b.className;"function"==typeof h.split&&y(h.split(/\s+/),a)&&(f[d++]=b)}f.length=d;return f}return e}
function ub(a){var b=a.document;if(E&&!G("500")&&!Ka){"undefined"==typeof a.innerHeight&&(a=window);var b=a.innerHeight,c=a.document.documentElement.scrollHeight;a==a.top&&c<b&&(b-=15);return new P(a.innerWidth,b)}a="CSS1Compat"==b.compatMode?b.documentElement:b.body;return new P(a.clientWidth,a.clientHeight)}function vb(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function wb(a){this.ra=a||k.document||document}wb.prototype.A=function(a){return q(a)?this.ra.getElementById(a):a};
wb.prototype.createTextNode=function(a){return this.ra.createTextNode(a)};wb.prototype.appendChild=function(a,b){a.appendChild(b)};function xb(a){var b=a.offsetWidth,c=a.offsetHeight,d=E&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(b=a.getBoundingClientRect(),C&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop),new P(b.right-b.left,b.bottom-b.top)):new P(b,c)};function R(){}v(R,H);g=R.prototype;g.qa=!0;g.T=null;g.ia=function(a){this.T=a};g.addEventListener=function(a,b,c,d){N(this,a,b,c,d)};g.removeEventListener=function(a,b,c,d){ib(this,a,b,c,d)};
g.dispatchEvent=function(a){var b=a.type||a,c=L;if(b in c){if(q(a))a=new I(a,this);else if(a instanceof I)a.target=a.target||this;else{var d=a;a=new I(b,this);fb(a,d)}var d=1,f,c=c[b],b=!0 in c,e;if(b){f=[];for(e=this;e;e=e.T)f.push(e);e=c[!0];e.f=e.c;for(var h=f.length-1;!a.t&&0<=h&&e.f;h--)a.currentTarget=f[h],d&=lb(e,f[h],a.type,!0,a)&&!1!=a.U}if(!1 in c)if(e=c[!1],e.f=e.c,b)for(h=0;!a.t&&h<f.length&&e.f;h++)a.currentTarget=f[h],d&=lb(e,f[h],a.type,!1,a)&&!1!=a.U;else for(f=this;!a.t&&f&&e.f;f=
f.T)a.currentTarget=f,d&=lb(e,f,a.type,!1,a)&&!1!=a.U;a=Boolean(d)}else a=!0;return a};g.d=function(){R.h.d.call(this);kb(this);this.T=null};C||E&&G("525");function yb(a){ya(a.b,O);a.b.length=0};function zb(){}l(zb);zb.prototype.Ka=0;zb.n();function S(a){a||nb||(nb=new wb)}v(S,R);g=S.prototype;g.Ga=zb.n();function Ab(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}g.va=null;g.N=!1;g.s=null;g.i=null;g.l=null;g.J=null;g.Pa=!1;g.A=function(){return this.s};g.getParent=function(){return this.i};
g.ia=function(a){if(this.i&&this.i!=a)throw Error("Method not supported");S.h.ia.call(this,a)};g.v=function(){Bb(this,function(a){a.N&&a.v()});this.M&&yb(this.M);this.N=!1};g.d=function(){S.h.d.call(this);this.N&&this.v();this.M&&(this.M.m(),delete this.M);Bb(this,function(a){a.m()});!this.Pa&&this.s&&vb(this.s);this.i=this.s=this.J=this.l=null};function Bb(a,b){a.l&&ya(a.l,b,void 0)}
g.removeChild=function(a,b){if(a){var c=q(a)?a:a.va||(a.va=":"+(a.Ga.Ka++).toString(36)),d;this.J&&c?(d=this.J,d=(c in d?d[c]:void 0)||null):d=null;a=d;if(c&&a){d=this.J;c in d&&delete d[c];Aa(this.l,a);b&&(a.v(),a.s&&vb(a.s));c=a;if(null==c)throw Error("Unable to set parent component");c.i=null;S.h.ia.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};function T(){}var Cb;l(T);g=T.prototype;g.K=function(a,b,c){if(a=a.A?a.A():a)if(C&&!G("7")){var d=Db(ob(a),b);d.push(b);ka(c?pb:qb,a).apply(null,d)}else c?pb(a,b):qb(a,b)};g.H=function(a,b,c){var d=a.A();if(d){var f=this.ba(b);f&&this.K(a,f,c);Cb||(Cb={1:"disabled",8:"selected",16:"checked",64:"expanded"});(a=Cb[b])&&d.setAttribute("aria-"+a,c)}};g.ca=function(a){return a.A()};g.w=function(){return"goog-control"};
function Db(a,b){var c=[];b&&(a=a.concat([b]));ya([],function(d){!za(d,ka(y,a))||b&&!y(d,b)||c.push(d.join("_"))});return c}g.ba=function(a){if(!this.na){var b=this.w();this.na={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.na[a]};function Eb(a,b){if(!a)throw Error("Invalid class name "+a);if(!s(b))throw Error("Invalid decorator function "+b);}var Fb={};function U(a,b,c){S.call(this,c);if(!(a=b)){a=this.constructor;for(var d;a;){d=t(a);if(d=Fb[d])break;a=a.h?a.h.constructor:null}a=d?s(d.n)?d.n():new d:null}this.G=a}v(U,S);g=U.prototype;g.g=0;g.p=39;g.ja=255;g.Ma=0;g.Oa=!0;g.j=null;g.ca=function(){return this.G.ca(this)};g.K=function(a,b){b?a&&(this.j?y(this.j,a)||this.j.push(a):this.j=[a],this.G.K(this,a,!0)):a&&this.j&&(Aa(this.j,a),0==this.j.length&&(this.j=null),this.G.K(this,a,!1))};
g.v=function(){U.h.v.call(this);this.Q&&this.Q.detach();if(this.Oa&&this.isEnabled()){var a;if(this.p&32&&(a=this.ca())){if(this.g&32){try{a.blur()}catch(b){}this.g&32&&(this.ja&4&&this.p&4&&this.setActive(!1),this.ja&32&&this.p&32&&Gb(this,32,!1)&&this.H(32,!1))}var c;(c=a.getAttributeNode("tabindex"))&&c.specified?(c=a.tabIndex,c="number"==typeof c&&0<=c&&32768>c):c=!1;!1!=c&&(a.tabIndex=-1,a.removeAttribute("tabIndex"))}}};
g.d=function(){U.h.d.call(this);this.Q&&(this.Q.m(),delete this.Q);delete this.G;this.j=null};g.isEnabled=function(){return!(this.g&1)};g.setActive=function(a){Gb(this,4,a)&&this.H(4,a)};g.H=function(a,b){this.p&a&&b!=!!(this.g&a)&&(this.G.H(this,a,b),this.g=b?this.g|a:this.g&~a)};function V(a,b){if(a.N&&a.g&b)throw Error("Component already rendered");a.g&b&&a.H(b,!1);a.p&=~b}function Gb(a,b,c){return!!(a.p&b)&&!!(a.g&b)!=c&&(!(a.Ma&b)||a.dispatchEvent(Ab(b,c)))&&!a.$}
if(!s(U))throw Error("Invalid component class "+U);if(!s(T))throw Error("Invalid renderer class "+T);var Hb=t(U);Fb[Hb]=T;Eb("goog-control",function(){return new U});function Ib(){}v(Ib,T);l(Ib);Ib.prototype.w=function(){return"goog-menuseparator"};function Jb(a,b){U.call(this,0,a||Ib.n(),b);V(this,1);V(this,2);V(this,4);V(this,32);this.g=1}v(Jb,U);Eb("goog-menuseparator",function(){return new Jb});function Kb(){}v(Kb,T);l(Kb);Kb.prototype.w=function(){return"goog-menuheader"};function Lb(a,b,c){U.call(this,0,c||Kb.n(),b);V(this,1);V(this,2);V(this,4);V(this,32);this.g=1}v(Lb,U);Eb("goog-menuheader",function(){return new Lb});function W(){this.oa=[]}v(W,T);l(W);W.prototype.ba=function(a){switch(a){case 2:return a=this.oa[0],a||(a=this.w()+"-highlight",this.oa[0]=a),a;case 16:case 8:return"goog-option-selected";default:return W.h.ba.call(this,a)}};W.prototype.w=function(){return"goog-menuitem"};function Mb(a,b,c,d){U.call(this,0,d||W.n(),c)}v(Mb,U);Eb("goog-menuitem",function(){return new Mb});Eb("goog-menuseparator",function(){return new Jb});var Nb=k.window;function Ob(a){if("function"==typeof a.L)return a.L();if(q(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return cb(a)}function Pb(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(fa(a)||q(a))ya(a,b,c);else{var d;if("function"==typeof a.da)d=a.da();else if("function"!=typeof a.L)if(fa(a)||q(a)){d=[];for(var f=a.length,e=0;e<f;e++)d.push(e)}else d=db(a);else d=void 0;for(var f=Ob(a),e=f.length,h=0;h<e;h++)b.call(c,f[h],d&&d[h],a)}};function Qb(a,b){this.F={};this.b=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Qb?(c=a.da(),d=a.L()):(c=db(a),d=cb(a));for(var f=0;f<c.length;f++)this.set(c[f],d[f])}}g=Qb.prototype;g.c=0;g.L=function(){Rb(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.F[this.b[b]]);return a};g.da=function(){Rb(this);return this.b.concat()};
function Rb(a){if(a.c!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.F,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.c!=a.b.length){for(var f={},c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(f,d)||(a.b[c++]=d,f[d]=1),b++;a.b.length=c}}g.set=function(a,b){Object.prototype.hasOwnProperty.call(this.F,a)||(this.c++,this.b.push(a));this.F[a]=b};g.pa=function(){return new Qb(this)};function Sb(a){return Tb(a||arguments.callee.caller,[])}
function Tb(a,b){var c=[];if(y(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(Ub(a)+"(");for(var d=a.arguments,f=0;f<d.length;f++){0<f&&c.push(", ");var e;e=d[f];switch(typeof e){case "object":e=e?"object":"null";break;case "string":break;case "number":e=String(e);break;case "boolean":e=e?"true":"false";break;case "function":e=(e=Ub(e))?e:"[fn]";break;default:e=typeof e}40<e.length&&(e=e.substr(0,40)+"...");c.push(e)}b.push(a);c.push(")\n");try{c.push(Tb(a.caller,b))}catch(h){c.push("[exception trying to get caller]\n")}}else a?
c.push("[...long stack...]"):c.push("[end]");return c.join("")}function Ub(a){if(Vb[a])return Vb[a];a=String(a);if(!Vb[a]){var b=/function ([^\(]+)/.exec(a);Vb[a]=b?b[1]:"[Anonymous]"}return Vb[a]}var Vb={};function Wb(a,b,c,d,f){this.reset(a,b,c,d,f)}Wb.prototype.ta=null;Wb.prototype.sa=null;var Xb=0;Wb.prototype.reset=function(a,b,c,d,f){"number"==typeof f||Xb++;d||la();this.C=a;this.Ia=b;delete this.ta;delete this.sa};Wb.prototype.Ca=function(a){this.C=a};function X(a){this.Ja=a}X.prototype.i=null;X.prototype.C=null;X.prototype.l=null;X.prototype.ua=null;function Yb(a,b){this.name=a;this.value=b}Yb.prototype.toString=function(){return this.name};var Zb=new Yb("SEVERE",1E3),$b=new Yb("WARNING",900),ac=new Yb("CONFIG",700),bc=new Yb("FINE",500);X.prototype.getParent=function(){return this.i};X.prototype.Ca=function(a){this.C=a};function cc(a){if(a.C)return a.C;if(a.i)return cc(a.i);wa("Root logger has no level set.");return null}
X.prototype.log=function(a,b,c){if(a.value>=cc(this).value)for(a=this.Ea(a,b,c),b="log:"+a.Ia,k.console&&(k.console.timeStamp?k.console.timeStamp(b):k.console.markTimeline&&k.console.markTimeline(b)),k.msWriteProfilerMark&&k.msWriteProfilerMark(b),b=this;b;){c=b;var d=a;if(c.ua)for(var f=0,e=void 0;e=c.ua[f];f++)e(d);b=b.getParent()}};
X.prototype.Ea=function(a,b,c){var d=new Wb(a,String(b),this.Ja);if(c){d.ta=c;var f;var e=arguments.callee.caller;try{var h;var n=ba("window.location.href");if(q(c))h={message:c,name:"Unknown error",lineNumber:"Not available",fileName:n,stack:"Not available"};else{var p,m,A=!1;try{p=c.lineNumber||c.Ra||"Not available"}catch(r){p="Not available",A=!0}try{m=c.fileName||c.filename||c.sourceURL||n}catch(ca){m="Not available",A=!0}h=!A&&c.lineNumber&&c.fileName&&c.stack?c:{message:c.message,name:c.name,
lineNumber:p,fileName:m,stack:c.stack||"Not available"}}f="Message: "+oa(h.message)+'\nUrl: <a href="view-source:'+h.fileName+'" target="_new">'+h.fileName+"</a>\nLine: "+h.lineNumber+"\n\nBrowser stack:\n"+oa(h.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+oa(Sb(e)+"-> ")}catch(x){f="Exception trying to expose exception! You win, we lose. "+x}d.sa=f}return d};function Y(a,b){a.log(bc,b,void 0)}var dc={},ec=null;
function fc(a){ec||(ec=new X(""),dc[""]=ec,ec.Ca(ac));var b;if(!(b=dc[a])){b=new X(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=fc(a.substr(0,c));c.l||(c.l={});c.l[d]=b;b.i=c;dc[a]=b}return b};function gc(){}gc.prototype.ka=null;function hc(a){var b;(b=a.ka)||(b={},ic(a)&&(b[0]=!0,b[1]=!0),b=a.ka=b);return b};var jc;function kc(){}v(kc,gc);function lc(a){return(a=ic(a))?new ActiveXObject(a):new XMLHttpRequest}kc.prototype.fa=null;
function ic(a){if(!a.fa&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.fa=d}catch(f){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.fa}jc=new kc;var mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");function nc(a){this.headers=new Qb;this.Z=a||null}v(nc,R);nc.prototype.e=fc("goog.net.XhrIo");var oc=/^https?$/i,pc=[];function qc(a,b){var c=new nc;pc.push(c);a&&N(c,"complete",a);N(c,"ready",ka(rc,c));c.send("/titlepagesave","POST",b,void 0)}function rc(a){a.m();Aa(pc,a)}g=nc.prototype;g.k=!1;g.a=null;g.Y=null;g.ha="";g.xa="";g.B="";g.aa=!1;g.O=!1;g.ga=!1;g.o=!1;g.W=0;g.q=null;g.Ba="";g.Qa=!1;
g.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request");b=b?b.toUpperCase():"GET";this.ha=a;this.B="";this.xa=b;this.aa=!1;this.k=!0;this.a=this.Z?lc(this.Z):lc(jc);this.Y=this.Z?hc(this.Z):hc(jc);this.a.onreadystatechange=u(this.za,this);try{Y(this.e,Z(this,"Opening Xhr")),this.ga=!0,this.a.open(b,a,!0),this.ga=!1}catch(f){Y(this.e,Z(this,"Error opening Xhr: "+f.message));sc(this,f);return}a=c||"";var e=this.headers.pa();d&&Pb(d,function(a,b){e.set(b,
a)});"POST"!=b||Object.prototype.hasOwnProperty.call(e.F,"Content-Type")||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");Pb(e,function(a,b){this.a.setRequestHeader(b,a)},this);this.Ba&&(this.a.responseType=this.Ba);"withCredentials"in this.a&&(this.a.withCredentials=this.Qa);try{this.q&&(Nb.clearTimeout(this.q),this.q=null),0<this.W&&(Y(this.e,Z(this,"Will abort after "+this.W+"ms if incomplete")),this.q=Nb.setTimeout(u(this.Na,this),this.W)),Y(this.e,Z(this,"Sending request")),
this.O=!0,this.a.send(a),this.O=!1}catch(h){Y(this.e,Z(this,"Send error: "+h.message)),sc(this,h)}};g.Na=function(){"undefined"!=typeof aa&&this.a&&(this.B="Timed out after "+this.W+"ms, aborting",Y(this.e,Z(this,this.B)),this.dispatchEvent("timeout"),this.abort(8))};function sc(a,b){a.k=!1;a.a&&(a.o=!0,a.a.abort(),a.o=!1);a.B=b;tc(a);uc(a)}function tc(a){a.aa||(a.aa=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
g.abort=function(){this.a&&this.k&&(Y(this.e,Z(this,"Aborting")),this.k=!1,this.o=!0,this.a.abort(),this.o=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),uc(this))};g.d=function(){this.a&&(this.k&&(this.k=!1,this.o=!0,this.a.abort(),this.o=!1),uc(this,!0));nc.h.d.call(this)};g.za=function(){this.ga||this.O||this.o?vc(this):this.La()};g.La=function(){vc(this)};
function vc(a){if(a.k&&"undefined"!=typeof aa)if(a.Y[1]&&4==wc(a)&&2==xc(a))Y(a.e,Z(a,"Local request error detected and ignored"));else if(a.O&&4==wc(a))Nb.setTimeout(u(a.za,a),0);else if(a.dispatchEvent("readystatechange"),4==wc(a)){Y(a.e,Z(a,"Request complete"));a.k=!1;var b=xc(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)b=String(a.ha).match(mc)[1]||null,!b&&self.location&&(b=self.location.protocol,b=b.substr(0,b.length-1)),
b=!oc.test(b?b.toLowerCase():"");c=b}if(c)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var d;try{d=2<wc(a)?a.a.statusText:""}catch(f){Y(a.e,"Can not get status: "+f.message),d=""}a.B=d+" ["+xc(a)+"]";tc(a)}uc(a)}}function uc(a,b){if(a.a){var c=a.a,d=a.Y[0]?da:null;a.a=null;a.Y=null;a.q&&(Nb.clearTimeout(a.q),a.q=null);b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(f){a.e.log(Zb,"Problem encountered resetting onreadystatechange: "+f.message,void 0)}}}
function wc(a){return a.a?a.a.readyState:0}function xc(a){try{return 2<wc(a)?a.a.status:-1}catch(b){return a.e.log($b,"Can not get status: "+b.message,void 0),-1}}function Z(a,b){return b+" ["+a.xa+" "+a.ha+" "+xc(a)+"]"};function yc(a){this.r=a||window;this.R=N(this.r,"resize",this.Fa,!1,this);this.V=ub(this.r||window);if(E&&Ma||Ja&&this.r.self!=this.r.top)this.X=window.setInterval(u(this.ma,this),zc)}v(yc,R);var zc=500;g=yc.prototype;g.R=null;g.r=null;g.V=null;g.X=null;g.d=function(){yc.h.d.call(this);this.R&&(O(this.R),this.R=null);this.X&&(window.clearInterval(this.X),this.X=null);this.V=this.r=null};g.Fa=function(){this.ma()};
g.ma=function(){var a=ub(this.r||window),b=this.V;a==b||a&&b&&a.width==b.width&&a.height==b.height||(this.V=a,this.dispatchEvent("resize"))};window.closeTitlePage=Ac;window.save=Bc;window.update=Cc;var $=rb("checkbox");for(i in $)"checkbox"==$[i].type&&N($[i],"click",Cc);$=rb("textbox");for(i in $)"INPUT"!=$[i].nodeName&&"TEXTAREA"!=$[i].nodeName||N($[i],"keyup",Cc);var Dc=new yc;N(Dc,"resize",Ec);Ec();
function Ec(){var a=ub(window),b;b=Q("controls");var c;b:{c=9==b.nodeType?b:b.ownerDocument||b.document;if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(b,null))){c=c.display||c.getPropertyValue("display");break b}c=""}if("none"!=(c||(b.currentStyle?b.currentStyle.display:null)||b.style&&b.style.display))b=xb(b);else{c=b.style;var d=c.display,f=c.visibility,e=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";b=xb(b);c.display=d;c.position=
e;c.visibility=f}Q("pageContainer").style.width=a.width-b.width+"px";Q("page").style.visibility="visible"}function Ac(){window.close()}
function Bc(){var a=window.location.href.split("=")[1];if("Demo"==a)alert("Sorry, but you'll have to login to use these functions!");else{var b=[["title","title_input"],["authorOne","authorOne_input"],["authorTwo","authorTwo_input"],["authorTwoChecked","authorTwo_checkbox"],["authorThree","authorThree_input"],["authorThreeChecked","authorThree_checkbox"],["based_on","based_on_input"],["based_onChecked","based_on_checkbox"],["address","address_input"],["addressChecked","address_checkbox"],["phone",
"phone_input"],["phoneChecked","phone_checkbox"],["cell","cell_input"],["cellChecked","cell_checkbox"],["email","email_input"],["emailChecked","email_checkbox"],["registered","registered_input"],["registeredChecked","registered_checkbox"],["other","other_input"],["otherChecked","other_checkbox"]],c="";for(i in b){var d=document.getElementById(b[i][1]),f="";"checkbox"==d.type?f=d.checked?"checked":"":void 0!=d.value&&(f=d.value,f=f.replace(RegExp("\\n","g"),"LINEBREAK"));""!=c&&(c+="&");c+=b[i][0]+
"="+encodeURIComponent(f)}qc(function(){Q("saveButton").value="Saved"},c+("&resource_id="+a));Q("saveButton").disabled=!0;Q("saveButton").value="Saving..."}}
function Cc(){Q("saveButton").value="Save";Q("saveButton").disabled=!1;Q("title").innerHTML="";Q("title").appendChild(document.createTextNode(Q("title_input").value));Q("authorOne").innerHTML="";Q("authorOne").appendChild(document.createTextNode(Q("authorOne_input").value));var a=document.getElementsByTagName("input");for(i in a)if("checkbox"==a[i].type){var b=!0==a[i].checked?!0:!1,c=a[i].parentNode,c=c.previousSibling;"#text"==c.nodeName&&(c=c.previousSibling);c=c.firstChild;"#text"==c.nodeName&&
(c=c.nextSibling);""!=c.value||b||(c.value="none");c=c.value;"address_checkbox"==a[i].id||"based_on_checkbox"==a[i].id?(c=c.replace(RegExp("\\n","g"),"<br>"),Q(a[i].id.replace("_checkbox","")).innerHTML=c):(Q(a[i].id.replace("_checkbox","")).innerHTML="",Q(a[i].id.replace("_checkbox","")).appendChild(document.createTextNode(c)));b?(Q(a[i].id.replace("_checkbox","_input")).disabled=!1,Q(a[i].id.replace("_checkbox","")).style.visibility="visible"):(Q(a[i].id.replace("_checkbox","_input")).disabled=
!0,Q(a[i].id.replace("_checkbox","")).style.visibility="hidden")}};