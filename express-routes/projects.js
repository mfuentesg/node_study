var router = require('express').Router();

router.get('/', function(request, response) {
    response.status(200).send('Inside of projects controller');
});

module.exports = router;
