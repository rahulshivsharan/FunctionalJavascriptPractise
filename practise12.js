var _ = require("underscore");

function myReduce(myNums,fn){
	return _.reduce(myNums,fn);
}

function myReduceRight(myNums,fn){
	return _.reduceRight(myNums,fn);
}


function div(x,y){
	return x/y;
}
/*
console.log("myReduce "+myReduce([12,3,2],div));

console.log("myReduce "+myReduce([18,2,3],div));

console.log("myReduceRight "+myReduceRight([2,6,144],div));
*/

function T(){
	return true;
}

function F(){
	return false;
}

function allOf(){
	return _.reduceRight(arguments,function(truth,f){
		return truth && f();
	},true);
}

function anyOf(){
	return _.reduceRight(arguments,function(truth,f){
		return truth || f();
	},true);
}

/*
console.log("allOf = "+allOf(T,F));
console.log("allOf = "+allOf(T,T));
console.log("allOf = "+allOf(T,F,T,T));

console.log("anyOf = "+anyOf(T,F,F,F));
*/

///////////////////////////////// divisible by 10, 5 ///////////////////////////////
function divisibleBy10(num){
	return function(){
		var x = num;
		return ((x%10) === 0);
	}	
}

function divisibleBy5(num){
	return function(){
		var x = num;
		return ((x%5) === 0); 
	};
}

function checkDivByNum(divisor,num){
	return function(){
		return ((num%divisor) === 0); 
	}	
}

function checkDivByAll(){
	return _.reduce(arguments,function(truth,f){
		return truth && f();
	},true);	
}

function checkDivByAny(){
	return _.reduce(arguments,function(truth,f){
		return truth || f();
	},false);	
}

/*
var myNumber = 50;
console.log("checkDivByAll("+myNumber+") "+checkDivByAll(divisibleBy10(myNumber),divisibleBy5(myNumber)));
myNumber = 25;
console.log("checkDivByAll("+myNumber+") "+checkDivByAll(divisibleBy10(myNumber),divisibleBy5(myNumber)));
myNumber = 20;
console.log("checkDivByAll("+myNumber+") "+checkDivByAll(divisibleBy10(myNumber),divisibleBy5(myNumber)));
myNumber = 25;
console.log("checkDivByAny("+myNumber+") "+checkDivByAny(divisibleBy10(myNumber),divisibleBy5(myNumber)));
myNumber = 253;
console.log("checkDivByAny("+myNumber+") "+checkDivByAny(divisibleBy10(myNumber),divisibleBy5(myNumber)));

myNumber = 255;
console.log("checkDivByAny("+myNumber+") "+checkDivByAny(divisibleBy10(myNumber),divisibleBy5(myNumber)));
*/

myNumber = 245;
console.log("checkDivByAny("+myNumber+") "+checkDivByAny(checkDivByNum(3,myNumber),checkDivByNum(5,myNumber)));
console.log("checkDivByAll("+myNumber+") "+checkDivByAll(checkDivByNum(3,myNumber),checkDivByNum(5,myNumber)));

myNumber = 95;
console.log("checkDivByAny("+myNumber+") "+checkDivByAny(checkDivByNum(3,myNumber),checkDivByNum(5,myNumber)));
console.log("checkDivByAll("+myNumber+") "+checkDivByAll(checkDivByNum(3,myNumber),checkDivByNum(5,myNumber)));

myNumber = 915;
console.log("checkDivByAny("+myNumber+") "+checkDivByAny(checkDivByNum(3,myNumber),checkDivByNum(5,myNumber)));
console.log("checkDivByAll("+myNumber+") "+checkDivByAll(checkDivByNum(3,myNumber),checkDivByNum(5,myNumber)));
