var divideNumbers = function (a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            try {
                if (b === 0)
                    throw 'Cannot divide by zero';
                //producing results in a delayed manner
                var result = a / b;
                resolve(result);
            }
            catch (err) {
                reject(err);
            }
        }, 1000);
    });
}

/*divideNumbers(25, 5).then((result) => {
    console.log(`Divide Result : ${result} `);
}, (err) => {
    console.log(`Error : ${err} `);
});*/


divideNumbers(25, 5).then((result) => {
    console.log(`Divide Result : ${result} `);
}).catch((err) => {
    console.log(`Error : ${err} `);
});
