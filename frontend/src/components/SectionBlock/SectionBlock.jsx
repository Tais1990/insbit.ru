import React from 'react'
import PropTypes from 'prop-types';
import styles from './SectionBlock.scss';

class SectionBlock extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {title, children, color, width} = this.props;
        let classes = `section-block`;		
		if (color) {
			classes += ` section-block_color_${color}`;
		}	
        if (width) {
            classes += ` section-block_width_${width}`;
        }
        let classesTitle = classes + ` section-block__title`	;
        return <section className = {classes}> 
        	{title && <h1 className = {classesTitle}>{title} </h1> }
        	{children}     	
        </section>
    }
}

SectionBlock.propTypes = {
    title: PropTypes.string,    
    children: PropTypes.any,
    color: PropTypes.oneOf(['grey']),
    width: PropTypes.oneOf(['narrow-width'])
};
export default SectionBlock;