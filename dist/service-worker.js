if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let o={};const s=e=>n(e,l),f={module:{uri:l},exports:o,require:s};i[l]=Promise.all(r.map((e=>f[e]||s(e)))).then((e=>(c(...e),o)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"1d9ffeb7c22748ff2608580d17f98769"},{url:"52e849c192f648458186.jpeg",revision:null},{url:"5cf3ff137b6dcfcd7735.jpeg",revision:null},{url:"96eb555f95d59c44a083.png",revision:null},{url:"9962380fe4c5ae25b2d5.jpeg",revision:null},{url:"ac145deccf375383e9c1.jpeg",revision:null},{url:"main.css",revision:"606c989b4f7d933e42b3c6d1598a1e58"},{url:"mainApp.js",revision:"b0e5cbf306c5d888094a9c9f57fdc5a5"}],{})}));
