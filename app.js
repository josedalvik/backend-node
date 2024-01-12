var express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mensajes.db');
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS mensaje (id TEXT, asunto TEXT, mensaje TEXT);");
});
db.close();

var enviar = require('./controllers/enviar.js');
app.post('/enviar', enviar);

var recuperar = require('./controllers/recuperar.js');
app.get('/recuperar', recuperar);

var eliminar = require('./controllers/eliminar.js');
app.get('/eliminar/:id', eliminar);

var server = app.listen(2024, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("SUN running on %s:%s", host, port)
});