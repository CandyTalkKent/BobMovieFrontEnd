(function (angular) {
	'use strict';


	var inTheaterModule = angular.module('bobMovie.inTheaters', ['ngRoute','moviecat.services.http']);
	inTheaterModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/in_theaters', {
				controller: 'InTheaterListController',
				templateUrl: 'in_theaters/view_in_theaters.html'
			})
			.otherwise({redirectTo: '/in_theaters'});
	}]);

	inTheaterModule.controller('InTheaterListController', ['$scope', 'HttpService', function ($scope, HttpService) {

		$scope.subjects = [];
		//$http({
		//	method: 'GET',
		//	url: '/app/data/data.json'
		//}).then(function successCallback(res) {
		//	//解决了head 里面的 数据问题
		//	//console.log(res.data);
		//	$scope.subjects = res.data.subjects;
		//}, function errorCallback(response) {
		//	console.log("http failure!!!");
		//});
		HttpService.jsonp("https://api.douban.com/v2/movie/in_theaters",{},function(data){
			console.log(data);
			$scope.subjects = data.subjects;
			console.log($scope.subjects);
			$scope.$apply();
		});




	}]);
})(angular);
