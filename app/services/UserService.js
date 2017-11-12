angular.module('IndiaEats').service('UserService', function($rootScope,$http, $log){
  var service = this;

  service.avatarFileChanged =  function(event){
    console.log('File changed');
  }

  service.getUserAvatar = function(){
    var headers = new Headers;
    headers['Access-Token'] = sessionStorage.getItem('access_token');
    return  $http.get('http://localhost:3000/v1/profiles/get_user_avatar', { headers: headers})
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
    // var formData = new FormData();
    // formData['file'] = avatar;
    // console.log(formData);
    // file = FileReader.new
    var headers = new Headers;
    headers['Access-Token'] = sessionStorage.getItem('access_token');
    // headers['content-type'] = 'application/octet-stream';
    // headers['Content-type'] = 'undefined';
    // return  $http.post('http://localhost:3000/v1/profiles/update_avatar', {avatar: avatar}, {headers: headers})
    return  $http.post('http://localhost:3000/v1/profiles/update_avatar',
                      // { formData },
                      { avatar: avatar },
                      { 
                        // transformRequest: angular.identity,
                        headers: headers})
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
