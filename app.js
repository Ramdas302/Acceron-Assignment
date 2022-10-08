var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./db/database');
var app = express();
app.use(bodyParser.json());
require('./routes/orderproducts')(app)
app.listen(3000, () =>{
    console.log('server started at port 3000')
})