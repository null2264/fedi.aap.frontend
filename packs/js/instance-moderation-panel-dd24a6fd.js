import{v as l}from"./dots-vertical-68cbc8e2.js";import{eq as f,u as v,d as p,bb as g,q as M,a as e,F as _,cO as I,fY as R,o as F,aH as h}from"../index-40995b31.js";import{W as E}from"./widget-bdbc782f.js";import{I as A}from"./instance-restrictions-35111ccb.js";import"./arrow-right-b75290c7.js";var q=f(),w=F({editFederation:{id:"remote_instance.edit_federation",defaultMessage:"Edit federation"}}),T=function(i){var n=i.host,o=v(),s=p(),r=g(),t=r.account,d=M(function(a){return q(a,n)}),c=function(){s(h("EDIT_FEDERATION",{host:n}))},u=function(){return[{text:o.formatMessage(w.editFederation),action:c,icon:R}]},m=u();return e(E,{title:e(_,{id:"remote_instance.federation_panel.heading",defaultMessage:"Federation Restrictions"}),action:t!=null&&t.admin?e(I,{items:m,src:l}):void 0},void 0,e(A,{remoteInstance:d}))};export{T as default};
