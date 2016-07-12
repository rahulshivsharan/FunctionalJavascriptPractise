var _ = require("underscore");


function onlyEven(ar){
	var isEven = function(num){
		return (num%2 === 0);
	}
	return _.filter(ar,isEven);
}

//console.log(onlyEven([12,34,2,5,33,27]));


function rejectNumbers(ar){
	return _.reject(ar,_.isNumber);
}


//console.log(rejectNumbers(['r',1,'h','u','l']));


function onlyOdd(myArray){
	var isEven = function(num){
		return (num%2 === 0);
	}

	function complement(pred){
		return function (){			
			return !pred.apply(null,_.toArray(arguments));
		}
	}

	return _.filter(myArray,complement(isEven));
} 

//console.log(onlyOdd([3,5,7,8]));

function allEven(numbers){
	return _.all(numbers,function(num){
		return (num%2 === 0);
	});
}

console.log(allEven([2,4,6,8]));
console.log(allEven([2,4,3,6,8]));

function anyEven(numbers){
	return _.any(numbers,function(num){
		return (num%2 === 0);
	});
}

console.log("anyEven([3,5,57,87]) "+anyEven([3,5,57,87]));
console.log("anyEven([21,45,37,61,82]) "+anyEven([21,45,37,61,82]));



