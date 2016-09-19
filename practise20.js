var _ = require("underscore");

function allOf(){	
	return _.reduceRight(arguments,function(truth,fn){		
		return truth && fn();
	},true);
}

function anyOf(){
	var truth = false;
	return _.reduceRight(arguments,function(truth,fn){		
		return truth || fn();
	},false);
}

function divisibleBy3(num){
	return function(){
		return (num%3 === 0)
	};
}

function divisibleBy5(num){
	return function(){
		return (num%5 === 0);	
	};
	
}

var num = 15;
console.log("is "+num+" divisible by 3 and 5 : "+allOf(divisibleBy3(num),divisibleBy5(num)));

num = 27;
console.log("is "+num+" divisible by 3 and 5 : "+allOf(divisibleBy3(num),divisibleBy5(num)));

num = 25;
console.log("is "+num+" divisible by 3 and 5 : "+anyOf(divisibleBy3(num),divisibleBy5(num)));