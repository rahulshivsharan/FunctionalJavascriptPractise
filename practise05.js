var _ = require("underscore");

function existy(x){
	return x != null;
}

function truthy(x){
	return (x !== false) && existy(x);
}

var x = null;

console.log("x = null : "+existy(x));

x = undefined;
console.log("x = undefined  : "+existy(x));

x = {};
console.log("x = Object : "+existy(x));

x = {};
console.log("x.name : "+existy(x.name));

x = {};
x.name = "Rahul";
console.log("x.name = 'Rahul' : "+existy(x.name));



console.log("\n -------------------- \n");

var x = false;
console.log("x = false : "+truthy(x));

x = undefined;
console.log("x = undefined  : "+truthy(x));

x = {};
console.log("x = Object : "+truthy(x));

x = {};
x.name = "Rahul";
console.log("x.name : "+truthy(x.name));

x = 0;
console.log("x = 0 : "+truthy(x));

console.log("\n -------------------- \n");

function doWhen(cond,action){
	if(truthy(cond)){
		return action();
	}else{
		return undefined;
	}
}

function executeIfHasField(target,name){
	return doWhen(existy(target[name]),function(){
		var result = _.result(target,name);
		console.log(["The result is",result].join());
		return result;
	});
}

executeIfHasField({"foo" : 24},"foo");
executeIfHasField({"foo" : 45},"bar");



