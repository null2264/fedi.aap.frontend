import{v as l}from"./dots-vertical-68cbc8e2.js";import{eq as f,u as v,d as p,b8 as g,q as M,a as e,F as _,cO as I,fY as R,o as F,aD as h}from"../index-384d6887.js";import{W as E}from"./widget-601c5865.js";import{I as A}from"./instance-restrictions-ee69e855.js";import"./arrow-right-b75290c7.js";var D=f(),q=F({editFederation:{id:"remote_instance.edit_federation",defaultMessage:"Edit federation"}}),W=function(i){var n=i.host,o=v(),s=p(),r=g(),t=r.account,d=M(function(a){return D(a,n)}),c=function(){s(h("EDIT_FEDERATION",{host:n}))},u=function(){return[{text:o.formatMessage(q.editFederation),action:c,icon:R}]},m=u();return e(E,{title:e(_,{id:"remote_instance.federation_panel.heading",defaultMessage:"Federation Restrictions"}),action:t!=null&&t.admin?e(I,{items:m,src:l}):void 0},void 0,e(A,{remoteInstance:d}))};export{W as default};