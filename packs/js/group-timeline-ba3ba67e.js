import{v as M}from"./message-2-2f21ce66.js";import{a4 as D,aX as A,u as N,bc as R,d as L,r as c,ea as $,q as g,e8 as E,eb as O,kG as v,kH as z,kI as H,a as e,R as q,H as f,W as V,L as j,c9 as K,e9 as P,y as h,F as b,al as W,a3 as y,A as X,ed as B}from"../index-cc004e11.js";import{T as J}from"./timeline-dcd16a42.js";import"./scroll-top-button-e1a4ad11.js";import"./status-list-549eb620.js";import"./scrollable-list-7fc1e6e3.js";import"./index-2fb81ed6.js";import"./load-more-75df5cb8.js";import"./status-container-fee5668e.js";import"./pending-status-7cab01e8.js";import"./poll-preview-95e22576.js";import"./noop-ffe161f6.js";function Q(n){return D(`group:${n}`,`group&group=${n}`)}var U=A(),pe=function(T){var u,_=N(),G=R(),l=G.account,s=L(),p=c.useRef(null),a=T.params.groupId,I=$(a),r=I.group,t="group:".concat(a),k=!!l&&(r==null||(u=r.relationship)===null||u===void 0?void 0:u.member),d=g(function(o){var i;return!!((i=o.compose.get(t))!==null&&i!==void 0&&i.group_timeline_visible)}),C=g(function(o){return U(o,{type:"group:".concat(r==null?void 0:r.id,":pinned")})}),m=E(p,function(o){s(O(t,o,_))}),S=m.isDragging,x=m.isDraggedOver,w=function(i){s(v(a,{maxId:i}))},F=function(){s(B(t,!d))};return Q(a),c.useEffect(function(){s(v(a)),s(z(a)),s(H(t,a))},[a]),r?e(y,{space:2},void 0,k&&e("div",{className:"border-b border-solid border-gray-200 py-6 dark:border-gray-800"},void 0,q.createElement(f,{ref:p,alignItems:"start",space:4,className:V("relative rounded-xl transition",{"border-2 border-primary-600 border-dashed z-[99] p-4":S,"ring-2 ring-offset-2 ring-primary-600":x})},e(j,{to:"/@".concat(l.acct)},void 0,e(K,{src:l.avatar,size:46})),e(P,{id:t,shouldCondense:!0,autoFocus:!1,group:a,extra:!r.locked&&e(f,{alignItems:"center",space:4},void 0,e("label",{className:"ml-auto cursor-pointer",htmlFor:"group-timeline-visible"},void 0,e(h,{theme:"muted"},void 0,e(b,{id:"compose_group.share_to_followers",defaultMessage:"Share with my followers"}))),e(W,{id:"group-timeline-visible",checked:d,onChange:F,size:"sm"}))}))),e(J,{scrollKey:"group_timeline",timelineId:t,onLoadMore:w,emptyMessage:e(y,{space:4,className:"py-6",justifyContent:"center",alignItems:"center"},void 0,e("div",{className:"rounded-full bg-gray-200 p-4 dark:bg-gray-800"},void 0,e(X,{src:M,className:"h-6 w-6 text-gray-600"})),e(h,{theme:"muted"},void 0,e(b,{id:"empty_column.group",defaultMessage:"There are no posts in this group yet."}))),emptyMessageCard:!1,divideType:"border",showGroup:!1,featuredStatusIds:C})):null};export{pe as default};