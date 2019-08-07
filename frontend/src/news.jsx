import './assets/scss/main.scss'
import React from 'react'
import ReactDOM from "react-dom";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import News from './components/News/News.jsx';
//import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';


if (document.getElementById("newsCode").value != null && document.getElementById("newsCode").value != '')
{
	//TO-DO Обработать несуществующий код
	ReactDOM.render(
		<div>       
			<Header/>
			{/*<Breadcrumbs/>*/}
			<News type = {document.getElementById("newsCode").value}/>			
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

