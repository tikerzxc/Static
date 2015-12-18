'use strict';

(function () {

    LinksCtrl.inject = ['$scope', 'getData'];

    function LinksCtrl($scope, getData) {
        $scope.pageId = 'Links';

        $scope.viewedSlides = $scope.dataItems = [];

        // -- Get items
        getData.fetchItems('api/chapters/links/list.json').then(function(data) {
            $scope.dataItems = getData.concatItems($scope.dataItems, data);
            return $scope.dataItems;
        });

    }

    angular.module('starter').controller('LinksCtrl', LinksCtrl);
})();
