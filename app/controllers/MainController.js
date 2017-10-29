angular.module('IndiaEats').controller('MainController', function(AuthenticationService){
	var mainCtrl = this;

	mainCtrl.logout = function(){
		AuthenticationService.logout();
	};
})