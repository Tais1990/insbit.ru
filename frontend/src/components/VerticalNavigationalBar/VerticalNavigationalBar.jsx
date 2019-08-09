import React from 'react'
import PropTypes from 'prop-types';
import styles from './VerticalNavigationalBar.scss';
import VendorsStore from '../../stores/Vendors.jsx';
import CoursesStore from '../../stores/Courses.jsx';
import { observer } from 'mobx-react';

@observer
class VerticalNavigationalBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props, state) {
        let {type, code} = this.props;
        var nameCurrent;
        var nameTitle;
        var linkTitle;
        var records;
        var basePathRecordLink;
        var isLoad;
        if (type === 'trainingPrograms')
        {
            nameCurrent = VendorsStore.getNameTrainingProgramByName(code);
            nameTitle = VendorsStore.getVendorByTrainingProgram(code).name;
            linkTitle = "/catalog/" + VendorsStore.getVendorByTrainingProgram(code).code;
            records = VendorsStore.getTrainingProgramParentVendor(code);
            isLoad = VendorsStore.isLoadTrainingPrograms;
        }
        if (type === 'courses')
        {
            // вспомогательные элементы для ссылок
            var isLoadAdditional = VendorsStore.isLoadTrainingPrograms;
            nameCurrent = CoursesStore.getNameCourseByCode(code);
            nameTitle = CoursesStore.getTrainingProgramByCode(code).name;
            linkTitle = "/catalog/" 
                + VendorsStore.getVendorByTrainingProgram(CoursesStore.getTrainingProgramByCode(code).code).code 
                + "/" + CoursesStore.getTrainingProgramByCode(code).code;
            records = CoursesStore.getCoursesParentTrainingProgram(code);
            isLoad = CoursesStore.isLoadCourses;
        }
        return ( 
            <div className='vertical-navigational-bar'>               
                <a className='vertical-navigational-bar__title' href = {linkTitle}>
                    {nameTitle}
                </a>
                <div className='vertical-navigational-bar__records'>
                    {records.map(record => 
                        <a key = {record.name} 
                            className={`vertical-navigational-bar__record ${record.name === nameCurrent ? 'vertical-navigational-bar__record_isActive' : ''}`} 
                            href = {`${linkTitle}${record.link}`}>
                        {record.name}</a>
                    )}
                </div>
            </div>
        )
    }
}
VerticalNavigationalBar.propTypes = {
    type: PropTypes.oneOf(['trainingPrograms', 'vendors', 'courses']),    
    code: PropTypes.string
};
export default VerticalNavigationalBar;