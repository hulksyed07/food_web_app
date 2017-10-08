var myModule = angular.module('IndiaEats', ['ngRoute']);

// myModule.config(function($routeProvider){
// 	$routeProvider
// 		// .when('/', {
// 		// 	templateUrl: 'app/tmpls/categories.html',
// 		// 	controller: 'CategoriesController',
// 		// 	controllerAs: 'catCtrl'
// 		// })
// 		.when('/login', {
// 			templateUrl: 'app/tmpls/login.html',
// 			controller: 'AuthenticationController',
// 			controllerAs: 'authCtrl'
// 		})
// 		.when('/sign_up', {
// 			templateUrl: 'app/tmpls/sign_up.html',
// 			controller: 'AuthenticationController',
// 			controllerAs: 'authCtrl'
// 		})
// 		// .otherwise({redirectTo: '/'})
// });


myModule.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/tmpls/sign_up.html',
			controller: 'AuthenticationController',
			controllerAs: 'authCtrl'
		})
		// .when('/login', {
		// 	templateUrl: 'app/tmpls/login.html',
		// 	controller: 'AuthenticationController',
		// 	controllerAs: 'authCtrl'
		// })
		.otherwise({redirectTo: '/'})
});
