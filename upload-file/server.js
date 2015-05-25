// Try with: curl --upload-file ./server.js http://localhost:8080

var server = require('http').createServer(),
    fs = require('fs');

server.on('request', function(req, res) {
    var file = fs.createWriteStream('file.js');
    req.pipe(file, {end: false});

    res.end();
}).listen(8080, function() {
    console.log('Server listening on port 8080');
});
