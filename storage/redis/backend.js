/**
 * Chat Application:
 * Lists: users, messages, rooms
 */
var express = require('express'),
    redis = new require('ioredis')(),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    PORT = 3000;

redis.select(0, function(err, result) {
    if (err) throw err;

    console.log('[Redis] Connected to database 0');
});

app.use('/', express.static(__dirname + '/public'));

server.listen(PORT, function() {
    console.log('[Http] Server listen on port %d', PORT);
});
