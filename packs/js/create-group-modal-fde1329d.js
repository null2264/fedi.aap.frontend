import{bj as ue,kN as ve,bm as fe,bl as he,g as be,cs as ye,u as B,a as e,a2 as b,c7 as _e,y as p,er as Oe,F as o,H as de,aa as J,kR as Se,hF as we,k5 as Ce,bp as le,o as Q,t as Me,q as Pe,bF as U,bZ as xe,bG as Te,bE as ce,_ as M,bL as X,aP as Ee,fa as je,R as ee,af as Ne,ag as ae,r as A,at as $,bu as ke,kS as Ge,kw as re}from"../index-4ca636bc.js";import{u as pe}from"./useDebounce-dbc5f52b.js";import"./es.array.splice-4ab5960e.js";import{u as te,H as Ae,A as De}from"./header-picker-066b7bc0.js";import{G as Ie}from"./group-tags-field-6ca26c08.js";import"./photo-plus-14444f2c.js";import"./streamfield-9c398767.js";function Re(){const t=ue(),{createEntity:n,...a}=ve([fe.GROUPS,"search",""],r=>t.post("/api/v1/groups",r,{headers:{"Content-Type":"multipart/form-data"}}),{schema:he});return{createGroup:n,...a}}const Le={validation:t=>["group","validation",t]};function ge(t=""){var s;const n=ue(),a=be(),r=async()=>{const{data:l}=await n.get("/api/v1/groups/validate",{params:{name:t}}).catch(c=>{if(c.response.status===422)return{data:c.response.data};throw c});return l},i=ye(Le.validation(t),r,{enabled:a.groupsValidation&&!!t});return{...i,data:{...i.data,isValid:!((s=i.data)!=null&&s.error)}}}var Ve=Q({copied:{id:"copy.success",defaultMessage:"Copied to clipboard!"}}),He=function(n){var a=n.group,r=B(),i=function(){Ce(a==null?void 0:a.url,function(){le.success(r.formatMessage(Ve.copied))})},s=function(){navigator.share({text:a==null?void 0:a.display_name,url:a==null?void 0:a.uri}).catch(function(c){c.name!=="AbortError"&&console.error(c)})};return a?e(b,{space:9},void 0,e(b,{space:3},void 0,e(b,{},void 0,e("label",{className:"dark:sm:shadow-inset relative h-24 w-full cursor-pointer overflow-hidden rounded-lg bg-primary-100 text-primary-500 dark:bg-gray-800 dark:text-accent-blue sm:h-36 sm:shadow"},void 0,a.header&&e("img",{className:"h-full w-full object-cover",src:a.header,alt:""})),e("label",{className:"mx-auto -mt-10 cursor-pointer rounded-full bg-primary-500 ring-2 ring-white dark:ring-primary-900"},void 0,a.avatar&&e(_e,{src:a.avatar,size:80}))),e(b,{},void 0,e(p,{size:"2xl",weight:"bold",align:"center"},void 0,a.display_name),e(p,{size:"md",className:"mx-auto max-w-sm [&_a]:text-primary-600 [&_a]:hover:underline [&_a]:dark:text-accent-blue",dangerouslySetInnerHTML:{__html:a.note_emojified}}))),e(Oe,{}),e(b,{space:4},void 0,e(p,{size:"3xl",weight:"bold",align:"center"},void 0,e(o,{id:"manage_group.confirmation.title",defaultMessage:"You’re all set!"})),e(b,{space:5},void 0,e(q,{number:1},void 0,e(p,{theme:"muted"},void 0,e(o,{id:"manage_group.confirmation.info_1",defaultMessage:"As the owner of this group, you can assign staff, delete posts and much more."}))),e(q,{number:2},void 0,e(p,{theme:"muted"},void 0,e(o,{id:"manage_group.confirmation.info_2",defaultMessage:"Post the group's first post and get the conversation started."}))),e(q,{number:3},void 0,e(p,{theme:"muted"},void 0,e(o,{id:"manage_group.confirmation.info_3",defaultMessage:"Share your new group with friends, family and followers to grow its membership."}))))),e(de,{space:2,justifyContent:"center"},void 0,"share"in navigator&&e(J,{onClick:s,theme:"transparent",icon:Se,className:"text-primary-600"},void 0,e(o,{id:"manage_group.confirmation.share",defaultMessage:"Share this group"})),e(J,{onClick:i,theme:"transparent",icon:we,className:"text-primary-600"},void 0,e(o,{id:"manage_group.confirmation.copy",defaultMessage:"Copy link"})))):null},ze=function(n){var a=n.number;return e("div",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 dark:border-gray-800"},void 0,e(p,{theme:"primary",size:"sm",weight:"bold"},void 0,a))},q=function(n){var a=n.number,r=n.children;return e(de,{alignItems:"top",space:3},void 0,e(ze,{number:a}),e("div",{className:"mt-0.5"},void 0,r))};function ne(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),a.push.apply(a,r)}return a}function v(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?ne(Object(a),!0).forEach(function(r){M(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var ie=Q({groupNamePlaceholder:{id:"manage_group.fields.name_placeholder",defaultMessage:"Group Name"},groupDescriptionPlaceholder:{id:"manage_group.fields.description_placeholder",defaultMessage:"Description"},hashtagPlaceholder:{id:"manage_group.fields.hashtag_placeholder",defaultMessage:"Add a topic"}}),Fe=function(n){var a,r,i=n.params,s=n.onChange,l=B(),c=pe,P=Me(),x=i.display_name,O=x===void 0?"":x,f=i.note,T=f===void 0?"":f,E=i.tags,y=E===void 0?[""]:E,h=c(O,300),j=ge(h),S=j.data,D=S.isValid,I=S.message,R=te(i.avatar),L=te(i.header),N=(a=(r=Pe(function(g){return g.instance.configuration.media_attachments.supported_mime_types}))===null||r===void 0?void 0:r.filter(function(g){return g.startsWith("image/")}).join(","))!==null&&a!==void 0?a:"",w=function(u){return function(m){s(v(v({},i),{},M({},u,m.target.value)))}},k=function(u,m){return function(){var G=Ee(regeneratorRuntime.mark(function Y(me){var F,W,Z;return regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(F=me.target.files,W=F?F[0]:void 0,!W){_.next=7;break}return _.next=5,je(W,m);case 5:Z=_.sent,s(v(v({},i),{},M({},u,Z)));case 7:case"end":return _.stop()}},Y)}));return function(Y){return G.apply(this,arguments)}}()},V=function(u){return function(){return s(M({},u,void 0))}},H=function(u){s(v(v({},i),{},{tags:u}))},z=function(){s(v(v({},i),{},{tags:[].concat(X(y),[""])}))},C=function(u){var m=X(y);m.splice(u,1),s(v(v({},i),{},{tags:m}))};return e(ce,{},void 0,e("div",{className:"relative mb-12 flex"},void 0,e(Ae,{src:L,accept:N,onChange:k("header",1920*1080),onClear:V("header")}),e(De,{src:R,accept:N,onChange:k("avatar",400*400)})),e(U,{labelText:e(o,{id:"manage_group.fields.name_label",defaultMessage:"Group name (required)"}),hintText:e(o,{id:"manage_group.fields.name_help",defaultMessage:"This cannot be changed after the group is created."}),errors:D?[]:[I]},void 0,e(Te,{type:"text",placeholder:l.formatMessage(ie.groupNamePlaceholder),value:O,onChange:w("display_name"),maxLength:Number(P.configuration.groups.max_characters_name)})),e(U,{labelText:e(o,{id:"manage_group.fields.description_label",defaultMessage:"Description"})},void 0,e(xe,{autoComplete:"off",placeholder:l.formatMessage(ie.groupDescriptionPlaceholder),value:T,onChange:w("note"),maxLength:Number(P.configuration.groups.max_characters_description)})),e("div",{className:"pb-6"},void 0,e(Ie,{tags:y,onChange:H,onAddItem:z,onRemoveItem:C})))};function oe(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),a.push.apply(a,r)}return a}function se(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?oe(Object(a),!0).forEach(function(r){M(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):oe(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var We=function(n){var a=n.params,r=n.onChange,i=a.group_visibility||"everyone",s=function(c){r(se(se({},a),{},{group_visibility:c}))};return ee.createElement(ee.Fragment,null,e(b,{className:"mx-auto max-w-xs py-10",space:2},void 0,e(p,{size:"3xl",weight:"bold",align:"center"},void 0,e(o,{id:"manage_group.get_started",defaultMessage:"Let’s get started!"})),e(p,{theme:"muted",align:"center"},void 0,e(o,{id:"manage_group.tagline",defaultMessage:"Groups connect you with others based on shared interests."}))),e(ce,{},void 0,e(U,{labelText:e(o,{id:"manage_group.privacy.label",defaultMessage:"Privacy settings"})},void 0,e(Ne,{},void 0,e(ae,{label:e(p,{weight:"medium"},void 0,e(o,{id:"manage_group.privacy.public.label",defaultMessage:"Public"})),hint:e(o,{id:"manage_group.privacy.public.hint",defaultMessage:"Discoverable. Anyone can join."}),onSelect:function(){return s("everyone")},isSelected:i==="everyone"}),e(ae,{label:e(p,{weight:"medium"},void 0,e(o,{id:"manage_group.privacy.private.label",defaultMessage:"Private (Owner approval required)"})),hint:e(o,{id:"manage_group.privacy.private.hint",defaultMessage:"Discoverable. Users can join after their request is approved."}),onSelect:function(){return s("members_only")},isSelected:i==="members_only"}))),e(p,{size:"sm",theme:"muted",align:"center"},void 0,e(o,{id:"manage_group.privacy.hint",defaultMessage:"These settings cannot be changed later."}))))},K=Q({next:{id:"manage_group.next",defaultMessage:"Next"},create:{id:"manage_group.create",defaultMessage:"Create Group"},done:{id:"manage_group.done",defaultMessage:"Done"}}),d=function(t){return t.ONE="ONE",t.TWO="TWO",t.THREE="THREE",t}(d||{}),Je=function(n){var a=n.onClose,r=B(),i=pe,s=A.useState(null),l=$(s,2),c=l[0],P=l[1],x=A.useState({group_visibility:"everyone"}),O=$(x,2),f=O[0],T=O[1],E=A.useState(d.ONE),y=$(E,2),h=y[0],j=y[1],S=Re(),D=S.createGroup,I=S.isSubmitting,R=i(f.display_name||"",300),L=ge(R),N=L.data.isValid,w=function(){a("MANAGE_GROUP")},k=A.useMemo(function(){switch(h){case d.THREE:return r.formatMessage(K.done);case d.TWO:return r.formatMessage(K.create);default:return r.formatMessage(K.next)}},[h]),V=function(){switch(h){case d.ONE:j(d.TWO);break;case d.TWO:D(f,{onSuccess:function(u){j(d.THREE),P(u)},onError:function(u){if(u instanceof Ge){var m,G=re.object({error:re.string()}).safeParse((m=u.response)===null||m===void 0?void 0:m.data);G.success&&le.error(G.data.error)}}});break;case d.THREE:w();break}},H=function(){switch(h){case d.ONE:return e(We,{params:f,onChange:T});case d.TWO:return e(Fe,{params:f,onChange:T});case d.THREE:return e(He,{group:c})}},z=function(){switch(h){case d.ONE:return e(o,{id:"navigation_bar.create_group",defaultMessage:"Create Group"});default:return f.group_visibility==="everyone"?e(o,{id:"navigation_bar.create_group.public",defaultMessage:"Create Public Group"}):e(o,{id:"navigation_bar.create_group.private",defaultMessage:"Create Private Group"})}};return e(ke,{title:z(),confirmationAction:V,confirmationText:k,confirmationDisabled:I||h===d.TWO&&!N,confirmationFullWidth:!0,onClose:w},void 0,e(b,{space:2},void 0,H()))};export{Je as default};
