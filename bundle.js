var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,a;function i(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function u(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function l(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function d(t,e,n){return t.set(n),e}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return""===t?null:+t}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function P(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function k(t){a=t}const R=[],C=[],T=[],B=[],E=Promise.resolve();let _=!1;function U(t){T.push(t)}let S=!1;const H=new Set;function M(){if(!S){S=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];k(e),L(e.$$)}for(k(null),R.length=0;C.length;)C.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];H.has(e)||(H.add(e),e())}T.length=0}while(R.length);for(;B.length;)B.pop()();_=!1,S=!1,H.clear()}}function L(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const j=new Set;let A;function D(t,e){t&&t.i&&(j.delete(t),t.i(e))}function G(t,e,n,s){if(t&&t.o){if(j.has(t))return;j.add(t),A.c.push((()=>{j.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function N(t){t&&t.c()}function O(t,n,o,c){const{fragment:a,on_mount:i,on_destroy:u,after_update:l}=t.$$;a&&a.m(n,o),c||U((()=>{const n=i.map(e).filter(r);u?u.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(U)}function V(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(R.push(t),_||(_=!0,E.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,o,c,i,u,l,d=[-1]){const h=a;k(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:r.context||[]),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||h.$$.root};l&&l(p.root);let $=!1;if(p.ctx=o?o(e,r.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&z(e,t)),n})):[],p.update(),$=!0,s(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&D(e.$$.fragment),O(e,r.target,r.anchor,r.customElement),M()}k(h)}class J{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=[];function F(e,n=t){let s;const r=new Set;function c(t){if(o(e,t)&&(e=t,s)){const t=!q.length;for(const t of r)t[1](),q.push(t,e);if(t){for(let t=0;t<q.length;t+=2)q[t][0](q[t+1]);q.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(o,a=t){const i=[o,a];return r.add(i),1===r.size&&(s=n(c)||t),o(e),()=>{r.delete(i),0===r.size&&(s(),s=null)}}}}const W=F({periodLength:1e4,secondsInMonth:2592e3,kWtCostUsd:.05,btcPriceUsd:35e3,rewardPerBlockBtc:6.25,computationsPerBlockPh:6e7,costPerThUsd:50,reinvestShare:.5,hashRatePerUnitThs:100}),K=F({debug:!1,hashRate:{purchased:100,vested:0},startTime:new Date,lastVest:new Date,timeElapsed:0,periods:0,output:{total:{thProduced:0,blocksGuessed:0,btcRewarded:0,usdEarned:0},lastMonth:{thProduced:0,blocksGuessed:0,btcRewarded:0,usdEarned:0}}}),Q=(t,e)=>{t.timeElapsed=Date.now()-t.startTime.getTime();return Date.now()-t.lastVest.getTime()>=e.periodLength&&((t,e)=>{t.lastVest=new Date,t.periods=Math.round(t.timeElapsed/e.periodLength);const n=((t,e)=>(t.hashRate.purchased+t.hashRate.vested)*e.secondsInMonth)(t,e),s=n/(1e3*e.computationsPerBlockPh),r=s*e.rewardPerBlockBtc,o=Math.round(r*e.btcPriceUsd),c=o*e.reinvestShare,a=o-c;t.hashRate.vested+=c/e.costPerThUsd,t.output.lastMonth={thProduced:n,blocksGuessed:s,btcRewarded:r,usdEarned:o},t.output.total={thProduced:t.output.total.thProduced+n,blocksGuessed:t.output.total.blocksGuessed+s,btcRewarded:t.output.total.btcRewarded+r,usdEarned:t.output.total.usdEarned+a}})(t,e),t};function X(e){let n,s,r,o,c=JSON.stringify(e[0],"",2)+"";return{c(){n=$("h2"),n.textContent="Stats",s=g(),r=$("pre"),o=m(c)},m(t,e){p(t,n,e),p(t,s,e),p(t,r,e),h(r,o)},p(t,[e]){1&e&&c!==(c=JSON.stringify(t[0],"",2)+"")&&w(o,c)},i:t,o:t,d(t){t&&f(n),t&&f(s),t&&f(r)}}}function Y(t,e,n){let s;return u(t,K,(t=>n(0,s=t))),[s]}class Z extends J{constructor(t){super(),I(this,t,Y,X,o,{})}}function tt(e){let n,s,r;return{c(){n=$("button"),n.textContent=`+${et} TH`,b(n,"class","svelte-17wfrn5")},m(t,o){p(t,n,o),s||(r=v(n,"click",e[0]),s=!0)},p:t,i:t,o:t,d(t){t&&f(n),s=!1,r()}}}const et=100;function nt(t,e,n){let s;u(t,K,(t=>n(1,s=t)));return[()=>{d(K,s.hashRate.purchased+=et,s)}]}class st extends J{constructor(t){super(),I(this,t,nt,tt,o,{})}}function rt(e){let n,s,r;return{c(){n=$("button"),n.textContent=`-${ot} TH`,b(n,"class","svelte-nxkfy")},m(t,o){p(t,n,o),s||(r=v(n,"click",e[1]),s=!0)},p:t,i:t,o:t,d(t){t&&f(n),s=!1,r()}}}const ot=100;function ct(t,e,n){let s;u(t,K,(t=>n(2,s=t)));const r=t=>{(t=>s.hashRate.purchased>=t)(t)&&d(K,s.hashRate.purchased=s.hashRate.purchased-t,s)};return[r,()=>r(ot)]}class at extends J{constructor(t){super(),I(this,t,ct,rt,o,{})}}function it(e){let n,s,r,o;return n=new at({}),r=new st({}),{c(){N(n.$$.fragment),s=g(),N(r.$$.fragment)},m(t,e){O(n,t,e),p(t,s,e),O(r,t,e),o=!0},p:t,i(t){o||(D(n.$$.fragment,t),D(r.$$.fragment,t),o=!0)},o(t){G(n.$$.fragment,t),G(r.$$.fragment,t),o=!1},d(t){V(n,t),t&&f(s),V(r,t)}}}class ut extends J{constructor(t){super(),I(this,t,null,it,o,{})}}function lt(e){let n,s,r,o,c,a,u,l,d,v,x,y,P,k,R,C,T,B,E,_,U,S,H;return{c(){n=$("div"),s=$("h2"),s.textContent=`${e[4]}`,r=g(),o=$("div"),c=$("div"),a=$("div"),a.textContent="Hash Rate:",u=g(),l=m(e[2]),d=m(" TH/s"),v=g(),x=$("div"),y=$("div"),y.textContent="Value:",P=m("\n      $"),k=m(e[3]),R=g(),C=$("div"),T=$("img"),E=g(),_=$("span"),U=m("x "),S=m(e[1]),b(a,"class","label"),b(y,"class","label"),b(o,"class","totals svelte-1ih30ok"),i(T.src,B="img/asic-"+e[0]+".png")||b(T,"src",B),b(T,"alt",e[4]),b(T,"class","svelte-1ih30ok"),b(_,"class","center"),b(n,"class",H="farm "+e[0]+" svelte-1ih30ok")},m(t,e){p(t,n,e),h(n,s),h(n,r),h(n,o),h(o,c),h(c,a),h(c,u),h(c,l),h(c,d),h(o,v),h(o,x),h(x,y),h(x,P),h(x,k),h(n,R),h(n,C),h(C,T),h(C,E),h(C,_),h(_,U),h(_,S)},p(t,[e]){4&e&&w(l,t[2]),8&e&&w(k,t[3]),1&e&&!i(T.src,B="img/asic-"+t[0]+".png")&&b(T,"src",B),2&e&&w(S,t[1]),1&e&&H!==(H="farm "+t[0]+" svelte-1ih30ok")&&b(n,"class",H)},i:t,o:t,d(t){t&&f(n)}}}function dt(t,e,n){let s,r;u(t,W,(t=>n(5,r=t)));let{machineType:o}=e,{units:c}=e,{totalHashRate:a}=e;const i=`${o.charAt(0).toUpperCase()}${o.slice(1)}`;return t.$$set=t=>{"machineType"in t&&n(0,o=t.machineType),"units"in t&&n(1,c=t.units),"totalHashRate"in t&&n(2,a=t.totalHashRate)},t.$$.update=()=>{36&t.$$.dirty&&n(3,s=a*r.costPerThUsd)},[o,c,a,s,i,r]}class ht extends J{constructor(t){super(),I(this,t,dt,lt,o,{machineType:0,units:1,totalHashRate:2})}}function pt(t){let e,n,s,r,o,c,a;return r=new ht({props:{machineType:"purchased",units:t[1].purchased.units,totalHashRate:t[0].hashRate.purchased}}),c=new ht({props:{machineType:"vested",units:t[1].vested.units,totalHashRate:t[0].hashRate.vested}}),{c(){e=$("h1"),e.textContent="Farm",n=g(),s=$("div"),N(r.$$.fragment),o=g(),N(c.$$.fragment),b(s,"class","oneline")},m(t,i){p(t,e,i),p(t,n,i),p(t,s,i),O(r,s,null),h(s,o),O(c,s,null),a=!0},p(t,[e]){const n={};2&e&&(n.units=t[1].purchased.units),1&e&&(n.totalHashRate=t[0].hashRate.purchased),r.$set(n);const s={};2&e&&(s.units=t[1].vested.units),1&e&&(s.totalHashRate=t[0].hashRate.vested),c.$set(s)},i(t){a||(D(r.$$.fragment,t),D(c.$$.fragment,t),a=!0)},o(t){G(r.$$.fragment,t),G(c.$$.fragment,t),a=!1},d(t){t&&f(e),t&&f(n),t&&f(s),V(r),V(c)}}}function ft(t,e,n){let s,r,o;u(t,K,(t=>n(0,r=t))),u(t,W,(t=>n(2,o=t)));const c=t=>({units:Math.floor(t/o.hashRatePerUnitThs),remainder:Math.floor(t%o.hashRatePerUnitThs)});return t.$$.update=()=>{1&t.$$.dirty&&n(1,s={purchased:c(r.hashRate.purchased),vested:c(r.hashRate.vested)})},[r,s]}class $t extends J{constructor(t){super(),I(this,t,ft,pt,o,{})}}function mt(e){let n,s,r,o,c,a,i=e[0].periods+1+"";return{c(){n=$("div"),s=$("div"),r=m("Month "),o=m(i),c=g(),a=$("div"),b(s,"class","progress svelte-cl5ka2"),b(a,"class","inner svelte-cl5ka2"),P(a,"width",e[1]+"%"),b(n,"class","outer svelte-cl5ka2")},m(t,e){p(t,n,e),h(n,s),h(s,r),h(s,o),h(n,c),h(n,a)},p(t,[e]){1&e&&i!==(i=t[0].periods+1+"")&&w(o,i),2&e&&P(a,"width",t[1]+"%")},i:t,o:t,d(t){t&&f(n)}}}function gt(t,e,n){let s,r,o;return u(t,W,(t=>n(2,r=t))),u(t,K,(t=>n(0,o=t))),t.$$.update=()=>{5&t.$$.dirty&&n(1,s=Math.round(o.timeElapsed%r.periodLength/r.periodLength*100))},[o,s,r]}class vt extends J{constructor(t){super(),I(this,t,gt,mt,o,{})}}function bt(t){let e,n,s;const r=t[3].default,o=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(r,t,t[2],null);return{c(){e=$("div"),n=$("div"),o&&o.c(),b(n,"class","content svelte-1jdh3s1"),P(n,"width",t[1]+"px"),P(n,"height",t[0]+"px"),b(e,"class","smartphone svelte-1jdh3s1"),P(e,"width",t[1]+"px"),P(e,"height",t[0]+"px"),P(e,"border-width",t[1]/6+"px 2px"),P(e,"border-radius",t[1]/10+"px")},m(t,r){p(t,e,r),h(e,n),o&&o.m(n,null),s=!0},p(t,[c]){o&&o.p&&(!s||4&c)&&function(t,e,n,s,r,o){if(r){const c=l(e,n,s,o);t.p(c,r)}}(o,r,t,t[2],s?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(r,t[2],c,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null),(!s||2&c)&&P(n,"width",t[1]+"px"),(!s||1&c)&&P(n,"height",t[0]+"px"),(!s||2&c)&&P(e,"width",t[1]+"px"),(!s||1&c)&&P(e,"height",t[0]+"px"),(!s||2&c)&&P(e,"border-width",t[1]/6+"px 2px"),(!s||2&c)&&P(e,"border-radius",t[1]/10+"px")},i(t){s||(D(o,t),s=!0)},o(t){G(o,t),s=!1},d(t){t&&f(e),o&&o.d(t)}}}function xt(t,e,n){let{$$slots:s={},$$scope:r}=e,{width:o}=e,{height:c=0}=e;return c||(c=1.77*o),t.$$set=t=>{"width"in t&&n(1,o=t.width),"height"in t&&n(0,c=t.height),"$$scope"in t&&n(2,r=t.$$scope)},[c,o,r,s]}class wt extends J{constructor(t){super(),I(this,t,xt,bt,o,{width:1,height:0})}}function yt(e){let n,s,r,o,c,a,i,u,l,d,v,x,y,P,k=e[0].hashRate.purchased*e[1].costPerThUsd+"",R=e[0].output.total.usdEarned+"";return{c(){n=$("div"),s=$("div"),r=$("div"),r.textContent="Spent:",o=g(),c=$("div"),a=m("-$"),i=m(k),u=g(),l=$("div"),d=$("div"),d.textContent="Earned:",v=g(),x=$("div"),y=m("$"),P=m(R),b(r,"class","label"),b(c,"class","negative svelte-mc6scd"),b(s,"class","oneline"),b(d,"class","label"),b(x,"class","positive svelte-mc6scd"),b(l,"class","oneline")},m(t,e){p(t,n,e),h(n,s),h(s,r),h(s,o),h(s,c),h(c,a),h(c,i),h(n,u),h(n,l),h(l,d),h(l,v),h(l,x),h(x,y),h(x,P)},p(t,[e]){3&e&&k!==(k=t[0].hashRate.purchased*t[1].costPerThUsd+"")&&w(i,k),1&e&&R!==(R=t[0].output.total.usdEarned+"")&&w(P,R)},i:t,o:t,d(t){t&&f(n)}}}function Pt(t,e,n){let s,r;return u(t,K,(t=>n(0,s=t))),u(t,W,(t=>n(1,r=t))),[s,r]}class kt extends J{constructor(t){super(),I(this,t,Pt,yt,o,{})}}function Rt(e){let n,r,o,c,a,i,u,l,d,P,k,R,C,T,B,E,_,U,S,H,M,L,j,A,D,G,N,O,V,z,I,J,q,F,W,K=e[0].periodLength/1e3+"";return{c(){n=$("h2"),n.textContent="Config",r=g(),o=$("div"),c=$("span"),c.textContent="BTC price (US$):",a=g(),i=$("input"),u=g(),l=$("span"),l.textContent="this number will change randomly over time",d=g(),P=$("div"),k=$("span"),k.textContent="Computations per block (PetaHash):",R=g(),C=$("input"),T=g(),B=$("span"),B.textContent="this number with increase over time",E=g(),_=$("div"),U=$("span"),U.textContent="Reward per block (BTC):",S=g(),H=$("input"),M=g(),L=$("span"),L.textContent="this number will decrease over time",j=g(),A=$("div"),D=$("span"),D.textContent="Reinvest into the infrastructure:",G=g(),N=$("input"),O=g(),V=$("div"),z=$("span"),z.textContent="Month duration:",I=g(),J=m(K),q=m(" s"),b(c,"class","label"),b(i,"type","number"),b(l,"class","note svelte-2xepi8"),b(k,"class","label"),b(C,"type","number"),b(B,"class","note svelte-2xepi8"),b(U,"class","label"),b(H,"type","number"),b(L,"class","note svelte-2xepi8"),b(D,"class","label"),b(N,"type","number"),b(z,"class","label")},m(t,s){p(t,n,s),p(t,r,s),p(t,o,s),h(o,c),h(o,a),h(o,i),y(i,e[0].btcPriceUsd),h(o,u),h(o,l),p(t,d,s),p(t,P,s),h(P,k),h(P,R),h(P,C),y(C,e[0].computationsPerBlockPh),h(P,T),h(P,B),p(t,E,s),p(t,_,s),h(_,U),h(_,S),h(_,H),y(H,e[0].rewardPerBlockBtc),h(_,M),h(_,L),p(t,j,s),p(t,A,s),h(A,D),h(A,G),h(A,N),y(N,e[0].reinvestShare),p(t,O,s),p(t,V,s),h(V,z),h(V,I),h(V,J),h(V,q),F||(W=[v(i,"input",e[1]),v(C,"input",e[2]),v(H,"input",e[3]),v(N,"input",e[4])],F=!0)},p(t,[e]){1&e&&x(i.value)!==t[0].btcPriceUsd&&y(i,t[0].btcPriceUsd),1&e&&x(C.value)!==t[0].computationsPerBlockPh&&y(C,t[0].computationsPerBlockPh),1&e&&x(H.value)!==t[0].rewardPerBlockBtc&&y(H,t[0].rewardPerBlockBtc),1&e&&x(N.value)!==t[0].reinvestShare&&y(N,t[0].reinvestShare),1&e&&K!==(K=t[0].periodLength/1e3+"")&&w(J,K)},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(o),t&&f(d),t&&f(P),t&&f(E),t&&f(_),t&&f(j),t&&f(A),t&&f(O),t&&f(V),F=!1,s(W)}}}function Ct(t,e,n){let s;return u(t,W,(t=>n(0,s=t))),[s,function(){s.btcPriceUsd=x(this.value),W.set(s)},function(){s.computationsPerBlockPh=x(this.value),W.set(s)},function(){s.rewardPerBlockBtc=x(this.value),W.set(s)},function(){s.reinvestShare=x(this.value),W.set(s)}]}class Tt extends J{constructor(t){super(),I(this,t,Ct,Rt,o,{})}}function Bt(t){let e,n;return e=new ut({}),{c(){N(e.$$.fragment)},m(t,s){O(e,t,s),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Et(t){let e,n;return e=new Z({}),{c(){N(e.$$.fragment)},m(t,s){O(e,t,s),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function _t(t){let e,n,r,o,c,a,i,u,l,d,m,v,x;r=new wt({props:{width:100,$$slots:{default:[Bt]},$$scope:{ctx:t}}}),c=new kt({}),i=new vt({}),l=new $t({}),m=new Tt({});let w=t[0].debug&&Et();return{c(){e=$("main"),n=$("div"),N(r.$$.fragment),o=g(),N(c.$$.fragment),a=g(),N(i.$$.fragment),u=g(),N(l.$$.fragment),d=g(),N(m.$$.fragment),v=g(),w&&w.c(),b(n,"class","oneline"),b(e,"class","svelte-4oc3kw")},m(t,s){p(t,e,s),h(e,n),O(r,n,null),h(n,o),O(c,n,null),h(e,a),O(i,e,null),h(e,u),O(l,e,null),h(e,d),O(m,e,null),h(e,v),w&&w.m(e,null),x=!0},p(t,[n]){const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),r.$set(o),t[0].debug?w?1&n&&D(w,1):(w=Et(),w.c(),D(w,1),w.m(e,null)):w&&(A={r:0,c:[],p:A},G(w,1,1,(()=>{w=null})),A.r||s(A.c),A=A.p)},i(t){x||(D(r.$$.fragment,t),D(c.$$.fragment,t),D(i.$$.fragment,t),D(l.$$.fragment,t),D(m.$$.fragment,t),D(w),x=!0)},o(t){G(r.$$.fragment,t),G(c.$$.fragment,t),G(i.$$.fragment,t),G(l.$$.fragment,t),G(m.$$.fragment,t),G(w),x=!1},d(t){t&&f(e),V(r),V(c),V(i),V(l),V(m),w&&w.d()}}}function Ut(t,e,n){let s,r;u(t,W,(t=>n(1,s=t))),u(t,K,(t=>n(0,r=t)));const o=()=>{d(K,r=Q(r,s),r),setTimeout(o,1e3)};return o(),[r]}return new class extends J{constructor(t){super(),I(this,t,Ut,_t,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
