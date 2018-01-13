(function (angular) {
	angular.module('bobMovie.inTheaters', ['ngRoute'])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/in_theaters', {templateUrl: 'in_theaters/view_in_theaters.html'}
				)

				.otherwise({redirectTo: '/in_theaters'});
		}]);
})(angular);
