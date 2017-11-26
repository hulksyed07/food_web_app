angular.module('IndiaEats').service('AuthenticationService', function($rootScope,$http, $log){
  var service = this;

  service.logout = function(){
    return $http.post('http://localhost:3000/v1/sessions/logout')
      .then(function(){
        $rootScope.currentUser = null;
        sessionStorage.setItem('access_token',null);
        sessionStorage.setItem('currentUser',null);
      });
  }

  service.registerUser = function(user){
  	return  $http.post('http://localhost:3000/v1/sessions/sign_up', {user: user} )
              .then(function(result){
                $rootScope.currentUser = angular.copy(result.data.user);
                sessionStorage.setItem('access_token', result.data.authentication_token);
                sessionStorage.setItem('currentUser', JSON.stringify(angular.copy(result.data.user)));
                return result;
              },
              function(error){
                console.log('error occurred');
                console.log(error);
              })
  }

  service.login = function(user){
    return $http.post('http://localhost:3000/v1/sessions/login',{email: user.email, password: user.password })
      .then(function(result){
                $rootScope.currentUser = angular.copy(result.data.user);
                sessionStorage.setItem('access_token', result.data.authentication_token);
                sessionStorage.setItem('currentUser', JSON.stringify(angular.copy(result.data.user)));
                return result;
      })
  }
})
