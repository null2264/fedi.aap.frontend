import{d as h,q as u,r as M,a as t,B as C,F as d,bx as _,ew as x,ex as y,aF as F}from"../index-cc004e11.js";import{S as b}from"./scrollable-list-7fc1e6e3.js";import"./index-2fb81ed6.js";import"./load-more-75df5cb8.js";var A=function(i){var c=i.onClose,s=i.statusId,n=h(),l=u(function(e){var a;return(a=e.user_lists.favourited_by.get(s))===null||a===void 0?void 0:a.items}),o=u(function(e){var a;return(a=e.user_lists.favourited_by.get(s))===null||a===void 0?void 0:a.next}),v=function(){n(x(s))};M.useEffect(function(){v()},[]);var f=function(){c("FAVOURITES")},p=function(){o&&n(y(s,o))},r;if(!l)r=t(F,{});else{var m=t(d,{id:"empty_column.favourites",defaultMessage:"No one has liked this post yet. When someone does, they will show up here."});r=t(b,{scrollKey:"favourites",emptyMessage:m,className:"max-w-full",itemClassName:"pb-3",style:{height:"80vh"},useWindowScroll:!1,onLoadMore:p,hasMore:!!o},void 0,l.map(function(e){return t(C,{id:e},e)}))}return t(_,{title:t(d,{id:"column.favourites",defaultMessage:"Likes"}),onClose:f},void 0,r)};export{A as default};