webpackJsonp([2],{15:function(t,e){},37:function(t,e,n){"use strict";var r=n(8),a=n(81);r.default.use(a.a);var i=new a.a({base:"/image-resize",scrollBehavior:function(t,e,n){return{x:0,y:0}},routes:[{path:"/",redirect:"/resize-demo"},{path:"/resize-demo",name:"resizeDemo",component:function(t){return n.e(0).then(function(){var e=[n(85)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"demo"}}]});e.a=i},38:function(t,e,n){"use strict";var r=n(44),a=n.n(r);e.a={install:function(t){var e=function(){var t=document.createElement("canvas");return t.getContext&&t.getContext("2d")&&window.Blob&&window.atob},n=function(t){return new a.a(function(e,n){0!==t.type.indexOf("image")&&n(new Error("图片格式非法"));var r=new FileReader;r.onload=function(t){e(t.target.result)},r.onerror=function(){n(new Error("图片读取失败"))},r.readAsDataURL(t)})},r=function(t){return new a.a(function(e,r){n(t).then(function(t){var n=new Image;n.src=t,n.onload=function(){e({width:n.width,height:n.height})},n.onerror=function(){r(new Error("图片读取失败"))}})})},i=function(t,e,n,r,a){var i=a?Math.max(n/t,r/e):Math.min(n/t,r/e);return{width:t*i,height:e*i,marginX:t*i-n,marginY:e*i-r}},o=function(t){var e=t.url,n=t.width,r=t.height,o=t.quality,u=t.type,c=t.ratio,d=t.centerCrop;return new a.a(function(t,a){var s=document.createElement("canvas"),l=document.createElement("img");l.setAttribute("style","visibility:hidden;position:fixed;z-index:-100000"),document.body.appendChild(l),l.onload=function(){var e=l.width,h=l.height;l.parentNode.removeChild(l);try{if(n&&(n=parseInt(n)),r&&(r=parseInt(r)),c){c=parseFloat(c);e/h<c?(n=e,r=n/c):(r=h,n=r*c)}!n&&(n=e),!r&&(r=h),o&&(o=parseFloat(o));var m=i(e,h,n,r,d);(Math.min(m.width,n)<1||Math.min(m.height,r)<1)&&a(new Error("目标图片width或height过小")),s.width=Math.min(m.width,n),s.height=Math.min(m.height,r);s.getContext("2d").drawImage(l,Math.min(0,-m.marginX/2),Math.min(0,-m.marginY/2),m.width,m.height),t(s.toDataURL(u||"image/jpeg",o||.934))}catch(t){a(new Error("图片压缩失败"))}},l.src=e})},u=function(t,e,n){return new a.a(function(n,r){for(var a=t.split(","),i=a[0].match(/:(.*?);/)[1],o=atob(a[1]),u=o.length,c=new Uint8Array(u);u--;)c[u]=o.charCodeAt(u);try{var d=new window.Blob([c],{type:i});d.name=e,n({blob:d,dataurl:t})}catch(t){r(new Error("图片atob失败"))}})},c=function(t,e){return new a.a(function(r,a){0!==t.type.indexOf("image")&&a(new Error("图片格式非法")),n(t).then(function(n){e||(e={}),e.url=n,o(e).then(function(e){u(e,t.name,t.size).then(function(t){r(t)}).catch(function(t){a(t)})}).catch(function(t){a(t)})}).catch(function(t){a(t)})})};t.prototype.$resizeSupported=e,t.$resizeSupported=e,t.prototype.$dataUrl=n,t.$dataUrl=n,t.prototype.$imgDimension=r,t.$imgDimension=r,t.prototype.$resizeDataUrl=o,t.$resizeDataUrl=o,t.prototype.$dataUrlToBlob=u,t.$dataUrlToBlob=u,t.prototype.$resizeImage=c,t.$resizeImage=c}}},40:function(t,e,n){function r(t){n(79)}var a=n(41)(n(43),n(80),r,null,null);t.exports=a.exports},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),a=(n.n(r),n(39)),i=n.n(a),o=n(8),u=n(40),c=n.n(u),d=n(37),s=n(38);o.default.use(i.a),o.default.use(s.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:d.a,template:"<App/>",components:{App:c.a}})},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{}},created:function(){},mounted:function(){},watch:{},updated:function(){},methods:{}}},79:function(t,e){},80:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"left-menu"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"/resize-demo",theme:"dark",router:!0}},[n("el-menu-item",{attrs:{index:"/resize-demo"}},[t._v("demo")]),t._v(" "),n("el-menu-item",{attrs:{index:"/api"}},[t._v("API")])],1)],1),t._v(" "),n("div",{staticClass:"content"},[n("router-view")],1)])},staticRenderFns:[]}}},[42]);
//# sourceMappingURL=app.bf51016a83b0d3e9c22b.js.map