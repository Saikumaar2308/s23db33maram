var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('moutains', { title: 'Search Results Moutains' });
});

module.exports = router;
