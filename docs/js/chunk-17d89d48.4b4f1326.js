(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17d89d48"],{1071:function(e,t,o){"use strict";o.r(t);o("b0c0");var n=o("f2bf"),c={class:"grid-content banner"},r=Object(n["createElementVNode"])("p",null,"新增資料集",-1),a=Object(n["createElementVNode"])("span",{class:"text-gray-500"},"-",-1),l=Object(n["createTextVNode"])("Create"),u=Object(n["createTextVNode"])("Cancel");function d(e,t,o,d,i,b){var s=Object(n["resolveComponent"])("Navbar"),f=Object(n["resolveComponent"])("el-input"),m=Object(n["resolveComponent"])("el-form-item"),O=Object(n["resolveComponent"])("el-option"),j=Object(n["resolveComponent"])("el-select"),p=Object(n["resolveComponent"])("el-date-picker"),V=Object(n["resolveComponent"])("el-col"),v=Object(n["resolveComponent"])("el-time-picker"),N=Object(n["resolveComponent"])("el-switch"),h=Object(n["resolveComponent"])("el-checkbox"),C=Object(n["resolveComponent"])("el-checkbox-group"),x=Object(n["resolveComponent"])("el-radio"),w=Object(n["resolveComponent"])("el-radio-group"),y=Object(n["resolveComponent"])("el-button"),g=Object(n["resolveComponent"])("el-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(s),Object(n["createElementVNode"])("div",c,[r,Object(n["createVNode"])(g,{model:i.form,"label-width":"120px",class:"AddDataSetForm"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{label:"Activity name"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{modelValue:i.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.name=e})},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(m,{label:"Activity zone"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{modelValue:i.form.region,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.form.region=e}),placeholder:"please select your zone"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(O,{label:"Zone one",value:"shanghai"}),Object(n["createVNode"])(O,{label:"Zone two",value:"beijing"})]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(m,{label:"Activity time"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{span:11},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{modelValue:i.form.date1,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.form.date1=e}),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(V,{span:2,class:"text-center"},{default:Object(n["withCtx"])((function(){return[a]})),_:1}),Object(n["createVNode"])(V,{span:11},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(v,{modelValue:i.form.date2,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.form.date2=e}),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(m,{label:"Instant delivery"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{modelValue:i.form.delivery,"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.form.delivery=e})},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(m,{label:"Activity type"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(C,{modelValue:i.form.type,"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.form.type=e})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(h,{label:"Online activities",name:"type"}),Object(n["createVNode"])(h,{label:"Promotion activities",name:"type"}),Object(n["createVNode"])(h,{label:"Offline activities",name:"type"}),Object(n["createVNode"])(h,{label:"Simple brand exposure",name:"type"})]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(m,{label:"Resources"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{modelValue:i.form.resource,"onUpdate:modelValue":t[6]||(t[6]=function(e){return i.form.resource=e})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{label:"Sponsor"}),Object(n["createVNode"])(x,{label:"Venue"})]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(m,{label:"Activity form"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{modelValue:i.form.desc,"onUpdate:modelValue":t[7]||(t[7]=function(e){return i.form.desc=e}),type:"textarea"},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{type:"primary",onClick:b.onSubmit},{default:Object(n["withCtx"])((function(){return[l]})),_:1},8,["onClick"]),Object(n["createVNode"])(y,null,{default:Object(n["withCtx"])((function(){return[u]})),_:1})]})),_:1})]})),_:1},8,["model"])])])}var i=o("d178"),b={name:"Config",components:{Navbar:i["a"]},data:function(){return{input:"",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")}}},s=(o("55d8"),o("d959")),f=o.n(s);const m=f()(b,[["render",d]]);t["default"]=m},1983:function(e,t,o){},"55d8":function(e,t,o){"use strict";o("1983")},9914:function(e,t,o){},d178:function(e,t,o){"use strict";var n=o("f2bf"),c=function(e){return Object(n["pushScopeId"])("data-v-3a7d0d22"),e=e(),Object(n["popScopeId"])(),e},r={class:"grid-content nav"},a=c((function(){return Object(n["createElementVNode"])("p",{id:"logo"},"TRANS",-1)})),l={class:"menu"},u=c((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-s-home"},null,-1)})),d=Object(n["createTextVNode"])("首頁"),i=c((function(){return Object(n["createElementVNode"])("i",{class:"el-icon-user"},null,-1)})),b=Object(n["createTextVNode"])("登入授權碼");function s(e,t,o,c,s,f){var m=Object(n["resolveComponent"])("router-link"),O=Object(n["resolveComponent"])("el-button"),j=Object(n["resolveComponent"])("el-popover"),p=Object(n["resolveComponent"])("el-avatar"),V=Object(n["resolveComponent"])("el-col"),v=Object(n["resolveComponent"])("el-row"),N=Object(n["resolveDirective"])("popover");return Object(n["openBlock"])(),Object(n["createBlock"])(v,{class:"close sticky-top"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{span:24},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(m,{to:"/dataset",class:"link"},{default:Object(n["withCtx"])((function(){return[a]})),_:1}),Object(n["createElementVNode"])("div",l,[Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(m,{to:{name:"Index"},class:"link"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(O,{round:"",type:"danger",class:"fz-20 homebtn"},{default:Object(n["withCtx"])((function(){return[u,d]})),_:1})]})),_:1}),Object(n["createVNode"])(m,{to:{name:"Login"},class:"link"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(O,{round:"",type:"danger",class:"fz-20"},{default:Object(n["withCtx"])((function(){return[i,b]})),_:1})]})),_:1}),Object(n["createVNode"])(j,{style:{"font-size":"20px"},ref:"popover",placement:"bottom",title:"您的授權碼到期日為▼ ",width:"200",trigger:"hover",content:s.expireDate},null,8,["content"]),Object(n["withDirectives"])(Object(n["createVNode"])(O,{class:"afterlogin"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{size:30,class:"avatarsize",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(s.isAuth),1)]})),_:1},512),[[N,void 0,"popover"]])])])]})),_:1})]})),_:1})}o("e9c4");var f={name:"Navbar",data:function(){return{isAuth:"載入中",expireDate:null}},mounted:function(){var e=this;if(localStorage.getItem("token")){var t=new FormData;t.append("token",localStorage.getItem("token"));var o="http://140.136.155.121:50000";setTimeout((function(){e.$http.post(o+"/user",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){console.log(JSON.stringify(t.data)),e.isAuth=t.data[2]+"，您好！",e.expireDate=new Date(Date.parse(t.data[5]))}))}),1e3)}else this.isAuth="目前未登入"}},m=(o("efba"),o("d959")),O=o.n(m);const j=O()(f,[["render",s],["__scopeId","data-v-3a7d0d22"]]);t["a"]=j},e9c4:function(e,t,o){var n=o("23e7"),c=o("da84"),r=o("d066"),a=o("2ba4"),l=o("e330"),u=o("d039"),d=c.Array,i=r("JSON","stringify"),b=l(/./.exec),s=l("".charAt),f=l("".charCodeAt),m=l("".replace),O=l(1..toString),j=/[\uD800-\uDFFF]/g,p=/^[\uD800-\uDBFF]$/,V=/^[\uDC00-\uDFFF]$/,v=function(e,t,o){var n=s(o,t-1),c=s(o,t+1);return b(p,e)&&!b(V,c)||b(V,e)&&!b(p,n)?"\\u"+O(f(e,0),16):e},N=u((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&n({target:"JSON",stat:!0,forced:N},{stringify:function(e,t,o){for(var n=0,c=arguments.length,r=d(c);n<c;n++)r[n]=arguments[n];var l=a(i,null,r);return"string"==typeof l?m(l,j,v):l}})},efba:function(e,t,o){"use strict";o("9914")}}]);
//# sourceMappingURL=chunk-17d89d48.4b4f1326.js.map