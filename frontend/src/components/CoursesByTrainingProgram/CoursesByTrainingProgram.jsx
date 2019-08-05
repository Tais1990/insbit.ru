import React from 'react'
import PropTypes from 'prop-types';
import styles from './CoursesByTrainingProgram.scss';
import Course from './Course.jsx';
import CoursesStore from '../../stores/Courses.jsx';
import VendorsStore from '../../stores/Vendors.jsx';
import { observer } from 'mobx-react';

@observer
class CoursesByTrainingProgram extends React.Component {
    constructor(props) {
        super(props);
        CoursesStore.calculation(props.codeTrainingProgram);
    }
    render(props, state) {
        let {codeTrainingProgram} = this.props;
        const nameProgram = VendorsStore.getNameTrainingProgramByName(this.props.codeTrainingProgram);
        const isLoad = VendorsStore.isLoadTrainingPrograms;
        return <div className = 'courses-by-training-program'>  
            <div className = 'courses-by-training-program__name'>{nameProgram}</div>
            <div className = 'courses-by-training-program__header-courses'>Список курсов</div>
            <div className = 'courses-by-training-program__courses'> 
                {CoursesStore.coursesByTrainingProgram.map(elem => 
                    <Course 
                        key = {elem.code} 
                        code = {elem.code} 
                        name = {elem.name} 
                        cost = {elem.cost} 
                        date = {elem.date}
                        description = {elem.description} />
                )}
            </div>
            
        </div>
    }
}
CoursesByTrainingProgram.propTypes = {
    codeTrainingProgram: PropTypes.string
};
export default CoursesByTrainingProgram;