angular.module('IndiaEats').service('FoodService', function($http, UtilsService){
	service = this;

	service.getFoodsForCategory = function(category){
		var headers = new Headers;
		headers['Access-Token'] = sessionStorage.getItem('access_token');
		return $http.get('http://localhost:3000/v1/categories/' + category.id, {headers: headers})
				.then(function(result){
					return UtilsService.objectToArray(result.data);
				})
	}
})