import React from 'react'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styles from './CourseEdit.scss';
import VendorsStore from '../../stores/Vendors.jsx';
import { observer } from 'mobx-react';



import {
  withRouter
} from 'react-router-dom'

var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
@observer
class CourseEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.courseData ? 
        {
            name: props.courseData.name, 
            numberCode: props.courseData.numberCode, 
            duration: props.courseData.duration,
            code: props.courseData.code,
            description : props.courseData.description,
            forWhom : props.courseData.forWhom,
            knowledgeRequired : this.arrayToString(props.courseData.knowledgeRequired),
            result : this.arrayToString(this.props.courseData.result),
            htmlContent : props.courseData.htmlContent,
            cost: props.courseData.cost,
            date: props.courseData.date,
            vendor: props.courseData.vendorID,
            trainingProgram: props.courseData.trainingProgramID,
            textError: '',
            type: 'edit'
        } : {
            name: '', 
            numberCode: '', 
            duration: '',
            code: props.code,
            description : '',
            forWhom : '',
            knowledgeRequired : '',
            result : '',
            htmlContent : '<ol>\n' 
            + ' <li> Модуль 1 \n'
            + '     <ol>\n'
            + '         <li>Первый урок</li>\n'
            + '         <li>Второй урок</li>\n'
            + '     </ol>\n'
            + ' </li>\n'
            + ' <li> Модуль 2 </li>\n'
            +'</ol>',
            cost:  '',
            date: '',
            vendor: 0,
            trainingProgram: 0,
            textError: '',
            type: 'create'
        };       

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
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
                htmlContent : this.state.htmlContent,
                type: this.state.type,
                cost: this.state.cost,
                date: this.state.date,
                vendor: this.state.vendor,
                trainingProgram: this.state.trainingProgram
            })
        })
        // подключить обработку ошибки из базы
        .then(res => {
            if (typeof window !== 'undefined')
            {
                window.location.href = "/courseAll";
            }})
        .catch(err => {
            console.log('ERROE');
            console.log(err);
        });
    }
    arrayToString(array){
        let result = '';
        array.map((str) => result = result + str + '\n')        
        return result.substring(0, result.length - 1);
    }
    stringToArray(str) {
        return str.replace(/^\s*/,'').replace(/\s*$/,'').split('\n');
    }

    render(props, state) {
        return <form className = 'course-edit' onSubmit={this.handleSubmit}>
            <div className = 'course-edit__field'>
                <label> Название:</label> <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label>Код:</label><input name="numberCode" type="text" value={this.state.numberCode} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label>Продолжительность:</label> <input name="duration" type="text" value={this.state.duration} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label> Код для url: </label><input name="code" type="text" value={this.state.code} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label> Стоимость:</label> <input name="cost" type="text" value={this.state.cost} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label> Даты проведения:</label> <input name="date" type="text" value={this.state.date} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label> Описание курса:</label> <textarea name="description" value={this.state.description} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label> Для кого:</label> <textarea name="forWhom" value={this.state.forWhom} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label> Необходимая подготовка:</label> <textarea name="knowledgeRequired" value={this.state.knowledgeRequired} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label> Результат обучения:</label> <textarea name="result" value={this.state.result} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label> Содержание курса:</label> <textarea name="htmlContent" value={this.state.htmlContent} onChange={this.handleChange} />
            </div>
            <div className = 'course-edit__field'>
                <label> Вендор:</label>
                <select name = "vendor" value={this.state.vendor} onChange={this.handleChange}>
                    <option disabled value = {0} style = {{display: 'none'}}> -- select an option -- </option>
                    {VendorsStore.vendors.map(vendor => 
                        <option key = {vendor.id} value={vendor.id}>{vendor.name}</option>)
                    }                                     
                </select>
            </div>
            <div className = 'course-edit__field'>
                <label> Напрвление:</label>
                <select name = "trainingProgram" value={this.state.trainingProgram} onChange={this.handleChange}>
                    <option disabled value = {0} style = {{display: 'none'}}> -- select an option -- </option>
                    {VendorsStore.trainingPrograms.map(trainingProgram => 
                        <option key = {trainingProgram.id} value={trainingProgram.id}>{trainingProgram.name} / {trainingProgram.vendorName}</option>)
                    }                                     
                </select>
            </div>
            <div className = 'course-edit__field'>
                <input type="submit" value="Отправить" />
            </div>
            
            <div>{this.state.textError}</div>
          </form>
    }
}
CourseEdit.propTypes = {
	courseData: PropTypes.any,
    code: PropTypes.string
};
export default CourseEdit;