(function(){
	
	"use strict";

	var ctrl = angular.module('marketAppControllers', [])
	.controller("productTableCtrl", function($scope){
					$scope.prodTable = prodRep.getAll();
	})
	.controller("formCtrl", function($scope, $location){
		$scope.addProduct = function(){
			var prodName = $scope.name;
			var prodPrice = $scope.price;
			var prodAmount = $scope.amount;
			if (prodName === undefined || prodPrice === undefined || prodAmount === undefined)
				alert("Ошибка! Все поля должны быть заполнены.")
			else if (prodName.length < 3)
				alert("Ошибка! Название товара должно состоять минимум из трёх символов.")
			else {
				prodRep.create({name: prodName, price: prodPrice, amount: prodAmount, shopId: 0});
				$location.path('/products');
				alert("Товар успешно добавлен.");
			}
		}
	})

	return ctrl;
})();