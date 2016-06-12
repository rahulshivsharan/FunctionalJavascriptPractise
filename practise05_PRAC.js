var _ = require("underscore");

function existy(data){
	return (data != null);
}

function truthy(data){
	return (data !== false) && existy(data);
}

/*
console.log("null "+existy(null));
console.log("undefined "+existy(undefined));
console.log("{} "+existy({}));
console.log("{}.name "+existy({}.name));



console.log("\n ----------- truthy ---------- \n");

console.log("null "+truthy(null));
console.log("undefined "+truthy(undefined));
console.log("{} "+truthy({}));
console.log("{}.name "+truthy({}.name));
*/

function doWhen(condition,action){
	if(condition){
		return action();
	}else{
		return undefined;
	}
}

function executeIfHasField(target,name){
	return doWhen(existy(target[name]),function(){
		var result = _.result(target,name);
		console.log(['the resule is ',result].join(""));
		return result;
	}); 
}

var a = new Object();
a.name = "Rahul Shivsharan";
console.log(executeIfHasField(a,"name"));