"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Roboto:ital,wght@1,300&display=swap);"]),i.push([n.id,".container {\n  width: 400px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid #c6c0c0;\n  box-shadow: 2px 2px 2px 2px #e6e3e3;\n  display: flex;\n  flex-direction: column;\n}\n\nh1 {\n  text-align: left;\n  font-size: small;\n  color: #5e5c5c;\n  font-family: 'inter', sans-serif;\n}\n\n#deleteAllBtn {\n  color: #5e5c5c;\n  font-family: 'inter', sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n  width: 440px;\n  margin-bottom: -20px;\n  height: 47px;\n  margin-left: -20px;\n  border-top: 1px solid #a8a7a7;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  background-color: #e9e9e9;\n}\n\nbutton:hover {\n  background-color: #f7f7f7;\n}\n\n.input-container {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n#addTaskBtn {\n  height: 60px;\n  width: 45px;\n  margin-left: 3px;\n  border: none;\n  background: none;\n}\n\n.delete-icon {\n  width: 143px;\n  text-align: right;\n}\n\n.inputoutline {\n  outline: none;\n  border: none;\n}\n\n.wrapper {\n  display: flex;\n  height: 97vh;\n  align-content: center;\n  flex-wrap: wrap;\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.task input[type=\"checkbox\"] {\n  margin-right: 10px;\n}\n\n.options {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.options span {\n  padding: 2px;\n}\n\n.fas {\n  color: #adadad;\n  font-size: small;\n  cursor: pointer;\n}\n\n.fa-sync-alt {\n  color: #adadad;\n  font-size: small;\n  width: 300px;\n  text-align: right;\n  cursor: pointer;\n}\n\n#taskInput {\n  border: none;\n  box-shadow: 1px 1px 1px 1px gainsboro;\n  width: 100%;\n  height: 31px;\n  margin-top: 13px;\n  font-style: italic;\n}\n\n#taskInput:focus-visible {\n  outline: none;\n}\n\n.font {\n  font-family: 'Inter', sans-serif;\n  font-size: small;\n}\n\n.completed {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},235:(n,e,t)=>{t.d(e,{wq:()=>v});var o=t(379),r=t.n(o),a=t(795),i=t.n(a),s=t(569),c=t.n(s),l=t(565),d=t.n(l),p=t(216),u=t.n(p),f=t(589),m=t.n(f),h=t(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;let v=[];const x=()=>{localStorage.setItem("tasks",JSON.stringify(v))},y=()=>{const n=document.getElementById("taskList");n&&(n.innerHTML="",v.forEach((e=>{const t=document.createElement("li");t.className="task";const o=document.createElement("input");o.type="checkbox",o.checked=e.completed,o.addEventListener("change",(()=>{return n=e.index,v[n-1].completed=!v[n-1].completed,x(),void y();var n})),t.appendChild(o);const r=document.createElement("input");r.classList.add("inputoutline"),r.type="text",r.value=e.description,r.addEventListener("change",(()=>{return n=e.index,t=r.value,v[n-1].description=t,x(),void y();var n,t})),e.completed&&r.classList.add("completed"),t.appendChild(r);const a=document.createElement("i");a.className="delete-icon fas fa-trash-alt",a.addEventListener("click",(()=>{return n=e.index,v=v.filter((e=>e.index!==n)),v.forEach(((n,e)=>{n.index=e+1})),x(),void y();var n})),t.appendChild(a),n.appendChild(t)})))},b=()=>{const n=document.getElementById("taskInput"),e={description:n.value,completed:!1,index:v.length+1};v.push(e),x(),y(),n.value=""},k=()=>{v=v.filter((n=>!n.completed)),v.forEach(((n,e)=>{n.index=e+1})),x(),y()};document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("addTaskBtn").addEventListener("click",b),document.getElementById("deleteAllBtn").addEventListener("click",k),(()=>{const n=localStorage.getItem("tasks");n&&(v=JSON.parse(n))})(),y()}))}},n=>{n(n.s=235)}]);