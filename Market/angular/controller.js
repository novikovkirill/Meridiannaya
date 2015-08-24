(function(){
	
	"use strict";

	var ctrl = angular.module('marketAppControllers', [])
	.controller("productTableCtrl", function($scope, $route){
					$scope.prodTable = prodRep.getAll();
					$scope.deleteProduct = function(prodId){
						prodRep.delete(prodId);
						$route.reload();
					}
	})
	.controller("formCtrl", function($scope, $location){
		$scope.addProduct = function(){
			var prodName = $scope.name;
			var prodPrice = $scope.price;
			var prodAmount = $scope.amount;
			try{
				if(!prodName || !prodPrice || !prodAmount)
					throw new SyntaxError("Данные отсутствуют");
				if (prodName.length < 3)
					throw new SyntaxError("Данные некорректны")
				prodRep.create({name: prodName, price: prodPrice, amount: prodAmount, shopId: 0});
				$location.path('/products');
				alert("Товар успешно добавлен.");				
			}
			catch(e){
				if (e.message == "Данные отсутствуют")
					alert("Ошибка! Все поля должны быть заполнены");
				if (e.message == "Данные некорректны")
					alert("Ошибка! Название товара должно состоять как минимум из трёх символов.");
			}
		}
	})

	return ctrl;
})();