// Setup express server & parser
var express = require('express');
var parser = require('body-parser');
var app = express();
var http = require('http').Server(app);

// Initialize Socket IO using setup server instance
var io = require('socket.io')(http);

// Specify port
var port = process.env.PORT || 8080;

// Set target directory for listening
app.use(express.static(__dirname + '/public'));
app.use(parser.urlencoded({
  extended: true,
}));

// Setup server to listen on specified port
http.listen(port, () => {
  console.log('Server started, listening on *:' + port);
});

io.on('connection', (socket) => {
  
  console.log('New client connection: ' + socket.id);

  socket.on('msgToServer', (msg) => {
    console.log("New msg: " + msg);
    io.emit('msgToClients', { message: msg, id: socket.id });
  })
  
});
