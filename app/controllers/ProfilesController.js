angular.module('IndiaEats').controller('ProfilesController',function($rootScope){
	var profCtrl = this ;
	$rootScope.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
});