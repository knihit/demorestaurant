'use strict'

angular.module('RestaurantApp', [
	'RestaurantApp.home.controller',
	'ngRoute'
]).config(function ($routeProvider) {
	console.log("entering routing");
	$routeProvider
		.when ('/', {
			templateUrl: 'components/home/home.html',
			controller: 'menuController'
		});
});