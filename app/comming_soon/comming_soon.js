(function (angular) {
	angular.module('bobMovie.commingSoon', ['ngRoute'])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/comming_soon', {templateUrl: 'comming_soon/view_comming_soon.html'}
				)

				.otherwise({redirectTo: '/in_theaters'});
		}]);
})(angular);
