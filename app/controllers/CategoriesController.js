angular.module('IndiaEats').controller('CategoriesController', function(CategoryService){
	catCtrl = this;

	catCtrl.categories = {}

	catCtrl.setAllCategories = function(){
	    CategoryService.getAllCategories()
	        .then( function(result) {
	            console.log(result);
	            catCtrl.categories = result ;
	        });

	};

	catCtrl.setAllCategories();
})