(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"21a3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-ajax-bar",{ref:"bar",attrs:{position:"bottom",color:"info",size:"10px","skip-hijack":""}})},i=[],s={name:"AjaxBar",computed:{isLoading:function(){return this.$store.state.params.isLoading}},watch:{isLoading:function(t,e){t?this.$refs.bar.start():this.$refs.bar.stop()}}},r=s,o=a("2877"),l=a("7ea5"),c=a("eebe"),u=a.n(c),p=Object(o["a"])(r,n,i,!1,null,null,null);e["a"]=p.exports;u()(p,"components",{QAjaxBar:l["a"]})},"6e1b":function(t,e,a){"use strict";a("c730")},"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh LpR lFr"}},[a("Header"),a("q-page-container",[a("q-page",{attrs:{padding:""}},[a("router-view")],1)],1),a("AjaxBar")],1)},i=[],s=a("dc58"),r=a("21a3"),o={name:"MainLayout",components:{Header:s["a"],AjaxBar:r["a"]}},l=o,c=a("2877"),u=a("4d5a"),p=a("09e3"),d=a("9989"),m=a("eebe"),f=a.n(m),b=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=b.exports;f()(b,"components",{QLayout:u["a"],QPageContainer:p["a"],QPage:d["a"]})},a8c7:function(t,e,a){t.exports=a.p+"img/learn.1e0607fb.png"},c730:function(t,e,a){},d750:function(t,e,a){t.exports=a.p+"img/poyu.0cde2781.jpg"},dc58:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[t.$q.screen.gt.xs?[n("q-toolbar-title",[t._v("\n        "+t._s(t.$t("myname"))+"\n      ")]),t.$q.screen.gt.xs?n("q-tabs",{attrs:{"inline-label":"",shrink:"","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.menus,(function(e){return n("q-route-tab",{key:e.title,attrs:{name:e.title,label:t.$t(e.title),to:e.link}})})),1):t._e()]:[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-drawer",{attrs:{bordered:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-tree",{staticClass:"drawer-list",attrs:{nodes:t.menus,"node-key":"title","default-expand-all":"","no-connectors":""},scopedSlots:t._u([{key:"default-header",fn:function(e){return[n("div",{staticClass:"row items-center drawer-list__row",on:{click:function(a){return t.to(e.node.link,e.node.open)}}},[n("q-icon",{staticClass:"q-mr-sm",attrs:{name:e.node.icon,size:"24px"}}),n("div",{staticClass:"drawer-list__text"},[n("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.$t(e.node.title)))]),e.node.caption?n("div",{staticClass:"text-weight-light drawer-list__text__caption"},[t._v("\n                    "+t._s(t.$t(e.node.caption))+"\n                  ")]):t._e()])],1)]}}],null,!1,4191217813)}),n("q-img",{staticClass:"absolute-top drawer-top",attrs:{src:a("a8c7")}},[n("div",{staticClass:"absolute-bottom bg-dimmed"},[n("q-avatar",{staticClass:"q-mb-sm drawer-top__img",attrs:{size:"84px"}},[n("img",{attrs:{src:a("d750")}})]),n("div",{staticClass:"text-weight-bold drawer-top__text"},[t._v(" "+t._s(t.$t("myname"))+" ")])],1)])],1)],n("q-space"),n("q-toggle",{attrs:{"unchecked-icon":"fas fa-moon","checked-icon":"far fa-sun"},model:{value:t.isDark,callback:function(e){t.isDark=e},expression:"isDark"}}),n("q-btn",{attrs:{icon:"more_horiz"}},[n("q-menu",{attrs:{offset:[0,10]}},[n("q-list",t._l(t.essentialLinks,(function(e){return n("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),1)],1)],1),n("q-btn",{attrs:{icon:"language"}},[n("q-menu",{attrs:{offset:[0,10]}},[n("q-list",t._l(t.languages,(function(e){return n("Language",t._b({key:e.title},"Language",e,!1))})),1)],1)],1)],2)],1)},i=[],s=(a("5319"),a("ac1f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.to}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v("\n      "+t._s(t.$t(t.title))+"\n    ")]),t.caption?a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.$t(t.caption))+"\n    ")]):t._e()],1)],1)}),r=[],o=(a("9911"),{name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},open:{type:String,default:"_self"}},methods:{to:function(){if(!(this.link.indexOf("http")>-1||this.link.indexOf("mailto")>-1))return this.$router.replace(this.link);window.open(this.link,this.open)}}}),l=o,c=a("2877"),u=a("66e5"),p=a("4074"),d=a("0016"),m=a("0170"),f=a("714f"),b=a("eebe"),g=a.n(b),_=Object(c["a"])(l,s,r,!1,null,null,null),h=_.exports;g()(_,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:d["a"],QItemLabel:m["a"]}),g()(_,"directives",{Ripple:f["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.onItemClick}},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t(t.title)))])],1)],1)},q=[],v={name:"Language",props:{title:{type:String,required:!0},lang:{type:String,required:!0}},methods:{onItemClick:function(){this.$i18n.locale=this.lang}}},w=v,x=a("7f67"),Q=Object(c["a"])(w,k,q,!1,null,null,null),$=Q.exports;g()(Q,"components",{QItem:u["a"],QItemSection:p["a"],QItemLabel:m["a"]}),g()(Q,"directives",{ClosePopup:x["a"]});var L={name:"Header",components:{EssentialLink:h,Language:$},data:function(){return{leftDrawerOpen:!1,essentialLinks:this.$store.state.params.moreme,languages:this.$store.state.params.languages,menus:this.$store.state.params.menus,tab:"",isDark:this.$q.dark.isActive,expanded:[]}},watch:{isDark:function(){this.$q.dark.set(this.isDark)}},methods:{to:function(t,e){if(!(t.indexOf("http")>-1||t.indexOf("mailto")>-1))return this.$router.replace(t);window.open(t,e)}}},y=L,O=(a("6e1b"),a("e359")),C=a("65c6"),D=a("9c40"),j=a("9404"),S=a("4983"),I=a("7f41"),E=a("068f"),A=a("cb32"),T=a("6ac5"),B=a("429b"),H=a("7867"),z=a("2c91"),M=a("9564"),P=a("4e73"),R=a("1c1c"),J=Object(c["a"])(y,n,i,!1,null,"2992fda9",null);e["a"]=J.exports;g()(J,"components",{QHeader:O["a"],QToolbar:C["a"],QBtn:D["a"],QDrawer:j["a"],QScrollArea:S["a"],QTree:I["a"],QIcon:d["a"],QImg:E["a"],QAvatar:A["a"],QToolbarTitle:T["a"],QTabs:B["a"],QRouteTab:H["a"],QSpace:z["a"],QToggle:M["a"],QMenu:P["a"],QList:R["a"]})}}]);