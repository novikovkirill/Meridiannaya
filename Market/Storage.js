function Storage(){
	this.dataList = {};
	this.idCounter = makeId();
}

Storage.prototype.addData = function(data){
	var id = this.idCounter();
	this.dataList[id] = data;
	return id;
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
	for (var id in this.dataList)
		if (this.dataList[id][key].toString().toLowerCase() == value)
			res.push(this.dataList[id]);
	return res;
}

Storage.prototype.update = function(id, data){
	for (var key in data)
		this.dataList[id][key] = data[key];
}

Storage.prototype.delete = function(id){
	delete this.dataList[id];
}

function makeId() {
  var currentCount = 0;

  // возвращаемся к функции
  function counter() {
    return currentCount++;
  }


  function counterReduce() { //??
    currentCount--;
  }

  return counter;
}