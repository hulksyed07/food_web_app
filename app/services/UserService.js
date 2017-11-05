angular.module('IndiaEats').service('UserService', function($rootScope,$http, $log){
  var service = this;

  service.avatarFileChanged =  function(event){
    console.log('File changed');
  }

  service.updateAvatar = function(avatar){
    console.log('inside updateAvatar sevice');
    console.log(avatar);
    var formData = new FormData();
    formData['file'] = avatar;
    // console.log(formData);
    // file = FileReader.new
    var headers = new Headers;
    headers['Access-Token'] = sessionStorage.getItem('access_token');
    // headers['content-type'] = 'application/octet-stream';
    headers['Content-type'] = 'undefined';
    // return  $http.post('http://localhost:3000/v1/profiles/update_avatar', {avatar: avatar}, {headers: headers})
    return  $http.post('http://localhost:3000/v1/profiles/update_avatar',
                      { formData },
                      { transformRequest: angular.identity,
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
