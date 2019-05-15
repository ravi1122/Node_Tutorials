//Object in JS can also be called as Associative arrays(It has key and value pair)
var foo = {};

//Attaching property to the object using dot notation
foo.id = 108331;

//key or property should be always string value can be any
//Attaching property to the object using square bracket notation
foo['name'] = 'Karthik';

//To retrieve the value using dot notation
console.log(foo.name);

//To retrieve the value using square bracket notation
console.log(foo['name']); //Recommended


//To iterate the properties in an object for..in loop
for(var prop in foo){
    console.log('Key : '+prop+ ' Value: '+foo[prop]);
}