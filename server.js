const express = require('express');
const socketio = require('socket.io');
const app = express();

const server = app.listen(5000, () => {
  console.log('running');
});

const io = socketio(server);

io.on('headers', (headers, req) => {
  console.log(headers);
});

io.on('connection', (socket, req) => {
  socket.emit('connectionmsg', 'Connected');
  socket.on('message', (msg) => {
    console.log(msg);
  });

  socket.on('msgData', (msg) => {
    io.emit('msgRespFromServer', msg);
  });
});
