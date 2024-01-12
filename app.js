var express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var enviar = require('./controllers/enviar.js');
app.post('/enviar', enviar);

var server = app.listen(2024, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("SUN running on %s:%s", host, port)
});