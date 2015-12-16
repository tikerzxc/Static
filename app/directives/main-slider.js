'use strict';

(function () {

    mainSlider.inject = ['$timeout', '$compile', '$window', '$sce'];

    function mainSlider($timeout, $compile, $window, $sce) {

        return {
            restrict: 'E',
            replace: true,
            scope:{
                images: '=',
                data: '=',
                imagesLength: '=images',
                sliderIndex: '=index',
                pageId: '=',
                arrowsVisible: '='
            },
            link: function (scope, elem, attrs) {
                scope.currentIndex = 0;
                scope.length = scope.imagesLength.length;
                scope.imagesViewed = [];

                scope.show = function(elem) {
                    elem.addClass('visible');
                    elem.removeClass('hidden');
                };

                scope.hide = function(elem) {
                    elem.addClass('hidden');
                    elem.removeClass('visible');
                };

                if(scope.sliderIndex === 0) {
                    scope.show(elem);
                } else {
                    scope.hide(elem);
                }

                // -- Show next slider image
                scope.next = function(sliderIndex) {
                    scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;

                    scope.firstSlider = scope.currentIndex === 0 && sliderIndex === 0 ? true : false;
                    scope.lastSlider = ( (sliderIndex + 1) === scope.data.length ) && ( scope.currentIndex + 1 === scope.images.length ) ? true : false;

                    if(scope.imagesViewed.length < scope.images.length) {
                        scope.imagesViewed.push({viewed: true});
                    }

                    if( (scope.images.length === scope.imagesViewed.length) && !scope.lastSlider) {
                        scope.$emit('activateNextSlider', sliderIndex);
                        scope.$emit('showSlider', scope.sliderIndex + 1);
                    }

                    if(scope.sliderIndex + 1 === scope.data.length && scope.lastSlider) {
                        scope.$emit('lastMenuItem', {pageId : scope.pageId});
                    }

                    if(scope.currentIndex + 1 === scope.images.length) {
                        scope.$emit('slideViewed', {id: scope.pageId, index: scope.sliderIndex});
                    }

                    // -- Activate 'results' slide on 'tests' page
                    if( (scope.$parent.pageId === 'Test') && (scope.currentIndex + 1 === scope.images.length) ) {
                        scope.$emit('showTestsResults');
                    }

                };

                // -- Show previous slider image
                scope.prev = function(sliderIndex) {
                    scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = 0;

                    scope.firstSlider = scope.currentIndex === 0 && sliderIndex === 0 ? true : false;
                    scope.lastSlider = (sliderIndex + 1) === scope.data.length && ( scope.currentIndex + 1 === scope.images.length ) ? true : false;

                    if(scope.imagesViewed.length === 0) {
                        scope.$emit('activatePrevSlider', sliderIndex);
                        scope.$emit('showSlider', scope.sliderIndex - 1);
                    }

                    scope.imagesViewed.pop();

                };

                scope.$on('activateSliderContainer', function(event, index) {

                    if(scope.sliderIndex === index) {
                        scope.show(elem);
                    } else {
                        scope.hide(elem);
                    }
                });

                // -- Activate slider when clicking on submenu items
                scope.$on('activateSlider', function(event, index) {

                    if(scope.sliderIndex === index) {
                        scope.show(elem);

                        if(scope.currentIndex + 1 === scope.images.length) {
                            scope.$emit('slideViewed', {id: scope.pageId, index: scope.sliderIndex });
                        }

                    } else {
                        scope.hide(elem);
                    }

                });

                // -- Activate 'results' slide on 'tests' page
                scope.testResults = false;
                scope.$on('showTestPageResults', function() {
                    $timeout(function() {
                        scope.testResults = true;
                    });
                });

                // -- Watch if next slider is activated
                scope.$on('activateNextSliderImg', function(event, index) {

                    if( (index + 1 === scope.sliderIndex) && (scope.sliderIndex !== 0) ) {

                        $timeout(function() {
                            scope.currentIndex = 0;
                        });

                        if(scope.currentIndex !== scope.images.length) {
                            scope.lastSlider = false;
                        }

                        if(scope.imagesViewed.length === scope.images.length) {
                            scope.imagesViewed.push({viewed: true});
                        }

                        if( (scope.sliderIndex + 1 === scope.data.length) && (scope.currentIndex + 1 === scope.images.length || scope.currentIndex === scope.images.length - 1) ) {

                            scope.lastSlider = true;
                            scope.$emit('slideViewed', {id: scope.pageId, index: scope.data.length - 1});
                        }

                        if( (scope.currentIndex + 1 === scope.images.length) || (scope.currentIndex === 0 && scope.images.length) ) {
                            scope.$emit('slideViewed', {id: scope.pageId, index: scope.sliderIndex - 1});
                        }

                        if(scope.currentIndex + 1 === scope.images.length) {
                            scope.$emit('slideViewed', {id: scope.pageId, index: scope.sliderIndex});
                        }

                        if(scope.sliderIndex + 1 === scope.data.length && scope.currentIndex + 1 === scope.images.length ) {
                            scope.$emit('lastMenuItem', {pageId : scope.pageId});

                        }

                    }


                });

                // -- Watch if previous slider is activated
                scope.$on('activatePrevSliderImg', function(event, index) {

                    if(index - 1 === scope.sliderIndex && (scope.currentIndex + 1 !== scope.images.length)) {
                        $timeout(function() {
                            scope.currentIndex = 0;
                        });

                        if(scope.currentIndex !== 0) {
                            scope.firstSlider = false;
                        }

                        scope.imagesViewed = [];
                    }

                    if( (scope.sliderIndex === index - 1) && (scope.currentIndex + 1 === scope.images.length) ){
                        scope.$emit('slideViewed', {id: scope.pageId, index: scope.sliderIndex});
                    }

                    $timeout(function() {
                        scope.wrapImgVisible = true;
                    });

                    angular.forEach(angular.element(document.querySelectorAll('.link-wrap a span')), function(item, index){
                        var _currEl = angular.element(item);
                        _currEl.removeClass('active');
                        _currEl.removeClass('visited');

                    });

                });

                // -- Watch for slider image changes
                scope.$watch('currentIndex',function() {
                    scope.images.forEach(function(image) {
                        image.visible = false;
                    });

                    scope.images[scope.currentIndex].visible = true;
                });

                // -- Activate first slider if it has only 1 image
                if(scope.sliderIndex === 0 && scope.currentIndex + 1 === scope.images.length) {
                    scope.$emit('slideViewed', {id: scope.pageId, index: scope.sliderIndex });
                }

                // -- Hide 'prev' icon for first slider
                if( scope.currentIndex === 0 && scope.sliderIndex === 0 ) {
                    scope.firstSlider = true;
                }

                // -- Handle video slides interaction
                scope.videoHidden = true;

                scope.videoSources = [ // -- Make first video default for 'tutorials' page
                    {src: $sce.trustAsResourceUrl( "http://videogular.com/assets/videos/videogular.mp4" ), type: "video/webm"}
                ];

                scope.$on('changeVideo', function(event, src) {

                    if( !$window.localStorage.getItem(src.id) ) {
                        scope.videoPath = src.src;

                        if(scope.videoPath) {

                            $timeout(function() {
                                scope.videoHidden = false;

                                scope.videoSources = [
                                    {src: $sce.trustAsResourceUrl(scope.videoPath), type: "video/mp4"}
                                ];

                            });

                            $window.localStorage.clear();
                            $window.localStorage.setItem(src.id, true);
                        }
                    }

                });

                // -- Theory desc sliders
                scope.wrapImgVisible = true;

                scope.$on('showTheoryText', function(event, data) {

                    $timeout(function() {
                        scope.wrapImgVisible = false;

                        angular.forEach(angular.element(document.querySelectorAll('.theory-desc')), function(item) {
                            angular.element(item).html(data.text);
                        });
                    });

                });

                $window.localStorage.clear();

            },
            templateUrl:'/app/directives/templates/main-slider.html'

        }
    };

    angular.module('starter').directive('mainSlider', mainSlider);
})();

