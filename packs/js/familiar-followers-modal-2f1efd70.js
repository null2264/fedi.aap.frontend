import{cJ as f,q as i,a8 as v,a,F as m,B as p,bw as _,aF as w}from"../index-220d7bfb.js";import{S as y}from"./scrollable-list-246541a8.js";import"./index-8fdb89e6.js";import"./load-more-65d410f3.js";var F=f(),I=function(n){var r=n.accountId,u=n.onClose,o=i(function(e){return F(e,r)}),t=i(function(e){var s;return((s=e.user_lists.familiar_followers.get(r))===null||s===void 0?void 0:s.items)||v()}),c=function(){u("FAMILIAR_FOLLOWERS")},l;if(!o||!t)l=a(w,{});else{var d=a(m,{id:"account.familiar_followers.empty",defaultMessage:"No one you know follows {name}.",values:{name:a("span",{dangerouslySetInnerHTML:{__html:o.display_name_html}})}});l=a(y,{scrollKey:"familiar_followers",emptyMessage:d,itemClassName:"pb-3",style:{height:"80vh"},useWindowScroll:!1},void 0,t.map(function(e){return a(p,{id:e},e)}))}return a(_,{title:a(m,{id:"column.familiar_followers",defaultMessage:"People you know following {name}",values:{name:a("span",{dangerouslySetInnerHTML:{__html:(o==null?void 0:o.display_name_html)||""}})}}),onClose:c},void 0,l)};export{I as default};
