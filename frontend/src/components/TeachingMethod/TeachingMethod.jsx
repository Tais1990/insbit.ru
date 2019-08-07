import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeachingMethod.scss';

const teachingMethods = []
teachingMethods["live-online"] = {
        photo: PARH_RESOURCE + 'img/homepage-live-online.jpg',
        title: 'Живые online-классы',
        text: 'Мы предлагаем online-обучение в режиме реального времени, которое проводится опытными тренерами. Вы можете пройти обучение дома или в офисе при помощи системы WebEx.'
    };
teachingMethods["customized-onsite"] = {
        photo: PARH_RESOURCE + 'img/homepage-custom-onsite.jpg',
        title: 'Индивидуальный подход к каждому клиенту',
        text: 'Адаптируем программы под Ваши требования. Готовы обучить как одного сотрудника, так и сотню.'
    };
teachingMethods["self-paced"] = {
        photo: PARH_RESOURCE + 'img/homepage-self-paced.jpg',
        title: 'Самостоятельное обучение',
        text: 'Наши курсы для самостотельного обучение предназначены для тех, кому нужен собственный темп изучения материала. Программа курса предоставляется online с использованием видеоматеиалов, тестов и практических упражнений.'
    };

class TeachingMethod extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {type} = this.props; 
        return <div className = 'teaching-method'>   
            <div className = 'teaching-method__info'>    
                <div className = 'teaching-method__title'>{teachingMethods[type].title}</div>
                <div className = 'teaching-method__text'>{teachingMethods[type].text}</div>
            </div>
            <div className = 'teaching-method__photo' style = {{backgroundImage: `url(${teachingMethods[type].photo})`}}> </div>
        </div>
        
    }
}
TeachingMethod.propTypes = {
    type: PropTypes.oneOf(['live-online', 'customized-onsite', 'self-paced'])
};

export default TeachingMethod;