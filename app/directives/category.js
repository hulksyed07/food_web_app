angular.module('IndiaEats').directive('category', function(){
	return {
		template: '<li class="nav">{{ category.name }}</li>'
	};
});