import{S as t,i as e,s as l,e as n,a as o,b as r,t as s,c,d as i,f as a,g as Q,h as f,j as u,k as A,l as h,m as v,n as g,o as d,p as m,q as p,r as y,u as w,v as b,w as j,x,y as E,z as I,A as k,B as L}from"./client.a95108c0.js";import{c as M,a as D}from"./_commonjsHelpers.dc42d9ec.js";import{P as Z}from"./PuzzleSection.5ae078de.js";var O=function(t,e){var l=-1,n=t.length;for(e||(e=Array(n));++l<n;)e[l]=t[l];return e},V=Math.floor,S=Math.random;var $=function(t,e){return t+V(S()*(e-t+1))};var T=function(t,e){var l=-1,n=t.length,o=n-1;for(e=void 0===e?n:e;++l<e;){var r=$(l,o),s=t[r];t[r]=t[l],t[l]=s}return t.length=e,t};var B=function(t){return T(O(t))};var N=function(t,e){for(var l=-1,n=null==t?0:t.length,o=Array(n);++l<n;)o[l]=e(t[l],l,t);return o};var P=function(t,e){return N(e,(function(e){return t[e]}))};var _=function(t,e){for(var l=-1,n=Array(t);++l<t;)n[l]=e(l);return n},z="object"==typeof M&&M&&M.Object===Object&&M,Y="object"==typeof self&&self&&self.Object===Object&&self,C=z||Y||Function("return this")(),F=C.Symbol,H=Object.prototype,U=H.hasOwnProperty,X=H.toString,q=F?F.toStringTag:void 0;var G=function(t){var e=U.call(t,q),l=t[q];try{t[q]=void 0;var n=!0}catch(t){}var o=X.call(t);return n&&(e?t[q]=l:delete t[q]),o},R=Object.prototype.toString;var J=function(t){return R.call(t)},W=F?F.toStringTag:void 0;var K=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":W&&W in Object(t)?G(t):J(t)};var tt=function(t){return null!=t&&"object"==typeof t};var et=function(t){return tt(t)&&"[object Arguments]"==K(t)},lt=Object.prototype,nt=lt.hasOwnProperty,ot=lt.propertyIsEnumerable,rt=et(function(){return arguments}())?et:function(t){return tt(t)&&nt.call(t,"callee")&&!ot.call(t,"callee")},st=Array.isArray;var ct=function(){return!1},it=D((function(t,e){var l=e&&!e.nodeType&&e,n=l&&t&&!t.nodeType&&t,o=n&&n.exports===l?C.Buffer:void 0,r=(o?o.isBuffer:void 0)||ct;t.exports=r})),at=/^(?:0|[1-9]\d*)$/;var Qt=function(t,e){var l=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==l||"symbol"!=l&&at.test(t))&&t>-1&&t%1==0&&t<e};var ft=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},ut={};ut["[object Float32Array]"]=ut["[object Float64Array]"]=ut["[object Int8Array]"]=ut["[object Int16Array]"]=ut["[object Int32Array]"]=ut["[object Uint8Array]"]=ut["[object Uint8ClampedArray]"]=ut["[object Uint16Array]"]=ut["[object Uint32Array]"]=!0,ut["[object Arguments]"]=ut["[object Array]"]=ut["[object ArrayBuffer]"]=ut["[object Boolean]"]=ut["[object DataView]"]=ut["[object Date]"]=ut["[object Error]"]=ut["[object Function]"]=ut["[object Map]"]=ut["[object Number]"]=ut["[object Object]"]=ut["[object RegExp]"]=ut["[object Set]"]=ut["[object String]"]=ut["[object WeakMap]"]=!1;var At=function(t){return tt(t)&&ft(t.length)&&!!ut[K(t)]};var ht=function(t){return function(e){return t(e)}},vt=D((function(t,e){var l=e&&!e.nodeType&&e,n=l&&t&&!t.nodeType&&t,o=n&&n.exports===l&&z.process,r=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=r})),gt=vt&&vt.isTypedArray,dt=gt?ht(gt):At,mt=Object.prototype.hasOwnProperty;var pt=function(t,e){var l=st(t),n=!l&&rt(t),o=!l&&!n&&it(t),r=!l&&!n&&!o&&dt(t),s=l||n||o||r,c=s?_(t.length,String):[],i=c.length;for(var a in t)!e&&!mt.call(t,a)||s&&("length"==a||o&&("offset"==a||"parent"==a)||r&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Qt(a,i))||c.push(a);return c},yt=Object.prototype;var wt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||yt)};var bt=function(t,e){return function(l){return t(e(l))}}(Object.keys,Object),jt=Object.prototype.hasOwnProperty;var xt=function(t){if(!wt(t))return bt(t);var e=[];for(var l in Object(t))jt.call(t,l)&&"constructor"!=l&&e.push(l);return e};var Et=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var It=function(t){if(!Et(t))return!1;var e=K(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var kt=function(t){return null!=t&&ft(t.length)&&!It(t)};var Lt=function(t){return kt(t)?pt(t):xt(t)};var Mt=function(t){return null==t?[]:P(t,Lt(t))};var Dt=function(t){return T(Mt(t))};var Zt=function(t){return(st(t)?B:Dt)(t)};function Ot(t){var e=0,l=0,n=0,o=0;function r(t){(t=t||window.event).preventDefault(),"touchstart"===t.type?(n=t.touches[0].clientX,o=t.touches[0].clientY):(n=t.clientX,o=t.clientY),document.onmouseup=c,document.ontouchend=c,document.onmousemove=s,document.ontouchmove=s}function s(r){(r=r||window.event).preventDefault(),"touchmove"===r.type?(e=n-r.touches[0].clientX,l=o-r.touches[0].clientY,n=r.touches[0].clientX,o=r.touches[0].clientY):(e=n-r.clientX,l=o-r.clientY,n=r.clientX,o=r.clientY),t.style.top=t.offsetTop-l+"px",t.style.left=t.offsetLeft-e+"px"}function c(t){document.onmouseup=null,document.ontouchend=null,document.onmousemove=null,document.ontouchmove=null}t.onmousedown=r,t.ontouchstart=r}function Vt(t){let e,l,d,m,p,y,w,b,j,x,E,I,k,L,M,D,Z;return{c(){e=n("div"),l=n("div"),d=n("div"),m=o("svg"),p=o("g"),y=o("path"),w=r(),b=n("div"),j=o("svg"),x=o("g"),E=o("path"),I=r(),k=n("div"),L=n("span"),M=s("email: "),D=n("span"),Z=s("angkarn.pk@gmail.com"),this.h()},l(t){e=c(t,"DIV",{class:!0});var n=i(e);l=c(n,"DIV",{class:!0});var o=i(l);d=c(o,"DIV",{class:!0,id:!0});var r=i(d);m=c(r,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0,class:!0},1);var s=i(m);p=c(s,"g",{class:!0,"stroke-linecap":!0,"fill-rule":!0,"font-size":!0,stroke:!0,"stroke-width":!0,fill:!0,style:!0},1);var u=i(p);y=c(u,"path",{d:!0,"vector-effect":!0},1),i(y).forEach(a),u.forEach(a),s.forEach(a),r.forEach(a),w=Q(o),b=c(o,"DIV",{class:!0,id:!0});var A=i(b);j=c(A,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0,class:!0},1);var h=i(j);x=c(h,"g",{class:!0,"stroke-linecap":!0,"fill-rule":!0,"font-size":!0,stroke:!0,"stroke-width":!0,fill:!0,style:!0},1);var v=i(x);E=c(v,"path",{d:!0,"vector-effect":!0},1),i(E).forEach(a),v.forEach(a),h.forEach(a),A.forEach(a),o.forEach(a),n.forEach(a),I=Q(t),k=c(t,"DIV",{class:!0});var g=i(k);L=c(g,"SPAN",{});var O=i(L);M=f(O,"email: "),O.forEach(a),D=c(g,"SPAN",{class:!0});var V=i(D);Z=f(V,"angkarn.pk@gmail.com"),V.forEach(a),g.forEach(a),this.h()},h(){u(y,"d","M 113.121 17.168 L 102.201 25.868 L 112.461 40.028 A 3.356 3.356 0 0 1 112.788 41.316 A 1.086 1.086 0 0 1 112.161 42.368 A 1.606 1.606 0 0 1 111.442 42.555 A 1.56 1.56 0 0 1 110.241 41.888 L 100.041 27.248 L 95.481 30.968 A 47.199 47.199 0 0 0 95.412 33.549 A 64.148 64.148 0 0 0 95.841 40.688 Q 95.781 42.488 94.701 42.728 A 1.169 1.169 0 0 1 94.447 42.757 A 1.691 1.691 0 0 1 93.081 41.228 A 296.598 296.598 0 0 1 92.317 19.296 A 402.819 402.819 0 0 1 92.721 1.628 A 1.6 1.6 0 0 1 94.13 0 A 1.521 1.521 0 0 1 94.281 0.008 Q 95.541 0.068 95.541 1.808 Q 95.361 8.828 95.271 15.218 Q 95.181 21.608 95.121 27.488 L 111.681 14.348 A 2.013 2.013 0 0 1 112.683 14.021 A 1.223 1.223 0 0 1 113.721 14.648 Q 114.381 15.908 113.121 17.168 Z M 33.201 41.768 L 32.961 14.948 Q 33.141 13.088 34.041 13.028 Q 35.001 13.028 35.241 14.828 L 35.241 23.108 Q 36.141 19.268 38.181 17.048 Q 40.221 14.828 44.001 14.588 Q 47.961 14.288 50.301 17.408 Q 51.501 18.908 52.281 21.188 Q 53.061 23.468 53.361 26.528 Q 53.661 29.528 53.601 33.368 Q 53.541 37.208 53.121 41.828 Q 52.641 43.388 51.441 43.148 Q 50.301 42.788 50.361 41.348 Q 50.781 36.908 50.841 33.338 Q 50.901 29.768 50.661 27.008 Q 50.121 21.668 48.261 19.328 Q 46.341 17.168 43.701 17.408 Q 41.061 17.648 38.961 20.948 Q 38.001 22.568 37.341 24.548 Q 36.681 26.528 36.441 28.868 Q 36.261 31.208 36.141 33.278 Q 36.021 35.348 36.081 37.088 Q 36.141 38.828 36.051 40.208 Q 35.961 41.588 35.841 42.548 A 2.404 2.404 0 0 1 34.477 43.143 A 1.493 1.493 0 0 1 33.201 41.768 Z M 183.201 41.768 L 182.961 14.948 Q 183.141 13.088 184.041 13.028 Q 185.001 13.028 185.241 14.828 L 185.241 23.108 Q 186.141 19.268 188.181 17.048 Q 190.221 14.828 194.001 14.588 Q 197.961 14.288 200.301 17.408 Q 201.501 18.908 202.281 21.188 Q 203.061 23.468 203.361 26.528 Q 203.661 29.528 203.601 33.368 Q 203.541 37.208 203.121 41.828 Q 202.641 43.388 201.441 43.148 Q 200.301 42.788 200.361 41.348 Q 200.781 36.908 200.841 33.338 Q 200.901 29.768 200.661 27.008 Q 200.121 21.668 198.261 19.328 Q 196.341 17.168 193.701 17.408 Q 191.061 17.648 188.961 20.948 Q 188.001 22.568 187.341 24.548 Q 186.681 26.528 186.441 28.868 Q 186.261 31.208 186.141 33.278 Q 186.021 35.348 186.081 37.088 Q 186.141 38.828 186.051 40.208 Q 185.961 41.588 185.841 42.548 A 2.404 2.404 0 0 1 184.477 43.143 A 1.493 1.493 0 0 1 183.201 41.768 Z M 0.681 15.428 Q 2.361 12.908 5.361 11.888 A 12.691 12.691 0 0 1 8.693 11.447 A 14.105 14.105 0 0 1 11.361 11.708 Q 14.301 12.308 16.401 14.528 Q 17.421 15.668 18.111 16.958 Q 18.801 18.248 19.041 19.748 Q 19.341 21.248 19.281 23.138 Q 19.221 25.028 18.861 27.368 Q 18.441 29.708 18.051 31.508 Q 17.661 33.308 17.361 34.568 Q 18.321 37.028 20.001 37.988 Q 21.621 38.948 23.481 38.888 Q 25.221 38.828 25.161 40.208 Q 25.101 41.708 22.761 41.708 Q 20.541 41.708 18.681 40.328 Q 16.701 38.888 16.101 37.808 Q 14.721 40.568 12.261 41.528 Q 9.621 42.548 6.561 42.128 Q 5.061 41.888 3.831 41.288 Q 2.601 40.688 1.761 39.548 Q 0.021 37.448 0.021 33.488 Q -0.039 29.648 2.421 26.708 A 6.69 6.69 0 0 1 7.752 24.099 A 8.049 8.049 0 0 1 8.421 24.128 Q 11.901 24.308 13.581 25.928 Q 15.201 27.428 15.741 30.188 A 58.301 58.301 0 0 0 16.489 22.414 A 9.549 9.549 0 0 0 16.341 20.528 Q 15.801 18.308 14.301 16.628 Q 12.861 14.888 10.641 14.348 A 9.198 9.198 0 0 0 8.742 14.146 A 8.651 8.651 0 0 0 6.201 14.528 Q 3.981 15.188 2.601 17.228 Q 1.161 18.128 0.561 17.528 A 1.042 1.042 0 0 1 0.258 16.759 A 2.923 2.923 0 0 1 0.681 15.428 Z M 120.681 15.428 Q 122.361 12.908 125.361 11.888 A 12.691 12.691 0 0 1 128.693 11.447 A 14.105 14.105 0 0 1 131.361 11.708 Q 134.301 12.308 136.401 14.528 Q 137.421 15.668 138.111 16.958 Q 138.801 18.248 139.041 19.748 Q 139.341 21.248 139.281 23.138 Q 139.221 25.028 138.861 27.368 Q 138.441 29.708 138.051 31.508 Q 137.661 33.308 137.361 34.568 Q 138.321 37.028 140.001 37.988 Q 141.621 38.948 143.481 38.888 Q 145.221 38.828 145.161 40.208 Q 145.101 41.708 142.761 41.708 Q 140.541 41.708 138.681 40.328 Q 136.701 38.888 136.101 37.808 Q 134.721 40.568 132.261 41.528 Q 129.621 42.548 126.561 42.128 Q 125.061 41.888 123.831 41.288 Q 122.601 40.688 121.761 39.548 Q 120.021 37.448 120.021 33.488 Q 119.961 29.648 122.421 26.708 A 6.69 6.69 0 0 1 127.752 24.099 A 8.049 8.049 0 0 1 128.421 24.128 Q 131.901 24.308 133.581 25.928 Q 135.201 27.428 135.741 30.188 A 58.301 58.301 0 0 0 136.489 22.414 A 9.549 9.549 0 0 0 136.341 20.528 Q 135.801 18.308 134.301 16.628 Q 132.861 14.888 130.641 14.348 A 9.198 9.198 0 0 0 128.742 14.146 A 8.651 8.651 0 0 0 126.201 14.528 Q 123.981 15.188 122.601 17.228 Q 121.161 18.128 120.561 17.528 A 1.042 1.042 0 0 1 120.258 16.759 A 2.923 2.923 0 0 1 120.681 15.428 Z M 80.421 18.128 Q 80.601 16.448 81.501 16.328 A 1.085 1.085 0 0 1 81.569 16.326 A 1.41 1.41 0 0 1 82.701 17.888 A 179.939 179.939 0 0 1 82.915 26.429 A 142.251 142.251 0 0 1 82.881 29.588 Q 82.761 34.988 82.221 39.608 Q 81.081 48.788 75.141 50.468 Q 69.141 52.088 64.881 47.528 A 2.647 2.647 0 0 1 64.182 45.988 A 1.106 1.106 0 0 1 64.461 45.248 A 0.882 0.882 0 0 1 65.145 44.902 A 2.062 2.062 0 0 1 66.441 45.608 A 7.368 7.368 0 0 0 71.986 48.259 A 8.659 8.659 0 0 0 74.601 47.828 Q 79.341 46.328 79.701 36.788 Q 77.841 38.528 75.621 39.188 A 12.132 12.132 0 0 1 72.389 39.615 A 14.13 14.13 0 0 1 70.521 39.488 Q 67.581 39.128 65.121 36.668 Q 62.601 34.088 62.001 29.708 A 14.408 14.408 0 0 1 61.858 27.696 A 14.078 14.078 0 0 1 63.321 21.488 Q 65.181 17.528 68.361 16.268 Q 71.601 14.888 74.601 15.308 Q 77.721 15.788 80.421 18.128 Z M 156.621 15.368 L 156.861 25.928 Q 161.181 16.628 171.801 16.928 Q 173.241 16.988 173.301 18.128 Q 173.301 19.208 171.801 19.448 Q 161.661 19.748 157.881 29.168 Q 157.401 30.488 157.101 33.398 Q 156.801 36.308 156.741 40.748 Q 156.741 42.608 155.661 42.668 A 1.57 1.57 0 0 1 155.505 42.676 A 1.564 1.564 0 0 1 154.101 41.108 L 153.861 15.968 Q 153.681 13.868 154.881 13.628 A 1.339 1.339 0 0 1 155.191 13.589 A 1.785 1.785 0 0 1 156.621 15.368 Z M 79.161 22.028 Q 77.661 19.268 76.161 18.488 Q 74.661 17.888 72.861 17.768 Q 71.061 17.768 69.081 18.848 Q 67.101 19.868 65.721 22.868 A 11.1 11.1 0 0 0 64.606 27.729 A 12.077 12.077 0 0 0 64.701 29.228 Q 65.181 32.708 66.921 34.448 Q 68.721 36.428 71.301 36.788 A 8.376 8.376 0 0 0 72.545 36.882 A 8.337 8.337 0 0 0 75.981 36.128 Q 78.141 34.988 78.921 33.308 Q 79.761 31.688 80.061 28.208 A 15.646 15.646 0 0 0 80.103 27.073 A 13.581 13.581 0 0 0 79.161 22.028 Z M 13.761 31.268 Q 12.621 28.928 11.661 27.968 Q 10.821 27.068 8.421 26.768 A 8.46 8.46 0 0 0 7.789 26.743 A 4.144 4.144 0 0 0 4.821 27.728 Q 4.161 28.328 3.771 28.958 Q 3.381 29.588 3.141 30.248 Q 2.901 30.968 2.811 31.838 Q 2.721 32.708 2.661 33.788 A 6.283 6.283 0 0 0 2.658 33.972 A 5.759 5.759 0 0 0 3.861 37.508 Q 5.001 39.188 7.161 39.488 A 8.477 8.477 0 0 0 8.36 39.576 A 6.483 6.483 0 0 0 10.941 39.068 Q 12.621 38.228 13.521 36.368 A 7.185 7.185 0 0 0 13.982 33.659 A 14.365 14.365 0 0 0 13.761 31.268 Z M 133.761 31.268 Q 132.621 28.928 131.661 27.968 Q 130.821 27.068 128.421 26.768 A 8.46 8.46 0 0 0 127.789 26.743 A 4.144 4.144 0 0 0 124.821 27.728 Q 124.161 28.328 123.771 28.958 Q 123.381 29.588 123.141 30.248 Q 122.901 30.968 122.811 31.838 Q 122.721 32.708 122.661 33.788 A 6.283 6.283 0 0 0 122.658 33.972 A 5.759 5.759 0 0 0 123.861 37.508 Q 125.001 39.188 127.161 39.488 A 8.477 8.477 0 0 0 128.36 39.576 A 6.483 6.483 0 0 0 130.941 39.068 Q 132.621 38.228 133.521 36.368 A 7.185 7.185 0 0 0 133.982 33.659 A 14.365 14.365 0 0 0 133.761 31.268 Z"),u(y,"vector-effect","non-scaling-stroke"),u(p,"class","word svelte-1mhy8lo"),u(p,"stroke-linecap","round"),u(p,"fill-rule","evenodd"),u(p,"font-size","9pt"),u(p,"stroke","#000"),u(p,"stroke-width","0.25mm"),u(p,"fill","none"),A(p,"stroke","#000"),A(p,"stroke-width","0.25mm"),A(p,"fill","none"),u(m,"width","203.612"),u(m,"height","50.892"),u(m,"viewBox","0 0 203.612 50.892"),u(m,"xmlns","http://www.w3.org/2000/svg"),u(m,"class","svelte-1mhy8lo"),u(d,"class","dItem svelte-1mhy8lo"),u(d,"id","firstName"),u(E,"d","M 143.31 18.067 L 137.13 40.747 A 2.101 2.101 0 0 1 135.81 43.027 A 1.509 1.509 0 0 1 135.575 43.047 A 1.388 1.388 0 0 1 134.31 41.707 L 130.11 22.507 L 125.61 41.167 Q 125.37 42.847 124.29 43.087 Q 123.33 43.327 122.67 41.707 L 117.27 17.947 A 4.402 4.402 0 0 1 117.229 17.368 A 1.265 1.265 0 0 1 118.17 15.907 A 1.439 1.439 0 0 1 118.421 15.885 A 1.784 1.784 0 0 1 119.91 16.987 L 124.11 35.767 L 128.61 17.527 Q 128.97 16.267 129.93 16.087 Q 130.95 15.967 131.67 17.767 L 135.87 35.467 L 140.61 17.107 A 1.497 1.497 0 0 1 141.969 16.005 A 1.591 1.591 0 0 1 142.23 16.027 Q 143.31 16.267 143.31 18.067 Z M 80.61 17.767 L 69.69 26.467 L 79.95 40.627 A 3.356 3.356 0 0 1 80.277 41.915 A 1.086 1.086 0 0 1 79.65 42.967 A 1.606 1.606 0 0 1 78.931 43.154 A 1.56 1.56 0 0 1 77.73 42.487 L 67.53 27.847 L 62.97 31.567 A 47.199 47.199 0 0 0 62.902 34.148 A 64.148 64.148 0 0 0 63.33 41.287 Q 63.27 43.087 62.19 43.327 A 1.169 1.169 0 0 1 61.936 43.356 A 1.691 1.691 0 0 1 60.57 41.827 A 296.598 296.598 0 0 1 59.806 19.896 A 402.819 402.819 0 0 1 60.21 2.227 A 1.6 1.6 0 0 1 61.619 0.6 A 1.521 1.521 0 0 1 61.77 0.607 Q 63.03 0.667 63.03 2.407 Q 62.85 9.427 62.76 15.817 Q 62.67 22.207 62.61 28.087 L 79.17 14.947 A 2.013 2.013 0 0 1 80.172 14.62 A 1.223 1.223 0 0 1 81.21 15.247 Q 81.87 16.507 80.61 17.767 Z M 272.97 24.607 A 54.381 54.381 0 0 0 272.412 32.304 A 49.424 49.424 0 0 0 273.15 40.867 Q 273.09 42.847 272.01 42.907 A 1.369 1.369 0 0 1 271.859 42.916 A 1.618 1.618 0 0 1 270.45 41.467 Q 269.73 33.487 269.55 23.557 Q 269.37 13.627 269.79 1.747 Q 269.734 0 271.001 0 A 2.036 2.036 0 0 1 271.17 0.007 A 1.534 1.534 0 0 1 272.433 1.834 A 4.607 4.607 0 0 1 272.43 1.987 Q 272.49 6.487 272.52 10.567 Q 272.55 14.647 272.49 18.307 Q 275.07 15.007 279.03 14.647 A 13.084 13.084 0 0 1 280.604 14.549 A 8.988 8.988 0 0 1 285.75 16.027 Q 287.07 16.987 288.03 18.097 Q 288.99 19.207 289.53 20.587 Q 290.79 23.407 291.03 26.467 A 47.035 47.035 0 0 1 291.245 31.053 A 56.718 56.718 0 0 1 291.21 33.007 Q 291.15 34.687 291.06 36.847 Q 290.97 39.007 290.73 41.587 Q 290.37 43.267 289.29 43.267 Q 288.21 43.267 288.03 41.467 Q 288.21 38.827 288.33 36.697 Q 288.45 34.567 288.51 32.947 Q 288.57 31.327 288.54 29.797 Q 288.51 28.267 288.39 26.947 Q 288.27 25.567 287.97 24.337 Q 287.67 23.107 287.19 22.027 Q 286.71 20.887 286.08 20.017 Q 285.45 19.147 284.61 18.547 Q 283.83 17.887 282.84 17.617 Q 281.85 17.347 280.83 17.347 Q 279.75 17.407 278.85 17.557 Q 277.95 17.707 277.17 18.007 Q 275.67 18.607 274.65 19.927 Q 273.69 21.247 272.97 24.607 Z M 180.69 42.367 L 180.45 15.547 Q 180.63 13.687 181.53 13.627 Q 182.49 13.627 182.73 15.427 L 182.73 23.707 Q 183.63 19.867 185.67 17.647 Q 187.71 15.427 191.49 15.187 Q 195.45 14.887 197.79 18.007 Q 198.99 19.507 199.77 21.787 Q 200.55 24.067 200.85 27.127 Q 201.15 30.127 201.09 33.967 Q 201.03 37.807 200.61 42.427 Q 200.13 43.987 198.93 43.747 Q 197.79 43.387 197.85 41.947 Q 198.27 37.507 198.33 33.937 Q 198.39 30.367 198.15 27.607 Q 197.61 22.267 195.75 19.927 Q 193.83 17.767 191.19 18.007 Q 188.55 18.247 186.45 21.547 Q 185.49 23.167 184.83 25.147 Q 184.17 27.127 183.93 29.467 Q 183.75 31.807 183.63 33.877 Q 183.51 35.947 183.57 37.687 Q 183.63 39.427 183.54 40.807 Q 183.45 42.187 183.33 43.147 A 2.404 2.404 0 0 1 181.967 43.743 A 1.493 1.493 0 0 1 180.69 42.367 Z M 32.01 16.807 Q 32.13 31.807 33.09 34.987 Q 34.05 38.227 35.79 39.547 Q 37.41 40.807 39.87 40.807 Q 42.27 40.807 44.13 39.427 Q 46.05 38.047 47.13 34.267 A 60.344 60.344 0 0 0 48.221 19.659 A 253.355 253.355 0 0 0 48.21 17.347 A 1.715 1.715 0 0 1 49.58 15.292 A 2.84 2.84 0 0 1 50.91 15.727 Q 51.51 21.187 51.27 42.607 Q 51.15 44.347 49.89 44.527 A 1.39 1.39 0 0 1 49.821 44.529 Q 48.847 44.529 48.847 43.089 A 5.342 5.342 0 0 1 48.87 42.607 Q 48.87 40.327 48.69 37.567 Q 48.03 39.187 47.16 40.327 Q 46.29 41.467 45.27 42.187 Q 43.17 43.567 40.05 43.747 Q 36.99 43.867 34.17 42.307 Q 31.47 40.807 30.09 36.007 Q 29.43 33.607 29.22 28.837 A 163.409 163.409 0 0 1 29.087 21.758 A 300.557 300.557 0 0 1 29.13 16.807 Q 29.37 14.887 30.75 14.887 Q 32.01 14.887 32.01 16.807 Z M 88.17 16.027 Q 89.85 13.507 92.85 12.487 A 12.691 12.691 0 0 1 96.183 12.046 A 14.105 14.105 0 0 1 98.85 12.307 Q 101.79 12.907 103.89 15.127 Q 104.91 16.267 105.6 17.557 Q 106.29 18.847 106.53 20.347 Q 106.83 21.847 106.77 23.737 Q 106.71 25.627 106.35 27.967 Q 105.93 30.307 105.54 32.107 Q 105.15 33.907 104.85 35.167 Q 105.81 37.627 107.49 38.587 Q 109.11 39.547 110.97 39.487 Q 112.71 39.427 112.65 40.807 Q 112.59 42.307 110.25 42.307 Q 108.03 42.307 106.17 40.927 Q 104.19 39.487 103.59 38.407 Q 102.21 41.167 99.75 42.127 Q 97.11 43.147 94.05 42.727 Q 92.55 42.487 91.32 41.887 Q 90.09 41.287 89.25 40.147 Q 87.51 38.047 87.51 34.087 Q 87.45 30.247 89.91 27.307 A 6.69 6.69 0 0 1 95.242 24.699 A 8.049 8.049 0 0 1 95.91 24.727 Q 99.39 24.907 101.07 26.527 Q 102.69 28.027 103.23 30.787 A 58.301 58.301 0 0 0 103.978 23.013 A 9.549 9.549 0 0 0 103.83 21.127 Q 103.29 18.907 101.79 17.227 Q 100.35 15.487 98.13 14.947 A 9.198 9.198 0 0 0 96.232 14.745 A 8.651 8.651 0 0 0 93.69 15.127 Q 91.47 15.787 90.09 17.827 Q 88.65 18.727 88.05 18.127 A 1.042 1.042 0 0 1 87.748 17.358 A 2.923 2.923 0 0 1 88.17 16.027 Z M 148.17 16.027 Q 149.85 13.507 152.85 12.487 A 12.691 12.691 0 0 1 156.183 12.046 A 14.105 14.105 0 0 1 158.85 12.307 Q 161.79 12.907 163.89 15.127 Q 164.91 16.267 165.6 17.557 Q 166.29 18.847 166.53 20.347 Q 166.83 21.847 166.77 23.737 Q 166.71 25.627 166.35 27.967 Q 165.93 30.307 165.54 32.107 Q 165.15 33.907 164.85 35.167 Q 165.81 37.627 167.49 38.587 Q 169.11 39.547 170.97 39.487 Q 172.71 39.427 172.65 40.807 Q 172.59 42.307 170.25 42.307 Q 168.03 42.307 166.17 40.927 Q 164.19 39.487 163.59 38.407 Q 162.21 41.167 159.75 42.127 Q 157.11 43.147 154.05 42.727 Q 152.55 42.487 151.32 41.887 Q 150.09 41.287 149.25 40.147 Q 147.51 38.047 147.51 34.087 Q 147.45 30.247 149.91 27.307 A 6.69 6.69 0 0 1 155.242 24.699 A 8.049 8.049 0 0 1 155.91 24.727 Q 159.39 24.907 161.07 26.527 Q 162.69 28.027 163.23 30.787 A 58.301 58.301 0 0 0 163.978 23.013 A 9.549 9.549 0 0 0 163.83 21.127 Q 163.29 18.907 161.79 17.227 Q 160.35 15.487 158.13 14.947 A 9.198 9.198 0 0 0 156.232 14.745 A 8.651 8.651 0 0 0 153.69 15.127 Q 151.47 15.787 150.09 17.827 Q 148.65 18.727 148.05 18.127 A 1.042 1.042 0 0 1 147.748 17.358 A 2.923 2.923 0 0 1 148.17 16.027 Z M 208.17 16.027 Q 209.85 13.507 212.85 12.487 A 12.691 12.691 0 0 1 216.183 12.046 A 14.105 14.105 0 0 1 218.85 12.307 Q 221.79 12.907 223.89 15.127 Q 224.91 16.267 225.6 17.557 Q 226.29 18.847 226.53 20.347 Q 226.83 21.847 226.77 23.737 Q 226.71 25.627 226.35 27.967 Q 225.93 30.307 225.54 32.107 Q 225.15 33.907 224.85 35.167 Q 225.81 37.627 227.49 38.587 Q 229.11 39.547 230.97 39.487 Q 232.71 39.427 232.65 40.807 Q 232.59 42.307 230.25 42.307 Q 228.03 42.307 226.17 40.927 Q 224.19 39.487 223.59 38.407 Q 222.21 41.167 219.75 42.127 Q 217.11 43.147 214.05 42.727 Q 212.55 42.487 211.32 41.887 Q 210.09 41.287 209.25 40.147 Q 207.51 38.047 207.51 34.087 Q 207.45 30.247 209.91 27.307 A 6.69 6.69 0 0 1 215.242 24.699 A 8.049 8.049 0 0 1 215.91 24.727 Q 219.39 24.907 221.07 26.527 Q 222.69 28.027 223.23 30.787 A 58.301 58.301 0 0 0 223.978 23.013 A 9.549 9.549 0 0 0 223.83 21.127 Q 223.29 18.907 221.79 17.227 Q 220.35 15.487 218.13 14.947 A 9.198 9.198 0 0 0 216.232 14.745 A 8.651 8.651 0 0 0 213.69 15.127 Q 211.47 15.787 210.09 17.827 Q 208.65 18.727 208.05 18.127 A 1.042 1.042 0 0 1 207.748 17.358 A 2.923 2.923 0 0 1 208.17 16.027 Z M 259.05 23.047 Q 257.31 19.687 253.41 18.487 Q 249.57 17.407 245.79 19.327 Q 241.95 21.187 241.05 26.527 Q 240.09 31.747 242.79 36.127 A 8.264 8.264 0 0 0 250.286 40.215 A 12.438 12.438 0 0 0 250.71 40.207 Q 255.75 40.147 258.39 36.967 A 2.35 2.35 0 0 1 259.687 36.484 A 1.356 1.356 0 0 1 260.37 36.667 Q 261.09 37.207 260.13 38.947 Q 256.89 42.727 252.87 43.267 A 15.808 15.808 0 0 1 250.539 43.449 A 10.445 10.445 0 0 1 245.97 42.487 Q 244.53 41.827 243.36 40.897 Q 242.19 39.967 241.23 38.827 Q 239.19 36.607 238.47 32.767 A 14.708 14.708 0 0 1 238.124 29.521 A 21.812 21.812 0 0 1 238.83 24.247 Q 239.91 19.327 244.41 16.807 A 11.713 11.713 0 0 1 250.381 15.151 A 13.102 13.102 0 0 1 253.95 15.667 Q 258.93 17.227 261.33 21.607 Q 261.69 23.587 261.09 24.007 Q 260.37 24.427 259.05 23.047 Z M 0.15 26.167 Q 0.81 21.067 3.69 18.247 Q 6.57 15.367 11.01 15.307 Q 15.39 15.307 18.03 17.587 Q 20.67 20.047 21.45 23.167 Q 22.17 26.407 21.63 30.187 Q 21.09 33.907 17.97 36.847 A 9.73 9.73 0 0 1 11.376 39.302 A 12.324 12.324 0 0 1 10.23 39.247 Q 5.67 38.827 2.79 34.867 Q 2.91 39.487 3.09 43.207 Q 3.27 46.927 3.57 49.807 Q 3.57 51.487 2.49 51.607 Q 1.53 51.667 1.05 50.107 Q 0.87 47.887 0.75 45.877 Q 0.63 43.867 0.57 42.007 Q 0.51 40.147 0.39 38.317 Q 0.27 36.487 0.15 34.687 Q -0.15 31.087 0.15 26.167 Z M 6.75 19.207 Q 3.33 22.027 2.85 26.347 Q 2.43 30.547 4.65 33.547 Q 6.99 36.547 10.47 36.787 A 9.322 9.322 0 0 0 11.413 36.836 A 6.807 6.807 0 0 0 16.35 34.867 Q 18.69 32.587 19.05 28.567 Q 19.53 24.427 17.73 21.427 Q 15.81 18.307 12.21 17.947 A 14.442 14.442 0 0 0 11.25 17.914 A 6.993 6.993 0 0 0 6.75 19.207 Z M 101.25 31.867 Q 100.11 29.527 99.15 28.567 Q 98.31 27.667 95.91 27.367 A 8.46 8.46 0 0 0 95.278 27.343 A 4.144 4.144 0 0 0 92.31 28.327 Q 91.65 28.927 91.26 29.557 Q 90.87 30.187 90.63 30.847 Q 90.39 31.567 90.3 32.437 Q 90.21 33.307 90.15 34.387 A 6.283 6.283 0 0 0 90.148 34.572 A 5.759 5.759 0 0 0 91.35 38.107 Q 92.49 39.787 94.65 40.087 A 8.477 8.477 0 0 0 95.849 40.176 A 6.483 6.483 0 0 0 98.43 39.667 Q 100.11 38.827 101.01 36.967 A 7.185 7.185 0 0 0 101.471 34.258 A 14.365 14.365 0 0 0 101.25 31.867 Z M 161.25 31.867 Q 160.11 29.527 159.15 28.567 Q 158.31 27.667 155.91 27.367 A 8.46 8.46 0 0 0 155.278 27.343 A 4.144 4.144 0 0 0 152.31 28.327 Q 151.65 28.927 151.26 29.557 Q 150.87 30.187 150.63 30.847 Q 150.39 31.567 150.3 32.437 Q 150.21 33.307 150.15 34.387 A 6.283 6.283 0 0 0 150.148 34.572 A 5.759 5.759 0 0 0 151.35 38.107 Q 152.49 39.787 154.65 40.087 A 8.477 8.477 0 0 0 155.849 40.176 A 6.483 6.483 0 0 0 158.43 39.667 Q 160.11 38.827 161.01 36.967 A 7.185 7.185 0 0 0 161.471 34.258 A 14.365 14.365 0 0 0 161.25 31.867 Z M 221.25 31.867 Q 220.11 29.527 219.15 28.567 Q 218.31 27.667 215.91 27.367 A 8.46 8.46 0 0 0 215.278 27.343 A 4.144 4.144 0 0 0 212.31 28.327 Q 211.65 28.927 211.26 29.557 Q 210.87 30.187 210.63 30.847 Q 210.39 31.567 210.3 32.437 Q 210.21 33.307 210.15 34.387 A 6.283 6.283 0 0 0 210.148 34.572 A 5.759 5.759 0 0 0 211.35 38.107 Q 212.49 39.787 214.65 40.087 A 8.477 8.477 0 0 0 215.849 40.176 A 6.483 6.483 0 0 0 218.43 39.667 Q 220.11 38.827 221.01 36.967 A 7.185 7.185 0 0 0 221.471 34.258 A 14.365 14.365 0 0 0 221.25 31.867 Z"),u(E,"vector-effect","non-scaling-stroke"),u(x,"class","word svelte-1mhy8lo"),u(x,"stroke-linecap","round"),u(x,"fill-rule","evenodd"),u(x,"font-size","9pt"),u(x,"stroke","#000"),u(x,"stroke-width","0.25mm"),u(x,"fill","none"),A(x,"stroke","#000"),A(x,"stroke-width","0.25mm"),A(x,"fill","none"),u(j,"width","291.245"),u(j,"height","51.609"),u(j,"viewBox","0 0 291.245 51.609"),u(j,"xmlns","http://www.w3.org/2000/svg"),u(j,"class","svelte-1mhy8lo"),u(b,"class","dItem svelte-1mhy8lo"),u(b,"id","lastName"),u(l,"class","wrapName svelte-1mhy8lo"),u(e,"class","myname svelte-1mhy8lo"),u(D,"class","email svelte-1mhy8lo"),u(k,"class","contact svelte-1mhy8lo")},m(t,n){h(t,e,n),v(e,l),v(l,d),v(d,m),v(m,p),v(p,y),v(l,w),v(l,b),v(b,j),v(j,x),v(x,E),h(t,I,n),h(t,k,n),v(k,L),v(L,M),v(k,D),v(D,Z)},p:g,i:g,o:g,d(t){t&&a(e),t&&a(I),t&&a(k)}}}function St(t){return d((async()=>{[...document.getElementsByClassName("dItem")].forEach((t=>{Ot(t)}))})),[]}class $t extends t{constructor(t){super(),e(this,t,St,Vt,l,{})}}const{document:Tt}=k;function Bt(t,e,l){const n=t.slice();return n[16]=e[l],n}function Nt(t,e,l){const n=t.slice();return n[16]=e[l],n}function Pt(t,e,l){const n=t.slice();return n[16]=e[l],n}function _t(t,e,l){const n=t.slice();return n[16]=e[l],n}function zt(t){let e,l;return{c(){e=n("img"),this.h()},l(t){e=c(t,"IMG",{class:!0,src:!0,style:!0,alt:!0}),this.h()},h(){u(e,"class","dItem prevent svelte-1xorwlf"),e.src!==(l=t[16].icon)&&u(e,"src",l),A(e,"top",t[16].t+"px"),A(e,"left",t[16].l+"px"),u(e,"alt","")},m(t,l){h(t,e,l)},p(t,n){1&n&&e.src!==(l=t[16].icon)&&u(e,"src",l),1&n&&A(e,"top",t[16].t+"px"),1&n&&A(e,"left",t[16].l+"px")},d(t){t&&a(e)}}}function Yt(t){let e,l;return{c(){e=n("img"),this.h()},l(t){e=c(t,"IMG",{class:!0,src:!0,style:!0,alt:!0}),this.h()},h(){u(e,"class","dItem prevent svelte-1xorwlf"),e.src!==(l=t[16].icon)&&u(e,"src",l),A(e,"top",t[16].t+"px"),A(e,"left",t[16].l+"px"),u(e,"alt","")},m(t,l){h(t,e,l)},p(t,n){2&n&&e.src!==(l=t[16].icon)&&u(e,"src",l),2&n&&A(e,"top",t[16].t+"px"),2&n&&A(e,"left",t[16].l+"px")},d(t){t&&a(e)}}}function Ct(t){let e,l;return{c(){e=n("img"),this.h()},l(t){e=c(t,"IMG",{class:!0,src:!0,style:!0,alt:!0}),this.h()},h(){u(e,"class","dItem prevent svelte-1xorwlf"),e.src!==(l=t[16].icon)&&u(e,"src",l),A(e,"top",t[16].t+"px"),A(e,"left",t[16].l+"px"),u(e,"alt","")},m(t,l){h(t,e,l)},p(t,n){4&n&&e.src!==(l=t[16].icon)&&u(e,"src",l),4&n&&A(e,"top",t[16].t+"px"),4&n&&A(e,"left",t[16].l+"px")},d(t){t&&a(e)}}}function Ft(t){let e,l;return{c(){e=n("img"),this.h()},l(t){e=c(t,"IMG",{class:!0,src:!0,style:!0,alt:!0}),this.h()},h(){u(e,"class","dItem prevent svelte-1xorwlf"),e.src!==(l=t[16].icon)&&u(e,"src",l),A(e,"top",t[16].t+"px"),A(e,"left",t[16].l+"px"),u(e,"alt","")},m(t,l){h(t,e,l)},p(t,n){8&n&&e.src!==(l=t[16].icon)&&u(e,"src",l),8&n&&A(e,"top",t[16].t+"px"),8&n&&A(e,"left",t[16].l+"px")},d(t){t&&a(e)}}}function Ht(t){let e,l,o,A,g,d,k,L,M,D,O,V,S,$,T,B,N,P,_,z,Y,C,F,H,U,X,q,G,R=t[0],J=[];for(let e=0;e<R.length;e+=1)J[e]=zt(_t(t,R,e));let W=t[1],K=[];for(let e=0;e<W.length;e+=1)K[e]=Yt(Pt(t,W,e));let tt=t[2],et=[];for(let e=0;e<tt.length;e+=1)et[e]=Ct(Nt(t,tt,e));let lt=t[3],nt=[];for(let e=0;e<lt.length;e+=1)nt[e]=Ft(Bt(t,lt,e));return C=new $t({}),U=new Z({}),{c(){e=r(),l=n("div"),o=n("div"),A=n("div"),g=n("div"),d=s("shuffle"),k=r(),L=n("div"),M=n("div"),D=n("div");for(let t=0;t<J.length;t+=1)J[t].c();O=r(),V=n("div"),S=n("div");for(let t=0;t<K.length;t+=1)K[t].c();$=r(),T=n("div"),B=n("div");for(let t=0;t<et.length;t+=1)et[t].c();N=r(),P=n("div"),_=n("div");for(let t=0;t<nt.length;t+=1)nt[t].c();z=r(),Y=n("div"),m(C.$$.fragment),F=r(),H=n("div"),m(U.$$.fragment),this.h()},l(t){p('[data-svelte="svelte-1en0lub"]',Tt.head).forEach(a),e=Q(t),l=c(t,"DIV",{});var n=i(l);o=c(n,"DIV",{class:!0});var r=i(o);A=c(r,"DIV",{class:!0});var s=i(A);g=c(s,"DIV",{id:!0,class:!0});var u=i(g);d=f(u,"shuffle"),u.forEach(a),k=Q(s),L=c(s,"DIV",{class:!0});var h=i(L);M=c(h,"DIV",{class:!0});var v=i(M);D=c(v,"DIV",{id:!0,class:!0});var m=i(D);for(let t=0;t<J.length;t+=1)J[t].l(m);m.forEach(a),v.forEach(a),O=Q(h),V=c(h,"DIV",{class:!0});var w=i(V);S=c(w,"DIV",{id:!0,class:!0});var b=i(S);for(let t=0;t<K.length;t+=1)K[t].l(b);b.forEach(a),w.forEach(a),$=Q(h),T=c(h,"DIV",{class:!0});var j=i(T);B=c(j,"DIV",{id:!0,class:!0});var x=i(B);for(let t=0;t<et.length;t+=1)et[t].l(x);x.forEach(a),j.forEach(a),N=Q(h),P=c(h,"DIV",{class:!0});var E=i(P);_=c(E,"DIV",{id:!0,class:!0});var I=i(_);for(let t=0;t<nt.length;t+=1)nt[t].l(I);I.forEach(a),E.forEach(a),h.forEach(a),s.forEach(a),z=Q(r),Y=c(r,"DIV",{class:!0});var Z=i(Y);y(C.$$.fragment,Z),Z.forEach(a),F=Q(r),H=c(r,"DIV",{id:!0,class:!0});var X=i(H);y(U.$$.fragment,X),X.forEach(a),r.forEach(a),n.forEach(a),this.h()},h(){Tt.title="Angkarn P.",u(g,"id","homeShuffle"),u(g,"class","show svelte-1xorwlf"),u(D,"id","itemsT"),u(D,"class","svelte-1xorwlf"),u(M,"class","svelte-1xorwlf"),u(S,"id","itemsU"),u(S,"class","svelte-1xorwlf"),u(V,"class","svelte-1xorwlf"),u(B,"id","itemsE"),u(B,"class","svelte-1xorwlf"),u(T,"class","svelte-1xorwlf"),u(_,"id","itemsS"),u(_,"class","svelte-1xorwlf"),u(P,"class","svelte-1xorwlf"),u(L,"class","wrapDrag svelte-1xorwlf"),u(A,"class","home svelte-1xorwlf"),u(Y,"class","main svelte-1xorwlf"),u(H,"id","puzzleSection"),u(H,"class","svelte-1xorwlf"),u(o,"class","pages svelte-1xorwlf")},m(n,r){h(n,e,r),h(n,l,r),v(l,o),v(o,A),v(A,g),v(g,d),v(A,k),v(A,L),v(L,M),v(M,D);for(let t=0;t<J.length;t+=1)J[t].m(D,null);v(L,O),v(L,V),v(V,S);for(let t=0;t<K.length;t+=1)K[t].m(S,null);v(L,$),v(L,T),v(T,B);for(let t=0;t<et.length;t+=1)et[t].m(B,null);v(L,N),v(L,P),v(P,_);for(let t=0;t<nt.length;t+=1)nt[t].m(_,null);t[8](A),v(o,z),v(o,Y),w(C,Y,null),v(o,F),v(o,H),w(U,H,null),t[9](o),X=!0,q||(G=b(g,"click",t[7]),q=!0)},p(t,[e]){if(1&e){let l;for(R=t[0],l=0;l<R.length;l+=1){const n=_t(t,R,l);J[l]?J[l].p(n,e):(J[l]=zt(n),J[l].c(),J[l].m(D,null))}for(;l<J.length;l+=1)J[l].d(1);J.length=R.length}if(2&e){let l;for(W=t[1],l=0;l<W.length;l+=1){const n=Pt(t,W,l);K[l]?K[l].p(n,e):(K[l]=Yt(n),K[l].c(),K[l].m(S,null))}for(;l<K.length;l+=1)K[l].d(1);K.length=W.length}if(4&e){let l;for(tt=t[2],l=0;l<tt.length;l+=1){const n=Nt(t,tt,l);et[l]?et[l].p(n,e):(et[l]=Ct(n),et[l].c(),et[l].m(B,null))}for(;l<et.length;l+=1)et[l].d(1);et.length=tt.length}if(8&e){let l;for(lt=t[3],l=0;l<lt.length;l+=1){const n=Bt(t,lt,l);nt[l]?nt[l].p(n,e):(nt[l]=Ft(n),nt[l].c(),nt[l].m(_,null))}for(;l<nt.length;l+=1)nt[l].d(1);nt.length=lt.length}},i(t){X||(j(C.$$.fragment,t),j(U.$$.fragment,t),X=!0)},o(t){x(C.$$.fragment,t),x(U.$$.fragment,t),X=!1},d(n){n&&a(e),n&&a(l),E(J,n),E(K,n),E(et,n),E(nt,n),t[8](null),I(C),I(U),t[9](null),q=!1,G()}}}function Ut(t,e,l){let n,o,r,s=["1-cloud-outline.gif","20-love-heart-outline.gif","448-paws-animal-morph-outline.gif","478-computer-display-outline.gif","488-bicycle-outline.gif","500-fingerprint-security-outline.gif","571-black-tea-outline.gif","585-herbs-outline.gif","1031-music-album-outline.gif","1103-confetti-outline.gif","1108-ferris-wheel-outline.gif","1130-duck-outline.gif","1144-woodpecker-outline.gif","1146-turkey-outline.gif","1148-bee-outline.gif","1153-horse-outline.gif","1154-spider-outline.gif","1160-cat-head-outline.gif","1167-coral-outline.gif","1173-shark-outline.gif","1186-honeycombs-outline.gif","1203-bear-outline.gif","1208-squirrel-outline.gif","1213-snake-outline.gif","1258-medical-mask-outline.gif","1326-command-window-line-outline.gif","1448-three-leaf-clover-outline.gif","1534-paper-boat-outline.gif","1300-enter-key-outline.gif","261-emoji-smile-outline.gif","262-emoji-wow-outline.gif","563-sausage-outline.gif","543-apple-outline.gif","615-coffee-machine-outline.gif","1141-email-outline.gif","1335-qr-code-outline.gif","18-location-pin-outline.gif","726-wireless-connection-outline.gif","63-home-outline.gif","475-rescue-safety-ring-help-outline.gif","45-clock-time-outline.gif","12-layes-outline.gif","13-pizza-outline.gif","438-lab-bottle-round-outline.gif","1422-polygon-outline.gif","1531-rocking-horse-outline.gif"],c=[{t:0,l:0},{t:0,l:30},{t:0,l:60},{t:0,l:90},{t:0,l:120},{t:30,l:60},{t:60,l:60},{t:90,l:60},{t:120,l:60}],i=[{t:0,l:0},{t:30,l:0},{t:60,l:0},{t:90,l:0},{t:120,l:15},{t:120,l:45},{t:120,l:75},{t:90,l:90},{t:60,l:90},{t:30,l:90},{t:0,l:90}],a=[{t:0,l:0},{t:0,l:30},{t:0,l:60},{t:0,l:90},{t:60,l:30},{t:60,l:60},{t:60,l:90},{t:30,l:0},{t:60,l:0},{t:90,l:0},{t:120,l:0},{t:120,l:30},{t:120,l:60},{t:120,l:90}],Q=[{t:0,l:30},{t:0,l:60},{t:15,l:90},{t:60,l:30},{t:60,l:60},{t:75,l:90},{t:15,l:0},{t:45,l:0},{t:105,l:0},{t:120,l:30},{t:120,l:60},{t:105,l:90}];function f(){s=Zt(s),l(0,c=c.map(((t,e)=>({...t,icon:"/dragHome/"+s[e]})))),l(1,i=i.map(((t,e)=>({...t,icon:"/dragHome/"+s[c.length+e]})))),l(2,a=a.map(((t,e)=>({...t,icon:"/dragHome/"+s[c.length+i.length+e]})))),l(3,Q=Q.map(((t,e)=>({...t,icon:"/dragHome/"+s[c.length-1+i.length+a.length+e]}))))}f();let u=0;function A(){l(5,o.style.overflowY="scroll",o),o.scrollTo(0,u*window.innerHeight),l(5,o.style.overflowY="hidden",o)}d((async()=>{window.addEventListener("resize",(()=>{A()})),r=o.getElementsByTagName("div").length-1;const t=await Promise.all([import("./hammer.31b90988.js"),]).then((function(t){return t[0]})).then((function(t){return t.h}));var e=new t.Manager(o);e.add(new t.Swipe({direction:t.DIRECTION_VERTICAL,threshold:100})),e.on("swipeup swipedown",(t=>{if(!function(t){return t.classList.contains("prevent")}(t.target))switch(console.log(t),t.type){case"swipeup":u+=u===r?0:1,A();break;case"swipedown":u-=0===u?0:1,A()}}));const l=document.getElementById("homeShuffle");var s,c,i;s=n,c=()=>{l.classList.add("show")},i=()=>{l.classList.remove("show")},new IntersectionObserver((t=>{t[0].isIntersecting?c():i()}),{threshold:[1]}).observe(s),[...document.getElementsByClassName("dItem")].forEach((t=>{Ot(t)}))}));return[c,i,a,Q,n,o,f,()=>f(),function(t){L[t?"unshift":"push"]((()=>{n=t,l(4,n)}))},function(t){L[t?"unshift":"push"]((()=>{o=t,l(5,o)}))}]}export default class extends t{constructor(t){super(),e(this,t,Ut,Ht,l,{})}}
