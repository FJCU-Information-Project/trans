(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f970284"],{2292:function(e,t,n){"use strict";n.r(t);var a=n("f2bf"),c={class:"grid-content banner"},o={class:"ban-title"},r=Object(a["createElementVNode"])("h1",null,"Layer Analysis",-1),l=Object(a["createElementVNode"])("span",{style:{"font-weight":"bolder"},class:"sub-title"}," 請選擇您想分析的中心節點及階層，我們將會為您呈現中心節點向外發散的層級關係點層級 ",-1),i={class:"select-group"},d={class:"block"},u=Object(a["createElementVNode"])("h1",null,"Layer Analysis",-1),s=Object(a["createElementVNode"])("hr",null,null,-1),b=Object(a["createElementVNode"])("p",null,"此處為分析功能之說明",-1),f={class:"grid-content bg-purple main_sec"},j={class:"grid-content bg-purple-light iframe_main_sec"},O=["src"];function p(e,t,n,p,h,m){var v=Object(a["resolveComponent"])("Navbar"),V=Object(a["resolveComponent"])("el-cascader"),N=Object(a["resolveComponent"])("el-option"),g=Object(a["resolveComponent"])("el-select"),C=Object(a["resolveComponent"])("el-col"),w=Object(a["resolveComponent"])("el-row"),k=Object(a["resolveComponent"])("el-table-column"),x=Object(a["resolveComponent"])("el-table"),_=Object(a["resolveDirective"])("loading");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(w,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{span:24},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",c,[Object(a["createVNode"])(v),Object(a["createElementVNode"])("div",o,[r,l,Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(V,{modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.value=e}),options:h.attributes,props:h.props,onChange:m.handleChange},null,8,["modelValue","options","props","onChange"])]),Object(a["createVNode"])(g,{modelValue:h.layerValue,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.layerValue=e}),placeholder:"請選擇層級"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(h.tableData,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(N,{key:e.id,label:e.node,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])])])])]})),_:1})]})),_:1}),Object(a["createVNode"])(w,{class:"con_flex"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{span:9,class:"analysis-table"},{default:Object(a["withCtx"])((function(){return[u,s,b,Object(a["createElementVNode"])("div",f,[Object(a["createVNode"])(x,{data:h.layerData,stripe:"",style:{width:"100%"}},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(k,{prop:"factorRank",label:"關聯肇事因素排名",width:"180"}),Object(a["createVNode"])(k,{prop:"factor",label:"肇事因素",width:"180"}),Object(a["createVNode"])(k,{prop:"caseNumber",label:"案件總數"})]})),_:1},8,["data"])])]})),_:1}),Object(a["createVNode"])(C,{span:14},{default:Object(a["withCtx"])((function(){return[Object(a["withDirectives"])(Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("iframe",{ref:"Iframe",src:h.src,frameborder:"0",width:"100%",height:"100%"},"\n          \x3c!-- 社會網路圖 --\x3e\n        ",8,O)],512),[[_,h.loading]])]})),_:1})]})),_:1})],64)}var h=n("d178"),m={name:"LayerAnalysis",components:{Navbar:h["a"]},data:function(){return{attributes:[],layerData:[],tableData:[{id:"1",node:"第一層"},{id:"2",node:"第二層"}],value:"",layerValue:"",props:{expandTrigger:"hover"},loading:!1,src:"https://fju-trans.herokuapp.com/sna_graph/snaRank10.html"}},methods:{iframeLoad:function(){var e=this;this.loading=!0;var t=this.$refs.Iframe;t.attachEvent?t.attachEvent("onload",(function(){e.loading=!1})):t.onload=function(){e.loading=!1}},handleChange:function(){var e=this;this.loading=!0;var t="https://fju-trans.herokuapp.com";this.$http.get(t+"/receive?node="+this.value[1]).then((function(){var t=e.$refs.Iframe,n=t.src;t.src=n,e.iframeLoad()})),this.$http.get(t+"/csv").then((function(t){console.log(t.data),e.layerData=t.data}))}},mounted:function(){this.iframeLoad()},created:function(){var e=this;console.log("created");var t="https://fju-trans.herokuapp.com";this.$http.get(t+"/attributes").then((function(t){console.log(t.data),e.attributes=t.data}))}},v=(n("779b"),n("d959")),V=n.n(v);const N=V()(m,[["render",p]]);t["default"]=N},"5be0":function(e,t,n){},"779b":function(e,t,n){"use strict";n("cb92")},"9f8d":function(e,t,n){"use strict";n("5be0")},cb92:function(e,t,n){},d178:function(e,t,n){"use strict";var a=n("f2bf"),c={class:"grid-content nav"},o=Object(a["createElementVNode"])("p",{id:"logo"},"TRANS",-1),r={class:"menu"},l=Object(a["createTextVNode"])("Analysis"),i=Object(a["createTextVNode"])("Management"),d=Object(a["createTextVNode"])("Auth");function u(e,t,n,u,s,b){var f=Object(a["resolveComponent"])("router-link"),j=Object(a["resolveComponent"])("el-button"),O=Object(a["resolveComponent"])("el-col"),p=Object(a["resolveComponent"])("el-row");return Object(a["openBlock"])(),Object(a["createBlock"])(p,{class:"close"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(O,{span:24},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",c,[Object(a["createVNode"])(f,{to:"/dataset",class:"link"},{default:Object(a["withCtx"])((function(){return[o]})),_:1}),Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(f,{to:{name:"Home"},class:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(j,{round:""},{default:Object(a["withCtx"])((function(){return[l]})),_:1})]})),_:1}),Object(a["createVNode"])(f,{to:{name:"Management"},class:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(j,{round:""},{default:Object(a["withCtx"])((function(){return[i]})),_:1})]})),_:1}),Object(a["createVNode"])(f,{to:{name:"Login"},class:"link"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(j,{round:"",type:"danger"},{default:Object(a["withCtx"])((function(){return[d]})),_:1})]})),_:1})])])]})),_:1})]})),_:1})}var s={name:"Navbar",data:function(){return{}}},b=(n("9f8d"),n("d959")),f=n.n(b);const j=f()(s,[["render",u]]);t["a"]=j}}]);
//# sourceMappingURL=chunk-3f970284.69d0945c.js.map