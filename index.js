let socket = io('http://localhost:5000');
// console.log(socket);
socket.on('connect', (data) => {
  socket.emit('message', 'Message from frontend');
  socket.on('connectionmsg', (msg) => {
    console.log(msg);
  });
});

document.querySelector('.form-submit').addEventListener('submit', (event) => {
  event.preventDefault();
  const textCont = document.querySelector('.msg').value;
  document.querySelector('.msg').value = '';
  socket.emit('msgData', { text: textCont });
});

socket.on('msgRespFromServer', (msg) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(msg.text));
  document.querySelector('ul').appendChild(li);
});
