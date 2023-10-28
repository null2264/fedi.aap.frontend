import{cI as P,q as y,O as L,a as e,W as D,c9 as $,H as o,d as H,g as T,a8 as O,r as U,hB as q,b5 as I,y as m,R as S,L as E,cA as C,gS as W,aH as G,u as V,a3 as h,hC as w,hu as j,A as _,dd as J,hD as K,hE as Q,F as X,hF as Y,hG as Z,o as ee,bO as ae,cg as te,hH as re,cd as ie}from"../index-cc004e11.js";import{v as se}from"./balloon-551f6642.js";import"./web.url.constructor-e8ba73a8.js";import{u as oe}from"./usePatronUser-0d0e470b.js";import{P as ne}from"./profile-field-b59a47fb.js";import{P as le}from"./profile-stats-26a64fce.js";import"./object-assign-35295efc.js";import"./use_localization-398940f7.js";var ce=P(),de=function(c){var i=c.accountIds,n=c.limit,a=n===void 0?3:n,g=y(function(t){return L(i.slice(0,a).map(function(s){return ce(t,s)}).filter(function(s){return s}))});return e(o,{className:"relative","aria-hidden":!0},void 0,g.map(function(t,s){return e("div",{className:D("relative",{"-ml-3":s!==0}),style:{zIndex:a-s}},t.id,e($,{className:"ring-1 ring-white dark:ring-primary-900",src:t.avatar,size:20}))}))},ue=P(),me=function(c){var i=c.account,n=H(),a=y(function(d){return d.me}),g=T(),t=y(function(d){var r;return((r=d.user_lists.familiar_followers.get(i.id))===null||r===void 0?void 0:r.items)||O()}),s=y(function(d){return t.slice(0,2).map(function(r){return ue(d,r)})});U.useEffect(function(){a&&g.familiarFollowers&&n(q(i.id))},[i.id]);var p=function(){n(G("FAMILIAR_FOLLOWERS",{accountId:i.id}))};if(t.size===0)return null;var k=function(){return S.createElement(S.Fragment,null,s.map(function(r){return!!r&&e(W,{accountId:r.id,inline:!0},void 0,e(E,{className:"mention inline-block",to:"/@".concat(r.acct)},void 0,e(o,{space:1,alignItems:"center",grow:!0},void 0,e(m,{size:"sm",theme:"primary",truncate:!0,dangerouslySetInnerHTML:{__html:r.display_name_html}}),r.verified&&e(C,{}))))}),t.size>2&&e(I,{id:"account-Status--familiar-followers-more",vars:{count:t.size-s.size}},void 0,e("span",{className:"cursor-pointer hover:underline",role:"presentation",onClick:p},void 0,"0 others you follow")))};return e(o,{space:2,alignItems:"center"},void 0,e(de,{accountIds:t}),e(I,{id:"account-Status--familiar-followers",elems:{accounts:k()}},void 0,e(m,{theme:"muted",size:"sm"},void 0,"Followed by ","<accounts></accounts>")))},ve=function(c){try{var i=new URL(c);return["http:","https:"].includes(i.protocol)}catch{return!1}},fe=ee({linkVerifiedOn:{id:"account.link_verified_on",defaultMessage:"Ownership of this link was checked on {date}"},account_locked:{id:"account.locked_info",defaultMessage:"This account privacy status is set to locked. The owner manually reviews who can follow them."},bot:{id:"account.badges.bot",defaultMessage:"Bot"}}),be=function(c){var i,n,a=c.account,g=c.username,t=V(),s=oe(a==null?void 0:a.url),p=s.patronUser,k=y(function(v){return v.me}),d=(a==null?void 0:a.id)===k,r=function(){return a!=null&&a.admin?e(w,{slug:"admin",title:"Admin"},"staff"):a!=null&&a.moderator?e(w,{slug:"moderator",title:"Moderator"},"staff"):null},z=function(){var u=a?te(a):[];return u.map(function(l){return e(w,{slug:l,title:re(ie(l))},l)})},A=function(){var u=z(),l=r(),x=(p==null?void 0:p.is_patron)===!0,f=[];return l&&f.push(l),x&&f.push(e(w,{slug:"patron",title:"Patron"},"patron")),[].concat(f,ae(u))},B=function(){var u,l=a==null||(u=a.pleroma)===null||u===void 0?void 0:u.birthday;if(!l)return null;var x=new Date(l),f=new Date,R=x.getDate()===f.getDate()&&x.getMonth()===f.getMonth();return e(o,{alignItems:"center",space:.5},void 0,e(_,{src:se,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(I,{id:"account-Birthday--"+(R?"celebration":"date"),vars:{date:l}},void 0,e(m,{size:"sm"},void 0,"Birthday")))};if(!a)return e("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,e(h,{space:2},void 0,e(h,{},void 0,e(o,{space:1,alignItems:"center"},void 0,e(m,{size:"sm",theme:"muted",direction:"ltr",truncate:!0},void 0,"@",g)))));var M=(i=(n=a.pleroma)===null||n===void 0?void 0:n.deactivated)!==null&&i!==void 0?i:!1,N=t.formatDate(a.created_at,{month:"long",year:"numeric"}),F=A();return e("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,e(h,{space:2},void 0,e(h,{},void 0,e(o,{space:1,alignItems:"center"},void 0,M?e(I,{id:"account-Status--deactivated"},void 0,e(m,{size:"lg",weight:"bold",truncate:!0},void 0,"Deactivated")):e(m,{size:"lg",weight:"bold",dangerouslySetInnerHTML:{__html:a.display_name_html},truncate:!0}),a.bot&&e(w,{slug:"bot",title:"Bot"}),F.length>0&&e(o,{space:1,alignItems:"center"},void 0,F)),e(o,{alignItems:"center",space:.5},void 0,e(j,{account:a}),a.locked&&e(_,{src:J,alt:t.formatMessage(fe.account_locked),className:"h-4 w-4 text-gray-600"}))),e(le,{account:a}),a.note.length>0&&e(K,{size:"sm",dangerouslySetInnerHTML:{__html:a.note_emojified},truncate:!0}),e("div",{className:"flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center"},void 0,a.local&&e(o,{alignItems:"center",space:.5},void 0,e(_,{src:Q,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(m,{size:"sm"},void 0,e(X,{id:"account.member_since",defaultMessage:"Joined {date}",values:{date:N}}))),a.location?e(o,{alignItems:"center",space:.5},void 0,e(_,{src:Y,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(m,{size:"sm"},void 0,a.location)):null,a.website?e(o,{alignItems:"center",space:.5},void 0,e(_,{src:Z,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e("div",{className:"max-w-[300px]"},void 0,e(m,{size:"sm",truncate:!0},void 0,ve(a.website)?e("a",{className:"text-primary-600 hover:underline dark:text-accent-blue",href:a.website,target:"_blank"},void 0,a.website):a.website))):null,B()),d?null:e(me,{account:a})),a.fields.length>0&&e(h,{space:2,className:"mt-4 xl:hidden"},void 0,a.fields.map(function(v,u){return e(ne,{field:v},u)})))};export{be as default};