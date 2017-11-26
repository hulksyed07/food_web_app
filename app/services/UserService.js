angular.module('IndiaEats').service('UserService', function($rootScope,$http, $log, $base64){
  var service = this;

  service.avatarFileChanged =  function(event){
    console.log('File changed');
  }

  service.getUserAvatar = function(){
    return  $http.get('http://localhost:3000/v1/profiles/get_user_avatar', {responseType: "arraybuffer"})
              .then(function(result){
                // console.log(result.data);
                // var data64 = $base64.encode(unescape(encodeURIComponent(result.data)));
                // console.log($base64);
                // var data64 = $base64.encode(result.data);
                // console.log(data64);
                // console.log(_arrayBufferToBase64(result.data));
                // console.log(btoa(result.data));
                return 'data:image/jpeg;charset=binary;base64,' + _arrayBufferToBase64(result.data);
                // return 'data:image/jpeg;charset=binary;base64,' + btoa(data64);
                // return 'data:image/jpeg;charset=binary;base64,' + data64;
                // return 'data:image/jpeg;charset=binary;base64,' + result.data;
              },
              function(error){
                console.log('error occurred');
                console.log(error);
              })
  }

  service.updateAvatar = function(avatar){
    return  $http.post('http://localhost:3000/v1/profiles/update_avatar', { avatar: avatar}, {responseType: "arraybuffer" })
              .then(function(result){
                return 'data:image/jpeg;charset=binary;base64,' + _arrayBufferToBase64(result.data);
              },
              function(error){
                console.log('error occurred');
                console.log(error);
              })
  }
})
