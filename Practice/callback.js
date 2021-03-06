
var divideNumbers = function (a, b, fn) {
    //Only way to get the result of deferred execution is by passing a callback function
    setTimeout(function () {
        try {
            if (b === 0)
                throw 'Cannot divide by zero';
            //producing results in a delayed manner
            var divide = a / b;

            fn(null, divide, );//invoke the callback function once the deferred result is produced and pass the result as an argument
        } catch (err) {
            fn(err, null);
        }
    }, 1000);
}
divideNumbers(25, 5, function (err, divideResult) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(divideResult);
    }
});

