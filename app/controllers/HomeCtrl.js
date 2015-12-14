'use strict';

(function () {

    HomeCtrl.inject = ['$scope', '$http', 'getItems'];

    function HomeCtrl($scope, getItems) {
        $scope.pageId = 'Home';

        $scope.viewedSlides = [];

        getItems.fetch('/api/chapters/inleidings/list.json').then(function(data) {
            $scope.dataItems = data;
        });

    }

    angular.module('starter').controller('HomeCtrl', HomeCtrl);
})();

