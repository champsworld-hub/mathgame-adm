(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function pR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var UE={exports:{}},Kc={},BE={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),mR=Symbol.for("react.portal"),gR=Symbol.for("react.fragment"),_R=Symbol.for("react.strict_mode"),yR=Symbol.for("react.profiler"),vR=Symbol.for("react.provider"),wR=Symbol.for("react.context"),ER=Symbol.for("react.forward_ref"),TR=Symbol.for("react.suspense"),IR=Symbol.for("react.memo"),SR=Symbol.for("react.lazy"),Sy=Symbol.iterator;function CR(t){return t===null||typeof t!="object"?null:(t=Sy&&t[Sy]||t["@@iterator"],typeof t=="function"?t:null)}var zE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$E=Object.assign,WE={};function po(t,e,n){this.props=t,this.context=e,this.refs=WE,this.updater=n||zE}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qE(){}qE.prototype=po.prototype;function Kp(t,e,n){this.props=t,this.context=e,this.refs=WE,this.updater=n||zE}var Qp=Kp.prototype=new qE;Qp.constructor=Kp;$E(Qp,po.prototype);Qp.isPureReactComponent=!0;var Cy=Array.isArray,HE=Object.prototype.hasOwnProperty,Yp={current:null},GE={key:!0,ref:!0,__self:!0,__source:!0};function KE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)HE.call(e,r)&&!GE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:dl,type:t,key:s,ref:o,props:i,_owner:Yp.current}}function AR(t,e){return{$$typeof:dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xp(t){return typeof t=="object"&&t!==null&&t.$$typeof===dl}function RR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ay=/\/+/g;function yd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RR(""+t.key):e.toString(36)}function Ru(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case dl:case mR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yd(o,0):r,Cy(i)?(n="",t!=null&&(n=t.replace(Ay,"$&/")+"/"),Ru(i,e,n,"",function(c){return c})):i!=null&&(Xp(i)&&(i=AR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ay,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+yd(s,a);o+=Ru(s,e,n,u,i)}else if(u=CR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+yd(s,a++),o+=Ru(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nu(t,e,n){if(t==null)return t;var r=[],i=0;return Ru(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},xu={transition:null},kR={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:xu,ReactCurrentOwner:Yp};function QE(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:nu,forEach:function(t,e,n){nu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nu(t,function(){e++}),e},toArray:function(t){return nu(t,function(e){return e})||[]},only:function(t){if(!Xp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=po;oe.Fragment=gR;oe.Profiler=yR;oe.PureComponent=Kp;oe.StrictMode=_R;oe.Suspense=TR;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kR;oe.act=QE;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$E({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)HE.call(e,u)&&!GE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:dl,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:wR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vR,_context:t},t.Consumer=t};oe.createElement=KE;oe.createFactory=function(t){var e=KE.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:ER,render:t}};oe.isValidElement=Xp;oe.lazy=function(t){return{$$typeof:SR,_payload:{_status:-1,_result:t},_init:xR}};oe.memo=function(t,e){return{$$typeof:IR,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=xu.transition;xu.transition={};try{t()}finally{xu.transition=e}};oe.unstable_act=QE;oe.useCallback=function(t,e){return Lt.current.useCallback(t,e)};oe.useContext=function(t){return Lt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Lt.current.useEffect(t,e)};oe.useId=function(){return Lt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Lt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};oe.useRef=function(t){return Lt.current.useRef(t)};oe.useState=function(t){return Lt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Lt.current.useTransition()};oe.version="18.3.1";BE.exports=oe;var H=BE.exports;const PR=pR(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NR=H,bR=Symbol.for("react.element"),DR=Symbol.for("react.fragment"),OR=Object.prototype.hasOwnProperty,LR=NR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MR={key:!0,ref:!0,__self:!0,__source:!0};function YE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OR.call(e,r)&&!MR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bR,type:t,key:s,ref:o,props:i,_owner:LR.current}}Kc.Fragment=DR;Kc.jsx=YE;Kc.jsxs=YE;UE.exports=Kc;var g=UE.exports,gf={},XE={exports:{}},Zt={},JE={exports:{}},ZE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,Z){var V=K.length;K.push(Z);e:for(;0<V;){var U=V-1>>>1,B=K[U];if(0<i(B,Z))K[U]=Z,K[V]=B,V=U;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Z=K[0],V=K.pop();if(V!==Z){K[0]=V;e:for(var U=0,B=K.length,W=B>>>1;U<W;){var Ie=2*(U+1)-1,we=K[Ie],Oe=Ie+1,Fe=K[Oe];if(0>i(we,V))Oe<B&&0>i(Fe,we)?(K[U]=Fe,K[Oe]=V,U=Oe):(K[U]=we,K[Ie]=V,U=Ie);else if(Oe<B&&0>i(Fe,V))K[U]=Fe,K[Oe]=V,U=Oe;else break e}}return Z}function i(K,Z){var V=K.sortIndex-Z.sortIndex;return V!==0?V:K.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,_=!1,w=!1,S=!1,N=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(K){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=K)r(c),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(c)}}function P(K){if(S=!1,x(K),!w)if(n(u)!==null)w=!0,pi(L);else{var Z=n(c);Z!==null&&tn(P,Z.startTime-K)}}function L(K,Z){w=!1,S&&(S=!1,C(v),v=-1),_=!0;var V=p;try{for(x(Z),f=n(u);f!==null&&(!(f.expirationTime>Z)||K&&!k());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var B=U(f.expirationTime<=Z);Z=t.unstable_now(),typeof B=="function"?f.callback=B:f===n(u)&&r(u),x(Z)}else r(u);f=n(u)}if(f!==null)var W=!0;else{var Ie=n(c);Ie!==null&&tn(P,Ie.startTime-Z),W=!1}return W}finally{f=null,p=V,_=!1}}var F=!1,T=null,v=-1,I=5,A=-1;function k(){return!(t.unstable_now()-A<I)}function b(){if(T!==null){var K=t.unstable_now();A=K;var Z=!0;try{Z=T(!0,K)}finally{Z?R():(F=!1,T=null)}}else F=!1}var R;if(typeof E=="function")R=function(){E(b)};else if(typeof MessageChannel<"u"){var Vt=new MessageChannel,pn=Vt.port2;Vt.port1.onmessage=b,R=function(){pn.postMessage(null)}}else R=function(){N(b,0)};function pi(K){T=K,F||(F=!0,R())}function tn(K,Z){v=N(function(){K(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){w||_||(w=!0,pi(L))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var V=p;p=Z;try{return K()}finally{p=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,Z){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var V=p;p=K;try{return Z()}finally{p=V}},t.unstable_scheduleCallback=function(K,Z,V){var U=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?U+V:U):V=U,K){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=V+B,K={id:h++,callback:Z,priorityLevel:K,startTime:V,expirationTime:B,sortIndex:-1},V>U?(K.sortIndex=V,e(c,K),n(u)===null&&K===n(c)&&(S?(C(v),v=-1):S=!0,tn(P,V-U))):(K.sortIndex=B,e(u,K),w||_||(w=!0,pi(L))),K},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(K){var Z=p;return function(){var V=p;p=Z;try{return K.apply(this,arguments)}finally{p=V}}}})(ZE);JE.exports=ZE;var VR=JE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FR=H,Jt=VR;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e0=new Set,xa={};function Ji(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(xa[t]=e,t=0;t<e.length;t++)e0.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=Object.prototype.hasOwnProperty,jR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ry={},xy={};function UR(t){return _f.call(xy,t)?!0:_f.call(Ry,t)?!1:jR.test(t)?xy[t]=!0:(Ry[t]=!0,!1)}function BR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zR(t,e,n,r){if(e===null||typeof e>"u"||BR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jp=/[\-:]([a-z])/g;function Zp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jp,Zp);mt[e]=new Mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jp,Zp);mt[e]=new Mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jp,Zp);mt[e]=new Mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function em(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zR(e,n,i,r)&&(n=null),r||i===null?UR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vr=FR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ru=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),t0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),rm=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),r0=Symbol.for("react.offscreen"),ky=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=ky&&t[ky]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,vd;function na(t){if(vd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vd=e&&e[1]||""}return`
`+vd+t}var wd=!1;function Ed(t,e){if(!t||wd)return"";wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{wd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function $R(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function Ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case _s:return"Portal";case yf:return"Profiler";case tm:return"StrictMode";case vf:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n0:return(t.displayName||"Context")+".Consumer";case t0:return(t._context.displayName||"Context")+".Provider";case nm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rm:return e=t.displayName||null,e!==null?e:Ef(t.type)||"Memo";case kr:e=t._payload,t=t._init;try{return Ef(t(e))}catch{}}return null}function WR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(e);case 8:return e===tm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function i0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qR(t){var e=i0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function iu(t){t._valueTracker||(t._valueTracker=qR(t))}function s0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=i0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tf(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Py(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o0(t,e){e=e.checked,e!=null&&em(t,"checked",e,!1)}function If(t,e){o0(t,e);var n=ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sf(t,e.type,ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ny(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sf(t,e,n){(e!=="number"||Qu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function Ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function by(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ra(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ei(n)}}function a0(t,e){var n=ei(e.value),r=ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var su,u0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(su=su||document.createElement("div"),su.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=su.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HR=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){HR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function c0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function h0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=c0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var GR=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rf(t,e){if(e){if(GR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function im(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pf=null,bs=null,Ds=null;function Oy(t){if(t=ml(t)){if(typeof Pf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Zc(e),Pf(t.stateNode,t.type,e))}}function d0(t){bs?Ds?Ds.push(t):Ds=[t]:bs=t}function f0(){if(bs){var t=bs,e=Ds;if(Ds=bs=null,Oy(t),e)for(t=0;t<e.length;t++)Oy(e[t])}}function p0(t,e){return t(e)}function m0(){}var Td=!1;function g0(t,e,n){if(Td)return t(e,n);Td=!0;try{return p0(t,e,n)}finally{Td=!1,(bs!==null||Ds!==null)&&(m0(),f0())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var r=Zc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Nf=!1;if(ur)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Nf=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Nf=!1}function KR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ca=!1,Yu=null,Xu=!1,bf=null,QR={onError:function(t){ca=!0,Yu=t}};function YR(t,e,n,r,i,s,o,a,u){ca=!1,Yu=null,KR.apply(QR,arguments)}function XR(t,e,n,r,i,s,o,a,u){if(YR.apply(this,arguments),ca){if(ca){var c=Yu;ca=!1,Yu=null}else throw Error(z(198));Xu||(Xu=!0,bf=c)}}function Zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ly(t){if(Zi(t)!==t)throw Error(z(188))}function JR(t){var e=t.alternate;if(!e){if(e=Zi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ly(i),t;if(s===r)return Ly(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function y0(t){return t=JR(t),t!==null?v0(t):null}function v0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=v0(t);if(e!==null)return e;t=t.sibling}return null}var w0=Jt.unstable_scheduleCallback,My=Jt.unstable_cancelCallback,ZR=Jt.unstable_shouldYield,ex=Jt.unstable_requestPaint,We=Jt.unstable_now,tx=Jt.unstable_getCurrentPriorityLevel,sm=Jt.unstable_ImmediatePriority,E0=Jt.unstable_UserBlockingPriority,Ju=Jt.unstable_NormalPriority,nx=Jt.unstable_LowPriority,T0=Jt.unstable_IdlePriority,Qc=null,Ln=null;function rx(t){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Qc,t,void 0,(t.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:ox,ix=Math.log,sx=Math.LN2;function ox(t){return t>>>=0,t===0?32:31-(ix(t)/sx|0)|0}var ou=64,au=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ia(a):(s&=o,s!==0&&(r=ia(s)))}else o=n&~i,o!==0?r=ia(o):s!==0&&(r=ia(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Tn(e),i=1<<n,r|=t[n],e&=~i;return r}function ax(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Tn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=ax(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I0(){var t=ou;return ou<<=1,!(ou&4194240)&&(ou=64),t}function Id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tn(e),t[e]=n}function ux(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function om(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function S0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var C0,am,A0,R0,x0,Of=!1,lu=[],Br=null,zr=null,$r=null,Na=new Map,ba=new Map,Nr=[],cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vy(t,e){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Wo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ml(e),e!==null&&am(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hx(t,e,n,r,i){switch(e){case"focusin":return Br=Wo(Br,t,e,n,r,i),!0;case"dragenter":return zr=Wo(zr,t,e,n,r,i),!0;case"mouseover":return $r=Wo($r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Na.set(s,Wo(Na.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ba.set(s,Wo(ba.get(s)||null,t,e,n,r,i)),!0}return!1}function k0(t){var e=Ci(t.target);if(e!==null){var n=Zi(e);if(n!==null){if(e=n.tag,e===13){if(e=_0(n),e!==null){t.blockedOn=e,x0(t.priority,function(){A0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ku(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return e=ml(n),e!==null&&am(e),t.blockedOn=n,!1;e.shift()}return!0}function Fy(t,e,n){ku(t)&&n.delete(e)}function dx(){Of=!1,Br!==null&&ku(Br)&&(Br=null),zr!==null&&ku(zr)&&(zr=null),$r!==null&&ku($r)&&($r=null),Na.forEach(Fy),ba.forEach(Fy)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,dx)))}function Da(t){function e(i){return qo(i,t)}if(0<lu.length){qo(lu[0],t);for(var n=1;n<lu.length;n++){var r=lu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Br!==null&&qo(Br,t),zr!==null&&qo(zr,t),$r!==null&&qo($r,t),Na.forEach(e),ba.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)k0(n),n.blockedOn===null&&Nr.shift()}var Os=vr.ReactCurrentBatchConfig,ec=!0;function fx(t,e,n,r){var i=_e,s=Os.transition;Os.transition=null;try{_e=1,lm(t,e,n,r)}finally{_e=i,Os.transition=s}}function px(t,e,n,r){var i=_e,s=Os.transition;Os.transition=null;try{_e=4,lm(t,e,n,r)}finally{_e=i,Os.transition=s}}function lm(t,e,n,r){if(ec){var i=Lf(t,e,n,r);if(i===null)Dd(t,e,r,tc,n),Vy(t,r);else if(hx(i,t,e,n,r))r.stopPropagation();else if(Vy(t,r),e&4&&-1<cx.indexOf(t)){for(;i!==null;){var s=ml(i);if(s!==null&&C0(s),s=Lf(t,e,n,r),s===null&&Dd(t,e,r,tc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dd(t,e,r,null,n)}}var tc=null;function Lf(t,e,n,r){if(tc=null,t=im(r),t=Ci(t),t!==null)if(e=Zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tc=t,null}function P0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tx()){case sm:return 1;case E0:return 4;case Ju:case nx:return 16;case T0:return 536870912;default:return 16}default:return 16}}var Vr=null,um=null,Pu=null;function N0(){if(Pu)return Pu;var t,e=um,n=e.length,r,i="value"in Vr?Vr.value:Vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pu=i.slice(t,1<r?1-r:void 0)}function Nu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uu(){return!0}function jy(){return!1}function en(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uu:jy,this.isPropagationStopped=jy,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cm=en(mo),pl=Ve({},mo,{view:0,detail:0}),mx=en(pl),Sd,Cd,Ho,Yc=Ve({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(Sd=t.screenX-Ho.screenX,Cd=t.screenY-Ho.screenY):Cd=Sd=0,Ho=t),Sd)},movementY:function(t){return"movementY"in t?t.movementY:Cd}}),Uy=en(Yc),gx=Ve({},Yc,{dataTransfer:0}),_x=en(gx),yx=Ve({},pl,{relatedTarget:0}),Ad=en(yx),vx=Ve({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),wx=en(vx),Ex=Ve({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tx=en(Ex),Ix=Ve({},mo,{data:0}),By=en(Ix),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ax[t])?!!e[t]:!1}function hm(){return Rx}var xx=Ve({},pl,{key:function(t){if(t.key){var e=Sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hm,charCode:function(t){return t.type==="keypress"?Nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kx=en(xx),Px=Ve({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zy=en(Px),Nx=Ve({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hm}),bx=en(Nx),Dx=Ve({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=en(Dx),Lx=Ve({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mx=en(Lx),Vx=[9,13,27,32],dm=ur&&"CompositionEvent"in window,ha=null;ur&&"documentMode"in document&&(ha=document.documentMode);var Fx=ur&&"TextEvent"in window&&!ha,b0=ur&&(!dm||ha&&8<ha&&11>=ha),$y=" ",Wy=!1;function D0(t,e){switch(t){case"keyup":return Vx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function jx(t,e){switch(t){case"compositionend":return O0(e);case"keypress":return e.which!==32?null:(Wy=!0,$y);case"textInput":return t=e.data,t===$y&&Wy?null:t;default:return null}}function Ux(t,e){if(vs)return t==="compositionend"||!dm&&D0(t,e)?(t=N0(),Pu=um=Vr=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b0&&e.locale!=="ko"?null:e.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bx[t.type]:e==="textarea"}function L0(t,e,n,r){d0(r),e=nc(e,"onChange"),0<e.length&&(n=new cm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var da=null,Oa=null;function zx(t){H0(t,0)}function Xc(t){var e=Ts(t);if(s0(e))return t}function $x(t,e){if(t==="change")return e}var M0=!1;if(ur){var Rd;if(ur){var xd="oninput"in document;if(!xd){var Hy=document.createElement("div");Hy.setAttribute("oninput","return;"),xd=typeof Hy.oninput=="function"}Rd=xd}else Rd=!1;M0=Rd&&(!document.documentMode||9<document.documentMode)}function Gy(){da&&(da.detachEvent("onpropertychange",V0),Oa=da=null)}function V0(t){if(t.propertyName==="value"&&Xc(Oa)){var e=[];L0(e,Oa,t,im(t)),g0(zx,e)}}function Wx(t,e,n){t==="focusin"?(Gy(),da=e,Oa=n,da.attachEvent("onpropertychange",V0)):t==="focusout"&&Gy()}function qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xc(Oa)}function Hx(t,e){if(t==="click")return Xc(e)}function Gx(t,e){if(t==="input"||t==="change")return Xc(e)}function Kx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var An=typeof Object.is=="function"?Object.is:Kx;function La(t,e){if(An(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_f.call(e,i)||!An(t[i],e[i]))return!1}return!0}function Ky(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qy(t,e){var n=Ky(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ky(n)}}function F0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?F0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j0(){for(var t=window,e=Qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qu(t.document)}return e}function fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Qx(t){var e=j0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&F0(n.ownerDocument.documentElement,n)){if(r!==null&&fm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qy(n,s);var o=Qy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yx=ur&&"documentMode"in document&&11>=document.documentMode,ws=null,Mf=null,fa=null,Vf=!1;function Yy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||ws==null||ws!==Qu(r)||(r=ws,"selectionStart"in r&&fm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fa&&La(fa,r)||(fa=r,r=nc(Mf,"onSelect"),0<r.length&&(e=new cm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ws)))}function cu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:cu("Animation","AnimationEnd"),animationiteration:cu("Animation","AnimationIteration"),animationstart:cu("Animation","AnimationStart"),transitionend:cu("Transition","TransitionEnd")},kd={},U0={};ur&&(U0=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Jc(t){if(kd[t])return kd[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in U0)return kd[t]=e[n];return t}var B0=Jc("animationend"),z0=Jc("animationiteration"),$0=Jc("animationstart"),W0=Jc("transitionend"),q0=new Map,Xy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(t,e){q0.set(t,e),Ji(e,[t])}for(var Pd=0;Pd<Xy.length;Pd++){var Nd=Xy[Pd],Xx=Nd.toLowerCase(),Jx=Nd[0].toUpperCase()+Nd.slice(1);ui(Xx,"on"+Jx)}ui(B0,"onAnimationEnd");ui(z0,"onAnimationIteration");ui($0,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(W0,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Jy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XR(r,e,void 0,t),t.currentTarget=null}function H0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Jy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Jy(i,a,c),s=u}}}if(Xu)throw t=bf,Xu=!1,bf=null,t}function Pe(t,e){var n=e[zf];n===void 0&&(n=e[zf]=new Set);var r=t+"__bubble";n.has(r)||(G0(e,t,2,!1),n.add(r))}function bd(t,e,n){var r=0;e&&(r|=4),G0(n,t,r,e)}var hu="_reactListening"+Math.random().toString(36).slice(2);function Ma(t){if(!t[hu]){t[hu]=!0,e0.forEach(function(n){n!=="selectionchange"&&(Zx.has(n)||bd(n,!1,t),bd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hu]||(e[hu]=!0,bd("selectionchange",!1,e))}}function G0(t,e,n,r){switch(P0(e)){case 1:var i=fx;break;case 4:i=px;break;default:i=lm}n=i.bind(null,e,n,t),i=void 0,!Nf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ci(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}g0(function(){var c=s,h=im(n),f=[];e:{var p=q0.get(t);if(p!==void 0){var _=cm,w=t;switch(t){case"keypress":if(Nu(n)===0)break e;case"keydown":case"keyup":_=kx;break;case"focusin":w="focus",_=Ad;break;case"focusout":w="blur",_=Ad;break;case"beforeblur":case"afterblur":_=Ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Uy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=bx;break;case B0:case z0:case $0:_=wx;break;case W0:_=Ox;break;case"scroll":_=mx;break;case"wheel":_=Mx;break;case"copy":case"cut":case"paste":_=Tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=zy}var S=(e&4)!==0,N=!S&&t==="scroll",C=S?p!==null?p+"Capture":null:p;S=[];for(var E=c,x;E!==null;){x=E;var P=x.stateNode;if(x.tag===5&&P!==null&&(x=P,C!==null&&(P=Pa(E,C),P!=null&&S.push(Va(E,P,x)))),N)break;E=E.return}0<S.length&&(p=new _(p,w,null,n,h),f.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==kf&&(w=n.relatedTarget||n.fromElement)&&(Ci(w)||w[cr]))break e;if((_||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,_?(w=n.relatedTarget||n.toElement,_=c,w=w?Ci(w):null,w!==null&&(N=Zi(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=c),_!==w)){if(S=Uy,P="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(S=zy,P="onPointerLeave",C="onPointerEnter",E="pointer"),N=_==null?p:Ts(_),x=w==null?p:Ts(w),p=new S(P,E+"leave",_,n,h),p.target=N,p.relatedTarget=x,P=null,Ci(h)===c&&(S=new S(C,E+"enter",w,n,h),S.target=x,S.relatedTarget=N,P=S),N=P,_&&w)t:{for(S=_,C=w,E=0,x=S;x;x=ds(x))E++;for(x=0,P=C;P;P=ds(P))x++;for(;0<E-x;)S=ds(S),E--;for(;0<x-E;)C=ds(C),x--;for(;E--;){if(S===C||C!==null&&S===C.alternate)break t;S=ds(S),C=ds(C)}S=null}else S=null;_!==null&&Zy(f,p,_,S,!1),w!==null&&N!==null&&Zy(f,N,w,S,!0)}}e:{if(p=c?Ts(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var L=$x;else if(qy(p))if(M0)L=Gx;else{L=qx;var F=Wx}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=Hx);if(L&&(L=L(t,c))){L0(f,L,n,h);break e}F&&F(t,p,c),t==="focusout"&&(F=p._wrapperState)&&F.controlled&&p.type==="number"&&Sf(p,"number",p.value)}switch(F=c?Ts(c):window,t){case"focusin":(qy(F)||F.contentEditable==="true")&&(ws=F,Mf=c,fa=null);break;case"focusout":fa=Mf=ws=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,Yy(f,n,h);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Yy(f,n,h)}var T;if(dm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else vs?D0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(b0&&n.locale!=="ko"&&(vs||v!=="onCompositionStart"?v==="onCompositionEnd"&&vs&&(T=N0()):(Vr=h,um="value"in Vr?Vr.value:Vr.textContent,vs=!0)),F=nc(c,v),0<F.length&&(v=new By(v,t,null,n,h),f.push({event:v,listeners:F}),T?v.data=T:(T=O0(n),T!==null&&(v.data=T)))),(T=Fx?jx(t,n):Ux(t,n))&&(c=nc(c,"onBeforeInput"),0<c.length&&(h=new By("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}H0(f,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Pa(t,n),s!=null&&r.unshift(Va(t,s,i)),s=Pa(t,e),s!=null&&r.push(Va(t,s,i))),t=t.return}return r}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Pa(n,s),u!=null&&o.unshift(Va(n,u,a))):i||(u=Pa(n,s),u!=null&&o.push(Va(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ek=/\r\n?/g,tk=/\u0000|\uFFFD/g;function ev(t){return(typeof t=="string"?t:""+t).replace(ek,`
`).replace(tk,"")}function du(t,e,n){if(e=ev(e),ev(t)!==e&&n)throw Error(z(425))}function rc(){}var Ff=null,jf=null;function Uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bf=typeof setTimeout=="function"?setTimeout:void 0,nk=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,rk=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(t){return tv.resolve(null).then(t).catch(ik)}:Bf;function ik(t){setTimeout(function(){throw t})}function Od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Da(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Da(e)}function Wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),On="__reactFiber$"+go,Fa="__reactProps$"+go,cr="__reactContainer$"+go,zf="__reactEvents$"+go,sk="__reactListeners$"+go,ok="__reactHandles$"+go;function Ci(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cr]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nv(t);t!==null;){if(n=t[On])return n;t=nv(t)}return e}t=n,n=t.parentNode}return null}function ml(t){return t=t[On]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Zc(t){return t[Fa]||null}var $f=[],Is=-1;function ci(t){return{current:t}}function be(t){0>Is||(t.current=$f[Is],$f[Is]=null,Is--)}function Re(t,e){Is++,$f[Is]=t.current,t.current=e}var ti={},Rt=ci(ti),zt=ci(!1),Li=ti;function qs(t,e){var n=t.type.contextTypes;if(!n)return ti;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function ic(){be(zt),be(Rt)}function rv(t,e,n){if(Rt.current!==ti)throw Error(z(168));Re(Rt,e),Re(zt,n)}function K0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,WR(t)||"Unknown",i));return Ve({},n,r)}function sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ti,Li=Rt.current,Re(Rt,t),Re(zt,zt.current),!0}function iv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=K0(t,e,Li),r.__reactInternalMemoizedMergedChildContext=t,be(zt),be(Rt),Re(Rt,t)):be(zt),Re(zt,n)}var Yn=null,eh=!1,Ld=!1;function Q0(t){Yn===null?Yn=[t]:Yn.push(t)}function ak(t){eh=!0,Q0(t)}function hi(){if(!Ld&&Yn!==null){Ld=!0;var t=0,e=_e;try{var n=Yn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,eh=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(t+1)),w0(sm,hi),i}finally{_e=e,Ld=!1}}return null}var Ss=[],Cs=0,oc=null,ac=0,on=[],an=0,Mi=null,Zn=1,er="";function Ei(t,e){Ss[Cs++]=ac,Ss[Cs++]=oc,oc=t,ac=e}function Y0(t,e,n){on[an++]=Zn,on[an++]=er,on[an++]=Mi,Mi=t;var r=Zn;t=er;var i=32-Tn(r)-1;r&=~(1<<i),n+=1;var s=32-Tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zn=1<<32-Tn(e)+i|n<<i|r,er=s+t}else Zn=1<<s|n<<i|r,er=t}function pm(t){t.return!==null&&(Ei(t,1),Y0(t,1,0))}function mm(t){for(;t===oc;)oc=Ss[--Cs],Ss[Cs]=null,ac=Ss[--Cs],Ss[Cs]=null;for(;t===Mi;)Mi=on[--an],on[an]=null,er=on[--an],on[an]=null,Zn=on[--an],on[an]=null}var Xt=null,Qt=null,De=!1,vn=null;function X0(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=Wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mi!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xt=t,Qt=null,!0):!1;default:return!1}}function Wf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qf(t){if(De){var e=Qt;if(e){var n=e;if(!sv(t,e)){if(Wf(t))throw Error(z(418));e=Wr(n.nextSibling);var r=Xt;e&&sv(t,e)?X0(r,n):(t.flags=t.flags&-4097|2,De=!1,Xt=t)}}else{if(Wf(t))throw Error(z(418));t.flags=t.flags&-4097|2,De=!1,Xt=t}}}function ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xt=t}function fu(t){if(t!==Xt)return!1;if(!De)return ov(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uf(t.type,t.memoizedProps)),e&&(e=Qt)){if(Wf(t))throw J0(),Error(z(418));for(;e;)X0(t,e),e=Wr(e.nextSibling)}if(ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Xt?Wr(t.stateNode.nextSibling):null;return!0}function J0(){for(var t=Qt;t;)t=Wr(t.nextSibling)}function Hs(){Qt=Xt=null,De=!1}function gm(t){vn===null?vn=[t]:vn.push(t)}var lk=vr.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function pu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function av(t){var e=t._init;return e(t._payload)}function Z0(t){function e(C,E){if(t){var x=C.deletions;x===null?(C.deletions=[E],C.flags|=16):x.push(E)}}function n(C,E){if(!t)return null;for(;E!==null;)e(C,E),E=E.sibling;return null}function r(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function i(C,E){return C=Kr(C,E),C.index=0,C.sibling=null,C}function s(C,E,x){return C.index=x,t?(x=C.alternate,x!==null?(x=x.index,x<E?(C.flags|=2,E):x):(C.flags|=2,E)):(C.flags|=1048576,E)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function a(C,E,x,P){return E===null||E.tag!==6?(E=zd(x,C.mode,P),E.return=C,E):(E=i(E,x),E.return=C,E)}function u(C,E,x,P){var L=x.type;return L===ys?h(C,E,x.props.children,P,x.key):E!==null&&(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===kr&&av(L)===E.type)?(P=i(E,x.props),P.ref=Go(C,E,x),P.return=C,P):(P=Fu(x.type,x.key,x.props,null,C.mode,P),P.ref=Go(C,E,x),P.return=C,P)}function c(C,E,x,P){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=$d(x,C.mode,P),E.return=C,E):(E=i(E,x.children||[]),E.return=C,E)}function h(C,E,x,P,L){return E===null||E.tag!==7?(E=bi(x,C.mode,P,L),E.return=C,E):(E=i(E,x),E.return=C,E)}function f(C,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=zd(""+E,C.mode,x),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ru:return x=Fu(E.type,E.key,E.props,null,C.mode,x),x.ref=Go(C,null,E),x.return=C,x;case _s:return E=$d(E,C.mode,x),E.return=C,E;case kr:var P=E._init;return f(C,P(E._payload),x)}if(ra(E)||zo(E))return E=bi(E,C.mode,x,null),E.return=C,E;pu(C,E)}return null}function p(C,E,x,P){var L=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:a(C,E,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ru:return x.key===L?u(C,E,x,P):null;case _s:return x.key===L?c(C,E,x,P):null;case kr:return L=x._init,p(C,E,L(x._payload),P)}if(ra(x)||zo(x))return L!==null?null:h(C,E,x,P,null);pu(C,x)}return null}function _(C,E,x,P,L){if(typeof P=="string"&&P!==""||typeof P=="number")return C=C.get(x)||null,a(E,C,""+P,L);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ru:return C=C.get(P.key===null?x:P.key)||null,u(E,C,P,L);case _s:return C=C.get(P.key===null?x:P.key)||null,c(E,C,P,L);case kr:var F=P._init;return _(C,E,x,F(P._payload),L)}if(ra(P)||zo(P))return C=C.get(x)||null,h(E,C,P,L,null);pu(E,P)}return null}function w(C,E,x,P){for(var L=null,F=null,T=E,v=E=0,I=null;T!==null&&v<x.length;v++){T.index>v?(I=T,T=null):I=T.sibling;var A=p(C,T,x[v],P);if(A===null){T===null&&(T=I);break}t&&T&&A.alternate===null&&e(C,T),E=s(A,E,v),F===null?L=A:F.sibling=A,F=A,T=I}if(v===x.length)return n(C,T),De&&Ei(C,v),L;if(T===null){for(;v<x.length;v++)T=f(C,x[v],P),T!==null&&(E=s(T,E,v),F===null?L=T:F.sibling=T,F=T);return De&&Ei(C,v),L}for(T=r(C,T);v<x.length;v++)I=_(T,C,v,x[v],P),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?v:I.key),E=s(I,E,v),F===null?L=I:F.sibling=I,F=I);return t&&T.forEach(function(k){return e(C,k)}),De&&Ei(C,v),L}function S(C,E,x,P){var L=zo(x);if(typeof L!="function")throw Error(z(150));if(x=L.call(x),x==null)throw Error(z(151));for(var F=L=null,T=E,v=E=0,I=null,A=x.next();T!==null&&!A.done;v++,A=x.next()){T.index>v?(I=T,T=null):I=T.sibling;var k=p(C,T,A.value,P);if(k===null){T===null&&(T=I);break}t&&T&&k.alternate===null&&e(C,T),E=s(k,E,v),F===null?L=k:F.sibling=k,F=k,T=I}if(A.done)return n(C,T),De&&Ei(C,v),L;if(T===null){for(;!A.done;v++,A=x.next())A=f(C,A.value,P),A!==null&&(E=s(A,E,v),F===null?L=A:F.sibling=A,F=A);return De&&Ei(C,v),L}for(T=r(C,T);!A.done;v++,A=x.next())A=_(T,C,v,A.value,P),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?v:A.key),E=s(A,E,v),F===null?L=A:F.sibling=A,F=A);return t&&T.forEach(function(b){return e(C,b)}),De&&Ei(C,v),L}function N(C,E,x,P){if(typeof x=="object"&&x!==null&&x.type===ys&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ru:e:{for(var L=x.key,F=E;F!==null;){if(F.key===L){if(L=x.type,L===ys){if(F.tag===7){n(C,F.sibling),E=i(F,x.props.children),E.return=C,C=E;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===kr&&av(L)===F.type){n(C,F.sibling),E=i(F,x.props),E.ref=Go(C,F,x),E.return=C,C=E;break e}n(C,F);break}else e(C,F);F=F.sibling}x.type===ys?(E=bi(x.props.children,C.mode,P,x.key),E.return=C,C=E):(P=Fu(x.type,x.key,x.props,null,C.mode,P),P.ref=Go(C,E,x),P.return=C,C=P)}return o(C);case _s:e:{for(F=x.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(C,E.sibling),E=i(E,x.children||[]),E.return=C,C=E;break e}else{n(C,E);break}else e(C,E);E=E.sibling}E=$d(x,C.mode,P),E.return=C,C=E}return o(C);case kr:return F=x._init,N(C,E,F(x._payload),P)}if(ra(x))return w(C,E,x,P);if(zo(x))return S(C,E,x,P);pu(C,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(C,E.sibling),E=i(E,x),E.return=C,C=E):(n(C,E),E=zd(x,C.mode,P),E.return=C,C=E),o(C)):n(C,E)}return N}var Gs=Z0(!0),eT=Z0(!1),lc=ci(null),uc=null,As=null,_m=null;function ym(){_m=As=uc=null}function vm(t){var e=lc.current;be(lc),t._currentValue=e}function Hf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){uc=t,_m=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function hn(t){var e=t._currentValue;if(_m!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(uc===null)throw Error(z(308));As=t,uc.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Ai=null;function wm(t){Ai===null?Ai=[t]:Ai.push(t)}function tT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wm(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pr=!1;function Em(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,wm(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function bu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,om(t,n)}}function lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,r){var i=t.updateQueue;Pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,S=a;switch(p=e,_=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(_,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,p=typeof w=="function"?w.call(_,f,p):w,p==null)break e;f=Ve({},f,p);break e;case 2:Pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=f):h=h.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fi|=o,t.lanes=o,t.memoizedState=f}}function uv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var gl={},Mn=ci(gl),ja=ci(gl),Ua=ci(gl);function Ri(t){if(t===gl)throw Error(z(174));return t}function Tm(t,e){switch(Re(Ua,e),Re(ja,t),Re(Mn,gl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Af(e,t)}be(Mn),Re(Mn,e)}function Ks(){be(Mn),be(ja),be(Ua)}function rT(t){Ri(Ua.current);var e=Ri(Mn.current),n=Af(e,t.type);e!==n&&(Re(ja,t),Re(Mn,n))}function Im(t){ja.current===t&&(be(Mn),be(ja))}var Le=ci(0);function hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function Sm(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var Du=vr.ReactCurrentDispatcher,Vd=vr.ReactCurrentBatchConfig,Vi=0,Me=null,Ye=null,rt=null,dc=!1,pa=!1,Ba=0,uk=0;function wt(){throw Error(z(321))}function Cm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!An(t[n],e[n]))return!1;return!0}function Am(t,e,n,r,i,s){if(Vi=s,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Du.current=t===null||t.memoizedState===null?fk:pk,t=n(r,i),pa){s=0;do{if(pa=!1,Ba=0,25<=s)throw Error(z(301));s+=1,rt=Ye=null,e.updateQueue=null,Du.current=mk,t=n(r,i)}while(pa)}if(Du.current=fc,e=Ye!==null&&Ye.next!==null,Vi=0,rt=Ye=Me=null,dc=!1,e)throw Error(z(300));return t}function Rm(){var t=Ba!==0;return Ba=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Me.memoizedState=rt=t:rt=rt.next=t,rt}function dn(){if(Ye===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=rt===null?Me.memoizedState:rt.next;if(e!==null)rt=e,Ye=t;else{if(t===null)throw Error(z(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?Me.memoizedState=rt=t:rt=rt.next=t}return rt}function za(t,e){return typeof e=="function"?e(t):e}function Fd(t){var e=dn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Vi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Me.lanes|=h,Fi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,An(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Me.lanes|=s,Fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jd(t){var e=dn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);An(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function iT(){}function sT(t,e){var n=Me,r=dn(),i=e(),s=!An(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,xm(lT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,$a(9,aT.bind(null,n,r,i,e),void 0,null),at===null)throw Error(z(349));Vi&30||oT(n,e,i)}return i}function oT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aT(t,e,n,r){e.value=n,e.getSnapshot=r,uT(e)&&cT(t)}function lT(t,e,n){return n(function(){uT(e)&&cT(t)})}function uT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!An(t,n)}catch{return!0}}function cT(t){var e=hr(t,1);e!==null&&In(e,t,1,-1)}function cv(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=dk.bind(null,Me,t),[e.memoizedState,t]}function $a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hT(){return dn().memoizedState}function Ou(t,e,n,r){var i=Dn();Me.flags|=t,i.memoizedState=$a(1|e,n,void 0,r===void 0?null:r)}function th(t,e,n,r){var i=dn();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&Cm(r,o.deps)){i.memoizedState=$a(e,n,s,r);return}}Me.flags|=t,i.memoizedState=$a(1|e,n,s,r)}function hv(t,e){return Ou(8390656,8,t,e)}function xm(t,e){return th(2048,8,t,e)}function dT(t,e){return th(4,2,t,e)}function fT(t,e){return th(4,4,t,e)}function pT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mT(t,e,n){return n=n!=null?n.concat([t]):null,th(4,4,pT.bind(null,e,t),n)}function km(){}function gT(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _T(t,e){var n=dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yT(t,e,n){return Vi&21?(An(n,e)||(n=I0(),Me.lanes|=n,Fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function ck(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Vd.transition;Vd.transition={};try{t(!1),e()}finally{_e=n,Vd.transition=r}}function vT(){return dn().memoizedState}function hk(t,e,n){var r=Gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wT(t))ET(e,n);else if(n=tT(t,e,n,r),n!==null){var i=Dt();In(n,t,r,i),TT(n,e,r)}}function dk(t,e,n){var r=Gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wT(t))ET(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,An(a,o)){var u=e.interleaved;u===null?(i.next=i,wm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=tT(t,e,i,r),n!==null&&(i=Dt(),In(n,t,r,i),TT(n,e,r))}}function wT(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function ET(t,e){pa=dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function TT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,om(t,n)}}var fc={readContext:hn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},fk={readContext:hn,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:hn,useEffect:hv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ou(4194308,4,pT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ou(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ou(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hk.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=Dn();return t={current:t},e.memoizedState=t},useState:cv,useDebugValue:km,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=cv(!1),e=t[0];return t=ck.bind(null,t[1]),Dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,i=Dn();if(De){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),at===null)throw Error(z(349));Vi&30||oT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hv(lT.bind(null,r,s,t),[t]),r.flags|=2048,$a(9,aT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dn(),e=at.identifierPrefix;if(De){var n=er,r=Zn;n=(r&~(1<<32-Tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pk={readContext:hn,useCallback:gT,useContext:hn,useEffect:xm,useImperativeHandle:mT,useInsertionEffect:dT,useLayoutEffect:fT,useMemo:_T,useReducer:Fd,useRef:hT,useState:function(){return Fd(za)},useDebugValue:km,useDeferredValue:function(t){var e=dn();return yT(e,Ye.memoizedState,t)},useTransition:function(){var t=Fd(za)[0],e=dn().memoizedState;return[t,e]},useMutableSource:iT,useSyncExternalStore:sT,useId:vT,unstable_isNewReconciler:!1},mk={readContext:hn,useCallback:gT,useContext:hn,useEffect:xm,useImperativeHandle:mT,useInsertionEffect:dT,useLayoutEffect:fT,useMemo:_T,useReducer:jd,useRef:hT,useState:function(){return jd(za)},useDebugValue:km,useDeferredValue:function(t){var e=dn();return Ye===null?e.memoizedState=t:yT(e,Ye.memoizedState,t)},useTransition:function(){var t=jd(za)[0],e=dn().memoizedState;return[t,e]},useMutableSource:iT,useSyncExternalStore:sT,useId:vT,unstable_isNewReconciler:!1};function _n(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nh={isMounted:function(t){return(t=t._reactInternals)?Zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Gr(t),s=or(r,i);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(In(e,t,i,r),bu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Gr(t),s=or(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,i),e!==null&&(In(e,t,i,r),bu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=Gr(t),i=or(n,r);i.tag=2,e!=null&&(i.callback=e),e=qr(t,i,r),e!==null&&(In(e,t,r,n),bu(e,t,r))}};function dv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,r)||!La(i,s):!0}function IT(t,e,n){var r=!1,i=ti,s=e.contextType;return typeof s=="object"&&s!==null?s=hn(s):(i=$t(e)?Li:Rt.current,r=e.contextTypes,s=(r=r!=null)?qs(t,i):ti),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function fv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nh.enqueueReplaceState(e,e.state,null)}function Kf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Em(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=hn(s):(s=$t(e)?Li:Rt.current,i.context=qs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nh.enqueueReplaceState(i,i.state,null),cc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",r=e;do n+=$R(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ud(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gk=typeof WeakMap=="function"?WeakMap:Map;function ST(t,e,n){n=or(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mc||(mc=!0,sp=r),Qf(t,e)},n}function CT(t,e,n){n=or(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qf(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Pk.bind(null,t,e,n),e.then(t,t))}function mv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=or(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var _k=vr.ReactCurrentOwner,Ut=!1;function Nt(t,e,n,r){e.child=t===null?eT(e,null,n,r):Gs(e,t.child,n,r)}function _v(t,e,n,r,i){n=n.render;var s=e.ref;return Ls(e,i),r=Am(t,e,n,r,s,i),n=Rm(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(De&&n&&pm(e),e.flags|=1,Nt(t,e,r,i),e.child)}function yv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,AT(t,e,s,r,i)):(t=Fu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=Kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function AT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(La(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,dr(t,e,i)}return Yf(t,e,n,r,i)}function RT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(xs,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(xs,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Re(xs,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Re(xs,Kt),Kt|=r;return Nt(t,e,i,n),e.child}function xT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yf(t,e,n,r,i){var s=$t(n)?Li:Rt.current;return s=qs(e,s),Ls(e,i),n=Am(t,e,n,r,s,i),r=Rm(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(De&&r&&pm(e),e.flags|=1,Nt(t,e,n,i),e.child)}function vv(t,e,n,r,i){if($t(n)){var s=!0;sc(e)}else s=!1;if(Ls(e,i),e.stateNode===null)Lu(t,e),IT(e,n,r),Kf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=hn(c):(c=$t(n)?Li:Rt.current,c=qs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&fv(e,o,r,c),Pr=!1;var p=e.memoizedState;o.state=p,cc(e,r,o,i),u=e.memoizedState,a!==r||p!==u||zt.current||Pr?(typeof h=="function"&&(Gf(e,n,h,r),u=e.memoizedState),(a=Pr||dv(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,nT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:_n(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=hn(u):(u=$t(n)?Li:Rt.current,u=qs(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&fv(e,o,r,u),Pr=!1,p=e.memoizedState,o.state=p,cc(e,r,o,i);var w=e.memoizedState;a!==f||p!==w||zt.current||Pr?(typeof _=="function"&&(Gf(e,n,_,r),w=e.memoizedState),(c=Pr||dv(e,n,c,r,p,w,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Xf(t,e,n,r,s,i)}function Xf(t,e,n,r,i,s){xT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&iv(e,n,!1),dr(t,e,s);r=e.stateNode,_k.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,a,s)):Nt(t,e,a,s),e.memoizedState=r.state,i&&iv(e,n,!0),e.child}function kT(t){var e=t.stateNode;e.pendingContext?rv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rv(t,e.context,!1),Tm(t,e.containerInfo)}function wv(t,e,n,r,i){return Hs(),gm(i),e.flags|=256,Nt(t,e,n,r),e.child}var Jf={dehydrated:null,treeContext:null,retryLane:0};function Zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function PT(t,e,n){var r=e.pendingProps,i=Le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Le,i&1),t===null)return qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sh(o,r,0,null),t=bi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zf(n),e.memoizedState=Jf,t):Pm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return yk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Kr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kr(a,s):(s=bi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jf,r}return s=t.child,t=s.sibling,r=Kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pm(t,e){return e=sh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mu(t,e,n,r){return r!==null&&gm(r),Gs(e,t.child,null,n),t=Pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ud(Error(z(422))),mu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sh({mode:"visible",children:r.children},i,0,null),s=bi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=Zf(o),e.memoizedState=Jf,s);if(!(e.mode&1))return mu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Ud(s,r,void 0),mu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ut||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),In(r,t,i,-1))}return Mm(),r=Ud(Error(z(421))),mu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Nk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=Wr(i.nextSibling),Xt=e,De=!0,vn=null,t!==null&&(on[an++]=Zn,on[an++]=er,on[an++]=Mi,Zn=t.id,er=t.overflow,Mi=e),e=Pm(e,r.children),e.flags|=4096,e)}function Ev(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hf(t.return,e,n)}function Bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function NT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(t,e,r.children,n),r=Le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ev(t,n,e);else if(t.tag===19)Ev(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bd(e,!0,n,null,s);break;case"together":Bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vk(t,e,n){switch(e.tag){case 3:kT(e),Hs();break;case 5:rT(e);break;case 1:$t(e.type)&&sc(e);break;case 4:Tm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(lc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Le,Le.current&1),e.flags|=128,null):n&e.child.childLanes?PT(t,e,n):(Re(Le,Le.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Re(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return NT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,RT(t,e,n)}return dr(t,e,n)}var bT,ep,DT,OT;bT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ep=function(){};DT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ri(Mn.current);var s=null;switch(n){case"input":i=Tf(t,i),r=Tf(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=Cf(t,i),r=Cf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rc)}Rf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Pe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};OT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ko(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wk(t,e,n){var r=e.pendingProps;switch(mm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return $t(e.type)&&ic(),Et(e),null;case 3:return r=e.stateNode,Ks(),be(zt),be(Rt),Sm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(lp(vn),vn=null))),ep(t,e),Et(e),null;case 5:Im(e);var i=Ri(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)DT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Et(e),null}if(t=Ri(Mn.current),fu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[On]=e,r[Fa]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<sa.length;i++)Pe(sa[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Py(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":by(r,s),Pe("invalid",r)}Rf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&du(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&du(r.textContent,a,t),i=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":iu(r),Ny(r,s,!0);break;case"textarea":iu(r),Dy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[Fa]=r,bT(t,e,!1,!1),e.stateNode=t;e:{switch(o=xf(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<sa.length;i++)Pe(sa[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":Py(t,r),i=Tf(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":by(t,r),i=Cf(t,r),Pe("invalid",t);break;default:i=r}Rf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?h0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&u0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ka(t,u):typeof u=="number"&&ka(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&em(t,s,u,o))}switch(n){case"input":iu(t),Ny(t,r,!1);break;case"textarea":iu(t),Dy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)OT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Ri(Ua.current),Ri(Mn.current),fu(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(s=r.nodeValue!==n)&&(t=Xt,t!==null))switch(t.tag){case 3:du(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&du(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return Et(e),null;case 13:if(be(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Qt!==null&&e.mode&1&&!(e.flags&128))J0(),Hs(),e.flags|=98560,s=!1;else if(s=fu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[On]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else vn!==null&&(lp(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Le.current&1?Ze===0&&(Ze=3):Mm())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return Ks(),ep(t,e),t===null&&Ma(e.stateNode.containerInfo),Et(e),null;case 10:return vm(e.type._context),Et(e),null;case 17:return $t(e.type)&&ic(),Et(e),null;case 19:if(be(Le),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ko(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hc(t),o!==null){for(e.flags|=128,Ko(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Le,Le.current&1|2),e.child}t=t.sibling}s.tail!==null&&We()>Ys&&(e.flags|=128,r=!0,Ko(s,!1),e.lanes=4194304)}else{if(!r)if(t=hc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return Et(e),null}else 2*We()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,r=!0,Ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=We(),e.sibling=null,n=Le.current,Re(Le,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return Lm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Ek(t,e){switch(mm(e),e.tag){case 1:return $t(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),be(zt),be(Rt),Sm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Im(e),null;case 13:if(be(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Le),null;case 4:return Ks(),null;case 10:return vm(e.type._context),null;case 22:case 23:return Lm(),null;case 24:return null;default:return null}}var gu=!1,St=!1,Tk=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function tp(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var Tv=!1;function Ik(t,e){if(Ff=ec,t=j0(),fm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)p=f,f=_;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(_=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jf={focusedElem:t,selectionRange:n},ec=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,N=w.memoizedState,C=e.stateNode,E=C.getSnapshotBeforeUpdate(e.elementType===e.type?S:_n(e.type,S),N);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(P){Ue(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return w=Tv,Tv=!1,w}function ma(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&tp(e,n,s)}i=i.next}while(i!==r)}}function rh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function LT(t){var e=t.alternate;e!==null&&(t.alternate=null,LT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[Fa],delete e[zf],delete e[sk],delete e[ok])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function MT(t){return t.tag===5||t.tag===3||t.tag===4}function Iv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||MT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}var ct=null,yn=!1;function Rr(t,e,n){for(n=n.child;n!==null;)VT(t,e,n),n=n.sibling}function VT(t,e,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:St||Rs(n,e);case 6:var r=ct,i=yn;ct=null,Rr(t,e,n),ct=r,yn=i,ct!==null&&(yn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(yn?(t=ct,n=n.stateNode,t.nodeType===8?Od(t.parentNode,n):t.nodeType===1&&Od(t,n),Da(t)):Od(ct,n.stateNode));break;case 4:r=ct,i=yn,ct=n.stateNode.containerInfo,yn=!0,Rr(t,e,n),ct=r,yn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tp(n,e,o),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!St&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Rr(t,e,n),St=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function Sv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tk),e.forEach(function(r){var i=bk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,yn=!1;break e;case 3:ct=a.stateNode.containerInfo,yn=!0;break e;case 4:ct=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(ct===null)throw Error(z(160));VT(s,o,i),ct=null,yn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ue(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)FT(e,t),e=e.sibling}function FT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),bn(t),r&4){try{ma(3,t,t.return),rh(3,t)}catch(S){Ue(t,t.return,S)}try{ma(5,t,t.return)}catch(S){Ue(t,t.return,S)}}break;case 1:gn(e,t),bn(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(gn(e,t),bn(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var i=t.stateNode;try{ka(i,"")}catch(S){Ue(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&o0(i,s),xf(a,o);var c=xf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?h0(i,f):h==="dangerouslySetInnerHTML"?u0(i,f):h==="children"?ka(i,f):em(i,h,f,c)}switch(a){case"input":If(i,s);break;case"textarea":a0(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ns(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ns(i,!!s.multiple,s.defaultValue,!0):Ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fa]=s}catch(S){Ue(t,t.return,S)}}break;case 6:if(gn(e,t),bn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Ue(t,t.return,S)}}break;case 3:if(gn(e,t),bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(S){Ue(t,t.return,S)}break;case 4:gn(e,t),bn(t);break;case 13:gn(e,t),bn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dm=We())),r&4&&Sv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(St=(c=St)||h,gn(e,t),St=c):gn(e,t),bn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(f=Q=h;Q!==null;){switch(p=Q,_=p.child,p.tag){case 0:case 11:case 14:case 15:ma(4,p,p.return);break;case 1:Rs(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(S){Ue(r,n,S)}}break;case 5:Rs(p,p.return);break;case 22:if(p.memoizedState!==null){Av(f);continue}}_!==null?(_.return=p,Q=_):Av(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=c0("display",o))}catch(S){Ue(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Ue(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gn(e,t),bn(t),r&4&&Sv(t);break;case 21:break;default:gn(e,t),bn(t)}}function bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(MT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ka(i,""),r.flags&=-33);var s=Iv(t);ip(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Iv(t);rp(t,a,o);break;default:throw Error(z(161))}}catch(u){Ue(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sk(t,e,n){Q=t,jT(t)}function jT(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||St;a=gu;var c=St;if(gu=o,(St=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?Rv(i):u!==null?(u.return=o,Q=u):Rv(i);for(;s!==null;)Q=s,jT(s),s=s.sibling;Q=i,gu=a,St=c}Cv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Cv(t)}}function Cv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||rh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}St||e.flags&512&&np(e)}catch(p){Ue(e,e.return,p)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Av(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Rv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rh(4,e)}catch(u){Ue(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ue(e,i,u)}}var s=e.return;try{np(e)}catch(u){Ue(e,s,u)}break;case 5:var o=e.return;try{np(e)}catch(u){Ue(e,o,u)}}}catch(u){Ue(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var Ck=Math.ceil,pc=vr.ReactCurrentDispatcher,Nm=vr.ReactCurrentOwner,cn=vr.ReactCurrentBatchConfig,he=0,at=null,He=null,dt=0,Kt=0,xs=ci(0),Ze=0,Wa=null,Fi=0,ih=0,bm=0,ga=null,Ft=null,Dm=0,Ys=1/0,Qn=null,mc=!1,sp=null,Hr=null,_u=!1,Fr=null,gc=0,_a=0,op=null,Mu=-1,Vu=0;function Dt(){return he&6?We():Mu!==-1?Mu:Mu=We()}function Gr(t){return t.mode&1?he&2&&dt!==0?dt&-dt:lk.transition!==null?(Vu===0&&(Vu=I0()),Vu):(t=_e,t!==0||(t=window.event,t=t===void 0?16:P0(t.type)),t):1}function In(t,e,n,r){if(50<_a)throw _a=0,op=null,Error(z(185));fl(t,n,r),(!(he&2)||t!==at)&&(t===at&&(!(he&2)&&(ih|=n),Ze===4&&br(t,dt)),Wt(t,r),n===1&&he===0&&!(e.mode&1)&&(Ys=We()+500,eh&&hi()))}function Wt(t,e){var n=t.callbackNode;lx(t,e);var r=Zu(t,t===at?dt:0);if(r===0)n!==null&&My(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&My(n),e===1)t.tag===0?ak(xv.bind(null,t)):Q0(xv.bind(null,t)),rk(function(){!(he&6)&&hi()}),n=null;else{switch(S0(r)){case 1:n=sm;break;case 4:n=E0;break;case 16:n=Ju;break;case 536870912:n=T0;break;default:n=Ju}n=GT(n,UT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function UT(t,e){if(Mu=-1,Vu=0,he&6)throw Error(z(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var r=Zu(t,t===at?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_c(t,r);else{e=r;var i=he;he|=2;var s=zT();(at!==t||dt!==e)&&(Qn=null,Ys=We()+500,Ni(t,e));do try{xk();break}catch(a){BT(t,a)}while(!0);ym(),pc.current=s,he=i,He!==null?e=0:(at=null,dt=0,e=Ze)}if(e!==0){if(e===2&&(i=Df(t),i!==0&&(r=i,e=ap(t,i))),e===1)throw n=Wa,Ni(t,0),br(t,r),Wt(t,We()),n;if(e===6)br(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ak(i)&&(e=_c(t,r),e===2&&(s=Df(t),s!==0&&(r=s,e=ap(t,s))),e===1))throw n=Wa,Ni(t,0),br(t,r),Wt(t,We()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Ti(t,Ft,Qn);break;case 3:if(br(t,r),(r&130023424)===r&&(e=Dm+500-We(),10<e)){if(Zu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bf(Ti.bind(null,t,Ft,Qn),e);break}Ti(t,Ft,Qn);break;case 4:if(br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ck(r/1960))-r,10<r){t.timeoutHandle=Bf(Ti.bind(null,t,Ft,Qn),r);break}Ti(t,Ft,Qn);break;case 5:Ti(t,Ft,Qn);break;default:throw Error(z(329))}}}return Wt(t,We()),t.callbackNode===n?UT.bind(null,t):null}function ap(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(Ni(t,e).flags|=256),t=_c(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&lp(e)),t}function lp(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function Ak(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!An(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(t,e){for(e&=~bm,e&=~ih,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Tn(e),r=1<<n;t[n]=-1,e&=~r}}function xv(t){if(he&6)throw Error(z(327));Ms();var e=Zu(t,0);if(!(e&1))return Wt(t,We()),null;var n=_c(t,e);if(t.tag!==0&&n===2){var r=Df(t);r!==0&&(e=r,n=ap(t,r))}if(n===1)throw n=Wa,Ni(t,0),br(t,e),Wt(t,We()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ti(t,Ft,Qn),Wt(t,We()),null}function Om(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Ys=We()+500,eh&&hi())}}function ji(t){Fr!==null&&Fr.tag===0&&!(he&6)&&Ms();var e=he;he|=1;var n=cn.transition,r=_e;try{if(cn.transition=null,_e=1,t)return t()}finally{_e=r,cn.transition=n,he=e,!(he&6)&&hi()}}function Lm(){Kt=xs.current,be(xs)}function Ni(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nk(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(mm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ic();break;case 3:Ks(),be(zt),be(Rt),Sm();break;case 5:Im(r);break;case 4:Ks();break;case 13:be(Le);break;case 19:be(Le);break;case 10:vm(r.type._context);break;case 22:case 23:Lm()}n=n.return}if(at=t,He=t=Kr(t.current,null),dt=Kt=e,Ze=0,Wa=null,bm=ih=Fi=0,Ft=ga=null,Ai!==null){for(e=0;e<Ai.length;e++)if(n=Ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ai=null}return t}function BT(t,e){do{var n=He;try{if(ym(),Du.current=fc,dc){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dc=!1}if(Vi=0,rt=Ye=Me=null,pa=!1,Ba=0,Nm.current=null,n===null||n.return===null){Ze=1,Wa=e,He=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=dt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=mv(o);if(_!==null){_.flags&=-257,gv(_,o,a,s,e),_.mode&1&&pv(s,c,e),e=_,u=c;var w=e.updateQueue;if(w===null){var S=new Set;S.add(u),e.updateQueue=S}else w.add(u);break e}else{if(!(e&1)){pv(s,c,e),Mm();break e}u=Error(z(426))}}else if(De&&a.mode&1){var N=mv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),gv(N,o,a,s,e),gm(Qs(u,a));break e}}s=u=Qs(u,a),Ze!==4&&(Ze=2),ga===null?ga=[s]:ga.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=ST(s,u,e);lv(s,C);break e;case 1:a=u;var E=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Hr===null||!Hr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=CT(s,a,e);lv(s,P);break e}}s=s.return}while(s!==null)}WT(n)}catch(L){e=L,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function zT(){var t=pc.current;return pc.current=fc,t===null?fc:t}function Mm(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),at===null||!(Fi&268435455)&&!(ih&268435455)||br(at,dt)}function _c(t,e){var n=he;he|=2;var r=zT();(at!==t||dt!==e)&&(Qn=null,Ni(t,e));do try{Rk();break}catch(i){BT(t,i)}while(!0);if(ym(),he=n,pc.current=r,He!==null)throw Error(z(261));return at=null,dt=0,Ze}function Rk(){for(;He!==null;)$T(He)}function xk(){for(;He!==null&&!ZR();)$T(He)}function $T(t){var e=HT(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?WT(t):He=e,Nm.current=null}function WT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ek(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,He=null;return}}else if(n=wk(n,e,Kt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ze===0&&(Ze=5)}function Ti(t,e,n){var r=_e,i=cn.transition;try{cn.transition=null,_e=1,kk(t,e,n,r)}finally{cn.transition=i,_e=r}return null}function kk(t,e,n,r){do Ms();while(Fr!==null);if(he&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ux(t,s),t===at&&(He=at=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_u||(_u=!0,GT(Ju,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=cn.transition,cn.transition=null;var o=_e;_e=1;var a=he;he|=4,Nm.current=null,Ik(t,n),FT(n,t),Qx(jf),ec=!!Ff,jf=Ff=null,t.current=n,Sk(n),ex(),he=a,_e=o,cn.transition=s}else t.current=n;if(_u&&(_u=!1,Fr=t,gc=i),s=t.pendingLanes,s===0&&(Hr=null),rx(n.stateNode),Wt(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mc)throw mc=!1,t=sp,sp=null,t;return gc&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===op?_a++:(_a=0,op=t):_a=0,hi(),null}function Ms(){if(Fr!==null){var t=S0(gc),e=cn.transition,n=_e;try{if(cn.transition=null,_e=16>t?16:t,Fr===null)var r=!1;else{if(t=Fr,Fr=null,gc=0,he&6)throw Error(z(331));var i=he;for(he|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Q=c;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:ma(8,h,s)}var f=h.child;if(f!==null)f.return=h,Q=f;else for(;Q!==null;){h=Q;var p=h.sibling,_=h.return;if(LT(h),h===c){Q=null;break}if(p!==null){p.return=_,Q=p;break}Q=_}}}var w=s.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var N=S.sibling;S.sibling=null,S=N}while(S!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,Q=C;break e}Q=s.return}}var E=t.current;for(Q=E;Q!==null;){o=Q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Q=x;else e:for(o=E;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rh(9,a)}}catch(L){Ue(a,a.return,L)}if(a===o){Q=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,Q=P;break e}Q=a.return}}if(he=i,hi(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Qc,t)}catch{}r=!0}return r}finally{_e=n,cn.transition=e}}return!1}function kv(t,e,n){e=Qs(n,e),e=ST(t,e,1),t=qr(t,e,1),e=Dt(),t!==null&&(fl(t,1,e),Wt(t,e))}function Ue(t,e,n){if(t.tag===3)kv(t,t,n);else for(;e!==null;){if(e.tag===3){kv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=Qs(n,t),t=CT(e,t,1),e=qr(e,t,1),t=Dt(),e!==null&&(fl(e,1,t),Wt(e,t));break}}e=e.return}}function Pk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(dt&n)===n&&(Ze===4||Ze===3&&(dt&130023424)===dt&&500>We()-Dm?Ni(t,0):bm|=n),Wt(t,e)}function qT(t,e){e===0&&(t.mode&1?(e=au,au<<=1,!(au&130023424)&&(au=4194304)):e=1);var n=Dt();t=hr(t,e),t!==null&&(fl(t,e,n),Wt(t,n))}function Nk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qT(t,n)}function bk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),qT(t,n)}var HT;HT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,vk(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,De&&e.flags&1048576&&Y0(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lu(t,e),t=e.pendingProps;var i=qs(e,Rt.current);Ls(e,n),i=Am(null,e,r,t,i,n);var s=Rm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,sc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Em(e),i.updater=nh,e.stateNode=i,i._reactInternals=e,Kf(e,r,t,n),e=Xf(null,e,r,!0,s,n)):(e.tag=0,De&&s&&pm(e),Nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ok(r),t=_n(r,t),i){case 0:e=Yf(null,e,r,t,n);break e;case 1:e=vv(null,e,r,t,n);break e;case 11:e=_v(null,e,r,t,n);break e;case 14:e=yv(null,e,r,_n(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Yf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),vv(t,e,r,i,n);case 3:e:{if(kT(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,nT(t,e),cc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qs(Error(z(423)),e),e=wv(t,e,r,n,i);break e}else if(r!==i){i=Qs(Error(z(424)),e),e=wv(t,e,r,n,i);break e}else for(Qt=Wr(e.stateNode.containerInfo.firstChild),Xt=e,De=!0,vn=null,n=eT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),r===i){e=dr(t,e,n);break e}Nt(t,e,r,n)}e=e.child}return e;case 5:return rT(e),t===null&&qf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uf(r,i)?o=null:s!==null&&Uf(r,s)&&(e.flags|=32),xT(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&qf(e),null;case 13:return PT(t,e,n);case 4:return Tm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):Nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),_v(t,e,r,i,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Re(lc,r._currentValue),r._currentValue=o,s!==null)if(An(s.value,o)){if(s.children===i.children&&!zt.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=or(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Hf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ls(e,n),i=hn(i),r=r(i),e.flags|=1,Nt(t,e,r,n),e.child;case 14:return r=e.type,i=_n(r,e.pendingProps),i=_n(r.type,i),yv(t,e,r,i,n);case 15:return AT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),Lu(t,e),e.tag=1,$t(r)?(t=!0,sc(e)):t=!1,Ls(e,n),IT(e,r,i),Kf(e,r,i,n),Xf(null,e,r,!0,t,n);case 19:return NT(t,e,n);case 22:return RT(t,e,n)}throw Error(z(156,e.tag))};function GT(t,e){return w0(t,e)}function Dk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new Dk(t,e,n,r)}function Vm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ok(t){if(typeof t=="function")return Vm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nm)return 11;if(t===rm)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return bi(n.children,i,s,e);case tm:o=8,i|=8;break;case yf:return t=ln(12,n,e,i|2),t.elementType=yf,t.lanes=s,t;case vf:return t=ln(13,n,e,i),t.elementType=vf,t.lanes=s,t;case wf:return t=ln(19,n,e,i),t.elementType=wf,t.lanes=s,t;case r0:return sh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t0:o=10;break e;case n0:o=9;break e;case nm:o=11;break e;case rm:o=14;break e;case kr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bi(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function sh(t,e,n,r){return t=ln(22,t,r,e),t.elementType=r0,t.lanes=n,t.stateNode={isHidden:!1},t}function zd(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function $d(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Lk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Id(0),this.expirationTimes=Id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fm(t,e,n,r,i,s,o,a,u){return t=new Lk(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Em(s),t}function Mk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function KT(t){if(!t)return ti;t=t._reactInternals;e:{if(Zi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if($t(n))return K0(t,n,e)}return e}function QT(t,e,n,r,i,s,o,a,u){return t=Fm(n,r,!0,t,i,s,o,a,u),t.context=KT(null),n=t.current,r=Dt(),i=Gr(n),s=or(r,i),s.callback=e??null,qr(n,s,i),t.current.lanes=i,fl(t,i,r),Wt(t,r),t}function oh(t,e,n,r){var i=e.current,s=Dt(),o=Gr(i);return n=KT(n),e.context===null?e.context=n:e.pendingContext=n,e=or(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qr(i,e,o),t!==null&&(In(t,i,o,s),bu(t,i,o)),o}function yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jm(t,e){Pv(t,e),(t=t.alternate)&&Pv(t,e)}function Vk(){return null}var YT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Um(t){this._internalRoot=t}ah.prototype.render=Um.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));oh(t,e,null,null)};ah.prototype.unmount=Um.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ji(function(){oh(null,t,null,null)}),e[cr]=null}};function ah(t){this._internalRoot=t}ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=R0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&k0(t)}};function Bm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nv(){}function Fk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=yc(o);s.call(c)}}var o=QT(e,r,t,0,null,!1,!1,"",Nv);return t._reactRootContainer=o,t[cr]=o.current,Ma(t.nodeType===8?t.parentNode:t),ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=yc(u);a.call(c)}}var u=Fm(t,0,!1,null,null,!1,!1,"",Nv);return t._reactRootContainer=u,t[cr]=u.current,Ma(t.nodeType===8?t.parentNode:t),ji(function(){oh(e,u,n,r)}),u}function uh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=yc(o);a.call(u)}}oh(e,o,t,i)}else o=Fk(n,e,t,i,r);return yc(o)}C0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(om(e,n|1),Wt(e,We()),!(he&6)&&(Ys=We()+500,hi()))}break;case 13:ji(function(){var r=hr(t,1);if(r!==null){var i=Dt();In(r,t,1,i)}}),jm(t,1)}};am=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Dt();In(e,t,134217728,n)}jm(t,134217728)}};A0=function(t){if(t.tag===13){var e=Gr(t),n=hr(t,e);if(n!==null){var r=Dt();In(n,t,e,r)}jm(t,e)}};R0=function(){return _e};x0=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Pf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zc(r);if(!i)throw Error(z(90));s0(r),If(r,i)}}}break;case"textarea":a0(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};p0=Om;m0=ji;var jk={usingClientEntryPoint:!1,Events:[ml,Ts,Zc,d0,f0,Om]},Qo={findFiberByHostInstance:Ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uk={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=y0(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||Vk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Qc=yu.inject(Uk),Ln=yu}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jk;Zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bm(e))throw Error(z(200));return Mk(t,e,null,n)};Zt.createRoot=function(t,e){if(!Bm(t))throw Error(z(299));var n=!1,r="",i=YT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fm(t,1,!1,null,null,n,!1,r,i),t[cr]=e.current,Ma(t.nodeType===8?t.parentNode:t),new Um(e)};Zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=y0(e),t=t===null?null:t.stateNode,t};Zt.flushSync=function(t){return ji(t)};Zt.hydrate=function(t,e,n){if(!lh(e))throw Error(z(200));return uh(null,t,e,!0,n)};Zt.hydrateRoot=function(t,e,n){if(!Bm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=YT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=QT(e,null,t,1,n??null,i,!1,s,o),t[cr]=e.current,Ma(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ah(e)};Zt.render=function(t,e,n){if(!lh(e))throw Error(z(200));return uh(null,t,e,!1,n)};Zt.unmountComponentAtNode=function(t){if(!lh(t))throw Error(z(40));return t._reactRootContainer?(ji(function(){uh(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};Zt.unstable_batchedUpdates=Om;Zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return uh(t,e,n,!1,r)};Zt.version="18.3.1-next-f1338f8080-20240426";function XT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XT)}catch(t){console.error(t)}}XT(),XE.exports=Zt;var Bk=XE.exports,bv=Bk;gf.createRoot=bv.createRoot,gf.hydrateRoot=bv.hydrateRoot;var Dv={};/**
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
 */const JT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const $=function(t,e){if(!t)throw _o(e)},_o=function(t){return new Error("Firebase Database ("+JT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ZT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(n[h],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ZT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new $k;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $k extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eI=function(t){const e=ZT(t);return zm.encodeByteArray(e,!0)},vc=function(t){return eI(t).replace(/\./g,"")},wc=function(t){try{return zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wk(t){return tI(void 0,t)}function tI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qk(n)||(t[n]=tI(t[n],e[n]));return t}function qk(t){return t!=="__proto__"}/**
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
 */function Hk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gk=()=>Hk().__FIREBASE_DEFAULTS__,Kk=()=>{if(typeof process>"u"||typeof Dv>"u")return;const t=Dv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wc(t[1]);return e&&JSON.parse(e)},ch=()=>{try{return Gk()||Kk()||Qk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nI=t=>{var e,n;return(n=(e=ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rI=t=>{const e=nI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iI=()=>{var t;return(t=ch())===null||t===void 0?void 0:t.config},sI=t=>{var e;return(e=ch())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function oI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vc(JSON.stringify(n)),vc(JSON.stringify(o)),""].join(".")}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $m(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function Yk(){var t;const e=(t=ch())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zk(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eP(){return JT.NODE_ADMIN===!0}function tP(){return!Yk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nP(){try{return typeof indexedDB=="object"}catch{return!1}}function rP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const iP="FirebaseError";class wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iP,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yl.prototype.create)}}class yl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wr(i,a,r)}}function sP(t,e){return t.replace(oP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const oP=/\{\$([^}]+)}/g;/**
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
 */function qa(t){return JSON.parse(t)}function Je(t){return JSON.stringify(t)}/**
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
 */const lI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=qa(wc(s[0])||""),n=qa(wc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},aP=function(t){const e=lI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lP=function(t){const e=lI(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function up(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ec(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ha(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ov(s)&&Ov(o)){if(!Ha(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ov(t){return t!==null&&typeof t=="object"}/**
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
 */function yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class uP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function cP(t,e){const n=new hP(t,e);return n.subscribe.bind(n)}class hP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wd),i.error===void 0&&(i.error=Wd),i.complete===void 0&&(i.complete=Wd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wd(){}function hh(t,e){return`${t} failed: ${e} argument `}/**
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
 */const fP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class ni{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ii="[DEFAULT]";/**
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
 */class pP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _l;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gP(e))try{this.getOrInitializeService({instanceIdentifier:Ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ii){return this.instances.has(e)}getOptions(e=Ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ii){return this.component?this.component.multipleInstances?e:Ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mP(t){return t===Ii?void 0:t}function gP(t){return t.instantiationMode==="EAGER"}/**
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
 */class _P{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const yP={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},vP=ae.INFO,wP={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},EP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fh{constructor(e){this.name=e,this._logLevel=vP,this._logHandler=EP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const TP=(t,e)=>e.some(n=>t instanceof n);let Lv,Mv;function IP(){return Lv||(Lv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SP(){return Mv||(Mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uI=new WeakMap,cp=new WeakMap,cI=new WeakMap,qd=new WeakMap,Wm=new WeakMap;function CP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uI.set(n,t)}).catch(()=>{}),Wm.set(e,t),e}function AP(t){if(cp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cp.set(t,e)}let hp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RP(t){hp=t(hp)}function xP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hd(this),e,...n);return cI.set(r,e.sort?e.sort():[e]),Qr(r)}:SP().includes(t)?function(...e){return t.apply(Hd(this),e),Qr(uI.get(this))}:function(...e){return Qr(t.apply(Hd(this),e))}}function kP(t){return typeof t=="function"?xP(t):(t instanceof IDBTransaction&&AP(t),TP(t,IP())?new Proxy(t,hp):t)}function Qr(t){if(t instanceof IDBRequest)return CP(t);if(qd.has(t))return qd.get(t);const e=kP(t);return e!==t&&(qd.set(t,e),Wm.set(e,t)),e}const Hd=t=>Wm.get(t);function PP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Qr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Qr(o.result),u.oldVersion,u.newVersion,Qr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const NP=["get","getKey","getAll","getAllKeys","count"],bP=["put","add","delete","clear"],Gd=new Map;function Vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gd.get(e))return Gd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NP.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Gd.set(e,s),s}RP(t=>({...t,get:(e,n,r)=>Vv(e,n)||t.get(e,n,r),has:(e,n)=>!!Vv(e,n)||t.has(e,n)}));/**
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
 */class DP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dp="@firebase/app",Fv="0.10.13";/**
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
 */const fr=new fh("@firebase/app"),LP="@firebase/app-compat",MP="@firebase/analytics-compat",VP="@firebase/analytics",FP="@firebase/app-check-compat",jP="@firebase/app-check",UP="@firebase/auth",BP="@firebase/auth-compat",zP="@firebase/database",$P="@firebase/data-connect",WP="@firebase/database-compat",qP="@firebase/functions",HP="@firebase/functions-compat",GP="@firebase/installations",KP="@firebase/installations-compat",QP="@firebase/messaging",YP="@firebase/messaging-compat",XP="@firebase/performance",JP="@firebase/performance-compat",ZP="@firebase/remote-config",e1="@firebase/remote-config-compat",t1="@firebase/storage",n1="@firebase/storage-compat",r1="@firebase/firestore",i1="@firebase/vertexai-preview",s1="@firebase/firestore-compat",o1="firebase",a1="10.14.1";/**
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
 */const fp="[DEFAULT]",l1={[dp]:"fire-core",[LP]:"fire-core-compat",[VP]:"fire-analytics",[MP]:"fire-analytics-compat",[jP]:"fire-app-check",[FP]:"fire-app-check-compat",[UP]:"fire-auth",[BP]:"fire-auth-compat",[zP]:"fire-rtdb",[$P]:"fire-data-connect",[WP]:"fire-rtdb-compat",[qP]:"fire-fn",[HP]:"fire-fn-compat",[GP]:"fire-iid",[KP]:"fire-iid-compat",[QP]:"fire-fcm",[YP]:"fire-fcm-compat",[XP]:"fire-perf",[JP]:"fire-perf-compat",[ZP]:"fire-rc",[e1]:"fire-rc-compat",[t1]:"fire-gcs",[n1]:"fire-gcs-compat",[r1]:"fire-fst",[s1]:"fire-fst-compat",[i1]:"fire-vertex","fire-js":"fire-js",[o1]:"fire-js-all"};/**
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
 */const Ga=new Map,u1=new Map,pp=new Map;function jv(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ui(t){const e=t.name;if(pp.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;pp.set(e,t);for(const n of Ga.values())jv(n,t);for(const n of u1.values())jv(n,t);return!0}function ph(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tr(t){return t.settings!==void 0}/**
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
 */const c1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yr=new yl("app","Firebase",c1);/**
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
 */class h1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const es=a1;function hI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yr.create("bad-app-name",{appName:String(i)});if(n||(n=iI()),!n)throw Yr.create("no-options");const s=Ga.get(i);if(s){if(Ha(n,s.options)&&Ha(r,s.config))return s;throw Yr.create("duplicate-app",{appName:i})}const o=new _P(i);for(const u of pp.values())o.addComponent(u);const a=new h1(n,r,o);return Ga.set(i,a),a}function qm(t=fp){const e=Ga.get(t);if(!e&&t===fp&&iI())return hI();if(!e)throw Yr.create("no-app",{appName:t});return e}function d1(){return Array.from(Ga.values())}function Vn(t,e,n){var r;let i=(r=l1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(a.join(" "));return}Ui(new ni(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const f1="firebase-heartbeat-database",p1=1,Ka="firebase-heartbeat-store";let Kd=null;function dI(){return Kd||(Kd=PP(f1,p1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ka)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),Kd}async function m1(t){try{const n=(await dI()).transaction(Ka),r=await n.objectStore(Ka).get(fI(t));return await n.done,r}catch(e){if(e instanceof wr)fr.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function Uv(t,e){try{const r=(await dI()).transaction(Ka,"readwrite");await r.objectStore(Ka).put(e,fI(t)),await r.done}catch(n){if(n instanceof wr)fr.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function fI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const g1=1024,_1=30*24*60*60*1e3;class y1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new w1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){fr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bv(),{heartbeatsToSend:r,unsentEntries:i}=v1(this._heartbeatsCache.heartbeats),s=vc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return fr.warn(n),""}}}function Bv(){return new Date().toISOString().substring(0,10)}function v1(t,e=g1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class w1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nP()?rP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await m1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zv(t){return vc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function E1(t){Ui(new ni("platform-logger",e=>new DP(e),"PRIVATE")),Ui(new ni("heartbeat",e=>new y1(e),"PRIVATE")),Vn(dp,Fv,t),Vn(dp,Fv,"esm2017"),Vn("fire-js","")}E1("");function Hm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function pI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T1=pI,mI=new yl("auth","Firebase",pI());/**
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
 */const Tc=new fh("@firebase/auth");function I1(t,...e){Tc.logLevel<=ae.WARN&&Tc.warn(`Auth (${es}): ${t}`,...e)}function ju(t,...e){Tc.logLevel<=ae.ERROR&&Tc.error(`Auth (${es}): ${t}`,...e)}/**
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
 */function zn(t,...e){throw Km(t,...e)}function Sn(t,...e){return Km(t,...e)}function Gm(t,e,n){const r=Object.assign(Object.assign({},T1()),{[e]:n});return new yl("auth","Firebase",r).create(e,{appName:t.name})}function Di(t){return Gm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function S1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zn(t,"argument-error"),Gm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Km(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mI.create(t,...e)}function ee(t,e,...n){if(!t)throw Km(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ju(e),new Error(e)}function pr(t,e){t||nr(e)}/**
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
 */function mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function C1(){return $v()==="http:"||$v()==="https:"}function $v(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function A1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C1()||Jk()||"connection"in navigator)?navigator.onLine:!0}function R1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class vl{constructor(e,n){this.shortDelay=e,this.longDelay=n,pr(n>e,"Short delay should be less than long delay!"),this.isMobile=$m()||aI()}get(){return A1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qm(t,e){pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const x1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const k1=new vl(3e4,6e4);function Ym(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vo(t,e,n,r,i={}){return _I(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=yo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Xk()||(c.referrerPolicy="no-referrer"),gI.fetch()(yI(t,t.config.apiHost,n,a),c)})}async function _I(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},x1),e);try{const i=new N1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw vu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw vu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gm(t,h,c);zn(t,h)}}catch(i){if(i instanceof wr)throw i;zn(t,"network-request-failed",{message:String(i)})}}async function P1(t,e,n,r,i={}){const s=await vo(t,e,n,r,i);return"mfaPendingCredential"in s&&zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Qm(t.config,i):`${t.config.apiScheme}://${i}`}class N1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),k1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function b1(t,e){return vo(t,"POST","/v1/accounts:delete",e)}async function vI(t,e){return vo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D1(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=Xm(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ya(Qd(i.auth_time)),issuedAtTime:ya(Qd(i.iat)),expirationTime:ya(Qd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qd(t){return Number(t)*1e3}function Xm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const i=wc(n);return i?JSON.parse(i):(ju("Failed to decode base64 JWT payload"),null)}catch(i){return ju("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wv(t){const e=Xm(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wr&&O1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function O1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class L1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ya(this.lastLoginAt),this.creationTime=ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Qa(t,vI(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wI(s.providerUserInfo):[],a=V1(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function M1(t){const e=Te(t);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wI(t){return t.map(e=>{var{providerId:n}=e,r=Hm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function F1(t,e){const n=await _I(t,{},async()=>{const r=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function j1(t,e){return vo(t,"POST","/v2/accounts:revokeToken",Ym(t,e))}/**
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
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Wv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await F1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vs;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function xr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return D1(this,e)}reload(){return M1(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tr(this.auth.app))return Promise.reject(Di(this.auth));const e=await this.getIdToken();return await Qa(this,b1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:P,isAnonymous:L,providerData:F,stsTokenManager:T}=n;ee(x&&T,e,"internal-error");const v=Vs.fromJSON(this.name,T);ee(typeof x=="string",e,"internal-error"),xr(f,e.name),xr(p,e.name),ee(typeof P=="boolean",e,"internal-error"),ee(typeof L=="boolean",e,"internal-error"),xr(_,e.name),xr(w,e.name),xr(S,e.name),xr(N,e.name),xr(C,e.name),xr(E,e.name);const I=new rr({uid:x,auth:e,email:p,emailVerified:P,displayName:f,isAnonymous:L,photoURL:w,phoneNumber:_,tenantId:S,stsTokenManager:v,createdAt:C,lastLoginAt:E});return F&&Array.isArray(F)&&(I.providerData=F.map(A=>Object.assign({},A))),N&&(I._redirectEventId=N),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vs;i.updateFromServerResponse(n);const s=new rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ic(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Vs;a.updateFromIdToken(r);const u=new rr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const qv=new Map;function ir(t){pr(t instanceof Function,"Expected a class definition");let e=qv.get(t);return e?(pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qv.set(t,e),e)}/**
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
 */class EI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}EI.type="NONE";const Hv=EI;/**
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
 */function Uu(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Uu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Uu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(ir(Hv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ir(Hv);const o=Uu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=rr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Fs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Fs(s,e,r))}}/**
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
 */function Gv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RI(e))return"Blackberry";if(xI(e))return"Webos";if(II(e))return"Safari";if((e.includes("chrome/")||SI(e))&&!e.includes("edge/"))return"Chrome";if(AI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function TI(t=xt()){return/firefox\//i.test(t)}function II(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SI(t=xt()){return/crios\//i.test(t)}function CI(t=xt()){return/iemobile/i.test(t)}function AI(t=xt()){return/android/i.test(t)}function RI(t=xt()){return/blackberry/i.test(t)}function xI(t=xt()){return/webos/i.test(t)}function Jm(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function U1(t=xt()){var e;return Jm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function B1(){return Zk()&&document.documentMode===10}function kI(t=xt()){return Jm(t)||AI(t)||xI(t)||RI(t)||/windows phone/i.test(t)||CI(t)}/**
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
 */function PI(t,e=[]){let n;switch(t){case"Browser":n=Gv(xt());break;case"Worker":n=`${Gv(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
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
 */class z1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $1(t,e={}){return vo(t,"GET","/v2/passwordPolicy",Ym(t,e))}/**
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
 */const W1=6;class q1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:W1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class H1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kv(this),this.idTokenSubscription=new Kv(this),this.beforeStateQueue=new z1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ir(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vI(this,{idToken:e}),r=await rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tr(this.app))return Promise.reject(Di(this));const n=e?Te(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tr(this.app)?Promise.reject(Di(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tr(this.app)?Promise.reject(Di(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $1(this),n=new q1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await j1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ir(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&I1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mh(t){return Te(t)}class Kv{constructor(e){this.auth=e,this.observer=null,this.addObserver=cP(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function G1(t){Zm=t}function K1(t){return Zm.loadJS(t)}function Q1(){return Zm.gapiScript}function Y1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function X1(t,e){const n=ph(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ha(s,e??{}))return i;zn(i,"already-initialized")}return n.initialize({options:e})}function J1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Z1(t,e,n){const r=mh(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=NI(e),{host:o,port:a}=eN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),tN()}function NI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eN(t){const e=NI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qv(o)}}}function Qv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}/**
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
 */async function js(t,e){return P1(t,"POST","/v1/accounts:signInWithIdp",Ym(t,e))}/**
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
 */const nN="http://localhost";class Bi extends bI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:nN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
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
 */class eg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wl extends eg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dr extends wl{constructor(){super("facebook.com")}static credential(e){return Bi._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bi._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Or extends wl{constructor(){super("github.com")}static credential(e){return Bi._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
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
 */class Lr extends wl{constructor(){super("twitter.com")}static credential(e,n){return Bi._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
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
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rr._fromIdTokenResponse(e,r,i),o=Yv(r);return new Js({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yv(r);return new Js({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sc extends wr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sc(e,n,r,i)}}function DI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(t,s,e,r):s})}async function rN(t,e,n=!1){const r=await Qa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Js._forOperation(t,"link",r)}/**
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
 */async function iN(t,e,n=!1){const{auth:r}=t;if(tr(r.app))return Promise.reject(Di(r));const i="reauthenticate";try{const s=await Qa(t,DI(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=Xm(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Js._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),s}}/**
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
 */async function sN(t,e,n=!1){if(tr(t.app))return Promise.reject(Di(t));const r="signIn",i=await DI(t,r,e),s=await Js._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function oN(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function aN(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function lN(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function uN(t){return Te(t).signOut()}const Cc="__sak";/**
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
 */class OI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cN=1e3,hN=10;class LI extends OI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);B1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LI.type="LOCAL";const dN=LI;/**
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
 */class MI extends OI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MI.type="SESSION";const VI=MI;/**
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
 */function fN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await fN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gh.receivers=[];/**
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
 */function tg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=tg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Fn(){return window}function mN(t){Fn().location.href=t}/**
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
 */function FI(){return typeof Fn().WorkerGlobalScope<"u"&&typeof Fn().importScripts=="function"}async function gN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _N(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yN(){return FI()?self:null}/**
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
 */const jI="firebaseLocalStorageDb",vN=1,Ac="firebaseLocalStorage",UI="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _h(t,e){return t.transaction([Ac],e?"readwrite":"readonly").objectStore(Ac)}function wN(){const t=indexedDB.deleteDatabase(jI);return new El(t).toPromise()}function _p(){const t=indexedDB.open(jI,vN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ac,{keyPath:UI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ac)?e(r):(r.close(),await wN(),e(await _p()))})})}async function Xv(t,e,n){const r=_h(t,!0).put({[UI]:e,value:n});return new El(r).toPromise()}async function EN(t,e){const n=_h(t,!1).get(e),r=await new El(n).toPromise();return r===void 0?null:r.value}function Jv(t,e){const n=_h(t,!0).delete(e);return new El(n).toPromise()}const TN=800,IN=3;class BI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _p(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gh._getInstance(yN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gN(),!this.activeServiceWorker)return;this.sender=new pN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_N()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _p();return await Xv(e,Cc,"1"),await Jv(e,Cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>EN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_h(i,!1).getAll();return new El(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BI.type="LOCAL";const SN=BI;new vl(3e4,6e4);/**
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
 */function zI(t,e){return e?ir(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ng extends bI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CN(t){return sN(t.auth,new ng(t),t.bypassAuthState)}function AN(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),iN(n,new ng(t),t.bypassAuthState)}async function RN(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),rN(n,new ng(t),t.bypassAuthState)}/**
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
 */class $I{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CN;case"linkViaPopup":case"linkViaRedirect":return RN;case"reauthViaPopup":case"reauthViaRedirect":return AN;default:zn(this.auth,"internal-error")}}resolve(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xN=new vl(2e3,1e4);async function kN(t,e,n){if(tr(t.app))return Promise.reject(Sn(t,"operation-not-supported-in-this-environment"));const r=mh(t);S1(t,e,eg);const i=zI(r,n);return new xi(r,"signInViaPopup",e,i).executeNotNull()}class xi extends $I{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xi.currentPopupAction&&xi.currentPopupAction.cancel(),xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){pr(this.filter.length===1,"Popup operations only handle one event");const e=tg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xN.get())};e()}}xi.currentPopupAction=null;/**
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
 */const PN="pendingRedirect",Bu=new Map;class NN extends $I{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bu.get(this.auth._key());if(!e){try{const r=await bN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bu.set(this.auth._key(),e)}return this.bypassAuthState||Bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bN(t,e){const n=LN(e),r=ON(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DN(t,e){Bu.set(t._key(),e)}function ON(t){return ir(t._redirectPersistence)}function LN(t){return Uu(PN,t.config.apiKey,t.name)}async function MN(t,e,n=!1){if(tr(t.app))return Promise.reject(Di(t));const r=mh(t),i=zI(r,e),o=await new NN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const VN=10*60*1e3;class FN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zv(e))}saveEventToCache(e){this.cachedEventUids.add(Zv(e)),this.lastProcessedEventTime=Date.now()}}function Zv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WI(t);default:return!1}}/**
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
 */async function UN(t,e={}){return vo(t,"GET","/v1/projects",e)}/**
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
 */const BN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zN=/^https?/;async function $N(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UN(t);for(const n of e)try{if(WN(n))return}catch{}zn(t,"unauthorized-domain")}function WN(t){const e=mp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zN.test(n))return!1;if(BN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qN=new vl(3e4,6e4);function ew(){const t=Fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HN(t){return new Promise((e,n)=>{var r,i,s;function o(){ew(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ew(),n(Sn(t,"network-request-failed"))},timeout:qN.get()})}if(!((i=(r=Fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Fn().gapi)===null||s===void 0)&&s.load)o();else{const a=Y1("iframefcb");return Fn()[a]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},K1(`${Q1()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw zu=null,e})}let zu=null;function GN(t){return zu=zu||HN(t),zu}/**
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
 */const KN=new vl(5e3,15e3),QN="__/auth/iframe",YN="emulator/auth/iframe",XN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZN(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qm(e,YN):`https://${t.config.authDomain}/${QN}`,r={apiKey:e.apiKey,appName:t.name,v:es},i=JN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yo(r).slice(1)}`}async function eb(t){const e=await GN(t),n=Fn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:ZN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=Fn().setTimeout(()=>{s(o)},KN.get());function u(){Fn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const tb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nb=500,rb=600,ib="_blank",sb="http://localhost";class tw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ob(t,e,n,r=nb,i=rb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},tb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=xt().toLowerCase();n&&(a=SI(c)?ib:n),TI(c)&&(e=e||sb,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[_,w])=>`${p}${_}=${w},`,"");if(U1(c)&&a!=="_self")return ab(e||"",a),new tw(null);const f=window.open(e||"",a,h);ee(f,t,"popup-blocked");try{f.focus()}catch{}return new tw(f)}function ab(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lb="__/auth/handler",ub="emulator/auth/handler",cb=encodeURIComponent("fac");async function nw(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:i};if(e instanceof eg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",up(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof wl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${cb}=${encodeURIComponent(u)}`:"";return`${hb(t)}?${yo(a).slice(1)}${c}`}function hb({config:t}){return t.emulator?Qm(t,ub):`https://${t.authDomain}/${lb}`}/**
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
 */const Yd="webStorageSupport";class db{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VI,this._completeRedirectFn=MN,this._overrideRedirectResult=DN}async _openPopup(e,n,r,i){var s;pr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await nw(e,n,r,mp(),i);return ob(e,o,tg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await nw(e,n,r,mp(),i);return mN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eb(e),r=new FN(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yd,{type:Yd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yd];o!==void 0&&n(!!o),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$N(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kI()||II()||Jm()}}const fb=db;var rw="@firebase/auth",iw="1.7.9";/**
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
 */class pb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gb(t){Ui(new ni("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PI(t)},c=new H1(r,i,s,u);return J1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ui(new ni("auth-internal",e=>{const n=mh(e.getProvider("auth").getImmediate());return(r=>new pb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(rw,iw,mb(t)),Vn(rw,iw,"esm2017")}/**
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
 */const _b=5*60,yb=sI("authIdTokenMaxAge")||_b;let sw=null;const vb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yb)return;const i=n==null?void 0:n.token;sw!==i&&(sw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wb(t=qm()){const e=ph(t,"auth");if(e.isInitialized())return e.getImmediate();const n=X1(t,{popupRedirectResolver:fb,persistence:[SN,dN,VI]}),r=sI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=vb(s.toString());aN(n,o,()=>o(n.currentUser)),oN(n,a=>o(a))}}const i=nI("auth");return i&&Z1(n,`http://${i}`),n}function Eb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}G1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Eb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gb("Browser");var Tb="firebase",Ib="10.14.1";/**
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
 */Vn(Tb,Ib,"app");var ow=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oi,qI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function I(){}I.prototype=v.prototype,T.D=v.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(A,k,b){for(var R=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)R[Vt-2]=arguments[Vt];return v.prototype[k].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)A[k]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(k=0;16>k;++k)A[k]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=T.g[0],I=T.g[1],k=T.g[2];var b=T.g[3],R=v+(b^I&(k^b))+A[0]+3614090360&4294967295;v=I+(R<<7&4294967295|R>>>25),R=b+(k^v&(I^k))+A[1]+3905402710&4294967295,b=v+(R<<12&4294967295|R>>>20),R=k+(I^b&(v^I))+A[2]+606105819&4294967295,k=b+(R<<17&4294967295|R>>>15),R=I+(v^k&(b^v))+A[3]+3250441966&4294967295,I=k+(R<<22&4294967295|R>>>10),R=v+(b^I&(k^b))+A[4]+4118548399&4294967295,v=I+(R<<7&4294967295|R>>>25),R=b+(k^v&(I^k))+A[5]+1200080426&4294967295,b=v+(R<<12&4294967295|R>>>20),R=k+(I^b&(v^I))+A[6]+2821735955&4294967295,k=b+(R<<17&4294967295|R>>>15),R=I+(v^k&(b^v))+A[7]+4249261313&4294967295,I=k+(R<<22&4294967295|R>>>10),R=v+(b^I&(k^b))+A[8]+1770035416&4294967295,v=I+(R<<7&4294967295|R>>>25),R=b+(k^v&(I^k))+A[9]+2336552879&4294967295,b=v+(R<<12&4294967295|R>>>20),R=k+(I^b&(v^I))+A[10]+4294925233&4294967295,k=b+(R<<17&4294967295|R>>>15),R=I+(v^k&(b^v))+A[11]+2304563134&4294967295,I=k+(R<<22&4294967295|R>>>10),R=v+(b^I&(k^b))+A[12]+1804603682&4294967295,v=I+(R<<7&4294967295|R>>>25),R=b+(k^v&(I^k))+A[13]+4254626195&4294967295,b=v+(R<<12&4294967295|R>>>20),R=k+(I^b&(v^I))+A[14]+2792965006&4294967295,k=b+(R<<17&4294967295|R>>>15),R=I+(v^k&(b^v))+A[15]+1236535329&4294967295,I=k+(R<<22&4294967295|R>>>10),R=v+(k^b&(I^k))+A[1]+4129170786&4294967295,v=I+(R<<5&4294967295|R>>>27),R=b+(I^k&(v^I))+A[6]+3225465664&4294967295,b=v+(R<<9&4294967295|R>>>23),R=k+(v^I&(b^v))+A[11]+643717713&4294967295,k=b+(R<<14&4294967295|R>>>18),R=I+(b^v&(k^b))+A[0]+3921069994&4294967295,I=k+(R<<20&4294967295|R>>>12),R=v+(k^b&(I^k))+A[5]+3593408605&4294967295,v=I+(R<<5&4294967295|R>>>27),R=b+(I^k&(v^I))+A[10]+38016083&4294967295,b=v+(R<<9&4294967295|R>>>23),R=k+(v^I&(b^v))+A[15]+3634488961&4294967295,k=b+(R<<14&4294967295|R>>>18),R=I+(b^v&(k^b))+A[4]+3889429448&4294967295,I=k+(R<<20&4294967295|R>>>12),R=v+(k^b&(I^k))+A[9]+568446438&4294967295,v=I+(R<<5&4294967295|R>>>27),R=b+(I^k&(v^I))+A[14]+3275163606&4294967295,b=v+(R<<9&4294967295|R>>>23),R=k+(v^I&(b^v))+A[3]+4107603335&4294967295,k=b+(R<<14&4294967295|R>>>18),R=I+(b^v&(k^b))+A[8]+1163531501&4294967295,I=k+(R<<20&4294967295|R>>>12),R=v+(k^b&(I^k))+A[13]+2850285829&4294967295,v=I+(R<<5&4294967295|R>>>27),R=b+(I^k&(v^I))+A[2]+4243563512&4294967295,b=v+(R<<9&4294967295|R>>>23),R=k+(v^I&(b^v))+A[7]+1735328473&4294967295,k=b+(R<<14&4294967295|R>>>18),R=I+(b^v&(k^b))+A[12]+2368359562&4294967295,I=k+(R<<20&4294967295|R>>>12),R=v+(I^k^b)+A[5]+4294588738&4294967295,v=I+(R<<4&4294967295|R>>>28),R=b+(v^I^k)+A[8]+2272392833&4294967295,b=v+(R<<11&4294967295|R>>>21),R=k+(b^v^I)+A[11]+1839030562&4294967295,k=b+(R<<16&4294967295|R>>>16),R=I+(k^b^v)+A[14]+4259657740&4294967295,I=k+(R<<23&4294967295|R>>>9),R=v+(I^k^b)+A[1]+2763975236&4294967295,v=I+(R<<4&4294967295|R>>>28),R=b+(v^I^k)+A[4]+1272893353&4294967295,b=v+(R<<11&4294967295|R>>>21),R=k+(b^v^I)+A[7]+4139469664&4294967295,k=b+(R<<16&4294967295|R>>>16),R=I+(k^b^v)+A[10]+3200236656&4294967295,I=k+(R<<23&4294967295|R>>>9),R=v+(I^k^b)+A[13]+681279174&4294967295,v=I+(R<<4&4294967295|R>>>28),R=b+(v^I^k)+A[0]+3936430074&4294967295,b=v+(R<<11&4294967295|R>>>21),R=k+(b^v^I)+A[3]+3572445317&4294967295,k=b+(R<<16&4294967295|R>>>16),R=I+(k^b^v)+A[6]+76029189&4294967295,I=k+(R<<23&4294967295|R>>>9),R=v+(I^k^b)+A[9]+3654602809&4294967295,v=I+(R<<4&4294967295|R>>>28),R=b+(v^I^k)+A[12]+3873151461&4294967295,b=v+(R<<11&4294967295|R>>>21),R=k+(b^v^I)+A[15]+530742520&4294967295,k=b+(R<<16&4294967295|R>>>16),R=I+(k^b^v)+A[2]+3299628645&4294967295,I=k+(R<<23&4294967295|R>>>9),R=v+(k^(I|~b))+A[0]+4096336452&4294967295,v=I+(R<<6&4294967295|R>>>26),R=b+(I^(v|~k))+A[7]+1126891415&4294967295,b=v+(R<<10&4294967295|R>>>22),R=k+(v^(b|~I))+A[14]+2878612391&4294967295,k=b+(R<<15&4294967295|R>>>17),R=I+(b^(k|~v))+A[5]+4237533241&4294967295,I=k+(R<<21&4294967295|R>>>11),R=v+(k^(I|~b))+A[12]+1700485571&4294967295,v=I+(R<<6&4294967295|R>>>26),R=b+(I^(v|~k))+A[3]+2399980690&4294967295,b=v+(R<<10&4294967295|R>>>22),R=k+(v^(b|~I))+A[10]+4293915773&4294967295,k=b+(R<<15&4294967295|R>>>17),R=I+(b^(k|~v))+A[1]+2240044497&4294967295,I=k+(R<<21&4294967295|R>>>11),R=v+(k^(I|~b))+A[8]+1873313359&4294967295,v=I+(R<<6&4294967295|R>>>26),R=b+(I^(v|~k))+A[15]+4264355552&4294967295,b=v+(R<<10&4294967295|R>>>22),R=k+(v^(b|~I))+A[6]+2734768916&4294967295,k=b+(R<<15&4294967295|R>>>17),R=I+(b^(k|~v))+A[13]+1309151649&4294967295,I=k+(R<<21&4294967295|R>>>11),R=v+(k^(I|~b))+A[4]+4149444226&4294967295,v=I+(R<<6&4294967295|R>>>26),R=b+(I^(v|~k))+A[11]+3174756917&4294967295,b=v+(R<<10&4294967295|R>>>22),R=k+(v^(b|~I))+A[2]+718787259&4294967295,k=b+(R<<15&4294967295|R>>>17),R=I+(b^(k|~v))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+k&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var I=v-this.blockSize,A=this.B,k=this.h,b=0;b<v;){if(k==0)for(;b<=I;)i(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<v;)if(A[k++]=T.charCodeAt(b++),k==this.blockSize){i(this,A),k=0;break}}else for(;b<v;)if(A[k++]=T[b++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var I=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=I&255,I/=256;for(this.u(T),T=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)T[I++]=this.g[v]>>>A&255;return T};function s(T,v){var I=a;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=v(T)}function o(T,v){this.h=v;for(var I=[],A=!0,k=T.length-1;0<=k;k--){var b=T[k]|0;A&&b==v||(I[k]=b,A=!1)}this.g=I}var a={};function u(T){return-128<=T&&128>T?s(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return N(c(-T));for(var v=[],I=1,A=0;T>=I;A++)v[A]=T/I|0,I*=4294967296;return new o(v,0)}function h(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return N(h(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(v,8)),A=f,k=0;k<T.length;k+=8){var b=Math.min(8,T.length-k),R=parseInt(T.substring(k,k+b),v);8>b?(b=c(Math.pow(v,b)),A=A.j(b).add(c(R))):(A=A.j(I),A=A.add(c(R)))}return A}var f=u(0),p=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(S(this))return-N(this).m();for(var T=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);T+=(0<=A?A:4294967296+A)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(w(this))return"0";if(S(this))return"-"+N(this).toString(T);for(var v=c(Math.pow(T,6)),I=this,A="";;){var k=P(I,v).g;I=C(I,k.j(v));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=k,w(I))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function w(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function S(T){return T.h==-1}t.l=function(T){return T=C(this,T),S(T)?-1:w(T)?0:1};function N(T){for(var v=T.g.length,I=[],A=0;A<v;A++)I[A]=~T.g[A];return new o(I,~T.h).add(p)}t.abs=function(){return S(this)?N(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],A=0,k=0;k<=v;k++){var b=A+(this.i(k)&65535)+(T.i(k)&65535),R=(b>>>16)+(this.i(k)>>>16)+(T.i(k)>>>16);A=R>>>16,b&=65535,R&=65535,I[k]=R<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function C(T,v){return T.add(N(v))}t.j=function(T){if(w(this)||w(T))return f;if(S(this))return S(T)?N(this).j(N(T)):N(N(this).j(T));if(S(T))return N(this.j(N(T)));if(0>this.l(_)&&0>T.l(_))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<T.g.length;k++){var b=this.i(A)>>>16,R=this.i(A)&65535,Vt=T.i(k)>>>16,pn=T.i(k)&65535;I[2*A+2*k]+=R*pn,E(I,2*A+2*k),I[2*A+2*k+1]+=b*pn,E(I,2*A+2*k+1),I[2*A+2*k+1]+=R*Vt,E(I,2*A+2*k+1),I[2*A+2*k+2]+=b*Vt,E(I,2*A+2*k+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function E(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function x(T,v){this.g=T,this.h=v}function P(T,v){if(w(v))throw Error("division by zero");if(w(T))return new x(f,f);if(S(T))return v=P(N(T),v),new x(N(v.g),N(v.h));if(S(v))return v=P(T,N(v)),new x(N(v.g),v.h);if(30<T.g.length){if(S(T)||S(v))throw Error("slowDivide_ only works with positive integers.");for(var I=p,A=v;0>=A.l(T);)I=L(I),A=L(A);var k=F(I,1),b=F(A,1);for(A=F(A,2),I=F(I,2);!w(A);){var R=b.add(A);0>=R.l(T)&&(k=k.add(I),b=R),A=F(A,1),I=F(I,1)}return v=C(T,k.j(v)),new x(k,v)}for(k=f;0<=T.l(v);){for(I=Math.max(1,Math.floor(T.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=c(I),R=b.j(v);S(R)||0<R.l(T);)I-=A,b=c(I),R=b.j(v);w(b)&&(b=p),k=k.add(b),T=C(T,R)}return new x(k,T)}t.A=function(T){return P(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&T.i(A);return new o(I,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|T.i(A);return new o(I,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^T.i(A);return new o(I,this.h^T.h)};function L(T){for(var v=T.g.length+1,I=[],A=0;A<v;A++)I[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(I,T.h)}function F(T,v){var I=v>>5;v%=32;for(var A=T.g.length-I,k=[],b=0;b<A;b++)k[b]=0<v?T.i(b+I)>>>v|T.i(b+I+1)<<32-v:T.i(b+I);return new o(k,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Oi=o}).apply(typeof ow<"u"?ow:typeof self<"u"?self:typeof window<"u"?window:{});var wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HI,oa,GI,$u,yp,KI,QI,YI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof wu=="object"&&wu];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var D=l[y];if(!(D in m))break e;m=m[D]}l=l[l.length-1],y=m[l],d=d(y),d!=y&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,y=!1,D={next:function(){if(!y&&m<l.length){var O=m++;return{value:d(O,l[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),l.apply(d,D)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function _(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function w(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,D,O){for(var q=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)q[Ee-2]=arguments[Ee];return d.prototype[D].apply(y,q)}}function S(l){const d=l.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=l[y];return m}return[]}function N(l,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const D=l.length||0,O=y.length||0;l.length=D+O;for(let q=0;q<O;q++)l[D+q]=y[q]}else l.push(y)}}class C{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function P(l){return P[" "](l),l}P[" "]=function(){};var L=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function F(l,d,m){for(const y in l)d.call(m,l[y],y,l)}function T(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function v(l){const d={};for(const m in l)d[m]=l[m];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let m,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(m in y)l[m]=y[m];for(let O=0;O<I.length;O++)m=I[O],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function k(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function b(l){a.setTimeout(()=>{throw l},0)}function R(){var l=Z;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Vt{constructor(){this.h=this.g=null}add(d,m){const y=pn.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var pn=new C(()=>new pi,l=>l.reset());class pi{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let tn,K=!1,Z=new Vt,V=()=>{const l=a.Promise.resolve(void 0);tn=()=>{l.then(U)}};var U=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){b(m)}var d=pn;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}K=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function we(l,d){if(W.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(L){e:{try{P(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Oe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&we.aa.h.call(this)}}w(we,W);var Oe={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),nn=0;function mi(l,d,m,y,D){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=D,this.key=++nn,this.da=this.fa=!1}function Pn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Tr(l){this.src=l,this.g={},this.h=0}Tr.prototype.add=function(l,d,m,y,D){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var q=Ht(l,d,y,D);return-1<q?(d=l[q],m||(d.fa=!1)):(d=new mi(d,this.src,O,!!y,D),d.fa=m,l.push(d)),d};function rn(l,d){var m=d.type;if(m in l.g){var y=l.g[m],D=Array.prototype.indexOf.call(y,d,void 0),O;(O=0<=D)&&Array.prototype.splice.call(y,D,1),O&&(Pn(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Ht(l,d,m,y){for(var D=0;D<l.length;++D){var O=l[D];if(!O.da&&O.listener==d&&O.capture==!!m&&O.ha==y)return D}return-1}var sn="closure_lm_"+(1e6*Math.random()|0),me={};function xe(l,d,m,y,D){if(Array.isArray(d)){for(var O=0;O<d.length;O++)xe(l,d[O],m,y,D);return null}return m=x_(m),l&&l[Fe]?l.K(d,m,c(y)?!!y.capture:!1,D):Ir(l,d,m,!1,y,D)}function Ir(l,d,m,y,D,O){if(!d)throw Error("Invalid event type");var q=c(D)?!!D.capture:!!D,Ee=ed(l);if(Ee||(l[sn]=Ee=new Tr(l)),m=Ee.add(d,m,y,q,O),m.proxy)return m;if(y=gi(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)Ie||(D=q),D===void 0&&(D=!1),l.addEventListener(d.toString(),y,D);else if(l.attachEvent)l.attachEvent(R_(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function gi(){function l(m){return d.call(l.src,l.listener,m)}const d=BA;return l}function Nn(l,d,m,y,D){if(Array.isArray(d))for(var O=0;O<d.length;O++)Nn(l,d[O],m,y,D);else y=c(y)?!!y.capture:!!y,m=x_(m),l&&l[Fe]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],m=Ht(O,m,y,D),-1<m&&(Pn(O[m]),Array.prototype.splice.call(O,m,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=ed(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Ht(d,m,y,D)),(m=-1<l?d[l]:null)&&Zh(m))}function Zh(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Fe])rn(d.i,l);else{var m=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(m,y,l.capture):d.detachEvent?d.detachEvent(R_(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=ed(d))?(rn(m,l),m.h==0&&(m.src=null,d[sn]=null)):Pn(l)}}}function R_(l){return l in me?me[l]:me[l]="on"+l}function BA(l,d){if(l.da)l=!0;else{d=new we(d,this);var m=l.listener,y=l.ha||l.src;l.fa&&Zh(l),l=m.call(y,d)}return l}function ed(l){return l=l[sn],l instanceof Tr?l:null}var td="__closure_events_fn_"+(1e9*Math.random()>>>0);function x_(l){return typeof l=="function"?l:(l[td]||(l[td]=function(d){return l.handleEvent(d)}),l[td])}function _t(){B.call(this),this.i=new Tr(this),this.M=this,this.F=null}w(_t,B),_t.prototype[Fe]=!0,_t.prototype.removeEventListener=function(l,d,m,y){Nn(this,l,d,m,y)};function kt(l,d){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new W(d,l);else if(d instanceof W)d.target=d.target||l;else{var D=d;d=new W(y,l),A(d,D)}if(D=!0,m)for(var O=m.length-1;0<=O;O--){var q=d.g=m[O];D=Ul(q,y,!0,d)&&D}if(q=d.g=l,D=Ul(q,y,!0,d)&&D,D=Ul(q,y,!1,d)&&D,m)for(O=0;O<m.length;O++)q=d.g=m[O],D=Ul(q,y,!1,d)&&D}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],y=0;y<m.length;y++)Pn(m[y]);delete l.g[d],l.h--}}this.F=null},_t.prototype.K=function(l,d,m,y){return this.i.add(String(l),d,!1,m,y)},_t.prototype.L=function(l,d,m,y){return this.i.add(String(l),d,!0,m,y)};function Ul(l,d,m,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,O=0;O<d.length;++O){var q=d[O];if(q&&!q.da&&q.capture==m){var Ee=q.listener,ut=q.ha||q.src;q.fa&&rn(l.i,q),D=Ee.call(ut,y)!==!1&&D}}return D&&!y.defaultPrevented}function k_(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function P_(l){l.g=k_(()=>{l.g=null,l.i&&(l.i=!1,P_(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class zA extends B{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:P_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ko(l){B.call(this),this.h=l,this.g={}}w(ko,B);var N_=[];function b_(l){F(l.g,function(d,m){this.g.hasOwnProperty(m)&&Zh(d)},l),l.g={}}ko.prototype.N=function(){ko.aa.N.call(this),b_(this)},ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nd=a.JSON.stringify,$A=a.JSON.parse,WA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function rd(){}rd.prototype.h=null;function D_(l){return l.h||(l.h=l.i())}function O_(){}var Po={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function id(){W.call(this,"d")}w(id,W);function sd(){W.call(this,"c")}w(sd,W);var _i={},L_=null;function Bl(){return L_=L_||new _t}_i.La="serverreachability";function M_(l){W.call(this,_i.La,l)}w(M_,W);function No(l){const d=Bl();kt(d,new M_(d))}_i.STAT_EVENT="statevent";function V_(l,d){W.call(this,_i.STAT_EVENT,l),this.stat=d}w(V_,W);function Pt(l){const d=Bl();kt(d,new V_(d,l))}_i.Ma="timingevent";function F_(l,d){W.call(this,_i.Ma,l),this.size=d}w(F_,W);function bo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Do(){this.g=!0}Do.prototype.xa=function(){this.g=!1};function qA(l,d,m,y,D,O){l.info(function(){if(l.g)if(O)for(var q="",Ee=O.split("&"),ut=0;ut<Ee.length;ut++){var de=Ee[ut].split("=");if(1<de.length){var yt=de[0];de=de[1];var vt=yt.split("_");q=2<=vt.length&&vt[1]=="type"?q+(yt+"="+de+"&"):q+(yt+"=redacted&")}}else q=null;else q=O;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+m+`
`+q})}function HA(l,d,m,y,D,O,q){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+m+`
`+O+" "+q})}function ls(l,d,m,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+KA(l,m)+(y?" "+y:"")})}function GA(l,d){l.info(function(){return"TIMEOUT: "+d})}Do.prototype.info=function(){};function KA(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var O=D[0];if(O!="noop"&&O!="stop"&&O!="close")for(var q=1;q<D.length;q++)D[q]=""}}}}return nd(m)}catch{return d}}var zl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},j_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},od;function $l(){}w($l,rd),$l.prototype.g=function(){return new XMLHttpRequest},$l.prototype.i=function(){return{}},od=new $l;function Sr(l,d,m,y){this.j=l,this.i=d,this.l=m,this.R=y||1,this.U=new ko(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new U_}function U_(){this.i=null,this.g="",this.h=!1}var B_={},ad={};function ld(l,d,m){l.L=1,l.v=Gl(Hn(d)),l.m=m,l.P=!0,z_(l,null)}function z_(l,d){l.F=Date.now(),Wl(l),l.A=Hn(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),ny(m.i,"t",y),l.C=0,m=l.j.J,l.h=new U_,l.g=wy(l.j,m?d:null,!l.m),0<l.O&&(l.M=new zA(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,y=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(N_[0]=D.toString()),D=N_);for(var O=0;O<D.length;O++){var q=xe(m,D[O],y||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),No(),qA(l.i,l.u,l.A,l.l,l.R,l.m)}Sr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Gn(l)==3?d.j():this.Y(l)},Sr.prototype.Y=function(l){try{if(l==this.g)e:{const vt=Gn(this.g);var d=this.g.Ba();const hs=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||uy(this.g)))){this.J||vt!=4||d==7||(d==8||0>=hs?No(3):No(2)),ud(this);var m=this.g.Z();this.X=m;t:if($_(this)){var y=uy(this.g);l="";var D=y.length,O=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yi(this),Oo(this);var q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(O&&d==D-1)});y.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,HA(this.i,this.u,this.A,this.l,this.R,vt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,ut=this.g;if((Ee=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Ee)){var de=Ee;break t}}de=null}if(m=de)ls(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cd(this,m);else{this.o=!1,this.s=3,Pt(12),yi(this),Oo(this);break e}}if(this.P){m=!0;let mn;for(;!this.J&&this.C<q.length;)if(mn=QA(this,q),mn==ad){vt==4&&(this.s=4,Pt(14),m=!1),ls(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==B_){this.s=4,Pt(15),ls(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else ls(this.i,this.l,mn,null),cd(this,mn);if($_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||q.length!=0||this.h.h||(this.s=1,Pt(16),m=!1),this.o=this.o&&m,!m)ls(this.i,this.l,q,"[Invalid Chunked Response]"),yi(this),Oo(this);else if(0<q.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),gd(yt),yt.M=!0,Pt(11))}}else ls(this.i,this.l,q,null),cd(this,q);vt==4&&yi(this),this.o&&!this.J&&(vt==4?gy(this.j,this):(this.o=!1,Wl(this)))}else dR(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),yi(this),Oo(this)}}}catch{}finally{}};function $_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function QA(l,d){var m=l.C,y=d.indexOf(`
`,m);return y==-1?ad:(m=Number(d.substring(m,y)),isNaN(m)?B_:(y+=1,y+m>d.length?ad:(d=d.slice(y,y+m),l.C=y+m,d)))}Sr.prototype.cancel=function(){this.J=!0,yi(this)};function Wl(l){l.S=Date.now()+l.I,W_(l,l.I)}function W_(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=bo(p(l.ba,l),d)}function ud(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Sr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(GA(this.i,this.A),this.L!=2&&(No(),Pt(17)),yi(this),this.s=2,Oo(this)):W_(this,this.S-l)};function Oo(l){l.j.G==0||l.J||gy(l.j,l)}function yi(l){ud(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,b_(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function cd(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||hd(m.h,l))){if(!l.K&&hd(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Zl(m),Xl(m);else break e;md(m),Pt(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=bo(p(m.Za,m),6e3));if(1>=G_(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else wi(m,11)}else if((l.K||m.g==l)&&Zl(m),!E(d))for(D=m.Da.g.parse(d),d=0;d<D.length;d++){let de=D[d];if(m.T=de[0],de=de[1],m.G==2)if(de[0]=="c"){m.K=de[1],m.ia=de[2];const yt=de[3];yt!=null&&(m.la=yt,m.j.info("VER="+m.la));const vt=de[4];vt!=null&&(m.Aa=vt,m.j.info("SVER="+m.Aa));const hs=de[5];hs!=null&&typeof hs=="number"&&0<hs&&(y=1.5*hs,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const mn=l.g;if(mn){const tu=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tu){var O=y.h;O.g||tu.indexOf("spdy")==-1&&tu.indexOf("quic")==-1&&tu.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(dd(O,O.h),O.h=null))}if(y.D){const _d=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;_d&&(y.ya=_d,ke(y.I,y.D,_d))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var q=l;if(y.qa=vy(y,y.J?y.ia:null,y.W),q.K){K_(y.h,q);var Ee=q,ut=y.L;ut&&(Ee.I=ut),Ee.B&&(ud(Ee),Wl(Ee)),y.g=q}else py(y);0<m.i.length&&Jl(m)}else de[0]!="stop"&&de[0]!="close"||wi(m,7);else m.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?wi(m,7):pd(m):de[0]!="noop"&&m.l&&m.l.ta(de),m.v=0)}}No(4)}catch{}}var YA=class{constructor(l,d){this.g=l,this.map=d}};function q_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function H_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function G_(l){return l.h?1:l.g?l.g.size:0}function hd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function dd(l,d){l.g?l.g.add(d):l.h=d}function K_(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}q_.prototype.cancel=function(){if(this.i=Q_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Q_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return S(l.i)}function XA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,y=0;y<m;y++)d.push(l[y]);return d}d=[],m=0;for(y in l)d[m++]=l[y];return d}function JA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const y in l)d[m++]=y;return d}}}function Y_(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=JA(l),y=XA(l),D=y.length,O=0;O<D;O++)d.call(void 0,y[O],m&&m[O],l)}var X_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZA(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),D=null;if(0<=y){var O=l[m].substring(0,y);D=l[m].substring(y+1)}else O=l[m];d(O,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function vi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof vi){this.h=l.h,ql(this,l.j),this.o=l.o,this.g=l.g,Hl(this,l.s),this.l=l.l;var d=l.i,m=new Vo;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),J_(this,m),this.m=l.m}else l&&(d=String(l).match(X_))?(this.h=!1,ql(this,d[1]||"",!0),this.o=Lo(d[2]||""),this.g=Lo(d[3]||"",!0),Hl(this,d[4]),this.l=Lo(d[5]||"",!0),J_(this,d[6]||"",!0),this.m=Lo(d[7]||"")):(this.h=!1,this.i=new Vo(null,this.h))}vi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Mo(d,Z_,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Mo(d,Z_,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Mo(m,m.charAt(0)=="/"?nR:tR,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Mo(m,iR)),l.join("")};function Hn(l){return new vi(l)}function ql(l,d,m){l.j=m?Lo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Hl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function J_(l,d,m){d instanceof Vo?(l.i=d,sR(l.i,l.h)):(m||(d=Mo(d,rR)),l.i=new Vo(d,l.h))}function ke(l,d,m){l.i.set(d,m)}function Gl(l){return ke(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Lo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mo(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,eR),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function eR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Z_=/[#\/\?@]/g,tR=/[#\?:]/g,nR=/[#\?]/g,rR=/[#\?@]/g,iR=/#/g;function Vo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Cr(l){l.g||(l.g=new Map,l.h=0,l.i&&ZA(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Vo.prototype,t.add=function(l,d){Cr(this),this.i=null,l=us(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function ey(l,d){Cr(l),d=us(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function ty(l,d){return Cr(l),d=us(l,d),l.g.has(d)}t.forEach=function(l,d){Cr(this),this.g.forEach(function(m,y){m.forEach(function(D){l.call(d,D,y,this)},this)},this)},t.na=function(){Cr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const D=l[y];for(let O=0;O<D.length;O++)m.push(d[y])}return m},t.V=function(l){Cr(this);let d=[];if(typeof l=="string")ty(this,l)&&(d=d.concat(this.g.get(us(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return Cr(this),this.i=null,l=us(this,l),ty(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function ny(l,d,m){ey(l,d),0<m.length&&(l.i=null,l.g.set(us(l,d),S(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const O=encodeURIComponent(String(y)),q=this.V(y);for(y=0;y<q.length;y++){var D=O;q[y]!==""&&(D+="="+encodeURIComponent(String(q[y]))),l.push(D)}}return this.i=l.join("&")};function us(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function sR(l,d){d&&!l.j&&(Cr(l),l.i=null,l.g.forEach(function(m,y){var D=y.toLowerCase();y!=D&&(ey(this,y),ny(this,D,m))},l)),l.j=d}function oR(l,d){const m=new Do;if(a.Image){const y=new Image;y.onload=_(Ar,m,"TestLoadImage: loaded",!0,d,y),y.onerror=_(Ar,m,"TestLoadImage: error",!1,d,y),y.onabort=_(Ar,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=_(Ar,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function aR(l,d){const m=new Do,y=new AbortController,D=setTimeout(()=>{y.abort(),Ar(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(O=>{clearTimeout(D),O.ok?Ar(m,"TestPingServer: ok",!0,d):Ar(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Ar(m,"TestPingServer: error",!1,d)})}function Ar(l,d,m,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(m)}catch{}}function lR(){this.g=new WA}function uR(l,d,m){const y=m||"";try{Y_(l,function(D,O){let q=D;c(D)&&(q=nd(D)),d.push(y+O+"="+encodeURIComponent(q))})}catch(D){throw d.push(y+"type="+encodeURIComponent("_badmap")),D}}function Kl(l){this.l=l.Ub||null,this.j=l.eb||!1}w(Kl,rd),Kl.prototype.g=function(){return new Ql(this.l,this.j)},Kl.prototype.i=function(l){return function(){return l}}({});function Ql(l,d){_t.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Ql,_t),t=Ql.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,jo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,jo(this)),this.g&&(this.readyState=3,jo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ry(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ry(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Fo(this):jo(this),this.readyState==3&&ry(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Fo(this))},t.Qa=function(l){this.g&&(this.response=l,Fo(this))},t.ga=function(){this.g&&Fo(this)};function Fo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,jo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function jo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ql.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function iy(l){let d="";return F(l,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function fd(l,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=iy(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):ke(l,d,m))}function je(l){_t.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(je,_t);var cR=/^https?$/i,hR=["POST","PUT"];t=je.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():od.g(),this.v=this.o?D_(this.o):D_(od),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){sy(this,O);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)m.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())m.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(hR,d,void 0))||y||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,q]of m)this.g.setRequestHeader(O,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ly(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){sy(this,O)}};function sy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,oy(l),Yl(l)}function oy(l){l.A||(l.A=!0,kt(l,"complete"),kt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,kt(this,"complete"),kt(this,"abort"),Yl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yl(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ay(this):this.bb())},t.bb=function(){ay(this)};function ay(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Gn(l)!=4||l.Z()!=2)){if(l.u&&Gn(l)==4)k_(l.Ea,0,l);else if(kt(l,"readystatechange"),Gn(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=q===0){var D=String(l.D).match(X_)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!cR.test(D?D.toLowerCase():"")}m=y}if(m)kt(l,"complete"),kt(l,"success");else{l.m=6;try{var O=2<Gn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",oy(l)}}finally{Yl(l)}}}}function Yl(l,d){if(l.g){ly(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||kt(l,"ready");try{m.onreadystatechange=y}catch{}}}function ly(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Gn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),$A(d)}};function uy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function dR(l){const d={};l=(l.g&&2<=Gn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(E(l[y]))continue;var m=k(l[y]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=d[D]||[];d[D]=O,O.push(m)}T(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Uo(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function cy(l){this.Aa=0,this.i=[],this.j=new Do,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Uo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Uo("baseRetryDelayMs",5e3,l),this.cb=Uo("retryDelaySeedMs",1e4,l),this.Wa=Uo("forwardChannelMaxRetries",2,l),this.wa=Uo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new q_(l&&l.concurrentRequestLimit),this.Da=new lR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=cy.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,y){Pt(0),this.W=l,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=vy(this,null,this.W),Jl(this)};function pd(l){if(hy(l),l.G==3){var d=l.U++,m=Hn(l.I);if(ke(m,"SID",l.K),ke(m,"RID",d),ke(m,"TYPE","terminate"),Bo(l,m),d=new Sr(l,l.j,d),d.L=2,d.v=Gl(Hn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=wy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Wl(d)}yy(l)}function Xl(l){l.g&&(gd(l),l.g.cancel(),l.g=null)}function hy(l){Xl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Zl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Jl(l){if(!H_(l.h)&&!l.s){l.s=!0;var d=l.Ga;tn||V(),K||(tn(),K=!0),Z.add(d,l),l.B=0}}function fR(l,d){return G_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=bo(p(l.Ga,l,d),_y(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new Sr(this,this.j,l);let O=this.o;if(this.S&&(O?(O=v(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(D.H=O,O=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=fy(this,D,d),m=Hn(this.I),ke(m,"RID",l),ke(m,"CVER",22),this.D&&ke(m,"X-HTTP-Session-Id",this.D),Bo(this,m),O&&(this.O?d="headers="+encodeURIComponent(String(iy(O)))+"&"+d:this.m&&fd(m,this.m,O)),dd(this.h,D),this.Ua&&ke(m,"TYPE","init"),this.P?(ke(m,"$req",d),ke(m,"SID","null"),D.T=!0,ld(D,m,null)):ld(D,m,d),this.G=2}}else this.G==3&&(l?dy(this,l):this.i.length==0||H_(this.h)||dy(this))};function dy(l,d){var m;d?m=d.l:m=l.U++;const y=Hn(l.I);ke(y,"SID",l.K),ke(y,"RID",m),ke(y,"AID",l.T),Bo(l,y),l.m&&l.o&&fd(y,l.m,l.o),m=new Sr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=fy(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),dd(l.h,m),ld(m,y,d)}function Bo(l,d){l.H&&F(l.H,function(m,y){ke(d,y,m)}),l.l&&Y_({},function(m,y){ke(d,y,m)})}function fy(l,d,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var D=l.i;let O=-1;for(;;){const q=["count="+m];O==-1?0<m?(O=D[0].g,q.push("ofs="+O)):O=0:q.push("ofs="+O);let Ee=!0;for(let ut=0;ut<m;ut++){let de=D[ut].g;const yt=D[ut].map;if(de-=O,0>de)O=Math.max(0,D[ut].g-100),Ee=!1;else try{uR(yt,q,"req"+de+"_")}catch{y&&y(yt)}}if(Ee){y=q.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,y}function py(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;tn||V(),K||(tn(),K=!0),Z.add(d,l),l.v=0}}function md(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=bo(p(l.Fa,l),_y(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,my(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=bo(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Xl(this),my(this))};function gd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function my(l){l.g=new Sr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Hn(l.qa);ke(d,"RID","rpc"),ke(d,"SID",l.K),ke(d,"AID",l.T),ke(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ke(d,"TO",l.ja),ke(d,"TYPE","xmlhttp"),Bo(l,d),l.m&&l.o&&fd(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Gl(Hn(d)),m.m=null,m.P=!0,z_(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Xl(this),md(this),Pt(19))};function Zl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function gy(l,d){var m=null;if(l.g==d){Zl(l),gd(l),l.g=null;var y=2}else if(hd(l.h,d))m=d.D,K_(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var D=l.B;y=Bl(),kt(y,new F_(y,m)),Jl(l)}else py(l);else if(D=d.s,D==3||D==0&&0<d.X||!(y==1&&fR(l,d)||y==2&&md(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),D){case 1:wi(l,5);break;case 4:wi(l,10);break;case 3:wi(l,6);break;default:wi(l,2)}}}function _y(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function wi(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),y=l.Xa;const D=!y;y=new vi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ql(y,"https"),Gl(y),D?oR(y.toString(),m):aR(y.toString(),m)}else Pt(2);l.G=0,l.l&&l.l.sa(d),yy(l),hy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function yy(l){if(l.G=0,l.ka=[],l.l){const d=Q_(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,S(l.i),l.i.length=0),l.l.ra()}}function vy(l,d,m){var y=m instanceof vi?Hn(m):new vi(m);if(y.g!="")d&&(y.g=d+"."+y.g),Hl(y,y.s);else{var D=a.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var O=new vi(null);y&&ql(O,y),d&&(O.g=d),D&&Hl(O,D),m&&(O.l=m),y=O}return m=l.D,d=l.ya,m&&d&&ke(y,m,d),ke(y,"VER",l.la),Bo(l,y),y}function wy(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new je(new Kl({eb:m})):new je(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ey(){}t=Ey.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function eu(){}eu.prototype.g=function(l,d){return new Gt(l,d)};function Gt(l,d){_t.call(this),this.g=new cy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!E(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new cs(this)}w(Gt,_t),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){pd(this.g)},Gt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=nd(l),l=m);d.i.push(new YA(d.Ya++,l)),d.G==3&&Jl(d)},Gt.prototype.N=function(){this.g.l=null,delete this.j,pd(this.g),delete this.g,Gt.aa.N.call(this)};function Ty(l){id.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}w(Ty,id);function Iy(){sd.call(this),this.status=1}w(Iy,sd);function cs(l){this.g=l}w(cs,Ey),cs.prototype.ua=function(){kt(this.g,"a")},cs.prototype.ta=function(l){kt(this.g,new Ty(l))},cs.prototype.sa=function(l){kt(this.g,new Iy)},cs.prototype.ra=function(){kt(this.g,"b")},eu.prototype.createWebChannel=eu.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,YI=function(){return new eu},QI=function(){return Bl()},KI=_i,yp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zl.NO_ERROR=0,zl.TIMEOUT=8,zl.HTTP_ERROR=6,$u=zl,j_.COMPLETE="complete",GI=j_,O_.EventType=Po,Po.OPEN="a",Po.CLOSE="b",Po.ERROR="c",Po.MESSAGE="d",_t.prototype.listen=_t.prototype.K,oa=O_,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,HI=je}).apply(typeof wu<"u"?wu:typeof self<"u"?self:typeof window<"u"?window:{});const aw="@firebase/firestore";/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let wo="10.14.0";/**
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
 */const zi=new fh("@firebase/firestore");function Yo(){return zi.logLevel}function Y(t,...e){if(zi.logLevel<=ae.DEBUG){const n=e.map(rg);zi.debug(`Firestore (${wo}): ${t}`,...n)}}function mr(t,...e){if(zi.logLevel<=ae.ERROR){const n=e.map(rg);zi.error(`Firestore (${wo}): ${t}`,...n)}}function $i(t,...e){if(zi.logLevel<=ae.WARN){const n=e.map(rg);zi.warn(`Firestore (${wo}): ${t}`,...n)}}function rg(t){if(typeof t=="string")return t;try{/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${wo}) INTERNAL ASSERTION FAILED: `+t;throw mr(e),new Error(e)}function ge(t,e){t||te()}function ne(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends wr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class XI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class Sb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cb{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new XI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new It(e)}}class Ab{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Rb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ab(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new xb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Pb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ig{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Pb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Ke(0,0))}static max(){return new re(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ya{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ya.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ya?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Ya{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const Nb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Ya{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return Nb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ae.fromString(e))}static fromName(e){return new X(Ae.fromString(e).popFirst(5))}static empty(){return new X(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ae(e.slice()))}}function bb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new ri(i,X.empty(),e)}function Db(t){return new ri(t.readTime,t.key,-1)}class ri{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ri(re.min(),X.empty(),-1)}static max(){return new ri(re.max(),X.empty(),-1)}}function Ob(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Lb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Tl(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Lb)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Vb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Il(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sg.oe=-1;function yh(t){return t==null}function Rc(t){return t===0&&1/t==-1/0}function Fb(t){return typeof t=="number"&&Number.isInteger(t)&&!Rc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function lw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jb(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function ZI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Qe=class vp{constructor(e,n){this.comparator=e,this.root=n||Xr.EMPTY}insert(e,n){return new vp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xr.BLACK,null,null))}remove(e){return new vp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}},Eu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Xr=class Kn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Kn.RED,this.left=i??Kn.EMPTY,this.right=s??Kn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Kn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Kn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Kn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}};Xr.EMPTY=null,Xr.RED=!0,Xr.BLACK=!1;Xr.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uw(this.data.getIterator())}getIteratorFrom(e){return new uw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class uw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new ft(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class eS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new eS("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Ub=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ii(t){if(ge(!!t),typeof t=="string"){let e=0;const n=Ub.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wi(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function vh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function og(t){const e=t.mapValue.fields.__previous_value__;return vh(e)?og(e):e}function Xa(t){const e=ii(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class Bb{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof eo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tu={mapValue:{}};function qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vh(t)?4:$b(t)?9007199254740991:zb(t)?10:11:te()}function $n(t,e){if(t===e)return!0;const n=qi(t);if(n!==qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xa(t).isEqual(Xa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ii(i.timestampValue),a=ii(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wi(i.bytesValue).isEqual(Wi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return $e(i.geoPointValue.latitude)===$e(s.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $e(i.integerValue)===$e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$e(i.doubleValue),a=$e(s.doubleValue);return o===a?Rc(o)===Rc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(lw(o)!==lw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!$n(o[u],a[u])))return!1;return!0}(t,e);default:return te()}}function Ja(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function to(t,e){if(t===e)return 0;const n=qi(t),r=qi(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=$e(s.integerValue||s.doubleValue),u=$e(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return cw(t.timestampValue,e.timestampValue);case 4:return cw(Xa(t),Xa(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Wi(s),u=Wi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=fe(a[c],u[c]);if(h!==0)return h}return fe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=fe($e(s.latitude),$e(o.latitude));return a!==0?a:fe($e(s.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return hw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},p=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,w=(u=p.value)===null||u===void 0?void 0:u.arrayValue,S=fe(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:hw(_,w)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Tu.mapValue&&o===Tu.mapValue)return 0;if(s===Tu.mapValue)return 1;if(o===Tu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=fe(u[f],h[f]);if(p!==0)return p;const _=to(a[u[f]],c[h[f]]);if(_!==0)return _}return fe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw te()}}function cw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=ii(t),r=ii(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function hw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=to(n[i],r[i]);if(s)return s}return fe(n.length,r.length)}function no(t){return wp(t)}function wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ii(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wp(n.fields[o])}`;return i+"}"}(t.mapValue):te()}function xc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ep(t){return!!t&&"integerValue"in t}function ag(t){return!!t&&"arrayValue"in t}function dw(t){return!!t&&"nullValue"in t}function fw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wu(t){return!!t&&"mapValue"in t}function zb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function va(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=va(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=va(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $b(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=va(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=va(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(va(this.value))}}function tS(t){const e=[];return ts(t.fields,(n,r)=>{const i=new ot([n]);if(Wu(r)){const s=tS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
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
 */class Ct{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ct(e,0,re.min(),re.min(),re.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ct(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new Ct(e,2,n,re.min(),re.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,re.min(),re.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ro{constructor(e,n){this.position=e,this.inclusive=n}}function pw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=to(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Za{constructor(e,n="asc"){this.field=e,this.dir=n}}function Wb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class nS{}class Ge extends nS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Hb(e,n,r):n==="array-contains"?new Qb(e,r):n==="in"?new Yb(e,r):n==="not-in"?new Xb(e,r):n==="array-contains-any"?new Jb(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Gb(e,r):new Kb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(to(n,this.value)):n!==null&&qi(this.value)===qi(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rn extends nS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Rn(e,n)}matches(e){return rS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function rS(t){return t.op==="and"}function iS(t){return qb(t)&&rS(t)}function qb(t){for(const e of t.filters)if(e instanceof Rn)return!1;return!0}function Tp(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+no(t.value);if(iS(t))return t.filters.map(e=>Tp(e)).join(",");{const e=t.filters.map(n=>Tp(n)).join(",");return`${t.op}(${e})`}}function sS(t,e){return t instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof Rn?function(r,i){return i instanceof Rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&sS(o,i.filters[a]),!0):!1}(t,e):void te()}function oS(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${no(n.value)}`}(t):t instanceof Rn?function(n){return n.op.toString()+" {"+n.getFilters().map(oS).join(" ,")+"}"}(t):"Filter"}class Hb extends Ge{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Gb extends Ge{constructor(e,n){super(e,"in",n),this.keys=aS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kb extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=aS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Qb extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ag(n)&&Ja(n.arrayValue,this.value)}}class Yb extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ja(this.value.arrayValue,n)}}class Xb extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ja(this.value.arrayValue,n)}}class Jb extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ag(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ja(this.value.arrayValue,r))}}/**
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
 */class Zb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function gw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Zb(t,e,n,r,i,s,o)}function lg(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>no(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>no(r)).join(",")),e.ue=n}return e.ue}function ug(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Wb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mw(t.startAt,e.startAt)&&mw(t.endAt,e.endAt)}function Ip(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ns{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eD(t,e,n,r,i,s,o,a){return new ns(t,e,n,r,i,s,o,a)}function wh(t){return new ns(t)}function _w(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cg(t){return t.collectionGroup!==null}function Us(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(ot.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Za(s,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new Za(ot.keyField(),r))}return e.ce}function Un(t){const e=ne(t);return e.le||(e.le=lS(e,Us(t))),e.le}function tD(t){const e=ne(t);return e.he||(e.he=lS(e,t.explicitOrderBy)),e.he}function lS(t,e){if(t.limitType==="F")return gw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Za(i.field,s)});const n=t.endAt?new ro(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ro(t.startAt.position,t.startAt.inclusive):null;return gw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sp(t,e){const n=t.filters.concat([e]);return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kc(t,e,n){return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Eh(t,e){return ug(Un(t),Un(e))&&t.limitType===e.limitType}function uS(t){return`${lg(Un(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>oS(i)).join(", ")}]`),yh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>no(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>no(i)).join(",")),`Target(${r})`}(Un(t))}; limitType=${t.limitType})`}function Th(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Us(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=pw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Us(r),i)||r.endAt&&!function(o,a,u){const c=pw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Us(r),i))}(t,e)}function nD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cS(t){return(e,n)=>{let r=!1;for(const i of Us(t)){const s=rD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rD(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?to(u,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class Eo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ZI(this.inner)}size(){return this.innerSize}}/**
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
 */const iD=new Qe(X.comparator);function gr(){return iD}const hS=new Qe(X.comparator);function aa(...t){let e=hS;for(const n of t)e=e.insert(n.key,n);return e}function dS(t){let e=hS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ki(){return wa()}function fS(){return wa()}function wa(){return new Eo(t=>t.toString(),(t,e)=>t.isEqual(e))}const sD=new Qe(X.comparator),oD=new ft(X.comparator);function ue(...t){let e=oD;for(const n of t)e=e.add(n);return e}const aD=new ft(fe);function lD(){return aD}/**
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
 */function hg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rc(e)?"-0":e}}function pS(t){return{integerValue:""+t}}function mS(t,e){return Fb(e)?pS(e):hg(t,e)}/**
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
 */class Ih{constructor(){this._=void 0}}function uD(t,e,n){return t instanceof el?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&vh(s)&&(s=og(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof io?_S(t,e):t instanceof tl?yS(t,e):function(i,s){const o=gS(i,s),a=yw(o)+yw(i.Pe);return Ep(o)&&Ep(i.Pe)?pS(a):hg(i.serializer,a)}(t,e)}function cD(t,e,n){return t instanceof io?_S(t,e):t instanceof tl?yS(t,e):n}function gS(t,e){return t instanceof nl?function(r){return Ep(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class el extends Ih{}class io extends Ih{constructor(e){super(),this.elements=e}}function _S(t,e){const n=vS(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class tl extends Ih{constructor(e){super(),this.elements=e}}function yS(t,e){let n=vS(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class nl extends Ih{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yw(t){return $e(t.integerValue||t.doubleValue)}function vS(t){return ag(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class dg{constructor(e,n){this.field=e,this.transform=n}}function hD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof io&&i instanceof io||r instanceof tl&&i instanceof tl?Zs(r.elements,i.elements,$n):r instanceof nl&&i instanceof nl?$n(r.Pe,i.Pe):r instanceof el&&i instanceof el}(t.transform,e.transform)}class dD{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sh{}function wS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fg(t.key,qt.none()):new Sl(t.key,t.data,qt.none());{const n=t.data,r=jt.empty();let i=new ft(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new di(t.key,r,new Yt(i.toArray()),qt.none())}}function fD(t,e,n){t instanceof Sl?function(i,s,o){const a=i.value.clone(),u=ww(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof di?function(i,s,o){if(!qu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ww(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ES(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ea(t,e,n,r){return t instanceof Sl?function(s,o,a,u){if(!qu(s.precondition,o))return a;const c=s.value.clone(),h=Ew(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof di?function(s,o,a,u){if(!qu(s.precondition,o))return a;const c=Ew(s.fieldTransforms,u,o),h=o.data;return h.setAll(ES(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return qu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function pD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=gS(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function vw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zs(r,i,(s,o)=>hD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Sl extends Sh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class di extends Sh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ES(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ww(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,cD(o,a,n[i]))}return r}function Ew(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uD(s,o,e))}return r}class fg extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mD extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=wS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>vw(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>vw(n,r))}}class pg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return sD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new pg(e,n,r,i)}}/**
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
 */class _D{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yD{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class vD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,ce;function wD(t){switch(t){default:return te();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function TS(t){if(t===void 0)return mr("GRPC error has no .code"),M.UNKNOWN;switch(t){case qe.OK:return M.OK;case qe.CANCELLED:return M.CANCELLED;case qe.UNKNOWN:return M.UNKNOWN;case qe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case qe.INTERNAL:return M.INTERNAL;case qe.UNAVAILABLE:return M.UNAVAILABLE;case qe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case qe.NOT_FOUND:return M.NOT_FOUND;case qe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case qe.ABORTED:return M.ABORTED;case qe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case qe.DATA_LOSS:return M.DATA_LOSS;default:return te()}}(ce=qe||(qe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ED(){return new TextEncoder}/**
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
 */const TD=new Oi([4294967295,4294967295],0);function Tw(t){const e=ED().encode(t),n=new qI;return n.update(e),new Uint8Array(n.digest())}function Iw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Oi([n,r],0),new Oi([i,s],0)]}class mg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new la(`Invalid padding: ${n}`);if(r<0)throw new la(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new la(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new la(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Oi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Oi.fromNumber(r)));return i.compare(TD)===1&&(i=new Oi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Tw(e),[r,i]=Iw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new mg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Tw(e),[r,i]=Iw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class la extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ch{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ch(re.min(),i,new Qe(fe),gr(),ue())}}class Cl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cl(r,n,ue(),ue(),ue())}}/**
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
 */class Hu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class IS{constructor(e,n){this.targetId=e,this.me=n}}class SS{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sw{constructor(){this.fe=0,this.ge=Aw(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),n=ue(),r=ue();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new Cl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Aw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ID{constructor(e){this.Le=e,this.Be=new Map,this.ke=gr(),this.qe=Cw(),this.Qe=new Qe(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ip(s))if(r===0){const o=new X(s.path);this.Ue(n,o,Ct.newNoDocument(o,re.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Wi(r).toUint8Array()}catch(u){if(u instanceof eS)return $i("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new mg(o,i,s)}catch(u){return $i(u instanceof la?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Ip(a.target)){const u=new X(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ct.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ue();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ch(e,n,this.Qe,this.ke,r);return this.ke=gr(),this.qe=Cw(),this.Qe=new Qe(fe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Sw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Sw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Cw(){return new Qe(X.comparator)}function Aw(){return new Qe(X.comparator)}const SD={asc:"ASCENDING",desc:"DESCENDING"},CD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AD={and:"AND",or:"OR"};class RD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cp(t,e){return t.useProto3Json||yh(e)?e:{value:e}}function Pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xD(t,e){return Pc(t,e.toTimestamp())}function Bn(t){return ge(!!t),re.fromTimestamp(function(n){const r=ii(n);return new Ke(r.seconds,r.nanos)}(t))}function gg(t,e){return Ap(t,e).canonicalString()}function Ap(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function AS(t){const e=Ae.fromString(t);return ge(bS(e)),e}function Rp(t,e){return gg(t.databaseId,e.path)}function Xd(t,e){const n=AS(e);if(n.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(xS(n))}function RS(t,e){return gg(t.databaseId,e)}function kD(t){const e=AS(t);return e.length===4?Ae.emptyPath():xS(e)}function xp(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xS(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rw(t,e,n){return{name:Rp(t,e),fields:n.value.mapValue.fields}}function PD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ge(h===void 0||typeof h=="string"),lt.fromBase64String(h||"")):(ge(h===void 0||h instanceof Buffer||h instanceof Uint8Array),lt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?M.UNKNOWN:TS(c.code);return new G(h,c.message||"")}(o);n=new SS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xd(t,r.document.name),s=Bn(r.document.updateTime),o=r.document.createTime?Bn(r.document.createTime):re.min(),a=new jt({mapValue:{fields:r.document.fields}}),u=Ct.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Hu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xd(t,r.document),s=r.readTime?Bn(r.readTime):re.min(),o=Ct.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xd(t,r.document),s=r.removedTargetIds||[];n=new Hu([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vD(i,s),a=r.targetId;n=new IS(a,o)}}return n}function ND(t,e){let n;if(e instanceof Sl)n={update:Rw(t,e.key,e.value)};else if(e instanceof fg)n={delete:Rp(t,e.key)};else if(e instanceof di)n={update:Rw(t,e.key,e.data),updateMask:UD(e.fieldMask)};else{if(!(e instanceof mD))return te();n={verify:Rp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof el)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof tl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function bD(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Bn(i.updateTime):Bn(s);return o.isEqual(re.min())&&(o=Bn(s)),new dD(o,i.transformResults||[])}(n,e))):[]}function DD(t,e){return{documents:[RS(t,e.path)]}}function kS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=RS(t,i);const s=function(c){if(c.length!==0)return NS(Rn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Mr(p.field),direction:VD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Cp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function OD(t,e,n,r){const{_t:i,parent:s}=kS(t,e),o={},a=[];let u=0;return n.forEach(c=>{const h="aggregate_"+u++;o[h]=c.alias,c.aggregateType==="count"?a.push({alias:h,count:{}}):c.aggregateType==="avg"?a.push({alias:h,avg:{field:Mr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:h,sum:{field:Mr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function LD(t){let e=kD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=PS(f);return p instanceof Rn&&iS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(w){return new Za(gs(w.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,yh(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,_=f.values||[];return new ro(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,_=f.values||[];return new ro(_,p)}(n.endAt)),eD(e,i,o,s,a,"F",u,c)}function MD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function PS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gs(n.unaryFilter.field);return Ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gs(n.unaryFilter.field);return Ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(gs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Rn.create(n.compositeFilter.filters.map(r=>PS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function VD(t){return SD[t]}function FD(t){return CD[t]}function jD(t){return AD[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function gs(t){return ot.fromServerFormat(t.fieldPath)}function NS(t){return t instanceof Ge?function(n){if(n.op==="=="){if(fw(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NAN"}};if(dw(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fw(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NAN"}};if(dw(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(n.field),op:FD(n.op),value:n.value}}}(t):t instanceof Rn?function(n){const r=n.getFilters().map(i=>NS(i));return r.length===1?r[0]:{compositeFilter:{op:jD(n.op),filters:r}}}(t):te()}function UD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class jr{constructor(e,n,r,i,s=re.min(),o=re.min(),a=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BD{constructor(e){this.ct=e}}function zD(t){const e=LD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
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
 */class $D{constructor(){this.un=new WD}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(ri.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(ri.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class WD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ft(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ft(Ae.comparator)).toArray()}}/**
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
 */class so{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new so(0)}static kn(){return new so(-1)}}/**
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
 */class qD{constructor(){this.changes=new Eo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class GD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ea(r.mutation,i,Yt.empty(),Ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=aa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ki();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=gr();const o=wa(),a=function(){return wa()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof di)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ea(h.mutation,c,h.mutation.getFieldMask(),Ke.now())):o.set(c.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new HD(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wa();let i=new Qe((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Yt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||ue()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=fS();h.forEach(p=>{if(!s.has(p)){const _=wS(n.get(p),r.get(p));_!==null&&f.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(ki());let a=-1,u=s;return o.next(c=>j.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ue())).next(h=>({batchId:a,changes:dS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=aa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=aa();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(f,p){return new ns(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ct.newInvalidDocument(h)))});let a=aa();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Ea(h.mutation,c,Yt.empty(),Ke.now()),Th(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class KD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Bn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:zD(i.bundledQuery),readTime:Bn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class QD{constructor(){this.overlays=new Qe(X.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ki();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=ki(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ki(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ki(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _D(n,r));let s=this.Ir.get(n);s===void 0&&(s=ue(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class YD{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class _g{constructor(){this.Tr=new ft(nt.Er),this.dr=new ft(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Ae([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Ae([])),r=new nt(n,e),i=new nt(n,e+1);let s=ue();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||fe(e.wr,n.wr)}static Ar(e,n){return fe(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
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
 */class XD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ft(nt.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(fe);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new nt(new X(s),0);let a=new ft(fe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class JD{constructor(e){this.Mr=e,this.docs=function(){return new Qe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=gr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ct.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=gr();const o=n.path,a=new X(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ob(Db(h),r)<=0||(i.has(h.key)||Th(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZD(this)}getSize(e){return j.resolve(this.size)}}class ZD extends qD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class eO{constructor(e){this.persistence=e,this.Nr=new Eo(n=>lg(n),ug),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new _g,this.targetCount=0,this.kr=so.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new so(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class tO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new sg(0),this.Kr=!1,this.Kr=!0,this.$r=new YD,this.referenceDelegate=e(this),this.Ur=new eO(this),this.indexManager=new $D,this.remoteDocumentCache=function(i){return new JD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new BD(n),this.Gr=new KD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new XD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new nO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class nO extends Mb{constructor(e){super(),this.currentSequenceNumber=e}}class yg{constructor(e){this.persistence=e,this.Jr=new _g,this.Yr=null}static Zr(e){return new yg(e)}get Xr(){if(this.Yr)return this.Yr;throw te()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class vg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vg(e,n.fromCache,r,i)}}/**
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
 */class rO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return tP()?8:Vb(xt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Yo()<=ae.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Yo()<=ae.DEBUG&&Y("QueryEngine","Query:",ms(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Yo()<=ae.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(n))):j.resolve())}Yi(e,n){if(_w(n))return j.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kc(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,kc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return _w(n)||i.isEqual(re.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(Yo()<=ae.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ms(n)),this.rs(e,o,n,bb(i,-1)).next(a=>a))})}ts(e,n){let r=new ft(cS(e));return n.forEach((i,s)=>{Th(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Yo()<=ae.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ms(n)),this.Ji.getDocumentsMatchingQuery(e,n,ri.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class sO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Qe(fe),this._s=new Eo(s=>lg(s),ug),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function oO(t,e,n,r){return new sO(t,e,n,r)}async function DS(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ue();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function aO(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let _=j.resolve();return p.forEach(w=>{_=_.next(()=>h.getEntry(u,w)).next(S=>{const N=c.docVersions.get(w);ge(N!==null),S.version.compareTo(N)<0&&(f.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),h.addEntry(S)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ue();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function OS(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function lO(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(lt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(f,_),function(S,N,C){return S.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(p,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let u=gr(),c=ue();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(uO(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(re.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function uO(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=gr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function cO(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hO(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function kp(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Il(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function xw(t,e,n){const r=ne(t);let i=re.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ne(u),p=f._s.get(h);return p!==void 0?j.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,Un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:ue())).next(a=>(dO(r,nD(e),a),{documents:a,Ts:s})))}function dO(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class kw{constructor(){this.activeTargetIds=lD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fO{constructor(){this.so=new kw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new kw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pO{_o(e){}shutdown(){}}/**
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
 */class Pw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Iu=null;function Jd(){return Iu===null?Iu=function(){return 268435456+Math.round(2147483648*Math.random())}():Iu++,"0x"+Iu.toString(16)}/**
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
 */const mO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Tt="WebChannelConnection";class _O extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Jd(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw $i("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=mO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Jd();return new Promise((o,a)=>{const u=new HI;u.setWithCredentials(!0),u.listenOnce(GI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $u.NO_ERROR:const h=u.getResponseJson();Y(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case $u.TIMEOUT:Y(Tt,`RPC '${e}' ${s} timed out`),a(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const f=u.getStatus();if(Y(Tt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const w=function(N){const C=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(C)>=0?C:M.UNKNOWN}(_.status);a(new G(w,_.message))}else a(new G(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(M.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{Y(Tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(Tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Jd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=YI(),a=QI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");Y(Tt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let p=!1,_=!1;const w=new gO({Io:N=>{_?Y(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(Y(Tt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),Y(Tt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),S=(N,C,E)=>{N.listen(C,x=>{try{E(x)}catch(P){setTimeout(()=>{throw P},0)}})};return S(f,oa.EventType.OPEN,()=>{_||(Y(Tt,`RPC '${e}' stream ${i} transport opened.`),w.yo())}),S(f,oa.EventType.CLOSE,()=>{_||(_=!0,Y(Tt,`RPC '${e}' stream ${i} transport closed`),w.So())}),S(f,oa.EventType.ERROR,N=>{_||(_=!0,$i(Tt,`RPC '${e}' stream ${i} transport errored:`,N),w.So(new G(M.UNAVAILABLE,"The operation could not be completed")))}),S(f,oa.EventType.MESSAGE,N=>{var C;if(!_){const E=N.data[0];ge(!!E);const x=E,P=x.error||((C=x[0])===null||C===void 0?void 0:C.error);if(P){Y(Tt,`RPC '${e}' stream ${i} received error:`,P);const L=P.status;let F=function(I){const A=qe[I];if(A!==void 0)return TS(A)}(L),T=P.message;F===void 0&&(F=M.INTERNAL,T="Unknown error status: "+L+" with message "+P.message),_=!0,w.So(new G(F,T)),f.close()}else Y(Tt,`RPC '${e}' stream ${i} received:`,E),w.bo(E)}}),S(a,KI.STAT_EVENT,N=>{N.stat===yp.PROXY?Y(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===yp.NOPROXY&&Y(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}function Zd(){return typeof document<"u"?document:null}/**
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
 */function Ah(t){return new RD(t,!0)}/**
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
 */class LS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class MS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new LS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yO extends MS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=PD(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?Bn(o.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=xp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Ip(u)?{documents:DD(s,u)}:{query:kS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=CS(s,o.resumeToken);const c=Cp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=Pc(s,o.snapshotVersion.toTimestamp());const c=Cp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=MD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=xp(this.serializer),n.removeTarget=e,this.a_(n)}}class vO extends MS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=bD(e.writeResults,e.commitTime),r=Bn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=xp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ND(this.serializer,r))};this.a_(n)}}/**
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
 */class wO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ap(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Ap(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class EO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(mr(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class TO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{rs(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await Al(c),c.q_.set("Unknown"),c.L_.delete(4),await Rh(c)}(this))})}),this.q_=new EO(r,i)}}async function Rh(t){if(rs(t))for(const e of t.B_)await e(!0)}async function Al(t){for(const e of t.B_)await e(!1)}function VS(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Ig(n)?Tg(n):To(n).r_()&&Eg(n,e))}function wg(t,e){const n=ne(t),r=To(n);n.N_.delete(e),r.r_()&&FS(n,e),n.N_.size===0&&(r.r_()?r.o_():rs(n)&&n.q_.set("Unknown"))}function Eg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}To(t).A_(e)}function FS(t,e){t.Q_.xe(e),To(t).R_(e)}function Tg(t){t.Q_=new ID({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),To(t).start(),t.q_.v_()}function Ig(t){return rs(t)&&!To(t).n_()&&t.N_.size>0}function rs(t){return ne(t).L_.size===0}function jS(t){t.Q_=void 0}async function IO(t){t.q_.set("Online")}async function SO(t){t.N_.forEach((e,n)=>{Eg(t,e)})}async function CO(t,e){jS(t),Ig(t)?(t.q_.M_(e),Tg(t)):t.q_.set("Unknown")}async function AO(t,e,n){if(t.q_.set("Online"),e instanceof SS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nc(t,r)}else if(e instanceof Hu?t.Q_.Ke(e):e instanceof IS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await OS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(lt.EMPTY_BYTE_STRING,h.snapshotVersion)),FS(s,u);const f=new jr(h.target,u,c,h.sequenceNumber);Eg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Nc(t,r)}}async function Nc(t,e,n){if(!Il(e))throw e;t.L_.add(1),await Al(t),t.q_.set("Offline"),n||(n=()=>OS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Rh(t)})}function US(t,e){return e().catch(n=>Nc(t,n,e))}async function xh(t){const e=ne(t),n=si(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;RO(e);)try{const i=await cO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,xO(e,i)}catch(i){await Nc(e,i)}BS(e)&&zS(e)}function RO(t){return rs(t)&&t.O_.length<10}function xO(t,e){t.O_.push(e);const n=si(t);n.r_()&&n.V_&&n.m_(e.mutations)}function BS(t){return rs(t)&&!si(t).n_()&&t.O_.length>0}function zS(t){si(t).start()}async function kO(t){si(t).p_()}async function PO(t){const e=si(t);for(const n of t.O_)e.m_(n.mutations)}async function NO(t,e,n){const r=t.O_.shift(),i=pg.from(r,e,n);await US(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xh(t)}async function bO(t,e){e&&si(t).V_&&await async function(r,i){if(function(o){return wD(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();si(r).s_(),await US(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xh(r)}}(t,e),BS(t)&&zS(t)}async function Nw(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=rs(n);n.L_.add(3),await Al(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Rh(n)}async function DO(t,e){const n=ne(t);e?(n.L_.delete(2),await Rh(n)):e||(n.L_.add(2),await Al(n),n.q_.set("Unknown"))}function To(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new yO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:IO.bind(null,t),Ro:SO.bind(null,t),mo:CO.bind(null,t),d_:AO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Ig(t)?Tg(t):t.q_.set("Unknown")):(await t.K_.stop(),jS(t))})),t.K_}function si(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new vO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:kO.bind(null,t),mo:bO.bind(null,t),f_:PO.bind(null,t),g_:NO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xh(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Sg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cg(t,e){if(mr("AsyncQueue",`${e}: ${t}`),Il(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=aa(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class bw{constructor(){this.W_=new Qe(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):te():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class oo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oo(e,n,Bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Eh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class OO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class LO{constructor(){this.queries=Dw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=Dw(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function Dw(){return new Eo(t=>uS(t),Eh)}async function Ag(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new OO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Cg(o,`Initialization of query '${ms(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&xg(n)}async function Rg(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MO(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&xg(n)}function VO(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function xg(t){t.Y_.forEach(e=>{e.next()})}var Pp,Ow;(Ow=Pp||(Pp={})).ea="default",Ow.Cache="cache";class kg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Pp.Cache}}/**
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
 */class $S{constructor(e){this.key=e}}class WS{constructor(e){this.key=e}}class FO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=cS(e),this.Ra=new Bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new bw,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),_=Th(this.query,f)?f:null,w=!!p&&this.mutatedKeys.has(p.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;p&&_?p.data.isEqual(_.data)?w!==S&&(r.track({type:3,doc:_}),N=!0):this.ga(p,_)||(r.track({type:2,doc:_}),N=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),N=!0):p&&!_&&(r.track({type:1,doc:p}),N=!0,(u||c)&&(a=!0)),N&&(_?(o=o.add(_),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,w){const S=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return S(_)-S(w)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new oo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new bw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new WS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new $S(r))}),n}ba(e){this.Ta=e.Ts,this.da=ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return oo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class jO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UO{constructor(e){this.key=e,this.va=!1}}class BO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Eo(a=>uS(a),Eh),this.Ma=new Map,this.xa=new Set,this.Oa=new Qe(X.comparator),this.Na=new Map,this.La=new _g,this.Ba={},this.ka=new Map,this.qa=so.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function zO(t,e,n=!0){const r=YS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await qS(r,e,n,!0),i}async function $O(t,e){const n=YS(t);await qS(n,e,!0,!1)}async function qS(t,e,n,r){const i=await hO(t.localStore,Un(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await WO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&VS(t.remoteStore,i),a}async function WO(t,e,n,r,i){t.Ka=(f,p,_)=>async function(S,N,C,E){let x=N.view.ma(C);x.ns&&(x=await xw(S.localStore,N.query,!1).then(({documents:T})=>N.view.ma(T,x)));const P=E&&E.targetChanges.get(N.targetId),L=E&&E.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(x,S.isPrimaryClient,P,L);return Mw(S,N.targetId,F.wa),F.snapshot}(t,f,p,_);const s=await xw(t.localStore,e,!0),o=new FO(e,s.Ts),a=o.ma(s.documents),u=Cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Mw(t,n,c.wa);const h=new jO(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function qO(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Eh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await kp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&wg(r.remoteStore,i.targetId),Np(r,i.targetId)}).catch(Tl)):(Np(r,i.targetId),await kp(r.localStore,i.targetId,!0))}async function HO(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wg(n.remoteStore,r.targetId))}async function GO(t,e,n){const r=eL(t);try{const i=await function(o,a){const u=ne(o),c=Ke.now(),h=a.reduce((_,w)=>_.add(w.key),ue());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let w=gr(),S=ue();return u.cs.getEntries(_,h).next(N=>{w=N,w.forEach((C,E)=>{E.isValidDocument()||(S=S.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,w)).next(N=>{f=N;const C=[];for(const E of a){const x=pD(E,f.get(E.key).overlayedDocument);x!=null&&C.push(new di(E.key,x,tS(x.value.mapValue),qt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,C,a)}).next(N=>{p=N;const C=N.applyToLocalDocumentSet(f,S);return u.documentOverlayCache.saveOverlays(_,N.batchId,C)})}).then(()=>({batchId:p.batchId,changes:dS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Qe(fe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Rl(r,i.changes),await xh(r.remoteStore)}catch(i){const s=Cg(i,"Failed to persist write");n.reject(s)}}async function HS(t,e){const n=ne(t);try{const r=await lO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ge(o.va):i.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await Rl(n,r,e)}catch(r){await Tl(r)}}function Lw(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&xg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KO(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Qe(X.comparator);o=o.insert(s,Ct.newNoDocument(s,re.min()));const a=ue().add(s),u=new Ch(re.min(),new Map,new Qe(fe),o,a);await HS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Pg(r)}else await kp(r.localStore,e,!1).then(()=>Np(r,e,n)).catch(Tl)}async function QO(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await aO(n.localStore,e);KS(n,r,null),GS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rl(n,i)}catch(i){await Tl(i)}}async function YO(t,e,n){const r=ne(t);try{const i=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ge(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);KS(r,e,n),GS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rl(r,i)}catch(i){await Tl(i)}}function GS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function KS(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Np(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||QS(t,r)})}function QS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(wg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Pg(t))}function Mw(t,e,n){for(const r of n)r instanceof $S?(t.La.addReference(r.key,e),XO(t,r)):r instanceof WS?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||QS(t,r.key)):te()}function XO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),Pg(t))}function Pg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Ae.fromString(e)),r=t.qa.next();t.Na.set(r,new UO(n)),t.Oa=t.Oa.insert(n,r),VS(t.remoteStore,new jr(Un(wh(n.path)),r,"TargetPurposeLimboResolution",sg.oe))}}async function Rl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=vg.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,p=>j.forEach(p.$i,_=>h.persistence.referenceDelegate.addReference(f,p.targetId,_)).next(()=>j.forEach(p.Ui,_=>h.persistence.referenceDelegate.removeReference(f,p.targetId,_)))))}catch(f){if(!Il(f))throw f;Y("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const _=h.os.get(p),w=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(w);h.os=h.os.insert(p,S)}}}(r.localStore,s))}async function JO(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await DS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new G(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rl(n,r.hs)}}function ZO(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return ue().add(r.key);{let i=ue();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function YS(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KO.bind(null,e),e.Ca.d_=MO.bind(null,e.eventManager),e.Ca.$a=VO.bind(null,e.eventManager),e}function eL(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YO.bind(null,e),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return oO(this.persistence,new iO,e.initialUser,this.serializer)}Ga(e){return new tO(yg.Zr,this.serializer)}Wa(e){return new fO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class bp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JO.bind(null,this.syncEngine),await DO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LO}()}createDatastore(e){const n=Ah(e.databaseInfo.databaseId),r=function(s){return new _O(s)}(e.databaseInfo);return function(s,o,a,u){return new wO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new TO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lw(this.syncEngine,n,0),function(){return Pw.D()?new Pw:new pO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new BO(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Al(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bp.provider={build:()=>new bp};/**
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
 */class Ng{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=ig.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ef(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await DS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nL(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Nw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Nw(e.remoteStore,i)),t._onlineComponents=e}async function nL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;$i("Error using user provided cache. Falling back to memory cache: "+n),await ef(t,new bc)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await ef(t,new bc);return t._offlineComponents}async function bg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Vw(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Vw(t,new bp))),t._onlineComponents}function rL(t){return bg(t).then(e=>e.syncEngine)}function iL(t){return bg(t).then(e=>e.datastore)}async function Dc(t){const e=await bg(t),n=e.eventManager;return n.onListen=zO.bind(null,e.syncEngine),n.onUnlisten=qO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$O.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HO.bind(null,e.syncEngine),n}function sL(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Ng({next:p=>{h.Za(),o.enqueueAndForget(()=>Rg(s,f));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new G(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&u&&u.source==="server"?c.reject(new G(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new kg(wh(a.path),h,{includeMetadataChanges:!0,_a:!0});return Ag(s,f)}(await Dc(t),t.asyncQueue,e,n,r)),r.promise}function oL(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Ng({next:p=>{h.Za(),o.enqueueAndForget(()=>Rg(s,f)),p.fromCache&&u.source==="server"?c.reject(new G(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new kg(a,h,{includeMetadataChanges:!0,_a:!0});return Ag(s,f)}(await Dc(t),t.asyncQueue,e,n,r)),r.promise}function aL(t,e,n){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await iL(t);r.resolve(async function(o,a,u){var c;const h=ne(o),{request:f,ut:p,parent:_}=OD(h.serializer,tD(a),u);h.connection.Fo||delete f.parent;const w=(await h.Lo("RunAggregationQuery",h.serializer.databaseId,_,f,1)).filter(N=>!!N.result);ge(w.length===1);const S=(c=w[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(S).reduce((N,C)=>(N[p[C]]=S[C],N),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
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
 */function XS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Fw=new Map;/**
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
 */function JS(t,e,n){if(!n)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZS(t,e,n,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jw(t){if(!X.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uw(t){if(X.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function At(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kh(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function lL(t,e){if(e<=0)throw new G(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Bw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ph{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JI;switch(r.type){case"firstParty":return new Rb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fw.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Fw.delete(n),r.terminate())}(this),Promise.resolve()}}function eC(t,e,n,r={}){var i;const s=(t=At(t,Ph))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=It.MOCK_USER;else{a=oI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(c)}t._authCredentials=new Sb(new XI(a,u))}}/**
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
 */class kn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kn(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class ar extends kn{constructor(e,n,r){super(e,n,wh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new X(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Wn(t,e,...n){if(t=Te(t),JS("collection","path",e),t instanceof Ph){const r=Ae.fromString(e,...n);return Uw(r),new ar(t,null,r)}{if(!(t instanceof pt||t instanceof ar))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Uw(r),new ar(t.firestore,null,r)}}function et(t,e,...n){if(t=Te(t),arguments.length===1&&(e=ig.newId()),JS("doc","path",e),t instanceof Ph){const r=Ae.fromString(e,...n);return jw(r),new pt(t,null,new X(r))}{if(!(t instanceof pt||t instanceof ar))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return jw(r),new pt(t.firestore,t instanceof ar?t.converter:null,new X(r))}}/**
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
 */class zw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new LS(this,"async_queue_retry"),this.Vu=()=>{const r=Zd();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Zd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new jn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Il(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw mr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Sg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function $w(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class xn extends Ph{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new zw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zw(e),this._firestoreClient=void 0,await e}}}function tC(t,e){const n=typeof t=="object"?t:qm(),r=typeof t=="string"?t:"(default)",i=ph(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rI("firestore");s&&eC(i,...s)}return i}function is(t){if(t._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||uL(t),t._firestoreClient}function uL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new Bb(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,XS(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new tL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class nC{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class rC{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(lt.fromBase64String(e))}catch(n){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Io{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ss{constructor(e){this._methodName=e}}/**
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
 */class Nh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */class bh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const cL=/^__.*__$/;class hL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new di(e,this.data,this.fieldMask,n,this.fieldTransforms):new Sl(e,this.data,n,this.fieldTransforms)}}class iC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Dh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Dh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Oc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(sC(this.Cu)&&cL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class dL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ah(e)}Qu(e,n,r,i=!1){return new Dh({Cu:e,methodName:n,qu:r,path:ot.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function So(t){const e=t._freezeSettings(),n=Ah(t._databaseId);return new dL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dg(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Vg("Data must be an object, but it was:",o,r);const a=uC(r,o);let u,c;if(s.merge)u=new Yt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Dp(e,f,n);if(!o.contains(p))throw new G(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);hC(h,p)||h.push(p)}u=new Yt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new hL(new jt(a),u,c)}class Oh extends ss{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oh}}function fL(t,e,n){return new Dh({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Og extends ss{_toFieldTransform(e){return new dg(e.path,new el)}isEqual(e){return e instanceof Og}}class Lg extends ss{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=fL(this,e,!0),r=this.Ku.map(s=>Co(s,n)),i=new io(r);return new dg(e.path,i)}isEqual(e){return e instanceof Lg&&Ha(this.Ku,e.Ku)}}class Mg extends ss{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new nl(e.serializer,mS(e.serializer,this.$u));return new dg(e.path,n)}isEqual(e){return e instanceof Mg&&this.$u===e.$u}}function oC(t,e,n,r){const i=t.Qu(1,e,n);Vg("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();ts(r,(u,c)=>{const h=Fg(e,u,n);c=Te(c);const f=i.Nu(h);if(c instanceof Oh)s.push(h);else{const p=Co(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new Yt(s);return new iC(o,a,i.fieldTransforms)}function aC(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Dp(e,r,n)],u=[i];if(s.length%2!=0)throw new G(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Dp(e,s[p])),u.push(s[p+1]);const c=[],h=jt.empty();for(let p=a.length-1;p>=0;--p)if(!hC(c,a[p])){const _=a[p];let w=u[p];w=Te(w);const S=o.Nu(_);if(w instanceof Oh)c.push(_);else{const N=Co(w,S);N!=null&&(c.push(_),h.set(_,N))}}const f=new Yt(c);return new iC(h,f,o.fieldTransforms)}function lC(t,e,n,r=!1){return Co(n,t.Qu(r?4:3,e))}function Co(t,e){if(cC(t=Te(t)))return Vg("Unsupported field value:",e,t),uC(t,e);if(t instanceof ss)return function(r,i){if(!sC(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Co(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ke.fromDate(r);return{timestampValue:Pc(i.serializer,s)}}if(r instanceof Ke){const s=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pc(i.serializer,s)}}if(r instanceof Nh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hi)return{bytesValue:CS(i.serializer,r._byteString)};if(r instanceof pt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bh)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return hg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${kh(r)}`)}(t,e)}function uC(t,e){const n={};return ZI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,i)=>{const s=Co(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Nh||t instanceof Hi||t instanceof pt||t instanceof ss||t instanceof bh)}function Vg(t,e,n){if(!cC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=kh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Dp(t,e,n){if((e=Te(e))instanceof Io)return e._internalPath;if(typeof e=="string")return Fg(t,e);throw Oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const pL=new RegExp("[~\\*/\\[\\]]");function Fg(t,e,n){if(e.search(pL)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Io(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(M.INVALID_ARGUMENT,a+t+u)}function hC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mL extends jg{data(){return super.data()}}function Lh(t,e){return typeof e=="string"?Fg(t,e):e instanceof Io?e._internalPath:e._delegate._internalPath}/**
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
 */function dC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ug{}class xl extends Ug{}function Mh(t,e,...n){let r=[];e instanceof Ug&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Vh).length,a=s.filter(u=>u instanceof kl).length;if(o>1||o>0&&a>0)throw new G(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class kl extends xl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new kl(e,n,r)}_apply(e){const n=this._parse(e);return mC(e._query,n),new kn(e.firestore,e.converter,Sp(e._query,n))}_parse(e){const n=So(e.firestore);return function(s,o,a,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new G(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){qw(f,h);const _=[];for(const w of f)_.push(Ww(u,s,w));p={arrayValue:{values:_}}}else p=Ww(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||qw(f,h),p=lC(a,o,f,h==="in"||h==="not-in");return Ge.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fC(t,e,n){const r=e,i=Lh("where",t);return kl._create(i,r,n)}class Vh extends Ug{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)mC(o,u),o=Sp(o,u)}(e._query,n),new kn(e.firestore,e.converter,Sp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fh extends xl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Fh(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Za(s,o)}(e._query,this._field,this._direction);return new kn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ns(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function jh(t,e="asc"){const n=e,r=Lh("orderBy",t);return Fh._create(r,n)}class Uh extends xl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Uh(e,n,r)}_apply(e){return new kn(e.firestore,e.converter,kc(e._query,this._limit,this._limitType))}}function Bg(t){return lL("limit",t),Uh._create("limit",t,"F")}class Bh extends xl{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Bh(e,n,r)}_apply(e){const n=gL(e,this.type,this._docOrFields,this._inclusive);return new kn(e.firestore,e.converter,function(i,s){return new ns(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function pC(...t){return Bh._create("startAfter",t,!1)}function gL(t,e,n,r){if(n[0]=Te(n[0]),n[0]instanceof jg)return function(s,o,a,u,c){if(!u)throw new G(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of Us(s))if(f.field.isKeyField())h.push(xc(o,u.key));else{const p=u.data.field(f.field);if(vh(p))throw new G(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const _=f.field.canonicalString();throw new G(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}h.push(p)}return new ro(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=So(t.firestore);return function(o,a,u,c,h,f){const p=o.explicitOrderBy;if(h.length>p.length)throw new G(M.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let w=0;w<h.length;w++){const S=h[w];if(p[w].field.isKeyField()){if(typeof S!="string")throw new G(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof S}`);if(!cg(o)&&S.indexOf("/")!==-1)throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${S}' contains a slash.`);const N=o.path.child(Ae.fromString(S));if(!X.isDocumentKey(N))throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const C=new X(N);_.push(xc(a,C))}else{const N=lC(u,c,S);_.push(N)}}return new ro(_,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Ww(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new G(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cg(e)&&n.indexOf("/")!==-1)throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!X.isDocumentKey(r))throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xc(t,new X(r))}if(n instanceof pt)return xc(t,n._key);throw new G(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kh(n)}.`)}function qw(t,e){if(!Array.isArray(t)||t.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gC{convertValue(e,n="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ts(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>$e(o.doubleValue));return new bh(s)}convertGeoPoint(e){return new Nh($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=og(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const n=ii(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);ge(bS(r));const i=new eo(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||mr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function zg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function _C(){return new nC("count")}/**
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
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $g extends jg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ta extends $g{data(e={}){return super.data(e)}}class Wg{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ks(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ta(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ks(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ta(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ks(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:_L(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _L(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
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
 */function Gi(t){t=At(t,pt);const e=At(t.firestore,xn);return sL(is(e),t._key).then(n=>vC(e,t,n))}class zh extends gC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function ao(t){t=At(t,kn);const e=At(t.firestore,xn),n=is(e),r=new zh(e);return dC(t._query),oL(n,t._query).then(i=>new Wg(e,r,t,i))}function qg(t,e,n){t=At(t,pt);const r=At(t.firestore,xn),i=zg(t.converter,e,n);return Nl(r,[Dg(So(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qt.none())])}function fi(t,e,n,...r){t=At(t,pt);const i=At(t.firestore,xn),s=So(i);let o;return o=typeof(e=Te(e))=="string"||e instanceof Io?aC(s,"updateDoc",t._key,e,n,r):oC(s,"updateDoc",t._key,e),Nl(i,[o.toMutation(t._key,qt.exists(!0))])}function yC(t,e){const n=At(t.firestore,xn),r=et(t),i=zg(t.converter,e);return Nl(n,[Dg(So(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function Pl(t,...e){var n,r,i;t=Te(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||$w(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if($w(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof pt)c=At(t.firestore,xn),h=wh(t._key.path),u={next:f=>{e[o]&&e[o](vC(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=At(t,kn);c=At(f.firestore,xn),h=f._query;const p=new zh(c);u={next:_=>{e[o]&&e[o](new Wg(c,p,f,_))},error:e[o+1],complete:e[o+2]},dC(t._query)}return function(p,_,w,S){const N=new Ng(S),C=new kg(_,N,w);return p.asyncQueue.enqueueAndForget(async()=>Ag(await Dc(p),C)),()=>{N.Za(),p.asyncQueue.enqueueAndForget(async()=>Rg(await Dc(p),C))}}(is(c),h,a,u)}function Nl(t,e){return function(r,i){const s=new jn;return r.asyncQueue.enqueueAndForget(async()=>GO(await rL(r),i,s)),s.promise}(is(t),e)}function vC(t,e,n){const r=n.docs.get(e._key),i=new zh(t);return new $g(t,i,e._key,r,new ks(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function wC(t){return EC(t,{count:_C()})}function EC(t,e){const n=At(t.firestore,xn),r=is(n),i=jb(e,(s,o)=>new yD(o,s.aggregateType,s._internalFieldPath));return aL(r,t._query,i).then(s=>function(a,u,c){const h=new zh(a);return new rC(u,h,c)}(n,t,s))}/**
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
 */class TC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=So(e)}set(e,n,r){this._verifyNotCommitted();const i=tf(e,this._firestore),s=zg(i.converter,n,r),o=Dg(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,qt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=tf(e,this._firestore);let o;return o=typeof(n=Te(n))=="string"||n instanceof Io?aC(this._dataReader,"WriteBatch.update",s._key,n,r,i):oC(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,qt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=tf(e,this._firestore);return this._mutations=this._mutations.concat(new fg(n._key,qt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function tf(t,e){if((t=Te(t)).firestore!==e)throw new G(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function _r(){return new Og("serverTimestamp")}function IC(...t){return new Lg("arrayUnion",t)}function Gu(t){return new Mg("increment",t)}/**
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
 */function SC(t){return is(t=At(t,xn)),new TC(t,e=>Nl(t,e))}(function(e,n=!0){(function(i){wo=i})(es),Ui(new ni("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new xn(new Cb(r.getProvider("auth-internal")),new kb(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eo(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Vn(aw,"4.7.3",e),Vn(aw,"4.7.3","esm2017")})();const yL=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:gC,AggregateField:nC,AggregateQuerySnapshot:rC,Bytes:Hi,CollectionReference:ar,DocumentReference:pt,DocumentSnapshot:$g,FieldPath:Io,FieldValue:ss,Firestore:xn,FirestoreError:G,GeoPoint:Nh,Query:kn,QueryCompositeFilterConstraint:Vh,QueryConstraint:xl,QueryDocumentSnapshot:Ta,QueryFieldFilterConstraint:kl,QueryLimitConstraint:Uh,QueryOrderByConstraint:Fh,QuerySnapshot:Wg,QueryStartAtConstraint:Bh,SnapshotMetadata:ks,Timestamp:Ke,VectorValue:bh,WriteBatch:TC,_AutoId:ig,_ByteString:lt,_DatabaseId:eo,_DocumentKey:X,_EmptyAuthCredentialsProvider:JI,_FieldPath:ot,_cast:At,_logWarn:$i,_validateIsNotUsedTogether:ZS,addDoc:yC,arrayUnion:IC,collection:Wn,connectFirestoreEmulator:eC,count:_C,doc:et,ensureFirestoreConfigured:is,executeWrite:Nl,getAggregateFromServer:EC,getCountFromServer:wC,getDoc:Gi,getDocs:ao,getFirestore:tC,increment:Gu,limit:Bg,onSnapshot:Pl,orderBy:jh,query:Mh,serverTimestamp:_r,setDoc:qg,startAfter:pC,updateDoc:fi,where:fC,writeBatch:SC},Symbol.toStringTag,{value:"Module"}));var Hw={};const Gw="@firebase/database",Kw="1.0.8";/**
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
 */let CC="";function vL(t){CC=t}/**
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
 */class wL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class EL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const AC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wL(e)}}catch{}return new EL},Pi=AC("localStorage"),TL=AC("sessionStorage");/**
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
 */const zs=new fh("@firebase/database"),IL=function(){let t=1;return function(){return t++}}(),RC=function(t){const e=fP(t),n=new uP;n.update(e);const r=n.digest();return zm.encodeByteArray(r)},bl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=bl.apply(null,r):typeof r=="object"?e+=Je(r):e+=r,e+=" "}return e};let Ia=null,Qw=!0;const SL=function(t,e){$(!0,"Can't turn on custom loggers persistently."),zs.logLevel=ae.VERBOSE,Ia=zs.log.bind(zs)},ht=function(...t){if(Qw===!0&&(Qw=!1,Ia===null&&TL.get("logging_enabled")===!0&&SL()),Ia){const e=bl.apply(null,t);Ia(e)}},Dl=function(t){return function(...e){ht(t,...e)}},Op=function(...t){const e="FIREBASE INTERNAL ERROR: "+bl(...t);zs.error(e)},yr=function(...t){const e=`FIREBASE FATAL ERROR: ${bl(...t)}`;throw zs.error(e),new Error(e)},Ot=function(...t){const e="FIREBASE WARNING: "+bl(...t);zs.warn(e)},CL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},AL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lo="[MIN_NAME]",Ki="[MAX_NAME]",os=function(t,e){if(t===e)return 0;if(t===lo||e===Ki)return-1;if(e===lo||t===Ki)return 1;{const n=Yw(t),r=Yw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},RL=function(t,e){return t===e?0:t<e?-1:1},Xo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Je(e))},Gg=function(t){if(typeof t!="object"||t===null)return Je(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Je(e[r]),n+=":",n+=Gg(t[e[r]]);return n+="}",n},xC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kC=function(t){$(!Hg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(h.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},xL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function PL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const NL=new RegExp("^-?(0*)\\d{1,10}$"),bL=-2147483648,DL=2147483647,Yw=function(t){if(NL.test(t)){const e=Number(t);if(e>=bL&&e<=DL)return e}return null},Ao=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},OL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Sa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class LL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ML{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class Ku{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ku.OWNER="owner";/**
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
 */const Kg="5",PC="v",NC="s",bC="r",DC="f",OC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,LC="ls",MC="p",Lp="ac",VC="websocket",FC="long_polling";/**
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
 */class jC{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function VL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function UC(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===VC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===FC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);VL(t)&&(n.ns=t.namespace);const i=[];return gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class FL{constructor(){this.counters_={}}incrementCounter(e,n=1){qn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Wk(this.counters_)}}/**
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
 */const nf={},rf={};function Qg(t){const e=t.toString();return nf[e]||(nf[e]=new FL),nf[e]}function jL(t,e){const n=t.toString();return rf[n]||(rf[n]=e()),rf[n]}/**
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
 */class UL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ao(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Xw="start",BL="close",zL="pLPCommand",$L="pRTLPCB",BC="id",zC="pw",$C="ser",WL="cb",qL="seg",HL="ts",GL="d",KL="dframe",WC=1870,qC=30,QL=WC-qC,YL=25e3,XL=3e4;class Ps{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dl(e),this.stats_=Qg(n),this.urlFn=u=>(this.appCheckToken&&(u[Lp]=this.appCheckToken),UC(n,FC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new UL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(XL)),AL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yg((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xw)this.id=a,this.password=u;else if(o===BL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Xw]="t",r[$C]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[WL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[PC]=Kg,this.transportSessionId&&(r[NC]=this.transportSessionId),this.lastSessionId&&(r[LC]=this.lastSessionId),this.applicationId&&(r[MC]=this.applicationId),this.appCheckToken&&(r[Lp]=this.appCheckToken),typeof location<"u"&&location.hostname&&OC.test(location.hostname)&&(r[bC]=DC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ps.forceAllow_=!0}static forceDisallow(){Ps.forceDisallow_=!0}static isAvailable(){return Ps.forceAllow_?!0:!Ps.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xL()&&!kL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=eI(n),i=xC(r,QL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[KL]="t",r[BC]=e,r[zC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=IL(),window[zL+this.uniqueCallbackIdentifier]=e,window[$L+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[BC]=this.myID,e[zC]=this.myPW,e[$C]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qC+r.length<=WC;){const o=this.pendingSegs.shift();r=r+"&"+qL+i+"="+o.seg+"&"+HL+i+"="+o.ts+"&"+GL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(YL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const JL=16384,ZL=45e3;let Lc=null;typeof MozWebSocket<"u"?Lc=MozWebSocket:typeof WebSocket<"u"&&(Lc=WebSocket);class wn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dl(this.connId),this.stats_=Qg(n),this.connURL=wn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[PC]=Kg,typeof location<"u"&&location.hostname&&OC.test(location.hostname)&&(o[bC]=DC),n&&(o[NC]=n),r&&(o[LC]=r),i&&(o[Lp]=i),s&&(o[MC]=s),UC(e,VC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pi.set("previous_websocket_failure",!0);try{let r;eP(),this.mySock=new Lc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Lc!==null&&!wn.forceDisallow_}static previouslyFailed(){return Pi.isInMemoryStorage||Pi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=qa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xC(n,JL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wn.responsesRequiredToBeHealthy=2;wn.healthyTimeout=3e4;/**
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
 */class rl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ps,wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wn&&wn.isAvailable();let r=n&&!wn.previouslyFailed();if(e.webSocketOnly&&(n||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wn];else{const i=this.transports_=[];for(const s of rl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);rl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rl.globalTransportInitialized_=!1;/**
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
 */const eM=6e4,tM=5e3,nM=10*1024,rM=100*1024,sf="t",Jw="d",iM="s",Zw="r",sM="e",eE="o",tE="a",nE="n",rE="p",oM="h";class aM{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dl("c:"+this.id+":"),this.transportManager_=new rl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Sa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sf in e){const n=e[sf];n===tE?this.upgradeIfSecondaryHealthy_():n===Zw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===eE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Xo("t",e),r=Xo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Xo("t",e),r=Xo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Xo(sf,e);if(Jw in e){const r=e[Jw];if(n===oM){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===iM?this.onConnectionShutdown_(r):n===Zw?this.onReset_(r):n===sM?Op("Server Error: "+r):n===eE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Op("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kg!==r&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Sa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Sa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class HC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class GC{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Mc extends GC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$m()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mc}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const iE=32,sE=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ve("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function oi(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function Xg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function il(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function KC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ve(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return bt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uM(t,e){const n=il(t,0),r=il(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=os(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function QC(t,e){if(oi(t)!==oi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function un(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(oi(t)>oi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class cM{constructor(e,n){this.errorPrefix_=n,this.parts_=il(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=dh(this.parts_[r]);YC(this)}}function hM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=dh(e),YC(t)}function dM(t){const e=t.parts_.pop();t.byteLength_-=dh(e),t.parts_.length>0&&(t.byteLength_-=1)}function YC(t){if(t.byteLength_>sE)throw new Error(t.errorPrefix_+"has a key path longer than "+sE+" bytes ("+t.byteLength_+").");if(t.parts_.length>iE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iE+") or object contains a cycle "+Si(t))}function Si(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Jg extends GC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Jg}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Jo=1e3,fM=60*5*1e3,oE=30*1e3,pM=1.3,mM=3e4,gM="server_kill",aE=3;class lr extends HC{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=lr.nextPersistentConnectionId_++,this.log_=Dl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Jo,this.maxReconnectDelay_=fM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Je(s)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new _l,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;lr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qn(e,"w")){const r=Xs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Op("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Jo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Jo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mM&&(this.reconnectDelay_=Jo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+lr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new aM(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ot(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(gM)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ot(f),u())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],up(this.interruptReasons_)&&(this.reconnectDelay_=Jo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Gg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=aE&&(this.reconnectDelay_=oE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=aE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+CC.replace(/\./g,"-")]=1,$m()?e["framework.cordova"]=1:aI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mc.getInstance().currentlyOnline();return up(this.interruptReasons_)&&e}}lr.nextPersistentConnectionId_=0;lr.nextConnectionId_=0;/**
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
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
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
 */class $h{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(lo,e),i=new ie(lo,n);return this.compare(r,i)!==0}minPost(){return ie.MIN}}/**
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
 */let Su;class XC extends $h{static get __EMPTY_NODE(){return Su}static set __EMPTY_NODE(e){Su=e}compare(e,n){return os(e.name,n.name)}isDefinedOn(e){throw _o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Ki,Su)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Su)}toString(){return".key"}}const $s=new XC;/**
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
 */class Cu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??Bt.EMPTY_NODE,this.right=s??Bt.EMPTY_NODE}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class _M{copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,n=Bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Cu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Cu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Cu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Cu(this.root_,null,this.comparator_,!0,e)}}Bt.EMPTY_NODE=new _M;/**
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
 */function yM(t,e){return os(t.name,e.name)}function Zg(t,e){return os(t,e)}/**
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
 */let Mp;function vM(t){Mp=t}const JC=function(t){return typeof t=="number"?"number:"+kC(t):"string:"+t},ZC=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qn(e,".sv"),"Priority must be a string or number.")}else $(t===Mp||t.isEmpty(),"priority of unexpected type.");$(t===Mp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let lE;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ZC(this.priorityNode_)}static set __childrenNodeConstructor(e){lE=e}static get __childrenNodeConstructor(){return lE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:le(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||oi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+JC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kC(this.value_):e+=this.value_,this.lazyHash_=RC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),s=tt.VALUE_TYPE_ORDER.indexOf(r);return $(i>=0,"Unknown leaf type: "+n),$(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let eA,tA;function wM(t){eA=t}function EM(t){tA=t}class TM extends $h{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?os(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Ki,new tt("[PRIORITY-POST]",tA))}makePost(e,n){const r=eA(e);return new ie(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const ze=new TM;/**
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
 */const IM=Math.log(2);class SM{constructor(e){const n=s=>parseInt(Math.log(s)/IM,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vc=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,p;if(h===0)return null;if(h===1)return f=t[u],p=n?n(f):f,new it(p,f.node,it.BLACK,null,null);{const _=parseInt(h/2,10)+u,w=i(u,_),S=i(_+1,c);return f=t[_],p=n?n(f):f,new it(p,f.node,it.BLACK,w,S)}},s=function(u){let c=null,h=null,f=t.length;const p=function(w,S){const N=f-w,C=f;f-=w;const E=i(N+1,C),x=t[N],P=n?n(x):x;_(new it(P,x.node,S,null,E))},_=function(w){c?(c.left=w,c=w):(h=w,c=w)};for(let w=0;w<u.count;++w){const S=u.nextBitIsOne(),N=Math.pow(2,u.count-(w+1));S?p(N,it.BLACK):(p(N,it.BLACK),p(N,it.RED))}return h},o=new SM(t.length),a=s(o);return new Bt(r||e,a)};/**
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
 */let of;const fs={};class sr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(fs&&ze,"ChildrenNode.ts has not been loaded"),of=of||new sr({".priority":fs},{".priority":ze}),of}get(e){const n=Xs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Bt?n:null}hasIndex(e){return qn(this.indexSet_,e.toString())}addIndex(e,n){$(e!==$s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Vc(r,e.getCompare()):a=fs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new sr(h,c)}addToIndexes(e,n){const r=Ec(this.indexes_,(i,s)=>{const o=Xs(this.indexSet_,s);if($(o,"Missing index implementation for "+s),i===fs)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ie.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Vc(a,o.getCompare())}else return fs;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ie(e.name,a))),u.insert(e,e.node)}});return new sr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ec(this.indexes_,i=>{if(i===fs)return i;{const s=n.get(e.name);return s?i.remove(new ie(e.name,s)):i}});return new sr(r,this.indexSet_)}}/**
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
 */let Zo;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ZC(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zo||(Zo=new J(new Bt(Zg),null,sr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zo}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zo:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Zo:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=le(e);if(r===null)return n;{$(le(e)!==".priority"||oi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ze,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+JC(this.getPriority().val())+":"),this.forEachChild(ze,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":RC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ol?-1:0}withIndex(e){if(e===$s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ze),i=n.getIterator(ze);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$s?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CM extends J{constructor(){super(new Bt(Zg),J.EMPTY_NODE,sr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Ol=new CM;Object.defineProperties(ie,{MIN:{value:new ie(lo,J.EMPTY_NODE)},MAX:{value:new ie(Ki,Ol)}});XC.__EMPTY_NODE=J.EMPTY_NODE;tt.__childrenNodeConstructor=J;vM(Ol);EM(Ol);/**
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
 */const AM=!0;function Xe(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,Xe(e))}if(!(t instanceof Array)&&AM){const n=[];let r=!1;if(gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Xe(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ie(o,u)))}}),n.length===0)return J.EMPTY_NODE;const s=Vc(n,yM,o=>o.name,Zg);if(r){const o=Vc(n,ze.getCompare());return new J(s,Xe(e),new sr({".priority":o},{".priority":ze}))}else return new J(s,Xe(e),sr.Default)}else{let n=J.EMPTY_NODE;return gt(t,(r,i)=>{if(qn(t,r)&&r.substring(0,1)!=="."){const s=Xe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Xe(e))}}wM(Xe);/**
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
 */class RM extends $h{constructor(e){super(),this.indexPath_=e,$(!se(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?os(e.name,n.name):s}makePost(e,n){const r=Xe(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Ol);return new ie(Ki,e)}toString(){return il(this.indexPath_,0).join("/")}}/**
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
 */class xM extends $h{compare(e,n){const r=e.node.compareTo(n.node);return r===0?os(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=Xe(e);return new ie(n,r)}toString(){return".value"}}const kM=new xM;/**
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
 */function nA(t){return{type:"value",snapshotNode:t}}function uo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ol(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class e_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(sl(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(uo(n,r)):o.trackChildChange(ol(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ze,(i,s)=>{n.hasChild(i)||r.trackChildChange(sl(i,s))}),n.isLeafNode()||n.forEachChild(ze,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ol(i,s,o))}else r.trackChildChange(uo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class al{constructor(e){this.indexedFilter_=new e_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=al.getStartPost_(e),this.endPost_=al.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ie(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild(ze,(o,a)=>{s.matches(new ie(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class NM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new al(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ie(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,_)=>f(_,p)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const u=new ie(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,u);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(ol(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(sl(n,f));const S=a.updateImmediateChild(n,J.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(uo(p.name,p.node)),S.updateImmediateChild(p.name,p.node)):S}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(sl(c.name,c.node)),s.trackChildChange(uo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,J.EMPTY_NODE)):e}}/**
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
 */class t_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lo}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ki}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new t_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bM(t){return t.loadsAllData()?new e_(t.getIndex()):t.hasLimit()?new NM(t):new al(t)}function uE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ze?n="$priority":t.index_===kM?n="$value":t.index_===$s?n="$key":($(t.index_ instanceof RM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Je(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Je(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Je(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Je(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ze&&(e.i=t.index_.toString()),e}/**
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
 */class Fc extends HC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Dl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fc.getListenId_(e,r),a={};this.listens_[o]=a;const u=uE(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Xs(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Fc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=uE(e._queryParams),r=e._path.toString(),i=new _l;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=qa(a.responseText)}catch{Ot("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Ot("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class DM{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function jc(){return{value:null,children:new Map}}function rA(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,jc());const i=t.children.get(r);e=Ce(e),rA(i,e,n)}}function Vp(t,e,n){t.value!==null?n(e,t.value):OM(t,(r,i)=>{const s=new ve(e.toString()+"/"+r);Vp(i,s,n)})}function OM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class LM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const hE=10*1e3,MM=30*1e3,VM=5*60*1e3;class FM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new LM(e);const r=hE+(MM-hE)*Math.random();Sa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gt(e,(i,s)=>{s>0&&qn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Sa(this.reportStats_.bind(this),Math.floor(Math.random()*2*VM))}}/**
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
 */var En;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(En||(En={}));function n_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function r_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function i_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Uc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=En.ACK_USER_WRITE,this.source=n_()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Uc(pe(),n,this.revert)}}else return $(le(this.path)===e,"operationForChild called for unrelated child."),new Uc(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class ll{constructor(e,n){this.source=e,this.path=n,this.type=En.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new ll(this.source,pe()):new ll(this.source,Ce(this.path))}}/**
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
 */class Qi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=En.OVERWRITE}operationForChild(e){return se(this.path)?new Qi(this.source,pe(),this.snap.getImmediateChild(e)):new Qi(this.source,Ce(this.path),this.snap)}}/**
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
 */class co{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=En.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Qi(this.source,pe(),n.value):new co(this.source,pe(),n)}else return $(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new co(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ai{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class jM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function UM(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(PM(o.childName,o.snapshotNode))}),ea(t,i,"child_removed",e,r,n),ea(t,i,"child_added",e,r,n),ea(t,i,"child_moved",s,r,n),ea(t,i,"child_changed",e,r,n),ea(t,i,"value",e,r,n),i}function ea(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>zM(t,a,u)),o.forEach(a=>{const u=BM(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function BM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function zM(t,e,n){if(e.childName==null||n.childName==null)throw _o("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Wh(t,e){return{eventCache:t,serverCache:e}}function Ca(t,e,n,r){return Wh(new ai(e,n,r),t.serverCache)}function iA(t,e,n,r){return Wh(t.eventCache,new ai(e,n,r))}function Bc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let af;const $M=()=>(af||(af=new Bt(RL)),af);class Se{constructor(e,n=$M()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return gt(e,(r,i)=>{n=n.set(new ve(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(se(e))return null;{const r=le(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Be(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new Se(null)}}set(e,n){if(se(e))return new Se(n,this.children);{const r=le(e),s=(this.children.get(r)||new Se(null)).set(Ce(e),n),o=this.children.insert(r,s);return new Se(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Se(null):new Se(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(se(e))return n;{const r=le(e),s=(this.children.get(r)||new Se(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Se(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=le(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=le(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Be(n,i),r):new Se(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Cn{constructor(e){this.writeTree_=e}static empty(){return new Cn(new Se(null))}}function Aa(t,e,n){if(se(e))return new Cn(new Se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=bt(i,e);return s=s.updateChild(o,n),new Cn(t.writeTree_.set(i,s))}else{const i=new Se(n),s=t.writeTree_.setTree(e,i);return new Cn(s)}}}function Fp(t,e,n){let r=t;return gt(n,(i,s)=>{r=Aa(r,Be(e,i),s)}),r}function dE(t,e){if(se(e))return Cn.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new Cn(n)}}function jp(t,e){return as(t,e)!=null}function as(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function fE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ze,(r,i)=>{e.push(new ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ie(r,i.value))}),e}function Jr(t,e){if(se(e))return t;{const n=as(t,e);return n!=null?new Cn(new Se(n)):new Cn(t.writeTree_.subtree(e))}}function Up(t){return t.writeTree_.isEmpty()}function ho(t,e){return sA(pe(),t.writeTree_,e)}function sA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?($(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=sA(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
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
 */function qh(t,e){return uA(e,t)}function WM(t,e,n,r,i){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Aa(t.visibleWrites,e,n)),t.lastWriteId=r}function qM(t,e,n,r){$(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Fp(t.visibleWrites,e,n),t.lastWriteId=r}function HM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function GM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&KM(a,r.path)?i=!1:un(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return QM(t),!0;if(r.snap)t.visibleWrites=dE(t.visibleWrites,r.path);else{const a=r.children;gt(a,u=>{t.visibleWrites=dE(t.visibleWrites,Be(r.path,u))})}return!0}else return!1}function KM(t,e){if(t.snap)return un(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&un(Be(t.path,n),e))return!0;return!1}function QM(t){t.visibleWrites=oA(t.allWrites,YM,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function YM(t){return t.visible}function oA(t,e,n){let r=Cn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)un(n,o)?(a=bt(n,o),r=Aa(r,a,s.snap)):un(o,n)&&(a=bt(o,n),r=Aa(r,pe(),s.snap.getChild(a)));else if(s.children){if(un(n,o))a=bt(n,o),r=Fp(r,a,s.children);else if(un(o,n))if(a=bt(o,n),se(a))r=Fp(r,pe(),s.children);else{const u=Xs(s.children,le(a));if(u){const c=u.getChild(Ce(a));r=Aa(r,pe(),c)}}}else throw _o("WriteRecord should have .snap or .children")}}return r}function aA(t,e,n,r,i){if(!r&&!i){const s=as(t.visibleWrites,e);if(s!=null)return s;{const o=Jr(t.visibleWrites,e);if(Up(o))return n;if(n==null&&!jp(o,pe()))return null;{const a=n||J.EMPTY_NODE;return ho(o,a)}}}else{const s=Jr(t.visibleWrites,e);if(!i&&Up(s))return n;if(!i&&n==null&&!jp(s,pe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(un(c.path,e)||un(e,c.path))},a=oA(t.allWrites,o,e),u=n||J.EMPTY_NODE;return ho(a,u)}}}function XM(t,e,n){let r=J.EMPTY_NODE;const i=as(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ze,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Jr(t.visibleWrites,e);return n.forEachChild(ze,(o,a)=>{const u=ho(Jr(s,new ve(o)),a);r=r.updateImmediateChild(o,u)}),fE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Jr(t.visibleWrites,e);return fE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function JM(t,e,n,r,i){$(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(jp(t.visibleWrites,s))return null;{const o=Jr(t.visibleWrites,s);return Up(o)?i.getChild(n):ho(o,i.getChild(n))}}function ZM(t,e,n,r){const i=Be(e,n),s=as(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Jr(t.visibleWrites,i);return ho(o,r.getNode().getImmediateChild(n))}else return null}function e2(t,e){return as(t.visibleWrites,e)}function t2(t,e,n,r,i,s,o){let a;const u=Jr(t.visibleWrites,e),c=as(u,pe());if(c!=null)a=c;else if(n!=null)a=ho(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=p.getNext();for(;_&&h.length<i;)f(_,r)!==0&&h.push(_),_=p.getNext();return h}else return[]}function n2(){return{visibleWrites:Cn.empty(),allWrites:[],lastWriteId:-1}}function zc(t,e,n,r){return aA(t.writeTree,t.treePath,e,n,r)}function s_(t,e){return XM(t.writeTree,t.treePath,e)}function pE(t,e,n,r){return JM(t.writeTree,t.treePath,e,n,r)}function $c(t,e){return e2(t.writeTree,Be(t.treePath,e))}function r2(t,e,n,r,i,s){return t2(t.writeTree,t.treePath,e,n,r,i,s)}function o_(t,e,n){return ZM(t.writeTree,t.treePath,e,n)}function lA(t,e){return uA(Be(t.treePath,e),t.writeTree)}function uA(t,e){return{treePath:t,writeTree:e}}/**
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
 */class i2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ol(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,sl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,uo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ol(r,e.snapshotNode,i.oldSnap));else throw _o("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class s2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const cA=new s2;class a_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ai(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return o_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yi(this.viewCache_),s=r2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function o2(t){return{filter:t}}function a2(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function l2(t,e,n,r,i){const s=new i2;let o,a;if(n.type===En.OVERWRITE){const c=n;c.source.fromUser?o=Bp(t,e,c.path,c.snap,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=Wc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===En.MERGE){const c=n;c.source.fromUser?o=c2(t,e,c.path,c.children,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=zp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===En.ACK_USER_WRITE){const c=n;c.revert?o=f2(t,e,c.path,r,i,s):o=h2(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===En.LISTEN_COMPLETE)o=d2(t,e,n.path,r,s);else throw _o("Unknown operation type: "+n.type);const u=s.getChanges();return u2(e,o,u),{viewCache:o,changes:u}}function u2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Bc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(nA(Bc(e)))}}function hA(t,e,n,r,i,s){const o=e.eventCache;if($c(r,n)!=null)return e;{let a,u;if(se(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Yi(e),h=c instanceof J?c:J.EMPTY_NODE,f=s_(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=zc(r,Yi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=le(n);if(c===".priority"){$(oi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=pE(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ce(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const p=pE(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(c).updateChild(h,p):f=o.getNode().getImmediateChild(c)}else f=o_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return Ca(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Wc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),_,null)}else{const _=le(n);if(!u.isCompleteForPath(n)&&oi(n)>1)return e;const w=Ce(n),N=u.getNode().getImmediateChild(_).updateChild(w,r);_===".priority"?c=h.updatePriority(u.getNode(),N):c=h.updateChild(u.getNode(),_,N,w,cA,null)}const f=iA(e,c,u.isFullyInitialized()||se(n),h.filtersNodes()),p=new a_(i,f,s);return hA(t,f,n,i,p,a)}function Bp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new a_(i,e,s);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Ca(e,c,!0,t.filter.filtersNodes());else{const f=le(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Ca(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Ce(n),_=a.getNode().getImmediateChild(f);let w;if(se(p))w=r;else{const S=h.getCompleteChild(f);S!=null?Xg(p)===".priority"&&S.getChild(KC(p)).isEmpty()?w=S:w=S.updateChild(p,r):w=J.EMPTY_NODE}if(_.equals(w))u=e;else{const S=t.filter.updateChild(a.getNode(),f,w,p,h,o);u=Ca(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function mE(t,e){return t.eventCache.isCompleteForChild(e)}function c2(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=Be(n,u);mE(e,le(h))&&(a=Bp(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=Be(n,u);mE(e,le(h))||(a=Bp(t,a,h,c,i,s,o))}),a}function gE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function zp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;se(n)?c=r:c=new Se(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),w=gE(t,_,p);u=Wc(t,u,new ve(f),w,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const _=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!_){const w=e.serverCache.getNode().getImmediateChild(f),S=gE(t,w,p);u=Wc(t,u,new ve(f),S,i,s,o,a)}}),u}function h2(t,e,n,r,i,s,o){if($c(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(se(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Wc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(se(n)){let c=new Se(null);return u.getNode().forEachChild($s,(h,f)=>{c=c.set(new ve(h),f)}),zp(t,e,n,c,i,s,a,o)}else return e}else{let c=new Se(null);return r.foreach((h,f)=>{const p=Be(n,h);u.isCompleteForPath(p)&&(c=c.set(h,u.getNode().getChild(p)))}),zp(t,e,n,c,i,s,a,o)}}function d2(t,e,n,r,i){const s=e.serverCache,o=iA(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return hA(t,o,n,r,cA,i)}function f2(t,e,n,r,i,s){let o;if($c(r,n)!=null)return e;{const a=new a_(r,e,i),u=e.eventCache.getNode();let c;if(se(n)||le(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=zc(r,Yi(e));else{const f=e.serverCache.getNode();$(f instanceof J,"serverChildren would be complete if leaf node"),h=s_(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=le(n);let f=o_(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Ce(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,J.EMPTY_NODE,Ce(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zc(r,Yi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||$c(r,pe())!=null,Ca(e,c,o,t.filter.filtersNodes())}}/**
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
 */class p2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new e_(r.getIndex()),s=bM(r);this.processor_=o2(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),h=new ai(u,o.isFullyInitialized(),i.filtersNodes()),f=new ai(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Wh(f,h),this.eventGenerator_=new jM(this.query_)}get query(){return this.query_}}function m2(t){return t.viewCache_.serverCache.getNode()}function g2(t){return Bc(t.viewCache_)}function _2(t,e){const n=Yi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function _E(t){return t.eventRegistrations_.length===0}function y2(t,e){t.eventRegistrations_.push(e)}function yE(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function vE(t,e,n,r){e.type===En.MERGE&&e.source.queryId!==null&&($(Yi(t.viewCache_),"We should always have a full cache before handling merges"),$(Bc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=l2(t.processor_,i,e,n,r);return a2(t.processor_,s.viewCache),$(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,dA(t,s.changes,s.viewCache.eventCache.getNode(),null)}function v2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ze,(s,o)=>{r.push(uo(s,o))}),n.isFullyInitialized()&&r.push(nA(n.getNode())),dA(t,r,n.getNode(),e)}function dA(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return UM(t.eventGenerator_,e,n,i)}/**
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
 */let qc;class fA{constructor(){this.views=new Map}}function w2(t){$(!qc,"__referenceConstructor has already been defined"),qc=t}function E2(){return $(qc,"Reference.ts has not been loaded"),qc}function T2(t){return t.views.size===0}function l_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return $(s!=null,"SyncTree gave us an op for an invalid query."),vE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(vE(o,e,n,r));return s}}function pA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=zc(n,i?r:null),u=!1;a?u=!0:r instanceof J?(a=s_(n,r),u=!1):(a=J.EMPTY_NODE,u=!1);const c=Wh(new ai(a,u,!1),new ai(r,i,!1));return new p2(e,c)}return o}function I2(t,e,n,r,i,s){const o=pA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),y2(o,n),v2(o,n)}function S2(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=li(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(yE(c,n,r)),_E(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(yE(u,n,r)),_E(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!li(t)&&s.push(new(E2())(e._repo,e._path)),{removed:s,events:o}}function mA(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Zr(t,e){let n=null;for(const r of t.views.values())n=n||_2(r,e);return n}function gA(t,e){if(e._queryParams.loadsAllData())return Hh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function _A(t,e){return gA(t,e)!=null}function li(t){return Hh(t)!=null}function Hh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Hc;function C2(t){$(!Hc,"__referenceConstructor has already been defined"),Hc=t}function A2(){return $(Hc,"Reference.ts has not been loaded"),Hc}let R2=1;class wE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=n2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yA(t,e,n,r,i){return WM(t.pendingWriteTree_,e,n,r,i),i?Ro(t,new Qi(n_(),e,n)):[]}function x2(t,e,n,r){qM(t.pendingWriteTree_,e,n,r);const i=Se.fromObject(n);return Ro(t,new co(n_(),e,i))}function Ur(t,e,n=!1){const r=HM(t.pendingWriteTree_,e);if(GM(t.pendingWriteTree_,e)){let s=new Se(null);return r.snap!=null?s=s.set(pe(),!0):gt(r.children,o=>{s=s.set(new ve(o),!0)}),Ro(t,new Uc(r.path,s,n))}else return[]}function Ll(t,e,n){return Ro(t,new Qi(r_(),e,n))}function k2(t,e,n){const r=Se.fromObject(n);return Ro(t,new co(r_(),e,r))}function P2(t,e){return Ro(t,new ll(r_(),e))}function N2(t,e,n){const r=c_(t,n);if(r){const i=h_(r),s=i.path,o=i.queryId,a=bt(s,e),u=new ll(i_(o),a);return d_(t,s,u)}else return[]}function vA(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||_A(o,e))){const u=S2(o,e,n,r);T2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,_)=>li(_));if(h&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const _=L2(p);for(let w=0;w<_.length;++w){const S=_[w],N=S.query,C=IA(t,S);t.listenProvider_.startListening(Ra(N),ul(t,N),C.hashFn,C.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Ra(e),null):c.forEach(p=>{const _=t.queryToTagMap.get(Gh(p));t.listenProvider_.stopListening(Ra(p),_)}))}M2(t,c)}return a}function wA(t,e,n,r){const i=c_(t,r);if(i!=null){const s=h_(i),o=s.path,a=s.queryId,u=bt(o,e),c=new Qi(i_(a),u,n);return d_(t,o,c)}else return[]}function b2(t,e,n,r){const i=c_(t,r);if(i){const s=h_(i),o=s.path,a=s.queryId,u=bt(o,e),c=Se.fromObject(n),h=new co(i_(a),u,c);return d_(t,o,h)}else return[]}function D2(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const w=bt(p,i);s=s||Zr(_,w),o=o||li(_)});let a=t.syncPointTree_.get(i);a?(o=o||li(a),s=s||Zr(a,pe())):(a=new fA,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,w)=>{const S=Zr(w,pe());S&&(s=s.updateImmediateChild(_,S))}));const c=_A(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=Gh(e);$(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=V2();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const h=qh(t.pendingWriteTree_,i);let f=I2(a,e,n,h,s,u);if(!c&&!o&&!r){const p=gA(a,e);f=f.concat(F2(t,e,p))}return f}function u_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=bt(o,e),c=Zr(a,u);if(c)return c});return aA(i,e,s,n,!0)}function O2(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=bt(c,n);r=r||Zr(h,f)});let i=t.syncPointTree_.get(n);i?r=r||Zr(i,pe()):(i=new fA,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new ai(r,!0,!1):null,a=qh(t.pendingWriteTree_,e._path),u=pA(i,e,a,s?o.getNode():J.EMPTY_NODE,s);return g2(u)}function Ro(t,e){return EA(e,t.syncPointTree_,null,qh(t.pendingWriteTree_,pe()))}function EA(t,e,n,r){if(se(t.path))return TA(t,e,n,r);{const i=e.get(pe());n==null&&i!=null&&(n=Zr(i,pe()));let s=[];const o=le(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=lA(r,o);s=s.concat(EA(a,u,c,h))}return i&&(s=s.concat(l_(i,t,r,n))),s}}function TA(t,e,n,r){const i=e.get(pe());n==null&&i!=null&&(n=Zr(i,pe()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=lA(r,o),h=t.operationForChild(o);h&&(s=s.concat(TA(h,a,u,c)))}),i&&(s=s.concat(l_(i,t,r,n))),s}function IA(t,e){const n=e.query,r=ul(t,n);return{hashFn:()=>(m2(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?N2(t,n._path,r):P2(t,n._path);{const s=PL(i,n);return vA(t,n,null,s)}}}}function ul(t,e){const n=Gh(e);return t.queryToTagMap.get(n)}function Gh(t){return t._path.toString()+"$"+t._queryIdentifier}function c_(t,e){return t.tagToQueryMap.get(e)}function h_(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function d_(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const i=qh(t.pendingWriteTree_,e);return l_(r,n,i,null)}function L2(t){return t.fold((e,n,r)=>{if(n&&li(n))return[Hh(n)];{let i=[];return n&&(i=mA(n)),gt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ra(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(A2())(t._repo,t._path):t}function M2(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Gh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function V2(){return R2++}function F2(t,e,n){const r=e._path,i=ul(t,e),s=IA(t,n),o=t.listenProvider_.startListening(Ra(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)$(!li(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!se(c)&&h&&li(h))return[Hh(h).query];{let p=[];return h&&(p=p.concat(mA(h).map(_=>_.query))),gt(f,(_,w)=>{p=p.concat(w)}),p}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(Ra(h),ul(t,h))}}return o}/**
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
 */class f_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new f_(n)}node(){return this.node_}}class p_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new p_(this.syncTree_,n)}node(){return u_(this.syncTree_,this.path_)}}const j2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},EE=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return U2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return B2(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},U2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},B2=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},SA=function(t,e,n,r){return m_(e,new p_(n,t),r)},CA=function(t,e,n){return m_(t,new f_(e),n)};function m_(t,e,n){const r=t.getPriority().val(),i=EE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=EE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,Xe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild(ze,(a,u)=>{const c=m_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class g_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function __(t,e){let n=e instanceof ve?e:new ve(e),r=t,i=le(n);for(;i!==null;){const s=Xs(r.node.children,i)||{children:{},childCount:0};r=new g_(i,r,s),n=Ce(n),i=le(n)}return r}function xo(t){return t.node.value}function AA(t,e){t.node.value=e,$p(t)}function RA(t){return t.node.childCount>0}function z2(t){return xo(t)===void 0&&!RA(t)}function Kh(t,e){gt(t.node.children,(n,r)=>{e(new g_(n,t,r))})}function xA(t,e,n,r){n&&e(t),Kh(t,i=>{xA(i,e,!0)})}function $2(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ml(t){return new ve(t.parent===null?t.name:Ml(t.parent)+"/"+t.name)}function $p(t){t.parent!==null&&W2(t.parent,t.name,t)}function W2(t,e,n){const r=z2(n),i=qn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,$p(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$p(t))}/**
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
 */const q2=/[\[\].#$\/\u0000-\u001F\u007F]/,H2=/[\[\].#$\u0000-\u001F\u007F]/,lf=10*1024*1024,y_=function(t){return typeof t=="string"&&t.length!==0&&!q2.test(t)},kA=function(t){return typeof t=="string"&&t.length!==0&&!H2.test(t)},G2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kA(t)},K2=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Hg(t)||t&&typeof t=="object"&&qn(t,".sv")},Q2=function(t,e,n,r){Qh(hh(t,"value"),e,n)},Qh=function(t,e,n){const r=n instanceof ve?new cM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Si(r));if(typeof e=="function")throw new Error(t+"contains a function "+Si(r)+" with contents = "+e.toString());if(Hg(e))throw new Error(t+"contains "+e.toString()+" "+Si(r));if(typeof e=="string"&&e.length>lf/3&&dh(e)>lf)throw new Error(t+"contains a string greater than "+lf+" utf8 bytes "+Si(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!y_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Si(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hM(r,o),Qh(t,a,r),dM(r)}),i&&s)throw new Error(t+' contains ".value" child '+Si(r)+" in addition to actual children.")}},Y2=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=il(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!y_(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(uM);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&un(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},X2=function(t,e,n,r){const i=hh(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];gt(e,(o,a)=>{const u=new ve(o);if(Qh(i,a,Be(n,u)),Xg(u)===".priority"&&!K2(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),Y2(i,s)},PA=function(t,e,n,r){if(!kA(n))throw new Error(hh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},J2=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),PA(t,e,n)},NA=function(t,e){if(le(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Z2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!y_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!G2(n))throw new Error(hh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class eV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function v_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!QC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function fn(t,e,n){v_(t,n),tV(t,r=>un(r,e)||un(e,r))}function tV(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(nV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ia&&ht("event: "+n.toString()),Ao(r)}}}/**
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
 */const rV="repo_interrupt",iV=25;class sV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jc(),this.transactionQueueTree_=new g_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oV(t,e,n){if(t.stats_=Qg(t.repoInfo_),t.forceRestClient_||OL())t.server_=new Fc(t.repoInfo_,(r,i,s,o)=>{TE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>IE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new lr(t.repoInfo_,e,(r,i,s,o)=>{TE(t,r,i,s,o)},r=>{IE(t,r)},r=>{lV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=jL(t.repoInfo_,()=>new FM(t.stats_,t.server_)),t.infoData_=new DM,t.infoSyncTree_=new wE({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Ll(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),w_(t,"connected",!1),t.serverSyncTree_=new wE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);fn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function aV(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yh(t){return j2({timestamp:aV(t)})}function TE(t,e,n,r,i){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Ec(n,c=>Xe(c));o=b2(t.serverSyncTree_,s,u,i)}else{const u=Xe(n);o=wA(t.serverSyncTree_,s,u,i)}else if(r){const u=Ec(n,c=>Xe(c));o=k2(t.serverSyncTree_,s,u)}else{const u=Xe(n);o=Ll(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=fo(t,s)),fn(t.eventQueue_,a,o)}function IE(t,e){w_(t,"connected",e),e===!1&&dV(t)}function lV(t,e){gt(e,(n,r)=>{w_(t,n,r)})}function w_(t,e,n){const r=new ve("/.info/"+e),i=Xe(n);t.infoData_.updateSnapshot(r,i);const s=Ll(t.infoSyncTree_,r,i);fn(t.eventQueue_,r,s)}function E_(t){return t.nextWriteId_++}function uV(t,e,n){const r=O2(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Xe(i).withIndex(e._queryParams.getIndex());D2(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ll(t.serverSyncTree_,e._path,s);else{const a=ul(t.serverSyncTree_,e);o=wA(t.serverSyncTree_,e._path,s,a)}return fn(t.eventQueue_,e._path,o),vA(t.serverSyncTree_,e,n,null,!0),s},i=>(Vl(t,"get for query "+Je(e)+" failed: "+i),Promise.reject(new Error(i))))}function cV(t,e,n,r,i){Vl(t,"set",{path:e.toString(),value:n,priority:r});const s=Yh(t),o=Xe(n,r),a=u_(t.serverSyncTree_,e),u=CA(o,a,s),c=E_(t),h=yA(t.serverSyncTree_,e,u,c,!0);v_(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const w=p==="ok";w||Ot("set at "+e+" failed: "+p);const S=Ur(t.serverSyncTree_,c,!w);fn(t.eventQueue_,e,S),Wp(t,i,p,_)});const f=I_(t,e);fo(t,f),fn(t.eventQueue_,f,[])}function hV(t,e,n,r){Vl(t,"update",{path:e.toString(),value:n});let i=!0;const s=Yh(t),o={};if(gt(n,(a,u)=>{i=!1,o[a]=SA(Be(e,a),Xe(u),t.serverSyncTree_,s)}),i)ht("update() called with empty data.  Don't do anything."),Wp(t,r,"ok",void 0);else{const a=E_(t),u=x2(t.serverSyncTree_,e,o,a);v_(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Ot("update at "+e+" failed: "+c);const p=Ur(t.serverSyncTree_,a,!f),_=p.length>0?fo(t,e):e;fn(t.eventQueue_,_,p),Wp(t,r,c,h)}),gt(n,c=>{const h=I_(t,Be(e,c));fo(t,h)}),fn(t.eventQueue_,e,[])}}function dV(t){Vl(t,"onDisconnectEvents");const e=Yh(t),n=jc();Vp(t.onDisconnect_,pe(),(i,s)=>{const o=SA(i,s,t.serverSyncTree_,e);rA(n,i,o)});let r=[];Vp(n,pe(),(i,s)=>{r=r.concat(Ll(t.serverSyncTree_,i,s));const o=I_(t,i);fo(t,o)}),t.onDisconnect_=jc(),fn(t.eventQueue_,pe(),r)}function fV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rV)}function Vl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ht(n,...e)}function Wp(t,e,n,r){e&&Ao(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function bA(t,e,n){return u_(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function T_(t,e=t.transactionQueueTree_){if(e||Xh(t,e),xo(e)){const n=OA(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pV(t,Ml(e),n)}else RA(e)&&Kh(e,n=>{T_(t,n)})}function pV(t,e,n){const r=n.map(c=>c.currentWriteId),i=bA(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];$(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=bt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Vl(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Ur(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Xh(t,__(t.transactionQueueTree_,e)),T_(t,t.transactionQueueTree_),fn(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)Ao(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ot("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}fo(t,e)}},o)}function fo(t,e){const n=DA(t,e),r=Ml(n),i=OA(t,n);return mV(t,i,r),r}function mV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=bt(n,u.path);let h=!1,f;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(Ur(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=iV)h=!0,f="maxretry",i=i.concat(Ur(t.serverSyncTree_,u.currentWriteId,!0));else{const p=bA(t,u.path,o);u.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){Qh("transaction failed: Data returned ",_,u.path);let w=Xe(_);typeof _=="object"&&_!=null&&qn(_,".priority")||(w=w.updatePriority(p.getPriority()));const N=u.currentWriteId,C=Yh(t),E=CA(w,p,C);u.currentOutputSnapshotRaw=w,u.currentOutputSnapshotResolved=E,u.currentWriteId=E_(t),o.splice(o.indexOf(N),1),i=i.concat(yA(t.serverSyncTree_,u.path,E,u.currentWriteId,u.applyLocally)),i=i.concat(Ur(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",i=i.concat(Ur(t.serverSyncTree_,u.currentWriteId,!0))}fn(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Xh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ao(r[a]);T_(t,t.transactionQueueTree_)}function DA(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&xo(r)===void 0;)r=__(r,n),e=Ce(e),n=le(e);return r}function OA(t,e){const n=[];return LA(t,e,n),n.sort((r,i)=>r.order-i.order),n}function LA(t,e,n){const r=xo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kh(e,i=>{LA(t,i,n)})}function Xh(t,e){const n=xo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,AA(e,n.length>0?n:void 0)}Kh(e,r=>{Xh(t,r)})}function I_(t,e){const n=Ml(DA(t,e)),r=__(t.transactionQueueTree_,e);return $2(r,i=>{uf(t,i)}),uf(t,r),xA(r,i=>{uf(t,i)}),n}function uf(t,e){const n=xo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ur(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?AA(e,void 0):n.length=s+1,fn(t.eventQueue_,Ml(e),i);for(let o=0;o<r.length;o++)Ao(r[o])}}/**
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
 */function gV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _V(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const SE=function(t,e){const n=yV(t),r=n.namespace;n.domain==="firebase.com"&&yr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||CL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ve(n.pathString)}},yV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=gV(t.substring(h,f)));const p=_V(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),n=e.substring(w+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class vV{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class wV{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class EV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class S_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:Xg(this._path)}get ref(){return new Er(this._repo,this._path)}get _queryIdentifier(){const e=cE(this._queryParams),n=Gg(e);return n==="{}"?"default":n}get _queryObject(){return cE(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof S_))return!1;const n=this._repo===e._repo,r=QC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+lM(this._path)}}class Er extends S_{constructor(e,n){super(e,n,new t_,!1)}get parent(){const e=KC(this._path);return e===null?null:new Er(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=qp(this.ref,e);return new cl(this._node.getChild(n),r,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new cl(i,qp(this.ref,r),ze)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xi(t,e){return t=Te(t),t._checkNotDeleted("ref"),e!==void 0?qp(t._root,e):t._root}function qp(t,e){return t=Te(t),le(t._path)===null?J2("child","path",e):PA("child","path",e),new Er(t._repo,Be(t._path,e))}function TV(t){return NA("remove",t._path),Gc(t,null)}function Gc(t,e){t=Te(t),NA("set",t._path),Q2("set",e,t._path);const n=new _l;return cV(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function C_(t,e){X2("update",e,t._path);const n=new _l;return hV(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function IV(t){t=Te(t);const e=new EV(()=>{}),n=new A_(e);return uV(t._repo,t,n).then(r=>new cl(r,new Er(t._repo,t._path),t._queryParams.getIndex()))}class A_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new vV("value",this,new cl(e.snapshotNode,new Er(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wV(this,e,n):null}matches(e){return e instanceof A_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}w2(Er);C2(Er);/**
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
 */const SV="FIREBASE_DATABASE_EMULATOR_HOST",Hp={};let CV=!1;function AV(t,e,n,r){t.repoInfo_=new jC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function RV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||yr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=SE(s,i),a=o.repoInfo,u;typeof process<"u"&&Hw&&(u=Hw[SV]),u?(s=`http://${u}?ns=${a.namespace}`,o=SE(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new ML(t.name,t.options,e);Z2("Invalid Firebase Database URL",o),se(o.path)||yr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=kV(a,t,c,new LL(t.name,n));return new PV(h,t)}function xV(t,e){const n=Hp[e];(!n||n[t.key]!==t)&&yr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fV(t),delete n[t.key]}function kV(t,e,n,r){let i=Hp[e.name];i||(i={},Hp[e.name]=i);let s=i[t.toURLString()];return s&&yr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new sV(t,CV,n,r),i[t.toURLString()]=s,s}class PV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Er(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yr("Cannot call "+e+" on a deleted database.")}}function NV(t=qm(),e){const n=ph(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=rI("database");r&&bV(n,...r)}return n}function bV(t,e,n,r={}){t=Te(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&yr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&yr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ku(Ku.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:oI(r.mockUserToken,t.app.options.projectId);s=new Ku(o)}AV(i,e,n,s)}/**
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
 */function DV(t){vL(es),Ui(new ni("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return RV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Vn(Gw,Kw,t),Vn(Gw,Kw,"esm2017")}lr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};lr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DV();const OV={apiKey:"AIzaSyDWqss4olY-yE58OpUd9FsCAgTuOrHUyfc",authDomain:"mathgame-prod.firebaseapp.com",projectId:"mathgame-prod",storageBucket:"mathgame-prod.firebasestorage.app",messagingSenderId:"823268749100",appId:"1:823268749100:web:88747dc6fd11cfd90a0689",databaseURL:"https://mathgame-prod-default-rtdb.asia-southeast1.firebasedatabase.app/"},cf=10,Jh=d1().length?getApp():hI(OV);console.log(`Firebase initialized with project ID: ${Jh.options.projectId}`);const hf=wb(Jh),ye=tC(Jh);let Gp=null;{try{Gp=NV(Jh),C_(Xi(Gp,"s/connTest"),{next:-1}).then(()=>{console.log("Successfully sned next -1")}).catch(t=>{console.log("Failed to send next -1 to connTest"+t)})}catch(t){console.error(t),console.log("Error while initializing rtbd")}console.log("Running in production mode, connected to real Firebase services")}const LV=Gp,MV="SFE4dxPecTblEj3ho8RVjVf8niZ2,Zr9corg0elT4noDaokj1KJxm2gf1".split(",").map(t=>t.trim())??[],MA=H.createContext(null);function VV({children:t}){const[e,n]=H.useState(void 0),[r,i]=H.useState(!1);H.useEffect(()=>lN(hf,u=>{n(u??null),i(u?MV.includes(u.uid):!1)}),[]);const s=()=>kN(hf,new Xn),o=()=>uN(hf);return g.jsx(MA.Provider,{value:{user:e,isAdmin:r,signIn:s,logOut:o},children:t})}const Fl=()=>H.useContext(MA);function FV(){const{user:t,logOut:e}=Fl();return g.jsx("div",{className:"center-wrap",children:g.jsxs("div",{className:"card",style:{textAlign:"center",padding:"2.5rem"},children:[g.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🚫"}),g.jsx("h2",{style:{fontFamily:"Fredoka One",fontSize:"1.5rem",marginBottom:"0.5rem"},children:"Access Denied"}),g.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:"0.5rem"},children:[t==null?void 0:t.email," is not authorised to access this panel."]}),g.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"2rem"},children:"Contact the app owner if you think this is a mistake."}),g.jsx("button",{className:"btn btn-outline btn-full",onClick:e,children:"Sign out"})]})})}const jV="modulepreload",UV=function(t,e){return new URL(t,e).href},CE={},BV=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=UV(c,r),c in CE)return;CE[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const S=o[w];if(S.href===c&&(!h||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":jV,h||(_.as="script"),_.crossOrigin="",_.href=c,u&&_.setAttribute("nonce",u),document.head.appendChild(_),h)return new Promise((w,S)=>{_.addEventListener("load",w),_.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},hl=9999999;async function VA(){return(await ao(Wn(ye,"students"))).docs.map(e=>({uid:e.id,...e.data()}))}async function AE(t){const e=Wn(ye,"scores",t,"trials");return(await wC(e)).data().count}function zV(t,e=10,n){const r=Mh(Wn(ye,"scores",t,"trials"),jh("timestamp","desc"),Bg(e));return Pl(r,i=>{const s=i.docs.map(a=>({id:a.id,...a.data()})),o=i.docs[i.docs.length-1]??null;n({trials:s,lastDoc:o})})}async function $V(t,e=10){const{query:n,collection:r,orderBy:i,limit:s,getDocs:o}=await BV(async()=>{const{query:c,collection:h,orderBy:f,limit:p,getDocs:_}=await Promise.resolve().then(()=>yL);return{query:c,collection:h,orderBy:f,limit:p,getDocs:_}},void 0,import.meta.url),a=n(r(ye,"scores",t,"trials"),i("timestamp","desc"),s(e));return(await o(a)).docs.map(c=>({id:c.id,...c.data()})).reverse()}async function FA(t,e=10,n=null){const r=Wn(ye,"scores",t,"trials"),i=[jh("timestamp","desc"),Bg(e)];n&&i.push(pC(n));const s=Mh(r,...i),o=await ao(s),a=o.docs.map(c=>({id:c.id,...c.data()})),u=o.docs[o.docs.length-1]??null;return{trials:a,lastDoc:u}}async function jA(t){const e=et(ye,"scores",t,"stats","global"),n=et(ye,"scores",t,"stats","groups"),[r,i]=await Promise.all([Gi(e),Gi(n)]);return{global:r.exists()?r.data():null,groups:i.exists()?i.data():{}}}function WV(t,e){return Pl(et(ye,"challenges",t),n=>{n.exists()&&e({id:n.id,...n.data()})})}function qV(t,e){return Pl(Wn(ye,"challenges",t,"participants"),n=>{e(n.docs.map(r=>({uid:r.id,...r.data()})))})}function HV({uid:t}){var x;const[e,n]=H.useState(null),[r,i]=H.useState([]);if(H.useEffect(()=>{jA(t).then(n),FA(t,20,null).then(({trials:P})=>{i([...P].reverse())})},[t]),e===null)return g.jsx(JV,{});if(!e.global)return g.jsx(ZV,{});const s=e.global,o=Object.values(e.groups||{}).sort((P,L)=>P.digits!==L.digits?P.digits-L.digits:P.count-L.count),a=s.totalGames||0,u=s.totalCorrect||0,c=s.totalScore||0,h=s.accuracy?Math.round(s.accuracy):0,f=s.avgScore?Math.round(s.avgScore):0,p=s.maxScore??0,_=s.bestStreak??0,w=s.currentStreak??0,S=s.totalGames?Math.round(s.totalTime/s.totalGames):0,N=(x=s.upd_at)!=null&&x.toDate?UA(s.upd_at.toDate()):"—",C=s.minScore?s.minScore===hl||s.minScore===0?"-":s.minScore:"-",E=s.minTime?s.minTime===hl||s.minTime===0?"-":s.minTime+"s":"-";return g.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[g.jsx(GV,{pct:h,correct:u,total:a}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,alignContent:"start"},children:[g.jsx(ps,{label:"Total score",value:`${c}🪙`,color:"var(--purple-dark)",icon:"🏆"}),g.jsx(ps,{label:"Avg score",value:`${f}🪙`,color:"var(--blue-dark)",icon:"📊"}),g.jsx(ps,{label:"Best score",value:`${p}🪙`,color:"var(--green-dark)",icon:"⭐"}),g.jsx(ps,{label:"Best streak",value:`${_}🔥`,color:"var(--yellow-dark)",icon:""}),g.jsx(ps,{label:"Avg time",value:`${S}s`,color:"var(--blue)",icon:"⏱"}),g.jsx(ps,{label:"Games played",value:a,color:"var(--text)",icon:"🎮"})]})]}),g.jsxs("a",{href:"ScoringGuide.html",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px",background:"linear-gradient(135deg, #fff8e0, #ffefc0)",border:"2px solid #ffe090",borderRadius:14,textDecoration:"none",color:"var(--yellow-dark)",fontWeight:800,fontSize:"0.9rem",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:P=>{P.currentTarget.style.transform="translateY(-2px)",P.currentTarget.style.boxShadow="0 4px 16px rgba(249,168,37,0.25)"},onMouseLeave:P=>{P.currentTarget.style.transform="",P.currentTarget.style.boxShadow=""},children:[g.jsx("span",{children:"🏆 How is my score calculated? See the scoring guide"}),g.jsx("span",{style:{fontSize:"1.1rem"},children:"→"})]}),r.length>=3&&g.jsx(df,{title:"Score trend (last 20 games)",children:g.jsx(KV,{trials:r})}),o.length>=2&&g.jsx(df,{title:"Avg score by difficulty",children:g.jsx(QV,{groups:o})}),o.length>=1&&g.jsx(df,{title:"Accuracy by difficulty",children:g.jsx(YV,{groups:o})}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}}),g.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700,whiteSpace:"nowrap"},children:"RAW BREAKDOWN"}),g.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}})]}),g.jsx(xE,{children:"Overall stats"}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,background:"#f0f8ff",borderRadius:12,padding:14},children:[g.jsx(Ne,{label:"Total games",value:a}),g.jsx(Ne,{label:"Accuracy",value:`${h}%`,color:h>=70?"var(--green-dark)":"var(--red)"}),g.jsx(Ne,{label:"Best streak",value:_,color:"var(--yellow-dark)"}),g.jsx(Ne,{label:"Current Streak",value:w,color:"var(--blue-dark)"}),g.jsx(Ne,{label:"Total score",value:c,color:"var(--purple-dark)"}),g.jsx(Ne,{label:"Avg score",value:f,color:"var(--blue-dark)"}),g.jsx(Ne,{label:"Best score",value:p,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Worst score",value:C,color:"var(--red)"}),g.jsx(Ne,{label:"Last Played",value:N}),g.jsx(Ne,{label:"Total time",value:`${Math.round(s.totalTime||0)}s`,color:"var(--purple-dark)"}),g.jsx(Ne,{label:"Avg time",value:`${S}s`,color:"var(--blue-dark)"}),g.jsx(Ne,{label:"Best time",value:E,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Worst time",value:`${s.maxTime??0}s`,color:"var(--red)"})]}),g.jsx(xE,{children:"Breakdown by difficulty"}),g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.map(P=>g.jsx(XV,{g:P},`${P.digits}-${P.count}`))})]})}function GV({pct:t,correct:e,total:n}){const o=2*Math.PI*44,a=o*(t/100),u=t>=70?"var(--green)":t>=40?"var(--yellow-dark)":"var(--red)";return g.jsxs("div",{style:{background:"#f8f9fa",borderRadius:14,padding:14,display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[g.jsx("span",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1},children:"Accuracy"}),g.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",children:[g.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:"#e8e8e8",strokeWidth:"12"}),g.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:u,strokeWidth:"12",strokeDasharray:`${a} ${o}`,strokeLinecap:"round",transform:"rotate(-90 60 60)",style:{transition:"stroke-dasharray 0.8s ease"}}),g.jsxs("text",{x:60,y:54,textAnchor:"middle",fontFamily:"Fredoka One, cursive",fontSize:"22",fill:u,children:[t,"%"]}),g.jsxs("text",{x:60,y:72,textAnchor:"middle",fontFamily:"Nunito, sans-serif",fontSize:"10",fill:"#999",fontWeight:"700",children:[e,"/",n]})]})]})}function KV({trials:t}){const i=t.map(p=>p.score??0),s=Math.max(...i,1),o=Math.min(...i),a=s-o||1,u=i.length,c=i.map((p,_)=>{const w=10+_/(u-1)*300,S=70-(p-o)/a*(80-10*2);return[w,S]}),h="M "+c.map(p=>p.join(",")).join(" L "),f=h+` L ${c[c.length-1][0]},80 L ${c[0][0]},80 Z`;return g.jsxs("svg",{width:"100%",viewBox:"0 0 320 80",preserveAspectRatio:"none",style:{display:"block"},children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"spark-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[g.jsx("stop",{offset:"0%",stopColor:"#4a9eda",stopOpacity:"0.25"}),g.jsx("stop",{offset:"100%",stopColor:"#4a9eda",stopOpacity:"0.02"})]})}),g.jsx("path",{d:f,fill:"url(#spark-grad)"}),g.jsx("path",{d:h,fill:"none",stroke:"#4a9eda",strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"}),c.map(([p,_],w)=>g.jsx("circle",{cx:p,cy:_,r:"4",fill:t[w].isCorrect?"var(--green)":"var(--red)",stroke:"white",strokeWidth:"1.5"},w)),g.jsx("text",{x:10,y:78,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:o}),g.jsx("text",{x:10,y:13,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:s})]})}function QV({groups:t}){const i=Math.min(40,300/t.length-8),s=Math.max(...t.map(o=>o.avgScore||0),1);return g.jsx("svg",{width:"100%",viewBox:"0 0 320 100",style:{display:"block",overflow:"visible"},children:t.map((o,a)=>{const u=10+a*(300/t.length)+(300/t.length-i)/2,h=(o.avgScore||0)/s*70,f=80-h,p=["#4a9eda","#5cbf6a","#9c6fe4","#ffd54f"][a%4],_=`${o.digits}d·${o.count}n`;return g.jsxs("g",{children:[g.jsx("rect",{x:u,y:f,width:i,height:h,rx:"5",fill:p,opacity:"0.85"}),g.jsx("text",{x:u+i/2,y:f-4,textAnchor:"middle",fontSize:"10",fontFamily:"Fredoka One,cursive",fill:p,children:Number(o.avgScore||0).toFixed(1)}),g.jsx("text",{x:u+i/2,y:96,textAnchor:"middle",fontSize:"8.5",fontFamily:"Nunito,sans-serif",fill:"#888",fontWeight:"700",children:_})]},a)})})}function YV({groups:t}){const n=t.length*32+10,r=80;return g.jsx("svg",{width:"100%",viewBox:`0 0 320 ${n}`,style:{display:"block"},children:t.map((i,s)=>{const o=i.accuracy?Math.round(i.accuracy):0,a=(320-r-40)*o/100,u=s*32+6,c=o>=70?"var(--green)":o>=40?"var(--yellow-dark)":"var(--red)",h=`${i.digits}d · ${i.count}n`;return g.jsxs("g",{children:[g.jsx("text",{x:0,y:u+16,fontSize:"10",fontFamily:"Nunito,sans-serif",fontWeight:"700",fill:"#555",children:h}),g.jsx("rect",{x:r,y:u+4,width:320-r-40,height:18,rx:"9",fill:"#ececec"}),g.jsx("rect",{x:r,y:u+4,width:Math.max(a,0),height:18,rx:"9",fill:c,opacity:"0.85"}),g.jsxs("text",{x:288,y:u+16,fontSize:"10",fontFamily:"Fredoka One,cursive",fill:c,fontWeight:"bold",children:[o,"%"]})]},s)})})}function XV({g:t}){var f;const e=t.totalCorrect||0,n=Math.round(e/t.totalGames*100),r=Math.round(t.totalScore/t.totalGames),i=Math.round(t.totalTime/t.totalGames),s=t.minTime===hl||t.minTime===0?"-":t.minTime+"s",o=t.minScore===hl||t.minScore===0?"-":t.minScore,a=t.maxScore??0,u=t.bstr??"-",c=t.cstr??"-",h=(f=t.upd_at)!=null&&f.toDate?UA(t.upd_at.toDate()):"—";return g.jsxs("div",{style:{background:"#fafafa",border:"2px solid #e8e8e8",borderRadius:14,padding:"14px 16px"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[g.jsxs("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.1rem",color:"var(--blue-dark)"},children:[t.digits," digit",t.digits>1?"s":""," · ",t.count," numbers"]}),g.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:700},children:[t.totalGames," game",t.totalGames>1?"s":""]})]}),g.jsxs("div",{style:{marginBottom:10},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:4},children:[g.jsx("span",{children:"Accuracy"}),g.jsxs("span",{style:{fontWeight:800,color:n>=70?"var(--green-dark)":"var(--red)"},children:[n,"%"]})]}),g.jsx("div",{style:{height:8,background:"#e8e8e8",borderRadius:4,overflow:"hidden"},children:g.jsx("div",{style:{height:"100%",width:`${n}%`,background:n>=70?"var(--green)":"var(--red)",borderRadius:4,transition:"width 0.6s ease"}})})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:[g.jsx(Ne,{label:"✅ Correct",value:e,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Avg score",value:r,color:"var(--purple-dark)"}),g.jsx(Ne,{label:"Best score",value:a,color:"var(--yellow-dark)"}),g.jsx(Ne,{label:"Worst score",value:o,color:"var(--yellow-dark)"}),g.jsx(Ne,{label:"Avg time",value:`${i}s`,color:"var(--blue-dark)"}),g.jsx(Ne,{label:"Total games",value:t.totalGames||0}),g.jsx(Ne,{label:"Total score",value:t.totalScore||0,color:"var(--purple-dark)"}),g.jsx(Ne,{label:"Best time",value:`${s}`,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Worst time",value:`${t.maxTime}s`,color:"var(--red)"}),g.jsx(Ne,{label:"Best Streak",value:u,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Current Streak",value:c,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Last Played",value:h})]})]})}function df({title:t,children:e}){return g.jsxs("div",{style:{background:"#fafafa",border:"1.5px solid #ececec",borderRadius:14,padding:"14px 16px"},children:[g.jsx("p",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1,marginBottom:10},children:t}),e,t.includes("trend")&&g.jsxs("div",{style:{display:"flex",gap:16,marginTop:8,justifyContent:"center"},children:[g.jsx(RE,{color:"var(--green)",label:"Correct"}),g.jsx(RE,{color:"var(--red)",label:"Wrong"})]})]})}function RE({color:t,label:e}){return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:[g.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:t}}),e]})}function ps({label:t,value:e,color:n,icon:r}){return g.jsxs("div",{style:{background:"white",border:"1.5px solid #ececec",borderRadius:10,padding:"8px 10px",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",color:n||"var(--text)",lineHeight:1.2},children:e}),g.jsxs("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",fontWeight:700,marginTop:2},children:[r," ",t]})]})}function xE({children:t}){return g.jsx("p",{className:"section-title",style:{margin:0},children:t})}function Ne({label:t,value:e,color:n}){return g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:n||"var(--blue-dark)"},children:e}),g.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function JV(){return g.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"})]})}function ZV(){return g.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[g.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),g.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No stats yet!"}),g.jsx("p",{style:{fontSize:"0.875rem",marginTop:6},children:"Play your first round to see your stats."})]})}function UA(t){return t.toLocaleString("en-IN",{day:"numeric",month:"numeric",year:"numeric"})}function eF({uid:t}){const[e,n]=H.useState(null),[r,i]=H.useState(1),[s,o]=H.useState(0),[a,u]=H.useState(!1),[c,h]=H.useState([null]),f=Math.max(1,Math.ceil(s/cf));if(H.useEffect(()=>(AE(t).then(o),r!==1?void 0:zV(t,cf,({trials:w,lastDoc:S})=>{n(w),h(N=>{const C=[...N];return C[1]=S,C}),AE(t).then(o)})),[t,r]),H.useEffect(()=>{r!==1&&(u(!0),FA(t,cf,c[r-1]??null).then(({trials:_,lastDoc:w})=>{n(_),h(S=>{const N=[...S];return N[r]=w,N}),u(!1)}))},[t,r]),e===null||a)return g.jsx(nF,{});if(s===0)return g.jsx(rF,{});const p=e.filter(_=>_.isCorrect).length;return e.length&&Math.round(p/e.length*100),g.jsxs("div",{className:"flex flex-col",style:{gap:14},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsxs("p",{className:"section-title",style:{margin:0},children:["Page ",r," of ",f,g.jsxs("span",{style:{fontWeight:400,color:"var(--text-muted)",fontSize:"0.85rem"},children:[" (",s," total)"]})]}),r===1&&g.jsx("span",{style:{fontSize:"0.75rem",color:"var(--red)"},children:"🔴 Live"})]}),g.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:8},children:e.map(_=>g.jsx(tF,{t:_},_.id))}),g.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",justifyContent:"center",marginTop:4},children:[g.jsx("button",{className:"btn btn-outline",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r===1,onClick:()=>i(_=>_-1),children:"← Prev"}),g.jsxs("span",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text-muted)",minWidth:80,textAlign:"center"},children:[r," / ",f]}),g.jsx("button",{className:"btn btn-primary",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r>=f,onClick:()=>i(_=>_+1),children:"Next →"})]})]})}function tF({t}){var n;const e=(n=t.timestamp)!=null&&n.toDate?sF(t.timestamp.toDate()):"—";return g.jsxs("li",{style:{background:"#f8f9fa",borderRadius:12,padding:"12px 14px",display:"flex",flexDirection:"column",gap:6,borderLeft:`4px solid ${t.isCorrect?"var(--green)":"var(--red)"}`},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsx("span",{className:`result-badge ${t.isCorrect?"badge-correct":"badge-wrong"}`,children:t.isCorrect?"✅ Correct":"❌ Wrong"}),g.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:e})]}),t.numbers&&g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1rem",letterSpacing:"0.5px",wordBreak:"break-all"},children:iF(t.numbers)}),g.jsxs("div",{style:{display:"flex",gap:14,fontSize:"0.82rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[g.jsxs("span",{children:["Answer: ",g.jsx("strong",{style:{color:"var(--text)"},children:t.actualAnswer})]}),g.jsxs("span",{children:["Yours: ",g.jsx("strong",{style:{color:t.isCorrect?"var(--green-dark)":"var(--red)"},children:t.userAnswer})]}),g.jsxs("span",{children:["⏱ ",t.duration,"s"]}),g.jsxs("span",{children:["🪙 ",t.score??0," pts"]}),g.jsxs("span",{children:[t.count," nums · ",t.digits,"d"]})]})]})}function nF(){return g.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"})]})}function rF(){return g.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[g.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),g.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No games yet!"}),g.jsx("p",{className:"text-sm mt-sm",children:"Play your first round and results will appear here."})]})}function iF(t){return t.split(" ").map((e,n)=>g.jsx("span",{style:{color:e.startsWith("-")?"var(--red)":"var(--green-dark)",marginRight:4},children:e},n))}function sF(t){return t.toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}const oF=[{id:"stats",label:"📊 Stats"},{id:"history",label:"📋 History"}];function aF({uid:t}){const[e,n]=H.useState("stats");return g.jsxs("div",{children:[g.jsx("div",{className:"tabs",style:{marginBottom:"1rem"},children:oF.map(r=>g.jsx("button",{className:`tab ${e===r.id?"active":""}`,onClick:()=>n(r.id),children:r.label},r.id))}),e==="stats"&&g.jsx(HV,{uid:t}),e==="history"&&g.jsx(eF,{uid:t})]})}function lF(){const[t,e]=H.useState([]),[n,r]=H.useState(!0),[i,s]=H.useState(""),[o,a]=H.useState(!1),[u,c]=H.useState(null),h=H.useRef(null);H.useEffect(()=>{VA().then(e).finally(()=>r(!1))},[]),H.useEffect(()=>{function w(S){h.current&&!h.current.contains(S.target)&&a(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]);const f=t.filter(w=>{var S,N;return((S=w.name)==null?void 0:S.toLowerCase().includes(i.toLowerCase()))||((N=w.email)==null?void 0:N.toLowerCase().includes(i.toLowerCase()))});function p(w){c(w),s(""),a(!1)}function _(){c(null),s("")}return n?g.jsxs("div",{className:"loader",children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]}):u?g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"},children:[g.jsx("button",{className:"btn btn-outline",onClick:_,children:"← Change Student"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[g.jsx("span",{style:{fontFamily:"Fredoka One",fontSize:"1.3rem",color:"var(--text)"},children:u.name}),u.age&&g.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"999px",padding:"0.15rem 0.6rem"},children:["Age ",u.age]})]})]}),g.jsx(aF,{uid:u.uid})]}):g.jsx("div",{children:g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:"1rem",fontSize:"0.9rem"},children:[t.length," student",t.length!==1?"s":""," registered"]}),g.jsxs("div",{ref:h,style:{position:"relative"},children:[g.jsx("input",{className:"answer-input",type:"text",placeholder:"Search by name or email...",value:i,onChange:w=>{s(w.target.value),a(!0)},onFocus:()=>a(!0),style:{width:"100%",fontSize:"1rem",padding:"0.75rem 1rem",textAlign:"left",fontFamily:"Nunito, sans-serif"}}),o&&g.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,background:"white",border:"2px solid var(--border)",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.10)",zIndex:100,maxHeight:"280px",overflowY:"auto"},children:f.length===0?g.jsx("div",{style:{padding:"1rem",color:"var(--text-muted)",textAlign:"center",fontSize:"0.9rem"},children:"No students found"}):f.map(w=>g.jsxs("div",{onClick:()=>p(w),style:{padding:"0.75rem 1rem",cursor:"pointer",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.15s"},onMouseEnter:S=>S.currentTarget.style.background="var(--bg)",onMouseLeave:S=>S.currentTarget.style.background="white",children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,color:"var(--text)"},children:w.name}),g.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:w.email})]}),w.age&&g.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"999px",padding:"0.1rem 0.5rem"},children:["Age ",w.age]})]},w.uid))})]})]})})}const st=[{border:"#1D9E75",bg:"#E1F5EE",avatarText:"#085041",label:"#085041"},{border:"#D85A30",bg:"#FAECE7",avatarText:"#712B13",label:"#712B13"},{border:"#7F77DD",bg:"#EEEDFE",avatarText:"#3C3489",label:"#3C3489"},{border:"#BA7517",bg:"#FAEEDA",avatarText:"#633806",label:"#633806"}],ff=4;function uF(t=""){return t.split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase()}function cF(t){const[e,n]=t.split("_");return`${e.replace("d","")} digit${e==="1d"?"":"s"}, ${n.replace("n","")} numbers`}function kE(t){return t?{...t,avgTime:t.totalGames>0?t.totalTime/t.totalGames:0}:null}function hF({student:t,color:e,onRemove:n}){return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",padding:"0.45rem 0.6rem",border:`2px solid ${e.border}`,borderRadius:"10px",background:e.bg},children:[g.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:e.bg,color:e.avatarText,border:`1.5px solid ${e.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.65rem",fontWeight:700,flexShrink:0},children:uF(t.name)}),g.jsxs("div",{style:{minWidth:0,flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem",color:"var(--text)"},children:t.name}),t.age&&g.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)"},children:["Age ",t.age]})]}),g.jsx("button",{onClick:n,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:"0.85rem",padding:"0 2px",flexShrink:0},children:"✕"})]})}function dF({students:t,onSelect:e,color:n,label:r}){const[i,s]=H.useState(""),[o,a]=H.useState(!1),u=H.useRef(null);H.useEffect(()=>{function h(f){u.current&&!u.current.contains(f.target)&&a(!1)}return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const c=t.filter(h=>{var f,p;return!i||((f=h.name)==null?void 0:f.toLowerCase().includes(i.toLowerCase()))||((p=h.email)==null?void 0:p.toLowerCase().includes(i.toLowerCase()))});return g.jsxs("div",{ref:u,style:{position:"relative",minWidth:0},children:[g.jsx("p",{style:{fontSize:"0.75rem",color:n.label,fontWeight:700,marginBottom:"0.3rem"},children:r}),g.jsx("input",{className:"answer-input",type:"text",placeholder:"Search...",value:i,onChange:h=>{s(h.target.value),a(!0)},onFocus:()=>a(!0),style:{width:"100%",fontSize:"0.85rem",padding:"0.5rem 0.6rem",textAlign:"left",fontFamily:"Nunito, sans-serif",boxSizing:"border-box"}}),o&&g.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,background:"white",border:"2px solid var(--border)",borderRadius:"10px",boxShadow:"0 4px 16px rgba(0,0,0,0.10)",zIndex:200,maxHeight:"200px",overflowY:"auto"},children:c.length===0?g.jsx("div",{style:{padding:"0.75rem",color:"var(--text-muted)",fontSize:"0.82rem",textAlign:"center"},children:"No students found"}):c.map(h=>g.jsxs("div",{onClick:()=>{e(h),s(""),a(!1)},style:{padding:"0.55rem 0.75rem",cursor:"pointer",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},onMouseEnter:f=>f.currentTarget.style.background="var(--bg)",onMouseLeave:f=>f.currentTarget.style.background="white",children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.82rem"},children:h.name}),g.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:h.email})]}),h.age&&g.jsxs("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:["Age ",h.age]})]},h.uid))})]})}function Jn(t){return typeof t!="number"||isNaN(t)||Math.round(t)===hl?null:parseFloat(t.toFixed(2))}function PE({id:t,students:e,leftMetrics:n,rightMetrics:r,leftLabel:i,rightLabel:s,statsGetter:o}){const a=H.useRef(null),u=H.useRef(null);H.useEffect(()=>{if(window.Chart)return c(),()=>{u.current&&u.current.destroy()}},[e,o]);function c(){if(!a.current||!window.Chart)return;u.current&&u.current.destroy();const h=[{label:"Avg score",data:e.map(f=>{var p;return Jn((p=o(f.uid))==null?void 0:p.avgScore)}),backgroundColor:e.map((f,p)=>st[p].border+"cc"),borderColor:e.map((f,p)=>st[p].border),borderWidth:1.5,borderRadius:4,yAxisID:"yLeft"},{label:"Best score",data:e.map(f=>{var p;return Jn((p=o(f.uid))==null?void 0:p.maxScore)}),backgroundColor:e.map((f,p)=>st[p].border+"66"),borderColor:e.map((f,p)=>st[p].border),borderWidth:1.5,borderRadius:4,borderDash:[3,3],yAxisID:"yLeft"},{label:"Worst score",data:e.map(f=>{var p;return Jn((p=o(f.uid))==null?void 0:p.minScore)}),backgroundColor:e.map((f,p)=>st[p].bg),borderColor:e.map((f,p)=>st[p].border),borderWidth:1.5,borderRadius:4,yAxisID:"yLeft"},{type:"line",label:"Accuracy",data:e.map(f=>{var p;return Jn((p=o(f.uid))==null?void 0:p.accuracy)}),borderColor:"#94a3b8",borderWidth:2,borderDash:[5,4],pointStyle:"circle",pointRadius:5,pointBackgroundColor:e.map((f,p)=>st[p].border),pointBorderColor:"#fff",pointBorderWidth:2,fill:!1,tension:.35,yAxisID:"yRight"}];u.current=new window.Chart(a.current,{type:"bar",data:{labels:e.map(f=>f.name),datasets:h},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:f=>{const p=f.parsed.y;return p==null?null:f.dataset.label==="Accuracy"?`Accuracy: ${p.toFixed(1)}%`:`${f.dataset.label}: ${p}`}}}},interaction:{mode:"index",intersect:!1},scales:{x:{grid:{display:!1},ticks:{font:{size:11,family:"Nunito"}}},yLeft:{type:"linear",position:"left",beginAtZero:!0,title:{display:!!i,text:i,font:{size:11,family:"Nunito"},color:"#888"},ticks:{font:{size:11,family:"Nunito"}},grid:{color:"rgba(0,0,0,0.06)"}},yRight:{type:"linear",position:"right",min:0,max:100,title:{display:!0,text:"Accuracy (%)",font:{size:11,family:"Nunito"},color:"#888"},ticks:{font:{size:11,family:"Nunito"},callback:f=>f+"%"},grid:{drawOnChartArea:!1}}}}})}return g.jsx("canvas",{ref:a,style:{maxHeight:"280px"}})}function NE({students:t,metrics:e,yLabel:n,statsGetter:r}){const i=H.useRef(null),s=H.useRef(null),o=t.map(u=>{const c=r(u.uid);return!c||!c.totalGames?null:Jn(c.totalTime/c.totalGames)});H.useEffect(()=>{if(window.Chart)return a(),()=>{s.current&&s.current.destroy()}},[t,r]);function a(){if(!i.current||!window.Chart)return;s.current&&s.current.destroy();const u=[{type:"bar",label:"Time range",data:t.map(c=>{const h=r(c.uid),f=Jn(h==null?void 0:h.minTime),p=Jn(h==null?void 0:h.maxTime);return f==null||p==null?null:[f,p]}),backgroundColor:t.map((c,h)=>st[h].border+"55"),borderColor:t.map((c,h)=>st[h].border),borderWidth:1.5,borderRadius:4,barPercentage:.5},{type:"scatter",label:"Avg time",data:t.map((c,h)=>{const f=o[h];return f==null?null:{x:h,y:f}}),backgroundColor:t.map((c,h)=>st[h].border),borderColor:"#fff",borderWidth:2,pointRadius:6,pointHoverRadius:8,pointStyle:"circle"}];s.current=new window.Chart(i.current,{type:"bar",data:{labels:t.map(c=>c.name),datasets:u},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:c=>{if(c.dataset.label==="Time range"){const f=r(t[c.dataIndex].uid),p=Jn(f==null?void 0:f.minTime),_=Jn(f==null?void 0:f.maxTime);return p==null||_==null?"Time range: —":`Time range: ${p}s → ${_}s`}const h=c.parsed.y;return h==null?"Avg time: —":`Avg time: ${h}s`}}}},interaction:{mode:"index",intersect:!1},scales:{x:{grid:{display:!1},ticks:{font:{size:11,family:"Nunito"}}},y:{beginAtZero:!1,title:{display:!!n,text:n,font:{size:11,family:"Nunito"},color:"#888"},ticks:{font:{size:11,family:"Nunito"},callback:c=>c+"s"},grid:{color:"rgba(0,0,0,0.06)"}}}}})}return g.jsx("canvas",{ref:i,style:{maxHeight:"260px"}})}function fF({students:t,statsGetter:e}){const n=H.useRef(null),r=H.useRef(null);H.useEffect(()=>{if(window.Chart)return i(),()=>{r.current&&r.current.destroy()}},[t,e]);function i(){if(!n.current||!window.Chart)return;r.current&&r.current.destroy();const s=Math.max(...t.map(_=>{var w;return((w=e(_.uid))==null?void 0:w.avgScore)||0}),1),o=Math.max(...t.map(_=>{var w;return((w=e(_.uid))==null?void 0:w.totalGames)||0}),1),a=Math.max(...t.map(_=>{var w;return((w=e(_.uid))==null?void 0:w.bestStreak)||0}),1),u=Math.max(...t.map(_=>{var w;return((w=e(_.uid))==null?void 0:w.avgTime)||0}),1),c=(_,w)=>Math.round(_/w*100),h=t.map(_=>{const w=e(_.uid);return[parseFloat(((w==null?void 0:w.accuracy)||0).toFixed(1)),Math.round((w==null?void 0:w.avgScore)||0),Math.round((w==null?void 0:w.totalGames)||0),parseFloat(((w==null?void 0:w.avgTime)||0).toFixed(2)),Math.round((w==null?void 0:w.bestStreak)||0)]}),f=["Accuracy %","Avg score","Games played","Avg speed","Best streak"],p=["%"," pts"," games","s"," streak"];r.current=new window.Chart(n.current,{type:"radar",data:{labels:f,datasets:t.map((_,w)=>{const S=e(_.uid);return{label:_.name,data:[Math.round((S==null?void 0:S.accuracy)||0),c((S==null?void 0:S.avgScore)||0,s),c((S==null?void 0:S.totalGames)||0,o),Math.round(100-c((S==null?void 0:S.avgTime)||0,u)),c((S==null?void 0:S.bestStreak)||0,a)],borderColor:st[w].border,backgroundColor:st[w].border+"33",pointBackgroundColor:st[w].border,borderWidth:2}})},options:{plugins:{legend:{position:"bottom",labels:{font:{size:12,family:"Nunito"}}},tooltip:{callbacks:{label:_=>{const w=_.datasetIndex,S=_.dataIndex,N=h[w][S],C=p[S];return`${_.dataset.label}: ${N}${C}`}}}},responsive:!0,scales:{r:{beginAtZero:!0,max:100,ticks:{stepSize:25,display:!1},pointLabels:{font:{size:12,family:"Nunito"}}}}}})}return g.jsx("canvas",{ref:n,style:{maxHeight:"300px"}})}function pF({students:t}){const[e,n]=H.useState(!1),[r,i]=H.useState(!1),[s,o]=H.useState(null),a=H.useRef(null),u=H.useRef(null),c=H.useRef(""),h=t.map(p=>p.uid).join(",");H.useEffect(()=>{h!==c.current&&(c.current=h,n(!1),o(null))},[h]);async function f(){n(!0),i(!0);const p=await Promise.all(t.map(_=>$V(_.uid,10)));o(p),i(!1)}return H.useEffect(()=>{if(!e||r||!s||!window.Chart)return;u.current&&u.current.destroy();const p=Math.max(...s.map(w=>w.length)),_=Array.from({length:p},(w,S)=>`#${S+1}`);return u.current=new window.Chart(a.current,{type:"line",data:{labels:_,datasets:s.map((w,S)=>({label:t[S].name,data:w.map(N=>N.score),backgroundColor:st[S].border+"aa",borderColor:st[S].border,borderWidth:1.5,borderRadius:4}))},options:{responsive:!0,scales:{y:{beginAtZero:!0,ticks:{font:{size:11}}},x:{ticks:{font:{size:11}},grid:{display:!1}}},plugins:{legend:{position:"top",labels:{font:{size:12,family:"Nunito"}}}}}}),()=>{u.current&&u.current.destroy()}},[e,r,s]),g.jsxs("div",{className:"admin-card",style:{marginTop:"1rem"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:e&&!r?"1rem":0},children:[g.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem"},children:"Score trend — last 10 games"}),!e&&g.jsx("button",{className:"btn btn-outline",onClick:f,children:"Load trend ▼"})]}),e&&r&&g.jsxs("div",{className:"loader",style:{marginTop:"1rem"},children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]}),e&&!r&&s&&g.jsx("canvas",{ref:a,style:{maxHeight:"260px"}})]})}function ta({title:t,children:e}){return g.jsxs("div",{className:"admin-card",style:{marginBottom:"1rem",width:"100%"},children:[g.jsx("p",{style:{fontWeight:700,fontSize:"0.9rem",marginBottom:"1rem",color:"var(--text)"},children:t}),e]})}const mF=[{key:"avgScore",label:"Avg score",fmt:t=>Math.round(t)},{key:"maxScore",label:"Best score",fmt:t=>Math.round(t)},{key:"minScore",label:"Worst score",fmt:t=>Math.round(t)}],gF=[{key:"accuracy",label:"Accuracy %",fmt:t=>`${Math.round(t)}%`}],_F=[{key:"avgTime",label:"Avg time",fmt:t=>`${t.toFixed(1)}s`},{key:"minTime",label:"Best time",fmt:t=>`${t.toFixed(1)}s`},{key:"maxTime",label:"Worst time",fmt:t=>`${t.toFixed(1)}s`}],yF=[{key:"avgScore",label:"Avg score",fmt:t=>Math.round(t)},{key:"maxScore",label:"Best score",fmt:t=>Math.round(t)},{key:"minScore",label:"Worst score",fmt:t=>Math.round(t)}],vF=[{key:"accuracy",label:"Accuracy %",fmt:t=>`${Math.round(t)}%`}],wF=[{key:"minTime",label:"Best time",fmt:t=>`${t.toFixed(1)}s`},{key:"maxTime",label:"Worst time",fmt:t=>`${t.toFixed(1)}s`}];function EF(){const[t,e]=H.useState([]),[n,r]=H.useState(!0),[i,s]=H.useState([]),[o,a]=H.useState({}),[u,c]=H.useState(!1),h=H.useRef(!1);H.useEffect(()=>{if(window.Chart||h.current)return;h.current=!0;const P=document.createElement("script");P.src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js",document.head.appendChild(P)},[]),H.useEffect(()=>{VA().then(e).finally(()=>r(!1))},[]),H.useEffect(()=>{const P=i.filter(L=>!o[L.uid]);P.length!==0&&(c(!0),Promise.all(P.map(L=>jA(L.uid).then(F=>({uid:L.uid,stats:F})))).then(L=>{a(F=>{const T={...F};return L.forEach(({uid:v,stats:I})=>{T[v]=I}),T})}).finally(()=>c(!1)))},[i]);function f(P){i.length>=ff||i.find(L=>L.uid===P.uid)||s(L=>[...L,P])}function p(P){s(L=>L.filter(F=>F.uid!==P)),a(L=>{const F={...L};return delete F[P],F})}if(n)return g.jsxs("div",{className:"loader",children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]});const _=t.filter(P=>!i.find(L=>L.uid===P.uid)),w=i.length<ff,S=i.length>=2&&i.every(P=>o[P.uid])&&!u;function N(P){var L;return kE((L=o[P])==null?void 0:L.global)}function C(P,L){var T,v;const F=(v=(T=o[P])==null?void 0:T.groups)==null?void 0:v[L];return F?kE(F):null}const E=S?[...new Set(i.flatMap(P=>{var L;return Object.keys(((L=o[P.uid])==null?void 0:L.groups)||{})}))].sort():[];function x(P){return i.filter(L=>{var F,T;return!!((T=(F=o[L.uid])==null?void 0:F.groups)!=null&&T[P])})}return g.jsxs("div",{style:{width:"100%"},children:[g.jsxs("div",{style:{marginBottom:"1rem",background:"white",borderRadius:"16px",padding:"1.25rem",border:"1px solid var(--border)",maxWidth:"680px"},children:[g.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"nowrap",alignItems:"flex-start"},children:[i.map((P,L)=>g.jsxs("div",{style:{flex:"1 1 140px",minWidth:140},children:[g.jsxs("p",{style:{fontSize:"0.75rem",color:st[L].label,fontWeight:700,marginBottom:"0.3rem"},children:["Student ",String.fromCharCode(65+L)]}),g.jsx(hF,{student:P,color:st[L],onRemove:()=>p(P.uid)})]},P.uid)),w&&g.jsx("div",{style:{flex:"1 1 140px",minWidth:140},children:g.jsx(dF,{students:_,onSelect:f,color:st[i.length],label:`Student ${String.fromCharCode(65+i.length)}`})})]}),i.length>0&&g.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.75rem",marginBottom:0},children:[i.length," student",i.length>1?"s":""," selected",w?` — add up to ${ff-i.length} more`:" — maximum reached"]})]}),i.length<2&&g.jsx("div",{className:"card",style:{textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:"Select at least 2 students to compare"}),i.length>=2&&u&&g.jsxs("div",{className:"loader",style:{marginTop:"1rem"},children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]}),g.jsx("div",{style:{width:"100%"},children:S&&i.length>=2&&g.jsxs(g.Fragment,{children:[g.jsx(ta,{title:"Overview",children:g.jsx(fF,{students:i,statsGetter:N})}),g.jsx(ta,{title:"Scores & performance",children:g.jsx(PE,{students:i,leftMetrics:mF,rightMetrics:gF,leftLabel:"Score",rightLabel:"% / Count",statsGetter:N})}),g.jsx(ta,{title:"Response times",children:g.jsx(NE,{students:i,metrics:_F,yLabel:"Seconds",statsGetter:N})}),E.map(P=>{const L=x(P);return L.length<1?null:g.jsxs("div",{children:[g.jsx("p",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",margin:"1.25rem 0 0.5rem"},children:cF(P)}),g.jsx(ta,{title:"Scores & performance",children:g.jsx(PE,{students:L,leftMetrics:yF,rightMetrics:vF,leftLabel:"Score",rightLabel:"% / Count",statsGetter:F=>C(F,P)})}),g.jsx(ta,{title:"Response times",children:g.jsx(NE,{students:L,metrics:wF,yLabel:"Seconds",statsGetter:F=>C(F,P)})})]},P)}),g.jsx(pF,{students:i})]})})]})}function TF(){const t="AB@CD$EFGHJ&KLMNP+QR=STUV#WXYZ23%45*67^89",e=Array.from({length:3},()=>t[Math.floor(Math.random()*t.length)]).join(""),n=Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("");return`${e}-${n}`}async function IF(t,e,n){const r=TF(),i=await yC(Wn(ye,"challenges"),{adminUid:t,code:r,status:"waiting",config:e,createdAt:_r(),startedAt:null,finishedAt:null,createdAt:_r()}),s=SC(ye);return n.forEach((o,a)=>{const u=String(o.qIdx).padStart(4,"0"),c=et(ye,"challenges",i.id,"questions",u);s.set(c,{...o,order:a})}),await s.commit(),{id:i.id,code:r,config:e,questions:n}}async function SF(){const t=Mh(Wn(ye,"challenges"),fC("status","in",["waiting","active"]),jh("createdAt","desc"));return(await ao(t)).docs.map(n=>({id:n.id,...n.data()}))}async function CF(t,e){return Promise.all([Gi(et(ye,"challenges",t,"participants",e)),Gi(et(ye,"challenges",t,"participants",e,"private","submission"))])}async function bE(t){const e=await Gi(et(ye,"challenges",t));if(!e.exists())return null;const r=(await ao(Wn(ye,"challenges",t,"questions"))).docs.map(o=>({id:o.id,...o.data()})).sort((o,a)=>o.order-a.order),i=await ao(Wn(ye,"challenges",t,"adminState")),s={};return i.docs.forEach(o=>{s[o.id]=o.data()}),{id:t,...e.data(),questions:r,adminState:s}}async function AF(t,e,n,r){await qg(et(ye,"challenges",e,"adminState",n),{token:r.token,shuffledOrder:r.shuffledOrder,currentIdx:r.currentIdx,prefetchIdx:r.prefetchIdx,upd_by:t,upd_at:_r()})}async function DE(t,e,n,{currentIdx:r,prefetchIdx:i}){await fi(et(ye,"challenges",e,"adminState",n),{currentIdx:r,prefetchIdx:i,upd_by:t,upd_at:_r()})}async function RF(t,e){await fi(et(ye,"challenges",e),{status:"active",startedAt:_r(),upd_by:t})}async function xF(t,e){await fi(et(ye,"challenges",e),{status:"finished",finishedAt:_r(),upd_by:t})}async function OE(t,e,n,r){const i=et(ye,"challenges",e,"participants",n,"private","token"),s=await Gi(i);(!s.exists()||s.data().rtdbToken!==r)&&await qg(i,{rtdbToken:r,writtenAt:_r(),upd_by:t})}function LE(t,e,n){return Pl(et(ye,"challenges",t,"participants",e,"private","submission"),r=>{r.exists()&&n({uid:e,...r.data()})})}async function kF(t,e,{score:n,isCorrect:r,qIdx:i,duration:s,submittedAnswer:o}){const a=et(ye,"challenges",t,"participants",e);await fi(a,{scores:IC({qIdx:i,score:n,isCorrect:r,duration:s,submittedAnswer:o}),totalScore:Gu(n),totalCorrect:Gu(r?1:0),questionsAttempted:Gu(1),status:"playing"})}async function PF(t,e,n){const r=et(ye,"challenges",e);await fi(r,{leaderboard:n})}async function NF(t,e,n){const r=et(ye,"challenges",e);await fi(r,{summary:n})}async function ME(t,e){await fi(et(ye,"challenges",t,"participants",e),{status:"finished",finishedAt:_r()})}function pf(t,e){return Math.floor(Math.random()*(e-t+1))+t}function bF(t,e,n=!1){const r=Math.pow(10,t)-1,i=pf(1,r),s=[{value:i,operator:"+",running:i}];let o=i;for(let a=1;a<e;a++){let u=pf(1,r),c=Math.random()<.5?"+":"-";c==="-"&&(o===0?c="+":o-u<0&&(u=pf(1,o))),o=c==="+"?o+u:o-u,n?s.push({value:u,operator:c}):s.push({value:u,operator:c,running:o})}return{sequence:s,answer:o}}function DF({digits:t,count:e,duration:n,isCorrect:r}){const i=1+.1*(t-1)+(e-2)/20,s=20+(e-3)*.5,o=100/(1+n/s);return r?Math.round(o*i):0}const mf=[{label:"Easy",digits:1,count:3},{label:"Medium",digits:2,count:5},{label:"Hard",digits:2,count:7},{label:"Custom",digits:null,count:null}];function OF({onCreated:t}){const{user:e}=Fl(),[n,r]=H.useState(0),[i,s]=H.useState(1),[o,a]=H.useState(3),[u,c]=H.useState(3),[h,f]=H.useState(!1),[p,_]=H.useState(""),w=n===3,S=w?i:mf[n].digits,N=w?o:mf[n].count;async function C(){f(!0),_("");try{const E=Array.from({length:u},(T,v)=>{const{sequence:I,answer:A}=bF(S,N,!0);return{qIdx:v,sequence:I,answer:A}}),x={digits:S,count:N,numGames:u},P=E,{id:L,code:F}=await IF(e.uid,x,P);t({id:L,code:F,config:x,questions:E})}catch(E){console.log("Error while creating CHallenge"+E),_("Failed to create challenge. Try again."),f(!1)}}return g.jsx("div",{style:{maxWidth:"560px"},children:g.jsxs("div",{className:"admin-card",children:[g.jsx("p",{style:{fontWeight:700,fontSize:"1rem",marginBottom:"1.25rem"},children:"🏆 Create Challenge"}),g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.5rem",fontWeight:600},children:"DIFFICULTY"}),g.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1.25rem",flexWrap:"wrap"},children:mf.map((E,x)=>g.jsx("button",{className:`diff-btn ${n===x?"selected":""}`,onClick:()=>r(x),children:E.label},E.label))}),w&&g.jsxs("div",{style:{marginBottom:"1.25rem"},children:[g.jsxs("div",{style:{marginBottom:"0.75rem"},children:[g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.3rem",fontWeight:600},children:["DIGITS PER NUMBER: ",i]}),g.jsx("input",{type:"range",min:1,max:6,value:i,onChange:E=>s(+E.target.value),style:{width:"100%"}})]}),g.jsxs("div",{children:[g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.3rem",fontWeight:600},children:["NUMBERS IN SEQUENCE: ",o]}),g.jsx("input",{type:"range",min:2,max:20,value:o,onChange:E=>a(+E.target.value),style:{width:"100%"}})]})]}),g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.5rem",fontWeight:600},children:"NUMBER OF ROUNDS"}),g.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1.5rem",flexWrap:"wrap"},children:[1,2,3,5,10].map(E=>g.jsx("button",{className:`diff-btn ${u===E?"selected":""}`,onClick:()=>c(E),children:E},E))}),g.jsxs("div",{style:{background:"var(--bg)",borderRadius:"10px",padding:"0.75rem 1rem",marginBottom:"1.25rem",fontSize:"0.85rem",color:"var(--text-muted)",display:"flex",gap:"1.5rem"},children:[g.jsxs("span",{children:["📐 ",S," digit",S>1?"s":""]}),g.jsxs("span",{children:["🔢 ",N," numbers"]}),g.jsxs("span",{children:["🎮 ",u," round",u>1?"s":""]})]}),p&&g.jsx("p",{style:{color:"red",fontSize:"0.85rem",marginBottom:"0.75rem"},children:p}),g.jsx("button",{className:"btn btn-primary btn-full btn-lg",onClick:C,disabled:h,children:h?"Creating...":"Create Challenge →"})]})})}function jl(){return LV}async function VE(t,e){const n=jl(),r=Xi(n,`tokenOwners/${t}`),i=await IV(r);let s=!1;(!i.exists()||i.val()!==e)&&(s=!0,await Gc(r,e)),i.exists()&&s&&console.log(`WARNING!!! Token Already exists ${t}  for ${i.val}`)}async function Au(t,e){const n=jl();await C_(Xi(n,`s/${t}`),{[`question_${e.qIdx}`]:{sequence:e.sequence,qIdx:e.qIdx,pushedAt:Date.now()},next:e.qIdx})}async function LF(t){const e=jl();await C_(Xi(e,`s/${t}`),{next:-1})}async function MF(t,e){const n=jl();await TV(Xi(n,`s/${t}/question_${e.qIdx}`)),console.log("removed question "+e.qIdx)}async function VF(t){const e=jl();await Gc(Xi(e,`s/${t}`),null),await Gc(Xi(e,`tokenOwners/${t}`),null)}function FF(){const t="abcdefghijkmnopqrstuvwxyz0123456789";return Array.from({length:8},()=>t[Math.floor(Math.random()*t.length)]).join("")}const FE={waiting:{text:"Waiting",color:"#BA7517",bg:"#FAEEDA"},active:{text:"Active",color:"#1D9E75",bg:"#E1F5EE"},finished:{text:"Done",color:"#7F77DD",bg:"#EEEDFE"}};function jE({status:t}){const e=FE[t]||FE.waiting;return g.jsx("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"0.2rem 0.6rem",borderRadius:"999px",background:e.bg,color:e.color},children:e.text})}function jF({challenge:t,questions:e,onReset:n,onBack:r,restoredAdminState:i={}}){const[s,o]=H.useState(t),[a,u]=H.useState([]),[c,h]=H.useState(!1),[f,p]=H.useState(!1),[_,w]=H.useState([]),{user:S}=Fl(),N=H.useRef(Object.fromEntries(Object.entries(i).map(([V,U])=>[V,{...U,subUnsub:null,lastProcessed:null}]))),C=H.useRef(e),E=H.useRef(s);H.useEffect(()=>{E.current=s},[s]);function x(V){w(U=>[`${new Date().toLocaleTimeString()} — ${V}`,...U].slice(0,50))}function P(V){const U=[...V];for(let B=U.length-1;B>0;B--){const W=Math.floor(Math.random()*(B+1));[U[B],U[W]]=[U[W],U[B]]}return U}function L(V,U){const B=N.current[V];if(!B)return null;const W=B.shuffledOrder[U];return console.log(" for "+V+" the question index is "+W+" at "+U),W===void 0?null:C.current[W]}async function F(V,U){if(N.current[V]){const Oe=N.current[V].token,Fe=N.current[V].currentIdx;x(`${U} already joined ${W} ${Oe} WAIT ${Fe} NEXT ${N.current[V].prefetchIdx}`);return}x(`${U} joined first`);const B=P(C.current.map((Oe,Fe)=>Fe)),W=FF();N.current[V]={token:W,shuffledOrder:B,currentIdx:0,prefetchIdx:1,subUnsub:null,lastProcessed:null},await AF(S.uid,t.id,V,N.current[V]),console.log("Written admin state"),await OE(S.uid,t.id,V,W),await VE(W,V);const Ie=L(V,0);Ie&&(await Au(W,{sequence:Ie.sequence,qIdx:0}),x(`Q1 pre-loaded for ${U}`));const we=LE(t.id,V,Oe=>{I(V,U,Oe)});N.current[V].subUnsub=we}function T(V){V.forEach(U=>{const B=N.current[U.uid];if(B&&(OE(S.uid,t.id,U.uid,B.token).then(()=>{console.log("part token confirmed written")}).catch(W=>{console.error("writeParticipantToken failed",W)}),console.log("Written participantToken from restored state "+B.token+" "+U.uid),VE(B.token,U.uid).then(()=>{console.log("token resgistered successfully rtdb"+B.token);const W=L(U.uid,B.prefetchIdx-1);W&&(console.log("pushing question",W),Au(B.token,{sequence:W.sequence,qIdx:B.prefetchIdx-1}))}).catch(W=>{console.error("registerToken failed on reattach/refresh page",W)})),B&&!B.subUnsub){console.log("subscribed to submission"+U.uid);const W=LE(t.id,U.uid,Ie=>{I(U.uid,U.name,Ie)});B.subUnsub=W,x(`Resumed listener for ${U.name}`)}else console.log("NOT subscribed to submission"+U.uid+" "+B.subUnsub)})}async function v(){h(!0),console.log("starting challenge");for(const[V,U]of Object.entries(N.current)){const B=L(V,U.prefetchIdx);B&&(console.log("pushing question "+B),await Au(U.token,{sequence:B.sequence,qIdx:U.prefetchIdx}),U.prefetchIdx++,await DE(S.uid,t.id,V,{currentIdx:U.currentIdx,prefetchIdx:U.prefetchIdx}))}try{await RF(S.uid,t.id),x("Challenge started — Q1 revealed to all students"+t.id)}catch(V){console.log("unable to start challenge "+V)}h(!1)}async function I(V,U,B){const W=N.current[V];if(!W)return;const Ie=`${V}-${B.qIdx}`;if(W.lastProcessed===Ie)return;W.lastProcessed=Ie,MF(W.token,B);const we=L(V,W.currentIdx);if(!we)return;const Oe=parseInt(B.submittedAnswer)===we.answer,Fe=DF({digits:t.config.digits,count:t.config.count,duration:B.duration,isCorrect:Oe});x(`${U} Q${W.currentIdx+1} — ${Oe?"✓":"✗"} ${Fe}pts`),W.currentIdx++,await Promise.all([kF(t.id,V,{score:Fe,isCorrect:Oe,qIdx:B.qIdx,duration:B.duration,submittedAnswer:B.submittedAnswer}),(async()=>{const nn=L(V,W.prefetchIdx);nn?(await Au(W.token,{sequence:nn.sequence,qIdx:W.prefetchIdx}),W.prefetchIdx++):(await LF(W.token),await ME(t.id,V),x(`${U} finished all questions`)),await DE(S.uid,t.id,V,{currentIdx:W.currentIdx,prefetchIdx:W.prefetchIdx})})()])}H.useEffect(()=>{const V=WV(t.id,o),U=qV(t.id,B=>{B.forEach(W=>{N.current[W.uid]||F(W.uid,W.name)}),T(B),u(B)});return()=>{V(),U(),Object.values(N.current).forEach(B=>{var W;return(W=B.subUnsub)==null?void 0:W.call(B)})}},[t.id]);async function A(){var V;p(!0);for(const U of Object.values(N.current))(V=U.subUnsub)==null||V.call(U),await VF(U.token);await xF(S.uid,t.id),x("Challenge finished — all channels cleared"),await new Promise(U=>setTimeout(U,2e3));try{await Vt(a)}catch(U){x(`Post-challenge write failed: ${U.message}`),console.error("computeAndWrite  error",U)}p(!1)}async function k(V){const U=V.map(async B=>{var rn;const[W,Ie]=await CF(t.id,B.uid);if(!W.exists())return console.log("ERRROR geting results "+B.uid+" NOT FOUND"),null;const we=W.data(),Oe=we.scores??[],Fe=we.questionsAttempted??0,nn=we.totalScore??0;if(we.status!="finished"&&(console.log(`WARNING TO BE FIXED ${we.name} ${we.status} ${we.uid} ${nn}`),ME(t.id,B.uid)),Fe===0||nn===0)return null;const mi=Oe.reduce((Ht,sn)=>Ht+(sn.duration??0),0);let Pn=null;if(Ie.exists()){const Ht=Ie.data().submittedAt,sn=E.current.startedAt;Ht!=null&&Ht.toMillis&&(sn!=null&&sn.toMillis)&&(Pn=Ht.toMillis()-sn.toMillis())}const Tr=((rn=N.current[B.uid])==null?void 0:rn.shuffledOrder)??[];return{uid:B.uid,name:B.name,totalScore:nn,totalCorrect:we.totalCorrect??0,questionsAttempted:Fe,totalTime:mi,challengeDuration:Pn,scores:Oe,shuffledOrder:Tr}});return x("Data Fetching — participants for summary and leaderboard"),(await Promise.all(U)).filter(Boolean)}function b(V){return[...V].sort((B,W)=>W.totalScore!==B.totalScore?W.totalScore-B.totalScore:(B.totalTime??1/0)-(W.totalTime??1/0)).slice(0,10).map((B,W)=>({rank:W+1,uid:B.uid,name:B.name,totalScore:B.totalScore,totalCorrect:B.totalCorrect,questionsAttempted:B.questionsAttempted,totalTime:B.totalTime,challengeDuration:B.challengeDuration}))}function R(V){const U=V.length;if(U===0)return{participantCount:a.length,attemptedCount:0};const B=V.map(me=>me.totalScore),W=V.map(me=>me.totalTime),Ie=V.filter(me=>me.challengeDuration!=null).map(me=>me.challengeDuration),we=V.reduce((me,xe)=>me+xe.questionsAttempted,0),Oe=V.reduce((me,xe)=>me+xe.totalCorrect,0),Fe=V.filter(me=>me.questionsAttempted>=e.length).length,nn=Math.max(...B),mi=Math.min(...B),Pn=Math.ceil((nn-mi||1)/5),Tr=Array.from({length:5},(me,xe)=>{const Ir=mi+xe*Pn,gi=Ir+Pn-1;return{label:`${Ir}–${gi}`,count:B.filter(Nn=>Nn>=Ir&&Nn<=(xe===4?nn:gi)).length}}),rn={};for(const me of V)for(const xe of me.scores){const Ir=me.shuffledOrder[xe.qIdx];if(Ir===void 0)continue;const gi=C.current[Ir];if(!gi)continue;const Nn=gi.qIdx;rn[Nn]||(rn[Nn]={attempted:0,correct:0}),rn[Nn].attempted++,xe.isCorrect&&rn[Nn].correct++}const Ht=Object.entries(rn).map(([me,xe])=>({questionId:me,attempted:xe.attempted,correct:xe.correct,correctRate:Math.round(xe.correct/xe.attempted*100)})).sort((me,xe)=>me.correctRate-xe.correctRate),sn=Ht[0]??null;return{participantCount:a.length,attemptedCount:U,completionCount:Fe,completionRate:Math.round(Fe/U*100),maxScore:nn,minScore:mi,avgScore:Math.round(B.reduce((me,xe)=>me+xe,0)/U),scoreDistribution:Tr,avgTotalTime:Math.round(W.reduce((me,xe)=>me+xe,0)/U),...Ie.length>0&&{maxDuration:Math.max(...Ie),minDuration:Math.min(...Ie),avgDuration:Math.round(Ie.reduce((me,xe)=>me+xe,0)/Ie.length)},totalQuestionsAnswered:we,avgQuestionsAttempted:Math.round(we/U),avgCorrectRate:Math.round(Oe/we*100),hardestQuestion:sn,perQuestionBreakdown:Ht}}async function Vt(V){const U=await k(V),B=b(U),W=R(U);await Promise.all([PF(S.uid,t.id,B),NF(S.uid,t.id,W)]),x(`Leaderboard written — top ${B.length} participants`),x(`Summary written — ${W.attemptedCount} scored, avg ${W.avgScore??0} pts`)}const{config:pn}=t,pi=s.status==="waiting",tn=s.status==="active",K=s.status==="finished",Z=[...a].sort((V,U)=>U.totalScore-V.totalScore);return g.jsxs("div",{children:[g.jsx("button",{className:"btn btn-outline",style:{marginBottom:"1rem",fontSize:"0.82rem"},onClick:r,children:"← All Challenges"}),g.jsx("div",{className:"admin-card",style:{maxWidth:"780px",marginBottom:"1rem"},children:g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem"},children:[g.jsxs("div",{children:[g.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600,marginBottom:"0.25rem"},children:"CHALLENGE CODE"}),g.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"2.5rem",color:"var(--primary)",letterSpacing:"0.15em",marginBottom:"0.5rem"},children:t.code}),g.jsxs("div",{style:{display:"flex",gap:"1rem",fontSize:"0.82rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[g.jsxs("span",{children:["📐 ",pn.digits," digit",pn.digits>1?"s":""]}),g.jsxs("span",{children:["🔢 ",pn.count," numbers"]}),g.jsxs("span",{children:["🎮 ",e.length," questions"]}),g.jsxs("span",{children:["👥 ",a.length," joined"]})]})]}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.5rem"},children:[g.jsx(jE,{status:s.status}),pi&&g.jsx("button",{className:"btn btn-green btn-lg",onClick:v,disabled:c||a.length===0,children:c?"Starting...":"▶ Start Challenge"}),tn&&g.jsx("button",{className:"btn btn-red",onClick:A,disabled:f,children:f?"Finishing...":"⏹ End Challenge"}),K&&g.jsx("button",{className:"btn btn-outline",onClick:n,children:"+ New Challenge"})]})]})}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 320px",gap:"1rem",alignItems:"start"},children:[g.jsxs("div",{className:"admin-card",children:[g.jsxs("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"1rem"},children:["Live Scoreboard",tn&&g.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.72rem",color:"#1D9E75",fontWeight:400},children:"● live"})]}),a.length===0?g.jsxs("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-muted)",fontSize:"0.9rem"},children:["Waiting for students to join...",g.jsx("br",{}),g.jsxs("span",{style:{fontSize:"0.8rem",opacity:.7},children:["Share code ",g.jsx("strong",{children:t.code})," with your students"]})]}):g.jsxs("div",{children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 80px 80px 80px 80px",gap:"8px",padding:"0 0.5rem 0.5rem",borderBottom:"2px solid var(--border)",fontSize:"0.72rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:[g.jsx("span",{children:"Student"}),g.jsx("span",{style:{textAlign:"center"},children:"Done"}),g.jsx("span",{style:{textAlign:"center"},children:"Correct"}),g.jsx("span",{style:{textAlign:"center"},children:"Score"}),g.jsx("span",{style:{textAlign:"center"},children:"Status"})]}),Z.map((V,U)=>g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 80px 80px 80px 80px",gap:"8px",padding:"0.6rem 0.5rem",borderBottom:"1px solid var(--border)",alignItems:"center",background:U===0&&K?"#FFFBEA":"transparent"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[K&&U===0&&g.jsx("span",{children:"🥇"}),K&&U===1&&g.jsx("span",{children:"🥈"}),K&&U===2&&g.jsx("span",{children:"🥉"}),g.jsx("span",{style:{fontWeight:700,fontSize:"0.875rem"},children:V.name})]}),g.jsx("div",{style:{textAlign:"center",fontSize:"0.875rem"},children:V.questionsAttempted||0}),g.jsx("div",{style:{textAlign:"center",fontSize:"0.875rem"},children:V.totalCorrect||0}),g.jsx("div",{style:{textAlign:"center",fontWeight:700,fontSize:"0.95rem",color:"var(--primary)"},children:V.totalScore||0}),g.jsx("div",{style:{textAlign:"center"},children:g.jsx(jE,{status:V.status})})]},V.uid))]})]}),g.jsxs("div",{className:"admin-card",style:{maxHeight:"500px",overflowY:"auto"},children:[g.jsx("p",{style:{fontWeight:700,fontSize:"0.9rem",marginBottom:"0.75rem"},children:"Activity log"}),_.length===0?g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"Waiting for activity..."}):_.map((V,U)=>g.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",padding:"0.3rem 0",borderBottom:"1px solid var(--border)"},children:V},U))]})]})]})}function UF({onSelect:t,onCreateNew:e}){const[n,r]=H.useState([]),[i,s]=H.useState(!0);if(H.useEffect(()=>{SF().then(r).catch(a=>console.error("Failed to load challenges:",a)).finally(()=>s(!1))},[]),i)return g.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Loading challenges..."});const o={waiting:{color:"#BA7517",bg:"#FAEEDA",label:"Waiting"},active:{color:"#1D9E75",bg:"#E1F5EE",label:"Active"}};return g.jsxs("div",{style:{maxWidth:"680px"},children:[g.jsx("p",{style:{fontWeight:700,fontSize:"1.05rem",marginBottom:"1.25rem"},children:"Select a Challenge to Monitor"}),g.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[n.map(a=>{var c,h,f,p;const u=o[a.status]||o.waiting;return g.jsx("button",{onClick:()=>t(a.id),className:"admin-card",style:{textAlign:"left",cursor:"pointer",border:"2px solid var(--border)",transition:"border-color 0.15s",width:"100%",background:"var(--surface)"},onMouseEnter:_=>_.currentTarget.style.borderColor="var(--primary)",onMouseLeave:_=>_.currentTarget.style.borderColor="var(--border)",children:g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"1.6rem",color:"var(--primary)",letterSpacing:"0.12em",marginBottom:"0.25rem"},children:a.code}),g.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",display:"flex",gap:"1rem",flexWrap:"wrap"},children:[g.jsxs("span",{children:["📐 ",(c=a.config)==null?void 0:c.digits," digits"]}),g.jsxs("span",{children:["🔢 ",(h=a.config)==null?void 0:h.count," numbers"]}),g.jsxs("span",{children:["🎮 ",((f=a.config)==null?void 0:f.questionCount)??"?"," questions"]}),((p=a.createdAt)==null?void 0:p.toDate)&&g.jsxs("span",{children:["🕐 ",a.createdAt.toDate().toLocaleTimeString()]})]})]}),g.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"0.2rem 0.7rem",borderRadius:"999px",background:u.bg,color:u.color,whiteSpace:"nowrap"},children:["● ",u.label]})]})},a.id)}),n.length===0&&g.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",padding:"0.5rem 0"},children:"No active challenges yet."}),g.jsxs("button",{onClick:e,className:"admin-card",style:{textAlign:"left",cursor:"pointer",border:"2px dashed var(--border)",background:"transparent",width:"100%",color:"var(--text-muted)",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[g.jsx("span",{style:{fontSize:"1.2rem"},children:"＋"}),"Create a new challenge"]})]})]})}function BF(){const[t,e]=H.useState("loading"),[n,r]=H.useState(null),[i,s]=H.useState({});H.useEffect(()=>{const h=sessionStorage.getItem("monitoringChallengeId");if(!h){e("selecting");return}bE(h).then(f=>{if(f&&(f.status==="waiting"||f.status==="active")){const{adminState:p={},..._}=f;r(_),s(p),e("monitoring")}else sessionStorage.removeItem("monitoringChallengeId"),e("selecting")}).catch(()=>{sessionStorage.removeItem("monitoringChallengeId"),e("selecting")})},[]);async function o(h){e("loading");try{const f=await bE(h);if(!f){e("selecting");return}const{adminState:p={},..._}=f;r(_),s(p),sessionStorage.setItem("monitoringChallengeId",h),e("monitoring")}catch(f){console.error("Failed to load challenge:",f),e("selecting")}}function a(h){r(h),s({}),sessionStorage.setItem("monitoringChallengeId",h.id),e("monitoring")}function u(){sessionStorage.removeItem("monitoringChallengeId"),r(null),s({}),e("selecting")}function c(){sessionStorage.removeItem("monitoringChallengeId"),r(null),s({}),e("selecting")}return t==="loading"?g.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Loading..."}):t==="selecting"?g.jsx(UF,{onSelect:o,onCreateNew:()=>e("creating")}):t==="creating"?g.jsxs("div",{children:[g.jsx("button",{className:"btn btn-outline",style:{marginBottom:"1rem",fontSize:"0.82rem"},onClick:()=>e("selecting"),children:"← Back"}),g.jsx(OF,{onCreated:a})]}):g.jsx(jF,{challenge:n,questions:n.questions,restoredAdminState:i,onBack:u,onReset:c})}const zF=[{id:"students",label:"👥 Students"},{id:"compare",label:"⚔️ Compare"},{id:"challenge",label:"🏆 Challenge"}];function $F(){const{user:t,logOut:e}=Fl(),[n,r]=H.useState("students");return g.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)"},children:[g.jsxs("div",{style:{background:"white",borderBottom:"2px solid var(--border)",padding:"0.75rem 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsx("h1",{style:{fontFamily:"Fredoka One",fontSize:"1.4rem",color:"var(--primary)",margin:0},children:"🥷 Number Ninja Admin"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[g.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:t==null?void 0:t.email}),g.jsx("button",{className:"btn btn-outline",onClick:e,children:"Sign out"})]})]}),g.jsx("div",{className:"tabs",style:{padding:"0 1.5rem",background:"white"},children:zF.map(i=>g.jsx("button",{className:`tab ${n===i.id?"active":""}`,onClick:()=>r(i.id),children:i.label},i.id))}),g.jsxs("div",{style:{padding:"1.5rem",maxWidth:"1500px",margin:"0 auto"},children:[n==="students"&&g.jsx(lF,{}),n==="compare"&&g.jsx(EF,{}),n==="challenge"&&g.jsx(BF,{})]})]})}function WF(){const{user:t,isAdmin:e,signIn:n}=Fl();return t===void 0?g.jsx("div",{className:"loader-wrap",children:g.jsxs("div",{className:"loader",children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]})}):t?e?g.jsx($F,{}):g.jsx(FV,{}):g.jsx("div",{className:"center-wrap",children:g.jsxs("div",{className:"card",style:{textAlign:"center",padding:"2.5rem"},children:[g.jsx("h1",{style:{fontFamily:"Fredoka One",fontSize:"2rem",marginBottom:"0.5rem"},children:"🥷 Admin Panel"}),g.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"2rem"},children:"Number Ninja — restricted access"}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:n,children:"Sign in with Google"})]})})}function qF(){return g.jsx(VV,{children:g.jsx(WF,{})})}gf.createRoot(document.getElementById("root")).render(g.jsx(PR.StrictMode,{children:g.jsx(qF,{})}));
