import{a,y as K,aG as oe,a5 as re,r as U,at as q,H as R,bL as P,bj as z,c8 as G,c9 as J,ca as A,u as x,cb as ne,o as N,cc as de,d as Q,bH as ie,cd as ue,bp as T,b8 as ge,g as me,b3 as ce,ce as fe,aC as ve,bu as L,a2 as le,cf as pe,b2 as he,af as H,cg as _e,ag as w,F as l,ah as $,aa as j,ch as Me,ci as we,cj as ye,ck as Ce}from"../index-4ca636bc.js";var Se=function(d){var r=d.tag,n=d.onDelete;return a("div",{className:"inline-flex items-center whitespace-nowrap rounded bg-primary-500 p-1"},void 0,a(K,{theme:"white"},void 0,r),a(oe,{iconClassName:"h-4 w-4",src:re,onClick:function(){return n(r)}}))},Te=function(d){var r=d.tags,n=d.onChange,c=d.placeholder,m=U.useState(""),s=q(m,2),e=s[0],u=s[1],t=function(v){n(r.filter(function(p){return p!==v}))},o=function(v){var p=v.key,_=e.trim();if(p==="Tab"&&v.preventDefault(),[",","Tab","Enter"].includes(p)&&_.length&&!r.includes(_)&&(v.preventDefault(),n([].concat(P(r),[_])),u("")),p==="Backspace"&&!e.length&&r.length){v.preventDefault();var y=P(r);y.pop(),n(y)}};return a("div",{className:"relative mt-1 grow shadow-sm"},void 0,a(R,{className:"block w-full rounded-md border-gray-400 bg-white p-2 pb-0 text-gray-900 placeholder:text-gray-600 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:ring-1 dark:ring-gray-800 dark:placeholder:text-gray-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm",space:2,wrap:!0},void 0,r.map(function(i,v){return a("div",{className:"mb-2"},void 0,a(Se,{tag:i,onDelete:t}))}),a("input",{className:"mb-2 h-8 w-32 grow bg-transparent p-1 outline-none",value:e,placeholder:c,onChange:function(v){return u(v.target.value)},onKeyDown:o})))};function Ae(){const f=z(),d=G(),{transaction:r}=J();function n(s,e){const u=t=>(t.pleroma&&(t.pleroma.is_suggested=e),t);r({Accounts:s.reduce((t,o)=>({...t,[o]:u}),{})})}async function c(s,e){var t,o;const u=A(d(),s);n(s,!0);try{await f.patch("/api/v1/pleroma/admin/users/suggest",{nicknames:u}),(t=e==null?void 0:e.onSuccess)==null||t.call(e)}catch(i){(o=e==null?void 0:e.onError)==null||o.call(e,i),n(s,!1)}}async function m(s,e){var t,o;const u=A(d(),s);n(s,!1);try{await f.patch("/api/v1/pleroma/admin/users/unsuggest",{nicknames:u}),(t=e==null?void 0:e.onSuccess)==null||t.call(e)}catch(i){(o=e==null?void 0:e.onError)==null||o.call(e,i),n(s,!0)}}return{suggest:c,unsuggest:m}}function De(){const f=z(),d=G(),{transaction:r}=J();function n(s,e){const u=t=>{if(t.pleroma){const o=t.pleroma.tags.filter(i=>i!=="verified");e&&o.push("verified"),t.pleroma.tags=o}return t.verified=e,t};r({Accounts:s.reduce((t,o)=>({...t,[o]:u}),{})})}async function c(s,e){var t,o;const u=A(d(),s);n(s,!0);try{await f.put("/api/v1/pleroma/admin/users/tag",{nicknames:u,tags:["verified"]}),(t=e==null?void 0:e.onSuccess)==null||t.call(e)}catch(i){(o=e==null?void 0:e.onError)==null||o.call(e,i),n(s,!1)}}async function m(s,e){var t,o;const u=A(d(),s);n(s,!1);try{await f.delete("/api/v1/pleroma/admin/users/tag",{data:{nicknames:u,tags:["verified"]}}),(t=e==null?void 0:e.onSuccess)==null||t.call(e)}catch(i){(o=e==null?void 0:e.onError)==null||o.call(e,i),n(s,!0)}}return{verify:c,unverify:m}}var Ee=N({placeholder:{id:"badge_input.placeholder",defaultMessage:"Enter a badge…"}}),Be=function(d){var r=d.badges,n=d.onChange,c=x(),m=r.map(ne),s=function(u){var t=u.map(de);n(t)};return a(Te,{tags:m,onChange:s,placeholder:c.formatMessage(Ee.placeholder)})},Re=function(d){return d.admin?"admin":d.moderator?"moderator":"user"},h=N({roleUser:{id:"account_moderation_modal.roles.user",defaultMessage:"User"},roleModerator:{id:"account_moderation_modal.roles.moderator",defaultMessage:"Moderator"},roleAdmin:{id:"account_moderation_modal.roles.admin",defaultMessage:"Admin"},promotedToAdmin:{id:"admin.users.actions.promote_to_admin_message",defaultMessage:"@{acct} was promoted to an admin"},promotedToModerator:{id:"admin.users.actions.promote_to_moderator_message",defaultMessage:"@{acct} was promoted to a moderator"},demotedToModerator:{id:"admin.users.actions.demote_to_moderator_message",defaultMessage:"@{acct} was demoted to a moderator"},demotedToUser:{id:"admin.users.actions.demote_to_user_message",defaultMessage:"@{acct} was demoted to a regular user"}}),Ue=function(d){var r=d.account,n=x(),c=Q(),m=U.useMemo(function(){return{user:n.formatMessage(h.roleUser),moderator:n.formatMessage(h.roleModerator),admin:n.formatMessage(h.roleAdmin)}},[]),s=function(t){var o=t.target.value;c(ue(r.id,o)).then(function(){var i;o==="admin"?i=h.promotedToAdmin:o==="moderator"&&r.admin?i=h.demotedToModerator:o==="moderator"?i=h.promotedToModerator:o==="user"&&(i=h.demotedToUser),i&&T.success(n.formatMessage(i,{acct:r.acct}))}).catch(function(){})},e=Re(r);return a(ie,{items:m,defaultValue:e,onChange:s})},S=N({userVerified:{id:"admin.users.user_verified_message",defaultMessage:"@{acct} was verified"},userUnverified:{id:"admin.users.user_unverified_message",defaultMessage:"@{acct} was unverified"},setDonorSuccess:{id:"admin.users.set_donor_message",defaultMessage:"@{acct} was set as a donor"},removeDonorSuccess:{id:"admin.users.remove_donor_message",defaultMessage:"@{acct} was removed as a donor"},userSuggested:{id:"admin.users.user_suggested_message",defaultMessage:"@{acct} was suggested"},userUnsuggested:{id:"admin.users.user_unsuggested_message",defaultMessage:"@{acct} was unsuggested"},badgesSaved:{id:"admin.users.badges_saved_message",defaultMessage:"Custom badges updated."}}),Ne=function(d){var r,n=d.onClose,c=d.accountId,m=x(),s=Q(),e=Ae(),u=e.suggest,t=e.unsuggest,o=De(),i=o.verify,v=o.unverify,p=ge(),_=p.account,y=me(),W=ce(c),g=W.account,V=g?fe(g):[],X=U.useState(V),I=q(X,2),F=I[0],Y=I[1],O=function(){return n("ACCOUNT_MODERATION")};if(!g||!_)return a(L,{onClose:O},void 0,a(ve,{}));var Z=function(){window.open("/pleroma/admin/#/users/".concat(g.id,"/"),"_blank")},b=function(D){var C=D.target.checked,E=C?S.userVerified:S.userUnverified,B=C?i:v;B([g.id],{onSuccess:function(){return T.success(m.formatMessage(E,{acct:g.acct}))}})},k=function(D){var C=D.target.checked,E=C?S.userSuggested:S.userUnsuggested,B=C?u:t;B([g.id],{onSuccess:function(){return T.success(m.formatMessage(E,{acct:g.acct}))}})},ee=function(){s(we(m,g.id))},ae=function(){s(ye(m,g.id))},te=function(){s(Ce(g.id,V,F)).then(function(){return T.success(m.formatMessage(S.badgesSaved))}).catch(function(){})};return a(L,{title:a(l,{id:"account_moderation_modal.title",defaultMessage:"Moderate @{acct}",values:{acct:g.acct}}),onClose:O},void 0,a(le,{space:4},void 0,a(pe,{},void 0,a(he,{account:g,showProfileHoverCard:!1,withLinkToProfile:!1,hideActions:!0})),a(H,{},void 0,_.admin&&_e(g)&&a(w,{label:a(l,{id:"account_moderation_modal.fields.account_role",defaultMessage:"Staff level"})},void 0,a("div",{className:"w-auto"},void 0,a(Ue,{account:g}))),a(w,{label:a(l,{id:"account_moderation_modal.fields.verified",defaultMessage:"Verified account"})},void 0,a($,{checked:g.verified,onChange:b})),y.suggestionsV2&&a(w,{label:a(l,{id:"account_moderation_modal.fields.suggested",defaultMessage:"Suggested in people to follow"})},void 0,a($,{checked:((r=g.pleroma)===null||r===void 0?void 0:r.is_suggested)===!0,onChange:k})),a(w,{label:a(l,{id:"account_moderation_modal.fields.badges",defaultMessage:"Custom badges"})},void 0,a("div",{className:"grow"},void 0,a(R,{className:"w-full",alignItems:"center",space:2},void 0,a(Be,{badges:F,onChange:Y}),a(j,{onClick:te},void 0,a(l,{id:"save",defaultMessage:"Save"})))))),a(H,{},void 0,a(w,{label:a(l,{id:"account_moderation_modal.fields.deactivate",defaultMessage:"Deactivate account"}),onClick:ee}),a(w,{label:a(l,{id:"account_moderation_modal.fields.delete",defaultMessage:"Delete account"}),onClick:ae})),a(K,{theme:"subtle",size:"xs"},void 0,a(l,{id:"account_moderation_modal.info.id",defaultMessage:"ID: {id}",values:{id:g.id}})),y.adminFE&&a(R,{justifyContent:"center"},void 0,a(j,{icon:Me,size:"sm",theme:"secondary",onClick:Z},void 0,a(l,{id:"account_moderation_modal.admin_fe",defaultMessage:"Open in AdminFE"})))))};export{Ne as default};
