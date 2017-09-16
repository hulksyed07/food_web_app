angular.module('IndiaEats').service('CategoryService', function($http, UtilsService){
	var service = this;

	service.getAllCategories = function() {
		return $http.get('http://localhost:3000/v1/categories')
				.then(function(result){
					return UtilsService.objectToArray(result.data);
				})
	};
})