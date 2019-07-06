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
            description : props.courseData.description,
            forWhom : props.courseData.forWhom,
            knowledgeRequired : this.arrayToString(props.courseData.knowledgeRequired),
            result : this.arrayToString(this.props.courseData.result),
            htmlContent : props.courseData.htmlContent
        };

        console.log(props.courseData.knowledgeRequired)

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
                name : this.state.name,
                numberCode : this.state.numberCode,
                duration : this.state.duration,
                description : this.state.description,
                forWhom : this.state.forWhom,
                knowledgeRequired : this.stringToArray(this.state.knowledgeRequired),
                result : this.stringToArray(this.state.result),
                htmlContent : this.state.htmlContent
            })
        })
        // подключить обработку ошибки из базы
        .then(res => {console.log('res'); console.log(res)})
        //.then(data => console.log(data))
        .catch(err => console.log(err));
    }
    arrayToString(array){
        let result = '';
        array.map((str) => result = result +  str + '\n')        
        return result.substring(0, result.length - 1);
    }
    stringToArray(str) {
        return str.replace(/^\s*/,'').replace(/\s*$/,'').split('\n');
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
            <label> Описание курса:
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
            </label>
            <label> Для кого:
                    <textarea name="forWhom" value={this.state.forWhom} onChange={this.handleChange} />
            </label>
            <label> Необходимая подготовка:
                    <textarea name="knowledgeRequired" value={this.state.knowledgeRequired} onChange={this.handleChange} />
            </label>
            <label> Результат обучения:
                    <textarea name="result" value={this.state.result} onChange={this.handleChange} />
            </label>
            <label> Содержание курса:
                    <textarea name="htmlContent" value={this.state.htmlContent} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Отправить" />
          </form>
    }
}

CourseEdit.propTypes = {
	courseData: PropTypes.any
};

export default CourseEdit;