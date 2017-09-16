angular.module('IndiaEats').directive('category', function(){
	return {
		template: '<div>{{ category.name }}</div>'
	};
});