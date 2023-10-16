import{a,W as h,u as M,a2 as R,af as b,ag as p,H as k,y as _,A as I,ch as L,bI as y,aa as W,F as o,X as x,o as z,r as g,at as S,aP as A,jl as N}from"../index-4ca636bc.js";var U=function(i){var t=i.state,s=t===void 0?"inactive":t,r=i.size,e=r===void 0?"sm":r;return a("div",{className:h("rounded-full outline-double",{"w-1.5 h-1.5 shadow-sm":e==="sm","bg-green-500 outline-green-400":s==="active","bg-yellow-500 outline-yellow-400":s==="pending","bg-red-500 outline-red-400":s==="error","bg-neutral-500 outline-neutral-400":s==="inactive"})})},f=z({heading:{id:"column.developers.service_worker",defaultMessage:"Service Worker"},status:{id:"sw.status",defaultMessage:"Status"},url:{id:"sw.url",defaultMessage:"Script URL"}}),$=function(){var i=g.useState(!0),t=S(i,2),s=t[0],r=t[1],e=g.useState(),n=S(e,2),d=n[0],c=n[1],v="serviceWorker"in navigator;return g.useEffect(function(){v?navigator.serviceWorker.getRegistration().then(function(u){c(u),r(!1)}).catch(function(){return r(!1)}):r(!1)},[]),{isLoading:s,registration:d}},H=function(){var i,t=M(),s=$(),r=s.isLoading,e=s.registration,n=e==null||(i=e.active)===null||i===void 0?void 0:i.scriptURL,d=function(){return e!=null&&e.waiting?"pending":e!=null&&e.active?"active":"inactive"},c=function(){return r?a(o,{id:"sw.state.loading",defaultMessage:"Loading…"}):!r&&!e?a(o,{id:"sw.state.unavailable",defaultMessage:"Unavailable"}):e!=null&&e.waiting?a(o,{id:"sw.state.waiting",defaultMessage:"Waiting"}):e!=null&&e.active?a(o,{id:"sw.state.active",defaultMessage:"Active"}):a(o,{id:"sw.state.unknown",defaultMessage:"Unknown"})},v=function(){var u=A(regeneratorRuntime.mark(function w(){return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,N();case 2:window.location.reload();case 3:case"end":return l.stop()}},w)}));return function(){return u.apply(this,arguments)}}();return a(x,{label:t.formatMessage(f.heading),backHref:"/developers"},void 0,a(R,{space:4},void 0,a(b,{},void 0,a(p,{label:t.formatMessage(f.status)},void 0,a(k,{alignItems:"center",space:2},void 0,a(U,{state:d()}),a(_,{size:"md",theme:"muted"},void 0,c()))),n&&a(p,{label:t.formatMessage(f.url)},void 0,a("a",{href:n,target:"_blank",className:"flex items-center space-x-1 truncate"},void 0,a("span",{className:"truncate"},void 0,n),a(I,{className:"h-4 w-4",src:L})))),a(y,{},void 0,a(W,{theme:"tertiary",type:"button",onClick:v},void 0,a(o,{id:"sw.restart",defaultMessage:"Restart"})))))};export{H as default};
