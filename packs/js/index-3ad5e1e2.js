import{u as C,d as R,R as n,at as y,_ as S,fb as L,bp as h,a as i,bE as x,bF as v,bG as w,bI as D,aa as M,X as k,o as I}from"../index-4ca636bc.js";import"./es.promise.finally-20cd980f.js";function O(s,e){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);e&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable})),a.push.apply(a,t)}return a}function u(s){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?O(Object(a),!0).forEach(function(t){S(s,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach(function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(a,t))})}return s}var r=I({header:{id:"edit_email.header",defaultMessage:"Change Email"},updateEmailSuccess:{id:"security.update_email.success",defaultMessage:"Email successfully updated."},updateEmailFail:{id:"security.update_email.fail",defaultMessage:"Update email failed."},emailFieldLabel:{id:"security.fields.email.label",defaultMessage:"Email address"},emailFieldPlaceholder:{id:"edit_email.placeholder",defaultMessage:"me@example.com"},passwordFieldLabel:{id:"security.fields.password.label",defaultMessage:"Password"},submit:{id:"security.submit",defaultMessage:"Save changes"},cancel:{id:"common.cancel",defaultMessage:"Cancel"}}),E={email:"",password:""},T=function(){var e=C(),a=R(),t=n.useState(E),o=y(t,2),p=o[0],d=o[1],_=n.useState(!1),f=y(_,2),j=f[0],b=f[1],c=p.email,m=p.password,g=n.useCallback(function(l){l.persist(),d(function(P){return u(u({},P),{},S({},l.target.name,l.target.value))})},[]),F=n.useCallback(function(){b(!0),a(L(c,m)).then(function(){d(E),h.success(e.formatMessage(r.updateEmailSuccess))}).finally(function(){b(!1)}).catch(function(){d(function(l){return u(u({},l),{},{password:""})}),h.error(e.formatMessage(r.updateEmailFail))})},[c,m,a,e]);return i(k,{label:e.formatMessage(r.header),backHref:"/settings"},void 0,i(x,{onSubmit:F},void 0,i(v,{labelText:e.formatMessage(r.emailFieldLabel)},void 0,i(w,{type:"text",placeholder:e.formatMessage(r.emailFieldPlaceholder),name:"email",autoComplete:"off",onChange:g,value:c})),i(v,{labelText:e.formatMessage(r.passwordFieldLabel)},void 0,i(w,{type:"password",name:"password",onChange:g,value:m})),i(D,{},void 0,i(M,{to:"/settings",theme:"tertiary"},void 0,e.formatMessage(r.cancel)),i(M,{type:"submit",theme:"primary",disabled:j},void 0,e.formatMessage(r.submit)))))};export{T as default};
