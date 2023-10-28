import{u as S,ea as C,kC as E,ky as I,r as L,a as e,aF as T,X as b,kK as H,F as K,o as N,b6 as B,H as U,aT as M,bs as j}from"../index-ba3d4b94.js";import{u as X}from"./useGroupMembers-9a3f28f2.js";import{A as x}from"./authorize-reject-buttons-2c8ce6ba.js";import{S as D}from"./scrollable-list-bf72aa44.js";import"./index-88467f4d.js";import"./load-more-4abf079e.js";var h=N({heading:{id:"column.group_pending_requests",defaultMessage:"Pending requests"},authorizeFail:{id:"group.group_mod_authorize.fail",defaultMessage:"Failed to approve @{name}"},rejectFail:{id:"group.group_mod_reject.fail",defaultMessage:"Failed to reject @{name}"}}),J=function(l){var a=l.account,p=l.onAuthorize,i=l.onReject;if(!a)return null;var f=function(){return p(a)},u=function(){return i(a)};return e(U,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,e("div",{className:"w-full"},void 0,e(B,{account:a,withRelationship:!1})),e(x,{onAuthorize:f,onReject:u,countdown:3e3}))},$=function(l){var a=l.params,p=a==null?void 0:a.groupId,i=S(),f=C(p),u=f.group,n=E(p),_=n.accounts,w=n.authorize,A=n.reject,R=n.refetch,q=n.isLoading,y=X(p,I.USER),F=y.invalidate;if(L.useEffect(function(){return function(){F()}},[]),!u||!u.relationship||q)return e(b,{label:i.formatMessage(h.heading)},void 0,e(T,{}));if(!u.relationship.role||!["owner","admin","moderator"].includes(u.relationship.role))return e(H,{});function G(t){return g.apply(this,arguments)}function g(){return g=M(regeneratorRuntime.mark(function t(m){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",w(m.id).then(function(){return Promise.resolve()}).catch(function(c){var s;R();var d=i.formatMessage(h.authorizeFail,{name:m.username});if(((s=c.response)===null||s===void 0?void 0:s.status)===409){var o;d=((o=c.response)===null||o===void 0?void 0:o.data).error}return j.error(d),Promise.reject()}));case 1:case"end":return r.stop()}},t)})),g.apply(this,arguments)}function k(t){return v.apply(this,arguments)}function v(){return v=M(regeneratorRuntime.mark(function t(m){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",A(m.id).then(function(){return Promise.resolve()}).catch(function(c){var s;R();var d=i.formatMessage(h.rejectFail,{name:m.username});if(((s=c.response)===null||s===void 0?void 0:s.status)===409){var o;d=((o=c.response)===null||o===void 0?void 0:o.data).error}return j.error(d),Promise.reject()}));case 1:case"end":return r.stop()}},t)})),v.apply(this,arguments)}return e(b,{label:i.formatMessage(h.heading)},void 0,e(D,{scrollKey:"group_membership_requests",emptyMessage:e(K,{id:"empty_column.group_membership_requests",defaultMessage:"There are no pending membership requests for this group."})},void 0,_.map(function(t){return e(J,{account:t,onAuthorize:G,onReject:k},t.id)})))};export{$ as default};