import{r as L,u as B,d as Q,q as u,b3 as W,eQ as X,a,B as N,R as C,y as Y,F as M,a9 as j,a5 as G,H as J,W as T,eR as Z,eS as ee,T as ae,aO as se,o as D,eT as te,eU as re,X as ne}from"../index-384d6887.js";import{H as k}from"./hashtag-22a077e5.js";import{S as oe}from"./scrollable-list-6f6370f5.js";import{S as U}from"./status-container-18d57bfb.js";import{P as ce}from"./placeholder-account-0432ff81.js";import{P as ue}from"./placeholder-hashtag-325a6ee6.js";import"./index-9ae51821.js";import"./load-more-2ae55fa9.js";var R=D({accounts:{id:"search_results.accounts",defaultMessage:"People"},statuses:{id:"search_results.statuses",defaultMessage:"Posts"},hashtags:{id:"search_results.hashtags",defaultMessage:"Hashtags"}}),ie=function(){var i,P=L.useRef(null),y=B(),h=Q(),f=u(function(e){return e.search.submittedValue}),s=u(function(e){return e.search.results}),l=u(function(e){return e.suggestions.items}),v=u(function(e){return e.trending_statuses.items}),z=u(function(e){return e.trends.items}),d=u(function(e){return e.search.submitted}),n=u(function(e){return e.search.filter}),w=u(function(e){return e.search.accountId||void 0}),V=W(w),S=V.account,$=function(){return h(Z(n))},K=function(){return h(ee(null))},b=function(t){return h(te(t))},O=function(){var t=[];return t.push({text:y.formatMessage(R.accounts),action:function(){return b("accounts")},name:"accounts"},{text:y.formatMessage(R.statuses),action:function(){return b("statuses")},name:"statuses"}),t.push({text:y.formatMessage(R.hashtags),action:function(){return b("hashtags")},name:"hashtags"}),a(ae,{items:t,activeItem:n})},A=function(t){var r;return(r=m)===null||r===void 0?void 0:r.keySeq().findIndex(function(H){return H===t})},F=function(t){if(m){var r=A(t)-1;E(r)}},I=function(t){if(m){var r=A(t)+1;E(r)}},E=function(t){var r;(r=P.current)===null||r===void 0||r.scrollIntoView({index:t,behavior:"smooth",done:function(){var x=document.querySelector('#search-results [data-index="'.concat(t,'"] .focusable'));x==null||x.focus()}})};L.useEffect(function(){h(X())},[]);var o,p=!1,c,g,_=function(){return a(se,{showPrivacyIndicator:!0})},m;return n==="accounts"&&(p=s.accountsHasMore,c=s.accountsLoaded,_=ce,s.accounts&&s.accounts.size>0?o=s.accounts.map(function(e){return a(N,{id:e},e)}):!d&&l&&!l.isEmpty()?o=l.map(function(e){return a(N,{id:e.account},e.account)}):c&&(g=a("div",{className:"empty-column-indicator"},void 0,a(M,{id:"empty_column.search.accounts",defaultMessage:'There are no people results for "{term}"',values:{term:f}})))),n==="statuses"&&(p=s.statusesHasMore,c=s.statusesLoaded,s.statuses&&s.statuses.size>0?(o=s.statuses.map(function(e){return a(U,{id:e,onMoveUp:F,onMoveDown:I},e)}),m=s.statuses):!d&&v&&!v.isEmpty()?(o=v.map(function(e){return a(U,{id:e,onMoveUp:F,onMoveDown:I},e)}),m=v):c&&(g=a("div",{className:"empty-column-indicator"},void 0,a(M,{id:"empty_column.search.statuses",defaultMessage:'There are no posts results for "{term}"',values:{term:f}})))),n==="hashtags"&&(p=s.hashtagsHasMore,c=s.hashtagsLoaded,_=ue,s.hashtags&&s.hashtags.size>0?o=s.hashtags.map(function(e){return a(k,{hashtag:e},e.name)}):!d&&l&&!l.isEmpty()?o=z.map(function(e){return a(k,{hashtag:e},e.name)}):c&&(g=a("div",{className:"empty-column-indicator"},void 0,a(M,{id:"empty_column.search.hashtags",defaultMessage:'There are no hashtags results for "{term}"',values:{term:f}})))),C.createElement(C.Fragment,null,w?a(J,{className:"mb-4 border-b border-solid border-gray-200 px-2 pb-4 dark:border-gray-800",space:2},void 0,a(j,{iconClassName:"h-5 w-5",src:G,onClick:K}),a(Y,{truncate:!0},void 0,a(M,{id:"search_results.filter_message",defaultMessage:"You are searching for posts from @{acct}.",values:{acct:a("strong",{className:"break-words"},void 0,S==null?void 0:S.acct)}}))):O(),g||C.createElement(oe,{id:"search-results",ref:P,key:n,scrollKey:"".concat(n,":").concat(f),isLoading:d&&!c,showLoading:d&&!c&&((i=o)===null||i===void 0?void 0:i.isEmpty()),hasMore:p,onLoadMore:$,placeholderComponent:_,placeholderCount:20,className:T({"divide-gray-200 dark:divide-gray-800 divide-solid divide-y":n==="statuses"}),itemClassName:T({"pb-4":n==="accounts","pb-3":n==="hashtags"})},o||[]))},le=D({heading:{id:"column.search",defaultMessage:"Search"}}),ye=function(){var i=B();return a(ne,{label:i.formatMessage(le.heading)},void 0,a("div",{className:"space-y-4"},void 0,a(re,{autoFocus:!0,autoSubmit:!0}),a(ie,{})))};export{ye as default};