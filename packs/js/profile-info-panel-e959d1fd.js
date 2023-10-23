import{cH as P,q as w,O as T,a as e,W as $,c8 as C,H as o,d as U,g as O,a8 as E,r as W,hz as j,L as G,y as u,cz as V,gR as J,F as m,hA as Y,aH as Z,u as K,aY as Q,a3 as h,hB as _,A as y,dc as X,hC as ee,hD as ae,hE as te,hF as re,o as ie,bN as se,cf as oe,hG as ne,cc as le}from"../index-40995b31.js";import{v as ce}from"./balloon-551f6642.js";import"./web.url.constructor-a52230d7.js";import{u as de}from"./usePatronUser-c3760c57.js";import{P as ue}from"./profile-field-6faf7eff.js";import{P as me}from"./profile-stats-dee64d71.js";import"./object-assign-5c1616e7.js";var ve=P(),fe=function(c){var i=c.accountIds,n=c.limit,a=n===void 0?3:n,p=w(function(t){return T(i.slice(0,a).map(function(s){return ve(t,s)}).filter(function(s){return s}))});return e(o,{className:"relative","aria-hidden":!0},void 0,p.map(function(t,s){return e("div",{className:$("relative",{"-ml-3":s!==0}),style:{zIndex:a-s}},t.id,e(C,{className:"ring-1 ring-white dark:ring-primary-900",src:t.avatar,size:20}))}))},ge=P(),pe=function(c){var i=c.account,n=U(),a=w(function(r){return r.me}),p=O(),t=w(function(r){var v;return((v=r.user_lists.familiar_followers.get(i.id))===null||v===void 0?void 0:v.items)||E()}),s=w(function(r){return t.slice(0,2).map(function(v){return ge(r,v)})});W.useEffect(function(){a&&p.familiarFollowers&&n(j(i.id))},[i.id]);var M=function(){n(Z("FAMILIAR_FOLLOWERS",{accountId:i.id}))};if(t.size===0)return null;var x=s.map(function(r){return!!r&&e(J,{accountId:r.id,inline:!0},void 0,e(G,{className:"mention inline-block",to:"/@".concat(r.acct)},void 0,e(o,{space:1,alignItems:"center",grow:!0},void 0,e(u,{size:"sm",theme:"primary",truncate:!0,dangerouslySetInnerHTML:{__html:r.display_name_html}}),r.verified&&e(V,{}))))}).toArray();return t.size>2&&x.push(e("span",{className:"cursor-pointer hover:underline",role:"presentation",onClick:M},void 0,e(m,{id:"account.familiar_followers.more",defaultMessage:"{count, plural, one {# other} other {# others}} you follow",values:{count:t.size-s.size}}))),e(o,{space:2,alignItems:"center"},void 0,e(fe,{accountIds:t}),e(u,{theme:"muted",size:"sm"},void 0,e(m,{id:"account.familiar_followers",defaultMessage:"Followed by {accounts}",values:{accounts:e(Y,{type:"conjunction",value:x})}})))},he=function(c){try{var i=new URL(c);return["http:","https:"].includes(i.protocol)}catch{return!1}},k=ie({linkVerifiedOn:{id:"account.link_verified_on",defaultMessage:"Ownership of this link was checked on {date}"},account_locked:{id:"account.locked_info",defaultMessage:"This account privacy status is set to locked. The owner manually reviews who can follow them."},deactivated:{id:"account.deactivated",defaultMessage:"Deactivated"},bot:{id:"account.badges.bot",defaultMessage:"Bot"}}),ke=function(c){var i,n,a=c.account,p=c.username,t=K(),s=Q(),M=s.displayFqn,x=de(a==null?void 0:a.url),r=x.patronUser,v=w(function(f){return f.me}),B=(a==null?void 0:a.id)===v,N=function(){return a!=null&&a.admin?e(_,{slug:"admin",title:e(m,{id:"account_moderation_modal.roles.admin",defaultMessage:"Admin"})},"staff"):a!=null&&a.moderator?e(_,{slug:"moderator",title:e(m,{id:"account_moderation_modal.roles.moderator",defaultMessage:"Moderator"})},"staff"):null},S=function(){var d=a?oe(a):[];return d.map(function(l){return e(_,{slug:l,title:ne(le(l))},l)})},A=function(){var d=S(),l=N(),I=(r==null?void 0:r.is_patron)===!0,g=[];return l&&g.push(l),I&&g.push(e(_,{slug:"patron",title:e(m,{id:"account.patron",defaultMessage:"Patron"})},"patron")),[].concat(g,se(d))},R=function(){var d,l=a==null||(d=a.pleroma)===null||d===void 0?void 0:d.birthday;if(!l)return null;var I=t.formatDate(l,{timeZone:"UTC",day:"numeric",month:"long",year:"numeric"}),g=new Date(l),z=new Date,H=g.getDate()===z.getDate()&&g.getMonth()===z.getMonth();return e(o,{alignItems:"center",space:.5},void 0,e(y,{src:ce,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(u,{size:"sm"},void 0,H?e(m,{id:"account.birthday_today",defaultMessage:"Birthday is today!"}):e(m,{id:"account.birthday",defaultMessage:"Born {date}",values:{date:I}})))};if(!a)return e("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,e(h,{space:2},void 0,e(h,{},void 0,e(o,{space:1,alignItems:"center"},void 0,e(u,{size:"sm",theme:"muted",direction:"ltr",truncate:!0},void 0,"@",p)))));var L=(i=(n=a.pleroma)===null||n===void 0?void 0:n.deactivated)!==null&&i!==void 0?i:!1,D=L?{__html:t.formatMessage(k.deactivated)}:{__html:a.display_name_html},q=t.formatDate(a.created_at,{month:"long",year:"numeric"}),F=A();return e("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,e(h,{space:2},void 0,e(h,{},void 0,e(o,{space:1,alignItems:"center"},void 0,e(u,{size:"lg",weight:"bold",dangerouslySetInnerHTML:D,truncate:!0}),a.bot&&e(_,{slug:"bot",title:t.formatMessage(k.bot)}),F.length>0&&e(o,{space:1,alignItems:"center"},void 0,F)),e(o,{alignItems:"center",space:.5},void 0,e(u,{size:"sm",theme:"muted",direction:"ltr",truncate:!0},void 0,"@",M?a.fqn:a.acct),a.locked&&e(y,{src:X,alt:t.formatMessage(k.account_locked),className:"h-4 w-4 text-gray-600"}))),e(me,{account:a}),a.note.length>0&&e(ee,{size:"sm",dangerouslySetInnerHTML:{__html:a.note_emojified},truncate:!0}),e("div",{className:"flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center"},void 0,a.local&&e(o,{alignItems:"center",space:.5},void 0,e(y,{src:ae,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(u,{size:"sm"},void 0,e(m,{id:"account.member_since",defaultMessage:"Joined {date}",values:{date:q}}))),a.location?e(o,{alignItems:"center",space:.5},void 0,e(y,{src:te,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(u,{size:"sm"},void 0,a.location)):null,a.website?e(o,{alignItems:"center",space:.5},void 0,e(y,{src:re,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e("div",{className:"max-w-[300px]"},void 0,e(u,{size:"sm",truncate:!0},void 0,he(a.website)?e("a",{className:"text-primary-600 hover:underline dark:text-accent-blue",href:a.website,target:"_blank"},void 0,a.website):a.website))):null,R()),B?null:e(pe,{account:a})),a.fields.length>0&&e(h,{space:2,className:"mt-4 xl:hidden"},void 0,a.fields.map(function(f,d){return e(ue,{field:f},d)})))};export{ke as default};
