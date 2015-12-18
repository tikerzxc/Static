'use strict';

(function () {

    linksContentWrap.inject = ['$timeout', '$window'];

    function linksContentWrap($timeout, $window) {

        return {
            restrict: 'E',
            replace: true,
            scope:{
                content: '='
            },
            link: function (scope, elem, attrs) {
                scope.infoVisible = false;

                // -- Open new widown when 'info link' clicked
                scope.showWindow = function(path, name) {
                    $window.open(path, name, 'height=700,width=500,left=700');
                };

                // -- Show item description when button clicked
                scope.showItemDesc = function(index) {

                    $timeout(function() {
                        scope.infoVisible = true;
                        scope.itemDesc = scope.content.items[index].shortDesc;
                        scope.infoShortDesc = scope.content.items[index].infoShortDesc;
                        scope.linkItems = scope.content.items[index].items;
                    });
                }


            },
            templateUrl:'app/directives/templates/links-content-wrap'
        }
    };

    angular.module('starter').directive('linksContentWrap', linksContentWrap);
})();

