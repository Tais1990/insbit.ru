import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeachingMethodsBlock.scss';
import TeachingMethodBlock from './TeachingMethodBlock.jsx';

const teachingMethodsBlockPhoto = {
    homepageLiveOnline:  PARH_RESOURCE + 'img/homepage-live-online.jpg',
    homepageCustomOnsite: PARH_RESOURCE + "img/homepage-custom-onsite.jpg",
    homepageSelfPaced: PARH_RESOURCE + "img/homepage-self-paced.jpg"
};

class TeachingMethodsBlock extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        return <div className = 'teaching-methods-block'>
       		   <TeachingMethodBlock photo = { teachingMethodsBlockPhoto.homepageLiveOnline } title = 'Живые online-классы' 
                    text = 'Мы предлагаем online-обучение в режиме реального времени, которое проводится опытными тренерами. Вы можете пройти обучение дома или в офисе при помощи системы WebEx.' />
                <TeachingMethodBlock photo = { teachingMethodsBlockPhoto.homepageCustomOnsite } title = 'Индивидуальный подход к каждому клиенту' 
                    text = 'Адаптируем программы под Ваши требования. Готовы обучить как одного сотрудника, так и сотню.'/>
                <TeachingMethodBlock photo = { teachingMethodsBlockPhoto.homepageSelfPaced } title = 'Самостоятельное обучение' 
                    text = 'Наши курсы для самостотельного обучение предназначены для тех, кому нужен собственный темп изучения материала. Программа курса предоставляется online с использованием видеоматеиалов, тестов и практических упражнений.'/>
        	</div>
    }
}

export default TeachingMethodsBlock;