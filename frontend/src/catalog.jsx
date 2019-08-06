
import './assets/scss/main.scss'
import './assets/scss/catalog.scss'
import React from 'react'
import ReactDOM from "react-dom";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import SectionBlock from './components/SectionBlock/SectionBlock.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import Button from './components/Button/Button.jsx';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';

const urlPageBig = PARH_RESOURCE + 'img/laptop-with-webex_md2x.jpg';

ReactDOM.render(
	<div>
		<Header/>
		<Breadcrumbs/>
		<SectionBlock color='grey'>	
			<div className = "catalog-header" /*style = {{backgroundImage: `url(${urlPageBig})`}}*/>
				<div className = "catalog-header__faded">
					<h1>Каталог курсов</h1>
					<div className = 'catalog-header__text'>Webucator offers training for private groups and individual students.</div>
					<div className = 'catalog-header__contacts'>
						<Button title = 'НАШИ КОНТАКТЫ' type = 'button' color='red' link = '/about-us/contact'/>
						<div className = 'catalog-header__phone'> или звоните +7 999 565 55 75</div>
					</div>
				</div>
			</div>					
			<Catalog/>	        	
	    </SectionBlock>					
		<Footer/>
	</div>,
document.getElementById("root")
);

