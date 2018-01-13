(function(angular){
	angular.module('bobMovie',[
		'ngRoute'
	,'bobMovie.inTheaters','bobMovie.commingSoon'])
		.config(['$routeProvider', function($routeProvider){
			$routeProvider.otherwise({redirectTo:'/in_theaters'});
		}]);
})(angular);
