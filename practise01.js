var _ = require("underscore");



function Nth(myarray,index){
	if(!isIndexed(myarray)) fail("Not supported on non-indexed type");
	if(!isNumber(index)) fail("Expected a Number as an index");

	if((index < 0) || (index > myarray.length - 1)) 
		fail("Index value out of bound");

	return myarray[index];
}

function isIndexed(data){
	return _.isArray(data) || _.isString(data);
}

function isNumber(index){
   return _.isNumber(index);
}

function fail(msg){
	throw msg;
}

console.log("letter at 2nd position "+Nth([3,5,3,1,'Ninad'],2));
console.log("letter at 2nd position "+Nth("Kasla",0));
console.log("letter at 2nd position "+Nth({},0));
10.140.215.196