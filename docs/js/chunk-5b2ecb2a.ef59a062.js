(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b2ecb2a"],{"0b42":function(e,t,n){var c=n("da84"),a=n("e8b5"),r=n("68ee"),o=n("861d"),l=n("b622"),i=l("species"),s=c.Array;e.exports=function(e){var t;return a(e)&&(t=e.constructor,r(t)&&(t===s||a(t.prototype))?t=void 0:o(t)&&(t=t[i],null===t&&(t=void 0))),void 0===t?s:t}},"159b":function(e,t,n){var c=n("da84"),a=n("fdbc"),r=n("785a"),o=n("17c2"),l=n("9112"),i=function(e){if(e&&e.forEach!==o)try{l(e,"forEach",o)}catch(t){e.forEach=o}};for(var s in a)a[s]&&i(c[s]&&c[s].prototype);i(r)},"17c2":function(e,t,n){"use strict";var c=n("b727").forEach,a=n("a640"),r=a("forEach");e.exports=r?[].forEach:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}},"2c08":function(e,t,n){"use strict";n.r(t);var c=n("f2bf"),a={class:"grid-content banner"},r={class:"ban-title"},o=Object(c["createElementVNode"])("h1",null,"Basic Analysis",-1),l=Object(c["createElementVNode"])("span",{style:{"font-weight":"bolder"},class:"sub-title"}," 基本的社會網路分析 ",-1),i={class:"select-group"},s={class:"block"},u=Object(c["createElementVNode"])("h1",null,"Basic Analysis",-1),d=Object(c["createElementVNode"])("hr",null,null,-1),b=Object(c["createElementVNode"])("p",null,[Object(c["createTextVNode"])(" 使用者先選擇事故結果(例如：受傷程度、主要傷處、車輛撞擊部位），藉由該節點做SNA的集中點（Degree Centrality）分析，找出肇事因素跟車禍案件結果關聯的高低，哪些節點組合最容易造成此結果並對其進行排名"),Object(c["createElementVNode"])("br"),Object(c["createElementVNode"])("br"),Object(c["createTextVNode"])("在本系統中，使用者可以藉由排名結果，得知造成車禍致死的關鍵因素，也能配合受傷程度屬性關聯，得出可能造成的死傷結果，來幫助其觀察分析結果，進而避免高致死率的肇事因素發生 ")],-1),f={class:"grid-content bg-purple main_sec"},h=Object(c["createTextVNode"])("查看"),p={class:"grid-content bg-purple-light iframe_main_sec"},j=["src"];function O(e,t,n,O,m,v){var N=Object(c["resolveComponent"])("Navbar"),V=Object(c["resolveComponent"])("el-cascader"),g=Object(c["resolveComponent"])("el-col"),C=Object(c["resolveComponent"])("el-row"),w=Object(c["resolveComponent"])("el-table-column"),x=Object(c["resolveComponent"])("el-button"),k=Object(c["resolveComponent"])("el-table"),_=Object(c["resolveDirective"])("loading");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(C,{class:"close"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{span:24},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",a,[Object(c["createVNode"])(N),Object(c["createElementVNode"])("div",r,[o,l,Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",s,[Object(c["createVNode"])(V,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return m.value=e}),options:m.attributes,props:m.props,onChange:v.nodeChange,placeholder:"請選擇事故節點"},null,8,["modelValue","options","props","onChange"])])])])])]})),_:1})]})),_:1}),Object(c["createVNode"])(C,{class:"con_flex"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(g,{span:9,class:"analysis-table"},{default:Object(c["withCtx"])((function(){return[u,d,b,Object(c["createElementVNode"])("div",f,[Object(c["createVNode"])(k,{data:m.tableData,stripe:"",style:{width:"100%"}},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{prop:"rank",label:"權重排名"}),Object(c["createVNode"])(w,{prop:"from_id_name",label:"起始節點名稱"}),Object(c["createVNode"])(w,{prop:"to_id_name",label:"終點節點名稱"}),Object(c["createVNode"])(w,{prop:"total",label:"權重"}),Object(c["createVNode"])(w,{label:"查看SNA圖"},{default:Object(c["withCtx"])((function(e){return[Object(c["createVNode"])(x,{size:"small",onClick:function(t){return v.checkRank(e.$index,e.row)}},{default:Object(c["withCtx"])((function(){return[h]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])])]})),_:1}),Object(c["createVNode"])(g,{span:14},{default:Object(c["withCtx"])((function(){return[Object(c["withDirectives"])(Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("iframe",{ref:"Iframe",src:m.src,frameborder:"0",width:"100%",height:"100%"},"\n            \x3c!-- 社會網路圖 --\x3e\n          ",8,j)],512),[[_,m.loading]])]})),_:1})]})),_:1})])}n("d3b7"),n("159b");var m=n("d178"),v={name:"ResultAnalysis",components:{Navbar:m["a"]},data:function(){return{attributes:[],value:"",ranks:[],rank:"",tableData:[{from_id:"139",from_id_name:"無缺陷",rank:"1",to_id:"184",to_id_name:"無繪設快慢車道分隔線",total:"21774"}],props:{expandTrigger:"hover"},loading:!1,src:"http://140.136.155.121:50000/sna_graph/result.html"}},methods:{iframeLoad:function(){var e=this;this.loading=!0;var t=this.$refs.Iframe;t.attachEvent?t.attachEvent("onload",(function(){e.loading=!1})):t.onload=function(){e.loading=!1}},nodeChange:function(){var e=this,t="http://140.136.155.121:50000";this.loading=!0,this.$http.get(t+"/resultReceive?node="+this.attributes[parseInt(this.value[0])-1].label+"&rank=1").then((function(){var n=e.$refs.Iframe,c=n.src;n.src=c,e.iframeLoad(),e.$http.get(t+"/resultcsv").then((function(t){e.loading=!1,console.log(t.data),e.tableData=t.data,t.data.forEach((function(t){e.ranks.push({value:t.rank,label:t.rank})}))}))}))},checkRank:function(e,t){var n=this;console.log(t);var c="http://140.136.155.121:50000";this.$http.get(c+"/resultReceive?node="+this.attributes[parseInt(this.value[0])-1].label+"&rank="+(parseInt(e)+1)).then((function(){var e=n.$refs.Iframe,t=e.src;e.src=t,n.iframeLoad()}))}},created:function(){var e=this,t="http://140.136.155.121:50000";this.$http.get(t+"/resultAttributes").then((function(t){console.log(t.data),e.attributes=t.data}))}},N=(n("2c4b"),n("d959")),V=n.n(N);const g=V()(v,[["render",O]]);t["default"]=g},"2c4b":function(e,t,n){"use strict";n("b536")},"65f0":function(e,t,n){var c=n("0b42");e.exports=function(e,t){return new(c(e))(0===t?0:t)}},a640:function(e,t,n){"use strict";var c=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&c((function(){n.call(null,t||function(){throw 1},1)}))}},b536:function(e,t,n){},b727:function(e,t,n){var c=n("0366"),a=n("e330"),r=n("44ad"),o=n("7b0b"),l=n("07fa"),i=n("65f0"),s=a([].push),u=function(e){var t=1==e,n=2==e,a=3==e,u=4==e,d=6==e,b=7==e,f=5==e||d;return function(h,p,j,O){for(var m,v,N=o(h),V=r(N),g=c(p,j),C=l(V),w=0,x=O||i,k=t?x(h,C):n||b?x(h,0):void 0;C>w;w++)if((f||w in V)&&(m=V[w],v=g(m,w,N),e))if(t)k[w]=v;else if(v)switch(e){case 3:return!0;case 5:return m;case 6:return w;case 2:s(k,m)}else switch(e){case 4:return!1;case 7:s(k,m)}return d?-1:a||u?u:k}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},d178:function(e,t,n){"use strict";var c=n("f2bf"),a={class:"grid-content nav"},r=Object(c["createElementVNode"])("p",{id:"logo"},"TRANS",-1),o={class:"menu"},l=Object(c["createTextVNode"])("Management"),i=Object(c["createTextVNode"])("Auth");function s(e,t,n,s,u,d){var b=Object(c["resolveComponent"])("router-link"),f=Object(c["resolveComponent"])("el-button"),h=Object(c["resolveComponent"])("el-col"),p=Object(c["resolveComponent"])("el-row");return Object(c["openBlock"])(),Object(c["createBlock"])(p,{class:"close"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(h,{span:24},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",a,[Object(c["createVNode"])(b,{to:"/dataset",class:"link"},{default:Object(c["withCtx"])((function(){return[r]})),_:1}),Object(c["createElementVNode"])("div",o,[Object(c["createCommentVNode"])("",!0),u.isAuth?(Object(c["openBlock"])(),Object(c["createBlock"])(b,{key:1,to:{name:"Management"},class:"link"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,{round:""},{default:Object(c["withCtx"])((function(){return[l]})),_:1})]})),_:1})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(b,{to:{name:"Login"},class:"link"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,{round:"",type:"danger"},{default:Object(c["withCtx"])((function(){return[i]})),_:1})]})),_:1})])])]})),_:1})]})),_:1})}var u={name:"Navbar",data:function(){return{isAuth:""}},mounted:function(){this.isAuth=localStorage.getItem("token")}},d=(n("ece7"),n("d959")),b=n.n(d);const f=b()(u,[["render",s]]);t["a"]=f},e8b5:function(e,t,n){var c=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}},ece7:function(e,t,n){"use strict";n("f207")},f207:function(e,t,n){}}]);
//# sourceMappingURL=chunk-5b2ecb2a.ef59a062.js.map