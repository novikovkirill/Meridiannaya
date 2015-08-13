var ClientRepository = (function(){

	var instance;

	function ClientRepository() {
		if ( !instance )
			instance = this;
		else return instance;
	    Repository.apply(this,arguments);
	}

	ClientRepository.prototype = Object.create(Repository.prototype);
	ClientRepository.prototype.constructor = ClientRepository;

	ClientRepository.prototype.create = function(data){
		var client = Client.create(data);
		client.id = this.storage.addData(client);
		return client;
	}

	ClientRepository.prototype.refund = function(id, value){
		var client = this.storage.getById(id);
		client.money+=value;
	}

	return ClientRepository;

})()

var clientRep = new ClientRepository();

