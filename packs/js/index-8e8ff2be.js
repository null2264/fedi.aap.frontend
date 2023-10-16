import{a as e,a2 as E,y as C,eV as c,eW as p,r as f,at as _,a$ as w,A as h,kj as N,kk as M,aL as L,q as l,kl as I,L as j,u as S,d as P,km as R,kn as z,H as T,cy as k,F as v,aa as A,X as H,a_ as y,eL as q,o as F,aD as V}from"../index-4ca636bc.js";import{R as B}from"./index-88e1cccb.js";import"./warning-07d0fac9.js";var D=function(){var s=p(5,25),t=p(5,15);return e("div",{className:"relative w-full animate-pulse overflow-hidden rounded-lg bg-gray-100 text-primary-50 dark:bg-primary-800 dark:text-primary-800"},void 0,e("div",{className:"h-40 bg-primary-200 dark:bg-gray-600"}),e(E,{className:"p-2.5",space:2},void 0,e(C,{weight:"semibold"},void 0,c(s)),e("div",{className:"flex flex-wrap gap-x-2 gap-y-1 text-gray-700 dark:text-gray-600"},void 0,e("span",{},void 0,c(t)),e("span",{},void 0,c(t)),e("span",{},void 0,c(t)))))},J=function(s){var t=s.id,r=f.useCallback(L(),[]),n=l(function(o){return r(o,{id:t})});return n?e(j,{className:"w-full px-1",to:"/@".concat(n.getIn(["account","acct"]),"/events/").concat(n.id)},void 0,e(I,{status:n,floatingAction:!1})):null},b=function(s){var t=s.statusIds,r=s.isLoading,n=s.emptyMessage,o=f.useState(0),u=_(o,2),i=u[0],a=u[1],g=function(x){a(x%t.size)};return t.size===0?r?e(D,{}):e(w,{variant:"rounded",size:"lg"},void 0,n):e("div",{className:"relative -mx-1"},void 0,i!==0&&e("div",{className:"absolute left-3 top-1/2 z-10 -mt-4"},void 0,e("button",{onClick:function(){return g(i-1)},className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/50 backdrop-blur dark:bg-gray-900/50"},void 0,e(h,{src:M,className:"h-6 w-6 text-black dark:text-white"}))),e(B,{animateHeight:!0,index:i,onChangeIndex:g},void 0,t.map(function(d){return e(J,{id:d},d)})),i!==t.size-1&&e("div",{className:"absolute right-3 top-1/2 z-10 -mt-4"},void 0,e("button",{onClick:function(){return g(i+1)},className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/50 backdrop-blur dark:bg-gray-900/50"},void 0,e(h,{src:N,className:"h-6 w-6 text-black dark:text-white"}))))},O=F({title:{id:"column.events",defaultMessage:"Events"}}),Y=function(){var s=S(),t=P(),r=l(function(a){return a.status_lists.get("recent_events").items}),n=l(function(a){return a.status_lists.get("recent_events").isLoading}),o=l(function(a){return a.status_lists.get("joined_events").items}),u=l(function(a){return a.status_lists.get("joined_events").isLoading}),i=function(){t(V("COMPOSE_EVENT"))};return f.useEffect(function(){t(R()),t(z())},[]),e(H,{label:s.formatMessage(O.title)},void 0,e(T,{className:"mb-2",space:2,justifyContent:"between"},void 0,e(k,{title:e(v,{id:"events.recent_events",defaultMessage:"Recent events"})}),e(A,{className:"ml-auto xl:hidden",theme:"primary",size:"sm",onClick:i},void 0,e(v,{id:"events.create_event",defaultMessage:"Create event"}))),e(y,{className:"mb-2"},void 0,e(b,{statusIds:r,isLoading:n,emptyMessage:e(v,{id:"events.recent_events.empty",defaultMessage:"There are no public events yet."})})),e(q,{className:"mb-2"},void 0,e(k,{title:e(v,{id:"events.joined_events",defaultMessage:"Joined events"})})),e(y,{},void 0,e(b,{statusIds:o,isLoading:u,emptyMessage:e(v,{id:"events.joined_events.empty",defaultMessage:"You haven't joined any event yet."})})))};export{Y as default};
