import React from 'react'
import PropTypes from 'prop-types';
import styles from './TrainingProgram.scss';
import Icon from '../Icon/Icon.jsx';

class TrainingProgram extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {        
        let {codeIcon, fontIcon, name, count} = this.props;
        return <div className = 'training-program'>
                <a href="https://www.webucator.com/microsoft-training/index.cfm">
                    <Icon code = {codeIcon} font = {fontIcon}  className = "training-program" />
                    <div className = 'training-program__title'> { name }</div>
                    <div className = 'training-program__subtitle'> { count } </div>
                </a>
            </div>
    }
}
TrainingProgram.propTypes = {
    codeIcon: PropTypes.string,    
    fontIcon: PropTypes.string,    
    name: PropTypes.string,    
    count: PropTypes.string
};
export default TrainingProgram;
