// -- Get data items
angular.module('starter')
    .factory('getData', function($http, $q) {
        return {
            fetchItems: function(url) {
                var deferred = $q.defer();

                $http.get(url)
                    .success(function(data) {
                        deferred.resolve(data);
                    }).error(function(msg, code) {
                        deferred.reject(msg);
                    });
                return deferred.promise;
            },
            concatItems: function(dataArr, itemArr) {
                dataArr.push(itemArr);
                return dataArr;
            }
        }

    });