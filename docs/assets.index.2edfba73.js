var e=Object.defineProperty,t=(t,n,r)=>(((t,n,r)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r})(t,"symbol"!=typeof n?n+"":n,r),r);import{d as n,o as r,c as o,r as s,a as i,b as l,e as a,f as d}from"./assets.vue.bcf60913.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const c=class{constructor(){t(this,"el",null),t(this,"styleEl",null),t(this,"defaultStyle","\n    ._loading_placeholder.ignore {\n      width: 48px;\n      height: 48px;\n      border: 5px solid #67e59d;\n      border-bottom-color: #099545;\n      border-radius: 50%;\n      display: inline-block;\n      -webkit-animation: rotation 1s linear infinite;\n      animation: rotation 1s linear infinite;\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      box-sizing: border-box;\n    }\n  \n    @keyframes rotation {\n      0% {\n        transform: translateX(-50%) translateY(-50%) rotate(0deg);\n      }\n      100% {\n        transform: translateX(-50%) translateY(-50%) rotate(360deg);\n      }\n    }\n  ")}static getInstance(){return this.instance||(this.instance=new c),c.instance}addStyles(){this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.appendChild(document.createTextNode(this.defaultStyle)),document.head.appendChild(this.styleEl)}createEl(){var e;this.addStyles(),this.el=document.createElement("div"),this.el.classList.add("_loading_placeholder","ignore"),null==(e=document.body)||e.appendChild(this.el)}removeEl(){this.el&&document.body.removeChild(this.el),this.styleEl&&document.head.removeChild(this.styleEl),this.el=null,this.styleEl=null}load(){this.el||this.createEl()}};let u=c;t(u,"instance");const h=u.getInstance(),m=h.load.bind(h),p=h.removeEl.bind(h),f=n({__name:"App",setup:e=>(m(),(e,t)=>{const n=s("router-view");return r(),o(n)})}),y=i(),E={},g=function(e,t,n){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in E)return;E[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!n)for(let n=r.length-1;n>=0;n--){const o=r[n];if(o.href===e&&(!t||"stylesheet"===o.rel))return}else if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((t,n)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},b=[{path:"/",component:()=>g((()=>import("./assets.index.4325f488.js")),["assets.index.4325f488.js","assets.vue.bcf60913.js","assets._plugin-vue_export-helper.1b428a4d.js","assets.index.6b9c558e.css"]),meta:{title:"首页"}},{path:"/index",redirect:"/"},{path:"/home",redirect:"/"},{path:"/:catchAll(.*)",component:()=>g((()=>import("./assets.notfound.78cb51fa.js")),["assets.notfound.78cb51fa.js","assets._plugin-vue_export-helper.1b428a4d.js","assets.vue.bcf60913.js","assets.notfound.e18f3ae4.css"]),meta:{title:"4404 Error - Page Not Found",wechat:!0,notfound:!0}}],v=l({history:a(""),routes:b,scrollBehavior:()=>({top:0})});v.afterEach((e=>{const t="是桓的小窝";e.meta.title&&"string"==typeof e.meta.title?document.title=t+"-"+e.meta.title:document.title=t,p()}));const _=d(f);_.use(y),_.use(v),_.mount("#app");
