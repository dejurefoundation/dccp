(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{567:function(t,e,n){"use strict";n.r(e);n(42),n(25),n(50),n(8),n(44),n(57);var r=n(46),c=n(26),l=(n(83),n(21),n(18),n(36),n(55),n(13),n(32),n(65),n(75),n(177),n(49),n(246),n(64),n(41),n(56),n(386),n(33),n(389),n(390),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(10),n(248),n(406)),o=n.n(l),mark=n(425),f=n.n(mark);function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){o=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(o)throw c}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d,m="AIzaSyDzNHgxbDh9s1gX7dXZRaUiRvrXWFB2q8M",_="1T59hLNx6_Sc323BrHNZ_PixwxTAEUjqJ_mBoS1iX884",x=["Перша","Апеляційна","Касаційна"],y={components:{"vue-markdown":o.a},mounted:function(){var t=this,e=this;this.$axios("https://sheets.googleapis.com/v4/spreadsheets/".concat(_,"/values/").concat("A:Z","?key=").concat(m)).then(function(){var n=Object(c.a)(regeneratorRuntime.mark((function n(data){var r,c,i,element,l,o,f,h,d,y,w,k,C,$,D;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=data.data.values,c=[],i=1;i<r.length;i++){for(element={},l=0;l<r[0].length;l++)element[r[0][l]]=r[i][l];c.push(element)}return c=c.map((function(t){t["Дата прийняття рішення ДП"];return t["Дата прийняття рішення ДП"]=new Date(t["Дата прийняття рішення ДП"]),t["С чи СС"]=S[t["С чи СС"]],t["Теги"]=t["Теги"].split(/\//g).filter((function(t){return""!==t})).map((function(t){return t.trim()})),t["Проступки"]=t["Проступки"].split(/;/g).filter((function(t){return""!==t})).map((function(t){return t.trim()})),t["Інстанція"]=x[parseInt(t["І"])-1],t["Додаткові рішення"].length?(t["Додаткові рішення"]=t["Додаткові рішення"].split(/\n/g),t["Додаткові рішення"]=t["Додаткові рішення"].map((function(t){var e={};return(t=t.split(/;/g)).length>0&&(e.body=t[0]),t.length>1&&(e.result=t[1]),t.length>2&&(e.url=t[2]),e}))):t["Додаткові рішення"].length||(t["Додаткові рішення"]=!1),t})),n.next=6,e.$axios("https://sheets.googleapis.com/v4/spreadsheets/".concat(_,"/values/'Інтерфейс%20сайту'!A:Z?key=").concat(m));case 6:o=n.sent,f=o.data.values,h=v(f),n.prev=9,h.s();case 11:if((d=h.n()).done){n.next=20;break}if("Ключ"!==(y=d.value)[0]){n.next=15;break}return n.abrupt("continue",18);case 15:console.log(y[0]),e.customUI[y[0]]=y[1],"Опис проекту"===y[0]&&t.$eventBus.$emit("setAbout",y[1]);case 18:n.next=11;break;case 20:n.next=25;break;case 22:n.prev=22,n.t0=n.catch(9),h.e(n.t0);case 25:return n.prev=25,h.f(),n.finish(25);case 28:return n.next=30,e.$axios("https://sheets.googleapis.com/v4/spreadsheets/".concat(_,"/values/'Словник%20проступків'!A:Z?key=").concat(m));case 30:w=n.sent,k=w.data.values,C=v(k),n.prev=33,C.s();case 35:if(($=C.n()).done){n.next=42;break}if("Проступок"!==(D=$.value)[0]){n.next=39;break}return n.abrupt("continue",40);case 39:e.crimeDict[D["Проступок"]]={description:D["Зміст проступку"],law:D["Закон"]};case 40:n.next=35;break;case 42:n.next=47;break;case 44:n.prev=44,n.t1=n.catch(33),C.e(n.t1);case 47:return n.prev=47,C.f(),n.finish(47);case 50:e.data=c,e.calculateFilters(c),e.filter(),e.$eventBus.$on("updateFilters",(function(t){e.filters=Object.assign(e.filters,t),e.filter()}));case 54:case"end":return n.stop()}}),n,null,[[9,22,25,28],[33,44,47,50]])})));return function(t){return n.apply(this,arguments)}}())},beforeDestroy:function(){this.$eventBus.$off("updateFilters")},head:function(){},filters:{ukDate:function(t){return new Date(t).toLocaleString(["uk-UA"],{day:"2-digit",month:"2-digit",year:"numeric"})},bodyDict:function(t){return $[t]}},data:function(){return{search:"",sortAsc:!1,data:[],filteredData:[],customUI:{"Назва проекту":"Стягнення","Опис проекту":"https://dejure.foundation/","Дата оновлення бази":"Актуально на 01.12.2019","Логотип EUACI":"Так","Основний колір":"#4b7ec4","Колір футера":"#4b7ec4"},filters:{"Суд":[],"Інстанція":[],"С чи СС":[],"Стягнення ДП":[],"Проступки":[],"Теги":[]},crimeDict:{},mainKey:0}},methods:{blur:function(){document.activeElement.blur()},updateSearch:function(t){this.search=t.target.value,this.$eventBus.$emit("setOverlay",!0),setTimeout(this.filter(),10)},sortByDate:function(){this.sortAsc=!this.sortAsc,this.data=C(this.data,"Дата прийняття рішення ДП",this.sortAsc),this.filteredData=C(this.filteredData,"Дата прийняття рішення ДП",this.sortAsc)},filter:function(){var t=this,e=Object(r.a)(this.data);""!==this.search&&(e=e.filter((function(e){return new RegExp(t.search,"gi").test(e["Короткий зміст справи"]+e["ПІБ судді"])}))),this.calculateFilters(e),this.filters["Суд"].length&&(e=e.filter((function(e){return t.filters["Суд"].includes(e["Суд"])}))),this.filters["С чи СС"].length&&(e=e.filter((function(e){return t.filters["С чи СС"].includes(e["С чи СС"])}))),this.filters["Стягнення ДП"].length&&(e=e.filter((function(e){return t.filters["Стягнення ДП"].includes(e["Стягнення ДП"])}))),this.filters["Інстанція"].length&&(e=e.filter((function(e){return t.filters["Інстанція"].includes(e["Інстанція"])}))),this.filters["Проступки"].length&&(e=e.filter((function(e){var n,r=v(t.filters["Проступки"]);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(e["Проступки"].includes(c))return!0}}catch(t){r.e(t)}finally{r.f()}return!1}))),this.filters["Теги"].length&&(e=e.filter((function(e){var n,r=v(t.filters["Теги"]);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(e["Теги"].includes(c))return!0}}catch(t){r.e(t)}finally{r.f()}return!1}))),this.filteredData=e,this.$eventBus.$emit("setNumberOfDocs",e.length),this.mainKey+=1,this.$nextTick((function(){d=new f.a(document.querySelector("#main-article")),setTimeout(d.unmark(),10),setTimeout(d.markRegExp(new RegExp(t.search,"gi"),{debug:!0}),20),setTimeout(t.$eventBus.$emit("setOverlay",!1),0)}))},calculateFilters:function(data){var t=C(w(data,"Суд"),"count");this.$eventBus.$emit("setFilters","courts",t);var e=C(w(data,"Стягнення ДП"),"count");this.$eventBus.$emit("setFilters","punishment",e);var n=C(w(data,"С чи СС"),"count");this.$eventBus.$emit("setFilters","type",n);var r=C(w(data,"Інстанція"),"count");this.$eventBus.$emit("setFilters","instances",r);var c=C(k(data,"Теги"),"count");this.$eventBus.$emit("setFilters","tags",c);var l=C(k(data,"Проступки"),"count");this.$eventBus.$emit("setFilters","crimes",l)},filterTag:function(t,e){this.$eventBus.$emit("setTagFilter",t,e)},showFilters:function(){this.$eventBus.$emit("showFilters")}}};function w(data,t){var e=(data=data.map((function(e){return e[t]}))).length,n=Object(r.a)(new Set(data)).map((function(t){return{label:t,count:data.filter((function(e){return e===t})).length}}));return n.forEach((function(t){t.percent=Math.round(1e4*t.count/e)/100,""===t.label&&(t.label="не визначено")})),n}function k(data,t){var e=data.length;data=(data=data.reduce((function(e,n){return e.push.apply(e,Object(r.a)(n[t])),e}),[])).filter((function(t){return!/^-?$/g.test(t)}));var n=Object(r.a)(new Set(data)).map((function(t){return{label:t,count:data.filter((function(e){return e===t})).length}}));return n.forEach((function(t){t.percent=Math.round(1e4*t.count/e)/100,""===t.label&&(t.label="не визначено")})),n}function C(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n?-1:1;return t.sort((function(a,b){return(b[e]-a[e])*r}))}window.onerror=function(t,e,n){return!0};var $={"ДП":"Рішення дисциплінарної палати","ВП ВС":"Рішення Великої Палати Верховного Суду","ВРП":"Рішення Вищої ради правосуддя"},S={"С":"Суддя","СС":"Слідчий суддя","С/СС":"Суддя/Слідчий суддя"},D=y,A=n(85),B=n(125),F=n.n(B),I=n(563),T=n(362),O=n(164),j=n(95),E=n(352),U=n(354),V=n(165),R=n(137),z=n(356),N=n(564),Z=n(565),M=n(359),component=Object(A.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"pt-4",attrs:{column:"","justify-center":"","align-center":"",id:"main-article"}},[n("h1",{staticClass:"display-2 font-weight-bold text-md-center"},[t._v(t._s(t.customUI["Назва проекту"]))]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v(t._s(t.customUI["Дата оновлення бази"]))]),t._v(" "),n("v-row",{staticClass:"mb-4",staticStyle:{width:"100%"}},[n("v-flex",{staticClass:"mt-2 pr-2",attrs:{xs12:"",lg8:""}},[n("v-text-field",{staticStyle:{"padding-top":"0px"},attrs:{"append-icon":"fa-search",label:"Пошук",value:t.search,"single-line":"","hide-details":""},on:{blur:t.updateSearch},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.blur.apply(null,arguments)}}})],1),t._v(" "),n("v-flex",{staticClass:"d-flex mt-2",attrs:{xs12:"",lg4:""}},[n("v-btn",{staticClass:"mr-1 flex-grow-1",on:{click:t.sortByDate}},[t._v("Дата ДП "),n("v-icon",{attrs:{right:""}},[t._v("fa "+t._s(t.sortAsc?"fa-sort-numeric-up-alt":"fa-sort-numeric-down-alt"))])],1),t._v(" "),n("v-btn",{staticClass:"ml-1 flex-grow-1",on:{click:t.showFilters}},[t._v("Фільтри "),n("v-icon",{attrs:{right:""}},[t._v("fa fa-filter")])],1)],1)],1),t._v(" "),n("v-flex",{directives:[{name:"show",rawName:"v-show",value:0===t.filteredData.length,expression:"filteredData.length === 0"}],staticClass:"text-center pa-5",staticStyle:{width:"100%"},attrs:{xs12:""}},[t._v("\n    На жаль, за вказаними критеріями не знайдено жодного документу. Спробуйте змінити фільтри!\n  ")]),t._v(" "),n("v-flex",{key:t.mainKey,staticStyle:{width:"100%"},attrs:{xs12:""}},[n("transition-group",{attrs:{name:"slide-x-transition",tag:"div"}},t._l(t.filteredData,(function(e,i){return n("v-row",{key:"data-"+i,staticClass:"mb-4 mt-4 pr-3 pl-3",attrs:{transition:"slide-x-transition"}},[n("v-flex",{attrs:{xs12:"",lg3:""}},[n("v-card",{staticClass:"v-card v-sheet pb-4 pt-4 main-color",staticStyle:{height:"100%","border-radius":"5px 0px 0px 5px"}},[n("v-card-text",{staticClass:"text-center"},[e["Фото/Іконка"]?n("v-avatar",{staticClass:"mb-4",attrs:{size:"70px"}},[n("v-img",{staticClass:"grey lighten-2",attrs:{alt:e["ПІБ судді"],src:"https://drive.google.com/uc?export=view&id="+e["Фото/Іконка"],"aspect-ratio":"1"}})],1):n("div",{staticClass:"mb-4 white--text"},[n("v-icon",{staticStyle:{"font-size":"5em"},attrs:{color:"white"}},[t._v("fa fa-user-circle")])],1),t._v(" "),n("div",{staticClass:"headline font-weight-bold white--text"},[t._v(t._s(e["ПІБ судді"]))]),t._v(" "),n("div",{staticClass:"white--text"},[t._v(t._s(e["С чи СС"]))]),t._v(" "),n("div",{staticClass:"white--text"},[t._v(t._s(e["Суд"]))]),t._v(" "),n("div",{staticClass:"d-flex flex-column align-center"},t._l(e["Проступки"],(function(e,i){return n("v-tooltip",{key:"tag"+i,attrs:{"max-width":"360",right:""},scopedSlots:t._u([{key:"activator",fn:function(r){var c=r.on;return[n("v-chip",t._g({staticClass:"ma-1",staticStyle:{cursor:"pointer"},attrs:{small:""},on:{click:function(n){return t.filterTag(e,"Проступки")}}},c),[t._v(t._s(e))])]}}],null,!0)},[t._v(" "),t.crimeDict[e]?n("span",[n("strong",[t._v(t._s(t.crimeDict[e].law))]),n("br"),n("br"),t._v("\n                "+t._s(t.crimeDict[e].description))]):t._e()])})),1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",lg9:""}},[n("v-card",{staticClass:"grey lighten-3",staticStyle:{height:"100%","border-radius":"0px 5px 5px 0px"}},[n("v-card-text",[n("div",{staticClass:"mb-4"},[n("v-icon",{staticStyle:{"font-size":"14px",position:"relative",top:"-2px",left:"-2px"}},[t._v("fa fa-calendar-alt")]),t._v(" "+t._s(t._f("ukDate")(e["Дата прийняття рішення ДП"])))],1),t._v(" "),e["Номер ДП"]?n("div",{staticClass:"mb-2"},[n("strong",[t._v("Рішення дисциплінарної палати: ")]),t._v(" "),e["Лінк на рішення ДП"]?n("a",{attrs:{href:e["Лінк на рішення ДП"],target:"_blank"}},[t._v(t._s(e["Стягнення ДП"]))]):t._e(),t._v(" "),e["Лінк на рішення ДП"]?t._e():n("span",[t._v(t._s(e["Стягнення ДП"]))])]):t._e(),t._v(" "),e["ВРП"]?n("div",{staticClass:"mb-2"},[n("strong",[t._v("Рішення Вищої ради правосуддя: ")]),t._v(" "),e["Лінк на рішення ВРП"]?n("a",{attrs:{href:e["Лінк на рішення ВРП"],target:"_blank"}},[t._v(t._s(e["ВРП"]))]):t._e(),t._v(" "),e["Лінк на рішення ВРП"]?t._e():n("span",[t._v(t._s(e["ВРП"]))])]):t._e(),t._v(" "),e["ВП ВС"]?n("div",{staticClass:"mb-4"},[n("strong",[t._v("Рішення Великої Палати Верховного Суду: ")]),t._v(" "),e["Лінк на рішення ВП ВС"]?n("a",{attrs:{href:e["Лінк на рішення ВП ВС"],target:"_blank"}},[t._v(t._s(e["ВП ВС"]))]):t._e(),t._v(" "),e["Лінк на рішення ВП ВС"]?t._e():n("span",[t._v(t._s(e["ВП ВС"]))])]):t._e(),t._v(" "),t._l(e["Додаткові рішення"],(function(r,i){return e["Додаткові рішення"]?n("div",{key:"extra-"+i},[r.body?n("div",{staticClass:"mb-2"},[n("strong",[t._v(t._s(t._f("bodyDict")(r.body))+": ")]),t._v(" "),r.url?n("a",{attrs:{href:r.url,target:"_blank"}},[t._v(t._s(r.result))]):t._e(),t._v(" "),r.url?t._e():n("span",[t._v(t._s(r.result))])]):t._e()]):t._e()})),t._v(" "),n("vue-markdown",{key:"data-"+e["ПІБ судді"]+e["Дата прийняття рішення ДП"],staticClass:"mb-4 mt-4"},[t._v(t._s(e["Короткий зміст справи"]))]),t._v(" "),t._l(e["Теги"],(function(e,i){return n("v-chip",{key:"tag"+i,staticClass:"ma-1",staticStyle:{cursor:"pointer"},attrs:{small:""},on:{click:function(n){return t.filterTag(e,"Теги")}}},[n("v-icon",{staticStyle:{"font-size":"14px"},attrs:{left:""}},[t._v("fa fa-tag")]),t._v("\n              "+t._s(e)+"\n            ")],1)}))],2)],1)],1)],1)})),1)],1),t._v(" "),n("style",[t._v("\n    .main-color {\n      background: "+t._s(t.customUI["Основний колір"])+" !important;\n    }\n    .main-color {\n      background: "+t._s(t.customUI["Основний колір"])+" !important;\n    }\n    .theme--dark.v-footer {\n      background: #4B7EC4 !important;\n    }\n    .euaci-logo {\n      display: "+t._s("Так"===t.customUI["Логотип EUACI"]?"block":"none")+";\n    }\n    mark {\n      background: orange;\n      color: black;\n    }\n    ul {\n      margin-bottom: 1.5em;\n    }\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;F()(component,{VAvatar:I.a,VBtn:T.a,VCard:O.a,VCardText:j.a,VChip:E.a,VFlex:U.a,VIcon:V.a,VImg:R.a,VLayout:z.a,VRow:N.a,VTextField:Z.a,VTooltip:M.a})}}]);