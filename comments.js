//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Set up a simple route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Start the server
app.listen(port, function () {
  console.log('Server is running on port ' + port);
});