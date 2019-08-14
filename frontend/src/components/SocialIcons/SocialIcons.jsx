import React from 'react'
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.jsx';
import styles from './SocialIcons.scss';
let icons = [
    {
        codeIcon: "f39e",
        fontIcon: "faBrands",
        link: "https://insbit.ru"
    }, {
        codeIcon: "f0d5",
        fontIcon: "faBrands",
        link: "https://insbit.ru"
    }, {
        codeIcon: "f0e1",
        fontIcon: "faBrands",
        link: "https://insbit.ru"
    }, {
        codeIcon: "f099",
        fontIcon: "faBrands",
        link: "https://insbit.ru"
    }, {
        codeIcon: "f0e0",
        fontIcon: "faFree",
        link: "https://insbit.ru"
    }
]
class SocialIcons extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {        
        return  <div className = "social-icons"> 
            {icons.map(icon =>  
                <a href={icon.link} className = "social-icons__icon" key = {icon.codeIcon}>
                    <Icon code = {String.fromCharCode(parseInt(icon.codeIcon, 16))} font = {icon.fontIcon}  className = "social-icons" />
                </a> 
            )}            
        </div>
    }
}
export default SocialIcons;