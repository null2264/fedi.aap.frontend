import{aj as w,l as h,a4 as T,ak as j,al as R,W as E,y as b,F as L,af as F,k as Q,m as v,a6 as W,a1 as z,am as J,an as N,ag as V,j as X,a7 as K,ab as Z,ao as H,ap as ee,aq as te,ah as ne,ar as se,as as ie,at as oe,ai as re,au as ae}from"./browsertracing-7f035310.js";function ce(s,t={}){const n=s.method&&s.method.toUpperCase();let e="",i="url";t.customRoute||s.route?(e=t.customRoute||`${s.baseUrl||""}${s.route&&s.route.path}`,i="route"):(s.originalUrl||s.url)&&(e=w(s.originalUrl||s.url||""));let a="";return t.method&&n&&(a+=n),t.method&&t.path&&(a+=" "),t.path&&e&&(a+=e),[a,i]}var Y;(function(s){const t="ok";s.Ok=t;const n="deadline_exceeded";s.DeadlineExceeded=n;const e="unauthenticated";s.Unauthenticated=e;const i="permission_denied";s.PermissionDenied=i;const a="not_found";s.NotFound=a;const r="resource_exhausted";s.ResourceExhausted=r;const u="invalid_argument";s.InvalidArgument=u;const o="unimplemented";s.Unimplemented=o;const l="unavailable";s.Unavailable=l;const c="internal_error";s.InternalError=c;const _="unknown_error";s.UnknownError=_;const g="cancelled";s.Cancelled=g;const f="already_exists";s.AlreadyExists=f;const d="failed_precondition";s.FailedPrecondition=d;const m="aborted";s.Aborted=m;const y="out_of_range";s.OutOfRange=y;const P="data_loss";s.DataLoss=P})(Y||(Y={}));function p(s){let t,n=s[0],e=1;for(;e<s.length;){const i=s[e],a=s[e+1];if(e+=2,(i==="optionalAccess"||i==="optionalCall")&&n==null)return;i==="access"||i==="optionalAccess"?(t=n,n=a(n)):(i==="call"||i==="optionalCall")&&(n=a((...r)=>n.call(t,...r)),t=void 0)}return n}function A(s){const t=p([s,"call",e=>e(),"access",e=>e.getClient,"call",e=>e(),"optionalAccess",e=>e.getOptions,"call",e=>e()]);return(p([t,"optionalAccess",e=>e.instrumenter])||"sentry")!=="sentry"}class D{static __initStatic(){this.id="Express"}constructor(t={}){this.name=D.id,this._router=t.router||t.app,this._methods=(Array.isArray(t.methods)?t.methods:[]).concat("use")}setupOnce(t,n){if(!this._router){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.error("ExpressIntegration is missing an Express instance");return}if(A(n)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.log("Express Integration is skipped because of instrumenter configuration.");return}de(this._router,this._methods),_e(this._router)}}D.__initStatic();function k(s,t){const n=s.length;switch(n){case 2:return function(e,i){const a=i.__sentry_transaction;if(a){const r=a.startChild({description:s.name,op:`middleware.express.${t}`,origin:"auto.middleware.express"});i.once("finish",()=>{r.finish()})}return s.call(this,e,i)};case 3:return function(e,i,a){const r=i.__sentry_transaction,u=p([r,"optionalAccess",o=>o.startChild,"call",o=>o({description:s.name,op:`middleware.express.${t}`,origin:"auto.middleware.express"})]);s.call(this,e,i,function(...o){p([u,"optionalAccess",l=>l.finish,"call",l=>l()]),a.call(this,...o)})};case 4:return function(e,i,a,r){const u=a.__sentry_transaction,o=p([u,"optionalAccess",l=>l.startChild,"call",l=>l({description:s.name,op:`middleware.express.${t}`,origin:"auto.middleware.express"})]);s.call(this,e,i,a,function(...l){p([o,"optionalAccess",c=>c.finish,"call",c=>c()]),r.call(this,...l)})};default:throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)}}function le(s,t){return s.map(n=>typeof n=="function"?k(n,t):Array.isArray(n)?n.map(e=>typeof e=="function"?k(e,t):e):n)}function ue(s,t){const n=s[t];return s[t]=function(...e){return n.call(this,...le(e,t))},s}function de(s,t=[]){t.forEach(n=>ue(s,n))}function _e(s){const t="settings"in s;t&&s._router===void 0&&s.lazyrouter&&s.lazyrouter();const n=t?s._router:s;if(!n){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.debug("Routing instrumentation is currently only supported in Express 4.");return}const e=Object.getPrototypeOf(n),i=e.process_params;e.process_params=function(r,u,o,l,c){o._reconstructedRoute||(o._reconstructedRoute="");const{layerRoutePath:_,isRegex:g,isArray:f,numExtraSegments:d}=pe(r);(_||g||f)&&(o._hasParameters=!0);const y=(_||r.path||"").split("/").filter(S=>S.length>0&&(g||f||!S.includes("*"))).join("/");y&&y.length>0&&(o._reconstructedRoute+=`/${y}${g?"/":""}`);const P=T(o.originalUrl||"")+d,M=T(o._reconstructedRoute);if(P===M){o._hasParameters||o._reconstructedRoute!==o.originalUrl&&(o._reconstructedRoute=o.originalUrl?w(o.originalUrl):o.originalUrl);const S=l.__sentry_transaction;if(S&&S.metadata.source!=="custom"){const q=o._reconstructedRoute||"/";S.setName(...ce(o,{path:!0,method:!0,customRoute:q}))}}return i.call(this,r,u,o,l,c)}}function pe(s){const t=p([s,"access",r=>r.route,"optionalAccess",r=>r.path]),n=j(t),e=Array.isArray(t);if(!t)return{isRegex:n,isArray:e,numExtraSegments:0};const i=e?Math.max(fe(t)-T(s.path||""),0):0;return{layerRoutePath:he(e,t),isRegex:n,isArray:e,numExtraSegments:i}}function fe(s){return s.reduce((t,n)=>t+T(n.toString()),0)}function he(s,t){return s?t.map(n=>n.toString()).join(","):t&&t.toString()}class x{static __initStatic(){this.id="Postgres"}constructor(t={}){this.name=x.id,this._usePgNative=!!t.usePgNative}loadDependency(){return this._module=this._module||R("pg")}setupOnce(t,n){if(A(n)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.log("Postgres Integration is skipped because of instrumenter configuration.");return}const e=this.loadDependency();if(!e){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.error("Postgres Integration was unable to require `pg` package.");return}if(this._usePgNative&&!p([e,"access",a=>a.native,"optionalAccess",a=>a.Client])){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.error("Postgres Integration was unable to access 'pg-native' bindings.");return}const{Client:i}=this._usePgNative?e.native:e;E(i.prototype,"query",function(a){return function(r,u,o){const c=n().getScope().getSpan(),_={"db.system":"postgresql"};try{this.database&&(_["db.name"]=this.database),this.host&&(_["server.address"]=this.host),this.port&&(_["server.port"]=this.port),this.user&&(_["db.user"]=this.user)}catch{}const g=p([c,"optionalAccess",d=>d.startChild,"call",d=>d({description:typeof r=="string"?r:r.text,op:"db",origin:"auto.db.postgres",data:_})]);if(typeof o=="function")return a.call(this,r,u,function(d,m){p([g,"optionalAccess",y=>y.finish,"call",y=>y()]),o(d,m)});if(typeof u=="function")return a.call(this,r,function(d,m){p([g,"optionalAccess",y=>y.finish,"call",y=>y()]),u(d,m)});const f=typeof u<"u"?a.call(this,r,u):a.call(this,r);return b(f)?f.then(d=>(p([g,"optionalAccess",m=>m.finish,"call",m=>m()]),d)):(p([g,"optionalAccess",d=>d.finish,"call",d=>d()]),f)}})}}x.__initStatic();class O{static __initStatic(){this.id="Mysql"}constructor(){this.name=O.id}loadDependency(){return this._module=this._module||R("mysql/lib/Connection.js")}setupOnce(t,n){if(A(n)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.log("Mysql Integration is skipped because of instrumenter configuration.");return}const e=this.loadDependency();if(!e){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.error("Mysql Integration was unable to require `mysql` package.");return}let i;try{e.prototype.connect=new Proxy(e.prototype.connect,{apply(u,o,l){return i||(i=o.config),u.apply(o,l)}})}catch{(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.error("Mysql Integration was unable to instrument `mysql` config.")}function a(){return i?{"server.address":i.host,"server.port":i.port,"db.user":i.user}:{}}function r(u){if(!u)return;const o=a();Object.keys(o).forEach(l=>{u.setData(l,o[l])}),u.finish()}E(e,"createQuery",function(u){return function(o,l,c){const g=n().getScope().getSpan(),f=p([g,"optionalAccess",d=>d.startChild,"call",d=>d({description:typeof o=="string"?o:o.sql,op:"db",origin:"auto.db.mysql",data:{"db.system":"mysql"}})]);return typeof c=="function"?u.call(this,o,l,function(d,m,y){r(f),c(d,m,y)}):typeof l=="function"?u.call(this,o,function(d,m,y){r(f),l(d,m,y)}):u.call(this,o,l,function(){r(f)})}})}}O.__initStatic();const ge=["aggregate","bulkWrite","countDocuments","createIndex","createIndexes","deleteMany","deleteOne","distinct","drop","dropIndex","dropIndexes","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndReplace","findOneAndUpdate","indexes","indexExists","indexInformation","initializeOrderedBulkOp","insertMany","insertOne","isCapped","mapReduce","options","parallelCollectionScan","rename","replaceOne","stats","updateMany","updateOne"],me={bulkWrite:["operations"],countDocuments:["query"],createIndex:["fieldOrSpec"],createIndexes:["indexSpecs"],deleteMany:["filter"],deleteOne:["filter"],distinct:["key","query"],dropIndex:["indexName"],find:["query"],findOne:["query"],findOneAndDelete:["filter"],findOneAndReplace:["filter","replacement"],findOneAndUpdate:["filter","update"],indexExists:["indexes"],insertMany:["docs"],insertOne:["doc"],mapReduce:["map","reduce"],rename:["newName"],replaceOne:["filter","doc"],updateMany:["filter","update"],updateOne:["filter","update"]};function ye(s){return s&&typeof s=="object"&&s.once&&typeof s.once=="function"}class U{static __initStatic(){this.id="Mongo"}constructor(t={}){this.name=U.id,this._operations=Array.isArray(t.operations)?t.operations:ge,this._describeOperations="describeOperations"in t?t.describeOperations:!0,this._useMongoose=!!t.useMongoose}loadDependency(){const t=this._useMongoose?"mongoose":"mongodb";return this._module=this._module||R(t)}setupOnce(t,n){if(A(n)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.log("Mongo Integration is skipped because of instrumenter configuration.");return}const e=this.loadDependency();if(!e){const i=this._useMongoose?"mongoose":"mongodb";(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.error(`Mongo Integration was unable to require \`${i}\` package.`);return}this._instrumentOperations(e.Collection,this._operations,n)}_instrumentOperations(t,n,e){n.forEach(i=>this._patchOperation(t,i,e))}_patchOperation(t,n,e){if(!(n in t.prototype))return;const i=this._getSpanContextFromOperationArguments.bind(this);E(t.prototype,n,function(a){return function(...r){const u=r[r.length-1],l=e().getScope().getSpan();if(typeof u!="function"||n==="mapReduce"&&r.length===2){const _=p([l,"optionalAccess",f=>f.startChild,"call",f=>f(i(this,n,r))]),g=a.call(this,...r);if(b(g))return g.then(f=>(p([_,"optionalAccess",d=>d.finish,"call",d=>d()]),f));if(ye(g)){const f=g;try{f.once("close",()=>{p([_,"optionalAccess",d=>d.finish,"call",d=>d()])})}catch{p([_,"optionalAccess",m=>m.finish,"call",m=>m()])}return f}else return p([_,"optionalAccess",f=>f.finish,"call",f=>f()]),g}const c=p([l,"optionalAccess",_=>_.startChild,"call",_=>_(i(this,n,r.slice(0,-1)))]);return a.call(this,...r.slice(0,-1),function(_,g){p([c,"optionalAccess",f=>f.finish,"call",f=>f()]),u(_,g)})}})}_getSpanContextFromOperationArguments(t,n,e){const i={"db.system":"mongodb","db.name":t.dbName,"db.operation":n,"db.mongodb.collection":t.collectionName},a={op:"db",origin:"auto.db.mongo",description:n,data:i},r=me[n],u=Array.isArray(this._describeOperations)?this._describeOperations.includes(n):this._describeOperations;if(!r||!u)return a;try{if(n==="mapReduce"){const[o,l]=e;i[r[0]]=typeof o=="string"?o:o.name||"<anonymous>",i[r[1]]=typeof l=="string"?l:l.name||"<anonymous>"}else for(let o=0;o<r.length;o++)i[`db.mongodb.${r[o]}`]=JSON.stringify(e[o])}catch{}return a}}U.__initStatic();function Ee(s){return!!s&&!!s.$use}class I{static __initStatic(){this.id="Prisma"}constructor(t={}){if(this.name=I.id,Ee(t.client)&&!t.client._sentryInstrumented){L(t.client,"_sentryInstrumented",!0);const n={};try{const e=t.client._engineConfig;if(e){const{activeProvider:i,clientVersion:a}=e;i&&(n["db.system"]=i),a&&(n["db.prisma.version"]=a)}}catch{}t.client.$use((e,i)=>{if(A(Q))return i(e);const a=e.action,r=e.model;return F({name:r?`${r} ${a}`:a,op:"db.sql.prisma",origin:"auto.db.prisma",data:{...n,"db.operation":a}},()=>i(e))})}else(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.warn("Unsupported Prisma client provided to PrismaIntegration. Provided client:",t.client)}setupOnce(){}}I.__initStatic();class G{static __initStatic(){this.id="GraphQL"}constructor(){this.name=G.id}loadDependency(){return this._module=this._module||R("graphql/execution/execute.js")}setupOnce(t,n){if(A(n)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.log("GraphQL Integration is skipped because of instrumenter configuration.");return}const e=this.loadDependency();if(!e){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.error("GraphQL Integration was unable to require graphql/execution package.");return}E(e,"execute",function(i){return function(...a){const r=n().getScope(),u=r.getSpan(),o=p([u,"optionalAccess",c=>c.startChild,"call",c=>c({description:"execute",op:"graphql.execute",origin:"auto.graphql.graphql"})]);p([r,"optionalAccess",c=>c.setSpan,"call",c=>c(o)]);const l=i.call(this,...a);return b(l)?l.then(c=>(p([o,"optionalAccess",_=>_.finish,"call",_=>_()]),p([r,"optionalAccess",_=>_.setSpan,"call",_=>_(u)]),c)):(p([o,"optionalAccess",c=>c.finish,"call",c=>c()]),p([r,"optionalAccess",c=>c.setSpan,"call",c=>c(u)]),l)}})}}G.__initStatic();class B{static __initStatic(){this.id="Apollo"}constructor(t={useNestjs:!1}){this.name=B.id,this._useNest=!!t.useNestjs}loadDependency(){return this._useNest?this._module=this._module||R("@nestjs/graphql"):this._module=this._module||R("apollo-server-core"),this._module}setupOnce(t,n){if(A(n)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.log("Apollo Integration is skipped because of instrumenter configuration.");return}if(this._useNest){const e=this.loadDependency();if(!e){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package.");return}E(e.GraphQLFactory.prototype,"mergeWithSchema",function(i){return function(...a){return E(this.resolversExplorerService,"explore",function(r){return function(){const u=v(r.call(this));return C(u,n)}}),i.call(this,...a)}})}else{const e=this.loadDependency();if(!e){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&h.error("Apollo Integration was unable to require apollo-server-core package.");return}E(e.ApolloServerBase.prototype,"constructSchema",function(i){return function(){if(!this.config.resolvers)return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&(this.config.schema?(h.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."),h.warn()):this.config.modules&&h.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."),h.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")),i.call(this);const a=v(this.config.resolvers);return this.config.resolvers=C(a,n),i.call(this)}})}}}B.__initStatic();function C(s,t){return s.map(n=>(Object.keys(n).forEach(e=>{Object.keys(n[e]).forEach(i=>{typeof n[e][i]=="function"&&Re(n,e,i,t)})}),n))}function Re(s,t,n,e){E(s[t],n,function(i){return function(...a){const u=e().getScope().getSpan(),o=p([u,"optionalAccess",c=>c.startChild,"call",c=>c({description:`${t}.${n}`,op:"graphql.resolve",origin:"auto.graphql.apollo"})]),l=i.call(this,...a);return b(l)?l.then(c=>(p([o,"optionalAccess",_=>_.finish,"call",_=>_()]),c)):(p([o,"optionalAccess",c=>c.finish,"call",c=>c()]),l)}})}function Ae(){const s=J();if(!s.__SENTRY__)return;const t={mongodb(){const e=N(module,"./node/integrations/mongo");return new e.Mongo},mongoose(){const e=N(module,"./node/integrations/mongo");return new e.Mongo},mysql(){const e=N(module,"./node/integrations/mysql");return new e.Mysql},pg(){const e=N(module,"./node/integrations/postgres");return new e.Postgres}},n=Object.keys(t).filter(e=>!!R(e)).map(e=>{try{return t[e]()}catch{return}}).filter(e=>e);n.length>0&&(s.__SENTRY__.integrations=[...s.__SENTRY__.integrations||[],...n])}function $(){W(),z()&&Ae()}const Se=V,Te=$,be=X,De=K,xe=Z,Oe=H,Ue=ee,Ie=te,Ge=ne,Be=se,Pe=w,Ye=ie,we=oe,ve=re,ke=ae,Ce=Y,$e={BrowserTracing:Se,Apollo:B,Express:D,GraphQL:G,Mongo:U,Mysql:O,Postgres:x,Prisma:I};(typeof __SENTRY_TRACING__>"u"||__SENTRY_TRACING__)&&$();export{Ie as BROWSER_TRACING_INTEGRATION_ID,Se as BrowserTracing,we as IdleTransaction,$e as Integrations,Ue as Span,Ce as SpanStatus,Ye as TRACEPARENT_REGEXP,Oe as Transaction,Te as addExtensionMethods,Ge as defaultRequestInstrumentationOptions,De as extractTraceparentData,be as getActiveTransaction,Be as hasTracingEnabled,ve as instrumentOutgoingRequests,xe as spanStatusfromHttpCode,ke as startIdleTransaction,Pe as stripUrlQueryAndFragment};
