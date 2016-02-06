'use strict';

var express  = require('express');
var path     = require('path');
var routes   = require('./app/routes/index.js');
var api      = require('./app/api/img-sal.js');

require('dotenv').config({
    silent: true
});

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

routes(app);
api(app);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
