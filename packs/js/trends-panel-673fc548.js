import{R as c,a as e,eX as m,a3 as g,eY as u,bl as h,d as v,cu as f,hz as T,hA as F,u as w,F as y,L as A,y as x,o as z,eV as M}from"../index-220d7bfb.js";import{H as k}from"./hashtag-612b2918.js";import{W as D}from"./widget-a477fe82.js";import"./arrow-right-b75290c7.js";const H=function(i){var t=i.limit,s=u(6,3),l=u(10,3);return c.createElement(c.Fragment,null,new Array(t).fill(void 0).map(function(r,n){return e(g,{className:"animate-pulse text-primary-200 dark:text-primary-700"},n,e("p",{},void 0,m(s)),e("p",{},void 0,m(l)))}))};function P(){const i=h(),t=v();return f(["trends"],async()=>{const{data:r}=await i.get("/api/v1/trends");return t(T(r)),r.map(a=>F(a))},{placeholderData:[],staleTime:6e5})}var R=z({viewAll:{id:"trendsPanel.viewAll",defaultMessage:"View all"}}),b=function(t){var s=t.limit,l=v(),r=w(),n=P(),a=n.data,o=n.isFetching,p=function(){l(M("hashtags"))};return!o&&!(a!=null&&a.length)?null:e(D,{title:e(y,{id:"trends.title",defaultMessage:"Trends"}),action:e(A,{className:"text-right",to:"/search",onClick:p},void 0,e(x,{tag:"span",theme:"primary",size:"sm",className:"hover:underline"},void 0,r.formatMessage(R.viewAll)))},void 0,o?e(H,{limit:s}):a==null?void 0:a.slice(0,s).map(function(d){return e(k,{hashtag:d},d.name)}))};export{b as default};
