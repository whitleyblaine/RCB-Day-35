// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Star Wars Characters (DATA)
// =============================================================
var waiting = [
];

var reservations = [
  {
    customerName: "Elizaur Reyes",
    phoneNumber: "7326404475",
    customerEmail: "elizaurreyes@yahoo.com",
    customerID: "eli"
  }
]

  console.log(reservations);
  console.log(reservations.length);


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/add', function(req, res){
  res.sendFile(path.join(__dirname, 'add.html'));
})

app.get('/tables', function(req, res){
  res.sendFile(path.join(__dirname, 'tables.html'));
})

app.get('/api', function(req, res){
  res.json({
    reservations: reservations,
    waiting: waiting
  });
})

// Create New Characters - takes in JSON input
app.post('/api/new', function(req, res){

  var newcustomer = req.body;
  console.log('length', reservations.length);
  if (reservations.length <= 5){
    console.log('pushing to reservations', reservations.length);
    reservations.push(newcustomer);
  } else {
    console.log('pushing to waiting', waiting.length);
    waiting.push(newcustomer);
  }

  console.log(reservations);

  console.log(reservations.length);

  res.json(newcustomer);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
})