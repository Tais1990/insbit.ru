import './assets/scss/main.scss'
import './assets/scss/course.scss'
import React from 'react'
import ReactDOM from "react-dom";

import CourseEdit from "./components/CourseEdit/CourseEdit.jsx";

var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
// TO-DO рапустить сюда крутилку и сообщдение об ошибках
ReactDOM.render(
	<div>       
		Идёт загрузка		
	</div>,
	document.getElementById("root")
);

//console.log('code', document.getElementById("nameCourse").value)
if (document.getElementById("nameCourse").value != null && document.getElementById("nameCourse").value != '')
{
	// если это редактирование карточки
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
					<div className = 'course-wrapper'>
						Скоро тут будет нормальная админка
						<CourseEdit courseData = {data}/>
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
}
else
{
	// если это загрузка новой карточки
	// для начала, запросим новый код из бека
	fetch(`${urlServer}/api/getNewCode`, 
		{
			method: 'GET',
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			if (data.code)
			{
				ReactDOM.render(
					<div className = 'course-wrapper'>
						Скоро тут будет нормальная админка
						<CourseEdit code = {data.code}/>
					</div>,
					document.getElementById("root")
				)
			}
		})
		.catch(function(error) {
			console.log('Request failed', error)
		});
}

	

