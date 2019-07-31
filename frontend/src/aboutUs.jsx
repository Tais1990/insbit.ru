import './assets/scss/main.scss'
import React from 'react'
import ReactDOM from "react-dom";
import AboutUs from "./components/AboutUs/AboutUs.jsx";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

ReactDOM.render(
	<div>       
		Идёт загрузка		
	</div>,
	document.getElementById("root")
);
if (document.getElementById("type") != null && document.getElementById("type").value != null && document.getElementById("type").value != '')
{
	ReactDOM.render(
		<div>
			<Header/>
			<AboutUs type={document.getElementById("type").value}/>
			<Footer/>
		</div>,
		document.getElementById("root")
	);
}
else
{
	ReactDOM.render(
		<div>
			К сожалени, такой страницы не существу4ет
		</div>,
		document.getElementById("root")
	);
}

	

