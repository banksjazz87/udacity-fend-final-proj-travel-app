var MyLib;(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{clearOptions:()=>i,currentOptions:()=>a,displayedGeo:()=>c,endDate:()=>p,geonamesApi:()=>s,keysInfo:()=>n,newOptions:()=>l,postData:()=>o,startDate:()=>y,weatherbit:()=>r});const o=async(e=" ",t={})=>{const o=await fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});try{return await o.json()}catch(e){console.log("eror",e)}};async function n(){let e=await fetch("http://localhost:3080/keyData");try{const t=await e.json();MyLib.geonamesApi(t.geonames),MyLib.weatherbit(t.weatherbit,MyLib.newOptions.lat,MyLib.newOptions.long,MyLib.newOptions.startMonth,MyLib.newOptions.startDay,MyLib.newOptions.endMonth,MyLib.newOptions.endDay)}catch(e){console.log("error",e)}}let a=[],l={};const s=async e=>{let t=document.getElementById("destination");a=[];const o=await fetch("http://api.geonames.org/searchJSON?q="+t.value+"&maxRows=20&username="+e);try{const e=await o.json();console.log(e),console.log(e.geonames);for(let t=0;t<e.geonames.length;t++)l={key:t,place:Object.values(e.geonames[t].toponymName).join(""),state:Object.values(e.geonames[t].adminName1).join(""),country:Object.values(e.geonames[t].countryName).join(""),lat:Object.values(e.geonames[t].lat).join(""),long:Object.values(e.geonames[t].lng).join("")},a.push(l);console.log("current options = ",a),console.log("newOptions = ",l),c(a)}catch(e){console.log("error",e)}},c=e=>{const t=document.createElement("select");document.getElementById("select_location").appendChild(t);for(let o=0;o<e.length;o++){let n=o+1,a="Location: "+Object.values(e[o].place).join("").toUpperCase(),l="State: "+Object.values(e[o].state).join("").toUpperCase(),s="Country: "+Object.values(e[o].country).join("").toUpperCase(),c=document.createElement("option");c.textContent=n+". "+a+"  "+l+"  "+s,t.appendChild(c)}t.addEventListener("change",(e=>{let t=Object.values(e.target.value).join(""),o=0,n=[];for(;parseInt(t[o]);)n.push(t[o]),o++;let s=a[n.join("")-1];l.key=s.key,l.place=s.place,l.state=s.state,l.country=s.country,l.lat=s.lat,l.long=s.long,MyLib.startDate("start_date"),MyLib.endDate("end_date"),a=[],a.push(l),console.log("!!!!! CHOICE RESULTS = ",s),console.log("!!!!!XXX!!! New Options!",l),console.log("/***** updated array******/",a),console.log("lat = "+s.lat+" long = "+s.long),console.log("all choice "+Object.entries(s)),console.log(a.lat,a.long,a.key,a.key),MyLib.postData("http://localhost:3080/currentUserData",{key:a.key,place:a.place,state:a.state,country:a.country,lat:a.lat,long:a.long,date:""})}))},i=()=>{const e=document.querySelector("select");e&&e.remove()},r=(e,t,o,n,a,l,s)=>{MyLib.startDate("start_date"),MyLib.endDate("end_date"),console.log("https://api.weatherbit.io/v2.0/normals?lat="+t+"&lon="+o+"&start_day="+n+a+"&end_day="+l+s+"&tp=daily&key="+e)},y=e=>{let t=document.getElementById(e);MyLib.newOptions.startMonth=t.value[5]+t.value[6],MyLib.newOptions.startDay=t.value[8]+t.value[9],console.log("new options with dates =",MyLib.newOptions)},p=e=>{let t=document.getElementById(e);MyLib.newOptions.endMonth=t.value[5]+t.value[6],MyLib.newOptions.endDay=t.value[8]+t.value[9],console.log("newOptions with endDate =",MyLib.newOptions)};MyLib=t})();