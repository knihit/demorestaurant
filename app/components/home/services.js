'use strict'

angular.module('RestaurantApp.home.services', [])
.factory('menuService', function($http){

	var menu = {};

	menu.getMenuItems = function() {
		$http.get('components/home/menuitem.json').success(function (data){
			menu.content = data;
		});
	}

	return menu;
});