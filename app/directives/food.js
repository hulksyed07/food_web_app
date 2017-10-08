angular.module('IndiaEats').directive('food', function(){

	return {
		template: '<div><p>{{ food.name }}</p><p>Rs {{ food.price }}</p></div>'
	} 
})