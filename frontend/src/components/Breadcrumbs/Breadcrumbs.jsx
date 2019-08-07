import React from 'react'
import PropTypes from 'prop-types';
import styles from './Breadcrumbs.scss';
import { observer } from 'mobx-react';
import CoursesStore from '../../stores/Courses.jsx';
import VendorsStore from '../../stores/Vendors.jsx';

const mapCode = {
    "": {
        name : "Главная", 
        link : "/"
    },
    "catalog": {
        name : "Католог курсов",
        link : "/catalog"
    },    
    "about-us": {
        name: "Информация",
        link: "/about-us/about"
    },
    "about": {
        name: "О нас",
        link: "/about-us/about"
    },
    "contact": {
        name: "Контакты",
        link: "/about-us/contact"
    },
    "privacy-policy": {
        name: "Политика конфиденциальности",
        link: "/about-us/privacy-policy"
    },
    "cancelation": {
        name: "Политика отмены",
        link: "/about-us/cancelation"
    },
    "teachingMethods": {
        name: "То, что надо убрать",
        link: "/"
    },
    "live-online": {
        name: "Живые online-классы",
        link: "/teachingMethods/live-online"
    },
    "self-paced": {
        name: "Самостоятельное обучение",
        link: "/teachingMethods/self-paced"
    },
    "customized-onsite": {
        name: "Индивидуальный подход к каждому клиенту",
        link: "/teachingMethods/customized-onsite"
    }

};

const arrayCodeCut = ["teachingMethods"]
@observer
class Breadcrumbs extends React.Component {
    constructor(props) {
        super();
        this.state = {};
        if (typeof window !== 'undefined')
        {
            var url = window.location.pathname;
            //url = "/teachingMethods/customized-onsite"               
            
            this.state = {
                url: url,
                path: url.split('/'),
                type: url.split('/')[1] // хмм, переделать потом по понятнее
            };
        }
    }

    dereferentiation(code, index)
    {
        var result = {
            name: code,
            link: "/"
        }
        if (mapCode[code])
        {
            result = mapCode[code];         
        } 
        else 
        {
            if (this.state.type === 'catalog')
            {
                // обработка страниц вендера, направлений, курсов
                // пока считаем, что в качестве нестатики могут приходить только они
                //TO-DO сделаьть более позднюю обработку позже
                //вендер
                if (index == 2)
                {
                    result = {
                        name: VendorsStore.getNameVendorByCode(code),
                        link: this.state.path.slice(0, 3).join('/')
                    }
                }
                // направление обучения
                if (index == 3)
                {
                    result = {
                        name: VendorsStore.getNameTrainingProgramByName(code),
                        link: this.state.path.slice(0, 4).join('/')
                    }
                }
                // страница курса
                if (index == 4)
                {
                    result = {
                        name: CoursesStore.getNameCourseByCode(code),
                        link: this.state.path.slice(0, 5).join('/')
                    }
                } 
            }                         
        }
        return <a href = {result.link}> {result.name}</a>
        
    }
    render(props, state) {
        // спеицальный проверки, чтобы дождатся результатов из mobx
        if (this.state.type === 'catalog')
        {
            let isLoad = false;
            isLoad = VendorsStore.isLoadTrainingPrograms && VendorsStore.isLoadVendors; 
            if (isLoad && this.state.path > 4)
                isLoad = CoursesStore.isLoadCourses      
        }
        return <div className = 'breadcrumbs'>
            {this.state.path.filter(code => !arrayCodeCut.includes(code)).map((elem, index) => 
                
                    <div className = {`breadcrumbs__record ${elem === "" ? '' : 'breadcrumbs__record_not-first'}`} key = {elem}>
                        {this.dereferentiation(elem, index)}
                    </div>
                
                )}
        </div> 
    }        
}
export default Breadcrumbs;