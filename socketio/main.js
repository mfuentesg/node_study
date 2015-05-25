var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('sended', function(data) {
        console.log(data.message);

        io.emit('resend', { message: 'Hi client' });
    });

    socket.on('join', function(data) {
        socket.username = data.name;
    });

    socket.broadcast.emit('joined', {username: socket.username});
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(8080, function() { console.log('Server listening on port 8080') });
