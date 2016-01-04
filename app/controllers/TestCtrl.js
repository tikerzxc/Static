'use strict';

(function () {

    TestCtrl.inject = ['$scope', 'getData'];

    function TestCtrl($scope, getData) {
        $scope.pageId = 'Test';

        $scope.viewedSlides = $scope.dataItems = [];

        getData.fetchItems('api/chapters/tests/list.json').then(function(data) {
            $scope.dataItems = data;
        });

    }

    angular.module('starter').controller('TestCtrl', TestCtrl);
})();

