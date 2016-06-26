
function Employee(emp_Name,degree,collegeName){
	Qualification.call(this,degree,collegeName);
	this.name = emp_Name;	
}


Employee.prototype.toString = function(){
	var str = 	"Name "+this.name+ "\n" +
				"Degree "+this.degree+ "\n" +
				"College "+this.collegeName;	
	return 	str;
}


function Qualification(_degree,_college){
	this.degree = _degree;
	this.college = _college;
}

var emp = new Employee("Abhishek Korlekar","Bachelor of Engineering","Thakur College of Engineering");

console.log(emp.toString());


