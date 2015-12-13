'use strict';

(function () {

    showVideo.inject = ['updateMenuItems', '$timeout'];

    function showVideo(updateMenuItems, $timeout) {

        return {
            restrict: 'C',
            scope: {},
            link: function (scope, elem, attrs) {

                elem.on('click', function() {

                    angular.forEach(angular.element(document.querySelectorAll('.show-video')), function(item, index) {
                        var _currEl = angular.element(item);

                        _currEl.removeClass('current');

                        if( _currEl.hasClass('active') ) {
                            _currEl.removeClass('active');
                            _currEl.addClass('visited');
                        }

                        elem.addClass('current');
                        elem.addClass('active');

                    });

                    scope.$emit('changeVideoPath', { src: attrs.src, id: attrs.id });

                });

            }

        }
    };

    angular.module('starter').directive('showVideo', showVideo);
})();

