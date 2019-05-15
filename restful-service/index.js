const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');//Library to perform Data Manipulation

var app = express();

//creating routes
var root = express.Router();
var api = express.Router();

//Parsing Request Body Data using 3rd party middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Creating Routes
app.use('/', root);
app.use('/api/guests', api);

guests = [
    { id: 1, name: 'Karthik', contactNumber: '9986173092' },
    { id: 2, name: 'Ganesh', contactNumber: '8886173092' },
    { id: 3, name: 'Logith', contactNumber: '7786173092' },
];

//To get all the GUEST Details using RESTful Services
//GET: http://localhost:3000/api/guests/
api.get('/', (req, res, next) => {
    res.status(200).json(guests);
});

//To get a particular GUEST Details using RESTful Services
//GET: http://localhost:3000/api/guests/100
api.get('/:id', (req, res, next) => {
    var id = parseInt(req.params.id);

    //Searching for the guest from the guests Collection using lodash
    var guestObject = _.find(guests, (guest) => guest.id == id);

    if (guestObject !== undefined) {
        //If guest found
        res.status(200).json(guestObject);
    } else {
        //If guest not found
        res.statusMessage = 'Guest Not found';
        res.status(404).send();
    }
});

//To add the guest
//POST : http://localhost:3000/api/guests
//SET Request header Content-Type to application/json or application/x-www-form-urlencoded
api.post('/', (req, res, next) => {
    //Creating guest object by taking the details from request body which is parsed by body-parser
    var guest = {
        id: req.body.id,
        name: req.body.name,
        contactNumber: req.body.contactNumber
    }
    //Adding the guest details in to the collection
    guests.push(guest);

    //acknowledging the client that guest added successfully by sending the guest object in the response with statusCode 201
    //and also sharing the endpoint to access the newly created guest resource in the response location header
    res.setHeader('location', `${req.originalUrl}/${guest.id}`);
    res.status(201).json(guest);
});

//To update the guest
//PUT : http://localhost:3000/api/guests/1
//SET Request header Content-Type to application/json or application/x-www-form-urlencoded
api.put('/:id', (req, res, next) => {

    var id = parseInt(req.params.id);

    //Creating updated guest object by taking the details from request body which is parsed by body-parser
    var updatedGuest = {
        id: id,
        name: req.body.name,
        contactNumber: req.body.contactNumber
    }

    //Updating the guest details in to the collection
    
    // Find guest index using _.findIndex 
    var guestIndex = _.findIndex(guests, {id: id});
    
    // Replace guest at index using native splice
    guests.splice(guestIndex, 1, updatedGuest);

    res.statusMessage = 'Guest Updated';
    res.status(202).send();
});

//To delete the guest
//DELETE : http://localhost:3000/api/guests/1
api.delete('/:id', (req, res, next) => {

    var id = parseInt(req.params.id);

    //Updating the guest details in to the collection
    
    // Find guest index using _.findIndex 
    var guestIndex = _.findIndex(guests, {id: id});
    
    // Remove guest at index using native splice
    guests.splice(guestIndex,1);

    res.statusMessage = 'Guest Deleted';
    res.status(204).send();
});

//GET: http://localhost:3000/
root.get('/', (req, res, next) => {
    res.send('<h1>Node Guest RESTful Services</h1>');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000 at localhost');
});