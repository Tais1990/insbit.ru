!function(t){function e(e){for(var o,c,a=e[0],u=e[1],l=e[2],s=0,p=[];s<a.length;s++)c=a[s],r[c]&&p.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(f&&f(e);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={3:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var f=u;i.push([64,0]),n()}([,,,,function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=n(1),c=n.n(i);n(13);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,f(e).call(this))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(t,e){var n=this.props,o=n.code,i=n.font,c=n.className,a="icon";i&&(a+=" icon_font_".concat(i)),c&&(a+=" icon_parent_".concat(c));var u={};return""==o&&"icomoon"==i&&(u={fontSize:"70px",lineHeight:".8"}),""==o&&"icomoon"==i&&(u={fontSize:"60px",lineHeight:"1"}),r.a.createElement("span",{className:a,style:u},o)}}])&&u(n.prototype,o),i&&u(n,i),e}();p.propTypes={code:c.a.string,font:c.a.string,className:c.a.string},e.a=p},function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=n(1),c=n.n(i);n(17);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,f(e).call(this))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(t,e){var n=this.props,o=n.title,i=n.link,c=n.type,a=n.color,u="button";return c&&(u+=" button_type_".concat(c)),a&&(u+=" button_color_".concat(a)),r.a.createElement("a",{href:i,className:u},o)}}])&&u(n.prototype,o),i&&u(n,i),e}();p.propTypes={title:c.a.string,link:c.a.string,type:c.a.oneOf(["link","button","button"]),color:c.a.oneOf(["dark","light"])},e.a=p},function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=n(1),c=n.n(i);n(11);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,f(e).call(this))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(t,e){var n=this.props,o=n.title,i=n.children,c=n.color,a="section-block";return c&&(a+=" section-block_color_".concat(c)),r.a.createElement("section",{className:a},o&&r.a.createElement("h1",{className:"section-block__title"},o," "),i)}}])&&u(n.prototype,o),i&&u(n,i),e}();p.propTypes={title:c.a.string,children:c.a.any,color:c.a.oneOf(["grey"])},e.a=p},function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=n(1),c=n.n(i),a=(n(21),n(4));n(23);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=[{codeIcon:"f39e",fontIcon:"faBrands",link:"http://www.facebook.com/webucator"},{codeIcon:"f0d5",fontIcon:"faBrands",link:"https://plus.google.com/+Webucator"},{codeIcon:"f0e1",fontIcon:"faBrands",link:"https://www.linkedin.com/companies/webucator"},{codeIcon:"f099",fontIcon:"faBrands",link:"https://twitter.com/webucator"},{codeIcon:"f0e0",fontIcon:"faFree",link:"mailto:sales@webucator.com"}],b=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,s(e).call(this))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(t,e){return r.a.createElement("div",{className:"social-icons"},y.map(function(t){return r.a.createElement("a",{href:t.link,className:"social-icons__icon",key:t.codeIcon},r.a.createElement(a.a,{code:String.fromCharCode(parseInt(t.codeIcon,16)),font:t.fontIcon,className:"social-icons"}))}))}}])&&l(n.prototype,o),i&&l(n,i),e}();n(25);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),t}function _(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(){return h(this,e),_(this,g(e).call(this))}return O(e,r.a.Component),d(e,[{key:"render",value:function(t,e){var n=this.props.params;return r.a.createElement("div",{className:"info__column"},r.a.createElement("div",{className:"info__column__title"},n.title),n.records.map(function(t){return r.a.createElement("a",{key:t.text,href:t.link,className:"info__column__link"},t.text)}))}}]),e}();j.propTypes={params:c.a.shape({title:c.a.string,records:c.a.arrayOf(c.a.shape({text:c.a.string,link:c.a.string}))})};var E=function(t){function e(){return h(this,e),_(this,g(e).call(this))}return O(e,r.a.Component),d(e,[{key:"render",value:function(t,e){var n=this.props.data;return r.a.createElement("div",{className:"info"},n.map(function(t){return r.a.createElement(j,{params:t,key:t.title})}))}}]),e}();E.propTypes={data:c.a.arrayOf(c.a.shape({title:c.a.string,records:c.a.arrayOf(c.a.shape({text:c.a.string,link:c.a.string}))})).isRequired};var S=E;function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=[{title:"Варианты обучения:",records:[{text:"Обучение в нашем классе",link:"/"},{text:"Индивидуальные занятия",link:"/"},{text:"Корпоративные курсы",link:"/"}]},{title:"Сведения об АНО ДПО «ИнБИТ»:",records:[{text:"О нас",link:"/"},{text:"Отзывы",link:"/"},{text:"Политика конфиденциальности",link:"/"},{text:"Контакты + карта",link:"/"},{text:"Политика отмены",link:"/"},{text:"Все спец страницы",link:"/"}]},{title:"Ресурсы:",records:[{text:"Подписаться на новостную рассылку",link:"/"},{text:"Блог «ИнБИТ» (статьи с возможностью оценки L/Dl и комментариями)",link:"/"}]},{title:"Каталог курсов:",records:[{text:"Полный каталог курсов",link:"/"},{text:"Акции и скидки",link:"/"}]}],C=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,T(e).call(this))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(t,e){return r.a.createElement("footer",{className:"footer"},r.a.createElement(S,{data:N}),r.a.createElement(b,null),r.a.createElement("div",{className:"footer__copyright"},"© 2004-2019 Webucator, Inc. All Rights Reserved."))}}])&&P(n.prototype,o),i&&P(n,i),e}();e.a=C},function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=n(1),c=n.n(i),a=(n(15),n(5));n(19);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,s(e).call(this))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(t,e){var n=this.props,o=n.src,i=n.link,c=n.width,a=n.widthType,u=n.height,l=n.heightType,f={backgroundImage:"url(".concat(o,")")};return c&&(f.width=c.toString()+a),u&&(f.height=u.toString()+l),i?r.a.createElement("a",{href:i,className:"img"},r.a.createElement("div",{className:"img",style:f})):r.a.createElement("div",{className:"img",style:f})}}])&&l(n.prototype,o),i&&l(n,i),e}();y.propTypes={src:c.a.string,link:c.a.string,width:c.a.number,widthType:c.a.oneOf(["%","px"]),height:c.a.number,heightType:c.a.oneOf(["%","px"])},y.defaultProps={widthType:"px",heightType:"px"};var b=y;function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,d(e).call(this))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(t,e){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header header__left"}),r.a.createElement("div",{className:"header header__center"},r.a.createElement(b,{src:"/static/img/webucator.png",width:211,height:52,link:"/"})),r.a.createElement("div",{className:"header header__right contacts"},r.a.createElement("div",{className:"contacts contacts__tel"},"+7 999 565 55 75"),r.a.createElement(a.a,{title:"НАШИ КОНТАКТЫ",type:"button",color:"light",link:"/"})))),r.a.createElement("div",{className:"header-expansion"}))}}])&&h(n.prototype,o),i&&h(n,i),e}();e.a=g},function(t,e,n){var o=n(10);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(14);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(16);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(18);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(20);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(22);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(24);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(26);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(28);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var o=n(60);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);n(9),n(27);var o=n(0),r=n.n(o),i=n(3),c=n.n(i),a=n(8),u=n(7),l=n(6),f=n(1),s=n.n(f);n(59);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,m(e).call(this))}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(t,e){var n=this.props.courses;return console.log(n),r.a.createElement("div",{className:"course-all"},n.map(function(t){return r.a.createElement("a",{key:t.code,className:"course-all__record",href:"/1/course/"+t.code},t.name)}))}}])&&y(n.prototype,o),i&&y(n,i),e}();v.propTypes={courses:s.a.any};var d=v;c.a.render(r.a.createElement("div",null,"Пока не произошла заггрузка данных"),document.getElementById("root")),fetch("".concat("","/api/getAll"),{method:"GET"}).then(function(t){return t.json()}).then(function(t){console.log("Request successful",t),null!=t&&c.a.render(r.a.createElement("div",null,r.a.createElement(a.a,null),r.a.createElement(l.a,{title:"Информация о всех курсах"},r.a.createElement("div",{className:"course-wrapper_broad"},r.a.createElement(d,{courses:t}))),r.a.createElement(u.a,null)),document.getElementById("root"))}).catch(function(t){console.log("Request failed",t)})}]);