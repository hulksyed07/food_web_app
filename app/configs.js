angular.module('IndiaEats').config(function($httpProvider, authTokenInterceptorProvider){
	$httpProvider.interceptors.push('authTokenInterceptor');
});