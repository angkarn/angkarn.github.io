import{S as r,i as a,s,e as t,t as e,c,a as n,g as o,d as u,f,F as l,h as p,k as m,l as d,n as i,G as h}from"./chunks/vendor-c5ad99ae.js";function E(r){let a,s,m=r[1].frame+"";return{c(){a=t("pre"),s=e(m)},l(r){a=c(r,"PRE",{});var t=n(a);s=o(t,m),t.forEach(u)},m(r,t){f(r,a,t),l(a,s)},p(r,a){2&a&&m!==(m=r[1].frame+"")&&p(s,m)},d(r){r&&u(a)}}}function k(r){let a,s,m=r[1].stack+"";return{c(){a=t("pre"),s=e(m)},l(r){a=c(r,"PRE",{});var t=n(a);s=o(t,m),t.forEach(u)},m(r,t){f(r,a,t),l(a,s)},p(r,a){2&a&&m!==(m=r[1].stack+"")&&p(s,m)},d(r){r&&u(a)}}}function v(r){let a,s,v,g,x,P,R,N,$=r[1].message+"",j=r[1].frame&&E(r),F=r[1].stack&&k(r);return{c(){a=t("h1"),s=e(r[0]),v=m(),g=t("pre"),x=e($),P=m(),j&&j.c(),R=m(),F&&F.c(),N=d()},l(t){a=c(t,"H1",{});var e=n(a);s=o(e,r[0]),e.forEach(u),v=i(t),g=c(t,"PRE",{});var f=n(g);x=o(f,$),f.forEach(u),P=i(t),j&&j.l(t),R=i(t),F&&F.l(t),N=d()},m(r,t){f(r,a,t),l(a,s),f(r,v,t),f(r,g,t),l(g,x),f(r,P,t),j&&j.m(r,t),f(r,R,t),F&&F.m(r,t),f(r,N,t)},p(r,[a]){1&a&&p(s,r[0]),2&a&&$!==($=r[1].message+"")&&p(x,$),r[1].frame?j?j.p(r,a):(j=E(r),j.c(),j.m(R.parentNode,R)):j&&(j.d(1),j=null),r[1].stack?F?F.p(r,a):(F=k(r),F.c(),F.m(N.parentNode,N)):F&&(F.d(1),F=null)},i:h,o:h,d(r){r&&u(a),r&&u(v),r&&u(g),r&&u(P),j&&j.d(r),r&&u(R),F&&F.d(r),r&&u(N)}}}function g({error:r,status:a}){return{props:{error:r,status:a}}}function x(r,a,s){let{status:t}=a,{error:e}=a;return r.$$set=r=>{"status"in r&&s(0,t=r.status),"error"in r&&s(1,e=r.error)},[t,e]}export default class extends r{constructor(r){super(),a(this,r,x,v,s,{status:0,error:1})}}export{g as load};
