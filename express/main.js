var express = require('express'),
    app = express(),
    fs = require('fs'),
    request = require('request');

app.get('/', function(req, res) {
    app.use('/', express.static(__dirname + '/public'));
    res.sendFile(__dirname + '/index.html');
});

app.get('/template', function(req, response) {
    response.render('template.ejs', {
        name: 'Marcelo Fuentes',
        projects: [
            { name: 'ucsc', description: 'Un proyecto creado para mejorar ...' },
            { name: 'puc', description: 'Un proyecto creado ...' },
            { name: 'udec', description: 'Un proyecto ...' }
        ]
    });
});

app.get('/params/:name', function(req, res) {
    var params = req.params;

    res.render('template.ejs', {
        name: params.name,
        projects: []
    });
});

app.get('/search/:query', function(req, res) {
    var resFile = fs.createWriteStream('response.json');
    var query = req.params.query;

    var options = {
        url: "https://api.github.com/search/repositories?q="+query,
        headers: { 'User-Agent': 'request' }
    };

    request(options).pipe(resFile);
    res.end();

})

app.listen(3000);
