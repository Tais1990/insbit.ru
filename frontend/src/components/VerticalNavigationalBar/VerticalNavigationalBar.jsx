import React from 'react'
import PropTypes from 'prop-types';
import styles from './VerticalNavigationalBar.scss';
import VendorsStore from '../../stores/Vendors.jsx';
import { observer } from 'mobx-react';

@observer
class VerticalNavigationalBar extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {type, code} = this.props;
        const nameProgram = VendorsStore.getNameTrainingProgramByName(code);
        const nameVendor = VendorsStore.getVendorByTrainingProgram(code).name;
        const programs = VendorsStore.getTrainingProgramParentVendor(code);
        const isLoad = VendorsStore.isLoadTrainingPrograms;
        /*
        let classes = `button`;
        if (type) {
            classes += ` button_type_${type}`;
        } 
        */   
        // реализация для   trainingPrograms  
        return ( 
            <div className='vertical-navigational-bar'>               
                <a className='vertical-navigational-bar__title'>
                    {nameVendor}
                </a>
                <div className='vertical-navigational-bar__records'>
                    {programs.map(program => 
                        <a key = {program.name} 
                            className={`vertical-navigational-bar__record ${program.name === nameProgram ? 'vertical-navigational-bar__record_isActive' : ''}`} 
                            href = {program.link}>
                        {program.name}</a>
                    )}
                </div>
            </div>
        )
    }
}
VerticalNavigationalBar.propTypes = {
    type: PropTypes.oneOf(['trainingPrograms', 'vendors']),    
    code: PropTypes.string
};
export default VerticalNavigationalBar;