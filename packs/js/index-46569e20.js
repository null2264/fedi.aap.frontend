import{a as e,a3 as E,y as C,eW as c,eX as p,r as f,ax as w,a2 as _,A as h,ki as N,kj as M,aP as I,q as l,kk as L,L as j,u as S,d as P,kl as z,km as R,H as T,cz as b,F as v,ae as A,X as H,b2 as k,eM as q,o as F,aH as B}from"../index-ba3d4b94.js";import{R as J}from"./index-6c20e33c.js";import"./warning-07d0fac9.js";var O=function(){var s=p(5,25),t=p(5,15);return e("div",{className:"relative w-full animate-pulse overflow-hidden rounded-lg bg-gray-100 text-primary-50 dark:bg-primary-800 dark:text-primary-800"},void 0,e("div",{className:"h-40 bg-primary-200 dark:bg-gray-600"}),e(E,{className:"p-2.5",space:2},void 0,e(C,{weight:"semibold"},void 0,c(s)),e("div",{className:"flex flex-wrap gap-x-2 gap-y-1 text-gray-700 dark:text-gray-600"},void 0,e("span",{},void 0,c(t)),e("span",{},void 0,c(t)),e("span",{},void 0,c(t)))))},V=function(s){var t=s.id,r=f.useCallback(I(),[]),n=l(function(o){return r(o,{id:t})});return n?e(j,{className:"w-full px-1",to:"/@".concat(n.getIn(["account","acct"]),"/events/").concat(n.id)},void 0,e(L,{status:n,floatingAction:!1})):null},y=function(s){var t=s.statusIds,r=s.isLoading,n=s.emptyMessage,o=f.useState(0),u=w(o,2),i=u[0],a=u[1],g=function(x){a(x%t.size)};return t.size===0?r?e(O,{}):e(_,{variant:"rounded",size:"lg"},void 0,n):e("div",{className:"relative -mx-1"},void 0,i!==0&&e("div",{className:"absolute left-3 top-1/2 z-10 -mt-4"},void 0,e("button",{onClick:function(){return g(i-1)},className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/50 backdrop-blur dark:bg-gray-900/50"},void 0,e(h,{src:M,className:"h-6 w-6 text-black dark:text-white"}))),e(J,{animateHeight:!0,index:i,onChangeIndex:g},void 0,t.map(function(d){return e(V,{id:d},d)})),i!==t.size-1&&e("div",{className:"absolute right-3 top-1/2 z-10 -mt-4"},void 0,e("button",{onClick:function(){return g(i+1)},className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/50 backdrop-blur dark:bg-gray-900/50"},void 0,e(h,{src:N,className:"h-6 w-6 text-black dark:text-white"}))))},X=F({title:{id:"column.events",defaultMessage:"Events"}}),Y=function(){var s=S(),t=P(),r=l(function(a){return a.status_lists.get("recent_events").items}),n=l(function(a){return a.status_lists.get("recent_events").isLoading}),o=l(function(a){return a.status_lists.get("joined_events").items}),u=l(function(a){return a.status_lists.get("joined_events").isLoading}),i=function(){t(B("COMPOSE_EVENT"))};return f.useEffect(function(){t(z()),t(R())},[]),e(H,{label:s.formatMessage(X.title)},void 0,e(T,{className:"mb-2",space:2,justifyContent:"between"},void 0,e(b,{title:e(v,{id:"events.recent_events",defaultMessage:"Recent events"})}),e(A,{className:"ml-auto xl:hidden",theme:"primary",size:"sm",onClick:i},void 0,e(v,{id:"events.create_event",defaultMessage:"Create event"}))),e(k,{className:"mb-2"},void 0,e(y,{statusIds:r,isLoading:n,emptyMessage:e(v,{id:"events.recent_events.empty",defaultMessage:"There are no public events yet."})})),e(q,{className:"mb-2"},void 0,e(b,{title:e(v,{id:"events.joined_events",defaultMessage:"Joined events"})})),e(k,{},void 0,e(y,{statusIds:o,isLoading:u,emptyMessage:e(v,{id:"events.joined_events.empty",defaultMessage:"You haven't joined any event yet."})})))};export{Y as default};