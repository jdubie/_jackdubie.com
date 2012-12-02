var express = require('express'),
    wheat = require('wheat');

var app = express();
app.use(wheat())
app.listen(8000);
