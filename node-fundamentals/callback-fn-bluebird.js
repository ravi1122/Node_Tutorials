var divideNumbers = (a, b, fn) => {
    setTimeout(() => {
        try {
            if (b === 0)
                throw 'Cannot divide by zero';
            var result = a / b;
            fn(null, result);
        } catch (err) {
            fn(err, null);
        }
    }, 1000);
}

//calling deferred execution method in classical way
/*divideNumbers(25,5,(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
});*/

//bluebird is the 3rd party module which is used to convert callback to promise
const bluebird = require('bluebird');

//To convert callback to promise
var divideNumbersPromise = bluebird.promisify(divideNumbers);

//Handling callback as promise
divideNumbersPromise(25,0).then((result)=>{
    console.log(`Divide Result : ${result}`);
}).catch((err)=>{
    console.log(`Exception Caught : ${err}`);
});

//converting entire package callbacks to promise
const fs = bluebird.promisifyAll(require('fs'));

//fs.readFile callback method need to be accessed as readFileAsync
fs.readFileAsync('demo.txt','utf-8').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});










