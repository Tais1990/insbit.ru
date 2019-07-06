
import './assets/scss/main.scss'
import './assets/scss/course.scss'
import React from 'react'
import ReactDOM from "react-dom";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import SectionBlock from './components/SectionBlock/SectionBlock.jsx';
import CourseAll from './components/CourseAll/CourseAll.jsx';




var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
// TO-DO рапустить сюда крутилку и сообщдение об ошибках
ReactDOM.render(
	<div>       
		Пока не произошла заггрузка данных
	</div>,
	document.getElementById("root")
);
fetch(`${urlServer}/api/getAll`, 
	{
		method: 'GET',
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log('Request successful', data);
		if (data != null)
		{
			ReactDOM.render(
				<div>
					<Header/>
					<SectionBlock title = 'Информация о всех курсах'>
						<div className = 'course-wrapper_broad'>								
							<CourseAll courses = {data}/>
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
	});

