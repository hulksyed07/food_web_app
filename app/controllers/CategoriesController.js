angular.module('IndiaEats').controller('CategoriesController', function(CategoryService, FoodService){
	catCtrl = this;

	catCtrl.categories = null;
	catCtrl.foods = null;


	catCtrl.setAllCategories = function(){
	    CategoryService.getAllCategories()
	        .then( function(result) {
	            console.log(result);
	            catCtrl.categories = result ;
	        });

	};

	catCtrl.setAllCategories();

	catCtrl.setCurrentCategory = function(category) {
		catCtrl.currentCategory = category;
		FoodService.getFoodsForCategory(category)
			.then(function(result){
				console.log(result);
				catCtrl.foods = result ;
			});
	}
})