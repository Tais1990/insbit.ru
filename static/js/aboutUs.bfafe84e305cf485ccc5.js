!function(e){function t(t){for(var n,c,o=t[0],i=t[1],s=t[2],m=0,d=[];m<o.length;m++)c=o[m],l[c]&&d.push(l[c][0]),l[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==l[i]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},l={1:0},r=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=i;r.push([103,0]),a()}([,,,,,,,,,function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),c=a(3),o=a(5),i=a(0),s=a.n(i),u=(a(21),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){var a=this.props,n=a.title,l=a.children,r=a.color,c=a.width,o=a.textAlign,i="section-block";r&&(i+=" section-block_color_".concat(r)),c&&(i+=" section-block_width_".concat(c)),o&&(i+=" section-block_textAlign_".concat(o));var u=i+" section-block__title";return s.a.createElement("section",{className:i},n&&s.a.createElement("h1",{className:u},n," "),l)}}]),t}(s.a.Component));t.a=u},function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),c=a(3),o=a(5),i=a(0),s=a.n(i),u=(a(23),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){var a=this.props,n=a.code,l=a.font,r=a.className,c="icon";l&&(c+=" icon_font_".concat(l)),r&&(c+=" icon_parent_".concat(r));var o={};return""==n&&"icomoon"==l&&(o={fontSize:"70px",lineHeight:".8"}),""==n&&"icomoon"==l&&(o={fontSize:"60px",lineHeight:"1"}),s.a.createElement("span",{className:c,style:o},n)}}]),t}(s.a.Component));t.a=u},function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),c=a(3),o=a(5),i=a(0),s=a.n(i),u=(a(27),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){var a=this.props,n=a.title,l=a.link,r=a.type,c=a.color,o="button";return r&&(o+=" button_type_".concat(r)),c&&(o+=" button_color_".concat(c)),s.a.createElement("a",{href:l,className:o},n)}}]),t}(s.a.Component));t.a=u},function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),c=a(3),o=a(5),i=a(0),s=a.n(i),u=(a(31),a(10)),m=(a(33),[{codeIcon:"f39e",fontIcon:"faBrands",link:"http://www.facebook.com/webucator"},{codeIcon:"f0d5",fontIcon:"faBrands",link:"https://plus.google.com/+Webucator"},{codeIcon:"f0e1",fontIcon:"faBrands",link:"https://www.linkedin.com/companies/webucator"},{codeIcon:"f099",fontIcon:"faBrands",link:"https://twitter.com/webucator"},{codeIcon:"f0e0",fontIcon:"faFree",link:"mailto:sales@webucator.com"}]),d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){return s.a.createElement("div",{className:"social-icons"},m.map(function(e){return s.a.createElement("a",{href:e.link,className:"social-icons__icon",key:e.codeIcon},s.a.createElement(u.a,{code:String.fromCharCode(parseInt(e.codeIcon,16)),font:e.fontIcon,className:"social-icons"}))}))}}]),t}(s.a.Component),f=(a(35),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){var a=this.props.params;return s.a.createElement("div",{className:"info__column"},s.a.createElement("div",{className:"info__column__title"},a.title),a.records.map(function(e){return s.a.createElement("a",{key:e.text,href:e.link,className:"info__column__link"},e.text)}))}}]),t}(s.a.Component)),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){var a=this.props.data;return s.a.createElement("div",{className:"info"},a.map(function(e){return s.a.createElement(f,{params:e,key:e.title})}))}}]),t}(s.a.Component),p=[{title:"Варианты обучения:",records:[{text:"Обучение в нашем классе",link:"/"},{text:"Индивидуальные занятия",link:"/"},{text:"Корпоративные курсы",link:"/"}]},{title:"Сведения об АНО ДПО «ИнБИТ»:",records:[{text:"О нас",link:"/about-us/about"},{text:"Политика конфиденциальности",link:"/about-us/privacy-policy"},{text:"Контакты",link:"/about-us/contact"},{text:"Политика отмены",link:"/about-us/cancelation"}]},{title:"Каталог курсов:",records:[{text:"Полный каталог курсов",link:"/"},{text:"Акции и скидки",link:"/"}]}],v=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){return s.a.createElement("footer",{className:"footer"},s.a.createElement(h,{data:p}),s.a.createElement(d,null),s.a.createElement("div",{className:"footer__copyright"},"© 2004-2019 Webucator, Inc. All Rights Reserved."))}}]),t}(s.a.Component);t.a=v},function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),c=a(3),o=a(5),i=a(0),s=a.n(i),u=(a(25),a(11)),m=(a(29),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){var a=this.props,n=a.src,l=a.link,r=a.width,c=a.widthType,o=a.height,i=a.heightType,u={backgroundImage:"url(".concat(n,")")};return r&&(u.width=r.toString()+c),o&&(u.height=o.toString()+i),l?s.a.createElement("a",{href:l,className:"img"},s.a.createElement("div",{className:"img",style:u})):s.a.createElement("div",{className:"img",style:u})}}]),t}(s.a.Component));m.defaultProps={widthType:"px",heightType:"px"};var d=m,f=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){return s.a.createElement("div",null,s.a.createElement("header",null,s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"header header__left"}),s.a.createElement("div",{className:"header header__center"},s.a.createElement(d,{src:"/static/img/webucator.png",width:211,height:52,link:"/"})),s.a.createElement("div",{className:"header header__right contacts"},s.a.createElement("div",{className:"contacts contacts__tel"},"+7 999 565 55 75"),s.a.createElement(u.a,{title:"НАШИ КОНТАКТЫ",type:"button",color:"light",link:"/about-us/contact"})))),s.a.createElement("div",{className:"header-expansion"}))}}]),t}(s.a.Component);t.a=f},function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),c=a(3),o=a(5),i=a(0),s=a.n(i),u=(a(55),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){var a=this.props,n=a.title,l=a.data,r=a.type,c=a.beforeData;return"paragraph"==r?s.a.createElement("div",{className:"item"},n&&s.a.createElement("div",{className:"item__title"}," ",n," "),s.a.createElement("div",{className:"item__data"}," ",l," ")):"list"==r?s.a.createElement("div",{className:"item"},n&&s.a.createElement("div",{className:"item__title"}," ",n," "),s.a.createElement("div",{className:"item__data"},c&&s.a.createElement("div",null,c),s.a.createElement("ul",null,l.map(function(e){return s.a.createElement("li",{key:e},e)})))):"html"==r?s.a.createElement("div",{className:"item item_type_html"},n&&s.a.createElement("div",{className:"item__title"}," ",n," "),s.a.createElement("div",{className:"item__data",dangerouslySetInnerHTML:{__html:l}})):void 0}}]),t}(s.a.Component));u.defaultProps={type:"paragraph"},t.a=u},,function(e,t,a){var n=a(17);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),c=a(3),o=a(5),i=a(0),s=a.n(i),u=(a(40),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){var a=this.props.children;return s.a.createElement("div",{className:"text-block"},a)}}]),t}(s.a.Component));t.a=u},,,function(e,t,a){var n=a(22);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n=a(24);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n=a(26);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n=a(28);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n=a(30);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n=a(32);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n=a(34);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n=a(36);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},,function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),c=a(3),o=a(5),i=a(0),s=a.n(i),u=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).call(this))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e,t){var a=this.props.text;return s.a.createElement("h2",null,a)}}]),t}(s.a.Component);t.a=u},,function(e,t,a){var n=a(41);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},,,,,,,,,,,,,,function(e,t,a){var n=a(56);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,function(e,t,a){var n=a(78);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n=a(80);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n=a(82);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(6)(n,l);n.locals&&(e.exports=n.locals)},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=a(1),i=a(2),s=a(4),u=a(3),m=a(5),d=(a(77),a(14),a(9)),f=a(18),h=a(38),p=a(46),v=a(19),b=(a(79),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={name:"",email:"",phone:"",message:""},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("".concat("","/api/createOutbox"),{method:"POST",headers:{Accept:"application/json"},body:JSON.stringify({name:this.state.name,email:this.state.email,phone:this.state.phone,message:this.state.message})}).then(function(e){"undefined"!=typeof window&&(window.location.href="/")}).catch(function(e){console.log("ERROE"),console.log(e)})}},{key:"render",value:function(e,t){return l.a.createElement("form",{className:"contact-us",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"contact-us__field"},l.a.createElement("label",null," Имя:")," ",l.a.createElement("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement("div",{className:"contact-us__field"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{name:"email",type:"text",value:this.state.email,onChange:this.handleChange})),l.a.createElement("div",{className:"contact-us__field"},l.a.createElement("label",null,"Телефон:")," ",l.a.createElement("input",{name:"phone",type:"text",value:this.state.phone,onChange:this.handleChange})),l.a.createElement("div",{className:"contact-us__field"},l.a.createElement("label",null," Сообщение:")," ",l.a.createElement("textarea",{name:"message",value:this.state.message,onChange:this.handleChange})),l.a.createElement("div",{className:"contact-us__field contact-us__button"},l.a.createElement("input",{type:"submit",value:"Отправить"})))}}]),t}(l.a.Component)),E=(a(81),a(57)),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"map-google"},l.a.createElement(E.Map,{google:this.props.google,zoom:17,initialCenter:{lat:56.8393495,lng:60.6074862}}))}}]),t}(l.a.Component),g=Object(E.GoogleApiWrapper)({apiKey:"AIzaSyCF1AQkwGndummeUCLnYZE-UJCbJJwDLfg"})(y),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(e,t){var a=this.props.type;return"about"==a?l.a.createElement("div",{className:"about-us about-us__about"},l.a.createElement(d.a,{title:"О нас",width:"narrow-width"}),l.a.createElement(d.a,{title:"Приглашаем на обучение в Институт бизнеса и информационных технологий!",color:"grey"},l.a.createElement(f.a,null,"Вашему вниманию предлагаем обучение по различным направлениям, более 500 курсов как для администраторов и разработчиков, так и для обычных пользователей: компьютерные курсы, курсы по Linux (а также его разновидностям) и свободному ПО, курсы 3ds max, курсы по различным продуктам Microsoft (Windows, Windows Server, Azure, Microsoft 365 и др.), занятия по основам программирования и многое другое. В нашем учебном центре Вы можете пройти компьютерные подготовительные курсы обучения и курсы повышения квалификации в очных группах (утром, днем, вечером, по выходным) и индивидуально."),l.a.createElement("br",null),l.a.createElement(f.a,null,"В Институте бизнеса и информационных технологий работает молодая, современная и высокотехнологичная команда с большим опытом работы в сфере сертифицированного обучения. Также мы сотрудничаем с преподавателями различных кафедр Уральского Федерального Университета им. Б.Н. Ельцина."),l.a.createElement("br",null),l.a.createElement(f.a,null,"Институт бизнеса и информационных технологий является партнеров Microsoft, Astra Linux, Postgres Professional, Cisco и проводит авторизованное обучение по курсам данных вендеров."),l.a.createElement("br",null),l.a.createElement(f.a,null,"Обучение Вы можете пройти как в классах г. Екатеринбурга по адресу Ленина, 41, так и в Москве."),l.a.createElement("br",null),l.a.createElement(h.a,{text:"Вы можете связаться с нами по телефону +7 999 565 55 75 или по почте info@insbit.ru"}))):"privacy-policy"==a?l.a.createElement("div",{className:"about-us about-us__privacy-policy"},l.a.createElement(d.a,{title:"Политика конфиденциальности",width:"narrow-width"}),l.a.createElement(d.a,{color:"grey"},l.a.createElement("div",{className:"container container__privacy-policy"},l.a.createElement("h3",null,"Какую информацию мы собираем?"),l.a.createElement("p",null,"Мы собираем информацию о Вас, когда Вы регистрируетесь на нашем сайте, размещаете заказ или заполняете форму. При заказе или регистрации на нашем сайте, при необходимости, Вас могут попросить ввести: имя, адрес электронной почты, почтовый адрес, номер телефона или информацию о кредитной карте. Впрочем, Вы можете посетить наш сайт анонимно."),l.a.createElement("h3",null,"Для чего мы используем вашу информацию?"),l.a.createElement("p",null," Любая информация, которую мы получаем от Вас, может быть использована одним из следующих способов:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Чтобы персонализировать ваш опыт (ваша информация помогает нам лучше реагировать на ваши индивидуальные потребности)"),l.a.createElement("li",null,"Чтобы улучшить наш веб-сайт (мы постоянно стремимся улучшить наши предложения на основе информации и отзывов, которые мы получаем от вас)"),l.a.createElement("li",null,"Улучшение обслуживания клиентов (ваша информация помогает нам более эффективно реагировать на ваши запросы обслуживания клиентов и потребности в поддержке)"),l.a.createElement("li",null,"Обработка транзакций (Ваша информация, государственная или частная, не будет продаваться, обмениваться, передаваться или передаваться какой-либо другой компании по любой причине, без вашего согласия, кроме как для явной цели доставки запрошенного продукта или услуги, запрошенной"),l.a.createElement("li",null,"Для администрирования конкурса, продвижения, опроса или других функций сайта"),l.a.createElement("li",null,"Отправлять периодические электронные письма",l.a.createElement("ul",null,l.a.createElement("li",null,"Адрес электронной почты, который вы предоставляете для обработки заказа, будет использоваться только для отправки вам информации и обновлений, касающихся вашего заказа."),l.a.createElement("li",null,"Если вы решите подписаться на нашу рассылку, вы получите электронные письма, которые могут содержать новости компании, обновления, информацию о продуктах или услугах и т. Д."),l.a.createElement("li",null,"Примечание. Если в любое время вы хотите отказаться от подписки на получение будущих электронных писем, мы приводим подробные инструкции по отмене подписки внизу каждого электронного письма.")))),l.a.createElement("h3",null,"Как мы защищаем вашу информацию?"),l.a.createElement("p",null,"Мы применяем различные меры безопасности для обеспечения безопасности Вашей личной информации при размещении заказа."),l.a.createElement("h3",null,"Разглашаем ли мы какую-либо информацию сторонним лицам?"),l.a.createElement("p",null,"Мы не продаем, не обмениваем или иным образом не передаем сторонним лицам Вашу личную информацию. Это не относится к доверенным третьим сторонам, которые помогают нам в управлении нашим веб-сайтом, ведении нашего бизнеса или обслуживании Вас, если эти стороны соглашаются сохранять конфиденциальность этой информации. Мы также можем раскрывать Вашу информацию, когда мы считаем, что ее публикация соответствует законодательству или защищает наши или иные права, собственность или безопасность. Однако не идентифицирующая личность информация о посетителях может быть предоставлена другим сторонам для маркетинга, рекламы или иного использования."),l.a.createElement("h3",null,"Только политика конфиденциальности онлайн"),l.a.createElement("p",null,"Настоящая политика конфиденциальности онлайн применяется только к информации, собранной через наш сайт, а не к информации, собранной в автономном режиме."),l.a.createElement("h3",null,"Ваше согласие"),l.a.createElement("p",null,"Используя наш сайт, Вы соглашаетесь с нашей политикой конфиденциальности."),l.a.createElement("h3",null,"Изменения в нашей Политике конфиденциальности"),l.a.createElement("p",null,"Если мы решим изменить нашу политику конфиденциальности, мы опубликуем эти изменения на этой странице."),l.a.createElement("h3",null,"Связаться с нами"),l.a.createElement("p",null,"Если есть какие-либо вопросы относительно этой политики конфиденциальности, вы можете связаться с нами, позвонив по телефону +7 (999) 565 55 75 или написав на почту info@insbit.ru")))):"cancelation"==a?l.a.createElement("div",{className:"about-us about-us__cancelation"},l.a.createElement(d.a,{title:"Политика отмены",width:"narrow-width"}),l.a.createElement(d.a,{color:"grey"},l.a.createElement("div",{className:"container container__cancelation"},l.a.createElement("div",{className:"panel-header"},"Online Курсы"),l.a.createElement("div",{className:"panel-body"},l.a.createElement("b",null,"Если мы отменяем курс,")," что случается редко, учащиеся, зарегистрированные на это обучение, получают выбор между:",l.a.createElement("ol",null,l.a.createElement("li",null,"Получение полного возврата средств или"),l.a.createElement("li",null,"Перепланирование на другие даты, если таковые предлагаются.")),l.a.createElement("b",null,"Если студент отменяет,")," то плата за ",l.a.createElement("b",null,"отмену")," зависит от суммы уведомления:",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,"14 и более дней:")," плата за отмену не взимается (полный возврат средств)."),l.a.createElement("li",null,l.a.createElement("b",null,"13 дней или меньше:")," возврат не производится. Если возможно, мы предложим Вам перенести обучение на следующую дату. Перепланирование не гарантируется и доступно только в том случае, если дата указана в нашем расписании.")),l.a.createElement("b",null,"Обратите внимание: ")," если курс, на который вы регистрируетесь, начинается через 2 недели с сегодняшнего дня, возмещение не будет произведено, если вы отмените его.")))):"contact"==a?l.a.createElement("div",{className:"about-us about-us__cancelation"},l.a.createElement(d.a,{title:"Контакты",width:"narrow-width"}),l.a.createElement(d.a,{title:"Напишите, и мы Вам поможем",color:"grey"},l.a.createElement(b,null),l.a.createElement("div",{className:"container container__contact"},l.a.createElement(g,null)))):l.a.createElement("div",null,"К сожаление, такой страницы не существует")}}]),t}(l.a.Component),j=a(13),_=a(12);c.a.render(l.a.createElement("div",null,"Идёт загрузка"),document.getElementById("root")),null!=document.getElementById("type")&&null!=document.getElementById("type").value&&""!=document.getElementById("type").value?c.a.render(l.a.createElement("div",null,l.a.createElement(j.a,null),l.a.createElement(O,{type:document.getElementById("type").value}),l.a.createElement(_.a,null)),document.getElementById("root")):c.a.render(l.a.createElement("div",null,"К сожалени, такой страницы не существу4ет"),document.getElementById("root"))}]);