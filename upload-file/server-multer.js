var express = require('express'),
    app = express(),
    multer = require('multer'),
    fs = require('fs');

app.use(multer({
    dest: './uploads-multer',
    onFileUploadComplete: function(file, request, response) {
        response.send('Upload Complete!');
    }
}));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});
app.post('/', function(request, response) {});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});
