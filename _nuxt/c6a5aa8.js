(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{373:function(t,e,n){"use strict";var o=n(2),r=n(165);o({target:"String",proto:!0,forced:n(166)("small")},{small:function(){return r(this,"small","","")}})},378:function(t,e,n){"use strict";n(373);var o=n(0);e.a=o.a.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},379:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("a8b3b032",content,!0,{sourceMap:!1})},380:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);transition:opacity .2s cubic-bezier(.4,0,.6,1);width:100%}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),o.locals={},t.exports=o},403:function(t,e,n){"use strict";var o,r=n(6),l=(n(23),n(26),n(247),n(76),n(49),n(90),n(30),n(31),n(22),n(7),n(27),n(78),n(91),n(25),n(373),n(379),n(172)),c=n(164),d=n(378),h=n(113),m=n(4),v=n(0),f=n(59);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));var S=Object(f.a)(l.a,c.a,d.a,h.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(m.p)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(m.m)(t).find((function(e){return t[e]}));return e&&o[e]||Object(m.d)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:y({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=y(y({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=y(y({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),l=r<=-1;l?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!l;var c=this.getSize();return c&&(data.style={fontSize:c}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=v.a.extend({name:"v-icon",$_wrapperFor:S,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(S,data,o?[o]:n)}})},421:function(t,e,n){"use strict";n.r(e);var o=n(450),r=n(403),l=n(449),c=n(389),d=n.n(c),h=(n(390),n(391),{components:{VueSlickCarousel:d.a},data:function(){return{experiencia:[{img:"/IMG/experience/equipo_beta_agencia_manager.webp",alt:"equipo_beta_agencia_manage",NameCompany:"Agencia Manager SAS",labors:"Durante mi trayectoria en Agencia Manager, me desempeñé como líder de equipo, gestionando el desarrollo y la personalización de diversos proyectos web. Planifiqué e implementé estrategias para garantizar el éxito de cada proyecto. Además, me encargué del mantenimiento del software y administré el hosting a través de SSH, asegurando un rendimiento óptimo y seguro para nuestros clientes.",tecnologias:["Nuxt.js","Vue.js","Vuetify.js","Node.js","HTML5","CSS","MySQL","PHP","APIRest","SSH","WordPress","DIVI","ELEMENTOR","Plugins","WooCommerce"]}],show:!1,settings:{dots:!0,fade:!0,infinite:!0,autoplay:!0,speed:5e3,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,initialSlide:0,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}}}),m=n(75),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{attrs:{justify:"center",align:"center"}},[e(o.a,{attrs:{cols:"12",md:"10",justify:"center",align:"center"}},[e("div",{staticClass:"contet-titles mb-10",attrs:{"data-aos":"fade-right","data-aos-duration":"3000"}},[e("h2",{staticClass:"titles"},[t._v("EXPERIENCIA LABORAL")])]),t._v(" "),e("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.experiencia,(function(n,c){var img=n.img,d=n.alt,h=n.NameCompany,m=n.labors,v=n.tecnologias;return e("div",{key:c},[e("div",{staticClass:"card-experience mx-5",attrs:{"max-width":"auto"}},[e(l.a,{attrs:{justify:"center",align:"center"}},[e(o.a,{attrs:{cols:"12",lg:"4",justify:"center",align:"center"}},[e("img",{staticClass:"rounded-xl mt-10 mt-lg-0",attrs:{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine",height:"200px",src:img,alt:d,title:d,cover:""}})]),t._v(" "),e(o.a,{staticClass:"ma-2",attrs:{cols:"12",lg:"7",justify:"start",align:"start"}},[e("h3",{staticClass:"title-card ma-2"},[e(r.a,{attrs:{color:"#ff9494"}},[t._v("mdi-domain")]),t._v(" "+t._s(h)+" "),e(r.a,[t._v("mdi-arrow-right")])],1),t._v(" "),e("h4",{staticClass:"text-card mb-5 ma-2",staticStyle:{"font-size":"10px"}},[t._v("2021 - 2024 (2 Años 7 meses)")]),t._v(" "),e("p",{staticClass:"text-card ma-2",staticStyle:{"font-weight":"lighter !important"}},[t._v("\n                                "+t._s(m)+"\n                            ")]),t._v(" "),e("h3",{staticClass:"title-card ma-2"},[e(r.a,{attrs:{color:"#ff9494"}},[t._v("mdi-laptop")]),t._v(" Tecnologias "),e(r.a,[t._v("mdi-arrow-right")])],1),t._v(" "),e("div",{staticClass:"contenedor-tecnologias mx-2",attrs:{"data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"1500"}},t._l(v,(function(n){return e("div",{key:n,staticClass:"tecnologia font1"},[t._v(t._s(n))])})),0)])],1)],1)])})),0)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);