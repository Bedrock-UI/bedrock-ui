(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9132:function(e,t,n){"use strict";var r=n(959),o=n(5924),i=n(4549);t.Z=function({className:e,color:t="primary",disabled:n,square:c=!1,variant:l="contained",...a}){return r.createElement("button",{...a,className:(0,o.Z)("button",e,t,{disabled:n,square:c},(0,i.Z)(l)),disabled:n})}},1384:function(e,t,n){"use strict";var r=n(959),o=n(5924),i=n(3179);t.Z=function({className:e,onClose:t,open:n=!1,position:c="left",...l}){let a=(0,r.useRef)(null);return(0,i.Z)(a,n,()=>{t&&t()}),(0,r.useEffect)(()=>{document.body.style.overflow=n?"hidden":"scroll"},[n]),r.createElement(r.Fragment,null,r.createElement("div",{...l,className:(0,o.Z)("drawer",e,c,{open:n}),ref:a}),r.createElement("div",{className:(0,o.Z)("drawer-overlay",{open:n})}))}},7452:function(e,t,n){"use strict";var r=n(5924),o=n(959),i=n(8557),c=n(4549);t.Z=function({className:e,flexDirection:t="row",justifyContent:n="normal",m:l,mx:a,my:s,mt:u,mb:f,ml:d,mr:p,p:h,px:v,py:m,pt:x,pb:g,pl:j,pr:b,style:y,...k}){let w=(0,i.Z)({m:l,mx:a,my:s,mt:u,mb:f,ml:d,mr:p,p:h,px:v,py:m,pt:x,pb:g,pl:j,pr:b});return o.createElement("div",{...k,className:(0,r.Z)("flex",e,(0,c.Z)(t,{prefix:"flex-direction-"}),(0,c.Z)(n,{prefix:"justify-content-"})),style:{...w,...y}})}},2315:function(e,t,n){"use strict";var r=n(5924),o=n(959);t.Z=function({className:e,position:t,...n}){return o.createElement("header",{...n,className:(0,r.Z)("header",e,t)})}},2275:function(e,t,n){"use strict";var r=n(959),o=n(5924),i=n(4549);let c={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"};t.Z=function({className:e,color:t,level:n=1,...l}){return(0,r.createElement)(c[n],{...l,className:(0,o.Z)("heading",(0,i.Z)(t),e)},l.children)}},1166:function(e,t,n){"use strict";var r=n(959),o=n(5924);t.Z=function({className:e,underline:t=!1,...n}){return r.createElement("a",{...n,className:(0,o.Z)("link",e,{underline:t})})}},3179:function(e,t,n){"use strict";var r=n(959);t.Z=function(e,t,n){(0,r.useEffect)(()=>{function r(r){t&&e.current&&!e.current.contains(r.target)&&n()}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[n,e,t])}},8557:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(959);let o={m:function(e){return{margin:`calc(var(--spacing) * ${e}px)`}},mx:function(e){return{...l(e),...a(e)}},my:function(e){return{...i(e),...c(e)}},mt:i,mb:c,ml:l,mr:a,p:function(e){return{padding:`calc(var(--spacing) * ${e}px)`}},px:function(e){return{...f(e),...d(e)}},py:function(e){return{...s(e),...u(e)}},pt:s,pb:u,pl:f,pr:d};function i(e){return{marginTop:`calc(var(--spacing) * ${e}px)`}}function c(e){return{marginBottom:`calc(var(--spacing) * ${e}px)`}}function l(e){return{marginLeft:`calc(var(--spacing) * ${e}px)`}}function a(e){return{marginRight:`calc(var(--spacing) * ${e}px)`}}function s(e){return{paddingTop:`calc(var(--spacing) * ${e}px)`}}function u(e){return{paddingBottom:`calc(var(--spacing) * ${e}px)`}}function f(e){return{paddingLeft:`calc(var(--spacing) * ${e}px)`}}function d(e){return{paddingRight:`calc(var(--spacing) * ${e}px)`}}var p=function(e){let t={};for(let n in e){let r=e[n];if(void 0!==r){let i=o[n];t={...i(r)}}}return t},h=function(e){return(0,r.useMemo)(()=>p(e),[e])}},4549:function(e,t){"use strict";t.Z=function(e,t){let{prefix:n=""}=t||{};return"object"!=typeof e&&null!=e?`${n}${e}`:"object"==typeof e&&e?Object.entries(e).map(e=>`${n}${e.reverse().join("-")}`).join(" "):""}},4990:function(e,t,n){"use strict";n.d(t,{FpF:function(){return s},_AG:function(){return f},iCC:function(){return x},oBr:function(){return l},wBr:function(){return v},zcp:function(){return p}});var r=n(959);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=["size","color","stroke"];function l(e){var t=e.size,n=void 0===t?24:t,l=e.color,a=e.stroke,s=i(e,c);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-github",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===a?2:a,stroke:void 0===l?"currentColor":l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"}))}var a=["size","color","stroke"];function s(e){var t=e.size,n=void 0===t?24:t,c=e.color,l=e.stroke,s=i(e,a);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-license",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===l?2:l,stroke:void 0===c?"currentColor":c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"}),r.createElement("line",{x1:9,y1:7,x2:13,y2:7}),r.createElement("line",{x1:9,y1:11,x2:13,y2:11}))}var u=["size","color","stroke"];function f(e){var t=e.size,n=void 0===t?24:t,c=e.color,l=e.stroke,a=i(e,u);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-menu-2",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===l?2:l,stroke:void 0===c?"currentColor":c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("line",{x1:4,y1:6,x2:20,y2:6}),r.createElement("line",{x1:4,y1:12,x2:20,y2:12}),r.createElement("line",{x1:4,y1:18,x2:20,y2:18}))}var d=["size","color","stroke"];function p(e){var t=e.size,n=void 0===t?24:t,c=e.color,l=e.stroke,a=i(e,d);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-rocket",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===l?2:l,stroke:void 0===c?"currentColor":c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"}),r.createElement("path",{d:"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"}),r.createElement("circle",{cx:15,cy:9,r:1}))}var h=["size","color","stroke"];function v(e){var t=e.size,n=void 0===t?24:t,c=e.color,l=e.stroke,a=i(e,h);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-selector",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===l?2:l,stroke:void 0===c?"currentColor":c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("polyline",{points:"8 9 12 5 16 9"}),r.createElement("polyline",{points:"16 15 12 19 8 15"}))}var m=["size","color","stroke"];function x(e){var t=e.size,n=void 0===t?24:t,c=e.color,l=e.stroke,a=i(e,m);return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-settings",width:n,height:n,viewBox:"0 0 24 24",strokeWidth:void 0===l?2:l,stroke:void 0===c?"currentColor":c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"}),r.createElement("circle",{cx:12,cy:12,r:3}))}},5924:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t)}return o}t.Z=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},5831:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1545)}])},8175:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3054:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(553).Z;n(2359).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(7022).Z,i=n(5997).Z,c=o(n(959)),l=n(3325),a=n(6427),s=n(825),u=n(9919),f=n(3155),d=n(8175),p=n(6383),h={};function v(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var m=c.default.forwardRef(function(e,t){var n,o,m=e.href,x=e.as,g=e.children,j=e.prefetch,b=e.passHref,y=e.replace,k=e.shallow,w=e.scroll,E=e.locale,_=e.onClick,C=e.onMouseEnter,Z=e.onTouchStart,L=e.legacyBehavior,O=void 0===L?!0!==Boolean(!1):L,M=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,O&&("string"==typeof n||"number"==typeof n)&&(n=c.default.createElement("a",null,n));var P=!1!==j,N=c.default.useContext(s.RouterContext),R=c.default.useContext(u.AppRouterContext);R&&(N=R);var z=c.default.useMemo(function(){var e=r(l.resolveHref(N,m,!0),2),t=e[0],n=e[1];return{href:t,as:x?l.resolveHref(N,x):n||t}},[N,m,x]),B=z.href,T=z.as,S=c.default.useRef(B),H=c.default.useRef(T);O&&(o=c.default.Children.only(n));var I=O?o&&"object"==typeof o&&o.ref:t,D=r(f.useIntersection({rootMargin:"200px"}),3),$=D[0],A=D[1],F=D[2],U=c.default.useCallback(function(e){(H.current!==T||S.current!==B)&&(F(),H.current=T,S.current=B),$(e),I&&("function"==typeof I?I(e):"object"==typeof I&&(I.current=e))},[T,I,B,F,$]);c.default.useEffect(function(){var e=A&&P&&l.isLocalURL(B),t=void 0!==E?E:N&&N.locale,n=h[B+"%"+T+(t?"%"+t:"")];e&&!n&&v(N,B,T,{locale:t})},[T,B,A,E,P,N]);var G={ref:U,onClick:function(e){O||"function"!=typeof _||_(e),O&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,s,u,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var d,p,h=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:a}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};u?c.default.startTransition(h):h()}}(e,N,B,T,y,k,w,E,Boolean(R),P)},onMouseEnter:function(e){O||"function"!=typeof C||C(e),O&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!P&&R)&&l.isLocalURL(B)&&v(N,B,T,{priority:!0})},onTouchStart:function(e){O||"function"!=typeof Z||Z(e),O&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!P&&R)&&l.isLocalURL(B)&&v(N,B,T,{priority:!0})}};if(!O||b||"a"===o.type&&!("href"in o.props)){var W=void 0!==E?E:N&&N.locale,K=N&&N.isLocaleDomain&&d.getDomainLocale(T,W,N.locales,N.domainLocales);G.href=K||p.addBasePath(a.addLocale(T,W,N&&N.defaultLocale))}return O?c.default.cloneElement(o,G):c.default.createElement("a",Object.assign({},M,G),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(553).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!c,u=r(o.useState(!1),2),f=u[0],d=u[1],p=r(o.useState(null),2),h=p[0],v=p[1];return o.useEffect(function(){if(c){if(!s&&!f&&h&&h.tagName){var e,r,o,u,p,v,m;return r=function(e){return e&&d(e)},p=(u=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=a.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=l.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},a.push(n),l.set(n,t),t}(o={root:null==t?void 0:t.current,rootMargin:n})).id,v=u.observer,(m=u.elements).set(h,r),v.observe(h),function(){if(m.delete(h),v.unobserve(h),0===m.size){v.disconnect(),l.delete(p);var e=a.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&a.splice(e,1)}}}}else if(!f){var x=i.requestIdleCallback(function(){return d(!0)});return function(){return i.cancelIdleCallback(x)}}},[h,s,n,t,f]),[v,f,o.useCallback(function(){d(!1)},[])]};var o=n(959),i=n(972),c="function"==typeof IntersectionObserver,l=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9919:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(7022).Z)(n(959)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var c=r.default.createContext(null);t.GlobalLayoutRouterContext=c;var l=r.default.createContext(null);t.TemplateContext=l},1545:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return P}});var o=n(1527);n(1891);var i=n(2931),c=n.n(i),l=n(4990),a=n(2315),s=n(7452),u=n(5924),f=n(959),d=n(4549),p=function({className:e,on:t,...n}){return f.createElement("div",{...n,className:(0,u.Z)("hidden",e,(0,d.Z)(t))})},h=n(9132),v=n(2275),m=n(1166),x=n(4537),g=n.n(x),j=n(1312),b=n(1384),y=n(731),k=n.n(y),w=function(e){var t=e.children,n=e.href,i=(0,j.useRouter)().pathname;return(0,o.jsx)(g(),{href:n,passHref:!0,children:(0,o.jsx)(m.Z,{className:(0,u.Z)(k().link,r({},k().linkActive,i===n)),children:t})})},E=n(8013),_=n.n(E);function C(e){var t=e.children,n=e.open,r=e.onClose;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{on:{mobile:!1,tablet:!0,desktop:!0},children:(0,o.jsx)(b.Z,{open:n,onClose:r,style:{zIndex:1100},children:(0,o.jsx)(s.Z,{flexDirection:"column",p:4,children:t})})}),(0,o.jsx)(p,{on:{mobile:!0,tablet:!1,desktop:!1},children:(0,o.jsx)(s.Z,{className:_().leftPanel,flexDirection:"column",children:t})})]})}var Z=function(e){var t=e.open,n=e.onClose;return(0,o.jsxs)(C,{open:t,onClose:n,children:[(0,o.jsx)("p",{children:"Getting Started"}),(0,o.jsx)(w,{href:"/getting-started/overview",children:"Getting Started"}),(0,o.jsx)(w,{href:"/getting-started/install",children:"Installation"}),(0,o.jsx)("p",{children:"Core"}),(0,o.jsx)(w,{href:"/components/alert",children:"Alert"}),(0,o.jsx)(w,{href:"/components/badge",children:"Badge"}),(0,o.jsx)(w,{href:"/components/button",children:"Button"}),(0,o.jsx)(w,{href:"/components/card",children:"Card"}),(0,o.jsx)(w,{href:"/components/checkbox",children:"Checkbox"}),(0,o.jsx)(w,{href:"/components/divider",children:"Divider"}),(0,o.jsx)(w,{href:"/components/drawer",children:"Drawer"}),(0,o.jsx)(w,{href:"/components/flex",children:"Flex"}),(0,o.jsx)(w,{href:"/components/grid",children:"Grid"}),(0,o.jsx)(w,{href:"/components/header",children:"Header"}),(0,o.jsx)(w,{href:"/components/heading",children:"Heading"}),(0,o.jsx)(w,{href:"/components/highlight",children:"Highlight"}),(0,o.jsx)(w,{href:"/components/link",children:"Link"}),(0,o.jsx)(w,{href:"/components/list",children:"List"}),(0,o.jsx)(w,{href:"/components/modal",children:"Modal"}),(0,o.jsx)(w,{href:"/components/radio",children:"Radio"}),(0,o.jsx)(w,{href:"/components/select",children:"Select"}),(0,o.jsx)(w,{href:"/components/table",children:"Table"}),(0,o.jsx)(w,{href:"/components/tabs",children:"Tabs"}),(0,o.jsx)(w,{href:"/components/text",children:"Text"}),(0,o.jsx)(w,{href:"/components/textarea",children:"Textarea"}),(0,o.jsx)(w,{href:"/components/textinput",children:"TextInput"}),(0,o.jsx)("p",{children:"Icons"}),(0,o.jsx)(w,{href:"/icons/libraries",children:"Icon Libraries"}),(0,o.jsx)("p",{children:"Variables"}),(0,o.jsx)(w,{href:"/variables/root",children:"Root Variables"})]})},L=n(1028),O=n.n(L),M=function(e){var t=e.children,n=(0,j.useRouter)().pathname,r=(0,f.useState)(!1),i=r[0],c=r[1];return"/"===n?(0,o.jsx)(o.Fragment,{children:t}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{position:"fixed",children:(0,o.jsxs)(s.Z,{justifyContent:"space-between",style:{width:"100%"},children:[(0,o.jsx)(p,{on:{mobile:!1,tablet:!0,desktop:!0},children:(0,o.jsx)(s.Z,{children:(0,o.jsx)(h.Z,{onClick:function(){return c(!i)},variant:"text",children:(0,o.jsx)(l._AG,{size:24})})})}),(0,o.jsx)(s.Z,{flexDirection:"column",justifyContent:"center",children:(0,o.jsx)(g(),{href:"/",children:(0,o.jsx)(v.Z,{level:4,style:{cursor:"pointer"},children:"Bedrock UI"})})}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(s.Z,{flexDirection:"column",justifyContent:"center",mx:6,children:(0,o.jsx)(g(),{href:"/blog",passHref:!0,children:(0,o.jsx)(m.Z,{children:"Blog"})})}),(0,o.jsx)(h.Z,{onClick:function(){return window.open("https://github.com/matthewwolfe/bedrock-ui","_blank")},square:!0,variant:"text",children:(0,o.jsx)(l.oBr,{size:24})})]})]})}),(0,o.jsx)(s.Z,{pt:16,children:n.startsWith("/blog")?t:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Z,{open:i,onClose:function(){return c(!1)}}),(0,o.jsx)(s.Z,{className:O().content,children:t})]})})]})},P=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"Bedrock UI"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"data:,"})]}),(0,o.jsx)(M,{children:(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},n))})]})}},1028:function(e){e.exports={content:"Layout_content__CTp00"}},8013:function(e){e.exports={leftPanel:"LeftPanel_leftPanel__AaD9v",leftPanelDivider:"LeftPanel_leftPanelDivider__hEoO_"}},731:function(e){e.exports={link:"Link_link__U28vo",linkActive:"Link_linkActive__SChOH"}},1891:function(){},2931:function(e,t,n){e.exports=n(702)},4537:function(e,t,n){e.exports=n(3054)},1312:function(e,t,n){e.exports=n(6848)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(5831),t(6848)}),_N_E=e.O()}]);