import{d as i,b7 as v,a as o,b6 as m,b8 as p,b9 as h,Q as w,ba as q,u as A,q as l,R,bb as b,aF as g,X as c,o as F,F as M}from"../index-cc004e11.js";import{S as _}from"./scrollable-list-7fc1e6e3.js";import{A as y}from"./authorize-reject-buttons-c6475901.js";import"./index-2fb81ed6.js";import"./load-more-75df5cb8.js";var z=function(a){var t=a.id,s=i(),n=v(t),r=n.account,e=function(){return s(p(t))},f=function(){return s(h(t))};return r?o("div",{className:"p-2.5"},void 0,o(m,{account:r,action:o(y,{onAuthorize:e,onReject:f,countdown:3e3})})):null},j=F({heading:{id:"column.follow_requests",defaultMessage:"Follow requests"}}),L=w(function(u){u(q())},300,{leading:!0}),C=function(){var a=i(),t=A(),s=l(function(e){return e.user_lists.follow_requests.items}),n=l(function(e){return!!e.user_lists.follow_requests.next});if(R.useEffect(function(){a(b())},[]),!s)return o(c,{},void 0,o(g,{}));var r=o(M,{id:"empty_column.follow_requests",defaultMessage:"You don't have any follow requests yet. When you receive one, it will show up here."});return o(c,{label:t.formatMessage(j.heading)},void 0,o(_,{scrollKey:"follow_requests",onLoadMore:function(){return L(a)},hasMore:n,emptyMessage:r},void 0,s.map(function(e){return o(z,{id:e},e)})))};export{C as default};