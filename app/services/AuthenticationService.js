angular.module('IndiaEats').service('AuthenticationService', function($rootScope,$http, $log){
  var service = this;

  service.logout = function(){
    $rootScope.currentUser = null;
    sessionStorage.setItem('access_token',null);
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
                $rootScope.currentUser = angular.copy(result.data);
                console.log($rootScope.currentUser);
                sessionStorage.setItem('access_token', result.headers()['HTTP_ACCESS_TOKEN']);
                return result;
              },
              function(error){
                console.log('error occurred');
                console.log(error);
              })
  }

  service.login = function(user){
    return $http.post('http://localhost:3000/v1/sessions/login',{email: user.email, password: user.password },{xsrfHeaderName: 'Access-Token'})
      .then(function(result){
                $rootScope.currentUser = angular.copy(result.data);
                console.log($rootScope.currentUser);
                console.log(result);
                $log.info(result);
                // console.log(result.headers['Content-Type']);

                // sessionStorage.setItem('access_token', result.headers['Access-Token']);
                sessionStorage.setItem('access_token', 'hpiuiKwET8z6CvQzP7sb');
                sessionStorage.setItem('currentUser', JSON.stringify(angular.copy(result.data)));

                
                return result;
      },
      function(error){
        console.log('error occurred');
        console.log(error);
      })
  }
})
