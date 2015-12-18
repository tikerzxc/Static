'use strict';

(function () {

    redirectTo.inject = ['$window', 'routesHelper'];

    function redirectTo($window, routesHelper) {

        return {
            priority: 10,
            compile: function(tElem) {

                return {
                    post: function(scope, elem, attrs) {

                        scope.$watch(attrs.ngBind, function(newValue) {

                            angular.forEach(angular.element(document.querySelectorAll('.activate-slider')), function(item){
                                var _currEl = angular.element(item);

                                var activateSliderItem = {
                                                            sliderIndex: _currEl.attr('slider-index'),
                                                            sliderImageIndex: _currEl.attr('slider-image-index')
                                                         };

                                // -- Save 'activeSlider' elem attrs data and redirect to selected page
                                elem.on('click', function() {
                                    $window.localStorage.setItem('activateSlider', JSON.stringify(activateSliderItem) );
                                    $window.location.href = routesHelper.getRouteByIndex( _currEl.attr('page-index') );
                                });

                            });

                        });


                    }
                }
            }

        }
    };

    angular.module('starter').directive('redirectTo', redirectTo);
})();

