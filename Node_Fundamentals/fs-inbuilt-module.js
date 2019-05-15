const fs = require('fs');
const path = require('path');

//Reading the contents of demo.txt in Synchronous way
/*var filePath = path.join(__dirname,'demo.txt');
console.log('Started Reading...');
var contents = fs.readFileSync(filePath,{encoding:'utf-8'});
console.log(contents);
console.log('Completed Reading...');*/

//Reading the contents of demo.txt in Asynchronous way
var filePath = path.join(__dirname,'demo.txt');
fs.readFile(filePath,{encoding:'utf-8'},function(err,data){
    if(err){
        console.error(err);
        
    }
    else{
        console.log('Started Reading...');
        console.log(data);
        console.log('Completed Reading...');
    }
});
