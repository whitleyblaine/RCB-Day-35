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
var reservations = [
  {
    customerName: "Elizaur Reyes",
    phoneNumber: "7326404475",
    customerEmail: "elizaurreyes@yahoo.com",
    customerID: "eli"
  }
]

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
  res.json(reservations);
})

// Create New Characters - takes in JSON input
app.post('/api/new', function(req, res){
  console.log(req.body);

  var newcustomer = req.body;
  // newcustomer.routeName = newcustomer.name.replace(/\s+/g, '').toLowerCase()

  console.log(newcustomer);

  reservations.push(newcustomer);

  res.json(newcustomer);
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
})