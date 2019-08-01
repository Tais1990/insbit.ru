var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
class Vendors {	
	constructor() {
	    this.vendors = [];
	    this.trainingPrograms = [];
	    this.calculation(this);
	}	
	calculation(comp) {
		/*TO_DO проверить, что сюда лишний раз не заходим*/
		fetch(`${urlServer}/api/getVendorsAll`, 
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
			    	comp.vendors = data
				}
			})
			.catch(function(error) {
				console.log('Request failed', error);
			});
		fetch(`${urlServer}/api/getTrainingProgramsAll`, 
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
			    	comp.trainingPrograms = data
				}
			})
			.catch(function(error) {
				console.log('Request failed', error);
			});
	}

	getTrainingPrograms() {
		return this.trainingPrograms		
	}
	getVendors() {
		return this.vendors		
	}
}

export default new Vendors();