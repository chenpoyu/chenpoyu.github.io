(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{f730:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("open_data.weather_forecast.title.label")))]),a("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.$t("open_data.weather_forecast.title.subtitle")))])])],1)],1)])},s=[],r=a("ded3"),i=a.n(r),c=(a("7db0"),a("9911"),{name:"WeatherForecast",data:function(){return{}},computed:{getHeight:function(){return"height: ".concat(this.$q.screen.height-250,"px")}},mounted:function(){var t=this,e=this.$store.state.params.menus.find((function(t){return t.title.indexOf("opendata")>0})).children.find((function(e){return e.link===t.$router.currentRoute.path}));this.$store.commit("openData/setBreadcrumb",i()({},e)),this.$store.dispatch("openData/getWeatherForecast")}}),o=c,d=a("2877"),u=a("9989"),h=a("f09f"),l=a("a370"),p=a("eebe"),f=a.n(p),m=Object(d["a"])(o,n,s,!1,null,"59a38f10",null);e["default"]=m.exports;f()(m,"components",{QPage:u["a"],QCard:h["a"],QCardSection:l["a"]})}}]);