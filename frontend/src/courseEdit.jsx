import './assets/scss/main.scss'
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

fetch(`${urlServer}/api/getCourse?code=${document.getElementById("nameCourse").value}`, 
	{
		method: 'GET',
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log('Request successful', data);
		if (data != null && data[0] != null)
		{
			ReactDOM.render(
				<div>
					Страница с редактированием курса для админки
						<CourseEdit courseData = {data[0]}/>
				</div>,
				document.getElementById("root")
			);
		}
	})
	.catch(function(error) {
		console.log('Request failed', error)
	});
	

