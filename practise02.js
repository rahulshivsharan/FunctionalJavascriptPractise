var _ = require("underscore");

var myArray = [-5,-2,8,-7,0,8,1,3,-5];

console.log(myArray);

console.log(myArray.sort());

function compareLessThanOrEqual(x,y){
	return x >= y
}

console.log(myArray.sort(compareLessThanOrEqual));