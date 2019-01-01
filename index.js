// Get express app that we created
var app = require('./app');
// Get the Node http module
var http = require('http');
// Get the port
var port = normalizePort(process.env.PORT || '4000');
// Set the port where you want ti run the app
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);


server.listen(port);

// Server Implements Emitter and catches error and listening events
server.on('error', onError);
server.on('listening', onListening);

// All these functions will be Hoisted
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log('Listening on ' + bind);
  }

