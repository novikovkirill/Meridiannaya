(function(){

	"use strict";

	var main = angular.module('marketApp', ['ngRoute', 'marketAppControllers']);

	main.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/products', {
	        templateUrl: 'Market/angular/productListTemplate.html',
	        controller: 'productTableCtrl'
	      }).
	      when('/products/addProduct', {
	        templateUrl: 'Market/angular/creatingFormTemplate.html',
	        controller: 'formCtrl'
	      }).
	      otherwise({
	        redirectTo: '/products'
	      });
	}]);

	prodRep.create({name: "Boots", price: 500, amount: 50, shopId: 0});
	prodRep.create({name: "T-Shirt", price: 100, amount: 50, shopId: 0});
	prodRep.create({name: "Cool T­Shirt", price: 200, amount: 50, shopId: 0});
	prodRep.create({name: "T-Shirt", price: 150, amount: 10, shopId: 0});
	prodRep.create({name: "iPhone 6", price: 50000, amount: 50, shopId: 0});

	return main;
})();