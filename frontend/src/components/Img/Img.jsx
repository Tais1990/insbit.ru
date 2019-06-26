import React from 'react'
import PropTypes from 'prop-types';
import styles from './Img.scss';

class Img extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let {src, link, width, widthType, height, heightType} = this.props;    
        let style = {
                backgroundImage: `url(${ src })`
        }; 
        if (width)
        {
            style.width = width.toString() + widthType;
        }
        if (height)
        {
            style.height = height.toString() + heightType;
        }
        if (link)
        {
            return <a href={ link } className = 'img'>
                <div className = 'img' style = {style} />
            </a> 
        } 
        else
        {
            return <div className = 'img' style = {style}/>                
        }

    }
}
Img.propTypes = {
    src: PropTypes.string,    
    link: PropTypes.string,    
    width: PropTypes.number,
    widthType: PropTypes.oneOf(['%', 'px']),
    height: PropTypes.number,
    heightType: PropTypes.oneOf(['%', 'px'])
};
Img.defaultProps = {
  widthType: 'px',
  heightType: 'px'
};

export default Img;