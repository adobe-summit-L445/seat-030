import*as e from"@dropins/tools/event-bus.js";import*as t from"@dropins/tools/fetch-graphql.js";import*as r from"@dropins/tools/preact-compat.js";import*as n from"@dropins/tools/preact-hooks.js";import*as o from"@dropins/tools/preact-jsx-runtime.js";import*as a from"@dropins/tools/preact.js";export const id=64;export const ids=[64];export const modules={8164:(e,t,r)=>{r.d(t,{a:()=>h});var n=r(4154),o=r(2720),a=r(896),s=r(8122),u=r(7540),i=r(9952),c=r.n(i),l=r(8340);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,s,u=[],i=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}s.events.enableLogger(!0);var p={default:r(2880)},d=function(e){var t,r=e.children,n=f((0,o.useState)(),2),i=n[0],m=n[1],d=null===(t=u.E.getConfig())||void 0===t?void 0:t.langDefinitions;(0,o.useEffect)((function(){var e=s.events.on("locale",(function(e){e!==i&&m(e)}),{eager:!0});return function(){null==e||e.off()}}),[i]);var h=c()(p,null!=d?d:{});return(0,l.jsx)(a.C,{lang:i,langDefinitions:h,children:r})},h=new n.k((0,l.jsx)(d,{}))},8122:(t,r,n)=>{t.exports=(e=>{var t={};return n.d(t,e),t})({events:()=>e.events})},8616:(e,r,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({FetchGraphQL:()=>t.FetchGraphQL})},6528:(e,t,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({Children:()=>r.Children,createContext:()=>r.createContext,useContext:()=>r.useContext,useEffect:()=>r.useEffect,useMemo:()=>r.useMemo,useState:()=>r.useState})},2720:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState})},6168:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({Fragment:()=>o.Fragment,jsx:()=>o.jsx,jsxs:()=>o.jsxs})},7320:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({Component:()=>a.Component,Fragment:()=>a.Fragment,cloneElement:()=>a.cloneElement,createContext:()=>a.createContext,createElement:()=>a.createElement,createRef:()=>a.createRef,h:()=>a.h,hydrate:()=>a.hydrate,options:()=>a.options,render:()=>a.render,toChildArray:()=>a.toChildArray})},2880:e=>{e.exports=JSON.parse('{"Cart":{"Cart":{"heading":"Shopping Cart"},"MiniCart":{"heading":"Shopping Cart ({count})","estimatedTotal":"Estimated Total","cartLink":"View Cart","checkoutLink":"Checkout"},"EmptyCart":{"heading":"Your cart is empty","cta":"Continue Shopping"},"PriceSummary":{"taxToBeDetermined":"TBD","checkout":"Checkout"},"CartItem":{"regularPrice":"Regular Price","discountedPrice":"Discounted Price"}}}')}};import s from"./runtime.js";import*as u from"./44.js";s.C(u);import*as i from"./154.js";s.C(i);import*as c from"./218.js";s.C(c);import*as l from"./render.js";s.C(l);var f,m=(f=8164,s(s.s=f)).a;export{m as render};