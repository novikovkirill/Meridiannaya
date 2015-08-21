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

	return main;
})();