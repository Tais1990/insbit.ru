import React from 'react'
import PropTypes from 'prop-types';
import styles from './AboutUs.scss';
import Item from '../Item/Item.jsx';
import SectionBlock from '../SectionBlock/SectionBlock.jsx';
import TextBlock from '../TextBlock/TextBlock.jsx';
import TitleBlock from '../TitleBlock/TitleBlock.jsx';

class AboutUs extends React.Component {
    constructor() {
        super();
    }

    render(props, state) {
        let {type} = this.props; 
        if ({type} = 'about')
        {       
            return <div className = 'about-us about-us__about'>
                <SectionBlock title = 'О нас' width = 'narrow-width'/>  
                <SectionBlock title = 'Приглашаем на обучение в Институт бизнеса и информационных технологий!' color='grey'>
                    <TextBlock>Вашему вниманию предлагаем обучение по различным направлениям, более 500 курсов как для администраторов и разработчиков,
                     так и для обычных пользователей: компьютерные курсы, курсы по Linux (а также его разновидностям) и свободному ПО, курсы 3ds max, 
                     курсы по различным продуктам Microsoft (Windows, Windows Server, Azure, Microsoft 365 и др.), занятия по основам программирования и многое другое. 
                     В нашем учебном центре Вы можете пройти компьютерные подготовительные курсы обучения и курсы повышения квалификации в очных группах (утром, днем, 
                        вечером, по выходным) и индивидуально.</TextBlock>
                     <br/>
                     <TextBlock>В Институте бизнеса и информационных технологий работает молодая, современная и высокотехнологичная команда с большим опытом работы 
                     в сфере сертифицированного обучения. Также мы сотрудничаем с преподавателями различных кафедр Уральского Федерального Университета им. Б.Н. Ельцина.</TextBlock>                     
                     <br/>
                     <TextBlock>Институт бизнеса и информационных технологий является партнеров Microsoft, Astra Linux, Postgres Professional, 
                     Cisco и проводит авторизованное обучение по курсам данных вендеров.</TextBlock>
                     <br/>
                     <TextBlock>Обучение Вы можете пройти как в классах г. Екатеринбурга по адресу Ленина, 41, так и в Москве.</TextBlock>
                     <br/>
                     <TitleBlock text = 'Вы можете связаться с нами по телефону +7 999 565 55 75 или по почте info@insbit.ru'/>
                </SectionBlock>
            </div>
        }
        else
        {
            return <div>
                Блоки с политикой
            </div>
        }
    }
}
AboutUs.propTypes = {
	type: PropTypes.oneOf(['about', 'privacy-policy'])
};
export default AboutUs;