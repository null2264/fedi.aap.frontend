import{R as c,a as e,eV as m,a3 as g,eW as u,bl as h,d as v,cs as f,hx as T,hy as F,u as y,F as w,L as x,y as A,o as M,eT as k}from"../index-40995b31.js";import{H as z}from"./hashtag-4e04b4ee.js";import{W as D}from"./widget-bdbc782f.js";import"./arrow-right-b75290c7.js";const H=function(i){var t=i.limit,s=u(6,3),l=u(10,3);return c.createElement(c.Fragment,null,new Array(t).fill(void 0).map(function(r,n){return e(g,{className:"animate-pulse text-primary-200 dark:text-primary-700"},n,e("p",{},void 0,m(s)),e("p",{},void 0,m(l)))}))};function P(){const i=h(),t=v();return f(["trends"],async()=>{const{data:r}=await i.get("/api/v1/trends");return t(T(r)),r.map(a=>F(a))},{placeholderData:[],staleTime:6e5})}var R=M({viewAll:{id:"trendsPanel.viewAll",defaultMessage:"View all"}}),_=function(t){var s=t.limit,l=v(),r=y(),n=P(),a=n.data,o=n.isFetching,p=function(){l(k("hashtags"))};return!o&&!(a!=null&&a.length)?null:e(D,{title:e(w,{id:"trends.title",defaultMessage:"Trends"}),action:e(x,{className:"text-right",to:"/search",onClick:p},void 0,e(A,{tag:"span",theme:"primary",size:"sm",className:"hover:underline"},void 0,r.formatMessage(R.viewAll)))},void 0,o?e(H,{limit:s}):a==null?void 0:a.slice(0,s).map(function(d){return e(z,{hashtag:d},d.name)}))};export{_ as default};
