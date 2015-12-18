'use strict';

(function () {

    MainCtrl.inject = ['$scope', '$rootScope', '$timeout', '$window', 'updateMenuItems', 'getData'];

    function MainCtrl($scope, $rootScope, $timeout, $window, updateMenuItems, getData) {
        $scope.slidersVisited = $scope.menuData = [];
        $scope.lastMenuItem = false;

        // -- Get menu items
        $scope.menuData = menuData;

        // -- Activate slider when clicking on submenu items
        $scope.activateSlider = function(index, itemName, itemDest, pageId) {

            if(itemName !== pageId.toLowerCase()) {
                $window.location.href = itemDest;
            }

            $scope.$broadcast('activateSlider', index);
        };

        //-- Open new window for 'links/my photos' pages
        $scope.openWindow = function(name) {
            $window.open(name, name);
        };

        // -- Extend menu items with default data
        $scope.menuItems = updateMenuItems.extendMenuItems($scope.menuData);

        // -- Mark visited menu item if slide is completed
        $scope.markVisitedItems = function(newValue) {
            var _currLength, _currItemIndex, _currItemId;

            if(newValue.length === 0) {
                return;
            }

            _currLength = newValue.length - 1;
            _currItemIndex = newValue[_currLength].index;
            _currItemId =  newValue[_currLength].id;

            updateMenuItems.markItems($scope.menuItems, _currLength, _currItemIndex, _currItemId);
        };

        $rootScope.$on('showTheoryDesc', function (event, data) {
            $scope.$broadcast('showTheoryText', data);
        });

        $rootScope.$on('showTestsResults', function(){
            $scope.$broadcast('showTestPageResults');
        });

        $rootScope.$on('showSlider', function (event, sliderIndex) {
            $scope.$broadcast('activateSliderContainer', sliderIndex);
        });

        $rootScope.$on('activateNextSlider', function (event, sliderIndex) {
            $scope.$broadcast('activateNextSliderImg', sliderIndex);
        });

        $rootScope.$on('activatePrevSlider', function (event, sliderIndex) {
            $scope.$broadcast('activatePrevSliderImg', sliderIndex);
        });

        $rootScope.$on('slideViewed', function (event, data) {
            updateMenuItems.addVisitedSlider(data.id, data.index, $scope.slidersVisited);
        });

        $rootScope.$on('lastMenuItem', function(event, pageId) {
            updateMenuItems.findMenuItem(pageId, $scope.menuData);
        });

        // -- Change video path in tutorials
        $rootScope.$on('changeVideoPath', function(event, src) {
            $scope.$broadcast('changeVideo', src);
        });

        // -- Watch for changes in viewed slides to change menu items
        $scope.$watchCollection('slidersVisited', function(newValue) {
                $scope.markVisitedItems(newValue);
            }
        );

    }

    angular.module('starter').controller('MainCtrl', MainCtrl);
})();

