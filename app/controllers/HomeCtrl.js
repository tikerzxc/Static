'use strict';

(function () {

    HomeCtrl.inject = ['$scope', '$http', 'getData'];

    function HomeCtrl($scope, getData) {
        $scope.pageId = 'Home';

        $scope.viewedSlides = $scope.dataItems = [];

        // -- Get items
        getData.fetchItems('/api/chapters/inleidings/list.json').then(function(data) {
            $scope.dataItems = data;
        });
    }

    angular.module('starter').controller('HomeCtrl', HomeCtrl);
})();

