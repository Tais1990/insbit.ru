import React from 'react'
import PropTypes from 'prop-types';
import styles from './Header.scss';
import Button from '../Button/Button.jsx';
import Img from '../Img/Img.jsx';


class Header extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        let logo = PARH_RESOURCE + 'img/webucator.png';
        return <header className = 'header'>
            <div className = 'header header__left'>             
                <Button title = 'ВОЙТИ' type = 'link' link = '/'/>    
            </div>         
            <div  className = 'header header__center'>
                <Img src = {logo} width = {211} height = {52} link="/"/>
            </div>
            <div  className = 'header header__right contacts'>
                <div className = 'contacts contacts__tel'>+7-877-932-8228</div>
                <Button title = 'НАШИ КОНТАКТЫ' type = 'button' color='light' link = '/'/>
            </div>
        </header>
    }
}
export default Header;