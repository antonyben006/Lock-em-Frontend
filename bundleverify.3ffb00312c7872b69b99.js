(()=>{"use strict";var e,t={692:(e,t,o)=>{var r=o(503),n=o(20),a=o(644);const i=(0,r.ZF)({apiKey:"AIzaSyAzEIFLnUU_7DguuKpTLEv3r54WY5-YY0U",authDomain:"two-fa-password-manager.firebaseapp.com",projectId:"two-fa-password-manager",storageBucket:"two-fa-password-manager.appspot.com",messagingSenderId:"210292466163",appId:"1:210292466163:web:50eaff5ec4b6cc53df3286"}),c=(0,n.v0)(i);(0,a.pm)((0,a.$C)(i),"localhost",8080);let s,d=new Promise((e=>s=e));const l=document.getElementById("validate"),p=["first","second","third","fourth","fifth","sixth"].map((e=>document.getElementById(e)));c.onAuthStateChanged((e=>{e?(0,a.V1)((0,a.$C)(i),"sendOtp")().then((()=>s(e.email))):window.location.replace("/")})),p.forEach((e=>e.addEventListener("paste",(e=>{const t=e.clipboardData.getData("Text").split("").reverse();p.forEach((e=>e.value=t.pop()))})))),document.getElementById("validate").addEventListener("click",(()=>{return e=void 0,t=void 0,r=function*(){l.disabled=!0,yield d;const e=p.map((e=>e.value)).join(""),t=yield(0,a.V1)((0,a.$C)(i),"verifyOtp")({otp:e}).catch((()=>null));!t||t.key?window.alert("Incorrect OTP"):(localStorage.setItem("key",t.key),window.location.href="/dashboard"),l.disabled=!1},new((o=void 0)||(o=Promise))((function(n,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}));var e,t,o,r}))}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){for(var[o,n,a]=e[l],c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,n,a]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={509:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,c,s]=o,d=0;if(i.some((t=>0!==e[t]))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)var l=s(r)}for(t&&t(o);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},o=self.webpackChunkrohittp_com=self.webpackChunkrohittp_com||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[149,444,538],(()=>r(692)));n=r.O(n)})();