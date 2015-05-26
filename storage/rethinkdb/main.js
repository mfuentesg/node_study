var express = require('express'),
    r = require('rethinkdb'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    db = null;

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) return err;
    db = conn;
});
