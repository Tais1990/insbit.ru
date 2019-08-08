import './assets/scss/main.scss'
import React from 'react'
import ReactDOM from "react-dom";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import CoursesByTrainingProgram from './components/CoursesByTrainingProgram/CoursesByTrainingProgram.jsx';
import VerticalNavigationalBar from './components/VerticalNavigationalBar/VerticalNavigationalBar.jsx';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';
import HorizontalNavigationalBar from './components/HorizontalNavigationalBar/HorizontalNavigationalBar.jsx';


if (document.getElementById("vendorCode").value != null && document.getElementById("vendorCode").value != '')
{
	//TO-DO Обработать несуществующий код
	ReactDOM.render(
		<div>       
			<Header/>
			<HorizontalNavigationalBar/> 
			<Breadcrumbs/>
			<div>
				Тут будет находится страница вендора 	{document.getElementById("vendorCode").value}		
			</div>
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

