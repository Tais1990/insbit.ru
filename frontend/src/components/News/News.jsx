import React from 'react';
import PropTypes from 'prop-types';
import styles from './News.scss';

const news = []
news["new1"] = {
        photo: PARH_RESOURCE + 'img/new1.jpg',
        title: 'Учимся на курсах Microsoft бесплатно!',
        text: 'Есть необходимость обучения по продуктам Microsoft, а бюджет на это не заложен? В АНО ДПО «ИнБИТ» Вы можете пройти обучение, оплатив его ваучерами Software Assurance.' + '<br/>' + 
'Software Assurance — это комплексная программа в рамках корпоративного лицензирования Microsoft, включающая возможность бесплатного обучения. Преимущества Software Assurance помогут вам извлечь максимальную выгоду из ваших инвестиций в ИТ. Одним из ключевых прав, которые вы получаете, присоединившись к программе, это право на получение ваучеров, которые вы можете использовать для оплаты услуг партнеров Microsoft.' + '<br/>' +
'Как воспользоваться программой? Программа Software Assurance включена в некоторые программы корпоративного лицензирования, а для остальных программ доступна как дополнительная опция. Software Assurance можно приобрести у партнеров Microsoft через соглашения корпоративного лицензирования.' + '<br/>' +
'За более подробной информацией обратитесь к менеджерам нашего УЦ по телефону +7 999 565 55 75 или оставьте заявку на info@insbit.ru и наши менеджеры Вам перезвонят.'
    };
news["new2"] = {
        photo: PARH_RESOURCE + 'img/new2.jpg',
        title: 'Microsoft прекращает поддержку Windows 7',
        text: 'Корпорация Майкрософт взяла на себя обязательства по предоставлению 10-летней поддержки Windows 7, выпуская эту операционную систему 22 октября 2009 года. По окончании этого 10-летнего периода Microsoft прекратит поддержку Windows 7, чтобы сконцентрировать инвестиции на поддержке более новых технологий и потрясающих новых взаимодействий. Поддержка Windows 7 будет прекращена 14 января 2020 г. После этого техническая помощь и автоматические обновления из Центра обновления Windows, помогающие защитить ваш ПК, станут недоступны. Корпорация Майкрософт настоятельно рекомендует перейти на Windows 10 до января 2020 года, чтобы вы всегда могли получить необходимую помощь и поддержку.' + '<br/>' + 
'Как разъяснено в записи блога Microsoft от 12 марта 2019 года, корпорация будет периодически уведомлять пользователей до окончания 2019 года о том, что рекомендуется сделать, чтобы подготовиться к окончанию поддержки Windows 7. Дополнительные сведения об окончании поддержки Windows 7 см. на веб-странице <a href = "https://www.microsoft.com/windows7">www.microsoft.com/windows7</a>.' + '<br/>' + 
'Если Вы не знакомы с более новыми версиями Windows, приглашаем Вас на курсы по администрированию ОС.'
    };
news["new3"] = {
        photo: PARH_RESOURCE + 'img/new3.jpg',
        title: 'Приглашаем на обучение по офисным программам!',
        text: 'Несмотря на то, что научиться работать в Excel с нуля сейчас можно самостоятельно, специалистов, владеющих данными программами на должном уровне, не хватает. Большинство людей, приходящих на курсы Microsoft Excel, и считающих что умеют в этих программах работать, на самом деле не дотягивают и до самого начального уровня. Но, правильное представления о своих умениях, позволяют нам не только правильно подобрать для Вас обучающий курс, но и иметь возможность претендовать на определенное место работы. Востребованность специалистов Word и Excel, это одна сторона медали, другая сторона – их профессионализм и умение. Поэтому, обучение этим продуктам необходимо пройти каждому, хотя бы для того, чтобы понять, на каком уровне владения программами Word и Excel Вы находитесь, и правильно ли мы предлагаем Вам обучение с нуля или Вам необходимо обучение более высокого уровня. И даже, если Вы имеете начальный уровень владения программами Excel и Word, но изучение проводили самостоятельно, то на курсах Вы сможете систематизировать свои знания и найти много нового в, казалось бы, понятных вещах. Ну а если проходить обучение по более сложным уровням владение офисными программами, то лучше сразу прибегать к услугам наших профессионалов - Вы сэкономите не только время и деньги, но и Ваши нервы.'
    };

class News extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {type} = this.props; 
        return <div className = 'news'>   
            <div className = 'news__info'>    
                <div className = 'news__title'>{news[type].title}</div>
                <div className = 'news__text' dangerouslySetInnerHTML={{__html: news[type].text}}></div>
            </div>
            <div className = 'news__photo-container'>
                {/*<div className = 'news__photo' style = {{backgroundImage: `url(${news[type].photo})`}}> </div>*/}
                <img src = {news[type].photo}/>
            </div>
        </div>
        
    }
}
News.propTypes = {
    type: PropTypes.oneOf(['new1', 'new2', 'new3'])
};

export default News;