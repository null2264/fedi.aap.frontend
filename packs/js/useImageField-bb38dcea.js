import{r as o,fb as s}from"../index-cc004e11.js";import{u as i}from"./header-picker-b8137733.js";function f(e={}){const[r,n]=o.useState();return{src:i(r)||(r===null?void 0:e.preview),file:r,onChange:async({target:{files:t}})=>{const a=t==null?void 0:t.item(0);a&&(typeof e.maxPixels=="number"?n(await s(a,e.maxPixels)):n(a))},onClear:()=>n(null)}}export{f as u};