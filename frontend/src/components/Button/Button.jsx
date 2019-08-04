import React from 'react'
import PropTypes from 'prop-types';
import styles from './Button.scss';

class Button extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {title, link, type, color} = this.props;
        let classes = `button`;
        if (type) {
            classes += ` button_type_${type}`;
        }
        if (color) {
            classes += ` button_color_${color}`;
        }
        // TO-DO сделать через Link
        return ( 
            <a href = {link} className={classes}>
                {title}
            </a>
        )
    }
}
// пока сомый простой вариаент
Button.propTypes = {
    title: PropTypes.string,    
    link: PropTypes.string,
    type: PropTypes.oneOf(['link', 'button']),
    color: PropTypes.oneOf(['dark', 'light', 'red'])
};
export default Button;