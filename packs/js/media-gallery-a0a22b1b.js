import{v as ae}from"./volume-08f8a8f1.js";import{r as Y,at as J,a as u,R as ee,W as I,f as te,aU as ie,du as le,dv as re,dw as oe,I as Q,dj as Z,dh as ne,di as $,av as se}from"../index-4ca636bc.js";import{i as l,m as b,a as e,b as o,c as G}from"./media-aspect-ratio-df6a7bb1.js";var H=4,pe=45,he=function(h){return h>=G&&h<=b},ue=function(h){var t=h.getIn(["meta","original","aspect"]);return t?!he(t):!0},de=function(h){var t=h.attachment,L=h.index,M=h.onClick,R=h.standalone,O=R===void 0?!1:R,W=h.visible,g=h.dimensions,F=h.last,_=h.total,U=te(),T=U.get("autoPlayGif")===!0,z=ie(),N=z.mediaPreview,q=function(c){var w=c.currentTarget;E()&&w.play()},k=function(c){var w=c.currentTarget;E()&&(w.pause(),w.currentTime=0)},E=function(){return!T&&t.type==="gifv"},S=function(c){$()&&!c.target.autoPlay?(c.target.autoPlay=!0,c.preventDefault()):c.button===0&&!(c.ctrlKey||c.metaKey)&&(E()&&(c.target.pause(),c.target.currentTime=0),c.preventDefault(),M(L)),c.stopPropagation()},K=function(c){var w=c.currentTarget;w.playbackRate=3,w.play()},j=function(c){var w=c.currentTarget;w.pause(),w.currentTime=0},y=100,P="100%",f="auto",s="auto",r="auto",x="auto",d="left",v="relative";g&&(y=g.w,P=g.h,f=g.t||"auto",x=g.r||"auto",r=g.b||"auto",s=g.l||"auto",d=g.float||"left",v=g.pos||"relative");var p="";if(t.type==="unknown"){var B=le(t.url,pe),C=u(Q,{className:"h-16 w-16 text-gray-800 dark:text-gray-200",src:re[t.getIn(["pleroma","mime_type"])]||oe});return u("div",{className:I("media-gallery__item",{standalone:O,"rounded-md":_>1}),style:{position:v,float:d,left:s,top:f,right:x,bottom:r,height:P,width:"".concat(y,"%")}},t.id,u("a",{className:"media-gallery__item-thumbnail",href:t.url,target:"_blank",style:{cursor:"pointer"}},void 0,u(Z,{hash:t.blurhash,className:"media-gallery__preview"}),u("span",{className:"media-gallery__item__icons"},void 0,C),u("span",{className:"media-gallery__filename__label"},void 0,B)))}else if(t.type==="image"){var i=_===1&&ue(t);p=u("a",{className:"media-gallery__item-thumbnail",href:t.url,onClick:S,target:"_blank"},void 0,u(ne,{className:"h-full w-full",src:N?t.preview_url:t.url,alt:t.description,letterboxed:i,showExt:!0}))}else if(t.type==="gifv"){var a={};$()&&(a.playsInline=!0),T&&(a.autoPlay=!0),p=u("div",{className:I("media-gallery__gifv",{autoplay:T})},void 0,ee.createElement("video",se({className:"media-gallery__item-gifv-thumbnail","aria-label":t.description,title:t.description,role:"application",src:t.url,onClick:S,onMouseEnter:q,onMouseLeave:k,loop:!0,muted:!0},a)),u("span",{className:"media-gallery__gifv__label"},void 0,"GIF"))}else if(t.type==="audio"){var n,m=(n=t.url.split(".").pop())===null||n===void 0?void 0:n.toUpperCase();p=u("a",{className:I("media-gallery__item-thumbnail"),href:t.url,onClick:S,target:"_blank",title:t.description},void 0,u("span",{className:"media-gallery__item__icons"},void 0,u(Q,{src:ae})),u("span",{className:"media-gallery__file-extension__label"},void 0,m))}else if(t.type==="video"){var A,X=(A=t.url.split(".").pop())===null||A===void 0?void 0:A.toUpperCase();p=u("a",{className:I("media-gallery__item-thumbnail"),href:t.url,onClick:S,target:"_blank",title:t.description},void 0,u("video",{muted:!0,loop:!0,onMouseOver:K,onMouseOut:j},void 0,u("source",{src:t.url})),u("span",{className:"media-gallery__file-extension__label"},void 0,X))}return u("div",{className:I("media-gallery__item","media-gallery__item--".concat(t.type),{standalone:O,"rounded-md":_>1}),style:{position:v,float:d,left:s,top:f,right:x,bottom:r,height:P,width:"".concat(y,"%")}},t.id,F&&_>H&&u("div",{className:"media-gallery__item-overflow"},void 0,"+",_-H+1),u(Z,{hash:t.blurhash,className:"media-gallery__preview"}),W&&p)},fe=function(h){var t=h.media,L=h.defaultWidth,M=L===void 0?0:L,R=h.className,O=h.onOpenMedia,W=h.cacheWidth,g=h.compact,F=h.height,_=h.sensitiveOverlay,U=_===void 0?null:_,T=Y.useState(M),z=J(T,2),N=z[0],q=z[1],k=Y.useRef(null),E=function(s){O(t,s)},S=function(){var s=N||M,r=t.getIn([0,"meta","original","aspect"]),x=function(){return r?e(r)?Math.floor(s/b):l(r)?Math.floor(s/G):Math.floor(s/r):s*9/16};return{style:{height:x()},itemsDimensions:[],size:1,width:N}},K=function(s){var r=N||M,x=Math.floor(r/b),d="".concat(Math.floor(r/b),"px"),v={},p=[],B=Array(s).fill(null).map(function(A,X){return t.getIn([X,"meta","original","aspect"])}),C=J(B,4),i=C[0],a=C[1],n=C[2],m=C[3];return s===2?(l(i)&&l(a)?v.height=r-r/b:e(i)&&e(a)?v.height=x*2:e(i)&&l(a)||l(i)&&e(a)||e(i)&&o(a)||o(i)&&e(a)?v.height=r*.6+r/b:v.height=r/2,l(i)&&l(a)?p=[{w:50,h:"100%",r:"2px"},{w:50,h:"100%",l:"2px"}]:e(i)&&e(a)?p=[{w:100,h:d,b:"2px"},{w:100,h:d,t:"2px"}]:e(i)&&l(a)||e(i)&&o(a)?p=[{w:100,h:"".concat(r/b,"px"),b:"2px"},{w:100,h:"".concat(r*.6,"px"),t:"2px"}]:l(i)&&e(a)||o(i)&&e(a)?p=[{w:100,h:"".concat(r*.6,"px"),b:"2px"},{w:100,h:"".concat(r/b,"px"),t:"2px"}]:p=[{w:50,h:"100%",r:"2px"},{w:50,h:"100%",l:"2px"}]):s===3?(e(i)&&e(a)&&e(n)?v.height=x*3:l(i)&&l(a)&&l(n)?v.height=Math.floor(r/G):v.height=r,e(i)&&o(a)&&o(n)?p=[{w:100,h:"50%",b:"2px"},{w:50,h:"50%",t:"2px",r:"2px"},{w:50,h:"50%",t:"2px",l:"2px"}]:e(i)&&e(a)&&e(n)?p=[{w:100,h:d,b:"4px"},{w:100,h:d},{w:100,h:d,t:"4px"}]:l(i)&&o(a)&&o(n)?p=[{w:50,h:"100%",r:"2px"},{w:50,h:"50%",b:"2px",l:"2px"},{w:50,h:"50%",t:"2px",l:"2px"}]:o(i)&&o(a)&&l(n)?p=[{w:50,h:"50%",b:"2px",r:"2px"},{w:50,h:"50%",l:"-2px",b:"-2px",pos:"absolute",float:"none"},{w:50,h:"100%",r:"-2px",t:"0px",b:"0px",pos:"absolute",float:"none"}]:o(i)&&l(a)&&o(n)||l(i)&&l(a)&&l(n)?p=[{w:50,h:"50%",b:"2px",r:"2px"},{w:50,h:"100%",l:"2px",float:"right"},{w:50,h:"50%",t:"2px",r:"2px"}]:e(i)&&e(a)&&o(n)||e(i)&&e(a)&&l(n)?p=[{w:50,h:d,b:"2px",r:"2px"},{w:50,h:d,b:"2px",l:"2px"},{w:100,h:"".concat(r-x,"px"),t:"2px"}]:o(i)&&e(a)&&e(n)||l(i)&&e(a)&&e(n)?p=[{w:100,h:"".concat(r-x,"px"),b:"2px"},{w:50,h:d,t:"2px",r:"2px"},{w:50,h:d,t:"2px",l:"2px"}]:p=[{w:50,h:"50%",b:"2px",r:"2px"},{w:50,h:"50%",b:"2px",l:"2px"},{w:100,h:"50%",t:"2px"}]):s>=4&&(l(i)&&l(a)&&l(n)&&l(m)||l(i)&&l(a)&&l(n)&&o(m)||l(i)&&l(a)&&o(n)&&l(m)||l(i)&&o(a)&&l(n)&&l(m)||o(i)&&l(a)&&l(n)&&l(m)?v.height=Math.floor(r/G):e(i)&&e(a)&&e(n)&&e(m)?v.height=x*2:e(i)&&e(a)&&o(n)&&o(m)||o(i)&&o(a)&&e(n)&&e(m)?v.height=x+r/2:v.height=r,e(i)&&e(a)&&o(n)&&o(m)?p=[{w:50,h:d,b:"2px",r:"2px"},{w:50,h:d,b:"2px",l:"2px"},{w:50,h:"".concat(r/2,"px"),t:"2px",r:"2px"},{w:50,h:"".concat(r/2,"px"),t:"2px",l:"2px"}]:o(i)&&o(a)&&e(n)&&e(m)?p=[{w:50,h:"".concat(r/2,"px"),b:"2px",r:"2px"},{w:50,h:"".concat(r/2,"px"),b:"2px",l:"2px"},{w:50,h:d,t:"2px",r:"2px"},{w:50,h:d,t:"2px",l:"2px"}]:l(i)&&o(a)&&o(n)&&o(m)||l(i)&&e(a)&&e(n)&&e(m)?p=[{w:67,h:"100%",r:"2px"},{w:33,h:"33%",b:"4px",l:"2px"},{w:33,h:"33%",l:"2px"},{w:33,h:"33%",t:"4px",l:"2px"}]:p=[{w:50,h:"50%",b:"2px",r:"2px"},{w:50,h:"50%",b:"2px",l:"2px"},{w:50,h:"50%",t:"2px",r:"2px"},{w:50,h:"50%",t:"2px",l:"2px"}]),{style:v,itemsDimensions:p,size:s,width:r}},j=function(s){var r=N||M;if(r){if(s===1)return S();if(s>1)return K(s)}return{style:{height:F},itemsDimensions:[],size:s,width:r}},y=j(t.size),P=t.take(H).map(function(f,s){return u(de,{onClick:E,attachment:f,index:s,size:y.size,displayWidth:y.width,visible:!!h.visible,dimensions:y.itemsDimensions[s],last:s===H-1,total:t.size},f.id)});return Y.useLayoutEffect(function(){if(k.current){var f=k.current.offsetWidth;W&&W(f),q(f)}},[k.current]),ee.createElement("div",{className:I(R,"media-gallery",{"media-gallery--compact":g}),style:y.style,ref:k},U,P)};export{fe as default};
