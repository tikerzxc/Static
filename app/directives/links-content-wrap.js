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
            template: '<div class="content-inner-wrap">\
                         <div class="left-col-wrap">\
                             <div class="title-wrap"><span  class="title">[[content.shortDesc]]</span></div>\
                             <div ng-bind-html="\'[[content.fullDesc]]\' | htmlize" class="desc-wrap text-standard"></div>\
                             <div class="btn-wrap">\
                                <div ng-repeat="item in content.items" class="btn-inner-wrap">\
                                   <div class="action-btn" ng-click="showItemDesc($index)" >[[item.title]]</div>\
                                </div>\
                             </div>\
                         </div>\
                         <div class="right-col-wrap" ng-if="infoVisible">\
                            <div class="title-wrap"> \
                                <span class="title">[[itemDesc]]<span> \
                                <span ng-if="infoShortDesc" class="info-short-desc">[[infoShortDesc]]</span> \
                            </div> \
                            <ul class="links-info-wrap">\
                                <li ng-repeat="item in linkItems">\
                                   <a ng-click="showWindow(item.path, item.title)" class="info-link">[[item.title]]</a> \
                                </li>\
                            <ul>\
                         </div>\
                       </div>' 
        }
    };

    angular.module('starter').directive('linksContentWrap', linksContentWrap);
})();

