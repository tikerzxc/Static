'use strict';

(function () {

    AssignmentsCtrl.inject = ['$scope', 'getData'];

    function AssignmentsCtrl($scope, getData) {
        $scope.pageId = 'Opdrachten';

        $scope.viewedSlides = $scope.dataItems = [];

        getData.fetchItems('api/chapters/opdrachten/list.json').then(function(data) {
            $scope.dataItems = data;
        });

    }

    angular.module('starter').controller('AssignmentsCtrl', AssignmentsCtrl);
})();

