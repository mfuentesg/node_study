var http = require('http'),
    PORT = 3000;


http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'json'
    });
    response.end('Say Hello');
}).listen(PORT);


/*Another option*/

var http = require('http'),
    server = http.createServer();

server.on('request', function(req, res){
    res.write('connected!');
});

server.on('close', function(req, res) {
    res.write('closed!');
});
