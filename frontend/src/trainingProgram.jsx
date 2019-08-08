import './assets/scss/main.scss'
import './assets/scss/trainingProgram.scss'
import React from 'react'
import ReactDOM from "react-dom";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import CoursesByTrainingProgram from './components/CoursesByTrainingProgram/CoursesByTrainingProgram.jsx';
import VerticalNavigationalBar from './components/VerticalNavigationalBar/VerticalNavigationalBar.jsx';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';
import HorizontalNavigationalBar from './components/HorizontalNavigationalBar/HorizontalNavigationalBar.jsx';


if (document.getElementById("nameTrainingProgram").value != null && document.getElementById("nameTrainingProgram").value != '' && 
	document.getElementById("vendorCode").value != null && document.getElementById("vendorCode").value != '')
{
	//TO-DO Обработать несуществующий код
	ReactDOM.render(
		<div>       
			<Header/>
			<HorizontalNavigationalBar/> 
			<Breadcrumbs/>
			<div className = 'training-program__container'>
				<VerticalNavigationalBar type = 'trainingPrograms' code = {document.getElementById("nameTrainingProgram").value}/>		
				<CoursesByTrainingProgram codeTrainingProgram = {document.getElementById("nameTrainingProgram").value}/>				
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

