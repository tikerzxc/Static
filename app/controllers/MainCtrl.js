'use strict';

(function () {

    MainCtrl.inject = ['$scope', '$rootScope', '$timeout', '$window', 'updateMenuItems', 'routes', 'getData'];

    function MainCtrl($scope, $rootScope, $timeout, $window, updateMenuItems, routes, getData) {
        $scope.slidersVisited = $scope.menuData = [];
        $scope.lastMenuItem = false;

        //-- Get header menu items
        $scope.menuData = [
            {
                name : 'Inleiding',
                dest: 'home'
            },
            {
                name : 'Tutorials',
                dest: 'tutorials'
            },
            {
                name: 'Theorie',
                dest: 'theory',
                items: [
                    {name: 'Week 1: diafragma, sluitertijd en ISO'},
                    {name: 'Week 2: De juiste belichting'},
                    {name: 'Week 3: Beweging'}
                ]
            },
            {
                name: 'Opdrachten',
                dest: 'assignments',
                items: [
                    {name: 'Inleiding'},
                    {name: '1. Weinig scherptediepte'},
                    {name: '2. Veel scherptediepte'},
                    {name: '3. Lange sluitertijd'},
                    {name: '4. Korte sluitertijd'}
                ]
            },
            {
                name: 'Test jezelf!',
                dest: 'test'
            },
            {
                name: 'Links',
                dest: 'links'
            },
            {
                name: 'Mijn foto\'s!',
                dest: 'photos'
            }
        ];

        // -- Get menu items
        //getData.fetchItems('/menu/menu-items.json').then(function(data) {
        //    $scope.menuData.push(data);
        //});

        // -- Activate slider when clicking on submenu items
        $scope.activateSlider = function(index, itemName, pageId) {

            if(itemName !== pageId.toLowerCase()) {
                var _currRouteName = routes.getRouteName(itemName);
                $window.location.href = '/' + _currRouteName;
            }

            $scope.$broadcast('activateSlider', index);
        };

        // -- Get current route
        routes.getRoute($scope.menuData);

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

