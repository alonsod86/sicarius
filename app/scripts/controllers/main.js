'use strict';

/**
 * @ngdoc function
 * @name sicariusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sicariusApp
 */
angular.module('sicariusApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
