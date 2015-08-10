function ClientRepository() {
    Repository.apply(this,arguments);
}

ClientRepository.prototype = Object.create(Repository.prototype);
ClientRepository.prototype.constructor = ClientRepository;

ClientRepository.prototype.createClient = function(data){
	var client = Client.create(data);
	this.storage.addData(client);
	return client;
}

ClientRepository.prototype.refund = function(id, value){
	var client = this.storage.getById(id);
	client.money+=value;
}


