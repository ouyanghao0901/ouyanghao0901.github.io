webpackJsonp([1],{"39Yu":function(t,e){},"3KAF":function(t,e){},"9X5H":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("xd7I"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{dir:"translateFrom"}},[n("h2",[t._v("OUYANGHAO TRANSLATOR")]),t._v(" "),n("div",{staticClass:"well "},[n("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.formSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Please input"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.lang,expression:"lang"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.lang=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),n("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),n("option",{attrs:{value:"ko"}},[t._v("Korean")]),t._v(" "),n("option",{attrs:{value:"ja"}},[t._v("Japanese")])]),t._v(" "),n("input",{staticClass:"btn btn-default",attrs:{type:"submit",value:"翻译"}})])])])},staticRenderFns:[]};var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"transilateOutput"}},[this._v(this._s(this.text))])},staticRenderFns:[]};var i={name:"index",data:function(){return{text:""}},methods:{translateText:function(t,e){var n=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190404T045535Z.6528d9c49101a9ad.913836426d1e95d6c58e46d4801bbfec09a03cac&lang="+e+"&text="+t).then(function(t){n.text=t.data.text[0]})}},components:{transilatefrom:n("C7Lr")({name:"translateFrom",data:function(){return{text:"",lang:""}},methods:{formSubmit:function(){this.$emit("formSubmit",this.text,this.lang)}},created:function(){this.lang="en"}},r,!1,function(t){n("9X5H")},null,null).exports,transilateoutput:n("C7Lr")({name:"transilateOutput",props:["text"],data:function(){return{}}},s,!1,function(t){n("g8oI")},"data-v-2fe9ff23",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6 col-sm-offset-3"},[e("transilatefrom",{on:{formSubmit:this.translateText}}),this._v(" "),e("transilateoutput",{attrs:{text:this.text}})],1)},staticRenderFns:[]};var l=n("C7Lr")(i,o,!1,function(t){n("39Yu")},"data-v-13d0b068",null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=n("C7Lr")({name:"App"},u,!1,function(t){n("3KAF")},null,null).exports,p=n("KGCO");a.a.use(p.a);var v=new p.a({routes:[{path:"/",name:"index",component:l}]}),f=n("aozt"),d=n.n(f);a.a.prototype.$http=d.a,a.a.config.productionTip=!1,new a.a({el:"#app",router:v,components:{App:c},template:"<App/>"})},g8oI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.16d7037c0a827832daa4.js.map