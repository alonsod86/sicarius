'use strict';

/**
 * @ngdoc function
 * @name sicariusApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sicariusApp
 */
angular.module('sicariusApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
