'use strict';

(function () {
	
	TheoryCtrl.inject = ['$scope', 'getData'];
	
	function TheoryCtrl($scope, getData) {
        $scope.pageId = 'Theorie';

        $scope.viewedSlides = $scope.dataItems = [];

        // -- Geit items
        getData.fetchItems('/api/chapters/theorie/week1/list.json').then(function(data) {
                              $scope.dataItems = getData.concatItems($scope.dataItems, data);
                              return $scope.dataItems;
                          })
                          .then(function(dataArr) {
                              getData.fetchItems('/api/chapters/theorie/week2/list.json').then(function(data) {
                                  $scope.dataItems = getData.concatItems(dataArr, data);
                              });
                              return $scope.dataItems;
                          })
                          .then(function(dataArr) {
                              getData.fetchItems('/api/chapters/theorie/week3/list.json').then(function(data) {
                                  $scope.dataItems = getData.concatItems(dataArr, data);
                              });
                          });

	}

	angular.module('starter').controller('TheoryCtrl', TheoryCtrl);
})();

