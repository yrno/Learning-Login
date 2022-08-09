var express = require('express');
const { request, response } = require('../app');
var router = express.Router();
var login = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

login.post('/api', (request, response) => {
  console.log(request);
})


module.exports = router;
