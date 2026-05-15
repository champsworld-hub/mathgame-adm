(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ex(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var K0={exports:{}},rh={},Q0={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),Tx=Symbol.for("react.portal"),Ix=Symbol.for("react.fragment"),Sx=Symbol.for("react.strict_mode"),Cx=Symbol.for("react.profiler"),Ax=Symbol.for("react.provider"),xx=Symbol.for("react.context"),Rx=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),Px=Symbol.for("react.memo"),Nx=Symbol.for("react.lazy"),by=Symbol.iterator;function bx(t){return t===null||typeof t!="object"?null:(t=by&&t[by]||t["@@iterator"],typeof t=="function"?t:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X0=Object.assign,J0={};function yo(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||Y0}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z0(){}Z0.prototype=yo.prototype;function tm(t,e,n){this.props=t,this.context=e,this.refs=J0,this.updater=n||Y0}var nm=tm.prototype=new Z0;nm.constructor=tm;X0(nm,yo.prototype);nm.isPureReactComponent=!0;var Dy=Array.isArray,eE=Object.prototype.hasOwnProperty,rm={current:null},tE={key:!0,ref:!0,__self:!0,__source:!0};function nE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)eE.call(e,r)&&!tE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yl,type:t,key:s,ref:o,props:i,_owner:rm.current}}function Dx(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function im(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Oy=/\/+/g;function Cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function Ou(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yl:case Tx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cd(o,0):r,Dy(i)?(n="",t!=null&&(n=t.replace(Oy,"$&/")+"/"),Ou(i,e,n,"",function(c){return c})):i!=null&&(im(i)&&(i=Dx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Oy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Cd(s,a);o+=Ou(s,e,n,u,i)}else if(u=bx(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Cd(s,a++),o+=Ou(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function lu(t,e,n){if(t==null)return t;var r=[],i=0;return Ou(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Mx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Mu={transition:null},Lx={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Mu,ReactCurrentOwner:rm};function rE(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:lu,forEach:function(t,e,n){lu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lu(t,function(){e++}),e},toArray:function(t){return lu(t,function(e){return e})||[]},only:function(t){if(!im(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=yo;oe.Fragment=Ix;oe.Profiler=Cx;oe.PureComponent=tm;oe.StrictMode=Sx;oe.Suspense=kx;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx;oe.act=rE;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=X0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)eE.call(e,u)&&!tE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:yl,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:xx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ax,_context:t},t.Consumer=t};oe.createElement=nE;oe.createFactory=function(t){var e=nE.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:Rx,render:t}};oe.isValidElement=im;oe.lazy=function(t){return{$$typeof:Nx,_payload:{_status:-1,_result:t},_init:Mx}};oe.memo=function(t,e){return{$$typeof:Px,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Mu.transition;Mu.transition={};try{t()}finally{Mu.transition=e}};oe.unstable_act=rE;oe.useCallback=function(t,e){return Mt.current.useCallback(t,e)};oe.useContext=function(t){return Mt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Mt.current.useEffect(t,e)};oe.useId=function(){return Mt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Mt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};oe.useRef=function(t){return Mt.current.useRef(t)};oe.useState=function(t){return Mt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Mt.current.useTransition()};oe.version="18.3.1";Q0.exports=oe;var W=Q0.exports;const Vx=Ex(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx=W,jx=Symbol.for("react.element"),Ux=Symbol.for("react.fragment"),zx=Object.prototype.hasOwnProperty,Bx=Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wx={key:!0,ref:!0,__self:!0,__source:!0};function iE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zx.call(e,r)&&!Wx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jx,type:t,key:s,ref:o,props:i,_owner:Bx.current}}rh.Fragment=Ux;rh.jsx=iE;rh.jsxs=iE;K0.exports=rh;var g=K0.exports,If={},sE={exports:{}},en={},oE={exports:{}},aE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,Z){var F=K.length;K.push(Z);e:for(;0<F;){var U=F-1>>>1,z=K[U];if(0<i(z,Z))K[U]=Z,K[F]=z,F=U;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Z=K[0],F=K.pop();if(F!==Z){K[0]=F;e:for(var U=0,z=K.length,q=z>>>1;U<q;){var Ie=2*(U+1)-1,we=K[Ie],Oe=Ie+1,Fe=K[Oe];if(0>i(we,F))Oe<z&&0>i(Fe,we)?(K[U]=Fe,K[Oe]=F,U=Oe):(K[U]=we,K[Ie]=F,U=Ie);else if(Oe<z&&0>i(Fe,F))K[U]=Fe,K[Oe]=F,U=Oe;else break e}}return Z}function i(K,Z){var F=K.sortIndex-Z.sortIndex;return F!==0?F:K.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,_=!1,v=!1,S=!1,N=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(K){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=K)r(c),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(c)}}function k(K){if(S=!1,x(K),!v)if(n(u)!==null)v=!0,mi(O);else{var Z=n(c);Z!==null&&nn(k,Z.startTime-K)}}function O(K,Z){v=!1,S&&(S=!1,C(w),w=-1),_=!0;var F=p;try{for(x(Z),f=n(u);f!==null&&(!(f.expirationTime>Z)||K&&!P());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var z=U(f.expirationTime<=Z);Z=t.unstable_now(),typeof z=="function"?f.callback=z:f===n(u)&&r(u),x(Z)}else r(u);f=n(u)}if(f!==null)var q=!0;else{var Ie=n(c);Ie!==null&&nn(k,Ie.startTime-Z),q=!1}return q}finally{f=null,p=F,_=!1}}var V=!1,T=null,w=-1,I=5,A=-1;function P(){return!(t.unstable_now()-A<I)}function b(){if(T!==null){var K=t.unstable_now();A=K;var Z=!0;try{Z=T(!0,K)}finally{Z?R():(V=!1,T=null)}}else V=!1}var R;if(typeof E=="function")R=function(){E(b)};else if(typeof MessageChannel<"u"){var Vt=new MessageChannel,gn=Vt.port2;Vt.port1.onmessage=b,R=function(){gn.postMessage(null)}}else R=function(){N(b,0)};function mi(K){T=K,V||(V=!0,R())}function nn(K,Z){w=N(function(){K(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,mi(O))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var F=p;p=Z;try{return K()}finally{p=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,Z){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var F=p;p=K;try{return Z()}finally{p=F}},t.unstable_scheduleCallback=function(K,Z,F){var U=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?U+F:U):F=U,K){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=F+z,K={id:h++,callback:Z,priorityLevel:K,startTime:F,expirationTime:z,sortIndex:-1},F>U?(K.sortIndex=F,e(c,K),n(u)===null&&K===n(c)&&(S?(C(w),w=-1):S=!0,nn(k,F-U))):(K.sortIndex=z,e(u,K),v||_||(v=!0,mi(O))),K},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(K){var Z=p;return function(){var F=p;p=Z;try{return K.apply(this,arguments)}finally{p=F}}}})(aE);oE.exports=aE;var $x=oE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx=W,Zt=$x;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lE=new Set,Da={};function ts(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Da[t]=e,t=0;t<e.length;t++)lE.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=Object.prototype.hasOwnProperty,Hx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,My={},Ly={};function Gx(t){return Sf.call(Ly,t)?!0:Sf.call(My,t)?!1:Hx.test(t)?Ly[t]=!0:(My[t]=!0,!1)}function Kx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qx(t,e,n,r){if(e===null||typeof e>"u"||Kx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sm=/[\-:]([a-z])/g;function om(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sm,om);mt[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sm,om);mt[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sm,om);mt[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function am(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qx(e,n,i,r)&&(n=null),r||i===null?Gx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wr=qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uu=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),uE=Symbol.for("react.provider"),cE=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),xf=Symbol.for("react.suspense_list"),cm=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),hE=Symbol.for("react.offscreen"),Vy=Symbol.iterator;function Ho(t){return t===null||typeof t!="object"?null:(t=Vy&&t[Vy]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Ad;function oa(t){if(Ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ad=e&&e[1]||""}return`
`+Ad+t}var xd=!1;function Rd(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function Yx(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=Rd(t.type,!1),t;case 11:return t=Rd(t.type.render,!1),t;case 1:return t=Rd(t.type,!0),t;default:return""}}function Rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case ws:return"Portal";case Cf:return"Profiler";case lm:return"StrictMode";case Af:return"Suspense";case xf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cE:return(t.displayName||"Context")+".Consumer";case uE:return(t._context.displayName||"Context")+".Provider";case um:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cm:return e=t.displayName||null,e!==null?e:Rf(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Rf(t(e))}catch{}}return null}function Xx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rf(e);case 8:return e===lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ti(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jx(t){var e=dE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cu(t){t._valueTracker||(t._valueTracker=Jx(t))}function fE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kf(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ti(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pE(t,e){e=e.checked,e!=null&&am(t,"checked",e,!1)}function Pf(t,e){pE(t,e);var n=ti(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nf(t,e.type,ti(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nf(t,e,n){(e!=="number"||nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ti(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(aa(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ti(n)}}function mE(t,e){var n=ti(e.value),r=ti(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hu,_E=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hu=hu||document.createElement("div"),hu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zx=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){Zx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function yE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function vE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var eR=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Of(t,e){if(e){if(eR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lf=null;function hm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vf=null,Ms=null,Ls=null;function By(t){if(t=El(t)){if(typeof Vf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=lh(e),Vf(t.stateNode,t.type,e))}}function wE(t){Ms?Ls?Ls.push(t):Ls=[t]:Ms=t}function EE(){if(Ms){var t=Ms,e=Ls;if(Ls=Ms=null,By(t),e)for(t=0;t<e.length;t++)By(e[t])}}function TE(t,e){return t(e)}function IE(){}var kd=!1;function SE(t,e,n){if(kd)return t(e,n);kd=!0;try{return TE(t,e,n)}finally{kd=!1,(Ms!==null||Ls!==null)&&(IE(),EE())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=lh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Ff=!1;if(cr)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Ff=!1}function tR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var pa=!1,rc=null,ic=!1,jf=null,nR={onError:function(t){pa=!0,rc=t}};function rR(t,e,n,r,i,s,o,a,u){pa=!1,rc=null,tR.apply(nR,arguments)}function iR(t,e,n,r,i,s,o,a,u){if(rR.apply(this,arguments),pa){if(pa){var c=rc;pa=!1,rc=null}else throw Error(B(198));ic||(ic=!0,jf=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function CE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wy(t){if(ns(t)!==t)throw Error(B(188))}function sR(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wy(i),t;if(s===r)return Wy(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function AE(t){return t=sR(t),t!==null?xE(t):null}function xE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xE(t);if(e!==null)return e;t=t.sibling}return null}var RE=Zt.unstable_scheduleCallback,$y=Zt.unstable_cancelCallback,oR=Zt.unstable_shouldYield,aR=Zt.unstable_requestPaint,$e=Zt.unstable_now,lR=Zt.unstable_getCurrentPriorityLevel,dm=Zt.unstable_ImmediatePriority,kE=Zt.unstable_UserBlockingPriority,sc=Zt.unstable_NormalPriority,uR=Zt.unstable_LowPriority,PE=Zt.unstable_IdlePriority,ih=null,Vn=null;function cR(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(ih,t,void 0,(t.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:fR,hR=Math.log,dR=Math.LN2;function fR(t){return t>>>=0,t===0?32:31-(hR(t)/dR|0)|0}var du=64,fu=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=la(a):(s&=o,s!==0&&(r=la(s)))}else o=n&~i,o!==0?r=la(o):s!==0&&(r=la(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Sn(e),i=1<<n,r|=t[n],e&=~i;return r}function pR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Sn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=pR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function NE(){var t=du;return du<<=1,!(du&4194240)&&(du=64),t}function Pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Sn(e),t[e]=n}function gR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function bE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var DE,pm,OE,ME,LE,zf=!1,pu=[],Br=null,Wr=null,$r=null,La=new Map,Va=new Map,br=[],_R="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qy(t,e){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Wr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function Ko(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&pm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yR(t,e,n,r,i){switch(e){case"focusin":return Br=Ko(Br,t,e,n,r,i),!0;case"dragenter":return Wr=Ko(Wr,t,e,n,r,i),!0;case"mouseover":return $r=Ko($r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return La.set(s,Ko(La.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Va.set(s,Ko(Va.get(s)||null,t,e,n,r,i)),!0}return!1}function VE(t){var e=xi(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=CE(n),e!==null){t.blockedOn=e,LE(t.priority,function(){OE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lf=r,n.target.dispatchEvent(r),Lf=null}else return e=El(n),e!==null&&pm(e),t.blockedOn=n,!1;e.shift()}return!0}function Hy(t,e,n){Lu(t)&&n.delete(e)}function vR(){zf=!1,Br!==null&&Lu(Br)&&(Br=null),Wr!==null&&Lu(Wr)&&(Wr=null),$r!==null&&Lu($r)&&($r=null),La.forEach(Hy),Va.forEach(Hy)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,vR)))}function Fa(t){function e(i){return Qo(i,t)}if(0<pu.length){Qo(pu[0],t);for(var n=1;n<pu.length;n++){var r=pu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Br!==null&&Qo(Br,t),Wr!==null&&Qo(Wr,t),$r!==null&&Qo($r,t),La.forEach(e),Va.forEach(e),n=0;n<br.length;n++)r=br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<br.length&&(n=br[0],n.blockedOn===null);)VE(n),n.blockedOn===null&&br.shift()}var Vs=wr.ReactCurrentBatchConfig,ac=!0;function wR(t,e,n,r){var i=ye,s=Vs.transition;Vs.transition=null;try{ye=1,mm(t,e,n,r)}finally{ye=i,Vs.transition=s}}function ER(t,e,n,r){var i=ye,s=Vs.transition;Vs.transition=null;try{ye=4,mm(t,e,n,r)}finally{ye=i,Vs.transition=s}}function mm(t,e,n,r){if(ac){var i=Bf(t,e,n,r);if(i===null)Ud(t,e,r,lc,n),qy(t,r);else if(yR(i,t,e,n,r))r.stopPropagation();else if(qy(t,r),e&4&&-1<_R.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&DE(s),s=Bf(t,e,n,r),s===null&&Ud(t,e,r,lc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ud(t,e,r,null,n)}}var lc=null;function Bf(t,e,n,r){if(lc=null,t=hm(r),t=xi(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=CE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lc=t,null}function FE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lR()){case dm:return 1;case kE:return 4;case sc:case uR:return 16;case PE:return 536870912;default:return 16}default:return 16}}var Fr=null,gm=null,Vu=null;function jE(){if(Vu)return Vu;var t,e=gm,n=e.length,r,i="value"in Fr?Fr.value:Fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Vu=i.slice(t,1<r?1-r:void 0)}function Fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mu(){return!0}function Gy(){return!1}function tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mu:Gy,this.isPropagationStopped=Gy,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mu)},persist:function(){},isPersistent:mu}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_m=tn(vo),wl=Ve({},vo,{view:0,detail:0}),TR=tn(wl),Nd,bd,Yo,sh=Ve({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ym,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Nd=t.screenX-Yo.screenX,bd=t.screenY-Yo.screenY):bd=Nd=0,Yo=t),Nd)},movementY:function(t){return"movementY"in t?t.movementY:bd}}),Ky=tn(sh),IR=Ve({},sh,{dataTransfer:0}),SR=tn(IR),CR=Ve({},wl,{relatedTarget:0}),Dd=tn(CR),AR=Ve({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),xR=tn(AR),RR=Ve({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kR=tn(RR),PR=Ve({},vo,{data:0}),Qy=tn(PR),NR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DR[t])?!!e[t]:!1}function ym(){return OR}var MR=Ve({},wl,{key:function(t){if(t.key){var e=NR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ym,charCode:function(t){return t.type==="keypress"?Fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LR=tn(MR),VR=Ve({},sh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yy=tn(VR),FR=Ve({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ym}),jR=tn(FR),UR=Ve({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),zR=tn(UR),BR=Ve({},sh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WR=tn(BR),$R=[9,13,27,32],vm=cr&&"CompositionEvent"in window,ma=null;cr&&"documentMode"in document&&(ma=document.documentMode);var qR=cr&&"TextEvent"in window&&!ma,UE=cr&&(!vm||ma&&8<ma&&11>=ma),Xy=" ",Jy=!1;function zE(t,e){switch(t){case"keyup":return $R.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function BE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function HR(t,e){switch(t){case"compositionend":return BE(e);case"keypress":return e.which!==32?null:(Jy=!0,Xy);case"textInput":return t=e.data,t===Xy&&Jy?null:t;default:return null}}function GR(t,e){if(Ts)return t==="compositionend"||!vm&&zE(t,e)?(t=jE(),Vu=gm=Fr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return UE&&e.locale!=="ko"?null:e.data;default:return null}}var KR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KR[t.type]:e==="textarea"}function WE(t,e,n,r){wE(r),e=uc(e,"onChange"),0<e.length&&(n=new _m("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ga=null,ja=null;function QR(t){eT(t,0)}function oh(t){var e=Cs(t);if(fE(e))return t}function YR(t,e){if(t==="change")return e}var $E=!1;if(cr){var Od;if(cr){var Md="oninput"in document;if(!Md){var ev=document.createElement("div");ev.setAttribute("oninput","return;"),Md=typeof ev.oninput=="function"}Od=Md}else Od=!1;$E=Od&&(!document.documentMode||9<document.documentMode)}function tv(){ga&&(ga.detachEvent("onpropertychange",qE),ja=ga=null)}function qE(t){if(t.propertyName==="value"&&oh(ja)){var e=[];WE(e,ja,t,hm(t)),SE(QR,e)}}function XR(t,e,n){t==="focusin"?(tv(),ga=e,ja=n,ga.attachEvent("onpropertychange",qE)):t==="focusout"&&tv()}function JR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oh(ja)}function ZR(t,e){if(t==="click")return oh(e)}function ek(t,e){if(t==="input"||t==="change")return oh(e)}function tk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:tk;function Ua(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sf.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function nv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rv(t,e){var n=nv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nv(n)}}function HE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?HE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function GE(){for(var t=window,e=nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nc(t.document)}return e}function wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nk(t){var e=GE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&HE(n.ownerDocument.documentElement,n)){if(r!==null&&wm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rv(n,s);var o=rv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rk=cr&&"documentMode"in document&&11>=document.documentMode,Is=null,Wf=null,_a=null,$f=!1;function iv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$f||Is==null||Is!==nc(r)||(r=Is,"selectionStart"in r&&wm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_a&&Ua(_a,r)||(_a=r,r=uc(Wf,"onSelect"),0<r.length&&(e=new _m("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function gu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:gu("Animation","AnimationEnd"),animationiteration:gu("Animation","AnimationIteration"),animationstart:gu("Animation","AnimationStart"),transitionend:gu("Transition","TransitionEnd")},Ld={},KE={};cr&&(KE=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function ah(t){if(Ld[t])return Ld[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in KE)return Ld[t]=e[n];return t}var QE=ah("animationend"),YE=ah("animationiteration"),XE=ah("animationstart"),JE=ah("transitionend"),ZE=new Map,sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(t,e){ZE.set(t,e),ts(e,[t])}for(var Vd=0;Vd<sv.length;Vd++){var Fd=sv[Vd],ik=Fd.toLowerCase(),sk=Fd[0].toUpperCase()+Fd.slice(1);ci(ik,"on"+sk)}ci(QE,"onAnimationEnd");ci(YE,"onAnimationIteration");ci(XE,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(JE,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ok=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function ov(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iR(r,e,void 0,t),t.currentTarget=null}function eT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ov(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ov(i,a,c),s=u}}}if(ic)throw t=jf,ic=!1,jf=null,t}function Pe(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var r=t+"__bubble";n.has(r)||(tT(e,t,2,!1),n.add(r))}function jd(t,e,n){var r=0;e&&(r|=4),tT(n,t,r,e)}var _u="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[_u]){t[_u]=!0,lE.forEach(function(n){n!=="selectionchange"&&(ok.has(n)||jd(n,!1,t),jd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_u]||(e[_u]=!0,jd("selectionchange",!1,e))}}function tT(t,e,n,r){switch(FE(e)){case 1:var i=wR;break;case 4:i=ER;break;default:i=mm}n=i.bind(null,e,n,t),i=void 0,!Ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ud(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}SE(function(){var c=s,h=hm(n),f=[];e:{var p=ZE.get(t);if(p!==void 0){var _=_m,v=t;switch(t){case"keypress":if(Fu(n)===0)break e;case"keydown":case"keyup":_=LR;break;case"focusin":v="focus",_=Dd;break;case"focusout":v="blur",_=Dd;break;case"beforeblur":case"afterblur":_=Dd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ky;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=SR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=jR;break;case QE:case YE:case XE:_=xR;break;case JE:_=zR;break;case"scroll":_=TR;break;case"wheel":_=WR;break;case"copy":case"cut":case"paste":_=kR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Yy}var S=(e&4)!==0,N=!S&&t==="scroll",C=S?p!==null?p+"Capture":null:p;S=[];for(var E=c,x;E!==null;){x=E;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,C!==null&&(k=Ma(E,C),k!=null&&S.push(Ba(E,k,x)))),N)break;E=E.return}0<S.length&&(p=new _(p,v,null,n,h),f.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==Lf&&(v=n.relatedTarget||n.fromElement)&&(xi(v)||v[hr]))break e;if((_||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?xi(v):null,v!==null&&(N=ns(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(S=Ky,k="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(S=Yy,k="onPointerLeave",C="onPointerEnter",E="pointer"),N=_==null?p:Cs(_),x=v==null?p:Cs(v),p=new S(k,E+"leave",_,n,h),p.target=N,p.relatedTarget=x,k=null,xi(h)===c&&(S=new S(C,E+"enter",v,n,h),S.target=x,S.relatedTarget=N,k=S),N=k,_&&v)t:{for(S=_,C=v,E=0,x=S;x;x=ms(x))E++;for(x=0,k=C;k;k=ms(k))x++;for(;0<E-x;)S=ms(S),E--;for(;0<x-E;)C=ms(C),x--;for(;E--;){if(S===C||C!==null&&S===C.alternate)break t;S=ms(S),C=ms(C)}S=null}else S=null;_!==null&&av(f,p,_,S,!1),v!==null&&N!==null&&av(f,N,v,S,!0)}}e:{if(p=c?Cs(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var O=YR;else if(Zy(p))if($E)O=ek;else{O=JR;var V=XR}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=ZR);if(O&&(O=O(t,c))){WE(f,O,n,h);break e}V&&V(t,p,c),t==="focusout"&&(V=p._wrapperState)&&V.controlled&&p.type==="number"&&Nf(p,"number",p.value)}switch(V=c?Cs(c):window,t){case"focusin":(Zy(V)||V.contentEditable==="true")&&(Is=V,Wf=c,_a=null);break;case"focusout":_a=Wf=Is=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,iv(f,n,h);break;case"selectionchange":if(rk)break;case"keydown":case"keyup":iv(f,n,h)}var T;if(vm)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Ts?zE(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(UE&&n.locale!=="ko"&&(Ts||w!=="onCompositionStart"?w==="onCompositionEnd"&&Ts&&(T=jE()):(Fr=h,gm="value"in Fr?Fr.value:Fr.textContent,Ts=!0)),V=uc(c,w),0<V.length&&(w=new Qy(w,t,null,n,h),f.push({event:w,listeners:V}),T?w.data=T:(T=BE(n),T!==null&&(w.data=T)))),(T=qR?HR(t,n):GR(t,n))&&(c=uc(c,"onBeforeInput"),0<c.length&&(h=new Qy("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}eT(f,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ma(t,n),s!=null&&r.unshift(Ba(t,s,i)),s=Ma(t,e),s!=null&&r.push(Ba(t,s,i))),t=t.return}return r}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function av(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ma(n,s),u!=null&&o.unshift(Ba(n,u,a))):i||(u=Ma(n,s),u!=null&&o.push(Ba(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ak=/\r\n?/g,lk=/\u0000|\uFFFD/g;function lv(t){return(typeof t=="string"?t:""+t).replace(ak,`
`).replace(lk,"")}function yu(t,e,n){if(e=lv(e),lv(t)!==e&&n)throw Error(B(425))}function cc(){}var qf=null,Hf=null;function Gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kf=typeof setTimeout=="function"?setTimeout:void 0,uk=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,ck=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(t){return uv.resolve(null).then(t).catch(hk)}:Kf;function hk(t){setTimeout(function(){throw t})}function zd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fa(e)}function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),Ln="__reactFiber$"+wo,Wa="__reactProps$"+wo,hr="__reactContainer$"+wo,Qf="__reactEvents$"+wo,dk="__reactListeners$"+wo,fk="__reactHandles$"+wo;function xi(t){var e=t[Ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hr]||n[Ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cv(t);t!==null;){if(n=t[Ln])return n;t=cv(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[Ln]||t[hr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function lh(t){return t[Wa]||null}var Yf=[],As=-1;function hi(t){return{current:t}}function be(t){0>As||(t.current=Yf[As],Yf[As]=null,As--)}function xe(t,e){As++,Yf[As]=t.current,t.current=e}var ni={},xt=hi(ni),Bt=hi(!1),Vi=ni;function Ks(t,e){var n=t.type.contextTypes;if(!n)return ni;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function hc(){be(Bt),be(xt)}function hv(t,e,n){if(xt.current!==ni)throw Error(B(168));xe(xt,e),xe(Bt,n)}function nT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,Xx(t)||"Unknown",i));return Ve({},n,r)}function dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ni,Vi=xt.current,xe(xt,t),xe(Bt,Bt.current),!0}function dv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=nT(t,e,Vi),r.__reactInternalMemoizedMergedChildContext=t,be(Bt),be(xt),xe(xt,t)):be(Bt),xe(Bt,n)}var Xn=null,uh=!1,Bd=!1;function rT(t){Xn===null?Xn=[t]:Xn.push(t)}function pk(t){uh=!0,rT(t)}function di(){if(!Bd&&Xn!==null){Bd=!0;var t=0,e=ye;try{var n=Xn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,uh=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(t+1)),RE(dm,di),i}finally{ye=e,Bd=!1}}return null}var xs=[],Rs=0,fc=null,pc=0,an=[],ln=0,Fi=null,er=1,tr="";function Ti(t,e){xs[Rs++]=pc,xs[Rs++]=fc,fc=t,pc=e}function iT(t,e,n){an[ln++]=er,an[ln++]=tr,an[ln++]=Fi,Fi=t;var r=er;t=tr;var i=32-Sn(r)-1;r&=~(1<<i),n+=1;var s=32-Sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,er=1<<32-Sn(e)+i|n<<i|r,tr=s+t}else er=1<<s|n<<i|r,tr=t}function Em(t){t.return!==null&&(Ti(t,1),iT(t,1,0))}function Tm(t){for(;t===fc;)fc=xs[--Rs],xs[Rs]=null,pc=xs[--Rs],xs[Rs]=null;for(;t===Fi;)Fi=an[--ln],an[ln]=null,tr=an[--ln],an[ln]=null,er=an[--ln],an[ln]=null}var Jt=null,Yt=null,De=!1,En=null;function sT(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fi!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jt=t,Yt=null,!0):!1;default:return!1}}function Xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jf(t){if(De){var e=Yt;if(e){var n=e;if(!fv(t,e)){if(Xf(t))throw Error(B(418));e=qr(n.nextSibling);var r=Jt;e&&fv(t,e)?sT(r,n):(t.flags=t.flags&-4097|2,De=!1,Jt=t)}}else{if(Xf(t))throw Error(B(418));t.flags=t.flags&-4097|2,De=!1,Jt=t}}}function pv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jt=t}function vu(t){if(t!==Jt)return!1;if(!De)return pv(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gf(t.type,t.memoizedProps)),e&&(e=Yt)){if(Xf(t))throw oT(),Error(B(418));for(;e;)sT(t,e),e=qr(e.nextSibling)}if(pv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yt=qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yt=null}}else Yt=Jt?qr(t.stateNode.nextSibling):null;return!0}function oT(){for(var t=Yt;t;)t=qr(t.nextSibling)}function Qs(){Yt=Jt=null,De=!1}function Im(t){En===null?En=[t]:En.push(t)}var mk=wr.ReactCurrentBatchConfig;function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function wu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mv(t){var e=t._init;return e(t._payload)}function aT(t){function e(C,E){if(t){var x=C.deletions;x===null?(C.deletions=[E],C.flags|=16):x.push(E)}}function n(C,E){if(!t)return null;for(;E!==null;)e(C,E),E=E.sibling;return null}function r(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function i(C,E){return C=Qr(C,E),C.index=0,C.sibling=null,C}function s(C,E,x){return C.index=x,t?(x=C.alternate,x!==null?(x=x.index,x<E?(C.flags|=2,E):x):(C.flags|=2,E)):(C.flags|=1048576,E)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function a(C,E,x,k){return E===null||E.tag!==6?(E=Qd(x,C.mode,k),E.return=C,E):(E=i(E,x),E.return=C,E)}function u(C,E,x,k){var O=x.type;return O===Es?h(C,E,x.props.children,k,x.key):E!==null&&(E.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Pr&&mv(O)===E.type)?(k=i(E,x.props),k.ref=Xo(C,E,x),k.return=C,k):(k=qu(x.type,x.key,x.props,null,C.mode,k),k.ref=Xo(C,E,x),k.return=C,k)}function c(C,E,x,k){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=Yd(x,C.mode,k),E.return=C,E):(E=i(E,x.children||[]),E.return=C,E)}function h(C,E,x,k,O){return E===null||E.tag!==7?(E=Oi(x,C.mode,k,O),E.return=C,E):(E=i(E,x),E.return=C,E)}function f(C,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Qd(""+E,C.mode,x),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case uu:return x=qu(E.type,E.key,E.props,null,C.mode,x),x.ref=Xo(C,null,E),x.return=C,x;case ws:return E=Yd(E,C.mode,x),E.return=C,E;case Pr:var k=E._init;return f(C,k(E._payload),x)}if(aa(E)||Ho(E))return E=Oi(E,C.mode,x,null),E.return=C,E;wu(C,E)}return null}function p(C,E,x,k){var O=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return O!==null?null:a(C,E,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case uu:return x.key===O?u(C,E,x,k):null;case ws:return x.key===O?c(C,E,x,k):null;case Pr:return O=x._init,p(C,E,O(x._payload),k)}if(aa(x)||Ho(x))return O!==null?null:h(C,E,x,k,null);wu(C,x)}return null}function _(C,E,x,k,O){if(typeof k=="string"&&k!==""||typeof k=="number")return C=C.get(x)||null,a(E,C,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case uu:return C=C.get(k.key===null?x:k.key)||null,u(E,C,k,O);case ws:return C=C.get(k.key===null?x:k.key)||null,c(E,C,k,O);case Pr:var V=k._init;return _(C,E,x,V(k._payload),O)}if(aa(k)||Ho(k))return C=C.get(x)||null,h(E,C,k,O,null);wu(E,k)}return null}function v(C,E,x,k){for(var O=null,V=null,T=E,w=E=0,I=null;T!==null&&w<x.length;w++){T.index>w?(I=T,T=null):I=T.sibling;var A=p(C,T,x[w],k);if(A===null){T===null&&(T=I);break}t&&T&&A.alternate===null&&e(C,T),E=s(A,E,w),V===null?O=A:V.sibling=A,V=A,T=I}if(w===x.length)return n(C,T),De&&Ti(C,w),O;if(T===null){for(;w<x.length;w++)T=f(C,x[w],k),T!==null&&(E=s(T,E,w),V===null?O=T:V.sibling=T,V=T);return De&&Ti(C,w),O}for(T=r(C,T);w<x.length;w++)I=_(T,C,w,x[w],k),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?w:I.key),E=s(I,E,w),V===null?O=I:V.sibling=I,V=I);return t&&T.forEach(function(P){return e(C,P)}),De&&Ti(C,w),O}function S(C,E,x,k){var O=Ho(x);if(typeof O!="function")throw Error(B(150));if(x=O.call(x),x==null)throw Error(B(151));for(var V=O=null,T=E,w=E=0,I=null,A=x.next();T!==null&&!A.done;w++,A=x.next()){T.index>w?(I=T,T=null):I=T.sibling;var P=p(C,T,A.value,k);if(P===null){T===null&&(T=I);break}t&&T&&P.alternate===null&&e(C,T),E=s(P,E,w),V===null?O=P:V.sibling=P,V=P,T=I}if(A.done)return n(C,T),De&&Ti(C,w),O;if(T===null){for(;!A.done;w++,A=x.next())A=f(C,A.value,k),A!==null&&(E=s(A,E,w),V===null?O=A:V.sibling=A,V=A);return De&&Ti(C,w),O}for(T=r(C,T);!A.done;w++,A=x.next())A=_(T,C,w,A.value,k),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?w:A.key),E=s(A,E,w),V===null?O=A:V.sibling=A,V=A);return t&&T.forEach(function(b){return e(C,b)}),De&&Ti(C,w),O}function N(C,E,x,k){if(typeof x=="object"&&x!==null&&x.type===Es&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case uu:e:{for(var O=x.key,V=E;V!==null;){if(V.key===O){if(O=x.type,O===Es){if(V.tag===7){n(C,V.sibling),E=i(V,x.props.children),E.return=C,C=E;break e}}else if(V.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Pr&&mv(O)===V.type){n(C,V.sibling),E=i(V,x.props),E.ref=Xo(C,V,x),E.return=C,C=E;break e}n(C,V);break}else e(C,V);V=V.sibling}x.type===Es?(E=Oi(x.props.children,C.mode,k,x.key),E.return=C,C=E):(k=qu(x.type,x.key,x.props,null,C.mode,k),k.ref=Xo(C,E,x),k.return=C,C=k)}return o(C);case ws:e:{for(V=x.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(C,E.sibling),E=i(E,x.children||[]),E.return=C,C=E;break e}else{n(C,E);break}else e(C,E);E=E.sibling}E=Yd(x,C.mode,k),E.return=C,C=E}return o(C);case Pr:return V=x._init,N(C,E,V(x._payload),k)}if(aa(x))return v(C,E,x,k);if(Ho(x))return S(C,E,x,k);wu(C,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(C,E.sibling),E=i(E,x),E.return=C,C=E):(n(C,E),E=Qd(x,C.mode,k),E.return=C,C=E),o(C)):n(C,E)}return N}var Ys=aT(!0),lT=aT(!1),mc=hi(null),gc=null,ks=null,Sm=null;function Cm(){Sm=ks=gc=null}function Am(t){var e=mc.current;be(mc),t._currentValue=e}function Zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){gc=t,Sm=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function dn(t){var e=t._currentValue;if(Sm!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(gc===null)throw Error(B(308));ks=t,gc.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Ri=null;function xm(t){Ri===null?Ri=[t]:Ri.push(t)}function uT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xm(e)):(n.next=i.next,i.next=n),e.interleaved=n,dr(t,r)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nr=!1;function Rm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,dr(t,n)}return i=r.interleaved,i===null?(e.next=e,xm(r)):(e.next=i.next,i.next=e),r.interleaved=e,dr(t,n)}function ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fm(t,n)}}function gv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _c(t,e,n,r){var i=t.updateQueue;Nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,S=a;switch(p=e,_=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){f=v.call(_,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,p=typeof v=="function"?v.call(_,f,p):v,p==null)break e;f=Ve({},f,p);break e;case 2:Nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=f):h=h.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ui|=o,t.lanes=o,t.memoizedState=f}}function _v(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Tl={},Fn=hi(Tl),$a=hi(Tl),qa=hi(Tl);function ki(t){if(t===Tl)throw Error(B(174));return t}function km(t,e){switch(xe(qa,e),xe($a,t),xe(Fn,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Df(e,t)}be(Fn),xe(Fn,e)}function Xs(){be(Fn),be($a),be(qa)}function hT(t){ki(qa.current);var e=ki(Fn.current),n=Df(e,t.type);e!==n&&(xe($a,t),xe(Fn,n))}function Pm(t){$a.current===t&&(be(Fn),be($a))}var Me=hi(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wd=[];function Nm(){for(var t=0;t<Wd.length;t++)Wd[t]._workInProgressVersionPrimary=null;Wd.length=0}var Uu=wr.ReactCurrentDispatcher,$d=wr.ReactCurrentBatchConfig,ji=0,Le=null,Ye=null,rt=null,vc=!1,ya=!1,Ha=0,gk=0;function wt(){throw Error(B(321))}function bm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function Dm(t,e,n,r,i,s){if(ji=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Uu.current=t===null||t.memoizedState===null?wk:Ek,t=n(r,i),ya){s=0;do{if(ya=!1,Ha=0,25<=s)throw Error(B(301));s+=1,rt=Ye=null,e.updateQueue=null,Uu.current=Tk,t=n(r,i)}while(ya)}if(Uu.current=wc,e=Ye!==null&&Ye.next!==null,ji=0,rt=Ye=Le=null,vc=!1,e)throw Error(B(300));return t}function Om(){var t=Ha!==0;return Ha=0,t}function Mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Le.memoizedState=rt=t:rt=rt.next=t,rt}function fn(){if(Ye===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=rt===null?Le.memoizedState:rt.next;if(e!==null)rt=e,Ye=t;else{if(t===null)throw Error(B(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?Le.memoizedState=rt=t:rt=rt.next=t}return rt}function Ga(t,e){return typeof e=="function"?e(t):e}function qd(t){var e=fn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((ji&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Le.lanes|=h,Ui|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Rn(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,Ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hd(t){var e=fn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dT(){}function fT(t,e){var n=Le,r=fn(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,Mm(gT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Ka(9,mT.bind(null,n,r,i,e),void 0,null),at===null)throw Error(B(349));ji&30||pT(n,e,i)}return i}function pT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mT(t,e,n,r){e.value=n,e.getSnapshot=r,_T(e)&&yT(t)}function gT(t,e,n){return n(function(){_T(e)&&yT(t)})}function _T(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function yT(t){var e=dr(t,1);e!==null&&Cn(e,t,1,-1)}function yv(t){var e=Mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=vk.bind(null,Le,t),[e.memoizedState,t]}function Ka(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vT(){return fn().memoizedState}function zu(t,e,n,r){var i=Mn();Le.flags|=t,i.memoizedState=Ka(1|e,n,void 0,r===void 0?null:r)}function ch(t,e,n,r){var i=fn();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&bm(r,o.deps)){i.memoizedState=Ka(e,n,s,r);return}}Le.flags|=t,i.memoizedState=Ka(1|e,n,s,r)}function vv(t,e){return zu(8390656,8,t,e)}function Mm(t,e){return ch(2048,8,t,e)}function wT(t,e){return ch(4,2,t,e)}function ET(t,e){return ch(4,4,t,e)}function TT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function IT(t,e,n){return n=n!=null?n.concat([t]):null,ch(4,4,TT.bind(null,e,t),n)}function Lm(){}function ST(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function CT(t,e){var n=fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function AT(t,e,n){return ji&21?(Rn(n,e)||(n=NE(),Le.lanes|=n,Ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function _k(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=$d.transition;$d.transition={};try{t(!1),e()}finally{ye=n,$d.transition=r}}function xT(){return fn().memoizedState}function yk(t,e,n){var r=Kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},RT(t))kT(e,n);else if(n=uT(t,e,n,r),n!==null){var i=Dt();Cn(n,t,r,i),PT(n,e,r)}}function vk(t,e,n){var r=Kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(RT(t))kT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var u=e.interleaved;u===null?(i.next=i,xm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=uT(t,e,i,r),n!==null&&(i=Dt(),Cn(n,t,r,i),PT(n,e,r))}}function RT(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function kT(t,e){ya=vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function PT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fm(t,n)}}var wc={readContext:dn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},wk={readContext:dn,useCallback:function(t,e){return Mn().memoizedState=[t,e===void 0?null:e],t},useContext:dn,useEffect:vv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zu(4194308,4,TT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zu(4194308,4,t,e)},useInsertionEffect:function(t,e){return zu(4,2,t,e)},useMemo:function(t,e){var n=Mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yk.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=Mn();return t={current:t},e.memoizedState=t},useState:yv,useDebugValue:Lm,useDeferredValue:function(t){return Mn().memoizedState=t},useTransition:function(){var t=yv(!1),e=t[0];return t=_k.bind(null,t[1]),Mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=Mn();if(De){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),at===null)throw Error(B(349));ji&30||pT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vv(gT.bind(null,r,s,t),[t]),r.flags|=2048,Ka(9,mT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mn(),e=at.identifierPrefix;if(De){var n=tr,r=er;n=(r&~(1<<32-Sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ek={readContext:dn,useCallback:ST,useContext:dn,useEffect:Mm,useImperativeHandle:IT,useInsertionEffect:wT,useLayoutEffect:ET,useMemo:CT,useReducer:qd,useRef:vT,useState:function(){return qd(Ga)},useDebugValue:Lm,useDeferredValue:function(t){var e=fn();return AT(e,Ye.memoizedState,t)},useTransition:function(){var t=qd(Ga)[0],e=fn().memoizedState;return[t,e]},useMutableSource:dT,useSyncExternalStore:fT,useId:xT,unstable_isNewReconciler:!1},Tk={readContext:dn,useCallback:ST,useContext:dn,useEffect:Mm,useImperativeHandle:IT,useInsertionEffect:wT,useLayoutEffect:ET,useMemo:CT,useReducer:Hd,useRef:vT,useState:function(){return Hd(Ga)},useDebugValue:Lm,useDeferredValue:function(t){var e=fn();return Ye===null?e.memoizedState=t:AT(e,Ye.memoizedState,t)},useTransition:function(){var t=Hd(Ga)[0],e=fn().memoizedState;return[t,e]},useMutableSource:dT,useSyncExternalStore:fT,useId:xT,unstable_isNewReconciler:!1};function vn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ep(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hh={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Kr(t),s=ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(Cn(e,t,i,r),ju(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Kr(t),s=ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(Cn(e,t,i,r),ju(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=Kr(t),i=ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hr(t,i,r),e!==null&&(Cn(e,t,r,n),ju(e,t,r))}};function wv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,r)||!Ua(i,s):!0}function NT(t,e,n){var r=!1,i=ni,s=e.contextType;return typeof s=="object"&&s!==null?s=dn(s):(i=Wt(e)?Vi:xt.current,r=e.contextTypes,s=(r=r!=null)?Ks(t,i):ni),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ev(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hh.enqueueReplaceState(e,e.state,null)}function tp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Rm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dn(s):(s=Wt(e)?Vi:xt.current,i.context=Ks(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ep(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hh.enqueueReplaceState(i,i.state,null),_c(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",r=e;do n+=Yx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function np(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ik=typeof WeakMap=="function"?WeakMap:Map;function bT(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tc||(Tc=!0,dp=r),np(t,e)},n}function DT(t,e,n){n=ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){np(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){np(t,e),typeof r!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ik;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Vk.bind(null,t,e,n),e.then(t,t))}function Iv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t)}var Sk=wr.ReactCurrentOwner,Ut=!1;function Nt(t,e,n,r){e.child=t===null?lT(e,null,n,r):Ys(e,t.child,n,r)}function Cv(t,e,n,r,i){n=n.render;var s=e.ref;return Fs(e,i),r=Dm(t,e,n,r,s,i),n=Om(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(De&&n&&Em(e),e.flags|=1,Nt(t,e,r,i),e.child)}function Av(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$m(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,OT(t,e,s,r,i)):(t=qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(o,r)&&t.ref===e.ref)return fr(t,e,i)}return e.flags|=1,t=Qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function OT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ua(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,fr(t,e,i)}return rp(t,e,n,r,i)}function MT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Ns,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(Ns,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,xe(Ns,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,xe(Ns,Kt),Kt|=r;return Nt(t,e,i,n),e.child}function LT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rp(t,e,n,r,i){var s=Wt(n)?Vi:xt.current;return s=Ks(e,s),Fs(e,i),n=Dm(t,e,n,r,s,i),r=Om(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fr(t,e,i)):(De&&r&&Em(e),e.flags|=1,Nt(t,e,n,i),e.child)}function xv(t,e,n,r,i){if(Wt(n)){var s=!0;dc(e)}else s=!1;if(Fs(e,i),e.stateNode===null)Bu(t,e),NT(e,n,r),tp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=dn(c):(c=Wt(n)?Vi:xt.current,c=Ks(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ev(e,o,r,c),Nr=!1;var p=e.memoizedState;o.state=p,_c(e,r,o,i),u=e.memoizedState,a!==r||p!==u||Bt.current||Nr?(typeof h=="function"&&(ep(e,n,h,r),u=e.memoizedState),(a=Nr||wv(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=dn(u):(u=Wt(n)?Vi:xt.current,u=Ks(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Ev(e,o,r,u),Nr=!1,p=e.memoizedState,o.state=p,_c(e,r,o,i);var v=e.memoizedState;a!==f||p!==v||Bt.current||Nr?(typeof _=="function"&&(ep(e,n,_,r),v=e.memoizedState),(c=Nr||wv(e,n,c,r,p,v,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return ip(t,e,n,r,s,i)}function ip(t,e,n,r,i,s){LT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&dv(e,n,!1),fr(t,e,s);r=e.stateNode,Sk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,a,s)):Nt(t,e,a,s),e.memoizedState=r.state,i&&dv(e,n,!0),e.child}function VT(t){var e=t.stateNode;e.pendingContext?hv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hv(t,e.context,!1),km(t,e.containerInfo)}function Rv(t,e,n,r,i){return Qs(),Im(i),e.flags|=256,Nt(t,e,n,r),e.child}var sp={dehydrated:null,treeContext:null,retryLane:0};function op(t){return{baseLanes:t,cachePool:null,transitions:null}}function FT(t,e,n){var r=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),xe(Me,i&1),t===null)return Jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ph(o,r,0,null),t=Oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=op(n),e.memoizedState=sp,t):Vm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ck(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Qr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qr(a,s):(s=Oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?op(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sp,r}return s=t.child,t=s.sibling,r=Qr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vm(t,e){return e=ph({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Eu(t,e,n,r){return r!==null&&Im(r),Ys(e,t.child,null,n),t=Vm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ck(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gd(Error(B(422))),Eu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ph({mode:"visible",children:r.children},i,0,null),s=Oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ys(e,t.child,null,o),e.child.memoizedState=op(o),e.memoizedState=sp,s);if(!(e.mode&1))return Eu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Gd(s,r,void 0),Eu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ut||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dr(t,i),Cn(r,t,i,-1))}return Wm(),r=Gd(Error(B(421))),Eu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Fk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Yt=qr(i.nextSibling),Jt=e,De=!0,En=null,t!==null&&(an[ln++]=er,an[ln++]=tr,an[ln++]=Fi,er=t.id,tr=t.overflow,Fi=e),e=Vm(e,r.children),e.flags|=4096,e)}function kv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zf(t.return,e,n)}function Kd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kv(t,n,e);else if(t.tag===19)kv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kd(e,!0,n,null,s);break;case"together":Kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ak(t,e,n){switch(e.tag){case 3:VT(e),Qs();break;case 5:hT(e);break;case 1:Wt(e.type)&&dc(e);break;case 4:km(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;xe(mc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?FT(t,e,n):(xe(Me,Me.current&1),t=fr(t,e,n),t!==null?t.sibling:null);xe(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,MT(t,e,n)}return fr(t,e,n)}var UT,ap,zT,BT;UT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ap=function(){};zT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ki(Fn.current);var s=null;switch(n){case"input":i=kf(t,i),r=kf(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=bf(t,i),r=bf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cc)}Of(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Da.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Pe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};BT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jo(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xk(t,e,n){var r=e.pendingProps;switch(Tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Wt(e.type)&&hc(),Et(e),null;case 3:return r=e.stateNode,Xs(),be(Bt),be(xt),Nm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,En!==null&&(mp(En),En=null))),ap(t,e),Et(e),null;case 5:Pm(e);var i=ki(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)zT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Et(e),null}if(t=ki(Fn.current),vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ln]=e,r[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<ua.length;i++)Pe(ua[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Fy(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":Uy(r,s),Pe("invalid",r)}Of(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,a,t),i=["children",""+a]):Da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":cu(r),jy(r,s,!0);break;case"textarea":cu(r),zy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ln]=e,t[Wa]=r,UT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mf(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ua.length;i++)Pe(ua[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":Fy(t,r),i=kf(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":Uy(t,r),i=bf(t,r),Pe("invalid",t);break;default:i=r}Of(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?vE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_E(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Oa(t,u):typeof u=="number"&&Oa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Pe("scroll",t):u!=null&&am(t,s,u,o))}switch(n){case"input":cu(t),jy(t,r,!1);break;case"textarea":cu(t),zy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ti(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Os(t,!!r.multiple,s,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)BT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ki(qa.current),ki(Fn.current),vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ln]=e,(s=r.nodeValue!==n)&&(t=Jt,t!==null))switch(t.tag){case 3:yu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ln]=e,e.stateNode=r}return Et(e),null;case 13:if(be(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Yt!==null&&e.mode&1&&!(e.flags&128))oT(),Qs(),e.flags|=98560,s=!1;else if(s=vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Ln]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else En!==null&&(mp(En),En=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?Ze===0&&(Ze=3):Wm())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return Xs(),ap(t,e),t===null&&za(e.stateNode.containerInfo),Et(e),null;case 10:return Am(e.type._context),Et(e),null;case 17:return Wt(e.type)&&hc(),Et(e),null;case 19:if(be(Me),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Jo(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yc(t),o!==null){for(e.flags|=128,Jo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(Me,Me.current&1|2),e.child}t=t.sibling}s.tail!==null&&$e()>Zs&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304)}else{if(!r)if(t=yc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return Et(e),null}else 2*$e()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,r=!0,Jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$e(),e.sibling=null,n=Me.current,xe(Me,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return Bm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Rk(t,e){switch(Tm(e),e.tag){case 1:return Wt(e.type)&&hc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),be(Bt),be(xt),Nm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pm(e),null;case 13:if(be(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Me),null;case 4:return Xs(),null;case 10:return Am(e.type._context),null;case 22:case 23:return Bm(),null;case 24:return null;default:return null}}var Tu=!1,St=!1,kk=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function lp(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var Pv=!1;function Pk(t,e){if(qf=ac,t=GE(),wm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)p=f,f=_;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(_=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hf={focusedElem:t,selectionRange:n},ac=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,N=v.memoizedState,C=e.stateNode,E=C.getSnapshotBeforeUpdate(e.elementType===e.type?S:vn(e.type,S),N);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(k){Ue(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return v=Pv,Pv=!1,v}function va(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lp(e,n,s)}i=i.next}while(i!==r)}}function dh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function up(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function WT(t){var e=t.alternate;e!==null&&(t.alternate=null,WT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ln],delete e[Wa],delete e[Qf],delete e[dk],delete e[fk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $T(t){return t.tag===5||t.tag===3||t.tag===4}function Nv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$T(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cc));else if(r!==4&&(t=t.child,t!==null))for(cp(t,e,n),t=t.sibling;t!==null;)cp(t,e,n),t=t.sibling}function hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}var ct=null,wn=!1;function Rr(t,e,n){for(n=n.child;n!==null;)qT(t,e,n),n=n.sibling}function qT(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(ih,n)}catch{}switch(n.tag){case 5:St||Ps(n,e);case 6:var r=ct,i=wn;ct=null,Rr(t,e,n),ct=r,wn=i,ct!==null&&(wn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(wn?(t=ct,n=n.stateNode,t.nodeType===8?zd(t.parentNode,n):t.nodeType===1&&zd(t,n),Fa(t)):zd(ct,n.stateNode));break;case 4:r=ct,i=wn,ct=n.stateNode.containerInfo,wn=!0,Rr(t,e,n),ct=r,wn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lp(n,e,o),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!St&&(Ps(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Rr(t,e,n),St=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function bv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kk),e.forEach(function(r){var i=jk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,wn=!1;break e;case 3:ct=a.stateNode.containerInfo,wn=!0;break e;case 4:ct=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(ct===null)throw Error(B(160));qT(s,o,i),ct=null,wn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ue(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)HT(e,t),e=e.sibling}function HT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yn(e,t),On(t),r&4){try{va(3,t,t.return),dh(3,t)}catch(S){Ue(t,t.return,S)}try{va(5,t,t.return)}catch(S){Ue(t,t.return,S)}}break;case 1:yn(e,t),On(t),r&512&&n!==null&&Ps(n,n.return);break;case 5:if(yn(e,t),On(t),r&512&&n!==null&&Ps(n,n.return),t.flags&32){var i=t.stateNode;try{Oa(i,"")}catch(S){Ue(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pE(i,s),Mf(a,o);var c=Mf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?vE(i,f):h==="dangerouslySetInnerHTML"?_E(i,f):h==="children"?Oa(i,f):am(i,h,f,c)}switch(a){case"input":Pf(i,s);break;case"textarea":mE(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Os(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?Os(i,!!s.multiple,s.defaultValue,!0):Os(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wa]=s}catch(S){Ue(t,t.return,S)}}break;case 6:if(yn(e,t),On(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Ue(t,t.return,S)}}break;case 3:if(yn(e,t),On(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(S){Ue(t,t.return,S)}break;case 4:yn(e,t),On(t);break;case 13:yn(e,t),On(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Um=$e())),r&4&&bv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(St=(c=St)||h,yn(e,t),St=c):yn(e,t),On(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(f=Q=h;Q!==null;){switch(p=Q,_=p.child,p.tag){case 0:case 11:case 14:case 15:va(4,p,p.return);break;case 1:Ps(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){Ue(r,n,S)}}break;case 5:Ps(p,p.return);break;case 22:if(p.memoizedState!==null){Ov(f);continue}}_!==null?(_.return=p,Q=_):Ov(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=yE("display",o))}catch(S){Ue(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){Ue(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:yn(e,t),On(t),r&4&&bv(t);break;case 21:break;default:yn(e,t),On(t)}}function On(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($T(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Oa(i,""),r.flags&=-33);var s=Nv(t);hp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Nv(t);cp(t,a,o);break;default:throw Error(B(161))}}catch(u){Ue(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nk(t,e,n){Q=t,GT(t)}function GT(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||St;a=Tu;var c=St;if(Tu=o,(St=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?Mv(i):u!==null?(u.return=o,Q=u):Mv(i);for(;s!==null;)Q=s,GT(s),s=s.sibling;Q=i,Tu=a,St=c}Dv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Dv(t)}}function Dv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||dh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_v(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_v(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}St||e.flags&512&&up(e)}catch(p){Ue(e,e.return,p)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Ov(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Mv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dh(4,e)}catch(u){Ue(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ue(e,i,u)}}var s=e.return;try{up(e)}catch(u){Ue(e,s,u)}break;case 5:var o=e.return;try{up(e)}catch(u){Ue(e,o,u)}}}catch(u){Ue(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var bk=Math.ceil,Ec=wr.ReactCurrentDispatcher,Fm=wr.ReactCurrentOwner,hn=wr.ReactCurrentBatchConfig,he=0,at=null,He=null,dt=0,Kt=0,Ns=hi(0),Ze=0,Qa=null,Ui=0,fh=0,jm=0,wa=null,Ft=null,Um=0,Zs=1/0,Yn=null,Tc=!1,dp=null,Gr=null,Iu=!1,jr=null,Ic=0,Ea=0,fp=null,Wu=-1,$u=0;function Dt(){return he&6?$e():Wu!==-1?Wu:Wu=$e()}function Kr(t){return t.mode&1?he&2&&dt!==0?dt&-dt:mk.transition!==null?($u===0&&($u=NE()),$u):(t=ye,t!==0||(t=window.event,t=t===void 0?16:FE(t.type)),t):1}function Cn(t,e,n,r){if(50<Ea)throw Ea=0,fp=null,Error(B(185));vl(t,n,r),(!(he&2)||t!==at)&&(t===at&&(!(he&2)&&(fh|=n),Ze===4&&Dr(t,dt)),$t(t,r),n===1&&he===0&&!(e.mode&1)&&(Zs=$e()+500,uh&&di()))}function $t(t,e){var n=t.callbackNode;mR(t,e);var r=oc(t,t===at?dt:0);if(r===0)n!==null&&$y(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$y(n),e===1)t.tag===0?pk(Lv.bind(null,t)):rT(Lv.bind(null,t)),ck(function(){!(he&6)&&di()}),n=null;else{switch(bE(r)){case 1:n=dm;break;case 4:n=kE;break;case 16:n=sc;break;case 536870912:n=PE;break;default:n=sc}n=tI(n,KT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function KT(t,e){if(Wu=-1,$u=0,he&6)throw Error(B(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var r=oc(t,t===at?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sc(t,r);else{e=r;var i=he;he|=2;var s=YT();(at!==t||dt!==e)&&(Yn=null,Zs=$e()+500,Di(t,e));do try{Mk();break}catch(a){QT(t,a)}while(!0);Cm(),Ec.current=s,he=i,He!==null?e=0:(at=null,dt=0,e=Ze)}if(e!==0){if(e===2&&(i=Uf(t),i!==0&&(r=i,e=pp(t,i))),e===1)throw n=Qa,Di(t,0),Dr(t,r),$t(t,$e()),n;if(e===6)Dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Dk(i)&&(e=Sc(t,r),e===2&&(s=Uf(t),s!==0&&(r=s,e=pp(t,s))),e===1))throw n=Qa,Di(t,0),Dr(t,r),$t(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ii(t,Ft,Yn);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=Um+500-$e(),10<e)){if(oc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Kf(Ii.bind(null,t,Ft,Yn),e);break}Ii(t,Ft,Yn);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bk(r/1960))-r,10<r){t.timeoutHandle=Kf(Ii.bind(null,t,Ft,Yn),r);break}Ii(t,Ft,Yn);break;case 5:Ii(t,Ft,Yn);break;default:throw Error(B(329))}}}return $t(t,$e()),t.callbackNode===n?KT.bind(null,t):null}function pp(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(Di(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&mp(e)),t}function mp(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function Dk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~jm,e&=~fh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Sn(e),r=1<<n;t[n]=-1,e&=~r}}function Lv(t){if(he&6)throw Error(B(327));js();var e=oc(t,0);if(!(e&1))return $t(t,$e()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var r=Uf(t);r!==0&&(e=r,n=pp(t,r))}if(n===1)throw n=Qa,Di(t,0),Dr(t,e),$t(t,$e()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ii(t,Ft,Yn),$t(t,$e()),null}function zm(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Zs=$e()+500,uh&&di())}}function zi(t){jr!==null&&jr.tag===0&&!(he&6)&&js();var e=he;he|=1;var n=hn.transition,r=ye;try{if(hn.transition=null,ye=1,t)return t()}finally{ye=r,hn.transition=n,he=e,!(he&6)&&di()}}function Bm(){Kt=Ns.current,be(Ns)}function Di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uk(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hc();break;case 3:Xs(),be(Bt),be(xt),Nm();break;case 5:Pm(r);break;case 4:Xs();break;case 13:be(Me);break;case 19:be(Me);break;case 10:Am(r.type._context);break;case 22:case 23:Bm()}n=n.return}if(at=t,He=t=Qr(t.current,null),dt=Kt=e,Ze=0,Qa=null,jm=fh=Ui=0,Ft=wa=null,Ri!==null){for(e=0;e<Ri.length;e++)if(n=Ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ri=null}return t}function QT(t,e){do{var n=He;try{if(Cm(),Uu.current=wc,vc){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vc=!1}if(ji=0,rt=Ye=Le=null,ya=!1,Ha=0,Fm.current=null,n===null||n.return===null){Ze=1,Qa=e,He=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=dt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Iv(o);if(_!==null){_.flags&=-257,Sv(_,o,a,s,e),_.mode&1&&Tv(s,c,e),e=_,u=c;var v=e.updateQueue;if(v===null){var S=new Set;S.add(u),e.updateQueue=S}else v.add(u);break e}else{if(!(e&1)){Tv(s,c,e),Wm();break e}u=Error(B(426))}}else if(De&&a.mode&1){var N=Iv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Sv(N,o,a,s,e),Im(Js(u,a));break e}}s=u=Js(u,a),Ze!==4&&(Ze=2),wa===null?wa=[s]:wa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=bT(s,u,e);gv(s,C);break e;case 1:a=u;var E=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Gr===null||!Gr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=DT(s,a,e);gv(s,k);break e}}s=s.return}while(s!==null)}JT(n)}catch(O){e=O,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function YT(){var t=Ec.current;return Ec.current=wc,t===null?wc:t}function Wm(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),at===null||!(Ui&268435455)&&!(fh&268435455)||Dr(at,dt)}function Sc(t,e){var n=he;he|=2;var r=YT();(at!==t||dt!==e)&&(Yn=null,Di(t,e));do try{Ok();break}catch(i){QT(t,i)}while(!0);if(Cm(),he=n,Ec.current=r,He!==null)throw Error(B(261));return at=null,dt=0,Ze}function Ok(){for(;He!==null;)XT(He)}function Mk(){for(;He!==null&&!oR();)XT(He)}function XT(t){var e=eI(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?JT(t):He=e,Fm.current=null}function JT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Rk(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,He=null;return}}else if(n=xk(n,e,Kt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ze===0&&(Ze=5)}function Ii(t,e,n){var r=ye,i=hn.transition;try{hn.transition=null,ye=1,Lk(t,e,n,r)}finally{hn.transition=i,ye=r}return null}function Lk(t,e,n,r){do js();while(jr!==null);if(he&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gR(t,s),t===at&&(He=at=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Iu||(Iu=!0,tI(sc,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=hn.transition,hn.transition=null;var o=ye;ye=1;var a=he;he|=4,Fm.current=null,Pk(t,n),HT(n,t),nk(Hf),ac=!!qf,Hf=qf=null,t.current=n,Nk(n),aR(),he=a,ye=o,hn.transition=s}else t.current=n;if(Iu&&(Iu=!1,jr=t,Ic=i),s=t.pendingLanes,s===0&&(Gr=null),cR(n.stateNode),$t(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tc)throw Tc=!1,t=dp,dp=null,t;return Ic&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===fp?Ea++:(Ea=0,fp=t):Ea=0,di(),null}function js(){if(jr!==null){var t=bE(Ic),e=hn.transition,n=ye;try{if(hn.transition=null,ye=16>t?16:t,jr===null)var r=!1;else{if(t=jr,jr=null,Ic=0,he&6)throw Error(B(331));var i=he;for(he|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Q=c;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:va(8,h,s)}var f=h.child;if(f!==null)f.return=h,Q=f;else for(;Q!==null;){h=Q;var p=h.sibling,_=h.return;if(WT(h),h===c){Q=null;break}if(p!==null){p.return=_,Q=p;break}Q=_}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var N=S.sibling;S.sibling=null,S=N}while(S!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,Q=C;break e}Q=s.return}}var E=t.current;for(Q=E;Q!==null;){o=Q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Q=x;else e:for(o=E;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dh(9,a)}}catch(O){Ue(a,a.return,O)}if(a===o){Q=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,Q=k;break e}Q=a.return}}if(he=i,di(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(ih,t)}catch{}r=!0}return r}finally{ye=n,hn.transition=e}}return!1}function Vv(t,e,n){e=Js(n,e),e=bT(t,e,1),t=Hr(t,e,1),e=Dt(),t!==null&&(vl(t,1,e),$t(t,e))}function Ue(t,e,n){if(t.tag===3)Vv(t,t,n);else for(;e!==null;){if(e.tag===3){Vv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gr===null||!Gr.has(r))){t=Js(n,t),t=DT(e,t,1),e=Hr(e,t,1),t=Dt(),e!==null&&(vl(e,1,t),$t(e,t));break}}e=e.return}}function Vk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(dt&n)===n&&(Ze===4||Ze===3&&(dt&130023424)===dt&&500>$e()-Um?Di(t,0):jm|=n),$t(t,e)}function ZT(t,e){e===0&&(t.mode&1?(e=fu,fu<<=1,!(fu&130023424)&&(fu=4194304)):e=1);var n=Dt();t=dr(t,e),t!==null&&(vl(t,e,n),$t(t,n))}function Fk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ZT(t,n)}function jk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),ZT(t,n)}var eI;eI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,Ak(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,De&&e.flags&1048576&&iT(e,pc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bu(t,e),t=e.pendingProps;var i=Ks(e,xt.current);Fs(e,n),i=Dm(null,e,r,t,i,n);var s=Om();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(s=!0,dc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rm(e),i.updater=hh,e.stateNode=i,i._reactInternals=e,tp(e,r,t,n),e=ip(null,e,r,!0,s,n)):(e.tag=0,De&&s&&Em(e),Nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zk(r),t=vn(r,t),i){case 0:e=rp(null,e,r,t,n);break e;case 1:e=xv(null,e,r,t,n);break e;case 11:e=Cv(null,e,r,t,n);break e;case 14:e=Av(null,e,r,vn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),rp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),xv(t,e,r,i,n);case 3:e:{if(VT(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cT(t,e),_c(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Js(Error(B(423)),e),e=Rv(t,e,r,n,i);break e}else if(r!==i){i=Js(Error(B(424)),e),e=Rv(t,e,r,n,i);break e}else for(Yt=qr(e.stateNode.containerInfo.firstChild),Jt=e,De=!0,En=null,n=lT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=fr(t,e,n);break e}Nt(t,e,r,n)}e=e.child}return e;case 5:return hT(e),t===null&&Jf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gf(r,i)?o=null:s!==null&&Gf(r,s)&&(e.flags|=32),LT(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&Jf(e),null;case 13:return FT(t,e,n);case 4:return km(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ys(e,null,r,n):Nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Cv(t,e,r,i,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,xe(mc,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Bt.current){e=fr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ar(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Zf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fs(e,n),i=dn(i),r=r(i),e.flags|=1,Nt(t,e,r,n),e.child;case 14:return r=e.type,i=vn(r,e.pendingProps),i=vn(r.type,i),Av(t,e,r,i,n);case 15:return OT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Bu(t,e),e.tag=1,Wt(r)?(t=!0,dc(e)):t=!1,Fs(e,n),NT(e,r,i),tp(e,r,i,n),ip(null,e,r,!0,t,n);case 19:return jT(t,e,n);case 22:return MT(t,e,n)}throw Error(B(156,e.tag))};function tI(t,e){return RE(t,e)}function Uk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new Uk(t,e,n,r)}function $m(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zk(t){if(typeof t=="function")return $m(t)?1:0;if(t!=null){if(t=t.$$typeof,t===um)return 11;if(t===cm)return 14}return 2}function Qr(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$m(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Oi(n.children,i,s,e);case lm:o=8,i|=8;break;case Cf:return t=un(12,n,e,i|2),t.elementType=Cf,t.lanes=s,t;case Af:return t=un(13,n,e,i),t.elementType=Af,t.lanes=s,t;case xf:return t=un(19,n,e,i),t.elementType=xf,t.lanes=s,t;case hE:return ph(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uE:o=10;break e;case cE:o=9;break e;case um:o=11;break e;case cm:o=14;break e;case Pr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Oi(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function ph(t,e,n,r){return t=un(22,t,r,e),t.elementType=hE,t.lanes=n,t.stateNode={isHidden:!1},t}function Qd(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function Yd(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Bk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pd(0),this.expirationTimes=Pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qm(t,e,n,r,i,s,o,a,u){return t=new Bk(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rm(s),t}function Wk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nI(t){if(!t)return ni;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Wt(n))return nT(t,n,e)}return e}function rI(t,e,n,r,i,s,o,a,u){return t=qm(n,r,!0,t,i,s,o,a,u),t.context=nI(null),n=t.current,r=Dt(),i=Kr(n),s=ar(r,i),s.callback=e??null,Hr(n,s,i),t.current.lanes=i,vl(t,i,r),$t(t,r),t}function mh(t,e,n,r){var i=e.current,s=Dt(),o=Kr(i);return n=nI(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(i,e,o),t!==null&&(Cn(t,i,o,s),ju(t,i,o)),o}function Cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hm(t,e){Fv(t,e),(t=t.alternate)&&Fv(t,e)}function $k(){return null}var iI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gm(t){this._internalRoot=t}gh.prototype.render=Gm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));mh(t,e,null,null)};gh.prototype.unmount=Gm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zi(function(){mh(null,t,null,null)}),e[hr]=null}};function gh(t){this._internalRoot=t}gh.prototype.unstable_scheduleHydration=function(t){if(t){var e=ME();t={blockedOn:null,target:t,priority:e};for(var n=0;n<br.length&&e!==0&&e<br[n].priority;n++);br.splice(n,0,t),n===0&&VE(t)}};function Km(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jv(){}function qk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Cc(o);s.call(c)}}var o=rI(e,r,t,0,null,!1,!1,"",jv);return t._reactRootContainer=o,t[hr]=o.current,za(t.nodeType===8?t.parentNode:t),zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Cc(u);a.call(c)}}var u=qm(t,0,!1,null,null,!1,!1,"",jv);return t._reactRootContainer=u,t[hr]=u.current,za(t.nodeType===8?t.parentNode:t),zi(function(){mh(e,u,n,r)}),u}function yh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Cc(o);a.call(u)}}mh(e,o,t,i)}else o=qk(n,e,t,i,r);return Cc(o)}DE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(fm(e,n|1),$t(e,$e()),!(he&6)&&(Zs=$e()+500,di()))}break;case 13:zi(function(){var r=dr(t,1);if(r!==null){var i=Dt();Cn(r,t,1,i)}}),Hm(t,1)}};pm=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=Dt();Cn(e,t,134217728,n)}Hm(t,134217728)}};OE=function(t){if(t.tag===13){var e=Kr(t),n=dr(t,e);if(n!==null){var r=Dt();Cn(n,t,e,r)}Hm(t,e)}};ME=function(){return ye};LE=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Vf=function(t,e,n){switch(e){case"input":if(Pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lh(r);if(!i)throw Error(B(90));fE(r),Pf(r,i)}}}break;case"textarea":mE(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};TE=zm;IE=zi;var Hk={usingClientEntryPoint:!1,Events:[El,Cs,lh,wE,EE,zm]},Zo={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gk={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=AE(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||$k,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{ih=Su.inject(Gk),Vn=Su}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hk;en.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Km(e))throw Error(B(200));return Wk(t,e,null,n)};en.createRoot=function(t,e){if(!Km(t))throw Error(B(299));var n=!1,r="",i=iI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qm(t,1,!1,null,null,n,!1,r,i),t[hr]=e.current,za(t.nodeType===8?t.parentNode:t),new Gm(e)};en.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=AE(e),t=t===null?null:t.stateNode,t};en.flushSync=function(t){return zi(t)};en.hydrate=function(t,e,n){if(!_h(e))throw Error(B(200));return yh(null,t,e,!0,n)};en.hydrateRoot=function(t,e,n){if(!Km(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rI(e,null,t,1,n??null,i,!1,s,o),t[hr]=e.current,za(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gh(e)};en.render=function(t,e,n){if(!_h(e))throw Error(B(200));return yh(null,t,e,!1,n)};en.unmountComponentAtNode=function(t){if(!_h(t))throw Error(B(40));return t._reactRootContainer?(zi(function(){yh(null,null,t,!1,function(){t._reactRootContainer=null,t[hr]=null})}),!0):!1};en.unstable_batchedUpdates=zm;en.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_h(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return yh(t,e,n,!1,r)};en.version="18.3.1-next-f1338f8080-20240426";function sI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sI)}catch(t){console.error(t)}}sI(),sE.exports=en;var Kk=sE.exports,Uv=Kk;If.createRoot=Uv.createRoot,If.hydrateRoot=Uv.hydrateRoot;var zv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Eo(e)},Eo=function(t){return new Error("Firebase Database ("+oI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(n[h],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Yk;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lI=function(t){const e=aI(t);return Qm.encodeByteArray(e,!0)},Ac=function(t){return lI(t).replace(/\./g,"")},xc=function(t){try{return Qm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){return uI(void 0,t)}function uI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Jk(n)||(t[n]=uI(t[n],e[n]));return t}function Jk(t){return t!=="__proto__"}/**
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
 */function Zk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const e1=()=>Zk().__FIREBASE_DEFAULTS__,t1=()=>{if(typeof process>"u"||typeof zv>"u")return;const t=zv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},n1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xc(t[1]);return e&&JSON.parse(e)},vh=()=>{try{return e1()||t1()||n1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cI=t=>{var e,n;return(n=(e=vh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hI=t=>{const e=cI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dI=()=>{var t;return(t=vh())===null||t===void 0?void 0:t.config},fI=t=>{var e;return(e=vh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ac(JSON.stringify(n)),Ac(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ym(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function r1(){var t;const e=(t=vh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function s1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o1(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function a1(){return oI.NODE_ADMIN===!0}function l1(){return!r1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function u1(){try{return typeof indexedDB=="object"}catch{return!1}}function c1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="FirebaseError";class Er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=h1,Object.setPrototypeOf(this,Er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sl.prototype.create)}}class Sl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?d1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Er(i,a,r)}}function d1(t,e){return t.replace(f1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const f1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t){return JSON.parse(t)}function Je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ya(xc(s[0])||""),n=Ya(xc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},p1=function(t){const e=gI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},m1=function(t){const e=gI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function eo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bv(s)&&Bv(o)){if(!Xa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function _1(t,e){const n=new y1(t,e);return n.subscribe.bind(n)}class y1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");v1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xd),i.error===void 0&&(i.error=Xd),i.complete===void 0&&(i.complete=Xd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xd(){}function wh(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Eh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class ri{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Si="[DEFAULT]";/**
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
 */class E1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Il;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I1(e))try{this.getOrInitializeService({instanceIdentifier:Si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Si){return this.instances.has(e)}getOptions(e=Si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:T1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Si){return this.component?this.component.multipleInstances?e:Si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T1(t){return t===Si?void 0:t}function I1(t){return t.instantiationMode==="EAGER"}/**
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
 */class S1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new E1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const C1={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},A1=ae.INFO,x1={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},R1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=x1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Th{constructor(e){this.name=e,this._logLevel=A1,this._logHandler=R1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const k1=(t,e)=>e.some(n=>t instanceof n);let Wv,$v;function P1(){return Wv||(Wv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N1(){return $v||($v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _I=new WeakMap,_p=new WeakMap,yI=new WeakMap,Jd=new WeakMap,Xm=new WeakMap;function b1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_I.set(n,t)}).catch(()=>{}),Xm.set(e,t),e}function D1(t){if(_p.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_p.set(t,e)}let yp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _p.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O1(t){yp=t(yp)}function M1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zd(this),e,...n);return yI.set(r,e.sort?e.sort():[e]),Yr(r)}:N1().includes(t)?function(...e){return t.apply(Zd(this),e),Yr(_I.get(this))}:function(...e){return Yr(t.apply(Zd(this),e))}}function L1(t){return typeof t=="function"?M1(t):(t instanceof IDBTransaction&&D1(t),k1(t,P1())?new Proxy(t,yp):t)}function Yr(t){if(t instanceof IDBRequest)return b1(t);if(Jd.has(t))return Jd.get(t);const e=L1(t);return e!==t&&(Jd.set(t,e),Xm.set(e,t)),e}const Zd=t=>Xm.get(t);function V1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Yr(o.result),u.oldVersion,u.newVersion,Yr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const F1=["get","getKey","getAll","getAllKeys","count"],j1=["put","add","delete","clear"],ef=new Map;function qv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=j1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||F1.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return ef.set(e,s),s}O1(t=>({...t,get:(e,n,r)=>qv(e,n)||t.get(e,n,r),has:(e,n)=>!!qv(e,n)||t.has(e,n)}));/**
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
 */class U1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(z1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function z1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vp="@firebase/app",Hv="0.10.13";/**
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
 */const pr=new Th("@firebase/app"),B1="@firebase/app-compat",W1="@firebase/analytics-compat",$1="@firebase/analytics",q1="@firebase/app-check-compat",H1="@firebase/app-check",G1="@firebase/auth",K1="@firebase/auth-compat",Q1="@firebase/database",Y1="@firebase/data-connect",X1="@firebase/database-compat",J1="@firebase/functions",Z1="@firebase/functions-compat",eP="@firebase/installations",tP="@firebase/installations-compat",nP="@firebase/messaging",rP="@firebase/messaging-compat",iP="@firebase/performance",sP="@firebase/performance-compat",oP="@firebase/remote-config",aP="@firebase/remote-config-compat",lP="@firebase/storage",uP="@firebase/storage-compat",cP="@firebase/firestore",hP="@firebase/vertexai-preview",dP="@firebase/firestore-compat",fP="firebase",pP="10.14.1";/**
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
 */const wp="[DEFAULT]",mP={[vp]:"fire-core",[B1]:"fire-core-compat",[$1]:"fire-analytics",[W1]:"fire-analytics-compat",[H1]:"fire-app-check",[q1]:"fire-app-check-compat",[G1]:"fire-auth",[K1]:"fire-auth-compat",[Q1]:"fire-rtdb",[Y1]:"fire-data-connect",[X1]:"fire-rtdb-compat",[J1]:"fire-fn",[Z1]:"fire-fn-compat",[eP]:"fire-iid",[tP]:"fire-iid-compat",[nP]:"fire-fcm",[rP]:"fire-fcm-compat",[iP]:"fire-perf",[sP]:"fire-perf-compat",[oP]:"fire-rc",[aP]:"fire-rc-compat",[lP]:"fire-gcs",[uP]:"fire-gcs-compat",[cP]:"fire-fst",[dP]:"fire-fst-compat",[hP]:"fire-vertex","fire-js":"fire-js",[fP]:"fire-js-all"};/**
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
 */const Ja=new Map,gP=new Map,Ep=new Map;function Gv(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bi(t){const e=t.name;if(Ep.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;Ep.set(e,t);for(const n of Ja.values())Gv(n,t);for(const n of gP.values())Gv(n,t);return!0}function Ih(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nr(t){return t.settings!==void 0}/**
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
 */const _P={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new Sl("app","Firebase",_P);/**
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
 */class yP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=pP;function vI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xr.create("bad-app-name",{appName:String(i)});if(n||(n=dI()),!n)throw Xr.create("no-options");const s=Ja.get(i);if(s){if(Xa(n,s.options)&&Xa(r,s.config))return s;throw Xr.create("duplicate-app",{appName:i})}const o=new S1(i);for(const u of Ep.values())o.addComponent(u);const a=new yP(n,r,o);return Ja.set(i,a),a}function Jm(t=wp){const e=Ja.get(t);if(!e&&t===wp&&dI())return vI();if(!e)throw Xr.create("no-app",{appName:t});return e}function vP(){return Array.from(Ja.values())}function jn(t,e,n){var r;let i=(r=mP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}Bi(new ri(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const wP="firebase-heartbeat-database",EP=1,Za="firebase-heartbeat-store";let tf=null;function wI(){return tf||(tf=V1(wP,EP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Za)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xr.create("idb-open",{originalErrorMessage:t.message})})),tf}async function TP(t){try{const n=(await wI()).transaction(Za),r=await n.objectStore(Za).get(EI(t));return await n.done,r}catch(e){if(e instanceof Er)pr.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function Kv(t,e){try{const r=(await wI()).transaction(Za,"readwrite");await r.objectStore(Za).put(e,EI(t)),await r.done}catch(n){if(n instanceof Er)pr.warn(n.message);else{const r=Xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function EI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IP=1024,SP=30*24*60*60*1e3;class CP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=SP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qv(),{heartbeatsToSend:r,unsentEntries:i}=AP(this._heartbeatsCache.heartbeats),s=Ac(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pr.warn(n),""}}}function Qv(){return new Date().toISOString().substring(0,10)}function AP(t,e=IP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u1()?c1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yv(t){return Ac(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RP(t){Bi(new ri("platform-logger",e=>new U1(e),"PRIVATE")),Bi(new ri("heartbeat",e=>new CP(e),"PRIVATE")),jn(vp,Hv,t),jn(vp,Hv,"esm2017"),jn("fire-js","")}RP("");function Zm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function TI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kP=TI,II=new Sl("auth","Firebase",TI());/**
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
 */const kc=new Th("@firebase/auth");function PP(t,...e){kc.logLevel<=ae.WARN&&kc.warn(`Auth (${rs}): ${t}`,...e)}function Hu(t,...e){kc.logLevel<=ae.ERROR&&kc.error(`Auth (${rs}): ${t}`,...e)}/**
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
 */function $n(t,...e){throw tg(t,...e)}function An(t,...e){return tg(t,...e)}function eg(t,e,n){const r=Object.assign(Object.assign({},kP()),{[e]:n});return new Sl("auth","Firebase",r).create(e,{appName:t.name})}function Mi(t){return eg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function NP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$n(t,"argument-error"),eg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return II.create(t,...e)}function ee(t,e,...n){if(!t)throw tg(e,...n)}function rr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hu(e),new Error(e)}function mr(t,e){t||rr(e)}/**
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
 */function Tp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bP(){return Xv()==="http:"||Xv()==="https:"}function Xv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bP()||s1()||"connection"in navigator)?navigator.onLine:!0}function OP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ym()||mI()}get(){return DP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ng(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class SI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const LP=new Cl(3e4,6e4);function rg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Io(t,e,n,r,i={}){return CI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=To(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return i1()||(c.referrerPolicy="no-referrer"),SI.fetch()(AI(t,t.config.apiHost,n,a),c)})}async function CI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MP),e);try{const i=new FP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Cu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Cu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw eg(t,h,c);$n(t,h)}}catch(i){if(i instanceof Er)throw i;$n(t,"network-request-failed",{message:String(i)})}}async function VP(t,e,n,r,i={}){const s=await Io(t,e,n,r,i);return"mfaPendingCredential"in s&&$n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function AI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ng(t.config,i):`${t.config.apiScheme}://${i}`}class FP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),LP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=An(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function jP(t,e){return Io(t,"POST","/v1/accounts:delete",e)}async function xI(t,e){return Io(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ta(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UP(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=ig(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ta(nf(i.auth_time)),issuedAtTime:Ta(nf(i.iat)),expirationTime:Ta(nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nf(t){return Number(t)*1e3}function ig(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hu("JWT malformed, contained fewer than 3 sections"),null;try{const i=xc(n);return i?JSON.parse(i):(Hu("Failed to decode base64 JWT payload"),null)}catch(i){return Hu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jv(t){const e=ig(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function el(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Er&&zP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ip{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ta(this.lastLoginAt),this.creationTime=Ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await el(t,xI(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RI(s.providerUserInfo):[],a=$P(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ip(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function WP(t){const e=Te(t);await Pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $P(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RI(t){return t.map(e=>{var{providerId:n}=e,r=Zm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qP(t,e){const n=await CI(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=AI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",SI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HP(t,e){return Io(t,"POST","/v2/accounts:revokeToken",rg(t,e))}/**
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
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Jv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Us;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
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
 */function kr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ir{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ip(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await el(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UP(this,e)}reload(){return WP(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nr(this.auth.app))return Promise.reject(Mi(this.auth));const e=await this.getIdToken();return await el(this,jP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:k,isAnonymous:O,providerData:V,stsTokenManager:T}=n;ee(x&&T,e,"internal-error");const w=Us.fromJSON(this.name,T);ee(typeof x=="string",e,"internal-error"),kr(f,e.name),kr(p,e.name),ee(typeof k=="boolean",e,"internal-error"),ee(typeof O=="boolean",e,"internal-error"),kr(_,e.name),kr(v,e.name),kr(S,e.name),kr(N,e.name),kr(C,e.name),kr(E,e.name);const I=new ir({uid:x,auth:e,email:p,emailVerified:k,displayName:f,isAnonymous:O,photoURL:v,phoneNumber:_,tenantId:S,stsTokenManager:w,createdAt:C,lastLoginAt:E});return V&&Array.isArray(V)&&(I.providerData=V.map(A=>Object.assign({},A))),N&&(I._redirectEventId=N),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Us;i.updateFromServerResponse(n);const s=new ir({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?RI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Us;a.updateFromIdToken(r);const u=new ir({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ip(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Zv=new Map;function sr(t){mr(t instanceof Function,"Expected a class definition");let e=Zv.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zv.set(t,e),e)}/**
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
 */class kI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kI.type="NONE";const ew=kI;/**
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
 */function Gu(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(sr(ew),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||sr(ew);const o=Gu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=ir._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new zs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new zs(s,e,r))}}/**
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
 */function tw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(MI(e))return"Blackberry";if(LI(e))return"Webos";if(NI(e))return"Safari";if((e.includes("chrome/")||bI(e))&&!e.includes("edge/"))return"Chrome";if(OI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PI(t=Rt()){return/firefox\//i.test(t)}function NI(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bI(t=Rt()){return/crios\//i.test(t)}function DI(t=Rt()){return/iemobile/i.test(t)}function OI(t=Rt()){return/android/i.test(t)}function MI(t=Rt()){return/blackberry/i.test(t)}function LI(t=Rt()){return/webos/i.test(t)}function sg(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GP(t=Rt()){var e;return sg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KP(){return o1()&&document.documentMode===10}function VI(t=Rt()){return sg(t)||OI(t)||LI(t)||MI(t)||/windows phone/i.test(t)||DI(t)}/**
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
 */function FI(t,e=[]){let n;switch(t){case"Browser":n=tw(Rt());break;case"Worker":n=`${tw(Rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
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
 */class QP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YP(t,e={}){return Io(t,"GET","/v2/passwordPolicy",rg(t,e))}/**
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
 */const XP=6;class JP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ZP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nw(this),this.idTokenSubscription=new nw(this),this.beforeStateQueue=new QP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=II,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xI(this,{idToken:e}),r=await ir._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nr(this.app))return Promise.reject(Mi(this));const n=e?Te(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nr(this.app)?Promise.reject(Mi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nr(this.app)?Promise.reject(Mi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YP(this),n=new JP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=FI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&PP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sh(t){return Te(t)}class nw{constructor(e){this.auth=e,this.observer=null,this.addObserver=_1(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let og={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eN(t){og=t}function tN(t){return og.loadJS(t)}function nN(){return og.gapiScript}function rN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function iN(t,e){const n=Ih(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xa(s,e??{}))return i;$n(i,"already-initialized")}return n.initialize({options:e})}function sN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oN(t,e,n){const r=Sh(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=jI(e),{host:o,port:a}=aN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),lN()}function jI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aN(t){const e=jI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rw(o)}}}function rw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class UI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rr("not implemented")}_getIdTokenResponse(e){return rr("not implemented")}_linkToIdToken(e,n){return rr("not implemented")}_getReauthenticationResolver(e){return rr("not implemented")}}/**
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
 */async function Bs(t,e){return VP(t,"POST","/v1/accounts:signInWithIdp",rg(t,e))}/**
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
 */const uN="http://localhost";class Wi extends UI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Wi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bs(e,n)}buildRequest(){const e={requestUri:uN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
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
 */class ag{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Al extends ag{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Or extends Al{constructor(){super("facebook.com")}static credential(e){return Wi._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wi._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Mr extends Al{constructor(){super("github.com")}static credential(e){return Wi._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
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
 */class Lr extends Al{constructor(){super("twitter.com")}static credential(e,n){return Wi._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
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
 */class to{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ir._fromIdTokenResponse(e,r,i),o=iw(r);return new to({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=iw(r);return new to({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function iw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Nc extends Er{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nc(e,n,r,i)}}function zI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nc._fromErrorAndOperation(t,s,e,r):s})}async function cN(t,e,n=!1){const r=await el(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return to._forOperation(t,"link",r)}/**
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
 */async function hN(t,e,n=!1){const{auth:r}=t;if(nr(r.app))return Promise.reject(Mi(r));const i="reauthenticate";try{const s=await el(t,zI(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=ig(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),to._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$n(r,"user-mismatch"),s}}/**
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
 */async function dN(t,e,n=!1){if(nr(t.app))return Promise.reject(Mi(t));const r="signIn",i=await zI(t,r,e),s=await to._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function fN(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function pN(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function mN(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function gN(t){return Te(t).signOut()}const bc="__sak";/**
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
 */class BI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _N=1e3,yN=10;class WI extends BI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=VI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WI.type="LOCAL";const vN=WI;/**
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
 */class $I extends BI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$I.type="SESSION";const qI=$I;/**
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
 */function wN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ch{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ch(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await wN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ch.receivers=[];/**
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
 */function lg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=lg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Un(){return window}function TN(t){Un().location.href=t}/**
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
 */function HI(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function IN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CN(){return HI()?self:null}/**
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
 */const GI="firebaseLocalStorageDb",AN=1,Dc="firebaseLocalStorage",KI="fbase_key";class xl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ah(t,e){return t.transaction([Dc],e?"readwrite":"readonly").objectStore(Dc)}function xN(){const t=indexedDB.deleteDatabase(GI);return new xl(t).toPromise()}function Sp(){const t=indexedDB.open(GI,AN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dc,{keyPath:KI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dc)?e(r):(r.close(),await xN(),e(await Sp()))})})}async function sw(t,e,n){const r=Ah(t,!0).put({[KI]:e,value:n});return new xl(r).toPromise()}async function RN(t,e){const n=Ah(t,!1).get(e),r=await new xl(n).toPromise();return r===void 0?null:r.value}function ow(t,e){const n=Ah(t,!0).delete(e);return new xl(n).toPromise()}const kN=800,PN=3;class QI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return HI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ch._getInstance(CN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IN(),!this.activeServiceWorker)return;this.sender=new EN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sp();return await sw(e,bc,"1"),await ow(e,bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ow(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ah(i,!1).getAll();return new xl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QI.type="LOCAL";const NN=QI;new Cl(3e4,6e4);/**
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
 */function YI(t,e){return e?sr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ug extends UI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bN(t){return dN(t.auth,new ug(t),t.bypassAuthState)}function DN(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),hN(n,new ug(t),t.bypassAuthState)}async function ON(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),cN(n,new ug(t),t.bypassAuthState)}/**
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
 */class XI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bN;case"linkViaPopup":case"linkViaRedirect":return ON;case"reauthViaPopup":case"reauthViaRedirect":return DN;default:$n(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MN=new Cl(2e3,1e4);async function LN(t,e,n){if(nr(t.app))return Promise.reject(An(t,"operation-not-supported-in-this-environment"));const r=Sh(t);NP(t,e,ag);const i=YI(r,n);return new Pi(r,"signInViaPopup",e,i).executeNotNull()}class Pi extends XI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MN.get())};e()}}Pi.currentPopupAction=null;/**
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
 */const VN="pendingRedirect",Ku=new Map;class FN extends XI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const r=await jN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jN(t,e){const n=BN(e),r=zN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UN(t,e){Ku.set(t._key(),e)}function zN(t){return sr(t._redirectPersistence)}function BN(t){return Gu(VN,t.config.apiKey,t.name)}async function WN(t,e,n=!1){if(nr(t.app))return Promise.reject(Mi(t));const r=Sh(t),i=YI(r,e),o=await new FN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $N=10*60*1e3;class qN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$N&&this.cachedEventUids.clear(),this.cachedEventUids.has(aw(e))}saveEventToCache(e){this.cachedEventUids.add(aw(e)),this.lastProcessedEventTime=Date.now()}}function aw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JI(t);default:return!1}}/**
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
 */async function GN(t,e={}){return Io(t,"GET","/v1/projects",e)}/**
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
 */const KN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QN=/^https?/;async function YN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GN(t);for(const n of e)try{if(XN(n))return}catch{}$n(t,"unauthorized-domain")}function XN(t){const e=Tp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QN.test(n))return!1;if(KN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const JN=new Cl(3e4,6e4);function lw(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZN(t){return new Promise((e,n)=>{var r,i,s;function o(){lw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lw(),n(An(t,"network-request-failed"))},timeout:JN.get()})}if(!((i=(r=Un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Un().gapi)===null||s===void 0)&&s.load)o();else{const a=rN("iframefcb");return Un()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},tN(`${nN()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Qu=null,e})}let Qu=null;function eb(t){return Qu=Qu||ZN(t),Qu}/**
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
 */const tb=new Cl(5e3,15e3),nb="__/auth/iframe",rb="emulator/auth/iframe",ib={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ob(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ng(e,rb):`https://${t.config.authDomain}/${nb}`,r={apiKey:e.apiKey,appName:t.name,v:rs},i=sb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${To(r).slice(1)}`}async function ab(t){const e=await eb(t),n=Un().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:ob(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ib,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=Un().setTimeout(()=>{s(o)},tb.get());function u(){Un().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const lb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ub=500,cb=600,hb="_blank",db="http://localhost";class uw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fb(t,e,n,r=ub,i=cb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},lb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Rt().toLowerCase();n&&(a=bI(c)?hb:n),PI(c)&&(e=e||db,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[_,v])=>`${p}${_}=${v},`,"");if(GP(c)&&a!=="_self")return pb(e||"",a),new uw(null);const f=window.open(e||"",a,h);ee(f,t,"popup-blocked");try{f.focus()}catch{}return new uw(f)}function pb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mb="__/auth/handler",gb="emulator/auth/handler",_b=encodeURIComponent("fac");async function cw(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:i};if(e instanceof ag){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Al){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${_b}=${encodeURIComponent(u)}`:"";return`${yb(t)}?${To(a).slice(1)}${c}`}function yb({config:t}){return t.emulator?ng(t,gb):`https://${t.authDomain}/${mb}`}/**
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
 */const rf="webStorageSupport";class vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qI,this._completeRedirectFn=WN,this._overrideRedirectResult=UN}async _openPopup(e,n,r,i){var s;mr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await cw(e,n,r,Tp(),i);return fb(e,o,lg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cw(e,n,r,Tp(),i);return TN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ab(e),r=new qN(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rf,{type:rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rf];o!==void 0&&n(!!o),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return VI()||NI()||sg()}}const wb=vb;var hw="@firebase/auth",dw="1.7.9";/**
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
 */class Eb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ib(t){Bi(new ri("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FI(t)},c=new ZP(r,i,s,u);return sN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bi(new ri("auth-internal",e=>{const n=Sh(e.getProvider("auth").getImmediate());return(r=>new Eb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(hw,dw,Tb(t)),jn(hw,dw,"esm2017")}/**
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
 */const Sb=5*60,Cb=fI("authIdTokenMaxAge")||Sb;let fw=null;const Ab=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Cb)return;const i=n==null?void 0:n.token;fw!==i&&(fw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xb(t=Jm()){const e=Ih(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iN(t,{popupRedirectResolver:wb,persistence:[NN,vN,qI]}),r=fI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ab(s.toString());pN(n,o,()=>o(n.currentUser)),fN(n,a=>o(a))}}const i=cI("auth");return i&&oN(n,`http://${i}`),n}function Rb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=An("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Rb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ib("Browser");var kb="firebase",Pb="10.14.1";/**
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
 */jn(kb,Pb,"app");var pw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Li,ZI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,w){function I(){}I.prototype=w.prototype,T.D=w.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(A,P,b){for(var R=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)R[Vt-2]=arguments[Vt];return w.prototype[P].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,w,I){I||(I=0);var A=Array(16);if(typeof w=="string")for(var P=0;16>P;++P)A[P]=w.charCodeAt(I++)|w.charCodeAt(I++)<<8|w.charCodeAt(I++)<<16|w.charCodeAt(I++)<<24;else for(P=0;16>P;++P)A[P]=w[I++]|w[I++]<<8|w[I++]<<16|w[I++]<<24;w=T.g[0],I=T.g[1],P=T.g[2];var b=T.g[3],R=w+(b^I&(P^b))+A[0]+3614090360&4294967295;w=I+(R<<7&4294967295|R>>>25),R=b+(P^w&(I^P))+A[1]+3905402710&4294967295,b=w+(R<<12&4294967295|R>>>20),R=P+(I^b&(w^I))+A[2]+606105819&4294967295,P=b+(R<<17&4294967295|R>>>15),R=I+(w^P&(b^w))+A[3]+3250441966&4294967295,I=P+(R<<22&4294967295|R>>>10),R=w+(b^I&(P^b))+A[4]+4118548399&4294967295,w=I+(R<<7&4294967295|R>>>25),R=b+(P^w&(I^P))+A[5]+1200080426&4294967295,b=w+(R<<12&4294967295|R>>>20),R=P+(I^b&(w^I))+A[6]+2821735955&4294967295,P=b+(R<<17&4294967295|R>>>15),R=I+(w^P&(b^w))+A[7]+4249261313&4294967295,I=P+(R<<22&4294967295|R>>>10),R=w+(b^I&(P^b))+A[8]+1770035416&4294967295,w=I+(R<<7&4294967295|R>>>25),R=b+(P^w&(I^P))+A[9]+2336552879&4294967295,b=w+(R<<12&4294967295|R>>>20),R=P+(I^b&(w^I))+A[10]+4294925233&4294967295,P=b+(R<<17&4294967295|R>>>15),R=I+(w^P&(b^w))+A[11]+2304563134&4294967295,I=P+(R<<22&4294967295|R>>>10),R=w+(b^I&(P^b))+A[12]+1804603682&4294967295,w=I+(R<<7&4294967295|R>>>25),R=b+(P^w&(I^P))+A[13]+4254626195&4294967295,b=w+(R<<12&4294967295|R>>>20),R=P+(I^b&(w^I))+A[14]+2792965006&4294967295,P=b+(R<<17&4294967295|R>>>15),R=I+(w^P&(b^w))+A[15]+1236535329&4294967295,I=P+(R<<22&4294967295|R>>>10),R=w+(P^b&(I^P))+A[1]+4129170786&4294967295,w=I+(R<<5&4294967295|R>>>27),R=b+(I^P&(w^I))+A[6]+3225465664&4294967295,b=w+(R<<9&4294967295|R>>>23),R=P+(w^I&(b^w))+A[11]+643717713&4294967295,P=b+(R<<14&4294967295|R>>>18),R=I+(b^w&(P^b))+A[0]+3921069994&4294967295,I=P+(R<<20&4294967295|R>>>12),R=w+(P^b&(I^P))+A[5]+3593408605&4294967295,w=I+(R<<5&4294967295|R>>>27),R=b+(I^P&(w^I))+A[10]+38016083&4294967295,b=w+(R<<9&4294967295|R>>>23),R=P+(w^I&(b^w))+A[15]+3634488961&4294967295,P=b+(R<<14&4294967295|R>>>18),R=I+(b^w&(P^b))+A[4]+3889429448&4294967295,I=P+(R<<20&4294967295|R>>>12),R=w+(P^b&(I^P))+A[9]+568446438&4294967295,w=I+(R<<5&4294967295|R>>>27),R=b+(I^P&(w^I))+A[14]+3275163606&4294967295,b=w+(R<<9&4294967295|R>>>23),R=P+(w^I&(b^w))+A[3]+4107603335&4294967295,P=b+(R<<14&4294967295|R>>>18),R=I+(b^w&(P^b))+A[8]+1163531501&4294967295,I=P+(R<<20&4294967295|R>>>12),R=w+(P^b&(I^P))+A[13]+2850285829&4294967295,w=I+(R<<5&4294967295|R>>>27),R=b+(I^P&(w^I))+A[2]+4243563512&4294967295,b=w+(R<<9&4294967295|R>>>23),R=P+(w^I&(b^w))+A[7]+1735328473&4294967295,P=b+(R<<14&4294967295|R>>>18),R=I+(b^w&(P^b))+A[12]+2368359562&4294967295,I=P+(R<<20&4294967295|R>>>12),R=w+(I^P^b)+A[5]+4294588738&4294967295,w=I+(R<<4&4294967295|R>>>28),R=b+(w^I^P)+A[8]+2272392833&4294967295,b=w+(R<<11&4294967295|R>>>21),R=P+(b^w^I)+A[11]+1839030562&4294967295,P=b+(R<<16&4294967295|R>>>16),R=I+(P^b^w)+A[14]+4259657740&4294967295,I=P+(R<<23&4294967295|R>>>9),R=w+(I^P^b)+A[1]+2763975236&4294967295,w=I+(R<<4&4294967295|R>>>28),R=b+(w^I^P)+A[4]+1272893353&4294967295,b=w+(R<<11&4294967295|R>>>21),R=P+(b^w^I)+A[7]+4139469664&4294967295,P=b+(R<<16&4294967295|R>>>16),R=I+(P^b^w)+A[10]+3200236656&4294967295,I=P+(R<<23&4294967295|R>>>9),R=w+(I^P^b)+A[13]+681279174&4294967295,w=I+(R<<4&4294967295|R>>>28),R=b+(w^I^P)+A[0]+3936430074&4294967295,b=w+(R<<11&4294967295|R>>>21),R=P+(b^w^I)+A[3]+3572445317&4294967295,P=b+(R<<16&4294967295|R>>>16),R=I+(P^b^w)+A[6]+76029189&4294967295,I=P+(R<<23&4294967295|R>>>9),R=w+(I^P^b)+A[9]+3654602809&4294967295,w=I+(R<<4&4294967295|R>>>28),R=b+(w^I^P)+A[12]+3873151461&4294967295,b=w+(R<<11&4294967295|R>>>21),R=P+(b^w^I)+A[15]+530742520&4294967295,P=b+(R<<16&4294967295|R>>>16),R=I+(P^b^w)+A[2]+3299628645&4294967295,I=P+(R<<23&4294967295|R>>>9),R=w+(P^(I|~b))+A[0]+4096336452&4294967295,w=I+(R<<6&4294967295|R>>>26),R=b+(I^(w|~P))+A[7]+1126891415&4294967295,b=w+(R<<10&4294967295|R>>>22),R=P+(w^(b|~I))+A[14]+2878612391&4294967295,P=b+(R<<15&4294967295|R>>>17),R=I+(b^(P|~w))+A[5]+4237533241&4294967295,I=P+(R<<21&4294967295|R>>>11),R=w+(P^(I|~b))+A[12]+1700485571&4294967295,w=I+(R<<6&4294967295|R>>>26),R=b+(I^(w|~P))+A[3]+2399980690&4294967295,b=w+(R<<10&4294967295|R>>>22),R=P+(w^(b|~I))+A[10]+4293915773&4294967295,P=b+(R<<15&4294967295|R>>>17),R=I+(b^(P|~w))+A[1]+2240044497&4294967295,I=P+(R<<21&4294967295|R>>>11),R=w+(P^(I|~b))+A[8]+1873313359&4294967295,w=I+(R<<6&4294967295|R>>>26),R=b+(I^(w|~P))+A[15]+4264355552&4294967295,b=w+(R<<10&4294967295|R>>>22),R=P+(w^(b|~I))+A[6]+2734768916&4294967295,P=b+(R<<15&4294967295|R>>>17),R=I+(b^(P|~w))+A[13]+1309151649&4294967295,I=P+(R<<21&4294967295|R>>>11),R=w+(P^(I|~b))+A[4]+4149444226&4294967295,w=I+(R<<6&4294967295|R>>>26),R=b+(I^(w|~P))+A[11]+3174756917&4294967295,b=w+(R<<10&4294967295|R>>>22),R=P+(w^(b|~I))+A[2]+718787259&4294967295,P=b+(R<<15&4294967295|R>>>17),R=I+(b^(P|~w))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+w&4294967295,T.g[1]=T.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.u=function(T,w){w===void 0&&(w=T.length);for(var I=w-this.blockSize,A=this.B,P=this.h,b=0;b<w;){if(P==0)for(;b<=I;)i(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<w;)if(A[P++]=T.charCodeAt(b++),P==this.blockSize){i(this,A),P=0;break}}else for(;b<w;)if(A[P++]=T[b++],P==this.blockSize){i(this,A),P=0;break}}this.h=P,this.o+=w},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var w=1;w<T.length-8;++w)T[w]=0;var I=8*this.o;for(w=T.length-8;w<T.length;++w)T[w]=I&255,I/=256;for(this.u(T),T=Array(16),w=I=0;4>w;++w)for(var A=0;32>A;A+=8)T[I++]=this.g[w]>>>A&255;return T};function s(T,w){var I=a;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=w(T)}function o(T,w){this.h=w;for(var I=[],A=!0,P=T.length-1;0<=P;P--){var b=T[P]|0;A&&b==w||(I[P]=b,A=!1)}this.g=I}var a={};function u(T){return-128<=T&&128>T?s(T,function(w){return new o([w|0],0>w?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return N(c(-T));for(var w=[],I=1,A=0;T>=I;A++)w[A]=T/I|0,I*=4294967296;return new o(w,0)}function h(T,w){if(T.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T.charAt(0)=="-")return N(h(T.substring(1),w));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(w,8)),A=f,P=0;P<T.length;P+=8){var b=Math.min(8,T.length-P),R=parseInt(T.substring(P,P+b),w);8>b?(b=c(Math.pow(w,b)),A=A.j(b).add(c(R))):(A=A.j(I),A=A.add(c(R)))}return A}var f=u(0),p=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(S(this))return-N(this).m();for(var T=0,w=1,I=0;I<this.g.length;I++){var A=this.i(I);T+=(0<=A?A:4294967296+A)*w,w*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(v(this))return"0";if(S(this))return"-"+N(this).toString(T);for(var w=c(Math.pow(T,6)),I=this,A="";;){var P=k(I,w).g;I=C(I,P.j(w));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=P,v(I))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function v(T){if(T.h!=0)return!1;for(var w=0;w<T.g.length;w++)if(T.g[w]!=0)return!1;return!0}function S(T){return T.h==-1}t.l=function(T){return T=C(this,T),S(T)?-1:v(T)?0:1};function N(T){for(var w=T.g.length,I=[],A=0;A<w;A++)I[A]=~T.g[A];return new o(I,~T.h).add(p)}t.abs=function(){return S(this)?N(this):this},t.add=function(T){for(var w=Math.max(this.g.length,T.g.length),I=[],A=0,P=0;P<=w;P++){var b=A+(this.i(P)&65535)+(T.i(P)&65535),R=(b>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);A=R>>>16,b&=65535,R&=65535,I[P]=R<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function C(T,w){return T.add(N(w))}t.j=function(T){if(v(this)||v(T))return f;if(S(this))return S(T)?N(this).j(N(T)):N(N(this).j(T));if(S(T))return N(this.j(N(T)));if(0>this.l(_)&&0>T.l(_))return c(this.m()*T.m());for(var w=this.g.length+T.g.length,I=[],A=0;A<2*w;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<T.g.length;P++){var b=this.i(A)>>>16,R=this.i(A)&65535,Vt=T.i(P)>>>16,gn=T.i(P)&65535;I[2*A+2*P]+=R*gn,E(I,2*A+2*P),I[2*A+2*P+1]+=b*gn,E(I,2*A+2*P+1),I[2*A+2*P+1]+=R*Vt,E(I,2*A+2*P+1),I[2*A+2*P+2]+=b*Vt,E(I,2*A+2*P+2)}for(A=0;A<w;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=w;A<2*w;A++)I[A]=0;return new o(I,0)};function E(T,w){for(;(T[w]&65535)!=T[w];)T[w+1]+=T[w]>>>16,T[w]&=65535,w++}function x(T,w){this.g=T,this.h=w}function k(T,w){if(v(w))throw Error("division by zero");if(v(T))return new x(f,f);if(S(T))return w=k(N(T),w),new x(N(w.g),N(w.h));if(S(w))return w=k(T,N(w)),new x(N(w.g),w.h);if(30<T.g.length){if(S(T)||S(w))throw Error("slowDivide_ only works with positive integers.");for(var I=p,A=w;0>=A.l(T);)I=O(I),A=O(A);var P=V(I,1),b=V(A,1);for(A=V(A,2),I=V(I,2);!v(A);){var R=b.add(A);0>=R.l(T)&&(P=P.add(I),b=R),A=V(A,1),I=V(I,1)}return w=C(T,P.j(w)),new x(P,w)}for(P=f;0<=T.l(w);){for(I=Math.max(1,Math.floor(T.m()/w.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=c(I),R=b.j(w);S(R)||0<R.l(T);)I-=A,b=c(I),R=b.j(w);v(b)&&(b=p),P=P.add(b),T=C(T,R)}return new x(P,T)}t.A=function(T){return k(this,T).h},t.and=function(T){for(var w=Math.max(this.g.length,T.g.length),I=[],A=0;A<w;A++)I[A]=this.i(A)&T.i(A);return new o(I,this.h&T.h)},t.or=function(T){for(var w=Math.max(this.g.length,T.g.length),I=[],A=0;A<w;A++)I[A]=this.i(A)|T.i(A);return new o(I,this.h|T.h)},t.xor=function(T){for(var w=Math.max(this.g.length,T.g.length),I=[],A=0;A<w;A++)I[A]=this.i(A)^T.i(A);return new o(I,this.h^T.h)};function O(T){for(var w=T.g.length+1,I=[],A=0;A<w;A++)I[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(I,T.h)}function V(T,w){var I=w>>5;w%=32;for(var A=T.g.length-I,P=[],b=0;b<A;b++)P[b]=0<w?T.i(b+I)>>>w|T.i(b+I+1)<<32-w:T.i(b+I);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ZI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Li=o}).apply(typeof pw<"u"?pw:typeof self<"u"?self:typeof window<"u"?window:{});var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eS,ca,tS,Yu,Cp,nS,rS,iS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Au=="object"&&Au];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var D=l[y];if(!(D in m))break e;m=m[D]}l=l[l.length-1],y=m[l],d=d(y),d!=y&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,y=!1,D={next:function(){if(!y&&m<l.length){var M=m++;return{value:d(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),l.apply(d,D)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function _(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function v(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,D,M){for(var H=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)H[Ee-2]=arguments[Ee];return d.prototype[D].apply(y,H)}}function S(l){const d=l.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=l[y];return m}return[]}function N(l,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const D=l.length||0,M=y.length||0;l.length=D+M;for(let H=0;H<M;H++)l[D+H]=y[H]}else l.push(y)}}class C{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function k(l){return k[" "](l),l}k[" "]=function(){};var O=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function V(l,d,m){for(const y in l)d.call(m,l[y],y,l)}function T(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function w(l){const d={};for(const m in l)d[m]=l[m];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let m,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(m in y)l[m]=y[m];for(let M=0;M<I.length;M++)m=I[M],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function P(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function b(l){a.setTimeout(()=>{throw l},0)}function R(){var l=Z;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Vt{constructor(){this.h=this.g=null}add(d,m){const y=gn.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var gn=new C(()=>new mi,l=>l.reset());class mi{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let nn,K=!1,Z=new Vt,F=()=>{const l=a.Promise.resolve(void 0);nn=()=>{l.then(U)}};var U=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){b(m)}var d=gn;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}K=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function we(l,d){if(q.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(O){e:{try{k(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Oe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&we.aa.h.call(this)}}v(we,q);var Oe={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),rn=0;function gi(l,d,m,y,D){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=D,this.key=++rn,this.da=this.fa=!1}function bn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ir(l){this.src=l,this.g={},this.h=0}Ir.prototype.add=function(l,d,m,y,D){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var H=Ht(l,d,y,D);return-1<H?(d=l[H],m||(d.fa=!1)):(d=new gi(d,this.src,M,!!y,D),d.fa=m,l.push(d)),d};function sn(l,d){var m=d.type;if(m in l.g){var y=l.g[m],D=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=D)&&Array.prototype.splice.call(y,D,1),M&&(bn(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Ht(l,d,m,y){for(var D=0;D<l.length;++D){var M=l[D];if(!M.da&&M.listener==d&&M.capture==!!m&&M.ha==y)return D}return-1}var on="closure_lm_"+(1e6*Math.random()|0),me={};function Re(l,d,m,y,D){if(Array.isArray(d)){for(var M=0;M<d.length;M++)Re(l,d[M],m,y,D);return null}return m=L_(m),l&&l[Fe]?l.K(d,m,c(y)?!!y.capture:!1,D):Sr(l,d,m,!1,y,D)}function Sr(l,d,m,y,D,M){if(!d)throw Error("Invalid event type");var H=c(D)?!!D.capture:!!D,Ee=ad(l);if(Ee||(l[on]=Ee=new Ir(l)),m=Ee.add(d,m,y,H,M),m.proxy)return m;if(y=_i(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)Ie||(D=H),D===void 0&&(D=!1),l.addEventListener(d.toString(),y,D);else if(l.attachEvent)l.attachEvent(M_(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function _i(){function l(m){return d.call(l.src,l.listener,m)}const d=KA;return l}function Dn(l,d,m,y,D){if(Array.isArray(d))for(var M=0;M<d.length;M++)Dn(l,d[M],m,y,D);else y=c(y)?!!y.capture:!!y,m=L_(m),l&&l[Fe]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],m=Ht(M,m,y,D),-1<m&&(bn(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=ad(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Ht(d,m,y,D)),(m=-1<l?d[l]:null)&&od(m))}function od(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Fe])sn(d.i,l);else{var m=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(m,y,l.capture):d.detachEvent?d.detachEvent(M_(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=ad(d))?(sn(m,l),m.h==0&&(m.src=null,d[on]=null)):bn(l)}}}function M_(l){return l in me?me[l]:me[l]="on"+l}function KA(l,d){if(l.da)l=!0;else{d=new we(d,this);var m=l.listener,y=l.ha||l.src;l.fa&&od(l),l=m.call(y,d)}return l}function ad(l){return l=l[on],l instanceof Ir?l:null}var ld="__closure_events_fn_"+(1e9*Math.random()>>>0);function L_(l){return typeof l=="function"?l:(l[ld]||(l[ld]=function(d){return l.handleEvent(d)}),l[ld])}function _t(){z.call(this),this.i=new Ir(this),this.M=this,this.F=null}v(_t,z),_t.prototype[Fe]=!0,_t.prototype.removeEventListener=function(l,d,m,y){Dn(this,l,d,m,y)};function kt(l,d){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new q(d,l);else if(d instanceof q)d.target=d.target||l;else{var D=d;d=new q(y,l),A(d,D)}if(D=!0,m)for(var M=m.length-1;0<=M;M--){var H=d.g=m[M];D=Hl(H,y,!0,d)&&D}if(H=d.g=l,D=Hl(H,y,!0,d)&&D,D=Hl(H,y,!1,d)&&D,m)for(M=0;M<m.length;M++)H=d.g=m[M],D=Hl(H,y,!1,d)&&D}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],y=0;y<m.length;y++)bn(m[y]);delete l.g[d],l.h--}}this.F=null},_t.prototype.K=function(l,d,m,y){return this.i.add(String(l),d,!1,m,y)},_t.prototype.L=function(l,d,m,y){return this.i.add(String(l),d,!0,m,y)};function Hl(l,d,m,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,M=0;M<d.length;++M){var H=d[M];if(H&&!H.da&&H.capture==m){var Ee=H.listener,ut=H.ha||H.src;H.fa&&sn(l.i,H),D=Ee.call(ut,y)!==!1&&D}}return D&&!y.defaultPrevented}function V_(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function F_(l){l.g=V_(()=>{l.g=null,l.i&&(l.i=!1,F_(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class QA extends z{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:F_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Do(l){z.call(this),this.h=l,this.g={}}v(Do,z);var j_=[];function U_(l){V(l.g,function(d,m){this.g.hasOwnProperty(m)&&od(d)},l),l.g={}}Do.prototype.N=function(){Do.aa.N.call(this),U_(this)},Do.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ud=a.JSON.stringify,YA=a.JSON.parse,XA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function cd(){}cd.prototype.h=null;function z_(l){return l.h||(l.h=l.i())}function B_(){}var Oo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hd(){q.call(this,"d")}v(hd,q);function dd(){q.call(this,"c")}v(dd,q);var yi={},W_=null;function Gl(){return W_=W_||new _t}yi.La="serverreachability";function $_(l){q.call(this,yi.La,l)}v($_,q);function Mo(l){const d=Gl();kt(d,new $_(d))}yi.STAT_EVENT="statevent";function q_(l,d){q.call(this,yi.STAT_EVENT,l),this.stat=d}v(q_,q);function Pt(l){const d=Gl();kt(d,new q_(d,l))}yi.Ma="timingevent";function H_(l,d){q.call(this,yi.Ma,l),this.size=d}v(H_,q);function Lo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Vo(){this.g=!0}Vo.prototype.xa=function(){this.g=!1};function JA(l,d,m,y,D,M){l.info(function(){if(l.g)if(M)for(var H="",Ee=M.split("&"),ut=0;ut<Ee.length;ut++){var de=Ee[ut].split("=");if(1<de.length){var yt=de[0];de=de[1];var vt=yt.split("_");H=2<=vt.length&&vt[1]=="type"?H+(yt+"="+de+"&"):H+(yt+"=redacted&")}}else H=null;else H=M;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+m+`
`+H})}function ZA(l,d,m,y,D,M,H){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+m+`
`+M+" "+H})}function hs(l,d,m,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+tx(l,m)+(y?" "+y:"")})}function ex(l,d){l.info(function(){return"TIMEOUT: "+d})}Vo.prototype.info=function(){};function tx(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var H=1;H<D.length;H++)D[H]=""}}}}return ud(m)}catch{return d}}var Kl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},G_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fd;function Ql(){}v(Ql,cd),Ql.prototype.g=function(){return new XMLHttpRequest},Ql.prototype.i=function(){return{}},fd=new Ql;function Cr(l,d,m,y){this.j=l,this.i=d,this.l=m,this.R=y||1,this.U=new Do(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new K_}function K_(){this.i=null,this.g="",this.h=!1}var Q_={},pd={};function md(l,d,m){l.L=1,l.v=Zl(Gn(d)),l.m=m,l.P=!0,Y_(l,null)}function Y_(l,d){l.F=Date.now(),Yl(l),l.A=Gn(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),cy(m.i,"t",y),l.C=0,m=l.j.J,l.h=new K_,l.g=Ry(l.j,m?d:null,!l.m),0<l.O&&(l.M=new QA(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,y=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(j_[0]=D.toString()),D=j_);for(var M=0;M<D.length;M++){var H=Re(m,D[M],y||d.handleEvent,!1,d.h||d);if(!H)break;d.g[H.key]=H}d=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Mo(),JA(l.i,l.u,l.A,l.l,l.R,l.m)}Cr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Kn(l)==3?d.j():this.Y(l)},Cr.prototype.Y=function(l){try{if(l==this.g)e:{const vt=Kn(this.g);var d=this.g.Ba();const ps=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||_y(this.g)))){this.J||vt!=4||d==7||(d==8||0>=ps?Mo(3):Mo(2)),gd(this);var m=this.g.Z();this.X=m;t:if(X_(this)){var y=_y(this.g);l="";var D=y.length,M=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vi(this),Fo(this);var H="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(M&&d==D-1)});y.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=m==200,ZA(this.i,this.u,this.A,this.l,this.R,vt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,ut=this.g;if((Ee=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Ee)){var de=Ee;break t}}de=null}if(m=de)hs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_d(this,m);else{this.o=!1,this.s=3,Pt(12),vi(this),Fo(this);break e}}if(this.P){m=!0;let _n;for(;!this.J&&this.C<H.length;)if(_n=nx(this,H),_n==pd){vt==4&&(this.s=4,Pt(14),m=!1),hs(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==Q_){this.s=4,Pt(15),hs(this.i,this.l,H,"[Invalid Chunk]"),m=!1;break}else hs(this.i,this.l,_n,null),_d(this,_n);if(X_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||H.length!=0||this.h.h||(this.s=1,Pt(16),m=!1),this.o=this.o&&m,!m)hs(this.i,this.l,H,"[Invalid Chunked Response]"),vi(this),Fo(this);else if(0<H.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Id(yt),yt.M=!0,Pt(11))}}else hs(this.i,this.l,H,null),_d(this,H);vt==4&&vi(this),this.o&&!this.J&&(vt==4?Sy(this.j,this):(this.o=!1,Yl(this)))}else vx(this.g),m==400&&0<H.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),vi(this),Fo(this)}}}catch{}finally{}};function X_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function nx(l,d){var m=l.C,y=d.indexOf(`
`,m);return y==-1?pd:(m=Number(d.substring(m,y)),isNaN(m)?Q_:(y+=1,y+m>d.length?pd:(d=d.slice(y,y+m),l.C=y+m,d)))}Cr.prototype.cancel=function(){this.J=!0,vi(this)};function Yl(l){l.S=Date.now()+l.I,J_(l,l.I)}function J_(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Lo(p(l.ba,l),d)}function gd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Cr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ex(this.i,this.A),this.L!=2&&(Mo(),Pt(17)),vi(this),this.s=2,Fo(this)):J_(this,this.S-l)};function Fo(l){l.j.G==0||l.J||Sy(l.j,l)}function vi(l){gd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,U_(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function _d(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||yd(m.h,l))){if(!l.K&&yd(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)su(m),ru(m);else break e;Td(m),Pt(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=Lo(p(m.Za,m),6e3));if(1>=ty(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ei(m,11)}else if((l.K||m.g==l)&&su(m),!E(d))for(D=m.Da.g.parse(d),d=0;d<D.length;d++){let de=D[d];if(m.T=de[0],de=de[1],m.G==2)if(de[0]=="c"){m.K=de[1],m.ia=de[2];const yt=de[3];yt!=null&&(m.la=yt,m.j.info("VER="+m.la));const vt=de[4];vt!=null&&(m.Aa=vt,m.j.info("SVER="+m.Aa));const ps=de[5];ps!=null&&typeof ps=="number"&&0<ps&&(y=1.5*ps,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const _n=l.g;if(_n){const au=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(au){var M=y.h;M.g||au.indexOf("spdy")==-1&&au.indexOf("quic")==-1&&au.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(vd(M,M.h),M.h=null))}if(y.D){const Sd=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;Sd&&(y.ya=Sd,ke(y.I,y.D,Sd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var H=l;if(y.qa=xy(y,y.J?y.ia:null,y.W),H.K){ny(y.h,H);var Ee=H,ut=y.L;ut&&(Ee.I=ut),Ee.B&&(gd(Ee),Yl(Ee)),y.g=H}else Ty(y);0<m.i.length&&iu(m)}else de[0]!="stop"&&de[0]!="close"||Ei(m,7);else m.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Ei(m,7):Ed(m):de[0]!="noop"&&m.l&&m.l.ta(de),m.v=0)}}Mo(4)}catch{}}var rx=class{constructor(l,d){this.g=l,this.map=d}};function Z_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ey(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ty(l){return l.h?1:l.g?l.g.size:0}function yd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function vd(l,d){l.g?l.g.add(d):l.h=d}function ny(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Z_.prototype.cancel=function(){if(this.i=ry(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ry(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return S(l.i)}function ix(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,y=0;y<m;y++)d.push(l[y]);return d}d=[],m=0;for(y in l)d[m++]=l[y];return d}function sx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const y in l)d[m++]=y;return d}}}function iy(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=sx(l),y=ix(l),D=y.length,M=0;M<D;M++)d.call(void 0,y[M],m&&m[M],l)}var sy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ox(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),D=null;if(0<=y){var M=l[m].substring(0,y);D=l[m].substring(y+1)}else M=l[m];d(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function wi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof wi){this.h=l.h,Xl(this,l.j),this.o=l.o,this.g=l.g,Jl(this,l.s),this.l=l.l;var d=l.i,m=new zo;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),oy(this,m),this.m=l.m}else l&&(d=String(l).match(sy))?(this.h=!1,Xl(this,d[1]||"",!0),this.o=jo(d[2]||""),this.g=jo(d[3]||"",!0),Jl(this,d[4]),this.l=jo(d[5]||"",!0),oy(this,d[6]||"",!0),this.m=jo(d[7]||"")):(this.h=!1,this.i=new zo(null,this.h))}wi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Uo(d,ay,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Uo(d,ay,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Uo(m,m.charAt(0)=="/"?ux:lx,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Uo(m,hx)),l.join("")};function Gn(l){return new wi(l)}function Xl(l,d,m){l.j=m?jo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Jl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function oy(l,d,m){d instanceof zo?(l.i=d,dx(l.i,l.h)):(m||(d=Uo(d,cx)),l.i=new zo(d,l.h))}function ke(l,d,m){l.i.set(d,m)}function Zl(l){return ke(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function jo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Uo(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,ax),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ax(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ay=/[#\/\?@]/g,lx=/[#\?:]/g,ux=/[#\?]/g,cx=/[#\?@]/g,hx=/#/g;function zo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Ar(l){l.g||(l.g=new Map,l.h=0,l.i&&ox(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=zo.prototype,t.add=function(l,d){Ar(this),this.i=null,l=ds(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function ly(l,d){Ar(l),d=ds(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function uy(l,d){return Ar(l),d=ds(l,d),l.g.has(d)}t.forEach=function(l,d){Ar(this),this.g.forEach(function(m,y){m.forEach(function(D){l.call(d,D,y,this)},this)},this)},t.na=function(){Ar(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const D=l[y];for(let M=0;M<D.length;M++)m.push(d[y])}return m},t.V=function(l){Ar(this);let d=[];if(typeof l=="string")uy(this,l)&&(d=d.concat(this.g.get(ds(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return Ar(this),this.i=null,l=ds(this,l),uy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function cy(l,d,m){ly(l,d),0<m.length&&(l.i=null,l.g.set(ds(l,d),S(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const M=encodeURIComponent(String(y)),H=this.V(y);for(y=0;y<H.length;y++){var D=M;H[y]!==""&&(D+="="+encodeURIComponent(String(H[y]))),l.push(D)}}return this.i=l.join("&")};function ds(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function dx(l,d){d&&!l.j&&(Ar(l),l.i=null,l.g.forEach(function(m,y){var D=y.toLowerCase();y!=D&&(ly(this,y),cy(this,D,m))},l)),l.j=d}function fx(l,d){const m=new Vo;if(a.Image){const y=new Image;y.onload=_(xr,m,"TestLoadImage: loaded",!0,d,y),y.onerror=_(xr,m,"TestLoadImage: error",!1,d,y),y.onabort=_(xr,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=_(xr,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function px(l,d){const m=new Vo,y=new AbortController,D=setTimeout(()=>{y.abort(),xr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(D),M.ok?xr(m,"TestPingServer: ok",!0,d):xr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),xr(m,"TestPingServer: error",!1,d)})}function xr(l,d,m,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(m)}catch{}}function mx(){this.g=new XA}function gx(l,d,m){const y=m||"";try{iy(l,function(D,M){let H=D;c(D)&&(H=ud(D)),d.push(y+M+"="+encodeURIComponent(H))})}catch(D){throw d.push(y+"type="+encodeURIComponent("_badmap")),D}}function eu(l){this.l=l.Ub||null,this.j=l.eb||!1}v(eu,cd),eu.prototype.g=function(){return new tu(this.l,this.j)},eu.prototype.i=function(l){return function(){return l}}({});function tu(l,d){_t.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(tu,_t),t=tu.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Wo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function hy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Bo(this):Wo(this),this.readyState==3&&hy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Bo(this))},t.Qa=function(l){this.g&&(this.response=l,Bo(this))},t.ga=function(){this.g&&Bo(this)};function Bo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Wo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Wo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(tu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function dy(l){let d="";return V(l,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function wd(l,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=dy(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):ke(l,d,m))}function je(l){_t.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(je,_t);var _x=/^https?$/i,yx=["POST","PUT"];t=je.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fd.g(),this.v=this.o?z_(this.o):z_(fd),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){fy(this,M);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)m.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())m.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(yx,d,void 0))||y||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,H]of m)this.g.setRequestHeader(M,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gy(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){fy(this,M)}};function fy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,py(l),nu(l)}function py(l){l.A||(l.A=!0,kt(l,"complete"),kt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,kt(this,"complete"),kt(this,"abort"),nu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nu(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?my(this):this.bb())},t.bb=function(){my(this)};function my(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Kn(l)!=4||l.Z()!=2)){if(l.u&&Kn(l)==4)V_(l.Ea,0,l);else if(kt(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=H===0){var D=String(l.D).match(sy)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!_x.test(D?D.toLowerCase():"")}m=y}if(m)kt(l,"complete"),kt(l,"success");else{l.m=6;try{var M=2<Kn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",py(l)}}finally{nu(l)}}}}function nu(l,d){if(l.g){gy(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||kt(l,"ready");try{m.onreadystatechange=y}catch{}}}function gy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),YA(d)}};function _y(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function vx(l){const d={};l=(l.g&&2<=Kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(E(l[y]))continue;var m=P(l[y]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=d[D]||[];d[D]=M,M.push(m)}T(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $o(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function yy(l){this.Aa=0,this.i=[],this.j=new Vo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$o("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$o("baseRetryDelayMs",5e3,l),this.cb=$o("retryDelaySeedMs",1e4,l),this.Wa=$o("forwardChannelMaxRetries",2,l),this.wa=$o("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Z_(l&&l.concurrentRequestLimit),this.Da=new mx,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=yy.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,y){Pt(0),this.W=l,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=xy(this,null,this.W),iu(this)};function Ed(l){if(vy(l),l.G==3){var d=l.U++,m=Gn(l.I);if(ke(m,"SID",l.K),ke(m,"RID",d),ke(m,"TYPE","terminate"),qo(l,m),d=new Cr(l,l.j,d),d.L=2,d.v=Zl(Gn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Ry(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Yl(d)}Ay(l)}function ru(l){l.g&&(Id(l),l.g.cancel(),l.g=null)}function vy(l){ru(l),l.u&&(a.clearTimeout(l.u),l.u=null),su(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function iu(l){if(!ey(l.h)&&!l.s){l.s=!0;var d=l.Ga;nn||F(),K||(nn(),K=!0),Z.add(d,l),l.B=0}}function wx(l,d){return ty(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Lo(p(l.Ga,l,d),Cy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new Cr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=w(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Ey(this,D,d),m=Gn(this.I),ke(m,"RID",l),ke(m,"CVER",22),this.D&&ke(m,"X-HTTP-Session-Id",this.D),qo(this,m),M&&(this.O?d="headers="+encodeURIComponent(String(dy(M)))+"&"+d:this.m&&wd(m,this.m,M)),vd(this.h,D),this.Ua&&ke(m,"TYPE","init"),this.P?(ke(m,"$req",d),ke(m,"SID","null"),D.T=!0,md(D,m,null)):md(D,m,d),this.G=2}}else this.G==3&&(l?wy(this,l):this.i.length==0||ey(this.h)||wy(this))};function wy(l,d){var m;d?m=d.l:m=l.U++;const y=Gn(l.I);ke(y,"SID",l.K),ke(y,"RID",m),ke(y,"AID",l.T),qo(l,y),l.m&&l.o&&wd(y,l.m,l.o),m=new Cr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Ey(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),vd(l.h,m),md(m,y,d)}function qo(l,d){l.H&&V(l.H,function(m,y){ke(d,y,m)}),l.l&&iy({},function(m,y){ke(d,y,m)})}function Ey(l,d,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var D=l.i;let M=-1;for(;;){const H=["count="+m];M==-1?0<m?(M=D[0].g,H.push("ofs="+M)):M=0:H.push("ofs="+M);let Ee=!0;for(let ut=0;ut<m;ut++){let de=D[ut].g;const yt=D[ut].map;if(de-=M,0>de)M=Math.max(0,D[ut].g-100),Ee=!1;else try{gx(yt,H,"req"+de+"_")}catch{y&&y(yt)}}if(Ee){y=H.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,y}function Ty(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;nn||F(),K||(nn(),K=!0),Z.add(d,l),l.v=0}}function Td(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Lo(p(l.Fa,l),Cy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Iy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Lo(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),ru(this),Iy(this))};function Id(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Iy(l){l.g=new Cr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Gn(l.qa);ke(d,"RID","rpc"),ke(d,"SID",l.K),ke(d,"AID",l.T),ke(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ke(d,"TO",l.ja),ke(d,"TYPE","xmlhttp"),qo(l,d),l.m&&l.o&&wd(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Zl(Gn(d)),m.m=null,m.P=!0,Y_(m,l)}t.Za=function(){this.C!=null&&(this.C=null,ru(this),Td(this),Pt(19))};function su(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Sy(l,d){var m=null;if(l.g==d){su(l),Id(l),l.g=null;var y=2}else if(yd(l.h,d))m=d.D,ny(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var D=l.B;y=Gl(),kt(y,new H_(y,m)),iu(l)}else Ty(l);else if(D=d.s,D==3||D==0&&0<d.X||!(y==1&&wx(l,d)||y==2&&Td(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),D){case 1:Ei(l,5);break;case 4:Ei(l,10);break;case 3:Ei(l,6);break;default:Ei(l,2)}}}function Cy(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function Ei(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),y=l.Xa;const D=!y;y=new wi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xl(y,"https"),Zl(y),D?fx(y.toString(),m):px(y.toString(),m)}else Pt(2);l.G=0,l.l&&l.l.sa(d),Ay(l),vy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Ay(l){if(l.G=0,l.ka=[],l.l){const d=ry(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,S(l.i),l.i.length=0),l.l.ra()}}function xy(l,d,m){var y=m instanceof wi?Gn(m):new wi(m);if(y.g!="")d&&(y.g=d+"."+y.g),Jl(y,y.s);else{var D=a.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var M=new wi(null);y&&Xl(M,y),d&&(M.g=d),D&&Jl(M,D),m&&(M.l=m),y=M}return m=l.D,d=l.ya,m&&d&&ke(y,m,d),ke(y,"VER",l.la),qo(l,y),y}function Ry(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new je(new eu({eb:m})):new je(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ky(){}t=ky.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ou(){}ou.prototype.g=function(l,d){return new Gt(l,d)};function Gt(l,d){_t.call(this),this.g=new yy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!E(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new fs(this)}v(Gt,_t),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Ed(this.g)},Gt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=ud(l),l=m);d.i.push(new rx(d.Ya++,l)),d.G==3&&iu(d)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Ed(this.g),delete this.g,Gt.aa.N.call(this)};function Py(l){hd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}v(Py,hd);function Ny(){dd.call(this),this.status=1}v(Ny,dd);function fs(l){this.g=l}v(fs,ky),fs.prototype.ua=function(){kt(this.g,"a")},fs.prototype.ta=function(l){kt(this.g,new Py(l))},fs.prototype.sa=function(l){kt(this.g,new Ny)},fs.prototype.ra=function(){kt(this.g,"b")},ou.prototype.createWebChannel=ou.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,iS=function(){return new ou},rS=function(){return Gl()},nS=yi,Cp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kl.NO_ERROR=0,Kl.TIMEOUT=8,Kl.HTTP_ERROR=6,Yu=Kl,G_.COMPLETE="complete",tS=G_,B_.EventType=Oo,Oo.OPEN="a",Oo.CLOSE="b",Oo.ERROR="c",Oo.MESSAGE="d",_t.prototype.listen=_t.prototype.K,ca=B_,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,eS=je}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});const mw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let So="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Th("@firebase/firestore");function ea(){return $i.logLevel}function Y(t,...e){if($i.logLevel<=ae.DEBUG){const n=e.map(cg);$i.debug(`Firestore (${So}): ${t}`,...n)}}function gr(t,...e){if($i.logLevel<=ae.ERROR){const n=e.map(cg);$i.error(`Firestore (${So}): ${t}`,...n)}}function qi(t,...e){if($i.logLevel<=ae.WARN){const n=e.map(cg);$i.warn(`Firestore (${So}): ${t}`,...n)}}function cg(t){if(typeof t=="string")return t;try{/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: `+t;throw gr(e),new Error(e)}function ge(t,e){t||te()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class Nb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bb{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new sS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new It(e)}}class Db{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ob{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Db(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new Mb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Vb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Vb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tl{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends tl{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const Fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends tl{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return Fb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ae.fromString(e))}static fromName(e){return new X(Ae.fromString(e).popFirst(5))}static empty(){return new X(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ae(e.slice()))}}function jb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new ii(i,X.empty(),e)}function Ub(t){return new ii(t.readTime,t.key,-1)}class ii{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ii(re.min(),X.empty(),-1)}static max(){return new ii(re.max(),X.empty(),-1)}}function zb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Bb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Bb)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $b(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function kl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class dg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}dg.oe=-1;function xh(t){return t==null}function Oc(t){return t===0&&1/t==-1/0}function qb(t){return typeof t=="number"&&Number.isInteger(t)&&!Oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Hb(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function aS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe=class Ap{constructor(e,n){this.comparator=e,this.root=n||Jr.EMPTY}insert(e,n){return new Ap(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Jr.BLACK,null,null))}remove(e){return new Ap(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}},xu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Jr=class Qn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qn.RED,this.left=i??Qn.EMPTY,this.right=s??Qn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}};Jr.EMPTY=null,Jr.RED=!0,Jr.BLACK=!1;Jr.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Jr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _w(this.data.getIterator())}getIteratorFrom(e){return new _w(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class _w{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ft(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lS("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Gb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function si(t){if(ge(!!t),typeof t=="string"){let e=0;const n=Gb.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hi(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function Rh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fg(t){const e=t.mapValue.fields.__previous_value__;return Rh(e)?fg(e):e}function nl(t){const e=si(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ru={mapValue:{}};function Gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rh(t)?4:Yb(t)?9007199254740991:Qb(t)?10:11:te()}function qn(t,e){if(t===e)return!0;const n=Gi(t);if(n!==Gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nl(t).isEqual(nl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=si(i.timestampValue),a=si(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Hi(i.bytesValue).isEqual(Hi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return We(i.geoPointValue.latitude)===We(s.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return We(i.integerValue)===We(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=We(i.doubleValue),a=We(s.doubleValue);return o===a?Oc(o)===Oc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(gw(o)!==gw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!qn(o[u],a[u])))return!1;return!0}(t,e);default:return te()}}function rl(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=Gi(t),r=Gi(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=We(s.integerValue||s.doubleValue),u=We(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return yw(t.timestampValue,e.timestampValue);case 4:return yw(nl(t),nl(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Hi(s),u=Hi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=fe(a[c],u[c]);if(h!==0)return h}return fe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=fe(We(s.latitude),We(o.latitude));return a!==0?a:fe(We(s.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},p=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,v=(u=p.value)===null||u===void 0?void 0:u.arrayValue,S=fe(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:vw(_,v)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ru.mapValue&&o===Ru.mapValue)return 0;if(s===Ru.mapValue)return 1;if(o===Ru.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=fe(u[f],h[f]);if(p!==0)return p;const _=io(a[u[f]],c[h[f]]);if(_!==0)return _}return fe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw te()}}function yw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=si(t),r=si(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function vw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=io(n[i],r[i]);if(s)return s}return fe(n.length,r.length)}function so(t){return xp(t)}function xp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=si(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=xp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xp(n.fields[o])}`;return i+"}"}(t.mapValue):te()}function Mc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Rp(t){return!!t&&"integerValue"in t}function pg(t){return!!t&&"arrayValue"in t}function ww(t){return!!t&&"nullValue"in t}function Ew(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xu(t){return!!t&&"mapValue"in t}function Qb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ia(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ia(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ia(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ia(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){is(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(Ia(this.value))}}function uS(t){const e=[];return is(t.fields,(n,r)=>{const i=new ot([n]);if(Xu(r)){const s=uS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oo{constructor(e,n){this.position=e,this.inclusive=n}}function Tw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Iw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class il{constructor(e,n="asc"){this.field=e,this.dir=n}}function Xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cS{}class Ge extends cS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Zb(e,n,r):n==="array-contains"?new nD(e,r):n==="in"?new rD(e,r):n==="not-in"?new iD(e,r):n==="array-contains-any"?new sD(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eD(e,r):new tD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(io(n,this.value)):n!==null&&Gi(this.value)===Gi(n)&&this.matchesComparison(io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kn extends cS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new kn(e,n)}matches(e){return hS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hS(t){return t.op==="and"}function dS(t){return Jb(t)&&hS(t)}function Jb(t){for(const e of t.filters)if(e instanceof kn)return!1;return!0}function kp(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+so(t.value);if(dS(t))return t.filters.map(e=>kp(e)).join(",");{const e=t.filters.map(n=>kp(n)).join(",");return`${t.op}(${e})`}}function fS(t,e){return t instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.field.isEqual(i.field)&&qn(r.value,i.value)}(t,e):t instanceof kn?function(r,i){return i instanceof kn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&fS(o,i.filters[a]),!0):!1}(t,e):void te()}function pS(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${so(n.value)}`}(t):t instanceof kn?function(n){return n.op.toString()+" {"+n.getFilters().map(pS).join(" ,")+"}"}(t):"Filter"}class Zb extends Ge{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class eD extends Ge{constructor(e,n){super(e,"in",n),this.keys=mS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tD extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=mS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class nD extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pg(n)&&rl(n.arrayValue,this.value)}}class rD extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rl(this.value.arrayValue,n)}}class iD extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!rl(this.value.arrayValue,n)}}class sD extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>rl(this.value.arrayValue,r))}}/**
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
 */class oD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Sw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oD(t,e,n,r,i,s,o)}function mg(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>so(r)).join(",")),e.ue=n}return e.ue}function gg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Xb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Iw(t.startAt,e.startAt)&&Iw(t.endAt,e.endAt)}function Pp(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function aD(t,e,n,r,i,s,o,a){return new ss(t,e,n,r,i,s,o,a)}function kh(t){return new ss(t)}function Cw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _g(t){return t.collectionGroup!==null}function Ws(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(ot.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new il(s,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new il(ot.keyField(),r))}return e.ce}function Bn(t){const e=ne(t);return e.le||(e.le=gS(e,Ws(t))),e.le}function lD(t){const e=ne(t);return e.he||(e.he=gS(e,t.explicitOrderBy)),e.he}function gS(t,e){if(t.limitType==="F")return Sw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new il(i.field,s)});const n=t.endAt?new oo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oo(t.startAt.position,t.startAt.inclusive):null;return Sw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Np(t,e){const n=t.filters.concat([e]);return new ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lc(t,e,n){return new ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ph(t,e){return gg(Bn(t),Bn(e))&&t.limitType===e.limitType}function _S(t){return`${mg(Bn(t))}|lt:${t.limitType}`}function ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pS(i)).join(", ")}]`),xh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>so(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>so(i)).join(",")),`Target(${r})`}(Bn(t))}; limitType=${t.limitType})`}function Nh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Tw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ws(r),i)||r.endAt&&!function(o,a,u){const c=Tw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ws(r),i))}(t,e)}function uD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yS(t){return(e,n)=>{let r=!1;for(const i of Ws(t)){const s=cD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cD(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?io(u,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=new Qe(X.comparator);function _r(){return hD}const vS=new Qe(X.comparator);function ha(...t){let e=vS;for(const n of t)e=e.insert(n.key,n);return e}function wS(t){let e=vS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ni(){return Sa()}function ES(){return Sa()}function Sa(){return new Co(t=>t.toString(),(t,e)=>t.isEqual(e))}const dD=new Qe(X.comparator),fD=new ft(X.comparator);function ue(...t){let e=fD;for(const n of t)e=e.add(n);return e}const pD=new ft(fe);function mD(){return pD}/**
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
 */function yg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oc(e)?"-0":e}}function TS(t){return{integerValue:""+t}}function IS(t,e){return qb(e)?TS(e):yg(t,e)}/**
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
 */class bh{constructor(){this._=void 0}}function gD(t,e,n){return t instanceof sl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Rh(s)&&(s=fg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ao?CS(t,e):t instanceof ol?AS(t,e):function(i,s){const o=SS(i,s),a=Aw(o)+Aw(i.Pe);return Rp(o)&&Rp(i.Pe)?TS(a):yg(i.serializer,a)}(t,e)}function _D(t,e,n){return t instanceof ao?CS(t,e):t instanceof ol?AS(t,e):n}function SS(t,e){return t instanceof al?function(r){return Rp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class sl extends bh{}class ao extends bh{constructor(e){super(),this.elements=e}}function CS(t,e){const n=xS(e);for(const r of t.elements)n.some(i=>qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ol extends bh{constructor(e){super(),this.elements=e}}function AS(t,e){let n=xS(e);for(const r of t.elements)n=n.filter(i=>!qn(i,r));return{arrayValue:{values:n}}}class al extends bh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Aw(t){return We(t.integerValue||t.doubleValue)}function xS(t){return pg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.field=e,this.transform=n}}function yD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ao&&i instanceof ao||r instanceof ol&&i instanceof ol?no(r.elements,i.elements,qn):r instanceof al&&i instanceof al?qn(r.Pe,i.Pe):r instanceof sl&&i instanceof sl}(t.transform,e.transform)}class vD{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dh{}function RS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wg(t.key,qt.none()):new Pl(t.key,t.data,qt.none());{const n=t.data,r=jt.empty();let i=new ft(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fi(t.key,r,new Xt(i.toArray()),qt.none())}}function wD(t,e,n){t instanceof Pl?function(i,s,o){const a=i.value.clone(),u=Rw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(i,s,o){if(!Ju(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Rw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(kS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ca(t,e,n,r){return t instanceof Pl?function(s,o,a,u){if(!Ju(s.precondition,o))return a;const c=s.value.clone(),h=kw(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(s,o,a,u){if(!Ju(s.precondition,o))return a;const c=kw(s.fieldTransforms,u,o),h=o.data;return h.setAll(kS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Ju(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ED(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=SS(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function xw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&no(r,i,(s,o)=>yD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pl extends Dh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends Dh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rw(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_D(o,a,n[i]))}return r}function kw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gD(s,o,e))}return r}class wg extends Dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TD extends Dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ca(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ES();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=RS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>xw(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>xw(n,r))}}class Eg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return dD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Eg(e,n,r,i)}}/**
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
 */class SD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CD{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,ce;function xD(t){switch(t){default:return te();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function PS(t){if(t===void 0)return gr("GRPC error has no .code"),L.UNKNOWN;switch(t){case qe.OK:return L.OK;case qe.CANCELLED:return L.CANCELLED;case qe.UNKNOWN:return L.UNKNOWN;case qe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case qe.INTERNAL:return L.INTERNAL;case qe.UNAVAILABLE:return L.UNAVAILABLE;case qe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case qe.NOT_FOUND:return L.NOT_FOUND;case qe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case qe.ABORTED:return L.ABORTED;case qe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case qe.DATA_LOSS:return L.DATA_LOSS;default:return te()}}(ce=qe||(qe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RD(){return new TextEncoder}/**
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
 */const kD=new Li([4294967295,4294967295],0);function Pw(t){const e=RD().encode(t),n=new ZI;return n.update(e),new Uint8Array(n.digest())}function Nw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Li([n,r],0),new Li([i,s],0)]}class Tg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new da(`Invalid padding: ${n}`);if(r<0)throw new da(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new da(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new da(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Li.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Li.fromNumber(r)));return i.compare(kD)===1&&(i=new Li([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Pw(e),[r,i]=Nw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Pw(e),[r,i]=Nw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Nl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oh(re.min(),i,new Qe(fe),_r(),ue())}}class Nl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Nl(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class NS{constructor(e,n){this.targetId=e,this.me=n}}class bS{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bw{constructor(){this.fe=0,this.ge=Ow(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),n=ue(),r=ue();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new Nl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ow()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PD{constructor(e){this.Le=e,this.Be=new Map,this.ke=_r(),this.qe=Dw(),this.Qe=new Qe(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Pp(s))if(r===0){const o=new X(s.path);this.Ue(n,o,Ct.newNoDocument(o,re.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Hi(r).toUint8Array()}catch(u){if(u instanceof lS)return qi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Tg(o,i,s)}catch(u){return qi(u instanceof da?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Pp(a.target)){const u=new X(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ct.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ue();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Oh(e,n,this.Qe,this.ke,r);return this.ke=_r(),this.qe=Dw(),this.Qe=new Qe(fe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new bw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Dw(){return new Qe(X.comparator)}function Ow(){return new Qe(X.comparator)}const ND={asc:"ASCENDING",desc:"DESCENDING"},bD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DD={and:"AND",or:"OR"};class OD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bp(t,e){return t.useProto3Json||xh(e)?e:{value:e}}function Vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MD(t,e){return Vc(t,e.toTimestamp())}function Wn(t){return ge(!!t),re.fromTimestamp(function(n){const r=si(n);return new Ke(r.seconds,r.nanos)}(t))}function Ig(t,e){return Dp(t,e).canonicalString()}function Dp(t,e){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function OS(t){const e=Ae.fromString(t);return ge(US(e)),e}function Op(t,e){return Ig(t.databaseId,e.path)}function sf(t,e){const n=OS(e);if(n.get(1)!==t.databaseId.projectId)throw new G(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(LS(n))}function MS(t,e){return Ig(t.databaseId,e)}function LD(t){const e=OS(t);return e.length===4?Ae.emptyPath():LS(e)}function Mp(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function LS(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mw(t,e,n){return{name:Op(t,e),fields:n.value.mapValue.fields}}function VD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ge(h===void 0||typeof h=="string"),lt.fromBase64String(h||"")):(ge(h===void 0||h instanceof Buffer||h instanceof Uint8Array),lt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?L.UNKNOWN:PS(c.code);return new G(h,c.message||"")}(o);n=new bS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sf(t,r.document.name),s=Wn(r.document.updateTime),o=r.document.createTime?Wn(r.document.createTime):re.min(),a=new jt({mapValue:{fields:r.document.fields}}),u=Ct.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Zu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sf(t,r.document),s=r.readTime?Wn(r.readTime):re.min(),o=Ct.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Zu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sf(t,r.document),s=r.removedTargetIds||[];n=new Zu([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new AD(i,s),a=r.targetId;n=new NS(a,o)}}return n}function FD(t,e){let n;if(e instanceof Pl)n={update:Mw(t,e.key,e.value)};else if(e instanceof wg)n={delete:Op(t,e.key)};else if(e instanceof fi)n={update:Mw(t,e.key,e.data),updateMask:GD(e.fieldMask)};else{if(!(e instanceof TD))return te();n={verify:Op(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof sl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ol)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof al)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function jD(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Wn(i.updateTime):Wn(s);return o.isEqual(re.min())&&(o=Wn(s)),new vD(o,i.transformResults||[])}(n,e))):[]}function UD(t,e){return{documents:[MS(t,e.path)]}}function VS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=MS(t,i);const s=function(c){if(c.length!==0)return jS(kn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Vr(p.field),direction:$D(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function zD(t,e,n,r){const{_t:i,parent:s}=VS(t,e),o={},a=[];let u=0;return n.forEach(c=>{const h="aggregate_"+u++;o[h]=c.alias,c.aggregateType==="count"?a.push({alias:h,count:{}}):c.aggregateType==="avg"?a.push({alias:h,avg:{field:Vr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:h,sum:{field:Vr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function BD(t){let e=LD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=FS(f);return p instanceof kn&&dS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(v){return new il(vs(v.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,xh(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,_=f.values||[];return new oo(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,_=f.values||[];return new oo(_,p)}(n.endAt)),aD(e,i,o,s,a,"F",u,c)}function WD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function FS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vs(n.unaryFilter.field);return Ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vs(n.unaryFilter.field);return Ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(vs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kn.create(n.compositeFilter.filters.map(r=>FS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function $D(t){return ND[t]}function qD(t){return bD[t]}function HD(t){return DD[t]}function Vr(t){return{fieldPath:t.canonicalString()}}function vs(t){return ot.fromServerFormat(t.fieldPath)}function jS(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Ew(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NAN"}};if(ww(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ew(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NAN"}};if(ww(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(n.field),op:qD(n.op),value:n.value}}}(t):t instanceof kn?function(n){const r=n.getFilters().map(i=>jS(i));return r.length===1?r[0]:{compositeFilter:{op:HD(n.op),filters:r}}}(t):te()}function GD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function US(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r,i,s=re.min(),o=re.min(),a=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.ct=e}}function QD(t){const e=BD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lc(e,e.limit,"L"):e}/**
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
 */class YD{constructor(){this.un=new XD}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(ii.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(ii.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class XD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ft(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ft(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new lo(0)}static kn(){return new lo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.changes=new Co(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ca(r.mutation,i,Xt.empty(),Ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=Ni();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ha();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ni();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=_r();const o=Sa(),a=function(){return Sa()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof fi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ca(h.mutation,c,h.mutation.getFieldMask(),Ke.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new ZD(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Sa();let i=new Qe((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Xt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||ue()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=ES();h.forEach(p=>{if(!s.has(p)){const _=RS(n.get(p),r.get(p));_!==null&&f.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_g(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Ni());let a=-1,u=s;return o.next(c=>j.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ue())).next(h=>({batchId:a,changes:wS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ha();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ha();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(f,p){return new ss(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ct.newInvalidDocument(h)))});let a=ha();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Ca(h.mutation,c,Xt.empty(),Ke.now()),Nh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class tO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:QD(i.bundledQuery),readTime:Wn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class nO{constructor(){this.overlays=new Qe(X.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ni();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Ni(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Ni(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ni(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SD(n,r));let s=this.Ir.get(n);s===void 0&&(s=ue(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class rO{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.Tr=new ft(nt.Er),this.dr=new ft(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Ae([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Ae([])),r=new nt(n,e),i=new nt(n,e+1);let s=ue();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||fe(e.wr,n.wr)}static Ar(e,n){return fe(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ft(nt.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ID(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(fe);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new nt(new X(s),0);let a=new ft(fe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),i=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.Mr=e,this.docs=function(){return new Qe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=_r();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ct.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=_r();const o=n.path,a=new X(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||zb(Ub(h),r)<=0||(i.has(h.key)||Nh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oO(this)}getSize(e){return j.resolve(this.size)}}class oO extends JD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.persistence=e,this.Nr=new Co(n=>mg(n),gg),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Sg,this.targetCount=0,this.kr=lo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new lo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n){this.qr={},this.overlays={},this.Qr=new dg(0),this.Kr=!1,this.Kr=!0,this.$r=new rO,this.referenceDelegate=e(this),this.Ur=new aO(this),this.indexManager=new YD,this.remoteDocumentCache=function(i){return new sO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new KD(n),this.Gr=new tO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new iO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new uO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class uO extends Wb{constructor(e){super(),this.currentSequenceNumber=e}}class Cg{constructor(e){this.persistence=e,this.Jr=new Sg,this.Yr=null}static Zr(e){return new Cg(e)}get Xr(){if(this.Yr)return this.Yr;throw te()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ag(e,n.fromCache,r,i)}}/**
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
 */class cO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hO{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return l1()?8:$b(Rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new cO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ea()<=ae.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(ea()<=ae.DEBUG&&Y("QueryEngine","Query:",ys(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ea()<=ae.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bn(n))):j.resolve())}Yi(e,n){if(Cw(n))return j.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lc(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Lc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Cw(n)||i.isEqual(re.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?j.resolve(null):(ea()<=ae.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ys(n)),this.rs(e,o,n,jb(i,-1)).next(a=>a))})}ts(e,n){let r=new ft(yS(e));return n.forEach((i,s)=>{Nh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ea()<=ae.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ys(n)),this.Ji.getDocumentsMatchingQuery(e,n,ii.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class dO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Qe(fe),this._s=new Co(s=>mg(s),gg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function fO(t,e,n,r){return new dO(t,e,n,r)}async function zS(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ue();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function pO(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let _=j.resolve();return p.forEach(v=>{_=_.next(()=>h.getEntry(u,v)).next(S=>{const N=c.docVersions.get(v);ge(N!==null),S.version.compareTo(N)<0&&(f.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),h.addEntry(S)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ue();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function BS(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function mO(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(lt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(f,_),function(S,N,C){return S.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(p,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let u=_r(),c=ue();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(gO(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(re.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function gO(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=_r();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function _O(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yO(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Lp(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!kl(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Lw(t,e,n){const r=ne(t);let i=re.min(),s=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ne(u),p=f._s.get(h);return p!==void 0?j.resolve(f.os.get(p)):f.Ur.getTargetData(c,h)}(r,o,Bn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:ue())).next(a=>(vO(r,uD(e),a),{documents:a,Ts:s})))}function vO(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Vw{constructor(){this.activeTargetIds=mD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wO{constructor(){this.so=new Vw,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Vw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EO{_o(e){}shutdown(){}}/**
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
 */class Fw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ku=null;function of(){return ku===null?ku=function(){return 268435456+Math.round(2147483648*Math.random())}():ku++,"0x"+ku.toString(16)}/**
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
 */const TO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class SO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=of(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw qi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+So}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=TO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=of();return new Promise((o,a)=>{const u=new eS;u.setWithCredentials(!0),u.listenOnce(tS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Yu.NO_ERROR:const h=u.getResponseJson();Y(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Yu.TIMEOUT:Y(Tt,`RPC '${e}' ${s} timed out`),a(new G(L.DEADLINE_EXCEEDED,"Request time out"));break;case Yu.HTTP_ERROR:const f=u.getStatus();if(Y(Tt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const v=function(N){const C=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(C)>=0?C:L.UNKNOWN}(_.status);a(new G(v,_.message))}else a(new G(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(L.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{Y(Tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(Tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=of(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iS(),a=rS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");Y(Tt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let p=!1,_=!1;const v=new IO({Io:N=>{_?Y(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(Y(Tt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),Y(Tt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),S=(N,C,E)=>{N.listen(C,x=>{try{E(x)}catch(k){setTimeout(()=>{throw k},0)}})};return S(f,ca.EventType.OPEN,()=>{_||(Y(Tt,`RPC '${e}' stream ${i} transport opened.`),v.yo())}),S(f,ca.EventType.CLOSE,()=>{_||(_=!0,Y(Tt,`RPC '${e}' stream ${i} transport closed`),v.So())}),S(f,ca.EventType.ERROR,N=>{_||(_=!0,qi(Tt,`RPC '${e}' stream ${i} transport errored:`,N),v.So(new G(L.UNAVAILABLE,"The operation could not be completed")))}),S(f,ca.EventType.MESSAGE,N=>{var C;if(!_){const E=N.data[0];ge(!!E);const x=E,k=x.error||((C=x[0])===null||C===void 0?void 0:C.error);if(k){Y(Tt,`RPC '${e}' stream ${i} received error:`,k);const O=k.status;let V=function(I){const A=qe[I];if(A!==void 0)return PS(A)}(O),T=k.message;V===void 0&&(V=L.INTERNAL,T="Unknown error status: "+O+" with message "+k.message),_=!0,v.So(new G(V,T)),f.close()}else Y(Tt,`RPC '${e}' stream ${i} received:`,E),v.bo(E)}}),S(a,nS.STAT_EVENT,N=>{N.stat===Cp.PROXY?Y(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Cp.NOPROXY&&Y(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.wo()},0),v}}function af(){return typeof document<"u"?document:null}/**
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
 */function Mh(t){return new OD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new WS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(gr(n.toString()),gr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CO extends $S{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=VD(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?Wn(o.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Mp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Pp(u)?{documents:UD(s,u)}:{query:VS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=DS(s,o.resumeToken);const c=bp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=Vc(s,o.snapshotVersion.toTimestamp());const c=bp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=WD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Mp(this.serializer),n.removeTarget=e,this.a_(n)}}class AO extends $S{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=jD(e.writeResults,e.commitTime),r=Wn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Mp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FD(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Dp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Dp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class RO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(gr(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{os(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await bl(c),c.q_.set("Unknown"),c.L_.delete(4),await Lh(c)}(this))})}),this.q_=new RO(r,i)}}async function Lh(t){if(os(t))for(const e of t.B_)await e(!0)}async function bl(t){for(const e of t.B_)await e(!1)}function qS(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Pg(n)?kg(n):Ao(n).r_()&&Rg(n,e))}function xg(t,e){const n=ne(t),r=Ao(n);n.N_.delete(e),r.r_()&&HS(n,e),n.N_.size===0&&(r.r_()?r.o_():os(n)&&n.q_.set("Unknown"))}function Rg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(t).A_(e)}function HS(t,e){t.Q_.xe(e),Ao(t).R_(e)}function kg(t){t.Q_=new PD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ao(t).start(),t.q_.v_()}function Pg(t){return os(t)&&!Ao(t).n_()&&t.N_.size>0}function os(t){return ne(t).L_.size===0}function GS(t){t.Q_=void 0}async function PO(t){t.q_.set("Online")}async function NO(t){t.N_.forEach((e,n)=>{Rg(t,e)})}async function bO(t,e){GS(t),Pg(t)?(t.q_.M_(e),kg(t)):t.q_.set("Unknown")}async function DO(t,e,n){if(t.q_.set("Online"),e instanceof bS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fc(t,r)}else if(e instanceof Zu?t.Q_.Ke(e):e instanceof NS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await BS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(lt.EMPTY_BYTE_STRING,h.snapshotVersion)),HS(s,u);const f=new Ur(h.target,u,c,h.sequenceNumber);Rg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Fc(t,r)}}async function Fc(t,e,n){if(!kl(e))throw e;t.L_.add(1),await bl(t),t.q_.set("Offline"),n||(n=()=>BS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Lh(t)})}function KS(t,e){return e().catch(n=>Fc(t,n,e))}async function Vh(t){const e=ne(t),n=oi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OO(e);)try{const i=await _O(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,MO(e,i)}catch(i){await Fc(e,i)}QS(e)&&YS(e)}function OO(t){return os(t)&&t.O_.length<10}function MO(t,e){t.O_.push(e);const n=oi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function QS(t){return os(t)&&!oi(t).n_()&&t.O_.length>0}function YS(t){oi(t).start()}async function LO(t){oi(t).p_()}async function VO(t){const e=oi(t);for(const n of t.O_)e.m_(n.mutations)}async function FO(t,e,n){const r=t.O_.shift(),i=Eg.from(r,e,n);await KS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vh(t)}async function jO(t,e){e&&oi(t).V_&&await async function(r,i){if(function(o){return xD(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();oi(r).s_(),await KS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vh(r)}}(t,e),QS(t)&&YS(t)}async function jw(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=os(n);n.L_.add(3),await bl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Lh(n)}async function UO(t,e){const n=ne(t);e?(n.L_.delete(2),await Lh(n)):e||(n.L_.add(2),await bl(n),n.q_.set("Unknown"))}function Ao(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new CO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:PO.bind(null,t),Ro:NO.bind(null,t),mo:bO.bind(null,t),d_:DO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Pg(t)?kg(t):t.q_.set("Unknown")):(await t.K_.stop(),GS(t))})),t.K_}function oi(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new AO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LO.bind(null,t),mo:jO.bind(null,t),f_:VO.bind(null,t),g_:FO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Vh(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ng(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bg(t,e){if(gr("AsyncQueue",`${e}: ${t}`),kl(t))return new G(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ha(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.W_=new Qe(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):te():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class uo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new uo(e,n,$s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ph(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class BO{constructor(){this.queries=zw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=zw(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new G(L.ABORTED,"Firestore shutting down"))}}function zw(){return new Co(t=>_S(t),Ph)}async function Dg(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new zO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=bg(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Mg(n)}async function Og(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function WO(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Mg(n)}function $O(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Mg(t){t.Y_.forEach(e=>{e.next()})}var Vp,Bw;(Bw=Vp||(Vp={})).ea="default",Bw.Cache="cache";class Lg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Vp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.key=e}}class JS{constructor(e){this.key=e}}class qO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=yS(e),this.Ra=new $s(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Uw,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),_=Nh(this.query,f)?f:null,v=!!p&&this.mutatedKeys.has(p.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;p&&_?p.data.isEqual(_.data)?v!==S&&(r.track({type:3,doc:_}),N=!0):this.ga(p,_)||(r.track({type:2,doc:_}),N=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),N=!0):p&&!_&&(r.track({type:1,doc:p}),N=!0,(u||c)&&(a=!0)),N&&(_?(o=o.add(_),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,v){const S=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return S(_)-S(v)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new uo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Uw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new JS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new XS(r))}),n}ba(e){this.Ta=e.Ts,this.da=ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return uo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class HO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GO{constructor(e){this.key=e,this.va=!1}}class KO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Co(a=>_S(a),Ph),this.Ma=new Map,this.xa=new Set,this.Oa=new Qe(X.comparator),this.Na=new Map,this.La=new Sg,this.Ba={},this.ka=new Map,this.qa=lo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function QO(t,e,n=!0){const r=iC(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await ZS(r,e,n,!0),i}async function YO(t,e){const n=iC(t);await ZS(n,e,!0,!1)}async function ZS(t,e,n,r){const i=await yO(t.localStore,Bn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await XO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&qS(t.remoteStore,i),a}async function XO(t,e,n,r,i){t.Ka=(f,p,_)=>async function(S,N,C,E){let x=N.view.ma(C);x.ns&&(x=await Lw(S.localStore,N.query,!1).then(({documents:T})=>N.view.ma(T,x)));const k=E&&E.targetChanges.get(N.targetId),O=E&&E.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(x,S.isPrimaryClient,k,O);return $w(S,N.targetId,V.wa),V.snapshot}(t,f,p,_);const s=await Lw(t.localStore,e,!0),o=new qO(e,s.Ts),a=o.ma(s.documents),u=Nl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);$w(t,n,c.wa);const h=new HO(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function JO(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ph(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Lp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&xg(r.remoteStore,i.targetId),Fp(r,i.targetId)}).catch(Rl)):(Fp(r,i.targetId),await Lp(r.localStore,i.targetId,!0))}async function ZO(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xg(n.remoteStore,r.targetId))}async function eM(t,e,n){const r=aM(t);try{const i=await function(o,a){const u=ne(o),c=Ke.now(),h=a.reduce((_,v)=>_.add(v.key),ue());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let v=_r(),S=ue();return u.cs.getEntries(_,h).next(N=>{v=N,v.forEach((C,E)=>{E.isValidDocument()||(S=S.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,v)).next(N=>{f=N;const C=[];for(const E of a){const x=ED(E,f.get(E.key).overlayedDocument);x!=null&&C.push(new fi(E.key,x,uS(x.value.mapValue),qt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,C,a)}).next(N=>{p=N;const C=N.applyToLocalDocumentSet(f,S);return u.documentOverlayCache.saveOverlays(_,N.batchId,C)})}).then(()=>({batchId:p.batchId,changes:wS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Qe(fe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Dl(r,i.changes),await Vh(r.remoteStore)}catch(i){const s=bg(i,"Failed to persist write");n.reject(s)}}async function eC(t,e){const n=ne(t);try{const r=await mO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ge(o.va):i.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await Dl(n,r,e)}catch(r){await Rl(r)}}function Ww(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&Mg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tM(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Qe(X.comparator);o=o.insert(s,Ct.newNoDocument(s,re.min()));const a=ue().add(s),u=new Oh(re.min(),new Map,new Qe(fe),o,a);await eC(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Vg(r)}else await Lp(r.localStore,e,!1).then(()=>Fp(r,e,n)).catch(Rl)}async function nM(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await pO(n.localStore,e);nC(n,r,null),tC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dl(n,i)}catch(i){await Rl(i)}}async function rM(t,e,n){const r=ne(t);try{const i=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ge(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);nC(r,e,n),tC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Dl(r,i)}catch(i){await Rl(i)}}function tC(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function nC(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Fp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||rC(t,r)})}function rC(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(xg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Vg(t))}function $w(t,e,n){for(const r of n)r instanceof XS?(t.La.addReference(r.key,e),iM(t,r)):r instanceof JS?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||rC(t,r.key)):te()}function iM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),Vg(t))}function Vg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Ae.fromString(e)),r=t.qa.next();t.Na.set(r,new GO(n)),t.Oa=t.Oa.insert(n,r),qS(t.remoteStore,new Ur(Bn(kh(n.path)),r,"TargetPurposeLimboResolution",dg.oe))}}async function Dl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Ag.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,p=>j.forEach(p.$i,_=>h.persistence.referenceDelegate.addReference(f,p.targetId,_)).next(()=>j.forEach(p.Ui,_=>h.persistence.referenceDelegate.removeReference(f,p.targetId,_)))))}catch(f){if(!kl(f))throw f;Y("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const _=h.os.get(p),v=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(v);h.os=h.os.insert(p,S)}}}(r.localStore,s))}async function sM(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await zS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new G(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Dl(n,r.hs)}}function oM(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return ue().add(r.key);{let i=ue();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function iC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tM.bind(null,e),e.Ca.d_=WO.bind(null,e.eventManager),e.Ca.$a=$O.bind(null,e.eventManager),e}function aM(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rM.bind(null,e),e}class jc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return fO(this.persistence,new hO,e.initialUser,this.serializer)}Ga(e){return new lO(Cg.Zr,this.serializer)}Wa(e){return new wO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jc.provider={build:()=>new jc};class jp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ww(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sM.bind(null,this.syncEngine),await UO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BO}()}createDatastore(e){const n=Mh(e.databaseInfo.databaseId),r=function(s){return new SO(s)}(e.databaseInfo);return function(s,o,a,u){return new xO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new kO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ww(this.syncEngine,n,0),function(){return Fw.D()?new Fw:new EO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new KO(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await bl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jp.provider={build:()=>new jp};/**
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
 */class Fg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):gr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=hg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lf(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await zS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uM(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>jw(e.remoteStore,i)),t._onlineComponents=e}async function uM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await lf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;qi("Error using user provided cache. Falling back to memory cache: "+n),await lf(t,new jc)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await lf(t,new jc);return t._offlineComponents}async function jg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await qw(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await qw(t,new jp))),t._onlineComponents}function cM(t){return jg(t).then(e=>e.syncEngine)}function hM(t){return jg(t).then(e=>e.datastore)}async function Uc(t){const e=await jg(t),n=e.eventManager;return n.onListen=QO.bind(null,e.syncEngine),n.onUnlisten=JO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZO.bind(null,e.syncEngine),n}function dM(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Fg({next:p=>{h.Za(),o.enqueueAndForget(()=>Og(s,f));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new G(L.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&u&&u.source==="server"?c.reject(new G(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Lg(kh(a.path),h,{includeMetadataChanges:!0,_a:!0});return Dg(s,f)}(await Uc(t),t.asyncQueue,e,n,r)),r.promise}function fM(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Fg({next:p=>{h.Za(),o.enqueueAndForget(()=>Og(s,f)),p.fromCache&&u.source==="server"?c.reject(new G(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Lg(a,h,{includeMetadataChanges:!0,_a:!0});return Dg(s,f)}(await Uc(t),t.asyncQueue,e,n,r)),r.promise}function pM(t,e,n){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await hM(t);r.resolve(async function(o,a,u){var c;const h=ne(o),{request:f,ut:p,parent:_}=zD(h.serializer,lD(a),u);h.connection.Fo||delete f.parent;const v=(await h.Lo("RunAggregationQuery",h.serializer.databaseId,_,f,1)).filter(N=>!!N.result);ge(v.length===1);const S=(c=v[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(S).reduce((N,C)=>(N[p[C]]=S[C],N),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
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
 */function sC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Hw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t,e,n){if(!n)throw new G(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aC(t,e,n,r){if(e===!0&&r===!0)throw new G(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gw(t){if(!X.isDocumentKey(t))throw new G(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kw(t){if(X.isDocumentKey(t))throw new G(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function At(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fh(t);throw new G(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function mM(t,e){if(e<=0)throw new G(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Qw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oS;switch(r.type){case"firstParty":return new Ob(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hw.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Hw.delete(n),r.terminate())}(this),Promise.resolve()}}function lC(t,e,n,r={}){var i;const s=(t=At(t,jh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=It.MOCK_USER;else{a=pI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(c)}t._authCredentials=new Nb(new sS(a,u))}}/**
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
 */class Nn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nn(this.firestore,e,this._query)}}class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class lr extends Nn{constructor(e,n,r){super(e,n,kh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new X(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function pn(t,e,...n){if(t=Te(t),oC("collection","path",e),t instanceof jh){const r=Ae.fromString(e,...n);return Kw(r),new lr(t,null,r)}{if(!(t instanceof pt||t instanceof lr))throw new G(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Kw(r),new lr(t.firestore,null,r)}}function et(t,e,...n){if(t=Te(t),arguments.length===1&&(e=hg.newId()),oC("doc","path",e),t instanceof jh){const r=Ae.fromString(e,...n);return Gw(r),new pt(t,null,new X(r))}{if(!(t instanceof pt||t instanceof lr))throw new G(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Gw(r),new pt(t.firestore,t instanceof lr?t.converter:null,new X(r))}}/**
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
 */class Yw{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new WS(this,"async_queue_retry"),this.Vu=()=>{const r=af();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=af();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new zn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!kl(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw gr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ng.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Xw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Pn extends jh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Yw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yw(e),this._firestoreClient=void 0,await e}}}function uC(t,e){const n=typeof t=="object"?t:Jm(),r=typeof t=="string"?t:"(default)",i=Ih(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hI("firestore");s&&lC(i,...s)}return i}function as(t){if(t._terminated)throw new G(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gM(t),t._firestoreClient}function gM(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new Kb(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,sC(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new lM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class cC{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class hC{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Ki{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ki(lt.fromBase64String(e))}catch(n){throw new G(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ki(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ls{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */class zh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=/^__.*__$/;class yM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pl(e,this.data,n,this.fieldTransforms)}}class dC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Bh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return zc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(fC(this.Cu)&&_M.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mh(e)}Qu(e,n,r,i=!1){return new Bh({Cu:e,methodName:n,qu:r,path:ot.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ro(t){const e=t._freezeSettings(),n=Mh(t._databaseId);return new vM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ug(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);$g("Data must be an object, but it was:",o,r);const a=_C(r,o);let u,c;if(s.merge)u=new Xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Up(e,f,n);if(!o.contains(p))throw new G(L.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);vC(h,p)||h.push(p)}u=new Xt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new yM(new jt(a),u,c)}class Wh extends ls{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wh}}function wM(t,e,n){return new Bh({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zg extends ls{_toFieldTransform(e){return new vg(e.path,new sl)}isEqual(e){return e instanceof zg}}class Bg extends ls{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=wM(this,e,!0),r=this.Ku.map(s=>ko(s,n)),i=new ao(r);return new vg(e.path,i)}isEqual(e){return e instanceof Bg&&Xa(this.Ku,e.Ku)}}class Wg extends ls{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new al(e.serializer,IS(e.serializer,this.$u));return new vg(e.path,n)}isEqual(e){return e instanceof Wg&&this.$u===e.$u}}function pC(t,e,n,r){const i=t.Qu(1,e,n);$g("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();is(r,(u,c)=>{const h=qg(e,u,n);c=Te(c);const f=i.Nu(h);if(c instanceof Wh)s.push(h);else{const p=ko(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new Xt(s);return new dC(o,a,i.fieldTransforms)}function mC(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Up(e,r,n)],u=[i];if(s.length%2!=0)throw new G(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Up(e,s[p])),u.push(s[p+1]);const c=[],h=jt.empty();for(let p=a.length-1;p>=0;--p)if(!vC(c,a[p])){const _=a[p];let v=u[p];v=Te(v);const S=o.Nu(_);if(v instanceof Wh)c.push(_);else{const N=ko(v,S);N!=null&&(c.push(_),h.set(_,N))}}const f=new Xt(c);return new dC(h,f,o.fieldTransforms)}function gC(t,e,n,r=!1){return ko(n,t.Qu(r?4:3,e))}function ko(t,e){if(yC(t=Te(t)))return $g("Unsupported field value:",e,t),_C(t,e);if(t instanceof ls)return function(r,i){if(!fC(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ko(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ke.fromDate(r);return{timestampValue:Vc(i.serializer,s)}}if(r instanceof Ke){const s=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vc(i.serializer,s)}}if(r instanceof Uh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ki)return{bytesValue:DS(i.serializer,r._byteString)};if(r instanceof pt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ig(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof zh)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return yg(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Fh(r)}`)}(t,e)}function _C(t,e){const n={};return aS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,(r,i)=>{const s=ko(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Uh||t instanceof Ki||t instanceof pt||t instanceof ls||t instanceof zh)}function $g(t,e,n){if(!yC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Fh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Up(t,e,n){if((e=Te(e))instanceof xo)return e._internalPath;if(typeof e=="string")return qg(t,e);throw zc("Field path arguments must be of type string or ",t,!1,void 0,n)}const EM=new RegExp("[~\\*/\\[\\]]");function qg(t,e,n){if(e.search(EM)>=0)throw zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xo(...e.split("."))._internalPath}catch{throw zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(L.INVALID_ARGUMENT,a+t+u)}function vC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Hg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($h("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TM extends Hg{data(){return super.data()}}function $h(t,e){return typeof e=="string"?qg(t,e):e instanceof xo?e._internalPath:e._delegate._internalPath}/**
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
 */function wC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gg{}class Ol extends Gg{}function co(t,e,...n){let r=[];e instanceof Gg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof qh).length,a=s.filter(u=>u instanceof Ml).length;if(o>1||o>0&&a>0)throw new G(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ml extends Ol{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ml(e,n,r)}_apply(e){const n=this._parse(e);return EC(e._query,n),new Nn(e.firestore,e.converter,Np(e._query,n))}_parse(e){const n=Ro(e.firestore);return function(s,o,a,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new G(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Zw(f,h);const _=[];for(const v of f)_.push(Jw(u,s,v));p={arrayValue:{values:_}}}else p=Jw(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Zw(f,h),p=gC(a,o,f,h==="in"||h==="not-in");return Ge.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Bc(t,e,n){const r=e,i=$h("where",t);return Ml._create(i,r,n)}class qh extends Gg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)EC(o,u),o=Np(o,u)}(e._query,n),new Nn(e.firestore,e.converter,Np(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hh extends Ol{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hh(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new G(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new il(s,o)}(e._query,this._field,this._direction);return new Nn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ss(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ho(t,e="asc"){const n=e,r=$h("orderBy",t);return Hh._create(r,n)}class Gh extends Ol{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Gh(e,n,r)}_apply(e){return new Nn(e.firestore,e.converter,Lc(e._query,this._limit,this._limitType))}}function ll(t){return mM("limit",t),Gh._create("limit",t,"F")}class Kh extends Ol{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Kh(e,n,r)}_apply(e){const n=IM(e,this.type,this._docOrFields,this._inclusive);return new Nn(e.firestore,e.converter,function(i,s){return new ss(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Kg(...t){return Kh._create("startAfter",t,!1)}function IM(t,e,n,r){if(n[0]=Te(n[0]),n[0]instanceof Hg)return function(s,o,a,u,c){if(!u)throw new G(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of Ws(s))if(f.field.isKeyField())h.push(Mc(o,u.key));else{const p=u.data.field(f.field);if(Rh(p))throw new G(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const _=f.field.canonicalString();throw new G(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}h.push(p)}return new oo(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ro(t.firestore);return function(o,a,u,c,h,f){const p=o.explicitOrderBy;if(h.length>p.length)throw new G(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let v=0;v<h.length;v++){const S=h[v];if(p[v].field.isKeyField()){if(typeof S!="string")throw new G(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof S}`);if(!_g(o)&&S.indexOf("/")!==-1)throw new G(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${S}' contains a slash.`);const N=o.path.child(Ae.fromString(S));if(!X.isDocumentKey(N))throw new G(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const C=new X(N);_.push(Mc(a,C))}else{const N=gC(u,c,S);_.push(N)}}return new oo(_,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Jw(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new G(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_g(e)&&n.indexOf("/")!==-1)throw new G(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!X.isDocumentKey(r))throw new G(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mc(t,new X(r))}if(n instanceof pt)return Mc(t,n._key);throw new G(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fh(n)}.`)}function Zw(t,e){if(!Array.isArray(t)||t.length===0)throw new G(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function EC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TC{convertValue(e,n="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return is(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>We(o.doubleValue));return new zh(s)}convertGeoPoint(e){return new Uh(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nl(e));default:return null}}convertTimestamp(e){const n=si(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);ge(US(r));const i=new ro(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||gr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Qg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function IC(){return new cC("count")}/**
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
 */class bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yg extends Hg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($h("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Aa extends Yg{data(e={}){return super.data(e)}}class Xg{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Aa(this._firestore,this._userDataWriter,r.key,r,new bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Aa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Aa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:SM(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
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
 */function Qi(t){t=At(t,pt);const e=At(t.firestore,Pn);return dM(as(e),t._key).then(n=>CC(e,t,n))}class Qh extends TC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ki(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function Yi(t){t=At(t,Nn);const e=At(t.firestore,Pn),n=as(e),r=new Qh(e);return wC(t._query),fM(n,t._query).then(i=>new Xg(e,r,t,i))}function Jg(t,e,n){t=At(t,pt);const r=At(t.firestore,Pn),i=Qg(t.converter,e,n);return Vl(r,[Ug(Ro(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qt.none())])}function pi(t,e,n,...r){t=At(t,pt);const i=At(t.firestore,Pn),s=Ro(i);let o;return o=typeof(e=Te(e))=="string"||e instanceof xo?mC(s,"updateDoc",t._key,e,n,r):pC(s,"updateDoc",t._key,e),Vl(i,[o.toMutation(t._key,qt.exists(!0))])}function SC(t,e){const n=At(t.firestore,Pn),r=et(t),i=Qg(t.converter,e);return Vl(n,[Ug(Ro(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function Ll(t,...e){var n,r,i;t=Te(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Xw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Xw(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof pt)c=At(t.firestore,Pn),h=kh(t._key.path),u={next:f=>{e[o]&&e[o](CC(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=At(t,Nn);c=At(f.firestore,Pn),h=f._query;const p=new Qh(c);u={next:_=>{e[o]&&e[o](new Xg(c,p,f,_))},error:e[o+1],complete:e[o+2]},wC(t._query)}return function(p,_,v,S){const N=new Fg(S),C=new Lg(_,N,v);return p.asyncQueue.enqueueAndForget(async()=>Dg(await Uc(p),C)),()=>{N.Za(),p.asyncQueue.enqueueAndForget(async()=>Og(await Uc(p),C))}}(as(c),h,a,u)}function Vl(t,e){return function(r,i){const s=new zn;return r.asyncQueue.enqueueAndForget(async()=>eM(await cM(r),i,s)),s.promise}(as(t),e)}function CC(t,e,n){const r=n.docs.get(e._key),i=new Qh(t);return new Yg(t,i,e._key,r,new bs(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function AC(t){return xC(t,{count:IC()})}function xC(t,e){const n=At(t.firestore,Pn),r=as(n),i=Hb(e,(s,o)=>new CD(o,s.aggregateType,s._internalFieldPath));return pM(r,t._query,i).then(s=>function(a,u,c){const h=new Qh(a);return new hC(u,h,c)}(n,t,s))}/**
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
 */class RC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ro(e)}set(e,n,r){this._verifyNotCommitted();const i=uf(e,this._firestore),s=Qg(i.converter,n,r),o=Ug(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,qt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=uf(e,this._firestore);let o;return o=typeof(n=Te(n))=="string"||n instanceof xo?mC(this._dataReader,"WriteBatch.update",s._key,n,r,i):pC(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,qt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=uf(e,this._firestore);return this._mutations=this._mutations.concat(new wg(n._key,qt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function uf(t,e){if((t=Te(t)).firestore!==e)throw new G(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function yr(){return new zg("serverTimestamp")}function kC(...t){return new Bg("arrayUnion",t)}function ec(t){return new Wg("increment",t)}/**
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
 */function PC(t){return as(t=At(t,Pn)),new RC(t,e=>Vl(t,e))}(function(e,n=!0){(function(i){So=i})(rs),Bi(new ri("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Pn(new bb(r.getProvider("auth-internal")),new Lb(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),jn(mw,"4.7.3",e),jn(mw,"4.7.3","esm2017")})();const CM=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:TC,AggregateField:cC,AggregateQuerySnapshot:hC,Bytes:Ki,CollectionReference:lr,DocumentReference:pt,DocumentSnapshot:Yg,FieldPath:xo,FieldValue:ls,Firestore:Pn,FirestoreError:G,GeoPoint:Uh,Query:Nn,QueryCompositeFilterConstraint:qh,QueryConstraint:Ol,QueryDocumentSnapshot:Aa,QueryFieldFilterConstraint:Ml,QueryLimitConstraint:Gh,QueryOrderByConstraint:Hh,QuerySnapshot:Xg,QueryStartAtConstraint:Kh,SnapshotMetadata:bs,Timestamp:Ke,VectorValue:zh,WriteBatch:RC,_AutoId:hg,_ByteString:lt,_DatabaseId:ro,_DocumentKey:X,_EmptyAuthCredentialsProvider:oS,_FieldPath:ot,_cast:At,_logWarn:qi,_validateIsNotUsedTogether:aC,addDoc:SC,arrayUnion:kC,collection:pn,connectFirestoreEmulator:lC,count:IC,doc:et,ensureFirestoreConfigured:as,executeWrite:Vl,getAggregateFromServer:xC,getCountFromServer:AC,getDoc:Qi,getDocs:Yi,getFirestore:uC,increment:ec,limit:ll,onSnapshot:Ll,orderBy:ho,query:co,serverTimestamp:yr,setDoc:Jg,startAfter:Kg,updateDoc:pi,where:Bc,writeBatch:PC},Symbol.toStringTag,{value:"Module"}));var e0={};const t0="@firebase/database",n0="1.0.8";/**
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
 */let NC="";function AM(t){NC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ya(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xM(e)}}catch{}return new RM},bi=bC("localStorage"),kM=bC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Th("@firebase/database"),PM=function(){let t=1;return function(){return t++}}(),DC=function(t){const e=w1(t),n=new g1;n.update(e);const r=n.digest();return Qm.encodeByteArray(r)},Fl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fl.apply(null,r):typeof r=="object"?e+=Je(r):e+=r,e+=" "}return e};let xa=null,r0=!0;const NM=function(t,e){$(!0,"Can't turn on custom loggers persistently."),qs.logLevel=ae.VERBOSE,xa=qs.log.bind(qs)},ht=function(...t){if(r0===!0&&(r0=!1,xa===null&&kM.get("logging_enabled")===!0&&NM()),xa){const e=Fl.apply(null,t);xa(e)}},jl=function(t){return function(...e){ht(t,...e)}},zp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fl(...t);qs.error(e)},vr=function(...t){const e=`FIREBASE FATAL ERROR: ${Fl(...t)}`;throw qs.error(e),new Error(e)},Ot=function(...t){const e="FIREBASE WARNING: "+Fl(...t);qs.warn(e)},bM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},DM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fo="[MIN_NAME]",Xi="[MAX_NAME]",us=function(t,e){if(t===e)return 0;if(t===fo||e===Xi)return-1;if(e===fo||t===Xi)return 1;{const n=i0(t),r=i0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},OM=function(t,e){return t===e?0:t<e?-1:1},ta=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Je(e))},e_=function(t){if(typeof t!="object"||t===null)return Je(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Je(e[r]),n+=":",n+=e_(t[e[r]]);return n+="}",n},OC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const MC=function(t){$(!Zg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(h.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},MM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const FM=new RegExp("^-?(0*)\\d{1,10}$"),jM=-2147483648,UM=2147483647,i0=function(t){if(FM.test(t)){const e=Number(t);if(e>=jM&&e<=UM)return e}return null},Po=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},zM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ra=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class BM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class tc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="5",LC="v",VC="s",FC="r",jC="f",UC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zC="ls",BC="p",Bp="ac",WC="websocket",$C="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $M(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function HC(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===WC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===$C)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$M(t)&&(n.ns=t.namespace);const i=[];return gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(){this.counters_={}}incrementCounter(e,n=1){Hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Xk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf={},hf={};function n_(t){const e=t.toString();return cf[e]||(cf[e]=new qM),cf[e]}function HM(t,e){const n=t.toString();return hf[n]||(hf[n]=e()),hf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Po(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="start",KM="close",QM="pLPCommand",YM="pRTLPCB",GC="id",KC="pw",QC="ser",XM="cb",JM="seg",ZM="ts",eL="d",tL="dframe",YC=1870,XC=30,nL=YC-XC,rL=25e3,iL=3e4;class Ds{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jl(e),this.stats_=n_(n),this.urlFn=u=>(this.appCheckToken&&(u[Bp]=this.appCheckToken),HC(n,$C,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new GM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iL)),DM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new r_((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===s0)this.id=a,this.password=u;else if(o===KM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[s0]="t",r[QC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[XM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[LC]=t_,this.transportSessionId&&(r[VC]=this.transportSessionId),this.lastSessionId&&(r[zC]=this.lastSessionId),this.applicationId&&(r[BC]=this.applicationId),this.appCheckToken&&(r[Bp]=this.appCheckToken),typeof location<"u"&&location.hostname&&UC.test(location.hostname)&&(r[FC]=jC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ds.forceAllow_=!0}static forceDisallow(){Ds.forceDisallow_=!0}static isAvailable(){return Ds.forceAllow_?!0:!Ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!MM()&&!LM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lI(n),i=OC(r,nL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[tL]="t",r[GC]=e,r[KC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class r_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=PM(),window[QM+this.uniqueCallbackIdentifier]=e,window[YM+this.uniqueCallbackIdentifier]=n,this.myIFrame=r_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[GC]=this.myID,e[KC]=this.myPW,e[QC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+XC+r.length<=YC;){const o=this.pendingSegs.shift();r=r+"&"+JM+i+"="+o.seg+"&"+ZM+i+"="+o.ts+"&"+eL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(rL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=16384,oL=45e3;let Wc=null;typeof MozWebSocket<"u"?Wc=MozWebSocket:typeof WebSocket<"u"&&(Wc=WebSocket);class Tn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jl(this.connId),this.stats_=n_(n),this.connURL=Tn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[LC]=t_,typeof location<"u"&&location.hostname&&UC.test(location.hostname)&&(o[FC]=jC),n&&(o[VC]=n),r&&(o[zC]=r),i&&(o[Bp]=i),s&&(o[BC]=s),HC(e,WC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bi.set("previous_websocket_failure",!0);try{let r;a1(),this.mySock=new Wc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Wc!==null&&!Tn.forceDisallow_}static previouslyFailed(){return bi.isInMemoryStorage||bi.get("previous_websocket_failure")===!0}markConnectionHealthy(){bi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ya(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=OC(n,sL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tn.responsesRequiredToBeHealthy=2;Tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ds,Tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Tn&&Tn.isAvailable();let r=n&&!Tn.previouslyFailed();if(e.webSocketOnly&&(n||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Tn];else{const i=this.transports_=[];for(const s of ul.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ul.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ul.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=6e4,lL=5e3,uL=10*1024,cL=100*1024,df="t",o0="d",hL="s",a0="r",dL="e",l0="o",u0="a",c0="n",h0="p",fL="h";class pL{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jl("c:"+this.id+":"),this.transportManager_=new ul(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ra(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(df in e){const n=e[df];n===u0?this.upgradeIfSecondaryHealthy_():n===a0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===l0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ta("t",e),r=ta("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:h0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:u0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:c0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ta("t",e),r=ta("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ta(df,e);if(o0 in e){const r=e[o0];if(n===fL){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===c0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hL?this.onConnectionShutdown_(r):n===a0?this.onReset_(r):n===dL?zp("Server Error: "+r):n===l0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),t_!==r&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ra(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ra(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:h0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends ZC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ym()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $c}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=32,f0=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ve("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ai(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function i_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function eA(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function ze(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ve(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return bt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gL(t,e){const n=cl(t,0),r=cl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=us(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function tA(t,e){if(ai(t)!==ai(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ai(t)>ai(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _L{constructor(e,n){this.errorPrefix_=n,this.parts_=cl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Eh(this.parts_[r]);nA(this)}}function yL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Eh(e),nA(t)}function vL(t){const e=t.parts_.pop();t.byteLength_-=Eh(e),t.parts_.length>0&&(t.byteLength_-=1)}function nA(t){if(t.byteLength_>f0)throw new Error(t.errorPrefix_+"has a key path longer than "+f0+" bytes ("+t.byteLength_+").");if(t.parts_.length>d0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+d0+") or object contains a cycle "+Ci(t))}function Ci(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_ extends ZC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new s_}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=1e3,wL=60*5*1e3,p0=30*1e3,EL=1.3,TL=3e4,IL="server_kill",m0=3;class ur extends JC{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=ur.nextPersistentConnectionId_++,this.log_=jl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=na,this.maxReconnectDelay_=wL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");s_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$c.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Je(s)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Il,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;ur.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Hn(e,"w")){const r=eo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||m1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=p0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=p1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zp("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=na,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=na,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TL&&(this.reconnectDelay_=na),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ur.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new pL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ot(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(IL)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ot(f),u())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gp(this.interruptReasons_)&&(this.reconnectDelay_=na,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>e_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=m0&&(this.reconnectDelay_=p0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=m0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+NC.replace(/\./g,"-")]=1,Ym()?e["framework.cordova"]=1:mI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$c.getInstance().currentlyOnline();return gp(this.interruptReasons_)&&e}}ur.nextPersistentConnectionId_=0;ur.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(fo,e),i=new ie(fo,n);return this.compare(r,i)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu;class rA extends Yh{static get __EMPTY_NODE(){return Pu}static set __EMPTY_NODE(e){Pu=e}compare(e,n){return us(e.name,n.name)}isDefinedOn(e){throw Eo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Xi,Pu)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Pu)}toString(){return".key"}}const Hs=new rA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??zt.EMPTY_NODE,this.right=s??zt.EMPTY_NODE}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return zt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class SL{copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,n=zt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new zt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Nu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Nu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Nu(this.root_,null,this.comparator_,!0,e)}}zt.EMPTY_NODE=new SL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CL(t,e){return us(t.name,e.name)}function o_(t,e){return us(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wp;function AL(t){Wp=t}const iA=function(t){return typeof t=="number"?"number:"+MC(t):"string:"+t},sA=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hn(e,".sv"),"Priority must be a string or number.")}else $(t===Wp||t.isEmpty(),"priority of unexpected type.");$(t===Wp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g0;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sA(this.priorityNode_)}static set __childrenNodeConstructor(e){g0=e}static get __childrenNodeConstructor(){return g0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:le(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||ai(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iA(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=MC(this.value_):e+=this.value_,this.lazyHash_=DC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),s=tt.VALUE_TYPE_ORDER.indexOf(r);return $(i>=0,"Unknown leaf type: "+n),$(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oA,aA;function xL(t){oA=t}function RL(t){aA=t}class kL extends Yh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?us(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Xi,new tt("[PRIORITY-POST]",aA))}makePost(e,n){const r=oA(e);return new ie(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Be=new kL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=Math.log(2);class NL{constructor(e){const n=s=>parseInt(Math.log(s)/PL,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qc=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,p;if(h===0)return null;if(h===1)return f=t[u],p=n?n(f):f,new it(p,f.node,it.BLACK,null,null);{const _=parseInt(h/2,10)+u,v=i(u,_),S=i(_+1,c);return f=t[_],p=n?n(f):f,new it(p,f.node,it.BLACK,v,S)}},s=function(u){let c=null,h=null,f=t.length;const p=function(v,S){const N=f-v,C=f;f-=v;const E=i(N+1,C),x=t[N],k=n?n(x):x;_(new it(k,x.node,S,null,E))},_=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<u.count;++v){const S=u.nextBitIsOne(),N=Math.pow(2,u.count-(v+1));S?p(N,it.BLACK):(p(N,it.BLACK),p(N,it.RED))}return h},o=new NL(t.length),a=s(o);return new zt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;const gs={};class or{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return $(gs&&Be,"ChildrenNode.ts has not been loaded"),ff=ff||new or({".priority":gs},{".priority":Be}),ff}get(e){const n=eo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof zt?n:null}hasIndex(e){return Hn(this.indexSet_,e.toString())}addIndex(e,n){$(e!==Hs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=qc(r,e.getCompare()):a=gs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new or(h,c)}addToIndexes(e,n){const r=Rc(this.indexes_,(i,s)=>{const o=eo(this.indexSet_,s);if($(o,"Missing index implementation for "+s),i===gs)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ie.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),qc(a,o.getCompare())}else return gs;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ie(e.name,a))),u.insert(e,e.node)}});return new or(r,this.indexSet_)}removeFromIndexes(e,n){const r=Rc(this.indexes_,i=>{if(i===gs)return i;{const s=n.get(e.name);return s?i.remove(new ie(e.name,s)):i}});return new or(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sA(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ra||(ra=new J(new zt(o_),null,or.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ra}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ra:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ra:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=le(e);if(r===null)return n;{$(le(e)!==".priority"||ai(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Be,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iA(this.getPriority().val())+":"),this.forEachChild(Be,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":DC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ul?-1:0}withIndex(e){if(e===Hs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Be),i=n.getIterator(Be);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hs?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bL extends J{constructor(){super(new zt(o_),J.EMPTY_NODE,or.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Ul=new bL;Object.defineProperties(ie,{MIN:{value:new ie(fo,J.EMPTY_NODE)},MAX:{value:new ie(Xi,Ul)}});rA.__EMPTY_NODE=J.EMPTY_NODE;tt.__childrenNodeConstructor=J;AL(Ul);RL(Ul);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=!0;function Xe(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,Xe(e))}if(!(t instanceof Array)&&DL){const n=[];let r=!1;if(gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Xe(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ie(o,u)))}}),n.length===0)return J.EMPTY_NODE;const s=qc(n,CL,o=>o.name,o_);if(r){const o=qc(n,Be.getCompare());return new J(s,Xe(e),new or({".priority":o},{".priority":Be}))}else return new J(s,Xe(e),or.Default)}else{let n=J.EMPTY_NODE;return gt(t,(r,i)=>{if(Hn(t,r)&&r.substring(0,1)!=="."){const s=Xe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Xe(e))}}xL(Xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL extends Yh{constructor(e){super(),this.indexPath_=e,$(!se(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?us(e.name,n.name):s}makePost(e,n){const r=Xe(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Ul);return new ie(Xi,e)}toString(){return cl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML extends Yh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?us(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=Xe(e);return new ie(n,r)}toString(){return".value"}}const LL=new ML;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){return{type:"value",snapshotNode:t}}function po(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function dl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(hl(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(po(n,r)):o.trackChildChange(dl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Be,(i,s)=>{n.hasChild(i)||r.trackChildChange(hl(i,s))}),n.isLeafNode()||n.forEachChild(Be,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(dl(i,s,o))}else r.trackChildChange(po(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.indexedFilter_=new a_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fl.getStartPost_(e),this.endPost_=fl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ie(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild(Be,(o,a)=>{s.matches(new ie(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new fl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ie(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,_)=>f(_,p)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const u=new ie(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,u);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(dl(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(hl(n,f));const S=a.updateImmediateChild(n,J.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(po(p.name,p.node)),S.updateImmediateChild(p.name,p.node)):S}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(hl(c.name,c.node)),s.trackChildChange(po(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fo}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new l_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jL(t){return t.loadsAllData()?new a_(t.getIndex()):t.hasLimit()?new FL(t):new fl(t)}function _0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Be?n="$priority":t.index_===LL?n="$value":t.index_===Hs?n="$key":($(t.index_ instanceof OL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Je(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Je(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Je(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Je(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function y0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends JC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=jl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Hc.getListenId_(e,r),a={};this.listens_[o]=a;const u=_0(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),eo(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Hc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=_0(e._queryParams),r=e._path.toString(),i=new Il;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+To(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ya(a.responseText)}catch{Ot("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Ot("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){return{value:null,children:new Map}}function uA(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,Gc());const i=t.children.get(r);e=Ce(e),uA(i,e,n)}}function $p(t,e,n){t.value!==null?n(e,t.value):zL(t,(r,i)=>{const s=new ve(e.toString()+"/"+r);$p(i,s,n)})}function zL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=10*1e3,WL=30*1e3,$L=5*60*1e3;class qL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new BL(e);const r=v0+(WL-v0)*Math.random();Ra(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gt(e,(i,s)=>{s>0&&Hn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ra(this.reportStats_.bind(this),Math.floor(Math.random()*2*$L))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var In;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(In||(In={}));function u_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function c_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function h_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=In.ACK_USER_WRITE,this.source=u_()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Kc(pe(),n,this.revert)}}else return $(le(this.path)===e,"operationForChild called for unrelated child."),new Kc(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.source=e,this.path=n,this.type=In.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new pl(this.source,pe()):new pl(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=In.OVERWRITE}operationForChild(e){return se(this.path)?new Ji(this.source,pe(),this.snap.getImmediateChild(e)):new Ji(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=In.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Ji(this.source,pe(),n.value):new mo(this.source,pe(),n)}else return $(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mo(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function GL(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(VL(o.childName,o.snapshotNode))}),ia(t,i,"child_removed",e,r,n),ia(t,i,"child_added",e,r,n),ia(t,i,"child_moved",s,r,n),ia(t,i,"child_changed",e,r,n),ia(t,i,"value",e,r,n),i}function ia(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>QL(t,a,u)),o.forEach(a=>{const u=KL(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function KL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function QL(t,e,n){if(e.childName==null||n.childName==null)throw Eo("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t,e){return{eventCache:t,serverCache:e}}function ka(t,e,n,r){return Xh(new li(e,n,r),t.serverCache)}function cA(t,e,n,r){return Xh(t.eventCache,new li(e,n,r))}function Qc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pf;const YL=()=>(pf||(pf=new zt(OM)),pf);class Se{constructor(e,n=YL()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return gt(e,(r,i)=>{n=n.set(new ve(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(se(e))return null;{const r=le(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:ze(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new Se(null)}}set(e,n){if(se(e))return new Se(n,this.children);{const r=le(e),s=(this.children.get(r)||new Se(null)).set(Ce(e),n),o=this.children.insert(r,s);return new Se(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Se(null):new Se(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(se(e))return n;{const r=le(e),s=(this.children.get(r)||new Se(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Se(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ze(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=le(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),ze(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=le(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),ze(n,i),r):new Se(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ze(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.writeTree_=e}static empty(){return new xn(new Se(null))}}function Pa(t,e,n){if(se(e))return new xn(new Se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=bt(i,e);return s=s.updateChild(o,n),new xn(t.writeTree_.set(i,s))}else{const i=new Se(n),s=t.writeTree_.setTree(e,i);return new xn(s)}}}function qp(t,e,n){let r=t;return gt(n,(i,s)=>{r=Pa(r,ze(e,i),s)}),r}function w0(t,e){if(se(e))return xn.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new xn(n)}}function Hp(t,e){return cs(t,e)!=null}function cs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function E0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(r,i)=>{e.push(new ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ie(r,i.value))}),e}function Zr(t,e){if(se(e))return t;{const n=cs(t,e);return n!=null?new xn(new Se(n)):new xn(t.writeTree_.subtree(e))}}function Gp(t){return t.writeTree_.isEmpty()}function go(t,e){return hA(pe(),t.writeTree_,e)}function hA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?($(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=hA(ze(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ze(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t,e){return mA(e,t)}function XL(t,e,n,r,i){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Pa(t.visibleWrites,e,n)),t.lastWriteId=r}function JL(t,e,n,r){$(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=qp(t.visibleWrites,e,n),t.lastWriteId=r}function ZL(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function e2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&t2(a,r.path)?i=!1:cn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return n2(t),!0;if(r.snap)t.visibleWrites=w0(t.visibleWrites,r.path);else{const a=r.children;gt(a,u=>{t.visibleWrites=w0(t.visibleWrites,ze(r.path,u))})}return!0}else return!1}function t2(t,e){if(t.snap)return cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&cn(ze(t.path,n),e))return!0;return!1}function n2(t){t.visibleWrites=dA(t.allWrites,r2,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function r2(t){return t.visible}function dA(t,e,n){let r=xn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)cn(n,o)?(a=bt(n,o),r=Pa(r,a,s.snap)):cn(o,n)&&(a=bt(o,n),r=Pa(r,pe(),s.snap.getChild(a)));else if(s.children){if(cn(n,o))a=bt(n,o),r=qp(r,a,s.children);else if(cn(o,n))if(a=bt(o,n),se(a))r=qp(r,pe(),s.children);else{const u=eo(s.children,le(a));if(u){const c=u.getChild(Ce(a));r=Pa(r,pe(),c)}}}else throw Eo("WriteRecord should have .snap or .children")}}return r}function fA(t,e,n,r,i){if(!r&&!i){const s=cs(t.visibleWrites,e);if(s!=null)return s;{const o=Zr(t.visibleWrites,e);if(Gp(o))return n;if(n==null&&!Hp(o,pe()))return null;{const a=n||J.EMPTY_NODE;return go(o,a)}}}else{const s=Zr(t.visibleWrites,e);if(!i&&Gp(s))return n;if(!i&&n==null&&!Hp(s,pe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(cn(c.path,e)||cn(e,c.path))},a=dA(t.allWrites,o,e),u=n||J.EMPTY_NODE;return go(a,u)}}}function i2(t,e,n){let r=J.EMPTY_NODE;const i=cs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Be,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Zr(t.visibleWrites,e);return n.forEachChild(Be,(o,a)=>{const u=go(Zr(s,new ve(o)),a);r=r.updateImmediateChild(o,u)}),E0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Zr(t.visibleWrites,e);return E0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function s2(t,e,n,r,i){$(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ze(e,n);if(Hp(t.visibleWrites,s))return null;{const o=Zr(t.visibleWrites,s);return Gp(o)?i.getChild(n):go(o,i.getChild(n))}}function o2(t,e,n,r){const i=ze(e,n),s=cs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Zr(t.visibleWrites,i);return go(o,r.getNode().getImmediateChild(n))}else return null}function a2(t,e){return cs(t.visibleWrites,e)}function l2(t,e,n,r,i,s,o){let a;const u=Zr(t.visibleWrites,e),c=cs(u,pe());if(c!=null)a=c;else if(n!=null)a=go(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=p.getNext();for(;_&&h.length<i;)f(_,r)!==0&&h.push(_),_=p.getNext();return h}else return[]}function u2(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function Yc(t,e,n,r){return fA(t.writeTree,t.treePath,e,n,r)}function d_(t,e){return i2(t.writeTree,t.treePath,e)}function T0(t,e,n,r){return s2(t.writeTree,t.treePath,e,n,r)}function Xc(t,e){return a2(t.writeTree,ze(t.treePath,e))}function c2(t,e,n,r,i,s){return l2(t.writeTree,t.treePath,e,n,r,i,s)}function f_(t,e,n){return o2(t.writeTree,t.treePath,e,n)}function pA(t,e){return mA(ze(t.treePath,e),t.writeTree)}function mA(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,dl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,hl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,po(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,dl(r,e.snapshotNode,i.oldSnap));else throw Eo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const gA=new d2;class p_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new li(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return f_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zi(this.viewCache_),s=c2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(t){return{filter:t}}function p2(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function m2(t,e,n,r,i){const s=new h2;let o,a;if(n.type===In.OVERWRITE){const c=n;c.source.fromUser?o=Kp(t,e,c.path,c.snap,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=Jc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===In.MERGE){const c=n;c.source.fromUser?o=_2(t,e,c.path,c.children,r,i,s):($(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Qp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===In.ACK_USER_WRITE){const c=n;c.revert?o=w2(t,e,c.path,r,i,s):o=y2(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===In.LISTEN_COMPLETE)o=v2(t,e,n.path,r,s);else throw Eo("Unknown operation type: "+n.type);const u=s.getChanges();return g2(e,o,u),{viewCache:o,changes:u}}function g2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Qc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(lA(Qc(e)))}}function _A(t,e,n,r,i,s){const o=e.eventCache;if(Xc(r,n)!=null)return e;{let a,u;if(se(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Zi(e),h=c instanceof J?c:J.EMPTY_NODE,f=d_(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Yc(r,Zi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=le(n);if(c===".priority"){$(ai(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=T0(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ce(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const p=T0(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(c).updateChild(h,p):f=o.getNode().getImmediateChild(c)}else f=f_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return ka(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Jc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const _=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),_,null)}else{const _=le(n);if(!u.isCompleteForPath(n)&&ai(n)>1)return e;const v=Ce(n),N=u.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=h.updatePriority(u.getNode(),N):c=h.updateChild(u.getNode(),_,N,v,gA,null)}const f=cA(e,c,u.isFullyInitialized()||se(n),h.filtersNodes()),p=new p_(i,f,s);return _A(t,f,n,i,p,a)}function Kp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new p_(i,e,s);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=ka(e,c,!0,t.filter.filtersNodes());else{const f=le(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=ka(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Ce(n),_=a.getNode().getImmediateChild(f);let v;if(se(p))v=r;else{const S=h.getCompleteChild(f);S!=null?i_(p)===".priority"&&S.getChild(eA(p)).isEmpty()?v=S:v=S.updateChild(p,r):v=J.EMPTY_NODE}if(_.equals(v))u=e;else{const S=t.filter.updateChild(a.getNode(),f,v,p,h,o);u=ka(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function I0(t,e){return t.eventCache.isCompleteForChild(e)}function _2(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=ze(n,u);I0(e,le(h))&&(a=Kp(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=ze(n,u);I0(e,le(h))||(a=Kp(t,a,h,c,i,s,o))}),a}function S0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Qp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;se(n)?c=r:c=new Se(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),v=S0(t,_,p);u=Jc(t,u,new ve(f),v,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const _=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!_){const v=e.serverCache.getNode().getImmediateChild(f),S=S0(t,v,p);u=Jc(t,u,new ve(f),S,i,s,o,a)}}),u}function y2(t,e,n,r,i,s,o){if(Xc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(se(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Jc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(se(n)){let c=new Se(null);return u.getNode().forEachChild(Hs,(h,f)=>{c=c.set(new ve(h),f)}),Qp(t,e,n,c,i,s,a,o)}else return e}else{let c=new Se(null);return r.foreach((h,f)=>{const p=ze(n,h);u.isCompleteForPath(p)&&(c=c.set(h,u.getNode().getChild(p)))}),Qp(t,e,n,c,i,s,a,o)}}function v2(t,e,n,r,i){const s=e.serverCache,o=cA(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return _A(t,o,n,r,gA,i)}function w2(t,e,n,r,i,s){let o;if(Xc(r,n)!=null)return e;{const a=new p_(r,e,i),u=e.eventCache.getNode();let c;if(se(n)||le(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Yc(r,Zi(e));else{const f=e.serverCache.getNode();$(f instanceof J,"serverChildren would be complete if leaf node"),h=d_(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=le(n);let f=f_(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Ce(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,J.EMPTY_NODE,Ce(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yc(r,Zi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Xc(r,pe())!=null,ka(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new a_(r.getIndex()),s=jL(r);this.processor_=f2(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),h=new li(u,o.isFullyInitialized(),i.filtersNodes()),f=new li(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Xh(f,h),this.eventGenerator_=new HL(this.query_)}get query(){return this.query_}}function T2(t){return t.viewCache_.serverCache.getNode()}function I2(t){return Qc(t.viewCache_)}function S2(t,e){const n=Zi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function C0(t){return t.eventRegistrations_.length===0}function C2(t,e){t.eventRegistrations_.push(e)}function A0(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function x0(t,e,n,r){e.type===In.MERGE&&e.source.queryId!==null&&($(Zi(t.viewCache_),"We should always have a full cache before handling merges"),$(Qc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=m2(t.processor_,i,e,n,r);return p2(t.processor_,s.viewCache),$(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,yA(t,s.changes,s.viewCache.eventCache.getNode(),null)}function A2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(s,o)=>{r.push(po(s,o))}),n.isFullyInitialized()&&r.push(lA(n.getNode())),yA(t,r,n.getNode(),e)}function yA(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return GL(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;class vA{constructor(){this.views=new Map}}function x2(t){$(!Zc,"__referenceConstructor has already been defined"),Zc=t}function R2(){return $(Zc,"Reference.ts has not been loaded"),Zc}function k2(t){return t.views.size===0}function m_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return $(s!=null,"SyncTree gave us an op for an invalid query."),x0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(x0(o,e,n,r));return s}}function wA(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Yc(n,i?r:null),u=!1;a?u=!0:r instanceof J?(a=d_(n,r),u=!1):(a=J.EMPTY_NODE,u=!1);const c=Xh(new li(a,u,!1),new li(r,i,!1));return new E2(e,c)}return o}function P2(t,e,n,r,i,s){const o=wA(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),C2(o,n),A2(o,n)}function N2(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ui(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(A0(c,n,r)),C0(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(A0(u,n,r)),C0(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!ui(t)&&s.push(new(R2())(e._repo,e._path)),{removed:s,events:o}}function EA(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ei(t,e){let n=null;for(const r of t.views.values())n=n||S2(r,e);return n}function TA(t,e){if(e._queryParams.loadsAllData())return Zh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function IA(t,e){return TA(t,e)!=null}function ui(t){return Zh(t)!=null}function Zh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;function b2(t){$(!eh,"__referenceConstructor has already been defined"),eh=t}function D2(){return $(eh,"Reference.ts has not been loaded"),eh}let O2=1;class R0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=u2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function SA(t,e,n,r,i){return XL(t.pendingWriteTree_,e,n,r,i),i?No(t,new Ji(u_(),e,n)):[]}function M2(t,e,n,r){JL(t.pendingWriteTree_,e,n,r);const i=Se.fromObject(n);return No(t,new mo(u_(),e,i))}function zr(t,e,n=!1){const r=ZL(t.pendingWriteTree_,e);if(e2(t.pendingWriteTree_,e)){let s=new Se(null);return r.snap!=null?s=s.set(pe(),!0):gt(r.children,o=>{s=s.set(new ve(o),!0)}),No(t,new Kc(r.path,s,n))}else return[]}function zl(t,e,n){return No(t,new Ji(c_(),e,n))}function L2(t,e,n){const r=Se.fromObject(n);return No(t,new mo(c_(),e,r))}function V2(t,e){return No(t,new pl(c_(),e))}function F2(t,e,n){const r=__(t,n);if(r){const i=y_(r),s=i.path,o=i.queryId,a=bt(s,e),u=new pl(h_(o),a);return v_(t,s,u)}else return[]}function CA(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||IA(o,e))){const u=N2(o,e,n,r);k2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,_)=>ui(_));if(h&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const _=B2(p);for(let v=0;v<_.length;++v){const S=_[v],N=S.query,C=kA(t,S);t.listenProvider_.startListening(Na(N),ml(t,N),C.hashFn,C.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Na(e),null):c.forEach(p=>{const _=t.queryToTagMap.get(ed(p));t.listenProvider_.stopListening(Na(p),_)}))}W2(t,c)}return a}function AA(t,e,n,r){const i=__(t,r);if(i!=null){const s=y_(i),o=s.path,a=s.queryId,u=bt(o,e),c=new Ji(h_(a),u,n);return v_(t,o,c)}else return[]}function j2(t,e,n,r){const i=__(t,r);if(i){const s=y_(i),o=s.path,a=s.queryId,u=bt(o,e),c=Se.fromObject(n),h=new mo(h_(a),u,c);return v_(t,o,h)}else return[]}function U2(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const v=bt(p,i);s=s||ei(_,v),o=o||ui(_)});let a=t.syncPointTree_.get(i);a?(o=o||ui(a),s=s||ei(a,pe())):(a=new vA,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const S=ei(v,pe());S&&(s=s.updateImmediateChild(_,S))}));const c=IA(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=ed(e);$(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=$2();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const h=Jh(t.pendingWriteTree_,i);let f=P2(a,e,n,h,s,u);if(!c&&!o&&!r){const p=TA(a,e);f=f.concat(q2(t,e,p))}return f}function g_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=bt(o,e),c=ei(a,u);if(c)return c});return fA(i,e,s,n,!0)}function z2(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=bt(c,n);r=r||ei(h,f)});let i=t.syncPointTree_.get(n);i?r=r||ei(i,pe()):(i=new vA,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new li(r,!0,!1):null,a=Jh(t.pendingWriteTree_,e._path),u=wA(i,e,a,s?o.getNode():J.EMPTY_NODE,s);return I2(u)}function No(t,e){return xA(e,t.syncPointTree_,null,Jh(t.pendingWriteTree_,pe()))}function xA(t,e,n,r){if(se(t.path))return RA(t,e,n,r);{const i=e.get(pe());n==null&&i!=null&&(n=ei(i,pe()));let s=[];const o=le(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=pA(r,o);s=s.concat(xA(a,u,c,h))}return i&&(s=s.concat(m_(i,t,r,n))),s}}function RA(t,e,n,r){const i=e.get(pe());n==null&&i!=null&&(n=ei(i,pe()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=pA(r,o),h=t.operationForChild(o);h&&(s=s.concat(RA(h,a,u,c)))}),i&&(s=s.concat(m_(i,t,r,n))),s}function kA(t,e){const n=e.query,r=ml(t,n);return{hashFn:()=>(T2(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?F2(t,n._path,r):V2(t,n._path);{const s=VM(i,n);return CA(t,n,null,s)}}}}function ml(t,e){const n=ed(e);return t.queryToTagMap.get(n)}function ed(t){return t._path.toString()+"$"+t._queryIdentifier}function __(t,e){return t.tagToQueryMap.get(e)}function y_(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function v_(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const i=Jh(t.pendingWriteTree_,e);return m_(r,n,i,null)}function B2(t){return t.fold((e,n,r)=>{if(n&&ui(n))return[Zh(n)];{let i=[];return n&&(i=EA(n)),gt(r,(s,o)=>{i=i.concat(o)}),i}})}function Na(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(D2())(t._repo,t._path):t}function W2(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ed(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function $2(){return O2++}function q2(t,e,n){const r=e._path,i=ml(t,e),s=kA(t,n),o=t.listenProvider_.startListening(Na(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)$(!ui(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!se(c)&&h&&ui(h))return[Zh(h).query];{let p=[];return h&&(p=p.concat(EA(h).map(_=>_.query))),gt(f,(_,v)=>{p=p.concat(v)}),p}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(Na(h),ml(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new w_(n)}node(){return this.node_}}class E_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new E_(this.syncTree_,n)}node(){return g_(this.syncTree_,this.path_)}}const H2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},k0=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return G2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return K2(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},G2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},K2=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const i=e.node();if($(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},PA=function(t,e,n,r){return T_(e,new E_(n,t),r)},NA=function(t,e,n){return T_(t,new w_(e),n)};function T_(t,e,n){const r=t.getPriority().val(),i=k0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=k0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,Xe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild(Be,(a,u)=>{const c=T_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function S_(t,e){let n=e instanceof ve?e:new ve(e),r=t,i=le(n);for(;i!==null;){const s=eo(r.node.children,i)||{children:{},childCount:0};r=new I_(i,r,s),n=Ce(n),i=le(n)}return r}function bo(t){return t.node.value}function bA(t,e){t.node.value=e,Yp(t)}function DA(t){return t.node.childCount>0}function Q2(t){return bo(t)===void 0&&!DA(t)}function td(t,e){gt(t.node.children,(n,r)=>{e(new I_(n,t,r))})}function OA(t,e,n,r){n&&e(t),td(t,i=>{OA(i,e,!0)})}function Y2(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Bl(t){return new ve(t.parent===null?t.name:Bl(t.parent)+"/"+t.name)}function Yp(t){t.parent!==null&&X2(t.parent,t.name,t)}function X2(t,e,n){const r=Q2(n),i=Hn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Yp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Yp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=/[\[\].#$\/\u0000-\u001F\u007F]/,Z2=/[\[\].#$\u0000-\u001F\u007F]/,mf=10*1024*1024,C_=function(t){return typeof t=="string"&&t.length!==0&&!J2.test(t)},MA=function(t){return typeof t=="string"&&t.length!==0&&!Z2.test(t)},eV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),MA(t)},tV=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Zg(t)||t&&typeof t=="object"&&Hn(t,".sv")},nV=function(t,e,n,r){nd(wh(t,"value"),e,n)},nd=function(t,e,n){const r=n instanceof ve?new _L(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ci(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ci(r)+" with contents = "+e.toString());if(Zg(e))throw new Error(t+"contains "+e.toString()+" "+Ci(r));if(typeof e=="string"&&e.length>mf/3&&Eh(e)>mf)throw new Error(t+"contains a string greater than "+mf+" utf8 bytes "+Ci(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!C_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ci(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yL(r,o),nd(t,a,r),vL(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ci(r)+" in addition to actual children.")}},rV=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=cl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!C_(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gL);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&cn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},iV=function(t,e,n,r){const i=wh(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];gt(e,(o,a)=>{const u=new ve(o);if(nd(i,a,ze(n,u)),i_(u)===".priority"&&!tV(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),rV(i,s)},LA=function(t,e,n,r){if(!MA(n))throw new Error(wh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),LA(t,e,n)},VA=function(t,e){if(le(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},oV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!C_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eV(n))throw new Error(wh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function A_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!tA(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function mn(t,e,n){A_(t,n),lV(t,r=>cn(r,e)||cn(e,r))}function lV(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(uV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();xa&&ht("event: "+n.toString()),Po(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV="repo_interrupt",hV=25;class dV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gc(),this.transactionQueueTree_=new I_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fV(t,e,n){if(t.stats_=n_(t.repoInfo_),t.forceRestClient_||zM())t.server_=new Hc(t.repoInfo_,(r,i,s,o)=>{P0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>N0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ur(t.repoInfo_,e,(r,i,s,o)=>{P0(t,r,i,s,o)},r=>{N0(t,r)},r=>{mV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=HM(t.repoInfo_,()=>new qL(t.stats_,t.server_)),t.infoData_=new UL,t.infoSyncTree_=new R0({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=zl(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),x_(t,"connected",!1),t.serverSyncTree_=new R0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);mn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function pV(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rd(t){return H2({timestamp:pV(t)})}function P0(t,e,n,r,i){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=Rc(n,c=>Xe(c));o=j2(t.serverSyncTree_,s,u,i)}else{const u=Xe(n);o=AA(t.serverSyncTree_,s,u,i)}else if(r){const u=Rc(n,c=>Xe(c));o=L2(t.serverSyncTree_,s,u)}else{const u=Xe(n);o=zl(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=_o(t,s)),mn(t.eventQueue_,a,o)}function N0(t,e){x_(t,"connected",e),e===!1&&vV(t)}function mV(t,e){gt(e,(n,r)=>{x_(t,n,r)})}function x_(t,e,n){const r=new ve("/.info/"+e),i=Xe(n);t.infoData_.updateSnapshot(r,i);const s=zl(t.infoSyncTree_,r,i);mn(t.eventQueue_,r,s)}function R_(t){return t.nextWriteId_++}function gV(t,e,n){const r=z2(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Xe(i).withIndex(e._queryParams.getIndex());U2(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=zl(t.serverSyncTree_,e._path,s);else{const a=ml(t.serverSyncTree_,e);o=AA(t.serverSyncTree_,e._path,s,a)}return mn(t.eventQueue_,e._path,o),CA(t.serverSyncTree_,e,n,null,!0),s},i=>(Wl(t,"get for query "+Je(e)+" failed: "+i),Promise.reject(new Error(i))))}function _V(t,e,n,r,i){Wl(t,"set",{path:e.toString(),value:n,priority:r});const s=rd(t),o=Xe(n,r),a=g_(t.serverSyncTree_,e),u=NA(o,a,s),c=R_(t),h=SA(t.serverSyncTree_,e,u,c,!0);A_(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const v=p==="ok";v||Ot("set at "+e+" failed: "+p);const S=zr(t.serverSyncTree_,c,!v);mn(t.eventQueue_,e,S),Xp(t,i,p,_)});const f=P_(t,e);_o(t,f),mn(t.eventQueue_,f,[])}function yV(t,e,n,r){Wl(t,"update",{path:e.toString(),value:n});let i=!0;const s=rd(t),o={};if(gt(n,(a,u)=>{i=!1,o[a]=PA(ze(e,a),Xe(u),t.serverSyncTree_,s)}),i)ht("update() called with empty data.  Don't do anything."),Xp(t,r,"ok",void 0);else{const a=R_(t),u=M2(t.serverSyncTree_,e,o,a);A_(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Ot("update at "+e+" failed: "+c);const p=zr(t.serverSyncTree_,a,!f),_=p.length>0?_o(t,e):e;mn(t.eventQueue_,_,p),Xp(t,r,c,h)}),gt(n,c=>{const h=P_(t,ze(e,c));_o(t,h)}),mn(t.eventQueue_,e,[])}}function vV(t){Wl(t,"onDisconnectEvents");const e=rd(t),n=Gc();$p(t.onDisconnect_,pe(),(i,s)=>{const o=PA(i,s,t.serverSyncTree_,e);uA(n,i,o)});let r=[];$p(n,pe(),(i,s)=>{r=r.concat(zl(t.serverSyncTree_,i,s));const o=P_(t,i);_o(t,o)}),t.onDisconnect_=Gc(),mn(t.eventQueue_,pe(),r)}function wV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cV)}function Wl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ht(n,...e)}function Xp(t,e,n,r){e&&Po(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function FA(t,e,n){return g_(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function k_(t,e=t.transactionQueueTree_){if(e||id(t,e),bo(e)){const n=UA(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&EV(t,Bl(e),n)}else DA(e)&&td(e,n=>{k_(t,n)})}function EV(t,e,n){const r=n.map(c=>c.currentWriteId),i=FA(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];$(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=bt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Wl(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(zr(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();id(t,S_(t.transactionQueueTree_,e)),k_(t,t.transactionQueueTree_),mn(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)Po(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ot("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}_o(t,e)}},o)}function _o(t,e){const n=jA(t,e),r=Bl(n),i=UA(t,n);return TV(t,i,r),r}function TV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=bt(n,u.path);let h=!1,f;if($(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(zr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=hV)h=!0,f="maxretry",i=i.concat(zr(t.serverSyncTree_,u.currentWriteId,!0));else{const p=FA(t,u.path,o);u.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){nd("transaction failed: Data returned ",_,u.path);let v=Xe(_);typeof _=="object"&&_!=null&&Hn(_,".priority")||(v=v.updatePriority(p.getPriority()));const N=u.currentWriteId,C=rd(t),E=NA(v,p,C);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=E,u.currentWriteId=R_(t),o.splice(o.indexOf(N),1),i=i.concat(SA(t.serverSyncTree_,u.path,E,u.currentWriteId,u.applyLocally)),i=i.concat(zr(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",i=i.concat(zr(t.serverSyncTree_,u.currentWriteId,!0))}mn(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}id(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Po(r[a]);k_(t,t.transactionQueueTree_)}function jA(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&bo(r)===void 0;)r=S_(r,n),e=Ce(e),n=le(e);return r}function UA(t,e){const n=[];return zA(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zA(t,e,n){const r=bo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);td(e,i=>{zA(t,i,n)})}function id(t,e){const n=bo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,bA(e,n.length>0?n:void 0)}td(e,r=>{id(t,r)})}function P_(t,e){const n=Bl(jA(t,e)),r=S_(t.transactionQueueTree_,e);return Y2(r,i=>{gf(t,i)}),gf(t,r),OA(r,i=>{gf(t,i)}),n}function gf(t,e){const n=bo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?bA(e,void 0):n.length=s+1,mn(t.eventQueue_,Bl(e),i);for(let o=0;o<r.length;o++)Po(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function SV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const b0=function(t,e){const n=CV(t),r=n.namespace;n.domain==="firebase.com"&&vr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&vr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ve(n.pathString)}},CV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=IV(t.substring(h,f)));const p=SV(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class xV{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class N_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:i_(this._path)}get ref(){return new Tr(this._repo,this._path)}get _queryIdentifier(){const e=y0(this._queryParams),n=e_(e);return n==="{}"?"default":n}get _queryObject(){return y0(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof N_))return!1;const n=this._repo===e._repo,r=tA(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mL(this._path)}}class Tr extends N_{constructor(e,n){super(e,n,new l_,!1)}get parent(){const e=eA(this._path);return e===null?null:new Tr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=Jp(this.ref,e);return new gl(this._node.getChild(n),r,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new gl(i,Jp(this.ref,r),Be)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function es(t,e){return t=Te(t),t._checkNotDeleted("ref"),e!==void 0?Jp(t._root,e):t._root}function Jp(t,e){return t=Te(t),le(t._path)===null?sV("child","path",e):LA("child","path",e),new Tr(t._repo,ze(t._path,e))}function kV(t){return VA("remove",t._path),th(t,null)}function th(t,e){t=Te(t),VA("set",t._path),nV("set",e,t._path);const n=new Il;return _V(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function b_(t,e){iV("update",e,t._path);const n=new Il;return yV(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function PV(t){t=Te(t);const e=new RV(()=>{}),n=new D_(e);return gV(t._repo,t,n).then(r=>new gl(r,new Tr(t._repo,t._path),t._queryParams.getIndex()))}class D_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new AV("value",this,new gl(e.snapshotNode,new Tr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xV(this,e,n):null}matches(e){return e instanceof D_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}x2(Tr);b2(Tr);/**
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
 */const NV="FIREBASE_DATABASE_EMULATOR_HOST",Zp={};let bV=!1;function DV(t,e,n,r){t.repoInfo_=new qC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function OV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||vr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=b0(s,i),a=o.repoInfo,u;typeof process<"u"&&e0&&(u=e0[NV]),u?(s=`http://${u}?ns=${a.namespace}`,o=b0(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new WM(t.name,t.options,e);oV("Invalid Firebase Database URL",o),se(o.path)||vr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=LV(a,t,c,new BM(t.name,n));return new VV(h,t)}function MV(t,e){const n=Zp[e];(!n||n[t.key]!==t)&&vr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wV(t),delete n[t.key]}function LV(t,e,n,r){let i=Zp[e.name];i||(i={},Zp[e.name]=i);let s=i[t.toURLString()];return s&&vr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new dV(t,bV,n,r),i[t.toURLString()]=s,s}class VV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tr(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vr("Cannot call "+e+" on a deleted database.")}}function FV(t=Jm(),e){const n=Ih(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=hI("database");r&&jV(n,...r)}return n}function jV(t,e,n,r={}){t=Te(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&vr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&vr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new tc(tc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:pI(r.mockUserToken,t.app.options.projectId);s=new tc(o)}DV(i,e,n,s)}/**
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
 */function UV(t){AM(rs),Bi(new ri("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return OV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),jn(t0,n0,t),jn(t0,n0,"esm2017")}ur.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ur.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};UV();const zV={apiKey:"AIzaSyDWqss4olY-yE58OpUd9FsCAgTuOrHUyfc",authDomain:"mathgame-prod.firebaseapp.com",projectId:"mathgame-prod",storageBucket:"mathgame-prod.firebasestorage.app",messagingSenderId:"823268749100",appId:"1:823268749100:web:88747dc6fd11cfd90a0689",databaseURL:"https://mathgame-prod-default-rtdb.asia-southeast1.firebasedatabase.app/"},_f=10,sd=vP().length?getApp():vI(zV);console.log(`Firebase initialized with project ID: ${sd.options.projectId}`);const yf=xb(sd),_e=uC(sd);let em=null;{try{em=FV(sd),b_(es(em,"s/connTest"),{next:-1}).then(()=>{console.log("Successfully sned next -1")}).catch(t=>{console.log("Failed to send next -1 to connTest"+t)})}catch(t){console.error(t),console.log("Error while initializing rtbd")}console.log("Running in production mode, connected to real Firebase services")}const BV=em,WV="SFE4dxPecTblEj3ho8RVjVf8niZ2,Zr9corg0elT4noDaokj1KJxm2gf1".split(",").map(t=>t.trim())??[],BA=W.createContext(null);function $V({children:t}){const[e,n]=W.useState(void 0),[r,i]=W.useState(!1);W.useEffect(()=>mN(yf,u=>{n(u??null),i(u?WV.includes(u.uid):!1)}),[]);const s=()=>LN(yf,new Jn),o=()=>gN(yf);return g.jsx(BA.Provider,{value:{user:e,isAdmin:r,signIn:s,logOut:o},children:t})}const $l=()=>W.useContext(BA);function qV(){const{user:t,logOut:e}=$l();return g.jsx("div",{className:"center-wrap",children:g.jsxs("div",{className:"card",style:{textAlign:"center",padding:"2.5rem"},children:[g.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🚫"}),g.jsx("h2",{style:{fontFamily:"Fredoka One",fontSize:"1.5rem",marginBottom:"0.5rem"},children:"Access Denied"}),g.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:"0.5rem"},children:[t==null?void 0:t.email," is not authorised to access this panel."]}),g.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",marginBottom:"2rem"},children:"Contact the app owner if you think this is a mistake."}),g.jsx("button",{className:"btn btn-outline btn-full",onClick:e,children:"Sign out"})]})})}const HV="modulepreload",GV=function(t,e){return new URL(t,e).href},D0={},KV=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=GV(c,r),c in D0)return;D0[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!r)for(let v=o.length-1;v>=0;v--){const S=o[v];if(S.href===c&&(!h||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":HV,h||(_.as="script"),_.crossOrigin="",_.href=c,u&&_.setAttribute("nonce",u),document.head.appendChild(_),h)return new Promise((v,S)=>{_.addEventListener("load",v),_.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},_l=9999999;async function WA(){return(await Yi(pn(_e,"students"))).docs.map(e=>({uid:e.id,...e.data()}))}async function O0(t){const e=pn(_e,"scores",t,"trials");return(await AC(e)).data().count}function QV(t,e=10,n){const r=co(pn(_e,"scores",t,"trials"),ho("timestamp","desc"),ll(e));return Ll(r,i=>{const s=i.docs.map(a=>({id:a.id,...a.data()})),o=i.docs[i.docs.length-1]??null;n({trials:s,lastDoc:o})})}async function YV(t,e=10){const{query:n,collection:r,orderBy:i,limit:s,getDocs:o}=await KV(async()=>{const{query:c,collection:h,orderBy:f,limit:p,getDocs:_}=await Promise.resolve().then(()=>CM);return{query:c,collection:h,orderBy:f,limit:p,getDocs:_}},void 0,import.meta.url),a=n(r(_e,"scores",t,"trials"),i("timestamp","desc"),s(e));return(await o(a)).docs.map(c=>({id:c.id,...c.data()})).reverse()}async function $A(t,e=10,n=null){const r=pn(_e,"scores",t,"trials"),i=[ho("timestamp","desc"),ll(e)];n&&i.push(Kg(n));const s=co(r,...i),o=await Yi(s),a=o.docs.map(c=>({id:c.id,...c.data()})),u=o.docs[o.docs.length-1]??null;return{trials:a,lastDoc:u}}async function qA(t){const e=et(_e,"scores",t,"stats","global"),n=et(_e,"scores",t,"stats","groups"),[r,i]=await Promise.all([Qi(e),Qi(n)]);return{global:r.exists()?r.data():null,groups:i.exists()?i.data():{}}}function XV(t,e){return Ll(et(_e,"challenges",t),n=>{n.exists()&&e({id:n.id,...n.data()})})}function JV(t,e){return Ll(pn(_e,"challenges",t,"participants"),n=>{e(n.docs.map(r=>({uid:r.id,...r.data()})))})}function ZV({uid:t}){var x;const[e,n]=W.useState(null),[r,i]=W.useState([]);if(W.useEffect(()=>{qA(t).then(n),$A(t,20,null).then(({trials:k})=>{i([...k].reverse())})},[t]),e===null)return g.jsx(sF,{});if(!e.global)return g.jsx(oF,{});const s=e.global,o=Object.values(e.groups||{}).sort((k,O)=>k.digits!==O.digits?k.digits-O.digits:k.count-O.count),a=s.totalGames||0,u=s.totalCorrect||0,c=s.totalScore||0,h=s.accuracy?Math.round(s.accuracy):0,f=s.avgScore?Math.round(s.avgScore):0,p=s.maxScore??0,_=s.bestStreak??0,v=s.currentStreak??0,S=s.totalGames?Math.round(s.totalTime/s.totalGames):0,N=(x=s.upd_at)!=null&&x.toDate?HA(s.upd_at.toDate()):"—",C=s.minScore?s.minScore===_l||s.minScore===0?"-":s.minScore:"-",E=s.minTime?s.minTime===_l||s.minTime===0?"-":s.minTime+"s":"-";return g.jsxs("div",{className:"flex flex-col",style:{gap:20},children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[g.jsx(eF,{pct:h,correct:u,total:a}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,alignContent:"start"},children:[g.jsx(_s,{label:"Total score",value:`${c}🪙`,color:"var(--purple-dark)",icon:"🏆"}),g.jsx(_s,{label:"Avg score",value:`${f}🪙`,color:"var(--blue-dark)",icon:"📊"}),g.jsx(_s,{label:"Best score",value:`${p}🪙`,color:"var(--green-dark)",icon:"⭐"}),g.jsx(_s,{label:"Best streak",value:`${_}🔥`,color:"var(--yellow-dark)",icon:""}),g.jsx(_s,{label:"Avg time",value:`${S}s`,color:"var(--blue)",icon:"⏱"}),g.jsx(_s,{label:"Games played",value:a,color:"var(--text)",icon:"🎮"})]})]}),g.jsxs("a",{href:"ScoringGuide.html",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px",background:"linear-gradient(135deg, #fff8e0, #ffefc0)",border:"2px solid #ffe090",borderRadius:14,textDecoration:"none",color:"var(--yellow-dark)",fontWeight:800,fontSize:"0.9rem",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:k=>{k.currentTarget.style.transform="translateY(-2px)",k.currentTarget.style.boxShadow="0 4px 16px rgba(249,168,37,0.25)"},onMouseLeave:k=>{k.currentTarget.style.transform="",k.currentTarget.style.boxShadow=""},children:[g.jsx("span",{children:"🪙 How is my score calculated? See the scoring guide"}),g.jsx("span",{style:{fontSize:"1.1rem"},children:"→"})]}),r.length>=3&&g.jsx(vf,{title:"Score trend (last 20 games)",children:g.jsx(tF,{trials:r})}),o.length>=2&&g.jsx(vf,{title:"Avg score by difficulty",children:g.jsx(nF,{groups:o})}),o.length>=1&&g.jsx(vf,{title:"Accuracy by difficulty",children:g.jsx(rF,{groups:o})}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[g.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}}),g.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontWeight:700,whiteSpace:"nowrap"},children:"RAW BREAKDOWN"}),g.jsx("div",{style:{flex:1,height:1,background:"#e8e8e8"}})]}),g.jsx(L0,{children:"Overall stats"}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,background:"#f0f8ff",borderRadius:12,padding:14},children:[g.jsx(Ne,{label:"Total games",value:a}),g.jsx(Ne,{label:"Accuracy",value:`${h}%`,color:h>=70?"var(--green-dark)":"var(--red)"}),g.jsx(Ne,{label:"Best streak",value:_,color:"var(--yellow-dark)"}),g.jsx(Ne,{label:"Current Streak",value:v,color:"var(--blue-dark)"}),g.jsx(Ne,{label:"Total score",value:c,color:"var(--purple-dark)"}),g.jsx(Ne,{label:"Avg score",value:f,color:"var(--blue-dark)"}),g.jsx(Ne,{label:"Best score",value:p,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Worst score",value:C,color:"var(--red)"}),g.jsx(Ne,{label:"Last Played",value:N}),g.jsx(Ne,{label:"Total time",value:`${Math.round(s.totalTime||0)}s`,color:"var(--purple-dark)"}),g.jsx(Ne,{label:"Avg time",value:`${S}s`,color:"var(--blue-dark)"}),g.jsx(Ne,{label:"Best time",value:E,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Worst time",value:`${s.maxTime??0}s`,color:"var(--red)"})]}),g.jsx(L0,{children:"Breakdown by difficulty"}),g.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:o.map(k=>g.jsx(iF,{g:k},`${k.digits}-${k.count}`))})]})}function eF({pct:t,correct:e,total:n}){const o=2*Math.PI*44,a=o*(t/100),u=t>=70?"var(--green)":t>=40?"var(--yellow-dark)":"var(--red)";return g.jsxs("div",{style:{background:"#f8f9fa",borderRadius:14,padding:14,display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[g.jsx("span",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1},children:"Accuracy"}),g.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",children:[g.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:"#e8e8e8",strokeWidth:"12"}),g.jsx("circle",{cx:60,cy:60,r:44,fill:"none",stroke:u,strokeWidth:"12",strokeDasharray:`${a} ${o}`,strokeLinecap:"round",transform:"rotate(-90 60 60)",style:{transition:"stroke-dasharray 0.8s ease"}}),g.jsxs("text",{x:60,y:54,textAnchor:"middle",fontFamily:"Fredoka One, cursive",fontSize:"22",fill:u,children:[t,"%"]}),g.jsxs("text",{x:60,y:72,textAnchor:"middle",fontFamily:"Nunito, sans-serif",fontSize:"10",fill:"#999",fontWeight:"700",children:[e,"/",n]})]})]})}function tF({trials:t}){const i=t.map(p=>p.score??0),s=Math.max(...i,1),o=Math.min(...i),a=s-o||1,u=i.length,c=i.map((p,_)=>{const v=10+_/(u-1)*300,S=70-(p-o)/a*(80-10*2);return[v,S]}),h="M "+c.map(p=>p.join(",")).join(" L "),f=h+` L ${c[c.length-1][0]},80 L ${c[0][0]},80 Z`;return g.jsxs("svg",{width:"100%",viewBox:"0 0 320 80",preserveAspectRatio:"none",style:{display:"block"},children:[g.jsx("defs",{children:g.jsxs("linearGradient",{id:"spark-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[g.jsx("stop",{offset:"0%",stopColor:"#4a9eda",stopOpacity:"0.25"}),g.jsx("stop",{offset:"100%",stopColor:"#4a9eda",stopOpacity:"0.02"})]})}),g.jsx("path",{d:f,fill:"url(#spark-grad)"}),g.jsx("path",{d:h,fill:"none",stroke:"#4a9eda",strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"}),c.map(([p,_],v)=>g.jsx("circle",{cx:p,cy:_,r:"4",fill:t[v].isCorrect?"var(--green)":"var(--red)",stroke:"white",strokeWidth:"1.5"},v)),g.jsx("text",{x:10,y:78,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:o}),g.jsx("text",{x:10,y:13,fontSize:"9",fill:"#bbb",fontFamily:"Nunito,sans-serif",children:s})]})}function nF({groups:t}){const i=Math.min(40,300/t.length-8),s=Math.max(...t.map(o=>o.avgScore||0),1);return g.jsx("svg",{width:"100%",viewBox:"0 0 320 100",style:{display:"block",overflow:"visible"},children:t.map((o,a)=>{const u=10+a*(300/t.length)+(300/t.length-i)/2,h=(o.avgScore||0)/s*70,f=80-h,p=["#4a9eda","#5cbf6a","#9c6fe4","#ffd54f"][a%4],_=`${o.digits}d·${o.count}n`;return g.jsxs("g",{children:[g.jsx("rect",{x:u,y:f,width:i,height:h,rx:"5",fill:p,opacity:"0.85"}),g.jsx("text",{x:u+i/2,y:f-4,textAnchor:"middle",fontSize:"10",fontFamily:"Fredoka One,cursive",fill:p,children:Number(o.avgScore||0).toFixed(1)}),g.jsx("text",{x:u+i/2,y:96,textAnchor:"middle",fontSize:"8.5",fontFamily:"Nunito,sans-serif",fill:"#888",fontWeight:"700",children:_})]},a)})})}function rF({groups:t}){const n=t.length*32+10,r=80;return g.jsx("svg",{width:"100%",viewBox:`0 0 320 ${n}`,style:{display:"block"},children:t.map((i,s)=>{const o=i.accuracy?Math.round(i.accuracy):0,a=(320-r-40)*o/100,u=s*32+6,c=o>=70?"var(--green)":o>=40?"var(--yellow-dark)":"var(--red)",h=`${i.digits}d · ${i.count}n`;return g.jsxs("g",{children:[g.jsx("text",{x:0,y:u+16,fontSize:"10",fontFamily:"Nunito,sans-serif",fontWeight:"700",fill:"#555",children:h}),g.jsx("rect",{x:r,y:u+4,width:320-r-40,height:18,rx:"9",fill:"#ececec"}),g.jsx("rect",{x:r,y:u+4,width:Math.max(a,0),height:18,rx:"9",fill:c,opacity:"0.85"}),g.jsxs("text",{x:288,y:u+16,fontSize:"10",fontFamily:"Fredoka One,cursive",fill:c,fontWeight:"bold",children:[o,"%"]})]},s)})})}function iF({g:t}){var f;const e=t.totalCorrect||0,n=Math.round(e/t.totalGames*100),r=Math.round(t.totalScore/t.totalGames),i=Math.round(t.totalTime/t.totalGames),s=t.minTime===_l||t.minTime===0?"-":t.minTime+"s",o=t.minScore===_l||t.minScore===0?"-":t.minScore,a=t.maxScore??0,u=t.bstr??"-",c=t.cstr??"-",h=(f=t.upd_at)!=null&&f.toDate?HA(t.upd_at.toDate()):"—";return g.jsxs("div",{style:{background:"#fafafa",border:"2px solid #e8e8e8",borderRadius:14,padding:"14px 16px"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[g.jsxs("span",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.1rem",color:"var(--blue-dark)"},children:[t.digits," digit",t.digits>1?"s":""," · ",t.count," numbers"]}),g.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:700},children:[t.totalGames," game",t.totalGames>1?"s":""]})]}),g.jsxs("div",{style:{marginBottom:10},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:4},children:[g.jsx("span",{children:"Accuracy"}),g.jsxs("span",{style:{fontWeight:800,color:n>=70?"var(--green-dark)":"var(--red)"},children:[n,"%"]})]}),g.jsx("div",{style:{height:8,background:"#e8e8e8",borderRadius:4,overflow:"hidden"},children:g.jsx("div",{style:{height:"100%",width:`${n}%`,background:n>=70?"var(--green)":"var(--red)",borderRadius:4,transition:"width 0.6s ease"}})})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8},children:[g.jsx(Ne,{label:"✅ Correct",value:e,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Avg score",value:r,color:"var(--purple-dark)"}),g.jsx(Ne,{label:"Best score",value:a,color:"var(--yellow-dark)"}),g.jsx(Ne,{label:"Worst score",value:o,color:"var(--yellow-dark)"}),g.jsx(Ne,{label:"Avg time",value:`${i}s`,color:"var(--blue-dark)"}),g.jsx(Ne,{label:"Total games",value:t.totalGames||0}),g.jsx(Ne,{label:"Total score",value:t.totalScore||0,color:"var(--purple-dark)"}),g.jsx(Ne,{label:"Best time",value:`${s}`,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Worst time",value:`${t.maxTime}s`,color:"var(--red)"}),g.jsx(Ne,{label:"Best Streak",value:u,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Current Streak",value:c,color:"var(--green-dark)"}),g.jsx(Ne,{label:"Last Played",value:h})]})]})}function vf({title:t,children:e}){return g.jsxs("div",{style:{background:"#fafafa",border:"1.5px solid #ececec",borderRadius:14,padding:"14px 16px"},children:[g.jsx("p",{style:{fontSize:"0.78rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:1,marginBottom:10},children:t}),e,t.includes("trend")&&g.jsxs("div",{style:{display:"flex",gap:16,marginTop:8,justifyContent:"center"},children:[g.jsx(M0,{color:"var(--green)",label:"Correct"}),g.jsx(M0,{color:"var(--red)",label:"Wrong"})]})]})}function M0({color:t,label:e}){return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700},children:[g.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:t}}),e]})}function _s({label:t,value:e,color:n,icon:r}){return g.jsxs("div",{style:{background:"white",border:"1.5px solid #ececec",borderRadius:10,padding:"8px 10px",textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.2rem",color:n||"var(--text)",lineHeight:1.2},children:e}),g.jsxs("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",fontWeight:700,marginTop:2},children:[r," ",t]})]})}function L0({children:t}){return g.jsx("p",{className:"section-title",style:{margin:0},children:t})}function Ne({label:t,value:e,color:n}){return g.jsxs("div",{style:{textAlign:"center"},children:[g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1.4rem",color:n||"var(--blue-dark)"},children:e}),g.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",fontWeight:700},children:t})]})}function sF(){return g.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"})]})}function oF(){return g.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[g.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),g.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No stats yet!"}),g.jsx("p",{style:{fontSize:"0.875rem",marginTop:6},children:"Play your first round to see your stats."})]})}function HA(t){return t.toLocaleString("en-IN",{day:"numeric",month:"numeric",year:"numeric"})}function aF({uid:t}){const[e,n]=W.useState(null),[r,i]=W.useState(1),[s,o]=W.useState(0),[a,u]=W.useState(!1),[c,h]=W.useState([null]),f=Math.max(1,Math.ceil(s/_f));if(W.useEffect(()=>(O0(t).then(o),r!==1?void 0:QV(t,_f,({trials:v,lastDoc:S})=>{n(v),h(N=>{const C=[...N];return C[1]=S,C}),O0(t).then(o)})),[t,r]),W.useEffect(()=>{r!==1&&(u(!0),$A(t,_f,c[r-1]??null).then(({trials:_,lastDoc:v})=>{n(_),h(S=>{const N=[...S];return N[r]=v,N}),u(!1)}))},[t,r]),e===null||a)return g.jsx(uF,{});if(s===0)return g.jsx(cF,{});const p=e.filter(_=>_.isCorrect).length;return e.length&&Math.round(p/e.length*100),g.jsxs("div",{className:"flex flex-col",style:{gap:14},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsxs("p",{className:"section-title",style:{margin:0},children:["Page ",r," of ",f,g.jsxs("span",{style:{fontWeight:400,color:"var(--text-muted)",fontSize:"0.85rem"},children:[" (",s," total)"]})]}),r===1&&g.jsx("span",{style:{fontSize:"0.75rem",color:"var(--red)"},children:"🔴 Live"})]}),g.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:8},children:e.map(_=>g.jsx(lF,{t:_},_.id))}),g.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",justifyContent:"center",marginTop:4},children:[g.jsx("button",{className:"btn btn-outline",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r===1,onClick:()=>i(_=>_-1),children:"← Prev"}),g.jsxs("span",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--text-muted)",minWidth:80,textAlign:"center"},children:[r," / ",f]}),g.jsx("button",{className:"btn btn-primary",style:{padding:"8px 20px",fontSize:"0.9rem"},disabled:r>=f,onClick:()=>i(_=>_+1),children:"Next →"})]})]})}function lF({t}){var n;const e=(n=t.timestamp)!=null&&n.toDate?dF(t.timestamp.toDate()):"—";return g.jsxs("li",{style:{background:"#f8f9fa",borderRadius:12,padding:"12px 14px",display:"flex",flexDirection:"column",gap:6,borderLeft:`4px solid ${t.isCorrect?"var(--green)":"var(--red)"}`},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsx("span",{className:`result-badge ${t.isCorrect?"badge-correct":"badge-wrong"}`,children:t.isCorrect?"✅ Correct":"❌ Wrong"}),g.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:e})]}),t.numbers&&g.jsx("div",{style:{fontFamily:"Fredoka One, cursive",fontSize:"1rem",letterSpacing:"0.5px",wordBreak:"break-all"},children:hF(t.numbers)}),g.jsxs("div",{style:{display:"flex",gap:14,fontSize:"0.82rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[g.jsxs("span",{children:["Answer: ",g.jsx("strong",{style:{color:"var(--text)"},children:t.actualAnswer})]}),g.jsxs("span",{children:["Yours: ",g.jsx("strong",{style:{color:t.isCorrect?"var(--green-dark)":"var(--red)"},children:t.userAnswer})]}),g.jsxs("span",{children:["⏱ ",t.duration,"s"]}),g.jsxs("span",{children:["🪙 ",t.score??0," pts"]}),g.jsxs("span",{children:[t.count," nums · ",t.digits,"d"]})]})]})}function uF(){return g.jsxs("div",{className:"loader",style:{padding:"40px 0"},children:[g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"}),g.jsx("div",{className:"loader-dot"})]})}function cF(){return g.jsxs("div",{className:"text-center",style:{padding:"40px 0",color:"var(--text-muted)"},children:[g.jsx("div",{style:{fontSize:"3rem"},children:"📭"}),g.jsx("p",{style:{fontWeight:700,marginTop:12},children:"No games yet!"}),g.jsx("p",{className:"text-sm mt-sm",children:"Play your first round and results will appear here."})]})}function hF(t){return t.split(" ").map((e,n)=>g.jsx("span",{style:{color:e.startsWith("-")?"var(--red)":"var(--green-dark)",marginRight:4},children:e},n))}function dF(t){return t.toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}const fF=[{id:"stats",label:"📊 Stats"},{id:"history",label:"📋 History"}];function pF({uid:t}){const[e,n]=W.useState("stats");return g.jsxs("div",{children:[g.jsx("div",{className:"tabs",style:{marginBottom:"1rem"},children:fF.map(r=>g.jsx("button",{className:`tab ${e===r.id?"active":""}`,onClick:()=>n(r.id),children:r.label},r.id))}),e==="stats"&&g.jsx(ZV,{uid:t}),e==="history"&&g.jsx(aF,{uid:t})]})}function mF(){const[t,e]=W.useState([]),[n,r]=W.useState(!0),[i,s]=W.useState(""),[o,a]=W.useState(!1),[u,c]=W.useState(null),h=W.useRef(null);W.useEffect(()=>{WA().then(e).finally(()=>r(!1))},[]),W.useEffect(()=>{function v(S){h.current&&!h.current.contains(S.target)&&a(!1)}return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]);const f=t.filter(v=>{var S,N;return((S=v.name)==null?void 0:S.toLowerCase().includes(i.toLowerCase()))||((N=v.email)==null?void 0:N.toLowerCase().includes(i.toLowerCase()))});function p(v){c(v),s(""),a(!1)}function _(){c(null),s("")}return n?g.jsxs("div",{className:"loader",children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]}):u?g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"},children:[g.jsx("button",{className:"btn btn-outline",onClick:_,children:"← Change Student"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[g.jsx("span",{style:{fontFamily:"Fredoka One",fontSize:"1.3rem",color:"var(--text)"},children:u.name}),u.age&&g.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"999px",padding:"0.15rem 0.6rem"},children:["Age ",u.age]})]})]}),g.jsx(pF,{uid:u.uid})]}):g.jsx("div",{children:g.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[g.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:"1rem",fontSize:"0.9rem"},children:[t.length," student",t.length!==1?"s":""," registered"]}),g.jsxs("div",{ref:h,style:{position:"relative"},children:[g.jsx("input",{className:"answer-input",type:"text",placeholder:"Search by name or email...",value:i,onChange:v=>{s(v.target.value),a(!0)},onFocus:()=>a(!0),style:{width:"100%",fontSize:"1rem",padding:"0.75rem 1rem",textAlign:"left",fontFamily:"Nunito, sans-serif"}}),o&&g.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,background:"white",border:"2px solid var(--border)",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.10)",zIndex:100,maxHeight:"280px",overflowY:"auto"},children:f.length===0?g.jsx("div",{style:{padding:"1rem",color:"var(--text-muted)",textAlign:"center",fontSize:"0.9rem"},children:"No students found"}):f.map(v=>g.jsxs("div",{onClick:()=>p(v),style:{padding:"0.75rem 1rem",cursor:"pointer",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.15s"},onMouseEnter:S=>S.currentTarget.style.background="var(--bg)",onMouseLeave:S=>S.currentTarget.style.background="white",children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,color:"var(--text)"},children:v.name}),g.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:v.email})]}),v.age&&g.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"999px",padding:"0.1rem 0.5rem"},children:["Age ",v.age]})]},v.uid))})]})]})})}const st=[{border:"#1D9E75",bg:"#E1F5EE",avatarText:"#085041",label:"#085041"},{border:"#D85A30",bg:"#FAECE7",avatarText:"#712B13",label:"#712B13"},{border:"#7F77DD",bg:"#EEEDFE",avatarText:"#3C3489",label:"#3C3489"},{border:"#BA7517",bg:"#FAEEDA",avatarText:"#633806",label:"#633806"}],wf=4;function gF(t=""){return t.split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase()}function _F(t){const[e,n]=t.split("_");return`${e.replace("d","")} digit${e==="1d"?"":"s"}, ${n.replace("n","")} numbers`}function V0(t){return t?{...t,avgTime:t.totalGames>0?t.totalTime/t.totalGames:0}:null}function yF({student:t,color:e,onRemove:n}){return g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",padding:"0.45rem 0.6rem",border:`2px solid ${e.border}`,borderRadius:"10px",background:e.bg},children:[g.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:e.bg,color:e.avatarText,border:`1.5px solid ${e.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.65rem",fontWeight:700,flexShrink:0},children:gF(t.name)}),g.jsxs("div",{style:{minWidth:0,flex:1},children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.85rem",color:"var(--text)"},children:t.name}),t.age&&g.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)"},children:["Age ",t.age]})]}),g.jsx("button",{onClick:n,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:"0.85rem",padding:"0 2px",flexShrink:0},children:"✕"})]})}function vF({students:t,onSelect:e,color:n,label:r}){const[i,s]=W.useState(""),[o,a]=W.useState(!1),u=W.useRef(null);W.useEffect(()=>{function h(f){u.current&&!u.current.contains(f.target)&&a(!1)}return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const c=t.filter(h=>{var f,p;return!i||((f=h.name)==null?void 0:f.toLowerCase().includes(i.toLowerCase()))||((p=h.email)==null?void 0:p.toLowerCase().includes(i.toLowerCase()))});return g.jsxs("div",{ref:u,style:{position:"relative",minWidth:0},children:[g.jsx("p",{style:{fontSize:"0.75rem",color:n.label,fontWeight:700,marginBottom:"0.3rem"},children:r}),g.jsx("input",{className:"answer-input",type:"text",placeholder:"Search...",value:i,onChange:h=>{s(h.target.value),a(!0)},onFocus:()=>a(!0),style:{width:"100%",fontSize:"0.85rem",padding:"0.5rem 0.6rem",textAlign:"left",fontFamily:"Nunito, sans-serif",boxSizing:"border-box"}}),o&&g.jsx("div",{style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,background:"white",border:"2px solid var(--border)",borderRadius:"10px",boxShadow:"0 4px 16px rgba(0,0,0,0.10)",zIndex:200,maxHeight:"200px",overflowY:"auto"},children:c.length===0?g.jsx("div",{style:{padding:"0.75rem",color:"var(--text-muted)",fontSize:"0.82rem",textAlign:"center"},children:"No students found"}):c.map(h=>g.jsxs("div",{onClick:()=>{e(h),s(""),a(!1)},style:{padding:"0.55rem 0.75rem",cursor:"pointer",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},onMouseEnter:f=>f.currentTarget.style.background="var(--bg)",onMouseLeave:f=>f.currentTarget.style.background="white",children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontWeight:700,fontSize:"0.82rem"},children:h.name}),g.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:h.email})]}),h.age&&g.jsxs("span",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:["Age ",h.age]})]},h.uid))})]})}function Zn(t){return typeof t!="number"||isNaN(t)||Math.round(t)===_l?null:parseFloat(t.toFixed(2))}function F0({id:t,students:e,leftMetrics:n,rightMetrics:r,leftLabel:i,rightLabel:s,statsGetter:o}){const a=W.useRef(null),u=W.useRef(null);W.useEffect(()=>{if(window.Chart)return c(),()=>{u.current&&u.current.destroy()}},[e,o]);function c(){if(!a.current||!window.Chart)return;u.current&&u.current.destroy();const h=[{label:"Avg score",data:e.map(f=>{var p;return Zn((p=o(f.uid))==null?void 0:p.avgScore)}),backgroundColor:e.map((f,p)=>st[p].border+"cc"),borderColor:e.map((f,p)=>st[p].border),borderWidth:1.5,borderRadius:4,yAxisID:"yLeft"},{label:"Best score",data:e.map(f=>{var p;return Zn((p=o(f.uid))==null?void 0:p.maxScore)}),backgroundColor:e.map((f,p)=>st[p].border+"66"),borderColor:e.map((f,p)=>st[p].border),borderWidth:1.5,borderRadius:4,borderDash:[3,3],yAxisID:"yLeft"},{label:"Worst score",data:e.map(f=>{var p;return Zn((p=o(f.uid))==null?void 0:p.minScore)}),backgroundColor:e.map((f,p)=>st[p].bg),borderColor:e.map((f,p)=>st[p].border),borderWidth:1.5,borderRadius:4,yAxisID:"yLeft"},{type:"line",label:"Accuracy",data:e.map(f=>{var p;return Zn((p=o(f.uid))==null?void 0:p.accuracy)}),borderColor:"#94a3b8",borderWidth:2,borderDash:[5,4],pointStyle:"circle",pointRadius:5,pointBackgroundColor:e.map((f,p)=>st[p].border),pointBorderColor:"#fff",pointBorderWidth:2,fill:!1,tension:.35,yAxisID:"yRight"}];u.current=new window.Chart(a.current,{type:"bar",data:{labels:e.map(f=>f.name),datasets:h},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:f=>{const p=f.parsed.y;return p==null?null:f.dataset.label==="Accuracy"?`Accuracy: ${p.toFixed(1)}%`:`${f.dataset.label}: ${p}`}}}},interaction:{mode:"index",intersect:!1},scales:{x:{grid:{display:!1},ticks:{font:{size:11,family:"Nunito"}}},yLeft:{type:"linear",position:"left",beginAtZero:!0,title:{display:!!i,text:i,font:{size:11,family:"Nunito"},color:"#888"},ticks:{font:{size:11,family:"Nunito"}},grid:{color:"rgba(0,0,0,0.06)"}},yRight:{type:"linear",position:"right",min:0,max:100,title:{display:!0,text:"Accuracy (%)",font:{size:11,family:"Nunito"},color:"#888"},ticks:{font:{size:11,family:"Nunito"},callback:f=>f+"%"},grid:{drawOnChartArea:!1}}}}})}return g.jsx("canvas",{ref:a,style:{maxHeight:"280px"}})}function j0({students:t,metrics:e,yLabel:n,statsGetter:r}){const i=W.useRef(null),s=W.useRef(null),o=t.map(u=>{const c=r(u.uid);return!c||!c.totalGames?null:Zn(c.totalTime/c.totalGames)});W.useEffect(()=>{if(window.Chart)return a(),()=>{s.current&&s.current.destroy()}},[t,r]);function a(){if(!i.current||!window.Chart)return;s.current&&s.current.destroy();const u=[{type:"bar",label:"Time range",data:t.map(c=>{const h=r(c.uid),f=Zn(h==null?void 0:h.minTime),p=Zn(h==null?void 0:h.maxTime);return f==null||p==null?null:[f,p]}),backgroundColor:t.map((c,h)=>st[h].border+"55"),borderColor:t.map((c,h)=>st[h].border),borderWidth:1.5,borderRadius:4,barPercentage:.5},{type:"scatter",label:"Avg time",data:t.map((c,h)=>{const f=o[h];return f==null?null:{x:h,y:f}}),backgroundColor:t.map((c,h)=>st[h].border),borderColor:"#fff",borderWidth:2,pointRadius:6,pointHoverRadius:8,pointStyle:"circle"}];s.current=new window.Chart(i.current,{type:"bar",data:{labels:t.map(c=>c.name),datasets:u},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:c=>{if(c.dataset.label==="Time range"){const f=r(t[c.dataIndex].uid),p=Zn(f==null?void 0:f.minTime),_=Zn(f==null?void 0:f.maxTime);return p==null||_==null?"Time range: —":`Time range: ${p}s → ${_}s`}const h=c.parsed.y;return h==null?"Avg time: —":`Avg time: ${h}s`}}}},interaction:{mode:"index",intersect:!1},scales:{x:{grid:{display:!1},ticks:{font:{size:11,family:"Nunito"}}},y:{beginAtZero:!1,title:{display:!!n,text:n,font:{size:11,family:"Nunito"},color:"#888"},ticks:{font:{size:11,family:"Nunito"},callback:c=>c+"s"},grid:{color:"rgba(0,0,0,0.06)"}}}}})}return g.jsx("canvas",{ref:i,style:{maxHeight:"260px"}})}function wF({students:t,statsGetter:e}){const n=W.useRef(null),r=W.useRef(null);W.useEffect(()=>{if(window.Chart)return i(),()=>{r.current&&r.current.destroy()}},[t,e]);function i(){if(!n.current||!window.Chart)return;r.current&&r.current.destroy();const s=Math.max(...t.map(_=>{var v;return((v=e(_.uid))==null?void 0:v.avgScore)||0}),1),o=Math.max(...t.map(_=>{var v;return((v=e(_.uid))==null?void 0:v.totalGames)||0}),1),a=Math.max(...t.map(_=>{var v;return((v=e(_.uid))==null?void 0:v.bestStreak)||0}),1),u=Math.max(...t.map(_=>{var v;return((v=e(_.uid))==null?void 0:v.avgTime)||0}),1),c=(_,v)=>Math.round(_/v*100),h=t.map(_=>{const v=e(_.uid);return[parseFloat(((v==null?void 0:v.accuracy)||0).toFixed(1)),Math.round((v==null?void 0:v.avgScore)||0),Math.round((v==null?void 0:v.totalGames)||0),parseFloat(((v==null?void 0:v.avgTime)||0).toFixed(2)),Math.round((v==null?void 0:v.bestStreak)||0)]}),f=["Accuracy %","Avg score","Games played","Avg speed","Best streak"],p=["%"," pts"," games","s"," streak"];r.current=new window.Chart(n.current,{type:"radar",data:{labels:f,datasets:t.map((_,v)=>{const S=e(_.uid);return{label:_.name,data:[Math.round((S==null?void 0:S.accuracy)||0),c((S==null?void 0:S.avgScore)||0,s),c((S==null?void 0:S.totalGames)||0,o),Math.round(100-c((S==null?void 0:S.avgTime)||0,u)),c((S==null?void 0:S.bestStreak)||0,a)],borderColor:st[v].border,backgroundColor:st[v].border+"33",pointBackgroundColor:st[v].border,borderWidth:2}})},options:{plugins:{legend:{position:"bottom",labels:{font:{size:12,family:"Nunito"}}},tooltip:{callbacks:{label:_=>{const v=_.datasetIndex,S=_.dataIndex,N=h[v][S],C=p[S];return`${_.dataset.label}: ${N}${C}`}}}},responsive:!0,scales:{r:{beginAtZero:!0,max:100,ticks:{stepSize:25,display:!1},pointLabels:{font:{size:12,family:"Nunito"}}}}}})}return g.jsx("canvas",{ref:n,style:{maxHeight:"300px"}})}function EF({students:t}){const[e,n]=W.useState(!1),[r,i]=W.useState(!1),[s,o]=W.useState(null),a=W.useRef(null),u=W.useRef(null),c=W.useRef(""),h=t.map(p=>p.uid).join(",");W.useEffect(()=>{h!==c.current&&(c.current=h,n(!1),o(null))},[h]);async function f(){n(!0),i(!0);const p=await Promise.all(t.map(_=>YV(_.uid,10)));o(p),i(!1)}return W.useEffect(()=>{if(!e||r||!s||!window.Chart)return;u.current&&u.current.destroy();const p=Math.max(...s.map(v=>v.length)),_=Array.from({length:p},(v,S)=>`#${S+1}`);return u.current=new window.Chart(a.current,{type:"line",data:{labels:_,datasets:s.map((v,S)=>({label:t[S].name,data:v.map(N=>N.score),backgroundColor:st[S].border+"aa",borderColor:st[S].border,borderWidth:1.5,borderRadius:4}))},options:{responsive:!0,scales:{y:{beginAtZero:!0,ticks:{font:{size:11}}},x:{ticks:{font:{size:11}},grid:{display:!1}}},plugins:{legend:{position:"top",labels:{font:{size:12,family:"Nunito"}}}}}}),()=>{u.current&&u.current.destroy()}},[e,r,s]),g.jsxs("div",{className:"admin-card",style:{marginTop:"1rem"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:e&&!r?"1rem":0},children:[g.jsx("span",{style:{fontWeight:700,fontSize:"0.95rem"},children:"Score trend — last 10 games"}),!e&&g.jsx("button",{className:"btn btn-outline",onClick:f,children:"Load trend ▼"})]}),e&&r&&g.jsxs("div",{className:"loader",style:{marginTop:"1rem"},children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]}),e&&!r&&s&&g.jsx("canvas",{ref:a,style:{maxHeight:"260px"}})]})}function sa({title:t,children:e}){return g.jsxs("div",{className:"admin-card",style:{marginBottom:"1rem",width:"100%"},children:[g.jsx("p",{style:{fontWeight:700,fontSize:"0.9rem",marginBottom:"1rem",color:"var(--text)"},children:t}),e]})}const TF=[{key:"avgScore",label:"Avg score",fmt:t=>Math.round(t)},{key:"maxScore",label:"Best score",fmt:t=>Math.round(t)},{key:"minScore",label:"Worst score",fmt:t=>Math.round(t)}],IF=[{key:"accuracy",label:"Accuracy %",fmt:t=>`${Math.round(t)}%`}],SF=[{key:"avgTime",label:"Avg time",fmt:t=>`${t.toFixed(1)}s`},{key:"minTime",label:"Best time",fmt:t=>`${t.toFixed(1)}s`},{key:"maxTime",label:"Worst time",fmt:t=>`${t.toFixed(1)}s`}],CF=[{key:"avgScore",label:"Avg score",fmt:t=>Math.round(t)},{key:"maxScore",label:"Best score",fmt:t=>Math.round(t)},{key:"minScore",label:"Worst score",fmt:t=>Math.round(t)}],AF=[{key:"accuracy",label:"Accuracy %",fmt:t=>`${Math.round(t)}%`}],xF=[{key:"minTime",label:"Best time",fmt:t=>`${t.toFixed(1)}s`},{key:"maxTime",label:"Worst time",fmt:t=>`${t.toFixed(1)}s`}];function RF(){const[t,e]=W.useState([]),[n,r]=W.useState(!0),[i,s]=W.useState([]),[o,a]=W.useState({}),[u,c]=W.useState(!1),h=W.useRef(!1);W.useEffect(()=>{if(window.Chart||h.current)return;h.current=!0;const k=document.createElement("script");k.src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js",document.head.appendChild(k)},[]),W.useEffect(()=>{WA().then(e).finally(()=>r(!1))},[]),W.useEffect(()=>{const k=i.filter(O=>!o[O.uid]);k.length!==0&&(c(!0),Promise.all(k.map(O=>qA(O.uid).then(V=>({uid:O.uid,stats:V})))).then(O=>{a(V=>{const T={...V};return O.forEach(({uid:w,stats:I})=>{T[w]=I}),T})}).finally(()=>c(!1)))},[i]);function f(k){i.length>=wf||i.find(O=>O.uid===k.uid)||s(O=>[...O,k])}function p(k){s(O=>O.filter(V=>V.uid!==k)),a(O=>{const V={...O};return delete V[k],V})}if(n)return g.jsxs("div",{className:"loader",children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]});const _=t.filter(k=>!i.find(O=>O.uid===k.uid)),v=i.length<wf,S=i.length>=2&&i.every(k=>o[k.uid])&&!u;function N(k){var O;return V0((O=o[k])==null?void 0:O.global)}function C(k,O){var T,w;const V=(w=(T=o[k])==null?void 0:T.groups)==null?void 0:w[O];return V?V0(V):null}const E=S?[...new Set(i.flatMap(k=>{var O;return Object.keys(((O=o[k.uid])==null?void 0:O.groups)||{})}))].sort():[];function x(k){return i.filter(O=>{var V,T;return!!((T=(V=o[O.uid])==null?void 0:V.groups)!=null&&T[k])})}return g.jsxs("div",{style:{width:"100%"},children:[g.jsxs("div",{style:{marginBottom:"1rem",background:"white",borderRadius:"16px",padding:"1.25rem",border:"1px solid var(--border)",maxWidth:"680px"},children:[g.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"nowrap",alignItems:"flex-start"},children:[i.map((k,O)=>g.jsxs("div",{style:{flex:"1 1 140px",minWidth:140},children:[g.jsxs("p",{style:{fontSize:"0.75rem",color:st[O].label,fontWeight:700,marginBottom:"0.3rem"},children:["Student ",String.fromCharCode(65+O)]}),g.jsx(yF,{student:k,color:st[O],onRemove:()=>p(k.uid)})]},k.uid)),v&&g.jsx("div",{style:{flex:"1 1 140px",minWidth:140},children:g.jsx(vF,{students:_,onSelect:f,color:st[i.length],label:`Student ${String.fromCharCode(65+i.length)}`})})]}),i.length>0&&g.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.75rem",marginBottom:0},children:[i.length," student",i.length>1?"s":""," selected",v?` — add up to ${wf-i.length} more`:" — maximum reached"]})]}),i.length<2&&g.jsx("div",{className:"card",style:{textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:"Select at least 2 students to compare"}),i.length>=2&&u&&g.jsxs("div",{className:"loader",style:{marginTop:"1rem"},children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]}),g.jsx("div",{style:{width:"100%"},children:S&&i.length>=2&&g.jsxs(g.Fragment,{children:[g.jsx(sa,{title:"Overview",children:g.jsx(wF,{students:i,statsGetter:N})}),g.jsx(sa,{title:"Scores & performance",children:g.jsx(F0,{students:i,leftMetrics:TF,rightMetrics:IF,leftLabel:"Score",rightLabel:"% / Count",statsGetter:N})}),g.jsx(sa,{title:"Response times",children:g.jsx(j0,{students:i,metrics:SF,yLabel:"Seconds",statsGetter:N})}),E.map(k=>{const O=x(k);return O.length<1?null:g.jsxs("div",{children:[g.jsx("p",{style:{fontSize:"0.8rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.05em",margin:"1.25rem 0 0.5rem"},children:_F(k)}),g.jsx(sa,{title:"Scores & performance",children:g.jsx(F0,{students:O,leftMetrics:CF,rightMetrics:AF,leftLabel:"Score",rightLabel:"% / Count",statsGetter:V=>C(V,k)})}),g.jsx(sa,{title:"Response times",children:g.jsx(j0,{students:O,metrics:xF,yLabel:"Seconds",statsGetter:V=>C(V,k)})})]},k)}),g.jsx(EF,{students:i})]})})]})}function kF(){const t="AB@CD$EFGHJ&KLMNP+QR=STUV#WXYZ23%45*67^89",e=Array.from({length:3},()=>t[Math.floor(Math.random()*t.length)]).join(""),n=Array.from({length:4},()=>t[Math.floor(Math.random()*t.length)]).join("");return`${e}-${n}`}async function PF(t,e,n){const r=kF(),i=await SC(pn(_e,"challenges"),{adminUid:t,code:r,status:"waiting",config:e,createdAt:yr(),startedAt:null,finishedAt:null,createdAt:yr()}),s=PC(_e);return n.forEach((o,a)=>{const u=String(o.qIdx).padStart(4,"0"),c=et(_e,"challenges",i.id,"questions",u);s.set(c,{...o,order:a})}),await s.commit(),{id:i.id,code:r,config:e,questions:n}}async function NF(){const t=co(pn(_e,"challenges"),Bc("status","in",["waiting","active"]),ho("createdAt","desc"));return(await Yi(t)).docs.map(n=>({id:n.id,...n.data()}))}const bu=5;async function bF(t=null){let e=co(pn(_e,"challenges"),Bc("status","==","finished"),ho("createdAt","desc"),ll(bu+1));t&&(e=co(pn(_e,"challenges"),Bc("status","==","finished"),ho("createdAt","desc"),Kg(t),ll(bu+1)));const r=(await Yi(e)).docs,i=r.length>bu;return{challenges:r.slice(0,bu).map(a=>({id:a.id,...a.data(),_snap:a})),hasMore:i}}async function DF(t,e){return Promise.all([Qi(et(_e,"challenges",t,"participants",e)),Qi(et(_e,"challenges",t,"participants",e,"private","submission"))])}async function U0(t){const e=await Qi(et(_e,"challenges",t));if(!e.exists())return null;const r=(await Yi(pn(_e,"challenges",t,"questions"))).docs.map(o=>({id:o.id,...o.data()})).sort((o,a)=>o.order-a.order),i=await Yi(pn(_e,"challenges",t,"adminState")),s={};return i.docs.forEach(o=>{s[o.id]=o.data()}),{id:t,...e.data(),questions:r,adminState:s}}async function OF(t,e,n,r){await Jg(et(_e,"challenges",e,"adminState",n),{token:r.token,shuffledOrder:r.shuffledOrder,currentIdx:r.currentIdx,prefetchIdx:r.prefetchIdx,upd_by:t,upd_at:yr()})}async function z0(t,e,n,{currentIdx:r,prefetchIdx:i}){await pi(et(_e,"challenges",e,"adminState",n),{currentIdx:r,prefetchIdx:i,upd_by:t,upd_at:yr()})}async function MF(t,e){await pi(et(_e,"challenges",e),{status:"active",startedAt:yr(),upd_by:t})}async function LF(t,e){await pi(et(_e,"challenges",e),{status:"finished",finishedAt:yr(),upd_by:t})}async function B0(t,e,n,r){const i=et(_e,"challenges",e,"participants",n,"private","token"),s=await Qi(i);(!s.exists()||s.data().rtdbToken!==r)&&await Jg(i,{rtdbToken:r,writtenAt:yr(),upd_by:t})}function W0(t,e,n){return Ll(et(_e,"challenges",t,"participants",e,"private","submission"),r=>{r.exists()&&n({uid:e,...r.data()})})}async function VF(t,e,{score:n,isCorrect:r,qIdx:i,duration:s,submittedAnswer:o}){const a=et(_e,"challenges",t,"participants",e);await pi(a,{scores:kC({qIdx:i,score:n,isCorrect:r,duration:s,submittedAnswer:o}),totalScore:ec(n),totalCorrect:ec(r?1:0),questionsAttempted:ec(1),status:"playing"})}async function FF(t,e,n){const r=et(_e,"challenges",e);await pi(r,{leaderboard:n})}async function jF(t,e,n){const r=et(_e,"challenges",e);await pi(r,{summary:n})}async function $0(t,e){await pi(et(_e,"challenges",t,"participants",e),{status:"finished",finishedAt:yr()})}function Ef(t,e){return Math.floor(Math.random()*(e-t+1))+t}function UF(t,e,n=!1){const r=Math.pow(10,t)-1,i=Ef(1,r),s=[{value:i,operator:"+",running:i}];let o=i;for(let a=1;a<e;a++){let u=Ef(1,r),c=Math.random()<.5?"+":"-";c==="-"&&(o===0?c="+":o-u<0&&(u=Ef(1,o))),o=c==="+"?o+u:o-u,n?s.push({value:u,operator:c}):s.push({value:u,operator:c,running:o})}return{sequence:s,answer:o}}function zF({digits:t,count:e,duration:n,isCorrect:r}){const i=1+.1*(t-1)+(e-2)/20,s=20+(e-3)*.5,o=100/(1+n/s);return r?Math.round(o*i):0}const Tf=[{label:"Easy",digits:1,count:3},{label:"Medium",digits:2,count:5},{label:"Hard",digits:2,count:7},{label:"Custom",digits:null,count:null}];function BF({onCreated:t}){const{user:e}=$l(),[n,r]=W.useState(0),[i,s]=W.useState(1),[o,a]=W.useState(3),[u,c]=W.useState(3),[h,f]=W.useState(!1),[p,_]=W.useState(""),v=n===3,S=v?i:Tf[n].digits,N=v?o:Tf[n].count;async function C(){f(!0),_("");try{const E=Array.from({length:u},(T,w)=>{const{sequence:I,answer:A}=UF(S,N,!0);return{qIdx:w,sequence:I,answer:A}}),x={digits:S,count:N,numGames:u},k=E,{id:O,code:V}=await PF(e.uid,x,k);t({id:O,code:V,config:x,questions:E})}catch(E){console.log("Error while creating CHallenge"+E),_("Failed to create challenge. Try again."),f(!1)}}return g.jsx("div",{style:{maxWidth:"560px"},children:g.jsxs("div",{className:"admin-card",children:[g.jsx("p",{style:{fontWeight:700,fontSize:"1rem",marginBottom:"1.25rem"},children:"🏆 Create Challenge"}),g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.5rem",fontWeight:600},children:"DIFFICULTY"}),g.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1.25rem",flexWrap:"wrap"},children:Tf.map((E,x)=>g.jsx("button",{className:`diff-btn ${n===x?"selected":""}`,onClick:()=>r(x),children:E.label},E.label))}),v&&g.jsxs("div",{style:{marginBottom:"1.25rem"},children:[g.jsxs("div",{style:{marginBottom:"0.75rem"},children:[g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.3rem",fontWeight:600},children:["DIGITS PER NUMBER: ",i]}),g.jsx("input",{type:"range",min:1,max:6,value:i,onChange:E=>s(+E.target.value),style:{width:"100%"}})]}),g.jsxs("div",{children:[g.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.3rem",fontWeight:600},children:["NUMBERS IN SEQUENCE: ",o]}),g.jsx("input",{type:"range",min:2,max:20,value:o,onChange:E=>a(+E.target.value),style:{width:"100%"}})]})]}),g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.5rem",fontWeight:600},children:"NUMBER OF ROUNDS"}),g.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1.5rem",flexWrap:"wrap"},children:[1,2,3,5,10].map(E=>g.jsx("button",{className:`diff-btn ${u===E?"selected":""}`,onClick:()=>c(E),children:E},E))}),g.jsxs("div",{style:{background:"var(--bg)",borderRadius:"10px",padding:"0.75rem 1rem",marginBottom:"1.25rem",fontSize:"0.85rem",color:"var(--text-muted)",display:"flex",gap:"1.5rem"},children:[g.jsxs("span",{children:["📐 ",S," digit",S>1?"s":""]}),g.jsxs("span",{children:["🔢 ",N," numbers"]}),g.jsxs("span",{children:["🎮 ",u," round",u>1?"s":""]})]}),p&&g.jsx("p",{style:{color:"red",fontSize:"0.85rem",marginBottom:"0.75rem"},children:p}),g.jsx("button",{className:"btn btn-primary btn-full btn-lg",onClick:C,disabled:h,children:h?"Creating...":"Create Challenge →"})]})})}function ql(){return BV}async function q0(t,e){const n=ql(),r=es(n,`tokenOwners/${t}`),i=await PV(r);let s=!1;(!i.exists()||i.val()!==e)&&(s=!0,await th(r,e)),i.exists()&&s&&console.log(`WARNING!!! Token Already exists ${t}  for ${i.val}`)}async function Du(t,e){const n=ql();await b_(es(n,`s/${t}`),{[`question_${e.qIdx}`]:{sequence:e.sequence,qIdx:e.qIdx,pushedAt:Date.now()},next:e.qIdx})}async function WF(t){const e=ql();await b_(es(e,`s/${t}`),{next:-1})}async function $F(t,e){const n=ql();await kV(es(n,`s/${t}/question_${e.qIdx}`)),console.log("removed question "+e.qIdx)}async function qF(t){const e=ql();await th(es(e,`s/${t}`),null),await th(es(e,`tokenOwners/${t}`),null)}function HF(){const t="abcdefghijkmnopqrstuvwxyz0123456789";return Array.from({length:8},()=>t[Math.floor(Math.random()*t.length)]).join("")}const H0={waiting:{text:"Waiting",color:"#BA7517",bg:"#FAEEDA"},active:{text:"Active",color:"#1D9E75",bg:"#E1F5EE"},finished:{text:"Done",color:"#7F77DD",bg:"#EEEDFE"}};function G0({status:t}){const e=H0[t]||H0.waiting;return g.jsx("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"0.2rem 0.6rem",borderRadius:"999px",background:e.bg,color:e.color},children:e.text})}function GF({challenge:t,questions:e,onReset:n,onBack:r,restoredAdminState:i={}}){const[s,o]=W.useState(t),[a,u]=W.useState([]),[c,h]=W.useState(!1),[f,p]=W.useState(!1),[_,v]=W.useState([]),{user:S}=$l(),N=W.useRef(Object.fromEntries(Object.entries(i).map(([F,U])=>[F,{...U,subUnsub:null,lastProcessed:null}]))),C=W.useRef(e),E=W.useRef(s);W.useEffect(()=>{E.current=s},[s]);function x(F){v(U=>[`${new Date().toLocaleTimeString()} — ${F}`,...U].slice(0,50))}function k(F){const U=[...F];for(let z=U.length-1;z>0;z--){const q=Math.floor(Math.random()*(z+1));[U[z],U[q]]=[U[q],U[z]]}return U}function O(F,U){const z=N.current[F];if(!z)return null;const q=z.shuffledOrder[U];return console.log(" for "+F+" the question index is "+q+" at "+U),q===void 0?null:C.current[q]}async function V(F,U){if(N.current[F]){const Oe=N.current[F].token,Fe=N.current[F].currentIdx;x(`${U} already joined ${q} ${Oe} WAIT ${Fe} NEXT ${N.current[F].prefetchIdx}`);return}x(`${U} joined first`);const z=k(C.current.map((Oe,Fe)=>Fe)),q=HF();N.current[F]={token:q,shuffledOrder:z,currentIdx:0,prefetchIdx:1,subUnsub:null,lastProcessed:null},await OF(S.uid,t.id,F,N.current[F]),console.log("Written admin state"),await B0(S.uid,t.id,F,q),await q0(q,F);const Ie=O(F,0);Ie&&(await Du(q,{sequence:Ie.sequence,qIdx:0}),x(`Q1 pre-loaded for ${U}`));const we=W0(t.id,F,Oe=>{I(F,U,Oe)});N.current[F].subUnsub=we}function T(F){F.forEach(U=>{const z=N.current[U.uid];if(z&&(B0(S.uid,t.id,U.uid,z.token).then(()=>{console.log("part token confirmed written")}).catch(q=>{console.error("writeParticipantToken failed",q)}),console.log("Written participantToken from restored state "+z.token+" "+U.uid),q0(z.token,U.uid).then(()=>{console.log("token resgistered successfully rtdb"+z.token);const q=O(U.uid,z.prefetchIdx-1);q&&(console.log("pushing question",q),Du(z.token,{sequence:q.sequence,qIdx:z.prefetchIdx-1}))}).catch(q=>{console.error("registerToken failed on reattach/refresh page",q)})),z&&!z.subUnsub){console.log("subscribed to submission"+U.uid);const q=W0(t.id,U.uid,Ie=>{I(U.uid,U.name,Ie)});z.subUnsub=q,x(`Resumed listener for ${U.name}`)}else console.log("NOT subscribed to submission"+U.uid+" "+z.subUnsub)})}async function w(){h(!0),console.log("starting challenge");for(const[F,U]of Object.entries(N.current)){const z=O(F,U.prefetchIdx);z&&(console.log("pushing question "+z),await Du(U.token,{sequence:z.sequence,qIdx:U.prefetchIdx}),U.prefetchIdx++,await z0(S.uid,t.id,F,{currentIdx:U.currentIdx,prefetchIdx:U.prefetchIdx}))}try{await MF(S.uid,t.id),x("Challenge started — Q1 revealed to all students"+t.id)}catch(F){console.log("unable to start challenge "+F)}h(!1)}async function I(F,U,z){const q=N.current[F];if(!q)return;const Ie=`${F}-${z.qIdx}`;if(q.lastProcessed===Ie)return;q.lastProcessed=Ie,$F(q.token,z);const we=O(F,q.currentIdx);if(!we)return;const Oe=parseInt(z.submittedAnswer)===we.answer,Fe=zF({digits:t.config.digits,count:t.config.count,duration:z.duration,isCorrect:Oe});x(`${U} Q${q.currentIdx+1} — ${Oe?"✓":"✗"} ${Fe}pts`),q.currentIdx++,await Promise.all([VF(t.id,F,{score:Fe,isCorrect:Oe,qIdx:z.qIdx,duration:z.duration,submittedAnswer:z.submittedAnswer}),(async()=>{const rn=O(F,q.prefetchIdx);rn?(await Du(q.token,{sequence:rn.sequence,qIdx:q.prefetchIdx}),q.prefetchIdx++):(await WF(q.token),await $0(t.id,F),x(`${U} finished all questions`)),await z0(S.uid,t.id,F,{currentIdx:q.currentIdx,prefetchIdx:q.prefetchIdx})})()])}W.useEffect(()=>{const F=XV(t.id,o),U=JV(t.id,z=>{z.forEach(q=>{N.current[q.uid]||V(q.uid,q.name)}),T(z),u(z)});return()=>{F(),U(),Object.values(N.current).forEach(z=>{var q;return(q=z.subUnsub)==null?void 0:q.call(z)})}},[t.id]);async function A(){var F;p(!0);for(const U of Object.values(N.current))(F=U.subUnsub)==null||F.call(U),await qF(U.token);await LF(S.uid,t.id),x("Challenge finished — all channels cleared"),await new Promise(U=>setTimeout(U,2e3));try{await Vt(a)}catch(U){x(`Post-challenge write failed: ${U.message}`),console.error("computeAndWrite  error",U)}p(!1)}async function P(F){const U=F.map(async z=>{var sn;const[q,Ie]=await DF(t.id,z.uid);if(!q.exists())return console.log("ERRROR geting results "+z.uid+" NOT FOUND"),null;const we=q.data(),Oe=we.scores??[],Fe=we.questionsAttempted??0,rn=we.totalScore??0;if(we.status!="finished"&&(console.log(`WARNING TO BE FIXED ${we.name} ${we.status} ${we.uid} ${rn}`),$0(t.id,z.uid)),Fe===0||rn===0)return null;const gi=Oe.reduce((Ht,on)=>Ht+(on.duration??0),0);let bn=null;if(Ie.exists()){const Ht=Ie.data().submittedAt,on=E.current.startedAt;Ht!=null&&Ht.toMillis&&(on!=null&&on.toMillis)&&(bn=Ht.toMillis()-on.toMillis())}const Ir=((sn=N.current[z.uid])==null?void 0:sn.shuffledOrder)??[];return{uid:z.uid,name:z.name,totalScore:rn,totalCorrect:we.totalCorrect??0,questionsAttempted:Fe,totalTime:gi,challengeDuration:bn,scores:Oe,shuffledOrder:Ir}});return x("Data Fetching — participants for summary and leaderboard"),(await Promise.all(U)).filter(Boolean)}function b(F){return[...F].sort((z,q)=>q.totalScore!==z.totalScore?q.totalScore-z.totalScore:(z.totalTime??1/0)-(q.totalTime??1/0)).slice(0,10).map((z,q)=>({rank:q+1,uid:z.uid,name:z.name,totalScore:z.totalScore,totalCorrect:z.totalCorrect,questionsAttempted:z.questionsAttempted,totalTime:z.totalTime,challengeDuration:z.challengeDuration}))}function R(F){const U=F.length;if(U===0)return{participantCount:a.length,attemptedCount:0};const z=F.map(me=>me.totalScore),q=F.map(me=>me.totalTime),Ie=F.filter(me=>me.challengeDuration!=null).map(me=>me.challengeDuration),we=F.reduce((me,Re)=>me+Re.questionsAttempted,0),Oe=F.reduce((me,Re)=>me+Re.totalCorrect,0),Fe=F.filter(me=>me.questionsAttempted>=e.length).length,rn=Math.max(...z),gi=Math.min(...z),bn=Math.ceil((rn-gi||1)/5),Ir=Array.from({length:5},(me,Re)=>{const Sr=gi+Re*bn,_i=Sr+bn-1;return{label:`${Sr}–${_i}`,count:z.filter(Dn=>Dn>=Sr&&Dn<=(Re===4?rn:_i)).length}}),sn={};for(const me of F)for(const Re of me.scores){const Sr=me.shuffledOrder[Re.qIdx];if(Sr===void 0)continue;const _i=C.current[Sr];if(!_i)continue;const Dn=_i.qIdx;sn[Dn]||(sn[Dn]={attempted:0,correct:0}),sn[Dn].attempted++,Re.isCorrect&&sn[Dn].correct++}const Ht=Object.entries(sn).map(([me,Re])=>({questionId:me,attempted:Re.attempted,correct:Re.correct,correctRate:Math.round(Re.correct/Re.attempted*100)})).sort((me,Re)=>me.correctRate-Re.correctRate),on=Ht[0]??null;return{participantCount:a.length,attemptedCount:U,completionCount:Fe,completionRate:Math.round(Fe/U*100),maxScore:rn,minScore:gi,avgScore:Math.round(z.reduce((me,Re)=>me+Re,0)/U),scoreDistribution:Ir,avgTotalTime:Math.round(q.reduce((me,Re)=>me+Re,0)/U),...Ie.length>0&&{maxDuration:Math.max(...Ie),minDuration:Math.min(...Ie),avgDuration:Math.round(Ie.reduce((me,Re)=>me+Re,0)/Ie.length)},totalQuestionsAnswered:we,avgQuestionsAttempted:Math.round(we/U),avgCorrectRate:Math.round(Oe/we*100),hardestQuestion:on,perQuestionBreakdown:Ht}}async function Vt(F){const U=await P(F),z=b(U),q=R(U);await Promise.all([FF(S.uid,t.id,z),jF(S.uid,t.id,q)]),x(`Leaderboard written — top ${z.length} participants`),x(`Summary written — ${q.attemptedCount} scored, avg ${q.avgScore??0} pts`)}const{config:gn}=t,mi=s.status==="waiting",nn=s.status==="active",K=s.status==="finished",Z=[...a].sort((F,U)=>U.totalScore-F.totalScore);return g.jsxs("div",{children:[g.jsx("button",{className:"btn btn-outline",style:{marginBottom:"1rem",fontSize:"0.82rem"},onClick:r,children:"← All Challenges"}),g.jsx("div",{className:"admin-card",style:{maxWidth:"780px",marginBottom:"1rem"},children:g.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem"},children:[g.jsxs("div",{children:[g.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600,marginBottom:"0.25rem"},children:"CHALLENGE CODE"}),g.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"2.5rem",color:"var(--primary)",letterSpacing:"0.15em",marginBottom:"0.5rem"},children:t.code}),g.jsxs("div",{style:{display:"flex",gap:"1rem",fontSize:"0.82rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[g.jsxs("span",{children:["📐 ",gn.digits," digit",gn.digits>1?"s":""]}),g.jsxs("span",{children:["🔢 ",gn.count," numbers"]}),g.jsxs("span",{children:["🎮 ",e.length," questions"]}),g.jsxs("span",{children:["👥 ",a.length," joined"]})]})]}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.5rem"},children:[g.jsx(G0,{status:s.status}),mi&&g.jsx("button",{className:"btn btn-green btn-lg",onClick:w,disabled:c||a.length===0,children:c?"Starting...":"▶ Start Challenge"}),nn&&g.jsx("button",{className:"btn btn-red",onClick:A,disabled:f,children:f?"Finishing...":"⏹ End Challenge"}),K&&g.jsx("button",{className:"btn btn-outline",onClick:n,children:"+ New Challenge"})]})]})}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 320px",gap:"1rem",alignItems:"start"},children:[g.jsxs("div",{className:"admin-card",children:[g.jsxs("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"1rem"},children:["Live Scoreboard",nn&&g.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.72rem",color:"#1D9E75",fontWeight:400},children:"● live"})]}),a.length===0?g.jsxs("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-muted)",fontSize:"0.9rem"},children:["Waiting for students to join...",g.jsx("br",{}),g.jsxs("span",{style:{fontSize:"0.8rem",opacity:.7},children:["Share code ",g.jsx("strong",{children:t.code})," with your students"]})]}):g.jsxs("div",{children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 80px 80px 80px 80px",gap:"8px",padding:"0 0.5rem 0.5rem",borderBottom:"2px solid var(--border)",fontSize:"0.72rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:[g.jsx("span",{children:"Student"}),g.jsx("span",{style:{textAlign:"center"},children:"Done"}),g.jsx("span",{style:{textAlign:"center"},children:"Correct"}),g.jsx("span",{style:{textAlign:"center"},children:"Score"}),g.jsx("span",{style:{textAlign:"center"},children:"Status"})]}),Z.map((F,U)=>g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 80px 80px 80px 80px",gap:"8px",padding:"0.6rem 0.5rem",borderBottom:"1px solid var(--border)",alignItems:"center",background:U===0&&K?"#FFFBEA":"transparent"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[K&&U===0&&g.jsx("span",{children:"🥇"}),K&&U===1&&g.jsx("span",{children:"🥈"}),K&&U===2&&g.jsx("span",{children:"🥉"}),g.jsx("span",{style:{fontWeight:700,fontSize:"0.875rem"},children:F.name})]}),g.jsx("div",{style:{textAlign:"center",fontSize:"0.875rem"},children:F.questionsAttempted||0}),g.jsx("div",{style:{textAlign:"center",fontSize:"0.875rem"},children:F.totalCorrect||0}),g.jsx("div",{style:{textAlign:"center",fontWeight:700,fontSize:"0.95rem",color:"var(--primary)"},children:F.totalScore||0}),g.jsx("div",{style:{textAlign:"center"},children:g.jsx(G0,{status:F.status})})]},F.uid))]})]}),g.jsxs("div",{className:"admin-card",style:{maxHeight:"500px",overflowY:"auto"},children:[g.jsx("p",{style:{fontWeight:700,fontSize:"0.9rem",marginBottom:"0.75rem"},children:"Activity log"}),_.length===0?g.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"Waiting for activity..."}):_.map((F,U)=>g.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",padding:"0.3rem 0",borderBottom:"1px solid var(--border)"},children:F},U))]})]})]})}function Ai(t){if(t==null)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/60);return n>0?`${n}m ${e%60}s`:`${e}s`}function ba(t){return t==null?"—":`${t}%`}function Qt(t){return t??"—"}function O_(t){return t!=null&&t.toDate?t.toDate().toLocaleDateString(void 0,{month:"short",day:"numeric"}):"—"}function GA(t){return t!=null&&t.toDate?t.toDate().toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"}):""}const nh={waiting:{color:"#BA7517",bg:"#FAEEDA",label:"Waiting"},active:{color:"#1D9E75",bg:"#E1F5EE",label:"Active"},finished:{color:"#7F77DD",bg:"#EEEDFE",label:"Done"}};function KF({status:t}){const e=nh[t]||nh.waiting;return g.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"0.2rem 0.6rem",borderRadius:"999px",background:e.bg,color:e.color,whiteSpace:"nowrap"},children:["● ",e.label]})}function QF({challenge:t,onBack:e}){var s,o,a,u,c;const n=t.summary||{},r=t.leaderboard||[],i=["🥇","🥈","🥉"];return g.jsxs("div",{style:{maxWidth:"900px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"},children:[g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:e,children:"← Back"}),g.jsxs("div",{children:[g.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"2rem",color:"var(--primary)",letterSpacing:"0.12em"},children:t.code}),g.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",display:"flex",gap:"1rem",flexWrap:"wrap"},children:[g.jsxs("span",{children:["📅 ",O_(t.createdAt)," ",GA(t.createdAt)]}),g.jsxs("span",{children:["📐 ",(s=t.config)==null?void 0:s.digits," digits"]}),g.jsxs("span",{children:["🔢 ",(o=t.config)==null?void 0:o.count," numbers"]}),g.jsxs("span",{children:["🎮 ",(a=t.config)==null?void 0:a.numGames," rounds"]})]})]}),g.jsx(KF,{status:t.status})]}),g.jsxs("div",{className:"admin-card",style:{marginBottom:"1rem"},children:[g.jsx("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"1rem"},children:"Challenge Summary"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"0.75rem"},children:[["👥 Joined",Qt(n.participantCount)],["✅ Attempted",Qt(n.attemptedCount)],["🏁 Completed",`${Qt(n.completionCount)} (${ba(n.completionRate)})`],["🏆 Max Score",Qt(n.maxScore)],["📉 Min Score",Qt(n.minScore)],["📊 Avg Score",Qt(n.avgScore)],["⏱ Avg Total Time",Ai(n.avgTotalTime)],["⚡ Min Duration",Ai(n.minDuration)],["🐢 Max Duration",Ai(n.maxDuration)],["🕐 Avg Duration",Ai(n.avgDuration)],["🎯 Avg Correct",ba(n.avgCorrectRate)],["📝 Avg Attempted",Qt(n.avgQuestionsAttempted)]].map(([h,f])=>g.jsxs("div",{style:{background:"var(--bg)",borderRadius:"10px",padding:"0.6rem 0.85rem"},children:[g.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",marginBottom:"0.2rem"},children:h}),g.jsx("div",{style:{fontWeight:700,fontSize:"0.95rem"},children:f})]},h))})]}),((u=n.scoreDistribution)==null?void 0:u.length)>0&&g.jsxs("div",{className:"admin-card",style:{marginBottom:"1rem"},children:[g.jsx("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"0.75rem"},children:"Score Distribution"}),g.jsx("div",{style:{display:"flex",gap:"0.5rem",alignItems:"flex-end",height:"80px"},children:n.scoreDistribution.map(h=>{const f=Math.max(...n.scoreDistribution.map(_=>_.count),1),p=h.count/f*100;return g.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[g.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)"},children:h.count}),g.jsx("div",{style:{width:"100%",height:`${p}%`,background:"var(--primary)",borderRadius:"4px 4px 0 0",minHeight:"4px",opacity:.7+p/100*.3}}),g.jsx("div",{style:{fontSize:"0.6rem",color:"var(--text-muted)",textAlign:"center"},children:h.label})]},h.label)})})]}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",alignItems:"start"},children:[g.jsxs("div",{className:"admin-card",children:[g.jsx("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"0.75rem"},children:"🏆 Top 10 Leaderboard"}),r.length===0?g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"No data"}):g.jsxs("div",{children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"24px 1fr 56px 56px 64px",gap:"6px",padding:"0 0.25rem 0.4rem",borderBottom:"2px solid var(--border)",fontSize:"0.68rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:[g.jsx("span",{children:"#"}),g.jsx("span",{children:"Student"}),g.jsx("span",{style:{textAlign:"center"},children:"✓"}),g.jsx("span",{style:{textAlign:"center"},children:"Score"}),g.jsx("span",{style:{textAlign:"center"},children:"Time"})]}),r.map((h,f)=>g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"24px 1fr 56px 56px 64px",gap:"6px",padding:"0.45rem 0.25rem",borderBottom:"1px solid var(--border)",alignItems:"center",background:f===0?"#FFFBEA":"transparent"},children:[g.jsx("span",{style:{fontSize:"0.85rem"},children:i[f]||f+1}),g.jsx("span",{style:{fontWeight:600,fontSize:"0.82rem"},children:h.name}),g.jsx("span",{style:{textAlign:"center",fontSize:"0.82rem"},children:h.totalCorrect}),g.jsx("span",{style:{textAlign:"center",fontWeight:700,color:"var(--primary)",fontSize:"0.9rem"},children:h.totalScore}),g.jsx("span",{style:{textAlign:"center",fontSize:"0.78rem",color:"var(--text-muted)"},children:Ai(h.totalTime)})]},h.uid))]})]}),g.jsxs("div",{className:"admin-card",children:[g.jsxs("p",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"0.75rem"},children:["📋 Question Breakdown ",g.jsx("span",{style:{fontWeight:400,fontSize:"0.75rem",color:"var(--text-muted)"},children:"(hardest first)"})]}),(c=n.perQuestionBreakdown)!=null&&c.length?g.jsxs("div",{children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 56px 56px 64px",gap:"6px",padding:"0 0.25rem 0.4rem",borderBottom:"2px solid var(--border)",fontSize:"0.68rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:[g.jsx("span",{children:"Question"}),g.jsx("span",{style:{textAlign:"center"},children:"Tried"}),g.jsx("span",{style:{textAlign:"center"},children:"Correct"}),g.jsx("span",{style:{textAlign:"center"},children:"Rate"})]}),n.perQuestionBreakdown.map(h=>g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 56px 56px 64px",gap:"6px",padding:"0.4rem 0.25rem",borderBottom:"1px solid var(--border)",alignItems:"center"},children:[g.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.78rem"},children:h.questionId}),g.jsx("span",{style:{textAlign:"center",fontSize:"0.82rem"},children:h.attempted}),g.jsx("span",{style:{textAlign:"center",fontSize:"0.82rem"},children:h.correct}),g.jsx("span",{style:{textAlign:"center",fontWeight:700,fontSize:"0.85rem",color:h.correctRate<40?"#E03131":h.correctRate<70?"#BA7517":"#1D9E75"},children:ba(h.correctRate)})]},h.questionId))]}):g.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"No data"})]})]})]})}const YF=[{key:"date",label:"📅 Date",render:t=>`${O_(t.createdAt)} ${GA(t.createdAt)}`},{key:"config",label:"⚙️ Config",render:t=>{var e,n,r;return`${(e=t.config)==null?void 0:e.digits}d × ${(n=t.config)==null?void 0:n.count}n × ${(r=t.config)==null?void 0:r.numGames}q`}},{key:"participants",label:"👥 Joined",render:t=>{var e;return Qt((e=t.summary)==null?void 0:e.participantCount)}},{key:"attempted",label:"✅ Attempted",render:t=>{var e;return Qt((e=t.summary)==null?void 0:e.attemptedCount)}},{key:"completion",label:"🏁 Completion",render:t=>{var e,n;return`${Qt((e=t.summary)==null?void 0:e.completionCount)} (${ba((n=t.summary)==null?void 0:n.completionRate)})`}},{key:"maxScore",label:"🪙 Max Score",render:t=>{var e;return Qt((e=t.summary)==null?void 0:e.maxScore)}},{key:"minScore",label:"📉 Min Score",render:t=>{var e;return Qt((e=t.summary)==null?void 0:e.minScore)}},{key:"avgScore",label:"📊 Avg Score",render:t=>{var e;return Qt((e=t.summary)==null?void 0:e.avgScore)}},{key:"avgTotalTime",label:"⏱ Avg Total Time",render:t=>{var e;return Ai((e=t.summary)==null?void 0:e.avgTotalTime)}},{key:"avgDuration",label:"🕐 Avg Duration",render:t=>{var e;return Ai((e=t.summary)==null?void 0:e.avgDuration)}},{key:"avgCorrect",label:"🎯 Avg Correct",render:t=>{var e;return ba((e=t.summary)==null?void 0:e.avgCorrectRate)}},{key:"hardest",label:"🧠 Hardest Q",render:t=>{var e;return(e=t.summary)!=null&&e.hardestQuestion?`${t.summary.hardestQuestion.questionId} (${t.summary.hardestQuestion.correctRate}%)`:"—"}}];function XF({onBack:t,onOpenDetail:e}){const[n,r]=W.useState([]),[i,s]=W.useState([null]),[o,a]=W.useState(0),[u,c]=W.useState(!0),[h,f]=W.useState(!1),[p,_]=W.useState(!1),v=async(k,O)=>{c(!0);try{const V=await bF(k);if(r(T=>{const w=[...T];return w[O]=V.challenges,w}),V.hasMore&&V.challenges.length>0){const T=V.challenges[V.challenges.length-1]._snap;s(w=>{const I=[...w];return I[O+1]=T,I})}f(V.hasMore),_(V.hasMore),a(O)}catch(V){console.error("Fetch failed:",V),alert("Could not load the next page. Please try again.")}finally{c(!1)}};W.useEffect(()=>{v(null,0)},[]);const S=()=>{if(u)return;const k=o+1;if(n[k]){a(k);const O=k===n.length-1;f(!O||p)}else if(h){const O=i[k];v(O,k)}},N=()=>{o>0&&(a(k=>k-1),f(!0))},C=n[o]||[];if(u)return g.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Loading past challenges..."});if(C.length===0)return g.jsxs("div",{style:{maxWidth:"680px"},children:[g.jsx("button",{className:"btn btn-outline",style:{marginBottom:"1.25rem",fontSize:"0.82rem"},onClick:t,children:"← Active Challenges"}),g.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"No finished challenges yet."})]});const E=C,x=`200px repeat(${E.length}, minmax(140px, 1fr))`;return g.jsxs("div",{children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.25rem",flexWrap:"wrap"},children:[g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:t,children:"← Active Challenges"}),g.jsx("p",{style:{fontWeight:700,fontSize:"1.05rem",margin:0},children:"Past Challenges"}),g.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginLeft:"auto"},children:[C.length," challenge",C.length!==1?"s":""]})]}),g.jsx("div",{className:"admin-card",style:{overflowX:"auto",padding:"0"},children:g.jsxs("div",{style:{minWidth:"500px"},children:[g.jsxs("div",{style:{display:"grid",gridTemplateColumns:x,borderBottom:"2px solid var(--border)",position:"sticky",top:0,background:"var(--surface)",zIndex:1},children:[g.jsx("div",{style:{padding:"0.75rem 1rem",fontSize:"0.72rem",fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase"},children:"Metric"}),E.map(k=>g.jsxs("button",{onClick:()=>e(k),title:"View full details",style:{padding:"0.75rem 0.5rem",textAlign:"center",background:"none",border:"none",cursor:"pointer",borderLeft:"1px solid var(--border)"},onMouseEnter:O=>O.currentTarget.style.background="var(--bg)",onMouseLeave:O=>O.currentTarget.style.background="none",children:[g.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"1.15rem",color:"var(--primary)",letterSpacing:"0.1em"},children:k.code}),g.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",marginTop:"2px"},children:O_(k.createdAt)})]},k.id))]}),YF.map((k,O)=>g.jsxs("div",{style:{display:"grid",gridTemplateColumns:x,borderBottom:"1px solid var(--border)",background:O%2===0?"transparent":"var(--bg)"},children:[g.jsx("div",{style:{padding:"0.55rem 1rem",fontSize:"0.78rem",fontWeight:600,color:"var(--text-muted)",display:"flex",alignItems:"center"},children:k.label}),E.map(V=>g.jsx("div",{style:{padding:"0.55rem 0.5rem",textAlign:"center",fontSize:"0.85rem",fontWeight:500,borderLeft:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center"},children:k.render(V)},V.id))]},k.key))]})}),g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.75rem",marginTop:"1rem"},children:[g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:()=>N(),disabled:o===0,children:"← Prev"}),g.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:o+1}),g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:()=>S(),disabled:!h,children:"Next →"})]}),g.jsx("p",{style:{fontSize:"0.72rem",color:"var(--text-muted)",marginTop:"0.75rem",textAlign:"center"},children:"Click a challenge code to view full details"})]})}function JF({onSelect:t,onCreateNew:e,onPastChallenges:n}){const[r,i]=W.useState([]),[s,o]=W.useState(!0);return W.useEffect(()=>{NF().then(i).catch(a=>console.error("Failed to load challenges:",a)).finally(()=>o(!1))},[]),s?g.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Loading challenges..."}):g.jsxs("div",{style:{maxWidth:"680px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.25rem"},children:[g.jsx("p",{style:{fontWeight:700,fontSize:"1.05rem",margin:0},children:"Select a Challenge to Monitor"}),g.jsx("button",{className:"btn btn-outline",style:{fontSize:"0.82rem"},onClick:n,children:"📋 Past Challenges"})]}),g.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[r.map(a=>{var c,h,f,p;const u=nh[a.status]||nh.waiting;return g.jsx("button",{onClick:()=>t(a.id),className:"admin-card",style:{textAlign:"left",cursor:"pointer",border:"2px solid var(--border)",transition:"border-color 0.15s",width:"100%",background:"var(--surface)"},onMouseEnter:_=>_.currentTarget.style.borderColor="var(--primary)",onMouseLeave:_=>_.currentTarget.style.borderColor="var(--border)",children:g.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem"},children:[g.jsxs("div",{children:[g.jsx("div",{style:{fontFamily:"Fredoka One",fontSize:"1.6rem",color:"var(--primary)",letterSpacing:"0.12em",marginBottom:"0.25rem"},children:a.code}),g.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",display:"flex",gap:"1rem",flexWrap:"wrap"},children:[g.jsxs("span",{children:["📐 ",(c=a.config)==null?void 0:c.digits," digits"]}),g.jsxs("span",{children:["🔢 ",(h=a.config)==null?void 0:h.count," numbers"]}),g.jsxs("span",{children:["🎮 ",((f=a.config)==null?void 0:f.questionCount)??"?"," questions"]}),((p=a.createdAt)==null?void 0:p.toDate)&&g.jsxs("span",{children:["🕐 ",a.createdAt.toDate().toLocaleTimeString()]})]})]}),g.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:700,padding:"0.2rem 0.7rem",borderRadius:"999px",background:u.bg,color:u.color,whiteSpace:"nowrap"},children:["● ",u.label]})]})},a.id)}),r.length===0&&g.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem",padding:"0.5rem 0"},children:"No active challenges yet."}),g.jsxs("button",{onClick:e,className:"admin-card",style:{textAlign:"left",cursor:"pointer",border:"2px dashed var(--border)",background:"transparent",width:"100%",color:"var(--text-muted)",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[g.jsx("span",{style:{fontSize:"1.2rem"},children:"＋"}),"Create a new challenge"]})]})]})}function ZF(){const[t,e]=W.useState("loading"),[n,r]=W.useState(null),[i,s]=W.useState({}),[o,a]=W.useState(null);W.useEffect(()=>{const p=sessionStorage.getItem("monitoringChallengeId");if(!p){e("selecting");return}U0(p).then(_=>{if(_&&(_.status==="waiting"||_.status==="active")){const{adminState:v={},...S}=_;r(S),s(v),e("monitoring")}else sessionStorage.removeItem("monitoringChallengeId"),e("selecting")}).catch(()=>{sessionStorage.removeItem("monitoringChallengeId"),e("selecting")})},[]);async function u(p){e("loading");try{const _=await U0(p);if(!_){e("selecting");return}const{adminState:v={},...S}=_;r(S),s(v),sessionStorage.setItem("monitoringChallengeId",p),e("monitoring")}catch(_){console.error("Failed to load challenge:",_),e("selecting")}}function c(p){r(p),s({}),sessionStorage.setItem("monitoringChallengeId",p.id),e("monitoring")}function h(){sessionStorage.removeItem("monitoringChallengeId"),r(null),s({}),e("selecting")}function f(){sessionStorage.removeItem("monitoringChallengeId"),r(null),s({}),e("selecting")}return t==="loading"?g.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Loading..."}):t==="selecting"?g.jsx(JF,{onSelect:u,onCreateNew:()=>e("creating"),onPastChallenges:()=>e("past")}):t==="creating"?g.jsxs("div",{children:[g.jsx("button",{className:"btn btn-outline",style:{marginBottom:"1rem",fontSize:"0.82rem"},onClick:()=>e("selecting"),children:"← Back"}),g.jsx(BF,{onCreated:c})]}):t==="past"?g.jsx(XF,{onBack:()=>e("selecting"),onOpenDetail:p=>{a(p),e("past-detail")}}):t==="past-detail"?g.jsx(QF,{challenge:o,onBack:()=>e("past")}):g.jsx(GF,{challenge:n,questions:n.questions,restoredAdminState:i,onBack:h,onReset:f})}const ej=[{id:"students",label:"👥 Students"},{id:"compare",label:"⚔️ Compare"},{id:"challenge",label:"🏆 Challenge"}];function tj(){const{user:t,logOut:e}=$l(),[n,r]=W.useState("students");return g.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg)"},children:[g.jsxs("div",{style:{background:"white",borderBottom:"2px solid var(--border)",padding:"0.75rem 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsx("h1",{style:{fontFamily:"Fredoka One",fontSize:"1.4rem",color:"var(--primary)",margin:0},children:"🥷 Number Ninja Admin"}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[g.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:t==null?void 0:t.email}),g.jsx("button",{className:"btn btn-outline",onClick:e,children:"Sign out"})]})]}),g.jsx("div",{className:"tabs",style:{padding:"0 1.5rem",background:"white"},children:ej.map(i=>g.jsx("button",{className:`tab ${n===i.id?"active":""}`,onClick:()=>r(i.id),children:i.label},i.id))}),g.jsxs("div",{style:{padding:"1.5rem",maxWidth:"1500px",margin:"0 auto"},children:[n==="students"&&g.jsx(mF,{}),n==="compare"&&g.jsx(RF,{}),n==="challenge"&&g.jsx(ZF,{})]})]})}function nj(){const{user:t,isAdmin:e,signIn:n}=$l();return t===void 0?g.jsx("div",{className:"loader-wrap",children:g.jsxs("div",{className:"loader",children:[g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"}),g.jsx("span",{className:"loader-dot"})]})}):t?e?g.jsx(tj,{}):g.jsx(qV,{}):g.jsx("div",{className:"center-wrap",children:g.jsxs("div",{className:"card",style:{textAlign:"center",padding:"2.5rem"},children:[g.jsx("h1",{style:{fontFamily:"Fredoka One",fontSize:"2rem",marginBottom:"0.5rem"},children:"🥷 Admin Panel"}),g.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"2rem"},children:"Number Ninja — restricted access"}),g.jsx("button",{className:"btn btn-primary btn-full",onClick:n,children:"Sign in with Google"})]})})}function rj(){return g.jsx($V,{children:g.jsx(nj,{})})}If.createRoot(document.getElementById("root")).render(g.jsx(Vx.StrictMode,{children:g.jsx(rj,{})}));
