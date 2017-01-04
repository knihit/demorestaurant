'use strict'

angular.module('RestaurantApp', [
	'RestaurantApp.home.controller',
	'RestaurantApp.home.services',
	'ngRoute'
]).config(function ($routeProvider) {
	console.log("entering routing");
	$routeProvider
		.when ('/', {
			templateUrl: 'components/home/home.html',
			controller: 'menuController'
		});
});