import './js/common.js'
import './assets/scss/main.scss'
import React from 'react'
import ReactDOM from "react-dom";

import TitleBlock from "./components/TitleBlock/TitleBlock.jsx";
import TextBlock from './components/TextBlock/TextBlock.jsx';
import SectionBlock from './components/SectionBlock/SectionBlock.jsx';
import NewsBlock from './components/NewsBlock/NewsBlock.jsx';
import TrainingPrograms from './components/TrainingPrograms/TrainingPrograms.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Button from './components/Button/Button.jsx';
import HorizontalNavigationalBar from './components/HorizontalNavigationalBar/HorizontalNavigationalBar.jsx';

ReactDOM.render(
	<div>       
        <Header/>  
        <HorizontalNavigationalBar/>      
		<SectionBlock title = 'Обучение для IT-специалистов' color='grey'>
        	<TextBlock>Уральская Школа IT приглашает на обучение IT специалистов и пользователей. Мы предлагаем обучение по-различным продуктам и системам для новичков и профессионалов.</TextBlock>
        	<NewsBlock/>
        </SectionBlock>
        {/*
        <SectionBlock title = 'Направления подготовки'>
        	<TrainingPrograms/>
            <div className = 'button_center'>
                <Button title = 'КУРСЫ' type = 'button' color='light' link = '/courseAll'/> 
            </div>  
        </SectionBlock> 
        */}
		{/*
        <TitleBlock text = {'текст для заголловка'}/>
       	<TextBlock><div>Текст статический для просто</div></TextBlock>
        */}
        <Footer/>
	</div>,
	document.getElementById("root")
);