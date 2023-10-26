import{r as p,cF as B,a as e,H as j,q as y,b6 as I,N as P,a3 as g,y as i,d5 as L,F as f,bC as T,b5 as E,W as F,hA as H,cA as O,u as q,d as G,j5 as U,t as W,g as X,ax as k,j6 as $,X as J,o as K,j7 as Q}from"../index-a6716a18.js";import{L as V}from"./load-more-62ca88a0.js";var h=function(t){var r=t.name,c=t.value,n=t.checked,o=t.onChange,a=t.label,d=p.useMemo(function(){return"radio-".concat(B())},[]);return e(j,{alignItems:"center",space:3},void 0,e("input",{type:"radio",name:r,id:d,value:c,checked:n,onChange:o,className:"h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"}),e("label",{htmlFor:d,className:"block text-sm font-medium text-gray-700"},void 0,a))},Y=function(t){var r,c=t.id,n=y(function(l){return l.me}),o=I(c),a=o.account,d=y(function(l){return P(l).get("autoPlayGif")});if(!a)return null;var w=n!==a.id&&((r=a.relationship)===null||r===void 0?void 0:r.followed_by);return e("div",{className:"flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow dark:divide-primary-700 dark:bg-primary-800"},void 0,e("div",{className:"relative"},void 0,w&&e("div",{className:"absolute left-2.5 top-2.5"},void 0,e(H,{slug:"opaque",title:"Follows you",id:"account-Status--follows-you"})),e("div",{className:"absolute bottom-2.5 right-2.5"},void 0,e(O,{account:a,small:!0})),e("img",{src:d?a.header:a.header_static,alt:"",className:"h-32 w-full rounded-t-lg object-cover"})),e(g,{space:4,className:"p-3"},void 0,e(E,{account:a,withRelationship:!1}),e(i,{truncate:!0,align:"left",className:F("[&_br]:hidden [&_p:first-child]:inline [&_p:first-child]:truncate [&_p]:hidden"),dangerouslySetInnerHTML:{__html:a.note_emojified||"&nbsp;"}})),e("div",{className:"grid grid-cols-3 gap-1 py-4"},void 0,e(g,{},void 0,e(i,{theme:"primary",size:"md",weight:"medium"},void 0,L(a.statuses_count)),e(i,{theme:"muted",size:"sm"},void 0,e(f,{id:"account.posts",defaultMessage:"Posts"}))),e(g,{},void 0,e(i,{theme:"primary",size:"md",weight:"medium"},void 0,L(a.followers_count)),e(i,{theme:"muted",size:"sm"},void 0,e(f,{id:"account.followers",defaultMessage:"Followers"}))),e(g,{},void 0,e(i,{theme:"primary",size:"md",weight:"medium"},void 0,a.last_status_at?e(T,{theme:"inherit",timestamp:a.last_status_at}):e(f,{id:"account.never_active",defaultMessage:"Never"})),e(i,{theme:"muted",size:"sm"},void 0,e(f,{id:"account.last_status",defaultMessage:"Last active"})))))},m=K({title:{id:"column.directory",defaultMessage:"Browse profiles"},recentlyActive:{id:"directory.recently_active",defaultMessage:"Recently active"},newArrivals:{id:"directory.new_arrivals",defaultMessage:"New arrivals"},local:{id:"directory.local",defaultMessage:"From {domain} only"},federated:{id:"directory.federated",defaultMessage:"From known fediverse"}}),ae=function(){var t=q(),r=G(),c=U(),n=c.search,o=new URLSearchParams(n),a=W(),d=X(),w=y(function(s){return s.user_lists.directory.items}),l=y(function(s){return s.user_lists.directory.isLoading}),S=p.useState(o.get("order")||"active"),N=k(S,2),u=N[0],x=N[1],R=p.useState(!!o.get("local")),M=k(R,2),v=M[0],D=M[1];p.useEffect(function(){r($({order:u||"active",local:v||!1}))},[u,v]);var A=function(_){x(_.target.value)},C=function(_){D(_.target.value==="1")},z=function(){r(Q({order:u||"active",local:v||!1}))};return e(J,{label:t.formatMessage(m.title)},void 0,e(g,{space:4},void 0,e("div",{className:"grid grid-cols-2 gap-2"},void 0,e("div",{},void 0,e(i,{weight:"medium"},void 0,"Display filter"),e("fieldset",{className:"mt-3"},void 0,e("legend",{className:"sr-only"},void 0,"Display filter"),e("div",{className:"space-y-2"},void 0,e(h,{name:"order",value:"active",label:t.formatMessage(m.recentlyActive),checked:u==="active",onChange:A}),e(h,{name:"order",value:"new",label:t.formatMessage(m.newArrivals),checked:u==="new",onChange:A})))),d.federating&&e("div",{},void 0,e(i,{weight:"medium"},void 0,"Fediverse filter"),e("fieldset",{className:"mt-3"},void 0,e("legend",{className:"sr-only"},void 0,"Fediverse filter"),e("div",{className:"space-y-2"},void 0,e(h,{name:"local",value:"1",label:t.formatMessage(m.local,{domain:a.title}),checked:v,onChange:C}),e(h,{name:"local",value:"0",label:t.formatMessage(m.federated),checked:!v,onChange:C}))))),e("div",{className:F({"grid grid-cols-1 sm:grid-cols-2 gap-2.5":!0,"opacity-30":l})},void 0,w.map(function(s){return e(Y,{id:s},s)})),e(V,{onClick:z,disabled:l})))};export{ae as default};
