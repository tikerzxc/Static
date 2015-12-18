'use strict';

(function () {

    TutorialsCtrl.inject = ['$scope', 'getData'];

    function TutorialsCtrl($scope, getData) {
        $scope.pageId = 'Tutorials';
        $scope.viewedSlides = $scope.dataItems = [];

        getData.fetchItems('api/chapters/tutorials/list.json').then(function(data) {
            $scope.dataItems.push(data);
        });

    }

    angular.module('starter').controller('TutorialsCtrl', TutorialsCtrl);
})();

