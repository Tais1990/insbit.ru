!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],s=0,p=[];s<c.length;s++)i=c[s],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;a.push([67,0]),n()}([,,,,function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a);n(13);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){var n=this.props,r=n.title,a=n.children,i=n.color,c=n.width,l=n.textAlign,u="section-block";i&&(u+=" section-block_color_".concat(i)),c&&(u+=" section-block_width_".concat(c)),l&&(u+=" section-block_textAlign_".concat(l));var f=u+" section-block__title";return o.a.createElement("section",{className:u},r&&o.a.createElement("h1",{className:f},r," "),a)}}])&&l(n.prototype,r),a&&l(n,a),t}();p.propTypes={title:i.a.string,children:i.a.any,color:i.a.oneOf(["grey"]),width:i.a.oneOf(["narrow-width"]),textAlign:i.a.oneOf(["left"])},t.a=p},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a);n(15);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){var n=this.props,r=n.code,a=n.font,i=n.className,c="icon";a&&(c+=" icon_font_".concat(a)),i&&(c+=" icon_parent_".concat(i));var l={};return""==r&&"icomoon"==a&&(l={fontSize:"70px",lineHeight:".8"}),""==r&&"icomoon"==a&&(l={fontSize:"60px",lineHeight:"1"}),o.a.createElement("span",{className:c,style:l},r)}}])&&l(n.prototype,r),a&&l(n,a),t}();p.propTypes={code:i.a.string,font:i.a.string,className:i.a.string},t.a=p},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a);n(19);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){var n=this.props,r=n.title,a=n.link,i=n.type,c=n.color,l="button";return i&&(l+=" button_type_".concat(i)),c&&(l+=" button_color_".concat(c)),o.a.createElement("a",{href:a,className:l},r)}}])&&l(n.prototype,r),a&&l(n,a),t}();p.propTypes={title:i.a.string,link:i.a.string,type:i.a.oneOf(["link","button","button"]),color:i.a.oneOf(["dark","light"])},t.a=p},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a);n(40);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){var n=this.props,r=n.title,a=n.data,i=n.type,c=n.beforeData;return"paragraph"==i?o.a.createElement("div",{className:"item"},r&&o.a.createElement("div",{className:"item__title"}," ",r," "),o.a.createElement("div",{className:"item__data"}," ",a," ")):"list"==i?o.a.createElement("div",{className:"item"},r&&o.a.createElement("div",{className:"item__title"}," ",r," "),o.a.createElement("div",{className:"item__data"},c&&o.a.createElement("div",null,c),o.a.createElement("ul",null,a.map(function(e){return o.a.createElement("li",{key:e},e)})))):"html"==i?o.a.createElement("div",{className:"item item_type_html"},r&&o.a.createElement("div",{className:"item__title"}," ",r," "),o.a.createElement("div",{className:"item__data",dangerouslySetInnerHTML:{__html:a}})):void 0}}])&&l(n.prototype,r),a&&l(n,a),t}();p.propTypes={title:i.a.string,data:i.a.any,type:i.a.oneOf(["paragraph","list","html"]),beforeData:i.a.string},p.defaultProps={type:"paragraph"},t.a=p},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=(n(23),n(5));n(25);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=[{codeIcon:"f39e",fontIcon:"faBrands",link:"http://www.facebook.com/webucator"},{codeIcon:"f0d5",fontIcon:"faBrands",link:"https://plus.google.com/+Webucator"},{codeIcon:"f0e1",fontIcon:"faBrands",link:"https://www.linkedin.com/companies/webucator"},{codeIcon:"f099",fontIcon:"faBrands",link:"https://twitter.com/webucator"},{codeIcon:"f0e0",fontIcon:"faFree",link:"mailto:sales@webucator.com"}],m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,s(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){return o.a.createElement("div",{className:"social-icons"},y.map(function(e){return o.a.createElement("a",{href:e.link,className:"social-icons__icon",key:e.codeIcon},o.a.createElement(c.a,{code:String.fromCharCode(parseInt(e.codeIcon,16)),font:e.fontIcon,className:"social-icons"}))}))}}])&&u(n.prototype,r),a&&u(n,a),t}();n(27);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function _(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return h(this,t),_(this,E(t).call(this))}return g(t,o.a.Component),v(t,[{key:"render",value:function(e,t){var n=this.props.params;return o.a.createElement("div",{className:"info__column"},o.a.createElement("div",{className:"info__column__title"},n.title),n.records.map(function(e){return o.a.createElement("a",{key:e.text,href:e.link,className:"info__column__link"},e.text)}))}}]),t}();w.propTypes={params:i.a.shape({title:i.a.string,records:i.a.arrayOf(i.a.shape({text:i.a.string,link:i.a.string}))})};var j=function(e){function t(){return h(this,t),_(this,E(t).call(this))}return g(t,o.a.Component),v(t,[{key:"render",value:function(e,t){var n=this.props.data;return o.a.createElement("div",{className:"info"},n.map(function(e){return o.a.createElement(w,{params:e,key:e.title})}))}}]),t}();j.propTypes={data:i.a.arrayOf(i.a.shape({title:i.a.string,records:i.a.arrayOf(i.a.shape({text:i.a.string,link:i.a.string}))})).isRequired};var S=j;function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=[{title:"Варианты обучения:",records:[{text:"Обучение в нашем классе",link:"/"},{text:"Индивидуальные занятия",link:"/"},{text:"Корпоративные курсы",link:"/"}]},{title:"Сведения об АНО ДПО «ИнБИТ»:",records:[{text:"О нас",link:"/"},{text:"Политика конфиденциальности",link:"/"},{text:"Контакты",link:"/"},{text:"Политика отмены",link:"/"}]},{title:"Каталог курсов:",records:[{text:"Полный каталог курсов",link:"/"},{text:"Акции и скидки",link:"/"}]}],C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,T(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){return o.a.createElement("footer",{className:"footer"},o.a.createElement(S,{data:I}),o.a.createElement(m,null),o.a.createElement("div",{className:"footer__copyright"},"© 2004-2019 Webucator, Inc. All Rights Reserved."))}}])&&k(n.prototype,r),a&&k(n,a),t}();t.a=C},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=(n(17),n(6));n(21);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,s(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){var n=this.props,r=n.src,a=n.link,i=n.width,c=n.widthType,l=n.height,u=n.heightType,f={backgroundImage:"url(".concat(r,")")};return i&&(f.width=i.toString()+c),l&&(f.height=l.toString()+u),a?o.a.createElement("a",{href:a,className:"img"},o.a.createElement("div",{className:"img",style:f})):o.a.createElement("div",{className:"img",style:f})}}])&&u(n.prototype,r),a&&u(n,a),t}();y.propTypes={src:i.a.string,link:i.a.string,width:i.a.number,widthType:i.a.oneOf(["%","px"]),height:i.a.number,heightType:i.a.oneOf(["%","px"])},y.defaultProps={widthType:"px",heightType:"px"};var m=y;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,v(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"header header__left"}),o.a.createElement("div",{className:"header header__center"},o.a.createElement(m,{src:"/static/img/webucator.png",width:211,height:52,link:"/"})),o.a.createElement("div",{className:"header header__right contacts"},o.a.createElement("div",{className:"contacts contacts__tel"},"+7 999 565 55 75"),o.a.createElement(c.a,{title:"НАШИ КОНТАКТЫ",type:"button",color:"light",link:"/"})))),o.a.createElement("div",{className:"header-expansion"}))}}])&&h(n.prototype,r),a&&h(n,a),t}();t.a=E},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a);n(30);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){var n=this.props.children;return o.a.createElement("div",{className:"text-block"},n)}}])&&l(n.prototype,r),a&&l(n,a),t}();p.propTypes={children:i.a.any},t.a=p},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r=n(18);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r=n(22);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r=n(28);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){var n=this.props.text;return o.a.createElement("h2",null,n)}}])&&l(n.prototype,r),a&&l(n,a),t}();p.propTypes={text:i.a.string},t.a=p},function(e,t,n){var r=n(31);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,,,,,,,,function(e,t,n){var r=n(41);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);n(11);var r=n(0),o=n.n(r),a=n(3),i=n.n(a),c=n(1),l=n.n(c),u=(n(62),n(7),n(4)),f=n(10),s=n(29);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,b(t).call(this))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(e,t){var n=this.props.type;return"about"==n?o.a.createElement("div",{className:"about-us about-us__about"},o.a.createElement(u.a,{title:"О нас",width:"narrow-width"}),o.a.createElement(u.a,{title:"Приглашаем на обучение в Институт бизнеса и информационных технологий!",color:"grey"},o.a.createElement(f.a,null,"Вашему вниманию предлагаем обучение по различным направлениям, более 500 курсов как для администраторов и разработчиков, так и для обычных пользователей: компьютерные курсы, курсы по Linux (а также его разновидностям) и свободному ПО, курсы 3ds max, курсы по различным продуктам Microsoft (Windows, Windows Server, Azure, Microsoft 365 и др.), занятия по основам программирования и многое другое. В нашем учебном центре Вы можете пройти компьютерные подготовительные курсы обучения и курсы повышения квалификации в очных группах (утром, днем, вечером, по выходным) и индивидуально."),o.a.createElement("br",null),o.a.createElement(f.a,null,"В Институте бизнеса и информационных технологий работает молодая, современная и высокотехнологичная команда с большим опытом работы в сфере сертифицированного обучения. Также мы сотрудничаем с преподавателями различных кафедр Уральского Федерального Университета им. Б.Н. Ельцина."),o.a.createElement("br",null),o.a.createElement(f.a,null,"Институт бизнеса и информационных технологий является партнеров Microsoft, Astra Linux, Postgres Professional, Cisco и проводит авторизованное обучение по курсам данных вендеров."),o.a.createElement("br",null),o.a.createElement(f.a,null,"Обучение Вы можете пройти как в классах г. Екатеринбурга по адресу Ленина, 41, так и в Москве."),o.a.createElement("br",null),o.a.createElement(s.a,{text:"Вы можете связаться с нами по телефону +7 999 565 55 75 или по почте info@insbit.ru"}))):"privacy-policy"==n?o.a.createElement("div",{className:"about-us about-us__privacy-policy"},o.a.createElement(u.a,{title:"Политика конфиденциальности",width:"narrow-width"}),o.a.createElement(u.a,{color:"grey"},o.a.createElement("div",{className:"container container__privacy-policy"},o.a.createElement("h3",null,"Какую информацию мы собираем?"),o.a.createElement("p",null,"Мы собираем информацию о Вас, когда Вы регистрируетесь на нашем сайте, размещаете заказ или заполняете форму. При заказе или регистрации на нашем сайте, при необходимости, Вас могут попросить ввести: имя, адрес электронной почты, почтовый адрес, номер телефона или информацию о кредитной карте. Впрочем, Вы можете посетить наш сайт анонимно."),o.a.createElement("h3",null,"Для чего мы используем вашу информацию?"),o.a.createElement("p",null," Любая информация, которую мы получаем от Вас, может быть использована одним из следующих способов:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Чтобы персонализировать ваш опыт (ваша информация помогает нам лучше реагировать на ваши индивидуальные потребности)"),o.a.createElement("li",null,"Чтобы улучшить наш веб-сайт (мы постоянно стремимся улучшить наши предложения на основе информации и отзывов, которые мы получаем от вас)"),o.a.createElement("li",null,"Улучшение обслуживания клиентов (ваша информация помогает нам более эффективно реагировать на ваши запросы обслуживания клиентов и потребности в поддержке)"),o.a.createElement("li",null,"Обработка транзакций (Ваша информация, государственная или частная, не будет продаваться, обмениваться, передаваться или передаваться какой-либо другой компании по любой причине, без вашего согласия, кроме как для явной цели доставки запрошенного продукта или услуги, запрошенной"),o.a.createElement("li",null,"Для администрирования конкурса, продвижения, опроса или других функций сайта"),o.a.createElement("li",null,"Отправлять периодические электронные письма",o.a.createElement("ul",null,o.a.createElement("li",null,"Адрес электронной почты, который вы предоставляете для обработки заказа, будет использоваться только для отправки вам информации и обновлений, касающихся вашего заказа."),o.a.createElement("li",null,"Если вы решите подписаться на нашу рассылку, вы получите электронные письма, которые могут содержать новости компании, обновления, информацию о продуктах или услугах и т. Д."),o.a.createElement("li",null,"Примечание. Если в любое время вы хотите отказаться от подписки на получение будущих электронных писем, мы приводим подробные инструкции по отмене подписки внизу каждого электронного письма.")))),o.a.createElement("h3",null,"Как мы защищаем вашу информацию?"),o.a.createElement("p",null,"Мы применяем различные меры безопасности для обеспечения безопасности Вашей личной информации при размещении заказа."),o.a.createElement("h3",null,"Разглашаем ли мы какую-либо информацию сторонним лицам?"),o.a.createElement("p",null,"Мы не продаем, не обмениваем или иным образом не передаем сторонним лицам Вашу личную информацию. Это не относится к доверенным третьим сторонам, которые помогают нам в управлении нашим веб-сайтом, ведении нашего бизнеса или обслуживании Вас, если эти стороны соглашаются сохранять конфиденциальность этой информации. Мы также можем раскрывать Вашу информацию, когда мы считаем, что ее публикация соответствует законодательству или защищает наши или иные права, собственность или безопасность. Однако не идентифицирующая личность информация о посетителях может быть предоставлена другим сторонам для маркетинга, рекламы или иного использования."),o.a.createElement("h3",null,"Только политика конфиденциальности онлайн"),o.a.createElement("p",null,"Настоящая политика конфиденциальности онлайн применяется только к информации, собранной через наш сайт, а не к информации, собранной в автономном режиме."),o.a.createElement("h3",null,"Ваше согласие"),o.a.createElement("p",null,"Используя наш сайт, Вы соглашаетесь с нашей политикой конфиденциальности."),o.a.createElement("h3",null,"Изменения в нашей Политике конфиденциальности"),o.a.createElement("p",null,"Если мы решим изменить нашу политику конфиденциальности, мы опубликуем эти изменения на этой странице."),o.a.createElement("h3",null,"Связаться с нами"),o.a.createElement("p",null,"Если есть какие-либо вопросы относительно этой политики конфиденциальности, вы можете связаться с нами, позвонив по телефону +7 (999) 565 55 75 или написав на почту info@insbit.ru")))):"cancelation"==n?o.a.createElement("div",{className:"about-us about-us__cancelation"},o.a.createElement(u.a,{title:"Политика отмены",width:"narrow-width"}),o.a.createElement(u.a,{color:"grey"},o.a.createElement("div",{className:"container container__cancelation"},o.a.createElement("div",{className:"panel-header"},"Online Курсы"),o.a.createElement("div",{className:"panel-body"},o.a.createElement("b",null,"Если мы отменяем курс,")," что случается редко, учащиеся, зарегистрированные на это обучение, получают выбор между:",o.a.createElement("ol",null,o.a.createElement("li",null,"Получение полного возврата средств или"),o.a.createElement("li",null,"Перепланирование на другие даты, если таковые предлагаются.")),o.a.createElement("b",null,"Если студент отменяет,")," то плата за ",o.a.createElement("b",null,"отмену")," зависит от суммы уведомления:",o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("b",null,"14 и более дней:")," плата за отмену не взимается (полный возврат средств)."),o.a.createElement("li",null,o.a.createElement("b",null,"13 дней или меньше:")," возврат не производится. Если возможно, мы предложим Вам перенести обучение на следующую дату. Перепланирование не гарантируется и доступно только в том случае, если дата указана в нашем расписании.")),o.a.createElement("b",null,"Обратите внимание: ")," если курс, на который вы регистрируетесь, начинается через 2 недели с сегодняшнего дня, возмещение не будет произведено, если вы отмените его.")))):o.a.createElement("div",null,"К сожаление, такой страницы не существует")}}])&&y(n.prototype,r),a&&y(n,a),t}();d.propTypes={type:l.a.oneOf(["about","privacy-policy","cancelation"])};var v=d,_=n(9),E=n(8);i.a.render(o.a.createElement("div",null,"Идёт загрузка"),document.getElementById("root")),null!=document.getElementById("type")&&null!=document.getElementById("type").value&&""!=document.getElementById("type").value?i.a.render(o.a.createElement("div",null,o.a.createElement(_.a,null),o.a.createElement(v,{type:document.getElementById("type").value}),o.a.createElement(E.a,null)),document.getElementById("root")):i.a.render(o.a.createElement("div",null,"К сожалени, такой страницы не существу4ет"),document.getElementById("root"))}]);