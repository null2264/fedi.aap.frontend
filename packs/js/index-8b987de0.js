import{u as v,d as M,q as h,r as d,at as k,fC as y,a as e,y as p,bI as b,aa as _,X as B,o as C,fD as A}from"../index-4ca636bc.js";import{S}from"./scrollable-list-28d0deac.js";import"./index-d02c21e2.js";import"./load-more-66579daa.js";var t=C({heading:{id:"column.backups",defaultMessage:"Backups"},create:{id:"backups.actions.create",defaultMessage:"Create backup"},emptyMessage:{id:"backups.empty_message",defaultMessage:"No backups found. {action}"},emptyMessageAction:{id:"backups.empty_message.action",defaultMessage:"Create one now?"},pending:{id:"backups.pending",defaultMessage:"Pending"}}),I=function(){var s=v(),i=M(),o=h(function(a){return a.backups.toList().sortBy(function(r){return r.inserted_at})}),m=d.useState(!0),c=k(m,2),n=c[0],l=c[1],u=function(r){i(A()),r.preventDefault()};d.useEffect(function(){i(y()).then(function(){l(!1)}).catch(function(){})},[]);var f=n&&o.count()===0,g=e("a",{href:"#",onClick:u},void 0,e(p,{tag:"span",theme:"primary",size:"sm",className:"hover:underline"},void 0,s.formatMessage(t.emptyMessageAction)));return e(B,{label:s.formatMessage(t.heading)},void 0,e(S,{isLoading:n,showLoading:f,scrollKey:"backups",emptyMessage:s.formatMessage(t.emptyMessage,{action:g})},void 0,o.map(function(a){return e("div",{className:"p-4"},a.id,a.processed?e("a",{href:a.url,target:"_blank"},void 0,a.inserted_at):e(p,{theme:"subtle"},void 0,s.formatMessage(t.pending),": ",a.inserted_at))})),e(b,{},void 0,e(_,{theme:"primary",disabled:n,onClick:u},void 0,s.formatMessage(t.create))))};export{I as default};
