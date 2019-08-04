import { observable, action, computed } from 'mobx';
var urlServer = MODE_NAME == "development" ? 'http://localhost:8080' : '';
class Vendors {
	@observable vendors = [];	
	@observable trainingPrograms = [];
	@observable isLoadVendors = false;
	@observable isLoadTrainingPrograms = false;

	
	constructor() {
		this.fetchDictionaryAction(this);
	}	
	fetchDictionaryAction(comp) {
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
			    	comp.vendors = data;
			    	comp.isLoadVendors = true;
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
			    	comp.trainingPrograms = data;
			    	comp.isLoadTrainingPrograms = true;
				}
			})
			.catch(function(error) {
				console.log('Request failed', error);
			});
			
	}
	@computed get getList()
	{
		var result = [];
		if (this.isLoadVendors && this.isLoadTrainingPrograms)
		{			
			var tp = this.trainingPrograms;
			this.vendors.forEach(function (elem, index) {
				var records = [];
				tp.filter(program => program.vendorName == elem.name).forEach(program => 
					records.push({"name": program.name, "link": "/" + elem.code + "/" + program.code})
					)
	   			result.push({name: elem.name, records: records})
			})
		}
		return result;
	}
}

export default new Vendors();