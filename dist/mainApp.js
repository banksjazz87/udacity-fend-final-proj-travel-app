var MyLib;(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r=p;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=M(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?y:f,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=y,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",f="suspendedYield",h="executing",y="completed",d={};function m(){}function v(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(C([])));L&&L!==n&&r.call(L,i)&&(b=L);var x=g.prototype=m.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function M(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,M(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:k}}function k(){return{value:e,done:!0}}return v.prototype=g,u(x,"constructor",g),u(g,"constructor",v),v.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},62:(t,e,n)=>{"use strict";t.exports=n.p+"5cf3ff137b6dcfcd7735.jpeg"},431:(t,e,n)=>{"use strict";t.exports=n.p+"96eb555f95d59c44a083.png"},121:(t,e,n)=>{"use strict";t.exports=n.p+"ac145deccf375383e9c1.jpeg"},956:(t,e,n)=>{"use strict";t.exports=n.p+"9962380fe4c5ae25b2d5.jpeg"},488:(t,e,n)=>{"use strict";t.exports=n.p+"52e849c192f648458186.jpeg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href;var r={};(()=>{"use strict";function t(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}n.r(r),n.d(r,{clearFunction:()=>M,clearItems:()=>d,clearOptions:()=>h,cloudy:()=>A,currentOptions:()=>s,displayedGeo:()=>f,endDate:()=>w,geonamesApi:()=>p,keysInfo:()=>c,logo:()=>S,newOptions:()=>l,pixCall:()=>j,postData:()=>a,rain:()=>T,returnGeo:()=>O,snow:()=>P,startDate:()=>b,submitFunction:()=>E,sunny:()=>B,tripLength:()=>k,weatherCall:()=>v,weatherbit:()=>g});var o=n(757),i=n.n(o),a=function(){var t=e(i().mark((function t(){var e,n,r,o,a=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:" ",n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 4:return r=t.sent,t.prev=5,t.next=8,r.json();case 8:return o=t.sent,t.abrupt("return",o);case 12:t.prev=12,t.t0=t.catch(5),console.log("eror",t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(){return t.apply(this,arguments)}}();function c(){return u.apply(this,arguments)}function u(){return(u=e(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3080/keyData");case 2:return e=t.sent,t.prev=3,t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(3),console.log("error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))).apply(this,arguments)}var s=[],l={},p=function(){var t=e(i().mark((function t(e,n){var r,o,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.getElementById("destination"),s=[],t.next=4,fetch(n+r.value+"&maxRows=20&username="+e);case 4:return o=t.sent,t.prev=5,t.next=8,o.json();case 8:for(a=t.sent,c=0;c<a.geonames.length;c++)l={key:c,place:Object.values(a.geonames[c].toponymName).join(""),state:Object.values(a.geonames[c].adminName1).join(""),country:Object.values(a.geonames[c].countryName).join(""),lat:Object.values(a.geonames[c].lat).join(""),long:Object.values(a.geonames[c].lng).join("")},s.push(l);f(s),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(5),alert("Please type a more specific location and try again."),console.log("error",t.t0);case 17:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}(),f=function(t){var e=document.createElement("select");document.getElementById("select_location").appendChild(e);var n=document.createElement("option");n.textContent="Please select from the following...",e.appendChild(n);for(var r=0;r<t.length;r++){var o=r+1,i="Location: "+Object.values(t[r].place).join("").toUpperCase(),a="State: "+Object.values(t[r].state).join("").toUpperCase(),c="Country: "+Object.values(t[r].country).join("").toUpperCase(),u=document.createElement("option");u.textContent=o+". "+i+"  "+a+"  "+c,e.appendChild(u)}e.addEventListener("change",(function(t){for(var e=Object.values(t.target.value).join(""),n=0,r=[];parseInt(e[n]);)r.push(e[n]),n++;var o=s[r.join("")-1];l.key=o.key,l.place=o.place,l.state=o.state,l.country=o.country,l.lat=o.lat,l.long=o.long,(s=[]).push(l),y(),d("select")}))},h=function(){document.getElementById("date_input").style.display="none",m("locationPic"),MyLib.clearItems("card","img","select","p")},y=function(){var t=document.getElementById("date_input");"none"===t.style.display&&(t.style.display="flex")},d=function(){for(var t=0;t<arguments.length;t++)for(var e=document.querySelectorAll(t<0||arguments.length<=t?void 0:arguments[t]),n=0;n<e.length;n++)e[n].remove()},m=function(t){document.getElementById(t)&&document.getElementById(t).remove()},v=function(){MyLib.startDate("start_date"),MyLib.endDate("end_date"),MyLib.keysInfo().then((function(t){return MyLib.weatherbit(t.visCrossKey,t.visCrossUrl,MyLib.newOptions.lat,MyLib.newOptions.long,MyLib.newOptions.startDate,MyLib.newOptions.endDate)})).then((function(t){return L("tempmax","tempmin","precip","snow","datetime","clouds",t.days)})).then((function(t){return x("month","day","highTemp","lowTemp","precip","snow",t.weatherInfo)}))},g=function(){var t=e(i().mark((function t(e,n,r,o,a,c){var u,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n+r+","+o+"/"+a+"/"+c+"?key="+e);case 2:return u=t.sent,t.prev=3,t.next=6,u.json();case 6:return s=t.sent,console.log("weather",s),t.abrupt("return",s);case 11:t.prev=11,t.t0=t.catch(3),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e,n,r,o,i,a){return t.apply(this,arguments)}}(),b=function(t){var e=document.getElementById(t);return MyLib.newOptions.startMonth=e.value[5]+e.value[6],MyLib.newOptions.startDay=e.value[8]+e.value[9],MyLib.newOptions.startDate=e.value,MyLib.newOptions.startDate},w=function(t){var e=document.getElementById(t);return MyLib.newOptions.endMonth=e.value[5]+e.value[6],MyLib.newOptions.endDay=e.value[8]+e.value[9],MyLib.newOptions.endDate=e.value,MyLib.newOptions.endDate},L=function(t,e,n,r,o,i,a){MyLib.newOptions.weatherInfo=[];for(var c=0;c<a.length;c++){var u=a[c],s={highTemp:u[t],lowTemp:u[e],precip:u[n],clouds:u[i],snow:u[r],date:u[o],month:u[o][5]+u[o][6],day:u[o][8]+u[o][9]};MyLib.newOptions.weatherInfo.push(s)}return MyLib.currentOptions.push(MyLib.newOptions),MyLib.currentOptions.splice(0,1),MyLib.newOptions},x=function(t,e,n,r,o,i,a){MyLib.tripLength(MyLib.newOptions.startDate,MyLib.newOptions.endDate);for(var c=document.getElementById("weather"),u=0;u<a.length;u++){var s=document.createElement("card"),l=document.createElement("h2");l.textContent=a[u][t]+"/"+a[u][e],s.appendChild(l);var p=document.createElement("img");parseFloat(a[u][o])>.1&&0===a[u][i]?p.setAttribute("src",MyLib.rain):parseFloat(a[u][o])<.1&&parseFloat(a[u][o]>.01)&&0===parseFloat(a[u][i])?p.setAttribute("src",MyLib.cloudy):parseFloat(a[u][i])>0?p.setAttribute("src",MyLib.snow):p.setAttribute("src",MyLib.sunny),s.appendChild(p);var f=document.createElement("p");f.textContent="High of: "+a[u][n],s.appendChild(f);var h=document.createElement("p");h.textContent="Low of: "+a[u][r],s.appendChild(h),c.appendChild(s)}return MyLib.newOptions},O=function(){var t=document.getElementById("search"),e=document.getElementById("destination");t.addEventListener("click",(function(t){t.preventDefault(),""===e.value?alert("Please enter a destination."):(MyLib.clearOptions(),MyLib.keysInfo().then((function(t){return MyLib.geonamesApi(t.geonames,t.geoUrl)})))}))},E=function(){document.getElementById("submit").addEventListener("click",(function(t){t.preventDefault(),MyLib.clearItems("card","img","p"),Promise.all([MyLib.weatherCall(),MyLib.pixCall()])}))},M=function(){var t=document.getElementById("clear");document.querySelector("footer").style.display="none",t.addEventListener("click",(function(t){t.preventDefault(),MyLib.clearOptions(),document.getElementById("destination").value=null}))},j=function(){MyLib.keysInfo().then((function(t){return I(t.pixabay,t.pixabayUrl,[MyLib.newOptions.place,MyLib.newOptions.state,MyLib.newOptions.Country])})).then((function(t){return _(t,"totalHits","hits","fullHDURL")}))},I=function(){var t=e(i().mark((function t(e,n,r){var o,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="",o=1===r.length?r.toString():r.join("+").toString(),console.log(r.length),console.log(n+e+"&q="+o+"&image_type=photo"),t.next=6,fetch(n+e+"&q="+r+"&image_type=photo");case 6:return a=t.sent,t.prev=7,t.next=10,a.json();case 10:return c=t.sent,t.abrupt("return",c);case 14:t.prev=14,t.t0=t.catch(7),console.log("error",t.t0);case 17:case"end":return t.stop()}}),t,null,[[7,14]])})));return function(e,n,r){return t.apply(this,arguments)}}(),_=function(t,e,n,r){t[e]>0?C(t[n][0][r]):MyLib.keysInfo().then((function(t){return I(t.pixabay,t.pixabayUrl,[MyLib.newOptions.country])})).then((function(t){return C(t.hits[0].fullHDURL)}))},C=function(t){MyLib.newOptions.picUrl=t,function(t){var e=document.createElement("div");e.setAttribute("id","location_pic");var n=document.createElement("img");n.setAttribute("src",t),n.setAttribute("id","pixabay_pic"),e.appendChild(n);var r=document.createElement("img");r.setAttribute("src",MyLib.logo),r.setAttribute("id","logo_pic"),e.appendChild(r);var o=document.createElement("a");o.setAttribute("href","https://pixabay.com/"),o.setAttribute("target","blank"),o.appendChild(r),e.appendChild(o),setTimeout((function(){var t=document.querySelector("footer");document.querySelector("body").insertBefore(e,t),document.getElementById("output_container").scrollIntoView({block:"start",behavior:"smooth"}),t.style.opacity="1"}),1e3)}(t),MyLib.postData("http://localhost:3080/allCurrentData",MyLib.newOptions)},k=function(t,e){var n=new Date(t.replace(/-/g,",")),r=new Date(e.replace(/-/g,",")),o=n.getTime(),i=(r.getTime()-o)/1e3/60/60/24;return MyLib.newOptions.tripLength=parseInt(i+1),D(MyLib.newOptions.tripLength,MyLib.newOptions.place,MyLib.newOptions.state,MyLib.newOptions.country)},D=function(t,e,n,r){var o=document.createElement("p");o.textContent=t+" Day Vacation",o.setAttribute("id","length_header"),document.getElementById("output_container").insertAdjacentElement("afterbegin",o);var i=document.createElement("p");i.textContent=e,i.setAttribute("id","place_location"),o.insertAdjacentElement("afterEnd",i);var a="";a=""===n?r:"".concat(n,", ").concat(r);var c=document.createElement("p");c.textContent=a,c.setAttribute("id","state_country"),i.insertAdjacentElement("afterend",c)},A=new URL(n(62),n.b),S=new URL(n(431),n.b),T=new URL(n(121),n.b),P=new URL(n(956),n.b),B=new URL(n(488),n.b)})(),MyLib=r})();