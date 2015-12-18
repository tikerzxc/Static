'use strict';

(function () {
	
	TheoryCtrl.inject = ['$scope', 'getData'];
	
	function TheoryCtrl($scope, getData) {
        $scope.pageId = 'Theorie';

        $scope.viewedSlides = $scope.dataItems = [];

        getData.fetchItems('api/chapters/theorie/list.json').then(function(data) {
            $scope.dataItems = data;
        });

	}

	angular.module('starter').controller('TheoryCtrl', TheoryCtrl);
})();

