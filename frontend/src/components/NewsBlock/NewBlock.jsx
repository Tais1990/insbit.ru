import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewBlock.scss';

class NewBlock extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {title, text, photo} = this.props;
        return <div className ='new-block'>
                <div className = 'new-block__photo' style = {{backgroundImage: `url(${photo})`}}> </div>
        		<div className = 'new-block__title'>{title}</div>
        		<div className = 'new-block__text'>{text}</div>
                <div className = 'new-block__link'><a href = "/">Читать</a></div>
        	</div>
    }
}

NewBlock.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    photo: PropTypes.string
};

export default NewBlock;
