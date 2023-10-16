import{a7 as O,a as e,a2 as r,y as m,F as N,aa as H,d as ne,u as R,g as ie,ay as me,fI as fe,fJ as ve,fK as pe,r as k,fL as be,q as ye,H as S,R as A,aG as E,d$ as q,d_ as Y,L as K,c7 as Q,cz as _e,fM as we,fN as G,fO as Ce,fP as Me,c6 as ke,fQ as Se,af as B,ag as M,fR as C,fS as J,A as X,fT as xe,fU as Ne,o as T,aD as F,c5 as Oe,fV as Pe,cy as I,b8 as V,f as De,at as $,bE as oe,fW as Ie,a_ as ce,ah as re,_ as le,a6 as Ee,fX as je,fY as Le,fZ as Re,W as Z,f_ as Te,f$ as W,g0 as Ue}from"../index-4ca636bc.js";import{C as Be,a as He,b as Ae,c as $e}from"./chat-search-input-5ea0e0f1.js";import{u as ue}from"./accounts-d3af160f.js";import{u as ze}from"./useDebounce-dbc5f52b.js";import"./es.array.splice-4ab5960e.js";import"./index-d02c21e2.js";import"./mood-smile-6a052395.js";import"./lodash-d5207a4f.js";import"./pull-to-refresh-7d3e38dc.js";var Fe=function(){var s=O(),a=function(){s.push("/chats/new")};return e(r,{space:6,alignItems:"center",justifyContent:"center",className:"h-full p-6"},void 0,e(r,{space:2,className:"max-w-sm"},void 0,e(m,{size:"2xl",weight:"bold",tag:"h2",align:"center"},void 0,e(N,{id:"chats.main.blankslate.title",defaultMessage:"No messages yet"})),e(m,{size:"sm",theme:"muted",align:"center"},void 0,e(N,{id:"chats.main.blankslate.subtitle",defaultMessage:"Search for someone to chat with"}))),e(H,{theme:"primary",onClick:a},void 0,e(N,{id:"chats.main.blankslate.new_chat",defaultMessage:"Message someone"})))},We=function(){var s=O(),a=function(){s.push("/chats/new")};return e(r,{space:6,alignItems:"center",justifyContent:"center",className:"h-full p-6"},void 0,e(r,{space:2,className:"max-w-sm"},void 0,e(m,{size:"2xl",weight:"bold",tag:"h2",align:"center"},void 0,e(N,{id:"chats.main.blankslate_with_chats.title",defaultMessage:"Select a chat"})),e(m,{size:"sm",theme:"muted",align:"center"},void 0,e(N,{id:"chats.main.blankslate_with_chats.subtitle",defaultMessage:"Select from one of your open chats or create a new message."}))),e(H,{theme:"primary",onClick:a},void 0,e(N,{id:"chats.main.blankslate.new_chat",defaultMessage:"Message someone"})))},c=T({blockMessage:{id:"chat_settings.block.message",defaultMessage:"Blocking will prevent this profile from direct messaging you and viewing your content. You can unblock later."},blockHeading:{id:"chat_settings.block.heading",defaultMessage:"Block @{acct}"},blockConfirm:{id:"chat_settings.block.confirm",defaultMessage:"Block"},unblockMessage:{id:"chat_settings.unblock.message",defaultMessage:"Unblocking will allow this profile to direct message you and view your content."},unblockHeading:{id:"chat_settings.unblock.heading",defaultMessage:"Unblock @{acct}"},unblockConfirm:{id:"chat_settings.unblock.confirm",defaultMessage:"Unblock"},leaveMessage:{id:"chat_settings.leave.message",defaultMessage:"Are you sure you want to leave this chat? Messages will be deleted for you and this chat will be removed from your inbox."},leaveHeading:{id:"chat_settings.leave.heading",defaultMessage:"Leave Chat"},leaveConfirm:{id:"chat_settings.leave.confirm",defaultMessage:"Leave Chat"},blockUser:{id:"chat_settings.options.block_user",defaultMessage:"Block @{acct}"},unblockUser:{id:"chat_settings.options.unblock_user",defaultMessage:"Unblock @{acct}"},reportUser:{id:"chat_settings.options.report_user",defaultMessage:"Report @{acct}"},leaveChat:{id:"chat_settings.options.leave_chat",defaultMessage:"Leave Chat"},autoDeleteLabel:{id:"chat_settings.auto_delete.label",defaultMessage:"Auto-delete messages"},autoDeleteHint:{id:"chat_settings.auto_delete.hint",defaultMessage:"Sent messages will auto-delete after the time period selected"},autoDelete2Minutes:{id:"chat_settings.auto_delete.2minutes",defaultMessage:"2 minutes"},autoDelete7Days:{id:"chat_settings.auto_delete.7days",defaultMessage:"7 days"},autoDelete14Days:{id:"chat_settings.auto_delete.14days",defaultMessage:"14 days"},autoDelete30Days:{id:"chat_settings.auto_delete.30days",defaultMessage:"30 days"},autoDelete90Days:{id:"chat_settings.auto_delete.90days",defaultMessage:"90 days"},autoDeleteMessage:{id:"chat_window.auto_delete_label",defaultMessage:"Auto-delete after {day, plural, one {# day} other {# days}}"},autoDeleteMessageTooltip:{id:"chat_window.auto_delete_tooltip",defaultMessage:"Chat messages are set to auto-delete after {day, plural, one {# day} other {# days}} upon sending."}}),qe=function(){var s=ne(),a=R(),n=ie(),o=O(),d=me(),f=d.chatId,h=fe(f),t=h.data,v=ve(),u=v.currentChatId,p=pe(),l=p.chatsQuery,g=l.data,j=l.isLoading,y=k.useRef(null),_=be(t==null?void 0:t.id),x=_.deleteChat,z=_.updateChat,P=function(w){return z.mutate({message_expiration:w})},U=ye(function(b){var w;return b.getIn(["relationships",t==null||(w=t.account)===null||w===void 0?void 0:w.id,"blocking"])}),de=function(){s(F("CONFIRM",{heading:a.formatMessage(c.blockHeading,{acct:t==null?void 0:t.account.acct}),message:a.formatMessage(c.blockMessage),confirm:a.formatMessage(c.blockConfirm),confirmationTheme:"primary",onConfirm:function(){return s(Oe(t==null?void 0:t.account.id))}}))},ge=function(){s(F("CONFIRM",{heading:a.formatMessage(c.unblockHeading,{acct:t==null?void 0:t.account.acct}),message:a.formatMessage(c.unblockMessage),confirm:a.formatMessage(c.unblockConfirm),confirmationTheme:"primary",onConfirm:function(){return s(Pe(t==null?void 0:t.account.id))}}))},he=function(){s(F("CONFIRM",{heading:a.formatMessage(c.leaveHeading),message:a.formatMessage(c.leaveMessage),confirm:a.formatMessage(c.leaveConfirm),confirmationTheme:"primary",onConfirm:function(){x.mutate(void 0,{onSuccess:function(){o.push("/chats")}})}}))};return j?null:!u&&g&&g.length>0?e(We,{}):u?t?e(r,{className:"h-full overflow-hidden"},void 0,e(S,{alignItems:"center",justifyContent:"between",space:2,className:"w-full p-4"},void 0,e(S,{alignItems:"center",space:2,className:"overflow-hidden"},void 0,e(S,{alignItems:"center"},void 0,A.createElement(E,{src:q,className:"mr-2 h-7 w-7 sm:mr-0 sm:hidden",ref:Y("Backspace"),onClick:function(){return o.push("/chats")}}),e(K,{to:"/@".concat(t.account.acct)},void 0,e(Q,{src:t.account.avatar,size:40,className:"flex-none"}))),e(r,{alignItems:"start",className:"h-11 overflow-hidden"},void 0,e("div",{className:"flex w-full grow items-center space-x-1"},void 0,e(K,{to:"/@".concat(t.account.acct)},void 0,e(m,{weight:"bold",size:"sm",align:"left",truncate:!0},void 0,t.account.display_name||"@".concat(t.account.username))),t.account.verified&&e(_e,{})),t.message_expiration&&e(we,{text:a.formatMessage(c.autoDeleteMessageTooltip,{day:G(t.message_expiration)})},void 0,e(m,{align:"left",size:"sm",weight:"medium",theme:"primary",truncate:!0,className:"w-full cursor-help"},void 0,a.formatMessage(c.autoDeleteMessage,{day:G(t.message_expiration)}))))),e(Ce,{},void 0,e(Me,{as:E,src:ke,iconClassName:"h-5 w-5 text-gray-600",children:null}),e(Se,{className:"w-80"},void 0,e(r,{space:4,className:"px-6 py-5"},void 0,e(S,{alignItems:"center",space:3},void 0,e(Q,{src:t.account.avatar_static,size:50}),e(r,{},void 0,e(m,{weight:"semibold"},void 0,t.account.display_name),e(m,{size:"sm",theme:"primary"},void 0,"@",t.account.acct))),n.chatsExpiration&&e(B,{},void 0,e(M,{label:a.formatMessage(c.autoDeleteLabel),hint:a.formatMessage(c.autoDeleteHint)}),e(M,{label:a.formatMessage(c.autoDelete7Days),onSelect:function(){return P(C.SEVEN)},isSelected:t.message_expiration===C.SEVEN}),e(M,{label:a.formatMessage(c.autoDelete14Days),onSelect:function(){return P(C.FOURTEEN)},isSelected:t.message_expiration===C.FOURTEEN}),e(M,{label:a.formatMessage(c.autoDelete30Days),onSelect:function(){return P(C.THIRTY)},isSelected:t.message_expiration===C.THIRTY}),e(M,{label:a.formatMessage(c.autoDelete90Days),onSelect:function(){return P(C.NINETY)},isSelected:t.message_expiration===C.NINETY})),e(r,{space:2},void 0,e(J,{as:"button",onSelect:U?ge:de,className:"!px-0 hover:!bg-transparent"},void 0,e("div",{className:"flex w-full items-center space-x-2 text-sm font-bold text-primary-500 dark:text-accent-blue"},void 0,e(X,{src:xe,className:"h-5 w-5"}),e("span",{},void 0,a.formatMessage(U?c.unblockUser:c.blockUser,{acct:t.account.acct})))),n.chatsDelete&&e(J,{as:"button",onSelect:he,className:"!px-0 hover:!bg-transparent"},void 0,e("div",{className:"flex w-full items-center space-x-2 text-sm font-bold text-danger-600 dark:text-danger-500"},void 0,e(X,{src:Ne,className:"h-5 w-5"}),e("span",{},void 0,a.formatMessage(c.leaveChat))))))))),e("div",{className:"h-full overflow-hidden"},void 0,e(Be,{className:"h-full",chat:t,inputRef:y}))):null:e(Fe,{})},Ye=T({title:{id:"chat.new_message.title",defaultMessage:"New Message"}}),Ve=function(){var s=R(),a=O();return e(r,{className:"h-full space-y-4"},void 0,e(r,{className:"grow px-4 pt-6 sm:px-6"},void 0,e(S,{alignItems:"center"},void 0,A.createElement(E,{src:q,className:"mr-2 h-7 w-7 sm:mr-0 sm:hidden",ref:Y("Backspace"),onClick:function(){return a.push("/chats")}}),e(I,{title:s.formatMessage(Ye.title)}))),e(He,{isMainPage:!0}))};function ee(i,s){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);s&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),a.push.apply(a,n)}return a}function ae(i){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?ee(Object(a),!0).forEach(function(n){le(i,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(a,n))})}return i}var D=T({title:{id:"chat.page_settings.title",defaultMessage:"Message Settings"},preferences:{id:"chat.page_settings.preferences",defaultMessage:"Preferences"},privacy:{id:"chat.page_settings.privacy",defaultMessage:"Privacy"},acceptingMessageLabel:{id:"chat.page_settings.accepting_messages.label",defaultMessage:"Allow users to start a new chat with you"},playSoundsLabel:{id:"chat.page_settings.play_sounds.label",defaultMessage:"Play a sound when you receive a message"},submit:{id:"chat.page_settings.submit",defaultMessage:"Save"}}),Ke=function(){var s,a=V(),n=a.account,o=R(),d=O(),f=ne(),h=De(),t=ue(),v=k.useState({chats_onboarded:!0,accepts_chat_messages:(n==null||(s=n.pleroma)===null||s===void 0?void 0:s.accepts_chat_messages)===!0}),u=$(v,2),p=u[0],l=u[1],g=function(_,x){f(Ee(_,x,{showAlert:!0}))},j=function(_){_.preventDefault(),t.mutate(p)};return e(r,{className:"h-full space-y-8 px-4 py-6 sm:p-6"},void 0,e(S,{alignItems:"center"},void 0,A.createElement(E,{src:q,className:"mr-2 h-7 w-7 sm:mr-0 sm:hidden",ref:Y("Backspace"),onClick:function(){return d.push("/chats")}}),e(I,{title:o.formatMessage(D.title)})),e(oe,{onSubmit:j},void 0,e(I,{title:o.formatMessage(D.preferences)}),e(B,{},void 0,e(M,{label:o.formatMessage(D.playSoundsLabel)},void 0,e(Ie,{settings:h,settingPath:["chats","sound"],onChange:g}))),e(I,{title:o.formatMessage(D.privacy)}),e(ce,{},void 0,e(B,{},void 0,e(M,{label:o.formatMessage(D.acceptingMessageLabel)},void 0,e(re,{checked:p.accepts_chat_messages,onChange:function(_){return l(function(x){return ae(ae({},x),{},{accepts_chat_messages:_.target.checked})})}})))),e(H,{type:"submit",theme:"primary",disabled:t.isLoading},void 0,o.formatMessage(D.submit))))},Qe=T({title:{id:"column.chats",defaultMessage:"Messages"}}),Ge=function(){var s=R(),a=O(),n=ie(),o=k.useState(""),d=$(o,2),f=d[0],h=d[1],t=ze(f,300),v=function(g){a.push("/chats/".concat(g.id))},u=function(){a.push("/chats/new")},p=function(){a.push("/chats/settings")};return e(r,{space:4,className:"h-full"},void 0,e(r,{space:4,className:"px-4 pt-6"},void 0,e(S,{alignItems:"center",justifyContent:"between"},void 0,e(I,{title:s.formatMessage(Qe.title)}),e(S,{space:1},void 0,e(E,{src:je,iconClassName:"h-5 w-5 text-gray-600",onClick:p}),e(E,{src:Le,iconClassName:"h-5 w-5 text-gray-600",onClick:u}))),n.chatsSearch&&e(Ae,{value:f,onChange:function(g){return h(g.target.value)},onClear:function(){return h("")}})),e(r,{className:"h-full grow"},void 0,e($e,{onClickChat:v,searchValue:t})))};function te(i,s){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);s&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),a.push.apply(a,n)}return a}function se(i){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?te(Object(a),!0).forEach(function(n){le(i,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):te(Object(a)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(a,n))})}return i}var L=T({title:{id:"chat.welcome.title",defaultMessage:"Welcome to {br} Chats!"},subtitle:{id:"chat.welcome.subtitle",defaultMessage:"Exchange direct messages with other users."},acceptingMessageLabel:{id:"chat.welcome.accepting_messages.label",defaultMessage:"Allow users to start a new chat with you"},notice:{id:"chat.welcome.notice",defaultMessage:"You can change these settings later."},submit:{id:"chat.welcome.submit",defaultMessage:"Save & Continue"}}),Je=function(){var s,a=V(),n=a.account,o=R(),d=ue(),f=k.useState({chats_onboarded:!0,accepts_chat_messages:(n==null||(s=n.pleroma)===null||s===void 0?void 0:s.accepts_chat_messages)===!0}),h=$(f,2),t=h[0],v=h[1],u=function(l){l.preventDefault(),d.mutate(t)};return e(r,{className:"h-full overflow-y-auto px-4 py-20 sm:px-0","data-testid":"chats-welcome"},void 0,e("div",{className:"mx-auto mb-2.5 w-full sm:w-3/5 xl:w-2/5"},void 0,e(m,{align:"center",weight:"bold",className:"mb-6 text-2xl leading-8 md:text-3xl"},void 0,o.formatMessage(L.title,{br:e("br",{})})),e(m,{align:"center",theme:"muted"},void 0,o.formatMessage(L.subtitle))),e(oe,{onSubmit:u,className:"w-full space-y-8 sm:mx-auto sm:w-2/3 lg:w-3/5"},void 0,e(r,{space:2},void 0,e(I,{title:e(N,{id:"chat.page_settings.privacy",defaultMessage:"Privacy"})}),e(ce,{},void 0,e(B,{},void 0,e(M,{label:o.formatMessage(L.acceptingMessageLabel)},void 0,e(re,{checked:t.accepts_chat_messages,onChange:function(l){return v(function(g){return se(se({},g),{},{accepts_chat_messages:l.target.checked})})}}))))),e(m,{align:"center",theme:"muted"},void 0,o.formatMessage(L.notice)),e(H,{type:"submit",theme:"primary",block:!0,size:"lg",disabled:d.isLoading},void 0,o.formatMessage(L.submit))))},Xe=function(s){var a,n;s.chatId;var o=V(),d=o.account,f=O(),h=(a=d==null||(n=d.source)===null||n===void 0?void 0:n.chats_onboarded)!==null&&a!==void 0?a:!0,t=f.location.pathname,v=Re(t,{path:["/chats/settings","/chats/new","/chats/:chatId"],exact:!0}),u=k.useRef(null),p=k.useState("100%"),l=$(p,2),g=l[0],j=l[1],y=function(){if(!u.current)return null;var x=u.current.getBoundingClientRect(),z=x.top,P=document.body.offsetHeight,U=document.body.clientWidth<976?-61:0;j(P-z+U)};return k.useLayoutEffect(function(){y()},[u.current]),k.useEffect(function(){return window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}},[]),A.createElement("div",{ref:u,style:{height:g},className:"h-screen overflow-hidden bg-white text-gray-900 shadow-lg dark:bg-primary-900 dark:text-gray-100 dark:shadow-none sm:rounded-t-xl"},h?e("div",{className:"grid h-full grid-cols-9 overflow-hidden dark:divide-x-2 dark:divide-solid dark:divide-gray-800","data-testid":"chat-page"},void 0,e(r,{className:Z("dark:inset col-span-9 overflow-hidden bg-gradient-to-r from-white to-gray-100 dark:bg-gray-900 dark:bg-none sm:col-span-3",{"hidden sm:block":v})},void 0,e(Ge,{})),e(r,{className:Z("col-span-9 h-full overflow-hidden sm:col-span-6",{"hidden sm:block":!v})},void 0,e(Te,{},void 0,e(W,{path:"/chats/new"},void 0,e(Ve,{})),e(W,{path:"/chats/settings"},void 0,e(Ke,{})),e(W,{},void 0,e(qe,{}))))):e(Je,{}))},la=function(s){var a=s.params;return e(Ue,{},void 0,e(Xe,{chatId:a==null?void 0:a.chatId}))};export{la as default};
