import{d as F,u as _,r as m,ax as w,q as N,O as z,ez as I,R as h,a as n,B as j,W as T,F as g,bx as U,ew as $,eA as B,E as D,T as L,aF as k,o as O}from"../index-ba3d4b94.js";import{S as W}from"./scrollable-list-bf72aa44.js";import"./index-88467f4d.js";import"./load-more-4abf079e.js";var q=O({close:{id:"lightbox.close",defaultMessage:"Close"},all:{id:"reactions.all",defaultMessage:"All"}}),Q=function(c){var C=c.onClose,r=c.statusId,M=c.reaction,d=F(),R=_(),x=m.useState(M),f=w(x,2),o=f[0],v=f[1],i=N(function(e){var a,t,s=(a=e.user_lists.favourited_by.get(r))===null||a===void 0?void 0:a.items,l=(t=e.user_lists.reactions.get(r))===null||t===void 0?void 0:t.items;return s&&l&&z(s!=null&&s.size?[I({accounts:s,count:s.size,name:"⭐️"})]:[]).concat(l||[])}),E=function(){d($(r)),d(B(r))},S=function(){C("REACTIONS")},b=function(){var a=[{text:R.formatMessage(q.all),action:function(){return v("")},name:"all"}];return i.forEach(function(t){return a.push({text:n("div",{className:"flex items-center gap-1"},void 0,n(D,{className:"h-4 w-4",emoji:t.name,src:t.url||void 0}),t.count),action:function(){return v(t.name)},name:t.name})}),n(L,{items:a,activeItem:o||"all"})},p=m.useMemo(function(){if(i)if(o){var e=i.find(function(a){var t=a.name;return t===o});if(e)return e.accounts.map(function(a){return{id:a,reaction:o,reactionUrl:e.url||void 0}}).toList()}else return i.map(function(a){var t=a.accounts,s=a.name,l=a.url;return t.map(function(A){return{id:A,reaction:s,reactionUrl:l}})}).flatten()},[i,o]);m.useEffect(function(){E()},[]);var u;if(!p||!i)u=n(k,{});else{var y=n(g,{id:"status.reactions.empty",defaultMessage:"No one has reacted to this post yet. When someone does, they will show up here."});u=h.createElement(h.Fragment,null,i.size>0&&b(),n(W,{scrollKey:"reactions",emptyMessage:y,className:T("max-w-full",{"mt-4":i.size>0}),itemClassName:"pb-3"},void 0,p.map(function(e){return n(j,{id:e.id,emoji:e.reaction,emojiUrl:e.reactionUrl},"".concat(e.id,"-").concat(e.reaction))})))}return n(U,{title:n(g,{id:"column.reactions",defaultMessage:"Reactions"}),onClose:S},void 0,u)};export{Q as default};