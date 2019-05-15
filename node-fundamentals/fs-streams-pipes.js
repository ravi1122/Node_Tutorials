const fs = require('fs');
/*
var readStream = fs.createReadStream('demo.txt',{
    encoding:'utf-8',
    highWaterMark:50 //Specifying the Chunk size(50 bytes). Default 16 KB
});

var writeStream = fs.createWriteStream('demo-copy.txt',{
    encoding:'utf-8'
});


//This Listener will get triggered once the file is opened for reading
readStream.on('open',()=>{
    console.log('File Opened for Reading / Copying ...');
});

//This Listener will get triggered once the file it started and continue the  reading
readStream.on('data',(chunk)=>{
    console.log('Reading...');
    //Reading and printing it in console
    console.log(chunk);
    console.log('Copying...');
     //Reading and writing it in demo-copy.txt
    writeStream.write(chunk.replace('a','A'));
});

//This Listener will get triggered once the file completed  its reading / it reached EOF
readStream.on('close',()=>{
    console.log('Completed Reading / Copied');
});*/

//Using Pipes

var readStream = fs.createReadStream('demo.txt',{
    encoding:'utf-8',
    highWaterMark:50 //Specifying the Chunk size(50 bytes). Default 16 KB
});

var writeStream = fs.createWriteStream('demo-copy.txt',{
    encoding:'utf-8'
});

console.log('copying...');
//Pipe readable stream into writable stream
readStream.pipe(writeStream);
console.log('copied...');
