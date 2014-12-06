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
  	$scope.myInterval = 5000;
  	$scope.slides = [
  		{
      		image: '../../images/yeoman.png',
      		text: ['Gangster']
    	},  		
    	{
      		image: '../../images/yeoman.png',
      		text: ['EASdfdsaf']
    	},  		
    	{
      		image: '../../images/yeoman.png',
      		text: ['Bungalo']
    	}
    ];
  });
