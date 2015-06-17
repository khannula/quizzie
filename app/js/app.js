'use strict';

// Declare app level module which depends on views, and components
var quizApp = angular.module('quizApp', [
  'ngRoute',
  'phonecatAnimations',
  'quizControllers'
]);

quizApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/view1', {
          templateUrl: 'partials/view1.html',
          controller: 'QuizCtrl'

        }).
        when('/view2', {
          templateUrl: 'partials/view2.html',
          controller: 'QuizCtrl2'
        }).
        when('/etusivu', {
            templateUrl: 'partials/etusivu.html',
            controller: 'QuizCtrl'
        }).
        otherwise({
          redirectTo: '/etusivu'
        });
  }]);
