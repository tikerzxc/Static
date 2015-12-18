// -- Get data items
angular.module('starter')
    .factory('routesHelper', function($http, $q) {
        return {
            getRouteByIndex: function(pageIndex) {
                var _currDest =  menuData[pageIndex].dest;
                return _currDest;
            }
        }

    });