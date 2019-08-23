(function(t){function n(n){for(var r,c,i=n[0],o=n[1],u=n[2],p=0,b=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&b.push(s[c][0]),s[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(n);while(b.length)b.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,i=1;i<e.length;i++){var o=e[i];0!==s[o]&&(r=!1)}r&&(a.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},s={app:0},a=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var l=o;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),s=e.n(r);s.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),s=e("8c4f"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("LEGO Sequencer v0.1")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{class:["nav-item","/"===t.$route.path?"active":""]},[e("a",{staticClass:"nav-link",attrs:{href:"/"}},[t._v("Home "),"/"===t.$route.path?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])]),e("li",{class:["nav-item","/debug"===t.$route.path?"active":""]},[e("a",{staticClass:"nav-link",attrs:{href:"/debug"}},[t._v("Debug "),"/debug"===t.$route.path?e("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])])])])]),e("main",{staticClass:"container",attrs:{role:"main"}},[e("div",{staticClass:"starter-template"},[e("router-view")],1)])])},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],i={name:"app",components:{}},o=i,u=(e("034f"),e("2877")),l=Object(u["a"])(o,a,c,!1,null,null,null),p=l.exports,b=(e("ab8b"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("LEGO Sequencer")]),e("div",{staticClass:"step"},[e("h2",[t._v("1. Nudge Controls")]),e("div",{staticClass:"controls"},[e("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(n){return t.nudge("left")}}},[t._v("« nudge left")]),e("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(n){return t.nudge("right")}}},[t._v("nudge right »")])]),e("div",{staticClass:"results"},[t._v("\n      "+t._s(t.response)+"\n    ")])]),e("div",{staticClass:"step"},[e("h2",[t._v("2. Scanning")]),e("div",{staticClass:"controls"},[e("button",{staticClass:"btn btn-primary",on:{click:t.scan_bricks}},[t._v("scan bricks")]),e("button",{staticClass:"btn btn-danger",on:{click:t.clear_all}},[t._v("clear runs")]),e("span",{staticClass:"status"},[t.brick_error?e("span",{staticClass:"error"},[e("b",[t._v("Error:")]),t._v(" "+t._s(t.brick_error))]):e("span",[t._v(t._s(t.brick_status))])])]),e("ul",{staticClass:"list-group",staticStyle:{"margin-top":"1em"}},t._l(t.brick_runs,function(n,r){return e("li",{staticClass:"list-group-item brick_run"},[e("button",{staticClass:"blaster-btn btn btn-danger",on:{click:function(e){return t.blast_sequence(n)}}},[t._v("BLAST")]),e("div",{staticClass:"brick_tray"},t._l(n,function(n){return e("div",{class:"brick brick_"+n.color},[t._v(" ")])}),0)])}),0)]),e("div",{staticClass:"step"},[e("h2",[t._v("3. BLAST")]),e("div",{staticClass:"results"},[t._v("\n      "+t._s(t.blast_response)+"\n    ")])])])}),f=[],v={green:"A",blue:"C",red:"T",yellow:"G"},h={name:"Home",data:function(){return{response:"...",brick_status:"(pending)",brick_runs:[],brick_error:null,blast_response:"..."}},methods:{ping:function(){var t=this;fetch("http://localhost:5000/api/ping").then(function(t){return t.json()}).then(function(n){t.response=n.msg})},nudge:function(t){var n=this;fetch("http://localhost:5000/api/nudge/".concat(t)).then(function(t){return t.json()}).then(function(t){n.response=t.msg}).catch(function(t){n.response=t})},scan_bricks:function(){var t=this;this.brick_error=null,this.brick_status="scanning...",fetch("http://localhost:5000/api/query_ev3").then(function(t){return t.json()}).then(function(n){t.brick_status="done!",t.brick_runs.push(n)}).catch(function(n){t.brick_error="".concat(n)})},clear_all:function(){confirm("Clear all entries?")&&(this.brick_runs=[])},blast_sequence:function(t){var n=this,e=t.map(function(t){return v[t.color]}).join("");console.log("BLASTing ",t.map(function(t){return t.color}).join(", "),", i.e.: ",e),fetch("http://localhost:5000/api/blast?sequence=".concat(e)).then(function(t){return t.json()}).then(function(t){n.blast_response=t}).catch(function(t){n.blast_response="".concat(t)})}}},d=h,_=Object(u["a"])(d,b,f,!1,null,"7bcdf51a",null),g=_.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("LEGO Sequencer (Debug)")]),e("div",{staticClass:"step"},[e("h2",[t._v("1. Nudge Controls")]),e("div",{staticClass:"controls"},[e("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(n){return t.nudge("left")}}},[t._v("« nudge left")]),e("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(n){return t.nudge("right")}}},[t._v("nudge right »")])]),e("div",{staticClass:"results"},[t._v("\n            "+t._s(t.response)+"\n        ")])])])},C=[],k={name:"Debug",data:function(){return{response:"...",brick_status:"(pending)",brick_runs:[],brick_error:null,blast_response:"..."}},methods:{ping:function(){var t=this;fetch("http://localhost:5000/api/ping").then(function(t){return t.json()}).then(function(n){t.response=n.msg})},nudge:function(t){var n=this;fetch("http://localhost:5000/api/nudge/".concat(t)).then(function(t){return t.json()}).then(function(t){n.response=t.msg}).catch(function(t){n.response=t})}}},y=k,j=Object(u["a"])(y,m,C,!1,null,"31fbf194",null),O=j.exports;r["a"].config.productionTip=!1,r["a"].use(s["a"]);var x=new s["a"]({mode:"history",routes:[{path:"/",component:g,name:"home"},{path:"/debug",component:O,name:"debug"}]});new r["a"]({render:function(t){return t(p)},router:x}).$mount("#app")},"64a9":function(t,n,e){}});
//# sourceMappingURL=app.3840b171.js.map