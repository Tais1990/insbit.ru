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
ReactDOM.render(
	<div>       
        <Header/>
		<SectionBlock title = 'Обучение для IT-специалистов' color='grey'>
        	<TextBlock>Уральская Школа IT приглашает на обучение IT специалистов и пользователей. Мы предлагаем обучение по-различным продуктам и системам для новичков и профессионалов.</TextBlock>
        	<TeachingMethodsBlock/>
        </SectionBlock>
        <SectionBlock title = 'Направления подготовки'>
        	<TrainingPrograms/>
        </SectionBlock>
		<TitleBlock text = {'текст для заголловка'}/>
       	<TextBlock><div>Текст статический для просто</div></TextBlock>

	</div>,
	document.getElementById("root")
);