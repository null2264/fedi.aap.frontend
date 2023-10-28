import{v as C}from"./hash-746ab8b6.js";import{ku as R,bp as w,d as I,u as E,ky as L,a as t,H as O,fN as T,aK as M,kD as A,dl as F,L as U,a3 as x,y as f,d5 as D,o as q,kE as G,bs as k,A as j,ad as H,_ as K,ea as $,F as z}from"../index-ba3d4b94.js";import{u as V}from"./useGroupTags-0c324d17.js";import{S as B}from"./scrollable-list-bf72aa44.js";import{P as W}from"./placeholder-account-2ad0ff7d.js";import"./index-88467f4d.js";import"./load-more-4abf079e.js";function J(r,i){const{updateEntity:s,...a}=R([w.GROUP_TAGS,r,i],{patch:`/api/v1/groups/${r}/tags/${i}`});return{updateGroupTag:s,...a}}const _="/packs/assets/pin-filled-c783b6dd.svg";function N(r,i){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);i&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),s.push.apply(s,a)}return s}function v(r){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?N(Object(s),!0).forEach(function(a){K(r,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(s,a))})}return r}var o=q({hideTag:{id:"group.tags.hide",defaultMessage:"Hide topic"},showTag:{id:"group.tags.show",defaultMessage:"Show topic"},total:{id:"group.tags.total",defaultMessage:"Total Posts"},pinTag:{id:"group.tags.pin",defaultMessage:"Pin topic"},unpinTag:{id:"group.tags.unpin",defaultMessage:"Unpin topic"},pinSuccess:{id:"group.tags.pin.success",defaultMessage:"Pinned!"},unpinSuccess:{id:"group.tags.unpin.success",defaultMessage:"Unpinned!"},visibleSuccess:{id:"group.tags.visible.success",defaultMessage:"Topic marked as visible"},hiddenSuccess:{id:"group.tags.hidden.success",defaultMessage:"Topic marked as hidden"}}),Q=function(i){var s,a=i.group,e=i.tag,p=i.isPinnable,u=I(),n=E(),h=J(a.id,e.id),d=h.updateGroupTag,g=((s=a.relationship)===null||s===void 0?void 0:s.role)===L.OWNER,l=function(){var y=e.visible;d({group_tag_type:y?"hidden":"normal"},{onSuccess:function(){var S=v(v({},e),{},{visible:!e.visible,pinned:y?!1:e.pinned});u(G([S],w.GROUP_TAGS)),k.success(S.visible?n.formatMessage(o.visibleSuccess):n.formatMessage(o.hiddenSuccess))}})},m=function(){d({group_tag_type:e.pinned?"normal":"pinned"},{onSuccess:function(){var P=v(v({},e),{},{pinned:!e.pinned});u(G([P],w.GROUP_TAGS)),k.success(P.pinned?n.formatMessage(o.pinSuccess):n.formatMessage(o.unpinSuccess))}})},b=function(){if(!g&&e.pinned)return t(j,{src:_,className:"h-5 w-5 text-gray-600","data-testid":"pin-icon"});if(!g)return null;if(p)return t(T,{text:e.pinned?n.formatMessage(o.unpinTag):n.formatMessage(o.pinTag)},void 0,t(M,{onClick:m,theme:"transparent",src:e.pinned?_:H,iconClassName:"h-5 w-5 text-primary-500 dark:text-accent-blue","data-testid":"pin-icon"}));if(!p&&e.pinned)return t(T,{text:n.formatMessage(o.unpinTag)},void 0,t(M,{onClick:m,theme:"transparent",src:_,iconClassName:"h-5 w-5 text-primary-500 dark:text-accent-blue"}))};return t(O,{alignItems:"center",justifyContent:"between","data-testid":"group-tag-list-item"},void 0,t(U,{to:"/group/".concat(a.slug,"/tag/").concat(e.id),className:"group grow"},void 0,t(x,{},void 0,t(f,{weight:"bold",theme:e.visible||!g?"default":"subtle",className:"group-hover:underline","data-testid":"group-tag-name"},void 0,"#",e.name),t(f,{size:"sm",theme:e.visible||!g?"muted":"subtle"},void 0,n.formatMessage(o.total),":"," ",t(f,{size:"sm",theme:"inherit",weight:"semibold",tag:"span"},void 0,D(e.uses))))),t(O,{alignItems:"center",space:2},void 0,e.visible?b():null,g?t(T,{text:e.visible?n.formatMessage(o.hideTag):n.formatMessage(o.showTag)},void 0,t(M,{onClick:l,theme:"transparent",src:e.visible?A:F,iconClassName:"h-5 w-5 text-primary-500 dark:text-accent-blue"})):null))},ie=function(i){var s=i.params.groupId,a=$(s),e=a.group,p=a.isFetching,u=V(s),n=u.tags,h=u.isFetching,d=u.hasNextPage,g=u.fetchNextPage,l=p||h,m=n.filter(function(c){return c.pinned}),b=m.length<3;return t(B,{scrollKey:"group-tags",hasMore:d,onLoadMore:g,isLoading:l||!e,showLoading:!e||l&&n.length===0,placeholderComponent:W,placeholderCount:3,className:"divide-y divide-solid divide-gray-300 dark:divide-gray-800",itemClassName:"py-3 last:pb-0",emptyMessage:t(x,{space:4,className:"pt-6",justifyContent:"center",alignItems:"center"},void 0,t("div",{className:"rounded-full bg-gray-200 p-4 dark:bg-gray-800"},void 0,t(j,{src:C,className:"h-6 w-6 text-gray-600"})),t(f,{theme:"muted"},void 0,t(z,{id:"group.tags.empty",defaultMessage:"There are no topics in this group yet."}))),emptyMessageCard:!1},void 0,n.map(function(c){return t(Q,{group:e,isPinnable:b,tag:c},c.id)}))};export{ie as default};