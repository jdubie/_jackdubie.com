var express = require('express'),
    wheat = require('wheat');

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(wheat());
app.listen(8000);
