import './js/common.js'
import './assets/scss/main.scss'
import React from 'react'
import ReactDOM from "react-dom";

import TitleBlock from "./components/TitleBlock/TitleBlock.jsx";
import TextBlock from './components/TextBlock/TextBlock.jsx';
import SectionBlock from './components/SectionBlock/SectionBlock.jsx';
import TeachingMethodsBlock from './components/TeachingMethodsBlock/TeachingMethodsBlock.jsx';
import TrainingPrograms from './components/TrainingPrograms/TrainingPrograms.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
// TO-DO рапустить сюда крутилку и сообщдение об ошибках
ReactDOM.render(
	<div>       
		Пока не произошла заггрузка данных
	</div>,
	document.getElementById("root")
);
fetch(`http://localhost:8080/api/getCourse?code=${document.getElementById("nameCourse").value}`, 
	{
		method: 'GET',
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		//console.log('Request successful', data);
		if (data != null && data[0] != null)
		{
			ReactDOM.render(
				<div>
					<Header/>
					<div>Здравствуйте! К сожалению сайт находится ещё в разработке, позже на этой старнице будет информация о</div>
					<div> Название курса: {data[0].name} </div>
					<Footer/>
				</div>,
				document.getElementById("root")
			);
		}
	})
	.catch(function(error) {
		console.log('Request failed', error)
	});

