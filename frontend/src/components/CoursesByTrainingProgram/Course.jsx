import React from 'react'
import PropTypes from 'prop-types';
import styles from './Course.scss';
import Button from '../Button/Button.jsx';

class Course extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {        
        let {code, name, cost, date, description} = this.props;
        return <div className = 'course'>
                <div className = 'course__name'><a href = {code} > {name}</a></div>
                <div className = 'course__cost'>{cost}</div>
                <div className = 'course__description'>{description}</div>
                <div className = 'course__date'> <strong>Next Live Class:</strong> {date}</div>
                <div className = 'course__button'>
                    <Button title = 'View Details & More Dates' type = 'button' link = '/courseAll'/>
                    <Button title = 'Request Proposal' type = 'button' link = '/about-us/contact'/> 
                </div>
            </div>
    }
}
Course.propTypes = {
    code: PropTypes.string,    
    name: PropTypes.string,    
    cost: PropTypes.string,    
    date: PropTypes.string,
    description: PropTypes.string
};
export default Course;
