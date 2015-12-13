'use strict';

(function () {

    updateMenuItems.$inject = ['$timeout'];

    function updateMenuItems($timeout) {

        this.findMenuItem = function(data, menuData) {

            _.each(menuData, function(item) {

                if(item.name.toLowerCase() === data.pageId.toLowerCase()) {

                    $timeout(function() {
                        item.lastVisited = true;
                    });
                }

            });

        };

        this.extendMenuItems = function(menuItems) {

            var _extendedMenuItems =  _.each(menuItems, function(item) {

                if(item.items) {

                    _.each(item.items, function(childItem, num) {
                        _.extend(childItem, {index: num, parent: item.name});
                    });

                }
            });

            return _extendedMenuItems;
        };

        this.addVisitedSlider = function(pageId, slideIndex, slidersData) {
            var _currPageId = pageId;
            var _currSlideIndex = slideIndex;

            var _slideExists = _.findWhere(slidersData,{id: _currPageId, index: _currSlideIndex});

            if(!_slideExists) {
                slidersData.push( {id: _currPageId, index: _currSlideIndex} );
            }
        };

        this.markItems = function(menuItems, currLength, currItemIndex, currItemId) {
            var _updatedMenuObj = null;

            _.each(menuItems, function(item) {

                _.each(item.items, function(childItem, num) {

                    if(childItem.parent === currItemId  && childItem.index === currItemIndex) {

                        childItem.viewed = true;

                        _updatedMenuObj = angular.copy(menuItems);

                        $timeout(function(){
                            menuItems = _updatedMenuObj;
                        });

                    }

                });
            });

        };

    }

    angular.module('starter').service('updateMenuItems', updateMenuItems);
})();