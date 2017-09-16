var myModule = angular.module('IndiaEats', ['ngRoute']);

myModule.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/tmpls/categories.html',
			controller: 'CategoriesController',
			controllerAs: 'catCtrl'
		})
		.when('/categories', {
			templateUrl: 'app/tmpls/categories.html',
			controller: 'CategoriesController',
			controllerAs: 'catCtrl'
		})
		.otherwise({redirectTo: '/'})
});