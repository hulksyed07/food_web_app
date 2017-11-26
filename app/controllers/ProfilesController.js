angular.module('IndiaEats').controller('ProfilesController',function(UserService, $rootScope){
  var profCtrl = this ;

  profCtrl.avatar = null;
  profCtrl.editedAvatar = null;

  profCtrl.getUserAvatar = function(){
    UserService.getUserAvatar()
      .then(function(result){
        profCtrl.avatar = result;
      },
      function(error){
        console.log(error.status);
      })
  }

  profCtrl.getUserAvatar();

  profCtrl.updateUserAvatar = function(){
    UserService.updateAvatar(profCtrl.editedAvatar)
      .then(function(result){
        profCtrl.avatar = result;
      },
      function(error){
        console.log(error.status);
      })
  }

});