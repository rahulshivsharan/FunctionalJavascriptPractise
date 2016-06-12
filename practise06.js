var _ = require("underscore");

var arr = [12,2,4,5];

function sqr(num){
	return (num*num);
}

console.log(arr.map(sqr));


function foreach(myArray,func){
	var whatReturned = undefined;
	for(var x = 0; x < myArray.length; x++){
		whatReturned = func(myArray[x],x);
		if(whatReturned === false){
			break;
		}
	}
}

foreach(arr,function(element,index){
	var sqr = element * element;	
	console.log("Element at position "+index+" is "+element+" and its square is "+sqr);
	
	if(element === 2){
		return false;
	}
});

function wierdAdd(num,f){
	return num + f(num);
}

function fn(num){
	return (num * num);
}

console.log("wierdAdd(2) "+wierdAdd(2,fn));
console.log("wierdAdd(3) "+wierdAdd(3,fn));
console.log("wierdAdd(4) "+wierdAdd(4,fn));


function toUpper(element,index){
	var str = element.charAt(0).toUpperCase() + element.substr(1);
	console.log(element+" => "+str);
}

foreach(["vicky","malhotra","digambar"],toUpper);