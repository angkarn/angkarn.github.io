import{C as t,D as n,_ as e,a as r,b as s,c as a,i as c,d as o,S as u,s as i,f,e as l,t as h,q as p,k as v,l as m,g as d,h as y,j as x,m as b,n as g,o as R,r as j,E as D,p as E}from"./client.ba94a7e4.js";function k(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=r(t);if(n){var c=r(this).constructor;e=Reflect.construct(a,arguments,c)}else e=a.apply(this,arguments);return s(this,e)}}function H(t){var n,e,r,s,a,c,o=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=f(),r=l("h1"),s=h(o),a=f(),c=l("div"),this.h()},l:function(t){p('[data-svelte="svelte-1uty71u"]',document.head).forEach(v),e=m(t),r=d(t,"H1",{});var n=y(r);s=x(n,o),n.forEach(v),a=m(t),c=d(t,"DIV",{class:!0}),y(c).forEach(v),this.h()},h:function(){b(c,"class","content svelte-emm3f3")},m:function(t,n){g(t,e,n),g(t,r,n),R(r,s),g(t,a,n),g(t,c,n),c.innerHTML=u},p:function(t,e){var r=j(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&o!==(o=t[0].title+"")&&D(s,o),1&r&&u!==(u=t[0].html+"")&&(c.innerHTML=u)},i:E,o:E,d:function(t){t&&v(e),t&&v(r),t&&v(a),t&&v(c)}}}function w(t){return L.apply(this,arguments)}function L(){return(L=t(n.mark((function t(e){var r,s,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function M(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var S=function(t){e(r,u);var n=k(r);function r(t){var e;return a(this,r),e=n.call(this),c(o(e),t,M,H,i,{post:0}),e}return r}();export default S;export{w as preload};
