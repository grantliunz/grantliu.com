(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{8679:function(t,e,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(t){return n.isMemo(t)?i:s[t.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(m){var o=d(r);o&&o!==m&&t(e,o,n)}var i=u(r);f&&(i=i.concat(f(r)));for(var s=c(e),y=c(r),h=0;h<i.length;++h){var g=i[h];if(!a[g]&&!(n&&n[g])&&!(y&&y[g])&&!(s&&s[g])){var v=p(r,g);try{l(e,g,v)}catch(b){}}}}return e}},3096:function(t,e,r){var n="Expected a function",o=0/0,a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,f="object"==typeof self&&self&&self.Object===Object&&self,p=u||f||Function("return this")(),d=Object.prototype.toString,m=Math.max,y=Math.min,h=function(){return p.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||(r=e)&&"object"==typeof r&&"[object Symbol]"==d.call(e))return o;if(g(t)){var e,r,n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var u=s.test(t);return u||c.test(t)?l(t.slice(2),u?2:8):i.test(t)?o:+t}t.exports=function(t,e,r){var o=!0,a=!0;if("function"!=typeof t)throw TypeError(n);return g(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),function(t,e,r){var o,a,i,s,c,l,u=0,f=!1,p=!1,d=!0;if("function"!=typeof t)throw TypeError(n);function b(e){var r=o,n=a;return o=a=void 0,u=e,s=t.apply(n,r)}function w(t){var r=t-l,n=t-u;return void 0===l||r>=e||r<0||p&&n>=i}function S(){var t,r,n,o=h();if(w(o))return x(o);c=setTimeout(S,(t=o-l,r=o-u,n=e-t,p?y(n,i-r):n))}function x(t){return(c=void 0,d&&o)?b(t):(o=a=void 0,s)}function O(){var t,r=h(),n=w(r);if(o=arguments,a=this,l=r,n){if(void 0===c)return u=t=l,c=setTimeout(S,e),f?b(t):s;if(p)return c=setTimeout(S,e),b(l)}return void 0===c&&(c=setTimeout(S,e)),s}return e=v(e)||0,g(r)&&(f=!!r.leading,i=(p="maxWait"in r)?m(v(r.maxWait)||0,e):i,d="trailing"in r?!!r.trailing:d),O.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=l=a=c=void 0},O.flush=function(){return void 0===c?s:x(h())},O}(t,e,{leading:o,maxWait:e,trailing:a})}},9749:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4941).Z,o=r(3929).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(6495).Z,i=r(2648).Z,s=r(1598).Z,c=r(7273).Z,l=s(r(7294)),u=i(r(3121)),f=r(2675),p=r(139),d=r(8730);r(7238);var m=i(r(9824)),y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(t){return void 0!==t.default}function g(t){return"number"==typeof t||void 0===t?t:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function v(t,e,r,n,o,i,s){t&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch(function(){}).then(function(){if(t.parentNode){if("blur"===r&&i(!0),null==n?void 0:n.current){var e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});var s=!1,c=!1;n.current(a({},e,{nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:function(){return s},isPropagationStopped:function(){return c},persist:function(){},preventDefault:function(){s=!0,e.preventDefault()},stopPropagation:function(){c=!0,e.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(t)}}))}var b=l.forwardRef(function(t,e){var r=t.imgAttributes,n=t.heightInt,o=t.widthInt,i=(t.qualityInt,t.className),s=t.imgStyle,u=t.blurStyle,f=t.isLazy,p=t.fill,d=t.placeholder,m=t.loading,y=t.srcString,h=(t.config,t.unoptimized),g=(t.loader,t.onLoadRef),b=t.onLoadingCompleteRef,w=t.setBlurComplete,S=t.setShowAltText,x=(t.onLoad,t.onError),O=c(t,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},O,r,{width:o,height:n,decoding:"async","data-nimg":p?"fill":"1",className:i,loading:m,style:a({},s,u),ref:l.useCallback(function(t){e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(x&&(t.src=t.src),t.complete&&v(t,y,d,g,b,w,h))},[y,d,g,b,w,x,h,e]),onLoad:function(t){v(t.currentTarget,y,d,g,b,w,h)},onError:function(t){S(!0),"blur"===d&&w(!0),x&&x(t)}})))}),w=l.forwardRef(function(t,e){var r,i,s,v=t.src,w=t.sizes,S=t.unoptimized,x=void 0!==S&&S,O=t.priority,C=void 0!==O&&O,k=t.loading,E=t.className,_=t.quality,P=t.width,j=t.height,T=t.fill,M=t.style,I=t.onLoad,A=t.onLoadingComplete,z=t.placeholder,$=void 0===z?"empty":z,R=t.blurDataURL,N=t.layout,L=t.objectFit,B=t.objectPosition,H=(t.lazyBoundary,t.lazyRoot,c(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),D=l.useContext(d.ImageConfigContext),F=l.useMemo(function(){var t=y||D||p.imageConfigDefault,e=o(t.deviceSizes).concat(o(t.imageSizes)).sort(function(t,e){return t-e}),r=t.deviceSizes.sort(function(t,e){return t-e});return a({},t,{allSizes:e,deviceSizes:r})},[D]),W=H,Y=W.loader||m.default;delete W.loader;var q="__next_img_default"in Y;if(q){if("custom"===F.loader)throw Error('Image with src "'.concat(v,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var X=Y;Y=function(t){return t.config,X(c(t,["config"]))}}if(N){"fill"===N&&(T=!0);var V={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];V&&(M=a({},M,V));var U={responsive:"100vw",fill:"100vw"}[N];U&&!w&&(w=U)}var G="",Q=g(P),Z=g(j);if("object"==typeof(r=v)&&(h(r)||void 0!==r.src)){var J=h(v)?v.default:v;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(i=J.blurWidth,s=J.blurHeight,R=R||J.blurDataURL,G=J.src,!T){if(Q||Z){if(Q&&!Z){var K=Q/J.width;Z=Math.round(J.height*K)}else if(!Q&&Z){var tt=Z/J.height;Q=Math.round(J.width*tt)}}else Q=J.width,Z=J.height}}var te=!C&&("lazy"===k||void 0===k);((v="string"==typeof v?v:G).startsWith("data:")||v.startsWith("blob:"))&&(x=!0,te=!1),F.unoptimized&&(x=!0),q&&v.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(x=!0);var tr=n(l.useState(!1),2),tn=tr[0],to=tr[1],ta=n(l.useState(!1),2),ti=ta[0],ts=ta[1],tc=g(_),tl=Object.assign(T?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:B}:{},ti?{}:{color:"transparent"},M),tu="blur"===$&&R&&!tn?{backgroundSize:tl.objectFit||"cover",backgroundPosition:tl.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(f.getImageBlurSvg({widthInt:Q,heightInt:Z,blurWidth:i,blurHeight:s,blurDataURL:R}),'")')}:{},tf=function(t){var e=t.config,r=t.src,n=t.unoptimized,a=t.width,i=t.quality,s=t.sizes,c=t.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var l=function(t,e,r){var n=t.deviceSizes,a=t.allSizes;if(r){for(var i=/(^|\s)(1?\d?\d)vw/g,s=[];c=i.exec(r);c)s.push(parseInt(c[2]));if(s.length){var c,l,u=.01*(l=Math).min.apply(l,o(s));return{widths:a.filter(function(t){return t>=n[0]*u}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof e?{widths:n,kind:"w"}:{widths:o(new Set([e,2*e].map(function(t){return a.find(function(e){return e>=t})||a[a.length-1]}))),kind:"x"}}(e,a,s),u=l.widths,f=l.kind,p=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map(function(t,n){return"".concat(c({config:e,src:r,quality:i,width:t})," ").concat("w"===f?t:n+1).concat(f)}).join(", "),src:c({config:e,src:r,quality:i,width:u[p]})}}({config:F,src:v,unoptimized:x,width:Q,quality:tc,sizes:w,loader:Y}),tp=v,td={imageSrcSet:tf.srcSet,imageSizes:tf.sizes,crossOrigin:W.crossOrigin},tm=l.useRef(I);l.useEffect(function(){tm.current=I},[I]);var ty=l.useRef(A);l.useEffect(function(){ty.current=A},[A]);var th=a({isLazy:te,imgAttributes:tf,heightInt:Z,widthInt:Q,qualityInt:tc,className:E,imgStyle:tl,blurStyle:tu,loading:k,config:F,fill:T,unoptimized:x,placeholder:$,loader:Y,srcString:tp,onLoadRef:tm,onLoadingCompleteRef:ty,setBlurComplete:to,setShowAltText:ts},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},th,{ref:e})),C?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+tf.src+tf.srcSet+tf.sizes,rel:"preload",as:"image",href:tf.srcSet?void 0:tf.src},td))):null)});e.default=w,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},2675:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageBlurSvg=function(t){var e=t.widthInt,r=t.heightInt,n=t.blurWidth,o=t.blurHeight,a=t.blurDataURL,i=n||e,s=o||r,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(i," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(t,e){"use strict";function r(t){var e=t.config,r=t.src,n=t.width,o=t.quality;return"".concat(e.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.__next_img_default=!0,e.default=r},5675:function(t,e,r){t.exports=r(9749)},2703:function(t,e,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,a,i){if(i!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(t,e,r){t.exports=r(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4415:function(t,e){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),e.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case o:case i:case a:case f:case p:return t;default:switch(t=t&&t.$$typeof){case l:case c:case u:case m:case d:case s:return t;default:return e}}case n:return e}}}(t)===o}},4954:function(t,e,r){"use strict";t.exports=r(4415)},8357:function(t,e,r){"use strict";r.d(e,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)0>e.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r};function c(t){return function(e){return n.createElement(l,i({attr:i({},t.attr)},e),function t(e){return e&&e.map(function(e,r){return n.createElement(e.tag,i({key:r},e.attr),t(e.child))})}(t.child))}}function l(t){var e=function(e){var r,o=t.attr,a=t.size,c=t.title,l=s(t,["attr","size","title"]),u=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:r,style:i(i({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==a?n.createElement(a.Consumer,null,function(t){return e(t)}):e(o)}},9921:function(t,e){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function S(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case u:case f:case a:case s:case i:case d:return t;default:switch(t=t&&t.$$typeof){case l:case p:case h:case y:case c:return t;default:return e}}case o:return e}}}function x(t){return S(t)===f}e.AsyncMode=u,e.ConcurrentMode=f,e.ContextConsumer=l,e.ContextProvider=c,e.Element=n,e.ForwardRef=p,e.Fragment=a,e.Lazy=h,e.Memo=y,e.Portal=o,e.Profiler=s,e.StrictMode=i,e.Suspense=d,e.isAsyncMode=function(t){return x(t)||S(t)===u},e.isConcurrentMode=x,e.isContextConsumer=function(t){return S(t)===l},e.isContextProvider=function(t){return S(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return S(t)===p},e.isFragment=function(t){return S(t)===a},e.isLazy=function(t){return S(t)===h},e.isMemo=function(t){return S(t)===y},e.isPortal=function(t){return S(t)===o},e.isProfiler=function(t){return S(t)===s},e.isStrictMode=function(t){return S(t)===i},e.isSuspense=function(t){return S(t)===d},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===f||t===s||t===i||t===d||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===y||t.$$typeof===c||t.$$typeof===l||t.$$typeof===p||t.$$typeof===v||t.$$typeof===b||t.$$typeof===w||t.$$typeof===g)},e.typeOf=S},9864:function(t,e,r){"use strict";t.exports=r(9921)},1314:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});let o=n(r(8890)),a=()=>(0,o.default)("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json");e.default=a},7871:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});let o=n(r(8890)),a=()=>(0,o.default)("https://api.github.com/emojis");e.default=a},8890:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});let n=r(7294),o=t=>{let[e,r]=(0,n.useState)({}),[o,a]=(0,n.useState)(!0),[i,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{a(!0),fetch(t).then(async t=>{r(await t.json()),a(!1)}).catch(()=>{s(!0),a(!1)})},[t]),[e,o,i]};e.default=o},7794:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.useRepo=e.useFetch=e.useEmojis=e.useColors=void 0;let o=n(r(1314));e.useColors=o.default;let a=n(r(7871));e.useEmojis=a.default;let i=n(r(8890));e.useFetch=i.default;let s=n(r(1024));e.useRepo=s.default},1024:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});let o=n(r(8890)),a=(t,e)=>(0,o.default)(`https://api.github.com/repos/${t}/${e}`);e.default=a},164:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});let o=n(r(7294)),a=n(r(2008)),i=r(7794),s=({username:t,repository:e,dark:r,fallback:n})=>{let[s,c]=(0,i.useRepo)(t,e),l=r?{background:"#0d1117",textColor:"#58a6ff",borderColor:"#30363d",iconColor:"#8b949e"}:{background:"white",textColor:"#0969da",borderColor:"#d0d7de",iconColor:"#57606a"},[u,f]=(0,i.useColors)(),[p,d]=(0,i.useEmojis)();if(c||f||d)return n?o.default.createElement(o.default.Fragment,null,n):null;let m=o.default.createElement(o.default.Fragment,null,s.description);if(s.description&&(m=o.default.createElement(o.default.Fragment,null,(0,a.default)(s.description,/:(\w+):/g,(t,e,r)=>o.default.createElement("span",{key:r},o.default.createElement("img",{alt:e,src:p.data[e],style:{width:"1rem",height:"1rem",verticalAlign:"-0.2rem"}}))))),!m){let y=`${t}/${e}`,h=`https://github.com/${y}`;return o.default.createElement("div",{style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",border:"1px solid",borderColor:l.borderColor,borderRadius:"6px",background:l.background,padding:"16px",fontSize:"14px",lineHeight:"1.5",color:"#24292e"}},o.default.createElement("div",{style:{display:"flex",alignItems:"center"}},o.default.createElement("svg",{style:{fill:l.iconColor,marginRight:"8px"},viewBox:"0 0 16 16",version:"1.1",width:16,height:16,"aria-hidden":"true"},o.default.createElement("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"})),o.default.createElement("span",{style:{fontWeight:600,color:l.textColor}},o.default.createElement("a",{style:{textDecoration:"none",color:"inherit"},href:h,target:"_blank",rel:"noreferrer"},y))))}return o.default.createElement("div",{style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",border:"1px solid",borderColor:l.borderColor,borderRadius:"6px",background:l.background,padding:"16px",fontSize:"14px",lineHeight:"1.5",color:"#24292e"}},o.default.createElement("div",{style:{display:"flex",alignItems:"center"}},o.default.createElement("svg",{style:{fill:l.iconColor,marginRight:"8px"},viewBox:"0 0 16 16",version:"1.1",width:16,height:16,"aria-hidden":"true"},o.default.createElement("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"})),o.default.createElement("span",{style:{fontWeight:600,color:l.textColor}},o.default.createElement("a",{style:{textDecoration:"none",color:"inherit"},href:s.html_url,target:"_blank",rel:"noreferrer"},s.name))),o.default.createElement("div",{style:{display:s.fork?"block":"none",fontSize:"12px",color:l.iconColor}},"Forked from"," ",o.default.createElement("a",{style:{color:"inherit",textDecoration:"none"},href:s.fork?s.source?.html_url:"",target:"_blank",rel:"noreferrer"},s.fork?s.source?.full_name:"")),o.default.createElement("div",{style:{fontSize:"12px",marginBottom:"16px",marginTop:"8px",color:l.iconColor}},m),o.default.createElement("div",{style:{fontSize:"12px",color:l.iconColor,display:"flex"}},o.default.createElement("div",{style:{marginRight:"16px"}},o.default.createElement("span",{style:{width:"12px",height:"12px",borderRadius:"100%",backgroundColor:u[s.language??""]?.color,display:"inline-block",top:"1px",position:"relative"}}),"\xa0",o.default.createElement("span",null,s.language)),o.default.createElement("a",{style:{textDecoration:"none",color:"inherit"},href:s.html_url+"/stargazers",target:"_blank",rel:"noreferrer"},o.default.createElement("div",{style:{display:0===s.stargazers_count?"none":"flex",alignItems:"center",marginRight:"16px"}},o.default.createElement("svg",{style:{fill:l.iconColor},"aria-label":"stars",viewBox:"0 0 16 16",version:"1.1",width:16,height:16,role:"img"},o.default.createElement("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"})),"\xa0 ",o.default.createElement("span",null,s.stargazers_count))),o.default.createElement("a",{style:{textDecoration:"none",color:"inherit"},href:s.html_url+"/network/members",target:"_blank",rel:"noreferrer"},o.default.createElement("div",{style:{display:0===s.forks_count?"none":"flex",alignItems:"center"}},o.default.createElement("svg",{style:{fill:l.iconColor},"aria-label":"fork",viewBox:"0 0 16 16",version:"1.1",width:16,height:16,role:"img"},o.default.createElement("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})),"\xa0 ",o.default.createElement("span",null,s.forks_count)))))};e.default=s},8477:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=i(r(7294)),a=i(r(1093));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"render",value:function(){return o.default.createElement("input",this.props,this.props.children)}}]),e}(o.default.Component);e.default=(0,a.default)(s)},5343:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=c(r(7294)),i=c(r(8e3)),s=c(r(5697));function c(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"render",value:function(){var t=this,e=n({},this.props);return e.parentBindings&&delete e.parentBindings,a.default.createElement("div",n({},e,{ref:function(e){t.props.parentBindings.domNode=e}}),this.props.children)}}]),e}(a.default.Component);l.propTypes={name:s.default.string,id:s.default.string},e.default=(0,i.default)(l)},8939:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(r(7294)),o=a(r(1093));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}var s=function(t){function e(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e);for(var t,r,o,a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return r=o=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),o.render=function(){return n.default.createElement("a",o.props,o.props.children)},i(o,r)}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(n.default.Component);e.default=(0,o.default)(s)},6261:function(t,e,r){"use strict";e.W_=e.rU=void 0;var n=d(r(8939)),o=d(r(8477)),a=d(r(5343)),i=d(r(2628)),s=d(r(4592)),c=d(r(7606)),l=d(r(3200)),u=d(r(1093)),f=d(r(8e3)),p=d(r(8482));function d(t){return t&&t.__esModule?t:{default:t}}e.rU=n.default,o.default,e.W_=a.default,i.default,s.default,c.default,l.default,u.default,f.default,p.default,n.default,o.default,a.default,i.default,s.default,c.default,l.default,u.default,f.default,p.default},8482:function(t,e,r){"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function a(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}function s(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=r(7294);r(3935),r(4259);var l=r(7606),u=r(2628),f=r(5697),p=r(9678),d={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number};t.exports={Scroll:function(t,e){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=e||u,f=function(e){function u(t){a(this,u);var e=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,t));return m.call(e),e.state={active:!1},e}return s(u,e),o(u,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();l.isMounted(t)||l.mount(t,this.props.spyThrottle),this.props.hashSpy&&(p.isMounted()||p.mount(r),p.mapContainer(this.props.to,t)),this.props.spy&&l.addStateHandler(this.stateHandler),l.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){l.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var r=n({},this.props);for(var o in d)r.hasOwnProperty(o)&&delete r[o];return r.className=e,r.onClick=this.handleClick,c.createElement(t,r)}}]),u}(c.Component),m=function(){var t=this;this.scrollTo=function(e,o){r.scrollTo(e,n({},t.state,o))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.stateHandler=function(){r.getActiveLink()!==t.props.to&&(null!==t.state&&t.state.active&&t.props.onSetInactive&&t.props.onSetInactive(),t.setState({active:!1}))},this.spyHandler=function(e){var n=t.getScrollSpyContainer();if(!p.isMounted()||p.isInitialized()){var o=t.props.to,a=null,i=0,s=0,c=0;if(n.getBoundingClientRect&&(c=n.getBoundingClientRect().top),!a||t.props.isDynamic){if(!(a=r.get(o)))return;var u=a.getBoundingClientRect();s=(i=u.top-c+e)+u.height}var f=e-t.props.offset,d=f>=Math.floor(i)&&f<Math.floor(s),m=f<Math.floor(i)||f>=Math.floor(s),y=r.getActiveLink();return m?(o===y&&r.setActiveLink(void 0),t.props.hashSpy&&p.getHash()===o&&p.changeHash(),t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive()),l.updateStates()):d&&y!==o?(r.setActiveLink(o),t.props.hashSpy&&p.changeHash(o),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(o)),l.updateStates()):void 0}}};return f.propTypes=d,f.defaultProps={offset:0},f},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var e=function(e){function r(t){a(this,r);var e=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return e.childBindings={domNode:null},e}return s(r,e),o(r,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(t){u.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return c.createElement(t,n({},this.props,{parentBindings:this.childBindings}))}}]),r}(c.Component);return e.propTypes={name:f.string,id:f.string},e}}},3200:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};s(r(4259));var o=s(r(9765)),a=s(r(140)),i=s(r(4592));function s(t){return t&&t.__esModule?t:{default:t}}var c=function(t){return o.default[t.smooth]||o.default.defaultEasing},l=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(t,e,r){window.setTimeout(t,r||1e3/60,new Date().getTime())},u=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},f=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollLeft;var r=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return r?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft},p=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollTop;var r=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return r?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop},d=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollWidth-e.offsetWidth;var r=document.body,n=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,n.clientWidth,n.scrollWidth,n.offsetWidth)},m=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollHeight-e.offsetHeight;var r=document.body,n=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)},y=function t(e,r,n){var o=r.data;if(!r.ignoreCancelEvents&&o.cancel){i.default.registered.end&&i.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),null===o.start&&(o.start=n),o.progress=n-o.start,o.percent=o.progress>=o.duration?1:e(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?r.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:r.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var a=t.bind(null,e,r);l.call(window,a);return}i.default.registered.end&&i.default.registered.end(o.to,o.target,o.currentPosition)},h=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},g=function(t,e,r,n){if(e.data=e.data||u(),window.clearTimeout(e.data.delayTimeout),a.default.subscribe(function(){e.data.cancel=!0}),h(e),e.data.start=null,e.data.cancel=!1,e.data.startPosition=e.horizontal?f(e):p(e),e.data.targetPosition=e.absolute?t:t+e.data.startPosition,e.data.startPosition===e.data.targetPosition){i.default.registered.end&&i.default.registered.end(e.data.to,e.data.target,e.data.currentPosition);return}e.data.delta=Math.round(e.data.targetPosition-e.data.startPosition),e.data.duration=("function"==typeof(o=e.duration)?o:function(){return o})(e.data.delta),e.data.duration=isNaN(parseFloat(e.data.duration))?1e3:parseFloat(e.data.duration),e.data.to=r,e.data.target=n;var o,s=c(e),d=y.bind(null,s,e);if(e&&e.delay>0){e.data.delayTimeout=window.setTimeout(function(){i.default.registered.begin&&i.default.registered.begin(e.data.to,e.data.target),l.call(window,d)},e.delay);return}i.default.registered.begin&&i.default.registered.begin(e.data.to,e.data.target),l.call(window,d)},v=function(t){return(t=n({},t)).data=t.data||u(),t.absolute=!0,t};e.default={animateTopScroll:g,getAnimationType:c,scrollToTop:function(t){g(0,v(t))},scrollToBottom:function(t){h(t=v(t)),g(t.horizontal?d(t):m(t),t)},scrollTo:function(t,e){g(t,v(e))},scrollMore:function(t,e){h(e=v(e)),g(t+(e.horizontal?f(e):p(e)),e)}}},140:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(5236),o=["mousedown","mousewheel","touchmove","keydown"];e.default={subscribe:function(t){return"undefined"!=typeof document&&o.forEach(function(e){return(0,n.addPassiveEventListener)(document,e,t)})}}},5236:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addPassiveEventListener=function(t,e,r){var n=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(r){}return t}();t.addEventListener(e,r,!!n&&{passive:!0})},e.removePassiveEventListener=function(t,e,r){t.removeEventListener(e,r)}},8e3:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=c(r(7294));c(r(3935));var i=c(r(2628)),s=c(r(5697));function c(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var e=function(e){function r(t){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r);var e=function(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return e.childBindings={domNode:null},e}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,e),o(r,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(t){i.default.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(t,n({},this.props,{parentBindings:this.childBindings}))}}]),r}(a.default.Component);return e.propTypes={name:s.default.string,id:s.default.string},e}},4592:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={registered:{},scrollEvent:{register:function(t,e){r.registered[t]=e},remove:function(t){r.registered[t]=null}}};e.default=r},9678:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r(5236);var n,o=(n=r(4259))&&n.__esModule?n:{default:n};e.default={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,e){this.containers[t]=e},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,e=this.getHash();e?window.setTimeout(function(){t.scrollTo(e,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,e){var r=this.scroller;if(r.get(t)&&(e||t!==r.getActiveLink())){var n=this.containers[t]||document;r.scrollTo(t,{container:n})}},getHash:function(){return o.default.getHash()},changeHash:function(t,e){this.isInitialized()&&o.default.getHash()!==t&&o.default.updateHash(t,e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}}},1093:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=u(r(7294)),i=u(r(7606)),s=u(r(2628)),c=u(r(5697)),l=u(r(9678));function u(t){return t&&t.__esModule?t:{default:t}}var f={to:c.default.string.isRequired,containerId:c.default.string,container:c.default.object,activeClass:c.default.string,activeStyle:c.default.object,spy:c.default.bool,horizontal:c.default.bool,smooth:c.default.oneOfType([c.default.bool,c.default.string]),offset:c.default.number,delay:c.default.number,isDynamic:c.default.bool,onClick:c.default.func,duration:c.default.oneOfType([c.default.number,c.default.func]),absolute:c.default.bool,onSetActive:c.default.func,onSetInactive:c.default.func,ignoreCancelEvents:c.default.bool,hashSpy:c.default.bool,saveHashHistory:c.default.bool,spyThrottle:c.default.number};e.default=function(t,e){var r=e||s.default,c=function(e){function s(t){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,s);var e=function(t,e){if(!t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"==typeof e||"function"==typeof e)?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));return u.call(e),e.state={active:!1},e}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,e),o(s,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t&&!e?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();i.default.isMounted(t)||i.default.mount(t,this.props.spyThrottle),this.props.hashSpy&&(l.default.isMounted()||l.default.mount(r),l.default.mapContainer(this.props.to,t)),i.default.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var r={};r=this.state&&this.state.active?n({},this.props.style,this.props.activeStyle):n({},this.props.style);var o=n({},this.props);for(var i in f)o.hasOwnProperty(i)&&delete o[i];return o.className=e,o.style=r,o.onClick=this.handleClick,a.default.createElement(t,o)}}]),s}(a.default.PureComponent),u=function(){var t=this;this.scrollTo=function(e,o){r.scrollTo(e,n({},t.state,o))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.spyHandler=function(e,n){var o=t.getScrollSpyContainer();if(!l.default.isMounted()||l.default.isInitialized()){var a=t.props.horizontal,i=t.props.to,s=null,c=void 0,u=void 0;if(a){var f=0,p=0,d=0;if(o.getBoundingClientRect&&(d=o.getBoundingClientRect().left),!s||t.props.isDynamic){if(!(s=r.get(i)))return;var m=s.getBoundingClientRect();p=(f=m.left-d+e)+m.width}var y=e-t.props.offset;c=y>=Math.floor(f)&&y<Math.floor(p),u=y<Math.floor(f)||y>=Math.floor(p)}else{var h=0,g=0,v=0;if(o.getBoundingClientRect&&(v=o.getBoundingClientRect().top),!s||t.props.isDynamic){if(!(s=r.get(i)))return;var b=s.getBoundingClientRect();g=(h=b.top-v+n)+b.height}var w=n-t.props.offset;c=w>=Math.floor(h)&&w<Math.floor(g),u=w<Math.floor(h)||w>=Math.floor(g)}var S=r.getActiveLink();if(u){if(i===S&&r.setActiveLink(void 0),t.props.hashSpy&&l.default.getHash()===i){var x=t.props.saveHashHistory;l.default.changeHash("",void 0!==x&&x)}t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive(i,s))}if(c&&(S!==i||!1===t.state.active)){r.setActiveLink(i);var O=t.props.saveHashHistory;t.props.hashSpy&&l.default.changeHash(i,void 0!==O&&O),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(i,s))}}}};return c.propTypes=f,c.defaultProps={offset:0},c}},7606:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=(n=r(3096))&&n.__esModule?n:{default:n},a=r(5236),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,o.default)(t,e)},s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,e){if(t){var r=i(function(e){s.scrollHandler(t)},e);s.scrollSpyContainers.push(t),(0,a.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return -1!==s.scrollSpyContainers.indexOf(t)},currentPositionX:function(t){if(t!==document)return t.scrollLeft;var e=void 0!==window.pageYOffset,r="CSS1Compat"===(document.compatMode||"");return e?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},currentPositionY:function(t){if(t!==document)return t.scrollTop;var e=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return e?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},scrollHandler:function(t){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)].spyCallbacks||[]).forEach(function(e){return e(s.currentPositionX(t),s.currentPositionY(t))})},addStateHandler:function(t){s.spySetState.push(t)},addSpyHandler:function(t,e){var r=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(s.currentPositionX(e),s.currentPositionY(e))},updateStates:function(){s.spySetState.forEach(function(t){return t()})},unmount:function(t,e){s.scrollSpyContainers.forEach(function(t){return t.spyCallbacks&&t.spyCallbacks.length&&t.spyCallbacks.indexOf(e)>-1&&t.spyCallbacks.splice(t.spyCallbacks.indexOf(e),1)}),s.spySetState&&s.spySetState.length&&s.spySetState.indexOf(t)>-1&&s.spySetState.splice(s.spySetState.indexOf(t),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach(function(t){return s.scrollHandler(t)})}};e.default=s},2628:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=s(r(4259)),a=s(r(3200)),i=s(r(4592));function s(t){return t&&t.__esModule?t:{default:t}}var c={},l=void 0;e.default={unmount:function(){c={}},register:function(t,e){c[t]=e},unregister:function(t){delete c[t]},get:function(t){return c[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return l=t},getActiveLink:function(){return l},scrollTo:function(t,e){var r=this.get(t);if(!r){console.warn("target Element not found");return}var s=(e=n({},e,{absolute:!1})).containerId,c=e.container,l=void 0;l=s?document.getElementById(s):c&&c.nodeType?c:document,e.absolute=!0;var u=e.horizontal,f=o.default.scrollOffset(l,r,u)+(e.offset||0);if(!e.smooth){i.default.registered.begin&&i.default.registered.begin(t,r),l===document?e.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):l.scrollTop=f,i.default.registered.end&&i.default.registered.end(t,r);return}a.default.animateTopScroll(f,e,t,r)}}},9765:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={defaultEasing:function(t){return t<.5?Math.pow(2*t,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}},4259:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){for(var r=t.offsetTop,n=t.offsetParent;n&&!e(n);)r+=n.offsetTop,n=n.offsetParent;return{offsetTop:r,offsetParent:n}};e.default={updateHash:function(t,e){var r=0===t.indexOf("#")?t.substring(1):t,n=r?"#"+r:"",o=window&&window.location,a=n?o.pathname+o.search+n:o.pathname+o.search;e?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(t){return function(e){return t.contains?t!=e&&t.contains(e):!!(16&t.compareDocumentPosition(e))}},scrollOffset:function(t,e,n){if(n)return t===document?e.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(t).position?e.offsetLeft:e.offsetLeft-t.offsetLeft;if(t===document)return e.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(t).position){if(e.offsetParent!==t){var o=r(e,function(e){return e===t||e===document}),a=o.offsetTop;if(o.offsetParent!==t)throw Error("Seems containerElement is not an ancestor of the Element");return a}return e.offsetTop}if(e.offsetParent===t.offsetParent)return e.offsetTop-t.offsetTop;var i=function(t){return t===document};return r(e,i).offsetTop-r(t,i).offsetTop}}},6531:function(t,e,r){var n;t.exports=(n=r(7294),function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,(function(e){return t[e]}).bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=5)}([function(t,e,r){var n=r(3);t.exports=r(8)(n.isElement,!0)},function(t,e){t.exports=n},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,r){"use strict";t.exports=r(7)},function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),a=r(3),i=function(){function t(e,r){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,t),o.initializer.load(this,r,e),this.begin()}return n(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=a.htmlParser.typeHtmlChars(t,e,r);var n,i=0,s=t.substr(e);if("^"===s.charAt(0)&&/^\^\d+/.test(s)&&(n=1+(s=/\d+/.exec(s)[0]).length,i=parseInt(s),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,e)+t.substring(e+n),r.toggleBlinking(!0)),"`"===s.charAt(0)){for(;"`"!==t.substr(e+o).charAt(0)&&!(e+ ++o>t.length););var c=t.substring(0,e),l=t.substring(c.length+1,e+o);t=c+l+t.substring(e+o+1),o--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),e>=t.length?r.doneTyping(t,e):r.keepTyping(t,e,o),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},i)},n):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,r){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=r;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var r=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=a.htmlParser.backSpaceHtmlChars(t,e,r);var n=t.substr(0,e);if(r.replaceText(n),r.smartBackspace){var o=r.strings[r.arrayPos+1];o&&n===o.substr(0,e)?r.stopNum=e:r.stopNum=0}e>r.stopNum?(e--,r.backspace(t,e)):e<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],e))},n)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=i,t.exports=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r(2),i=a&&a.__esModule?a:{default:a},s=function(){function t(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t)}return o(t,[{key:"load",value:function(t,e,r){if(t.el="string"==typeof r?document.querySelector(r):r,t.options=n({},i.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var o=Array.prototype.slice.apply(t.stringsElement.children),a=o.length;if(a)for(var s=0;s<a;s+=1){var c=o[s];t.strings.push(c.innerHTML.trim())}}for(var s in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[s]=s;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var e=document.createElement("style");e.type="text/css",e.setAttribute("data-typed-js-css",!0);var r="";t.showCursor&&(r+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(r+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=r,document.body.appendChild(e))}}}]),t}();e.default=s;var c=new s;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),n=function(){function t(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"typeHtmlChars",value:function(t,e,r){if("html"!==r.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var o="";for(o="<"===n?">":";";t.substr(e+1).charAt(0)!==o&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,r){if("html"!==r.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var o="";for(o=">"===n?"<":"&";t.substr(e-1).charAt(0)!==o&&!(--e<0););e--}return e}}]),t}();e.default=n;var o=new n;e.htmlParser=o}])},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(0),i=r.n(a),s=r(4),c=r.n(s);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){var e,r;function a(){var t,e,r,n,i,s;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a);for(var c=arguments.length,u=Array(c),f=0;f<c;f++)u[f]=arguments[f];return e=(r=(t=p(a)).call.apply(t,[this].concat(u)))&&("object"===l(r)||"function"==typeof r)?r:d(this),n=d(e),i="rootElement",s=o.a.createRef(),i in n?Object.defineProperty(n,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[i]=s,e}return function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(a,n.Component),e=[{key:"componentDidMount",value:function(){var t=this.props,e=(t.style,t.typedRef,t.stopped),r=(t.className,u(t,["style","typedRef","stopped","className"]));this.constructTyped(r),e&&this.typed.stop()}},{key:"constructTyped",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.props,n=(r.style,r.typedRef,r.stopped,r.className,u(r,["style","typedRef","stopped","className"]));this.typed&&this.typed.destroy(),this.typed=new c.a(this.rootElement.current,Object.assign(n,e)),this.props.typedRef&&this.props.typedRef(this.typed),this.typed.reConstruct=function(e){t.constructTyped(e)}}},{key:"shouldComponentUpdate",value:function(t){var e=this;if(this.props!==t){t.style,t.typedRef,t.stopped,t.className;var r=u(t,["style","typedRef","stopped","className"]);return this.typed.options=Object.assign(this.typed.options,r),Object.keys(t).every(function(r){return!e.props[r]&&t[r]?(e.constructTyped(t),!1):(e.typed[r]&&(e.typed[r]=t[r]),!0)})&&this.props.strings.length!==t.strings.length&&this.constructTyped(t),!0}return!1}},{key:"render",value:function(){var t=this.props,e=t.style,r=t.className,n=t.children,a=o.a.createElement("span",{ref:this.rootElement});return n&&(a=o.a.cloneElement(n,{ref:this.rootElement})),o.a.createElement("span",{style:e,className:r},a)}}],f(a.prototype,e),r&&f(a,r),a}();y.propTypes={style:i.a.object,className:i.a.string,children:i.a.object,typedRef:i.a.func,stopped:i.a.bool,strings:i.a.arrayOf(i.a.string),typeSpeed:i.a.number,startDelay:i.a.number,backSpeed:i.a.number,smartBackspace:i.a.bool,shuffle:i.a.bool,backDelay:i.a.number,fadeOut:i.a.bool,fadeOutClass:i.a.string,fadeOutDelay:i.a.number,loop:i.a.bool,loopCount:i.a.number,showCursor:i.a.bool,cursorChar:i.a.string,autoInsertCss:i.a.bool,attr:i.a.string,bindInputFocusEvents:i.a.bool,contentType:i.a.oneOf(["html",""]),onComplete:i.a.func,preStringTyped:i.a.func,onStringTyped:i.a.func,onLastStringBackspaced:i.a.func,onTypingPaused:i.a.func,onTypingResumed:i.a.func,onReset:i.a.func,onStop:i.a.func,onStart:i.a.func,onDestroy:i.a.func},e.default=y},function(t,e,r){"use strict";/** @license React v16.9.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case f:case p:case i:case c:case s:case m:return t;default:switch(t=t&&t.$$typeof){case u:case d:case l:return t;default:return e}}case g:case h:case a:return e}}}function S(t){return w(t)===p}e.typeOf=w,e.AsyncMode=f,e.ConcurrentMode=p,e.ContextConsumer=u,e.ContextProvider=l,e.Element=o,e.ForwardRef=d,e.Fragment=i,e.Lazy=g,e.Memo=h,e.Portal=a,e.Profiler=c,e.StrictMode=s,e.Suspense=m,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===p||t===c||t===s||t===m||t===y||"object"==typeof t&&null!==t&&(t.$$typeof===g||t.$$typeof===h||t.$$typeof===l||t.$$typeof===u||t.$$typeof===d||t.$$typeof===v||t.$$typeof===b)},e.isAsyncMode=function(t){return S(t)||w(t)===f},e.isConcurrentMode=S,e.isContextConsumer=function(t){return w(t)===u},e.isContextProvider=function(t){return w(t)===l},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return w(t)===d},e.isFragment=function(t){return w(t)===i},e.isLazy=function(t){return w(t)===g},e.isMemo=function(t){return w(t)===h},e.isPortal=function(t){return w(t)===a},e.isProfiler=function(t){return w(t)===c},e.isStrictMode=function(t){return w(t)===s},e.isSuspense=function(t){return w(t)===m}},function(t,e,r){"use strict";!/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function(){Object.defineProperty(e,"__esModule",{value:!0});var t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,i=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,l=t?Symbol.for("react.async_mode"):60111,u=t?Symbol.for("react.concurrent_mode"):60111,f=t?Symbol.for("react.forward_ref"):60112,p=t?Symbol.for("react.suspense"):60113,d=t?Symbol.for("react.suspense_list"):60120,m=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,h=t?Symbol.for("react.fundamental"):60117,g=t?Symbol.for("react.responder"):60118,v=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var o=0,a="Warning: "+t.replace(/%s/g,function(){return r[o++]});"undefined"!=typeof console&&console.warn(a);try{throw Error(a)}catch(i){}},b=function(t,e){if(void 0===e)throw Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!t){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];v.apply(void 0,[e].concat(n))}};function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:var d=t.type;switch(d){case l:case u:case o:case i:case a:case p:return d;default:var h=d&&d.$$typeof;switch(h){case c:case f:case s:return h;default:return e}}case y:case m:case n:return e}}}var S=!1;function x(t){return w(t)===u}e.typeOf=w,e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=r,e.ForwardRef=f,e.Fragment=o,e.Lazy=y,e.Memo=m,e.Portal=n,e.Profiler=i,e.StrictMode=a,e.Suspense=p,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===o||t===u||t===i||t===a||t===p||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===s||t.$$typeof===c||t.$$typeof===f||t.$$typeof===h||t.$$typeof===g)},e.isAsyncMode=function(t){return S||(S=!0,b(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),x(t)||w(t)===l},e.isConcurrentMode=x,e.isContextConsumer=function(t){return w(t)===c},e.isContextProvider=function(t){return w(t)===s},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return w(t)===f},e.isFragment=function(t){return w(t)===o},e.isLazy=function(t){return w(t)===y},e.isMemo=function(t){return w(t)===m},e.isPortal=function(t){return w(t)===n},e.isProfiler=function(t){return w(t)===i},e.isStrictMode=function(t){return w(t)===a},e.isSuspense=function(t){return w(t)===p}}()},function(t,e,r){"use strict";var n=r(3),o=r(9),a=r(2),i=r(10),s=Function.call.bind(Object.prototype.hasOwnProperty),c=function(){};function l(){return null}c=function(t){var e="Warning: "+t;"undefined"!=typeof console&&console.error(e);try{throw Error(e)}catch(r){}},t.exports=function(t,e){var r="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",f={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:d(l),arrayOf:function(t){return d(function(e,r,n,o,i){if("function"!=typeof t)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=e[r];if(!Array.isArray(s))return new p("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<s.length;c++){var l=t(s,c,n,o,i+"["+c+"]",a);if(l instanceof Error)return l}return null})},element:d(function(e,r,n,o,a){var i=e[r];return t(i)?null:new p("Invalid "+o+" `"+a+"` of type `"+y(i)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:d(function(t,e,r,o,a){var i=t[e];return n.isValidElementType(i)?null:new p("Invalid "+o+" `"+a+"` of type `"+y(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),instanceOf:function(t){return d(function(e,r,n,o,a){if(!(e[r]instanceof t)){var i,s=t.name||u;return new p("Invalid "+o+" `"+a+"` of type `"+((i=e[r]).constructor&&i.constructor.name?i.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}return null})},node:d(function(e,n,o,a,i){return!function e(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(e);if(null===n||t(n))return!0;var o=function(t){var e=t&&(r&&t[r]||t["@@iterator"]);if("function"==typeof e)return e}(n);if(!o)return!1;var a,i=o.call(n);if(o!==n.entries){for(;!(a=i.next()).done;)if(!e(a.value))return!1}else for(;!(a=i.next()).done;){var s=a.value;if(s&&!e(s[1]))return!1}return!0;default:return!1}}(e[n])?new p("Invalid "+a+" `"+i+"` supplied to `"+o+"`, expected a ReactNode."):null}),objectOf:function(t){return d(function(e,r,n,o,i){if("function"!=typeof t)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=e[r],l=y(c);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected an object.");for(var u in c)if(s(c,u)){var f=t(c,u,n,o,i+"."+u,a);if(f instanceof Error)return f}return null})},oneOf:function(t){return Array.isArray(t)?d(function(e,r,n,o,a){for(var i,s=e[r],c=0;c<t.length;c++)if(s===(i=t[c])?0!==s||1/s==1/i:s!=s&&i!=i)return null;var l=JSON.stringify(t,function(t,e){return"symbol"===h(e)?String(e):e});return new p("Invalid "+o+" `"+a+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+l+".")}):(arguments.length>1?c("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):c("Invalid argument supplied to oneOf, expected an array."),l)},oneOfType:function(t){if(!Array.isArray(t))return c("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var e=0;e<t.length;e++){var r=t[e];if("function"!=typeof r)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+function(t){var e=h(t);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}(r)+" at index "+e+"."),l}return d(function(e,r,n,o,i){for(var s=0;s<t.length;s++)if(null==(0,t[s])(e,r,n,o,i,a))return null;return new p("Invalid "+o+" `"+i+"` supplied to `"+n+"`.")})},shape:function(t){return d(function(e,r,n,o,i){var s=e[r],c=y(s);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var l in t){var u=t[l];if(u){var f=u(s,l,n,o,i+"."+l,a);if(f)return f}}return null})},exact:function(t){return d(function(e,r,n,i,s){var c=e[r],l=y(c);if("object"!==l)return new p("Invalid "+i+" `"+s+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");var u=o({},e[r],t);for(var f in u){var d=t[f];if(!d)return new p("Invalid "+i+" `"+s+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(e[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(t),null,"  "));var m=d(c,f,n,i,s+"."+f,a);if(m)return m}return null})}};function p(t){this.message=t,this.stack=""}function d(t){var r={},n=0;function o(o,i,s,l,f,d,m){if(l=l||u,d=d||s,m!==a){if(e){var y=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var h=l+":"+s;!r[h]&&n<3&&(c("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[h]=!0,n++)}}return null==i[s]?o?new p(null===i[s]?"The "+f+" `"+d+"` is marked as required in `"+l+"`, but its value is `null`.":"The "+f+" `"+d+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:t(i,s,l,f,d)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function m(t){return d(function(e,r,n,o,a,i){var s=e[r];return y(s)!==t?new p("Invalid "+o+" `"+a+"` of type `"+h(s)+"` supplied to `"+n+"`, expected `"+t+"`."):null})}function y(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":"symbol"===e||t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)?"symbol":e}function h(t){if(null==t)return""+t;var e=y(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}return p.prototype=Error.prototype,f.checkPropTypes=i,f.resetWarningCache=i.resetWarningCache,f.PropTypes=f,f}},function(t,e,r){"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=!function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?function(t,e){for(var r,i,s=function(t){if(null==t)throw TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var l in r=Object(arguments[c]))o.call(r,l)&&(s[l]=r[l]);if(n){i=n(r);for(var u=0;u<i.length;u++)a.call(r,i[u])&&(s[i[u]]=r[i[u]])}}return s}:Object.assign},function(t,e,r){"use strict";var n=function(){},o=r(2),a={},i=Function.call.bind(Object.prototype.hasOwnProperty);function s(t,e,r,s,c){for(var l in t)if(i(t,l)){var u;try{if("function"!=typeof t[l]){var f=Error((s||"React class")+": "+r+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[l]+"`.");throw f.name="Invariant Violation",f}u=t[l](e,l,s,r,null,o)}catch(p){u=p}if(!u||u instanceof Error||n((s||"React class")+": type specification of "+r+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in a)){a[u.message]=!0;var d=c?c():"";n("Failed "+r+" type: "+u.message+(null!=d?d:""))}}}n=function(t){var e="Warning: "+t;"undefined"!=typeof console&&console.error(e);try{throw Error(e)}catch(r){}},s.resetWarningCache=function(){a={}},t.exports=s},function(t,e,r){"use strict";var n=r(2);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,a,i){if(i!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}}]))},2008:function(t){function e(t,e,o,a){if("string"!=typeof t)throw Error("First param must be a string");if("string"!=typeof e&&!(e instanceof RegExp))throw Error("Second param must be a string pattern or a regular expression");return("string"==typeof e?r:n)(t,e,o,a)}function r(t,e,r,n){var o=t.indexOf(e);if(!(o>=0))return[t];var a=[],i=o+e.length;return o>0&&a.push(t.substring(0,o)),a.push("function"==typeof r?r(t.substring(o,i),o+n,t):r),i<t.length&&a.push(t.substring(i)),a}function n(t,e,r,n){var o,a=[],i="function"==typeof r,s=e.lastIndex;e.lastIndex=0;for(var c=0;o=e.exec(t);){var l=o.index;""===o[0]&&e.lastIndex++,l!==c&&a.push(t.substring(c,l)),c=l+o[0].length;var u=i?r.apply(this,o.concat(l+n,o.input)):r;if(a.push(u),!e.global)break}return c<t.length&&a.push(t.substring(c)),e.lastIndex=s,a}t.exports=function(t,r,n){if("string"==typeof t)return e(t,r,n,0);if(Array.isArray(t)&&t[0]){for(var o=t.length,a=[],i=0,s=0;s<o;++s){var c=t[s];"string"==typeof c?(a.push.apply(a,e(c,r,n,i)),i+=c.length):a.push(c)}return a}throw TypeError("First argument must be an array or non-empty string")}},603:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return o}})},3674:function(t,e,r){"use strict";let n;r.d(e,{pT:function(){return eo}});var o,a,i=r(7294),s=r.t(i,2),c=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){if(this.ctr%(this.isSpeedy?65e3:1)==0){var e;this._insertTag(((e=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&e.setAttribute("nonce",this.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(r);try{n.insertRule(t,n.cssRules.length)}catch(o){}}else r.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},t}(),l=Math.abs,u=String.fromCharCode,f=Object.assign;function p(t,e,r){return t.replace(e,r)}function d(t,e){return t.indexOf(e)}function m(t,e){return 0|t.charCodeAt(e)}function y(t,e,r){return t.slice(e,r)}function h(t){return t.length}function g(t,e){return e.push(t),t}var v=1,b=1,w=0,S=0,x=0,O="";function C(t,e,r,n,o,a,i){return{value:t,root:e,parent:r,type:n,props:o,children:a,line:v,column:b,length:i,return:""}}function k(t,e){return f(C("",null,null,"",null,null,0),t,{length:-t.length},e)}function E(){return x=S<w?m(O,S++):0,b++,10===x&&(b=1,v++),x}function _(){return m(O,S)}function P(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j(t){return v=b=1,w=h(O=t),S=0,[]}function T(t){var e,r;return(e=S-1,r=function t(e){for(;E();)switch(x){case e:return S;case 34:case 39:34!==e&&39!==e&&t(x);break;case 40:41===e&&t(e);break;case 92:E()}return S}(91===t?t+2:40===t?t+1:t),y(O,e,r)).trim()}var M="-ms-",I="-moz-",A="-webkit-",z="comm",$="rule",R="decl",N="@keyframes";function L(t,e){for(var r="",n=t.length,o=0;o<n;o++)r+=e(t[o],o,t,e)||"";return r}function B(t,e,r,n){switch(t.type){case"@import":case R:return t.return=t.return||t.value;case z:return"";case N:return t.return=t.value+"{"+L(t.children,n)+"}";case $:t.value=t.props.join(",")}return h(r=L(t.children,n))?t.return=t.value+"{"+r+"}":""}function H(t,e,r,n,o,a,i,s,c,u,f){for(var d=o-1,m=0===o?a:[""],h=m.length,g=0,v=0,b=0;g<n;++g)for(var w=0,S=y(t,d+1,d=l(v=i[g])),x=t;w<h;++w)(x=(v>0?m[w]+" "+S:p(S,/&\f/g,m[w])).trim())&&(c[b++]=x);return C(t,e,r,0===o?$:s,c,u,f)}function D(t,e,r,n){return C(t,e,r,R,y(t,0,n),y(t,n+1,-1),n)}var F=function(t,e,r){for(var n=0,o=0;n=o,o=_(),38===n&&12===o&&(e[r]=1),!P(o);)E();return y(O,t,S)},W=function(t,e){var r=-1,n=44;do switch(P(n)){case 0:38===n&&12===_()&&(e[r]=1),t[r]+=F(S-1,e,r);break;case 2:t[r]+=T(n);break;case 4:if(44===n){t[++r]=58===_()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=u(n)}while(n=E());return t},Y=function(t,e){var r;return r=W(j(t),e),O="",r},q=new WeakMap,X=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,n=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||q.get(r))&&!n){q.set(t,!0);for(var o=[],a=Y(e,o),i=r.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},V=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}},U=[function(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case R:t.return=function t(e,r){switch(45^m(e,0)?(((r<<2^m(e,0))<<2^m(e,1))<<2^m(e,2))<<2^m(e,3):0){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+I+e+M+e+e;case 6828:case 4268:return A+e+M+e+e;case 6165:return A+e+M+"flex-"+e+e;case 5187:return A+e+p(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+M+"flex-$1$2")+e;case 5443:return A+e+M+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return A+e+M+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return A+e+M+p(e,"shrink","negative")+e;case 5292:return A+e+M+p(e,"basis","preferred-size")+e;case 6060:return A+"box-"+p(e,"-grow","")+A+e+M+p(e,"grow","positive")+e;case 4554:return A+p(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+M+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-r>6)switch(m(e,r+1)){case 109:if(45!==m(e,r+4))break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+I+(108==m(e,r+3)?"$3":"$2-$3"))+e;case 115:return~d(e,"stretch")?t(p(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==m(e,r+1))break;case 6444:switch(m(e,h(e)-3-(~d(e,"!important")&&10))){case 107:return p(e,":",":"+A)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(45===m(e,14)?"inline-":"")+"box$3$1"+A+"$2$3$1"+M+"$2box$3")+e}break;case 5936:switch(m(e,r+11)){case 114:return A+e+M+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+M+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+M+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return A+e+M+e+e}return e}(t.value,t.length);break;case N:return L([k(t,{value:p(t.value,"@","@"+A)})],n);case $:if(t.length)return t.props.map(function(e){var r;switch(r=e,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return L([k(t,{props:[p(e,/:(read-\w+)/,":"+I+"$1")]})],n);case"::placeholder":return L([k(t,{props:[p(e,/:(plac\w+)/,":"+A+"input-$1")]}),k(t,{props:[p(e,/:(plac\w+)/,":"+I+"$1")]}),k(t,{props:[p(e,/:(plac\w+)/,M+"input-$1")]})],n)}return""}).join("")}}];function G(t,e,r){var n="";return r.split(" ").forEach(function(r){void 0!==t[r]?e.push(t[r]+";"):n+=r+" "}),n}var Q=function(t,e,r){var n=t.key+"-"+e.name;!1===r&&void 0===t.registered[n]&&(t.registered[n]=e.styles)},Z=function(t,e,r){Q(t,e,r);var n=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var o=e;do t.insert(e===o?"."+n:"",o,t.sheet,!0),o=o.next;while(void 0!==o)}},J=function(t){for(var e,r=0,n=0,o=t.length;o>=4;++n,o-=4)e=(65535&(e=255&t.charCodeAt(n)|(255&t.charCodeAt(++n))<<8|(255&t.charCodeAt(++n))<<16|(255&t.charCodeAt(++n))<<24))*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(65535&e)*1540483477+((e>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(o){case 3:r^=(255&t.charCodeAt(n+2))<<16;case 2:r^=(255&t.charCodeAt(n+1))<<8;case 1:r^=255&t.charCodeAt(n),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)},K={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tt=/[A-Z]|^ms/g,te=/_EMO_([^_]+?)_([^]*?)_EMO_/g,tr=function(t){return 45===t.charCodeAt(1)},tn=function(t){return null!=t&&"boolean"!=typeof t},to=(o=Object.create(null),function(t){return void 0===o[t]&&(o[t]=tr(t)?t:t.replace(tt,"-$&").toLowerCase()),o[t]}),ta=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(te,function(t,e,r){return a={name:e,styles:r,next:a},e})}return 1===K[t]||tr(t)||"number"!=typeof e||0===e?e:e+"px"};function ti(t,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return a={name:r.name,styles:r.styles,next:a},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)a={name:n.name,styles:n.styles,next:a},n=n.next;return r.styles+";"}return function(t,e,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=ti(t,e,r[o])+";";else for(var a in r){var i=r[a];if("object"!=typeof i)null!=e&&void 0!==e[i]?n+=a+"{"+e[i]+"}":tn(i)&&(n+=to(a)+":"+ta(a,i)+";");else if(Array.isArray(i)&&"string"==typeof i[0]&&(null==e||void 0===e[i[0]]))for(var s=0;s<i.length;s++)tn(i[s])&&(n+=to(a)+":"+ta(a,i[s])+";");else{var c=ti(t,e,i);switch(a){case"animation":case"animationName":n+=to(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}}return n}(t,e,r);case"function":if(void 0!==t){var o=a,i=r(t);return a=o,ti(t,e,i)}}if(null==e)return r;var s=e[r];return void 0!==s?s:r}var ts=/label:\s*([^\s;\n{]+)\s*(;|$)/g,tc=function(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var n,o=!0,i="";a=void 0;var s=t[0];null==s||void 0===s.raw?(o=!1,i+=ti(r,e,s)):i+=s[0];for(var c=1;c<t.length;c++)i+=ti(r,e,t[c]),o&&(i+=s[c]);ts.lastIndex=0;for(var l="";null!==(n=ts.exec(i));)l+="-"+n[1];return{name:J(i)+l,styles:i,next:a}},tl=!!s.useInsertionEffect&&s.useInsertionEffect,tu=tl||function(t){return t()};tl||i.useLayoutEffect;var tf={}.hasOwnProperty,tp=(0,i.createContext)("undefined"!=typeof HTMLElement?function(t){var e,r,n,o,a,i=t.key;if("css"===i){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))})}var l=t.stylisPlugins||U,f={},w=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)f[e[r]]=!0;w.push(t)});var k=(r=(e=[X,V].concat(l,[B,(n=function(t){a.insert(t)},function(t){!t.root&&(t=t.return)&&n(t)})])).length,function(t,n,o,a){for(var i="",s=0;s<r;s++)i+=e[s](t,n,o,a)||"";return i}),M=function(t){var e,r;return L((r=function t(e,r,n,o,a,i,s,c,l){for(var f,w=0,k=0,j=s,M=0,I=0,A=0,$=1,R=1,N=1,L=0,B="",F=a,W=i,Y=o,q=B;R;)switch(A=L,L=E()){case 40:if(108!=A&&58==m(q,j-1)){-1!=d(q+=p(T(L),"&","&\f"),"&\f")&&(N=-1);break}case 34:case 39:case 91:q+=T(L);break;case 9:case 10:case 13:case 32:q+=function(t){for(;x=_();)if(x<33)E();else break;return P(t)>2||P(x)>3?"":" "}(A);break;case 92:q+=function(t,e){for(var r;--e&&E()&&!(x<48)&&!(x>102)&&(!(x>57)||!(x<65))&&(!(x>70)||!(x<97)););return r=S+(e<6&&32==_()&&32==E()),y(O,t,r)}(S-1,7);continue;case 47:switch(_()){case 42:case 47:g(C(f=function(t,e){for(;E();)if(t+x===57)break;else if(t+x===84&&47===_())break;return"/*"+y(O,e,S-1)+"*"+u(47===t?t:E())}(E(),S),r,n,z,u(x),y(f,2,-2),0),l);break;default:q+="/"}break;case 123*$:c[w++]=h(q)*N;case 125*$:case 59:case 0:switch(L){case 0:case 125:R=0;case 59+k:I>0&&h(q)-j&&g(I>32?D(q+";",o,n,j-1):D(p(q," ","")+";",o,n,j-2),l);break;case 59:q+=";";default:if(g(Y=H(q,r,n,w,k,a,c,B,F=[],W=[],j),i),123===L){if(0===k)t(q,r,Y,Y,F,i,j,c,W);else switch(99===M&&110===m(q,3)?100:M){case 100:case 109:case 115:t(e,Y,Y,o&&g(H(e,Y,Y,0,0,a,c,B,a,F=[],j),W),a,W,j,c,o?F:W);break;default:t(q,Y,Y,Y,[""],W,0,c,W)}}}w=k=I=0,$=N=1,B=q="",j=s;break;case 58:j=1+h(q),I=A;default:if($<1){if(123==L)--$;else if(125==L&&0==$++&&125==(x=S>0?m(O,--S):0,b--,10===x&&(b=1,v--),x))continue}switch(q+=u(L),L*$){case 38:N=k>0?1:(q+="\f",-1);break;case 44:c[w++]=(h(q)-1)*N,N=1;break;case 64:45===_()&&(q+=T(E())),M=_(),k=j=h(B=q+=function(t){for(;!P(_());)E();return y(O,t,S)}(S)),L++;break;case 45:45===A&&2==h(q)&&($=0)}}return i}("",null,null,null,[""],e=j(e=t),0,[0],e),O="",r),k)},I={key:i,sheet:new c({key:i,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:f,registered:{},insert:function(t,e,r,n){a=r,M(t?t+"{"+e.styles+"}":e.styles),n&&(I.inserted[e.name]=!0)}};return I.sheet.hydrate(w),I}({key:"css"}):null);tp.Provider;var td=function(t){return(0,i.forwardRef)(function(e,r){return t(e,(0,i.useContext)(tp),r)})},tm=(0,i.createContext)({}),ty="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",th=function(t,e){var r={};for(var n in e)tf.call(e,n)&&(r[n]=e[n]);return r[ty]=t,r},tg=function(t){var e=t.cache,r=t.serialized,n=t.isStringTag;return Q(e,r,n),tu(function(){return Z(e,r,n)}),null},tv=td(function(t,e,r){var n=t.css;"string"==typeof n&&void 0!==e.registered[n]&&(n=e.registered[n]);var o=t[ty],a=[n],s="";"string"==typeof t.className?s=G(e.registered,a,t.className):null!=t.className&&(s=t.className+" ");var c=tc(a,void 0,(0,i.useContext)(tm));s+=e.key+"-"+c.name;var l={};for(var u in t)tf.call(t,u)&&"css"!==u&&u!==ty&&(l[u]=t[u]);return l.ref=r,l.className=s,(0,i.createElement)(i.Fragment,null,(0,i.createElement)(tg,{cache:e,serialized:c,isStringTag:"string"==typeof o}),(0,i.createElement)(o,l))});function tb(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return tc(e)}r(8679);var tw=function(){var t=tb.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},tS=function t(e){for(var r=e.length,n=0,o="";n<r;n++){var a=e[n];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=t(a);else for(var s in i="",a)a[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=a}i&&(o&&(o+=" "),o+=i)}}return o},tx=function(t){var e=t.cache,r=t.serializedArr;return tu(function(){for(var t=0;t<r.length;t++)Z(e,r[t],!1)}),null},tO=td(function(t,e){var r=[],n=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=tc(n,e.registered);return r.push(a),Q(e,a,!1),e.key+"-"+a.name},o={css:n,cx:function(){for(var t,r,o,a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=G(e.registered,r=[],t=tS(i)),r.length<2?t:o+n(r)},theme:(0,i.useContext)(tm)},a=t.children(o);return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(tx,{cache:e,serializedArr:r}),a)});function tC(){return(tC=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}let tk=new Map,tE=new WeakMap,t_=0;function tP(t,e,r={},o=n){if(void 0===window.IntersectionObserver&&void 0!==o){let a=t.getBoundingClientRect();return e(o,{isIntersecting:o,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}let{id:i,observer:s,elements:c}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var r;return`${e}_${"root"===e?(r=t.root)?(tE.has(r)||(t_+=1,tE.set(r,t_.toString())),tE.get(r)):"0":t[e]}`}).toString(),r=tk.get(e);if(!r){let n;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{var r;let a=e.isIntersecting&&n.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=a),null==(r=o.get(e.target))||r.forEach(t=>{t(a,e)})})},t);n=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:a,elements:o},tk.set(e,r)}return r}(r),l=c.get(t)||[];return c.has(t)||c.set(t,l),l.push(e),s.observe(t),function(){l.splice(l.indexOf(e),1),0===l.length&&(c.delete(t),s.unobserve(t)),0===c.size&&(s.disconnect(),tk.delete(i))}}let tj=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function tT(t){return"function"!=typeof t.children}class tM extends i.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()},this.handleChange=(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),tT(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:o,fallbackInView:a}=this.props;this._unobserveCb=tP(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:o},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!tT(this.props)){let{inView:t,entry:e}=this.state;return this.props.children({inView:t,entry:e,ref:this.handleNode})}let r=this.props,{children:n,as:o}=r,a=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(r,tj);return i.createElement(o||"div",tC({ref:this.handleNode},a),n)}}function tI({threshold:t,delay:e,trackVisibility:r,rootMargin:n,root:o,triggerOnce:a,skip:s,initialInView:c,fallbackInView:l,onChange:u}={}){var f;let[p,d]=i.useState(null),m=i.useRef(),[y,h]=i.useState({inView:!!c,entry:void 0});m.current=u,i.useEffect(()=>{let i;if(!s&&p)return i=tP(p,(t,e)=>{h({inView:t,entry:e}),m.current&&m.current(t,e),e.isIntersecting&&a&&i&&(i(),i=void 0)},{root:o,rootMargin:n,threshold:t,trackVisibility:r,delay:e},l),()=>{i&&i()}},[Array.isArray(t)?t.toString():t,p,o,n,a,s,r,l,e]);let g=null==(f=y.entry)?void 0:f.target;i.useEffect(()=>{p||!g||a||s||h({inView:!!c,entry:void 0})},[p,g,a,s,c]);let v=[d,y.inView,y.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var tA=r(4954),tz=r(5893),t$=tz.Fragment;function tR(t,e,r){return tf.call(e,"css")?(0,tz.jsx)(tv,th(t,e),r):(0,tz.jsx)(t,e,r)}tw`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,tw`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,tw`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,tw`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,tw`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tw`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,tw`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,tw`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var tN=tw`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,tL=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tB=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tH=tw`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tD=tw`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tF=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tW=tw`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tY=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tq=tw`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tX=tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tV=tw`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tU=tw`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tG=tw`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tQ=tb`
  opacity: 0;
`,tZ=tb`
  display: inline-block;
  white-space: pre;
`,tJ=t=>{let{cascade:e=!1,damping:r=.5,delay:n=0,duration:o=1e3,fraction:a=0,keyframes:s=tF,triggerOnce:c=!1,css:l,className:u,style:f,childClassName:p,childStyle:d,children:m,onVisibilityChange:y}=t,h=(0,i.useMemo)(()=>(function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:n=tF,iterationCount:o=1}){return tb`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};
  `})({keyframes:s,duration:o}),[o,s]);return void 0==m?null:"string"==typeof m||"number"==typeof m||"boolean"==typeof m?tR(tK,{...t,animationStyles:h,children:String(m)}):(0,tA.isFragment)(m)?tR(t0,{...t,animationStyles:h}):tR(t$,{children:i.Children.map(m,(s,m)=>{if(!(0,i.isValidElement)(s))return null;let g=[l,h],v=n+(e?m*o*r:0);switch(s.type){case"ol":case"ul":return tR(tO,{children:({cx:e})=>tR(s.type,{...s.props,className:e(u,s.props.className),style:{...f,...s.props.style},children:tR(tJ,{...t,children:s.props.children})})});case"li":return tR(tM,{threshold:a,triggerOnce:c,onChange:y,children:({inView:t,ref:e})=>tR(tO,{children:({cx:r})=>tR(s.type,{...s.props,ref:e,className:r(p,s.props.className),css:t?g:tQ,style:{...d,...s.props.style,animationDelay:v+"ms"}})})});default:return tR(tM,{threshold:a,triggerOnce:c,onChange:y,children:({inView:t,ref:e})=>tR("div",{ref:e,className:u,css:t?g:tQ,style:{...f,animationDelay:v+"ms"},children:tR(tO,{children:({cx:t})=>tR(s.type,{...s.props,className:t(p,s.props.className),style:{...d,...s.props.style}})})})})}})})},tK=t=>{let{animationStyles:e,cascade:r=!1,damping:n=.5,delay:o=0,duration:a=1e3,fraction:i=0,triggerOnce:s=!1,css:c,className:l,style:u,children:f,onVisibilityChange:p}=t,{ref:d,inView:m}=tI({triggerOnce:s,threshold:i,onChange:p});return r?tR("div",{ref:d,className:l,css:[c,tZ],style:u,children:f.split("").map((t,r)=>tR("span",{css:m?e:tQ,style:{animationDelay:o+r*a*n+"ms"},children:t},r))}):tR(t0,{...t,children:f})},t0=t=>{let{animationStyles:e,fraction:r=0,triggerOnce:n=!1,css:o,className:a,style:i,children:s,onVisibilityChange:c}=t,{ref:l,inView:u}=tI({triggerOnce:n,threshold:r,onChange:c});return tR("div",{ref:l,className:a,css:u?[o,e]:tQ,style:i,children:s})};tw`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,tw`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,tw`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,tw`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,tw`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var t1=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,t5=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,t3=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,t2=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,t4=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,t7=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,t6=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,t9=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,t8=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,et=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,ee=tw`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,er=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,en=tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,eo=t=>{let{big:e=!1,direction:r,reverse:n=!1,...o}=t,a=(0,i.useMemo)(()=>(function(t,e,r){switch(r){case"bottom-left":return e?t5:tL;case"bottom-right":return e?t3:tB;case"down":return t?e?t4:tD:e?t2:tH;case"left":return t?e?t6:tW:e?t7:tF;case"right":return t?e?t8:tq:e?t9:tY;case"top-left":return e?et:tX;case"top-right":return e?ee:tV;case"up":return t?e?en:tG:e?er:tU;default:return e?t1:tN}})(e,n,r),[e,r,n]);return tR(tJ,{keyframes:a,...o})};tw`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,tw`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tw`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tw`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,tw`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,tb`
  backface-visibility: visible;
`,tw`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,tw`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,tb`
  transform-origin: top left;
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tw`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,tw`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,tw`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,tw`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,tw`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);