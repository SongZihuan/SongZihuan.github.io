var e=Object.defineProperty,t=(t,n,r)=>(((t,n,r)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r})(t,"symbol"!=typeof n?n+"":n,r),r);import{d as n,c as r,o as i,r as l,a as o,b as s,e as a,f as d}from"./vue-dadf2646.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const c=class{constructor(){t(this,"el",null),t(this,"styleEl",null),t(this,"defaultStyle","\n    ._loading_placeholder.ignore {\n      width: 48px;\n      height: 48px;\n      border: 5px solid #67e59d;\n      border-bottom-color: #099545;\n      border-radius: 50%;\n      display: inline-block;\n      -webkit-animation: rotation 1s linear infinite;\n      animation: rotation 1s linear infinite;\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      box-sizing: border-box;\n    }\n  \n    @keyframes rotation {\n      0% {\n        transform: translateX(-50%) translateY(-50%) rotate(0deg);\n      }\n      100% {\n        transform: translateX(-50%) translateY(-50%) rotate(360deg);\n      }\n    }\n  ")}static getInstance(){return this.instance||(this.instance=new c),c.instance}addStyles(){this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.appendChild(document.createTextNode(this.defaultStyle)),document.head.appendChild(this.styleEl)}createEl(){var e;this.addStyles(),this.el=document.createElement("div"),this.el.classList.add("_loading_placeholder","ignore"),null==(e=document.body)||e.appendChild(this.el)}removeEl(){this.el&&document.body.removeChild(this.el),this.styleEl&&document.head.removeChild(this.styleEl),this.el=null,this.styleEl=null}load(){this.el||this.createEl()}};let u=c;t(u,"instance");const h=u.getInstance(),m=h.load.bind(h),f=h.removeEl.bind(h),p=n({__name:"App",setup:e=>(m(),(e,t)=>{const n=l("router-view");return i(),r(n)})}),y=o(),g={},b=[{path:"/",redirect:"/index"},{path:"/index",component:()=>function(e,t,n){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in g)return;g[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(n)for(let n=r.length-1;n>=0;n--){const i=r[n];if(i.href===e&&(!t||"stylesheet"===i.rel))return}else if(document.querySelector(`link[href="${e}"]${i}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":"modulepreload",t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t?new Promise(((t,n)=>{l.addEventListener("load",t),l.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))}((()=>import("./index-532e2b77.js")),["assets/index-532e2b77.js","assets/vue-dadf2646.js","assets/index-6eff94ec.css"]),meta:{title:"首页"}}],E=s({history:a(""),routes:b,scrollBehavior:()=>({top:0})});E.afterEach((e=>{e.meta.title&&"string"==typeof e.meta.title&&(document.title=e.meta.title),f()}));const v=d(p);v.use(y),v.use(E),v.mount("#app");