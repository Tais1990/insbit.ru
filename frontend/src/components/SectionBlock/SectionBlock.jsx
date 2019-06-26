import React from 'react'
import PropTypes from 'prop-types';
import styles from './SectionBlock.scss';

class SectionBlock extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {title, children, color} = this.props;
        let classes = `section-block`;		
		if (color) {
			classes += ` section-block_color_${color}`;
		}		
        return <section className = {classes}> 
        	<h1 className = 'section-block__title'>{title} </h1> 
        	{children}     	
        </section>
    }
}

SectionBlock.propTypes = {
    title: PropTypes.string,    
    children: PropTypes.any,
    color: PropTypes.oneOf(['grey'])
};
export default SectionBlock;