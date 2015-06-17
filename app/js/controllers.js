/**
 * Created by Kari on 4.6.2015.
 */

'use strict';

/* Controllers */

var quizControllers = angular.module('quizControllers', []);

    quizControllers.controller('QuizCtrl', ['$scope', '$rootScope', '$http', '$route',
    //quizControllers.controller('QuizCtrl', ['$scope', '$rootScope', '$http','$route', '$routeParams', '$location',

    function($scope, $rootScope, $http, $route) {
    //function($scope,$rootScope, $http,$route,$routeParams,$location) {

        $scope.nbrOfRightAnswers = 0;
        $scope.showRes = false;

        // read questions and answers from json
        $http.get('partials/questions.json').success(function(data) {
            console.log('data length ' + data.length);
            $scope.questions = data;

            // print json (for fun)
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    console.log(data[key].id);
                    console.log(data[key].question);
                }
            }
        });

        // Submit answers
        $scope.submit = function() {
            $scope.showRes = true;
        };

        // reload page
        $scope.clearForm = function() {
            $route.reload();
        };

        // Check user answer
        $scope.checkAnswer = function ( answered, right ) {
               /* $scope.$on("$routeChangeStart", function (event, next, current) {
                if (next ) {
                    //event.preventDefault();
                        $scope.$evalAsync(function() {
                            $location.path('/view1');
                    });
                }
            });*/

            console.log('You answered ' + answered);
            console.log('Right answer ' + right);

            if(answered.match(right))
            {
                //alert( 'Vastasit OIKEIN!');
                $scope.nbrOfRightAnswers++;
            }
            else{
                //alert( 'Vastasit VÄÄRIN!');
            }
            console.log('nbrOfRightAnswers = ' + nbrOfRightAnswers);
        };
    }]);

    quizControllers.controller('QuizCtrl2', ['$scope', '$rootScope', '$http', '$route',

    function($scope, $rootScope, $http, $route) {
        // todo...
    }]);