'use strict'

angular.module('RestaurantApp.home.controller', [])
	.controller('menuController', function($scope, menuService){
		$scope.menus = menuService.getMenuItems();
	});
