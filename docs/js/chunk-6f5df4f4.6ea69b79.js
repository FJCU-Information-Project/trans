(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f5df4f4"],{"14e8":function(e,t,n){"use strict";n.r(t);var o=n("f2bf"),c={class:"grid-content banner"},a={class:"ban-title"},r=Object(o["createElementVNode"])("h1",null,"Closeness Analysis",-1),l=Object(o["createElementVNode"])("span",{style:{"font-weight":"bolder"},class:"sub-title"}," 請選取一個您感興趣的節點，我們將會為您分析出此節點有幾種關聯 ",-1),d={class:"select-group"},i={class:"block"},s={class:"grid-content main_sec"},u=Object(o["createElementVNode"])("h1",null,"Closeness Analysis",-1),b=Object(o["createElementVNode"])("hr",null,null,-1),j=Object(o["createElementVNode"])("p",null,"此處為分析功能之說明",-1),O=Object(o["createElementVNode"])("iframe",{src:"/closeness.html",frameborder:"0",width:"100%",height:"100%"},"\n        \x3c!-- 社會網路圖 --\x3e\n      ",-1);function f(e,t,n,f,h,m){var p=Object(o["resolveComponent"])("Navbar"),N=Object(o["resolveComponent"])("el-cascader"),_=Object(o["resolveComponent"])("el-col"),V=Object(o["resolveComponent"])("el-row"),v=Object(o["resolveComponent"])("el-table-column"),C=Object(o["resolveComponent"])("el-table");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(V,{class:"close"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(_,{span:24},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(p),Object(o["createElementVNode"])("div",a,[r,l,Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(N,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t}),options:h.attributes,props:h.props,onChange:m.handleChange,placeholder:"請選擇事故節點"},null,8,["modelValue","options","props","onChange"])])])])])]})),_:1})]})),_:1}),Object(o["createVNode"])(V,{class:"con_flex"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(_,{span:11},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(C,{data:h.tableData,stripe:"",style:{width:"100%"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(v,{prop:"No",label:"No",width:"180"}),Object(o["createVNode"])(v,{prop:"To_id",label:"To_id",width:"180"}),Object(o["createVNode"])(v,{prop:"To_id_name",label:"To_id_name"})]})),_:1},8,["data"])])]})),_:1}),Object(o["createVNode"])(_,{span:9,class:"analysis-table"},{default:Object(o["withCtx"])((function(){return[u,b,j,O]})),_:1})]})),_:1})],64)}var h=n("d178"),m={name:"ClosenessAnalysis",components:{Navbar:h["a"]},data:function(){return{attributes:[],tableData:[{No:"1",To_id:"1",To_id_name:"晴",Weight:"2500"},{No:"2",To_id:"1",To_id_name:"晴",Weight:"2500"},{No:"3",To_id:"1",To_id_name:"晴",Weight:"2500"},{No:"4",To_id:"1",To_id_name:"晴",Weight:"2500"},{No:"5",To_id:"1",To_id_name:"晴",Weight:"2500"},{No:"6",To_id:"1",To_id_name:"晴",Weight:"2500"},{No:"7",To_id:"1",To_id_name:"晴",Weight:"2500"},{No:"8",To_id:"1",To_id_name:"晴",Weight:"2500"}],props:{expandTrigger:"hover"}}},methods:{handleChange:function(){var e="http://localhost:5000";this.$http.get(e+"/receive?node="+this.value[1]).then((function(e){console.log(e.data)}))}},created:function(){var e=this,t="https://fju-trans.herokuapp.com";this.$http.get(t+"/attributes").then((function(t){console.log(t.data),e.attributes=t.data}))}},p=(n("f041"),n("d959")),N=n.n(p);const _=N()(m,[["render",f]]);t["default"]=_},"5be0":function(e,t,n){},"6ca3":function(e,t,n){},"9f8d":function(e,t,n){"use strict";n("5be0")},d178:function(e,t,n){"use strict";var o=n("f2bf"),c={class:"grid-content nav"},a=Object(o["createElementVNode"])("p",{id:"logo"},"TRANS",-1),r={class:"menu"},l=Object(o["createTextVNode"])("Analysis"),d=Object(o["createTextVNode"])("Management"),i=Object(o["createTextVNode"])("Auth");function s(e,t,n,s,u,b){var j=Object(o["resolveComponent"])("router-link"),O=Object(o["resolveComponent"])("el-button"),f=Object(o["resolveComponent"])("el-col"),h=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(h,{class:"close"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{span:24},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(j,{to:"/dataset",class:"link"},{default:Object(o["withCtx"])((function(){return[a]})),_:1}),Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(j,{to:{name:"Home"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{round:""},{default:Object(o["withCtx"])((function(){return[l]})),_:1})]})),_:1}),Object(o["createVNode"])(j,{to:{name:"Management"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{round:""},{default:Object(o["withCtx"])((function(){return[d]})),_:1})]})),_:1}),Object(o["createVNode"])(j,{to:{name:"Login"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{round:"",type:"danger"},{default:Object(o["withCtx"])((function(){return[i]})),_:1})]})),_:1})])])]})),_:1})]})),_:1})}var u={name:"Navbar",data:function(){return{}}},b=(n("9f8d"),n("d959")),j=n.n(b);const O=j()(u,[["render",s]]);t["a"]=O},f041:function(e,t,n){"use strict";n("6ca3")}}]);
//# sourceMappingURL=chunk-6f5df4f4.6ea69b79.js.map