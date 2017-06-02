var express = require('express');
var app = express();

// Set target directory for listening
app.use(express.static(__dirname + '/public'));

// Setup server to listen on specified port
var server = app.listen(3000, () => {
  console.log('Listening on Port 3000...');
});

// Initialize Socket IO using setup server instance
var io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('New client connection: ' + socket.id);

  socket.on('msgToServer', (msg) => {
    console.log("New msg: " + msg);
  })
});
