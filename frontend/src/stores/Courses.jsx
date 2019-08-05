import { observable, action, computed } from 'mobx';
var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
class Courses {
	@observable coursesByTrainingProgram = [];	
	@observable iscoursesByTrainingProgram = false;

	
	constructor() {
	}	
	@action calculation(codeTrainingProgram)
	{
		this.fetchCoursesByTrainingProgram(this, codeTrainingProgram);
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
	
}

export default new Courses();