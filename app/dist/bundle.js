!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e,t,n,r,i){const o=Array.from(arguments).length,u=document.createElement(e);switch(u.classList.add(t),o){case 2:return u;case 3:return n.appendChild(u);case 4:return u.innerText=r,n.appendChild(u);case 5:return u.type=i,u.innerText=r,n.appendChild(u);default:return!1}};const i=r("div","wrapper",document.body),o=r("input","text-input",i),u=r("label","check-label",i),a=r("input","check-box",u,"","checkbox");r("span","check-span",u);r("span","sign-span",u).innerText="Сase sensitive";const l=r("button","btn",i);l.innerText="Filter by length";const s=r("button","btn",i);s.innerText="Filter by string";const c=r("div","text-output",document.body);var d=async function(e){let t=await fetch(e,{method:"GET",mode:"cors"});if(t.ok)return await t.json();console.log("Something goes wrong!")};function p(){for(;output.firstChild;)output.removeChild(output.firstChild);input.style.borderRadius="10px"}let f=[];let b=!1;window.onload=()=>{d("https://www.mrsoft.by/data.json").then(e=>{f=[...e.data]})},a.addEventListener("click",()=>{p(),b=!b}),o.addEventListener("input",()=>{p()}),c.addEventListener("click",e=>(p(),o.value=e.target.textContent)),l.addEventListener("click",()=>{let e=Number(o.value);if(e<1||!0===isNaN(e)||e>25)return!1;f.filter(t=>t.length>=e).map(e=>{r("div","result-item",c,e)}),input.style.borderRadius="10px 10px 0 0"}),s.addEventListener("click",()=>{let e=o.value,t=[];return!(!1===isNaN(Number(e))||e.length<1)&&(0!==(t=b?f.filter(t=>t.includes(e)):f.filter(t=>t.toLowerCase().includes(e.toLowerCase()))).length&&(t.map(e=>{r("div","result-item",c,e)}),void(o.style.borderRadius="10px 10px 0 0")))})}]);