import{aT as U,a7 as $,d as P,g as V,f as Y,aU as q,aV as D,r,at as G,q as i,aW as H,aX as K,aY as N,aZ as h,a,aB as W,aC as X,a_ as Z,y as j,F as d,a$ as z}from"../index-384d6887.js";import{S as J}from"./status-list-f571b6f4.js";import"./scrollable-list-6f6370f5.js";import"./index-9ae51821.js";import"./load-more-2ae55fa9.js";import"./status-container-18d57bfb.js";import"./pending-status-260a6418.js";import"./poll-preview-f92327c0.js";import"./noop-d5111e21.js";var _=U(),ue=function(l){var u=l.params,v=l.withReplies,n=v===void 0?!1:v,y=$(),o=P(),b=V(),S=Y(),x=q(),A=D(u.username,{withRelationship:!0}),e=A.account,I=r.useState(!e),f=G(I,2),M=f[0],p=f[1],c=n?"".concat(e==null?void 0:e.id,":with_replies"):e==null?void 0:e.id,L=S.getIn(["account_timeline","shows","pinned"])===!0&&!n,k=i(function(t){return _(t,{type:"account:".concat(c),prefix:"account_timeline"})}),w=i(function(t){return _(t,{type:"account:".concat(e==null?void 0:e.id,":pinned"),prefix:"account_timeline"})}),m=i(function(t){return t.relationships.getIn([e==null?void 0:e.id,"blocked_by"])===!0}),E=m&&!b.blockersVisible,g=x.getIn(["extensions","patron","enabled"])===!0,T=i(function(t){return t.getIn(["timelines","account:".concat(c),"isLoading"])===!0}),R=i(function(t){return t.getIn(["timelines","account:".concat(c),"hasMore"])===!0}),C=i(function(t){var s;return(s=t.timelines.get("account:".concat(c)))===null||s===void 0?void 0:s.next}),B=(e==null?void 0:e.username)||u.username;r.useEffect(function(){o(H(u.username,y)).then(function(){return p(!1)}).catch(function(){return p(!1)})},[u.username]),r.useEffect(function(){e&&!n&&o(K(e.id))},[e==null?void 0:e.id,n]),r.useEffect(function(){e&&g&&o(N(e.url))},[e==null?void 0:e.url,g]),r.useEffect(function(){e&&o(h(e.id,{withReplies:n}))},[e==null?void 0:e.id,n]);var F=function(s){e&&o(h(e.id,{url:C,maxId:s,withReplies:n}))};return!e&&M?a(W,{}):e?E?a(z,{},void 0,a(Z,{},void 0,a(j,{align:"center"},void 0,m?a(d,{id:"empty_column.account_blocked",defaultMessage:"You are blocked by @{accountUsername}.",values:{accountUsername:B}}):a(d,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"})))):a(J,{scrollKey:"account_timeline",statusIds:k,featuredStatusIds:L?w:void 0,isLoading:T,hasMore:R,onLoadMore:F,emptyMessage:a(d,{id:"empty_column.account_timeline",defaultMessage:"No posts here!"})}):a(X,{nested:!0})};export{ue as default};