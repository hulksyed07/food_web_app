angular.module('IndiaEats').service('FoodService', function($http, UtilsService){
	service = this;

	service.getFoodsForCategory = function(category){
		return $http.get('http://localhost:3000/v1/categories/' + category.id)
				.then(function(result){
					return UtilsService.objectToArray(result.data);
				})
	}
})