'use strict';

(function () {

    tutorialsShortDesc.inject = ['$compile'];

    function tutorialsShortDesc($compile) {

        return {
            restrict: 'C',
            scope: {
                content: '='
            },
            compile: function(tElem) {

                return {
                    post: function(scope, elem, attrs) {
                        var _btns = null;

                        if(typeof scope.content.linkItems !== 'undefined') {

                            angular.forEach(scope.content.linkItems, function(item, index) {
                                var _linksData = scope.content.linkItems;

                                _btns = $compile( angular.element('<a href="" index="' + index +  '"  src="' + item.src + '" id="' + item.id + '"   class="hot-text-link show-video">' + item.text + '</a><br><br>') )(scope);
                                elem.append(_btns);
                            });

                        }


                    }
                }
            },
            template: '<span ng-bind-html="\'[[content.shortDesc]]\' | htmlize" class="title"></span>'

        }
    };

    angular.module('starter').directive('tutorialsShortDesc', tutorialsShortDesc);
})();

