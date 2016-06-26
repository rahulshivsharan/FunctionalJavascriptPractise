// map, reduce filter for arrays


var _ = require("underscore");


function doubleIt(theArray){
	console.log(theArray);
	return _.map(theArray,function(num){
		return num = (2 * num);
	});
}

//console.log(doubleIt([3,5,7]));


function average(nums){
	var sum = _.reduce(nums,function(memo,num){
		return memo + num;
	},0);
	return (sum / _.size(nums));
}

//console.log(average([1,2,3,4]));


function _doubleIt(nums){
	return _.map(nums,function(num){
		return (num * 2);
	});
}

//console.log(_doubleIt([12,13,4]));

function onlyEven(myArray){
	return _.filter(myArray,function(num){
		return (num % 2 === 0);
	});
}

console.log(onlyEven([12,11,13,4,6]));
