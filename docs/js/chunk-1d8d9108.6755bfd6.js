(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d8d9108"],{"445b":function(e,t,n){},"6e0c":function(e,t,n){"use strict";n("445b")},a55b:function(e,t,n){"use strict";n.r(t);var o=n("f2bf"),c={class:"grid-content login-banner"},a={class:"login-title"},r=Object(o["createElementVNode"])("h1",null,"授權碼",-1),l=Object(o["createTextVNode"])("確認");function u(e,t,n,u,i,s){var d=this,b=Object(o["resolveComponent"])("Navbar"),j=Object(o["resolveComponent"])("el-input"),O=Object(o["resolveComponent"])("el-alert"),f=Object(o["resolveComponent"])("el-button"),m=Object(o["resolveComponent"])("el-card"),h=Object(o["resolveComponent"])("el-col"),p=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,{span:24},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,["/dataset"!==d.$route.path?(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:0})):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(m,{shadow:"always",class:"con-flex"},{default:Object(o["withCtx"])((function(){return[r,Object(o["createVNode"])(j,{modelValue:i.token,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.token=e}),placeholder:"請輸入授權碼",class:"number_input",onChange:s.authcheck},null,8,["modelValue","onChange"]),i.alert?(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:0,title:"error alert",type:"error",description:"授權碼無效","show-icon":""})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(f,{type:"danger",class:"submit"},{default:Object(o["withCtx"])((function(){return[l]})),_:1})]})),_:1})])])]})),_:1})]})),_:1})}var i=n("d178"),s={name:"Login",components:{Navbar:i["a"]},data:function(){return{token:"",alert:!1}},methods:{authcheck:function(){var e=this,t="http://140.136.155.121:50000";this.$http.post(t+"/auth",{token:this.token}).then((function(t){console.log(t.data),!0===t.data.valid?(console.log("Token 是有用的!!"),localStorage.setItem("token",e.token),e.$router.push({name:"Management"}),e.alert=!1):(console.log("Token 是廢物"),e.alert=!0)}))}},mounted:function(){console.log(this.$route.path)}},d=(n("6e0c"),n("d959")),b=n.n(d);const j=b()(s,[["render",u]]);t["default"]=j},d178:function(e,t,n){"use strict";var o=n("f2bf"),c={class:"grid-content nav"},a=Object(o["createElementVNode"])("p",{id:"logo"},"TRANS",-1),r={class:"menu"},l=Object(o["createTextVNode"])("Management"),u=Object(o["createTextVNode"])("Auth");function i(e,t,n,i,s,d){var b=Object(o["resolveComponent"])("router-link"),j=Object(o["resolveComponent"])("el-button"),O=Object(o["resolveComponent"])("el-col"),f=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(f,{class:"close"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{span:24},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(b,{to:"/dataset",class:"link"},{default:Object(o["withCtx"])((function(){return[a]})),_:1}),Object(o["createElementVNode"])("div",r,[Object(o["createCommentVNode"])("",!0),s.isAuth?(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:1,to:{name:"Management"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{round:""},{default:Object(o["withCtx"])((function(){return[l]})),_:1})]})),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(b,{to:{name:"Login"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{round:"",type:"danger"},{default:Object(o["withCtx"])((function(){return[u]})),_:1})]})),_:1})])])]})),_:1})]})),_:1})}var s={name:"Navbar",data:function(){return{isAuth:""}},mounted:function(){this.isAuth=localStorage.getItem("token")}},d=(n("ece7"),n("d959")),b=n.n(d);const j=b()(s,[["render",i]]);t["a"]=j},ece7:function(e,t,n){"use strict";n("f207")},f207:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1d8d9108.6755bfd6.js.map