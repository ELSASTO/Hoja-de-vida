(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{416:function(t,e,r){"use strict";var n=r(1),o=r(417),c=r(47),l=r(58),d=r(77),f=r(144);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=l(e),n=f(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:d(t)),n}})},417:function(t,e,r){"use strict";var n=r(97),o=r(58),c=r(183),l=r(35),d=function(t,e,source,r,f,v,m,h){for(var element,w,_=f,C=0,k=!!m&&l(m,h);C<r;)C in source&&(element=k?k(source[C],C,e):source[C],v>0&&n(element)?(w=o(element),_=d(t,e,element,w,_,v-1)-1):(c(_+1),t[_]=element),_++),C++;return _};t.exports=d},418:function(t,e,r){"use strict";r(121)("flat")},426:function(t,e,r){"use strict";r.r(e);var n=r(479),o=r(482),c=r(396),l=r(401),d=r(175),f=r(448),v={data:function(){return{drawer:!1,menuItems:[{item:"Conocimientos",href:"#Knowledge"},{item:"Proyectos",href:"#Projects"},{item:"Experiencia Laboral",href:"#WorkExperience"},{item:"Contacto",href:"#Contact"},{item:"Freelancer",href:"#Freelancer"}]}}},m=r(84),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"stick"},[e("div",{staticClass:"mb-5 py-5 header",attrs:{fluid:""}},[e(l.a,{attrs:{justify:"space-around"}},[e(f.a,{staticClass:"mt-2 mt-md-0 mt-lg-0 MyName"},[t._v("EL SASTO")]),t._v(" "),e("div",{staticClass:"d-none d-xl-block d-lg-block"},t._l(t.menuItems,(function(r,n){var o=r.item,l=r.href;return e(c.a,{key:n,attrs:{text:"",href:l}},[t._v(t._s(o))])})),1),t._v(" "),e("div",{staticClass:"d-lg-none d-xl-none"},[e(n.a,{attrs:{color:"#ff0000"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e(o.a,{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(d.a,{staticClass:"text-center",attrs:{height:"600"}},[e("div",{staticClass:"pt-8"},[e("h2",{staticClass:"titles pb-8"},[t._v("EL SASTO")]),t._v(" "),t._l(t.menuItems,(function(r,n){var o=r.item,l=r.href;return e("div",{key:n},[e(c.a,{attrs:{text:"",href:l},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v(" "+t._s(o))]),t._v(" "),e("br")],1)}))],2)])],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(426).default})}}]);