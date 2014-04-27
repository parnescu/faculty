"use strict"
angular.module('f1000')
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