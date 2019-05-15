//connect is built on the top of http module
//connect is a middleware package
//we can place middleware in the http pipeline and intercept the HTTP request and response
const connect = require('connect');
var app = connect(); //creating the server

app.use('/error', (req, res, next) => {
    //Handle the exception in middleware
    try {
        throw 'some error occured';
    } catch (err) {
        next(err);//passing err in next will execute middleware with 4 args
    }
});

app.use('/admin', (req, res, next) => {
    console.log('Admin Logger');
    next();
});

app.use('/admin', (req, res, next) => {
    try {
        res.end('<h1>Welcome to Admin Page</h1>');//Closing the (Response)WriteStream
    }
    catch (err) {
        next(err);
    }
});

app.use('/', (req, res, next) => {
    if (req.url != '/favicon.ico')
        console.log('Home Logger');
    next();
});

//middleware function which takes 3 arguments req,res,next
app.use('/', (req, res, next) => {
    res.write('<h1>Welcome to Connect</h1>');
    res.end();//Closing the (Response)WriteStream
    next();//next is optional in this middleware 
});

//Creating middleware which needs to be executed for error
//Error Middleware which needs to placed at the last
//first argument must be err wich recieves the error passed 
//in the next(err) method
app.use((err, req, res, next) => {
    console.log(err);
    res.end('<h1>Some Error occured it has been reported</h1>')
});

//Making the server to Listen on port 3000
app.listen(3000, () => {
    console.log('Server started listening on port 3000 at localhost');
});



/*const http= require('http');
var cws = http.createServer((req,res)=>{

});
cws.listen(3000,()=>{
    console.log('server started...');
});*/