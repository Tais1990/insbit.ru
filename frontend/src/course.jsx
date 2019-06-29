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

ReactDOM.render(
	<div>       
        <Header/>
		<div>ВТОРЯ СТРАНИЦА</div>
        <Footer/>
	</div>,
	document.getElementById("root")
);