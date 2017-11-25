describe('AuthenticationController', function(){
  // var  AuthenticationService = require('../../app/services/AuthenticationService');
  // var  AuthenticationController = require('../../app/controllers/AuthenticationController');

  var AuthenticationController;

  beforeEach(module('IndiaEats'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    AuthenticationController = $controller('AuthenticationController', {
      $scope: scope
    });
  }));

  it('should initiate loginUser and editedUser with blank hash', function(){
    expect(AuthenticationController.loginUser).toEqual({});
    expect(AuthenticationController.editedUser).toEqual({});
  })

})