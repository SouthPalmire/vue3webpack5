(function(e){function t(t){for(var n,i,u=t[0],o=t[1],s=t[2],b=0,d=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);c&&c(t);while(d.length)d.shift()();return l.push.apply(l,s||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,u=1;u<r.length;u++){var o=r[u];0!==a[o]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},l=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=o;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"nav"};function l(e,t){var r=Object(n["w"])("router-view");return Object(n["s"])(),Object(n["c"])("div",a,[Object(n["e"])(r)])}r("caaf");const i={};i.render=l;var u=i,o=r("6c02"),s=Object(n["e"])("h1",null,"login",-1),c=Object(n["d"])("e-mail"),b=Object(n["e"])("br",null,null,-1),d=Object(n["e"])("br",null,null,-1),p=Object(n["e"])("br",null,null,-1),m=Object(n["d"])("password"),f=Object(n["e"])("br",null,null,-1),j=Object(n["e"])("br",null,null,-1),O=Object(n["e"])("br",null,null,-1);function h(e,t,r,a,l,i){var u=this;return Object(n["s"])(),Object(n["c"])("div",null,[s,Object(n["e"])("form",{onSubmit:t[6]||(t[6]=Object(n["E"])((function(){return i.fetchUserData&&i.fetchUserData.apply(i,arguments)}),["prevent"]))},[Object(n["e"])("label",null,[c,b,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.email=e}),onBlur:t[2]||(t[2]=function(e){return a.v$.email.$touch()}),type:"email",name:"email",placeholder:"enter your email"},null,544),[[n["A"],l.email]])]),d,p,Object(n["e"])("label",null,[m,f,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.password=e}),onBlur:t[4]||(t[4]=function(e){return a.v$.password.$touch()}),type:"password",placeholder:"enter your password"},null,544),[[n["A"],l.password]])]),j,O,Object(n["e"])("button",{type:"submit",disabled:a.v$.email.$invalid||a.v$.password.$invalid}," log in ",8,["disabled"]),Object(n["e"])("button",{onClick:t[5]||(t[5]=Object(n["E"])((function(e){return u.$router.push("register")}),["prevent"]))}," registration ")],32),Object(n["D"])(Object(n["e"])("p",null,"please enter your email",512),[[n["B"],a.v$.email.$invalid&&a.v$.email.$dirty&&!this.errors]]),Object(n["D"])(Object(n["e"])("p",null,"please enter your password",512),[[n["B"],a.v$.password.$invalid&&a.v$.password.$dirty&&!this.errors]]),Object(n["D"])(Object(n["e"])("p",null,Object(n["y"])(l.errors),513),[[n["B"],l.errors]])])}var v=r("1da1"),$=(r("96cf"),r("d3b7"),r("25a0")),w=r("e3e1"),y={name:"Login",setup:function(){return{v$:Object($["a"])()}},validations:function(){return{email:{required:w["c"],email:w["b"]},password:{required:w["c"]}}},data:function(){return{email:"",password:"",errors:""}},methods:{fetchUserData:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,a,l,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.errors="",r=e.email,n=e.password,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:n})},t.next=5,fetch("http://127.0.0.1:1337/api/?login=true",a);case 5:if(l=t.sent,!l.ok){t.next=13;break}return t.next=9,l.json();case 9:i=t.sent,e.$router.push({name:"profile",params:{firstname:i[0].firstname,lastname:i[0].lastname,email:i[0].email,date_of_birth:i[0].date_of_birth}}),t.next=18;break;case 13:return t.next=15,l.json();case 15:e.errors=t.sent,e.email="",e.password="";case 18:case"end":return t.stop()}}),t)})))()}}};y.render=h;var _=y,g=Object(n["e"])("h1",null,"registration",-1),D=Object(n["d"])("Firstname"),C=Object(n["e"])("br",null,null,-1),P=Object(n["e"])("br",null,null,-1),x=Object(n["e"])("br",null,null,-1),B=Object(n["d"])("Lastname"),U=Object(n["e"])("br",null,null,-1),k=Object(n["e"])("br",null,null,-1),S=Object(n["e"])("br",null,null,-1),A=Object(n["d"])("password"),V=Object(n["e"])("br",null,null,-1),q=Object(n["e"])("br",null,null,-1),T=Object(n["e"])("br",null,null,-1),R=Object(n["d"])("confirm password"),J=Object(n["e"])("br",null,null,-1),M=Object(n["e"])("br",null,null,-1),E=Object(n["e"])("br",null,null,-1),L=Object(n["d"])("e-mail"),F=Object(n["e"])("br",null,null,-1),N=Object(n["e"])("br",null,null,-1),z=Object(n["e"])("br",null,null,-1),G=Object(n["d"])("date of birth"),H=Object(n["e"])("br",null,null,-1),I=Object(n["e"])("br",null,null,-1),K=Object(n["e"])("br",null,null,-1);function Q(e,t,r,a,l,i){return Object(n["s"])(),Object(n["c"])("div",null,[g,Object(n["e"])("form",{onSubmit:t[13]||(t[13]=Object(n["E"])((function(){return i.fetchUserData&&i.fetchUserData.apply(i,arguments)}),["prevent"]))},[Object(n["e"])("label",null,[D,C,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.firstname=e}),onBlur:t[2]||(t[2]=function(e){return a.v$.firstname.$touch()}),type:"text",name:"firstname"},null,544),[[n["A"],l.firstname]])]),P,x,Object(n["D"])(Object(n["e"])("p",null," please enter your firstname ",512),[[n["B"],a.v$.firstname.$invalid&&a.v$.firstname.$dirty&&!this.errors]]),Object(n["e"])("label",null,[B,U,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.lastname=e}),onBlur:t[4]||(t[4]=function(e){return a.v$.lastname.$touch()}),type:"text",name:"lastname"},null,544),[[n["A"],l.lastname]])]),k,S,Object(n["D"])(Object(n["e"])("p",null," please enter your lastname ",512),[[n["B"],a.v$.lastname.$invalid&&a.v$.lastname.$dirty&&!this.errors]]),Object(n["e"])("label",null,[A,V,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.passwordCreate=e}),onBlur:t[6]||(t[6]=function(e){return a.v$.passwordCreate.$touch()}),type:"password"},null,544),[[n["A"],l.passwordCreate]])]),q,T,Object(n["D"])(Object(n["e"])("p",null," please enter your password ",512),[[n["B"],a.v$.passwordCreate.$invalid&&a.v$.passwordCreate.$dirty&&!this.errors]]),Object(n["e"])("label",null,[R,J,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return l.confirmPasswordCreate=e}),onBlur:t[8]||(t[8]=function(e){return a.v$.confirmPasswordCreate.$touch()}),type:"password"},null,544),[[n["A"],l.confirmPasswordCreate]])]),M,E,Object(n["D"])(Object(n["e"])("p",null," please confirm your password ",512),[[n["B"],a.v$.confirmPasswordCreate.$invalid&&a.v$.confirmPasswordCreate.$dirty&&!this.errors]]),Object(n["e"])("label",null,[L,F,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[9]||(t[9]=function(e){return l.email=e}),onBlur:t[10]||(t[10]=function(e){return a.v$.email.$touch()}),name:"email",type:"email"},null,544),[[n["A"],l.email]])]),N,z,Object(n["D"])(Object(n["e"])("p",null," please enter your email ",512),[[n["B"],a.v$.email.$invalid&&a.v$.email.$dirty&&!this.errors]]),Object(n["e"])("label",null,[G,H,Object(n["D"])(Object(n["e"])("input",{"onUpdate:modelValue":t[11]||(t[11]=function(e){return l.date_of_birth=e}),onBlur:t[12]||(t[12]=function(e){return a.v$.date_of_birth.$touch()}),type:"date"},null,544),[[n["A"],l.date_of_birth]])]),I,K,Object(n["D"])(Object(n["e"])("p",null," please enter date of birth ",512),[[n["B"],a.v$.date_of_birth.$invalid&&a.v$.date_of_birth.$dirty&&!this.errors]]),Object(n["e"])("button",{type:"submit",disabled:i.btnDisable}," register ",8,["disabled"])],32),Object(n["D"])(Object(n["e"])("p",null,Object(n["y"])(l.errors),513),[[n["B"],l.errors]])])}var W={name:"Register",setup:function(){return{v$:Object($["a"])()}},validations:function(){return{firstname:{required:w["c"],alpha:w["a"]},lastname:{required:w["c"],alpha:w["a"]},passwordCreate:{required:w["c"]},confirmPasswordCreate:{sameAs:Object(w["d"])(this.passwordCreate)},email:{required:w["c"],email:w["b"]},date_of_birth:{required:w["c"]}}},data:function(){return{firstname:"",lastname:"",passwordCreate:"",confirmPasswordCreate:"",email:"",date_of_birth:"",errors:""}},computed:{btnDisable:function(){return this.v$.firstname.$invalid||this.v$.lastname.$invalid||this.v$.passwordCreate.$invalid||this.v$.confirmPasswordCreate.$invalid||this.v$.email.$invalid||this.v$.date_of_birth.$invalid}},methods:{fetchUserData:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n,a,l,i,u,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.firstname,n=e.lastname,a=e.passwordCreate,e.confirmPasswordCreate,l=e.email,i=e.date_of_birth,u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstname:r,lastname:n,passwordCreate:a,email:l,date_of_birth:i})},t.next=4,fetch("http://127.0.0.1:1337/api/?registration=true",u);case 4:if(o=t.sent,!o.ok){t.next=12;break}return t.next=8,o.json();case 8:s=t.sent,e.$router.push({name:"profile",params:{firstname:s[0].firstname,lastname:s[0].lastname,email:s[0].email,date_of_birth:s[0].date_of_birth}}),t.next=21;break;case 12:return t.next=14,o.json();case 14:e.errors=t.sent,e.firstname="",e.lastname="",e.email="",e.passwordCreate="",e.confirmPasswordCreate="",e.date_of_birth="";case 21:case"end":return t.stop()}}),t)})))()}}};W.render=Q;var X=W,Y=Object(n["e"])("h1",null,"Profile",-1),Z=Object(n["e"])("p",null,"Firstname:",-1),ee=Object(n["e"])("hr",null,null,-1),te=Object(n["e"])("br",null,null,-1),re=Object(n["e"])("p",null,"Lastname:",-1),ne=Object(n["e"])("hr",null,null,-1),ae=Object(n["e"])("br",null,null,-1),le=Object(n["e"])("p",null,"e-mail:",-1),ie=Object(n["e"])("hr",null,null,-1),ue=Object(n["e"])("br",null,null,-1),oe=Object(n["e"])("p",null,"date of birth:",-1),se=Object(n["e"])("hr",null,null,-1),ce=Object(n["e"])("br",null,null,-1);function be(e,t,r,a,l,i){return Object(n["s"])(),Object(n["c"])("div",null,[Y,Z,Object(n["d"])(Object(n["y"])(this.$route.params.firstname),1),ee,te,re,Object(n["d"])(Object(n["y"])(this.$route.params.lastname),1),ne,ae,le,Object(n["d"])(Object(n["y"])(this.$route.params.email),1),ie,ue,oe,Object(n["d"])(Object(n["y"])(this.$route.params.date_of_birth),1),se,ce])}var de={name:"Profile"};de.render=be;var pe=de,me=[{name:"home",path:"/",component:_},{name:"login",path:"/login",component:_},{name:"register",path:"/register",component:X},{name:"profile",path:"/profile/:firstname?/:lastname?/:email?/:date_of_birth?",component:pe}],fe=Object(o["a"])({history:Object(o["b"])("/"),routes:me}),je=fe,Oe=Object(n["b"])(u);Oe.use(je),Oe.mount("#app")},caaf:function(e,t,r){"use strict";r("de73")},de73:function(e,t,r){}});
//# sourceMappingURL=app.56900ae3.js.map