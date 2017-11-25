describe('CategoriesController', function(){
  var CategoriesController;

  beforeEach(module('IndiaEats'));

  beforeEach(inject(function($controller, $rootScope, $q){
    $scope = $rootScope.$new()
    getAllCategoriesMock = {
      getAllCategories: function(){
        var deferred = $q.defer();
        deferred.resolve([{name: "Category 1"}, {name: "Category 2"}]);
        return deferred.promise;
      }
    }
    CategoriesController = $controller('CategoriesController', { $scope: $scope, CategoryService:getAllCategoriesMock});

    $scope.$digest();
  }))

  it('should load all the categories at startup', function(){
    expect(CategoriesController.categories).toEqual([{name: "Category 1"}, {name: "Category 2"}]);
  })
})