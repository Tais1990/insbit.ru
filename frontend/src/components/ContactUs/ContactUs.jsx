import React from 'react'
import PropTypes from 'prop-types';
import styles from './ContactUs.scss';

var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
class ContactUs extends React.Component {
    constructor() {
        super();
        this.state = 
        {
            name: '', 
            email: '', 
            phone: '',
            message: ''            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`${urlServer}/api/createOutbox`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify( {                
                name : this.state.name,
                email : this.state.email,
                phone : this.state.phone,
                message : this.state.message                
            })
        })
        // подключить обработку ошибки из базы
        .then(res => {
            if (typeof window !== 'undefined')
            {
                window.location.href = "/";
            }})
        .catch(err => {
            console.log('ERROE');
            console.log(err);
        });
    }

    render(props, state) {        
        return <form className = 'contact-us' onSubmit={this.handleSubmit}>
            <div className = 'contact-us__field'>
                <label> Имя:</label> <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className = 'contact-us__field'>
                <label>Email:</label><input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className = 'contact-us__field'>
                <label>Телефон:</label> <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} />
            </div>
            
            <div className = 'contact-us__field'>
                <label> Сообщение:</label> <textarea name="message" value={this.state.message} onChange={this.handleChange} />
            </div>
            
            <div className = 'contact-us__field contact-us__button'>
                <label> </label><input type="submit" value="Отправить" />
            </div>
            {/*TO-DO подключить отображение ошибки целиком на запрос и для каждого поля в отдеьности*/}

          </form>
    }
}
export default ContactUs;