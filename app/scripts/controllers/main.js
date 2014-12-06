'use strict';

/**
 * @ngdoc function
 * @name gameRoomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gameRoomApp
 */
angular.module('gameRoomApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
