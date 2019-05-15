//Named Function (can be reused)
var addNumbers = function(a,b){
    return a + b;
};

console.log(typeof(addNumbers));
console.log(addNumbers(5,6)); //Invoking the function


//Self Invoking Anonymous Function (cannot be reused)
(function(){
    console.log('Hi');
})();

var printNumber = function(n){
    console.log(n);
}

//higher order function
var numbers = [4,87,32,83,3];
numbers.forEach(printNumber); 

//function returns function
var add = function(a){
    return function(b){
        return a + b;
    }
}
console.log(add(5)(6));