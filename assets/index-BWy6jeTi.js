(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nE={exports:{}},sh={},rE={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=Symbol.for("react.element"),PA=Symbol.for("react.portal"),NA=Symbol.for("react.fragment"),bA=Symbol.for("react.strict_mode"),DA=Symbol.for("react.profiler"),OA=Symbol.for("react.provider"),MA=Symbol.for("react.context"),LA=Symbol.for("react.forward_ref"),VA=Symbol.for("react.suspense"),FA=Symbol.for("react.memo"),jA=Symbol.for("react.lazy"),Vy=Symbol.iterator;function UA(t){return t===null||typeof t!="object"?null:(t=Vy&&t[Vy]||t["@@iterator"],typeof t=="function"?t:null)}var iE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sE=Object.assign,oE={};function vo(t,e,n){this.props=t,this.context=e,this.refs=oE,this.updater=n||iE}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function aE(){}aE.prototype=vo.prototype;function sm(t,e,n){this.props=t,this.context=e,this.refs=oE,this.updater=n||iE}var om=sm.prototype=new aE;om.constructor=sm;sE(om,vo.prototype);om.isPureReactComponent=!0;var Fy=Array.isArray,lE=Object.prototype.hasOwnProperty,am={current:null},uE={key:!0,ref:!0,__self:!0,__source:!0};function cE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lE.call(e,r)&&!uE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wl,type:t,key:s,ref:o,props:i,_owner:am.current}}function zA(t,e){return{$$typeof:wl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lm(t){return typeof t=="object"&&t!==null&&t.$$typeof===wl}function BA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jy=/\/+/g;function Ad(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BA(""+t.key):e.toString(36)}function Lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wl:case PA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ad(o,0):r,Fy(i)?(n="",t!=null&&(n=t.replace(jy,"$&/")+"/"),Lu(i,e,n,"",function(c){return c})):i!=null&&(lm(i)&&(i=zA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ad(s,a);o+=Lu(s,e,n,u,i)}else if(u=UA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ad(s,a++),o+=Lu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cu(t,e,n){if(t==null)return t;var r=[],i=0;return Lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},Vu={transition:null},$A={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:Vu,ReactCurrentOwner:am};function hE(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:cu,forEach:function(t,e,n){cu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return cu(t,function(){e++}),e},toArray:function(t){return cu(t,function(e){return e})||[]},only:function(t){if(!lm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=vo;ae.Fragment=NA;ae.Profiler=DA;ae.PureComponent=sm;ae.StrictMode=bA;ae.Suspense=VA;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$A;ae.act=hE;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=am.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)lE.call(e,u)&&!uE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:wl,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:MA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OA,_context:t},t.Consumer=t};ae.createElement=cE;ae.createFactory=function(t){var e=cE.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:LA,render:t}};ae.isValidElement=lm;ae.lazy=function(t){return{$$typeof:jA,_payload:{_status:-1,_result:t},_init:WA}};ae.memo=function(t,e){return{$$typeof:FA,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Vu.transition;Vu.transition={};try{t()}finally{Vu.transition=e}};ae.unstable_act=hE;ae.useCallback=function(t,e){return Ft.current.useCallback(t,e)};ae.useContext=function(t){return Ft.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Ft.current.useEffect(t,e)};ae.useId=function(){return Ft.current.useId()};ae.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Ft.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};ae.useRef=function(t){return Ft.current.useRef(t)};ae.useState=function(t){return Ft.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Ft.current.useTransition()};ae.version="18.3.1";rE.exports=ae;var j=rE.exports;const qA=kA(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HA=j,GA=Symbol.for("react.element"),KA=Symbol.for("react.fragment"),QA=Object.prototype.hasOwnProperty,YA=HA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XA={key:!0,ref:!0,__self:!0,__source:!0};function dE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)QA.call(e,r)&&!XA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:GA,type:t,key:s,ref:o,props:i,_owner:YA.current}}sh.Fragment=KA;sh.jsx=dE;sh.jsxs=dE;nE.exports=sh;var m=nE.exports,Af={},fE={exports:{}},sn={},pE={exports:{}},mE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,J){var F=$.length;$.push(J);e:for(;0<F;){var U=F-1>>>1,B=$[U];if(0<i(B,J))$[U]=J,$[F]=B,F=U;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var J=$[0],F=$.pop();if(F!==J){$[0]=F;e:for(var U=0,B=$.length,H=B>>>1;U<H;){var Ce=2*(U+1)-1,Te=$[Ce],Le=Ce+1,Ue=$[Le];if(0>i(Te,F))Le<B&&0>i(Ue,Te)?($[U]=Ue,$[Le]=F,U=Le):($[U]=Te,$[Ce]=F,U=Ce);else if(Le<B&&0>i(Ue,F))$[U]=Ue,$[Le]=F,U=Le;else break e}}return J}function i($,J){var F=$.sortIndex-J.sortIndex;return F!==0?F:$.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,_=!1,w=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=$)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function P($){if(C=!1,x($),!w)if(n(u)!==null)w=!0,Kt(O);else{var J=n(c);J!==null&&rt(P,J.startTime-$)}}function O($,J){w=!1,C&&(C=!1,T(v),v=-1),_=!0;var F=p;try{for(x(J),f=n(u);f!==null&&(!(f.expirationTime>J)||$&&!k());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var B=U(f.expirationTime<=J);J=t.unstable_now(),typeof B=="function"?f.callback=B:f===n(u)&&r(u),x(J)}else r(u);f=n(u)}if(f!==null)var H=!0;else{var Ce=n(c);Ce!==null&&rt(P,Ce.startTime-J),H=!1}return H}finally{f=null,p=F,_=!1}}var V=!1,I=null,v=-1,S=5,A=-1;function k(){return!(t.unstable_now()-A<S)}function b(){if(I!==null){var $=t.unstable_now();A=$;var J=!0;try{J=I(!0,$)}finally{J?R():(V=!1,I=null)}}else V=!1}var R;if(typeof E=="function")R=function(){E(b)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ve=Z.port2;Z.port1.onmessage=b,R=function(){ve.postMessage(null)}}else R=function(){N(b,0)};function Kt($){I=$,V||(V=!0,R())}function rt($,J){v=N(function(){$(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){w||_||(w=!0,Kt(O))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(p){case 1:case 2:case 3:var J=3;break;default:J=p}var F=p;p=J;try{return $()}finally{p=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,J){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var F=p;p=$;try{return J()}finally{p=F}},t.unstable_scheduleCallback=function($,J,F){var U=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?U+F:U):F=U,$){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=F+B,$={id:h++,callback:J,priorityLevel:$,startTime:F,expirationTime:B,sortIndex:-1},F>U?($.sortIndex=F,e(c,$),n(u)===null&&$===n(c)&&(C?(T(v),v=-1):C=!0,rt(P,F-U))):($.sortIndex=B,e(u,$),w||_||(w=!0,Kt(O))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var J=p;return function(){var F=p;p=J;try{return $.apply(this,arguments)}finally{p=F}}}})(mE);pE.exports=mE;var JA=pE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZA=j,nn=JA;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gE=new Set,Ma={};function rs(t,e){Qs(t,e),Qs(t+"Capture",e)}function Qs(t,e){for(Ma[t]=e,t=0;t<e.length;t++)gE.add(e[t])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rf=Object.prototype.hasOwnProperty,eR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uy={},zy={};function tR(t){return Rf.call(zy,t)?!0:Rf.call(Uy,t)?!1:eR.test(t)?zy[t]=!0:(Uy[t]=!0,!1)}function nR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rR(t,e,n,r){if(e===null||typeof e>"u"||nR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var um=/[\-:]([a-z])/g;function cm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(um,cm);yt[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(um,cm);yt[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(um,cm);yt[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hm(t,e,n,r){var i=yt.hasOwnProperty(e)?yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rR(e,n,i,r)&&(n=null),r||i===null?tR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Er=ZA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hu=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),dm=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),_E=Symbol.for("react.provider"),yE=Symbol.for("react.context"),fm=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Nf=Symbol.for("react.suspense_list"),pm=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),vE=Symbol.for("react.offscreen"),By=Symbol.iterator;function Go(t){return t===null||typeof t!="object"?null:(t=By&&t[By]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,Rd;function la(t){if(Rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rd=e&&e[1]||""}return`
`+Rd+t}var kd=!1;function Pd(t,e){if(!t||kd)return"";kd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{kd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function iR(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=Pd(t.type,!1),t;case 11:return t=Pd(t.type.render,!1),t;case 1:return t=Pd(t.type,!0),t;default:return""}}function bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ts:return"Portal";case kf:return"Profiler";case dm:return"StrictMode";case Pf:return"Suspense";case Nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yE:return(t.displayName||"Context")+".Consumer";case _E:return(t._context.displayName||"Context")+".Provider";case fm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pm:return e=t.displayName||null,e!==null?e:bf(t.type)||"Memo";case Nr:e=t._payload,t=t._init;try{return bf(t(e))}catch{}}return null}function sR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bf(e);case 8:return e===dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oR(t){var e=wE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function du(t){t._valueTracker||(t._valueTracker=oR(t))}function EE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ni(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function TE(t,e){e=e.checked,e!=null&&hm(t,"checked",e,!1)}function Of(t,e){TE(t,e);var n=ni(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mf(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $y(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mf(t,e,n){(e!=="number"||ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function Ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(ua(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ni(n)}}function IE(t,e){var n=ni(e.value),r=ni(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function SE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?SE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fu,CE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fu=fu||document.createElement("div"),fu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aR=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){aR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function xE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function AE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lR=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ff(t,e){if(e){if(lR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function mm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zf=null,Vs=null,Fs=null;function Gy(t){if(t=Il(t)){if(typeof zf!="function")throw Error(W(280));var e=t.stateNode;e&&(e=ch(e),zf(t.stateNode,t.type,e))}}function RE(t){Vs?Fs?Fs.push(t):Fs=[t]:Vs=t}function kE(){if(Vs){var t=Vs,e=Fs;if(Fs=Vs=null,Gy(t),e)for(t=0;t<e.length;t++)Gy(e[t])}}function PE(t,e){return t(e)}function NE(){}var Nd=!1;function bE(t,e,n){if(Nd)return t(e,n);Nd=!0;try{return PE(t,e,n)}finally{Nd=!1,(Vs!==null||Fs!==null)&&(NE(),kE())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var r=ch(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var Bf=!1;if(hr)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{Bf=!1}function uR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ga=!1,sc=null,oc=!1,Wf=null,cR={onError:function(t){ga=!0,sc=t}};function hR(t,e,n,r,i,s,o,a,u){ga=!1,sc=null,uR.apply(cR,arguments)}function dR(t,e,n,r,i,s,o,a,u){if(hR.apply(this,arguments),ga){if(ga){var c=sc;ga=!1,sc=null}else throw Error(W(198));oc||(oc=!0,Wf=c)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function DE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ky(t){if(is(t)!==t)throw Error(W(188))}function fR(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ky(i),t;if(s===r)return Ky(i),e;s=s.sibling}throw Error(W(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function OE(t){return t=fR(t),t!==null?ME(t):null}function ME(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ME(t);if(e!==null)return e;t=t.sibling}return null}var LE=nn.unstable_scheduleCallback,Qy=nn.unstable_cancelCallback,pR=nn.unstable_shouldYield,mR=nn.unstable_requestPaint,He=nn.unstable_now,gR=nn.unstable_getCurrentPriorityLevel,gm=nn.unstable_ImmediatePriority,VE=nn.unstable_UserBlockingPriority,ac=nn.unstable_NormalPriority,_R=nn.unstable_LowPriority,FE=nn.unstable_IdlePriority,oh=null,Fn=null;function yR(t){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(oh,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:ER,vR=Math.log,wR=Math.LN2;function ER(t){return t>>>=0,t===0?32:31-(vR(t)/wR|0)|0}var pu=64,mu=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ca(a):(s&=o,s!==0&&(r=ca(s)))}else o=n&~i,o!==0?r=ca(o):s!==0&&(r=ca(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function TR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Cn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=TR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function $f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jE(){var t=pu;return pu<<=1,!(pu&4194240)&&(pu=64),t}function bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function El(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function SR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function _m(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function UE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zE,ym,BE,WE,$E,qf=!1,gu=[],Wr=null,$r=null,qr=null,Fa=new Map,ja=new Map,Dr=[],CR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yy(t,e){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function Qo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Il(e),e!==null&&ym(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xR(t,e,n,r,i){switch(e){case"focusin":return Wr=Qo(Wr,t,e,n,r,i),!0;case"dragenter":return $r=Qo($r,t,e,n,r,i),!0;case"mouseover":return qr=Qo(qr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fa.set(s,Qo(Fa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ja.set(s,Qo(ja.get(s)||null,t,e,n,r,i)),!0}return!1}function qE(t){var e=Ri(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=DE(n),e!==null){t.blockedOn=e,$E(t.priority,function(){BE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uf=r,n.target.dispatchEvent(r),Uf=null}else return e=Il(n),e!==null&&ym(e),t.blockedOn=n,!1;e.shift()}return!0}function Xy(t,e,n){Fu(t)&&n.delete(e)}function AR(){qf=!1,Wr!==null&&Fu(Wr)&&(Wr=null),$r!==null&&Fu($r)&&($r=null),qr!==null&&Fu(qr)&&(qr=null),Fa.forEach(Xy),ja.forEach(Xy)}function Yo(t,e){t.blockedOn===e&&(t.blockedOn=null,qf||(qf=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,AR)))}function Ua(t){function e(i){return Yo(i,t)}if(0<gu.length){Yo(gu[0],t);for(var n=1;n<gu.length;n++){var r=gu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wr!==null&&Yo(Wr,t),$r!==null&&Yo($r,t),qr!==null&&Yo(qr,t),Fa.forEach(e),ja.forEach(e),n=0;n<Dr.length;n++)r=Dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)qE(n),n.blockedOn===null&&Dr.shift()}var js=Er.ReactCurrentBatchConfig,uc=!0;function RR(t,e,n,r){var i=we,s=js.transition;js.transition=null;try{we=1,vm(t,e,n,r)}finally{we=i,js.transition=s}}function kR(t,e,n,r){var i=we,s=js.transition;js.transition=null;try{we=4,vm(t,e,n,r)}finally{we=i,js.transition=s}}function vm(t,e,n,r){if(uc){var i=Hf(t,e,n,r);if(i===null)Bd(t,e,r,cc,n),Yy(t,r);else if(xR(i,t,e,n,r))r.stopPropagation();else if(Yy(t,r),e&4&&-1<CR.indexOf(t)){for(;i!==null;){var s=Il(i);if(s!==null&&zE(s),s=Hf(t,e,n,r),s===null&&Bd(t,e,r,cc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bd(t,e,r,null,n)}}var cc=null;function Hf(t,e,n,r){if(cc=null,t=mm(r),t=Ri(t),t!==null)if(e=is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=DE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cc=t,null}function HE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gR()){case gm:return 1;case VE:return 4;case ac:case _R:return 16;case FE:return 536870912;default:return 16}default:return 16}}var jr=null,wm=null,ju=null;function GE(){if(ju)return ju;var t,e=wm,n=e.length,r,i="value"in jr?jr.value:jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ju=i.slice(t,1<r?1-r:void 0)}function Uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function Jy(){return!1}function on(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_u:Jy,this.isPropagationStopped=Jy,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Em=on(wo),Tl=je({},wo,{view:0,detail:0}),PR=on(Tl),Dd,Od,Xo,ah=je({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(Dd=t.screenX-Xo.screenX,Od=t.screenY-Xo.screenY):Od=Dd=0,Xo=t),Dd)},movementY:function(t){return"movementY"in t?t.movementY:Od}}),Zy=on(ah),NR=je({},ah,{dataTransfer:0}),bR=on(NR),DR=je({},Tl,{relatedTarget:0}),Md=on(DR),OR=je({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),MR=on(OR),LR=je({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VR=on(LR),FR=je({},wo,{data:0}),ev=on(FR),jR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zR[t])?!!e[t]:!1}function Tm(){return BR}var WR=je({},Tl,{key:function(t){if(t.key){var e=jR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tm,charCode:function(t){return t.type==="keypress"?Uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$R=on(WR),qR=je({},ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tv=on(qR),HR=je({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tm}),GR=on(HR),KR=je({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),QR=on(KR),YR=je({},ah,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XR=on(YR),JR=[9,13,27,32],Im=hr&&"CompositionEvent"in window,_a=null;hr&&"documentMode"in document&&(_a=document.documentMode);var ZR=hr&&"TextEvent"in window&&!_a,KE=hr&&(!Im||_a&&8<_a&&11>=_a),nv=" ",rv=!1;function QE(t,e){switch(t){case"keyup":return JR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function YE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function ek(t,e){switch(t){case"compositionend":return YE(e);case"keypress":return e.which!==32?null:(rv=!0,nv);case"textInput":return t=e.data,t===nv&&rv?null:t;default:return null}}function tk(t,e){if(Ss)return t==="compositionend"||!Im&&QE(t,e)?(t=GE(),ju=wm=jr=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return KE&&e.locale!=="ko"?null:e.data;default:return null}}var nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nk[t.type]:e==="textarea"}function XE(t,e,n,r){RE(r),e=hc(e,"onChange"),0<e.length&&(n=new Em("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ya=null,za=null;function rk(t){lT(t,0)}function lh(t){var e=As(t);if(EE(e))return t}function ik(t,e){if(t==="change")return e}var JE=!1;if(hr){var Ld;if(hr){var Vd="oninput"in document;if(!Vd){var sv=document.createElement("div");sv.setAttribute("oninput","return;"),Vd=typeof sv.oninput=="function"}Ld=Vd}else Ld=!1;JE=Ld&&(!document.documentMode||9<document.documentMode)}function ov(){ya&&(ya.detachEvent("onpropertychange",ZE),za=ya=null)}function ZE(t){if(t.propertyName==="value"&&lh(za)){var e=[];XE(e,za,t,mm(t)),bE(rk,e)}}function sk(t,e,n){t==="focusin"?(ov(),ya=e,za=n,ya.attachEvent("onpropertychange",ZE)):t==="focusout"&&ov()}function ok(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lh(za)}function ak(t,e){if(t==="click")return lh(e)}function lk(t,e){if(t==="input"||t==="change")return lh(e)}function uk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:uk;function Ba(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rf.call(e,i)||!kn(t[i],e[i]))return!1}return!0}function av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lv(t,e){var n=av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=av(n)}}function eT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?eT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tT(){for(var t=window,e=ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ic(t.document)}return e}function Sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ck(t){var e=tT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&eT(n.ownerDocument.documentElement,n)){if(r!==null&&Sm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lv(n,s);var o=lv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hk=hr&&"documentMode"in document&&11>=document.documentMode,Cs=null,Gf=null,va=null,Kf=!1;function uv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kf||Cs==null||Cs!==ic(r)||(r=Cs,"selectionStart"in r&&Sm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),va&&Ba(va,r)||(va=r,r=hc(Gf,"onSelect"),0<r.length&&(e=new Em("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Cs)))}function yu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:yu("Animation","AnimationEnd"),animationiteration:yu("Animation","AnimationIteration"),animationstart:yu("Animation","AnimationStart"),transitionend:yu("Transition","TransitionEnd")},Fd={},nT={};hr&&(nT=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function uh(t){if(Fd[t])return Fd[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nT)return Fd[t]=e[n];return t}var rT=uh("animationend"),iT=uh("animationiteration"),sT=uh("animationstart"),oT=uh("transitionend"),aT=new Map,cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(t,e){aT.set(t,e),rs(e,[t])}for(var jd=0;jd<cv.length;jd++){var Ud=cv[jd],dk=Ud.toLowerCase(),fk=Ud[0].toUpperCase()+Ud.slice(1);di(dk,"on"+fk)}di(rT,"onAnimationEnd");di(iT,"onAnimationIteration");di(sT,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(oT,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function hv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dR(r,e,void 0,t),t.currentTarget=null}function lT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;hv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;hv(i,a,c),s=u}}}if(oc)throw t=Wf,oc=!1,Wf=null,t}function be(t,e){var n=e[Zf];n===void 0&&(n=e[Zf]=new Set);var r=t+"__bubble";n.has(r)||(uT(e,t,2,!1),n.add(r))}function zd(t,e,n){var r=0;e&&(r|=4),uT(n,t,r,e)}var vu="_reactListening"+Math.random().toString(36).slice(2);function Wa(t){if(!t[vu]){t[vu]=!0,gE.forEach(function(n){n!=="selectionchange"&&(pk.has(n)||zd(n,!1,t),zd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vu]||(e[vu]=!0,zd("selectionchange",!1,e))}}function uT(t,e,n,r){switch(HE(e)){case 1:var i=RR;break;case 4:i=kR;break;default:i=vm}n=i.bind(null,e,n,t),i=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ri(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}bE(function(){var c=s,h=mm(n),f=[];e:{var p=aT.get(t);if(p!==void 0){var _=Em,w=t;switch(t){case"keypress":if(Uu(n)===0)break e;case"keydown":case"keyup":_=$R;break;case"focusin":w="focus",_=Md;break;case"focusout":w="blur",_=Md;break;case"beforeblur":case"afterblur":_=Md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Zy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=bR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=GR;break;case rT:case iT:case sT:_=MR;break;case oT:_=QR;break;case"scroll":_=PR;break;case"wheel":_=XR;break;case"copy":case"cut":case"paste":_=VR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=tv}var C=(e&4)!==0,N=!C&&t==="scroll",T=C?p!==null?p+"Capture":null:p;C=[];for(var E=c,x;E!==null;){x=E;var P=x.stateNode;if(x.tag===5&&P!==null&&(x=P,T!==null&&(P=Va(E,T),P!=null&&C.push($a(E,P,x)))),N)break;E=E.return}0<C.length&&(p=new _(p,w,null,n,h),f.push({event:p,listeners:C}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==Uf&&(w=n.relatedTarget||n.fromElement)&&(Ri(w)||w[dr]))break e;if((_||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,_?(w=n.relatedTarget||n.toElement,_=c,w=w?Ri(w):null,w!==null&&(N=is(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=c),_!==w)){if(C=Zy,P="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(C=tv,P="onPointerLeave",T="onPointerEnter",E="pointer"),N=_==null?p:As(_),x=w==null?p:As(w),p=new C(P,E+"leave",_,n,h),p.target=N,p.relatedTarget=x,P=null,Ri(h)===c&&(C=new C(T,E+"enter",w,n,h),C.target=x,C.relatedTarget=N,P=C),N=P,_&&w)t:{for(C=_,T=w,E=0,x=C;x;x=_s(x))E++;for(x=0,P=T;P;P=_s(P))x++;for(;0<E-x;)C=_s(C),E--;for(;0<x-E;)T=_s(T),x--;for(;E--;){if(C===T||T!==null&&C===T.alternate)break t;C=_s(C),T=_s(T)}C=null}else C=null;_!==null&&dv(f,p,_,C,!1),w!==null&&N!==null&&dv(f,N,w,C,!0)}}e:{if(p=c?As(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var O=ik;else if(iv(p))if(JE)O=lk;else{O=ok;var V=sk}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=ak);if(O&&(O=O(t,c))){XE(f,O,n,h);break e}V&&V(t,p,c),t==="focusout"&&(V=p._wrapperState)&&V.controlled&&p.type==="number"&&Mf(p,"number",p.value)}switch(V=c?As(c):window,t){case"focusin":(iv(V)||V.contentEditable==="true")&&(Cs=V,Gf=c,va=null);break;case"focusout":va=Gf=Cs=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,uv(f,n,h);break;case"selectionchange":if(hk)break;case"keydown":case"keyup":uv(f,n,h)}var I;if(Im)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ss?QE(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(KE&&n.locale!=="ko"&&(Ss||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ss&&(I=GE()):(jr=h,wm="value"in jr?jr.value:jr.textContent,Ss=!0)),V=hc(c,v),0<V.length&&(v=new ev(v,t,null,n,h),f.push({event:v,listeners:V}),I?v.data=I:(I=YE(n),I!==null&&(v.data=I)))),(I=ZR?ek(t,n):tk(t,n))&&(c=hc(c,"onBeforeInput"),0<c.length&&(h=new ev("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=I))}lT(f,e)})}function $a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function hc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Va(t,n),s!=null&&r.unshift($a(t,s,i)),s=Va(t,e),s!=null&&r.push($a(t,s,i))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Va(n,s),u!=null&&o.unshift($a(n,u,a))):i||(u=Va(n,s),u!=null&&o.push($a(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mk=/\r\n?/g,gk=/\u0000|\uFFFD/g;function fv(t){return(typeof t=="string"?t:""+t).replace(mk,`
`).replace(gk,"")}function wu(t,e,n){if(e=fv(e),fv(t)!==e&&n)throw Error(W(425))}function dc(){}var Qf=null,Yf=null;function Xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jf=typeof setTimeout=="function"?setTimeout:void 0,_k=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(t){return pv.resolve(null).then(t).catch(vk)}:Jf;function vk(t){setTimeout(function(){throw t})}function Wd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ua(e)}function Hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),Vn="__reactFiber$"+Eo,qa="__reactProps$"+Eo,dr="__reactContainer$"+Eo,Zf="__reactEvents$"+Eo,wk="__reactListeners$"+Eo,Ek="__reactHandles$"+Eo;function Ri(t){var e=t[Vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[Vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mv(t);t!==null;){if(n=t[Vn])return n;t=mv(t)}return e}t=n,n=t.parentNode}return null}function Il(t){return t=t[Vn]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function ch(t){return t[qa]||null}var ep=[],Rs=-1;function fi(t){return{current:t}}function Oe(t){0>Rs||(t.current=ep[Rs],ep[Rs]=null,Rs--)}function ke(t,e){Rs++,ep[Rs]=t.current,t.current=e}var ri={},Pt=fi(ri),$t=fi(!1),Fi=ri;function Ys(t,e){var n=t.type.contextTypes;if(!n)return ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function fc(){Oe($t),Oe(Pt)}function gv(t,e,n){if(Pt.current!==ri)throw Error(W(168));ke(Pt,e),ke($t,n)}function cT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(W(108,sR(t)||"Unknown",i));return je({},n,r)}function pc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ri,Fi=Pt.current,ke(Pt,t),ke($t,$t.current),!0}function _v(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=cT(t,e,Fi),r.__reactInternalMemoizedMergedChildContext=t,Oe($t),Oe(Pt),ke(Pt,t)):Oe($t),ke($t,n)}var Jn=null,hh=!1,$d=!1;function hT(t){Jn===null?Jn=[t]:Jn.push(t)}function Tk(t){hh=!0,hT(t)}function pi(){if(!$d&&Jn!==null){$d=!0;var t=0,e=we;try{var n=Jn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jn=null,hh=!1}catch(i){throw Jn!==null&&(Jn=Jn.slice(t+1)),LE(gm,pi),i}finally{we=e,$d=!1}}return null}var ks=[],Ps=0,mc=null,gc=0,cn=[],hn=0,ji=null,tr=1,nr="";function Ii(t,e){ks[Ps++]=gc,ks[Ps++]=mc,mc=t,gc=e}function dT(t,e,n){cn[hn++]=tr,cn[hn++]=nr,cn[hn++]=ji,ji=t;var r=tr;t=nr;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var s=32-Cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,tr=1<<32-Cn(e)+i|n<<i|r,nr=s+t}else tr=1<<s|n<<i|r,nr=t}function Cm(t){t.return!==null&&(Ii(t,1),dT(t,1,0))}function xm(t){for(;t===mc;)mc=ks[--Ps],ks[Ps]=null,gc=ks[--Ps],ks[Ps]=null;for(;t===ji;)ji=cn[--hn],cn[hn]=null,nr=cn[--hn],cn[hn]=null,tr=cn[--hn],cn[hn]=null}var tn=null,Zt=null,Me=!1,Tn=null;function fT(t,e){var n=dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Zt=Hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ji!==null?{id:tr,overflow:nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Zt=null,!0):!1;default:return!1}}function tp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function np(t){if(Me){var e=Zt;if(e){var n=e;if(!yv(t,e)){if(tp(t))throw Error(W(418));e=Hr(n.nextSibling);var r=tn;e&&yv(t,e)?fT(r,n):(t.flags=t.flags&-4097|2,Me=!1,tn=t)}}else{if(tp(t))throw Error(W(418));t.flags=t.flags&-4097|2,Me=!1,tn=t}}}function vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function Eu(t){if(t!==tn)return!1;if(!Me)return vv(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xf(t.type,t.memoizedProps)),e&&(e=Zt)){if(tp(t))throw pT(),Error(W(418));for(;e;)fT(t,e),e=Hr(e.nextSibling)}if(vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zt=Hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zt=null}}else Zt=tn?Hr(t.stateNode.nextSibling):null;return!0}function pT(){for(var t=Zt;t;)t=Hr(t.nextSibling)}function Xs(){Zt=tn=null,Me=!1}function Am(t){Tn===null?Tn=[t]:Tn.push(t)}var Ik=Er.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function Tu(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wv(t){var e=t._init;return e(t._payload)}function mT(t){function e(T,E){if(t){var x=T.deletions;x===null?(T.deletions=[E],T.flags|=16):x.push(E)}}function n(T,E){if(!t)return null;for(;E!==null;)e(T,E),E=E.sibling;return null}function r(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function i(T,E){return T=Yr(T,E),T.index=0,T.sibling=null,T}function s(T,E,x){return T.index=x,t?(x=T.alternate,x!==null?(x=x.index,x<E?(T.flags|=2,E):x):(T.flags|=2,E)):(T.flags|=1048576,E)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,E,x,P){return E===null||E.tag!==6?(E=Xd(x,T.mode,P),E.return=T,E):(E=i(E,x),E.return=T,E)}function u(T,E,x,P){var O=x.type;return O===Is?h(T,E,x.props.children,P,x.key):E!==null&&(E.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Nr&&wv(O)===E.type)?(P=i(E,x.props),P.ref=Jo(T,E,x),P.return=T,P):(P=Gu(x.type,x.key,x.props,null,T.mode,P),P.ref=Jo(T,E,x),P.return=T,P)}function c(T,E,x,P){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=Jd(x,T.mode,P),E.return=T,E):(E=i(E,x.children||[]),E.return=T,E)}function h(T,E,x,P,O){return E===null||E.tag!==7?(E=Mi(x,T.mode,P,O),E.return=T,E):(E=i(E,x),E.return=T,E)}function f(T,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Xd(""+E,T.mode,x),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case hu:return x=Gu(E.type,E.key,E.props,null,T.mode,x),x.ref=Jo(T,null,E),x.return=T,x;case Ts:return E=Jd(E,T.mode,x),E.return=T,E;case Nr:var P=E._init;return f(T,P(E._payload),x)}if(ua(E)||Go(E))return E=Mi(E,T.mode,x,null),E.return=T,E;Tu(T,E)}return null}function p(T,E,x,P){var O=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return O!==null?null:a(T,E,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hu:return x.key===O?u(T,E,x,P):null;case Ts:return x.key===O?c(T,E,x,P):null;case Nr:return O=x._init,p(T,E,O(x._payload),P)}if(ua(x)||Go(x))return O!==null?null:h(T,E,x,P,null);Tu(T,x)}return null}function _(T,E,x,P,O){if(typeof P=="string"&&P!==""||typeof P=="number")return T=T.get(x)||null,a(E,T,""+P,O);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case hu:return T=T.get(P.key===null?x:P.key)||null,u(E,T,P,O);case Ts:return T=T.get(P.key===null?x:P.key)||null,c(E,T,P,O);case Nr:var V=P._init;return _(T,E,x,V(P._payload),O)}if(ua(P)||Go(P))return T=T.get(x)||null,h(E,T,P,O,null);Tu(E,P)}return null}function w(T,E,x,P){for(var O=null,V=null,I=E,v=E=0,S=null;I!==null&&v<x.length;v++){I.index>v?(S=I,I=null):S=I.sibling;var A=p(T,I,x[v],P);if(A===null){I===null&&(I=S);break}t&&I&&A.alternate===null&&e(T,I),E=s(A,E,v),V===null?O=A:V.sibling=A,V=A,I=S}if(v===x.length)return n(T,I),Me&&Ii(T,v),O;if(I===null){for(;v<x.length;v++)I=f(T,x[v],P),I!==null&&(E=s(I,E,v),V===null?O=I:V.sibling=I,V=I);return Me&&Ii(T,v),O}for(I=r(T,I);v<x.length;v++)S=_(I,T,v,x[v],P),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?v:S.key),E=s(S,E,v),V===null?O=S:V.sibling=S,V=S);return t&&I.forEach(function(k){return e(T,k)}),Me&&Ii(T,v),O}function C(T,E,x,P){var O=Go(x);if(typeof O!="function")throw Error(W(150));if(x=O.call(x),x==null)throw Error(W(151));for(var V=O=null,I=E,v=E=0,S=null,A=x.next();I!==null&&!A.done;v++,A=x.next()){I.index>v?(S=I,I=null):S=I.sibling;var k=p(T,I,A.value,P);if(k===null){I===null&&(I=S);break}t&&I&&k.alternate===null&&e(T,I),E=s(k,E,v),V===null?O=k:V.sibling=k,V=k,I=S}if(A.done)return n(T,I),Me&&Ii(T,v),O;if(I===null){for(;!A.done;v++,A=x.next())A=f(T,A.value,P),A!==null&&(E=s(A,E,v),V===null?O=A:V.sibling=A,V=A);return Me&&Ii(T,v),O}for(I=r(T,I);!A.done;v++,A=x.next())A=_(I,T,v,A.value,P),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?v:A.key),E=s(A,E,v),V===null?O=A:V.sibling=A,V=A);return t&&I.forEach(function(b){return e(T,b)}),Me&&Ii(T,v),O}function N(T,E,x,P){if(typeof x=="object"&&x!==null&&x.type===Is&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case hu:e:{for(var O=x.key,V=E;V!==null;){if(V.key===O){if(O=x.type,O===Is){if(V.tag===7){n(T,V.sibling),E=i(V,x.props.children),E.return=T,T=E;break e}}else if(V.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Nr&&wv(O)===V.type){n(T,V.sibling),E=i(V,x.props),E.ref=Jo(T,V,x),E.return=T,T=E;break e}n(T,V);break}else e(T,V);V=V.sibling}x.type===Is?(E=Mi(x.props.children,T.mode,P,x.key),E.return=T,T=E):(P=Gu(x.type,x.key,x.props,null,T.mode,P),P.ref=Jo(T,E,x),P.return=T,T=P)}return o(T);case Ts:e:{for(V=x.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(T,E.sibling),E=i(E,x.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else e(T,E);E=E.sibling}E=Jd(x,T.mode,P),E.return=T,T=E}return o(T);case Nr:return V=x._init,N(T,E,V(x._payload),P)}if(ua(x))return w(T,E,x,P);if(Go(x))return C(T,E,x,P);Tu(T,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(T,E.sibling),E=i(E,x),E.return=T,T=E):(n(T,E),E=Xd(x,T.mode,P),E.return=T,T=E),o(T)):n(T,E)}return N}var Js=mT(!0),gT=mT(!1),_c=fi(null),yc=null,Ns=null,Rm=null;function km(){Rm=Ns=yc=null}function Pm(t){var e=_c.current;Oe(_c),t._currentValue=e}function rp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){yc=t,Rm=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function mn(t){var e=t._currentValue;if(Rm!==t)if(t={context:t,memoizedValue:e,next:null},Ns===null){if(yc===null)throw Error(W(308));Ns=t,yc.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return e}var ki=null;function Nm(t){ki===null?ki=[t]:ki.push(t)}function _T(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nm(e)):(n.next=i.next,i.next=n),e.interleaved=n,fr(t,r)}function fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var br=!1;function bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,fr(t,n)}return i=r.interleaved,i===null?(e.next=e,Nm(r)):(e.next=i.next,i.next=e),r.interleaved=e,fr(t,n)}function zu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_m(t,n)}}function Ev(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vc(t,e,n,r){var i=t.updateQueue;br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,C=a;switch(p=e,_=n,C.tag){case 1:if(w=C.payload,typeof w=="function"){f=w.call(_,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=C.payload,p=typeof w=="function"?w.call(_,f,p):w,p==null)break e;f=je({},f,p);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=f):h=h.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zi|=o,t.lanes=o,t.memoizedState=f}}function Tv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(W(191,i));i.call(r)}}}var Sl={},jn=fi(Sl),Ha=fi(Sl),Ga=fi(Sl);function Pi(t){if(t===Sl)throw Error(W(174));return t}function Dm(t,e){switch(ke(Ga,e),ke(Ha,t),ke(jn,Sl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vf(e,t)}Oe(jn),ke(jn,e)}function Zs(){Oe(jn),Oe(Ha),Oe(Ga)}function vT(t){Pi(Ga.current);var e=Pi(jn.current),n=Vf(e,t.type);e!==n&&(ke(Ha,t),ke(jn,n))}function Om(t){Ha.current===t&&(Oe(jn),Oe(Ha))}var Ve=fi(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qd=[];function Mm(){for(var t=0;t<qd.length;t++)qd[t]._workInProgressVersionPrimary=null;qd.length=0}var Bu=Er.ReactCurrentDispatcher,Hd=Er.ReactCurrentBatchConfig,Ui=0,Fe=null,Je=null,ot=null,Ec=!1,wa=!1,Ka=0,Sk=0;function It(){throw Error(W(321))}function Lm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Vm(t,e,n,r,i,s){if(Ui=s,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bu.current=t===null||t.memoizedState===null?Rk:kk,t=n(r,i),wa){s=0;do{if(wa=!1,Ka=0,25<=s)throw Error(W(301));s+=1,ot=Je=null,e.updateQueue=null,Bu.current=Pk,t=n(r,i)}while(wa)}if(Bu.current=Tc,e=Je!==null&&Je.next!==null,Ui=0,ot=Je=Fe=null,Ec=!1,e)throw Error(W(300));return t}function Fm(){var t=Ka!==0;return Ka=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Fe.memoizedState=ot=t:ot=ot.next=t,ot}function gn(){if(Je===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=ot===null?Fe.memoizedState:ot.next;if(e!==null)ot=e,Je=t;else{if(t===null)throw Error(W(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},ot===null?Fe.memoizedState=ot=t:ot=ot.next=t}return ot}function Qa(t,e){return typeof e=="function"?e(t):e}function Gd(t){var e=gn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Ui&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Fe.lanes|=h,zi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,kn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Fe.lanes|=s,zi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kd(t){var e=gn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kn(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wT(){}function ET(t,e){var n=Fe,r=gn(),i=e(),s=!kn(r.memoizedState,i);if(s&&(r.memoizedState=i,Bt=!0),r=r.queue,jm(ST.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,Ya(9,IT.bind(null,n,r,i,e),void 0,null),ct===null)throw Error(W(349));Ui&30||TT(n,e,i)}return i}function TT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function IT(t,e,n,r){e.value=n,e.getSnapshot=r,CT(e)&&xT(t)}function ST(t,e,n){return n(function(){CT(e)&&xT(t)})}function CT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function xT(t){var e=fr(t,1);e!==null&&xn(e,t,1,-1)}function Iv(t){var e=Ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=Ak.bind(null,Fe,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function AT(){return gn().memoizedState}function Wu(t,e,n,r){var i=Ln();Fe.flags|=t,i.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function dh(t,e,n,r){var i=gn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&Lm(r,o.deps)){i.memoizedState=Ya(e,n,s,r);return}}Fe.flags|=t,i.memoizedState=Ya(1|e,n,s,r)}function Sv(t,e){return Wu(8390656,8,t,e)}function jm(t,e){return dh(2048,8,t,e)}function RT(t,e){return dh(4,2,t,e)}function kT(t,e){return dh(4,4,t,e)}function PT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function NT(t,e,n){return n=n!=null?n.concat([t]):null,dh(4,4,PT.bind(null,e,t),n)}function Um(){}function bT(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function DT(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function OT(t,e,n){return Ui&21?(kn(n,e)||(n=jE(),Fe.lanes|=n,zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function Ck(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Hd.transition;Hd.transition={};try{t(!1),e()}finally{we=n,Hd.transition=r}}function MT(){return gn().memoizedState}function xk(t,e,n){var r=Qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},LT(t))VT(e,n);else if(n=_T(t,e,n,r),n!==null){var i=Lt();xn(n,t,r,i),FT(n,e,r)}}function Ak(t,e,n){var r=Qr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(LT(t))VT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kn(a,o)){var u=e.interleaved;u===null?(i.next=i,Nm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=_T(t,e,i,r),n!==null&&(i=Lt(),xn(n,t,r,i),FT(n,e,r))}}function LT(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function VT(t,e){wa=Ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function FT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_m(t,n)}}var Tc={readContext:mn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},Rk={readContext:mn,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:mn,useEffect:Sv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4194308,4,PT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wu(4,2,t,e)},useMemo:function(t,e){var n=Ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xk.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:Iv,useDebugValue:Um,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=Iv(!1),e=t[0];return t=Ck.bind(null,t[1]),Ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=Ln();if(Me){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),ct===null)throw Error(W(349));Ui&30||TT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sv(ST.bind(null,r,s,t),[t]),r.flags|=2048,Ya(9,IT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ln(),e=ct.identifierPrefix;if(Me){var n=nr,r=tr;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kk={readContext:mn,useCallback:bT,useContext:mn,useEffect:jm,useImperativeHandle:NT,useInsertionEffect:RT,useLayoutEffect:kT,useMemo:DT,useReducer:Gd,useRef:AT,useState:function(){return Gd(Qa)},useDebugValue:Um,useDeferredValue:function(t){var e=gn();return OT(e,Je.memoizedState,t)},useTransition:function(){var t=Gd(Qa)[0],e=gn().memoizedState;return[t,e]},useMutableSource:wT,useSyncExternalStore:ET,useId:MT,unstable_isNewReconciler:!1},Pk={readContext:mn,useCallback:bT,useContext:mn,useEffect:jm,useImperativeHandle:NT,useInsertionEffect:RT,useLayoutEffect:kT,useMemo:DT,useReducer:Kd,useRef:AT,useState:function(){return Kd(Qa)},useDebugValue:Um,useDeferredValue:function(t){var e=gn();return Je===null?e.memoizedState=t:OT(e,Je.memoizedState,t)},useTransition:function(){var t=Kd(Qa)[0],e=gn().memoizedState;return[t,e]},useMutableSource:wT,useSyncExternalStore:ET,useId:MT,unstable_isNewReconciler:!1};function wn(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ip(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fh={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=Qr(t),s=lr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Gr(t,s,i),e!==null&&(xn(e,t,i,r),zu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=Qr(t),s=lr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gr(t,s,i),e!==null&&(xn(e,t,i,r),zu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=Qr(t),i=lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Gr(t,i,r),e!==null&&(xn(e,t,r,n),zu(e,t,r))}};function Cv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,r)||!Ba(i,s):!0}function jT(t,e,n){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=mn(s):(i=qt(e)?Fi:Pt.current,r=e.contextTypes,s=(r=r!=null)?Ys(t,i):ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fh.enqueueReplaceState(e,e.state,null)}function sp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=mn(s):(s=qt(e)?Fi:Pt.current,i.context=Ys(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ip(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fh.enqueueReplaceState(i,i.state,null),vc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",r=e;do n+=iR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function op(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Nk=typeof WeakMap=="function"?WeakMap:Map;function UT(t,e,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sc||(Sc=!0,gp=r),op(t,e)},n}function zT(t,e,n){n=lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){op(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){op(t,e),typeof r!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Av(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Nk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qk.bind(null,t,e,n),e.then(t,t))}function Rv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lr(-1,1),e.tag=2,Gr(n,e,1))),n.lanes|=1),t)}var bk=Er.ReactCurrentOwner,Bt=!1;function Ot(t,e,n,r){e.child=t===null?gT(e,null,n,r):Js(e,t.child,n,r)}function Pv(t,e,n,r,i){n=n.render;var s=e.ref;return Us(e,i),r=Vm(t,e,n,r,s,i),n=Fm(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(Me&&n&&Cm(e),e.flags|=1,Ot(t,e,r,i),e.child)}function Nv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Km(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,BT(t,e,s,r,i)):(t=Gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(o,r)&&t.ref===e.ref)return pr(t,e,i)}return e.flags|=1,t=Yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function BT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ba(s,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,pr(t,e,i)}return ap(t,e,n,r,i)}function WT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Ds,Xt),Xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(Ds,Xt),Xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(Ds,Xt),Xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(Ds,Xt),Xt|=r;return Ot(t,e,i,n),e.child}function $T(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ap(t,e,n,r,i){var s=qt(n)?Fi:Pt.current;return s=Ys(e,s),Us(e,i),n=Vm(t,e,n,r,s,i),r=Fm(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(Me&&r&&Cm(e),e.flags|=1,Ot(t,e,n,i),e.child)}function bv(t,e,n,r,i){if(qt(n)){var s=!0;pc(e)}else s=!1;if(Us(e,i),e.stateNode===null)$u(t,e),jT(e,n,r),sp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=mn(c):(c=qt(n)?Fi:Pt.current,c=Ys(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&xv(e,o,r,c),br=!1;var p=e.memoizedState;o.state=p,vc(e,r,o,i),u=e.memoizedState,a!==r||p!==u||$t.current||br?(typeof h=="function"&&(ip(e,n,h,r),u=e.memoizedState),(a=br||Cv(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:wn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=mn(u):(u=qt(n)?Fi:Pt.current,u=Ys(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&xv(e,o,r,u),br=!1,p=e.memoizedState,o.state=p,vc(e,r,o,i);var w=e.memoizedState;a!==f||p!==w||$t.current||br?(typeof _=="function"&&(ip(e,n,_,r),w=e.memoizedState),(c=br||Cv(e,n,c,r,p,w,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return lp(t,e,n,r,s,i)}function lp(t,e,n,r,i,s){$T(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_v(e,n,!1),pr(t,e,s);r=e.stateNode,bk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=r.state,i&&_v(e,n,!0),e.child}function qT(t){var e=t.stateNode;e.pendingContext?gv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gv(t,e.context,!1),Dm(t,e.containerInfo)}function Dv(t,e,n,r,i){return Xs(),Am(i),e.flags|=256,Ot(t,e,n,r),e.child}var up={dehydrated:null,treeContext:null,retryLane:0};function cp(t){return{baseLanes:t,cachePool:null,transitions:null}}function HT(t,e,n){var r=e.pendingProps,i=Ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Ve,i&1),t===null)return np(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gh(o,r,0,null),t=Mi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cp(n),e.memoizedState=up,t):zm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Dk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Yr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Yr(a,s):(s=Mi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=up,r}return s=t.child,t=s.sibling,r=Yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zm(t,e){return e=gh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Iu(t,e,n,r){return r!==null&&Am(r),Js(e,t.child,null,n),t=zm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qd(Error(W(422))),Iu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gh({mode:"visible",children:r.children},i,0,null),s=Mi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Js(e,t.child,null,o),e.child.memoizedState=cp(o),e.memoizedState=up,s);if(!(e.mode&1))return Iu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(W(419)),r=Qd(s,r,void 0),Iu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Bt||a){if(r=ct,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fr(t,i),xn(r,t,i,-1))}return Gm(),r=Qd(Error(W(421))),Iu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Hk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Zt=Hr(i.nextSibling),tn=e,Me=!0,Tn=null,t!==null&&(cn[hn++]=tr,cn[hn++]=nr,cn[hn++]=ji,tr=t.id,nr=t.overflow,ji=e),e=zm(e,r.children),e.flags|=4096,e)}function Ov(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rp(t.return,e,n)}function Yd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function GT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ot(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ov(t,n,e);else if(t.tag===19)Ov(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yd(e,!0,n,null,s);break;case"together":Yd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $u(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=Yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ok(t,e,n){switch(e.tag){case 3:qT(e),Xs();break;case 5:vT(e);break;case 1:qt(e.type)&&pc(e);break;case 4:Dm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(_c,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?HT(t,e,n):(ke(Ve,Ve.current&1),t=pr(t,e,n),t!==null?t.sibling:null);ke(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return GT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,WT(t,e,n)}return pr(t,e,n)}var KT,hp,QT,YT;KT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hp=function(){};QT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pi(jn.current);var s=null;switch(n){case"input":i=Df(t,i),r=Df(t,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=Lf(t,i),r=Lf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=dc)}Ff(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&be("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};YT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zo(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Mk(t,e,n){var r=e.pendingProps;switch(xm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return qt(e.type)&&fc(),St(e),null;case 3:return r=e.stateNode,Zs(),Oe($t),Oe(Pt),Mm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Eu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(vp(Tn),Tn=null))),hp(t,e),St(e),null;case 5:Om(e);var i=Pi(Ga.current);if(n=e.type,t!==null&&e.stateNode!=null)QT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return St(e),null}if(t=Pi(jn.current),Eu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Vn]=e,r[qa]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<ha.length;i++)be(ha[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Wy(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":qy(r,s),be("invalid",r)}Ff(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wu(r.textContent,a,t),i=["children",""+a]):Ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":du(r),$y(r,s,!0);break;case"textarea":du(r),Hy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=dc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=SE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vn]=e,t[qa]=r,KT(t,e,!1,!1),e.stateNode=t;e:{switch(o=jf(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<ha.length;i++)be(ha[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":Wy(t,r),i=Df(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),be("invalid",t);break;case"textarea":qy(t,r),i=Lf(t,r),be("invalid",t);break;default:i=r}Ff(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?AE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&CE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&La(t,u):typeof u=="number"&&La(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?u!=null&&s==="onScroll"&&be("scroll",t):u!=null&&hm(t,s,u,o))}switch(n){case"input":du(t),$y(t,r,!1);break;case"textarea":du(t),Hy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ni(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ls(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=dc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)YT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=Pi(Ga.current),Pi(jn.current),Eu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Vn]=e,(s=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:wu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vn]=e,e.stateNode=r}return St(e),null;case 13:if(Oe(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&Zt!==null&&e.mode&1&&!(e.flags&128))pT(),Xs(),e.flags|=98560,s=!1;else if(s=Eu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(W(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(W(317));s[Vn]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else Tn!==null&&(vp(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?tt===0&&(tt=3):Gm())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return Zs(),hp(t,e),t===null&&Wa(e.stateNode.containerInfo),St(e),null;case 10:return Pm(e.type._context),St(e),null;case 17:return qt(e.type)&&fc(),St(e),null;case 19:if(Oe(Ve),s=e.memoizedState,s===null)return St(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zo(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wc(t),o!==null){for(e.flags|=128,Zo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Ve,Ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>to&&(e.flags|=128,r=!0,Zo(s,!1),e.lanes=4194304)}else{if(!r)if(t=wc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Me)return St(e),null}else 2*He()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,r=!0,Zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Ve.current,ke(Ve,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return Hm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xt&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function Lk(t,e){switch(xm(e),e.tag){case 1:return qt(e.type)&&fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),Oe($t),Oe(Pt),Mm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Om(e),null;case 13:if(Oe(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Oe(Ve),null;case 4:return Zs(),null;case 10:return Pm(e.type._context),null;case 22:case 23:return Hm(),null;case 24:return null;default:return null}}var Su=!1,At=!1,Vk=typeof WeakSet=="function"?WeakSet:Set,Q=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function dp(t,e,n){try{n()}catch(r){Be(t,e,r)}}var Mv=!1;function Fk(t,e){if(Qf=uc,t=tT(),Sm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)p=f,f=_;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(_=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yf={focusedElem:t,selectionRange:n},uc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var C=w.memoizedProps,N=w.memoizedState,T=e.stateNode,E=T.getSnapshotBeforeUpdate(e.elementType===e.type?C:wn(e.type,C),N);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(P){Be(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return w=Mv,Mv=!1,w}function Ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dp(e,n,s)}i=i.next}while(i!==r)}}function ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function XT(t){var e=t.alternate;e!==null&&(t.alternate=null,XT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vn],delete e[qa],delete e[Zf],delete e[wk],delete e[Ek])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function JT(t){return t.tag===5||t.tag===3||t.tag===4}function Lv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||JT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dc));else if(r!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}function mp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mp(t,e,n),t=t.sibling;t!==null;)mp(t,e,n),t=t.sibling}var ft=null,En=!1;function kr(t,e,n){for(n=n.child;n!==null;)ZT(t,e,n),n=n.sibling}function ZT(t,e,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(oh,n)}catch{}switch(n.tag){case 5:At||bs(n,e);case 6:var r=ft,i=En;ft=null,kr(t,e,n),ft=r,En=i,ft!==null&&(En?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(En?(t=ft,n=n.stateNode,t.nodeType===8?Wd(t.parentNode,n):t.nodeType===1&&Wd(t,n),Ua(t)):Wd(ft,n.stateNode));break;case 4:r=ft,i=En,ft=n.stateNode.containerInfo,En=!0,kr(t,e,n),ft=r,En=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dp(n,e,o),i=i.next}while(i!==r)}kr(t,e,n);break;case 1:if(!At&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Be(n,e,a)}kr(t,e,n);break;case 21:kr(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,kr(t,e,n),At=r):kr(t,e,n);break;default:kr(t,e,n)}}function Vv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vk),e.forEach(function(r){var i=Gk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,En=!1;break e;case 3:ft=a.stateNode.containerInfo,En=!0;break e;case 4:ft=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(ft===null)throw Error(W(160));ZT(s,o,i),ft=null,En=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)eI(e,t),e=e.sibling}function eI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vn(e,t),Mn(t),r&4){try{Ea(3,t,t.return),ph(3,t)}catch(C){Be(t,t.return,C)}try{Ea(5,t,t.return)}catch(C){Be(t,t.return,C)}}break;case 1:vn(e,t),Mn(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(vn(e,t),Mn(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var i=t.stateNode;try{La(i,"")}catch(C){Be(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&TE(i,s),jf(a,o);var c=jf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?AE(i,f):h==="dangerouslySetInnerHTML"?CE(i,f):h==="children"?La(i,f):hm(i,h,f,c)}switch(a){case"input":Of(i,s);break;case"textarea":IE(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ls(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ls(i,!!s.multiple,s.defaultValue,!0):Ls(i,!!s.multiple,s.multiple?[]:"",!1))}i[qa]=s}catch(C){Be(t,t.return,C)}}break;case 6:if(vn(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(W(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Be(t,t.return,C)}}break;case 3:if(vn(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(C){Be(t,t.return,C)}break;case 4:vn(e,t),Mn(t);break;case 13:vn(e,t),Mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($m=He())),r&4&&Vv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(At=(c=At)||h,vn(e,t),At=c):vn(e,t),Mn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(f=Q=h;Q!==null;){switch(p=Q,_=p.child,p.tag){case 0:case 11:case 14:case 15:Ea(4,p,p.return);break;case 1:bs(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(C){Be(r,n,C)}}break;case 5:bs(p,p.return);break;case 22:if(p.memoizedState!==null){jv(f);continue}}_!==null?(_.return=p,Q=_):jv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xE("display",o))}catch(C){Be(t,t.return,C)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){Be(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(e,t),Mn(t),r&4&&Vv(t);break;case 21:break;default:vn(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(JT(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(La(i,""),r.flags&=-33);var s=Lv(t);mp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lv(t);pp(t,a,o);break;default:throw Error(W(161))}}catch(u){Be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jk(t,e,n){Q=t,tI(t)}function tI(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Su;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||At;a=Su;var c=At;if(Su=o,(At=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?Uv(i):u!==null?(u.return=o,Q=u):Uv(i);for(;s!==null;)Q=s,tI(s),s=s.sibling;Q=i,Su=a,At=c}Fv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Fv(t)}}function Fv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ua(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}At||e.flags&512&&fp(e)}catch(p){Be(e,e.return,p)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function jv(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Uv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ph(4,e)}catch(u){Be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Be(e,i,u)}}var s=e.return;try{fp(e)}catch(u){Be(e,s,u)}break;case 5:var o=e.return;try{fp(e)}catch(u){Be(e,o,u)}}}catch(u){Be(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var Uk=Math.ceil,Ic=Er.ReactCurrentDispatcher,Bm=Er.ReactCurrentOwner,pn=Er.ReactCurrentBatchConfig,de=0,ct=null,Ke=null,mt=0,Xt=0,Ds=fi(0),tt=0,Xa=null,zi=0,mh=0,Wm=0,Ta=null,Ut=null,$m=0,to=1/0,Xn=null,Sc=!1,gp=null,Kr=null,Cu=!1,Ur=null,Cc=0,Ia=0,_p=null,qu=-1,Hu=0;function Lt(){return de&6?He():qu!==-1?qu:qu=He()}function Qr(t){return t.mode&1?de&2&&mt!==0?mt&-mt:Ik.transition!==null?(Hu===0&&(Hu=jE()),Hu):(t=we,t!==0||(t=window.event,t=t===void 0?16:HE(t.type)),t):1}function xn(t,e,n,r){if(50<Ia)throw Ia=0,_p=null,Error(W(185));El(t,n,r),(!(de&2)||t!==ct)&&(t===ct&&(!(de&2)&&(mh|=n),tt===4&&Or(t,mt)),Ht(t,r),n===1&&de===0&&!(e.mode&1)&&(to=He()+500,hh&&pi()))}function Ht(t,e){var n=t.callbackNode;IR(t,e);var r=lc(t,t===ct?mt:0);if(r===0)n!==null&&Qy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qy(n),e===1)t.tag===0?Tk(zv.bind(null,t)):hT(zv.bind(null,t)),yk(function(){!(de&6)&&pi()}),n=null;else{switch(UE(r)){case 1:n=gm;break;case 4:n=VE;break;case 16:n=ac;break;case 536870912:n=FE;break;default:n=ac}n=uI(n,nI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nI(t,e){if(qu=-1,Hu=0,de&6)throw Error(W(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=lc(t,t===ct?mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xc(t,r);else{e=r;var i=de;de|=2;var s=iI();(ct!==t||mt!==e)&&(Xn=null,to=He()+500,Oi(t,e));do try{Wk();break}catch(a){rI(t,a)}while(!0);km(),Ic.current=s,de=i,Ke!==null?e=0:(ct=null,mt=0,e=tt)}if(e!==0){if(e===2&&(i=$f(t),i!==0&&(r=i,e=yp(t,i))),e===1)throw n=Xa,Oi(t,0),Or(t,r),Ht(t,He()),n;if(e===6)Or(t,r);else{if(i=t.current.alternate,!(r&30)&&!zk(i)&&(e=xc(t,r),e===2&&(s=$f(t),s!==0&&(r=s,e=yp(t,s))),e===1))throw n=Xa,Oi(t,0),Or(t,r),Ht(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:Si(t,Ut,Xn);break;case 3:if(Or(t,r),(r&130023424)===r&&(e=$m+500-He(),10<e)){if(lc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jf(Si.bind(null,t,Ut,Xn),e);break}Si(t,Ut,Xn);break;case 4:if(Or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uk(r/1960))-r,10<r){t.timeoutHandle=Jf(Si.bind(null,t,Ut,Xn),r);break}Si(t,Ut,Xn);break;case 5:Si(t,Ut,Xn);break;default:throw Error(W(329))}}}return Ht(t,He()),t.callbackNode===n?nI.bind(null,t):null}function yp(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(Oi(t,e).flags|=256),t=xc(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&vp(e)),t}function vp(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function zk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Or(t,e){for(e&=~Wm,e&=~mh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function zv(t){if(de&6)throw Error(W(327));zs();var e=lc(t,0);if(!(e&1))return Ht(t,He()),null;var n=xc(t,e);if(t.tag!==0&&n===2){var r=$f(t);r!==0&&(e=r,n=yp(t,r))}if(n===1)throw n=Xa,Oi(t,0),Or(t,e),Ht(t,He()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Si(t,Ut,Xn),Ht(t,He()),null}function qm(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(to=He()+500,hh&&pi())}}function Bi(t){Ur!==null&&Ur.tag===0&&!(de&6)&&zs();var e=de;de|=1;var n=pn.transition,r=we;try{if(pn.transition=null,we=1,t)return t()}finally{we=r,pn.transition=n,de=e,!(de&6)&&pi()}}function Hm(){Xt=Ds.current,Oe(Ds)}function Oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_k(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(xm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fc();break;case 3:Zs(),Oe($t),Oe(Pt),Mm();break;case 5:Om(r);break;case 4:Zs();break;case 13:Oe(Ve);break;case 19:Oe(Ve);break;case 10:Pm(r.type._context);break;case 22:case 23:Hm()}n=n.return}if(ct=t,Ke=t=Yr(t.current,null),mt=Xt=e,tt=0,Xa=null,Wm=mh=zi=0,Ut=Ta=null,ki!==null){for(e=0;e<ki.length;e++)if(n=ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ki=null}return t}function rI(t,e){do{var n=Ke;try{if(km(),Bu.current=Tc,Ec){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ec=!1}if(Ui=0,ot=Je=Fe=null,wa=!1,Ka=0,Bm.current=null,n===null||n.return===null){tt=1,Xa=e,Ke=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=mt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Rv(o);if(_!==null){_.flags&=-257,kv(_,o,a,s,e),_.mode&1&&Av(s,c,e),e=_,u=c;var w=e.updateQueue;if(w===null){var C=new Set;C.add(u),e.updateQueue=C}else w.add(u);break e}else{if(!(e&1)){Av(s,c,e),Gm();break e}u=Error(W(426))}}else if(Me&&a.mode&1){var N=Rv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),kv(N,o,a,s,e),Am(eo(u,a));break e}}s=u=eo(u,a),tt!==4&&(tt=2),Ta===null?Ta=[s]:Ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=UT(s,u,e);Ev(s,T);break e;case 1:a=u;var E=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Kr===null||!Kr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=zT(s,a,e);Ev(s,P);break e}}s=s.return}while(s!==null)}oI(n)}catch(O){e=O,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function iI(){var t=Ic.current;return Ic.current=Tc,t===null?Tc:t}function Gm(){(tt===0||tt===3||tt===2)&&(tt=4),ct===null||!(zi&268435455)&&!(mh&268435455)||Or(ct,mt)}function xc(t,e){var n=de;de|=2;var r=iI();(ct!==t||mt!==e)&&(Xn=null,Oi(t,e));do try{Bk();break}catch(i){rI(t,i)}while(!0);if(km(),de=n,Ic.current=r,Ke!==null)throw Error(W(261));return ct=null,mt=0,tt}function Bk(){for(;Ke!==null;)sI(Ke)}function Wk(){for(;Ke!==null&&!pR();)sI(Ke)}function sI(t){var e=lI(t.alternate,t,Xt);t.memoizedProps=t.pendingProps,e===null?oI(t):Ke=e,Bm.current=null}function oI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Lk(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Ke=null;return}}else if(n=Mk(n,e,Xt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);tt===0&&(tt=5)}function Si(t,e,n){var r=we,i=pn.transition;try{pn.transition=null,we=1,$k(t,e,n,r)}finally{pn.transition=i,we=r}return null}function $k(t,e,n,r){do zs();while(Ur!==null);if(de&6)throw Error(W(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(SR(t,s),t===ct&&(Ke=ct=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cu||(Cu=!0,uI(ac,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pn.transition,pn.transition=null;var o=we;we=1;var a=de;de|=4,Bm.current=null,Fk(t,n),eI(n,t),ck(Yf),uc=!!Qf,Yf=Qf=null,t.current=n,jk(n),mR(),de=a,we=o,pn.transition=s}else t.current=n;if(Cu&&(Cu=!1,Ur=t,Cc=i),s=t.pendingLanes,s===0&&(Kr=null),yR(n.stateNode),Ht(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sc)throw Sc=!1,t=gp,gp=null,t;return Cc&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===_p?Ia++:(Ia=0,_p=t):Ia=0,pi(),null}function zs(){if(Ur!==null){var t=UE(Cc),e=pn.transition,n=we;try{if(pn.transition=null,we=16>t?16:t,Ur===null)var r=!1;else{if(t=Ur,Ur=null,Cc=0,de&6)throw Error(W(331));var i=de;for(de|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Q=c;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:Ea(8,h,s)}var f=h.child;if(f!==null)f.return=h,Q=f;else for(;Q!==null;){h=Q;var p=h.sibling,_=h.return;if(XT(h),h===c){Q=null;break}if(p!==null){p.return=_,Q=p;break}Q=_}}}var w=s.alternate;if(w!==null){var C=w.child;if(C!==null){w.child=null;do{var N=C.sibling;C.sibling=null,C=N}while(C!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,Q=T;break e}Q=s.return}}var E=t.current;for(Q=E;Q!==null;){o=Q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Q=x;else e:for(o=E;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ph(9,a)}}catch(O){Be(a,a.return,O)}if(a===o){Q=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,Q=P;break e}Q=a.return}}if(de=i,pi(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(oh,t)}catch{}r=!0}return r}finally{we=n,pn.transition=e}}return!1}function Bv(t,e,n){e=eo(n,e),e=UT(t,e,1),t=Gr(t,e,1),e=Lt(),t!==null&&(El(t,1,e),Ht(t,e))}function Be(t,e,n){if(t.tag===3)Bv(t,t,n);else for(;e!==null;){if(e.tag===3){Bv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kr===null||!Kr.has(r))){t=eo(n,t),t=zT(e,t,1),e=Gr(e,t,1),t=Lt(),e!==null&&(El(e,1,t),Ht(e,t));break}}e=e.return}}function qk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(mt&n)===n&&(tt===4||tt===3&&(mt&130023424)===mt&&500>He()-$m?Oi(t,0):Wm|=n),Ht(t,e)}function aI(t,e){e===0&&(t.mode&1?(e=mu,mu<<=1,!(mu&130023424)&&(mu=4194304)):e=1);var n=Lt();t=fr(t,e),t!==null&&(El(t,e,n),Ht(t,n))}function Hk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aI(t,n)}function Gk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),aI(t,n)}var lI;lI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,Ok(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,Me&&e.flags&1048576&&dT(e,gc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$u(t,e),t=e.pendingProps;var i=Ys(e,Pt.current);Us(e,n),i=Vm(null,e,r,t,i,n);var s=Fm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,pc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bm(e),i.updater=fh,e.stateNode=i,i._reactInternals=e,sp(e,r,t,n),e=lp(null,e,r,!0,s,n)):(e.tag=0,Me&&s&&Cm(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($u(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Qk(r),t=wn(r,t),i){case 0:e=ap(null,e,r,t,n);break e;case 1:e=bv(null,e,r,t,n);break e;case 11:e=Pv(null,e,r,t,n);break e;case 14:e=Nv(null,e,r,wn(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),ap(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),bv(t,e,r,i,n);case 3:e:{if(qT(e),t===null)throw Error(W(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yT(t,e),vc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=eo(Error(W(423)),e),e=Dv(t,e,r,n,i);break e}else if(r!==i){i=eo(Error(W(424)),e),e=Dv(t,e,r,n,i);break e}else for(Zt=Hr(e.stateNode.containerInfo.firstChild),tn=e,Me=!0,Tn=null,n=gT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xs(),r===i){e=pr(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return vT(e),t===null&&np(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xf(r,i)?o=null:s!==null&&Xf(r,s)&&(e.flags|=32),$T(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&np(e),null;case 13:return HT(t,e,n);case 4:return Dm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Js(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Pv(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(_c,r._currentValue),r._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===i.children&&!$t.current){e=pr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=lr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),rp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(W(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Us(e,n),i=mn(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=wn(r,e.pendingProps),i=wn(r.type,i),Nv(t,e,r,i,n);case 15:return BT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),$u(t,e),e.tag=1,qt(r)?(t=!0,pc(e)):t=!1,Us(e,n),jT(e,r,i),sp(e,r,i,n),lp(null,e,r,!0,t,n);case 19:return GT(t,e,n);case 22:return WT(t,e,n)}throw Error(W(156,e.tag))};function uI(t,e){return LE(t,e)}function Kk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,e,n,r){return new Kk(t,e,n,r)}function Km(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qk(t){if(typeof t=="function")return Km(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fm)return 11;if(t===pm)return 14}return 2}function Yr(t,e){var n=t.alternate;return n===null?(n=dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Km(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return Mi(n.children,i,s,e);case dm:o=8,i|=8;break;case kf:return t=dn(12,n,e,i|2),t.elementType=kf,t.lanes=s,t;case Pf:return t=dn(13,n,e,i),t.elementType=Pf,t.lanes=s,t;case Nf:return t=dn(19,n,e,i),t.elementType=Nf,t.lanes=s,t;case vE:return gh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _E:o=10;break e;case yE:o=9;break e;case fm:o=11;break e;case pm:o=14;break e;case Nr:o=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=dn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mi(t,e,n,r){return t=dn(7,t,r,e),t.lanes=n,t}function gh(t,e,n,r){return t=dn(22,t,r,e),t.elementType=vE,t.lanes=n,t.stateNode={isHidden:!1},t}function Xd(t,e,n){return t=dn(6,t,null,e),t.lanes=n,t}function Jd(t,e,n){return e=dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qm(t,e,n,r,i,s,o,a,u){return t=new Yk(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bm(s),t}function Xk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cI(t){if(!t)return ri;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(qt(n))return cT(t,n,e)}return e}function hI(t,e,n,r,i,s,o,a,u){return t=Qm(n,r,!0,t,i,s,o,a,u),t.context=cI(null),n=t.current,r=Lt(),i=Qr(n),s=lr(r,i),s.callback=e??null,Gr(n,s,i),t.current.lanes=i,El(t,i,r),Ht(t,r),t}function _h(t,e,n,r){var i=e.current,s=Lt(),o=Qr(i);return n=cI(n),e.context===null?e.context=n:e.pendingContext=n,e=lr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Gr(i,e,o),t!==null&&(xn(t,i,o,s),zu(t,i,o)),o}function Ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ym(t,e){Wv(t,e),(t=t.alternate)&&Wv(t,e)}function Jk(){return null}var dI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xm(t){this._internalRoot=t}yh.prototype.render=Xm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));_h(t,e,null,null)};yh.prototype.unmount=Xm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bi(function(){_h(null,t,null,null)}),e[dr]=null}};function yh(t){this._internalRoot=t}yh.prototype.unstable_scheduleHydration=function(t){if(t){var e=WE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&qE(t)}};function Jm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $v(){}function Zk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ac(o);s.call(c)}}var o=hI(e,r,t,0,null,!1,!1,"",$v);return t._reactRootContainer=o,t[dr]=o.current,Wa(t.nodeType===8?t.parentNode:t),Bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ac(u);a.call(c)}}var u=Qm(t,0,!1,null,null,!1,!1,"",$v);return t._reactRootContainer=u,t[dr]=u.current,Wa(t.nodeType===8?t.parentNode:t),Bi(function(){_h(e,u,n,r)}),u}function wh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Ac(o);a.call(u)}}_h(e,o,t,i)}else o=Zk(n,e,t,i,r);return Ac(o)}zE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(_m(e,n|1),Ht(e,He()),!(de&6)&&(to=He()+500,pi()))}break;case 13:Bi(function(){var r=fr(t,1);if(r!==null){var i=Lt();xn(r,t,1,i)}}),Ym(t,1)}};ym=function(t){if(t.tag===13){var e=fr(t,134217728);if(e!==null){var n=Lt();xn(e,t,134217728,n)}Ym(t,134217728)}};BE=function(t){if(t.tag===13){var e=Qr(t),n=fr(t,e);if(n!==null){var r=Lt();xn(n,t,e,r)}Ym(t,e)}};WE=function(){return we};$E=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};zf=function(t,e,n){switch(e){case"input":if(Of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ch(r);if(!i)throw Error(W(90));EE(r),Of(r,i)}}}break;case"textarea":IE(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};PE=qm;NE=Bi;var e1={usingClientEntryPoint:!1,Events:[Il,As,ch,RE,kE,qm]},ea={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t1={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=OE(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||Jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{oh=xu.inject(t1),Fn=xu}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jm(e))throw Error(W(200));return Xk(t,e,null,n)};sn.createRoot=function(t,e){if(!Jm(t))throw Error(W(299));var n=!1,r="",i=dI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qm(t,1,!1,null,null,n,!1,r,i),t[dr]=e.current,Wa(t.nodeType===8?t.parentNode:t),new Xm(e)};sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=OE(e),t=t===null?null:t.stateNode,t};sn.flushSync=function(t){return Bi(t)};sn.hydrate=function(t,e,n){if(!vh(e))throw Error(W(200));return wh(null,t,e,!0,n)};sn.hydrateRoot=function(t,e,n){if(!Jm(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hI(e,null,t,1,n??null,i,!1,s,o),t[dr]=e.current,Wa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yh(e)};sn.render=function(t,e,n){if(!vh(e))throw Error(W(200));return wh(null,t,e,!1,n)};sn.unmountComponentAtNode=function(t){if(!vh(t))throw Error(W(40));return t._reactRootContainer?(Bi(function(){wh(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};sn.unstable_batchedUpdates=qm;sn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vh(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return wh(t,e,n,!1,r)};sn.version="18.3.1-next-f1338f8080-20240426";function fI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fI)}catch(t){console.error(t)}}fI(),fE.exports=sn;var n1=fE.exports,qv=n1;Af.createRoot=qv.createRoot,Af.hydrateRoot=qv.hydrateRoot;var Hv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=function(t,e){if(!t)throw To(e)},To=function(t){return new Error("Firebase Database ("+pI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},r1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(n[h],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new i1;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gI=function(t){const e=mI(t);return Zm.encodeByteArray(e,!0)},Rc=function(t){return gI(t).replace(/\./g,"")},kc=function(t){try{return Zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){return _I(void 0,t)}function _I(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!o1(n)||(t[n]=_I(t[n],e[n]));return t}function o1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=()=>a1().__FIREBASE_DEFAULTS__,u1=()=>{if(typeof process>"u"||typeof Hv>"u")return;const t=Hv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kc(t[1]);return e&&JSON.parse(e)},Eh=()=>{try{return l1()||u1()||c1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yI=t=>{var e,n;return(n=(e=Eh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vI=t=>{const e=yI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wI=()=>{var t;return(t=Eh())===null||t===void 0?void 0:t.config},EI=t=>{var e;return(e=Eh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rc(JSON.stringify(n)),Rc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function h1(){var t;const e=(t=Eh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function d1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function f1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function II(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function p1(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m1(){return pI.NODE_ADMIN===!0}function g1(){return!h1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _1(){try{return typeof indexedDB=="object"}catch{return!1}}function y1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="FirebaseError";class Tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=v1,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xl.prototype.create)}}class xl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?w1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tr(i,a,r)}}function w1(t,e){return t.replace(E1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const E1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return JSON.parse(t)}function et(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ja(kc(s[0])||""),n=Ja(kc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},T1=function(t){const e=SI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},I1=function(t){const e=SI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function no(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function wp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Za(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gv(s)&&Gv(o)){if(!Za(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function C1(t,e){const n=new x1(t,e);return n.subscribe.bind(n)}class x1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");A1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zd),i.error===void 0&&(i.error=Zd),i.complete===void 0&&(i.complete=Zd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zd(){}function Th(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,q(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ih=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class ii{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N1(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ci){return this.instances.has(e)}getOptions(e=Ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:P1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ci){return this.component?this.component.multipleInstances?e:Ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P1(t){return t===Ci?void 0:t}function N1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const D1={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},O1=le.INFO,M1={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},L1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=M1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sh{constructor(e){this.name=e,this._logLevel=O1,this._logHandler=L1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const V1=(t,e)=>e.some(n=>t instanceof n);let Kv,Qv;function F1(){return Kv||(Kv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j1(){return Qv||(Qv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CI=new WeakMap,Ep=new WeakMap,xI=new WeakMap,ef=new WeakMap,tg=new WeakMap;function U1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CI.set(n,t)}).catch(()=>{}),tg.set(e,t),e}function z1(t){if(Ep.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ep.set(t,e)}let Tp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ep.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function B1(t){Tp=t(Tp)}function W1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tf(this),e,...n);return xI.set(r,e.sort?e.sort():[e]),Xr(r)}:j1().includes(t)?function(...e){return t.apply(tf(this),e),Xr(CI.get(this))}:function(...e){return Xr(t.apply(tf(this),e))}}function $1(t){return typeof t=="function"?W1(t):(t instanceof IDBTransaction&&z1(t),V1(t,F1())?new Proxy(t,Tp):t)}function Xr(t){if(t instanceof IDBRequest)return U1(t);if(ef.has(t))return ef.get(t);const e=$1(t);return e!==t&&(ef.set(t,e),tg.set(e,t)),e}const tf=t=>tg.get(t);function q1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Xr(o.result),u.oldVersion,u.newVersion,Xr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const H1=["get","getKey","getAll","getAllKeys","count"],G1=["put","add","delete","clear"],nf=new Map;function Yv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=G1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||H1.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return nf.set(e,s),s}B1(t=>({...t,get:(e,n,r)=>Yv(e,n)||t.get(e,n,r),has:(e,n)=>!!Yv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Q1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Q1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ip="@firebase/app",Xv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Sh("@firebase/app"),Y1="@firebase/app-compat",X1="@firebase/analytics-compat",J1="@firebase/analytics",Z1="@firebase/app-check-compat",eP="@firebase/app-check",tP="@firebase/auth",nP="@firebase/auth-compat",rP="@firebase/database",iP="@firebase/data-connect",sP="@firebase/database-compat",oP="@firebase/functions",aP="@firebase/functions-compat",lP="@firebase/installations",uP="@firebase/installations-compat",cP="@firebase/messaging",hP="@firebase/messaging-compat",dP="@firebase/performance",fP="@firebase/performance-compat",pP="@firebase/remote-config",mP="@firebase/remote-config-compat",gP="@firebase/storage",_P="@firebase/storage-compat",yP="@firebase/firestore",vP="@firebase/vertexai-preview",wP="@firebase/firestore-compat",EP="firebase",TP="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="[DEFAULT]",IP={[Ip]:"fire-core",[Y1]:"fire-core-compat",[J1]:"fire-analytics",[X1]:"fire-analytics-compat",[eP]:"fire-app-check",[Z1]:"fire-app-check-compat",[tP]:"fire-auth",[nP]:"fire-auth-compat",[rP]:"fire-rtdb",[iP]:"fire-data-connect",[sP]:"fire-rtdb-compat",[oP]:"fire-fn",[aP]:"fire-fn-compat",[lP]:"fire-iid",[uP]:"fire-iid-compat",[cP]:"fire-fcm",[hP]:"fire-fcm-compat",[dP]:"fire-perf",[fP]:"fire-perf-compat",[pP]:"fire-rc",[mP]:"fire-rc-compat",[gP]:"fire-gcs",[_P]:"fire-gcs-compat",[yP]:"fire-fst",[wP]:"fire-fst-compat",[vP]:"fire-vertex","fire-js":"fire-js",[EP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Map,SP=new Map,Cp=new Map;function Jv(t,e){try{t.container.addComponent(e)}catch(n){mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wi(t){const e=t.name;if(Cp.has(e))return mr.debug(`There were multiple attempts to register component ${e}.`),!1;Cp.set(e,t);for(const n of el.values())Jv(n,t);for(const n of SP.values())Jv(n,t);return!0}function Ch(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jr=new xl("app","Firebase",CP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=TP;function AI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jr.create("bad-app-name",{appName:String(i)});if(n||(n=wI()),!n)throw Jr.create("no-options");const s=el.get(i);if(s){if(Za(n,s.options)&&Za(r,s.config))return s;throw Jr.create("duplicate-app",{appName:i})}const o=new b1(i);for(const u of Cp.values())o.addComponent(u);const a=new xP(n,r,o);return el.set(i,a),a}function ng(t=Sp){const e=el.get(t);if(!e&&t===Sp&&wI())return AI();if(!e)throw Jr.create("no-app",{appName:t});return e}function AP(){return Array.from(el.values())}function Un(t,e,n){var r;let i=(r=IP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mr.warn(a.join(" "));return}Wi(new ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="firebase-heartbeat-database",kP=1,tl="firebase-heartbeat-store";let rf=null;function RI(){return rf||(rf=q1(RP,kP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(tl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jr.create("idb-open",{originalErrorMessage:t.message})})),rf}async function PP(t){try{const n=(await RI()).transaction(tl),r=await n.objectStore(tl).get(kI(t));return await n.done,r}catch(e){if(e instanceof Tr)mr.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mr.warn(n.message)}}}async function Zv(t,e){try{const r=(await RI()).transaction(tl,"readwrite");await r.objectStore(tl).put(e,kI(t)),await r.done}catch(n){if(n instanceof Tr)mr.warn(n.message);else{const r=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mr.warn(r.message)}}}function kI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=1024,bP=30*24*60*60*1e3;class DP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=e0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){mr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=e0(),{heartbeatsToSend:r,unsentEntries:i}=OP(this._heartbeatsCache.heartbeats),s=Rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return mr.warn(n),""}}}function e0(){return new Date().toISOString().substring(0,10)}function OP(t,e=NP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),t0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),t0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _1()?y1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function t0(t){return Rc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){Wi(new ii("platform-logger",e=>new K1(e),"PRIVATE")),Wi(new ii("heartbeat",e=>new DP(e),"PRIVATE")),Un(Ip,Xv,t),Un(Ip,Xv,"esm2017"),Un("fire-js","")}LP("");function rg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function PI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VP=PI,NI=new xl("auth","Firebase",PI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new Sh("@firebase/auth");function FP(t,...e){Nc.logLevel<=le.WARN&&Nc.warn(`Auth (${ss}): ${t}`,...e)}function Ku(t,...e){Nc.logLevel<=le.ERROR&&Nc.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,...e){throw sg(t,...e)}function An(t,...e){return sg(t,...e)}function ig(t,e,n){const r=Object.assign(Object.assign({},VP()),{[e]:n});return new xl("auth","Firebase",r).create(e,{appName:t.name})}function Li(t){return ig(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qn(t,"argument-error"),ig(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NI.create(t,...e)}function te(t,e,...n){if(!t)throw sg(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ku(e),new Error(e)}function gr(t,e){t||ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UP(){return n0()==="http:"||n0()==="https:"}function n0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UP()||f1()||"connection"in navigator)?navigator.onLine:!0}function BP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.shortDelay=e,this.longDelay=n,gr(n>e,"Short delay should be less than long delay!"),this.isMobile=eg()||II()}get(){return zP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t,e){gr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=new Al(3e4,6e4);function ag(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function So(t,e,n,r,i={}){return DI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Io(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return d1()||(c.referrerPolicy="no-referrer"),bI.fetch()(OI(t,t.config.apiHost,n,a),c)})}async function DI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WP),e);try{const i=new HP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Au(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Au(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Au(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Au(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ig(t,h,c);qn(t,h)}}catch(i){if(i instanceof Tr)throw i;qn(t,"network-request-failed",{message:String(i)})}}async function qP(t,e,n,r,i={}){const s=await So(t,e,n,r,i);return"mfaPendingCredential"in s&&qn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function OI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?og(t.config,i):`${t.config.apiScheme}://${i}`}class HP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),$P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Au(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=An(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){return So(t,"POST","/v1/accounts:delete",e)}async function MI(t,e){return So(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KP(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=lg(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Sa(sf(i.auth_time)),issuedAtTime:Sa(sf(i.iat)),expirationTime:Sa(sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sf(t){return Number(t)*1e3}function lg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ku("JWT malformed, contained fewer than 3 sections"),null;try{const i=kc(n);return i?JSON.parse(i):(Ku("Failed to decode base64 JWT payload"),null)}catch(i){return Ku("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function r0(t){const e=lg(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tr&&QP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sa(this.lastLoginAt),this.creationTime=Sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await nl(t,MI(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?LI(s.providerUserInfo):[],a=JP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ap(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function XP(t){const e=Se(t);await bc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function LI(t){return t.map(e=>{var{providerId:n}=e,r=rg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(t,e){const n=await DI(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=OI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eN(t,e){return So(t,"POST","/v2/accounts:revokeToken",ag(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):r0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=r0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ZP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Bs;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ap(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await nl(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KP(this,e)}reload(){return XP(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rr(this.auth.app))return Promise.reject(Li(this.auth));const e=await this.getIdToken();return await nl(this,GP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:P,isAnonymous:O,providerData:V,stsTokenManager:I}=n;te(x&&I,e,"internal-error");const v=Bs.fromJSON(this.name,I);te(typeof x=="string",e,"internal-error"),Pr(f,e.name),Pr(p,e.name),te(typeof P=="boolean",e,"internal-error"),te(typeof O=="boolean",e,"internal-error"),Pr(_,e.name),Pr(w,e.name),Pr(C,e.name),Pr(N,e.name),Pr(T,e.name),Pr(E,e.name);const S=new sr({uid:x,auth:e,email:p,emailVerified:P,displayName:f,isAnonymous:O,photoURL:w,phoneNumber:_,tenantId:C,stsTokenManager:v,createdAt:T,lastLoginAt:E});return V&&Array.isArray(V)&&(S.providerData=V.map(A=>Object.assign({},A))),N&&(S._redirectEventId=N),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bs;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?LI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Bs;a.updateFromIdToken(r);const u=new sr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ap(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new Map;function or(t){gr(t instanceof Function,"Expected a class definition");let e=i0.get(t);return e?(gr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,i0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VI.type="NONE";const s0=VI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(or(s0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||or(s0);const o=Qu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=sr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ws(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WI(e))return"Blackberry";if($I(e))return"Webos";if(jI(e))return"Safari";if((e.includes("chrome/")||UI(e))&&!e.includes("edge/"))return"Chrome";if(BI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FI(t=Nt()){return/firefox\//i.test(t)}function jI(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UI(t=Nt()){return/crios\//i.test(t)}function zI(t=Nt()){return/iemobile/i.test(t)}function BI(t=Nt()){return/android/i.test(t)}function WI(t=Nt()){return/blackberry/i.test(t)}function $I(t=Nt()){return/webos/i.test(t)}function ug(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tN(t=Nt()){var e;return ug(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nN(){return p1()&&document.documentMode===10}function qI(t=Nt()){return ug(t)||BI(t)||$I(t)||WI(t)||/windows phone/i.test(t)||zI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e=[]){let n;switch(t){case"Browser":n=o0(Nt());break;case"Worker":n=`${o0(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t,e={}){return So(t,"GET","/v2/passwordPolicy",ag(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=6;class oN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a0(this),this.idTokenSubscription=new a0(this),this.beforeStateQueue=new rN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await MI(this,{idToken:e}),r=await sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rr(this.app))return Promise.reject(Li(this));const n=e?Se(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rr(this.app)?Promise.reject(Li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rr(this.app)?Promise.reject(Li(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iN(this),n=new oN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&or(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xh(t){return Se(t)}class a0{constructor(e){this.auth=e,this.observer=null,this.addObserver=C1(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lN(t){cg=t}function uN(t){return cg.loadJS(t)}function cN(){return cg.gapiScript}function hN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t,e){const n=Ch(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Za(s,e??{}))return i;qn(i,"already-initialized")}return n.initialize({options:e})}function fN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pN(t,e,n){const r=xh(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=GI(e),{host:o,port:a}=mN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),gN()}function GI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mN(t){const e=GI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:l0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:l0(o)}}}function l0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e){return qP(t,"POST","/v1/accounts:signInWithIdp",ag(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="http://localhost";class $i extends KI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:_N,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends hg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Rl{constructor(){super("facebook.com")}static credential(e){return $i._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $i._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Rl{constructor(){super("github.com")}static credential(e){return $i._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.GITHUB_SIGN_IN_METHOD="github.com";Lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Rl{constructor(){super("twitter.com")}static credential(e,n){return $i._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=u0(r);return new ro({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=u0(r);return new ro({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function u0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Tr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Dc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Dc(e,n,r,i)}}function QI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dc._fromErrorAndOperation(t,s,e,r):s})}async function yN(t,e,n=!1){const r=await nl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ro._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(t,e,n=!1){const{auth:r}=t;if(rr(r.app))return Promise.reject(Li(r));const i="reauthenticate";try{const s=await nl(t,QI(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=lg(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),ro._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e,n=!1){if(rr(t.app))return Promise.reject(Li(t));const r="signIn",i=await QI(t,r,e),s=await ro._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function EN(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function TN(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function IN(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function SN(t){return Se(t).signOut()}const Oc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oc,"1"),this.storage.removeItem(Oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=1e3,xN=10;class XI extends YI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}XI.type="LOCAL";const AN=XI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI extends YI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}JI.type="SESSION";const ZI=JI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ah(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await RN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ah.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=dg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return window}function PN(t){zn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function NN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DN(){return eS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="firebaseLocalStorageDb",ON=1,Mc="firebaseLocalStorage",nS="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rh(t,e){return t.transaction([Mc],e?"readwrite":"readonly").objectStore(Mc)}function MN(){const t=indexedDB.deleteDatabase(tS);return new kl(t).toPromise()}function Rp(){const t=indexedDB.open(tS,ON);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mc,{keyPath:nS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mc)?e(r):(r.close(),await MN(),e(await Rp()))})})}async function c0(t,e,n){const r=Rh(t,!0).put({[nS]:e,value:n});return new kl(r).toPromise()}async function LN(t,e){const n=Rh(t,!1).get(e),r=await new kl(n).toPromise();return r===void 0?null:r.value}function h0(t,e){const n=Rh(t,!0).delete(e);return new kl(n).toPromise()}const VN=800,FN=3;class rS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ah._getInstance(DN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NN(),!this.activeServiceWorker)return;this.sender=new kN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rp();return await c0(e,Oc,"1"),await h0(e,Oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>c0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>h0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rh(i,!1).getAll();return new kl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rS.type="LOCAL";const jN=rS;new Al(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t,e){return e?or(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg extends KI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UN(t){return wN(t.auth,new fg(t),t.bypassAuthState)}function zN(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),vN(n,new fg(t),t.bypassAuthState)}async function BN(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),yN(n,new fg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UN;case"linkViaPopup":case"linkViaRedirect":return BN;case"reauthViaPopup":case"reauthViaRedirect":return zN;default:qn(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new Al(2e3,1e4);async function $N(t,e,n){if(rr(t.app))return Promise.reject(An(t,"operation-not-supported-in-this-environment"));const r=xh(t);jP(t,e,hg);const i=iS(r,n);return new Ni(r,"signInViaPopup",e,i).executeNotNull()}class Ni extends sS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ni.currentPopupAction&&Ni.currentPopupAction.cancel(),Ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=dg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WN.get())};e()}}Ni.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN="pendingRedirect",Yu=new Map;class HN extends sS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const r=await GN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GN(t,e){const n=YN(e),r=QN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function KN(t,e){Yu.set(t._key(),e)}function QN(t){return or(t._redirectPersistence)}function YN(t){return Qu(qN,t.config.apiKey,t.name)}async function XN(t,e,n=!1){if(rr(t.app))return Promise.reject(Li(t));const r=xh(t),i=iS(r,e),o=await new HN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=10*60*1e3;class ZN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JN&&this.cachedEventUids.clear(),this.cachedEventUids.has(d0(e))}saveEventToCache(e){this.cachedEventUids.add(d0(e)),this.lastProcessedEventTime=Date.now()}}function d0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e={}){return So(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rb=/^https?/;async function ib(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tb(t);for(const n of e)try{if(sb(n))return}catch{}qn(t,"unauthorized-domain")}function sb(t){const e=xp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rb.test(n))return!1;if(nb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new Al(3e4,6e4);function f0(){const t=zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ab(t){return new Promise((e,n)=>{var r,i,s;function o(){f0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{f0(),n(An(t,"network-request-failed"))},timeout:ob.get()})}if(!((i=(r=zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zn().gapi)===null||s===void 0)&&s.load)o();else{const a=hN("iframefcb");return zn()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},uN(`${cN()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function lb(t){return Xu=Xu||ab(t),Xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new Al(5e3,15e3),cb="__/auth/iframe",hb="emulator/auth/iframe",db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pb(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?og(e,hb):`https://${t.config.authDomain}/${cb}`,r={apiKey:e.apiKey,appName:t.name,v:ss},i=fb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Io(r).slice(1)}`}async function mb(t){const e=await lb(t),n=zn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:pb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:db,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=zn().setTimeout(()=>{s(o)},ub.get());function u(){zn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_b=500,yb=600,vb="_blank",wb="http://localhost";class p0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Eb(t,e,n,r=_b,i=yb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},gb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Nt().toLowerCase();n&&(a=UI(c)?vb:n),FI(c)&&(e=e||wb,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[_,w])=>`${p}${_}=${w},`,"");if(tN(c)&&a!=="_self")return Tb(e||"",a),new p0(null);const f=window.open(e||"",a,h);te(f,t,"popup-blocked");try{f.focus()}catch{}return new p0(f)}function Tb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="__/auth/handler",Sb="emulator/auth/handler",Cb=encodeURIComponent("fac");async function m0(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:i};if(e instanceof hg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Rl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${Cb}=${encodeURIComponent(u)}`:"";return`${xb(t)}?${Io(a).slice(1)}${c}`}function xb({config:t}){return t.emulator?og(t,Sb):`https://${t.authDomain}/${Ib}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="webStorageSupport";class Ab{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZI,this._completeRedirectFn=XN,this._overrideRedirectResult=KN}async _openPopup(e,n,r,i){var s;gr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await m0(e,n,r,xp(),i);return Eb(e,o,dg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await m0(e,n,r,xp(),i);return PN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mb(e),r=new ZN(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(of,{type:of},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[of];o!==void 0&&n(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ib(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qI()||jI()||ug()}}const Rb=Ab;var g0="@firebase/auth",_0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nb(t){Wi(new ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HI(t)},c=new aN(r,i,s,u);return fN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wi(new ii("auth-internal",e=>{const n=xh(e.getProvider("auth").getImmediate());return(r=>new kb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(g0,_0,Pb(t)),Un(g0,_0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=5*60,Db=EI("authIdTokenMaxAge")||bb;let y0=null;const Ob=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Db)return;const i=n==null?void 0:n.token;y0!==i&&(y0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Mb(t=ng()){const e=Ch(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dN(t,{popupRedirectResolver:Rb,persistence:[jN,AN,ZI]}),r=EI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ob(s.toString());TN(n,o,()=>o(n.currentUser)),EN(n,a=>o(a))}}const i=yI("auth");return i&&pN(n,`http://${i}`),n}function Lb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=An("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Lb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nb("Browser");var Vb="firebase",Fb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(Vb,Fb,"app");var v0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vi,aS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function S(){}S.prototype=v.prototype,I.D=v.prototype,I.prototype=new S,I.prototype.constructor=I,I.C=function(A,k,b){for(var R=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)R[Z-2]=arguments[Z];return v.prototype[k].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,S){S||(S=0);var A=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)A[k]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(k=0;16>k;++k)A[k]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=I.g[0],S=I.g[1],k=I.g[2];var b=I.g[3],R=v+(b^S&(k^b))+A[0]+3614090360&4294967295;v=S+(R<<7&4294967295|R>>>25),R=b+(k^v&(S^k))+A[1]+3905402710&4294967295,b=v+(R<<12&4294967295|R>>>20),R=k+(S^b&(v^S))+A[2]+606105819&4294967295,k=b+(R<<17&4294967295|R>>>15),R=S+(v^k&(b^v))+A[3]+3250441966&4294967295,S=k+(R<<22&4294967295|R>>>10),R=v+(b^S&(k^b))+A[4]+4118548399&4294967295,v=S+(R<<7&4294967295|R>>>25),R=b+(k^v&(S^k))+A[5]+1200080426&4294967295,b=v+(R<<12&4294967295|R>>>20),R=k+(S^b&(v^S))+A[6]+2821735955&4294967295,k=b+(R<<17&4294967295|R>>>15),R=S+(v^k&(b^v))+A[7]+4249261313&4294967295,S=k+(R<<22&4294967295|R>>>10),R=v+(b^S&(k^b))+A[8]+1770035416&4294967295,v=S+(R<<7&4294967295|R>>>25),R=b+(k^v&(S^k))+A[9]+2336552879&4294967295,b=v+(R<<12&4294967295|R>>>20),R=k+(S^b&(v^S))+A[10]+4294925233&4294967295,k=b+(R<<17&4294967295|R>>>15),R=S+(v^k&(b^v))+A[11]+2304563134&4294967295,S=k+(R<<22&4294967295|R>>>10),R=v+(b^S&(k^b))+A[12]+1804603682&4294967295,v=S+(R<<7&4294967295|R>>>25),R=b+(k^v&(S^k))+A[13]+4254626195&4294967295,b=v+(R<<12&4294967295|R>>>20),R=k+(S^b&(v^S))+A[14]+2792965006&4294967295,k=b+(R<<17&4294967295|R>>>15),R=S+(v^k&(b^v))+A[15]+1236535329&4294967295,S=k+(R<<22&4294967295|R>>>10),R=v+(k^b&(S^k))+A[1]+4129170786&4294967295,v=S+(R<<5&4294967295|R>>>27),R=b+(S^k&(v^S))+A[6]+3225465664&4294967295,b=v+(R<<9&4294967295|R>>>23),R=k+(v^S&(b^v))+A[11]+643717713&4294967295,k=b+(R<<14&4294967295|R>>>18),R=S+(b^v&(k^b))+A[0]+3921069994&4294967295,S=k+(R<<20&4294967295|R>>>12),R=v+(k^b&(S^k))+A[5]+3593408605&4294967295,v=S+(R<<5&4294967295|R>>>27),R=b+(S^k&(v^S))+A[10]+38016083&4294967295,b=v+(R<<9&4294967295|R>>>23),R=k+(v^S&(b^v))+A[15]+3634488961&4294967295,k=b+(R<<14&4294967295|R>>>18),R=S+(b^v&(k^b))+A[4]+3889429448&4294967295,S=k+(R<<20&4294967295|R>>>12),R=v+(k^b&(S^k))+A[9]+568446438&4294967295,v=S+(R<<5&4294967295|R>>>27),R=b+(S^k&(v^S))+A[14]+3275163606&4294967295,b=v+(R<<9&4294967295|R>>>23),R=k+(v^S&(b^v))+A[3]+4107603335&4294967295,k=b+(R<<14&4294967295|R>>>18),R=S+(b^v&(k^b))+A[8]+1163531501&4294967295,S=k+(R<<20&4294967295|R>>>12),R=v+(k^b&(S^k))+A[13]+2850285829&4294967295,v=S+(R<<5&4294967295|R>>>27),R=b+(S^k&(v^S))+A[2]+4243563512&4294967295,b=v+(R<<9&4294967295|R>>>23),R=k+(v^S&(b^v))+A[7]+1735328473&4294967295,k=b+(R<<14&4294967295|R>>>18),R=S+(b^v&(k^b))+A[12]+2368359562&4294967295,S=k+(R<<20&4294967295|R>>>12),R=v+(S^k^b)+A[5]+4294588738&4294967295,v=S+(R<<4&4294967295|R>>>28),R=b+(v^S^k)+A[8]+2272392833&4294967295,b=v+(R<<11&4294967295|R>>>21),R=k+(b^v^S)+A[11]+1839030562&4294967295,k=b+(R<<16&4294967295|R>>>16),R=S+(k^b^v)+A[14]+4259657740&4294967295,S=k+(R<<23&4294967295|R>>>9),R=v+(S^k^b)+A[1]+2763975236&4294967295,v=S+(R<<4&4294967295|R>>>28),R=b+(v^S^k)+A[4]+1272893353&4294967295,b=v+(R<<11&4294967295|R>>>21),R=k+(b^v^S)+A[7]+4139469664&4294967295,k=b+(R<<16&4294967295|R>>>16),R=S+(k^b^v)+A[10]+3200236656&4294967295,S=k+(R<<23&4294967295|R>>>9),R=v+(S^k^b)+A[13]+681279174&4294967295,v=S+(R<<4&4294967295|R>>>28),R=b+(v^S^k)+A[0]+3936430074&4294967295,b=v+(R<<11&4294967295|R>>>21),R=k+(b^v^S)+A[3]+3572445317&4294967295,k=b+(R<<16&4294967295|R>>>16),R=S+(k^b^v)+A[6]+76029189&4294967295,S=k+(R<<23&4294967295|R>>>9),R=v+(S^k^b)+A[9]+3654602809&4294967295,v=S+(R<<4&4294967295|R>>>28),R=b+(v^S^k)+A[12]+3873151461&4294967295,b=v+(R<<11&4294967295|R>>>21),R=k+(b^v^S)+A[15]+530742520&4294967295,k=b+(R<<16&4294967295|R>>>16),R=S+(k^b^v)+A[2]+3299628645&4294967295,S=k+(R<<23&4294967295|R>>>9),R=v+(k^(S|~b))+A[0]+4096336452&4294967295,v=S+(R<<6&4294967295|R>>>26),R=b+(S^(v|~k))+A[7]+1126891415&4294967295,b=v+(R<<10&4294967295|R>>>22),R=k+(v^(b|~S))+A[14]+2878612391&4294967295,k=b+(R<<15&4294967295|R>>>17),R=S+(b^(k|~v))+A[5]+4237533241&4294967295,S=k+(R<<21&4294967295|R>>>11),R=v+(k^(S|~b))+A[12]+1700485571&4294967295,v=S+(R<<6&4294967295|R>>>26),R=b+(S^(v|~k))+A[3]+2399980690&4294967295,b=v+(R<<10&4294967295|R>>>22),R=k+(v^(b|~S))+A[10]+4293915773&4294967295,k=b+(R<<15&4294967295|R>>>17),R=S+(b^(k|~v))+A[1]+2240044497&4294967295,S=k+(R<<21&4294967295|R>>>11),R=v+(k^(S|~b))+A[8]+1873313359&4294967295,v=S+(R<<6&4294967295|R>>>26),R=b+(S^(v|~k))+A[15]+4264355552&4294967295,b=v+(R<<10&4294967295|R>>>22),R=k+(v^(b|~S))+A[6]+2734768916&4294967295,k=b+(R<<15&4294967295|R>>>17),R=S+(b^(k|~v))+A[13]+1309151649&4294967295,S=k+(R<<21&4294967295|R>>>11),R=v+(k^(S|~b))+A[4]+4149444226&4294967295,v=S+(R<<6&4294967295|R>>>26),R=b+(S^(v|~k))+A[11]+3174756917&4294967295,b=v+(R<<10&4294967295|R>>>22),R=k+(v^(b|~S))+A[2]+718787259&4294967295,k=b+(R<<15&4294967295|R>>>17),R=S+(b^(k|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var S=v-this.blockSize,A=this.B,k=this.h,b=0;b<v;){if(k==0)for(;b<=S;)i(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<v;)if(A[k++]=I.charCodeAt(b++),k==this.blockSize){i(this,A),k=0;break}}else for(;b<v;)if(A[k++]=I[b++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var S=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=S&255,S/=256;for(this.u(I),I=Array(16),v=S=0;4>v;++v)for(var A=0;32>A;A+=8)I[S++]=this.g[v]>>>A&255;return I};function s(I,v){var S=a;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=v(I)}function o(I,v){this.h=v;for(var S=[],A=!0,k=I.length-1;0<=k;k--){var b=I[k]|0;A&&b==v||(S[k]=b,A=!1)}this.g=S}var a={};function u(I){return-128<=I&&128>I?s(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return N(c(-I));for(var v=[],S=1,A=0;I>=S;A++)v[A]=I/S|0,S*=4294967296;return new o(v,0)}function h(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return N(h(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),A=f,k=0;k<I.length;k+=8){var b=Math.min(8,I.length-k),R=parseInt(I.substring(k,k+b),v);8>b?(b=c(Math.pow(v,b)),A=A.j(b).add(c(R))):(A=A.j(S),A=A.add(c(R)))}return A}var f=u(0),p=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-N(this).m();for(var I=0,v=1,S=0;S<this.g.length;S++){var A=this.i(S);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(w(this))return"0";if(C(this))return"-"+N(this).toString(I);for(var v=c(Math.pow(I,6)),S=this,A="";;){var k=P(S,v).g;S=T(S,k.j(v));var b=((0<S.g.length?S.g[0]:S.h)>>>0).toString(I);if(S=k,w(S))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function w(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function C(I){return I.h==-1}t.l=function(I){return I=T(this,I),C(I)?-1:w(I)?0:1};function N(I){for(var v=I.g.length,S=[],A=0;A<v;A++)S[A]=~I.g[A];return new o(S,~I.h).add(p)}t.abs=function(){return C(this)?N(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),S=[],A=0,k=0;k<=v;k++){var b=A+(this.i(k)&65535)+(I.i(k)&65535),R=(b>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);A=R>>>16,b&=65535,R&=65535,S[k]=R<<16|b}return new o(S,S[S.length-1]&-2147483648?-1:0)};function T(I,v){return I.add(N(v))}t.j=function(I){if(w(this)||w(I))return f;if(C(this))return C(I)?N(this).j(N(I)):N(N(this).j(I));if(C(I))return N(this.j(N(I)));if(0>this.l(_)&&0>I.l(_))return c(this.m()*I.m());for(var v=this.g.length+I.g.length,S=[],A=0;A<2*v;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<I.g.length;k++){var b=this.i(A)>>>16,R=this.i(A)&65535,Z=I.i(k)>>>16,ve=I.i(k)&65535;S[2*A+2*k]+=R*ve,E(S,2*A+2*k),S[2*A+2*k+1]+=b*ve,E(S,2*A+2*k+1),S[2*A+2*k+1]+=R*Z,E(S,2*A+2*k+1),S[2*A+2*k+2]+=b*Z,E(S,2*A+2*k+2)}for(A=0;A<v;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=v;A<2*v;A++)S[A]=0;return new o(S,0)};function E(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function x(I,v){this.g=I,this.h=v}function P(I,v){if(w(v))throw Error("division by zero");if(w(I))return new x(f,f);if(C(I))return v=P(N(I),v),new x(N(v.g),N(v.h));if(C(v))return v=P(I,N(v)),new x(N(v.g),v.h);if(30<I.g.length){if(C(I)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var S=p,A=v;0>=A.l(I);)S=O(S),A=O(A);var k=V(S,1),b=V(A,1);for(A=V(A,2),S=V(S,2);!w(A);){var R=b.add(A);0>=R.l(I)&&(k=k.add(S),b=R),A=V(A,1),S=V(S,1)}return v=T(I,k.j(v)),new x(k,v)}for(k=f;0<=I.l(v);){for(S=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=c(S),R=b.j(v);C(R)||0<R.l(I);)S-=A,b=c(S),R=b.j(v);w(b)&&(b=p),k=k.add(b),I=T(I,R)}return new x(k,I)}t.A=function(I){return P(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)&I.i(A);return new o(S,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)|I.i(A);return new o(S,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)^I.i(A);return new o(S,this.h^I.h)};function O(I){for(var v=I.g.length+1,S=[],A=0;A<v;A++)S[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(S,I.h)}function V(I,v){var S=v>>5;v%=32;for(var A=I.g.length-S,k=[],b=0;b<A;b++)k[b]=0<v?I.i(b+S)>>>v|I.i(b+S+1)<<32-v:I.i(b+S);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,aS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Vi=o}).apply(typeof v0<"u"?v0:typeof self<"u"?self:typeof window<"u"?window:{});var Ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lS,da,uS,Ju,kp,cS,hS,dS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ru=="object"&&Ru];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var g=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var D=l[y];if(!(D in g))break e;g=g[D]}l=l[l.length-1],y=g[l],d=d(y),d!=y&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var g=0,y=!1,D={next:function(){if(!y&&g<l.length){var M=g++;return{value:d(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,g){return l.call.apply(l.bind,arguments)}function f(l,d,g){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),l.apply(d,D)}}return function(){return l.apply(d,arguments)}}function p(l,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function _(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function w(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(y,D,M){for(var G=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)G[Ie-2]=arguments[Ie];return d.prototype[D].apply(y,G)}}function C(l){const d=l.length;if(0<d){const g=Array(d);for(let y=0;y<d;y++)g[y]=l[y];return g}return[]}function N(l,d){for(let g=1;g<arguments.length;g++){const y=arguments[g];if(u(y)){const D=l.length||0,M=y.length||0;l.length=D+M;for(let G=0;G<M;G++)l[D+G]=y[G]}else l.push(y)}}class T{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function P(l){return P[" "](l),l}P[" "]=function(){};var O=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function V(l,d,g){for(const y in l)d.call(g,l[y],y,l)}function I(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function v(l){const d={};for(const g in l)d[g]=l[g];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let g,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(g in y)l[g]=y[g];for(let M=0;M<S.length;M++)g=S[M],Object.prototype.hasOwnProperty.call(y,g)&&(l[g]=y[g])}}function k(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function b(l){a.setTimeout(()=>{throw l},0)}function R(){var l=J;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Z{constructor(){this.h=this.g=null}add(d,g){const y=ve.get();y.set(d,g),this.h?this.h.next=y:this.g=y,this.h=y}}var ve=new T(()=>new Kt,l=>l.reset());class Kt{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let rt,$=!1,J=new Z,F=()=>{const l=a.Promise.resolve(void 0);rt=()=>{l.then(U)}};var U=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(g){b(g)}var d=ve;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}$=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var Ce=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function Te(l,d){if(H.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(O){e:{try{P(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Le[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Te.aa.h.call(this)}}w(Te,H);var Le={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),an=0;function _i(l,d,g,y,D){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!y,this.ha=D,this.key=++an,this.da=this.fa=!1}function Dn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Sr(l){this.src=l,this.g={},this.h=0}Sr.prototype.add=function(l,d,g,y,D){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var G=Qt(l,d,y,D);return-1<G?(d=l[G],g||(d.fa=!1)):(d=new _i(d,this.src,M,!!y,D),d.fa=g,l.push(d)),d};function ln(l,d){var g=d.type;if(g in l.g){var y=l.g[g],D=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=D)&&Array.prototype.splice.call(y,D,1),M&&(Dn(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Qt(l,d,g,y){for(var D=0;D<l.length;++D){var M=l[D];if(!M.da&&M.listener==d&&M.capture==!!g&&M.ha==y)return D}return-1}var un="closure_lm_"+(1e6*Math.random()|0),ge={};function Pe(l,d,g,y,D){if(Array.isArray(d)){for(var M=0;M<d.length;M++)Pe(l,d[M],g,y,D);return null}return g=z_(g),l&&l[Ue]?l.K(d,g,c(y)?!!y.capture:!1,D):Cr(l,d,g,!1,y,D)}function Cr(l,d,g,y,D,M){if(!d)throw Error("Invalid event type");var G=c(D)?!!D.capture:!!D,Ie=ud(l);if(Ie||(l[un]=Ie=new Sr(l)),g=Ie.add(d,g,y,G,M),g.proxy)return g;if(y=yi(),g.proxy=y,y.src=l,y.listener=g,l.addEventListener)Ce||(D=G),D===void 0&&(D=!1),l.addEventListener(d.toString(),y,D);else if(l.attachEvent)l.attachEvent(U_(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function yi(){function l(g){return d.call(l.src,l.listener,g)}const d=nA;return l}function On(l,d,g,y,D){if(Array.isArray(d))for(var M=0;M<d.length;M++)On(l,d[M],g,y,D);else y=c(y)?!!y.capture:!!y,g=z_(g),l&&l[Ue]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],g=Qt(M,g,y,D),-1<g&&(Dn(M[g]),Array.prototype.splice.call(M,g,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=ud(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Qt(d,g,y,D)),(g=-1<l?d[l]:null)&&ld(g))}function ld(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Ue])ln(d.i,l);else{var g=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(g,y,l.capture):d.detachEvent?d.detachEvent(U_(g),y):d.addListener&&d.removeListener&&d.removeListener(y),(g=ud(d))?(ln(g,l),g.h==0&&(g.src=null,d[un]=null)):Dn(l)}}}function U_(l){return l in ge?ge[l]:ge[l]="on"+l}function nA(l,d){if(l.da)l=!0;else{d=new Te(d,this);var g=l.listener,y=l.ha||l.src;l.fa&&ld(l),l=g.call(y,d)}return l}function ud(l){return l=l[un],l instanceof Sr?l:null}var cd="__closure_events_fn_"+(1e9*Math.random()>>>0);function z_(l){return typeof l=="function"?l:(l[cd]||(l[cd]=function(d){return l.handleEvent(d)}),l[cd])}function wt(){B.call(this),this.i=new Sr(this),this.M=this,this.F=null}w(wt,B),wt.prototype[Ue]=!0,wt.prototype.removeEventListener=function(l,d,g,y){On(this,l,d,g,y)};function bt(l,d){var g,y=l.F;if(y)for(g=[];y;y=y.F)g.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new H(d,l);else if(d instanceof H)d.target=d.target||l;else{var D=d;d=new H(y,l),A(d,D)}if(D=!0,g)for(var M=g.length-1;0<=M;M--){var G=d.g=g[M];D=Kl(G,y,!0,d)&&D}if(G=d.g=l,D=Kl(G,y,!0,d)&&D,D=Kl(G,y,!1,d)&&D,g)for(M=0;M<g.length;M++)G=d.g=g[M],D=Kl(G,y,!1,d)&&D}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],y=0;y<g.length;y++)Dn(g[y]);delete l.g[d],l.h--}}this.F=null},wt.prototype.K=function(l,d,g,y){return this.i.add(String(l),d,!1,g,y)},wt.prototype.L=function(l,d,g,y){return this.i.add(String(l),d,!0,g,y)};function Kl(l,d,g,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,M=0;M<d.length;++M){var G=d[M];if(G&&!G.da&&G.capture==g){var Ie=G.listener,dt=G.ha||G.src;G.fa&&ln(l.i,G),D=Ie.call(dt,y)!==!1&&D}}return D&&!y.defaultPrevented}function B_(l,d,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function W_(l){l.g=B_(()=>{l.g=null,l.i&&(l.i=!1,W_(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class rA extends B{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:W_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oo(l){B.call(this),this.h=l,this.g={}}w(Oo,B);var $_=[];function q_(l){V(l.g,function(d,g){this.g.hasOwnProperty(g)&&ld(d)},l),l.g={}}Oo.prototype.N=function(){Oo.aa.N.call(this),q_(this)},Oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hd=a.JSON.stringify,iA=a.JSON.parse,sA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function dd(){}dd.prototype.h=null;function H_(l){return l.h||(l.h=l.i())}function G_(){}var Mo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fd(){H.call(this,"d")}w(fd,H);function pd(){H.call(this,"c")}w(pd,H);var vi={},K_=null;function Ql(){return K_=K_||new wt}vi.La="serverreachability";function Q_(l){H.call(this,vi.La,l)}w(Q_,H);function Lo(l){const d=Ql();bt(d,new Q_(d))}vi.STAT_EVENT="statevent";function Y_(l,d){H.call(this,vi.STAT_EVENT,l),this.stat=d}w(Y_,H);function Dt(l){const d=Ql();bt(d,new Y_(d,l))}vi.Ma="timingevent";function X_(l,d){H.call(this,vi.Ma,l),this.size=d}w(X_,H);function Vo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Fo(){this.g=!0}Fo.prototype.xa=function(){this.g=!1};function oA(l,d,g,y,D,M){l.info(function(){if(l.g)if(M)for(var G="",Ie=M.split("&"),dt=0;dt<Ie.length;dt++){var fe=Ie[dt].split("=");if(1<fe.length){var Et=fe[0];fe=fe[1];var Tt=Et.split("_");G=2<=Tt.length&&Tt[1]=="type"?G+(Et+"="+fe+"&"):G+(Et+"=redacted&")}}else G=null;else G=M;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+g+`
`+G})}function aA(l,d,g,y,D,M,G){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+g+`
`+M+" "+G})}function fs(l,d,g,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+uA(l,g)+(y?" "+y:"")})}function lA(l,d){l.info(function(){return"TIMEOUT: "+d})}Fo.prototype.info=function(){};function uA(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var y=g[l];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var G=1;G<D.length;G++)D[G]=""}}}}return hd(g)}catch{return d}}var Yl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},J_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},md;function Xl(){}w(Xl,dd),Xl.prototype.g=function(){return new XMLHttpRequest},Xl.prototype.i=function(){return{}},md=new Xl;function xr(l,d,g,y){this.j=l,this.i=d,this.l=g,this.R=y||1,this.U=new Oo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Z_}function Z_(){this.i=null,this.g="",this.h=!1}var ey={},gd={};function _d(l,d,g){l.L=1,l.v=tu(Kn(d)),l.m=g,l.P=!0,ty(l,null)}function ty(l,d){l.F=Date.now(),Jl(l),l.A=Kn(l.v);var g=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),my(g.i,"t",y),l.C=0,g=l.j.J,l.h=new Z_,l.g=Dy(l.j,g?d:null,!l.m),0<l.O&&(l.M=new rA(p(l.Y,l,l.g),l.O)),d=l.U,g=l.g,y=l.ca;var D="readystatechange";Array.isArray(D)||(D&&($_[0]=D.toString()),D=$_);for(var M=0;M<D.length;M++){var G=Pe(g,D[M],y||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Lo(),oA(l.i,l.u,l.A,l.l,l.R,l.m)}xr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Qn(l)==3?d.j():this.Y(l)},xr.prototype.Y=function(l){try{if(l==this.g)e:{const Tt=Qn(this.g);var d=this.g.Ba();const gs=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Ty(this.g)))){this.J||Tt!=4||d==7||(d==8||0>=gs?Lo(3):Lo(2)),yd(this);var g=this.g.Z();this.X=g;t:if(ny(this)){var y=Ty(this.g);l="";var D=y.length,M=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wi(this),jo(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(M&&d==D-1)});y.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=g==200,aA(this.i,this.u,this.A,this.l,this.R,Tt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,dt=this.g;if((Ie=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Ie)){var fe=Ie;break t}}fe=null}if(g=fe)fs(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vd(this,g);else{this.o=!1,this.s=3,Dt(12),wi(this),jo(this);break e}}if(this.P){g=!0;let yn;for(;!this.J&&this.C<G.length;)if(yn=cA(this,G),yn==gd){Tt==4&&(this.s=4,Dt(14),g=!1),fs(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==ey){this.s=4,Dt(15),fs(this.i,this.l,G,"[Invalid Chunk]"),g=!1;break}else fs(this.i,this.l,yn,null),vd(this,yn);if(ny(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||G.length!=0||this.h.h||(this.s=1,Dt(16),g=!1),this.o=this.o&&g,!g)fs(this.i,this.l,G,"[Invalid Chunked Response]"),wi(this),jo(this);else if(0<G.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Cd(Et),Et.M=!0,Dt(11))}}else fs(this.i,this.l,G,null),vd(this,G);Tt==4&&wi(this),this.o&&!this.J&&(Tt==4?ky(this.j,this):(this.o=!1,Jl(this)))}else AA(this.g),g==400&&0<G.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),wi(this),jo(this)}}}catch{}finally{}};function ny(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function cA(l,d){var g=l.C,y=d.indexOf(`
`,g);return y==-1?gd:(g=Number(d.substring(g,y)),isNaN(g)?ey:(y+=1,y+g>d.length?gd:(d=d.slice(y,y+g),l.C=y+g,d)))}xr.prototype.cancel=function(){this.J=!0,wi(this)};function Jl(l){l.S=Date.now()+l.I,ry(l,l.I)}function ry(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Vo(p(l.ba,l),d)}function yd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}xr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(lA(this.i,this.A),this.L!=2&&(Lo(),Dt(17)),wi(this),this.s=2,jo(this)):ry(this,this.S-l)};function jo(l){l.j.G==0||l.J||ky(l.j,l)}function wi(l){yd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,q_(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function vd(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||wd(g.h,l))){if(!l.K&&wd(g.h,l)&&g.G==3){try{var y=g.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)au(g),su(g);else break e;Sd(g),Dt(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=Vo(p(g.Za,g),6e3));if(1>=oy(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Ti(g,11)}else if((l.K||g.g==l)&&au(g),!E(d))for(D=g.Da.g.parse(d),d=0;d<D.length;d++){let fe=D[d];if(g.T=fe[0],fe=fe[1],g.G==2)if(fe[0]=="c"){g.K=fe[1],g.ia=fe[2];const Et=fe[3];Et!=null&&(g.la=Et,g.j.info("VER="+g.la));const Tt=fe[4];Tt!=null&&(g.Aa=Tt,g.j.info("SVER="+g.Aa));const gs=fe[5];gs!=null&&typeof gs=="number"&&0<gs&&(y=1.5*gs,g.L=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const yn=l.g;if(yn){const uu=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(uu){var M=y.h;M.g||uu.indexOf("spdy")==-1&&uu.indexOf("quic")==-1&&uu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Ed(M,M.h),M.h=null))}if(y.D){const xd=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;xd&&(y.ya=xd,Ne(y.I,y.D,xd))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),y=g;var G=l;if(y.qa=by(y,y.J?y.ia:null,y.W),G.K){ay(y.h,G);var Ie=G,dt=y.L;dt&&(Ie.I=dt),Ie.B&&(yd(Ie),Jl(Ie)),y.g=G}else Ay(y);0<g.i.length&&ou(g)}else fe[0]!="stop"&&fe[0]!="close"||Ti(g,7);else g.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Ti(g,7):Id(g):fe[0]!="noop"&&g.l&&g.l.ta(fe),g.v=0)}}Lo(4)}catch{}}var hA=class{constructor(l,d){this.g=l,this.map=d}};function iy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function oy(l){return l.h?1:l.g?l.g.size:0}function wd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Ed(l,d){l.g?l.g.add(d):l.h=d}function ay(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}iy.prototype.cancel=function(){if(this.i=ly(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ly(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return C(l.i)}function dA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],g=l.length,y=0;y<g;y++)d.push(l[y]);return d}d=[],g=0;for(y in l)d[g++]=l[y];return d}function fA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const y in l)d[g++]=y;return d}}}function uy(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=fA(l),y=dA(l),D=y.length,M=0;M<D;M++)d.call(void 0,y[M],g&&g[M],l)}var cy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pA(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var y=l[g].indexOf("="),D=null;if(0<=y){var M=l[g].substring(0,y);D=l[g].substring(y+1)}else M=l[g];d(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ei(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ei){this.h=l.h,Zl(this,l.j),this.o=l.o,this.g=l.g,eu(this,l.s),this.l=l.l;var d=l.i,g=new Bo;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),hy(this,g),this.m=l.m}else l&&(d=String(l).match(cy))?(this.h=!1,Zl(this,d[1]||"",!0),this.o=Uo(d[2]||""),this.g=Uo(d[3]||"",!0),eu(this,d[4]),this.l=Uo(d[5]||"",!0),hy(this,d[6]||"",!0),this.m=Uo(d[7]||"")):(this.h=!1,this.i=new Bo(null,this.h))}Ei.prototype.toString=function(){var l=[],d=this.j;d&&l.push(zo(d,dy,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(zo(d,dy,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(zo(g,g.charAt(0)=="/"?_A:gA,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",zo(g,vA)),l.join("")};function Kn(l){return new Ei(l)}function Zl(l,d,g){l.j=g?Uo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function eu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function hy(l,d,g){d instanceof Bo?(l.i=d,wA(l.i,l.h)):(g||(d=zo(d,yA)),l.i=new Bo(d,l.h))}function Ne(l,d,g){l.i.set(d,g)}function tu(l){return Ne(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Uo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function zo(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,mA),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function mA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var dy=/[#\/\?@]/g,gA=/[#\?:]/g,_A=/[#\?]/g,yA=/[#\?@]/g,vA=/#/g;function Bo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Ar(l){l.g||(l.g=new Map,l.h=0,l.i&&pA(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=Bo.prototype,t.add=function(l,d){Ar(this),this.i=null,l=ps(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function fy(l,d){Ar(l),d=ps(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function py(l,d){return Ar(l),d=ps(l,d),l.g.has(d)}t.forEach=function(l,d){Ar(this),this.g.forEach(function(g,y){g.forEach(function(D){l.call(d,D,y,this)},this)},this)},t.na=function(){Ar(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let y=0;y<d.length;y++){const D=l[y];for(let M=0;M<D.length;M++)g.push(d[y])}return g},t.V=function(l){Ar(this);let d=[];if(typeof l=="string")py(this,l)&&(d=d.concat(this.g.get(ps(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return Ar(this),this.i=null,l=ps(this,l),py(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function my(l,d,g){fy(l,d),0<g.length&&(l.i=null,l.g.set(ps(l,d),C(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var y=d[g];const M=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var D=M;G[y]!==""&&(D+="="+encodeURIComponent(String(G[y]))),l.push(D)}}return this.i=l.join("&")};function ps(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function wA(l,d){d&&!l.j&&(Ar(l),l.i=null,l.g.forEach(function(g,y){var D=y.toLowerCase();y!=D&&(fy(this,y),my(this,D,g))},l)),l.j=d}function EA(l,d){const g=new Fo;if(a.Image){const y=new Image;y.onload=_(Rr,g,"TestLoadImage: loaded",!0,d,y),y.onerror=_(Rr,g,"TestLoadImage: error",!1,d,y),y.onabort=_(Rr,g,"TestLoadImage: abort",!1,d,y),y.ontimeout=_(Rr,g,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function TA(l,d){const g=new Fo,y=new AbortController,D=setTimeout(()=>{y.abort(),Rr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(D),M.ok?Rr(g,"TestPingServer: ok",!0,d):Rr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Rr(g,"TestPingServer: error",!1,d)})}function Rr(l,d,g,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(g)}catch{}}function IA(){this.g=new sA}function SA(l,d,g){const y=g||"";try{uy(l,function(D,M){let G=D;c(D)&&(G=hd(D)),d.push(y+M+"="+encodeURIComponent(G))})}catch(D){throw d.push(y+"type="+encodeURIComponent("_badmap")),D}}function nu(l){this.l=l.Ub||null,this.j=l.eb||!1}w(nu,dd),nu.prototype.g=function(){return new ru(this.l,this.j)},nu.prototype.i=function(l){return function(){return l}}({});function ru(l,d){wt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(ru,wt),t=ru.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,$o(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,$o(this)),this.g&&(this.readyState=3,$o(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function gy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Wo(this):$o(this),this.readyState==3&&gy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Wo(this))},t.Qa=function(l){this.g&&(this.response=l,Wo(this))},t.ga=function(){this.g&&Wo(this)};function Wo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,$o(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function $o(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ru.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function _y(l){let d="";return V(l,function(g,y){d+=y,d+=":",d+=g,d+=`\r
`}),d}function Td(l,d,g){e:{for(y in g){var y=!1;break e}y=!0}y||(g=_y(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ne(l,d,g))}function ze(l){wt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(ze,wt);var CA=/^https?$/i,xA=["POST","PUT"];t=ze.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():md.g(),this.v=this.o?H_(this.o):H_(md),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){yy(this,M);return}if(l=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)g.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())g.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(xA,d,void 0))||y||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,G]of g)this.g.setRequestHeader(M,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ey(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){yy(this,M)}};function yy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,vy(l),iu(l)}function vy(l){l.A||(l.A=!0,bt(l,"complete"),bt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,bt(this,"complete"),bt(this,"abort"),iu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),iu(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wy(this):this.bb())},t.bb=function(){wy(this)};function wy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Qn(l)!=4||l.Z()!=2)){if(l.u&&Qn(l)==4)B_(l.Ea,0,l);else if(bt(l,"readystatechange"),Qn(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var y;if(y=G===0){var D=String(l.D).match(cy)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!CA.test(D?D.toLowerCase():"")}g=y}if(g)bt(l,"complete"),bt(l,"success");else{l.m=6;try{var M=2<Qn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",vy(l)}}finally{iu(l)}}}}function iu(l,d){if(l.g){Ey(l);const g=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||bt(l,"ready");try{g.onreadystatechange=y}catch{}}}function Ey(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Qn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),iA(d)}};function Ty(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function AA(l){const d={};l=(l.g&&2<=Qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(E(l[y]))continue;var g=k(l[y]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const M=d[D]||[];d[D]=M,M.push(g)}I(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qo(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function Iy(l){this.Aa=0,this.i=[],this.j=new Fo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qo("baseRetryDelayMs",5e3,l),this.cb=qo("retryDelaySeedMs",1e4,l),this.Wa=qo("forwardChannelMaxRetries",2,l),this.wa=qo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new iy(l&&l.concurrentRequestLimit),this.Da=new IA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Iy.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,y){Dt(0),this.W=l,this.H=d||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.I=by(this,null,this.W),ou(this)};function Id(l){if(Sy(l),l.G==3){var d=l.U++,g=Kn(l.I);if(Ne(g,"SID",l.K),Ne(g,"RID",d),Ne(g,"TYPE","terminate"),Ho(l,g),d=new xr(l,l.j,d),d.L=2,d.v=tu(Kn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Dy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Jl(d)}Ny(l)}function su(l){l.g&&(Cd(l),l.g.cancel(),l.g=null)}function Sy(l){su(l),l.u&&(a.clearTimeout(l.u),l.u=null),au(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ou(l){if(!sy(l.h)&&!l.s){l.s=!0;var d=l.Ga;rt||F(),$||(rt(),$=!0),J.add(d,l),l.B=0}}function RA(l,d){return oy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Vo(p(l.Ga,l,d),Py(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new xr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=v(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=xy(this,D,d),g=Kn(this.I),Ne(g,"RID",l),Ne(g,"CVER",22),this.D&&Ne(g,"X-HTTP-Session-Id",this.D),Ho(this,g),M&&(this.O?d="headers="+encodeURIComponent(String(_y(M)))+"&"+d:this.m&&Td(g,this.m,M)),Ed(this.h,D),this.Ua&&Ne(g,"TYPE","init"),this.P?(Ne(g,"$req",d),Ne(g,"SID","null"),D.T=!0,_d(D,g,null)):_d(D,g,d),this.G=2}}else this.G==3&&(l?Cy(this,l):this.i.length==0||sy(this.h)||Cy(this))};function Cy(l,d){var g;d?g=d.l:g=l.U++;const y=Kn(l.I);Ne(y,"SID",l.K),Ne(y,"RID",g),Ne(y,"AID",l.T),Ho(l,y),l.m&&l.o&&Td(y,l.m,l.o),g=new xr(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=xy(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ed(l.h,g),_d(g,y,d)}function Ho(l,d){l.H&&V(l.H,function(g,y){Ne(d,y,g)}),l.l&&uy({},function(g,y){Ne(d,y,g)})}function xy(l,d,g){g=Math.min(l.i.length,g);var y=l.l?p(l.l.Na,l.l,l):null;e:{var D=l.i;let M=-1;for(;;){const G=["count="+g];M==-1?0<g?(M=D[0].g,G.push("ofs="+M)):M=0:G.push("ofs="+M);let Ie=!0;for(let dt=0;dt<g;dt++){let fe=D[dt].g;const Et=D[dt].map;if(fe-=M,0>fe)M=Math.max(0,D[dt].g-100),Ie=!1;else try{SA(Et,G,"req"+fe+"_")}catch{y&&y(Et)}}if(Ie){y=G.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,y}function Ay(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;rt||F(),$||(rt(),$=!0),J.add(d,l),l.v=0}}function Sd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Vo(p(l.Fa,l),Py(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Ry(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Vo(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),su(this),Ry(this))};function Cd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Ry(l){l.g=new xr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Kn(l.qa);Ne(d,"RID","rpc"),Ne(d,"SID",l.K),Ne(d,"AID",l.T),Ne(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ne(d,"TO",l.ja),Ne(d,"TYPE","xmlhttp"),Ho(l,d),l.m&&l.o&&Td(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=tu(Kn(d)),g.m=null,g.P=!0,ty(g,l)}t.Za=function(){this.C!=null&&(this.C=null,su(this),Sd(this),Dt(19))};function au(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ky(l,d){var g=null;if(l.g==d){au(l),Cd(l),l.g=null;var y=2}else if(wd(l.h,d))g=d.D,ay(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var D=l.B;y=Ql(),bt(y,new X_(y,g)),ou(l)}else Ay(l);else if(D=d.s,D==3||D==0&&0<d.X||!(y==1&&RA(l,d)||y==2&&Sd(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),D){case 1:Ti(l,5);break;case 4:Ti(l,10);break;case 3:Ti(l,6);break;default:Ti(l,2)}}}function Py(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function Ti(l,d){if(l.j.info("Error code "+d),d==2){var g=p(l.fb,l),y=l.Xa;const D=!y;y=new Ei(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Zl(y,"https"),tu(y),D?EA(y.toString(),g):TA(y.toString(),g)}else Dt(2);l.G=0,l.l&&l.l.sa(d),Ny(l),Sy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Ny(l){if(l.G=0,l.ka=[],l.l){const d=ly(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function by(l,d,g){var y=g instanceof Ei?Kn(g):new Ei(g);if(y.g!="")d&&(y.g=d+"."+y.g),eu(y,y.s);else{var D=a.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var M=new Ei(null);y&&Zl(M,y),d&&(M.g=d),D&&eu(M,D),g&&(M.l=g),y=M}return g=l.D,d=l.ya,g&&d&&Ne(y,g,d),Ne(y,"VER",l.la),Ho(l,y),y}function Dy(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new ze(new nu({eb:g})):new ze(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oy(){}t=Oy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function lu(){}lu.prototype.g=function(l,d){return new Yt(l,d)};function Yt(l,d){wt.call(this),this.g=new Iy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!E(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ms(this)}w(Yt,wt),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){Id(this.g)},Yt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=hd(l),l=g);d.i.push(new hA(d.Ya++,l)),d.G==3&&ou(d)},Yt.prototype.N=function(){this.g.l=null,delete this.j,Id(this.g),delete this.g,Yt.aa.N.call(this)};function My(l){fd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}w(My,fd);function Ly(){pd.call(this),this.status=1}w(Ly,pd);function ms(l){this.g=l}w(ms,Oy),ms.prototype.ua=function(){bt(this.g,"a")},ms.prototype.ta=function(l){bt(this.g,new My(l))},ms.prototype.sa=function(l){bt(this.g,new Ly)},ms.prototype.ra=function(){bt(this.g,"b")},lu.prototype.createWebChannel=lu.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,dS=function(){return new lu},hS=function(){return Ql()},cS=vi,kp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yl.NO_ERROR=0,Yl.TIMEOUT=8,Yl.HTTP_ERROR=6,Ju=Yl,J_.COMPLETE="complete",uS=J_,G_.EventType=Mo,Mo.OPEN="a",Mo.CLOSE="b",Mo.ERROR="c",Mo.MESSAGE="d",wt.prototype.listen=wt.prototype.K,da=G_,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,lS=ze}).apply(typeof Ru<"u"?Ru:typeof self<"u"?self:typeof window<"u"?window:{});const w0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Sh("@firebase/firestore");function ta(){return qi.logLevel}function Y(t,...e){if(qi.logLevel<=le.DEBUG){const n=e.map(pg);qi.debug(`Firestore (${Co}): ${t}`,...n)}}function _r(t,...e){if(qi.logLevel<=le.ERROR){const n=e.map(pg);qi.error(`Firestore (${Co}): ${t}`,...n)}}function Hi(t,...e){if(qi.logLevel<=le.WARN){const n=e.map(pg);qi.warn(`Firestore (${Co}): ${t}`,...n)}}function pg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+t;throw _r(e),new Error(e)}function ye(t,e){t||ne()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class jb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ub{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new fS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new xt(e)}}class zb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Bb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $b{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ye(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new Wb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function io(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Ye(0,0))}static max(){return new ie(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends rl{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const Hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends rl{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return Hb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Re.fromString(e))}static fromName(e){return new X(Re.fromString(e).popFirst(5))}static empty(){return new X(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Re(e.slice()))}}function Gb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new si(i,X.empty(),e)}function Kb(t){return new si(t.readTime,t.key,-1)}class si{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new si(ie.min(),X.empty(),-1)}static max(){return new si(ie.max(),X.empty(),-1)}}function Qb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Yb)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new z((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Jb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Nl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gg.oe=-1;function kh(t){return t==null}function Lc(t){return t===0&&1/t==-1/0}function Zb(t){return typeof t=="number"&&Number.isInteger(t)&&!Lc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eD(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function mS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xe=class Pp{constructor(e,n){this.comparator=e,this.root=n||Zr.EMPTY}insert(e,n){return new Pp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Zr.BLACK,null,null))}remove(e){return new Pp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ku(this.root,e,this.comparator,!0)}},ku=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Zr=class Yn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Yn.RED,this.left=i??Yn.EMPTY,this.right=s??Yn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Yn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Yn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Yn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}};Zr.EMPTY=null,Zr.RED=!0,Zr.BLACK=!1;Zr.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Zr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new T0(this.data.getIterator())}getIteratorFrom(e){return new T0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class T0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new en([])}unionWith(e){let n=new gt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new gS("Invalid base64 string: "+s):s}}(e);return new ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const tD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oi(t){if(ye(!!t),typeof t=="string"){let e=0;const n=tD.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gi(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _g(t){const e=t.mapValue.fields.__previous_value__;return Ph(e)?_g(e):e}function il(t){const e=oi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class so{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new so("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={mapValue:{}};function Ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ph(t)?4:iD(t)?9007199254740991:rD(t)?10:11:ne()}function Hn(t,e){if(t===e)return!0;const n=Ki(t);if(n!==Ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return il(t).isEqual(il(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=oi(i.timestampValue),a=oi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Gi(i.bytesValue).isEqual(Gi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),a=qe(s.doubleValue);return o===a?Lc(o)===Lc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return io(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(E0(o)!==E0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Hn(o[u],a[u])))return!1;return!0}(t,e);default:return ne()}}function sl(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function oo(t,e){if(t===e)return 0;const n=Ki(t),r=Ki(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=qe(s.integerValue||s.doubleValue),u=qe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return I0(t.timestampValue,e.timestampValue);case 4:return I0(il(t),il(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Gi(s),u=Gi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=pe(a[c],u[c]);if(h!==0)return h}return pe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=pe(qe(s.latitude),qe(o.latitude));return a!==0?a:pe(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return S0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},p=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,w=(u=p.value)===null||u===void 0?void 0:u.arrayValue,C=pe(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:S0(_,w)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Pu.mapValue&&o===Pu.mapValue)return 0;if(s===Pu.mapValue)return 1;if(o===Pu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=pe(u[f],h[f]);if(p!==0)return p;const _=oo(a[u[f]],c[h[f]]);if(_!==0)return _}return pe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ne()}}function I0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=oi(t),r=oi(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function S0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=oo(n[i],r[i]);if(s)return s}return pe(n.length,r.length)}function ao(t){return Np(t)}function Np(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=oi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Np(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Np(n.fields[o])}`;return i+"}"}(t.mapValue):ne()}function Vc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bp(t){return!!t&&"integerValue"in t}function yg(t){return!!t&&"arrayValue"in t}function C0(t){return!!t&&"nullValue"in t}function x0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zu(t){return!!t&&"mapValue"in t}function rD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ca(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ca(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ca(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ca(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ca(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Zu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Zu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){os(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zt(Ca(this.value))}}function _S(t){const e=[];return os(t.fields,(n,r)=>{const i=new ut([n]);if(Zu(r)){const s=_S(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,ie.min(),ie.min(),ie.min(),zt.empty(),0)}static newFoundDocument(e,n,r,i){return new Rt(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Rt(e,2,n,ie.min(),ie.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,ie.min(),ie.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.position=e,this.inclusive=n}}function A0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=oo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function R0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n="asc"){this.field=e,this.dir=n}}function sD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{}class Qe extends yS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aD(e,n,r):n==="array-contains"?new cD(e,r):n==="in"?new hD(e,r):n==="not-in"?new dD(e,r):n==="array-contains-any"?new fD(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lD(e,r):new uD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(oo(n,this.value)):n!==null&&Ki(this.value)===Ki(n)&&this.matchesComparison(oo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pn extends yS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Pn(e,n)}matches(e){return vS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vS(t){return t.op==="and"}function wS(t){return oD(t)&&vS(t)}function oD(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function Dp(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(wS(t))return t.filters.map(e=>Dp(e)).join(",");{const e=t.filters.map(n=>Dp(n)).join(",");return`${t.op}(${e})`}}function ES(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&Hn(r.value,i.value)}(t,e):t instanceof Pn?function(r,i){return i instanceof Pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ES(o,i.filters[a]),!0):!1}(t,e):void ne()}function TS(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${ao(n.value)}`}(t):t instanceof Pn?function(n){return n.op.toString()+" {"+n.getFilters().map(TS).join(" ,")+"}"}(t):"Filter"}class aD extends Qe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class lD extends Qe{constructor(e,n){super(e,"in",n),this.keys=IS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uD extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=IS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function IS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class cD extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yg(n)&&sl(n.arrayValue,this.value)}}class hD extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sl(this.value.arrayValue,n)}}class dD extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!sl(this.value.arrayValue,n)}}class fD extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function k0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new pD(t,e,n,r,i,s,o)}function vg(t){const e=re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ao(r)).join(",")),e.ue=n}return e.ue}function wg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!sD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ES(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!R0(t.startAt,e.startAt)&&R0(t.endAt,e.endAt)}function Op(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mD(t,e,n,r,i,s,o,a){return new as(t,e,n,r,i,s,o,a)}function Nh(t){return new as(t)}function P0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Eg(t){return t.collectionGroup!==null}function qs(t){const e=re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ol(s,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new ol(ut.keyField(),r))}return e.ce}function Wn(t){const e=re(t);return e.le||(e.le=SS(e,qs(t))),e.le}function gD(t){const e=re(t);return e.he||(e.he=SS(e,t.explicitOrderBy)),e.he}function SS(t,e){if(t.limitType==="F")return k0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ol(i.field,s)});const n=t.endAt?new lo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new lo(t.startAt.position,t.startAt.inclusive):null;return k0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mp(t,e){const n=t.filters.concat([e]);return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fc(t,e,n){return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bh(t,e){return wg(Wn(t),Wn(e))&&t.limitType===e.limitType}function CS(t){return`${vg(Wn(t))}|lt:${t.limitType}`}function ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>TS(i)).join(", ")}]`),kh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ao(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ao(i)).join(",")),`Target(${r})`}(Wn(t))}; limitType=${t.limitType})`}function Dh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of qs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=A0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,qs(r),i)||r.endAt&&!function(o,a,u){const c=A0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,qs(r),i))}(t,e)}function _D(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xS(t){return(e,n)=>{let r=!1;for(const i of qs(t)){const s=yD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yD(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?oo(u,c):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return mS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=new Xe(X.comparator);function yr(){return vD}const AS=new Xe(X.comparator);function fa(...t){let e=AS;for(const n of t)e=e.insert(n.key,n);return e}function RS(t){let e=AS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bi(){return xa()}function kS(){return xa()}function xa(){return new xo(t=>t.toString(),(t,e)=>t.isEqual(e))}const wD=new Xe(X.comparator),ED=new gt(X.comparator);function ce(...t){let e=ED;for(const n of t)e=e.add(n);return e}const TD=new gt(pe);function ID(){return TD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lc(e)?"-0":e}}function PS(t){return{integerValue:""+t}}function NS(t,e){return Zb(e)?PS(e):Tg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this._=void 0}}function SD(t,e,n){return t instanceof al?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ph(s)&&(s=_g(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof uo?DS(t,e):t instanceof ll?OS(t,e):function(i,s){const o=bS(i,s),a=N0(o)+N0(i.Pe);return bp(o)&&bp(i.Pe)?PS(a):Tg(i.serializer,a)}(t,e)}function CD(t,e,n){return t instanceof uo?DS(t,e):t instanceof ll?OS(t,e):n}function bS(t,e){return t instanceof ul?function(r){return bp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class al extends Oh{}class uo extends Oh{constructor(e){super(),this.elements=e}}function DS(t,e){const n=MS(e);for(const r of t.elements)n.some(i=>Hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ll extends Oh{constructor(e){super(),this.elements=e}}function OS(t,e){let n=MS(e);for(const r of t.elements)n=n.filter(i=>!Hn(i,r));return{arrayValue:{values:n}}}class ul extends Oh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function N0(t){return qe(t.integerValue||t.doubleValue)}function MS(t){return yg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n){this.field=e,this.transform=n}}function xD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof uo&&i instanceof uo||r instanceof ll&&i instanceof ll?io(r.elements,i.elements,Hn):r instanceof ul&&i instanceof ul?Hn(r.Pe,i.Pe):r instanceof al&&i instanceof al}(t.transform,e.transform)}class AD{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mh{}function LS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sg(t.key,Gt.none()):new bl(t.key,t.data,Gt.none());{const n=t.data,r=zt.empty();let i=new gt(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mi(t.key,r,new en(i.toArray()),Gt.none())}}function RD(t,e,n){t instanceof bl?function(i,s,o){const a=i.value.clone(),u=D0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof mi?function(i,s,o){if(!ec(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=D0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(VS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Aa(t,e,n,r){return t instanceof bl?function(s,o,a,u){if(!ec(s.precondition,o))return a;const c=s.value.clone(),h=O0(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof mi?function(s,o,a,u){if(!ec(s.precondition,o))return a;const c=O0(s.fieldTransforms,u,o),h=o.data;return h.setAll(VS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return ec(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function kD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=bS(r.transform,i||null);s!=null&&(n===null&&(n=zt.empty()),n.set(r.field,s))}return n||null}function b0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&io(r,i,(s,o)=>xD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bl extends Mh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mi extends Mh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function VS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function D0(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,CD(o,a,n[i]))}return r}function O0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,SD(s,o,e))}return r}class Sg extends Mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PD extends Mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=LS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(n,r)=>b0(n,r))&&io(this.baseMutations,e.baseMutations,(n,r)=>b0(n,r))}}class Cg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return wD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,he;function MD(t){switch(t){default:return ne();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function FS(t){if(t===void 0)return _r("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ge.OK:return L.OK;case Ge.CANCELLED:return L.CANCELLED;case Ge.UNKNOWN:return L.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return L.INTERNAL;case Ge.UNAVAILABLE:return L.UNAVAILABLE;case Ge.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ge.NOT_FOUND:return L.NOT_FOUND;case Ge.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ge.ABORTED:return L.ABORTED;case Ge.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ge.DATA_LOSS:return L.DATA_LOSS;default:return ne()}}(he=Ge||(Ge={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new Vi([4294967295,4294967295],0);function M0(t){const e=LD().encode(t),n=new aS;return n.update(e),new Uint8Array(n.digest())}function L0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vi([n,r],0),new Vi([i,s],0)]}class xg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pa(`Invalid padding: ${n}`);if(r<0)throw new pa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Vi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Vi.fromNumber(r)));return i.compare(VD)===1&&(i=new Vi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=M0(e),[r,i]=L0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new xg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=M0(e),[r,i]=L0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Dl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lh(ie.min(),i,new Xe(pe),yr(),ce())}}class Dl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Dl(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class jS{constructor(e,n){this.targetId=e,this.me=n}}class US{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class V0{constructor(){this.fe=0,this.ge=j0(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),n=ce(),r=ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new Dl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=j0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FD{constructor(e){this.Le=e,this.Be=new Map,this.ke=yr(),this.qe=F0(),this.Qe=new Xe(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Op(s))if(r===0){const o=new X(s.path);this.Ue(n,o,Rt.newNoDocument(o,ie.min()))}else ye(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Gi(r).toUint8Array()}catch(u){if(u instanceof gS)return Hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new xg(o,i,s)}catch(u){return Hi(u instanceof pa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Op(a.target)){const u=new X(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Rt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ce();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Lh(e,n,this.Qe,this.ke,r);return this.ke=yr(),this.qe=F0(),this.Qe=new Xe(pe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new V0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new gt(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new V0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function F0(){return new Xe(X.comparator)}function j0(){return new Xe(X.comparator)}const jD={asc:"ASCENDING",desc:"DESCENDING"},UD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zD={and:"AND",or:"OR"};class BD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lp(t,e){return t.useProto3Json||kh(e)?e:{value:e}}function jc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WD(t,e){return jc(t,e.toTimestamp())}function $n(t){return ye(!!t),ie.fromTimestamp(function(n){const r=oi(n);return new Ye(r.seconds,r.nanos)}(t))}function Ag(t,e){return Vp(t,e).canonicalString()}function Vp(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BS(t){const e=Re.fromString(t);return ye(KS(e)),e}function Fp(t,e){return Ag(t.databaseId,e.path)}function af(t,e){const n=BS(e);if(n.get(1)!==t.databaseId.projectId)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X($S(n))}function WS(t,e){return Ag(t.databaseId,e)}function $D(t){const e=BS(t);return e.length===4?Re.emptyPath():$S(e)}function jp(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $S(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function U0(t,e,n){return{name:Fp(t,e),fields:n.value.mapValue.fields}}function qD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ye(h===void 0||typeof h=="string"),ht.fromBase64String(h||"")):(ye(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ht.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?L.UNKNOWN:FS(c.code);return new K(h,c.message||"")}(o);n=new US(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=af(t,r.document.name),s=$n(r.document.updateTime),o=r.document.createTime?$n(r.document.createTime):ie.min(),a=new zt({mapValue:{fields:r.document.fields}}),u=Rt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new tc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=af(t,r.document),s=r.readTime?$n(r.readTime):ie.min(),o=Rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new tc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=af(t,r.document),s=r.removedTargetIds||[];n=new tc([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new OD(i,s),a=r.targetId;n=new jS(a,o)}}return n}function HD(t,e){let n;if(e instanceof bl)n={update:U0(t,e.key,e.value)};else if(e instanceof Sg)n={delete:Fp(t,e.key)};else if(e instanceof mi)n={update:U0(t,e.key,e.data),updateMask:tO(e.fieldMask)};else{if(!(e instanceof PD))return ne();n={verify:Fp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof al)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ll)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ul)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:WD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function GD(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?$n(i.updateTime):$n(s);return o.isEqual(ie.min())&&(o=$n(s)),new AD(o,i.transformResults||[])}(n,e))):[]}function KD(t,e){return{documents:[WS(t,e.path)]}}function qS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=WS(t,i);const s=function(c){if(c.length!==0)return GS(Pn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Fr(p.field),direction:JD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Lp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function QD(t,e,n,r){const{_t:i,parent:s}=qS(t,e),o={},a=[];let u=0;return n.forEach(c=>{const h="aggregate_"+u++;o[h]=c.alias,c.aggregateType==="count"?a.push({alias:h,count:{}}):c.aggregateType==="avg"?a.push({alias:h,avg:{field:Fr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:h,sum:{field:Fr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function YD(t){let e=$D(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=HS(f);return p instanceof Pn&&wS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(w){return new ol(Es(w.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,kh(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,_=f.values||[];return new lo(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,_=f.values||[];return new lo(_,p)}(n.endAt)),mD(e,i,o,s,a,"F",u,c)}function XD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Es(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Es(n.unaryFilter.field);return Qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pn.create(n.compositeFilter.filters.map(r=>HS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function JD(t){return jD[t]}function ZD(t){return UD[t]}function eO(t){return zD[t]}function Fr(t){return{fieldPath:t.canonicalString()}}function Es(t){return ut.fromServerFormat(t.fieldPath)}function GS(t){return t instanceof Qe?function(n){if(n.op==="=="){if(x0(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NAN"}};if(C0(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(x0(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NAN"}};if(C0(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(n.field),op:ZD(n.op),value:n.value}}}(t):t instanceof Pn?function(n){const r=n.getFilters().map(i=>GS(i));return r.length===1?r[0]:{compositeFilter:{op:eO(n.op),filters:r}}}(t):ne()}function tO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r,i,s=ie.min(),o=ie.min(),a=ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.ct=e}}function rO(t){const e=YD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(){this.un=new sO}addToCollectionParentIndex(e,n){return this.un.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(si.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(si.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class sO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new co(0)}static kn(){return new co(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(){this.changes=new xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Aa(r.mutation,i,en.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=yr();const o=xa(),a=function(){return xa()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof mi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Aa(h.mutation,c,h.mutation.getFieldMask(),Ye.now())):o.set(c.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new aO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=xa();let i=new Xe((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||en.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||ce()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=kS();h.forEach(p=>{if(!s.has(p)){const _=LS(n.get(p),r.get(p));_!==null&&f.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Eg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):z.resolve(bi());let a=-1,u=s;return o.next(c=>z.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?z.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ce())).next(h=>({batchId:a,changes:RS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=fa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fa();return this.indexManager.getCollectionParents(e,s).next(a=>z.forEach(a,u=>{const c=function(f,p){return new as(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Rt.newInvalidDocument(h)))});let a=fa();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Aa(h.mutation,c,en.empty(),Ye.now()),Dh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:$n(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:rO(i.bundledQuery),readTime:$n(i.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(){this.overlays=new Xe(X.comparator),this.Ir=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bi();return z.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=bi(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Xe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=bi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=bi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return z.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bD(n,r));let s=this.Ir.get(n);s===void 0&&(s=ce(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.Tr=new gt(st.Er),this.dr=new gt(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Re([])),r=new st(n,e),i=new st(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Re([])),r=new st(n,e),i=new st(n,e+1);let s=ce();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new gt(st.Er)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ND(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(pe);return n.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),z.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new st(new X(s),0);let a=new gt(pe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),z.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return z.forEach(n.mutations,i=>{const s=new st(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new st(n,0),i=this.br.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.Mr=e,this.docs=function(){return new Xe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Rt.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=yr();const o=n.path,a=new X(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Qb(Kb(h),r)<=0||(i.has(h.key)||Dh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pO(this)}getSize(e){return z.resolve(this.size)}}class pO extends oO{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.persistence=e,this.Nr=new xo(n=>vg(n),wg),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Rg,this.targetCount=0,this.kr=co.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new co(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Kn(n),z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new gg(0),this.Kr=!1,this.Kr=!0,this.$r=new hO,this.referenceDelegate=e(this),this.Ur=new mO(this),this.indexManager=new iO,this.remoteDocumentCache=function(i){return new fO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nO(n),this.Gr=new uO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new dO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new _O(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return z.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class _O extends Xb{constructor(e){super(),this.currentSequenceNumber=e}}class kg{constructor(e){this.persistence=e,this.Jr=new Rg,this.Yr=null}static Zr(e){return new kg(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return z.or([()=>z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return g1()?8:Jb(Nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ta()<=le.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(ta()<=le.DEBUG&&Y("QueryEngine","Query:",ws(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ta()<=le.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wn(n))):z.resolve())}Yi(e,n){if(P0(n))return z.resolve(null);let r=Wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fc(n,null,"F"),r=Wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Fc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return P0(n)||i.isEqual(ie.min())?z.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?z.resolve(null):(ta()<=le.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ws(n)),this.rs(e,o,n,Gb(i,-1)).next(a=>a))})}ts(e,n){let r=new gt(xS(e));return n.forEach((i,s)=>{Dh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ta()<=le.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ws(n)),this.Ji.getDocumentsMatchingQuery(e,n,si.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Xe(pe),this._s=new xo(s=>vg(s),wg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function EO(t,e,n,r){return new wO(t,e,n,r)}async function QS(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ce();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function TO(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let _=z.resolve();return p.forEach(w=>{_=_.next(()=>h.getEntry(u,w)).next(C=>{const N=c.docVersions.get(w);ye(N!==null),C.version.compareTo(N)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),h.addEntry(C)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YS(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function IO(t,e){const n=re(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(ht.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(f,_),function(C,N,T){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let u=yr(),c=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(SO(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(ie.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return z.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function SO(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=yr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function CO(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xO(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Up(t,e,n){const r=re(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Nl(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function z0(t,e,n){const r=re(t);let i=ie.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=re(u),p=f._s.get(h);return p!==void 0?z.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,Wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:ce())).next(a=>(AO(r,_D(e),a),{documents:a,Ts:s})))}function AO(t,e,n){let r=t.us.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class B0{constructor(){this.activeTargetIds=ID()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RO{constructor(){this.so=new B0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new B0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu=null;function lf(){return Nu===null?Nu=function(){return 268435456+Math.round(2147483648*Math.random())}():Nu++,"0x"+Nu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class bO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=lf(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Hi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=PO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=lf();return new Promise((o,a)=>{const u=new lS;u.setWithCredentials(!0),u.listenOnce(uS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ju.NO_ERROR:const h=u.getResponseJson();Y(Ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Ju.TIMEOUT:Y(Ct,`RPC '${e}' ${s} timed out`),a(new K(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ju.HTTP_ERROR:const f=u.getStatus();if(Y(Ct,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const w=function(N){const T=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(T)>=0?T:L.UNKNOWN}(_.status);a(new K(w,_.message))}else a(new K(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(L.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Y(Ct,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(Ct,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=lf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dS(),a=hS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");Y(Ct,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let p=!1,_=!1;const w=new NO({Io:N=>{_?Y(Ct,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(Y(Ct,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),Y(Ct,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),C=(N,T,E)=>{N.listen(T,x=>{try{E(x)}catch(P){setTimeout(()=>{throw P},0)}})};return C(f,da.EventType.OPEN,()=>{_||(Y(Ct,`RPC '${e}' stream ${i} transport opened.`),w.yo())}),C(f,da.EventType.CLOSE,()=>{_||(_=!0,Y(Ct,`RPC '${e}' stream ${i} transport closed`),w.So())}),C(f,da.EventType.ERROR,N=>{_||(_=!0,Hi(Ct,`RPC '${e}' stream ${i} transport errored:`,N),w.So(new K(L.UNAVAILABLE,"The operation could not be completed")))}),C(f,da.EventType.MESSAGE,N=>{var T;if(!_){const E=N.data[0];ye(!!E);const x=E,P=x.error||((T=x[0])===null||T===void 0?void 0:T.error);if(P){Y(Ct,`RPC '${e}' stream ${i} received error:`,P);const O=P.status;let V=function(S){const A=Ge[S];if(A!==void 0)return FS(A)}(O),I=P.message;V===void 0&&(V=L.INTERNAL,I="Unknown error status: "+O+" with message "+P.message),_=!0,w.So(new K(V,I)),f.close()}else Y(Ct,`RPC '${e}' stream ${i} received:`,E),w.bo(E)}}),C(a,cS.STAT_EVENT,N=>{N.stat===kp.PROXY?Y(Ct,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===kp.NOPROXY&&Y(Ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}function uf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){return new BD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new XS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(_r(n.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DO extends JS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=qD(this.serializer,e),r=function(s){if(!("targetChange"in s))return ie.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?$n(o.readTime):ie.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Op(u)?{documents:KD(s,u)}:{query:qS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zS(s,o.resumeToken);const c=Lp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=jc(s,o.snapshotVersion.toTimestamp());const c=Lp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=XD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jp(this.serializer),n.removeTarget=e,this.a_(n)}}class OO extends JS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=GD(e.writeResults,e.commitTime),r=$n(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HD(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Vp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Vp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class LO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(_r(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ls(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=re(u);c.L_.add(4),await Ol(c),c.q_.set("Unknown"),c.L_.delete(4),await Fh(c)}(this))})}),this.q_=new LO(r,i)}}async function Fh(t){if(ls(t))for(const e of t.B_)await e(!0)}async function Ol(t){for(const e of t.B_)await e(!1)}function ZS(t,e){const n=re(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Og(n)?Dg(n):Ao(n).r_()&&bg(n,e))}function Ng(t,e){const n=re(t),r=Ao(n);n.N_.delete(e),r.r_()&&eC(n,e),n.N_.size===0&&(r.r_()?r.o_():ls(n)&&n.q_.set("Unknown"))}function bg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(t).A_(e)}function eC(t,e){t.Q_.xe(e),Ao(t).R_(e)}function Dg(t){t.Q_=new FD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ao(t).start(),t.q_.v_()}function Og(t){return ls(t)&&!Ao(t).n_()&&t.N_.size>0}function ls(t){return re(t).L_.size===0}function tC(t){t.Q_=void 0}async function FO(t){t.q_.set("Online")}async function jO(t){t.N_.forEach((e,n)=>{bg(t,e)})}async function UO(t,e){tC(t),Og(t)?(t.q_.M_(e),Dg(t)):t.q_.set("Unknown")}async function zO(t,e,n){if(t.q_.set("Online"),e instanceof US&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uc(t,r)}else if(e instanceof tc?t.Q_.Ke(e):e instanceof jS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ie.min()))try{const r=await YS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(ht.EMPTY_BYTE_STRING,h.snapshotVersion)),eC(s,u);const f=new zr(h.target,u,c,h.sequenceNumber);bg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Uc(t,r)}}async function Uc(t,e,n){if(!Nl(e))throw e;t.L_.add(1),await Ol(t),t.q_.set("Offline"),n||(n=()=>YS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Fh(t)})}function nC(t,e){return e().catch(n=>Uc(t,n,e))}async function jh(t){const e=re(t),n=ai(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;BO(e);)try{const i=await CO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,WO(e,i)}catch(i){await Uc(e,i)}rC(e)&&iC(e)}function BO(t){return ls(t)&&t.O_.length<10}function WO(t,e){t.O_.push(e);const n=ai(t);n.r_()&&n.V_&&n.m_(e.mutations)}function rC(t){return ls(t)&&!ai(t).n_()&&t.O_.length>0}function iC(t){ai(t).start()}async function $O(t){ai(t).p_()}async function qO(t){const e=ai(t);for(const n of t.O_)e.m_(n.mutations)}async function HO(t,e,n){const r=t.O_.shift(),i=Cg.from(r,e,n);await nC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jh(t)}async function GO(t,e){e&&ai(t).V_&&await async function(r,i){if(function(o){return MD(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();ai(r).s_(),await nC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await jh(r)}}(t,e),rC(t)&&iC(t)}async function $0(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=ls(n);n.L_.add(3),await Ol(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Fh(n)}async function KO(t,e){const n=re(t);e?(n.L_.delete(2),await Fh(n)):e||(n.L_.add(2),await Ol(n),n.q_.set("Unknown"))}function Ao(t){return t.K_||(t.K_=function(n,r,i){const s=re(n);return s.w_(),new DO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:FO.bind(null,t),Ro:jO.bind(null,t),mo:UO.bind(null,t),d_:zO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Og(t)?Dg(t):t.q_.set("Unknown")):(await t.K_.stop(),tC(t))})),t.K_}function ai(t){return t.U_||(t.U_=function(n,r,i){const s=re(n);return s.w_(),new OO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$O.bind(null,t),mo:GO.bind(null,t),f_:qO.bind(null,t),g_:HO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await jh(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Mg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lg(t,e){if(_r("AsyncQueue",`${e}: ${t}`),Nl(t))return new K(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=fa(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new Hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.W_=new Xe(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ho{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ho(e,n,Hs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class YO{constructor(){this.queries=H0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=re(n),s=i.queries;i.queries=H0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new K(L.ABORTED,"Firestore shutting down"))}}function H0(){return new xo(t=>CS(t),bh)}async function Vg(t,e){const n=re(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new QO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Lg(o,`Initialization of query '${ws(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&jg(n)}async function Fg(t,e){const n=re(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XO(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&jg(n)}function JO(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function jg(t){t.Y_.forEach(e=>{e.next()})}var zp,G0;(G0=zp||(zp={})).ea="default",G0.Cache="cache";class Ug{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==zp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.key=e}}class oC{constructor(e){this.key=e}}class ZO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=xS(e),this.Ra=new Hs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new q0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),_=Dh(this.query,f)?f:null,w=!!p&&this.mutatedKeys.has(p.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;p&&_?p.data.isEqual(_.data)?w!==C&&(r.track({type:3,doc:_}),N=!0):this.ga(p,_)||(r.track({type:2,doc:_}),N=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),N=!0):p&&!_&&(r.track({type:1,doc:p}),N=!0,(u||c)&&(a=!0)),N&&(_?(o=o.add(_),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,w){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return C(_)-C(w)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ho(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new q0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new oC(r))}),this.da.forEach(r=>{e.has(r)||n.push(new sC(r))}),n}ba(e){this.Ta=e.Ts,this.da=ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ho.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class eM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tM{constructor(e){this.key=e,this.va=!1}}class nM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new xo(a=>CS(a),bh),this.Ma=new Map,this.xa=new Set,this.Oa=new Xe(X.comparator),this.Na=new Map,this.La=new Rg,this.Ba={},this.ka=new Map,this.qa=co.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function rM(t,e,n=!0){const r=dC(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await aC(r,e,n,!0),i}async function iM(t,e){const n=dC(t);await aC(n,e,!0,!1)}async function aC(t,e,n,r){const i=await xO(t.localStore,Wn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await sM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ZS(t.remoteStore,i),a}async function sM(t,e,n,r,i){t.Ka=(f,p,_)=>async function(C,N,T,E){let x=N.view.ma(T);x.ns&&(x=await z0(C.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,x)));const P=E&&E.targetChanges.get(N.targetId),O=E&&E.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(x,C.isPrimaryClient,P,O);return Q0(C,N.targetId,V.wa),V.snapshot}(t,f,p,_);const s=await z0(t.localStore,e,!0),o=new ZO(e,s.Ts),a=o.ma(s.documents),u=Dl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Q0(t,n,c.wa);const h=new eM(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function oM(t,e,n){const r=re(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!bh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Up(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ng(r.remoteStore,i.targetId),Bp(r,i.targetId)}).catch(Pl)):(Bp(r,i.targetId),await Up(r.localStore,i.targetId,!0))}async function aM(t,e){const n=re(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ng(n.remoteStore,r.targetId))}async function lM(t,e,n){const r=mM(t);try{const i=await function(o,a){const u=re(o),c=Ye.now(),h=a.reduce((_,w)=>_.add(w.key),ce());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let w=yr(),C=ce();return u.cs.getEntries(_,h).next(N=>{w=N,w.forEach((T,E)=>{E.isValidDocument()||(C=C.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,w)).next(N=>{f=N;const T=[];for(const E of a){const x=kD(E,f.get(E.key).overlayedDocument);x!=null&&T.push(new mi(E.key,x,_S(x.value.mapValue),Gt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,T,a)}).next(N=>{p=N;const T=N.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(_,N.batchId,T)})}).then(()=>({batchId:p.batchId,changes:RS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Xe(pe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ml(r,i.changes),await jh(r.remoteStore)}catch(i){const s=Lg(i,"Failed to persist write");n.reject(s)}}async function lC(t,e){const n=re(t);try{const r=await IO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ye(o.va):i.removedDocuments.size>0&&(ye(o.va),o.va=!1))}),await Ml(n,r,e)}catch(r){await Pl(r)}}function K0(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=re(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&jg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uM(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Xe(X.comparator);o=o.insert(s,Rt.newNoDocument(s,ie.min()));const a=ce().add(s),u=new Lh(ie.min(),new Map,new Xe(pe),o,a);await lC(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),zg(r)}else await Up(r.localStore,e,!1).then(()=>Bp(r,e,n)).catch(Pl)}async function cM(t,e){const n=re(t),r=e.batch.batchId;try{const i=await TO(n.localStore,e);cC(n,r,null),uC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ml(n,i)}catch(i){await Pl(i)}}async function hM(t,e,n){const r=re(t);try{const i=await function(o,a){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ye(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);cC(r,e,n),uC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ml(r,i)}catch(i){await Pl(i)}}function uC(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function cC(t,e,n){const r=re(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Bp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||hC(t,r)})}function hC(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ng(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),zg(t))}function Q0(t,e,n){for(const r of n)r instanceof sC?(t.La.addReference(r.key,e),dM(t,r)):r instanceof oC?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||hC(t,r.key)):ne()}function dM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),zg(t))}function zg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new tM(n)),t.Oa=t.Oa.insert(n,r),ZS(t.remoteStore,new zr(Wn(Nh(n.path)),r,"TargetPurposeLimboResolution",gg.oe))}}async function Ml(t,e,n){const r=re(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Pg.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=re(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>z.forEach(c,p=>z.forEach(p.$i,_=>h.persistence.referenceDelegate.addReference(f,p.targetId,_)).next(()=>z.forEach(p.Ui,_=>h.persistence.referenceDelegate.removeReference(f,p.targetId,_)))))}catch(f){if(!Nl(f))throw f;Y("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const _=h.os.get(p),w=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(w);h.os=h.os.insert(p,C)}}}(r.localStore,s))}async function fM(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await QS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new K(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ml(n,r.hs)}}function pM(t,e){const n=re(t),r=n.Na.get(e);if(r&&r.va)return ce().add(r.key);{let i=ce();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function dC(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uM.bind(null,e),e.Ca.d_=XO.bind(null,e.eventManager),e.Ca.$a=JO.bind(null,e.eventManager),e}function mM(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hM.bind(null,e),e}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return EO(this.persistence,new vO,e.initialUser,this.serializer)}Ga(e){return new gO(kg.Zr,this.serializer)}Wa(e){return new RO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class Wp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>K0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fM.bind(null,this.syncEngine),await KO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YO}()}createDatastore(e){const n=Vh(e.databaseInfo.databaseId),r=function(s){return new bO(s)}(e.databaseInfo);return function(s,o,a,u){return new MO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new VO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>K0(this.syncEngine,n,0),function(){return W0.D()?new W0:new kO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new nM(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=re(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ol(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Wp.provider={build:()=>new Wp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=xt.UNAUTHENTICATED,this.clientId=mg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cf(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Y0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _M(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$0(e.remoteStore,i)),t._onlineComponents=e}async function _M(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await cf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await cf(t,new zc)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await cf(t,new zc);return t._offlineComponents}async function Wg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Y0(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Y0(t,new Wp))),t._onlineComponents}function yM(t){return Wg(t).then(e=>e.syncEngine)}function vM(t){return Wg(t).then(e=>e.datastore)}async function Bc(t){const e=await Wg(t),n=e.eventManager;return n.onListen=rM.bind(null,e.syncEngine),n.onUnlisten=oM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aM.bind(null,e.syncEngine),n}function wM(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Bg({next:p=>{h.Za(),o.enqueueAndForget(()=>Fg(s,f));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new K(L.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&u&&u.source==="server"?c.reject(new K(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Ug(Nh(a.path),h,{includeMetadataChanges:!0,_a:!0});return Vg(s,f)}(await Bc(t),t.asyncQueue,e,n,r)),r.promise}function EM(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Bg({next:p=>{h.Za(),o.enqueueAndForget(()=>Fg(s,f)),p.fromCache&&u.source==="server"?c.reject(new K(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Ug(a,h,{includeMetadataChanges:!0,_a:!0});return Vg(s,f)}(await Bc(t),t.asyncQueue,e,n,r)),r.promise}function TM(t,e,n){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await vM(t);r.resolve(async function(o,a,u){var c;const h=re(o),{request:f,ut:p,parent:_}=QD(h.serializer,gD(a),u);h.connection.Fo||delete f.parent;const w=(await h.Lo("RunAggregationQuery",h.serializer.databaseId,_,f,1)).filter(N=>!!N.result);ye(w.length===1);const C=(c=w[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(C).reduce((N,T)=>(N[p[T]]=C[T],N),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e,n){if(!n)throw new K(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mC(t,e,n,r){if(e===!0&&r===!0)throw new K(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function J0(t){if(!X.isDocumentKey(t))throw new K(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Z0(t){if(X.isDocumentKey(t))throw new K(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uh(t);throw new K(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function IM(t,e){if(e<=0)throw new K(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ew({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ew(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pS;switch(r.type){case"firstParty":return new Bb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=X0.get(n);r&&(Y("ComponentProvider","Removing Datastore"),X0.delete(n),r.terminate())}(this),Promise.resolve()}}function gC(t,e,n,r={}){var i;const s=(t=kt(t,zh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=xt.MOCK_USER;else{a=TI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new xt(c)}t._authCredentials=new jb(new fS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bn(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class ur extends bn{constructor(e,n,r){super(e,n,Nh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new X(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function rn(t,e,...n){if(t=Se(t),pC("collection","path",e),t instanceof zh){const r=Re.fromString(e,...n);return Z0(r),new ur(t,null,r)}{if(!(t instanceof _t||t instanceof ur))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Z0(r),new ur(t.firestore,null,r)}}function nt(t,e,...n){if(t=Se(t),arguments.length===1&&(e=mg.newId()),pC("doc","path",e),t instanceof zh){const r=Re.fromString(e,...n);return J0(r),new _t(t,null,new X(r))}{if(!(t instanceof _t||t instanceof ur))throw new K(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return J0(r),new _t(t.firestore,t instanceof ur?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new XS(this,"async_queue_retry"),this.Vu=()=>{const r=uf();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=uf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=uf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Bn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Nl(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw _r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Mg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function nw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Nn extends zh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new tw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tw(e),this._firestoreClient=void 0,await e}}}function _C(t,e){const n=typeof t=="object"?t:ng(),r=typeof t=="string"?t:"(default)",i=Ch(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vI("firestore");s&&gC(i,...s)}return i}function us(t){if(t._terminated)throw new K(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SM(t),t._firestoreClient}function SM(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new nD(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,fC(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new gM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class vC{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qi(ht.fromBase64String(e))}catch(n){throw new K(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qi(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=/^__.*__$/;class xM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new bl(e,this.data,n,this.fieldTransforms)}}class wC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function EC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class $h{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new $h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Wc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(EC(this.Cu)&&CM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class AM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vh(e)}Qu(e,n,r,i=!1){return new $h({Cu:e,methodName:n,qu:r,path:ut.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ko(t){const e=t._freezeSettings(),n=Vh(t._databaseId);return new AM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $g(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Kg("Data must be an object, but it was:",o,r);const a=CC(r,o);let u,c;if(s.merge)u=new en(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=$p(e,f,n);if(!o.contains(p))throw new K(L.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);AC(h,p)||h.push(p)}u=new en(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new xM(new zt(a),u,c)}class qh extends cs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qh}}function RM(t,e,n){return new $h({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class qg extends cs{_toFieldTransform(e){return new Ig(e.path,new al)}isEqual(e){return e instanceof qg}}class Hg extends cs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=RM(this,e,!0),r=this.Ku.map(s=>Po(s,n)),i=new uo(r);return new Ig(e.path,i)}isEqual(e){return e instanceof Hg&&Za(this.Ku,e.Ku)}}class Gg extends cs{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new ul(e.serializer,NS(e.serializer,this.$u));return new Ig(e.path,n)}isEqual(e){return e instanceof Gg&&this.$u===e.$u}}function TC(t,e,n,r){const i=t.Qu(1,e,n);Kg("Data must be an object, but it was:",i,r);const s=[],o=zt.empty();os(r,(u,c)=>{const h=Qg(e,u,n);c=Se(c);const f=i.Nu(h);if(c instanceof qh)s.push(h);else{const p=Po(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new en(s);return new wC(o,a,i.fieldTransforms)}function IC(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[$p(e,r,n)],u=[i];if(s.length%2!=0)throw new K(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push($p(e,s[p])),u.push(s[p+1]);const c=[],h=zt.empty();for(let p=a.length-1;p>=0;--p)if(!AC(c,a[p])){const _=a[p];let w=u[p];w=Se(w);const C=o.Nu(_);if(w instanceof qh)c.push(_);else{const N=Po(w,C);N!=null&&(c.push(_),h.set(_,N))}}const f=new en(c);return new wC(h,f,o.fieldTransforms)}function SC(t,e,n,r=!1){return Po(n,t.Qu(r?4:3,e))}function Po(t,e){if(xC(t=Se(t)))return Kg("Unsupported field value:",e,t),CC(t,e);if(t instanceof cs)return function(r,i){if(!EC(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Po(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:jc(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jc(i.serializer,s)}}if(r instanceof Bh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qi)return{bytesValue:zS(i.serializer,r._byteString)};if(r instanceof _t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ag(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Wh)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Tg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Uh(r)}`)}(t,e)}function CC(t,e){const n={};return mS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,i)=>{const s=Po(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Bh||t instanceof Qi||t instanceof _t||t instanceof cs||t instanceof Wh)}function Kg(t,e,n){if(!xC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Uh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function $p(t,e,n){if((e=Se(e))instanceof Ro)return e._internalPath;if(typeof e=="string")return Qg(t,e);throw Wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const kM=new RegExp("[~\\*/\\[\\]]");function Qg(t,e,n){if(e.search(kM)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ro(...e.split("."))._internalPath}catch{throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(L.INVALID_ARGUMENT,a+t+u)}function AC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PM extends Yg{data(){return super.data()}}function Hh(t,e){return typeof e=="string"?Qg(t,e):e instanceof Ro?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xg{}class Ll extends Xg{}function Yi(t,e,...n){let r=[];e instanceof Xg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Gh).length,a=s.filter(u=>u instanceof Vl).length;if(o>1||o>0&&a>0)throw new K(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Vl extends Ll{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Vl(e,n,r)}_apply(e){const n=this._parse(e);return kC(e._query,n),new bn(e.firestore,e.converter,Mp(e._query,n))}_parse(e){const n=ko(e.firestore);return function(s,o,a,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new K(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){iw(f,h);const _=[];for(const w of f)_.push(rw(u,s,w));p={arrayValue:{values:_}}}else p=rw(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||iw(f,h),p=SC(a,o,f,h==="in"||h==="not-in");return Qe.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fo(t,e,n){const r=e,i=Hh("where",t);return Vl._create(i,r,n)}class Gh extends Xg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)kC(o,u),o=Mp(o,u)}(e._query,n),new bn(e.firestore,e.converter,Mp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kh extends Ll{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Kh(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ol(s,o)}(e._query,this._field,this._direction);return new bn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new as(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Xi(t,e="asc"){const n=e,r=Hh("orderBy",t);return Kh._create(r,n)}class Qh extends Ll{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Qh(e,n,r)}_apply(e){return new bn(e.firestore,e.converter,Fc(e._query,this._limit,this._limitType))}}function cl(t){return IM("limit",t),Qh._create("limit",t,"F")}class Yh extends Ll{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Yh(e,n,r)}_apply(e){const n=NM(e,this.type,this._docOrFields,this._inclusive);return new bn(e.firestore,e.converter,function(i,s){return new as(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Jg(...t){return Yh._create("startAfter",t,!1)}function NM(t,e,n,r){if(n[0]=Se(n[0]),n[0]instanceof Yg)return function(s,o,a,u,c){if(!u)throw new K(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of qs(s))if(f.field.isKeyField())h.push(Vc(o,u.key));else{const p=u.data.field(f.field);if(Ph(p))throw new K(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const _=f.field.canonicalString();throw new K(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}h.push(p)}return new lo(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ko(t.firestore);return function(o,a,u,c,h,f){const p=o.explicitOrderBy;if(h.length>p.length)throw new K(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let w=0;w<h.length;w++){const C=h[w];if(p[w].field.isKeyField()){if(typeof C!="string")throw new K(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof C}`);if(!Eg(o)&&C.indexOf("/")!==-1)throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${C}' contains a slash.`);const N=o.path.child(Re.fromString(C));if(!X.isDocumentKey(N))throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const T=new X(N);_.push(Vc(a,T))}else{const N=SC(u,c,C);_.push(N)}}return new lo(_,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function rw(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new K(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eg(e)&&n.indexOf("/")!==-1)throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!X.isDocumentKey(r))throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vc(t,new X(r))}if(n instanceof _t)return Vc(t,n._key);throw new K(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uh(n)}.`)}function iw(t,e){if(!Array.isArray(t)||t.length===0)throw new K(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class PC{convertValue(e,n="none"){switch(Ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>qe(o.doubleValue));return new Wh(s)}convertGeoPoint(e){return new Bh(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_g(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(il(e));default:return null}}convertTimestamp(e){const n=oi(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);ye(KS(r));const i=new so(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||_r(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function NC(){return new yC("count")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class e_ extends Yg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ra extends e_{data(e={}){return super.data(e)}}class t_{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ra(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ra(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ra(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:bM(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){t=kt(t,_t);const e=kt(t.firestore,Nn);return wM(us(e),t._key).then(n=>DC(e,t,n))}class Xh extends PC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function li(t){t=kt(t,bn);const e=kt(t.firestore,Nn),n=us(e),r=new Xh(e);return RC(t._query),EM(n,t._query).then(i=>new t_(e,r,t,i))}function n_(t,e,n){t=kt(t,_t);const r=kt(t.firestore,Nn),i=Zg(t.converter,e,n);return jl(r,[$g(ko(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Gt.none())])}function gi(t,e,n,...r){t=kt(t,_t);const i=kt(t.firestore,Nn),s=ko(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof Ro?IC(s,"updateDoc",t._key,e,n,r):TC(s,"updateDoc",t._key,e),jl(i,[o.toMutation(t._key,Gt.exists(!0))])}function bC(t,e){const n=kt(t.firestore,Nn),r=nt(t),i=Zg(t.converter,e);return jl(n,[$g(ko(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function Fl(t,...e){var n,r,i;t=Se(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||nw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(nw(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof _t)c=kt(t.firestore,Nn),h=Nh(t._key.path),u={next:f=>{e[o]&&e[o](DC(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=kt(t,bn);c=kt(f.firestore,Nn),h=f._query;const p=new Xh(c);u={next:_=>{e[o]&&e[o](new t_(c,p,f,_))},error:e[o+1],complete:e[o+2]},RC(t._query)}return function(p,_,w,C){const N=new Bg(C),T=new Ug(_,N,w);return p.asyncQueue.enqueueAndForget(async()=>Vg(await Bc(p),T)),()=>{N.Za(),p.asyncQueue.enqueueAndForget(async()=>Fg(await Bc(p),T))}}(us(c),h,a,u)}function jl(t,e){return function(r,i){const s=new Bn;return r.asyncQueue.enqueueAndForget(async()=>lM(await yM(r),i,s)),s.promise}(us(t),e)}function DC(t,e,n){const r=n.docs.get(e._key),i=new Xh(t);return new e_(t,i,e._key,r,new Os(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){return MC(t,{count:NC()})}function MC(t,e){const n=kt(t.firestore,Nn),r=us(n),i=eD(e,(s,o)=>new DD(o,s.aggregateType,s._internalFieldPath));return TM(r,t._query,i).then(s=>function(a,u,c){const h=new Xh(a);return new vC(u,h,c)}(n,t,s))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ko(e)}set(e,n,r){this._verifyNotCommitted();const i=hf(e,this._firestore),s=Zg(i.converter,n,r),o=$g(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Gt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=hf(e,this._firestore);let o;return o=typeof(n=Se(n))=="string"||n instanceof Ro?IC(this._dataReader,"WriteBatch.update",s._key,n,r,i):TC(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Gt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=hf(e,this._firestore);return this._mutations=this._mutations.concat(new Sg(n._key,Gt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hf(t,e){if((t=Se(t)).firestore!==e)throw new K(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function vr(){return new qg("serverTimestamp")}function VC(...t){return new Hg("arrayUnion",t)}function nc(t){return new Gg("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){return us(t=kt(t,Nn)),new LC(t,e=>jl(t,e))}(function(e,n=!0){(function(i){Co=i})(ss),Wi(new ii("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Nn(new Ub(r.getProvider("auth-internal")),new $b(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Un(w0,"4.7.3",e),Un(w0,"4.7.3","esm2017")})();const DM=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:PC,AggregateField:yC,AggregateQuerySnapshot:vC,Bytes:Qi,CollectionReference:ur,DocumentReference:_t,DocumentSnapshot:e_,FieldPath:Ro,FieldValue:cs,Firestore:Nn,FirestoreError:K,GeoPoint:Bh,Query:bn,QueryCompositeFilterConstraint:Gh,QueryConstraint:Ll,QueryDocumentSnapshot:Ra,QueryFieldFilterConstraint:Vl,QueryLimitConstraint:Qh,QueryOrderByConstraint:Kh,QuerySnapshot:t_,QueryStartAtConstraint:Yh,SnapshotMetadata:Os,Timestamp:Ye,VectorValue:Wh,WriteBatch:LC,_AutoId:mg,_ByteString:ht,_DatabaseId:so,_DocumentKey:X,_EmptyAuthCredentialsProvider:pS,_FieldPath:ut,_cast:kt,_logWarn:Hi,_validateIsNotUsedTogether:mC,addDoc:bC,arrayUnion:VC,collection:rn,connectFirestoreEmulator:gC,count:NC,doc:nt,ensureFirestoreConfigured:us,executeWrite:jl,getAggregateFromServer:MC,getCountFromServer:OC,getDoc:Ji,getDocs:li,getFirestore:_C,increment:nc,limit:cl,onSnapshot:Fl,orderBy:Xi,query:Yi,serverTimestamp:vr,setDoc:n_,startAfter:Jg,updateDoc:gi,where:fo,writeBatch:FC},Symbol.toStringTag,{value:"Module"}));var sw={};const ow="@firebase/database",aw="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jC="";function OM(t){jC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ja(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new MM(e)}}catch{}return new LM},Di=UC("localStorage"),VM=UC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new Sh("@firebase/database"),FM=function(){let t=1;return function(){return t++}}(),zC=function(t){const e=R1(t),n=new S1;n.update(e);const r=n.digest();return Zm.encodeByteArray(r)},Ul=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ul.apply(null,r):typeof r=="object"?e+=et(r):e+=r,e+=" "}return e};let ka=null,lw=!0;const jM=function(t,e){q(!0,"Can't turn on custom loggers persistently."),Gs.logLevel=le.VERBOSE,ka=Gs.log.bind(Gs)},pt=function(...t){if(lw===!0&&(lw=!1,ka===null&&VM.get("logging_enabled")===!0&&jM()),ka){const e=Ul.apply(null,t);ka(e)}},zl=function(t){return function(...e){pt(t,...e)}},qp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ul(...t);Gs.error(e)},wr=function(...t){const e=`FIREBASE FATAL ERROR: ${Ul(...t)}`;throw Gs.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+Ul(...t);Gs.warn(e)},UM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},r_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},zM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},po="[MIN_NAME]",Zi="[MAX_NAME]",hs=function(t,e){if(t===e)return 0;if(t===po||e===Zi)return-1;if(e===po||t===Zi)return 1;{const n=uw(t),r=uw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},BM=function(t,e){return t===e?0:t<e?-1:1},na=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+et(e))},i_=function(t){if(typeof t!="object"||t===null)return et(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=et(e[r]),n+=":",n+=i_(t[e[r]]);return n+="}",n},BC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function vt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const WC=function(t){q(!r_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(h.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},WM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$M=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const HM=new RegExp("^-?(0*)\\d{1,10}$"),GM=-2147483648,KM=2147483647,uw=function(t){if(HM.test(t)){const e=Number(t);if(e>=GM&&e<=KM)return e}return null},No=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},QM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class rc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="5",$C="v",qC="s",HC="r",GC="f",KC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,QC="ls",YC="p",Hp="ac",XC="websocket",JC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Di.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Di.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function JM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ex(t,e,n){q(typeof e=="string","typeof type must == string"),q(typeof n=="object","typeof params must == object");let r;if(e===XC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===JC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JM(t)&&(n.ns=t.namespace);const i=[];return vt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(){this.counters_={}}incrementCounter(e,n=1){Gn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return s1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df={},ff={};function o_(t){const e=t.toString();return df[e]||(df[e]=new ZM),df[e]}function eL(t,e){const n=t.toString();return ff[n]||(ff[n]=e()),ff[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&No(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="start",nL="close",rL="pLPCommand",iL="pRTLPCB",tx="id",nx="pw",rx="ser",sL="cb",oL="seg",aL="ts",lL="d",uL="dframe",ix=1870,sx=30,cL=ix-sx,hL=25e3,dL=3e4;class Ms{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zl(e),this.stats_=o_(n),this.urlFn=u=>(this.appCheckToken&&(u[Hp]=this.appCheckToken),ex(n,JC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dL)),zM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new a_((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cw)this.id=a,this.password=u;else if(o===nL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[cw]="t",r[rx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$C]=s_,this.transportSessionId&&(r[qC]=this.transportSessionId),this.lastSessionId&&(r[QC]=this.lastSessionId),this.applicationId&&(r[YC]=this.applicationId),this.appCheckToken&&(r[Hp]=this.appCheckToken),typeof location<"u"&&location.hostname&&KC.test(location.hostname)&&(r[HC]=GC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ms.forceAllow_=!0}static forceDisallow(){Ms.forceDisallow_=!0}static isAvailable(){return Ms.forceAllow_?!0:!Ms.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!WM()&&!$M()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gI(n),i=BC(r,cL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[uL]="t",r[tx]=e,r[nx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class a_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FM(),window[rL+this.uniqueCallbackIdentifier]=e,window[iL+this.uniqueCallbackIdentifier]=n,this.myIFrame=a_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tx]=this.myID,e[nx]=this.myPW,e[rx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sx+r.length<=ix;){const o=this.pendingSegs.shift();r=r+"&"+oL+i+"="+o.seg+"&"+aL+i+"="+o.ts+"&"+lL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(hL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=16384,pL=45e3;let $c=null;typeof MozWebSocket<"u"?$c=MozWebSocket:typeof WebSocket<"u"&&($c=WebSocket);class In{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zl(this.connId),this.stats_=o_(n),this.connURL=In.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[$C]=s_,typeof location<"u"&&location.hostname&&KC.test(location.hostname)&&(o[HC]=GC),n&&(o[qC]=n),r&&(o[QC]=r),i&&(o[Hp]=i),s&&(o[YC]=s),ex(e,XC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Di.set("previous_websocket_failure",!0);try{let r;m1(),this.mySock=new $c(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&$c!==null&&!In.forceDisallow_}static previouslyFailed(){return Di.isInMemoryStorage||Di.get("previous_websocket_failure")===!0}markConnectionHealthy(){Di.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ja(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=BC(n,fL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}In.responsesRequiredToBeHealthy=2;In.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ms,In]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=In&&In.isAvailable();let r=n&&!In.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[In];else{const i=this.transports_=[];for(const s of hl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);hl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL=6e4,gL=5e3,_L=10*1024,yL=100*1024,pf="t",hw="d",vL="s",dw="r",wL="e",fw="o",pw="a",mw="n",gw="p",EL="h";class TL{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zl("c:"+this.id+":"),this.transportManager_=new hl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_L?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(pf in e){const n=e[pf];n===pw?this.upgradeIfSecondaryHealthy_():n===dw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=na("t",e),r=na("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=na("t",e),r=na("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=na(pf,e);if(hw in e){const r=e[hw];if(n===EL){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===mw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vL?this.onConnectionShutdown_(r):n===dw?this.onReset_(r):n===wL?qp("Server Error: "+r):n===fw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),s_!==r&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Pa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Di.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.allowedEvents_=e,this.listeners_={},q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends ax{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!eg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qc}getInitialEvent(e){return q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=32,yw=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ee("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ui(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function l_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function IL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function dl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function lx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function We(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Mt(t,e){const n=ue(t),r=ue(e);if(n===null)return e;if(n===r)return Mt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function SL(t,e){const n=dl(t,0),r=dl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=hs(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ux(t,e){if(ui(t)!==ui(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function fn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ui(t)>ui(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class CL{constructor(e,n){this.errorPrefix_=n,this.parts_=dl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ih(this.parts_[r]);cx(this)}}function xL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ih(e),cx(t)}function AL(t){const e=t.parts_.pop();t.byteLength_-=Ih(e),t.parts_.length>0&&(t.byteLength_-=1)}function cx(t){if(t.byteLength_>yw)throw new Error(t.errorPrefix_+"has a key path longer than "+yw+" bytes ("+t.byteLength_+").");if(t.parts_.length>_w)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_w+") or object contains a cycle "+xi(t))}function xi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_ extends ax{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new u_}getInitialEvent(e){return q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=1e3,RL=60*5*1e3,vw=30*1e3,kL=1.3,PL=3e4,NL="server_kill",ww=3;class cr extends ox{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=cr.nextPersistentConnectionId_++,this.log_=zl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ra,this.maxReconnectDelay_=RL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");u_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(et(s)),q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Cl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),q(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;cr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gn(e,"w")){const r=no(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||I1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=T1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):qp("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ra,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ra,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PL&&(this.reconnectDelay_=ra),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new TL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Vt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(NL)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Vt(f),u())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wp(this.interruptReasons_)&&(this.reconnectDelay_=ra,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>i_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ww&&(this.reconnectDelay_=vw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ww&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jC.replace(/\./g,"-")]=1,eg()?e["framework.cordova"]=1:II()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qc.getInstance().currentlyOnline();return wp(this.interruptReasons_)&&e}}cr.nextPersistentConnectionId_=0;cr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(po,e),i=new se(po,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu;class hx extends Jh{static get __EMPTY_NODE(){return bu}static set __EMPTY_NODE(e){bu=e}compare(e,n){return hs(e.name,n.name)}isDefinedOn(e){throw To("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Zi,bu)}makePost(e,n){return q(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,bu)}toString(){return".key"}}const Ks=new hx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??Wt.EMPTY_NODE,this.right=s??Wt.EMPTY_NODE}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Wt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}at.RED=!0;at.BLACK=!1;class bL{copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Wt{constructor(e,n=Wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,at.BLACK,null,null))}remove(e){return new Wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,at.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Du(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Du(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Du(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Du(this.root_,null,this.comparator_,!0,e)}}Wt.EMPTY_NODE=new bL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(t,e){return hs(t.name,e.name)}function c_(t,e){return hs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gp;function OL(t){Gp=t}const dx=function(t){return typeof t=="number"?"number:"+WC(t):"string:"+t},fx=function(t){if(t.isLeafNode()){const e=t.val();q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gn(e,".sv"),"Priority must be a string or number.")}else q(t===Gp||t.isEmpty(),"priority of unexpected type.");q(t===Gp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ew;class it{constructor(e,n=it.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fx(this.priorityNode_)}static set __childrenNodeConstructor(e){Ew=e}static get __childrenNodeConstructor(){return Ew}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new it(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ue(e)===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ue(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(q(r!==".priority"||ui(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,it.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=WC(this.value_):e+=this.value_,this.lazyHash_=zC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===it.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof it.__childrenNodeConstructor?-1:(q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=it.VALUE_TYPE_ORDER.indexOf(n),s=it.VALUE_TYPE_ORDER.indexOf(r);return q(i>=0,"Unknown leaf type: "+n),q(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}it.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let px,mx;function ML(t){px=t}function LL(t){mx=t}class VL extends Jh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?hs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Zi,new it("[PRIORITY-POST]",mx))}makePost(e,n){const r=px(e);return new se(n,new it("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new VL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=Math.log(2);class jL{constructor(e){const n=s=>parseInt(Math.log(s)/FL,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Hc=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,p;if(h===0)return null;if(h===1)return f=t[u],p=n?n(f):f,new at(p,f.node,at.BLACK,null,null);{const _=parseInt(h/2,10)+u,w=i(u,_),C=i(_+1,c);return f=t[_],p=n?n(f):f,new at(p,f.node,at.BLACK,w,C)}},s=function(u){let c=null,h=null,f=t.length;const p=function(w,C){const N=f-w,T=f;f-=w;const E=i(N+1,T),x=t[N],P=n?n(x):x;_(new at(P,x.node,C,null,E))},_=function(w){c?(c.left=w,c=w):(h=w,c=w)};for(let w=0;w<u.count;++w){const C=u.nextBitIsOne(),N=Math.pow(2,u.count-(w+1));C?p(N,at.BLACK):(p(N,at.BLACK),p(N,at.RED))}return h},o=new jL(t.length),a=s(o);return new Wt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mf;const ys={};class ar{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return q(ys&&$e,"ChildrenNode.ts has not been loaded"),mf=mf||new ar({".priority":ys},{".priority":$e}),mf}get(e){const n=no(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Wt?n:null}hasIndex(e){return Gn(this.indexSet_,e.toString())}addIndex(e,n){q(e!==Ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(se.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Hc(r,e.getCompare()):a=ys;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new ar(h,c)}addToIndexes(e,n){const r=Pc(this.indexes_,(i,s)=>{const o=no(this.indexSet_,s);if(q(o,"Missing index implementation for "+s),i===ys)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(se.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Hc(a,o.getCompare())}else return ys;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new se(e.name,a))),u.insert(e,e.node)}});return new ar(r,this.indexSet_)}removeFromIndexes(e,n){const r=Pc(this.indexes_,i=>{if(i===ys)return i;{const s=n.get(e.name);return s?i.remove(new se(e.name,s)):i}});return new ar(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia;class ee{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&fx(this.priorityNode_),this.children_.isEmpty()&&q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ia||(ia=new ee(new Wt(c_),null,ar.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ia}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ia:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ia:this.priorityNode_;return new ee(i,o,s)}}updateChild(e,n){const r=ue(e);if(r===null)return n;{q(ue(e)!==".priority"||ui(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),r++,s&&ee.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dx(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":zC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new se(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bl?-1:0}withIndex(e){if(e===Ks||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ks||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ks?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class UL extends ee{constructor(){super(new Wt(c_),ee.EMPTY_NODE,ar.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Bl=new UL;Object.defineProperties(se,{MIN:{value:new se(po,ee.EMPTY_NODE)},MAX:{value:new se(Zi,Bl)}});hx.__EMPTY_NODE=ee.EMPTY_NODE;it.__childrenNodeConstructor=ee;OL(Bl);LL(Bl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=!0;function Ze(t,e=null){if(t===null)return ee.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new it(n,Ze(e))}if(!(t instanceof Array)&&zL){const n=[];let r=!1;if(vt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Ze(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new se(o,u)))}}),n.length===0)return ee.EMPTY_NODE;const s=Hc(n,DL,o=>o.name,c_);if(r){const o=Hc(n,$e.getCompare());return new ee(s,Ze(e),new ar({".priority":o},{".priority":$e}))}else return new ee(s,Ze(e),ar.Default)}else{let n=ee.EMPTY_NODE;return vt(t,(r,i)=>{if(Gn(t,r)&&r.substring(0,1)!=="."){const s=Ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ze(e))}}ML(Ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL extends Jh{constructor(e){super(),this.indexPath_=e,q(!oe(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?hs(e.name,n.name):s}makePost(e,n){const r=Ze(e),i=ee.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Bl);return new se(Zi,e)}toString(){return dl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL extends Jh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?hs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=Ze(e);return new se(n,r)}toString(){return".value"}}const $L=new WL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){return{type:"value",snapshotNode:t}}function mo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function pl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){q(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(fl(n,a)):q(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(mo(n,r)):o.trackChildChange(pl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild($e,(i,s)=>{n.hasChild(i)||r.trackChildChange(fl(i,s))}),n.isLeafNode()||n.forEachChild($e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(pl(i,s,o))}else r.trackChildChange(mo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.indexedFilter_=new h_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ml.getStartPost_(e),this.endPost_=ml.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new se(n,r))||(r=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=ee.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ee.EMPTY_NODE);const s=this;return n.forEachChild($e,(o,a)=>{s.matches(new se(o,a))||(i=i.updateImmediateChild(o,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ml(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new se(n,r))||(r=ee.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ee.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ee.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,_)=>f(_,p)}else o=this.index_.getCompare();const a=e;q(a.numChildren()===this.limit_,"");const u=new se(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,u);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(pl(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(fl(n,f));const C=a.updateImmediateChild(n,ee.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(mo(p.name,p.node)),C.updateImmediateChild(p.name,p.node)):C}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(fl(c.name,c.node)),s.trackChildChange(mo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:po}hasEnd(){return this.endSet_}getIndexEndValue(){return q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new d_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GL(t){return t.loadsAllData()?new h_(t.getIndex()):t.hasLimit()?new HL(t):new ml(t)}function Tw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===$e?n="$priority":t.index_===$L?n="$value":t.index_===Ks?n="$key":(q(t.index_ instanceof BL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=et(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=et(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+et(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=et(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Iw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends ox{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=zl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Gc.getListenId_(e,r),a={};this.listens_[o]=a;const u=Tw(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),no(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Gc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Tw(e._queryParams),r=e._path.toString(),i=new Cl;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Io(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ja(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return{value:null,children:new Map}}function _x(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ue(e);t.children.has(r)||t.children.set(r,Kc());const i=t.children.get(r);e=Ae(e),_x(i,e,n)}}function Kp(t,e,n){t.value!==null?n(e,t.value):QL(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);Kp(i,s,n)})}function QL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&vt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=10*1e3,XL=30*1e3,JL=5*60*1e3;class ZL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new YL(e);const r=Sw+(XL-Sw)*Math.random();Pa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;vt(e,(i,s)=>{s>0&&Gn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Pa(this.reportStats_.bind(this),Math.floor(Math.random()*2*JL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Sn||(Sn={}));function f_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function p_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function m_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Sn.ACK_USER_WRITE,this.source=f_()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Qc(me(),n,this.revert)}}else return q(ue(this.path)===e,"operationForChild called for unrelated child."),new Qc(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.source=e,this.path=n,this.type=Sn.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new gl(this.source,me()):new gl(this.source,Ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Sn.OVERWRITE}operationForChild(e){return oe(this.path)?new es(this.source,me(),this.snap.getImmediateChild(e)):new es(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Sn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new es(this.source,me(),n.value):new go(this.source,me(),n)}else return q(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new go(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function t2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(qL(o.childName,o.snapshotNode))}),sa(t,i,"child_removed",e,r,n),sa(t,i,"child_added",e,r,n),sa(t,i,"child_moved",s,r,n),sa(t,i,"child_changed",e,r,n),sa(t,i,"value",e,r,n),i}function sa(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>r2(t,a,u)),o.forEach(a=>{const u=n2(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function n2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function r2(t,e,n){if(e.childName==null||n.childName==null)throw To("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t,e){return{eventCache:t,serverCache:e}}function Na(t,e,n,r){return Zh(new ci(e,n,r),t.serverCache)}function yx(t,e,n,r){return Zh(t.eventCache,new ci(e,n,r))}function Yc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ts(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf;const i2=()=>(gf||(gf=new Wt(BM)),gf);class xe{constructor(e,n=i2()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return vt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(oe(e))return null;{const r=ue(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ae(e),n);return s!=null?{path:We(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ue(e),r=this.children.get(n);return r!==null?r.subtree(Ae(e)):new xe(null)}}set(e,n){if(oe(e))return new xe(n,this.children);{const r=ue(e),s=(this.children.get(r)||new xe(null)).set(Ae(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=ue(e),r=this.children.get(n);if(r){const i=r.remove(Ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(oe(e))return this.value;{const n=ue(e),r=this.children.get(n);return r?r.get(Ae(e)):null}}setTree(e,n){if(oe(e))return n;{const r=ue(e),s=(this.children.get(r)||new xe(null)).setTree(Ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(We(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(oe(e))return null;{const s=ue(e),o=this.children.get(s);return o?o.findOnPath_(Ae(e),We(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const i=ue(e),s=this.children.get(i);return s?s.foreachOnPath_(Ae(e),We(n,i),r):new xe(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(We(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.writeTree_=e}static empty(){return new Rn(new xe(null))}}function ba(t,e,n){if(oe(e))return new Rn(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Mt(i,e);return s=s.updateChild(o,n),new Rn(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new Rn(s)}}}function Qp(t,e,n){let r=t;return vt(n,(i,s)=>{r=ba(r,We(e,i),s)}),r}function Cw(t,e){if(oe(e))return Rn.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new Rn(n)}}function Yp(t,e){return ds(t,e)!=null}function ds(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Mt(n.path,e)):null}function xw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{e.push(new se(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new se(r,i.value))}),e}function ei(t,e){if(oe(e))return t;{const n=ds(t,e);return n!=null?new Rn(new xe(n)):new Rn(t.writeTree_.subtree(e))}}function Xp(t){return t.writeTree_.isEmpty()}function _o(t,e){return vx(me(),t.writeTree_,e)}function vx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(q(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vx(We(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(We(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e){return Ix(e,t)}function s2(t,e,n,r,i){q(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ba(t.visibleWrites,e,n)),t.lastWriteId=r}function o2(t,e,n,r){q(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Qp(t.visibleWrites,e,n),t.lastWriteId=r}function a2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function l2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);q(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&u2(a,r.path)?i=!1:fn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return c2(t),!0;if(r.snap)t.visibleWrites=Cw(t.visibleWrites,r.path);else{const a=r.children;vt(a,u=>{t.visibleWrites=Cw(t.visibleWrites,We(r.path,u))})}return!0}else return!1}function u2(t,e){if(t.snap)return fn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fn(We(t.path,n),e))return!0;return!1}function c2(t){t.visibleWrites=wx(t.allWrites,h2,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function h2(t){return t.visible}function wx(t,e,n){let r=Rn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)fn(n,o)?(a=Mt(n,o),r=ba(r,a,s.snap)):fn(o,n)&&(a=Mt(o,n),r=ba(r,me(),s.snap.getChild(a)));else if(s.children){if(fn(n,o))a=Mt(n,o),r=Qp(r,a,s.children);else if(fn(o,n))if(a=Mt(o,n),oe(a))r=Qp(r,me(),s.children);else{const u=no(s.children,ue(a));if(u){const c=u.getChild(Ae(a));r=ba(r,me(),c)}}}else throw To("WriteRecord should have .snap or .children")}}return r}function Ex(t,e,n,r,i){if(!r&&!i){const s=ds(t.visibleWrites,e);if(s!=null)return s;{const o=ei(t.visibleWrites,e);if(Xp(o))return n;if(n==null&&!Yp(o,me()))return null;{const a=n||ee.EMPTY_NODE;return _o(o,a)}}}else{const s=ei(t.visibleWrites,e);if(!i&&Xp(s))return n;if(!i&&n==null&&!Yp(s,me()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(fn(c.path,e)||fn(e,c.path))},a=wx(t.allWrites,o,e),u=n||ee.EMPTY_NODE;return _o(a,u)}}}function d2(t,e,n){let r=ee.EMPTY_NODE;const i=ds(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ei(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const u=_o(ei(s,new Ee(o)),a);r=r.updateImmediateChild(o,u)}),xw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ei(t.visibleWrites,e);return xw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function f2(t,e,n,r,i){q(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=We(e,n);if(Yp(t.visibleWrites,s))return null;{const o=ei(t.visibleWrites,s);return Xp(o)?i.getChild(n):_o(o,i.getChild(n))}}function p2(t,e,n,r){const i=We(e,n),s=ds(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ei(t.visibleWrites,i);return _o(o,r.getNode().getImmediateChild(n))}else return null}function m2(t,e){return ds(t.visibleWrites,e)}function g2(t,e,n,r,i,s,o){let a;const u=ei(t.visibleWrites,e),c=ds(u,me());if(c!=null)a=c;else if(n!=null)a=_o(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=p.getNext();for(;_&&h.length<i;)f(_,r)!==0&&h.push(_),_=p.getNext();return h}else return[]}function _2(){return{visibleWrites:Rn.empty(),allWrites:[],lastWriteId:-1}}function Xc(t,e,n,r){return Ex(t.writeTree,t.treePath,e,n,r)}function g_(t,e){return d2(t.writeTree,t.treePath,e)}function Aw(t,e,n,r){return f2(t.writeTree,t.treePath,e,n,r)}function Jc(t,e){return m2(t.writeTree,We(t.treePath,e))}function y2(t,e,n,r,i,s){return g2(t.writeTree,t.treePath,e,n,r,i,s)}function __(t,e,n){return p2(t.writeTree,t.treePath,e,n)}function Tx(t,e){return Ix(We(t.treePath,e),t.writeTree)}function Ix(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),q(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,pl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,fl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,mo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,pl(r,e.snapshotNode,i.oldSnap));else throw To("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Sx=new w2;class y_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ci(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return __(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ts(this.viewCache_),s=y2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E2(t){return{filter:t}}function T2(t,e){q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function I2(t,e,n,r,i){const s=new v2;let o,a;if(n.type===Sn.OVERWRITE){const c=n;c.source.fromUser?o=Jp(t,e,c.path,c.snap,r,i,s):(q(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=Zc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Sn.MERGE){const c=n;c.source.fromUser?o=C2(t,e,c.path,c.children,r,i,s):(q(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Sn.ACK_USER_WRITE){const c=n;c.revert?o=R2(t,e,c.path,r,i,s):o=x2(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Sn.LISTEN_COMPLETE)o=A2(t,e,n.path,r,s);else throw To("Unknown operation type: "+n.type);const u=s.getChanges();return S2(e,o,u),{viewCache:o,changes:u}}function S2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Yc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(gx(Yc(e)))}}function Cx(t,e,n,r,i,s){const o=e.eventCache;if(Jc(r,n)!=null)return e;{let a,u;if(oe(n))if(q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ts(e),h=c instanceof ee?c:ee.EMPTY_NODE,f=g_(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Xc(r,ts(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ue(n);if(c===".priority"){q(ui(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=Aw(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ae(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const p=Aw(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(c).updateChild(h,p):f=o.getNode().getImmediateChild(c)}else f=__(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return Na(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Zc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(oe(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),_,null)}else{const _=ue(n);if(!u.isCompleteForPath(n)&&ui(n)>1)return e;const w=Ae(n),N=u.getNode().getImmediateChild(_).updateChild(w,r);_===".priority"?c=h.updatePriority(u.getNode(),N):c=h.updateChild(u.getNode(),_,N,w,Sx,null)}const f=yx(e,c,u.isFullyInitialized()||oe(n),h.filtersNodes()),p=new y_(i,f,s);return Cx(t,f,n,i,p,a)}function Jp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new y_(i,e,s);if(oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Na(e,c,!0,t.filter.filtersNodes());else{const f=ue(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Na(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Ae(n),_=a.getNode().getImmediateChild(f);let w;if(oe(p))w=r;else{const C=h.getCompleteChild(f);C!=null?l_(p)===".priority"&&C.getChild(lx(p)).isEmpty()?w=C:w=C.updateChild(p,r):w=ee.EMPTY_NODE}if(_.equals(w))u=e;else{const C=t.filter.updateChild(a.getNode(),f,w,p,h,o);u=Na(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Rw(t,e){return t.eventCache.isCompleteForChild(e)}function C2(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=We(n,u);Rw(e,ue(h))&&(a=Jp(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=We(n,u);Rw(e,ue(h))||(a=Jp(t,a,h,c,i,s,o))}),a}function kw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Zp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;oe(n)?c=r:c=new xe(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),w=kw(t,_,p);u=Zc(t,u,new Ee(f),w,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const _=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!_){const w=e.serverCache.getNode().getImmediateChild(f),C=kw(t,w,p);u=Zc(t,u,new Ee(f),C,i,s,o,a)}}),u}function x2(t,e,n,r,i,s,o){if(Jc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(oe(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Zc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(oe(n)){let c=new xe(null);return u.getNode().forEachChild(Ks,(h,f)=>{c=c.set(new Ee(h),f)}),Zp(t,e,n,c,i,s,a,o)}else return e}else{let c=new xe(null);return r.foreach((h,f)=>{const p=We(n,h);u.isCompleteForPath(p)&&(c=c.set(h,u.getNode().getChild(p)))}),Zp(t,e,n,c,i,s,a,o)}}function A2(t,e,n,r,i){const s=e.serverCache,o=yx(e,s.getNode(),s.isFullyInitialized()||oe(n),s.isFiltered());return Cx(t,o,n,r,Sx,i)}function R2(t,e,n,r,i,s){let o;if(Jc(r,n)!=null)return e;{const a=new y_(r,e,i),u=e.eventCache.getNode();let c;if(oe(n)||ue(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Xc(r,ts(e));else{const f=e.serverCache.getNode();q(f instanceof ee,"serverChildren would be complete if leaf node"),h=g_(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=ue(n);let f=__(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Ae(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,ee.EMPTY_NODE,Ae(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xc(r,ts(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Jc(r,me())!=null,Na(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new h_(r.getIndex()),s=GL(r);this.processor_=E2(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(ee.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ee.EMPTY_NODE,a.getNode(),null),h=new ci(u,o.isFullyInitialized(),i.filtersNodes()),f=new ci(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Zh(f,h),this.eventGenerator_=new e2(this.query_)}get query(){return this.query_}}function P2(t){return t.viewCache_.serverCache.getNode()}function N2(t){return Yc(t.viewCache_)}function b2(t,e){const n=ts(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function Pw(t){return t.eventRegistrations_.length===0}function D2(t,e){t.eventRegistrations_.push(e)}function Nw(t,e,n){const r=[];if(n){q(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function bw(t,e,n,r){e.type===Sn.MERGE&&e.source.queryId!==null&&(q(ts(t.viewCache_),"We should always have a full cache before handling merges"),q(Yc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=I2(t.processor_,i,e,n,r);return T2(t.processor_,s.viewCache),q(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,xx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function O2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(s,o)=>{r.push(mo(s,o))}),n.isFullyInitialized()&&r.push(gx(n.getNode())),xx(t,r,n.getNode(),e)}function xx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return t2(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;class Ax{constructor(){this.views=new Map}}function M2(t){q(!eh,"__referenceConstructor has already been defined"),eh=t}function L2(){return q(eh,"Reference.ts has not been loaded"),eh}function V2(t){return t.views.size===0}function v_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return q(s!=null,"SyncTree gave us an op for an invalid query."),bw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(bw(o,e,n,r));return s}}function Rx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Xc(n,i?r:null),u=!1;a?u=!0:r instanceof ee?(a=g_(n,r),u=!1):(a=ee.EMPTY_NODE,u=!1);const c=Zh(new ci(a,u,!1),new ci(r,i,!1));return new k2(e,c)}return o}function F2(t,e,n,r,i,s){const o=Rx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),D2(o,n),O2(o,n)}function j2(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=hi(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(Nw(c,n,r)),Pw(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(Nw(u,n,r)),Pw(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!hi(t)&&s.push(new(L2())(e._repo,e._path)),{removed:s,events:o}}function kx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ti(t,e){let n=null;for(const r of t.views.values())n=n||b2(r,e);return n}function Px(t,e){if(e._queryParams.loadsAllData())return td(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Nx(t,e){return Px(t,e)!=null}function hi(t){return td(t)!=null}function td(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let th;function U2(t){q(!th,"__referenceConstructor has already been defined"),th=t}function z2(){return q(th,"Reference.ts has not been loaded"),th}let B2=1;class Dw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=_2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bx(t,e,n,r,i){return s2(t.pendingWriteTree_,e,n,r,i),i?bo(t,new es(f_(),e,n)):[]}function W2(t,e,n,r){o2(t.pendingWriteTree_,e,n,r);const i=xe.fromObject(n);return bo(t,new go(f_(),e,i))}function Br(t,e,n=!1){const r=a2(t.pendingWriteTree_,e);if(l2(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(me(),!0):vt(r.children,o=>{s=s.set(new Ee(o),!0)}),bo(t,new Qc(r.path,s,n))}else return[]}function Wl(t,e,n){return bo(t,new es(p_(),e,n))}function $2(t,e,n){const r=xe.fromObject(n);return bo(t,new go(p_(),e,r))}function q2(t,e){return bo(t,new gl(p_(),e))}function H2(t,e,n){const r=E_(t,n);if(r){const i=T_(r),s=i.path,o=i.queryId,a=Mt(s,e),u=new gl(m_(o),a);return I_(t,s,u)}else return[]}function Dx(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Nx(o,e))){const u=j2(o,e,n,r);V2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,_)=>hi(_));if(h&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const _=Y2(p);for(let w=0;w<_.length;++w){const C=_[w],N=C.query,T=Vx(t,C);t.listenProvider_.startListening(Da(N),_l(t,N),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Da(e),null):c.forEach(p=>{const _=t.queryToTagMap.get(nd(p));t.listenProvider_.stopListening(Da(p),_)}))}X2(t,c)}return a}function Ox(t,e,n,r){const i=E_(t,r);if(i!=null){const s=T_(i),o=s.path,a=s.queryId,u=Mt(o,e),c=new es(m_(a),u,n);return I_(t,o,c)}else return[]}function G2(t,e,n,r){const i=E_(t,r);if(i){const s=T_(i),o=s.path,a=s.queryId,u=Mt(o,e),c=xe.fromObject(n),h=new go(m_(a),u,c);return I_(t,o,h)}else return[]}function K2(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const w=Mt(p,i);s=s||ti(_,w),o=o||hi(_)});let a=t.syncPointTree_.get(i);a?(o=o||hi(a),s=s||ti(a,me())):(a=new Ax,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=ee.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,w)=>{const C=ti(w,me());C&&(s=s.updateImmediateChild(_,C))}));const c=Nx(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=nd(e);q(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=J2();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const h=ed(t.pendingWriteTree_,i);let f=F2(a,e,n,h,s,u);if(!c&&!o&&!r){const p=Px(a,e);f=f.concat(Z2(t,e,p))}return f}function w_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Mt(o,e),c=ti(a,u);if(c)return c});return Ex(i,e,s,n,!0)}function Q2(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Mt(c,n);r=r||ti(h,f)});let i=t.syncPointTree_.get(n);i?r=r||ti(i,me()):(i=new Ax,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new ci(r,!0,!1):null,a=ed(t.pendingWriteTree_,e._path),u=Rx(i,e,a,s?o.getNode():ee.EMPTY_NODE,s);return N2(u)}function bo(t,e){return Mx(e,t.syncPointTree_,null,ed(t.pendingWriteTree_,me()))}function Mx(t,e,n,r){if(oe(t.path))return Lx(t,e,n,r);{const i=e.get(me());n==null&&i!=null&&(n=ti(i,me()));let s=[];const o=ue(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=Tx(r,o);s=s.concat(Mx(a,u,c,h))}return i&&(s=s.concat(v_(i,t,r,n))),s}}function Lx(t,e,n,r){const i=e.get(me());n==null&&i!=null&&(n=ti(i,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=Tx(r,o),h=t.operationForChild(o);h&&(s=s.concat(Lx(h,a,u,c)))}),i&&(s=s.concat(v_(i,t,r,n))),s}function Vx(t,e){const n=e.query,r=_l(t,n);return{hashFn:()=>(P2(e)||ee.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?H2(t,n._path,r):q2(t,n._path);{const s=qM(i,n);return Dx(t,n,null,s)}}}}function _l(t,e){const n=nd(e);return t.queryToTagMap.get(n)}function nd(t){return t._path.toString()+"$"+t._queryIdentifier}function E_(t,e){return t.tagToQueryMap.get(e)}function T_(t){const e=t.indexOf("$");return q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function I_(t,e,n){const r=t.syncPointTree_.get(e);q(r,"Missing sync point for query tag that we're tracking");const i=ed(t.pendingWriteTree_,e);return v_(r,n,i,null)}function Y2(t){return t.fold((e,n,r)=>{if(n&&hi(n))return[td(n)];{let i=[];return n&&(i=kx(n)),vt(r,(s,o)=>{i=i.concat(o)}),i}})}function Da(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(z2())(t._repo,t._path):t}function X2(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=nd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function J2(){return B2++}function Z2(t,e,n){const r=e._path,i=_l(t,e),s=Vx(t,n),o=t.listenProvider_.startListening(Da(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)q(!hi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!oe(c)&&h&&hi(h))return[td(h).query];{let p=[];return h&&(p=p.concat(kx(h).map(_=>_.query))),vt(f,(_,w)=>{p=p.concat(w)}),p}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(Da(h),_l(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new S_(n)}node(){return this.node_}}class C_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new C_(this.syncTree_,n)}node(){return w_(this.syncTree_,this.path_)}}const eV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ow=function(t,e,n){if(!t||typeof t!="object")return t;if(q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nV(t[".sv"],e);q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:q(!1,"Unexpected server value: "+t)}},nV=function(t,e,n){t.hasOwnProperty("increment")||q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&q(!1,"Unexpected increment value: "+r);const i=e.node();if(q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Fx=function(t,e,n,r){return x_(e,new C_(n,t),r)},jx=function(t,e,n){return x_(t,new S_(e),n)};function x_(t,e,n){const r=t.getPriority().val(),i=Ow(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ow(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new it(a,Ze(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new it(i))),o.forEachChild($e,(a,u)=>{const c=x_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function R_(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=ue(n);for(;i!==null;){const s=no(r.node.children,i)||{children:{},childCount:0};r=new A_(i,r,s),n=Ae(n),i=ue(n)}return r}function Do(t){return t.node.value}function Ux(t,e){t.node.value=e,em(t)}function zx(t){return t.node.childCount>0}function rV(t){return Do(t)===void 0&&!zx(t)}function rd(t,e){vt(t.node.children,(n,r)=>{e(new A_(n,t,r))})}function Bx(t,e,n,r){n&&e(t),rd(t,i=>{Bx(i,e,!0)})}function iV(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function $l(t){return new Ee(t.parent===null?t.name:$l(t.parent)+"/"+t.name)}function em(t){t.parent!==null&&sV(t.parent,t.name,t)}function sV(t,e,n){const r=rV(n),i=Gn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,em(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,em(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV=/[\[\].#$\/\u0000-\u001F\u007F]/,aV=/[\[\].#$\u0000-\u001F\u007F]/,_f=10*1024*1024,k_=function(t){return typeof t=="string"&&t.length!==0&&!oV.test(t)},Wx=function(t){return typeof t=="string"&&t.length!==0&&!aV.test(t)},lV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wx(t)},uV=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!r_(t)||t&&typeof t=="object"&&Gn(t,".sv")},cV=function(t,e,n,r){id(Th(t,"value"),e,n)},id=function(t,e,n){const r=n instanceof Ee?new CL(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xi(r));if(typeof e=="function")throw new Error(t+"contains a function "+xi(r)+" with contents = "+e.toString());if(r_(e))throw new Error(t+"contains "+e.toString()+" "+xi(r));if(typeof e=="string"&&e.length>_f/3&&Ih(e)>_f)throw new Error(t+"contains a string greater than "+_f+" utf8 bytes "+xi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(vt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!k_(o)))throw new Error(t+" contains an invalid key ("+o+") "+xi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xL(r,o),id(t,a,r),AL(r)}),i&&s)throw new Error(t+' contains ".value" child '+xi(r)+" in addition to actual children.")}},hV=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=dl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!k_(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(SL);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&fn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},dV=function(t,e,n,r){const i=Th(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];vt(e,(o,a)=>{const u=new Ee(o);if(id(i,a,We(n,u)),l_(u)===".priority"&&!uV(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),hV(i,s)},$x=function(t,e,n,r){if(!Wx(n))throw new Error(Th(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$x(t,e,n)},qx=function(t,e){if(ue(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},pV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!k_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lV(n))throw new Error(Th(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function P_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ux(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function _n(t,e,n){P_(t,n),gV(t,r=>fn(r,e)||fn(e,r))}function gV(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(_V(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _V(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ka&&pt("event: "+n.toString()),No(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV="repo_interrupt",vV=25;class wV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kc(),this.transactionQueueTree_=new A_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function EV(t,e,n){if(t.stats_=o_(t.repoInfo_),t.forceRestClient_||QM())t.server_=new Gc(t.repoInfo_,(r,i,s,o)=>{Mw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Lw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new cr(t.repoInfo_,e,(r,i,s,o)=>{Mw(t,r,i,s,o)},r=>{Lw(t,r)},r=>{IV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=eL(t.repoInfo_,()=>new ZL(t.stats_,t.server_)),t.infoData_=new KL,t.infoSyncTree_=new Dw({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Wl(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),N_(t,"connected",!1),t.serverSyncTree_=new Dw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);_n(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function TV(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function sd(t){return eV({timestamp:TV(t)})}function Mw(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Pc(n,c=>Ze(c));o=G2(t.serverSyncTree_,s,u,i)}else{const u=Ze(n);o=Ox(t.serverSyncTree_,s,u,i)}else if(r){const u=Pc(n,c=>Ze(c));o=$2(t.serverSyncTree_,s,u)}else{const u=Ze(n);o=Wl(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=yo(t,s)),_n(t.eventQueue_,a,o)}function Lw(t,e){N_(t,"connected",e),e===!1&&AV(t)}function IV(t,e){vt(e,(n,r)=>{N_(t,n,r)})}function N_(t,e,n){const r=new Ee("/.info/"+e),i=Ze(n);t.infoData_.updateSnapshot(r,i);const s=Wl(t.infoSyncTree_,r,i);_n(t.eventQueue_,r,s)}function b_(t){return t.nextWriteId_++}function SV(t,e,n){const r=Q2(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ze(i).withIndex(e._queryParams.getIndex());K2(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Wl(t.serverSyncTree_,e._path,s);else{const a=_l(t.serverSyncTree_,e);o=Ox(t.serverSyncTree_,e._path,s,a)}return _n(t.eventQueue_,e._path,o),Dx(t.serverSyncTree_,e,n,null,!0),s},i=>(ql(t,"get for query "+et(e)+" failed: "+i),Promise.reject(new Error(i))))}function CV(t,e,n,r,i){ql(t,"set",{path:e.toString(),value:n,priority:r});const s=sd(t),o=Ze(n,r),a=w_(t.serverSyncTree_,e),u=jx(o,a,s),c=b_(t),h=bx(t.serverSyncTree_,e,u,c,!0);P_(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const w=p==="ok";w||Vt("set at "+e+" failed: "+p);const C=Br(t.serverSyncTree_,c,!w);_n(t.eventQueue_,e,C),tm(t,i,p,_)});const f=O_(t,e);yo(t,f),_n(t.eventQueue_,f,[])}function xV(t,e,n,r){ql(t,"update",{path:e.toString(),value:n});let i=!0;const s=sd(t),o={};if(vt(n,(a,u)=>{i=!1,o[a]=Fx(We(e,a),Ze(u),t.serverSyncTree_,s)}),i)pt("update() called with empty data.  Don't do anything."),tm(t,r,"ok",void 0);else{const a=b_(t),u=W2(t.serverSyncTree_,e,o,a);P_(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Vt("update at "+e+" failed: "+c);const p=Br(t.serverSyncTree_,a,!f),_=p.length>0?yo(t,e):e;_n(t.eventQueue_,_,p),tm(t,r,c,h)}),vt(n,c=>{const h=O_(t,We(e,c));yo(t,h)}),_n(t.eventQueue_,e,[])}}function AV(t){ql(t,"onDisconnectEvents");const e=sd(t),n=Kc();Kp(t.onDisconnect_,me(),(i,s)=>{const o=Fx(i,s,t.serverSyncTree_,e);_x(n,i,o)});let r=[];Kp(n,me(),(i,s)=>{r=r.concat(Wl(t.serverSyncTree_,i,s));const o=O_(t,i);yo(t,o)}),t.onDisconnect_=Kc(),_n(t.eventQueue_,me(),r)}function RV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yV)}function ql(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function tm(t,e,n,r){e&&No(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Hx(t,e,n){return w_(t.serverSyncTree_,e,n)||ee.EMPTY_NODE}function D_(t,e=t.transactionQueueTree_){if(e||od(t,e),Do(e)){const n=Kx(t,e);q(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&kV(t,$l(e),n)}else zx(e)&&rd(e,n=>{D_(t,n)})}function kV(t,e,n){const r=n.map(c=>c.currentWriteId),i=Hx(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Mt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{ql(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Br(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();od(t,R_(t.transactionQueueTree_,e)),D_(t,t.transactionQueueTree_),_n(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)No(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Vt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}yo(t,e)}},o)}function yo(t,e){const n=Gx(t,e),r=$l(n),i=Kx(t,n);return PV(t,i,r),r}function PV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Mt(n,u.path);let h=!1,f;if(q(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(Br(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=vV)h=!0,f="maxretry",i=i.concat(Br(t.serverSyncTree_,u.currentWriteId,!0));else{const p=Hx(t,u.path,o);u.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){id("transaction failed: Data returned ",_,u.path);let w=Ze(_);typeof _=="object"&&_!=null&&Gn(_,".priority")||(w=w.updatePriority(p.getPriority()));const N=u.currentWriteId,T=sd(t),E=jx(w,p,T);u.currentOutputSnapshotRaw=w,u.currentOutputSnapshotResolved=E,u.currentWriteId=b_(t),o.splice(o.indexOf(N),1),i=i.concat(bx(t.serverSyncTree_,u.path,E,u.currentWriteId,u.applyLocally)),i=i.concat(Br(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",i=i.concat(Br(t.serverSyncTree_,u.currentWriteId,!0))}_n(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}od(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)No(r[a]);D_(t,t.transactionQueueTree_)}function Gx(t,e){let n,r=t.transactionQueueTree_;for(n=ue(e);n!==null&&Do(r)===void 0;)r=R_(r,n),e=Ae(e),n=ue(e);return r}function Kx(t,e){const n=[];return Qx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Qx(t,e,n){const r=Do(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);rd(e,i=>{Qx(t,i,n)})}function od(t,e){const n=Do(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ux(e,n.length>0?n:void 0)}rd(e,r=>{od(t,r)})}function O_(t,e){const n=$l(Gx(t,e)),r=R_(t.transactionQueueTree_,e);return iV(r,i=>{yf(t,i)}),yf(t,r),Bx(r,i=>{yf(t,i)}),n}function yf(t,e){const n=Do(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(q(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Br(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ux(e,void 0):n.length=s+1,_n(t.eventQueue_,$l(e),i);for(let o=0;o<r.length;o++)No(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vw=function(t,e){const n=DV(t),r=n.namespace;n.domain==="firebase.com"&&wr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&wr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||UM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ZC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},DV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=NV(t.substring(h,f)));const p=bV(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),n=e.substring(w+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class MV{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return q(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return oe(this._path)?null:l_(this._path)}get ref(){return new Ir(this._repo,this._path)}get _queryIdentifier(){const e=Iw(this._queryParams),n=i_(e);return n==="{}"?"default":n}get _queryObject(){return Iw(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof M_))return!1;const n=this._repo===e._repo,r=ux(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+IL(this._path)}}class Ir extends M_{constructor(e,n){super(e,n,new d_,!1)}get parent(){const e=lx(this._path);return e===null?null:new Ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=nm(this.ref,e);return new yl(this._node.getChild(n),r,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new yl(i,nm(this.ref,r),$e)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ns(t,e){return t=Se(t),t._checkNotDeleted("ref"),e!==void 0?nm(t._root,e):t._root}function nm(t,e){return t=Se(t),ue(t._path)===null?fV("child","path",e):$x("child","path",e),new Ir(t._repo,We(t._path,e))}function VV(t){return qx("remove",t._path),nh(t,null)}function nh(t,e){t=Se(t),qx("set",t._path),cV("set",e,t._path);const n=new Cl;return CV(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function L_(t,e){dV("update",e,t._path);const n=new Cl;return xV(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function FV(t){t=Se(t);const e=new LV(()=>{}),n=new V_(e);return SV(t._repo,t,n).then(r=>new yl(r,new Ir(t._repo,t._path),t._queryParams.getIndex()))}class V_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new OV("value",this,new yl(e.snapshotNode,new Ir(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new MV(this,e,n):null}matches(e){return e instanceof V_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}M2(Ir);U2(Ir);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV="FIREBASE_DATABASE_EMULATOR_HOST",rm={};let UV=!1;function zV(t,e,n,r){t.repoInfo_=new ZC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function BV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||wr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vw(s,i),a=o.repoInfo,u;typeof process<"u"&&sw&&(u=sw[jV]),u?(s=`http://${u}?ns=${a.namespace}`,o=Vw(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new XM(t.name,t.options,e);pV("Invalid Firebase Database URL",o),oe(o.path)||wr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=$V(a,t,c,new YM(t.name,n));return new qV(h,t)}function WV(t,e){const n=rm[e];(!n||n[t.key]!==t)&&wr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),RV(t),delete n[t.key]}function $V(t,e,n,r){let i=rm[e.name];i||(i={},rm[e.name]=i);let s=i[t.toURLString()];return s&&wr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new wV(t,UV,n,r),i[t.toURLString()]=s,s}class qV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(EV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ir(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(WV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wr("Cannot call "+e+" on a deleted database.")}}function HV(t=ng(),e){const n=Ch(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=vI("database");r&&GV(n,...r)}return n}function GV(t,e,n,r={}){t=Se(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&wr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&wr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new rc(rc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:TI(r.mockUserToken,t.app.options.projectId);s=new rc(o)}zV(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t){OM(ss),Wi(new ii("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return BV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Un(ow,aw,t),Un(ow,aw,"esm2017")}cr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};KV();const QV={apiKey:"AIzaSyDWqss4olY-yE58OpUd9FsCAgTuOrHUyfc",authDomain:"mathgame-prod.firebaseapp.com",projectId:"mathgame-prod",storageBucket:"mathgame-prod.firebasestorage.app",messagingSenderId:"823268749100",appId:"1:823268749100:web:88747dc6fd11cfd90a0689",databaseURL:"https://mathgame-prod-default-rtdb.asia-southeast1.firebasedatabase.app/"},vf=10,ad=AP().length?getApp():AI(QV);console.log(`Firebase initialized with project ID: ${ad.options.projectId}`);const wf=Mb(ad),_e=_C(ad);let im=null;{try{im=HV(ad),L_(ns(im,"s/connTest"),{next:-2}).then(()=>{console.log("Successfully sned next -1")}).catch(t=>{console.log("Failed to send next -1 to connTest"+t)})}catch(t){console.error(t),console.log("Error while initializing rtbd")}console.log("Running in production mode, connected to real Firebase services")}const YV=im,XV="SFE4dxPecTblEj3ho8RVjVf8niZ2,Zr9corg0elT4noDaokj1KJxm2gf1".split(",").map(t=>t.trim())??[],Yx=j.createContext(null);function JV({children:t}){const[e,n]=j.useState(void 0),[r,i]=j.useState(!1);j.useEffect(()=>IN(wf,u=>{n(u??null),i(u?XV.includes(u.uid):!1)}),[]);const s=()=>$N(wf,new Zn),o=()=>SN(wf);return m.jsx(Yx.Provider,{value:{user:e,isAdmin:r,signIn:s,logOut:o},children:t})}const Hl=()=>j.useContext(Yx);function ZV(){const{user:t,logOut:e}=Hl();return m.jsx("div",{className:"center-wrap",children:m.jsxs("div",{className:"card",style:{textAlign:"center",padding:"2.5rem"},children:[m.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🚫"}),m.jsx("h2",{style:{fontFamily:"Fredoka One",fontSize:"1.5rem",marginBottom:"0.5rem"},children:"Access Denied"}),m.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:"0.5rem"},children:[t==null?void 0:t.email," is not authorised to access this panel."]}),m.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"2rem"},children:"Contact the app owner if you think this is a mistake."}),m.jsx("button",{className:"btn btn-outline btn-full",onClick:e,children:"Sign out"})]})})}function eF(){const t="AB@CD$EFGHJ&KLMNP+QR=STUV#WXYZ23%45*67^89",e=Array.from({length:3},()=>t[Math.floor(Math.random()*t.length)]).join(""),n=Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("");return`${e}-${n}`}async function tF(t,e,n){const r=eF(),i=await bC(rn(_e,"challenges"),{adminUid:t,code:r,status:"waiting",config:e,createdAt:vr(),startedAt:null,finishedAt:null,createdAt:vr()}),s=FC(_e);return n.forEach((o,a)=>{const u=String(o.qIdx).padStart(4,"0"),c=nt(_e,"challenges",i.id,"questions",u);s.set(c,{...o,order:a})}),await s.commit(),{id:i.id,code:r,config:e,questions:n}}async function nF(){const t=Yi(rn(_e,"challenges"),fo("status","in",["waiting","active"]),Xi("createdAt","desc"));return(await li(t)).docs.map(n=>({id:n.id,...n.data()}))}const Ou=5;async function rF(t=null){let e=Yi(rn(_e,"challenges"),fo("status","==","finished"),Xi("createdAt","desc"),cl(Ou+1));t&&(e=Yi(rn(_e,"challenges"),fo("status","==","finished"),Xi("createdAt","desc"),Jg(t),cl(Ou+1)));const r=(await li(e)).docs,i=r.length>Ou;return{challenges:r.slice(0,Ou).map(a=>({id:a.id,...a.data(),_snap:a})),hasMore:i}}async function iF(t,e){return Promise.all([Ji(nt(_e,"challenges",t,"participants",e)),Ji(nt(_e,"challenges",t,"participants",e,"private","submission"))])}async function Fw(t){const e=await Ji(nt(_e,"challenges",t));if(!e.exists())return null;const r=(await li(rn(_e,"challenges",t,"questions"))).docs.map(o=>({id:o.id,...o.data()})).sort((o,a)=>o.order-a.order),i=await li(rn(_e,"challenges",t,"adminState")),s={};return i.docs.forEach(o=>{s[o.id]=o.data()}),{id:t,...e.data(),questions:r,adminState:s}}async function sF(t,e,n,r){await n_(nt(_e,"challenges",e,"adminState",n),{token:r.token,shuffledOrder:r.shuffledOrder,currentIdx:r.currentIdx,prefetchIdx:r.prefetchIdx,upd_by:t,upd_at:vr()})}async function jw(t,e,n,{currentIdx:r,prefetchIdx:i}){await gi(nt(_e,"challenges",e,"adminState",n),{currentIdx:r,prefetchIdx:i,upd_by:t,upd_at:vr()})}async function F_(){return(await li(rn(_e,"students"))).docs.map(e=>({uid:e.id,...e.data()}))}async function oF(t,e){await gi(nt(_e,"challenges",e),{status:"active",startedAt:vr(),upd_by:t})}async function aF(t,e){await gi(nt(_e,"challenges",e),{status:"finished",finishedAt:vr(),upd_by:t})}async function Uw(t,e,n,r){const i=nt(_e,"challenges",e,"participants",n,"private","token"),s=await Ji(i);(!s.exists()||s.data().rtdbToken!==r)&&await n_(i,{rtdbToken:r,writtenAt:vr(),upd_by:t})}function zw(t,e,n){return Fl(nt(_e,"challenges",t,"participants",e,"private","submission"),r=>{r.exists()&&n({uid:e,...r.data()})})}async function lF(t,e,{score:n,isCorrect:r,qIdx:i,duration:s,submittedAnswer:o}){const a=nt(_e,"challenges",t,"participants",e);await gi(a,{scores:VC({qIdx:i,score:n,isCorrect:r,duration:s,submittedAnswer:o}),totalScore:nc(n),totalCorrect:nc(r?1:0),questionsAttempted:nc(1),status:"playing"})}async function uF(t,e,n){const r=nt(_e,"challenges",e);await gi(r,{leaderboard:n})}async function cF(t,e,n){const r=nt(_e,"challenges",e);await gi(r,{summary:n})}async function Bw(t,e){await gi(nt(_e,"challenges",t,"participants",e),{status:"finished",finishedAt:vr()})}async function hF(t=30){const e=new Date,n=new Date(e);n.setDate(e.getDate()-(t-1));const r=n.toISOString().split("T")[0].replace(/-/g,""),i=e.toISOString().split("T")[0].replace(/-/g,"");try{const s=Yi(rn(_e,"dailyStats"),fo("date",">=",r),fo("date","<=",i),Xi("date","asc")),o=await li(s),a={};return o.forEach(u=>{const{date:c,students:h={}}=u.data();Object.entries(h).forEach(([f,p])=>{a[f]||(a[f]={});const _=p.games||0,w=p.correct||0,C=p.time||0;a[f][c]={games:_,correct:w,time:C,accuracy:_>0?Math.round(w/_*100):0}})}),a}catch(s){return console.error("fetchDailyActivity failed: ",s),{}}}const dF="modulepreload",fF=function(t,e){return new URL(t,e).href},Ww={},pF=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=fF(c,r),c in Ww)return;Ww[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const C=o[w];if(C.href===c&&(!h||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":dF,h||(_.as="script"),_.crossOrigin="",_.href=c,u&&_.setAttribute("nonce",u),document.head.appendChild(_),h)return new Promise((w,C)=>{_.addEventListener("load",w),_.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},vl=9999999;async function $w(t){const e=rn(_e,"scores",t,"trials");return(await OC(e)).data().count}function mF(t,e=10,n){const r=Yi(rn(_e,"scores",t,"trials"),Xi("timestamp","desc"),cl(e));return Fl(r,i=>{const s=i.docs.map(a=>({id:a.id,...a.data()})),o=i.docs[i.docs.length-1]??null;n({trials:s,lastDoc:o})})}async function gF(t,e=10){const{query:n,collection:r,orderBy:i,limit:s,getDocs:o}=await pF(async()=>{const{query:c,collection:h,orderBy:f,limit:p,getDocs:_}=await Promise.resolve().then(()=>DM);return{query:c,collection:h,orderBy:f,limit:p,getDocs:_}},void 0,import.meta.url),a=n(r(_e,"scores",t,"trials"),i("timestamp","desc"),s(e));return(await o(a)).docs.map(c=>({id:c.id,...c.data()})).reverse()}async function Xx(t,e=10,n=null){const r=rn(_e,"scores",t,"trials"),i=[Xi("timestamp","desc"),cl(e)];n&&i.push(Jg(n));const s=Yi(r,...i),o=await li(s),a=o.docs.map(c=>({id:c.id,...c.data()})),u=o.docs[o.docs.length-1]??null;return{trials:a,lastDoc:u}}async function Jx(t){const e=nt(_e,"scores",t,"stats","global"),n=nt(_e,"scores",t,"stats","groups"),[r,i]=await Promise.all([Ji(e),Ji(n)]);return{global:r.exists()?r.data():null,groups:i.exists()?i.data():{}}}function _F(t,e){return Fl(nt(_e,"challenges",t),n=>{n.exists()&&e({id:n.id,...n.data()})})}function yF(t,e){return Fl(rn(_e,"challenges",t,"participants"),n=>{e(n.docs.map(r=>({uid:r.id,...r.data()})))})}function vF({uid:t}){var x;const[e,n]=j.useState(null),[r,i]=j.useState([]);if(j.useEffect(()=>{Jx(t).then(n),Xx(t,20,null).then(({trials:P})=>{i([...P].reverse())})},[t]),e===null)return m.jsx(CF,{});if(!e.global)return m.jsx(xF,{});const s=e.global,o=Object.values(e.groups||{}).sort((P,O)=>P.digits!==O.digits?P.digits-O.digits:P.count-O.count),a=s.totalGames||0,u=s.totalCorrect||0,c=s.totalScore||0,h=s.accuracy?Math.round(s.accuracy):0,f=s.avgScore?Math.round(s.avgScore):0,p=s.maxScore??0,_=s.bestStreak??0,w=s.currentStreak??0,C=s.totalGames?Math.round(s.totalTime/s.totalGames):0,N=(x=s.upd_at)!=null&&x.toDate?Zx(s.upd_at.toDate()):"—",T=s.minScore?s.minScore===vl||s.minScore===0?"-":s.minScore:"-",E=s.minTime?s.minTime===vl||s.minTime===0?"-":s.minTime+"s":"-";return m.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[m.jsx(wF,{pct:h,correct:u,total:a}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,alignContent:"start"},children:[m.jsx(vs,{label:"Total score",value:`${c}🪙`,color:"var(--purple-dark)",icon:"🏆"}),m.jsx(vs,{label:"Avg score",value:`${f}🪙`,color:"var(--blue-dark)",icon:"📊"}),m.jsx(vs,{label:"Best score",value:`${p}🪙`,color:"var(--green-dark)",icon:"⭐"}),m.jsx(vs,{label:"Best streak",value:`${_}🔥`,color:"var(--yellow-dark)",icon:""}),m.jsx(vs,{label:"Avg time",value:`${C}s`,color:"var(--blue)",icon:"⏱"}),m.jsx(vs,{label:"Games played",value:a,color:"var(--text)",icon:"🎮"})]})]}),m.jsxs("a",{href:"ScoringGuide.html",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px",background:"linear-gradient(135deg, #fff8e0, #ffefc0)",border:"2px solid #ffe090",borderRadius:14,textDecoration:"none",color:"var(--yellow-dark)",fontWeight:800,fontSize:"0.9rem",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:P=>{P.currentTarget.style.transform="translateY(-2px)",P.currentTarget.style.boxShadow="0 4px 16px rgba(249,168,37,0.25)"},onMouseLeave:P=>{P.currentTarget.style.transform="",P.currentTarget.style.boxShadow=""},children:[m.jsx("span",{children:"🪙 How is my score calculated? See the scoring guide"}),m.jsx("span",{style:{fontSize:"1.1rem"},children:"→"})]}),r.length>=3&&m.jsx(Ef,{title:"Score trend (last 20 games)",children:m.jsx(EF,{trials:r})}),o.length>=2&&m.jsx(Ef,{title:"Avg score by difficulty",children:m.jsx(TF,{groups:o})}),o.length>=1&&m.jsx(Ef,{title:"Accuracy by difficulty",children:m.jsx(IF,{groups:o})}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[m.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}}),m.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700,whiteSpace:"nowrap"},children:"RAW BREAKDOWN"}),m.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}})]}),m.jsx(Hw,{children:"Overall stats"}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,background:"#f0f8ff",borderRadius:12,padding:14},children:[m.jsx(De,{label:"Total games",value:a}),m.jsx(De,{label:"Accuracy",value:`${h}%`,color:h>=70?"var(--green-dark)":"var(--red)"}),m.jsx(De,{label:"Best streak",value:_,color:"var(--yellow-dark)"}),m.jsx(De,{label:"Current Streak",value:w,color:"var(--blue-dark)"}),m.jsx(De,{label:"Total score",value:c,color:"var(--purple-dark)"}),m.jsx(De,{label:"Avg score",value:f,color:"var(--blue-dark)"}),m.jsx(De,{label:"Best score",value:p,color:"var(--green-dark)"}),m.jsx(De,{label:"Worst score",value:T,color:"var(--red)"}),m.jsx(De,{label:"Last Played",value:N}),m.jsx(De,{label:"Total time",value:`${Math.round(s.totalTime||0)}s`,color:"var(--purple-dark)"}),m.jsx(De,{label:"Avg time",value:`${C}s`,color:"var(--blue-dark)"}),m.jsx(De,{label:"Best time",value:E,color:"var(--green-dark)"}),m.jsx(De,{label:"Worst time",value:`${s.maxTime??0}s`,color:"var(--red)"})]}),m.jsx(Hw,{children:"Breakdown by difficulty"}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.map(P=>m.jsx(SF,{g:P},`${P.digits}-${P.count}`))})]})}function wF({pct:t,correct:e,total:n}){const o=2*Math.PI*44,a=o*(t/100),u=t>=70?"var(--green)":t>=40?"var(--yellow-dark)":"var(--red)";return m.jsxs("div",{style:{background:"#f8f9fa",borderRadius:14,padding:14,display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[m.jsx("span",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1},children:"Accuracy"}),m.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",children:[m.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:"#e8e8e8",strokeWidth:"12"}),m.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:u,strokeWidth:"12",strokeDasharray:`${a} ${o}`,strokeLinecap:"round",transform:"rotate(-90 60 60)",style:{transition:"stroke-dasharray 0.8s ease"}}),m.jsxs("text",{x:60,y:54,textAnchor:"middle",fontFamily:"Fredoka One, cursive",fontSize:"22",fill:u,children:[t,"%"]}),m.jsxs("text",{x:60,y:72,textAnchor:"middle",fontFamily:"Nunito, sans-serif",fontSize:"10",fill:"#999",fontWeight:"700",children:[e,"/",n]})]})]})}function EF({trials:t}){const i=t.map(p=>p.score??0),s=Math.max(...i,1),o=Math.min(...i),a=s-o||1,u=i.length,c=i.map((p,_)=>{const w=10+_/(u-1)*300,C=70-(p-o)/a*(80-10*2);return[w,C]}),h="M "+c.map(p=>p.join(",")).join(" L "),f=h+` L ${c[c.length-1][0]},80 L ${c[0][0]},80 Z`;return m.jsxs("svg",{width:"100%",viewBox:"0 0 320 80",preserveAspectRatio:"none",style:{display:"block"},children:[m.jsx("defs",{children:m.jsxs("linearGradient",{id:"spark-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[m.jsx("stop",{offset:"0%",stopColor:"#4a9eda",stopOpacity:"0.25"}),m.jsx("stop",{offset:"100%",stopColor:"#4a9eda",stopOpacity:"0.02"})]})}),m.jsx("path",{d:f,fill:"url(#spark-grad)"}),m.jsx("path",{d:h,fill:"none",stroke:"#4a9eda",strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"}),c.map(([p,_],w)=>m.jsx("circle",{cx:p,cy:_,r:"4",fill:t[w].isCorrect?"var(--green)":"var(--red)",stroke:"white",strokeWidth:"1.5"},w)),m.jsx("text",{x:10,y:78,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:o}),m.jsx("text",{x:10,y:13,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:s})]})}function TF({groups:t}){const i=Math.min(40,300/t.length-8),s=Math.max(...t.map(o=>o.avgScore||0),1);return m.jsx("svg",{width:"100%",viewBox:"0 0 320 100",style:{display:"block",overflow:"visible"},children:t.map((o,a)=>{const u=10+a*(300/t.length)+(300/t.length-i)/2,h=(o.avgScore||0)/s*70,f=80-h,p=["#4a9eda","#5cbf6a","#9c6fe4","#ffd54f"][a%4],_=`${o.digits}d·${o.count}n`;return m.jsxs("g",{children:[m.jsx("rect",{x:u,y:f,width:i,height:h,rx:"5",fill:p,opacity:"0.85"}),m.jsx("text",{x:u+i/2,y:f-4,textAnchor:"middle",fontSize:"10",fontFamily:"Fredoka One,cursive",fill:p,children:Number(o.avgScore||0).toFixed(1)}),m.jsx("text",{x:u+i/2,y:96,textAnchor:"middle",fontSize:"8.5",fontFamily:"Nunito,sans-serif",fill:"#888",fontWeight:"700",children:_})]},a)})})}function IF({groups:t}){const n=t.length*32+10,r=80;return m.jsx("svg",{width:"100%",viewBox:`0 0 320 ${n}`,style:{display:"block"},children:t.map((i,s)=>{const o=i.accuracy?Math.round(i.accuracy):0,a=(320-r-40)*o/100,u=s*32+6,c=o>=70?"var(--green)":o>=40?"var(--yellow-dark)":"var(--red)",h=`${i.digits}d · ${i.count}n`;return m.jsxs("g",{children:[m.jsx("text",{x:0,y:u+16,fontSize:"10",fontFamily:"Nunito,sans-serif",fontWeight:"700",fill:"#555",children:h}),m.jsx("rect",{x:r,y:u+4,width:320-r-40,height:18,rx:"9",fill:"#ececec"}),m.jsx("rect",{x:r,y:u+4,width:Math.max(a,0),height:18,rx:"9",fill:c,opacity:"0.85"}),m.jsxs("text",{x:288,y:u+16,fontSize:"10",fontFamily:"Fredoka One,cursive",fill:c,fontWeight:"bold",children:[o,"%"]})]},s)})})}function SF({g:t}){var f;const e=t.totalCorrect||0,n=Math.round(e/t.totalGames*100),r=Math.round(t.totalScore/t.totalGames),i=Math.round(t.totalTime/t.totalGames),s=t.minTime===vl||t.minTime===0?"-":t.minTime+"s",o=t.minScore===vl||t.minScore===0?"-":t.minScore,a=t.maxScore??0,u=t.bstr??"-",c=t.cstr??"-",h=(f=t.upd_at)!=null&&f.toDate?Zx(t.upd_at.toDate()):"—";return m.jsxs("div",{style:{background:"#fafafa",border:"2px solid #e8e8e8",borderRadius:14,padding:"14px 16px"},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[m.jsxs("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.1rem",color:"var(--blue-dark)"},children:[t.digits," digit",t.digits>1?"s":""," · ",t.count," numbers"]}),m.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:700},children:[t.totalGames," game",t.totalGames>1?"s":""]})]}),m.jsxs("div",{style:{marginBottom:10},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:4},children:[m.jsx("span",{children:"Accuracy"}),m.jsxs("span",{style:{fontWeight:800,color:n>=70?"var(--green-dark)":"var(--red)"},children:[n,"%"]})]}),m.jsx("div",{style:{height:8,background:"#e8e8e8",borderRadius:4,overflow:"hidden"},children:m.jsx("div",{style:{height:"100%",width:`${n}%`,background:n>=70?"var(--green)":"var(--red)",borderRadius:4,transition:"width 0.6s ease"}})})]}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:[m.jsx(De,{label:"✅ Correct",value:e,color:"var(--green-dark)"}),m.jsx(De,{label:"Avg score",value:r,color:"var(--purple-dark)"}),m.jsx(De,{label:"Best score",value:a,color:"var(--yellow-dark)"}),m.jsx(De,{label:"Worst score",value:o,color:"var(--yellow-dark)"}),m.jsx(De,{label:"Avg time",value:`${i}s`,color:"var(--blue-dark)"}),m.jsx(De,{label:"Total games",value:t.totalGames||0}),m.jsx(De,{label:"Total score",value:t.totalScore||0,color:"var(--purple-dark)"}),m.jsx(De,{label:"Best time",value:`${s}`,color:"var(--green-dark)"}),m.jsx(De,{label:"Worst time",value:`${t.maxTime}s`,color:"var(--red)"}),m.jsx(De,{label:"Best Streak",value:u,color:"var(--green-dark)"}),m.jsx(De,{label:"Current Streak",value:c,color:"var(--green-dark)"}),m.jsx(De,{label:"Last Played",value:h})]})]})}function Ef({title:t,children:e}){return m.jsxs("div",{style:{background:"#fafafa",border:"1.5px solid #ececec",borderRadius:14,padding:"14px 16px"},children:[m.jsx("p",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1,marginBottom:10},children:t}),e,t.includes("trend")&&m.jsxs("div",{style:{display:"flex",gap:16,marginTop:8,justifyContent:"center"},children:[m.jsx(qw,{color:"var(--green)",label:"Correct"}),m.jsx(qw,{color:"var(--red)",label:"Wrong"})]})]})}function qw({color:t,label:e}){return m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:[m.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:t}}),e]})}function vs({label:t,value:e,color:n,icon:r}){return m.jsxs("div",{style:{background:"white",border:"1.5px solid #ececec",borderRadius:10,padding:"8px 10px",textAlign:"center"},children:[m.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",color:n||"var(--text)",lineHeight:1.2},children:e}),m.jsxs("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",fontWeight:700,marginTop:2},children:[r," ",t]})]})}function Hw({children:t}){return m.jsx("p",{className:"section-title",style:{margin:0},children:t})}function De({label:t,value:e,color:n}){return m.jsxs("div",{style:{textAlign:"center"},children:[m.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:n||"var(--blue-dark)"},children:e}),m.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function CF(){return m.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[m.jsx("div",{className:"loader-dot"}),m.jsx("div",{className:"loader-dot"}),m.jsx("div",{className:"loader-dot"})]})}function xF(){return m.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[m.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),m.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No stats yet!"}),m.jsx("p",{style:{fontSize:"0.875rem",marginTop:6},children:"Play your first round to see your stats."})]})}function Zx(t){return t.toLocaleString("en-IN",{day:"numeric",month:"numeric",year:"numeric"})}function AF({uid:t}){const[e,n]=j.useState(null),[r,i]=j.useState(1),[s,o]=j.useState(0),[a,u]=j.useState(!1),[c,h]=j.useState([null]),f=Math.max(1,Math.ceil(s/vf));if(j.useEffect(()=>($w(t).then(o),r!==1?void 0:mF(t,vf,({trials:w,lastDoc:C})=>{n(w),h(N=>{const T=[...N];return T[1]=C,T}),$w(t).then(o)})),[t,r]),j.useEffect(()=>{r!==1&&(u(!0),Xx(t,vf,c[r-1]??null).then(({trials:_,lastDoc:w})=>{n(_),h(C=>{const N=[...C];return N[r]=w,N}),u(!1)}))},[t,r]),e===null||a)return m.jsx(kF,{});if(s===0)return m.jsx(PF,{});const p=e.filter(_=>_.isCorrect).length;return e.length&&Math.round(p/e.length*100),m.jsxs("div",{className:"flex flex-col",style:{gap:14},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsxs("p",{className:"section-title",style:{margin:0},children:["Page ",r," of ",f,m.jsxs("span",{style:{fontWeight:400,color:"var(--text-muted)",fontSize:"0.85rem"},children:[" (",s," total)"]})]}),r===1&&m.jsx("span",{style:{fontSize:"0.75rem",color:"var(--red)"},children:"🔴 Live"})]}),m.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:8},children:e.map(_=>m.jsx(RF,{t:_},_.id))}),m.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",justifyContent:"center",marginTop:4},children:[m.jsx("button",{className:"btn btn-outline",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r===1,onClick:()=>i(_=>_-1),children:"← Prev"}),m.jsxs("span",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text-muted)",minWidth:80,textAlign:"center"},children:[r," / ",f]}),m.jsx("button",{className:"btn btn-primary",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r>=f,onClick:()=>i(_=>_+1),children:"Next →"})]})]})}function RF({t}){var n;const e=(n=t.timestamp)!=null&&n.toDate?bF(t.timestamp.toDate()):"—";return m.jsxs("li",{style:{background:"#f8f9fa",borderRadius:12,padding:"12px 14px",display:"flex",flexDirection:"column",gap:6,borderLeft:`4px solid ${t.isCorrect?"var(--green)":"var(--red)"}`},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{className:`result-badge ${t.isCorrect?"badge-correct":"badge-wrong"}`,children:t.isCorrect?"✅ Correct":"❌ Wrong"}),m.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:e})]}),t.numbers&&m.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1rem",letterSpacing:"0.5px",wordBreak:"break-all"},children:NF(t.numbers)}),m.jsxs("div",{style:{display:"flex",gap:14,fontSize:"0.82rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[m.jsxs("span",{children:["Answer: ",m.jsx("strong",{style:{color:"var(--text)"},children:t.actualAnswer})]}),m.jsxs("span",{children:["Yours: ",m.jsx("strong",{style:{color:t.isCorrect?"var(--green-dark)":"var(--red)"},children:t.userAnswer})]}),m.jsxs("span",{children:["⏱ ",t.duration,"s"]}),m.jsxs("span",{children:["🪙 ",t.score??0," pts"]}),m.jsxs("span",{children:[t.count," nums · ",t.digits,"d"]})]})]})}function kF(){return m.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[m.jsx("div",{className:"loader-dot"}),m.jsx("div",{className:"loader-dot"}),m.jsx("div",{className:"loader-dot"})]})}function PF(){return m.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[m.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),m.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No games yet!"}),m.jsx("p",{className:"text-sm mt-sm",children:"Play your first round and results will appear here."})]})}function NF(t){return t.split(" ").map((e,n)=>m.jsx("span",{style:{color:e.startsWith("-")?"var(--red)":"var(--green-dark)",marginRight:4},children:e},n))}function bF(t){return t.toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}const DF=[{id:"stats",label:"📊 Stats"},{id:"history",label:"📋 History"}];function OF({uid:t}){const[e,n]=j.useState("stats");return m.jsxs("div",{children:[m.jsx("div",{className:"tabs",style:{marginBottom:"1rem"},children:DF.map(r=>m.jsx("button",{className:`tab ${e===r.id?"active":""}`,onClick:()=>n(r.id),children:r.label},r.id))}),e==="stats"&&m.jsx(vF,{uid:t}),e==="history"&&m.jsx(AF,{uid:t})]})}function MF({uid:t=null,students:e,setStudents:n,studentsLoaded:r,setStudentsLoaded:i}){const[s,o]=j.useState(!0),[a,u]=j.useState(""),[c,h]=j.useState(!1),[f,p]=j.useState(null),_=j.useRef(null);j.useEffect(()=>{if(r){o(!1);return}F_().then(n).finally(()=>{o(!1),i(!0)})},[]),j.useEffect(()=>{if(t&&e.length>0){const T=e.find(E=>E.uid===t);T&&p(T)}},[t,e]),j.useEffect(()=>{function T(E){_.current&&!_.current.contains(E.target)&&h(!1)}return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const w=e.filter(T=>{var E,x;return((E=T.name)==null?void 0:E.toLowerCase().includes(a.toLowerCase()))||((x=T.email)==null?void 0:x.toLowerCase().includes(a.toLowerCase()))});function C(T){p(T),u(""),h(!1)}function N(){p(null),u("")}return s?m.jsxs("div",{className:"loader",children:[m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"})]}):f?m.jsxs("div",{children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"},children:[m.jsx("button",{className:"btn btn-outline",onClick:N,children:"← Change Student"}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[m.jsx("span",{style:{fontFamily:"Fredoka One",fontSize:"1.3rem",color:"var(--text)"},children:f.name}),f.age&&m.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"999px",padding:"0.15rem 0.6rem"},children:["Age ",f.age]})]})]}),m.jsx(OF,{uid:f.uid})]}):m.jsx("div",{children:m.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[m.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:"1rem",fontSize:"0.9rem"},children:[e.length," student",e.length!==1?"s":""," registered"]}),m.jsxs("div",{ref:_,style:{position:"relative"},children:[m.jsx("input",{className:"answer-input",type:"text",placeholder:"Search by name or email...",value:a,onChange:T=>{u(T.target.value),h(!0)},onFocus:()=>h(!0),style:{width:"100%",fontSize:"1rem",padding:"0.75rem 1rem",textAlign:"left",fontFamily:"Nunito, sans-serif"}}),c&&m.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,background:"white",border:"2px solid var(--border)",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.10)",zIndex:100,maxHeight:"280px",overflowY:"auto"},children:w.length===0?m.jsx("div",{style:{padding:"1rem",color:"var(--text-muted)",textAlign:"center",fontSize:"0.9rem"},children:"No students found"}):w.map(T=>m.jsxs("div",{onClick:()=>C(T),style:{padding:"0.75rem 1rem",cursor:"pointer",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.15s"},onMouseEnter:E=>E.currentTarget.style.background="var(--bg)",onMouseLeave:E=>E.currentTarget.style.background="white",children:[m.jsxs("div",{children:[m.jsx("div",{style:{fontWeight:700,color:"var(--text)"},children:T.name}),m.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:T.email})]}),T.age&&m.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"999px",padding:"0.1rem 0.5rem"},children:["Age ",T.age]})]},T.uid))})]})]})})}const lt=[{border:"#1D9E75",bg:"#E1F5EE",avatarText:"#085041",label:"#085041"},{border:"#D85A30",bg:"#FAECE7",avatarText:"#712B13",label:"#712B13"},{border:"#7F77DD",bg:"#EEEDFE",avatarText:"#3C3489",label:"#3C3489"},{border:"#BA7517",bg:"#FAEEDA",avatarText:"#633806",label:"#633806"}],Tf=4;function LF(t=""){return t.split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase()}function VF(t){const[e,n]=t.split("_");return`${e.replace("d","")} digit${e==="1d"?"":"s"}, ${n.replace("n","")} numbers`}function Gw(t){return t?{...t,avgTime:t.totalGames>0?t.totalTime/t.totalGames:0}:null}function FF({student:t,color:e,onRemove:n}){return m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",padding:"0.45rem 0.6rem",border:`2px solid ${e.border}`,borderRadius:"10px",background:e.bg},children:[m.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:e.bg,color:e.avatarText,border:`1.5px solid ${e.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.65rem",fontWeight:700,flexShrink:0},children:LF(t.name)}),m.jsxs("div",{style:{minWidth:0,flex:1},children:[m.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem",color:"var(--text)"},children:t.name}),t.age&&m.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)"},children:["Age ",t.age]})]}),m.jsx("button",{onClick:n,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:"0.85rem",padding:"0 2px",flexShrink:0},children:"✕"})]})}function jF({students:t,onSelect:e,color:n,label:r}){const[i,s]=j.useState(""),[o,a]=j.useState(!1),u=j.useRef(null);j.useEffect(()=>{function h(f){u.current&&!u.current.contains(f.target)&&a(!1)}return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const c=t.filter(h=>{var f,p;return!i||((f=h.name)==null?void 0:f.toLowerCase().includes(i.toLowerCase()))||((p=h.email)==null?void 0:p.toLowerCase().includes(i.toLowerCase()))});return m.jsxs("div",{ref:u,style:{position:"relative",minWidth:0},children:[m.jsx("p",{style:{fontSize:"0.75rem",color:n.label,fontWeight:700,marginBottom:"0.3rem"},children:r}),m.jsx("input",{className:"answer-input",type:"text",placeholder:"Search...",value:i,onChange:h=>{s(h.target.value),a(!0)},onFocus:()=>a(!0),style:{width:"100%",fontSize:"0.85rem",padding:"0.5rem 0.6rem",textAlign:"left",fontFamily:"Nunito, sans-serif",boxSizing:"border-box"}}),o&&m.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,background:"white",border:"2px solid var(--border)",borderRadius:"10px",boxShadow:"0 4px 16px rgba(0,0,0,0.10)",zIndex:200,maxHeight:"200px",overflowY:"auto"},children:c.length===0?m.jsx("div",{style:{padding:"0.75rem",color:"var(--text-muted)",fontSize:"0.82rem",textAlign:"center"},children:"No students found"}):c.map(h=>m.jsxs("div",{onClick:()=>{e(h),s(""),a(!1)},style:{padding:"0.55rem 0.75rem",cursor:"pointer",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},onMouseEnter:f=>f.currentTarget.style.background="var(--bg)",onMouseLeave:f=>f.currentTarget.style.background="white",children:[m.jsxs("div",{children:[m.jsx("div",{style:{fontWeight:700,fontSize:"0.82rem"},children:h.name}),m.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:h.email})]}),h.age&&m.jsxs("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:["Age ",h.age]})]},h.uid))})]})}function er(t){return typeof t!="number"||isNaN(t)||Math.round(t)===vl?null:parseFloat(t.toFixed(2))}function Kw({id:t,students:e,leftMetrics:n,rightMetrics:r,leftLabel:i,rightLabel:s,statsGetter:o}){const a=j.useRef(null),u=j.useRef(null);j.useEffect(()=>{if(window.Chart)return c(),()=>{u.current&&u.current.destroy()}},[e,o]);function c(){if(!a.current||!window.Chart)return;u.current&&u.current.destroy();const h=[{label:"Avg score",data:e.map(f=>{var p;return er((p=o(f.uid))==null?void 0:p.avgScore)}),backgroundColor:e.map((f,p)=>lt[p].border+"cc"),borderColor:e.map((f,p)=>lt[p].border),borderWidth:1.5,borderRadius:4,yAxisID:"yLeft"},{label:"Best score",data:e.map(f=>{var p;return er((p=o(f.uid))==null?void 0:p.maxScore)}),backgroundColor:e.map((f,p)=>lt[p].border+"66"),borderColor:e.map((f,p)=>lt[p].border),borderWidth:1.5,borderRadius:4,borderDash:[3,3],yAxisID:"yLeft"},{label:"Worst score",data:e.map(f=>{var p;return er((p=o(f.uid))==null?void 0:p.minScore)}),backgroundColor:e.map((f,p)=>lt[p].bg),borderColor:e.map((f,p)=>lt[p].border),borderWidth:1.5,borderRadius:4,yAxisID:"yLeft"},{type:"line",label:"Accuracy",data:e.map(f=>{var p;return er((p=o(f.uid))==null?void 0:p.accuracy)}),borderColor:"#94a3b8",borderWidth:2,borderDash:[5,4],pointStyle:"circle",pointRadius:5,pointBackgroundColor:e.map((f,p)=>lt[p].border),pointBorderColor:"#fff",pointBorderWidth:2,fill:!1,tension:.35,yAxisID:"yRight"}];u.current=new window.Chart(a.current,{type:"bar",data:{labels:e.map(f=>f.name),datasets:h},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:f=>{const p=f.parsed.y;return p==null?null:f.dataset.label==="Accuracy"?`Accuracy: ${p.toFixed(1)}%`:`${f.dataset.label}: ${p}`}}}},interaction:{mode:"index",intersect:!1},scales:{x:{grid:{display:!1},ticks:{font:{size:11,family:"Nunito"}}},yLeft:{type:"linear",position:"left",beginAtZero:!0,title:{display:!!i,text:i,font:{size:11,family:"Nunito"},color:"#888"},ticks:{font:{size:11,family:"Nunito"}},grid:{color:"rgba(0,0,0,0.06)"}},yRight:{type:"linear",position:"right",min:0,max:100,title:{display:!0,text:"Accuracy (%)",font:{size:11,family:"Nunito"},color:"#888"},ticks:{font:{size:11,family:"Nunito"},callback:f=>f+"%"},grid:{drawOnChartArea:!1}}}}})}return m.jsx("canvas",{ref:a,style:{maxHeight:"280px"}})}function Qw({students:t,metrics:e,yLabel:n,statsGetter:r}){const i=j.useRef(null),s=j.useRef(null),o=t.map(u=>{const c=r(u.uid);return!c||!c.totalGames?null:er(c.totalTime/c.totalGames)});j.useEffect(()=>{if(window.Chart)return a(),()=>{s.current&&s.current.destroy()}},[t,r]);function a(){if(!i.current||!window.Chart)return;s.current&&s.current.destroy();const u=[{type:"bar",label:"Time range",data:t.map(c=>{const h=r(c.uid),f=er(h==null?void 0:h.minTime),p=er(h==null?void 0:h.maxTime);return f==null||p==null?null:[f,p]}),backgroundColor:t.map((c,h)=>lt[h].border+"55"),borderColor:t.map((c,h)=>lt[h].border),borderWidth:1.5,borderRadius:4,barPercentage:.5},{type:"scatter",label:"Avg time",data:t.map((c,h)=>{const f=o[h];return f==null?null:{x:h,y:f}}),backgroundColor:t.map((c,h)=>lt[h].border),borderColor:"#fff",borderWidth:2,pointRadius:6,pointHoverRadius:8,pointStyle:"circle"}];s.current=new window.Chart(i.current,{type:"bar",data:{labels:t.map(c=>c.name),datasets:u},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:c=>{if(c.dataset.label==="Time range"){const f=r(t[c.dataIndex].uid),p=er(f==null?void 0:f.minTime),_=er(f==null?void 0:f.maxTime);return p==null||_==null?"Time range: —":`Time range: ${p}s → ${_}s`}const h=c.parsed.y;return h==null?"Avg time: —":`Avg time: ${h}s`}}}},interaction:{mode:"index",intersect:!1},scales:{x:{grid:{display:!1},ticks:{font:{size:11,family:"Nunito"}}},y:{beginAtZero:!1,title:{display:!!n,text:n,font:{size:11,family:"Nunito"},color:"#888"},ticks:{font:{size:11,family:"Nunito"},callback:c=>c+"s"},grid:{color:"rgba(0,0,0,0.06)"}}}}})}return m.jsx("canvas",{ref:i,style:{maxHeight:"260px"}})}function UF({students:t,statsGetter:e}){const n=j.useRef(null),r=j.useRef(null);j.useEffect(()=>{if(window.Chart)return i(),()=>{r.current&&r.current.destroy()}},[t,e]);function i(){if(!n.current||!window.Chart)return;r.current&&r.current.destroy();const s=Math.max(...t.map(_=>{var w;return((w=e(_.uid))==null?void 0:w.avgScore)||0}),1),o=Math.max(...t.map(_=>{var w;return((w=e(_.uid))==null?void 0:w.totalGames)||0}),1),a=Math.max(...t.map(_=>{var w;return((w=e(_.uid))==null?void 0:w.bestStreak)||0}),1),u=Math.max(...t.map(_=>{var w;return((w=e(_.uid))==null?void 0:w.avgTime)||0}),1),c=(_,w)=>Math.round(_/w*100),h=t.map(_=>{const w=e(_.uid);return[parseFloat(((w==null?void 0:w.accuracy)||0).toFixed(1)),Math.round((w==null?void 0:w.avgScore)||0),Math.round((w==null?void 0:w.totalGames)||0),parseFloat(((w==null?void 0:w.avgTime)||0).toFixed(2)),Math.round((w==null?void 0:w.bestStreak)||0)]}),f=["Accuracy %","Avg score","Games played","Avg speed","Best streak"],p=["%"," pts"," games","s"," streak"];r.current=new window.Chart(n.current,{type:"radar",data:{labels:f,datasets:t.map((_,w)=>{const C=e(_.uid);return{label:_.name,data:[Math.round((C==null?void 0:C.accuracy)||0),c((C==null?void 0:C.avgScore)||0,s),c((C==null?void 0:C.totalGames)||0,o),Math.round(100-c((C==null?void 0:C.avgTime)||0,u)),c((C==null?void 0:C.bestStreak)||0,a)],borderColor:lt[w].border,backgroundColor:lt[w].border+"33",pointBackgroundColor:lt[w].border,borderWidth:2}})},options:{plugins:{legend:{position:"bottom",labels:{font:{size:12,family:"Nunito"}}},tooltip:{callbacks:{label:_=>{const w=_.datasetIndex,C=_.dataIndex,N=h[w][C],T=p[C];return`${_.dataset.label}: ${N}${T}`}}}},responsive:!0,scales:{r:{beginAtZero:!0,max:100,ticks:{stepSize:25,display:!1},pointLabels:{font:{size:12,family:"Nunito"}}}}}})}return m.jsx("canvas",{ref:n,style:{maxHeight:"300px"}})}function zF({students:t}){const[e,n]=j.useState(!1),[r,i]=j.useState(!1),[s,o]=j.useState(null),a=j.useRef(null),u=j.useRef(null),c=j.useRef(""),h=t.map(p=>p.uid).join(",");j.useEffect(()=>{h!==c.current&&(c.current=h,n(!1),o(null))},[h]);async function f(){n(!0),i(!0);const p=await Promise.all(t.map(_=>gF(_.uid,10)));o(p),i(!1)}return j.useEffect(()=>{if(!e||r||!s||!window.Chart)return;u.current&&u.current.destroy();const p=Math.max(...s.map(w=>w.length)),_=Array.from({length:p},(w,C)=>`#${C+1}`);return u.current=new window.Chart(a.current,{type:"line",data:{labels:_,datasets:s.map((w,C)=>({label:t[C].name,data:w.map(N=>N.score),backgroundColor:lt[C].border+"aa",borderColor:lt[C].border,borderWidth:1.5,borderRadius:4}))},options:{responsive:!0,scales:{y:{beginAtZero:!0,ticks:{font:{size:11}}},x:{ticks:{font:{size:11}},grid:{display:!1}}},plugins:{legend:{position:"top",labels:{font:{size:12,family:"Nunito"}}}}}}),()=>{u.current&&u.current.destroy()}},[e,r,s]),m.jsxs("div",{className:"admin-card",style:{marginTop:"1rem"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:e&&!r?"1rem":0},children:[m.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem"},children:"Score trend — last 10 games"}),!e&&m.jsx("button",{className:"btn btn-outline",onClick:f,children:"Load trend ▼"})]}),e&&r&&m.jsxs("div",{className:"loader",style:{marginTop:"1rem"},children:[m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"})]}),e&&!r&&s&&m.jsx("canvas",{ref:a,style:{maxHeight:"260px"}})]})}function oa({title:t,children:e}){return m.jsxs("div",{className:"admin-card",style:{marginBottom:"1rem",width:"100%"},children:[m.jsx("p",{style:{fontWeight:700,fontSize:"0.9rem",marginBottom:"1rem",color:"var(--text)"},children:t}),e]})}const BF=[{key:"avgScore",label:"Avg score",fmt:t=>Math.round(t)},{key:"maxScore",label:"Best score",fmt:t=>Math.round(t)},{key:"minScore",label:"Worst score",fmt:t=>Math.round(t)}],WF=[{key:"accuracy",label:"Accuracy %",fmt:t=>`${Math.round(t)}%`}],$F=[{key:"avgTime",label:"Avg time",fmt:t=>`${t.toFixed(1)}s`},{key:"minTime",label:"Best time",fmt:t=>`${t.toFixed(1)}s`},{key:"maxTime",label:"Worst time",fmt:t=>`${t.toFixed(1)}s`}],qF=[{key:"avgScore",label:"Avg score",fmt:t=>Math.round(t)},{key:"maxScore",label:"Best score",fmt:t=>Math.round(t)},{key:"minScore",label:"Worst score",fmt:t=>Math.round(t)}],HF=[{key:"accuracy",label:"Accuracy %",fmt:t=>`${Math.round(t)}%`}],GF=[{key:"minTime",label:"Best time",fmt:t=>`${t.toFixed(1)}s`},{key:"maxTime",label:"Worst time",fmt:t=>`${t.toFixed(1)}s`}];function KF(){const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,s]=j.useState([]),[o,a]=j.useState({}),[u,c]=j.useState(!1),h=j.useRef(!1);j.useEffect(()=>{if(window.Chart||h.current)return;h.current=!0;const P=document.createElement("script");P.src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js",document.head.appendChild(P)},[]),j.useEffect(()=>{F_().then(e).finally(()=>r(!1))},[]),j.useEffect(()=>{const P=i.filter(O=>!o[O.uid]);P.length!==0&&(c(!0),Promise.all(P.map(O=>Jx(O.uid).then(V=>({uid:O.uid,stats:V})))).then(O=>{a(V=>{const I={...V};return O.forEach(({uid:v,stats:S})=>{I[v]=S}),I})}).finally(()=>c(!1)))},[i]);function f(P){i.length>=Tf||i.find(O=>O.uid===P.uid)||s(O=>[...O,P])}function p(P){s(O=>O.filter(V=>V.uid!==P)),a(O=>{const V={...O};return delete V[P],V})}if(n)return m.jsxs("div",{className:"loader",children:[m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"})]});const _=t.filter(P=>!i.find(O=>O.uid===P.uid)),w=i.length<Tf,C=i.length>=2&&i.every(P=>o[P.uid])&&!u;function N(P){var O;return Gw((O=o[P])==null?void 0:O.global)}function T(P,O){var I,v;const V=(v=(I=o[P])==null?void 0:I.groups)==null?void 0:v[O];return V?Gw(V):null}const E=C?[...new Set(i.flatMap(P=>{var O;return Object.keys(((O=o[P.uid])==null?void 0:O.groups)||{})}))].sort():[];function x(P){return i.filter(O=>{var V,I;return!!((I=(V=o[O.uid])==null?void 0:V.groups)!=null&&I[P])})}return m.jsxs("div",{style:{width:"100%"},children:[m.jsxs("div",{style:{marginBottom:"1rem",background:"white",borderRadius:"16px",padding:"1.25rem",border:"1px solid var(--border)",maxWidth:"680px"},children:[m.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"nowrap",alignItems:"flex-start"},children:[i.map((P,O)=>m.jsxs("div",{style:{flex:"1 1 140px",minWidth:140},children:[m.jsxs("p",{style:{fontSize:"0.75rem",color:lt[O].label,fontWeight:700,marginBottom:"0.3rem"},children:["Student ",String.fromCharCode(65+O)]}),m.jsx(FF,{student:P,color:lt[O],onRemove:()=>p(P.uid)})]},P.uid)),w&&m.jsx("div",{style:{flex:"1 1 140px",minWidth:140},children:m.jsx(jF,{students:_,onSelect:f,color:lt[i.length],label:`Student ${String.fromCharCode(65+i.length)}`})})]}),i.length>0&&m.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.75rem",marginBottom:0},children:[i.length," student",i.length>1?"s":""," selected",w?` — add up to ${Tf-i.length} more`:" — maximum reached"]})]}),i.length<2&&m.jsx("div",{className:"card",style:{textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:"Select at least 2 students to compare"}),i.length>=2&&u&&m.jsxs("div",{className:"loader",style:{marginTop:"1rem"},children:[m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"})]}),m.jsx("div",{style:{width:"100%"},children:C&&i.length>=2&&m.jsxs(m.Fragment,{children:[m.jsx(oa,{title:"Overview",children:m.jsx(UF,{students:i,statsGetter:N})}),m.jsx(oa,{title:"Scores & performance",children:m.jsx(Kw,{students:i,leftMetrics:BF,rightMetrics:WF,leftLabel:"Score",rightLabel:"% / Count",statsGetter:N})}),m.jsx(oa,{title:"Response times",children:m.jsx(Qw,{students:i,metrics:$F,yLabel:"Seconds",statsGetter:N})}),E.map(P=>{const O=x(P);return O.length<1?null:m.jsxs("div",{children:[m.jsx("p",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",margin:"1.25rem 0 0.5rem"},children:VF(P)}),m.jsx(oa,{title:"Scores & performance",children:m.jsx(Kw,{students:O,leftMetrics:qF,rightMetrics:HF,leftLabel:"Score",rightLabel:"% / Count",statsGetter:V=>T(V,P)})}),m.jsx(oa,{title:"Response times",children:m.jsx(Qw,{students:O,metrics:GF,yLabel:"Seconds",statsGetter:V=>T(V,P)})})]},P)}),m.jsx(zF,{students:i})]})})]})}function If(t,e){return Math.floor(Math.random()*(e-t+1))+t}function QF(t,e,n=!1){const r=Math.pow(10,t)-1,i=If(1,r),s=[{value:i,operator:"+",running:i}];let o=i;for(let a=1;a<e;a++){let u=If(1,r),c=Math.random()<.5?"+":"-";c==="-"&&(o===0?c="+":o-u<0&&(u=If(1,o))),o=c==="+"?o+u:o-u,n?s.push({value:u,operator:c}):s.push({value:u,operator:c,running:o})}return{sequence:s,answer:o}}function YF({digits:t,count:e,duration:n,isCorrect:r}){const i=1+.1*(t-1)+(e-2)/20,s=20+(e-3)*.5,o=100/(1+n/s);return r?Math.round(o*i):0}const Sf=[{label:"Easy",digits:1,count:3},{label:"Medium",digits:2,count:5},{label:"Hard",digits:2,count:7},{label:"Custom",digits:null,count:null}];function XF({onCreated:t}){const{user:e}=Hl(),[n,r]=j.useState(0),[i,s]=j.useState(1),[o,a]=j.useState(3),[u,c]=j.useState(3),[h,f]=j.useState(!1),[p,_]=j.useState(""),w=n===3,C=w?i:Sf[n].digits,N=w?o:Sf[n].count;async function T(){f(!0),_("");try{const E=Array.from({length:u},(I,v)=>{const{sequence:S,answer:A}=QF(C,N,!0);return{qIdx:v,sequence:S,answer:A}}),x={digits:C,count:N,numGames:u},P=E,{id:O,code:V}=await tF(e.uid,x,P);t({id:O,code:V,config:x,questions:E})}catch(E){console.log("Error while creating CHallenge"+E),_("Failed to create challenge. Try again."),f(!1)}}return m.jsx("div",{style:{maxWidth:"560px"},children:m.jsxs("div",{className:"admin-card",children:[m.jsx("p",{style:{fontWeight:700,fontSize:"1rem",marginBottom:"1.25rem"},children:"🏆 Create Challenge"}),m.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.5rem",fontWeight:600},children:"DIFFICULTY"}),m.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1.25rem",flexWrap:"wrap"},children:Sf.map((E,x)=>m.jsx("button",{className:`diff-btn ${n===x?"selected":""}`,onClick:()=>r(x),children:E.label},E.label))}),w&&m.jsxs("div",{style:{marginBottom:"1.25rem"},children:[m.jsxs("div",{style:{marginBottom:"0.75rem"},children:[m.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.3rem",fontWeight:600},children:["DIGITS PER NUMBER: ",i]}),m.jsx("input",{type:"range",min:1,max:6,value:i,onChange:E=>s(+E.target.value),style:{width:"100%"}})]}),m.jsxs("div",{children:[m.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.3rem",fontWeight:600},children:["NUMBERS IN SEQUENCE: ",o]}),m.jsx("input",{type:"range",min:2,max:20,value:o,onChange:E=>a(+E.target.value),style:{width:"100%"}})]})]}),m.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.5rem",fontWeight:600},children:"NUMBER OF ROUNDS"}),m.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1.5rem",flexWrap:"wrap"},children:[1,2,3,5,10].map(E=>m.jsx("button",{className:`diff-btn ${u===E?"selected":""}`,onClick:()=>c(E),children:E},E))}),m.jsxs("div",{style:{background:"var(--bg)",borderRadius:"10px",padding:"0.75rem 1rem",marginBottom:"1.25rem",fontSize:"0.85rem",color:"var(--text-muted)",display:"flex",gap:"1.5rem"},children:[m.jsxs("span",{children:["📐 ",C," digit",C>1?"s":""]}),m.jsxs("span",{children:["🔢 ",N," numbers"]}),m.jsxs("span",{children:["🎮 ",u," round",u>1?"s":""]})]}),p&&m.jsx("p",{style:{color:"red",fontSize:"0.85rem",marginBottom:"0.75rem"},children:p}),m.jsx("button",{className:"btn btn-primary btn-full btn-lg",onClick:T,disabled:h,children:h?"Creating...":"Create Challenge →"})]})})}function Gl(){return YV}async function Yw(t,e){const n=Gl(),r=ns(n,`tokenOwners/${t}`),i=await FV(r);let s=!1;(!i.exists()||i.val()!==e)&&(s=!0,await nh(r,e)),i.exists()&&s&&console.log(`WARNING!!! Token Already exists ${t}  for ${i.val}`)}async function Mu(t,e){const n=Gl();await L_(ns(n,`s/${t}`),{[`question_${e.qIdx}`]:{sequence:e.sequence,qIdx:e.qIdx,pushedAt:Date.now()},next:e.qIdx})}async function JF(t){const e=Gl();await L_(ns(e,`s/${t}`),{next:-1})}async function ZF(t,e){const n=Gl();await VV(ns(n,`s/${t}/question_${e.qIdx}`)),console.log("removed question "+e.qIdx)}async function ej(t){const e=Gl();await nh(ns(e,`s/${t}`),null),await nh(ns(e,`tokenOwners/${t}`),null)}function tj(){const t="abcdefghijkmnopqrstuvwxyz0123456789";return Array.from({length:8},()=>t[Math.floor(Math.random()*t.length)]).join("")}const Xw={waiting:{text:"Waiting",color:"#BA7517",bg:"#FAEEDA"},active:{text:"Active",color:"#1D9E75",bg:"#E1F5EE"},finished:{text:"Done",color:"#7F77DD",bg:"#EEEDFE"}};function Jw({status:t}){const e=Xw[t]||Xw.waiting;return m.jsx("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"0.2rem 0.6rem",borderRadius:"999px",background:e.bg,color:e.color},children:e.text})}function nj({challenge:t,questions:e,onReset:n,onBack:r,restoredAdminState:i={}}){const[s,o]=j.useState(t),[a,u]=j.useState([]),[c,h]=j.useState(!1),[f,p]=j.useState(!1),[_,w]=j.useState([]),{user:C}=Hl(),N=j.useRef(Object.fromEntries(Object.entries(i).map(([F,U])=>[F,{...U,subUnsub:null,lastProcessed:null}]))),T=j.useRef(e),E=j.useRef(s);j.useEffect(()=>{E.current=s},[s]);function x(F){w(U=>[`${new Date().toLocaleTimeString()} — ${F}`,...U].slice(0,50))}function P(F){const U=[...F];for(let B=U.length-1;B>0;B--){const H=Math.floor(Math.random()*(B+1));[U[B],U[H]]=[U[H],U[B]]}return U}function O(F,U){const B=N.current[F];if(!B)return null;const H=B.shuffledOrder[U];return console.log(" for "+F+" the question index is "+H+" at "+U),H===void 0?null:T.current[H]}async function V(F,U){if(N.current[F]){const Le=N.current[F].token,Ue=N.current[F].currentIdx;x(`${U} already joined ${H} ${Le} WAIT ${Ue} NEXT ${N.current[F].prefetchIdx}`);return}x(`${U} joined first`);const B=P(T.current.map((Le,Ue)=>Ue)),H=tj();N.current[F]={token:H,shuffledOrder:B,currentIdx:0,prefetchIdx:1,subUnsub:null,lastProcessed:null},await sF(C.uid,t.id,F,N.current[F]),console.log("Written admin state"),await Uw(C.uid,t.id,F,H),await Yw(H,F);const Ce=O(F,0);Ce&&(await Mu(H,{sequence:Ce.sequence,qIdx:0}),x(`Q1 pre-loaded for ${U}`));const Te=zw(t.id,F,Le=>{S(F,U,Le)});N.current[F].subUnsub=Te}function I(F){F.forEach(U=>{const B=N.current[U.uid];if(B&&(Uw(C.uid,t.id,U.uid,B.token).then(()=>{console.log("part token confirmed written")}).catch(H=>{console.error("writeParticipantToken failed",H)}),console.log("Written participantToken from restored state "+B.token+" "+U.uid),Yw(B.token,U.uid).then(()=>{console.log("token resgistered successfully rtdb"+B.token);const H=O(U.uid,B.prefetchIdx-1);H&&(console.log("pushing question",H),Mu(B.token,{sequence:H.sequence,qIdx:B.prefetchIdx-1}))}).catch(H=>{console.error("registerToken failed on reattach/refresh page",H)})),B&&!B.subUnsub){console.log("subscribed to submission"+U.uid);const H=zw(t.id,U.uid,Ce=>{S(U.uid,U.name,Ce)});B.subUnsub=H,x(`Resumed listener for ${U.name}`)}else console.log("NOT subscribed to submission"+U.uid+" "+B.subUnsub)})}async function v(){h(!0),console.log("starting challenge");for(const[F,U]of Object.entries(N.current)){const B=O(F,U.prefetchIdx);B&&(console.log("pushing question "+B),await Mu(U.token,{sequence:B.sequence,qIdx:U.prefetchIdx}),U.prefetchIdx++,await jw(C.uid,t.id,F,{currentIdx:U.currentIdx,prefetchIdx:U.prefetchIdx}))}try{await oF(C.uid,t.id),x("Challenge started — Q1 revealed to all students"+t.id)}catch(F){console.log("unable to start challenge "+F)}h(!1)}async function S(F,U,B){const H=N.current[F];if(!H)return;const Ce=`${F}-${B.qIdx}`;if(H.lastProcessed===Ce)return;H.lastProcessed=Ce,ZF(H.token,B);const Te=O(F,H.currentIdx);if(!Te)return;const Le=parseInt(B.submittedAnswer)===Te.answer,Ue=YF({digits:t.config.digits,count:t.config.count,duration:B.duration,isCorrect:Le});x(`${U} Q${H.currentIdx+1} — ${Le?"✓":"✗"} ${Ue}pts`),H.currentIdx++,await Promise.all([lF(t.id,F,{score:Ue,isCorrect:Le,qIdx:B.qIdx,duration:B.duration,submittedAnswer:B.submittedAnswer}),(async()=>{const an=O(F,H.prefetchIdx);an?(await Mu(H.token,{sequence:an.sequence,qIdx:H.prefetchIdx}),H.prefetchIdx++):(await JF(H.token),await Bw(t.id,F),x(`${U} finished all questions`)),await jw(C.uid,t.id,F,{currentIdx:H.currentIdx,prefetchIdx:H.prefetchIdx})})()])}j.useEffect(()=>{const F=_F(t.id,o),U=yF(t.id,B=>{B.forEach(H=>{N.current[H.uid]||V(H.uid,H.name)}),I(B),u(B)});return()=>{F(),U(),Object.values(N.current).forEach(B=>{var H;return(H=B.subUnsub)==null?void 0:H.call(B)})}},[t.id]);async function A(){var F;p(!0);for(const U of Object.values(N.current))(F=U.subUnsub)==null||F.call(U),await ej(U.token);await aF(C.uid,t.id),x("Challenge finished — all channels cleared"),await new Promise(U=>setTimeout(U,2e3));try{await Z(a)}catch(U){x(`Post-challenge write failed: ${U.message}`),console.error("computeAndWrite  error",U)}p(!1)}async function k(F){const U=F.map(async B=>{var ln;const[H,Ce]=await iF(t.id,B.uid);if(!H.exists())return console.log("ERRROR geting results "+B.uid+" NOT FOUND"),null;const Te=H.data(),Le=Te.scores??[],Ue=Te.questionsAttempted??0,an=Te.totalScore??0;if(Te.status!="finished"&&(console.log(`WARNING TO BE FIXED ${Te.name} ${Te.status} ${Te.uid} ${an}`),Bw(t.id,B.uid)),Ue===0||an===0)return null;const _i=Le.reduce((Qt,un)=>Qt+(un.duration??0),0);let Dn=null;if(Ce.exists()){const Qt=Ce.data().submittedAt,un=E.current.startedAt;Qt!=null&&Qt.toMillis&&(un!=null&&un.toMillis)&&(Dn=Qt.toMillis()-un.toMillis())}const Sr=((ln=N.current[B.uid])==null?void 0:ln.shuffledOrder)??[];return{uid:B.uid,name:B.name,totalScore:an,totalCorrect:Te.totalCorrect??0,questionsAttempted:Ue,totalTime:_i,challengeDuration:Dn,scores:Le,shuffledOrder:Sr}});return x("Data Fetching — participants for summary and leaderboard"),(await Promise.all(U)).filter(Boolean)}function b(F){return[...F].sort((B,H)=>H.totalScore!==B.totalScore?H.totalScore-B.totalScore:(B.totalTime??1/0)-(H.totalTime??1/0)).slice(0,10).map((B,H)=>({rank:H+1,uid:B.uid,name:B.name,totalScore:B.totalScore,totalCorrect:B.totalCorrect,questionsAttempted:B.questionsAttempted,totalTime:B.totalTime,challengeDuration:B.challengeDuration}))}function R(F){const U=F.length;if(U===0)return{participantCount:a.length,attemptedCount:0};const B=F.map(ge=>ge.totalScore),H=F.map(ge=>ge.totalTime),Ce=F.filter(ge=>ge.challengeDuration!=null).map(ge=>ge.challengeDuration),Te=F.reduce((ge,Pe)=>ge+Pe.questionsAttempted,0),Le=F.reduce((ge,Pe)=>ge+Pe.totalCorrect,0),Ue=F.filter(ge=>ge.questionsAttempted>=e.length).length,an=Math.max(...B),_i=Math.min(...B),Dn=Math.ceil((an-_i||1)/5),Sr=Array.from({length:5},(ge,Pe)=>{const Cr=_i+Pe*Dn,yi=Cr+Dn-1;return{label:`${Cr}–${yi}`,count:B.filter(On=>On>=Cr&&On<=(Pe===4?an:yi)).length}}),ln={};for(const ge of F)for(const Pe of ge.scores){const Cr=ge.shuffledOrder[Pe.qIdx];if(Cr===void 0)continue;const yi=T.current[Cr];if(!yi)continue;const On=yi.qIdx;ln[On]||(ln[On]={attempted:0,correct:0}),ln[On].attempted++,Pe.isCorrect&&ln[On].correct++}const Qt=Object.entries(ln).map(([ge,Pe])=>({questionId:ge,attempted:Pe.attempted,correct:Pe.correct,correctRate:Math.round(Pe.correct/Pe.attempted*100)})).sort((ge,Pe)=>ge.correctRate-Pe.correctRate),un=Qt[0]??null;return{participantCount:a.length,attemptedCount:U,completionCount:Ue,completionRate:Math.round(Ue/U*100),maxScore:an,minScore:_i,avgScore:Math.round(B.reduce((ge,Pe)=>ge+Pe,0)/U),scoreDistribution:Sr,avgTotalTime:Math.round(H.reduce((ge,Pe)=>ge+Pe,0)/U),...Ce.length>0&&{maxDuration:Math.max(...Ce),minDuration:Math.min(...Ce),avgDuration:Math.round(Ce.reduce((ge,Pe)=>ge+Pe,0)/Ce.length)},totalQuestionsAnswered:Te,avgQuestionsAttempted:Math.round(Te/U),avgCorrectRate:Math.round(Le/Te*100),hardestQuestion:un,perQuestionBreakdown:Qt}}async function Z(F){const U=await k(F),B=b(U),H=R(U);await Promise.all([uF(C.uid,t.id,B),cF(C.uid,t.id,H)]),x(`Leaderboard written — top ${B.length} participants`),x(`Summary written — ${H.attemptedCount} scored, avg ${H.avgScore??0} pts`)}const{config:ve}=t,Kt=s.status==="waiting",rt=s.status==="active",$=s.status==="finished",J=[...a].sort((F,U)=>U.totalScore-F.totalScore);return m.jsxs("div",{children:[m.jsx("button",{className:"btn btn-outline",style:{marginBottom:"1rem",fontSize:"0.82rem"},onClick:r,children:"← All Challenges"}),m.jsx("div",{className:"admin-card",style:{maxWidth:"780px",marginBottom:"1rem"},children:m.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem"},children:[m.jsxs("div",{children:[m.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600,marginBottom:"0.25rem"},children:"CHALLENGE CODE"}),m.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"2.5rem",color:"var(--primary)",letterSpacing:"0.15em",marginBottom:"0.5rem"},children:t.code}),m.jsxs("div",{style:{display:"flex",gap:"1rem",fontSize:"0.82rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[m.jsxs("span",{children:["📐 ",ve.digits," digit",ve.digits>1?"s":""]}),m.jsxs("span",{children:["🔢 ",ve.count," numbers"]}),m.jsxs("span",{children:["🎮 ",e.length," questions"]}),m.jsxs("span",{children:["👥 ",a.length," joined"]})]})]}),m.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.5rem"},children:[m.jsx(Jw,{status:s.status}),Kt&&m.jsx("button",{className:"btn btn-green btn-lg",onClick:v,disabled:c||a.length===0,children:c?"Starting...":"▶ Start Challenge"}),rt&&m.jsx("button",{className:"btn btn-red",onClick:A,disabled:f,children:f?"Finishing...":"⏹ End Challenge"}),$&&m.jsx("button",{className:"btn btn-outline",onClick:n,children:"+ New Challenge"})]})]})}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 320px",gap:"1rem",alignItems:"start"},children:[m.jsxs("div",{className:"admin-card",children:[m.jsxs("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"1rem"},children:["Live Scoreboard",rt&&m.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.72rem",color:"#1D9E75",fontWeight:400},children:"● live"})]}),a.length===0?m.jsxs("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-muted)",fontSize:"0.9rem"},children:["Waiting for students to join...",m.jsx("br",{}),m.jsxs("span",{style:{fontSize:"0.8rem",opacity:.7},children:["Share code ",m.jsx("strong",{children:t.code})," with your students"]})]}):m.jsxs("div",{children:[m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 80px 80px 80px 80px",gap:"8px",padding:"0 0.5rem 0.5rem",borderBottom:"2px solid var(--border)",fontSize:"0.72rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:[m.jsx("span",{children:"Student"}),m.jsx("span",{style:{textAlign:"center"},children:"Done"}),m.jsx("span",{style:{textAlign:"center"},children:"Correct"}),m.jsx("span",{style:{textAlign:"center"},children:"Score"}),m.jsx("span",{style:{textAlign:"center"},children:"Status"})]}),J.map((F,U)=>m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 80px 80px 80px 80px",gap:"8px",padding:"0.6rem 0.5rem",borderBottom:"1px solid var(--border)",alignItems:"center",background:U===0&&$?"#FFFBEA":"transparent"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[$&&U===0&&m.jsx("span",{children:"🥇"}),$&&U===1&&m.jsx("span",{children:"🥈"}),$&&U===2&&m.jsx("span",{children:"🥉"}),m.jsx("span",{style:{fontWeight:700,fontSize:"0.875rem"},children:F.name})]}),m.jsx("div",{style:{textAlign:"center",fontSize:"0.875rem"},children:F.questionsAttempted||0}),m.jsx("div",{style:{textAlign:"center",fontSize:"0.875rem"},children:F.totalCorrect||0}),m.jsx("div",{style:{textAlign:"center",fontWeight:700,fontSize:"0.95rem",color:"var(--primary)"},children:F.totalScore||0}),m.jsx("div",{style:{textAlign:"center"},children:m.jsx(Jw,{status:F.status})})]},F.uid))]})]}),m.jsxs("div",{className:"admin-card",style:{maxHeight:"500px",overflowY:"auto"},children:[m.jsx("p",{style:{fontWeight:700,fontSize:"0.9rem",marginBottom:"0.75rem"},children:"Activity log"}),_.length===0?m.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"Waiting for activity..."}):_.map((F,U)=>m.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",padding:"0.3rem 0",borderBottom:"1px solid var(--border)"},children:F},U))]})]})]})}function Ai(t){if(t==null)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/60);return n>0?`${n}m ${e%60}s`:`${e}s`}function Oa(t){return t==null?"—":`${t}%`}function Jt(t){return t??"—"}function j_(t){return t!=null&&t.toDate?t.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"}):"—"}function eA(t){return t!=null&&t.toDate?t.toDate().toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}const rh={waiting:{color:"#BA7517",bg:"#FAEEDA",label:"Waiting"},active:{color:"#1D9E75",bg:"#E1F5EE",label:"Active"},finished:{color:"#7F77DD",bg:"#EEEDFE",label:"Done"}};function rj({status:t}){const e=rh[t]||rh.waiting;return m.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"0.2rem 0.6rem",borderRadius:"999px",background:e.bg,color:e.color,whiteSpace:"nowrap"},children:["● ",e.label]})}function ij({challenge:t,onBack:e}){var s,o,a,u,c;const n=t.summary||{},r=t.leaderboard||[],i=["🥇","🥈","🥉"];return m.jsxs("div",{style:{maxWidth:"900px"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"},children:[m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:e,children:"← Back"}),m.jsxs("div",{children:[m.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"2rem",color:"var(--primary)",letterSpacing:"0.12em"},children:t.code}),m.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",display:"flex",gap:"1rem",flexWrap:"wrap"},children:[m.jsxs("span",{children:["📅 ",j_(t.createdAt)," ",eA(t.createdAt)]}),m.jsxs("span",{children:["📐 ",(s=t.config)==null?void 0:s.digits," digits"]}),m.jsxs("span",{children:["🔢 ",(o=t.config)==null?void 0:o.count," numbers"]}),m.jsxs("span",{children:["🎮 ",(a=t.config)==null?void 0:a.numGames," rounds"]})]})]}),m.jsx(rj,{status:t.status})]}),m.jsxs("div",{className:"admin-card",style:{marginBottom:"1rem"},children:[m.jsx("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"1rem"},children:"Challenge Summary"}),m.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"0.75rem"},children:[["👥 Joined",Jt(n.participantCount)],["✅ Attempted",Jt(n.attemptedCount)],["🏁 Completed",`${Jt(n.completionCount)} (${Oa(n.completionRate)})`],["🏆 Max Score",Jt(n.maxScore)],["📉 Min Score",Jt(n.minScore)],["📊 Avg Score",Jt(n.avgScore)],["⏱ Avg Total Time",Ai(n.avgTotalTime)],["⚡ Min Duration",Ai(n.minDuration)],["🐢 Max Duration",Ai(n.maxDuration)],["🕐 Avg Duration",Ai(n.avgDuration)],["🎯 Avg Correct",Oa(n.avgCorrectRate)],["📝 Avg Attempted",Jt(n.avgQuestionsAttempted)]].map(([h,f])=>m.jsxs("div",{style:{background:"var(--bg)",borderRadius:"10px",padding:"0.6rem 0.85rem"},children:[m.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",marginBottom:"0.2rem"},children:h}),m.jsx("div",{style:{fontWeight:700,fontSize:"0.95rem"},children:f})]},h))})]}),((u=n.scoreDistribution)==null?void 0:u.length)>0&&m.jsxs("div",{className:"admin-card",style:{marginBottom:"1rem"},children:[m.jsx("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"0.75rem"},children:"Score Distribution"}),m.jsx("div",{style:{display:"flex",gap:"0.5rem",alignItems:"flex-end",height:"80px"},children:n.scoreDistribution.map(h=>{const f=Math.max(...n.scoreDistribution.map(_=>_.count),1),p=h.count/f*100;return m.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[m.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)"},children:h.count}),m.jsx("div",{style:{width:"100%",height:`${p}%`,background:"var(--primary)",borderRadius:"4px 4px 0 0",minHeight:"4px",opacity:.7+p/100*.3}}),m.jsx("div",{style:{fontSize:"0.6rem",color:"var(--text-muted)",textAlign:"center"},children:h.label})]},h.label)})})]}),m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",alignItems:"start"},children:[m.jsxs("div",{className:"admin-card",children:[m.jsx("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"0.75rem"},children:"🏆 Top 10 Leaderboard"}),r.length===0?m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"No data"}):m.jsxs("div",{children:[m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"24px 1fr 56px 56px 64px",gap:"6px",padding:"0 0.25rem 0.4rem",borderBottom:"2px solid var(--border)",fontSize:"0.68rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:[m.jsx("span",{children:"#"}),m.jsx("span",{children:"Student"}),m.jsx("span",{style:{textAlign:"center"},children:"✓"}),m.jsx("span",{style:{textAlign:"center"},children:"Score"}),m.jsx("span",{style:{textAlign:"center"},children:"Time"})]}),r.map((h,f)=>m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"24px 1fr 56px 56px 64px",gap:"6px",padding:"0.45rem 0.25rem",borderBottom:"1px solid var(--border)",alignItems:"center",background:f===0?"#FFFBEA":"transparent"},children:[m.jsx("span",{style:{fontSize:"0.85rem"},children:i[f]||f+1}),m.jsx("span",{style:{fontWeight:600,fontSize:"0.82rem"},children:h.name}),m.jsx("span",{style:{textAlign:"center",fontSize:"0.82rem"},children:h.totalCorrect}),m.jsx("span",{style:{textAlign:"center",fontWeight:700,color:"var(--primary)",fontSize:"0.9rem"},children:h.totalScore}),m.jsx("span",{style:{textAlign:"center",fontSize:"0.78rem",color:"var(--text-muted)"},children:Ai(h.totalTime)})]},h.uid))]})]}),m.jsxs("div",{className:"admin-card",children:[m.jsxs("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"0.75rem"},children:["📋 Question Breakdown ",m.jsx("span",{style:{fontWeight:400,fontSize:"0.75rem",color:"var(--text-muted)"},children:"(hardest first)"})]}),(c=n.perQuestionBreakdown)!=null&&c.length?m.jsxs("div",{children:[m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 56px 56px 64px",gap:"6px",padding:"0 0.25rem 0.4rem",borderBottom:"2px solid var(--border)",fontSize:"0.68rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:[m.jsx("span",{children:"Question"}),m.jsx("span",{style:{textAlign:"center"},children:"Tried"}),m.jsx("span",{style:{textAlign:"center"},children:"Correct"}),m.jsx("span",{style:{textAlign:"center"},children:"Rate"})]}),n.perQuestionBreakdown.map(h=>m.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 56px 56px 64px",gap:"6px",padding:"0.4rem 0.25rem",borderBottom:"1px solid var(--border)",alignItems:"center"},children:[m.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.78rem"},children:h.questionId}),m.jsx("span",{style:{textAlign:"center",fontSize:"0.82rem"},children:h.attempted}),m.jsx("span",{style:{textAlign:"center",fontSize:"0.82rem"},children:h.correct}),m.jsx("span",{style:{textAlign:"center",fontWeight:700,fontSize:"0.85rem",color:h.correctRate<40?"#E03131":h.correctRate<70?"#BA7517":"#1D9E75"},children:Oa(h.correctRate)})]},h.questionId))]}):m.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"No data"})]})]})]})}const sj=[{key:"date",label:"📅 Date",render:t=>`${j_(t.createdAt)} ${eA(t.createdAt)}`},{key:"config",label:"⚙️ Config",render:t=>{var e,n,r;return`${(e=t.config)==null?void 0:e.digits}d × ${(n=t.config)==null?void 0:n.count}n × ${(r=t.config)==null?void 0:r.numGames}q`}},{key:"participants",label:"👥 Joined",render:t=>{var e;return Jt((e=t.summary)==null?void 0:e.participantCount)}},{key:"attempted",label:"✅ Attempted",render:t=>{var e;return Jt((e=t.summary)==null?void 0:e.attemptedCount)}},{key:"completion",label:"🏁 Completion",render:t=>{var e,n;return`${Jt((e=t.summary)==null?void 0:e.completionCount)} (${Oa((n=t.summary)==null?void 0:n.completionRate)})`}},{key:"maxScore",label:"🪙 Max Score",render:t=>{var e;return Jt((e=t.summary)==null?void 0:e.maxScore)}},{key:"minScore",label:"📉 Min Score",render:t=>{var e;return Jt((e=t.summary)==null?void 0:e.minScore)}},{key:"avgScore",label:"📊 Avg Score",render:t=>{var e;return Jt((e=t.summary)==null?void 0:e.avgScore)}},{key:"avgTotalTime",label:"⏱ Avg Total Time",render:t=>{var e;return Ai((e=t.summary)==null?void 0:e.avgTotalTime)}},{key:"avgDuration",label:"🕐 Avg Duration",render:t=>{var e;return Ai((e=t.summary)==null?void 0:e.avgDuration)}},{key:"avgCorrect",label:"🎯 Avg Correct",render:t=>{var e;return Oa((e=t.summary)==null?void 0:e.avgCorrectRate)}},{key:"hardest",label:"🧠 Hardest Q",render:t=>{var e;return(e=t.summary)!=null&&e.hardestQuestion?`${t.summary.hardestQuestion.questionId} (${t.summary.hardestQuestion.correctRate}%)`:"—"}}];function oj({onBack:t,onOpenDetail:e}){const[n,r]=j.useState([]),[i,s]=j.useState([null]),[o,a]=j.useState(0),[u,c]=j.useState(!0),[h,f]=j.useState(!1),[p,_]=j.useState(!1),w=async(P,O)=>{c(!0);try{const V=await rF(P);if(r(I=>{const v=[...I];return v[O]=V.challenges,v}),V.hasMore&&V.challenges.length>0){const I=V.challenges[V.challenges.length-1]._snap;s(v=>{const S=[...v];return S[O+1]=I,S})}f(V.hasMore),_(V.hasMore),a(O)}catch(V){console.error("Fetch failed:",V),alert("Could not load the next page. Please try again.")}finally{c(!1)}};j.useEffect(()=>{w(null,0)},[]);const C=()=>{if(u)return;const P=o+1;if(n[P]){a(P);const O=P===n.length-1;f(!O||p)}else if(h){const O=i[P];w(O,P)}},N=()=>{o>0&&(a(P=>P-1),f(!0))},T=n[o]||[];if(u)return m.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Loading past challenges..."});if(T.length===0)return m.jsxs("div",{style:{maxWidth:"680px"},children:[m.jsx("button",{className:"btn btn-outline",style:{marginBottom:"1.25rem",fontSize:"0.82rem"},onClick:t,children:"← Active Challenges"}),m.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"No finished challenges yet."})]});const E=T,x=`200px repeat(${E.length}, minmax(140px, 1fr))`;return m.jsxs("div",{children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.25rem",flexWrap:"wrap"},children:[m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:t,children:"← Active Challenges"}),m.jsx("p",{style:{fontWeight:700,fontSize:"1.05rem",margin:0},children:"Past Challenges"}),m.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginLeft:"auto"},children:[T.length," challenge",T.length!==1?"s":""]})]}),m.jsx("div",{className:"admin-card",style:{overflowX:"auto",padding:"0"},children:m.jsxs("div",{style:{minWidth:"500px"},children:[m.jsxs("div",{style:{display:"grid",gridTemplateColumns:x,borderBottom:"2px solid var(--border)",position:"sticky",top:0,background:"var(--surface)",zIndex:1},children:[m.jsx("div",{style:{padding:"0.75rem 1rem",fontSize:"0.72rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:"Metric"}),E.map(P=>m.jsxs("button",{onClick:()=>e(P),title:"View full details",style:{padding:"0.75rem 0.5rem",textAlign:"center",background:"none",border:"none",cursor:"pointer",borderLeft:"1px solid var(--border)"},onMouseEnter:O=>O.currentTarget.style.background="var(--bg)",onMouseLeave:O=>O.currentTarget.style.background="none",children:[m.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"1.15rem",color:"var(--primary)",letterSpacing:"0.1em"},children:P.code}),m.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginTop:"2px"},children:j_(P.createdAt)})]},P.id))]}),sj.map((P,O)=>m.jsxs("div",{style:{display:"grid",gridTemplateColumns:x,borderBottom:"1px solid var(--border)",background:O%2===0?"transparent":"var(--bg)"},children:[m.jsx("div",{style:{padding:"0.55rem 1rem",fontSize:"0.78rem",fontWeight:600,color:"var(--text-muted)",display:"flex",alignItems:"center"},children:P.label}),E.map(V=>m.jsx("div",{style:{padding:"0.55rem 0.5rem",textAlign:"center",fontSize:"0.85rem",fontWeight:500,borderLeft:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center"},children:P.render(V)},V.id))]},P.key))]})}),m.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.75rem",marginTop:"1rem"},children:[m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:()=>N(),disabled:o===0,children:"← Prev"}),m.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:o+1}),m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:()=>C(),disabled:!h,children:"Next →"})]}),m.jsx("p",{style:{fontSize:"0.72rem",color:"var(--text-muted)",marginTop:"0.75rem",textAlign:"center"},children:"Click a challenge code to view full details"})]})}function aj({onSelect:t,onCreateNew:e,onPastChallenges:n}){const[r,i]=j.useState([]),[s,o]=j.useState(!0);return j.useEffect(()=>{nF().then(i).catch(a=>console.error("Failed to load challenges:",a)).finally(()=>o(!1))},[]),s?m.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Loading challenges..."}):m.jsxs("div",{style:{maxWidth:"680px"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.25rem"},children:[m.jsx("p",{style:{fontWeight:700,fontSize:"1.05rem",margin:0},children:"Select a Challenge to Monitor"}),m.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:n,children:"📋 Past Challenges"})]}),m.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[r.map(a=>{var c,h,f,p;const u=rh[a.status]||rh.waiting;return m.jsx("button",{onClick:()=>t(a.id),className:"admin-card",style:{textAlign:"left",cursor:"pointer",border:"2px solid var(--border)",transition:"border-color 0.15s",width:"100%",background:"var(--surface)"},onMouseEnter:_=>_.currentTarget.style.borderColor="var(--primary)",onMouseLeave:_=>_.currentTarget.style.borderColor="var(--border)",children:m.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem"},children:[m.jsxs("div",{children:[m.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"1.6rem",color:"var(--primary)",letterSpacing:"0.12em",marginBottom:"0.25rem"},children:a.code}),m.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",display:"flex",gap:"1rem",flexWrap:"wrap"},children:[m.jsxs("span",{children:["📐 ",(c=a.config)==null?void 0:c.digits," digits"]}),m.jsxs("span",{children:["🔢 ",(h=a.config)==null?void 0:h.count," numbers"]}),m.jsxs("span",{children:["🎮 ",((f=a.config)==null?void 0:f.questionCount)??"?"," questions"]}),((p=a.createdAt)==null?void 0:p.toDate)&&m.jsxs("span",{children:["🕐 ",a.createdAt.toDate().toLocaleTimeString()]})]})]}),m.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"0.2rem 0.7rem",borderRadius:"999px",background:u.bg,color:u.color,whiteSpace:"nowrap"},children:["● ",u.label]})]})},a.id)}),r.length===0&&m.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",padding:"0.5rem 0"},children:"No active challenges yet."}),m.jsxs("button",{onClick:e,className:"admin-card",style:{textAlign:"left",cursor:"pointer",border:"2px dashed var(--border)",background:"transparent",width:"100%",color:"var(--text-muted)",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[m.jsx("span",{style:{fontSize:"1.2rem"},children:"＋"}),"Create a new challenge"]})]})]})}function lj(){const[t,e]=j.useState("loading"),[n,r]=j.useState(null),[i,s]=j.useState({}),[o,a]=j.useState(null);j.useEffect(()=>{const p=sessionStorage.getItem("monitoringChallengeId");if(!p){e("selecting");return}Fw(p).then(_=>{if(_&&(_.status==="waiting"||_.status==="active")){const{adminState:w={},...C}=_;r(C),s(w),e("monitoring")}else sessionStorage.removeItem("monitoringChallengeId"),e("selecting")}).catch(()=>{sessionStorage.removeItem("monitoringChallengeId"),e("selecting")})},[]);async function u(p){e("loading");try{const _=await Fw(p);if(!_){e("selecting");return}const{adminState:w={},...C}=_;r(C),s(w),sessionStorage.setItem("monitoringChallengeId",p),e("monitoring")}catch(_){console.error("Failed to load challenge:",_),e("selecting")}}function c(p){r(p),s({}),sessionStorage.setItem("monitoringChallengeId",p.id),e("monitoring")}function h(){sessionStorage.removeItem("monitoringChallengeId"),r(null),s({}),e("selecting")}function f(){sessionStorage.removeItem("monitoringChallengeId"),r(null),s({}),e("selecting")}return t==="loading"?m.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Loading..."}):t==="selecting"?m.jsx(aj,{onSelect:u,onCreateNew:()=>e("creating"),onPastChallenges:()=>e("past")}):t==="creating"?m.jsxs("div",{children:[m.jsx("button",{className:"btn btn-outline",style:{marginBottom:"1rem",fontSize:"0.82rem"},onClick:()=>e("selecting"),children:"← Back"}),m.jsx(XF,{onCreated:c})]}):t==="past"?m.jsx(oj,{onBack:()=>e("selecting"),onOpenDetail:p=>{a(p),e("past-detail")}}):t==="past-detail"?m.jsx(ij,{challenge:o,onBack:()=>e("past")}):m.jsx(nj,{challenge:n,questions:n.questions,restoredAdminState:i,onBack:h,onReset:f})}const Zw=[{key:"games",label:"Games played",stops:["#FAEEDA","#FAC775","#EF9F27","#BA7517","#854F0B"],dot:"#BA7517"},{key:"accuracy",label:"Accuracy %",stops:["#EEEDFE","#AFA9EC","#7F77DD","#534AB7","#3C3489"],dot:"#534AB7"},{key:"time",label:"Time spent",stops:["#E1F5EE","#5DCAA5","#1D9E75","#0F6E56","#085041"],dot:"#0F6E56"}],ih=30,aa=30,uj=["Su","M","T","W","Th","F","S"],cj=["J","F","M","A","M","J","J","A","S","O","N","D"],hj={games:[1,3,5,7],accuracy:[40,60,75,90],time:[60,180,360,600]};function dj(){const t=new Date;return Array.from({length:ih},(e,n)=>{const r=new Date(t);return r.setDate(t.getDate()-(ih-1-n)),r})}const eE=dj();function fj(t,e){if(t==null)return-1;const n=hj[e];return t<n[0]?0:t<n[1]?1:t<n[2]?2:t<n[3]?3:4}function pj(t){return t<60?`${t}s`:`${Math.floor(t/60)}m ${t%60}s`}function tA(t){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${t.getDate()} ${e[t.getMonth()]} ${t.getFullYear()}`}function mj(t=""){const e=t.trim().split(" ");return e[0].slice(0,4)+(e[1]?e[1][0]:"")}function gj(t){return t.toISOString().split("T")[0].replace(/-/g,"")}const Cf={display:"flex",justifyContent:"space-between",gap:16,fontSize:11,color:"var(--text-muted,#666)",margin:"2px 0"},xf={fontWeight:500,color:"var(--text,#222)"};function _j({data:t}){if(!t)return null;const{x:e,y:n,student:r,date:i,day:s}=t;return m.jsxs("div",{style:{position:"fixed",left:Math.min(e+12,window.innerWidth-210),top:Math.min(n+12,window.innerHeight-130),background:"var(--bg,#fff)",border:"0.5px solid rgba(0,0,0,0.15)",borderRadius:8,padding:"8px 12px",fontSize:12,pointerEvents:"none",zIndex:9999,minWidth:170},children:[m.jsx("div",{style:{fontWeight:500,marginBottom:2},children:r.name}),m.jsx("div",{style:{color:"var(--text-muted,#888)",fontSize:11,marginBottom:6},children:tA(i)}),s?m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:Cf,children:[m.jsx("span",{children:"Games"}),"    ",m.jsx("span",{style:xf,children:s.games})]}),m.jsxs("div",{style:Cf,children:[m.jsx("span",{children:"Accuracy"})," ",m.jsxs("span",{style:xf,children:[s.accuracy,"%"]})]}),m.jsxs("div",{style:Cf,children:[m.jsx("span",{children:"Time"}),"     ",m.jsx("span",{style:xf,children:pj(s.time)})]})]}):m.jsx("div",{style:{color:"var(--text-muted,#aaa)",fontSize:11},children:"No activity"})]})}function tE({disabled:t,onClick:e,label:n,icon:r}){return m.jsx("button",{disabled:t,onClick:e,"aria-label":n,style:{background:"none",border:"0.5px solid rgba(0,0,0,0.15)",borderRadius:6,width:28,height:28,cursor:t?"default":"pointer",opacity:t?.3:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-muted,#666)"},children:m.jsx("i",{className:`ti ${r}`,"aria-hidden":"true"})})}function yj({students:t,setStudents:e,studentsLoaded:n,setStudentsLoaded:r,activityData:i,setActivityData:s,activityLoaded:o,setActivityLoaded:a,onStudentClick:u}){const[c,h]=j.useState(0),[f,p]=j.useState(0),[_,w]=j.useState(null),[C,N]=j.useState(!o||!n),T=j.useRef(null),[E,x]=j.useState(!1),[P,O]=j.useState(28),V=j.useRef(null),I=j.useCallback(Z=>{V.current&&V.current.disconnect(),Z&&(V.current=new ResizeObserver(ve=>{const Kt=ve[0].contentRect.width,rt=Math.floor((Kt-48-ih*3)/ih);O(Math.max(rt,20))}),V.current.observe(Z))},[]);j.useEffect(()=>{if(n&&o){N(!1);return}const Z=[];n||Z.push(F_().then(ve=>{e(ve),r(!0)})),o||Z.push(hF(30).then(ve=>{s(ve),a(!0)})),Promise.all(Z).finally(()=>N(!1))},[]),j.useEffect(()=>{if(E){clearInterval(T.current);return}return T.current=setInterval(()=>{p(Z=>(Z+1)%Zw.length)},3500),()=>clearInterval(T.current)},[E]);const v=j.useCallback((Z,ve,Kt,rt)=>{w({x:Z.clientX,y:Z.clientY,student:ve,date:Kt,day:rt})},[]),S=j.useCallback(()=>w(null),[]),A=j.useCallback((Z,ve)=>{ve&&(u==null||u(Z.uid))},[u]);if(C)return m.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Loading activity..."});const k=Zw[f],b=Math.ceil(t.length/aa),R=t.slice(c*aa,(c+1)*aa);return m.jsxs("div",{style:{fontFamily:"Nunito, sans-serif"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},children:[m.jsxs("div",{onClick:()=>x(Z=>!Z),style:{display:"flex",alignItems:"center",gap:7,fontSize:12,padding:"3px 10px",border:"0.5px solid rgba(0,0,0,0.15)",borderRadius:8,color:"var(--text-muted,#666)",background:"var(--bg-secondary,#f8f8f8)",cursor:"pointer",userSelect:"none"},children:[m.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:k.dot,display:"inline-block"}}),k.label,m.jsx("span",{style:{fontSize:10,opacity:.5,marginLeft:2},children:E?"▶":"⏸"})]}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-muted,#888)"},children:[m.jsx(tE,{disabled:c===0,onClick:()=>h(Z=>Z-1),icon:"ti-chevron-up",label:"Previous 30"}),m.jsxs("span",{children:[c*aa+1,"–",Math.min((c+1)*aa,t.length)]}),m.jsx(tE,{disabled:c>=b-1,onClick:()=>h(Z=>Z+1),icon:"ti-chevron-down",label:"Next 30"})]})]}),m.jsx("div",{ref:I,style:{overflowX:"auto"},children:m.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:3},"aria-label":"Student activity heatmap",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{style:{minWidth:40}}),eE.map((Z,ve)=>m.jsxs("th",{style:{fontSize:10,fontWeight:400,color:"var(--text-muted,#aaa)",textAlign:"center",padding:"0 0 4px",width:P},children:[m.jsxs("span",{style:{display:"block"},children:[Z.getDate(),cj[Z.getMonth()]]}),m.jsx("span",{style:{display:"block",opacity:.7},children:uj[Z.getDay()]})]},ve))]})}),m.jsx("tbody",{children:R.map(Z=>m.jsxs("tr",{children:[m.jsx("td",{style:{fontSize:11,color:"var(--text-muted,#888)",whiteSpace:"nowrap",paddingRight:8,textAlign:"right"},children:mj(Z.name)}),eE.map((ve,Kt)=>{var F;const rt=gj(ve),$=(F=i[Z.uid])==null?void 0:F[rt],J=$?fj($[k.key],k.key):-1;return m.jsx("td",{children:m.jsx("div",{role:$?"button":void 0,tabIndex:$?0:void 0,"aria-label":$?`${Z.name} ${tA(ve)}: ${$.games} games`:void 0,style:{width:P,height:28,borderRadius:5,background:J>=0?k.stops[J]:"var(--bg-secondary,#f0f0f0)",cursor:$?"pointer":"default"},onMouseEnter:U=>v(U,Z,ve,$),onMouseLeave:S,onClick:()=>A(Z,$),onDoubleClick:()=>u==null?void 0:u(Z.uid),onKeyDown:U=>U.key==="Enter"&&A(Z,$)})},Kt)})]},Z.uid))})]})}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:12,fontSize:11,color:"var(--text-muted,#aaa)"},children:[m.jsx("span",{children:"Less"}),k.stops.map((Z,ve)=>m.jsx("div",{style:{width:14,height:14,borderRadius:3,background:Z}},ve)),m.jsx("span",{children:"More"})]}),m.jsx(_j,{data:_})]})}const vj=[{id:"activity",label:"📅 Activity"},{id:"students",label:"👥 Students"},{id:"compare",label:"⚔️ Compare"},{id:"challenge",label:"🏆 Challenge"}];function wj(){const{user:t,logOut:e}=Hl(),[n,r]=j.useState("activity"),[i,s]=j.useState(null),[o,a]=j.useState([]),[u,c]=j.useState(!1),[h,f]=j.useState({}),[p,_]=j.useState(!1),w=C=>{console.log("open profile for",C),s(C),r("students")};return m.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)"},children:[m.jsxs("div",{style:{background:"white",borderBottom:"2px solid var(--border)",padding:"0.75rem 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[m.jsx("h1",{style:{fontFamily:"Fredoka One",fontSize:"1.4rem",color:"var(--primary)",margin:0},children:"🥷 Number Ninja Admin"}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[m.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:t==null?void 0:t.email}),m.jsx("button",{className:"btn btn-outline",onClick:e,children:"Sign out"})]})]}),m.jsx("div",{className:"tabs",style:{padding:"0 1.5rem",background:"white"},children:vj.map(C=>m.jsx("button",{className:`tab ${n===C.id?"active":""}`,onClick:()=>r(C.id),children:C.label},C.id))}),m.jsxs("div",{style:{padding:"1.5rem",maxWidth:"1500px",margin:"0 auto"},children:[n==="students"&&m.jsx(MF,{uid:i,students:o,setStudents:a,studentsLoaded:u,setStudentsLoaded:c}),n==="compare"&&m.jsx(KF,{}),n==="challenge"&&m.jsx(lj,{}),n==="activity"&&m.jsx(yj,{students:o,setStudents:a,studentsLoaded:u,setStudentsLoaded:c,activityData:h,setActivityData:f,activityLoaded:p,setActivityLoaded:_,onStudentClick:w})]})]})}function Ej(){const{user:t,isAdmin:e,signIn:n}=Hl();return t===void 0?m.jsx("div",{className:"loader-wrap",children:m.jsxs("div",{className:"loader",children:[m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"}),m.jsx("span",{className:"loader-dot"})]})}):t?e?m.jsx(wj,{}):m.jsx(ZV,{}):m.jsx("div",{className:"center-wrap",children:m.jsxs("div",{className:"card",style:{textAlign:"center",padding:"2.5rem"},children:[m.jsx("h1",{style:{fontFamily:"Fredoka One",fontSize:"2rem",marginBottom:"0.5rem"},children:"🥷 Admin Panel"}),m.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"2rem"},children:"Number Ninja — restricted access"}),m.jsx("button",{className:"btn btn-primary btn-full",onClick:n,children:"Sign in with Google"})]})})}function Tj(){return m.jsx(JV,{children:m.jsx(Ej,{})})}Af.createRoot(document.getElementById("root")).render(m.jsx(qA.StrictMode,{children:m.jsx(Tj,{})}));
