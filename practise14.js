var _ = require("underscore");

var obj = {
	a : 1,
	b : 2,
	c : 3,
	d : 4
}

function onlyKeys(o){
	return _.map(o,function(value,key,col){
		return key;
	});
}

function onlyValues(o){
	return _.map(o,function(value,key,col){
		return value;
	});
}

function doIdentity(o){
	return _.map(o,_.identity);
}


console.log(onlyKeys(obj));
console.log(onlyValues(obj));
console.log(doIdentity(obj));