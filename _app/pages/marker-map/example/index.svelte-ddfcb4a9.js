import{_ as a}from"../../../chunks/preload-helper-08cc8e69.js";import{S as t,i as s,s as e,e as r,k as c,t as i,N as l,c as o,d as n,n as d,a as h,g as m,b as f,M as p,F as v,f as g,J as u,G as k,K as E,A as x,P as M,T as b}from"../../../chunks/vendor-c5ad99ae.js";const{document:_}=M;function w(a){let t,s,e,x,M,b,w,A,I,T,y,D,N,j,B,O,V,R,G,U,L,P,S,H,J,K,$,z,C,F,W,q;return{c(){t=r("link"),s=c(),e=r("div"),x=r("div"),M=r("a"),b=r("img"),A=c(),I=r("h1"),T=r("span"),y=r("a"),D=i("Marker Map"),N=i(" Example"),j=c(),B=r("div"),O=c(),V=r("div"),R=r("button"),G=i("Add Marker"),U=c(),L=r("button"),P=i("Random Active"),S=c(),H=r("button"),J=i("Get Marker Data"),K=c(),$=r("button"),z=i("Reset"),C=c(),F=r("div"),this.h()},l(a){const r=l('[data-svelte="svelte-1tiew5k"]',_.head);t=o(r,"LINK",{rel:!0,href:!0}),r.forEach(n),s=d(a),e=o(a,"DIV",{class:!0});var c=h(e);x=o(c,"DIV",{class:!0});var i=h(x);M=o(i,"A",{href:!0});var f=h(M);b=o(f,"IMG",{width:!0,height:!0,src:!0,alt:!0}),f.forEach(n),i.forEach(n),A=d(c),I=o(c,"H1",{class:!0});var p=h(I);T=o(p,"SPAN",{});var v=h(T);y=o(v,"A",{href:!0,class:!0});var g=h(y);D=m(g,"Marker Map"),g.forEach(n),v.forEach(n),N=m(p," Example"),p.forEach(n),j=d(c),B=o(c,"DIV",{id:!0,class:!0}),h(B).forEach(n),O=d(c),V=o(c,"DIV",{id:!0,class:!0});var u=h(V);R=o(u,"BUTTON",{class:!0});var k=h(R);G=m(k,"Add Marker"),k.forEach(n),U=d(u),L=o(u,"BUTTON",{class:!0});var E=h(L);P=m(E,"Random Active"),E.forEach(n),S=d(u),H=o(u,"BUTTON",{class:!0});var w=h(H);J=m(w,"Get Marker Data"),w.forEach(n),K=d(u),$=o(u,"BUTTON",{class:!0});var W=h($);z=m(W,"Reset"),W.forEach(n),u.forEach(n),C=d(c),F=o(c,"DIV",{id:!0,class:!0}),h(F).forEach(n),c.forEach(n),this.h()},h(){_.title="Example Marker Map",f(t,"rel","icon"),f(t,"href","marker-map/favicon.ico"),f(b,"width","35"),f(b,"height","37.5"),p(b.src,w="/img/github.svg")||f(b,"src","/img/github.svg"),f(b,"alt","github"),f(M,"href","https://github.com/angkarn/marker-map"),f(x,"class","link svelte-10xt0tm"),f(y,"href","marker-map"),f(y,"class","svelte-10xt0tm"),f(I,"class","title svelte-10xt0tm"),f(B,"id","show"),f(B,"class","svelte-10xt0tm"),f(R,"class","svelte-10xt0tm"),f(L,"class","svelte-10xt0tm"),f(H,"class","svelte-10xt0tm"),f($,"class","svelte-10xt0tm"),f(V,"id","action"),f(V,"class","svelte-10xt0tm"),f(F,"id","detail"),f(F,"class","svelte-10xt0tm"),f(e,"class","content svelte-10xt0tm")},m(r,c){v(_.head,t),g(r,s,c),g(r,e,c),v(e,x),v(x,M),v(M,b),v(e,A),v(e,I),v(I,T),v(T,y),v(y,D),v(I,N),v(e,j),v(e,B),v(e,O),v(e,V),v(V,R),v(R,G),v(V,U),v(V,L),v(L,P),v(V,S),v(V,H),v(H,J),v(V,K),v(V,$),v($,z),v(e,C),v(e,F),W||(q=[u(R,"click",a[0]),u(L,"click",a[1]),u(H,"click",a[2]),u($,"click",a[3])],W=!0)},p:k,i:k,o:k,d(a){n(t),a&&n(s),a&&n(e),W=!1,E(q)}}}function A(t){const s=new b;let e=null,r=[{id:"my_home_1",width:12,top:56,left:40,img:"/_app/assets/home.21024523.svg",meta:{my:"home"}},{width:12,top:20,left:64,img:"/_app/assets/place.b22c9a22.svg"}],c=[{id:"3",width:12,top:70,left:70,img:"/_app/assets/info.615f80c2.svg",meta:{abc:"xyz"}},{id:"4",width:12,top:37,left:16,img:"/_app/assets/high-priority.16d4bd03.svg"}],i=0;return x((async()=>{s.render("#show",{background:"/_app/assets/treasure-map.7184145e.jpg",markers:r}),e=await a((()=>import("../../../chunks/json-formatter.esm-f301708a.js")),[]),s.on("click",((a,t)=>{confirm(`Want to delete:\n ID: ${t.id}\n${JSON.stringify(t.meta)}`)&&s.remove(t.id)}))})),[function(){i>=c.length||(s.add(c[i]),i++)},function(){s.activeAll();const a=s.getAll(),t=a[Math.floor(Math.random()*a.length)];s.inactive(t.id)},function(){const a=new e.default(s.getAll());document.getElementById("detail").innerHTML="",document.getElementById("detail").appendChild(a.render())},function(){i=0,s.destroy(),s.render("#show",{background:"/_app/assets/treasure-map.7184145e.jpg",markers:r})}]}export default class extends t{constructor(a){super(),s(this,a,A,w,e,{})}}