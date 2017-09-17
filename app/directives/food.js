angular.module('IndiaEats').directive('food', function(){

	return {
		template: '<div><p>{{ food.name }}</p><p>{{ food.price }}</p></div>'
	} 
})