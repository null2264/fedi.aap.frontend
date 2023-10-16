import{u as v,a as n,bu as O,o as R,aB as _,dU as T,dV as I,_ as u,dW as M,R as p,av as m,dX as N,hM as y,dY as C,dZ as S,i0 as h,i1 as A,i2 as P,i3 as g,i4 as D,i5 as b,i6 as L,i7 as B,i8 as U,i9 as k,ia as V,ib as F,ic as w,id as Y,ie as x,ig as G,ih as H,ii as z,ij as J,ik as K,il as $,im as j,io as W,ip as Z,iq as q,ir as X,is as Q,it as ee,iu as oe,iv as ae,iw as re,ix as te,iy as se,iz as ne,iA as ie,iB as le,iC as de,iD as ce,iE as ue,ee as Me,eb as pe,bv as Ee}from"../index-4ca636bc.js";import{M as me}from"./modal-root-5fe43446.js";var E=R({error:{id:"bundle_modal_error.message",defaultMessage:"Something went wrong while loading this modal."},retry:{id:"bundle_modal_error.retry",defaultMessage:"Try again"},close:{id:"bundle_modal_error.close",defaultMessage:"Close"}}),Ce=function(a){var i=a.onRetry,e=a.onClose,r=v(),s=function(){i()};return n(O,{title:r.formatMessage(E.error),confirmationAction:e,confirmationText:r.formatMessage(E.close),secondaryAction:s,secondaryText:r.formatMessage(E.retry)})},fe=function(){return n("div",{className:"modal-root__modal error-modal"},void 0,n("div",{className:"error-modal__body"},void 0,n(_,{})),n("div",{className:"error-modal__footer"},void 0,n("div",{},void 0,n("button",{className:"error-modal__nav"}))))};function ve(o){var a=Oe();return function(){var e=C(o),r;if(a){var s=C(this).constructor;r=Reflect.construct(e,arguments,s)}else r=e.apply(this,arguments);return S(this,r)}}function Oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Re={ACCOUNT_MODERATION:h,ACCOUNT_NOTE:A,ACTIONS:P,BIRTHDAYS:g,BOOST:D,COMPARE_HISTORY:b,COMPONENT:L,COMPOSE:B,COMPOSE_EVENT:U,CONFIRM:k,CREATE_GROUP:V,DISLIKES:F,EDIT_ANNOUNCEMENT:w,EDIT_FEDERATION:Y,EMBED:x,EMOJI_PICKER:G,EVENT_MAP:H,EVENT_PARTICIPANTS:z,FAMILIAR_FOLLOWERS:J,FAVOURITES:K,HOTKEYS:$,JOIN_EVENT:j,LANDING_PAGE:W,LIST_ADDER:Z,LIST_EDITOR:q,MEDIA:X,MENTIONS:Q,MISSING_DESCRIPTION:ee,MUTE:oe,POLICY:ae,REACTIONS:re,REBLOGS:te,REPLY_MENTIONS:se,REPORT:ne,UNAUTHORIZED:ie,VERIFY_SMS:le,VIDEO:de},_e=function(o){T(i,o);var a=ve(i);function i(){var e;I(this,i);for(var r=arguments.length,s=new Array(r),t=0;t<r;t++)s[t]=arguments[t];return e=a.call.apply(a,[this].concat(s)),u(M(e),"renderLoading",function(l){return function(){return["MEDIA","VIDEO","BOOST","CONFIRM","ACTIONS"].includes(l)?null:n(fe,{})}}),u(M(e),"renderError",function(l){return p.createElement(Ce,m({},l,{onClose:e.onClickClose}))}),u(M(e),"onClickClose",function(l){var d=e.props,c=d.onClose,f=d.type;c(f)}),e}return N(i,[{key:"getSnapshotBeforeUpdate",value:function(){return{visible:!!this.props.type}}},{key:"componentDidUpdate",value:function(r,s,t){var l=t.visible;l?document.body.classList.add("with-modals"):document.body.classList.remove("with-modals")}},{key:"render",value:function(){var r=this,s=this.props,t=s.type,l=s.props,d=!!t;return n(me,{onClose:this.onClickClose,type:t},void 0,d&&n(y,{fetchComponent:Re[t],loading:this.renderLoading(t),error:this.renderError,renderDelay:200},void 0,function(c){return p.createElement(c,m({},l,{onClose:r.onClickClose}))}))}}]),i}(p.PureComponent);const Te=o=>{const a=o.modals.last({modalType:null,modalProps:{}});return{type:a.modalType,props:a.modalProps}},Ie=o=>({onClose(a){switch(a){case"COMPOSE":o(pe());break;case"COMPOSE_EVENT":o(Me());break;case"REPORT":o(ue());break}o(Ee(a))}}),Se=ce(Te,Ie)(_e);export{Se as default};
