//express package is built on the top of connect
const express = require('express');

const path = require('path');

//body-parser is a third party middleware which use to parse the request body
const bodyParser = require('body-parser');

var app = express();

//Creating Routes using express Router
var root = express.Router();
var admin = express.Router();

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//To parse the data if the content-type is application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));//extended:true supports nested objects as well

//To parse the data if the content-type is application/json
app.use(bodyParser.json());

//Root Route
app.use('/',root);
//Admin Route
app.use('/admin',admin);

//POST: http://localhost:3000/admin/person
//Posting Person details in the request body using POSTMAN
admin.post('/person',(req,res,next)=>{
    console.log(req.body);
    //To access the data posted in request body
    var personObj = req.body;
    //Convert javaScript Object to json and send it in response
    res.json(personObj);
});

//GET : http://localhost:3000/admin/person/superadmin/mumbai
admin.get('/person/:role/:city',(req,res,next)=>{
    //To access the path parameter /:role passed in the URL
    var role = req.params['role'];
    //To access the path parameter /:city passed in the URL
    var city = req.params['city'];
    
    res.send(`<h1>Person Role : ${role} City : ${city}</h1>`);
});

//GET : http://localhost:3000/admin/person?name=Karthik&city=Bangalore
admin.get('/person',(req,res,next)=>{
    //To access the query string passed in the URL
    var query = req.query;//{name:'Karthik,city:'Bangalore'}
    res.send(`<h1>Person Details Name : ${query.name} City: ${query.city}</h1>`);
});

//GET : http://localhost:3000/admin/err/
admin.get('/err',(req,res,next)=>{
    try {
        throw 'error occured in admin route';
    } catch (error) {
        next({msg:error});
    }
});

//GET : http://localhost:3000/admin/
admin.get('/',(req,res,next)=>{
    res.send('<h1>Welcome to admin Page</h1>');
});
 
//GET : http://localhost:3000/
root.get('/',(req,res,next)=>{
    //render the pug template resides in views folder
    res.render('index',{title:'Capgemini',locations:['Bangalore','Chennai','Mumbai']});
});

//POST : http://localhost:3000/
root.post('/',(req,res,next)=>{
    res.write('<h1>Welcome to Home Page using POST Request</h1>');
    res.send();//To close the responsestream
});

//PUT : http://localhost:3000/
root.put('/',(req,res,next)=>{
    res.write('<h1>Welcome to Home Page using PUT Request</h1>');
    res.send();//To close the responsestream
});

//DELETE : http://localhost:3000/
root.delete('/',(req,res,next)=>{
    res.write('<h1>Welcome to Home Page using DELETE Request</h1>');
    res.send();//To close the responsestream
});

//middleware which catches all routes which executes for error handling
app.use((err,req,res,next)=>{
    res.write('<h1>Error Page</h1>');
    res.write('<hr/>')
    res.write(`<h2>Exception : ${err.msg}</h2>`);
    res.send();//To close the responsestream
});

app.listen(3000,()=>{
    console.log('Server started listening on port 3000 at localhost');
});