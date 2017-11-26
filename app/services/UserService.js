angular.module('IndiaEats').service('UserService', function($rootScope,$http, $log){
  var service = this;

  service.avatarFileChanged =  function(event){
    console.log('File changed');
  }

  service.getUserAvatar = function(){
    return  $http.get('http://localhost:3000/v1/profiles/get_user_avatar')
              .then(function(result){
                console.log(result);
                // var data64 = $base64.encode(unescape(encodeURIComponent(result)));
                // console.log(data64);
                return 'data:image/jpeg;charset=binary;base64,' + _arrayBufferToBase64(result);
              },
              function(error){
                console.log('error occurred');
                console.log(error);
              })
  }

  service.updateAvatar = function(avatar){
    return  $http.post('http://localhost:3000/v1/profiles/update_avatar', { avatar: avatar })
              .then(function(result){
                $rootScope.currentUser.avatar = angular.copy(result.data.avatar);
                sessionStorage.setItem('access_token', result.data.authentication_token);
                sessionStorage.setItem('currentUser', JSON.stringify(angular.copy(result.data.user)));
                return result;
              },
              function(error){
                console.log('error occurred');
                console.log(error);
              })
  }
})
