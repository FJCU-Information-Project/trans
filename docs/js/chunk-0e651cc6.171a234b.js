(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e651cc6"],{"14e8":function(e,t,n){"use strict";n.r(t);var o=n("f2bf"),c={class:"grid-content banner"},a={class:"ban-title"},r=Object(o["createElementVNode"])("h1",null,"Closeness Analysis",-1),l=Object(o["createElementVNode"])("span",{style:{"font-weight":"bolder"},class:"sub-title"}," 請選取一個您感興趣的節點，我們將會為您分析出此節點有幾種關聯 ",-1),s={class:"select-group"},i={class:"block"},d={class:"grid-content main_sec"},u=Object(o["createElementVNode"])("h1",null,"Closeness Analysis",-1),b=Object(o["createElementVNode"])("hr",null,null,-1),f=Object(o["createElementVNode"])("p",null," 使用者選擇一個肇事因素做為中心起始節點，透過分析起始節點與周遭其他節點，找出與該節點擁有幾種不同的關聯 ",-1),h=Object(o["createElementVNode"])("br",null,null,-1),j=["src"];function O(e,t,n,O,m,p){var v=Object(o["resolveComponent"])("Navbar"),N=Object(o["resolveComponent"])("el-cascader"),V=Object(o["resolveComponent"])("el-col"),g=Object(o["resolveComponent"])("el-row"),C=Object(o["resolveComponent"])("el-table-column"),_=Object(o["resolveComponent"])("el-table");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(g,{class:"close"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(V,{span:24},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(v),Object(o["createElementVNode"])("div",a,[r,l,Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])(N,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return m.value=e}),options:m.attributes,props:m.props,onChange:p.handleChange,placeholder:"請選擇事故節點"},null,8,["modelValue","options","props","onChange"])])])])])]})),_:1})]})),_:1}),Object(o["createVNode"])(g,{class:"con_flex"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(V,{span:11},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",d,[Object(o["createVNode"])(_,{data:m.closenessData,stripe:"",style:{width:"100%"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(C,{prop:"from_id",label:"肇事因素編號",width:"180"}),Object(o["createVNode"])(C,{prop:"from_id_name",label:"肇事因素名稱",width:"180"}),Object(o["createVNode"])(C,{prop:"weight",label:"Closeness Centrality"})]})),_:1},8,["data"])])]})),_:1}),Object(o["createVNode"])(V,{span:9,class:"analysis-table"},{default:Object(o["withCtx"])((function(){return[u,b,f,h,Object(o["createElementVNode"])("iframe",{ref:"Iframe",src:m.src,frameborder:"0",width:"100%",height:"100%"},"\n        \x3c!-- 社會網路圖 --\x3e\n      ",8,j)]})),_:1})]})),_:1})],64)}var m=n("d178"),p={name:"ClosenessAnalysis",components:{Navbar:m["a"]},data:function(){return{attributes:[],closenessData:[],tableData:[{No:"1",To_id:"1",To_id_name:"晴",Weight:"2500"},{No:"2",To_id:"1",To_id_name:"晴",Weight:"2500"},{No:"3",To_id:"1",To_id_name:"晴",Weight:"2500"}],props:{expandTrigger:"hover"},value:"",loading:!1,src:"http://140.136.155.121:50000/sna_graph/closeness.html"}},methods:{iframeLoad:function(){var e=this;this.loading=!0;var t=this.$refs.Iframe;t.attachEvent?t.attachEvent("onload",(function(){e.loading=!1})):t.onload=function(){e.loading=!1}},handleChange:function(){var e=this;this.loading=!0;var t="http://140.136.155.121:50000";this.$http.get(t+"/closenessReceive?node="+this.value[1]).then((function(){var n=e.$refs.Iframe,o=n.src;n.src=o,e.iframeLoad(),e.$http.get(t+"/closenesscsv").then((function(t){e.loading=!1,console.log(t.data),e.closenessData=t.data}))}))}},created:function(){var e=this,t="http://140.136.155.121:50000";this.$http.get(t+"/attributes").then((function(t){console.log(t.data),e.attributes=t.data}))}},v=(n("4786"),n("d959")),N=n.n(v);const V=N()(p,[["render",O]]);t["default"]=V},4786:function(e,t,n){"use strict";n("a855")},a855:function(e,t,n){},d178:function(e,t,n){"use strict";var o=n("f2bf"),c={class:"grid-content nav"},a=Object(o["createElementVNode"])("p",{id:"logo"},"TRANS",-1),r={class:"menu"},l=Object(o["createTextVNode"])("Management"),s=Object(o["createTextVNode"])("Auth");function i(e,t,n,i,d,u){var b=Object(o["resolveComponent"])("router-link"),f=Object(o["resolveComponent"])("el-button"),h=Object(o["resolveComponent"])("el-col"),j=Object(o["resolveComponent"])("el-row");return Object(o["openBlock"])(),Object(o["createBlock"])(j,{class:"close"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,{span:24},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(b,{to:"/dataset",class:"link"},{default:Object(o["withCtx"])((function(){return[a]})),_:1}),Object(o["createElementVNode"])("div",r,[Object(o["createCommentVNode"])("",!0),d.isAuth?(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:1,to:{name:"Management"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{round:""},{default:Object(o["withCtx"])((function(){return[l]})),_:1})]})),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(b,{to:{name:"Login"},class:"link"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{round:"",type:"danger"},{default:Object(o["withCtx"])((function(){return[s]})),_:1})]})),_:1})])])]})),_:1})]})),_:1})}var d={name:"Navbar",data:function(){return{isAuth:""}},mounted:function(){this.isAuth=localStorage.getItem("token")}},u=(n("ece7"),n("d959")),b=n.n(u);const f=b()(d,[["render",i]]);t["a"]=f},ece7:function(e,t,n){"use strict";n("f207")},f207:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0e651cc6.171a234b.js.map