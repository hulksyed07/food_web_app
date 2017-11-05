angular.module('IndiaEats').controller('ProfilesController',function(UserService, $rootScope){
  var profCtrl = this ;

  profCtrl.avatar = null;
  profCtrl.editedAvatar = null;

  profCtrl.updateUserAvatar = function(){
    console.log('inside updateUserAvatar');
    console.log(profCtrl.editedAvatar);
    UserService.updateAvatar(profCtrl.editedAvatar)
      .then(function(result){

      },
      function(error){
        console.log(error.status);
      })
  }

});