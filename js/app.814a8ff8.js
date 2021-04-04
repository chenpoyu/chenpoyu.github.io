(function(e){function t(t){for(var r,a,u=t[0],s=t[1],c=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={1:0},o={1:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{2:"0b74c94f",3:"76d7487a",4:"97ddcc90",5:"d609cf75",6:"a4b82e52",7:"1f78a8d8",8:"e5883be3",9:"a768bc71",10:"56d5060d"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={2:1,3:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"ee853b34",3:"ee853b34",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getWeatherForecastTitle",(function(){return x})),n.d(r,"getSunriseSunsetTitle",(function(){return S})),n.d(r,"getSunriseSunsetOnedayData",(function(){return P}));var a={};n.r(a),n.d(a,"setBreadcrumb",(function(){return O})),n.d(a,"setWeatherForecast",(function(){return E})),n.d(a,"setSunriseSunset",(function(){return j}));var o={};n.r(o),n.d(o,"getWeatherForecast",(function(){return R})),n.d(o,"getSunriseSunset",(function(){return V}));var i={};n.r(i),n.d(i,"setIsLoading",(function(){return K}));var u=n("c973"),s=n.n(u),c=(n("96cf"),n("5319"),n("ac1f"),n("5c7d"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),l=n("1f91"),p=n("42d2"),f=n("b05d"),d=n("2a19");c["a"].use(f["a"],{config:{notify:{position:"top",timeout:2500,textColor:"white",actions:[{icon:"close",color:"white"}]}},lang:l["a"],iconSet:p["a"],plugins:{Notify:d["a"]}});var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},h=[],b={name:"App"},v=b,g=n("2877"),w=Object(g["a"])(v,m,h,!1,null,null,null),k=w.exports,_=n("2f62"),y=function(){return{breadcrumb:null,weatherForecast:null,sunriseSunset:null}};n("d81d"),n("7db0"),n("498a");function x(e){var t,n;return null===(t=e.weatherForecast)||void 0===t||null===(n=t.records)||void 0===n?void 0:n.datasetDescription}function S(e){var t,n;return null===(t=e.sunriseSunset)||void 0===t||null===(n=t.records)||void 0===n?void 0:n.note}function P(e){var t,n,r,a;return null===(t=e.sunriseSunset)||void 0===t||null===(n=t.records)||void 0===n||null===(r=n.locations)||void 0===r||null===(a=r.location)||void 0===a?void 0:a.map((function(e){var t,n="",r="";if(e.time&&e.time.length>0){var a,o,i=e.time[0].parameter.find((function(e){return"日出時刻"===e.parameterName})),u=e.time[0].parameter.find((function(e){return"日沒時刻"===e.parameterName}));n=null===i||void 0===i||null===(a=i.parameterValue)||void 0===a?void 0:a.trim(),r=null===u||void 0===u||null===(o=u.parameterValue)||void 0===o?void 0:o.trim()}return{location:null===(t=e.locationName)||void 0===t?void 0:t.trim(),startTime:n,endTime:r}}))}function O(e,t){e.breadcrumb=t}function E(e,t){console.log(t),e.weatherForecast=t}function j(e,t){console.log(t),e.sunriseSunset=t}n("e6cf"),n("d3b7");var D=n("bc3a"),C=n.n(D);C.a.defaults.params={};var L=function(e){var t=e.app;t.axios=C.a},A=n("a925"),F={failed:"Action failed",success:"Action was successful",ajax:{error:{404:"No Data",500:"System Error",network:"Network error. Please reconnect and refresh page."}},myname:"Poyu.Chen 陳柏妤",website_menu:{index:{title:"Home",caption:"About Poyu.Chen"},opendata:{title:"Open Data",caption:"Implement various types of open data",list:{weather_forecast:"Weather Forecast",weather_rain:"Rainfall Observation",earthquake:"Earthquake",sunrise_sunset:"Sunrise & Sunset"}}},dark_mode:"Dark Mode",profile_menu:{title:"More About Me",profile:"Profile",github:"Github",medium:"Medium",facebook:"Facebook",linkedin:"Linkedin",ithelp:"iTHome",mail:"Email"},lang:{title:"lang",zh_tw:"繁體中文",en_us:"English"},open_data:{title:"Open Data",description:"Implement various types of open data"}},T={failed:"執行失敗",success:"執行成功",ajax:{error:{404:"查無資料",500:"系統錯誤",network:"網路錯誤，請重新連線後重整網頁"}},myname:"Poyu.Chen 陳柏妤",website_menu:{index:{title:"首頁",caption:"關於 Poyu.Chen"},opendata:{title:"開放資料",caption:"實作串接各式開放資料",list:{weather_forecast:"天氣預報",weather_rain:"雨量觀測",earthquake:"有感地震",sunrise_sunset:"日出日落"}}},dark_mode:"夜間模式",profile_menu:{title:"更多關於我",profile:"我的檔案",github:"Github",medium:"Medium",facebook:"Facebook",linkedin:"Linkedin",ithelp:"iT邦幫忙",mail:"與我聯絡"},lang:{title:"語言",zh_tw:"繁體中文",en_us:"English"},open_data:{title:"Open Data",description:"實作串接各式開放資料",sunrise_sunset:{title:{label:"今日各縣市日出日落時刻表",subtitle:"by 中央氣象局"},header:{location:"縣市",start_time:"日出時刻",end_time:"日落時刻"}}}},q={"en-us":F,"zh-tw":T};c["a"].use(A["a"]);var B=new A["a"]({locale:"zh-tw",fallbackLocale:"zh-tw",messages:q}),N=function(e){var t=e.app;t.i18n=B},W="https://opendata.cwb.gov.tw/api/v1/rest/datastore",M="CWB-E676B907-C37A-43C3-B837-13BE2330DC31",z=C.a.create({baseURL:W,headers:{"Content-Type":"application/json"},timeout:2e4});function R(e,t){z.get("/F-C0032-001",{params:t}).then((function(t){e.commit("setWeatherForecast",t.data)}))}function V(e,t){z.get("/A-B0062-001",{params:t}).then((function(t){e.commit("setSunriseSunset",t.data)}))}z.interceptors.request.use((function(e){return e.params["Authorization"]=M,Y.commit("params/setIsLoading",!0),e}),(function(e){return Promise.reject(e)})),z.interceptors.response.use((function(e){return Y.commit("params/setIsLoading",!1),e}),(function(e){if(e.response){var t=B.t("ajax.error.".concat(e.response.status));t&&d["a"].create({message:t})}if(window.navigator.onLine)return Promise.reject(e);d["a"].create({message:B.t("ajax.error.network")})}));var I={namespaced:!0,getters:r,mutations:a,actions:o,state:y},H=function(){return{isLoading:!1,moreme:G,languages:J,menus:U}},G=[{title:"profile_menu.profile",caption:"",icon:"person",link:"https://www.cakeresume.com/s--fkE0VpVyvPEpE4luBEqmjw--/poyu.chen",open:"_blank"},{title:"profile_menu.github",caption:"",icon:"fab fa-github",link:"https://github.com/chenpoyu",open:"_blank"},{title:"profile_menu.medium",caption:"",icon:"fab fa-medium",link:"https://medium.com/@poyu.chen",open:"_blank"},{title:"profile_menu.facebook",caption:"",icon:"fab fa-facebook",link:"https://www.facebook.com/profile.php?id=100001816172616",open:"_blank"},{title:"profile_menu.linkedin",caption:"",icon:"fab fa-linkedin",link:"https://www.linkedin.com/in/poyu-chen-207204191/",open:"_blank"},{title:"profile_menu.ithelp",caption:"",icon:"forum",link:"https://ithelp.ithome.com.tw/users/20111916",open:"_blank"},{title:"profile_menu.mail",caption:"",icon:"mail",link:"mailto:poyu.chen.program@gmail.com",open:"_blank"}],J=[{title:"lang.zh_tw",lang:"zh-tw"},{title:"lang.en_us",lang:"en-us"}],U=[{title:"website_menu.index.title",caption:"website_menu.index.caption",icon:"fas fa-home",link:"/",header:"root"},{title:"website_menu.opendata.title",caption:"website_menu.opendata.caption",icon:"fas fa-database",link:"/OpenData",header:"root",children:[{title:"website_menu.opendata.list.weather_forecast",caption:"",icon:"fas fa-cloud-sun",link:"/OpenData/WeatherForecast",header:"generic"},{title:"website_menu.opendata.list.weather_rain",caption:"",icon:"fas fa-cloud-showers-heavy",link:"/OpenData/WeatherRain",header:"generic"},{title:"website_menu.opendata.list.earthquake",caption:"",icon:"fas fa-house-damage",link:"/OpenData/Earthquake",header:"generic"},{title:"website_menu.opendata.list.sunrise_sunset",caption:"",icon:"brightness_6",link:"/OpenData/SunriseSunset",header:"generic"}]}],$=n("ae1c");function K(e,t){e.isLoading=t}var Q=n("68a9"),X={namespaced:!0,state:H,getters:$,mutations:i,actions:Q};c["a"].use(_["a"]);var Y=new _["a"].Store({modules:{openData:I,params:X},strict:!1}),Z=n("8c4f"),ee=(n("3ca3"),n("e260"),n("ddb0"),[{path:"/",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8b24"))}}]},{path:"/OpenData",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8651"))},children:[{path:"/",component:function(){return n.e(8).then(n.bind(null,"06e7"))}},{path:"/OpenData/WeatherForecast",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"f730"))}},{path:"/OpenData/WeatherRain",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"d3b0"))}},{path:"/OpenData/Earthquake",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"db40"))}},{path:"/OpenData/SunriseSunset",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"d318"))}}]},{path:"*",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"e51e"))}}]),te=ee;c["a"].use(Z["a"]);var ne=function(){var e=new Z["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:te,mode:"hash",base:""});return e},re=function(){return ae.apply(this,arguments)};function ae(){return ae=s()(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof Y){e.next=6;break}return e.next=3,Y({Vue:c["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=Y;case 7:if(t=e.t0,"function"!==typeof ne){e.next=14;break}return e.next=11,ne({Vue:c["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=ne;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(k)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}var oe=n("2ead"),ie=n.n(oe);c["a"].use(ie.a);var ue=function(e){var t=e.app;t.moment=ie.a},se="";function ce(){return le.apply(this,arguments)}function le(){return le=s()(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,u,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:t=e.sent,n=t.app,r=t.store,a=t.router,o=!1,i=function(e){o=!0;var t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},u=window.location.href.replace(window.location.origin,""),s=[N,L,ue],l=0;case 11:if(!(!1===o&&l<s.length)){e.next=29;break}if("function"===typeof s[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,s[l]({app:n,router:a,store:r,Vue:c["a"],ssrContext:null,redirect:i,urlPath:u,publicPath:se});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!0!==o){e.next=31;break}return e.abrupt("return");case 31:new c["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),le.apply(this,arguments)}ce()},"31cd":function(e,t,n){},"68a9":function(e,t){},ae1c:function(e,t){}});