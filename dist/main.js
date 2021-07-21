var MyLib;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{clearOptions:()=>c,currentOptions:()=>a,displayedGeo:()=>r,endDate:()=>u,geonamesApi:()=>i,keysInfo:()=>o,newOptions:()=>s,postData:()=>n,returnGeo:()=>l,startDate:()=>d,submitFunction:()=>m,weatherCall:()=>b,weatherbit:()=>p});const n=async(e=" ",t={})=>{const n=await fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});try{return await n.json()}catch(e){console.log("eror",e)}};async function o(){let e=await fetch("http://localhost:3080/keyData");try{return await e.json()}catch(e){console.log("error",e)}}let a=[],s={};const l=()=>{document.getElementById("search").addEventListener("click",(()=>{MyLib.clearOptions(),MyLib.keysInfo().then((e=>MyLib.geonamesApi(e.geonames)))}))},i=async e=>{let t=document.getElementById("destination");a=[];const n=await fetch("http://api.geonames.org/searchJSON?q="+t.value+"&maxRows=20&username="+e);try{const e=await n.json();console.log(e),console.log(e.geonames);for(let t=0;t<e.geonames.length;t++)s={key:t,place:Object.values(e.geonames[t].toponymName).join(""),state:Object.values(e.geonames[t].adminName1).join(""),country:Object.values(e.geonames[t].countryName).join(""),lat:Object.values(e.geonames[t].lat).join(""),long:Object.values(e.geonames[t].lng).join("")},a.push(s);r(a)}catch(e){console.log("error",e)}},r=e=>{const t=document.createElement("select");document.getElementById("select_location").appendChild(t);for(let n=0;n<e.length;n++){let o=n+1,a="Location: "+Object.values(e[n].place).join("").toUpperCase(),s="State: "+Object.values(e[n].state).join("").toUpperCase(),l="Country: "+Object.values(e[n].country).join("").toUpperCase(),i=document.createElement("option");i.textContent=o+". "+a+"  "+s+"  "+l,t.appendChild(i)}t.addEventListener("change",(e=>{let t=Object.values(e.target.value).join(""),n=0,o=[];for(;parseInt(t[n]);)o.push(t[n]),n++;let l=a[o.join("")-1];s.key=l.key,s.place=l.place,s.state=l.state,s.country=l.country,s.lat=l.lat,s.long=l.long,a=[],a.push(s),y(),MyLib.postData("http://localhost:3080/currentUserData",{key:a.key,place:a.place,state:a.state,country:a.country,lat:a.lat,long:a.long,date:""})}))},c=()=>{const e=document.querySelector("select");e&&e.remove()},y=()=>{const e=document.getElementById("date_input");"none"===e.style.display&&(e.style.display="flex")},p=async(e,t,n,o,a)=>{const s=await fetch("https://api.weatherbit.io/v2.0/normals?lat="+t+"&lon="+n+"&start_day="+o+"&end_day="+a+"&units=I&tp=daily&key="+e);try{const e=await s.json();console.log(e)}catch(e){console.log("error",e)}},d=e=>{let t=document.getElementById(e);MyLib.newOptions.startMonth=t.value[5]+t.value[6],MyLib.newOptions.startDay=t.value[8]+t.value[9],MyLib.newOptions.startDate=MyLib.newOptions.startMonth+"-"+MyLib.newOptions.startDay},u=e=>{let t=document.getElementById(e);MyLib.newOptions.endMonth=t.value[5]+t.value[6],MyLib.newOptions.endDay=t.value[8]+t.value[9],MyLib.newOptions.endDate=MyLib.newOptions.endMonth+"-"+MyLib.newOptions.endDay},b=()=>{MyLib.startDate("start_date"),MyLib.endDate("end_date"),MyLib.keysInfo().then((e=>MyLib.weatherbit(e.weatherbit,MyLib.newOptions.lat,MyLib.newOptions.long,MyLib.newOptions.startDate,MyLib.newOptions.endDate)))},m=()=>{document.getElementById("submit").addEventListener("click",(e=>{e.preventDefault(),MyLib.weatherCall()}))};MyLib=t})();