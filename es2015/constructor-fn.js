//ECMASCRIPT 5 doesnt support classes we need to do it with constructor function
//Constructor function must be in pascal case
   
var Employee=function( id, name){
    this.id = id;
    this.name = name;
}

//Creating instance 
var emp = {id:1,name:'Ganesh'}; 
var employee01 = new Employee(101,'Karthik'); 
var employee02 = new Employee(102,'Logith');
console.log(emp);//Object Literal
console.log(emp instanceof Employee); //false
console.log(employee01);//Employee object
console.log(employee01 instanceof Employee); //true

