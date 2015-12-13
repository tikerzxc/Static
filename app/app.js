var starter = angular.module('starter', ['ngRoute', 'ngSanitize', 'ngResource']).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});

// -- Configure our routes
starter.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : '../index.html',
            controller  : 'HomeCtrl'
        })
        .when('/home', {
            templateUrl : '../index.html',
            controller  : 'HomeCtrl'
        })
        .when('/tutorials', {
            templateUrl : '../tutorials.html',
            controller  : 'Tutorials'
        })
        .when('/theory/testt', {
            templateUrl : '../theory.html',
            controller  : 'TheoryCtrl'
        })
        .when('/test', {
            templateUrl : '../theory.html',
            controller  : 'TheoryCtrl'
        })
        .when('/assignments', {
            templateUrl : '../assignments.html',
            controller  : 'AssignmentsCtrl'
        })
        .when('/test', {
            templateUrl : '../test.html',
            controller  : 'TestCtrl'
        })
        .when('/links', {
            templateUrl : '../links.html',
            controller  : 'LinksCtrl'
        })
        .when('/photos', {
            templateUrl : '../photos.html',
            controller  : 'PhotosCtrl'
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
});
