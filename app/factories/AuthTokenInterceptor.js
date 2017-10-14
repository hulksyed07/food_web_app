// angular.module('IndiaEats').factory('authTokenInterceptor', function($httpProvider){
// 	var authTokenInterceptor = {
// 		request: function(config){
// 			config.headers['Access-Token'] = localStorage.getToken('access_token');
// 			return config;
// 		}

// 	};

// 	return authTokenInterceptor;
// });