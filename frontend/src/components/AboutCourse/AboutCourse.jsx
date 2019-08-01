import React from 'react'
import PropTypes from 'prop-types';
import styles from './AboutCourse.scss';
import Item from '../Item/Item.jsx';

class AboutCourse extends React.Component {
    constructor() {
        super();
    }

    render(props, state) {
        let {courseData} = this.props;        
        return <div className = 'about-course'>
        	<div className = 'about-course__title'>{ courseData.name }</div>
        	<div className = 'about-course__numberCode'>Код: {courseData.numberCode}</div>
            <Item title = 'Продолжительность:' data = {courseData.duration}/>
            <Item title = 'Описание курса:' data = {courseData.description}/>
            <Item title = 'Стоимость:' data = {courseData.cost}/>
            <Item title = 'Даты проведения:' data = {courseData.date}/>
            <Item title = 'Для кого:' data = {courseData.forWhom}/>
            <Item title = 'Необходимая подготовка:' data = {courseData.knowledgeRequired} type = 'list'/>
            <Item title = 'Результат обучения:' data = {courseData.result} type = 'list' beforeData = 'После прохождения курса Вы сможете:'/>
            <div className = 'about-course__title'>Запишитесь на курс по почте info@insbit.ru или по телефону +79995655575</div>
            <Item title = 'Содержание курса:' data={courseData.htmlContent} type='html'/>
            <Item title = 'Вендор:' data={courseData.vendorName}/>
            <Item title = 'Направление:' data={courseData.trainingProgramName}/>
        </div>
    }
}
AboutCourse.propTypes = {
	courseData: PropTypes.any
};
export default AboutCourse;