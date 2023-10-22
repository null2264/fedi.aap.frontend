import{u as C,d as R,R as n,ax as y,_ as E,fd as x,br as h,a as r,bG as L,bH as v,bI as w,bK as D,ae as M,X as k,o as I}from"../index-220d7bfb.js";import"./es.promise.finally-de92c073.js";function O(s,e){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);e&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable})),a.push.apply(a,t)}return a}function d(s){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?O(Object(a),!0).forEach(function(t){E(s,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach(function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(a,t))})}return s}var i=I({header:{id:"edit_email.header",defaultMessage:"Change Email"},updateEmailSuccess:{id:"security.update_email.success",defaultMessage:"Email successfully updated."},updateEmailFail:{id:"security.update_email.fail",defaultMessage:"Update email failed."},emailFieldLabel:{id:"security.fields.email.label",defaultMessage:"Email address"},emailFieldPlaceholder:{id:"edit_email.placeholder",defaultMessage:"me@example.com"},passwordFieldLabel:{id:"security.fields.password.label",defaultMessage:"Password"},submit:{id:"security.submit",defaultMessage:"Save changes"},cancel:{id:"common.cancel",defaultMessage:"Cancel"}}),S={email:"",password:""},T=function(){var e=C(),a=R(),t=n.useState(S),o=y(t,2),p=o[0],u=o[1],_=n.useState(!1),f=y(_,2),j=f[0],g=f[1],c=p.email,m=p.password,b=n.useCallback(function(l){l.persist(),u(function(F){return d(d({},F),{},E({},l.target.name,l.target.value))})},[]),P=n.useCallback(function(){g(!0),a(x(c,m)).then(function(){u(S),h.success(e.formatMessage(i.updateEmailSuccess))}).finally(function(){g(!1)}).catch(function(){u(function(l){return d(d({},l),{},{password:""})}),h.error(e.formatMessage(i.updateEmailFail))})},[c,m,a,e]);return r(k,{label:e.formatMessage(i.header),backHref:"/settings"},void 0,r(L,{onSubmit:P},void 0,r(v,{labelText:e.formatMessage(i.emailFieldLabel)},void 0,r(w,{type:"text",placeholder:e.formatMessage(i.emailFieldPlaceholder),name:"email",autoComplete:"off",onChange:b,value:c})),r(v,{labelText:e.formatMessage(i.passwordFieldLabel)},void 0,r(w,{type:"password",name:"password",onChange:b,value:m})),r(D,{},void 0,r(M,{to:"/settings",theme:"tertiary"},void 0,e.formatMessage(i.cancel)),r(M,{type:"submit",theme:"primary",disabled:j},void 0,e.formatMessage(i.submit)))))};export{T as default};
