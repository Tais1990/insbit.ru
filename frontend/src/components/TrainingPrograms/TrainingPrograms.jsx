import React from 'react'
import PropTypes from 'prop-types';
import styles from './TrainingPrograms.scss';
import TrainingProgram from './TrainingProgram.jsx';

var trainingProgramsConst = [
    {
        codeIcon: "e904",
        fontIcon: "icomoon",
        name: "Microsoft Training",
        count: "472 Courses"
    },
    {
        codeIcon: "f1c0",
        fontIcon: "faFree",
        name: "Oracle",
        count: "145 Courses"
    },
    {
        codeIcon: "f121",
        fontIcon: "faFree",
        name: "WEB-разработка",
        count: "130 Courses"
    },
    {
        codeIcon: "e903",
        fontIcon: "icomoon",
        name: "Java",
        count: "44 Courses"
    },
    {
        codeIcon: "e900",
        fontIcon: "icomoon",
        name: "Компьютерная графика",
        count: "67 Courses"
    },
    {
        codeIcon: "f120",
        fontIcon: "faFree",
        name: "Программирование",
        count: "115 Courses"
    },
    {
        codeIcon: "f10b",
        fontIcon: "faFree",
        name: "Обучение для пользователей",
        count: "14 Courses"
    },
    {
        codeIcon: "E9A1",
        fontIcon: "icomoon",
        name: "Linux",
        count: "21 Courses"
    },
    {
        codeIcon: "f0c2",
        fontIcon: "faFree",
        name: "Сетевые технологии",
        count: "81 Courses"
    },
    {
        codeIcon: "f200",
        fontIcon: "faFree",
        name: "Бизнес-тренинги",
        count: "140 Courses"
    }
]
class TrainingPrograms extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        return <div className = 'training-programs'>        
            {trainingProgramsConst.map(trainingProgram =>                 
                    <TrainingProgram key = {trainingProgram.name} 
                        codeIcon = {String.fromCharCode(parseInt(trainingProgram.codeIcon, 16))} 
                            fontIcon={trainingProgram.fontIcon} 
                            name = {trainingProgram.name} 
                            count={trainingProgram.count}/>
                )
            }
        </div>
    }
}
export default TrainingPrograms;