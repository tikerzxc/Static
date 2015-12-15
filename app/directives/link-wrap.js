'use strict';

(function () {

    linkWrap.inject = [];

    function linkWrap() {

        return {
            restrict: 'C',
            scope: {
                text: '=',
                index: '='
            },
            compile: function(tElem) {

                return {
                    post: function(scope, elem, attrs) {

                        elem.on('click', function() {
                            scope.$emit('showTheoryDesc', { text: scope.text });
                            scope.$emit('showTheoryDesc', { text: scope.text });

                            angular.forEach(angular.element(document.querySelectorAll('.link-wrap a span')), function(item, index){
                                var _currEl = angular.element(item);

                                if(index === scope.index) {
                                    _currEl.addClass('active');
                                    _currEl.addClass('active');
                                }

                                if( _currEl.hasClass('active') && index !== scope.index ) {
                                    _currEl.removeClass('active');
                                    _currEl.addClass('visited');
                                }
                            });

                        });

                    }
                }
            }
        }
    };

    angular.module('starter').directive('linkWrap', linkWrap);
})();

