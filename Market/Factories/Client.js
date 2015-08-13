function Client(){

}

Client.create = function(obj) {
	var client = new Client();
	client.name = obj.name;
	client.city = obj.city;
	client.money = 0;
	return client;
}

Client.prototype.refund = function(value){
	clientRep = new ClientRepository;
	clientRep.refund(this.id,value);
}

Client.prototype.addToOrder = function(product, amount){
	var orderRep = new OrderRepository;
	orderRep.create({clientId: this.id, productId: product.id, amount: amount});
}

Client.prototype.purchase = function(){
	var orderRep = new OrderRepository;
	orderRep.purchase(this.id);
}

Client.prototype.getOrders = function(){
	var orderRep = new OrderRepository;
	orderRep.getOrders(this.id);	
}