define("@linkedin/xmessageformat-js",["exports","@linkedin/jsecure"],(function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.PossessiveFormatter=e.PluralFormatter=e.NumberFormatter=e.NameFormatter=e.NAME_STYLES=e.DateFormatter=e.DEFAULT_TIME_PATTERN=e.DEFAULT_NAME_STYLE=e.DEFAULT_DATE_PATTERN=e.DATE_FORMAT_MAP=e.ChooserFormatter=void 0
e.Rtl=function(){return{isRtl:(n=" \n\r\t\f \u2028\u2029".split(""),i="~!@#$%^&*()_+`1234567890-={}|[]\\:\";'<>?,./".split(""),o=n.concat(i),t=(e=/&(?:(lt|gt|amp|quot|nbsp)|#x([\da-f]{1,4})|#(\d{1,5}));/gi,function(n){return null==n?null:"".concat(n).replace(e,mi)}),a=ui(o,"֐","ۿ"),function(e){return-1!==a(t(e))})}
var e
var n,i,o,t,a}
e.TruncationFormatter=e.TimeFormatter=e.TIME_FORMAT_MAP=void 0
e.default=Ji
e.formatCurrency=function(e,n,i){return _i({amount:e,currencyCode:n},i)}
e.formatDate=Dn
e.formatInteger=function(e,n){return si(e,n,{parameters:{integer:{key:"integer",value:[],delimiter:"",order:-1}}})}
e.formatName=ti
e.formatNumber=function(e,n){return si(e,n)}
e.formatTime=fi
e.fromString=function(e,n){return Qi(Ki(e),n)}
e.getLogMissingPlaceholderValEnabled=eo
e.getOutputFilter=function(){return Xi}
e.getRules=jn
e.getSantizeUrl=pe
e.getUserDataFilter=function(){return ce()}
e.isRule=Sn
e.makeInterpolator=Qi
e.render=function(e,n,i){if(1===e.length&&"string"==typeof e[0])return Xi(e[0])
return Xi(Zi(e,n,i))}
e.setLogMissingPlaceholderValEnabled=function(e){$i=e}
e.setOutputFilter=function(e){Xi=e}
e.setSanitizeUrl=function(e){ue=e}
e.setUserDataFilter=function(e){de(e)}
e.toAst=Ki
function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&o(e,n)}function o(e,n){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},o(e,n)}function t(e){var n=a()
return function(){var i,o=r(e)
if(n){var t=r(this).constructor
i=Reflect.construct(o,arguments,t)}else i=o.apply(this,arguments)
return function(e,n){if(n&&("object"==u(n)||"function"==typeof n))return n
if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(this,i)}}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n]
for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},_.apply(null,arguments)}function s(e,n){var i=Object.keys(e)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{}
n%2?s(Object(i),!0).forEach((function(n){c(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function c(e,n,i){return(n=b(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=i){var o,t,a,r,_=[],s=!0,l=!1
try{if(a=(i=i.call(e)).next,0===n){if(Object(i)!==i)return
s=!1}else for(;!(s=(o=a.call(i)).done)&&(_.push(o.value),_.length!==n);s=!0);}catch(e){l=!0,t=e}finally{try{if(!s&&null!=i.return&&(r=i.return(),Object(r)!==r))return}finally{if(l)throw t}}return _}}(e,n)||function(e,n){if(e){if("string"==typeof e)return m(e,n)
var i={}.toString.call(e).slice(8,-1)
return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length)
for(var i=0,o=Array(n);i<n;i++)o[i]=e[i]
return o}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g(e,n){for(var i=0;i<n.length;i++){var o=n[i]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,b(o.key),o)}}function h(e,n,i){return n&&g(e.prototype,n),i&&g(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e){var n=function(e,n){if("object"!=u(e)||!e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var o=i.call(e,n||"default")
if("object"!=u(o))return o
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string")
return"symbol"==u(n)?n:n+""}var y=function(){function e(n){p(this,e)
this.source=n
this.index=0
this.cursor=n.charCodeAt(0)
this.previousCharCode=0
0===n.length&&(this.cursor=0)}h(e,[{key:"isEscaped",get:function(){return 92===this.previousCharCode}},{key:"hasNext",get:function(){return 0!==this.cursor}},{key:"currentChar",get:function(){return this.index<this.source.length?this.source.charAt(this.index):""}},{key:"currentCharCode",get:function(){return this.cursor}},{key:"next",value:function(){this.previousCharCode=this.cursor
this.index++
this.index<this.source.length?this.cursor=this.source.charCodeAt(this.index):this.cursor=0}},{key:"toString",value:function(){return"index ".concat(this.index,' in string "').concat(this.source,'"')}}])
return e}(),f="'",w=-1,v="",k=/[a-zA-Z]/,x=/[1-9]/,j=/[0-9]/,S=/[a-zA-Z0-9]/,T=/[a-zA-Z0-9_\-~.|\[\]\/]/,C=/[#]/,L={choice:/[#+<]/,plural:/[#+<]/},A={number:w,keyword:v},I="simple"
function P(e,n){throw new SyntaxError("XMessage parsing error: ".concat(e," at ").concat(n.toString()))}function N(e,n,i){var o={},t=function(e){for(var n=[],i=[],o=[];e.hasNext;){123===e.currentCharCode?n.push(e.currentChar):125===e.currentCharCode&&n.pop()
if(0===n.length&&124===e.currentCharCode){0===o.length&&P('Unexpected "|" in style list.',e)
i.push(o.join(v))
o.length=0
e.next()}else{o.push(e.currentChar)
e.next()}}if(o.length>0){i.push(o.join(v))
o.length=0}return i}(e)
t.map((function(e,o){return function(e,n,i){var o=C
"choice"===n&&(o=L.choice)
"plural"===n&&(o=L.plural)
for(var t=[],a="",r="",_=[];e.hasNext;){if(o.test(e.currentChar))if(0===t.length)P('Error parsing style key/value. Found delimiter "'.concat(e.currentChar,'" but expected key.'),e)
else if(""===r){r=t.join(v)
t.length=0
a=e.currentChar
e.next()}t.push(e.currentChar)
e.next()}if(""===a){r=t.join(v)
t.length=0}else{if(t.length>0){var s=t.join(v)
void 0!==s&&(_=R(s))}t.length=0}(r.startsWith(" ")||r.endsWith(" "))&&P("leading/trailing spaces not allowed in keys",e)
"map"===n&&""!==r&&void 0===_&&P('missing style value for "'.concat(r,'"'),e)
return{key:r,value:_,delimiter:a,order:i}}(new y(e),n,o+i)})).forEach((function(n,t){n.order=t+i
Object.prototype.hasOwnProperty.call(o,n.key)?P('Found duplicate style key "'.concat(n.key,'". Styles must have unique names.'),e):o[n.key]=n}))
return o}function E(e,n){switch(n){case"date":case"number":return function(e){for(var n={};e.hasNext;){for(var i=[];e.hasNext&&124!==e.currentCharCode;){i.push(e.currentChar)
e.next()}var o=i.join(v);(o.startsWith(" ")||o.endsWith(" "))&&P("leading/trailing spaces not allowed in values",e)
n[o]={key:o,value:null,delimiter:"",order:0}
e.hasNext&&e.next()}return n}(e)
default:return N(e,n,0)}}function q(e){var n=A,i=I,o=v,t={}
if(e.hasNext){n=function(e){var n=[],i=[],o=w,t=v,a=!1
if(48===e.currentCharCode){n.push(e.currentChar)
e.next()
a=!0}a&&e.hasNext&&44!==e.currentCharCode&&58!==e.currentCharCode&&P('Could not parse index; expected ":" or end of identifier but found "'.concat(e.currentChar,'"'),e)
if(x.test(e.currentChar))for(;e.currentChar&&j.test(e.currentChar);){n.push(e.currentChar)
e.next()}if(58===e.currentCharCode){e.next()
if(e.currentChar&&S.test(e.currentChar)){i.push(e.currentChar)
e.next()}else P('Expected letter (a-zA-Z) or number (0-9) but found "'.concat(e.currentChar,'"'),e)
for(;e.currentChar&&T.test(e.currentChar);){i.push(e.currentChar)
e.next()}}else 0===n.length&&e.hasNext&&P('Unexpected character; expected ":" but found "'.concat(e.currentChar,'"'),e)
if(44===e.currentCharCode||0===e.currentCharCode){o=parseInt(n.join(v),10)
isNaN(o)&&(o=w)
t=i.join(v)}else P('Unexpected character; expected "," or end of identifier but found "'.concat(e.currentChar,'"'),e)
return{number:o,keyword:t}}(e)
if(44===e.currentCharCode){e.next()
i=function(e){var n=[]
if(0===e.currentCharCode)P('Unable to parse type. Expected letter (a-zA-Z) but found end of identifier after ","',e)
else for(;e.currentChar&&k.test(e.currentChar);){n.push(e.currentChar)
e.next()}return n.join(v)}(e)
if(44===e.currentCharCode){e.next()
o=function(e,n){var i=v
if("list"===n){for(var o=[];e.hasNext&&44!==e.currentCharCode;){o.push(e.currentChar)
e.next()}i=o.join(v)}return i}(e,i)
44!==e.currentCharCode&&124!==e.currentCharCode||e.next()
e.currentCharCode&&(t=E(e,i))}}else i=I}else P("Error parsing placeholder. Unexpected end of input.",e)
e.currentCharCode&&P('Unexpected character "'.concat(e.currentChar,'".'),e)
return"list"===i?{type:"list",parameters:t,subType:o,index:n}:{type:i,parameters:t,index:n}}function D(e){return"string"==typeof e?e:(n=e.text,q(new y(n)))
var n}function R(e){if(-1===e.indexOf("{")&&-1===e.indexOf("'"))return[e]
for(var n=function(e){for(var n=[],i=[],o=[],t=new y(e),a=!1;t.hasNext;)if(92!==t.currentCharCode||t.isEscaped)if(t.isEscaped){o.push(t.currentChar)
t.next()}else{if(0===i.length&&39===t.currentCharCode){t.next()
if(39===t.currentCharCode){o.push(f)
t.next()
continue}a=!a
if(o.length>0){n.push(o.join(v))
o.length=0}}if(a){t.hasNext&&o.push(t.currentChar)
t.next()}else if(125!==t.currentCharCode||t.isEscaped||0!==i.length)if(123===t.currentCharCode){if(0===i.length){if(o.length>0){n.push(o.join(v))
o.length=0}}else o.push(t.currentChar)
i.push(t.currentChar)
t.next()}else if(125===t.currentCharCode){i.pop()
if(0===i.length)if(o.length>0){n.push({text:o.join(v)})
o.length=0}else P("Unexpected end of placeholder (found no content)",t)
else o.push(t.currentChar)
t.next()}else{t.hasNext&&o.push(t.currentChar)
t.next()}else P('Unexpected "}"',t)}else t.next()
0!==i.length&&P('Unexpected end of placeholder (unmatched "{")',t)
if(o.length>0){n.push(o.join(v))
o.length=0}return n}(e),i=[],o=0;o<n.length;++o){var t=n[o]
t&&(i[o]=D(t))}return i}var Y=function(){function e(n){p(this,e)
this.value=M(n)}h(e,[{key:"toString",value:function(){switch(u(this.value)){case"object":case"function":break
default:return String(this.value)}return""}}])
return e}()
function M(e){return e instanceof Y?e.value:e}function z(e){return e instanceof Y?e:new Y(e)}function O(e,n){var i=e.parameters
return Object.prototype.hasOwnProperty.call(i,n)}var F={eq:function(e,n){return e===n},gt:function(e,n){return e>n},gte:function(e,n){return e>=n},endsWith:function(e,n){return"".concat(e).endsWith("".concat(n))}}
function U(e,n,i){var o=""
if(e.parameters){var t=e.parameters
for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&!n.test(a)){o='Invalid style "'.concat(a,'"')
i&&(o+=" ".concat(i))
break}}return o}function W(e,n,i){var o,t="Placeholder must have exactly ".concat(n," style(s)"),a="Placeholder must have at least ".concat(n," style(s)"),r=Object.keys(e.parameters)
r.length>0?"eq"===i&&r.length!==n?o=t:"gte"===i&&r.length<n&&(o=a):n>0&&(o="Placeholder must have styles")
return o}function G(e,n){return W(e,n,"eq")}function B(e,n,i){var o
n.forEach((function(n){var t=e[n]
t&&("without"===i?(!t.value||t.value.length>0)&&(o='Invalid value for style "'.concat(n,'"')):"with"===i&&(t.value||(o='Style "'.concat(n,'" must have a value'))))}))
return o}function V(e,n){return B(e.parameters,n,"with")}var H=new RegExp("^(".concat(["text","title"].join("|"),")$"))
function J(e){var n=function(e,n){var i
if(e.parameters)for(var o=e.parameters,t=0;t<n.length;t++){var a=n[t]
a&&!Object.prototype.hasOwnProperty.call(o,a)&&(i='Missing required style key "'.concat(String(a),'"'))}else i="Placeholder must have styles"
return i}(e,["text"])
n||(n=U(e,H,'The anchor placeholder only supports "text" and "title" styles.'))
return n}var K=new RegExp("^(true|false)$")
function X(e){var n=function(e,n){return W(e,n,"gte")}(e,1)
n||(n=U(e,K,'The key must be either "true" or "false".'))
return n}var Q=/-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/,Z=/^(zero|singular|dual|few|many|plural|other)$/
var $=["name","text"],ee=/^(?:familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix)$/
var ne=/^(familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix|compact)$/
var ie=new RegExp("^(".concat(["sep","nosep"].join("|"),")$"))
function oe(e){var n=G(e,1)
n||(n=U(e,ie,"Invalid style for suffix placeholder."))
n||(n=function(e,n){return B(e.parameters,n,"without")}(e,["nosep","sep"]))
return n}var te=new RegExp("prefix|possessive|suffix")
function ae(e){switch(e.type){case"anchor":return J(e)
case"boolean":return X(e)
case"choice":return function(e){var n,i,o,t,a=e.parameters,r=!1,_=[]
for(t in a){var s=a[t]
s&&(_[s.order]=s)
Z.test(t)&&(r=!0)}for(var l=0;l<_.length;l++){var c=_[l]
if(c&&Q.test(c.key)){o=parseInt(c.key,10)
if(void 0===i)i=o
else{if(!(i<o)){n="Invalid number order. Cannot list ".concat(o," after ").concat(i,". Numbers must be ascending.")
break}i=o}}else if(c&&Z.test(c.key))r=!0
else if(c){n='Invalid category key "'.concat(c.key,'".')
break}}r&&(a.singular?a.plural||(n='Missing required category "plural"'):n='Missing required category "singular"')
return n}(e)
case"list":return function(e){var n
""!==e.subType&&-1===$.indexOf(e.subType)&&(n='Invalid list subtype "'.concat(e.subType,'"'))
n||(n=U(e,ee,"Invalid style for list placeholder."))
n||(n=V(e,["prefix","suffix"]))
return n}(e)
case"map":case"select":return function(e){var n
e.parameters?0===Object.keys(e.parameters).length&&(n="MapPlaceholder must have at least one style argument."):n="MapPlaceholder must have parameters."
return n}(e)
case"name":return function(e){var n=U(e,ne,"Invalid style for name placeholder.")
n||(n=V(e,["prefix","suffix"]))
return n}(e)
case"suffix":return oe(e)
case"text":return function(e){return U(e,te,"Invalid style for text placeholder.")}(e)
case"possessive":return function(e){return G(e,0)}(e)
default:return}}function re(e){var n
if("string"!=typeof e){n=function(e){return e?e.index?void 0:"Placeholder must have an index.":"Placeholder is invalid."}(e)
n||(n=ae(e))
if(n)throw new Error("".concat(n))
for(var i in e.parameters)if(_e(e.parameters,i)){var o=e.parameters[i]
o&&o.value&&o.value instanceof Array&&o.value.forEach(re)}}}function _e(e,n){return n in e}var se,le=/{(\d+)}/g
function ce(){return se}function de(e){se=function(n){if(n instanceof Y)return n
var i=e(n)
return new Y(i)}}function me(e){return n.default.htmlEncode(e)}de(me)
var ue=function(e){return n.default.sanitizeUrl(null!==e?e:void 0)}
function pe(){return ue}function ge(e){console.warn(e)}function he(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return e.replace(le,(function(e,i){if(i){var o=n[i]
if(o)return o}return e||""}))}function be(e,n){for(var i=e.length,o=0;o<i;++o){var t=e[o]
if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null}function ye(e,n){var i=e.parameters[n]
if(i)return i.value}function fe(e,n){var i=e.parameters
if(i)for(var o=Object.keys(i),t=0;t<o.length;t++){var a=i[o[t]]
if(a.order===n)return a}}function we(e,n,i,o,t){var a=ye(n,i),r=ce()
if("string"==typeof a&&""===a)return a
if(void 0!==a){for(var _="",s=0;s<a.length;++s){var l=a[s]
l&&(_+="string"==typeof l?l:M(r(e(l,o,t))))}return z(_)}return""}var ve="text",ke="href",xe="title",je="id",Se="class",Te=/['"<>]/
function Ce(e){if(null==e)return""
var n=String(M(e)),i=Te.test(n)?me(n):n
return null!==i?i:""}function Le(e){return null===e||"string"==typeof e}var Ae="true",Ie="false"
var Pe={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},Ne={month:"long"},Ee={month:"short",day:"numeric"},qe={year:"2-digit"},De={month:"short"},Re={month:"numeric"},Ye={weekday:"long"},Me={year:"numeric"},ze={year:"numeric",month:"short",day:"numeric"},Oe={weekday:"short"},Fe={day:"numeric"},Ue={year:"numeric",month:"numeric",day:"numeric"},We=De,Ge={month:"long"},Be=Ye,Ve=Oe,He=Fe,Je=Me,Ke=l(l({},Ne),He),Xe=l(l({},We),He),Qe=l(l(l({},Ne),He),Je),Ze=l(l(l({},We),He),Je),$e=l(l(l({},Ge),He),Je),en=l(l({},Ne),Je),nn=l(l({},We),Je),on={mdy:Qe,"mdy.long":Qe,"mdy.medium":Ze,"mdy.short":$e,my:en,"my.long":en,"my.medium":nn,"my.short":nn,md:Ke,"md.long":Ke,"md.medium":Xe,"md.short":Xe,m:Ne,"m.long":Ne,"m.medium":We,"m.short":Re,d:Be,"d.long":Be,"d.medium":Ve,"d.short":He,y:Je,"y.long":Je,"y.medium":Je,"y.short":Je},tn={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},an={year:"numeric",month:"long",day:"numeric"},rn={year:"numeric",month:"long"},_n={year:"numeric",month:"short"},sn={month:"long",day:"numeric"},ln={en_US:{intlLocale:"en",date:{intlOptions:{time:tn,"time.long":tn,"time.medium":tn,"time.short":{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},mdy:an,"mdy.long":an,"mdy.medium":ze,"mdy.short":Ue,my:rn,"my.long":rn,"my.medium":_n,"my.short":_n,md:sn,"md.long":sn,"md.medium":Ee,"md.short":Ee,m:Ge,"m.long":Ge,"m.medium":De,"m.short":Re,d:Ye,"d.long":Ye,"d.medium":Oe,"d.short":Fe,"d.narrow":{weekday:"narrow"},y:Me,"y.long":Me,"y.medium":Me,"y.short":qe}},possessive:{fallback:"’s",rules:{".*[Ss]$":"’",".*[A-RT-Z]$":"’s",".*[a-rt-z]$":"’s"}},list:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, and {1}",2:"{0} and {1}"}}}
function cn(e){return ln[e]}var dn=1,mn=[0,1,2,3,4,5],un=["SINGULAR","PLURAL","DUAL","FEW","MANY","ZERO"],pn={equals:{1:0},endsWith:{0:dn,1:dn,2:dn,3:dn,4:dn,5:dn,6:dn,7:dn,8:dn,9:dn}}
function gn(e,n,i){var o=Math.floor(e),t=function(e,n){var i
n.forEach((function(n){void 0!==n.arg&&null!==n.arg&&"gte"===n.comparison?(0,F.eq)(e,n.arg)&&(!i||n.arg>i.arg)&&(i=n):n.comparison&&(0,F[n.comparison])(e,n.arg)&&(!i||n.arg>i.arg)&&(i=n)}))
return i}(o,n)
if(t)return t
var a=function(e,n){if(e&&null!=n){var i="".concat(n)
if(e.equals&&void 0!==e.equals[i])return e.equals[i]
if(e.endsWith)for(var o=Math.min(2,i.length);o>0;o--){var t=i.slice(-1*o)
if(void 0!==e.endsWith[t])return e.endsWith[t]}}}(i,o)
if(void 0!==a){var r,_,s=mn.indexOf(a)
if(-1!==s){var l
r=null===(l=un[s])||void 0===l?void 0:l.toLowerCase()}for(var c=0;c<n.length;c++){var d=n[c]
if((null==d?void 0:d.category)===r)return d
"plural"===(null==d?void 0:d.category)&&(_=d)}if(_)return _}}var hn=e.ChooserFormatter=function(){function e(){p(this,e)}h(e,[{key:"format",value:function(e,n,i){var o,t,a=cn(i),r=a&&a.chooser?a.chooser:pn
n.some((function(e){return!!e.category}))?o=gn(e,n,r):n.forEach((function(n){if(n.comparison){(0,F[n.comparison])(e,n.arg)&&(!o||void 0!==n.arg&&void 0!==o.arg&&n.arg>o.arg)&&(o=n)}}))
return o?"function"==typeof(t=o.text)?t():t:""}}])
return e}()
var bn=function(){function e(){p(this,e)
this._formatters=new Map}h(e,[{key:"getWithDefault",value:function(e,n){return function(e,n,i){if(e.has(n))return e.get(n)
var o=i()
e.set(n,o)
return o}(this._formatters,e,n)}}])
return e}()
function yn(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(function(e){return e instanceof Date}(e)){if(n)return function(e){var n=new Date(e.getTime())
n.setMinutes(e.getMinutes()-e.getTimezoneOffset())
return n}(e)}else{if("number"==typeof e)return new Date(e)
if("string"==typeof e){var i=Date.parse(e)
return isNaN(i)?new Date(Number(e)):new Date(i)}}return e}function fn(e,n){var i=e[n]
return i?_(Object.create(null),i):void 0}var wn={time:Pe,"time.long":Pe,"time.medium":Pe,"time.short":{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}},vn={intlOptions:l(l({},on),wn)},kn={fmt_d:Ye,fmt_d_short:Fe,fmt_d_medium:Oe,fmt_d_long:Ye,fmt_m:Ge,fmt_m_short:Re,fmt_m_medium:De,fmt_m_long:Ge,fmt_y:Me,fmt_y_short:qe,fmt_md_medium:Ee,fmt_md_long:{month:"long",day:"numeric"},fmt_my_medium:{year:"numeric",month:"short"},fmt_my_long:{year:"numeric",month:"long"},fmt_mdy_short:Ue,fmt_mdy_medium:ze,fmt_mdy_long:{year:"numeric",month:"long",day:"numeric"},fmt_mdy_hm_short:{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},fmt_mdy_hm_long:Pe},xn={hm:{hour:"numeric",minute:"numeric"},hms:{hour:"numeric",minute:"numeric",second:"numeric"}}
function jn(e,n){var i=cn(e),o=null==i?void 0:i[n]
return o||i}function Sn(e){return"object"===u(e)&&!("intlLocale"in e)}function Tn(e){return e.split("_")[0]||"en"}function Cn(e){var n=cn(e)
return{intlLocale:(null==n?void 0:n.intlLocale)||Tn(e),localeData:n}}function Ln(e){return e<10?"0".concat(e):e}var An,In,Pn=e.DateFormatter=function(e){i(o,e)
var n=t(o)
function o(){p(this,o)
return n.apply(this,arguments)}h(o,[{key:"format",value:function(e,n,i,o){var t=Cn(n),a=t.localeData,r=t.intlLocale,_=((null==a?void 0:a.date)||vn).calendar
if("fmt_mdy_iso"===i)return function(e){return"".concat(e.getUTCFullYear(),"-").concat(Ln(e.getUTCMonth()+1),"-").concat(Ln(e.getUTCDate()))}(yn(e,o))
var s=fn(kn,i)
if(!s)throw new Error("[XMessage] Unsupported date format")
o||(s.timeZone="UTC")
return this.getWithDefault("".concat(r,"-").concat(i,"-").concat(!!s.timeZone),(function(){s.calendar=_
return new Intl.DateTimeFormat(r,s)})).format(yn(e))}}])
return o}(bn),Nn=e.DATE_FORMAT_MAP={fmt_d:"d",fmt_d_short:"d.short",fmt_d_narrow:"d.narrow",fmt_d_medium:"d.medium",fmt_d_long:"d.long",fmt_m:"m",fmt_m_short:"m.short",fmt_m_medium:"m.medium",fmt_m_long:"m.long",fmt_y:"y",fmt_y_short:"y.short",fmt_md_medium:"md.medium",fmt_md_long:"md.long",fmt_my_medium:"my.medium",fmt_my_long:"my.long",fmt_mdy_short:"mdy.short",fmt_mdy_medium:"mdy.medium",fmt_mdy_long:"mdy.long",fmt_mdy_hm_short:"time.short",fmt_mdy_hm_long:"time.long",fmt_mdy_iso:"iso",iso:"iso"},En={short:"fmt_mdy_short",medium:"fmt_mdy_medium",long:"fmt_mdy_long",full:"fmt_mdy_long"},qn=e.DEFAULT_DATE_PATTERN="fmt_mdy_medium"
function Dn(e,n,i,o){if(!Nn[n])if(function(e){return!!En[e]}(n)){console.log('The date pattern "'.concat(n,'" is deprecated, falling back to "').concat(En[n],'".'))
n=En[n]}else{console.log('Unknown date pattern "'.concat(n,'", falling back to "').concat(qn,'". Note: custom date patterns are not supported.'))
n=qn}An||(An=new Pn)
return An.format(e,i,n,o)}!function(e){e[e.FAMILIAR_NAME=0]="FAMILIAR_NAME"
e[e.FULL_NAME=1]="FULL_NAME"
e[e.LIST_VIEW=2]="LIST_VIEW"
e[e.MICROFORMAT=3]="MICROFORMAT"}(In||(In={}))
var Rn,Yn="FULL_NAME",Mn=e.DEFAULT_NAME_STYLE="familiar",zn=e.NAME_STYLES=["familiar","family","full","given","list","maiden","micro","salutation"],On=function(e,n){return"".concat(e," ").concat(n)},Fn=function(e,n){return"".concat(n," ").concat(e)},Un=function(e,n){return"".concat(n).concat(e)},Wn=function(e,n,i){return"".concat(i?" (".concat(i,")"):""," ")},Gn=function(e){return"".concat(e?" ".concat(e):"")},Bn=function(e){return function(n){return n?'<span class="'.concat(e,'">').concat(n,"</span>"):""}},Vn=Bn("given-name"),Hn=Bn("family-name"),Jn=Bn("additional-name"),Kn=function(e,n,i){return"".concat(e).concat(Gn(i)).concat(Gn(n))},Xn=function(e){return function(n,i,o){return"".concat(n).concat(Gn(i)).concat(o?" ".concat(e," ").concat(o):"")}},Qn=/(^\s+|\s+$)/g
function Zn(e,n){if(!e)return""
var i,o=e.replace(Qn,"")
n&&(o="".concat(null==(i=o)?null:i.toString().replace(/(.)/g,(function(e){return"<"===e?"&lt;":">"===e?"&gt;":"&"===e?"&amp;":'"'===e?"&quot;":"'"===e?"&#39;":"\\"===e?"&#92;":"="===e?"&#61;":"\0"===e?"�;":e}))))
return o}var $n=[19968,40895,12448,12543,65377,65439,12352,12447]
function ei(e,n){return function(e){if(!e)return!1
var n=e.charCodeAt(0)
return n>=44032&&n<=55215}(e.lastName)?"CJK":function(e){if(!e)return!1
for(var n=e.charCodeAt(0),i=0;i<$n.length;i+=2){var o=$n[i],t=$n[i+1]
if(o&&t&&n>=o&&n<=t)return!0}return!1}(e.lastName)?"ja_JP"===n?"CJK-ja_JP":"CJK":n}var ni=function(){function e(){p(this,e)
this.templates=[]}h(e,[{key:"preprocess",value:function(e,n,i){return[Vn(e),Hn(n),Jn(i)]}},{key:"add",value:function(e,n,i){var o=this.templates.indexOf(e)
if(-1===o)this.templates.push(e,[n,i])
else{this.templates[o+1].push(n,i)}}},{key:"run",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",i=arguments.length>2?arguments[2]:void 0,o=this.templates.indexOf(e)
if(o>-1){var t=this.templates[o+1],a=t.indexOf(n);-1===a&&(a=t.indexOf("default"))
return(0,t[a+1])(i[0]||"",i[1]||"",i[2]||"")}throw new Error("Could not find template function for ".concat(e," with ").concat(n," locale."))}}])
return e}(),ii=new ni
ii.add(In.FAMILIAR_NAME,"default",(function(e){return e}))
ii.add(In.FAMILIAR_NAME,"de_DE",On)
ii.add(In.FAMILIAR_NAME,"pl_PL",On)
ii.add(In.FAMILIAR_NAME,"hi_IN",On)
ii.add(In.FAMILIAR_NAME,"ro_RO",On)
ii.add(In.FAMILIAR_NAME,"tr_TR",On)
ii.add(In.FAMILIAR_NAME,"CJK",Un)
ii.add(In.FAMILIAR_NAME,"CJK-ja_JP",Fn)
ii.add(In.FULL_NAME,"default",(function(e,n,i){return"".concat(e).concat(Wn(0,0,i)).concat(n)}))
ii.add(In.FULL_NAME,"ar_AE",Kn)
ii.add(In.FULL_NAME,"hi_IN",Kn)
ii.add(In.FULL_NAME,"th_TH",Kn)
ii.add(In.FULL_NAME,"cs_CZ",(function(e,n,i){return"".concat(e).concat(Gn(n)).concat(i?" (roz. ".concat(i,")"):"")}))
ii.add(In.FULL_NAME,"de_DE",Xn("geb."))
ii.add(In.FULL_NAME,"CJK-ja_JP",(function(e,n,i){return"".concat(n).concat(Gn(e)).concat(Wn(0,0,i))}))
ii.add(In.FULL_NAME,"CJK",(function(e,n,i){return"".concat(Un(e,n)).concat(Wn(0,0,i))}))
ii.add(In.FULL_NAME,"ms_MY",(function(e,n,i){return"".concat(e).concat(Gn(n)).concat(Wn(0,0,i))}))
ii.add(In.FULL_NAME,"nl_NL",(function(e,n,i){return"".concat(e," ").concat(n).concat(i?"-".concat(i):"")}))
ii.add(In.FULL_NAME,"pl_PL",Xn("z d."))
ii.add(In.LIST_VIEW,"default",(function(e,n){return"".concat(n?"".concat(n,", "):"").concat(e)}))
ii.add(In.LIST_VIEW,"CJK",Un)
ii.add(In.LIST_VIEW,"CJK-ja_JP",Fn)
ii.add(In.LIST_VIEW,"ar_AE",On)
ii.add(In.LIST_VIEW,"hi_IN",On)
ii.add(In.LIST_VIEW,"in_ID",On)
ii.add(In.LIST_VIEW,"ms_MY",On)
ii.add(In.LIST_VIEW,"th_TH",On)
var oi=e.NameFormatter=function(){function e(){p(this,e)}h(e,[{key:"format",value:function(e,n,i){var o=function(e){var n="MICROFORMAT"
if(e){if(Array.isArray(e))return e.indexOf(n)>-1
if("string"==typeof e)return e===n}return!1}(n),t=o||!!e.lastNameWithHighlight,a=Zn(e.firstName,t),r=e.lastNameWithHighlight?Zn(e.lastNameWithHighlight,!1):Zn(e.lastName,t),_=Zn(e.maidenName,t),s=ei(e,i)
if(o){var l=d(ii.preprocess(a,r,_),3)
a=l[0]
r=l[1]
_=l[2]}var c=ii.run(function(e){if(!e)return In.FAMILIAR_NAME
var n="string"==typeof e?[e]:e
return Array.isArray(n)?n.indexOf("FULL_NAME")>-1?In.FULL_NAME:n.indexOf("LIST_VIEW")>-1?In.LIST_VIEW:In.FAMILIAR_NAME:In.FAMILIAR_NAME}(n),s,[a,r,_])
return c.replace(Qn,"")}}])
return e}()
function ti(e,n,i){var o=""
if(void 0!==e){var t={firstName:e.givenName||e.firstName,lastName:e.familyName||e.lastName,maidenName:e.maidenName},a=n||Mn
if(-1===zn.indexOf(a)){console.log('Unrecognized name format "'.concat(a,'", falling back to "').concat(Mn,'".'))
a=Mn}switch(a){case"given":o=t.firstName||""
break
case"family":o=t.lastName||""
break
case"maiden":o=t.maidenName||""
break
default:var r="full"===a?"FULL_NAME":"familiar"===a?"FAMILIAR_NAME":"list"===a?"LIST_VIEW":Yn
Rn||(Rn=new oi)
o=Rn.format(t,r,i)}}return o}var ai,ri=e.NumberFormatter=function(e){i(o,e)
var n=t(o)
function o(){p(this,o)
return n.apply(this,arguments)}h(o,[{key:"formatNumber",value:function(e,n,i){var o=Cn(n).intlLocale,t=i?Object.keys(i):[]
if(t.length>0&&t[0]&&!["integer","percent"].includes(t[0]))throw new Error("[XMessage] Unsupported number argument")
var a=t.length>1&&"compact"===t[1]?"compact":void 0,r=t.length>0&&"percent"===t[0]?t[0]:"decimal",_=t.length>0&&"integer"===t[0]?0:void 0
return this.getWithDefault("".concat(n,"-").concat(r,"-").concat(a,"-").concat(_),(function(){var e={style:r,maximumFractionDigits:_,notation:a}
return new Intl.NumberFormat(o,e)})).format(e)}},{key:"formatCurrency",value:function(e,n,i){var o=i?Object.keys(i.parameters):[],t=o.length>1?o[1]:"symbol",a=Cn(n).intlLocale,r=o.length>2?o[2]:void 0
return this.getWithDefault("".concat(n,"-").concat(e.currencyCode,"-").concat(t,"-").concat(r),(function(){var n={style:"currency",currency:e.currencyCode,currencyDisplay:t,notation:r}
return new Intl.NumberFormat(a,n)})).format(e.amount)}}])
return o}(bn)
function _i(e,n,i){ai||(ai=new ri)
return ai.formatCurrency(e,n,i)}function si(e,n,i){ai||(ai=new ri)
return ai.formatNumber(e,n,i?i.parameters:void 0)}var li=e.PluralFormatter=function(e){i(o,e)
var n=t(o)
function o(){p(this,o)
return n.apply(this,arguments)}h(o,[{key:"format",value:function(e,n){var i=Cn(n).intlLocale,o={}
return this.getWithDefault(i,(function(){return new Intl.PluralRules(i,o)})).select(e)}}])
return o}(bn),ci=e.PossessiveFormatter=function(){function e(){p(this,e)}h(e,[{key:"format",value:function(e,n){var i,o=cn(n),t=null==o?void 0:o.possessive
if(t){i=t.fallback
for(var a=Object.keys(t.rules),r=0;r<a.length;r++){var _=a[r]
if(_&&new RegExp(_).test(e)){i=t.rules[_]
break}}return i||""}return""}}])
return e}()
var di=["nbsp"," ","lt","<","gt",">","amp","&","quot",'"'],mi=function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o]
var t=i[0],a=i[1],r=i[2]
return t?di[di.indexOf(t)+1]||"":a?String.fromCharCode(parseInt(a,16)||65533):r?String.fromCharCode(parseInt(r,10)||65533):"�"}
function ui(e,n,i){return function(o){if(null==o)return-1
var t=0,a="\0",r=o.length
for(t=0;t<r;t++){a=o.charAt(t)
if(e.indexOf(a)<0)break}return t>=r?-1:a>=n&&a<=i?t:-1}}var pi,gi=e.TimeFormatter=function(e){i(o,e)
var n=t(o)
function o(){p(this,o)
return n.apply(this,arguments)}h(o,[{key:"format",value:function(e,n,i,o){var t=Cn(n).intlLocale,a=fn(xn,i)
o||(a.timeZone="UTC")
return this.getWithDefault("".concat(t,"-").concat(i,"-").concat(!!a.timeZone),(function(){return new Intl.DateTimeFormat(t,a)})).format(e)}}])
return o}(bn),hi=e.TIME_FORMAT_MAP={fmt_hm:"hm",fmt_hms:"hms"},bi={short:"fmt_hm",medium:"fmt_hms",long:"fmt_hms",full:"fmt_hms"},yi=e.DEFAULT_TIME_PATTERN="fmt_hms"
function fi(e,n,i,o){var t=n
if(!hi[n])if(bi[n]){console.log('The time pattern "'.concat(n,'" is deprecated, falling back to "').concat(bi[n],'".'))
var a=bi[n]
a&&(t=a)}else{console.log('Unknown time pattern "'.concat(n,'", falling back to "').concat(yi,'". Note: custom time patterns are not supported.'))
t=yi}var r=hi[t]||"hm"
pi||(pi=new gi)
return pi.format(e,i,r,o)}e.TruncationFormatter=function(){function e(n){p(this,e)
this.ellipsis="..."
void 0!==n&&(this.ellipsis=n)}h(e,[{key:"format",value:function(e,n){if(!e||"string"!=typeof e)return""
if(void 0===n)return"..."
if(!n||"number"!=typeof n||n>=e.length||n<0)return e
for(var i=e.substr(0,n),o=i.split(""),t=n-1,a="",r=/\s|\?|!|\.|,|;|:/g;t>=0;){var _=o[t]
if(void 0===_||r.test(_))break
t--}a=t>0?i.substr(0,t):i
return a+=this.ellipsis}}])
return e}()
var wi,vi=/-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?/,ki=/^(zero|singular|dual|few|many|plural|other)$/,xi=0
var ji="fmt_d_narrow"
function Si(e,n){var i=n instanceof Y,o=i?M(n):n
if(e){var t=e.prefix,a=e.suffix
t&&"string"==typeof t.value[0]&&(o=t.value[0]+o)
a&&"string"==typeof a.value[0]&&(o+=a.value[0])}return i?z(o):o}var Ti="name",Ci="text",Li="list",Ai="start",Ii="middle",Pi="end",Ni="2"
function Ei(e,n,i,o){var t
Ti===e?i&&"object"===u(i)&&(t=function(e,n,i){var o=be(zn,n)
return ti(e,o?o.key:Mn,i)}(i,n,o)):"string"!=typeof i&&"number"!=typeof i||(t=i)
return void 0===t?"":Si(n,ce()(t))}var qi="DEFAULT_TEXT"
var Di,Ri=new ci
function Yi(e,n,i,o,t){var a,r=n.parameters
if(void 0!==i)if(r.currency&&"object"===u(i))a=_i(i,t,n)
else if("number"==typeof i)a=si(i,t,n)
else if("string"==typeof i){var _=Number(i)
isNaN(_)||(a=si(_,t,n))}return ce()(a)}function Mi(e,n,i,o){return n?"string"==typeof n?n:e(n,i,o):""}function zi(e,n,i,o){return n?n.map((function(n){return Mi(e,n,i,o)})).join(""):""}function Oi(e,n,i,o){return"string"==typeof n?function(e,n){return"string"==typeof e?e:"function"==typeof n?n(e.index.number,e.index.keyword):n[e.index.number]}(n,i):e(n,i,o)}function Fi(e,n,i,o,t){var a,r
!function(e){for(var n=Object.keys(e.parameters),i=0;i<n.length;i++){var o=n[i]
if(o&&n.indexOf(o,i+1)>0)throw new Error("[XMessage] duplicate ".concat(o," keys in select placeholder"))
if(o){var t=e.parameters[o]
if(!t||0===t.value.length)throw new Error("[XMessage] select key ".concat(o," without a value"))}}}(n)
var _=n.parameters[i]
null!==(a=_)&&void 0!==a&&a.value||(_=n.parameters.default)
if(null!==(r=_)&&void 0!==r&&r.value){for(var s="",l=0;l<_.value.length;l++){var c=_.value[l];(c||"string"==typeof c)&&(s+=Oi(e,c,o,t))}return s}throw new Error("[XMessage] No value resolved for select placeholder")}function Ui(e,n,i){var o=""
o=void 0===i?"{".concat(-1!==n.index.number?n.index.number:"").concat(""!==n.index.keyword?":".concat(n.index.keyword):"","}"):String(i)
return ce()(o)}var Wi=" ",Gi="\t",Bi="sep",Vi="reverseSearchForVowel"
var Hi=new ci
function Ji(e,n,i){if(e&&n&&i){var o=function(e,n){if(e&&e.index&&n){var i=e.index,o=i.number,t=i.keyword
if("function"==typeof n)return n(o,t)
var a=n[o>-1?o:0]
if(null!=a)return"string"==typeof t&&""!==t?a[t]:a
if("string"==typeof t&&""!==t&&n&&"object"===u(n)&&!Array.isArray(n))return n[t]}}(e,n)
if(null==o){var t=(a=e.index,r=a.number,_=a.keyword,s=-1!==r?r.toString():"",c=""!==_?":".concat(_):"","{".concat(s).concat(c,"}"))
eo()&&console.warn("WARN_I18N_MISSING_VALUE: ".concat(t," placeholder does not have a value."))
return z(t)}switch(e.type){case"anchor":return function(e,n,i,o,t){var a=pe(),r=ce(),_=i,s=Ce(a(Le(_)?_:_[ke])),l=Ce(Le(_)?null:r(_[je])),c=Ce(Le(_)?null:r(_[Se])),m=M(we(e,n,ve,o,t)),u=Ce(we(e,n,xe,o,t)),p={}
if(Le(_)){c&&(p.class=c)
l&&(p.id=l)}else Object.keys(_).forEach((function(e){"href"!==e&&"title"!==e&&(p[Ce(r(e))]=Ce(r(_[e])))}))
var g="<a"
s&&(g+=' href="'.concat(s,'"'))
Object.entries(p).forEach((function(e){var n=d(e,2),i=n[0],o=n[1]
g+=" ".concat(i,'="').concat(o,'"')}))
u&&(g+=' title="'.concat(u,'"'))
return z(g+=">".concat(m,"</a>"))}(Ji,e,o,n,i)
case"boolean":return function(e,n,i,o,t){var a=i,r=""
if(!0===a||a===Ae)O(n,Ae)&&(r=we(e,n,Ae,o,t))
else{if(!1!==a&&a!==Ie)throw new Error('Invalid argument for BooleanPlaceholder. Expected boolean or "true" or "false" but found "'.concat(a,'"'))
O(n,Ie)&&(r=we(e,n,Ie,o,t))}return r}(Ji,e,o,n,i)
case"choice":return function(e,n,i,o,t){for(var a,r=i,_=[],s=n.parameters,l=xi,c=Object.keys(s),d=0;d<c.length;d++)(a=s[c[d]])&&(_[a.order]=a)
var m,p=u(r)
if("number"!=typeof r||isNaN(r))if("string"==typeof r)if(vi.test(r))l=parseFloat(r)
else{ge("Invalid value for 'choice' placeholder. \"".concat(r,'" is not a number. Defaulting to 0.'))
l=xi}else"object"===p&&(l=Array.isArray(r)?r.length:Object.keys(r).length)
else l=r
var g=_.map((function(e,n){var i={text:n.toString(),comparison:"eq",arg:-1}
if(ki.test(e.key)){i.text=n.toString()
i.comparison="eq"
i.category=e.key}else{i.text=n.toString()
switch(e.delimiter){case"<":i.comparison="gt"
break
case"+":case"#":i.comparison="gte"
break
default:i.comparison="eq"}i.arg=parseFloat(e.key)
m||(m=i)}return i}))
wi||(wi=new hn)
var h=wi.format(l,g,t)
return void 0!==h&&""!==h?we(e,n,_[parseInt(h,10)].key,o,t):m?we(e,n,"".concat(m.arg),o,t):""}(Ji,e,o,n,i)
case"date":return function(e,n,i,o,t){var a=fe(n,0),r=qn
a&&(r=a.key)
if(ji===r){ge('The pattern "'.concat(r,'" is not to be used in XMessage strings. Falling back to "').concat(qn,'".'))
r=qn}return Dn(i,r,t,!1)}(0,e,o,0,i)
case"list":return function(e,n,i,o,t){var a,r,_,s,l,c=n.subType||Ci,d="",m=jn(t,Li)||jn("default",Li)
if(i&&i instanceof Array){r=(a=i.length)-1
if(a>0&&"object"===u(m)&&"start"in m)switch(a){case 1:d="".concat(Ei(c,n.parameters,i[0],t))
break
case 2:d=he(m[Ni],["".concat(Ei(c,n.parameters,i[0],t)),"".concat(Ei(c,n.parameters,i[1],t))])
break
default:s=0
l=1
do{d=he(m[_=0===s?Ai:l<r?Ii:Pi],_===Ai?["".concat(Ei(c,n.parameters,i[s],t)),"".concat(Ei(c,n.parameters,i[l],t))]:[d,"".concat(Ei(c,n.parameters,i[l],t))])
s++
l++}while(_!==Pi)}}return d}(0,e,o,0,i)
case"map":return function(e,n,i,o,t){var a=i
return we(e,n,void 0!==a&&ye(n,a=a.toString())?a:qi,o,t)}(Ji,e,o,n,i)
case"name":return function(e,n,i,o,t){var a,r=be(zn,n.parameters)
a=ti(i,r?r.key:void 0,t)
n.parameters.possessive&&(a+=Ri.format(a,t))
var _=ce()(a)
return Si(n.parameters,_)}(0,e,o,0,i)
case"number":return Yi(0,e,o,0,i)
case"plural":return function(e,n,i,o,t){var a
Di||(Di=new li)
var r,_=n.parameters[i]
if(_&&"#"===_.delimiter)r=_
else if("number"==typeof i)r=n.parameters[Di.format(i,t)]
else if("string"==typeof i){var s=Number(i)
isNaN(s)||(r=n.parameters[Di.format(s,t)])}for(var c=n.parameters,d=[],m=Object.keys(c),u=0;u<m.length;u++){var p=m[u]
if(p){var g=c[p]
"number"==typeof(null==g?void 0:g.order)&&(d[g.order]=g)}}var h=d.map((function(e,n){var i={text:n.toString(),comparison:"eq",arg:parseFloat(e.key)}
switch(e.delimiter){case"<":i.comparison="gt"
break
case"+":case"#":i.comparison="gte"
break
default:i.comparison="eq"}if(isNaN(i.arg)&&!e.key.match(/zero|one|two|few|many|other/))throw new Error("Invalid plural key: ".concat(e.key))
return i}))
if(r&&r.value){var b=n.index.number
if(!(b>-1))return zi(e,r.value,o,t)
var y=r.value[b]
if(y)return Mi(e,y,o,t)}if("number"==typeof i){var f
h.forEach((function(e){e.comparison&&(0,F[e.comparison])(i,e.arg)&&(!f||void 0!==e.arg&&e.arg>f.arg)&&(f=e)}))
if(f){var w=d[parseInt(f.text,10)]
if(!w)throw new Error("No plural style found from ".concat(f.text))
return w.value&&"string"!=typeof w.value&&"string"!=typeof w.value[0]?si(i,t,{parameters:{integer:l(l({},w),{},{key:"integer",delimiter:"#"})}}):zi(e,w.value,o,t)}}var v=d[null!=h&&null!==(a=h[0])&&void 0!==a&&a.arg&&("number"!=typeof i||i<=h[0].arg)?0:h.length-1]
if(v)return zi(e,v.value,o,t)
throw new Error("Malformed plural placeholder. Please open an issue with the following info:\n\n  Placeholder:\n  ".concat(JSON.stringify(n,null,2),"\n\n  Resolved Value:\n  ").concat(JSON.stringify(i,null,2),"\n\n  Locale:\n  ").concat(t,"\n\n  Context:\n  ").concat(JSON.stringify(o,null,2),"\n  "))}(Ji,e,o,n,i)
case"possessive":return function(e,n,i,o,t){var a="",r=new ci
void 0!==i&&(a=r.format(i,t))
return a}(0,0,o,0,i)
case"select":return Fi(Ji,e,o,n,i)
case"simple":return Ui(0,e,o)
case"suffix":return function(e,n,i,o,t){var a,r,_,s,l,c,d,m,u="",p=!1,g=n.parameters
if(void 0!==i){g&&(p=!!g[Bi])
var h=jn(t,"suffix")
if(Sn(h)&&"hardVowels"in h){d=(h.hardVowels||"")+(h.softVowels||"")
switch(h.strategy){case Vi:if(i.length>0){for(l=c=i.length-1;l>=0&&s!==Wi&&s!==Gi;l--){s=i.charAt(l)
if(-1!==d.indexOf(s)){m=l===c
_=h.hardVowels&&h.hardVowels.indexOf(s)>-1?h.hardVowelSuffix:h.fallbackSuffix
u=String(m?h.bufferChar:"")+_
return p?h.separator+u:u}}for(a in h.nonVowelToSuffix)if(Object.prototype.hasOwnProperty.call(h.nonVowelToSuffix,a)){r=h.nonVowelToSuffix[a]
if(new RegExp(a).test(i.charAt(c))){_=r
break}}_||(_=h.defaultBufferChar)
u=p?h.separator+_:_
break}}}}return u}(0,e,o,0,i)
case"text":return function(e,n,i,o,t){var a=Ui(0,n,i)
void 0!==a&&n.parameters.possessive&&(a=z("".concat(a).concat(Hi.format(a,t))))
return Si(n.parameters,a)}(0,e,o,0,i)
case"time":return function(e,n,i,o,t){var a=fe(n,0),r=yi
a&&(r=a.key)
return fi(i,r,t,!1)}(0,e,o,0,i)}}var a,r,_,s,c
return""}function Ki(e){var n=R(e)
n.forEach((function(e){return re(e)}))
return n}var Xi=function(e){return n.default.sanitizeHTML(e)}
function Qi(e,n){if(e&&1===e.length&&"string"==typeof e[0]){var i=e[0]
return function(){return Xi(i)}}return function(i){return Xi(Zi(e,n,i))}}function Zi(e,n,i){for(var o="",t=0;t<e.length;++t){var a=e[t]
a&&(o+="string"==typeof a?a:Ji(a,i,n))}return o}var $i=!1
function eo(){return $i}}))
define("@linkedin/ember-cli-pemberly-i18n/app-strings",["exports"],(function(e){"use strict"
define("@linkedin/ember-cli-pemberly-i18n/root-dir",["exports"],(function(e){"use strict"
e.default="/export/content/data/multiproduct-post-commit/i001/workspace/voyager-web_4d030506eea589a7755074090959c146f648a05c/packages/voyager-web"}))

//# sourceMappingURL=support_en_US.map