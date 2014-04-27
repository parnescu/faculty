"use strict"
angular.module('f1000')
	.controller('MainCtrl', function($scope, DataLoader){
		trace("MAIN:: initialize ");
		
		$scope.currentArticle = null;
		$scope.currentRelated = null;
		$scope.articles = []

		// used for relatedArticles and router navigation
		$scope.getArticleById = function(id){
			for (var i=0, article; article=$scope.articles[i];i++){
				if (article.id === id){
					return article;
				}
			}
			return null;
		}

		// use service to load data from given json file
		DataLoader.get().then(function(data){
			trace("MAIN:: ...generate data");
			$scope.articles = data
		});
	});