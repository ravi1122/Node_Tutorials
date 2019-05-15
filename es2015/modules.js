//To avoid Naming Collisions
//TO organize the logically related stuff together

//IIFE : Immediately Onvoking Function Expression
/*var i = (function(){
    return 5;
})();
console.log(typeof(i));*/

var Calculator = (() => {

    var _add = (a, b) => a + b;
    var _multiply = (a, b) => a * b;

    return {
        add: _add,
        multiply: _multiply
    }
})();


console.log(Calculator.add(5,6));
console.log(Calculator.multiply(5,6));


