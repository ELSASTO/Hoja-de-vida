(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7,10,12],{420:function(t,e,o){var content=o(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("04db6e10",content,!0,{sourceMap:!1})},426:function(t,e,o){"use strict";o.r(e);var n=o(479),r=o(482),l=o(396),c=o(401),d=o(175),f=o(448),h={data:function(){return{drawer:!1,menuItems:[{item:"Conocimientos",href:"#Knowledge"},{item:"Proyectos",href:"#Projects"},{item:"Experiencia Laboral",href:"#WorkExperience"},{item:"Contacto",href:"#Contact"},{item:"Freelancer",href:"#Freelancer"}]}}},v=o(84),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"stick"},[e("div",{staticClass:"mb-5 py-5 header",attrs:{fluid:""}},[e(c.a,{attrs:{justify:"space-around"}},[e(f.a,{staticClass:"mt-2 mt-md-0 mt-lg-0 MyName"},[t._v("EL SASTO")]),t._v(" "),e("div",{staticClass:"d-none d-xl-block d-lg-block"},t._l(t.menuItems,(function(o,n){var r=o.item,c=o.href;return e(l.a,{key:n,attrs:{text:"",href:c}},[t._v(t._s(r))])})),1),t._v(" "),e("div",{staticClass:"d-lg-none d-xl-none"},[e(n.a,{attrs:{color:"#ff0000"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(r.a,{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(d.a,{staticClass:"text-center",attrs:{height:"600"}},[e("div",{staticClass:"pt-8"},[e("h2",{staticClass:"titles pb-8"},[t._v("EL SASTO")]),t._v(" "),t._l(t.menuItems,(function(o,n){var r=o.item,c=o.href;return e("div",{key:n},[e(l.a,{attrs:{text:"",href:c},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v(" "+t._s(r))]),t._v(" "),e("br")],1)}))],2)])],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(426).default})},432:function(t,e,o){var content=o(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("53887fd2",content,!0,{sourceMap:!1})},433:function(t,e,o){var n=o(40)((function(i){return i[1]}));n.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);border-radius:4px;color:#fff;display:inline-block;font-size:14px;line-height:22px;opacity:0;padding:5px 16px;pointer-events:none;position:absolute;text-transform:none;width:auto}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),n.locals={},t.exports=n},436:function(t,e,o){"use strict";o(420)},437:function(t,e,o){var n=o(40)((function(i){return i[1]}));n.push([t.i,".slick-next:before,.slick-prev:before{color:red;font-size:30px}",""]),n.locals={},t.exports=n},439:function(t,e,o){"use strict";o.r(e);var n=o(396),r=o(402),l=o(411),c=o(401),d=o(481),f=(o(24),o(48),{data:function(){return{mensaje:"",menuItems:[{item:"Conocimientos",href:"#Knowledge"},{item:"Proyectos",href:"#Projects"},{item:"Experiencia Laboral",href:"#WorkExperience"},{item:"Contacto",href:"#Contact"},{item:"Freelancer",href:"#Freelancer"}]}},methods:{sendMessage:function(){var t="https://api.whatsapp.com/send?phone=573142484466&text="+this.mensaje;window.location.replace(t)}}}),h=o(84),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"mt-10"},[e("div",{staticClass:"contenedor"},[e(c.a,{attrs:{align:"center",justify:"center"}},[e(r.a,{attrs:{cols:"12",xl:"8",lg:"8",align:"center",justify:"center"}},[e("div",{staticClass:"mb-5"},[e(n.a,{staticClass:"social-button",attrs:{color:"red",fab:"",small:"",href:"https://api.whatsapp.com/send?phone=573142484466"}},[e(l.a,{attrs:{dark:""}},[t._v("mdi-whatsapp")])],1),t._v(" "),e(n.a,{staticClass:"social-button",attrs:{color:"red",fab:"",small:"",href:"https://www.linkedin.com/in/jose-alejandro-sastoque-agudelo-11462abb/"}},[e(l.a,{attrs:{dark:""}},[t._v("mdi-linkedin")])],1)],1),t._v(" "),e(c.a,{attrs:{align:"center",justify:"center"}},[e(r.a,{staticClass:"pl-7 pr-7",attrs:{align:"center",justify:"center",cols:"12",xl:"6",lg:"6",md:"6"}},[e(d.a,{attrs:{label:"Enviar Mensaje",color:"red","prepend-icon":"mdi-whatsapp","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage.apply(null,arguments)}},model:{value:t.mensaje,callback:function(e){t.mensaje=e},expression:"mensaje"}}),t._v(" "),e(n.a,{staticClass:"font1 mt-5",staticStyle:{"background-color":"#ff0000"},attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",block:""},on:{click:t.sendMessage}},[t._v("Enviar Mensaje")])],1)],1),t._v(" "),e(c.a,{attrs:{justify:"space-around"}},[e("div",{staticClass:"mb-5"},t._l(t.menuItems,(function(o,r){var l=o.item,c=o.href;return e(n.a,{key:r,attrs:{text:"",href:c}},[t._v(t._s(l))])})),1)]),t._v(" "),e("span",[t._v("© "+t._s((new Date).getFullYear()))])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},440:function(t,e,o){"use strict";o.r(e);var n=o(402),r=o(403),l=o(401),c=o(2),d=(o(67),o(432),o(414)),f=o(120),h=o(419),v=o(421),m=(o(16),o(19),o(30),o(31),o(15),o(7),o(18),o(422)),_=o(185),y=o(429),w=o(83),C=o(3);function j(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function S(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?j(Object(o),!0).forEach((function(e){Object(c.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):j(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var O=Object(w.a)(m.a,Object(_.b)(["top","right","bottom","left","absolute"]),d.a,y.a).extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=(!1!==this.attach?a.offsetLeft:a.left)||0,o=Math.max(a.width,t.width),n=0;if(n+=e,(this.left||this.$vuetify.rtl&&!this.right)&&(n-=o-a.width),this.offsetX){var r=isNaN(Number(this.maxWidth))?a.width:Math.min(a.width,Number(this.maxWidth));n+=this.left?-r:a.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=0;return this.top&&(e+=a.height-t.height),!1!==this.attach?e+=a.offsetTop:e+=a.top+this.pageYOffset,this.offsetY&&(e+=this.top?-a.height:a.height),this.nudgeTop&&(e-=parseInt(this.nudgeTop)),this.nudgeBottom&&(e+=parseInt(this.nudgeBottom)),e},hasActivator:function(){return!!(this.$slots.activator||this.$scopedSlots.activator||this.activator||this.inputActivator)},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!=typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(C.g)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(C.g)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var o=t+e-this.pageWidth+12;return(t=(!this.left||this.right)&&o>0?Math.max(t-o,0):Math.max(t,12))+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),o=this.absoluteYOffset+e,n=this.dimensions.activator,r=this.dimensions.content.height,l=o<t+r;return l&&this.offsetOverflow&&n.top>r?t=this.pageYOffset+(n.top-r):l&&!this.allowOverflow?t=o-r-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){for(var t=this.getActivator();t;){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}else this.activatorFixed=!1},deactivate:function(){},genActivatorListeners:function(){var t=this,e=d.a.options.methods.genActivatorListeners.call(this),o=e.click;return o&&(e.click=function(e){t.openOnClick&&o&&o(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var rect=t.getBoundingClientRect();return{top:Math.round(rect.top),left:Math.round(rect.left),bottom:Math.round(rect.bottom),right:Math.round(rect.right),width:Math.round(rect.width),height:Math.round(rect.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var rect=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var style=window.getComputedStyle(t);rect.left=parseInt(style.marginLeft),rect.top=parseInt(style.marginTop)}return rect},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var o=e.$refs.content;o&&"none"===o.style.display?(o.style.display="inline-block",t(),o.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!=typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:S({},this.dimensions.activator),content:S({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var o=this.getActivator();if(!o)return;e.activator=this.measure(o),e.activator.offsetLeft=o.offsetLeft,!1!==this.attach?e.activator.offsetTop=o.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var o=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+o.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+o.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}}),x=o(20),N=Object(w.a)(f.a,h.a,v.a,O).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,o=!(this.bottom||this.left||this.top||this.right),n=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||o?r=n+e.width/2-content.width/2:(this.left||this.right)&&(r=n+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,o=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=o+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=o+e.height/2-content.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),!1===this.attach&&(n+=this.pageYOffset),"".concat(this.calcYOverflow(n),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(C.g)(this.maxWidth),minWidth:Object(C.g)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(C.n)(this,"activator",!0)&&Object(x.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=d.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===C.q.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:Object(c.a)(Object(c.a)(Object(c.a)({},this.contentClass,!0),"menuable__content__active",this.isActive),"v-tooltip__content--fixed",this.activatorFixed),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),M={data:function(){return{Conocimientos:[{img:"/IMG/tecnologias/logo_nuxt.webp",alt:"logo_nuxt",Name:"nuxt"},{img:"/IMG/tecnologias/logo_vue.webp",alt:"logo_vue",Name:"vue"},{img:"/IMG/tecnologias/logo_vuetify.webp",alt:"logo_vuetify",Name:"vuetify"},{img:"/IMG/tecnologias/logo_javascript.webp",alt:"logo_javascript",Name:"javascript"},{img:"/IMG/tecnologias/logo_node.webp",alt:"logo_node",Name:"node"},{img:"/IMG/tecnologias/logo_php.webp",alt:"logo_php",Name:"php"},{img:"/IMG/tecnologias/logo_bootstrap.webp",alt:"logo_bootstrap",Name:"bootstrap"},{img:"/IMG/tecnologias/logo_bases_de_datos.webp",alt:"logo_bases_de_datos",Name:"bases_de_datos"},{img:"/IMG/tecnologias/logo_wordpress.webp",alt:"logo_wordpress",Name:"wordpress"},{img:"/IMG/tecnologias/logo_divi.webp",alt:"logo_divi",Name:"divi"},{img:"/IMG/tecnologias/logo_elementor.webp",alt:"logo_elementor",Name:"elementor"},{img:"/IMG/tecnologias/logo_azure.webp",alt:"logo_azure",Name:"azure"}],proximos:[{img:"/IMG/tecnologias/logo_typescript.webp",alt:"logo_typescript",Name:"typescript"},{img:"/IMG/tecnologias/logo_bandera.webp",alt:"logo_bandera",Name:"bandera"},{img:"/IMG/tecnologias/logo_flatter.webp",alt:"logo_flatter",Name:"flatter"},{img:"/IMG/tecnologias/logo_larabel.webp",alt:"logo_larabel",Name:"laravel"}]}}},k=o(84),component=Object(k.a)(M,(function(){var t=this,e=t._self._c;return e("div",{attrs:{align:"center",justify:"center"}},[e(l.a,{attrs:{align:"center",justify:"center"}},[e(n.a,{attrs:{align:"center",justify:"center",cols:"12",xl:"9",lg:"10",md:"10"}},[e("div",{staticClass:"contet-titles my-5",attrs:{"data-aos":"fade-right","data-aos-duration":"3000"}},[e("h2",{staticClass:"titles"},[t._v("CONOCIMIENTOS ACTUALES")])]),t._v(" "),e(r.a,{staticClass:"pa-3"},[e(l.a,{attrs:{align:"center",justify:"center"}},t._l(t.Conocimientos,(function(o,r){var img=o.img,l=o.alt,c=o.Name;return e(n.a,{key:r,attrs:{cols:"2"}},[e("div",{staticClass:"py-2 shadow"},[e(N,{attrs:{bottom:"",color:"#920a0a"},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on;return[e("img",t._g({staticClass:"img-languages",attrs:{"data-aos":"zoom-in-up","data-aos-duration":"2000",alt:l,title:l,src:img}},n))]}}],null,!0)},[t._v(" "),e("h3",{staticClass:"knowledge text-capitalize"},[t._v(t._s(c))])])],1)])})),1)],1)],1)],1),t._v(" "),e(l.a,{attrs:{align:"center",justify:"center"}},[e(n.a,{attrs:{align:"center",justify:"center",cols:"12",xl:"8",lg:"9",md:"10"}},[e("div",{staticClass:"contet-titles my-5",attrs:{"data-aos":"fade-right"}},[e("h2",{staticClass:"titles"},[t._v("CONOCIMIENTOS DE INTERÉS")])]),t._v(" "),e(r.a,{staticClass:"pa-3 mb-5"},[e(l.a,{attrs:{align:"center",justify:"center"}},t._l(t.proximos,(function(o,r){var img=o.img,l=o.alt,c=o.Name;return e(n.a,{key:r,attrs:{cols:"2"}},[e("div",{staticClass:"py-2 shadow"},[e(N,{attrs:{bottom:"",color:"#920a0a"},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on;return[e("img",t._g({staticClass:"img-languages",attrs:{"data-aos":"zoom-in-up","data-aos-duration":"2000",alt:l,title:l,src:img}},n))]}}],null,!0)},[t._v(" "),e("h3",{staticClass:"knowledge text-capitalize"},[t._v(t._s(c))])])],1)])})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},441:function(t,e,o){"use strict";o.r(e);var n=o(428),r=o(402),l=o(403),c=o(480),d=o(401),f=o(423),h=o.n(f),v=(o(424),o(425),{components:{VueSlickCarousel:h.a},data:function(){return{projects:[{img:"/IMG/projects/sitio_web_unillanos_postgrados.webp",alt:"sitio_web_unillanos_postgrados",NameProyect:"28 landing pages Unilanos",Description:"Desarrollé un sitio web para la Universidad de los Llanos con 28 landing pages, una para cada posgrado. Utilicé Nuxt y Vuetify, y creé una API Rest con Node.js para validar y almacenar información de los formularios, asegurando una experiencia de usuario fluida y segura."},{img:"/IMG/projects/Sitio_web_Agencia_Manager.webp",alt:"Sitio_web_Agencia_Manager",NameProyect:"Sitio Web Agencia Manager SAS",Description:"Desde cero, desarrollé el sitio web de la Agencia Manager, utilizando tecnologías avanzadas como Nuxt, Vue y Vuetify. Este proyecto incorporó un enfoque meticuloso en la creación de una interfaz intuitiva y dinámica para los usuarios"},{img:"/IMG/projects/Sitio_web_LosOlivosNeiva.webp",alt:"Sitio_web_LosOlivosNeiva",NameProyect:"Sitio Web Los Olivos Neiva",Description:"Desarrollé el sitio web Olivos Neiva utilizando Nuxt.js y Vue.js para la interfaz del cliente. Además, creé una API con Node.js para gestionar los registros diarios de obituarios, organizados por sala."},{img:"/IMG/projects/Tienda_LosOlivosNeiva.webp",alt:"Tienda_LosOlivosNeiva",NameProyect:"E-Coomerce Los Olivos Neiva",Description:"Desarrollé tienda virtual para Olivos Neiva en WordPress utilizando Divi y WooCommerce. Implementé código personalizado para funciones específicas solicitadas por el cliente, asegurando una experiencia de compra personalizada y eficiente."},{img:"/IMG/projects/Sitio_web_Tarjeta_Digital.webp",alt:"Sitio_web_Tarjeta_Digital",NameProyect:"Sitio Web Mi tarjeta digital",Description:"Desarrollé el sitio web para un producto de la agencia Manager de Perfiles de Tarjetas Digitales. Utilicé Nuxt.js, Vue.js y Vuetify.js para crear alrededor de 20 tarjetas digitales personalizadas para los clientes, asegurando una presentación impactante y funcional."},{img:"/IMG/projects/Landing_Dr_Solares.webp",alt:"Landing_Dr_Solares",NameProyect:"Landing Page Dr Solares",Description:"Creé una landing page multilingüe para el Dr. Solares, cirujano plástico en Villavicencio. Desarrollada en WordPress con Divi, garantizando una presentación profesional y accesible en varios idiomas."},{img:"/IMG/projects/Sitio_web_LaCoop.webp",alt:"Sitio_web_LaCoop",NameProyect:"Sitio Web La Coop",Description:"Desarrollé el sitio web para la Cooperativa en Villavicencio. Utilicé WordPress y Divi para garantizar una presentación profesional y accesible, satisfaciendo las necesidades específicas de la cooperativa y sus miembros."},{img:"/IMG/projects/Sitio_web_Navigare.webp",alt:"Sitio_web_Navigare",NameProyect:"Sitio Web Navigare",Description:"Participé en un 90% del desarrollo del sitio web para Navigare SAS, una empresa de yates. Implementé un sistema de reservas con Amelia y notificaciones por WhatsApp. Utilicé WordPress y Divi para garantizar una presentación profesional y funcional."},{img:"/IMG/projects/Sitio_web_Sicol.webp",alt:"Sitio_web_Sicol",NameProyect:"Catalogo Sicol SAS",Description:"Desarrollé el 90% del catálogo de productos para Sicol SAS, empresa de suministro de EPP. Utilicé WordPress y Divi para garantizar una presentación profesional y funcional de los productos, cumpliendo con los requerimientos específicos del cliente."}],show:!1,settings:{dots:!1,infinite:!0,autoplay:!0,speed:1e3,autoplaySpeed:1e4,slidesToShow:3,slidesToScroll:1,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}}}),m=(o(436),o(84)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contenedor"},[e(d.a,{attrs:{justify:"center",align:"center"}},[e(r.a,{attrs:{cols:"11",md:"10",justify:"center",align:"center"}},[e("div",{staticClass:"contet-titles my-8",attrs:{"data-aos":"fade-right","data-aos-duration":"3000"}},[e("h2",{staticClass:"titles"},[t._v("PROYECTOS:")])]),t._v(" "),e(l.a,[e("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.projects,(function(o,r){var img=o.img,l=o.alt,d=o.NameProyect,f=o.Description;return e("div",{key:r,attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"card mx-5",attrs:{"max-width":"auto",justify:"start",align:"start"}},[e("img",{staticClass:"rounded-xl",attrs:{height:"149px",src:img,alt:l,title:l,cover:""}}),t._v(" "),e("h3",{staticClass:"ma-2 title-card"},[t._v("\n                                "+t._s(d)+"\n                            ")]),t._v(" "),e(c.a,{attrs:{color:"#500000"}}),t._v(" "),e(n.a,{staticClass:"text-card"},[t._v("\n                                "+t._s(f)+"\n                            ")])],1)])})),0)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},442:function(t,e,o){"use strict";o.r(e);var n=o(402),r=o(411),l=o(401),c=o(423),d=o.n(c),f=(o(424),o(425),{components:{VueSlickCarousel:d.a},data:function(){return{experiencia:[{img:"/IMG/experience/equipo_beta_agencia_manager.webp",alt:"equipo_beta_agencia_manage",NameCompany:"Agencia Manager SAS",cantidad:"2021 - 2024 (2 Años 7 meses) - Desarrollador web Snr",labors:"Durante mi trayectoria en Agencia Manager, me desempeñé como líder de equipo, gestionando el desarrollo y la personalización de diversos proyectos web. Planifiqué e implementé estrategias para garantizar el éxito de cada proyecto. Además, me encargué del mantenimiento del software y administré el hosting a través de SSH, asegurando un rendimiento óptimo y seguro para nuestros clientes.",tecnologias:["Nuxt.js","Vue.js","Vuetify.js","Node.js","HTML5","CSS","MySQL","PHP","APIRest","SSH","WordPress","DIVI","ELEMENTOR","Plugins","WooCommerce"]}],show:!1,settings:{dots:!0,fade:!0,infinite:!0,autoplay:!0,speed:5e3,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,initialSlide:0,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}}}),h=o(84),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{attrs:{justify:"center",align:"center"}},[e(n.a,{attrs:{cols:"12",md:"10",justify:"center",align:"center"}},[e("div",{staticClass:"contet-titles my-8",attrs:{"data-aos":"fade-right","data-aos-duration":"3000"}},[e("h2",{staticClass:"titles"},[t._v("EXPERIENCIA LABORAL")])]),t._v(" "),t._l(t.experiencia,(function(o,c){var img=o.img,d=o.alt,f=o.NameCompany,h=o.cantidad,v=o.labors,m=o.tecnologias;return e("div",{key:c},[e("div",{staticClass:"card-experience mx-5",attrs:{"max-width":"auto"}},[e(l.a,{attrs:{justify:"center",align:"center"}},[e(n.a,{attrs:{cols:"12",lg:"4",justify:"center",align:"center"}},[e("img",{staticClass:"rounded-xl mt-10 mt-lg-0",attrs:{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine",height:"200px",src:img,alt:d,title:d,cover:""}})]),t._v(" "),e(n.a,{staticClass:"ma-2",attrs:{cols:"12",lg:"7",justify:"start",align:"start"}},[e("h3",{staticClass:"title-card ma-2"},[e(r.a,{attrs:{color:"#ff9494"}},[t._v("mdi-domain")]),t._v(" "+t._s(f)+" "),e(r.a,[t._v("mdi-arrow-right")])],1),t._v(" "),e("h4",{staticClass:"text-card mb-5 ma-2",staticStyle:{"font-size":"10px"}},[t._v(t._s(h))]),t._v(" "),e("p",{staticClass:"text-card ma-2",staticStyle:{"font-weight":"lighter !important"}},[t._v("\n                                "+t._s(v)+"\n                            ")]),t._v(" "),e("h3",{staticClass:"title-card ma-2"},[e(r.a,{attrs:{color:"#ff9494"}},[t._v("mdi-laptop")]),t._v(" Tecnologias "),e(r.a,[t._v("mdi-arrow-right")])],1),t._v(" "),e("div",{staticClass:"contenedor-tecnologias mx-2",attrs:{"data-aos":"fade-down"}},t._l(m,(function(o){return e("div",{key:o,staticClass:"tecnologia font1"},[t._v(t._s(o))])})),0)])],1)],1)])}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},443:function(t,e,o){"use strict";o.r(e);var n=o(428),r=o(402),l=o(480),c=o(401),d={data:function(){return{projects:[{img:"/IMG/projects/sitio_web_Psicosalud.webp",alt:"sitio_web_Psicosalud",NameProyect:"Sitio Web / E-commerce Psicosalud",Description:"Actualmente, desarrollo el sitio web y tienda virtual para el consultorio Psicosalud de la Psicóloga Daniela Muñuz. Utilizo WordPress, WooCommerce y Divi para brindar una experiencia online completa y personalizada para sus pacientes."},{img:"/IMG/projects/posicionamiento_seo_gym_villavicencio.webp",alt:"posicionamiento_seo_gym_villavicencio",NameProyect:"Posicionamiento SEO Local a gimnasio en villavicencio",Description:"Me dedico al posicionamiento SEO local del gimnasio EFFORT FITNESS TEAM en Villavicencio, utilizando Google My Business. Logré posicionarlo consistentemente entre los tres primeros resultados en la búsqueda local de Villavicencio."},{img:"/IMG/projects/posicionamiento_seo_VMCO.webp",alt:"posicionamiento_seo_VMCO",NameProyect:"Posicionamiento SEO Local a Empresa VMCO",Description:"Lidero el posicionamiento SEO local de VMC, una consultora empresarial especializada. A través de Google My Business, hemos asegurado su presencia en los tres primeros resultados de búsqueda en Villavicencio, fortaleciendo su visibilidad y reputación en el ámbito local."}]}}},f=o(84),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e(c.a,{attrs:{justify:"center",align:"center"}},[e(r.a,{attrs:{cols:"11",md:"10",justify:"center",align:"center"}},[e("div",{staticClass:"contet-titles my-8",attrs:{"data-aos":"fade-right","data-aos-duration":"3000"}},[e("h2",{staticClass:"titles"},[t._v("FREELANCER:")])]),t._v(" "),e("div",[e(c.a,t._l(t.projects,(function(o,c){var img=o.img,d=o.alt,f=o.NameProyect,h=o.Description;return e(r.a,{key:c,attrs:{"data-aos":"fade-up",cols:"12",md:"4"}},[e("div",{staticClass:"card2 mx-5",attrs:{"max-width":"auto",justify:"start",align:"start"}},[e("div",{attrs:{justify:"center",align:"center"}},[e("img",{staticClass:"rounded-xl",attrs:{height:"141px",src:img,alt:d,title:d,cover:""}})]),t._v(" "),e("h3",{staticClass:"ma-2 title-card"},[t._v("\n                                "+t._s(f)+"\n                            ")]),t._v(" "),e(l.a,{attrs:{color:"#500000"}}),t._v(" "),e(n.a,{staticClass:"text-card"},[t._v("\n                                "+t._s(h)+"\n                            ")])],1)])})),1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports},444:function(t,e,o){"use strict";o.r(e);var n=o(396),r=o(402),l=o(411),c=o(427),d=o(401),f=o(84),component=Object(f.a)({},(function(){var t=this,e=t._self._c;return e("div",{attrs:{align:"center",justify:"center"}},[e(d.a,{attrs:{align:"center",justify:"center"}},[e(r.a,{staticClass:"contenedor",attrs:{cols:"11",align:"center",justify:"center"}},[e(d.a,{attrs:{align:"center",justify:"center"}},[e(r.a,{attrs:{"data-aos":"fade-right","data-aos-duration":"3000",align:"start",justify:"center",cols:"10",md:"5",lg:"5",sm:"10"}},[e("h2",{staticClass:"font1 mt-8 mt-lg-0"},[t._v("\n                        Hola! Soy \n                        "),e("br"),e("span",{staticClass:"MyName",staticStyle:{color:"white"}},[t._v(" Alejandro ")]),e("span",{staticClass:"MyName"},[t._v(" Sastoque ")])]),t._v(" "),e("h1",{staticClass:"font1",staticStyle:{"font-size":"18px","font-weight":"normal"}},[t._v("Desarollodor web Full-Stack y estudiante de ingenieria de sofware")]),t._v(" "),e("div",{staticClass:"social-buttons"},[e(n.a,{staticClass:"social-button",attrs:{color:"red",fab:"",small:"",href:"https://api.whatsapp.com/send?phone=573142484466"}},[e(l.a,{attrs:{dark:""}},[t._v("mdi-whatsapp")])],1),t._v(" "),e(n.a,{staticClass:"social-button",attrs:{color:"red",fab:"",small:"",href:"https://www.linkedin.com/in/jose-alejandro-sastoque-agudelo-11462abb/"}},[e(l.a,{attrs:{dark:""}},[t._v("mdi-linkedin")])],1)],1)]),t._v(" "),e(r.a,{staticClass:"mb-10",attrs:{align:"center",justify:"center",cols:"10",md:"5",lg:"5",sm:"10"}},[e("div",{staticClass:"mt-10"},[e(c.a,{staticClass:"foto fotoAlejo mt-10",attrs:{"data-aos":"fade-up-left","data-aos-duration":"4000",width:"450",src:"/IMG/Desarrollador_web_fullstack_Alejandro_Sastoque.webp"}})],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,o){"use strict";o.r(e);var n=o(84),component=Object(n.a)({},(function(){return(0,this._self._c)("h2",[this._v("CTa")])}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,o){"use strict";o.r(e);var n=o(396),r=o(402),l=o(427),c=o(401),d=o(84),component=Object(d.a)({},(function(){var t=this,e=t._self._c;return e("div",{attrs:{align:"center",justify:"center"}},[e(c.a,{attrs:{align:"center",justify:"center"}},[e(r.a,{staticClass:"contenedor",attrs:{cols:"11",align:"center",justify:"center"}},[e(c.a,{attrs:{align:"center",justify:"center"}},[e(r.a,{attrs:{align:"center",justify:"center",cols:"10",md:"5",lg:"5",sm:"10"}},[e(l.a,{staticStyle:{"mask-image":"linear-gradient(black 80%, transparent)"},attrs:{width:"450",src:"/IMG/Desarrollador_web_Alejandro_Sastouqe.webp"}})],1),t._v(" "),e(r.a,{attrs:{align:"start",justify:"center",cols:"10",md:"5",lg:"5",sm:"10"}},[e("h2",[e("span",{staticClass:"font1"},[t._v("\n                            SOBRE MI\n                        ")]),e("br"),t._v(" "),e("span",{staticClass:"MyName"},[t._v("DESARROLADOR WEB FULLSTACK")])]),t._v(" "),e("p",{attrs:{align:"center",justify:"center"}},[e("span",{staticClass:"font1",staticStyle:{"font-size":"20px"}},[t._v('"Si lo puedes imaginar, lo puedes programar"')]),t._v(" "),e("span",{staticStyle:{"font-style":"italic","font-size":"12px"}},[e("br"),t._v("-Alejandro Taboada-")])]),t._v(" "),e(c.a,[e(r.a,{attrs:{cols:"12",md:"6"}},[e("div",[e("div",{staticClass:"font1",staticStyle:{color:"#ff0000","font-size":"14px","font-weight":"900"}},[t._v(" NOMBRE ")]),t._v(" "),e("div",{staticClass:"font1"},[t._v("\n                                    Jose Alejandro Sastoque Agudelo\n                                ")])]),t._v(" "),e("div",[e("div",{staticClass:"font1",staticStyle:{color:"#ff0000","font-size":"14px","font-weight":"900"}},[t._v(" CORREO ELECTRÓNICO ")]),t._v(" "),e("div",{staticClass:"font1"},[t._v("\n                                    sastoquejose1602@gmail.com\n                                ")])]),t._v(" "),e("div",[e("div",{staticClass:"font1",staticStyle:{color:"#ff0000","font-size":"14px","font-weight":"900"}},[t._v(" TELÉFONO ")]),t._v(" "),e("div",{staticClass:"font1"},[t._v("\n                                    +57 314-248-4466\n                                ")])])]),t._v(" "),e(r.a,{attrs:{cols:"12",md:"6"}},[e("div",[e("div",{staticClass:"font1",staticStyle:{color:"#ff0000","font-size":"14px","font-weight":"900"}},[t._v(" EDAD ")]),t._v(" "),e("div",{staticClass:"font1"},[t._v("\n                                    24 Años\n                                ")])]),t._v(" "),e("div",[e("div",{staticClass:"font1",staticStyle:{color:"#ff0000","font-size":"14px","font-weight":"900"}},[t._v(" EDUCACIÓN ")]),t._v(" "),e("div",{staticClass:"font1"},[t._v("\n                                    Tecnologo en Desarrollo De Software\n                                ")])]),t._v(" "),e("div",[e("div",{staticClass:"font1",staticStyle:{color:"#ff0000","font-size":"14px","font-weight":"900"}},[t._v(" HOBBIES")]),t._v(" "),e("div",{staticClass:"font1"},[t._v("\n                                    Entrenar en el gimnasio, salir a conocer nuevos destinos en moto, aprender cada día más de lo que sé\n                                ")])])])],1),t._v(" "),e(n.a,{staticClass:"font1 mt-5",staticStyle:{"background-color":"#ff0000"},attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",block:"",href:"/hoja-de-vida-alejandro-sastoque.pdf"}},[t._v("Descargar CV")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},447:function(t,e,o){"use strict";o.r(e);var n=o(402),r=o(427),l=o(401),c=o(84),component=Object(c.a)({},(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e(l.a,{attrs:{align:"center",justify:"center"}},[e(n.a,{attrs:{align:"center",justify:"center"}},[e("a",{attrs:{href:"https://www.credly.com/badges/79d5bd94-b20a-4e1a-86b4-d0c665bcf4d6/public_url"}},[e(r.a,{attrs:{width:"100",src:"/IMG/Certificates/microsoft-certified-azure-fundamentals.webp",alt:""}})],1)]),t._v(" "),e(n.a,{attrs:{align:"center",justify:"center"}},[e("a",{attrs:{href:"https://www.credly.com/badges/2812e776-351b-492d-818d-ea66fbecb291/public_url"}},[e(r.a,{attrs:{width:"100",src:"/IMG/Certificates/scrum-foundation-professional-certification-sfpc.webp",alt:""}})],1)]),t._v(" "),e(n.a,{attrs:{align:"center",justify:"center"}},[e("a",{attrs:{href:"https://www.credly.com/badges/93315f0e-cd44-4b87-8db7-640168720660/public_url"}},[e(r.a,{attrs:{width:"100",src:"/IMG/Certificates/lifelong-learning.webp",alt:""}})],1)])],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"contet-titles my-8",attrs:{align:"center",justify:"center","data-aos":"fade-right","data-aos-duration":"3000"}},[t("h2",{staticClass:"titles"},[this._v("CERTIFICADOS:")])])}],!1,null,null,null);e.default=component.exports},483:function(t,e,o){"use strict";o.r(e);var n=o(426),r=o(444),l=o(440),c=o(441),d=o(442),f=o(445),h=o(446),v=o(443),m=o(447),_=o(439),y={components:{TheHead:n.default,Welcome:r.default,Knowledge:l.default,Projects:c.default,WorkExperience:d.default,CTA:f.default,Contact:h.default,Certificates:m.default,Freelancer:v.default,TheFooter:_.default}},w=o(84),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("TheHead"),t._v(" "),e("Welcome"),t._v(" "),e("Certificates"),t._v(" "),e("Knowledge",{attrs:{id:"Knowledge"}}),t._v(" "),e("Projects",{attrs:{id:"Projects"}}),t._v(" "),e("WorkExperience",{attrs:{id:"WorkExperience"}}),t._v(" "),e("Contact",{staticClass:"mt-10 mb-10",attrs:{id:"Contact"}}),t._v(" "),e("Freelancer",{attrs:{id:"Freelancer"}}),t._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheFooter:o(439).default})}}]);