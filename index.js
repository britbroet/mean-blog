var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://localhost/meanblog');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/posts', require('./controllers/post_controller'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);