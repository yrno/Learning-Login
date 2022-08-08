var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('hashedlogin');
});

module.exports = router;