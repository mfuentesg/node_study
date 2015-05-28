var express = require('express'),
    logger = require('./logger'),
    app = express();

app.use(logger);
app.use(express.static('public'));

app.get('/data', function(request, response) {
    var data = ['Marcelo', 'Martin', 'Diego', 'Gloria'],
        limit = request.query.limit || 0;

    if (limit > 0 && limit <= data.length) {
        response.json(data.slice(0, limit));
    } else if (limit > data.length) {
        response.status(403).json('The limit parameter it\'s wrong!');
    } else {
        response.json(data);
    }
});

// Routes with the same paramater name
app.param('name', function(request, response, next) {
    request.upperName = request.params.name.toString().toUpperCase();

    next();
});

app.get('/param1/:name', function(request, response) {
    var name = request.upperName;

    response.send(name);
});

app.get('/param2/:name', function(request, response) {
    var name = request.upperName;

    response.send(name);
});

app.listen(3000);
