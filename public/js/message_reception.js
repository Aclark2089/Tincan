$(document).ready(function() {

  console.log('jQuery Loaded');
  var socket = io();

  $('#message').keydown(function(event) {
    var msg = this.value;

    if (event.which === 13) {

      console.log('Message: ' + msg);

      socket.emit('msgToServer', msg);

      $('#message').val('');

    }
  });

  socket.on('msgToClients', (data) => {
    console.log('Received new message: ' + data.message + ' from client: ' + data.id);
    $('.messages').append(data.id + ':' + '\t' + data.message);
    $('.messages').append('<br />');
  });

});