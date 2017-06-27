var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.query['hub.mode'] && req.query['hub.verify_token'] === 'abcdefg') {
        res.status(200).send(req.query['hub.challenge']);
    } else {
        res.status(403).end();
    }
});

router.post('/', function (req, res, next) {
    console.log(req.body.entry[0].messaging[0].sender);
});

module.exports = router;
