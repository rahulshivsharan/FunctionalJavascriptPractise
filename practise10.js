var myArray = [];

myArray.push({ name : "Rahul", id : "AE345"});
myArray.push({ name : "Salim", id : "SA085"});
myArray.push({ name : "Zubin", id : "ZS345"});
myArray.push({ name : "Nikhil", id : "N345TE"});


var idArray = myArray.map(function(obj){
	return obj.id;
});


console.log(idArray);