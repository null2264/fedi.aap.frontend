import{d as x,u as P,r as i,aL as T,q as L,at as M,Q as E,aM as N,a as t,aN as y,aC as B,aO as G,X as w,w as H,o as Q,aP as $,aQ as j}from"../index-4ca636bc.js";import{P as q}from"./pull-to-refresh-7d3e38dc.js";import{T as F}from"./thread-af0767d0.js";import"./scrollable-list-28d0deac.js";import"./index-d02c21e2.js";import"./load-more-66579daa.js";import"./pending-status-19ae051c.js";import"./poll-preview-5eae9da9.js";import"./noop-97e94be0.js";import"./status-container-95c8ae1e.js";var S=Q({title:{id:"status.title",defaultMessage:"Post Details"},titleDirect:{id:"status.title_direct",defaultMessage:"Direct message"},deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteHeading:{id:"confirmations.delete.heading",defaultMessage:"Delete post"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this post?"},redraftConfirm:{id:"confirmations.redraft.confirm",defaultMessage:"Delete & redraft"},redraftHeading:{id:"confirmations.redraft.heading",defaultMessage:"Delete & redraft"},redraftMessage:{id:"confirmations.redraft.message",defaultMessage:"Are you sure you want to delete this post and re-draft it? Favorites and reposts will be lost, and replies to the original post will be orphaned."},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},revealAll:{id:"status.show_more_all",defaultMessage:"Show more for all"},hideAll:{id:"status.show_less_all",defaultMessage:"Show less for all"},detailedStatus:{id:"status.detailed_status",defaultMessage:"Detailed conversation view"},replyConfirm:{id:"confirmations.reply.confirm",defaultMessage:"Reply"},replyMessage:{id:"confirmations.reply.message",defaultMessage:"Replying now will overwrite the message you are currently composing. Are you sure you want to proceed?"},blockAndReport:{id:"confirmations.block.block_and_report",defaultMessage:"Block & Report"}}),ae=function(s){var l=x(),_=P(),D=i.useCallback(T(),[]),e=L(function(a){return D(a,{id:s.params.statusId})}),b=i.useState(!!e),u=M(b,2),R=u[0],d=u[1],k=i.useState(),c=M(k,2),o=c[0],f=c[1],m=function(){var a=$(regeneratorRuntime.mark(function n(){var g,p,h,v;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return g=s.params,p=g.statusId,r.next=4,l(j(p));case 4:h=r.sent,v=h.next,f(v);case 7:case"end":return r.stop()}},n)}));return function(){return a.apply(this,arguments)}}();i.useEffect(function(){m().then(function(){d(!0)}).catch(function(){d(!0)})},[s.params.statusId]);var I=i.useCallback(E(function(){o&&e&&l(N(e.id,o)).then(function(a){var n=a.next;f(n)}).catch(function(){})},300,{leading:!0}),[o,e]),A=function(){return m()};if(e!=null&&e.event)return t(y,{to:"/@".concat(e.getIn(["account","acct"]),"/events/").concat(e.id)});if(!e&&R)return t(B,{});if(!e)return t(w,{},void 0,t(G,{showPrivacyIndicator:!0}));if(e.group&&H(e.group)==="object"&&e.group.slug&&!s.params.groupSlug)return t(y,{to:"/group/".concat(e.group.slug,"/posts/").concat(s.params.statusId)});var C=function(){return e.visibility==="direct"?S.titleDirect:S.title};return t(w,{label:_.formatMessage(C())},void 0,t(q,{onRefresh:A},void 0,t(F,{status:e,next:o,handleLoadMore:I})))};export{ae as default};
