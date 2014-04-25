"use strict"
window.trace = function(g){ console.log(g);}

angular.module('F1000', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		//$locationProvider.html5Mode(true);
		$routeProvider
			.when('/',{
				//templateUrl: "/partials/index"
				//controller: 'MainCtrl'
			})
			.when('/articles/:id',{
				controller: 'DetailCtrl'
			})
			//.otherwise({ redirectTo: '/' });
	}])

	.service('DataLoader', function($q, $http){
		return {
			get: function(){
				var def = $q.defer();
				trace('LOADER:: start...')
				$http({
					url: '/res/data.json',
					method: 'GET',
					dataType: 'json'
				}).success(function(data){
					trace('LOADER:: ..done')
					def.resolve(data.articles)
				}).error(function(e){
					trace('LOADER:: ..failed')
					def.reject(e)
				})

				return def.promise
			}
		}
	})
	.controller('DetailCtrl', function($scope){
		trace('show it');
	})
	.controller('MainCtrl', function($scope, DataLoader){
		trace("MAIN:: initialize");
		
		$scope.currentArticle = null;
		$scope.articles = []
		$scope.list = '/partials/index';



		DataLoader.get().then(function(data){
			trace("MAIN:: ...generate data");
			$scope.articles = data
		})

		$scope.showArticle = function(e, article){
			e.preventDefault();
			//$scope.articles.unshift(article)
			$scope.currentArticle = article;
		}
		$scope.getArticleById = function(id){
			trace('-> get title by id :'+id)
			for (var i=0, article; article=$scope.articles[i];i++){
				trace('    ='+article.id)
				if (article.id === id){
					trace('--found it')
					break;
				}
			}
			return article
		}
	});