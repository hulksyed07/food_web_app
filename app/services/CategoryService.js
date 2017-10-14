angular.module('IndiaEats').service('CategoryService', function($http, UtilsService){
	var service = this;

	service.getAllCategories = function() {
		var headers = new Headers;
		headers['Access-Token'] = localStorage.getItem('access_token');
		return $http.get('http://localhost:3000/v1/categories', {headers: headers})
				.then(function(result){
					return UtilsService.objectToArray(result.data);
				})
	};
})