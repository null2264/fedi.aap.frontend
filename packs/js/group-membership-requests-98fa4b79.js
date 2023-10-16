import{u as S,e9 as E,kD as L,kz as C,r as I,a as e,aB as B,X as b,kL as H,F as N,o as T,b2 as D,H as K,aP as M,bp as j}from"../index-384d6887.js";import{u as U}from"./useGroupMembers-d6e9ec50.js";import{A as X}from"./authorize-reject-buttons-b6d23b6d.js";import{S as x}from"./scrollable-list-6f6370f5.js";import"./index-9ae51821.js";import"./load-more-2ae55fa9.js";var h=T({heading:{id:"column.group_pending_requests",defaultMessage:"Pending requests"},authorizeFail:{id:"group.group_mod_authorize.fail",defaultMessage:"Failed to approve @{name}"},rejectFail:{id:"group.group_mod_reject.fail",defaultMessage:"Failed to reject @{name}"}}),J=function(l){var a=l.account,p=l.onAuthorize,i=l.onReject;if(!a)return null;var f=function(){return p(a)},u=function(){return i(a)};return e(K,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,e("div",{className:"w-full"},void 0,e(D,{account:a,withRelationship:!1})),e(X,{onAuthorize:f,onReject:u,countdown:3e3}))},$=function(l){var a=l.params,p=a==null?void 0:a.groupId,i=S(),f=E(p),u=f.group,n=L(p),_=n.accounts,w=n.authorize,A=n.reject,R=n.refetch,q=n.isLoading,G=U(p,C.USER),y=G.invalidate;if(I.useEffect(function(){return function(){y()}},[]),!u||!u.relationship||q)return e(b,{label:i.formatMessage(h.heading)},void 0,e(B,{}));if(!u.relationship.role||!["owner","admin","moderator"].includes(u.relationship.role))return e(H,{});function F(t){return g.apply(this,arguments)}function g(){return g=M(regeneratorRuntime.mark(function t(m){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",w(m.id).then(function(){return Promise.resolve()}).catch(function(c){var s;R();var d=i.formatMessage(h.authorizeFail,{name:m.username});if(((s=c.response)===null||s===void 0?void 0:s.status)===409){var o;d=((o=c.response)===null||o===void 0?void 0:o.data).error}return j.error(d),Promise.reject()}));case 1:case"end":return r.stop()}},t)})),g.apply(this,arguments)}function k(t){return v.apply(this,arguments)}function v(){return v=M(regeneratorRuntime.mark(function t(m){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",A(m.id).then(function(){return Promise.resolve()}).catch(function(c){var s;R();var d=i.formatMessage(h.rejectFail,{name:m.username});if(((s=c.response)===null||s===void 0?void 0:s.status)===409){var o;d=((o=c.response)===null||o===void 0?void 0:o.data).error}return j.error(d),Promise.reject()}));case 1:case"end":return r.stop()}},t)})),v.apply(this,arguments)}return e(b,{label:i.formatMessage(h.heading)},void 0,e(x,{scrollKey:"group_membership_requests",emptyMessage:e(N,{id:"empty_column.group_membership_requests",defaultMessage:"There are no pending membership requests for this group."})},void 0,_.map(function(t){return e(J,{account:t,onAuthorize:F,onReject:k},t.id)})))};export{$ as default};