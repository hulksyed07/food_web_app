angular.module('IndiaEats').controller('AuthenticationController', function(AuthenticationService, $rootScope, $location){
  var authCtrl = this;
  authCtrl.editedUser = {};
  authCtrl.loginUser = {};

  authCtrl.registerUser = function(){
    AuthenticationService.registerUser(authCtrl.editedUser)
      .then(function(result){
        authCtrl.editedUser = {};
        $location.url('/my_profile');
      });
  };


  authCtrl.login = function(){
    AuthenticationService.login(authCtrl.loginUser)
      .then(function(result){
        authCtrl.loginUser = {};
        $location.url('/my_profile');
      },
      function(error){
        if (error.status == 401){
          authCtrl.loginUser.password = null;
          authCtrl.loginUser.errorMessage = 'Invalid Username/Password!'
        }
        else {
          authCtrl.loginUser.errorMessage = 'Some Error Occurred!'
        }

      })
  };
});

96159647
