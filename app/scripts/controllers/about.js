'use strict';

/**
 * @ngdoc function
 * @name gameRoomApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gameRoomApp
 */
angular.module('gameRoomApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
