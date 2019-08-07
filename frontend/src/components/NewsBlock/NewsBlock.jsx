import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsBlock.scss';
import NewBlock from './NewBlock.jsx';

const teachingMethodsBlockPhoto = {
    homepageLiveOnline:  PARH_RESOURCE + 'img/new1.jpg',
    homepageCustomOnsite: PARH_RESOURCE + "img/new2.jpg",
    homepageSelfPaced: PARH_RESOURCE + "img/new3.jpg"
};

class NewsBlock extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        return <div className = 'news-block'>
       		   <NewBlock photo = { teachingMethodsBlockPhoto.homepageLiveOnline } title = 'Учимся на курсах Microsoft бесплатно!' 
                    text = 'Есть необходимость обучения по продуктам Microsoft, а бюджет на это не заложен? В АНО ДПО «ИнБИТ» Вы можете пройти обучение, оплатив его ваучерами Software Assurance.'
                    link = '/news/new1' />
                <NewBlock photo = { teachingMethodsBlockPhoto.homepageCustomOnsite } title = 'Microsoft прекращает поддержку Windows 7' 
                    text = 'Корпорация Майкрософт взяла на себя обязательства по предоставлению 10-летней поддержки Windows 7, выпуская эту операционную систему 22 октября 2009 года. По окончании этого 10-летнего периода Microsoft прекратит поддержку Windows 7.'
                    link = '/news/new2'/>
                <NewBlock photo = { teachingMethodsBlockPhoto.homepageSelfPaced } title = 'Приглашаем на обучение по офисным программам!' 
                    text = 'Несмотря на то, что научиться работать в Excel с нуля сейчас можно самостоятельно, специалистов, владеющих данными программами на должном уровне, не хватает.'
                    link = '/news/new3'/>
        	</div>
    }
}

export default NewsBlock;