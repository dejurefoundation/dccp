(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{403:function(t,e){},404:function(t,e){},425:function(t,e){},427:function(t,e){},446:function(t,e){},447:function(t,e){},453:function(t,e){},833:function(t,e,n){"use strict";n.r(e);n(4),n(78),n(390),n(37),n(38),n(170);var r,l=n(33),c=(n(171),n(65),n(9),n(7),n(48),n(474)),o=n.n(c),mark=n(497),f=n.n(mark),v=n(393),h=["Перша","Апеляційна","Касаційна"],d={components:{"vue-markdown":o.a},mounted:function(){var t=this,e=this;v.init({key:"1T59hLNx6_Sc323BrHNZ_PixwxTAEUjqJ_mBoS1iX884",simpleSheet:!1,callback:function(data){var n=data.Sheet1.elements;n=n.map((function(t){t["Дата прийняття рішення ДП"];return t["Дата прийняття рішення ДП"]=new Date(t["Дата прийняття рішення ДП"]),t["С чи СС"]=w[t["С чи СС"]],t["Теги"]=t["Теги"].split(/\//g).filter((function(t){return""!==t})).map((function(t){return t.trim()})),t["Проступки"]=t["Проступки"].split(/;/g).filter((function(t){return""!==t})).map((function(t){return t.trim()})),t["Інстанція"]=h[parseInt(t["І"])-1],t["Додаткові рішення"].length?(t["Додаткові рішення"]=t["Додаткові рішення"].split(/\n/g),t["Додаткові рішення"]=t["Додаткові рішення"].map((function(t){var e={};return(t=t.split(/;/g)).length>0&&(e.body=t[0]),t.length>1&&(e.result=t[1]),t.length>2&&(e.url=t[2]),e}))):t["Додаткові рішення"].length||(t["Додаткові рішення"]=!1),t}));var r=data["Інтерфейс сайту"].elements,l=!0,c=!1,o=void 0;try{for(var f,v=r[Symbol.iterator]();!(l=(f=v.next()).done);l=!0){var d=f.value;t.customUI[d["Ключ"]]=d["Значення"]}}catch(t){c=!0,o=t}finally{try{l||null==v.return||v.return()}finally{if(c)throw o}}var _=data["Словник проступків"].elements,m=!0,y=!1,x=void 0;try{for(var k,C=_[Symbol.iterator]();!(m=(k=C.next()).done);m=!0){var $=k.value;t.crimeDict[$["Проступок"]]={description:$["Зміст проступку"],law:$["Закон"]}}}catch(t){y=!0,x=t}finally{try{m||null==C.return||C.return()}finally{if(y)throw x}}e.data=n,t.calculateFilters(n),t.filter()}}),this.$eventBus.$on("updateFilters",(function(t){e.filters=Object.assign(e.filters,t),e.filter()}))},beforeDestroy:function(){this.$eventBus.$off("updateFilters")},head:function(){},filters:{ukDate:function(t){return new Date(t).toLocaleString(["uk-UA"],{day:"2-digit",month:"2-digit",year:"numeric"})},bodyDict:function(t){return x[t]}},data:function(){return{search:"",sortAsc:!0,data:[],filteredData:[],customUI:{"Назва проекту":"Стягнення","Опис проекту":"https://dejure.foundation/","Дата оновлення бази":"Актуально на 01.12.2019","Логотип EUACI":"Так","Основний колір":"#4b7ec4","Колір футера":"#4b7ec4"},filters:{"Суд":[],"Інстанція":[],"С чи СС":[],"Стягнення ДП":[],"Проступки":[],"Теги":[]},crimeDict:{},mainKey:0}},methods:{blur:function(){document.activeElement.blur()},updateSearch:function(t){this.search=t.target.value,this.$eventBus.$emit("setOverlay",!0),setTimeout(this.filter(),10)},sortByDate:function(){this.sortAsc=!this.sortAsc,this.data=y(this.data,"Дата прийняття рішення ДП",this.sortAsc),this.filteredData=y(this.filteredData,"Дата прийняття рішення ДП",this.sortAsc)},filter:function(){var t=this,e=Object(l.a)(this.data);""!==this.search&&(e=e.filter((function(e){return new RegExp(t.search,"gi").test(e["Короткий зміст справи"]+e["ПІБ судді"])}))),this.calculateFilters(e),this.filters["Суд"].length&&(e=e.filter((function(e){return t.filters["Суд"].includes(e["Суд"])}))),this.filters["С чи СС"].length&&(e=e.filter((function(e){return t.filters["С чи СС"].includes(e["С чи СС"])}))),this.filters["Стягнення ДП"].length&&(e=e.filter((function(e){return t.filters["Стягнення ДП"].includes(e["Стягнення ДП"])}))),this.filters["Інстанція"].length&&(e=e.filter((function(e){return t.filters["Інстанція"].includes(e["Інстанція"])}))),this.filters["Проступки"].length&&(e=e.filter((function(e){var n=!0,r=!1,l=void 0;try{for(var c,o=t.filters["Проступки"][Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var f=c.value;if(e["Проступки"].includes(f))return!0}}catch(t){r=!0,l=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return!1}))),this.filters["Теги"].length&&(e=e.filter((function(e){var n=!0,r=!1,l=void 0;try{for(var c,o=t.filters["Теги"][Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var f=c.value;if(e["Теги"].includes(f))return!0}}catch(t){r=!0,l=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return!1}))),this.filteredData=e,this.$eventBus.$emit("setNumberOfDocs",e.length),this.mainKey+=1,this.$nextTick((function(){r=new f.a(document.querySelector("#main-article")),setTimeout(r.unmark(),10),setTimeout(r.markRegExp(new RegExp(t.search,"gi"),{debug:!0}),20),setTimeout(t.$eventBus.$emit("setOverlay",!1),0)}))},calculateFilters:function(data){var t=y(_(data,"Суд"),"count");this.$eventBus.$emit("setFilters","courts",t);var e=y(_(data,"Стягнення ДП"),"count");this.$eventBus.$emit("setFilters","punishment",e);var n=y(_(data,"С чи СС"),"count");this.$eventBus.$emit("setFilters","type",n);var r=y(_(data,"Інстанція"),"count");this.$eventBus.$emit("setFilters","instances",r);var l=y(m(data,"Теги"),"count");this.$eventBus.$emit("setFilters","tags",l);var c=y(m(data,"Проступки"),"count");this.$eventBus.$emit("setFilters","crimes",c)},filterTag:function(t,e){this.$eventBus.$emit("setTagFilter",t,e)},showFilters:function(){this.$eventBus.$emit("showFilters")}}};function _(data,t){var e=(data=data.map((function(e){return e[t]}))).length,n=Object(l.a)(new Set(data)).map((function(t){return{label:t,count:data.filter((function(e){return e===t})).length}}));return n.forEach((function(t){t.percent=Math.round(1e4*t.count/e)/100,""===t.label&&(t.label="не визначено")})),n}function m(data,t){var e=data.length;data=(data=data.reduce((function(e,n){return e.push.apply(e,Object(l.a)(n[t])),e}),[])).filter((function(t){return!/^-?$/g.test(t)}));var n=Object(l.a)(new Set(data)).map((function(t){return{label:t,count:data.filter((function(e){return e===t})).length}}));return n.forEach((function(t){t.percent=Math.round(1e4*t.count/e)/100,""===t.label&&(t.label="не визначено")})),n}function y(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?-1:1;return t.sort((function(a,b){return(b[e]-a[e])*n}))}window.onerror=function(t,e,n){return!0};var x={"ДП":"Рішення дисциплінарної палати","ВП ВС":"Рішення Великої Палати Верховного Суду","ВРП":"Рішення Вищої ради правосуддя"},w={"С":"Суддя","СС":"Слідчий суддя","С/СС":"Суддя/Слідчий суддя"},k=d,C=n(58),$=n(92),S=n.n($),D=n(829),B=n(275),F=n(117),T=n(66),E=n(264),I=n(267),V=n(118),A=n(102),O=n(269),U=n(830),j=n(831),z=n(272),component=Object(C.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"pt-4",attrs:{column:"","justify-center":"","align-center":"",id:"main-article"}},[n("h1",{staticClass:"display-2 font-weight-bold text-md-center"},[t._v(t._s(t.customUI["Назва проекту"]))]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v(t._s(t.customUI["Дата оновлення бази"]))]),t._v(" "),n("v-row",{staticClass:"mb-4",staticStyle:{width:"100%"}},[n("v-flex",{staticClass:"mt-2 pr-2",attrs:{xs12:"",lg8:""}},[n("v-text-field",{staticStyle:{"padding-top":"0px"},attrs:{"append-icon":"fa-search",label:"Пошук",value:t.search,"single-line":"","hide-details":""},on:{blur:t.updateSearch},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.blur(e)}}})],1),t._v(" "),n("v-flex",{staticClass:"d-flex mt-2",attrs:{xs12:"",lg4:""}},[n("v-btn",{staticClass:"mr-1 flex-grow-1",on:{click:t.sortByDate}},[t._v("Дата ДП "),n("v-icon",{attrs:{right:""}},[t._v("fa "+t._s(t.sortAsc?"fa-sort-numeric-up-alt":"fa-sort-numeric-down-alt"))])],1),t._v(" "),n("v-btn",{staticClass:"ml-1 flex-grow-1",on:{click:t.showFilters}},[t._v("Фільтри "),n("v-icon",{attrs:{right:""}},[t._v("fa fa-filter")])],1)],1)],1),t._v(" "),n("v-flex",{directives:[{name:"show",rawName:"v-show",value:0===t.filteredData.length,expression:"filteredData.length === 0"}],staticClass:"text-center pa-5",staticStyle:{width:"100%"},attrs:{xs12:""}},[t._v("\n    На жаль, за вказаними критеріями не знайдено жодного документу. Спробуйте змінити фільтри!\n  ")]),t._v(" "),n("v-flex",{key:t.mainKey,staticStyle:{width:"100%"},attrs:{xs12:""}},[n("transition-group",{attrs:{name:"slide-x-transition",tag:"div"}},t._l(t.filteredData,(function(e,i){return n("v-row",{key:"data-"+i,staticClass:"mb-4 mt-4 pr-3 pl-3",attrs:{transition:"slide-x-transition"}},[n("v-flex",{attrs:{xs12:"",lg3:""}},[n("v-card",{staticClass:"v-card v-sheet pb-4 pt-4 main-color",staticStyle:{height:"100%","border-radius":"5px 0px 0px 5px"}},[n("v-card-text",{staticClass:"text-center"},[e["Фото/Іконка"]?n("v-avatar",{staticClass:"mb-4",attrs:{size:"70px"}},[n("v-img",{staticClass:"grey lighten-2",attrs:{alt:e["ПІБ судді"],src:"https://drive.google.com/uc?export=view&id="+e["Фото/Іконка"],"aspect-ratio":"1"}})],1):n("div",{staticClass:"mb-4 white--text"},[n("v-icon",{staticStyle:{"font-size":"5em"},attrs:{color:"white"}},[t._v("fa fa-user-circle")])],1),t._v(" "),n("div",{staticClass:"headline font-weight-bold white--text"},[t._v(t._s(e["ПІБ судді"]))]),t._v(" "),n("div",{staticClass:"white--text"},[t._v(t._s(e["С чи СС"]))]),t._v(" "),n("div",{staticClass:"white--text"},[t._v(t._s(e["Суд"]))]),t._v(" "),n("div",{staticClass:"d-flex flex-column align-center"},t._l(e["Проступки"],(function(e,i){return n("v-tooltip",{key:"tag"+i,attrs:{"max-width":"360",right:""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on;return[n("v-chip",t._g({staticClass:"ma-1",staticStyle:{cursor:"pointer"},attrs:{small:""},on:{click:function(n){return t.filterTag(e,"Проступки")}}},l),[t._v(t._s(e))])]}}],null,!0)},[t._v(" "),t.crimeDict[e]?n("span",[n("strong",[t._v(t._s(t.crimeDict[e].law))]),n("br"),n("br"),t._v("\n                "+t._s(t.crimeDict[e].description))]):t._e()])})),1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",lg9:""}},[n("v-card",{staticClass:"grey lighten-3",staticStyle:{height:"100%","border-radius":"0px 5px 5px 0px"}},[n("v-card-text",[n("div",{staticClass:"mb-4"},[n("v-icon",{staticStyle:{"font-size":"14px",position:"relative",top:"-2px",left:"-2px"}},[t._v("fa fa-calendar-alt")]),t._v(" "+t._s(t._f("ukDate")(e["Дата прийняття рішення ДП"])))],1),t._v(" "),e["Номер ДП"]?n("div",{staticClass:"mb-2"},[n("strong",[t._v("Рішення дисциплінарної палати: ")]),t._v(" "),e["Лінк на рішення ДП"]?n("a",{attrs:{href:e["Лінк на рішення ДП"],target:"_blank"}},[t._v(t._s(e["Стягнення ДП"]))]):t._e(),t._v(" "),e["Лінк на рішення ДП"]?t._e():n("span",[t._v(t._s(e["Стягнення ДП"]))])]):t._e(),t._v(" "),e["ВРП"]?n("div",{staticClass:"mb-2"},[n("strong",[t._v("Рішення Вищої ради правосуддя: ")]),t._v(" "),e["Лінк на рішення ВРП"]?n("a",{attrs:{href:e["Лінк на рішення ВРП"],target:"_blank"}},[t._v(t._s(e["ВРП"]))]):t._e(),t._v(" "),e["Лінк на рішення ВРП"]?t._e():n("span",[t._v(t._s(e["ВРП"]))])]):t._e(),t._v(" "),e["ВП ВС"]?n("div",{staticClass:"mb-4"},[n("strong",[t._v("Рішення Великої Палати Верховного Суду: ")]),t._v(" "),e["Лінк на рішення ВП ВС"]?n("a",{attrs:{href:e["Лінк на рішення ВП ВС"],target:"_blank"}},[t._v(t._s(e["ВП ВС"]))]):t._e(),t._v(" "),e["Лінк на рішення ВП ВС"]?t._e():n("span",[t._v(t._s(e["ВП ВС"]))])]):t._e(),t._v(" "),t._l(e["Додаткові рішення"],(function(r,i){return e["Додаткові рішення"]?n("div",{key:"extra-"+i},[r.body?n("div",{staticClass:"mb-2"},[n("strong",[t._v(t._s(t._f("bodyDict")(r.body))+": ")]),t._v(" "),r.url?n("a",{attrs:{href:r.url,target:"_blank"}},[t._v(t._s(r.result))]):t._e(),t._v(" "),r.url?t._e():n("span",[t._v(t._s(r.result))])]):t._e()]):t._e()})),t._v(" "),n("vue-markdown",{key:"data-"+e["ПІБ судді"]+e["Дата прийняття рішення ДП"],staticClass:"mb-4 mt-4"},[t._v(t._s(e["Короткий зміст справи"]))]),t._v(" "),t._l(e["Теги"],(function(e,i){return n("v-chip",{key:"tag"+i,staticClass:"ma-1",staticStyle:{cursor:"pointer"},attrs:{small:""},on:{click:function(n){return t.filterTag(e,"Теги")}}},[n("v-icon",{staticStyle:{"font-size":"14px"},attrs:{left:""}},[t._v("fa fa-tag")]),t._v("\n              "+t._s(e)+"\n            ")],1)}))],2)],1)],1)],1)})),1)],1),t._v(" "),n("style",[t._v("\n    .main-color {\n      background: "+t._s(t.customUI["Основний колір"])+" !important;\n    }\n    .main-color {\n      background: "+t._s(t.customUI["Основний колір"])+" !important;\n    }\n    .theme--dark.v-footer {\n      background: #4B7EC4 !important;\n    }\n    .euaci-logo {\n      display: "+t._s("Так"===t.customUI["Логотип EUACI"]?"block":"none")+";\n    }\n    mark {\n      background: orange;\n      color: black;\n    }\n    ul {\n      margin-bottom: 1.5em;\n    }\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;S()(component,{VAvatar:D.a,VBtn:B.a,VCard:F.a,VCardText:T.a,VChip:E.a,VFlex:I.a,VIcon:V.a,VImg:A.a,VLayout:O.a,VRow:U.a,VTextField:j.a,VTooltip:z.a})}}]);