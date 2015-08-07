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
	this.money+=value;
}