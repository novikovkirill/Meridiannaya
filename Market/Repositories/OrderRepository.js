var OrderRepository = (function(){

	var instance;

	function OrderRepository() {
		if ( !instance )
			instance = this;
		else return instance;
	    Repository.apply(this, arguments);
	}

	OrderRepository.prototype = Object.create(Repository.prototype);
	OrderRepository.prototype.constructor = OrderRepository;

	OrderRepository.prototype.createOrder = function(data){
		var prodRep = new ProductRepository;
		var product = prodRep.getById(data.productId);
		if (product.amount >= data.amount){
			product.amount-=data.amount;
			var order = Order.create(data);
			order.id = this.storage.addData(order);
			return order;
		}
		else 
			alert("Такого количества товара нет на складе");
	}

	OrderRepository.prototype.findByClientId = function(id){
		return this.storage.findByKeyValue("clientId", id)
	}

	OrderRepository.prototype.purchase = function(clientId){
		var sumPrice = 0;
		var clientOrders = this.findByClientId(clientId);
		for (var i = 0; i < clientOrders.length; i++)
			if (clientOrders[i].purchased === false){
				var prodRep = new ProductRepository;
				var product = prodRep.getById(clientOrders[i].productId)
				sumPrice+=clientOrders[i].amout * product.price;
			}
		var clientRep = new ClientRepository;
		client = clientRep.getById(clientId);
		if (sumPrice > client.money)
			alert("Ваших средств недостаточно для оформления заказа");
		else {
			for (var i = 0; i < clientOrders.length; i++)
				if (clientOrders[i].purchased === false)
					clientOrders[i].purchased = true;
			client.money-=sumPrice;
		}
	}

	OrderRepository.prototype.getOrders = function(clientId){
		var clientOrders = this.findByClientId(clientId);
		for (var i = 0; i < clientOrders.length; i++)
			if (clientOrders[i].purchased === true){
				this.storage.delete(clientOrders[i].id);
			}		
	}

	return OrderRepository;

})()

var orderRep = new OrderRepository();