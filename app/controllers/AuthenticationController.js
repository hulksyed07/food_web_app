angular.module('IndiaEats').controller('AuthenticationController', function(AuthenticationService){
  var authCtrl = this;
  console.log('authCtrl loaded');

  authCtrl.user = {} ;
  authCtrl.currentUser = null ;
  authCtrl.editedUser = {};
  authCtrl.registerUser = function(){
    AuthenticationService.registerUser(authCtrl.editedUser)
    .then(function(result){
      authCtrl.currentUser = result.data;
    });
  }


  // authCtrl.login = function(user){
  //   AuthenticationService.login(user);
  // }
});
