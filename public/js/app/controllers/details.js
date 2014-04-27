"use strict"
angular.module('f1000')
	.controller("DetailsCtrl", function($scope, $routeParams){
		$scope.currentArticle = $scope.getArticleById(Number($routeParams.id))
		$scope.currentRelated = [];

		// without this 'if' statement, this fails on reloading a page with '/articles/:id'
		if ($scope.currentArticle && $scope.currentArticle.hasOwnProperty('relatedArticlesIds')){
			$scope.currentRelated = $scope.currentArticle.relatedArticlesIds.reduce(function(items, currId){
				items.push($scope.getArticleById(currId));
				return items;
			},[]);
		}
	})