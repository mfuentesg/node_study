var express = require('express'),
    app = express(),
    router = express.Router();

app.use('/projects', require('./projects'));
app.use('/languages', require('./languages'));

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
