(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15bc2504"],{"68af":function(e,t,n){"use strict";n("b026")},a763:function(e,t,n){"use strict";n.r(t);var a=n("f2bf"),o={class:"grid-content banner"},c={class:"ban-title"},r=Object(a["createElementVNode"])("h1",null,"Isolation Analysis",-1),l=Object(a["createElementVNode"])("span",{style:{"font-weight":"bolder"},class:"sub-title"}," 此分析我們將為您呈現整個網路圖中被孤立的節點 ",-1),i={class:"select-group"},s={class:"block"},d=Object(a["createElementVNode"])("h1",null,"Isolation Analysis",-1),u=Object(a["createElementVNode"])("hr",null,null,-1),b=Object(a["createElementVNode"])("p",null," 使用者透過此分析的 SNA 圖可得知在該資料集中並非造成車禍發生的因素節點。其中表格中所顯示的關聯組合皆為相同的起始因素節點，而其每一組組合的權重皆為0，亦可解釋為「在該資料集中並沒有出現過的關聯組合」。 ",-1),f=Object(a["createElementVNode"])("br",null,null,-1),j={class:"grid-content bg-purple main_sec"},O={class:"grid-content bg-purple-light iframe_main_sec"},h=["src"];function m(e,t,n,m,p,v){var N=Object(a["resolveComponent"])("Navbar"),V=Object(a["resolveComponent"])("el-cascader"),g=Object(a["resolveComponent"])("el-col"),C=Object(a["resolveComponent"])("el-row"),w=Object(a["resolveComponent"])("el-table-column"),_=Object(a["resolveComponent"])("el-table"),x=Object(a["resolveDirective"])("loading");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(C,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{span:24},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(N),Object(a["createElementVNode"])("div",c,[r,l,Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(V,{modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return p.value=e}),options:p.attributes,props:p.props,onChange:v.handleChange,placeholder:"請選擇事故節點"},null,8,["modelValue","options","props","onChange"])])])])])]})),_:1})]})),_:1}),Object(a["createVNode"])(C,{class:"con_flex"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{span:11,class:"analysis-table"},{default:Object(a["withCtx"])((function(){return[d,u,b,f,Object(a["withDirectives"])(Object(a["createElementVNode"])("div",j,[Object(a["createVNode"])(_,{data:p.isolationData,stripe:"",style:{width:"100%"}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,{prop:"from_id_name",label:"起始節點"}),Object(a["createVNode"])(w,{prop:"to_id_name",label:"終點節點"}),Object(a["createVNode"])(w,{prop:"total",label:"權重值"})]})),_:1},8,["data"])],512),[[x,p.loading]])]})),_:1}),Object(a["createVNode"])(g,{span:12},{default:Object(a["withCtx"])((function(){return[Object(a["withDirectives"])(Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("iframe",{ref:"Iframe",src:p.src,frameborder:"0",width:"100%",height:"100%"},"\n            \x3c!-- 社會網路圖 --\x3e\n          ",8,h)],512),[[x,p.loading]])]})),_:1})]})),_:1})])}var p=n("d178"),v={name:"IslationAnalysis",components:{Navbar:p["a"]},data:function(){return{attributes:[],value:"",isolationData:[],tableData:[],props:{expandTrigger:"hover"},loading:!1,src:"http://140.136.155.121:50000/sna_graph/isolation.html"}},methods:{iframeLoad:function(){var e=this;this.loading=!0;var t=this.$refs.Iframe;t.attachEvent?t.attachEvent("onload",(function(){e.loading=!1})):t.onload=function(){e.loading=!1}},handleChange:function(){var e=this;this.loading=!0;var t="http://140.136.155.121:50000";this.$http.get(t+"/isolationReceive?node="+this.value[1]).then((function(){var n=e.$refs.Iframe,a=n.src;n.src=a,e.iframeLoad(),e.$http.get(t+"/isolationcsv").then((function(t){e.loading=!1,console.log(t.data),e.isolationData=t.data}))}))}},mounted:function(){this.iframeLoad()},created:function(){var e=this,t="http://140.136.155.121:50000";this.$http.get(t+"/attributes").then((function(t){console.log(t.data),e.attributes=t.data}))}},N=(n("68af"),n("d959")),V=n.n(N);const g=V()(v,[["render",m]]);t["default"]=g},b026:function(e,t,n){},d178:function(e,t,n){"use strict";var a=n("f2bf"),o={class:"grid-content nav"},c=Object(a["createElementVNode"])("p",{id:"logo"},"TRANS",-1),r={class:"menu"},l=Object(a["createTextVNode"])("Management"),i=Object(a["createTextVNode"])("Auth");function s(e,t,n,s,d,u){var b=Object(a["resolveComponent"])("router-link"),f=Object(a["resolveComponent"])("el-button"),j=Object(a["resolveComponent"])("el-col"),O=Object(a["resolveComponent"])("el-row");return Object(a["openBlock"])(),Object(a["createBlock"])(O,{class:"close"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(j,{span:24},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(b,{to:"/dataset",class:"link"},{default:Object(a["withCtx"])((function(){return[c]})),_:1}),Object(a["createElementVNode"])("div",r,[Object(a["createCommentVNode"])("",!0),d.isAuth?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:1,to:{name:"Management"},class:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(f,{round:""},{default:Object(a["withCtx"])((function(){return[l]})),_:1})]})),_:1})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(b,{to:{name:"Login"},class:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(f,{round:"",type:"danger"},{default:Object(a["withCtx"])((function(){return[i]})),_:1})]})),_:1})])])]})),_:1})]})),_:1})}var d={name:"Navbar",data:function(){return{isAuth:""}},mounted:function(){this.isAuth=localStorage.getItem("token")}},u=(n("ece7"),n("d959")),b=n.n(u);const f=b()(d,[["render",s]]);t["a"]=f},ece7:function(e,t,n){"use strict";n("f207")},f207:function(e,t,n){}}]);
//# sourceMappingURL=chunk-15bc2504.4ac68e92.js.map