(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-766e0b7e"],{"445b":function(e,t,n){},"6e0c":function(e,t,n){"use strict";n("445b")},8989:function(e,t,n){"use strict";n("c81d")},a55b:function(e,t,n){"use strict";n.r(t);var o=n("f2bf"),c={class:"grid-content login-banner"},a={class:"login-title"},r=Object(o["createElementVNode"])("h1",null,"授權碼",-1),l=Object(o["createTextVNode"])("確認");function u(e,t,n,u,d,i){var s=this,b=Object(o["resolveComponent"])("Navbar"),j=Object(o["resolveComponent"])("el-input"),O=Object(o["resolveComponent"])("el-alert"),f=Object(o["resolveComponent"])("el-button"),m=Object(o["resolveComponent"])("el-card"),h=Object(o["resolveComponent"])("el-col"),p=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,{span:24},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,["/dataset"!==s.$route.path?(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:0})):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(m,{shadow:"always",class:"con-flex"},{default:Object(o["withCtx"])((function(){return[r,Object(o["createVNode"])(j,{modelValue:d.token,"onUpdate:modelValue":t[0]||(t[0]=function(e){return d.token=e}),placeholder:"請輸入授權碼",class:"number_input",onChange:i.authcheck},null,8,["modelValue","onChange"]),d.alert?(Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:0,title:"error alert",type:"error",description:"授權碼無效","show-icon":""})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(f,{type:"danger",class:"submit"},{default:Object(o["withCtx"])((function(){return[l]})),_:1})]})),_:1})])])]})),_:1})]})),_:1})}var d=n("d178"),i={name:"Login",components:{Navbar:d["a"]},data:function(){return{token:"",alert:!1}},methods:{authcheck:function(){var e=this,t="http://140.136.155.121:50000";this.$http.post(t+"/auth",{token:this.token}).then((function(t){console.log(t.data),!0===t.data.valid?(console.log("Token 是有用的!!"),localStorage.setItem("token",e.token),e.$router.push({name:"Management"}),e.alert=!1):(console.log("Token 是廢物"),e.alert=!0)}))}},mounted:function(){console.log(this.$route.path)}},s=(n("6e0c"),n("d959")),b=n.n(s);const j=b()(i,[["render",u]]);t["default"]=j},c81d:function(e,t,n){},d178:function(e,t,n){"use strict";var o=n("f2bf"),c={class:"grid-content nav"},a=Object(o["createElementVNode"])("p",{id:"logo"},"TRANS",-1),r={class:"menu"},l=Object(o["createTextVNode"])("Analysis"),u=Object(o["createTextVNode"])("Management"),d=Object(o["createTextVNode"])("Auth");function i(e,t,n,i,s,b){var j=Object(o["resolveComponent"])("router-link"),O=Object(o["resolveComponent"])("el-button"),f=Object(o["resolveComponent"])("el-col"),m=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(m,{class:"close"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{span:24},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(j,{to:"/dataset",class:"link"},{default:Object(o["withCtx"])((function(){return[a]})),_:1}),Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(j,{to:{name:"Home"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{round:""},{default:Object(o["withCtx"])((function(){return[l]})),_:1})]})),_:1}),Object(o["createVNode"])(j,{to:{name:"Management"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{round:""},{default:Object(o["withCtx"])((function(){return[u]})),_:1})]})),_:1}),Object(o["createVNode"])(j,{to:{name:"Login"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{round:"",type:"danger"},{default:Object(o["withCtx"])((function(){return[d]})),_:1})]})),_:1})])])]})),_:1})]})),_:1})}var s={name:"Navbar",data:function(){return{}}},b=(n("8989"),n("d959")),j=n.n(b);const O=j()(s,[["render",i]]);t["a"]=O}}]);
//# sourceMappingURL=chunk-766e0b7e.b762e994.js.map