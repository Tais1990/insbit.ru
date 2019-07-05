import React from 'react'
import PropTypes from 'prop-types';
import styles from './CourseEdit.scss';

var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';

class CourseEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.courseData.name, 
            numberCode: props.courseData.numberCode, 
            duration: props.courseData.duration,
            code: props.courseData.code,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        alert('Сочинение отправлено: ' + this.state.name);
        event.preventDefault();
        fetch(`${urlServer}/api/editCourse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify( {
                code : this.state.code,
                name : this.state.name
            })
        })
        .then(res => {console.log('res'); console.log(res)})
        //.then(data => console.log(data))
        .catch(err => console.log(err));
    }

    render(props, state) {        
        
        return <form onSubmit={this.handleSubmit}>
            <label> Название:
                    <textarea name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
                Код:
                    <input name="numberCode" type="text" value={this.state.numberCode} onChange={this.handleChange} />
            </label>
            <label>
                Продолжительность:
                    <input name="duration" type="text" value={this.state.duration} onChange={this.handleChange} />
            </label>
            <label>
                Код для url:
                    <input name="code" type="text" value={this.state.code} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Отправить" />
          </form>
    }
}

CourseEdit.propTypes = {
	courseData: PropTypes.any
};

export default CourseEdit;