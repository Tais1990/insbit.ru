import React from 'react'
import PropTypes from 'prop-types';
import styles from './Footer.scss';
import SocialIcons from '../SocialIcons/SocialIcons.jsx';
import Info from './Info.jsx';
let infoArray = [
    {
        title: "Варианты обучения:",
        records: [
            {
                text: "Обучение в нашем классе",
                link: "/teachingMethods/live-online"
            }, {
                text: "Индивидуальные занятия",
                link: "/teachingMethods/self-paced"
            }, {
                text: "Корпоративные курсы",
                link: "/teachingMethods/customized-onsite"
            }
        ]
    }, {
        title: "Сведения об АНО ДПО «ИнБИТ»:",
        records: [
            {
                text: "О нас",
                link: "/about-us/about"
            /*}, {
                text: "Отзывы",
                link: "/"
                */
            }, {
                text: "Политика конфиденциальности",
                link: "/about-us/privacy-policy"
            }, {
                text: "Контакты",
                link: "/about-us/contact"
            }, {
                text: "Политика отмены",
                link: "/about-us/cancelation"
            }/*, {
                text: "Все спец страницы",
                link: "/"
            }*/
        ]
    }, {
        /*
        title: "Ресурсы:",
        records: [
            {
                text: "Подписаться на новостную рассылку",
                link: "/"
            }, {
                text: "Блог «ИнБИТ» (статьи с возможностью оценки L/Dl и комментариями)",
                link: "/"
            }
        ]
    }, {
        */
        title: "Каталог курсов:",
        records: [
            {
                text: "Полный каталог курсов",
                link: "/catalog"
            }/*, {
                text: "Акции и скидки",
                link: "/"
            }*/
        ]
    }
]

class Footer extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        return <footer className="footer">
            <Info data = {infoArray}/>
            <SocialIcons/>
            <div className="footer__copyright">© 2019, Институт Бизнеса и Информационных Технологий.</div>
        </footer>
    }
}
export default Footer;