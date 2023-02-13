import{J as rt,K as ut,d as it,r as V,L as at,E as $,M as ct,N as st,O as lt,o as S,c as I,b as A,w as M,a as E,F as R,q as U,P as ft,y as z,n as dt,Q as pt,p as yt,e as mt,x as L,R as vt,_ as gt}from"./index.935b857b.js";/* empty css                */import{_ as ht}from"./CoTips.0b6d270e.js";import{I as bt}from"./iconify.9d82733a.js";var Y={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(x,j){(function(C,g){x.exports=g()})(ut,function(){return function(){var w={686:function(a,l,t){t.d(l,{default:function(){return ot}});var c=t(279),r=t.n(c),f=t(370),v=t.n(f),y=t(817),h=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var m=function(n){var e=h()(n);return d("cut"),e},p=m;function _(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(o,"px"),e.setAttribute("readonly",""),e.value=i,e}var B=function(n,e){var o=_(n);e.container.appendChild(o);var u=h()(o);return d("copy"),o.remove(),u},q=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},o="";return typeof n=="string"?o=B(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?o=B(n.value,e):(o=h()(n),d("copy")),o},D=q;function T(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(i)}var G=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,o=e===void 0?"copy":e,u=n.container,s=n.target,b=n.text;if(o!=="copy"&&o!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(s!==void 0)if(s&&T(s)==="object"&&s.nodeType===1){if(o==="copy"&&s.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(o==="cut"&&(s.hasAttribute("readonly")||s.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return D(b,{container:u});if(s)return o==="cut"?p(s):D(s,{container:u})},J=G;function F(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(e){return typeof e}:F=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(i)}function K(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function H(i,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function Q(i,n,e){return n&&H(i.prototype,n),e&&H(i,e),i}function X(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&P(i,n)}function P(i,n){return P=Object.setPrototypeOf||function(o,u){return o.__proto__=u,o},P(i,n)}function W(i){var n=et();return function(){var o=k(i),u;if(n){var s=k(this).constructor;u=Reflect.construct(o,arguments,s)}else u=o.apply(this,arguments);return Z(this,u)}}function Z(i,n){return n&&(F(n)==="object"||typeof n=="function")?n:tt(i)}function tt(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function et(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function k(i){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(i)}function N(i,n){var e="data-clipboard-".concat(i);if(!!n.hasAttribute(e))return n.getAttribute(e)}var nt=function(i){X(e,i);var n=W(e);function e(o,u){var s;return K(this,e),s=n.call(this),s.resolveOptions(u),s.listenClick(o),s}return Q(e,[{key:"resolveOptions",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof u.action=="function"?u.action:this.defaultAction,this.target=typeof u.target=="function"?u.target:this.defaultTarget,this.text=typeof u.text=="function"?u.text:this.defaultText,this.container=F(u.container)==="object"?u.container:document.body}},{key:"listenClick",value:function(u){var s=this;this.listener=v()(u,"click",function(b){return s.onClick(b)})}},{key:"onClick",value:function(u){var s=u.delegateTarget||u.currentTarget,b=this.action(s)||"copy",O=J({action:b,container:this.container,target:this.target(s),text:this.text(s)});this.emit(O?"success":"error",{action:b,text:O,trigger:s,clearSelection:function(){s&&s.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(u){return N("action",u)}},{key:"defaultTarget",value:function(u){var s=N("target",u);if(s)return document.querySelector(s)}},{key:"defaultText",value:function(u){return N("text",u)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(u){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return D(u,s)}},{key:"cut",value:function(u){return p(u)}},{key:"isSupported",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],s=typeof u=="string"?[u]:u,b=!!document.queryCommandSupported;return s.forEach(function(O){b=b&&!!document.queryCommandSupported(O)}),b}}]),e}(r()),ot=nt},828:function(a){var l=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(r,f){for(;r&&r.nodeType!==l;){if(typeof r.matches=="function"&&r.matches(f))return r;r=r.parentNode}}a.exports=c},438:function(a,l,t){var c=t(828);function r(y,h,d,m,p){var _=v.apply(this,arguments);return y.addEventListener(d,_,p),{destroy:function(){y.removeEventListener(d,_,p)}}}function f(y,h,d,m,p){return typeof y.addEventListener=="function"?r.apply(null,arguments):typeof d=="function"?r.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(_){return r(_,h,d,m,p)}))}function v(y,h,d,m){return function(p){p.delegateTarget=c(p.target,h),p.delegateTarget&&m.call(y,p)}}a.exports=f},879:function(a,l){l.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},l.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||l.node(t[0]))},l.string=function(t){return typeof t=="string"||t instanceof String},l.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(a,l,t){var c=t(879),r=t(438);function f(d,m,p){if(!d&&!m&&!p)throw new Error("Missing required arguments");if(!c.string(m))throw new TypeError("Second argument must be a String");if(!c.fn(p))throw new TypeError("Third argument must be a Function");if(c.node(d))return v(d,m,p);if(c.nodeList(d))return y(d,m,p);if(c.string(d))return h(d,m,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function v(d,m,p){return d.addEventListener(m,p),{destroy:function(){d.removeEventListener(m,p)}}}function y(d,m,p){return Array.prototype.forEach.call(d,function(_){_.addEventListener(m,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(_){_.removeEventListener(m,p)})}}}function h(d,m,p){return r(document.body,d,m,p)}a.exports=f},817:function(a){function l(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var r=t.hasAttribute("readonly");r||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),r||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var f=window.getSelection(),v=document.createRange();v.selectNodeContents(t),f.removeAllRanges(),f.addRange(v),c=f.toString()}return c}a.exports=l},279:function(a){function l(){}l.prototype={on:function(t,c,r){var f=this.e||(this.e={});return(f[t]||(f[t]=[])).push({fn:c,ctx:r}),this},once:function(t,c,r){var f=this;function v(){f.off(t,v),c.apply(r,arguments)}return v._=c,this.on(t,v,r)},emit:function(t){var c=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),f=0,v=r.length;for(f;f<v;f++)r[f].fn.apply(r[f].ctx,c);return this},off:function(t,c){var r=this.e||(this.e={}),f=r[t],v=[];if(f&&c)for(var y=0,h=f.length;y<h;y++)f[y].fn!==c&&f[y].fn._!==c&&v.push(f[y]);return v.length?r[t]=v:delete r[t],this}},a.exports=l,a.exports.TinyEmitter=l}},C={};function g(a){if(C[a])return C[a].exports;var l=C[a]={exports:{}};return w[a](l,l.exports,g),l.exports}return function(){g.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return g.d(l,{a:l}),l}}(),function(){g.d=function(a,l){for(var t in l)g.o(l,t)&&!g.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:l[t]})}}(),function(){g.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)}}(),g(686)}().default})})(Y);const _t=rt(Y.exports),Et=x=>(yt("data-v-a2b28544"),x=x(),mt(),x),xt=Et(()=>E("div",null,[L(" \u5F97\u76CA\u4E8E"),E("a",{class:"co-link",target:"_blank",href:"https://github.com/antfu/unplugin-icons"},"unplugin-icons"),L("\u548C"),E("a",{class:"co-link",target:"_blank",href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),L("\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528"),E("a",{class:"co-link",target:"_blank",href:"http://icon-sets.iconify.design/"},"Iconify\u7684\u56FE\u6807\u96C6"),L("\uFF0C\u56E0\u4E3A\u6570\u91CF\u592A\u591A\uFF0C\u7B80\u5355\u5217\u51FA\u51E0\u4E2A\u3002 ")],-1)),Ct={class:"icon-list"},Ft=["data-name","data-clipboard-text"],St={class:"icon-item--name"},At={class:"icon-list"},wt=["data-name","data-clipboard-text"],Tt={class:"icon-item--name"},kt=it({__name:"IconAssets",setup(x){const j=V(["mdi:ab-testing","mdi:abacus","mdi:account-box","mdi:home-variant","mdi:qqchat","mdi:github","ic:round-apple","ic:outline-facebook","ic:baseline-ac-unit","ic:baseline-account-circle","mdi:google-chrome","ph:google-logo-fill","mdi:google-play","mdi:google-cloud"]),w=a=>`<el-icon><${a} /></el-icon>`,C=a=>`<Icon icon="${a}" />`;let g=V();return at(()=>{g.value=new _t(".icon-item"),g.value.on("success",a=>{$({message:`\u56FE\u6807'${a.trigger.dataset.name}'\u590D\u5236\u6210\u529F\uFF01`,type:"success",showClose:!0})}),g.value.on("error",a=>{$({message:`\u56FE\u6807'${a.trigger.dataset.name}'\u590D\u5236\u5931\u8D25\uFF01`,type:"error",showClose:!0})})}),ct(()=>{g.value.destroy()}),st(()=>{g.value.destroy()}),(a,l)=>{const t=ht,c=lt;return S(),I(R,null,[A(t,{class:"iconify-tip",title:"\u4F7F\u7528Iconify\u7EC4\u4EF6"},{default:M(()=>[xt]),_:1}),E("div",Ct,[(S(!0),I(R,null,U(j.value,(r,f)=>(S(),I("div",{class:"icon-item",key:f,"data-name":r,"data-clipboard-text":C(r)},[A(c,null,{default:M(()=>[A(ft(bt),{icon:r},null,8,["icon"])]),_:2},1024),E("p",St,z(r),1)],8,Ft))),128))]),A(t,{title:"\u4F7F\u7528ElementPlus\u7684\u7EC4\u4EF6",content:"\u56E0\u4E3A\u4F7F\u7528\u4E86ElementPlus\u6846\u67B6\uFF0C\u6240\u4EE5\u5728\u8BE5\u7BA1\u7406\u7CFB\u7EDF\u4E2D\u53EF\u4EE5\u4F7F\u7528\u5176\u63D0\u4F9B\u7684\u6240\u6709\u56FE\u6807\u7EC4\u4EF6"}),E("div",At,[(S(),I(R,null,U(pt,(r,f)=>E("div",{class:"icon-item",key:f,"data-name":r.name,"data-clipboard-text":w(r.name)},[A(c,null,{default:M(()=>[(S(),dt(vt(r)))]),_:2},1024),E("p",Tt,z(r.name),1)],8,wt)),64))])],64)}}});const Nt=gt(kt,[["__scopeId","data-v-a2b28544"]]);export{Nt as default};
