const argon2 = require("argon2")
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('hashedlogin')
});

router.post('/', async (req, res) => {
    const userinput = req.body.password;

    const hash = await argon2.hash(userinput, {type: argon2.argon2id});
    console.log(hash);
    const correct = await argon2.verify(hash, "ilder");
    console.log(correct);

    if (correct) {
        res.render('welcome')
        return;
    }

    res.render('hashedlogin')
});

module.exports = router;