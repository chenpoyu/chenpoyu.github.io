(function(e){function t(t){for(var r,a,u=t[0],l=t[1],s=t[2],c=0,d=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={1:0},i={1:0},o=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{2:"0b74c94f",3:"76d7487a",4:"a1f8997e",5:"b0fc98f1",6:"60560b12",7:"d9b89d3d",8:"223b9614",9:"dd273c69",10:"3e506f8e"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={2:1,3:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"ee853b34",3:"ee853b34",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",i=l.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===r||c===i))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],c=s.getAttribute("data-href");if(c===r||c===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var d=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=c;o.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getWeatherForecastTitle",(function(){return O})),n.d(r,"getWeatherRainOnedayData",(function(){return x})),n.d(r,"getSunriseSunsetTitle",(function(){return S})),n.d(r,"getSunriseSunsetOnedayData",(function(){return E}));var a={};n.r(a),n.d(a,"setBreadcrumb",(function(){return P})),n.d(a,"setWeatherForecast",(function(){return N})),n.d(a,"setWeatherRain",(function(){return C})),n.d(a,"setSunriseSunset",(function(){return D}));var i={};n.r(i),n.d(i,"getWeatherForecast",(function(){return z})),n.d(i,"getWeatherRain",(function(){return H})),n.d(i,"getSunriseSunset",(function(){return U}));var o={};n.r(o),n.d(o,"setIsLoading",(function(){return X}));var u=n("c973"),l=n.n(u),s=(n("96cf"),n("5319"),n("ac1f"),n("5c7d"),n("573e"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),c=n("1f91"),d=n("42d2"),f=n("b05d"),p=n("2a19");s["a"].use(f["a"],{config:{notify:{position:"top",timeout:2500,textColor:"white",actions:[{icon:"close",color:"white"}]}},lang:c["a"],iconSet:d["a"],plugins:{Notify:p["a"]}});var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},h=[],b={name:"App"},v=b,w=n("2877"),g=Object(w["a"])(v,m,h,!1,null,null,null),y=g.exports,_=n("2f62"),k=function(){return{breadcrumb:null,weatherForecast:null,weatherRain:null,sunriseSunset:null}};n("d81d"),n("7db0"),n("99af"),n("498a");function O(e){var t,n;return null===(t=e.weatherForecast)||void 0===t||null===(n=t.records)||void 0===n?void 0:n.datasetDescription}function x(e){var t,n,r;return null===(t=e.weatherRain)||void 0===t||null===(n=t.records)||void 0===n||null===(r=n.location)||void 0===r?void 0:r.map((function(e){var t,n,r,a,i,o,u,l,s,c,d,f,p,m,h,b,v,w,g,y,_,k,O,x=null===(t=e.parameter)||void 0===t||null===(n=t.find((function(e){return"CITY"===e.parameterName})))||void 0===n?void 0:n.parameterValue,S=null===(r=e.parameter)||void 0===r||null===(a=r.find((function(e){return"TOWN"===e.parameterName})))||void 0===a?void 0:a.parameterValue,E=null===(i=e.weatherElement)||void 0===i||null===(o=i.find((function(e){return"MIN_10"===e.elementName})))||void 0===o?void 0:o.elementValue,P=null===(u=e.weatherElement)||void 0===u||null===(l=u.find((function(e){return"RAIN"===e.elementName})))||void 0===l?void 0:l.elementValue,N=null===(s=e.weatherElement)||void 0===s||null===(c=s.find((function(e){return"HOUR_3"===e.elementName})))||void 0===c?void 0:c.elementValue,C=null===(d=e.weatherElement)||void 0===d||null===(f=d.find((function(e){return"HOUR_6"===e.elementName})))||void 0===f?void 0:f.elementValue;return{stationId:e.stationId,area:"".concat(x," ").concat(S),location:null===(p=e.locationName)||void 0===p?void 0:p.trim(),min10:"-998.00"===E?"0.00":E,min60:"-998.00"===P?"0.00":P,hour3:"-998.00"===N?"0.00":N,hour6:"-998.00"===C?"0.00":C,hour12:null===(m=e.weatherElement)||void 0===m||null===(h=m.find((function(e){return"HOUR_12"===e.elementName})))||void 0===h?void 0:h.elementValue,hour24:null===(b=e.weatherElement)||void 0===b||null===(v=b.find((function(e){return"HOUR_24"===e.elementName})))||void 0===v?void 0:v.elementValue,today:null===(w=e.weatherElement)||void 0===w||null===(g=w.find((function(e){return"NOW"===e.elementName})))||void 0===g?void 0:g.elementValue,last2:null===(y=e.weatherElement)||void 0===y||null===(_=y.find((function(e){return"latest_2days"===e.elementName})))||void 0===_?void 0:_.elementValue,last3:null===(k=e.weatherElement)||void 0===k||null===(O=k.find((function(e){return"latest_3days"===e.elementName})))||void 0===O?void 0:O.elementValue}}))}function S(e){var t,n;return null===(t=e.sunriseSunset)||void 0===t||null===(n=t.records)||void 0===n?void 0:n.note}function E(e){var t,n,r,a;return null===(t=e.sunriseSunset)||void 0===t||null===(n=t.records)||void 0===n||null===(r=n.locations)||void 0===r||null===(a=r.location)||void 0===a?void 0:a.map((function(e){var t,n="",r="";if(e.time&&e.time.length>0){var a,i,o=e.time[0].parameter.find((function(e){return"日出時刻"===e.parameterName})),u=e.time[0].parameter.find((function(e){return"日沒時刻"===e.parameterName}));n=null===o||void 0===o||null===(a=o.parameterValue)||void 0===a?void 0:a.trim(),r=null===u||void 0===u||null===(i=u.parameterValue)||void 0===i?void 0:i.trim()}return{location:null===(t=e.locationName)||void 0===t?void 0:t.trim(),startTime:n,endTime:r}}))}function P(e,t){e.breadcrumb=t}function N(e,t){e.weatherForecast=t}function C(e,t){e.weatherRain=t}function D(e,t){e.sunriseSunset=t}n("e6cf"),n("d3b7");var j=n("bc3a"),R=n.n(j);R.a.defaults.params={};var A=function(e){var t=e.app;t.axios=R.a},W=n("a925"),V={failed:"Action failed",success:"Action was successful",ajax:{error:{404:"No Data",500:"System Error",network:"Network error. Please reconnect and refresh page."}},myname:"Poyu.Chen 陳柏妤",website_menu:{index:{title:"Home",caption:"About Poyu.Chen"},opendata:{title:"Open Data",caption:"Implement various types of open data",list:{weather_forecast:"Weather Forecast",weather_rain:"Rainfall Observation",earthquake:"Earthquake",sunrise_sunset:"Sunrise & Sunset"}}},dark_mode:"Dark Mode",profile_menu:{title:"More About Me",profile:"Profile",github:"Github",medium:"Medium",facebook:"Facebook",linkedin:"Linkedin",ithelp:"iTHome",mail:"Email"},lang:{title:"lang",zh_tw:"繁體中文",en_us:"English"},open_data:{title:"Open Data",description:"Implement various types of open data",weather_forecast:{title:{label:"36-hour weather forecast for each county and city",subtitle:"by Central Weather Bureau"},header:{}},weather_rain:{title:{label:"Rainfall observations at all observatories",subtitle:"by Central Weather Bureau"},header:{location:"Station",area:"Area",min10:"10 minutes",min60:"60 minutes",hour3:"3 hours",hour6:"6 hours",hour12:"12 hours",hour24:"24 hours",today:"Accumulated today",last2:"Accumulated yesterday",last3:"Accumulated the day before yesterday"}},earthquake:{title:{label:"Felt earthquake",subtitle:"by Central Weather Bureau"},header:{}},sunrise_sunset:{title:{label:" sunrise and sunset timetables in counties and cities",subtitle:"by Central Weather Bureau"},header:{location:"City",start_time:"Sunrise",end_time:"Sunset"}}}},T={failed:"執行失敗",success:"執行成功",ajax:{error:{404:"查無資料",500:"系統錯誤",network:"網路錯誤，請重新連線後重整網頁"}},myname:"Poyu.Chen 陳柏妤",website_menu:{index:{title:"首頁",caption:"關於 Poyu.Chen"},opendata:{title:"開放資料",caption:"實作串接各式開放資料",list:{weather_forecast:"天氣預報",weather_rain:"雨量觀測",earthquake:"有感地震",sunrise_sunset:"日出日落"}}},dark_mode:"夜間模式",profile_menu:{title:"更多關於我",profile:"我的檔案",github:"Github",medium:"Medium",facebook:"Facebook",linkedin:"Linkedin",ithelp:"iT邦幫忙",mail:"與我聯絡"},lang:{title:"語言",zh_tw:"繁體中文",en_us:"English"},open_data:{title:"Open Data",description:"實作串接各式開放資料",weather_forecast:{title:{label:"三十六小時各縣市天氣預報",subtitle:"by 交通部交通部中央氣象局"},header:{}},weather_rain:{title:{label:"全觀測站雨量觀測",subtitle:"by 交通部交通部中央氣象局"},header:{location:"站名",area:"地區",min10:"10分鐘",min60:"60分鐘",hour3:"3小時",hour6:"6小時",hour12:"12小時",hour24:"24小時",today:"今日累計",last2:"昨日累計至今",last3:"前日累計至今"}},earthquake:{title:{label:"有感地震",subtitle:"by 交通部交通部中央氣象局"},header:{}},sunrise_sunset:{title:{label:"各縣市日出日落時刻表",subtitle:"by 交通部中央氣象局"},header:{location:"縣市",start_time:"日出時刻",end_time:"日落時刻"}}}},q={"en-us":V,"zh-tw":T};s["a"].use(W["a"]);var B=new W["a"]({locale:"zh-tw",fallbackLocale:"zh-tw",messages:q}),F=function(e){var t=e.app;t.i18n=B},L="https://opendata.cwb.gov.tw/api/v1/rest/datastore",I="CWB-E676B907-C37A-43C3-B837-13BE2330DC31",M=R.a.create({baseURL:L,headers:{"Content-Type":"application/json"},timeout:2e4});function z(e,t){M.get("/F-C0032-001",{params:t}).then((function(t){e.commit("setWeatherForecast",t.data)}))}function H(e,t){M.get("/O-A0002-001",{params:t}).then((function(t){e.commit("setWeatherRain",t.data)}))}function U(e,t){M.get("/A-B0062-001",{params:t}).then((function(t){e.commit("setSunriseSunset",t.data)}))}M.interceptors.request.use((function(e){return e.params["Authorization"]=I,te.commit("params/setIsLoading",!0),e}),(function(e){return Promise.reject(e)})),M.interceptors.response.use((function(e){return te.commit("params/setIsLoading",!1),e}),(function(e){if(e.response){var t=B.t("ajax.error.".concat(e.response.status));t&&p["a"].create({message:t})}if(window.navigator.onLine)return Promise.reject(e);p["a"].create({message:B.t("ajax.error.network")})}));var $={namespaced:!0,getters:r,mutations:a,actions:i,state:k},G=function(){return{isLoading:!1,moreme:J,languages:K,menus:Q}},J=[{title:"profile_menu.profile",caption:"",icon:"person",link:"https://www.cakeresume.com/s--fkE0VpVyvPEpE4luBEqmjw--/poyu.chen",open:"_blank"},{title:"profile_menu.github",caption:"",icon:"fab fa-github",link:"https://github.com/chenpoyu",open:"_blank"},{title:"profile_menu.medium",caption:"",icon:"fab fa-medium",link:"https://medium.com/@poyu.chen",open:"_blank"},{title:"profile_menu.facebook",caption:"",icon:"fab fa-facebook",link:"https://www.facebook.com/profile.php?id=100001816172616",open:"_blank"},{title:"profile_menu.linkedin",caption:"",icon:"fab fa-linkedin",link:"https://www.linkedin.com/in/poyu-chen-207204191/",open:"_blank"},{title:"profile_menu.ithelp",caption:"",icon:"forum",link:"https://ithelp.ithome.com.tw/users/20111916",open:"_blank"},{title:"profile_menu.mail",caption:"",icon:"mail",link:"mailto:poyu.chen.program@gmail.com",open:"_blank"}],K=[{title:"lang.zh_tw",lang:"zh-tw"},{title:"lang.en_us",lang:"en-us"}],Q=[{title:"website_menu.index.title",caption:"website_menu.index.caption",icon:"fas fa-home",link:"/",header:"root"},{title:"website_menu.opendata.title",caption:"website_menu.opendata.caption",icon:"fas fa-database",link:"/OpenData",header:"root",children:[{title:"website_menu.opendata.list.weather_forecast",caption:"",icon:"fas fa-cloud-sun",link:"/OpenData/WeatherForecast",header:"generic"},{title:"website_menu.opendata.list.weather_rain",caption:"",icon:"fas fa-cloud-showers-heavy",link:"/OpenData/WeatherRain",header:"generic"},{title:"website_menu.opendata.list.earthquake",caption:"",icon:"fas fa-house-damage",link:"/OpenData/Earthquake",header:"generic"},{title:"website_menu.opendata.list.sunrise_sunset",caption:"",icon:"brightness_6",link:"/OpenData/SunriseSunset",header:"generic"}]}],Y=n("ae1c");function X(e,t){e.isLoading=t}var Z=n("68a9"),ee={namespaced:!0,state:G,getters:Y,mutations:o,actions:Z};s["a"].use(_["a"]);var te=new _["a"].Store({modules:{openData:$,params:ee},strict:!1}),ne=n("8c4f"),re=(n("3ca3"),n("e260"),n("ddb0"),[{path:"/",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8b24"))}}]},{path:"/OpenData",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8651"))},children:[{path:"/",component:function(){return n.e(7).then(n.bind(null,"06e7"))}},{path:"/OpenData/WeatherForecast",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"f730"))}},{path:"/OpenData/WeatherRain",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"d3b0"))}},{path:"/OpenData/Earthquake",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"db40"))}},{path:"/OpenData/SunriseSunset",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"d318"))}}]},{path:"*",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}}]),ae=re;s["a"].use(ne["a"]);var ie=function(){var e=new ne["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ae,mode:"hash",base:""});return e},oe=function(){return ue.apply(this,arguments)};function ue(){return ue=l()(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof te){e.next=6;break}return e.next=3,te({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=te;case 7:if(t=e.t0,"function"!==typeof ie){e.next=14;break}return e.next=11,ie({Vue:s["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=ie;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(y)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}var le=n("bd4c");s["a"].prototype.$moment=le["b"];var se="";function ce(){return de.apply(this,arguments)}function de(){return de=l()(regeneratorRuntime.mark((function e(){var t,n,r,a,i,o,u,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:t=e.sent,n=t.app,r=t.store,a=t.router,i=!1,o=function(e){i=!0;var t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},u=window.location.href.replace(window.location.origin,""),l=[F,A,void 0],c=0;case 11:if(!(!1===i&&c<l.length)){e.next=29;break}if("function"===typeof l[c]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[c]({app:n,router:a,store:r,Vue:s["a"],ssrContext:null,redirect:o,urlPath:u,publicPath:se});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:c++,e.next=11;break;case 29:if(!0!==i){e.next=31;break}return e.abrupt("return");case 31:new s["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),de.apply(this,arguments)}ce()},"31cd":function(e,t,n){},"68a9":function(e,t){},ae1c:function(e,t){}});