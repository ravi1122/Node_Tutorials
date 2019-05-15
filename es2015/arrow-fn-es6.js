//IN ES5
var add = function (a, b) {
    return a + b;
}
 var sub = function(err,a,b){
     if(err){
         return "a is less than b";
     }
     return a-b;
 }
//IN ES2015
var addNumbers = (a, b) => a + b;

//In JS all functions return this(current instance) by default
/*var Employee = function(){
    return this;
}
console.log(new Employee());*/

//IN ES5 we need to use bind() to bind the outer function instance with inner
/*(function(){
    this.counter = 0;
    setInterval(function(){
        console.log(`Counter = ${this.counter++}`);
    }.bind(this),1000);
})();*/

//arrow function by default it has the binding with the current instance no need to use bind function
(function(){
    this.counter = 0;
    setInterval(()=>{
        console.log(`Counter = ${this.counter++}`);
    },1000);
})();
