var router = require('express').Router();

router.get('/', function(request, response) {
    response.status(200).send('Inside of languages controller');
});

module.exports = router;
