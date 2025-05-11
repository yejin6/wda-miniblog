(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function NP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var e_={exports:{}},Yc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb;function OP(){if(Cb)return Yc;Cb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var d in a)d!=="key"&&(o[d]=a[d])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Yc.Fragment=e,Yc.jsx=t,Yc.jsxs=t,Yc}var xb;function kP(){return xb||(xb=1,e_.exports=OP()),e_.exports}var $=kP(),t_={exports:{}},Wc={},n_={exports:{}},r_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db;function VP(){return Db||(Db=1,function(n){function e(he,Ie){var we=he.length;he.push(Ie);e:for(;0<we;){var Oe=we-1>>>1,O=he[Oe];if(0<a(O,Ie))he[Oe]=Ie,he[we]=O,we=Oe;else break e}}function t(he){return he.length===0?null:he[0]}function r(he){if(he.length===0)return null;var Ie=he[0],we=he.pop();if(we!==Ie){he[0]=we;e:for(var Oe=0,O=he.length,se=O>>>1;Oe<se;){var ge=2*(Oe+1)-1,pe=he[ge],fe=ge+1,xe=he[fe];if(0>a(pe,we))fe<O&&0>a(xe,pe)?(he[Oe]=xe,he[fe]=we,Oe=fe):(he[Oe]=pe,he[ge]=we,Oe=ge);else if(fe<O&&0>a(xe,we))he[Oe]=xe,he[fe]=we,Oe=fe;else break e}}return Ie}function a(he,Ie){var we=he.sortIndex-Ie.sortIndex;return we!==0?we:he.id-Ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],m=[],_=1,v=null,w=3,S=!1,x=!1,U=!1,M=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function K(he){for(var Ie=t(m);Ie!==null;){if(Ie.callback===null)r(m);else if(Ie.startTime<=he)r(m),Ie.sortIndex=Ie.expirationTime,e(p,Ie);else break;Ie=t(m)}}function oe(he){if(U=!1,K(he),!x)if(t(p)!==null)x=!0,Nt();else{var Ie=t(m);Ie!==null&&It(oe,Ie.startTime-he)}}var te=!1,le=-1,D=5,R=-1;function A(){return!(n.unstable_now()-R<D)}function P(){if(te){var he=n.unstable_now();R=he;var Ie=!0;try{e:{x=!1,U&&(U=!1,q(le),le=-1),S=!0;var we=w;try{t:{for(K(he),v=t(p);v!==null&&!(v.expirationTime>he&&A());){var Oe=v.callback;if(typeof Oe=="function"){v.callback=null,w=v.priorityLevel;var O=Oe(v.expirationTime<=he);if(he=n.unstable_now(),typeof O=="function"){v.callback=O,K(he),Ie=!0;break t}v===t(p)&&r(p),K(he)}else r(p);v=t(p)}if(v!==null)Ie=!0;else{var se=t(m);se!==null&&It(oe,se.startTime-he),Ie=!1}}break e}finally{v=null,w=we,S=!1}Ie=void 0}}finally{Ie?V():te=!1}}}var V;if(typeof X=="function")V=function(){X(P)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,N=B.port2;B.port1.onmessage=P,V=function(){N.postMessage(null)}}else V=function(){M(P,0)};function Nt(){te||(te=!0,V())}function It(he,Ie){le=M(function(){he(n.unstable_now())},Ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(he){he.callback=null},n.unstable_continueExecution=function(){x||S||(x=!0,Nt())},n.unstable_forceFrameRate=function(he){0>he||125<he?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<he?Math.floor(1e3/he):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(he){switch(w){case 1:case 2:case 3:var Ie=3;break;default:Ie=w}var we=w;w=Ie;try{return he()}finally{w=we}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(he,Ie){switch(he){case 1:case 2:case 3:case 4:case 5:break;default:he=3}var we=w;w=he;try{return Ie()}finally{w=we}},n.unstable_scheduleCallback=function(he,Ie,we){var Oe=n.unstable_now();switch(typeof we=="object"&&we!==null?(we=we.delay,we=typeof we=="number"&&0<we?Oe+we:Oe):we=Oe,he){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=we+O,he={id:_++,callback:Ie,priorityLevel:he,startTime:we,expirationTime:O,sortIndex:-1},we>Oe?(he.sortIndex=we,e(m,he),t(p)===null&&he===t(m)&&(U?(q(le),le=-1):U=!0,It(oe,we-Oe))):(he.sortIndex=O,e(p,he),x||S||(x=!0,Nt())),he},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(he){var Ie=w;return function(){var we=w;w=Ie;try{return he.apply(this,arguments)}finally{w=we}}}}(r_)),r_}var Pb;function MP(){return Pb||(Pb=1,n_.exports=VP()),n_.exports}var i_={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb;function LP(){if(Nb)return Ne;Nb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,U={};function M(O,se,ge){this.props=O,this.context=se,this.refs=U,this.updater=ge||S}M.prototype.isReactComponent={},M.prototype.setState=function(O,se){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,se,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function q(){}q.prototype=M.prototype;function X(O,se,ge){this.props=O,this.context=se,this.refs=U,this.updater=ge||S}var K=X.prototype=new q;K.constructor=X,x(K,M.prototype),K.isPureReactComponent=!0;var oe=Array.isArray,te={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function D(O,se,ge,pe,fe,xe){return ge=xe.ref,{$$typeof:n,type:O,key:se,ref:ge!==void 0?ge:null,props:xe}}function R(O,se){return D(O.type,se,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function P(O){var se={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return se[ge]})}var V=/\/+/g;function B(O,se){return typeof O=="object"&&O!==null&&O.key!=null?P(""+O.key):se.toString(36)}function N(){}function Nt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(se){O.status==="pending"&&(O.status="fulfilled",O.value=se)},function(se){O.status==="pending"&&(O.status="rejected",O.reason=se)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,se,ge,pe,fe){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var Ce=!1;if(O===null)Ce=!0;else switch(xe){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(O.$$typeof){case n:case e:Ce=!0;break;case _:return Ce=O._init,It(Ce(O._payload),se,ge,pe,fe)}}if(Ce)return fe=fe(O),Ce=pe===""?"."+B(O,0):pe,oe(fe)?(ge="",Ce!=null&&(ge=Ce.replace(V,"$&/")+"/"),It(fe,se,ge,"",function(Je){return Je})):fe!=null&&(A(fe)&&(fe=R(fe,ge+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(V,"$&/")+"/")+Ce)),se.push(fe)),1;Ce=0;var ut=pe===""?".":pe+":";if(oe(O))for(var Me=0;Me<O.length;Me++)pe=O[Me],xe=ut+B(pe,Me),Ce+=It(pe,se,ge,xe,fe);else if(Me=w(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(pe=O.next()).done;)pe=pe.value,xe=ut+B(pe,Me++),Ce+=It(pe,se,ge,xe,fe);else if(xe==="object"){if(typeof O.then=="function")return It(Nt(O),se,ge,pe,fe);throw se=String(O),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function he(O,se,ge){if(O==null)return O;var pe=[],fe=0;return It(O,pe,"","",function(xe){return se.call(ge,xe,fe++)}),pe}function Ie(O){if(O._status===-1){var se=O._result;se=se(),se.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=se)}if(O._status===1)return O._result.default;throw O._result}var we=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Oe(){}return Ne.Children={map:he,forEach:function(O,se,ge){he(O,function(){se.apply(this,arguments)},ge)},count:function(O){var se=0;return he(O,function(){se++}),se},toArray:function(O){return he(O,function(se){return se})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ne.Component=M,Ne.Fragment=t,Ne.Profiler=a,Ne.PureComponent=X,Ne.StrictMode=r,Ne.Suspense=p,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,Ne.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ne.cache=function(O){return function(){return O.apply(null,arguments)}},Ne.cloneElement=function(O,se,ge){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var pe=x({},O.props),fe=O.key,xe=void 0;if(se!=null)for(Ce in se.ref!==void 0&&(xe=void 0),se.key!==void 0&&(fe=""+se.key),se)!le.call(se,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&se.ref===void 0||(pe[Ce]=se[Ce]);var Ce=arguments.length-2;if(Ce===1)pe.children=ge;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];pe.children=ut}return D(O.type,fe,void 0,void 0,xe,pe)},Ne.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:o,_context:O},O},Ne.createElement=function(O,se,ge){var pe,fe={},xe=null;if(se!=null)for(pe in se.key!==void 0&&(xe=""+se.key),se)le.call(se,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(fe[pe]=se[pe]);var Ce=arguments.length-2;if(Ce===1)fe.children=ge;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];fe.children=ut}if(O&&O.defaultProps)for(pe in Ce=O.defaultProps,Ce)fe[pe]===void 0&&(fe[pe]=Ce[pe]);return D(O,xe,void 0,void 0,null,fe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(O){return{$$typeof:d,render:O}},Ne.isValidElement=A,Ne.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:Ie}},Ne.memo=function(O,se){return{$$typeof:m,type:O,compare:se===void 0?null:se}},Ne.startTransition=function(O){var se=te.T,ge={};te.T=ge;try{var pe=O(),fe=te.S;fe!==null&&fe(ge,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(Oe,we)}catch(xe){we(xe)}finally{te.T=se}},Ne.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},Ne.use=function(O){return te.H.use(O)},Ne.useActionState=function(O,se,ge){return te.H.useActionState(O,se,ge)},Ne.useCallback=function(O,se){return te.H.useCallback(O,se)},Ne.useContext=function(O){return te.H.useContext(O)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(O,se){return te.H.useDeferredValue(O,se)},Ne.useEffect=function(O,se){return te.H.useEffect(O,se)},Ne.useId=function(){return te.H.useId()},Ne.useImperativeHandle=function(O,se,ge){return te.H.useImperativeHandle(O,se,ge)},Ne.useInsertionEffect=function(O,se){return te.H.useInsertionEffect(O,se)},Ne.useLayoutEffect=function(O,se){return te.H.useLayoutEffect(O,se)},Ne.useMemo=function(O,se){return te.H.useMemo(O,se)},Ne.useOptimistic=function(O,se){return te.H.useOptimistic(O,se)},Ne.useReducer=function(O,se,ge){return te.H.useReducer(O,se,ge)},Ne.useRef=function(O){return te.H.useRef(O)},Ne.useState=function(O){return te.H.useState(O)},Ne.useSyncExternalStore=function(O,se,ge){return te.H.useSyncExternalStore(O,se,ge)},Ne.useTransition=function(){return te.H.useTransition()},Ne.version="19.0.0",Ne}var Ob;function xv(){return Ob||(Ob=1,i_.exports=LP()),i_.exports}var s_={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb;function UP(){if(kb)return wn;kb=1;var n=xv();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return o(p,m,null,_)},wn.flushSync=function(p){var m=u.T,_=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=_,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):_==="script"&&r.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,_){return u.H.useFormState(p,m,_)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var Vb;function zP(){if(Vb)return s_.exports;Vb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),s_.exports=UP(),s_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function BP(){if(Mb)return Wc;Mb=1;var n=MP(),e=xv(),t=zP();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=te&&i[te]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case U:return"Suspense";case M:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case x:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case q:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case X:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=Object.assign,V,B;function N(i){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||"",B=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+i+B}var Nt=!1;function It(i,s){if(!i||Nt)return"";Nt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var re=function(){throw Error()};if(Object.defineProperty(re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(re,[])}catch(J){var G=J}Reflect.construct(i,[],re)}else{try{re.call()}catch(J){G=J}i.call(re.prototype)}}else{try{throw Error()}catch(J){G=J}(re=i())&&typeof re.catch=="function"&&re.catch(function(){})}}catch(J){if(J&&G&&typeof J.stack=="string")return[J.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),L=b.split(`
`);for(f=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;f<L.length&&!L[f].includes("DetermineComponentFrameRoot");)f++;if(c===C.length||f===L.length)for(c=C.length-1,f=L.length-1;1<=c&&0<=f&&C[c]!==L[f];)f--;for(;1<=c&&0<=f;c--,f--)if(C[c]!==L[f]){if(c!==1||f!==1)do if(c--,f--,0>f||C[c]!==L[f]){var Z=`
`+C[c].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=c&&0<=f);break}}}finally{Nt=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?N(l):""}function he(i){switch(i.tag){case 26:case 27:case 5:return N(i.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return i=It(i.type,!1),i;case 11:return i=It(i.type.render,!1),i;case 1:return i=It(i.type,!0),i;default:return""}}function Ie(i){try{var s="";do s+=he(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function we(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Oe(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(we(i)!==i)throw Error(r(188))}function se(i){var s=i.alternate;if(!s){if(s=we(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){l=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return O(f),i;if(g===c)return O(f),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===l){T=!0,l=f,c=g;break}if(b===c){T=!0,c=f,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=f;break}if(b===c){T=!0,c=g,l=f;break}b=b.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function ge(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=ge(i),s!==null)return s;i=i.sibling}return null}var pe=Array.isArray,fe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe={pending:!1,data:null,method:null,action:null},Ce=[],ut=-1;function Me(i){return{current:i}}function Je(i){0>ut||(i.current=Ce[ut],Ce[ut]=null,ut--)}function Ke(i,s){ut++,Ce[ut]=i.current,i.current=s}var Ut=Me(null),Zt=Me(null),rr=Me(null),as=Me(null);function os(i,s){switch(Ke(rr,s),Ke(Zt,i),Ke(Ut,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?rb(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=rb(i),s=ib(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Je(Ut),Ke(Ut,s)}function yi(){Je(Ut),Je(Zt),Je(rr)}function Hu(i){i.memoizedState!==null&&Ke(as,i);var s=Ut.current,l=ib(s,i.type);s!==l&&(Ke(Zt,i),Ke(Ut,l))}function jo(i){Zt.current===i&&(Je(Ut),Je(Zt)),as.current===i&&(Je(as),Hc._currentValue=xe)}var qo=Object.prototype.hasOwnProperty,Aa=n.unstable_scheduleCallback,Ho=n.unstable_cancelCallback,ng=n.unstable_shouldYield,$u=n.unstable_requestPaint,Ln=n.unstable_now,xd=n.unstable_getCurrentPriorityLevel,$t=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,_i=n.unstable_NormalPriority,Dd=n.unstable_LowPriority,Gu=n.unstable_IdlePriority,rg=n.log,Sa=n.unstable_setDisableYieldValue,ls=null,En=null;function Ku(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ls,i,void 0,(i.current.flags&128)===128)}catch{}}function Vr(i){if(typeof rg=="function"&&Sa(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(ls,i)}catch{}}var Rn=Math.clz32?Math.clz32:Nd,Qu=Math.log,Pd=Math.LN2;function Nd(i){return i>>>=0,i===0?32:31-(Qu(i)/Pd|0)|0}var Mr=128,us=4194304;function Ir(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ir(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,f=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=Ir(l):(g&=b,g!==0?c=Ir(g):i||(T=b&~T,T!==0&&(c=Ir(T))))):(b=l&~f,b!==0?c=Ir(b):g!==0?c=Ir(g):i||(T=l&~T,T!==0&&(c=Ir(T)))),c===0?0:s!==0&&s!==c&&(s&f)===0&&(f=c&-c,T=s&-s,f>=T||f===32&&(T&4194176)!==0)?s:c}function cs(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function $o(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yu(){var i=Mr;return Mr<<=1,(Mr&4194176)===0&&(Mr=128),i}function hs(){var i=us;return us<<=1,(us&62914560)===0&&(us=4194304),i}function Go(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ot(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Od(i,s,l,c,f,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,L=i.hiddenUpdates;for(l=T&~l;0<l;){var Z=31-Rn(l),re=1<<Z;b[Z]=0,C[Z]=-1;var G=L[Z];if(G!==null)for(L[Z]=null,Z=0;Z<G.length;Z++){var J=G[Z];J!==null&&(J.lane&=-536870913)}l&=~re}c!==0&&ds(i,c,0),g!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ds(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Rn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194218}function fs(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Rn(l),f=1<<c;f&s|i[c]&s&&(i[c]|=s),l&=~f}}function kd(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Vd(){var i=fe.p;return i!==0?i:(i=window.event,i===void 0?32:wb(i.type))}function ps(i,s){var l=fe.p;try{return fe.p=i,s()}finally{fe.p=l}}var Lr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Lr,Gt="__reactProps$"+Lr,vi="__reactContainer$"+Lr,Ra="__reactEvents$"+Lr,Ko="__reactListeners$"+Lr,Ur="__reactHandles$"+Lr,Wu="__reactResources$"+Lr,ms="__reactMarker$"+Lr;function Ca(i){delete i[tn],delete i[Gt],delete i[Ra],delete i[Ko],delete i[Ur]}function Ar(i){var s=i[tn];if(s)return s;for(var l=i.parentNode;l;){if(s=l[vi]||l[tn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=ob(i);i!==null;){if(l=i[tn])return l;i=ob(i)}return s}i=l,l=i.parentNode}return null}function Ei(i){if(i=i[tn]||i[vi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function gs(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function ys(i){var s=i[Wu];return s||(s=i[Wu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function yt(i){i[ms]=!0}var Xu=new Set,Qo={};function $n(i,s){Un(i,s),Un(i+"Capture",s)}function Un(i,s){for(Qo[i]=s,i=0;i<s.length;i++)Xu.add(s[i])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ig=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ju={},Zu={};function Md(i){return qo.call(Zu,i)?!0:qo.call(Ju,i)?!1:ig.test(i)?Zu[i]=!0:(Ju[i]=!0,!1)}function _s(i,s,l){if(Md(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function vs(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function sr(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ld(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function sg(i){var s=Ld(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function xa(i){i._valueTracker||(i._valueTracker=sg(i))}function ec(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Ld(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Yo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Ti=/[\n"\\]/g;function At(i){return i.replace(Ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Es(i,s,l,c,f,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Wo(i,T,Cn(s)):l!=null?Wo(i,T,Cn(l)):c!=null&&i.removeAttribute("value"),f==null&&g!=null&&(i.defaultChecked=!!g),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+Cn(b):i.removeAttribute("name")}function Da(i,s,l,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+Cn(l):"",s=s!=null?""+Cn(s):l,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Wo(i,s,l){s==="number"&&Yo(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function Qe(i,s,l,c){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Cn(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Pa(i,s,l){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+Cn(l):""}function Ts(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(pe(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=Cn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function ar(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var ag=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tc(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||ag.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function Ud(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&l[f]!==c&&tc(i,f,c)}else for(var g in s)s.hasOwnProperty(g)&&tc(i,g,s[g])}function nc(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var og=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zr(i){return lg.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var or=null;function Xo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var wi=null,bi=null;function Ii(i){var s=Ei(i);if(s&&(i=s.stateNode)){var l=i[Gt]||null;e:switch(i=s.stateNode,s.type){case"input":if(Es(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var f=c[Gt]||null;if(!f)throw Error(r(90));Es(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&ec(c)}break e;case"textarea":Pa(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&Qe(i,!!l.multiple,s,!1)}}}var rc=!1;function zd(i,s,l){if(rc)return i(s,l);rc=!0;try{var c=i(s);return c}finally{if(rc=!1,(wi!==null||bi!==null)&&(Pf(),wi&&(s=wi,i=bi,bi=wi=null,Ii(s),i)))for(s=0;s<i.length;s++)Ii(i[s])}}function Na(i,s){var l=i.stateNode;if(l===null)return null;var c=l[Gt]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var lr=!1;if(Gn)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){lr=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{lr=!1}var Br=null,ws=null,Ai=null;function ic(){if(Ai)return Ai;var i,s=ws,l=s.length,c,f="value"in Br?Br.value:Br.textContent,g=f.length;for(i=0;i<l&&s[i]===f[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===f[g-c];c++);return Ai=f.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function jr(){return!0}function sc(){return!1}function nn(i){function s(l,c,f,g,T){this._reactName=l,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(l=i[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?jr:sc,this.isPropagationStopped=sc,this}return P(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),s}var Ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=nn(Ze),ka=P({},Ze,{view:0,detail:0}),Bd=nn(ka),Zo,el,qr,Va=P({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==qr&&(qr&&i.type==="mousemove"?(Zo=i.screenX-qr.screenX,el=i.screenY-qr.screenY):el=Zo=0,qr=i),Zo)},movementY:function(i){return"movementY"in i?i.movementY:el}}),ur=nn(Va),Fd=P({},Va,{dataTransfer:0}),ug=nn(Fd),Ma=P({},ka,{relatedTarget:0}),tl=nn(Ma),ac=P({},Ze,{animationName:0,elapsedTime:0,pseudoElement:0}),nl=nn(ac),jd=P({},Ze,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),rl=nn(jd),cg=P({},Ze,{data:0}),oc=nn(cg),La={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Hd[i])?!!s[i]:!1}function Ua(){return lc}var $d=P({},ka,{key:function(i){if(i.key){var s=La[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?qd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),il=nn($d),Gd=P({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uc=nn(Gd),Si=P({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),Kd=nn(Si),Qd=P({},Ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yd=nn(Qd),Wd=P({},Va,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),sl=nn(Wd),xn=P({},Ze,{newState:0,oldState:0}),Xd=nn(xn),Jd=[9,13,27,32],Hr=Gn&&"CompositionEvent"in window,h=null;Gn&&"documentMode"in document&&(h=document.documentMode);var y=Gn&&"TextEvent"in window&&!h,E=Gn&&(!Hr||h&&8<h&&11>=h),I=" ",F=!1;function Y(i,s){switch(i){case"keyup":return Jd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qe=!1;function Kt(i,s){switch(i){case"compositionend":return ue(s);case"keypress":return s.which!==32?null:(F=!0,I);case"textInput":return i=s.data,i===I&&F?null:i;default:return null}}function He(i,s){if(qe)return i==="compositionend"||!Hr&&Y(i,s)?(i=ic(),Ai=ws=Br=null,qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!rn[i.type]:s==="textarea"}function Ri(i,s,l,c){wi?bi?bi.push(c):bi=[c]:wi=c,s=Mf(s,"onChange"),0<s.length&&(l=new Jo("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var dn=null,$r=null;function cc(i){Jw(i,0)}function Zd(i){var s=gs(i);if(ec(s))return i}function RT(i,s){if(i==="change")return s}var CT=!1;if(Gn){var hg;if(Gn){var dg="oninput"in document;if(!dg){var xT=document.createElement("div");xT.setAttribute("oninput","return;"),dg=typeof xT.oninput=="function"}hg=dg}else hg=!1;CT=hg&&(!document.documentMode||9<document.documentMode)}function DT(){dn&&(dn.detachEvent("onpropertychange",PT),$r=dn=null)}function PT(i){if(i.propertyName==="value"&&Zd($r)){var s=[];Ri(s,$r,i,Xo(i)),zd(cc,s)}}function lD(i,s,l){i==="focusin"?(DT(),dn=s,$r=l,dn.attachEvent("onpropertychange",PT)):i==="focusout"&&DT()}function uD(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Zd($r)}function cD(i,s){if(i==="click")return Zd(s)}function hD(i,s){if(i==="input"||i==="change")return Zd(s)}function dD(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:dD;function hc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var f=l[c];if(!qo.call(s,f)||!Kn(i[f],s[f]))return!1}return!0}function NT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function OT(i,s){var l=NT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=NT(l)}}function kT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?kT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function VT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Yo(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Yo(i.document)}return s}function fg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function fD(i,s){var l=VT(s);s=i.focusedElem;var c=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&kT(s.ownerDocument.documentElement,s)){if(c!==null&&fg(s)){if(i=c.start,l=c.end,l===void 0&&(l=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(l,s.value.length);else if(l=(i=s.ownerDocument||document)&&i.defaultView||window,l.getSelection){l=l.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!l.extend&&g>c&&(f=c,c=g,g=f),f=OT(s,g);var T=OT(s,c);f&&T&&(l.rangeCount!==1||l.anchorNode!==f.node||l.anchorOffset!==f.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),l.removeAllRanges(),g>c?(l.addRange(i),l.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),l.addRange(i)))}}for(i=[],l=s;l=l.parentNode;)l.nodeType===1&&i.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)l=i[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var pD=Gn&&"documentMode"in document&&11>=document.documentMode,al=null,pg=null,dc=null,mg=!1;function MT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;mg||al==null||al!==Yo(c)||(c=al,"selectionStart"in c&&fg(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),dc&&hc(dc,c)||(dc=c,c=Mf(pg,"onSelect"),0<c.length&&(s=new Jo("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=al)))}function za(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var ol={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},gg={},LT={};Gn&&(LT=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function Ba(i){if(gg[i])return gg[i];if(!ol[i])return i;var s=ol[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in LT)return gg[i]=s[l];return i}var UT=Ba("animationend"),zT=Ba("animationiteration"),BT=Ba("animationstart"),mD=Ba("transitionrun"),gD=Ba("transitionstart"),yD=Ba("transitioncancel"),FT=Ba("transitionend"),jT=new Map,qT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(i,s){jT.set(i,s),$n(s,[i])}var cr=[],ll=0,yg=0;function ef(){for(var i=ll,s=yg=ll=0;s<i;){var l=cr[s];cr[s++]=null;var c=cr[s];cr[s++]=null;var f=cr[s];cr[s++]=null;var g=cr[s];if(cr[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&HT(l,f,g)}}function tf(i,s,l,c){cr[ll++]=i,cr[ll++]=s,cr[ll++]=l,cr[ll++]=c,yg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function _g(i,s,l,c){return tf(i,s,l,c),nf(i)}function bs(i,s){return tf(i,null,null,s),nf(i)}function HT(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var f=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(f=!0)),i=g,g=g.return;f&&s!==null&&i.tag===3&&(g=i.stateNode,f=31-Rn(l),g=g.hiddenUpdates,i=g[f],i===null?g[f]=[s]:i.push(s),s.lane=l|536870912)}function nf(i){if(50<Lc)throw Lc=0,Iy=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var ul={},$T=new WeakMap;function hr(i,s){if(typeof i=="object"&&i!==null){var l=$T.get(i);return l!==void 0?l:(s={value:i,source:s,stack:Ie(s)},$T.set(i,s),s)}return{value:i,source:s,stack:Ie(s)}}var cl=[],hl=0,rf=null,sf=0,dr=[],fr=0,Fa=null,Ci=1,xi="";function ja(i,s){cl[hl++]=sf,cl[hl++]=rf,rf=i,sf=s}function GT(i,s,l){dr[fr++]=Ci,dr[fr++]=xi,dr[fr++]=Fa,Fa=i;var c=Ci;i=xi;var f=32-Rn(c)-1;c&=~(1<<f),l+=1;var g=32-Rn(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ci=1<<32-Rn(s)+f|l<<f|c,xi=g+i}else Ci=1<<g|l<<f|c,xi=i}function vg(i){i.return!==null&&(ja(i,1),GT(i,1,0))}function Eg(i){for(;i===rf;)rf=cl[--hl],cl[hl]=null,sf=cl[--hl],cl[hl]=null;for(;i===Fa;)Fa=dr[--fr],dr[fr]=null,xi=dr[--fr],dr[fr]=null,Ci=dr[--fr],dr[fr]=null}var Dn=null,fn=null,Ye=!1,Rr=null,Gr=!1,Tg=Error(r(519));function qa(i){var s=Error(r(418,""));throw mc(hr(s,i)),Tg}function KT(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[tn]=i,s[Gt]=c,l){case"dialog":je("cancel",s),je("close",s);break;case"iframe":case"object":case"embed":je("load",s);break;case"video":case"audio":for(l=0;l<zc.length;l++)je(zc[l],s);break;case"source":je("error",s);break;case"img":case"image":case"link":je("error",s),je("load",s);break;case"details":je("toggle",s);break;case"input":je("invalid",s),Da(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),xa(s);break;case"select":je("invalid",s);break;case"textarea":je("invalid",s),Ts(s,c.value,c.defaultValue,c.children),xa(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||nb(s.textContent,l)?(c.popover!=null&&(je("beforetoggle",s),je("toggle",s)),c.onScroll!=null&&je("scroll",s),c.onScrollEnd!=null&&je("scrollend",s),c.onClick!=null&&(s.onclick=Lf),s=!0):s=!1,s||qa(i)}function QT(i){for(Dn=i.return;Dn;)switch(Dn.tag){case 3:case 27:Gr=!0;return;case 5:case 13:Gr=!1;return;default:Dn=Dn.return}}function fc(i){if(i!==Dn)return!1;if(!Ye)return QT(i),Ye=!0,!1;var s=!1,l;if((l=i.tag!==3&&i.tag!==27)&&((l=i.tag===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||Fy(i.type,i.memoizedProps)),l=!l),l&&(s=!0),s&&fn&&qa(i),QT(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){fn=xr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}fn=null}}else fn=Dn?xr(i.stateNode.nextSibling):null;return!0}function pc(){fn=Dn=null,Ye=!1}function mc(i){Rr===null?Rr=[i]:Rr.push(i)}var gc=Error(r(460)),YT=Error(r(474)),wg={then:function(){}};function WT(i){return i=i.status,i==="fulfilled"||i==="rejected"}function af(){}function XT(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(af,af),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===gc?Error(r(483)):i;default:if(typeof s.status=="string")s.then(af,af);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===gc?Error(r(483)):i}throw yc=s,gc}}var yc=null;function JT(){if(yc===null)throw Error(r(459));var i=yc;return yc=null,i}var dl=null,_c=0;function of(i){var s=_c;return _c+=1,dl===null&&(dl=[]),XT(dl,i,s)}function vc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function lf(i,s){throw s.$$typeof===o?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function ZT(i){var s=i._init;return s(i._payload)}function e0(i){function s(z,k){if(i){var H=z.deletions;H===null?(z.deletions=[k],z.flags|=16):H.push(k)}}function l(z,k){if(!i)return null;for(;k!==null;)s(z,k),k=k.sibling;return null}function c(z){for(var k=new Map;z!==null;)z.key!==null?k.set(z.key,z):k.set(z.index,z),z=z.sibling;return k}function f(z,k){return z=Vs(z,k),z.index=0,z.sibling=null,z}function g(z,k,H){return z.index=H,i?(H=z.alternate,H!==null?(H=H.index,H<k?(z.flags|=33554434,k):H):(z.flags|=33554434,k)):(z.flags|=1048576,k)}function T(z){return i&&z.alternate===null&&(z.flags|=33554434),z}function b(z,k,H,ee){return k===null||k.tag!==6?(k=gy(H,z.mode,ee),k.return=z,k):(k=f(k,H),k.return=z,k)}function C(z,k,H,ee){var ye=H.type;return ye===p?Z(z,k,H.props.children,ee,H.key):k!==null&&(k.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===X&&ZT(ye)===k.type)?(k=f(k,H.props),vc(k,H),k.return=z,k):(k=Sf(H.type,H.key,H.props,null,z.mode,ee),vc(k,H),k.return=z,k)}function L(z,k,H,ee){return k===null||k.tag!==4||k.stateNode.containerInfo!==H.containerInfo||k.stateNode.implementation!==H.implementation?(k=yy(H,z.mode,ee),k.return=z,k):(k=f(k,H.children||[]),k.return=z,k)}function Z(z,k,H,ee,ye){return k===null||k.tag!==7?(k=Za(H,z.mode,ee,ye),k.return=z,k):(k=f(k,H),k.return=z,k)}function re(z,k,H){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=gy(""+k,z.mode,H),k.return=z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case u:return H=Sf(k.type,k.key,k.props,null,z.mode,H),vc(H,k),H.return=z,H;case d:return k=yy(k,z.mode,H),k.return=z,k;case X:var ee=k._init;return k=ee(k._payload),re(z,k,H)}if(pe(k)||le(k))return k=Za(k,z.mode,H,null),k.return=z,k;if(typeof k.then=="function")return re(z,of(k),H);if(k.$$typeof===S)return re(z,bf(z,k),H);lf(z,k)}return null}function G(z,k,H,ee){var ye=k!==null?k.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ye!==null?null:b(z,k,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case u:return H.key===ye?C(z,k,H,ee):null;case d:return H.key===ye?L(z,k,H,ee):null;case X:return ye=H._init,H=ye(H._payload),G(z,k,H,ee)}if(pe(H)||le(H))return ye!==null?null:Z(z,k,H,ee,null);if(typeof H.then=="function")return G(z,k,of(H),ee);if(H.$$typeof===S)return G(z,k,bf(z,H),ee);lf(z,H)}return null}function J(z,k,H,ee,ye){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return z=z.get(H)||null,b(k,z,""+ee,ye);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return z=z.get(ee.key===null?H:ee.key)||null,C(k,z,ee,ye);case d:return z=z.get(ee.key===null?H:ee.key)||null,L(k,z,ee,ye);case X:var Le=ee._init;return ee=Le(ee._payload),J(z,k,H,ee,ye)}if(pe(ee)||le(ee))return z=z.get(H)||null,Z(k,z,ee,ye,null);if(typeof ee.then=="function")return J(z,k,H,of(ee),ye);if(ee.$$typeof===S)return J(z,k,H,bf(k,ee),ye);lf(k,ee)}return null}function Ee(z,k,H,ee){for(var ye=null,Le=null,be=k,Se=k=0,on=null;be!==null&&Se<H.length;Se++){be.index>Se?(on=be,be=null):on=be.sibling;var We=G(z,be,H[Se],ee);if(We===null){be===null&&(be=on);break}i&&be&&We.alternate===null&&s(z,be),k=g(We,k,Se),Le===null?ye=We:Le.sibling=We,Le=We,be=on}if(Se===H.length)return l(z,be),Ye&&ja(z,Se),ye;if(be===null){for(;Se<H.length;Se++)be=re(z,H[Se],ee),be!==null&&(k=g(be,k,Se),Le===null?ye=be:Le.sibling=be,Le=be);return Ye&&ja(z,Se),ye}for(be=c(be);Se<H.length;Se++)on=J(be,z,Se,H[Se],ee),on!==null&&(i&&on.alternate!==null&&be.delete(on.key===null?Se:on.key),k=g(on,k,Se),Le===null?ye=on:Le.sibling=on,Le=on);return i&&be.forEach(function(js){return s(z,js)}),Ye&&ja(z,Se),ye}function De(z,k,H,ee){if(H==null)throw Error(r(151));for(var ye=null,Le=null,be=k,Se=k=0,on=null,We=H.next();be!==null&&!We.done;Se++,We=H.next()){be.index>Se?(on=be,be=null):on=be.sibling;var js=G(z,be,We.value,ee);if(js===null){be===null&&(be=on);break}i&&be&&js.alternate===null&&s(z,be),k=g(js,k,Se),Le===null?ye=js:Le.sibling=js,Le=js,be=on}if(We.done)return l(z,be),Ye&&ja(z,Se),ye;if(be===null){for(;!We.done;Se++,We=H.next())We=re(z,We.value,ee),We!==null&&(k=g(We,k,Se),Le===null?ye=We:Le.sibling=We,Le=We);return Ye&&ja(z,Se),ye}for(be=c(be);!We.done;Se++,We=H.next())We=J(be,z,Se,We.value,ee),We!==null&&(i&&We.alternate!==null&&be.delete(We.key===null?Se:We.key),k=g(We,k,Se),Le===null?ye=We:Le.sibling=We,Le=We);return i&&be.forEach(function(PP){return s(z,PP)}),Ye&&ja(z,Se),ye}function Ct(z,k,H,ee){if(typeof H=="object"&&H!==null&&H.type===p&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case u:e:{for(var ye=H.key;k!==null;){if(k.key===ye){if(ye=H.type,ye===p){if(k.tag===7){l(z,k.sibling),ee=f(k,H.props.children),ee.return=z,z=ee;break e}}else if(k.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===X&&ZT(ye)===k.type){l(z,k.sibling),ee=f(k,H.props),vc(ee,H),ee.return=z,z=ee;break e}l(z,k);break}else s(z,k);k=k.sibling}H.type===p?(ee=Za(H.props.children,z.mode,ee,H.key),ee.return=z,z=ee):(ee=Sf(H.type,H.key,H.props,null,z.mode,ee),vc(ee,H),ee.return=z,z=ee)}return T(z);case d:e:{for(ye=H.key;k!==null;){if(k.key===ye)if(k.tag===4&&k.stateNode.containerInfo===H.containerInfo&&k.stateNode.implementation===H.implementation){l(z,k.sibling),ee=f(k,H.children||[]),ee.return=z,z=ee;break e}else{l(z,k);break}else s(z,k);k=k.sibling}ee=yy(H,z.mode,ee),ee.return=z,z=ee}return T(z);case X:return ye=H._init,H=ye(H._payload),Ct(z,k,H,ee)}if(pe(H))return Ee(z,k,H,ee);if(le(H)){if(ye=le(H),typeof ye!="function")throw Error(r(150));return H=ye.call(H),De(z,k,H,ee)}if(typeof H.then=="function")return Ct(z,k,of(H),ee);if(H.$$typeof===S)return Ct(z,k,bf(z,H),ee);lf(z,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,k!==null&&k.tag===6?(l(z,k.sibling),ee=f(k,H),ee.return=z,z=ee):(l(z,k),ee=gy(H,z.mode,ee),ee.return=z,z=ee),T(z)):l(z,k)}return function(z,k,H,ee){try{_c=0;var ye=Ct(z,k,H,ee);return dl=null,ye}catch(be){if(be===gc)throw be;var Le=yr(29,be,null,z.mode);return Le.lanes=ee,Le.return=z,Le}finally{}}}var Ha=e0(!0),t0=e0(!1),fl=Me(null),uf=Me(0);function n0(i,s){i=Bi,Ke(uf,i),Ke(fl,s),Bi=i|s.baseLanes}function bg(){Ke(uf,Bi),Ke(fl,fl.current)}function Ig(){Bi=uf.current,Je(fl),Je(uf)}var pr=Me(null),Kr=null;function Is(i){var s=i.alternate;Ke(Yt,Yt.current&1),Ke(pr,i),Kr===null&&(s===null||fl.current!==null||s.memoizedState!==null)&&(Kr=i)}function r0(i){if(i.tag===22){if(Ke(Yt,Yt.current),Ke(pr,i),Kr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Kr=i)}}else As()}function As(){Ke(Yt,Yt.current),Ke(pr,pr.current)}function Di(i){Je(pr),Kr===i&&(Kr=null),Je(Yt)}var Yt=Me(0);function cf(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _D=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},vD=n.unstable_scheduleCallback,ED=n.unstable_NormalPriority,Wt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ag(){return{controller:new _D,data:new Map,refCount:0}}function Ec(i){i.refCount--,i.refCount===0&&vD(ED,function(){i.controller.abort()})}var Tc=null,Sg=0,pl=0,ml=null;function TD(i,s){if(Tc===null){var l=Tc=[];Sg=0,pl=Ny(),ml={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Sg++,s.then(i0,i0),s}function i0(){if(--Sg===0&&Tc!==null){ml!==null&&(ml.status="fulfilled");var i=Tc;Tc=null,pl=0,ml=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function wD(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<l.length;f++)(0,l[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),c}var s0=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&TD(i,s),s0!==null&&s0(i,s)};var $a=Me(null);function Rg(){var i=$a.current;return i!==null?i:at.pooledCache}function hf(i,s){s===null?Ke($a,$a.current):Ke($a,s.pool)}function a0(){var i=Rg();return i===null?null:{parent:Wt._currentValue,pool:i}}var Ss=0,Ve=null,rt=null,zt=null,df=!1,gl=!1,Ga=!1,ff=0,wc=0,yl=null,bD=0;function kt(){throw Error(r(321))}function Cg(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function xg(i,s,l,c,f,g){return Ss=g,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?Ka:Rs,Ga=!1,g=l(c,f),Ga=!1,gl&&(g=l0(s,l,c,f)),o0(i),g}function o0(i){A.H=Qr;var s=rt!==null&&rt.next!==null;if(Ss=0,zt=rt=Ve=null,df=!1,wc=0,yl=null,s)throw Error(r(300));i===null||sn||(i=i.dependencies,i!==null&&wf(i)&&(sn=!0))}function l0(i,s,l,c){Ve=i;var f=0;do{if(gl&&(yl=null),wc=0,gl=!1,25<=f)throw Error(r(301));if(f+=1,zt=rt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Qa,g=s(l,c)}while(gl);return g}function ID(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?bc(s):s,i=i.useState()[0],(rt!==null?rt.memoizedState:null)!==i&&(Ve.flags|=1024),s}function Dg(){var i=ff!==0;return ff=0,i}function Pg(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function Ng(i){if(df){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}df=!1}Ss=0,zt=rt=Ve=null,gl=!1,wc=ff=0,yl=null}function zn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Ve.memoizedState=zt=i:zt=zt.next=i,zt}function Bt(){if(rt===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=rt.next;var s=zt===null?Ve.memoizedState:zt.next;if(s!==null)zt=s,rt=i;else{if(i===null)throw Ve.alternate===null?Error(r(467)):Error(r(310));rt=i,i={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},zt===null?Ve.memoizedState=zt=i:zt=zt.next=i}return zt}var pf;pf=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function bc(i){var s=wc;return wc+=1,yl===null&&(yl=[]),i=XT(yl,i,s),s=Ve,(zt===null?s.memoizedState:zt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?Ka:Rs),i}function mf(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return bc(i);if(i.$$typeof===S)return Tn(i)}throw Error(r(438,String(i)))}function Og(i){var s=null,l=Ve.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=pf(),Ve.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=oe;return s.index++,l}function Pi(i,s){return typeof s=="function"?s(i):s}function gf(i){var s=Bt();return kg(s,rt,i)}function kg(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var f=i.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=i.baseState,f===null)i.memoizedState=g;else{s=f.next;var b=T=null,C=null,L=s,Z=!1;do{var re=L.lane&-536870913;if(re!==L.lane?($e&re)===re:(Ss&re)===re){var G=L.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),re===pl&&(Z=!0);else if((Ss&G)===G){L=L.next,G===pl&&(Z=!0);continue}else re={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},C===null?(b=C=re,T=g):C=C.next=re,Ve.lanes|=G,Ms|=G;re=L.action,Ga&&l(g,re),g=L.hasEagerState?L.eagerState:l(g,re)}else G={lane:re,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},C===null?(b=C=G,T=g):C=C.next=G,Ve.lanes|=re,Ms|=re;L=L.next}while(L!==null&&L!==s);if(C===null?T=g:C.next=b,!Kn(g,i.memoizedState)&&(sn=!0,Z&&(l=ml,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Vg(i){var s=Bt(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var T=f=f.next;do g=i(g,T.action),T=T.next;while(T!==f);Kn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function u0(i,s,l){var c=Ve,f=Bt(),g=Ye;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Kn((rt||f).memoizedState,l);if(T&&(f.memoizedState=l,sn=!0),f=f.queue,Ug(d0.bind(null,c,f,i),[i]),f.getSnapshot!==s||T||zt!==null&&zt.memoizedState.tag&1){if(c.flags|=2048,_l(9,h0.bind(null,c,f,l,s),{destroy:void 0},null),at===null)throw Error(r(349));g||(Ss&60)!==0||c0(c,s,l)}return l}function c0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Ve.updateQueue,s===null?(s=pf(),Ve.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function h0(i,s,l,c){s.value=l,s.getSnapshot=c,f0(s)&&p0(i)}function d0(i,s,l){return l(function(){f0(s)&&p0(i)})}function f0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function p0(i){var s=bs(i,2);s!==null&&Pn(s,i,2)}function Mg(i){var s=zn();if(typeof i=="function"){var l=i;if(i=l(),Ga){Vr(!0);try{l()}finally{Vr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:i},s}function m0(i,s,l,c){return i.baseState=l,kg(i,rt,typeof c=="function"?c:Pi)}function AD(i,s,l,c,f){if(vf(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,g0(s,g)):(g.next=l.next,s.pending=l.next=g)}}function g0(i,s){var l=s.action,c=s.payload,f=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=l(f,c),C=A.S;C!==null&&C(T,b),y0(i,s,b)}catch(L){Lg(i,s,L)}finally{A.T=g}}else try{g=l(f,c),y0(i,s,g)}catch(L){Lg(i,s,L)}}function y0(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){_0(i,s,c)},function(c){return Lg(i,s,c)}):_0(i,s,l)}function _0(i,s,l){s.status="fulfilled",s.value=l,v0(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,g0(i,l)))}function Lg(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,v0(s),s=s.next;while(s!==c)}i.action=null}function v0(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function E0(i,s){return s}function T0(i,s){if(Ye){var l=at.formState;if(l!==null){e:{var c=Ve;if(Ye){if(fn){t:{for(var f=fn,g=Gr;f.nodeType!==8;){if(!g){f=null;break t}if(f=xr(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){fn=xr(f.nextSibling),c=f.data==="F!";break e}}qa(c)}c=!1}c&&(s=l[0])}}return l=zn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E0,lastRenderedState:s},l.queue=c,l=z0.bind(null,Ve,c),c.dispatch=l,c=Mg(!1),g=qg.bind(null,Ve,!1,c.queue),c=zn(),f={state:s,dispatch:null,action:i,pending:null},c.queue=f,l=AD.bind(null,Ve,f,g,l),f.dispatch=l,c.memoizedState=i,[s,l,!1]}function w0(i){var s=Bt();return b0(s,rt,i)}function b0(i,s,l){s=kg(i,s,E0)[0],i=gf(Pi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?bc(s):s;var c=Bt(),f=c.queue,g=f.dispatch;return l!==c.memoizedState&&(Ve.flags|=2048,_l(9,SD.bind(null,f,l),{destroy:void 0},null)),[s,g,i]}function SD(i,s){i.action=s}function I0(i){var s=Bt(),l=rt;if(l!==null)return b0(s,l,i);Bt(),s=s.memoizedState,l=Bt();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function _l(i,s,l,c){return i={tag:i,create:s,inst:l,deps:c,next:null},s=Ve.updateQueue,s===null&&(s=pf(),Ve.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function A0(){return Bt().memoizedState}function yf(i,s,l,c){var f=zn();Ve.flags|=i,f.memoizedState=_l(1|s,l,{destroy:void 0},c===void 0?null:c)}function _f(i,s,l,c){var f=Bt();c=c===void 0?null:c;var g=f.memoizedState.inst;rt!==null&&c!==null&&Cg(c,rt.memoizedState.deps)?f.memoizedState=_l(s,l,g,c):(Ve.flags|=i,f.memoizedState=_l(1|s,l,g,c))}function S0(i,s){yf(8390656,8,i,s)}function Ug(i,s){_f(2048,8,i,s)}function R0(i,s){return _f(4,2,i,s)}function C0(i,s){return _f(4,4,i,s)}function x0(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function D0(i,s,l){l=l!=null?l.concat([i]):null,_f(4,4,x0.bind(null,s,i),l)}function zg(){}function P0(i,s){var l=Bt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Cg(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function N0(i,s){var l=Bt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Cg(s,c[1]))return c[0];if(c=i(),Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c}function Bg(i,s,l){return l===void 0||(Ss&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=kw(),Ve.lanes|=i,Ms|=i,l)}function O0(i,s,l,c){return Kn(l,s)?l:fl.current!==null?(i=Bg(i,l,c),Kn(i,s)||(sn=!0),i):(Ss&42)===0?(sn=!0,i.memoizedState=l):(i=kw(),Ve.lanes|=i,Ms|=i,s)}function k0(i,s,l,c,f){var g=fe.p;fe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,qg(i,!1,s,l);try{var C=f(),L=A.S;if(L!==null&&L(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Z=wD(C,c);Ic(i,s,Z,Xn(i))}else Ic(i,s,c,Xn(i))}catch(re){Ic(i,s,{then:function(){},status:"rejected",reason:re},Xn())}finally{fe.p=g,A.T=T}}function RD(){}function Fg(i,s,l,c){if(i.tag!==5)throw Error(r(476));var f=V0(i).queue;k0(i,f,s,xe,l===null?RD:function(){return M0(i),l(c)})}function V0(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:xe,baseState:xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:xe},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function M0(i){var s=V0(i).next.queue;Ic(i,s,{},Xn())}function jg(){return Tn(Hc)}function L0(){return Bt().memoizedState}function U0(){return Bt().memoizedState}function CD(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Xn();i=Ds(l);var c=Ps(s,i,l);c!==null&&(Pn(c,s,l),Rc(c,s,l)),s={cache:Ag()},i.payload=s;return}s=s.return}}function xD(i,s,l){var c=Xn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},vf(i)?B0(s,l):(l=_g(i,s,l,c),l!==null&&(Pn(l,i,c),F0(l,s,c)))}function z0(i,s,l){var c=Xn();Ic(i,s,l,c)}function Ic(i,s,l,c){var f={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(vf(i))B0(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,l);if(f.hasEagerState=!0,f.eagerState=b,Kn(b,T))return tf(i,s,f,0),at===null&&ef(),!1}catch{}finally{}if(l=_g(i,s,f,c),l!==null)return Pn(l,i,c),F0(l,s,c),!0}return!1}function qg(i,s,l,c){if(c={lane:2,revertLane:Ny(),action:c,hasEagerState:!1,eagerState:null,next:null},vf(i)){if(s)throw Error(r(479))}else s=_g(i,l,c,2),s!==null&&Pn(s,i,2)}function vf(i){var s=i.alternate;return i===Ve||s!==null&&s===Ve}function B0(i,s){gl=df=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function F0(i,s,l){if((l&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}var Qr={readContext:Tn,use:mf,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt};Qr.useCacheRefresh=kt,Qr.useMemoCache=kt,Qr.useHostTransitionStatus=kt,Qr.useFormState=kt,Qr.useActionState=kt,Qr.useOptimistic=kt;var Ka={readContext:Tn,use:mf,useCallback:function(i,s){return zn().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:S0,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,yf(4194308,4,x0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return yf(4194308,4,i,s)},useInsertionEffect:function(i,s){yf(4,2,i,s)},useMemo:function(i,s){var l=zn();s=s===void 0?null:s;var c=i();if(Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=zn();if(l!==void 0){var f=l(s);if(Ga){Vr(!0);try{l(s)}finally{Vr(!1)}}}else f=s;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=xD.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var s=zn();return i={current:i},s.memoizedState=i},useState:function(i){i=Mg(i);var s=i.queue,l=z0.bind(null,Ve,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:zg,useDeferredValue:function(i,s){var l=zn();return Bg(l,i,s)},useTransition:function(){var i=Mg(!1);return i=k0.bind(null,Ve,i.queue,!0,!1),zn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=Ve,f=zn();if(Ye){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),at===null)throw Error(r(349));($e&60)!==0||c0(c,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,S0(d0.bind(null,c,g,i),[i]),c.flags|=2048,_l(9,h0.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var i=zn(),s=at.identifierPrefix;if(Ye){var l=xi,c=Ci;l=(c&~(1<<32-Rn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=ff++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=bD++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return zn().memoizedState=CD.bind(null,Ve)}};Ka.useMemoCache=Og,Ka.useHostTransitionStatus=jg,Ka.useFormState=T0,Ka.useActionState=T0,Ka.useOptimistic=function(i){var s=zn();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=qg.bind(null,Ve,!0,l),l.dispatch=s,[i,s]};var Rs={readContext:Tn,use:mf,useCallback:P0,useContext:Tn,useEffect:Ug,useImperativeHandle:D0,useInsertionEffect:R0,useLayoutEffect:C0,useMemo:N0,useReducer:gf,useRef:A0,useState:function(){return gf(Pi)},useDebugValue:zg,useDeferredValue:function(i,s){var l=Bt();return O0(l,rt.memoizedState,i,s)},useTransition:function(){var i=gf(Pi)[0],s=Bt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:u0,useId:L0};Rs.useCacheRefresh=U0,Rs.useMemoCache=Og,Rs.useHostTransitionStatus=jg,Rs.useFormState=w0,Rs.useActionState=w0,Rs.useOptimistic=function(i,s){var l=Bt();return m0(l,rt,i,s)};var Qa={readContext:Tn,use:mf,useCallback:P0,useContext:Tn,useEffect:Ug,useImperativeHandle:D0,useInsertionEffect:R0,useLayoutEffect:C0,useMemo:N0,useReducer:Vg,useRef:A0,useState:function(){return Vg(Pi)},useDebugValue:zg,useDeferredValue:function(i,s){var l=Bt();return rt===null?Bg(l,i,s):O0(l,rt.memoizedState,i,s)},useTransition:function(){var i=Vg(Pi)[0],s=Bt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:u0,useId:L0};Qa.useCacheRefresh=U0,Qa.useMemoCache=Og,Qa.useHostTransitionStatus=jg,Qa.useFormState=I0,Qa.useActionState=I0,Qa.useOptimistic=function(i,s){var l=Bt();return rt!==null?m0(l,rt,i,s):(l.baseState=i,[i,l.queue.dispatch])};function Hg(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:P({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var $g={isMounted:function(i){return(i=i._reactInternals)?we(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ds(c);f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Rc(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ds(c);f.tag=1,f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Rc(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Xn(),c=Ds(l);c.tag=2,s!=null&&(c.callback=s),s=Ps(i,c,l),s!==null&&(Pn(s,i,l),Rc(s,i,l))}};function j0(i,s,l,c,f,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!hc(l,c)||!hc(f,g):!0}function q0(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&$g.enqueueReplaceState(s,s.state,null)}function Ya(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=P({},l));for(var f in i)l[f]===void 0&&(l[f]=i[f])}return l}var Ef=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function H0(i){Ef(i)}function $0(i){console.error(i)}function G0(i){Ef(i)}function Tf(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function K0(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gg(i,s,l){return l=Ds(l),l.tag=3,l.payload={element:null},l.callback=function(){Tf(i,s)},l}function Q0(i){return i=Ds(i),i.tag=3,i}function Y0(i,s,l,c){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;i.payload=function(){return f(g)},i.callback=function(){K0(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){K0(s,l,c),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function DD(i,s,l,c,f){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&Sc(s,l,f,!0),l=pr.current,l!==null){switch(l.tag){case 13:return Kr===null?Ry():l.alternate===null&&Rt===0&&(Rt=3),l.flags&=-257,l.flags|=65536,l.lanes=f,c===wg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),xy(i,c,f)),!1;case 22:return l.flags|=65536,c===wg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),xy(i,c,f)),!1}throw Error(r(435,l.tag))}return xy(i,c,f),Ry(),!1}if(Ye)return s=pr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==Tg&&(i=Error(r(422),{cause:c}),mc(hr(i,l)))):(c!==Tg&&(s=Error(r(423),{cause:c}),mc(hr(s,l))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=hr(c,l),f=Gg(i.stateNode,c,f),oy(i,f),Rt!==4&&(Rt=2)),!1;var g=Error(r(520),{cause:c});if(g=hr(g,l),Vc===null?Vc=[g]:Vc.push(g),Rt!==4&&(Rt=2),s===null)return!0;c=hr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=f&-f,l.lanes|=i,i=Gg(l.stateNode,c,i),oy(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ls===null||!Ls.has(g))))return l.flags|=65536,f&=-f,l.lanes|=f,f=Q0(f),Y0(f,i,l,c),oy(l,f),!1}l=l.return}while(l!==null);return!1}var W0=Error(r(461)),sn=!1;function pn(i,s,l,c){s.child=i===null?t0(s,null,l,c):Ha(s,i.child,l,c)}function X0(i,s,l,c,f){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Xa(s),c=xg(i,s,l,T,g,f),b=Dg(),i!==null&&!sn?(Pg(i,s,f),Ni(i,s,f)):(Ye&&b&&vg(s),s.flags|=1,pn(i,s,c,f),s.child)}function J0(i,s,l,c,f){if(i===null){var g=l.type;return typeof g=="function"&&!my(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,Z0(i,s,g,c,f)):(i=Sf(l.type,null,c,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!ty(i,f)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:hc,l(T,c)&&i.ref===s.ref)return Ni(i,s,f)}return s.flags|=1,i=Vs(g,c),i.ref=s.ref,i.return=s,s.child=i}function Z0(i,s,l,c,f){if(i!==null){var g=i.memoizedProps;if(hc(g,c)&&i.ref===s.ref)if(sn=!1,s.pendingProps=c=g,ty(i,f))(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,Ni(i,s,f)}return Kg(i,s,l,c,f)}function ew(i,s,l){var c=s.pendingProps,f=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(Ac(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|l:l,i!==null){for(f=s.child=i.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return tw(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&hf(s,T!==null?T.cachePool:null),T!==null?n0(s,T):bg(),r0(s);else return s.lanes=s.childLanes=536870912,tw(i,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(hf(s,T.cachePool),n0(s,T),As(),s.memoizedState=null):(i!==null&&hf(s,null),bg(),As());return pn(i,s,f,l),s.child}function tw(i,s,l,c){var f=Rg();return f=f===null?null:{parent:Wt._currentValue,pool:f},s.memoizedState={baseLanes:l,cachePool:f},i!==null&&hf(s,null),bg(),r0(s),i!==null&&Sc(i,s,c,!0),null}function Ac(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=2097664)}}function Kg(i,s,l,c,f){return Xa(s),l=xg(i,s,l,c,void 0,f),c=Dg(),i!==null&&!sn?(Pg(i,s,f),Ni(i,s,f)):(Ye&&c&&vg(s),s.flags|=1,pn(i,s,l,f),s.child)}function nw(i,s,l,c,f,g){return Xa(s),s.updateQueue=null,l=l0(s,c,l,f),o0(i),c=Dg(),i!==null&&!sn?(Pg(i,s,g),Ni(i,s,g)):(Ye&&c&&vg(s),s.flags|=1,pn(i,s,l,g),s.child)}function rw(i,s,l,c,f){if(Xa(s),s.stateNode===null){var g=ul,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=$g,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},sy(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):ul,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(Hg(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&$g.enqueueReplaceState(g,g.state,null),xc(s,c,g,f),Cc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Ya(l,b);g.props=C;var L=g.context,Z=l.contextType;T=ul,typeof Z=="object"&&Z!==null&&(T=Tn(Z));var re=l.getDerivedStateFromProps;Z=typeof re=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,Z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||L!==T)&&q0(s,g,c,T),xs=!1;var G=s.memoizedState;g.state=G,xc(s,c,g,f),Cc(),L=s.memoizedState,b||G!==L||xs?(typeof re=="function"&&(Hg(s,l,re,c),L=s.memoizedState),(C=xs||j0(s,l,C,c,G,L,T))?(Z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=L),g.props=c,g.state=L,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,ay(i,s),T=s.memoizedProps,Z=Ya(l,T),g.props=Z,re=s.pendingProps,G=g.context,L=l.contextType,C=ul,typeof L=="object"&&L!==null&&(C=Tn(L)),b=l.getDerivedStateFromProps,(L=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==re||G!==C)&&q0(s,g,c,C),xs=!1,G=s.memoizedState,g.state=G,xc(s,c,g,f),Cc();var J=s.memoizedState;T!==re||G!==J||xs||i!==null&&i.dependencies!==null&&wf(i.dependencies)?(typeof b=="function"&&(Hg(s,l,b,c),J=s.memoizedState),(Z=xs||j0(s,l,Z,c,G,J,C)||i!==null&&i.dependencies!==null&&wf(i.dependencies))?(L||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,J,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,J,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),g.props=c,g.state=J,g.context=C,c=Z):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,Ac(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=Ha(s,i.child,null,f),s.child=Ha(s,null,l,f)):pn(i,s,l,f),s.memoizedState=g.state,i=s.child):i=Ni(i,s,f),i}function iw(i,s,l,c){return pc(),s.flags|=256,pn(i,s,l,c),s.child}var Qg={dehydrated:null,treeContext:null,retryLane:0};function Yg(i){return{baseLanes:i,cachePool:a0()}}function Wg(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=_r),i}function sw(i,s,l){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Yt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(Ye){if(f?Is(s):As(),Ye){var b=fn,C;if(C=b){e:{for(C=b,b=Gr;C.nodeType!==8;){if(!b){b=null;break e}if(C=xr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:Fa!==null?{id:Ci,overflow:xi}:null,retryLane:536870912},C=yr(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,Dn=s,fn=null,C=!0):C=!1}C||qa(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;Di(s)}return b=c.children,c=c.fallback,f?(As(),f=s.mode,b=Jg({mode:"hidden",children:b},f),c=Za(c,f,l,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=Yg(l),f.childLanes=Wg(i,T,l),s.memoizedState=Qg,c):(Is(s),Xg(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Is(s),s.flags&=-257,s=Zg(i,s,l)):s.memoizedState!==null?(As(),s.child=i.child,s.flags|=128,s=null):(As(),f=c.fallback,b=s.mode,c=Jg({mode:"visible",children:c.children},b),f=Za(f,b,l,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,Ha(s,i.child,null,l),c=s.child,c.memoizedState=Yg(l),c.childLanes=Wg(i,T,l),s.memoizedState=Qg,s=f);else if(Is(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var L=T.dgst;T=L,c=Error(r(419)),c.stack="",c.digest=T,mc({value:c,source:null,stack:null}),s=Zg(i,s,l)}else if(sn||Sc(i,s,l,!1),T=(l&i.childLanes)!==0,sn||T){if(T=at,T!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,bs(i,c),Pn(T,i,c),W0}b.data==="$?"||Ry(),s=Zg(i,s,l)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=$D.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,fn=xr(b.nextSibling),Dn=s,Ye=!0,Rr=null,Gr=!1,i!==null&&(dr[fr++]=Ci,dr[fr++]=xi,dr[fr++]=Fa,Ci=i.id,xi=i.overflow,Fa=s),s=Xg(s,c.children),s.flags|=4096);return s}return f?(As(),f=c.fallback,b=s.mode,C=i.child,L=C.sibling,c=Vs(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,L!==null?f=Vs(L,f):(f=Za(f,b,l,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=i.child.memoizedState,b===null?b=Yg(l):(C=b.cachePool,C!==null?(L=Wt._currentValue,C=C.parent!==L?{parent:L,pool:L}:C):C=a0(),b={baseLanes:b.baseLanes|l,cachePool:C}),f.memoizedState=b,f.childLanes=Wg(i,T,l),s.memoizedState=Qg,c):(Is(s),l=i.child,i=l.sibling,l=Vs(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function Xg(i,s){return s=Jg({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Jg(i,s){return Pw(i,s,0,null)}function Zg(i,s,l){return Ha(s,i.child,null,l),i=Xg(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function aw(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),ry(i.return,s,l)}function ey(i,s,l,c,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=f)}function ow(i,s,l){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(pn(i,s,c.children,l),c=Yt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&aw(i,l,s);else if(i.tag===19)aw(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Ke(Yt,c),f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&cf(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),ey(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&cf(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}ey(s,!0,l,null,g);break;case"together":ey(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ni(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ms|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(Sc(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=Vs(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vs(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function ty(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&wf(i)))}function PD(i,s,l){switch(s.tag){case 3:os(s,s.stateNode.containerInfo),Cs(s,Wt,i.memoizedState.cache),pc();break;case 27:case 5:Hu(s);break;case 4:os(s,s.stateNode.containerInfo);break;case 10:Cs(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Is(s),s.flags|=128,null):(l&s.child.childLanes)!==0?sw(i,s,l):(Is(s),i=Ni(i,s,l),i!==null?i.sibling:null);Is(s);break;case 19:var f=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(Sc(i,s,l,!1),c=(l&s.childLanes)!==0),f){if(c)return ow(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(Yt,Yt.current),c)break;return null;case 22:case 23:return s.lanes=0,ew(i,s,l);case 24:Cs(s,Wt,i.memoizedState.cache)}return Ni(i,s,l)}function lw(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)sn=!0;else{if(!ty(i,l)&&(s.flags&128)===0)return sn=!1,PD(i,s,l);sn=(i.flags&131072)!==0}else sn=!1,Ye&&(s.flags&1048576)!==0&&GT(s,sf,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")my(c)?(i=Ya(c,i),s.tag=1,s=rw(null,s,c,i,l)):(s.tag=0,s=Kg(null,s,c,i,l));else{if(c!=null){if(f=c.$$typeof,f===x){s.tag=11,s=X0(null,s,c,i,l);break e}else if(f===q){s.tag=14,s=J0(null,s,c,i,l);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return Kg(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,f=Ya(c,s.pendingProps),rw(i,s,c,f,l);case 3:e:{if(os(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;f=s.memoizedState,c=f.element,ay(i,s),xc(s,g,null,l);var T=s.memoizedState;if(g=T.cache,Cs(s,Wt,g),g!==f.cache&&iy(s,[Wt],l,!0),Cc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=iw(i,s,g,l);break e}else if(g!==c){c=hr(Error(r(424)),s),mc(c),s=iw(i,s,g,l);break e}else for(fn=xr(s.stateNode.containerInfo.firstChild),Dn=s,Ye=!0,Rr=null,Gr=!0,l=t0(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(pc(),g===c){s=Ni(i,s,l);break e}pn(i,s,g,l)}s=s.child}return s;case 26:return Ac(i,s),i===null?(l=hb(s.type,null,s.pendingProps,null))?s.memoizedState=l:Ye||(l=s.type,i=s.pendingProps,c=Uf(rr.current).createElement(l),c[tn]=s,c[Gt]=i,mn(c,l,i),yt(c),s.stateNode=c):s.memoizedState=hb(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return Hu(s),i===null&&Ye&&(c=s.stateNode=lb(s.type,s.pendingProps,rr.current),Dn=s,Gr=!0,fn=xr(c.firstChild)),c=s.pendingProps.children,i!==null||Ye?pn(i,s,c,l):s.child=Ha(s,null,c,l),Ac(i,s),s.child;case 5:return i===null&&Ye&&((f=c=fn)&&(c=oP(c,s.type,s.pendingProps,Gr),c!==null?(s.stateNode=c,Dn=s,fn=xr(c.firstChild),Gr=!1,f=!0):f=!1),f||qa(s)),Hu(s),f=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,Fy(f,g)?c=null:T!==null&&Fy(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=xg(i,s,ID,null,null,l),Hc._currentValue=f),Ac(i,s),pn(i,s,c,l),s.child;case 6:return i===null&&Ye&&((i=l=fn)&&(l=lP(l,s.pendingProps,Gr),l!==null?(s.stateNode=l,Dn=s,fn=null,i=!0):i=!1),i||qa(s)),null;case 13:return sw(i,s,l);case 4:return os(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=Ha(s,null,c,l):pn(i,s,c,l),s.child;case 11:return X0(i,s,s.type,s.pendingProps,l);case 7:return pn(i,s,s.pendingProps,l),s.child;case 8:return pn(i,s,s.pendingProps.children,l),s.child;case 12:return pn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,Cs(s,s.type,c.value),pn(i,s,c.children,l),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Xa(s),f=Tn(f),c=c(f),s.flags|=1,pn(i,s,c,l),s.child;case 14:return J0(i,s,s.type,s.pendingProps,l);case 15:return Z0(i,s,s.type,s.pendingProps,l);case 19:return ow(i,s,l);case 22:return ew(i,s,l);case 24:return Xa(s),c=Tn(Wt),i===null?(f=Rg(),f===null&&(f=at,g=Ag(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=l),f=g),s.memoizedState={parent:c,cache:f},sy(s),Cs(s,Wt,f)):((i.lanes&l)!==0&&(ay(i,s),xc(s,null,null,l),Cc()),f=i.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Cs(s,Wt,c)):(c=g.cache,Cs(s,Wt,c),c!==f.cache&&iy(s,[Wt],l,!0))),pn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var ny=Me(null),Wa=null,Oi=null;function Cs(i,s,l){Ke(ny,s._currentValue),s._currentValue=l}function ki(i){i._currentValue=ny.current,Je(ny)}function ry(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function iy(i,s,l,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),ry(g.return,l,i),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),ry(T,l,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Sc(i,s,l,c){i=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=f.type;Kn(f.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(f===as.current){if(T=f.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Hc):i=[Hc])}f=f.return}i!==null&&iy(s,i,l,c),s.flags|=262144}function wf(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Xa(i){Wa=i,Oi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return uw(Wa,i)}function bf(i,s){return Wa===null&&Xa(i),uw(i,s)}function uw(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Oi===null){if(i===null)throw Error(r(308));Oi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Oi=Oi.next=s;return l}var xs=!1;function sy(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ay(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ds(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ps(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(vt&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=nf(i),HT(i,null,l),s}return tf(i,c,s,l),nf(i)}function Rc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}function oy(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var ly=!1;function Cc(){if(ly){var i=ml;if(i!==null)throw i}}function xc(i,s,l,c){ly=!1;var f=i.updateQueue;xs=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,L=C.next;C.next=null,T===null?g=L:T.next=L,T=C;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,b=Z.lastBaseUpdate,b!==T&&(b===null?Z.firstBaseUpdate=L:b.next=L,Z.lastBaseUpdate=C))}if(g!==null){var re=f.baseState;T=0,Z=L=C=null,b=g;do{var G=b.lane&-536870913,J=G!==b.lane;if(J?($e&G)===G:(c&G)===G){G!==0&&G===pl&&(ly=!0),Z!==null&&(Z=Z.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ee=i,De=b;G=s;var Ct=l;switch(De.tag){case 1:if(Ee=De.payload,typeof Ee=="function"){re=Ee.call(Ct,re,G);break e}re=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=De.payload,G=typeof Ee=="function"?Ee.call(Ct,re,G):Ee,G==null)break e;re=P({},re,G);break e;case 2:xs=!0}}G=b.callback,G!==null&&(i.flags|=64,J&&(i.flags|=8192),J=f.callbacks,J===null?f.callbacks=[G]:J.push(G))}else J={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Z===null?(L=Z=J,C=re):Z=Z.next=J,T|=G;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;J=b,b=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);Z===null&&(C=re),f.baseState=C,f.firstBaseUpdate=L,f.lastBaseUpdate=Z,g===null&&(f.shared.lanes=0),Ms|=T,i.lanes=T,i.memoizedState=re}}function cw(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function hw(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)cw(l[i],s)}function Dc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==f)}}catch(b){st(s,s.return,b)}}function Ns(i,s,l){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var C=l;try{b()}catch(L){st(f,C,L)}}}c=c.next}while(c!==g)}}catch(L){st(s,s.return,L)}}function dw(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{hw(s,l)}catch(c){st(i,i.return,c)}}}function fw(i,s,l){l.props=Ya(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){st(i,s,c)}}function Ja(i,s){try{var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof l=="function"?i.refCleanup=l(f):l.current=f}}catch(g){st(i,s,g)}}function Qn(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(f){st(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){st(i,s,f)}else l.current=null}function pw(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(f){st(i,i.return,f)}}function mw(i,s,l){try{var c=i.stateNode;nP(c,i.type,l,s),c[Gt]=s}catch(f){st(i,i.return,f)}}function gw(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function uy(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||gw(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function cy(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Lf));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(cy(i,s,l),i=i.sibling;i!==null;)cy(i,s,l),i=i.sibling}function If(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(If(i,s,l),i=i.sibling;i!==null;)If(i,s,l),i=i.sibling}var Vi=!1,St=!1,hy=!1,yw=typeof WeakSet=="function"?WeakSet:Set,an=null,_w=!1;function ND(i,s){if(i=i.containerInfo,zy=Hf,i=VT(i),fg(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,C=-1,L=0,Z=0,re=i,G=null;t:for(;;){for(var J;re!==l||f!==0&&re.nodeType!==3||(b=T+f),re!==g||c!==0&&re.nodeType!==3||(C=T+c),re.nodeType===3&&(T+=re.nodeValue.length),(J=re.firstChild)!==null;)G=re,re=J;for(;;){if(re===i)break t;if(G===l&&++L===f&&(b=T),G===g&&++Z===c&&(C=T),(J=re.nextSibling)!==null)break;re=G,G=re.parentNode}re=J}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(By={focusedElem:i,selectionRange:l},Hf=!1,an=s;an!==null;)if(s=an,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,an=i;else for(;an!==null;){switch(s=an,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,f=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var Ee=Ya(l.type,f,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(Ee,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(De){st(l,l.return,De)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)Hy(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Hy(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,an=i;break}an=s.return}return Ee=_w,_w=!1,Ee}function vw(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Li(i,l),c&4&&Dc(5,l);break;case 1:if(Li(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(b){st(l,l.return,b)}else{var f=Ya(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){st(l,l.return,b)}}c&64&&dw(l),c&512&&Ja(l,l.return);break;case 3:if(Li(i,l),c&64&&(c=l.updateQueue,c!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{hw(c,i)}catch(b){st(l,l.return,b)}}break;case 26:Li(i,l),c&512&&Ja(l,l.return);break;case 27:case 5:Li(i,l),s===null&&c&4&&pw(l),c&512&&Ja(l,l.return);break;case 12:Li(i,l);break;case 13:Li(i,l),c&4&&ww(i,l);break;case 22:if(f=l.memoizedState!==null||Vi,!f){s=s!==null&&s.memoizedState!==null||St;var g=Vi,T=St;Vi=f,(St=s)&&!T?Os(i,l,(l.subtreeFlags&8772)!==0):Li(i,l),Vi=g,St=T}c&512&&(l.memoizedProps.mode==="manual"?Ja(l,l.return):Qn(l,l.return));break;default:Li(i,l)}}function Ew(i){var s=i.alternate;s!==null&&(i.alternate=null,Ew(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Ca(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ft=null,Yn=!1;function Mi(i,s,l){for(l=l.child;l!==null;)Tw(i,s,l),l=l.sibling}function Tw(i,s,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ls,l)}catch{}switch(l.tag){case 26:St||Qn(l,s),Mi(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||Qn(l,s);var c=Ft,f=Yn;for(Ft=l.stateNode,Mi(i,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Ca(l),Ft=c,Yn=f;break;case 5:St||Qn(l,s);case 6:f=Ft;var g=Yn;if(Ft=null,Mi(i,s,l),Ft=f,Yn=g,Ft!==null)if(Yn)try{i=Ft,c=l.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){st(l,s,T)}else try{Ft.removeChild(l.stateNode)}catch(T){st(l,s,T)}break;case 18:Ft!==null&&(Yn?(s=Ft,l=l.stateNode,s.nodeType===8?qy(s.parentNode,l):s.nodeType===1&&qy(s,l),Qc(s)):qy(Ft,l.stateNode));break;case 4:c=Ft,f=Yn,Ft=l.stateNode.containerInfo,Yn=!0,Mi(i,s,l),Ft=c,Yn=f;break;case 0:case 11:case 14:case 15:St||Ns(2,l,s),St||Ns(4,l,s),Mi(i,s,l);break;case 1:St||(Qn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&fw(l,s,c)),Mi(i,s,l);break;case 21:Mi(i,s,l);break;case 22:St||Qn(l,s),St=(c=St)||l.memoizedState!==null,Mi(i,s,l),St=c;break;default:Mi(i,s,l)}}function ww(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Qc(i)}catch(l){st(s,s.return,l)}}function OD(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new yw),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new yw),s;default:throw Error(r(435,i.tag))}}function dy(i,s){var l=OD(i);s.forEach(function(c){var f=GD.bind(null,i,c);l.has(c)||(l.add(c),c.then(f,f))})}function mr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var f=l[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:Ft=b.stateNode,Yn=!1;break e;case 3:Ft=b.stateNode.containerInfo,Yn=!0;break e;case 4:Ft=b.stateNode.containerInfo,Yn=!0;break e}b=b.return}if(Ft===null)throw Error(r(160));Tw(g,T,f),Ft=null,Yn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)bw(s,i),s=s.sibling}var Cr=null;function bw(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:mr(s,i),gr(i),c&4&&(Ns(3,i,i.return),Dc(3,i),Ns(5,i,i.return));break;case 1:mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&64&&Vi&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var f=Cr;if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ms]||g[tn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),mn(g,c,l),g[tn]=i,yt(g),c=g;break e;case"link":var T=pb("link","href",f).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;case"meta":if(T=pb("meta","content",f).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[tn]=i,yt(g),c=g}i.stateNode=c}else mb(f,i.type,i.stateNode);else i.stateNode=fb(f,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?mb(f,i.type,i.stateNode):fb(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&mw(i,i.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){f=i.stateNode,g=i.memoizedProps;try{for(var C=f.firstChild;C;){var L=C.nextSibling,Z=C.nodeName;C[ms]||Z==="HEAD"||Z==="BODY"||Z==="SCRIPT"||Z==="STYLE"||Z==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=L}for(var re=i.type,G=f.attributes;G.length;)f.removeAttributeNode(G[0]);mn(f,re,g),f[tn]=i,f[Gt]=g}catch(Ee){st(i,i.return,Ee)}}case 5:if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),i.flags&32){f=i.stateNode;try{ar(f,"")}catch(Ee){st(i,i.return,Ee)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,mw(i,f,l!==null?l.memoizedProps:f)),c&1024&&(hy=!0);break;case 6:if(mr(s,i),gr(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(Ee){st(i,i.return,Ee)}}break;case 3:if(Ff=null,f=Cr,Cr=zf(s.containerInfo),mr(s,i),Cr=f,gr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Qc(s.containerInfo)}catch(Ee){st(i,i.return,Ee)}hy&&(hy=!1,Iw(i));break;case 4:c=Cr,Cr=zf(i.stateNode.containerInfo),mr(s,i),gr(i),Cr=c;break;case 12:mr(s,i),gr(i);break;case 13:mr(s,i),gr(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ty=Ln()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,dy(i,c)));break;case 22:if(c&512&&(St||l===null||Qn(l,l.return)),C=i.memoizedState!==null,L=l!==null&&l.memoizedState!==null,Z=Vi,re=St,Vi=Z||C,St=re||L,mr(s,i),St=re,Vi=Z,gr(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=Vi||St,l===null||L||s||vl(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(l=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){L=l=s;try{if(f=L.stateNode,C)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=L.stateNode,b=L.memoizedProps.style;var J=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Ee){st(L,L.return,Ee)}}}else if(s.tag===6){if(l===null){L=s;try{L.stateNode.nodeValue=C?"":L.memoizedProps}catch(Ee){st(L,L.return,Ee)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,dy(i,l))));break;case 19:mr(s,i),gr(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,dy(i,c)));break;case 21:break;default:mr(s,i),gr(i)}}function gr(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var l=i.return;l!==null;){if(gw(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var f=c.stateNode,g=uy(i);If(i,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ar(T,""),c.flags&=-33);var b=uy(i);If(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,L=uy(i);cy(i,L,C);break;default:throw Error(r(161))}}}catch(Z){st(i,i.return,Z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function Iw(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;Iw(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Li(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)vw(i,s.alternate,s),s=s.sibling}function vl(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:Ns(4,s,s.return),vl(s);break;case 1:Qn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&fw(s,s.return,l),vl(s);break;case 26:case 27:case 5:Qn(s,s.return),vl(s);break;case 22:Qn(s,s.return),s.memoizedState===null&&vl(s);break;default:vl(s)}i=i.sibling}}function Os(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Os(f,g,l),Dc(4,g);break;case 1:if(Os(f,g,l),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(L){st(c,c.return,L)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)cw(C[f],b)}catch(L){st(c,c.return,L)}}l&&T&64&&dw(g),Ja(g,g.return);break;case 26:case 27:case 5:Os(f,g,l),l&&c===null&&T&4&&pw(g),Ja(g,g.return);break;case 12:Os(f,g,l);break;case 13:Os(f,g,l),l&&T&4&&ww(f,g);break;case 22:g.memoizedState===null&&Os(f,g,l),Ja(g,g.return);break;default:Os(f,g,l)}s=s.sibling}}function fy(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&Ec(l))}function py(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ec(i))}function ks(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Aw(i,s,l,c),s=s.sibling}function Aw(i,s,l,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ks(i,s,l,c),f&2048&&Dc(9,s);break;case 3:ks(i,s,l,c),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ec(i)));break;case 12:if(f&2048){ks(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(s,s.return,C)}}else ks(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?ks(i,s,l,c):Pc(i,s):g._visibility&4?ks(i,s,l,c):(g._visibility|=4,El(i,s,l,c,(s.subtreeFlags&10256)!==0)),f&2048&&fy(s.alternate,s);break;case 24:ks(i,s,l,c),f&2048&&py(s.alternate,s);break;default:ks(i,s,l,c)}}function El(i,s,l,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=l,C=c,L=T.flags;switch(T.tag){case 0:case 11:case 15:El(g,T,b,C,f),Dc(8,T);break;case 23:break;case 22:var Z=T.stateNode;T.memoizedState!==null?Z._visibility&4?El(g,T,b,C,f):Pc(g,T):(Z._visibility|=4,El(g,T,b,C,f)),f&&L&2048&&fy(T.alternate,T);break;case 24:El(g,T,b,C,f),f&&L&2048&&py(T.alternate,T);break;default:El(g,T,b,C,f)}s=s.sibling}}function Pc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,f=c.flags;switch(c.tag){case 22:Pc(l,c),f&2048&&fy(c.alternate,c);break;case 24:Pc(l,c),f&2048&&py(c.alternate,c);break;default:Pc(l,c)}s=s.sibling}}var Nc=8192;function Tl(i){if(i.subtreeFlags&Nc)for(i=i.child;i!==null;)Sw(i),i=i.sibling}function Sw(i){switch(i.tag){case 26:Tl(i),i.flags&Nc&&i.memoizedState!==null&&TP(Cr,i.memoizedState,i.memoizedProps);break;case 5:Tl(i);break;case 3:case 4:var s=Cr;Cr=zf(i.stateNode.containerInfo),Tl(i),Cr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=Nc,Nc=16777216,Tl(i),Nc=s):Tl(i));break;default:Tl(i)}}function Rw(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Oc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,xw(c,i)}Rw(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Cw(i),i=i.sibling}function Cw(i){switch(i.tag){case 0:case 11:case 15:Oc(i),i.flags&2048&&Ns(9,i,i.return);break;case 3:Oc(i);break;case 12:Oc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,Af(i)):Oc(i);break;default:Oc(i)}}function Af(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,xw(c,i)}Rw(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:Ns(8,s,s.return),Af(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,Af(s));break;default:Af(s)}i=i.sibling}}function xw(i,s){for(;an!==null;){var l=an;switch(l.tag){case 0:case 11:case 15:Ns(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ec(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,an=c;else e:for(l=i;an!==null;){c=an;var f=c.sibling,g=c.return;if(Ew(c),c===l){an=null;break e}if(f!==null){f.return=g,an=f;break e}an=g}}}function kD(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(i,s,l,c){return new kD(i,s,l,c)}function my(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Vs(i,s){var l=i.alternate;return l===null?(l=yr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&31457280,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function Dw(i,s){i.flags&=31457282;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function Sf(i,s,l,c,f,g){var T=0;if(c=i,typeof i=="function")my(i)&&(T=1);else if(typeof i=="string")T=vP(i,l,Ut.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case p:return Za(l.children,f,g,s);case m:T=8,f|=24;break;case _:return i=yr(12,l,s,f|2),i.elementType=_,i.lanes=g,i;case U:return i=yr(13,l,s,f),i.elementType=U,i.lanes=g,i;case M:return i=yr(19,l,s,f),i.elementType=M,i.lanes=g,i;case K:return Pw(l,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case x:T=11;break e;case q:T=14;break e;case X:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=yr(T,l,s,f),s.elementType=i,s.type=c,s.lanes=g,s}function Za(i,s,l,c){return i=yr(7,i,c,s),i.lanes=l,i}function Pw(i,s,l,c){i=yr(22,i,c,s),i.elementType=K,i.lanes=l;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var T=bs(g,2);T!==null&&(f._pendingVisibility|=2,Pn(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var T=bs(g,2);T!==null&&(f._pendingVisibility&=-3,Pn(T,g,2))}}};return i.stateNode=f,i}function gy(i,s,l){return i=yr(6,i,null,s),i.lanes=l,i}function yy(i,s,l){return s=yr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Ui(i){i.flags|=4}function Nw(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!gb(s)){if(s=pr.current,s!==null&&(($e&4194176)===$e?Kr!==null:($e&62914560)!==$e&&($e&536870912)===0||s!==Kr))throw yc=wg,YT;i.flags|=8192}}function Rf(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?hs():536870912,i.lanes|=s,bl|=s)}function kc(i,s){if(!Ye)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function _t(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function VD(i,s,l){var c=s.pendingProps;switch(Eg(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(s),null;case 1:return _t(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),ki(Wt),yi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(fc(s)?Ui(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rr!==null&&(Ay(Rr),Rr=null))),_t(s),null;case 26:return l=s.memoizedState,i===null?(Ui(s),l!==null?(_t(s),Nw(s,l)):(_t(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Ui(s),_t(s),Nw(s,l)):(_t(s),s.flags&=-16777217):(i.memoizedProps!==c&&Ui(s),_t(s),s.flags&=-16777217),null;case 27:jo(s),l=rr.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return _t(s),null}i=Ut.current,fc(s)?KT(s):(i=lb(f,c,l),s.stateNode=i,Ui(s))}return _t(s),null;case 5:if(jo(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return _t(s),null}if(i=Ut.current,fc(s))KT(s);else{switch(f=Uf(rr.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(l,{is:c.is}):f.createElement(l)}}i[tn]=s,i[Gt]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;e:switch(mn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(s)}}return _t(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=rr.current,fc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[tn]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||nb(i.nodeValue,l)),i||qa(s)}else i=Uf(i).createTextNode(c),i[tn]=s,s.stateNode=i}return _t(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=fc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[tn]=s}else pc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;_t(s),f=!1}else Rr!==null&&(Ay(Rr),Rr=null),f=!0;if(!f)return s.flags&256?(Di(s),s):(Di(s),null)}if(Di(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),Rf(s,s.updateQueue),_t(s),null;case 4:return yi(),i===null&&My(s.stateNode.containerInfo),_t(s),null;case 10:return ki(s.type),_t(s),null;case 19:if(Je(Yt),f=s.memoizedState,f===null)return _t(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)kc(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=cf(i),g!==null){for(s.flags|=128,kc(f,!1),i=g.updateQueue,s.updateQueue=i,Rf(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)Dw(l,i),l=l.sibling;return Ke(Yt,Yt.current&1|2),s.child}i=i.sibling}f.tail!==null&&Ln()>Cf&&(s.flags|=128,c=!0,kc(f,!1),s.lanes=4194304)}else{if(!c)if(i=cf(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,Rf(s,i),kc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ye)return _t(s),null}else 2*Ln()-f.renderingStartTime>Cf&&l!==536870912&&(s.flags|=128,c=!0,kc(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(i=f.last,i!==null?i.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Ln(),s.sibling=null,i=Yt.current,Ke(Yt,c?i&1|2:i&1),s):(_t(s),null);case 22:case 23:return Di(s),Ig(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(_t(s),s.subtreeFlags&6&&(s.flags|=8192)):_t(s),l=s.updateQueue,l!==null&&Rf(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&Je($a),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ki(Wt),_t(s),null;case 25:return null}throw Error(r(156,s.tag))}function MD(i,s){switch(Eg(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ki(Wt),yi(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return jo(s),null;case 13:if(Di(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));pc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Je(Yt),null;case 4:return yi(),null;case 10:return ki(s.type),null;case 22:case 23:return Di(s),Ig(),i!==null&&Je($a),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return ki(Wt),null;case 25:return null;default:return null}}function Ow(i,s){switch(Eg(s),s.tag){case 3:ki(Wt),yi();break;case 26:case 27:case 5:jo(s);break;case 4:yi();break;case 13:Di(s);break;case 19:Je(Yt);break;case 10:ki(s.type);break;case 22:case 23:Di(s),Ig(),i!==null&&Je($a);break;case 24:ki(Wt)}}var LD={getCacheForType:function(i){var s=Tn(Wt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},UD=typeof WeakMap=="function"?WeakMap:Map,vt=0,at=null,Ue=null,$e=0,ot=0,Wn=null,zi=!1,wl=!1,_y=!1,Bi=0,Rt=0,Ms=0,eo=0,vy=0,_r=0,bl=0,Vc=null,Yr=null,Ey=!1,Ty=0,Cf=1/0,xf=null,Ls=null,Df=!1,to=null,Mc=0,wy=0,by=null,Lc=0,Iy=null;function Xn(){if((vt&2)!==0&&$e!==0)return $e&-$e;if(A.T!==null){var i=pl;return i!==0?i:Ny()}return Vd()}function kw(){_r===0&&(_r=($e&536870912)===0||Ye?Yu():536870912);var i=pr.current;return i!==null&&(i.flags|=32),_r}function Pn(i,s,l){(i===at&&ot===2||i.cancelPendingCommit!==null)&&(Il(i,0),Fi(i,$e,_r,!1)),Ot(i,l),((vt&2)===0||i!==at)&&(i===at&&((vt&2)===0&&(eo|=l),Rt===4&&Fi(i,$e,_r,!1)),Wr(i))}function Vw(i,s,l){if((vt&6)!==0)throw Error(r(327));var c=!l&&(s&60)===0&&(s&i.expiredLanes)===0||cs(i,s),f=c?FD(i,s):Cy(i,s,!0),g=c;do{if(f===0){wl&&!c&&Fi(i,s,0,!1);break}else if(f===6)Fi(i,s,0,!zi);else{if(l=i.current.alternate,g&&!zD(l)){f=Cy(i,s,!1),g=!1;continue}if(f===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;f=Vc;var C=b.current.memoizedState.isDehydrated;if(C&&(Il(b,T).flags|=256),T=Cy(b,T,!1),T!==2){if(_y&&!C){b.errorRecoveryDisabledLanes|=g,eo|=g,f=4;break e}g=Yr,Yr=f,g!==null&&Ay(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){Il(i,0),Fi(i,s,0,!0);break}e:{switch(c=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){Fi(c,s,_r,!zi);break e}break;case 2:Yr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=Ty+300-Ln(),10<g)){if(Fi(c,s,_r,!zi),ir(c,0)!==0)break e;c.timeoutHandle=sb(Mw.bind(null,c,l,Yr,xf,Ey,s,_r,eo,bl,zi,2,-0,0),g);break e}Mw(c,l,Yr,xf,Ey,s,_r,eo,bl,zi,0,-0,0)}}break}while(!0);Wr(i)}function Ay(i){Yr===null?Yr=i:Yr.push.apply(Yr,i)}function Mw(i,s,l,c,f,g,T,b,C,L,Z,re,G){var J=s.subtreeFlags;if((J&8192||(J&16785408)===16785408)&&(qc={stylesheets:null,count:0,unsuspend:EP},Sw(s),s=wP(),s!==null)){i.cancelPendingCommit=s(qw.bind(null,i,l,c,f,T,b,C,1,re,G)),Fi(i,g,T,!L);return}qw(i,l,c,f,T,b,C,Z,re,G)}function zD(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var f=l[c],g=f.getSnapshot;f=f.value;try{if(!Kn(g(),f))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fi(i,s,l,c){s&=~vy,s&=~eo,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var f=s;0<f;){var g=31-Rn(f),T=1<<g;c[g]=-1,f&=~T}l!==0&&ds(i,l,s)}function Pf(){return(vt&6)===0?(Uc(0),!1):!0}function Sy(){if(Ue!==null){if(ot===0)var i=Ue.return;else i=Ue,Oi=Wa=null,Ng(i),dl=null,_c=0,i=Ue;for(;i!==null;)Ow(i.alternate,i),i=i.return;Ue=null}}function Il(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,iP(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),Sy(),at=i,Ue=l=Vs(i.current,null),$e=s,ot=0,Wn=null,zi=!1,wl=cs(i,s),_y=!1,bl=_r=vy=eo=Ms=Rt=0,Yr=Vc=null,Ey=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var f=31-Rn(c),g=1<<f;s|=i[f],c&=~g}return Bi=s,ef(),l}function Lw(i,s){Ve=null,A.H=Qr,s===gc?(s=JT(),ot=3):s===YT?(s=JT(),ot=4):ot=s===W0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Wn=s,Ue===null&&(Rt=1,Tf(i,hr(s,i.current)))}function Uw(){var i=A.H;return A.H=Qr,i===null?Qr:i}function zw(){var i=A.A;return A.A=LD,i}function Ry(){Rt=4,zi||($e&4194176)!==$e&&pr.current!==null||(wl=!0),(Ms&134217727)===0&&(eo&134217727)===0||at===null||Fi(at,$e,_r,!1)}function Cy(i,s,l){var c=vt;vt|=2;var f=Uw(),g=zw();(at!==i||$e!==s)&&(xf=null,Il(i,s)),s=!1;var T=Rt;e:do try{if(ot!==0&&Ue!==null){var b=Ue,C=Wn;switch(ot){case 8:Sy(),T=6;break e;case 3:case 2:case 6:pr.current===null&&(s=!0);var L=ot;if(ot=0,Wn=null,Al(i,b,C,L),l&&wl){T=0;break e}break;default:L=ot,ot=0,Wn=null,Al(i,b,C,L)}}BD(),T=Rt;break}catch(Z){Lw(i,Z)}while(!0);return s&&i.shellSuspendCounter++,Oi=Wa=null,vt=c,A.H=f,A.A=g,Ue===null&&(at=null,$e=0,ef()),T}function BD(){for(;Ue!==null;)Bw(Ue)}function FD(i,s){var l=vt;vt|=2;var c=Uw(),f=zw();at!==i||$e!==s?(xf=null,Cf=Ln()+500,Il(i,s)):wl=cs(i,s);e:do try{if(ot!==0&&Ue!==null){s=Ue;var g=Wn;t:switch(ot){case 1:ot=0,Wn=null,Al(i,s,g,1);break;case 2:if(WT(g)){ot=0,Wn=null,Fw(s);break}s=function(){ot===2&&at===i&&(ot=7),Wr(i)},g.then(s,s);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:WT(g)?(ot=0,Wn=null,Fw(s)):(ot=0,Wn=null,Al(i,s,g,7));break;case 5:var T=null;switch(Ue.tag){case 26:T=Ue.memoizedState;case 5:case 27:var b=Ue;if(!T||gb(T)){ot=0,Wn=null;var C=b.sibling;if(C!==null)Ue=C;else{var L=b.return;L!==null?(Ue=L,Nf(L)):Ue=null}break t}}ot=0,Wn=null,Al(i,s,g,5);break;case 6:ot=0,Wn=null,Al(i,s,g,6);break;case 8:Sy(),Rt=6;break e;default:throw Error(r(462))}}jD();break}catch(Z){Lw(i,Z)}while(!0);return Oi=Wa=null,A.H=c,A.A=f,vt=l,Ue!==null?0:(at=null,$e=0,ef(),Rt)}function jD(){for(;Ue!==null&&!ng();)Bw(Ue)}function Bw(i){var s=lw(i.alternate,i,Bi);i.memoizedProps=i.pendingProps,s===null?Nf(i):Ue=s}function Fw(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=nw(l,s,s.pendingProps,s.type,void 0,$e);break;case 11:s=nw(l,s,s.pendingProps,s.type.render,s.ref,$e);break;case 5:Ng(s);default:Ow(l,s),s=Ue=Dw(s,Bi),s=lw(l,s,Bi)}i.memoizedProps=i.pendingProps,s===null?Nf(i):Ue=s}function Al(i,s,l,c){Oi=Wa=null,Ng(s),dl=null,_c=0;var f=s.return;try{if(DD(i,f,s,l,$e)){Rt=1,Tf(i,hr(l,i.current)),Ue=null;return}}catch(g){if(f!==null)throw Ue=f,g;Rt=1,Tf(i,hr(l,i.current)),Ue=null;return}s.flags&32768?(Ye||c===1?i=!0:wl||($e&536870912)!==0?i=!1:(zi=i=!0,(c===2||c===3||c===6)&&(c=pr.current,c!==null&&c.tag===13&&(c.flags|=16384))),jw(s,i)):Nf(s)}function Nf(i){var s=i;do{if((s.flags&32768)!==0){jw(s,zi);return}i=s.return;var l=VD(s.alternate,s,Bi);if(l!==null){Ue=l;return}if(s=s.sibling,s!==null){Ue=s;return}Ue=s=i}while(s!==null);Rt===0&&(Rt=5)}function jw(i,s){do{var l=MD(i.alternate,i);if(l!==null){l.flags&=32767,Ue=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){Ue=i;return}Ue=i=l}while(i!==null);Rt=6,Ue=null}function qw(i,s,l,c,f,g,T,b,C,L){var Z=A.T,re=fe.p;try{fe.p=2,A.T=null,qD(i,s,l,c,re,f,g,T,b,C,L)}finally{A.T=Z,fe.p=re}}function qD(i,s,l,c,f,g,T,b){do Sl();while(to!==null);if((vt&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var L=C.lanes|C.childLanes;if(L|=yg,Od(i,c,L,g,T,b),i===at&&(Ue=at=null,$e=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Df||(Df=!0,wy=L,by=l,KD(_i,function(){return Sl(),null})),l=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||l?(l=A.T,A.T=null,g=fe.p,fe.p=2,T=vt,vt|=4,ND(i,C),bw(C,i),fD(By,i.containerInfo),Hf=!!zy,By=zy=null,i.current=C,vw(i,C.alternate,C),$u(),vt=T,fe.p=g,A.T=l):i.current=C,Df?(Df=!1,to=i,Mc=c):Hw(i,L),L=i.pendingLanes,L===0&&(Ls=null),Ku(C.stateNode),Wr(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)L=s[C],f(L.value,{componentStack:L.stack});return(Mc&3)!==0&&Sl(),L=i.pendingLanes,(c&4194218)!==0&&(L&42)!==0?i===Iy?Lc++:(Lc=0,Iy=i):Lc=0,Uc(0),null}function Hw(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,Ec(s)))}function Sl(){if(to!==null){var i=to,s=wy;wy=0;var l=kd(Mc),c=A.T,f=fe.p;try{if(fe.p=32>l?32:l,A.T=null,to===null)var g=!1;else{l=by,by=null;var T=to,b=Mc;if(to=null,Mc=0,(vt&6)!==0)throw Error(r(331));var C=vt;if(vt|=4,Cw(T.current),Aw(T,T.current,b,l),vt=C,Uc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ls,T)}catch{}g=!0}return g}finally{fe.p=f,A.T=c,Hw(i,s)}}return!1}function $w(i,s,l){s=hr(l,s),s=Gg(i.stateNode,s,2),i=Ps(i,s,2),i!==null&&(Ot(i,2),Wr(i))}function st(i,s,l){if(i.tag===3)$w(i,i,l);else for(;s!==null;){if(s.tag===3){$w(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ls===null||!Ls.has(c))){i=hr(l,i),l=Q0(2),c=Ps(s,l,2),c!==null&&(Y0(l,c,s,i),Ot(c,2),Wr(c));break}}s=s.return}}function xy(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new UD;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(l)||(_y=!0,f.add(l),i=HD.bind(null,i,s,l),s.then(i,i))}function HD(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,at===i&&($e&l)===l&&(Rt===4||Rt===3&&($e&62914560)===$e&&300>Ln()-Ty?(vt&2)===0&&Il(i,0):vy|=l,bl===$e&&(bl=0)),Wr(i)}function Gw(i,s){s===0&&(s=hs()),i=bs(i,s),i!==null&&(Ot(i,s),Wr(i))}function $D(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Gw(i,l)}function GD(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),Gw(i,l)}function KD(i,s){return Aa(i,s)}var Of=null,Rl=null,Dy=!1,kf=!1,Py=!1,no=0;function Wr(i){i!==Rl&&i.next===null&&(Rl===null?Of=Rl=i:Rl=Rl.next=i),kf=!0,Dy||(Dy=!0,YD(QD))}function Uc(i,s){if(!Py&&kf){Py=!0;do for(var l=!1,c=Of;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Rn(42|i)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,Yw(c,g))}else g=$e,g=ir(c,c===at?g:0),(g&3)===0||cs(c,g)||(l=!0,Yw(c,g));c=c.next}while(l);Py=!1}}function QD(){kf=Dy=!1;var i=0;no!==0&&(rP()&&(i=no),no=0);for(var s=Ln(),l=null,c=Of;c!==null;){var f=c.next,g=Kw(c,s);g===0?(c.next=null,l===null?Of=f:l.next=f,f===null&&(Rl=l)):(l=c,(i!==0||(g&3)!==0)&&(kf=!0)),c=f}Uc(i)}function Kw(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Rn(g),b=1<<T,C=f[T];C===-1?((b&l)===0||(b&c)!==0)&&(f[T]=$o(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=at,l=$e,l=ir(i,i===s?l:0),c=i.callbackNode,l===0||i===s&&ot===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Ho(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||cs(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&Ho(c),kd(l)){case 2:case 8:l=en;break;case 32:l=_i;break;case 268435456:l=Gu;break;default:l=_i}return c=Qw.bind(null,i),l=Aa(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&Ho(c),i.callbackPriority=2,i.callbackNode=null,2}function Qw(i,s){var l=i.callbackNode;if(Sl()&&i.callbackNode!==l)return null;var c=$e;return c=ir(i,i===at?c:0),c===0?null:(Vw(i,c,s),Kw(i,Ln()),i.callbackNode!=null&&i.callbackNode===l?Qw.bind(null,i):null)}function Yw(i,s){if(Sl())return null;Vw(i,s,!0)}function YD(i){sP(function(){(vt&6)!==0?Aa($t,i):i()})}function Ny(){return no===0&&(no=Yu()),no}function Ww(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:zr(""+i)}function Xw(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function WD(i,s,l,c,f){if(s==="submit"&&l&&l.stateNode===f){var g=Ww((f[Gt]||null).action),T=c.submitter;T&&(s=(s=T[Gt]||null)?Ww(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new Jo("action","action",null,c,f);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(no!==0){var C=T?Xw(f,T):new FormData(f);Fg(l,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?Xw(f,T):new FormData(f),Fg(l,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var Oy=0;Oy<qT.length;Oy++){var ky=qT[Oy],XD=ky.toLowerCase(),JD=ky[0].toUpperCase()+ky.slice(1);Sr(XD,"on"+JD)}Sr(UT,"onAnimationEnd"),Sr(zT,"onAnimationIteration"),Sr(BT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(mD,"onTransitionRun"),Sr(gD,"onTransitionStart"),Sr(yD,"onTransitionCancel"),Sr(FT,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZD=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zc));function Jw(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,L=b.currentTarget;if(b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=L;try{g(f)}catch(Z){Ef(Z)}f.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,L=b.currentTarget,b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=L;try{g(f)}catch(Z){Ef(Z)}f.currentTarget=null,g=C}}}}function je(i,s){var l=s[Ra];l===void 0&&(l=s[Ra]=new Set);var c=i+"__bubble";l.has(c)||(Zw(s,i,2,!1),l.add(c))}function Vy(i,s,l){var c=0;s&&(c|=4),Zw(l,i,c,s)}var Vf="_reactListening"+Math.random().toString(36).slice(2);function My(i){if(!i[Vf]){i[Vf]=!0,Xu.forEach(function(l){l!=="selectionchange"&&(ZD.has(l)||Vy(l,!1,i),Vy(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Vf]||(s[Vf]=!0,Vy("selectionchange",!1,s))}}function Zw(i,s,l,c){switch(wb(s)){case 2:var f=AP;break;case 8:f=SP;break;default:f=Yy}l=f.bind(null,s,l,i),f=void 0,!lr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function Ly(i,s,l,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Ar(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}zd(function(){var L=g,Z=Xo(l),re=[];e:{var G=jT.get(i);if(G!==void 0){var J=Jo,Ee=i;switch(i){case"keypress":if(Fr(l)===0)break e;case"keydown":case"keyup":J=il;break;case"focusin":Ee="focus",J=tl;break;case"focusout":Ee="blur",J=tl;break;case"beforeblur":case"afterblur":J=tl;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Kd;break;case UT:case zT:case BT:J=nl;break;case FT:J=Yd;break;case"scroll":case"scrollend":J=Bd;break;case"wheel":J=sl;break;case"copy":case"cut":case"paste":J=rl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=uc;break;case"toggle":case"beforetoggle":J=Xd}var De=(s&4)!==0,Ct=!De&&(i==="scroll"||i==="scrollend"),z=De?G!==null?G+"Capture":null:G;De=[];for(var k=L,H;k!==null;){var ee=k;if(H=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||H===null||z===null||(ee=Na(k,z),ee!=null&&De.push(Bc(k,ee,H))),Ct)break;k=k.return}0<De.length&&(G=new J(G,Ee,null,l,Z),re.push({event:G,listeners:De}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",J=i==="mouseout"||i==="pointerout",G&&l!==or&&(Ee=l.relatedTarget||l.fromElement)&&(Ar(Ee)||Ee[vi]))break e;if((J||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,J?(Ee=l.relatedTarget||l.toElement,J=L,Ee=Ee?Ar(Ee):null,Ee!==null&&(Ct=we(Ee),De=Ee.tag,Ee!==Ct||De!==5&&De!==27&&De!==6)&&(Ee=null)):(J=null,Ee=L),J!==Ee)){if(De=ur,ee="onMouseLeave",z="onMouseEnter",k="mouse",(i==="pointerout"||i==="pointerover")&&(De=uc,ee="onPointerLeave",z="onPointerEnter",k="pointer"),Ct=J==null?G:gs(J),H=Ee==null?G:gs(Ee),G=new De(ee,k+"leave",J,l,Z),G.target=Ct,G.relatedTarget=H,ee=null,Ar(Z)===L&&(De=new De(z,k+"enter",Ee,l,Z),De.target=H,De.relatedTarget=Ct,ee=De),Ct=ee,J&&Ee)t:{for(De=J,z=Ee,k=0,H=De;H;H=Cl(H))k++;for(H=0,ee=z;ee;ee=Cl(ee))H++;for(;0<k-H;)De=Cl(De),k--;for(;0<H-k;)z=Cl(z),H--;for(;k--;){if(De===z||z!==null&&De===z.alternate)break t;De=Cl(De),z=Cl(z)}De=null}else De=null;J!==null&&eb(re,G,J,De,!1),Ee!==null&&Ct!==null&&eb(re,Ct,Ee,De,!0)}}e:{if(G=L?gs(L):window,J=G.nodeName&&G.nodeName.toLowerCase(),J==="select"||J==="input"&&G.type==="file")var ye=RT;else if(Qt(G))if(CT)ye=hD;else{ye=uD;var Le=lD}else J=G.nodeName,!J||J.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?L&&nc(L.elementType)&&(ye=RT):ye=cD;if(ye&&(ye=ye(i,L))){Ri(re,ye,l,Z);break e}Le&&Le(i,G,L),i==="focusout"&&L&&G.type==="number"&&L.memoizedProps.value!=null&&Wo(G,"number",G.value)}switch(Le=L?gs(L):window,i){case"focusin":(Qt(Le)||Le.contentEditable==="true")&&(al=Le,pg=L,dc=null);break;case"focusout":dc=pg=al=null;break;case"mousedown":mg=!0;break;case"contextmenu":case"mouseup":case"dragend":mg=!1,MT(re,l,Z);break;case"selectionchange":if(pD)break;case"keydown":case"keyup":MT(re,l,Z)}var be;if(Hr)e:{switch(i){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else qe?Y(i,l)&&(Se="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Se="onCompositionStart");Se&&(E&&l.locale!=="ko"&&(qe||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&qe&&(be=ic()):(Br=Z,ws="value"in Br?Br.value:Br.textContent,qe=!0)),Le=Mf(L,Se),0<Le.length&&(Se=new oc(Se,i,null,l,Z),re.push({event:Se,listeners:Le}),be?Se.data=be:(be=ue(l),be!==null&&(Se.data=be)))),(be=y?Kt(i,l):He(i,l))&&(Se=Mf(L,"onBeforeInput"),0<Se.length&&(Le=new oc("onBeforeInput","beforeinput",null,l,Z),re.push({event:Le,listeners:Se}),Le.data=be)),WD(re,i,L,l,Z)}Jw(re,s)})}function Bc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Mf(i,s){for(var l=s+"Capture",c=[];i!==null;){var f=i,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Na(i,l),f!=null&&c.unshift(Bc(i,f,g)),f=Na(i,s),f!=null&&c.push(Bc(i,f,g))),i=i.return}return c}function Cl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function eb(i,s,l,c,f){for(var g=s._reactName,T=[];l!==null&&l!==c;){var b=l,C=b.alternate,L=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||L===null||(C=L,f?(L=Na(l,g),L!=null&&T.unshift(Bc(l,L,C))):f||(L=Na(l,g),L!=null&&T.push(Bc(l,L,C)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var eP=/\r\n?/g,tP=/\u0000|\uFFFD/g;function tb(i){return(typeof i=="string"?i:""+i).replace(eP,`
`).replace(tP,"")}function nb(i,s){return s=tb(s),tb(i)===s}function Lf(){}function it(i,s,l,c,f,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||ar(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&ar(i,""+c);break;case"className":vs(i,"class",c);break;case"tabIndex":vs(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(i,l,c);break;case"style":Ud(i,c,g);break;case"data":if(s!=="object"){vs(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=zr(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&it(i,s,"name",f.name,f,null),it(i,s,"formEncType",f.formEncType,f,null),it(i,s,"formMethod",f.formMethod,f,null),it(i,s,"formTarget",f.formTarget,f,null)):(it(i,s,"encType",f.encType,f,null),it(i,s,"method",f.method,f,null),it(i,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=zr(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=Lf);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=zr(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":je("beforetoggle",i),je("toggle",i),_s(i,"popover",c);break;case"xlinkActuate":sr(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":sr(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":sr(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":sr(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":sr(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":sr(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":sr(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":sr(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":sr(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":_s(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=og.get(l)||l,_s(i,l,c))}}function Uy(i,s,l,c,f,g){switch(l){case"style":Ud(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?ar(i,c):(typeof c=="number"||typeof c=="bigint")&&ar(i,""+c);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Lf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),s=l.slice(2,f?l.length-7:void 0),g=i[Gt]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,f);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):_s(i,l,c)}}}function mn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",i),je("load",i);var c=!1,f=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,g,T,l,null)}}f&&it(i,s,"srcSet",l.srcSet,l,null),c&&it(i,s,"src",l.src,l,null);return;case"input":je("invalid",i);var b=g=T=f=null,C=null,L=null;for(c in l)if(l.hasOwnProperty(c)){var Z=l[c];if(Z!=null)switch(c){case"name":f=Z;break;case"type":T=Z;break;case"checked":C=Z;break;case"defaultChecked":L=Z;break;case"value":g=Z;break;case"defaultValue":b=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,s));break;default:it(i,s,c,Z,l,null)}}Da(i,g,b,C,L,T,f,!1),xa(i);return;case"select":je("invalid",i),c=T=g=null;for(f in l)if(l.hasOwnProperty(f)&&(b=l[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:it(i,s,f,b,l,null)}s=g,l=T,i.multiple=!!c,s!=null?Qe(i,!!c,s,!1):l!=null&&Qe(i,!!c,l,!0);return;case"textarea":je("invalid",i),g=f=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:it(i,s,T,b,l,null)}Ts(i,c,f,g),xa(i);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(c=l[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:it(i,s,C,c,l,null)}return;case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":je("load",i);break;case"video":case"audio":for(c=0;c<zc.length;c++)je(zc[c],i);break;case"image":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"embed":case"source":case"link":je("error",i),je("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in l)if(l.hasOwnProperty(L)&&(c=l[L],c!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,L,c,l,null)}return;default:if(nc(s)){for(Z in l)l.hasOwnProperty(Z)&&(c=l[Z],c!==void 0&&Uy(i,s,Z,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&it(i,s,b,c,l,null))}function nP(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,C=null,L=null,Z=null;for(J in l){var re=l[J];if(l.hasOwnProperty(J)&&re!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":C=re;default:c.hasOwnProperty(J)||it(i,s,J,null,c,re)}}for(var G in c){var J=c[G];if(re=l[G],c.hasOwnProperty(G)&&(J!=null||re!=null))switch(G){case"type":g=J;break;case"name":f=J;break;case"checked":L=J;break;case"defaultChecked":Z=J;break;case"value":T=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,s));break;default:J!==re&&it(i,s,G,J,c,re)}}Es(i,T,b,C,L,Z,g,f);return;case"select":J=T=b=G=null;for(g in l)if(C=l[g],l.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":J=C;default:c.hasOwnProperty(g)||it(i,s,g,null,c,C)}for(f in c)if(g=c[f],C=l[f],c.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":G=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&it(i,s,f,g,c,C)}s=b,l=T,c=J,G!=null?Qe(i,!!l,G,!1):!!c!=!!l&&(s!=null?Qe(i,!!l,s,!0):Qe(i,!!l,l?[]:"",!1));return;case"textarea":J=G=null;for(b in l)if(f=l[b],l.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:it(i,s,b,null,c,f)}for(T in c)if(f=c[T],g=l[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":G=f;break;case"defaultValue":J=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&it(i,s,T,f,c,g)}Pa(i,G,J);return;case"option":for(var Ee in l)if(G=l[Ee],l.hasOwnProperty(Ee)&&G!=null&&!c.hasOwnProperty(Ee))switch(Ee){case"selected":i.selected=!1;break;default:it(i,s,Ee,null,c,G)}for(C in c)if(G=c[C],J=l[C],c.hasOwnProperty(C)&&G!==J&&(G!=null||J!=null))switch(C){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:it(i,s,C,G,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in l)G=l[De],l.hasOwnProperty(De)&&G!=null&&!c.hasOwnProperty(De)&&it(i,s,De,null,c,G);for(L in c)if(G=c[L],J=l[L],c.hasOwnProperty(L)&&G!==J&&(G!=null||J!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,s));break;default:it(i,s,L,G,c,J)}return;default:if(nc(s)){for(var Ct in l)G=l[Ct],l.hasOwnProperty(Ct)&&G!==void 0&&!c.hasOwnProperty(Ct)&&Uy(i,s,Ct,void 0,c,G);for(Z in c)G=c[Z],J=l[Z],!c.hasOwnProperty(Z)||G===J||G===void 0&&J===void 0||Uy(i,s,Z,G,c,J);return}}for(var z in l)G=l[z],l.hasOwnProperty(z)&&G!=null&&!c.hasOwnProperty(z)&&it(i,s,z,null,c,G);for(re in c)G=c[re],J=l[re],!c.hasOwnProperty(re)||G===J||G==null&&J==null||it(i,s,re,G,c,J)}var zy=null,By=null;function Uf(i){return i.nodeType===9?i:i.ownerDocument}function rb(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ib(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function Fy(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var jy=null;function rP(){var i=window.event;return i&&i.type==="popstate"?i===jy?!1:(jy=i,!0):(jy=null,!1)}var sb=typeof setTimeout=="function"?setTimeout:void 0,iP=typeof clearTimeout=="function"?clearTimeout:void 0,ab=typeof Promise=="function"?Promise:void 0,sP=typeof queueMicrotask=="function"?queueMicrotask:typeof ab<"u"?function(i){return ab.resolve(null).then(i).catch(aP)}:sb;function aP(i){setTimeout(function(){throw i})}function qy(i,s){var l=s,c=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(c===0){i.removeChild(f),Qc(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=f}while(l);Qc(s)}function Hy(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Hy(l),Ca(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function oP(i,s,l,c){for(;i.nodeType===1;){var f=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ms])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=xr(i.nextSibling),i===null)break}return null}function lP(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=xr(i.nextSibling),i===null))return null;return i}function xr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function ob(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function lb(i,s,l){switch(s=Uf(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var vr=new Map,ub=new Set;function zf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var ji=fe.d;fe.d={f:uP,r:cP,D:hP,C:dP,L:fP,m:pP,X:gP,S:mP,M:yP};function uP(){var i=ji.f(),s=Pf();return i||s}function cP(i){var s=Ei(i);s!==null&&s.tag===5&&s.type==="form"?M0(s):ji.r(i)}var xl=typeof document>"u"?null:document;function cb(i,s,l){var c=xl;if(c&&typeof s=="string"&&s){var f=At(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),ub.has(f)||(ub.add(f),i={rel:i,crossOrigin:l,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),mn(s,"link",i),yt(s),c.head.appendChild(s)))}}function hP(i){ji.D(i),cb("dns-prefetch",i,null)}function dP(i,s){ji.C(i,s),cb("preconnect",i,s)}function fP(i,s,l){ji.L(i,s,l);var c=xl;if(c&&i&&s){var f='link[rel="preload"][as="'+At(s)+'"]';s==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+At(l.imageSizes)+'"]')):f+='[href="'+At(i)+'"]';var g=f;switch(s){case"style":g=Dl(i);break;case"script":g=Pl(i)}vr.has(g)||(i=P({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),vr.set(g,i),c.querySelector(f)!==null||s==="style"&&c.querySelector(Fc(g))||s==="script"&&c.querySelector(jc(g))||(s=c.createElement("link"),mn(s,"link",i),yt(s),c.head.appendChild(s)))}}function pP(i,s){ji.m(i,s);var l=xl;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+At(c)+'"][href="'+At(i)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Pl(i)}if(!vr.has(g)&&(i=P({rel:"modulepreload",href:i},s),vr.set(g,i),l.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(jc(g)))return}c=l.createElement("link"),mn(c,"link",i),yt(c),l.head.appendChild(c)}}}function mP(i,s,l){ji.S(i,s,l);var c=xl;if(c&&i){var f=ys(c).hoistableStyles,g=Dl(i);s=s||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(Fc(g)))b.loading=5;else{i=P({rel:"stylesheet",href:i,"data-precedence":s},l),(l=vr.get(g))&&$y(i,l);var C=T=c.createElement("link");yt(C),mn(C,"link",i),C._p=new Promise(function(L,Z){C.onload=L,C.onerror=Z}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Bf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function gP(i,s){ji.X(i,s);var l=xl;if(l&&i){var c=ys(l).hoistableScripts,f=Pl(i),g=c.get(f);g||(g=l.querySelector(jc(f)),g||(i=P({src:i,async:!0},s),(s=vr.get(f))&&Gy(i,s),g=l.createElement("script"),yt(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function yP(i,s){ji.M(i,s);var l=xl;if(l&&i){var c=ys(l).hoistableScripts,f=Pl(i),g=c.get(f);g||(g=l.querySelector(jc(f)),g||(i=P({src:i,async:!0,type:"module"},s),(s=vr.get(f))&&Gy(i,s),g=l.createElement("script"),yt(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function hb(i,s,l,c){var f=(f=rr.current)?zf(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=Dl(l.href),l=ys(f).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=Dl(l.href);var g=ys(f).hoistableStyles,T=g.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=f.querySelector(Fc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),vr.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vr.set(i,l),g||_P(f,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Pl(l),l=ys(f).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function Dl(i){return'href="'+At(i)+'"'}function Fc(i){return'link[rel="stylesheet"]['+i+"]"}function db(i){return P({},i,{"data-precedence":i.precedence,precedence:null})}function _P(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),mn(s,"link",l),yt(s),i.head.appendChild(s))}function Pl(i){return'[src="'+At(i)+'"]'}function jc(i){return"script[async]"+i}function fb(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+At(l.href)+'"]');if(c)return s.instance=c,yt(c),c;var f=P({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),yt(c),mn(c,"style",f),Bf(c,l.precedence,i),s.instance=c;case"stylesheet":f=Dl(l.href);var g=i.querySelector(Fc(f));if(g)return s.state.loading|=4,s.instance=g,yt(g),g;c=db(l),(f=vr.get(f))&&$y(c,f),g=(i.ownerDocument||i).createElement("link"),yt(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",c),s.state.loading|=4,Bf(g,l.precedence,i),s.instance=g;case"script":return g=Pl(l.src),(f=i.querySelector(jc(g)))?(s.instance=f,yt(f),f):(c=l,(f=vr.get(g))&&(c=P({},l),Gy(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),yt(f),mn(f,"link",c),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Bf(c,l.precedence,i));return s.instance}function Bf(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function $y(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function Gy(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var Ff=null;function pb(i,s,l){if(Ff===null){var c=new Map,f=Ff=new Map;f.set(l,c)}else f=Ff,c=f.get(l),c||(c=new Map,f.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),f=0;f<l.length;f++){var g=l[f];if(!(g[ms]||g[tn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function mb(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function vP(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function gb(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var qc=null;function EP(){}function TP(i,s,l){if(qc===null)throw Error(r(475));var c=qc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Dl(l.href),g=i.querySelector(Fc(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=jf.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,yt(g);return}g=i.ownerDocument||i,l=db(l),(f=vr.get(f))&&$y(l,f),g=g.createElement("link"),yt(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=jf.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function wP(){if(qc===null)throw Error(r(475));var i=qc;return i.stylesheets&&i.count===0&&Ky(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&Ky(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function jf(){if(this.count--,this.count===0){if(this.stylesheets)Ky(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var qf=null;function Ky(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,qf=new Map,s.forEach(bP,i),qf=null,jf.call(i))}function bP(i,s){if(!(s.state.loading&4)){var l=qf.get(i);if(l)var c=l.get(null);else{l=new Map,qf.set(i,l);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,f),l.set(T,f),this.count++,c=jf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var Hc={$$typeof:S,Provider:null,Consumer:null,_currentValue:xe,_currentValue2:xe,_threadCount:0};function IP(i,s,l,c,f,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.hiddenUpdates=Go(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function yb(i,s,l,c,f,g,T,b,C,L,Z,re){return i=new IP(i,s,l,T,b,C,L,re),s=1,g===!0&&(s|=24),g=yr(3,null,null,s),i.current=g,g.stateNode=i,s=Ag(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},sy(g),i}function _b(i){return i?(i=ul,i):ul}function vb(i,s,l,c,f,g){f=_b(f),c.context===null?c.context=f:c.pendingContext=f,c=Ds(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=Ps(i,c,s),l!==null&&(Pn(l,i,s),Rc(l,i,s))}function Eb(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Qy(i,s){Eb(i,s),(i=i.alternate)&&Eb(i,s)}function Tb(i){if(i.tag===13){var s=bs(i,67108864);s!==null&&Pn(s,i,67108864),Qy(i,67108864)}}var Hf=!0;function AP(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=2,Yy(i,s,l,c)}finally{fe.p=g,A.T=f}}function SP(i,s,l,c){var f=A.T;A.T=null;var g=fe.p;try{fe.p=8,Yy(i,s,l,c)}finally{fe.p=g,A.T=f}}function Yy(i,s,l,c){if(Hf){var f=Wy(c);if(f===null)Ly(i,s,c,$f,l),bb(i,c);else if(CP(f,i,s,l,c))c.stopPropagation();else if(bb(i,c),s&4&&-1<RP.indexOf(i)){for(;f!==null;){var g=Ei(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ir(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Rn(T);b.entanglements[1]|=C,T&=~C}Wr(g),(vt&6)===0&&(Cf=Ln()+500,Uc(0))}}break;case 13:b=bs(g,2),b!==null&&Pn(b,g,2),Pf(),Qy(g,2)}if(g=Wy(c),g===null&&Ly(i,s,c,$f,l),g===f)break;f=g}f!==null&&c.stopPropagation()}else Ly(i,s,c,null,l)}}function Wy(i){return i=Xo(i),Xy(i)}var $f=null;function Xy(i){if($f=null,i=Ar(i),i!==null){var s=we(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=Oe(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return $f=i,null}function wb(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xd()){case $t:return 2;case en:return 8;case _i:case Dd:return 32;case Gu:return 268435456;default:return 32}default:return 32}}var Jy=!1,Us=null,zs=null,Bs=null,$c=new Map,Gc=new Map,Fs=[],RP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bb(i,s){switch(i){case"focusin":case"focusout":Us=null;break;case"dragenter":case"dragleave":zs=null;break;case"mouseover":case"mouseout":Bs=null;break;case"pointerover":case"pointerout":$c.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gc.delete(s.pointerId)}}function Kc(i,s,l,c,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ei(s),s!==null&&Tb(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function CP(i,s,l,c,f){switch(s){case"focusin":return Us=Kc(Us,i,s,l,c,f),!0;case"dragenter":return zs=Kc(zs,i,s,l,c,f),!0;case"mouseover":return Bs=Kc(Bs,i,s,l,c,f),!0;case"pointerover":var g=f.pointerId;return $c.set(g,Kc($c.get(g)||null,i,s,l,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Gc.set(g,Kc(Gc.get(g)||null,i,s,l,c,f)),!0}return!1}function Ib(i){var s=Ar(i.target);if(s!==null){var l=we(s);if(l!==null){if(s=l.tag,s===13){if(s=Oe(l),s!==null){i.blockedOn=s,ps(i.priority,function(){if(l.tag===13){var c=Xn(),f=bs(l,c);f!==null&&Pn(f,l,c),Qy(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Gf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Wy(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);or=c,l.target.dispatchEvent(c),or=null}else return s=Ei(l),s!==null&&Tb(s),i.blockedOn=l,!1;s.shift()}return!0}function Ab(i,s,l){Gf(i)&&l.delete(s)}function xP(){Jy=!1,Us!==null&&Gf(Us)&&(Us=null),zs!==null&&Gf(zs)&&(zs=null),Bs!==null&&Gf(Bs)&&(Bs=null),$c.forEach(Ab),Gc.forEach(Ab)}function Kf(i,s){i.blockedOn===s&&(i.blockedOn=null,Jy||(Jy=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xP)))}var Qf=null;function Sb(i){Qf!==i&&(Qf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Qf===i&&(Qf=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],f=i[s+2];if(typeof c!="function"){if(Xy(c||l)===null)continue;break}var g=Ei(l);g!==null&&(i.splice(s,3),s-=3,Fg(g,{pending:!0,data:f,method:l.method,action:c},c,f))}}))}function Qc(i){function s(C){return Kf(C,i)}Us!==null&&Kf(Us,i),zs!==null&&Kf(zs,i),Bs!==null&&Kf(Bs,i),$c.forEach(s),Gc.forEach(s);for(var l=0;l<Fs.length;l++){var c=Fs[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Fs.length&&(l=Fs[0],l.blockedOn===null);)Ib(l),l.blockedOn===null&&Fs.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var f=l[c],g=l[c+1],T=f[Gt]||null;if(typeof g=="function")T||Sb(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[Gt]||null)b=T.formAction;else if(Xy(f)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),Sb(l)}}}function Zy(i){this._internalRoot=i}Yf.prototype.render=Zy.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Xn();vb(l,c,i,s,null,null)},Yf.prototype.unmount=Zy.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Sl(),vb(i.current,2,null,i,null,null),Pf(),s[vi]=null}};function Yf(i){this._internalRoot=i}Yf.prototype.unstable_scheduleHydration=function(i){if(i){var s=Vd();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Fs.length&&s!==0&&s<Fs[l].priority;l++);Fs.splice(l,0,i),l===0&&Ib(i)}};var Rb=e.version;if(Rb!=="19.0.0")throw Error(r(527,Rb,"19.0.0"));fe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=se(s),i=i!==null?ge(i):null,i=i===null?null:i.stateNode,i};var DP={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ar,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wf.isDisabled&&Wf.supportsFiber)try{ls=Wf.inject(DP),En=Wf}catch{}}return Wc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",f=H0,g=$0,T=G0,b=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=yb(i,1,!1,null,null,l,c,f,g,T,b,null),i[vi]=s.current,My(i.nodeType===8?i.parentNode:i),new Zy(s)},Wc.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,f="",g=H0,T=$0,b=G0,C=null,L=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(C=l.unstable_transitionCallbacks),l.formState!==void 0&&(L=l.formState)),s=yb(i,1,!0,s,l??null,c,f,g,T,b,C,L),s.context=_b(null),l=s.current,c=Xn(),f=Ds(c),f.callback=null,Ps(l,f,c),s.current.lanes=c,Ot(s,c),Wr(s),i[vi]=s.current,My(i),new Yf(s)},Wc.version="19.0.0",Wc}var Lb;function FP(){if(Lb)return t_.exports;Lb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),t_.exports=BP(),t_.exports}var jP=FP(),W=xv();const xh=NP(W);var Xc={},Ub;function qP(){if(Ub)return Xc;Ub=1,Object.defineProperty(Xc,"__esModule",{value:!0}),Xc.parse=u,Xc.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const x=new o,U=w.length;if(U<2)return x;const M=(S==null?void 0:S.decode)||_;let q=0;do{const X=w.indexOf("=",q);if(X===-1)break;const K=w.indexOf(";",q),oe=K===-1?U:K;if(X>oe){q=w.lastIndexOf(";",X-1)+1;continue}const te=d(w,q,X),le=p(w,X,te),D=w.slice(te,le);if(x[D]===void 0){let R=d(w,X+1,oe),A=p(w,oe,R);const P=M(w.slice(R,A));x[D]=P}q=oe+1}while(q<U);return x}function d(w,S,x){do{const U=w.charCodeAt(S);if(U!==32&&U!==9)return S}while(++S<x);return x}function p(w,S,x){for(;S>x;){const U=w.charCodeAt(--S);if(U!==32&&U!==9)return S+1}return x}function m(w,S,x){const U=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const M=U(S);if(!e.test(M))throw new TypeError(`argument val is invalid: ${S}`);let q=w+"="+M;if(!x)return q;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);q+="; Max-Age="+x.maxAge}if(x.domain){if(!t.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);q+="; Domain="+x.domain}if(x.path){if(!r.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);q+="; Path="+x.path}if(x.expires){if(!v(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);q+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(q+="; HttpOnly"),x.secure&&(q+="; Secure"),x.partitioned&&(q+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return q}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return Xc}qP();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zb="popstate";function HP(n={}){function e(r,a){let{pathname:o,search:u,hash:d}=r.location;return P_("",{pathname:o,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Dh(a)}return GP(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $P(){return Math.random().toString(36).substring(2,10)}function Bb(n,e){return{usr:n.state,key:n.key,idx:e}}function P_(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Cu(e):e,state:t,key:e&&e.key||r||$P()}}function Dh({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Cu(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function GP(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,d="POP",p=null,m=_();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function _(){return(u.state||{idx:null}).idx}function v(){d="POP";let M=_(),q=M==null?null:M-m;m=M,p&&p({action:d,location:U.location,delta:q})}function w(M,q){d="PUSH";let X=P_(U.location,M,q);m=_()+1;let K=Bb(X,m),oe=U.createHref(X);try{u.pushState(K,"",oe)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;a.location.assign(oe)}o&&p&&p({action:d,location:U.location,delta:1})}function S(M,q){d="REPLACE";let X=P_(U.location,M,q);m=_();let K=Bb(X,m),oe=U.createHref(X);u.replaceState(K,"",oe),o&&p&&p({action:d,location:U.location,delta:0})}function x(M){let q=a.location.origin!=="null"?a.location.origin:a.location.href,X=typeof M=="string"?M:Dh(M);return X=X.replace(/ $/,"%20"),Et(q,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,q)}let U={get action(){return d},get location(){return n(a,u)},listen(M){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(zb,v),p=M,()=>{a.removeEventListener(zb,v),p=null}},createHref(M){return e(a,M)},createURL:x,encodeLocation(M){let q=x(M);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:w,replace:S,go(M){return u.go(M)}};return U}function dS(n,e,t="/"){return KP(n,e,t,!1)}function KP(n,e,t,r){let a=typeof e=="string"?Cu(e):e,o=Qi(a.pathname||"/",t);if(o==null)return null;let u=fS(n);QP(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=sN(o);d=rN(u[p],m,r)}return d}function fS(n,e=[],t=[],r=""){let a=(o,u,d)=>{let p={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};p.relativePath.startsWith("/")&&(Et(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=Gi([r,p.relativePath]),_=t.concat(p);o.children&&o.children.length>0&&(Et(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),fS(o.children,e,_,m)),!(o.path==null&&!o.index)&&e.push({path:m,score:tN(m,o.index),routesMeta:_})};return n.forEach((o,u)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))a(o,u);else for(let p of pS(o.path))a(o,u,p)}),e}function pS(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=pS(r.join("/")),d=[];return d.push(...u.map(p=>p===""?o:[o,p].join("/"))),a&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function QP(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:nN(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var YP=/^:[\w-]+$/,WP=3,XP=2,JP=1,ZP=10,eN=-2,Fb=n=>n==="*";function tN(n,e){let t=n.split("/"),r=t.length;return t.some(Fb)&&(r+=eN),e&&(r+=XP),t.filter(a=>!Fb(a)).reduce((a,o)=>a+(YP.test(o)?WP:o===""?JP:ZP),r)}function nN(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function rN(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,_=o==="/"?e:e.slice(o.length)||"/",v=Dp({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),w=p.route;if(!v&&m&&t&&!r[r.length-1].route.index&&(v=Dp({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:Gi([o,v.pathname]),pathnameBase:uN(Gi([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=Gi([o,v.pathnameBase]))}return u}function Dp(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=iN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,{paramName:_,isOptional:v},w)=>{if(_==="*"){let x=d[w]||"";u=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const S=d[w];return v&&!S?m[_]=void 0:m[_]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:o,pathnameBase:u,pattern:n}}function iN(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function sN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function aN(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Cu(n):n;return{pathname:t?t.startsWith("/")?t:oN(t,e):e,search:cN(r),hash:hN(a)}}function oN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function a_(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function mS(n){let e=lN(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function gS(n,e,t,r=!1){let a;typeof n=="string"?a=Cu(n):(a={...n},Et(!a.pathname||!a.pathname.includes("?"),a_("?","pathname","search",a)),Et(!a.pathname||!a.pathname.includes("#"),a_("#","pathname","hash",a)),Et(!a.search||!a.search.includes("#"),a_("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}d=v>=0?e[v]:"/"}let p=aN(a,d),m=u&&u!=="/"&&u.endsWith("/"),_=(o||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var Gi=n=>n.join("/").replace(/\/\/+/g,"/"),uN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),cN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,hN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function dN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var yS=["POST","PUT","PATCH","DELETE"];new Set(yS);var fN=["GET",...yS];new Set(fN);var xu=W.createContext(null);xu.displayName="DataRouter";var lm=W.createContext(null);lm.displayName="DataRouterState";var _S=W.createContext({isTransitioning:!1});_S.displayName="ViewTransition";var pN=W.createContext(new Map);pN.displayName="Fetchers";var mN=W.createContext(null);mN.displayName="Await";var mi=W.createContext(null);mi.displayName="Navigation";var rd=W.createContext(null);rd.displayName="Location";var gi=W.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var Dv=W.createContext(null);Dv.displayName="RouteError";function gN(n,{relative:e}={}){Et(id(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=W.useContext(mi),{hash:a,pathname:o,search:u}=ad(n,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:Gi([t,o])),r.createHref({pathname:d,search:u,hash:a})}function id(){return W.useContext(rd)!=null}function Vo(){return Et(id(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(rd).location}var vS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ES(n){W.useContext(mi).static||W.useLayoutEffect(n)}function sd(){let{isDataRoute:n}=W.useContext(gi);return n?DN():yN()}function yN(){Et(id(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(xu),{basename:e,navigator:t}=W.useContext(mi),{matches:r}=W.useContext(gi),{pathname:a}=Vo(),o=JSON.stringify(mS(r)),u=W.useRef(!1);return ES(()=>{u.current=!0}),W.useCallback((p,m={})=>{if(ui(u.current,vS),!u.current)return;if(typeof p=="number"){t.go(p);return}let _=gS(p,JSON.parse(o),a,m.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Gi([e,_.pathname])),(m.replace?t.replace:t.push)(_,m.state,m)},[e,t,o,a,n])}W.createContext(null);function _N(){let{matches:n}=W.useContext(gi),e=n[n.length-1];return e?e.params:{}}function ad(n,{relative:e}={}){let{matches:t}=W.useContext(gi),{pathname:r}=Vo(),a=JSON.stringify(mS(t));return W.useMemo(()=>gS(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function vN(n,e){return TS(n,e)}function TS(n,e,t,r){var X;Et(id(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=W.useContext(mi),{matches:u}=W.useContext(gi),d=u[u.length-1],p=d?d.params:{},m=d?d.pathname:"/",_=d?d.pathnameBase:"/",v=d&&d.route;{let K=v&&v.path||"";wS(m,!v||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let w=Vo(),S;if(e){let K=typeof e=="string"?Cu(e):e;Et(_==="/"||((X=K.pathname)==null?void 0:X.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${K.pathname}" was given in the \`location\` prop.`),S=K}else S=w;let x=S.pathname||"/",U=x;if(_!=="/"){let K=_.replace(/^\//,"").split("/");U="/"+x.replace(/^\//,"").split("/").slice(K.length).join("/")}let M=!o&&t&&t.matches&&t.matches.length>0?t.matches:dS(n,{pathname:U});ui(v||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ui(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=IN(M&&M.map(K=>Object.assign({},K,{params:Object.assign({},p,K.params),pathname:Gi([_,a.encodeLocation?a.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?_:Gi([_,a.encodeLocation?a.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),u,t,r);return e&&q?W.createElement(rd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},q):q}function EN(){let n=xN(),e=dN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:o},"ErrorBoundary")," or"," ",W.createElement("code",{style:o},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:a},t):null,u)}var TN=W.createElement(EN,null),wN=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(gi.Provider,{value:this.props.routeContext},W.createElement(Dv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bN({routeContext:n,match:e,children:t}){let r=W.useContext(xu);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(gi.Provider,{value:n},t)}function IN(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let p=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);Et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:_,errors:v}=t,w=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,_)=>{let v,w=!1,S=null,x=null;t&&(v=o&&m.route.id?o[m.route.id]:void 0,S=m.route.errorElement||TN,u&&(d<0&&_===0?(wS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):d===_&&(w=!0,x=m.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,_+1)),M=()=>{let q;return v?q=S:w?q=x:m.route.Component?q=W.createElement(m.route.Component,null):m.route.element?q=m.route.element:q=p,W.createElement(bN,{match:m,routeContext:{outlet:p,matches:U,isDataRoute:t!=null},children:q})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?W.createElement(wN,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:M(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):M()},null)}function Pv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function AN(n){let e=W.useContext(xu);return Et(e,Pv(n)),e}function SN(n){let e=W.useContext(lm);return Et(e,Pv(n)),e}function RN(n){let e=W.useContext(gi);return Et(e,Pv(n)),e}function Nv(n){let e=RN(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function CN(){return Nv("useRouteId")}function xN(){var r;let n=W.useContext(Dv),e=SN("useRouteError"),t=Nv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function DN(){let{router:n}=AN("useNavigate"),e=Nv("useNavigate"),t=W.useRef(!1);return ES(()=>{t.current=!0}),W.useCallback(async(a,o={})=>{ui(t.current,vS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var jb={};function wS(n,e,t){!e&&!jb[n]&&(jb[n]=!0,ui(!1,t))}W.memo(PN);function PN({routes:n,future:e,state:t}){return TS(n,void 0,t,e)}function lp(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NN({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){Et(!id(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=Cu(t));let{pathname:p="/",search:m="",hash:_="",state:v=null,key:w="default"}=t,S=W.useMemo(()=>{let x=Qi(p,u);return x==null?null:{location:{pathname:x,search:m,hash:_,state:v,key:w},navigationType:r}},[u,p,m,_,v,w,r]);return ui(S!=null,`<Router basename="${u}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:W.createElement(mi.Provider,{value:d},W.createElement(rd.Provider,{children:e,value:S}))}function ON({children:n,location:e}){return vN(N_(n),e)}function N_(n,e=[]){let t=[];return W.Children.forEach(n,(r,a)=>{if(!W.isValidElement(r))return;let o=[...e,a];if(r.type===W.Fragment){t.push.apply(t,N_(r.props.children,o));return}Et(r.type===lp,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=N_(r.props.children,o)),t.push(u)}),t}var up="get",cp="application/x-www-form-urlencoded";function um(n){return n!=null&&typeof n.tagName=="string"}function kN(n){return um(n)&&n.tagName.toLowerCase()==="button"}function VN(n){return um(n)&&n.tagName.toLowerCase()==="form"}function MN(n){return um(n)&&n.tagName.toLowerCase()==="input"}function LN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function UN(n,e){return n.button===0&&(!e||e==="_self")&&!LN(n)}var Xf=null;function zN(){if(Xf===null)try{new FormData(document.createElement("form"),0),Xf=!1}catch{Xf=!0}return Xf}var BN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function o_(n){return n!=null&&!BN.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cp}"`),null):n}function FN(n,e){let t,r,a,o,u;if(VN(n)){let d=n.getAttribute("action");r=d?Qi(d,e):null,t=n.getAttribute("method")||up,a=o_(n.getAttribute("enctype"))||cp,o=new FormData(n)}else if(kN(n)||MN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(r=p?Qi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||up,a=o_(n.getAttribute("formenctype"))||o_(d.getAttribute("enctype"))||cp,o=new FormData(d,n),!zN()){let{name:m,type:_,value:v}=n;if(_==="image"){let w=m?`${m}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else m&&o.append(m,v)}}else{if(um(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=up,r=null,a=cp,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function Ov(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function jN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function HN(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await jN(o,t);return u.links?u.links():[]}return[]}));return QN(r.flat(1).filter(qN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function qb(n,e,t,r,a,o){let u=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var _;return t[m].pathname!==p.pathname||((_=t[m].route.path)==null?void 0:_.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return o==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):o==="data"?e.filter((p,m)=>{var v;let _=r.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function $N(n,e,{includeHydrateFallback:t}={}){return GN(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function GN(n){return[...new Set(n)]}function KN(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function QN(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(KN(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function YN(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Qi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function bS(){let n=W.useContext(xu);return Ov(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function WN(){let n=W.useContext(lm);return Ov(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var kv=W.createContext(void 0);kv.displayName="FrameworkContext";function IS(){let n=W.useContext(kv);return Ov(n,"You must render this element inside a <HydratedRouter> element"),n}function XN(n,e){let t=W.useContext(kv),[r,a]=W.useState(!1),[o,u]=W.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:v}=e,w=W.useRef(null);W.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=q=>{q.forEach(X=>{u(X.isIntersecting)})},M=new IntersectionObserver(U,{threshold:.5});return w.current&&M.observe(w.current),()=>{M.disconnect()}}},[n]),W.useEffect(()=>{if(r){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[r]);let S=()=>{a(!0)},x=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:Jc(d,S),onBlur:Jc(p,x),onMouseEnter:Jc(m,S),onMouseLeave:Jc(_,x),onTouchStart:Jc(v,S)}]:[!1,w,{}]}function Jc(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function JN({page:n,...e}){let{router:t}=bS(),r=W.useMemo(()=>dS(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?W.createElement(eO,{page:n,matches:r,...e}):null}function ZN(n){let{manifest:e,routeModules:t}=IS(),[r,a]=W.useState([]);return W.useEffect(()=>{let o=!1;return HN(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function eO({page:n,matches:e,...t}){let r=Vo(),{manifest:a,routeModules:o}=IS(),{basename:u}=bS(),{loaderData:d,matches:p}=WN(),m=W.useMemo(()=>qb(n,e,p,a,r,"data"),[n,e,p,a,r]),_=W.useMemo(()=>qb(n,e,p,a,r,"assets"),[n,e,p,a,r]),v=W.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let x=new Set,U=!1;if(e.forEach(q=>{var K;let X=a.routes[q.route.id];!X||!X.hasLoader||(!m.some(oe=>oe.route.id===q.route.id)&&q.route.id in d&&((K=o[q.route.id])!=null&&K.shouldRevalidate)||X.hasClientLoader?U=!0:x.add(q.route.id))}),x.size===0)return[];let M=YN(n,u);return U&&x.size>0&&M.searchParams.set("_routes",e.filter(q=>x.has(q.route.id)).map(q=>q.route.id).join(",")),[M.pathname+M.search]},[u,d,r,a,m,e,n,o]),w=W.useMemo(()=>$N(_,a),[_,a]),S=ZN(_);return W.createElement(W.Fragment,null,v.map(x=>W.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),w.map(x=>W.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),S.map(({key:x,link:U})=>W.createElement("link",{key:x,...U})))}function tO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var AS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{AS&&(window.__reactRouterVersion="7.5.0")}catch{}function nO({basename:n,children:e,window:t}){let r=W.useRef();r.current==null&&(r.current=HP({window:t,v5Compat:!0}));let a=r.current,[o,u]=W.useState({action:a.action,location:a.location}),d=W.useCallback(p=>{W.startTransition(()=>u(p))},[u]);return W.useLayoutEffect(()=>a.listen(d),[a,d]),W.createElement(NN,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var SS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,RS=W.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:d,target:p,to:m,preventScrollReset:_,viewTransition:v,...w},S){let{basename:x}=W.useContext(mi),U=typeof m=="string"&&SS.test(m),M,q=!1;if(typeof m=="string"&&U&&(M=m,AS))try{let A=new URL(window.location.href),P=m.startsWith("//")?new URL(A.protocol+m):new URL(m),V=Qi(P.pathname,x);P.origin===A.origin&&V!=null?m=V+P.search+P.hash:q=!0}catch{ui(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=gN(m,{relative:a}),[K,oe,te]=XN(r,w),le=aO(m,{replace:u,state:d,target:p,preventScrollReset:_,relative:a,viewTransition:v});function D(A){e&&e(A),A.defaultPrevented||le(A)}let R=W.createElement("a",{...w,...te,href:M||X,onClick:q||o?e:D,ref:tO(S,oe),target:p,"data-discover":!U&&t==="render"?"true":void 0});return K&&!U?W.createElement(W.Fragment,null,R,W.createElement(JN,{page:X})):R});RS.displayName="Link";var rO=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:d,children:p,...m},_){let v=ad(u,{relative:m.relative}),w=Vo(),S=W.useContext(lm),{navigator:x,basename:U}=W.useContext(mi),M=S!=null&&hO(v)&&d===!0,q=x.encodeLocation?x.encodeLocation(v).pathname:v.pathname,X=w.pathname,K=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(X=X.toLowerCase(),K=K?K.toLowerCase():null,q=q.toLowerCase()),K&&U&&(K=Qi(K,U)||K);const oe=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let te=X===q||!a&&X.startsWith(q)&&X.charAt(oe)==="/",le=K!=null&&(K===q||!a&&K.startsWith(q)&&K.charAt(q.length)==="/"),D={isActive:te,isPending:le,isTransitioning:M},R=te?e:void 0,A;typeof r=="function"?A=r(D):A=[r,te?"active":null,le?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(D):o;return W.createElement(RS,{...m,"aria-current":R,className:A,ref:_,style:P,to:u,viewTransition:d},typeof p=="function"?p(D):p)});rO.displayName="NavLink";var iO=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=up,action:d,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:v,...w},S)=>{let x=uO(),U=cO(d,{relative:m}),M=u.toLowerCase()==="get"?"get":"post",q=typeof d=="string"&&SS.test(d),X=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let oe=K.nativeEvent.submitter,te=(oe==null?void 0:oe.getAttribute("formmethod"))||u;x(oe||K.currentTarget,{fetcherKey:e,method:te,navigate:t,replace:a,state:o,relative:m,preventScrollReset:_,viewTransition:v})};return W.createElement("form",{ref:S,method:M,action:U,onSubmit:r?p:X,...w,"data-discover":!q&&n==="render"?"true":void 0})});iO.displayName="Form";function sO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function CS(n){let e=W.useContext(xu);return Et(e,sO(n)),e}function aO(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let d=sd(),p=Vo(),m=ad(n,{relative:o});return W.useCallback(_=>{if(UN(_,e)){_.preventDefault();let v=t!==void 0?t:Dh(p)===Dh(m);d(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[p,d,m,t,r,e,n,a,o,u])}var oO=0,lO=()=>`__${String(++oO)}__`;function uO(){let{router:n}=CS("useSubmit"),{basename:e}=W.useContext(mi),t=CN();return W.useCallback(async(r,a={})=>{let{action:o,method:u,encType:d,formData:p,body:m}=FN(r,e);if(a.navigate===!1){let _=a.fetcherKey||lO();await n.fetch(_,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function cO(n,{relative:e}={}){let{basename:t}=W.useContext(mi),r=W.useContext(gi);Et(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...ad(n||".",{relative:e})},u=Vo();if(n==null){o.search=u.search;let d=new URLSearchParams(o.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let _=d.toString();o.search=_?`?${_}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Gi([t,o.pathname])),Dh(o)}function hO(n,e={}){let t=W.useContext(_S);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=CS("useViewTransitionState"),a=ad(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Dp(a.pathname,u)!=null||Dp(a.pathname,o)!=null}new TextEncoder;var Fn=function(){return Fn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fn.apply(this,arguments)};function Vv(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function Ph(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var ct="-ms-",gh="-moz-",et="-webkit-",xS="comm",cm="rule",Mv="decl",dO="@import",DS="@keyframes",fO="@layer",PS=Math.abs,Lv=String.fromCharCode,O_=Object.assign;function pO(n,e){return un(n,0)^45?(((e<<2^un(n,0))<<2^un(n,1))<<2^un(n,2))<<2^un(n,3):0}function NS(n){return n.trim()}function qi(n,e){return(n=e.exec(n))?n[0]:n}function ke(n,e,t){return n.replace(e,t)}function hp(n,e,t){return n.indexOf(e,t)}function un(n,e){return n.charCodeAt(e)|0}function eu(n,e,t){return n.slice(e,t)}function Jr(n){return n.length}function OS(n){return n.length}function lh(n,e){return e.push(n),n}function mO(n,e){return n.map(e).join("")}function Hb(n,e){return n.filter(function(t){return!qi(t,e)})}var hm=1,tu=1,kS=0,wr=0,Ht=0,Du="";function dm(n,e,t,r,a,o,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:hm,column:tu,length:u,return:"",siblings:d}}function Qs(n,e){return O_(dm("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Nl(n){for(;n.root;)n=Qs(n.root,{children:[n]});lh(n,n.siblings)}function gO(){return Ht}function yO(){return Ht=wr>0?un(Du,--wr):0,tu--,Ht===10&&(tu=1,hm--),Ht}function Nr(){return Ht=wr<kS?un(Du,wr++):0,tu++,Ht===10&&(tu=1,hm++),Ht}function _o(){return un(Du,wr)}function dp(){return wr}function fm(n,e){return eu(Du,n,e)}function k_(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _O(n){return hm=tu=1,kS=Jr(Du=n),wr=0,[]}function vO(n){return Du="",n}function l_(n){return NS(fm(wr-1,V_(n===91?n+2:n===40?n+1:n)))}function EO(n){for(;(Ht=_o())&&Ht<33;)Nr();return k_(n)>2||k_(Ht)>3?"":" "}function TO(n,e){for(;--e&&Nr()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return fm(n,dp()+(e<6&&_o()==32&&Nr()==32))}function V_(n){for(;Nr();)switch(Ht){case n:return wr;case 34:case 39:n!==34&&n!==39&&V_(Ht);break;case 40:n===41&&V_(n);break;case 92:Nr();break}return wr}function wO(n,e){for(;Nr()&&n+Ht!==57;)if(n+Ht===84&&_o()===47)break;return"/*"+fm(e,wr-1)+"*"+Lv(n===47?n:Nr())}function bO(n){for(;!k_(_o());)Nr();return fm(n,wr)}function IO(n){return vO(fp("",null,null,null,[""],n=_O(n),0,[0],n))}function fp(n,e,t,r,a,o,u,d,p){for(var m=0,_=0,v=u,w=0,S=0,x=0,U=1,M=1,q=1,X=0,K="",oe=a,te=o,le=r,D=K;M;)switch(x=X,X=Nr()){case 40:if(x!=108&&un(D,v-1)==58){hp(D+=ke(l_(X),"&","&\f"),"&\f",PS(m?d[m-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:D+=l_(X);break;case 9:case 10:case 13:case 32:D+=EO(x);break;case 92:D+=TO(dp()-1,7);continue;case 47:switch(_o()){case 42:case 47:lh(AO(wO(Nr(),dp()),e,t,p),p);break;default:D+="/"}break;case 123*U:d[m++]=Jr(D)*q;case 125*U:case 59:case 0:switch(X){case 0:case 125:M=0;case 59+_:q==-1&&(D=ke(D,/\f/g,"")),S>0&&Jr(D)-v&&lh(S>32?Gb(D+";",r,t,v-1,p):Gb(ke(D," ","")+";",r,t,v-2,p),p);break;case 59:D+=";";default:if(lh(le=$b(D,e,t,m,_,a,d,K,oe=[],te=[],v,o),o),X===123)if(_===0)fp(D,e,le,le,oe,o,v,d,te);else switch(w===99&&un(D,3)===110?100:w){case 100:case 108:case 109:case 115:fp(n,le,le,r&&lh($b(n,le,le,0,0,a,d,K,a,oe=[],v,te),te),a,te,v,d,r?oe:te);break;default:fp(D,le,le,le,[""],te,0,d,te)}}m=_=S=0,U=q=1,K=D="",v=u;break;case 58:v=1+Jr(D),S=x;default:if(U<1){if(X==123)--U;else if(X==125&&U++==0&&yO()==125)continue}switch(D+=Lv(X),X*U){case 38:q=_>0?1:(D+="\f",-1);break;case 44:d[m++]=(Jr(D)-1)*q,q=1;break;case 64:_o()===45&&(D+=l_(Nr())),w=_o(),_=v=Jr(K=D+=bO(dp())),X++;break;case 45:x===45&&Jr(D)==2&&(U=0)}}return o}function $b(n,e,t,r,a,o,u,d,p,m,_,v){for(var w=a-1,S=a===0?o:[""],x=OS(S),U=0,M=0,q=0;U<r;++U)for(var X=0,K=eu(n,w+1,w=PS(M=u[U])),oe=n;X<x;++X)(oe=NS(M>0?S[X]+" "+K:ke(K,/&\f/g,S[X])))&&(p[q++]=oe);return dm(n,e,t,a===0?cm:d,p,m,_,v)}function AO(n,e,t,r){return dm(n,e,t,xS,Lv(gO()),eu(n,2,-2),0,r)}function Gb(n,e,t,r,a){return dm(n,e,t,Mv,eu(n,0,r),eu(n,r+1,-1),r,a)}function VS(n,e,t){switch(pO(n,e)){case 5103:return et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+n+n;case 4789:return gh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return et+n+gh+n+ct+n+n;case 5936:switch(un(n,e+11)){case 114:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return et+n+ct+n+n;case 6165:return et+n+ct+"flex-"+n+n;case 5187:return et+n+ke(n,/(\w+).+(:[^]+)/,et+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return et+n+ct+"flex-item-"+ke(n,/flex-|-self/g,"")+(qi(n,/flex-|baseline/)?"":ct+"grid-row-"+ke(n,/flex-|-self/g,""))+n;case 4675:return et+n+ct+"flex-line-pack"+ke(n,/align-content|flex-|-self/g,"")+n;case 5548:return et+n+ct+ke(n,"shrink","negative")+n;case 5292:return et+n+ct+ke(n,"basis","preferred-size")+n;case 6060:return et+"box-"+ke(n,"-grow","")+et+n+ct+ke(n,"grow","positive")+n;case 4554:return et+ke(n,/([^-])(transform)/g,"$1"+et+"$2")+n;case 6187:return ke(ke(ke(n,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),n,"")+n;case 5495:case 3959:return ke(n,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return ke(ke(n,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+n+n;case 4200:if(!qi(n,/flex-|baseline/))return ct+"grid-column-align"+eu(n,e)+n;break;case 2592:case 3360:return ct+ke(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,qi(r.props,/grid-\w+-end/)})?~hp(n+(t=t[e].value),"span",0)?n:ct+ke(n,"-start","")+n+ct+"grid-row-span:"+(~hp(t,"span",0)?qi(t,/\d+/):+qi(t,/\d+/)-+qi(n,/\d+/))+";":ct+ke(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return qi(r.props,/grid-\w+-start/)})?n:ct+ke(ke(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ke(n,/(.+)-inline(.+)/,et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jr(n)-1-e>6)switch(un(n,e+1)){case 109:if(un(n,e+4)!==45)break;case 102:return ke(n,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+gh+(un(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~hp(n,"stretch",0)?VS(ke(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return ke(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,d,p,m){return ct+a+":"+o+m+(u?ct+a+"-span:"+(d?p:+p-+o)+m:"")+n});case 4949:if(un(n,e+6)===121)return ke(n,":",":"+et)+n;break;case 6444:switch(un(n,un(n,14)===45?18:11)){case 120:return ke(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(un(n,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+ct+"$2box$3")+n;case 100:return ke(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(n,"scroll-","scroll-snap-")+n}return n}function Pp(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function SO(n,e,t,r){switch(n.type){case fO:if(n.children.length)break;case dO:case Mv:return n.return=n.return||n.value;case xS:return"";case DS:return n.return=n.value+"{"+Pp(n.children,r)+"}";case cm:if(!Jr(n.value=n.props.join(",")))return""}return Jr(t=Pp(n.children,r))?n.return=n.value+"{"+t+"}":""}function RO(n){var e=OS(n);return function(t,r,a,o){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,o)||"";return u}}function CO(n){return function(e){e.root||(e=e.return)&&n(e)}}function xO(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Mv:n.return=VS(n.value,n.length,t);return;case DS:return Pp([Qs(n,{value:ke(n.value,"@","@"+et)})],r);case cm:if(n.length)return mO(t=n.props,function(a){switch(qi(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Nl(Qs(n,{props:[ke(a,/:(read-\w+)/,":"+gh+"$1")]})),Nl(Qs(n,{props:[a]})),O_(n,{props:Hb(t,r)});break;case"::placeholder":Nl(Qs(n,{props:[ke(a,/:(plac\w+)/,":"+et+"input-$1")]})),Nl(Qs(n,{props:[ke(a,/:(plac\w+)/,":"+gh+"$1")]})),Nl(Qs(n,{props:[ke(a,/:(plac\w+)/,ct+"input-$1")]})),Nl(Qs(n,{props:[a]})),O_(n,{props:Hb(t,r)});break}return""})}}var DO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jn={},nu=typeof process<"u"&&Jn!==void 0&&(Jn.REACT_APP_SC_ATTR||Jn.SC_ATTR)||"data-styled",MS="active",LS="data-styled-version",pm="6.1.16",Uv=`/*!sc*/
`,Np=typeof window<"u"&&"HTMLElement"in window,PO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==""?Jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.SC_DISABLE_SPEEDY!==void 0&&Jn.SC_DISABLE_SPEEDY!==""&&Jn.SC_DISABLE_SPEEDY!=="false"&&Jn.SC_DISABLE_SPEEDY),mm=Object.freeze([]),ru=Object.freeze({});function NO(n,e,t){return t===void 0&&(t=ru),n.theme!==t.theme&&n.theme||e||t.theme}var US=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),OO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kO=/(^-|-$)/g;function Kb(n){return n.replace(OO,"-").replace(kO,"")}var VO=/(a)(d)/gi,Jf=52,Qb=function(n){return String.fromCharCode(n+(n>25?39:97))};function M_(n){var e,t="";for(e=Math.abs(n);e>Jf;e=e/Jf|0)t=Qb(e%Jf)+t;return(Qb(e%Jf)+t).replace(VO,"$1-$2")}var u_,zS=5381,$l=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},BS=function(n){return $l(zS,n)};function FS(n){return M_(BS(n)>>>0)}function MO(n){return n.displayName||n.name||"Component"}function c_(n){return typeof n=="string"&&!0}var jS=typeof Symbol=="function"&&Symbol.for,qS=jS?Symbol.for("react.memo"):60115,LO=jS?Symbol.for("react.forward_ref"):60112,UO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},HS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},BO=((u_={})[LO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u_[qS]=HS,u_);function Yb(n){return("type"in(e=n)&&e.type.$$typeof)===qS?HS:"$$typeof"in n?BO[n.$$typeof]:UO;var e}var FO=Object.defineProperty,jO=Object.getOwnPropertyNames,Wb=Object.getOwnPropertySymbols,qO=Object.getOwnPropertyDescriptor,HO=Object.getPrototypeOf,Xb=Object.prototype;function $S(n,e,t){if(typeof e!="string"){if(Xb){var r=HO(e);r&&r!==Xb&&$S(n,r,t)}var a=jO(e);Wb&&(a=a.concat(Wb(e)));for(var o=Yb(n),u=Yb(e),d=0;d<a.length;++d){var p=a[d];if(!(p in zO||t&&t[p]||u&&p in u||o&&p in o)){var m=qO(e,p);try{FO(n,p,m)}catch{}}}}return n}function iu(n){return typeof n=="function"}function zv(n){return typeof n=="object"&&"styledComponentId"in n}function fo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function L_(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function Nh(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function U_(n,e,t){if(t===void 0&&(t=!1),!t&&!Nh(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=U_(n[r],e[r]);else if(Nh(e))for(var r in e)n[r]=U_(n[r],e[r]);return n}function Bv(n,e){Object.defineProperty(n,"toString",{value:e})}function od(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var $O=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw od(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),p=(u=0,t.length);u<p;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(Uv);return t},n}(),pp=new Map,Op=new Map,mp=1,Zf=function(n){if(pp.has(n))return pp.get(n);for(;Op.has(mp);)mp++;var e=mp++;return pp.set(n,e),Op.set(e,n),e},GO=function(n,e){mp=e+1,pp.set(n,e),Op.set(e,n)},KO="style[".concat(nu,"][").concat(LS,'="').concat(pm,'"]'),QO=new RegExp("^".concat(nu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),YO=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},WO=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Uv),a=[],o=0,u=r.length;o<u;o++){var d=r[o].trim();if(d){var p=d.match(QO);if(p){var m=0|parseInt(p[1],10),_=p[2];m!==0&&(GO(_,m),YO(n,_,p[3]),n.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},Jb=function(n){for(var e=document.querySelectorAll(KO),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(nu)!==MS&&(WO(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function XO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var GS=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(nu,"]")));return p[p.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(nu,MS),r.setAttribute(LS,pm);var u=XO();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},JO=function(){function n(e){this.element=GS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw od(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),ZO=function(){function n(e){this.element=GS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),ek=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Zb=Np,tk={isServer:!Np,useCSSOMInjection:!PO},KS=function(){function n(e,t,r){e===void 0&&(e=ru),t===void 0&&(t={});var a=this;this.options=Fn(Fn({},tk),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Np&&Zb&&(Zb=!1,Jb(this)),Bv(this,function(){return function(o){for(var u=o.getTag(),d=u.length,p="",m=function(v){var w=function(q){return Op.get(q)}(v);if(w===void 0)return"continue";var S=o.names.get(w),x=u.getGroup(v);if(S===void 0||!S.size||x.length===0)return"continue";var U="".concat(nu,".g").concat(v,'[id="').concat(w,'"]'),M="";S!==void 0&&S.forEach(function(q){q.length>0&&(M+="".concat(q,","))}),p+="".concat(x).concat(U,'{content:"').concat(M,'"}').concat(Uv)},_=0;_<d;_++)m(_);return p}(a)})}return n.registerId=function(e){return Zf(e)},n.prototype.rehydrate=function(){!this.server&&Np&&Jb(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Fn(Fn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new ek(a):r?new JO(a):new ZO(a)}(this.options),new $O(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Zf(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Zf(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Zf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),nk=/&/g,rk=/^\s*\/\/.*$/gm;function QS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=QS(t.children,e)),t})}function ik(n){var e,t,r,a=ru,o=a.options,u=o===void 0?ru:o,d=a.plugins,p=d===void 0?mm:d,m=function(w,S,x){return x.startsWith(t)&&x.endsWith(t)&&x.replaceAll(t,"").length>0?".".concat(e):w},_=p.slice();_.push(function(w){w.type===cm&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(nk,t).replace(r,m))}),u.prefix&&_.push(xO),_.push(SO);var v=function(w,S,x,U){S===void 0&&(S=""),x===void 0&&(x=""),U===void 0&&(U="&"),e=U,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var M=w.replace(rk,""),q=IO(x||S?"".concat(x," ").concat(S," { ").concat(M," }"):M);u.namespace&&(q=QS(q,u.namespace));var X=[];return Pp(q,RO(_.concat(CO(function(K){return X.push(K)})))),X};return v.hash=p.length?p.reduce(function(w,S){return S.name||od(15),$l(w,S.name)},zS).toString():"",v}var sk=new KS,z_=ik(),YS=xh.createContext({shouldForwardProp:void 0,styleSheet:sk,stylis:z_});YS.Consumer;xh.createContext(void 0);function eI(){return W.useContext(YS)}var WS=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=z_);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Bv(this,function(){throw od(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=z_),this.name+e.hash},n}(),ak=function(n){return n>="A"&&n<="Z"};function tI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;ak(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var XS=function(n){return n==null||n===!1||n===""},JS=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!XS(o)&&(Array.isArray(o)&&o.isCss||iu(o)?r.push("".concat(tI(a),":"),o,";"):Nh(o)?r.push.apply(r,Ph(Ph(["".concat(a," {")],JS(o),!1),["}"],!1)):r.push("".concat(tI(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in DO||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function vo(n,e,t,r){if(XS(n))return[];if(zv(n))return[".".concat(n.styledComponentId)];if(iu(n)){if(!iu(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return vo(a,e,t,r)}var o;return n instanceof WS?t?(n.inject(t,r),[n.getName(r)]):[n]:Nh(n)?JS(n):Array.isArray(n)?Array.prototype.concat.apply(mm,n.map(function(u){return vo(u,e,t,r)})):[n.toString()]}function ok(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(iu(t)&&!zv(t))return!1}return!0}var lk=BS(pm),uk=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ok(e),this.componentId=t,this.baseHash=$l(lk,t),this.baseStyle=r,KS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=fo(a,this.staticRulesId);else{var o=L_(vo(this.rules,e,t,r)),u=M_($l(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=fo(a,u),this.staticRulesId=u}else{for(var p=$l(this.baseHash,r.hash),m="",_=0;_<this.rules.length;_++){var v=this.rules[_];if(typeof v=="string")m+=v;else if(v){var w=L_(vo(v,e,t,r));p=$l(p,w+_),m+=w}}if(m){var S=M_(p>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(m,".".concat(S),void 0,this.componentId)),a=fo(a,S)}}return a},n}(),ZS=xh.createContext(void 0);ZS.Consumer;var h_={};function ck(n,e,t){var r=zv(n),a=n,o=!c_(n),u=e.attrs,d=u===void 0?mm:u,p=e.componentId,m=p===void 0?function(oe,te){var le=typeof oe!="string"?"sc":Kb(oe);h_[le]=(h_[le]||0)+1;var D="".concat(le,"-").concat(FS(pm+le+h_[le]));return te?"".concat(te,"-").concat(D):D}(e.displayName,e.parentComponentId):p,_=e.displayName,v=_===void 0?function(oe){return c_(oe)?"styled.".concat(oe):"Styled(".concat(MO(oe),")")}(n):_,w=e.displayName&&e.componentId?"".concat(Kb(e.displayName),"-").concat(e.componentId):e.componentId||m,S=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,x=e.shouldForwardProp;if(r&&a.shouldForwardProp){var U=a.shouldForwardProp;if(e.shouldForwardProp){var M=e.shouldForwardProp;x=function(oe,te){return U(oe,te)&&M(oe,te)}}else x=U}var q=new uk(t,w,r?a.componentStyle:void 0);function X(oe,te){return function(le,D,R){var A=le.attrs,P=le.componentStyle,V=le.defaultProps,B=le.foldedComponentIds,N=le.styledComponentId,Nt=le.target,It=xh.useContext(ZS),he=eI(),Ie=le.shouldForwardProp||he.shouldForwardProp,we=NO(D,It,V)||ru,Oe=function(xe,Ce,ut){for(var Me,Je=Fn(Fn({},Ce),{className:void 0,theme:ut}),Ke=0;Ke<xe.length;Ke+=1){var Ut=iu(Me=xe[Ke])?Me(Je):Me;for(var Zt in Ut)Je[Zt]=Zt==="className"?fo(Je[Zt],Ut[Zt]):Zt==="style"?Fn(Fn({},Je[Zt]),Ut[Zt]):Ut[Zt]}return Ce.className&&(Je.className=fo(Je.className,Ce.className)),Je}(A,D,we),O=Oe.as||Nt,se={};for(var ge in Oe)Oe[ge]===void 0||ge[0]==="$"||ge==="as"||ge==="theme"&&Oe.theme===we||(ge==="forwardedAs"?se.as=Oe.forwardedAs:Ie&&!Ie(ge,O)||(se[ge]=Oe[ge]));var pe=function(xe,Ce){var ut=eI(),Me=xe.generateAndInjectStyles(Ce,ut.styleSheet,ut.stylis);return Me}(P,Oe),fe=fo(B,N);return pe&&(fe+=" "+pe),Oe.className&&(fe+=" "+Oe.className),se[c_(O)&&!US.has(O)?"class":"className"]=fe,R&&(se.ref=R),W.createElement(O,se)}(K,oe,te)}X.displayName=v;var K=xh.forwardRef(X);return K.attrs=S,K.componentStyle=q,K.displayName=v,K.shouldForwardProp=x,K.foldedComponentIds=r?fo(a.foldedComponentIds,a.styledComponentId):"",K.styledComponentId=w,K.target=r?a.target:n,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=r?function(te){for(var le=[],D=1;D<arguments.length;D++)le[D-1]=arguments[D];for(var R=0,A=le;R<A.length;R++)U_(te,A[R],!0);return te}({},a.defaultProps,oe):oe}}),Bv(K,function(){return".".concat(K.styledComponentId)}),o&&$S(K,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function nI(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var rI=function(n){return Object.assign(n,{isCss:!0})};function eR(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(iu(n)||Nh(n))return rI(vo(nI(mm,Ph([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?vo(r):rI(vo(nI(r,e)))}function B_(n,e,t){if(t===void 0&&(t=ru),!e)throw od(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,eR.apply(void 0,Ph([a],o,!1)))};return r.attrs=function(a){return B_(n,e,Fn(Fn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return B_(n,e,Fn(Fn({},t),a))},r}var tR=function(n){return B_(ck,n)},_e=tR;US.forEach(function(n){_e[n]=tR(n)});function hk(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var r=L_(eR.apply(void 0,Ph([n],e,!1))),a=FS(r);return new WS(a,r)}const dk=_e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;

  border-bottom: 1px solid #ccc;
  background: #fff;
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 1000;

  transform: ${n=>n.hide?"translateY(-100%)":"translateY(0)"};
  opacity: ${n=>n.hide?"0":"1"};
  pointer-events: ${n=>n.hide?"none":"auto"};
`,fk=_e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  color: var(--Color-gray-gray100, #060303);
  font-family: "PyeongChang";

  font-size: 24px;
  font-weight: 700;

  & > img {
    width: 40px;
    height: 40px;
  }
`,pk=_e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  cursor: pointer;
`,mk=_e.div`
  width: 36px;
  height: 36px;
  border-radius: 100px;
  border: 1px solid #d4d4d4;
  background: url(${"/wda-miniblog/profileImg.png"}) lightgray 50% /
    cover no-repeat;
`;function Fv({id:n}){const e=sd(),[t,r]=W.useState(!1),[a,o]=W.useState(0),u=()=>{window.scrollY>a&&window.scrollY>80?r(!0):r(!1),o(window.scrollY)};return W.useEffect(()=>(window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}),[a]),$.jsxs(dk,{hide:t,children:[$.jsxs(fk,{onClick:d=>{e("/")},children:[$.jsx("img",{src:"/wda-miniblog/logo.png",alt:""}),$.jsxs("div",{children:[n,"_blog"]})]}),$.jsxs(pk,{children:[$.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:$.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:"#333333",strokeWidth:"1.5",strokeLinecap:"square",strokeLinejoin:"round"})}),$.jsx(mk,{})]})]})}const gk=_e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${n=>n.width};
  height: 40px;
  gap: 4px;
  background: ${n=>n.backgroundColor};
  border: ${n=>n.border};

  color: ${n=>n.color};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;

  cursor: pointer;
`;function Zs(n){const{title:e,onClick:t,width:r,backgroundColor:a,color:o,border:u}=n;return $.jsxs(gk,{onClick:t,width:r||"100px",backgroundColor:a,color:o,border:u||"none",children:[n.icon,e||"Button"]})}const yk=hk`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,_k=_e.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 48px;

  color: var(--Color-gray-gray100, #060303);
  font-family: "PyeongChang";

  font-size: 40px;
  font-weight: 400;

  opacity: 0;
  animation: ${yk} 1s ease-out forwards;

  & > p:nth-child(2) {
    color: var(--Color-gray-gray80, #4e4e54);
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 400;
  }
`;function vk({id:n}){return $.jsxs(_k,{children:[$.jsxs("p",{children:[n,"’s 블로그"]}),$.jsx("p",{children:"안녕하세요. 환영해요 ꔛ"})]})}const Ek=_e.div`
  display: flex;
  min-width: 240px;
  max-width: 240px;
  padding: 4px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  font-family: "Pretendard Variable";
`,Tk=_e.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`,wk=_e.li`
  display: flex;
  padding: 10px 2px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #d8d8d8;

  & > p {
    color: ${n=>n.selected?"#060303":"#777"};
    font-size: 16px;
    font-weight: ${n=>n.selected?"600":"400"};
    letter-spacing: -0.448px;
  }

  & > .CategoryBadge {
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;

    background-color: ${n=>n.selected?"#FF4B25":"transparent"};
    border-radius: 100px;

    color: ${n=>n.selected?"#fff":"#777"};
    text-align: center;
    font-size: 14px;
    font-weight: ${n=>n.selected?"700":"400"};
    letter-spacing: -0.35px;
  }
`;function bk(n){const{selectedCategory:e,onCategoryChange:t,categoryCounts:r}=n,a=["전체보기","일상","공부","여행","기타"];return $.jsxs(Ek,{children:[$.jsx("p",{children:"카테고리"}),$.jsx(Tk,{children:a.map(o=>$.jsxs(wk,{selected:e===o,onClick:()=>t(o),children:[$.jsx("p",{children:o}),$.jsx("p",{className:"CategoryBadge",children:r[o]||0})]},o))})]})}const Ik=_e.div`
  display: flex;
  flex-direction: ${n=>n.viewType==="list"?"row":"column"};
  gap: ${n=>n.viewType==="list"?"28px":"10px"};
  cursor: pointer;
  font-family: "Pretendard Variable";
`,Ak=_e.img`
  width: ${n=>n.viewType==="list"?"300px":"100%"};
  aspect-ratio: 16/9;
  object-fit: cover;
  flex-shrink: 0;

  background-color: #ddd;
  border: 1px solid var(--Color-gray-gray30, #e1e1e5);
`,Sk=_e.div`
  display: flex;
  flex-direction: ${n=>n.viewType==="list"?"row":"column"};
  justify-content: space-between;
  gap: ${n=>n.viewType==="list"?"100px":"60px"};
  width: 100%;
  height: 100%;
  padding: 4px 0;

  .contentsWrapper {
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: space-between;
  }
  .postContents {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .postContents p:nth-child(1) {
    color: var(--Color-gray-gray100, #060303);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.6px;
  }
  .postContents p:nth-child(2) {
    display: ${n=>n.viewType==="list"?"-webkit-box":"none"};
    color: #777;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.4px;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Rk=_e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: #777;
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.35px;
  }
`,Ck=_e.span`
  display: flex;
  color: #777;
  font-size: 14px;
  letter-spacing: -0.35px;
`;function xk(n){const{post:e,viewType:t,onClick:r}=n;return $.jsxs(Ik,{viewType:t,onClick:r,children:[$.jsx(Ak,{src:e.image?e.image:"/wda-miniblog/NoImg.svg",alt:e.title,viewType:t}),$.jsxs(Sk,{viewType:t,children:[$.jsxs("div",{className:"contentsWrapper",children:[$.jsxs("div",{className:"postContents",children:[$.jsx("p",{children:e.title}),$.jsx("p",{className:"preview",children:e.content})]}),$.jsx(Rk,{children:e.hashtags&&e.hashtags.map(a=>$.jsxs("span",{children:["# ",a]},a))})]}),$.jsx(Ck,{children:e.time||"시간"})]})]})}const Dk=_e.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  font-family: "Pretendard Variable";
`,Pk=_e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;

  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.4px;

  & > p:nth-child(1) {
    margin-right: 4px;
  }
`,Nk=_e.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,Ok=_e.div`
  display: flex;
  color: var(--Color-gray-gray100, #060303);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
`,kk=_e.span`
  display: flex;
  gap: 10px;

  & > img {
    cursor: pointer;
  }
`,Vk=_e.div`
  display: grid;
  grid-template-columns: ${n=>n.viewType==="list"?"1fr":"repeat(3, 1fr)"};
  gap: 28px;
  width: 100%;
`,Mk=_e.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 0;

  & > p {
    color: var(--Color-gray-gray60, #8d8d94);
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-top: 12px;
  }

  & > img {
    width: 60px;
  }
`;function Lk(n){const{posts:e,itemClicked:t}=n,[r,a]=W.useState("list");return $.jsxs(Dk,{children:[$.jsxs(Nk,{children:[$.jsxs(Pk,{children:[$.jsx("p",{children:"전체"}),$.jsx(Ok,{children:e.length}),$.jsx("p",{children:"개"})]}),$.jsxs(kk,{children:[$.jsx("img",{src:r==="list"?"/wda-miniblog/ListViewButtonOn.svg":"/wda-miniblog/ListViewButtonOff.svg",alt:"",className:r==="list"?"active":"",onClick:()=>a("list")}),$.jsx("img",{src:r==="list"?"/wda-miniblog/GridViewButtonOff.svg":"/wda-miniblog/GridViewButtonOn.svg",alt:"",className:r==="grid"?"active":"",onClick:()=>a("grid")})]})]}),$.jsx(Vk,{viewType:r,children:e.length===0?$.jsxs(Mk,{children:[$.jsx("img",{src:"/wda-miniblog/NoPost.svg",alt:"empty"}),$.jsx("p",{children:"작성된 글이 없어요"})]}):e.map(o=>$.jsx(xk,{post:o,viewType:r,onClick:()=>t(o)},o.id))})]})}const Uk=()=>{};var iI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},zk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(o&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},rR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,_=o>>2,v=(o&3)<<4|d>>4;let w=(d&15)<<2|m>>6,S=m&63;p||(S=64,u||(w=64)),r.push(t[_],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||d==null||m==null||v==null)throw new Bk;const w=o<<2|d>>4;if(r.push(w),m!==64){const S=d<<4&240|m>>2;if(r.push(S),v!==64){const x=m<<6&192|v;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fk=function(n){const e=nR(n);return rR.encodeByteArray(e,!0)},kp=function(n){return Fk(n).replace(/\./g,"")},jv=function(n){try{return rR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!jk(t)||(n[t]=Vp(n[t],e[t]));return n}function jk(n){return n!=="__proto__"}/**
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
 */function qv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qk=()=>qv().__FIREBASE_DEFAULTS__,Hk=()=>{if(typeof process>"u"||typeof iI>"u")return;const n=iI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$k=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jv(n[1]);return e&&JSON.parse(e)},Hv=()=>{try{return Uk()||qk()||Hk()||$k()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},iR=()=>{var n;return(n=Hv())===null||n===void 0?void 0:n.config},Gk=n=>{var e;return(e=Hv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Qk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kp(JSON.stringify(t)),kp(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function $v(){var n;const e=(n=Hv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wk(){return typeof window<"u"||sR()}function sR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Xk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oR(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lR(){return!$v()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oh(){try{return typeof indexedDB=="object"}catch{return!1}}function Jk(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="FirebaseError";class kn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Zk,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?eV(o,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new kn(a,d,r)}}function eV(n,e){return n.replace(tV,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const tV=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function nV(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(aI(o)&&aI(u)){if(!sa(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function aI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function uh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function uR(n,e){const t=new rV(n,e);return t.subscribe.bind(t)}class rV{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");iV(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=d_),a.error===void 0&&(a.error=d_),a.complete===void 0&&(a.complete=d_);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iV(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function d_(){}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){return n.endsWith(".cloudworkstations.dev")}async function cR(n){return(await fetch(n,{credentials:"include"})).ok}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const io="[DEFAULT]";/**
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
 */class sV{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Kk;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oV(e))try{this.getOrInitializeService({instanceIdentifier:io})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=io){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=io){return this.instances.has(e)}getOptions(e=io){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aV(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=io){return this.component?this.component.multipleInstances?e:io:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aV(n){return n===io?void 0:n}function oV(n){return n.instantiationMode==="EAGER"}/**
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
 */class hR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sV(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=[];var ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ze||(ze={}));const dR={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},lV=ze.INFO,uV={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},cV=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=uV[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ym{constructor(e){this.name=e,this._logLevel=lV,this._logHandler=cV,this._userLogHandler=null,Kv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}function hV(n){Kv.forEach(e=>{e.setLogLevel(n)})}function dV(n,e){for(const t of Kv){let r=null;e&&e.level&&(r=dR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const d=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");o>=(r??a.logLevel)&&n({level:ze[o].toLowerCase(),message:d,args:u,type:a.name})}}}const fV=(n,e)=>e.some(t=>n instanceof t);let oI,lI;function pV(){return oI||(oI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mV(){return lI||(lI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fR=new WeakMap,F_=new WeakMap,pR=new WeakMap,f_=new WeakMap,Qv=new WeakMap;function gV(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(ea(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&fR.set(t,n)}).catch(()=>{}),Qv.set(e,n),e}function yV(n){if(F_.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});F_.set(n,e)}let j_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return F_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ea(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _V(n){j_=n(j_)}function vV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(p_(this),e,...t);return pR.set(r,e.sort?e.sort():[e]),ea(r)}:mV().includes(n)?function(...e){return n.apply(p_(this),e),ea(fR.get(this))}:function(...e){return ea(n.apply(p_(this),e))}}function EV(n){return typeof n=="function"?vV(n):(n instanceof IDBTransaction&&yV(n),fV(n,pV())?new Proxy(n,j_):n)}function ea(n){if(n instanceof IDBRequest)return gV(n);if(f_.has(n))return f_.get(n);const e=EV(n);return e!==n&&(f_.set(n,e),Qv.set(e,n)),e}const p_=n=>Qv.get(n);function TV(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),d=ea(u);return r&&u.addEventListener("upgradeneeded",p=>{r(ea(u.result),p.oldVersion,p.newVersion,ea(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{o&&p.addEventListener("close",()=>o()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const wV=["get","getKey","getAll","getAllKeys","count"],bV=["put","add","delete","clear"],m_=new Map;function uI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(m_.get(e))return m_.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=bV.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||wV.includes(t)))return;const o=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return m_.set(e,o),o}_V(n=>({...n,get:(e,t,r)=>uI(e,t)||n.get(e,t,r),has:(e,t)=>!!uI(e,t)||n.has(e,t)}));/**
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
 */class IV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AV(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function AV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mp="@firebase/app",q_="0.12.1";/**
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
 */const Yi=new ym("@firebase/app"),SV="@firebase/app-compat",RV="@firebase/analytics-compat",CV="@firebase/analytics",xV="@firebase/app-check-compat",DV="@firebase/app-check",PV="@firebase/auth",NV="@firebase/auth-compat",OV="@firebase/database",kV="@firebase/data-connect",VV="@firebase/database-compat",MV="@firebase/functions",LV="@firebase/functions-compat",UV="@firebase/installations",zV="@firebase/installations-compat",BV="@firebase/messaging",FV="@firebase/messaging-compat",jV="@firebase/performance",qV="@firebase/performance-compat",HV="@firebase/remote-config",$V="@firebase/remote-config-compat",GV="@firebase/storage",KV="@firebase/storage-compat",QV="@firebase/firestore",YV="@firebase/vertexai",WV="@firebase/firestore-compat",XV="firebase",JV="11.7.1";/**
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
 */const aa="[DEFAULT]",ZV={[Mp]:"fire-core",[SV]:"fire-core-compat",[CV]:"fire-analytics",[RV]:"fire-analytics-compat",[DV]:"fire-app-check",[xV]:"fire-app-check-compat",[PV]:"fire-auth",[NV]:"fire-auth-compat",[OV]:"fire-rtdb",[kV]:"fire-data-connect",[VV]:"fire-rtdb-compat",[MV]:"fire-fn",[LV]:"fire-fn-compat",[UV]:"fire-iid",[zV]:"fire-iid-compat",[BV]:"fire-fcm",[FV]:"fire-fcm-compat",[jV]:"fire-perf",[qV]:"fire-perf-compat",[HV]:"fire-rc",[$V]:"fire-rc-compat",[GV]:"fire-gcs",[KV]:"fire-gcs-compat",[QV]:"fire-fst",[WV]:"fire-fst-compat",[YV]:"fire-vertex","fire-js":"fire-js",[XV]:"fire-js-all"};/**
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
 */const oa=new Map,su=new Map,au=new Map;function kh(n,e){try{n.container.addComponent(e)}catch(t){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mR(n,e){n.container.addOrOverwriteComponent(e)}function la(n){const e=n.name;if(au.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,n);for(const t of oa.values())kh(t,n);for(const t of su.values())kh(t,n);return!0}function gR(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function eM(n,e,t=aa){gR(n,e).clearInstance(t)}function yR(n){return n.options!==void 0}function ft(n){return n==null?!1:n.settings!==void 0}function tM(){au.clear()}/**
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
 */const nM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Mo("app","Firebase",nM);/**
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
 */let _R=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}};/**
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
 */function cI(n,e){const t=jv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class rM extends _R{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&cI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&cI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Or(Mp,q_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Wv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tr.create("server-app-deleted")}}/**
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
 */const _a=JV;function Yv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:aa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=iR()),!t)throw Tr.create("no-options");const o=oa.get(a);if(o){if(sa(t,o.options)&&sa(r,o.config))return o;throw Tr.create("duplicate-app",{appName:a})}const u=new hR(a);for(const p of au.values())u.addComponent(p);const d=new _R(t,r,u);return oa.set(a,d),d}function iM(n,e){if(Wk()&&!sR())throw Tr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;yR(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=m=>[...m].reduce((_,v)=>Math.imul(31,_)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tr.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=su.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new hR(o);for(const m of au.values())d.addComponent(m);const p=new rM(t,e,o,d);return su.set(o,p),p}function sM(n=aa){const e=oa.get(n);if(!e&&n===aa&&iR())return Yv();if(!e)throw Tr.create("no-app",{appName:n});return e}function aM(){return Array.from(oa.values())}async function Wv(n){let e=!1;const t=n.name;oa.has(t)?(e=!0,oa.delete(t)):su.has(t)&&n.decRefCount()<=0&&(su.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Or(n,e,t){var r;let a=(r=ZV[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yi.warn(d.join(" "));return}la(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function vR(n,e){if(n!==null&&typeof n!="function")throw Tr.create("invalid-log-argument");dV(n,e)}function ER(n){hV(n)}/**
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
 */const oM="firebase-heartbeat-database",lM=1,Vh="firebase-heartbeat-store";let g_=null;function TR(){return g_||(g_=TV(oM,lM,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),g_}async function uM(n){try{const t=(await TR()).transaction(Vh),r=await t.objectStore(Vh).get(wR(n));return await t.done,r}catch(e){if(e instanceof kn)Yi.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yi.warn(t.message)}}}async function hI(n,e){try{const r=(await TR()).transaction(Vh,"readwrite");await r.objectStore(Vh).put(e,wR(n)),await r.done}catch(t){if(t instanceof kn)Yi.warn(t.message);else{const r=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yi.warn(r.message)}}}function wR(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cM=1024,hM=30;class dM{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pM(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=dI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>hM){const u=mM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dI(),{heartbeatsToSend:r,unsentEntries:a}=fM(this._heartbeatsCache.heartbeats),o=kp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Yi.warn(t),""}}}function dI(){return new Date().toISOString().substring(0,10)}function fM(n,e=cM){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),fI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),fI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class pM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oh()?Jk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await uM(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return hI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return hI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function fI(n){return kp(JSON.stringify({version:2,heartbeats:n})).length}function mM(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function gM(n){la(new ci("platform-logger",e=>new IV(e),"PRIVATE")),la(new ci("heartbeat",e=>new dM(e),"PRIVATE")),Or(Mp,q_,n),Or(Mp,q_,"esm2017"),Or("fire-js","")}gM("");const yM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:_a,_DEFAULT_ENTRY_NAME:aa,_addComponent:kh,_addOrOverwriteComponent:mR,_apps:oa,_clearComponents:tM,_components:au,_getProvider:gR,_isFirebaseApp:yR,_isFirebaseServerApp:ft,_registerComponent:la,_removeServiceInstance:eM,_serverApps:su,deleteApp:Wv,getApp:sM,getApps:aM,initializeApp:Yv,initializeServerApp:iM,onLog:vR,registerVersion:Or,setLogLevel:ER},Symbol.toStringTag,{value:"Module"}));/**
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
 */class _M{constructor(e,t){this._delegate=e,this.firebase=t,kh(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Wv(this._delegate)))}_getService(e,t=aa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=aa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){kh(this._delegate,e)}_addOrOverwriteComponent(e){mR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const vM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},pI=new Mo("app-compat","Firebase",vM);/**
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
 */function EM(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Or,setLogLevel:ER,onLog:vR,apps:null,SDK_VERSION:_a,INTERNAL:{registerComponent:d,removeApp:r,useAsService:p,modularAPIs:yM}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(m){delete e[m]}function a(m){if(m=m||aa,!sI(e,m))throw pI.create("no-app",{appName:m});return e[m]}a.App=n;function o(m,_={}){const v=Yv(m,_);if(sI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(m=>e[m])}function d(m){const _=m.name,v=_.replace("-compat","");if(la(m)&&m.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw pI.create("invalid-app-argument",{appName:_});return S[v]()};m.serviceProps!==void 0&&Vp(w,m.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,_).apply(this,m.multipleInstances?S:[])}}return m.type==="PUBLIC"?t[v]:null}function p(m,_){return _==="serverAuth"?null:_}return t}/**
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
 */function bR(){const n=EM(_M);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:bR,extendNamespace:e,createSubscribe:uR,ErrorFactory:Mo,deepExtend:Vp});function e(t){Vp(n,t)}return n}const TM=bR();/**
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
 */const mI=new ym("@firebase/app-compat"),wM="@firebase/app-compat",bM="0.3.1";/**
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
 */function IM(n){Or(wM,bM,n)}/**
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
 */try{const n=qv();if(n.firebase!==void 0){mI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&mI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Nu=TM;IM();var AM="firebase",SM="11.7.1";/**
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
 */Nu.registerVersion(AM,SM,"app-compat");const Zc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ol={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function RM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function IR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CM=RM,xM=IR,AR=new Mo("auth","Firebase",IR());/**
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
 */const Lp=new ym("@firebase/auth");function DM(n,...e){Lp.logLevel<=ze.WARN&&Lp.warn(`Auth (${_a}): ${n}`,...e)}function gp(n,...e){Lp.logLevel<=ze.ERROR&&Lp.error(`Auth (${_a}): ${n}`,...e)}/**
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
 */function vn(n,...e){throw Jv(n,...e)}function Xt(n,...e){return Jv(n,...e)}function Xv(n,e,t){const r=Object.assign(Object.assign({},xM()),{[e]:t});return new Mo("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return Xv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ou(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(n,"argument-error"),Xv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jv(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return AR.create(n,...e)}function ae(n,e,...t){if(!n)throw Jv(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gp(e),new Error(e)}function kr(n,e){n||ii(e)}/**
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
 */function Mh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zv(){return gI()==="http:"||gI()==="https:"}function gI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function PM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zv()||aR()||"connection"in navigator)?navigator.onLine:!0}function NM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ld{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=Yk()||Gv()}get(){return PM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eE(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class SR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VM=new ld(3e4,6e4);function Dt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pt(n,e,t,r,a={}){return RR(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const d=Pu(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},o);return Xk()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&gm(n.emulatorConfig.host)&&(m.credentials="include"),SR.fetch()(await CR(n,n.config.apiHost,t,d),m)})}async function RR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},OM),e);try{const a=new LM(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw ch(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const d=o.ok?u.errorMessage:u.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ch(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw ch(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw ch(n,"user-disabled",u);const _=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Xv(n,_,m);vn(n,_)}}catch(a){if(a instanceof kn)throw a;vn(n,"network-request-failed",{message:String(a)})}}async function es(n,e,t,r,a={}){const o=await Pt(n,e,t,r,a);return"mfaPendingCredential"in o&&vn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function CR(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?eE(n.config,a):`${n.config.apiScheme}://${a}`;return kM.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function MM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),VM.get())})}}function ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
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
 */function yI(n){return n!==void 0&&n.getResponse!==void 0}function _I(n){return n!==void 0&&n.enterprise!==void 0}class xR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return MM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function UM(n){return(await Pt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function DR(n,e){return Pt(n,"GET","/v2/recaptchaConfig",Dt(n,e))}/**
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
 */async function zM(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function BM(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function Up(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function yh(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FM(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),a=_m(r);ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:yh(y_(a.auth_time)),issuedAtTime:yh(y_(a.iat)),expirationTime:yh(y_(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function y_(n){return Number(n)*1e3}function _m(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gp("JWT malformed, contained fewer than 3 sections"),null;try{const a=jv(t);return a?JSON.parse(a):(gp("Failed to decode base64 JWT payload"),null)}catch(a){return gp("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function vI(n){const e=_m(n);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kn&&jM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class qM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class H_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yh(this.lastLoginAt),this.creationTime=yh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Wi(n,Up(t,{idToken:r}));ae(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?PR(o.providerUserInfo):[],d=$M(n.providerData,u),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(d!=null&&d.length),_=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new H_(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function HM(n){const e=Ae(n);await Lh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $M(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function PR(n){return n.map(e=>{var{providerId:t}=e,r=Vv(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function GM(n,e){const t=await RR(n,{},async()=>{const r=Pu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await CR(n,a,"/v1/token",`key=${o}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",SR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function KM(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",Dt(n,e))}/**
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
 */class Ql{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const t=vI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await GM(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new Ql;return r&&(ae(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(ae(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(ae(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ql,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
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
 */function qs(n,e){ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=Vv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new H_(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return FM(this,e)}reload(){return HM(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Lh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Wi(this,zM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,d,p,m,_;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,x=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,M=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,q=(m=t.createdAt)!==null&&m!==void 0?m:void 0,X=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:K,emailVerified:oe,isAnonymous:te,providerData:le,stsTokenManager:D}=t;ae(K&&D,e,"internal-error");const R=Ql.fromJSON(this.name,D);ae(typeof K=="string",e,"internal-error"),qs(v,e.name),qs(w,e.name),ae(typeof oe=="boolean",e,"internal-error"),ae(typeof te=="boolean",e,"internal-error"),qs(S,e.name),qs(x,e.name),qs(U,e.name),qs(M,e.name),qs(q,e.name),qs(X,e.name);const A=new Pr({uid:K,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:te,photoURL:x,phoneNumber:S,tenantId:U,stsTokenManager:R,createdAt:q,lastLoginAt:X});return le&&Array.isArray(le)&&(A.providerData=le.map(P=>Object.assign({},P))),M&&(A._redirectEventId=M),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new Ql;a.updateFromServerResponse(t);const o=new Pr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Lh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];ae(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?PR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),d=new Ql;d.updateFromIdToken(r);const p=new Pr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new H_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(p,m),p}}/**
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
 */const EI=new Map;function tr(n){kr(n instanceof Function,"Expected a class definition");let e=EI.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,EI.set(n,e),e)}/**
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
 */class NR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}NR.type="NONE";const ou=NR;/**
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
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class Yl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=Eo(this.userKey,a.apiKey,o),this.fullPersistenceKey=Eo("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Up(this.auth,{idToken:e}).catch(()=>{});return t?Pr._fromGetAccountInfoResponse(this.auth,t,e):null}return Pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yl(tr(ou),e,r);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=a[0]||tr(ou);const u=Eo(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const _=await m._get(u);if(_){let v;if(typeof _=="string"){const w=await Up(e,{idToken:_}).catch(()=>{});if(!w)break;v=await Pr._fromGetAccountInfoResponse(e,w,_)}else v=Pr._fromJSON(e,_);m!==o&&(d=v),o=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new Yl(o,e,r):(o=p[0],d&&await o._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(u)}catch{}})),new Yl(o,e,r))}}/**
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
 */function TI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(OR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LR(e))return"Blackberry";if(UR(e))return"Webos";if(kR(e))return"Safari";if((e.includes("chrome/")||VR(e))&&!e.includes("edge/"))return"Chrome";if(ud(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function OR(n=wt()){return/firefox\//i.test(n)}function kR(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function VR(n=wt()){return/crios\//i.test(n)}function MR(n=wt()){return/iemobile/i.test(n)}function ud(n=wt()){return/android/i.test(n)}function LR(n=wt()){return/blackberry/i.test(n)}function UR(n=wt()){return/webos/i.test(n)}function cd(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function QM(n=wt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function YM(n=wt()){var e;return cd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WM(){return oR()&&document.documentMode===10}function zR(n=wt()){return cd(n)||ud(n)||UR(n)||LR(n)||/windows phone/i.test(n)||MR(n)}/**
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
 */function BR(n,e=[]){let t;switch(n){case"Browser":t=TI(wt());break;case"Worker":t=`${TI(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_a}/${r}`}/**
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
 */class XM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,d)=>{try{const p=e(o);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JM(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",Dt(n,e))}/**
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
 */const ZM=6;class e2{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:ZM,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class t2{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wI(this),this.idTokenSubscription=new wI(this),this.beforeStateQueue=new XM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Yl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Up(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Lh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(hn(this));const t=e?Ae(e):null;return t&&ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JM(this),t=new e2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await KM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;ae(t,this,"argument-error"),this.redirectPersistenceManager=await Yl.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(d,this,"internal-error"),d.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&DM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ae(n)}class wI{constructor(e){this.auth=e,this.observer=null,this.addObserver=uR(t=>this.observer=t)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n2(n){hd=n}function tE(n){return hd.loadJS(n)}function r2(){return hd.recaptchaV2Script}function i2(){return hd.recaptchaEnterpriseScript}function s2(){return hd.gapiScript}function FR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const a2=500,o2=6e4,ep=1e12;class l2{constructor(e){this.auth=e,this.counter=ep,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new h2(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||ep;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||ep;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||ep;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class u2{constructor(){this.enterprise=new c2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class c2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class h2{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;ae(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=d2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},o2)},a2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function d2(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const f2="recaptcha-enterprise",_h="NO_RECAPTCHA";class jR{constructor(e){this.type=f2,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,d)=>{DR(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new xR(p);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(p=>{d(p)})})}function a(o,u,d){const p=window.grecaptcha;_I(p)?p.enterprise.ready(()=>{p.enterprise.execute(o,{action:e}).then(m=>{u(m)}).catch(()=>{u(_h)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new u2().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(d=>{if(!t&&_I(window.grecaptcha))a(d,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=i2();p.length!==0&&(p+=d),tE(p).then(()=>{a(d,o,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function eh(n,e,t,r=!1,a=!1){const o=new jR(n);let u;if(a)u=_h;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ta(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await eh(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await eh(n,e,t,t==="getOobCode");return r(n,p)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await eh(n,e,t);return r(n,d).catch(async p=>{var m;if(((m=n._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const _=await eh(n,e,t,!1,!0);return r(n,_)}return Promise.reject(p)})}else{const d=await eh(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function p2(n){const e=bt(n),t=await DR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new xR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new jR(e).verify()}function m2(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function g2(n,e,t){const r=bt(n);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=qR(e),{host:u,port:d}=y2(e),p=d===null?"":`:${d}`,m={url:`${o}//${u}${p}/`},_=Object.freeze({host:u,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(sa(m,r.config.emulator)&&sa(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,a||_2(),gm(u)&&cR(`${o}//${u}${p}`)}function qR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function y2(n){const e=qR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:bI(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:bI(u)}}}function bI(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ku{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
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
 */async function HR(n,e){return Pt(n,"POST","/v1/accounts:resetPassword",Dt(n,e))}async function v2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function E2(n,e){return Pt(n,"POST","/v1/accounts:signUp",e)}async function T2(n,e){return Pt(n,"POST","/v1/accounts:update",Dt(n,e))}/**
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
 */async function w2(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",Dt(n,e))}async function vm(n,e){return Pt(n,"POST","/v1/accounts:sendOobCode",Dt(n,e))}async function b2(n,e){return vm(n,e)}async function I2(n,e){return vm(n,e)}async function A2(n,e){return vm(n,e)}async function S2(n,e){return vm(n,e)}/**
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
 */async function R2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}async function C2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}/**
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
 */class Uh extends ku{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Uh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Uh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ta(e,t,"signInWithPassword",w2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return R2(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ta(e,r,"signUpPassword",E2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return C2(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ki(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",Dt(n,e))}/**
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
 */const x2="http://localhost";class hi extends ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=Vv(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new hi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}buildRequest(){const e={requestUri:x2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pu(t)}return e}}/**
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
 */async function II(n,e){return Pt(n,"POST","/v1/accounts:sendVerificationCode",Dt(n,e))}async function D2(n,e){return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e))}async function P2(n,e){const t=await es(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e));if(t.temporaryProof)throw ch(n,"account-exists-with-different-credential",t);return t}const N2={USER_NOT_FOUND:"user-not-found"};async function O2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,t),N2)}/**
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
 */class To extends ku{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new To({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new To({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return D2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return P2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return O2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new To({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
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
 */function k2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V2(n){const e=Gl(uh(n)).link,t=e?Gl(uh(e)).deep_link_id:null,r=Gl(uh(n)).deep_link_id;return(r?Gl(uh(r)).link:null)||r||t||e||n}class Em{constructor(e){var t,r,a,o,u,d;const p=Gl(uh(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(r=p.oobCode)!==null&&r!==void 0?r:null,v=k2((a=p.mode)!==null&&a!==void 0?a:null);ae(m&&_&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=_,this.continueUrl=(o=p.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=p.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=V2(e);try{return new Em(t)}catch{return null}}}/**
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
 */class va{constructor(){this.providerId=va.PROVIDER_ID}static credential(e,t){return Uh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Em.parseLink(t);return ae(r,"argument-error"),Uh._fromEmailAndCode(e,r.code,r.tenantId)}}va.PROVIDER_ID="password";va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vu extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Wl extends Vu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ae("providerId"in t&&"signInMethod"in t,"argument-error"),hi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ae(e.idToken||e.accessToken,"argument-error"),hi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Wl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Wl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!o||!d)return null;try{return new Wl(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
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
 */class ei extends Vu{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
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
 */class ti extends Vu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
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
 */class ni extends Vu{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
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
 */const M2="http://localhost";class lu extends ku{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new lu(r,o)}static _create(e,t){return new lu(e,t)}buildRequest(){return{requestUri:M2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const L2="saml.";class zp extends ts{constructor(e){ae(e.startsWith(L2),"argument-error"),super(e)}static credentialFromResult(e){return zp.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return zp.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=lu.fromJSON(e);return ae(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return lu._create(r,t)}catch{return null}}}/**
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
 */class ri extends Vu{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
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
 */async function $R(n,e){return es(n,"POST","/v1/accounts:signUp",Dt(n,e))}/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await Pr._fromIdTokenResponse(e,r,a),u=AI(r);return new br({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=AI(r);return new br({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function AI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function U2(n){var e;if(ft(n.app))return Promise.reject(hn(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await $R(t,{returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
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
 */class Bp extends kn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Bp.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Bp(e,t,r,a)}}function GR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Bp._fromErrorAndOperation(n,o,e,r):o})}/**
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
 */function KR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function z2(n,e){const t=Ae(n);await Tm(!0,t,e);const{providerUserInfo:r}=await BM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=KR(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function nE(n,e,t=!1){const r=await Wi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}async function Tm(n,e,t){await Lh(e);const r=KR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";ae(r.has(t)===n,e.auth,a)}/**
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
 */async function QR(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(hn(r));const a="reauthenticate";try{const o=await Wi(n,GR(r,a,e,n),t);ae(o.idToken,r,"internal-error");const u=_m(o.idToken);ae(u,r,"internal-error");const{sub:d}=u;return ae(n.uid===d,r,"user-mismatch"),br._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),o}}/**
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
 */async function YR(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r="signIn",a=await GR(n,r,e),o=await br._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function wm(n,e){return YR(bt(n),e)}async function WR(n,e){const t=Ae(n);return await Tm(!1,t,e.providerId),nE(t,e)}async function XR(n,e){return QR(Ae(n),e)}/**
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
 */async function B2(n,e){return es(n,"POST","/v1/accounts:signInWithCustomToken",Dt(n,e))}/**
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
 */async function F2(n,e){if(ft(n.app))return Promise.reject(hn(n));const t=bt(n),r=await B2(t,{token:e,returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
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
 */class dd{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?rE._fromServerResponse(e,t):"totpInfo"in t?iE._fromServerResponse(e,t):vn(e,"internal-error")}}class rE extends dd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new rE(t)}}class iE extends dd{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new iE(t)}}/**
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
 */function bm(n,e,t){var r;ae(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),ae(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),ae(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ae(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ae(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function sE(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j2(n,e,t){const r=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&bm(r,a,t),await ta(r,a,"getOobCode",I2,"EMAIL_PASSWORD_PROVIDER")}async function q2(n,e,t){await HR(Ae(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sE(n),r})}async function H2(n,e){await T2(Ae(n),{oobCode:e})}async function JR(n,e){const t=Ae(n),r=await HR(t,{oobCode:e}),a=r.requestType;switch(ae(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ae(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ae(r.mfaInfo,t,"internal-error");default:ae(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=dd._fromServerResponse(bt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function $2(n,e){const{data:t}=await JR(Ae(n),e);return t.email}async function G2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),u=await ta(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$R,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&sE(n),p}),d=await br._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function K2(n,e,t){return ft(n.app)?Promise.reject(hn(n)):wm(Ae(n),va.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sE(n),r})}/**
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
 */async function Q2(n,e,t){const r=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,d){ae(d.handleCodeInApp,r,"argument-error"),d&&bm(r,u,d)}o(a,t),await ta(r,a,"getOobCode",A2,"EMAIL_PASSWORD_PROVIDER")}function Y2(n,e){const t=Em.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function W2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=Ae(n),a=va.credentialWithLink(e,t||Mh());return ae(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),wm(r,a)}/**
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
 */async function X2(n,e){return Pt(n,"POST","/v1/accounts:createAuthUri",Dt(n,e))}/**
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
 */async function J2(n,e){const t=Zv()?Mh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await X2(Ae(n),r);return a||[]}async function Z2(n,e){const t=Ae(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&bm(t.auth,a,e);const{email:o}=await b2(t.auth,a);o!==n.email&&await n.reload()}async function eL(n,e,t){const r=Ae(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&bm(r.auth,o,t);const{email:u}=await S2(r.auth,o);u!==n.email&&await n.reload()}/**
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
 */async function tL(n,e){return Pt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function nL(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ae(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Wi(r,tL(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function rL(n,e){const t=Ae(n);return ft(t.auth.app)?Promise.reject(hn(t.auth)):ZR(t,e,null)}function iL(n,e){return ZR(Ae(n),null,e)}async function ZR(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await Wi(n,v2(r,o));await n._updateTokensIfNecessary(u,!0)}/**
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
 */function sL(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=_m(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new Xl(o,d)}}if(!r)return null;switch(r){case"facebook.com":return new aL(o,a);case"github.com":return new oL(o,a);case"google.com":return new lL(o,a);case"twitter.com":return new uL(o,a,n.screenName||null);case"custom":case"anonymous":return new Xl(o,null);default:return new Xl(o,r,a)}}class Xl{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class e1 extends Xl{constructor(e,t,r,a){super(e,t,r),this.username=a}}class aL extends Xl{constructor(e,t){super(e,"facebook.com",t)}}class oL extends e1{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class lL extends Xl{constructor(e,t){super(e,"google.com",t)}}class uL extends e1{constructor(e,t,r){super(e,"twitter.com",t,r)}}function cL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:sL(t)}/**
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
 */class po{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new po("enroll",e,t)}static _fromMfaPendingCredential(e){return new po("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return po._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return po._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class aE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=bt(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(d=>dd._fromServerResponse(r,d));ae(a.mfaPendingCredential,r,"internal-error");const u=po._fromMfaPendingCredential(a.mfaPendingCredential);return new aE(u,o,async d=>{const p=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const _=await br._fromIdTokenResponse(r,t.operationType,m);return await r._updateCurrentUser(_.user),_;case"reauthenticate":return ae(t.user,r,"internal-error"),br._forOperation(t.user,t.operationType,m);default:vn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function hL(n,e){var t;const r=Ae(n),a=e;return ae(e.customData.operationType,r,"argument-error"),ae((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),aE._fromError(r,a)}/**
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
 */function SI(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:start",Dt(n,e))}function dL(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Dt(n,e))}function fL(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Dt(n,e))}class oE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>dd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new oE(e)}async getSession(){return po._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await Wi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Wi(this.user,fL(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const __=new WeakMap;function pL(n){const e=Ae(n);return __.has(e)||__.set(e,oE._fromUser(e)),__.get(e)}const Fp="__sak";/**
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
 */class t1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fp,"1"),this.storage.removeItem(Fp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mL=1e3,gL=10;class n1 extends t1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);WM()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,gL):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},mL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}n1.type="LOCAL";const lE=n1;/**
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
 */class r1 extends t1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}r1.type="SESSION";const bo=r1;/**
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
 */function yL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Im{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Im(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,o)),p=await yL(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Im.receivers=[];/**
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
 */function fd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class _L{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((d,p)=>{const m=fd("",20);a.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(w.data.response);break;default:clearTimeout(_),clearTimeout(o),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function qt(){return window}function vL(n){qt().location.href=n}/**
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
 */function uE(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function EL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wL(){return uE()?self:null}/**
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
 */const i1="firebaseLocalStorageDb",bL=1,jp="firebaseLocalStorage",s1="fbase_key";class pd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Am(n,e){return n.transaction([jp],e?"readwrite":"readonly").objectStore(jp)}function IL(){const n=indexedDB.deleteDatabase(i1);return new pd(n).toPromise()}function $_(){const n=indexedDB.open(i1,bL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(jp,{keyPath:s1})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(jp)?e(r):(r.close(),await IL(),e(await $_()))})})}async function RI(n,e,t){const r=Am(n,!0).put({[s1]:e,value:t});return new pd(r).toPromise()}async function AL(n,e){const t=Am(n,!1).get(e),r=await new pd(t).toPromise();return r===void 0?null:r.value}function CI(n,e){const t=Am(n,!0).delete(e);return new pd(t).toPromise()}const SL=800,RL=3;class a1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>RL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Im._getInstance(wL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await EL(),!this.activeServiceWorker)return;this.sender=new _L(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $_();return await RI(e,Fp,"1"),await CI(e,Fp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>RI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>AL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>CI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Am(a,!1).getAll();return new pd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a1.type="LOCAL";const zh=a1;/**
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
 */function xI(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:start",Dt(n,e))}function CL(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:finalize",Dt(n,e))}/**
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
 */const v_=FR("rcb"),xL=new ld(3e4,6e4);class DL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=qt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return ae(PL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&yI(qt().grecaptcha)?Promise.resolve(qt().grecaptcha):new Promise((r,a)=>{const o=qt().setTimeout(()=>{a(Xt(e,"network-request-failed"))},xL.get());qt()[v_]=()=>{qt().clearTimeout(o),delete qt()[v_];const d=qt().grecaptcha;if(!d||!yI(d)){a(Xt(e,"internal-error"));return}const p=d.render;d.render=(m,_)=>{const v=p(m,_);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${r2()}?${Pu({onload:v_,render:"explicit",hl:t})}`;tE(u).catch(()=>{clearTimeout(o),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=qt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function PL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class NL{async load(e){return new l2(e)}clearedOneInstance(){}}/**
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
 */const vh="recaptcha",OL={theme:"light",type:"image"};let kL=class{constructor(e,t,r=Object.assign({},OL)){this.parameters=r,this.type=vh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",ae(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;ae(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new NL:new DL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ae(!this.parameters.sitekey,this.auth,"argument-error"),ae(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ae(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=qt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){ae(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ae(Zv()&&!uE(),this.auth,"internal-error"),await VL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await UM(this.auth);ae(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ae(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function VL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class cE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=To._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ML(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=await Sm(r,e,Ae(t));return new cE(a,o=>wm(r,o))}async function LL(n,e,t){const r=Ae(n);await Tm(!1,r,"phone");const a=await Sm(r.auth,e,Ae(t));return new cE(a,o=>WR(r,o))}async function UL(n,e,t){const r=Ae(n);if(ft(r.auth.app))return Promise.reject(hn(r.auth));const a=await Sm(r.auth,e,Ae(t));return new cE(a,o=>XR(r,o))}async function Sm(n,e,t){var r;if(!n._getRecaptchaConfig())try{await p2(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){ae(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ta(n,u,"mfaSmsEnrollment",async(_,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===_h){ae((t==null?void 0:t.type)===vh,_,"argument-error");const w=await E_(_,v,t);return SI(_,w)}return SI(_,v)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneSessionInfo.sessionInfo}else{ae(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;ae(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ta(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===_h){ae((t==null?void 0:t.type)===vh,v,"argument-error");const S=await E_(v,w,t);return xI(v,S)}return xI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ta(n,o,"sendVerificationCode",async(m,_)=>{if(_.captchaResponse===_h){ae((t==null?void 0:t.type)===vh,m,"argument-error");const v=await E_(m,_,t);return II(m,v)}return II(m,_)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function zL(n,e){const t=Ae(n);if(ft(t.auth.app))return Promise.reject(hn(t.auth));await nE(t,e)}async function E_(n,e,t){ae(t.type===vh,n,"argument-error");const r=await t.verify();ae(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
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
 */let Io=class yp{constructor(e){this.providerId=yp.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return Sm(this.auth,e,Ae(t))}static credential(e,t){return To._fromVerification(e,t)}static credentialFromResult(e){const t=e;return yp.credentialFromTaggedObject(t)}static credentialFromError(e){return yp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?To._fromTokenResponse(t,r):null}};Io.PROVIDER_ID="phone";Io.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Lo(n,e){return e?tr(e):(ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class hE extends ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ki(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function BL(n){return YR(n.auth,new hE(n),n.bypassAuthState)}function FL(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),QR(t,new hE(n),n.bypassAuthState)}async function jL(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),nE(t,new hE(n),n.bypassAuthState)}/**
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
 */class o1{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BL;case"linkViaPopup":case"linkViaRedirect":return jL;case"reauthViaPopup":case"reauthViaRedirect":return FL;default:vn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qL=new ld(2e3,1e4);async function HL(n,e,t){if(ft(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=bt(n);Ou(n,e,ts);const a=Lo(r,t);return new Hi(r,"signInViaPopup",e,a).executeNotNull()}async function $L(n,e,t){const r=Ae(n);if(ft(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));Ou(r.auth,e,ts);const a=Lo(r.auth,t);return new Hi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function GL(n,e,t){const r=Ae(n);Ou(r.auth,e,ts);const a=Lo(r.auth,t);return new Hi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Hi extends o1{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qL.get())};e()}}Hi.currentPopupAction=null;/**
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
 */const KL="pendingRedirect",Eh=new Map;class QL extends o1{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Eh.get(this.auth._key());if(!e){try{const r=await YL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Eh.set(this.auth._key(),e)}return this.bypassAuthState||Eh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YL(n,e){const t=u1(e),r=l1(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function dE(n,e){return l1(n)._set(u1(e),"true")}function WL(){Eh.clear()}function fE(n,e){Eh.set(n._key(),e)}function l1(n){return tr(n._redirectPersistence)}function u1(n){return Eo(KL,n.config.apiKey,n.name)}/**
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
 */function XL(n,e,t){return JL(n,e,t)}async function JL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n);Ou(n,e,ts),await r._initializationPromise;const a=Lo(r,t);return await dE(a,r),a._openRedirect(r,e,"signInViaRedirect")}function ZL(n,e,t){return e4(n,e,t)}async function e4(n,e,t){const r=Ae(n);if(Ou(r.auth,e,ts),ft(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const a=Lo(r.auth,t);await dE(a,r.auth);const o=await c1(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function t4(n,e,t){return n4(n,e,t)}async function n4(n,e,t){const r=Ae(n);Ou(r.auth,e,ts),await r.auth._initializationPromise;const a=Lo(r.auth,t);await Tm(!1,r,e.providerId),await dE(a,r.auth);const o=await c1(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function r4(n,e){return await bt(n)._initializationPromise,Rm(n,e,!1)}async function Rm(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=Lo(r,e),u=await new QL(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function c1(n){const e=fd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const i4=10*60*1e3;class h1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s4(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!d1(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=i4&&this.cachedEventUids.clear(),this.cachedEventUids.has(DI(e))}saveEventToCache(e){this.cachedEventUids.add(DI(e)),this.lastProcessedEventTime=Date.now()}}function DI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function d1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s4(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d1(n);default:return!1}}/**
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
 */async function f1(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
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
 */const a4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o4=/^https?/;async function l4(n){if(n.config.emulator)return;const{authorizedDomains:e}=await f1(n);for(const t of e)try{if(u4(t))return}catch{}vn(n,"unauthorized-domain")}function u4(n){const e=Mh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!o4.test(t))return!1;if(a4.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
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
 */const c4=new ld(3e4,6e4);function PI(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function h4(n){return new Promise((e,t)=>{var r,a,o;function u(){PI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{PI(),t(Xt(n,"network-request-failed"))},timeout:c4.get()})}if(!((a=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=qt().gapi)===null||o===void 0)&&o.load)u();else{const d=FR("iframefcb");return qt()[d]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},tE(`${s2()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw _p=null,e})}let _p=null;function d4(n){return _p=_p||h4(n),_p}/**
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
 */const f4=new ld(5e3,15e3),p4="__/auth/iframe",m4="emulator/auth/iframe",g4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _4(n){const e=n.config;ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?eE(e,m4):`https://${n.config.authDomain}/${p4}`,r={apiKey:e.apiKey,appName:n.name,v:_a},a=y4.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Pu(r).slice(1)}`}async function v4(n){const e=await d4(n),t=qt().gapi;return ae(t,n,"internal-error"),e.open({where:document.body,url:_4(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g4,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),d=qt().setTimeout(()=>{o(u)},f4.get());function p(){qt().clearTimeout(d),a(r)}r.ping(p).then(p,()=>{o(u)})}))}/**
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
 */const E4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T4=500,w4=600,b4="_blank",I4="http://localhost";class NI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A4(n,e,t,r=T4,a=w4){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},E4),{width:r.toString(),height:a.toString(),top:o,left:u}),m=wt().toLowerCase();t&&(d=VR(m)?b4:t),OR(m)&&(e=e||I4,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[S,x])=>`${w}${S}=${x},`,"");if(YM(m)&&d!=="_self")return S4(e||"",d),new NI(null);const v=window.open(e||"",d,_);ae(v,n,"popup-blocked");try{v.focus()}catch{}return new NI(v)}function S4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const R4="__/auth/handler",C4="emulator/auth/handler",x4=encodeURIComponent("fac");async function G_(n,e,t,r,a,o){ae(n.config.authDomain,n,"auth-domain-config-required"),ae(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_a,eventId:a};if(e instanceof ts){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",nV(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries(o||{}))u[_]=v}if(e instanceof Vu){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(u.scopes=_.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),m=p?`#${x4}=${encodeURIComponent(p)}`:"";return`${D4(n)}?${Pu(d).slice(1)}${m}`}function D4({config:n}){return n.emulator?eE(n,C4):`https://${n.authDomain}/${R4}`}/**
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
 */const T_="webStorageSupport";class P4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bo,this._completeRedirectFn=Rm,this._overrideRedirectResult=fE}async _openPopup(e,t,r,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await G_(e,t,r,Mh(),a);return A4(e,u,fd())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await G_(e,t,r,Mh(),a);return vL(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await v4(e),r=new h1(e);return t.register("authEvent",a=>(ae(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(T_,{type:T_},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[T_];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=l4(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zR()||kR()||cd()}}const N4=P4;class O4{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ii("unexpected MultiFactorSessionType")}}}class pE extends O4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new pE(e)}_finalizeEnroll(e,t,r){return dL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return CL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class p1{constructor(){}static assertion(e){return pE._fromCredential(e)}}p1.FACTOR_ID="phone";var OI="@firebase/auth",kI="1.10.2";/**
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
 */class k4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function V4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function M4(n){la(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;ae(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BR(n)},m=new t2(r,a,o,p);return m2(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),la(new ci("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new k4(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(OI,kI,V4(n)),Or(OI,kI,"esm2017")}/**
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
 */const L4=5*60;Gk("authIdTokenMaxAge");function U4(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}n2({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Xt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",U4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});M4("Browser");/**
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
 */function Ao(){return window}/**
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
 */const z4=2e3;async function B4(n,e,t){var r;const{BuildInfo:a}=Ao();kr(e.sessionId,"AuthEvent did not contain a session ID");const o=await $4(e.sessionId),u={};return cd()?u.ibi=a.packageName:ud()?u.apn=a.packageName:vn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,G_(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function F4(n){const{BuildInfo:e}=Ao(),t={};cd()?t.iosBundleId=e.packageName:ud()?t.androidPackageName=e.packageName:vn(n,"operation-not-supported-in-this-environment"),await f1(n,t)}function j4(n){const{cordova:e}=Ao();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,QM()?"_blank":"_system","location=yes"),t(a)})})}async function q4(n,e,t){const{cordova:r}=Ao();let a=()=>{};try{await new Promise((o,u)=>{let d=null;function p(){var v;o();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function m(){d||(d=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},z4))}function _(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),ud()&&document.addEventListener("visibilitychange",_,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",_,!1),d&&window.clearTimeout(d)}})}finally{a()}}function H4(n){var e,t,r,a,o,u,d,p,m,_;const v=Ao();ae(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ae(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ae(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ae(typeof((p=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ae(typeof((_=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||_===void 0?void 0:_.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function $4(n){const e=G4(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function G4(n){if(kr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const K4=20;class Q4 extends h1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Y4(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:J4(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function W4(n,e){return K_()._set(Q_(n),e)}async function VI(n){const e=await K_()._get(Q_(n));return e&&await K_()._remove(Q_(n)),e}function X4(n,e){var t,r;const a=eU(e);if(a.includes("/__/auth/callback")){const o=vp(a),u=o.firebaseError?Z4(decodeURIComponent(o.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=d?Xt(d):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function J4(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<K4;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function K_(){return tr(lE)}function Q_(n){return Eo("authEvent",n.config.apiKey,n.name)}function Z4(n){try{return JSON.parse(n)}catch{return null}}function eU(n){const e=vp(n),t=e.link?decodeURIComponent(e.link):void 0,r=vp(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return vp(a).link||a||r||t||n}function vp(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Gl(t.join("?"))}/**
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
 */const tU=500;class nU{constructor(){this._redirectPersistence=bo,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Rm,this._overrideRedirectResult=fE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new Q4(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){H4(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),WL(),await this._originValidation(e);const u=Y4(e,r,a);await W4(e,u);const d=await B4(e,u,t),p=await j4(d);return q4(e,o,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F4(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=Ao(),u=setTimeout(async()=>{await VI(e),t.onEvent(MI())},tU),d=async _=>{clearTimeout(u);const v=await VI(e);let w=null;v&&(_!=null&&_.url)&&(w=X4(v,_.url)),t.onEvent(w||MI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const p=a,m=`${o.packageName.toLowerCase()}://`;Ao().handleOpenURL=async _=>{if(_.toLowerCase().startsWith(m)&&d({url:_}),typeof p=="function")try{p(_)}catch(v){console.error(v)}}}}const rU=nU;function MI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(n,e){bt(n)._logFramework(e)}var sU="@firebase/auth-compat",aU="0.5.22";/**
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
 */const oU=1e3;function Th(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function lU(){return Th()==="http:"||Th()==="https:"}function m1(n=wt()){return!!((Th()==="file:"||Th()==="ionic:"||Th()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function uU(){return Gv()||$v()}function cU(){return oR()&&(document==null?void 0:document.documentMode)===11}function hU(n=wt()){return/Edge\/\d+/.test(n)}function dU(n=wt()){return cU()||hU(n)}function g1(){try{const n=self.localStorage,e=fd();if(n)return n.setItem(e,"1"),n.removeItem(e),dU()?Oh():!0}catch{return mE()&&Oh()}return!1}function mE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function w_(){return(lU()||aR()||m1())&&!uU()&&g1()&&!mE()}function y1(){return m1()&&typeof document<"u"}async function fU(){return y1()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},oU);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function pU(){return typeof window<"u"?window:null}/**
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
 */const er={LOCAL:"local",NONE:"none",SESSION:"session"},th=ae,_1="persistence";function mU(n,e){if(th(Object.values(er).includes(e),n,"invalid-persistence-type"),Gv()){th(e!==er.SESSION,n,"unsupported-persistence-type");return}if($v()){th(e===er.NONE,n,"unsupported-persistence-type");return}if(mE()){th(e===er.NONE||e===er.LOCAL&&Oh(),n,"unsupported-persistence-type");return}th(e===er.NONE||g1(),n,"unsupported-persistence-type")}async function Y_(n){await n._initializationPromise;const e=v1(),t=Eo(_1,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function gU(n,e){const t=v1();if(!t)return[];const r=Eo(_1,n,e);switch(t.getItem(r)){case er.NONE:return[ou];case er.LOCAL:return[zh,bo];case er.SESSION:return[bo];default:return[]}}function v1(){var n;try{return((n=pU())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const yU=ae;class Ws{constructor(){this.browserResolver=tr(N4),this.cordovaResolver=tr(rU),this.underlyingResolver=null,this._redirectPersistence=bo,this._completeRedirectFn=Rm,this._overrideRedirectResult=fE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return y1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return yU(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await fU();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function E1(n){return n.unwrap()}function _U(n){return n.wrapped()}/**
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
 */function vU(n){return T1(n)}function EU(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new TU(n,hL(n,e))}else if(r){const a=T1(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function T1(n){const{_tokenResponse:e}=n instanceof kn?n.customData:n;if(!e)return null;if(!(n instanceof kn)&&"temporaryProof"in e&&"phoneNumber"in e)return Io.credentialFromResult(n);const t=e.providerId;if(!t||t===Zc.PASSWORD)return null;let r;switch(t){case Zc.GOOGLE:r=ti;break;case Zc.FACEBOOK:r=ei;break;case Zc.GITHUB:r=ni;break;case Zc.TWITTER:r=ri;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:d,nonce:p}=e;return!o&&!u&&!a&&!d?null:d?t.startsWith("saml.")?lu._create(t,d):hi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:o}):new Wl(t).credential({idToken:a,accessToken:o,rawNonce:p})}return n instanceof kn?r.credentialFromError(n):r.credentialFromResult(n)}function Bn(n,e){return e.catch(t=>{throw t instanceof kn&&EU(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:vU(t),additionalUserInfo:cL(t),user:Cm.getOrCreate(a)}})}async function W_(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Bn(n,t.confirm(r))}}class TU{constructor(e,t){this.resolver=t,this.auth=_U(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Bn(E1(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Cm=class hh{constructor(e){this._delegate=e,this.multiFactor=pL(e)}static getOrCreate(e){return hh.USER_MAP.has(e)||hh.USER_MAP.set(e,new hh(e)),hh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Bn(this.auth,WR(this._delegate,e))}async linkWithPhoneNumber(e,t){return W_(this.auth,LL(this._delegate,e,t))}async linkWithPopup(e){return Bn(this.auth,GL(this._delegate,e,Ws))}async linkWithRedirect(e){return await Y_(bt(this.auth)),t4(this._delegate,e,Ws)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Bn(this.auth,XR(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return W_(this.auth,UL(this._delegate,e,t))}reauthenticateWithPopup(e){return Bn(this.auth,$L(this._delegate,e,Ws))}async reauthenticateWithRedirect(e){return await Y_(bt(this.auth)),ZL(this._delegate,e,Ws)}sendEmailVerification(e){return Z2(this._delegate,e)}async unlink(e){return await z2(this._delegate,e),this}updateEmail(e){return rL(this._delegate,e)}updatePassword(e){return iL(this._delegate,e)}updatePhoneNumber(e){return zL(this._delegate,e)}updateProfile(e){return nL(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return eL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Cm.USER_MAP=new WeakMap;/**
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
 */const nh=ae;class X_{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;nh(r,"invalid-api-key",{appName:e.name}),nh(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Ws:void 0;this._delegate=t.initialize({options:{persistence:wU(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(CM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Cm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){g2(this._delegate,e,t)}applyActionCode(e){return H2(this._delegate,e)}checkActionCode(e){return JR(this._delegate,e)}confirmPasswordReset(e,t){return q2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Bn(this._delegate,G2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return J2(this._delegate,e)}isSignInWithEmailLink(e){return Y2(this._delegate,e)}async getRedirectResult(){nh(w_(),this._delegate,"operation-not-supported-in-this-environment");const e=await r4(this._delegate,Ws);return e?Bn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){iU(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=LI(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=LI(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return Q2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return j2(this._delegate,e,t||void 0)}async setPersistence(e){mU(this._delegate,e);let t;switch(e){case er.SESSION:t=bo;break;case er.LOCAL:t=await tr(zh)._isAvailable()?zh:lE;break;case er.NONE:t=ou;break;default:return vn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Bn(this._delegate,U2(this._delegate))}signInWithCredential(e){return Bn(this._delegate,wm(this._delegate,e))}signInWithCustomToken(e){return Bn(this._delegate,F2(this._delegate,e))}signInWithEmailAndPassword(e,t){return Bn(this._delegate,K2(this._delegate,e,t))}signInWithEmailLink(e,t){return Bn(this._delegate,W2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return W_(this._delegate,ML(this._delegate,e,t))}async signInWithPopup(e){return nh(w_(),this._delegate,"operation-not-supported-in-this-environment"),Bn(this._delegate,HL(this._delegate,e,Ws))}async signInWithRedirect(e){return nh(w_(),this._delegate,"operation-not-supported-in-this-environment"),await Y_(this._delegate),XL(this._delegate,e,Ws)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return $2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}X_.Persistence=er;function LI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&Cm.getOrCreate(u)),error:e,complete:t}}function wU(n,e){const t=gU(n,e);if(typeof self<"u"&&!t.includes(zh)&&t.push(zh),typeof window<"u")for(const r of[lE,bo])t.includes(r)||t.push(r);return t.includes(ou)||t.push(ou),t}/**
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
 */class gE{static credential(e,t){return Io.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Io(E1(Nu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}gE.PHONE_SIGN_IN_METHOD=Io.PHONE_SIGN_IN_METHOD;gE.PROVIDER_ID=Io.PROVIDER_ID;/**
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
 */const bU=ae;class IU{constructor(e,t,r=Nu.app()){var a;bU((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new kL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const AU="auth-compat";function SU(n){n.INTERNAL.registerComponent(new ci(AU,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new X_(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ol.EMAIL_SIGNIN,PASSWORD_RESET:Ol.PASSWORD_RESET,RECOVER_EMAIL:Ol.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ol.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ol.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ol.VERIFY_EMAIL}},EmailAuthProvider:va,FacebookAuthProvider:ei,GithubAuthProvider:ni,GoogleAuthProvider:ti,OAuthProvider:Wl,SAMLAuthProvider:zp,PhoneAuthProvider:gE,PhoneMultiFactorGenerator:p1,RecaptchaVerifier:IU,TwitterAuthProvider:ri,Auth:X_,AuthCredential:ku,Error:kn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(sU,aU)}SU(Nu);var UI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var na,w1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function A(){}A.prototype=R.prototype,D.D=R.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(P,V,B){for(var N=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)N[Nt-2]=arguments[Nt];return R.prototype[V].apply(P,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,A){A||(A=0);var P=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)P[V]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(V=0;16>V;++V)P[V]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=D.g[0],A=D.g[1],V=D.g[2];var B=D.g[3],N=R+(B^A&(V^B))+P[0]+3614090360&4294967295;R=A+(N<<7&4294967295|N>>>25),N=B+(V^R&(A^V))+P[1]+3905402710&4294967295,B=R+(N<<12&4294967295|N>>>20),N=V+(A^B&(R^A))+P[2]+606105819&4294967295,V=B+(N<<17&4294967295|N>>>15),N=A+(R^V&(B^R))+P[3]+3250441966&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(B^A&(V^B))+P[4]+4118548399&4294967295,R=A+(N<<7&4294967295|N>>>25),N=B+(V^R&(A^V))+P[5]+1200080426&4294967295,B=R+(N<<12&4294967295|N>>>20),N=V+(A^B&(R^A))+P[6]+2821735955&4294967295,V=B+(N<<17&4294967295|N>>>15),N=A+(R^V&(B^R))+P[7]+4249261313&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(B^A&(V^B))+P[8]+1770035416&4294967295,R=A+(N<<7&4294967295|N>>>25),N=B+(V^R&(A^V))+P[9]+2336552879&4294967295,B=R+(N<<12&4294967295|N>>>20),N=V+(A^B&(R^A))+P[10]+4294925233&4294967295,V=B+(N<<17&4294967295|N>>>15),N=A+(R^V&(B^R))+P[11]+2304563134&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(B^A&(V^B))+P[12]+1804603682&4294967295,R=A+(N<<7&4294967295|N>>>25),N=B+(V^R&(A^V))+P[13]+4254626195&4294967295,B=R+(N<<12&4294967295|N>>>20),N=V+(A^B&(R^A))+P[14]+2792965006&4294967295,V=B+(N<<17&4294967295|N>>>15),N=A+(R^V&(B^R))+P[15]+1236535329&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(V^B&(A^V))+P[1]+4129170786&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^V&(R^A))+P[6]+3225465664&4294967295,B=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(B^R))+P[11]+643717713&4294967295,V=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(V^B))+P[0]+3921069994&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^B&(A^V))+P[5]+3593408605&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^V&(R^A))+P[10]+38016083&4294967295,B=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(B^R))+P[15]+3634488961&4294967295,V=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(V^B))+P[4]+3889429448&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^B&(A^V))+P[9]+568446438&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^V&(R^A))+P[14]+3275163606&4294967295,B=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(B^R))+P[3]+4107603335&4294967295,V=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(V^B))+P[8]+1163531501&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^B&(A^V))+P[13]+2850285829&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^V&(R^A))+P[2]+4243563512&4294967295,B=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(B^R))+P[7]+1735328473&4294967295,V=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(V^B))+P[12]+2368359562&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(A^V^B)+P[5]+4294588738&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^V)+P[8]+2272392833&4294967295,B=R+(N<<11&4294967295|N>>>21),N=V+(B^R^A)+P[11]+1839030562&4294967295,V=B+(N<<16&4294967295|N>>>16),N=A+(V^B^R)+P[14]+4259657740&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^B)+P[1]+2763975236&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^V)+P[4]+1272893353&4294967295,B=R+(N<<11&4294967295|N>>>21),N=V+(B^R^A)+P[7]+4139469664&4294967295,V=B+(N<<16&4294967295|N>>>16),N=A+(V^B^R)+P[10]+3200236656&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^B)+P[13]+681279174&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^V)+P[0]+3936430074&4294967295,B=R+(N<<11&4294967295|N>>>21),N=V+(B^R^A)+P[3]+3572445317&4294967295,V=B+(N<<16&4294967295|N>>>16),N=A+(V^B^R)+P[6]+76029189&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^B)+P[9]+3654602809&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^V)+P[12]+3873151461&4294967295,B=R+(N<<11&4294967295|N>>>21),N=V+(B^R^A)+P[15]+530742520&4294967295,V=B+(N<<16&4294967295|N>>>16),N=A+(V^B^R)+P[2]+3299628645&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(V^(A|~B))+P[0]+4096336452&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~V))+P[7]+1126891415&4294967295,B=R+(N<<10&4294967295|N>>>22),N=V+(R^(B|~A))+P[14]+2878612391&4294967295,V=B+(N<<15&4294967295|N>>>17),N=A+(B^(V|~R))+P[5]+4237533241&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~B))+P[12]+1700485571&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~V))+P[3]+2399980690&4294967295,B=R+(N<<10&4294967295|N>>>22),N=V+(R^(B|~A))+P[10]+4293915773&4294967295,V=B+(N<<15&4294967295|N>>>17),N=A+(B^(V|~R))+P[1]+2240044497&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~B))+P[8]+1873313359&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~V))+P[15]+4264355552&4294967295,B=R+(N<<10&4294967295|N>>>22),N=V+(R^(B|~A))+P[6]+2734768916&4294967295,V=B+(N<<15&4294967295|N>>>17),N=A+(B^(V|~R))+P[13]+1309151649&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~B))+P[4]+4149444226&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~V))+P[11]+3174756917&4294967295,B=R+(N<<10&4294967295|N>>>22),N=V+(R^(B|~A))+P[2]+718787259&4294967295,V=B+(N<<15&4294967295|N>>>17),N=A+(B^(V|~R))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+B&4294967295}r.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var A=R-this.blockSize,P=this.B,V=this.h,B=0;B<R;){if(V==0)for(;B<=A;)a(this,D,B),B+=this.blockSize;if(typeof D=="string"){for(;B<R;)if(P[V++]=D.charCodeAt(B++),V==this.blockSize){a(this,P),V=0;break}}else for(;B<R;)if(P[V++]=D[B++],V==this.blockSize){a(this,P),V=0;break}}this.h=V,this.o+=R},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var A=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=A&255,A/=256;for(this.u(D),D=Array(16),R=A=0;4>R;++R)for(var P=0;32>P;P+=8)D[A++]=this.g[R]>>>P&255;return D};function o(D,R){var A=d;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=R(D)}function u(D,R){this.h=R;for(var A=[],P=!0,V=D.length-1;0<=V;V--){var B=D[V]|0;P&&B==R||(A[V]=B,P=!1)}this.g=A}var d={};function p(D){return-128<=D&&128>D?o(D,function(R){return new u([R|0],0>R?-1:0)}):new u([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return v;if(0>D)return M(m(-D));for(var R=[],A=1,P=0;D>=A;P++)R[P]=D/A|0,A*=4294967296;return new u(R,0)}function _(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return M(_(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(R,8)),P=v,V=0;V<D.length;V+=8){var B=Math.min(8,D.length-V),N=parseInt(D.substring(V,V+B),R);8>B?(B=m(Math.pow(R,B)),P=P.j(B).add(m(N))):(P=P.j(A),P=P.add(m(N)))}return P}var v=p(0),w=p(1),S=p(16777216);n=u.prototype,n.m=function(){if(U(this))return-M(this).m();for(var D=0,R=1,A=0;A<this.g.length;A++){var P=this.i(A);D+=(0<=P?P:4294967296+P)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(x(this))return"0";if(U(this))return"-"+M(this).toString(D);for(var R=m(Math.pow(D,6)),A=this,P="";;){var V=oe(A,R).g;A=q(A,V.j(R));var B=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=V,x(A))return B+P;for(;6>B.length;)B="0"+B;P=B+P}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function x(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function U(D){return D.h==-1}n.l=function(D){return D=q(this,D),U(D)?-1:x(D)?0:1};function M(D){for(var R=D.g.length,A=[],P=0;P<R;P++)A[P]=~D.g[P];return new u(A,~D.h).add(w)}n.abs=function(){return U(this)?M(this):this},n.add=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0,V=0;V<=R;V++){var B=P+(this.i(V)&65535)+(D.i(V)&65535),N=(B>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);P=N>>>16,B&=65535,N&=65535,A[V]=N<<16|B}return new u(A,A[A.length-1]&-2147483648?-1:0)};function q(D,R){return D.add(M(R))}n.j=function(D){if(x(this)||x(D))return v;if(U(this))return U(D)?M(this).j(M(D)):M(M(this).j(D));if(U(D))return M(this.j(M(D)));if(0>this.l(S)&&0>D.l(S))return m(this.m()*D.m());for(var R=this.g.length+D.g.length,A=[],P=0;P<2*R;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<D.g.length;V++){var B=this.i(P)>>>16,N=this.i(P)&65535,Nt=D.i(V)>>>16,It=D.i(V)&65535;A[2*P+2*V]+=N*It,X(A,2*P+2*V),A[2*P+2*V+1]+=B*It,X(A,2*P+2*V+1),A[2*P+2*V+1]+=N*Nt,X(A,2*P+2*V+1),A[2*P+2*V+2]+=B*Nt,X(A,2*P+2*V+2)}for(P=0;P<R;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=R;P<2*R;P++)A[P]=0;return new u(A,0)};function X(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function K(D,R){this.g=D,this.h=R}function oe(D,R){if(x(R))throw Error("division by zero");if(x(D))return new K(v,v);if(U(D))return R=oe(M(D),R),new K(M(R.g),M(R.h));if(U(R))return R=oe(D,M(R)),new K(M(R.g),R.h);if(30<D.g.length){if(U(D)||U(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,P=R;0>=P.l(D);)A=te(A),P=te(P);var V=le(A,1),B=le(P,1);for(P=le(P,2),A=le(A,2);!x(P);){var N=B.add(P);0>=N.l(D)&&(V=V.add(A),B=N),P=le(P,1),A=le(A,1)}return R=q(D,V.j(R)),new K(V,R)}for(V=v;0<=D.l(R);){for(A=Math.max(1,Math.floor(D.m()/R.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),B=m(A),N=B.j(R);U(N)||0<N.l(D);)A-=P,B=m(A),N=B.j(R);x(B)&&(B=w),V=V.add(B),D=q(D,N)}return new K(V,D)}n.A=function(D){return oe(this,D).h},n.and=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)&D.i(P);return new u(A,this.h&D.h)},n.or=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)|D.i(P);return new u(A,this.h|D.h)},n.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)^D.i(P);return new u(A,this.h^D.h)};function te(D){for(var R=D.g.length+1,A=[],P=0;P<R;P++)A[P]=D.i(P)<<1|D.i(P-1)>>>31;return new u(A,D.h)}function le(D,R){var A=R>>5;R%=32;for(var P=D.g.length-A,V=[],B=0;B<P;B++)V[B]=0<R?D.i(B+A)>>>R|D.i(B+A+1)<<32-R:D.i(B+A);return new u(V,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,w1=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=_,na=u}).apply(typeof UI<"u"?UI:typeof self<"u"?self:typeof window<"u"?window:{});var tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var b1,dh,I1,Ep,J_,A1,S1,R1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof tp=="object"&&tp];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,y){if(y)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var F=h[I];if(!(F in E))break e;E=E[F]}h=h[h.length-1],I=E[h],y=y(I),y!=I&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function o(h,y){h instanceof String&&(h+="");var E=0,I=!1,F={next:function(){if(!I&&E<h.length){var Y=E++;return{value:y(Y,h[Y]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return o(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function m(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function _(h,y,E){return h.call.apply(h.bind,arguments)}function v(h,y,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),h.apply(y,F)}}return function(){return h.apply(y,arguments)}}function w(h,y,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:v,w.apply(null,arguments)}function S(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function x(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,F,Y){for(var ue=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ue[qe-2]=arguments[qe];return y.prototype[F].apply(I,ue)}}function U(h){const y=h.length;if(0<y){const E=Array(y);for(let I=0;I<y;I++)E[I]=h[I];return E}return[]}function M(h,y){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const F=h.length||0,Y=I.length||0;h.length=F+Y;for(let ue=0;ue<Y;ue++)h[F+ue]=I[ue]}else h.push(I)}}class q{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function X(h){return/^[\s\xa0]*$/.test(h)}function K(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var te=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function le(h,y,E){for(const I in h)y.call(E,h[I],I,h)}function D(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function R(h){const y={};for(const E in h)y[E]=h[E];return y}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,y){let E,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(E in I)h[E]=I[E];for(let Y=0;Y<A.length;Y++)E=A[Y],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function V(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function B(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Oe;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Nt{constructor(){this.h=this.g=null}add(y,E){const I=It.get();I.set(y,E),this.h?this.h.next=I:this.g=I,this.h=I}}var It=new q(()=>new he,h=>h.reset());class he{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,we=!1,Oe=new Nt,O=()=>{const h=d.Promise.resolve(void 0);Ie=()=>{h.then(se)}};var se=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){B(E)}var y=It;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}we=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,y),d.removeEventListener("test",E,y)}catch{}return h}();function xe(h,y){if(pe.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(te){e:{try{oe(y.nodeName);var F=!0;break e}catch{}F=!1}F||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ce[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&xe.aa.h.call(this)}}x(xe,pe);var Ce={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Je(h,y,E,I,F){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!I,this.ha=F,this.key=++Me,this.da=this.fa=!1}function Ke(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ut(h){this.src=h,this.g={},this.h=0}Ut.prototype.add=function(h,y,E,I,F){var Y=h.toString();h=this.g[Y],h||(h=this.g[Y]=[],this.h++);var ue=rr(h,y,I,F);return-1<ue?(y=h[ue],E||(y.fa=!1)):(y=new Je(y,this.src,Y,!!I,F),y.fa=E,h.push(y)),y};function Zt(h,y){var E=y.type;if(E in h.g){var I=h.g[E],F=Array.prototype.indexOf.call(I,y,void 0),Y;(Y=0<=F)&&Array.prototype.splice.call(I,F,1),Y&&(Ke(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function rr(h,y,E,I){for(var F=0;F<h.length;++F){var Y=h[F];if(!Y.da&&Y.listener==y&&Y.capture==!!E&&Y.ha==I)return F}return-1}var as="closure_lm_"+(1e6*Math.random()|0),os={};function yi(h,y,E,I,F){if(Array.isArray(y)){for(var Y=0;Y<y.length;Y++)yi(h,y[Y],E,I,F);return null}return E=xd(E),h&&h[ut]?h.K(y,E,m(I)?!!I.capture:!1,F):Hu(h,y,E,!1,I,F)}function Hu(h,y,E,I,F,Y){if(!y)throw Error("Invalid event type");var ue=m(F)?!!F.capture:!!F,qe=$u(h);if(qe||(h[as]=qe=new Ut(h)),E=qe.add(y,E,I,ue,Y),E.proxy)return E;if(I=jo(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)fe||(F=ue),F===void 0&&(F=!1),h.addEventListener(y.toString(),I,F);else if(h.attachEvent)h.attachEvent(Ho(y.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function jo(){function h(E){return y.call(h.src,h.listener,E)}const y=ng;return h}function qo(h,y,E,I,F){if(Array.isArray(y))for(var Y=0;Y<y.length;Y++)qo(h,y[Y],E,I,F);else I=m(I)?!!I.capture:!!I,E=xd(E),h&&h[ut]?(h=h.i,y=String(y).toString(),y in h.g&&(Y=h.g[y],E=rr(Y,E,I,F),-1<E&&(Ke(Y[E]),Array.prototype.splice.call(Y,E,1),Y.length==0&&(delete h.g[y],h.h--)))):h&&(h=$u(h))&&(y=h.g[y.toString()],h=-1,y&&(h=rr(y,E,I,F)),(E=-1<h?y[h]:null)&&Aa(E))}function Aa(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[ut])Zt(y.i,h);else{var E=h.type,I=h.proxy;y.removeEventListener?y.removeEventListener(E,I,h.capture):y.detachEvent?y.detachEvent(Ho(E),I):y.addListener&&y.removeListener&&y.removeListener(I),(E=$u(y))?(Zt(E,h),E.h==0&&(E.src=null,y[as]=null)):Ke(h)}}}function Ho(h){return h in os?os[h]:os[h]="on"+h}function ng(h,y){if(h.da)h=!0;else{y=new xe(y,this);var E=h.listener,I=h.ha||h.src;h.fa&&Aa(h),h=E.call(I,y)}return h}function $u(h){return h=h[as],h instanceof Ut?h:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function xd(h){return typeof h=="function"?h:(h[Ln]||(h[Ln]=function(y){return h.handleEvent(y)}),h[Ln])}function $t(){ge.call(this),this.i=new Ut(this),this.M=this,this.F=null}x($t,ge),$t.prototype[ut]=!0,$t.prototype.removeEventListener=function(h,y,E,I){qo(this,h,y,E,I)};function en(h,y){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=y.type||y,typeof y=="string")y=new pe(y,h);else if(y instanceof pe)y.target=y.target||h;else{var F=y;y=new pe(I,h),P(y,F)}if(F=!0,E)for(var Y=E.length-1;0<=Y;Y--){var ue=y.g=E[Y];F=_i(ue,I,!0,y)&&F}if(ue=y.g=h,F=_i(ue,I,!0,y)&&F,F=_i(ue,I,!1,y)&&F,E)for(Y=0;Y<E.length;Y++)ue=y.g=E[Y],F=_i(ue,I,!1,y)&&F}$t.prototype.N=function(){if($t.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],I=0;I<E.length;I++)Ke(E[I]);delete h.g[y],h.h--}}this.F=null},$t.prototype.K=function(h,y,E,I){return this.i.add(String(h),y,!1,E,I)},$t.prototype.L=function(h,y,E,I){return this.i.add(String(h),y,!0,E,I)};function _i(h,y,E,I){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var F=!0,Y=0;Y<y.length;++Y){var ue=y[Y];if(ue&&!ue.da&&ue.capture==E){var qe=ue.listener,Kt=ue.ha||ue.src;ue.fa&&Zt(h.i,ue),F=qe.call(Kt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Dd(h,y,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function Gu(h){h.g=Dd(()=>{h.g=null,h.i&&(h.i=!1,Gu(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class rg extends ge{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Gu(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sa(h){ge.call(this),this.h=h,this.g={}}x(Sa,ge);var ls=[];function En(h){le(h.g,function(y,E){this.g.hasOwnProperty(E)&&Aa(y)},h),h.g={}}Sa.prototype.N=function(){Sa.aa.N.call(this),En(this)},Sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ku=d.JSON.stringify,Vr=d.JSON.parse,Rn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Qu(){}Qu.prototype.h=null;function Pd(h){return h.h||(h.h=h.i())}function Nd(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){pe.call(this,"d")}x(us,pe);function Ir(){pe.call(this,"c")}x(Ir,pe);var ir={},cs=null;function $o(){return cs=cs||new $t}ir.La="serverreachability";function Yu(h){pe.call(this,ir.La,h)}x(Yu,pe);function hs(h){const y=$o();en(y,new Yu(y))}ir.STAT_EVENT="statevent";function Go(h,y){pe.call(this,ir.STAT_EVENT,h),this.stat=y}x(Go,pe);function Ot(h){const y=$o();en(y,new Go(y,h))}ir.Ma="timingevent";function Od(h,y){pe.call(this,ir.Ma,h),this.size=y}x(Od,pe);function ds(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function kd(h,y,E,I,F,Y){h.info(function(){if(h.g)if(Y)for(var ue="",qe=Y.split("&"),Kt=0;Kt<qe.length;Kt++){var He=qe[Kt].split("=");if(1<He.length){var rn=He[0];He=He[1];var Qt=rn.split("_");ue=2<=Qt.length&&Qt[1]=="type"?ue+(rn+"="+He+"&"):ue+(rn+"=redacted&")}}else ue=null;else ue=Y;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+y+`
`+E+`
`+ue})}function Vd(h,y,E,I,F,Y,ue){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+y+`
`+E+`
`+Y+" "+ue})}function ps(h,y,E,I){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+tn(h,E)+(I?" "+I:"")})}function Lr(h,y){h.info(function(){return"TIMEOUT: "+y})}fs.prototype.info=function(){};function tn(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var Y=F[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var ue=1;ue<F.length;ue++)F[ue]=""}}}}return Ku(E)}catch{return y}}var Gt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ra;function Ko(){}x(Ko,Qu),Ko.prototype.g=function(){return new XMLHttpRequest},Ko.prototype.i=function(){return{}},Ra=new Ko;function Ur(h,y,E,I){this.j=h,this.i=y,this.l=E,this.R=I||1,this.U=new Sa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wu}function Wu(){this.i=null,this.g="",this.h=!1}var ms={},Ca={};function Ar(h,y,E){h.L=1,h.v=Pa(At(y)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,y){h.F=Date.now(),yt(h),h.A=At(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),bi(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Wu,h.g=Yd(h.j,E?y:null,!h.m),0<h.O&&(h.M=new rg(w(h.Y,h,h.g),h.O)),y=h.U,E=h.g,I=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(ls[0]=F.toString()),F=ls);for(var Y=0;Y<F.length;Y++){var ue=yi(E,F[Y],I||y.handleEvent,!1,y.h||y);if(!ue)break;y.g[ue.key]=ue}y=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),hs(),kd(h.i,h.u,h.A,h.l,h.R,h.m)}Ur.prototype.ca=function(h){h=h.target;const y=this.M;y&&ur(h)==3?y.j():this.Y(h)},Ur.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ur(this.g);var y=this.g.Ba();const Ri=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Fd(this.g)))){this.J||Qt!=4||y==7||(y==8||0>=Ri?hs(3):hs(2)),Qo(this);var E=this.g.Z();this.X=E;t:if(gs(this)){var I=Fd(this.g);h="";var F=I.length,Y=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),$n(this);var ue="";break t}this.h.i=new d.TextDecoder}for(y=0;y<F;y++)this.h.h=!0,h+=this.h.i.decode(I[y],{stream:!(Y&&y==F-1)});I.length=0,this.h.g+=h,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,Vd(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Kt=this.g;if((qe=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(qe)){var He=qe;break t}}He=null}if(E=He)ps(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gn(this,E);else{this.o=!1,this.s=3,Ot(12),Un(this),$n(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ue.length;)if(dn=ys(this,ue),dn==Ca){Qt==4&&(this.s=4,Ot(14),E=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ms){this.s=4,Ot(15),ps(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else ps(this.i,this.l,dn,null),Gn(this,dn);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ue.length!=0||this.h.h||(this.s=1,Ot(16),E=!1),this.o=this.o&&E,!E)ps(this.i,this.l,ue,"[Invalid Chunked Response]"),Un(this),$n(this);else if(0<ue.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),Ua(rn),rn.M=!0,Ot(11))}}else ps(this.i,this.l,ue,null),Gn(this,ue);Qt==4&&Un(this),this.o&&!this.J&&(Qt==4?Gd(this.j,this):(this.o=!1,yt(this)))}else ug(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Un(this),$n(this)}}}catch{}finally{}};function gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function ys(h,y){var E=h.C,I=y.indexOf(`
`,E);return I==-1?Ca:(E=Number(y.substring(E,I)),isNaN(E)?ms:(I+=1,I+E>y.length?Ca:(y=y.slice(I,I+E),h.C=I+E,y)))}Ur.prototype.cancel=function(){this.J=!0,Un(this)};function yt(h){h.S=Date.now()+h.I,Xu(h,h.I)}function Xu(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=ds(w(h.ba,h),y)}function Qo(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ur.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Lr(this.i,this.A),this.L!=2&&(hs(),Ot(17)),Un(this),this.s=2,$n(this)):Xu(this,this.S-h)};function $n(h){h.j.G==0||h.J||Gd(h.j,h)}function Un(h){Qo(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,En(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function Gn(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||_s(E.h,h))){if(!h.K&&_s(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(y)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)il(E),nl(E);else break e;lc(E),Ot(18)}}else E.za=F[1],0<E.za-E.T&&37500>F[2]&&E.F&&E.v==0&&!E.C&&(E.C=ds(w(E.Za,E),6e3));if(1>=Md(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Si(E,11)}else if((h.K||E.g==h)&&il(E),!X(y))for(F=E.Da.g.parse(y),y=0;y<F.length;y++){let He=F[y];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const rn=He[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Qt=He[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ri=He[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(I=1.5*Ri,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=h.g;if(dn){const $r=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($r){var Y=I.h;Y.g||$r.indexOf("spdy")==-1&&$r.indexOf("quic")==-1&&$r.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(vs(Y,Y.h),Y.h=null))}if(I.D){const cc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;cc&&(I.ya=cc,Qe(I.I,I.D,cc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=h;if(I.qa=Qd(I,I.J?I.ia:null,I.W),ue.K){sr(I.h,ue);var qe=ue,Kt=I.L;Kt&&(qe.I=Kt),qe.B&&(Qo(qe),yt(qe)),I.g=ue}else Hd(I);0<E.i.length&&rl(E)}else He[0]!="stop"&&He[0]!="close"||Si(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Si(E,7):ac(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}hs(4)}catch{}}var ig=class{constructor(h,y){this.g=h,this.map=y}};function Ju(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zu(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Md(h){return h.h?1:h.g?h.g.size:0}function _s(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function vs(h,y){h.g?h.g.add(y):h.h=y}function sr(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Ju.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return U(h.i)}function Ld(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,I=0;I<E;I++)y.push(h[I]);return y}y=[],E=0;for(I in h)y[E++]=h[I];return y}function sg(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const I in h)y[E++]=I;return y}}}function xa(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=sg(h),I=Ld(h),F=I.length,Y=0;Y<F;Y++)y.call(void 0,I[Y],E&&E[Y],h)}var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yo(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),F=null;if(0<=I){var Y=h[E].substring(0,I);F=h[E].substring(I+1)}else Y=h[E];y(Y,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ti(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ti){this.h=h.h,Es(this,h.j),this.o=h.o,this.g=h.g,Da(this,h.s),this.l=h.l;var y=h.i,E=new zr;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),Wo(this,E),this.m=h.m}else h&&(y=String(h).match(ec))?(this.h=!1,Es(this,y[1]||"",!0),this.o=Ts(y[2]||""),this.g=Ts(y[3]||"",!0),Da(this,y[4]),this.l=Ts(y[5]||"",!0),Wo(this,y[6]||"",!0),this.m=Ts(y[7]||"")):(this.h=!1,this.i=new zr(null,this.h))}Ti.prototype.toString=function(){var h=[],y=this.j;y&&h.push(ar(y,tc,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(ar(y,tc,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ar(E,E.charAt(0)=="/"?nc:Ud,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ar(E,lg)),h.join("")};function At(h){return new Ti(h)}function Es(h,y,E){h.j=E?Ts(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function Da(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Wo(h,y,E){y instanceof zr?(h.i=y,rc(h.i,h.h)):(E||(y=ar(y,og)),h.i=new zr(y,h.h))}function Qe(h,y,E){h.i.set(y,E)}function Pa(h){return Qe(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Ts(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ar(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,ag),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function ag(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var tc=/[#\/\?@]/g,Ud=/[#\?:]/g,nc=/[#\?]/g,og=/[#\?@]/g,lg=/#/g;function zr(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function or(h){h.g||(h.g=new Map,h.h=0,h.i&&Yo(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}n=zr.prototype,n.add=function(h,y){or(this),this.i=null,h=Ii(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function Xo(h,y){or(h),y=Ii(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function wi(h,y){return or(h),y=Ii(h,y),h.g.has(y)}n.forEach=function(h,y){or(this),this.g.forEach(function(E,I){E.forEach(function(F){h.call(y,F,I,this)},this)},this)},n.na=function(){or(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let I=0;I<y.length;I++){const F=h[I];for(let Y=0;Y<F.length;Y++)E.push(y[I])}return E},n.V=function(h){or(this);let y=[];if(typeof h=="string")wi(this,h)&&(y=y.concat(this.g.get(Ii(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},n.set=function(h,y){return or(this),this.i=null,h=Ii(this,h),wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},n.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function bi(h,y,E){Xo(h,y),0<E.length&&(h.i=null,h.g.set(Ii(h,y),U(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var I=y[E];const Y=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var F=Y;ue[I]!==""&&(F+="="+encodeURIComponent(String(ue[I]))),h.push(F)}}return this.i=h.join("&")};function Ii(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function rc(h,y){y&&!h.j&&(or(h),h.i=null,h.g.forEach(function(E,I){var F=I.toLowerCase();I!=F&&(Xo(this,I),bi(this,F,E))},h)),h.j=y}function zd(h,y){const E=new fs;if(d.Image){const I=new Image;I.onload=S(lr,E,"TestLoadImage: loaded",!0,y,I),I.onerror=S(lr,E,"TestLoadImage: error",!1,y,I),I.onabort=S(lr,E,"TestLoadImage: abort",!1,y,I),I.ontimeout=S(lr,E,"TestLoadImage: timeout",!1,y,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else y(!1)}function Na(h,y){const E=new fs,I=new AbortController,F=setTimeout(()=>{I.abort(),lr(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:I.signal}).then(Y=>{clearTimeout(F),Y.ok?lr(E,"TestPingServer: ok",!0,y):lr(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),lr(E,"TestPingServer: error",!1,y)})}function lr(h,y,E,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(E)}catch{}}function Oa(){this.g=new Rn}function Br(h,y,E){const I=E||"";try{xa(h,function(F,Y){let ue=F;m(F)&&(ue=Ku(F)),y.push(I+Y+"="+encodeURIComponent(ue))})}catch(F){throw y.push(I+"type="+encodeURIComponent("_badmap")),F}}function ws(h){this.l=h.Ub||null,this.j=h.eb||!1}x(ws,Qu),ws.prototype.g=function(){return new Ai(this.l,this.j)},ws.prototype.i=function(h){return function(){return h}}({});function Ai(h,y){$t.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ai,$t),n=Ai.prototype,n.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,jr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ic(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function ic(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Fr(this):jr(this),this.readyState==3&&ic(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Fr(this))},n.Qa=function(h){this.g&&(this.response=h,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,jr(h)}n.setRequestHeader=function(h,y){this.u.append(h,y)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function jr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function sc(h){let y="";return le(h,function(E,I){y+=I,y+=":",y+=E,y+=`\r
`}),y}function nn(h,y,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=sc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Qe(h,y,E))}function Ze(h){$t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ze,$t);var Jo=/^https?$/i,ka=["POST","PUT"];n=Ze.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,y,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ra.g(),this.v=this.o?Pd(this.o):Pd(Ra),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(Y){Bd(this,Y);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)E.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Y of I.keys())E.set(Y,I.get(Y));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(Y=>Y.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ka,y,void 0))||I||F||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,ue]of E)this.g.setRequestHeader(Y,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Va(this),this.u=!0,this.g.send(h),this.u=!1}catch(Y){Bd(this,Y)}};function Bd(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,Zo(h),qr(h)}function Zo(h){h.A||(h.A=!0,en(h,"complete"),en(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,en(this,"complete"),en(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?el(this):this.bb())},n.bb=function(){el(this)};function el(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ur(h)!=4||h.Z()!=2)){if(h.u&&ur(h)==4)Dd(h.Ea,0,h);else if(en(h,"readystatechange"),ur(h)==4){h.h=!1;try{const ue=h.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var I;if(I=ue===0){var F=String(h.D).match(ec)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!Jo.test(F?F.toLowerCase():"")}E=I}if(E)en(h,"complete"),en(h,"success");else{h.m=6;try{var Y=2<ur(h)?h.g.statusText:""}catch{Y=""}h.l=Y+" ["+h.Z()+"]",Zo(h)}}finally{qr(h)}}}}function qr(h,y){if(h.g){Va(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||en(h,"ready");try{E.onreadystatechange=I}catch{}}}function Va(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ur(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Vr(y)}};function Fd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ug(h){const y={};h=(h.g&&2<=ur(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(X(h[I]))continue;var E=V(h[I]);const F=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Y=y[F]||[];y[F]=Y,Y.push(E)}D(y,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ma(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function tl(h){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ma("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ma("baseRetryDelayMs",5e3,h),this.cb=Ma("retryDelaySeedMs",1e4,h),this.Wa=Ma("forwardChannelMaxRetries",2,h),this.wa=Ma("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Ju(h&&h.concurrentRequestLimit),this.Da=new Oa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=tl.prototype,n.la=8,n.G=1,n.connect=function(h,y,E,I){Ot(0),this.W=h,this.H=y||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Qd(this,null,this.W),rl(this)};function ac(h){if(jd(h),h.G==3){var y=h.U++,E=At(h.I);if(Qe(E,"SID",h.K),Qe(E,"RID",y),Qe(E,"TYPE","terminate"),La(h,E),y=new Ur(h,h.j,y),y.L=2,y.v=Pa(At(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=y.v,E=!0),E||(y.g=Yd(y.j,null),y.g.ea(y.v)),y.F=Date.now(),yt(y)}Kd(h)}function nl(h){h.g&&(Ua(h),h.g.cancel(),h.g=null)}function jd(h){nl(h),h.u&&(d.clearTimeout(h.u),h.u=null),il(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function rl(h){if(!Zu(h.h)&&!h.s){h.s=!0;var y=h.Ga;Ie||O(),we||(Ie(),we=!0),Oe.add(y,h),h.B=0}}function cg(h,y){return Md(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=ds(w(h.Ga,h,y),uc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new Ur(this,this.j,h);let Y=this.o;if(this.S&&(Y?(Y=R(Y),P(Y,this.S)):Y=this.S),this.m!==null||this.O||(F.H=Y,Y=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(y+=I,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=qd(this,F,y),E=At(this.I),Qe(E,"RID",h),Qe(E,"CVER",22),this.D&&Qe(E,"X-HTTP-Session-Id",this.D),La(this,E),Y&&(this.O?y="headers="+encodeURIComponent(String(sc(Y)))+"&"+y:this.m&&nn(E,this.m,Y)),vs(this.h,F),this.Ua&&Qe(E,"TYPE","init"),this.P?(Qe(E,"$req",y),Qe(E,"SID","null"),F.T=!0,Ar(F,E,null)):Ar(F,E,y),this.G=2}}else this.G==3&&(h?oc(this,h):this.i.length==0||Zu(this.h)||oc(this))};function oc(h,y){var E;y?E=y.l:E=h.U++;const I=At(h.I);Qe(I,"SID",h.K),Qe(I,"RID",E),Qe(I,"AID",h.T),La(h,I),h.m&&h.o&&nn(I,h.m,h.o),E=new Ur(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=qd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vs(h.h,E),Ar(E,I,y)}function La(h,y){h.H&&le(h.H,function(E,I){Qe(y,I,E)}),h.l&&xa({},function(E,I){Qe(y,I,E)})}function qd(h,y,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var F=h.i;let Y=-1;for(;;){const ue=["count="+E];Y==-1?0<E?(Y=F[0].g,ue.push("ofs="+Y)):Y=0:ue.push("ofs="+Y);let qe=!0;for(let Kt=0;Kt<E;Kt++){let He=F[Kt].g;const rn=F[Kt].map;if(He-=Y,0>He)Y=Math.max(0,F[Kt].g-100),qe=!1;else try{Br(rn,ue,"req"+He+"_")}catch{I&&I(rn)}}if(qe){I=ue.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,I}function Hd(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;Ie||O(),we||(Ie(),we=!0),Oe.add(y,h),h.v=0}}function lc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=ds(w(h.Fa,h),uc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,$d(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=ds(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),nl(this),$d(this))};function Ua(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function $d(h){h.g=new Ur(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=At(h.qa);Qe(y,"RID","rpc"),Qe(y,"SID",h.K),Qe(y,"AID",h.T),Qe(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&Qe(y,"TO",h.ja),Qe(y,"TYPE","xmlhttp"),La(h,y),h.m&&h.o&&nn(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Pa(At(y)),E.m=null,E.P=!0,Ei(E,h)}n.Za=function(){this.C!=null&&(this.C=null,nl(this),lc(this),Ot(19))};function il(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Gd(h,y){var E=null;if(h.g==y){il(h),Ua(h),h.g=null;var I=2}else if(_s(h.h,y))E=y.D,sr(h.h,y),I=1;else return;if(h.G!=0){if(y.o)if(I==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var F=h.B;I=$o(),en(I,new Od(I,E)),rl(h)}else Hd(h);else if(F=y.s,F==3||F==0&&0<y.X||!(I==1&&cg(h,y)||I==2&&lc(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),F){case 1:Si(h,5);break;case 4:Si(h,10);break;case 3:Si(h,6);break;default:Si(h,2)}}}function uc(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function Si(h,y){if(h.j.info("Error code "+y),y==2){var E=w(h.fb,h),I=h.Xa;const F=!I;I=new Ti(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Es(I,"https"),Pa(I),F?zd(I.toString(),E):Na(I.toString(),E)}else Ot(2);h.G=0,h.l&&h.l.sa(y),Kd(h),jd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Kd(h){if(h.G=0,h.ka=[],h.l){const y=Cn(h.h);(y.length!=0||h.i.length!=0)&&(M(h.ka,y),M(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function Qd(h,y,E){var I=E instanceof Ti?At(E):new Ti(E);if(I.g!="")y&&(I.g=y+"."+I.g),Da(I,I.s);else{var F=d.location;I=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;var Y=new Ti(null);I&&Es(Y,I),y&&(Y.g=y),F&&Da(Y,F),E&&(Y.l=E),I=Y}return E=h.D,y=h.ya,E&&y&&Qe(I,E,y),Qe(I,"VER",h.la),La(h,I),I}function Yd(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new Ze(new ws({eb:E})):new Ze(h.pa),y.Ha(h.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wd(){}n=Wd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sl(){}sl.prototype.g=function(h,y){return new xn(h,y)};function xn(h,y){$t.call(this),this.g=new tl(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!X(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!X(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new Hr(this)}x(xn,$t),xn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xn.prototype.close=function(){ac(this.g)},xn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Ku(h),h=E);y.i.push(new ig(y.Ya++,h)),y.G==3&&rl(y)},xn.prototype.N=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,xn.aa.N.call(this)};function Xd(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}x(Xd,us);function Jd(){Ir.call(this),this.status=1}x(Jd,Ir);function Hr(h){this.g=h}x(Hr,Wd),Hr.prototype.ua=function(){en(this.g,"a")},Hr.prototype.ta=function(h){en(this.g,new Xd(h))},Hr.prototype.sa=function(h){en(this.g,new Jd)},Hr.prototype.ra=function(){en(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,xn.prototype.send=xn.prototype.o,xn.prototype.open=xn.prototype.m,xn.prototype.close=xn.prototype.close,R1=function(){return new sl},S1=function(){return $o()},A1=ir,J_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gt.NO_ERROR=0,Gt.TIMEOUT=8,Gt.HTTP_ERROR=6,Ep=Gt,vi.COMPLETE="complete",I1=vi,Nd.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",$t.prototype.listen=$t.prototype.K,dh=Nd,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,b1=Ze}).apply(typeof tp<"u"?tp:typeof self<"u"?self:typeof window<"u"?window:{});const zI="@firebase/firestore",BI="4.7.12";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu="11.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new ym("@firebase/firestore");function Bl(){return ua.logLevel}function RU(n){ua.setLogLevel(n)}function ie(n,...e){if(ua.logLevel<=ze.DEBUG){const t=e.map(yE);ua.debug(`Firestore (${Mu}): ${n}`,...t)}}function Vt(n,...e){if(ua.logLevel<=ze.ERROR){const t=e.map(yE);ua.error(`Firestore (${Mu}): ${n}`,...t)}}function di(n,...e){if(ua.logLevel<=ze.WARN){const t=e.map(yE);ua.warn(`Firestore (${Mu}): ${n}`,...t)}}function yE(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,C1(n,r,t)}function C1(n,e,t){let r=`FIRESTORE (${Mu}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Vt(r),new Error(r)}function ve(n,e,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,n||C1(e,a,r)}function CU(n,e){n||me(57014,e)}function de(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class DU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class PU{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ve(this.o===void 0,42304);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let o=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _n,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=o;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _n)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new x1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class NU{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class OU{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new NU(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kU{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ve(this.o===void 0,3512);const r=o=>{o.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,ie("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?a(o):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new FI(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ve(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new FI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function VU(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function _E(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=VU(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Re(n,e){return n<e?-1:n>e?1:0}function Z_(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Re(r,a);{const o=_E(),u=MU(o.encode(jI(n,t)),o.encode(jI(e,t)));return u!==0?u:Re(r,a)}}t+=r>65535?2:1}return Re(n.length,e.length)}function jI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function MU(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function uu(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function P1(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=-62135596800,HI=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*HI);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qI)throw new ne(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/HI}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-qI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new gt(0,0))}static max(){return new Te(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="__name__";class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&me(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&me(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Xr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Re(e.length,t.length)}static compareSegments(e,t){const r=Xr.isNumericId(e),a=Xr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Xr.extractNumericId(e).compare(Xr.extractNumericId(t)):Z_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return na.fromString(e.substring(4,e.length-2))}}class Be extends Xr{construct(e,t,r){return new Be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new Be(t)}static emptyPath(){return new Be([])}}const LU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Xr{construct(e,t,r){return new pt(e,t,r)}static isValidIdentifier(e){return LU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$I}static keyField(){return new pt([$I])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new ne(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new ne(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ne(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(o(),a++)}if(o(),u)throw new ne(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(t)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Be.fromString(e))}static fromName(e){return new ce(Be.fromString(e).popFirst(5))}static empty(){return new ce(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Be(e.slice()))}}/**
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
 */const cu=-1;class qp{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function ev(n){return n.fields.find(e=>e.kind===2)}function so(n){return n.fields.filter(e=>e.kind!==2)}qp.UNKNOWN_ID=-1;class Tp{constructor(e,t){this.fieldPath=e,this.kind=t}}class Bh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Bh(0,nr.min())}}function N1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Te.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new nr(a,ce.empty(),e)}function O1(n){return new nr(n.readTime,n.key,cu)}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(Te.min(),ce.empty(),cu)}static max(){return new nr(Te.max(),ce.empty(),cu)}}function vE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
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
 */const k1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==k1)throw n;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let a=0,o=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++o,u&&o===a&&t()},p=>r(p))}),u=!0,o===a&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(a=>a?j.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new j((r,a)=>{const o=e.length,u=new Array(o);let d=0;for(let p=0;p<o;p++){const m=p;t(e[m]).next(_=>{u[m]=_,++d,d===o&&r(u)},_=>a(_))}})}static doWhile(e,t){return new j((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="SimpleDb";class xm{static open(e,t,r,a){try{return new xm(t,e.transaction(a,r))}catch(o){throw new wh(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new _n,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new wh(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const a=EE(r.target.error);this.S.reject(new wh(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(ie(Zn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new zU(t)}}class oi{static delete(e){return ie(Zn,"Removing database:",e),oo(qv().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Oh())return!1;if(oi.F())return!0;const e=wt(),t=oi.M(e),r=0<t&&t<10,a=M1(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,oi.M(wt())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(ie(Zn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new wh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new ne(Q.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new ne(Q.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new wh(e,u))},a.onupgradeneeded=o=>{ie(Zn,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;if(this.L!==null&&this.L!==o.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${o.oldVersion}, event.newVersion=${o.newVersion}, db.version=${u.version}`);this.B.q(u,a.transaction,o.oldVersion,this.version).next(()=>{ie(Zn,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.k(e);const d=xm.open(this.db,e,o?"readonly":"readwrite",r),p=a(d).next(m=>(d.v(),m)).catch(m=>(d.abort(m),j.reject(m))).toPromise();return p.catch(()=>{}),await d.D,p}catch(d){const p=d,m=p.name!=="FirebaseError"&&u<3;if(ie(Zn,"Transaction failed with error:",p.message,"Retrying:",m),this.close(),!m)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function M1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class UU{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return oo(this.K.delete())}}class wh extends ne{constructor(e,t){super(Q.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ta(n){return n.name==="IndexedDbTransactionError"}class zU{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(ie(Zn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(ie(Zn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),oo(r)}add(e){return ie(Zn,"ADD",this.store.name,e,e),oo(this.store.add(e))}get(e){return oo(this.store.get(e)).next(t=>(t===void 0&&(t=null),ie(Zn,"GET",this.store.name,e,t),t))}delete(e){return ie(Zn,"DELETE",this.store.name,e),oo(this.store.delete(e))}count(){return ie(Zn,"COUNT",this.store.name),oo(this.store.count())}J(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new j((u,d)=>{o.onerror=p=>{d(p.target.error)},o.onsuccess=p=>{u(p.target.result)}})}{const o=this.cursor(r),u=[];return this.Y(o,(d,p)=>{u.push(p)}).next(()=>u)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new j((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}X(e,t){ie(Zn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.ee=!1;const a=this.cursor(r);return this.Y(a,(o,u,d)=>d.delete())}te(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.Y(a,t)}ne(e){const t=this.cursor({});return new j((r,a)=>{t.onerror=o=>{const u=EE(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}Y(e,t){const r=[];return new j((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const p=new UU(d),m=t(d.primaryKey,d.value,p);if(m instanceof j){const _=m.catch(v=>(p.done(),j.reject(v)));r.push(_)}p.isDone?a():p.j===null?d.continue():d.continue(p.j)}}).next(()=>j.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.ee?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function oo(n){return new j((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=EE(r.target.error);t(a)}})}let GI=!1;function EE(n){const e=oi.M(wt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new ne("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return GI||(GI=!0,setTimeout(()=>{throw r},0)),r}}return n}const bh="IndexBackfiller";class BU{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){ie(bh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();ie(bh,`Documents written: ${t}`)}catch(t){Ta(t)?ie(bh,"Ignoring IndexedDB error during index backfill: ",t):await Ea(t)}await this.ie(6e4)})}}class FU{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const r=new Set;let a=t,o=!0;return j.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return ie(bh,`Processing collection: ${u}`),this._e(e,u,a).next(d=>{a-=d,r.add(u)});o=!1})).next(()=>t-a)}_e(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.ae(a,o)).next(d=>(ie(bh,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}ae(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=O1(o);vE(u,r)>0&&(r=u)}),new nr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class jn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}jn.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=-1;function md(n){return n==null}function Fh(n){return n===0&&1/n==-1/0}function L1(n){return typeof n=="number"&&Number.isInteger(n)&&!Fh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=KI(e)),e=jU(n.get(t),e);return KI(e)}function jU(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case Hp:t+="";break;default:t+=o}}return t}function KI(n){return n+Hp+""}function si(n){const e=n.length;if(ve(e>=2,64408,{path:n}),e===2)return ve(n.charAt(0)===Hp&&n.charAt(1)==="",56145,{path:n}),Be.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(Hp,o);switch((u<0||u>t)&&me(50515,{path:n}),n.charAt(u+1)){case"":const d=n.substring(o,u);let p;a.length===0?p=d:(a+=d,p=a,a=""),r.push(p);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:me(61167,{path:n})}o=u+2}return new Be(r)}/**
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
 */const ao="remoteDocuments",gd="owner",kl="owner",jh="mutationQueues",qU="userId",Dr="mutations",QI="batchId",mo="userMutationsIndex",YI=["userId","batchId"];/**
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
 */function wp(n,e){return[n,An(e)]}function U1(n,e,t){return[n,An(e),t]}const HU={},hu="documentMutations",$p="remoteDocumentsV14",$U=["prefixPath","collectionGroup","readTime","documentId"],bp="documentKeyIndex",GU=["prefixPath","collectionGroup","documentId"],z1="collectionGroupIndex",KU=["collectionGroup","readTime","prefixPath","documentId"],qh="remoteDocumentGlobal",tv="remoteDocumentGlobalKey",du="targets",B1="queryTargetsIndex",QU=["canonicalId","targetId"],fu="targetDocuments",YU=["targetId","path"],TE="documentTargetsIndex",WU=["path","targetId"],Gp="targetGlobalKey",wo="targetGlobal",Hh="collectionParents",XU=["collectionId","parent"],pu="clientMetadata",JU="clientId",Dm="bundles",ZU="bundleId",Pm="namedQueries",e6="name",wE="indexConfiguration",t6="indexId",nv="collectionGroupIndex",n6="collectionGroup",Kp="indexState",r6=["indexId","uid"],F1="sequenceNumberIndex",i6=["uid","sequenceNumber"],Qp="indexEntries",s6=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],j1="documentKeyIndex",a6=["indexId","uid","orderedDocumentKey"],Nm="documentOverlays",o6=["userId","collectionPath","documentId"],rv="collectionPathOverlayIndex",l6=["userId","collectionPath","largestBatchId"],q1="collectionGroupOverlayIndex",u6=["userId","collectionGroup","largestBatchId"],bE="globals",c6="name",H1=[jh,Dr,hu,ao,du,gd,wo,fu,pu,qh,Hh,Dm,Pm],h6=[...H1,Nm],$1=[jh,Dr,hu,$p,du,gd,wo,fu,pu,qh,Hh,Dm,Pm,Nm],G1=$1,IE=[...G1,wE,Kp,Qp],d6=IE,f6=[...IE,bE];/**
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
 */class iv extends V1{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Jt(n,e){const t=de(n);return oi.N(t.he,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function K1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new np(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new np(this.root,e,this.comparator,!1)}getReverseIterator(){return new np(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new np(this.root,e,this.comparator,!0)}}class np{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??gn.RED,this.left=a??gn.EMPTY,this.right=o??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new gn(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,t,r,a,o){return this}insert(e,t,r){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new XI(this.data.getIterator())}getIteratorFrom(e){return new XI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class XI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vl(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class qn{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new qn([])}unionWith(e){let t=new nt(pt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return uu(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Q1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function p6(){return typeof atob<"u"}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Q1("Invalid base64 string: "+o):o}}(e);return new xt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const m6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(n){if(ve(!!n,39018),typeof n=="string"){let e=0;const t=m6.exec(n);if(ve(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ji(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
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
 */const Y1="server_timestamp",W1="__type__",X1="__previous_value__",J1="__local_write_time__";function Om(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[W1])===null||t===void 0?void 0:t.stringValue)===Y1}function km(n){const e=n.mapValue.fields[X1];return Om(e)?km(e):e}function $h(n){const e=Xi(n.mapValue.fields[J1].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e,t,r,a,o,u,d,p,m,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m,this.isUsingEmulator=_}}const sv="(default)";class ca{constructor(e,t){this.projectId=e,this.database=t||sv}static empty(){return new ca("","")}get isDefaultDatabase(){return this.database===sv}isEqual(e){return e instanceof ca&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const AE="__type__",Z1="__max__",Xs={mapValue:{fields:{__type__:{stringValue:Z1}}}},SE="__vector__",mu="value",Ip={nullValue:"NULL_VALUE"};function ha(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Om(n)?4:eC(n)?9007199254740991:Vm(n)?10:11:me(28295,{value:n})}function fi(n,e){if(n===e)return!0;const t=ha(n);if(t!==ha(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $h(n).isEqual($h(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Xi(a.timestampValue),d=Xi(o.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Ji(a.bytesValue).isEqual(Ji(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return dt(a.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return dt(a.integerValue)===dt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=dt(a.doubleValue),d=dt(o.doubleValue);return u===d?Fh(u)===Fh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return uu(n.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},d=o.mapValue.fields||{};if(WI(u)!==WI(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!fi(u[p],d[p])))return!1;return!0}(n,e);default:return me(52216,{left:n})}}function Gh(n,e){return(n.values||[]).find(t=>fi(t,e))!==void 0}function da(n,e){if(n===e)return 0;const t=ha(n),r=ha(e);if(t!==r)return Re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return function(o,u){const d=dt(o.integerValue||o.doubleValue),p=dt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return JI(n.timestampValue,e.timestampValue);case 4:return JI($h(n),$h(e));case 5:return Z_(n.stringValue,e.stringValue);case 6:return function(o,u){const d=Ji(o),p=Ji(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const d=o.split("/"),p=u.split("/");for(let m=0;m<d.length&&m<p.length;m++){const _=Re(d[m],p[m]);if(_!==0)return _}return Re(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const d=Re(dt(o.latitude),dt(u.latitude));return d!==0?d:Re(dt(o.longitude),dt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ZI(n.arrayValue,e.arrayValue);case 10:return function(o,u){var d,p,m,_;const v=o.fields||{},w=u.fields||{},S=(d=v[mu])===null||d===void 0?void 0:d.arrayValue,x=(p=w[mu])===null||p===void 0?void 0:p.arrayValue,U=Re(((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0,((_=x==null?void 0:x.values)===null||_===void 0?void 0:_.length)||0);return U!==0?U:ZI(S,x)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Xs.mapValue&&u===Xs.mapValue)return 0;if(o===Xs.mapValue)return 1;if(u===Xs.mapValue)return-1;const d=o.fields||{},p=Object.keys(d),m=u.fields||{},_=Object.keys(m);p.sort(),_.sort();for(let v=0;v<p.length&&v<_.length;++v){const w=Z_(p[v],_[v]);if(w!==0)return w;const S=da(d[p[v]],m[_[v]]);if(S!==0)return S}return Re(p.length,_.length)}(n.mapValue,e.mapValue);default:throw me(23264,{Pe:t})}}function JI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=Xi(n),r=Xi(e),a=Re(t.seconds,r.seconds);return a!==0?a:Re(t.nanos,r.nanos)}function ZI(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=da(t[a],r[a]);if(o)return o}return Re(t.length,r.length)}function gu(n){return av(n)}function av(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ji(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=av(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${av(t.fields[u])}`;return a+"}"}(n.mapValue):me(61005,{value:n})}function Ap(n){switch(ha(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=km(n);return e?16+Ap(e):16;case 5:return 2*n.stringValue.length;case 6:return Ji(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+Ap(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return wa(r.fields,(o,u)=>{a+=o.length+Ap(u)}),a}(n.mapValue);default:throw me(13486,{value:n})}}function So(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ov(n){return!!n&&"integerValue"in n}function Kh(n){return!!n&&"arrayValue"in n}function eA(n){return!!n&&"nullValue"in n}function tA(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sp(n){return!!n&&"mapValue"in n}function Vm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[AE])===null||t===void 0?void 0:t.stringValue)===SE}function Ih(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return wa(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ih(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ih(n.arrayValue.values[t]);return e}return Object.assign({},n)}function eC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Z1}const tC={mapValue:{fields:{[AE]:{stringValue:SE},[mu]:{arrayValue:{}}}}};function y6(n){return"nullValue"in n?Ip:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?So(ca.empty(),ce.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Vm(n)?tC:{mapValue:{}}:me(35942,{value:n})}function _6(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?So(ca.empty(),ce.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?tC:"mapValue"in n?Vm(n)?{mapValue:{}}:Xs:me(61959,{value:n})}function nA(n,e){const t=da(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function rA(n,e){const t=da(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Sp(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ih(t)}setAll(e){let t=pt.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=Ih(u):a.push(d.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());Sp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Sp(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){wa(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new yn(Ih(this.value))}}function nC(n){const e=[];return wa(n.fields,(t,r)=>{const a=new pt([t]);if(Sp(r)){const o=nC(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r,a,o,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,Te.min(),Te.min(),Te.min(),yn.empty(),0)}static newFoundDocument(e,t,r,a){return new ht(e,1,t,Te.min(),r,a,0)}static newNoDocument(e,t){return new ht(e,2,t,Te.min(),Te.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Te.min(),Te.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fa{constructor(e,t){this.position=e,this.inclusive=t}}function iA(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=da(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function sA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Qh{constructor(e,t="asc"){this.field=e,this.dir=t}}function v6(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class rC{}class Fe extends rC{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new E6(e,t,r):t==="array-contains"?new b6(e,r):t==="in"?new uC(e,r):t==="not-in"?new I6(e,r):t==="array-contains-any"?new A6(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new T6(e,r):new w6(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(da(t,this.value)):t!==null&&ha(this.value)===ha(t)&&this.matchesComparison(da(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends rC{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new tt(e,t)}matches(e){return yu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function yu(n){return n.op==="and"}function lv(n){return n.op==="or"}function RE(n){return iC(n)&&yu(n)}function iC(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function uv(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+gu(n.value);if(RE(n))return n.filters.map(e=>uv(e)).join(",");{const e=n.filters.map(t=>uv(t)).join(",");return`${n.op}(${e})`}}function sC(n,e){return n instanceof Fe?function(r,a){return a instanceof Fe&&r.op===a.op&&r.field.isEqual(a.field)&&fi(r.value,a.value)}(n,e):n instanceof tt?function(r,a){return a instanceof tt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,d)=>o&&sC(u,a.filters[d]),!0):!1}(n,e):void me(19439)}function aC(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function oC(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${gu(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(oC).join(" ,")+"}"}(n):"Filter"}class E6 extends Fe{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class T6 extends Fe{constructor(e,t){super(e,"in",t),this.keys=lC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class w6 extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=lC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function lC(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ce.fromName(r.referenceValue))}class b6 extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kh(t)&&Gh(t.arrayValue,this.value)}}class uC extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gh(this.value.arrayValue,t)}}class I6 extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Gh(this.value.arrayValue,t)}}class A6 extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Gh(this.value.arrayValue,r))}}/**
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
 */class S6{constructor(e,t=null,r=[],a=[],o=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=d,this.Ie=null}}function cv(n,e=null,t=[],r=[],a=null,o=null,u=null){return new S6(n,e,t,r,a,o,u)}function Ro(n){const e=de(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>uv(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),md(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>gu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>gu(r)).join(",")),e.Ie=t}return e.Ie}function yd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!v6(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!sC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sA(n.startAt,e.startAt)&&sA(n.endAt,e.endAt)}function Yp(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Wp(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function aA(n,e,t){let r=Ip,a=!0;for(const o of Wp(n,e)){let u=Ip,d=!0;switch(o.op){case"<":case"<=":u=y6(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,d=!1;break;case"!=":case"not-in":u=Ip}nA({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];nA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function oA(n,e,t){let r=Xs,a=!0;for(const o of Wp(n,e)){let u=Xs,d=!0;switch(o.op){case">=":case">":u=_6(o.value),d=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,d=!1;break;case"!=":case"not-in":u=Xs}rA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];rA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t=null,r=[],a=[],o=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function cC(n,e,t,r,a,o,u,d){return new ns(n,e,t,r,a,o,u,d)}function Lu(n){return new ns(n)}function lA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function CE(n){return n.collectionGroup!==null}function Jl(n){const e=de(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new nt(pt.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Qh(o,r))}),t.has(pt.keyField().canonicalString())||e.Ee.push(new Qh(pt.keyField(),r))}return e.Ee}function Vn(n){const e=de(n);return e.de||(e.de=R6(e,Jl(n))),e.de}function R6(n,e){if(n.limitType==="F")return cv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Qh(a.field,o)});const t=n.endAt?new fa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fa(n.startAt.position,n.startAt.inclusive):null;return cv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hv(n,e){const t=n.filters.concat([e]);return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xp(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _d(n,e){return yd(Vn(n),Vn(e))&&n.limitType===e.limitType}function hC(n){return`${Ro(Vn(n))}|lt:${n.limitType}`}function Fl(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>oC(a)).join(", ")}]`),md(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>gu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>gu(a)).join(",")),`Target(${r})`}(Vn(n))}; limitType=${n.limitType})`}function vd(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ce.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of Jl(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,p){const m=iA(u,d,p);return u.inclusive?m<=0:m<0}(r.startAt,Jl(r),a)||r.endAt&&!function(u,d,p){const m=iA(u,d,p);return u.inclusive?m>=0:m>0}(r.endAt,Jl(r),a))}(n,e)}function dC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fC(n){return(e,t)=>{let r=!1;for(const a of Jl(n)){const o=C6(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function C6(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):function(o,u,d){const p=u.data.field(o),m=d.data.field(o);return p!==null&&m!==null?da(p,m):me(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){wa(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return K1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x6=new lt(ce.comparator);function Hn(){return x6}const pC=new lt(ce.comparator);function fh(...n){let e=pC;for(const t of n)e=e.insert(t.key,t);return e}function mC(n){let e=pC;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ai(){return Ah()}function gC(){return Ah()}function Ah(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const D6=new lt(ce.comparator),P6=new nt(ce.comparator);function Pe(...n){let e=P6;for(const t of n)e=e.add(t);return e}const N6=new nt(Re);function xE(){return N6}/**
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
 */function DE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fh(e)?"-0":e}}function yC(n){return{integerValue:""+n}}function _C(n,e){return L1(e)?yC(e):DE(n,e)}/**
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
 */class Mm{constructor(){this._=void 0}}function O6(n,e,t){return n instanceof _u?function(a,o){const u={fields:{[W1]:{stringValue:Y1},[J1]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&Om(o)&&(o=km(o)),o&&(u.fields[X1]=o),{mapValue:u}}(t,e):n instanceof Co?EC(n,e):n instanceof xo?TC(n,e):function(a,o){const u=vC(a,o),d=uA(u)+uA(a.Re);return ov(u)&&ov(a.Re)?yC(d):DE(a.serializer,d)}(n,e)}function k6(n,e,t){return n instanceof Co?EC(n,e):n instanceof xo?TC(n,e):t}function vC(n,e){return n instanceof vu?function(r){return ov(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class _u extends Mm{}class Co extends Mm{constructor(e){super(),this.elements=e}}function EC(n,e){const t=wC(e);for(const r of n.elements)t.some(a=>fi(a,r))||t.push(r);return{arrayValue:{values:t}}}class xo extends Mm{constructor(e){super(),this.elements=e}}function TC(n,e){let t=wC(e);for(const r of n.elements)t=t.filter(a=>!fi(a,r));return{arrayValue:{values:t}}}class vu extends Mm{constructor(e,t){super(),this.serializer=e,this.Re=t}}function uA(n){return dt(n.integerValue||n.doubleValue)}function wC(n){return Kh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t){this.field=e,this.transform=t}}function V6(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof Co&&a instanceof Co||r instanceof xo&&a instanceof xo?uu(r.elements,a.elements,fi):r instanceof vu&&a instanceof vu?fi(r.Re,a.Re):r instanceof _u&&a instanceof _u}(n.transform,e.transform)}class M6{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rp(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Lm{}function bC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zu(n.key,mt.none()):new Uu(n.key,n.data,mt.none());{const t=n.data,r=yn.empty();let a=new nt(pt.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new is(n.key,r,new qn(a.toArray()),mt.none())}}function L6(n,e,t){n instanceof Uu?function(a,o,u){const d=a.value.clone(),p=hA(a.fieldTransforms,o,u.transformResults);d.setAll(p),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof is?function(a,o,u){if(!Rp(a.precondition,o))return void o.convertToUnknownDocument(u.version);const d=hA(a.fieldTransforms,o,u.transformResults),p=o.data;p.setAll(IC(a)),p.setAll(d),o.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Sh(n,e,t,r){return n instanceof Uu?function(o,u,d,p){if(!Rp(o.precondition,u))return d;const m=o.value.clone(),_=dA(o.fieldTransforms,p,u);return m.setAll(_),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof is?function(o,u,d,p){if(!Rp(o.precondition,u))return d;const m=dA(o.fieldTransforms,p,u),_=u.data;return _.setAll(IC(o)),_.setAll(m),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,d){return Rp(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function U6(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=vC(r.transform,a||null);o!=null&&(t===null&&(t=yn.empty()),t.set(r.field,o))}return t||null}function cA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&uu(r,a,(o,u)=>V6(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Uu extends Lm{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class is extends Lm{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function IC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function hA(n,e,t){const r=new Map;ve(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,d=e.data.field(o.field);r.set(o.field,k6(u,d,t[a]))}return r}function dA(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,O6(o,u,e))}return r}class zu extends Lm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PE extends Lm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&L6(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gC();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let d=this.applyToLocalView(u,o.mutatedFields);d=t.has(a.key)?null:d;const p=bC(u,d);p!==null&&r.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&uu(this.mutations,e.mutations,(t,r)=>cA(t,r))&&uu(this.baseMutations,e.baseMutations,(t,r)=>cA(t,r))}}class OE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ve(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let a=function(){return D6}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new OE(e,t,r,a)}}/**
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
 */let kE=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z6{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt,Ge;function AC(n){switch(n){case Q.OK:return me(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return me(15467,{code:n})}}function SC(n){if(n===void 0)return Vt("GRPC error has no .code"),Q.UNKNOWN;switch(n){case jt.OK:return Q.OK;case jt.CANCELLED:return Q.CANCELLED;case jt.UNKNOWN:return Q.UNKNOWN;case jt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case jt.INTERNAL:return Q.INTERNAL;case jt.UNAVAILABLE:return Q.UNAVAILABLE;case jt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case jt.NOT_FOUND:return Q.NOT_FOUND;case jt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case jt.ABORTED:return Q.ABORTED;case jt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case jt.DATA_LOSS:return Q.DATA_LOSS;default:return me(39323,{code:n})}}(Ge=jt||(jt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const B6=new na([4294967295,4294967295],0);function fA(n){const e=_E().encode(n),t=new w1;return t.update(e),new Uint8Array(t.digest())}function pA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new na([t,r],0),new na([a,o],0)]}class VE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ph(`Invalid padding: ${t}`);if(r<0)throw new ph(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ph(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ph(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=na.fromNumber(this.pe)}we(e,t,r){let a=e.add(t.multiply(na.fromNumber(r)));return a.compare(B6)===1&&(a=new na([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=fA(e),[r,a]=pA(t);for(let o=0;o<this.hashCount;o++){const u=this.we(r,a,o);if(!this.be(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new VE(o,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.pe===0)return;const t=fA(e),[r,a]=pA(t);for(let o=0;o<this.hashCount;o++){const u=this.we(r,a,o);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ph extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,wd.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Td(Te.min(),a,new lt(Re),Hn(),Pe())}}class wd{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new wd(r,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,r,a){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=a}}class RC{constructor(e,t){this.targetId=e,this.Ce=t}}class CC{constructor(e,t,r=xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class mA{constructor(){this.Fe=0,this.Me=gA(),this.xe=xt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),r=Pe();return this.Me.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:me(38017,{changeType:o})}}),new wd(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=gA()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ve(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class F6{constructor(e){this.ze=e,this.je=new Map,this.He=Hn(),this.Je=rp(),this.Ye=rp(),this.Ze=new lt(Re)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,r=e.Ce.count,a=this._t(t);if(a){const o=a.target;if(Yp(o))if(r===0){const u=new ce(o.path);this.tt(t,u,ht.newNoDocument(u,Te.min()))}else ve(r===1,20013,{expectedCount:r});else{const u=this.ut(t);if(u!==r){const d=this.ct(e),p=d?this.lt(d,e,u):1;if(p!==0){this.st(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,m)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,d;try{u=Ji(r).toUint8Array()}catch(p){if(p instanceof Q1)return di("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new VE(u,a,o)}catch(p){return di(p instanceof ph?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ze.Pt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,o,null),a++)}),a}It(e){const t=new Map;this.je.forEach((o,u)=>{const d=this._t(u);if(d){if(o.current&&Yp(d.target)){const p=new ce(d.target.path);this.Et(p).has(u)||this.dt(u,p)||this.tt(u,p,ht.newNoDocument(p,e))}o.Le&&(t.set(u,o.qe()),o.Qe())}});let r=Pe();this.Ye.forEach((o,u)=>{let d=!0;u.forEachWhile(p=>{const m=this._t(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.He.forEach((o,u)=>u.setReadTime(e));const a=new Td(e,t,this.Ze,this.He,r);return this.He=Hn(),this.Je=rp(),this.Ye=rp(),this.Ze=new lt(Re),a}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new mA,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new nt(Re),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new nt(Re),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new mA),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function rp(){return new lt(ce.comparator)}function gA(){return new lt(ce.comparator)}const j6={asc:"ASCENDING",desc:"DESCENDING"},q6={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H6={and:"AND",or:"OR"};class $6{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dv(n,e){return n.useProto3Json||md(e)?e:{value:e}}function Eu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function G6(n,e){return Eu(n,e.toTimestamp())}function Mt(n){return ve(!!n,49232),Te.fromTimestamp(function(t){const r=Xi(t);return new gt(r.seconds,r.nanos)}(n))}function ME(n,e){return fv(n,e).canonicalString()}function fv(n,e){const t=function(a){return new Be(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function DC(n){const e=Be.fromString(n);return ve(BC(e),10190,{key:e.toString()}),e}function Yh(n,e){return ME(n.databaseId,e.path)}function li(n,e){const t=DC(e);if(t.get(1)!==n.databaseId.projectId)throw new ne(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ne(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(OC(t))}function PC(n,e){return ME(n.databaseId,e)}function NC(n){const e=DC(n);return e.length===4?Be.emptyPath():OC(e)}function pv(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function OC(n){return ve(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yA(n,e,t){return{name:Yh(n,e),fields:t.value.mapValue.fields}}function kC(n,e,t){const r=li(n,e.name),a=Mt(e.updateTime),o=e.createTime?Mt(e.createTime):Te.min(),u=new yn({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(r,a,o,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function K6(n,e){return"found"in e?function(r,a){ve(!!a.found,43571),a.found.name,a.found.updateTime;const o=li(r,a.found.name),u=Mt(a.found.updateTime),d=a.found.createTime?Mt(a.found.createTime):Te.min(),p=new yn({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(o,u,d,p)}(n,e):"missing"in e?function(r,a){ve(!!a.missing,3894),ve(!!a.readTime,22933);const o=li(r,a.missing),u=Mt(a.readTime);return ht.newNoDocument(o,u)}(n,e):me(7234,{result:e})}function Q6(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:me(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(m,_){return m.useProto3Json?(ve(_===void 0||typeof _=="string",58123),xt.fromBase64String(_||"")):(ve(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),xt.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const _=m.code===void 0?Q.UNKNOWN:SC(m.code);return new ne(_,m.message||"")}(u);t=new CC(r,a,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),o=Mt(r.document.updateTime),u=r.document.createTime?Mt(r.document.createTime):Te.min(),d=new yn({mapValue:{fields:r.document.fields}}),p=ht.newFoundDocument(a,o,u,d),m=r.targetIds||[],_=r.removedTargetIds||[];t=new Cp(m,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),o=r.readTime?Mt(r.readTime):Te.min(),u=ht.newNoDocument(a,o),d=r.removedTargetIds||[];t=new Cp([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),o=r.removedTargetIds||[];t=new Cp([],o,a,null)}else{if(!("filter"in e))return me(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new z6(a,o),d=r.targetId;t=new RC(d,u)}}return t}function Wh(n,e){let t;if(e instanceof Uu)t={update:yA(n,e.key,e.value)};else if(e instanceof zu)t={delete:Yh(n,e.key)};else if(e instanceof is)t={update:yA(n,e.key,e.data),updateMask:ez(e.fieldMask)};else{if(!(e instanceof PE))return me(16599,{ft:e.type});t={verify:Yh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const d=u.transform;if(d instanceof _u)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Co)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof xo)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof vu)return{fieldPath:u.field.canonicalString(),increment:d.Re};throw me(20930,{transform:u.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:G6(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:me(27497)}(n,e.precondition)),t}function mv(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?mt.updateTime(Mt(o.updateTime)):o.exists!==void 0?mt.exists(o.exists):mt.none()}(e.currentDocument):mt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let p=null;if("setToServerValue"in d)ve(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),p=new _u;else if("appendMissingElements"in d){const _=d.appendMissingElements.values||[];p=new Co(_)}else if("removeAllFromArray"in d){const _=d.removeAllFromArray.values||[];p=new xo(_)}else"increment"in d?p=new vu(u,d.increment):me(16584,{proto:d});const m=pt.fromServerFormat(d.fieldPath);return new Ed(m,p)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),o=new yn({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(p){const m=p.fieldPaths||[];return new qn(m.map(_=>pt.fromServerFormat(_)))}(e.updateMask);return new is(a,o,u,t,r)}return new Uu(a,o,t,r)}if(e.delete){const a=li(n,e.delete);return new zu(a,t)}if(e.verify){const a=li(n,e.verify);return new PE(a,t)}return me(1463,{proto:e})}function Y6(n,e){return n&&n.length>0?(ve(e!==void 0,14353),n.map(t=>function(a,o){let u=a.updateTime?Mt(a.updateTime):Mt(o);return u.isEqual(Te.min())&&(u=Mt(o)),new M6(u,a.transformResults||[])}(t,e))):[]}function VC(n,e){return{documents:[PC(n,e.path)]}}function MC(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=PC(n,a);const o=function(m){if(m.length!==0)return zC(tt.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(_=>function(w){return{field:jl(w.field),direction:X6(w.dir)}}(_))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=dv(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:t,parent:a}}function LC(n){let e=NC(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ve(r===1,65062);const _=t.from[0];_.allDescendants?a=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(v){const w=UC(v);return w instanceof tt&&RE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(x){return new Qh(ql(x.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,md(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(v){const w=!!v.before,S=v.values||[];return new fa(S,w)}(t.startAt));let m=null;return t.endAt&&(m=function(v){const w=!v.before,S=v.values||[];return new fa(S,w)}(t.endAt)),cC(e,a,u,o,d,"F",p,m)}function W6(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function UC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ql(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=ql(t.unaryFilter.field);return Fe.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ql(t.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ql(t.unaryFilter.field);return Fe.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(ql(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>UC(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(t.compositeFilter.op))}(n):me(30097,{filter:n})}function X6(n){return j6[n]}function J6(n){return q6[n]}function Z6(n){return H6[n]}function jl(n){return{fieldPath:n.canonicalString()}}function ql(n){return pt.fromServerFormat(n.fieldPath)}function zC(n){return n instanceof Fe?function(t){if(t.op==="=="){if(tA(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NAN"}};if(eA(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tA(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NOT_NAN"}};if(eA(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jl(t.field),op:J6(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(a=>zC(a));return r.length===1?r[0]:{compositeFilter:{op:Z6(t.op),filters:r}}}(n):me(54877,{filter:n})}function ez(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function BC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r,a,o=Te.min(),u=Te.min(),d=xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new $i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.wt=e}}function tz(n,e){let t;if(e.document)t=kC(n.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ce.fromSegments(e.noDocument.path),a=Po(e.noDocument.readTime);t=ht.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return me(56709);{const r=ce.fromSegments(e.unknownDocument.path),a=Po(e.unknownDocument.version);t=ht.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new gt(a[0],a[1]);return Te.fromTimestamp(o)}(e.readTime)),t}function _A(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Jp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:Yh(o,u.key),fields:u.data.value.mapValue.fields,updateTime:Eu(o,u.version.toTimestamp()),createTime:Eu(o,u.createTime.toTimestamp())}}(n.wt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Do(e.version)};else{if(!e.isUnknownDocument())return me(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Do(e.version)}}return r}function Jp(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Do(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Po(n){const e=new gt(n.seconds,n.nanoseconds);return Te.fromTimestamp(e)}function lo(n,e){const t=(e.baseMutations||[]).map(o=>mv(n.wt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const d=e.mutations[o+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>mv(n.wt,o)),a=gt.fromMillis(e.localWriteTimeMs);return new NE(e.batchId,a,t,r)}function mh(n){const e=Po(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Po(n.lastLimboFreeSnapshotVersion):Te.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){const u=o.documents.length;return ve(u===1,1966,{count:u}),Vn(Lu(NC(o.documents[0])))}(n.query):function(o){return Vn(LC(o))}(n.query),new $i(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,xt.fromBase64String(n.resumeToken))}function jC(n,e){const t=Do(e.snapshotVersion),r=Do(e.lastLimboFreeSnapshotVersion);let a;a=Yp(e.target)?VC(n.wt,e.target):MC(n.wt,e.target).gt;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ro(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function LE(n){const e=LC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xp(e,e.limit,"L"):e}function b_(n,e){return new kE(e.largestBatchId,mv(n.wt,e.overlayMutation))}function vA(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function EA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Do(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class nz{getBundleMetadata(e,t){return TA(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:Po(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return TA(e).put(function(a){return{bundleId:a.id,createTime:Do(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return wA(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:LE(o.bundledQuery),readTime:Po(o.readTime)}}(r)})}saveNamedQuery(e,t){return wA(e).put(function(a){return{name:a.name,readTime:Do(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function TA(n){return Jt(n,Dm)}function wA(n){return Jt(n,Pm)}/**
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
 */class Um{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const r=t.uid||"";return new Um(e,r)}getOverlay(e,t){return rh(e).get(vA(this.userId,t)).next(r=>r?b_(this.serializer,r):null)}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const d=new kE(t,u);a.push(this.St(e,d))}),j.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const o=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(rh(e).X(rv,d))}),j.waitFor(o)}getOverlaysForCollection(e,t,r){const a=ai(),o=An(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return rh(e).J(rv,u).next(d=>{for(const p of d){const m=b_(this.serializer,p);a.set(m.getKey(),m)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=ai();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rh(e).te({index:q1,range:d},(p,m,_)=>{const v=b_(this.serializer,m);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):_.done()}).next(()=>o)}St(e,t){return rh(e).put(function(a,o,u){const[d,p,m]=vA(o,u.mutation.key);return{userId:o,collectionPath:p,documentId:m,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Wh(a.wt,u.mutation)}}(this.serializer,this.userId,t))}}function rh(n){return Jt(n,Nm)}/**
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
 */class rz{Dt(e){return Jt(e,bE)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?xt.fromUint8Array(r):xt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class uo{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(dt(e.integerValue));else if("doubleValue"in e){const r=dt(e.doubleValue);isNaN(r)?this.Mt(t,13):(this.Mt(t,15),Fh(r)?t.xt(0):t.xt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Mt(t,20),typeof r=="string"&&(r=Xi(r)),t.Ot(`${r.seconds||""}`),t.xt(r.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Ji(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Mt(t,45),t.xt(r.latitude||0),t.xt(r.longitude||0)}else"mapValue"in e?eC(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):Vm(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):me(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const r=e.fields||{};this.Mt(t,55);for(const a of Object.keys(r))this.Nt(a,t),this.Ct(r[a],t)}qt(e,t){var r,a;const o=e.fields||{};this.Mt(t,53);const u=mu,d=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.Mt(t,15),t.xt(dt(d)),this.Nt(u,t),this.Ct(o[u],t)}$t(e,t){const r=e.values||[];this.Mt(t,50);for(const a of r)this.Ct(a,t)}kt(e,t){this.Mt(t,37),ce.fromName(e).path.forEach(r=>{this.Mt(t,60),this.Kt(r,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}uo.Wt=new uo;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=255;function iz(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function bA(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=iz(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class sz{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.zt(r.value),r=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Yt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.zt(r);else if(r<2048)this.zt(960|r>>>6),this.zt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|r>>>12),this.zt(128|63&r>>>6),this.zt(128|63&r);else{const a=t.codePointAt(0);this.zt(240|a>>>18),this.zt(128|63&a>>>12),this.zt(128|63&a>>>6),this.zt(128|63&a)}}this.jt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Yt()}en(e){const t=this.tn(e),r=bA(t);this.nn(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}rn(e){const t=this.tn(e),r=bA(t);this.nn(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}sn(){this._n(Ml),this._n(255)}an(){this.un(Ml),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Ml?(this._n(Ml),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===Ml?(this.un(Ml),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class az{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class oz{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class ih{constructor(){this.ln=new sz,this.hn=new az(this.ln),this.Pn=new oz(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class co{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}In(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new co(this.indexId,this.documentKey,this.arrayValue,r)}}function Hs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=IA(n.arrayValue,e.arrayValue),t!==0?t:(t=IA(n.directionalValue,e.directionalValue),t!==0?t:ce.comparator(n.documentKey,e.documentKey)))}function IA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class AA{constructor(e){this.En=new nt((t,r)=>pt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.An=[];for(const t of e.filters){const r=t;r.isInequality()?this.En=this.En.add(r):this.An.push(r)}}get Rn(){return this.En.size>1}Vn(e){if(ve(e.collectionGroup===this.collectionId,49279),this.Rn)return!1;const t=ev(e);if(t!==void 0&&!this.mn(t))return!1;const r=so(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.mn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.En.size>0){const d=this.En.getIterator().getNext();if(!a.has(d.field.canonicalString())){const p=r[o];if(!this.fn(d,p)||!this.gn(this.dn[u++],p))return!1}++o}for(;o<r.length;++o){const d=r[o];if(u>=this.dn.length||!this.gn(this.dn[u++],d))return!1}return!0}pn(){if(this.Rn)return null;let e=new nt(pt.comparator);const t=[];for(const r of this.An)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Tp(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Tp(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Tp(r.field,r.dir==="asc"?0:1)));return new qp(qp.UNKNOWN_ID,this.collectionId,t,Bh.empty())}mn(e){for(const t of this.An)if(this.fn(t,e))return!0;return!1}fn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}gn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function qC(n){var e,t;if(ve(n instanceof Fe||n instanceof tt,20012),n instanceof Fe){if(n instanceof uC){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Fe.create(n.field,"==",o)))||[];return tt.create(a,"or")}return n}const r=n.filters.map(a=>qC(a));return tt.create(r,n.op)}function lz(n){if(n.getFilters().length===0)return[];const e=_v(qC(n));return ve(HC(e),7391),gv(e)||yv(e)?[e]:e.getFilters()}function gv(n){return n instanceof Fe}function yv(n){return n instanceof tt&&RE(n)}function HC(n){return gv(n)||yv(n)||function(t){if(t instanceof tt&&lv(t)){for(const r of t.getFilters())if(!gv(r)&&!yv(r))return!1;return!0}return!1}(n)}function _v(n){if(ve(n instanceof Fe||n instanceof tt,34018),n instanceof Fe)return n;if(n.filters.length===1)return _v(n.filters[0]);const e=n.filters.map(r=>_v(r));let t=tt.create(e,n.op);return t=Zp(t),HC(t)?t:(ve(t instanceof tt,64498),ve(yu(t),40251),ve(t.filters.length>1,57927),t.filters.reduce((r,a)=>UE(r,a)))}function UE(n,e){let t;return ve(n instanceof Fe||n instanceof tt,38388),ve(e instanceof Fe||e instanceof tt,25473),t=n instanceof Fe?e instanceof Fe?function(a,o){return tt.create([a,o],"and")}(n,e):SA(n,e):e instanceof Fe?SA(e,n):function(a,o){if(ve(a.filters.length>0&&o.filters.length>0,48005),yu(a)&&yu(o))return aC(a,o.getFilters());const u=lv(a)?a:o,d=lv(a)?o:a,p=u.filters.map(m=>UE(m,d));return tt.create(p,"or")}(n,e),Zp(t)}function SA(n,e){if(yu(e))return aC(e,n.getFilters());{const t=e.filters.map(r=>UE(n,r));return tt.create(t,"or")}}function Zp(n){if(ve(n instanceof Fe||n instanceof tt,11850),n instanceof Fe)return n;const e=n.getFilters();if(e.length===1)return Zp(e[0]);if(iC(n))return n;const t=e.map(a=>Zp(a)),r=[];return t.forEach(a=>{a instanceof Fe?r.push(a):a instanceof tt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:tt.create(r,n.op)}/**
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
 */class uz{constructor(){this.yn=new zE}addToCollectionParentIndex(e,t){return this.yn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(nr.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class zE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new nt(Be.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new nt(Be.comparator)).toArray()}}/**
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
 */const RA="IndexedDbIndexManager",ip=new Uint8Array(0);class cz{constructor(e,t){this.databaseId=t,this.wn=new zE,this.bn=new rs(r=>Ro(r),(r,a)=>yd(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.wn.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.wn.add(t)});const o={collectionId:r,parent:An(a)};return CA(e).put(o)}return j.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[P1(t),""],!1,!0);return CA(e).J(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(si(u.parent))}return r})}addFieldIndex(e,t){const r=sh(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(p=>[p.fieldPath.canonicalString(),p.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Ul(e);return o.next(d=>{u.put(EA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=sh(e),a=Ul(e),o=Ll(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=sh(e),r=Ll(e),a=Ul(e);return t.X().next(()=>r.X()).next(()=>a.X())}createTargetIndexes(e,t){return j.forEach(this.Sn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new AA(r).pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=Ll(e);let a=!0;const o=new Map;return j.forEach(this.Sn(t),u=>this.Dn(e,u).next(d=>{a&&(a=!!d),o.set(u,d)})).next(()=>{if(a){let u=Pe();const d=[];return j.forEach(o,(p,m)=>{ie(RA,`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(p)} to execute ${Ro(t)}`);const _=function(K,oe){const te=ev(oe);if(te===void 0)return null;for(const le of Wp(K,te.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(m,p),v=function(K,oe){const te=new Map;for(const le of so(oe))for(const D of Wp(K,le.fieldPath))switch(D.op){case"==":case"in":te.set(le.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return te.set(le.fieldPath.canonicalString(),D.value),Array.from(te.values())}return null}(m,p),w=function(K,oe){const te=[];let le=!0;for(const D of so(oe)){const R=D.kind===0?aA(K,D.fieldPath,K.startAt):oA(K,D.fieldPath,K.startAt);te.push(R.value),le&&(le=R.inclusive)}return new fa(te,le)}(m,p),S=function(K,oe){const te=[];let le=!0;for(const D of so(oe)){const R=D.kind===0?oA(K,D.fieldPath,K.endAt):aA(K,D.fieldPath,K.endAt);te.push(R.value),le&&(le=R.inclusive)}return new fa(te,le)}(m,p),x=this.vn(p,m,w),U=this.vn(p,m,S),M=this.Cn(p,m,v),q=this.Fn(p.indexId,_,x,w.inclusive,U,S.inclusive,M);return j.forEach(q,X=>r.Z(X,t.limit).next(K=>{K.forEach(oe=>{const te=ce.fromSegments(oe.documentKey);u.has(te)||(u=u.add(te),d.push(te))})}))}).next(()=>d)}return j.resolve(null)})}Sn(e){let t=this.bn.get(e);return t||(e.filters.length===0?t=[e]:t=lz(tt.create(e.filters,"and")).map(r=>cv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.bn.set(e,t),t)}Fn(e,t,r,a,o,u,d){const p=(t!=null?t.length:1)*Math.max(r.length,o.length),m=p/(t!=null?t.length:1),_=[];for(let v=0;v<p;++v){const w=t?this.Mn(t[v/m]):ip,S=this.xn(e,w,r[v%m],a),x=this.On(e,w,o[v%m],u),U=d.map(M=>this.xn(e,w,M,!0));_.push(...this.createRange(S,x,U))}return _}xn(e,t,r,a){const o=new co(e,ce.empty(),t,r);return a?o:o.In()}On(e,t,r,a){const o=new co(e,ce.empty(),t,r);return a?o.In():o}Dn(e,t){const r=new AA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const d of o)r.Vn(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.Sn(t);return j.forEach(a,o=>this.Dn(e,o).next(u=>{u?r!==0&&u.fields.length<function(p){let m=new nt(pt.comparator),_=!1;for(const v of p.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?_=!0:m=m.add(w.field));for(const v of p.orderBy)v.field.isKeyField()||(m=m.add(v.field));return m.size+(_?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}Nn(e,t){const r=new ih;for(const a of so(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.Tn(a.kind);uo.Wt.vt(o,u)}return r.cn()}Mn(e){const t=new ih;return uo.Wt.vt(e,t.Tn(0)),t.cn()}Bn(e,t){const r=new ih;return uo.Wt.vt(So(this.databaseId,t),r.Tn(function(o){const u=so(o);return u.length===0?0:u[u.length-1].kind}(e))),r.cn()}Cn(e,t,r){if(r===null)return[];let a=[];a.push(new ih);let o=0;for(const u of so(e)){const d=r[o++];for(const p of a)if(this.Ln(t,u.fieldPath)&&Kh(d))a=this.kn(a,u,d);else{const m=p.Tn(u.kind);uo.Wt.vt(d,m)}}return this.qn(a)}vn(e,t,r){return this.Cn(e,t,r.position)}qn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].cn();return t}kn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const d of a){const p=new ih;p.seed(d.cn()),uo.Wt.vt(u,p.Tn(t.kind)),o.push(p)}return o}Ln(e,t){return!!e.filters.find(r=>r instanceof Fe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=sh(e),a=Ul(e);return(t?r.J(nv,IDBKeyRange.bound(t,t)):r.J()).next(o=>{const u=[];return j.forEach(o,d=>a.get([d.indexId,this.uid]).next(p=>{u.push(function(_,v){const w=v?new Bh(v.sequenceNumber,new nr(Po(v.readTime),new ce(si(v.documentKey)),v.largestBatchId)):Bh.empty(),S=_.fields.map(([x,U])=>new Tp(pt.fromServerFormat(x),U));return new qp(_.indexId,_.collectionGroup,S,w)}(d,p))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Re(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=sh(e),o=Ul(e);return this.Qn(e).next(u=>a.J(nv,IDBKeyRange.bound(t,t)).next(d=>j.forEach(d,p=>o.put(EA(p.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return j.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?j.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),j.forEach(d,p=>this.$n(e,a,p).next(m=>{const _=this.Un(o,p);return m.isEqual(_)?j.resolve():this.Kn(e,o,p,m,_)}))))})}Wn(e,t,r,a){return Ll(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.Bn(r,t.key),documentKey:t.key.path.toArray()})}Gn(e,t,r,a){return Ll(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.Bn(r,t.key),t.key.path.toArray()])}$n(e,t,r){const a=Ll(e);let o=new nt(Hs);return a.te({index:j1,range:IDBKeyRange.only([r.indexId,this.uid,this.Bn(r,t)])},(u,d)=>{o=o.add(new co(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>o)}Un(e,t){let r=new nt(Hs);const a=this.Nn(t,e);if(a==null)return r;const o=ev(t);if(o!=null){const u=e.data.field(o.fieldPath);if(Kh(u))for(const d of u.arrayValue.values||[])r=r.add(new co(t.indexId,e.key,this.Mn(d),a))}else r=r.add(new co(t.indexId,e.key,ip,a));return r}Kn(e,t,r,a,o){ie(RA,"Updating index entries for document '%s'",t.key);const u=[];return function(p,m,_,v,w){const S=p.getIterator(),x=m.getIterator();let U=Vl(S),M=Vl(x);for(;U||M;){let q=!1,X=!1;if(U&&M){const K=_(U,M);K<0?X=!0:K>0&&(q=!0)}else U!=null?X=!0:q=!0;q?(v(M),M=Vl(x)):X?(w(U),U=Vl(S)):(U=Vl(S),M=Vl(x))}}(a,o,Hs,d=>{u.push(this.Wn(e,t,r,d))},d=>{u.push(this.Gn(e,t,r,d))}),j.waitFor(u)}Qn(e){let t=1;return Ul(e).te({index:F1,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Hs(u,d)).filter((u,d,p)=>!d||Hs(u,p[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Hs(u,e),p=Hs(u,t);if(d===0)a[0]=e.In();else if(d>0&&p<0)a.push(u),a.push(u.In());else if(p>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.zn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,ip,[]],p=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,ip,[]];o.push(IDBKeyRange.bound(d,p))}return o}zn(e,t){return Hs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(xA)}getMinOffset(e,t){return j.mapArray(this.Sn(t),r=>this.Dn(e,r).next(a=>a||me(44426))).next(xA)}}function CA(n){return Jt(n,Hh)}function Ll(n){return Jt(n,Qp)}function sh(n){return Jt(n,wE)}function Ul(n){return Jt(n,Kp)}function xA(n){ve(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;vE(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new nr(e.readTime,e.documentKey,t)}/**
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
 */const DA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$C=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function GC(n,e,t){const r=n.store(Dr),a=n.store(hu),o=[],u=IDBKeyRange.only(t.batchId);let d=0;const p=r.te({range:u},(_,v,w)=>(d++,w.delete()));o.push(p.next(()=>{ve(d===1,47070,{batchId:t.batchId})}));const m=[];for(const _ of t.mutations){const v=U1(e,_.key.path,t.batchId);o.push(a.delete(v)),m.push(_.key)}return j.waitFor(o).next(()=>m)}function em(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw me(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In($C,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class zm{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.jn={}}static bt(e,t,r,a){ve(e.uid!=="",64387);const o=e.isAuthenticated()?e.uid:"";return new zm(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $s(e).te({index:mo,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=Hl(e),u=$s(e);return u.add({}).next(d=>{ve(typeof d=="number",49019);const p=new NE(d,t,r,a),m=function(S,x,U){const M=U.baseMutations.map(X=>Wh(S.wt,X)),q=U.mutations.map(X=>Wh(S.wt,X));return{userId:x,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:M,mutations:q}}(this.serializer,this.userId,p),_=[];let v=new nt((w,S)=>Re(w.canonicalString(),S.canonicalString()));for(const w of a){const S=U1(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),_.push(u.put(m)),_.push(o.put(S,HU))}return v.forEach(w=>{_.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.jn[d]=p.keys()}),j.waitFor(_).next(()=>p)})}lookupMutationBatch(e,t){return $s(e).get(t).next(r=>r?(ve(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),lo(this.serializer,r)):null)}Hn(e,t){return this.jn[t]?j.resolve(this.jn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.jn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return $s(e).te({index:mo,range:a},(u,d,p)=>{d.userId===this.userId&&(ve(d.batchId>=r,47524,{Jn:r}),o=lo(this.serializer,d)),p.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=ra;return $s(e).te({index:mo,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,ra],[this.userId,Number.POSITIVE_INFINITY]);return $s(e).J(mo,t).next(r=>r.map(a=>lo(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=wp(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return Hl(e).te({range:a},(u,d,p)=>{const[m,_,v]=u,w=si(_);if(m===this.userId&&t.path.isEqual(w))return $s(e).get(v).next(S=>{if(!S)throw me(61480,{Yn:u,batchId:v});ve(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:v}),o.push(lo(this.serializer,S))});p.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Re);const a=[];return t.forEach(o=>{const u=wp(this.userId,o.path),d=IDBKeyRange.lowerBound(u),p=Hl(e).te({range:d},(m,_,v)=>{const[w,S,x]=m,U=si(S);w===this.userId&&o.path.isEqual(U)?r=r.add(x):v.done()});a.push(p)}),j.waitFor(a).next(()=>this.Zn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=wp(this.userId,r),u=IDBKeyRange.lowerBound(o);let d=new nt(Re);return Hl(e).te({range:u},(p,m,_)=>{const[v,w,S]=p,x=si(w);v===this.userId&&r.isPrefixOf(x)?x.length===a&&(d=d.add(S)):_.done()}).next(()=>this.Zn(e,d))}Zn(e,t){const r=[],a=[];return t.forEach(o=>{a.push($s(e).get(o).next(u=>{if(u===null)throw me(35274,{batchId:o});ve(u.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:u.userId,batchId:o}),r.push(lo(this.serializer,u))}))}),j.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return GC(e.he,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Xn(t.batchId)}),j.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}Xn(e){delete this.jn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return j.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return Hl(e).te({range:r},(o,u,d)=>{if(o[0]===this.userId){const p=si(o[1]);a.push(p)}else d.done()}).next(()=>{ve(a.length===0,56720,{er:a.map(o=>o.canonicalString())})})})}containsKey(e,t){return KC(e,this.userId,t)}tr(e){return QC(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:ra,lastStreamToken:""})}}function KC(n,e,t){const r=wp(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return Hl(n).te({range:o,ee:!0},(d,p,m)=>{const[_,v,w]=d;_===e&&v===a&&(u=!0),m.done()}).next(()=>u)}function $s(n){return Jt(n,Dr)}function Hl(n){return Jt(n,hu)}function QC(n){return Jt(n,jh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new No(0)}static ir(){return new No(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hz{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.sr(e).next(t=>{const r=new No(t.highestTargetId);return t.highestTargetId=r.next(),this._r(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.sr(e).next(t=>Te.fromTimestamp(new gt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.sr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.sr(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this._r(e,a)))}addTargetData(e,t){return this.ar(e,t).next(()=>this.sr(e).next(r=>(r.targetCount+=1,this.ur(t,r),this._r(e,r))))}updateTargetData(e,t){return this.ar(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>zl(e).delete(t.targetId)).next(()=>this.sr(e)).next(r=>(ve(r.targetCount>0,8065),r.targetCount-=1,this._r(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return zl(e).te((u,d)=>{const p=mh(d);p.sequenceNumber<=t&&r.get(p.targetId)===null&&(a++,o.push(this.removeTargetData(e,p)))}).next(()=>j.waitFor(o)).next(()=>a)}forEachTarget(e,t){return zl(e).te((r,a)=>{const o=mh(a);t(o)})}sr(e){return PA(e).get(Gp).next(t=>(ve(t!==null,2888),t))}_r(e,t){return PA(e).put(Gp,t)}ar(e,t){return zl(e).put(jC(this.serializer,t))}ur(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.sr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ro(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return zl(e).te({range:a,index:B1},(u,d,p)=>{const m=mh(d);yd(t,m.target)&&(o=m,p.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Ys(e);return t.forEach(u=>{const d=An(u.path);a.push(o.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),j.waitFor(a)}removeMatchingKeys(e,t,r){const a=Ys(e);return j.forEach(t,o=>{const u=An(o.path);return j.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Ys(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ys(e);let o=Pe();return a.te({range:r,ee:!0},(u,d,p)=>{const m=si(u[1]),_=new ce(m);o=o.add(_)}).next(()=>o)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[P1(r)],!1,!0);let o=0;return Ys(e).te({index:TE,ee:!0,range:a},([u,d],p,m)=>{u!==0&&(o++,m.done())}).next(()=>o>0)}Rt(e,t){return zl(e).get(t).next(r=>r?mh(r):null)}}function zl(n){return Jt(n,du)}function PA(n){return Jt(n,wo)}function Ys(n){return Jt(n,fu)}/**
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
 */const NA="LruGarbageCollector",dz=1048576;function OA([n,e],[t,r]){const a=Re(n,t);return a===0?Re(e,r):a}class fz{constructor(e){this.cr=e,this.buffer=new nt(OA),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();OA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class YC{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){ie(NA,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ta(t)?ie(NA,"Ignoring IndexedDB error during garbage collection: ",t):await Ea(t)}await this.Ir(3e5)})}}class pz{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return j.resolve(jn.le);const r=new fz(t);return this.Er.forEachTarget(e,a=>r.Pr(a.sequenceNumber)).next(()=>this.Er.Ar(e,a=>r.Pr(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Er.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(DA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),DA):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let r,a,o,u,d,p,m;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(m=Date.now(),Bl()<=ze.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${o} targets in `+(p-d)+`ms
	Removed ${v} documents in `+(m-p)+`ms
Total Duration: ${m-_}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function WC(n,e){return new pz(n,e)}/**
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
 */class mz{constructor(e,t){this.db=e,this.garbageCollector=WC(this,t)}dr(e){const t=this.Vr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ar(e,t){return this.mr(e,(r,a)=>t(a))}addReference(e,t,r){return sp(e,r)}removeReference(e,t,r){return sp(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return sp(e,t)}gr(e,t){return function(a,o){let u=!1;return QC(a).ne(d=>KC(a,d,o).next(p=>(p&&(u=!0),j.resolve(!p)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this.mr(e,(u,d)=>{if(d<=t){const p=this.gr(e,u).next(m=>{if(!m)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Te.min()),Ys(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(p)}}).next(()=>j.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return sp(e,t)}mr(e,t){const r=Ys(e);let a,o=jn.le;return r.te({index:TE},([u,d],{path:p,sequenceNumber:m})=>{u===0?(o!==jn.le&&t(new ce(si(a)),o),o=m,a=p):o=jn.le}).next(()=>{o!==jn.le&&t(new ce(si(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sp(n,e){return Ys(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gz{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ro(e).put(r)}removeEntry(e,t,r){return ro(e).delete(function(o,u){const d=o.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],Jp(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.pr(e,r)))}getEntry(e,t){let r=ht.newInvalidDocument(t);return ro(e).te({index:bp,range:IDBKeyRange.only(ah(t))},(a,o)=>{r=this.yr(t,o)}).next(()=>r)}wr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return ro(e).te({index:bp,range:IDBKeyRange.only(ah(t))},(a,o)=>{r={document:this.yr(t,o),size:em(o)}}).next(()=>r)}getEntries(e,t){let r=Hn();return this.br(e,t,(a,o)=>{const u=this.yr(a,o);r=r.insert(a,u)}).next(()=>r)}Sr(e,t){let r=Hn(),a=new lt(ce.comparator);return this.br(e,t,(o,u)=>{const d=this.yr(o,u);r=r.insert(o,d),a=a.insert(o,em(u))}).next(()=>({documents:r,Dr:a}))}br(e,t,r){if(t.isEmpty())return j.resolve();let a=new nt(MA);t.forEach(p=>a=a.add(p));const o=IDBKeyRange.bound(ah(a.first()),ah(a.last())),u=a.getIterator();let d=u.getNext();return ro(e).te({index:bp,range:o},(p,m,_)=>{const v=ce.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&MA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,m),d=u.hasNext()?u.getNext():null),d?_.H(ah(d)):_.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),Jp(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],p=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ro(e).J(IDBKeyRange.bound(d,p,!0)).next(m=>{o==null||o.incrementDocumentReadCount(m.length);let _=Hn();for(const v of m){const w=this.yr(ce.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(vd(t,w)||a.has(w.key))&&(_=_.insert(w.key,w))}return _})}getAllFromCollectionGroup(e,t,r,a){let o=Hn();const u=VA(t,r),d=VA(t,nr.max());return ro(e).te({index:z1,range:IDBKeyRange.bound(u,d,!0)},(p,m,_)=>{const v=this.yr(ce.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);o=o.insert(v.key,v),o.size===a&&_.done()}).next(()=>o)}newChangeBuffer(e){return new yz(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return kA(e).get(tv).next(t=>(ve(!!t,20021),t))}pr(e,t){return kA(e).put(tv,t)}yr(e,t){if(t){const r=tz(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Te.min())))return r}return ht.newInvalidDocument(e)}}function JC(n){return new gz(n)}class yz extends XC{constructor(e,t){super(),this.vr=e,this.trackRemovals=t,this.Cr=new rs(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new nt((o,u)=>Re(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const d=this.Cr.get(o);if(t.push(this.vr.removeEntry(e,o,d.readTime)),u.isValidDocument()){const p=_A(this.vr.serializer,u);a=a.add(o.path.popLast());const m=em(p);r+=m-d.size,t.push(this.vr.addEntry(e,o,p))}else if(r-=d.size,this.trackRemovals){const p=_A(this.vr.serializer,u.convertToNoDocument(Te.min()));t.push(this.vr.addEntry(e,o,p))}}),a.forEach(o=>{t.push(this.vr.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.vr.updateMetadata(e,r)),j.waitFor(t)}getFromCache(e,t){return this.vr.wr(e,t).next(r=>(this.Cr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.vr.Sr(e,t).next(({documents:r,Dr:a})=>(a.forEach((o,u)=>{this.Cr.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function kA(n){return Jt(n,qh)}function ro(n){return Jt(n,$p)}function ah(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function VA(n,e){const t=e.documentKey.path.toArray();return[n,Jp(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function MA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Re(t[o],r[o]),a)return a;return a=Re(t.length,r.length),a||(a=Re(t[t.length-2],r[r.length-2]),a||Re(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _z{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Sh(r.mutation,a,qn.empty(),gt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Pe()){const a=ai();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=fh();return o.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ai();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Pe()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let o=Hn();const u=Ah(),d=function(){return Ah()}();return t.forEach((p,m)=>{const _=r.get(m.key);a.has(m.key)&&(_===void 0||_.mutation instanceof is)?o=o.insert(m.key,m):_!==void 0?(u.set(m.key,_.mutation.getFieldMask()),Sh(_.mutation,m,_.mutation.getFieldMask(),gt.now())):u.set(m.key,qn.empty())}),this.recalculateAndSaveOverlays(e,o).next(p=>(p.forEach((m,_)=>u.set(m,_)),t.forEach((m,_)=>{var v;return d.set(m,new _z(_,(v=u.get(m))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Ah();let a=new lt((u,d)=>u-d),o=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let _=r.get(p)||qn.empty();_=d.applyToLocalView(m,_),r.set(p,_);const v=(a.get(d.batchId)||Pe()).add(p);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,_=p.value,v=gC();_.forEach(w=>{if(!o.has(w)){const S=bC(t.get(w),r.get(w));S!==null&&v.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,v))}return j.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):CE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):j.resolve(ai());let d=cu,p=o;return u.next(m=>j.forEach(m,(_,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),o.get(_)?j.resolve():this.remoteDocumentCache.getEntry(e,_).next(w=>{p=p.insert(_,w)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,p,m,Pe())).next(_=>({batchId:d,changes:mC(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(r=>{let a=fh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=fh();return this.indexManager.getCollectionParents(e,o).next(d=>j.forEach(d,p=>{const m=function(v,w){return new ns(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,p.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,a).next(_=>{_.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((p,m)=>{const _=m.getKey();u.get(_)===null&&(u=u.insert(_,ht.newInvalidDocument(_)))});let d=fh();return u.forEach((p,m)=>{const _=o.get(p);_!==void 0&&Sh(_.mutation,m,qn.empty(),gt.now()),vd(t,m)&&(d=d.insert(p,m))}),d})}}/**
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
 */class vz{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return j.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(a){return{name:a.name,query:LE(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),j.resolve()}}/**
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
 */class Ez{constructor(){this.overlays=new lt(ce.comparator),this.Or=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.St(e,t,o)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Or.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const a=ai(),o=t.length+1,u=new ce(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&p.largestBatchId>r&&a.set(p.getKey(),p)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new lt((m,_)=>m-_);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let _=o.get(m.largestBatchId);_===null&&(_=ai(),o=o.insert(m.largestBatchId,_)),_.set(m.getKey(),m)}}const d=ai(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,_)=>d.set(m,_)),!(d.size()>=a)););return j.resolve(d)}St(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Or.get(a.largestBatchId).delete(r.key);this.Or.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new kE(t,r));let o=this.Or.get(t);o===void 0&&(o=Pe(),this.Or.set(t,o)),this.Or.set(t,o.add(r.key))}}/**
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
 */class Tz{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.Nr=new nt(ln.Br),this.Lr=new nt(ln.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Qr(new ln(e,t))}$r(e,t){e.forEach(r=>this.removeReference(r,t))}Ur(e){const t=new ce(new Be([])),r=new ln(t,e),a=new ln(t,e+1),o=[];return this.Lr.forEachInRange([r,a],u=>{this.Qr(u),o.push(u.key)}),o}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new ce(new Be([])),r=new ln(t,e),a=new ln(t,e+1);let o=Pe();return this.Lr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new ln(e,0),r=this.Nr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return ce.comparator(e.key,t.key)||Re(e.Gr,t.Gr)}static kr(e,t){return Re(e.Gr,t.Gr)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wz{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new nt(ln.Br)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new NE(o,t,r,a);this.mutationQueue.push(u);for(const d of a)this.zr=this.zr.add(new ln(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return j.resolve(u)}lookupMutationBatch(e,t){return j.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Hr(r),o=a<0?0:a;return j.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?ra:this.Jn-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),a=new ln(t,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([r,a],u=>{const d=this.jr(u.Gr);o.push(d)}),j.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Re);return t.forEach(a=>{const o=new ln(a,0),u=new ln(a,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,u],d=>{r=r.add(d.Gr)})}),j.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;ce.isDocumentKey(o)||(o=o.child(""));const u=new ln(new ce(o),0);let d=new nt(Re);return this.zr.forEachWhile(p=>{const m=p.key.path;return!!r.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Gr)),!0)},u),j.resolve(this.Jr(d))}Jr(e){const t=[];return e.forEach(r=>{const a=this.jr(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ve(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return j.forEach(t.mutations,a=>{const o=new ln(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,t){const r=new ln(t,0),a=this.zr.firstAfterOrEqual(r);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bz{constructor(e){this.Zr=e,this.docs=function(){return new lt(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.Zr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():ht.newInvalidDocument(a))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=Hn();const u=t.path,d=new ce(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:_}}=p.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||vE(O1(_),r)<=0||(a.has(_.key)||vd(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return j.resolve(o)}getAllFromCollectionGroup(e,t,r,a){me(9500)}Xr(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Iz(this)}getSize(e){return j.resolve(this.size)}}class Iz extends XC{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.vr.addEntry(e,a)):this.vr.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Az{constructor(e){this.persistence=e,this.ei=new rs(t=>Ro(t),yd),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.ti=0,this.ni=new BE,this.targetCount=0,this.ri=No.rr()}forEachTarget(e,t){return this.ei.forEach((r,a)=>t(a)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ti&&(this.ti=t),j.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new No(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.ar(t),j.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.ei.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ei.delete(u),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),j.waitFor(o).next(()=>a)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.ei.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.ni.qr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.ni.$r(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),j.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ni.Wr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t){this.ii={},this.overlays={},this.si=new jn(0),this.oi=!1,this.oi=!0,this._i=new Tz,this.referenceDelegate=e(this),this.ai=new Az(this),this.indexManager=new uz,this.remoteDocumentCache=function(a){return new bz(a)}(r=>this.referenceDelegate.ui(r)),this.serializer=new FC(t),this.ci=new vz(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ez,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ii[e.toKey()];return r||(r=new wz(t,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,r){ie("MemoryPersistence","Starting transaction:",e);const a=new Sz(this.si.next());return this.referenceDelegate.li(),r(a).next(o=>this.referenceDelegate.hi(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}Pi(e,t){return j.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,t)))}}class Sz extends V1{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.Ti=new BE,this.Ii=null}static Ei(e){return new Bm(e)}get di(){if(this.Ii)return this.Ii;throw me(60996)}addReference(e,t,r){return this.Ti.addReference(r,t),this.di.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.Ti.removeReference(r,t),this.di.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),j.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(a=>this.di.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.di,r=>{const a=ce.fromPath(r);return this.Ai(e,a).next(o=>{o||t.removeEntry(a,Te.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return j.or([()=>j.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class tm{constructor(e,t){this.persistence=e,this.Ri=new rs(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=WC(this,t)}static Ei(e,t){return new tm(e,t)}li(){}hi(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}Ar(e,t){return j.forEach(this.Ri,(r,a)=>this.gr(e,r,a).next(o=>o?j.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.Xr(e,u=>this.gr(e,u,t).next(d=>{d||(r++,o.removeEntry(u,Te.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),j.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ap(e.data.value)),t}gr(e,t,r){return j.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.Ri.get(t);return j.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Rz{constructor(e){this.serializer=e}q(e,t,r,a){const o=new xm("createOrUpgrade",t);r<1&&a>=1&&(function(p){p.createObjectStore(gd)}(e),function(p){p.createObjectStore(jh,{keyPath:qU}),p.createObjectStore(Dr,{keyPath:QI,autoIncrement:!0}).createIndex(mo,YI,{unique:!0}),p.createObjectStore(hu)}(e),LA(e),function(p){p.createObjectStore(ao)}(e));let u=j.resolve();return r<3&&a>=3&&(r!==0&&(function(p){p.deleteObjectStore(fu),p.deleteObjectStore(du),p.deleteObjectStore(wo)}(e),LA(e)),u=u.next(()=>function(p){const m=p.store(wo),_={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Te.min().toTimestamp(),targetCount:0};return m.put(Gp,_)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(p,m){return m.store(Dr).J().next(v=>{p.deleteObjectStore(Dr),p.createObjectStore(Dr,{keyPath:QI,autoIncrement:!0}).createIndex(mo,YI,{unique:!0});const w=m.store(Dr),S=v.map(x=>w.put(x));return j.waitFor(S)})}(e,o))),u=u.next(()=>{(function(p){p.createObjectStore(pu,{keyPath:JU})})(e)})),r<5&&a>=5&&(u=u.next(()=>this.Vi(o))),r<6&&a>=6&&(u=u.next(()=>(function(p){p.createObjectStore(qh)}(e),this.mi(o)))),r<7&&a>=7&&(u=u.next(()=>this.fi(o))),r<8&&a>=8&&(u=u.next(()=>this.gi(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.pi(o))),r<11&&a>=11&&(u=u.next(()=>{(function(p){p.createObjectStore(Dm,{keyPath:ZU})})(e),function(p){p.createObjectStore(Pm,{keyPath:e6})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(p){const m=p.createObjectStore(Nm,{keyPath:o6});m.createIndex(rv,l6,{unique:!1}),m.createIndex(q1,u6,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(p){const m=p.createObjectStore($p,{keyPath:$U});m.createIndex(bp,GU),m.createIndex(z1,KU)}(e)).next(()=>this.yi(e,o)).next(()=>e.deleteObjectStore(ao))),r<14&&a>=14&&(u=u.next(()=>this.wi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(p){p.createObjectStore(wE,{keyPath:t6,autoIncrement:!0}).createIndex(nv,n6,{unique:!1}),p.createObjectStore(Kp,{keyPath:r6}).createIndex(F1,i6,{unique:!1}),p.createObjectStore(Qp,{keyPath:s6}).createIndex(j1,a6,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore(Kp).clear()}).next(()=>{t.objectStore(Qp).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(p){p.createObjectStore(bE,{keyPath:c6})})(e)})),u}mi(e){let t=0;return e.store(ao).te((r,a)=>{t+=em(a)}).next(()=>{const r={byteSize:t};return e.store(qh).put(tv,r)})}Vi(e){const t=e.store(jh),r=e.store(Dr);return t.J().next(a=>j.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,ra],[o.userId,o.lastAcknowledgedBatchId]);return r.J(mo,u).next(d=>j.forEach(d,p=>{ve(p.userId===o.userId,18650,"Cannot process batch from unexpected user",{batchId:p.batchId});const m=lo(this.serializer,p);return GC(e,o.userId,m).next(()=>{})}))}))}fi(e){const t=e.store(fu),r=e.store(ao);return e.store(wo).get(Gp).next(a=>{const o=[];return r.te((u,d)=>{const p=new Be(u),m=function(v){return[0,An(v)]}(p);o.push(t.get(m).next(_=>_?j.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(p)))}).next(()=>j.waitFor(o))})}gi(e,t){e.createObjectStore(Hh,{keyPath:XU});const r=t.store(Hh),a=new zE,o=u=>{if(a.add(u)){const d=u.lastSegment(),p=u.popLast();return r.put({collectionId:d,parent:An(p)})}};return t.store(ao).te({ee:!0},(u,d)=>{const p=new Be(u);return o(p.popLast())}).next(()=>t.store(hu).te({ee:!0},([u,d,p],m)=>{const _=si(d);return o(_.popLast())}))}pi(e){const t=e.store(du);return t.te((r,a)=>{const o=mh(a),u=jC(this.serializer,o);return t.put(u)})}yi(e,t){const r=t.store(ao),a=[];return r.te((o,u)=>{const d=t.store($p),p=function(v){return v.document?new ce(Be.fromString(v.document.name).popFirst(5)):v.noDocument?ce.fromSegments(v.noDocument.path):v.unknownDocument?ce.fromSegments(v.unknownDocument.path):me(36783)}(u).path.toArray(),m={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(m))}).next(()=>j.waitFor(a))}wi(e,t){const r=t.store(Dr),a=JC(this.serializer),o=new FE(Bm.Ei,this.serializer.wt);return r.J().next(u=>{const d=new Map;return u.forEach(p=>{var m;let _=(m=d.get(p.userId))!==null&&m!==void 0?m:Pe();lo(this.serializer,p).keys().forEach(v=>_=_.add(v)),d.set(p.userId,_)}),j.forEach(d,(p,m)=>{const _=new cn(m),v=Um.bt(this.serializer,_),w=o.getIndexManager(_),S=zm.bt(_,this.serializer,w,o.referenceDelegate);return new ZC(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new iv(t,jn.le),p).next()})})}}function LA(n){n.createObjectStore(fu,{keyPath:YU}).createIndex(TE,WU,{unique:!0}),n.createObjectStore(du,{keyPath:"targetId"}).createIndex(B1,QU,{unique:!0}),n.createObjectStore(wo)}const Gs="IndexedDbPersistence",I_=18e5,A_=5e3,S_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",ex="main";class jE{constructor(e,t,r,a,o,u,d,p,m,_,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.bi=o,this.window=u,this.document=d,this.Si=m,this.Di=_,this.Ci=v,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=w=>Promise.resolve(),!jE.C())throw new ne(Q.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new mz(this,a),this.Bi=t+ex,this.serializer=new FC(p),this.Li=new oi(this.Bi,this.Ci,new Rz(this.serializer)),this._i=new rz,this.ai=new hz(this.referenceDelegate,this.serializer),this.remoteDocumentCache=JC(this.serializer),this.ci=new nz,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,_===!1&&Vt(Gs,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ne(Q.FAILED_PRECONDITION,S_);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ai.getHighestSequenceNumber(e))}).then(e=>{this.si=new jn(e,this.Si)}).then(()=>{this.oi=!0}).catch(e=>(this.Li&&this.Li.close(),Promise.reject(e)))}Ki(e){return this.Ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Li.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ap(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(e).next(t=>{t||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(e)).next(t=>this.isPrimary&&!t?this.zi(e).next(()=>!1):!!t&&this.ji(e).next(()=>!0))).catch(e=>{if(Ta(e))return ie(Gs,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ie(Gs,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.bi.enqueueRetryable(()=>this.Ni(e)),this.isPrimary=e})}Wi(e){return oh(e).get(kl).next(t=>j.resolve(this.Hi(t)))}Ji(e){return ap(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,I_)){this.Oi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Jt(t,pu);return r.J().next(a=>{const o=this.Xi(a,I_),u=a.filter(d=>o.indexOf(d)===-1);return j.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.ki)for(const t of e)this.ki.removeItem(this.es(t.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(e){return!!e&&e.ownerId===this.clientId}Gi(e){return this.Di?j.resolve(!0):oh(e).get(kl).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,A_)&&!this.ts(t.ownerId)){if(this.Hi(t)&&this.networkEnabled)return!0;if(!this.Hi(t)){if(!t.allowTabSynchronization)throw new ne(Q.FAILED_PRECONDITION,S_);return!1}}return!(!this.networkEnabled||!this.inForeground)||ap(e).J().next(r=>this.Xi(r,A_).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(o||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&ie(Gs,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[gd,pu],e=>{const t=new iv(e,jn.le);return this.zi(t).next(()=>this.Ji(t))}),this.Li.close(),this._s()}Xi(e,t){return e.filter(r=>this.Zi(r.updateTimeMs,t)&&!this.ts(r.clientId))}us(){return this.runTransaction("getActiveClients","readonly",e=>ap(e).J().next(t=>this.Xi(t,I_).map(r=>r.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(e,t){return zm.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new cz(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return Um.bt(this.serializer,e)}getBundleCache(){return this.ci}runTransaction(e,t,r){ie(Gs,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(p){return p===17?f6:p===16?d6:p===15?IE:p===14?G1:p===13?$1:p===12?h6:p===11?H1:void me(60245)}(this.Ci);let u;return this.Li.runTransaction(e,a,o,d=>(u=new iv(d,this.si?this.si.next():jn.le),t==="readwrite-primary"?this.Wi(u).next(p=>!!p||this.Gi(u)).next(p=>{if(!p)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new ne(Q.FAILED_PRECONDITION,k1);return r(u)}).next(p=>this.ji(u).next(()=>p)):this.cs(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}cs(e){return oh(e).get(kl).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,A_)&&!this.ts(t.ownerId)&&!this.Hi(t)&&!(this.Di||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ne(Q.FAILED_PRECONDITION,S_)})}ji(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return oh(e).put(kl,t)}static C(){return oi.C()}zi(e){const t=oh(e);return t.get(kl).next(r=>this.Hi(r)?(ie(Gs,"Releasing primary lease."),t.delete(kl)):j.resolve())}Zi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const t=/(?:Version|Mobile)\/1[456]/;lR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(e){var t;try{const r=((t=this.ki)===null||t===void 0?void 0:t.getItem(this.es(e)))!==null;return ie(Gs,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Vt(Gs,"Failed to get zombied client id.",r),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function oh(n){return Jt(n,gd)}function ap(n){return Jt(n,pu)}function qE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.ls=r,this.hs=a}static Ps(e,t){let r=Pe(),a=Pe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new HE(e,t.fromCache,r,a)}}/**
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
 */class Cz{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tx{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return lR()?8:M1(wt())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.Rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Vs(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Cz;return this.fs(e,t,u).next(d=>{if(o.result=d,this.Is)return this.gs(e,t,u,d.size)})}).next(()=>o.result)}gs(e,t,r,a){return r.documentReadCount<this.Es?(Bl()<=ze.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Fl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),j.resolve()):(Bl()<=ze.DEBUG&&ie("QueryEngine","Query:",Fl(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ds*a?(Bl()<=ze.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Fl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(t))):j.resolve())}Rs(e,t){if(lA(t))return j.resolve(null);let r=Vn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Xp(t,null,"F"),r=Vn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=Pe(...o);return this.As.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(p=>{const m=this.ps(t,d);return this.ys(t,m,u,p.readTime)?this.Rs(e,Xp(t,null,"F")):this.ws(e,m,t,p)}))})))}Vs(e,t,r,a){return lA(t)||a.isEqual(Te.min())?j.resolve(null):this.As.getDocuments(e,r).next(o=>{const u=this.ps(t,o);return this.ys(t,u,r,a)?j.resolve(null):(Bl()<=ze.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Fl(t)),this.ws(e,u,t,N1(a,cu)).next(d=>d))})}ps(e,t){let r=new nt(fC(e));return t.forEach((a,o)=>{vd(e,o)&&(r=r.add(o))}),r}ys(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}fs(e,t,r){return Bl()<=ze.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Fl(t)),this.As.getDocumentsMatchingQuery(e,t,nr.min(),r)}ws(e,t,r,a){return this.As.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const $E="LocalStore",xz=3e8;class Dz{constructor(e,t,r,a){this.persistence=e,this.bs=t,this.serializer=a,this.Ss=new lt(Re),this.Ds=new rs(o=>Ro(o),yd),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZC(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function nx(n,e,t,r){return new Dz(n,e,t,r)}async function rx(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.Fs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],d=[];let p=Pe();for(const m of a){u.push(m.batchId);for(const _ of m.mutations)p=p.add(_.key)}for(const m of o){d.push(m.batchId);for(const _ of m.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(r,p).next(m=>({Ms:m,removedBatchIds:u,addedBatchIds:d}))})})}function Pz(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.Cs.newChangeBuffer({trackRemovals:!0});return function(d,p,m,_){const v=m.batch,w=v.keys();let S=j.resolve();return w.forEach(x=>{S=S.next(()=>_.getEntry(p,x)).next(U=>{const M=m.docVersions.get(x);ve(M!==null,48541),U.version.compareTo(M)<0&&(v.applyToRemoteDocument(U,m),U.isValidDocument()&&(U.setReadTime(m.commitVersion),_.addEntry(U)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(p,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=Pe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function ix(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function Nz(n,e){const t=de(n),r=e.snapshotVersion;let a=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.Cs.newChangeBuffer({trackRemovals:!0});a=t.Ss;const d=[];e.targetChanges.forEach((_,v)=>{const w=a.get(v);if(!w)return;d.push(t.ai.removeMatchingKeys(o,_.removedDocuments,v).next(()=>t.ai.addMatchingKeys(o,_.addedDocuments,v)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(xt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),a=a.insert(v,S),function(U,M,q){return U.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=xz?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(w,S,_)&&d.push(t.ai.updateTargetData(o,S))});let p=Hn(),m=Pe();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,_))}),d.push(sx(o,u,e.documentUpdates).next(_=>{p=_.xs,m=_.Os})),!r.isEqual(Te.min())){const _=t.ai.getLastRemoteSnapshotVersion(o).next(v=>t.ai.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(_)}return j.waitFor(d).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,p,m)).next(()=>p)}).then(o=>(t.Ss=a,o))}function sx(n,e,t){let r=Pe(),a=Pe();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=Hn();return t.forEach((d,p)=>{const m=o.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):ie($E,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{xs:u,Os:a}})}function Oz(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ra),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Tu(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.ai.getTargetData(r,e).next(o=>o?(a=o,j.resolve(a)):t.ai.allocateTargetId(r).next(u=>(a=new $i(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.ai.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ss.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(r.targetId,r),t.Ds.set(e,r.targetId)),r})}async function wu(n,e,t){const r=de(n),a=r.Ss.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Ta(u))throw u;ie($E,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(a.target)}function nm(n,e,t){const r=de(n);let a=Te.min(),o=Pe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,m,_){const v=de(p),w=v.Ds.get(_);return w!==void 0?j.resolve(v.Ss.get(w)):v.ai.getTargetData(m,_)}(r,u,Vn(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(u,d.targetId).next(p=>{o=p})}).next(()=>r.bs.getDocumentsMatchingQuery(u,e,t?a:Te.min(),t?o:Pe())).next(d=>(lx(r,dC(e),d),{documents:d,Ns:o})))}function ax(n,e){const t=de(n),r=de(t.ai),a=t.Ss.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.Rt(o,e).next(u=>u?u.target:null))}function ox(n,e){const t=de(n),r=t.vs.get(e)||Te.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.Cs.getAllFromCollectionGroup(a,e,N1(r,cu),Number.MAX_SAFE_INTEGER)).then(a=>(lx(t,e,a),a))}function lx(n,e,t){let r=n.vs.get(e)||Te.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.vs.set(e,r)}async function kz(n,e,t,r){const a=de(n);let o=Pe(),u=Hn();for(const m of t){const _=e.Bs(m.metadata.name);m.document&&(o=o.add(_));const v=e.Ls(m);v.setReadTime(e.ks(m.metadata.readTime)),u=u.insert(_,v)}const d=a.Cs.newChangeBuffer({trackRemovals:!0}),p=await Tu(a,function(_){return Vn(Lu(Be.fromString(`__bundle__/docs/${_}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",m=>sx(m,d,u).next(_=>(d.apply(m),_)).next(_=>a.ai.removeMatchingKeysForTargetId(m,p.targetId).next(()=>a.ai.addMatchingKeys(m,o,p.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(m,_.xs,_.Os)).next(()=>_.xs)))}async function Vz(n,e,t=Pe()){const r=await Tu(n,Vn(LE(e.bundledQuery))),a=de(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Mt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.ci.saveNamedQuery(o,e);const d=r.withResumeToken(xt.EMPTY_BYTE_STRING,u);return a.Ss=a.Ss.insert(d.targetId,d),a.ai.updateTargetData(o,d).next(()=>a.ai.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.ai.addMatchingKeys(o,t,r.targetId)).next(()=>a.ci.saveNamedQuery(o,e))})}/**
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
 */const ux="firestore_clients";function UA(n,e){return`${ux}_${n}_${e}`}const cx="firestore_mutations";function zA(n,e,t){let r=`${cx}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const hx="firestore_targets";function R_(n,e){return`${hx}_${n}_${e}`}/**
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
 */const Zr="SharedClientState";class rm{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static qs(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new ne(a.error.code,a.error.message))),u?new rm(e,t,a.state,o):(Vt(Zr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rh{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static qs(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new ne(r.error.code,r.error.message))),o?new Rh(e,r.state,a):(Vt(Zr,`Failed to parse target state for ID '${e}': ${t}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class im{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static qs(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=xE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=L1(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new im(e,o):(Vt(Zr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class GE{constructor(e,t){this.clientId=e,this.onlineState=t}static qs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new GE(t.clientId,t.onlineState):(Vt(Zr,`Failed to parse online state: ${e}`),null)}}class vv{constructor(){this.activeTargetIds=xE()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class C_{constructor(e,t,r,a,o){this.window=e,this.bi=t,this.persistenceKey=r,this.Ks=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new lt(Re),this.started=!1,this.js=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Hs=UA(this.persistenceKey,this.Ks),this.Js=function(p){return`firestore_sequence_number_${p}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new vv),this.Ys=new RegExp(`^${ux}_${u}_([^_]*)$`),this.Zs=new RegExp(`^${cx}_${u}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${hx}_${u}_(\\d+)$`),this.eo=function(p){return`firestore_online_state_${p}`}(this.persistenceKey),this.no=function(p){return`firestore_bundle_loaded_v2_${p}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.us();for(const r of e){if(r===this.Ks)continue;const a=this.getItem(UA(this.persistenceKey,r));if(a){const o=im.qs(r,a);o&&(this.zs=this.zs.insert(o.clientId,o))}}this.ro();const t=this.storage.getItem(this.eo);if(t){const r=this.io(t);r&&this.so(r)}for(const r of this.js)this.Gs(r);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Js,JSON.stringify(e))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(e){let t=!1;return this.zs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this._o(e,"pending")}updateMutationState(e,t,r){this._o(e,t,r),this.ao(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(R_(this.persistenceKey,e));if(a){const o=Rh.qs(e,a);o&&(r=o.state)}}return t&&this.uo.$s(e),this.ro(),r}removeLocalQueryTarget(e){this.uo.Us(e),this.ro()}isLocalQueryTarget(e){return this.uo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(R_(this.persistenceKey,e))}updateQueryState(e,t,r){this.co(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.ao(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.lo(e)}notifyBundleLoaded(e){this.ho(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ie(Zr,"READ",e,t),t}setItem(e,t){ie(Zr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){ie(Zr,"REMOVE",e),this.storage.removeItem(e)}Gs(e){const t=e;if(t.storageArea===this.storage){if(ie(Zr,"EVENT",t.key,t.newValue),t.key===this.Hs)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const r=this.Po(t.key);return this.To(r,null)}{const r=this.Io(t.key,t.newValue);if(r)return this.To(r.clientId,r)}}else if(this.Zs.test(t.key)){if(t.newValue!==null){const r=this.Eo(t.key,t.newValue);if(r)return this.Ao(r)}}else if(this.Xs.test(t.key)){if(t.newValue!==null){const r=this.Ro(t.key,t.newValue);if(r)return this.Vo(r)}}else if(t.key===this.eo){if(t.newValue!==null){const r=this.io(t.newValue);if(r)return this.so(r)}}else if(t.key===this.Js){const r=function(o){let u=jn.le;if(o!=null)try{const d=JSON.parse(o);ve(typeof d=="number",30636,{mo:o}),u=d}catch(d){Vt(Zr,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==jn.le&&this.sequenceNumberHandler(r)}else if(t.key===this.no){const r=this.fo(t.newValue);await Promise.all(r.map(a=>this.syncEngine.po(a)))}}}else this.js.push(t)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(e,t,r){const a=new rm(this.currentUser,e,t,r),o=zA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.Qs())}ao(e){const t=zA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}lo(e){const t={clientId:this.Ks,onlineState:e};this.storage.setItem(this.eo,JSON.stringify(t))}co(e,t,r){const a=R_(this.persistenceKey,e),o=new Rh(e,t,r);this.setItem(a,o.Qs())}ho(e){const t=JSON.stringify(Array.from(e));this.setItem(this.no,t)}Po(e){const t=this.Ys.exec(e);return t?t[1]:null}Io(e,t){const r=this.Po(e);return im.qs(r,t)}Eo(e,t){const r=this.Zs.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return rm.qs(new cn(o),a,t)}Ro(e,t){const r=this.Xs.exec(e),a=Number(r[1]);return Rh.qs(a,t)}io(e){return GE.qs(e)}fo(e){return JSON.parse(e)}async Ao(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.yo(e.batchId,e.state,e.error);ie(Zr,`Ignoring mutation for non-active user ${e.user.uid}`)}Vo(e){return this.syncEngine.wo(e.targetId,e.state,e.error)}To(e,t){const r=t?this.zs.insert(e,t):this.zs.remove(e),a=this.oo(this.zs),o=this.oo(r),u=[],d=[];return o.forEach(p=>{a.has(p)||u.push(p)}),a.forEach(p=>{o.has(p)||d.push(p)}),this.syncEngine.bo(u,d).then(()=>{this.zs=r})}so(e){this.zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}oo(e){let t=xE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class dx{constructor(){this.So=new vv,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,r){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new vv,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mz{vo(e){}shutdown(){}}/**
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
 */const BA="ConnectivityMonitor";class FA{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){ie(BA,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){ie(BA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let op=null;function Ev(){return op===null?op=function(){return 268435456+Math.round(2147483648*Math.random())}():op++,"0x"+op.toString(16)}/**
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
 */const x_="RestConnection",Lz={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Uz{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${r}/databases/${a}`,this.qo=this.databaseId.database===sv?`project_id=${r}`:`project_id=${r}&database_id=${a}`}Qo(e,t,r,a,o){const u=Ev(),d=this.$o(e,t.toUriEncodedString());ie(x_,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(p,a,o);const{host:m}=new URL(d),_=gm(m);return this.Ko(e,d,p,r,_).then(v=>(ie(x_,`Received RPC '${e}' ${u}: `,v),v),v=>{throw di(x_,`RPC '${e}' ${u} failed with error: `,v,"url: ",d,"request:",r),v})}Wo(e,t,r,a,o,u){return this.Qo(e,t,r,a,o)}Uo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}$o(e,t){const r=Lz[e];return`${this.Lo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zz{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="WebChannelConnection";class Bz extends Uz{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,r,a,o){const u=Ev();return new Promise((d,p)=>{const m=new b1;m.setWithCredentials(!0),m.listenOnce(I1.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Ep.NO_ERROR:const v=m.getResponseJson();ie(bn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(v)),d(v);break;case Ep.TIMEOUT:ie(bn,`RPC '${e}' ${u} timed out`),p(new ne(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Ep.HTTP_ERROR:const w=m.getStatus();if(ie(bn,`RPC '${e}' ${u} failed with status:`,w,"response text:",m.getResponseText()),w>0){let S=m.getResponseJson();Array.isArray(S)&&(S=S[0]);const x=S==null?void 0:S.error;if(x&&x.status&&x.message){const U=function(q){const X=q.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(X)>=0?X:Q.UNKNOWN}(x.status);p(new ne(U,x.message))}else p(new ne(Q.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new ne(Q.UNAVAILABLE,"Connection failed."));break;default:me(9055,{s_:e,streamId:u,o_:m.getLastErrorCode(),__:m.getLastError()})}}finally{ie(bn,`RPC '${e}' ${u} completed.`)}});const _=JSON.stringify(a);ie(bn,`RPC '${e}' ${u} sending request:`,a),m.send(t,"POST",_,r,15)})}a_(e,t,r){const a=Ev(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=R1(),d=S1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Uo(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const _=o.join("");ie(bn,`Creating RPC '${e}' stream ${a}: ${_}`,p);const v=u.createWebChannel(_,p);let w=!1,S=!1;const x=new zz({Go:M=>{S?ie(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,M):(w||(ie(bn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),ie(bn,`RPC '${e}' stream ${a} sending:`,M),v.send(M))},zo:()=>v.close()}),U=(M,q,X)=>{M.listen(q,K=>{try{X(K)}catch(oe){setTimeout(()=>{throw oe},0)}})};return U(v,dh.EventType.OPEN,()=>{S||(ie(bn,`RPC '${e}' stream ${a} transport opened.`),x.t_())}),U(v,dh.EventType.CLOSE,()=>{S||(S=!0,ie(bn,`RPC '${e}' stream ${a} transport closed`),x.r_())}),U(v,dh.EventType.ERROR,M=>{S||(S=!0,di(bn,`RPC '${e}' stream ${a} transport errored. Name:`,M.name,"Message:",M.message),x.r_(new ne(Q.UNAVAILABLE,"The operation could not be completed")))}),U(v,dh.EventType.MESSAGE,M=>{var q;if(!S){const X=M.data[0];ve(!!X,16349);const K=X,oe=(K==null?void 0:K.error)||((q=K[0])===null||q===void 0?void 0:q.error);if(oe){ie(bn,`RPC '${e}' stream ${a} received error:`,oe);const te=oe.status;let le=function(A){const P=jt[A];if(P!==void 0)return SC(P)}(te),D=oe.message;le===void 0&&(le=Q.INTERNAL,D="Unknown error status: "+te+" with message "+oe.message),S=!0,x.r_(new ne(le,D)),v.close()}else ie(bn,`RPC '${e}' stream ${a} received:`,X),x.i_(X)}}),U(d,A1.STAT_EVENT,M=>{M.stat===J_.PROXY?ie(bn,`RPC '${e}' stream ${a} detected buffering proxy`):M.stat===J_.NOPROXY&&ie(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{x.n_()},0),x}}/**
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
 */function fx(){return typeof window<"u"?window:null}function xp(){return typeof document<"u"?document:null}/**
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
 */function bd(n){return new $6(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t,r=1e3,a=1.5,o=6e4){this.bi=e,this.timerId=t,this.u_=r,this.c_=a,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),a=Math.max(0,t-r);a>0&&ie("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,a,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="PersistentStream";class px{constructor(e,t,r,a,o,u,d,p){this.bi=e,this.R_=r,this.V_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new KE(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.m_===t&&this.B_(r,a)},r=>{e(()=>{const a=new ne(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(a)})})}B_(e,t){const r=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(a=>{r(()=>this.L_(a))}),this.stream.onMessage(a=>{r(()=>++this.p_==1?this.q_(a):this.onNext(a))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return ie(jA,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(ie(jA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fz extends px{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=Q6(this.serializer,e),r=function(o){if(!("targetChange"in o))return Te.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?Mt(u.readTime):Te.min()}(e);return this.listener.Q_(t,r)}U_(e){const t={};t.database=pv(this.serializer),t.addTarget=function(o,u){let d;const p=u.target;if(d=Yp(p)?{documents:VC(o,p)}:{query:MC(o,p).gt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=xC(o,u.resumeToken);const m=dv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Te.min())>0){d.readTime=Eu(o,u.snapshotVersion.toTimestamp());const m=dv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=W6(this.serializer,e);r&&(t.labels=r),this.F_(t)}K_(e){const t={};t.database=pv(this.serializer),t.removeTarget=e,this.F_(t)}}class jz extends px{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=Y6(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.j_(r,t)}H_(){const e={};e.database=pv(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Wh(this.serializer,r))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qz{}class Hz extends qz{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.J_=!1}Y_(){if(this.J_)throw new ne(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,r,a){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Qo(e,fv(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(Q.UNKNOWN,o.toString())})}Wo(e,t,r,a,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Wo(e,fv(t,r),a,u,d,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ne(Q.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class $z{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Vt(t),this.ea=!1):ie("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="RemoteStore";class Gz{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(u=>{r.enqueueAndForget(async()=>{ba(this)&&(ie(Oo,"Restarting streams for network reachability change."),await async function(p){const m=de(p);m.aa.add(4),await Bu(m),m.la.set("Unknown"),m.aa.delete(4),await Id(m)}(this))})}),this.la=new $z(r,a)}}async function Id(n){if(ba(n))for(const e of n.ua)await e(!0)}async function Bu(n){for(const e of n.ua)await e(!1)}function Fm(n,e){const t=de(n);t._a.has(e.targetId)||(t._a.set(e.targetId,e),WE(t)?YE(t):ju(t).b_()&&QE(t,e))}function bu(n,e){const t=de(n),r=ju(t);t._a.delete(e),r.b_()&&mx(t,e),t._a.size===0&&(r.b_()?r.v_():ba(t)&&t.la.set("Unknown"))}function QE(n,e){if(n.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ju(n).U_(e)}function mx(n,e){n.ha.Ke(e),ju(n).K_(e)}function YE(n){n.ha=new F6({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n._a.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),ju(n).start(),n.la.ta()}function WE(n){return ba(n)&&!ju(n).w_()&&n._a.size>0}function ba(n){return de(n).aa.size===0}function gx(n){n.ha=void 0}async function Kz(n){n.la.set("Online")}async function Qz(n){n._a.forEach((e,t)=>{QE(n,e)})}async function Yz(n,e){gx(n),WE(n)?(n.la.ia(e),YE(n)):n.la.set("Unknown")}async function Wz(n,e,t){if(n.la.set("Online"),e instanceof CC&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const d of o.targetIds)a._a.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a._a.delete(d),a.ha.removeTarget(d))}(n,e)}catch(r){ie(Oo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sm(n,r)}else if(e instanceof Cp?n.ha.Xe(e):e instanceof RC?n.ha.ot(e):n.ha.nt(e),!t.isEqual(Te.min()))try{const r=await ix(n.localStore);t.compareTo(r)>=0&&await function(o,u){const d=o.ha.It(u);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const _=o._a.get(m);_&&o._a.set(m,_.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,m)=>{const _=o._a.get(p);if(!_)return;o._a.set(p,_.withResumeToken(xt.EMPTY_BYTE_STRING,_.snapshotVersion)),mx(o,p);const v=new $i(_.target,p,m,_.sequenceNumber);QE(o,v)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){ie(Oo,"Failed to raise snapshot:",r),await sm(n,r)}}async function sm(n,e,t){if(!Ta(e))throw e;n.aa.add(1),await Bu(n),n.la.set("Offline"),t||(t=()=>ix(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ie(Oo,"Retrying IndexedDB access"),await t(),n.aa.delete(1),await Id(n)})}function yx(n,e){return e().catch(t=>sm(n,t,e))}async function Fu(n){const e=de(n),t=pa(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:ra;for(;Xz(e);)try{const a=await Oz(e.localStore,r);if(a===null){e.oa.length===0&&t.v_();break}r=a.batchId,Jz(e,a)}catch(a){await sm(e,a)}_x(e)&&vx(e)}function Xz(n){return ba(n)&&n.oa.length<10}function Jz(n,e){n.oa.push(e);const t=pa(n);t.b_()&&t.W_&&t.G_(e.mutations)}function _x(n){return ba(n)&&!pa(n).w_()&&n.oa.length>0}function vx(n){pa(n).start()}async function Zz(n){pa(n).H_()}async function e5(n){const e=pa(n);for(const t of n.oa)e.G_(t.mutations)}async function t5(n,e,t){const r=n.oa.shift(),a=OE.from(r,e,t);await yx(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Fu(n)}async function n5(n,e){e&&pa(n).W_&&await async function(r,a){if(function(u){return AC(u)&&u!==Q.ABORTED}(a.code)){const o=r.oa.shift();pa(r).D_(),await yx(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Fu(r)}}(n,e),_x(n)&&vx(n)}async function qA(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),ie(Oo,"RemoteStore received new credentials");const r=ba(t);t.aa.add(3),await Bu(t),r&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await Id(t)}async function Tv(n,e){const t=de(n);e?(t.aa.delete(2),await Id(t)):e||(t.aa.add(2),await Bu(t),t.la.set("Unknown"))}function ju(n){return n.Pa||(n.Pa=function(t,r,a){const o=de(t);return o.Y_(),new Fz(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{jo:Kz.bind(null,n),Jo:Qz.bind(null,n),Zo:Yz.bind(null,n),Q_:Wz.bind(null,n)}),n.ua.push(async e=>{e?(n.Pa.D_(),WE(n)?YE(n):n.la.set("Unknown")):(await n.Pa.stop(),gx(n))})),n.Pa}function pa(n){return n.Ta||(n.Ta=function(t,r,a){const o=de(t);return o.Y_(),new jz(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:Zz.bind(null,n),Zo:n5.bind(null,n),z_:e5.bind(null,n),j_:t5.bind(null,n)}),n.ua.push(async e=>{e?(n.Ta.D_(),await Fu(n)):(await n.Ta.stop(),n.oa.length>0&&(ie(Oo,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,d=new XE(e,t,u,a,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Ta(n))return new ne(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static emptySet(e){return new Zl(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=fh(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Zl;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.Ia=new lt(ce.comparator)}track(e){const t=e.doc.key,r=this.Ia.get(t);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(t):e.type===1&&r.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):me(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,r)=>{e.push(r)}),e}}class Iu{constructor(e,t,r,a,o,u,d,p,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new Iu(e,t,Zl.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class i5{constructor(){this.queries=$A(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,r){const a=de(t),o=a.queries;a.queries=$A(),o.forEach((u,d)=>{for(const p of d.Ra)p.onError(r)})})(this,new ne(Q.ABORTED,"Firestore shutting down"))}}function $A(){return new rs(n=>hC(n),_d)}async function JE(n,e){const t=de(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.Va()&&e.ma()&&(r=2):(o=new r5,r=e.ma()?0:1);try{switch(r){case 0:o.Aa=await t.onListen(a,!0);break;case 1:o.Aa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=qu(u,`Initialization of query '${Fl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,o),o.Ra.push(e),e.ga(t.onlineState),o.Aa&&e.pa(o.Aa)&&eT(t)}async function ZE(n,e){const t=de(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.Ra.indexOf(e);u>=0&&(o.Ra.splice(u,1),o.Ra.length===0?a=e.ma()?0:1:!o.Va()&&e.ma()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function s5(n,e){const t=de(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const d of u.Ra)d.pa(a)&&(r=!0);u.Aa=a}}r&&eT(t)}function a5(n,e,t){const r=de(n),a=r.queries.get(e);if(a)for(const o of a.Ra)o.onError(t);r.queries.delete(e)}function eT(n){n.fa.forEach(e=>{e.next()})}var wv,GA;(GA=wv||(wv={})).ya="default",GA.Cache="cache";class tT{constructor(e,t,r){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new Iu(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const r=t!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=Iu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==wv.Cache}}/**
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
 */class o5{constructor(e,t){this.Ma=e,this.byteLength=t}xa(){return"metadata"in this.Ma}}/**
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
 */class KA{constructor(e){this.serializer=e}Bs(e){return li(this.serializer,e)}Ls(e){return e.metadata.exists?kC(this.serializer,e.document,!1):ht.newNoDocument(this.Bs(e.metadata.name),this.ks(e.metadata.readTime))}ks(e){return Mt(e)}}class l5{constructor(e,t,r){this.Oa=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Ex(e)}Na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ma.namedQuery)this.queries.push(e.Ma.namedQuery);else if(e.Ma.documentMetadata){this.documents.push({metadata:e.Ma.documentMetadata}),e.Ma.documentMetadata.exists||++t;const r=Be.fromString(e.Ma.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ma.document&&(this.documents[this.documents.length-1].document=e.Ma.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ba(e){const t=new Map,r=new KA(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.Bs(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||Pe()).add(o);t.set(u,d)}}return t}async complete(){const e=await kz(this.localStore,new KA(this.serializer),this.documents,this.Oa.id),t=this.Ba(this.documents);for(const r of this.queries)await Vz(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,La:this.collectionGroups,ka:e}}}function Ex(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.key=e}}class wx{constructor(e){this.key=e}}class bx{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Pe(),this.mutatedKeys=Pe(),this.Ua=fC(e),this.Ka=new Zl(this.Ua)}get Wa(){return this.qa}Ga(e,t){const r=t?t.za:new HA,a=t?t.Ka:this.Ka;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((_,v)=>{const w=a.get(_),S=vd(this.query,v)?v:null,x=!!w&&this.mutatedKeys.has(w.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let M=!1;w&&S?w.data.isEqual(S.data)?x!==U&&(r.track({type:3,doc:S}),M=!0):this.ja(w,S)||(r.track({type:2,doc:S}),M=!0,(p&&this.Ua(S,p)>0||m&&this.Ua(S,m)<0)&&(d=!0)):!w&&S?(r.track({type:0,doc:S}),M=!0):w&&!S&&(r.track({type:1,doc:w}),M=!0,(p||m)&&(d=!0)),M&&(S?(u=u.add(S),o=U?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Ka:u,za:r,ys:d,mutatedKeys:o}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const u=e.za.da();u.sort((_,v)=>function(S,x){const U=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Vt:M})}};return U(S)-U(x)}(_.type,v.type)||this.Ua(_.doc,v.doc)),this.Ha(r),a=a!=null&&a;const d=t&&!a?this.Ja():[],p=this.$a.size===0&&this.current&&!a?1:0,m=p!==this.Qa;return this.Qa=p,u.length!==0||m?{snapshot:new Iu(this.query,e.Ka,o,u,e.mutatedKeys,p===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:d}:{Ya:d}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new HA,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Pe(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const t=[];return e.forEach(r=>{this.$a.has(r)||t.push(new wx(r))}),this.$a.forEach(r=>{e.has(r)||t.push(new Tx(r))}),t}Xa(e){this.qa=e.Ns,this.$a=Pe();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return Iu.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Ia="SyncEngine";class u5{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class c5{constructor(e){this.key=e,this.tu=!1}}class h5{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new rs(d=>hC(d),_d),this.iu=new Map,this.su=new Set,this.ou=new lt(ce.comparator),this._u=new Map,this.au=new BE,this.uu={},this.cu=new Map,this.lu=No.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function d5(n,e,t=!0){const r=jm(n);let a;const o=r.ru.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.eu()):a=await Ix(r,e,t,!0),a}async function f5(n,e){const t=jm(n);await Ix(t,e,!0,!1)}async function Ix(n,e,t,r){const a=await Tu(n.localStore,Vn(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let d;return r&&(d=await nT(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&Fm(n.remoteStore,a),d}async function nT(n,e,t,r,a){n.Pu=(v,w,S)=>async function(U,M,q,X){let K=M.view.Ga(q);K.ys&&(K=await nm(U.localStore,M.query,!1).then(({documents:D})=>M.view.Ga(D,K)));const oe=X&&X.targetChanges.get(M.targetId),te=X&&X.targetMismatches.get(M.targetId)!=null,le=M.view.applyChanges(K,U.isPrimaryClient,oe,te);return bv(U,M.targetId,le.Ya),le.snapshot}(n,v,w,S);const o=await nm(n.localStore,e,!0),u=new bx(e,o.Ns),d=u.Ga(o.documents),p=wd.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,p);bv(n,t,m.Ya);const _=new u5(e,t,u);return n.ru.set(e,_),n.iu.has(t)?n.iu.get(t).push(e):n.iu.set(t,[e]),m.snapshot}async function p5(n,e,t){const r=de(n),a=r.ru.get(e),o=r.iu.get(a.targetId);if(o.length>1)return r.iu.set(a.targetId,o.filter(u=>!_d(u,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await wu(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&bu(r.remoteStore,a.targetId),Au(r,a.targetId)}).catch(Ea)):(Au(r,a.targetId),await wu(r.localStore,a.targetId,!0))}async function m5(n,e){const t=de(n),r=t.ru.get(e),a=t.iu.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),bu(t.remoteStore,r.targetId))}async function g5(n,e,t){const r=aT(n);try{const a=await function(u,d){const p=de(u),m=gt.now(),_=d.reduce((S,x)=>S.add(x.key),Pe());let v,w;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=Hn(),U=Pe();return p.Cs.getEntries(S,_).next(M=>{x=M,x.forEach((q,X)=>{X.isValidDocument()||(U=U.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,x)).next(M=>{v=M;const q=[];for(const X of d){const K=U6(X,v.get(X.key).overlayedDocument);K!=null&&q.push(new is(X.key,K,nC(K.value.mapValue),mt.exists(!0)))}return p.mutationQueue.addMutationBatch(S,m,q,d)}).next(M=>{w=M;const q=M.applyToLocalDocumentSet(v,U);return p.documentOverlayCache.saveOverlays(S,M.batchId,q)})}).then(()=>({batchId:w.batchId,changes:mC(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let m=u.uu[u.currentUser.toKey()];m||(m=new lt(Re)),m=m.insert(d,p),u.uu[u.currentUser.toKey()]=m}(r,a.batchId,t),await ss(r,a.changes),await Fu(r.remoteStore)}catch(a){const o=qu(a,"Failed to persist write");t.reject(o)}}async function Ax(n,e){const t=de(n);try{const r=await Nz(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t._u.get(o);u&&(ve(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.tu=!0:a.modifiedDocuments.size>0?ve(u.tu,14607):a.removedDocuments.size>0&&(ve(u.tu,42227),u.tu=!1))}),await ss(t,r,e)}catch(r){await Ea(r)}}function QA(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ru.forEach((o,u)=>{const d=u.view.ga(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=de(u);p.onlineState=d;let m=!1;p.queries.forEach((_,v)=>{for(const w of v.Ra)w.ga(d)&&(m=!0)}),m&&eT(p)}(r.eventManager,e),a.length&&r.nu.Q_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y5(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r._u.get(e),o=a&&a.key;if(o){let u=new lt(ce.comparator);u=u.insert(o,ht.newNoDocument(o,Te.min()));const d=Pe().add(o),p=new Td(Te.min(),new Map,new lt(Re),u,d);await Ax(r,p),r.ou=r.ou.remove(o),r._u.delete(e),sT(r)}else await wu(r.localStore,e,!1).then(()=>Au(r,e,t)).catch(Ea)}async function _5(n,e){const t=de(n),r=e.batch.batchId;try{const a=await Pz(t.localStore,e);iT(t,r,null),rT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,a)}catch(a){await Ea(a)}}async function v5(n,e,t){const r=de(n);try{const a=await function(u,d){const p=de(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let _;return p.mutationQueue.lookupMutationBatch(m,d).next(v=>(ve(v!==null,37113),_=v.keys(),p.mutationQueue.removeMutationBatch(m,v))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,_,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,_)).next(()=>p.localDocuments.getDocuments(m,_))})}(r.localStore,e);iT(r,e,t),rT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,a)}catch(a){await Ea(a)}}async function E5(n,e){const t=de(n);ba(t.remoteStore)||ie(Ia,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=de(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",p=>d.mutationQueue.getHighestUnacknowledgedBatchId(p))}(t.localStore);if(r===ra)return void e.resolve();const a=t.cu.get(r)||[];a.push(e),t.cu.set(r,a)}catch(r){const a=qu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function rT(n,e){(n.cu.get(e)||[]).forEach(t=>{t.resolve()}),n.cu.delete(e)}function iT(n,e,t){const r=de(n);let a=r.uu[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.uu[r.currentUser.toKey()]=a}}function Au(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.iu.get(e))n.ru.delete(r),t&&n.nu.Tu(r,t);n.iu.delete(e),n.isPrimaryClient&&n.au.Ur(e).forEach(r=>{n.au.containsKey(r)||Sx(n,r)})}function Sx(n,e){n.su.delete(e.path.canonicalString());const t=n.ou.get(e);t!==null&&(bu(n.remoteStore,t),n.ou=n.ou.remove(e),n._u.delete(t),sT(n))}function bv(n,e,t){for(const r of t)r instanceof Tx?(n.au.addReference(r.key,e),T5(n,r)):r instanceof wx?(ie(Ia,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,e),n.au.containsKey(r.key)||Sx(n,r.key)):me(19791,{Iu:r})}function T5(n,e){const t=e.key,r=t.path.canonicalString();n.ou.get(t)||n.su.has(r)||(ie(Ia,"New document in limbo: "+t),n.su.add(r),sT(n))}function sT(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const e=n.su.values().next().value;n.su.delete(e);const t=new ce(Be.fromString(e)),r=n.lu.next();n._u.set(r,new c5(t)),n.ou=n.ou.insert(t,r),Fm(n.remoteStore,new $i(Vn(Lu(t.path)),r,"TargetPurposeLimboResolution",jn.le))}}async function ss(n,e,t){const r=de(n),a=[],o=[],u=[];r.ru.isEmpty()||(r.ru.forEach((d,p)=>{u.push(r.Pu(p,e,t).then(m=>{var _;if((m||t)&&r.isPrimaryClient){const v=m?!m.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(m){a.push(m);const v=HE.Ps(p.targetId,m);o.push(v)}}))}),await Promise.all(u),r.nu.Q_(a),await async function(p,m){const _=de(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>j.forEach(m,w=>j.forEach(w.ls,S=>_.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>j.forEach(w.hs,S=>_.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!Ta(v))throw v;ie($E,"Failed to update sequence numbers: "+v)}for(const v of m){const w=v.targetId;if(!v.fromCache){const S=_.Ss.get(w),x=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(x);_.Ss=_.Ss.insert(w,U)}}}(r.localStore,o))}async function w5(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){ie(Ia,"User change. New user:",e.toKey());const r=await rx(t.localStore,e);t.currentUser=e,function(o,u){o.cu.forEach(d=>{d.forEach(p=>{p.reject(new ne(Q.CANCELLED,u))})}),o.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Ms)}}function b5(n,e){const t=de(n),r=t._u.get(e);if(r&&r.tu)return Pe().add(r.key);{let a=Pe();const o=t.iu.get(e);if(!o)return a;for(const u of o){const d=t.ru.get(u);a=a.unionWith(d.view.Wa)}return a}}async function I5(n,e){const t=de(n),r=await nm(t.localStore,e.query,!0),a=e.view.Xa(r);return t.isPrimaryClient&&bv(t,e.targetId,a.Ya),a}async function A5(n,e){const t=de(n);return ox(t.localStore,e).then(r=>ss(t,r))}async function S5(n,e,t,r){const a=de(n),o=await function(d,p){const m=de(d),_=de(m.mutationQueue);return m.persistence.runTransaction("Lookup mutation documents","readonly",v=>_.Hn(v,p).next(w=>w?m.localDocuments.getDocuments(v,w):j.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await Fu(a.remoteStore):t==="acknowledged"||t==="rejected"?(iT(a,e,r||null),rT(a,e),function(d,p){de(de(d).mutationQueue).Xn(p)}(a.localStore,e)):me(6720,"Unknown batchState",{Eu:t}),await ss(a,o)):ie(Ia,"Cannot apply mutation batch with id: "+e)}async function R5(n,e){const t=de(n);if(jm(t),aT(t),e===!0&&t.hu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await YA(t,r.toArray());t.hu=!0,await Tv(t.remoteStore,!0);for(const o of a)Fm(t.remoteStore,o)}else if(e===!1&&t.hu!==!1){const r=[];let a=Promise.resolve();t.iu.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(Au(t,u),wu(t.localStore,u,!0))),bu(t.remoteStore,u)}),await a,await YA(t,r),function(u){const d=de(u);d._u.forEach((p,m)=>{bu(d.remoteStore,m)}),d.au.Kr(),d._u=new Map,d.ou=new lt(ce.comparator)}(t),t.hu=!1,await Tv(t.remoteStore,!1)}}async function YA(n,e,t){const r=de(n),a=[],o=[];for(const u of e){let d;const p=r.iu.get(u);if(p&&p.length!==0){d=await Tu(r.localStore,Vn(p[0]));for(const m of p){const _=r.ru.get(m),v=await I5(r,_);v.snapshot&&o.push(v.snapshot)}}else{const m=await ax(r.localStore,u);d=await Tu(r.localStore,m),await nT(r,Rx(m),u,!1,d.resumeToken)}a.push(d)}return r.nu.Q_(o),a}function Rx(n){return cC(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function C5(n){return function(t){return de(de(t).persistence).us()}(de(n).localStore)}async function x5(n,e,t,r){const a=de(n);if(a.hu)return void ie(Ia,"Ignoring unexpected query state notification.");const o=a.iu.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await ox(a.localStore,dC(o[0])),d=Td.createSynthesizedRemoteEventForCurrentChange(e,t==="current",xt.EMPTY_BYTE_STRING);await ss(a,u,d);break}case"rejected":await wu(a.localStore,e,!0),Au(a,e,r);break;default:me(64155,t)}}async function D5(n,e,t){const r=jm(n);if(r.hu){for(const a of e){if(r.iu.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){ie(Ia,"Adding an already active target "+a);continue}const o=await ax(r.localStore,a),u=await Tu(r.localStore,o);await nT(r,Rx(o),u.targetId,!1,u.resumeToken),Fm(r.remoteStore,u)}for(const a of t)r.iu.has(a)&&await wu(r.localStore,a,!1).then(()=>{bu(r.remoteStore,a),Au(r,a)}).catch(Ea)}}function jm(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ax.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=y5.bind(null,e),e.nu.Q_=s5.bind(null,e.eventManager),e.nu.Tu=a5.bind(null,e.eventManager),e}function aT(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v5.bind(null,e),e}function P5(n,e,t){const r=de(n);(async function(o,u,d){try{const p=await u.getMetadata();if(await function(S,x){const U=de(S),M=Mt(x.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",q=>U.ci.getBundleMetadata(q,x.id)).then(q=>!!q&&q.createTime.compareTo(M)>=0)}(o.localStore,p))return await u.close(),d._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(p)),Promise.resolve(new Set);d._updateProgress(Ex(p));const m=new l5(p,o.localStore,u.serializer);let _=await u.du();for(;_;){const w=await m.Na(_);w&&d._updateProgress(w),_=await u.du()}const v=await m.complete();return await ss(o,v.ka,void 0),await function(S,x){const U=de(S);return U.persistence.runTransaction("Save bundle","readwrite",M=>U.ci.saveBundleMetadata(M,x))}(o.localStore,p),d._completeWith(v.progress),Promise.resolve(v.La)}catch(p){return di(Ia,`Loading bundle failed with ${p}`),d._failWith(p),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Xh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return nx(this.persistence,new tx,e.initialUser,this.serializer)}Ru(e){return new FE(Bm.Ei,this.serializer)}Au(e){return new dx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xh.provider={build:()=>new Xh};class N5 extends Xh{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){ve(this.persistence.referenceDelegate instanceof tm,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new YC(r,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new FE(r=>tm.Ei(r,t),this.serializer)}}class Cx extends Xh{constructor(e,t,r){super(),this.gu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.gu.initialize(this,e),await aT(this.gu.syncEngine),await Fu(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(e){return nx(this.persistence,new tx,e.initialUser,this.serializer)}mu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new YC(r,e.asyncQueue,t)}fu(e,t){const r=new FU(t,this.persistence);return new BU(e.asyncQueue,r)}Ru(e){const t=qE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new jE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,fx(),xp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(e){return new dx}}class O5 extends Cx{constructor(e,t){super(e,t,!1),this.gu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.gu.syncEngine;this.sharedClientState instanceof C_&&(this.sharedClientState.syncEngine={yo:S5.bind(null,t),wo:x5.bind(null,t),bo:D5.bind(null,t),us:C5.bind(null,t),po:A5.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ki(async r=>{await R5(this.gu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Au(e){const t=fx();if(!C_.C(t))throw new ne(Q.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=qE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new C_(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Jh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>QA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=w5.bind(null,this.syncEngine),await Tv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new i5}()}createDatastore(e){const t=bd(e.databaseInfo.databaseId),r=function(o){return new Bz(o)}(e.databaseInfo);return function(o,u,d,p){return new Hz(o,u,d,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,d){return new Gz(r,a,o,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>QA(this.syncEngine,t,0),function(){return FA.C()?new FA:new Mz}())}createSyncEngine(e,t){return function(a,o,u,d,p,m,_){const v=new h5(a,o,u,d,p,m);return _&&(v.hu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=de(a);ie(Oo,"RemoteStore shutting down."),o.aa.add(5),await Bu(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Jh.provider={build:()=>new Jh};function WA(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class qm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class k5{constructor(e,t){this.wu=e,this.serializer=t,this.metadata=new _n,this.buffer=new Uint8Array,this.bu=function(){return new TextDecoder("utf-8")}(),this.Su().then(r=>{r&&r.xa()?this.metadata.resolve(r.Ma.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ma)}`))},r=>this.metadata.reject(r))}close(){return this.wu.cancel()}async getMetadata(){return this.metadata.promise}async du(){return await this.getMetadata(),this.Su()}async Su(){const e=await this.Du();if(e===null)return null;const t=this.bu.decode(e),r=Number(t);isNaN(r)&&this.vu(`length string (${t}) is not valid number`);const a=await this.Cu(r);return new o5(JSON.parse(a),e.length+r)}Fu(){return this.buffer.findIndex(e=>e===123)}async Du(){for(;this.Fu()<0&&!await this.Mu(););if(this.buffer.length===0)return null;const e=this.Fu();e<0&&this.vu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cu(e){for(;this.buffer.length<e;)await this.Mu()&&this.vu("Reached the end of bundle when more is expected.");const t=this.bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}vu(e){throw this.wu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Mu(){const e=await this.wu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V5{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ne(Q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=de(a),d={documents:o.map(v=>Yh(u.serializer,v))},p=await u.Wo("BatchGetDocuments",u.serializer.databaseId,Be.emptyPath(),d,o.length),m=new Map;p.forEach(v=>{const w=K6(u.serializer,v);m.set(w.key.toString(),w)});const _=[];return o.forEach(v=>{const w=m.get(v.toString());ve(!!w,55234,{key:v}),_.push(w)}),_}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new zu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=ce.fromPath(r);this.mutations.push(new PE(a,this.precondition(a)))}),await async function(r,a){const o=de(r),u={writes:a.map(d=>Wh(o.serializer,d))};await o.Qo("Commit",o.serializer.databaseId,Be.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw me(50498,{xu:e.constructor.name});t=Te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new ne(Q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Te.min())?mt.exists(!1):mt.updateTime(t):mt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Te.min()))throw new ne(Q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mt.updateTime(t)}return mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class M5{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Ou=r.maxAttempts,this.y_=new KE(this.asyncQueue,"transaction_retry")}Nu(){this.Ou-=1,this.Bu()}Bu(){this.y_.E_(async()=>{const e=new V5(this.datastore),t=this.Lu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.ku(a)}))}).catch(r=>{this.ku(r)})})}Lu(e){try{const t=this.updateFunction(e);return!md(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ku(e){this.Ou>0&&this.qu(e)?(this.Ou-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bu(),Promise.resolve()))):this.deferred.reject(e)}qu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!AC(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="FirestoreClient";class L5{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=D1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{ie(ma,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(ie(ma,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function D_(n,e){n.asyncQueue.verifyOperationInProgress(),ie(ma,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await rx(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function XA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await oT(n);ie(ma,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>qA(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>qA(e.remoteStore,a)),n._onlineComponents=e}async function oT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ie(ma,"Using user provided OfflineComponentProvider");try{await D_(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Q.FAILED_PRECONDITION||a.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await D_(n,new Xh)}}else ie(ma,"Using default OfflineComponentProvider"),await D_(n,new N5(void 0));return n._offlineComponents}async function Hm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ie(ma,"Using user provided OnlineComponentProvider"),await XA(n,n._uninitializedComponentsProvider._online)):(ie(ma,"Using default OnlineComponentProvider"),await XA(n,new Jh))),n._onlineComponents}function xx(n){return oT(n).then(e=>e.persistence)}function lT(n){return oT(n).then(e=>e.localStore)}function Dx(n){return Hm(n).then(e=>e.remoteStore)}function uT(n){return Hm(n).then(e=>e.syncEngine)}function U5(n){return Hm(n).then(e=>e.datastore)}async function Su(n){const e=await Hm(n),t=e.eventManager;return t.onListen=d5.bind(null,e.syncEngine),t.onUnlisten=p5.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=f5.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=m5.bind(null,e.syncEngine),t}function z5(n){return n.asyncQueue.enqueue(async()=>{const e=await xx(n),t=await Dx(n);return e.setNetworkEnabled(!0),function(a){const o=de(a);return o.aa.delete(0),Id(o)}(t)})}function B5(n){return n.asyncQueue.enqueue(async()=>{const e=await xx(n),t=await Dx(n);return e.setNetworkEnabled(!1),async function(a){const o=de(a);o.aa.add(0),await Bu(o),o.la.set("Offline")}(t)})}function F5(n,e){const t=new _n;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await function(m,_){const v=de(m);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,_))}(a,o);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new ne(Q.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const p=qu(d,`Failed to get document '${o} from cache`);u.reject(p)}}(await lT(n),e,t)),t.promise}function Px(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const _=new qm({next:w=>{_.yu(),u.enqueueAndForget(()=>ZE(o,v));const S=w.docs.has(d);!S&&w.fromCache?m.reject(new ne(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&p&&p.source==="server"?m.reject(new ne(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new tT(Lu(d.path),_,{includeMetadataChanges:!0,Fa:!0});return JE(o,v)}(await Su(n),n.asyncQueue,e,t,r)),r.promise}function j5(n,e){const t=new _n;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await nm(a,o,!0),p=new bx(o,d.Ns),m=p.Ga(d.documents),_=p.applyChanges(m,!1);u.resolve(_.snapshot)}catch(d){const p=qu(d,`Failed to execute query '${o} against cache`);u.reject(p)}}(await lT(n),e,t)),t.promise}function Nx(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const _=new qm({next:w=>{_.yu(),u.enqueueAndForget(()=>ZE(o,v)),w.fromCache&&p.source==="server"?m.reject(new ne(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new tT(d,_,{includeMetadataChanges:!0,Fa:!0});return JE(o,v)}(await Su(n),n.asyncQueue,e,t,r)),r.promise}function q5(n,e){const t=new qm(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).fa.add(o),o.next()}(await Su(n),t)),()=>{t.yu(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).fa.delete(o)}(await Su(n),t))}}function H5(n,e,t,r){const a=function(u,d){let p;return p=typeof u=="string"?_E().encode(u):u,function(_,v){return new k5(_,v)}(function(_,v){if(_ instanceof Uint8Array)return WA(_,v);if(_ instanceof ArrayBuffer)return WA(new Uint8Array(_),v);if(_ instanceof ReadableStream)return _.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(p),d)}(t,bd(e));n.asyncQueue.enqueueAndForget(async()=>{P5(await uT(n),a,r)})}function $5(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=de(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.ci.getNamedQuery(u,a))}(await lT(n),e))}/**
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
 */function Ox(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const JA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(n,e,t){if(!t)throw new ne(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function kx(n,e,t,r){if(e===!0&&r===!0)throw new ne(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ZA(n){if(!ce.isDocumentKey(n))throw new ne(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function eS(n){if(ce.isDocumentKey(n))throw new ne(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $m(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":me(12329,{type:typeof n})}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ne(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$m(n);throw new ne(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Vx(n,e){if(e<=0)throw new ne(Q.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Mx="firestore.googleapis.com",tS=!0;class nS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mx,this.ssl=tS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:tS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$C;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dz)throw new ne(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ox((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ne(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ne(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ne(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ad{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xU;switch(r.type){case"firstParty":return new OU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=JA.get(t);r&&(ie("ComponentProvider","Removing Datastore"),JA.delete(t),r.terminate())}(this),Promise.resolve()}}function G5(n,e,t,r={}){var a;n=Xe(n,Ad);const o=gm(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;o&&cR(`https://${p}`),u.host!==Mx&&u.host!==p&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:p,ssl:o,emulatorOptions:r});if(!sa(m,d)&&(n._setSettings(m),r.mockUserToken)){let _,v;if(typeof r.mockUserToken=="string")_=r.mockUserToken,v=cn.MOCK_USER;else{_=Qk(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new ne(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new cn(w)}n._authCredentials=new DU(new x1(_,v))}}/**
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
 */let Mn=class Lx{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lx(this.firestore,e,this._query)}},Tt=class Ux{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ux(this.firestore,e,this._key)}},ia=class zx extends Mn{constructor(e,t,r){super(e,t,Lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ce(e))}withConverter(e){return new zx(this.firestore,e,this._path)}};function Bx(n,e,...t){if(n=Ae(n),cT("collection","path",e),n instanceof Ad){const r=Be.fromString(e,...t);return eS(r),new ia(n,null,r)}{if(!(n instanceof Tt||n instanceof ia))throw new ne(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return eS(r),new ia(n.firestore,null,r)}}function K5(n,e){if(n=Xe(n,Ad),cT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new ne(Q.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mn(n,null,function(r){return new ns(Be.emptyPath(),r)}(e))}function am(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=D1.newId()),cT("doc","path",e),n instanceof Ad){const r=Be.fromString(e,...t);return ZA(r),new Tt(n,null,new ce(r))}{if(!(n instanceof Tt||n instanceof ia))throw new ne(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return ZA(r),new Tt(n.firestore,n instanceof ia?n.converter:null,new ce(r))}}function Fx(n,e){return n=Ae(n),e=Ae(e),(n instanceof Tt||n instanceof ia)&&(e instanceof Tt||e instanceof ia)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function jx(n,e){return n=Ae(n),e=Ae(e),n instanceof Mn&&e instanceof Mn&&n.firestore===e.firestore&&_d(n._query,e._query)&&n.converter===e.converter}/**
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
 */const rS="AsyncQueue";class iS{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new KE(this,"async_queue_retry"),this.ju=()=>{const r=xp();r&&ie(rS,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const t=xp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=xp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new _n;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Ta(e))throw e;ie(rS,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Vt("INTERNAL UNHANDLED ERROR: ",sS(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=t,t}enqueueAfterDelay(e,t,r){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const a=XE.createAndSchedule(this,e,t,r,o=>this.Xu(o));return this.Uu.push(a),a}Ju(){this.Ku&&me(47125,{ec:sS(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function sS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Q5{constructor(){this._progressObserver={},this._taskCompletionResolver=new _n,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const Y5=-1;let Lt=class extends Ad{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new iS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iS(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new ne(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qx(n),n._firestoreClient}function qx(n){var e,t,r;const a=n._freezeSettings(),o=function(d,p,m,_){return new g6(d,p,m,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Ox(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new L5(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}function W5(n,e){di("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return Hx(n,Jh.provider,{build:r=>new Cx(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function X5(n){di("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();Hx(n,Jh.provider,{build:t=>new O5(t,e.cacheSizeBytes)})}function Hx(n,e,t){if((n=Xe(n,Lt))._firestoreClient||n._terminated)throw new ne(Q.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new ne(Q.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},qx(n)}function J5(n){if(n._initialized&&!n._terminated)throw new ne(Q.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new _n;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.C())return Promise.resolve();const a=r+ex;await oi.delete(a)}(qE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Z5(n){return function(t){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>E5(await uT(t),r)),r.promise}(Sn(n=Xe(n,Lt)))}function eB(n){return z5(Sn(n=Xe(n,Lt)))}function tB(n){return B5(Sn(n=Xe(n,Lt)))}function nB(n,e){const t=Sn(n=Xe(n,Lt)),r=new Q5;return H5(t,n._databaseId,e,r),r}function rB(n,e){return $5(Sn(n=Xe(n,Lt)),e).then(t=>t?new Mn(n,null,t.query):null)}/**
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
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(xt.fromBase64String(e))}catch(t){throw new ne(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pi(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let ga=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Uo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */class hT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iB=/^__.*__$/;class sB{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new Uu(e,this.data,t,this.fieldTransforms)}}class $x{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gx(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{oc:n})}}class Km{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this._c(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Km(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:r,cc:!1});return a.lc(e),a}hc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:r,cc:!1});return a._c(),a}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return om(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(Gx(this.oc)&&iB.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class aB{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bd(e)}dc(e,t,r,a=!1){return new Km({oc:e,methodName:t,Ec:r,path:pt.emptyPath(),cc:!1,Ic:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zo(n){const e=n._freezeSettings(),t=bd(n._databaseId);return new aB(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Qm(n,e,t,r,a,o={}){const u=n.dc(o.merge||o.mergeFields?2:0,e,t,a);_T("Data must be an object, but it was:",u,r);const d=Yx(r,u);let p,m;if(o.merge)p=new qn(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const v of o.mergeFields){const w=Av(e,v,t);if(!u.contains(w))throw new ne(Q.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Xx(_,w)||_.push(w)}p=new qn(_),m=u.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,m=u.fieldTransforms;return new sB(new yn(d),p,m)}class Sd extends Uo{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Sd}}function Kx(n,e,t){return new Km({oc:3,Ec:e.settings.Ec,methodName:n._methodName,cc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class dT extends Uo{_toFieldTransform(e){return new Ed(e.path,new _u)}isEqual(e){return e instanceof dT}}class fT extends Uo{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=Kx(this,e,!0),r=this.Ac.map(o=>Bo(o,t)),a=new Co(r);return new Ed(e.path,a)}isEqual(e){return e instanceof fT&&sa(this.Ac,e.Ac)}}class pT extends Uo{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=Kx(this,e,!0),r=this.Ac.map(o=>Bo(o,t)),a=new xo(r);return new Ed(e.path,a)}isEqual(e){return e instanceof pT&&sa(this.Ac,e.Ac)}}class mT extends Uo{constructor(e,t){super(e),this.Rc=t}_toFieldTransform(e){const t=new vu(e.serializer,_C(e.serializer,this.Rc));return new Ed(e.path,t)}isEqual(e){return e instanceof mT&&this.Rc===e.Rc}}function gT(n,e,t,r){const a=n.dc(1,e,t);_T("Data must be an object, but it was:",a,r);const o=[],u=yn.empty();wa(r,(p,m)=>{const _=vT(e,p,t);m=Ae(m);const v=a.hc(_);if(m instanceof Sd)o.push(_);else{const w=Bo(m,v);w!=null&&(o.push(_),u.set(_,w))}});const d=new qn(o);return new $x(u,d,a.fieldTransforms)}function yT(n,e,t,r,a,o){const u=n.dc(1,e,t),d=[Av(e,r,t)],p=[a];if(o.length%2!=0)throw new ne(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)d.push(Av(e,o[w])),p.push(o[w+1]);const m=[],_=yn.empty();for(let w=d.length-1;w>=0;--w)if(!Xx(m,d[w])){const S=d[w];let x=p[w];x=Ae(x);const U=u.hc(S);if(x instanceof Sd)m.push(S);else{const M=Bo(x,U);M!=null&&(m.push(S),_.set(S,M))}}const v=new qn(m);return new $x(_,v,u.fieldTransforms)}function Qx(n,e,t,r=!1){return Bo(t,n.dc(r?4:3,e))}function Bo(n,e){if(Wx(n=Ae(n)))return _T("Unsupported field value:",e,n),Yx(n,e);if(n instanceof Uo)return function(r,a){if(!Gx(a.oc))throw a.Tc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Tc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const d of r){let p=Bo(d,a.Pc(u));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _C(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=gt.fromDate(r);return{timestampValue:Eu(a.serializer,o)}}if(r instanceof gt){const o=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Eu(a.serializer,o)}}if(r instanceof Gm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:xC(a.serializer,r._byteString)};if(r instanceof Tt){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Tc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ME(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof hT)return function(u,d){return{mapValue:{fields:{[AE]:{stringValue:SE},[mu]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.Tc("VectorValues must only contain numeric values.");return DE(d.serializer,m)})}}}}}}(r,a);throw a.Tc(`Unsupported field value: ${$m(r)}`)}(n,e)}function Yx(n,e){const t={};return K1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wa(n,(r,a)=>{const o=Bo(a,e.uc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Wx(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Gm||n instanceof pi||n instanceof Tt||n instanceof Uo||n instanceof hT)}function _T(n,e,t){if(!Wx(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=$m(t);throw r==="an object"?e.Tc(n+" a custom object"):e.Tc(n+" "+r)}}function Av(n,e,t){if((e=Ae(e))instanceof ga)return e._internalPath;if(typeof e=="string")return vT(n,e);throw om("Field path arguments must be of type string or ",n,!1,void 0,t)}const oB=new RegExp("[~\\*/\\[\\]]");function vT(n,e,t){if(e.search(oB)>=0)throw om(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ga(...e.split("."))._internalPath}catch{throw om(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function om(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(o||u)&&(p+=" (found",o&&(p+=` in field ${r}`),u&&(p+=` in document ${a}`),p+=")"),new ne(Q.INVALID_ARGUMENT,d+n+p)}function Xx(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Zh{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ym("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lB extends Zh{data(){return super.data()}}function Ym(n,e){return typeof e=="string"?vT(n,e):e instanceof ga?e._internalPath:e._delegate._internalPath}/**
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
 */function Jx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ne(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ET{}class Rd extends ET{}function Ks(n,e,...t){let r=[];e instanceof ET&&r.push(e),r=r.concat(t),function(o){const u=o.filter(p=>p instanceof TT).length,d=o.filter(p=>p instanceof Wm).length;if(u>1||u>0&&d>0)throw new ne(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Wm extends Rd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Wm(e,t,r)}_apply(e){const t=this._parse(e);return eD(e._query,t),new Mn(e.firestore,e.converter,hv(e._query,t))}_parse(e){const t=zo(e.firestore);return function(o,u,d,p,m,_,v){let w;if(m.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new ne(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){oS(v,_);const x=[];for(const U of v)x.push(aS(p,o,U));w={arrayValue:{values:x}}}else w=aS(p,o,v)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||oS(v,_),w=Qx(d,u,v,_==="in"||_==="not-in");return Fe.create(m,_,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function uB(n,e,t){const r=e,a=Ym("where",n);return Wm._create(a,r,t)}class TT extends ET{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new TT(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const d=o.getFlattenedFilters();for(const p of d)eD(u,p),u=hv(u,p)}(e._query,t),new Mn(e.firestore,e.converter,hv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wT extends Rd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wT(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new ne(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ne(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qh(o,u)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new ns(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function cB(n,e="asc"){const t=e,r=Ym("orderBy",n);return wT._create(r,t)}class Xm extends Rd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Xm(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,Xp(e._query,this._limit,this._limitType))}}function hB(n){return Vx("limit",n),Xm._create("limit",n,"F")}function dB(n){return Vx("limitToLast",n),Xm._create("limitToLast",n,"L")}class Jm extends Rd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Jm(e,t,r)}_apply(e){const t=Zx(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function fB(...n){return Jm._create("startAt",n,!0)}function pB(...n){return Jm._create("startAfter",n,!1)}class Zm extends Rd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zm(e,t,r)}_apply(e){const t=Zx(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function mB(...n){return Zm._create("endBefore",n,!1)}function gB(...n){return Zm._create("endAt",n,!0)}function Zx(n,e,t,r){if(t[0]=Ae(t[0]),t[0]instanceof Zh)return function(o,u,d,p,m){if(!p)throw new ne(Q.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const _=[];for(const v of Jl(o))if(v.field.isKeyField())_.push(So(u,p.key));else{const w=p.data.field(v.field);if(Om(w))throw new ne(Q.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new ne(Q.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}_.push(w)}return new fa(_,m)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=zo(n.firestore);return function(u,d,p,m,_,v){const w=u.explicitOrderBy;if(_.length>w.length)throw new ne(Q.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let x=0;x<_.length;x++){const U=_[x];if(w[x].field.isKeyField()){if(typeof U!="string")throw new ne(Q.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof U}`);if(!CE(u)&&U.indexOf("/")!==-1)throw new ne(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${U}' contains a slash.`);const M=u.path.child(Be.fromString(U));if(!ce.isDocumentKey(M))throw new ne(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${M}' is not because it contains an odd number of segments.`);const q=new ce(M);S.push(So(d,q))}else{const M=Qx(p,m,U);S.push(M)}}return new fa(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function aS(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new ne(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!CE(e)&&t.indexOf("/")!==-1)throw new ne(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Be.fromString(t));if(!ce.isDocumentKey(r))throw new ne(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return So(n,new ce(r))}if(t instanceof Tt)return So(n,t._key);throw new ne(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$m(t)}.`)}function oS(n,e){if(!Array.isArray(n)||n.length===0)throw new ne(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eD(n,e){const t=function(a,o){for(const u of a)for(const d of u.getFlattenedFilters())if(o.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ne(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bT{convertValue(e,t="none"){switch(ha(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return wa(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[mu].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>dt(u.doubleValue));return new hT(o)}convertGeoPoint(e){return new Gm(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=km(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp($h(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Be.fromString(e);ve(BC(r),9688,{name:e});const a=new ca(r.get(1),r.get(3)),o=new ce(r.popFirst(5));return a.isEqual(t)||Vt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function eg(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class yB extends bT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}/**
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
 */class go{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Zi=class extends Zh{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Ch=class extends Zi{data(e={}){return super.data(e)}},ya=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new go(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ch(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const p=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new go(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{const p=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new go(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,_=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),_=u.indexOf(d.doc.key)),{type:_B(d.type),doc:p,oldIndex:m,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function _B(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:n})}}function tD(n,e){return n instanceof Zi&&e instanceof Zi?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ya&&e instanceof ya&&n._firestore===e._firestore&&jx(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function vB(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return Px(Sn(e),n._key).then(t=>IT(e,n,t))}class Fo extends bT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function EB(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return F5(t,n._key).then(a=>new Zi(e,r,n._key,a,new go(a!==null&&a.hasLocalMutations,!0),n.converter))}function TB(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return Px(Sn(e),n._key,{source:"server"}).then(t=>IT(e,n,t))}function wB(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return Jx(n._query),Nx(t,n._query).then(a=>new ya(e,r,n,a))}function bB(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return j5(t,n._query).then(a=>new ya(e,r,n,a))}function IB(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return Nx(t,n._query,{source:"server"}).then(a=>new ya(e,r,n,a))}function lS(n,e,t){n=Xe(n,Tt);const r=Xe(n.firestore,Lt),a=eg(n.converter,e,t);return Cd(r,[Qm(zo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,mt.none())])}function uS(n,e,t,...r){n=Xe(n,Tt);const a=Xe(n.firestore,Lt),o=zo(a);let u;return u=typeof(e=Ae(e))=="string"||e instanceof ga?yT(o,"updateDoc",n._key,e,t,r):gT(o,"updateDoc",n._key,e),Cd(a,[u.toMutation(n._key,mt.exists(!0))])}function AB(n){return Cd(Xe(n.firestore,Lt),[new zu(n._key,mt.none())])}function SB(n,e){const t=Xe(n.firestore,Lt),r=am(n),a=eg(n.converter,e);return Cd(t,[Qm(zo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,mt.exists(!1))]).then(()=>r)}function nD(n,...e){var t,r,a;n=Ae(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||Iv(e[u])||(o=e[u],u++);const d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Iv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let p,m,_;if(n instanceof Tt)m=Xe(n.firestore,Lt),_=Lu(n._key.path),p={next:v=>{e[u]&&e[u](IT(m,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Xe(n,Mn);m=Xe(v.firestore,Lt),_=v._query;const w=new Fo(m);p={next:S=>{e[u]&&e[u](new ya(m,w,v,S))},error:e[u+1],complete:e[u+2]},Jx(n._query)}return function(w,S,x,U){const M=new qm(U),q=new tT(S,M,x);return w.asyncQueue.enqueueAndForget(async()=>JE(await Su(w),q)),()=>{M.yu(),w.asyncQueue.enqueueAndForget(async()=>ZE(await Su(w),q))}}(Sn(m),_,d,p)}function RB(n,e){return q5(Sn(n=Xe(n,Lt)),Iv(e)?e:{next:e})}function Cd(n,e){return function(r,a){const o=new _n;return r.asyncQueue.enqueueAndForget(async()=>g5(await uT(r),a,o)),o.promise}(Sn(n),e)}function IT(n,e,t){const r=t.docs.get(e._key),a=new Fo(n);return new Zi(n,a,e._key,r,new go(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const CB={maxAttempts:5};/**
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
 */let xB=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=zo(e)}set(e,t,r){this._verifyNotCommitted();const a=Js(e,this._firestore),o=eg(a.converter,t,r),u=Qm(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,mt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=Js(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof ga?yT(this._dataReader,"WriteBatch.update",o._key,t,r,a):gT(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Js(e,this._firestore);return this._mutations=this._mutations.concat(new zu(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ne(Q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Js(n,e){if((n=Ae(n)).firestore!==e)throw new ne(Q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class DB{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=zo(e)}get(e){const t=Js(e,this._firestore),r=new yB(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return me(24041);const o=a[0];if(o.isFoundDocument())return new Zh(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new Zh(this._firestore,r,t._key,null,t.converter);throw me(18433,{doc:o})})}set(e,t,r){const a=Js(e,this._firestore),o=eg(a.converter,t,r),u=Qm(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=Js(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof ga?yT(this._dataReader,"Transaction.update",o._key,t,r,a):gT(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=Js(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let PB=class extends DB{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Js(e,this._firestore),r=new Fo(this._firestore);return super.get(e).then(a=>new Zi(this._firestore,r,t._key,a._document,new go(!1,!1),t.converter))}};function NB(n,e,t){n=Xe(n,Lt);const r=Object.assign(Object.assign({},CB),t);return function(o){if(o.maxAttempts<1)throw new ne(Q.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,d){const p=new _n;return o.asyncQueue.enqueueAndForget(async()=>{const m=await U5(o);new M5(o.asyncQueue,m,d,u,p).Nu()}),p.promise}(Sn(n),a=>e(new PB(n,a)),r)}/**
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
 */function OB(){return new Sd("deleteField")}function kB(){return new dT("serverTimestamp")}function VB(...n){return new fT("arrayUnion",n)}function MB(...n){return new pT("arrayRemove",n)}function LB(n){return new mT("increment",n)}(function(e,t=!0){(function(a){Mu=a})(_a),la(new ci("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),d=new Lt(new PU(r.getProvider("auth-internal")),new kU(u,r.getProvider("app-check-internal")),function(m,_){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ne(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(m.options.projectId,_)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Or(zI,BI,e),Or(zI,BI,"esm2017")})();const UB="@firebase/firestore-compat",zB="0.3.47";/**
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
 */function AT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new ne("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){if(typeof Uint8Array>"u")throw new ne("unimplemented","Uint8Arrays are not available in this environment.")}function hS(){if(!p6())throw new ne("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ed{constructor(e){this._delegate=e}static fromBase64String(e){return hS(),new ed(pi.fromBase64String(e))}static fromUint8Array(e){return cS(),new ed(pi.fromUint8Array(e))}toBase64(){return hS(),this._delegate.toBase64()}toUint8Array(){return cS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(n){return BB(n,["next","error","complete"])}function BB(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FB{enableIndexedDbPersistence(e,t){return W5(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return X5(e._delegate)}clearIndexedDbPersistence(e){return J5(e._delegate)}}class rD{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ca||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&di("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){G5(this._delegate,e,t,r)}enableNetwork(){return eB(this._delegate)}disableNetwork(){return tB(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,kx("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Z5(this._delegate)}onSnapshotsInSync(e){return RB(this._delegate,e)}get app(){if(!this._appCompat)throw new ne("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ru(this,Bx(this._delegate,e))}catch(t){throw On(t,"collection()","Firestore.collection()")}}doc(e){try{return new Er(this,am(this._delegate,e))}catch(t){throw On(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nn(this,K5(this._delegate,e))}catch(t){throw On(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return NB(this._delegate,t=>e(new iD(this,t)))}batch(){return Sn(this._delegate),new sD(new xB(this._delegate,e=>Cd(this._delegate,e)))}loadBundle(e){return nB(this._delegate,e)}namedQuery(e){return rB(this._delegate,e).then(t=>t?new Nn(this,t):null)}}class tg extends bT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ed(new pi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Er.forKey(t,this.firestore,null)}}function jB(n){RU(n)}class iD{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new tg(e)}get(e){const t=yo(e);return this._delegate.get(t).then(r=>new td(this._firestore,new Zi(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=yo(e);return r?(AT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=yo(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=yo(e);return this._delegate.delete(t),this}}class sD{constructor(e){this._delegate=e}set(e,t,r){const a=yo(e);return r?(AT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=yo(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=yo(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ko{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ch(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new nd(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=ko.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new ko(e,new tg(e),t),a.set(t,o)),o}}ko.INSTANCES=new WeakMap;class Er{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tg(e)}static forPath(e,t,r){if(e.length%2!==0)throw new ne("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Er(t,new Tt(t._delegate,r,new ce(e)))}static forKey(e,t,r){return new Er(t,new Tt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ru(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ru(this.firestore,Bx(this._delegate,e))}catch(t){throw On(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ae(e),e instanceof Tt?Fx(this._delegate,e):!1}set(e,t){t=AT("DocumentReference.set",t);try{return t?lS(this._delegate,e,t):lS(this._delegate,e)}catch(r){throw On(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?uS(this._delegate,e):uS(this._delegate,e,t,...r)}catch(a){throw On(a,"updateDoc()","DocumentReference.update()")}}delete(){return AB(this._delegate)}onSnapshot(...e){const t=aD(e),r=oD(e,a=>new td(this.firestore,new Zi(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return nD(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=EB(this._delegate):(e==null?void 0:e.source)==="server"?t=TB(this._delegate):t=vB(this._delegate),t.then(r=>new td(this.firestore,new Zi(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Er(this.firestore,e?this._delegate.withConverter(ko.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function On(n,e,t){return n.message=n.message.replace(e,t),n}function aD(n){for(const e of n)if(typeof e=="object"&&!Sv(e))return e;return{}}function oD(n,e){var t,r;let a;return Sv(n[0])?a=n[0]:Sv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class td{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Er(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return tD(this._delegate,e._delegate)}}class nd extends td{data(e){const t=this._delegate.data(e);return this._delegate._converter||CU(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class Nn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new tg(e)}where(e,t,r){try{return new Nn(this.firestore,Ks(this._delegate,uB(e,t,r)))}catch(a){throw On(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nn(this.firestore,Ks(this._delegate,cB(e,t)))}catch(r){throw On(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nn(this.firestore,Ks(this._delegate,hB(e)))}catch(t){throw On(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nn(this.firestore,Ks(this._delegate,dB(e)))}catch(t){throw On(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,fB(...e)))}catch(t){throw On(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nn(this.firestore,Ks(this._delegate,pB(...e)))}catch(t){throw On(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nn(this.firestore,Ks(this._delegate,mB(...e)))}catch(t){throw On(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,gB(...e)))}catch(t){throw On(t,"endAt()","Query.endAt()")}}isEqual(e){return jx(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=bB(this._delegate):(e==null?void 0:e.source)==="server"?t=IB(this._delegate):t=wB(this._delegate),t.then(r=>new Rv(this.firestore,new ya(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=aD(e),r=oD(e,a=>new Rv(this.firestore,new ya(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return nD(this._delegate,t,r)}withConverter(e){return new Nn(this.firestore,e?this._delegate.withConverter(ko.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class qB{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new nd(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Rv{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new nd(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new qB(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new nd(this._firestore,r))})}isEqual(e){return tD(this._delegate,e._delegate)}}class Ru extends Nn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Er(this.firestore,e):null}doc(e){try{return e===void 0?new Er(this.firestore,am(this._delegate)):new Er(this.firestore,am(this._delegate,e))}catch(t){throw On(t,"doc()","CollectionReference.doc()")}}add(e){return SB(this._delegate,e).then(t=>new Er(this.firestore,t))}isEqual(e){return Fx(this._delegate,e._delegate)}withConverter(e){return new Ru(this.firestore,e?this._delegate.withConverter(ko.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function yo(n){return Xe(n,Tt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(...e){this._delegate=new ga(...e)}static documentId(){return new ST(pt.keyField().canonicalString())}isEqual(e){return e=Ae(e),e instanceof ga?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static serverTimestamp(){const e=kB();return e._methodName="FieldValue.serverTimestamp",new ho(e)}static delete(){const e=OB();return e._methodName="FieldValue.delete",new ho(e)}static arrayUnion(...e){const t=VB(...e);return t._methodName="FieldValue.arrayUnion",new ho(t)}static arrayRemove(...e){const t=MB(...e);return t._methodName="FieldValue.arrayRemove",new ho(t)}static increment(e){const t=LB(e);return t._methodName="FieldValue.increment",new ho(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const HB={Firestore:rD,GeoPoint:Gm,Timestamp:gt,Blob:ed,Transaction:iD,WriteBatch:sD,DocumentReference:Er,DocumentSnapshot:td,Query:Nn,QueryDocumentSnapshot:nd,QuerySnapshot:Rv,CollectionReference:Ru,FieldPath:ST,FieldValue:ho,setLogLevel:jB,CACHE_SIZE_UNLIMITED:Y5};function $B(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},HB)))}/**
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
 */function GB(n){$B(n,(e,t)=>new rD(e,t,new FB)),n.registerVersion(UB,zB)}GB(Nu);const KB={apiKey:"AIzaSyCXculvcQzlNePEH0Q10cCJ8TRIoxNt2dY",authDomain:"mini-blog-576f3.firebaseapp.com",projectId:"mini-blog-576f3",storageBucket:"mini-blog-576f3.firebasestorage.app",messagingSenderId:"825218991108",appId:"1:825218991108:web:fab171584180d99295e151"},QB=Nu.initializeApp(KB),Kl=QB.firestore(),YB=_e.div`
  display: flex;
  flex-direction: column;
  padding: 128px 100px;
`,WB=_e.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 32px;
`,XB=_e.div`
  display: flex;
  gap: 56px;
`;function JB(n){const e=sd(),[t,r]=W.useState([]),[a,o]=W.useState({}),[u,d]=W.useState("전체보기");W.useEffect(()=>{let m=[];Kl.collection("post").get().then(_=>{_.forEach(S=>{m.push(S.data())});const v=m.sort((S,x)=>(x.timestamp??0)-(S.timestamp??0));r(v);const w={};v.forEach(S=>{const x=S.category??"일상";w[x]=(w[x]||0)+1}),w.전체보기=v.length,o(w)})},[]);const p=u==="전체보기"?t:t.filter(m=>m.category===u);return $.jsxs("div",{children:[$.jsx(Fv,{id:"yeahz"}),$.jsxs(YB,{children:[$.jsx(vk,{id:"yeahz"}),$.jsx(WB,{children:$.jsx(Zs,{title:"새 글 작성",backgroundColor:"#060303",color:"#fff",onClick:m=>{e("/write")}})}),$.jsxs(XB,{children:[$.jsx(bk,{selectedCategory:u,onCategoryChange:d,categoryCounts:a}),$.jsx(Lk,{posts:p,itemClicked:m=>{e(`/post/${m.id}`)}})]})]})]})}const ZB=_e.textarea`
  width: 100%;
  resize: none;
  overflow-x: hidden;
  overflow-y: ${n=>n.height<=88?"hidden":"scroll"};
  height: ${n=>n.height}px;
  padding: 20px;

  border: none;
  border-bottom: ${n=>n.borderBottom};

  font-size: ${n=>n.height<=88?"40px":"18px"};
  font-weight: ${n=>n.height<=88?"600":"400"};
  line-height: ${n=>n.height<=88?"100%":"150%"};
  letter-spacing: ${n=>n.height<=88?"-1px":"-0.45px"};
  color: #060303;
  font-family: "Pretendard Variable";

  &:focus {
    outline: none;
    color: var(--Color-gray-gray100, #060303);
  }
  &::placeholder {
    color: #afafb5;
    font-size: ${n=>n.height<=88?"40px":"18px"};
    font-weight: ${n=>n.height<=88?"600":"400"};
    letter-spacing: ${n=>n.height<=88?"-1px":"-0.45px"};
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #060303;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;function Cv(n){const{height:e,value:t,onChange:r,placeholder:a,borderBottom:o}=n;return $.jsx(ZB,{height:e||40,value:t,borderBottom:o||"none",onChange:r,placeholder:a||"placeholder"})}const e9=_e.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: "Pretendard Variable";

  & > .tags {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  & > .tags > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    height: 32px;
    padding: 0 12px;
    background: var(--Color-gray-gray20, #f0f0f2);
    cursor: pointer;

    font-weight: 600;
    color: var(--Color-gray-gray100, #060303);
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.35px;
  }

  & > input {
    color: var(--Color-gray-gray100, #060303);
    font-size: 18px;
    letter-spacing: -0.45px;
    padding: 0 8px;
    border: none;
  }

  & > input:focus {
    outline: none;
    color: var(--Color-gray-gray100, #060303);
  }

  & > input::placeholder {
    color: var(--Color-gray-gray60, #8d8d94);
  }
`;function t9(n){const{hashtags:e,setHashtags:t,onInputClick:r}=n,[a,o]=W.useState(""),u=p=>{p.key==="Enter"&&a.trim()!==""&&(p.preventDefault(),e.includes(a.trim())||t([...e,a.trim()]),o(""))},d=p=>{t(e.filter(m=>m!==p))};return $.jsxs(e9,{children:[$.jsx("div",{className:"tags",children:e.length>0&&e.map((p,m)=>$.jsxs("span",{onClick:()=>d(p),children:["# ",p," ",$.jsx("img",{src:"./x.svg",alt:""})]},m))}),$.jsx("input",{type:"text",placeholder:"# 태그를 입력하세요",onClick:r,value:a,onChange:p=>o(p.target.value),onKeyDown:u})]})}const n9=_e.div`
  position: relative;
  width: 100%;
  color: var(--Color-gray-gray100, #060303);
  font-family: "Pretendard Variable";
`,r9=_e.div`
  padding: 12px;
  border: 1px solid #d8d8d8;
  background-color: #fff;
  cursor: pointer;

  background: url("./chevron-down.svg") no-repeat right 12px center;
  background-size: 16px;
`,i9=_e.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  background-color: #fff;
  border: 1px solid #d8d8d8;
  z-index: 10;
  list-style: none;

  li {
    padding: 12px;
    cursor: pointer;

    &:hover {
      background-color: #fff4f1;
      font-weight: 600;
      color: #ff4b25;
    }

    &.selected {
      font-weight: 600;
      color: #ff4b25;
    }
  }
`;function s9(n){const{options:e,value:t,onChange:r}=n,[a,o]=W.useState(!1),u=d=>{r(d),o(!1)};return $.jsxs(n9,{children:[$.jsx(r9,{onClick:()=>o(!a),children:t}),a&&$.jsx(i9,{children:e.map(d=>$.jsx("li",{onClick:()=>u(d.name),className:d.name===t?"selected":"",children:d.name},d.name))})]})}const a9=_e.div`
  display: ${n=>n.show?"flex":"none"};
  width: 30vw;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  gap: 36px;

  position: fixed;
  bottom: 100px;
  right: 76px;

  border: 1px solid var(--Color-gray-gray50, #afafb5);
  background: #fff;
  font-family: "Pretendard Variable";
  z-index: 100;
`,o9=_e.div`
  display: ${n=>n.show?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
`,l9=_e.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,u9=_e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;
  border: 1px solid #d8d8d8;
  cursor: pointer;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }
  & > p {
    color: var(--Color-gray-gray80, #4e4e54);
    font-size: 16px;
    letter-spacing: -0.4px;
  }
`,c9=_e.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > p {
    color: var(--Color-gray-gray100, #060303);
    font-size: 16px;
    letter-spacing: -0.4px;
  }
`,h9=_e.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,d9=_e.div`
  position: absolute;
  margin-top: 10px;
  left: 0;
  padding: 8px 16px;
  background: var(--Color-gray-gray80, #4e4e54);
  color: var(--Color-gray-gray10, #f9f9fa);
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.35px;

  opacity: ${n=>n.show?1:0};
  transform: translateY(${n=>n.show?"0":"10px"});
  transition: opacity 0.3s ease, transform 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 14px;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #4e4e54 transparent;
  }
`,f9=_e.div`
  display: flex;
  justify-content: end;
`;function p9(n){const{show:e,category:t,setCategory:r,categories:a,hashtags:o,setHashtags:u,image:d,setImage:p,onUpload:m,onClose:_}=n,v=W.useRef(),w=q=>{const X=q.target.files[0];if(!X)return;let K=new FileReader;K.readAsDataURL(X),K.onload=oe=>{p(oe.target.result)}},S=()=>{v.current.click()},[x,U]=W.useState(!1),M=()=>{U(!0),setTimeout(()=>{U(!1)},3e3)};return $.jsxs("div",{children:[$.jsx(o9,{show:e,onClick:_}),$.jsxs(a9,{show:e,children:[$.jsxs(l9,{children:[$.jsx("p",{children:"대표 이미지"}),$.jsx(u9,{onClick:S,children:d?$.jsx("img",{src:d,alt:""}):$.jsxs($.Fragment,{children:[$.jsx("img",{src:"./img.svg",alt:"업로드 아이콘",style:{width:"50px"}}),$.jsx("p",{children:"이미지 업로드"})]})}),$.jsx("input",{type:"file",accept:"image/*",onChange:w,ref:v,style:{display:"none"}})]}),$.jsxs(c9,{children:[$.jsx("p",{children:"카테고리"}),$.jsx(s9,{options:a,value:t,onChange:q=>r(q)})]}),$.jsxs(h9,{children:[$.jsx("p",{children:"해시태그"}),$.jsxs("div",{style:{position:"relative"},children:[$.jsx(t9,{hashtags:o,setHashtags:u,onInputClick:M}),$.jsx(d9,{show:x,children:"엔터를 눌러 태그를 추가하세요"})]})]}),$.jsxs(f9,{children:[$.jsx(Zs,{title:"닫기",backgroundColor:"#fff",color:"#060303",onClick:_}),$.jsx(Zs,{title:"업로드",width:"110px",backgroundColor:"#fff",border:"1px solid #FF4B25",color:"#FF4B25",icon:$.jsx("img",{src:"./Check.svg",alt:""}),onClick:m})]})]})]})}const m9=_e.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  width: 100%;
  height: 80px;
  padding: 0px 100px;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;

  background: var(--Color-gray-gray100, #060303);
`,g9=_e.div`
  display: flex;
  flex-direction: column;
  padding: 130px 100px 80px;
`;function y9(n){const e=sd(),[t,r]=W.useState(""),[a,o]=W.useState(null),[u,d]=W.useState(""),[p,m]=W.useState("일상"),[_,v]=W.useState([]),[w,S]=W.useState(!1),x=[{name:"일상"},{name:"공부"},{name:"여행"},{name:"기타"}],U=new Date,M=U.getFullYear(),q=(U.getMonth()+1).toString().padStart(2,"0"),X=U.getDate().toString().padStart(2,"0"),K=`${M}.${q}.${X}`,oe=()=>{if(!t.trim()){alert("제목을 입력해주세요.");return}if(!u.trim()){alert("내용을 입력해주세요.");return}let te=new Date().getTime().toString();Kl.collection("post").doc(te).set({id:te,title:t,content:u,image:a,category:p,hashtags:_,time:K,timestamp:te,comments:[]}).then(()=>{alert("글이 등록되었습니다."),e("/")})};return $.jsxs("div",{children:[$.jsx(Fv,{id:"yeahz"}),$.jsxs(g9,{children:[$.jsx(Cv,{placeholder:"제목을 입력하세요",height:"88",borderBottom:"1px solid #D8D8D8",value:t,onChange:te=>r(te.target.value)}),$.jsx(Cv,{placeholder:"내용을 입력하세요",height:"600",value:u,onChange:te=>d(te.target.value)})]}),$.jsx(p9,{show:w,category:p,setCategory:m,categories:x,hashtags:_,setHashtags:v,image:a,setImage:o,onUpload:oe,onClose:()=>S(!1)}),$.jsxs(m9,{children:[$.jsx(Zs,{title:"임시 저장",backgroundColor:"#fff",color:"#060303"}),$.jsx(Zs,{title:"작성 완료",backgroundColor:"#FF4B25",color:"#fff",onClick:()=>S(!0)})]})]})}const _9=_e.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 18px 14px;
  background: #fff;
  border-bottom: 1px solid #d8d8d8;
  font-family: "Pretendard Variable";

  & > .profile {
    display: flex;
    width: 36px;
    flex-shrink: 0;
  }

  & > .content {
    flex: 1;
  }

  & > .moreBtn {
    display: flex;
    flex-shrink: 0;
    cursor: pointer;
  }
`,v9=_e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border: solid 1px #d4d4d4;
  border-radius: 100px;
`,E9=_e.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,T9=_e.div`
  display: flex;
  align-items: center;
  gap: 6px;

  color: #333;
  font-size: 16px;
  letter-spacing: -0.4px;

  & > .username {
    font-weight: 600;
  }
  & > p:nth-child(2) {
    font-weight: 700;
    line-height: 10px;
  }
  & > p:nth-child(3) {
    color: #777;
    font-size: 14px;
  }
`,w9=_e.p`
  color: #060303;
  font-size: 18px;
  letter-spacing: -0.45px;
`,b9=_e.div`
  position: absolute;
  top: 50px;
  right: 20px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--Color-gray-gray50, #afafb5);
  background: var(--Color-gray-gray0, #fff);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.04);
  z-index: 100;

  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    font-size: 14px;
    text-align: center;
    color: #333;
    cursor: pointer;
  }
  & > p:hover {
    background-color: var(--Color-gray-gray10, #f4f4f5);
    transition: all 0.3s ease-in;
  }
`;function I9(n){const{comment:e,onDelete:t}=n,[r,a]=W.useState(!1);let o="time";if(e.createdAt){const u=new Date(e.createdAt),d=u.getFullYear(),p=(u.getMonth()+1).toString().padStart(2,"0"),m=u.getDate().toString().padStart(2,"0"),_=u.getHours(),v=u.getMinutes().toString().padStart(2,"0"),w=_>=12?"오후":"오전",S=_%12===0?12:_%12;o=`${d}.${p}.${m} ${w} ${S}:${v}`}return $.jsxs(_9,{children:[$.jsx(v9,{children:$.jsx("img",{src:"/wda-miniblog/UserProfile.svg",alt:"",className:"profile"})}),$.jsxs(E9,{className:"content",children:[$.jsxs(T9,{children:[$.jsx("p",{className:"username",children:"user"}),$.jsx("img",{src:"/wda-miniblog/dot.svg",alt:"img"}),$.jsx("p",{children:o})]}),$.jsx(w9,{children:$.jsx("p",{children:e.content})})]}),$.jsx("img",{src:"/wda-miniblog/MoreButton.svg",alt:"",className:"moreBtn",onClick:()=>a(u=>!u)}),r&&$.jsxs(b9,{children:[$.jsx("p",{children:"수정"}),$.jsx("p",{onClick:()=>{window.confirm("댓글을 삭제하시겠습니까?")&&t(e.id)},children:"삭제"})]})]})}const A9=_e.div`
  display: flex;
  margin-bottom: 16px;

  font-size: 16px;
  letter-spacing: -0.4px;
  color: #333;
  font-family: "Pretendard Variable";
`,S9=_e.p`
  display: flex;
  margin-left: 4px;
  font-weight: 600;
`,R9=_e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 30px 0;

  font-family: Pretendard;
  color: #777;
`,C9=_e.img`
  width: 48px;
  height: 48px;
`,x9=_e.p`
  font-size: 16px;
  letter-spacing: -0.4px;
`;function D9(n){const{comments:e,onDelete:t}=n;return $.jsxs("div",{children:[$.jsxs(A9,{children:[$.jsx("p",{children:"댓글"}),$.jsx(S9,{children:e.length}),$.jsx("p",{children:"개"})]}),e.length===0?$.jsxs(R9,{children:[$.jsx(C9,{src:"/wda-miniblog/NoCommentIcon.svg",alt:"댓글 없음"}),$.jsx(x9,{children:"아직 댓글이 없어요"})]}):e.map(r=>$.jsx(I9,{comment:r,onDelete:t},r.id))]})}const P9=_e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Pretendard Variable";
`,N9=_e.div`
  color: var(--Color-gray-gray80, #4e4e54);
  font-size: 16px;
  margin-bottom: 16px;
  letter-spacing: -0.4px;
  text-align: center;
`,O9=_e.h3`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 32px;
  color: var(--Color-gray-gray100, #060303);
  letter-spacing: -1px;
  text-align: center;
`,k9=_e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-bottom: 40px;
  color: var(--Color-gray-gray100, #060303);
  font-size: 16px;
  letter-spacing: -0.4px;
`,V9=_e.div`
  display: flex;
  width: 100%;
  justify-content: center;
`,M9=_e.div`
  width: 100%;
  color: var(--Color-gray-gray100, #060303);
  font-size: 16px;
  letter-spacing: -0.4px;
  line-height: 180%;

  padding: 40px 0;
  white-space: pre-line;
`,L9=_e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;

  & > span {
    display: flex;
    height: 32px;
    padding: 0px 12px;
    justify-content: center;
    align-items: center;
    background: var(--Color-gray-gray20, #f0f0f2);
    cursor: pointer;

    color: var(--Color-gray-gray90, #2c2c30);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.35px;
  }
`;function U9(n){const{post:e}=n;return $.jsxs(P9,{children:[$.jsx(N9,{children:e.category}),$.jsx(O9,{children:e.title}),$.jsxs(k9,{children:[$.jsx("p",{children:"yeahz"}),$.jsx("img",{src:"/wda-miniblog/dot.svg",alt:"img"}),e.time||"시간"]}),$.jsx(V9,{children:$.jsx("img",{src:e.image,alt:""})}),$.jsx(M9,{children:e.content}),$.jsx(L9,{children:e.hashtags&&e.hashtags.map(t=>$.jsxs("span",{children:["# ",t]},t))})]})}const z9=_e.div`
  display: flex;
  flex-direction: column;
  padding: 160px 24% 100px;
  gap: 54px;
  font-family: "Pretendard Variable";
`,B9=_e.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
`,F9=_e.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,j9=_e.div`
  display: flex;
  border: solid 1px #d4d4d4;
`,q9=_e.div`
  display: flex;
  justify-content: end;
`,H9=_e.div`
  display: flex;
  justify-content: end;
  gap: 12px;

  & > button:hover {
    background-color: var(--Color-gray-gray10, #f4f4f5);
    transition: all 0.3s ease-in;
  }
`;function $9(n){const{id:e}=_N(),t=sd(),[r,a]=W.useState({id:0,title:"",content:"",category:"",hashtags:"",comments:[]});W.useEffect(()=>{Kl.collection("post").doc(e).get().then(_=>{a(_.data())})},[]);const o=()=>{if(!u.trim()){alert("댓글을 입력해주세요.");return}let _=new Date().getTime().toString(),v=r.comments;v.push({id:`${e}_${_}`,content:u,createdAt:new Date().toISOString()}),Kl.collection("post").doc(e).update({comments:v}).then(()=>{d("")})},[u,d]=W.useState(""),p=()=>{window.confirm("정말 삭제하시겠습니까?")&&Kl.collection("post").doc(e).delete().then(()=>{alert("삭제되었습니다."),t("/")})};W.useEffect(()=>{window.scrollTo(0,0)},[]);const m=_=>{const v=r.comments.filter(w=>w.id!==_);Kl.collection("post").doc(e).update({comments:v}).then(()=>{alert("댓글이 삭제되었습니다."),a({...r,comments:v})})};return $.jsxs("div",{children:[$.jsx(Fv,{id:"yeahz"}),$.jsxs(z9,{children:[$.jsx(U9,{post:r}),$.jsxs(H9,{children:[$.jsx(Zs,{title:"수정",backgroundColor:"#fff",color:"#4E4E54",width:"60px"}),$.jsx(Zs,{title:"삭제",backgroundColor:"#fff",color:"#4E4E54",width:"60px",onClick:p})]}),$.jsxs(B9,{children:[$.jsx(D9,{comments:r.comments,onDelete:m}),$.jsxs(F9,{children:[$.jsx(j9,{children:$.jsx(Cv,{placeholder:"댓글을 입력하세요",height:"140",border:"1px solid #FF4B25",value:u,onChange:_=>{d(_.target.value)}})}),$.jsx(q9,{children:$.jsx(Zs,{title:"댓글 작성",backgroundColor:"#060303",color:"#fff",onClick:_=>{o()}})})]})]})]})]})}jP.createRoot(document.getElementById("root")).render($.jsx(nO,{basename:"/wda-miniblog",children:$.jsxs(ON,{children:[$.jsx(lp,{index:!0,element:$.jsx(JB,{})}),$.jsx(lp,{path:"write",element:$.jsx(y9,{})}),$.jsx(lp,{path:"post/:id",element:$.jsx($9,{})})]})}));defineConfig({plugins:[react()],base:"/wda-miniblog"});
