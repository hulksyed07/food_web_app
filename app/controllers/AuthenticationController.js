angular.module('IndiaEats').controller('AuthenticationController', function(AuthenticationService, $rootScope, $location){
  var authCtrl = this;
  authCtrl.user = {} ;
  authCtrl.currentUser = null ;
  authCtrl.editedUser = {};
  authCtrl.loginUser = {};

  authCtrl.registerUser = function(){
    AuthenticationService.registerUser(authCtrl.editedUser)
      .then(function(result){
        authCtrl.currentUser = result.data;
        authCtrl.editedUser = {};
        $location.url('/my_profile');
      });
  };


  authCtrl.login = function(){
    console.log('button clicked');
    AuthenticationService.login(authCtrl.loginUser)
      .then(function(result){
        console.log($rootScope.currentUser);
        authCtrl.currentUser = result.data;
        authCtrl.loginUser = {};
        $location.url('/my_profile');
      })
  };
});
