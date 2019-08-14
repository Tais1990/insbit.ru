import React from 'react'
import PropTypes from 'prop-types';
import styles from './HorizontalNavigationalBar.scss';
import MenuRecord from './MenuRecord.jsx';
var menu = [
    {
        name: "Каталог курсов",
        records: [
            {
                text: "Каталог",
                link: "/catalog"
            }
        ]
    }, {
        name: "Обучение",
        records: [
            {
                text: "Обучение в нашем классе",
                link: "/teachingMethods/live-online"
            }, {
                text: "Индивидуальные занятия",
                link: "/teachingMethods/self-paced"
            }, {
                text: "Корпоративные курсы",
                link: "/teachingMethods/customized-onsite"
            }
        ]
    }, 
]

class HorizontalNavigationalBar extends React.Component {
    constructor() {
        super();
    }
    render(props, state) {
        
        return ( 
            <div className = 'horizontal-navigational-bar'>               
                { menu.map(elem => <MenuRecord key = {elem.name} name = {elem.name} records = {elem.records}/>)}
            </div>
        )
    }
}
HorizontalNavigationalBar.propTypes = {

};
export default HorizontalNavigationalBar;