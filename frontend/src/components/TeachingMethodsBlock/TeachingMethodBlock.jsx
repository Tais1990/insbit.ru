import React from 'react';
import PropTypes from 'prop-types';
import styles from './TeachingMethodBlock.scss';

class TeachingMethodBlock extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {title, text, photo} = this.props;
        return <div className ='teaching-method-block'>
                <div className = 'teaching-method-block__photo' style = {{backgroundImage: `url(${photo})`}}> </div>
        		<div className = 'teaching-method-block__title'>{title}</div>
        		<div className = 'teaching-method-block__text'>{text}</div>
        	</div>
    }
}

TeachingMethodBlock.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    photo: PropTypes.string
};

export default TeachingMethodBlock;
