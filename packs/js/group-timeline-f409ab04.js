import{v as M}from"./message-2-2f21ce66.js";import{a3 as D,aT as A,u as N,b8 as R,d as L,r as c,e9 as $,q as g,e7 as E,ea as O,kH as v,kI as z,kJ as H,a as e,R as q,H as f,W as V,L as j,c7 as J,e8 as K,y as h,F as b,ah as P,a2 as y,A as W,ec as B}from"../index-4ca636bc.js";import{T as Q}from"./timeline-df5d0bc7.js";import"./scroll-top-button-05a492cf.js";import"./status-list-19b5567e.js";import"./scrollable-list-28d0deac.js";import"./index-d02c21e2.js";import"./load-more-66579daa.js";import"./status-container-95c8ae1e.js";import"./pending-status-19ae051c.js";import"./poll-preview-5eae9da9.js";import"./noop-97e94be0.js";function U(n){return D(`group:${n}`,`group&group=${n}`)}var X=A(),pe=function(T){var u,_=N(),I=R(),l=I.account,s=L(),p=c.useRef(null),a=T.params.groupId,k=$(a),r=k.group,t="group:".concat(a),G=!!l&&(r==null||(u=r.relationship)===null||u===void 0?void 0:u.member),d=g(function(o){var i;return!!((i=o.compose.get(t))!==null&&i!==void 0&&i.group_timeline_visible)}),C=g(function(o){return X(o,{type:"group:".concat(r==null?void 0:r.id,":pinned")})}),m=E(p,function(o){s(O(t,o,_))}),S=m.isDragging,x=m.isDraggedOver,w=function(i){s(v(a,{maxId:i}))},F=function(){s(B(t,!d))};return U(a),c.useEffect(function(){s(v(a)),s(z(a)),s(H(t,a))},[a]),r?e(y,{space:2},void 0,G&&e("div",{className:"border-b border-solid border-gray-200 py-6 dark:border-gray-800"},void 0,q.createElement(f,{ref:p,alignItems:"start",space:4,className:V("relative rounded-xl transition",{"border-2 border-primary-600 border-dashed z-[99] p-4":S,"ring-2 ring-offset-2 ring-primary-600":x})},e(j,{to:"/@".concat(l.acct)},void 0,e(J,{src:l.avatar,size:46})),e(K,{id:t,shouldCondense:!0,autoFocus:!1,group:a,extra:!r.locked&&e(f,{alignItems:"center",space:4},void 0,e("label",{className:"ml-auto cursor-pointer",htmlFor:"group-timeline-visible"},void 0,e(h,{theme:"muted"},void 0,e(b,{id:"compose_group.share_to_followers",defaultMessage:"Share with my followers"}))),e(P,{id:"group-timeline-visible",checked:d,onChange:F,size:"sm"}))}))),e(Q,{scrollKey:"group_timeline",timelineId:t,onLoadMore:w,emptyMessage:e(y,{space:4,className:"py-6",justifyContent:"center",alignItems:"center"},void 0,e("div",{className:"rounded-full bg-gray-200 p-4 dark:bg-gray-800"},void 0,e(W,{src:M,className:"h-6 w-6 text-gray-600"})),e(h,{theme:"muted"},void 0,e(b,{id:"empty_column.group",defaultMessage:"There are no posts in this group yet."}))),emptyMessageCard:!1,divideType:"border",showGroup:!1,featuredStatusIds:C})):null};export{pe as default};
