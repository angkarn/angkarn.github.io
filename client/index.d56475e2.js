import{S as t,i as e,s as a,e as r,a as i,t as s,q as l,c as n,f as c,g as o,b as d,d as m,h,k as f,j as g,m as p,n as v,r as D,o as u,p as w}from"./client.c326394c.js";var C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function k(t,e,a){return t(a={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&a.path)}},a.exports),a.exports}var E=k((function(t,e){t.exports=function(){let t=null,e=1,a=null,r=null,i=[];const s={id:e,active:!0,width:null,top:null,left:null,img:null,meta:{}},l={background:null,markers:[],inactiveOpacity:.6};this.render=(o="body",m=l)=>{if(d(m),t=document.querySelector(o),a=t.getElementsByClassName("marker-map-marker"),r=t.querySelector("#marker-map-markers"),!m.background)throw"background is not set";e=1,i=m.markers.map((t=>(c(t),e++,{...s,...t})));const h=`<img id="marker-map-bg" src="${m.background}" width="100%" height="100%" />`;t.innerHTML=`<div id="marker-map"style="width:100%;height:100%;position:relative;margin:0 auto;">${h}<div id="marker-map-markers">${i.map((t=>n(t))).join("")}</div></div>`};const n=(t=s)=>`<img class="marker-map-marker ${!1===t.active?"inactive":""}" data-marker-img="${t.img}" data-marker-id="${t.id}"\n    style="width:${t.width}%;top:${t.top}%;left:${t.left}%;" src="${t.img}" />`,c=(t=s)=>{if(!(t.img&&t.top&&t.left&&t.width))throw"some marker data not correct"},o=(t=null)=>(this.get(t),document.querySelector(`[data-marker-id="${t}"]`));this.add=(t=s)=>{c(t),e++;const a={...s,...t};i.push(a),document.getElementById("marker-map-markers").insertAdjacentHTML("beforeEnd",n(t))},this.remove=t=>{i.filter((e=>e.id!==t)),o(t).remove()},this.removeAll=()=>{i=[],r.innerHTML=""},this.active=(t=null)=>{o(t).classList.remove("inactive")},this.activeAll=()=>{[...a].forEach((t=>{t.classList.remove("inactive")}))},this.inactive=(t=null)=>{o(t).classList.add("inactive")},this.inactiveAll=()=>{[...a].forEach((t=>{t.classList.add("inactive")}))};const d=(t=l)=>{const e=`.marker-map-marker{position:absolute;} .marker-map-marker.inactive{opacity:${{...l,options:t}.inactiveOpacity};}`,a=document.createElement("style");a.textContent=e,document.head.append(a)};this.on=(e,a)=>{t.addEventListener(e,(t=>{t.target.dataset.markerId&&a(t,this.get(t.target.dataset.markerId))}))},this.get=(t=null)=>{const e=i.find((e=>e.id==t));if(!e)throw"can not find marker";return e},this.getAll=(t="",e)=>{const r=[...a].filter((e=>{switch(t){case"active":return!e.classList.contains("inactive");case"inactive":return e.classList.contains("inactive");default:return!0}})),s=r.map((t=>({id:t.dataset.markerId,width:parseInt(t.style.width),top:parseInt(t.style.top),left:parseInt(t.style.left),img:t.dataset.markerImg,active:!t.classList.contains("inactive"),meta:i.find((e=>e.id==t.dataset.markerId)).meta||{}})));switch(e){case"json":return s;case"dom":return r;default:return s}},this.destroy=()=>{t.innerHTML="",t=null,e=1,a=null,r=null,i=[],e=1}}}));const{document:F}=w;function x(t){let e,a,u,w,C,k,E,x,y,A,b,M,B,I,_,L,T,z,$,j,N,H,O,S,R,V,q,P,U,G,Y,J;return{c(){e=r("link"),a=i(),u=r("div"),w=r("div"),C=r("a"),k=r("img"),x=i(),y=r("h1"),A=r("span"),b=r("a"),M=s("Marker Map"),B=s(" Example"),I=i(),_=r("div"),L=i(),T=r("div"),z=r("button"),$=s("Add Marker"),j=i(),N=r("button"),H=s("Random Active"),O=i(),S=r("button"),R=s("Get Marker Data"),V=i(),q=r("button"),P=s("Reset"),U=i(),G=r("div"),this.h()},l(t){const r=l('[data-svelte="svelte-is0tgk"]',F.head);e=n(r,"LINK",{rel:!0,href:!0}),r.forEach(c),a=o(t),u=n(t,"DIV",{class:!0});var i=d(u);w=n(i,"DIV",{class:!0});var s=d(w);C=n(s,"A",{href:!0});var h=d(C);k=n(h,"IMG",{width:!0,src:!0,alt:!0}),h.forEach(c),s.forEach(c),x=o(i),y=n(i,"H1",{class:!0});var f=d(y);A=n(f,"SPAN",{});var g=d(A);b=n(g,"A",{href:!0,class:!0});var p=d(b);M=m(p,"Marker Map"),p.forEach(c),g.forEach(c),B=m(f," Example"),f.forEach(c),I=o(i),_=n(i,"DIV",{id:!0,class:!0}),d(_).forEach(c),L=o(i),T=n(i,"DIV",{id:!0,class:!0});var v=d(T);z=n(v,"BUTTON",{class:!0});var D=d(z);$=m(D,"Add Marker"),D.forEach(c),j=o(v),N=n(v,"BUTTON",{class:!0});var E=d(N);H=m(E,"Random Active"),E.forEach(c),O=o(v),S=n(v,"BUTTON",{class:!0});var Y=d(S);R=m(Y,"Get Marker Data"),Y.forEach(c),V=o(v),q=n(v,"BUTTON",{class:!0});var J=d(q);P=m(J,"Reset"),J.forEach(c),v.forEach(c),U=o(i),G=n(i,"DIV",{id:!0,class:!0}),d(G).forEach(c),i.forEach(c),this.h()},h(){F.title="Example Marker Map",h(e,"rel","icon"),h(e,"href","marker-map/favicon.ico"),h(k,"width","35"),k.src!==(E="img/github.svg")&&h(k,"src","img/github.svg"),h(k,"alt","github"),h(C,"href","https://github.com/angkarn/marker-map"),h(w,"class","link svelte-1htmxrp"),h(b,"href","marker-map"),h(b,"class","svelte-1htmxrp"),h(y,"class","title svelte-1htmxrp"),h(_,"id","show"),h(_,"class","svelte-1htmxrp"),h(z,"class","svelte-1htmxrp"),h(N,"class","svelte-1htmxrp"),h(S,"class","svelte-1htmxrp"),h(q,"class","svelte-1htmxrp"),h(T,"id","action"),h(T,"class","svelte-1htmxrp"),h(G,"id","detail"),h(G,"class","svelte-1htmxrp"),h(u,"class","content svelte-1htmxrp")},m(r,i){f(F.head,e),g(r,a,i),g(r,u,i),f(u,w),f(w,C),f(C,k),f(u,x),f(u,y),f(y,A),f(A,b),f(b,M),f(y,B),f(u,I),f(u,_),f(u,L),f(u,T),f(T,z),f(z,$),f(T,j),f(T,N),f(N,H),f(T,O),f(T,S),f(S,R),f(T,V),f(T,q),f(q,P),f(u,U),f(u,G),Y||(J=[p(z,"click",t[0]),p(N,"click",t[1]),p(S,"click",t[2]),p(q,"click",t[3])],Y=!0)},p:v,i:v,o:v,d(t){c(e),t&&c(a),t&&c(u),Y=!1,D(J)}}}function y(t){const e=new E;let a=null,r=[{id:"my_home_1",width:12,top:56,left:40,img:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2248%22%20height%3D%2248%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2048%2048%22%20style%3D%22-ms-transform%3A%20rotate%28360deg%29%3B%20-webkit-transform%3A%20rotate%28360deg%29%3B%20transform%3A%20rotate%28360deg%29%3B%22%3E%3Cpath%20fill%3D%22%23E8EAF6%22%20d%3D%22M42%2039H6V23L24%206l18%2017z%22%2F%3E%3Cg%20fill%3D%22%23C5CAE9%22%3E%3Cpath%20d%3D%22M39%2021l-5-5V9h5z%22%2F%3E%3Cpath%20d%3D%22M6%2039h36v5H6z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23B71C1C%22%20d%3D%22M24%204.3L4%2022.9l2%202.2L24%208.4l18%2016.7l2-2.2z%22%2F%3E%3Cpath%20fill%3D%22%23D84315%22%20d%3D%22M18%2028h12v16H18z%22%2F%3E%3Cpath%20fill%3D%22%2301579B%22%20d%3D%22M21%2017h6v6h-6z%22%2F%3E%3Cpath%20fill%3D%22%23FF8A65%22%20d%3D%22M27.5%2035.5c-.3%200-.5.2-.5.5v2c0%20.3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5z%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2248%22%20height%3D%2248%22%20fill%3D%22rgba%280%2C%200%2C%200%2C%200%29%22%20%2F%3E%3C%2Fsvg%3E",meta:{my:"home"}},{width:12,top:20,left:64,img:"data:image/svg+xml,%3Csvg%20width%3D%22512%22%20height%3D%22512%22%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%3Cg%20id%3D%22svg_1%22%3E%20%20%20%20%3Cpath%20id%3D%22svg_2%22%20fill%3D%22%23FF7979%22%20d%3D%22m256.08%2C54.999c84.87%2C0%20153.81%2C68.94%20153.81%2C153.96c0%2C77.059%20-87.02%2C195.03%20-153.2%2C246.04c-85.33%2C-69.24%20-154.58%2C-167.75%20-154.58%2C-246.04c0%2C-85.021%2068.94%2C-153.96%20153.97%2C-153.96zm74.79%2C150.799c0%2C-41.34%20-33.521%2C-74.86%20-74.87%2C-74.86c-41.35%2C0%20-74.86%2C33.52%20-74.86%2C74.86c0%2C41.35%2033.51%2C74.87%2074.86%2C74.87c41.35%2C0%2074.87%2C-33.52%2074.87%2C-74.87z%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Layer_1%22%2F%3E%20%20%3Cellipse%20stroke%3D%22%23000%22%20ry%3D%2274.83202%22%20rx%3D%2275.16758%22%20id%3D%22svg_3%22%20cy%3D%22205.8%22%20cx%3D%22256%22%20stroke-width%3D%220%22%20fill%3D%22%23db696e%22%2F%3E%3C%2Fsvg%3E"}],i=[{id:"3",width:12,top:70,left:70,img:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2248%22%20height%3D%2248%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2048%2048%22%20style%3D%22-ms-transform%3A%20rotate%28360deg%29%3B%20-webkit-transform%3A%20rotate%28360deg%29%3B%20transform%3A%20rotate%28360deg%29%3B%22%3E%3Ccircle%20fill%3D%22%232196F3%22%20cx%3D%2224%22%20cy%3D%2224%22%20r%3D%2221%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M22%2022h4v11h-4z%22%2F%3E%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%2224%22%20cy%3D%2216.5%22%20r%3D%222.5%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2248%22%20height%3D%2248%22%20fill%3D%22rgba%280%2C%200%2C%200%2C%200%29%22%20%2F%3E%3C%2Fsvg%3E",meta:{abc:"xyz"}},{id:"4",width:12,top:37,left:16,img:"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2248%22%20height%3D%2248%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2048%2048%22%20style%3D%22-ms-transform%3A%20rotate%28360deg%29%3B%20-webkit-transform%3A%20rotate%28360deg%29%3B%20transform%3A%20rotate%28360deg%29%3B%22%3E%3Cpath%20fill%3D%22%23F44336%22%20d%3D%22M21.2%2044.8l-18-18c-1.6-1.6-1.6-4.1%200-5.7l18-18c1.6-1.6%204.1-1.6%205.7%200l18%2018c1.6%201.6%201.6%204.1%200%205.7l-18%2018c-1.6%201.6-4.2%201.6-5.7%200z%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M21.6%2032.7c0-.3.1-.6.2-.9c.1-.3.3-.5.5-.7c.2-.2.5-.4.8-.5s.6-.2%201-.2s.7.1%201%20.2c.3.1.6.3.8.5c.2.2.4.4.5.7c.1.3.2.6.2.9s-.1.6-.2.9s-.3.5-.5.7c-.2.2-.5.4-.8.5c-.3.1-.6.2-1%20.2s-.7-.1-1-.2s-.5-.3-.8-.5c-.2-.2-.4-.4-.5-.7s-.2-.5-.2-.9zm4.2-4.6h-3.6L21.7%2013h4.6l-.5%2015.1z%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2248%22%20height%3D%2248%22%20fill%3D%22rgba%280%2C%200%2C%200%2C%200%29%22%20%2F%3E%3C%2Fsvg%3E"}],s=0;return u((async()=>{e.render("#show",{background:"/client/85c29a8e188240eb.jpg",markers:r}),a=await Promise.all([import("./json-formatter.umd.ba48cc6e.js"),__inject_styles(["client-2ca5f025.css","index-cb8ad74e.css"])]).then((function(t){return t[0]})).then((function(t){return t.j})),e.on("click",((t,a)=>{confirm(`Want to delete:\n ID: ${a.id}\n${JSON.stringify(a.meta)}`)&&e.remove(a.id)}))})),[function(){s>=i.length||(e.add(i[s]),s++)},function(){e.activeAll();const t=e.getAll(),a=t[Math.floor(Math.random()*t.length)];e.inactive(a.id)},function(){const t=new a.default(e.getAll());document.getElementById("detail").innerHTML="",document.getElementById("detail").appendChild(t.render())},function(){s=0,e.destroy(),e.render("#show",{background:"/client/85c29a8e188240eb.jpg",markers:r})}]}var A=Object.freeze({__proto__:null,default:class extends t{constructor(t){super(),e(this,t,y,x,a,{})}}});export{C as a,k as c,A as i};

import __inject_styles from './inject_styles.5607aec6.js';