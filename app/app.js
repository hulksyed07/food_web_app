var myModule = angular.module('IndiaEats', ['ngRoute', 'base64', 'naif.base64']);

myModule.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/tmpls/home.html'
		})
		.when('/sign_up', {
			templateUrl: 'app/tmpls/sign_up.html',
			controller: 'AuthenticationController',
			controllerAs: 'authCtrl'
		})
		.when('/login', {
			templateUrl: 'app/tmpls/login.html',
			controller: 'AuthenticationController',
			controllerAs: 'authCtrl'
		})
		.when('/categories', {
			templateUrl: 'app/tmpls/categories.html',
			controller: 'CategoriesController',
			controllerAs: 'catCtrl'
		})
		.when('/my_profile', {
			templateUrl: 'app/tmpls/my_profile.html',
			controller: 'ProfilesController',
			controllerAs: 'profCtrl'
		})

		.otherwise({redirectTo: '/'})
});

myModule.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers['Access-Token'] = sessionStorage.getItem('access_token');
      return config;
    }
  };
});

myModule.config(function ($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});

myModule.run(function($rootScope){
	$rootScope.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
});

