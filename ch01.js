var _ = require("underscore");

_.times(4,function(){
	console.log(" Hi There ");
});


var underScore = _.noConflict();

underScore.times(4,function(){
	var date = new Date();
	console.log(" No Conflict ",date.getTime());
});


[12,34,56,78,90].forEach(function(val,index){
	console.log(index," Number ",val);
});

function spat(fn){
	return function(myArray){
		return fn.apply(null,myArray);
	}
}

var addAllNumbers = spat(function(){
	var total = 0;	
	for(var index = 0; index < arguments.length; index++){
		total += arguments[index];
	}

	return total;
});

var array_numbers = [20,30,40];
console.log(" Total of ",array_numbers," is ",addAllNumbers(array_numbers));

array_numbers = [10,10,40,30];
console.log(" Total of ",array_numbers," is ",addAllNumbers(array_numbers));