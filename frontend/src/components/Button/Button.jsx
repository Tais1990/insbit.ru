import React from 'react'
import PropTypes from 'prop-types';
import styles from './Button.scss';

class Button extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {title, link, type, color, onClick} = this.props;
        let classes = `button`;
        if (type) {
            classes += ` button_type_${type}`;
        }
        if (color) {
            classes += ` button_color_${color}`;
        }
        // TO-DO сделать через Link
        if (link) {
            return ( 
                <a href = {link} className={classes}>
                    {title}
                </a>
            )
        } else {
            return (
                <div className={classes} onClick = {onClick}> {title} </div>
            )
        }
    }
}
// пока сомый простой вариаент
Button.propTypes = {
    title: PropTypes.string,    
    link: PropTypes.string,
    // то, как выглядит, а не как себя ведёт
    type: PropTypes.oneOf(['link', 'button']),
    color: PropTypes.oneOf(['dark', 'light', 'red']),
    onClick: PropTypes.func
};
Button.defaultProps = {
  color: 'dark',
  type: 'button'
};
export default Button;