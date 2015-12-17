'use strict';

(function () {

    AssignmentsCtrl.inject = ['$scope', 'getData'];

    function AssignmentsCtrl($scope, getData) {
        $scope.pageId = 'Opdrachten';

        $scope.viewedSlides = $scope.dataItems = [];

        // -- Get items
        getData.fetchItems('api/chapters/opdrachten/inleiding/list.json').then(function(data) {
                             $scope.dataItems = getData.concatItems($scope.dataItems, data);
                             return $scope.dataItems;
                          })
                          .then(function(dataArr) {
                              getData.fetchItems('api/chapters/opdrachten/weinig-scherptediepte/list.json').then(function(data) {
                                  $scope.dataItems = getData.concatItems(dataArr, data);
                              });
                              return $scope.dataItems;
                          })
                          .then(function(dataArr) {
                              getData.fetchItems('api/chapters/opdrachten/veel-scherptediepte/list.json').then(function(data) {
                                  $scope.dataItems = getData.concatItems(dataArr, data);
                              });
                              return $scope.dataItems;
                          })
                          .then(function(dataArr) {
                              getData.fetchItems('api/chapters/opdrachten/lange-sluitertijd/list.json').then(function(data) {
                                  $scope.dataItems = getData.concatItems(dataArr, data);
                              });
                              return $scope.dataItems;
                          })
                          .then(function(dataArr) {
                              getData.fetchItems('api/chapters/opdrachten/korte-sluitertijd/list.json').then(function(data) {
                                  $scope.dataItems = getData.concatItems(dataArr, data);
                              });
                              return $scope.dataItems;
                          });

    }

    angular.module('starter').controller('AssignmentsCtrl', AssignmentsCtrl);
})();

