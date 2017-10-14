angular.module('IndiaEats').controller('AuthenticationController', function(AuthenticationService){
  var authCtrl = this;
  authCtrl.user = {} ;
  authCtrl.currentUser = null ;
  authCtrl.editedUser = {};
  authCtrl.registerUser = function(){
    AuthenticationService.registerUser(authCtrl.editedUser)
      .then(function(result){
        authCtrl.currentUser = result.data;
        authCtrl.editedUser = {};
      });
  }


  // authCtrl.login = function(user){
  //   AuthenticationService.login(user);
  // }
});
