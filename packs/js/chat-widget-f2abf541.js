import{as as K,R as C,H as x,av as z,a as e,y as b,aG as $,cQ as Z,cP as ee,d as ae,u as N,g as V,fJ as T,fL as te,q as ne,d_ as L,A as S,d$ as U,a2 as y,fT as se,fU as oe,af as ie,ag as ce,gB as re,gC as le,c7 as W,o as I,gz as v,aD as O,c5 as ue,fV as de,fN as D,r as q,L as G,cz as ge,fM as he,c6 as ve,fY as j,W as me,aa as fe,gD as Ce,at as pe,fK as be,F as _e,b8 as ye,a7 as ke,g0 as xe}from"../index-4ca636bc.js";import{u as Me}from"./useDebounce-dbc5f52b.js";import{C as we,a as Se,c as Ae,E as Ne,b as Te}from"./chat-search-input-5ea0e0f1.js";import"./es.array.splice-4ab5960e.js";import"./index-d02c21e2.js";import"./mood-smile-6a052395.js";import"./lodash-d5207a4f.js";import"./pull-to-refresh-7d3e38dc.js";var Ie=["isOpen","isToggleable","onToggle","secondaryAction","secondaryActionIcon","title","unreadCount"],P=function(n){var a=n.isOpen,s=n.isToggleable,o=s===void 0?!0:s,t=n.onToggle,i=n.secondaryAction,c=n.secondaryActionIcon,g=n.title,d=n.unreadCount,p=K(n,Ie),_=o?"button":"div",m={};return o&&(m.onClick=t),C.createElement(x,z({},p,{alignItems:"center",justifyContent:"between",className:"h-16 rounded-t-xl px-4 py-3"}),C.createElement(_,z({className:"flex h-16 grow flex-row items-center space-x-1","data-testid":"title"},m),e(b,{weight:"semibold",tag:"div"},void 0,g),typeof d<"u"&&d>0&&e(x,{alignItems:"center",space:2},void 0,e(b,{weight:"semibold","data-testid":"unread-count"},void 0,"(",d,")"),e("div",{className:"h-2.5 w-2.5 rounded-full bg-accent-300"}))),e(x,{space:2,alignItems:"center"},void 0,i?e($,{onClick:i,src:c,iconClassName:"h-5 w-5 text-gray-600"}):null,e($,{onClick:t,src:a?Z:ee,iconClassName:"h-5 w-5 text-gray-600"})))},u=I({blockMessage:{id:"chat_settings.block.message",defaultMessage:"Blocking will prevent this profile from direct messaging you and viewing your content. You can unblock later."},blockHeading:{id:"chat_settings.block.heading",defaultMessage:"Block @{acct}"},blockConfirm:{id:"chat_settings.block.confirm",defaultMessage:"Block"},unblockMessage:{id:"chat_settings.unblock.message",defaultMessage:"Unblocking will allow this profile to direct message you and view your content."},unblockHeading:{id:"chat_settings.unblock.heading",defaultMessage:"Unblock @{acct}"},unblockConfirm:{id:"chat_settings.unblock.confirm",defaultMessage:"Unblock"},leaveMessage:{id:"chat_settings.leave.message",defaultMessage:"Are you sure you want to leave this chat? Messages will be deleted for you and this chat will be removed from your inbox."},leaveHeading:{id:"chat_settings.leave.heading",defaultMessage:"Leave Chat"},leaveConfirm:{id:"chat_settings.leave.confirm",defaultMessage:"Leave Chat"},title:{id:"chat_settings.title",defaultMessage:"Chat Details"},blockUser:{id:"chat_settings.options.block_user",defaultMessage:"Block @{acct}"},unblockUser:{id:"chat_settings.options.unblock_user",defaultMessage:"Unblock @{acct}"},leaveChat:{id:"chat_settings.options.leave_chat",defaultMessage:"Leave Chat"},autoDeleteLabel:{id:"chat_settings.auto_delete.label",defaultMessage:"Auto-delete messages"},autoDeleteDays:{id:"chat_settings.auto_delete.days",defaultMessage:"{day, plural, one {# day} other {# days}}"}}),Pe=function(){var n=ae(),a=N(),s=V(),o=T(),t=o.chat,i=o.changeScreen,c=o.toggleChatPane,g=te(t==null?void 0:t.id),d=g.deleteChat,p=g.updateChat,_=function(l){return p.mutate({message_expiration:l})},m=ne(function(r){var l;return r.getIn(["relationships",t==null||(l=t.account)===null||l===void 0?void 0:l.id,"blocking"])}),h=function(){i(v.CHAT,t==null?void 0:t.id)},w=function(){h(),c()},M=function(){n(O("CONFIRM",{heading:a.formatMessage(u.blockHeading,{acct:t==null?void 0:t.account.acct}),message:a.formatMessage(u.blockMessage),confirm:a.formatMessage(u.blockConfirm),confirmationTheme:"primary",onConfirm:function(){return n(ue(t==null?void 0:t.account.id))}}))},A=function(){n(O("CONFIRM",{heading:a.formatMessage(u.unblockHeading,{acct:t==null?void 0:t.account.acct}),message:a.formatMessage(u.unblockMessage),confirm:a.formatMessage(u.unblockConfirm),confirmationTheme:"primary",onConfirm:function(){return n(de(t==null?void 0:t.account.id))}}))},f=function(){n(O("CONFIRM",{heading:a.formatMessage(u.leaveHeading),message:a.formatMessage(u.leaveMessage),confirm:a.formatMessage(u.leaveConfirm),confirmationTheme:"primary",onConfirm:function(){return d.mutate()}}))};return t?C.createElement(C.Fragment,null,e(P,{isOpen:!0,isToggleable:!1,onToggle:w,title:e(x,{alignItems:"center",space:2},void 0,C.createElement("button",{onClick:h,ref:L("Backspace")},e(S,{src:U,className:"h-6 w-6 text-gray-600 dark:text-gray-400"})),e(b,{weight:"semibold"},void 0,a.formatMessage(u.title)))}),e(y,{space:4,className:"mx-auto w-5/6"},void 0,e(x,{alignItems:"center",space:3},void 0,e(W,{src:t.account.avatar_static,size:50}),e(y,{},void 0,e(b,{weight:"semibold"},void 0,t.account.display_name),e(b,{size:"sm",theme:"primary"},void 0,"@",t.account.acct))),s.chatsExpiration&&e(ie,{},void 0,e(ce,{label:a.formatMessage(u.autoDeleteLabel)},void 0,e(re,{defaultValue:t.message_expiration,onChange:function(l){return _(Number(l.target.value))}},void 0,le.map(function(r){var l=D(r);return e("option",{value:r},r,a.formatMessage(u.autoDeleteDays,{day:l}))})))),e(y,{space:5},void 0,e("button",{onClick:m?A:M,className:"flex w-full items-center space-x-2 text-sm font-bold text-primary-600 dark:text-accent-blue"},void 0,e(S,{src:se,className:"h-5 w-5"}),e("span",{},void 0,a.formatMessage(m?u.unblockUser:u.blockUser,{acct:t.account.acct}))),s.chatsDelete&&e("button",{onClick:f,className:"flex w-full items-center space-x-2 text-sm font-bold text-danger-600"},void 0,e(S,{src:oe,className:"h-5 w-5"}),e("span",{},void 0,a.formatMessage(u.leaveChat)))))):null},F=I({autoDeleteMessage:{id:"chat_window.auto_delete_label",defaultMessage:"Auto-delete after {day, plural, one {# day} other {# days}}"},autoDeleteMessageTooltip:{id:"chat_window.auto_delete_tooltip",defaultMessage:"Chat messages are set to auto-delete after {day, plural, one {# day} other {# days}} upon sending."}}),He=function(n){var a=n.enabled,s=n.to,o=n.children;return a?e(G,{to:s},void 0,o):C.createElement(C.Fragment,null,o)},Be=function(){var n=N(),a=T(),s=a.chat,o=a.currentChatId,t=a.screen,i=a.changeScreen,c=a.isOpen,g=a.needsAcceptance,d=a.toggleChatPane,p=q.useRef(null),_=function(){i(v.INBOX)},m=function(){d(),i(v.SEARCH)},h=function(){i(v.CHAT_SETTINGS,o)},w=function(){if(!g)return c?h:m};return s?t===v.CHAT_SETTINGS?e(Pe,{}):C.createElement(C.Fragment,null,e(P,{title:e(x,{alignItems:"center",space:2},void 0,c&&C.createElement("button",{onClick:_,ref:L("Backspace")},e(S,{src:U,className:"h-6 w-6 text-gray-600 dark:text-gray-400"})),e(x,{alignItems:"center",space:3},void 0,c&&e(G,{to:"/@".concat(s.account.acct)},void 0,e(W,{src:s.account.avatar,size:40})),e(y,{alignItems:"start"},void 0,e(He,{enabled:c,to:"/@".concat(s.account.acct)},void 0,e("div",{className:"flex grow items-center space-x-1"},void 0,e(b,{size:"sm",weight:"bold",truncate:!0},void 0,s.account.display_name||"@".concat(s.account.acct)),s.account.verified&&e(ge,{}))),s.message_expiration&&e(he,{text:n.formatMessage(F.autoDeleteMessageTooltip,{day:D(s.message_expiration)})},void 0,e(b,{size:"sm",weight:"medium",theme:"primary",truncate:!0,className:"cursor-help"},void 0,n.formatMessage(F.autoDeleteMessage,{day:D(s.message_expiration)})))))),secondaryAction:w(),secondaryActionIcon:c?ve:j,isToggleable:!c,isOpen:c,onToggle:d}),e(y,{className:"h-full grow overflow-hidden",space:2},void 0,e(we,{chat:s,inputRef:p}))):null},Oe=I({title:{id:"chat_search.title",defaultMessage:"Messages"}}),Ee=function(){var n=N(),a=T(),s=a.changeScreen,o=a.isOpen,t=a.toggleChatPane;return e(P,{"data-testid":"pane-header",title:e(x,{alignItems:"center",space:2},void 0,C.createElement("button",{onClick:function(){s(v.INBOX)},ref:L("Backspace")},e(S,{src:U,className:"h-6 w-6 text-gray-600 dark:text-gray-400"})),e(b,{size:"sm",weight:"bold",truncate:!0},void 0,n.formatMessage(Oe.title))),isOpen:o,isToggleable:!1,onToggle:t})},E=function(n){var a=n.isOpen,s=a===void 0?!1:a,o=n.index,t=n.children;n.main;var i=404*o+20;return e("div",{className:me("fixed bottom-0 right-1 z-[99] flex w-96 flex-col rounded-t-lg bg-white shadow-3xl dark:bg-gray-900",{"h-[550px] max-h-[100vh]":s,"h-16":!s}),style:{right:"".concat(i,"px")},"data-testid":"pane"},void 0,t)},R=I({title:{id:"chat_search.empty_results_blankslate.title",defaultMessage:"No messages yet"},body:{id:"chat_search.empty_results_blankslate.body",defaultMessage:"Search for someone to chat with."},action:{id:"chat_search.empty_results_blankslate.action",defaultMessage:"Message someone"}}),Re=function(n){var a=n.onSearch,s=N();return e(y,{alignItems:"center",justifyContent:"center",className:"h-full grow","data-testid":"chat-pane-blankslate"},void 0,e(y,{space:4},void 0,e(y,{space:1,className:"mx-auto max-w-[80%]"},void 0,e(b,{size:"lg",weight:"bold",align:"center"},void 0,s.formatMessage(R.title)),e(b,{theme:"muted",align:"center"},void 0,s.formatMessage(R.body))),e("div",{className:"mx-auto"},void 0,e(fe,{theme:"primary",onClick:a},void 0,s.formatMessage(R.action)))))},De=function(){var n=V(),a=Me,s=Ce(),o=s.unreadChatsCount,t=q.useState(),i=pe(t,2),c=i[0],g=i[1],d=a(c,300),p=T(),_=p.screen,m=p.changeScreen,h=p.isOpen,w=p.toggleChatPane,M=be(d),A=M.chatsQuery,f=A.data,r=A.isLoading,l=Number(d==null?void 0:d.length)>0,Q=function(B){m(v.CHAT,B.id),g(void 0)},X=function(){l&&g("")},Y=function(){if(l||Number(f==null?void 0:f.length)>0||r)return e(y,{space:4,className:"h-full grow"},void 0,n.chatsSearch&&e("div",{className:"px-4"},void 0,e(Te,{value:c||"",onChange:function(J){return g(J.target.value)},onClear:X})),Number(f==null?void 0:f.length)>0||r?e(Ae,{searchValue:d,onClickChat:Q}):e(Ne,{}));if((f==null?void 0:f.length)===0)return e(Re,{onSearch:function(){m(v.SEARCH)}})};return _===v.CHAT||_===v.CHAT_SETTINGS?e(E,{isOpen:h,index:0,main:!0},void 0,e(Be,{})):_===v.SEARCH?e(E,{isOpen:h,index:0,main:!0},void 0,e(Ee,{}),h?e(Se,{}):null):e(E,{isOpen:h,index:0,main:!0},void 0,e(P,{title:e(_e,{id:"column.chats",defaultMessage:"Chats"}),unreadCount:o,isOpen:h,onToggle:w,secondaryAction:function(){m(v.SEARCH),g(void 0),h||w()},secondaryActionIcon:j}),h?Y():null)},Ge=function(){var n,a,s=ye(),o=s.account,t=ke(),i=t.location.pathname,c=!!i.match(/^\/chats/),g=(n=o==null||(a=o.source)===null||a===void 0?void 0:a.chats_onboarded)!==null&&n!==void 0?n:!0;return!g||c?null:e(xe,{},void 0,e(De,{}))};export{Ge as default};
