var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var title = "Our Users Page";
  res.render('users/index',{
    title:title,
    users:data
  });
});

module.exports = router;
