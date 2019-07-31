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
                link: "/"
            }, {
                text: "Индивидуальные занятия",
                link: "/"
            }, {
                text: "Корпоративные курсы",
                link: "/"
            }
        ]
    }, {
        title: "Сведения об АНО ДПО «ИнБИТ»:",
        records: [
            {
                text: "О нас",
                link: "/"
            /*}, {
                text: "Отзывы",
                link: "/"
                */
            }, {
                text: "Политика конфиденциальности",
                link: "/"
            }, {
                text: "Контакты",
                link: "/"
            }, {
                text: "Политика отмены",
                link: "/"
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
                link: "/"
            }, {
                text: "Акции и скидки",
                link: "/"
            }
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
            <div className="footer__copyright">© 2004-2019 Webucator, Inc. All Rights Reserved.</div>
        </footer>
    }
}
export default Footer;