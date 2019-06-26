import React from 'react'
import PropTypes from 'prop-types';
import styles from './Icon.scss';

class Icon extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {code, font, className} = this.props;
        let classes = `icon`;		
		if (font) {
			classes += ` icon_font_${font}`;
		}
		if (className){
			classes += ` icon_parent_${className}`;
		}
        // костыль из-за размеров Java и акробата
        let styles = {};       
        if (code == '' && font == 'icomoon')
        {
            styles = {
                fontSize: "70px",
                lineHeight: ".8"
            }; 
        }         
        if (code == '' && font == 'icomoon')
        {            
            styles = {
                fontSize: "60px",
                lineHeight: "1"
            }; 
        }        
		
        return <span className={classes} style = {styles}>
        	{code}
        </span>
    }
}
Icon.propTypes = {
    code: PropTypes.string,    
    font: PropTypes.string,    
    className: PropTypes.string
};
export default Icon;