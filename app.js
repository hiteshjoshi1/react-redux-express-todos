'use strict';
// Get Express
const express = require('express');

const createError = require('http-errors');

// get Bodyparser 
const bodyParser = require('body-parser');

// get mongoose for mongodb
const mongoose = require('mongoose');
// get config for db and other sundry things
var config = require('./config');

const utils = require('./utils');

// require Routes - this is the router middleware
const routes = require('./routes/index');

// Create Express App
const app = express();
//Find out what Path does
const path = require('path');

// morgan - how much to LOG
const morgan = require('morgan');

// Logger that manages your log levels
const logger = require('./logger');

const url = config.getdbConnectionString();
logger.info(url);
// connect to db
mongoose.connect(config.getdbConnectionString(),  { useNewUrlParser: true }).then(
  () => { logger.info("Info -- Connected to MongoLab");
  logger.debug("Debug -- Connected to MongoLab")
},
  err => { logger.error("Could not connect to Mongodb", err); }
);

// Create seed data in case it is needed
if (config.seedDB) {
    require('./seed');
}

// Apply Bodyparser middleware
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

// We are an API so we do not need to set up default views
// TODO - remove ejs from Build
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// app.use(express.static(__dirname +'./../../')); 

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// tell express where static assets are
// app.use('./assets',express.static(__dirname+'/public'));


app.use(morgan('dev', {
  skip: function (req, res) {
      return res.statusCode < 400
  }, stream: process.stderr
}));

app.use(morgan('dev', {
  skip: function (req, res) {
      return res.statusCode >= 400
  }, stream: process.stdout
}));

app.get('/', function(req, res, next) {
  res.render('index', {title:'Deepika Todos'});
});

// Route order is IMPORTANT
app.use(routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : "Some error ocurred";
    // Util has a method that can convert an error to String for Json conversion
    var errorResponse = {
        Error: utils.errorStringify(res.locals.error , null, '\t')
    }
    // render the error page
    res.status(err.status || 500);
    //TODO  Sending the Stringified error trace back to  caller, ideally you wont do this in prod
    res.json(errorResponse);
  });



// export express app so that you can use it to start the server
module.exports = app;