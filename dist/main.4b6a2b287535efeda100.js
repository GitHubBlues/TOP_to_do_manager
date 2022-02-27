(()=>{"use strict";var n={426:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([e.id,":root{\n    box-sizing: border-box;\n    margin: 0rem;\n}\n\nhtml{\n    min-height: 100vh;\n    margin: 0rem;\n}\n\nbody{\n    background-color: beige;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n/*****************************************************************************************/\n/* Header */\n.header{\n    text-align: center;\n    font-size: xx-large;\n    padding: 1rem 0rem;\n    margin: var(--top-margin-main-title);\n    background-color: beige;\n    box-shadow: 0 8px 6px -6px black;\n    box-sizing: border-box;\n    font-family: 'Lato', sans-serif;\n}\n\n/*****************************************************************************************/\n/* Container main */\n.container-main{\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n    margin: 1rem 1rem;\n}\n\n/*****************************************************************************************/\n/* Container LHS */\n.container-left{\n    display: flex;\n    flex-direction: column;\n    width: 30%; \n    max-width: 25rem;\n    background-color: rgb(214, 214, 189);\n    padding: 0.5rem;\n    min-height: calc(100vh - 10rem);\n}\n\nh2{\n    font-size: x-large;\n}\n\n.project-names-container{\n    display: flex;\n    justify-content: space-between; \n    font-size: large;\n    cursor: pointer;\n}\n\n.project-names{\n    margin: 0.5rem;\n}\n\n.icon-delete{\n    width: 1.5rem;\n    height: auto;\n    padding: 0.3rem;\n    margin-left: 0.2rem;\n    margin-right: 1rem;\n}    \n\n\n/* Add project button */\n.btn-add-project {\n    border: 2px solid green;\n    height: 1.5rem;\n    border-radius: 50%;\n    margin: 1rem;\n    margin-left: 0.5rem;\n}\n \n.btn-add-project:hover {\n    background-color: beige;\n}\n\n.label-btn-add-project{\n    display: flex;\n    align-items: center;\n}\n\n.add-project-container {\n    display: flex;\n    flex-direction: row;\n    margin-top: 0.5rem;\n    margin-bottom: 0rem;\n}\n\n\n/* Radial Button Menu */\n.radio-btn-container{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n\n.rd-title{\n    font-size: large;\n}\n\n.rd-item{\n    margin-top: 5px;\n}\n\ninput[type=\"radio\"]{\n    /* Add if not using autoprefixer */\n    -webkit-appearance: none;\n    appearance: none;\n    /* For iOS < 15 to remove gradient background */\n    background-color: #fff;\n    /* Not removed via appearance */\n    margin: 0;\n    font: inherit;\n    color: green;\n    width: 1rem;\n    height: 1rem;\n    border: 0.15rem solid green;\n    border-radius: 50%;\n    transform: translateY(0.15rem);\n}\n  \ninput[type=\"radio\"]:disabled {\n    background-color: beige;\n    border: 0.15rem solid rgb(184, 201, 137);\n}\n\ninput[type=\"radio\"]:checked {\n    background-color: green;\n    box-shadow: inset 0rem 0rem 0rem 0.2rem white;\n}\n\ninput[type=\"radio\"]:checked:disabled {\n    background-color: rgb(184, 201, 137);\n    border: 0.15rem solid rgb(184, 201, 137);\n    box-shadow: inset 0rem 0rem 0rem 0.2rem beige;\n}\n\nlabel{\nmargin-left: 0.5rem;\nfont-size: large; \n}\n\ninput[disabled] + label{\nopacity: 0.2;\n}\n\n\n/* Database storage */\n.icon-database{\n    width: 1.5rem;\n    height: auto;\n    padding: 0.3rem;\n    margin-left: 0.2rem;\n    margin-right: 1rem;\n}    \n\n.label-icon-database{\n    display: flex;\n    align-items: center;\n}\n\n.storage-container{\n    display: flex;\n    flex-direction: row;\n    margin-top: 0rem;\n    margin-bottom: 0.5rem;\n}\n\n\n\n/*****************************************************************************************/\n/* Container RHS */\n\n\n/*****************************************************************************************/\n/* Footer */\nfooter{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 2rem;\n    background-color: rgb(214, 214, 189);\n    margin-left: 1rem;\n    margin-right: 1rem;\n    gap: 4rem;\n}\n\n.footer-text{\n    font-size: small;\n}\n\n.img-credits{\n    height: 1.5rem;\n}",""]);const d=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},o=[],d=0;d<e.length;d++){var s=e[d],c=a.base?s[0]+a.base:s[0],l=i[c]||0,m="".concat(c," ").concat(l);i[c]=l+1;var p=t(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var g=r(u,a);a.byIndex=d,n.splice(d,0,{identifier:m,updater:g,references:1})}o.push(m)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var d=t(i[o]);n[d].references--}for(var s=a(e,r),c=0;c<i.length;c++){var l=t(i[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},130:(e,n,t)=>{e.exports=t.p+"2053165c98aed89843d4.svg"},675:(e,n,t)=>{e.exports=t.p+"1cbec1720a6e778fc864.svg"},52:(e,n,t)=>{e.exports=t.p+"6ac2bf91d5764e429a54.svg"},277:(e,n,t)=>{e.exports=t.p+"1b80a116497dc63de020.svg"}},t={};function a(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={id:e,exports:{}};return n[e](i,i.exports,a),i.exports}a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.p="/TOP_to_do_manager/",(()=>{var n=a(379),t=a.n(n),r=a(795),i=a.n(r),o=a(569),d=a.n(o),s=a(565),c=a.n(s),l=a(216),m=a.n(l),p=a(589),u=a.n(p),g=a(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=m(),t()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;const h=(()=>{function n(){console.log(e.target)}return{makeRadialMenu:function(){const e=document.createElement("div");e.classList.add("radio-btn-container");const n=document.createElement("fieldset");n.classList.add("fieldset");const t=document.createElement("fieldset-legend");t.innerHTML="View tasks: ",n.appendChild(t),e.appendChild(n);const a=document.createElement("div");a.classList.add("rd-item");const r=document.createElement("input");r.type="radio",r.id="rd-all",r.name="show-tasks",r.value="all",r.checked=!0,r.disabled=!0;const i=document.createElement("label");i.for="rd-all",i.textContent="all";const o=document.createElement("div");o.classList.add("rd-item");const d=document.createElement("input");d.type="radio",d.id="rd-finished",d.name="show-tasks",d.value="finished",d.disabled=!0;const s=document.createElement("label");s.for="rd-finished",s.textContent="finished";const c=document.createElement("div");c.classList.add("rd-item");const l=document.createElement("input");l.type="radio",l.id="rd-pending",l.name="show-tasks",l.value="pending",l.disabled=!0;const m=document.createElement("label");return m.for="rd-pending",m.textContent="pending",a.appendChild(r),a.appendChild(i),o.appendChild(d),o.appendChild(s),c.appendChild(l),c.appendChild(m),n.appendChild(a),n.appendChild(o),n.appendChild(c),e},listenerRadialMenu:function(){const e=document.getElementById("rd-all"),t=document.getElementById("rd-finished"),a=document.getElementById("rd-pending");e.addEventListener("click",n),t.addEventListener("click",n),a.addEventListener("click",n)},get_radialButtonInput:function(){const e=document.getElementById("rd-all"),n=document.getElementById("rd-finished"),t=document.getElementById("rd-pending");return[e.checked,n.checked,t.checked]},enableRadianButtons:function(){const e=document.getElementById("rd-all"),n=document.getElementById("rd-finished"),t=document.getElementById("rd-pending");e.disabled=!1,n.disabled=!1,t.disabled=!1},disableRadianButtons:function(){const e=document.getElementById("rd-all"),n=document.getElementById("rd-finished"),t=document.getElementById("rd-pending");e.disabled=!0,n.disabled=!0,t.disabled=!0}}})(),b=e=>{let n=e,t=[];return{name:n,describe:"",tasks:t,get name(){return n},set name(e){n=e},addTask:function(e){t.push(e)}}};var v=a(277),y=(a(52),a(675)),x=a(130);const E=document.querySelector(".container-left");let k,C=[];k=b(),k.name="Learn japanese",k.describe="The objective of this project is to learn some basic japanese with the aim of being able to carry on simple conversations with Dai.",k.addTask(["learn Hiragana","get things from book","1995-6-22","high","OK",!1]),k.addTask(["learn Katakana","get things from book","1995-6-12","medium","OK",!1]),k.addTask(["learn Kanjis","get things from book","1995-6-20","low","OK",!1]),C.push(k),k=b(),k.name="Get a pet",k.describe="This project is about identifying a suitable pet, preferably a dinosaur",k.addTask(["decide about dinosaur species","read about different scpecies.","1995-6-23","medium","OK",!1]),k.addTask(["discuss potential species with Professor Fink","get Fink's contant details.","1995-6-24","medium","OK",!1]),k.addTask(["get dinosaur egg","get egg from international auction","1995-6-25","high","OK",!1]),C.push(k);const L=document.createElement("div");L.classList.add("left-container-projects");const w=document.createElement("h2");w.classList.add("project-title"),w.innerHTML="Projects";const j=document.createElement("div");j.classList.add("project-list"),function(e){for(const n of e){const e=document.createElement("div");e.classList.add("project-names-container");const t=document.createElement("div");t.classList.add("project-names"),t.innerHTML=n.name;const a=document.createElement("img");a.classList.add("icon-delete"),a.src=v,e.appendChild(t),e.appendChild(a),j.appendChild(e)}}(C),L.appendChild(w),L.appendChild(j),E.appendChild(L);const T=document.createElement("div");T.classList.add("add-project-container");const I=document.createElement("img");I.classList.add("btn-add-project"),I.src=x;let M=document.createElement("div");M.classList.add("label-btn-add-project"),M.innerHTML="New project",T.appendChild(I),T.appendChild(M),E.appendChild(T);const B=h.makeRadialMenu();E.appendChild(B);const S=document.createElement("div");S.classList.add("storage-container");const O=document.createElement("img");O.classList.add("icon-database"),O.src=y;const H=document.createElement("div");H.classList.add("label-icon-database"),H.innerHTML="Reset database",S.appendChild(O),S.appendChild(H),E.appendChild(S)})()})();