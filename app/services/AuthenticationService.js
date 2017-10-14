angular.module('IndiaEats').service('AuthenticationService', function($http){
  var service = this;

  service.registerUser = function(user){
  	// var user_obj = { user } ;
   //  var headers = new Headers();
    // headers.append('Content-Type','application/json;charset=utf-8');
    // headers.append('Content-Type','x-www-form-urlencoded');
  	// console.log(user_obj);
    // $http.post('http://localhost:3000/v1/sessions/sign_up', {user: user}, {headers: headers} )
    return  $http.post('http://localhost:3000/v1/sessions/sign_up', {user: user} )
              .then(function(result){
                localStorage.setItem('access_token', result.data.authentication_token);
                return result;
              },
              function(error){
                console.log('error occurred');
                console.log(error);
              })
  }

  // service.login = function(user){
  //   $http.post('http://localhost:3000/v1/sessions/login',)
  //   .then
  // }
})
