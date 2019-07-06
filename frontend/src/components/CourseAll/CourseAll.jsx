import React from 'react'
import PropTypes from 'prop-types';
import styles from './CourseAll.scss';
var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
class CourseAll extends React.Component {
    constructor() {
        super();
    }

    render(props, state) {
        let {courses} = this.props; 
        console.log(courses)       
        return <div className = 'course-all'>
        	{courses.map((course) => 
                <a key = {course.code} className = 'course-all__record' href = {urlServer + '/1/course/' + course.code}>
                    {course.name}
                </a>
            )}
        </div>
    }
}
CourseAll.propTypes = {
	courses: PropTypes.any
};
export default CourseAll;