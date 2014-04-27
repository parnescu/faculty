"use strict"
window.trace = function(g){ console.log(g);}

angular.module('f1000', ['ngRoute'])
	.config(function($routeProvider,$locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home'
			})
			.when('/articles', {
				templateUrl: 'partials/list'
			})
			.when('/articles/:id', {
				templateUrl: 'partials/list',
				controller: 'DetailsCtrl'
			})
			.otherwise({ redirectTo: '/' });
	});
	