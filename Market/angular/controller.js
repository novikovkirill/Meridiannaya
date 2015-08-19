(function(){
	
	"use strict";

	var ctrl = angular.module('marketAppControllers', []).controller("productTableCtrl", function($scope){
					$scope.prodTable = prodRep.getAll();
	})

	return ctrl;
})();