angular.module('IndiaEats').service('AuthenticationService', function($rootScope,$http, $log){
  var service = this;

  service.logout = function(){
    var headers = new Headers;
    headers['Access-Token'] = sessionStorage.getItem('access_token');
    console.log(headers);
    return $http.post('http://localhost:3000/v1/sessions/logout', {}, {headers: headers})
      .then(function(){
        $rootScope.currentUser = null;
        sessionStorage.setItem('access_token',null);
        sessionStorage.setItem('currentUser',null);
      });
  }

  service.registerUser = function(user){
  	// var user_obj = { user } ;
   //  var headers = new Headers();
    // headers.append('Content-Type','application/json;charset=utf-8');
    // headers.append('Content-Type','x-www-form-urlencoded');
  	// console.log(user_obj);
    // $http.post('http://localhost:3000/v1/sessions/sign_up', {user: user}, {headers: headers} )
    return  $http.post('http://localhost:3000/v1/sessions/sign_up', {user: user} )
              .then(function(result){
                $rootScope.currentUser = angular.copy(result.data.user);
                sessionStorage.setItem('access_token', result.data.authentication_token);
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

                // sessionStorage.setItem('access_token', result.headers['Access-Token']);
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
