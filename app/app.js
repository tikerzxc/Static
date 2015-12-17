var starter = angular.module('starter', ['ngRoute', 'ngSanitize', 'ngResource']).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});