webpackJsonp([0],{85:function(e,t,i){function n(e){i(92)}var o=i(41)(i(87),i(93),n,null,null);e.exports=o.exports},87:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(89),o=i.n(n),s=i(8);t.default={data:function(){return{imageUrl:"",file:null,resizedUrl:"",resizedFile:null,oriDimension:{width:"",height:""},target:{width:"",height:"",quality:""},loadingInstance:null}},methods:{uploadFile:function(e){var t=this;console.log(e),this.imageUrl=e.url,this.file=e.raw,s.default.prototype.$imgDimension(e.raw).then(function(e){t.oriDimension=e})},validParams:function(){return NaN===parseInt(this.target.width)||parseInt(this.target.width)<0?(this.$message.error("请输入合法width"),!1):!(NaN===parseInt(this.target.height)||parseInt(this.target.heigh)<0)||(this.$message.error("请输入合法height"),!1)},resizeImage:function(e){var t=this;if(this.validParams()){var i={width:this.target.width,height:this.target.height,quality:this.target.quality};this.loadingInstance=o.a.service({fullscreen:!0,text:"压缩中"}),s.default.prototype.$resizeImage(this.file,i).then(function(e){t.resizedUrl=e.dataurl,t.resizedFile=e.blob,t.loadingInstance.close()}).catch(function(e){t.loadingInstance.close(),t.$message.error(e.message)})}},saveToLocal:function(){var e=document.createElement("a"),t=new MouseEvent("click");e.download=this.resizedFile.name,e.href=this.resizedUrl,e.dispatchEvent(t)}}}},88:function(e,t,i){t=e.exports=i(84)(!0),t.push([e.i,".resize-demo .ori-img .upload-demo{display:inline-block}.resize-demo .ori-img .img-container{display:inline-block;max-width:800px;max-height:500px;margin-top:20px;overflow:auto}.resize-demo .target-params .el-input{width:100px}.resize-demo .resize-img .img-container{display:inline-block;max-width:800px;max-height:500px;margin-top:20px;overflow:auto}","",{version:3,sources:["/Users/raistlinzuo/zuolei828.github.io/image_resize_src/src/pages/content/demo.vue"],names:[],mappings:"AAOA,mCACE,oBAAsB,CACvB,AACD,qCACE,qBAAsB,AACtB,gBAAiB,AACjB,iBAAkB,AAClB,gBAAiB,AACjB,aAAe,CAChB,AACD,sCACE,WAAa,CACd,AACD,wCACE,qBAAsB,AACtB,gBAAiB,AACjB,iBAAkB,AAClB,gBAAiB,AACjB,aAAe,CAChB",file:"demo.vue",sourcesContent:["/*\n  Mixins\n    - General Mixins\n    - Flexbox Mixins\n    - Transition Mixins\n    - Animation Mixins\n*/\n.resize-demo .ori-img .upload-demo {\n  display: inline-block;\n}\n.resize-demo .ori-img .img-container {\n  display: inline-block;\n  max-width: 800px;\n  max-height: 500px;\n  margin-top: 20px;\n  overflow: auto;\n}\n.resize-demo .target-params .el-input {\n  width: 100px;\n}\n.resize-demo .resize-img .img-container {\n  display: inline-block;\n  max-width: 800px;\n  max-height: 500px;\n  margin-top: 20px;\n  overflow: auto;\n}\n"],sourceRoot:""}])},89:function(e,t,i){e.exports=function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="/dist/",t(0)}({0:function(e,t,i){e.exports=i(176)},3:function(e,t){e.exports=function(e,t,i,n,o){var s,r=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,r=e.default);var a="function"==typeof r?r.options:r;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},a._ssrRegister=c):i&&(c=i),c){var u=a.beforeCreate;a.beforeCreate=u?[].concat(u,c):[c]}return{esModule:s,exports:r,options:a}}},55:function(e,t){e.exports=i(8)},123:function(e,t){e.exports=i(90)},170:function(e,t){e.exports=i(91)},176:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=i(177),s=n(o),r=i(181),l=n(r);t.default={install:function(e){e.use(s.default),e.prototype.$loading=l.default},directive:s.default,service:l.default}},177:function(e,t,i){"use strict";var n=i(55),o=function(e){return e&&e.__esModule?e:{default:e}}(n),s=i(123),r=o.default.extend(i(178));t.install=function(e){if(!e.prototype.$isServer){var t=function(t,n){n.value?e.nextTick(function(){n.modifiers.fullscreen?(t.originalPosition=(0,s.getStyle)(document.body,"position"),t.originalOverflow=(0,s.getStyle)(document.body,"overflow"),(0,s.addClass)(t.mask,"is-fullscreen"),i(document.body,t,n)):((0,s.removeClass)(t.mask,"is-fullscreen"),n.modifiers.body?(t.originalPosition=(0,s.getStyle)(document.body,"position"),["top","left"].forEach(function(e){var i="top"===e?"scrollTop":"scrollLeft";t.maskStyle[e]=t.getBoundingClientRect()[e]+document.body[i]+document.documentElement[i]+"px"}),["height","width"].forEach(function(e){t.maskStyle[e]=t.getBoundingClientRect()[e]+"px"}),i(document.body,t,n)):(t.originalPosition=(0,s.getStyle)(t,"position"),i(t,t,n)))}):t.domVisible&&(t.instance.$on("after-leave",function(e){t.domVisible=!1,n.modifiers.fullscreen&&"hidden"!==t.originalOverflow&&(document.body.style.overflow=t.originalOverflow),n.modifiers.fullscreen||n.modifiers.body?document.body.style.position=t.originalPosition:t.style.position=t.originalPosition}),t.instance.visible=!1)},i=function(t,i,n){i.domVisible||"none"===(0,s.getStyle)(i,"display")||"hidden"===(0,s.getStyle)(i,"visibility")||(Object.keys(i.maskStyle).forEach(function(e){i.mask.style[e]=i.maskStyle[e]}),"absolute"!==i.originalPosition&&"fixed"!==i.originalPosition&&(t.style.position="relative"),n.modifiers.fullscreen&&n.modifiers.lock&&(t.style.overflow="hidden"),i.domVisible=!0,t.appendChild(i.mask),e.nextTick(function(){i.instance.visible=!0}),i.domInserted=!0)};e.directive("loading",{bind:function(e,i){var n=new r({el:document.createElement("div"),data:{text:e.getAttribute("element-loading-text"),fullscreen:!!i.modifiers.fullscreen}});e.instance=n,e.mask=n.$el,e.maskStyle={},t(e,i)},update:function(e,i){e.instance.setText(e.getAttribute("element-loading-text")),i.oldValue!==i.value&&t(e,i)},unbind:function(e,t){e.domInserted&&(t.modifiers.fullscreen||t.modifiers.body?document.body.removeChild(e.mask):e.mask&&e.mask.parentNode&&e.mask.parentNode.removeChild(e.mask))}})}}},178:function(e,t,i){var n=i(3)(i(179),i(180),null,null,null);e.exports=n.exports},179:function(e,t){"use strict";t.__esModule=!0,t.default={data:function(){return{text:null,fullscreen:!0,visible:!1,customClass:""}},methods:{handleAfterLeave:function(){this.$emit("after-leave")},setText:function(e){this.text=e}}}},180:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"el-loading-fade"},on:{"after-leave":e.handleAfterLeave}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-loading-mask",class:[e.customClass,{"is-fullscreen":e.fullscreen}]},[i("div",{staticClass:"el-loading-spinner"},[i("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[i("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]),e.text?i("p",{staticClass:"el-loading-text"},[e._v(e._s(e.text))]):e._e()])])])},staticRenderFns:[]}},181:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=i(55),s=n(o),r=i(178),l=n(r),a=i(123),c=i(170),u=n(c),d=s.default.extend(l.default),f={text:null,fullscreen:!0,body:!1,lock:!1,customClass:""},m=void 0;d.prototype.originalPosition="",d.prototype.originalOverflow="",d.prototype.close=function(){var e=this;this.fullscreen&&(m=void 0),this.$on("after-leave",function(t){e.fullscreen&&"hidden"!==e.originalOverflow&&(document.body.style.overflow=e.originalOverflow),e.fullscreen||e.body?document.body.style.position=e.originalPosition:e.target.style.position=e.originalPosition,e.$el&&e.$el.parentNode&&e.$el.parentNode.removeChild(e.$el),e.$destroy()}),this.visible=!1};var p=function(e,t,i){var n={};e.fullscreen?(i.originalPosition=(0,a.getStyle)(document.body,"position"),i.originalOverflow=(0,a.getStyle)(document.body,"overflow")):e.body?(i.originalPosition=(0,a.getStyle)(document.body,"position"),["top","left"].forEach(function(t){var i="top"===t?"scrollTop":"scrollLeft";n[t]=e.target.getBoundingClientRect()[t]+document.body[i]+document.documentElement[i]+"px"}),["height","width"].forEach(function(t){n[t]=e.target.getBoundingClientRect()[t]+"px"})):i.originalPosition=(0,a.getStyle)(t,"position"),Object.keys(n).forEach(function(e){i.$el.style[e]=n[e]})},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!s.default.prototype.$isServer){if(e=(0,u.default)({},f,e),"string"==typeof e.target&&(e.target=document.querySelector(e.target)),e.target=e.target||document.body,e.target!==document.body?e.fullscreen=!1:e.body=!0,e.fullscreen&&m)return m;var t=e.body?document.body:e.target,i=new d({el:document.createElement("div"),data:e});return p(e,t,i),"absolute"!==i.originalPosition&&"fixed"!==i.originalPosition&&(t.style.position="relative"),e.fullscreen&&e.lock&&(t.style.overflow="hidden"),t.appendChild(i.$el),s.default.nextTick(function(){i.visible=!0}),e.fullscreen&&(m=i),i}};t.default=g}})},90:function(e,t,i){"use strict";function n(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function o(e,t){if(e){for(var i=e.className,o=(t||"").split(" "),s=0,r=o.length;s<r;s++){var l=o[s];l&&(e.classList?e.classList.add(l):n(e,l)||(i+=" "+l))}e.classList||(e.className=i)}}function s(e,t){if(e&&t){for(var i=t.split(" "),o=" "+e.className+" ",s=0,r=i.length;s<r;s++){var l=i[s];l&&(e.classList?e.classList.remove(l):n(e,l)&&(o=o.replace(" "+l+" "," ")))}e.classList||(e.className=p(o))}}function r(e,t,i){if(e&&t)if("object"===(void 0===t?"undefined":l(t)))for(var n in t)t.hasOwnProperty(n)&&r(e,n,t[n]);else t=g(t),"opacity"===t&&m<9?e.style.filter=isNaN(i)?"":"alpha(opacity="+100*i+")":e.style[t]=i}t.__esModule=!0,t.getStyle=t.once=t.off=t.on=void 0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasClass=n,t.addClass=o,t.removeClass=s,t.setStyle=r;var a=i(8),c=function(e){return e&&e.__esModule?e:{default:e}}(a),u=c.default.prototype.$isServer,d=/([\:\-\_]+(.))/g,f=/^moz([A-Z])/,m=u?0:Number(document.documentMode),p=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},g=function(e){return e.replace(d,function(e,t,i,n){return n?i.toUpperCase():i}).replace(f,"Moz$1")},v=t.on=function(){return!u&&document.addEventListener?function(e,t,i){e&&t&&i&&e.addEventListener(t,i,!1)}:function(e,t,i){e&&t&&i&&e.attachEvent("on"+t,i)}}(),h=t.off=function(){return!u&&document.removeEventListener?function(e,t,i){e&&t&&e.removeEventListener(t,i,!1)}:function(e,t,i){e&&t&&e.detachEvent("on"+t,i)}}();t.once=function(e,t,i){v(e,t,function n(){i&&i.apply(this,arguments),h(e,t,n)})},t.getStyle=m<9?function(e,t){if(!u){if(!e||!t)return null;t=g(t),"float"===t&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(e){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(i){return e.style[t]}}}:function(e,t){if(!u){if(!e||!t)return null;t=g(t),"float"===t&&(t="cssFloat");try{var i=document.defaultView.getComputedStyle(e,"");return e.style[t]||i?i[t]:null}catch(i){return e.style[t]}}}},91:function(e,t,i){"use strict";t.__esModule=!0,t.default=function(e){for(var t=1,i=arguments.length;t<i;t++){var n=arguments[t]||{};for(var o in n)if(n.hasOwnProperty(o)){var s=n[o];void 0!==s&&(e[o]=s)}}return e}},92:function(e,t,i){var n=i(88);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(86)("1765cea4",n,!0)},93:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"resize-demo"},[i("div",{staticClass:"ori-img"},[i("div",[i("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,accept:"image/*","show-file-list":!1,"on-change":e.uploadFile}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1),e._v(" "),e.imageUrl?i("span",[e._v("原始图片 width:"+e._s(e.oriDimension.width)+" height:"+e._s(e.oriDimension.height)+" size:"+e._s(e.file?parseInt(e.file.size/1024)+"kb":""))]):e._e()],1),e._v(" "),e.imageUrl?i("div",{staticClass:"img-container"},[i("img",{attrs:{src:e.imageUrl}})]):e._e()]),e._v(" "),e.imageUrl?i("div",{staticClass:"target-params"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.resizeImage}},[e._v("压缩")]),e._v("\n    width:\n    "),i("el-input",{model:{value:e.target.width,callback:function(t){e.target.width="string"==typeof t?t.trim():t},expression:"target.width"}}),e._v("\n    height:\n    "),i("el-input",{model:{value:e.target.height,callback:function(t){e.target.height="string"==typeof t?t.trim():t},expression:"target.height"}}),e._v("\n    quality(0.x):\n    "),i("el-input",{model:{value:e.target.quality,callback:function(t){e.target.quality="string"==typeof t?t.trim():t},expression:"target.quality"}})],1):e._e(),e._v(" "),e.resizedUrl?i("div",{staticClass:"resize-img"},[i("div",{staticClass:"img-container"},[i("img",{attrs:{src:e.resizedUrl}})]),e._v(" "),i("br"),e._v(" "),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.saveToLocal}},[e._v("保存到本地")]),e._v(" "),i("span",[e._v("压缩后大小: "+e._s(e.resizedFile?parseInt(e.resizedFile.size/1024)+"kb":""))])],1):e._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=0.53b3c6fa0c6711fc6fdb.js.map