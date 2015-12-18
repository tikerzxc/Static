'use strict';

(function () {

    TutorialsCtrl.inject = ['$scope', 'getData'];

    function TutorialsCtrl($scope, getData) {
        $scope.pageId = 'Tutorials';
        $scope.viewedSlides = $scope.dataItems = [];

        //getData.fetchItems('api/chapters/tutorials/list.json').then(function(data) {
        //
        //    $scope.dataItems.push(data);
        //      console.log(data);
        //      console.log($scope.dataItems);
        //    return $scope.dataItems;
        //});


        //-- Get items
        getData.fetchItems('api/chapters/tutorials/tutorials-greeting/list.json').then(function(data) {

                               $scope.dataItems.push([data]);
                               return $scope.dataItems[0];
                           })
                           .then(function(dataArr) {
                               getData.fetchItems('api/chapters/tutorials/tutorials-videos/list.json').then(function(data) {
                                   dataArr.push(data);
                               });
                               return $scope.dataItems;
                           });

    }

    angular.module('starter').controller('TutorialsCtrl', TutorialsCtrl);
})();

