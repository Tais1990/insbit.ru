import React from 'react'
import PropTypes from 'prop-types';
import styles from './AboutUs.scss';
import Item from '../Item/Item.jsx';
import SectionBlock from '../SectionBlock/SectionBlock.jsx';
import TextBlock from '../TextBlock/TextBlock.jsx';
import TitleBlock from '../TitleBlock/TitleBlock.jsx';
import ContactUs from '../ContactUs/ContactUs.jsx';
import MapGoogle from '../MapGoogle/MapGoogle.jsx';

class AboutUs extends React.Component {
    constructor() {
        super();
    }

    render(props, state) {
        let {type} = this.props; 
        if (type == 'about')
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
        if (type == 'privacy-policy') {
            return <div className = 'about-us about-us__privacy-policy'>
                <SectionBlock title = 'Политика конфиденциальности' width = 'narrow-width'/>  
                <SectionBlock  color='grey'>
                    <div className = 'container container__privacy-policy'>
                        <h3>Какую информацию мы собираем?</h3>
                        <p>Мы собираем информацию о Вас, когда Вы регистрируетесь на нашем сайте, размещаете заказ или заполняете форму. При заказе
                        или регистрации на нашем сайте, при необходимости, Вас могут попросить ввести: имя, адрес электронной почты, почтовый адрес,
                        номер телефона или информацию о кредитной карте. Впрочем, Вы можете посетить наш сайт анонимно.</p>

                        <h3>Для чего мы используем вашу информацию?</h3>
                        <p> Любая информация, которую мы получаем от Вас, может быть использована одним из следующих способов:</p>
                        <ul>
                            <li>Чтобы персонализировать ваш опыт (ваша информация помогает нам лучше реагировать на ваши индивидуальные потребности)</li>
                            <li>Чтобы улучшить наш веб-сайт (мы постоянно стремимся улучшить наши предложения на основе информации 
                                    и отзывов, которые мы получаем от вас)</li>
                            <li>Улучшение обслуживания клиентов (ваша информация помогает нам более эффективно реагировать на ваши запросы обслуживания 
                                   клиентов и потребности в поддержке)</li>
                            <li>Обработка транзакций (Ваша информация, государственная или частная, не будет продаваться, обмениваться, передаваться 
                                    или передаваться какой-либо другой компании по любой причине, без вашего согласия, кроме как для явной цели доставки 
                                    запрошенного продукта или услуги, запрошенной</li>
                            <li>Для администрирования конкурса, продвижения, опроса или других функций сайта</li>
                            <li>Отправлять периодические электронные письма
                                <ul>
                                    <li>Адрес электронной почты, который вы предоставляете для обработки заказа, будет использоваться только 
                                        для отправки вам информации и обновлений, касающихся вашего заказа.</li>
                                    <li>Если вы решите подписаться на нашу рассылку, вы получите электронные письма, которые могут содержать 
                                        новости компании, обновления, информацию о продуктах или услугах и т. Д.</li>
                                    <li>Примечание. Если в любое время вы хотите отказаться от подписки на получение будущих электронных писем,
                                        мы приводим подробные инструкции по отмене подписки внизу каждого электронного письма.</li>
                                </ul>
                            </li>
                        </ul>

                        <h3>Как мы защищаем вашу информацию?</h3>
                        <p>Мы применяем различные меры безопасности для обеспечения безопасности Вашей личной информации при размещении заказа.</p>

                        <h3>Разглашаем ли мы какую-либо информацию сторонним лицам?</h3>
                        <p>Мы не продаем, не обмениваем или иным образом не передаем сторонним лицам Вашу личную информацию. Это не относится к 
                        доверенным третьим сторонам, которые помогают нам в управлении нашим веб-сайтом, ведении нашего бизнеса или обслуживании Вас, 
                        если эти стороны соглашаются сохранять конфиденциальность этой информации. Мы также можем раскрывать Вашу информацию, когда мы считаем, 
                        что ее публикация соответствует законодательству или защищает наши или иные права, собственность или безопасность. Однако не идентифицирующая личность 
                        информация о посетителях может быть предоставлена другим сторонам для маркетинга, рекламы или иного использования.</p>

                        <h3>Только политика конфиденциальности онлайн</h3>
                        <p>Настоящая политика конфиденциальности онлайн применяется только к информации, собранной через наш сайт, а не к информации,
                         собранной в автономном режиме.</p>

                        <h3>Ваше согласие</h3>
                        <p>Используя наш сайт, Вы соглашаетесь с нашей политикой конфиденциальности.</p>

                        <h3>Изменения в нашей Политике конфиденциальности</h3>
                        <p>Если мы решим изменить нашу политику конфиденциальности, мы опубликуем эти изменения на этой странице.</p>

                        <h3>Связаться с нами</h3>
                        <p>Если есть какие-либо вопросы относительно этой политики конфиденциальности, вы можете связаться с нами, позвонив по телефону
                         +7 (999) 565 55 75 или написав на почту info@insbit.ru</p>

                    </div>
                </SectionBlock>
            </div>
        }
        if (type == 'cancelation') {
            return <div className = 'about-us about-us__cancelation'>
                <SectionBlock title = 'Политика отмены' width = 'narrow-width'/>  
                <SectionBlock  color='grey'>
                    <div className = 'container container__cancelation'>
                        <div className='panel-header'>Online Курсы</div>
                        <div className='panel-body'>
                            <b>Если мы отменяем курс,</b> что случается редко, учащиеся, зарегистрированные на это обучение, получают выбор между:
                            <ol>
                                <li>Получение полного возврата средств или</li>
                                <li>Перепланирование на другие даты, если таковые предлагаются.</li>
                            </ol>
                            <b>Если студент отменяет,</b> то плата за <b>отмену</b> зависит от суммы уведомления:
                            <ul>
                                <li><b>14 и более дней:</b> плата за отмену не взимается (полный возврат средств).</li>
                                <li><b>13 дней или меньше:</b> возврат не производится. Если возможно, мы предложим Вам перенести обучение на следующую дату. 
                                Перепланирование не гарантируется и доступно только в том случае, если дата указана в нашем расписании.</li>
                            </ul>
                            <b>Обратите внимание: </b> если курс, на который вы регистрируетесь, начинается через 2 недели с сегодняшнего дня, 
                            возмещение не будет произведено, если вы отмените его.
                        </div>
                    </div>
                </SectionBlock>
            </div>
        }
        if (type == 'contact') {
            
            return <div className = 'about-us about-us__cancelation'>
                <SectionBlock title = 'Контакты' width = 'narrow-width'/>  
                <SectionBlock title = 'Напишите, и мы Вам поможем' color='grey'>
                    <ContactUs/>  
                    <div className = 'container container__contact'>
                        <MapGoogle/>
                    </div>
                </SectionBlock>
            </div>
        }
        else 
        {
            return <div>
                К сожаление, такой страницы не существует
            </div>
        }
    }
}


AboutUs.propTypes = {
	type: PropTypes.oneOf(['about', 'privacy-policy', 'cancelation', 'contact'])
};
export default AboutUs;