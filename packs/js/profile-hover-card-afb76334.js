import{d as N,a9 as F,u as k,r as v,ax as q,q as f,b7 as D,Z as T,iE as U,iF as g,R as $,az as j,W as G,a as e,b2 as J,a3 as W,hN as Z,iG as K,cB as O,H as Q,A as V,hE as X,y as h,F as l,hC as u,b5 as Y,a2 as ee,iH as ae}from"../index-cc004e11.js";import{u as te}from"./usePopper-0156fcd7.js";import{u as oe}from"./usePatronUser-0d0e470b.js";var re=function(t,r){var s=[];return t!=null&&t.admin?s.push(e(u,{slug:"admin",title:e(l,{id:"account_moderation_modal.roles.admin",defaultMessage:"Admin"})},"admin")):t!=null&&t.moderator&&s.push(e(u,{slug:"moderator",title:e(l,{id:"account_moderation_modal.roles.moderator",defaultMessage:"Moderator"})},"moderator")),r!=null&&r.is_patron&&s.push(e(u,{slug:"patron",title:e(l,{id:"account.patron",defaultMessage:"Patron"})},"patron")),s},se=function(t){return function(){t(ae())}},ne=function(t){return function(){t(g(!0))}},de=function(t){var r,s=t.visible,p=s===void 0?!0:s,n=N(),y=F(),b=k(),M=v.useState(null),m=q(M,2),P=m[0],E=m[1],w=f(function(o){return o.me}),i=f(function(o){return o.profile_hover_card.accountId||void 0}),C=D(i,{withRelationship:!0}),a=C.account,H=oe(a==null?void 0:a.url),x=H.patronUser,B=f(function(o){var c;return(c=o.profile_hover_card.ref)===null||c===void 0?void 0:c.current}),S=re(a,x);v.useEffect(function(){i&&n(T([i]))},[n,i]),v.useEffect(function(){var o=y.listen(function(){U.cancel(),n(g())});return function(){o()}},[]);var _=te(B,P),A=_.styles,R=_.attributes;if(!a)return null;var I={__html:a.note_emojified},z=b.formatDate(a.created_at,{month:"long",year:"numeric"}),L=w!==a.id&&((r=a.relationship)===null||r===void 0?void 0:r.followed_by)===!0;return $.createElement("div",j({className:G({"absolute transition-opacity w-[320px] z-[101] top-0 left-0":!0,"opacity-100":p,"opacity-0 pointer-events-none":!p}),ref:E,style:A.popper},R.popper,{onMouseEnter:se(n),onMouseLeave:ne(n)}),e(ee,{variant:"rounded",className:"relative isolate overflow-hidden"},void 0,e(J,{},void 0,e(W,{space:2},void 0,e(Z,{fetchComponent:K},void 0,function(o){return e(o,{accountId:a.id,action:e(O,{account:a,small:!0}),badges:S})}),a.local&&e(Q,{alignItems:"center",space:.5},void 0,e(V,{src:X,className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),e(h,{size:"sm"},void 0,e(l,{id:"account.member_since",defaultMessage:"Joined {date}",values:{date:z}}))),a.note.length>0&&e(h,{size:"sm",dangerouslySetInnerHTML:I})),L&&e("div",{className:"absolute left-2 top-2"},void 0,e(u,{slug:"opaque",title:e(Y,{id:"account-Status--follows-you"},void 0,e("span",{},void 0,"Follows you"))})))))};export{de as ProfileHoverCard,de as default};