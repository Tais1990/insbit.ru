import React from 'react'
import PropTypes from 'prop-types';
import styles from './Course.scss';
import Button from '../Button/Button.jsx';

class Course extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {        
        let {code, name, cost, date, description, link} = this.props;
        return <div className = 'course'>
                <div className = 'course__name'><a href = {link} > {name}</a></div>
                <div className = 'course__cost'>{cost}</div>
                <div className = 'course__description'>{description}</div>
                <div className = 'course__date'> <strong>Next Live Class:</strong> {date}</div>
                <div className = 'course__button'>
                    <Button title = 'View Details & More Dates' type = 'button' link = {link}/>
                    <Button title = 'Свяжатесь с нами' type = 'button' link = '/about-us/contact'/> 
                </div>
            </div>
    }
}
Course.propTypes = {
    code: PropTypes.string,    
    name: PropTypes.string,    
    cost: PropTypes.string,    
    date: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
};
export default Course;
