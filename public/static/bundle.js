"use strict";(()=>{var Yg=Object.create;var jc=Object.defineProperty;var Vg=Object.getOwnPropertyDescriptor;var Qg=Object.getOwnPropertyNames;var Jg=Object.getPrototypeOf,kg=Object.prototype.hasOwnProperty;var Zl=(t,l)=>()=>(l||t((l={exports:{}}).exports,l),l.exports);var Lg=(t,l,i,e)=>{if(l&&typeof l=="object"||typeof l=="function")for(let b of Qg(l))!kg.call(t,b)&&b!==i&&jc(t,b,{get:()=>l[b],enumerable:!(e=Vg(l,b))||e.enumerable});return t};var Fb=(t,l,i)=>(i=t!=null?Yg(Jg(t)):{},Lg(l||!t||!t.__esModule?jc(i,"default",{value:t,enumerable:!0}):i,t));var ir=Zl(v=>{"use strict";var ai=Symbol.for("react.element"),Ug=Symbol.for("react.portal"),Ng=Symbol.for("react.fragment"),Og=Symbol.for("react.strict_mode"),fg=Symbol.for("react.profiler"),Hg=Symbol.for("react.provider"),wg=Symbol.for("react.context"),Sg=Symbol.for("react.forward_ref"),zg=Symbol.for("react.suspense"),jg=Symbol.for("react.memo"),Tg=Symbol.for("react.lazy"),Tc=Symbol.iterator;function Eg(t){return t===null||typeof t!="object"?null:(t=Tc&&t[Tc]||t["@@iterator"],typeof t=="function"?t:null)}var Mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kc=Object.assign,Pc={};function Vl(t,l,i){this.props=t,this.context=l,this.refs=Pc,this.updater=i||Mc}Vl.prototype.isReactComponent={};Vl.prototype.setState=function(t,l){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,l,"setState")};Vl.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _c(){}_c.prototype=Vl.prototype;function Rb(t,l,i){this.props=t,this.context=l,this.refs=Pc,this.updater=i||Mc}var vb=Rb.prototype=new _c;vb.constructor=Rb;Kc(vb,Vl.prototype);vb.isPureReactComponent=!0;var Ec=Array.isArray,qc=Object.prototype.hasOwnProperty,hb={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function tr(t,l,i){var e,b={},o=null,c=null;if(l!=null)for(e in l.ref!==void 0&&(c=l.ref),l.key!==void 0&&(o=""+l.key),l)qc.call(l,e)&&!$c.hasOwnProperty(e)&&(b[e]=l[e]);var r=arguments.length-2;if(r===1)b.children=i;else if(1<r){for(var a=Array(r),d=0;d<r;d++)a[d]=arguments[d+2];b.children=a}if(t&&t.defaultProps)for(e in r=t.defaultProps,r)b[e]===void 0&&(b[e]=r[e]);return{$$typeof:ai,type:t,key:o,ref:c,props:b,_owner:hb.current}}function Dg(t,l){return{$$typeof:ai,type:t.type,key:l,ref:t.ref,props:t.props,_owner:t._owner}}function Ab(t){return typeof t=="object"&&t!==null&&t.$$typeof===ai}function Mg(t){var l={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return l[i]})}var Dc=/\/+/g;function yb(t,l){return typeof t=="object"&&t!==null&&t.key!=null?Mg(""+t.key):l.toString(36)}function le(t,l,i,e,b){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var c=!1;if(t===null)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case ai:case Ug:c=!0}}if(c)return c=t,b=b(c),t=e===""?"."+yb(c,0):e,Ec(b)?(i="",t!=null&&(i=t.replace(Dc,"$&/")+"/"),le(b,l,i,"",function(d){return d})):b!=null&&(Ab(b)&&(b=Dg(b,i+(!b.key||c&&c.key===b.key?"":(""+b.key).replace(Dc,"$&/")+"/")+t)),l.push(b)),1;if(c=0,e=e===""?".":e+":",Ec(t))for(var r=0;r<t.length;r++){o=t[r];var a=e+yb(o,r);c+=le(o,l,i,a,b)}else if(a=Eg(t),typeof a=="function")for(t=a.call(t),r=0;!(o=t.next()).done;)o=o.value,a=e+yb(o,r++),c+=le(o,l,i,a,b);else if(o==="object")throw l=String(t),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.");return c}function te(t,l,i){if(t==null)return t;var e=[],b=0;return le(t,e,"","",function(o){return l.call(i,o,b++)}),e}function Kg(t){if(t._status===-1){var l=t._result;l=l(),l.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=l)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},ie={transition:null},Pg={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:ie,ReactCurrentOwner:hb};function lr(){throw Error("act(...) is not supported in production builds of React.")}v.Children={map:te,forEach:function(t,l,i){te(t,function(){l.apply(this,arguments)},i)},count:function(t){var l=0;return te(t,function(){l++}),l},toArray:function(t){return te(t,function(l){return l})||[]},only:function(t){if(!Ab(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};v.Component=Vl;v.Fragment=Ng;v.Profiler=fg;v.PureComponent=Rb;v.StrictMode=Og;v.Suspense=zg;v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;v.act=lr;v.cloneElement=function(t,l,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var e=Kc({},t.props),b=t.key,o=t.ref,c=t._owner;if(l!=null){if(l.ref!==void 0&&(o=l.ref,c=hb.current),l.key!==void 0&&(b=""+l.key),t.type&&t.type.defaultProps)var r=t.type.defaultProps;for(a in l)qc.call(l,a)&&!$c.hasOwnProperty(a)&&(e[a]=l[a]===void 0&&r!==void 0?r[a]:l[a])}var a=arguments.length-2;if(a===1)e.children=i;else if(1<a){r=Array(a);for(var d=0;d<a;d++)r[d]=arguments[d+2];e.children=r}return{$$typeof:ai,type:t.type,key:b,ref:o,props:e,_owner:c}};v.createContext=function(t){return t={$$typeof:wg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hg,_context:t},t.Consumer=t};v.createElement=tr;v.createFactory=function(t){var l=tr.bind(null,t);return l.type=t,l};v.createRef=function(){return{current:null}};v.forwardRef=function(t){return{$$typeof:Sg,render:t}};v.isValidElement=Ab;v.lazy=function(t){return{$$typeof:Tg,_payload:{_status:-1,_result:t},_init:Kg}};v.memo=function(t,l){return{$$typeof:jg,type:t,compare:l===void 0?null:l}};v.startTransition=function(t){var l=ie.transition;ie.transition={};try{t()}finally{ie.transition=l}};v.unstable_act=lr;v.useCallback=function(t,l){return lt.current.useCallback(t,l)};v.useContext=function(t){return lt.current.useContext(t)};v.useDebugValue=function(){};v.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};v.useEffect=function(t,l){return lt.current.useEffect(t,l)};v.useId=function(){return lt.current.useId()};v.useImperativeHandle=function(t,l,i){return lt.current.useImperativeHandle(t,l,i)};v.useInsertionEffect=function(t,l){return lt.current.useInsertionEffect(t,l)};v.useLayoutEffect=function(t,l){return lt.current.useLayoutEffect(t,l)};v.useMemo=function(t,l){return lt.current.useMemo(t,l)};v.useReducer=function(t,l,i){return lt.current.useReducer(t,l,i)};v.useRef=function(t){return lt.current.useRef(t)};v.useState=function(t){return lt.current.useState(t)};v.useSyncExternalStore=function(t,l,i){return lt.current.useSyncExternalStore(t,l,i)};v.useTransition=function(){return lt.current.useTransition()};v.version="18.3.1"});var ee=Zl((bs,er)=>{"use strict";er.exports=ir()});var sr=Zl(Y=>{"use strict";function Qb(t,l){var i=t.length;t.push(l);t:for(;0<i;){var e=i-1>>>1,b=t[e];if(0<be(b,l))t[e]=l,t[i]=b,i=e;else break t}}function Ft(t){return t.length===0?null:t[0]}function ce(t){if(t.length===0)return null;var l=t[0],i=t.pop();if(i!==l){t[0]=i;t:for(var e=0,b=t.length,o=b>>>1;e<o;){var c=2*(e+1)-1,r=t[c],a=c+1,d=t[a];if(0>be(r,i))a<b&&0>be(d,r)?(t[e]=d,t[a]=i,e=a):(t[e]=r,t[c]=i,e=c);else if(a<b&&0>be(d,i))t[e]=d,t[a]=i,e=a;else break t}}return l}function be(t,l){var i=t.sortIndex-l.sortIndex;return i!==0?i:t.id-l.id}typeof performance=="object"&&typeof performance.now=="function"?(br=performance,Y.unstable_now=function(){return br.now()}):(xb=Date,or=xb.now(),Y.unstable_now=function(){return xb.now()-or});var br,xb,or,Vt=[],Mt=[],_g=1,Gt=null,P=3,re=!1,Gl=!1,gi=!1,ar=typeof setTimeout=="function"?setTimeout:null,nr=typeof clearTimeout=="function"?clearTimeout:null,cr=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Jb(t){for(var l=Ft(Mt);l!==null;){if(l.callback===null)ce(Mt);else if(l.startTime<=t)ce(Mt),l.sortIndex=l.expirationTime,Qb(Vt,l);else break;l=Ft(Mt)}}function kb(t){if(gi=!1,Jb(t),!Gl)if(Ft(Vt)!==null)Gl=!0,Ub(Lb);else{var l=Ft(Mt);l!==null&&Nb(kb,l.startTime-t)}}function Lb(t,l){Gl=!1,gi&&(gi=!1,nr(di),di=-1),re=!0;var i=P;try{for(Jb(l),Gt=Ft(Vt);Gt!==null&&(!(Gt.expirationTime>l)||t&&!mr());){var e=Gt.callback;if(typeof e=="function"){Gt.callback=null,P=Gt.priorityLevel;var b=e(Gt.expirationTime<=l);l=Y.unstable_now(),typeof b=="function"?Gt.callback=b:Gt===Ft(Vt)&&ce(Vt),Jb(l)}else ce(Vt);Gt=Ft(Vt)}if(Gt!==null)var o=!0;else{var c=Ft(Mt);c!==null&&Nb(kb,c.startTime-l),o=!1}return o}finally{Gt=null,P=i,re=!1}}var ae=!1,oe=null,di=-1,gr=5,dr=-1;function mr(){return!(Y.unstable_now()-dr<gr)}function Yb(){if(oe!==null){var t=Y.unstable_now();dr=t;var l=!0;try{l=oe(!0,t)}finally{l?ni():(ae=!1,oe=null)}}else ae=!1}var ni;typeof cr=="function"?ni=function(){cr(Yb)}:typeof MessageChannel<"u"?(Vb=new MessageChannel,rr=Vb.port2,Vb.port1.onmessage=Yb,ni=function(){rr.postMessage(null)}):ni=function(){ar(Yb,0)};var Vb,rr;function Ub(t){oe=t,ae||(ae=!0,ni())}function Nb(t,l){di=ar(function(){t(Y.unstable_now())},l)}Y.unstable_IdlePriority=5;Y.unstable_ImmediatePriority=1;Y.unstable_LowPriority=4;Y.unstable_NormalPriority=3;Y.unstable_Profiling=null;Y.unstable_UserBlockingPriority=2;Y.unstable_cancelCallback=function(t){t.callback=null};Y.unstable_continueExecution=function(){Gl||re||(Gl=!0,Ub(Lb))};Y.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gr=0<t?Math.floor(1e3/t):5};Y.unstable_getCurrentPriorityLevel=function(){return P};Y.unstable_getFirstCallbackNode=function(){return Ft(Vt)};Y.unstable_next=function(t){switch(P){case 1:case 2:case 3:var l=3;break;default:l=P}var i=P;P=l;try{return t()}finally{P=i}};Y.unstable_pauseExecution=function(){};Y.unstable_requestPaint=function(){};Y.unstable_runWithPriority=function(t,l){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var i=P;P=t;try{return l()}finally{P=i}};Y.unstable_scheduleCallback=function(t,l,i){var e=Y.unstable_now();switch(typeof i=="object"&&i!==null?(i=i.delay,i=typeof i=="number"&&0<i?e+i:e):i=e,t){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=i+b,t={id:_g++,callback:l,priorityLevel:t,startTime:i,expirationTime:b,sortIndex:-1},i>e?(t.sortIndex=i,Qb(Mt,t),Ft(Vt)===null&&t===Ft(Mt)&&(gi?(nr(di),di=-1):gi=!0,Nb(kb,i-e))):(t.sortIndex=b,Qb(Vt,t),Gl||re||(Gl=!0,Ub(Lb))),t};Y.unstable_shouldYield=mr;Y.unstable_wrapCallback=function(t){var l=P;return function(){var i=P;P=l;try{return t.apply(this,arguments)}finally{P=i}}}});var Zr=Zl((cs,Ir)=>{"use strict";Ir.exports=sr()});var Wg=Zl(Zt=>{"use strict";var qg=ee(),st=Zr();function G(t){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)l+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ba=new Set,Ji={};function xl(t,l){ql(t,l),ql(t+"Capture",l)}function ql(t,l){for(Ji[t]=l,t=0;t<l.length;t++)Ba.add(l[t])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=Object.prototype.hasOwnProperty,$g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gr={},ur={};function td(t){return co.call(ur,t)?!0:co.call(Gr,t)?!1:$g.test(t)?ur[t]=!0:(Gr[t]=!0,!1)}function ld(t,l,i,e){if(i!==null&&i.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return e?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function id(t,l,i,e){if(l===null||typeof l>"u"||ld(t,l,i,e))return!0;if(e)return!1;if(i!==null)switch(i.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function bt(t,l,i,e,b,o,c){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=e,this.attributeNamespace=b,this.mustUseProperty=i,this.propertyName=t,this.type=l,this.sanitizeURL=o,this.removeEmptyString=c}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){K[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var l=t[0];K[l]=new bt(l,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){K[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){K[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){K[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){K[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){K[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){K[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){K[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $o=/[\-:]([a-z])/g;function tc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var l=t.replace($o,tc);K[l]=new bt(l,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var l=t.replace($o,tc);K[l]=new bt(l,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var l=t.replace($o,tc);K[l]=new bt(l,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){K[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});K.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){K[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lc(t,l,i,e){var b=K.hasOwnProperty(l)?K[l]:null;(b!==null?b.type!==0:e||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(id(l,i,b,e)&&(i=null),e||b===null?td(l)&&(i===null?t.removeAttribute(l):t.setAttribute(l,""+i)):b.mustUseProperty?t[b.propertyName]=i===null?b.type===3?!1:"":i:(l=b.attributeName,e=b.attributeNamespace,i===null?t.removeAttribute(l):(b=b.type,i=b===3||b===4&&i===!0?"":""+i,e?t.setAttributeNS(e,l,i):t.setAttribute(l,i))))}var Et=qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),kl=Symbol.for("react.portal"),Ll=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),ro=Symbol.for("react.profiler"),Fa=Symbol.for("react.provider"),ya=Symbol.for("react.context"),ec=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),no=Symbol.for("react.suspense_list"),bc=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Ra=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var pr=Symbol.iterator;function mi(t){return t===null||typeof t!="object"?null:(t=pr&&t[pr]||t["@@iterator"],typeof t=="function"?t:null)}var N=Object.assign,Ob;function Wi(t){if(Ob===void 0)try{throw Error()}catch(i){var l=i.stack.trim().match(/\n( *(at )?)/);Ob=l&&l[1]||""}return`
`+Ob+t}var fb=!1;function Hb(t,l){if(!t||fb)return"";fb=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(d){var e=d}Reflect.construct(t,[],l)}else{try{l.call()}catch(d){e=d}t.call(l.prototype)}else{try{throw Error()}catch(d){e=d}t()}}catch(d){if(d&&e&&typeof d.stack=="string"){for(var b=d.stack.split(`
`),o=e.stack.split(`
`),c=b.length-1,r=o.length-1;1<=c&&0<=r&&b[c]!==o[r];)r--;for(;1<=c&&0<=r;c--,r--)if(b[c]!==o[r]){if(c!==1||r!==1)do if(c--,r--,0>r||b[c]!==o[r]){var a=`
`+b[c].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=c&&0<=r);break}}}finally{fb=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Wi(t):""}function ed(t){switch(t.tag){case 5:return Wi(t.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return t=Hb(t.type,!1),t;case 11:return t=Hb(t.type.render,!1),t;case 1:return t=Hb(t.type,!0),t;default:return""}}function go(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ll:return"Fragment";case kl:return"Portal";case ro:return"Profiler";case ic:return"StrictMode";case ao:return"Suspense";case no:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ya:return(t.displayName||"Context")+".Consumer";case Fa:return(t._context.displayName||"Context")+".Provider";case ec:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bc:return l=t.displayName||null,l!==null?l:go(t.type)||"Memo";case Pt:l=t._payload,t=t._init;try{return go(t(l))}catch{}}return null}function bd(t){var l=t.type;switch(t.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=l.render,t=t.displayName||t.name||"",l.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return go(l);case 8:return l===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function gl(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function va(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function od(t){var l=va(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,l),e=""+t[l];if(!t.hasOwnProperty(l)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var b=i.get,o=i.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return b.call(this)},set:function(c){e=""+c,o.call(this,c)}}),Object.defineProperty(t,l,{enumerable:i.enumerable}),{getValue:function(){return e},setValue:function(c){e=""+c},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function ge(t){t._valueTracker||(t._valueTracker=od(t))}function ha(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var i=l.getValue(),e="";return t&&(e=va(t)?t.checked?"true":"false":t.value),t=e,t!==i?(l.setValue(t),!0):!1}function Oe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mo(t,l){var i=l.checked;return N({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function Cr(t,l){var i=l.defaultValue==null?"":l.defaultValue,e=l.checked!=null?l.checked:l.defaultChecked;i=gl(l.value!=null?l.value:i),t._wrapperState={initialChecked:e,initialValue:i,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function Aa(t,l){l=l.checked,l!=null&&lc(t,"checked",l,!1)}function so(t,l){Aa(t,l);var i=gl(l.value),e=l.type;if(i!=null)e==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(e==="submit"||e==="reset"){t.removeAttribute("value");return}l.hasOwnProperty("value")?Io(t,l.type,i):l.hasOwnProperty("defaultValue")&&Io(t,l.type,gl(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(t.defaultChecked=!!l.defaultChecked)}function Wr(t,l,i){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var e=l.type;if(!(e!=="submit"&&e!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+t._wrapperState.initialValue,i||l===t.value||(t.value=l),t.defaultValue=l}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function Io(t,l,i){(l!=="number"||Oe(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Xi=Array.isArray;function El(t,l,i,e){if(t=t.options,l){l={};for(var b=0;b<i.length;b++)l["$"+i[b]]=!0;for(i=0;i<t.length;i++)b=l.hasOwnProperty("$"+t[i].value),t[i].selected!==b&&(t[i].selected=b),b&&e&&(t[i].defaultSelected=!0)}else{for(i=""+gl(i),l=null,b=0;b<t.length;b++){if(t[b].value===i){t[b].selected=!0,e&&(t[b].defaultSelected=!0);return}l!==null||t[b].disabled||(l=t[b])}l!==null&&(l.selected=!0)}}function Zo(t,l){if(l.dangerouslySetInnerHTML!=null)throw Error(G(91));return N({},l,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xr(t,l){var i=l.value;if(i==null){if(i=l.children,l=l.defaultValue,i!=null){if(l!=null)throw Error(G(92));if(Xi(i)){if(1<i.length)throw Error(G(93));i=i[0]}l=i}l==null&&(l=""),i=l}t._wrapperState={initialValue:gl(i)}}function xa(t,l){var i=gl(l.value),e=gl(l.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),l.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),e!=null&&(t.defaultValue=""+e)}function Br(t){var l=t.textContent;l===t._wrapperState.initialValue&&l!==""&&l!==null&&(t.value=l)}function Ya(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Go(t,l){return t==null||t==="http://www.w3.org/1999/xhtml"?Ya(l):t==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var de,Va=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,i,e,b){MSApp.execUnsafeLocalFunction(function(){return t(l,i,e,b)})}:t}(function(t,l){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=l;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=de.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;l.firstChild;)t.appendChild(l.firstChild)}});function ki(t,l){if(l){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=l;return}}t.textContent=l}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cd=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(t){cd.forEach(function(l){l=l+t.charAt(0).toUpperCase()+t.substring(1),yi[l]=yi[t]})});function Qa(t,l,i){return l==null||typeof l=="boolean"||l===""?"":i||typeof l!="number"||l===0||yi.hasOwnProperty(t)&&yi[t]?(""+l).trim():l+"px"}function Ja(t,l){t=t.style;for(var i in l)if(l.hasOwnProperty(i)){var e=i.indexOf("--")===0,b=Qa(i,l[i],e);i==="float"&&(i="cssFloat"),e?t.setProperty(i,b):t[i]=b}}var rd=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(t,l){if(l){if(rd[t]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(G(137,t));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(G(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(G(61))}if(l.style!=null&&typeof l.style!="object")throw Error(G(62))}}function po(t,l){if(t.indexOf("-")===-1)return typeof l.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Co=null;function oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wo=null,Dl=null,Ml=null;function Fr(t){if(t=qi(t)){if(typeof Wo!="function")throw Error(G(280));var l=t.stateNode;l&&(l=mb(l),Wo(t.stateNode,t.type,l))}}function ka(t){Dl?Ml?Ml.push(t):Ml=[t]:Dl=t}function La(){if(Dl){var t=Dl,l=Ml;if(Ml=Dl=null,Fr(t),l)for(t=0;t<l.length;t++)Fr(l[t])}}function Ua(t,l){return t(l)}function Na(){}var wb=!1;function Oa(t,l,i){if(wb)return t(l,i);wb=!0;try{return Ua(t,l,i)}finally{wb=!1,(Dl!==null||Ml!==null)&&(Na(),La())}}function Li(t,l){var i=t.stateNode;if(i===null)return null;var e=mb(i);if(e===null)return null;i=e[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(G(231,l,typeof i));return i}var Xo=!1;if(St)try{Ql={},Object.defineProperty(Ql,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{Xo=!1}var Ql;function ad(t,l,i,e,b,o,c,r,a){var d=Array.prototype.slice.call(arguments,3);try{l.apply(i,d)}catch(I){this.onError(I)}}var Ri=!1,fe=null,He=!1,Bo=null,nd={onError:function(t){Ri=!0,fe=t}};function gd(t,l,i,e,b,o,c,r,a){Ri=!1,fe=null,ad.apply(nd,arguments)}function dd(t,l,i,e,b,o,c,r,a){if(gd.apply(this,arguments),Ri){if(Ri){var d=fe;Ri=!1,fe=null}else throw Error(G(198));He||(He=!0,Bo=d)}}function Yl(t){var l=t,i=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,l.flags&4098&&(i=l.return),t=l.return;while(t)}return l.tag===3?i:null}function fa(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function yr(t){if(Yl(t)!==t)throw Error(G(188))}function md(t){var l=t.alternate;if(!l){if(l=Yl(t),l===null)throw Error(G(188));return l!==t?null:t}for(var i=t,e=l;;){var b=i.return;if(b===null)break;var o=b.alternate;if(o===null){if(e=b.return,e!==null){i=e;continue}break}if(b.child===o.child){for(o=b.child;o;){if(o===i)return yr(b),t;if(o===e)return yr(b),l;o=o.sibling}throw Error(G(188))}if(i.return!==e.return)i=b,e=o;else{for(var c=!1,r=b.child;r;){if(r===i){c=!0,i=b,e=o;break}if(r===e){c=!0,e=b,i=o;break}r=r.sibling}if(!c){for(r=o.child;r;){if(r===i){c=!0,i=o,e=b;break}if(r===e){c=!0,e=o,i=b;break}r=r.sibling}if(!c)throw Error(G(189))}}if(i.alternate!==e)throw Error(G(190))}if(i.tag!==3)throw Error(G(188));return i.stateNode.current===i?t:l}function Ha(t){return t=md(t),t!==null?wa(t):null}function wa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var l=wa(t);if(l!==null)return l;t=t.sibling}return null}var Sa=st.unstable_scheduleCallback,Rr=st.unstable_cancelCallback,sd=st.unstable_shouldYield,Id=st.unstable_requestPaint,H=st.unstable_now,Zd=st.unstable_getCurrentPriorityLevel,cc=st.unstable_ImmediatePriority,za=st.unstable_UserBlockingPriority,we=st.unstable_NormalPriority,Gd=st.unstable_LowPriority,ja=st.unstable_IdlePriority,ab=null,Lt=null;function ud(t){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(ab,t,void 0,(t.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:Wd,pd=Math.log,Cd=Math.LN2;function Wd(t){return t>>>=0,t===0?32:31-(pd(t)/Cd|0)|0}var me=64,se=4194304;function Bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Se(t,l){var i=t.pendingLanes;if(i===0)return 0;var e=0,b=t.suspendedLanes,o=t.pingedLanes,c=i&268435455;if(c!==0){var r=c&~b;r!==0?e=Bi(r):(o&=c,o!==0&&(e=Bi(o)))}else c=i&~b,c!==0?e=Bi(c):o!==0&&(e=Bi(o));if(e===0)return 0;if(l!==0&&l!==e&&!(l&b)&&(b=e&-e,o=l&-l,b>=o||b===16&&(o&4194240)!==0))return l;if(e&4&&(e|=i&16),l=t.entangledLanes,l!==0)for(t=t.entanglements,l&=e;0<l;)i=31-At(l),b=1<<i,e|=t[i],l&=~b;return e}function Xd(t,l){switch(t){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(t,l){for(var i=t.suspendedLanes,e=t.pingedLanes,b=t.expirationTimes,o=t.pendingLanes;0<o;){var c=31-At(o),r=1<<c,a=b[c];a===-1?(!(r&i)||r&e)&&(b[c]=Xd(r,l)):a<=l&&(t.expiredLanes|=r),o&=~r}}function Fo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ta(){var t=me;return me<<=1,!(me&4194240)&&(me=64),t}function Sb(t){for(var l=[],i=0;31>i;i++)l.push(t);return l}function Pi(t,l,i){t.pendingLanes|=l,l!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,l=31-At(l),t[l]=i}function Fd(t,l){var i=t.pendingLanes&~l;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=l,t.mutableReadLanes&=l,t.entangledLanes&=l,l=t.entanglements;var e=t.eventTimes;for(t=t.expirationTimes;0<i;){var b=31-At(i),o=1<<b;l[b]=0,e[b]=-1,t[b]=-1,i&=~o}}function rc(t,l){var i=t.entangledLanes|=l;for(t=t.entanglements;i;){var e=31-At(i),b=1<<e;b&l|t[e]&l&&(t[e]|=l),i&=~b}}var x=0;function Ea(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Da,ac,Ma,Ka,Pa,yo=!1,Ie=[],il=null,el=null,bl=null,Ui=new Map,Ni=new Map,qt=[],yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vr(t,l){switch(t){case"focusin":case"focusout":il=null;break;case"dragenter":case"dragleave":el=null;break;case"mouseover":case"mouseout":bl=null;break;case"pointerover":case"pointerout":Ui.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(l.pointerId)}}function si(t,l,i,e,b,o){return t===null||t.nativeEvent!==o?(t={blockedOn:l,domEventName:i,eventSystemFlags:e,nativeEvent:o,targetContainers:[b]},l!==null&&(l=qi(l),l!==null&&ac(l)),t):(t.eventSystemFlags|=e,l=t.targetContainers,b!==null&&l.indexOf(b)===-1&&l.push(b),t)}function Rd(t,l,i,e,b){switch(l){case"focusin":return il=si(il,t,l,i,e,b),!0;case"dragenter":return el=si(el,t,l,i,e,b),!0;case"mouseover":return bl=si(bl,t,l,i,e,b),!0;case"pointerover":var o=b.pointerId;return Ui.set(o,si(Ui.get(o)||null,t,l,i,e,b)),!0;case"gotpointercapture":return o=b.pointerId,Ni.set(o,si(Ni.get(o)||null,t,l,i,e,b)),!0}return!1}function _a(t){var l=Cl(t.target);if(l!==null){var i=Yl(l);if(i!==null){if(l=i.tag,l===13){if(l=fa(i),l!==null){t.blockedOn=l,Pa(t.priority,function(){Ma(i)});return}}else if(l===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ae(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var i=Ro(t.domEventName,t.eventSystemFlags,l[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var e=new i.constructor(i.type,i);Co=e,i.target.dispatchEvent(e),Co=null}else return l=qi(i),l!==null&&ac(l),t.blockedOn=i,!1;l.shift()}return!0}function hr(t,l,i){Ae(t)&&i.delete(l)}function vd(){yo=!1,il!==null&&Ae(il)&&(il=null),el!==null&&Ae(el)&&(el=null),bl!==null&&Ae(bl)&&(bl=null),Ui.forEach(hr),Ni.forEach(hr)}function Ii(t,l){t.blockedOn===l&&(t.blockedOn=null,yo||(yo=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,vd)))}function Oi(t){function l(b){return Ii(b,t)}if(0<Ie.length){Ii(Ie[0],t);for(var i=1;i<Ie.length;i++){var e=Ie[i];e.blockedOn===t&&(e.blockedOn=null)}}for(il!==null&&Ii(il,t),el!==null&&Ii(el,t),bl!==null&&Ii(bl,t),Ui.forEach(l),Ni.forEach(l),i=0;i<qt.length;i++)e=qt[i],e.blockedOn===t&&(e.blockedOn=null);for(;0<qt.length&&(i=qt[0],i.blockedOn===null);)_a(i),i.blockedOn===null&&qt.shift()}var Kl=Et.ReactCurrentBatchConfig,ze=!0;function hd(t,l,i,e){var b=x,o=Kl.transition;Kl.transition=null;try{x=1,nc(t,l,i,e)}finally{x=b,Kl.transition=o}}function Ad(t,l,i,e){var b=x,o=Kl.transition;Kl.transition=null;try{x=4,nc(t,l,i,e)}finally{x=b,Kl.transition=o}}function nc(t,l,i,e){if(ze){var b=Ro(t,l,i,e);if(b===null)Kb(t,l,e,je,i),vr(t,e);else if(Rd(b,t,l,i,e))e.stopPropagation();else if(vr(t,e),l&4&&-1<yd.indexOf(t)){for(;b!==null;){var o=qi(b);if(o!==null&&Da(o),o=Ro(t,l,i,e),o===null&&Kb(t,l,e,je,i),o===b)break;b=o}b!==null&&e.stopPropagation()}else Kb(t,l,e,null,i)}}var je=null;function Ro(t,l,i,e){if(je=null,t=oc(e),t=Cl(t),t!==null)if(l=Yl(t),l===null)t=null;else if(i=l.tag,i===13){if(t=fa(l),t!==null)return t;t=null}else if(i===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null);return je=t,null}function qa(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zd()){case cc:return 1;case za:return 4;case we:case Gd:return 16;case ja:return 536870912;default:return 16}default:return 16}}var tl=null,gc=null,xe=null;function $a(){if(xe)return xe;var t,l=gc,i=l.length,e,b="value"in tl?tl.value:tl.textContent,o=b.length;for(t=0;t<i&&l[t]===b[t];t++);var c=i-t;for(e=1;e<=c&&l[i-e]===b[o-e];e++);return xe=b.slice(t,1<e?1-e:void 0)}function Ye(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Ze(){return!0}function Ar(){return!1}function It(t){function l(i,e,b,o,c){this._reactName=i,this._targetInst=b,this.type=e,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(i=t[r],this[r]=i?i(o):o[r]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ze:Ar,this.isPropagationStopped=Ar,this}return N(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ze)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ze)},persist:function(){},isPersistent:Ze}),l}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=It(oi),_i=N({},oi,{view:0,detail:0}),xd=It(_i),zb,jb,Zi,nb=N({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zi&&(Zi&&t.type==="mousemove"?(zb=t.screenX-Zi.screenX,jb=t.screenY-Zi.screenY):jb=zb=0,Zi=t),zb)},movementY:function(t){return"movementY"in t?t.movementY:jb}}),xr=It(nb),Yd=N({},nb,{dataTransfer:0}),Vd=It(Yd),Qd=N({},_i,{relatedTarget:0}),Tb=It(Qd),Jd=N({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),kd=It(Jd),Ld=N({},oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ud=It(Ld),Nd=N({},oi,{data:0}),Yr=It(Nd),Od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wd(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=Hd[t])?!!l[t]:!1}function mc(){return wd}var Sd=N({},_i,{key:function(t){if(t.key){var l=Od[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Ye(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(t){return t.type==="keypress"?Ye(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ye(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zd=It(Sd),jd=N({},nb,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vr=It(jd),Td=N({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),Ed=It(Td),Dd=N({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=It(Dd),Kd=N({},nb,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=It(Kd),_d=[9,13,27,32],sc=St&&"CompositionEvent"in window,vi=null;St&&"documentMode"in document&&(vi=document.documentMode);var qd=St&&"TextEvent"in window&&!vi,tn=St&&(!sc||vi&&8<vi&&11>=vi),Qr=" ",Jr=!1;function ln(t,l){switch(t){case"keyup":return _d.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function en(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ul=!1;function $d(t,l){switch(t){case"compositionend":return en(l);case"keypress":return l.which!==32?null:(Jr=!0,Qr);case"textInput":return t=l.data,t===Qr&&Jr?null:t;default:return null}}function tm(t,l){if(Ul)return t==="compositionend"||!sc&&ln(t,l)?(t=$a(),xe=gc=tl=null,Ul=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return tn&&l.locale!=="ko"?null:l.data;default:return null}}var lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kr(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!lm[t.type]:l==="textarea"}function bn(t,l,i,e){ka(e),l=Te(l,"onChange"),0<l.length&&(i=new dc("onChange","change",null,i,e),t.push({event:i,listeners:l}))}var hi=null,fi=null;function im(t){Zn(t,0)}function gb(t){var l=fl(t);if(ha(l))return t}function em(t,l){if(t==="change")return l}var on=!1;St&&(St?(ue="oninput"in document,ue||(Eb=document.createElement("div"),Eb.setAttribute("oninput","return;"),ue=typeof Eb.oninput=="function"),Ge=ue):Ge=!1,on=Ge&&(!document.documentMode||9<document.documentMode));var Ge,ue,Eb;function Lr(){hi&&(hi.detachEvent("onpropertychange",cn),fi=hi=null)}function cn(t){if(t.propertyName==="value"&&gb(fi)){var l=[];bn(l,fi,t,oc(t)),Oa(im,l)}}function bm(t,l,i){t==="focusin"?(Lr(),hi=l,fi=i,hi.attachEvent("onpropertychange",cn)):t==="focusout"&&Lr()}function om(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gb(fi)}function cm(t,l){if(t==="click")return gb(l)}function rm(t,l){if(t==="input"||t==="change")return gb(l)}function am(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var Yt=typeof Object.is=="function"?Object.is:am;function Hi(t,l){if(Yt(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var i=Object.keys(t),e=Object.keys(l);if(i.length!==e.length)return!1;for(e=0;e<i.length;e++){var b=i[e];if(!co.call(l,b)||!Yt(t[b],l[b]))return!1}return!0}function Ur(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nr(t,l){var i=Ur(t);t=0;for(var e;i;){if(i.nodeType===3){if(e=t+i.textContent.length,t<=l&&e>=l)return{node:i,offset:l-t};t=e}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Ur(i)}}function rn(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?rn(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function an(){for(var t=window,l=Oe();l instanceof t.HTMLIFrameElement;){try{var i=typeof l.contentWindow.location.href=="string"}catch{i=!1}if(i)t=l.contentWindow;else break;l=Oe(t.document)}return l}function Ic(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}function nm(t){var l=an(),i=t.focusedElem,e=t.selectionRange;if(l!==i&&i&&i.ownerDocument&&rn(i.ownerDocument.documentElement,i)){if(e!==null&&Ic(i)){if(l=e.start,t=e.end,t===void 0&&(t=l),"selectionStart"in i)i.selectionStart=l,i.selectionEnd=Math.min(t,i.value.length);else if(t=(l=i.ownerDocument||document)&&l.defaultView||window,t.getSelection){t=t.getSelection();var b=i.textContent.length,o=Math.min(e.start,b);e=e.end===void 0?o:Math.min(e.end,b),!t.extend&&o>e&&(b=e,e=o,o=b),b=Nr(i,o);var c=Nr(i,e);b&&c&&(t.rangeCount!==1||t.anchorNode!==b.node||t.anchorOffset!==b.offset||t.focusNode!==c.node||t.focusOffset!==c.offset)&&(l=l.createRange(),l.setStart(b.node,b.offset),t.removeAllRanges(),o>e?(t.addRange(l),t.extend(c.node,c.offset)):(l.setEnd(c.node,c.offset),t.addRange(l)))}}for(l=[],t=i;t=t.parentNode;)t.nodeType===1&&l.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<l.length;i++)t=l[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gm=St&&"documentMode"in document&&11>=document.documentMode,Nl=null,vo=null,Ai=null,ho=!1;function Or(t,l,i){var e=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ho||Nl==null||Nl!==Oe(e)||(e=Nl,"selectionStart"in e&&Ic(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Ai&&Hi(Ai,e)||(Ai=e,e=Te(vo,"onSelect"),0<e.length&&(l=new dc("onSelect","select",null,l,i),t.push({event:l,listeners:e}),l.target=Nl)))}function pe(t,l){var i={};return i[t.toLowerCase()]=l.toLowerCase(),i["Webkit"+t]="webkit"+l,i["Moz"+t]="moz"+l,i}var Ol={animationend:pe("Animation","AnimationEnd"),animationiteration:pe("Animation","AnimationIteration"),animationstart:pe("Animation","AnimationStart"),transitionend:pe("Transition","TransitionEnd")},Db={},nn={};St&&(nn=document.createElement("div").style,"AnimationEvent"in window||(delete Ol.animationend.animation,delete Ol.animationiteration.animation,delete Ol.animationstart.animation),"TransitionEvent"in window||delete Ol.transitionend.transition);function db(t){if(Db[t])return Db[t];if(!Ol[t])return t;var l=Ol[t],i;for(i in l)if(l.hasOwnProperty(i)&&i in nn)return Db[t]=l[i];return t}var gn=db("animationend"),dn=db("animationiteration"),mn=db("animationstart"),sn=db("transitionend"),In=new Map,fr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ml(t,l){In.set(t,l),xl(l,[t])}for(Ce=0;Ce<fr.length;Ce++)We=fr[Ce],Hr=We.toLowerCase(),wr=We[0].toUpperCase()+We.slice(1),ml(Hr,"on"+wr);var We,Hr,wr,Ce;ml(gn,"onAnimationEnd");ml(dn,"onAnimationIteration");ml(mn,"onAnimationStart");ml("dblclick","onDoubleClick");ml("focusin","onFocus");ml("focusout","onBlur");ml(sn,"onTransitionEnd");ql("onMouseEnter",["mouseout","mouseover"]);ql("onMouseLeave",["mouseout","mouseover"]);ql("onPointerEnter",["pointerout","pointerover"]);ql("onPointerLeave",["pointerout","pointerover"]);xl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xl("onBeforeInput",["compositionend","keypress","textInput","paste"]);xl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function Sr(t,l,i){var e=t.type||"unknown-event";t.currentTarget=i,dd(e,l,void 0,t),t.currentTarget=null}function Zn(t,l){l=(l&4)!==0;for(var i=0;i<t.length;i++){var e=t[i],b=e.event;e=e.listeners;t:{var o=void 0;if(l)for(var c=e.length-1;0<=c;c--){var r=e[c],a=r.instance,d=r.currentTarget;if(r=r.listener,a!==o&&b.isPropagationStopped())break t;Sr(b,r,d),o=a}else for(c=0;c<e.length;c++){if(r=e[c],a=r.instance,d=r.currentTarget,r=r.listener,a!==o&&b.isPropagationStopped())break t;Sr(b,r,d),o=a}}}if(He)throw t=Bo,He=!1,Bo=null,t}function Q(t,l){var i=l[Qo];i===void 0&&(i=l[Qo]=new Set);var e=t+"__bubble";i.has(e)||(Gn(l,t,2,!1),i.add(e))}function Mb(t,l,i){var e=0;l&&(e|=4),Gn(i,t,e,l)}var Xe="_reactListening"+Math.random().toString(36).slice(2);function wi(t){if(!t[Xe]){t[Xe]=!0,Ba.forEach(function(i){i!=="selectionchange"&&(dm.has(i)||Mb(i,!1,t),Mb(i,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[Xe]||(l[Xe]=!0,Mb("selectionchange",!1,l))}}function Gn(t,l,i,e){switch(qa(l)){case 1:var b=hd;break;case 4:b=Ad;break;default:b=nc}i=b.bind(null,l,i,t),b=void 0,!Xo||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(b=!0),e?b!==void 0?t.addEventListener(l,i,{capture:!0,passive:b}):t.addEventListener(l,i,!0):b!==void 0?t.addEventListener(l,i,{passive:b}):t.addEventListener(l,i,!1)}function Kb(t,l,i,e,b){var o=e;if(!(l&1)&&!(l&2)&&e!==null)t:for(;;){if(e===null)return;var c=e.tag;if(c===3||c===4){var r=e.stateNode.containerInfo;if(r===b||r.nodeType===8&&r.parentNode===b)break;if(c===4)for(c=e.return;c!==null;){var a=c.tag;if((a===3||a===4)&&(a=c.stateNode.containerInfo,a===b||a.nodeType===8&&a.parentNode===b))return;c=c.return}for(;r!==null;){if(c=Cl(r),c===null)return;if(a=c.tag,a===5||a===6){e=o=c;continue t}r=r.parentNode}}e=e.return}Oa(function(){var d=o,I=oc(i),Z=[];t:{var s=In.get(t);if(s!==void 0){var p=dc,W=t;switch(t){case"keypress":if(Ye(i)===0)break t;case"keydown":case"keyup":p=zd;break;case"focusin":W="focus",p=Tb;break;case"focusout":W="blur",p=Tb;break;case"beforeblur":case"afterblur":p=Tb;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ed;break;case gn:case dn:case mn:p=kd;break;case sn:p=Md;break;case"scroll":p=xd;break;case"wheel":p=Pd;break;case"copy":case"cut":case"paste":p=Ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vr}var X=(l&4)!==0,f=!X&&t==="scroll",g=X?s!==null?s+"Capture":null:s;X=[];for(var n=d,m;n!==null;){m=n;var u=m.stateNode;if(m.tag===5&&u!==null&&(m=u,g!==null&&(u=Li(n,g),u!=null&&X.push(Si(n,u,m)))),f)break;n=n.return}0<X.length&&(s=new p(s,W,null,i,I),Z.push({event:s,listeners:X}))}}if(!(l&7)){t:{if(s=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",s&&i!==Co&&(W=i.relatedTarget||i.fromElement)&&(Cl(W)||W[zt]))break t;if((p||s)&&(s=I.window===I?I:(s=I.ownerDocument)?s.defaultView||s.parentWindow:window,p?(W=i.relatedTarget||i.toElement,p=d,W=W?Cl(W):null,W!==null&&(f=Yl(W),W!==f||W.tag!==5&&W.tag!==6)&&(W=null)):(p=null,W=d),p!==W)){if(X=xr,u="onMouseLeave",g="onMouseEnter",n="mouse",(t==="pointerout"||t==="pointerover")&&(X=Vr,u="onPointerLeave",g="onPointerEnter",n="pointer"),f=p==null?s:fl(p),m=W==null?s:fl(W),s=new X(u,n+"leave",p,i,I),s.target=f,s.relatedTarget=m,u=null,Cl(I)===d&&(X=new X(g,n+"enter",W,i,I),X.target=m,X.relatedTarget=f,u=X),f=u,p&&W)l:{for(X=p,g=W,n=0,m=X;m;m=Jl(m))n++;for(m=0,u=g;u;u=Jl(u))m++;for(;0<n-m;)X=Jl(X),n--;for(;0<m-n;)g=Jl(g),m--;for(;n--;){if(X===g||g!==null&&X===g.alternate)break l;X=Jl(X),g=Jl(g)}X=null}else X=null;p!==null&&zr(Z,s,p,X,!1),W!==null&&f!==null&&zr(Z,f,W,X,!0)}}t:{if(s=d?fl(d):window,p=s.nodeName&&s.nodeName.toLowerCase(),p==="select"||p==="input"&&s.type==="file")var B=em;else if(kr(s))if(on)B=rm;else{B=om;var F=bm}else(p=s.nodeName)&&p.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(B=cm);if(B&&(B=B(t,d))){bn(Z,B,i,I);break t}F&&F(t,s,d),t==="focusout"&&(F=s._wrapperState)&&F.controlled&&s.type==="number"&&Io(s,"number",s.value)}switch(F=d?fl(d):window,t){case"focusin":(kr(F)||F.contentEditable==="true")&&(Nl=F,vo=d,Ai=null);break;case"focusout":Ai=vo=Nl=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,Or(Z,i,I);break;case"selectionchange":if(gm)break;case"keydown":case"keyup":Or(Z,i,I)}var y;if(sc)t:{switch(t){case"compositionstart":var R="onCompositionStart";break t;case"compositionend":R="onCompositionEnd";break t;case"compositionupdate":R="onCompositionUpdate";break t}R=void 0}else Ul?ln(t,i)&&(R="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(R="onCompositionStart");R&&(tn&&i.locale!=="ko"&&(Ul||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ul&&(y=$a()):(tl=I,gc="value"in tl?tl.value:tl.textContent,Ul=!0)),F=Te(d,R),0<F.length&&(R=new Yr(R,t,null,i,I),Z.push({event:R,listeners:F}),y?R.data=y:(y=en(i),y!==null&&(R.data=y)))),(y=qd?$d(t,i):tm(t,i))&&(d=Te(d,"onBeforeInput"),0<d.length&&(I=new Yr("onBeforeInput","beforeinput",null,i,I),Z.push({event:I,listeners:d}),I.data=y))}Zn(Z,l)})}function Si(t,l,i){return{instance:t,listener:l,currentTarget:i}}function Te(t,l){for(var i=l+"Capture",e=[];t!==null;){var b=t,o=b.stateNode;b.tag===5&&o!==null&&(b=o,o=Li(t,i),o!=null&&e.unshift(Si(t,o,b)),o=Li(t,l),o!=null&&e.push(Si(t,o,b))),t=t.return}return e}function Jl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zr(t,l,i,e,b){for(var o=l._reactName,c=[];i!==null&&i!==e;){var r=i,a=r.alternate,d=r.stateNode;if(a!==null&&a===e)break;r.tag===5&&d!==null&&(r=d,b?(a=Li(i,o),a!=null&&c.unshift(Si(i,a,r))):b||(a=Li(i,o),a!=null&&c.push(Si(i,a,r)))),i=i.return}c.length!==0&&t.push({event:l,listeners:c})}var mm=/\r\n?/g,sm=/\u0000|\uFFFD/g;function jr(t){return(typeof t=="string"?t:""+t).replace(mm,`
`).replace(sm,"")}function Be(t,l,i){if(l=jr(l),jr(t)!==l&&i)throw Error(G(425))}function Ee(){}var Ao=null,xo=null;function Yo(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Vo=typeof setTimeout=="function"?setTimeout:void 0,Im=typeof clearTimeout=="function"?clearTimeout:void 0,Tr=typeof Promise=="function"?Promise:void 0,Zm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tr<"u"?function(t){return Tr.resolve(null).then(t).catch(Gm)}:Vo;function Gm(t){setTimeout(function(){throw t})}function Pb(t,l){var i=l,e=0;do{var b=i.nextSibling;if(t.removeChild(i),b&&b.nodeType===8)if(i=b.data,i==="/$"){if(e===0){t.removeChild(b),Oi(l);return}e--}else i!=="$"&&i!=="$?"&&i!=="$!"||e++;i=b}while(i);Oi(l)}function ol(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return t}function Er(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(l===0)return t;l--}else i==="/$"&&l++}t=t.previousSibling}return null}var ci=Math.random().toString(36).slice(2),kt="__reactFiber$"+ci,zi="__reactProps$"+ci,zt="__reactContainer$"+ci,Qo="__reactEvents$"+ci,um="__reactListeners$"+ci,pm="__reactHandles$"+ci;function Cl(t){var l=t[kt];if(l)return l;for(var i=t.parentNode;i;){if(l=i[zt]||i[kt]){if(i=l.alternate,l.child!==null||i!==null&&i.child!==null)for(t=Er(t);t!==null;){if(i=t[kt])return i;t=Er(t)}return l}t=i,i=t.parentNode}return null}function qi(t){return t=t[kt]||t[zt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fl(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(G(33))}function mb(t){return t[zi]||null}var Jo=[],Hl=-1;function sl(t){return{current:t}}function J(t){0>Hl||(t.current=Jo[Hl],Jo[Hl]=null,Hl--)}function V(t,l){Hl++,Jo[Hl]=t.current,t.current=l}var dl={},tt=sl(dl),rt=sl(!1),yl=dl;function $l(t,l){var i=t.type.contextTypes;if(!i)return dl;var e=t.stateNode;if(e&&e.__reactInternalMemoizedUnmaskedChildContext===l)return e.__reactInternalMemoizedMaskedChildContext;var b={},o;for(o in i)b[o]=l[o];return e&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=b),b}function at(t){return t=t.childContextTypes,t!=null}function De(){J(rt),J(tt)}function Dr(t,l,i){if(tt.current!==dl)throw Error(G(168));V(tt,l),V(rt,i)}function un(t,l,i){var e=t.stateNode;if(l=l.childContextTypes,typeof e.getChildContext!="function")return i;e=e.getChildContext();for(var b in e)if(!(b in l))throw Error(G(108,bd(t)||"Unknown",b));return N({},i,e)}function Me(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dl,yl=tt.current,V(tt,t),V(rt,rt.current),!0}function Mr(t,l,i){var e=t.stateNode;if(!e)throw Error(G(169));i?(t=un(t,l,yl),e.__reactInternalMemoizedMergedChildContext=t,J(rt),J(tt),V(tt,t)):J(rt),V(rt,i)}var Ot=null,sb=!1,_b=!1;function pn(t){Ot===null?Ot=[t]:Ot.push(t)}function Cm(t){sb=!0,pn(t)}function Il(){if(!_b&&Ot!==null){_b=!0;var t=0,l=x;try{var i=Ot;for(x=1;t<i.length;t++){var e=i[t];do e=e(!0);while(e!==null)}Ot=null,sb=!1}catch(b){throw Ot!==null&&(Ot=Ot.slice(t+1)),Sa(cc,Il),b}finally{x=l,_b=!1}}return null}var wl=[],Sl=0,Ke=null,Pe=0,ut=[],pt=0,Rl=null,ft=1,Ht="";function ul(t,l){wl[Sl++]=Pe,wl[Sl++]=Ke,Ke=t,Pe=l}function Cn(t,l,i){ut[pt++]=ft,ut[pt++]=Ht,ut[pt++]=Rl,Rl=t;var e=ft;t=Ht;var b=32-At(e)-1;e&=~(1<<b),i+=1;var o=32-At(l)+b;if(30<o){var c=b-b%5;o=(e&(1<<c)-1).toString(32),e>>=c,b-=c,ft=1<<32-At(l)+b|i<<b|e,Ht=o+t}else ft=1<<o|i<<b|e,Ht=t}function Zc(t){t.return!==null&&(ul(t,1),Cn(t,1,0))}function Gc(t){for(;t===Ke;)Ke=wl[--Sl],wl[Sl]=null,Pe=wl[--Sl],wl[Sl]=null;for(;t===Rl;)Rl=ut[--pt],ut[pt]=null,Ht=ut[--pt],ut[pt]=null,ft=ut[--pt],ut[pt]=null}var mt=null,dt=null,k=!1,ht=null;function Wn(t,l){var i=Ct(5,null,null,0);i.elementType="DELETED",i.stateNode=l,i.return=t,l=t.deletions,l===null?(t.deletions=[i],t.flags|=16):l.push(i)}function Kr(t,l){switch(t.tag){case 5:var i=t.type;return l=l.nodeType!==1||i.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(t.stateNode=l,mt=t,dt=ol(l.firstChild),!0):!1;case 6:return l=t.pendingProps===""||l.nodeType!==3?null:l,l!==null?(t.stateNode=l,mt=t,dt=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(i=Rl!==null?{id:ft,overflow:Ht}:null,t.memoizedState={dehydrated:l,treeContext:i,retryLane:1073741824},i=Ct(18,null,null,0),i.stateNode=l,i.return=t,t.child=i,mt=t,dt=null,!0):!1;default:return!1}}function ko(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lo(t){if(k){var l=dt;if(l){var i=l;if(!Kr(t,l)){if(ko(t))throw Error(G(418));l=ol(i.nextSibling);var e=mt;l&&Kr(t,l)?Wn(e,i):(t.flags=t.flags&-4097|2,k=!1,mt=t)}}else{if(ko(t))throw Error(G(418));t.flags=t.flags&-4097|2,k=!1,mt=t}}}function Pr(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mt=t}function Fe(t){if(t!==mt)return!1;if(!k)return Pr(t),k=!0,!1;var l;if((l=t.tag!==3)&&!(l=t.tag!==5)&&(l=t.type,l=l!=="head"&&l!=="body"&&!Yo(t.type,t.memoizedProps)),l&&(l=dt)){if(ko(t))throw Xn(),Error(G(418));for(;l;)Wn(t,l),l=ol(l.nextSibling)}if(Pr(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(G(317));t:{for(t=t.nextSibling,l=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(l===0){dt=ol(t.nextSibling);break t}l--}else i!=="$"&&i!=="$!"&&i!=="$?"||l++}t=t.nextSibling}dt=null}}else dt=mt?ol(t.stateNode.nextSibling):null;return!0}function Xn(){for(var t=dt;t;)t=ol(t.nextSibling)}function ti(){dt=mt=null,k=!1}function uc(t){ht===null?ht=[t]:ht.push(t)}var Wm=Et.ReactCurrentBatchConfig;function Gi(t,l,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(G(309));var e=i.stateNode}if(!e)throw Error(G(147,t));var b=e,o=""+t;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===o?l.ref:(l=function(c){var r=b.refs;c===null?delete r[o]:r[o]=c},l._stringRef=o,l)}if(typeof t!="string")throw Error(G(284));if(!i._owner)throw Error(G(290,t))}return t}function ye(t,l){throw t=Object.prototype.toString.call(l),Error(G(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t))}function _r(t){var l=t._init;return l(t._payload)}function Bn(t){function l(g,n){if(t){var m=g.deletions;m===null?(g.deletions=[n],g.flags|=16):m.push(n)}}function i(g,n){if(!t)return null;for(;n!==null;)l(g,n),n=n.sibling;return null}function e(g,n){for(g=new Map;n!==null;)n.key!==null?g.set(n.key,n):g.set(n.index,n),n=n.sibling;return g}function b(g,n){return g=nl(g,n),g.index=0,g.sibling=null,g}function o(g,n,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<n?(g.flags|=2,n):m):(g.flags|=2,n)):(g.flags|=1048576,n)}function c(g){return t&&g.alternate===null&&(g.flags|=2),g}function r(g,n,m,u){return n===null||n.tag!==6?(n=bo(m,g.mode,u),n.return=g,n):(n=b(n,m),n.return=g,n)}function a(g,n,m,u){var B=m.type;return B===Ll?I(g,n,m.props.children,u,m.key):n!==null&&(n.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Pt&&_r(B)===n.type)?(u=b(n,m.props),u.ref=Gi(g,n,m),u.return=g,u):(u=Ne(m.type,m.key,m.props,null,g.mode,u),u.ref=Gi(g,n,m),u.return=g,u)}function d(g,n,m,u){return n===null||n.tag!==4||n.stateNode.containerInfo!==m.containerInfo||n.stateNode.implementation!==m.implementation?(n=oo(m,g.mode,u),n.return=g,n):(n=b(n,m.children||[]),n.return=g,n)}function I(g,n,m,u,B){return n===null||n.tag!==7?(n=Fl(m,g.mode,u,B),n.return=g,n):(n=b(n,m),n.return=g,n)}function Z(g,n,m){if(typeof n=="string"&&n!==""||typeof n=="number")return n=bo(""+n,g.mode,m),n.return=g,n;if(typeof n=="object"&&n!==null){switch(n.$$typeof){case ne:return m=Ne(n.type,n.key,n.props,null,g.mode,m),m.ref=Gi(g,null,n),m.return=g,m;case kl:return n=oo(n,g.mode,m),n.return=g,n;case Pt:var u=n._init;return Z(g,u(n._payload),m)}if(Xi(n)||mi(n))return n=Fl(n,g.mode,m,null),n.return=g,n;ye(g,n)}return null}function s(g,n,m,u){var B=n!==null?n.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return B!==null?null:r(g,n,""+m,u);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ne:return m.key===B?a(g,n,m,u):null;case kl:return m.key===B?d(g,n,m,u):null;case Pt:return B=m._init,s(g,n,B(m._payload),u)}if(Xi(m)||mi(m))return B!==null?null:I(g,n,m,u,null);ye(g,m)}return null}function p(g,n,m,u,B){if(typeof u=="string"&&u!==""||typeof u=="number")return g=g.get(m)||null,r(n,g,""+u,B);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ne:return g=g.get(u.key===null?m:u.key)||null,a(n,g,u,B);case kl:return g=g.get(u.key===null?m:u.key)||null,d(n,g,u,B);case Pt:var F=u._init;return p(g,n,m,F(u._payload),B)}if(Xi(u)||mi(u))return g=g.get(m)||null,I(n,g,u,B,null);ye(n,u)}return null}function W(g,n,m,u){for(var B=null,F=null,y=n,R=n=0,j=null;y!==null&&R<m.length;R++){y.index>R?(j=y,y=null):j=y.sibling;var A=s(g,y,m[R],u);if(A===null){y===null&&(y=j);break}t&&y&&A.alternate===null&&l(g,y),n=o(A,n,R),F===null?B=A:F.sibling=A,F=A,y=j}if(R===m.length)return i(g,y),k&&ul(g,R),B;if(y===null){for(;R<m.length;R++)y=Z(g,m[R],u),y!==null&&(n=o(y,n,R),F===null?B=y:F.sibling=y,F=y);return k&&ul(g,R),B}for(y=e(g,y);R<m.length;R++)j=p(y,g,R,m[R],u),j!==null&&(t&&j.alternate!==null&&y.delete(j.key===null?R:j.key),n=o(j,n,R),F===null?B=j:F.sibling=j,F=j);return t&&y.forEach(function(Dt){return l(g,Dt)}),k&&ul(g,R),B}function X(g,n,m,u){var B=mi(m);if(typeof B!="function")throw Error(G(150));if(m=B.call(m),m==null)throw Error(G(151));for(var F=B=null,y=n,R=n=0,j=null,A=m.next();y!==null&&!A.done;R++,A=m.next()){y.index>R?(j=y,y=null):j=y.sibling;var Dt=s(g,y,A.value,u);if(Dt===null){y===null&&(y=j);break}t&&y&&Dt.alternate===null&&l(g,y),n=o(Dt,n,R),F===null?B=Dt:F.sibling=Dt,F=Dt,y=j}if(A.done)return i(g,y),k&&ul(g,R),B;if(y===null){for(;!A.done;R++,A=m.next())A=Z(g,A.value,u),A!==null&&(n=o(A,n,R),F===null?B=A:F.sibling=A,F=A);return k&&ul(g,R),B}for(y=e(g,y);!A.done;R++,A=m.next())A=p(y,g,R,A.value,u),A!==null&&(t&&A.alternate!==null&&y.delete(A.key===null?R:A.key),n=o(A,n,R),F===null?B=A:F.sibling=A,F=A);return t&&y.forEach(function(xg){return l(g,xg)}),k&&ul(g,R),B}function f(g,n,m,u){if(typeof m=="object"&&m!==null&&m.type===Ll&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ne:t:{for(var B=m.key,F=n;F!==null;){if(F.key===B){if(B=m.type,B===Ll){if(F.tag===7){i(g,F.sibling),n=b(F,m.props.children),n.return=g,g=n;break t}}else if(F.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Pt&&_r(B)===F.type){i(g,F.sibling),n=b(F,m.props),n.ref=Gi(g,F,m),n.return=g,g=n;break t}i(g,F);break}else l(g,F);F=F.sibling}m.type===Ll?(n=Fl(m.props.children,g.mode,u,m.key),n.return=g,g=n):(u=Ne(m.type,m.key,m.props,null,g.mode,u),u.ref=Gi(g,n,m),u.return=g,g=u)}return c(g);case kl:t:{for(F=m.key;n!==null;){if(n.key===F)if(n.tag===4&&n.stateNode.containerInfo===m.containerInfo&&n.stateNode.implementation===m.implementation){i(g,n.sibling),n=b(n,m.children||[]),n.return=g,g=n;break t}else{i(g,n);break}else l(g,n);n=n.sibling}n=oo(m,g.mode,u),n.return=g,g=n}return c(g);case Pt:return F=m._init,f(g,n,F(m._payload),u)}if(Xi(m))return W(g,n,m,u);if(mi(m))return X(g,n,m,u);ye(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,n!==null&&n.tag===6?(i(g,n.sibling),n=b(n,m),n.return=g,g=n):(i(g,n),n=bo(m,g.mode,u),n.return=g,g=n),c(g)):i(g,n)}return f}var li=Bn(!0),Fn=Bn(!1),_e=sl(null),qe=null,zl=null,pc=null;function Cc(){pc=zl=qe=null}function Wc(t){var l=_e.current;J(_e),t._currentValue=l}function Uo(t,l,i){for(;t!==null;){var e=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,e!==null&&(e.childLanes|=l)):e!==null&&(e.childLanes&l)!==l&&(e.childLanes|=l),t===i)break;t=t.return}}function Pl(t,l){qe=t,pc=zl=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&l&&(ct=!0),t.firstContext=null)}function Xt(t){var l=t._currentValue;if(pc!==t)if(t={context:t,memoizedValue:l,next:null},zl===null){if(qe===null)throw Error(G(308));zl=t,qe.dependencies={lanes:0,firstContext:t}}else zl=zl.next=t;return l}var Wl=null;function Xc(t){Wl===null?Wl=[t]:Wl.push(t)}function yn(t,l,i,e){var b=l.interleaved;return b===null?(i.next=i,Xc(l)):(i.next=b.next,b.next=i),l.interleaved=i,jt(t,e)}function jt(t,l){t.lanes|=l;var i=t.alternate;for(i!==null&&(i.lanes|=l),i=t,t=t.return;t!==null;)t.childLanes|=l,i=t.alternate,i!==null&&(i.childLanes|=l),i=t,t=t.return;return i.tag===3?i.stateNode:null}var _t=!1;function Bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rn(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wt(t,l){return{eventTime:t,lane:l,tag:0,payload:null,callback:null,next:null}}function cl(t,l,i){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,h&2){var b=e.pending;return b===null?l.next=l:(l.next=b.next,b.next=l),e.pending=l,jt(t,i)}return b=e.interleaved,b===null?(l.next=l,Xc(e)):(l.next=b.next,b.next=l),e.interleaved=l,jt(t,i)}function Ve(t,l,i){if(l=l.updateQueue,l!==null&&(l=l.shared,(i&4194240)!==0)){var e=l.lanes;e&=t.pendingLanes,i|=e,l.lanes=i,rc(t,i)}}function qr(t,l){var i=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,i===e)){var b=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var c={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};o===null?b=o=c:o=o.next=c,i=i.next}while(i!==null);o===null?b=o=l:o=o.next=l}else b=o=l;i={baseState:e.baseState,firstBaseUpdate:b,lastBaseUpdate:o,shared:e.shared,effects:e.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=l:t.next=l,i.lastBaseUpdate=l}function $e(t,l,i,e){var b=t.updateQueue;_t=!1;var o=b.firstBaseUpdate,c=b.lastBaseUpdate,r=b.shared.pending;if(r!==null){b.shared.pending=null;var a=r,d=a.next;a.next=null,c===null?o=d:c.next=d,c=a;var I=t.alternate;I!==null&&(I=I.updateQueue,r=I.lastBaseUpdate,r!==c&&(r===null?I.firstBaseUpdate=d:r.next=d,I.lastBaseUpdate=a))}if(o!==null){var Z=b.baseState;c=0,I=d=a=null,r=o;do{var s=r.lane,p=r.eventTime;if((e&s)===s){I!==null&&(I=I.next={eventTime:p,lane:0,tag:r.tag,payload:r.payload,callback:r.callback,next:null});t:{var W=t,X=r;switch(s=l,p=i,X.tag){case 1:if(W=X.payload,typeof W=="function"){Z=W.call(p,Z,s);break t}Z=W;break t;case 3:W.flags=W.flags&-65537|128;case 0:if(W=X.payload,s=typeof W=="function"?W.call(p,Z,s):W,s==null)break t;Z=N({},Z,s);break t;case 2:_t=!0}}r.callback!==null&&r.lane!==0&&(t.flags|=64,s=b.effects,s===null?b.effects=[r]:s.push(r))}else p={eventTime:p,lane:s,tag:r.tag,payload:r.payload,callback:r.callback,next:null},I===null?(d=I=p,a=Z):I=I.next=p,c|=s;if(r=r.next,r===null){if(r=b.shared.pending,r===null)break;s=r,r=s.next,s.next=null,b.lastBaseUpdate=s,b.shared.pending=null}}while(!0);if(I===null&&(a=Z),b.baseState=a,b.firstBaseUpdate=d,b.lastBaseUpdate=I,l=b.shared.interleaved,l!==null){b=l;do c|=b.lane,b=b.next;while(b!==l)}else o===null&&(b.shared.lanes=0);hl|=c,t.lanes=c,t.memoizedState=Z}}function $r(t,l,i){if(t=l.effects,l.effects=null,t!==null)for(l=0;l<t.length;l++){var e=t[l],b=e.callback;if(b!==null){if(e.callback=null,e=i,typeof b!="function")throw Error(G(191,b));b.call(e)}}}var $i={},Ut=sl($i),ji=sl($i),Ti=sl($i);function Xl(t){if(t===$i)throw Error(G(174));return t}function Fc(t,l){switch(V(Ti,l),V(ji,t),V(Ut,$i),t=l.nodeType,t){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:Go(null,"");break;default:t=t===8?l.parentNode:l,l=t.namespaceURI||null,t=t.tagName,l=Go(l,t)}J(Ut),V(Ut,l)}function ii(){J(Ut),J(ji),J(Ti)}function vn(t){Xl(Ti.current);var l=Xl(Ut.current),i=Go(l,t.type);l!==i&&(V(ji,t),V(Ut,i))}function yc(t){ji.current===t&&(J(Ut),J(ji))}var L=sl(0);function tb(t){for(var l=t;l!==null;){if(l.tag===13){var i=l.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var qb=[];function Rc(){for(var t=0;t<qb.length;t++)qb[t]._workInProgressVersionPrimary=null;qb.length=0}var Qe=Et.ReactCurrentDispatcher,$b=Et.ReactCurrentBatchConfig,vl=0,U=null,S=null,T=null,lb=!1,xi=!1,Ei=0,Xm=0;function _(){throw Error(G(321))}function vc(t,l){if(l===null)return!1;for(var i=0;i<l.length&&i<t.length;i++)if(!Yt(t[i],l[i]))return!1;return!0}function hc(t,l,i,e,b,o){if(vl=o,U=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Qe.current=t===null||t.memoizedState===null?Rm:vm,t=i(e,b),xi){o=0;do{if(xi=!1,Ei=0,25<=o)throw Error(G(301));o+=1,T=S=null,l.updateQueue=null,Qe.current=hm,t=i(e,b)}while(xi)}if(Qe.current=ib,l=S!==null&&S.next!==null,vl=0,T=S=U=null,lb=!1,l)throw Error(G(300));return t}function Ac(){var t=Ei!==0;return Ei=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return T===null?U.memoizedState=T=t:T=T.next=t,T}function Bt(){if(S===null){var t=U.alternate;t=t!==null?t.memoizedState:null}else t=S.next;var l=T===null?U.memoizedState:T.next;if(l!==null)T=l,S=t;else{if(t===null)throw Error(G(310));S=t,t={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null},T===null?U.memoizedState=T=t:T=T.next=t}return T}function Di(t,l){return typeof l=="function"?l(t):l}function to(t){var l=Bt(),i=l.queue;if(i===null)throw Error(G(311));i.lastRenderedReducer=t;var e=S,b=e.baseQueue,o=i.pending;if(o!==null){if(b!==null){var c=b.next;b.next=o.next,o.next=c}e.baseQueue=b=o,i.pending=null}if(b!==null){o=b.next,e=e.baseState;var r=c=null,a=null,d=o;do{var I=d.lane;if((vl&I)===I)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),e=d.hasEagerState?d.eagerState:t(e,d.action);else{var Z={lane:I,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(r=a=Z,c=e):a=a.next=Z,U.lanes|=I,hl|=I}d=d.next}while(d!==null&&d!==o);a===null?c=e:a.next=r,Yt(e,l.memoizedState)||(ct=!0),l.memoizedState=e,l.baseState=c,l.baseQueue=a,i.lastRenderedState=e}if(t=i.interleaved,t!==null){b=t;do o=b.lane,U.lanes|=o,hl|=o,b=b.next;while(b!==t)}else b===null&&(i.lanes=0);return[l.memoizedState,i.dispatch]}function lo(t){var l=Bt(),i=l.queue;if(i===null)throw Error(G(311));i.lastRenderedReducer=t;var e=i.dispatch,b=i.pending,o=l.memoizedState;if(b!==null){i.pending=null;var c=b=b.next;do o=t(o,c.action),c=c.next;while(c!==b);Yt(o,l.memoizedState)||(ct=!0),l.memoizedState=o,l.baseQueue===null&&(l.baseState=o),i.lastRenderedState=o}return[o,e]}function hn(){}function An(t,l){var i=U,e=Bt(),b=l(),o=!Yt(e.memoizedState,b);if(o&&(e.memoizedState=b,ct=!0),e=e.queue,xc(Vn.bind(null,i,e,t),[t]),e.getSnapshot!==l||o||T!==null&&T.memoizedState.tag&1){if(i.flags|=2048,Mi(9,Yn.bind(null,i,e,b,l),void 0,null),E===null)throw Error(G(349));vl&30||xn(i,l,b)}return b}function xn(t,l,i){t.flags|=16384,t={getSnapshot:l,value:i},l=U.updateQueue,l===null?(l={lastEffect:null,stores:null},U.updateQueue=l,l.stores=[t]):(i=l.stores,i===null?l.stores=[t]:i.push(t))}function Yn(t,l,i,e){l.value=i,l.getSnapshot=e,Qn(l)&&Jn(t)}function Vn(t,l,i){return i(function(){Qn(l)&&Jn(t)})}function Qn(t){var l=t.getSnapshot;t=t.value;try{var i=l();return!Yt(t,i)}catch{return!0}}function Jn(t){var l=jt(t,1);l!==null&&xt(l,t,1,-1)}function ta(t){var l=Jt();return typeof t=="function"&&(t=t()),l.memoizedState=l.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:t},l.queue=t,t=t.dispatch=ym.bind(null,U,t),[l.memoizedState,t]}function Mi(t,l,i,e){return t={tag:t,create:l,destroy:i,deps:e,next:null},l=U.updateQueue,l===null?(l={lastEffect:null,stores:null},U.updateQueue=l,l.lastEffect=t.next=t):(i=l.lastEffect,i===null?l.lastEffect=t.next=t:(e=i.next,i.next=t,t.next=e,l.lastEffect=t)),t}function kn(){return Bt().memoizedState}function Je(t,l,i,e){var b=Jt();U.flags|=t,b.memoizedState=Mi(1|l,i,void 0,e===void 0?null:e)}function Ib(t,l,i,e){var b=Bt();e=e===void 0?null:e;var o=void 0;if(S!==null){var c=S.memoizedState;if(o=c.destroy,e!==null&&vc(e,c.deps)){b.memoizedState=Mi(l,i,o,e);return}}U.flags|=t,b.memoizedState=Mi(1|l,i,o,e)}function la(t,l){return Je(8390656,8,t,l)}function xc(t,l){return Ib(2048,8,t,l)}function Ln(t,l){return Ib(4,2,t,l)}function Un(t,l){return Ib(4,4,t,l)}function Nn(t,l){if(typeof l=="function")return t=t(),l(t),function(){l(null)};if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function On(t,l,i){return i=i!=null?i.concat([t]):null,Ib(4,4,Nn.bind(null,l,t),i)}function Yc(){}function fn(t,l){var i=Bt();l=l===void 0?null:l;var e=i.memoizedState;return e!==null&&l!==null&&vc(l,e[1])?e[0]:(i.memoizedState=[t,l],t)}function Hn(t,l){var i=Bt();l=l===void 0?null:l;var e=i.memoizedState;return e!==null&&l!==null&&vc(l,e[1])?e[0]:(t=t(),i.memoizedState=[t,l],t)}function wn(t,l,i){return vl&21?(Yt(i,l)||(i=Ta(),U.lanes|=i,hl|=i,t.baseState=!0),l):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=i)}function Bm(t,l){var i=x;x=i!==0&&4>i?i:4,t(!0);var e=$b.transition;$b.transition={};try{t(!1),l()}finally{x=i,$b.transition=e}}function Sn(){return Bt().memoizedState}function Fm(t,l,i){var e=al(t);if(i={lane:e,action:i,hasEagerState:!1,eagerState:null,next:null},zn(t))jn(l,i);else if(i=yn(t,l,i,e),i!==null){var b=et();xt(i,t,e,b),Tn(i,l,e)}}function ym(t,l,i){var e=al(t),b={lane:e,action:i,hasEagerState:!1,eagerState:null,next:null};if(zn(t))jn(l,b);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=l.lastRenderedReducer,o!==null))try{var c=l.lastRenderedState,r=o(c,i);if(b.hasEagerState=!0,b.eagerState=r,Yt(r,c)){var a=l.interleaved;a===null?(b.next=b,Xc(l)):(b.next=a.next,a.next=b),l.interleaved=b;return}}catch{}finally{}i=yn(t,l,b,e),i!==null&&(b=et(),xt(i,t,e,b),Tn(i,l,e))}}function zn(t){var l=t.alternate;return t===U||l!==null&&l===U}function jn(t,l){xi=lb=!0;var i=t.pending;i===null?l.next=l:(l.next=i.next,i.next=l),t.pending=l}function Tn(t,l,i){if(i&4194240){var e=l.lanes;e&=t.pendingLanes,i|=e,l.lanes=i,rc(t,i)}}var ib={readContext:Xt,useCallback:_,useContext:_,useEffect:_,useImperativeHandle:_,useInsertionEffect:_,useLayoutEffect:_,useMemo:_,useReducer:_,useRef:_,useState:_,useDebugValue:_,useDeferredValue:_,useTransition:_,useMutableSource:_,useSyncExternalStore:_,useId:_,unstable_isNewReconciler:!1},Rm={readContext:Xt,useCallback:function(t,l){return Jt().memoizedState=[t,l===void 0?null:l],t},useContext:Xt,useEffect:la,useImperativeHandle:function(t,l,i){return i=i!=null?i.concat([t]):null,Je(4194308,4,Nn.bind(null,l,t),i)},useLayoutEffect:function(t,l){return Je(4194308,4,t,l)},useInsertionEffect:function(t,l){return Je(4,2,t,l)},useMemo:function(t,l){var i=Jt();return l=l===void 0?null:l,t=t(),i.memoizedState=[t,l],t},useReducer:function(t,l,i){var e=Jt();return l=i!==void 0?i(l):l,e.memoizedState=e.baseState=l,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},e.queue=t,t=t.dispatch=Fm.bind(null,U,t),[e.memoizedState,t]},useRef:function(t){var l=Jt();return t={current:t},l.memoizedState=t},useState:ta,useDebugValue:Yc,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=ta(!1),l=t[0];return t=Bm.bind(null,t[1]),Jt().memoizedState=t,[l,t]},useMutableSource:function(){},useSyncExternalStore:function(t,l,i){var e=U,b=Jt();if(k){if(i===void 0)throw Error(G(407));i=i()}else{if(i=l(),E===null)throw Error(G(349));vl&30||xn(e,l,i)}b.memoizedState=i;var o={value:i,getSnapshot:l};return b.queue=o,la(Vn.bind(null,e,o,t),[t]),e.flags|=2048,Mi(9,Yn.bind(null,e,o,i,l),void 0,null),i},useId:function(){var t=Jt(),l=E.identifierPrefix;if(k){var i=Ht,e=ft;i=(e&~(1<<32-At(e)-1)).toString(32)+i,l=":"+l+"R"+i,i=Ei++,0<i&&(l+="H"+i.toString(32)),l+=":"}else i=Xm++,l=":"+l+"r"+i.toString(32)+":";return t.memoizedState=l},unstable_isNewReconciler:!1},vm={readContext:Xt,useCallback:fn,useContext:Xt,useEffect:xc,useImperativeHandle:On,useInsertionEffect:Ln,useLayoutEffect:Un,useMemo:Hn,useReducer:to,useRef:kn,useState:function(){return to(Di)},useDebugValue:Yc,useDeferredValue:function(t){var l=Bt();return wn(l,S.memoizedState,t)},useTransition:function(){var t=to(Di)[0],l=Bt().memoizedState;return[t,l]},useMutableSource:hn,useSyncExternalStore:An,useId:Sn,unstable_isNewReconciler:!1},hm={readContext:Xt,useCallback:fn,useContext:Xt,useEffect:xc,useImperativeHandle:On,useInsertionEffect:Ln,useLayoutEffect:Un,useMemo:Hn,useReducer:lo,useRef:kn,useState:function(){return lo(Di)},useDebugValue:Yc,useDeferredValue:function(t){var l=Bt();return S===null?l.memoizedState=t:wn(l,S.memoizedState,t)},useTransition:function(){var t=lo(Di)[0],l=Bt().memoizedState;return[t,l]},useMutableSource:hn,useSyncExternalStore:An,useId:Sn,unstable_isNewReconciler:!1};function Rt(t,l){if(t&&t.defaultProps){l=N({},l),t=t.defaultProps;for(var i in t)l[i]===void 0&&(l[i]=t[i]);return l}return l}function No(t,l,i,e){l=t.memoizedState,i=i(e,l),i=i==null?l:N({},l,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Zb={isMounted:function(t){return(t=t._reactInternals)?Yl(t)===t:!1},enqueueSetState:function(t,l,i){t=t._reactInternals;var e=et(),b=al(t),o=wt(e,b);o.payload=l,i!=null&&(o.callback=i),l=cl(t,o,b),l!==null&&(xt(l,t,b,e),Ve(l,t,b))},enqueueReplaceState:function(t,l,i){t=t._reactInternals;var e=et(),b=al(t),o=wt(e,b);o.tag=1,o.payload=l,i!=null&&(o.callback=i),l=cl(t,o,b),l!==null&&(xt(l,t,b,e),Ve(l,t,b))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var i=et(),e=al(t),b=wt(i,e);b.tag=2,l!=null&&(b.callback=l),l=cl(t,b,e),l!==null&&(xt(l,t,e,i),Ve(l,t,e))}};function ia(t,l,i,e,b,o,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,o,c):l.prototype&&l.prototype.isPureReactComponent?!Hi(i,e)||!Hi(b,o):!0}function En(t,l,i){var e=!1,b=dl,o=l.contextType;return typeof o=="object"&&o!==null?o=Xt(o):(b=at(l)?yl:tt.current,e=l.contextTypes,o=(e=e!=null)?$l(t,b):dl),l=new l(i,o),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Zb,t.stateNode=l,l._reactInternals=t,e&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=b,t.__reactInternalMemoizedMaskedChildContext=o),l}function ea(t,l,i,e){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(i,e),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(i,e),l.state!==t&&Zb.enqueueReplaceState(l,l.state,null)}function Oo(t,l,i,e){var b=t.stateNode;b.props=i,b.state=t.memoizedState,b.refs={},Bc(t);var o=l.contextType;typeof o=="object"&&o!==null?b.context=Xt(o):(o=at(l)?yl:tt.current,b.context=$l(t,o)),b.state=t.memoizedState,o=l.getDerivedStateFromProps,typeof o=="function"&&(No(t,l,o,i),b.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(l=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),l!==b.state&&Zb.enqueueReplaceState(b,b.state,null),$e(t,i,b,e),b.state=t.memoizedState),typeof b.componentDidMount=="function"&&(t.flags|=4194308)}function ei(t,l){try{var i="",e=l;do i+=ed(e),e=e.return;while(e);var b=i}catch(o){b=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:l,stack:b,digest:null}}function io(t,l,i){return{value:t,source:null,stack:i??null,digest:l??null}}function fo(t,l){try{console.error(l.value)}catch(i){setTimeout(function(){throw i})}}var Am=typeof WeakMap=="function"?WeakMap:Map;function Dn(t,l,i){i=wt(-1,i),i.tag=3,i.payload={element:null};var e=l.value;return i.callback=function(){bb||(bb=!0,Ko=e),fo(t,l)},i}function Mn(t,l,i){i=wt(-1,i),i.tag=3;var e=t.type.getDerivedStateFromError;if(typeof e=="function"){var b=l.value;i.payload=function(){return e(b)},i.callback=function(){fo(t,l)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(i.callback=function(){fo(t,l),typeof e!="function"&&(rl===null?rl=new Set([this]):rl.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})}),i}function ba(t,l,i){var e=t.pingCache;if(e===null){e=t.pingCache=new Am;var b=new Set;e.set(l,b)}else b=e.get(l),b===void 0&&(b=new Set,e.set(l,b));b.has(i)||(b.add(i),t=Sm.bind(null,t,l,i),l.then(t,t))}function oa(t){do{var l;if((l=t.tag===13)&&(l=t.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return t;t=t.return}while(t!==null);return null}function ca(t,l,i,e,b){return t.mode&1?(t.flags|=65536,t.lanes=b,t):(t===l?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(l=wt(-1,1),l.tag=2,cl(i,l,1))),i.lanes|=1),t)}var xm=Et.ReactCurrentOwner,ct=!1;function it(t,l,i,e){l.child=t===null?Fn(l,null,i,e):li(l,t.child,i,e)}function ra(t,l,i,e,b){i=i.render;var o=l.ref;return Pl(l,b),e=hc(t,l,i,e,o,b),i=Ac(),t!==null&&!ct?(l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~b,Tt(t,l,b)):(k&&i&&Zc(l),l.flags|=1,it(t,l,e,b),l.child)}function aa(t,l,i,e,b){if(t===null){var o=i.type;return typeof o=="function"&&!Oc(o)&&o.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(l.tag=15,l.type=o,Kn(t,l,o,e,b)):(t=Ne(i.type,null,e,l,l.mode,b),t.ref=l.ref,t.return=l,l.child=t)}if(o=t.child,!(t.lanes&b)){var c=o.memoizedProps;if(i=i.compare,i=i!==null?i:Hi,i(c,e)&&t.ref===l.ref)return Tt(t,l,b)}return l.flags|=1,t=nl(o,e),t.ref=l.ref,t.return=l,l.child=t}function Kn(t,l,i,e,b){if(t!==null){var o=t.memoizedProps;if(Hi(o,e)&&t.ref===l.ref)if(ct=!1,l.pendingProps=e=o,(t.lanes&b)!==0)t.flags&131072&&(ct=!0);else return l.lanes=t.lanes,Tt(t,l,b)}return Ho(t,l,i,e,b)}function Pn(t,l,i){var e=l.pendingProps,b=e.children,o=t!==null?t.memoizedState:null;if(e.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Tl,gt),gt|=i;else{if(!(i&1073741824))return t=o!==null?o.baseLanes|i:i,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:t,cachePool:null,transitions:null},l.updateQueue=null,V(Tl,gt),gt|=t,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},e=o!==null?o.baseLanes:i,V(Tl,gt),gt|=e}else o!==null?(e=o.baseLanes|i,l.memoizedState=null):e=i,V(Tl,gt),gt|=e;return it(t,l,b,i),l.child}function _n(t,l){var i=l.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(l.flags|=512,l.flags|=2097152)}function Ho(t,l,i,e,b){var o=at(i)?yl:tt.current;return o=$l(l,o),Pl(l,b),i=hc(t,l,i,e,o,b),e=Ac(),t!==null&&!ct?(l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~b,Tt(t,l,b)):(k&&e&&Zc(l),l.flags|=1,it(t,l,i,b),l.child)}function na(t,l,i,e,b){if(at(i)){var o=!0;Me(l)}else o=!1;if(Pl(l,b),l.stateNode===null)ke(t,l),En(l,i,e),Oo(l,i,e,b),e=!0;else if(t===null){var c=l.stateNode,r=l.memoizedProps;c.props=r;var a=c.context,d=i.contextType;typeof d=="object"&&d!==null?d=Xt(d):(d=at(i)?yl:tt.current,d=$l(l,d));var I=i.getDerivedStateFromProps,Z=typeof I=="function"||typeof c.getSnapshotBeforeUpdate=="function";Z||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(r!==e||a!==d)&&ea(l,c,e,d),_t=!1;var s=l.memoizedState;c.state=s,$e(l,e,c,b),a=l.memoizedState,r!==e||s!==a||rt.current||_t?(typeof I=="function"&&(No(l,i,I,e),a=l.memoizedState),(r=_t||ia(l,i,r,e,s,a,d))?(Z||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(l.flags|=4194308)):(typeof c.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=e,l.memoizedState=a),c.props=e,c.state=a,c.context=d,e=r):(typeof c.componentDidMount=="function"&&(l.flags|=4194308),e=!1)}else{c=l.stateNode,Rn(t,l),r=l.memoizedProps,d=l.type===l.elementType?r:Rt(l.type,r),c.props=d,Z=l.pendingProps,s=c.context,a=i.contextType,typeof a=="object"&&a!==null?a=Xt(a):(a=at(i)?yl:tt.current,a=$l(l,a));var p=i.getDerivedStateFromProps;(I=typeof p=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(r!==Z||s!==a)&&ea(l,c,e,a),_t=!1,s=l.memoizedState,c.state=s,$e(l,e,c,b);var W=l.memoizedState;r!==Z||s!==W||rt.current||_t?(typeof p=="function"&&(No(l,i,p,e),W=l.memoizedState),(d=_t||ia(l,i,d,e,s,W,a)||!1)?(I||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(e,W,a),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(e,W,a)),typeof c.componentDidUpdate=="function"&&(l.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof c.componentDidUpdate!="function"||r===t.memoizedProps&&s===t.memoizedState||(l.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&s===t.memoizedState||(l.flags|=1024),l.memoizedProps=e,l.memoizedState=W),c.props=e,c.state=W,c.context=a,e=d):(typeof c.componentDidUpdate!="function"||r===t.memoizedProps&&s===t.memoizedState||(l.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&s===t.memoizedState||(l.flags|=1024),e=!1)}return wo(t,l,i,e,o,b)}function wo(t,l,i,e,b,o){_n(t,l);var c=(l.flags&128)!==0;if(!e&&!c)return b&&Mr(l,i,!1),Tt(t,l,o);e=l.stateNode,xm.current=l;var r=c&&typeof i.getDerivedStateFromError!="function"?null:e.render();return l.flags|=1,t!==null&&c?(l.child=li(l,t.child,null,o),l.child=li(l,null,r,o)):it(t,l,r,o),l.memoizedState=e.state,b&&Mr(l,i,!0),l.child}function qn(t){var l=t.stateNode;l.pendingContext?Dr(t,l.pendingContext,l.pendingContext!==l.context):l.context&&Dr(t,l.context,!1),Fc(t,l.containerInfo)}function ga(t,l,i,e,b){return ti(),uc(b),l.flags|=256,it(t,l,i,e),l.child}var So={dehydrated:null,treeContext:null,retryLane:0};function zo(t){return{baseLanes:t,cachePool:null,transitions:null}}function $n(t,l,i){var e=l.pendingProps,b=L.current,o=!1,c=(l.flags&128)!==0,r;if((r=c)||(r=t!==null&&t.memoizedState===null?!1:(b&2)!==0),r?(o=!0,l.flags&=-129):(t===null||t.memoizedState!==null)&&(b|=1),V(L,b&1),t===null)return Lo(l),t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(l.mode&1?t.data==="$!"?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(c=e.children,t=e.fallback,o?(e=l.mode,o=l.child,c={mode:"hidden",children:c},!(e&1)&&o!==null?(o.childLanes=0,o.pendingProps=c):o=pb(c,e,0,null),t=Fl(t,e,i,null),o.return=l,t.return=l,o.sibling=t,l.child=o,l.child.memoizedState=zo(i),l.memoizedState=So,t):Vc(l,c));if(b=t.memoizedState,b!==null&&(r=b.dehydrated,r!==null))return Ym(t,l,c,e,r,b,i);if(o){o=e.fallback,c=l.mode,b=t.child,r=b.sibling;var a={mode:"hidden",children:e.children};return!(c&1)&&l.child!==b?(e=l.child,e.childLanes=0,e.pendingProps=a,l.deletions=null):(e=nl(b,a),e.subtreeFlags=b.subtreeFlags&14680064),r!==null?o=nl(r,o):(o=Fl(o,c,i,null),o.flags|=2),o.return=l,e.return=l,e.sibling=o,l.child=e,e=o,o=l.child,c=t.child.memoizedState,c=c===null?zo(i):{baseLanes:c.baseLanes|i,cachePool:null,transitions:c.transitions},o.memoizedState=c,o.childLanes=t.childLanes&~i,l.memoizedState=So,e}return o=t.child,t=o.sibling,e=nl(o,{mode:"visible",children:e.children}),!(l.mode&1)&&(e.lanes=i),e.return=l,e.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=e,l.memoizedState=null,e}function Vc(t,l){return l=pb({mode:"visible",children:l},t.mode,0,null),l.return=t,t.child=l}function Re(t,l,i,e){return e!==null&&uc(e),li(l,t.child,null,i),t=Vc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Ym(t,l,i,e,b,o,c){if(i)return l.flags&256?(l.flags&=-257,e=io(Error(G(422))),Re(t,l,c,e)):l.memoizedState!==null?(l.child=t.child,l.flags|=128,null):(o=e.fallback,b=l.mode,e=pb({mode:"visible",children:e.children},b,0,null),o=Fl(o,b,c,null),o.flags|=2,e.return=l,o.return=l,e.sibling=o,l.child=e,l.mode&1&&li(l,t.child,null,c),l.child.memoizedState=zo(c),l.memoizedState=So,o);if(!(l.mode&1))return Re(t,l,c,null);if(b.data==="$!"){if(e=b.nextSibling&&b.nextSibling.dataset,e)var r=e.dgst;return e=r,o=Error(G(419)),e=io(o,e,void 0),Re(t,l,c,e)}if(r=(c&t.childLanes)!==0,ct||r){if(e=E,e!==null){switch(c&-c){case 4:b=2;break;case 16:b=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:b=32;break;case 536870912:b=268435456;break;default:b=0}b=b&(e.suspendedLanes|c)?0:b,b!==0&&b!==o.retryLane&&(o.retryLane=b,jt(t,b),xt(e,t,b,-1))}return Nc(),e=io(Error(G(421))),Re(t,l,c,e)}return b.data==="$?"?(l.flags|=128,l.child=t.child,l=zm.bind(null,t),b._reactRetry=l,null):(t=o.treeContext,dt=ol(b.nextSibling),mt=l,k=!0,ht=null,t!==null&&(ut[pt++]=ft,ut[pt++]=Ht,ut[pt++]=Rl,ft=t.id,Ht=t.overflow,Rl=l),l=Vc(l,e.children),l.flags|=4096,l)}function da(t,l,i){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l),Uo(t.return,l,i)}function eo(t,l,i,e,b){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:e,tail:i,tailMode:b}:(o.isBackwards=l,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=i,o.tailMode=b)}function tg(t,l,i){var e=l.pendingProps,b=e.revealOrder,o=e.tail;if(it(t,l,e.children,i),e=L.current,e&2)e=e&1|2,l.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&da(t,i,l);else if(t.tag===19)da(t,i,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}e&=1}if(V(L,e),!(l.mode&1))l.memoizedState=null;else switch(b){case"forwards":for(i=l.child,b=null;i!==null;)t=i.alternate,t!==null&&tb(t)===null&&(b=i),i=i.sibling;i=b,i===null?(b=l.child,l.child=null):(b=i.sibling,i.sibling=null),eo(l,!1,b,i,o);break;case"backwards":for(i=null,b=l.child,l.child=null;b!==null;){if(t=b.alternate,t!==null&&tb(t)===null){l.child=b;break}t=b.sibling,b.sibling=i,i=b,b=t}eo(l,!0,i,null,o);break;case"together":eo(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function ke(t,l){!(l.mode&1)&&t!==null&&(t.alternate=null,l.alternate=null,l.flags|=2)}function Tt(t,l,i){if(t!==null&&(l.dependencies=t.dependencies),hl|=l.lanes,!(i&l.childLanes))return null;if(t!==null&&l.child!==t.child)throw Error(G(153));if(l.child!==null){for(t=l.child,i=nl(t,t.pendingProps),l.child=i,i.return=l;t.sibling!==null;)t=t.sibling,i=i.sibling=nl(t,t.pendingProps),i.return=l;i.sibling=null}return l.child}function Vm(t,l,i){switch(l.tag){case 3:qn(l),ti();break;case 5:vn(l);break;case 1:at(l.type)&&Me(l);break;case 4:Fc(l,l.stateNode.containerInfo);break;case 10:var e=l.type._context,b=l.memoizedProps.value;V(_e,e._currentValue),e._currentValue=b;break;case 13:if(e=l.memoizedState,e!==null)return e.dehydrated!==null?(V(L,L.current&1),l.flags|=128,null):i&l.child.childLanes?$n(t,l,i):(V(L,L.current&1),t=Tt(t,l,i),t!==null?t.sibling:null);V(L,L.current&1);break;case 19:if(e=(i&l.childLanes)!==0,t.flags&128){if(e)return tg(t,l,i);l.flags|=128}if(b=l.memoizedState,b!==null&&(b.rendering=null,b.tail=null,b.lastEffect=null),V(L,L.current),e)break;return null;case 22:case 23:return l.lanes=0,Pn(t,l,i)}return Tt(t,l,i)}var lg,jo,ig,eg;lg=function(t,l){for(var i=l.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break;for(;i.sibling===null;){if(i.return===null||i.return===l)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};jo=function(){};ig=function(t,l,i,e){var b=t.memoizedProps;if(b!==e){t=l.stateNode,Xl(Ut.current);var o=null;switch(i){case"input":b=mo(t,b),e=mo(t,e),o=[];break;case"select":b=N({},b,{value:void 0}),e=N({},e,{value:void 0}),o=[];break;case"textarea":b=Zo(t,b),e=Zo(t,e),o=[];break;default:typeof b.onClick!="function"&&typeof e.onClick=="function"&&(t.onclick=Ee)}uo(i,e);var c;i=null;for(d in b)if(!e.hasOwnProperty(d)&&b.hasOwnProperty(d)&&b[d]!=null)if(d==="style"){var r=b[d];for(c in r)r.hasOwnProperty(c)&&(i||(i={}),i[c]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ji.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in e){var a=e[d];if(r=b?.[d],e.hasOwnProperty(d)&&a!==r&&(a!=null||r!=null))if(d==="style")if(r){for(c in r)!r.hasOwnProperty(c)||a&&a.hasOwnProperty(c)||(i||(i={}),i[c]="");for(c in a)a.hasOwnProperty(c)&&r[c]!==a[c]&&(i||(i={}),i[c]=a[c])}else i||(o||(o=[]),o.push(d,i)),i=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,r=r?r.__html:void 0,a!=null&&r!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ji.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&Q("scroll",t),o||r===a||(o=[])):(o=o||[]).push(d,a))}i&&(o=o||[]).push("style",i);var d=o;(l.updateQueue=d)&&(l.flags|=4)}};eg=function(t,l,i,e){i!==e&&(l.flags|=4)};function ui(t,l){if(!k)switch(t.tailMode){case"hidden":l=t.tail;for(var i=null;l!==null;)l.alternate!==null&&(i=l),l=l.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var e=null;i!==null;)i.alternate!==null&&(e=i),i=i.sibling;e===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function q(t){var l=t.alternate!==null&&t.alternate.child===t.child,i=0,e=0;if(l)for(var b=t.child;b!==null;)i|=b.lanes|b.childLanes,e|=b.subtreeFlags&14680064,e|=b.flags&14680064,b.return=t,b=b.sibling;else for(b=t.child;b!==null;)i|=b.lanes|b.childLanes,e|=b.subtreeFlags,e|=b.flags,b.return=t,b=b.sibling;return t.subtreeFlags|=e,t.childLanes=i,l}function Qm(t,l,i){var e=l.pendingProps;switch(Gc(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return q(l),null;case 1:return at(l.type)&&De(),q(l),null;case 3:return e=l.stateNode,ii(),J(rt),J(tt),Rc(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(Fe(l)?l.flags|=4:t===null||t.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,ht!==null&&(qo(ht),ht=null))),jo(t,l),q(l),null;case 5:yc(l);var b=Xl(Ti.current);if(i=l.type,t!==null&&l.stateNode!=null)ig(t,l,i,e,b),t.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!e){if(l.stateNode===null)throw Error(G(166));return q(l),null}if(t=Xl(Ut.current),Fe(l)){e=l.stateNode,i=l.type;var o=l.memoizedProps;switch(e[kt]=l,e[zi]=o,t=(l.mode&1)!==0,i){case"dialog":Q("cancel",e),Q("close",e);break;case"iframe":case"object":case"embed":Q("load",e);break;case"video":case"audio":for(b=0;b<Fi.length;b++)Q(Fi[b],e);break;case"source":Q("error",e);break;case"img":case"image":case"link":Q("error",e),Q("load",e);break;case"details":Q("toggle",e);break;case"input":Cr(e,o),Q("invalid",e);break;case"select":e._wrapperState={wasMultiple:!!o.multiple},Q("invalid",e);break;case"textarea":Xr(e,o),Q("invalid",e)}uo(i,o),b=null;for(var c in o)if(o.hasOwnProperty(c)){var r=o[c];c==="children"?typeof r=="string"?e.textContent!==r&&(o.suppressHydrationWarning!==!0&&Be(e.textContent,r,t),b=["children",r]):typeof r=="number"&&e.textContent!==""+r&&(o.suppressHydrationWarning!==!0&&Be(e.textContent,r,t),b=["children",""+r]):Ji.hasOwnProperty(c)&&r!=null&&c==="onScroll"&&Q("scroll",e)}switch(i){case"input":ge(e),Wr(e,o,!0);break;case"textarea":ge(e),Br(e);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(e.onclick=Ee)}e=b,l.updateQueue=e,e!==null&&(l.flags|=4)}else{c=b.nodeType===9?b:b.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ya(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof e.is=="string"?t=c.createElement(i,{is:e.is}):(t=c.createElement(i),i==="select"&&(c=t,e.multiple?c.multiple=!0:e.size&&(c.size=e.size))):t=c.createElementNS(t,i),t[kt]=l,t[zi]=e,lg(t,l,!1,!1),l.stateNode=t;t:{switch(c=po(i,e),i){case"dialog":Q("cancel",t),Q("close",t),b=e;break;case"iframe":case"object":case"embed":Q("load",t),b=e;break;case"video":case"audio":for(b=0;b<Fi.length;b++)Q(Fi[b],t);b=e;break;case"source":Q("error",t),b=e;break;case"img":case"image":case"link":Q("error",t),Q("load",t),b=e;break;case"details":Q("toggle",t),b=e;break;case"input":Cr(t,e),b=mo(t,e),Q("invalid",t);break;case"option":b=e;break;case"select":t._wrapperState={wasMultiple:!!e.multiple},b=N({},e,{value:void 0}),Q("invalid",t);break;case"textarea":Xr(t,e),b=Zo(t,e),Q("invalid",t);break;default:b=e}uo(i,b),r=b;for(o in r)if(r.hasOwnProperty(o)){var a=r[o];o==="style"?Ja(t,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Va(t,a)):o==="children"?typeof a=="string"?(i!=="textarea"||a!=="")&&ki(t,a):typeof a=="number"&&ki(t,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ji.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Q("scroll",t):a!=null&&lc(t,o,a,c))}switch(i){case"input":ge(t),Wr(t,e,!1);break;case"textarea":ge(t),Br(t);break;case"option":e.value!=null&&t.setAttribute("value",""+gl(e.value));break;case"select":t.multiple=!!e.multiple,o=e.value,o!=null?El(t,!!e.multiple,o,!1):e.defaultValue!=null&&El(t,!!e.multiple,e.defaultValue,!0);break;default:typeof b.onClick=="function"&&(t.onclick=Ee)}switch(i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}}e&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return q(l),null;case 6:if(t&&l.stateNode!=null)eg(t,l,t.memoizedProps,e);else{if(typeof e!="string"&&l.stateNode===null)throw Error(G(166));if(i=Xl(Ti.current),Xl(Ut.current),Fe(l)){if(e=l.stateNode,i=l.memoizedProps,e[kt]=l,(o=e.nodeValue!==i)&&(t=mt,t!==null))switch(t.tag){case 3:Be(e.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Be(e.nodeValue,i,(t.mode&1)!==0)}o&&(l.flags|=4)}else e=(i.nodeType===9?i:i.ownerDocument).createTextNode(e),e[kt]=l,l.stateNode=e}return q(l),null;case 13:if(J(L),e=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(k&&dt!==null&&l.mode&1&&!(l.flags&128))Xn(),ti(),l.flags|=98560,o=!1;else if(o=Fe(l),e!==null&&e.dehydrated!==null){if(t===null){if(!o)throw Error(G(318));if(o=l.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(G(317));o[kt]=l}else ti(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;q(l),o=!1}else ht!==null&&(qo(ht),ht=null),o=!0;if(!o)return l.flags&65536?l:null}return l.flags&128?(l.lanes=i,l):(e=e!==null,e!==(t!==null&&t.memoizedState!==null)&&e&&(l.child.flags|=8192,l.mode&1&&(t===null||L.current&1?z===0&&(z=3):Nc())),l.updateQueue!==null&&(l.flags|=4),q(l),null);case 4:return ii(),jo(t,l),t===null&&wi(l.stateNode.containerInfo),q(l),null;case 10:return Wc(l.type._context),q(l),null;case 17:return at(l.type)&&De(),q(l),null;case 19:if(J(L),o=l.memoizedState,o===null)return q(l),null;if(e=(l.flags&128)!==0,c=o.rendering,c===null)if(e)ui(o,!1);else{if(z!==0||t!==null&&t.flags&128)for(t=l.child;t!==null;){if(c=tb(t),c!==null){for(l.flags|=128,ui(o,!1),e=c.updateQueue,e!==null&&(l.updateQueue=e,l.flags|=4),l.subtreeFlags=0,e=i,i=l.child;i!==null;)o=i,t=e,o.flags&=14680066,c=o.alternate,c===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,t=c.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return V(L,L.current&1|2),l.child}t=t.sibling}o.tail!==null&&H()>bi&&(l.flags|=128,e=!0,ui(o,!1),l.lanes=4194304)}else{if(!e)if(t=tb(c),t!==null){if(l.flags|=128,e=!0,i=t.updateQueue,i!==null&&(l.updateQueue=i,l.flags|=4),ui(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!k)return q(l),null}else 2*H()-o.renderingStartTime>bi&&i!==1073741824&&(l.flags|=128,e=!0,ui(o,!1),l.lanes=4194304);o.isBackwards?(c.sibling=l.child,l.child=c):(i=o.last,i!==null?i.sibling=c:l.child=c,o.last=c)}return o.tail!==null?(l=o.tail,o.rendering=l,o.tail=l.sibling,o.renderingStartTime=H(),l.sibling=null,i=L.current,V(L,e?i&1|2:i&1),l):(q(l),null);case 22:case 23:return Uc(),e=l.memoizedState!==null,t!==null&&t.memoizedState!==null!==e&&(l.flags|=8192),e&&l.mode&1?gt&1073741824&&(q(l),l.subtreeFlags&6&&(l.flags|=8192)):q(l),null;case 24:return null;case 25:return null}throw Error(G(156,l.tag))}function Jm(t,l){switch(Gc(l),l.tag){case 1:return at(l.type)&&De(),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return ii(),J(rt),J(tt),Rc(),t=l.flags,t&65536&&!(t&128)?(l.flags=t&-65537|128,l):null;case 5:return yc(l),null;case 13:if(J(L),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(G(340));ti()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return J(L),null;case 4:return ii(),null;case 10:return Wc(l.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var ve=!1,$=!1,km=typeof WeakSet=="function"?WeakSet:Set,C=null;function jl(t,l){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(e){O(t,l,e)}else i.current=null}function To(t,l,i){try{i()}catch(e){O(t,l,e)}}var ma=!1;function Lm(t,l){if(Ao=ze,t=an(),Ic(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var e=i.getSelection&&i.getSelection();if(e&&e.rangeCount!==0){i=e.anchorNode;var b=e.anchorOffset,o=e.focusNode;e=e.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break t}var c=0,r=-1,a=-1,d=0,I=0,Z=t,s=null;l:for(;;){for(var p;Z!==i||b!==0&&Z.nodeType!==3||(r=c+b),Z!==o||e!==0&&Z.nodeType!==3||(a=c+e),Z.nodeType===3&&(c+=Z.nodeValue.length),(p=Z.firstChild)!==null;)s=Z,Z=p;for(;;){if(Z===t)break l;if(s===i&&++d===b&&(r=c),s===o&&++I===e&&(a=c),(p=Z.nextSibling)!==null)break;Z=s,s=Z.parentNode}Z=p}i=r===-1||a===-1?null:{start:r,end:a}}else i=null}i=i||{start:0,end:0}}else i=null;for(xo={focusedElem:t,selectionRange:i},ze=!1,C=l;C!==null;)if(l=C,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,C=t;else for(;C!==null;){l=C;try{var W=l.alternate;if(l.flags&1024)switch(l.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var X=W.memoizedProps,f=W.memoizedState,g=l.stateNode,n=g.getSnapshotBeforeUpdate(l.elementType===l.type?X:Rt(l.type,X),f);g.__reactInternalSnapshotBeforeUpdate=n}break;case 3:var m=l.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(u){O(l,l.return,u)}if(t=l.sibling,t!==null){t.return=l.return,C=t;break}C=l.return}return W=ma,ma=!1,W}function Yi(t,l,i){var e=l.updateQueue;if(e=e!==null?e.lastEffect:null,e!==null){var b=e=e.next;do{if((b.tag&t)===t){var o=b.destroy;b.destroy=void 0,o!==void 0&&To(l,i,o)}b=b.next}while(b!==e)}}function Gb(t,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var i=l=l.next;do{if((i.tag&t)===t){var e=i.create;i.destroy=e()}i=i.next}while(i!==l)}}function Eo(t){var l=t.ref;if(l!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof l=="function"?l(t):l.current=t}}function bg(t){var l=t.alternate;l!==null&&(t.alternate=null,bg(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&(delete l[kt],delete l[zi],delete l[Qo],delete l[um],delete l[pm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function og(t){return t.tag===5||t.tag===3||t.tag===4}function sa(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||og(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Do(t,l,i){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?i.nodeType===8?i.parentNode.insertBefore(t,l):i.insertBefore(t,l):(i.nodeType===8?(l=i.parentNode,l.insertBefore(t,i)):(l=i,l.appendChild(t)),i=i._reactRootContainer,i!=null||l.onclick!==null||(l.onclick=Ee));else if(e!==4&&(t=t.child,t!==null))for(Do(t,l,i),t=t.sibling;t!==null;)Do(t,l,i),t=t.sibling}function Mo(t,l,i){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?i.insertBefore(t,l):i.appendChild(t);else if(e!==4&&(t=t.child,t!==null))for(Mo(t,l,i),t=t.sibling;t!==null;)Mo(t,l,i),t=t.sibling}var D=null,vt=!1;function Kt(t,l,i){for(i=i.child;i!==null;)cg(t,l,i),i=i.sibling}function cg(t,l,i){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(ab,i)}catch{}switch(i.tag){case 5:$||jl(i,l);case 6:var e=D,b=vt;D=null,Kt(t,l,i),D=e,vt=b,D!==null&&(vt?(t=D,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):D.removeChild(i.stateNode));break;case 18:D!==null&&(vt?(t=D,i=i.stateNode,t.nodeType===8?Pb(t.parentNode,i):t.nodeType===1&&Pb(t,i),Oi(t)):Pb(D,i.stateNode));break;case 4:e=D,b=vt,D=i.stateNode.containerInfo,vt=!0,Kt(t,l,i),D=e,vt=b;break;case 0:case 11:case 14:case 15:if(!$&&(e=i.updateQueue,e!==null&&(e=e.lastEffect,e!==null))){b=e=e.next;do{var o=b,c=o.destroy;o=o.tag,c!==void 0&&(o&2||o&4)&&To(i,l,c),b=b.next}while(b!==e)}Kt(t,l,i);break;case 1:if(!$&&(jl(i,l),e=i.stateNode,typeof e.componentWillUnmount=="function"))try{e.props=i.memoizedProps,e.state=i.memoizedState,e.componentWillUnmount()}catch(r){O(i,l,r)}Kt(t,l,i);break;case 21:Kt(t,l,i);break;case 22:i.mode&1?($=(e=$)||i.memoizedState!==null,Kt(t,l,i),$=e):Kt(t,l,i);break;default:Kt(t,l,i)}}function Ia(t){var l=t.updateQueue;if(l!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new km),l.forEach(function(e){var b=jm.bind(null,t,e);i.has(e)||(i.add(e),e.then(b,b))})}}function yt(t,l){var i=l.deletions;if(i!==null)for(var e=0;e<i.length;e++){var b=i[e];try{var o=t,c=l,r=c;t:for(;r!==null;){switch(r.tag){case 5:D=r.stateNode,vt=!1;break t;case 3:D=r.stateNode.containerInfo,vt=!0;break t;case 4:D=r.stateNode.containerInfo,vt=!0;break t}r=r.return}if(D===null)throw Error(G(160));cg(o,c,b),D=null,vt=!1;var a=b.alternate;a!==null&&(a.return=null),b.return=null}catch(d){O(b,l,d)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)rg(l,t),l=l.sibling}function rg(t,l){var i=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(l,t),Qt(t),e&4){try{Yi(3,t,t.return),Gb(3,t)}catch(X){O(t,t.return,X)}try{Yi(5,t,t.return)}catch(X){O(t,t.return,X)}}break;case 1:yt(l,t),Qt(t),e&512&&i!==null&&jl(i,i.return);break;case 5:if(yt(l,t),Qt(t),e&512&&i!==null&&jl(i,i.return),t.flags&32){var b=t.stateNode;try{ki(b,"")}catch(X){O(t,t.return,X)}}if(e&4&&(b=t.stateNode,b!=null)){var o=t.memoizedProps,c=i!==null?i.memoizedProps:o,r=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{r==="input"&&o.type==="radio"&&o.name!=null&&Aa(b,o),po(r,c);var d=po(r,o);for(c=0;c<a.length;c+=2){var I=a[c],Z=a[c+1];I==="style"?Ja(b,Z):I==="dangerouslySetInnerHTML"?Va(b,Z):I==="children"?ki(b,Z):lc(b,I,Z,d)}switch(r){case"input":so(b,o);break;case"textarea":xa(b,o);break;case"select":var s=b._wrapperState.wasMultiple;b._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?El(b,!!o.multiple,p,!1):s!==!!o.multiple&&(o.defaultValue!=null?El(b,!!o.multiple,o.defaultValue,!0):El(b,!!o.multiple,o.multiple?[]:"",!1))}b[zi]=o}catch(X){O(t,t.return,X)}}break;case 6:if(yt(l,t),Qt(t),e&4){if(t.stateNode===null)throw Error(G(162));b=t.stateNode,o=t.memoizedProps;try{b.nodeValue=o}catch(X){O(t,t.return,X)}}break;case 3:if(yt(l,t),Qt(t),e&4&&i!==null&&i.memoizedState.isDehydrated)try{Oi(l.containerInfo)}catch(X){O(t,t.return,X)}break;case 4:yt(l,t),Qt(t);break;case 13:yt(l,t),Qt(t),b=t.child,b.flags&8192&&(o=b.memoizedState!==null,b.stateNode.isHidden=o,!o||b.alternate!==null&&b.alternate.memoizedState!==null||(kc=H())),e&4&&Ia(t);break;case 22:if(I=i!==null&&i.memoizedState!==null,t.mode&1?($=(d=$)||I,yt(l,t),$=d):yt(l,t),Qt(t),e&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!I&&t.mode&1)for(C=t,I=t.child;I!==null;){for(Z=C=I;C!==null;){switch(s=C,p=s.child,s.tag){case 0:case 11:case 14:case 15:Yi(4,s,s.return);break;case 1:jl(s,s.return);var W=s.stateNode;if(typeof W.componentWillUnmount=="function"){e=s,i=s.return;try{l=e,W.props=l.memoizedProps,W.state=l.memoizedState,W.componentWillUnmount()}catch(X){O(e,i,X)}}break;case 5:jl(s,s.return);break;case 22:if(s.memoizedState!==null){Ga(Z);continue}}p!==null?(p.return=s,C=p):Ga(Z)}I=I.sibling}t:for(I=null,Z=t;;){if(Z.tag===5){if(I===null){I=Z;try{b=Z.stateNode,d?(o=b.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(r=Z.stateNode,a=Z.memoizedProps.style,c=a!=null&&a.hasOwnProperty("display")?a.display:null,r.style.display=Qa("display",c))}catch(X){O(t,t.return,X)}}}else if(Z.tag===6){if(I===null)try{Z.stateNode.nodeValue=d?"":Z.memoizedProps}catch(X){O(t,t.return,X)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===t)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===t)break t;for(;Z.sibling===null;){if(Z.return===null||Z.return===t)break t;I===Z&&(I=null),Z=Z.return}I===Z&&(I=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:yt(l,t),Qt(t),e&4&&Ia(t);break;case 21:break;default:yt(l,t),Qt(t)}}function Qt(t){var l=t.flags;if(l&2){try{t:{for(var i=t.return;i!==null;){if(og(i)){var e=i;break t}i=i.return}throw Error(G(160))}switch(e.tag){case 5:var b=e.stateNode;e.flags&32&&(ki(b,""),e.flags&=-33);var o=sa(t);Mo(t,o,b);break;case 3:case 4:var c=e.stateNode.containerInfo,r=sa(t);Do(t,r,c);break;default:throw Error(G(161))}}catch(a){O(t,t.return,a)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function Um(t,l,i){C=t,ag(t,l,i)}function ag(t,l,i){for(var e=(t.mode&1)!==0;C!==null;){var b=C,o=b.child;if(b.tag===22&&e){var c=b.memoizedState!==null||ve;if(!c){var r=b.alternate,a=r!==null&&r.memoizedState!==null||$;r=ve;var d=$;if(ve=c,($=a)&&!d)for(C=b;C!==null;)c=C,a=c.child,c.tag===22&&c.memoizedState!==null?ua(b):a!==null?(a.return=c,C=a):ua(b);for(;o!==null;)C=o,ag(o,l,i),o=o.sibling;C=b,ve=r,$=d}Za(t,l,i)}else b.subtreeFlags&8772&&o!==null?(o.return=b,C=o):Za(t,l,i)}}function Za(t){for(;C!==null;){var l=C;if(l.flags&8772){var i=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:$||Gb(5,l);break;case 1:var e=l.stateNode;if(l.flags&4&&!$)if(i===null)e.componentDidMount();else{var b=l.elementType===l.type?i.memoizedProps:Rt(l.type,i.memoizedProps);e.componentDidUpdate(b,i.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}var o=l.updateQueue;o!==null&&$r(l,o,e);break;case 3:var c=l.updateQueue;if(c!==null){if(i=null,l.child!==null)switch(l.child.tag){case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}$r(l,c,i)}break;case 5:var r=l.stateNode;if(i===null&&l.flags&4){i=r;var a=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break;case"img":a.src&&(i.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var d=l.alternate;if(d!==null){var I=d.memoizedState;if(I!==null){var Z=I.dehydrated;Z!==null&&Oi(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}$||l.flags&512&&Eo(l)}catch(s){O(l,l.return,s)}}if(l===t){C=null;break}if(i=l.sibling,i!==null){i.return=l.return,C=i;break}C=l.return}}function Ga(t){for(;C!==null;){var l=C;if(l===t){C=null;break}var i=l.sibling;if(i!==null){i.return=l.return,C=i;break}C=l.return}}function ua(t){for(;C!==null;){var l=C;try{switch(l.tag){case 0:case 11:case 15:var i=l.return;try{Gb(4,l)}catch(a){O(l,i,a)}break;case 1:var e=l.stateNode;if(typeof e.componentDidMount=="function"){var b=l.return;try{e.componentDidMount()}catch(a){O(l,b,a)}}var o=l.return;try{Eo(l)}catch(a){O(l,o,a)}break;case 5:var c=l.return;try{Eo(l)}catch(a){O(l,c,a)}}}catch(a){O(l,l.return,a)}if(l===t){C=null;break}var r=l.sibling;if(r!==null){r.return=l.return,C=r;break}C=l.return}}var Nm=Math.ceil,eb=Et.ReactCurrentDispatcher,Qc=Et.ReactCurrentOwner,Wt=Et.ReactCurrentBatchConfig,h=0,E=null,w=null,M=0,gt=0,Tl=sl(0),z=0,Ki=null,hl=0,ub=0,Jc=0,Vi=null,ot=null,kc=0,bi=1/0,Nt=null,bb=!1,Ko=null,rl=null,he=!1,ll=null,ob=0,Qi=0,Po=null,Le=-1,Ue=0;function et(){return h&6?H():Le!==-1?Le:Le=H()}function al(t){return t.mode&1?h&2&&M!==0?M&-M:Wm.transition!==null?(Ue===0&&(Ue=Ta()),Ue):(t=x,t!==0||(t=window.event,t=t===void 0?16:qa(t.type)),t):1}function xt(t,l,i,e){if(50<Qi)throw Qi=0,Po=null,Error(G(185));Pi(t,i,e),(!(h&2)||t!==E)&&(t===E&&(!(h&2)&&(ub|=i),z===4&&$t(t,M)),nt(t,e),i===1&&h===0&&!(l.mode&1)&&(bi=H()+500,sb&&Il()))}function nt(t,l){var i=t.callbackNode;Bd(t,l);var e=Se(t,t===E?M:0);if(e===0)i!==null&&Rr(i),t.callbackNode=null,t.callbackPriority=0;else if(l=e&-e,t.callbackPriority!==l){if(i!=null&&Rr(i),l===1)t.tag===0?Cm(pa.bind(null,t)):pn(pa.bind(null,t)),Zm(function(){!(h&6)&&Il()}),i=null;else{switch(Ea(e)){case 1:i=cc;break;case 4:i=za;break;case 16:i=we;break;case 536870912:i=ja;break;default:i=we}i=Gg(i,ng.bind(null,t))}t.callbackPriority=l,t.callbackNode=i}}function ng(t,l){if(Le=-1,Ue=0,h&6)throw Error(G(327));var i=t.callbackNode;if(_l()&&t.callbackNode!==i)return null;var e=Se(t,t===E?M:0);if(e===0)return null;if(e&30||e&t.expiredLanes||l)l=cb(t,e);else{l=e;var b=h;h|=2;var o=dg();(E!==t||M!==l)&&(Nt=null,bi=H()+500,Bl(t,l));do try{Hm();break}catch(r){gg(t,r)}while(!0);Cc(),eb.current=o,h=b,w!==null?l=0:(E=null,M=0,l=z)}if(l!==0){if(l===2&&(b=Fo(t),b!==0&&(e=b,l=_o(t,b))),l===1)throw i=Ki,Bl(t,0),$t(t,e),nt(t,H()),i;if(l===6)$t(t,e);else{if(b=t.current.alternate,!(e&30)&&!Om(b)&&(l=cb(t,e),l===2&&(o=Fo(t),o!==0&&(e=o,l=_o(t,o))),l===1))throw i=Ki,Bl(t,0),$t(t,e),nt(t,H()),i;switch(t.finishedWork=b,t.finishedLanes=e,l){case 0:case 1:throw Error(G(345));case 2:pl(t,ot,Nt);break;case 3:if($t(t,e),(e&130023424)===e&&(l=kc+500-H(),10<l)){if(Se(t,0)!==0)break;if(b=t.suspendedLanes,(b&e)!==e){et(),t.pingedLanes|=t.suspendedLanes&b;break}t.timeoutHandle=Vo(pl.bind(null,t,ot,Nt),l);break}pl(t,ot,Nt);break;case 4:if($t(t,e),(e&4194240)===e)break;for(l=t.eventTimes,b=-1;0<e;){var c=31-At(e);o=1<<c,c=l[c],c>b&&(b=c),e&=~o}if(e=b,e=H()-e,e=(120>e?120:480>e?480:1080>e?1080:1920>e?1920:3e3>e?3e3:4320>e?4320:1960*Nm(e/1960))-e,10<e){t.timeoutHandle=Vo(pl.bind(null,t,ot,Nt),e);break}pl(t,ot,Nt);break;case 5:pl(t,ot,Nt);break;default:throw Error(G(329))}}}return nt(t,H()),t.callbackNode===i?ng.bind(null,t):null}function _o(t,l){var i=Vi;return t.current.memoizedState.isDehydrated&&(Bl(t,l).flags|=256),t=cb(t,l),t!==2&&(l=ot,ot=i,l!==null&&qo(l)),t}function qo(t){ot===null?ot=t:ot.push.apply(ot,t)}function Om(t){for(var l=t;;){if(l.flags&16384){var i=l.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var e=0;e<i.length;e++){var b=i[e],o=b.getSnapshot;b=b.value;try{if(!Yt(o(),b))return!1}catch{return!1}}}if(i=l.child,l.subtreeFlags&16384&&i!==null)i.return=l,l=i;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function $t(t,l){for(l&=~Jc,l&=~ub,t.suspendedLanes|=l,t.pingedLanes&=~l,t=t.expirationTimes;0<l;){var i=31-At(l),e=1<<i;t[i]=-1,l&=~e}}function pa(t){if(h&6)throw Error(G(327));_l();var l=Se(t,0);if(!(l&1))return nt(t,H()),null;var i=cb(t,l);if(t.tag!==0&&i===2){var e=Fo(t);e!==0&&(l=e,i=_o(t,e))}if(i===1)throw i=Ki,Bl(t,0),$t(t,l),nt(t,H()),i;if(i===6)throw Error(G(345));return t.finishedWork=t.current.alternate,t.finishedLanes=l,pl(t,ot,Nt),nt(t,H()),null}function Lc(t,l){var i=h;h|=1;try{return t(l)}finally{h=i,h===0&&(bi=H()+500,sb&&Il())}}function Al(t){ll!==null&&ll.tag===0&&!(h&6)&&_l();var l=h;h|=1;var i=Wt.transition,e=x;try{if(Wt.transition=null,x=1,t)return t()}finally{x=e,Wt.transition=i,h=l,!(h&6)&&Il()}}function Uc(){gt=Tl.current,J(Tl)}function Bl(t,l){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,Im(i)),w!==null)for(i=w.return;i!==null;){var e=i;switch(Gc(e),e.tag){case 1:e=e.type.childContextTypes,e!=null&&De();break;case 3:ii(),J(rt),J(tt),Rc();break;case 5:yc(e);break;case 4:ii();break;case 13:J(L);break;case 19:J(L);break;case 10:Wc(e.type._context);break;case 22:case 23:Uc()}i=i.return}if(E=t,w=t=nl(t.current,null),M=gt=l,z=0,Ki=null,Jc=ub=hl=0,ot=Vi=null,Wl!==null){for(l=0;l<Wl.length;l++)if(i=Wl[l],e=i.interleaved,e!==null){i.interleaved=null;var b=e.next,o=i.pending;if(o!==null){var c=o.next;o.next=b,e.next=c}i.pending=e}Wl=null}return t}function gg(t,l){do{var i=w;try{if(Cc(),Qe.current=ib,lb){for(var e=U.memoizedState;e!==null;){var b=e.queue;b!==null&&(b.pending=null),e=e.next}lb=!1}if(vl=0,T=S=U=null,xi=!1,Ei=0,Qc.current=null,i===null||i.return===null){z=1,Ki=l,w=null;break}t:{var o=t,c=i.return,r=i,a=l;if(l=M,r.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,I=r,Z=I.tag;if(!(I.mode&1)&&(Z===0||Z===11||Z===15)){var s=I.alternate;s?(I.updateQueue=s.updateQueue,I.memoizedState=s.memoizedState,I.lanes=s.lanes):(I.updateQueue=null,I.memoizedState=null)}var p=oa(c);if(p!==null){p.flags&=-257,ca(p,c,r,o,l),p.mode&1&&ba(o,d,l),l=p,a=d;var W=l.updateQueue;if(W===null){var X=new Set;X.add(a),l.updateQueue=X}else W.add(a);break t}else{if(!(l&1)){ba(o,d,l),Nc();break t}a=Error(G(426))}}else if(k&&r.mode&1){var f=oa(c);if(f!==null){!(f.flags&65536)&&(f.flags|=256),ca(f,c,r,o,l),uc(ei(a,r));break t}}o=a=ei(a,r),z!==4&&(z=2),Vi===null?Vi=[o]:Vi.push(o),o=c;do{switch(o.tag){case 3:o.flags|=65536,l&=-l,o.lanes|=l;var g=Dn(o,a,l);qr(o,g);break t;case 1:r=a;var n=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rl===null||!rl.has(m)))){o.flags|=65536,l&=-l,o.lanes|=l;var u=Mn(o,r,l);qr(o,u);break t}}o=o.return}while(o!==null)}sg(i)}catch(B){l=B,w===i&&i!==null&&(w=i=i.return);continue}break}while(!0)}function dg(){var t=eb.current;return eb.current=ib,t===null?ib:t}function Nc(){(z===0||z===3||z===2)&&(z=4),E===null||!(hl&268435455)&&!(ub&268435455)||$t(E,M)}function cb(t,l){var i=h;h|=2;var e=dg();(E!==t||M!==l)&&(Nt=null,Bl(t,l));do try{fm();break}catch(b){gg(t,b)}while(!0);if(Cc(),h=i,eb.current=e,w!==null)throw Error(G(261));return E=null,M=0,z}function fm(){for(;w!==null;)mg(w)}function Hm(){for(;w!==null&&!sd();)mg(w)}function mg(t){var l=Zg(t.alternate,t,gt);t.memoizedProps=t.pendingProps,l===null?sg(t):w=l,Qc.current=null}function sg(t){var l=t;do{var i=l.alternate;if(t=l.return,l.flags&32768){if(i=Jm(i,l),i!==null){i.flags&=32767,w=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{z=6,w=null;return}}else if(i=Qm(i,l,gt),i!==null){w=i;return}if(l=l.sibling,l!==null){w=l;return}w=l=t}while(l!==null);z===0&&(z=5)}function pl(t,l,i){var e=x,b=Wt.transition;try{Wt.transition=null,x=1,wm(t,l,i,e)}finally{Wt.transition=b,x=e}return null}function wm(t,l,i,e){do _l();while(ll!==null);if(h&6)throw Error(G(327));i=t.finishedWork;var b=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(G(177));t.callbackNode=null,t.callbackPriority=0;var o=i.lanes|i.childLanes;if(Fd(t,o),t===E&&(w=E=null,M=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||he||(he=!0,Gg(we,function(){return _l(),null})),o=(i.flags&15990)!==0,i.subtreeFlags&15990||o){o=Wt.transition,Wt.transition=null;var c=x;x=1;var r=h;h|=4,Qc.current=null,Lm(t,i),rg(i,t),nm(xo),ze=!!Ao,xo=Ao=null,t.current=i,Um(i,t,b),Id(),h=r,x=c,Wt.transition=o}else t.current=i;if(he&&(he=!1,ll=t,ob=b),o=t.pendingLanes,o===0&&(rl=null),ud(i.stateNode,e),nt(t,H()),l!==null)for(e=t.onRecoverableError,i=0;i<l.length;i++)b=l[i],e(b.value,{componentStack:b.stack,digest:b.digest});if(bb)throw bb=!1,t=Ko,Ko=null,t;return ob&1&&t.tag!==0&&_l(),o=t.pendingLanes,o&1?t===Po?Qi++:(Qi=0,Po=t):Qi=0,Il(),null}function _l(){if(ll!==null){var t=Ea(ob),l=Wt.transition,i=x;try{if(Wt.transition=null,x=16>t?16:t,ll===null)var e=!1;else{if(t=ll,ll=null,ob=0,h&6)throw Error(G(331));var b=h;for(h|=4,C=t.current;C!==null;){var o=C,c=o.child;if(C.flags&16){var r=o.deletions;if(r!==null){for(var a=0;a<r.length;a++){var d=r[a];for(C=d;C!==null;){var I=C;switch(I.tag){case 0:case 11:case 15:Yi(8,I,o)}var Z=I.child;if(Z!==null)Z.return=I,C=Z;else for(;C!==null;){I=C;var s=I.sibling,p=I.return;if(bg(I),I===d){C=null;break}if(s!==null){s.return=p,C=s;break}C=p}}}var W=o.alternate;if(W!==null){var X=W.child;if(X!==null){W.child=null;do{var f=X.sibling;X.sibling=null,X=f}while(X!==null)}}C=o}}if(o.subtreeFlags&2064&&c!==null)c.return=o,C=c;else t:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,C=g;break t}C=o.return}}var n=t.current;for(C=n;C!==null;){c=C;var m=c.child;if(c.subtreeFlags&2064&&m!==null)m.return=c,C=m;else t:for(c=n;C!==null;){if(r=C,r.flags&2048)try{switch(r.tag){case 0:case 11:case 15:Gb(9,r)}}catch(B){O(r,r.return,B)}if(r===c){C=null;break t}var u=r.sibling;if(u!==null){u.return=r.return,C=u;break t}C=r.return}}if(h=b,Il(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(ab,t)}catch{}e=!0}return e}finally{x=i,Wt.transition=l}}return!1}function Ca(t,l,i){l=ei(i,l),l=Dn(t,l,1),t=cl(t,l,1),l=et(),t!==null&&(Pi(t,1,l),nt(t,l))}function O(t,l,i){if(t.tag===3)Ca(t,t,i);else for(;l!==null;){if(l.tag===3){Ca(l,t,i);break}else if(l.tag===1){var e=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(rl===null||!rl.has(e))){t=ei(i,t),t=Mn(l,t,1),l=cl(l,t,1),t=et(),l!==null&&(Pi(l,1,t),nt(l,t));break}}l=l.return}}function Sm(t,l,i){var e=t.pingCache;e!==null&&e.delete(l),l=et(),t.pingedLanes|=t.suspendedLanes&i,E===t&&(M&i)===i&&(z===4||z===3&&(M&130023424)===M&&500>H()-kc?Bl(t,0):Jc|=i),nt(t,l)}function Ig(t,l){l===0&&(t.mode&1?(l=se,se<<=1,!(se&130023424)&&(se=4194304)):l=1);var i=et();t=jt(t,l),t!==null&&(Pi(t,l,i),nt(t,i))}function zm(t){var l=t.memoizedState,i=0;l!==null&&(i=l.retryLane),Ig(t,i)}function jm(t,l){var i=0;switch(t.tag){case 13:var e=t.stateNode,b=t.memoizedState;b!==null&&(i=b.retryLane);break;case 19:e=t.stateNode;break;default:throw Error(G(314))}e!==null&&e.delete(l),Ig(t,i)}var Zg;Zg=function(t,l,i){if(t!==null)if(t.memoizedProps!==l.pendingProps||rt.current)ct=!0;else{if(!(t.lanes&i)&&!(l.flags&128))return ct=!1,Vm(t,l,i);ct=!!(t.flags&131072)}else ct=!1,k&&l.flags&1048576&&Cn(l,Pe,l.index);switch(l.lanes=0,l.tag){case 2:var e=l.type;ke(t,l),t=l.pendingProps;var b=$l(l,tt.current);Pl(l,i),b=hc(null,l,e,t,b,i);var o=Ac();return l.flags|=1,typeof b=="object"&&b!==null&&typeof b.render=="function"&&b.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,at(e)?(o=!0,Me(l)):o=!1,l.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,Bc(l),b.updater=Zb,l.stateNode=b,b._reactInternals=l,Oo(l,e,t,i),l=wo(null,l,e,!0,o,i)):(l.tag=0,k&&o&&Zc(l),it(null,l,b,i),l=l.child),l;case 16:e=l.elementType;t:{switch(ke(t,l),t=l.pendingProps,b=e._init,e=b(e._payload),l.type=e,b=l.tag=Em(e),t=Rt(e,t),b){case 0:l=Ho(null,l,e,t,i);break t;case 1:l=na(null,l,e,t,i);break t;case 11:l=ra(null,l,e,t,i);break t;case 14:l=aa(null,l,e,Rt(e.type,t),i);break t}throw Error(G(306,e,""))}return l;case 0:return e=l.type,b=l.pendingProps,b=l.elementType===e?b:Rt(e,b),Ho(t,l,e,b,i);case 1:return e=l.type,b=l.pendingProps,b=l.elementType===e?b:Rt(e,b),na(t,l,e,b,i);case 3:t:{if(qn(l),t===null)throw Error(G(387));e=l.pendingProps,o=l.memoizedState,b=o.element,Rn(t,l),$e(l,e,null,i);var c=l.memoizedState;if(e=c.element,o.isDehydrated)if(o={element:e,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},l.updateQueue.baseState=o,l.memoizedState=o,l.flags&256){b=ei(Error(G(423)),l),l=ga(t,l,e,i,b);break t}else if(e!==b){b=ei(Error(G(424)),l),l=ga(t,l,e,i,b);break t}else for(dt=ol(l.stateNode.containerInfo.firstChild),mt=l,k=!0,ht=null,i=Fn(l,null,e,i),l.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ti(),e===b){l=Tt(t,l,i);break t}it(t,l,e,i)}l=l.child}return l;case 5:return vn(l),t===null&&Lo(l),e=l.type,b=l.pendingProps,o=t!==null?t.memoizedProps:null,c=b.children,Yo(e,b)?c=null:o!==null&&Yo(e,o)&&(l.flags|=32),_n(t,l),it(t,l,c,i),l.child;case 6:return t===null&&Lo(l),null;case 13:return $n(t,l,i);case 4:return Fc(l,l.stateNode.containerInfo),e=l.pendingProps,t===null?l.child=li(l,null,e,i):it(t,l,e,i),l.child;case 11:return e=l.type,b=l.pendingProps,b=l.elementType===e?b:Rt(e,b),ra(t,l,e,b,i);case 7:return it(t,l,l.pendingProps,i),l.child;case 8:return it(t,l,l.pendingProps.children,i),l.child;case 12:return it(t,l,l.pendingProps.children,i),l.child;case 10:t:{if(e=l.type._context,b=l.pendingProps,o=l.memoizedProps,c=b.value,V(_e,e._currentValue),e._currentValue=c,o!==null)if(Yt(o.value,c)){if(o.children===b.children&&!rt.current){l=Tt(t,l,i);break t}}else for(o=l.child,o!==null&&(o.return=l);o!==null;){var r=o.dependencies;if(r!==null){c=o.child;for(var a=r.firstContext;a!==null;){if(a.context===e){if(o.tag===1){a=wt(-1,i&-i),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var I=d.pending;I===null?a.next=a:(a.next=I.next,I.next=a),d.pending=a}}o.lanes|=i,a=o.alternate,a!==null&&(a.lanes|=i),Uo(o.return,i,l),r.lanes|=i;break}a=a.next}}else if(o.tag===10)c=o.type===l.type?null:o.child;else if(o.tag===18){if(c=o.return,c===null)throw Error(G(341));c.lanes|=i,r=c.alternate,r!==null&&(r.lanes|=i),Uo(c,i,l),c=o.sibling}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===l){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}it(t,l,b.children,i),l=l.child}return l;case 9:return b=l.type,e=l.pendingProps.children,Pl(l,i),b=Xt(b),e=e(b),l.flags|=1,it(t,l,e,i),l.child;case 14:return e=l.type,b=Rt(e,l.pendingProps),b=Rt(e.type,b),aa(t,l,e,b,i);case 15:return Kn(t,l,l.type,l.pendingProps,i);case 17:return e=l.type,b=l.pendingProps,b=l.elementType===e?b:Rt(e,b),ke(t,l),l.tag=1,at(e)?(t=!0,Me(l)):t=!1,Pl(l,i),En(l,e,b),Oo(l,e,b,i),wo(null,l,e,!0,t,i);case 19:return tg(t,l,i);case 22:return Pn(t,l,i)}throw Error(G(156,l.tag))};function Gg(t,l){return Sa(t,l)}function Tm(t,l,i,e){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,l,i,e){return new Tm(t,l,i,e)}function Oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Em(t){if(typeof t=="function")return Oc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ec)return 11;if(t===bc)return 14}return 2}function nl(t,l){var i=t.alternate;return i===null?(i=Ct(t.tag,l,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=l,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,l=t.dependencies,i.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Ne(t,l,i,e,b,o){var c=2;if(e=t,typeof t=="function")Oc(t)&&(c=1);else if(typeof t=="string")c=5;else t:switch(t){case Ll:return Fl(i.children,b,o,l);case ic:c=8,b|=8;break;case ro:return t=Ct(12,i,l,b|2),t.elementType=ro,t.lanes=o,t;case ao:return t=Ct(13,i,l,b),t.elementType=ao,t.lanes=o,t;case no:return t=Ct(19,i,l,b),t.elementType=no,t.lanes=o,t;case Ra:return pb(i,b,o,l);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fa:c=10;break t;case ya:c=9;break t;case ec:c=11;break t;case bc:c=14;break t;case Pt:c=16,e=null;break t}throw Error(G(130,t==null?t:typeof t,""))}return l=Ct(c,i,l,b),l.elementType=t,l.type=e,l.lanes=o,l}function Fl(t,l,i,e){return t=Ct(7,t,e,l),t.lanes=i,t}function pb(t,l,i,e){return t=Ct(22,t,e,l),t.elementType=Ra,t.lanes=i,t.stateNode={isHidden:!1},t}function bo(t,l,i){return t=Ct(6,t,null,l),t.lanes=i,t}function oo(t,l,i){return l=Ct(4,t.children!==null?t.children:[],t.key,l),l.lanes=i,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}function Dm(t,l,i,e,b){this.tag=l,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sb(0),this.expirationTimes=Sb(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sb(0),this.identifierPrefix=e,this.onRecoverableError=b,this.mutableSourceEagerHydrationData=null}function fc(t,l,i,e,b,o,c,r,a){return t=new Dm(t,l,i,r,a),l===1?(l=1,o===!0&&(l|=8)):l=0,o=Ct(3,null,null,l),t.current=o,o.stateNode=t,o.memoizedState={element:e,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(o),t}function Mm(t,l,i){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kl,key:e==null?null:""+e,children:t,containerInfo:l,implementation:i}}function ug(t){if(!t)return dl;t=t._reactInternals;t:{if(Yl(t)!==t||t.tag!==1)throw Error(G(170));var l=t;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(at(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(G(171))}if(t.tag===1){var i=t.type;if(at(i))return un(t,i,l)}return l}function pg(t,l,i,e,b,o,c,r,a){return t=fc(i,e,!0,t,b,o,c,r,a),t.context=ug(null),i=t.current,e=et(),b=al(i),o=wt(e,b),o.callback=l??null,cl(i,o,b),t.current.lanes=b,Pi(t,b,e),nt(t,e),t}function Cb(t,l,i,e){var b=l.current,o=et(),c=al(b);return i=ug(i),l.context===null?l.context=i:l.pendingContext=i,l=wt(o,c),l.payload={element:t},e=e===void 0?null:e,e!==null&&(l.callback=e),t=cl(b,l,c),t!==null&&(xt(t,b,c,o),Ve(t,b,c)),c}function rb(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wa(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<l?i:l}}function Hc(t,l){Wa(t,l),(t=t.alternate)&&Wa(t,l)}function Km(){return null}var Cg=typeof reportError=="function"?reportError:function(t){console.error(t)};function wc(t){this._internalRoot=t}Wb.prototype.render=wc.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(G(409));Cb(t,l,null,null)};Wb.prototype.unmount=wc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;Al(function(){Cb(null,t,null,null)}),l[zt]=null}};function Wb(t){this._internalRoot=t}Wb.prototype.unstable_scheduleHydration=function(t){if(t){var l=Ka();t={blockedOn:null,target:t,priority:l};for(var i=0;i<qt.length&&l!==0&&l<qt[i].priority;i++);qt.splice(i,0,t),i===0&&_a(t)}};function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xb(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xa(){}function Pm(t,l,i,e,b){if(b){if(typeof e=="function"){var o=e;e=function(){var d=rb(c);o.call(d)}}var c=pg(l,e,t,0,null,!1,!1,"",Xa);return t._reactRootContainer=c,t[zt]=c.current,wi(t.nodeType===8?t.parentNode:t),Al(),c}for(;b=t.lastChild;)t.removeChild(b);if(typeof e=="function"){var r=e;e=function(){var d=rb(a);r.call(d)}}var a=fc(t,0,!1,null,null,!1,!1,"",Xa);return t._reactRootContainer=a,t[zt]=a.current,wi(t.nodeType===8?t.parentNode:t),Al(function(){Cb(l,a,i,e)}),a}function Bb(t,l,i,e,b){var o=i._reactRootContainer;if(o){var c=o;if(typeof b=="function"){var r=b;b=function(){var a=rb(c);r.call(a)}}Cb(l,c,t,b)}else c=Pm(i,l,t,b,e);return rb(c)}Da=function(t){switch(t.tag){case 3:var l=t.stateNode;if(l.current.memoizedState.isDehydrated){var i=Bi(l.pendingLanes);i!==0&&(rc(l,i|1),nt(l,H()),!(h&6)&&(bi=H()+500,Il()))}break;case 13:Al(function(){var e=jt(t,1);if(e!==null){var b=et();xt(e,t,1,b)}}),Hc(t,1)}};ac=function(t){if(t.tag===13){var l=jt(t,134217728);if(l!==null){var i=et();xt(l,t,134217728,i)}Hc(t,134217728)}};Ma=function(t){if(t.tag===13){var l=al(t),i=jt(t,l);if(i!==null){var e=et();xt(i,t,l,e)}Hc(t,l)}};Ka=function(){return x};Pa=function(t,l){var i=x;try{return x=t,l()}finally{x=i}};Wo=function(t,l,i){switch(l){case"input":if(so(t,i),l=i.name,i.type==="radio"&&l!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<i.length;l++){var e=i[l];if(e!==t&&e.form===t.form){var b=mb(e);if(!b)throw Error(G(90));ha(e),so(e,b)}}}break;case"textarea":xa(t,i);break;case"select":l=i.value,l!=null&&El(t,!!i.multiple,l,!1)}};Ua=Lc;Na=Al;var _m={usingClientEntryPoint:!1,Events:[qi,fl,mb,ka,La,Lc]},pi={findFiberByHostInstance:Cl,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qm={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ha(t),t===null?null:t.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||Km,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ci.isDisabled&&Ci.supportsFiber))try{ab=Ci.inject(qm),Lt=Ci}catch{}var Ci;Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;Zt.createPortal=function(t,l){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(l))throw Error(G(200));return Mm(t,l,null,i)};Zt.createRoot=function(t,l){if(!Sc(t))throw Error(G(299));var i=!1,e="",b=Cg;return l!=null&&(l.unstable_strictMode===!0&&(i=!0),l.identifierPrefix!==void 0&&(e=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),l=fc(t,1,!1,null,null,i,!1,e,b),t[zt]=l.current,wi(t.nodeType===8?t.parentNode:t),new wc(l)};Zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(G(188)):(t=Object.keys(t).join(","),Error(G(268,t)));return t=Ha(l),t=t===null?null:t.stateNode,t};Zt.flushSync=function(t){return Al(t)};Zt.hydrate=function(t,l,i){if(!Xb(l))throw Error(G(200));return Bb(null,t,l,!0,i)};Zt.hydrateRoot=function(t,l,i){if(!Sc(t))throw Error(G(405));var e=i!=null&&i.hydratedSources||null,b=!1,o="",c=Cg;if(i!=null&&(i.unstable_strictMode===!0&&(b=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),l=pg(l,null,t,1,i??null,b,!1,o,c),t[zt]=l.current,wi(t),e)for(t=0;t<e.length;t++)i=e[t],b=i._getVersion,b=b(i._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[i,b]:l.mutableSourceEagerHydrationData.push(i,b);return new Wb(l)};Zt.render=function(t,l,i){if(!Xb(l))throw Error(G(200));return Bb(null,t,l,!1,i)};Zt.unmountComponentAtNode=function(t){if(!Xb(t))throw Error(G(40));return t._reactRootContainer?(Al(function(){Bb(null,null,t,!1,function(){t._reactRootContainer=null,t[zt]=null})}),!0):!1};Zt.unstable_batchedUpdates=Lc;Zt.unstable_renderSubtreeIntoContainer=function(t,l,i,e){if(!Xb(i))throw Error(G(200));if(t==null||t._reactInternals===void 0)throw Error(G(38));return Bb(t,l,i,!1,e)};Zt.version="18.3.1-next-f1338f8080-20240426"});var Fg=Zl((as,Bg)=>{"use strict";function Xg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xg)}catch(t){console.error(t)}}Xg(),Bg.exports=Wg()});var Rg=Zl(zc=>{"use strict";var yg=Fg();zc.createRoot=yg.createRoot,zc.hydrateRoot=yg.hydrateRoot;var ns});var hg=Fb(ee()),Ag=Fb(Rg());var ri=Fb(ee()),$m=t=>{let[l,i]=(0,ri.useState)("data");return ri.default.createElement("div",{className:"mt-5"},ri.default.createElement("h1",{className:"text-center text-secondary"},"Hello ",l),ri.default.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi modi minima tempora commodi, sit sapiente fugiat tenetur nemo necessitatibus!"))},vg=$m;var ts=`@charset "UTF-8";
/*!
 * Bootstrap  v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root,
[data-bs-theme=light] {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-primary-text-emphasis: #052c65;
  --bs-secondary-text-emphasis: #2b2f32;
  --bs-success-text-emphasis: #0a3622;
  --bs-info-text-emphasis: #055160;
  --bs-warning-text-emphasis: #664d03;
  --bs-danger-text-emphasis: #58151c;
  --bs-light-text-emphasis: #495057;
  --bs-dark-text-emphasis: #495057;
  --bs-primary-bg-subtle: #cfe2ff;
  --bs-secondary-bg-subtle: #e2e3e5;
  --bs-success-bg-subtle: #d1e7dd;
  --bs-info-bg-subtle: #cff4fc;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-danger-bg-subtle: #f8d7da;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-dark-bg-subtle: #ced4da;
  --bs-primary-border-subtle: #9ec5fe;
  --bs-secondary-border-subtle: #c4c8cb;
  --bs-success-border-subtle: #a3cfbb;
  --bs-info-border-subtle: #9eeaf9;
  --bs-warning-border-subtle: #ffe69c;
  --bs-danger-border-subtle: #f1aeb5;
  --bs-light-border-subtle: #e9ecef;
  --bs-dark-border-subtle: #adb5bd;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-emphasis-color: #000;
  --bs-emphasis-color-rgb: 0, 0, 0;
  --bs-secondary-color: rgba(33, 37, 41, 0.75);
  --bs-secondary-color-rgb: 33, 37, 41;
  --bs-secondary-bg: #e9ecef;
  --bs-secondary-bg-rgb: 233, 236, 239;
  --bs-tertiary-color: rgba(33, 37, 41, 0.5);
  --bs-tertiary-color-rgb: 33, 37, 41;
  --bs-tertiary-bg: #f8f9fa;
  --bs-tertiary-bg-rgb: 248, 249, 250;
  --bs-heading-color: inherit;
  --bs-link-color: #0d6efd;
  --bs-link-color-rgb: 13, 110, 253;
  --bs-link-decoration: underline;
  --bs-link-hover-color: #0a58ca;
  --bs-link-hover-color-rgb: 10, 88, 202;
  --bs-code-color: #d63384;
  --bs-highlight-color: #212529;
  --bs-highlight-bg: #fff3cd;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-2xl: var(--bs-border-radius-xxl);
  --bs-border-radius-pill: 50rem;
  --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-focus-ring-width: 0.25rem;
  --bs-focus-ring-opacity: 0.25;
  --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
  --bs-form-valid-color: #198754;
  --bs-form-valid-border-color: #198754;
  --bs-form-invalid-color: #dc3545;
  --bs-form-invalid-border-color: #dc3545;
}

[data-bs-theme=dark] {
  color-scheme: dark;
  --bs-body-color: #dee2e6;
  --bs-body-color-rgb: 222, 226, 230;
  --bs-body-bg: #212529;
  --bs-body-bg-rgb: 33, 37, 41;
  --bs-emphasis-color: #fff;
  --bs-emphasis-color-rgb: 255, 255, 255;
  --bs-secondary-color: rgba(222, 226, 230, 0.75);
  --bs-secondary-color-rgb: 222, 226, 230;
  --bs-secondary-bg: #343a40;
  --bs-secondary-bg-rgb: 52, 58, 64;
  --bs-tertiary-color: rgba(222, 226, 230, 0.5);
  --bs-tertiary-color-rgb: 222, 226, 230;
  --bs-tertiary-bg: #2b3035;
  --bs-tertiary-bg-rgb: 43, 48, 53;
  --bs-primary-text-emphasis: #6ea8fe;
  --bs-secondary-text-emphasis: #a7acb1;
  --bs-success-text-emphasis: #75b798;
  --bs-info-text-emphasis: #6edff6;
  --bs-warning-text-emphasis: #ffda6a;
  --bs-danger-text-emphasis: #ea868f;
  --bs-light-text-emphasis: #f8f9fa;
  --bs-dark-text-emphasis: #dee2e6;
  --bs-primary-bg-subtle: #031633;
  --bs-secondary-bg-subtle: #161719;
  --bs-success-bg-subtle: #051b11;
  --bs-info-bg-subtle: #032830;
  --bs-warning-bg-subtle: #332701;
  --bs-danger-bg-subtle: #2c0b0e;
  --bs-light-bg-subtle: #343a40;
  --bs-dark-bg-subtle: #1a1d20;
  --bs-primary-border-subtle: #084298;
  --bs-secondary-border-subtle: #41464b;
  --bs-success-border-subtle: #0f5132;
  --bs-info-border-subtle: #087990;
  --bs-warning-border-subtle: #997404;
  --bs-danger-border-subtle: #842029;
  --bs-light-border-subtle: #495057;
  --bs-dark-border-subtle: #343a40;
  --bs-heading-color: inherit;
  --bs-link-color: #6ea8fe;
  --bs-link-hover-color: #8bb9fe;
  --bs-link-color-rgb: 110, 168, 254;
  --bs-link-hover-color-rgb: 139, 185, 254;
  --bs-code-color: #e685b5;
  --bs-highlight-color: #dee2e6;
  --bs-highlight-bg: #664d03;
  --bs-border-color: #495057;
  --bs-border-color-translucent: rgba(255, 255, 255, 0.15);
  --bs-form-valid-color: #75b798;
  --bs-form-valid-border-color: #75b798;
  --bs-form-invalid-color: #ea868f;
  --bs-form-invalid-border-color: #ea868f;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  border-top: var(--bs-border-width) solid;
  opacity: 0.25;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--bs-heading-color);
}

h1, .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.5rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.75rem;
  }
}

h4, .h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.5rem;
  }
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.875em;
}

mark, .mark {
  padding: 0.1875em;
  color: var(--bs-highlight-color);
  background-color: var(--bs-highlight-bg);
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
  text-decoration: underline;
}
a:hover {
  --bs-link-color-rgb: var(--bs-link-hover-color-rgb);
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: var(--bs-code-color);
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.1875rem 0.375rem;
  font-size: 0.875em;
  color: var(--bs-body-bg);
  background-color: var(--bs-body-color);
  border-radius: 0.25rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--bs-secondary-color);
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none !important;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "\u2014\xA0";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: var(--bs-body-bg);
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: var(--bs-secondary-color);
}

.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
:root {
  --bs-breakpoint-xs: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-sm-1,
  .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-sm-2,
  .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-sm-2,
  .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-sm-3,
  .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .g-sm-3,
  .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .g-sm-4,
  .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-sm-4,
  .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-md-1,
  .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-md-2,
  .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-md-2,
  .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-md-3,
  .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .g-md-3,
  .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .g-md-4,
  .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-md-4,
  .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-lg-1,
  .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-lg-2,
  .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-lg-2,
  .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-lg-3,
  .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .g-lg-3,
  .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .g-lg-4,
  .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-lg-4,
  .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xl-1,
  .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xl-2,
  .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xl-2,
  .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xl-3,
  .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xl-3,
  .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xl-4,
  .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xl-4,
  .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.table {
  --bs-table-color-type: initial;
  --bs-table-bg-type: initial;
  --bs-table-color-state: initial;
  --bs-table-bg-state: initial;
  --bs-table-color: var(--bs-emphasis-color);
  --bs-table-bg: var(--bs-body-bg);
  --bs-table-border-color: var(--bs-border-color);
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: var(--bs-emphasis-color);
  --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05);
  --bs-table-active-color: var(--bs-emphasis-color);
  --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1);
  --bs-table-hover-color: var(--bs-emphasis-color);
  --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075);
  width: 100%;
  margin-bottom: 1rem;
  vertical-align: top;
  border-color: var(--bs-table-border-color);
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)));
  background-color: var(--bs-table-bg);
  border-bottom-width: var(--bs-border-width);
  box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}

.table-group-divider {
  border-top: calc(var(--bs-border-width) * 2) solid currentcolor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: var(--bs-border-width) 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 var(--bs-border-width);
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.table-borderless > :not(:first-child) {
  border-top-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) > * {
  --bs-table-color-type: var(--bs-table-striped-color);
  --bs-table-bg-type: var(--bs-table-striped-bg);
}

.table-striped-columns > :not(caption) > tr > :nth-child(even) {
  --bs-table-color-type: var(--bs-table-striped-color);
  --bs-table-bg-type: var(--bs-table-striped-bg);
}

.table-active {
  --bs-table-color-state: var(--bs-table-active-color);
  --bs-table-bg-state: var(--bs-table-active-bg);
}

.table-hover > tbody > tr:hover > * {
  --bs-table-color-state: var(--bs-table-hover-color);
  --bs-table-bg-state: var(--bs-table-hover-bg);
}

.table-primary {
  --bs-table-color: #000;
  --bs-table-bg: #cfe2ff;
  --bs-table-border-color: #a6b5cc;
  --bs-table-striped-bg: #c5d7f2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bacbe6;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-secondary {
  --bs-table-color: #000;
  --bs-table-bg: #e2e3e5;
  --bs-table-border-color: #b5b6b7;
  --bs-table-striped-bg: #d7d8da;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #cbccce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #d1d2d4;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-success {
  --bs-table-color: #000;
  --bs-table-bg: #d1e7dd;
  --bs-table-border-color: #a7b9b1;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-info {
  --bs-table-color: #000;
  --bs-table-bg: #cff4fc;
  --bs-table-border-color: #a6c3ca;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-warning {
  --bs-table-color: #000;
  --bs-table-bg: #fff3cd;
  --bs-table-border-color: #ccc2a4;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-danger {
  --bs-table-color: #000;
  --bs-table-bg: #f8d7da;
  --bs-table-border-color: #c6acae;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-light {
  --bs-table-color: #000;
  --bs-table-bg: #f8f9fa;
  --bs-table-border-color: #c6c7c8;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-dark {
  --bs-table-color: #fff;
  --bs-table-bg: #212529;
  --bs-table-border-color: #4d5154;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: calc(0.375rem + var(--bs-border-width));
  padding-bottom: calc(0.375rem + var(--bs-border-width));
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + var(--bs-border-width));
  padding-bottom: calc(0.5rem + var(--bs-border-width));
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + var(--bs-border-width));
  padding-bottom: calc(0.25rem + var(--bs-border-width));
  font-size: 0.875rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-secondary-color);
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  appearance: none;
  background-color: var(--bs-body-bg);
  background-clip: padding-box;
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-control::-webkit-date-and-time-value {
  min-width: 85px;
  height: 1.5em;
  margin: 0;
}
.form-control::-webkit-datetime-edit {
  display: block;
  padding: 0;
}
.form-control::placeholder {
  color: var(--bs-secondary-color);
  opacity: 1;
}
.form-control:disabled {
  background-color: var(--bs-secondary-bg);
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  margin-inline-end: 0.75rem;
  color: var(--bs-body-color);
  background-color: var(--bs-tertiary-bg);
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: var(--bs-border-width);
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: var(--bs-secondary-bg);
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: var(--bs-body-color);
  background-color: transparent;
  border: solid transparent;
  border-width: var(--bs-border-width) 0;
}
.form-control-plaintext:focus {
  outline: 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--bs-border-radius-sm);
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: var(--bs-border-radius-lg);
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
}

.form-control-color {
  width: 3rem;
  height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: var(--bs-border-radius);
}
.form-control-color::-webkit-color-swatch {
  border: 0 !important;
  border-radius: var(--bs-border-radius);
}
.form-control-color.form-control-sm {
  height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
}
.form-control-color.form-control-lg {
  height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
}

.form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  appearance: none;
  background-color: var(--bs-body-bg);
  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  background-color: var(--bs-secondary-bg);
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 var(--bs-body-color);
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--bs-border-radius-sm);
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
  border-radius: var(--bs-border-radius-lg);
}

[data-bs-theme=dark] .form-select {
  --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-reverse {
  padding-right: 1.5em;
  padding-left: 0;
  text-align: right;
}
.form-check-reverse .form-check-input {
  float: right;
  margin-right: -1.5em;
  margin-left: 0;
}

.form-check-input {
  --bs-form-check-bg: var(--bs-body-bg);
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  appearance: none;
  background-color: var(--bs-form-check-bg);
  background-image: var(--bs-form-check-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: var(--bs-border-width) solid var(--bs-border-color);
  print-color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.form-check-input:checked[type=checkbox] {
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  cursor: default;
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  width: 2em;
  margin-left: -2.5em;
  background-image: var(--bs-form-switch-bg);
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
.form-switch.form-check-reverse {
  padding-right: 2.5em;
  padding-left: 0;
}
.form-switch.form-check-reverse .form-check-input {
  margin-right: -2.5em;
  margin-left: 0;
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus) {
  --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e");
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  appearance: none;
  background-color: transparent;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  appearance: none;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-secondary-bg);
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  appearance: none;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: var(--bs-secondary-bg);
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: var(--bs-secondary-color);
}
.form-range:disabled::-moz-range-thumb {
  background-color: var(--bs-secondary-color);
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext,
.form-floating > .form-select {
  height: calc(3.5rem + calc(var(--bs-border-width) * 2));
  min-height: calc(3.5rem + calc(var(--bs-border-width) * 2));
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  padding: 1rem 0.75rem;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  border: var(--bs-border-width) solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control,
.form-floating > .form-control-plaintext {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control::placeholder,
.form-floating > .form-control-plaintext::placeholder {
  color: transparent;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown),
.form-floating > .form-control-plaintext:focus,
.form-floating > .form-control-plaintext:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill,
.form-floating > .form-control-plaintext:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-control-plaintext ~ label,
.form-floating > .form-select ~ label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label::after,
.form-floating > .form-control:not(:placeholder-shown) ~ label::after,
.form-floating > .form-control-plaintext ~ label::after,
.form-floating > .form-select ~ label::after {
  position: absolute;
  inset: 1rem 0.375rem;
  z-index: -1;
  height: 1.5em;
  content: "";
  background-color: var(--bs-body-bg);
  border-radius: var(--bs-border-radius);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control-plaintext ~ label {
  border-width: var(--bs-border-width) 0;
}
.form-floating > :disabled ~ label,
.form-floating > .form-control:disabled ~ label {
  color: #6c757d;
}
.form-floating > :disabled ~ label::after,
.form-floating > .form-control:disabled ~ label::after {
  background-color: var(--bs-secondary-bg);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus,
.input-group > .form-floating:focus-within {
  z-index: 5;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 5;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-tertiary-bg);
  border: var(--bs-border-width) solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: var(--bs-border-radius-lg);
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: var(--bs-border-radius-sm);
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 3rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: calc(var(--bs-border-width) * -1);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .form-floating:not(:first-child) > .form-control,
.input-group > .form-floating:not(:first-child) > .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-form-valid-color);
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--bs-success);
  border-radius: var(--bs-border-radius);
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: var(--bs-form-valid-border-color);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: var(--bs-form-valid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: var(--bs-form-valid-border-color);
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  padding-right: 4.125rem;
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: var(--bs-form-valid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}

.was-validated .form-control-color:valid, .form-control-color.is-valid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: var(--bs-form-valid-border-color);
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: var(--bs-form-valid-color);
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: var(--bs-form-valid-color);
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):valid, .input-group > .form-control:not(:focus).is-valid,
.was-validated .input-group > .form-select:not(:focus):valid,
.input-group > .form-select:not(:focus).is-valid,
.was-validated .input-group > .form-floating:not(:focus-within):valid,
.input-group > .form-floating:not(:focus-within).is-valid {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-form-invalid-color);
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: var(--bs-danger);
  border-radius: var(--bs-border-radius);
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: var(--bs-form-invalid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  padding-right: 4.125rem;
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: var(--bs-form-invalid-border-color);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}

.was-validated .form-control-color:invalid, .form-control-color.is-invalid {
  width: calc(3rem + calc(1.5em + 0.75rem));
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: var(--bs-form-invalid-border-color);
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: var(--bs-form-invalid-color);
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: var(--bs-form-invalid-color);
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group > .form-control:not(:focus):invalid, .input-group > .form-control:not(:focus).is-invalid,
.was-validated .input-group > .form-select:not(:focus):invalid,
.input-group > .form-select:not(:focus).is-invalid,
.was-validated .input-group > .form-floating:not(:focus-within):invalid,
.input-group > .form-floating:not(:focus-within).is-invalid {
  z-index: 4;
}

.btn {
  --bs-btn-padding-x: 0.75rem;
  --bs-btn-padding-y: 0.375rem;
  --bs-btn-font-family: ;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 400;
  --bs-btn-line-height: 1.5;
  --bs-btn-color: var(--bs-body-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-width: var(--bs-border-width);
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: var(--bs-border-radius);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}
.btn-check + .btn:hover {
  color: var(--bs-btn-color);
  background-color: var(--bs-btn-bg);
  border-color: var(--bs-btn-border-color);
}
.btn:focus-visible {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:focus-visible + .btn {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
  color: var(--bs-btn-active-color);
  background-color: var(--bs-btn-active-bg);
  border-color: var(--bs-btn-active-border-color);
}
.btn-check:checked + .btn:focus-visible, :not(.btn-check) + .btn:active:focus-visible, .btn:first-child:active:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible {
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn-check:checked:focus-visible + .btn {
  box-shadow: var(--bs-btn-focus-box-shadow);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  color: var(--bs-btn-disabled-color);
  pointer-events: none;
  background-color: var(--bs-btn-disabled-bg);
  border-color: var(--bs-btn-disabled-border-color);
  opacity: var(--bs-btn-disabled-opacity);
}

.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0b5ed7;
  --bs-btn-hover-border-color: #0a58ca;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}

.btn-secondary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #6c757d;
  --bs-btn-border-color: #6c757d;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #5c636a;
  --bs-btn-hover-border-color: #565e64;
  --bs-btn-focus-shadow-rgb: 130, 138, 145;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #565e64;
  --bs-btn-active-border-color: #51585e;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #6c757d;
  --bs-btn-disabled-border-color: #6c757d;
}

.btn-success {
  --bs-btn-color: #fff;
  --bs-btn-bg: #198754;
  --bs-btn-border-color: #198754;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #157347;
  --bs-btn-hover-border-color: #146c43;
  --bs-btn-focus-shadow-rgb: 60, 153, 110;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #146c43;
  --bs-btn-active-border-color: #13653f;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #198754;
  --bs-btn-disabled-border-color: #198754;
}

.btn-info {
  --bs-btn-color: #000;
  --bs-btn-bg: #0dcaf0;
  --bs-btn-border-color: #0dcaf0;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #31d2f2;
  --bs-btn-hover-border-color: #25cff2;
  --bs-btn-focus-shadow-rgb: 11, 172, 204;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #3dd5f3;
  --bs-btn-active-border-color: #25cff2;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #0dcaf0;
  --bs-btn-disabled-border-color: #0dcaf0;
}

.btn-warning {
  --bs-btn-color: #000;
  --bs-btn-bg: #ffc107;
  --bs-btn-border-color: #ffc107;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ffca2c;
  --bs-btn-hover-border-color: #ffc720;
  --bs-btn-focus-shadow-rgb: 217, 164, 6;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ffcd39;
  --bs-btn-active-border-color: #ffc720;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #ffc107;
  --bs-btn-disabled-border-color: #ffc107;
}

.btn-danger {
  --bs-btn-color: #fff;
  --bs-btn-bg: #dc3545;
  --bs-btn-border-color: #dc3545;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #bb2d3b;
  --bs-btn-hover-border-color: #b02a37;
  --bs-btn-focus-shadow-rgb: 225, 83, 97;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #b02a37;
  --bs-btn-active-border-color: #a52834;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #dc3545;
  --bs-btn-disabled-border-color: #dc3545;
}

.btn-light {
  --bs-btn-color: #000;
  --bs-btn-bg: #f8f9fa;
  --bs-btn-border-color: #f8f9fa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #d3d4d5;
  --bs-btn-hover-border-color: #c6c7c8;
  --bs-btn-focus-shadow-rgb: 211, 212, 213;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #c6c7c8;
  --bs-btn-active-border-color: #babbbc;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #f8f9fa;
  --bs-btn-disabled-border-color: #f8f9fa;
}

.btn-dark {
  --bs-btn-color: #fff;
  --bs-btn-bg: #212529;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #424649;
  --bs-btn-hover-border-color: #373b3e;
  --bs-btn-focus-shadow-rgb: 66, 70, 73;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #4d5154;
  --bs-btn-active-border-color: #373b3e;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #212529;
  --bs-btn-disabled-border-color: #212529;
}

.btn-outline-primary {
  --bs-btn-color: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0d6efd;
  --bs-btn-hover-border-color: #0d6efd;
  --bs-btn-focus-shadow-rgb: 13, 110, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0d6efd;
  --bs-btn-active-border-color: #0d6efd;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #0d6efd;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0d6efd;
  --bs-gradient: none;
}

.btn-outline-secondary {
  --bs-btn-color: #6c757d;
  --bs-btn-border-color: #6c757d;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #6c757d;
  --bs-btn-hover-border-color: #6c757d;
  --bs-btn-focus-shadow-rgb: 108, 117, 125;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #6c757d;
  --bs-btn-active-border-color: #6c757d;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #6c757d;
  --bs-gradient: none;
}

.btn-outline-success {
  --bs-btn-color: #198754;
  --bs-btn-border-color: #198754;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #198754;
  --bs-btn-hover-border-color: #198754;
  --bs-btn-focus-shadow-rgb: 25, 135, 84;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #198754;
  --bs-btn-active-border-color: #198754;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #198754;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #198754;
  --bs-gradient: none;
}

.btn-outline-info {
  --bs-btn-color: #0dcaf0;
  --bs-btn-border-color: #0dcaf0;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #0dcaf0;
  --bs-btn-hover-border-color: #0dcaf0;
  --bs-btn-focus-shadow-rgb: 13, 202, 240;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #0dcaf0;
  --bs-btn-active-border-color: #0dcaf0;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #0dcaf0;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #0dcaf0;
  --bs-gradient: none;
}

.btn-outline-warning {
  --bs-btn-color: #ffc107;
  --bs-btn-border-color: #ffc107;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #ffc107;
  --bs-btn-hover-border-color: #ffc107;
  --bs-btn-focus-shadow-rgb: 255, 193, 7;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #ffc107;
  --bs-btn-active-border-color: #ffc107;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #ffc107;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #ffc107;
  --bs-gradient: none;
}

.btn-outline-danger {
  --bs-btn-color: #dc3545;
  --bs-btn-border-color: #dc3545;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #dc3545;
  --bs-btn-hover-border-color: #dc3545;
  --bs-btn-focus-shadow-rgb: 220, 53, 69;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #dc3545;
  --bs-btn-active-border-color: #dc3545;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #dc3545;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #dc3545;
  --bs-gradient: none;
}

.btn-outline-light {
  --bs-btn-color: #f8f9fa;
  --bs-btn-border-color: #f8f9fa;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #f8f9fa;
  --bs-btn-hover-border-color: #f8f9fa;
  --bs-btn-focus-shadow-rgb: 248, 249, 250;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #f8f9fa;
  --bs-btn-active-border-color: #f8f9fa;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #f8f9fa;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #f8f9fa;
  --bs-gradient: none;
}

.btn-outline-dark {
  --bs-btn-color: #212529;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #212529;
  --bs-btn-hover-border-color: #212529;
  --bs-btn-focus-shadow-rgb: 33, 37, 41;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #212529;
  --bs-btn-active-border-color: #212529;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #212529;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #212529;
  --bs-gradient: none;
}

.btn-link {
  --bs-btn-font-weight: 400;
  --bs-btn-color: var(--bs-link-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-color: transparent;
  --bs-btn-hover-color: var(--bs-link-hover-color);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-active-color: var(--bs-link-hover-color);
  --bs-btn-active-border-color: transparent;
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-border-color: transparent;
  --bs-btn-box-shadow: 0 0 0 #000;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  text-decoration: underline;
}
.btn-link:focus-visible {
  color: var(--bs-btn-color);
}
.btn-link:hover {
  color: var(--bs-btn-hover-color);
}

.btn-lg, .btn-group-lg > .btn {
  --bs-btn-padding-y: 0.5rem;
  --bs-btn-padding-x: 1rem;
  --bs-btn-font-size: 1.25rem;
  --bs-btn-border-radius: var(--bs-border-radius-lg);
}

.btn-sm, .btn-group-sm > .btn {
  --bs-btn-padding-y: 0.25rem;
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-font-size: 0.875rem;
  --bs-btn-border-radius: var(--bs-border-radius-sm);
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}
.collapsing.collapse-horizontal {
  width: 0;
  height: auto;
  transition: width 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing.collapse-horizontal {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  --bs-dropdown-zindex: 1000;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0.5rem;
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: 1rem;
  --bs-dropdown-color: var(--bs-body-color);
  --bs-dropdown-bg: var(--bs-body-bg);
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-border-radius: var(--bs-border-radius);
  --bs-dropdown-border-width: var(--bs-border-width);
  --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width));
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-divider-margin-y: 0.5rem;
  --bs-dropdown-box-shadow: var(--bs-box-shadow);
  --bs-dropdown-link-color: var(--bs-body-color);
  --bs-dropdown-link-hover-color: var(--bs-body-color);
  --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0d6efd;
  --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);
  --bs-dropdown-item-padding-x: 1rem;
  --bs-dropdown-item-padding-y: 0.25rem;
  --bs-dropdown-header-color: #6c757d;
  --bs-dropdown-header-padding-x: 1rem;
  --bs-dropdown-header-padding-y: 0.5rem;
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  margin: 0;
  font-size: var(--bs-dropdown-font-size);
  color: var(--bs-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--bs-dropdown-bg);
  background-clip: padding-box;
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: var(--bs-dropdown-border-radius);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--bs-dropdown-spacer);
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--bs-dropdown-spacer);
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--bs-dropdown-spacer);
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--bs-dropdown-spacer);
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: var(--bs-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-dropdown-divider-bg);
  opacity: 1;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  clear: both;
  font-weight: 400;
  color: var(--bs-dropdown-link-color);
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  border-radius: var(--bs-dropdown-item-border-radius, 0);
}
.dropdown-item:hover, .dropdown-item:focus {
  color: var(--bs-dropdown-link-hover-color);
  background-color: var(--bs-dropdown-link-hover-bg);
}
.dropdown-item.active, .dropdown-item:active {
  color: var(--bs-dropdown-link-active-color);
  text-decoration: none;
  background-color: var(--bs-dropdown-link-active-bg);
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: var(--bs-dropdown-link-disabled-color);
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
  margin-bottom: 0;
  font-size: 0.875rem;
  color: var(--bs-dropdown-header-color);
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  color: var(--bs-dropdown-link-color);
}

.dropdown-menu-dark {
  --bs-dropdown-color: #dee2e6;
  --bs-dropdown-bg: #343a40;
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-box-shadow: ;
  --bs-dropdown-link-color: #dee2e6;
  --bs-dropdown-link-hover-color: #fff;
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: #0d6efd;
  --bs-dropdown-link-disabled-color: #adb5bd;
  --bs-dropdown-header-color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group {
  border-radius: var(--bs-border-radius);
}
.btn-group > :not(.btn-check:first-child) + .btn,
.btn-group > .btn-group:not(:first-child) {
  margin-left: calc(var(--bs-border-width) * -1);
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn.dropdown-toggle-split:first-child,
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: calc(var(--bs-border-width) * -1);
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn ~ .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: var(--bs-secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  color: var(--bs-nav-link-color);
  text-decoration: none;
  background: none;
  border: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: var(--bs-nav-link-hover-color);
}
.nav-link:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.nav-link.disabled, .nav-link:disabled {
  color: var(--bs-nav-link-disabled-color);
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  --bs-nav-tabs-border-width: var(--bs-border-width);
  --bs-nav-tabs-border-color: var(--bs-border-color);
  --bs-nav-tabs-border-radius: var(--bs-border-radius);
  --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);
  --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);
  --bs-nav-tabs-link-active-bg: var(--bs-body-bg);
  --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);
  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
}
.nav-tabs .nav-link {
  margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
  border: var(--bs-nav-tabs-border-width) solid transparent;
  border-top-left-radius: var(--bs-nav-tabs-border-radius);
  border-top-right-radius: var(--bs-nav-tabs-border-radius);
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  isolation: isolate;
  border-color: var(--bs-nav-tabs-link-hover-border-color);
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: var(--bs-nav-tabs-link-active-color);
  background-color: var(--bs-nav-tabs-link-active-bg);
  border-color: var(--bs-nav-tabs-link-active-border-color);
}
.nav-tabs .dropdown-menu {
  margin-top: calc(-1 * var(--bs-nav-tabs-border-width));
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills {
  --bs-nav-pills-border-radius: var(--bs-border-radius);
  --bs-nav-pills-link-active-color: #fff;
  --bs-nav-pills-link-active-bg: #0d6efd;
}
.nav-pills .nav-link {
  border-radius: var(--bs-nav-pills-border-radius);
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
}

.nav-underline {
  --bs-nav-underline-gap: 1rem;
  --bs-nav-underline-border-width: 0.125rem;
  --bs-nav-underline-link-active-color: var(--bs-emphasis-color);
  gap: var(--bs-nav-underline-gap);
}
.nav-underline .nav-link {
  padding-right: 0;
  padding-left: 0;
  border-bottom: var(--bs-nav-underline-border-width) solid transparent;
}
.nav-underline .nav-link:hover, .nav-underline .nav-link:focus {
  border-bottom-color: currentcolor;
}
.nav-underline .nav-link.active,
.nav-underline .show > .nav-link {
  font-weight: 700;
  color: var(--bs-nav-underline-link-active-color);
  border-bottom-color: currentcolor;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  --bs-navbar-padding-x: 0;
  --bs-navbar-padding-y: 0.5rem;
  --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);
  --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);
  --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);
  --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-padding-y: 0.3125rem;
  --bs-navbar-brand-margin-end: 1rem;
  --bs-navbar-brand-font-size: 1.25rem;
  --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);
  --bs-navbar-nav-link-padding-x: 0.5rem;
  --bs-navbar-toggler-padding-y: 0.25rem;
  --bs-navbar-toggler-padding-x: 0.75rem;
  --bs-navbar-toggler-font-size: 1.25rem;
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);
  --bs-navbar-toggler-border-radius: var(--bs-border-radius);
  --bs-navbar-toggler-focus-width: 0.25rem;
  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: var(--bs-navbar-brand-padding-y);
  padding-bottom: var(--bs-navbar-brand-padding-y);
  margin-right: var(--bs-navbar-brand-margin-end);
  font-size: var(--bs-navbar-brand-font-size);
  color: var(--bs-navbar-brand-color);
  text-decoration: none;
  white-space: nowrap;
}
.navbar-brand:hover, .navbar-brand:focus {
  color: var(--bs-navbar-brand-hover-color);
}

.navbar-nav {
  --bs-nav-link-padding-x: 0;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-navbar-color);
  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
  color: var(--bs-navbar-active-color);
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--bs-navbar-color);
}
.navbar-text a,
.navbar-text a:hover,
.navbar-text a:focus {
  color: var(--bs-navbar-active-color);
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: var(--bs-navbar-color);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--bs-navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
  .navbar-expand-sm .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-sm .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
  .navbar-expand-md .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-md .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
  .navbar-expand-lg .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-lg .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
  .navbar-expand-xxl .offcanvas {
    position: static;
    z-index: auto;
    flex-grow: 1;
    width: auto !important;
    height: auto !important;
    visibility: visible !important;
    background-color: transparent !important;
    border: 0 !important;
    transform: none !important;
    transition: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-header {
    display: none;
  }
  .navbar-expand-xxl .offcanvas .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}
.navbar-expand .offcanvas {
  position: static;
  z-index: auto;
  flex-grow: 1;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  background-color: transparent !important;
  border: 0 !important;
  transform: none !important;
  transition: none;
}
.navbar-expand .offcanvas .offcanvas-header {
  display: none;
}
.navbar-expand .offcanvas .offcanvas-body {
  display: flex;
  flex-grow: 0;
  padding: 0;
  overflow-y: visible;
}

.navbar-dark,
.navbar[data-bs-theme=dark] {
  --bs-navbar-color: rgba(255, 255, 255, 0.55);
  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);
  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);
  --bs-navbar-active-color: #fff;
  --bs-navbar-brand-color: #fff;
  --bs-navbar-brand-hover-color: #fff;
  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

[data-bs-theme=dark] .navbar-toggler-icon {
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.card {
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-title-color: ;
  --bs-card-subtitle-color: ;
  --bs-card-border-width: var(--bs-border-width);
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: var(--bs-border-radius);
  --bs-card-box-shadow: ;
  --bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: var(--bs-body-bg);
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  color: var(--bs-body-color);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}

.card-title {
  margin-bottom: var(--bs-card-title-spacer-y);
  color: var(--bs-card-title-color);
}

.card-subtitle {
  margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
  margin-bottom: 0;
  color: var(--bs-card-subtitle-color);
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link + .card-link {
  margin-left: var(--bs-card-spacer-x);
}

.card-header {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  margin-bottom: 0;
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
.card-header:first-child {
  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
}

.card-footer {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
}
.card-footer:last-child {
  border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
}

.card-header-tabs {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
  border-bottom: 0;
}
.card-header-tabs .nav-link.active {
  background-color: var(--bs-card-bg);
  border-bottom-color: var(--bs-card-bg);
}

.card-header-pills {
  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--bs-card-img-overlay-padding);
  border-radius: var(--bs-card-inner-border-radius);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: var(--bs-card-inner-border-radius);
  border-top-right-radius: var(--bs-card-inner-border-radius);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: var(--bs-card-inner-border-radius);
  border-bottom-left-radius: var(--bs-card-inner-border-radius);
}

.card-group > .card {
  margin-bottom: var(--bs-card-group-margin);
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
  .card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
  .card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
  .card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
  .card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion {
  --bs-accordion-color: var(--bs-body-color);
  --bs-accordion-bg: var(--bs-body-bg);
  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
  --bs-accordion-border-color: var(--bs-border-color);
  --bs-accordion-border-width: var(--bs-border-width);
  --bs-accordion-border-radius: var(--bs-border-radius);
  --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));
  --bs-accordion-btn-padding-x: 1.25rem;
  --bs-accordion-btn-padding-y: 1rem;
  --bs-accordion-btn-color: var(--bs-body-color);
  --bs-accordion-btn-bg: var(--bs-accordion-bg);
  --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5L8 11L14 5'/%3e%3c/svg%3e");
  --bs-accordion-btn-icon-width: 1.25rem;
  --bs-accordion-btn-icon-transform: rotate(-180deg);
  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23052c65' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M2 5L8 11L14 5'/%3e%3c/svg%3e");
  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-accordion-body-padding-x: 1.25rem;
  --bs-accordion-body-padding-y: 1rem;
  --bs-accordion-active-color: var(--bs-primary-text-emphasis);
  --bs-accordion-active-bg: var(--bs-primary-bg-subtle);
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
  font-size: 1rem;
  color: var(--bs-accordion-btn-color);
  text-align: left;
  background-color: var(--bs-accordion-btn-bg);
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: var(--bs-accordion-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: var(--bs-accordion-active-color);
  background-color: var(--bs-accordion-active-bg);
  box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);
}
.accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-active-icon);
  transform: var(--bs-accordion-btn-icon-transform);
}
.accordion-button::after {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-left: auto;
  content: "";
  background-image: var(--bs-accordion-btn-icon);
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  color: var(--bs-accordion-color);
  background-color: var(--bs-accordion-bg);
  border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);
}
.accordion-item:first-of-type {
  border-top-left-radius: var(--bs-accordion-border-radius);
  border-top-right-radius: var(--bs-accordion-border-radius);
}
.accordion-item:first-of-type > .accordion-header .accordion-button {
  border-top-left-radius: var(--bs-accordion-inner-border-radius);
  border-top-right-radius: var(--bs-accordion-inner-border-radius);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}
.accordion-item:last-of-type > .accordion-header .accordion-button.collapsed {
  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);
}
.accordion-item:last-of-type > .accordion-collapse {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}

.accordion-body {
  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);
}

.accordion-flush > .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush > .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush > .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush > .accordion-item > .accordion-header .accordion-button, .accordion-flush > .accordion-item > .accordion-header .accordion-button.collapsed {
  border-radius: 0;
}
.accordion-flush > .accordion-item > .accordion-collapse {
  border-radius: 0;
}

[data-bs-theme=dark] .accordion-button::after {
  --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.breadcrumb {
  --bs-breadcrumb-padding-x: 0;
  --bs-breadcrumb-padding-y: 0;
  --bs-breadcrumb-margin-bottom: 1rem;
  --bs-breadcrumb-bg: ;
  --bs-breadcrumb-border-radius: ;
  --bs-breadcrumb-divider-color: var(--bs-secondary-color);
  --bs-breadcrumb-item-padding-x: 0.5rem;
  --bs-breadcrumb-item-active-color: var(--bs-secondary-color);
  display: flex;
  flex-wrap: wrap;
  padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
  margin-bottom: var(--bs-breadcrumb-margin-bottom);
  font-size: var(--bs-breadcrumb-font-size);
  list-style: none;
  background-color: var(--bs-breadcrumb-bg);
  border-radius: var(--bs-breadcrumb-border-radius);
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: var(--bs-breadcrumb-item-padding-x);
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: var(--bs-breadcrumb-item-padding-x);
  color: var(--bs-breadcrumb-divider-color);
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: var(--bs-breadcrumb-item-active-color);
}

.pagination {
  --bs-pagination-padding-x: 0.75rem;
  --bs-pagination-padding-y: 0.375rem;
  --bs-pagination-font-size: 1rem;
  --bs-pagination-color: var(--bs-link-color);
  --bs-pagination-bg: var(--bs-body-bg);
  --bs-pagination-border-width: var(--bs-border-width);
  --bs-pagination-border-color: var(--bs-border-color);
  --bs-pagination-border-radius: var(--bs-border-radius);
  --bs-pagination-hover-color: var(--bs-link-hover-color);
  --bs-pagination-hover-bg: var(--bs-tertiary-bg);
  --bs-pagination-hover-border-color: var(--bs-border-color);
  --bs-pagination-focus-color: var(--bs-link-hover-color);
  --bs-pagination-focus-bg: var(--bs-secondary-bg);
  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-pagination-active-color: #fff;
  --bs-pagination-active-bg: #0d6efd;
  --bs-pagination-active-border-color: #0d6efd;
  --bs-pagination-disabled-color: var(--bs-secondary-color);
  --bs-pagination-disabled-bg: var(--bs-secondary-bg);
  --bs-pagination-disabled-border-color: var(--bs-border-color);
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
  font-size: var(--bs-pagination-font-size);
  color: var(--bs-pagination-color);
  text-decoration: none;
  background-color: var(--bs-pagination-bg);
  border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: var(--bs-pagination-hover-color);
  background-color: var(--bs-pagination-hover-bg);
  border-color: var(--bs-pagination-hover-border-color);
}
.page-link:focus {
  z-index: 3;
  color: var(--bs-pagination-focus-color);
  background-color: var(--bs-pagination-focus-bg);
  outline: 0;
  box-shadow: var(--bs-pagination-focus-box-shadow);
}
.page-link.active, .active > .page-link {
  z-index: 3;
  color: var(--bs-pagination-active-color);
  background-color: var(--bs-pagination-active-bg);
  border-color: var(--bs-pagination-active-border-color);
}
.page-link.disabled, .disabled > .page-link {
  color: var(--bs-pagination-disabled-color);
  pointer-events: none;
  background-color: var(--bs-pagination-disabled-bg);
  border-color: var(--bs-pagination-disabled-border-color);
}

.page-item:not(:first-child) .page-link {
  margin-left: calc(var(--bs-border-width) * -1);
}
.page-item:first-child .page-link {
  border-top-left-radius: var(--bs-pagination-border-radius);
  border-bottom-left-radius: var(--bs-pagination-border-radius);
}
.page-item:last-child .page-link {
  border-top-right-radius: var(--bs-pagination-border-radius);
  border-bottom-right-radius: var(--bs-pagination-border-radius);
}

.pagination-lg {
  --bs-pagination-padding-x: 1.5rem;
  --bs-pagination-padding-y: 0.75rem;
  --bs-pagination-font-size: 1.25rem;
  --bs-pagination-border-radius: var(--bs-border-radius-lg);
}

.pagination-sm {
  --bs-pagination-padding-x: 0.5rem;
  --bs-pagination-padding-y: 0.25rem;
  --bs-pagination-font-size: 0.875rem;
  --bs-pagination-border-radius: var(--bs-border-radius-sm);
}

.badge {
  --bs-badge-padding-x: 0.65em;
  --bs-badge-padding-y: 0.35em;
  --bs-badge-font-size: 0.75em;
  --bs-badge-font-weight: 700;
  --bs-badge-color: #fff;
  --bs-badge-border-radius: var(--bs-border-radius);
  display: inline-block;
  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  font-size: var(--bs-badge-font-size);
  font-weight: var(--bs-badge-font-weight);
  line-height: 1;
  color: var(--bs-badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--bs-badge-border-radius);
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 1rem;
  --bs-alert-padding-y: 1rem;
  --bs-alert-margin-bottom: 1rem;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  --bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color);
  --bs-alert-border-radius: var(--bs-border-radius);
  --bs-alert-link-color: inherit;
  position: relative;
  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
  margin-bottom: var(--bs-alert-margin-bottom);
  color: var(--bs-alert-color);
  background-color: var(--bs-alert-bg);
  border: var(--bs-alert-border);
  border-radius: var(--bs-alert-border-radius);
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
  color: var(--bs-alert-link-color);
}

.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.alert-primary {
  --bs-alert-color: var(--bs-primary-text-emphasis);
  --bs-alert-bg: var(--bs-primary-bg-subtle);
  --bs-alert-border-color: var(--bs-primary-border-subtle);
  --bs-alert-link-color: var(--bs-primary-text-emphasis);
}

.alert-secondary {
  --bs-alert-color: var(--bs-secondary-text-emphasis);
  --bs-alert-bg: var(--bs-secondary-bg-subtle);
  --bs-alert-border-color: var(--bs-secondary-border-subtle);
  --bs-alert-link-color: var(--bs-secondary-text-emphasis);
}

.alert-success {
  --bs-alert-color: var(--bs-success-text-emphasis);
  --bs-alert-bg: var(--bs-success-bg-subtle);
  --bs-alert-border-color: var(--bs-success-border-subtle);
  --bs-alert-link-color: var(--bs-success-text-emphasis);
}

.alert-info {
  --bs-alert-color: var(--bs-info-text-emphasis);
  --bs-alert-bg: var(--bs-info-bg-subtle);
  --bs-alert-border-color: var(--bs-info-border-subtle);
  --bs-alert-link-color: var(--bs-info-text-emphasis);
}

.alert-warning {
  --bs-alert-color: var(--bs-warning-text-emphasis);
  --bs-alert-bg: var(--bs-warning-bg-subtle);
  --bs-alert-border-color: var(--bs-warning-border-subtle);
  --bs-alert-link-color: var(--bs-warning-text-emphasis);
}

.alert-danger {
  --bs-alert-color: var(--bs-danger-text-emphasis);
  --bs-alert-bg: var(--bs-danger-bg-subtle);
  --bs-alert-border-color: var(--bs-danger-border-subtle);
  --bs-alert-link-color: var(--bs-danger-text-emphasis);
}

.alert-light {
  --bs-alert-color: var(--bs-light-text-emphasis);
  --bs-alert-bg: var(--bs-light-bg-subtle);
  --bs-alert-border-color: var(--bs-light-border-subtle);
  --bs-alert-link-color: var(--bs-light-text-emphasis);
}

.alert-dark {
  --bs-alert-color: var(--bs-dark-text-emphasis);
  --bs-alert-bg: var(--bs-dark-bg-subtle);
  --bs-alert-border-color: var(--bs-dark-border-subtle);
  --bs-alert-link-color: var(--bs-dark-text-emphasis);
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress,
.progress-stacked {
  --bs-progress-height: 1rem;
  --bs-progress-font-size: 0.75rem;
  --bs-progress-bg: var(--bs-secondary-bg);
  --bs-progress-border-radius: var(--bs-border-radius);
  --bs-progress-box-shadow: var(--bs-box-shadow-inset);
  --bs-progress-bar-color: #fff;
  --bs-progress-bar-bg: #0d6efd;
  --bs-progress-bar-transition: width 0.6s ease;
  display: flex;
  height: var(--bs-progress-height);
  overflow: hidden;
  font-size: var(--bs-progress-font-size);
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--bs-progress-bar-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--bs-progress-bar-bg);
  transition: var(--bs-progress-bar-transition);
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: var(--bs-progress-height) var(--bs-progress-height);
}

.progress-stacked > .progress {
  overflow: visible;
}

.progress-stacked > .progress > .progress-bar {
  width: 100%;
}

.progress-bar-animated {
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    animation: none;
  }
}

.list-group {
  --bs-list-group-color: var(--bs-body-color);
  --bs-list-group-bg: var(--bs-body-bg);
  --bs-list-group-border-color: var(--bs-border-color);
  --bs-list-group-border-width: var(--bs-border-width);
  --bs-list-group-border-radius: var(--bs-border-radius);
  --bs-list-group-item-padding-x: 1rem;
  --bs-list-group-item-padding-y: 0.5rem;
  --bs-list-group-action-color: var(--bs-secondary-color);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-tertiary-bg);
  --bs-list-group-action-active-color: var(--bs-body-color);
  --bs-list-group-action-active-bg: var(--bs-secondary-bg);
  --bs-list-group-disabled-color: var(--bs-secondary-color);
  --bs-list-group-disabled-bg: var(--bs-body-bg);
  --bs-list-group-active-color: #fff;
  --bs-list-group-active-bg: #0d6efd;
  --bs-list-group-active-border-color: #0d6efd;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: var(--bs-list-group-border-radius);
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > .list-group-item::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: var(--bs-list-group-action-color);
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: var(--bs-list-group-action-hover-color);
  text-decoration: none;
  background-color: var(--bs-list-group-action-hover-bg);
}
.list-group-item-action:active {
  color: var(--bs-list-group-action-active-color);
  background-color: var(--bs-list-group-action-active-bg);
}

.list-group-item {
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  text-decoration: none;
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: var(--bs-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--bs-list-group-disabled-bg);
}
.list-group-item.active {
  z-index: 2;
  color: var(--bs-list-group-active-color);
  background-color: var(--bs-list-group-active-bg);
  border-color: var(--bs-list-group-active-border-color);
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: calc(-1 * var(--bs-list-group-border-width));
  border-top-width: var(--bs-list-group-border-width);
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child:not(:last-child) {
  border-bottom-left-radius: var(--bs-list-group-border-radius);
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child:not(:first-child) {
  border-top-right-radius: var(--bs-list-group-border-radius);
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: var(--bs-list-group-border-width);
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: calc(-1 * var(--bs-list-group-border-width));
  border-left-width: var(--bs-list-group-border-width);
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child:not(:last-child) {
    border-bottom-left-radius: var(--bs-list-group-border-radius);
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child:not(:first-child) {
    border-top-right-radius: var(--bs-list-group-border-radius);
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: var(--bs-list-group-border-width);
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: calc(-1 * var(--bs-list-group-border-width));
    border-left-width: var(--bs-list-group-border-width);
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 var(--bs-list-group-border-width);
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  --bs-list-group-color: var(--bs-primary-text-emphasis);
  --bs-list-group-bg: var(--bs-primary-bg-subtle);
  --bs-list-group-border-color: var(--bs-primary-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-primary-border-subtle);
  --bs-list-group-active-color: var(--bs-primary-bg-subtle);
  --bs-list-group-active-bg: var(--bs-primary-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-primary-text-emphasis);
}

.list-group-item-secondary {
  --bs-list-group-color: var(--bs-secondary-text-emphasis);
  --bs-list-group-bg: var(--bs-secondary-bg-subtle);
  --bs-list-group-border-color: var(--bs-secondary-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-secondary-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-secondary-border-subtle);
  --bs-list-group-active-color: var(--bs-secondary-bg-subtle);
  --bs-list-group-active-bg: var(--bs-secondary-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-secondary-text-emphasis);
}

.list-group-item-success {
  --bs-list-group-color: var(--bs-success-text-emphasis);
  --bs-list-group-bg: var(--bs-success-bg-subtle);
  --bs-list-group-border-color: var(--bs-success-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-success-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-success-border-subtle);
  --bs-list-group-active-color: var(--bs-success-bg-subtle);
  --bs-list-group-active-bg: var(--bs-success-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-success-text-emphasis);
}

.list-group-item-info {
  --bs-list-group-color: var(--bs-info-text-emphasis);
  --bs-list-group-bg: var(--bs-info-bg-subtle);
  --bs-list-group-border-color: var(--bs-info-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-info-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-info-border-subtle);
  --bs-list-group-active-color: var(--bs-info-bg-subtle);
  --bs-list-group-active-bg: var(--bs-info-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-info-text-emphasis);
}

.list-group-item-warning {
  --bs-list-group-color: var(--bs-warning-text-emphasis);
  --bs-list-group-bg: var(--bs-warning-bg-subtle);
  --bs-list-group-border-color: var(--bs-warning-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-warning-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-warning-border-subtle);
  --bs-list-group-active-color: var(--bs-warning-bg-subtle);
  --bs-list-group-active-bg: var(--bs-warning-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-warning-text-emphasis);
}

.list-group-item-danger {
  --bs-list-group-color: var(--bs-danger-text-emphasis);
  --bs-list-group-bg: var(--bs-danger-bg-subtle);
  --bs-list-group-border-color: var(--bs-danger-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-danger-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-danger-border-subtle);
  --bs-list-group-active-color: var(--bs-danger-bg-subtle);
  --bs-list-group-active-bg: var(--bs-danger-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-danger-text-emphasis);
}

.list-group-item-light {
  --bs-list-group-color: var(--bs-light-text-emphasis);
  --bs-list-group-bg: var(--bs-light-bg-subtle);
  --bs-list-group-border-color: var(--bs-light-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-light-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-light-border-subtle);
  --bs-list-group-active-color: var(--bs-light-bg-subtle);
  --bs-list-group-active-bg: var(--bs-light-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-light-text-emphasis);
}

.list-group-item-dark {
  --bs-list-group-color: var(--bs-dark-text-emphasis);
  --bs-list-group-bg: var(--bs-dark-bg-subtle);
  --bs-list-group-border-color: var(--bs-dark-border-subtle);
  --bs-list-group-action-hover-color: var(--bs-emphasis-color);
  --bs-list-group-action-hover-bg: var(--bs-dark-border-subtle);
  --bs-list-group-action-active-color: var(--bs-emphasis-color);
  --bs-list-group-action-active-bg: var(--bs-dark-border-subtle);
  --bs-list-group-active-color: var(--bs-dark-bg-subtle);
  --bs-list-group-active-bg: var(--bs-dark-text-emphasis);
  --bs-list-group-active-border-color: var(--bs-dark-text-emphasis);
}

.btn-close {
  --bs-btn-close-color: #000;
  --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e");
  --bs-btn-close-opacity: 0.5;
  --bs-btn-close-hover-opacity: 0.75;
  --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-btn-close-focus-opacity: 1;
  --bs-btn-close-disabled-opacity: 0.25;
  --bs-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: var(--bs-btn-close-color);
  background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat;
  border: 0;
  border-radius: 0.375rem;
  opacity: var(--bs-btn-close-opacity);
}
.btn-close:hover {
  color: var(--bs-btn-close-color);
  text-decoration: none;
  opacity: var(--bs-btn-close-hover-opacity);
}
.btn-close:focus {
  outline: 0;
  box-shadow: var(--bs-btn-close-focus-shadow);
  opacity: var(--bs-btn-close-focus-opacity);
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  user-select: none;
  opacity: var(--bs-btn-close-disabled-opacity);
}

.btn-close-white {
  filter: var(--bs-btn-close-white-filter);
}

[data-bs-theme=dark] .btn-close {
  filter: var(--bs-btn-close-white-filter);
}

.toast {
  --bs-toast-zindex: 1090;
  --bs-toast-padding-x: 0.75rem;
  --bs-toast-padding-y: 0.5rem;
  --bs-toast-spacing: 1.5rem;
  --bs-toast-max-width: 350px;
  --bs-toast-font-size: 0.875rem;
  --bs-toast-color: ;
  --bs-toast-bg: rgba(var(--bs-body-bg-rgb), 0.85);
  --bs-toast-border-width: var(--bs-border-width);
  --bs-toast-border-color: var(--bs-border-color-translucent);
  --bs-toast-border-radius: var(--bs-border-radius);
  --bs-toast-box-shadow: var(--bs-box-shadow);
  --bs-toast-header-color: var(--bs-secondary-color);
  --bs-toast-header-bg: rgba(var(--bs-body-bg-rgb), 0.85);
  --bs-toast-header-border-color: var(--bs-border-color-translucent);
  width: var(--bs-toast-max-width);
  max-width: 100%;
  font-size: var(--bs-toast-font-size);
  color: var(--bs-toast-color);
  pointer-events: auto;
  background-color: var(--bs-toast-bg);
  background-clip: padding-box;
  border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);
  box-shadow: var(--bs-toast-box-shadow);
  border-radius: var(--bs-toast-border-radius);
}
.toast.showing {
  opacity: 0;
}
.toast:not(.show) {
  display: none;
}

.toast-container {
  --bs-toast-zindex: 1090;
  position: absolute;
  z-index: var(--bs-toast-zindex);
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: var(--bs-toast-spacing);
}

.toast-header {
  display: flex;
  align-items: center;
  padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);
  color: var(--bs-toast-header-color);
  background-color: var(--bs-toast-header-bg);
  background-clip: padding-box;
  border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);
  border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
  border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));
}
.toast-header .btn-close {
  margin-right: calc(-0.5 * var(--bs-toast-padding-x));
  margin-left: var(--bs-toast-padding-x);
}

.toast-body {
  padding: var(--bs-toast-padding-x);
  word-wrap: break-word;
}

.modal {
  --bs-modal-zindex: 1055;
  --bs-modal-width: 500px;
  --bs-modal-padding: 1rem;
  --bs-modal-margin: 0.5rem;
  --bs-modal-color: ;
  --bs-modal-bg: var(--bs-body-bg);
  --bs-modal-border-color: var(--bs-border-color-translucent);
  --bs-modal-border-width: var(--bs-border-width);
  --bs-modal-border-radius: var(--bs-border-radius-lg);
  --bs-modal-box-shadow: var(--bs-box-shadow-sm);
  --bs-modal-inner-border-radius: calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));
  --bs-modal-header-padding-x: 1rem;
  --bs-modal-header-padding-y: 1rem;
  --bs-modal-header-padding: 1rem 1rem;
  --bs-modal-header-border-color: var(--bs-border-color);
  --bs-modal-header-border-width: var(--bs-border-width);
  --bs-modal-title-line-height: 1.5;
  --bs-modal-footer-gap: 0.5rem;
  --bs-modal-footer-bg: ;
  --bs-modal-footer-border-color: var(--bs-border-color);
  --bs-modal-footer-border-width: var(--bs-border-width);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-modal-zindex);
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: var(--bs-modal-margin);
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - var(--bs-modal-margin) * 2);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - var(--bs-modal-margin) * 2);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--bs-modal-color);
  pointer-events: auto;
  background-color: var(--bs-modal-bg);
  background-clip: padding-box;
  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
  border-radius: var(--bs-modal-border-radius);
  outline: 0;
}

.modal-backdrop {
  --bs-backdrop-zindex: 1050;
  --bs-backdrop-bg: #000;
  --bs-backdrop-opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-backdrop-zindex);
  width: 100vw;
  height: 100vh;
  background-color: var(--bs-backdrop-bg);
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: var(--bs-backdrop-opacity);
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: var(--bs-modal-header-padding);
  border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);
  border-top-left-radius: var(--bs-modal-inner-border-radius);
  border-top-right-radius: var(--bs-modal-inner-border-radius);
}
.modal-header .btn-close {
  padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);
  margin: calc(-0.5 * var(--bs-modal-header-padding-y)) calc(-0.5 * var(--bs-modal-header-padding-x)) calc(-0.5 * var(--bs-modal-header-padding-y)) auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: var(--bs-modal-title-line-height);
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: var(--bs-modal-padding);
}

.modal-footer {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);
  background-color: var(--bs-modal-footer-bg);
  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);
  border-bottom-right-radius: var(--bs-modal-inner-border-radius);
  border-bottom-left-radius: var(--bs-modal-inner-border-radius);
}
.modal-footer > * {
  margin: calc(var(--bs-modal-footer-gap) * 0.5);
}

@media (min-width: 576px) {
  .modal {
    --bs-modal-margin: 1.75rem;
    --bs-modal-box-shadow: var(--bs-box-shadow);
  }
  .modal-dialog {
    max-width: var(--bs-modal-width);
    margin-right: auto;
    margin-left: auto;
  }
  .modal-sm {
    --bs-modal-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    --bs-modal-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    --bs-modal-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header,
.modal-fullscreen .modal-footer {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header,
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header,
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header,
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header,
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header,
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
}
.tooltip {
  --bs-tooltip-zindex: 1080;
  --bs-tooltip-max-width: 200px;
  --bs-tooltip-padding-x: 0.5rem;
  --bs-tooltip-padding-y: 0.25rem;
  --bs-tooltip-margin: ;
  --bs-tooltip-font-size: 0.875rem;
  --bs-tooltip-color: var(--bs-body-bg);
  --bs-tooltip-bg: var(--bs-emphasis-color);
  --bs-tooltip-border-radius: var(--bs-border-radius);
  --bs-tooltip-opacity: 0.9;
  --bs-tooltip-arrow-width: 0.8rem;
  --bs-tooltip-arrow-height: 0.4rem;
  z-index: var(--bs-tooltip-zindex);
  display: block;
  margin: var(--bs-tooltip-margin);
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--bs-tooltip-font-size);
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: var(--bs-tooltip-opacity);
}
.tooltip .tooltip-arrow {
  display: block;
  width: var(--bs-tooltip-arrow-width);
  height: var(--bs-tooltip-arrow-height);
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: calc(-1 * var(--bs-tooltip-arrow-height));
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
  border-top-color: var(--bs-tooltip-bg);
}

/* rtl:begin:ignore */
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: calc(-1 * var(--bs-tooltip-arrow-height));
  width: var(--bs-tooltip-arrow-height);
  height: var(--bs-tooltip-arrow-width);
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;
  border-right-color: var(--bs-tooltip-bg);
}

/* rtl:end:ignore */
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: calc(-1 * var(--bs-tooltip-arrow-height));
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
  border-bottom-color: var(--bs-tooltip-bg);
}

/* rtl:begin:ignore */
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: calc(-1 * var(--bs-tooltip-arrow-height));
  width: var(--bs-tooltip-arrow-height);
  height: var(--bs-tooltip-arrow-width);
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);
  border-left-color: var(--bs-tooltip-bg);
}

/* rtl:end:ignore */
.tooltip-inner {
  max-width: var(--bs-tooltip-max-width);
  padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);
  color: var(--bs-tooltip-color);
  text-align: center;
  background-color: var(--bs-tooltip-bg);
  border-radius: var(--bs-tooltip-border-radius);
}

.popover {
  --bs-popover-zindex: 1070;
  --bs-popover-max-width: 276px;
  --bs-popover-font-size: 0.875rem;
  --bs-popover-bg: var(--bs-body-bg);
  --bs-popover-border-width: var(--bs-border-width);
  --bs-popover-border-color: var(--bs-border-color-translucent);
  --bs-popover-border-radius: var(--bs-border-radius-lg);
  --bs-popover-inner-border-radius: calc(var(--bs-border-radius-lg) - var(--bs-border-width));
  --bs-popover-box-shadow: var(--bs-box-shadow);
  --bs-popover-header-padding-x: 1rem;
  --bs-popover-header-padding-y: 0.5rem;
  --bs-popover-header-font-size: 1rem;
  --bs-popover-header-color: inherit;
  --bs-popover-header-bg: var(--bs-secondary-bg);
  --bs-popover-body-padding-x: 1rem;
  --bs-popover-body-padding-y: 1rem;
  --bs-popover-body-color: var(--bs-body-color);
  --bs-popover-arrow-width: 1rem;
  --bs-popover-arrow-height: 0.5rem;
  --bs-popover-arrow-border: var(--bs-popover-border-color);
  z-index: var(--bs-popover-zindex);
  display: block;
  max-width: var(--bs-popover-max-width);
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
  font-size: var(--bs-popover-font-size);
  word-wrap: break-word;
  background-color: var(--bs-popover-bg);
  background-clip: padding-box;
  border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
  border-radius: var(--bs-popover-border-radius);
}
.popover .popover-arrow {
  display: block;
  width: var(--bs-popover-arrow-width);
  height: var(--bs-popover-arrow-height);
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
  border-width: 0;
}

.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-top-color: var(--bs-popover-arrow-border);
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: var(--bs-popover-border-width);
  border-top-color: var(--bs-popover-bg);
}

/* rtl:begin:ignore */
.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
  width: var(--bs-popover-arrow-height);
  height: var(--bs-popover-arrow-width);
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-right-color: var(--bs-popover-arrow-border);
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: var(--bs-popover-border-width);
  border-right-color: var(--bs-popover-bg);
}

/* rtl:end:ignore */
.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-bottom-color: var(--bs-popover-arrow-border);
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: var(--bs-popover-border-width);
  border-bottom-color: var(--bs-popover-bg);
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: var(--bs-popover-arrow-width);
  margin-left: calc(-0.5 * var(--bs-popover-arrow-width));
  content: "";
  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);
}

/* rtl:begin:ignore */
.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));
  width: var(--bs-popover-arrow-height);
  height: var(--bs-popover-arrow-width);
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  border-width: calc(var(--bs-popover-arrow-width) * 0.5) 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-left-color: var(--bs-popover-arrow-border);
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: var(--bs-popover-border-width);
  border-left-color: var(--bs-popover-bg);
}

/* rtl:end:ignore */
.popover-header {
  padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);
  margin-bottom: 0;
  font-size: var(--bs-popover-header-font-size);
  color: var(--bs-popover-header-color);
  background-color: var(--bs-popover-header-bg);
  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);
  border-top-left-radius: var(--bs-popover-inner-border-radius);
  border-top-right-radius: var(--bs-popover-inner-border-radius);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);
  color: var(--bs-popover-body-color);
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
  .carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
  .carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e") /*rtl:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")*/;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") /*rtl:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")*/;
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}

[data-bs-theme=dark] .carousel .carousel-control-prev-icon,
[data-bs-theme=dark] .carousel .carousel-control-next-icon, [data-bs-theme=dark].carousel .carousel-control-prev-icon,
[data-bs-theme=dark].carousel .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
[data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target], [data-bs-theme=dark].carousel .carousel-indicators [data-bs-target] {
  background-color: #000;
}
[data-bs-theme=dark] .carousel .carousel-caption, [data-bs-theme=dark].carousel .carousel-caption {
  color: #000;
}

.spinner-grow,
.spinner-border {
  display: inline-block;
  width: var(--bs-spinner-width);
  height: var(--bs-spinner-height);
  vertical-align: var(--bs-spinner-vertical-align);
  border-radius: 50%;
  animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-border-width: 0.25em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-border;
  border: var(--bs-spinner-border-width) solid currentcolor;
  border-right-color: transparent;
}

.spinner-border-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
  --bs-spinner-border-width: 0.2em;
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  --bs-spinner-width: 2rem;
  --bs-spinner-height: 2rem;
  --bs-spinner-vertical-align: -0.125em;
  --bs-spinner-animation-speed: 0.75s;
  --bs-spinner-animation-name: spinner-grow;
  background-color: currentcolor;
  opacity: 0;
}

.spinner-grow-sm {
  --bs-spinner-width: 1rem;
  --bs-spinner-height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
  .spinner-grow {
    --bs-spinner-animation-speed: 1.5s;
  }
}
.offcanvas, .offcanvas-xxl, .offcanvas-xl, .offcanvas-lg, .offcanvas-md, .offcanvas-sm {
  --bs-offcanvas-zindex: 1045;
  --bs-offcanvas-width: 400px;
  --bs-offcanvas-height: 30vh;
  --bs-offcanvas-padding-x: 1rem;
  --bs-offcanvas-padding-y: 1rem;
  --bs-offcanvas-color: var(--bs-body-color);
  --bs-offcanvas-bg: var(--bs-body-bg);
  --bs-offcanvas-border-width: var(--bs-border-width);
  --bs-offcanvas-border-color: var(--bs-border-color-translucent);
  --bs-offcanvas-box-shadow: var(--bs-box-shadow-sm);
  --bs-offcanvas-transition: transform 0.3s ease-in-out;
  --bs-offcanvas-title-line-height: 1.5;
}

@media (max-width: 575.98px) {
  .offcanvas-sm {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-sm {
    transition: none;
  }
}
@media (max-width: 575.98px) {
  .offcanvas-sm.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-sm.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-sm.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-sm.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-sm.showing, .offcanvas-sm.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-sm.showing, .offcanvas-sm.hiding, .offcanvas-sm.show {
    visibility: visible;
  }
}
@media (min-width: 576px) {
  .offcanvas-sm {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-sm .offcanvas-header {
    display: none;
  }
  .offcanvas-sm .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 767.98px) {
  .offcanvas-md {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-md {
    transition: none;
  }
}
@media (max-width: 767.98px) {
  .offcanvas-md.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-md.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-md.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-md.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-md.showing, .offcanvas-md.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-md.showing, .offcanvas-md.hiding, .offcanvas-md.show {
    visibility: visible;
  }
}
@media (min-width: 768px) {
  .offcanvas-md {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-md .offcanvas-header {
    display: none;
  }
  .offcanvas-md .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 991.98px) {
  .offcanvas-lg {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-lg {
    transition: none;
  }
}
@media (max-width: 991.98px) {
  .offcanvas-lg.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-lg.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-lg.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-lg.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-lg.showing, .offcanvas-lg.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-lg.showing, .offcanvas-lg.hiding, .offcanvas-lg.show {
    visibility: visible;
  }
}
@media (min-width: 992px) {
  .offcanvas-lg {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-lg .offcanvas-header {
    display: none;
  }
  .offcanvas-lg .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 1199.98px) {
  .offcanvas-xl {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-xl {
    transition: none;
  }
}
@media (max-width: 1199.98px) {
  .offcanvas-xl.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-xl.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-xl.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-xl.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-xl.showing, .offcanvas-xl.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-xl.showing, .offcanvas-xl.hiding, .offcanvas-xl.show {
    visibility: visible;
  }
}
@media (min-width: 1200px) {
  .offcanvas-xl {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-xl .offcanvas-header {
    display: none;
  }
  .offcanvas-xl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

@media (max-width: 1399.98px) {
  .offcanvas-xxl {
    position: fixed;
    bottom: 0;
    z-index: var(--bs-offcanvas-zindex);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: var(--bs-offcanvas-color);
    visibility: hidden;
    background-color: var(--bs-offcanvas-bg);
    background-clip: padding-box;
    outline: 0;
    transition: var(--bs-offcanvas-transition);
  }
}
@media (max-width: 1399.98px) and (prefers-reduced-motion: reduce) {
  .offcanvas-xxl {
    transition: none;
  }
}
@media (max-width: 1399.98px) {
  .offcanvas-xxl.offcanvas-start {
    top: 0;
    left: 0;
    width: var(--bs-offcanvas-width);
    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(-100%);
  }
  .offcanvas-xxl.offcanvas-end {
    top: 0;
    right: 0;
    width: var(--bs-offcanvas-width);
    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateX(100%);
  }
  .offcanvas-xxl.offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(-100%);
  }
  .offcanvas-xxl.offcanvas-bottom {
    right: 0;
    left: 0;
    height: var(--bs-offcanvas-height);
    max-height: 100%;
    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
    transform: translateY(100%);
  }
  .offcanvas-xxl.showing, .offcanvas-xxl.show:not(.hiding) {
    transform: none;
  }
  .offcanvas-xxl.showing, .offcanvas-xxl.hiding, .offcanvas-xxl.show {
    visibility: visible;
  }
}
@media (min-width: 1400px) {
  .offcanvas-xxl {
    --bs-offcanvas-height: auto;
    --bs-offcanvas-border-width: 0;
    background-color: transparent !important;
  }
  .offcanvas-xxl .offcanvas-header {
    display: none;
  }
  .offcanvas-xxl .offcanvas-body {
    display: flex;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
    background-color: transparent !important;
  }
}

.offcanvas {
  position: fixed;
  bottom: 0;
  z-index: var(--bs-offcanvas-zindex);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  color: var(--bs-offcanvas-color);
  visibility: hidden;
  background-color: var(--bs-offcanvas-bg);
  background-clip: padding-box;
  outline: 0;
  transition: var(--bs-offcanvas-transition);
}
@media (prefers-reduced-motion: reduce) {
  .offcanvas {
    transition: none;
  }
}
.offcanvas.offcanvas-start {
  top: 0;
  left: 0;
  width: var(--bs-offcanvas-width);
  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(-100%);
}
.offcanvas.offcanvas-end {
  top: 0;
  right: 0;
  width: var(--bs-offcanvas-width);
  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateX(100%);
}
.offcanvas.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(-100%);
}
.offcanvas.offcanvas-bottom {
  right: 0;
  left: 0;
  height: var(--bs-offcanvas-height);
  max-height: 100%;
  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);
  transform: translateY(100%);
}
.offcanvas.showing, .offcanvas.show:not(.hiding) {
  transform: none;
}
.offcanvas.showing, .offcanvas.hiding, .offcanvas.show {
  visibility: visible;
}

.offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.offcanvas-backdrop.fade {
  opacity: 0;
}
.offcanvas-backdrop.show {
  opacity: 0.5;
}

.offcanvas-header {
  display: flex;
  align-items: center;
  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
}
.offcanvas-header .btn-close {
  padding: calc(var(--bs-offcanvas-padding-y) * 0.5) calc(var(--bs-offcanvas-padding-x) * 0.5);
  margin: calc(-0.5 * var(--bs-offcanvas-padding-y)) calc(-0.5 * var(--bs-offcanvas-padding-x)) calc(-0.5 * var(--bs-offcanvas-padding-y)) auto;
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: var(--bs-offcanvas-title-line-height);
}

.offcanvas-body {
  flex-grow: 1;
  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);
  overflow-y: auto;
}

.placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentcolor;
  opacity: 0.5;
}
.placeholder.btn::before {
  display: inline-block;
  content: "";
}

.placeholder-xs {
  min-height: 0.6em;
}

.placeholder-sm {
  min-height: 0.8em;
}

.placeholder-lg {
  min-height: 1.2em;
}

.placeholder-glow .placeholder {
  animation: placeholder-glow 2s ease-in-out infinite;
}

@keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}
.placeholder-wave {
  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);
  mask-size: 200% 100%;
  animation: placeholder-wave 2s linear infinite;
}

@keyframes placeholder-wave {
  100% {
    mask-position: -200% 0%;
  }
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.text-bg-primary {
  color: #fff !important;
  background-color: RGBA(var(--bs-primary-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-secondary {
  color: #fff !important;
  background-color: RGBA(var(--bs-secondary-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-success {
  color: #fff !important;
  background-color: RGBA(var(--bs-success-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-info {
  color: #000 !important;
  background-color: RGBA(var(--bs-info-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-warning {
  color: #000 !important;
  background-color: RGBA(var(--bs-warning-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-danger {
  color: #fff !important;
  background-color: RGBA(var(--bs-danger-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-light {
  color: #000 !important;
  background-color: RGBA(var(--bs-light-rgb), var(--bs-bg-opacity, 1)) !important;
}

.text-bg-dark {
  color: #fff !important;
  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1)) !important;
}

.link-primary {
  color: RGBA(var(--bs-primary-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-primary-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-primary:hover, .link-primary:focus {
  color: RGBA(10, 88, 202, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(10, 88, 202, var(--bs-link-underline-opacity, 1)) !important;
}

.link-secondary {
  color: RGBA(var(--bs-secondary-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-secondary-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-secondary:hover, .link-secondary:focus {
  color: RGBA(86, 94, 100, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(86, 94, 100, var(--bs-link-underline-opacity, 1)) !important;
}

.link-success {
  color: RGBA(var(--bs-success-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-success-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-success:hover, .link-success:focus {
  color: RGBA(20, 108, 67, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(20, 108, 67, var(--bs-link-underline-opacity, 1)) !important;
}

.link-info {
  color: RGBA(var(--bs-info-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-info-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-info:hover, .link-info:focus {
  color: RGBA(61, 213, 243, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(61, 213, 243, var(--bs-link-underline-opacity, 1)) !important;
}

.link-warning {
  color: RGBA(var(--bs-warning-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-warning-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-warning:hover, .link-warning:focus {
  color: RGBA(255, 205, 57, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(255, 205, 57, var(--bs-link-underline-opacity, 1)) !important;
}

.link-danger {
  color: RGBA(var(--bs-danger-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-danger-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-danger:hover, .link-danger:focus {
  color: RGBA(176, 42, 55, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(176, 42, 55, var(--bs-link-underline-opacity, 1)) !important;
}

.link-light {
  color: RGBA(var(--bs-light-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-light-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-light:hover, .link-light:focus {
  color: RGBA(249, 250, 251, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(249, 250, 251, var(--bs-link-underline-opacity, 1)) !important;
}

.link-dark {
  color: RGBA(var(--bs-dark-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-dark-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-dark:hover, .link-dark:focus {
  color: RGBA(26, 30, 33, var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(26, 30, 33, var(--bs-link-underline-opacity, 1)) !important;
}

.link-body-emphasis {
  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 1)) !important;
}
.link-body-emphasis:hover, .link-body-emphasis:focus {
  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 0.75)) !important;
  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 0.75)) !important;
}

.focus-ring:focus {
  outline: 0;
  box-shadow: var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);
}

.icon-link {
  display: inline-flex;
  gap: 0.375rem;
  align-items: center;
  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 0.5));
  text-underline-offset: 0.25em;
  backface-visibility: hidden;
}
.icon-link > .bi {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  fill: currentcolor;
  transition: 0.2s ease-in-out transform;
}
@media (prefers-reduced-motion: reduce) {
  .icon-link > .bi {
    transition: none;
  }
}

.icon-link-hover:hover > .bi, .icon-link-hover:focus-visible > .bi {
  transform: var(--bs-icon-link-transform, translate3d(0.25em, 0, 0));
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
  --bs-aspect-ratio: 75%;
}

.ratio-16x9 {
  --bs-aspect-ratio: 56.25%;
}

.ratio-21x9 {
  --bs-aspect-ratio: 42.8571428571%;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
}

.sticky-bottom {
  position: sticky;
  bottom: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .sticky-sm-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-sm-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-md-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-lg-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sticky-xl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-xl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  .sticky-xxl-bottom {
    position: sticky;
    bottom: 0;
    z-index: 1020;
  }
}
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.visually-hidden:not(caption),
.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption) {
  position: absolute !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vr {
  display: inline-block;
  align-self: stretch;
  width: var(--bs-border-width);
  min-height: 1em;
  background-color: currentcolor;
  opacity: 0.25;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.object-fit-contain {
  object-fit: contain !important;
}

.object-fit-cover {
  object-fit: cover !important;
}

.object-fit-fill {
  object-fit: fill !important;
}

.object-fit-scale {
  object-fit: scale-down !important;
}

.object-fit-none {
  object-fit: none !important;
}

.opacity-0 {
  opacity: 0 !important;
}

.opacity-25 {
  opacity: 0.25 !important;
}

.opacity-50 {
  opacity: 0.5 !important;
}

.opacity-75 {
  opacity: 0.75 !important;
}

.opacity-100 {
  opacity: 1 !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.overflow-x-auto {
  overflow-x: auto !important;
}

.overflow-x-hidden {
  overflow-x: hidden !important;
}

.overflow-x-visible {
  overflow-x: visible !important;
}

.overflow-x-scroll {
  overflow-x: scroll !important;
}

.overflow-y-auto {
  overflow-y: auto !important;
}

.overflow-y-hidden {
  overflow-y: hidden !important;
}

.overflow-y-visible {
  overflow-y: visible !important;
}

.overflow-y-scroll {
  overflow-y: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-inline-grid {
  display: inline-grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: var(--bs-box-shadow) !important;
}

.shadow-sm {
  box-shadow: var(--bs-box-shadow-sm) !important;
}

.shadow-lg {
  box-shadow: var(--bs-box-shadow-lg) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.focus-ring-primary {
  --bs-focus-ring-color: rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-secondary {
  --bs-focus-ring-color: rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-success {
  --bs-focus-ring-color: rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-info {
  --bs-focus-ring-color: rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-warning {
  --bs-focus-ring-color: rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-danger {
  --bs-focus-ring-color: rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-light {
  --bs-focus-ring-color: rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity));
}

.focus-ring-dark {
  --bs-focus-ring-color: rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity));
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;
}

.border-secondary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;
}

.border-success {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;
}

.border-info {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;
}

.border-warning {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;
}

.border-danger {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;
}

.border-light {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;
}

.border-dark {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;
}

.border-black {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-black-rgb), var(--bs-border-opacity)) !important;
}

.border-white {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;
}

.border-primary-subtle {
  border-color: var(--bs-primary-border-subtle) !important;
}

.border-secondary-subtle {
  border-color: var(--bs-secondary-border-subtle) !important;
}

.border-success-subtle {
  border-color: var(--bs-success-border-subtle) !important;
}

.border-info-subtle {
  border-color: var(--bs-info-border-subtle) !important;
}

.border-warning-subtle {
  border-color: var(--bs-warning-border-subtle) !important;
}

.border-danger-subtle {
  border-color: var(--bs-danger-border-subtle) !important;
}

.border-light-subtle {
  border-color: var(--bs-light-border-subtle) !important;
}

.border-dark-subtle {
  border-color: var(--bs-dark-border-subtle) !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.border-opacity-10 {
  --bs-border-opacity: 0.1;
}

.border-opacity-25 {
  --bs-border-opacity: 0.25;
}

.border-opacity-50 {
  --bs-border-opacity: 0.5;
}

.border-opacity-75 {
  --bs-border-opacity: 0.75;
}

.border-opacity-100 {
  --bs-border-opacity: 1;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-1 {
  gap: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}

.gap-4 {
  gap: 1.5rem !important;
}

.gap-5 {
  gap: 3rem !important;
}

.row-gap-0 {
  row-gap: 0 !important;
}

.row-gap-1 {
  row-gap: 0.25rem !important;
}

.row-gap-2 {
  row-gap: 0.5rem !important;
}

.row-gap-3 {
  row-gap: 1rem !important;
}

.row-gap-4 {
  row-gap: 1.5rem !important;
}

.row-gap-5 {
  row-gap: 3rem !important;
}

.column-gap-0 {
  column-gap: 0 !important;
}

.column-gap-1 {
  column-gap: 0.25rem !important;
}

.column-gap-2 {
  column-gap: 0.5rem !important;
}

.column-gap-3 {
  column-gap: 1rem !important;
}

.column-gap-4 {
  column-gap: 1.5rem !important;
}

.column-gap-5 {
  column-gap: 3rem !important;
}

.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fs-6 {
  font-size: 1rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-medium {
  font-weight: 500 !important;
}

.fw-semibold {
  font-weight: 600 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.25 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 2 !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}

.text-secondary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}

.text-success {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}

.text-info {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}

.text-warning {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}

.text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}

.text-light {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}

.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}

.text-black {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}

.text-white {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}

.text-body {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
}

.text-black-50 {
  --bs-text-opacity: 1;
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-body-secondary {
  --bs-text-opacity: 1;
  color: var(--bs-secondary-color) !important;
}

.text-body-tertiary {
  --bs-text-opacity: 1;
  color: var(--bs-tertiary-color) !important;
}

.text-body-emphasis {
  --bs-text-opacity: 1;
  color: var(--bs-emphasis-color) !important;
}

.text-reset {
  --bs-text-opacity: 1;
  color: inherit !important;
}

.text-opacity-25 {
  --bs-text-opacity: 0.25;
}

.text-opacity-50 {
  --bs-text-opacity: 0.5;
}

.text-opacity-75 {
  --bs-text-opacity: 0.75;
}

.text-opacity-100 {
  --bs-text-opacity: 1;
}

.text-primary-emphasis {
  color: var(--bs-primary-text-emphasis) !important;
}

.text-secondary-emphasis {
  color: var(--bs-secondary-text-emphasis) !important;
}

.text-success-emphasis {
  color: var(--bs-success-text-emphasis) !important;
}

.text-info-emphasis {
  color: var(--bs-info-text-emphasis) !important;
}

.text-warning-emphasis {
  color: var(--bs-warning-text-emphasis) !important;
}

.text-danger-emphasis {
  color: var(--bs-danger-text-emphasis) !important;
}

.text-light-emphasis {
  color: var(--bs-light-text-emphasis) !important;
}

.text-dark-emphasis {
  color: var(--bs-dark-text-emphasis) !important;
}

.link-opacity-10 {
  --bs-link-opacity: 0.1;
}

.link-opacity-10-hover:hover {
  --bs-link-opacity: 0.1;
}

.link-opacity-25 {
  --bs-link-opacity: 0.25;
}

.link-opacity-25-hover:hover {
  --bs-link-opacity: 0.25;
}

.link-opacity-50 {
  --bs-link-opacity: 0.5;
}

.link-opacity-50-hover:hover {
  --bs-link-opacity: 0.5;
}

.link-opacity-75 {
  --bs-link-opacity: 0.75;
}

.link-opacity-75-hover:hover {
  --bs-link-opacity: 0.75;
}

.link-opacity-100 {
  --bs-link-opacity: 1;
}

.link-opacity-100-hover:hover {
  --bs-link-opacity: 1;
}

.link-offset-1 {
  text-underline-offset: 0.125em !important;
}

.link-offset-1-hover:hover {
  text-underline-offset: 0.125em !important;
}

.link-offset-2 {
  text-underline-offset: 0.25em !important;
}

.link-offset-2-hover:hover {
  text-underline-offset: 0.25em !important;
}

.link-offset-3 {
  text-underline-offset: 0.375em !important;
}

.link-offset-3-hover:hover {
  text-underline-offset: 0.375em !important;
}

.link-underline-primary {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-primary-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-secondary {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-secondary-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-success {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-success-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-info {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-info-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-warning {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-warning-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-danger {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-danger-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-light {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-light-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline-dark {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-dark-rgb), var(--bs-link-underline-opacity)) !important;
}

.link-underline {
  --bs-link-underline-opacity: 1;
  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-underline-opacity, 1)) !important;
}

.link-underline-opacity-0 {
  --bs-link-underline-opacity: 0;
}

.link-underline-opacity-0-hover:hover {
  --bs-link-underline-opacity: 0;
}

.link-underline-opacity-10 {
  --bs-link-underline-opacity: 0.1;
}

.link-underline-opacity-10-hover:hover {
  --bs-link-underline-opacity: 0.1;
}

.link-underline-opacity-25 {
  --bs-link-underline-opacity: 0.25;
}

.link-underline-opacity-25-hover:hover {
  --bs-link-underline-opacity: 0.25;
}

.link-underline-opacity-50 {
  --bs-link-underline-opacity: 0.5;
}

.link-underline-opacity-50-hover:hover {
  --bs-link-underline-opacity: 0.5;
}

.link-underline-opacity-75 {
  --bs-link-underline-opacity: 0.75;
}

.link-underline-opacity-75-hover:hover {
  --bs-link-underline-opacity: 0.75;
}

.link-underline-opacity-100 {
  --bs-link-underline-opacity: 1;
}

.link-underline-opacity-100-hover:hover {
  --bs-link-underline-opacity: 1;
}

.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}

.bg-info {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}

.bg-warning {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}

.bg-danger {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}

.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}

.bg-black {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}

.bg-white {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-transparent {
  --bs-bg-opacity: 1;
  background-color: transparent !important;
}

.bg-body-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body-tertiary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-opacity-10 {
  --bs-bg-opacity: 0.1;
}

.bg-opacity-25 {
  --bs-bg-opacity: 0.25;
}

.bg-opacity-50 {
  --bs-bg-opacity: 0.5;
}

.bg-opacity-75 {
  --bs-bg-opacity: 0.75;
}

.bg-opacity-100 {
  --bs-bg-opacity: 1;
}

.bg-primary-subtle {
  background-color: var(--bs-primary-bg-subtle) !important;
}

.bg-secondary-subtle {
  background-color: var(--bs-secondary-bg-subtle) !important;
}

.bg-success-subtle {
  background-color: var(--bs-success-bg-subtle) !important;
}

.bg-info-subtle {
  background-color: var(--bs-info-bg-subtle) !important;
}

.bg-warning-subtle {
  background-color: var(--bs-warning-bg-subtle) !important;
}

.bg-danger-subtle {
  background-color: var(--bs-danger-bg-subtle) !important;
}

.bg-light-subtle {
  background-color: var(--bs-light-bg-subtle) !important;
}

.bg-dark-subtle {
  background-color: var(--bs-dark-bg-subtle) !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.user-select-all {
  user-select: all !important;
}

.user-select-auto {
  user-select: auto !important;
}

.user-select-none {
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: var(--bs-border-radius) !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: var(--bs-border-radius-sm) !important;
}

.rounded-2 {
  border-radius: var(--bs-border-radius) !important;
}

.rounded-3 {
  border-radius: var(--bs-border-radius-lg) !important;
}

.rounded-4 {
  border-radius: var(--bs-border-radius-xl) !important;
}

.rounded-5 {
  border-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: var(--bs-border-radius-pill) !important;
}

.rounded-top {
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}

.rounded-top-0 {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.rounded-top-1 {
  border-top-left-radius: var(--bs-border-radius-sm) !important;
  border-top-right-radius: var(--bs-border-radius-sm) !important;
}

.rounded-top-2 {
  border-top-left-radius: var(--bs-border-radius) !important;
  border-top-right-radius: var(--bs-border-radius) !important;
}

.rounded-top-3 {
  border-top-left-radius: var(--bs-border-radius-lg) !important;
  border-top-right-radius: var(--bs-border-radius-lg) !important;
}

.rounded-top-4 {
  border-top-left-radius: var(--bs-border-radius-xl) !important;
  border-top-right-radius: var(--bs-border-radius-xl) !important;
}

.rounded-top-5 {
  border-top-left-radius: var(--bs-border-radius-xxl) !important;
  border-top-right-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-top-circle {
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
}

.rounded-top-pill {
  border-top-left-radius: var(--bs-border-radius-pill) !important;
  border-top-right-radius: var(--bs-border-radius-pill) !important;
}

.rounded-end {
  border-top-right-radius: var(--bs-border-radius) !important;
  border-bottom-right-radius: var(--bs-border-radius) !important;
}

.rounded-end-0 {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.rounded-end-1 {
  border-top-right-radius: var(--bs-border-radius-sm) !important;
  border-bottom-right-radius: var(--bs-border-radius-sm) !important;
}

.rounded-end-2 {
  border-top-right-radius: var(--bs-border-radius) !important;
  border-bottom-right-radius: var(--bs-border-radius) !important;
}

.rounded-end-3 {
  border-top-right-radius: var(--bs-border-radius-lg) !important;
  border-bottom-right-radius: var(--bs-border-radius-lg) !important;
}

.rounded-end-4 {
  border-top-right-radius: var(--bs-border-radius-xl) !important;
  border-bottom-right-radius: var(--bs-border-radius-xl) !important;
}

.rounded-end-5 {
  border-top-right-radius: var(--bs-border-radius-xxl) !important;
  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-end-circle {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.rounded-end-pill {
  border-top-right-radius: var(--bs-border-radius-pill) !important;
  border-bottom-right-radius: var(--bs-border-radius-pill) !important;
}

.rounded-bottom {
  border-bottom-right-radius: var(--bs-border-radius) !important;
  border-bottom-left-radius: var(--bs-border-radius) !important;
}

.rounded-bottom-0 {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.rounded-bottom-1 {
  border-bottom-right-radius: var(--bs-border-radius-sm) !important;
  border-bottom-left-radius: var(--bs-border-radius-sm) !important;
}

.rounded-bottom-2 {
  border-bottom-right-radius: var(--bs-border-radius) !important;
  border-bottom-left-radius: var(--bs-border-radius) !important;
}

.rounded-bottom-3 {
  border-bottom-right-radius: var(--bs-border-radius-lg) !important;
  border-bottom-left-radius: var(--bs-border-radius-lg) !important;
}

.rounded-bottom-4 {
  border-bottom-right-radius: var(--bs-border-radius-xl) !important;
  border-bottom-left-radius: var(--bs-border-radius-xl) !important;
}

.rounded-bottom-5 {
  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-bottom-circle {
  border-bottom-right-radius: 50% !important;
  border-bottom-left-radius: 50% !important;
}

.rounded-bottom-pill {
  border-bottom-right-radius: var(--bs-border-radius-pill) !important;
  border-bottom-left-radius: var(--bs-border-radius-pill) !important;
}

.rounded-start {
  border-bottom-left-radius: var(--bs-border-radius) !important;
  border-top-left-radius: var(--bs-border-radius) !important;
}

.rounded-start-0 {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}

.rounded-start-1 {
  border-bottom-left-radius: var(--bs-border-radius-sm) !important;
  border-top-left-radius: var(--bs-border-radius-sm) !important;
}

.rounded-start-2 {
  border-bottom-left-radius: var(--bs-border-radius) !important;
  border-top-left-radius: var(--bs-border-radius) !important;
}

.rounded-start-3 {
  border-bottom-left-radius: var(--bs-border-radius-lg) !important;
  border-top-left-radius: var(--bs-border-radius-lg) !important;
}

.rounded-start-4 {
  border-bottom-left-radius: var(--bs-border-radius-xl) !important;
  border-top-left-radius: var(--bs-border-radius-xl) !important;
}

.rounded-start-5 {
  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
  border-top-left-radius: var(--bs-border-radius-xxl) !important;
}

.rounded-start-circle {
  border-bottom-left-radius: 50% !important;
  border-top-left-radius: 50% !important;
}

.rounded-start-pill {
  border-bottom-left-radius: var(--bs-border-radius-pill) !important;
  border-top-left-radius: var(--bs-border-radius-pill) !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

.z-n1 {
  z-index: -1 !important;
}

.z-0 {
  z-index: 0 !important;
}

.z-1 {
  z-index: 1 !important;
}

.z-2 {
  z-index: 2 !important;
}

.z-3 {
  z-index: 3 !important;
}

@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }
  .float-sm-end {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
  .object-fit-sm-contain {
    object-fit: contain !important;
  }
  .object-fit-sm-cover {
    object-fit: cover !important;
  }
  .object-fit-sm-fill {
    object-fit: fill !important;
  }
  .object-fit-sm-scale {
    object-fit: scale-down !important;
  }
  .object-fit-sm-none {
    object-fit: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-grid {
    display: grid !important;
  }
  .d-sm-inline-grid {
    display: inline-grid !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
  .order-sm-first {
    order: -1 !important;
  }
  .order-sm-0 {
    order: 0 !important;
  }
  .order-sm-1 {
    order: 1 !important;
  }
  .order-sm-2 {
    order: 2 !important;
  }
  .order-sm-3 {
    order: 3 !important;
  }
  .order-sm-4 {
    order: 4 !important;
  }
  .order-sm-5 {
    order: 5 !important;
  }
  .order-sm-last {
    order: 6 !important;
  }
  .m-sm-0 {
    margin: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-sm-0 {
    margin-top: 0 !important;
  }
  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mt-sm-3 {
    margin-top: 1rem !important;
  }
  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mt-sm-5 {
    margin-top: 3rem !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .me-sm-0 {
    margin-right: 0 !important;
  }
  .me-sm-1 {
    margin-right: 0.25rem !important;
  }
  .me-sm-2 {
    margin-right: 0.5rem !important;
  }
  .me-sm-3 {
    margin-right: 1rem !important;
  }
  .me-sm-4 {
    margin-right: 1.5rem !important;
  }
  .me-sm-5 {
    margin-right: 3rem !important;
  }
  .me-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-0 {
    margin-bottom: 0 !important;
  }
  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }
  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ms-sm-0 {
    margin-left: 0 !important;
  }
  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }
  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }
  .ms-sm-3 {
    margin-left: 1rem !important;
  }
  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }
  .ms-sm-5 {
    margin-left: 3rem !important;
  }
  .ms-sm-auto {
    margin-left: auto !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-sm-0 {
    padding-top: 0 !important;
  }
  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pt-sm-3 {
    padding-top: 1rem !important;
  }
  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pt-sm-5 {
    padding-top: 3rem !important;
  }
  .pe-sm-0 {
    padding-right: 0 !important;
  }
  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pe-sm-3 {
    padding-right: 1rem !important;
  }
  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pe-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }
  .ps-sm-0 {
    padding-left: 0 !important;
  }
  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }
  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }
  .ps-sm-3 {
    padding-left: 1rem !important;
  }
  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }
  .ps-sm-5 {
    padding-left: 3rem !important;
  }
  .gap-sm-0 {
    gap: 0 !important;
  }
  .gap-sm-1 {
    gap: 0.25rem !important;
  }
  .gap-sm-2 {
    gap: 0.5rem !important;
  }
  .gap-sm-3 {
    gap: 1rem !important;
  }
  .gap-sm-4 {
    gap: 1.5rem !important;
  }
  .gap-sm-5 {
    gap: 3rem !important;
  }
  .row-gap-sm-0 {
    row-gap: 0 !important;
  }
  .row-gap-sm-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-sm-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-sm-3 {
    row-gap: 1rem !important;
  }
  .row-gap-sm-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-sm-5 {
    row-gap: 3rem !important;
  }
  .column-gap-sm-0 {
    column-gap: 0 !important;
  }
  .column-gap-sm-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-sm-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-sm-3 {
    column-gap: 1rem !important;
  }
  .column-gap-sm-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-sm-5 {
    column-gap: 3rem !important;
  }
  .text-sm-start {
    text-align: left !important;
  }
  .text-sm-end {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }
  .float-md-end {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
  .object-fit-md-contain {
    object-fit: contain !important;
  }
  .object-fit-md-cover {
    object-fit: cover !important;
  }
  .object-fit-md-fill {
    object-fit: fill !important;
  }
  .object-fit-md-scale {
    object-fit: scale-down !important;
  }
  .object-fit-md-none {
    object-fit: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-grid {
    display: grid !important;
  }
  .d-md-inline-grid {
    display: inline-grid !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
  .d-md-none {
    display: none !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
  .order-md-first {
    order: -1 !important;
  }
  .order-md-0 {
    order: 0 !important;
  }
  .order-md-1 {
    order: 1 !important;
  }
  .order-md-2 {
    order: 2 !important;
  }
  .order-md-3 {
    order: 3 !important;
  }
  .order-md-4 {
    order: 4 !important;
  }
  .order-md-5 {
    order: 5 !important;
  }
  .order-md-last {
    order: 6 !important;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-md-0 {
    margin-top: 0 !important;
  }
  .mt-md-1 {
    margin-top: 0.25rem !important;
  }
  .mt-md-2 {
    margin-top: 0.5rem !important;
  }
  .mt-md-3 {
    margin-top: 1rem !important;
  }
  .mt-md-4 {
    margin-top: 1.5rem !important;
  }
  .mt-md-5 {
    margin-top: 3rem !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .me-md-0 {
    margin-right: 0 !important;
  }
  .me-md-1 {
    margin-right: 0.25rem !important;
  }
  .me-md-2 {
    margin-right: 0.5rem !important;
  }
  .me-md-3 {
    margin-right: 1rem !important;
  }
  .me-md-4 {
    margin-right: 1.5rem !important;
  }
  .me-md-5 {
    margin-right: 3rem !important;
  }
  .me-md-auto {
    margin-right: auto !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-md-3 {
    margin-bottom: 1rem !important;
  }
  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-md-5 {
    margin-bottom: 3rem !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ms-md-0 {
    margin-left: 0 !important;
  }
  .ms-md-1 {
    margin-left: 0.25rem !important;
  }
  .ms-md-2 {
    margin-left: 0.5rem !important;
  }
  .ms-md-3 {
    margin-left: 1rem !important;
  }
  .ms-md-4 {
    margin-left: 1.5rem !important;
  }
  .ms-md-5 {
    margin-left: 3rem !important;
  }
  .ms-md-auto {
    margin-left: auto !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pt-md-1 {
    padding-top: 0.25rem !important;
  }
  .pt-md-2 {
    padding-top: 0.5rem !important;
  }
  .pt-md-3 {
    padding-top: 1rem !important;
  }
  .pt-md-4 {
    padding-top: 1.5rem !important;
  }
  .pt-md-5 {
    padding-top: 3rem !important;
  }
  .pe-md-0 {
    padding-right: 0 !important;
  }
  .pe-md-1 {
    padding-right: 0.25rem !important;
  }
  .pe-md-2 {
    padding-right: 0.5rem !important;
  }
  .pe-md-3 {
    padding-right: 1rem !important;
  }
  .pe-md-4 {
    padding-right: 1.5rem !important;
  }
  .pe-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-0 {
    padding-bottom: 0 !important;
  }
  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-md-3 {
    padding-bottom: 1rem !important;
  }
  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-md-5 {
    padding-bottom: 3rem !important;
  }
  .ps-md-0 {
    padding-left: 0 !important;
  }
  .ps-md-1 {
    padding-left: 0.25rem !important;
  }
  .ps-md-2 {
    padding-left: 0.5rem !important;
  }
  .ps-md-3 {
    padding-left: 1rem !important;
  }
  .ps-md-4 {
    padding-left: 1.5rem !important;
  }
  .ps-md-5 {
    padding-left: 3rem !important;
  }
  .gap-md-0 {
    gap: 0 !important;
  }
  .gap-md-1 {
    gap: 0.25rem !important;
  }
  .gap-md-2 {
    gap: 0.5rem !important;
  }
  .gap-md-3 {
    gap: 1rem !important;
  }
  .gap-md-4 {
    gap: 1.5rem !important;
  }
  .gap-md-5 {
    gap: 3rem !important;
  }
  .row-gap-md-0 {
    row-gap: 0 !important;
  }
  .row-gap-md-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-md-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-md-3 {
    row-gap: 1rem !important;
  }
  .row-gap-md-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-md-5 {
    row-gap: 3rem !important;
  }
  .column-gap-md-0 {
    column-gap: 0 !important;
  }
  .column-gap-md-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-md-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-md-3 {
    column-gap: 1rem !important;
  }
  .column-gap-md-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-md-5 {
    column-gap: 3rem !important;
  }
  .text-md-start {
    text-align: left !important;
  }
  .text-md-end {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }
  .float-lg-end {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
  .object-fit-lg-contain {
    object-fit: contain !important;
  }
  .object-fit-lg-cover {
    object-fit: cover !important;
  }
  .object-fit-lg-fill {
    object-fit: fill !important;
  }
  .object-fit-lg-scale {
    object-fit: scale-down !important;
  }
  .object-fit-lg-none {
    object-fit: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-grid {
    display: grid !important;
  }
  .d-lg-inline-grid {
    display: inline-grid !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
  .d-lg-none {
    display: none !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
  .order-lg-first {
    order: -1 !important;
  }
  .order-lg-0 {
    order: 0 !important;
  }
  .order-lg-1 {
    order: 1 !important;
  }
  .order-lg-2 {
    order: 2 !important;
  }
  .order-lg-3 {
    order: 3 !important;
  }
  .order-lg-4 {
    order: 4 !important;
  }
  .order-lg-5 {
    order: 5 !important;
  }
  .order-lg-last {
    order: 6 !important;
  }
  .m-lg-0 {
    margin: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-lg-0 {
    margin-top: 0 !important;
  }
  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mt-lg-3 {
    margin-top: 1rem !important;
  }
  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mt-lg-5 {
    margin-top: 3rem !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .me-lg-0 {
    margin-right: 0 !important;
  }
  .me-lg-1 {
    margin-right: 0.25rem !important;
  }
  .me-lg-2 {
    margin-right: 0.5rem !important;
  }
  .me-lg-3 {
    margin-right: 1rem !important;
  }
  .me-lg-4 {
    margin-right: 1.5rem !important;
  }
  .me-lg-5 {
    margin-right: 3rem !important;
  }
  .me-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }
  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ms-lg-0 {
    margin-left: 0 !important;
  }
  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }
  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }
  .ms-lg-3 {
    margin-left: 1rem !important;
  }
  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }
  .ms-lg-5 {
    margin-left: 3rem !important;
  }
  .ms-lg-auto {
    margin-left: auto !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-lg-0 {
    padding-top: 0 !important;
  }
  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pt-lg-3 {
    padding-top: 1rem !important;
  }
  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pt-lg-5 {
    padding-top: 3rem !important;
  }
  .pe-lg-0 {
    padding-right: 0 !important;
  }
  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pe-lg-3 {
    padding-right: 1rem !important;
  }
  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pe-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }
  .ps-lg-0 {
    padding-left: 0 !important;
  }
  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }
  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }
  .ps-lg-3 {
    padding-left: 1rem !important;
  }
  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }
  .ps-lg-5 {
    padding-left: 3rem !important;
  }
  .gap-lg-0 {
    gap: 0 !important;
  }
  .gap-lg-1 {
    gap: 0.25rem !important;
  }
  .gap-lg-2 {
    gap: 0.5rem !important;
  }
  .gap-lg-3 {
    gap: 1rem !important;
  }
  .gap-lg-4 {
    gap: 1.5rem !important;
  }
  .gap-lg-5 {
    gap: 3rem !important;
  }
  .row-gap-lg-0 {
    row-gap: 0 !important;
  }
  .row-gap-lg-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-lg-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-lg-3 {
    row-gap: 1rem !important;
  }
  .row-gap-lg-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-lg-5 {
    row-gap: 3rem !important;
  }
  .column-gap-lg-0 {
    column-gap: 0 !important;
  }
  .column-gap-lg-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-lg-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-lg-3 {
    column-gap: 1rem !important;
  }
  .column-gap-lg-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-lg-5 {
    column-gap: 3rem !important;
  }
  .text-lg-start {
    text-align: left !important;
  }
  .text-lg-end {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }
  .float-xl-end {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
  .object-fit-xl-contain {
    object-fit: contain !important;
  }
  .object-fit-xl-cover {
    object-fit: cover !important;
  }
  .object-fit-xl-fill {
    object-fit: fill !important;
  }
  .object-fit-xl-scale {
    object-fit: scale-down !important;
  }
  .object-fit-xl-none {
    object-fit: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-grid {
    display: grid !important;
  }
  .d-xl-inline-grid {
    display: inline-grid !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
  .d-xl-none {
    display: none !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
  .order-xl-first {
    order: -1 !important;
  }
  .order-xl-0 {
    order: 0 !important;
  }
  .order-xl-1 {
    order: 1 !important;
  }
  .order-xl-2 {
    order: 2 !important;
  }
  .order-xl-3 {
    order: 3 !important;
  }
  .order-xl-4 {
    order: 4 !important;
  }
  .order-xl-5 {
    order: 5 !important;
  }
  .order-xl-last {
    order: 6 !important;
  }
  .m-xl-0 {
    margin: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xl-0 {
    margin-top: 0 !important;
  }
  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xl-3 {
    margin-top: 1rem !important;
  }
  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xl-5 {
    margin-top: 3rem !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .me-xl-0 {
    margin-right: 0 !important;
  }
  .me-xl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xl-3 {
    margin-right: 1rem !important;
  }
  .me-xl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xl-5 {
    margin-right: 3rem !important;
  }
  .me-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ms-xl-0 {
    margin-left: 0 !important;
  }
  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xl-3 {
    margin-left: 1rem !important;
  }
  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xl-5 {
    margin-left: 3rem !important;
  }
  .ms-xl-auto {
    margin-left: auto !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xl-0 {
    padding-top: 0 !important;
  }
  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xl-3 {
    padding-top: 1rem !important;
  }
  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xl-5 {
    padding-top: 3rem !important;
  }
  .pe-xl-0 {
    padding-right: 0 !important;
  }
  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xl-3 {
    padding-right: 1rem !important;
  }
  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xl-0 {
    padding-left: 0 !important;
  }
  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xl-3 {
    padding-left: 1rem !important;
  }
  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xl-5 {
    padding-left: 3rem !important;
  }
  .gap-xl-0 {
    gap: 0 !important;
  }
  .gap-xl-1 {
    gap: 0.25rem !important;
  }
  .gap-xl-2 {
    gap: 0.5rem !important;
  }
  .gap-xl-3 {
    gap: 1rem !important;
  }
  .gap-xl-4 {
    gap: 1.5rem !important;
  }
  .gap-xl-5 {
    gap: 3rem !important;
  }
  .row-gap-xl-0 {
    row-gap: 0 !important;
  }
  .row-gap-xl-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-xl-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-xl-3 {
    row-gap: 1rem !important;
  }
  .row-gap-xl-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-xl-5 {
    row-gap: 3rem !important;
  }
  .column-gap-xl-0 {
    column-gap: 0 !important;
  }
  .column-gap-xl-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-xl-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-xl-3 {
    column-gap: 1rem !important;
  }
  .column-gap-xl-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-xl-5 {
    column-gap: 3rem !important;
  }
  .text-xl-start {
    text-align: left !important;
  }
  .text-xl-end {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }
  .float-xxl-end {
    float: right !important;
  }
  .float-xxl-none {
    float: none !important;
  }
  .object-fit-xxl-contain {
    object-fit: contain !important;
  }
  .object-fit-xxl-cover {
    object-fit: cover !important;
  }
  .object-fit-xxl-fill {
    object-fit: fill !important;
  }
  .object-fit-xxl-scale {
    object-fit: scale-down !important;
  }
  .object-fit-xxl-none {
    object-fit: none !important;
  }
  .d-xxl-inline {
    display: inline !important;
  }
  .d-xxl-inline-block {
    display: inline-block !important;
  }
  .d-xxl-block {
    display: block !important;
  }
  .d-xxl-grid {
    display: grid !important;
  }
  .d-xxl-inline-grid {
    display: inline-grid !important;
  }
  .d-xxl-table {
    display: table !important;
  }
  .d-xxl-table-row {
    display: table-row !important;
  }
  .d-xxl-table-cell {
    display: table-cell !important;
  }
  .d-xxl-flex {
    display: flex !important;
  }
  .d-xxl-inline-flex {
    display: inline-flex !important;
  }
  .d-xxl-none {
    display: none !important;
  }
  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xxl-row {
    flex-direction: row !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xxl-center {
    justify-content: center !important;
  }
  .justify-content-xxl-between {
    justify-content: space-between !important;
  }
  .justify-content-xxl-around {
    justify-content: space-around !important;
  }
  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }
  .align-items-xxl-start {
    align-items: flex-start !important;
  }
  .align-items-xxl-end {
    align-items: flex-end !important;
  }
  .align-items-xxl-center {
    align-items: center !important;
  }
  .align-items-xxl-baseline {
    align-items: baseline !important;
  }
  .align-items-xxl-stretch {
    align-items: stretch !important;
  }
  .align-content-xxl-start {
    align-content: flex-start !important;
  }
  .align-content-xxl-end {
    align-content: flex-end !important;
  }
  .align-content-xxl-center {
    align-content: center !important;
  }
  .align-content-xxl-between {
    align-content: space-between !important;
  }
  .align-content-xxl-around {
    align-content: space-around !important;
  }
  .align-content-xxl-stretch {
    align-content: stretch !important;
  }
  .align-self-xxl-auto {
    align-self: auto !important;
  }
  .align-self-xxl-start {
    align-self: flex-start !important;
  }
  .align-self-xxl-end {
    align-self: flex-end !important;
  }
  .align-self-xxl-center {
    align-self: center !important;
  }
  .align-self-xxl-baseline {
    align-self: baseline !important;
  }
  .align-self-xxl-stretch {
    align-self: stretch !important;
  }
  .order-xxl-first {
    order: -1 !important;
  }
  .order-xxl-0 {
    order: 0 !important;
  }
  .order-xxl-1 {
    order: 1 !important;
  }
  .order-xxl-2 {
    order: 2 !important;
  }
  .order-xxl-3 {
    order: 3 !important;
  }
  .order-xxl-4 {
    order: 4 !important;
  }
  .order-xxl-5 {
    order: 5 !important;
  }
  .order-xxl-last {
    order: 6 !important;
  }
  .m-xxl-0 {
    margin: 0 !important;
  }
  .m-xxl-1 {
    margin: 0.25rem !important;
  }
  .m-xxl-2 {
    margin: 0.5rem !important;
  }
  .m-xxl-3 {
    margin: 1rem !important;
  }
  .m-xxl-4 {
    margin: 1.5rem !important;
  }
  .m-xxl-5 {
    margin: 3rem !important;
  }
  .m-xxl-auto {
    margin: auto !important;
  }
  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
  .mt-xxl-0 {
    margin-top: 0 !important;
  }
  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }
  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }
  .mt-xxl-3 {
    margin-top: 1rem !important;
  }
  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }
  .mt-xxl-5 {
    margin-top: 3rem !important;
  }
  .mt-xxl-auto {
    margin-top: auto !important;
  }
  .me-xxl-0 {
    margin-right: 0 !important;
  }
  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }
  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }
  .me-xxl-3 {
    margin-right: 1rem !important;
  }
  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }
  .me-xxl-5 {
    margin-right: 3rem !important;
  }
  .me-xxl-auto {
    margin-right: auto !important;
  }
  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }
  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }
  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }
  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }
  .mb-xxl-auto {
    margin-bottom: auto !important;
  }
  .ms-xxl-0 {
    margin-left: 0 !important;
  }
  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }
  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }
  .ms-xxl-3 {
    margin-left: 1rem !important;
  }
  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }
  .ms-xxl-5 {
    margin-left: 3rem !important;
  }
  .ms-xxl-auto {
    margin-left: auto !important;
  }
  .p-xxl-0 {
    padding: 0 !important;
  }
  .p-xxl-1 {
    padding: 0.25rem !important;
  }
  .p-xxl-2 {
    padding: 0.5rem !important;
  }
  .p-xxl-3 {
    padding: 1rem !important;
  }
  .p-xxl-4 {
    padding: 1.5rem !important;
  }
  .p-xxl-5 {
    padding: 3rem !important;
  }
  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .pt-xxl-0 {
    padding-top: 0 !important;
  }
  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }
  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }
  .pt-xxl-3 {
    padding-top: 1rem !important;
  }
  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }
  .pt-xxl-5 {
    padding-top: 3rem !important;
  }
  .pe-xxl-0 {
    padding-right: 0 !important;
  }
  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }
  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }
  .pe-xxl-3 {
    padding-right: 1rem !important;
  }
  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }
  .pe-xxl-5 {
    padding-right: 3rem !important;
  }
  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }
  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }
  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }
  .ps-xxl-0 {
    padding-left: 0 !important;
  }
  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }
  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }
  .ps-xxl-3 {
    padding-left: 1rem !important;
  }
  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }
  .ps-xxl-5 {
    padding-left: 3rem !important;
  }
  .gap-xxl-0 {
    gap: 0 !important;
  }
  .gap-xxl-1 {
    gap: 0.25rem !important;
  }
  .gap-xxl-2 {
    gap: 0.5rem !important;
  }
  .gap-xxl-3 {
    gap: 1rem !important;
  }
  .gap-xxl-4 {
    gap: 1.5rem !important;
  }
  .gap-xxl-5 {
    gap: 3rem !important;
  }
  .row-gap-xxl-0 {
    row-gap: 0 !important;
  }
  .row-gap-xxl-1 {
    row-gap: 0.25rem !important;
  }
  .row-gap-xxl-2 {
    row-gap: 0.5rem !important;
  }
  .row-gap-xxl-3 {
    row-gap: 1rem !important;
  }
  .row-gap-xxl-4 {
    row-gap: 1.5rem !important;
  }
  .row-gap-xxl-5 {
    row-gap: 3rem !important;
  }
  .column-gap-xxl-0 {
    column-gap: 0 !important;
  }
  .column-gap-xxl-1 {
    column-gap: 0.25rem !important;
  }
  .column-gap-xxl-2 {
    column-gap: 0.5rem !important;
  }
  .column-gap-xxl-3 {
    column-gap: 1rem !important;
  }
  .column-gap-xxl-4 {
    column-gap: 1.5rem !important;
  }
  .column-gap-xxl-5 {
    column-gap: 3rem !important;
  }
  .text-xxl-start {
    text-align: left !important;
  }
  .text-xxl-end {
    text-align: right !important;
  }
  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }
  .fs-2 {
    font-size: 2rem !important;
  }
  .fs-3 {
    font-size: 1.75rem !important;
  }
  .fs-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-grid {
    display: grid !important;
  }
  .d-print-inline-grid {
    display: inline-grid !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
  .d-print-none {
    display: none !important;
  }
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxwYWRoeVxcRGVza3RvcFxcSlMtdG9vbHNcXGVzYnVpZC1ib2lsZXJcXHNyY1xcY2xpZW50XFxzdHlsZXMiLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9iYW5uZXIuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfcm9vdC5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXHZlbmRvclxcX3Jmcy5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2NvbG9yLW1vZGUuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfcmVib290LnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JvcmRlci1yYWRpdXMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdHlwZS5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2xpc3RzLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX2ltYWdlcy5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2ltYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX2NvbnRhaW5lcnMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9jb250YWluZXIuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF9ncmlkLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfZ3JpZC5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF90YWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF90YWJsZS12YXJpYW50cy5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXGZvcm1zXFxfbGFiZWxzLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcZm9ybXNcXF9mb3JtLXRleHQuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxmb3Jtc1xcX2Zvcm0tY29udHJvbC5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX3RyYW5zaXRpb24uc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9ncmFkaWVudHMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxmb3Jtc1xcX2Zvcm0tc2VsZWN0LnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcZm9ybXNcXF9mb3JtLWNoZWNrLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcZm9ybXNcXF9mb3JtLXJhbmdlLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcZm9ybXNcXF9mbG9hdGluZy1sYWJlbHMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxmb3Jtc1xcX2lucHV0LWdyb3VwLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfZm9ybXMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfYnV0dG9ucy5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2J1dHRvbnMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdHJhbnNpdGlvbnMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfZHJvcGRvd24uc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9jYXJldC5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF9idXR0b24tZ3JvdXAuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfbmF2LnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX25hdmJhci5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF9jYXJkLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX2FjY29yZGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF9icmVhZGNydW1iLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX3BhZ2luYXRpb24uc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9wYWdpbmF0aW9uLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX2JhZGdlLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX2FsZXJ0LnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX3Byb2dyZXNzLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX2xpc3QtZ3JvdXAuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfY2xvc2Uuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdG9hc3RzLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX21vZGFsLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYmFja2Ryb3Auc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdG9vbHRpcC5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX3Jlc2V0LXRleHQuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfcG9wb3Zlci5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF9jYXJvdXNlbC5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2NsZWFyZml4LnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX3NwaW5uZXJzLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX29mZmNhbnZhcy5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF9wbGFjZWhvbGRlcnMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxoZWxwZXJzXFxfY29sb3ItYmcuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxoZWxwZXJzXFxfY29sb3JlZC1saW5rcy5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXGhlbHBlcnNcXF9mb2N1cy1yaW5nLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcaGVscGVyc1xcX2ljb24tbGluay5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXGhlbHBlcnNcXF9yYXRpby5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXGhlbHBlcnNcXF9wb3NpdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXGhlbHBlcnNcXF9zdGFja3Muc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxoZWxwZXJzXFxfdmlzdWFsbHktaGlkZGVuLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfdmlzdWFsbHktaGlkZGVuLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcaGVscGVyc1xcX3N0cmV0Y2hlZC1saW5rLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcaGVscGVyc1xcX3RleHQtdHJ1bmNhdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX3RleHQtdHJ1bmNhdGUuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxoZWxwZXJzXFxfdnIuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF91dGlsaXRpZXMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFx1dGlsaXRpZXNcXF9hcGkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQ0RGO0FBQUE7RUFTSTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBSUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBSUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUlBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFJQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBSUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUlBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFHRjtFQUNBO0VBTUE7RUFDQTtFQUNBO0VBT0E7RUMyT0kscUJBTEk7RURwT1I7RUFDQTtFQUtBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUVBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFNQTtFQUNBO0VBQ0E7RUFHQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7RUFDQTtFQUNBO0VBQ0E7RUFJQTtFQUNBO0VBQ0E7RUFJQTtFQUNBO0VBQ0E7RUFDQTs7O0FFaEhFO0VGc0hBO0VBR0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUdFO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFJQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBSUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUdGO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7OztBR3hLSjtBQUFBO0FBQUE7RUFHRTs7O0FBZUU7RUFOSjtJQU9NOzs7O0FBY047RUFDRTtFQUNBO0VGNk9JLFdBTEk7RUV0T1I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVNGO0VBQ0U7RUFDQSxPQ21uQjRCO0VEbG5CNUI7RUFDQTtFQUNBLFNDeW5CNEI7OztBRC9tQjlCO0VBQ0U7RUFDQSxlQ3dqQjRCO0VEcmpCNUIsYUN3akI0QjtFRHZqQjVCLGFDd2pCNEI7RUR2akI1Qjs7O0FBR0Y7RUZ1TVE7O0FBNUpKO0VFM0NKO0lGOE1ROzs7O0FFek1SO0VGa01ROztBQTVKSjtFRXRDSjtJRnlNUTs7OztBRXBNUjtFRjZMUTs7QUE1Sko7RUVqQ0o7SUZvTVE7Ozs7QUUvTFI7RUZ3TFE7O0FBNUpKO0VFNUJKO0lGK0xROzs7O0FFMUxSO0VGK0tNLFdBTEk7OztBRXJLVjtFRjBLTSxXQUxJOzs7QUUxSlY7RUFDRTtFQUNBLGVDd1YwQjs7O0FEOVU1QjtFQUNFO0VBQ0E7RUFDQTs7O0FBTUY7RUFDRTtFQUNBO0VBQ0E7OztBQU1GO0FBQUE7RUFFRTs7O0FBR0Y7QUFBQTtBQUFBO0VBR0U7RUFDQTs7O0FBR0Y7QUFBQTtBQUFBO0FBQUE7RUFJRTs7O0FBR0Y7RUFDRSxhQzZiNEI7OztBRHhiOUI7RUFDRTtFQUNBOzs7QUFNRjtFQUNFOzs7QUFRRjtBQUFBO0VBRUUsYUNzYTRCOzs7QUQ5WjlCO0VGNkVNLFdBTEk7OztBRWpFVjtFQUNFLFNDcWY0QjtFRHBmNUI7RUFDQTs7O0FBU0Y7QUFBQTtFQUVFO0VGd0RJLFdBTEk7RUVqRFI7RUFDQTs7O0FBR0Y7RUFBTTs7O0FBQ047RUFBTTs7O0FBS047RUFDRTtFQUNBLGlCQ2dOd0M7O0FEOU14QztFQUNFOzs7QUFXRjtFQUVFO0VBQ0E7OztBQU9KO0FBQUE7QUFBQTtBQUFBO0VBSUUsYUNnVjRCO0VIbFV4QixXQUxJOzs7QUVEVjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VGRUksV0FMSTs7QUVRUjtFRkhJLFdBTEk7RUVVTjtFQUNBOzs7QUFJSjtFRlZNLFdBTEk7RUVpQlI7RUFDQTs7QUFHQTtFQUNFOzs7QUFJSjtFQUNFO0VGdEJJLFdBTEk7RUU2QlIsT0N5NUNrQztFRHg1Q2xDLGtCQ3k1Q2tDO0VDOXJEaEM7O0FGd1NGO0VBQ0U7RUY3QkUsV0FMSTs7O0FFNkNWO0VBQ0U7OztBQU1GO0FBQUE7RUFFRTs7O0FBUUY7RUFDRTtFQUNBOzs7QUFHRjtFQUNFLGFDNFg0QjtFRDNYNUIsZ0JDMlg0QjtFRDFYNUIsT0M0WjRCO0VEM1o1Qjs7O0FBT0Y7RUFFRTtFQUNBOzs7QUFHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNRTtFQUNBO0VBQ0E7OztBQVFGO0VBQ0U7OztBQU1GO0VBRUU7OztBQVFGO0VBQ0U7OztBQUtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFLRTtFQUNBO0VGNUhJLFdBTEk7RUVtSVI7OztBQUlGO0FBQUE7RUFFRTs7O0FBS0Y7RUFDRTs7O0FBR0Y7RUFHRTs7QUFHQTtFQUNFOzs7QUFPSjtFQUNFOzs7QUFRRjtBQUFBO0FBQUE7QUFBQTtFQUlFOztBQUdFO0FBQUE7QUFBQTtBQUFBO0VBQ0U7OztBQU9OO0VBQ0U7RUFDQTs7O0FBS0Y7RUFDRTs7O0FBVUY7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBUUY7RUFDRTtFQUNBO0VBQ0E7RUFDQSxlQ21ONEI7RUhwYXRCO0VFb05OOztBRmhYRTtFRXlXSjtJRnRNUTs7O0FFK01OO0VBQ0U7OztBQU9KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBT0U7OztBQUdGO0VBQ0U7OztBQVNGO0VBQ0U7RUFDQTs7O0FBUUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0VBQ0U7OztBQUtGO0VBQ0U7OztBQU9GO0VBQ0U7RUFDQTs7O0FBS0Y7RUFDRTs7O0FBS0Y7RUFDRTs7O0FBT0Y7RUFDRTtFQUNBOzs7QUFRRjtFQUNFOzs7QUFRRjtFQUNFOzs7QUdya0JGO0VMbVFNLFdBTEk7RUs1UFIsYUZ3b0I0Qjs7O0FFbm9CNUI7RUxnUU07RUs1UEosYUZ5bkJrQjtFRXhuQmxCLGFGd21CMEI7O0FIemdCMUI7RUtwR0Y7SUx1UU07Ozs7QUt2UU47RUxnUU07RUs1UEosYUZ5bkJrQjtFRXhuQmxCLGFGd21CMEI7O0FIemdCMUI7RUtwR0Y7SUx1UU07Ozs7QUt2UU47RUxnUU07RUs1UEosYUZ5bkJrQjtFRXhuQmxCLGFGd21CMEI7O0FIemdCMUI7RUtwR0Y7SUx1UU07Ozs7QUt2UU47RUxnUU07RUs1UEosYUZ5bkJrQjtFRXhuQmxCLGFGd21CMEI7O0FIemdCMUI7RUtwR0Y7SUx1UU07Ozs7QUt2UU47RUxnUU07RUs1UEosYUZ5bkJrQjtFRXhuQmxCLGFGd21CMEI7O0FIemdCMUI7RUtwR0Y7SUx1UU07Ozs7QUt2UU47RUxnUU07RUs1UEosYUZ5bkJrQjtFRXhuQmxCLGFGd21CMEI7O0FIemdCMUI7RUtwR0Y7SUx1UU07Ozs7QUsvT1I7RUN2REU7RUFDQTs7O0FEMkRGO0VDNURFO0VBQ0E7OztBRDhERjtFQUNFOztBQUVBO0VBQ0UsY0Zzb0IwQjs7O0FFNW5COUI7RUw4TU0sV0FMSTtFS3ZNUjs7O0FBSUY7RUFDRSxlRmlVTztFSDFISCxXQUxJOztBSy9MUjtFQUNFOzs7QUFJSjtFQUNFO0VBQ0EsZUZ1VE87RUgxSEgsV0FMSTtFS3RMUixPRnRGUzs7QUV3RlQ7RUFDRTs7O0FFaEdKO0VDSUU7RUFHQTs7O0FEREY7RUFDRSxTSitqRGtDO0VJOWpEbEMsa0JKK2pEa0M7RUk5akRsQztFSEdFO0VJUkY7RUFHQTs7O0FEY0Y7RUFFRTs7O0FBR0Y7RUFDRTtFQUNBOzs7QUFHRjtFUHlQTSxXQUxJO0VPbFBSLE9Ka2pEa0M7OztBTXBsRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VDSEE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQ3NERTtFRjVDRTtJQUNFLFdOa2VlOzs7QVF2Ym5CO0VGNUNFO0lBQ0UsV05rZWU7OztBUXZibkI7RUY1Q0U7SUFDRSxXTmtlZTs7O0FRdmJuQjtFRjVDRTtJQUNFLFdOa2VlOzs7QVF2Ym5CO0VGNUNFO0lBQ0UsV05rZWU7OztBU2xmdkI7RUFFSTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7OztBQUtGO0VDTkE7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7O0FERUU7RUNPRjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQStDSTtFQUNFOzs7QUFHRjtFQXBDSjtFQUNBOzs7QUFjQTtFQUNFO0VBQ0E7OztBQUZGO0VBQ0U7RUFDQTs7O0FBRkY7RUFDRTtFQUNBOzs7QUFGRjtFQUNFO0VBQ0E7OztBQUZGO0VBQ0U7RUFDQTs7O0FBRkY7RUFDRTtFQUNBOzs7QUErQkU7RUFoREo7RUFDQTs7O0FBcURRO0VBaEVOO0VBQ0E7OztBQStETTtFQWhFTjtFQUNBOzs7QUErRE07RUFoRU47RUFDQTs7O0FBK0RNO0VBaEVOO0VBQ0E7OztBQStETTtFQWhFTjtFQUNBOzs7QUErRE07RUFoRU47RUFDQTs7O0FBK0RNO0VBaEVOO0VBQ0E7OztBQStETTtFQWhFTjtFQUNBOzs7QUErRE07RUFoRU47RUFDQTs7O0FBK0RNO0VBaEVOO0VBQ0E7OztBQStETTtFQWhFTjtFQUNBOzs7QUErRE07RUFoRU47RUFDQTs7O0FBdUVRO0VBeERWOzs7QUF3RFU7RUF4RFY7OztBQXdEVTtFQXhEVjs7O0FBd0RVO0VBeERWOzs7QUF3RFU7RUF4RFY7OztBQXdEVTtFQXhEVjs7O0FBd0RVO0VBeERWOzs7QUF3RFU7RUF4RFY7OztBQXdEVTtFQXhEVjs7O0FBd0RVO0VBeERWOzs7QUF3RFU7RUF4RFY7OztBQW1FTTtBQUFBO0VBRUU7OztBQUdGO0FBQUE7RUFFRTs7O0FBUEY7QUFBQTtFQUVFOzs7QUFHRjtBQUFBO0VBRUU7OztBQVBGO0FBQUE7RUFFRTs7O0FBR0Y7QUFBQTtFQUVFOzs7QUFQRjtBQUFBO0VBRUU7OztBQUdGO0FBQUE7RUFFRTs7O0FBUEY7QUFBQTtFQUVFOzs7QUFHRjtBQUFBO0VBRUU7OztBQVBGO0FBQUE7RUFFRTs7O0FBR0Y7QUFBQTtFQUVFOzs7QUYxRE47RUVVRTtJQUNFOztFQUdGO0lBcENKO0lBQ0E7O0VBY0E7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBRkY7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBK0JFO0lBaERKO0lBQ0E7O0VBcURRO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBdUVRO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBbUVNO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOztFQVBGO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOzs7QUYxRE47RUVVRTtJQUNFOztFQUdGO0lBcENKO0lBQ0E7O0VBY0E7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBRkY7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBK0JFO0lBaERKO0lBQ0E7O0VBcURRO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBdUVRO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBbUVNO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOztFQVBGO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOzs7QUYxRE47RUVVRTtJQUNFOztFQUdGO0lBcENKO0lBQ0E7O0VBY0E7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBRkY7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBK0JFO0lBaERKO0lBQ0E7O0VBcURRO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBdUVRO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBbUVNO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOztFQVBGO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOzs7QUYxRE47RUVVRTtJQUNFOztFQUdGO0lBcENKO0lBQ0E7O0VBY0E7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBRkY7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBK0JFO0lBaERKO0lBQ0E7O0VBcURRO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBdUVRO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBbUVNO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOztFQVBGO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOzs7QUYxRE47RUVVRTtJQUNFOztFQUdGO0lBcENKO0lBQ0E7O0VBY0E7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBRkY7SUFDRTtJQUNBOztFQUZGO0lBQ0U7SUFDQTs7RUFGRjtJQUNFO0lBQ0E7O0VBK0JFO0lBaERKO0lBQ0E7O0VBcURRO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBK0RNO0lBaEVOO0lBQ0E7O0VBdUVRO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBd0RVO0lBeERWOztFQXdEVTtJQXhEVjs7RUF3RFU7SUF4RFY7O0VBbUVNO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOztFQVBGO0FBQUE7SUFFRTs7RUFHRjtBQUFBO0lBRUU7O0VBUEY7QUFBQTtJQUVFOztFQUdGO0FBQUE7SUFFRTs7RUFQRjtBQUFBO0lBRUU7O0VBR0Y7QUFBQTtJQUVFOzs7QUNySFY7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQSxlWGtZTztFV2pZUCxnQlh1c0I0QjtFV3RzQjVCOztBQU9BO0VBQ0U7RUFFQTtFQUNBO0VBQ0EscUJYK3NCMEI7RVc5c0IxQjs7QUFHRjtFQUNFOztBQUdGO0VBQ0U7OztBQUlKO0VBQ0U7OztBQU9GO0VBQ0U7OztBQVVBO0VBQ0U7OztBQWVGO0VBQ0U7O0FBR0E7RUFDRTs7O0FBT0o7RUFDRTs7QUFHRjtFQUNFOzs7QUFVRjtFQUNFO0VBQ0E7OztBQU1GO0VBQ0U7RUFDQTs7O0FBUUo7RUFDRTtFQUNBOzs7QUFRQTtFQUNFO0VBQ0E7OztBQzVJRjtFQU9FO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7OztBQWxCRjtFQU9FO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7OztBQWxCRjtFQU9FO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7OztBQWxCRjtFQU9FO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7OztBQWxCRjtFQU9FO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7OztBQWxCRjtFQU9FO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7OztBQWxCRjtFQU9FO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7OztBQWxCRjtFQU9FO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7OztBRGlKQTtFQUNFO0VBQ0E7OztBSDNGRjtFR3lGQTtJQUNFO0lBQ0E7OztBSDNGRjtFR3lGQTtJQUNFO0lBQ0E7OztBSDNGRjtFR3lGQTtJQUNFO0lBQ0E7OztBSDNGRjtFR3lGQTtJQUNFO0lBQ0E7OztBSDNGRjtFR3lGQTtJQUNFO0lBQ0E7OztBRW5LTjtFQUNFLGVidTJCc0M7OztBYTkxQnhDO0VBQ0U7RUFDQTtFQUNBO0VoQjhRSSxXQUxJO0VnQnJRUixhYitsQjRCOzs7QWEzbEI5QjtFQUNFO0VBQ0E7RWhCb1FJLFdBTEk7OztBZ0IzUFY7RUFDRTtFQUNBO0VoQjhQSSxXQUxJOzs7QWlCdFJWO0VBQ0UsWWQrMUJzQztFSHJrQmxDLFdBTEk7RWlCalJSLE9kKzFCc0M7OztBZXAyQnhDO0VBQ0U7RUFDQTtFQUNBO0VsQndSSSxXQUxJO0VrQmhSUixhZmttQjRCO0Vlam1CNUIsYWZ5bUI0QjtFZXhtQjVCLE9mNDNCc0M7RWUzM0J0QztFQUNBLGtCZnEzQnNDO0VlcDNCdEM7RUFDQTtFZEdFO0VlSEUsWURNSjs7QUNGSTtFRGhCTjtJQ2lCUTs7O0FER047RUFDRTs7QUFFQTtFQUNFOztBQUtKO0VBQ0UsT2ZzMkJvQztFZXIyQnBDLGtCZmcyQm9DO0VlLzFCcEMsY2Y4MkJvQztFZTcyQnBDO0VBS0UsWWZraEJrQjs7QWU5Z0J0QjtFQU1FO0VBTUE7RUFLQTs7QUFLRjtFQUNFO0VBQ0E7O0FBSUY7RUFDRSxPZjQwQm9DO0VlMTBCcEM7O0FBUUY7RUFFRSxrQmY4eUJvQztFZTN5QnBDOztBQUlGO0VBQ0U7RUFDQTtFQUNBLG1CZm9yQjBCO0VlbnJCMUIsT2ZzeUJvQztFaUJwNEJ0QyxrQmpCcWlDZ0M7RWVyOEI5QjtFQUNBO0VBQ0E7RUFDQTtFQUNBLHlCZmdzQjBCO0VlL3JCMUI7RUN6RkUsWUQwRkY7O0FDdEZFO0VEMEVKO0lDekVNOzs7QUR3Rk47RUFDRSxrQmY0N0I4Qjs7O0FlbjdCbEM7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBLGFmd2Y0QjtFZXZmNUIsT2YyeEJzQztFZTF4QnRDO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQUdGO0VBRUU7RUFDQTs7O0FBV0o7RUFDRSxZZjR3QnNDO0VlM3dCdEM7RWxCeUlJLFdBTEk7RUl2UU47O0FjdUlGO0VBQ0U7RUFDQTtFQUNBLG1CZm9vQjBCOzs7QWVob0I5QjtFQUNFLFlmZ3dCc0M7RWUvdkJ0QztFbEI0SEksV0FMSTtFSXZRTjs7QWNvSkY7RUFDRTtFQUNBO0VBQ0EsbUJmMm5CMEI7OztBZW5uQjVCO0VBQ0UsWWY2dUJvQzs7QWUxdUJ0QztFQUNFLFlmMHVCb0M7O0FldnVCdEM7RUFDRSxZZnV1Qm9DOzs7QWVsdUJ4QztFQUNFLE9mcXVCc0M7RWVwdUJ0QyxRZjh0QnNDO0VlN3RCdEMsU2ZpbEI0Qjs7QWUva0I1QjtFQUNFOztBQUdGO0VBQ0U7RWR2TEE7O0FjMkxGO0VBQ0U7RWQ1TEE7O0FjZ01GO0VBQW9CLFFmOHNCa0I7O0FlN3NCdEM7RUFBb0IsUWY4c0JrQjs7O0FrQjc1QnhDO0VBQ0U7RUFFQTtFQUNBO0VBQ0E7RXJCcVJJLFdBTEk7RXFCN1FSLGFsQitsQjRCO0VrQjlsQjVCLGFsQnNtQjRCO0VrQnJtQjVCLE9sQnkzQnNDO0VrQngzQnRDO0VBQ0Esa0JsQmszQnNDO0VrQmozQnRDO0VBQ0E7RUFDQSxxQmxCKzlCa0M7RWtCOTlCbEMsaUJsQis5QmtDO0VrQjk5QmxDO0VqQkhFO0VlSEUsWUVTSjs7QUZMSTtFRWZOO0lGZ0JROzs7QUVNTjtFQUNFLGNsQnMzQm9DO0VrQnIzQnBDO0VBS0UsWWxCaStCNEI7O0FrQjc5QmhDO0VBRUUsZWxCNnVCMEI7RWtCNXVCMUI7O0FBR0Y7RUFFRSxrQmxCdTFCb0M7O0FrQmwxQnRDO0VBQ0U7RUFDQTs7O0FBSUo7RUFDRSxhbEJzdUI0QjtFa0JydUI1QixnQmxCcXVCNEI7RWtCcHVCNUIsY2xCcXVCNEI7RUhsZ0J4QixXQUxJO0VJdlFOOzs7QWlCOENKO0VBQ0UsYWxCa3VCNEI7RWtCanVCNUIsZ0JsQml1QjRCO0VrQmh1QjVCLGNsQml1QjRCO0VIdGdCeEIsV0FMSTtFSXZRTjs7O0FpQndEQTtFQUNFOzs7QUN4RU47RUFDRTtFQUNBLFluQnE2QndDO0VtQnA2QnhDLGNuQnE2QndDO0VtQnA2QnhDLGVuQnE2QndDOztBbUJuNkJ4QztFQUNFO0VBQ0E7OztBQUlKO0VBQ0UsZW5CMjVCd0M7RW1CMTVCeEM7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTs7O0FBSUo7RUFDRTtFQUVBO0VBQ0EsT25CMDRCd0M7RW1CejRCeEMsUW5CeTRCd0M7RW1CeDRCeEM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFFuQjI0QndDO0VtQjE0QnhDOztBQUdBO0VsQjNCRTs7QWtCK0JGO0VBRUUsZW5CbTRCc0M7O0FtQmg0QnhDO0VBQ0UsUW5CMDNCc0M7O0FtQnYzQnhDO0VBQ0UsY25CczFCb0M7RW1CcjFCcEM7RUFDQSxZbkI4Zm9COztBbUIzZnRCO0VBQ0Usa0JuQjVCTTtFbUI2Qk4sY25CN0JNOztBbUIrQk47RUFJSTs7QUFJSjtFQUlJOztBQUtOO0VBQ0Usa0JuQmpETTtFbUJrRE4sY25CbERNO0VtQnVESjs7QUFJSjtFQUNFO0VBQ0E7RUFDQSxTbkJrMkJ1Qzs7QW1CMzFCdkM7RUFDRTtFQUNBLFNuQnkxQnFDOzs7QW1CMzBCM0M7RUFDRSxjbkJvMUJnQzs7QW1CbDFCaEM7RUFDRTtFQUVBLE9uQjgwQjhCO0VtQjcwQjlCO0VBQ0E7RUFDQTtFbEJqSEE7RWVIRSxZR3NIRjs7QUhsSEU7RUcwR0o7SUh6R007OztBR21ISjtFQUNFOztBQUdGO0VBQ0UscUJuQjYwQjRCO0VtQngwQjFCOztBQUtOO0VBQ0UsZW5Cd3pCOEI7RW1CdnpCOUI7O0FBRUE7RUFDRTtFQUNBOzs7QUFLTjtFQUNFO0VBQ0EsY25Cc3lCZ0M7OztBbUJueUJsQztFQUNFO0VBQ0E7RUFDQTs7QUFJRTtFQUNFO0VBQ0E7RUFDQSxTbkJzcEJ3Qjs7O0FtQi9vQjFCO0VBQ0U7OztBQ25MTjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFJQTtFQUEwQixZcEI4Z0NhOztBb0I3Z0N2QztFQUEwQixZcEI2Z0NhOztBb0IxZ0N6QztFQUNFOztBQUdGO0VBQ0UsT3BCKy9CdUM7RW9COS9CdkMsUXBCOC9CdUM7RW9CNy9CdkM7RUFDQTtFSDFCRixrQmpCa0NRO0VvQk5OLFFwQjYvQnVDO0VDMWdDdkM7RWVIRSxZSW1CRjs7QUpmRTtFSU1KO0lKTE07OztBSWdCSjtFSGpDRixrQmpCOGhDeUM7O0FvQngvQnpDO0VBQ0UsT3BCdytCOEI7RW9CditCOUIsUXBCdytCOEI7RW9CditCOUI7RUFDQSxRcEJ1K0I4QjtFb0J0K0I5QixrQnBCdStCOEI7RW9CdCtCOUI7RW5CN0JBOztBbUJrQ0Y7RUFDRSxPcEJvK0J1QztFb0JuK0J2QyxRcEJtK0J1QztFb0JsK0J2QztFSHBERixrQmpCa0NRO0VvQm9CTixRcEJtK0J1QztFQzFnQ3ZDO0VlSEUsWUk2Q0Y7O0FKekNFO0VJaUNKO0lKaENNOzs7QUkwQ0o7RUgzREYsa0JqQjhoQ3lDOztBb0I5OUJ6QztFQUNFLE9wQjg4QjhCO0VvQjc4QjlCLFFwQjg4QjhCO0VvQjc4QjlCO0VBQ0EsUXBCNjhCOEI7RW9CNThCOUIsa0JwQjY4QjhCO0VvQjU4QjlCO0VuQnZEQTs7QW1CNERGO0VBQ0U7O0FBRUE7RUFDRSxrQnBCZzlCcUM7O0FvQjc4QnZDO0VBQ0Usa0JwQjQ4QnFDOzs7QXFCbmlDM0M7RUFDRTs7QUFFQTtBQUFBO0FBQUE7RUFHRSxRckJ3aUNvQztFcUJ2aUNwQyxZckJ1aUNvQztFcUJ0aUNwQyxhckJ1aUNvQzs7QXFCcGlDdEM7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFTFJFLFlLU0Y7O0FMTEU7RUtUSjtJTFVNOzs7QUtPTjtBQUFBO0VBRUU7O0FBRUE7QUFBQTtFQUNFOztBQUdGO0FBQUE7QUFBQTtFQUVFLGFyQjRnQ2tDO0VxQjNnQ2xDLGdCckI0Z0NrQzs7QXFCemdDcEM7QUFBQTtFQUNFLGFyQnVnQ2tDO0VxQnRnQ2xDLGdCckJ1Z0NrQzs7QXFCbmdDdEM7RUFDRSxhckJpZ0NvQztFcUJoZ0NwQyxnQnJCaWdDb0M7O0FxQjEvQnBDO0FBQUE7QUFBQTtBQUFBO0VBQ0U7RUFDQSxXckIyL0JrQzs7QXFCei9CbEM7QUFBQTtBQUFBO0FBQUE7RUFDRTtFQUNBO0VBQ0E7RUFDQSxRckJtL0JnQztFcUJsL0JoQztFQUNBLGtCckJnMEJnQztFQ2gzQnBDOztBb0J1REE7RUFDRTtFQUNBLFdyQjArQmtDOztBcUJyK0JwQztFQUNFOztBQUlKO0FBQUE7RUFFRSxPckIxRU87O0FxQjRFUDtBQUFBO0VBQ0Usa0JyQjB5QmtDOzs7QXNCajRCeEM7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0FBQUE7QUFBQTtFQUdFO0VBQ0E7RUFDQTtFQUNBOztBQUlGO0FBQUE7QUFBQTtFQUdFOztBQU1GO0VBQ0U7RUFDQTs7QUFFQTtFQUNFOzs7QUFXTjtFQUNFO0VBQ0E7RUFDQTtFekI4T0ksV0FMSTtFeUJ2T1IsYXRCeWpCNEI7RXNCeGpCNUIsYXRCZ2tCNEI7RXNCL2pCNUIsT3RCbTFCc0M7RXNCbDFCdEM7RUFDQTtFQUNBLGtCdEIwNkJzQztFc0J6NkJ0QztFckJ0Q0U7OztBcUJnREo7QUFBQTtBQUFBO0FBQUE7RUFJRTtFekJ3TkksV0FMSTtFSXZRTjs7O0FxQnlESjtBQUFBO0FBQUE7QUFBQTtFQUlFO0V6QitNSSxXQUxJO0VJdlFOOzs7QXFCa0VKO0FBQUE7RUFFRTs7O0FBYUU7QUFBQTtBQUFBO0FBQUE7RXJCakVBO0VBQ0E7O0FxQnlFQTtBQUFBO0FBQUE7QUFBQTtFckIxRUE7RUFDQTs7QXFCc0ZGO0VBQ0U7RXJCMUVBO0VBQ0E7O0FxQjZFRjtBQUFBO0VyQjlFRTtFQUNBOzs7QXNCeEJGO0VBQ0U7RUFDQTtFQUNBLFl2QnUwQm9DO0VIcmtCbEMsV0FMSTtFMEIxUE4sT3ZCa2pDcUI7OztBdUIvaUN2QjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0UxQnFQRSxXQUxJO0UwQjdPTixPdkJxaUNxQjtFdUJwaUNyQixrQnZCb2lDcUI7RUMvakNyQjs7O0FzQmdDQTtBQUFBO0FBQUE7QUFBQTtFQUVFOzs7QUEvQ0Y7RUFxREUsY3ZCdWhDbUI7RXVCcGhDakIsZXZCODFCZ0M7RXVCNzFCaEM7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRSxjdkI0Z0NpQjtFdUJ2Z0NmLFl2QnVnQ2U7OztBdUI1a0NyQjtFQStFSSxldkJ1MEJnQztFdUJ0MEJoQzs7O0FBaEZKO0VBdUZFLGN2QnEvQm1COztBdUJsL0JqQjtFQUVFO0VBQ0EsZXZCcTVCOEI7RXVCcDVCOUI7RUFDQTs7QUFJSjtFQUNFLGN2QncrQmlCO0V1Qm4rQmYsWXZCbStCZTs7O0F1QjVrQ3JCO0VBa0hJOzs7QUFsSEo7RUF5SEUsY3ZCbTlCbUI7O0F1Qmo5Qm5CO0VBQ0Usa0J2Qmc5QmlCOztBdUI3OEJuQjtFQUNFLFl2QjQ4QmlCOztBdUJ6OEJuQjtFQUNFLE92Qnc4QmlCOzs7QXVCbjhCckI7RUFDRTs7O0FBMUlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFvSk07OztBQWhJUjtFQUNFO0VBQ0E7RUFDQSxZdkJ1MEJvQztFSHJrQmxDLFdBTEk7RTBCMVBOLE92QmtqQ3FCOzs7QXVCL2lDdkI7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFMUJxUEUsV0FMSTtFMEI3T04sT3ZCcWlDcUI7RXVCcGlDckIsa0J2Qm9pQ3FCO0VDL2pDckI7OztBc0JnQ0E7QUFBQTtBQUFBO0FBQUE7RUFFRTs7O0FBL0NGO0VBcURFLGN2QnVoQ21CO0V1QnBoQ2pCLGV2QjgxQmdDO0V1QjcxQmhDO0VBQ0E7RUFDQTtFQUNBOztBQUdGO0VBQ0UsY3ZCNGdDaUI7RXVCdmdDZixZdkJ1Z0NlOzs7QXVCNWtDckI7RUErRUksZXZCdTBCZ0M7RXVCdDBCaEM7OztBQWhGSjtFQXVGRSxjdkJxL0JtQjs7QXVCbC9CakI7RUFFRTtFQUNBLGV2QnE1QjhCO0V1QnA1QjlCO0VBQ0E7O0FBSUo7RUFDRSxjdkJ3K0JpQjtFdUJuK0JmLFl2Qm0rQmU7OztBdUI1a0NyQjtFQWtISTs7O0FBbEhKO0VBeUhFLGN2Qm05Qm1COztBdUJqOUJuQjtFQUNFLGtCdkJnOUJpQjs7QXVCNzhCbkI7RUFDRSxZdkI0OEJpQjs7QXVCejhCbkI7RUFDRSxPdkJ3OEJpQjs7O0F1Qm44QnJCO0VBQ0U7OztBQTFJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBc0pNOzs7QUN4SlY7RUFFRTtFQUNBO0VBQ0E7RTNCdVJJLG9CQUxJO0UyQmhSUjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7RUFDQTtFQUNBO0UzQnNRSSxXQUxJO0UyQi9QUjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RXZCakJFO0VnQmZGLGtCT2tDcUI7RVJ0QmpCLFlRd0JKOztBUnBCSTtFUWhCTjtJUmlCUTs7O0FRcUJOO0VBQ0U7RUFFQTtFQUNBOztBQUdGO0VBRUU7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RVByREYsa0JPc0R1QjtFQUNyQjtFQUNBO0VBS0U7O0FBSUo7RUFDRTtFQUNBO0VBS0U7O0FBSUo7RUFLRTtFQUNBO0VBR0E7O0FBR0E7RUFLSTs7QUFLTjtFQUtJOztBQUlKO0VBR0U7RUFDQTtFQUNBO0VBRUE7RUFDQTs7O0FBWUY7RUMvR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FEa0dBO0VDL0dBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBRGtHQTtFQy9HQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QURrR0E7RUMvR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FEa0dBO0VDL0dBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBRGtHQTtFQy9HQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QURrR0E7RUMvR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FEa0dBO0VDL0dBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBRDRIQTtFQ2hIQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QURtR0E7RUNoSEE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FEbUdBO0VDaEhBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBRG1HQTtFQ2hIQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QURtR0E7RUNoSEE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FEbUdBO0VDaEhBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBRG1HQTtFQ2hIQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QURtR0E7RUNoSEE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FEK0dGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUEsaUJ4QjhRd0M7O0F3QnBReEM7RUFDRTs7QUFHRjtFQUNFOzs7QUFXSjtFQ2pKRTtFQUNBO0U1QjhOSSxvQkFMSTtFNEJ2TlI7OztBRGtKRjtFQ3JKRTtFQUNBO0U1QjhOSSxvQkFMSTtFNEJ2TlI7OztBQ25FRjtFVmdCTSxZVWZKOztBVm1CSTtFVXBCTjtJVnFCUTs7O0FVbEJOO0VBQ0U7OztBQU1GO0VBQ0U7OztBQUlKO0VBQ0U7RUFDQTtFVkRJLFlVRUo7O0FWRUk7RVVMTjtJVk1ROzs7QVVETjtFQUNFO0VBQ0E7RVZORSxZVU9GOztBVkhFO0VVQUo7SVZDTTs7OztBV3BCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNRTs7O0FBR0Y7RUFDRTs7QUN3QkU7RUFDRTtFQUNBLGE1QjZoQndCO0U0QjVoQnhCLGdCNUIyaEJ3QjtFNEIxaEJ4QjtFQXJDSjtFQUNBO0VBQ0E7RUFDQTs7QUEwREU7RUFDRTs7O0FEOUNOO0VBRUU7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFOUJ1UUkseUJBTEk7RThCaFFSO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RTlCME9JLFdBTEk7RThCbk9SO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFMUJ6Q0U7O0EwQjZDRjtFQUNFO0VBQ0E7RUFDQTs7O0FBd0JBO0VBQ0U7O0FBRUE7RUFDRTtFQUNBOzs7QUFJSjtFQUNFOztBQUVBO0VBQ0U7RUFDQTs7O0FuQjFDSjtFbUI0QkE7SUFDRTs7RUFFQTtJQUNFO0lBQ0E7O0VBSUo7SUFDRTs7RUFFQTtJQUNFO0lBQ0E7OztBbkIxQ0o7RW1CNEJBO0lBQ0U7O0VBRUE7SUFDRTtJQUNBOztFQUlKO0lBQ0U7O0VBRUE7SUFDRTtJQUNBOzs7QW5CMUNKO0VtQjRCQTtJQUNFOztFQUVBO0lBQ0U7SUFDQTs7RUFJSjtJQUNFOztFQUVBO0lBQ0U7SUFDQTs7O0FuQjFDSjtFbUI0QkE7SUFDRTs7RUFFQTtJQUNFO0lBQ0E7O0VBSUo7SUFDRTs7RUFFQTtJQUNFO0lBQ0E7OztBbkIxQ0o7RW1CNEJBO0lBQ0U7O0VBRUE7SUFDRTtJQUNBOztFQUlKO0lBQ0U7O0VBRUE7SUFDRTtJQUNBOzs7QUFVTjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQ3BGQTtFQUNFO0VBQ0EsYTVCNmhCd0I7RTRCNWhCeEIsZ0I1QjJoQndCO0U0QjFoQnhCO0VBOUJKO0VBQ0E7RUFDQTtFQUNBOztBQW1ERTtFQUNFOzs7QURnRUo7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQ2xHQTtFQUNFO0VBQ0EsYTVCNmhCd0I7RTRCNWhCeEIsZ0I1QjJoQndCO0U0QjFoQnhCO0VBdkJKO0VBQ0E7RUFDQTtFQUNBOztBQTRDRTtFQUNFOztBRDBFRjtFQUNFOzs7QUFNSjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FDbkhBO0VBQ0U7RUFDQSxhNUI2aEJ3QjtFNEI1aEJ4QixnQjVCMmhCd0I7RTRCMWhCeEI7O0FBV0E7RUFDRTs7QUFHRjtFQUNFO0VBQ0EsYzVCMGdCc0I7RTRCemdCdEIsZ0I1QndnQnNCO0U0QnZnQnRCO0VBbkNOO0VBQ0E7RUFDQTs7QUFzQ0U7RUFDRTs7QUQyRkY7RUFDRTs7O0FBT047RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFNRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsYTNCeWI0QjtFMkJ4YjVCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFMUJ0S0U7O0EwQnlLRjtFQUVFO0VWMUxGLGtCVTRMdUI7O0FBR3ZCO0VBRUU7RUFDQTtFVmxNRixrQlVtTXVCOztBQUd2QjtFQUVFO0VBQ0E7RUFDQTs7O0FBTUo7RUFDRTs7O0FBSUY7RUFDRTtFQUNBO0VBQ0E7RTlCbUVJLFdBTEk7RThCNURSO0VBQ0E7OztBQUlGO0VBQ0U7RUFDQTtFQUNBOzs7QUFJRjtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FFdFBGO0FBQUE7RUFFRTtFQUNBO0VBQ0E7O0FBRUE7QUFBQTtFQUNFO0VBQ0E7O0FBS0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUU7OztBQUtKO0VBQ0U7RUFDQTtFQUNBOztBQUVBO0VBQ0U7OztBQUlKO0U1QmhCSTs7QTRCb0JGO0FBQUE7RUFFRTs7QUFJRjtBQUFBO0FBQUE7RTVCVkU7RUFDQTs7QTRCbUJGO0FBQUE7QUFBQTtFNUJORTtFQUNBOzs7QTRCd0JKO0VBQ0U7RUFDQTs7QUFFQTtFQUdFOztBQUdGO0VBQ0U7OztBQUlKO0VBQ0U7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBOzs7QUFvQkY7RUFDRTtFQUNBO0VBQ0E7O0FBRUE7QUFBQTtFQUVFOztBQUdGO0FBQUE7RUFFRTs7QUFJRjtBQUFBO0U1QjFGRTtFQUNBOztBNEI4RkY7QUFBQTtFNUI3R0U7RUFDQTs7O0E2QnhCSjtFQUVFO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUdBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFakNzUUksV0FMSTtFaUMvUFI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFZGZJLFljZ0JKOztBZFpJO0VjR047SWRGUTs7O0FjYU47RUFFRTs7QUFJRjtFQUNFO0VBQ0EsWTlCa2hCb0I7O0E4QjlnQnRCO0VBRUU7RUFDQTtFQUNBOzs7QUFRSjtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7O0FBRUE7RUFDRTtFQUNBO0U3QjdDQTtFQUNBOztBNkIrQ0E7RUFHRTtFQUNBOztBQUlKO0FBQUE7RUFFRTtFQUNBO0VBQ0E7O0FBR0Y7RUFFRTtFN0JqRUE7RUFDQTs7O0E2QjJFSjtFQUVFO0VBQ0E7RUFDQTs7QUFHQTtFN0I1RkU7O0E2QmdHRjtBQUFBO0VBRUU7RWJqSEYsa0Jha0h1Qjs7O0FBU3pCO0VBRUU7RUFDQTtFQUNBO0VBR0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7O0FBRUE7RUFFRTs7QUFJSjtBQUFBO0VBRUUsYTlCMGQwQjtFOEJ6ZDFCO0VBQ0E7OztBQVVGO0FBQUE7RUFFRTtFQUNBOzs7QUFLRjtBQUFBO0VBRUU7RUFDQTtFQUNBOzs7QUFNRjtBQUFBO0VBQ0U7OztBQVVGO0VBQ0U7O0FBRUY7RUFDRTs7O0FDN0xKO0VBRUU7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUdBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQW9CSjtFQUNFO0VBQ0E7RUFDQTtFbEM0TkksV0FMSTtFa0NyTlI7RUFDQTtFQUNBOztBQUVBO0VBRUU7OztBQVVKO0VBRUU7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRTtFQUVFOztBQUlKO0VBQ0U7OztBQVNKO0VBQ0UsYS9COGdDa0M7RStCN2dDbEMsZ0IvQjZnQ2tDO0UrQjVnQ2xDOztBQUVBO0FBQUE7QUFBQTtFQUdFOzs7QUFhSjtFQUNFO0VBQ0E7RUFHQTs7O0FBSUY7RUFDRTtFbEN5SUksV0FMSTtFa0NsSVI7RUFDQTtFQUNBO0VBQ0E7RTlCeElFO0VlSEUsWWU2SUo7O0FmeklJO0VlaUlOO0lmaElROzs7QWUwSU47RUFDRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7O0FBTUo7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7OztBdkIxSEU7RXVCc0lBO0lBRUk7SUFDQTs7RUFFQTtJQUNFOztFQUVBO0lBQ0U7O0VBR0Y7SUFDRTtJQUNBOztFQUlKO0lBQ0U7O0VBR0Y7SUFDRTtJQUNBOztFQUdGO0lBQ0U7O0VBR0Y7SUFFRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SWY5TkosWWVnT0k7O0VBR0E7SUFDRTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBOzs7QXZCNUxSO0V1QnNJQTtJQUVJO0lBQ0E7O0VBRUE7SUFDRTs7RUFFQTtJQUNFOztFQUdGO0lBQ0U7SUFDQTs7RUFJSjtJQUNFOztFQUdGO0lBQ0U7SUFDQTs7RUFHRjtJQUNFOztFQUdGO0lBRUU7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lmOU5KLFllZ09JOztFQUdBO0lBQ0U7O0VBR0Y7SUFDRTtJQUNBO0lBQ0E7SUFDQTs7O0F2QjVMUjtFdUJzSUE7SUFFSTtJQUNBOztFQUVBO0lBQ0U7O0VBRUE7SUFDRTs7RUFHRjtJQUNFO0lBQ0E7O0VBSUo7SUFDRTs7RUFHRjtJQUNFO0lBQ0E7O0VBR0Y7SUFDRTs7RUFHRjtJQUVFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJZjlOSixZZWdPSTs7RUFHQTtJQUNFOztFQUdGO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7OztBdkI1TFI7RXVCc0lBO0lBRUk7SUFDQTs7RUFFQTtJQUNFOztFQUVBO0lBQ0U7O0VBR0Y7SUFDRTtJQUNBOztFQUlKO0lBQ0U7O0VBR0Y7SUFDRTtJQUNBOztFQUdGO0lBQ0U7O0VBR0Y7SUFFRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SWY5TkosWWVnT0k7O0VBR0E7SUFDRTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBOzs7QXZCNUxSO0V1QnNJQTtJQUVJO0lBQ0E7O0VBRUE7SUFDRTs7RUFFQTtJQUNFOztFQUdGO0lBQ0U7SUFDQTs7RUFJSjtJQUNFOztFQUdGO0lBQ0U7SUFDQTs7RUFHRjtJQUNFOztFQUdGO0lBRUU7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lmOU5KLFllZ09JOztFQUdBO0lBQ0U7O0VBR0Y7SUFDRTtJQUNBO0lBQ0E7SUFDQTs7O0FBdERSO0VBRUk7RUFDQTs7QUFFQTtFQUNFOztBQUVBO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBOztBQUlKO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBOztBQUdGO0VBQ0U7O0FBR0Y7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RWY5TkosWWVnT0k7O0FBR0E7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOzs7QUFpQlo7QUFBQTtFQUdFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQU1FO0VBQ0U7OztBQ3pSTjtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RS9CakJFOztBK0JxQkY7RUFDRTtFQUNBOztBQUdGO0VBQ0U7RUFDQTs7QUFFQTtFQUNFO0UvQnRCRjtFQUNBOztBK0J5QkE7RUFDRTtFL0JiRjtFQUNBOztBK0JtQkY7QUFBQTtFQUVFOzs7QUFJSjtFQUdFO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTs7O0FBUUE7RUFDRTs7O0FBUUo7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0UvQjdGRTs7O0ErQmtHSjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0UvQnhHRTs7O0ErQmtISjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7O0FBSUo7RUFDRTtFQUNBOzs7QUFJRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFL0IxSUU7OztBK0I4SUo7QUFBQTtBQUFBO0VBR0U7OztBQUdGO0FBQUE7RS9CM0lJO0VBQ0E7OztBK0IrSUo7QUFBQTtFL0JsSUk7RUFDQTs7O0ErQjhJRjtFQUNFOztBeEIzSEE7RXdCdUhKO0lBUUk7SUFDQTs7RUFHQTtJQUVFO0lBQ0E7O0VBRUE7SUFDRTtJQUNBOztFQUtBO0kvQjNLSjtJQUNBOztFK0I2S007QUFBQTtJQUdFOztFQUVGO0FBQUE7SUFHRTs7RUFJSjtJL0I1S0o7SUFDQTs7RStCOEtNO0FBQUE7SUFHRTs7RUFFRjtBQUFBO0lBR0U7Ozs7QUNwT1o7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUlGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFcEM0UEksV0FMSTtFb0NyUFI7RUFDQTtFQUNBO0VBQ0E7RWhDckJFO0VnQ3VCRjtFakIxQkksWWlCMkJKOztBakJ2Qkk7RWlCVU47SWpCVFE7OztBaUJ3Qk47RUFDRTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBOztBQUtKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFakJqREUsWWlCa0RGOztBakI5Q0U7RWlCcUNKO0lqQnBDTTs7O0FpQmdETjtFQUNFOztBQUdGO0VBQ0U7RUFDQTtFQUNBOzs7QUFJSjtFQUNFOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFaEM3REU7RUFDQTs7QWdDK0RBO0VoQ2hFQTtFQUNBOztBZ0NvRUY7RUFDRTs7QUFJRjtFaEM1REU7RUFDQTs7QWdDK0RFO0VoQ2hFRjtFQUNBOztBZ0NvRUE7RWhDckVBO0VBQ0E7OztBZ0MwRUo7RUFDRTs7O0FBU0E7RUFDRTtFQUNBO0VoQzlHQTs7QWdDaUhBO0VBQWdCOztBQUNoQjtFQUFlOztBQUliO0VoQ3RIRjs7QWdDNkhBO0VoQzdIQTs7O0FnQ3FJQTtFQUNFO0VBQ0E7OztBQzFKTjtFQUVFO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUNBO0VBQ0E7RUFDQTtFckMrUUksV0FMSTtFcUN4UVI7RUFDQTtFakNBRTs7O0FpQ01GO0VBQ0U7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNFOzs7QUNyQ0o7RUFFRTtFQUNBO0V0QzRSSSwyQkFMSTtFc0NyUlI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUdBO0VoQ3BCQTtFQUNBOzs7QWdDdUJGO0VBQ0U7RUFDQTtFQUNBO0V0Q2dRSSxXQUxJO0VzQ3pQUjtFQUNBO0VBQ0E7RUFDQTtFbkJwQkksWW1CcUJKOztBbkJqQkk7RW1CUU47SW5CUFE7OztBbUJrQk47RUFDRTtFQUNBO0VBRUE7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBLFNuQzJ1Q2dDO0VtQzF1Q2hDOztBQUdGO0VBRUU7RUFDQTtFbEJ0REYsa0JrQnVEdUI7RUFDckI7O0FBR0Y7RUFFRTtFQUNBO0VBQ0E7RUFDQTs7O0FBS0Y7RUFDRSxhbkM4c0NnQzs7QW1DenNDOUI7RWxDOUJGO0VBQ0E7O0FrQ21DRTtFbENsREY7RUFDQTs7O0FrQ2tFSjtFQ2xHRTtFQUNBO0V2QzBSSSwyQkFMSTtFdUNuUlI7OztBRG1HRjtFQ3RHRTtFQUNBO0V2QzBSSSwyQkFMSTtFdUNuUlI7OztBQ0ZGO0VBRUU7RUFDQTtFeEN1Ukksc0JBTEk7RXdDaFJSO0VBQ0E7RUFDQTtFQUdBO0VBQ0E7RXhDK1FJLFdBTEk7RXdDeFFSO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFcENKRTs7QW9DU0Y7RUFDRTs7O0FBS0o7RUFDRTtFQUNBOzs7QUNoQ0Y7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RXJDSEU7OztBcUNRSjtFQUVFOzs7QUFJRjtFQUNFLGF0QzZrQjRCO0VzQzVrQjVCOzs7QUFRRjtFQUNFLGV0Q3MrQzhCOztBc0NuK0M5QjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVFGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUpGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUpGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUpGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUpGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUpGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUpGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUpGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQzVERjtFQUNFO0lBQUssdUJ2Q3loRDJCOzs7QXVDcGhEcEM7QUFBQTtFQUdFO0UxQ2tSSSx5QkFMSTtFMEMzUVI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7RUFDQTtFQUNBO0UxQ3NRSSxXQUxJO0UwQy9QUjtFdENSRTs7O0FzQ2FKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFdkJ4QkksWXVCeUJKOztBdkJyQkk7RXVCWU47SXZCWFE7Ozs7QXVCdUJSO0V0QkFFO0VzQkVBOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFOzs7QUFJQTtFQUNFOztBQUdFO0VBSko7SUFLTTs7OztBQzNEUjtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUNBO0VBR0E7RUFDQTtFdkNYRTs7O0F1Q2VKO0VBQ0U7RUFDQTs7QUFFQTtFQUVFO0VBQ0E7OztBQVNKO0VBQ0U7RUFDQTtFQUNBOztBQUdBO0VBRUU7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOzs7QUFRSjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0V2Q3ZERTtFQUNBOztBdUMwREY7RXZDN0NFO0VBQ0E7O0F1Q2dERjtFQUVFO0VBQ0E7RUFDQTs7QUFJRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUlGO0VBQ0U7O0FBRUE7RUFDRTtFQUNBOzs7QUFhRjtFQUNFOztBQUdFO0V2Q3ZESjtFQVpBOztBdUN3RUk7RXZDeEVKO0VBWUE7O0F1Q2lFSTtFQUNFOztBQUdGO0VBQ0U7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7OztBaEN0RlI7RWdDOERBO0lBQ0U7O0VBR0U7SXZDdkRKO0lBWkE7O0V1Q3dFSTtJdkN4RUo7SUFZQTs7RXVDaUVJO0lBQ0U7O0VBR0Y7SUFDRTtJQUNBOztFQUVBO0lBQ0U7SUFDQTs7O0FoQ3RGUjtFZ0M4REE7SUFDRTs7RUFHRTtJdkN2REo7SUFaQTs7RXVDd0VJO0l2Q3hFSjtJQVlBOztFdUNpRUk7SUFDRTs7RUFHRjtJQUNFO0lBQ0E7O0VBRUE7SUFDRTtJQUNBOzs7QWhDdEZSO0VnQzhEQTtJQUNFOztFQUdFO0l2Q3ZESjtJQVpBOztFdUN3RUk7SXZDeEVKO0lBWUE7O0V1Q2lFSTtJQUNFOztFQUdGO0lBQ0U7SUFDQTs7RUFFQTtJQUNFO0lBQ0E7OztBaEN0RlI7RWdDOERBO0lBQ0U7O0VBR0U7SXZDdkRKO0lBWkE7O0V1Q3dFSTtJdkN4RUo7SUFZQTs7RXVDaUVJO0lBQ0U7O0VBR0Y7SUFDRTtJQUNBOztFQUVBO0lBQ0U7SUFDQTs7O0FoQ3RGUjtFZ0M4REE7SUFDRTs7RUFHRTtJdkN2REo7SUFaQTs7RXVDd0VJO0l2Q3hFSjtJQVlBOztFdUNpRUk7SUFDRTs7RUFHRjtJQUNFO0lBQ0E7O0VBRUE7SUFDRTtJQUNBOzs7QUFjWjtFdkNoSkk7O0F1Q21KRjtFQUNFOztBQUVBO0VBQ0U7OztBQWFKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVZGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVZGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVZGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVZGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVZGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVZGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQVZGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQzVMSjtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUNBLE96Q3FwRDJCO0V5Q3BwRDNCLFF6Q29wRDJCO0V5Q25wRDNCO0VBQ0E7RUFDQTtFQUNBO0V4Q0pFO0V3Q01GOztBQUdBO0VBQ0U7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBOztBQUdGO0VBRUU7RUFDQTtFQUNBOzs7QUFRSjtFQUhFOzs7QUFTRTtFQVRGOzs7QUNqREY7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0U3Q3lSSSxzQkFMSTtFNkNsUlI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7RUFDQTtFN0MyUUksV0FMSTtFNkNwUVI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0V6Q1JFOztBeUNXRjtFQUNFOztBQUdGO0VBQ0U7OztBQUlKO0VBQ0U7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7OztBQUlKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RXpDaENFO0VBQ0E7O0F5Q2tDRjtFQUNFO0VBQ0E7OztBQUlKO0VBQ0U7RUFDQTs7O0FDOURGO0VBRUU7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBR0E7OztBQU9GO0VBQ0U7RUFDQTtFQUNBO0VBRUE7O0FBR0E7RTNCNUNJLFkyQjZDRjtFQUNBLFczQ2s4Q2dDOztBZ0I1K0M5QjtFMkJ3Q0o7STNCdkNNOzs7QTJCMkNOO0VBQ0UsVzNDZzhDZ0M7O0EyQzU3Q2xDO0VBQ0UsVzNDNjdDZ0M7OztBMkN6N0NwQztFQUNFOztBQUVBO0VBQ0U7RUFDQTs7QUFHRjtFQUNFOzs7QUFJSjtFQUNFO0VBQ0E7RUFDQTs7O0FBSUY7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RTFDckZFO0UwQ3lGRjs7O0FBSUY7RUFFRTtFQUNBO0VBQ0E7RUNsSEE7RUFDQTtFQUNBO0VBQ0EsU0RrSDBCO0VDakgxQjtFQUNBO0VBQ0Esa0JEK0c0RDs7QUM1RzVEO0VBQVM7O0FBQ1Q7RUFBUyxTRDJHaUY7OztBQUs1RjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RTFDckdFO0VBQ0E7O0EwQ3VHRjtFQUNFO0VBQ0E7OztBQUtKO0VBQ0U7RUFDQTs7O0FBS0Y7RUFDRTtFQUdBO0VBQ0E7OztBQUlGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFMUN6SEU7RUFDQTs7QTBDOEhGO0VBQ0U7OztBbkMzR0E7RW1DaUhGO0lBQ0U7SUFDQTs7RUFJRjtJQUNFO0lBQ0E7SUFDQTs7RUFHRjtJQUNFOzs7QW5DOUhBO0VtQ21JRjtBQUFBO0lBRUU7OztBbkNySUE7RW1DMElGO0lBQ0U7OztBQVVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0UxQ3pNSjs7QTBDNk1FO0FBQUE7RTFDN01GOztBMENrTkU7RUFDRTs7O0FuQzFKSjtFbUN3SUE7SUFDRTtJQUNBO0lBQ0E7SUFDQTs7RUFFQTtJQUNFO0lBQ0E7STFDek1KOztFMEM2TUU7QUFBQTtJMUM3TUY7O0UwQ2tORTtJQUNFOzs7QW5DMUpKO0VtQ3dJQTtJQUNFO0lBQ0E7SUFDQTtJQUNBOztFQUVBO0lBQ0U7SUFDQTtJMUN6TUo7O0UwQzZNRTtBQUFBO0kxQzdNRjs7RTBDa05FO0lBQ0U7OztBbkMxSko7RW1Dd0lBO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7O0VBRUE7SUFDRTtJQUNBO0kxQ3pNSjs7RTBDNk1FO0FBQUE7STFDN01GOztFMENrTkU7SUFDRTs7O0FuQzFKSjtFbUN3SUE7SUFDRTtJQUNBO0lBQ0E7SUFDQTs7RUFFQTtJQUNFO0lBQ0E7STFDek1KOztFMEM2TUU7QUFBQTtJMUM3TUY7O0UwQ2tORTtJQUNFOzs7QW5DMUpKO0VtQ3dJQTtJQUNFO0lBQ0E7SUFDQTtJQUNBOztFQUVBO0lBQ0U7SUFDQTtJMUN6TUo7O0UwQzZNRTtBQUFBO0kxQzdNRjs7RTBDa05FO0lBQ0U7OztBRXJPUjtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RWhEd1JJLHdCQUxJO0VnRGpSUjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUNBO0VBQ0E7RUNsQkEsYTlDK2xCNEI7RThDN2xCNUI7RUFDQSxhOUN3bUI0QjtFOEN2bUI1QixhOUMrbUI0QjtFOEM5bUI1QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFakRnUkksV0FMSTtFZ0RoUVI7RUFDQTs7QUFFQTtFQUFTOztBQUVUO0VBQ0U7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUtOO0VBQ0U7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7OztBQUlKO0FBQ0E7RUFDRTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7OztBQUlKO0FBRUE7RUFDRTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTs7O0FBSUo7QUFDQTtFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTs7O0FBSUo7QUFrQkE7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0U1Q2pHRTs7O0E4Q25CSjtFQUVFO0VBQ0E7RWxENFJJLHdCQUxJO0VrRHJSUjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VsRG1SSSwrQkFMSTtFa0Q1UVI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUdBO0VBQ0E7RUFDQTtFRHpCQSxhOUMrbEI0QjtFOEM3bEI1QjtFQUNBLGE5Q3dtQjRCO0U4Q3ZtQjVCLGE5QyttQjRCO0U4QzltQjVCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VqRGdSSSxXQUxJO0VrRDFQUjtFQUNBO0VBQ0E7RUFDQTtFOUNoQkU7O0E4Q29CRjtFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBTUo7RUFDRTs7QUFFQTtFQUVFOztBQUdGO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7OztBQUtOO0FBRUU7RUFDRTtFQUNBO0VBQ0E7O0FBRUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOzs7QUFLTjtBQUdFO0VBQ0U7O0FBRUE7RUFFRTs7QUFHRjtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBOztBQUtKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBSUo7QUFFRTtFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFQUVFOztBQUdGO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7OztBQUtOO0FBa0JBO0VBQ0U7RUFDQTtFbEQyR0ksV0FMSTtFa0RwR1I7RUFDQTtFQUNBO0U5QzVKRTtFQUNBOztBOEM4SkY7RUFDRTs7O0FBSUo7RUFDRTtFQUNBOzs7QUNyTEY7RUFDRTs7O0FBR0Y7RUFDRTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7O0FDdEJBO0VBQ0U7RUFDQTtFQUNBOzs7QUR1Qko7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RWhDbEJJLFlnQ21CSjs7QWhDZkk7RWdDUU47SWhDUFE7Ozs7QWdDaUJSO0FBQUE7QUFBQTtFQUdFOzs7QUFHRjtBQUFBO0VBRUU7OztBQUdGO0FBQUE7RUFFRTs7O0FBU0E7RUFDRTtFQUNBO0VBQ0E7O0FBR0Y7QUFBQTtBQUFBO0VBR0U7RUFDQTs7QUFHRjtBQUFBO0VBRUU7RUFDQTtFaEM1REUsWWdDNkRGOztBaEN6REU7RWdDcURKO0FBQUE7SWhDcERNOzs7O0FnQ2lFUjtBQUFBO0VBRUU7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQSxPaERraERtQztFZ0RqaERuQztFQUNBLE9oRDFGUztFZ0QyRlQ7RUFDQTtFQUNBO0VBQ0EsU2hENmdEbUM7RWdCbm1EL0IsWWdDdUZKOztBaENuRkk7RWdDa0VOO0FBQUE7SWhDakVROzs7QWdDcUZOO0FBQUE7QUFBQTtFQUVFLE9oRHBHTztFZ0RxR1A7RUFDQTtFQUNBLFNoRHFnRGlDOzs7QWdEbGdEckM7RUFDRTs7O0FBR0Y7RUFDRTs7O0FBS0Y7QUFBQTtFQUVFO0VBQ0EsT2hEc2dEbUM7RWdEcmdEbkMsUWhEcWdEbUM7RWdEcGdEbkM7RUFDQTtFQUNBOzs7QUFHRjtFQUNFOzs7QUFFRjtFQUNFOzs7QUFRRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQSxjaERzOUNtQztFZ0RyOUNuQztFQUNBLGFoRG85Q21DOztBZ0RsOUNuQztFQUNFO0VBQ0E7RUFDQSxPaERvOUNpQztFZ0RuOUNqQyxRaERvOUNpQztFZ0RuOUNqQztFQUNBLGNoRG85Q2lDO0VnRG45Q2pDLGFoRG05Q2lDO0VnRGw5Q2pDO0VBQ0E7RUFDQSxrQmhEbEtPO0VnRG1LUDtFQUNBO0VBRUE7RUFDQTtFQUNBLFNoRDI4Q2lDO0VnQjNtRC9CLFlnQ2lLRjs7QWhDN0pFO0VnQzRJSjtJaEMzSU07OztBZ0MrSk47RUFDRSxTaER3OENpQzs7O0FnRC83Q3JDO0VBQ0U7RUFDQTtFQUNBLFFoRGs4Q21DO0VnRGo4Q25DO0VBQ0EsYWhEKzdDbUM7RWdEOTdDbkMsZ0JoRDg3Q21DO0VnRDc3Q25DLE9oRDdMUztFZ0Q4TFQ7OztBQU1BO0FBQUE7RUFFRSxRaERtOENpQzs7QWdEaDhDbkM7RUFDRSxrQmhEaE1POztBZ0RtTVQ7RUFDRSxPaERwTU87OztBZ0QwTFQ7QUFBQTtBQUFBO0VBRUUsUWhEbThDaUM7O0FnRGg4Q25DO0VBQ0Usa0JoRGhNTzs7QWdEbU1UO0VBQ0UsT2hEcE1POzs7QWtEZFg7QUFBQTtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTs7O0FBSUY7RUFDRTtJQUFLOzs7QUFJUDtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUdBO0VBQ0E7OztBQUdGO0VBRUU7RUFDQTtFQUNBOzs7QUFTRjtFQUNFO0lBQ0U7O0VBRUY7SUFDRTtJQUNBOzs7QUFLSjtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFHQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7OztBQUlBO0VBQ0U7QUFBQTtJQUVFOzs7QUMvRU47RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBM0M2REU7RTJDNUNGO0lBRUk7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJbkM1QkEsWW1DOEJBOzs7QW5DMUJBO0VtQ1lKO0luQ1hNOzs7QVJ1REo7RTJDNUJFO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0VBR0Y7SUFDRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUVFOztFQUdGO0lBR0U7OztBM0M1Qko7RTJDL0JGO0lBaUVNO0lBQ0E7SUFDQTs7RUFFQTtJQUNFOztFQUdGO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFFQTs7OztBM0NuQ047RTJDNUNGO0lBRUk7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJbkM1QkEsWW1DOEJBOzs7QW5DMUJBO0VtQ1lKO0luQ1hNOzs7QVJ1REo7RTJDNUJFO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0VBR0Y7SUFDRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUVFOztFQUdGO0lBR0U7OztBM0M1Qko7RTJDL0JGO0lBaUVNO0lBQ0E7SUFDQTs7RUFFQTtJQUNFOztFQUdGO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFFQTs7OztBM0NuQ047RTJDNUNGO0lBRUk7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJbkM1QkEsWW1DOEJBOzs7QW5DMUJBO0VtQ1lKO0luQ1hNOzs7QVJ1REo7RTJDNUJFO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0VBR0Y7SUFDRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUVFOztFQUdGO0lBR0U7OztBM0M1Qko7RTJDL0JGO0lBaUVNO0lBQ0E7SUFDQTs7RUFFQTtJQUNFOztFQUdGO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFFQTs7OztBM0NuQ047RTJDNUNGO0lBRUk7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJbkM1QkEsWW1DOEJBOzs7QW5DMUJBO0VtQ1lKO0luQ1hNOzs7QVJ1REo7RTJDNUJFO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0VBR0Y7SUFDRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUVFOztFQUdGO0lBR0U7OztBM0M1Qko7RTJDL0JGO0lBaUVNO0lBQ0E7SUFDQTs7RUFFQTtJQUNFOztFQUdGO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFFQTs7OztBM0NuQ047RTJDNUNGO0lBRUk7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJbkM1QkEsWW1DOEJBOzs7QW5DMUJBO0VtQ1lKO0luQ1hNOzs7QVJ1REo7RTJDNUJFO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0VBR0Y7SUFDRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7RUFHRjtJQUVFOztFQUdGO0lBR0U7OztBM0M1Qko7RTJDL0JGO0lBaUVNO0lBQ0E7SUFDQTs7RUFFQTtJQUNFOztFQUdGO0lBQ0U7SUFDQTtJQUNBO0lBQ0E7SUFFQTs7OztBQS9FUjtFQUVJO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RW5DNUJBLFltQzhCQTs7QW5DMUJBO0VtQ1lKO0luQ1hNOzs7QW1DMkJGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHRjtFQUVFOztBQUdGO0VBR0U7OztBQTJCUjtFUHBIRTtFQUNBO0VBQ0E7RUFDQSxTNUMwbUNrQztFNEN6bUNsQztFQUNBO0VBQ0Esa0I1Q1VTOztBNENQVDtFQUFTOztBQUNUO0VBQVMsUzVDbStDeUI7OztBbURyM0NwQztFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7OztBQUlKO0VBQ0U7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7OztBQzdJRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxTcERnekNrQzs7QW9EOXlDbEM7RUFDRTtFQUNBOzs7QUFLSjtFQUNFOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFOzs7QUFLQTtFQUNFOzs7QUFJSjtFQUNFO0lBQ0UsU3BEbXhDZ0M7OztBb0Qvd0NwQztFQUNFO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtJQUNFOzs7QUg5Q0Y7RUFDRTtFQUNBO0VBQ0E7OztBSUhGO0VBQ0U7RUFDQTs7O0FBRkY7RUFDRTtFQUNBOzs7QUFGRjtFQUNFO0VBQ0E7OztBQUZGO0VBQ0U7RUFDQTs7O0FBRkY7RUFDRTtFQUNBOzs7QUFGRjtFQUNFO0VBQ0E7OztBQUZGO0VBQ0U7RUFDQTs7O0FBRkY7RUFDRTtFQUNBOzs7QUNGRjtFQUNFO0VBQ0E7O0FBR0U7RUFHRTtFQUNBOzs7QUFUTjtFQUNFO0VBQ0E7O0FBR0U7RUFHRTtFQUNBOzs7QUFUTjtFQUNFO0VBQ0E7O0FBR0U7RUFHRTtFQUNBOzs7QUFUTjtFQUNFO0VBQ0E7O0FBR0U7RUFHRTtFQUNBOzs7QUFUTjtFQUNFO0VBQ0E7O0FBR0U7RUFHRTtFQUNBOzs7QUFUTjtFQUNFO0VBQ0E7O0FBR0U7RUFHRTtFQUNBOzs7QUFUTjtFQUNFO0VBQ0E7O0FBR0U7RUFHRTtFQUNBOzs7QUFUTjtFQUNFO0VBQ0E7O0FBR0U7RUFHRTtFQUNBOzs7QUFPUjtFQUNFO0VBQ0E7O0FBR0U7RUFFRTtFQUNBOzs7QUMxQk47RUFDRTtFQUVBOzs7QUNIRjtFQUNFO0VBQ0EsS3hENmM0QjtFd0Q1YzVCO0VBQ0E7RUFDQSx1QnhEMmM0QjtFd0QxYzVCOztBQUVBO0VBQ0U7RUFDQSxPeER1YzBCO0V3RHRjMUIsUXhEc2MwQjtFd0RyYzFCO0V4Q0lFLFl3Q0hGOztBeENPRTtFd0NaSjtJeENhTTs7OztBd0NESjtFQUNFOzs7QUNuQk47RUFDRTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBOztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FBS0Y7RUFDRTs7O0FBREY7RUFDRTs7O0FBREY7RUFDRTs7O0FBREY7RUFDRTs7O0FDckJKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQSxTMUR1bUNrQzs7O0EwRHBtQ3BDO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQSxTMUQrbENrQzs7O0EwRHZsQ2hDO0VBQ0U7RUFDQTtFQUNBLFMxRG1sQzhCOzs7QTBEaGxDaEM7RUFDRTtFQUNBO0VBQ0EsUzFENmtDOEI7OztBUTlpQ2hDO0VrRHhDQTtJQUNFO0lBQ0E7SUFDQSxTMURtbEM4Qjs7RTBEaGxDaEM7SUFDRTtJQUNBO0lBQ0EsUzFENmtDOEI7OztBUTlpQ2hDO0VrRHhDQTtJQUNFO0lBQ0E7SUFDQSxTMURtbEM4Qjs7RTBEaGxDaEM7SUFDRTtJQUNBO0lBQ0EsUzFENmtDOEI7OztBUTlpQ2hDO0VrRHhDQTtJQUNFO0lBQ0E7SUFDQSxTMURtbEM4Qjs7RTBEaGxDaEM7SUFDRTtJQUNBO0lBQ0EsUzFENmtDOEI7OztBUTlpQ2hDO0VrRHhDQTtJQUNFO0lBQ0E7SUFDQSxTMURtbEM4Qjs7RTBEaGxDaEM7SUFDRTtJQUNBO0lBQ0EsUzFENmtDOEI7OztBUTlpQ2hDO0VrRHhDQTtJQUNFO0lBQ0E7SUFDQSxTMURtbEM4Qjs7RTBEaGxDaEM7SUFDRTtJQUNBO0lBQ0EsUzFENmtDOEI7OztBMkQ1bUNwQztFQUNFO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOzs7QUNSRjtBQUFBO0VDSUU7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFHQTtBQUFBO0VBQ0U7OztBQ2RGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFM5RGdjc0M7RThEL2J0Qzs7O0FDUko7RUNBRTtFQUNBO0VBQ0E7OztBQ05GO0VBQ0U7RUFDQTtFQUNBLE9qRWlzQjRCO0VpRWhzQjVCO0VBQ0E7RUFDQSxTakUyckI0Qjs7O0FrRS9uQnRCO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQWpCSjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFTRjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQWpCSjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFTRjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBUEo7RUFPSTs7O0FBckJKO0FBY0E7RUFPSTtFQUFBOzs7QUFtQko7QUExQkE7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBakJKO0VBQ0U7OztBQURGO0VBQ0U7OztBQURGO0VBQ0U7OztBQURGO0VBQ0U7OztBQVNGO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQVBKO0VBT0k7OztBQWpCSjtFQUNFOzs7QUFJQTtFQUNFOzs7QUFOSjtFQUNFOzs7QUFJQTtFQUNFOzs7QUFOSjtFQUNFOzs7QUFJQTtFQUNFOzs7QUFOSjtFQUNFOzs7QUFJQTtFQUNFOzs7QUFOSjtFQUNFOzs7QUFJQTtFQUNFOzs7QUFJSjtFQU9JOzs7QUFLRjtFQU9JOzs7QUFuQk47RUFPSTs7O0FBS0Y7RUFPSTs7O0FBbkJOO0VBT0k7OztBQUtGO0VBT0k7OztBQW5CTjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFqQko7RUFDRTs7O0FBSUE7RUFDRTs7O0FBTko7RUFDRTs7O0FBSUE7RUFDRTs7O0FBTko7RUFDRTs7O0FBSUE7RUFDRTs7O0FBTko7RUFDRTs7O0FBSUE7RUFDRTs7O0FBTko7RUFDRTs7O0FBSUE7RUFDRTs7O0FBTko7RUFDRTs7O0FBSUE7RUFDRTs7O0FBSUo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQVBKO0VBSVE7RUFHSjs7O0FBUEo7RUFJUTtFQUdKOzs7QUFQSjtFQUlRO0VBR0o7OztBQWpCSjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFERjtFQUNFOzs7QUFTRjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JO0VBQUE7OztBQVBKO0VBT0k7RUFBQTs7O0FBUEo7RUFPSTtFQUFBOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QUFQSjtFQU9JOzs7QTFEVlI7RTBER0k7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOzs7QTFEVlI7RTBER0k7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOzs7QTFEVlI7RTBER0k7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOzs7QTFEVlI7RTBER0k7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOzs7QTFEVlI7RTBER0k7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7SUFBQTs7RUFQSjtJQU9JO0lBQUE7O0VBUEo7SUFPSTtJQUFBOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOzs7QUN0RFo7RUQrQ1E7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7O0FDbkNaO0VENEJRO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSTs7RUFQSjtJQU9JOztFQVBKO0lBT0k7O0VBUEo7SUFPSSIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBic0Jhbm5lcigkZmlsZSkge1xuICAvKiFcbiAgICogQm9vdHN0cmFwICN7JGZpbGV9IHY1LjMuMyAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgICogQ29weXJpZ2h0IDIwMTEtMjAyNCBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICAqL1xufVxuIiwiOnJvb3QsXG5bZGF0YS1icy10aGVtZT1cImxpZ2h0XCJdIHtcbiAgLy8gTm90ZTogQ3VzdG9tIHZhcmlhYmxlIHZhbHVlcyBvbmx5IHN1cHBvcnQgU2Fzc1NjcmlwdCBpbnNpZGUgYCN7fWAuXG5cbiAgLy8gQ29sb3JzXG4gIC8vXG4gIC8vIEdlbmVyYXRlIHBhbGV0dGVzIGZvciBmdWxsIGNvbG9ycywgZ3JheXMsIGFuZCB0aGVtZSBjb2xvcnMuXG5cbiAgQGVhY2ggJGNvbG9yLCAkdmFsdWUgaW4gJGNvbG9ycyB7XG4gICAgLS0jeyRwcmVmaXh9I3skY29sb3J9OiAjeyR2YWx1ZX07XG4gIH1cblxuICBAZWFjaCAkY29sb3IsICR2YWx1ZSBpbiAkZ3JheXMge1xuICAgIC0tI3skcHJlZml4fWdyYXktI3skY29sb3J9OiAjeyR2YWx1ZX07XG4gIH1cblxuICBAZWFjaCAkY29sb3IsICR2YWx1ZSBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAtLSN7JHByZWZpeH0jeyRjb2xvcn06ICN7JHZhbHVlfTtcbiAgfVxuXG4gIEBlYWNoICRjb2xvciwgJHZhbHVlIGluICR0aGVtZS1jb2xvcnMtcmdiIHtcbiAgICAtLSN7JHByZWZpeH0jeyRjb2xvcn0tcmdiOiAjeyR2YWx1ZX07XG4gIH1cblxuICBAZWFjaCAkY29sb3IsICR2YWx1ZSBpbiAkdGhlbWUtY29sb3JzLXRleHQge1xuICAgIC0tI3skcHJlZml4fSN7JGNvbG9yfS10ZXh0LWVtcGhhc2lzOiAjeyR2YWx1ZX07XG4gIH1cblxuICBAZWFjaCAkY29sb3IsICR2YWx1ZSBpbiAkdGhlbWUtY29sb3JzLWJnLXN1YnRsZSB7XG4gICAgLS0jeyRwcmVmaXh9I3skY29sb3J9LWJnLXN1YnRsZTogI3skdmFsdWV9O1xuICB9XG5cbiAgQGVhY2ggJGNvbG9yLCAkdmFsdWUgaW4gJHRoZW1lLWNvbG9ycy1ib3JkZXItc3VidGxlIHtcbiAgICAtLSN7JHByZWZpeH0jeyRjb2xvcn0tYm9yZGVyLXN1YnRsZTogI3skdmFsdWV9O1xuICB9XG5cbiAgLS0jeyRwcmVmaXh9d2hpdGUtcmdiOiAje3RvLXJnYigkd2hpdGUpfTtcbiAgLS0jeyRwcmVmaXh9YmxhY2stcmdiOiAje3RvLXJnYigkYmxhY2spfTtcblxuICAvLyBGb250c1xuXG4gIC8vIE5vdGU6IFVzZSBgaW5zcGVjdGAgZm9yIGxpc3RzIHNvIHRoYXQgcXVvdGVkIGl0ZW1zIGtlZXAgdGhlIHF1b3Rlcy5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL3Nhc3MvaXNzdWVzLzIzODMjaXNzdWVjb21tZW50LTMzNjM0OTE3MlxuICAtLSN7JHByZWZpeH1mb250LXNhbnMtc2VyaWY6ICN7aW5zcGVjdCgkZm9udC1mYW1pbHktc2Fucy1zZXJpZil9O1xuICAtLSN7JHByZWZpeH1mb250LW1vbm9zcGFjZTogI3tpbnNwZWN0KCRmb250LWZhbWlseS1tb25vc3BhY2UpfTtcbiAgLS0jeyRwcmVmaXh9Z3JhZGllbnQ6ICN7JGdyYWRpZW50fTtcblxuICAvLyBSb290IGFuZCBib2R5XG4gIC8vIHNjc3MtZG9jcy1zdGFydCByb290LWJvZHktdmFyaWFibGVzXG4gIEBpZiAkZm9udC1zaXplLXJvb3QgIT0gbnVsbCB7XG4gICAgLS0jeyRwcmVmaXh9cm9vdC1mb250LXNpemU6ICN7JGZvbnQtc2l6ZS1yb290fTtcbiAgfVxuICAtLSN7JHByZWZpeH1ib2R5LWZvbnQtZmFtaWx5OiAje2luc3BlY3QoJGZvbnQtZmFtaWx5LWJhc2UpfTtcbiAgQGluY2x1ZGUgcmZzKCRmb250LXNpemUtYmFzZSwgLS0jeyRwcmVmaXh9Ym9keS1mb250LXNpemUpO1xuICAtLSN7JHByZWZpeH1ib2R5LWZvbnQtd2VpZ2h0OiAjeyRmb250LXdlaWdodC1iYXNlfTtcbiAgLS0jeyRwcmVmaXh9Ym9keS1saW5lLWhlaWdodDogI3skbGluZS1oZWlnaHQtYmFzZX07XG4gIEBpZiAkYm9keS10ZXh0LWFsaWduICE9IG51bGwge1xuICAgIC0tI3skcHJlZml4fWJvZHktdGV4dC1hbGlnbjogI3skYm9keS10ZXh0LWFsaWdufTtcbiAgfVxuXG4gIC0tI3skcHJlZml4fWJvZHktY29sb3I6ICN7JGJvZHktY29sb3J9O1xuICAtLSN7JHByZWZpeH1ib2R5LWNvbG9yLXJnYjogI3t0by1yZ2IoJGJvZHktY29sb3IpfTtcbiAgLS0jeyRwcmVmaXh9Ym9keS1iZzogI3skYm9keS1iZ307XG4gIC0tI3skcHJlZml4fWJvZHktYmctcmdiOiAje3RvLXJnYigkYm9keS1iZyl9O1xuXG4gIC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yOiAjeyRib2R5LWVtcGhhc2lzLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9ZW1waGFzaXMtY29sb3ItcmdiOiAje3RvLXJnYigkYm9keS1lbXBoYXNpcy1jb2xvcil9O1xuXG4gIC0tI3skcHJlZml4fXNlY29uZGFyeS1jb2xvcjogI3skYm9keS1zZWNvbmRhcnktY29sb3J9O1xuICAtLSN7JHByZWZpeH1zZWNvbmRhcnktY29sb3ItcmdiOiAje3RvLXJnYigkYm9keS1zZWNvbmRhcnktY29sb3IpfTtcbiAgLS0jeyRwcmVmaXh9c2Vjb25kYXJ5LWJnOiAjeyRib2R5LXNlY29uZGFyeS1iZ307XG4gIC0tI3skcHJlZml4fXNlY29uZGFyeS1iZy1yZ2I6ICN7dG8tcmdiKCRib2R5LXNlY29uZGFyeS1iZyl9O1xuXG4gIC0tI3skcHJlZml4fXRlcnRpYXJ5LWNvbG9yOiAjeyRib2R5LXRlcnRpYXJ5LWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9dGVydGlhcnktY29sb3ItcmdiOiAje3RvLXJnYigkYm9keS10ZXJ0aWFyeS1jb2xvcil9O1xuICAtLSN7JHByZWZpeH10ZXJ0aWFyeS1iZzogI3skYm9keS10ZXJ0aWFyeS1iZ307XG4gIC0tI3skcHJlZml4fXRlcnRpYXJ5LWJnLXJnYjogI3t0by1yZ2IoJGJvZHktdGVydGlhcnktYmcpfTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCByb290LWJvZHktdmFyaWFibGVzXG5cbiAgLS0jeyRwcmVmaXh9aGVhZGluZy1jb2xvcjogI3skaGVhZGluZ3MtY29sb3J9O1xuXG4gIC0tI3skcHJlZml4fWxpbmstY29sb3I6ICN7JGxpbmstY29sb3J9O1xuICAtLSN7JHByZWZpeH1saW5rLWNvbG9yLXJnYjogI3t0by1yZ2IoJGxpbmstY29sb3IpfTtcbiAgLS0jeyRwcmVmaXh9bGluay1kZWNvcmF0aW9uOiAjeyRsaW5rLWRlY29yYXRpb259O1xuXG4gIC0tI3skcHJlZml4fWxpbmstaG92ZXItY29sb3I6ICN7JGxpbmstaG92ZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1saW5rLWhvdmVyLWNvbG9yLXJnYjogI3t0by1yZ2IoJGxpbmstaG92ZXItY29sb3IpfTtcblxuICBAaWYgJGxpbmstaG92ZXItZGVjb3JhdGlvbiAhPSBudWxsIHtcbiAgICAtLSN7JHByZWZpeH1saW5rLWhvdmVyLWRlY29yYXRpb246ICN7JGxpbmstaG92ZXItZGVjb3JhdGlvbn07XG4gIH1cblxuICAtLSN7JHByZWZpeH1jb2RlLWNvbG9yOiAjeyRjb2RlLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9aGlnaGxpZ2h0LWNvbG9yOiAjeyRtYXJrLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9aGlnaGxpZ2h0LWJnOiAjeyRtYXJrLWJnfTtcblxuICAvLyBzY3NzLWRvY3Mtc3RhcnQgcm9vdC1ib3JkZXItdmFyXG4gIC0tI3skcHJlZml4fWJvcmRlci13aWR0aDogI3skYm9yZGVyLXdpZHRofTtcbiAgLS0jeyRwcmVmaXh9Ym9yZGVyLXN0eWxlOiAjeyRib3JkZXItc3R5bGV9O1xuICAtLSN7JHByZWZpeH1ib3JkZXItY29sb3I6ICN7JGJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fWJvcmRlci1jb2xvci10cmFuc2x1Y2VudDogI3skYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50fTtcblxuICAtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzOiAjeyRib3JkZXItcmFkaXVzfTtcbiAgLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cy1zbTogI3skYm9yZGVyLXJhZGl1cy1zbX07XG4gIC0tI3skcHJlZml4fWJvcmRlci1yYWRpdXMtbGc6ICN7JGJvcmRlci1yYWRpdXMtbGd9O1xuICAtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzLXhsOiAjeyRib3JkZXItcmFkaXVzLXhsfTtcbiAgLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cy14eGw6ICN7JGJvcmRlci1yYWRpdXMteHhsfTtcbiAgLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cy0yeGw6IHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzLXh4bCk7IC8vIERlcHJlY2F0ZWQgaW4gdjUuMy4wIGZvciBjb25zaXN0ZW5jeVxuICAtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzLXBpbGw6ICN7JGJvcmRlci1yYWRpdXMtcGlsbH07XG4gIC8vIHNjc3MtZG9jcy1lbmQgcm9vdC1ib3JkZXItdmFyXG5cbiAgLS0jeyRwcmVmaXh9Ym94LXNoYWRvdzogI3skYm94LXNoYWRvd307XG4gIC0tI3skcHJlZml4fWJveC1zaGFkb3ctc206ICN7JGJveC1zaGFkb3ctc219O1xuICAtLSN7JHByZWZpeH1ib3gtc2hhZG93LWxnOiAjeyRib3gtc2hhZG93LWxnfTtcbiAgLS0jeyRwcmVmaXh9Ym94LXNoYWRvdy1pbnNldDogI3skYm94LXNoYWRvdy1pbnNldH07XG5cbiAgLy8gRm9jdXMgc3R5bGVzXG4gIC8vIHNjc3MtZG9jcy1zdGFydCByb290LWZvY3VzLXZhcmlhYmxlc1xuICAtLSN7JHByZWZpeH1mb2N1cy1yaW5nLXdpZHRoOiAjeyRmb2N1cy1yaW5nLXdpZHRofTtcbiAgLS0jeyRwcmVmaXh9Zm9jdXMtcmluZy1vcGFjaXR5OiAjeyRmb2N1cy1yaW5nLW9wYWNpdHl9O1xuICAtLSN7JHByZWZpeH1mb2N1cy1yaW5nLWNvbG9yOiAjeyRmb2N1cy1yaW5nLWNvbG9yfTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCByb290LWZvY3VzLXZhcmlhYmxlc1xuXG4gIC8vIHNjc3MtZG9jcy1zdGFydCByb290LWZvcm0tdmFsaWRhdGlvbi12YXJpYWJsZXNcbiAgLS0jeyRwcmVmaXh9Zm9ybS12YWxpZC1jb2xvcjogI3skZm9ybS12YWxpZC1jb2xvcn07XG4gIC0tI3skcHJlZml4fWZvcm0tdmFsaWQtYm9yZGVyLWNvbG9yOiAjeyRmb3JtLXZhbGlkLWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fWZvcm0taW52YWxpZC1jb2xvcjogI3skZm9ybS1pbnZhbGlkLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9Zm9ybS1pbnZhbGlkLWJvcmRlci1jb2xvcjogI3skZm9ybS1pbnZhbGlkLWJvcmRlci1jb2xvcn07XG4gIC8vIHNjc3MtZG9jcy1lbmQgcm9vdC1mb3JtLXZhbGlkYXRpb24tdmFyaWFibGVzXG59XG5cbkBpZiAkZW5hYmxlLWRhcmstbW9kZSB7XG4gIEBpbmNsdWRlIGNvbG9yLW1vZGUoZGFyaywgdHJ1ZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcblxuICAgIC8vIHNjc3MtZG9jcy1zdGFydCByb290LWRhcmstbW9kZS12YXJzXG4gICAgLS0jeyRwcmVmaXh9Ym9keS1jb2xvcjogI3skYm9keS1jb2xvci1kYXJrfTtcbiAgICAtLSN7JHByZWZpeH1ib2R5LWNvbG9yLXJnYjogI3t0by1yZ2IoJGJvZHktY29sb3ItZGFyayl9O1xuICAgIC0tI3skcHJlZml4fWJvZHktYmc6ICN7JGJvZHktYmctZGFya307XG4gICAgLS0jeyRwcmVmaXh9Ym9keS1iZy1yZ2I6ICN7dG8tcmdiKCRib2R5LWJnLWRhcmspfTtcblxuICAgIC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yOiAjeyRib2R5LWVtcGhhc2lzLWNvbG9yLWRhcmt9O1xuICAgIC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yLXJnYjogI3t0by1yZ2IoJGJvZHktZW1waGFzaXMtY29sb3ItZGFyayl9O1xuXG4gICAgLS0jeyRwcmVmaXh9c2Vjb25kYXJ5LWNvbG9yOiAjeyRib2R5LXNlY29uZGFyeS1jb2xvci1kYXJrfTtcbiAgICAtLSN7JHByZWZpeH1zZWNvbmRhcnktY29sb3ItcmdiOiAje3RvLXJnYigkYm9keS1zZWNvbmRhcnktY29sb3ItZGFyayl9O1xuICAgIC0tI3skcHJlZml4fXNlY29uZGFyeS1iZzogI3skYm9keS1zZWNvbmRhcnktYmctZGFya307XG4gICAgLS0jeyRwcmVmaXh9c2Vjb25kYXJ5LWJnLXJnYjogI3t0by1yZ2IoJGJvZHktc2Vjb25kYXJ5LWJnLWRhcmspfTtcblxuICAgIC0tI3skcHJlZml4fXRlcnRpYXJ5LWNvbG9yOiAjeyRib2R5LXRlcnRpYXJ5LWNvbG9yLWRhcmt9O1xuICAgIC0tI3skcHJlZml4fXRlcnRpYXJ5LWNvbG9yLXJnYjogI3t0by1yZ2IoJGJvZHktdGVydGlhcnktY29sb3ItZGFyayl9O1xuICAgIC0tI3skcHJlZml4fXRlcnRpYXJ5LWJnOiAjeyRib2R5LXRlcnRpYXJ5LWJnLWRhcmt9O1xuICAgIC0tI3skcHJlZml4fXRlcnRpYXJ5LWJnLXJnYjogI3t0by1yZ2IoJGJvZHktdGVydGlhcnktYmctZGFyayl9O1xuXG4gICAgQGVhY2ggJGNvbG9yLCAkdmFsdWUgaW4gJHRoZW1lLWNvbG9ycy10ZXh0LWRhcmsge1xuICAgICAgLS0jeyRwcmVmaXh9I3skY29sb3J9LXRleHQtZW1waGFzaXM6ICN7JHZhbHVlfTtcbiAgICB9XG5cbiAgICBAZWFjaCAkY29sb3IsICR2YWx1ZSBpbiAkdGhlbWUtY29sb3JzLWJnLXN1YnRsZS1kYXJrIHtcbiAgICAgIC0tI3skcHJlZml4fSN7JGNvbG9yfS1iZy1zdWJ0bGU6ICN7JHZhbHVlfTtcbiAgICB9XG5cbiAgICBAZWFjaCAkY29sb3IsICR2YWx1ZSBpbiAkdGhlbWUtY29sb3JzLWJvcmRlci1zdWJ0bGUtZGFyayB7XG4gICAgICAtLSN7JHByZWZpeH0jeyRjb2xvcn0tYm9yZGVyLXN1YnRsZTogI3skdmFsdWV9O1xuICAgIH1cblxuICAgIC0tI3skcHJlZml4fWhlYWRpbmctY29sb3I6ICN7JGhlYWRpbmdzLWNvbG9yLWRhcmt9O1xuXG4gICAgLS0jeyRwcmVmaXh9bGluay1jb2xvcjogI3skbGluay1jb2xvci1kYXJrfTtcbiAgICAtLSN7JHByZWZpeH1saW5rLWhvdmVyLWNvbG9yOiAjeyRsaW5rLWhvdmVyLWNvbG9yLWRhcmt9O1xuICAgIC0tI3skcHJlZml4fWxpbmstY29sb3ItcmdiOiAje3RvLXJnYigkbGluay1jb2xvci1kYXJrKX07XG4gICAgLS0jeyRwcmVmaXh9bGluay1ob3Zlci1jb2xvci1yZ2I6ICN7dG8tcmdiKCRsaW5rLWhvdmVyLWNvbG9yLWRhcmspfTtcblxuICAgIC0tI3skcHJlZml4fWNvZGUtY29sb3I6ICN7JGNvZGUtY29sb3ItZGFya307XG4gICAgLS0jeyRwcmVmaXh9aGlnaGxpZ2h0LWNvbG9yOiAjeyRtYXJrLWNvbG9yLWRhcmt9O1xuICAgIC0tI3skcHJlZml4fWhpZ2hsaWdodC1iZzogI3skbWFyay1iZy1kYXJrfTtcblxuICAgIC0tI3skcHJlZml4fWJvcmRlci1jb2xvcjogI3skYm9yZGVyLWNvbG9yLWRhcmt9O1xuICAgIC0tI3skcHJlZml4fWJvcmRlci1jb2xvci10cmFuc2x1Y2VudDogI3skYm9yZGVyLWNvbG9yLXRyYW5zbHVjZW50LWRhcmt9O1xuXG4gICAgLS0jeyRwcmVmaXh9Zm9ybS12YWxpZC1jb2xvcjogI3skZm9ybS12YWxpZC1jb2xvci1kYXJrfTtcbiAgICAtLSN7JHByZWZpeH1mb3JtLXZhbGlkLWJvcmRlci1jb2xvcjogI3skZm9ybS12YWxpZC1ib3JkZXItY29sb3ItZGFya307XG4gICAgLS0jeyRwcmVmaXh9Zm9ybS1pbnZhbGlkLWNvbG9yOiAjeyRmb3JtLWludmFsaWQtY29sb3ItZGFya307XG4gICAgLS0jeyRwcmVmaXh9Zm9ybS1pbnZhbGlkLWJvcmRlci1jb2xvcjogI3skZm9ybS1pbnZhbGlkLWJvcmRlci1jb2xvci1kYXJrfTtcbiAgICAvLyBzY3NzLWRvY3MtZW5kIHJvb3QtZGFyay1tb2RlLXZhcnNcbiAgfVxufVxuIiwiLy8gc3R5bGVsaW50LWRpc2FibGUgc2Nzcy9kaW1lbnNpb24tbm8tbm9uLW51bWVyaWMtdmFsdWVzXG5cbi8vIFNDU1MgUkZTIG1peGluXG4vL1xuLy8gQXV0b21hdGVkIHJlc3BvbnNpdmUgdmFsdWVzIGZvciBmb250IHNpemVzLCBwYWRkaW5ncywgbWFyZ2lucyBhbmQgbXVjaCBtb3JlXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9yZnMvYmxvYi9tYWluL0xJQ0VOU0UpXG5cbi8vIENvbmZpZ3VyYXRpb25cblxuLy8gQmFzZSB2YWx1ZVxuJHJmcy1iYXNlLXZhbHVlOiAxLjI1cmVtICFkZWZhdWx0O1xuJHJmcy11bml0OiByZW0gIWRlZmF1bHQ7XG5cbkBpZiAkcmZzLXVuaXQgIT0gcmVtIGFuZCAkcmZzLXVuaXQgIT0gcHgge1xuICBAZXJyb3IgXCJgI3skcmZzLXVuaXR9YCBpcyBub3QgYSB2YWxpZCB1bml0IGZvciAkcmZzLXVuaXQuIFVzZSBgcHhgIG9yIGByZW1gLlwiO1xufVxuXG4vLyBCcmVha3BvaW50IGF0IHdoZXJlIHZhbHVlcyBzdGFydCBkZWNyZWFzaW5nIGlmIHNjcmVlbiB3aWR0aCBpcyBzbWFsbGVyXG4kcmZzLWJyZWFrcG9pbnQ6IDEyMDBweCAhZGVmYXVsdDtcbiRyZnMtYnJlYWtwb2ludC11bml0OiBweCAhZGVmYXVsdDtcblxuQGlmICRyZnMtYnJlYWtwb2ludC11bml0ICE9IHB4IGFuZCAkcmZzLWJyZWFrcG9pbnQtdW5pdCAhPSBlbSBhbmQgJHJmcy1icmVha3BvaW50LXVuaXQgIT0gcmVtIHtcbiAgQGVycm9yIFwiYCN7JHJmcy1icmVha3BvaW50LXVuaXR9YCBpcyBub3QgYSB2YWxpZCB1bml0IGZvciAkcmZzLWJyZWFrcG9pbnQtdW5pdC4gVXNlIGBweGAsIGBlbWAgb3IgYHJlbWAuXCI7XG59XG5cbi8vIFJlc2l6ZSB2YWx1ZXMgYmFzZWQgb24gc2NyZWVuIGhlaWdodCBhbmQgd2lkdGhcbiRyZnMtdHdvLWRpbWVuc2lvbmFsOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gRmFjdG9yIG9mIGRlY3JlYXNlXG4kcmZzLWZhY3RvcjogMTAgIWRlZmF1bHQ7XG5cbkBpZiB0eXBlLW9mKCRyZnMtZmFjdG9yKSAhPSBudW1iZXIgb3IgJHJmcy1mYWN0b3IgPD0gMSB7XG4gIEBlcnJvciBcImAjeyRyZnMtZmFjdG9yfWAgaXMgbm90IGEgdmFsaWQgICRyZnMtZmFjdG9yLCBpdCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAxLlwiO1xufVxuXG4vLyBNb2RlLiBQb3NzaWJpbGl0aWVzOiBcIm1pbi1tZWRpYS1xdWVyeVwiLCBcIm1heC1tZWRpYS1xdWVyeVwiXG4kcmZzLW1vZGU6IG1pbi1tZWRpYS1xdWVyeSAhZGVmYXVsdDtcblxuLy8gR2VuZXJhdGUgZW5hYmxlIG9yIGRpc2FibGUgY2xhc3Nlcy4gUG9zc2liaWxpdGllczogZmFsc2UsIFwiZW5hYmxlXCIgb3IgXCJkaXNhYmxlXCJcbiRyZnMtY2xhc3M6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyAxIHJlbSA9ICRyZnMtcmVtLXZhbHVlIHB4XG4kcmZzLXJlbS12YWx1ZTogMTYgIWRlZmF1bHQ7XG5cbi8vIFNhZmFyaSBpZnJhbWUgcmVzaXplIGJ1ZzogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvcmZzL2lzc3Vlcy8xNFxuJHJmcy1zYWZhcmktaWZyYW1lLXJlc2l6ZS1idWctZml4OiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gRGlzYWJsZSBSRlMgYnkgc2V0dGluZyAkZW5hYmxlLXJmcyB0byBmYWxzZVxuJGVuYWJsZS1yZnM6IHRydWUgIWRlZmF1bHQ7XG5cbi8vIENhY2hlICRyZnMtYmFzZS12YWx1ZSB1bml0XG4kcmZzLWJhc2UtdmFsdWUtdW5pdDogdW5pdCgkcmZzLWJhc2UtdmFsdWUpO1xuXG5AZnVuY3Rpb24gZGl2aWRlKCRkaXZpZGVuZCwgJGRpdmlzb3IsICRwcmVjaXNpb246IDEwKSB7XG4gICRzaWduOiBpZigkZGl2aWRlbmQgPiAwIGFuZCAkZGl2aXNvciA+IDAgb3IgJGRpdmlkZW5kIDwgMCBhbmQgJGRpdmlzb3IgPCAwLCAxLCAtMSk7XG4gICRkaXZpZGVuZDogYWJzKCRkaXZpZGVuZCk7XG4gICRkaXZpc29yOiBhYnMoJGRpdmlzb3IpO1xuICBAaWYgJGRpdmlkZW5kID09IDAge1xuICAgIEByZXR1cm4gMDtcbiAgfVxuICBAaWYgJGRpdmlzb3IgPT0gMCB7XG4gICAgQGVycm9yIFwiQ2Fubm90IGRpdmlkZSBieSAwXCI7XG4gIH1cbiAgJHJlbWFpbmRlcjogJGRpdmlkZW5kO1xuICAkcmVzdWx0OiAwO1xuICAkZmFjdG9yOiAxMDtcbiAgQHdoaWxlICgkcmVtYWluZGVyID4gMCBhbmQgJHByZWNpc2lvbiA+PSAwKSB7XG4gICAgJHF1b3RpZW50OiAwO1xuICAgIEB3aGlsZSAoJHJlbWFpbmRlciA+PSAkZGl2aXNvcikge1xuICAgICAgJHJlbWFpbmRlcjogJHJlbWFpbmRlciAtICRkaXZpc29yO1xuICAgICAgJHF1b3RpZW50OiAkcXVvdGllbnQgKyAxO1xuICAgIH1cbiAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyAkcXVvdGllbnQ7XG4gICAgJGZhY3RvcjogJGZhY3RvciAqIC4xO1xuICAgICRyZW1haW5kZXI6ICRyZW1haW5kZXIgKiAxMDtcbiAgICAkcHJlY2lzaW9uOiAkcHJlY2lzaW9uIC0gMTtcbiAgICBAaWYgKCRwcmVjaXNpb24gPCAwIGFuZCAkcmVtYWluZGVyID49ICRkaXZpc29yICogNSkge1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIDE7XG4gICAgfVxuICB9XG4gICRyZXN1bHQ6ICRyZXN1bHQgKiAkZmFjdG9yICogJHNpZ247XG4gICRkaXZpZGVuZC11bml0OiB1bml0KCRkaXZpZGVuZCk7XG4gICRkaXZpc29yLXVuaXQ6IHVuaXQoJGRpdmlzb3IpO1xuICAkdW5pdC1tYXA6IChcbiAgICBcInB4XCI6IDFweCxcbiAgICBcInJlbVwiOiAxcmVtLFxuICAgIFwiZW1cIjogMWVtLFxuICAgIFwiJVwiOiAxJVxuICApO1xuICBAaWYgKCRkaXZpZGVuZC11bml0ICE9ICRkaXZpc29yLXVuaXQgYW5kIG1hcC1oYXMta2V5KCR1bml0LW1hcCwgJGRpdmlkZW5kLXVuaXQpKSB7XG4gICAgJHJlc3VsdDogJHJlc3VsdCAqIG1hcC1nZXQoJHVuaXQtbWFwLCAkZGl2aWRlbmQtdW5pdCk7XG4gIH1cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG4vLyBSZW1vdmUgcHgtdW5pdCBmcm9tICRyZnMtYmFzZS12YWx1ZSBmb3IgY2FsY3VsYXRpb25zXG5AaWYgJHJmcy1iYXNlLXZhbHVlLXVuaXQgPT0gcHgge1xuICAkcmZzLWJhc2UtdmFsdWU6IGRpdmlkZSgkcmZzLWJhc2UtdmFsdWUsICRyZnMtYmFzZS12YWx1ZSAqIDAgKyAxKTtcbn1cbkBlbHNlIGlmICRyZnMtYmFzZS12YWx1ZS11bml0ID09IHJlbSB7XG4gICRyZnMtYmFzZS12YWx1ZTogZGl2aWRlKCRyZnMtYmFzZS12YWx1ZSwgZGl2aWRlKCRyZnMtYmFzZS12YWx1ZSAqIDAgKyAxLCAkcmZzLXJlbS12YWx1ZSkpO1xufVxuXG4vLyBDYWNoZSAkcmZzLWJyZWFrcG9pbnQgdW5pdCB0byBwcmV2ZW50IG11bHRpcGxlIGNhbGxzXG4kcmZzLWJyZWFrcG9pbnQtdW5pdC1jYWNoZTogdW5pdCgkcmZzLWJyZWFrcG9pbnQpO1xuXG4vLyBSZW1vdmUgdW5pdCBmcm9tICRyZnMtYnJlYWtwb2ludCBmb3IgY2FsY3VsYXRpb25zXG5AaWYgJHJmcy1icmVha3BvaW50LXVuaXQtY2FjaGUgPT0gcHgge1xuICAkcmZzLWJyZWFrcG9pbnQ6IGRpdmlkZSgkcmZzLWJyZWFrcG9pbnQsICRyZnMtYnJlYWtwb2ludCAqIDAgKyAxKTtcbn1cbkBlbHNlIGlmICRyZnMtYnJlYWtwb2ludC11bml0LWNhY2hlID09IHJlbSBvciAkcmZzLWJyZWFrcG9pbnQtdW5pdC1jYWNoZSA9PSBcImVtXCIge1xuICAkcmZzLWJyZWFrcG9pbnQ6IGRpdmlkZSgkcmZzLWJyZWFrcG9pbnQsIGRpdmlkZSgkcmZzLWJyZWFrcG9pbnQgKiAwICsgMSwgJHJmcy1yZW0tdmFsdWUpKTtcbn1cblxuLy8gQ2FsY3VsYXRlIHRoZSBtZWRpYSBxdWVyeSB2YWx1ZVxuJHJmcy1tcS12YWx1ZTogaWYoJHJmcy1icmVha3BvaW50LXVuaXQgPT0gcHgsICN7JHJmcy1icmVha3BvaW50fXB4LCAje2RpdmlkZSgkcmZzLWJyZWFrcG9pbnQsICRyZnMtcmVtLXZhbHVlKX0jeyRyZnMtYnJlYWtwb2ludC11bml0fSk7XG4kcmZzLW1xLXByb3BlcnR5LXdpZHRoOiBpZigkcmZzLW1vZGUgPT0gbWF4LW1lZGlhLXF1ZXJ5LCBtYXgtd2lkdGgsIG1pbi13aWR0aCk7XG4kcmZzLW1xLXByb3BlcnR5LWhlaWdodDogaWYoJHJmcy1tb2RlID09IG1heC1tZWRpYS1xdWVyeSwgbWF4LWhlaWdodCwgbWluLWhlaWdodCk7XG5cbi8vIEludGVybmFsIG1peGluIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIG1lZGlhIHF1ZXJ5IG5lZWRzIHRvIGJlIHVzZWRcbkBtaXhpbiBfcmZzLW1lZGlhLXF1ZXJ5IHtcbiAgQGlmICRyZnMtdHdvLWRpbWVuc2lvbmFsIHtcbiAgICBAaWYgJHJmcy1tb2RlID09IG1heC1tZWRpYS1xdWVyeSB7XG4gICAgICBAbWVkaWEgKCN7JHJmcy1tcS1wcm9wZXJ0eS13aWR0aH06ICN7JHJmcy1tcS12YWx1ZX0pLCAoI3skcmZzLW1xLXByb3BlcnR5LWhlaWdodH06ICN7JHJmcy1tcS12YWx1ZX0pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIEBtZWRpYSAoI3skcmZzLW1xLXByb3BlcnR5LXdpZHRofTogI3skcmZzLW1xLXZhbHVlfSkgYW5kICgjeyRyZnMtbXEtcHJvcGVydHktaGVpZ2h0fTogI3skcmZzLW1xLXZhbHVlfSkge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBtZWRpYSAoI3skcmZzLW1xLXByb3BlcnR5LXdpZHRofTogI3skcmZzLW1xLXZhbHVlfSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEludGVybmFsIG1peGluIHRoYXQgYWRkcyBkaXNhYmxlIGNsYXNzZXMgdG8gdGhlIHNlbGVjdG9yIGlmIG5lZWRlZC5cbkBtaXhpbiBfcmZzLXJ1bGUge1xuICBAaWYgJHJmcy1jbGFzcyA9PSBkaXNhYmxlIGFuZCAkcmZzLW1vZGUgPT0gbWF4LW1lZGlhLXF1ZXJ5IHtcbiAgICAvLyBBZGRpbmcgYW4gZXh0cmEgY2xhc3MgaW5jcmVhc2VzIHNwZWNpZmljaXR5LCB3aGljaCBwcmV2ZW50cyB0aGUgbWVkaWEgcXVlcnkgdG8gb3ZlcnJpZGUgdGhlIHByb3BlcnR5XG4gICAgJixcbiAgICAuZGlzYWJsZS1yZnMgJixcbiAgICAmLmRpc2FibGUtcmZzIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAZWxzZSBpZiAkcmZzLWNsYXNzID09IGVuYWJsZSBhbmQgJHJmcy1tb2RlID09IG1pbi1tZWRpYS1xdWVyeSB7XG4gICAgLmVuYWJsZS1yZnMgJixcbiAgICAmLmVuYWJsZS1yZnMge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBJbnRlcm5hbCBtaXhpbiB0aGF0IGFkZHMgZW5hYmxlIGNsYXNzZXMgdG8gdGhlIHNlbGVjdG9yIGlmIG5lZWRlZC5cbkBtaXhpbiBfcmZzLW1lZGlhLXF1ZXJ5LXJ1bGUge1xuXG4gIEBpZiAkcmZzLWNsYXNzID09IGVuYWJsZSB7XG4gICAgQGlmICRyZnMtbW9kZSA9PSBtaW4tbWVkaWEtcXVlcnkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgX3Jmcy1tZWRpYS1xdWVyeSAoKSB7XG4gICAgICAuZW5hYmxlLXJmcyAmLFxuICAgICAgJi5lbmFibGUtcmZzIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBlbHNlIHtcbiAgICBAaWYgJHJmcy1jbGFzcyA9PSBkaXNhYmxlIGFuZCAkcmZzLW1vZGUgPT0gbWluLW1lZGlhLXF1ZXJ5IHtcbiAgICAgIC5kaXNhYmxlLXJmcyAmLFxuICAgICAgJi5kaXNhYmxlLXJmcyB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBAaW5jbHVkZSBfcmZzLW1lZGlhLXF1ZXJ5ICgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBmb3JtYXR0ZWQgbm9uLXJlc3BvbnNpdmUgdmFsdWVcbkBmdW5jdGlvbiByZnMtdmFsdWUoJHZhbHVlcykge1xuICAvLyBDb252ZXJ0IHRvIGxpc3RcbiAgJHZhbHVlczogaWYodHlwZS1vZigkdmFsdWVzKSAhPSBsaXN0LCAoJHZhbHVlcywpLCAkdmFsdWVzKTtcblxuICAkdmFsOiBcIlwiO1xuXG4gIC8vIExvb3Agb3ZlciBlYWNoIHZhbHVlIGFuZCBjYWxjdWxhdGUgdmFsdWVcbiAgQGVhY2ggJHZhbHVlIGluICR2YWx1ZXMge1xuICAgIEBpZiAkdmFsdWUgPT0gMCB7XG4gICAgICAkdmFsOiAkdmFsICsgXCIgMFwiO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBDYWNoZSAkdmFsdWUgdW5pdFxuICAgICAgJHVuaXQ6IGlmKHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiLCB1bml0KCR2YWx1ZSksIGZhbHNlKTtcblxuICAgICAgQGlmICR1bml0ID09IHB4IHtcbiAgICAgICAgLy8gQ29udmVydCB0byByZW0gaWYgbmVlZGVkXG4gICAgICAgICR2YWw6ICR2YWwgKyBcIiBcIiArIGlmKCRyZnMtdW5pdCA9PSByZW0sICN7ZGl2aWRlKCR2YWx1ZSwgJHZhbHVlICogMCArICRyZnMtcmVtLXZhbHVlKX1yZW0sICR2YWx1ZSk7XG4gICAgICB9XG4gICAgICBAZWxzZSBpZiAkdW5pdCA9PSByZW0ge1xuICAgICAgICAvLyBDb252ZXJ0IHRvIHB4IGlmIG5lZWRlZFxuICAgICAgICAkdmFsOiAkdmFsICsgXCIgXCIgKyBpZigkcmZzLXVuaXQgPT0gcHgsICN7ZGl2aWRlKCR2YWx1ZSwgJHZhbHVlICogMCArIDEpICogJHJmcy1yZW0tdmFsdWV9cHgsICR2YWx1ZSk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLy8gSWYgJHZhbHVlIGlzbid0IGEgbnVtYmVyIChsaWtlIGluaGVyaXQpIG9yICR2YWx1ZSBoYXMgYSB1bml0IChub3QgcHggb3IgcmVtLCBsaWtlIDEuNWVtKSBvciAkIGlzIDAsIGp1c3QgcHJpbnQgdGhlIHZhbHVlXG4gICAgICAgICR2YWw6ICR2YWwgKyBcIiBcIiArICR2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgZmlyc3Qgc3BhY2VcbiAgQHJldHVybiB1bnF1b3RlKHN0ci1zbGljZSgkdmFsLCAyKSk7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIHJlc3BvbnNpdmUgdmFsdWUgY2FsY3VsYXRlZCBieSBSRlNcbkBmdW5jdGlvbiByZnMtZmx1aWQtdmFsdWUoJHZhbHVlcykge1xuICAvLyBDb252ZXJ0IHRvIGxpc3RcbiAgJHZhbHVlczogaWYodHlwZS1vZigkdmFsdWVzKSAhPSBsaXN0LCAoJHZhbHVlcywpLCAkdmFsdWVzKTtcblxuICAkdmFsOiBcIlwiO1xuXG4gIC8vIExvb3Agb3ZlciBlYWNoIHZhbHVlIGFuZCBjYWxjdWxhdGUgdmFsdWVcbiAgQGVhY2ggJHZhbHVlIGluICR2YWx1ZXMge1xuICAgIEBpZiAkdmFsdWUgPT0gMCB7XG4gICAgICAkdmFsOiAkdmFsICsgXCIgMFwiO1xuICAgIH0gQGVsc2Uge1xuICAgICAgLy8gQ2FjaGUgJHZhbHVlIHVuaXRcbiAgICAgICR1bml0OiBpZih0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiwgdW5pdCgkdmFsdWUpLCBmYWxzZSk7XG5cbiAgICAgIC8vIElmICR2YWx1ZSBpc24ndCBhIG51bWJlciAobGlrZSBpbmhlcml0KSBvciAkdmFsdWUgaGFzIGEgdW5pdCAobm90IHB4IG9yIHJlbSwgbGlrZSAxLjVlbSkgb3IgJCBpcyAwLCBqdXN0IHByaW50IHRoZSB2YWx1ZVxuICAgICAgQGlmIG5vdCAkdW5pdCBvciAkdW5pdCAhPSBweCBhbmQgJHVuaXQgIT0gcmVtIHtcbiAgICAgICAgJHZhbDogJHZhbCArIFwiIFwiICsgJHZhbHVlO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIC8vIFJlbW92ZSB1bml0IGZyb20gJHZhbHVlIGZvciBjYWxjdWxhdGlvbnNcbiAgICAgICAgJHZhbHVlOiBkaXZpZGUoJHZhbHVlLCAkdmFsdWUgKiAwICsgaWYoJHVuaXQgPT0gcHgsIDEsIGRpdmlkZSgxLCAkcmZzLXJlbS12YWx1ZSkpKTtcblxuICAgICAgICAvLyBPbmx5IGFkZCB0aGUgbWVkaWEgcXVlcnkgaWYgdGhlIHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbWluaW11bSB2YWx1ZVxuICAgICAgICBAaWYgYWJzKCR2YWx1ZSkgPD0gJHJmcy1iYXNlLXZhbHVlIG9yIG5vdCAkZW5hYmxlLXJmcyB7XG4gICAgICAgICAgJHZhbDogJHZhbCArIFwiIFwiICsgaWYoJHJmcy11bml0ID09IHJlbSwgI3tkaXZpZGUoJHZhbHVlLCAkcmZzLXJlbS12YWx1ZSl9cmVtLCAjeyR2YWx1ZX1weCk7XG4gICAgICAgIH1cbiAgICAgICAgQGVsc2Uge1xuICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWluaW11bSB2YWx1ZVxuICAgICAgICAgICR2YWx1ZS1taW46ICRyZnMtYmFzZS12YWx1ZSArIGRpdmlkZShhYnMoJHZhbHVlKSAtICRyZnMtYmFzZS12YWx1ZSwgJHJmcy1mYWN0b3IpO1xuXG4gICAgICAgICAgLy8gQ2FsY3VsYXRlIGRpZmZlcmVuY2UgYmV0d2VlbiAkdmFsdWUgYW5kIHRoZSBtaW5pbXVtIHZhbHVlXG4gICAgICAgICAgJHZhbHVlLWRpZmY6IGFicygkdmFsdWUpIC0gJHZhbHVlLW1pbjtcblxuICAgICAgICAgIC8vIEJhc2UgdmFsdWUgZm9ybWF0dGluZ1xuICAgICAgICAgICRtaW4td2lkdGg6IGlmKCRyZnMtdW5pdCA9PSByZW0sICN7ZGl2aWRlKCR2YWx1ZS1taW4sICRyZnMtcmVtLXZhbHVlKX1yZW0sICN7JHZhbHVlLW1pbn1weCk7XG5cbiAgICAgICAgICAvLyBVc2UgbmVnYXRpdmUgdmFsdWUgaWYgbmVlZGVkXG4gICAgICAgICAgJG1pbi13aWR0aDogaWYoJHZhbHVlIDwgMCwgLSRtaW4td2lkdGgsICRtaW4td2lkdGgpO1xuXG4gICAgICAgICAgLy8gVXNlIGB2bWluYCBpZiB0d28tZGltZW5zaW9uYWwgaXMgZW5hYmxlZFxuICAgICAgICAgICR2YXJpYWJsZS11bml0OiBpZigkcmZzLXR3by1kaW1lbnNpb25hbCwgdm1pbiwgdncpO1xuXG4gICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB2YXJpYWJsZSB3aWR0aCBiZXR3ZWVuIDAgYW5kICRyZnMtYnJlYWtwb2ludFxuICAgICAgICAgICR2YXJpYWJsZS13aWR0aDogI3tkaXZpZGUoJHZhbHVlLWRpZmYgKiAxMDAsICRyZnMtYnJlYWtwb2ludCl9I3skdmFyaWFibGUtdW5pdH07XG5cbiAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNhbGN1bGF0ZWQgdmFsdWVcbiAgICAgICAgICAkdmFsOiAkdmFsICsgXCIgY2FsYyhcIiArICRtaW4td2lkdGggKyBpZigkdmFsdWUgPCAwLCBcIiAtIFwiLCBcIiArIFwiKSArICR2YXJpYWJsZS13aWR0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIGZpcnN0IHNwYWNlXG4gIEByZXR1cm4gdW5xdW90ZShzdHItc2xpY2UoJHZhbCwgMikpO1xufVxuXG4vLyBSRlMgbWl4aW5cbkBtaXhpbiByZnMoJHZhbHVlcywgJHByb3BlcnR5OiBmb250LXNpemUpIHtcbiAgQGlmICR2YWx1ZXMgIT0gbnVsbCB7XG4gICAgJHZhbDogcmZzLXZhbHVlKCR2YWx1ZXMpO1xuICAgICRmbHVpZC12YWw6IHJmcy1mbHVpZC12YWx1ZSgkdmFsdWVzKTtcblxuICAgIC8vIERvIG5vdCBwcmludCB0aGUgbWVkaWEgcXVlcnkgaWYgcmVzcG9uc2l2ZSAmIG5vbi1yZXNwb25zaXZlIHZhbHVlcyBhcmUgdGhlIHNhbWVcbiAgICBAaWYgJHZhbCA9PSAkZmx1aWQtdmFsIHtcbiAgICAgICN7JHByb3BlcnR5fTogJHZhbDtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgQGluY2x1ZGUgX3Jmcy1ydWxlICgpIHtcbiAgICAgICAgI3skcHJvcGVydHl9OiBpZigkcmZzLW1vZGUgPT0gbWF4LW1lZGlhLXF1ZXJ5LCAkdmFsLCAkZmx1aWQtdmFsKTtcblxuICAgICAgICAvLyBJbmNsdWRlIHNhZmFyaSBpZnJhbWUgcmVzaXplIGZpeCBpZiBuZWVkZWRcbiAgICAgICAgbWluLXdpZHRoOiBpZigkcmZzLXNhZmFyaS1pZnJhbWUtcmVzaXplLWJ1Zy1maXgsICgwICogMXZ3KSwgbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIF9yZnMtbWVkaWEtcXVlcnktcnVsZSAoKSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogaWYoJHJmcy1tb2RlID09IG1heC1tZWRpYS1xdWVyeSwgJGZsdWlkLXZhbCwgJHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFNob3J0aGFuZCBoZWxwZXIgbWl4aW5zXG5AbWl4aW4gZm9udC1zaXplKCR2YWx1ZSkge1xuICBAaW5jbHVkZSByZnMoJHZhbHVlKTtcbn1cblxuQG1peGluIHBhZGRpbmcoJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHJmcygkdmFsdWUsIHBhZGRpbmcpO1xufVxuXG5AbWl4aW4gcGFkZGluZy10b3AoJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHJmcygkdmFsdWUsIHBhZGRpbmctdG9wKTtcbn1cblxuQG1peGluIHBhZGRpbmctcmlnaHQoJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHJmcygkdmFsdWUsIHBhZGRpbmctcmlnaHQpO1xufVxuXG5AbWl4aW4gcGFkZGluZy1ib3R0b20oJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHJmcygkdmFsdWUsIHBhZGRpbmctYm90dG9tKTtcbn1cblxuQG1peGluIHBhZGRpbmctbGVmdCgkdmFsdWUpIHtcbiAgQGluY2x1ZGUgcmZzKCR2YWx1ZSwgcGFkZGluZy1sZWZ0KTtcbn1cblxuQG1peGluIG1hcmdpbigkdmFsdWUpIHtcbiAgQGluY2x1ZGUgcmZzKCR2YWx1ZSwgbWFyZ2luKTtcbn1cblxuQG1peGluIG1hcmdpbi10b3AoJHZhbHVlKSB7XG4gIEBpbmNsdWRlIHJmcygkdmFsdWUsIG1hcmdpbi10b3ApO1xufVxuXG5AbWl4aW4gbWFyZ2luLXJpZ2h0KCR2YWx1ZSkge1xuICBAaW5jbHVkZSByZnMoJHZhbHVlLCBtYXJnaW4tcmlnaHQpO1xufVxuXG5AbWl4aW4gbWFyZ2luLWJvdHRvbSgkdmFsdWUpIHtcbiAgQGluY2x1ZGUgcmZzKCR2YWx1ZSwgbWFyZ2luLWJvdHRvbSk7XG59XG5cbkBtaXhpbiBtYXJnaW4tbGVmdCgkdmFsdWUpIHtcbiAgQGluY2x1ZGUgcmZzKCR2YWx1ZSwgbWFyZ2luLWxlZnQpO1xufVxuIiwiLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbG9yLW1vZGUtbWl4aW5cbkBtaXhpbiBjb2xvci1tb2RlKCRtb2RlOiBsaWdodCwgJHJvb3Q6IGZhbHNlKSB7XG4gIEBpZiAkY29sb3ItbW9kZS10eXBlID09IFwibWVkaWEtcXVlcnlcIiB7XG4gICAgQGlmICRyb290ID09IHRydWUge1xuICAgICAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogJG1vZGUpIHtcbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiAkbW9kZSkge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIFtkYXRhLWJzLXRoZW1lPVwiI3skbW9kZX1cIl0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4vLyBzY3NzLWRvY3MtZW5kIGNvbG9yLW1vZGUtbWl4aW5cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCwgc2VsZWN0b3Itbm8tcXVhbGlmeWluZy10eXBlLCBwcm9wZXJ0eS1uby12ZW5kb3ItcHJlZml4XG5cblxuLy8gUmVib290XG4vL1xuLy8gTm9ybWFsaXphdGlvbiBvZiBIVE1MIGVsZW1lbnRzLCBtYW51YWxseSBmb3JrZWQgZnJvbSBOb3JtYWxpemUuY3NzIHRvIHJlbW92ZVxuLy8gc3R5bGVzIHRhcmdldGluZyBpcnJlbGV2YW50IGJyb3dzZXJzIHdoaWxlIGFwcGx5aW5nIG5ldyBzdHlsZXMuXG4vL1xuLy8gTm9ybWFsaXplIGlzIGxpY2Vuc2VkIE1JVC4gaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzc1xuXG5cbi8vIERvY3VtZW50XG4vL1xuLy8gQ2hhbmdlIGZyb20gYGJveC1zaXppbmc6IGNvbnRlbnQtYm94YCBzbyB0aGF0IGB3aWR0aGAgaXMgbm90IGFmZmVjdGVkIGJ5IGBwYWRkaW5nYCBvciBgYm9yZGVyYC5cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4vLyBSb290XG4vL1xuLy8gQWJpbGl0eSB0byB0aGUgdmFsdWUgb2YgdGhlIHJvb3QgZm9udCBzaXplcywgYWZmZWN0aW5nIHRoZSB2YWx1ZSBvZiBgcmVtYC5cbi8vIG51bGwgYnkgZGVmYXVsdCwgdGh1cyBub3RoaW5nIGlzIGdlbmVyYXRlZC5cblxuOnJvb3Qge1xuICBAaWYgJGZvbnQtc2l6ZS1yb290ICE9IG51bGwge1xuICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSh2YXIoLS0jeyRwcmVmaXh9cm9vdC1mb250LXNpemUpKTtcbiAgfVxuXG4gIEBpZiAkZW5hYmxlLXNtb290aC1zY3JvbGwge1xuICAgIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkge1xuICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQm9keVxuLy9cbi8vIDEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbi8vIDIuIEFzIGEgYmVzdCBwcmFjdGljZSwgYXBwbHkgYSBkZWZhdWx0IGBiYWNrZ3JvdW5kLWNvbG9yYC5cbi8vIDMuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuLy8gNC4gQ2hhbmdlIHRoZSBkZWZhdWx0IHRhcCBoaWdobGlnaHQgdG8gYmUgY29tcGxldGVseSB0cmFuc3BhcmVudCBpbiBpT1MuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCByZWJvb3QtYm9keS1ydWxlc1xuYm9keSB7XG4gIG1hcmdpbjogMDsgLy8gMVxuICBmb250LWZhbWlseTogdmFyKC0tI3skcHJlZml4fWJvZHktZm9udC1mYW1pbHkpO1xuICBAaW5jbHVkZSBmb250LXNpemUodmFyKC0tI3skcHJlZml4fWJvZHktZm9udC1zaXplKSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9Ym9keS1mb250LXdlaWdodCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9Ym9keS1saW5lLWhlaWdodCk7XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9Ym9keS1jb2xvcik7XG4gIHRleHQtYWxpZ246IHZhcigtLSN7JHByZWZpeH1ib2R5LXRleHQtYWxpZ24pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9Ym9keS1iZyk7IC8vIDJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvLyAzXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgkYmxhY2ssIDApOyAvLyA0XG59XG4vLyBzY3NzLWRvY3MtZW5kIHJlYm9vdC1ib2R5LXJ1bGVzXG5cblxuLy8gQ29udGVudCBncm91cGluZ1xuLy9cbi8vIDEuIFJlc2V0IEZpcmVmb3gncyBncmF5IGNvbG9yXG5cbmhyIHtcbiAgbWFyZ2luOiAkaHItbWFyZ2luLXkgMDtcbiAgY29sb3I6ICRoci1jb2xvcjsgLy8gMVxuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6ICRoci1ib3JkZXItd2lkdGggc29saWQgJGhyLWJvcmRlci1jb2xvcjtcbiAgb3BhY2l0eTogJGhyLW9wYWNpdHk7XG59XG5cblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIDEuIFJlbW92ZSB0b3AgbWFyZ2lucyBmcm9tIGhlYWRpbmdzXG4vLyAgICBCeSBkZWZhdWx0LCBgPGgxPmAtYDxoNj5gIGFsbCByZWNlaXZlIHRvcCBhbmQgYm90dG9tIG1hcmdpbnMuIFdlIG51a2UgdGhlIHRvcFxuLy8gICAgbWFyZ2luIGZvciBlYXNpZXIgY29udHJvbCB3aXRoaW4gdHlwZSBzY2FsZXMgYXMgaXQgYXZvaWRzIG1hcmdpbiBjb2xsYXBzaW5nLlxuXG4laGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDA7IC8vIDFcbiAgbWFyZ2luLWJvdHRvbTogJGhlYWRpbmdzLW1hcmdpbi1ib3R0b207XG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZ3MtZm9udC1mYW1pbHk7XG4gIGZvbnQtc3R5bGU6ICRoZWFkaW5ncy1mb250LXN0eWxlO1xuICBmb250LXdlaWdodDogJGhlYWRpbmdzLWZvbnQtd2VpZ2h0O1xuICBsaW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0O1xuICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWhlYWRpbmctY29sb3IpO1xufVxuXG5oMSB7XG4gIEBleHRlbmQgJWhlYWRpbmc7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkaDEtZm9udC1zaXplKTtcbn1cblxuaDIge1xuICBAZXh0ZW5kICVoZWFkaW5nO1xuICBAaW5jbHVkZSBmb250LXNpemUoJGgyLWZvbnQtc2l6ZSk7XG59XG5cbmgzIHtcbiAgQGV4dGVuZCAlaGVhZGluZztcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRoMy1mb250LXNpemUpO1xufVxuXG5oNCB7XG4gIEBleHRlbmQgJWhlYWRpbmc7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkaDQtZm9udC1zaXplKTtcbn1cblxuaDUge1xuICBAZXh0ZW5kICVoZWFkaW5nO1xuICBAaW5jbHVkZSBmb250LXNpemUoJGg1LWZvbnQtc2l6ZSk7XG59XG5cbmg2IHtcbiAgQGV4dGVuZCAlaGVhZGluZztcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRoNi1mb250LXNpemUpO1xufVxuXG5cbi8vIFJlc2V0IG1hcmdpbnMgb24gcGFyYWdyYXBoc1xuLy9cbi8vIFNpbWlsYXJseSwgdGhlIHRvcCBtYXJnaW4gb24gYDxwPmBzIGdldCByZXNldC4gSG93ZXZlciwgd2UgYWxzbyByZXNldCB0aGVcbi8vIGJvdHRvbSBtYXJnaW4gdG8gdXNlIGByZW1gIHVuaXRzIGluc3RlYWQgb2YgYGVtYC5cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206ICRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTtcbn1cblxuXG4vLyBBYmJyZXZpYXRpb25zXG4vL1xuLy8gMS4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIE9wZXJhLCBhbmQgU2FmYXJpLlxuLy8gMi4gQWRkIGV4cGxpY2l0IGN1cnNvciB0byBpbmRpY2F0ZSBjaGFuZ2VkIGJlaGF2aW9yLlxuLy8gMy4gUHJldmVudCB0aGUgdGV4dC1kZWNvcmF0aW9uIHRvIGJlIHNraXBwZWQuXG5cbmFiYnJbdGl0bGVdIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvLyAxXG4gIGN1cnNvcjogaGVscDsgLy8gMlxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7IC8vIDNcbn1cblxuXG4vLyBBZGRyZXNzXG5cbmFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5cbi8vIExpc3RzXG5cbm9sLFxudWwge1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbm9sLFxudWwsXG5kbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbm9sIG9sLFxudWwgdWwsXG5vbCB1bCxcbnVsIG9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuZHQge1xuICBmb250LXdlaWdodDogJGR0LWZvbnQtd2VpZ2h0O1xufVxuXG4vLyAxLiBVbmRvIGJyb3dzZXIgZGVmYXVsdFxuXG5kZCB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBtYXJnaW4tbGVmdDogMDsgLy8gMVxufVxuXG5cbi8vIEJsb2NrcXVvdGVcblxuYmxvY2txdW90ZSB7XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG5cblxuLy8gU3Ryb25nXG4vL1xuLy8gQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaVxuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkZXI7XG59XG5cblxuLy8gU21hbGxcbi8vXG4vLyBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vyc1xuXG5zbWFsbCB7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkc21hbGwtZm9udC1zaXplKTtcbn1cblxuXG4vLyBNYXJrXG5cbm1hcmsge1xuICBwYWRkaW5nOiAkbWFyay1wYWRkaW5nO1xuICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWhpZ2hsaWdodC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH1oaWdobGlnaHQtYmcpO1xufVxuXG5cbi8vIFN1YiBhbmQgU3VwXG4vL1xuLy8gUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4vLyBhbGwgYnJvd3NlcnMuXG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRzdWItc3VwLWZvbnQtc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7IGJvdHRvbTogLS4yNWVtOyB9XG5zdXAgeyB0b3A6IC0uNWVtOyB9XG5cblxuLy8gTGlua3NcblxuYSB7XG4gIGNvbG9yOiByZ2JhKHZhcigtLSN7JHByZWZpeH1saW5rLWNvbG9yLXJnYiksIHZhcigtLSN7JHByZWZpeH1saW5rLW9wYWNpdHksIDEpKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiAkbGluay1kZWNvcmF0aW9uO1xuXG4gICY6aG92ZXIge1xuICAgIC0tI3skcHJlZml4fWxpbmstY29sb3ItcmdiOiB2YXIoLS0jeyRwcmVmaXh9bGluay1ob3Zlci1jb2xvci1yZ2IpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogJGxpbmstaG92ZXItZGVjb3JhdGlvbjtcbiAgfVxufVxuXG4vLyBBbmQgdW5kbyB0aGVzZSBzdHlsZXMgZm9yIHBsYWNlaG9sZGVyIGxpbmtzL25hbWVkIGFuY2hvcnMgKHdpdGhvdXQgaHJlZikuXG4vLyBJdCB3b3VsZCBiZSBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBqdXN0IHVzZSBhW2hyZWZdIGluIHByZXZpb3VzIGJsb2NrLCBidXQgdGhhdFxuLy8gY2F1c2VzIHNwZWNpZmljaXR5IGlzc3VlcyBpbiBtYW55IG90aGVyIHN0eWxlcyB0aGF0IGFyZSB0b28gY29tcGxleCB0byBmaXguXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xOTQwMlxuXG5hOm5vdChbaHJlZl0pOm5vdChbY2xhc3NdKSB7XG4gICYsXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG5cbi8vIENvZGVcblxucHJlLFxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWNvZGU7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxZW0pOyAvLyBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG59XG5cbi8vIDEuIFJlbW92ZSBicm93c2VyIGRlZmF1bHQgdG9wIG1hcmdpblxuLy8gMi4gUmVzZXQgYnJvd3NlciBkZWZhdWx0IG9mIGAxZW1gIHRvIHVzZSBgcmVtYHNcbi8vIDMuIERvbid0IGFsbG93IGNvbnRlbnQgdG8gYnJlYWsgb3V0c2lkZVxuXG5wcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMDsgLy8gMVxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyAvLyAyXG4gIG92ZXJmbG93OiBhdXRvOyAvLyAzXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkY29kZS1mb250LXNpemUpO1xuICBjb2xvcjogJHByZS1jb2xvcjtcblxuICAvLyBBY2NvdW50IGZvciBzb21lIGNvZGUgb3V0cHV0cyB0aGF0IHBsYWNlIGNvZGUgdGFncyBpbiBwcmUgdGFnc1xuICBjb2RlIHtcbiAgICBAaW5jbHVkZSBmb250LXNpemUoaW5oZXJpdCk7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgd29yZC1icmVhazogbm9ybWFsO1xuICB9XG59XG5cbmNvZGUge1xuICBAaW5jbHVkZSBmb250LXNpemUoJGNvZGUtZm9udC1zaXplKTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1jb2RlLWNvbG9yKTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIC8vIFN0cmVhbWxpbmUgdGhlIHN0eWxlIHdoZW4gaW5zaWRlIGFuY2hvcnMgdG8gYXZvaWQgYnJva2VuIHVuZGVybGluZSBhbmQgbW9yZVxuICBhID4gJiB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxua2JkIHtcbiAgcGFkZGluZzogJGtiZC1wYWRkaW5nLXkgJGtiZC1wYWRkaW5nLXg7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgka2JkLWZvbnQtc2l6ZSk7XG4gIGNvbG9yOiAka2JkLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAka2JkLWJnO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRib3JkZXItcmFkaXVzLXNtKTtcblxuICBrYmQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgQGluY2x1ZGUgZm9udC1zaXplKDFlbSk7XG4gICAgZm9udC13ZWlnaHQ6ICRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0O1xuICB9XG59XG5cblxuLy8gRmlndXJlc1xuLy9cbi8vIEFwcGx5IGEgY29uc2lzdGVudCBtYXJnaW4gc3RyYXRlZ3kgKG1hdGNoZXMgb3VyIHR5cGUgc3R5bGVzKS5cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuXG4vLyBJbWFnZXMgYW5kIGNvbnRlbnRcblxuaW1nLFxuc3ZnIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBQcmV2ZW50IGRvdWJsZSBib3JkZXJzXG5cbnRhYmxlIHtcbiAgY2FwdGlvbi1zaWRlOiBib3R0b207XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogJHRhYmxlLWNlbGwtcGFkZGluZy15O1xuICBwYWRkaW5nLWJvdHRvbTogJHRhYmxlLWNlbGwtcGFkZGluZy15O1xuICBjb2xvcjogJHRhYmxlLWNhcHRpb24tY29sb3I7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8vIDEuIFJlbW92ZXMgZm9udC13ZWlnaHQgYm9sZCBieSBpbmhlcml0aW5nXG4vLyAyLiBNYXRjaGVzIGRlZmF1bHQgYDx0ZD5gIGFsaWdubWVudCBieSBpbmhlcml0aW5nIGB0ZXh0LWFsaWduYC5cbi8vIDMuIEZpeCBhbGlnbm1lbnQgZm9yIFNhZmFyaVxuXG50aCB7XG4gIGZvbnQtd2VpZ2h0OiAkdGFibGUtdGgtZm9udC13ZWlnaHQ7IC8vIDFcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDsgLy8gMlxuICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDsgLy8gM1xufVxuXG50aGVhZCxcbnRib2R5LFxudGZvb3QsXG50cixcbnRkLFxudGgge1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMDtcbn1cblxuXG4vLyBGb3Jtc1xuLy9cbi8vIDEuIEFsbG93IGxhYmVscyB0byB1c2UgYG1hcmdpbmAgZm9yIHNwYWNpbmcuXG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyAxXG59XG5cbi8vIFJlbW92ZSB0aGUgZGVmYXVsdCBgYm9yZGVyLXJhZGl1c2AgdGhhdCBtYWNPUyBDaHJvbWUgYWRkcy5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI0MDkzXG5cbmJ1dHRvbiB7XG4gIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9wZXJ0eS1kaXNhbGxvd2VkLWxpc3RcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gRXhwbGljaXRseSByZW1vdmUgZm9jdXMgb3V0bGluZSBpbiBDaHJvbWl1bSB3aGVuIGl0IHNob3VsZG4ndCBiZVxuLy8gdmlzaWJsZSAoZS5nLiBhcyByZXN1bHQgb2YgbW91c2UgY2xpY2sgb3IgdG91Y2ggdGFwKS4gSXQgYWxyZWFkeVxuLy8gc2hvdWxkIGJlIGRvaW5nIHRoaXMgYXV0b21hdGljYWxseSwgYnV0IHNlZW1zIHRvIGN1cnJlbnRseSBiZVxuLy8gY29uZnVzZWQgYW5kIGFwcGxpZXMgaXRzIHZlcnkgdmlzaWJsZSB0d28tdG9uZSBvdXRsaW5lIGFueXdheS5cblxuYnV0dG9uOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xuICBvdXRsaW5lOiAwO1xufVxuXG4vLyAxLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmlcblxuaW5wdXQsXG5idXR0b24sXG5zZWxlY3QsXG5vcHRncm91cCxcbnRleHRhcmVhIHtcbiAgbWFyZ2luOiAwOyAvLyAxXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBAaW5jbHVkZSBmb250LXNpemUoaW5oZXJpdCk7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4vLyBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3hcbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLy8gU2V0IHRoZSBjdXJzb3IgZm9yIG5vbi1gPGJ1dHRvbj5gIGJ1dHRvbnNcbi8vXG4vLyBEZXRhaWxzIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzMwNTYyXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc2VsZWN0IHtcbiAgLy8gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB3b3JkLXdyYXAgaW4gU2FmYXJpLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDk5MFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcblxuICAvLyBVbmRvIHRoZSBvcGFjaXR5IGNoYW5nZSBmcm9tIENocm9tZVxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8vIFJlbW92ZSB0aGUgZHJvcGRvd24gYXJyb3cgb25seSBmcm9tIHRleHQgdHlwZSBpbnB1dHMgYnVpbHQgd2l0aCBkYXRhbGlzdHMgaW4gQ2hyb21lLlxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NDk5NzExOFxuXG5bbGlzdF06bm90KFt0eXBlPVwiZGF0ZVwiXSk6bm90KFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0pOm5vdChbdHlwZT1cIm1vbnRoXCJdKTpub3QoW3R5cGU9XCJ3ZWVrXCJdKTpub3QoW3R5cGU9XCJ0aW1lXCJdKTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vLyAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2Bcbi8vICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cbi8vIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4vLyAzLiBPcGluaW9uYXRlZDogYWRkIFwiaGFuZFwiIGN1cnNvciB0byBub24tZGlzYWJsZWQgYnV0dG9uIGVsZW1lbnRzLlxuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSwgLy8gMVxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8vIDJcblxuICBAaWYgJGVuYWJsZS1idXR0b24tcG9pbnRlcnMge1xuICAgICY6bm90KDpkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyAvLyAzXG4gICAgfVxuICB9XG59XG5cbi8vIFJlbW92ZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgZnJvbSBGaXJlZm94LCBidXQgZG9uJ3QgcmVzdG9yZSB0aGUgb3V0bGluZSBsaWtlIE5vcm1hbGl6ZS5cblxuOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vLyAxLiBUZXh0YXJlYXMgc2hvdWxkIHJlYWxseSBvbmx5IHJlc2l6ZSB2ZXJ0aWNhbGx5IHNvIHRoZXkgZG9uJ3QgYnJlYWsgdGhlaXIgKGhvcml6b250YWwpIGNvbnRhaW5lcnMuXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDsgLy8gMVxufVxuXG4vLyAxLiBCcm93c2VycyBzZXQgYSBkZWZhdWx0IGBtaW4td2lkdGg6IG1pbi1jb250ZW50O2Agb24gZmllbGRzZXRzLFxuLy8gICAgdW5saWtlIGUuZy4gYDxkaXY+YHMsIHdoaWNoIGhhdmUgYG1pbi13aWR0aDogMDtgIGJ5IGRlZmF1bHQuXG4vLyAgICBTbyB3ZSByZXNldCB0aGF0IHRvIGVuc3VyZSBmaWVsZHNldHMgYmVoYXZlIG1vcmUgbGlrZSBhIHN0YW5kYXJkIGJsb2NrIGVsZW1lbnQuXG4vLyAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMjM1OVxuLy8gICAgYW5kIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlLyN0aGUtZmllbGRzZXQtYW5kLWxlZ2VuZC1lbGVtZW50c1xuLy8gMi4gUmVzZXQgdGhlIGRlZmF1bHQgb3V0bGluZSBiZWhhdmlvciBvZiBmaWVsZHNldHMgc28gdGhleSBkb24ndCBhZmZlY3QgcGFnZSBsYXlvdXQuXG5cbmZpZWxkc2V0IHtcbiAgbWluLXdpZHRoOiAwOyAvLyAxXG4gIHBhZGRpbmc6IDA7IC8vIDJcbiAgbWFyZ2luOiAwOyAvLyAyXG4gIGJvcmRlcjogMDsgLy8gMlxufVxuXG4vLyAxLiBCeSB1c2luZyBgZmxvYXQ6IGxlZnRgLCB0aGUgbGVnZW5kIHdpbGwgYmVoYXZlIGxpa2UgYSBibG9jayBlbGVtZW50LlxuLy8gICAgVGhpcyB3YXkgdGhlIGJvcmRlciBvZiBhIGZpZWxkc2V0IHdyYXBzIGFyb3VuZCB0aGUgbGVnZW5kIGlmIHByZXNlbnQuXG4vLyAyLiBGaXggd3JhcHBpbmcgYnVnLlxuLy8gICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjk3MTJcblxubGVnZW5kIHtcbiAgZmxvYXQ6IGxlZnQ7IC8vIDFcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206ICRsZWdlbmQtbWFyZ2luLWJvdHRvbTtcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRsZWdlbmQtZm9udC1zaXplKTtcbiAgZm9udC13ZWlnaHQ6ICRsZWdlbmQtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuXG4gICsgKiB7XG4gICAgY2xlYXI6IGxlZnQ7IC8vIDJcbiAgfVxufVxuXG4vLyBGaXggaGVpZ2h0IG9mIGlucHV0cyB3aXRoIGEgdHlwZSBvZiBkYXRldGltZS1sb2NhbCwgZGF0ZSwgbW9udGgsIHdlZWssIG9yIHRpbWVcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE4ODQyXG5cbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWZpZWxkcy13cmFwcGVyLFxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtdGV4dCxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1pbnV0ZSxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWhvdXItZmllbGQsXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1kYXktZmllbGQsXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZCxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQge1xuICBwYWRkaW5nOiAwO1xufVxuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8vIDEuIFRoaXMgb3ZlcnJpZGVzIHRoZSBleHRyYSByb3VuZGVkIGNvcm5lcnMgb24gc2VhcmNoIGlucHV0cyBpbiBpT1Mgc28gdGhhdCBvdXJcbi8vICAgIGAuZm9ybS1jb250cm9sYCBjbGFzcyBjYW4gcHJvcGVybHkgc3R5bGUgdGhlbS4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IHNpbXBseVxuLy8gICAgYmUgYWRkZWQgdG8gYC5mb3JtLWNvbnRyb2xgIGFzIGl0J3Mgbm90IHNwZWNpZmljIGVub3VnaC4gRm9yIGRldGFpbHMsIHNlZVxuLy8gICAgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTU4Ni5cbi8vIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvLyAxXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvLyAyXG59XG5cbi8vIDEuIEEgZmV3IGlucHV0IHR5cGVzIHNob3VsZCBzdGF5IExUUlxuLy8gU2VlIGh0dHBzOi8vcnRsc3R5bGluZy5jb20vcG9zdHMvcnRsLXN0eWxpbmcjZm9ybS1pbnB1dHNcbi8vIDIuIFJUTCBvbmx5IG91dHB1dFxuLy8gU2VlIGh0dHBzOi8vcnRsY3NzLmNvbS9sZWFybi91c2FnZS1ndWlkZS9jb250cm9sLWRpcmVjdGl2ZXMvI3Jhd1xuXG4vKiBydGw6cmF3OlxuW3R5cGU9XCJ0ZWxcIl0sXG5bdHlwZT1cInVybFwiXSxcblt0eXBlPVwiZW1haWxcIl0sXG5bdHlwZT1cIm51bWJlclwiXSB7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuKi9cblxuLy8gUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8vIFJlbW92ZSBwYWRkaW5nIGFyb3VuZCBjb2xvciBwaWNrZXJzIGluIHdlYmtpdCBicm93c2Vyc1xuXG46Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG5cbi8vIDEuIEluaGVyaXQgZm9udCBmYW1pbHkgYW5kIGxpbmUgaGVpZ2h0IGZvciBmaWxlIGlucHV0IGJ1dHRvbnNcbi8vIDIuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG5cbjo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xuICBmb250OiBpbmhlcml0OyAvLyAxXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvLyAyXG59XG5cbi8vIENvcnJlY3QgZWxlbWVudCBkaXNwbGF5c1xuXG5vdXRwdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8vIFJlbW92ZSBib3JkZXIgZnJvbSBpZnJhbWVcblxuaWZyYW1lIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBTdW1tYXJ5XG4vL1xuLy8gMS4gQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07IC8vIDFcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8vIFByb2dyZXNzXG4vL1xuLy8gQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cblxuLy8gSGlkZGVuIGF0dHJpYnV0ZVxuLy9cbi8vIEFsd2F5cyBoaWRlIGFuIGVsZW1lbnQgd2l0aCB0aGUgYGhpZGRlbmAgSFRNTCBhdHRyaWJ1dGUuXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuLy8gQ29sb3Igc3lzdGVtXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBncmF5LWNvbG9yLXZhcmlhYmxlc1xuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBncmF5LWNvbG9yLXZhcmlhYmxlc1xuXG4vLyBmdXN2LWRpc2FibGVcbi8vIHNjc3MtZG9jcy1zdGFydCBncmF5LWNvbG9ycy1tYXBcbiRncmF5czogKFxuICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgXCIzMDBcIjogJGdyYXktMzAwLFxuICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgXCI2MDBcIjogJGdyYXktNjAwLFxuICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgXCI5MDBcIjogJGdyYXktOTAwXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBncmF5LWNvbG9ycy1tYXBcbi8vIGZ1c3YtZW5hYmxlXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjb2xvci12YXJpYWJsZXNcbiRibHVlOiAgICAjMGQ2ZWZkICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZDYzMzg0ICFkZWZhdWx0O1xuJHJlZDogICAgICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAgICMxOTg3NTQgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMGRjYWYwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjb2xvci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbG9ycy1tYXBcbiRjb2xvcnM6IChcbiAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcbiAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgXCJyZWRcIjogICAgICAgICRyZWQsXG4gIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgXCJncmVlblwiOiAgICAgICRncmVlbixcbiAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gIFwiYmxhY2tcIjogICAgICAkYmxhY2ssXG4gIFwid2hpdGVcIjogICAgICAkd2hpdGUsXG4gIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbG9ycy1tYXBcblxuLy8gVGhlIGNvbnRyYXN0IHJhdGlvIHRvIHJlYWNoIGFnYWluc3Qgd2hpdGUsIHRvIGRldGVybWluZSBpZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJsaWdodFwiIHRvIFwiZGFya1wiLiBBY2NlcHRhYmxlIHZhbHVlcyBmb3IgV0NBRyAyLjAgYXJlIDMsIDQuNSBhbmQgNy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLyN2aXN1YWwtYXVkaW8tY29udHJhc3QtY29udHJhc3RcbiRtaW4tY29udHJhc3QtcmF0aW86ICAgNC41ICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIGNvbG9yIGNvbnRyYXN0IGZ1bmN0aW9uLlxuJGNvbG9yLWNvbnRyYXN0LWRhcms6ICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNvbG9yLWNvbnRyYXN0LWxpZ2h0OiAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBmdXN2LWRpc2FibGVcbiRibHVlLTEwMDogdGludC1jb2xvcigkYmx1ZSwgODAlKSAhZGVmYXVsdDtcbiRibHVlLTIwMDogdGludC1jb2xvcigkYmx1ZSwgNjAlKSAhZGVmYXVsdDtcbiRibHVlLTMwMDogdGludC1jb2xvcigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcbiRibHVlLTQwMDogdGludC1jb2xvcigkYmx1ZSwgMjAlKSAhZGVmYXVsdDtcbiRibHVlLTUwMDogJGJsdWUgIWRlZmF1bHQ7XG4kYmx1ZS02MDA6IHNoYWRlLWNvbG9yKCRibHVlLCAyMCUpICFkZWZhdWx0O1xuJGJsdWUtNzAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgNDAlKSAhZGVmYXVsdDtcbiRibHVlLTgwMDogc2hhZGUtY29sb3IoJGJsdWUsIDYwJSkgIWRlZmF1bHQ7XG4kYmx1ZS05MDA6IHNoYWRlLWNvbG9yKCRibHVlLCA4MCUpICFkZWZhdWx0O1xuXG4kaW5kaWdvLTEwMDogdGludC1jb2xvcigkaW5kaWdvLCA4MCUpICFkZWZhdWx0O1xuJGluZGlnby0yMDA6IHRpbnQtY29sb3IoJGluZGlnbywgNjAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tMzAwOiB0aW50LWNvbG9yKCRpbmRpZ28sIDQwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTQwMDogdGludC1jb2xvcigkaW5kaWdvLCAyMCUpICFkZWZhdWx0O1xuJGluZGlnby01MDA6ICRpbmRpZ28gIWRlZmF1bHQ7XG4kaW5kaWdvLTYwMDogc2hhZGUtY29sb3IoJGluZGlnbywgMjAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tNzAwOiBzaGFkZS1jb2xvcigkaW5kaWdvLCA0MCUpICFkZWZhdWx0O1xuJGluZGlnby04MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDYwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTkwMDogc2hhZGUtY29sb3IoJGluZGlnbywgODAlKSAhZGVmYXVsdDtcblxuJHB1cnBsZS0xMDA6IHRpbnQtY29sb3IoJHB1cnBsZSwgODAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtMjAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDYwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTMwMDogdGludC1jb2xvcigkcHVycGxlLCA0MCUpICFkZWZhdWx0O1xuJHB1cnBsZS00MDA6IHRpbnQtY29sb3IoJHB1cnBsZSwgMjAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtNTAwOiAkcHVycGxlICFkZWZhdWx0O1xuJHB1cnBsZS02MDA6IHNoYWRlLWNvbG9yKCRwdXJwbGUsIDIwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTcwMDogc2hhZGUtY29sb3IoJHB1cnBsZSwgNDAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtODAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCA2MCUpICFkZWZhdWx0O1xuJHB1cnBsZS05MDA6IHNoYWRlLWNvbG9yKCRwdXJwbGUsIDgwJSkgIWRlZmF1bHQ7XG5cbiRwaW5rLTEwMDogdGludC1jb2xvcigkcGluaywgODAlKSAhZGVmYXVsdDtcbiRwaW5rLTIwMDogdGludC1jb2xvcigkcGluaywgNjAlKSAhZGVmYXVsdDtcbiRwaW5rLTMwMDogdGludC1jb2xvcigkcGluaywgNDAlKSAhZGVmYXVsdDtcbiRwaW5rLTQwMDogdGludC1jb2xvcigkcGluaywgMjAlKSAhZGVmYXVsdDtcbiRwaW5rLTUwMDogJHBpbmsgIWRlZmF1bHQ7XG4kcGluay02MDA6IHNoYWRlLWNvbG9yKCRwaW5rLCAyMCUpICFkZWZhdWx0O1xuJHBpbmstNzAwOiBzaGFkZS1jb2xvcigkcGluaywgNDAlKSAhZGVmYXVsdDtcbiRwaW5rLTgwMDogc2hhZGUtY29sb3IoJHBpbmssIDYwJSkgIWRlZmF1bHQ7XG4kcGluay05MDA6IHNoYWRlLWNvbG9yKCRwaW5rLCA4MCUpICFkZWZhdWx0O1xuXG4kcmVkLTEwMDogdGludC1jb2xvcigkcmVkLCA4MCUpICFkZWZhdWx0O1xuJHJlZC0yMDA6IHRpbnQtY29sb3IoJHJlZCwgNjAlKSAhZGVmYXVsdDtcbiRyZWQtMzAwOiB0aW50LWNvbG9yKCRyZWQsIDQwJSkgIWRlZmF1bHQ7XG4kcmVkLTQwMDogdGludC1jb2xvcigkcmVkLCAyMCUpICFkZWZhdWx0O1xuJHJlZC01MDA6ICRyZWQgIWRlZmF1bHQ7XG4kcmVkLTYwMDogc2hhZGUtY29sb3IoJHJlZCwgMjAlKSAhZGVmYXVsdDtcbiRyZWQtNzAwOiBzaGFkZS1jb2xvcigkcmVkLCA0MCUpICFkZWZhdWx0O1xuJHJlZC04MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDYwJSkgIWRlZmF1bHQ7XG4kcmVkLTkwMDogc2hhZGUtY29sb3IoJHJlZCwgODAlKSAhZGVmYXVsdDtcblxuJG9yYW5nZS0xMDA6IHRpbnQtY29sb3IoJG9yYW5nZSwgODAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtMjAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDYwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTMwMDogdGludC1jb2xvcigkb3JhbmdlLCA0MCUpICFkZWZhdWx0O1xuJG9yYW5nZS00MDA6IHRpbnQtY29sb3IoJG9yYW5nZSwgMjAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtNTAwOiAkb3JhbmdlICFkZWZhdWx0O1xuJG9yYW5nZS02MDA6IHNoYWRlLWNvbG9yKCRvcmFuZ2UsIDIwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTcwMDogc2hhZGUtY29sb3IoJG9yYW5nZSwgNDAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtODAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCA2MCUpICFkZWZhdWx0O1xuJG9yYW5nZS05MDA6IHNoYWRlLWNvbG9yKCRvcmFuZ2UsIDgwJSkgIWRlZmF1bHQ7XG5cbiR5ZWxsb3ctMTAwOiB0aW50LWNvbG9yKCR5ZWxsb3csIDgwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTIwMDogdGludC1jb2xvcigkeWVsbG93LCA2MCUpICFkZWZhdWx0O1xuJHllbGxvdy0zMDA6IHRpbnQtY29sb3IoJHllbGxvdywgNDAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctNDAwOiB0aW50LWNvbG9yKCR5ZWxsb3csIDIwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTUwMDogJHllbGxvdyAhZGVmYXVsdDtcbiR5ZWxsb3ctNjAwOiBzaGFkZS1jb2xvcigkeWVsbG93LCAyMCUpICFkZWZhdWx0O1xuJHllbGxvdy03MDA6IHNoYWRlLWNvbG9yKCR5ZWxsb3csIDQwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTgwMDogc2hhZGUtY29sb3IoJHllbGxvdywgNjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctOTAwOiBzaGFkZS1jb2xvcigkeWVsbG93LCA4MCUpICFkZWZhdWx0O1xuXG4kZ3JlZW4tMTAwOiB0aW50LWNvbG9yKCRncmVlbiwgODAlKSAhZGVmYXVsdDtcbiRncmVlbi0yMDA6IHRpbnQtY29sb3IoJGdyZWVuLCA2MCUpICFkZWZhdWx0O1xuJGdyZWVuLTMwMDogdGludC1jb2xvcigkZ3JlZW4sIDQwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNDAwOiB0aW50LWNvbG9yKCRncmVlbiwgMjAlKSAhZGVmYXVsdDtcbiRncmVlbi01MDA6ICRncmVlbiAhZGVmYXVsdDtcbiRncmVlbi02MDA6IHNoYWRlLWNvbG9yKCRncmVlbiwgMjAlKSAhZGVmYXVsdDtcbiRncmVlbi03MDA6IHNoYWRlLWNvbG9yKCRncmVlbiwgNDAlKSAhZGVmYXVsdDtcbiRncmVlbi04MDA6IHNoYWRlLWNvbG9yKCRncmVlbiwgNjAlKSAhZGVmYXVsdDtcbiRncmVlbi05MDA6IHNoYWRlLWNvbG9yKCRncmVlbiwgODAlKSAhZGVmYXVsdDtcblxuJHRlYWwtMTAwOiB0aW50LWNvbG9yKCR0ZWFsLCA4MCUpICFkZWZhdWx0O1xuJHRlYWwtMjAwOiB0aW50LWNvbG9yKCR0ZWFsLCA2MCUpICFkZWZhdWx0O1xuJHRlYWwtMzAwOiB0aW50LWNvbG9yKCR0ZWFsLCA0MCUpICFkZWZhdWx0O1xuJHRlYWwtNDAwOiB0aW50LWNvbG9yKCR0ZWFsLCAyMCUpICFkZWZhdWx0O1xuJHRlYWwtNTAwOiAkdGVhbCAhZGVmYXVsdDtcbiR0ZWFsLTYwMDogc2hhZGUtY29sb3IoJHRlYWwsIDIwJSkgIWRlZmF1bHQ7XG4kdGVhbC03MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCA0MCUpICFkZWZhdWx0O1xuJHRlYWwtODAwOiBzaGFkZS1jb2xvcigkdGVhbCwgNjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTkwMDogc2hhZGUtY29sb3IoJHRlYWwsIDgwJSkgIWRlZmF1bHQ7XG5cbiRjeWFuLTEwMDogdGludC1jb2xvcigkY3lhbiwgODAlKSAhZGVmYXVsdDtcbiRjeWFuLTIwMDogdGludC1jb2xvcigkY3lhbiwgNjAlKSAhZGVmYXVsdDtcbiRjeWFuLTMwMDogdGludC1jb2xvcigkY3lhbiwgNDAlKSAhZGVmYXVsdDtcbiRjeWFuLTQwMDogdGludC1jb2xvcigkY3lhbiwgMjAlKSAhZGVmYXVsdDtcbiRjeWFuLTUwMDogJGN5YW4gIWRlZmF1bHQ7XG4kY3lhbi02MDA6IHNoYWRlLWNvbG9yKCRjeWFuLCAyMCUpICFkZWZhdWx0O1xuJGN5YW4tNzAwOiBzaGFkZS1jb2xvcigkY3lhbiwgNDAlKSAhZGVmYXVsdDtcbiRjeWFuLTgwMDogc2hhZGUtY29sb3IoJGN5YW4sIDYwJSkgIWRlZmF1bHQ7XG4kY3lhbi05MDA6IHNoYWRlLWNvbG9yKCRjeWFuLCA4MCUpICFkZWZhdWx0O1xuXG4kYmx1ZXM6IChcbiAgXCJibHVlLTEwMFwiOiAkYmx1ZS0xMDAsXG4gIFwiYmx1ZS0yMDBcIjogJGJsdWUtMjAwLFxuICBcImJsdWUtMzAwXCI6ICRibHVlLTMwMCxcbiAgXCJibHVlLTQwMFwiOiAkYmx1ZS00MDAsXG4gIFwiYmx1ZS01MDBcIjogJGJsdWUtNTAwLFxuICBcImJsdWUtNjAwXCI6ICRibHVlLTYwMCxcbiAgXCJibHVlLTcwMFwiOiAkYmx1ZS03MDAsXG4gIFwiYmx1ZS04MDBcIjogJGJsdWUtODAwLFxuICBcImJsdWUtOTAwXCI6ICRibHVlLTkwMFxuKSAhZGVmYXVsdDtcblxuJGluZGlnb3M6IChcbiAgXCJpbmRpZ28tMTAwXCI6ICRpbmRpZ28tMTAwLFxuICBcImluZGlnby0yMDBcIjogJGluZGlnby0yMDAsXG4gIFwiaW5kaWdvLTMwMFwiOiAkaW5kaWdvLTMwMCxcbiAgXCJpbmRpZ28tNDAwXCI6ICRpbmRpZ28tNDAwLFxuICBcImluZGlnby01MDBcIjogJGluZGlnby01MDAsXG4gIFwiaW5kaWdvLTYwMFwiOiAkaW5kaWdvLTYwMCxcbiAgXCJpbmRpZ28tNzAwXCI6ICRpbmRpZ28tNzAwLFxuICBcImluZGlnby04MDBcIjogJGluZGlnby04MDAsXG4gIFwiaW5kaWdvLTkwMFwiOiAkaW5kaWdvLTkwMFxuKSAhZGVmYXVsdDtcblxuJHB1cnBsZXM6IChcbiAgXCJwdXJwbGUtMTAwXCI6ICRwdXJwbGUtMTAwLFxuICBcInB1cnBsZS0yMDBcIjogJHB1cnBsZS0yMDAsXG4gIFwicHVycGxlLTMwMFwiOiAkcHVycGxlLTMwMCxcbiAgXCJwdXJwbGUtNDAwXCI6ICRwdXJwbGUtNDAwLFxuICBcInB1cnBsZS01MDBcIjogJHB1cnBsZS01MDAsXG4gIFwicHVycGxlLTYwMFwiOiAkcHVycGxlLTYwMCxcbiAgXCJwdXJwbGUtNzAwXCI6ICRwdXJwbGUtNzAwLFxuICBcInB1cnBsZS04MDBcIjogJHB1cnBsZS04MDAsXG4gIFwicHVycGxlLTkwMFwiOiAkcHVycGxlLTkwMFxuKSAhZGVmYXVsdDtcblxuJHBpbmtzOiAoXG4gIFwicGluay0xMDBcIjogJHBpbmstMTAwLFxuICBcInBpbmstMjAwXCI6ICRwaW5rLTIwMCxcbiAgXCJwaW5rLTMwMFwiOiAkcGluay0zMDAsXG4gIFwicGluay00MDBcIjogJHBpbmstNDAwLFxuICBcInBpbmstNTAwXCI6ICRwaW5rLTUwMCxcbiAgXCJwaW5rLTYwMFwiOiAkcGluay02MDAsXG4gIFwicGluay03MDBcIjogJHBpbmstNzAwLFxuICBcInBpbmstODAwXCI6ICRwaW5rLTgwMCxcbiAgXCJwaW5rLTkwMFwiOiAkcGluay05MDBcbikgIWRlZmF1bHQ7XG5cbiRyZWRzOiAoXG4gIFwicmVkLTEwMFwiOiAkcmVkLTEwMCxcbiAgXCJyZWQtMjAwXCI6ICRyZWQtMjAwLFxuICBcInJlZC0zMDBcIjogJHJlZC0zMDAsXG4gIFwicmVkLTQwMFwiOiAkcmVkLTQwMCxcbiAgXCJyZWQtNTAwXCI6ICRyZWQtNTAwLFxuICBcInJlZC02MDBcIjogJHJlZC02MDAsXG4gIFwicmVkLTcwMFwiOiAkcmVkLTcwMCxcbiAgXCJyZWQtODAwXCI6ICRyZWQtODAwLFxuICBcInJlZC05MDBcIjogJHJlZC05MDBcbikgIWRlZmF1bHQ7XG5cbiRvcmFuZ2VzOiAoXG4gIFwib3JhbmdlLTEwMFwiOiAkb3JhbmdlLTEwMCxcbiAgXCJvcmFuZ2UtMjAwXCI6ICRvcmFuZ2UtMjAwLFxuICBcIm9yYW5nZS0zMDBcIjogJG9yYW5nZS0zMDAsXG4gIFwib3JhbmdlLTQwMFwiOiAkb3JhbmdlLTQwMCxcbiAgXCJvcmFuZ2UtNTAwXCI6ICRvcmFuZ2UtNTAwLFxuICBcIm9yYW5nZS02MDBcIjogJG9yYW5nZS02MDAsXG4gIFwib3JhbmdlLTcwMFwiOiAkb3JhbmdlLTcwMCxcbiAgXCJvcmFuZ2UtODAwXCI6ICRvcmFuZ2UtODAwLFxuICBcIm9yYW5nZS05MDBcIjogJG9yYW5nZS05MDBcbikgIWRlZmF1bHQ7XG5cbiR5ZWxsb3dzOiAoXG4gIFwieWVsbG93LTEwMFwiOiAkeWVsbG93LTEwMCxcbiAgXCJ5ZWxsb3ctMjAwXCI6ICR5ZWxsb3ctMjAwLFxuICBcInllbGxvdy0zMDBcIjogJHllbGxvdy0zMDAsXG4gIFwieWVsbG93LTQwMFwiOiAkeWVsbG93LTQwMCxcbiAgXCJ5ZWxsb3ctNTAwXCI6ICR5ZWxsb3ctNTAwLFxuICBcInllbGxvdy02MDBcIjogJHllbGxvdy02MDAsXG4gIFwieWVsbG93LTcwMFwiOiAkeWVsbG93LTcwMCxcbiAgXCJ5ZWxsb3ctODAwXCI6ICR5ZWxsb3ctODAwLFxuICBcInllbGxvdy05MDBcIjogJHllbGxvdy05MDBcbikgIWRlZmF1bHQ7XG5cbiRncmVlbnM6IChcbiAgXCJncmVlbi0xMDBcIjogJGdyZWVuLTEwMCxcbiAgXCJncmVlbi0yMDBcIjogJGdyZWVuLTIwMCxcbiAgXCJncmVlbi0zMDBcIjogJGdyZWVuLTMwMCxcbiAgXCJncmVlbi00MDBcIjogJGdyZWVuLTQwMCxcbiAgXCJncmVlbi01MDBcIjogJGdyZWVuLTUwMCxcbiAgXCJncmVlbi02MDBcIjogJGdyZWVuLTYwMCxcbiAgXCJncmVlbi03MDBcIjogJGdyZWVuLTcwMCxcbiAgXCJncmVlbi04MDBcIjogJGdyZWVuLTgwMCxcbiAgXCJncmVlbi05MDBcIjogJGdyZWVuLTkwMFxuKSAhZGVmYXVsdDtcblxuJHRlYWxzOiAoXG4gIFwidGVhbC0xMDBcIjogJHRlYWwtMTAwLFxuICBcInRlYWwtMjAwXCI6ICR0ZWFsLTIwMCxcbiAgXCJ0ZWFsLTMwMFwiOiAkdGVhbC0zMDAsXG4gIFwidGVhbC00MDBcIjogJHRlYWwtNDAwLFxuICBcInRlYWwtNTAwXCI6ICR0ZWFsLTUwMCxcbiAgXCJ0ZWFsLTYwMFwiOiAkdGVhbC02MDAsXG4gIFwidGVhbC03MDBcIjogJHRlYWwtNzAwLFxuICBcInRlYWwtODAwXCI6ICR0ZWFsLTgwMCxcbiAgXCJ0ZWFsLTkwMFwiOiAkdGVhbC05MDBcbikgIWRlZmF1bHQ7XG5cbiRjeWFuczogKFxuICBcImN5YW4tMTAwXCI6ICRjeWFuLTEwMCxcbiAgXCJjeWFuLTIwMFwiOiAkY3lhbi0yMDAsXG4gIFwiY3lhbi0zMDBcIjogJGN5YW4tMzAwLFxuICBcImN5YW4tNDAwXCI6ICRjeWFuLTQwMCxcbiAgXCJjeWFuLTUwMFwiOiAkY3lhbi01MDAsXG4gIFwiY3lhbi02MDBcIjogJGN5YW4tNjAwLFxuICBcImN5YW4tNzAwXCI6ICRjeWFuLTcwMCxcbiAgXCJjeWFuLTgwMFwiOiAkY3lhbi04MDAsXG4gIFwiY3lhbi05MDBcIjogJGN5YW4tOTAwXG4pICFkZWZhdWx0O1xuLy8gZnVzdi1lbmFibGVcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9yLXZhcmlhYmxlc1xuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRoZW1lLWNvbG9yLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGhlbWUtY29sb3JzLW1hcFxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvcnMtbWFwXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aGVtZS10ZXh0LXZhcmlhYmxlc1xuJHByaW1hcnktdGV4dC1lbXBoYXNpczogICBzaGFkZS1jb2xvcigkcHJpbWFyeSwgNjAlKSAhZGVmYXVsdDtcbiRzZWNvbmRhcnktdGV4dC1lbXBoYXNpczogc2hhZGUtY29sb3IoJHNlY29uZGFyeSwgNjAlKSAhZGVmYXVsdDtcbiRzdWNjZXNzLXRleHQtZW1waGFzaXM6ICAgc2hhZGUtY29sb3IoJHN1Y2Nlc3MsIDYwJSkgIWRlZmF1bHQ7XG4kaW5mby10ZXh0LWVtcGhhc2lzOiAgICAgIHNoYWRlLWNvbG9yKCRpbmZvLCA2MCUpICFkZWZhdWx0O1xuJHdhcm5pbmctdGV4dC1lbXBoYXNpczogICBzaGFkZS1jb2xvcigkd2FybmluZywgNjAlKSAhZGVmYXVsdDtcbiRkYW5nZXItdGV4dC1lbXBoYXNpczogICAgc2hhZGUtY29sb3IoJGRhbmdlciwgNjAlKSAhZGVmYXVsdDtcbiRsaWdodC10ZXh0LWVtcGhhc2lzOiAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRhcmstdGV4dC1lbXBoYXNpczogICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRoZW1lLXRleHQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aGVtZS1iZy1zdWJ0bGUtdmFyaWFibGVzXG4kcHJpbWFyeS1iZy1zdWJ0bGU6ICAgICAgIHRpbnQtY29sb3IoJHByaW1hcnksIDgwJSkgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5LWJnLXN1YnRsZTogICAgIHRpbnQtY29sb3IoJHNlY29uZGFyeSwgODAlKSAhZGVmYXVsdDtcbiRzdWNjZXNzLWJnLXN1YnRsZTogICAgICAgdGludC1jb2xvcigkc3VjY2VzcywgODAlKSAhZGVmYXVsdDtcbiRpbmZvLWJnLXN1YnRsZTogICAgICAgICAgdGludC1jb2xvcigkaW5mbywgODAlKSAhZGVmYXVsdDtcbiR3YXJuaW5nLWJnLXN1YnRsZTogICAgICAgdGludC1jb2xvcigkd2FybmluZywgODAlKSAhZGVmYXVsdDtcbiRkYW5nZXItYmctc3VidGxlOiAgICAgICAgdGludC1jb2xvcigkZGFuZ2VyLCA4MCUpICFkZWZhdWx0O1xuJGxpZ2h0LWJnLXN1YnRsZTogICAgICAgICBtaXgoJGdyYXktMTAwLCAkd2hpdGUpICFkZWZhdWx0O1xuJGRhcmstYmctc3VidGxlOiAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRoZW1lLWJnLXN1YnRsZS12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWJvcmRlci1zdWJ0bGUtdmFyaWFibGVzXG4kcHJpbWFyeS1ib3JkZXItc3VidGxlOiAgIHRpbnQtY29sb3IoJHByaW1hcnksIDYwJSkgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5LWJvcmRlci1zdWJ0bGU6IHRpbnQtY29sb3IoJHNlY29uZGFyeSwgNjAlKSAhZGVmYXVsdDtcbiRzdWNjZXNzLWJvcmRlci1zdWJ0bGU6ICAgdGludC1jb2xvcigkc3VjY2VzcywgNjAlKSAhZGVmYXVsdDtcbiRpbmZvLWJvcmRlci1zdWJ0bGU6ICAgICAgdGludC1jb2xvcigkaW5mbywgNjAlKSAhZGVmYXVsdDtcbiR3YXJuaW5nLWJvcmRlci1zdWJ0bGU6ICAgdGludC1jb2xvcigkd2FybmluZywgNjAlKSAhZGVmYXVsdDtcbiRkYW5nZXItYm9yZGVyLXN1YnRsZTogICAgdGludC1jb2xvcigkZGFuZ2VyLCA2MCUpICFkZWZhdWx0O1xuJGxpZ2h0LWJvcmRlci1zdWJ0bGU6ICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyay1ib3JkZXItc3VidGxlOiAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGhlbWUtYm9yZGVyLXN1YnRsZS12YXJpYWJsZXNcblxuLy8gQ2hhcmFjdGVycyB3aGljaCBhcmUgZXNjYXBlZCBieSB0aGUgZXNjYXBlLXN2ZyBmdW5jdGlvblxuJGVzY2FwZWQtY2hhcmFjdGVyczogKFxuICAoXCI8XCIsIFwiJTNjXCIpLFxuICAoXCI+XCIsIFwiJTNlXCIpLFxuICAoXCIjXCIsIFwiJTIzXCIpLFxuICAoXCIoXCIsIFwiJTI4XCIpLFxuICAoXCIpXCIsIFwiJTI5XCIpLFxuKSAhZGVmYXVsdDtcblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cblxuJGVuYWJsZS1jYXJldDogICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVkdWNlZC1tb3Rpb246ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNtb290aC1zY3JvbGw6ICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtY29udGFpbmVyLWNsYXNzZXM6ICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWNzc2dyaWQ6ICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtYnV0dG9uLXBvaW50ZXJzOiAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJmczogICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtbmVnYXRpdmUtbWFyZ2luczogICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtaW1wb3J0YW50LXV0aWxpdGllczogIHRydWUgIWRlZmF1bHQ7XG5cbiRlbmFibGUtZGFyay1tb2RlOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kY29sb3ItbW9kZS10eXBlOiAgICAgICAgICAgICBkYXRhICFkZWZhdWx0OyAvLyBgZGF0YWAgb3IgYG1lZGlhLXF1ZXJ5YFxuXG4vLyBQcmVmaXggZm9yIDpyb290IENTUyB2YXJpYWJsZXNcblxuJHZhcmlhYmxlLXByZWZpeDogICAgICAgICAgICAgYnMtICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIHY1LjIuMCBmb3IgdGhlIHNob3J0ZXIgYCRwcmVmaXhgXG4kcHJlZml4OiAgICAgICAgICAgICAgICAgICAgICAkdmFyaWFibGUtcHJlZml4ICFkZWZhdWx0O1xuXG4vLyBHcmFkaWVudFxuLy9cbi8vIFRoZSBncmFkaWVudCB3aGljaCBpcyBhZGRlZCB0byBjb21wb25lbnRzIGlmIGAkZW5hYmxlLWdyYWRpZW50c2AgaXMgYHRydWVgXG4vLyBUaGlzIGdyYWRpZW50IGlzIGFsc28gYWRkZWQgdG8gZWxlbWVudHMgd2l0aCBgLmJnLWdyYWRpZW50YFxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHZhcmlhYmxlLWdyYWRpZW50XG4kZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoJHdoaXRlLCAuMTUpLCByZ2JhKCR3aGl0ZSwgMCkpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB2YXJpYWJsZS1ncmFkaWVudFxuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHNwYWNlci12YXJpYWJsZXMtbWFwc1xuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoXG4gIDA6IDAsXG4gIDE6ICRzcGFjZXIgKiAuMjUsXG4gIDI6ICRzcGFjZXIgKiAuNSxcbiAgMzogJHNwYWNlcixcbiAgNDogJHNwYWNlciAqIDEuNSxcbiAgNTogJHNwYWNlciAqIDMsXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBzcGFjZXItdmFyaWFibGVzLW1hcHNcblxuLy8gUG9zaXRpb25cbi8vXG4vLyBEZWZpbmUgdGhlIGVkZ2UgcG9zaXRpb25pbmcgYW5jaG9ycyBvZiB0aGUgcG9zaXRpb24gdXRpbGl0aWVzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgcG9zaXRpb24tbWFwXG4kcG9zaXRpb24tdmFsdWVzOiAoXG4gIDA6IDAsXG4gIDUwOiA1MCUsXG4gIDEwMDogMTAwJVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgcG9zaXRpb24tbWFwXG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LXRleHQtYWxpZ246ICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRib2R5LXNlY29uZGFyeS1jb2xvcjogICAgICByZ2JhKCRib2R5LWNvbG9yLCAuNzUpICFkZWZhdWx0O1xuJGJvZHktc2Vjb25kYXJ5LWJnOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGJvZHktdGVydGlhcnktY29sb3I6ICAgICAgIHJnYmEoJGJvZHktY29sb3IsIC41KSAhZGVmYXVsdDtcbiRib2R5LXRlcnRpYXJ5LWJnOiAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG5cbiRib2R5LWVtcGhhc2lzLWNvbG9yOiAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbiRsaW5rLXNoYWRlLXBlcmNlbnRhZ2U6ICAgICAgICAgICAgICAgICAgIDIwJSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0LWNvbG9yKCRsaW5rLWNvbG9yLCAkbGluay1zaGFkZS1wZXJjZW50YWdlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRzdHJldGNoZWQtbGluay1wc2V1ZG8tZWxlbWVudDogICAgICAgICAgIGFmdGVyICFkZWZhdWx0O1xuJHN0cmV0Y2hlZC1saW5rLXotaW5kZXg6ICAgICAgICAgICAgICAgICAgMSAhZGVmYXVsdDtcblxuLy8gSWNvbiBsaW5rc1xuLy8gc2Nzcy1kb2NzLXN0YXJ0IGljb24tbGluay12YXJpYWJsZXNcbiRpY29uLWxpbmstZ2FwOiAgICAgICAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaWNvbi1saW5rLXVuZGVybGluZS1vZmZzZXQ6ICAuMjVlbSAhZGVmYXVsdDtcbiRpY29uLWxpbmstaWNvbi1zaXplOiAgICAgICAgIDFlbSAhZGVmYXVsdDtcbiRpY29uLWxpbmstaWNvbi10cmFuc2l0aW9uOiAgIC4ycyBlYXNlLWluLW91dCB0cmFuc2Zvcm0gIWRlZmF1bHQ7XG4kaWNvbi1saW5rLWljb24tdHJhbnNmb3JtOiAgICB0cmFuc2xhdGUzZCguMjVlbSwgMCwgMCkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGljb24tbGluay12YXJpYWJsZXNcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZ3JpZC1icmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQwMHB4XG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBncmlkLWJyZWFrcG9pbnRzXG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29udGFpbmVyLW1heC13aWR0aHNcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4LFxuICB4eGw6IDEzMjBweFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29udGFpbmVyLW1heC13aWR0aHNcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kZ3JpZC1yb3ctY29sdW1uczogICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG4vLyBDb250YWluZXIgcGFkZGluZ1xuXG4kY29udGFpbmVyLXBhZGRpbmcteDogJGdyaWQtZ3V0dGVyLXdpZHRoICFkZWZhdWx0O1xuXG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBib3JkZXItdmFyaWFibGVzXG4kYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLXdpZHRoczogKFxuICAxOiAxcHgsXG4gIDI6IDJweCxcbiAgMzogM3B4LFxuICA0OiA0cHgsXG4gIDU6IDVweFxuKSAhZGVmYXVsdDtcbiRib3JkZXItc3R5bGU6ICAgICAgICAgICAgICAgIHNvbGlkICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvci10cmFuc2x1Y2VudDogICAgcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3JkZXItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMteGw6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXh4bDogICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcbi8vIGZ1c3YtZGlzYWJsZVxuJGJvcmRlci1yYWRpdXMtMnhsOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMteHhsICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIHY1LjMuMFxuLy8gZnVzdi1lbmFibGVcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJveC1zaGFkb3ctdmFyaWFibGVzXG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWluc2V0OiAgICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9jdXMtcmluZy12YXJpYWJsZXNcbiRmb2N1cy1yaW5nLXdpZHRoOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRmb2N1cy1yaW5nLW9wYWNpdHk6ICAgIC4yNSAhZGVmYXVsdDtcbiRmb2N1cy1yaW5nLWNvbG9yOiAgICAgIHJnYmEoJHByaW1hcnksICRmb2N1cy1yaW5nLW9wYWNpdHkpICFkZWZhdWx0O1xuJGZvY3VzLXJpbmctYmx1cjogICAgICAgMCAhZGVmYXVsdDtcbiRmb2N1cy1yaW5nLWJveC1zaGFkb3c6IDAgMCAkZm9jdXMtcmluZy1ibHVyICRmb2N1cy1yaW5nLXdpZHRoICRmb2N1cy1yaW5nLWNvbG9yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb2N1cy1yaW5nLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZXQtdmFyaWFibGVzXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJldC12YXJpYWJsZXNcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sbGFwc2UtdHJhbnNpdGlvblxuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlLXdpZHRoOiAgIHdpZHRoIC4zNXMgZWFzZSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sbGFwc2UtdHJhbnNpdGlvblxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3Rcbi8vIHNjc3MtZG9jcy1zdGFydCBhc3BlY3QtcmF0aW9zXG4kYXNwZWN0LXJhdGlvczogKFxuICBcIjF4MVwiOiAxMDAlLFxuICBcIjR4M1wiOiBjYWxjKDMgLyA0ICogMTAwJSksXG4gIFwiMTZ4OVwiOiBjYWxjKDkgLyAxNiAqIDEwMCUpLFxuICBcIjIxeDlcIjogY2FsYyg5IC8gMjEgKiAxMDAlKVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYXNwZWN0LXJhdGlvc1xuLy8gc3R5bGVsaW50LWVuYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9udC12YXJpYWJsZXNcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIk5vdG8gU2Fuc1wiLCBcIkxpYmVyYXRpb24gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Zm9udC1zYW5zLXNlcmlmKSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1jb2RlOiAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1mb250LW1vbm9zcGFjZSkgIWRlZmF1bHQ7XG5cbi8vICRmb250LXNpemUtcm9vdCBhZmZlY3RzIHRoZSB2YWx1ZSBvZiBgcmVtYCwgd2hpY2ggaXMgdXNlZCBmb3IgYXMgd2VsbCBmb250IHNpemVzLCBwYWRkaW5ncywgYW5kIG1hcmdpbnNcbi8vICRmb250LXNpemUtYmFzZSBhZmZlY3RzIHRoZSBmb250IHNpemUgb2YgdGhlIGJvZHkgdGV4dFxuJGZvbnQtc2l6ZS1yb290OiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiAgICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6ICAgICAgICA2MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAyICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvbnQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb250LXNpemVzXG4kZm9udC1zaXplczogKFxuICAxOiAkaDEtZm9udC1zaXplLFxuICAyOiAkaDItZm9udC1zaXplLFxuICAzOiAkaDMtZm9udC1zaXplLFxuICA0OiAkaDQtZm9udC1zaXplLFxuICA1OiAkaDUtZm9udC1zaXplLFxuICA2OiAkaDYtZm9udC1zaXplXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb250LXNpemVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBoZWFkaW5ncy12YXJpYWJsZXNcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1zdHlsZTogICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaGVhZGluZ3MtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkaXNwbGF5LWhlYWRpbmdzXG4kZGlzcGxheS1mb250LXNpemVzOiAoXG4gIDE6IDVyZW0sXG4gIDI6IDQuNXJlbSxcbiAgMzogNHJlbSxcbiAgNDogMy41cmVtLFxuICA1OiAzcmVtLFxuICA2OiAyLjVyZW1cbikgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5LWZvbnQtZmFtaWx5OiBudWxsICFkZWZhdWx0O1xuJGRpc3BsYXktZm9udC1zdHlsZTogIG51bGwgIWRlZmF1bHQ7XG4kZGlzcGxheS1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZGlzcGxheS1oZWFkaW5nc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdHlwZS12YXJpYWJsZXNcbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIC44NzVlbSAhZGVmYXVsdDtcblxuJHN1Yi1zdXAtZm9udC1zaXplOiAgICAgICAgICAgLjc1ZW0gIWRlZmF1bHQ7XG5cbi8vIGZ1c3YtZGlzYWJsZVxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1jb2xvcikgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQgaW4gNS4zLjBcbi8vIGZ1c3YtZW5hYmxlXG5cbiRpbml0aWFsaXNtLWZvbnQtc2l6ZTogICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG5cbiRibG9ja3F1b3RlLW1hcmdpbi15OiAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9vdGVyLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9vdGVyLWZvbnQtc2l6ZTogJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcblxuJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRoci1jb2xvcjogICAgICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG5cbi8vIGZ1c3YtZGlzYWJsZVxuJGhyLWJnLWNvbG9yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCBpbiB2NS4yLjBcbiRoci1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQgaW4gdjUuMi4wXG4vLyBmdXN2LWVuYWJsZVxuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBBbGxvd3MgZm9yIGluaGVyaXRlZCBjb2xvcnNcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGhyLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgLjI1ICFkZWZhdWx0O1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdnItdmFyaWFibGVzXG4kdnItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdnItdmFyaWFibGVzXG5cbiRsZWdlbmQtbWFyZ2luLWJvdHRvbTogICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGxlZ2VuZC1mb250LXNpemU6ICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGxlZ2VuZC1mb250LXdlaWdodDogICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMTg3NWVtICFkZWZhdWx0O1xuJG1hcmstY29sb3I6ICAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAkeWVsbG93LTEwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdHlwZS12YXJpYWJsZXNcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0YWJsZS12YXJpYWJsZXNcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXktc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jZWxsLXZlcnRpY2FsLWFsaWduOiAgIHRvcCAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yKSAhZGVmYXVsdDtcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWJnKSAhZGVmYXVsdDtcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kdGFibGUtdGgtZm9udC13ZWlnaHQ6ICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1jb2xvcjogICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtc3RyaXBlZC1iZy1mYWN0b3I6ICAgICAuMDUgIWRlZmF1bHQ7XG4kdGFibGUtc3RyaXBlZC1iZzogICAgICAgICAgICByZ2JhKHZhcigtLSN7JHByZWZpeH1lbXBoYXNpcy1jb2xvci1yZ2IpLCAkdGFibGUtc3RyaXBlZC1iZy1mYWN0b3IpICFkZWZhdWx0O1xuXG4kdGFibGUtYWN0aXZlLWNvbG9yOiAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnLWZhY3RvcjogICAgICAuMSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgIHJnYmEodmFyKC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yLXJnYiksICR0YWJsZS1hY3RpdmUtYmctZmFjdG9yKSAhZGVmYXVsdDtcblxuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnLWZhY3RvcjogICAgICAgLjA3NSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEodmFyKC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yLXJnYiksICR0YWJsZS1ob3Zlci1iZy1mYWN0b3IpICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLWZhY3RvcjogICAgICAgICAuMiAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcbiR0YWJsZS1zdHJpcGVkLWNvbHVtbnMtb3JkZXI6IGV2ZW4gIWRlZmF1bHQ7XG5cbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6IGN1cnJlbnRjb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1jb2xvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1zY2FsZTogICAgICAgICAgICAgIC04MCUgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRhYmxlLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGFibGUtbG9vcFxuJHRhYmxlLXZhcmlhbnRzOiAoXG4gIFwicHJpbWFyeVwiOiAgICBzaGlmdC1jb2xvcigkcHJpbWFyeSwgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJzZWNvbmRhcnlcIjogIHNoaWZ0LWNvbG9yKCRzZWNvbmRhcnksICR0YWJsZS1iZy1zY2FsZSksXG4gIFwic3VjY2Vzc1wiOiAgICBzaGlmdC1jb2xvcigkc3VjY2VzcywgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJpbmZvXCI6ICAgICAgIHNoaWZ0LWNvbG9yKCRpbmZvLCAkdGFibGUtYmctc2NhbGUpLFxuICBcIndhcm5pbmdcIjogICAgc2hpZnQtY29sb3IoJHdhcm5pbmcsICR0YWJsZS1iZy1zY2FsZSksXG4gIFwiZGFuZ2VyXCI6ICAgICBzaGlmdC1jb2xvcigkZGFuZ2VyLCAkdGFibGUtYmctc2NhbGUpLFxuICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICBcImRhcmtcIjogICAgICAgJGRhcmssXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0YWJsZS1sb29wXG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBpbnB1dC1idG4tdmFyaWFibGVzXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICRmb2N1cy1yaW5nLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvci1vcGFjaXR5OiAkZm9jdXMtcmluZy1vcGFjaXR5ICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgICAkZm9jdXMtcmluZy1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYmx1cjogICAgICAgICAgJGZvY3VzLXJpbmctYmx1ciAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogICAgJGZvY3VzLXJpbmctYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaW5wdXQtYnRuLXZhcmlhYmxlc1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJ0bi12YXJpYWJsZXNcbiRidG4tY29sb3I6ICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWNvbG9yKSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGJ0bi13aGl0ZS1zcGFjZTogICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gU2V0IHRvIGBub3dyYXBgIHRvIHByZXZlbnQgdGV4dCB3cmFwcGluZ1xuXG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcblxuJGJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoJHdoaXRlLCAuMTUpLCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIC42NSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgIGluc2V0IDAgM3B4IDVweCByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1jb2xvcjogICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1saW5rLWNvbG9yKSAhZGVmYXVsdDtcbiRidG4tbGluay1ob3Zlci1jb2xvcjogICAgICAgIHZhcigtLSN7JHByZWZpeH1saW5rLWhvdmVyLWNvbG9yKSAhZGVmYXVsdDtcbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRidG4tbGluay1mb2N1cy1zaGFkb3ctcmdiOiAgIHRvLXJnYihtaXgoY29sb3ItY29udHJhc3QoJGxpbmstY29sb3IpLCAkbGluay1jb2xvciwgMTUlKSkgIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzKSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzLXNtKSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzLWxnKSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kYnRuLWhvdmVyLWJnLXNoYWRlLWFtb3VudDogICAgICAgMTUlICFkZWZhdWx0O1xuJGJ0bi1ob3Zlci1iZy10aW50LWFtb3VudDogICAgICAgIDE1JSAhZGVmYXVsdDtcbiRidG4taG92ZXItYm9yZGVyLXNoYWRlLWFtb3VudDogICAyMCUgIWRlZmF1bHQ7XG4kYnRuLWhvdmVyLWJvcmRlci10aW50LWFtb3VudDogICAgMTAlICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYmctc2hhZGUtYW1vdW50OiAgICAgIDIwJSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJnLXRpbnQtYW1vdW50OiAgICAgICAyMCUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3JkZXItc2hhZGUtYW1vdW50OiAgMjUlICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm9yZGVyLXRpbnQtYW1vdW50OiAgIDEwJSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYnRuLXZhcmlhYmxlc1xuXG5cbi8vIEZvcm1zXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXRleHQtdmFyaWFibGVzXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tdGV4dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS10ZXh0LWZvbnQtc3R5bGU6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLXRleHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tdGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1zZWNvbmRhcnktY29sb3IpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXRleHQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWxhYmVsLXZhcmlhYmxlc1xuJGZvcm0tbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1sYWJlbC1mb250LXN0eWxlOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tbGFiZWwtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWlucHV0LXZhcmlhYmxlc1xuJGlucHV0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9keS1iZykgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9c2Vjb25kYXJ5LWJnKSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3gtc2hhZG93LWluc2V0KSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzKSAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cy1zbSkgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1yYWRpdXMtbGcpICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHRpbnQtY29sb3IoJGNvbXBvbmVudC1hY3RpdmUtYmcsIDUwJSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1jb2xvcikgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1ib3JkZXItd2lkdGh9ICogMikgIWRlZmF1bHQ7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAqIC41KSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15ICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuXG4kaW5wdXQtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tY29sb3Itd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0taW5wdXQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWNoZWNrLXZhcmlhYmxlc1xuJGZvcm0tY2hlY2staW5wdXQtd2lkdGg6ICAgICAgICAgICAgICAgICAgMWVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbWluLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1wYWRkaW5nLXN0YXJ0OiAgICAgICAgICAgICAgICAkZm9ybS1jaGVjay1pbnB1dC13aWR0aCArIC41ZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWxhYmVsLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1hY3RpdmUtZmlsdGVyOiAgICAgICAgICBicmlnaHRuZXNzKDkwJSkgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWJvcmRlcjogICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1yYWRpby1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1mb2N1cy1ib3JkZXI6ICAgICAgICAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGZvY3VzLXJpbmctYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1jb2xvcjogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAgICRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWltYWdlOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nbTYgMTAgMyAzIDYtNicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXJhZGlvLWNoZWNrZWQtYmctaW1hZ2U6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzInIGZpbGw9JyN7JGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogICAkZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJnLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1pbWFnZTogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzMnIGQ9J002IDEwaDgnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWxhYmVsLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAkZm9ybS1jaGVjay1pbnB1dC1kaXNhYmxlZC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stYnRuLWNoZWNrLWRpc2FibGVkLW9wYWNpdHk6ICAgICRidG4tZGlzYWJsZWQtb3BhY2l0eSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi1lbmQ6ICAgIDFyZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tY2hlY2stdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXN3aXRjaC12YXJpYWJsZXNcbiRmb3JtLXN3aXRjaC1jb2xvcjogICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAyZW0gIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtcGFkZGluZy1zdGFydDogICAgICAgJGZvcm0tc3dpdGNoLXdpZHRoICsgLjVlbSAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC1iZy1pbWFnZTogICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRmb3JtLXN3aXRjaC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtYm9yZGVyLXJhZGl1czogICAgICAgJGZvcm0tc3dpdGNoLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLXRyYW5zaXRpb246ICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tc3dpdGNoLWZvY3VzLWNvbG9yOiAgICAgICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtZm9jdXMtYmctaW1hZ2U6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skZm9ybS1zd2l0Y2gtZm9jdXMtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1zd2l0Y2gtY2hlY2tlZC1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtY2hlY2tlZC1iZy1pbWFnZTogICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skZm9ybS1zd2l0Y2gtY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtY2hlY2tlZC1iZy1wb3NpdGlvbjogcmlnaHQgY2VudGVyICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXN3aXRjaC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGlucHV0LWdyb3VwLXZhcmlhYmxlc1xuJGlucHV0LWdyb3VwLWFkZG9uLXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tcGFkZGluZy14OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1mb250LXdlaWdodDogICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH10ZXJ0aWFyeS1iZykgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaW5wdXQtZ3JvdXAtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXNlbGVjdC12YXJpYWJsZXNcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAgICRmb3JtLXNlbGVjdC1wYWRkaW5nLXggKiAzICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIGZvciBiYWNrZ3JvdW5kLWltYWdlXG4kZm9ybS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1iZy1wb3NpdGlvbjogICAgICAgICAgIHJpZ2h0ICRmb3JtLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgICAgMTZweCAxMnB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kZm9ybS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nbTIgNSA2IDYgNi02Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLWVuZDogJGZvcm0tc2VsZWN0LXBhZGRpbmcteCAqIDIuNSArICRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICBjZW50ZXIgcmlnaHQgJGZvcm0tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJveC1zaGFkb3ctaW5zZXQpICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogICAgMCAwIDAgJGZvcm0tc2VsZWN0LWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LXBhZGRpbmcteC1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1ib3JkZXItcmFkaXVzLXNtOiAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LXBhZGRpbmcteS1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1mb250LXNpemUtbGc6ICAgICAgICAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJvcmRlci1yYWRpdXMtbGc6ICAgICRpbnB1dC1ib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtdHJhbnNpdGlvbjogICAgICAgICAgJGlucHV0LXRyYW5zaXRpb24gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tc2VsZWN0LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1yYW5nZS12YXJpYWJsZXNcbiRmb3JtLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1iZykgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICB2YXIoLS0jeyRwcmVmaXh9Ym94LXNoYWRvdy1pbnNldCkgIWRlZmF1bHQ7XG5cbiRmb3JtLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRmb3JtLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBFZGdlXG4kZm9ybS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgdGludC1jb2xvcigkY29tcG9uZW50LWFjdGl2ZS1iZywgNzAlKSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9c2Vjb25kYXJ5LWNvbG9yKSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLXRyYW5zaXRpb246ICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tcmFuZ2UtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWZpbGUtdmFyaWFibGVzXG4kZm9ybS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH10ZXJ0aWFyeS1iZykgIWRlZmF1bHQ7XG4kZm9ybS1maWxlLWJ1dHRvbi1ob3Zlci1iZzogICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1iZykgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tZmlsZS12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tZmxvYXRpbmctdmFyaWFibGVzXG4kZm9ybS1mbG9hdGluZy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgYWRkKDMuNXJlbSwgJGlucHV0LWhlaWdodC1ib3JkZXIpICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctbGluZS1oZWlnaHQ6ICAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLXBhZGRpbmcteTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy10OiAgICAgICAgIDEuNjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy1iOiAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1sYWJlbC1oZWlnaHQ6ICAgICAgICAgICAgMS41ZW0gIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1sYWJlbC1vcGFjaXR5OiAgICAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctbGFiZWwtdHJhbnNmb3JtOiAgICAgICAgIHNjYWxlKC44NSkgdHJhbnNsYXRlWSgtLjVyZW0pIHRyYW5zbGF0ZVgoLjE1cmVtKSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgb3BhY2l0eSAuMXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tZmxvYXRpbmctdmFyaWFibGVzXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1mZWVkYmFjay12YXJpYWJsZXNcbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRmb3JtLXRleHQtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zdHlsZTogICAgICAgICAgJGZvcm0tdGV4dC1mb250LXN0eWxlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICAkZGFuZ2VyICFkZWZhdWx0O1xuXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDEyJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9Jz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgc3Ryb2tlPSdub25lJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWZlZWRiYWNrLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS12YWxpZGF0aW9uLWNvbG9yc1xuJGZvcm0tdmFsaWQtY29sb3I6ICAgICAgICAgICAgICAgICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS12YWxpZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWludmFsaWQtY29sb3I6ICAgICAgICAgICAgICAgICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1pbnZhbGlkLWJvcmRlci1jb2xvcjogICAgICAgICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXZhbGlkYXRpb24tY29sb3JzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKFxuICBcInZhbGlkXCI6IChcbiAgICBcImNvbG9yXCI6IHZhcigtLSN7JHByZWZpeH1mb3JtLXZhbGlkLWNvbG9yKSxcbiAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZCxcbiAgICBcInRvb2x0aXAtY29sb3JcIjogI2ZmZixcbiAgICBcInRvb2x0aXAtYmctY29sb3JcIjogdmFyKC0tI3skcHJlZml4fXN1Y2Nlc3MpLFxuICAgIFwiZm9jdXMtYm94LXNoYWRvd1wiOiAwIDAgJGlucHV0LWJ0bi1mb2N1cy1ibHVyICRpbnB1dC1mb2N1cy13aWR0aCByZ2JhKHZhcigtLSN7JHByZWZpeH1zdWNjZXNzLXJnYiksICRpbnB1dC1idG4tZm9jdXMtY29sb3Itb3BhY2l0eSksXG4gICAgXCJib3JkZXItY29sb3JcIjogdmFyKC0tI3skcHJlZml4fWZvcm0tdmFsaWQtYm9yZGVyLWNvbG9yKSxcbiAgKSxcbiAgXCJpbnZhbGlkXCI6IChcbiAgICBcImNvbG9yXCI6IHZhcigtLSN7JHByZWZpeH1mb3JtLWludmFsaWQtY29sb3IpLFxuICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQsXG4gICAgXCJ0b29sdGlwLWNvbG9yXCI6ICNmZmYsXG4gICAgXCJ0b29sdGlwLWJnLWNvbG9yXCI6IHZhcigtLSN7JHByZWZpeH1kYW5nZXIpLFxuICAgIFwiZm9jdXMtYm94LXNoYWRvd1wiOiAwIDAgJGlucHV0LWJ0bi1mb2N1cy1ibHVyICRpbnB1dC1mb2N1cy13aWR0aCByZ2JhKHZhcigtLSN7JHByZWZpeH1kYW5nZXItcmdiKSwgJGlucHV0LWJ0bi1mb2N1cy1jb2xvci1vcGFjaXR5KSxcbiAgICBcImJvcmRlci1jb2xvclwiOiB2YXIoLS0jeyRwcmVmaXh9Zm9ybS1pbnZhbGlkLWJvcmRlci1jb2xvciksXG4gIClcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgemluZGV4LXN0YWNrXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW9mZmNhbnZhcy1iYWNrZHJvcDogICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1vZmZjYW52YXM6ICAgICAgICAgICAgICAgICAgMTA0NSAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDU1ICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwODAgIWRlZmF1bHQ7XG4kemluZGV4LXRvYXN0OiAgICAgICAgICAgICAgICAgICAgICAxMDkwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB6aW5kZXgtc3RhY2tcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHppbmRleC1sZXZlbHMtbWFwXG4kemluZGV4LWxldmVsczogKFxuICBuMTogLTEsXG4gIDA6IDAsXG4gIDE6IDEsXG4gIDI6IDIsXG4gIDM6IDNcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHppbmRleC1sZXZlbHMtbWFwXG5cblxuLy8gTmF2c1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2LXZhcmlhYmxlc1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRuYXYtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbmF2LWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9bGluay1jb2xvcikgIWRlZmF1bHQ7XG4kbmF2LWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9bGluay1ob3Zlci1jb2xvcikgIWRlZmF1bHQ7XG4kbmF2LWxpbmstdHJhbnNpdGlvbjogICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1jb2xvcikgIWRlZmF1bHQ7XG4kbmF2LWxpbmstZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAkZm9jdXMtcmluZy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1yYWRpdXMpICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1iZykgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1iZykgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgIHZhcigtLSN7JHByZWZpeH1lbXBoYXNpcy1jb2xvcikgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9keS1iZykgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yKSB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yKSAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzKSAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtdW5kZXJsaW5lLWdhcDogICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LXVuZGVybGluZS1ib3JkZXItd2lkdGg6ICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJG5hdi11bmRlcmxpbmUtbGluay1hY3RpdmUtY29sb3I6ICAgdmFyKC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbmF2LXZhcmlhYmxlc1xuXG5cbi8vIE5hdmJhclxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2YmFyLXZhcmlhYmxlc1xuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgKiAuNSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtbWFyZ2luLWVuZDogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9jdXMtd2lkdGg6ICAgICAgICAkYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXRyYW5zaXRpb246ICAgICAgICAgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKHZhcigtLSN7JHByZWZpeH1lbXBoYXNpcy1jb2xvci1yZ2IpLCAuNjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSh2YXIoLS0jeyRwcmVmaXh9ZW1waGFzaXMtY29sb3ItcmdiKSwgLjgpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSh2YXIoLS0jeyRwcmVmaXh9ZW1waGFzaXMtY29sb3ItcmdiKSwgMSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKHZhcigtLSN7JHByZWZpeH1lbXBoYXNpcy1jb2xvci1yZ2IpLCAuMykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWljb24tY29sb3I6ICAgICAgICAgICByZ2JhKCRib2R5LWNvbG9yLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWljb24tY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yLXJnYiksIC4xNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBuYXZiYXItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBuYXZiYXItZGFyay12YXJpYWJsZXNcbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNTUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1pY29uLWNvbG9yOiAgICAgICAgICAgICRuYXZiYXItZGFyay1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWljb24tY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbmF2YmFyLWRhcmstdmFyaWFibGVzXG5cblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZHJvcGRvd24tdmFyaWFibGVzXG4kZHJvcGRvd24tbWluLXdpZHRoOiAgICAgICAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6ICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29sb3I6ICAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9keS1jb2xvcikgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYmc6ICAgICAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9keS1iZykgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgY2FsYygjeyRkcm9wZG93bi1ib3JkZXItcmFkaXVzfSAtICN7JGRyb3Bkb3duLWJvcmRlci13aWR0aH0pICFkZWZhdWx0OyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgJGRyb3Bkb3duLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3gtc2hhZG93KSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJGRyb3Bkb3duLWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9dGVydGlhcnktYmcpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICB2YXIoLS0jeyRwcmVmaXh9dGVydGlhcnktY29sb3IpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAkc3BhY2VyICogLjI1ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgJGRyb3Bkb3duLXBhZGRpbmcteSAhZGVmYXVsdDtcbi8vIGZ1c3YtZGlzYWJsZVxuJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXkgJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQgaW4gdjUuMi4wXG4vLyBmdXN2LWVuYWJsZVxuLy8gc2Nzcy1kb2NzLWVuZCBkcm9wZG93bi12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGRyb3Bkb3duLWRhcmstdmFyaWFibGVzXG4kZHJvcGRvd24tZGFyay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1iZzogICAgICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1ib3JkZXItY29sb3I6ICAgICAgICAkZHJvcGRvd24tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstZGl2aWRlci1iZzogICAgICAgICAgJGRyb3Bkb3duLWRpdmlkZXItYmcgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1ib3gtc2hhZG93OiAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1jb2xvcjogICAgICAgICAgJGRyb3Bkb3duLWRhcmstY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWhvdmVyLWNvbG9yOiAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWhvdmVyLWJnOiAgICAgICByZ2JhKCR3aGl0ZSwgLjE1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstYWN0aXZlLWNvbG9yOiAgICRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstYWN0aXZlLWJnOiAgICAgICRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstZGlzYWJsZWQtY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWhlYWRlci1jb2xvcjogICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZHJvcGRvd24tZGFyay12YXJpYWJsZXNcblxuXG4vLyBQYWdpbmF0aW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwYWdpbmF0aW9uLXZhcmlhYmxlc1xuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb250LXNpemU6ICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1saW5rLWNvbG9yKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWJnKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbWFyZ2luLXN0YXJ0OiAgICAgICAgICAgY2FsYygjeyRwYWdpbmF0aW9uLWJvcmRlci13aWR0aH0gKiAtMSkgIWRlZmF1bHQ7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtY29sb3I6ICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstaG92ZXItY29sb3IpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtYmc6ICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1iZykgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkZm9jdXMtcmluZy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstaG92ZXItY29sb3IpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fXRlcnRpYXJ5LWJnKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3IpICFkZWZhdWx0OyAvLyBUb2RvIGluIHY2OiByZW1vdmUgdGhpcz9cblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICB2YXIoLS0jeyRwcmVmaXh9c2Vjb25kYXJ5LWNvbG9yKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1zZWNvbmRhcnktYmcpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtc206ICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzLXNtKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzLWxnKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgcGFnaW5hdGlvbi12YXJpYWJsZXNcblxuXG4vLyBQbGFjZWhvbGRlcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHBsYWNlaG9sZGVyc1xuJHBsYWNlaG9sZGVyLW9wYWNpdHktbWF4OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kcGxhY2Vob2xkZXItb3BhY2l0eS1taW46ICAgICAgICAgICAuMiAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgcGxhY2Vob2xkZXJzXG5cbi8vIENhcmRzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjYXJkLXZhcmlhYmxlc1xuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kY2FyZC10aXRsZS1zcGFjZXIteTogICAgICAgICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kY2FyZC10aXRsZS1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtc3VidGl0bGUtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCkgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cykgIWRlZmF1bHQ7XG4kY2FyZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgc3VidHJhY3QoJGNhcmQtYm9yZGVyLXJhZGl1cywgJGNhcmQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICogLjUgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteCAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEodmFyKC0tI3skcHJlZml4fWJvZHktY29sb3ItcmdiKSwgLjAzKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWJnKSAhZGVmYXVsdDtcbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggKiAuNSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2FyZC12YXJpYWJsZXNcblxuLy8gQWNjb3JkaW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBhY2NvcmRpb24tdmFyaWFibGVzXG4kYWNjb3JkaW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFjY29yZGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWNvbG9yKSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWJnKSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cykgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICBzdWJ0cmFjdCgkYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMsICRhY2NvcmRpb24tYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1idXR0b24tcGFkZGluZy15OiAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAkYWNjb3JkaW9uLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWNvbG9yOiAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWNvbG9yKSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWJnOiAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tYmcpICFkZWZhdWx0O1xuJGFjY29yZGlvbi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uLCBib3JkZXItcmFkaXVzIC4xNXMgZWFzZSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1wcmltYXJ5LWJnLXN1YnRsZSkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9cHJpbWFyeS10ZXh0LWVtcGhhc2lzKSAhZGVmYXVsdDtcblxuLy8gZnVzdi1kaXNhYmxlXG4kYWNjb3JkaW9uLWJ1dHRvbi1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIHY1LjMuM1xuLy8gZnVzdi1lbmFibGVcbiRhY2NvcmRpb24tYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRidG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1pY29uLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pY29uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgJHByaW1hcnktdGV4dC1lbXBoYXNpcyAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWljb24tdHJhbnNmb3JtOiAgICAgICAgICAgICAgICByb3RhdGUoLTE4MGRlZykgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYnV0dG9uLWljb246ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skYWNjb3JkaW9uLWljb24tY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnPjxwYXRoIGQ9J00yIDVMOCAxMUwxNCA1Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWljb246ICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRhY2NvcmRpb24taWNvbi1hY3RpdmUtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnPjxwYXRoIGQ9J00yIDVMOCAxMUwxNCA1Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBhY2NvcmRpb24tdmFyaWFibGVzXG5cbi8vIFRvb2x0aXBzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0b29sdGlwLXZhcmlhYmxlc1xuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktYmcpICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yKSAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzKSAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAqIC4yNSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIFRPRE86IHJlbW92ZSB0aGlzIGluIHY2XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4vLyBmdXN2LWRpc2FibGVcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQgaW4gQm9vdHN0cmFwIDUuMi4wIGZvciBDU1MgdmFyaWFibGVzXG4vLyBmdXN2LWVuYWJsZVxuLy8gc2Nzcy1kb2NzLWVuZCB0b29sdGlwLXZhcmlhYmxlc1xuXG4vLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdG9vbHRpcC1mZWVkYmFjay12YXJpYWJsZXNcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdG9vbHRpcC1mZWVkYmFjay12YXJpYWJsZXNcblxuXG4vLyBQb3BvdmVyc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgcG9wb3Zlci12YXJpYWJsZXNcbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9keS1iZykgIWRlZmF1bHQ7XG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cy1sZykgIWRlZmF1bHQ7XG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICBjYWxjKCN7JHBvcG92ZXItYm9yZGVyLXJhZGl1c30gLSAjeyRwb3BvdmVyLWJvcmRlci13aWR0aH0pICFkZWZhdWx0OyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJveC1zaGFkb3cpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9c2Vjb25kYXJ5LWJnKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgcG9wb3Zlci12YXJpYWJsZXNcblxuLy8gZnVzdi1kaXNhYmxlXG4vLyBEZXByZWNhdGVkIGluIEJvb3RzdHJhcCA1LjIuMCBmb3IgQ1NTIHZhcmlhYmxlc1xuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KSAhZGVmYXVsdDtcbi8vIGZ1c3YtZW5hYmxlXG5cblxuLy8gVG9hc3RzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0b2FzdC12YXJpYWJsZXNcbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEodmFyKC0tI3skcHJlZml4fWJvZHktYmctcmdiKSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cykgIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym94LXNoYWRvdykgIWRlZmF1bHQ7XG4kdG9hc3Qtc3BhY2luZzogICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1jb2xvcikgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKHZhcigtLSN7JHByZWZpeH1ib2R5LWJnLXJnYiksIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkdG9hc3QtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0b2FzdC12YXJpYWJsZXNcblxuXG4vLyBCYWRnZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJhZGdlLXZhcmlhYmxlc1xuJGJhZGdlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjc1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4zNWVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjY1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cykgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJhZGdlLXZhcmlhYmxlc1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbW9kYWwtdmFyaWFibGVzXG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWJnKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLXJhZGl1cy1sZykgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdCgkbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzLCAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgdmFyKC0tI3skcHJlZml4fWJveC1zaGFkb3ctc20pICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgdmFyKC0tI3skcHJlZml4fWJveC1zaGFkb3cpICFkZWZhdWx0O1xuXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICAuNSAhZGVmYXVsdDtcblxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuJG1vZGFsLWZvb3Rlci1iZzogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG1vZGFsLXZhcmlhYmxlc1xuXG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYWxlcnQtdmFyaWFibGVzXG4kYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzKSAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGFsZXJ0LWRpc21pc3NpYmxlLXBhZGRpbmctcjogICAkYWxlcnQtcGFkZGluZy14ICogMyAhZGVmYXVsdDsgLy8gM3ggY292ZXJzIHdpZHRoIG9mIHggcGx1cyBkZWZhdWx0IHBhZGRpbmcgb24gZWl0aGVyIHNpZGVcbi8vIHNjc3MtZG9jcy1lbmQgYWxlcnQtdmFyaWFibGVzXG5cbi8vIGZ1c3YtZGlzYWJsZVxuJGFsZXJ0LWJnLXNjYWxlOiAgICAgICAgICAgICAgICAtODAlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIHY1LjIuMCwgdG8gYmUgcmVtb3ZlZCBpbiB2NlxuJGFsZXJ0LWJvcmRlci1zY2FsZTogICAgICAgICAgICAtNzAlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIHY1LjIuMCwgdG8gYmUgcmVtb3ZlZCBpbiB2NlxuJGFsZXJ0LWNvbG9yLXNjYWxlOiAgICAgICAgICAgICA0MCUgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQgaW4gdjUuMi4wLCB0byBiZSByZW1vdmVkIGluIHY2XG4vLyBmdXN2LWVuYWJsZVxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwcm9ncmVzcy12YXJpYWJsZXNcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9c2Vjb25kYXJ5LWJnKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3gtc2hhZG93LWluc2V0KSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHByb2dyZXNzLXZhcmlhYmxlc1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGxpc3QtZ3JvdXAtdmFyaWFibGVzXG4kbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9keS1jb2xvcikgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9keS1iZykgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1yYWRpdXMpICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuLy8gZnVzdi1kaXNhYmxlXG4kbGlzdC1ncm91cC1pdGVtLWJnLXNjYWxlOiAgICAgICAgICAtODAlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIHY1LjMuMFxuJGxpc3QtZ3JvdXAtaXRlbS1jb2xvci1zY2FsZTogICAgICAgNDAlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIHY1LjMuMFxuLy8gZnVzdi1lbmFibGVcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fXRlcnRpYXJ5LWJnKSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgIHZhcigtLSN7JHByZWZpeH1zZWNvbmRhcnktY29sb3IpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1zZWNvbmRhcnktY29sb3IpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgdmFyKC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yKSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1iZykgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGxpc3QtZ3JvdXAtdmFyaWFibGVzXG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGh1bWJuYWlsLXZhcmlhYmxlc1xuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktYmcpICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItcmFkaXVzKSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3gtc2hhZG93LXNtKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGh1bWJuYWlsLXZhcmlhYmxlc1xuXG5cbi8vIEZpZ3VyZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZpZ3VyZS12YXJpYWJsZXNcbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9c2Vjb25kYXJ5LWNvbG9yKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZmlndXJlLXZhcmlhYmxlc1xuXG5cbi8vIEJyZWFkY3J1bWJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBicmVhZGNydW1iLXZhcmlhYmxlc1xuJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1zZWNvbmRhcnktY29sb3IpICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fXNlY29uZGFyeS1jb2xvcikgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWZsaXBwZWQ6ICAgICAgICAkYnJlYWRjcnVtYi1kaXZpZGVyICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYnJlYWRjcnVtYi12YXJpYWJsZXNcblxuLy8gQ2Fyb3VzZWxcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNhcm91c2VsLXZhcmlhYmxlc1xuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itb3BhY2l0eTogICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1vcGFjaXR5OiAgMSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLXBhZGRpbmcteTogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tc3BhY2VyOiAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAycmVtICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9Jz48cGF0aCBkPSdNMTEuMzU0IDEuNjQ2YS41LjUgMCAwIDEgMCAuNzA4TDUuNzA3IDhsNS42NDcgNS42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtNi02YS41LjUgMCAwIDEgMC0uNzA4bDYtNmEuNS41IDAgMCAxIC43MDggMHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9Jz48cGF0aCBkPSdNNC42NDYgMS42NDZhLjUuNSAwIDAgMSAuNzA4IDBsNiA2YS41LjUgMCAwIDEgMCAuNzA4bC02IDZhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTAuMjkzIDggNC42NDYgMi4zNTRhLjUuNSAwIDAgMSAwLS43MDh6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcbi8vIHNjc3MtZG9jcy1lbmQgY2Fyb3VzZWwtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjYXJvdXNlbC1kYXJrLXZhcmlhYmxlc1xuJGNhcm91c2VsLWRhcmstaW5kaWNhdG9yLWFjdGl2ZS1iZzogICRibGFjayAhZGVmYXVsdDtcbiRjYXJvdXNlbC1kYXJrLWNhcHRpb24tY29sb3I6ICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtZGFyay1jb250cm9sLWljb24tZmlsdGVyOiAgaW52ZXJ0KDEpIGdyYXlzY2FsZSgxMDApICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJvdXNlbC1kYXJrLXZhcmlhYmxlc1xuXG5cbi8vIFNwaW5uZXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBzcGlubmVyLXZhcmlhYmxlc1xuJHNwaW5uZXItd2lkdGg6ICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLXZlcnRpY2FsLWFsaWduOiAgLS4xMjVlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogICAgLjI1ZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1hbmltYXRpb24tc3BlZWQ6IC43NXMgIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHNwaW5uZXItdmFyaWFibGVzXG5cblxuLy8gQ2xvc2VcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNsb3NlLXZhcmlhYmxlc1xuJGJ0bi1jbG9zZS13aWR0aDogICAgICAgICAgICAxZW0gIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWhlaWdodDogICAgICAgICAgICRidG4tY2xvc2Utd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLXBhZGRpbmcteDogICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1wYWRkaW5nLXk6ICAgICAgICAkYnRuLWNsb3NlLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tY2xvc2UtY29sb3I6ICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1iZzogICAgICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skYnRuLWNsb3NlLWNvbG9yfSc+PHBhdGggZD0nTS4yOTMuMjkzYTEgMSAwIDAgMSAxLjQxNCAwTDggNi41ODYgMTQuMjkzLjI5M2ExIDEgMCAxIDEgMS40MTQgMS40MTRMOS40MTQgOGw2LjI5MyA2LjI5M2ExIDEgMCAwIDEtMS40MTQgMS40MTRMOCA5LjQxNGwtNi4yOTMgNi4yOTNhMSAxIDAgMCAxLTEuNDE0LTEuNDE0TDYuNTg2IDggLjI5MyAxLjcwN2ExIDEgMCAwIDEgMC0xLjQxNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWZvY3VzLXNoYWRvdzogICAgICRmb2N1cy1yaW5nLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLW9wYWNpdHk6ICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1ob3Zlci1vcGFjaXR5OiAgICAuNzUgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWZvY3VzLW9wYWNpdHk6ICAgIDEgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWRpc2FibGVkLW9wYWNpdHk6IC4yNSAhZGVmYXVsdDtcbiRidG4tY2xvc2Utd2hpdGUtZmlsdGVyOiAgICAgaW52ZXJ0KDEpIGdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDIwMCUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjbG9zZS12YXJpYWJsZXNcblxuXG4vLyBPZmZjYW52YXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG9mZmNhbnZhcy12YXJpYWJsZXNcbiRvZmZjYW52YXMtcGFkZGluZy15OiAgICAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJG1vZGFsLWlubmVyLXBhZGRpbmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWhvcml6b250YWwtd2lkdGg6ICAgICAgICA0MDBweCAhZGVmYXVsdDtcbiRvZmZjYW52YXMtdmVydGljYWwtaGVpZ2h0OiAgICAgICAgIDMwdmggIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAuM3MgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJvcmRlci13aWR0aDogICAgICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAkbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJnLWNvbG9yOiAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9keS1iZykgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWNvbG9yOiAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9keS1jb2xvcikgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1iYWNrZHJvcC1iZzogICAgICAgICAgICAgJG1vZGFsLWJhY2tkcm9wLWJnICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG9mZmNhbnZhcy12YXJpYWJsZXNcblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4xODc1cmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWJnKSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWNvbG9yKSAhZGVmYXVsdDtcbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQgaW4gdjUuMi4wLCByZW1vdmluZyBpbiB2NlxuXG4kcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG5AaW1wb3J0IFwidmFyaWFibGVzLWRhcmtcIjsgLy8gVE9ETzogY2FuIGJlIHJlbW92ZWQgc2FmZWx5IGluIHY2LCBvbmx5IGhlcmUgdG8gYXZvaWQgYnJlYWtpbmcgY2hhbmdlcyBpbiB2NS4zXG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcm9wZXJ0eS1kaXNhbGxvd2VkLWxpc3Rcbi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJlcGxhY2UgbmVnYXRpdmUgdmFsdWVzIHdpdGggMFxuQGZ1bmN0aW9uIHZhbGlkLXJhZGl1cygkcmFkaXVzKSB7XG4gICRyZXR1cm46ICgpO1xuICBAZWFjaCAkdmFsdWUgaW4gJHJhZGl1cyB7XG4gICAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBudW1iZXIge1xuICAgICAgJHJldHVybjogYXBwZW5kKCRyZXR1cm4sIG1heCgkdmFsdWUsIDApKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRyZXR1cm46IGFwcGVuZCgkcmV0dXJuLCAkdmFsdWUpO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRyZXR1cm47XG59XG5cbi8vIHNjc3MtZG9jcy1zdGFydCBib3JkZXItcmFkaXVzLW1peGluc1xuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogJGJvcmRlci1yYWRpdXMsICRmYWxsYmFjay1ib3JkZXItcmFkaXVzOiBmYWxzZSkge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gIH1cbiAgQGVsc2UgaWYgJGZhbGxiYWNrLWJvcmRlci1yYWRpdXMgIT0gZmFsc2Uge1xuICAgIGJvcmRlci1yYWRpdXM6ICRmYWxsYmFjay1ib3JkZXItcmFkaXVzO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXJhZGl1cygkcmFkaXVzOiAkYm9yZGVyLXJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLWVuZC1yYWRpdXMoJHJhZGl1czogJGJvcmRlci1yYWRpdXMpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzOiAkYm9yZGVyLXJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLXN0YXJ0LXJhZGl1cygkcmFkaXVzOiAkYm9yZGVyLXJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItdG9wLXN0YXJ0LXJhZGl1cygkcmFkaXVzOiAkYm9yZGVyLXJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gIH1cbn1cblxuQG1peGluIGJvcmRlci10b3AtZW5kLXJhZGl1cygkcmFkaXVzOiAkYm9yZGVyLXJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWVuZC1yYWRpdXMoJHJhZGl1czogJGJvcmRlci1yYWRpdXMpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1zdGFydC1yYWRpdXMoJHJhZGl1czogJGJvcmRlci1yYWRpdXMpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG4vLyBzY3NzLWRvY3MtZW5kIGJvcmRlci1yYWRpdXMtbWl4aW5zXG4iLCIvL1xuLy8gSGVhZGluZ3Ncbi8vXG4uaDEge1xuICBAZXh0ZW5kIGgxO1xufVxuXG4uaDIge1xuICBAZXh0ZW5kIGgyO1xufVxuXG4uaDMge1xuICBAZXh0ZW5kIGgzO1xufVxuXG4uaDQge1xuICBAZXh0ZW5kIGg0O1xufVxuXG4uaDUge1xuICBAZXh0ZW5kIGg1O1xufVxuXG4uaDYge1xuICBAZXh0ZW5kIGg2O1xufVxuXG5cbi5sZWFkIHtcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRsZWFkLWZvbnQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0OiAkbGVhZC1mb250LXdlaWdodDtcbn1cblxuLy8gVHlwZSBkaXNwbGF5IGNsYXNzZXNcbkBlYWNoICRkaXNwbGF5LCAkZm9udC1zaXplIGluICRkaXNwbGF5LWZvbnQtc2l6ZXMge1xuICAuZGlzcGxheS0jeyRkaXNwbGF5fSB7XG4gICAgQGluY2x1ZGUgZm9udC1zaXplKCRmb250LXNpemUpO1xuICAgIGZvbnQtZmFtaWx5OiAkZGlzcGxheS1mb250LWZhbWlseTtcbiAgICBmb250LXN0eWxlOiAkZGlzcGxheS1mb250LXN0eWxlO1xuICAgIGZvbnQtd2VpZ2h0OiAkZGlzcGxheS1mb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGRpc3BsYXktbGluZS1oZWlnaHQ7XG4gIH1cbn1cblxuLy9cbi8vIEVtcGhhc2lzXG4vL1xuLnNtYWxsIHtcbiAgQGV4dGVuZCBzbWFsbDtcbn1cblxuLm1hcmsge1xuICBAZXh0ZW5kIG1hcms7XG59XG5cbi8vXG4vLyBMaXN0c1xuLy9cblxuLmxpc3QtdW5zdHlsZWQge1xuICBAaW5jbHVkZSBsaXN0LXVuc3R5bGVkKCk7XG59XG5cbi8vIElubGluZSB0dXJucyBsaXN0IGl0ZW1zIGludG8gaW5saW5lLWJsb2NrXG4ubGlzdC1pbmxpbmUge1xuICBAaW5jbHVkZSBsaXN0LXVuc3R5bGVkKCk7XG59XG4ubGlzdC1pbmxpbmUtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogJGxpc3QtaW5saW5lLXBhZGRpbmc7XG4gIH1cbn1cblxuXG4vL1xuLy8gTWlzY1xuLy9cblxuLy8gQnVpbGRzIG9uIGBhYmJyYFxuLmluaXRpYWxpc20ge1xuICBAaW5jbHVkZSBmb250LXNpemUoJGluaXRpYWxpc20tZm9udC1zaXplKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLy8gQmxvY2txdW90ZXNcbi5ibG9ja3F1b3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogJGJsb2NrcXVvdGUtbWFyZ2luLXk7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkYmxvY2txdW90ZS1mb250LXNpemUpO1xuXG4gID4gOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLmJsb2NrcXVvdGUtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogLSRibG9ja3F1b3RlLW1hcmdpbi15O1xuICBtYXJnaW4tYm90dG9tOiAkYmxvY2txdW90ZS1tYXJnaW4teTtcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRibG9ja3F1b3RlLWZvb3Rlci1mb250LXNpemUpO1xuICBjb2xvcjogJGJsb2NrcXVvdGUtZm9vdGVyLWNvbG9yO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMTRcXDAwQTBcIjsgLy8gZW0gZGFzaCwgbmJzcFxuICB9XG59XG4iLCIvLyBMaXN0c1xuXG4vLyBVbnN0eWxlZCBrZWVwcyBsaXN0IGl0ZW1zIGJsb2NrIGxldmVsLCBqdXN0IHJlbW92ZXMgZGVmYXVsdCBicm93c2VyIHBhZGRpbmcgYW5kIGxpc3Qtc3R5bGVcbkBtaXhpbiBsaXN0LXVuc3R5bGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuIiwiLy8gUmVzcG9uc2l2ZSBpbWFnZXMgKGVuc3VyZSBpbWFnZXMgZG9uJ3Qgc2NhbGUgYmV5b25kIHRoZWlyIHBhcmVudHMpXG4vL1xuLy8gVGhpcyBpcyBwdXJwb3NlZnVsbHkgb3B0LWluIHZpYSBhbiBleHBsaWNpdCBjbGFzcyByYXRoZXIgdGhhbiBiZWluZyB0aGUgZGVmYXVsdCBmb3IgYWxsIGA8aW1nPmBzLlxuLy8gV2UgcHJldmlvdXNseSB0cmllZCB0aGUgXCJpbWFnZXMgYXJlIHJlc3BvbnNpdmUgYnkgZGVmYXVsdFwiIGFwcHJvYWNoIGluIEJvb3RzdHJhcCB2Mixcbi8vIGFuZCBhYmFuZG9uZWQgaXQgaW4gQm9vdHN0cmFwIHYzIGJlY2F1c2UgaXQgYnJlYWtzIGxvdHMgb2YgdGhpcmQtcGFydHkgd2lkZ2V0cyAoaW5jbHVkaW5nIEdvb2dsZSBNYXBzKVxuLy8gd2hpY2ggd2VyZW4ndCBleHBlY3RpbmcgdGhlIGltYWdlcyB3aXRoaW4gdGhlbXNlbHZlcyB0byBiZSBpbnZvbHVudGFyaWx5IHJlc2l6ZWQuXG4vLyBTZWUgYWxzbyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzE4MTc4XG4uaW1nLWZsdWlkIHtcbiAgQGluY2x1ZGUgaW1nLWZsdWlkKCk7XG59XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAkdGh1bWJuYWlsLXBhZGRpbmc7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0aHVtYm5haWwtYmc7XG4gIGJvcmRlcjogJHRodW1ibmFpbC1ib3JkZXItd2lkdGggc29saWQgJHRodW1ibmFpbC1ib3JkZXItY29sb3I7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzKTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygkdGh1bWJuYWlsLWJveC1zaGFkb3cpO1xuXG4gIC8vIEtlZXAgdGhlbSBhdCBtb3N0IDEwMCUgd2lkZVxuICBAaW5jbHVkZSBpbWctZmx1aWQoKTtcbn1cblxuLy9cbi8vIEZpZ3VyZXNcbi8vXG5cbi5maWd1cmUge1xuICAvLyBFbnN1cmVzIHRoZSBjYXB0aW9uJ3MgdGV4dCBhbGlnbnMgd2l0aCB0aGUgaW1hZ2UuXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZpZ3VyZS1pbWcge1xuICBtYXJnaW4tYm90dG9tOiAkc3BhY2VyICogLjU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uZmlndXJlLWNhcHRpb24ge1xuICBAaW5jbHVkZSBmb250LXNpemUoJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZSk7XG4gIGNvbG9yOiAkZmlndXJlLWNhcHRpb24tY29sb3I7XG59XG4iLCIvLyBJbWFnZSBNaXhpbnNcbi8vIC0gUmVzcG9uc2l2ZSBpbWFnZVxuLy8gLSBSZXRpbmEgaW1hZ2VcblxuXG4vLyBSZXNwb25zaXZlIGltYWdlXG4vL1xuLy8gS2VlcCBpbWFnZXMgZnJvbSBzY2FsaW5nIGJleW9uZCB0aGUgd2lkdGggb2YgdGhlaXIgcGFyZW50cy5cblxuQG1peGluIGltZy1mbHVpZCB7XG4gIC8vIFBhcnQgMTogU2V0IGEgbWF4aW11bSByZWxhdGl2ZSB0byB0aGUgcGFyZW50XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLy8gUGFydCAyOiBPdmVycmlkZSB0aGUgaGVpZ2h0IHRvIGF1dG8sIG90aGVyd2lzZSBpbWFnZXMgd2lsbCBiZSBzdHJldGNoZWRcbiAgLy8gd2hlbiBzZXR0aW5nIGEgd2lkdGggYW5kIGhlaWdodCBhdHRyaWJ1dGUgb24gdGhlIGltZyBlbGVtZW50LlxuICBoZWlnaHQ6IGF1dG87XG59XG4iLCIvLyBDb250YWluZXIgd2lkdGhzXG4vL1xuLy8gU2V0IHRoZSBjb250YWluZXIgd2lkdGgsIGFuZCBvdmVycmlkZSBpdCBmb3IgZml4ZWQgbmF2YmFycyBpbiBtZWRpYSBxdWVyaWVzLlxuXG5AaWYgJGVuYWJsZS1jb250YWluZXItY2xhc3NlcyB7XG4gIC8vIFNpbmdsZSBjb250YWluZXIgY2xhc3Mgd2l0aCBicmVha3BvaW50IG1heC13aWR0aHNcbiAgLmNvbnRhaW5lcixcbiAgLy8gMTAwJSB3aWRlIGNvbnRhaW5lciBhdCBhbGwgYnJlYWtwb2ludHNcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgQGluY2x1ZGUgbWFrZS1jb250YWluZXIoKTtcbiAgfVxuXG4gIC8vIFJlc3BvbnNpdmUgY29udGFpbmVycyB0aGF0IGFyZSAxMDAlIHdpZGUgdW50aWwgYSBicmVha3BvaW50XG4gIEBlYWNoICRicmVha3BvaW50LCAkY29udGFpbmVyLW1heC13aWR0aCBpbiAkY29udGFpbmVyLW1heC13aWR0aHMge1xuICAgIC5jb250YWluZXItI3skYnJlYWtwb2ludH0ge1xuICAgICAgQGV4dGVuZCAuY29udGFpbmVyLWZsdWlkO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICAgICAlcmVzcG9uc2l2ZS1jb250YWluZXItI3skYnJlYWtwb2ludH0ge1xuICAgICAgICBtYXgtd2lkdGg6ICRjb250YWluZXItbWF4LXdpZHRoO1xuICAgICAgfVxuXG4gICAgICAvLyBFeHRlbmQgZWFjaCBicmVha3BvaW50IHdoaWNoIGlzIHNtYWxsZXIgb3IgZXF1YWwgdG8gdGhlIGN1cnJlbnQgYnJlYWtwb2ludFxuICAgICAgJGV4dGVuZC1icmVha3BvaW50OiB0cnVlO1xuXG4gICAgICBAZWFjaCAkbmFtZSwgJHdpZHRoIGluICRncmlkLWJyZWFrcG9pbnRzIHtcbiAgICAgICAgQGlmICgkZXh0ZW5kLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAuY29udGFpbmVyI3ticmVha3BvaW50LWluZml4KCRuYW1lLCAkZ3JpZC1icmVha3BvaW50cyl9IHtcbiAgICAgICAgICAgIEBleHRlbmQgJXJlc3BvbnNpdmUtY29udGFpbmVyLSN7JGJyZWFrcG9pbnR9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE9uY2UgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBpcyByZWFjaGVkLCBzdG9wIGV4dGVuZGluZ1xuICAgICAgICAgIEBpZiAoJGJyZWFrcG9pbnQgPT0gJG5hbWUpIHtcbiAgICAgICAgICAgICRleHRlbmQtYnJlYWtwb2ludDogZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb250YWluZXIgbWl4aW5zXG5cbkBtaXhpbiBtYWtlLWNvbnRhaW5lcigkZ3V0dGVyOiAkY29udGFpbmVyLXBhZGRpbmcteCkge1xuICAtLSN7JHByZWZpeH1ndXR0ZXIteDogI3skZ3V0dGVyfTtcbiAgLS0jeyRwcmVmaXh9Z3V0dGVyLXk6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLSN7JHByZWZpeH1ndXR0ZXIteCkgKiAuNSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS0jeyRwcmVmaXh9Z3V0dGVyLXgpICogLjUpOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgsIHh4bDogMTQwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwgeHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQGlmIG5vdCAkbiB7XG4gICAgQGVycm9yIFwiYnJlYWtwb2ludCBgI3skbmFtZX1gIG5vdCBmb3VuZCBpbiBgI3skYnJlYWtwb2ludHN9YFwiO1xuICB9XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIHJlZHVjZWQgYnkgMC4wMnB4IHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZlxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4LCB4eGw6IDE0MDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCwgeHhsOiAxNDAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46ICBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogIGJyZWFrcG9pbnQtbWF4KCRuZXh0LCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmV4dCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFJvd1xuLy9cbi8vIFJvd3MgY29udGFpbiB5b3VyIGNvbHVtbnMuXG5cbjpyb290IHtcbiAgQGVhY2ggJG5hbWUsICR2YWx1ZSBpbiAkZ3JpZC1icmVha3BvaW50cyB7XG4gICAgLS0jeyRwcmVmaXh9YnJlYWtwb2ludC0jeyRuYW1lfTogI3skdmFsdWV9O1xuICB9XG59XG5cbkBpZiAkZW5hYmxlLWdyaWQtY2xhc3NlcyB7XG4gIC5yb3cge1xuICAgIEBpbmNsdWRlIG1ha2Utcm93KCk7XG5cbiAgICA+ICoge1xuICAgICAgQGluY2x1ZGUgbWFrZS1jb2wtcmVhZHkoKTtcbiAgICB9XG4gIH1cbn1cblxuQGlmICRlbmFibGUtY3NzZ3JpZCB7XG4gIC5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLSN7JHByZWZpeH1yb3dzLCAxKSwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS0jeyRwcmVmaXh9Y29sdW1ucywgI3skZ3JpZC1jb2x1bW5zfSksIDFmcik7XG4gICAgZ2FwOiB2YXIoLS0jeyRwcmVmaXh9Z2FwLCAjeyRncmlkLWd1dHRlci13aWR0aH0pO1xuXG4gICAgQGluY2x1ZGUgbWFrZS1jc3NncmlkKCk7XG4gIH1cbn1cblxuXG4vLyBDb2x1bW5zXG4vL1xuLy8gQ29tbW9uIHN0eWxlcyBmb3Igc21hbGwgYW5kIGxhcmdlIGdyaWQgY29sdW1uc1xuXG5AaWYgJGVuYWJsZS1ncmlkLWNsYXNzZXMge1xuICBAaW5jbHVkZSBtYWtlLWdyaWQtY29sdW1ucygpO1xufVxuIiwiLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbkBtaXhpbiBtYWtlLXJvdygkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgLS0jeyRwcmVmaXh9Z3V0dGVyLXg6ICN7JGd1dHRlcn07XG4gIC0tI3skcHJlZml4fWd1dHRlci15OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC8vIFRPRE86IFJldmlzaXQgY2FsYyBvcmRlciBhZnRlciBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvNjAzOSBpcyBmaXhlZFxuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tI3skcHJlZml4fWd1dHRlci15KSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gIG1hcmdpbi1yaWdodDogY2FsYygtLjUgKiB2YXIoLS0jeyRwcmVmaXh9Z3V0dGVyLXgpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLS41ICogdmFyKC0tI3skcHJlZml4fWd1dHRlci14KSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1yZWFkeSgpIHtcbiAgLy8gQWRkIGJveCBzaXppbmcgaWYgb25seSB0aGUgZ3JpZCBpcyBsb2FkZWRcbiAgYm94LXNpemluZzogaWYodmFyaWFibGUtZXhpc3RzKGluY2x1ZGUtY29sdW1uLWJveC1zaXppbmcpIGFuZCAkaW5jbHVkZS1jb2x1bW4tYm94LXNpemluZywgYm9yZGVyLWJveCwgbnVsbCk7XG4gIC8vIFByZXZlbnQgY29sdW1ucyBmcm9tIGJlY29taW5nIHRvbyBuYXJyb3cgd2hlbiBhdCBzbWFsbGVyIGdyaWQgdGllcnMgYnlcbiAgLy8gYWx3YXlzIHNldHRpbmcgYHdpZHRoOiAxMDAlO2AuIFRoaXMgd29ya3MgYmVjYXVzZSB3ZSBzZXQgdGhlIHdpZHRoXG4gIC8vIGxhdGVyIG9uIHRvIG92ZXJyaWRlIHRoaXMgaW5pdGlhbCB3aWR0aC5cbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7IC8vIFByZXZlbnQgYC5jb2wtYXV0b2AsIGAuY29sYCAoJiByZXNwb25zaXZlIHZhcmlhbnRzKSBmcm9tIGJyZWFraW5nIG91dCB0aGUgZ3JpZFxuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLSN7JHByZWZpeH1ndXR0ZXIteCkgKiAuNSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS0jeyRwcmVmaXh9Z3V0dGVyLXgpICogLjUpOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuICBtYXJnaW4tdG9wOiB2YXIoLS0jeyRwcmVmaXh9Z3V0dGVyLXkpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2woJHNpemU6IGZhbHNlLCAkY29sdW1uczogJGdyaWQtY29sdW1ucykge1xuICBAaWYgJHNpemUge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBwZXJjZW50YWdlKGRpdmlkZSgkc2l6ZSwgJGNvbHVtbnMpKTtcblxuICB9IEBlbHNlIHtcbiAgICBmbGV4OiAxIDEgMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1peGluIG1ha2UtY29sLWF1dG8oKSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuQG1peGluIG1ha2UtY29sLW9mZnNldCgkc2l6ZSwgJGNvbHVtbnM6ICRncmlkLWNvbHVtbnMpIHtcbiAgJG51bTogZGl2aWRlKCRzaXplLCAkY29sdW1ucyk7XG4gIG1hcmdpbi1sZWZ0OiBpZigkbnVtID09IDAsIDAsIHBlcmNlbnRhZ2UoJG51bSkpO1xufVxuXG4vLyBSb3cgY29sdW1uc1xuLy9cbi8vIFNwZWNpZnkgb24gYSBwYXJlbnQgZWxlbWVudChlLmcuLCAucm93KSB0byBmb3JjZSBpbW1lZGlhdGUgY2hpbGRyZW4gaW50byBOTlxuLy8gbnVtYmVyIG9mIGNvbHVtbnMuIFN1cHBvcnRzIHdyYXBwaW5nIHRvIG5ldyBsaW5lcywgYnV0IGRvZXMgbm90IGRvIGEgTWFzb25yeVxuLy8gc3R5bGUgZ3JpZC5cbkBtaXhpbiByb3ctY29scygkY291bnQpIHtcbiAgPiAqIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogcGVyY2VudGFnZShkaXZpZGUoMSwgJGNvdW50KSk7XG4gIH1cbn1cblxuLy8gRnJhbWV3b3JrIGdyaWQgZ2VuZXJhdGlvblxuLy9cbi8vIFVzZWQgb25seSBieSBCb290c3RyYXAgdG8gZ2VuZXJhdGUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIGdyaWQgY2xhc3NlcyBnaXZlblxuLy8gYW55IHZhbHVlIG9mIGAkZ3JpZC1jb2x1bW5zYC5cblxuQG1peGluIG1ha2UtZ3JpZC1jb2x1bW5zKCRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGJyZWFrcG9pbnRzKSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICAvLyBQcm92aWRlIGJhc2ljIGAuY29sLXticH1gIGNsYXNzZXMgZm9yIGVxdWFsLXdpZHRoIGZsZXhib3ggY29sdW1uc1xuICAgICAgLmNvbCN7JGluZml4fSB7XG4gICAgICAgIGZsZXg6IDEgMCAwJTsgLy8gRmxleGJ1Z3MgIzQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9waGlsaXB3YWx0b24vZmxleGJ1Z3MjZmxleGJ1Zy00XG4gICAgICB9XG5cbiAgICAgIC5yb3ctY29scyN7JGluZml4fS1hdXRvID4gKiB7XG4gICAgICAgIEBpbmNsdWRlIG1ha2UtY29sLWF1dG8oKTtcbiAgICAgIH1cblxuICAgICAgQGlmICRncmlkLXJvdy1jb2x1bW5zID4gMCB7XG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGdyaWQtcm93LWNvbHVtbnMge1xuICAgICAgICAgIC5yb3ctY29scyN7JGluZml4fS0jeyRpfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSByb3ctY29scygkaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb2wjeyRpbmZpeH0tYXV0byB7XG4gICAgICAgIEBpbmNsdWRlIG1ha2UtY29sLWF1dG8oKTtcbiAgICAgIH1cblxuICAgICAgQGlmICRjb2x1bW5zID4gMCB7XG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xuICAgICAgICAgIC5jb2wjeyRpbmZpeH0tI3skaX0ge1xuICAgICAgICAgICAgQGluY2x1ZGUgbWFrZS1jb2woJGksICRjb2x1bW5zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBgJGNvbHVtbnMgLSAxYCBiZWNhdXNlIG9mZnNldHRpbmcgYnkgdGhlIHdpZHRoIG9mIGFuIGVudGlyZSByb3cgaXNuJ3QgcG9zc2libGVcbiAgICAgICAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAoJGNvbHVtbnMgLSAxKSB7XG4gICAgICAgICAgQGlmIG5vdCAoJGluZml4ID09IFwiXCIgYW5kICRpID09IDApIHsgLy8gQXZvaWQgZW1pdHRpbmcgdXNlbGVzcyAub2Zmc2V0LTBcbiAgICAgICAgICAgIC5vZmZzZXQjeyRpbmZpeH0tI3skaX0ge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBtYWtlLWNvbC1vZmZzZXQoJGksICRjb2x1bW5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gR3V0dGVyc1xuICAgICAgLy9cbiAgICAgIC8vIE1ha2UgdXNlIG9mIGAuZy0qYCwgYC5neC0qYCBvciBgLmd5LSpgIHV0aWxpdGllcyB0byBjaGFuZ2Ugc3BhY2luZyBiZXR3ZWVuIHRoZSBjb2x1bW5zLlxuICAgICAgQGVhY2ggJGtleSwgJHZhbHVlIGluICRndXR0ZXJzIHtcbiAgICAgICAgLmcjeyRpbmZpeH0tI3ska2V5fSxcbiAgICAgICAgLmd4I3skaW5maXh9LSN7JGtleX0ge1xuICAgICAgICAgIC0tI3skcHJlZml4fWd1dHRlci14OiAjeyR2YWx1ZX07XG4gICAgICAgIH1cblxuICAgICAgICAuZyN7JGluZml4fS0jeyRrZXl9LFxuICAgICAgICAuZ3kjeyRpbmZpeH0tI3ska2V5fSB7XG4gICAgICAgICAgLS0jeyRwcmVmaXh9Z3V0dGVyLXk6ICN7JHZhbHVlfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFrZS1jc3NncmlkKCRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRicmVha3BvaW50cykge1xuICAgICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKTtcblxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgQGlmICRjb2x1bW5zID4gMCB7XG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xuICAgICAgICAgIC5nLWNvbCN7JGluZml4fS0jeyRpfSB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogYXV0byAvIHNwYW4gJGk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhcnQgd2l0aCBgMWAgYmVjYXVzZSBgMGAgaXMgYW4gaW52YWxpZCB2YWx1ZS5cbiAgICAgICAgLy8gRW5kcyB3aXRoIGAkY29sdW1ucyAtIDFgIGJlY2F1c2Ugb2Zmc2V0dGluZyBieSB0aGUgd2lkdGggb2YgYW4gZW50aXJlIHJvdyBpc24ndCBwb3NzaWJsZS5cbiAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAoJGNvbHVtbnMgLSAxKSB7XG4gICAgICAgICAgLmctc3RhcnQjeyRpbmZpeH0tI3skaX0ge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6ICRpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEJhc2ljIEJvb3RzdHJhcCB0YWJsZVxuLy9cblxuLnRhYmxlIHtcbiAgLy8gUmVzZXQgbmVlZGVkIGZvciBuZXN0aW5nIHRhYmxlc1xuICAtLSN7JHByZWZpeH10YWJsZS1jb2xvci10eXBlOiBpbml0aWFsO1xuICAtLSN7JHByZWZpeH10YWJsZS1iZy10eXBlOiBpbml0aWFsO1xuICAtLSN7JHByZWZpeH10YWJsZS1jb2xvci1zdGF0ZTogaW5pdGlhbDtcbiAgLS0jeyRwcmVmaXh9dGFibGUtYmctc3RhdGU6IGluaXRpYWw7XG4gIC8vIEVuZCBvZiByZXNldFxuICAtLSN7JHByZWZpeH10YWJsZS1jb2xvcjogI3skdGFibGUtY29sb3J9O1xuICAtLSN7JHByZWZpeH10YWJsZS1iZzogI3skdGFibGUtYmd9O1xuICAtLSN7JHByZWZpeH10YWJsZS1ib3JkZXItY29sb3I6ICN7JHRhYmxlLWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fXRhYmxlLWFjY2VudC1iZzogI3skdGFibGUtYWNjZW50LWJnfTtcbiAgLS0jeyRwcmVmaXh9dGFibGUtc3RyaXBlZC1jb2xvcjogI3skdGFibGUtc3RyaXBlZC1jb2xvcn07XG4gIC0tI3skcHJlZml4fXRhYmxlLXN0cmlwZWQtYmc6ICN7JHRhYmxlLXN0cmlwZWQtYmd9O1xuICAtLSN7JHByZWZpeH10YWJsZS1hY3RpdmUtY29sb3I6ICN7JHRhYmxlLWFjdGl2ZS1jb2xvcn07XG4gIC0tI3skcHJlZml4fXRhYmxlLWFjdGl2ZS1iZzogI3skdGFibGUtYWN0aXZlLWJnfTtcbiAgLS0jeyRwcmVmaXh9dGFibGUtaG92ZXItY29sb3I6ICN7JHRhYmxlLWhvdmVyLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9dGFibGUtaG92ZXItYmc6ICN7JHRhYmxlLWhvdmVyLWJnfTtcblxuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlcjtcbiAgdmVydGljYWwtYWxpZ246ICR0YWJsZS1jZWxsLXZlcnRpY2FsLWFsaWduO1xuICBib3JkZXItY29sb3I6IHZhcigtLSN7JHByZWZpeH10YWJsZS1ib3JkZXItY29sb3IpO1xuXG4gIC8vIFRhcmdldCB0aCAmIHRkXG4gIC8vIFdlIG5lZWQgdGhlIGNoaWxkIGNvbWJpbmF0b3IgdG8gcHJldmVudCBzdHlsZXMgbGVha2luZyB0byBuZXN0ZWQgdGFibGVzIHdoaWNoIGRvZXNuJ3QgaGF2ZSBhIGAudGFibGVgIGNsYXNzLlxuICAvLyBXZSB1c2UgdGhlIHVuaXZlcnNhbCBzZWxlY3RvcnMgaGVyZSB0byBzaW1wbGlmeSB0aGUgc2VsZWN0b3IgKGVsc2Ugd2Ugd291bGQgbmVlZCA2IGRpZmZlcmVudCBzZWxlY3RvcnMpLlxuICAvLyBBbm90aGVyIGFkdmFudGFnZSBpcyB0aGF0IHRoaXMgZ2VuZXJhdGVzIGxlc3MgY29kZSBhbmQgbWFrZXMgdGhlIHNlbGVjdG9yIGxlc3Mgc3BlY2lmaWMgbWFraW5nIGl0IGVhc2llciB0byBvdmVycmlkZS5cbiAgLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlbGVjdG9yLW1heC11bml2ZXJzYWxcbiAgPiA6bm90KGNhcHRpb24pID4gKiA+ICoge1xuICAgIHBhZGRpbmc6ICR0YWJsZS1jZWxsLXBhZGRpbmcteSAkdGFibGUtY2VsbC1wYWRkaW5nLXg7XG4gICAgLy8gRm9sbG93aW5nIHRoZSBwcmVjZXB0IG9mIGNhc2NhZGVzOiBodHRwczovL2NvZGVwZW4uaW8vbWlyaWFtc3V6YW5uZS9mdWxsL3ZZTmdvZGJcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fXRhYmxlLWNvbG9yLXN0YXRlLCB2YXIoLS0jeyRwcmVmaXh9dGFibGUtY29sb3ItdHlwZSwgdmFyKC0tI3skcHJlZml4fXRhYmxlLWNvbG9yKSkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH10YWJsZS1iZyk7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogJHRhYmxlLWJvcmRlci13aWR0aDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA5OTk5cHggdmFyKC0tI3skcHJlZml4fXRhYmxlLWJnLXN0YXRlLCB2YXIoLS0jeyRwcmVmaXh9dGFibGUtYmctdHlwZSwgdmFyKC0tI3skcHJlZml4fXRhYmxlLWFjY2VudC1iZykpKTtcbiAgfVxuXG4gID4gdGJvZHkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xuICB9XG5cbiAgPiB0aGVhZCB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgfVxufVxuXG4udGFibGUtZ3JvdXAtZGl2aWRlciB7XG4gIGJvcmRlci10b3A6IGNhbGMoI3skdGFibGUtYm9yZGVyLXdpZHRofSAqIDIpIHNvbGlkICR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG59XG5cbi8vXG4vLyBDaGFuZ2UgcGxhY2VtZW50IG9mIGNhcHRpb25zIHdpdGggYSBjbGFzc1xuLy9cblxuLmNhcHRpb24tdG9wIHtcbiAgY2FwdGlvbi1zaWRlOiB0b3A7XG59XG5cblxuLy9cbi8vIENvbmRlbnNlZCB0YWJsZSB3LyBoYWxmIHBhZGRpbmdcbi8vXG5cbi50YWJsZS1zbSB7XG4gIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci1tYXgtdW5pdmVyc2FsXG4gID4gOm5vdChjYXB0aW9uKSA+ICogPiAqIHtcbiAgICBwYWRkaW5nOiAkdGFibGUtY2VsbC1wYWRkaW5nLXktc20gJHRhYmxlLWNlbGwtcGFkZGluZy14LXNtO1xuICB9XG59XG5cblxuLy8gQm9yZGVyIHZlcnNpb25zXG4vL1xuLy8gQWRkIG9yIHJlbW92ZSBib3JkZXJzIGFsbCBhcm91bmQgdGhlIHRhYmxlIGFuZCBiZXR3ZWVuIGFsbCB0aGUgY29sdW1ucy5cbi8vXG4vLyBXaGVuIGJvcmRlcnMgYXJlIGFkZGVkIG9uIGFsbCBzaWRlcyBvZiB0aGUgY2VsbHMsIHRoZSBjb3JuZXJzIGNhbiByZW5kZXIgb2RkIHdoZW5cbi8vIHRoZXNlIGJvcmRlcnMgZG8gbm90IGhhdmUgdGhlIHNhbWUgY29sb3Igb3IgaWYgdGhleSBhcmUgc2VtaS10cmFuc3BhcmVudC5cbi8vIFRoZXJlZm9yZSB3ZSBhZGQgdG9wIGFuZCBib3JkZXIgYm90dG9tcyB0byB0aGUgYHRyYHMgYW5kIGxlZnQgYW5kIHJpZ2h0IGJvcmRlcnNcbi8vIHRvIHRoZSBgdGRgcyBvciBgdGhgc1xuXG4udGFibGUtYm9yZGVyZWQge1xuICA+IDpub3QoY2FwdGlvbikgPiAqIHtcbiAgICBib3JkZXItd2lkdGg6ICR0YWJsZS1ib3JkZXItd2lkdGggMDtcblxuICAgIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci1tYXgtdW5pdmVyc2FsXG4gICAgPiAqIHtcbiAgICAgIGJvcmRlci13aWR0aDogMCAkdGFibGUtYm9yZGVyLXdpZHRoO1xuICAgIH1cbiAgfVxufVxuXG4udGFibGUtYm9yZGVybGVzcyB7XG4gIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci1tYXgtdW5pdmVyc2FsXG4gID4gOm5vdChjYXB0aW9uKSA+ICogPiAqIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICB9XG5cbiAgPiA6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIH1cbn1cblxuLy8gWmVicmEtc3RyaXBpbmdcbi8vXG4vLyBEZWZhdWx0IHplYnJhLXN0cmlwZSBzdHlsZXMgKGFsdGVybmF0aW5nIGdyYXkgYW5kIHRyYW5zcGFyZW50IGJhY2tncm91bmRzKVxuXG4vLyBGb3Igcm93c1xuLnRhYmxlLXN0cmlwZWQge1xuICA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUoI3skdGFibGUtc3RyaXBlZC1vcmRlcn0pID4gKiB7XG4gICAgLS0jeyRwcmVmaXh9dGFibGUtY29sb3ItdHlwZTogdmFyKC0tI3skcHJlZml4fXRhYmxlLXN0cmlwZWQtY29sb3IpO1xuICAgIC0tI3skcHJlZml4fXRhYmxlLWJnLXR5cGU6IHZhcigtLSN7JHByZWZpeH10YWJsZS1zdHJpcGVkLWJnKTtcbiAgfVxufVxuXG4vLyBGb3IgY29sdW1uc1xuLnRhYmxlLXN0cmlwZWQtY29sdW1ucyB7XG4gID4gOm5vdChjYXB0aW9uKSA+IHRyID4gOm50aC1jaGlsZCgjeyR0YWJsZS1zdHJpcGVkLWNvbHVtbnMtb3JkZXJ9KSB7XG4gICAgLS0jeyRwcmVmaXh9dGFibGUtY29sb3ItdHlwZTogdmFyKC0tI3skcHJlZml4fXRhYmxlLXN0cmlwZWQtY29sb3IpO1xuICAgIC0tI3skcHJlZml4fXRhYmxlLWJnLXR5cGU6IHZhcigtLSN7JHByZWZpeH10YWJsZS1zdHJpcGVkLWJnKTtcbiAgfVxufVxuXG4vLyBBY3RpdmUgdGFibGVcbi8vXG4vLyBUaGUgYC50YWJsZS1hY3RpdmVgIGNsYXNzIGNhbiBiZSBhZGRlZCB0byBoaWdobGlnaHQgcm93cyBvciBjZWxsc1xuXG4udGFibGUtYWN0aXZlIHtcbiAgLS0jeyRwcmVmaXh9dGFibGUtY29sb3Itc3RhdGU6IHZhcigtLSN7JHByZWZpeH10YWJsZS1hY3RpdmUtY29sb3IpO1xuICAtLSN7JHByZWZpeH10YWJsZS1iZy1zdGF0ZTogdmFyKC0tI3skcHJlZml4fXRhYmxlLWFjdGl2ZS1iZyk7XG59XG5cbi8vIEhvdmVyIGVmZmVjdFxuLy9cbi8vIFBsYWNlZCBoZXJlIHNpbmNlIGl0IGhhcyB0byBjb21lIGFmdGVyIHRoZSBwb3RlbnRpYWwgemVicmEgc3RyaXBpbmdcblxuLnRhYmxlLWhvdmVyIHtcbiAgPiB0Ym9keSA+IHRyOmhvdmVyID4gKiB7XG4gICAgLS0jeyRwcmVmaXh9dGFibGUtY29sb3Itc3RhdGU6IHZhcigtLSN7JHByZWZpeH10YWJsZS1ob3Zlci1jb2xvcik7XG4gICAgLS0jeyRwcmVmaXh9dGFibGUtYmctc3RhdGU6IHZhcigtLSN7JHByZWZpeH10YWJsZS1ob3Zlci1iZyk7XG4gIH1cbn1cblxuXG4vLyBUYWJsZSB2YXJpYW50c1xuLy9cbi8vIFRhYmxlIHZhcmlhbnRzIHNldCB0aGUgdGFibGUgY2VsbCBiYWNrZ3JvdW5kcywgYm9yZGVyIGNvbG9yc1xuLy8gYW5kIHRoZSBjb2xvcnMgb2YgdGhlIHN0cmlwZWQsIGhvdmVyZWQgJiBhY3RpdmUgdGFibGVzXG5cbkBlYWNoICRjb2xvciwgJHZhbHVlIGluICR0YWJsZS12YXJpYW50cyB7XG4gIEBpbmNsdWRlIHRhYmxlLXZhcmlhbnQoJGNvbG9yLCAkdmFsdWUpO1xufVxuXG4vLyBSZXNwb25zaXZlIHRhYmxlc1xuLy9cbi8vIEdlbmVyYXRlIHNlcmllcyBvZiBgLnRhYmxlLXJlc3BvbnNpdmUtKmAgY2xhc3NlcyBmb3IgY29uZmlndXJpbmcgdGhlIHNjcmVlblxuLy8gc2l6ZSBvZiB3aGVyZSB5b3VyIHRhYmxlIHdpbGwgb3ZlcmZsb3cuXG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGdyaWQtYnJlYWtwb2ludHMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnJlYWtwb2ludCkge1xuICAgIC50YWJsZS1yZXNwb25zaXZlI3skaW5maXh9IHtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgfVxuICB9XG59XG4iLCIvLyBzY3NzLWRvY3Mtc3RhcnQgdGFibGUtdmFyaWFudFxuQG1peGluIHRhYmxlLXZhcmlhbnQoJHN0YXRlLCAkYmFja2dyb3VuZCkge1xuICAudGFibGUtI3skc3RhdGV9IHtcbiAgICAkY29sb3I6IGNvbG9yLWNvbnRyYXN0KG9wYXF1ZSgkYm9keS1iZywgJGJhY2tncm91bmQpKTtcbiAgICAkaG92ZXItYmc6IG1peCgkY29sb3IsICRiYWNrZ3JvdW5kLCBwZXJjZW50YWdlKCR0YWJsZS1ob3Zlci1iZy1mYWN0b3IpKTtcbiAgICAkc3RyaXBlZC1iZzogbWl4KCRjb2xvciwgJGJhY2tncm91bmQsIHBlcmNlbnRhZ2UoJHRhYmxlLXN0cmlwZWQtYmctZmFjdG9yKSk7XG4gICAgJGFjdGl2ZS1iZzogbWl4KCRjb2xvciwgJGJhY2tncm91bmQsIHBlcmNlbnRhZ2UoJHRhYmxlLWFjdGl2ZS1iZy1mYWN0b3IpKTtcbiAgICAkdGFibGUtYm9yZGVyLWNvbG9yOiBtaXgoJGNvbG9yLCAkYmFja2dyb3VuZCwgcGVyY2VudGFnZSgkdGFibGUtYm9yZGVyLWZhY3RvcikpO1xuXG4gICAgLS0jeyRwcmVmaXh9dGFibGUtY29sb3I6ICN7JGNvbG9yfTtcbiAgICAtLSN7JHByZWZpeH10YWJsZS1iZzogI3skYmFja2dyb3VuZH07XG4gICAgLS0jeyRwcmVmaXh9dGFibGUtYm9yZGVyLWNvbG9yOiAjeyR0YWJsZS1ib3JkZXItY29sb3J9O1xuICAgIC0tI3skcHJlZml4fXRhYmxlLXN0cmlwZWQtYmc6ICN7JHN0cmlwZWQtYmd9O1xuICAgIC0tI3skcHJlZml4fXRhYmxlLXN0cmlwZWQtY29sb3I6ICN7Y29sb3ItY29udHJhc3QoJHN0cmlwZWQtYmcpfTtcbiAgICAtLSN7JHByZWZpeH10YWJsZS1hY3RpdmUtYmc6ICN7JGFjdGl2ZS1iZ307XG4gICAgLS0jeyRwcmVmaXh9dGFibGUtYWN0aXZlLWNvbG9yOiAje2NvbG9yLWNvbnRyYXN0KCRhY3RpdmUtYmcpfTtcbiAgICAtLSN7JHByZWZpeH10YWJsZS1ob3Zlci1iZzogI3skaG92ZXItYmd9O1xuICAgIC0tI3skcHJlZml4fXRhYmxlLWhvdmVyLWNvbG9yOiAje2NvbG9yLWNvbnRyYXN0KCRob3Zlci1iZyl9O1xuXG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH10YWJsZS1jb2xvcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9dGFibGUtYm9yZGVyLWNvbG9yKTtcbiAgfVxufVxuLy8gc2Nzcy1kb2NzLWVuZCB0YWJsZS12YXJpYW50XG4iLCIvL1xuLy8gTGFiZWxzXG4vL1xuXG4uZm9ybS1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206ICRmb3JtLWxhYmVsLW1hcmdpbi1ib3R0b207XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkZm9ybS1sYWJlbC1mb250LXNpemUpO1xuICBmb250LXN0eWxlOiAkZm9ybS1sYWJlbC1mb250LXN0eWxlO1xuICBmb250LXdlaWdodDogJGZvcm0tbGFiZWwtZm9udC13ZWlnaHQ7XG4gIGNvbG9yOiAkZm9ybS1sYWJlbC1jb2xvcjtcbn1cblxuLy8gRm9yIHVzZSB3aXRoIGhvcml6b250YWwgYW5kIGlubGluZSBmb3Jtcywgd2hlbiB5b3UgbmVlZCB0aGUgbGFiZWwgKG9yIGxlZ2VuZClcbi8vIHRleHQgdG8gYWxpZ24gd2l0aCB0aGUgZm9ybSBjb250cm9scy5cbi5jb2wtZm9ybS1sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiBhZGQoJGlucHV0LXBhZGRpbmcteSwgJGlucHV0LWJvcmRlci13aWR0aCk7XG4gIHBhZGRpbmctYm90dG9tOiBhZGQoJGlucHV0LXBhZGRpbmcteSwgJGlucHV0LWJvcmRlci13aWR0aCk7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8vIE92ZXJyaWRlIHRoZSBgPGxlZ2VuZD5gIGRlZmF1bHRcbiAgQGluY2x1ZGUgZm9udC1zaXplKGluaGVyaXQpOyAvLyBPdmVycmlkZSB0aGUgYDxsZWdlbmQ+YCBkZWZhdWx0XG4gIGZvbnQtc3R5bGU6ICRmb3JtLWxhYmVsLWZvbnQtc3R5bGU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9ybS1sYWJlbC1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodDtcbiAgY29sb3I6ICRmb3JtLWxhYmVsLWNvbG9yO1xufVxuXG4uY29sLWZvcm0tbGFiZWwtbGcge1xuICBwYWRkaW5nLXRvcDogYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcsICRpbnB1dC1ib3JkZXItd2lkdGgpO1xuICBwYWRkaW5nLWJvdHRvbTogYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcsICRpbnB1dC1ib3JkZXItd2lkdGgpO1xuICBAaW5jbHVkZSBmb250LXNpemUoJGlucHV0LWZvbnQtc2l6ZS1sZyk7XG59XG5cbi5jb2wtZm9ybS1sYWJlbC1zbSB7XG4gIHBhZGRpbmctdG9wOiBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSwgJGlucHV0LWJvcmRlci13aWR0aCk7XG4gIHBhZGRpbmctYm90dG9tOiBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSwgJGlucHV0LWJvcmRlci13aWR0aCk7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkaW5wdXQtZm9udC1zaXplLXNtKTtcbn1cbiIsIi8vXG4vLyBGb3JtIHRleHRcbi8vXG5cbi5mb3JtLXRleHQge1xuICBtYXJnaW4tdG9wOiAkZm9ybS10ZXh0LW1hcmdpbi10b3A7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkZm9ybS10ZXh0LWZvbnQtc2l6ZSk7XG4gIGZvbnQtc3R5bGU6ICRmb3JtLXRleHQtZm9udC1zdHlsZTtcbiAgZm9udC13ZWlnaHQ6ICRmb3JtLXRleHQtZm9udC13ZWlnaHQ7XG4gIGNvbG9yOiAkZm9ybS10ZXh0LWNvbG9yO1xufVxuIiwiLy9cbi8vIEdlbmVyYWwgZm9ybSBjb250cm9scyAocGx1cyBhIGZldyBzcGVjaWZpYyBoaWdoLWxldmVsIGludGVydmVudGlvbnMpXG4vL1xuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAkaW5wdXQtcGFkZGluZy15ICRpbnB1dC1wYWRkaW5nLXg7XG4gIGZvbnQtZmFtaWx5OiAkaW5wdXQtZm9udC1mYW1pbHk7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkaW5wdXQtZm9udC1zaXplKTtcbiAgZm9udC13ZWlnaHQ6ICRpbnB1dC1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodDtcbiAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbiAgYXBwZWFyYW5jZTogbm9uZTsgLy8gRml4IGFwcGVhcmFuY2UgZm9yIGRhdGUgaW5wdXRzIGluIFNhZmFyaVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogJGlucHV0LWJvcmRlci13aWR0aCBzb2xpZCAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuXG4gIC8vIE5vdGU6IFRoaXMgaGFzIG5vIGVmZmVjdCBvbiA8c2VsZWN0PnMgaW4gc29tZSBicm93c2VycywgZHVlIHRvIHRoZSBsaW1pdGVkIHN0eWxhYmlsaXR5IG9mIGA8c2VsZWN0PmBzIGluIENTUy5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkaW5wdXQtYm9yZGVyLXJhZGl1cywgMCk7XG5cbiAgQGluY2x1ZGUgYm94LXNoYWRvdygkaW5wdXQtYm94LXNoYWRvdyk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oJGlucHV0LXRyYW5zaXRpb24pO1xuXG4gICZbdHlwZT1cImZpbGVcIl0ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIHByZXZlbnQgcHNldWRvIGVsZW1lbnQgYnV0dG9uIG92ZXJsYXBcblxuICAgICY6bm90KDpkaXNhYmxlZCk6bm90KFtyZWFkb25seV0pIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAvLyBDdXN0b21pemUgdGhlIGA6Zm9jdXNgIHN0YXRlIHRvIGltaXRhdGUgbmF0aXZlIFdlYktpdCBzdHlsZXMuXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkaW5wdXQtZm9jdXMtY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWZvY3VzLWJnO1xuICAgIGJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIEBpZiAkZW5hYmxlLXNoYWRvd3Mge1xuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygkaW5wdXQtYm94LXNoYWRvdywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgLy8gQXZvaWQgdXNpbmcgbWl4aW4gc28gd2UgY2FuIHBhc3MgY3VzdG9tIGZvY3VzIHNoYWRvdyBwcm9wZXJseVxuICAgICAgYm94LXNoYWRvdzogJGlucHV0LWZvY3VzLWJveC1zaGFkb3c7XG4gICAgfVxuICB9XG5cbiAgJjo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcbiAgICAvLyBPbiBBbmRyb2lkIENocm9tZSwgZm9ybS1jb250cm9sJ3MgXCJ3aWR0aDogMTAwJVwiIG1ha2VzIHRoZSBpbnB1dCB3aWR0aCB0b28gc21hbGxcbiAgICAvLyBUZXN0ZWQgdW5kZXIgQW5kcm9pZCAxMSAvIENocm9tZSA4OSwgQW5kcm9pZCAxMiAvIENocm9tZSAxMDAsIEFuZHJvaWQgMTMgLyBDaHJvbWUgMTA5XG4gICAgLy9cbiAgICAvLyBPbiBpT1MgU2FmYXJpLCBmb3JtLWNvbnRyb2wncyBcImFwcGVhcmFuY2U6IG5vbmVcIiArIFwid2lkdGg6IDEwMCVcIiBtYWtlcyB0aGUgaW5wdXQgd2lkdGggdG9vIHNtYWxsXG4gICAgLy8gVGVzdGVkIHVuZGVyIGlPUyAxNi4yIC8gU2FmYXJpIDE2LjJcbiAgICBtaW4td2lkdGg6IDg1cHg7IC8vIFNlZW1zIHRvIGJlIGEgZ29vZCBtaW5pbXVtIHNhZmUgd2lkdGhcblxuICAgIC8vIEFkZCBzb21lIGhlaWdodCB0byBkYXRlIGlucHV0cyBvbiBpT1NcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzIzMzA3XG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGlzIHdvcmthcm91bmQgb25jZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk4OTU5IGlzIHJlc29sdmVkXG4gICAgLy8gTXVsdGlwbHkgbGluZS1oZWlnaHQgYnkgMWVtIGlmIGl0IGhhcyBubyB1bml0XG4gICAgaGVpZ2h0OiBpZih1bml0KCRpbnB1dC1saW5lLWhlaWdodCkgPT0gXCJcIiwgJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtbGluZS1oZWlnaHQpO1xuXG4gICAgLy8gQW5kcm9pZCBDaHJvbWUgdHlwZT1cImRhdGVcIiBpcyB0YWxsZXIgdGhhbiB0aGUgb3RoZXIgaW5wdXRzXG4gICAgLy8gYmVjYXVzZSBvZiBcIm1hcmdpbjogMXB4IDI0cHggMXB4IDRweFwiIGluc2lkZSB0aGUgc2hhZG93IERPTVxuICAgIC8vIFRlc3RlZCB1bmRlciBBbmRyb2lkIDExIC8gQ2hyb21lIDg5LCBBbmRyb2lkIDEyIC8gQ2hyb21lIDEwMCwgQW5kcm9pZCAxMyAvIENocm9tZSAxMDlcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAvLyBQcmV2ZW50IGV4Y2Vzc2l2ZSBkYXRlIGlucHV0IGhlaWdodCBpbiBXZWJraXRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zNDQzM1xuICAmOjotd2Via2l0LWRhdGV0aW1lLWVkaXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAvLyBQbGFjZWhvbGRlclxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjtcbiAgICAvLyBPdmVycmlkZSBGaXJlZm94J3MgdW51c3VhbCBkZWZhdWx0IG9wYWNpdHk7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMTUyNi5cbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLy8gRGlzYWJsZWQgaW5wdXRzXG4gIC8vXG4gIC8vIEhUTUw1IHNheXMgdGhhdCBjb250cm9scyB1bmRlciBhIGZpZWxkc2V0ID4gbGVnZW5kOmZpcnN0LWNoaWxkIHdvbid0IGJlXG4gIC8vIGRpc2FibGVkIGlmIHRoZSBmaWVsZHNldCBpcyBkaXNhYmxlZC4gRHVlIHRvIGltcGxlbWVudGF0aW9uIGRpZmZpY3VsdHksIHdlXG4gIC8vIGRvbid0IGhvbm9yIHRoYXQgZWRnZSBjYXNlOyB3ZSBzdHlsZSB0aGVtIGFzIGRpc2FibGVkIGFueXdheS5cbiAgJjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICRpbnB1dC1kaXNhYmxlZC1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtZGlzYWJsZWQtYmc7XG4gICAgYm9yZGVyLWNvbG9yOiAkaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yO1xuICAgIC8vIGlPUyBmaXggZm9yIHVucmVhZGFibGUgZGlzYWJsZWQgY29udGVudDsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE2NTUuXG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC8vIEZpbGUgaW5wdXQgYnV0dG9ucyB0aGVtaW5nXG4gICY6OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAkaW5wdXQtcGFkZGluZy15ICRpbnB1dC1wYWRkaW5nLXg7XG4gICAgbWFyZ2luOiAoLSRpbnB1dC1wYWRkaW5nLXkpICgtJGlucHV0LXBhZGRpbmcteCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6ICRpbnB1dC1wYWRkaW5nLXg7XG4gICAgY29sb3I6ICRmb3JtLWZpbGUtYnV0dG9uLWNvbG9yO1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWJnKCRmb3JtLWZpbGUtYnV0dG9uLWJnKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgYm9yZGVyLWlubGluZS1lbmQtd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGg7XG4gICAgYm9yZGVyLXJhZGl1czogMDsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBwcm9wZXJ0eS1kaXNhbGxvd2VkLWxpc3RcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCRidG4tdHJhbnNpdGlvbik7XG4gIH1cblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpOm5vdChbcmVhZG9ubHldKTo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JtLWZpbGUtYnV0dG9uLWhvdmVyLWJnO1xuICB9XG59XG5cbi8vIFJlYWRvbmx5IGNvbnRyb2xzIGFzIHBsYWluIHRleHRcbi8vXG4vLyBBcHBseSBjbGFzcyB0byBhIHJlYWRvbmx5IGlucHV0IHRvIG1ha2UgaXQgYXBwZWFyIGxpa2UgcmVndWxhciBwbGFpblxuLy8gdGV4dCAod2l0aG91dCBhbnkgYm9yZGVyLCBiYWNrZ3JvdW5kIGNvbG9yLCBmb2N1cyBpbmRpY2F0b3IpXG5cbi5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAkaW5wdXQtcGFkZGluZy15IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8vIG1hdGNoIGlucHV0cyBpZiB0aGlzIGNsYXNzIGNvbWVzIG9uIGlucHV0cyB3aXRoIGRlZmF1bHQgbWFyZ2luc1xuICBsaW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0O1xuICBjb2xvcjogJGlucHV0LXBsYWludGV4dC1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAwO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICAmLmZvcm0tY29udHJvbC1zbSxcbiAgJi5mb3JtLWNvbnRyb2wtbGcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5cbi8vIEZvcm0gY29udHJvbCBzaXppbmdcbi8vXG4vLyBCdWlsZCBvbiBgLmZvcm0tY29udHJvbGAgd2l0aCBtb2RpZmllciBjbGFzc2VzIHRvIGRlY3JlYXNlIG9yIGluY3JlYXNlIHRoZVxuLy8gaGVpZ2h0IGFuZCBmb250LXNpemUgb2YgZm9ybSBjb250cm9scy5cbi8vXG4vLyBSZXBlYXRlZCBpbiBgX2lucHV0X2dyb3VwLnNjc3NgIHRvIGF2b2lkIFNhc3MgZXh0ZW5kIGlzc3Vlcy5cblxuLmZvcm0tY29udHJvbC1zbSB7XG4gIG1pbi1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc207XG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXktc20gJGlucHV0LXBhZGRpbmcteC1zbTtcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRpbnB1dC1mb250LXNpemUtc20pO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRpbnB1dC1ib3JkZXItcmFkaXVzLXNtKTtcblxuICAmOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogJGlucHV0LXBhZGRpbmcteS1zbSAkaW5wdXQtcGFkZGluZy14LXNtO1xuICAgIG1hcmdpbjogKC0kaW5wdXQtcGFkZGluZy15LXNtKSAoLSRpbnB1dC1wYWRkaW5nLXgtc20pO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAkaW5wdXQtcGFkZGluZy14LXNtO1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2wtbGcge1xuICBtaW4taGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxnO1xuICBwYWRkaW5nOiAkaW5wdXQtcGFkZGluZy15LWxnICRpbnB1dC1wYWRkaW5nLXgtbGc7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkaW5wdXQtZm9udC1zaXplLWxnKTtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkaW5wdXQtYm9yZGVyLXJhZGl1cy1sZyk7XG5cbiAgJjo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xuICAgIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXktbGcgJGlucHV0LXBhZGRpbmcteC1sZztcbiAgICBtYXJnaW46ICgtJGlucHV0LXBhZGRpbmcteS1sZykgKC0kaW5wdXQtcGFkZGluZy14LWxnKTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogJGlucHV0LXBhZGRpbmcteC1sZztcbiAgfVxufVxuXG4vLyBNYWtlIHN1cmUgdGV4dGFyZWFzIGRvbid0IHNocmluayB0b28gbXVjaCB3aGVuIHJlc2l6ZWRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzI5MTI0XG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1uby1xdWFsaWZ5aW5nLXR5cGVcbnRleHRhcmVhIHtcbiAgJi5mb3JtLWNvbnRyb2wge1xuICAgIG1pbi1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XG4gIH1cblxuICAmLmZvcm0tY29udHJvbC1zbSB7XG4gICAgbWluLWhlaWdodDogJGlucHV0LWhlaWdodC1zbTtcbiAgfVxuXG4gICYuZm9ybS1jb250cm9sLWxnIHtcbiAgICBtaW4taGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxnO1xuICB9XG59XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW5vLXF1YWxpZnlpbmctdHlwZVxuXG4uZm9ybS1jb250cm9sLWNvbG9yIHtcbiAgd2lkdGg6ICRmb3JtLWNvbG9yLXdpZHRoO1xuICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXk7XG5cbiAgJjpub3QoOmRpc2FibGVkKTpub3QoW3JlYWRvbmx5XSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICY6Oi1tb3otY29sb3Itc3dhdGNoIHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRpbnB1dC1ib3JkZXItcmFkaXVzKTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtY29sb3Itc3dhdGNoIHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRpbnB1dC1ib3JkZXItcmFkaXVzKTtcbiAgfVxuXG4gICYuZm9ybS1jb250cm9sLXNtIHsgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtOyB9XG4gICYuZm9ybS1jb250cm9sLWxnIHsgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxnOyB9XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcm9wZXJ0eS1kaXNhbGxvd2VkLWxpc3RcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gIEBpZiBsZW5ndGgoJHRyYW5zaXRpb24pID09IDAge1xuICAgICR0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbi1iYXNlO1xuICB9XG5cbiAgQGlmIGxlbmd0aCgkdHJhbnNpdGlvbikgPiAxIHtcbiAgICBAZWFjaCAkdmFsdWUgaW4gJHRyYW5zaXRpb24ge1xuICAgICAgQGlmICR2YWx1ZSA9PSBudWxsIG9yICR2YWx1ZSA9PSBub25lIHtcbiAgICAgICAgQHdhcm4gXCJUaGUga2V5d29yZCAnbm9uZScgb3IgJ251bGwnIG11c3QgYmUgdXNlZCBhcyBhIHNpbmdsZSBhcmd1bWVudC5cIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgQGlmIG50aCgkdHJhbnNpdGlvbiwgMSkgIT0gbnVsbCB7XG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBAaWYgJGVuYWJsZS1yZWR1Y2VkLW1vdGlvbiBhbmQgbnRoKCR0cmFuc2l0aW9uLCAxKSAhPSBudWxsIGFuZCBudGgoJHRyYW5zaXRpb24sIDEpICE9IG5vbmUge1xuICAgICAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIEdyYWRpZW50c1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZ3JhZGllbnQtYmctbWl4aW5cbkBtaXhpbiBncmFkaWVudC1iZygkY29sb3I6IG51bGwpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gIEBpZiAkZW5hYmxlLWdyYWRpZW50cyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tI3skcHJlZml4fWdyYWRpZW50KTtcbiAgfVxufVxuLy8gc2Nzcy1kb2NzLWVuZCBncmFkaWVudC1iZy1taXhpblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZ3JhZGllbnQtbWl4aW5zXG4vLyBIb3Jpem9udGFsIGdyYWRpZW50LCBmcm9tIGxlZnQgdG8gcmlnaHRcbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuQG1peGluIGdyYWRpZW50LXgoJHN0YXJ0LWNvbG9yOiAkZ3JheS03MDAsICRlbmQtY29sb3I6ICRncmF5LTgwMCwgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTtcbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG5AbWl4aW4gZ3JhZGllbnQteSgkc3RhcnQtY29sb3I6ICRncmF5LTcwMCwgJGVuZC1jb2xvcjogJGdyYXktODAwLCAkc3RhcnQtcGVyY2VudDogbnVsbCwgJGVuZC1wZXJjZW50OiBudWxsKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpO1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAkZ3JheS03MDAsICRlbmQtY29sb3I6ICRncmF5LTgwMCwgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC14LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LXktdGhyZWUtY29sb3JzKCRzdGFydC1jb2xvcjogJGJsdWUsICRtaWQtY29sb3I6ICRwdXJwbGUsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICRyZWQpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG59XG5cbkBtaXhpbiBncmFkaWVudC1yYWRpYWwoJGlubmVyLWNvbG9yOiAkZ3JheS03MDAsICRvdXRlci1jb2xvcjogJGdyYXktODAwKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbn1cblxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKCR3aGl0ZSwgLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4vLyBzY3NzLWRvY3MtZW5kIGdyYWRpZW50LW1peGluc1xuIiwiLy8gU2VsZWN0XG4vL1xuLy8gUmVwbGFjZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCBzZWxlY3Qgd2l0aCBhIGN1c3RvbSBvbmUsIG1vc3RseSBwdWxsZWQgZnJvbVxuLy8gaHR0cHM6Ly9wcmltZXIuZ2l0aHViLmlvLy5cblxuLmZvcm0tc2VsZWN0IHtcbiAgLS0jeyRwcmVmaXh9Zm9ybS1zZWxlY3QtYmctaW1nOiAje2VzY2FwZS1zdmcoJGZvcm0tc2VsZWN0LWluZGljYXRvcil9O1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJGZvcm0tc2VsZWN0LXBhZGRpbmcteSAkZm9ybS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcgJGZvcm0tc2VsZWN0LXBhZGRpbmcteSAkZm9ybS1zZWxlY3QtcGFkZGluZy14O1xuICBmb250LWZhbWlseTogJGZvcm0tc2VsZWN0LWZvbnQtZmFtaWx5O1xuICBAaW5jbHVkZSBmb250LXNpemUoJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0OiAkZm9ybS1zZWxlY3QtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkZm9ybS1zZWxlY3QtbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkZm9ybS1zZWxlY3QtY29sb3I7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRmb3JtLXNlbGVjdC1iZztcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tI3skcHJlZml4fWZvcm0tc2VsZWN0LWJnLWltZyksIHZhcigtLSN7JHByZWZpeH1mb3JtLXNlbGVjdC1iZy1pY29uLCBub25lKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGZvcm0tc2VsZWN0LWJnLXBvc2l0aW9uO1xuICBiYWNrZ3JvdW5kLXNpemU6ICRmb3JtLXNlbGVjdC1iZy1zaXplO1xuICBib3JkZXI6ICRmb3JtLXNlbGVjdC1ib3JkZXItd2lkdGggc29saWQgJGZvcm0tc2VsZWN0LWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1cywgMCk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coJGZvcm0tc2VsZWN0LWJveC1zaGFkb3cpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCRmb3JtLXNlbGVjdC10cmFuc2l0aW9uKTtcblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICRmb3JtLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I7XG4gICAgb3V0bGluZTogMDtcbiAgICBAaWYgJGVuYWJsZS1zaGFkb3dzIHtcbiAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJGZvcm0tc2VsZWN0LWJveC1zaGFkb3csICRmb3JtLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIC8vIEF2b2lkIHVzaW5nIG1peGluIHNvIHdlIGNhbiBwYXNzIGN1c3RvbSBmb2N1cyBzaGFkb3cgcHJvcGVybHlcbiAgICAgIGJveC1zaGFkb3c6ICRmb3JtLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93O1xuICAgIH1cbiAgfVxuXG4gICZbbXVsdGlwbGVdLFxuICAmW3NpemVdOm5vdChbc2l6ZT1cIjFcIl0pIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAkZm9ybS1zZWxlY3QtcGFkZGluZy14O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBjb2xvcjogJGZvcm0tc2VsZWN0LWRpc2FibGVkLWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JtLXNlbGVjdC1kaXNhYmxlZC1iZztcbiAgICBib3JkZXItY29sb3I6ICRmb3JtLXNlbGVjdC1kaXNhYmxlZC1ib3JkZXItY29sb3I7XG4gIH1cblxuICAvLyBSZW1vdmUgb3V0bGluZSBmcm9tIHNlbGVjdCBib3ggaW4gRkZcbiAgJjotbW96LWZvY3VzcmluZyB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtc2hhZG93OiAwIDAgMCAkZm9ybS1zZWxlY3QtY29sb3I7XG4gIH1cbn1cblxuLmZvcm0tc2VsZWN0LXNtIHtcbiAgcGFkZGluZy10b3A6ICRmb3JtLXNlbGVjdC1wYWRkaW5nLXktc207XG4gIHBhZGRpbmctYm90dG9tOiAkZm9ybS1zZWxlY3QtcGFkZGluZy15LXNtO1xuICBwYWRkaW5nLWxlZnQ6ICRmb3JtLXNlbGVjdC1wYWRkaW5nLXgtc207XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkZm9ybS1zZWxlY3QtZm9udC1zaXplLXNtKTtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1cy1zbSk7XG59XG5cbi5mb3JtLXNlbGVjdC1sZyB7XG4gIHBhZGRpbmctdG9wOiAkZm9ybS1zZWxlY3QtcGFkZGluZy15LWxnO1xuICBwYWRkaW5nLWJvdHRvbTogJGZvcm0tc2VsZWN0LXBhZGRpbmcteS1sZztcbiAgcGFkZGluZy1sZWZ0OiAkZm9ybS1zZWxlY3QtcGFkZGluZy14LWxnO1xuICBAaW5jbHVkZSBmb250LXNpemUoJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZS1sZyk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGZvcm0tc2VsZWN0LWJvcmRlci1yYWRpdXMtbGcpO1xufVxuXG5AaWYgJGVuYWJsZS1kYXJrLW1vZGUge1xuICBAaW5jbHVkZSBjb2xvci1tb2RlKGRhcmspIHtcbiAgICAuZm9ybS1zZWxlY3Qge1xuICAgICAgLS0jeyRwcmVmaXh9Zm9ybS1zZWxlY3QtYmctaW1nOiAje2VzY2FwZS1zdmcoJGZvcm0tc2VsZWN0LWluZGljYXRvci1kYXJrKX07XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQ2hlY2svcmFkaW9cbi8vXG5cbi5mb3JtLWNoZWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNoZWNrLW1pbi1oZWlnaHQ7XG4gIHBhZGRpbmctbGVmdDogJGZvcm0tY2hlY2stcGFkZGluZy1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogJGZvcm0tY2hlY2stbWFyZ2luLWJvdHRvbTtcblxuICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6ICRmb3JtLWNoZWNrLXBhZGRpbmctc3RhcnQgKiAtMTtcbiAgfVxufVxuXG4uZm9ybS1jaGVjay1yZXZlcnNlIHtcbiAgcGFkZGluZy1yaWdodDogJGZvcm0tY2hlY2stcGFkZGluZy1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogJGZvcm0tY2hlY2stcGFkZGluZy1zdGFydCAqIC0xO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0IHtcbiAgLS0jeyRwcmVmaXh9Zm9ybS1jaGVjay1iZzogI3skZm9ybS1jaGVjay1pbnB1dC1iZ307XG5cbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAkZm9ybS1jaGVjay1pbnB1dC13aWR0aDtcbiAgaGVpZ2h0OiAkZm9ybS1jaGVjay1pbnB1dC13aWR0aDtcbiAgbWFyZ2luLXRvcDogKCRsaW5lLWhlaWdodC1iYXNlIC0gJGZvcm0tY2hlY2staW5wdXQtd2lkdGgpICogLjU7IC8vIGxpbmUtaGVpZ2h0IG1pbnVzIGNoZWNrIGhlaWdodFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9Zm9ybS1jaGVjay1iZyk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLSN7JHByZWZpeH1mb3JtLWNoZWNrLWJnLWltYWdlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJvcmRlcjogJGZvcm0tY2hlY2staW5wdXQtYm9yZGVyO1xuICBwcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0OyAvLyBLZWVwIHRoZW1lZCBhcHBlYXJhbmNlIGZvciBwcmludFxuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCRmb3JtLWNoZWNrLXRyYW5zaXRpb24pO1xuXG4gICZbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRmb3JtLWNoZWNrLWlucHV0LWJvcmRlci1yYWRpdXMpO1xuICB9XG5cbiAgJlt0eXBlPVwicmFkaW9cIl0ge1xuICAgIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9wZXJ0eS1kaXNhbGxvd2VkLWxpc3RcbiAgICBib3JkZXItcmFkaXVzOiAkZm9ybS1jaGVjay1yYWRpby1ib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGZpbHRlcjogJGZvcm0tY2hlY2staW5wdXQtYWN0aXZlLWZpbHRlcjtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJGZvcm0tY2hlY2staW5wdXQtZm9jdXMtYm9yZGVyO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogJGZvcm0tY2hlY2staW5wdXQtZm9jdXMtYm94LXNoYWRvdztcbiAgfVxuXG4gICY6Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yO1xuXG4gICAgJlt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgQGlmICRlbmFibGUtZ3JhZGllbnRzIHtcbiAgICAgICAgLS0jeyRwcmVmaXh9Zm9ybS1jaGVjay1iZy1pbWFnZTogI3tlc2NhcGUtc3ZnKCRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctaW1hZ2UpfSwgdmFyKC0tI3skcHJlZml4fWdyYWRpZW50KTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAtLSN7JHByZWZpeH1mb3JtLWNoZWNrLWJnLWltYWdlOiAje2VzY2FwZS1zdmcoJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1iZy1pbWFnZSl9O1xuICAgICAgfVxuICAgIH1cblxuICAgICZbdHlwZT1cInJhZGlvXCJdIHtcbiAgICAgIEBpZiAkZW5hYmxlLWdyYWRpZW50cyB7XG4gICAgICAgIC0tI3skcHJlZml4fWZvcm0tY2hlY2stYmctaW1hZ2U6ICN7ZXNjYXBlLXN2ZygkZm9ybS1jaGVjay1yYWRpby1jaGVja2VkLWJnLWltYWdlKX0sIHZhcigtLSN7JHByZWZpeH1ncmFkaWVudCk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgLS0jeyRwcmVmaXh9Zm9ybS1jaGVjay1iZy1pbWFnZTogI3tlc2NhcGUtc3ZnKCRmb3JtLWNoZWNrLXJhZGlvLWNoZWNrZWQtYmctaW1hZ2UpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmW3R5cGU9XCJjaGVja2JveFwiXTppbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJnLWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I7XG5cbiAgICBAaWYgJGVuYWJsZS1ncmFkaWVudHMge1xuICAgICAgLS0jeyRwcmVmaXh9Zm9ybS1jaGVjay1iZy1pbWFnZTogI3tlc2NhcGUtc3ZnKCRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtYmctaW1hZ2UpfSwgdmFyKC0tI3skcHJlZml4fWdyYWRpZW50KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIC0tI3skcHJlZml4fWZvcm0tY2hlY2stYmctaW1hZ2U6ICN7ZXNjYXBlLXN2ZygkZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJnLWltYWdlKX07XG4gICAgfVxuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZmlsdGVyOiBub25lO1xuICAgIG9wYWNpdHk6ICRmb3JtLWNoZWNrLWlucHV0LWRpc2FibGVkLW9wYWNpdHk7XG4gIH1cblxuICAvLyBVc2UgZGlzYWJsZWQgYXR0cmlidXRlIGluIGFkZGl0aW9uIG9mIDpkaXNhYmxlZCBwc2V1ZG8tY2xhc3NcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI4MjQ3XG4gICZbZGlzYWJsZWRdLFxuICAmOmRpc2FibGVkIHtcbiAgICB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIG9wYWNpdHk6ICRmb3JtLWNoZWNrLWxhYmVsLWRpc2FibGVkLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICRmb3JtLWNoZWNrLWxhYmVsLWNvbG9yO1xuICBjdXJzb3I6ICRmb3JtLWNoZWNrLWxhYmVsLWN1cnNvcjtcbn1cblxuLy9cbi8vIFN3aXRjaFxuLy9cblxuLmZvcm0tc3dpdGNoIHtcbiAgcGFkZGluZy1sZWZ0OiAkZm9ybS1zd2l0Y2gtcGFkZGluZy1zdGFydDtcblxuICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgLS0jeyRwcmVmaXh9Zm9ybS1zd2l0Y2gtYmc6ICN7ZXNjYXBlLXN2ZygkZm9ybS1zd2l0Y2gtYmctaW1hZ2UpfTtcblxuICAgIHdpZHRoOiAkZm9ybS1zd2l0Y2gtd2lkdGg7XG4gICAgbWFyZ2luLWxlZnQ6ICRmb3JtLXN3aXRjaC1wYWRkaW5nLXN0YXJ0ICogLTE7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tI3skcHJlZml4fWZvcm0tc3dpdGNoLWJnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRmb3JtLXN3aXRjaC1ib3JkZXItcmFkaXVzLCAwKTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCRmb3JtLXN3aXRjaC10cmFuc2l0aW9uKTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgLS0jeyRwcmVmaXh9Zm9ybS1zd2l0Y2gtYmc6ICN7ZXNjYXBlLXN2ZygkZm9ybS1zd2l0Y2gtZm9jdXMtYmctaW1hZ2UpfTtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGZvcm0tc3dpdGNoLWNoZWNrZWQtYmctcG9zaXRpb247XG5cbiAgICAgIEBpZiAkZW5hYmxlLWdyYWRpZW50cyB7XG4gICAgICAgIC0tI3skcHJlZml4fWZvcm0tc3dpdGNoLWJnOiAje2VzY2FwZS1zdmcoJGZvcm0tc3dpdGNoLWNoZWNrZWQtYmctaW1hZ2UpfSwgdmFyKC0tI3skcHJlZml4fWdyYWRpZW50KTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAtLSN7JHByZWZpeH1mb3JtLXN3aXRjaC1iZzogI3tlc2NhcGUtc3ZnKCRmb3JtLXN3aXRjaC1jaGVja2VkLWJnLWltYWdlKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5mb3JtLWNoZWNrLXJldmVyc2Uge1xuICAgIHBhZGRpbmctcmlnaHQ6ICRmb3JtLXN3aXRjaC1wYWRkaW5nLXN0YXJ0O1xuICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogJGZvcm0tc3dpdGNoLXBhZGRpbmctc3RhcnQgKiAtMTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1jaGVjay1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi1lbmQ7XG59XG5cbi5idG4tY2hlY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICZbZGlzYWJsZWRdLFxuICAmOmRpc2FibGVkIHtcbiAgICArIC5idG4ge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAkZm9ybS1jaGVjay1idG4tY2hlY2stZGlzYWJsZWQtb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQGlmICRlbmFibGUtZGFyay1tb2RlIHtcbiAgQGluY2x1ZGUgY29sb3ItbW9kZShkYXJrKSB7XG4gICAgLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6Y2hlY2tlZCk6bm90KDpmb2N1cykge1xuICAgICAgLS0jeyRwcmVmaXh9Zm9ybS1zd2l0Y2gtYmc6ICN7ZXNjYXBlLXN2ZygkZm9ybS1zd2l0Y2gtYmctaW1hZ2UtZGFyayl9O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gUmFuZ2Vcbi8vXG4vLyBTdHlsZSByYW5nZSBpbnB1dHMgdGhlIHNhbWUgYWNyb3NzIGJyb3dzZXJzLiBWZW5kb3Itc3BlY2lmaWMgcnVsZXMgZm9yIHBzZXVkb1xuLy8gZWxlbWVudHMgY2Fubm90IGJlIG1peGVkLiBBcyBzdWNoLCB0aGVyZSBhcmUgbm8gc2hhcmVkIHN0eWxlcyBmb3IgZm9jdXMgb3Jcbi8vIGFjdGl2ZSBzdGF0ZXMgb24gcHJlZml4ZWQgc2VsZWN0b3JzLlxuXG4uZm9ybS1yYW5nZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGFkZCgkZm9ybS1yYW5nZS10aHVtYi1oZWlnaHQsICRmb3JtLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGggKiAyKTtcbiAgcGFkZGluZzogMDsgLy8gTmVlZCB0byByZXNldCBwYWRkaW5nXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICAvLyBQc2V1ZG8tZWxlbWVudHMgbXVzdCBiZSBzcGxpdCBhY3Jvc3MgbXVsdGlwbGUgcnVsZXNldHMgdG8gaGF2ZSBhbiBlZmZlY3QuXG4gICAgLy8gTm8gYm94LXNoYWRvdygpIG1peGluIGZvciBmb2N1cyBhY2Nlc3NpYmlsaXR5LlxuICAgICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHsgYm94LXNoYWRvdzogJGZvcm0tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzsgfVxuICAgICY6Oi1tb3otcmFuZ2UtdGh1bWIgICAgIHsgYm94LXNoYWRvdzogJGZvcm0tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzsgfVxuICB9XG5cbiAgJjo6LW1vei1mb2N1cy1vdXRlciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIHdpZHRoOiAkZm9ybS1yYW5nZS10aHVtYi13aWR0aDtcbiAgICBoZWlnaHQ6ICRmb3JtLXJhbmdlLXRodW1iLWhlaWdodDtcbiAgICBtYXJnaW4tdG9wOiAoJGZvcm0tcmFuZ2UtdHJhY2staGVpZ2h0IC0gJGZvcm0tcmFuZ2UtdGh1bWItaGVpZ2h0KSAqIC41OyAvLyBXZWJraXQgc3BlY2lmaWNcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWJnKCRmb3JtLXJhbmdlLXRodW1iLWJnKTtcbiAgICBib3JkZXI6ICRmb3JtLXJhbmdlLXRodW1iLWJvcmRlcjtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRmb3JtLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXMpO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJGZvcm0tcmFuZ2UtdGh1bWItYm94LXNoYWRvdyk7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbigkZm9ybS1yYW5nZS10aHVtYi10cmFuc2l0aW9uKTtcblxuICAgICY6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWJnKCRmb3JtLXJhbmdlLXRodW1iLWFjdGl2ZS1iZyk7XG4gICAgfVxuICB9XG5cbiAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgIHdpZHRoOiAkZm9ybS1yYW5nZS10cmFjay13aWR0aDtcbiAgICBoZWlnaHQ6ICRmb3JtLXJhbmdlLXRyYWNrLWhlaWdodDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7IC8vIFdoeT9cbiAgICBjdXJzb3I6ICRmb3JtLXJhbmdlLXRyYWNrLWN1cnNvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybS1yYW5nZS10cmFjay1iZztcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGZvcm0tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1cyk7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygkZm9ybS1yYW5nZS10cmFjay1ib3gtc2hhZG93KTtcbiAgfVxuXG4gICY6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgIHdpZHRoOiAkZm9ybS1yYW5nZS10aHVtYi13aWR0aDtcbiAgICBoZWlnaHQ6ICRmb3JtLXJhbmdlLXRodW1iLWhlaWdodDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWJnKCRmb3JtLXJhbmdlLXRodW1iLWJnKTtcbiAgICBib3JkZXI6ICRmb3JtLXJhbmdlLXRodW1iLWJvcmRlcjtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRmb3JtLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXMpO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJGZvcm0tcmFuZ2UtdGh1bWItYm94LXNoYWRvdyk7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbigkZm9ybS1yYW5nZS10aHVtYi10cmFuc2l0aW9uKTtcblxuICAgICY6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWJnKCRmb3JtLXJhbmdlLXRodW1iLWFjdGl2ZS1iZyk7XG4gICAgfVxuICB9XG5cbiAgJjo6LW1vei1yYW5nZS10cmFjayB7XG4gICAgd2lkdGg6ICRmb3JtLXJhbmdlLXRyYWNrLXdpZHRoO1xuICAgIGhlaWdodDogJGZvcm0tcmFuZ2UtdHJhY2staGVpZ2h0O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6ICRmb3JtLXJhbmdlLXRyYWNrLWN1cnNvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybS1yYW5nZS10cmFjay1iZztcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyAvLyBGaXJlZm94IHNwZWNpZmljP1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGZvcm0tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1cyk7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygkZm9ybS1yYW5nZS10cmFjay1ib3gtc2hhZG93KTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm0tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc7XG4gICAgfVxuXG4gICAgJjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZztcbiAgICB9XG4gIH1cbn1cbiIsIi5mb3JtLWZsb2F0aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gID4gLmZvcm0tY29udHJvbCxcbiAgPiAuZm9ybS1jb250cm9sLXBsYWludGV4dCxcbiAgPiAuZm9ybS1zZWxlY3Qge1xuICAgIGhlaWdodDogJGZvcm0tZmxvYXRpbmctaGVpZ2h0O1xuICAgIG1pbi1oZWlnaHQ6ICRmb3JtLWZsb2F0aW5nLWhlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGZvcm0tZmxvYXRpbmctbGluZS1oZWlnaHQ7XG4gIH1cblxuICA+IGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBoZWlnaHQ6IDEwMCU7IC8vIGFsbG93IHRleHRhcmVhc1xuICAgIHBhZGRpbmc6ICRmb3JtLWZsb2F0aW5nLXBhZGRpbmcteSAkZm9ybS1mbG9hdGluZy1wYWRkaW5nLXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlcjogJGlucHV0LWJvcmRlci13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDsgLy8gUmVxdWlyZWQgZm9yIGFsaWduaW5nIGxhYmVsJ3MgdGV4dCB3aXRoIHRoZSBpbnB1dCBhcyBpdCBhZmZlY3RzIGlubmVyIGJveCBtb2RlbFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCRmb3JtLWZsb2F0aW5nLXRyYW5zaXRpb24pO1xuICB9XG5cbiAgPiAuZm9ybS1jb250cm9sLFxuICA+IC5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0IHtcbiAgICBwYWRkaW5nOiAkZm9ybS1mbG9hdGluZy1wYWRkaW5nLXkgJGZvcm0tZmxvYXRpbmctcGFkZGluZy14O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Zm9jdXMsXG4gICAgJjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gICAgICBwYWRkaW5nLXRvcDogJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy10O1xuICAgICAgcGFkZGluZy1ib3R0b206ICRmb3JtLWZsb2F0aW5nLWlucHV0LXBhZGRpbmctYjtcbiAgICB9XG4gICAgLy8gRHVwbGljYXRlZCBiZWNhdXNlIGA6LXdlYmtpdC1hdXRvZmlsbGAgaW52YWxpZGF0ZXMgb3RoZXIgc2VsZWN0b3JzIHdoZW4gZ3JvdXBlZFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgICBwYWRkaW5nLXRvcDogJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy10O1xuICAgICAgcGFkZGluZy1ib3R0b206ICRmb3JtLWZsb2F0aW5nLWlucHV0LXBhZGRpbmctYjtcbiAgICB9XG4gIH1cblxuICA+IC5mb3JtLXNlbGVjdCB7XG4gICAgcGFkZGluZy10b3A6ICRmb3JtLWZsb2F0aW5nLWlucHV0LXBhZGRpbmctdDtcbiAgICBwYWRkaW5nLWJvdHRvbTogJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy1iO1xuICB9XG5cbiAgPiAuZm9ybS1jb250cm9sOmZvY3VzLFxuICA+IC5mb3JtLWNvbnRyb2w6bm90KDpwbGFjZWhvbGRlci1zaG93biksXG4gID4gLmZvcm0tY29udHJvbC1wbGFpbnRleHQsXG4gID4gLmZvcm0tc2VsZWN0IHtcbiAgICB+IGxhYmVsIHtcbiAgICAgIGNvbG9yOiByZ2JhKHZhcigtLSN7JHByZWZpeH1ib2R5LWNvbG9yLXJnYiksICN7JGZvcm0tZmxvYXRpbmctbGFiZWwtb3BhY2l0eX0pO1xuICAgICAgdHJhbnNmb3JtOiAkZm9ybS1mbG9hdGluZy1sYWJlbC10cmFuc2Zvcm07XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogJGZvcm0tZmxvYXRpbmctcGFkZGluZy15ICgkZm9ybS1mbG9hdGluZy1wYWRkaW5nLXggKiAuNSk7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBoZWlnaHQ6ICRmb3JtLWZsb2F0aW5nLWxhYmVsLWhlaWdodDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJnO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRpbnB1dC1ib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gRHVwbGljYXRlZCBiZWNhdXNlIGA6LXdlYmtpdC1hdXRvZmlsbGAgaW52YWxpZGF0ZXMgb3RoZXIgc2VsZWN0b3JzIHdoZW4gZ3JvdXBlZFxuICA+IC5mb3JtLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgfiBsYWJlbCB7XG4gICAgICBjb2xvcjogcmdiYSh2YXIoLS0jeyRwcmVmaXh9Ym9keS1jb2xvci1yZ2IpLCAjeyRmb3JtLWZsb2F0aW5nLWxhYmVsLW9wYWNpdHl9KTtcbiAgICAgIHRyYW5zZm9ybTogJGZvcm0tZmxvYXRpbmctbGFiZWwtdHJhbnNmb3JtO1xuICAgIH1cbiAgfVxuXG4gID4gLmZvcm0tY29udHJvbC1wbGFpbnRleHQge1xuICAgIH4gbGFiZWwge1xuICAgICAgYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoIDA7IC8vIFJlcXVpcmVkIHRvIHByb3Blcmx5IHBvc2l0aW9uIGxhYmVsIHRleHQgLSBhcyBleHBsYWluZWQgYWJvdmVcbiAgICB9XG4gIH1cblxuICA+IDpkaXNhYmxlZCB+IGxhYmVsLFxuICA+IC5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQgfiBsYWJlbCB7IC8vIFJlcXVpcmVkIGZvciBgLmZvcm0tY29udHJvbGBzIGJlY2F1c2Ugb2Ygc3BlY2lmaWNpdHlcbiAgICBjb2xvcjogJGZvcm0tZmxvYXRpbmctbGFiZWwtZGlzYWJsZWQtY29sb3I7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtZGlzYWJsZWQtYmc7XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQmFzZSBzdHlsZXNcbi8vXG5cbi5pbnB1dC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwOyAvLyBGb3IgZm9ybSB2YWxpZGF0aW9uIGZlZWRiYWNrXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTtcblxuICA+IC5mb3JtLWNvbnRyb2wsXG4gID4gLmZvcm0tc2VsZWN0LFxuICA+IC5mb3JtLWZsb2F0aW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8vIEZvciBmb2N1cyBzdGF0ZSdzIHotaW5kZXhcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB3aWR0aDogMSU7XG4gICAgbWluLXdpZHRoOiAwOyAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNjI0NzE0MC93aHktZG9udC1mbGV4LWl0ZW1zLXNocmluay1wYXN0LWNvbnRlbnQtc2l6ZVxuICB9XG5cbiAgLy8gQnJpbmcgdGhlIFwiYWN0aXZlXCIgZm9ybSBjb250cm9sIHRvIHRoZSB0b3Agb2Ygc3Vycm91bmRpbmcgZWxlbWVudHNcbiAgPiAuZm9ybS1jb250cm9sOmZvY3VzLFxuICA+IC5mb3JtLXNlbGVjdDpmb2N1cyxcbiAgPiAuZm9ybS1mbG9hdGluZzpmb2N1cy13aXRoaW4ge1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAvLyBFbnN1cmUgYnV0dG9ucyBhcmUgYWx3YXlzIGFib3ZlIGlucHV0cyBmb3IgbW9yZSB2aXN1YWxseSBwbGVhc2luZyBib3JkZXJzLlxuICAvLyBUaGlzIGlzbid0IG5lZWRlZCBmb3IgYC5pbnB1dC1ncm91cC10ZXh0YCBzaW5jZSBpdCBzaGFyZXMgdGhlIHNhbWUgYm9yZGVyLWNvbG9yXG4gIC8vIGFzIG91ciBpbnB1dHMuXG4gIC5idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICB6LWluZGV4OiA1O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFRleHR1YWwgYWRkb25zXG4vL1xuLy8gU2VydmVzIGFzIGEgY2F0Y2gtYWxsIGVsZW1lbnQgZm9yIGFueSB0ZXh0IG9yIHJhZGlvL2NoZWNrYm94IGlucHV0IHlvdSB3aXNoXG4vLyB0byBwcmVwZW5kIG9yIGFwcGVuZCB0byBhbiBpbnB1dC5cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAkaW5wdXQtZ3JvdXAtYWRkb24tcGFkZGluZy15ICRpbnB1dC1ncm91cC1hZGRvbi1wYWRkaW5nLXg7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkaW5wdXQtZm9udC1zaXplKTsgLy8gTWF0Y2ggaW5wdXRzXG4gIGZvbnQtd2VpZ2h0OiAkaW5wdXQtZ3JvdXAtYWRkb24tZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXQtbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWdyb3VwLWFkZG9uLWJnO1xuICBib3JkZXI6ICRpbnB1dC1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkaW5wdXQtYm9yZGVyLXJhZGl1cyk7XG59XG5cblxuLy8gU2l6aW5nXG4vL1xuLy8gUmVtaXggdGhlIGRlZmF1bHQgZm9ybSBjb250cm9sIHNpemluZyBjbGFzc2VzIGludG8gbmV3IG9uZXMgZm9yIGVhc2llclxuLy8gbWFuaXB1bGF0aW9uLlxuXG4uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLWxnID4gLmZvcm0tc2VsZWN0LFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLXRleHQsXG4uaW5wdXQtZ3JvdXAtbGcgPiAuYnRuIHtcbiAgcGFkZGluZzogJGlucHV0LXBhZGRpbmcteS1sZyAkaW5wdXQtcGFkZGluZy14LWxnO1xuICBAaW5jbHVkZSBmb250LXNpemUoJGlucHV0LWZvbnQtc2l6ZS1sZyk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGlucHV0LWJvcmRlci1yYWRpdXMtbGcpO1xufVxuXG4uaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLXNtID4gLmZvcm0tc2VsZWN0LFxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLXRleHQsXG4uaW5wdXQtZ3JvdXAtc20gPiAuYnRuIHtcbiAgcGFkZGluZzogJGlucHV0LXBhZGRpbmcteS1zbSAkaW5wdXQtcGFkZGluZy14LXNtO1xuICBAaW5jbHVkZSBmb250LXNpemUoJGlucHV0LWZvbnQtc2l6ZS1zbSk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGlucHV0LWJvcmRlci1yYWRpdXMtc20pO1xufVxuXG4uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1zZWxlY3QsXG4uaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1zZWxlY3Qge1xuICBwYWRkaW5nLXJpZ2h0OiAkZm9ybS1zZWxlY3QtcGFkZGluZy14ICsgJGZvcm0tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nO1xufVxuXG5cbi8vIFJvdW5kZWQgY29ybmVyc1xuLy9cbi8vIFRoZXNlIHJ1bGVzZXRzIG11c3QgY29tZSBhZnRlciB0aGUgc2l6aW5nIG9uZXMgdG8gcHJvcGVybHkgb3ZlcnJpZGUgc20gYW5kIGxnXG4vLyBib3JkZXItcmFkaXVzIHZhbHVlcyB3aGVuIGV4dGVuZGluZy4gVGhleSdyZSBtb3JlIHNwZWNpZmljIHRoYW4gd2UnZCBsaWtlXG4vLyB3aXRoIHRoZSBgLmlucHV0LWdyb3VwID5gIHBhcnQsIGJ1dCB3aXRob3V0IGl0LCB3ZSBjYW5ub3Qgb3ZlcnJpZGUgdGhlIHNpemluZy5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnNcbi5pbnB1dC1ncm91cCB7XG4gICY6bm90KC5oYXMtdmFsaWRhdGlvbikge1xuICAgID4gOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpOm5vdCguZHJvcGRvd24tbWVudSk6bm90KC5mb3JtLWZsb2F0aW5nKSxcbiAgICA+IC5kcm9wZG93bi10b2dnbGU6bnRoLWxhc3QtY2hpbGQobiArIDMpLFxuICAgID4gLmZvcm0tZmxvYXRpbmc6bm90KDpsYXN0LWNoaWxkKSA+IC5mb3JtLWNvbnRyb2wsXG4gICAgPiAuZm9ybS1mbG9hdGluZzpub3QoOmxhc3QtY2hpbGQpID4gLmZvcm0tc2VsZWN0IHtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci1lbmQtcmFkaXVzKDApO1xuICAgIH1cbiAgfVxuXG4gICYuaGFzLXZhbGlkYXRpb24ge1xuICAgID4gOm50aC1sYXN0LWNoaWxkKG4gKyAzKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSk6bm90KC5kcm9wZG93bi1tZW51KTpub3QoLmZvcm0tZmxvYXRpbmcpLFxuICAgID4gLmRyb3Bkb3duLXRvZ2dsZTpudGgtbGFzdC1jaGlsZChuICsgNCksXG4gICAgPiAuZm9ybS1mbG9hdGluZzpudGgtbGFzdC1jaGlsZChuICsgMykgPiAuZm9ybS1jb250cm9sLFxuICAgID4gLmZvcm0tZmxvYXRpbmc6bnRoLWxhc3QtY2hpbGQobiArIDMpID4gLmZvcm0tc2VsZWN0IHtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci1lbmQtcmFkaXVzKDApO1xuICAgIH1cbiAgfVxuXG4gICR2YWxpZGF0aW9uLW1lc3NhZ2VzOiBcIlwiO1xuICBAZWFjaCAkc3RhdGUgaW4gbWFwLWtleXMoJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXMpIHtcbiAgICAkdmFsaWRhdGlvbi1tZXNzYWdlczogJHZhbGlkYXRpb24tbWVzc2FnZXMgKyBcIjpub3QoLlwiICsgdW5xdW90ZSgkc3RhdGUpICsgXCItdG9vbHRpcClcIiArIFwiOm5vdCguXCIgKyB1bnF1b3RlKCRzdGF0ZSkgKyBcIi1mZWVkYmFjaylcIjtcbiAgfVxuXG4gID4gOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tbWVudSkjeyR2YWxpZGF0aW9uLW1lc3NhZ2VzfSB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skaW5wdXQtYm9yZGVyLXdpZHRofSAqIC0xKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQtcmFkaXVzKDApO1xuICB9XG5cbiAgPiAuZm9ybS1mbG9hdGluZzpub3QoOmZpcnN0LWNoaWxkKSA+IC5mb3JtLWNvbnRyb2wsXG4gID4gLmZvcm0tZmxvYXRpbmc6bm90KDpmaXJzdC1jaGlsZCkgPiAuZm9ybS1zZWxlY3Qge1xuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydC1yYWRpdXMoMCk7XG4gIH1cbn1cbiIsIi8vIFRoaXMgbWl4aW4gdXNlcyBhbiBgaWYoKWAgdGVjaG5pcXVlIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBEYXJ0IFNhc3Ncbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9zYXNzL2lzc3Vlcy8xODczI2lzc3VlY29tbWVudC0xNTIyOTM3MjUgZm9yIG1vcmUgZGV0YWlsc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS12YWxpZGF0aW9uLW1peGluc1xuQG1peGluIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZS1zZWxlY3Rvcigkc3RhdGUpIHtcbiAgQGlmICgkc3RhdGUgPT0gXCJ2YWxpZFwiIG9yICRzdGF0ZSA9PSBcImludmFsaWRcIikge1xuICAgIC53YXMtdmFsaWRhdGVkICN7aWYoJiwgXCImXCIsIFwiXCIpfTojeyRzdGF0ZX0sXG4gICAgI3tpZigmLCBcIiZcIiwgXCJcIil9LmlzLSN7JHN0YXRlfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICN7aWYoJiwgXCImXCIsIFwiXCIpfS5pcy0jeyRzdGF0ZX0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBmb3JtLXZhbGlkYXRpb24tc3RhdGUoXG4gICRzdGF0ZSxcbiAgJGNvbG9yLFxuICAkaWNvbixcbiAgJHRvb2x0aXAtY29sb3I6IGNvbG9yLWNvbnRyYXN0KCRjb2xvciksXG4gICR0b29sdGlwLWJnLWNvbG9yOiByZ2JhKCRjb2xvciwgJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5KSxcbiAgJGZvY3VzLWJveC1zaGFkb3c6IDAgMCAkaW5wdXQtYnRuLWZvY3VzLWJsdXIgJGlucHV0LWZvY3VzLXdpZHRoIHJnYmEoJGNvbG9yLCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yLW9wYWNpdHkpLFxuICAkYm9yZGVyLWNvbG9yOiAkY29sb3Jcbikge1xuICAuI3skc3RhdGV9LWZlZWRiYWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6ICRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A7XG4gICAgQGluY2x1ZGUgZm9udC1zaXplKCRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZSk7XG4gICAgZm9udC1zdHlsZTogJGZvcm0tZmVlZGJhY2stZm9udC1zdHlsZTtcbiAgICBjb2xvcjogJGNvbG9yO1xuICB9XG5cbiAgLiN7JHN0YXRlfS10b29sdGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHotaW5kZXg6IDU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8vIENvbnRhaW4gdG8gcGFyZW50IHdoZW4gcG9zc2libGVcbiAgICBwYWRkaW5nOiAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteSAkZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDtcbiAgICBtYXJnaW4tdG9wOiAuMXJlbTtcbiAgICBAaW5jbHVkZSBmb250LXNpemUoJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiAkZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0O1xuICAgIGNvbG9yOiAkdG9vbHRpcC1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9vbHRpcC1iZy1jb2xvcjtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1cyk7XG4gIH1cblxuICBAaW5jbHVkZSBmb3JtLXZhbGlkYXRpb24tc3RhdGUtc2VsZWN0b3IoJHN0YXRlKSB7XG4gICAgfiAuI3skc3RhdGV9LWZlZWRiYWNrLFxuICAgIH4gLiN7JHN0YXRlfS10b29sdGlwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIEBpbmNsdWRlIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZS1zZWxlY3Rvcigkc3RhdGUpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcblxuICAgICAgQGlmICRlbmFibGUtdmFsaWRhdGlvbi1pY29ucyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICRpbnB1dC1oZWlnaHQtaW5uZXI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGVzY2FwZS1zdmcoJGljb24pO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAkaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgICAgIEBpZiAkZW5hYmxlLXNoYWRvd3Mge1xuICAgICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJGlucHV0LWJveC1zaGFkb3csICRmb2N1cy1ib3gtc2hhZG93KTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgLy8gQXZvaWQgdXNpbmcgbWl4aW4gc28gd2UgY2FuIHBhc3MgY3VzdG9tIGZvY3VzIHNoYWRvdyBwcm9wZXJseVxuICAgICAgICAgIGJveC1zaGFkb3c6ICRmb2N1cy1ib3gtc2hhZG93O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlbGVjdG9yLW5vLXF1YWxpZnlpbmctdHlwZVxuICB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICAgIEBpbmNsdWRlIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZS1zZWxlY3Rvcigkc3RhdGUpIHtcbiAgICAgIEBpZiAkZW5hYmxlLXZhbGlkYXRpb24taWNvbnMge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkaW5wdXQtaGVpZ2h0LWlubmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyIHJpZ2h0ICRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9ybS1zZWxlY3Qge1xuICAgIEBpbmNsdWRlIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZS1zZWxlY3Rvcigkc3RhdGUpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcblxuICAgICAgQGlmICRlbmFibGUtdmFsaWRhdGlvbi1pY29ucyB7XG4gICAgICAgICY6bm90KFttdWx0aXBsZV0pOm5vdChbc2l6ZV0pLFxuICAgICAgICAmOm5vdChbbXVsdGlwbGVdKVtzaXplPVwiMVwiXSB7XG4gICAgICAgICAgLS0jeyRwcmVmaXh9Zm9ybS1zZWxlY3QtYmctaWNvbjogI3tlc2NhcGUtc3ZnKCRpY29uKX07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogJGZvcm0tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1lbmQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGZvcm0tc2VsZWN0LWJnLXBvc2l0aW9uLCAkZm9ybS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICRmb3JtLXNlbGVjdC1iZy1zaXplLCAkZm9ybS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG4gICAgICAgIEBpZiAkZW5hYmxlLXNoYWRvd3Mge1xuICAgICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJGZvcm0tc2VsZWN0LWJveC1zaGFkb3csICRmb2N1cy1ib3gtc2hhZG93KTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgLy8gQXZvaWQgdXNpbmcgbWl4aW4gc28gd2UgY2FuIHBhc3MgY3VzdG9tIGZvY3VzIHNoYWRvdyBwcm9wZXJseVxuICAgICAgICAgIGJveC1zaGFkb3c6ICRmb2N1cy1ib3gtc2hhZG93O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tY29udHJvbC1jb2xvciB7XG4gICAgQGluY2x1ZGUgZm9ybS12YWxpZGF0aW9uLXN0YXRlLXNlbGVjdG9yKCRzdGF0ZSkge1xuICAgICAgQGlmICRlbmFibGUtdmFsaWRhdGlvbi1pY29ucyB7XG4gICAgICAgIHdpZHRoOiBhZGQoJGZvcm0tY29sb3Itd2lkdGgsICRpbnB1dC1oZWlnaHQtaW5uZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICBAaW5jbHVkZSBmb3JtLXZhbGlkYXRpb24tc3RhdGUtc2VsZWN0b3IoJHN0YXRlKSB7XG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG5cbiAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6ICRmb2N1cy1ib3gtc2hhZG93O1xuICAgICAgfVxuXG4gICAgICB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZvcm0tY2hlY2staW5saW5lIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICB+IC4jeyRzdGF0ZX0tZmVlZGJhY2sge1xuICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWdyb3VwIHtcbiAgICA+IC5mb3JtLWNvbnRyb2w6bm90KDpmb2N1cyksXG4gICAgPiAuZm9ybS1zZWxlY3Q6bm90KDpmb2N1cyksXG4gICAgPiAuZm9ybS1mbG9hdGluZzpub3QoOmZvY3VzLXdpdGhpbikge1xuICAgICAgQGluY2x1ZGUgZm9ybS12YWxpZGF0aW9uLXN0YXRlLXNlbGVjdG9yKCRzdGF0ZSkge1xuICAgICAgICBAaWYgJHN0YXRlID09IFwidmFsaWRcIiB7XG4gICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgfSBAZWxzZSBpZiAkc3RhdGUgPT0gXCJpbnZhbGlkXCIge1xuICAgICAgICAgIHotaW5kZXg6IDQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS12YWxpZGF0aW9uLW1peGluc1xuIiwiLy9cbi8vIEJhc2Ugc3R5bGVzXG4vL1xuXG4uYnRuIHtcbiAgLy8gc2Nzcy1kb2NzLXN0YXJ0IGJ0bi1jc3MtdmFyc1xuICAtLSN7JHByZWZpeH1idG4tcGFkZGluZy14OiAjeyRidG4tcGFkZGluZy14fTtcbiAgLS0jeyRwcmVmaXh9YnRuLXBhZGRpbmcteTogI3skYnRuLXBhZGRpbmcteX07XG4gIC0tI3skcHJlZml4fWJ0bi1mb250LWZhbWlseTogI3skYnRuLWZvbnQtZmFtaWx5fTtcbiAgQGluY2x1ZGUgcmZzKCRidG4tZm9udC1zaXplLCAtLSN7JHByZWZpeH1idG4tZm9udC1zaXplKTtcbiAgLS0jeyRwcmVmaXh9YnRuLWZvbnQtd2VpZ2h0OiAjeyRidG4tZm9udC13ZWlnaHR9O1xuICAtLSN7JHByZWZpeH1idG4tbGluZS1oZWlnaHQ6ICN7JGJ0bi1saW5lLWhlaWdodH07XG4gIC0tI3skcHJlZml4fWJ0bi1jb2xvcjogI3skYnRuLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9YnRuLWJnOiB0cmFuc3BhcmVudDtcbiAgLS0jeyRwcmVmaXh9YnRuLWJvcmRlci13aWR0aDogI3skYnRuLWJvcmRlci13aWR0aH07XG4gIC0tI3skcHJlZml4fWJ0bi1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLSN7JHByZWZpeH1idG4tYm9yZGVyLXJhZGl1czogI3skYnRuLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1idG4taG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS0jeyRwcmVmaXh9YnRuLWJveC1zaGFkb3c6ICN7JGJ0bi1ib3gtc2hhZG93fTtcbiAgLS0jeyRwcmVmaXh9YnRuLWRpc2FibGVkLW9wYWNpdHk6ICN7JGJ0bi1kaXNhYmxlZC1vcGFjaXR5fTtcbiAgLS0jeyRwcmVmaXh9YnRuLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICN7JGJ0bi1mb2N1cy13aWR0aH0gcmdiYSh2YXIoLS0jeyRwcmVmaXh9YnRuLWZvY3VzLXNoYWRvdy1yZ2IpLCAuNSk7XG4gIC8vIHNjc3MtZG9jcy1lbmQgYnRuLWNzcy12YXJzXG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiB2YXIoLS0jeyRwcmVmaXh9YnRuLXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fWJ0bi1wYWRkaW5nLXgpO1xuICBmb250LWZhbWlseTogdmFyKC0tI3skcHJlZml4fWJ0bi1mb250LWZhbWlseSk7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSh2YXIoLS0jeyRwcmVmaXh9YnRuLWZvbnQtc2l6ZSkpO1xuICBmb250LXdlaWdodDogdmFyKC0tI3skcHJlZml4fWJ0bi1mb250LXdlaWdodCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9YnRuLWxpbmUtaGVpZ2h0KTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1idG4tY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogaWYoJGxpbmstZGVjb3JhdGlvbiA9PSBub25lLCBudWxsLCBub25lKTtcbiAgd2hpdGUtc3BhY2U6ICRidG4td2hpdGUtc3BhY2U7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogaWYoJGVuYWJsZS1idXR0b24tcG9pbnRlcnMsIHBvaW50ZXIsIG51bGwpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiB2YXIoLS0jeyRwcmVmaXh9YnRuLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tI3skcHJlZml4fWJ0bi1ib3JkZXItY29sb3IpO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKHZhcigtLSN7JHByZWZpeH1idG4tYm9yZGVyLXJhZGl1cykpO1xuICBAaW5jbHVkZSBncmFkaWVudC1iZyh2YXIoLS0jeyRwcmVmaXh9YnRuLWJnKSk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3codmFyKC0tI3skcHJlZml4fWJ0bi1ib3gtc2hhZG93KSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oJGJ0bi10cmFuc2l0aW9uKTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWJ0bi1ob3Zlci1jb2xvcik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpZigkbGluay1ob3Zlci1kZWNvcmF0aW9uID09IHVuZGVybGluZSwgbm9uZSwgbnVsbCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fWJ0bi1ob3Zlci1iZyk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YnRuLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gIH1cblxuICAuYnRuLWNoZWNrICsgJjpob3ZlciB7XG4gICAgLy8gb3ZlcnJpZGUgZm9yIHRoZSBjaGVja2JveC9yYWRpbyBidXR0b25zXG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1idG4tY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH1idG4tYmcpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tI3skcHJlZml4fWJ0bi1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWJ0bi1ob3Zlci1jb2xvcik7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtYmcodmFyKC0tI3skcHJlZml4fWJ0bi1ob3Zlci1iZykpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tI3skcHJlZml4fWJ0bi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLy8gQXZvaWQgdXNpbmcgbWl4aW4gc28gd2UgY2FuIHBhc3MgY3VzdG9tIGZvY3VzIHNoYWRvdyBwcm9wZXJseVxuICAgIEBpZiAkZW5hYmxlLXNoYWRvd3Mge1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tI3skcHJlZml4fWJ0bi1ib3gtc2hhZG93KSwgdmFyKC0tI3skcHJlZml4fWJ0bi1mb2N1cy1ib3gtc2hhZG93KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLSN7JHByZWZpeH1idG4tZm9jdXMtYm94LXNoYWRvdyk7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1jaGVjazpmb2N1cy12aXNpYmxlICsgJiB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YnRuLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgb3V0bGluZTogMDtcbiAgICAvLyBBdm9pZCB1c2luZyBtaXhpbiBzbyB3ZSBjYW4gcGFzcyBjdXN0b20gZm9jdXMgc2hhZG93IHByb3Blcmx5XG4gICAgQGlmICRlbmFibGUtc2hhZG93cyB7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS0jeyRwcmVmaXh9YnRuLWJveC1zaGFkb3cpLCB2YXIoLS0jeyRwcmVmaXh9YnRuLWZvY3VzLWJveC1zaGFkb3cpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tI3skcHJlZml4fWJ0bi1mb2N1cy1ib3gtc2hhZG93KTtcbiAgICB9XG4gIH1cblxuICAuYnRuLWNoZWNrOmNoZWNrZWQgKyAmLFxuICA6bm90KC5idG4tY2hlY2spICsgJjphY3RpdmUsXG4gICY6Zmlyc3QtY2hpbGQ6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJi5zaG93IHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWJ0bi1hY3RpdmUtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH1idG4tYWN0aXZlLWJnKTtcbiAgICAvLyBSZW1vdmUgQ1NTIGdyYWRpZW50cyBpZiB0aGV5J3JlIGVuYWJsZWRcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBpZigkZW5hYmxlLWdyYWRpZW50cywgbm9uZSwgbnVsbCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YnRuLWFjdGl2ZS1ib3JkZXItY29sb3IpO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3codmFyKC0tI3skcHJlZml4fWJ0bi1hY3RpdmUtc2hhZG93KSk7XG5cbiAgICAmOmZvY3VzLXZpc2libGUge1xuICAgICAgLy8gQXZvaWQgdXNpbmcgbWl4aW4gc28gd2UgY2FuIHBhc3MgY3VzdG9tIGZvY3VzIHNoYWRvdyBwcm9wZXJseVxuICAgICAgQGlmICRlbmFibGUtc2hhZG93cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLSN7JHByZWZpeH1idG4tYWN0aXZlLXNoYWRvdyksIHZhcigtLSN7JHByZWZpeH1idG4tZm9jdXMtYm94LXNoYWRvdyk7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tI3skcHJlZml4fWJ0bi1mb2N1cy1ib3gtc2hhZG93KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnRuLWNoZWNrOmNoZWNrZWQ6Zm9jdXMtdmlzaWJsZSArICYge1xuICAgIC8vIEF2b2lkIHVzaW5nIG1peGluIHNvIHdlIGNhbiBwYXNzIGN1c3RvbSBmb2N1cyBzaGFkb3cgcHJvcGVybHlcbiAgICBAaWYgJGVuYWJsZS1zaGFkb3dzIHtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLSN7JHByZWZpeH1idG4tYWN0aXZlLXNoYWRvdyksIHZhcigtLSN7JHByZWZpeH1idG4tZm9jdXMtYm94LXNoYWRvdyk7XG4gICAgfSBAZWxzZSB7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS0jeyRwcmVmaXh9YnRuLWZvY3VzLWJveC1zaGFkb3cpO1xuICAgIH1cbiAgfVxuXG4gICY6ZGlzYWJsZWQsXG4gICYuZGlzYWJsZWQsXG4gIGZpZWxkc2V0OmRpc2FibGVkICYge1xuICAgIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YnRuLWRpc2FibGVkLWNvbG9yKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YnRuLWRpc2FibGVkLWJnKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBpZigkZW5hYmxlLWdyYWRpZW50cywgbm9uZSwgbnVsbCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcik7XG4gICAgb3BhY2l0eTogdmFyKC0tI3skcHJlZml4fWJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG59XG5cblxuLy9cbi8vIEFsdGVybmF0ZSBidXR0b25zXG4vL1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYnRuLXZhcmlhbnQtbG9vcHNcbkBlYWNoICRjb2xvciwgJHZhbHVlIGluICR0aGVtZS1jb2xvcnMge1xuICAuYnRuLSN7JGNvbG9yfSB7XG4gICAgQGlmICRjb2xvciA9PSBcImxpZ2h0XCIge1xuICAgICAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoXG4gICAgICAgICR2YWx1ZSxcbiAgICAgICAgJHZhbHVlLFxuICAgICAgICAkaG92ZXItYmFja2dyb3VuZDogc2hhZGUtY29sb3IoJHZhbHVlLCAkYnRuLWhvdmVyLWJnLXNoYWRlLWFtb3VudCksXG4gICAgICAgICRob3Zlci1ib3JkZXI6IHNoYWRlLWNvbG9yKCR2YWx1ZSwgJGJ0bi1ob3Zlci1ib3JkZXItc2hhZGUtYW1vdW50KSxcbiAgICAgICAgJGFjdGl2ZS1iYWNrZ3JvdW5kOiBzaGFkZS1jb2xvcigkdmFsdWUsICRidG4tYWN0aXZlLWJnLXNoYWRlLWFtb3VudCksXG4gICAgICAgICRhY3RpdmUtYm9yZGVyOiBzaGFkZS1jb2xvcigkdmFsdWUsICRidG4tYWN0aXZlLWJvcmRlci1zaGFkZS1hbW91bnQpXG4gICAgICApO1xuICAgIH0gQGVsc2UgaWYgJGNvbG9yID09IFwiZGFya1wiIHtcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KFxuICAgICAgICAkdmFsdWUsXG4gICAgICAgICR2YWx1ZSxcbiAgICAgICAgJGhvdmVyLWJhY2tncm91bmQ6IHRpbnQtY29sb3IoJHZhbHVlLCAkYnRuLWhvdmVyLWJnLXRpbnQtYW1vdW50KSxcbiAgICAgICAgJGhvdmVyLWJvcmRlcjogdGludC1jb2xvcigkdmFsdWUsICRidG4taG92ZXItYm9yZGVyLXRpbnQtYW1vdW50KSxcbiAgICAgICAgJGFjdGl2ZS1iYWNrZ3JvdW5kOiB0aW50LWNvbG9yKCR2YWx1ZSwgJGJ0bi1hY3RpdmUtYmctdGludC1hbW91bnQpLFxuICAgICAgICAkYWN0aXZlLWJvcmRlcjogdGludC1jb2xvcigkdmFsdWUsICRidG4tYWN0aXZlLWJvcmRlci10aW50LWFtb3VudClcbiAgICAgICk7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkdmFsdWUsICR2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBlYWNoICRjb2xvciwgJHZhbHVlIGluICR0aGVtZS1jb2xvcnMge1xuICAuYnRuLW91dGxpbmUtI3skY29sb3J9IHtcbiAgICBAaW5jbHVkZSBidXR0b24tb3V0bGluZS12YXJpYW50KCR2YWx1ZSk7XG4gIH1cbn1cbi8vIHNjc3MtZG9jcy1lbmQgYnRuLXZhcmlhbnQtbG9vcHNcblxuXG4vL1xuLy8gTGluayBidXR0b25zXG4vL1xuXG4vLyBNYWtlIGEgYnV0dG9uIGxvb2sgYW5kIGJlaGF2ZSBsaWtlIGEgbGlua1xuLmJ0bi1saW5rIHtcbiAgLS0jeyRwcmVmaXh9YnRuLWZvbnQtd2VpZ2h0OiAjeyRmb250LXdlaWdodC1ub3JtYWx9O1xuICAtLSN7JHByZWZpeH1idG4tY29sb3I6ICN7JGJ0bi1saW5rLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9YnRuLWJnOiB0cmFuc3BhcmVudDtcbiAgLS0jeyRwcmVmaXh9YnRuLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tI3skcHJlZml4fWJ0bi1ob3Zlci1jb2xvcjogI3skYnRuLWxpbmstaG92ZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1idG4taG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS0jeyRwcmVmaXh9YnRuLWFjdGl2ZS1jb2xvcjogI3skYnRuLWxpbmstaG92ZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tI3skcHJlZml4fWJ0bi1kaXNhYmxlZC1jb2xvcjogI3skYnRuLWxpbmstZGlzYWJsZWQtY29sb3J9O1xuICAtLSN7JHByZWZpeH1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS0jeyRwcmVmaXh9YnRuLWJveC1zaGFkb3c6IDAgMCAwICMwMDA7IC8vIENhbid0IHVzZSBgbm9uZWAgYXMga2V5d29yZCBuZWdhdGVzIGFsbCB2YWx1ZXMgd2hlbiB1c2VkIHdpdGggbXVsdGlwbGUgc2hhZG93c1xuICAtLSN7JHByZWZpeH1idG4tZm9jdXMtc2hhZG93LXJnYjogI3skYnRuLWxpbmstZm9jdXMtc2hhZG93LXJnYn07XG5cbiAgdGV4dC1kZWNvcmF0aW9uOiAkbGluay1kZWNvcmF0aW9uO1xuICBAaWYgJGVuYWJsZS1ncmFkaWVudHMge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogJGxpbmstaG92ZXItZGVjb3JhdGlvbjtcbiAgfVxuXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1idG4tY29sb3IpO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1idG4taG92ZXItY29sb3IpO1xuICB9XG5cbiAgLy8gTm8gbmVlZCBmb3IgYW4gYWN0aXZlIHN0YXRlIGhlcmVcbn1cblxuXG4vL1xuLy8gQnV0dG9uIFNpemVzXG4vL1xuXG4uYnRuLWxnIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXktbGcsICRidG4tcGFkZGluZy14LWxnLCAkYnRuLWZvbnQtc2l6ZS1sZywgJGJ0bi1ib3JkZXItcmFkaXVzLWxnKTtcbn1cblxuLmJ0bi1zbSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRidG4tcGFkZGluZy15LXNtLCAkYnRuLXBhZGRpbmcteC1zbSwgJGJ0bi1mb250LXNpemUtc20sICRidG4tYm9yZGVyLXJhZGl1cy1zbSk7XG59XG4iLCIvLyBCdXR0b24gdmFyaWFudHNcbi8vXG4vLyBFYXNpbHkgcHVtcCBvdXQgZGVmYXVsdCBzdHlsZXMsIGFzIHdlbGwgYXMgOmhvdmVyLCA6Zm9jdXMsIDphY3RpdmUsXG4vLyBhbmQgZGlzYWJsZWQgb3B0aW9ucyBmb3IgYWxsIGJ1dHRvbnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJ0bi12YXJpYW50LW1peGluXG5AbWl4aW4gYnV0dG9uLXZhcmlhbnQoXG4gICRiYWNrZ3JvdW5kLFxuICAkYm9yZGVyLFxuICAkY29sb3I6IGNvbG9yLWNvbnRyYXN0KCRiYWNrZ3JvdW5kKSxcbiAgJGhvdmVyLWJhY2tncm91bmQ6IGlmKCRjb2xvciA9PSAkY29sb3ItY29udHJhc3QtbGlnaHQsIHNoYWRlLWNvbG9yKCRiYWNrZ3JvdW5kLCAkYnRuLWhvdmVyLWJnLXNoYWRlLWFtb3VudCksIHRpbnQtY29sb3IoJGJhY2tncm91bmQsICRidG4taG92ZXItYmctdGludC1hbW91bnQpKSxcbiAgJGhvdmVyLWJvcmRlcjogaWYoJGNvbG9yID09ICRjb2xvci1jb250cmFzdC1saWdodCwgc2hhZGUtY29sb3IoJGJvcmRlciwgJGJ0bi1ob3Zlci1ib3JkZXItc2hhZGUtYW1vdW50KSwgdGludC1jb2xvcigkYm9yZGVyLCAkYnRuLWhvdmVyLWJvcmRlci10aW50LWFtb3VudCkpLFxuICAkaG92ZXItY29sb3I6IGNvbG9yLWNvbnRyYXN0KCRob3Zlci1iYWNrZ3JvdW5kKSxcbiAgJGFjdGl2ZS1iYWNrZ3JvdW5kOiBpZigkY29sb3IgPT0gJGNvbG9yLWNvbnRyYXN0LWxpZ2h0LCBzaGFkZS1jb2xvcigkYmFja2dyb3VuZCwgJGJ0bi1hY3RpdmUtYmctc2hhZGUtYW1vdW50KSwgdGludC1jb2xvcigkYmFja2dyb3VuZCwgJGJ0bi1hY3RpdmUtYmctdGludC1hbW91bnQpKSxcbiAgJGFjdGl2ZS1ib3JkZXI6IGlmKCRjb2xvciA9PSAkY29sb3ItY29udHJhc3QtbGlnaHQsIHNoYWRlLWNvbG9yKCRib3JkZXIsICRidG4tYWN0aXZlLWJvcmRlci1zaGFkZS1hbW91bnQpLCB0aW50LWNvbG9yKCRib3JkZXIsICRidG4tYWN0aXZlLWJvcmRlci10aW50LWFtb3VudCkpLFxuICAkYWN0aXZlLWNvbG9yOiBjb2xvci1jb250cmFzdCgkYWN0aXZlLWJhY2tncm91bmQpLFxuICAkZGlzYWJsZWQtYmFja2dyb3VuZDogJGJhY2tncm91bmQsXG4gICRkaXNhYmxlZC1ib3JkZXI6ICRib3JkZXIsXG4gICRkaXNhYmxlZC1jb2xvcjogY29sb3ItY29udHJhc3QoJGRpc2FibGVkLWJhY2tncm91bmQpXG4pIHtcbiAgLS0jeyRwcmVmaXh9YnRuLWNvbG9yOiAjeyRjb2xvcn07XG4gIC0tI3skcHJlZml4fWJ0bi1iZzogI3skYmFja2dyb3VuZH07XG4gIC0tI3skcHJlZml4fWJ0bi1ib3JkZXItY29sb3I6ICN7JGJvcmRlcn07XG4gIC0tI3skcHJlZml4fWJ0bi1ob3Zlci1jb2xvcjogI3skaG92ZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1idG4taG92ZXItYmc6ICN7JGhvdmVyLWJhY2tncm91bmR9O1xuICAtLSN7JHByZWZpeH1idG4taG92ZXItYm9yZGVyLWNvbG9yOiAjeyRob3Zlci1ib3JkZXJ9O1xuICAtLSN7JHByZWZpeH1idG4tZm9jdXMtc2hhZG93LXJnYjogI3t0by1yZ2IobWl4KCRjb2xvciwgJGJvcmRlciwgMTUlKSl9O1xuICAtLSN7JHByZWZpeH1idG4tYWN0aXZlLWNvbG9yOiAjeyRhY3RpdmUtY29sb3J9O1xuICAtLSN7JHByZWZpeH1idG4tYWN0aXZlLWJnOiAjeyRhY3RpdmUtYmFja2dyb3VuZH07XG4gIC0tI3skcHJlZml4fWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAjeyRhY3RpdmUtYm9yZGVyfTtcbiAgLS0jeyRwcmVmaXh9YnRuLWFjdGl2ZS1zaGFkb3c6ICN7JGJ0bi1hY3RpdmUtYm94LXNoYWRvd307XG4gIC0tI3skcHJlZml4fWJ0bi1kaXNhYmxlZC1jb2xvcjogI3skZGlzYWJsZWQtY29sb3J9O1xuICAtLSN7JHByZWZpeH1idG4tZGlzYWJsZWQtYmc6ICN7JGRpc2FibGVkLWJhY2tncm91bmR9O1xuICAtLSN7JHByZWZpeH1idG4tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjeyRkaXNhYmxlZC1ib3JkZXJ9O1xufVxuLy8gc2Nzcy1kb2NzLWVuZCBidG4tdmFyaWFudC1taXhpblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYnRuLW91dGxpbmUtdmFyaWFudC1taXhpblxuQG1peGluIGJ1dHRvbi1vdXRsaW5lLXZhcmlhbnQoXG4gICRjb2xvcixcbiAgJGNvbG9yLWhvdmVyOiBjb2xvci1jb250cmFzdCgkY29sb3IpLFxuICAkYWN0aXZlLWJhY2tncm91bmQ6ICRjb2xvcixcbiAgJGFjdGl2ZS1ib3JkZXI6ICRjb2xvcixcbiAgJGFjdGl2ZS1jb2xvcjogY29sb3ItY29udHJhc3QoJGFjdGl2ZS1iYWNrZ3JvdW5kKVxuKSB7XG4gIC0tI3skcHJlZml4fWJ0bi1jb2xvcjogI3skY29sb3J9O1xuICAtLSN7JHByZWZpeH1idG4tYm9yZGVyLWNvbG9yOiAjeyRjb2xvcn07XG4gIC0tI3skcHJlZml4fWJ0bi1ob3Zlci1jb2xvcjogI3skY29sb3ItaG92ZXJ9O1xuICAtLSN7JHByZWZpeH1idG4taG92ZXItYmc6ICN7JGFjdGl2ZS1iYWNrZ3JvdW5kfTtcbiAgLS0jeyRwcmVmaXh9YnRuLWhvdmVyLWJvcmRlci1jb2xvcjogI3skYWN0aXZlLWJvcmRlcn07XG4gIC0tI3skcHJlZml4fWJ0bi1mb2N1cy1zaGFkb3ctcmdiOiAje3RvLXJnYigkY29sb3IpfTtcbiAgLS0jeyRwcmVmaXh9YnRuLWFjdGl2ZS1jb2xvcjogI3skYWN0aXZlLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9YnRuLWFjdGl2ZS1iZzogI3skYWN0aXZlLWJhY2tncm91bmR9O1xuICAtLSN7JHByZWZpeH1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogI3skYWN0aXZlLWJvcmRlcn07XG4gIC0tI3skcHJlZml4fWJ0bi1hY3RpdmUtc2hhZG93OiAjeyRidG4tYWN0aXZlLWJveC1zaGFkb3d9O1xuICAtLSN7JHByZWZpeH1idG4tZGlzYWJsZWQtY29sb3I6ICN7JGNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9YnRuLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudDtcbiAgLS0jeyRwcmVmaXh9YnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjogI3skY29sb3J9O1xuICAtLSN7JHByZWZpeH1ncmFkaWVudDogbm9uZTtcbn1cbi8vIHNjc3MtZG9jcy1lbmQgYnRuLW91dGxpbmUtdmFyaWFudC1taXhpblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYnRuLXNpemUtbWl4aW5cbkBtaXhpbiBidXR0b24tc2l6ZSgkcGFkZGluZy15LCAkcGFkZGluZy14LCAkZm9udC1zaXplLCAkYm9yZGVyLXJhZGl1cykge1xuICAtLSN7JHByZWZpeH1idG4tcGFkZGluZy15OiAjeyRwYWRkaW5nLXl9O1xuICAtLSN7JHByZWZpeH1idG4tcGFkZGluZy14OiAjeyRwYWRkaW5nLXh9O1xuICBAaW5jbHVkZSByZnMoJGZvbnQtc2l6ZSwgLS0jeyRwcmVmaXh9YnRuLWZvbnQtc2l6ZSk7XG4gIC0tI3skcHJlZml4fWJ0bi1ib3JkZXItcmFkaXVzOiAjeyRib3JkZXItcmFkaXVzfTtcbn1cbi8vIHNjc3MtZG9jcy1lbmQgYnRuLXNpemUtbWl4aW5cbiIsIi5mYWRlIHtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbigkdHJhbnNpdGlvbi1mYWRlKTtcblxuICAmOm5vdCguc2hvdykge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbGxhcHNlLWNsYXNzZXNcbi5jb2xsYXBzZSB7XG4gICY6bm90KC5zaG93KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uY29sbGFwc2luZyB7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbigkdHJhbnNpdGlvbi1jb2xsYXBzZSk7XG5cbiAgJi5jb2xsYXBzZS1ob3Jpem9udGFsIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbigkdHJhbnNpdGlvbi1jb2xsYXBzZS13aWR0aCk7XG4gIH1cbn1cbi8vIHNjc3MtZG9jcy1lbmQgY29sbGFwc2UtY2xhc3Nlc1xuIiwiLy8gVGhlIGRyb3Bkb3duIHdyYXBwZXIgKGA8ZGl2PmApXG4uZHJvcHVwLFxuLmRyb3BlbmQsXG4uZHJvcGRvd24sXG4uZHJvcHN0YXJ0LFxuLmRyb3B1cC1jZW50ZXIsXG4uZHJvcGRvd24tY2VudGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAvLyBHZW5lcmF0ZSB0aGUgY2FyZXQgYXV0b21hdGljYWxseVxuICBAaW5jbHVkZSBjYXJldCgpO1xufVxuXG4vLyBUaGUgZHJvcGRvd24gbWVudVxuLmRyb3Bkb3duLW1lbnUge1xuICAvLyBzY3NzLWRvY3Mtc3RhcnQgZHJvcGRvd24tY3NzLXZhcnNcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24temluZGV4OiAjeyR6aW5kZXgtZHJvcGRvd259O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1taW4td2lkdGg6ICN7JGRyb3Bkb3duLW1pbi13aWR0aH07XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLXBhZGRpbmcteDogI3skZHJvcGRvd24tcGFkZGluZy14fTtcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24tcGFkZGluZy15OiAjeyRkcm9wZG93bi1wYWRkaW5nLXl9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1zcGFjZXI6ICN7JGRyb3Bkb3duLXNwYWNlcn07XG4gIEBpbmNsdWRlIHJmcygkZHJvcGRvd24tZm9udC1zaXplLCAtLSN7JHByZWZpeH1kcm9wZG93bi1mb250LXNpemUpO1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1jb2xvcjogI3skZHJvcGRvd24tY29sb3J9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1iZzogI3skZHJvcGRvd24tYmd9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1ib3JkZXItY29sb3I6ICN7JGRyb3Bkb3duLWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICN7JGRyb3Bkb3duLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1ib3JkZXItd2lkdGg6ICN7JGRyb3Bkb3duLWJvcmRlci13aWR0aH07XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6ICN7JGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1kaXZpZGVyLWJnOiAjeyRkcm9wZG93bi1kaXZpZGVyLWJnfTtcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogI3skZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teX07XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWJveC1zaGFkb3c6ICN7JGRyb3Bkb3duLWJveC1zaGFkb3d9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1saW5rLWNvbG9yOiAjeyRkcm9wZG93bi1saW5rLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogI3skZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICN7JGRyb3Bkb3duLWxpbmstaG92ZXItYmd9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogI3skZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3J9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogI3skZHJvcGRvd24tbGluay1hY3RpdmUtYmd9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAjeyRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICN7JGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14fTtcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICN7JGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15fTtcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24taGVhZGVyLWNvbG9yOiAjeyRkcm9wZG93bi1oZWFkZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1oZWFkZXItcGFkZGluZy14OiAjeyRkcm9wZG93bi1oZWFkZXItcGFkZGluZy14fTtcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24taGVhZGVyLXBhZGRpbmcteTogI3skZHJvcGRvd24taGVhZGVyLXBhZGRpbmcteX07XG4gIC8vIHNjc3MtZG9jcy1lbmQgZHJvcGRvd24tY3NzLXZhcnNcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi16aW5kZXgpO1xuICBkaXNwbGF5OiBub25lOyAvLyBub25lIGJ5IGRlZmF1bHQsIGJ1dCBibG9jayBvbiBcIm9wZW5cIiBvZiB0aGUgbWVudVxuICBtaW4td2lkdGg6IHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1taW4td2lkdGgpO1xuICBwYWRkaW5nOiB2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24tcGFkZGluZy15KSB2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24tcGFkZGluZy14KTtcbiAgbWFyZ2luOiAwOyAvLyBPdmVycmlkZSBkZWZhdWx0IG1hcmdpbiBvZiB1bFxuICBAaW5jbHVkZSBmb250LXNpemUodmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLWZvbnQtc2l6ZSkpO1xuICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogbGVmdDsgLy8gRW5zdXJlcyBwcm9wZXIgYWxpZ25tZW50IGlmIHBhcmVudCBoYXMgaXQgY2hhbmdlZCAoZS5nLiwgbW9kYWwgZm9vdGVyKVxuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24tYmcpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1ib3JkZXItY29sb3IpO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1ib3JkZXItcmFkaXVzKSk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3codmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLWJveC1zaGFkb3cpKTtcblxuICAmW2RhdGEtYnMtcG9wcGVyXSB7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLXNwYWNlcik7XG4gIH1cblxuICBAaWYgJGRyb3Bkb3duLXBhZGRpbmcteSA9PSAwIHtcbiAgICA+IC5kcm9wZG93bi1pdGVtOmZpcnN0LWNoaWxkLFxuICAgID4gbGk6Zmlyc3QtY2hpbGQgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXModmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXMpKTtcbiAgICB9XG4gICAgPiAuZHJvcGRvd24taXRlbTpsYXN0LWNoaWxkLFxuICAgID4gbGk6bGFzdC1jaGlsZCAuZHJvcGRvd24taXRlbSB7XG4gICAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1cykpO1xuICAgIH1cblxuICB9XG59XG5cbi8vIHNjc3MtZG9jcy1zdGFydCByZXNwb25zaXZlLWJyZWFrcG9pbnRzXG4vLyBXZSBkZWxpYmVyYXRlbHkgaGFyZGNvZGUgdGhlIGBicy1gIHByZWZpeCBiZWNhdXNlIHdlIGNoZWNrXG4vLyB0aGlzIGN1c3RvbSBwcm9wZXJ0eSBpbiBKUyB0byBkZXRlcm1pbmUgUG9wcGVyJ3MgcG9zaXRpb25pbmdcblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGdyaWQtYnJlYWtwb2ludHMpO1xuXG4gICAgLmRyb3Bkb3duLW1lbnUjeyRpbmZpeH0tc3RhcnQge1xuICAgICAgLS1icy1wb3NpdGlvbjogc3RhcnQ7XG5cbiAgICAgICZbZGF0YS1icy1wb3BwZXJdIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLW1lbnUjeyRpbmZpeH0tZW5kIHtcbiAgICAgIC0tYnMtcG9zaXRpb246IGVuZDtcblxuICAgICAgJltkYXRhLWJzLXBvcHBlcl0ge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIHNjc3MtZG9jcy1lbmQgcmVzcG9uc2l2ZS1icmVha3BvaW50c1xuXG4vLyBBbGxvdyBmb3IgZHJvcGRvd25zIHRvIGdvIGJvdHRvbSB1cCAoYWthLCBkcm9wdXAtbWVudSlcbi8vIEp1c3QgYWRkIC5kcm9wdXAgYWZ0ZXIgdGhlIHN0YW5kYXJkIC5kcm9wZG93biBjbGFzcyBhbmQgeW91J3JlIHNldC5cbi5kcm9wdXAge1xuICAuZHJvcGRvd24tbWVudVtkYXRhLWJzLXBvcHBlcl0ge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24tc3BhY2VyKTtcbiAgfVxuXG4gIC5kcm9wZG93bi10b2dnbGUge1xuICAgIEBpbmNsdWRlIGNhcmV0KHVwKTtcbiAgfVxufVxuXG4uZHJvcGVuZCB7XG4gIC5kcm9wZG93bi1tZW51W2RhdGEtYnMtcG9wcGVyXSB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLXNwYWNlcik7XG4gIH1cblxuICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBjYXJldChlbmQpO1xuICAgICY6OmFmdGVyIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uZHJvcHN0YXJ0IHtcbiAgLmRyb3Bkb3duLW1lbnVbZGF0YS1icy1wb3BwZXJdIHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLXNwYWNlcik7XG4gIH1cblxuICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBjYXJldChzdGFydCk7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiAwO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIERpdmlkZXJzIChiYXNpY2FsbHkgYW4gYDxocj5gKSB3aXRoaW4gdGhlIGRyb3Bkb3duXG4uZHJvcGRvd24tZGl2aWRlciB7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiB2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teSkgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1kaXZpZGVyLWJnKTtcbiAgb3BhY2l0eTogMTsgLy8gUmV2aXNpdCBpbiB2NiB0byBkZS1kdXBlIHN0eWxlcyB0aGF0IGNvbmZsaWN0IHdpdGggPGhyPiBlbGVtZW50XG59XG5cbi8vIExpbmtzLCBidXR0b25zLCBhbmQgbW9yZSB3aXRoaW4gdGhlIGRyb3Bkb3duIG1lbnVcbi8vXG4vLyBgPGJ1dHRvbj5gLXNwZWNpZmljIHN0eWxlcyBhcmUgZGVub3RlZCB3aXRoIGAvLyBGb3IgPGJ1dHRvbj5zYFxuLmRyb3Bkb3duLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7IC8vIEZvciBgPGJ1dHRvbj5gc1xuICBwYWRkaW5nOiB2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24taXRlbS1wYWRkaW5nLXkpIHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1pdGVtLXBhZGRpbmcteCk7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1saW5rLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDsgLy8gRm9yIGA8YnV0dG9uPmBzXG4gIHRleHQtZGVjb3JhdGlvbjogaWYoJGxpbmstZGVjb3JhdGlvbiA9PSBub25lLCBudWxsLCBub25lKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLy8gcHJldmVudCBsaW5rcyBmcm9tIHJhbmRvbWx5IGJyZWFraW5nIG9udG8gbmV3IGxpbmVzXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvLyBGb3IgYDxidXR0b24+YHNcbiAgYm9yZGVyOiAwOyAvLyBGb3IgYDxidXR0b24+YHNcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24taXRlbS1ib3JkZXItcmFkaXVzLCAwKSk7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGlmKCRsaW5rLWhvdmVyLWRlY29yYXRpb24gPT0gdW5kZXJsaW5lLCBub25lLCBudWxsKTtcbiAgICBAaW5jbHVkZSBncmFkaWVudC1iZyh2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24tbGluay1ob3Zlci1iZykpO1xuICB9XG5cbiAgJi5hY3RpdmUsXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtYmcodmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLWxpbmstYWN0aXZlLWJnKSk7XG4gIH1cblxuICAmLmRpc2FibGVkLFxuICAmOmRpc2FibGVkIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3IpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8vIFJlbW92ZSBDU1MgZ3JhZGllbnRzIGlmIHRoZXkncmUgZW5hYmxlZFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGlmKCRlbmFibGUtZ3JhZGllbnRzLCBub25lLCBudWxsKTtcbiAgfVxufVxuXG4uZHJvcGRvd24tbWVudS5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vIERyb3Bkb3duIHNlY3Rpb24gaGVhZGVyc1xuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiB2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24taGVhZGVyLXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXgpO1xuICBtYXJnaW4tYm90dG9tOiAwOyAvLyBmb3IgdXNlIHdpdGggaGVhZGluZyBlbGVtZW50c1xuICBAaW5jbHVkZSBmb250LXNpemUoJGZvbnQtc2l6ZS1zbSk7XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9ZHJvcGRvd24taGVhZGVyLWNvbG9yKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLy8gYXMgd2l0aCA+IGxpID4gYVxufVxuXG4vLyBEcm9wZG93biB0ZXh0XG4uZHJvcGRvd24taXRlbS10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1pdGVtLXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fWRyb3Bkb3duLWl0ZW0tcGFkZGluZy14KTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1kcm9wZG93bi1saW5rLWNvbG9yKTtcbn1cblxuLy8gRGFyayBkcm9wZG93bnNcbi5kcm9wZG93bi1tZW51LWRhcmsge1xuICAvLyBzY3NzLWRvY3Mtc3RhcnQgZHJvcGRvd24tZGFyay1jc3MtdmFyc1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1jb2xvcjogI3skZHJvcGRvd24tZGFyay1jb2xvcn07XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWJnOiAjeyRkcm9wZG93bi1kYXJrLWJnfTtcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAjeyRkcm9wZG93bi1kYXJrLWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWJveC1zaGFkb3c6ICN7JGRyb3Bkb3duLWRhcmstYm94LXNoYWRvd307XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWxpbmstY29sb3I6ICN7JGRyb3Bkb3duLWRhcmstbGluay1jb2xvcn07XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICN7JGRyb3Bkb3duLWRhcmstbGluay1ob3Zlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWRpdmlkZXItYmc6ICN7JGRyb3Bkb3duLWRhcmstZGl2aWRlci1iZ307XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICN7JGRyb3Bkb3duLWRhcmstbGluay1ob3Zlci1iZ307XG4gIC0tI3skcHJlZml4fWRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAjeyRkcm9wZG93bi1kYXJrLWxpbmstYWN0aXZlLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9ZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICN7JGRyb3Bkb3duLWRhcmstbGluay1hY3RpdmUtYmd9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAjeyRkcm9wZG93bi1kYXJrLWxpbmstZGlzYWJsZWQtY29sb3J9O1xuICAtLSN7JHByZWZpeH1kcm9wZG93bi1oZWFkZXItY29sb3I6ICN7JGRyb3Bkb3duLWRhcmstaGVhZGVyLWNvbG9yfTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCBkcm9wZG93bi1kYXJrLWNzcy12YXJzXG59XG4iLCIvLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZXQtbWl4aW5zXG5AbWl4aW4gY2FyZXQtZG93bigkd2lkdGg6ICRjYXJldC13aWR0aCkge1xuICBib3JkZXItdG9wOiAkd2lkdGggc29saWQ7XG4gIGJvcmRlci1yaWdodDogJHdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogJHdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gY2FyZXQtdXAoJHdpZHRoOiAkY2FyZXQtd2lkdGgpIHtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAkd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206ICR3aWR0aCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6ICR3aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuQG1peGluIGNhcmV0LWVuZCgkd2lkdGg6ICRjYXJldC13aWR0aCkge1xuICBib3JkZXItdG9wOiAkd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogJHdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogJHdpZHRoIHNvbGlkO1xufVxuXG5AbWl4aW4gY2FyZXQtc3RhcnQoJHdpZHRoOiAkY2FyZXQtd2lkdGgpIHtcbiAgYm9yZGVyLXRvcDogJHdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6ICR3aWR0aCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogJHdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5AbWl4aW4gY2FyZXQoXG4gICRkaXJlY3Rpb246IGRvd24sXG4gICR3aWR0aDogJGNhcmV0LXdpZHRoLFxuICAkc3BhY2luZzogJGNhcmV0LXNwYWNpbmcsXG4gICR2ZXJ0aWNhbC1hbGlnbjogJGNhcmV0LXZlcnRpY2FsLWFsaWduXG4pIHtcbiAgQGlmICRlbmFibGUtY2FyZXQge1xuICAgICY6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiAkc3BhY2luZztcbiAgICAgIHZlcnRpY2FsLWFsaWduOiAkdmVydGljYWwtYWxpZ247XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgQGlmICRkaXJlY3Rpb24gPT0gZG93biB7XG4gICAgICAgIEBpbmNsdWRlIGNhcmV0LWRvd24oJHdpZHRoKTtcbiAgICAgIH0gQGVsc2UgaWYgJGRpcmVjdGlvbiA9PSB1cCB7XG4gICAgICAgIEBpbmNsdWRlIGNhcmV0LXVwKCR3aWR0aCk7XG4gICAgICB9IEBlbHNlIGlmICRkaXJlY3Rpb24gPT0gZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgY2FyZXQtZW5kKCR3aWR0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRkaXJlY3Rpb24gPT0gc3RhcnQge1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJHNwYWNpbmc7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiAkdmVydGljYWwtYWxpZ247XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIEBpbmNsdWRlIGNhcmV0LXN0YXJ0KCR3aWR0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjplbXB0eTo6YWZ0ZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG59XG4vLyBzY3NzLWRvY3MtZW5kIGNhcmV0LW1peGluc1xuIiwiLy8gTWFrZSB0aGUgZGl2IGJlaGF2ZSBsaWtlIGEgYnV0dG9uXG4uYnRuLWdyb3VwLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8vIG1hdGNoIC5idG4gYWxpZ25tZW50IGdpdmVuIGZvbnQtc2l6ZSBoYWNrIGFib3ZlXG5cbiAgPiAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuICAvLyBCcmluZyB0aGUgaG92ZXIsIGZvY3VzZWQsIGFuZCBcImFjdGl2ZVwiIGJ1dHRvbnMgdG8gdGhlIGZyb250IHRvIG92ZXJsYXlcbiAgLy8gdGhlIGJvcmRlcnMgcHJvcGVybHlcbiAgPiAuYnRuLWNoZWNrOmNoZWNrZWQgKyAuYnRuLFxuICA+IC5idG4tY2hlY2s6Zm9jdXMgKyAuYnRuLFxuICA+IC5idG46aG92ZXIsXG4gID4gLmJ0bjpmb2N1cyxcbiAgPiAuYnRuOmFjdGl2ZSxcbiAgPiAuYnRuLmFjdGl2ZSB7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuXG4vLyBPcHRpb25hbDogR3JvdXAgbXVsdGlwbGUgYnV0dG9uIGdyb3VwcyB0b2dldGhlciBmb3IgYSB0b29sYmFyXG4uYnRuLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAuaW5wdXQtZ3JvdXAge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59XG5cbi5idG4tZ3JvdXAge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRidG4tYm9yZGVyLXJhZGl1cyk7XG5cbiAgLy8gUHJldmVudCBkb3VibGUgYm9yZGVycyB3aGVuIGJ1dHRvbnMgYXJlIG5leHQgdG8gZWFjaCBvdGhlclxuICA+IDpub3QoLmJ0bi1jaGVjazpmaXJzdC1jaGlsZCkgKyAuYnRuLFxuICA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JGJ0bi1ib3JkZXItd2lkdGh9ICogLTEpOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuICB9XG5cbiAgLy8gUmVzZXQgcm91bmRlZCBjb3JuZXJzXG4gID4gLmJ0bjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSxcbiAgPiAuYnRuLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDpmaXJzdC1jaGlsZCxcbiAgPiAuYnRuLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgICBAaW5jbHVkZSBib3JkZXItZW5kLXJhZGl1cygwKTtcbiAgfVxuXG4gIC8vIFRoZSBsZWZ0IHJhZGl1cyBzaG91bGQgYmUgMCBpZiB0aGUgYnV0dG9uIGlzOlxuICAvLyAtIHRoZSBcInRoaXJkIG9yIG1vcmVcIiBjaGlsZFxuICAvLyAtIHRoZSBzZWNvbmQgY2hpbGQgYW5kIHRoZSBwcmV2aW91cyBlbGVtZW50IGlzbid0IGAuYnRuLWNoZWNrYCAobWFraW5nIGl0IHRoZSBmaXJzdCBjaGlsZCB2aXN1YWxseSlcbiAgLy8gLSBwYXJ0IG9mIGEgYnRuLWdyb3VwIHdoaWNoIGlzbid0IHRoZSBmaXJzdCBjaGlsZFxuICA+IC5idG46bnRoLWNoaWxkKG4gKyAzKSxcbiAgPiA6bm90KC5idG4tY2hlY2spICsgLmJ0bixcbiAgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0biB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0LXJhZGl1cygwKTtcbiAgfVxufVxuXG4vLyBTaXppbmdcbi8vXG4vLyBSZW1peCB0aGUgZGVmYXVsdCBidXR0b24gc2l6aW5nIGNsYXNzZXMgaW50byBuZXcgb25lcyBmb3IgZWFzaWVyIG1hbmlwdWxhdGlvbi5cblxuLmJ0bi1ncm91cC1zbSA+IC5idG4geyBAZXh0ZW5kIC5idG4tc207IH1cbi5idG4tZ3JvdXAtbGcgPiAuYnRuIHsgQGV4dGVuZCAuYnRuLWxnOyB9XG5cblxuLy9cbi8vIFNwbGl0IGJ1dHRvbiBkcm9wZG93bnNcbi8vXG5cbi5kcm9wZG93bi10b2dnbGUtc3BsaXQge1xuICBwYWRkaW5nLXJpZ2h0OiAkYnRuLXBhZGRpbmcteCAqIC43NTtcbiAgcGFkZGluZy1sZWZ0OiAkYnRuLXBhZGRpbmcteCAqIC43NTtcblxuICAmOjphZnRlcixcbiAgLmRyb3B1cCAmOjphZnRlcixcbiAgLmRyb3BlbmQgJjo6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLmRyb3BzdGFydCAmOjpiZWZvcmUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuXG4uYnRuLXNtICsgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdCB7XG4gIHBhZGRpbmctcmlnaHQ6ICRidG4tcGFkZGluZy14LXNtICogLjc1O1xuICBwYWRkaW5nLWxlZnQ6ICRidG4tcGFkZGluZy14LXNtICogLjc1O1xufVxuXG4uYnRuLWxnICsgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdCB7XG4gIHBhZGRpbmctcmlnaHQ6ICRidG4tcGFkZGluZy14LWxnICogLjc1O1xuICBwYWRkaW5nLWxlZnQ6ICRidG4tcGFkZGluZy14LWxnICogLjc1O1xufVxuXG5cbi8vIFRoZSBjbGlja2FibGUgYnV0dG9uIGZvciB0b2dnbGluZyB0aGUgbWVudVxuLy8gU2V0IHRoZSBzYW1lIGluc2V0IHNoYWRvdyBhcyB0aGUgOmFjdGl2ZSBzdGF0ZVxuLmJ0bi1ncm91cC5zaG93IC5kcm9wZG93bi10b2dnbGUge1xuICBAaW5jbHVkZSBib3gtc2hhZG93KCRidG4tYWN0aXZlLWJveC1zaGFkb3cpO1xuXG4gIC8vIFNob3cgbm8gc2hhZG93IGZvciBgLmJ0bi1saW5rYCBzaW5jZSBpdCBoYXMgbm8gb3RoZXIgYnV0dG9uIHN0eWxlcy5cbiAgJi5idG4tbGluayB7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxufVxuXG5cbi8vXG4vLyBWZXJ0aWNhbCBidXR0b24gZ3JvdXBzXG4vL1xuXG4uYnRuLWdyb3VwLXZlcnRpY2FsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gID4gLmJ0bixcbiAgPiAuYnRuLWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKSxcbiAgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JGJ0bi1ib3JkZXItd2lkdGh9ICogLTEpOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuICB9XG5cbiAgLy8gUmVzZXQgcm91bmRlZCBjb3JuZXJzXG4gID4gLmJ0bjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSxcbiAgPiAuYnRuLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygwKTtcbiAgfVxuXG4gID4gLmJ0biB+IC5idG4sXG4gID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG4ge1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKDApO1xuICB9XG59XG4iLCIvLyBCYXNlIGNsYXNzXG4vL1xuLy8gS2lja3N0YXJ0IGFueSBuYXZpZ2F0aW9uIGNvbXBvbmVudCB3aXRoIGEgc2V0IG9mIHN0eWxlIHJlc2V0cy4gV29ya3Mgd2l0aFxuLy8gYDxuYXY+YHMsIGA8dWw+YHMgb3IgYDxvbD5gcy5cblxuLm5hdiB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBuYXYtY3NzLXZhcnNcbiAgLS0jeyRwcmVmaXh9bmF2LWxpbmstcGFkZGluZy14OiAjeyRuYXYtbGluay1wYWRkaW5nLXh9O1xuICAtLSN7JHByZWZpeH1uYXYtbGluay1wYWRkaW5nLXk6ICN7JG5hdi1saW5rLXBhZGRpbmcteX07XG4gIEBpbmNsdWRlIHJmcygkbmF2LWxpbmstZm9udC1zaXplLCAtLSN7JHByZWZpeH1uYXYtbGluay1mb250LXNpemUpO1xuICAtLSN7JHByZWZpeH1uYXYtbGluay1mb250LXdlaWdodDogI3skbmF2LWxpbmstZm9udC13ZWlnaHR9O1xuICAtLSN7JHByZWZpeH1uYXYtbGluay1jb2xvcjogI3skbmF2LWxpbmstY29sb3J9O1xuICAtLSN7JHByZWZpeH1uYXYtbGluay1ob3Zlci1jb2xvcjogI3skbmF2LWxpbmstaG92ZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1uYXYtbGluay1kaXNhYmxlZC1jb2xvcjogI3skbmF2LWxpbmstZGlzYWJsZWQtY29sb3J9O1xuICAvLyBzY3NzLWRvY3MtZW5kIG5hdi1jc3MtdmFyc1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fW5hdi1saW5rLXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fW5hdi1saW5rLXBhZGRpbmcteCk7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSh2YXIoLS0jeyRwcmVmaXh9bmF2LWxpbmstZm9udC1zaXplKSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9bmF2LWxpbmstZm9udC13ZWlnaHQpO1xuICBjb2xvcjogdmFyKC0tI3skcHJlZml4fW5hdi1saW5rLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpZigkbGluay1kZWNvcmF0aW9uID09IG5vbmUsIG51bGwsIG5vbmUpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDA7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oJG5hdi1saW5rLXRyYW5zaXRpb24pO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bmF2LWxpbmstaG92ZXItY29sb3IpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogaWYoJGxpbmstaG92ZXItZGVjb3JhdGlvbiA9PSB1bmRlcmxpbmUsIG5vbmUsIG51bGwpO1xuICB9XG5cbiAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6ICRuYXYtbGluay1mb2N1cy1ib3gtc2hhZG93O1xuICB9XG5cbiAgLy8gRGlzYWJsZWQgc3RhdGUgbGlnaHRlbnMgdGV4dFxuICAmLmRpc2FibGVkLFxuICAmOmRpc2FibGVkIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fW5hdi1saW5rLWRpc2FibGVkLWNvbG9yKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cblxuLy9cbi8vIFRhYnNcbi8vXG5cbi5uYXYtdGFicyB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBuYXYtdGFicy1jc3MtdmFyc1xuICAtLSN7JHByZWZpeH1uYXYtdGFicy1ib3JkZXItd2lkdGg6ICN7JG5hdi10YWJzLWJvcmRlci13aWR0aH07XG4gIC0tI3skcHJlZml4fW5hdi10YWJzLWJvcmRlci1jb2xvcjogI3skbmF2LXRhYnMtYm9yZGVyLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9bmF2LXRhYnMtYm9yZGVyLXJhZGl1czogI3skbmF2LXRhYnMtYm9yZGVyLXJhZGl1c307XG4gIC0tI3skcHJlZml4fW5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAjeyRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fW5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAjeyRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcn07XG4gIC0tI3skcHJlZml4fW5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAjeyRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZ307XG4gIC0tI3skcHJlZml4fW5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogI3skbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yfTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCBuYXYtdGFicy1jc3MtdmFyc1xuXG4gIGJvcmRlci1ib3R0b206IHZhcigtLSN7JHByZWZpeH1uYXYtdGFicy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH1uYXYtdGFicy1ib3JkZXItY29sb3IpO1xuXG4gIC5uYXYtbGluayB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYygtMSAqIHZhcigtLSN7JHByZWZpeH1uYXYtdGFicy1ib3JkZXItd2lkdGgpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgICBib3JkZXI6IHZhcigtLSN7JHByZWZpeH1uYXYtdGFicy1ib3JkZXItd2lkdGgpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKHZhcigtLSN7JHByZWZpeH1uYXYtdGFicy1ib3JkZXItcmFkaXVzKSk7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgLy8gUHJldmVudHMgYWN0aXZlIC5uYXYtbGluayB0YWIgb3ZlcmxhcHBpbmcgZm9jdXMgb3V0bGluZSBvZiBwcmV2aW91cy9uZXh0IC5uYXYtbGlua1xuICAgICAgaXNvbGF0aW9uOiBpc29sYXRlO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5uYXYtbGluay5hY3RpdmUsXG4gIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayB7XG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1uYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fW5hdi10YWJzLWxpbmstYWN0aXZlLWJnKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLSN7JHByZWZpeH1uYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIC8vIE1ha2UgZHJvcGRvd24gYm9yZGVyIG92ZXJsYXAgdGFiIGJvcmRlclxuICAgIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS0jeyRwcmVmaXh9bmF2LXRhYnMtYm9yZGVyLXdpZHRoKSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gICAgLy8gUmVtb3ZlIHRoZSB0b3Agcm91bmRlZCBjb3JuZXJzIGhlcmUgc2luY2UgdGhlcmUgaXMgYSBoYXJkIGVkZ2UgYWJvdmUgdGhlIG1lbnVcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbiAgfVxufVxuXG5cbi8vXG4vLyBQaWxsc1xuLy9cblxuLm5hdi1waWxscyB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBuYXYtcGlsbHMtY3NzLXZhcnNcbiAgLS0jeyRwcmVmaXh9bmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICN7JG5hdi1waWxscy1ib3JkZXItcmFkaXVzfTtcbiAgLS0jeyRwcmVmaXh9bmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAjeyRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3J9O1xuICAtLSN7JHByZWZpeH1uYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICN7JG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZ307XG4gIC8vIHNjc3MtZG9jcy1lbmQgbmF2LXBpbGxzLWNzcy12YXJzXG5cbiAgLm5hdi1saW5rIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKHZhcigtLSN7JHByZWZpeH1uYXYtcGlsbHMtYm9yZGVyLXJhZGl1cykpO1xuICB9XG5cbiAgLm5hdi1saW5rLmFjdGl2ZSxcbiAgLnNob3cgPiAubmF2LWxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yKTtcbiAgICBAaW5jbHVkZSBncmFkaWVudC1iZyh2YXIoLS0jeyRwcmVmaXh9bmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnKSk7XG4gIH1cbn1cblxuXG4vL1xuLy8gVW5kZXJsaW5lXG4vL1xuXG4ubmF2LXVuZGVybGluZSB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBuYXYtdW5kZXJsaW5lLWNzcy12YXJzXG4gIC0tI3skcHJlZml4fW5hdi11bmRlcmxpbmUtZ2FwOiAjeyRuYXYtdW5kZXJsaW5lLWdhcH07XG4gIC0tI3skcHJlZml4fW5hdi11bmRlcmxpbmUtYm9yZGVyLXdpZHRoOiAjeyRuYXYtdW5kZXJsaW5lLWJvcmRlci13aWR0aH07XG4gIC0tI3skcHJlZml4fW5hdi11bmRlcmxpbmUtbGluay1hY3RpdmUtY29sb3I6ICN7JG5hdi11bmRlcmxpbmUtbGluay1hY3RpdmUtY29sb3J9O1xuICAvLyBzY3NzLWRvY3MtZW5kIG5hdi11bmRlcmxpbmUtY3NzLXZhcnNcblxuICBnYXA6IHZhcigtLSN7JHByZWZpeH1uYXYtdW5kZXJsaW5lLWdhcCk7XG5cbiAgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS0jeyRwcmVmaXh9bmF2LXVuZGVybGluZS1ib3JkZXItd2lkdGgpIHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGN1cnJlbnRjb2xvcjtcbiAgICB9XG4gIH1cblxuICAubmF2LWxpbmsuYWN0aXZlLFxuICAuc2hvdyA+IC5uYXYtbGluayB7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xuICAgIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bmF2LXVuZGVybGluZS1saW5rLWFjdGl2ZS1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogY3VycmVudGNvbG9yO1xuICB9XG59XG5cblxuLy9cbi8vIEp1c3RpZmllZCB2YXJpYW50c1xuLy9cblxuLm5hdi1maWxsIHtcbiAgPiAubmF2LWxpbmssXG4gIC5uYXYtaXRlbSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5uYXYtanVzdGlmaWVkIHtcbiAgPiAubmF2LWxpbmssXG4gIC5uYXYtaXRlbSB7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5uYXYtZmlsbCxcbi5uYXYtanVzdGlmaWVkIHtcbiAgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgd2lkdGg6IDEwMCU7IC8vIE1ha2Ugc3VyZSBidXR0b24gd2lsbCBncm93XG4gIH1cbn1cblxuXG4vLyBUYWJiYWJsZSB0YWJzXG4vL1xuLy8gSGlkZSB0YWJiYWJsZSBwYW5lcyB0byBzdGFydCwgc2hvdyB0aGVtIHdoZW4gYC5hY3RpdmVgXG5cbi50YWItY29udGVudCB7XG4gID4gLnRhYi1wYW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gID4gLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiIsIi8vIE5hdmJhclxuLy9cbi8vIFByb3ZpZGUgYSBzdGF0aWMgbmF2YmFyIGZyb20gd2hpY2ggd2UgZXhwYW5kIHRvIGNyZWF0ZSBmdWxsLXdpZHRoLCBmaXhlZCwgYW5kXG4vLyBvdGhlciBuYXZiYXIgdmFyaWF0aW9ucy5cblxuLm5hdmJhciB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBuYXZiYXItY3NzLXZhcnNcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLXBhZGRpbmcteDogI3tpZigkbmF2YmFyLXBhZGRpbmcteCA9PSBudWxsLCAwLCAkbmF2YmFyLXBhZGRpbmcteCl9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItcGFkZGluZy15OiAjeyRuYXZiYXItcGFkZGluZy15fTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLWNvbG9yOiAjeyRuYXZiYXItbGlnaHQtY29sb3J9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItaG92ZXItY29sb3I6ICN7JG5hdmJhci1saWdodC1ob3Zlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fW5hdmJhci1kaXNhYmxlZC1jb2xvcjogI3skbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLWFjdGl2ZS1jb2xvcjogI3skbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcn07XG4gIC0tI3skcHJlZml4fW5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICN7JG5hdmJhci1icmFuZC1wYWRkaW5nLXl9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItYnJhbmQtbWFyZ2luLWVuZDogI3skbmF2YmFyLWJyYW5kLW1hcmdpbi1lbmR9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItYnJhbmQtZm9udC1zaXplOiAjeyRuYXZiYXItYnJhbmQtZm9udC1zaXplfTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLWJyYW5kLWNvbG9yOiAjeyRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3J9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItYnJhbmQtaG92ZXItY29sb3I6ICN7JG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fW5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICN7JG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXh9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICN7JG5hdmJhci10b2dnbGVyLXBhZGRpbmcteX07XG4gIC0tI3skcHJlZml4fW5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogI3skbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14fTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAjeyRuYXZiYXItdG9nZ2xlci1mb250LXNpemV9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItdG9nZ2xlci1pY29uLWJnOiAje2VzY2FwZS1zdmcoJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmcpfTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAjeyRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAjeyRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzfTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLXRvZ2dsZXItZm9jdXMtd2lkdGg6ICN7JG5hdmJhci10b2dnbGVyLWZvY3VzLXdpZHRofTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLXRvZ2dsZXItdHJhbnNpdGlvbjogI3skbmF2YmFyLXRvZ2dsZXItdHJhbnNpdGlvbn07XG4gIC8vIHNjc3MtZG9jcy1lbmQgbmF2YmFyLWNzcy12YXJzXG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7IC8vIGFsbG93IHVzIHRvIGRvIHRoZSBsaW5lIGJyZWFrIGZvciBjb2xsYXBzaW5nIGNvbnRlbnRcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvLyBzcGFjZSBvdXQgYnJhbmQgZnJvbSBsb2dvXG4gIHBhZGRpbmc6IHZhcigtLSN7JHByZWZpeH1uYXZiYXItcGFkZGluZy15KSB2YXIoLS0jeyRwcmVmaXh9bmF2YmFyLXBhZGRpbmcteCk7XG4gIEBpbmNsdWRlIGdyYWRpZW50LWJnKCk7XG5cbiAgLy8gQmVjYXVzZSBmbGV4IHByb3BlcnRpZXMgYXJlbid0IGluaGVyaXRlZCwgd2UgbmVlZCB0byByZWRlY2xhcmUgdGhlc2UgZmlyc3RcbiAgLy8gZmV3IHByb3BlcnRpZXMgc28gdGhhdCBjb250ZW50IG5lc3RlZCB3aXRoaW4gYmVoYXZlIHByb3Blcmx5LlxuICAvLyBUaGUgYGZsZXgtd3JhcGAgcHJvcGVydHkgaXMgaW5oZXJpdGVkIHRvIHNpbXBsaWZ5IHRoZSBleHBhbmRlZCBuYXZiYXJzXG4gICVjb250YWluZXItZmxleC1wcm9wZXJ0aWVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogaW5oZXJpdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gID4gLmNvbnRhaW5lcixcbiAgPiAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBAZXh0ZW5kICVjb250YWluZXItZmxleC1wcm9wZXJ0aWVzO1xuICB9XG5cbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRjb250YWluZXItbWF4LXdpZHRocyB7XG4gICAgPiAuY29udGFpbmVyI3ticmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkY29udGFpbmVyLW1heC13aWR0aHMpfSB7XG4gICAgICBAZXh0ZW5kICVjb250YWluZXItZmxleC1wcm9wZXJ0aWVzO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdmJhciBicmFuZFxuLy9cbi8vIFVzZWQgZm9yIGJyYW5kLCBwcm9qZWN0LCBvciBzaXRlIG5hbWVzLlxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLSN7JHByZWZpeH1uYXZiYXItYnJhbmQtcGFkZGluZy15KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLSN7JHByZWZpeH1uYXZiYXItYnJhbmQtcGFkZGluZy15KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9bmF2YmFyLWJyYW5kLW1hcmdpbi1lbmQpO1xuICBAaW5jbHVkZSBmb250LXNpemUodmFyKC0tI3skcHJlZml4fW5hdmJhci1icmFuZC1mb250LXNpemUpKTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1uYXZiYXItYnJhbmQtY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IGlmKCRsaW5rLWRlY29yYXRpb24gPT0gbm9uZSwgbnVsbCwgbm9uZSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1uYXZiYXItYnJhbmQtaG92ZXItY29sb3IpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogaWYoJGxpbmstaG92ZXItZGVjb3JhdGlvbiA9PSB1bmRlcmxpbmUsIG5vbmUsIG51bGwpO1xuICB9XG59XG5cblxuLy8gTmF2YmFyIG5hdlxuLy9cbi8vIEN1c3RvbSBuYXZiYXIgbmF2aWdhdGlvbiAoZG9lc24ndCByZXF1aXJlIGAubmF2YCwgYnV0IGRvZXMgbWFrZSB1c2Ugb2YgYC5uYXYtbGlua2ApLlxuXG4ubmF2YmFyLW5hdiB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBuYXZiYXItbmF2LWNzcy12YXJzXG4gIC0tI3skcHJlZml4fW5hdi1saW5rLXBhZGRpbmcteDogMDtcbiAgLS0jeyRwcmVmaXh9bmF2LWxpbmstcGFkZGluZy15OiAjeyRuYXYtbGluay1wYWRkaW5nLXl9O1xuICBAaW5jbHVkZSByZnMoJG5hdi1saW5rLWZvbnQtc2l6ZSwgLS0jeyRwcmVmaXh9bmF2LWxpbmstZm9udC1zaXplKTtcbiAgLS0jeyRwcmVmaXh9bmF2LWxpbmstZm9udC13ZWlnaHQ6ICN7JG5hdi1saW5rLWZvbnQtd2VpZ2h0fTtcbiAgLS0jeyRwcmVmaXh9bmF2LWxpbmstY29sb3I6IHZhcigtLSN7JHByZWZpeH1uYXZiYXItY29sb3IpO1xuICAtLSN7JHByZWZpeH1uYXYtbGluay1ob3Zlci1jb2xvcjogdmFyKC0tI3skcHJlZml4fW5hdmJhci1ob3Zlci1jb2xvcik7XG4gIC0tI3skcHJlZml4fW5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bmF2YmFyLWRpc2FibGVkLWNvbG9yKTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCBuYXZiYXItbmF2LWNzcy12YXJzXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLy8gY2Fubm90IHVzZSBgaW5oZXJpdGAgdG8gZ2V0IHRoZSBgLm5hdmJhcmBzIHZhbHVlXG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAubmF2LWxpbmsge1xuICAgICYuYWN0aXZlLFxuICAgICYuc2hvdyB7XG4gICAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fW5hdmJhci1hY3RpdmUtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG59XG5cblxuLy8gTmF2YmFyIHRleHRcbi8vXG4vL1xuXG4ubmF2YmFyLXRleHQge1xuICBwYWRkaW5nLXRvcDogJG5hdi1saW5rLXBhZGRpbmcteTtcbiAgcGFkZGluZy1ib3R0b206ICRuYXYtbGluay1wYWRkaW5nLXk7XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bmF2YmFyLWNvbG9yKTtcblxuICBhLFxuICBhOmhvdmVyLFxuICBhOmZvY3VzICB7XG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1uYXZiYXItYWN0aXZlLWNvbG9yKTtcbiAgfVxufVxuXG5cbi8vIFJlc3BvbnNpdmUgbmF2YmFyXG4vL1xuLy8gQ3VzdG9tIHN0eWxlcyBmb3IgcmVzcG9uc2l2ZSBjb2xsYXBzaW5nIGFuZCB0b2dnbGluZyBvZiBuYXZiYXIgY29udGVudHMuXG4vLyBQb3dlcmVkIGJ5IHRoZSBjb2xsYXBzZSBCb290c3RyYXAgSmF2YVNjcmlwdCBwbHVnaW4uXG5cbi8vIFdoZW4gY29sbGFwc2VkLCBwcmV2ZW50IHRoZSB0b2dnbGVhYmxlIG5hdmJhciBjb250ZW50cyBmcm9tIGFwcGVhcmluZyBpblxuLy8gdGhlIGRlZmF1bHQgZmxleGJveCByb3cgb3JpZW50YXRpb24uIFJlcXVpcmVzIHRoZSB1c2Ugb2YgYGZsZXgtd3JhcDogd3JhcGBcbi8vIG9uIHRoZSBgLm5hdmJhcmAgcGFyZW50LlxuLm5hdmJhci1jb2xsYXBzZSB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgLy8gRm9yIGFsd2F5cyBleHBhbmRlZCBvciBleHRyYSBmdWxsIG5hdmJhcnMsIGVuc3VyZSBjb250ZW50IGFsaWducyBpdHNlbGZcbiAgLy8gcHJvcGVybHkgdmVydGljYWxseS4gQ2FuIGJlIGVhc2lseSBvdmVycmlkZGVuIHdpdGggZmxleCB1dGlsaXRpZXMuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIEJ1dHRvbiBmb3IgdG9nZ2xpbmcgdGhlIG5hdmJhciB3aGVuIGluIGl0cyBjb2xsYXBzZWQgc3RhdGVcbi5uYXZiYXItdG9nZ2xlciB7XG4gIHBhZGRpbmc6IHZhcigtLSN7JHByZWZpeH1uYXZiYXItdG9nZ2xlci1wYWRkaW5nLXkpIHZhcigtLSN7JHByZWZpeH1uYXZiYXItdG9nZ2xlci1wYWRkaW5nLXgpO1xuICBAaW5jbHVkZSBmb250LXNpemUodmFyKC0tI3skcHJlZml4fW5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZSkpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1uYXZiYXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLy8gcmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlXG4gIGJvcmRlcjogdmFyKC0tI3skcHJlZml4fWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tI3skcHJlZml4fW5hdmJhci10b2dnbGVyLWJvcmRlci1jb2xvcik7IC8vIHJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZVxuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKHZhcigtLSN7JHByZWZpeH1uYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzKSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24odmFyKC0tI3skcHJlZml4fW5hdmJhci10b2dnbGVyLXRyYW5zaXRpb24pKTtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCB2YXIoLS0jeyRwcmVmaXh9bmF2YmFyLXRvZ2dsZXItZm9jdXMtd2lkdGgpO1xuICB9XG59XG5cbi8vIEtlZXAgYXMgYSBzZXBhcmF0ZSBlbGVtZW50IHNvIGZvbGtzIGNhbiBlYXNpbHkgb3ZlcnJpZGUgaXQgd2l0aCBhbm90aGVyIGljb25cbi8vIG9yIGltYWdlIGZpbGUgYXMgbmVlZGVkLlxuLm5hdmJhci10b2dnbGVyLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tI3skcHJlZml4fW5hdmJhci10b2dnbGVyLWljb24tYmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cblxuLm5hdmJhci1uYXYtc2Nyb2xsIHtcbiAgbWF4LWhlaWdodDogdmFyKC0tI3skcHJlZml4fXNjcm9sbC1oZWlnaHQsIDc1dmgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2YmFyLWV4cGFuZC1sb29wXG4vLyBHZW5lcmF0ZSBzZXJpZXMgb2YgYC5uYXZiYXItZXhwYW5kLSpgIHJlc3BvbnNpdmUgY2xhc3NlcyBmb3IgY29uZmlndXJpbmdcbi8vIHdoZXJlIHlvdXIgbmF2YmFyIGNvbGxhcHNlcy5cbi5uYXZiYXItZXhwYW5kIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRuZXh0LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9zZWxlY3Rvci1uby11bmlvbi1jbGFzcy1uYW1lXG4gICAgJiN7JGluZml4fSB7XG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuZXh0KSB7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgLm5hdmJhci1uYXYge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLSN7JHByZWZpeH1uYXZiYXItbmF2LWxpbmstcGFkZGluZy14KTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tI3skcHJlZml4fW5hdmJhci1uYXYtbGluay1wYWRkaW5nLXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZiYXItbmF2LXNjcm9sbCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG4gICAgICAgICAgZmxleC1iYXNpczogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vZmZjYW52YXMge1xuICAgICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgei1pbmRleDogYXV0bztcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24obm9uZSk7XG4gICAgICAgICAgLy8gc3R5bGVsaW50LWVuYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcblxuICAgICAgICAgIC5vZmZjYW52YXMtaGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm9mZmNhbnZhcy1ib2R5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIHNjc3MtZG9jcy1lbmQgbmF2YmFyLWV4cGFuZC1sb29wXG5cbi8vIE5hdmJhciB0aGVtZXNcbi8vXG4vLyBTdHlsZXMgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIG5hdmJhcnMgd2l0aCBsaWdodCBvciBkYXJrIGJhY2tncm91bmQuXG5cbi5uYXZiYXItbGlnaHQge1xuICBAaW5jbHVkZSBkZXByZWNhdGUoXCJgLm5hdmJhci1saWdodGBcIiwgXCJ2NS4yLjBcIiwgXCJ2Ni4wLjBcIiwgdHJ1ZSk7XG59XG5cbi5uYXZiYXItZGFyayxcbi5uYXZiYXJbZGF0YS1icy10aGVtZT1cImRhcmtcIl0ge1xuICAvLyBzY3NzLWRvY3Mtc3RhcnQgbmF2YmFyLWRhcmstY3NzLXZhcnNcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLWNvbG9yOiAjeyRuYXZiYXItZGFyay1jb2xvcn07XG4gIC0tI3skcHJlZml4fW5hdmJhci1ob3Zlci1jb2xvcjogI3skbmF2YmFyLWRhcmstaG92ZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItZGlzYWJsZWQtY29sb3I6ICN7JG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLWFjdGl2ZS1jb2xvcjogI3skbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLWJyYW5kLWNvbG9yOiAjeyRuYXZiYXItZGFyay1icmFuZC1jb2xvcn07XG4gIC0tI3skcHJlZml4fW5hdmJhci1icmFuZC1ob3Zlci1jb2xvcjogI3skbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1uYXZiYXItdG9nZ2xlci1ib3JkZXItY29sb3I6ICN7JG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9bmF2YmFyLXRvZ2dsZXItaWNvbi1iZzogI3tlc2NhcGUtc3ZnKCRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmcpfTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCBuYXZiYXItZGFyay1jc3MtdmFyc1xufVxuXG5AaWYgJGVuYWJsZS1kYXJrLW1vZGUge1xuICBAaW5jbHVkZSBjb2xvci1tb2RlKGRhcmspIHtcbiAgICAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gICAgICAtLSN7JHByZWZpeH1uYXZiYXItdG9nZ2xlci1pY29uLWJnOiAje2VzY2FwZS1zdmcoJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZyl9O1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEJhc2Ugc3R5bGVzXG4vL1xuXG4uY2FyZCB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBjYXJkLWNzcy12YXJzXG4gIC0tI3skcHJlZml4fWNhcmQtc3BhY2VyLXk6ICN7JGNhcmQtc3BhY2VyLXl9O1xuICAtLSN7JHByZWZpeH1jYXJkLXNwYWNlci14OiAjeyRjYXJkLXNwYWNlci14fTtcbiAgLS0jeyRwcmVmaXh9Y2FyZC10aXRsZS1zcGFjZXIteTogI3skY2FyZC10aXRsZS1zcGFjZXIteX07XG4gIC0tI3skcHJlZml4fWNhcmQtdGl0bGUtY29sb3I6ICN7JGNhcmQtdGl0bGUtY29sb3J9O1xuICAtLSN7JHByZWZpeH1jYXJkLXN1YnRpdGxlLWNvbG9yOiAjeyRjYXJkLXN1YnRpdGxlLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9Y2FyZC1ib3JkZXItd2lkdGg6ICN7JGNhcmQtYm9yZGVyLXdpZHRofTtcbiAgLS0jeyRwcmVmaXh9Y2FyZC1ib3JkZXItY29sb3I6ICN7JGNhcmQtYm9yZGVyLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9Y2FyZC1ib3JkZXItcmFkaXVzOiAjeyRjYXJkLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1jYXJkLWJveC1zaGFkb3c6ICN7JGNhcmQtYm94LXNoYWRvd307XG4gIC0tI3skcHJlZml4fWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogI3skY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzfTtcbiAgLS0jeyRwcmVmaXh9Y2FyZC1jYXAtcGFkZGluZy15OiAjeyRjYXJkLWNhcC1wYWRkaW5nLXl9O1xuICAtLSN7JHByZWZpeH1jYXJkLWNhcC1wYWRkaW5nLXg6ICN7JGNhcmQtY2FwLXBhZGRpbmcteH07XG4gIC0tI3skcHJlZml4fWNhcmQtY2FwLWJnOiAjeyRjYXJkLWNhcC1iZ307XG4gIC0tI3skcHJlZml4fWNhcmQtY2FwLWNvbG9yOiAjeyRjYXJkLWNhcC1jb2xvcn07XG4gIC0tI3skcHJlZml4fWNhcmQtaGVpZ2h0OiAjeyRjYXJkLWhlaWdodH07XG4gIC0tI3skcHJlZml4fWNhcmQtY29sb3I6ICN7JGNhcmQtY29sb3J9O1xuICAtLSN7JHByZWZpeH1jYXJkLWJnOiAjeyRjYXJkLWJnfTtcbiAgLS0jeyRwcmVmaXh9Y2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAjeyRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmd9O1xuICAtLSN7JHByZWZpeH1jYXJkLWdyb3VwLW1hcmdpbjogI3skY2FyZC1ncm91cC1tYXJnaW59O1xuICAvLyBzY3NzLWRvY3MtZW5kIGNhcmQtY3NzLXZhcnNcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzIyNzQwI2lzc3VlY29tbWVudC0zMDU4NjgxMDZcbiAgaGVpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1oZWlnaHQpO1xuICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH1jYXJkLWJnKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBib3JkZXI6IHZhcigtLSN7JHByZWZpeH1jYXJkLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tI3skcHJlZml4fWNhcmQtYm9yZGVyLWNvbG9yKTtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9Y2FyZC1ib3JkZXItcmFkaXVzKSk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3codmFyKC0tI3skcHJlZml4fWNhcmQtYm94LXNoYWRvdykpO1xuXG4gID4gaHIge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gID4gLmxpc3QtZ3JvdXAge1xuICAgIGJvcmRlci10b3A6IGluaGVyaXQ7XG4gICAgYm9yZGVyLWJvdHRvbTogaW5oZXJpdDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKHZhcigtLSN7JHByZWZpeH1jYXJkLWlubmVyLWJvcmRlci1yYWRpdXMpKTtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQgIHtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9Y2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRHVlIHRvIHNwZWNpZmljaXR5IG9mIHRoZSBhYm92ZSBzZWxlY3RvciAoYC5jYXJkID4gLmxpc3QtZ3JvdXBgKSwgd2UgbXVzdFxuICAvLyB1c2UgYSBjaGlsZCBzZWxlY3RvciBoZXJlIHRvIHByZXZlbnQgZG91YmxlIGJvcmRlcnMuXG4gID4gLmNhcmQtaGVhZGVyICsgLmxpc3QtZ3JvdXAsXG4gID4gLmxpc3QtZ3JvdXAgKyAuY2FyZC1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cbn1cblxuLmNhcmQtYm9keSB7XG4gIC8vIEVuYWJsZSBgZmxleC1ncm93OiAxYCBmb3IgZGVja3MgYW5kIGdyb3VwcyBzbyB0aGF0IGNhcmQgYmxvY2tzIHRha2UgdXBcbiAgLy8gYXMgbXVjaCBzcGFjZSBhcyBwb3NzaWJsZSwgZW5zdXJpbmcgZm9vdGVycyBhcmUgYWxpZ25lZCB0byB0aGUgYm90dG9tLlxuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fWNhcmQtc3BhY2VyLXkpIHZhcigtLSN7JHByZWZpeH1jYXJkLXNwYWNlci14KTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1jYXJkLWNvbG9yKTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC10aXRsZS1zcGFjZXIteSk7XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC10aXRsZS1jb2xvcik7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogY2FsYygtLjUgKiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC10aXRsZS1zcGFjZXIteSkpOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWNhcmQtc3VidGl0bGUtY29sb3IpO1xufVxuXG4uY2FyZC10ZXh0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZC1saW5rIHtcbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpZigkbGluay1ob3Zlci1kZWNvcmF0aW9uID09IHVuZGVybGluZSwgbm9uZSwgbnVsbCk7XG4gIH1cblxuICArIC5jYXJkLWxpbmsge1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1zcGFjZXIteCk7XG4gIH1cbn1cblxuLy9cbi8vIE9wdGlvbmFsIHRleHR1YWwgY2Fwc1xuLy9cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fWNhcmQtY2FwLXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fWNhcmQtY2FwLXBhZGRpbmcteCk7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8vIFJlbW92ZXMgdGhlIGRlZmF1bHQgbWFyZ2luLWJvdHRvbSBvZiA8aE4+XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1jYXAtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1jYXAtYmcpO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH1jYXJkLWJvcmRlci1jb2xvcik7XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9Y2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKSB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKSAwIDApO1xuICB9XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIHBhZGRpbmc6IHZhcigtLSN7JHByZWZpeH1jYXJkLWNhcC1wYWRkaW5nLXkpIHZhcigtLSN7JHByZWZpeH1jYXJkLWNhcC1wYWRkaW5nLXgpO1xuICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWNhcmQtY2FwLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fWNhcmQtY2FwLWJnKTtcbiAgYm9yZGVyLXRvcDogdmFyKC0tI3skcHJlZml4fWNhcmQtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1ib3JkZXItY29sb3IpO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwIDAgdmFyKC0tI3skcHJlZml4fWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1cykgdmFyKC0tI3skcHJlZml4fWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1cykpO1xuICB9XG59XG5cblxuLy9cbi8vIEhlYWRlciBuYXZzXG4vL1xuXG4uY2FyZC1oZWFkZXItdGFicyB7XG4gIG1hcmdpbi1yaWdodDogY2FsYygtLjUgKiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1jYXAtcGFkZGluZy14KSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoLTEgKiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1jYXAtcGFkZGluZy15KSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0uNSAqIHZhcigtLSN7JHByZWZpeH1jYXJkLWNhcC1wYWRkaW5nLXgpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgYm9yZGVyLWJvdHRvbTogMDtcblxuICAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1iZyk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tI3skcHJlZml4fWNhcmQtYmcpO1xuICB9XG59XG5cbi5jYXJkLWhlYWRlci1waWxscyB7XG4gIG1hcmdpbi1yaWdodDogY2FsYygtLjUgKiB2YXIoLS0jeyRwcmVmaXh9Y2FyZC1jYXAtcGFkZGluZy14KSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0uNSAqIHZhcigtLSN7JHByZWZpeH1jYXJkLWNhcC1wYWRkaW5nLXgpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3Rcbn1cblxuLy8gQ2FyZCBpbWFnZVxuLmNhcmQtaW1nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fWNhcmQtaW1nLW92ZXJsYXktcGFkZGluZyk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXModmFyKC0tI3skcHJlZml4fWNhcmQtaW5uZXItYm9yZGVyLXJhZGl1cykpO1xufVxuXG4uY2FyZC1pbWcsXG4uY2FyZC1pbWctdG9wLFxuLmNhcmQtaW1nLWJvdHRvbSB7XG4gIHdpZHRoOiAxMDAlOyAvLyBSZXF1aXJlZCBiZWNhdXNlIHdlIHVzZSBmbGV4Ym94IGFuZCB0aGlzIGluaGVyZW50bHkgYXBwbGllcyBhbGlnbi1zZWxmOiBzdHJldGNoXG59XG5cbi5jYXJkLWltZyxcbi5jYXJkLWltZy10b3Age1xuICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9Y2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKSk7XG59XG5cbi5jYXJkLWltZyxcbi5jYXJkLWltZy1ib3R0b20ge1xuICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9Y2FyZC1pbm5lci1ib3JkZXItcmFkaXVzKSk7XG59XG5cblxuLy9cbi8vIENhcmQgZ3JvdXBzXG4vL1xuXG4uY2FyZC1ncm91cCB7XG4gIC8vIFRoZSBjaGlsZCBzZWxlY3RvciBhbGxvd3MgbmVzdGVkIGAuY2FyZGAgd2l0aGluIGAuY2FyZC1ncm91cGBcbiAgLy8gdG8gZGlzcGxheSBwcm9wZXJseS5cbiAgPiAuY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tI3skcHJlZml4fWNhcmQtZ3JvdXAtbWFyZ2luKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgLy8gVGhlIGNoaWxkIHNlbGVjdG9yIGFsbG93cyBuZXN0ZWQgYC5jYXJkYCB3aXRoaW4gYC5jYXJkLWdyb3VwYFxuICAgIC8vIHRvIGRpc3BsYXkgcHJvcGVybHkuXG4gICAgPiAuY2FyZCB7XG4gICAgICAvLyBGbGV4YnVncyAjNDogaHR0cHM6Ly9naXRodWIuY29tL3BoaWxpcHdhbHRvbi9mbGV4YnVncyNmbGV4YnVnLTRcbiAgICAgIGZsZXg6IDEgMCAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICsgLmNhcmQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEhhbmRsZSByb3VuZGVkIGNvcm5lcnNcbiAgICAgIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1lbmQtcmFkaXVzKDApO1xuXG4gICAgICAgICAgLmNhcmQtaW1nLXRvcCxcbiAgICAgICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHByb3BlcnR5LWRpc2FsbG93ZWQtbGlzdFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLWltZy1ib3R0b20sXG4gICAgICAgICAgLmNhcmQtZm9vdGVyIHtcbiAgICAgICAgICAgIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBwcm9wZXJ0eS1kaXNhbGxvd2VkLWxpc3RcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydC1yYWRpdXMoMCk7XG5cbiAgICAgICAgICAuY2FyZC1pbWctdG9wLFxuICAgICAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvcGVydHktZGlzYWxsb3dlZC1saXN0XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC1pbWctYm90dG9tLFxuICAgICAgICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICAgICAgICAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvcGVydHktZGlzYWxsb3dlZC1saXN0XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEJhc2Ugc3R5bGVzXG4vL1xuXG4uYWNjb3JkaW9uIHtcbiAgLy8gc2Nzcy1kb2NzLXN0YXJ0IGFjY29yZGlvbi1jc3MtdmFyc1xuICAtLSN7JHByZWZpeH1hY2NvcmRpb24tY29sb3I6ICN7JGFjY29yZGlvbi1jb2xvcn07XG4gIC0tI3skcHJlZml4fWFjY29yZGlvbi1iZzogI3skYWNjb3JkaW9uLWJnfTtcbiAgLS0jeyRwcmVmaXh9YWNjb3JkaW9uLXRyYW5zaXRpb246ICN7JGFjY29yZGlvbi10cmFuc2l0aW9ufTtcbiAgLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJvcmRlci1jb2xvcjogI3skYWNjb3JkaW9uLWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fWFjY29yZGlvbi1ib3JkZXItd2lkdGg6ICN7JGFjY29yZGlvbi1ib3JkZXItd2lkdGh9O1xuICAtLSN7JHByZWZpeH1hY2NvcmRpb24tYm9yZGVyLXJhZGl1czogI3skYWNjb3JkaW9uLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1hY2NvcmRpb24taW5uZXItYm9yZGVyLXJhZGl1czogI3skYWNjb3JkaW9uLWlubmVyLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1hY2NvcmRpb24tYnRuLXBhZGRpbmcteDogI3skYWNjb3JkaW9uLWJ1dHRvbi1wYWRkaW5nLXh9O1xuICAtLSN7JHByZWZpeH1hY2NvcmRpb24tYnRuLXBhZGRpbmcteTogI3skYWNjb3JkaW9uLWJ1dHRvbi1wYWRkaW5nLXl9O1xuICAtLSN7JHByZWZpeH1hY2NvcmRpb24tYnRuLWNvbG9yOiAjeyRhY2NvcmRpb24tYnV0dG9uLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJ0bi1iZzogI3skYWNjb3JkaW9uLWJ1dHRvbi1iZ307XG4gIC0tI3skcHJlZml4fWFjY29yZGlvbi1idG4taWNvbjogI3tlc2NhcGUtc3ZnKCRhY2NvcmRpb24tYnV0dG9uLWljb24pfTtcbiAgLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJ0bi1pY29uLXdpZHRoOiAjeyRhY2NvcmRpb24taWNvbi13aWR0aH07XG4gIC0tI3skcHJlZml4fWFjY29yZGlvbi1idG4taWNvbi10cmFuc2Zvcm06ICN7JGFjY29yZGlvbi1pY29uLXRyYW5zZm9ybX07XG4gIC0tI3skcHJlZml4fWFjY29yZGlvbi1idG4taWNvbi10cmFuc2l0aW9uOiAjeyRhY2NvcmRpb24taWNvbi10cmFuc2l0aW9ufTtcbiAgLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJ0bi1hY3RpdmUtaWNvbjogI3tlc2NhcGUtc3ZnKCRhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZS1pY29uKX07XG4gIC0tI3skcHJlZml4fWFjY29yZGlvbi1idG4tZm9jdXMtYm94LXNoYWRvdzogI3skYWNjb3JkaW9uLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93fTtcbiAgLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJvZHktcGFkZGluZy14OiAjeyRhY2NvcmRpb24tYm9keS1wYWRkaW5nLXh9O1xuICAtLSN7JHByZWZpeH1hY2NvcmRpb24tYm9keS1wYWRkaW5nLXk6ICN7JGFjY29yZGlvbi1ib2R5LXBhZGRpbmcteX07XG4gIC0tI3skcHJlZml4fWFjY29yZGlvbi1hY3RpdmUtY29sb3I6ICN7JGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWFjdGl2ZS1iZzogI3skYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtYmd9O1xuICAvLyBzY3NzLWRvY3MtZW5kIGFjY29yZGlvbi1jc3MtdmFyc1xufVxuXG4uYWNjb3JkaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tYnRuLXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1idG4tcGFkZGluZy14KTtcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRmb250LXNpemUtYmFzZSk7XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJ0bi1jb2xvcik7XG4gIHRleHQtYWxpZ246IGxlZnQ7IC8vIFJlc2V0IGJ1dHRvbiBzdHlsZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJ0bi1iZyk7XG4gIGJvcmRlcjogMDtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwKTtcbiAgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tdHJhbnNpdGlvbikpO1xuXG4gICY6bm90KC5jb2xsYXBzZWQpIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1hY3RpdmUtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tYWN0aXZlLWJnKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIGNhbGMoLTEgKiB2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJvcmRlci13aWR0aCkpIDAgdmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1ib3JkZXItY29sb3IpOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1idG4tYWN0aXZlLWljb24pO1xuICAgICAgdHJhbnNmb3JtOiB2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJ0bi1pY29uLXRyYW5zZm9ybSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWNjb3JkaW9uIGljb25cbiAgJjo6YWZ0ZXIge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHdpZHRoOiB2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJ0bi1pY29uLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tYnRuLWljb24td2lkdGgpO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1idG4taWNvbik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tYnRuLWljb24td2lkdGgpO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24odmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1idG4taWNvbi10cmFuc2l0aW9uKSk7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgei1pbmRleDogMztcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tYnRuLWZvY3VzLWJveC1zaGFkb3cpO1xuICB9XG59XG5cbi5hY2NvcmRpb24taGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmFjY29yZGlvbi1pdGVtIHtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJnKTtcbiAgYm9yZGVyOiB2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1ib3JkZXItY29sb3IpO1xuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXModmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1ib3JkZXItcmFkaXVzKSk7XG5cbiAgICA+IC5hY2NvcmRpb24taGVhZGVyIC5hY2NvcmRpb24tYnV0dG9uIHtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24taW5uZXItYm9yZGVyLXJhZGl1cykpO1xuICAgIH1cbiAgfVxuXG4gICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuXG4gIC8vIE9ubHkgc2V0IGEgYm9yZGVyLXJhZGl1cyBvbiB0aGUgbGFzdCBpdGVtIGlmIHRoZSBhY2NvcmRpb24gaXMgY29sbGFwc2VkXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJvcmRlci1yYWRpdXMpKTtcblxuICAgID4gLmFjY29yZGlvbi1oZWFkZXIgLmFjY29yZGlvbi1idXR0b24ge1xuICAgICAgJi5jb2xsYXBzZWQge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWlubmVyLWJvcmRlci1yYWRpdXMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA+IC5hY2NvcmRpb24tY29sbGFwc2Uge1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXModmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1ib3JkZXItcmFkaXVzKSk7XG4gICAgfVxuICB9XG59XG5cbi5hY2NvcmRpb24tYm9keSB7XG4gIHBhZGRpbmc6IHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tYm9keS1wYWRkaW5nLXkpIHZhcigtLSN7JHByZWZpeH1hY2NvcmRpb24tYm9keS1wYWRkaW5nLXgpO1xufVxuXG5cbi8vIEZsdXNoIGFjY29yZGlvbiBpdGVtc1xuLy9cbi8vIFJlbW92ZSBib3JkZXJzIGFuZCBib3JkZXItcmFkaXVzIHRvIGtlZXAgYWNjb3JkaW9uIGl0ZW1zIGVkZ2UtdG8tZWRnZS5cblxuLmFjY29yZGlvbi1mbHVzaCB7XG4gID4gLmFjY29yZGlvbi1pdGVtIHtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwKTtcblxuICAgICY6Zmlyc3QtY2hpbGQgeyBib3JkZXItdG9wOiAwOyB9XG4gICAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogMDsgfVxuXG4gICAgLy8gc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LWNsYXNzXG4gICAgPiAuYWNjb3JkaW9uLWhlYWRlciAuYWNjb3JkaW9uLWJ1dHRvbiB7XG4gICAgICAmLFxuICAgICAgJi5jb2xsYXBzZWQge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1jbGFzc1xuXG4gICAgPiAuYWNjb3JkaW9uLWNvbGxhcHNlIHtcbiAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMCk7XG4gICAgfVxuICB9XG59XG5cbkBpZiAkZW5hYmxlLWRhcmstbW9kZSB7XG4gIEBpbmNsdWRlIGNvbG9yLW1vZGUoZGFyaykge1xuICAgIC5hY2NvcmRpb24tYnV0dG9uOjphZnRlciB7XG4gICAgICAtLSN7JHByZWZpeH1hY2NvcmRpb24tYnRuLWljb246ICN7ZXNjYXBlLXN2ZygkYWNjb3JkaW9uLWJ1dHRvbi1pY29uLWRhcmspfTtcbiAgICAgIC0tI3skcHJlZml4fWFjY29yZGlvbi1idG4tYWN0aXZlLWljb246ICN7ZXNjYXBlLXN2ZygkYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtaWNvbi1kYXJrKX07XG4gICAgfVxuICB9XG59XG4iLCIuYnJlYWRjcnVtYiB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBicmVhZGNydW1iLWNzcy12YXJzXG4gIC0tI3skcHJlZml4fWJyZWFkY3J1bWItcGFkZGluZy14OiAjeyRicmVhZGNydW1iLXBhZGRpbmcteH07XG4gIC0tI3skcHJlZml4fWJyZWFkY3J1bWItcGFkZGluZy15OiAjeyRicmVhZGNydW1iLXBhZGRpbmcteX07XG4gIC0tI3skcHJlZml4fWJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogI3skYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tfTtcbiAgQGluY2x1ZGUgcmZzKCRicmVhZGNydW1iLWZvbnQtc2l6ZSwgLS0jeyRwcmVmaXh9YnJlYWRjcnVtYi1mb250LXNpemUpO1xuICAtLSN7JHByZWZpeH1icmVhZGNydW1iLWJnOiAjeyRicmVhZGNydW1iLWJnfTtcbiAgLS0jeyRwcmVmaXh9YnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAjeyRicmVhZGNydW1iLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1icmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICN7JGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fWJyZWFkY3J1bWItaXRlbS1wYWRkaW5nLXg6ICN7JGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nLXh9O1xuICAtLSN7JHByZWZpeH1icmVhZGNydW1iLWl0ZW0tYWN0aXZlLWNvbG9yOiAjeyRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcn07XG4gIC8vIHNjc3MtZG9jcy1lbmQgYnJlYWRjcnVtYi1jc3MtdmFyc1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fWJyZWFkY3J1bWItcGFkZGluZy15KSB2YXIoLS0jeyRwcmVmaXh9YnJlYWRjcnVtYi1wYWRkaW5nLXgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS0jeyRwcmVmaXh9YnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tKTtcbiAgQGluY2x1ZGUgZm9udC1zaXplKHZhcigtLSN7JHByZWZpeH1icmVhZGNydW1iLWZvbnQtc2l6ZSkpO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YnJlYWRjcnVtYi1iZyk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXModmFyKC0tI3skcHJlZml4fWJyZWFkY3J1bWItYm9yZGVyLXJhZGl1cykpO1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIHtcbiAgLy8gVGhlIHNlcGFyYXRvciBiZXR3ZWVuIGJyZWFkY3J1bWJzIChieSBkZWZhdWx0LCBhIGZvcndhcmQtc2xhc2g6IFwiL1wiKVxuICArIC5icmVhZGNydW1iLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tI3skcHJlZml4fWJyZWFkY3J1bWItaXRlbS1wYWRkaW5nLXgpO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGZsb2F0OiBsZWZ0OyAvLyBTdXBwcmVzcyBpbmxpbmUgc3BhY2luZ3MgYW5kIHVuZGVybGluaW5nIG9mIHRoZSBzZXBhcmF0b3JcbiAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLSN7JHByZWZpeH1icmVhZGNydW1iLWl0ZW0tcGFkZGluZy14KTtcbiAgICAgIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIGNvbnRlbnQ6IHZhcigtLSN7JHByZWZpeH1icmVhZGNydW1iLWRpdmlkZXIsIGVzY2FwZS1zdmcoJGJyZWFkY3J1bWItZGl2aWRlcikpICN7XCIvKiBydGw6XCJ9IHZhcigtLSN7JHByZWZpeH1icmVhZGNydW1iLWRpdmlkZXIsIGVzY2FwZS1zdmcoJGJyZWFkY3J1bWItZGl2aWRlci1mbGlwcGVkKSkgI3tcIiovXCJ9O1xuICAgIH1cbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWJyZWFkY3J1bWItaXRlbS1hY3RpdmUtY29sb3IpO1xuICB9XG59XG4iLCIucGFnaW5hdGlvbiB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBwYWdpbmF0aW9uLWNzcy12YXJzXG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24tcGFkZGluZy14OiAjeyRwYWdpbmF0aW9uLXBhZGRpbmcteH07XG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24tcGFkZGluZy15OiAjeyRwYWdpbmF0aW9uLXBhZGRpbmcteX07XG4gIEBpbmNsdWRlIHJmcygkcGFnaW5hdGlvbi1mb250LXNpemUsIC0tI3skcHJlZml4fXBhZ2luYXRpb24tZm9udC1zaXplKTtcbiAgLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1jb2xvcjogI3skcGFnaW5hdGlvbi1jb2xvcn07XG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24tYmc6ICN7JHBhZ2luYXRpb24tYmd9O1xuICAtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWJvcmRlci13aWR0aDogI3skcGFnaW5hdGlvbi1ib3JkZXItd2lkdGh9O1xuICAtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogI3skcGFnaW5hdGlvbi1ib3JkZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWJvcmRlci1yYWRpdXM6ICN7JHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1c307XG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24taG92ZXItY29sb3I6ICN7JHBhZ2luYXRpb24taG92ZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWhvdmVyLWJnOiAjeyRwYWdpbmF0aW9uLWhvdmVyLWJnfTtcbiAgLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICN7JHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1mb2N1cy1jb2xvcjogI3skcGFnaW5hdGlvbi1mb2N1cy1jb2xvcn07XG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24tZm9jdXMtYmc6ICN7JHBhZ2luYXRpb24tZm9jdXMtYmd9O1xuICAtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICN7JHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvd307XG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAjeyRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcn07XG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24tYWN0aXZlLWJnOiAjeyRwYWdpbmF0aW9uLWFjdGl2ZS1iZ307XG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogI3skcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogI3skcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcn07XG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICN7JHBhZ2luYXRpb24tZGlzYWJsZWQtYmd9O1xuICAtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogI3skcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3J9O1xuICAvLyBzY3NzLWRvY3MtZW5kIHBhZ2luYXRpb24tY3NzLXZhcnNcblxuICBkaXNwbGF5OiBmbGV4O1xuICBAaW5jbHVkZSBsaXN0LXVuc3R5bGVkKCk7XG59XG5cbi5wYWdlLWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiB2YXIoLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1wYWRkaW5nLXkpIHZhcigtLSN7JHByZWZpeH1wYWdpbmF0aW9uLXBhZGRpbmcteCk7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSh2YXIoLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1mb250LXNpemUpKTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpZigkbGluay1kZWNvcmF0aW9uID09IG5vbmUsIG51bGwsIG5vbmUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1iZyk7XG4gIGJvcmRlcjogdmFyKC0tI3skcHJlZml4fXBhZ2luYXRpb24tYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1ib3JkZXItY29sb3IpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCRwYWdpbmF0aW9uLXRyYW5zaXRpb24pO1xuXG4gICY6aG92ZXIge1xuICAgIHotaW5kZXg6IDI7XG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWhvdmVyLWNvbG9yKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IGlmKCRsaW5rLWhvdmVyLWRlY29yYXRpb24gPT0gdW5kZXJsaW5lLCBub25lLCBudWxsKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1ob3Zlci1iZyk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgei1pbmRleDogMztcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fXBhZ2luYXRpb24tZm9jdXMtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWZvY3VzLWJnKTtcbiAgICBvdXRsaW5lOiAkcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3cpO1xuICB9XG5cbiAgJi5hY3RpdmUsXG4gIC5hY3RpdmUgPiAmIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1hY3RpdmUtY29sb3IpO1xuICAgIEBpbmNsdWRlIGdyYWRpZW50LWJnKHZhcigtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWFjdGl2ZS1iZykpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tI3skcHJlZml4fXBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcik7XG4gIH1cblxuICAmLmRpc2FibGVkLFxuICAuZGlzYWJsZWQgPiAmIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fXBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3IpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWRpc2FibGVkLWJnKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLSN7JHByZWZpeH1wYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcik7XG4gIH1cbn1cblxuLnBhZ2UtaXRlbSB7XG4gICY6bm90KDpmaXJzdC1jaGlsZCkgLnBhZ2UtbGluayB7XG4gICAgbWFyZ2luLWxlZnQ6ICRwYWdpbmF0aW9uLW1hcmdpbi1zdGFydDtcbiAgfVxuXG4gIEBpZiAkcGFnaW5hdGlvbi1tYXJnaW4tc3RhcnQgPT0gY2FsYygjeyRwYWdpbmF0aW9uLWJvcmRlci13aWR0aH0gKiAtMSkge1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgLnBhZ2UtbGluayB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydC1yYWRpdXModmFyKC0tI3skcHJlZml4fXBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cykpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAucGFnZS1saW5rIHtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWVuZC1yYWRpdXModmFyKC0tI3skcHJlZml4fXBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cykpO1xuICAgICAgfVxuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgLy8gQWRkIGJvcmRlci1yYWRpdXMgdG8gYWxsIHBhZ2VMaW5rcyBpbiBjYXNlIHRoZXkgaGF2ZSBsZWZ0IG1hcmdpblxuICAgIC5wYWdlLWxpbmsge1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzKSk7XG4gICAgfVxuICB9XG59XG5cblxuLy9cbi8vIFNpemluZ1xuLy9cblxuLnBhZ2luYXRpb24tbGcge1xuICBAaW5jbHVkZSBwYWdpbmF0aW9uLXNpemUoJHBhZ2luYXRpb24tcGFkZGluZy15LWxnLCAkcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGcsICRmb250LXNpemUtbGcsICRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtbGcpO1xufVxuXG4ucGFnaW5hdGlvbi1zbSB7XG4gIEBpbmNsdWRlIHBhZ2luYXRpb24tc2l6ZSgkcGFnaW5hdGlvbi1wYWRkaW5nLXktc20sICRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbSwgJGZvbnQtc2l6ZS1zbSwgJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1zbSk7XG59XG4iLCIvLyBQYWdpbmF0aW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwYWdpbmF0aW9uLW1peGluXG5AbWl4aW4gcGFnaW5hdGlvbi1zaXplKCRwYWRkaW5nLXksICRwYWRkaW5nLXgsICRmb250LXNpemUsICRib3JkZXItcmFkaXVzKSB7XG4gIC0tI3skcHJlZml4fXBhZ2luYXRpb24tcGFkZGluZy14OiAjeyRwYWRkaW5nLXh9O1xuICAtLSN7JHByZWZpeH1wYWdpbmF0aW9uLXBhZGRpbmcteTogI3skcGFkZGluZy15fTtcbiAgQGluY2x1ZGUgcmZzKCRmb250LXNpemUsIC0tI3skcHJlZml4fXBhZ2luYXRpb24tZm9udC1zaXplKTtcbiAgLS0jeyRwcmVmaXh9cGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzOiAjeyRib3JkZXItcmFkaXVzfTtcbn1cbi8vIHNjc3MtZG9jcy1lbmQgcGFnaW5hdGlvbi1taXhpblxuIiwiLy8gQmFzZSBjbGFzc1xuLy9cbi8vIFJlcXVpcmVzIG9uZSBvZiB0aGUgY29udGV4dHVhbCwgY29sb3IgbW9kaWZpZXIgY2xhc3NlcyBmb3IgYGNvbG9yYCBhbmRcbi8vIGBiYWNrZ3JvdW5kLWNvbG9yYC5cblxuLmJhZGdlIHtcbiAgLy8gc2Nzcy1kb2NzLXN0YXJ0IGJhZGdlLWNzcy12YXJzXG4gIC0tI3skcHJlZml4fWJhZGdlLXBhZGRpbmcteDogI3skYmFkZ2UtcGFkZGluZy14fTtcbiAgLS0jeyRwcmVmaXh9YmFkZ2UtcGFkZGluZy15OiAjeyRiYWRnZS1wYWRkaW5nLXl9O1xuICBAaW5jbHVkZSByZnMoJGJhZGdlLWZvbnQtc2l6ZSwgLS0jeyRwcmVmaXh9YmFkZ2UtZm9udC1zaXplKTtcbiAgLS0jeyRwcmVmaXh9YmFkZ2UtZm9udC13ZWlnaHQ6ICN7JGJhZGdlLWZvbnQtd2VpZ2h0fTtcbiAgLS0jeyRwcmVmaXh9YmFkZ2UtY29sb3I6ICN7JGJhZGdlLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9YmFkZ2UtYm9yZGVyLXJhZGl1czogI3skYmFkZ2UtYm9yZGVyLXJhZGl1c307XG4gIC8vIHNjc3MtZG9jcy1lbmQgYmFkZ2UtY3NzLXZhcnNcblxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IHZhcigtLSN7JHByZWZpeH1iYWRnZS1wYWRkaW5nLXkpIHZhcigtLSN7JHByZWZpeH1iYWRnZS1wYWRkaW5nLXgpO1xuICBAaW5jbHVkZSBmb250LXNpemUodmFyKC0tI3skcHJlZml4fWJhZGdlLWZvbnQtc2l6ZSkpO1xuICBmb250LXdlaWdodDogdmFyKC0tI3skcHJlZml4fWJhZGdlLWZvbnQtd2VpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9YmFkZ2UtY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9YmFkZ2UtYm9yZGVyLXJhZGl1cykpO1xuICBAaW5jbHVkZSBncmFkaWVudC1iZygpO1xuXG4gIC8vIEVtcHR5IGJhZGdlcyBjb2xsYXBzZSBhdXRvbWF0aWNhbGx5XG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLy8gUXVpY2sgZml4IGZvciBiYWRnZXMgaW4gYnV0dG9uc1xuLmJ0biAuYmFkZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbn1cbiIsIi8vXG4vLyBCYXNlIHN0eWxlc1xuLy9cblxuLmFsZXJ0IHtcbiAgLy8gc2Nzcy1kb2NzLXN0YXJ0IGFsZXJ0LWNzcy12YXJzXG4gIC0tI3skcHJlZml4fWFsZXJ0LWJnOiB0cmFuc3BhcmVudDtcbiAgLS0jeyRwcmVmaXh9YWxlcnQtcGFkZGluZy14OiAjeyRhbGVydC1wYWRkaW5nLXh9O1xuICAtLSN7JHByZWZpeH1hbGVydC1wYWRkaW5nLXk6ICN7JGFsZXJ0LXBhZGRpbmcteX07XG4gIC0tI3skcHJlZml4fWFsZXJ0LW1hcmdpbi1ib3R0b206ICN7JGFsZXJ0LW1hcmdpbi1ib3R0b219O1xuICAtLSN7JHByZWZpeH1hbGVydC1jb2xvcjogaW5oZXJpdDtcbiAgLS0jeyRwcmVmaXh9YWxlcnQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS0jeyRwcmVmaXh9YWxlcnQtYm9yZGVyOiAjeyRhbGVydC1ib3JkZXItd2lkdGh9IHNvbGlkIHZhcigtLSN7JHByZWZpeH1hbGVydC1ib3JkZXItY29sb3IpO1xuICAtLSN7JHByZWZpeH1hbGVydC1ib3JkZXItcmFkaXVzOiAjeyRhbGVydC1ib3JkZXItcmFkaXVzfTtcbiAgLS0jeyRwcmVmaXh9YWxlcnQtbGluay1jb2xvcjogaW5oZXJpdDtcbiAgLy8gc2Nzcy1kb2NzLWVuZCBhbGVydC1jc3MtdmFyc1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fWFsZXJ0LXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fWFsZXJ0LXBhZGRpbmcteCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLSN7JHByZWZpeH1hbGVydC1tYXJnaW4tYm90dG9tKTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1hbGVydC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH1hbGVydC1iZyk7XG4gIGJvcmRlcjogdmFyKC0tI3skcHJlZml4fWFsZXJ0LWJvcmRlcik7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXModmFyKC0tI3skcHJlZml4fWFsZXJ0LWJvcmRlci1yYWRpdXMpKTtcbn1cblxuLy8gSGVhZGluZ3MgZm9yIGxhcmdlciBhbGVydHNcbi5hbGVydC1oZWFkaW5nIHtcbiAgLy8gU3BlY2lmaWVkIHRvIHByZXZlbnQgY29uZmxpY3RzIG9mIGNoYW5naW5nICRoZWFkaW5ncy1jb2xvclxuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLy8gUHJvdmlkZSBjbGFzcyBmb3IgbGlua3MgdGhhdCBtYXRjaCBhbGVydHNcbi5hbGVydC1saW5rIHtcbiAgZm9udC13ZWlnaHQ6ICRhbGVydC1saW5rLWZvbnQtd2VpZ2h0O1xuICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWFsZXJ0LWxpbmstY29sb3IpO1xufVxuXG5cbi8vIERpc21pc3NpYmxlIGFsZXJ0c1xuLy9cbi8vIEV4cGFuZCB0aGUgcmlnaHQgcGFkZGluZyBhbmQgYWNjb3VudCBmb3IgdGhlIGNsb3NlIGJ1dHRvbidzIHBvc2l0aW9uaW5nLlxuXG4uYWxlcnQtZGlzbWlzc2libGUge1xuICBwYWRkaW5nLXJpZ2h0OiAkYWxlcnQtZGlzbWlzc2libGUtcGFkZGluZy1yO1xuXG4gIC8vIEFkanVzdCBjbG9zZSBsaW5rIHBvc2l0aW9uXG4gIC5idG4tY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogJHN0cmV0Y2hlZC1saW5rLXotaW5kZXggKyAxO1xuICAgIHBhZGRpbmc6ICRhbGVydC1wYWRkaW5nLXkgKiAxLjI1ICRhbGVydC1wYWRkaW5nLXg7XG4gIH1cbn1cblxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYWxlcnQtbW9kaWZpZXJzXG4vLyBHZW5lcmF0ZSBjb250ZXh0dWFsIG1vZGlmaWVyIGNsYXNzZXMgZm9yIGNvbG9yaXppbmcgdGhlIGFsZXJ0XG5AZWFjaCAkc3RhdGUgaW4gbWFwLWtleXMoJHRoZW1lLWNvbG9ycykge1xuICAuYWxlcnQtI3skc3RhdGV9IHtcbiAgICAtLSN7JHByZWZpeH1hbGVydC1jb2xvcjogdmFyKC0tI3skcHJlZml4fSN7JHN0YXRlfS10ZXh0LWVtcGhhc2lzKTtcbiAgICAtLSN7JHByZWZpeH1hbGVydC1iZzogdmFyKC0tI3skcHJlZml4fSN7JHN0YXRlfS1iZy1zdWJ0bGUpO1xuICAgIC0tI3skcHJlZml4fWFsZXJ0LWJvcmRlci1jb2xvcjogdmFyKC0tI3skcHJlZml4fSN7JHN0YXRlfS1ib3JkZXItc3VidGxlKTtcbiAgICAtLSN7JHByZWZpeH1hbGVydC1saW5rLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9I3skc3RhdGV9LXRleHQtZW1waGFzaXMpO1xuICB9XG59XG4vLyBzY3NzLWRvY3MtZW5kIGFsZXJ0LW1vZGlmaWVyc1xuIiwiLy8gRGlzYWJsZSBhbmltYXRpb24gaWYgdHJhbnNpdGlvbnMgYXJlIGRpc2FibGVkXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwcm9ncmVzcy1rZXlmcmFtZXNcbkBpZiAkZW5hYmxlLXRyYW5zaXRpb25zIHtcbiAgQGtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XG4gICAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6ICRwcm9ncmVzcy1oZWlnaHQ7IH1cbiAgfVxufVxuLy8gc2Nzcy1kb2NzLWVuZCBwcm9ncmVzcy1rZXlmcmFtZXNcblxuLnByb2dyZXNzLFxuLnByb2dyZXNzLXN0YWNrZWQge1xuICAvLyBzY3NzLWRvY3Mtc3RhcnQgcHJvZ3Jlc3MtY3NzLXZhcnNcbiAgLS0jeyRwcmVmaXh9cHJvZ3Jlc3MtaGVpZ2h0OiAjeyRwcm9ncmVzcy1oZWlnaHR9O1xuICBAaW5jbHVkZSByZnMoJHByb2dyZXNzLWZvbnQtc2l6ZSwgLS0jeyRwcmVmaXh9cHJvZ3Jlc3MtZm9udC1zaXplKTtcbiAgLS0jeyRwcmVmaXh9cHJvZ3Jlc3MtYmc6ICN7JHByb2dyZXNzLWJnfTtcbiAgLS0jeyRwcmVmaXh9cHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogI3skcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1c307XG4gIC0tI3skcHJlZml4fXByb2dyZXNzLWJveC1zaGFkb3c6ICN7JHByb2dyZXNzLWJveC1zaGFkb3d9O1xuICAtLSN7JHByZWZpeH1wcm9ncmVzcy1iYXItY29sb3I6ICN7JHByb2dyZXNzLWJhci1jb2xvcn07XG4gIC0tI3skcHJlZml4fXByb2dyZXNzLWJhci1iZzogI3skcHJvZ3Jlc3MtYmFyLWJnfTtcbiAgLS0jeyRwcmVmaXh9cHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICN7JHByb2dyZXNzLWJhci10cmFuc2l0aW9ufTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCBwcm9ncmVzcy1jc3MtdmFyc1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogdmFyKC0tI3skcHJlZml4fXByb2dyZXNzLWhlaWdodCk7XG4gIG92ZXJmbG93OiBoaWRkZW47IC8vIGZvcmNlIHJvdW5kZWQgY29ybmVycyBieSBjcm9wcGluZyBpdFxuICBAaW5jbHVkZSBmb250LXNpemUodmFyKC0tI3skcHJlZml4fXByb2dyZXNzLWZvbnQtc2l6ZSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cHJvZ3Jlc3MtYmcpO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKHZhcigtLSN7JHByZWZpeH1wcm9ncmVzcy1ib3JkZXItcmFkaXVzKSk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3codmFyKC0tI3skcHJlZml4fXByb2dyZXNzLWJveC1zaGFkb3cpKTtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogdmFyKC0tI3skcHJlZml4fXByb2dyZXNzLWJhci1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fXByb2dyZXNzLWJhci1iZyk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24odmFyKC0tI3skcHJlZml4fXByb2dyZXNzLWJhci10cmFuc2l0aW9uKSk7XG59XG5cbi5wcm9ncmVzcy1iYXItc3RyaXBlZCB7XG4gIEBpbmNsdWRlIGdyYWRpZW50LXN0cmlwZWQoKTtcbiAgYmFja2dyb3VuZC1zaXplOiB2YXIoLS0jeyRwcmVmaXh9cHJvZ3Jlc3MtaGVpZ2h0KSB2YXIoLS0jeyRwcmVmaXh9cHJvZ3Jlc3MtaGVpZ2h0KTtcbn1cblxuLnByb2dyZXNzLXN0YWNrZWQgPiAucHJvZ3Jlc3Mge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnByb2dyZXNzLXN0YWNrZWQgPiAucHJvZ3Jlc3MgPiAucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBpZiAkZW5hYmxlLXRyYW5zaXRpb25zIHtcbiAgLnByb2dyZXNzLWJhci1hbmltYXRlZCB7XG4gICAgYW5pbWF0aW9uOiAkcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmcgcHJvZ3Jlc3MtYmFyLXN0cmlwZXM7XG5cbiAgICBAaWYgJGVuYWJsZS1yZWR1Y2VkLW1vdGlvbiB7XG4gICAgICBAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBCYXNlIGNsYXNzXG4vL1xuLy8gRWFzaWx5IHVzYWJsZSBvbiA8dWw+LCA8b2w+LCBvciA8ZGl2Pi5cblxuLmxpc3QtZ3JvdXAge1xuICAvLyBzY3NzLWRvY3Mtc3RhcnQgbGlzdC1ncm91cC1jc3MtdmFyc1xuICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWNvbG9yOiAjeyRsaXN0LWdyb3VwLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1iZzogI3skbGlzdC1ncm91cC1iZ307XG4gIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAjeyRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAjeyRsaXN0LWdyb3VwLWJvcmRlci13aWR0aH07XG4gIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogI3skbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzfTtcbiAgLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogI3skbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteH07XG4gIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICN7JGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXl9O1xuICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogI3skbGlzdC1ncm91cC1hY3Rpb24tY29sb3J9O1xuICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogI3skbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1iZzogI3skbGlzdC1ncm91cC1ob3Zlci1iZ307XG4gIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogI3skbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAjeyRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmd9O1xuICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAjeyRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1kaXNhYmxlZC1iZzogI3skbGlzdC1ncm91cC1kaXNhYmxlZC1iZ307XG4gIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAjeyRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcn07XG4gIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAjeyRsaXN0LWdyb3VwLWFjdGl2ZS1iZ307XG4gIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogI3skbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yfTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCBsaXN0LWdyb3VwLWNzcy12YXJzXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAvLyBObyBuZWVkIHRvIHNldCBsaXN0LXN0eWxlOiBub25lOyBzaW5jZSAubGlzdC1ncm91cC1pdGVtIGlzIGJsb2NrIGxldmVsXG4gIHBhZGRpbmctbGVmdDogMDsgLy8gcmVzZXQgcGFkZGluZyBiZWNhdXNlIHVsIGFuZCBvbFxuICBtYXJnaW4tYm90dG9tOiAwO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKHZhcigtLSN7JHByZWZpeH1saXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpKTtcbn1cblxuLmxpc3QtZ3JvdXAtbnVtYmVyZWQge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGNvdW50ZXItcmVzZXQ6IHNlY3Rpb247XG5cbiAgPiAubGlzdC1ncm91cC1pdGVtOjpiZWZvcmUge1xuICAgIC8vIEluY3JlbWVudHMgb25seSB0aGlzIGluc3RhbmNlIG9mIHRoZSBzZWN0aW9uIGNvdW50ZXJcbiAgICBjb250ZW50OiBjb3VudGVycyhzZWN0aW9uLCBcIi5cIikgXCIuIFwiO1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzZWN0aW9uO1xuICB9XG59XG5cbi8vIEludGVyYWN0aXZlIGxpc3QgaXRlbXNcbi8vXG4vLyBVc2UgYW5jaG9yIG9yIGJ1dHRvbiBlbGVtZW50cyBpbnN0ZWFkIG9mIGBsaWBzIG9yIGBkaXZgcyB0byBjcmVhdGUgaW50ZXJhY3RpdmVcbi8vIGxpc3QgaXRlbXMuIEluY2x1ZGVzIGFuIGV4dHJhIGAuYWN0aXZlYCBtb2RpZmllciBjbGFzcyBmb3Igc2VsZWN0ZWQgaXRlbXMuXG5cbi5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7IC8vIEZvciBgPGJ1dHRvbj5gcyAoYW5jaG9ycyBiZWNvbWUgMTAwJSBieSBkZWZhdWx0IHRob3VnaClcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1saXN0LWdyb3VwLWFjdGlvbi1jb2xvcik7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7IC8vIEZvciBgPGJ1dHRvbj5gcyAoYW5jaG9ycyBpbmhlcml0KVxuXG4gIC8vIEhvdmVyIHN0YXRlXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHotaW5kZXg6IDE7IC8vIFBsYWNlIGhvdmVyL2ZvY3VzIGl0ZW1zIGFib3ZlIHRoZWlyIHNpYmxpbmdzIGZvciBwcm9wZXIgYm9yZGVyIHN0eWxpbmdcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZyk7XG4gIH1cbn1cblxuLy8gSW5kaXZpZHVhbCBsaXN0IGl0ZW1zXG4vL1xuLy8gVXNlIG9uIGBsaWBzIG9yIGBkaXZgcyB3aXRoaW4gdGhlIGAubGlzdC1ncm91cGAgcGFyZW50LlxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXkpIHZhcigtLSN7JHByZWZpeH1saXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14KTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1saXN0LWdyb3VwLWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpZigkbGluay1kZWNvcmF0aW9uID09IG5vbmUsIG51bGwsIG5vbmUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1iZyk7XG4gIGJvcmRlcjogdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1ib3JkZXItY29sb3IpO1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKGluaGVyaXQpO1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cyhpbmhlcml0KTtcbiAgfVxuXG4gICYuZGlzYWJsZWQsXG4gICY6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcik7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtZGlzYWJsZWQtYmcpO1xuICB9XG5cbiAgLy8gSW5jbHVkZSBib3RoIGhlcmUgZm9yIGA8YT5gcyBhbmQgYDxidXR0b24+YHNcbiAgJi5hY3RpdmUge1xuICAgIHotaW5kZXg6IDI7IC8vIFBsYWNlIGFjdGl2ZSBpdGVtcyBhYm92ZSB0aGVpciBzaWJsaW5ncyBmb3IgcHJvcGVyIGJvcmRlciBzdHlsaW5nXG4gICAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1saXN0LWdyb3VwLWFjdGl2ZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aXZlLWJnKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLSN7JHByZWZpeH1saXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3Mvc2VsZWN0b3Itbm8tcmVkdW5kYW50LW5lc3Rpbmctc2VsZWN0b3JcbiAgJiArIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gICAgICBib3JkZXItdG9wLXdpZHRoOiB2YXIoLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1ib3JkZXItd2lkdGgpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBIb3Jpem9udGFsXG4vL1xuLy8gQ2hhbmdlIHRoZSBsYXlvdXQgb2YgbGlzdCBncm91cCBpdGVtcyBmcm9tIHZlcnRpY2FsIChkZWZhdWx0KSB0byBob3Jpem9udGFsLlxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICAubGlzdC1ncm91cC1ob3Jpem9udGFsI3skaW5maXh9IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgID4gLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1zdGFydC1yYWRpdXModmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cykpO1xuICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci10b3AtZW5kLXJhZGl1cygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1lbmQtcmFkaXVzKHZhcigtLSN7JHByZWZpeH1saXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpKTtcbiAgICAgICAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXN0YXJ0LXJhZGl1cygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgKyAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiB2YXIoLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1ib3JkZXItd2lkdGgpO1xuICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1ib3JkZXItd2lkdGgpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiB2YXIoLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1ib3JkZXItd2lkdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIEZsdXNoIGxpc3QgaXRlbXNcbi8vXG4vLyBSZW1vdmUgYm9yZGVycyBhbmQgYm9yZGVyLXJhZGl1cyB0byBrZWVwIGxpc3QgZ3JvdXAgaXRlbXMgZWRnZS10by1lZGdlLiBNb3N0XG4vLyB1c2VmdWwgd2l0aGluIG90aGVyIGNvbXBvbmVudHMgKGUuZy4sIGNhcmRzKS5cblxuLmxpc3QtZ3JvdXAtZmx1c2gge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xuXG4gID4gLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgdmFyKC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoKTtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBsaXN0LWdyb3VwLW1vZGlmaWVyc1xuLy8gTGlzdCBncm91cCBjb250ZXh0dWFsIHZhcmlhbnRzXG4vL1xuLy8gQWRkIG1vZGlmaWVyIGNsYXNzZXMgdG8gY2hhbmdlIHRleHQgYW5kIGJhY2tncm91bmQgY29sb3Igb24gaW5kaXZpZHVhbCBpdGVtcy5cbi8vIE9yZ2FuaXphdGlvbmFsbHksIHRoaXMgbXVzdCBjb21lIGFmdGVyIHRoZSBgOmhvdmVyYCBzdGF0ZXMuXG5cbkBlYWNoICRzdGF0ZSBpbiBtYXAta2V5cygkdGhlbWUtY29sb3JzKSB7XG4gIC5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9IHtcbiAgICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9I3skc3RhdGV9LXRleHQtZW1waGFzaXMpO1xuICAgIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYmc6IHZhcigtLSN7JHByZWZpeH0jeyRzdGF0ZX0tYmctc3VidGxlKTtcbiAgICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWJvcmRlci1jb2xvcjogdmFyKC0tI3skcHJlZml4fSN7JHN0YXRlfS1ib3JkZXItc3VidGxlKTtcbiAgICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogdmFyKC0tI3skcHJlZml4fWVtcGhhc2lzLWNvbG9yKTtcbiAgICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1iZzogdmFyKC0tI3skcHJlZml4fSN7JHN0YXRlfS1ib3JkZXItc3VidGxlKTtcbiAgICAtLSN7JHByZWZpeH1saXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6IHZhcigtLSN7JHByZWZpeH1lbXBoYXNpcy1jb2xvcik7XG4gICAgLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiB2YXIoLS0jeyRwcmVmaXh9I3skc3RhdGV9LWJvcmRlci1zdWJ0bGUpO1xuICAgIC0tI3skcHJlZml4fWxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9I3skc3RhdGV9LWJnLXN1YnRsZSk7XG4gICAgLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1hY3RpdmUtYmc6IHZhcigtLSN7JHByZWZpeH0jeyRzdGF0ZX0tdGV4dC1lbXBoYXNpcyk7XG4gICAgLS0jeyRwcmVmaXh9bGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9I3skc3RhdGV9LXRleHQtZW1waGFzaXMpO1xuICB9XG59XG4vLyBzY3NzLWRvY3MtZW5kIGxpc3QtZ3JvdXAtbW9kaWZpZXJzXG4iLCIvLyBUcmFuc3BhcmVudCBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgcHJvcGVydGllcyBpbmNsdWRlZCBmb3IgYnV0dG9uIHZlcnNpb24uXG4vLyBpT1MgcmVxdWlyZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGluc3RlYWQgb2YgYW4gYW5jaG9yIHRhZy5cbi8vIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLlxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9jbGljayNTYWZhcmlfTW9iaWxlXG5cbi5idG4tY2xvc2Uge1xuICAvLyBzY3NzLWRvY3Mtc3RhcnQgY2xvc2UtY3NzLXZhcnNcbiAgLS0jeyRwcmVmaXh9YnRuLWNsb3NlLWNvbG9yOiAjeyRidG4tY2xvc2UtY29sb3J9O1xuICAtLSN7JHByZWZpeH1idG4tY2xvc2UtYmc6ICN7IGVzY2FwZS1zdmcoJGJ0bi1jbG9zZS1iZykgfTtcbiAgLS0jeyRwcmVmaXh9YnRuLWNsb3NlLW9wYWNpdHk6ICN7JGJ0bi1jbG9zZS1vcGFjaXR5fTtcbiAgLS0jeyRwcmVmaXh9YnRuLWNsb3NlLWhvdmVyLW9wYWNpdHk6ICN7JGJ0bi1jbG9zZS1ob3Zlci1vcGFjaXR5fTtcbiAgLS0jeyRwcmVmaXh9YnRuLWNsb3NlLWZvY3VzLXNoYWRvdzogI3skYnRuLWNsb3NlLWZvY3VzLXNoYWRvd307XG4gIC0tI3skcHJlZml4fWJ0bi1jbG9zZS1mb2N1cy1vcGFjaXR5OiAjeyRidG4tY2xvc2UtZm9jdXMtb3BhY2l0eX07XG4gIC0tI3skcHJlZml4fWJ0bi1jbG9zZS1kaXNhYmxlZC1vcGFjaXR5OiAjeyRidG4tY2xvc2UtZGlzYWJsZWQtb3BhY2l0eX07XG4gIC0tI3skcHJlZml4fWJ0bi1jbG9zZS13aGl0ZS1maWx0ZXI6ICN7JGJ0bi1jbG9zZS13aGl0ZS1maWx0ZXJ9O1xuICAvLyBzY3NzLWRvY3MtZW5kIGNsb3NlLWNzcy12YXJzXG5cbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiAkYnRuLWNsb3NlLXdpZHRoO1xuICBoZWlnaHQ6ICRidG4tY2xvc2UtaGVpZ2h0O1xuICBwYWRkaW5nOiAkYnRuLWNsb3NlLXBhZGRpbmcteSAkYnRuLWNsb3NlLXBhZGRpbmcteDtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1idG4tY2xvc2UtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB2YXIoLS0jeyRwcmVmaXh9YnRuLWNsb3NlLWJnKSBjZW50ZXIgLyAkYnRuLWNsb3NlLXdpZHRoIGF1dG8gbm8tcmVwZWF0OyAvLyBpbmNsdWRlIHRyYW5zcGFyZW50IGZvciBidXR0b24gZWxlbWVudHNcbiAgYm9yZGVyOiAwOyAvLyBmb3IgYnV0dG9uIGVsZW1lbnRzXG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoKTtcbiAgb3BhY2l0eTogdmFyKC0tI3skcHJlZml4fWJ0bi1jbG9zZS1vcGFjaXR5KTtcblxuICAvLyBPdmVycmlkZSA8YT4ncyBob3ZlciBzdHlsZVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fWJ0bi1jbG9zZS1jb2xvcik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG9wYWNpdHk6IHZhcigtLSN7JHByZWZpeH1idG4tY2xvc2UtaG92ZXItb3BhY2l0eSk7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLSN7JHByZWZpeH1idG4tY2xvc2UtZm9jdXMtc2hhZG93KTtcbiAgICBvcGFjaXR5OiB2YXIoLS0jeyRwcmVmaXh9YnRuLWNsb3NlLWZvY3VzLW9wYWNpdHkpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCxcbiAgJi5kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3BhY2l0eTogdmFyKC0tI3skcHJlZml4fWJ0bi1jbG9zZS1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gYnRuLWNsb3NlLXdoaXRlKCkge1xuICBmaWx0ZXI6IHZhcigtLSN7JHByZWZpeH1idG4tY2xvc2Utd2hpdGUtZmlsdGVyKTtcbn1cblxuLmJ0bi1jbG9zZS13aGl0ZSB7XG4gIEBpbmNsdWRlIGJ0bi1jbG9zZS13aGl0ZSgpO1xufVxuXG5AaWYgJGVuYWJsZS1kYXJrLW1vZGUge1xuICBAaW5jbHVkZSBjb2xvci1tb2RlKGRhcmspIHtcbiAgICAuYnRuLWNsb3NlIHtcbiAgICAgIEBpbmNsdWRlIGJ0bi1jbG9zZS13aGl0ZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLnRvYXN0IHtcbiAgLy8gc2Nzcy1kb2NzLXN0YXJ0IHRvYXN0LWNzcy12YXJzXG4gIC0tI3skcHJlZml4fXRvYXN0LXppbmRleDogI3skemluZGV4LXRvYXN0fTtcbiAgLS0jeyRwcmVmaXh9dG9hc3QtcGFkZGluZy14OiAjeyR0b2FzdC1wYWRkaW5nLXh9O1xuICAtLSN7JHByZWZpeH10b2FzdC1wYWRkaW5nLXk6ICN7JHRvYXN0LXBhZGRpbmcteX07XG4gIC0tI3skcHJlZml4fXRvYXN0LXNwYWNpbmc6ICN7JHRvYXN0LXNwYWNpbmd9O1xuICAtLSN7JHByZWZpeH10b2FzdC1tYXgtd2lkdGg6ICN7JHRvYXN0LW1heC13aWR0aH07XG4gIEBpbmNsdWRlIHJmcygkdG9hc3QtZm9udC1zaXplLCAtLSN7JHByZWZpeH10b2FzdC1mb250LXNpemUpO1xuICAtLSN7JHByZWZpeH10b2FzdC1jb2xvcjogI3skdG9hc3QtY29sb3J9O1xuICAtLSN7JHByZWZpeH10b2FzdC1iZzogI3skdG9hc3QtYmFja2dyb3VuZC1jb2xvcn07XG4gIC0tI3skcHJlZml4fXRvYXN0LWJvcmRlci13aWR0aDogI3skdG9hc3QtYm9yZGVyLXdpZHRofTtcbiAgLS0jeyRwcmVmaXh9dG9hc3QtYm9yZGVyLWNvbG9yOiAjeyR0b2FzdC1ib3JkZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH10b2FzdC1ib3JkZXItcmFkaXVzOiAjeyR0b2FzdC1ib3JkZXItcmFkaXVzfTtcbiAgLS0jeyRwcmVmaXh9dG9hc3QtYm94LXNoYWRvdzogI3skdG9hc3QtYm94LXNoYWRvd307XG4gIC0tI3skcHJlZml4fXRvYXN0LWhlYWRlci1jb2xvcjogI3skdG9hc3QtaGVhZGVyLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9dG9hc3QtaGVhZGVyLWJnOiAjeyR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcn07XG4gIC0tI3skcHJlZml4fXRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICN7JHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3J9O1xuICAvLyBzY3NzLWRvY3MtZW5kIHRvYXN0LWNzcy12YXJzXG5cbiAgd2lkdGg6IHZhcigtLSN7JHByZWZpeH10b2FzdC1tYXgtd2lkdGgpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSh2YXIoLS0jeyRwcmVmaXh9dG9hc3QtZm9udC1zaXplKSk7XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9dG9hc3QtY29sb3IpO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fXRvYXN0LWJnKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiB2YXIoLS0jeyRwcmVmaXh9dG9hc3QtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS0jeyRwcmVmaXh9dG9hc3QtYm9yZGVyLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tI3skcHJlZml4fXRvYXN0LWJveC1zaGFkb3cpO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKHZhcigtLSN7JHByZWZpeH10b2FzdC1ib3JkZXItcmFkaXVzKSk7XG5cbiAgJi5zaG93aW5nIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgJjpub3QoLnNob3cpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi50b2FzdC1jb250YWluZXIge1xuICAtLSN7JHByZWZpeH10b2FzdC16aW5kZXg6ICN7JHppbmRleC10b2FzdH07XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiB2YXIoLS0jeyRwcmVmaXh9dG9hc3QtemluZGV4KTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gID4gOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLSN7JHByZWZpeH10b2FzdC1zcGFjaW5nKTtcbiAgfVxufVxuXG4udG9hc3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fXRvYXN0LXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fXRvYXN0LXBhZGRpbmcteCk7XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9dG9hc3QtaGVhZGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fXRvYXN0LWhlYWRlci1iZyk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLSN7JHByZWZpeH10b2FzdC1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH10b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yKTtcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoY2FsYyh2YXIoLS0jeyRwcmVmaXh9dG9hc3QtYm9yZGVyLXJhZGl1cykgLSB2YXIoLS0jeyRwcmVmaXh9dG9hc3QtYm9yZGVyLXdpZHRoKSkpO1xuXG4gIC5idG4tY2xvc2Uge1xuICAgIG1hcmdpbi1yaWdodDogY2FsYygtLjUgKiB2YXIoLS0jeyRwcmVmaXh9dG9hc3QtcGFkZGluZy14KSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLSN7JHByZWZpeH10b2FzdC1wYWRkaW5nLXgpO1xuICB9XG59XG5cbi50b2FzdC1ib2R5IHtcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fXRvYXN0LXBhZGRpbmcteCk7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuXG4vLyAubW9kYWwtb3BlbiAgICAgIC0gYm9keSBjbGFzcyBmb3Iga2lsbGluZyB0aGUgc2Nyb2xsXG4vLyAubW9kYWwgICAgICAgICAgIC0gY29udGFpbmVyIHRvIHNjcm9sbCB3aXRoaW5cbi8vIC5tb2RhbC1kaWFsb2cgICAgLSBwb3NpdGlvbmluZyBzaGVsbCBmb3IgdGhlIGFjdHVhbCBtb2RhbFxuLy8gLm1vZGFsLWNvbnRlbnQgICAtIGFjdHVhbCBtb2RhbCB3LyBiZyBhbmQgY29ybmVycyBhbmQgc3R1ZmZcblxuXG4vLyBDb250YWluZXIgdGhhdCB0aGUgbW9kYWwgc2Nyb2xscyB3aXRoaW5cbi5tb2RhbCB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBtb2RhbC1jc3MtdmFyc1xuICAtLSN7JHByZWZpeH1tb2RhbC16aW5kZXg6ICN7JHppbmRleC1tb2RhbH07XG4gIC0tI3skcHJlZml4fW1vZGFsLXdpZHRoOiAjeyRtb2RhbC1tZH07XG4gIC0tI3skcHJlZml4fW1vZGFsLXBhZGRpbmc6ICN7JG1vZGFsLWlubmVyLXBhZGRpbmd9O1xuICAtLSN7JHByZWZpeH1tb2RhbC1tYXJnaW46ICN7JG1vZGFsLWRpYWxvZy1tYXJnaW59O1xuICAtLSN7JHByZWZpeH1tb2RhbC1jb2xvcjogI3skbW9kYWwtY29udGVudC1jb2xvcn07XG4gIC0tI3skcHJlZml4fW1vZGFsLWJnOiAjeyRtb2RhbC1jb250ZW50LWJnfTtcbiAgLS0jeyRwcmVmaXh9bW9kYWwtYm9yZGVyLWNvbG9yOiAjeyRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fW1vZGFsLWJvcmRlci13aWR0aDogI3skbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGh9O1xuICAtLSN7JHByZWZpeH1tb2RhbC1ib3JkZXItcmFkaXVzOiAjeyRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1tb2RhbC1ib3gtc2hhZG93OiAjeyRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHN9O1xuICAtLSN7JHByZWZpeH1tb2RhbC1pbm5lci1ib3JkZXItcmFkaXVzOiAjeyRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1tb2RhbC1oZWFkZXItcGFkZGluZy14OiAjeyRtb2RhbC1oZWFkZXItcGFkZGluZy14fTtcbiAgLS0jeyRwcmVmaXh9bW9kYWwtaGVhZGVyLXBhZGRpbmcteTogI3skbW9kYWwtaGVhZGVyLXBhZGRpbmcteX07XG4gIC0tI3skcHJlZml4fW1vZGFsLWhlYWRlci1wYWRkaW5nOiAjeyRtb2RhbC1oZWFkZXItcGFkZGluZ307IC8vIFRvZG8gaW4gdjY6IFNwbGl0IHRoaXMgcGFkZGluZyBpbnRvIHggYW5kIHlcbiAgLS0jeyRwcmVmaXh9bW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogI3skbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fW1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICN7JG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGh9O1xuICAtLSN7JHByZWZpeH1tb2RhbC10aXRsZS1saW5lLWhlaWdodDogI3skbW9kYWwtdGl0bGUtbGluZS1oZWlnaHR9O1xuICAtLSN7JHByZWZpeH1tb2RhbC1mb290ZXItZ2FwOiAjeyRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW59O1xuICAtLSN7JHByZWZpeH1tb2RhbC1mb290ZXItYmc6ICN7JG1vZGFsLWZvb3Rlci1iZ307XG4gIC0tI3skcHJlZml4fW1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICN7JG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1tb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAjeyRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRofTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCBtb2RhbC1jc3MtdmFyc1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiB2YXIoLS0jeyRwcmVmaXh9bW9kYWwtemluZGV4KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAvLyBQcmV2ZW50IENocm9tZSBvbiBXaW5kb3dzIGZyb20gYWRkaW5nIGEgZm9jdXMgb3V0bGluZS4gRm9yIGRldGFpbHMsIHNlZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMDk1MS5cbiAgb3V0bGluZTogMDtcbiAgLy8gV2UgZGVsaWJlcmF0ZWx5IGRvbid0IHVzZSBgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO2AgZHVlIHRvIGFcbiAgLy8gZ25hcmx5IGlPUyBTYWZhcmkgYnVnOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU4MzQyXG4gIC8vIFNlZSBhbHNvIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTc2OTVcbn1cblxuLy8gU2hlbGwgZGl2IHRvIHBvc2l0aW9uIHRoZSBtb2RhbCB3aXRoIGJvdHRvbSBwYWRkaW5nXG4ubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiB2YXIoLS0jeyRwcmVmaXh9bW9kYWwtbWFyZ2luKTtcbiAgLy8gYWxsb3cgY2xpY2tzIHRvIHBhc3MgdGhyb3VnaCBmb3IgY3VzdG9tIGNsaWNrIGhhbmRsaW5nIHRvIGNsb3NlIG1vZGFsXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gIC8vIFdoZW4gZmFkaW5nIGluIHRoZSBtb2RhbCwgYW5pbWF0ZSBpdCB0byBzbGlkZSBkb3duXG4gIC5tb2RhbC5mYWRlICYge1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oJG1vZGFsLXRyYW5zaXRpb24pO1xuICAgIHRyYW5zZm9ybTogJG1vZGFsLWZhZGUtdHJhbnNmb3JtO1xuICB9XG4gIC5tb2RhbC5zaG93ICYge1xuICAgIHRyYW5zZm9ybTogJG1vZGFsLXNob3ctdHJhbnNmb3JtO1xuICB9XG5cbiAgLy8gV2hlbiB0cnlpbmcgdG8gY2xvc2UsIGFuaW1hdGUgZm9jdXMgdG8gc2NhbGVcbiAgLm1vZGFsLm1vZGFsLXN0YXRpYyAmIHtcbiAgICB0cmFuc2Zvcm06ICRtb2RhbC1zY2FsZS10cmFuc2Zvcm07XG4gIH1cbn1cblxuLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS0jeyRwcmVmaXh9bW9kYWwtbWFyZ2luKSAqIDIpO1xuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuXG4ubW9kYWwtZGlhbG9nLWNlbnRlcmVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tI3skcHJlZml4fW1vZGFsLW1hcmdpbikgKiAyKTtcbn1cblxuLy8gQWN0dWFsIG1vZGFsXG4ubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7IC8vIEVuc3VyZSBgLm1vZGFsLWNvbnRlbnRgIGV4dGVuZHMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHBhcmVudCBgLm1vZGFsLWRpYWxvZ2BcbiAgLy8gY291bnRlcmFjdCB0aGUgcG9pbnRlci1ldmVudHM6IG5vbmU7IGluIHRoZSAubW9kYWwtZGlhbG9nXG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bW9kYWwtY29sb3IpO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tI3skcHJlZml4fW1vZGFsLWJnKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiB2YXIoLS0jeyRwcmVmaXh9bW9kYWwtYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS0jeyRwcmVmaXh9bW9kYWwtYm9yZGVyLWNvbG9yKTtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyh2YXIoLS0jeyRwcmVmaXh9bW9kYWwtYm9yZGVyLXJhZGl1cykpO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KHZhcigtLSN7JHByZWZpeH1tb2RhbC1ib3gtc2hhZG93KSk7XG4gIC8vIFJlbW92ZSBmb2N1cyBvdXRsaW5lIGZyb20gb3BlbmVkIG1vZGFsXG4gIG91dGxpbmU6IDA7XG59XG5cbi8vIE1vZGFsIGJhY2tncm91bmRcbi5tb2RhbC1iYWNrZHJvcCB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBtb2RhbC1iYWNrZHJvcC1jc3MtdmFyc1xuICAtLSN7JHByZWZpeH1iYWNrZHJvcC16aW5kZXg6ICN7JHppbmRleC1tb2RhbC1iYWNrZHJvcH07XG4gIC0tI3skcHJlZml4fWJhY2tkcm9wLWJnOiAjeyRtb2RhbC1iYWNrZHJvcC1iZ307XG4gIC0tI3skcHJlZml4fWJhY2tkcm9wLW9wYWNpdHk6ICN7JG1vZGFsLWJhY2tkcm9wLW9wYWNpdHl9O1xuICAvLyBzY3NzLWRvY3MtZW5kIG1vZGFsLWJhY2tkcm9wLWNzcy12YXJzXG5cbiAgQGluY2x1ZGUgb3ZlcmxheS1iYWNrZHJvcCh2YXIoLS0jeyRwcmVmaXh9YmFja2Ryb3AtemluZGV4KSwgdmFyKC0tI3skcHJlZml4fWJhY2tkcm9wLWJnKSwgdmFyKC0tI3skcHJlZml4fWJhY2tkcm9wLW9wYWNpdHkpKTtcbn1cblxuLy8gTW9kYWwgaGVhZGVyXG4vLyBUb3Agc2VjdGlvbiBvZiB0aGUgbW9kYWwgdy8gdGl0bGUgYW5kIGRpc21pc3Ncbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fW1vZGFsLWhlYWRlci1wYWRkaW5nKTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tI3skcHJlZml4fW1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH1tb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yKTtcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXModmFyKC0tI3skcHJlZml4fW1vZGFsLWlubmVyLWJvcmRlci1yYWRpdXMpKTtcblxuICAuYnRuLWNsb3NlIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLSN7JHByZWZpeH1tb2RhbC1oZWFkZXItcGFkZGluZy15KSAqIC41KSBjYWxjKHZhcigtLSN7JHByZWZpeH1tb2RhbC1oZWFkZXItcGFkZGluZy14KSAqIC41KTtcbiAgICBtYXJnaW46IGNhbGMoLS41ICogdmFyKC0tI3skcHJlZml4fW1vZGFsLWhlYWRlci1wYWRkaW5nLXkpKSBjYWxjKC0uNSAqIHZhcigtLSN7JHByZWZpeH1tb2RhbC1oZWFkZXItcGFkZGluZy14KSkgY2FsYygtLjUgKiB2YXIoLS0jeyRwcmVmaXh9bW9kYWwtaGVhZGVyLXBhZGRpbmcteSkpIGF1dG87XG4gIH1cbn1cblxuLy8gVGl0bGUgdGV4dCB3aXRoaW4gaGVhZGVyXG4ubW9kYWwtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogdmFyKC0tI3skcHJlZml4fW1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0KTtcbn1cblxuLy8gTW9kYWwgYm9keVxuLy8gV2hlcmUgYWxsIG1vZGFsIGNvbnRlbnQgcmVzaWRlcyAoc2libGluZyBvZiAubW9kYWwtaGVhZGVyIGFuZCAubW9kYWwtZm9vdGVyKVxuLm1vZGFsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIEVuYWJsZSBgZmxleC1ncm93OiAxYCBzbyB0aGF0IHRoZSBib2R5IHRha2UgdXAgYXMgbXVjaCBzcGFjZSBhcyBwb3NzaWJsZVxuICAvLyB3aGVuIHRoZXJlIHNob3VsZCBiZSBhIGZpeGVkIGhlaWdodCBvbiBgLm1vZGFsLWRpYWxvZ2AuXG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiB2YXIoLS0jeyRwcmVmaXh9bW9kYWwtcGFkZGluZyk7XG59XG5cbi8vIEZvb3RlciAoZm9yIGFjdGlvbnMpXG4ubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLy8gdmVydGljYWxseSBjZW50ZXJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgLy8gUmlnaHQgYWxpZ24gYnV0dG9ucyB3aXRoIGZsZXggcHJvcGVydHkgYmVjYXVzZSB0ZXh0LWFsaWduIGRvZXNuJ3Qgd29yayBvbiBmbGV4IGl0ZW1zXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tI3skcHJlZml4fW1vZGFsLXBhZGRpbmcpIC0gdmFyKC0tI3skcHJlZml4fW1vZGFsLWZvb3Rlci1nYXApICogLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9bW9kYWwtZm9vdGVyLWJnKTtcbiAgYm9yZGVyLXRvcDogdmFyKC0tI3skcHJlZml4fW1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH1tb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yKTtcbiAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXModmFyKC0tI3skcHJlZml4fW1vZGFsLWlubmVyLWJvcmRlci1yYWRpdXMpKTtcblxuICAvLyBQbGFjZSBtYXJnaW4gYmV0d2VlbiBmb290ZXIgZWxlbWVudHNcbiAgLy8gVGhpcyBzb2x1dGlvbiBpcyBmYXIgZnJvbSBpZGVhbCBiZWNhdXNlIG9mIHRoZSB1bml2ZXJzYWwgc2VsZWN0b3IgdXNhZ2UsXG4gIC8vIGJ1dCBpcyBuZWVkZWQgdG8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjQ4MDBcbiAgPiAqIHtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tI3skcHJlZml4fW1vZGFsLWZvb3Rlci1nYXApICogLjUpOyAvLyBUb2RvIGluIHY2OiByZXBsYWNlIHdpdGggZ2FwIG9uIHBhcmVudCBjbGFzc1xuICB9XG59XG5cbi8vIFNjYWxlIHVwIHRoZSBtb2RhbFxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAubW9kYWwge1xuICAgIC0tI3skcHJlZml4fW1vZGFsLW1hcmdpbjogI3skbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwfTtcbiAgICAtLSN7JHByZWZpeH1tb2RhbC1ib3gtc2hhZG93OiAjeyRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXB9O1xuICB9XG5cbiAgLy8gQXV0b21hdGljYWxseSBzZXQgbW9kYWwncyB3aWR0aCBmb3IgbGFyZ2VyIHZpZXdwb3J0c1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IHZhcigtLSN7JHByZWZpeH1tb2RhbC13aWR0aCk7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgLm1vZGFsLXNtIHtcbiAgICAtLSN7JHByZWZpeH1tb2RhbC13aWR0aDogI3skbW9kYWwtc219O1xuICB9XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgLm1vZGFsLWxnLFxuICAubW9kYWwteGwge1xuICAgIC0tI3skcHJlZml4fW1vZGFsLXdpZHRoOiAjeyRtb2RhbC1sZ307XG4gIH1cbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCh4bCkge1xuICAubW9kYWwteGwge1xuICAgIC0tI3skcHJlZml4fW1vZGFsLXdpZHRoOiAjeyRtb2RhbC14bH07XG4gIH1cbn1cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG1vZGFsLWZ1bGxzY3JlZW4tbG9vcFxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG4gICRwb3N0Zml4OiBpZigkaW5maXggIT0gXCJcIiwgJGluZml4ICsgXCItZG93blwiLCBcIlwiKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJGJyZWFrcG9pbnQpIHtcbiAgICAubW9kYWwtZnVsbHNjcmVlbiN7JHBvc3RmaXh9IHtcbiAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcblxuICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwKTtcbiAgICAgIH1cblxuICAgICAgLm1vZGFsLWhlYWRlcixcbiAgICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xuICAgICAgfVxuXG4gICAgICAubW9kYWwtYm9keSB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vLyBzY3NzLWRvY3MtZW5kIG1vZGFsLWZ1bGxzY3JlZW4tbG9vcFxuIiwiLy8gU2hhcmVkIGJldHdlZW4gbW9kYWxzIGFuZCBvZmZjYW52YXNlc1xuQG1peGluIG92ZXJsYXktYmFja2Ryb3AoJHppbmRleCwgJGJhY2tkcm9wLWJnLCAkYmFja2Ryb3Atb3BhY2l0eSkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2Ryb3AtYmc7XG5cbiAgLy8gRmFkZSBmb3IgYmFja2Ryb3BcbiAgJi5mYWRlIHsgb3BhY2l0eTogMDsgfVxuICAmLnNob3cgeyBvcGFjaXR5OiAkYmFja2Ryb3Atb3BhY2l0eTsgfVxufVxuIiwiLy8gQmFzZSBjbGFzc1xuLnRvb2x0aXAge1xuICAvLyBzY3NzLWRvY3Mtc3RhcnQgdG9vbHRpcC1jc3MtdmFyc1xuICAtLSN7JHByZWZpeH10b29sdGlwLXppbmRleDogI3skemluZGV4LXRvb2x0aXB9O1xuICAtLSN7JHByZWZpeH10b29sdGlwLW1heC13aWR0aDogI3skdG9vbHRpcC1tYXgtd2lkdGh9O1xuICAtLSN7JHByZWZpeH10b29sdGlwLXBhZGRpbmcteDogI3skdG9vbHRpcC1wYWRkaW5nLXh9O1xuICAtLSN7JHByZWZpeH10b29sdGlwLXBhZGRpbmcteTogI3skdG9vbHRpcC1wYWRkaW5nLXl9O1xuICAtLSN7JHByZWZpeH10b29sdGlwLW1hcmdpbjogI3skdG9vbHRpcC1tYXJnaW59O1xuICBAaW5jbHVkZSByZnMoJHRvb2x0aXAtZm9udC1zaXplLCAtLSN7JHByZWZpeH10b29sdGlwLWZvbnQtc2l6ZSk7XG4gIC0tI3skcHJlZml4fXRvb2x0aXAtY29sb3I6ICN7JHRvb2x0aXAtY29sb3J9O1xuICAtLSN7JHByZWZpeH10b29sdGlwLWJnOiAjeyR0b29sdGlwLWJnfTtcbiAgLS0jeyRwcmVmaXh9dG9vbHRpcC1ib3JkZXItcmFkaXVzOiAjeyR0b29sdGlwLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH10b29sdGlwLW9wYWNpdHk6ICN7JHRvb2x0aXAtb3BhY2l0eX07XG4gIC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctd2lkdGg6ICN7JHRvb2x0aXAtYXJyb3ctd2lkdGh9O1xuICAtLSN7JHByZWZpeH10b29sdGlwLWFycm93LWhlaWdodDogI3skdG9vbHRpcC1hcnJvdy1oZWlnaHR9O1xuICAvLyBzY3NzLWRvY3MtZW5kIHRvb2x0aXAtY3NzLXZhcnNcblxuICB6LWluZGV4OiB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC16aW5kZXgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1tYXJnaW4pO1xuICBAaW5jbHVkZSBkZXByZWNhdGUoXCJgJHRvb2x0aXAtbWFyZ2luYFwiLCBcInY1XCIsIFwidjUueFwiLCB0cnVlKTtcbiAgLy8gT3VyIHBhcmVudCBlbGVtZW50IGNhbiBiZSBhcmJpdHJhcnkgc2luY2UgdG9vbHRpcHMgYXJlIGJ5IGRlZmF1bHQgaW5zZXJ0ZWQgYXMgYSBzaWJsaW5nIG9mIHRoZWlyIHRhcmdldCBlbGVtZW50LlxuICAvLyBTbyByZXNldCBvdXIgZm9udCBhbmQgdGV4dCBwcm9wZXJ0aWVzIHRvIGF2b2lkIGluaGVyaXRpbmcgd2VpcmQgdmFsdWVzLlxuICBAaW5jbHVkZSByZXNldC10ZXh0KCk7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSh2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1mb250LXNpemUpKTtcbiAgLy8gQWxsb3cgYnJlYWtpbmcgdmVyeSBsb25nIHdvcmRzIHNvIHRoZXkgZG9uJ3Qgb3ZlcmZsb3cgdGhlIHRvb2x0aXAncyBib3VuZHNcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvcGFjaXR5OiAwO1xuXG4gICYuc2hvdyB7IG9wYWNpdHk6IHZhcigtLSN7JHByZWZpeH10b29sdGlwLW9wYWNpdHkpOyB9XG5cbiAgLnRvb2x0aXAtYXJyb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1hcnJvdy13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1hcnJvdy1oZWlnaHQpO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB9XG4gIH1cbn1cblxuLmJzLXRvb2x0aXAtdG9wIC50b29sdGlwLWFycm93IHtcbiAgYm90dG9tOiBjYWxjKC0xICogdmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctaGVpZ2h0KSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG5cbiAgJjo6YmVmb3JlIHtcbiAgICB0b3A6IC0xcHg7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1hcnJvdy1oZWlnaHQpIGNhbGModmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctd2lkdGgpICogLjUpIDA7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYmcpO1xuICB9XG59XG5cbi8qIHJ0bDpiZWdpbjppZ25vcmUgKi9cbi5icy10b29sdGlwLWVuZCAudG9vbHRpcC1hcnJvdyB7XG4gIGxlZnQ6IGNhbGMoLTEgKiB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1hcnJvdy1oZWlnaHQpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgd2lkdGg6IHZhcigtLSN7JHByZWZpeH10b29sdGlwLWFycm93LWhlaWdodCk7XG4gIGhlaWdodDogdmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctd2lkdGgpO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgcmlnaHQ6IC0xcHg7XG4gICAgYm9yZGVyLXdpZHRoOiBjYWxjKHZhcigtLSN7JHByZWZpeH10b29sdGlwLWFycm93LXdpZHRoKSAqIC41KSB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1hcnJvdy1oZWlnaHQpIGNhbGModmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctd2lkdGgpICogLjUpIDA7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1iZyk7XG4gIH1cbn1cblxuLyogcnRsOmVuZDppZ25vcmUgKi9cblxuLmJzLXRvb2x0aXAtYm90dG9tIC50b29sdGlwLWFycm93IHtcbiAgdG9wOiBjYWxjKC0xICogdmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctaGVpZ2h0KSk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBib3R0b206IC0xcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwIGNhbGModmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctd2lkdGgpICogLjUpIHZhcigtLSN7JHByZWZpeH10b29sdGlwLWFycm93LWhlaWdodCk7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZnVuY3Rpb24tZGlzYWxsb3dlZC1saXN0XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYmcpO1xuICB9XG59XG5cbi8qIHJ0bDpiZWdpbjppZ25vcmUgKi9cbi5icy10b29sdGlwLXN0YXJ0IC50b29sdGlwLWFycm93IHtcbiAgcmlnaHQ6IGNhbGMoLTEgKiB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1hcnJvdy1oZWlnaHQpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgd2lkdGg6IHZhcigtLSN7JHByZWZpeH10b29sdGlwLWFycm93LWhlaWdodCk7XG4gIGhlaWdodDogdmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctd2lkdGgpO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgbGVmdDogLTFweDtcbiAgICBib3JkZXItd2lkdGg6IGNhbGModmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctd2lkdGgpICogLjUpIDAgY2FsYyh2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1hcnJvdy13aWR0aCkgKiAuNSkgdmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYXJyb3ctaGVpZ2h0KTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYmcpO1xuICB9XG59XG5cbi8qIHJ0bDplbmQ6aWdub3JlICovXG5cbi5icy10b29sdGlwLWF1dG8ge1xuICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49XCJ0b3BcIl0ge1xuICAgIEBleHRlbmQgLmJzLXRvb2x0aXAtdG9wO1xuICB9XG4gICZbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1cInJpZ2h0XCJdIHtcbiAgICBAZXh0ZW5kIC5icy10b29sdGlwLWVuZDtcbiAgfVxuICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49XCJib3R0b21cIl0ge1xuICAgIEBleHRlbmQgLmJzLXRvb2x0aXAtYm90dG9tO1xuICB9XG4gICZbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1cImxlZnRcIl0ge1xuICAgIEBleHRlbmQgLmJzLXRvb2x0aXAtc3RhcnQ7XG4gIH1cbn1cblxuLy8gV3JhcHBlciBmb3IgdGhlIHRvb2x0aXAgY29udGVudFxuLnRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6IHZhcigtLSN7JHByZWZpeH10b29sdGlwLW1heC13aWR0aCk7XG4gIHBhZGRpbmc6IHZhcigtLSN7JHByZWZpeH10b29sdGlwLXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fXRvb2x0aXAtcGFkZGluZy14KTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH10b29sdGlwLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9dG9vbHRpcC1iZyk7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXModmFyKC0tI3skcHJlZml4fXRvb2x0aXAtYm9yZGVyLXJhZGl1cykpO1xufVxuIiwiQG1peGluIHJlc2V0LXRleHQge1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gIC8vIFdlIGRlbGliZXJhdGVseSBkbyBOT1QgcmVzZXQgZm9udC1zaXplIG9yIG92ZXJmbG93LXdyYXAgLyB3b3JkLXdyYXAuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgdGV4dC1hbGlnbjogbGVmdDsgLy8gRmFsbGJhY2sgZm9yIHdoZXJlIGBzdGFydGAgaXMgbm90IHN1cHBvcnRlZFxuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIGxpbmUtYnJlYWs6IGF1dG87XG59XG4iLCIucG9wb3ZlciB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBwb3BvdmVyLWNzcy12YXJzXG4gIC0tI3skcHJlZml4fXBvcG92ZXItemluZGV4OiAjeyR6aW5kZXgtcG9wb3Zlcn07XG4gIC0tI3skcHJlZml4fXBvcG92ZXItbWF4LXdpZHRoOiAjeyRwb3BvdmVyLW1heC13aWR0aH07XG4gIEBpbmNsdWRlIHJmcygkcG9wb3Zlci1mb250LXNpemUsIC0tI3skcHJlZml4fXBvcG92ZXItZm9udC1zaXplKTtcbiAgLS0jeyRwcmVmaXh9cG9wb3Zlci1iZzogI3skcG9wb3Zlci1iZ307XG4gIC0tI3skcHJlZml4fXBvcG92ZXItYm9yZGVyLXdpZHRoOiAjeyRwb3BvdmVyLWJvcmRlci13aWR0aH07XG4gIC0tI3skcHJlZml4fXBvcG92ZXItYm9yZGVyLWNvbG9yOiAjeyRwb3BvdmVyLWJvcmRlci1jb2xvcn07XG4gIC0tI3skcHJlZml4fXBvcG92ZXItYm9yZGVyLXJhZGl1czogI3skcG9wb3Zlci1ib3JkZXItcmFkaXVzfTtcbiAgLS0jeyRwcmVmaXh9cG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiAjeyRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXN9O1xuICAtLSN7JHByZWZpeH1wb3BvdmVyLWJveC1zaGFkb3c6ICN7JHBvcG92ZXItYm94LXNoYWRvd307XG4gIC0tI3skcHJlZml4fXBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogI3skcG9wb3Zlci1oZWFkZXItcGFkZGluZy14fTtcbiAgLS0jeyRwcmVmaXh9cG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAjeyRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXl9O1xuICBAaW5jbHVkZSByZnMoJHBvcG92ZXItaGVhZGVyLWZvbnQtc2l6ZSwgLS0jeyRwcmVmaXh9cG9wb3Zlci1oZWFkZXItZm9udC1zaXplKTtcbiAgLS0jeyRwcmVmaXh9cG9wb3Zlci1oZWFkZXItY29sb3I6ICN7JHBvcG92ZXItaGVhZGVyLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9cG9wb3Zlci1oZWFkZXItYmc6ICN7JHBvcG92ZXItaGVhZGVyLWJnfTtcbiAgLS0jeyRwcmVmaXh9cG9wb3Zlci1ib2R5LXBhZGRpbmcteDogI3skcG9wb3Zlci1ib2R5LXBhZGRpbmcteH07XG4gIC0tI3skcHJlZml4fXBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICN7JHBvcG92ZXItYm9keS1wYWRkaW5nLXl9O1xuICAtLSN7JHByZWZpeH1wb3BvdmVyLWJvZHktY29sb3I6ICN7JHBvcG92ZXItYm9keS1jb2xvcn07XG4gIC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctd2lkdGg6ICN7JHBvcG92ZXItYXJyb3ctd2lkdGh9O1xuICAtLSN7JHByZWZpeH1wb3BvdmVyLWFycm93LWhlaWdodDogI3skcG9wb3Zlci1hcnJvdy1oZWlnaHR9O1xuICAtLSN7JHByZWZpeH1wb3BvdmVyLWFycm93LWJvcmRlcjogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgLy8gc2Nzcy1kb2NzLWVuZCBwb3BvdmVyLWNzcy12YXJzXG5cbiAgei1pbmRleDogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItemluZGV4KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItbWF4LXdpZHRoKTtcbiAgLy8gT3VyIHBhcmVudCBlbGVtZW50IGNhbiBiZSBhcmJpdHJhcnkgc2luY2UgdG9vbHRpcHMgYXJlIGJ5IGRlZmF1bHQgaW5zZXJ0ZWQgYXMgYSBzaWJsaW5nIG9mIHRoZWlyIHRhcmdldCBlbGVtZW50LlxuICAvLyBTbyByZXNldCBvdXIgZm9udCBhbmQgdGV4dCBwcm9wZXJ0aWVzIHRvIGF2b2lkIGluaGVyaXRpbmcgd2VpcmQgdmFsdWVzLlxuICBAaW5jbHVkZSByZXNldC10ZXh0KCk7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSh2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1mb250LXNpemUpKTtcbiAgLy8gQWxsb3cgYnJlYWtpbmcgdmVyeSBsb25nIHdvcmRzIHNvIHRoZXkgZG9uJ3Qgb3ZlcmZsb3cgdGhlIHBvcG92ZXIncyBib3VuZHNcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1iZyk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1ib3JkZXItY29sb3IpO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWJvcmRlci1yYWRpdXMpKTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyh2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1ib3gtc2hhZG93KSk7XG5cbiAgLnBvcG92ZXItYXJyb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1hcnJvdy13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1hcnJvdy1oZWlnaHQpO1xuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uYnMtcG9wb3Zlci10b3Age1xuICA+IC5wb3BvdmVyLWFycm93IHtcbiAgICBib3R0b206IGNhbGMoLTEgKiAodmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctaGVpZ2h0KSkgLSB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1ib3JkZXItd2lkdGgpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItd2lkdGg6IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWFycm93LWhlaWdodCkgY2FsYyh2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1hcnJvdy13aWR0aCkgKiAuNSkgMDsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctYm9yZGVyKTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBib3R0b206IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWJvcmRlci13aWR0aCk7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1iZyk7XG4gICAgfVxuICB9XG59XG5cbi8qIHJ0bDpiZWdpbjppZ25vcmUgKi9cbi5icy1wb3BvdmVyLWVuZCB7XG4gID4gLnBvcG92ZXItYXJyb3cge1xuICAgIGxlZnQ6IGNhbGMoLTEgKiAodmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctaGVpZ2h0KSkgLSB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1ib3JkZXItd2lkdGgpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgICB3aWR0aDogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctaGVpZ2h0KTtcbiAgICBoZWlnaHQ6IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWFycm93LXdpZHRoKTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItd2lkdGg6IGNhbGModmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctd2lkdGgpICogLjUpIHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWFycm93LWhlaWdodCkgY2FsYyh2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1hcnJvdy13aWR0aCkgKiAuNSkgMDsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctYm9yZGVyKTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBsZWZ0OiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1ib3JkZXItd2lkdGgpO1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1iZyk7XG4gICAgfVxuICB9XG59XG5cbi8qIHJ0bDplbmQ6aWdub3JlICovXG5cbi5icy1wb3BvdmVyLWJvdHRvbSB7XG4gID4gLnBvcG92ZXItYXJyb3cge1xuICAgIHRvcDogY2FsYygtMSAqICh2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1hcnJvdy1oZWlnaHQpKSAtIHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWJvcmRlci13aWR0aCkpOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJvcmRlci13aWR0aDogMCBjYWxjKHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWFycm93LXdpZHRoKSAqIC41KSB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1hcnJvdy1oZWlnaHQpOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1hcnJvdy1ib3JkZXIpO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIHRvcDogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYm9yZGVyLXdpZHRoKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWJnKTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmVtb3ZlIHRoZSBwb3BvdmVyLWhlYWRlcidzIGJvcmRlciBqdXN0IGJlbG93IHRoZSBhcnJvd1xuICAucG9wb3Zlci1oZWFkZXI6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWFycm93LXdpZHRoKTtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygtLjUgKiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1hcnJvdy13aWR0aCkpOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGZ1bmN0aW9uLWRpc2FsbG93ZWQtbGlzdFxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYm9yZGVyLXdpZHRoKSBzb2xpZCB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1oZWFkZXItYmcpO1xuICB9XG59XG5cbi8qIHJ0bDpiZWdpbjppZ25vcmUgKi9cbi5icy1wb3BvdmVyLXN0YXJ0IHtcbiAgPiAucG9wb3Zlci1hcnJvdyB7XG4gICAgcmlnaHQ6IGNhbGMoLTEgKiAodmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctaGVpZ2h0KSkgLSB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1ib3JkZXItd2lkdGgpKTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgICB3aWR0aDogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctaGVpZ2h0KTtcbiAgICBoZWlnaHQ6IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWFycm93LXdpZHRoKTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItd2lkdGg6IGNhbGModmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctd2lkdGgpICogLjUpIDAgY2FsYyh2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1hcnJvdy13aWR0aCkgKiAuNSkgdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctaGVpZ2h0KTsgLy8gc3R5bGVsaW50LWRpc2FibGUtbGluZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYXJyb3ctYm9yZGVyKTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICByaWdodDogdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYm9yZGVyLXdpZHRoKTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1iZyk7XG4gICAgfVxuICB9XG59XG5cbi8qIHJ0bDplbmQ6aWdub3JlICovXG5cbi5icy1wb3BvdmVyLWF1dG8ge1xuICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49XCJ0b3BcIl0ge1xuICAgIEBleHRlbmQgLmJzLXBvcG92ZXItdG9wO1xuICB9XG4gICZbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1cInJpZ2h0XCJdIHtcbiAgICBAZXh0ZW5kIC5icy1wb3BvdmVyLWVuZDtcbiAgfVxuICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49XCJib3R0b21cIl0ge1xuICAgIEBleHRlbmQgLmJzLXBvcG92ZXItYm90dG9tO1xuICB9XG4gICZbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj1cImxlZnRcIl0ge1xuICAgIEBleHRlbmQgLmJzLXBvcG92ZXItc3RhcnQ7XG4gIH1cbn1cblxuLy8gT2Zmc2V0IHRoZSBwb3BvdmVyIHRvIGFjY291bnQgZm9yIHRoZSBwb3BvdmVyIGFycm93XG4ucG9wb3Zlci1oZWFkZXIge1xuICBwYWRkaW5nOiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1oZWFkZXItcGFkZGluZy15KSB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1oZWFkZXItcGFkZGluZy14KTtcbiAgbWFyZ2luLWJvdHRvbTogMDsgLy8gUmVzZXQgdGhlIGRlZmF1bHQgZnJvbSBSZWJvb3RcbiAgQGluY2x1ZGUgZm9udC1zaXplKHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWhlYWRlci1mb250LXNpemUpKTtcbiAgY29sb3I6IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWhlYWRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWhlYWRlci1iZyk7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tI3skcHJlZml4fXBvcG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXModmFyKC0tI3skcHJlZml4fXBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1cykpO1xuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnBvcG92ZXItYm9keSB7XG4gIHBhZGRpbmc6IHZhcigtLSN7JHByZWZpeH1wb3BvdmVyLWJvZHktcGFkZGluZy15KSB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1ib2R5LXBhZGRpbmcteCk7XG4gIGNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9cG9wb3Zlci1ib2R5LWNvbG9yKTtcbn1cbiIsIi8vIE5vdGVzIG9uIHRoZSBjbGFzc2VzOlxuLy9cbi8vIDEuIC5jYXJvdXNlbC5wb2ludGVyLWV2ZW50IHNob3VsZCBpZGVhbGx5IGJlIHBhbi15ICh0byBhbGxvdyBmb3IgdXNlcnMgdG8gc2Nyb2xsIHZlcnRpY2FsbHkpXG4vLyAgICBldmVuIHdoZW4gdGhlaXIgc2Nyb2xsIGFjdGlvbiBzdGFydGVkIG9uIGEgY2Fyb3VzZWwsIGJ1dCBmb3IgY29tcGF0aWJpbGl0eSAod2l0aCBGaXJlZm94KVxuLy8gICAgd2UncmUgcHJldmVudGluZyBhbGwgYWN0aW9ucyBpbnN0ZWFkXG4vLyAyLiBUaGUgLmNhcm91c2VsLWl0ZW0tc3RhcnQgYW5kIC5jYXJvdXNlbC1pdGVtLWVuZCBpcyB1c2VkIHRvIGluZGljYXRlIHdoZXJlXG4vLyAgICB0aGUgYWN0aXZlIHNsaWRlIGlzIGhlYWRpbmcuXG4vLyAzLiAuYWN0aXZlLmNhcm91c2VsLWl0ZW0gaXMgdGhlIGN1cnJlbnQgc2xpZGUuXG4vLyA0LiAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tc3RhcnQgYW5kIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1lbmQgaXMgdGhlIGN1cnJlbnRcbi8vICAgIHNsaWRlIGluIGl0cyBpbi10cmFuc2l0aW9uIHN0YXRlLiBPbmx5IG9uZSBvZiB0aGVzZSBvY2N1cnMgYXQgYSB0aW1lLlxuLy8gNS4gLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLXN0YXJ0IGFuZCAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tZW5kXG4vLyAgICBpcyB0aGUgdXBjb21pbmcgc2xpZGUgaW4gdHJhbnNpdGlvbi5cblxuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2Fyb3VzZWwucG9pbnRlci1ldmVudCB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIEBpbmNsdWRlIGNsZWFyZml4KCk7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbigkY2Fyb3VzZWwtdHJhbnNpdGlvbik7XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSxcbi5jYXJvdXNlbC1pdGVtLW5leHQsXG4uY2Fyb3VzZWwtaXRlbS1wcmV2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJvdXNlbC1pdGVtLW5leHQ6bm90KC5jYXJvdXNlbC1pdGVtLXN0YXJ0KSxcbi5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1lbmQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5jYXJvdXNlbC1pdGVtLXByZXY6bm90KC5jYXJvdXNlbC1pdGVtLWVuZCksXG4uYWN0aXZlLmNhcm91c2VsLWl0ZW0tc3RhcnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG5cbi8vXG4vLyBBbHRlcm5hdGUgdHJhbnNpdGlvbnNcbi8vXG5cbi5jYXJvdXNlbC1mYWRlIHtcbiAgLmNhcm91c2VsLWl0ZW0ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUsXG4gIC5jYXJvdXNlbC1pdGVtLW5leHQuY2Fyb3VzZWwtaXRlbS1zdGFydCxcbiAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLWVuZCB7XG4gICAgei1pbmRleDogMTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXN0YXJ0LFxuICAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tZW5kIHtcbiAgICB6LWluZGV4OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbihvcGFjaXR5IDBzICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uKTtcbiAgfVxufVxuXG5cbi8vXG4vLyBMZWZ0L3JpZ2h0IGNvbnRyb2xzIGZvciBuYXZcbi8vXG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgLy8gVXNlIGZsZXggZm9yIGFsaWdubWVudCAoMS0zKVxuICBkaXNwbGF5OiBmbGV4OyAvLyAxLiBhbGxvdyBmbGV4IHN0eWxlc1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvLyAyLiB2ZXJ0aWNhbGx5IGNlbnRlciBjb250ZW50c1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLy8gMy4gaG9yaXpvbnRhbGx5IGNlbnRlciBjb250ZW50c1xuICB3aWR0aDogJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAkY2Fyb3VzZWwtY29udHJvbC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDA7XG4gIG9wYWNpdHk6ICRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbik7XG5cbiAgLy8gSG92ZXIvZm9jdXMgc3RhdGVcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRjYXJvdXNlbC1jb250cm9sLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIG9wYWNpdHk6ICRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk7XG4gIH1cbn1cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBpZigkZW5hYmxlLWdyYWRpZW50cywgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKCRibGFjaywgLjI1KSwgcmdiYSgkYmxhY2ssIC4wMDEpKSwgbnVsbCk7XG59XG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGlmKCRlbmFibGUtZ3JhZGllbnRzLCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKCRibGFjaywgLjI1KSwgcmdiYSgkYmxhY2ssIC4wMDEpKSwgbnVsbCk7XG59XG5cbi8vIEljb25zIGZvciB3aXRoaW5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6ICRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg7XG4gIGhlaWdodDogJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogZXNjYXBlLXN2ZygkY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmcpICN7XCIvKnJ0bDpcIiArIGVzY2FwZS1zdmcoJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnKSArIFwiKi9cIn07XG59XG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBlc2NhcGUtc3ZnKCRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZykgI3tcIi8qcnRsOlwiICsgZXNjYXBlLXN2ZygkY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmcpICsgXCIqL1wifTtcbn1cblxuLy8gT3B0aW9uYWwgaW5kaWNhdG9yIHBpcHMvY29udHJvbHNcbi8vXG4vLyBBZGQgYSBjb250YWluZXIgKHN1Y2ggYXMgYSBsaXN0KSB3aXRoIHRoZSBmb2xsb3dpbmcgY2xhc3MgYW5kIGFkZCBhbiBpdGVtIChpZGVhbGx5IGEgZm9jdXNhYmxlIGNvbnRyb2wsXG4vLyBsaWtlIGEgYnV0dG9uKSB3aXRoIGRhdGEtYnMtdGFyZ2V0IGZvciBlYWNoIHNsaWRlIHlvdXIgY2Fyb3VzZWwgaG9sZHMuXG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgLy8gVXNlIHRoZSAuY2Fyb3VzZWwtY29udHJvbCdzIHdpZHRoIGFzIG1hcmdpbiBzbyB3ZSBkb24ndCBvdmVybGF5IHRob3NlXG4gIG1hcmdpbi1yaWdodDogJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAkY2Fyb3VzZWwtY29udHJvbC13aWR0aDtcblxuICBbZGF0YS1icy10YXJnZXRdIHtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICB3aWR0aDogJGNhcm91c2VsLWluZGljYXRvci13aWR0aDtcbiAgICBoZWlnaHQ6ICRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAkY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjtcbiAgICBtYXJnaW4tbGVmdDogJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDA7XG4gICAgLy8gVXNlIHRyYW5zcGFyZW50IGJvcmRlcnMgdG8gaW5jcmVhc2UgdGhlIGhpdCBhcmVhIGJ5IDEwcHggb24gdG9wIGFuZCBib3R0b20uXG4gICAgYm9yZGVyLXRvcDogJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogJGNhcm91c2VsLWluZGljYXRvci1vcGFjaXR5O1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uKTtcbiAgfVxuXG4gIC5hY3RpdmUge1xuICAgIG9wYWNpdHk6ICRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLW9wYWNpdHk7XG4gIH1cbn1cblxuXG4vLyBPcHRpb25hbCBjYXB0aW9uc1xuLy9cbi8vXG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogKDEwMCUgLSAkY2Fyb3VzZWwtY2FwdGlvbi13aWR0aCkgKiAuNTtcbiAgYm90dG9tOiAkY2Fyb3VzZWwtY2FwdGlvbi1zcGFjZXI7XG4gIGxlZnQ6ICgxMDAlIC0gJGNhcm91c2VsLWNhcHRpb24td2lkdGgpICogLjU7XG4gIHBhZGRpbmctdG9wOiAkY2Fyb3VzZWwtY2FwdGlvbi1wYWRkaW5nLXk7XG4gIHBhZGRpbmctYm90dG9tOiAkY2Fyb3VzZWwtY2FwdGlvbi1wYWRkaW5nLXk7XG4gIGNvbG9yOiAkY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vLyBEYXJrIG1vZGUgY2Fyb3VzZWxcblxuQG1peGluIGNhcm91c2VsLWRhcmsoKSB7XG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcbiAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgICBmaWx0ZXI6ICRjYXJvdXNlbC1kYXJrLWNvbnRyb2wtaWNvbi1maWx0ZXI7XG4gIH1cblxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBbZGF0YS1icy10YXJnZXRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2Fyb3VzZWwtZGFyay1pbmRpY2F0b3ItYWN0aXZlLWJnO1xuICB9XG5cbiAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIGNvbG9yOiAkY2Fyb3VzZWwtZGFyay1jYXB0aW9uLWNvbG9yO1xuICB9XG59XG5cbi5jYXJvdXNlbC1kYXJrIHtcbiAgQGluY2x1ZGUgY2Fyb3VzZWwtZGFyaygpO1xufVxuXG5AaWYgJGVuYWJsZS1kYXJrLW1vZGUge1xuICBAaW5jbHVkZSBjb2xvci1tb2RlKGRhcmspIHtcbiAgICBAaWYgJGNvbG9yLW1vZGUtdHlwZSA9PSBcIm1lZGlhLXF1ZXJ5XCIge1xuICAgICAgLmNhcm91c2VsIHtcbiAgICAgICAgQGluY2x1ZGUgY2Fyb3VzZWwtZGFyaygpO1xuICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgLmNhcm91c2VsLFxuICAgICAgJi5jYXJvdXNlbCB7XG4gICAgICAgIEBpbmNsdWRlIGNhcm91c2VsLWRhcmsoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIHNjc3MtZG9jcy1zdGFydCBjbGVhcmZpeFxuQG1peGluIGNsZWFyZml4KCkge1xuICAmOjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxufVxuLy8gc2Nzcy1kb2NzLWVuZCBjbGVhcmZpeFxuIiwiLy9cbi8vIFJvdGF0aW5nIGJvcmRlclxuLy9cblxuLnNwaW5uZXItZ3Jvdyxcbi5zcGlubmVyLWJvcmRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IHZhcigtLSN7JHByZWZpeH1zcGlubmVyLXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9c3Bpbm5lci1oZWlnaHQpO1xuICB2ZXJ0aWNhbC1hbGlnbjogdmFyKC0tI3skcHJlZml4fXNwaW5uZXItdmVydGljYWwtYWxpZ24pO1xuICAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJvcGVydHktZGlzYWxsb3dlZC1saXN0XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiB2YXIoLS0jeyRwcmVmaXh9c3Bpbm5lci1hbmltYXRpb24tc3BlZWQpIGxpbmVhciBpbmZpbml0ZSB2YXIoLS0jeyRwcmVmaXh9c3Bpbm5lci1hbmltYXRpb24tbmFtZSk7XG59XG5cbi8vIHNjc3MtZG9jcy1zdGFydCBzcGlubmVyLWJvcmRlci1rZXlmcmFtZXNcbkBrZXlmcmFtZXMgc3Bpbm5lci1ib3JkZXIge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgI3tcIi8qIHJ0bDppZ25vcmUgKi9cIn07IH1cbn1cbi8vIHNjc3MtZG9jcy1lbmQgc3Bpbm5lci1ib3JkZXIta2V5ZnJhbWVzXG5cbi5zcGlubmVyLWJvcmRlciB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBzcGlubmVyLWJvcmRlci1jc3MtdmFyc1xuICAtLSN7JHByZWZpeH1zcGlubmVyLXdpZHRoOiAjeyRzcGlubmVyLXdpZHRofTtcbiAgLS0jeyRwcmVmaXh9c3Bpbm5lci1oZWlnaHQ6ICN7JHNwaW5uZXItaGVpZ2h0fTtcbiAgLS0jeyRwcmVmaXh9c3Bpbm5lci12ZXJ0aWNhbC1hbGlnbjogI3skc3Bpbm5lci12ZXJ0aWNhbC1hbGlnbn07XG4gIC0tI3skcHJlZml4fXNwaW5uZXItYm9yZGVyLXdpZHRoOiAjeyRzcGlubmVyLWJvcmRlci13aWR0aH07XG4gIC0tI3skcHJlZml4fXNwaW5uZXItYW5pbWF0aW9uLXNwZWVkOiAjeyRzcGlubmVyLWFuaW1hdGlvbi1zcGVlZH07XG4gIC0tI3skcHJlZml4fXNwaW5uZXItYW5pbWF0aW9uLW5hbWU6IHNwaW5uZXItYm9yZGVyO1xuICAvLyBzY3NzLWRvY3MtZW5kIHNwaW5uZXItYm9yZGVyLWNzcy12YXJzXG5cbiAgYm9yZGVyOiB2YXIoLS0jeyRwcmVmaXh9c3Bpbm5lci1ib3JkZXItd2lkdGgpIHNvbGlkIGN1cnJlbnRjb2xvcjtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNwaW5uZXItYm9yZGVyLXNtIHtcbiAgLy8gc2Nzcy1kb2NzLXN0YXJ0IHNwaW5uZXItYm9yZGVyLXNtLWNzcy12YXJzXG4gIC0tI3skcHJlZml4fXNwaW5uZXItd2lkdGg6ICN7JHNwaW5uZXItd2lkdGgtc219O1xuICAtLSN7JHByZWZpeH1zcGlubmVyLWhlaWdodDogI3skc3Bpbm5lci1oZWlnaHQtc219O1xuICAtLSN7JHByZWZpeH1zcGlubmVyLWJvcmRlci13aWR0aDogI3skc3Bpbm5lci1ib3JkZXItd2lkdGgtc219O1xuICAvLyBzY3NzLWRvY3MtZW5kIHNwaW5uZXItYm9yZGVyLXNtLWNzcy12YXJzXG59XG5cbi8vXG4vLyBHcm93aW5nIGNpcmNsZVxuLy9cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHNwaW5uZXItZ3Jvdy1rZXlmcmFtZXNcbkBrZXlmcmFtZXMgc3Bpbm5lci1ncm93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuLy8gc2Nzcy1kb2NzLWVuZCBzcGlubmVyLWdyb3cta2V5ZnJhbWVzXG5cbi5zcGlubmVyLWdyb3cge1xuICAvLyBzY3NzLWRvY3Mtc3RhcnQgc3Bpbm5lci1ncm93LWNzcy12YXJzXG4gIC0tI3skcHJlZml4fXNwaW5uZXItd2lkdGg6ICN7JHNwaW5uZXItd2lkdGh9O1xuICAtLSN7JHByZWZpeH1zcGlubmVyLWhlaWdodDogI3skc3Bpbm5lci1oZWlnaHR9O1xuICAtLSN7JHByZWZpeH1zcGlubmVyLXZlcnRpY2FsLWFsaWduOiAjeyRzcGlubmVyLXZlcnRpY2FsLWFsaWdufTtcbiAgLS0jeyRwcmVmaXh9c3Bpbm5lci1hbmltYXRpb24tc3BlZWQ6ICN7JHNwaW5uZXItYW5pbWF0aW9uLXNwZWVkfTtcbiAgLS0jeyRwcmVmaXh9c3Bpbm5lci1hbmltYXRpb24tbmFtZTogc3Bpbm5lci1ncm93O1xuICAvLyBzY3NzLWRvY3MtZW5kIHNwaW5uZXItZ3Jvdy1jc3MtdmFyc1xuXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRjb2xvcjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNwaW5uZXItZ3Jvdy1zbSB7XG4gIC0tI3skcHJlZml4fXNwaW5uZXItd2lkdGg6ICN7JHNwaW5uZXItd2lkdGgtc219O1xuICAtLSN7JHByZWZpeH1zcGlubmVyLWhlaWdodDogI3skc3Bpbm5lci1oZWlnaHQtc219O1xufVxuXG5AaWYgJGVuYWJsZS1yZWR1Y2VkLW1vdGlvbiB7XG4gIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgLnNwaW5uZXItYm9yZGVyLFxuICAgIC5zcGlubmVyLWdyb3cge1xuICAgICAgLS0jeyRwcmVmaXh9c3Bpbm5lci1hbmltYXRpb24tc3BlZWQ6ICN7JHNwaW5uZXItYW5pbWF0aW9uLXNwZWVkICogMn07XG4gICAgfVxuICB9XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcblxuJW9mZmNhbnZhcy1jc3MtdmFycyB7XG4gIC8vIHNjc3MtZG9jcy1zdGFydCBvZmZjYW52YXMtY3NzLXZhcnNcbiAgLS0jeyRwcmVmaXh9b2ZmY2FudmFzLXppbmRleDogI3skemluZGV4LW9mZmNhbnZhc307XG4gIC0tI3skcHJlZml4fW9mZmNhbnZhcy13aWR0aDogI3skb2ZmY2FudmFzLWhvcml6b250YWwtd2lkdGh9O1xuICAtLSN7JHByZWZpeH1vZmZjYW52YXMtaGVpZ2h0OiAjeyRvZmZjYW52YXMtdmVydGljYWwtaGVpZ2h0fTtcbiAgLS0jeyRwcmVmaXh9b2ZmY2FudmFzLXBhZGRpbmcteDogI3skb2ZmY2FudmFzLXBhZGRpbmcteH07XG4gIC0tI3skcHJlZml4fW9mZmNhbnZhcy1wYWRkaW5nLXk6ICN7JG9mZmNhbnZhcy1wYWRkaW5nLXl9O1xuICAtLSN7JHByZWZpeH1vZmZjYW52YXMtY29sb3I6ICN7JG9mZmNhbnZhcy1jb2xvcn07XG4gIC0tI3skcHJlZml4fW9mZmNhbnZhcy1iZzogI3skb2ZmY2FudmFzLWJnLWNvbG9yfTtcbiAgLS0jeyRwcmVmaXh9b2ZmY2FudmFzLWJvcmRlci13aWR0aDogI3skb2ZmY2FudmFzLWJvcmRlci13aWR0aH07XG4gIC0tI3skcHJlZml4fW9mZmNhbnZhcy1ib3JkZXItY29sb3I6ICN7JG9mZmNhbnZhcy1ib3JkZXItY29sb3J9O1xuICAtLSN7JHByZWZpeH1vZmZjYW52YXMtYm94LXNoYWRvdzogI3skb2ZmY2FudmFzLWJveC1zaGFkb3d9O1xuICAtLSN7JHByZWZpeH1vZmZjYW52YXMtdHJhbnNpdGlvbjogI3t0cmFuc2Zvcm0gJG9mZmNhbnZhcy10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0fTtcbiAgLS0jeyRwcmVmaXh9b2ZmY2FudmFzLXRpdGxlLWxpbmUtaGVpZ2h0OiAjeyRvZmZjYW52YXMtdGl0bGUtbGluZS1oZWlnaHR9O1xuICAvLyBzY3NzLWRvY3MtZW5kIG9mZmNhbnZhcy1jc3MtdmFyc1xufVxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkbmV4dCwgJGdyaWQtYnJlYWtwb2ludHMpO1xuXG4gIC5vZmZjYW52YXMjeyRpbmZpeH0ge1xuICAgIEBleHRlbmQgJW9mZmNhbnZhcy1jc3MtdmFycztcbiAgfVxufVxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkbmV4dCwgJGdyaWQtYnJlYWtwb2ludHMpO1xuXG4gIC5vZmZjYW52YXMjeyRpbmZpeH0ge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmV4dCkge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgei1pbmRleDogdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy16aW5kZXgpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBjb2xvcjogdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy1jb2xvcik7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS0jeyRwcmVmaXh9b2ZmY2FudmFzLWJnKTtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyh2YXIoLS0jeyRwcmVmaXh9b2ZmY2FudmFzLWJveC1zaGFkb3cpKTtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24odmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy10cmFuc2l0aW9uKSk7XG5cbiAgICAgICYub2ZmY2FudmFzLXN0YXJ0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy13aWR0aCk7XG4gICAgICAgIGJvcmRlci1yaWdodDogdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgIH1cblxuICAgICAgJi5vZmZjYW52YXMtZW5kIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IHZhcigtLSN7JHByZWZpeH1vZmZjYW52YXMtd2lkdGgpO1xuICAgICAgICBib3JkZXItbGVmdDogdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgfVxuXG4gICAgICAmLm9mZmNhbnZhcy10b3Age1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLSN7JHByZWZpeH1vZmZjYW52YXMtaGVpZ2h0KTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLSN7JHByZWZpeH1vZmZjYW52YXMtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgIH1cblxuICAgICAgJi5vZmZjYW52YXMtYm90dG9tIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy1oZWlnaHQpO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItdG9wOiB2YXIoLS0jeyRwcmVmaXh9b2ZmY2FudmFzLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy1ib3JkZXItY29sb3IpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgICB9XG5cbiAgICAgICYuc2hvd2luZyxcbiAgICAgICYuc2hvdzpub3QoLmhpZGluZykge1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYuc2hvd2luZyxcbiAgICAgICYuaGlkaW5nLFxuICAgICAgJi5zaG93IHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgbm90ICgkaW5maXggPT0gXCJcIikge1xuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmV4dCkge1xuICAgICAgICAtLSN7JHByZWZpeH1vZmZjYW52YXMtaGVpZ2h0OiBhdXRvO1xuICAgICAgICAtLSN7JHByZWZpeH1vZmZjYW52YXMtYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuXG4gICAgICAgIC5vZmZjYW52YXMtaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmNhbnZhcy1ib2R5IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgICAgLy8gUmVzZXQgYGJhY2tncm91bmQtY29sb3JgIGluIGNhc2UgYC5iZy0qYCBjbGFzc2VzIGFyZSB1c2VkIGluIG9mZmNhbnZhc1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm9mZmNhbnZhcy1iYWNrZHJvcCB7XG4gIEBpbmNsdWRlIG92ZXJsYXktYmFja2Ryb3AoJHppbmRleC1vZmZjYW52YXMtYmFja2Ryb3AsICRvZmZjYW52YXMtYmFja2Ryb3AtYmcsICRvZmZjYW52YXMtYmFja2Ryb3Atb3BhY2l0eSk7XG59XG5cbi5vZmZjYW52YXMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy1wYWRkaW5nLXkpIHZhcigtLSN7JHByZWZpeH1vZmZjYW52YXMtcGFkZGluZy14KTtcblxuICAuYnRuLWNsb3NlIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLSN7JHByZWZpeH1vZmZjYW52YXMtcGFkZGluZy15KSAqIC41KSBjYWxjKHZhcigtLSN7JHByZWZpeH1vZmZjYW52YXMtcGFkZGluZy14KSAqIC41KTtcbiAgICBtYXJnaW46IGNhbGMoLS41ICogdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy1wYWRkaW5nLXkpKSBjYWxjKC0uNSAqIHZhcigtLSN7JHByZWZpeH1vZmZjYW52YXMtcGFkZGluZy14KSkgY2FsYygtLjUgKiB2YXIoLS0jeyRwcmVmaXh9b2ZmY2FudmFzLXBhZGRpbmcteSkpIGF1dG87XG4gIH1cbn1cblxuLm9mZmNhbnZhcy10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS0jeyRwcmVmaXh9b2ZmY2FudmFzLXRpdGxlLWxpbmUtaGVpZ2h0KTtcbn1cblxuLm9mZmNhbnZhcy1ib2R5IHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiB2YXIoLS0jeyRwcmVmaXh9b2ZmY2FudmFzLXBhZGRpbmcteSkgdmFyKC0tI3skcHJlZml4fW9mZmNhbnZhcy1wYWRkaW5nLXgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIiwiLnBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4taGVpZ2h0OiAxZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogd2FpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xuICBvcGFjaXR5OiAkcGxhY2Vob2xkZXItb3BhY2l0eS1tYXg7XG5cbiAgJi5idG46OmJlZm9yZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cbn1cblxuLy8gU2l6aW5nXG4ucGxhY2Vob2xkZXIteHMge1xuICBtaW4taGVpZ2h0OiAuNmVtO1xufVxuXG4ucGxhY2Vob2xkZXItc20ge1xuICBtaW4taGVpZ2h0OiAuOGVtO1xufVxuXG4ucGxhY2Vob2xkZXItbGcge1xuICBtaW4taGVpZ2h0OiAxLjJlbTtcbn1cblxuLy8gQW5pbWF0aW9uXG4ucGxhY2Vob2xkZXItZ2xvdyB7XG4gIC5wbGFjZWhvbGRlciB7XG4gICAgYW5pbWF0aW9uOiBwbGFjZWhvbGRlci1nbG93IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcGxhY2Vob2xkZXItZ2xvdyB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogJHBsYWNlaG9sZGVyLW9wYWNpdHktbWluO1xuICB9XG59XG5cbi5wbGFjZWhvbGRlci13YXZlIHtcbiAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgJGJsYWNrIDU1JSwgcmdiYSgwLCAwLCAwLCAoMSAtICRwbGFjZWhvbGRlci1vcGFjaXR5LW1pbikpIDc1JSwgJGJsYWNrIDk1JSk7XG4gIG1hc2stc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IHBsYWNlaG9sZGVyLXdhdmUgMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHBsYWNlaG9sZGVyLXdhdmUge1xuICAxMDAlIHtcbiAgICBtYXNrLXBvc2l0aW9uOiAtMjAwJSAwJTtcbiAgfVxufVxuIiwiLy8gQWxsLWNhcHMgYFJHQkEoKWAgZnVuY3Rpb24gdXNlZCBiZWNhdXNlIG9mIHRoaXMgU2FzcyBidWc6IGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL25vZGUtc2Fzcy9pc3N1ZXMvMjI1MVxuQGVhY2ggJGNvbG9yLCAkdmFsdWUgaW4gJHRoZW1lLWNvbG9ycyB7XG4gIC50ZXh0LWJnLSN7JGNvbG9yfSB7XG4gICAgY29sb3I6IGNvbG9yLWNvbnRyYXN0KCR2YWx1ZSkgaWYoJGVuYWJsZS1pbXBvcnRhbnQtdXRpbGl0aWVzLCAhaW1wb3J0YW50LCBudWxsKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0JBKHZhcigtLSN7JHByZWZpeH0jeyRjb2xvcn0tcmdiKSwgdmFyKC0tI3skcHJlZml4fWJnLW9wYWNpdHksIDEpKSBpZigkZW5hYmxlLWltcG9ydGFudC11dGlsaXRpZXMsICFpbXBvcnRhbnQsIG51bGwpO1xuICB9XG59XG4iLCIvLyBBbGwtY2FwcyBgUkdCQSgpYCBmdW5jdGlvbiB1c2VkIGJlY2F1c2Ugb2YgdGhpcyBTYXNzIGJ1ZzogaHR0cHM6Ly9naXRodWIuY29tL3Nhc3Mvbm9kZS1zYXNzL2lzc3Vlcy8yMjUxXG5AZWFjaCAkY29sb3IsICR2YWx1ZSBpbiAkdGhlbWUtY29sb3JzIHtcbiAgLmxpbmstI3skY29sb3J9IHtcbiAgICBjb2xvcjogUkdCQSh2YXIoLS0jeyRwcmVmaXh9I3skY29sb3J9LXJnYiksIHZhcigtLSN7JHByZWZpeH1saW5rLW9wYWNpdHksIDEpKSBpZigkZW5hYmxlLWltcG9ydGFudC11dGlsaXRpZXMsICFpbXBvcnRhbnQsIG51bGwpO1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogUkdCQSh2YXIoLS0jeyRwcmVmaXh9I3skY29sb3J9LXJnYiksIHZhcigtLSN7JHByZWZpeH1saW5rLXVuZGVybGluZS1vcGFjaXR5LCAxKSkgaWYoJGVuYWJsZS1pbXBvcnRhbnQtdXRpbGl0aWVzLCAhaW1wb3J0YW50LCBudWxsKTtcblxuICAgIEBpZiAkbGluay1zaGFkZS1wZXJjZW50YWdlICE9IDAge1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICAkaG92ZXItY29sb3I6IGlmKGNvbG9yLWNvbnRyYXN0KCR2YWx1ZSkgPT0gJGNvbG9yLWNvbnRyYXN0LWxpZ2h0LCBzaGFkZS1jb2xvcigkdmFsdWUsICRsaW5rLXNoYWRlLXBlcmNlbnRhZ2UpLCB0aW50LWNvbG9yKCR2YWx1ZSwgJGxpbmstc2hhZGUtcGVyY2VudGFnZSkpO1xuICAgICAgICBjb2xvcjogUkdCQSgje3RvLXJnYigkaG92ZXItY29sb3IpfSwgdmFyKC0tI3skcHJlZml4fWxpbmstb3BhY2l0eSwgMSkpIGlmKCRlbmFibGUtaW1wb3J0YW50LXV0aWxpdGllcywgIWltcG9ydGFudCwgbnVsbCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogUkdCQSh0by1yZ2IoJGhvdmVyLWNvbG9yKSwgdmFyKC0tI3skcHJlZml4fWxpbmstdW5kZXJsaW5lLW9wYWNpdHksIDEpKSBpZigkZW5hYmxlLWltcG9ydGFudC11dGlsaXRpZXMsICFpbXBvcnRhbnQsIG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBPbmUtb2ZmIHNwZWNpYWwgbGluayBoZWxwZXIgYXMgYSBicmlkZ2UgdW50aWwgdjZcbi5saW5rLWJvZHktZW1waGFzaXMge1xuICBjb2xvcjogUkdCQSh2YXIoLS0jeyRwcmVmaXh9ZW1waGFzaXMtY29sb3ItcmdiKSwgdmFyKC0tI3skcHJlZml4fWxpbmstb3BhY2l0eSwgMSkpIGlmKCRlbmFibGUtaW1wb3J0YW50LXV0aWxpdGllcywgIWltcG9ydGFudCwgbnVsbCk7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogUkdCQSh2YXIoLS0jeyRwcmVmaXh9ZW1waGFzaXMtY29sb3ItcmdiKSwgdmFyKC0tI3skcHJlZml4fWxpbmstdW5kZXJsaW5lLW9wYWNpdHksIDEpKSBpZigkZW5hYmxlLWltcG9ydGFudC11dGlsaXRpZXMsICFpbXBvcnRhbnQsIG51bGwpO1xuXG4gIEBpZiAkbGluay1zaGFkZS1wZXJjZW50YWdlICE9IDAge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogUkdCQSh2YXIoLS0jeyRwcmVmaXh9ZW1waGFzaXMtY29sb3ItcmdiKSwgdmFyKC0tI3skcHJlZml4fWxpbmstb3BhY2l0eSwgLjc1KSkgaWYoJGVuYWJsZS1pbXBvcnRhbnQtdXRpbGl0aWVzLCAhaW1wb3J0YW50LCBudWxsKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogUkdCQSh2YXIoLS0jeyRwcmVmaXh9ZW1waGFzaXMtY29sb3ItcmdiKSwgdmFyKC0tI3skcHJlZml4fWxpbmstdW5kZXJsaW5lLW9wYWNpdHksIC43NSkpIGlmKCRlbmFibGUtaW1wb3J0YW50LXV0aWxpdGllcywgIWltcG9ydGFudCwgbnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCIuZm9jdXMtcmluZzpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIC8vIEJ5IGRlZmF1bHQsIHRoZXJlIGlzIG5vIGAtLWJzLWZvY3VzLXJpbmcteGAsIGAtLWJzLWZvY3VzLXJpbmcteWAsIG9yIGAtLWJzLWZvY3VzLXJpbmctYmx1cmAsIGJ1dCB3ZSBwcm92aWRlIENTUyB2YXJpYWJsZXMgd2l0aCBmYWxsYmFja3MgdG8gaW5pdGlhbCBgMGAgdmFsdWVzXG4gIGJveC1zaGFkb3c6IHZhcigtLSN7JHByZWZpeH1mb2N1cy1yaW5nLXgsIDApIHZhcigtLSN7JHByZWZpeH1mb2N1cy1yaW5nLXksIDApIHZhcigtLSN7JHByZWZpeH1mb2N1cy1yaW5nLWJsdXIsIDApIHZhcigtLSN7JHByZWZpeH1mb2N1cy1yaW5nLXdpZHRoKSB2YXIoLS0jeyRwcmVmaXh9Zm9jdXMtcmluZy1jb2xvcik7XG59XG4iLCIuaWNvbi1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGdhcDogJGljb24tbGluay1nYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiYSh2YXIoLS0jeyRwcmVmaXh9bGluay1jb2xvci1yZ2IpLCB2YXIoLS0jeyRwcmVmaXh9bGluay1vcGFjaXR5LCAuNSkpO1xuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6ICRpY29uLWxpbmstdW5kZXJsaW5lLW9mZnNldDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gID4gLmJpIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB3aWR0aDogJGljb24tbGluay1pY29uLXNpemU7XG4gICAgaGVpZ2h0OiAkaWNvbi1saW5rLWljb24tc2l6ZTtcbiAgICBmaWxsOiBjdXJyZW50Y29sb3I7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbigkaWNvbi1saW5rLWljb24tdHJhbnNpdGlvbik7XG4gIH1cbn1cblxuLmljb24tbGluay1ob3ZlciB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgPiAuYmkge1xuICAgICAgdHJhbnNmb3JtOiB2YXIoLS0jeyRwcmVmaXh9aWNvbi1saW5rLXRyYW5zZm9ybSwgJGljb24tbGluay1pY29uLXRyYW5zZm9ybSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDcmVkaXQ6IE5pY29sYXMgR2FsbGFnaGVyIGFuZCBTVUlUIENTUy5cblxuLnJhdGlvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAmOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiB2YXIoLS0jeyRwcmVmaXh9YXNwZWN0LXJhdGlvKTtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG5cbiAgPiAqIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbkBlYWNoICRrZXksICRyYXRpbyBpbiAkYXNwZWN0LXJhdGlvcyB7XG4gIC5yYXRpby0jeyRrZXl9IHtcbiAgICAtLSN7JHByZWZpeH1hc3BlY3QtcmF0aW86ICN7JHJhdGlvfTtcbiAgfVxufVxuIiwiLy8gU2hvcnRoYW5kXG5cbi5maXhlZC10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtZml4ZWQ7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtZml4ZWQ7XG59XG5cbi8vIFJlc3BvbnNpdmUgc3RpY2t5IHRvcCBhbmQgYm90dG9tXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICAuc3RpY2t5I3skaW5maXh9LXRvcCB7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogJHppbmRleC1zdGlja3k7XG4gICAgfVxuXG4gICAgLnN0aWNreSN7JGluZml4fS1ib3R0b20ge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHotaW5kZXg6ICR6aW5kZXgtc3RpY2t5O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gc2Nzcy1kb2NzLXN0YXJ0IHN0YWNrc1xuLmhzdGFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG5cbi52c3RhY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cbi8vIHNjc3MtZG9jcy1lbmQgc3RhY2tzXG4iLCIvL1xuLy8gVmlzdWFsbHkgaGlkZGVuXG4vL1xuXG4udmlzdWFsbHktaGlkZGVuLFxuLnZpc3VhbGx5LWhpZGRlbi1mb2N1c2FibGU6bm90KDpmb2N1cyk6bm90KDpmb2N1cy13aXRoaW4pIHtcbiAgQGluY2x1ZGUgdmlzdWFsbHktaGlkZGVuKCk7XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnRcblxuLy8gSGlkZSBjb250ZW50IHZpc3VhbGx5IHdoaWxlIGtlZXBpbmcgaXQgYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzXG4vL1xuLy8gU2VlOiBodHRwczovL3d3dy5hMTF5cHJvamVjdC5jb20vcG9zdHMvMjAxMy0wMS0xMS1ob3ctdG8taGlkZS1jb250ZW50L1xuLy8gU2VlOiBodHRwczovL2tpdHR5Z2lyYXVkZWwuY29tLzIwMTYvMTAvMTMvY3NzLWhpZGUtYW5kLXNlZWsvXG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gIHdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IC0xcHggIWltcG9ydGFudDsgLy8gRml4IGZvciBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI1Njg2XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuXG4gIC8vIEZpeCBmb3IgcG9zaXRpb25lZCB0YWJsZSBjYXB0aW9uIHRoYXQgY291bGQgYmVjb21lIGFub255bW91cyBjZWxsc1xuICAmOm5vdChjYXB0aW9uKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gVXNlIHRvIG9ubHkgZGlzcGxheSBjb250ZW50IHdoZW4gaXQncyBmb2N1c2VkLCBvciBvbmUgb2YgaXRzIGNoaWxkIGVsZW1lbnRzIGlzIGZvY3VzZWRcbi8vIChpLmUuIHdoZW4gZm9jdXMgaXMgd2l0aGluIHRoZSBlbGVtZW50L2NvbnRhaW5lciB0aGF0IHRoZSBjbGFzcyB3YXMgYXBwbGllZCB0bylcbi8vXG4vLyBVc2VmdWwgZm9yIFwiU2tpcCB0byBtYWluIGNvbnRlbnRcIiBsaW5rczsgc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDEzL05PVEUtV0NBRzIwLVRFQ0hTLTIwMTMwOTA1L0cxXG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4tZm9jdXNhYmxlKCkge1xuICAmOm5vdCg6Zm9jdXMpOm5vdCg6Zm9jdXMtd2l0aGluKSB7XG4gICAgQGluY2x1ZGUgdmlzdWFsbHktaGlkZGVuKCk7XG4gIH1cbn1cbiIsIi8vXG4vLyBTdHJldGNoZWQgbGlua1xuLy9cblxuLnN0cmV0Y2hlZC1saW5rIHtcbiAgJjo6I3skc3RyZXRjaGVkLWxpbmstcHNldWRvLWVsZW1lbnR9IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6ICRzdHJldGNoZWQtbGluay16LWluZGV4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cbn1cbiIsIi8vXG4vLyBUZXh0IHRydW5jYXRpb25cbi8vXG5cbi50ZXh0LXRydW5jYXRlIHtcbiAgQGluY2x1ZGUgdGV4dC10cnVuY2F0ZSgpO1xufVxuIiwiLy8gVGV4dCB0cnVuY2F0ZVxuLy8gUmVxdWlyZXMgaW5saW5lLWJsb2NrIG9yIGJsb2NrIGZvciBwcm9wZXIgc3R5bGluZ1xuXG5AbWl4aW4gdGV4dC10cnVuY2F0ZSgpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iLCIudnIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIHdpZHRoOiAkdnItYm9yZGVyLXdpZHRoO1xuICBtaW4taGVpZ2h0OiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRjb2xvcjtcbiAgb3BhY2l0eTogJGhyLW9wYWNpdHk7XG59XG4iLCIvLyBVdGlsaXR5IGdlbmVyYXRvclxuLy8gVXNlZCB0byBnZW5lcmF0ZSB1dGlsaXRpZXMgJiBwcmludCB1dGlsaXRpZXNcbkBtaXhpbiBnZW5lcmF0ZS11dGlsaXR5KCR1dGlsaXR5LCAkaW5maXg6IFwiXCIsICRpcy1yZnMtbWVkaWEtcXVlcnk6IGZhbHNlKSB7XG4gICR2YWx1ZXM6IG1hcC1nZXQoJHV0aWxpdHksIHZhbHVlcyk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlcyBhcmUgYSBsaXN0IG9yIHN0cmluZywgY29udmVydCBpdCBpbnRvIGEgbWFwXG4gIEBpZiB0eXBlLW9mKCR2YWx1ZXMpID09IFwic3RyaW5nXCIgb3IgdHlwZS1vZihudGgoJHZhbHVlcywgMSkpICE9IFwibGlzdFwiIHtcbiAgICAkdmFsdWVzOiB6aXAoJHZhbHVlcywgJHZhbHVlcyk7XG4gIH1cblxuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHZhbHVlcyB7XG4gICAgJHByb3BlcnRpZXM6IG1hcC1nZXQoJHV0aWxpdHksIHByb3BlcnR5KTtcblxuICAgIC8vIE11bHRpcGxlIHByb3BlcnRpZXMgYXJlIHBvc3NpYmxlLCBmb3IgZXhhbXBsZSB3aXRoIHZlcnRpY2FsIG9yIGhvcml6b250YWwgbWFyZ2lucyBvciBwYWRkaW5nc1xuICAgIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcInN0cmluZ1wiIHtcbiAgICAgICRwcm9wZXJ0aWVzOiBhcHBlbmQoKCksICRwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICAvLyBVc2UgY3VzdG9tIGNsYXNzIGlmIHByZXNlbnRcbiAgICAkcHJvcGVydHktY2xhc3M6IGlmKG1hcC1oYXMta2V5KCR1dGlsaXR5LCBjbGFzcyksIG1hcC1nZXQoJHV0aWxpdHksIGNsYXNzKSwgbnRoKCRwcm9wZXJ0aWVzLCAxKSk7XG4gICAgJHByb3BlcnR5LWNsYXNzOiBpZigkcHJvcGVydHktY2xhc3MgPT0gbnVsbCwgXCJcIiwgJHByb3BlcnR5LWNsYXNzKTtcblxuICAgIC8vIFVzZSBjdXN0b20gQ1NTIHZhcmlhYmxlIG5hbWUgaWYgcHJlc2VudCwgb3RoZXJ3aXNlIGRlZmF1bHQgdG8gYGNsYXNzYFxuICAgICRjc3MtdmFyaWFibGUtbmFtZTogaWYobWFwLWhhcy1rZXkoJHV0aWxpdHksIGNzcy12YXJpYWJsZS1uYW1lKSwgbWFwLWdldCgkdXRpbGl0eSwgY3NzLXZhcmlhYmxlLW5hbWUpLCBtYXAtZ2V0KCR1dGlsaXR5LCBjbGFzcykpO1xuXG4gICAgLy8gU3RhdGUgcGFyYW1zIHRvIGdlbmVyYXRlIHBzZXVkby1jbGFzc2VzXG4gICAgJHN0YXRlOiBpZihtYXAtaGFzLWtleSgkdXRpbGl0eSwgc3RhdGUpLCBtYXAtZ2V0KCR1dGlsaXR5LCBzdGF0ZSksICgpKTtcblxuICAgICRpbmZpeDogaWYoJHByb3BlcnR5LWNsYXNzID09IFwiXCIgYW5kIHN0ci1zbGljZSgkaW5maXgsIDEsIDEpID09IFwiLVwiLCBzdHItc2xpY2UoJGluZml4LCAyKSwgJGluZml4KTtcblxuICAgIC8vIERvbid0IHByZWZpeCBpZiB2YWx1ZSBrZXkgaXMgbnVsbCAoZS5nLiB3aXRoIHNoYWRvdyBjbGFzcylcbiAgICAkcHJvcGVydHktY2xhc3MtbW9kaWZpZXI6IGlmKCRrZXksIGlmKCRwcm9wZXJ0eS1jbGFzcyA9PSBcIlwiIGFuZCAkaW5maXggPT0gXCJcIiwgXCJcIiwgXCItXCIpICsgJGtleSwgXCJcIik7XG5cbiAgICBAaWYgbWFwLWdldCgkdXRpbGl0eSwgcmZzKSB7XG4gICAgICAvLyBJbnNpZGUgdGhlIG1lZGlhIHF1ZXJ5XG4gICAgICBAaWYgJGlzLXJmcy1tZWRpYS1xdWVyeSB7XG4gICAgICAgICR2YWw6IHJmcy12YWx1ZSgkdmFsdWUpO1xuXG4gICAgICAgIC8vIERvIG5vdCByZW5kZXIgYW55dGhpbmcgaWYgZmx1aWQgYW5kIG5vbiBmbHVpZCB2YWx1ZXMgYXJlIHRoZSBzYW1lXG4gICAgICAgICR2YWx1ZTogaWYoJHZhbCA9PSByZnMtZmx1aWQtdmFsdWUoJHZhbHVlKSwgbnVsbCwgJHZhbCk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgICR2YWx1ZTogcmZzLWZsdWlkLXZhbHVlKCR2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJGlzLWNzcy12YXI6IG1hcC1nZXQoJHV0aWxpdHksIGNzcy12YXIpO1xuICAgICRpcy1sb2NhbC12YXJzOiBtYXAtZ2V0KCR1dGlsaXR5LCBsb2NhbC12YXJzKTtcbiAgICAkaXMtcnRsOiBtYXAtZ2V0KCR1dGlsaXR5LCBydGwpO1xuXG4gICAgQGlmICR2YWx1ZSAhPSBudWxsIHtcbiAgICAgIEBpZiAkaXMtcnRsID09IGZhbHNlIHtcbiAgICAgICAgLyogcnRsOmJlZ2luOnJlbW92ZSAqL1xuICAgICAgfVxuXG4gICAgICBAaWYgJGlzLWNzcy12YXIge1xuICAgICAgICAuI3skcHJvcGVydHktY2xhc3MgKyAkaW5maXggKyAkcHJvcGVydHktY2xhc3MtbW9kaWZpZXJ9IHtcbiAgICAgICAgICAtLSN7JHByZWZpeH0jeyRjc3MtdmFyaWFibGUtbmFtZX06ICN7JHZhbHVlfTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBlYWNoICRwc2V1ZG8gaW4gJHN0YXRlIHtcbiAgICAgICAgICAuI3skcHJvcGVydHktY2xhc3MgKyAkaW5maXggKyAkcHJvcGVydHktY2xhc3MtbW9kaWZpZXJ9LSN7JHBzZXVkb306I3skcHNldWRvfSB7XG4gICAgICAgICAgICAtLSN7JHByZWZpeH0jeyRjc3MtdmFyaWFibGUtbmFtZX06ICN7JHZhbHVlfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAuI3skcHJvcGVydHktY2xhc3MgKyAkaW5maXggKyAkcHJvcGVydHktY2xhc3MtbW9kaWZpZXJ9IHtcbiAgICAgICAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xuICAgICAgICAgICAgQGlmICRpcy1sb2NhbC12YXJzIHtcbiAgICAgICAgICAgICAgQGVhY2ggJGxvY2FsLXZhciwgJHZhcmlhYmxlIGluICRpcy1sb2NhbC12YXJzIHtcbiAgICAgICAgICAgICAgICAtLSN7JHByZWZpeH0jeyRsb2NhbC12YXJ9OiAjeyR2YXJpYWJsZX07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlIGlmKCRlbmFibGUtaW1wb3J0YW50LXV0aWxpdGllcywgIWltcG9ydGFudCwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQGVhY2ggJHBzZXVkbyBpbiAkc3RhdGUge1xuICAgICAgICAgIC4jeyRwcm9wZXJ0eS1jbGFzcyArICRpbmZpeCArICRwcm9wZXJ0eS1jbGFzcy1tb2RpZmllcn0tI3skcHNldWRvfTojeyRwc2V1ZG99IHtcbiAgICAgICAgICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XG4gICAgICAgICAgICAgIEBpZiAkaXMtbG9jYWwtdmFycyB7XG4gICAgICAgICAgICAgICAgQGVhY2ggJGxvY2FsLXZhciwgJHZhcmlhYmxlIGluICRpcy1sb2NhbC12YXJzIHtcbiAgICAgICAgICAgICAgICAgIC0tI3skcHJlZml4fSN7JGxvY2FsLXZhcn06ICN7JHZhcmlhYmxlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgI3skcHJvcGVydHl9OiAkdmFsdWUgaWYoJGVuYWJsZS1pbXBvcnRhbnQtdXRpbGl0aWVzLCAhaW1wb3J0YW50LCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGlmICRpcy1ydGwgPT0gZmFsc2Uge1xuICAgICAgICAvKiBydGw6ZW5kOnJlbW92ZSAqL1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gTG9vcCBvdmVyIGVhY2ggYnJlYWtwb2ludFxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcblxuICAvLyBHZW5lcmF0ZSBtZWRpYSBxdWVyeSBpZiBuZWVkZWRcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJGdyaWQtYnJlYWtwb2ludHMpO1xuXG4gICAgLy8gTG9vcCBvdmVyIGVhY2ggdXRpbGl0eSBwcm9wZXJ0eVxuICAgIEBlYWNoICRrZXksICR1dGlsaXR5IGluICR1dGlsaXRpZXMge1xuICAgICAgLy8gVGhlIHV0aWxpdHkgY2FuIGJlIGRpc2FibGVkIHdpdGggYGZhbHNlYCwgdGh1cyBjaGVjayBpZiB0aGUgdXRpbGl0eSBpcyBhIG1hcCBmaXJzdFxuICAgICAgLy8gT25seSBwcm9jZWVkIGlmIHJlc3BvbnNpdmUgbWVkaWEgcXVlcmllcyBhcmUgZW5hYmxlZCBvciBpZiBpdCdzIHRoZSBiYXNlIG1lZGlhIHF1ZXJ5XG4gICAgICBAaWYgdHlwZS1vZigkdXRpbGl0eSkgPT0gXCJtYXBcIiBhbmQgKG1hcC1nZXQoJHV0aWxpdHksIHJlc3BvbnNpdmUpIG9yICRpbmZpeCA9PSBcIlwiKSB7XG4gICAgICAgIEBpbmNsdWRlIGdlbmVyYXRlLXV0aWxpdHkoJHV0aWxpdHksICRpbmZpeCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJGUyByZXNjYWxpbmdcbkBtZWRpYSAobWluLXdpZHRoOiAkcmZzLW1xLXZhbHVlKSB7XG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkZ3JpZC1icmVha3BvaW50cyk7XG5cbiAgICBAaWYgKG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50KSA8ICRyZnMtYnJlYWtwb2ludCkge1xuICAgICAgLy8gTG9vcCBvdmVyIGVhY2ggdXRpbGl0eSBwcm9wZXJ0eVxuICAgICAgQGVhY2ggJGtleSwgJHV0aWxpdHkgaW4gJHV0aWxpdGllcyB7XG4gICAgICAgIC8vIFRoZSB1dGlsaXR5IGNhbiBiZSBkaXNhYmxlZCB3aXRoIGBmYWxzZWAsIHRodXMgY2hlY2sgaWYgdGhlIHV0aWxpdHkgaXMgYSBtYXAgZmlyc3RcbiAgICAgICAgLy8gT25seSBwcm9jZWVkIGlmIHJlc3BvbnNpdmUgbWVkaWEgcXVlcmllcyBhcmUgZW5hYmxlZCBvciBpZiBpdCdzIHRoZSBiYXNlIG1lZGlhIHF1ZXJ5XG4gICAgICAgIEBpZiB0eXBlLW9mKCR1dGlsaXR5KSA9PSBcIm1hcFwiIGFuZCBtYXAtZ2V0KCR1dGlsaXR5LCByZnMpIGFuZCAobWFwLWdldCgkdXRpbGl0eSwgcmVzcG9uc2l2ZSkgb3IgJGluZml4ID09IFwiXCIpIHtcbiAgICAgICAgICBAaW5jbHVkZSBnZW5lcmF0ZS11dGlsaXR5KCR1dGlsaXR5LCAkaW5maXgsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy8gUHJpbnQgdXRpbGl0aWVzXG5AbWVkaWEgcHJpbnQge1xuICBAZWFjaCAka2V5LCAkdXRpbGl0eSBpbiAkdXRpbGl0aWVzIHtcbiAgICAvLyBUaGUgdXRpbGl0eSBjYW4gYmUgZGlzYWJsZWQgd2l0aCBgZmFsc2VgLCB0aHVzIGNoZWNrIGlmIHRoZSB1dGlsaXR5IGlzIGEgbWFwIGZpcnN0XG4gICAgLy8gVGhlbiBjaGVjayBpZiB0aGUgdXRpbGl0eSBuZWVkcyBwcmludCBzdHlsZXNcbiAgICBAaWYgdHlwZS1vZigkdXRpbGl0eSkgPT0gXCJtYXBcIiBhbmQgbWFwLWdldCgkdXRpbGl0eSwgcHJpbnQpID09IHRydWUge1xuICAgICAgQGluY2x1ZGUgZ2VuZXJhdGUtdXRpbGl0eSgkdXRpbGl0eSwgXCItcHJpbnRcIik7XG4gICAgfVxuICB9XG59XG4iXX0= */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(ts));var ls=Ag.default.createRoot(document.getElementById("root"));ls.render(hg.default.createElement(vg,null));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=bundle.js.map
