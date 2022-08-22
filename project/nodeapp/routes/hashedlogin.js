const argon2 = require("argon2")
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('hashedlogin')
});

router.post('/', async (req, res) => {
    const userinput = req.body.password;
    const hash = "$argon2id$v=19$m=4096,t=3,p=1$OiZMJ1HpDGT1yHqfOqbMdQ$Dpaw9lJ8IKL+p/QTg0H9h/gwY+TTHSLIdDj3tQQCDFc";

    const correct = await argon2.verify(hash, userinput);
    console.log(correct);

    if (correct) {
        res.render('welcome')
        return;
    } else
    {
    res.render('fail')
    return;
    }
});

module.exports = router;