import{S as t,i as s,s as e,e as a,t as l,a as r,c as n,b as h,d as c,f as o,g as i,h as m,j as p,k as f,n as g,q as u,l as d,H as v}from"./client.dc3a1063.js";const k=[{title:"Marker Map",slug:"marker-map",html:'\n\t\t<img width="160" src="https://github.com/angkarn/marker-map/raw/main/example/assets/screenshot.jpg" alt="marker map screenshot" />\n\t\t<p>Marker Map is simple dynamic place marker by position to image and support responsive.</p>\n\t\t'}];function w(t,s,e){const a=t.slice();return a[0]=s[e],a}function E(t){let s,e,u,d,k,w,E=t[0].title+"",M=t[0].html+"";return{c(){s=a("a"),e=l(E),u=r(),d=a("div"),w=r(),this.h()},l(t){s=n(t,"A",{class:!0,href:!0});var a=h(s);e=c(a,E),a.forEach(o),u=i(t),d=n(t,"DIV",{class:!0});var l=h(d);w=i(l),l.forEach(o),this.h()},h(){m(s,"class","post_title svelte-13w1z87"),m(s,"href",t[0].slug),k=new v(w),m(d,"class","post_html svelte-13w1z87")},m(t,a){p(t,s,a),f(s,e),p(t,u,a),p(t,d,a),k.m(M,d),f(d,w)},p:g,d(t){t&&o(s),t&&o(u),t&&o(d)}}}function M(t){let s,e,l=k,c=[];for(let s=0;s<l.length;s+=1)c[s]=E(w(t,l,s));return{c(){s=r(),e=a("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){u('[data-svelte="svelte-1wq4n52"]',document.head).forEach(o),s=i(t),e=n(t,"DIV",{class:!0});var a=h(e);for(let t=0;t<c.length;t+=1)c[t].l(a);a.forEach(o),this.h()},h(){document.title="Angkarn P.",m(e,"class","posts_list svelte-13w1z87")},m(t,a){p(t,s,a),p(t,e,a);for(let t=0;t<c.length;t+=1)c[t].m(e,null)},p(t,[s]){if(0&s){let a;for(l=k,a=0;a<l.length;a+=1){const r=w(t,l,a);c[a]?c[a].p(r,s):(c[a]=E(r),c[a].c(),c[a].m(e,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=l.length}},i:g,o:g,d(t){t&&o(s),t&&o(e),d(c,t)}}}k.forEach((t=>{t.html=t.html.replace(/^\t{3}/gm,"")}));export default class extends t{constructor(t){super(),s(this,t,null,M,e,{})}}