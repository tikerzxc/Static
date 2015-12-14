 // -- Get current route
 angular.module('starter')
        .factory('getItems', function($http, $q) {
            return {
                fetch: function(url) {
                    var deferred = $q.defer();

                    $http.get(url)
                        .success(function(data) {
                            deferred.resolve(data);
                        }).error(function(msg, code) {
                            deferred.reject(msg);
                        });
                    return deferred.promise;
                }
            }

        });