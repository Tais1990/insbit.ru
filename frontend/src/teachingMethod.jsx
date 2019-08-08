import './assets/scss/main.scss'
import React from 'react'
import ReactDOM from "react-dom";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import TeachingMethod from './components/TeachingMethod/TeachingMethod.jsx';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';
import HorizontalNavigationalBar from './components/HorizontalNavigationalBar/HorizontalNavigationalBar.jsx';


if (document.getElementById("methodCode").value != null && document.getElementById("methodCode").value != '')
{
	//TO-DO Обработать несуществующий код
	ReactDOM.render(
		<div>       
			<Header/>
			<HorizontalNavigationalBar/> 
			<Breadcrumbs/>
			<TeachingMethod type = {document.getElementById("methodCode").value}/>				
			<Footer/>
		</div>,
		document.getElementById("root")
	);
}
else
{
	ReactDOM.render(
		<div>       
			К сожалению такой страницы не существует
		</div>,
		document.getElementById("root")
	);

}

