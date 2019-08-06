import './js/common.js'
import './assets/scss/main.scss'
import './assets/scss/course.scss'
import React from 'react'
import ReactDOM from "react-dom";

import TitleBlock from "./components/TitleBlock/TitleBlock.jsx";
import TextBlock from './components/TextBlock/TextBlock.jsx';
import SectionBlock from './components/SectionBlock/SectionBlock.jsx';
import TeachingMethodsBlock from './components/TeachingMethodsBlock/TeachingMethodsBlock.jsx';
import AboutCourse from './components/AboutCourse/AboutCourse.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.jsx';


var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
// TO-DO рапустить сюда крутилку и сообщдение об ошибках
ReactDOM.render(
	<div>       
		Пока не произошла заггрузка данных
	</div>,
	document.getElementById("root")
);
fetch(`${urlServer}/api/getCourse?code=${document.getElementById("nameCourse").value}`, 
	{
		method: 'GET',
	})	
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		//console.log('Request successful', data);
		if (data != null && data.ErrorText)
		{
			throw new Error(data.ErrorText);
		}
		if (data != null)
		{
			ReactDOM.render(
				<div>
					<Header/>
					<Breadcrumbs/>
					<SectionBlock>
						<div className = 'course-wrapper'>
							<AboutCourse courseData = {data}/>	
						</div>		        	
			        </SectionBlock>					
					<Footer/>
				</div>,
				document.getElementById("root")
			);
		}
	})
	.catch(function(error) {
		console.log('Request failed', error)
		ReactDOM.render(
			<div>       
				К сожалению, при загрузке курса произошла ошибка: <br/> {error.message}
			</div>,
			document.getElementById("root")
		)

	});

