import { observable, action, computed } from 'mobx';
var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
class Courses {
	@observable coursesByTrainingProgram = [];	
	@observable iscoursesByTrainingProgram = false;
	@observable courses = [];	
	@observable isLoadCourses = false;

	
	constructor() {
		this.fetchCoursesName(this);
	}	
	@action calculation(codeTrainingProgram)
	{
		this.fetchCoursesByTrainingProgram(this, codeTrainingProgram);
	}
	@action calculationByCourseCode(codeCourse)
	{
		if (this.isLoadCourses)
		{
			this.fetchCoursesByTrainingProgram(this, this.getCodeTrainingProgramByCode(codeCourse));
		}
		
	}
	// получаем данные о курсах выбранного направления бучения
	fetchCoursesByTrainingProgram(comp, codeTrainingProgram) {
		fetch(`${urlServer}/api/getCoursesByTrainingProgram/${codeTrainingProgram}`, 
			{
				method: 'GET',
			})
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				//console.log('Request successful', data);				
				if (data != null)
				{				
			    	comp.coursesByTrainingProgram = data;
			    	comp.iscoursesByTrainingProgram = true;
				}				
			})
			.catch(function(error) {
				console.log('Request failed', error);
			});
	}
	// АААА. не понятно насколько это хороший вариаент
	fetchCoursesName(comp) {
		/*TO_DO проверить, что сюда лишний раз не заходим*/
		fetch(`${urlServer}/api/getAll`, 
			{
				method: 'GET',
			})
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				//console.log('Request successful', data);
				if (data != null)
				{
					comp.courses = data;
					comp.isLoadCourses = true;
				}
			})
			.catch(function(error) {
				console.log('Request failed', error);
			});
	}
	@action getNameCourseByCode(code)
	{
		var result = "";
		if (this.isLoadCourses)
		{	
			var course = this.courses.filter(course => course.code == code)[0];
			if (course)
			{
				return course.name;	
			}		
		}
		return result;
	}
	@action getCodeTrainingProgramByCode(code)
	{
		var result = "";
		if (this.isLoadCourses)
		{	
			var course = this.courses.filter(course => course.code == code)[0];
			if (course)
			{
				return course.trainingProgramCode;	
			}		
		}
		return result;
	}
	@action getNameTrainingProgramByCode(code)
	{
		var result = "";
		if (this.isLoadCourses)
		{	
			var course = this.courses.filter(course => course.code == code)[0];
			if (course)
			{
				return course.trainingProgramName;	
			}		
		}
		return result;
	}
	@action getTrainingProgramByCode(code)
	{
		var result = "";
		if (this.isLoadCourses)
		{	
			var course = this.courses.filter(course => course.code == code)[0];
			if (course)
			{
				return {"name": course.trainingProgramName, "code": course.trainingProgramCode};	
			}		
		}
		return result;
	}
	// выводим курсы данного направления, 
	@action getCoursesParentTrainingProgram(codeCourse)
	{
		var result = [];
		if (this.isLoadCourses)
		{				
			var courseCurrent = this.courses.filter(course => course.code == codeCourse)[0];
			if (courseCurrent)
			{
				this.courses.filter(course => course.trainingProgramCode == courseCurrent.trainingProgramCode)
					.forEach(course => 
						result.push({"name" : course.name, "link" : "/" + course.code})
					) 
				return result;	
			}		
		}
		return result;
	}
	
}

export default new Courses();