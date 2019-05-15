//Immutables
/*var i = 5;
var j = i; //new copy (it always produce a new state. it is not refering the older state)
j = 6;
console.log(i)
*/

//Mutable
/*var foo = {i:5};
var bar = foo;//creates reference (it wont produce a new state. it is refering the older state)
bar.i = 10;
console.log(foo);*/

//To Clone object use object.assign()
var employee = { id: 1, name: 'Karthik' };
//creates a new state
var clonedEmployee = Object.assign({}, employee);
console.log(clonedEmployee.name = 'Logith');
console.log(clonedEmployee);
console.log(employee);


//To Clone collection use spread operator
//Arrays are Mutables
var numbers = [1, 2, 3];
//var clonedNumbers = numbers;(It just create the reference)
var clonedNumbers = [...numbers];
clonedNumbers[0] = 100;
console.log(clonedNumbers);
console.log(numbers)

var firstArray = [10, 20, 30];
var secondArray = [40, 50, 60];
//Creates a new state by combining two arrays
var targetArray = [...firstArray, ...secondArray];
console.log(targetArray);
