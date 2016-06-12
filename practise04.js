var _ = require("underscore");

function existy(x){
	return x != null;
}

var x = null;

console.log("x = null : "+existy(x));

x = undefined;
console.log("x = undefined  : "+existy(x));

x = {};
console.log("x = Object : "+existy(x));

x = {};
console.log("x.name : "+existy(x.name));