(function (angular) {
	'use strict';
	var data = {
		"count": 3,
		"start": 0,
		"total": 30,
		"subjects": [
			{
				"rating": {
					"max": 10,
					"average": 7.3,
					"stars": "40",
					"min": 0
				},
				"genres": [
					"动作",
					"奇幻",
					"冒险"
				],
				"title": "勇敢者游戏：决战丛林",
				"casts": [
					{
						"alt": "https://movie.douban.com/celebrity/1044707/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p196.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p196.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p196.jpg"
						},
						"name": "道恩·强森",
						"id": "1044707"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1286162/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56350.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56350.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56350.jpg"
						},
						"name": "凯文·哈特",
						"id": "1286162"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1049492/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35722.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35722.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35722.jpg"
						},
						"name": "杰克·布莱克",
						"id": "1049492"
					}
				],
				"collect_count": 20257,
				"original_title": "Jumanji: Welcome to the Jungle",
				"subtype": "movie",
				"directors": [
					{
						"alt": "https://movie.douban.com/celebrity/1040862/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515078777.46.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515078777.46.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515078777.46.jpg"
						},
						"name": "杰克·卡斯丹",
						"id": "1040862"
					}
				],
				"year": "2017",
				"images": {
					"small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506258944.jpg",
					"large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506258944.jpg",
					"medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506258944.jpg"
				},
				"alt": "https://movie.douban.com/subject/26586766/",
				"id": "26586766"
			},
			{
				"rating": {
					"max": 10,
					"average": 5.8,
					"stars": "30",
					"min": 0
				},
				"genres": [
					"喜剧",
					"爱情"
				],
				"title": "前任3：再见前任",
				"casts": [
					{
						"alt": "https://movie.douban.com/celebrity/1275667/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p14025.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p14025.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p14025.jpg"
						},
						"name": "韩庚",
						"id": "1275667"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1275564/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.jpg"
						},
						"name": "郑恺",
						"id": "1275564"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1342252/",
						"avatars": {
							"small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408089064.98.jpg",
							"large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408089064.98.jpg",
							"medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1408089064.98.jpg"
						},
						"name": "于文文",
						"id": "1342252"
					}
				],
				"collect_count": 102585,
				"original_title": "前任3：再见前任",
				"subtype": "movie",
				"directors": [
					{
						"alt": "https://movie.douban.com/celebrity/1332171/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1391439365.41.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1391439365.41.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1391439365.41.jpg"
						},
						"name": "田羽生",
						"id": "1332171"
					}
				],
				"year": "2017",
				"images": {
					"small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.jpg",
					"large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.jpg",
					"medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.jpg"
				},
				"alt": "https://movie.douban.com/subject/26662193/",
				"id": "26662193"
			},
			{
				"rating": {
					"max": 10,
					"average": 7.4,
					"stars": "40",
					"min": 0
				},
				"genres": [
					"剧情",
					"爱情",
					"战争"
				],
				"title": "无问西东",
				"casts": [
					{
						"alt": "https://movie.douban.com/celebrity/1041014/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.jpg"
						},
						"name": "章子怡",
						"id": "1041014"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1041404/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.jpg"
						},
						"name": "黄晓明",
						"id": "1041404"
					},
					{
						"alt": "https://movie.douban.com/celebrity/1077991/",
						"avatars": {
							"small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.jpg",
							"large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.jpg",
							"medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.jpg"
						},
						"name": "张震",
						"id": "1077991"
					}
				],
				"collect_count": 36987,
				"original_title": "无问西东",
				"subtype": "movie",
				"directors": [
					{
						"alt": "https://movie.douban.com/celebrity/1313682/",
						"avatars": {
							"small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.jpg",
							"large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.jpg",
							"medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.jpg"
						},
						"name": "李芳芳",
						"id": "1313682"
					}
				],
				"year": "2012",
				"images": {
					"small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg",
					"large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg",
					"medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg"
				},
				"alt": "https://movie.douban.com/subject/6874741/",
				"id": "6874741"
			}
		],
		"title": "正在上映的电影-北京"
	}



	var inTheaterModule = angular.module('bobMovie.inTheaters', ['ngRoute']);
	inTheaterModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/in_theaters', {
			ontroller: 'InTheaterListController',
			templateUrl: 'in_theaters/view_in_theaters.html'
		})
			.otherwise({redirectTo: '/in_theaters'});
	}]);

	inTheaterModule.controller('InTheaterListController',['$scope',function($scope){
		$scope.subjects = [ ];
		$scope.subjects = data.subjects;
	}]);
})(angular);
