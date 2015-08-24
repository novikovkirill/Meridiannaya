function Storage(type){
	if (localStorage[type])
		this.dataList = JSON.parse(localStorage[type]);
	else 
		this.dataList = {};
	this.idCounter = makeId(this.dataList);
	this.type = type;
}

Storage.prototype.addData = function(data){
	var id = this.idCounter();
	data.id = id;
	this.dataList[id] = data;
	localStorage.setItem(this.type, angular.toJson(this.dataList));
}

Storage.prototype.getAll = function(){
	return this.dataList;
}

Storage.prototype.getById = function(id){
	return this.dataList[id];
}

Storage.prototype.findByKeyValue = function(key, value){
	var res = [];
	value = value.toString().toLowerCase();
	for (var id in this.dataList){
		if (this.dataList[id][key].toString().toLowerCase() == value)
			res.push(this.dataList[id]);
	}
	return res;
}

Storage.prototype.update = function(id, data){
	for (var key in data)
		this.dataList[id][key] = data[key];
	localStorage.setItem(this.type, angular.toJson(this.dataList));
}

Storage.prototype.delete = function(id){
	delete this.dataList[id];
	localStorage.setItem(this.type, angular.toJson(this.dataList));
}

function makeId(dataList) {

  var maxId = -1;

  for (var key in dataList){
  	if (+key > maxId)
  		maxId = +key;
  }

  var currentCount = maxId+1;

  function counter() {
    return currentCount++;
  }


  function counterReduce() { //??
    currentCount--;
  }

  return counter;
}