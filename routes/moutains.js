var express = require('express');
const moutains_controlers= require('../controllers/moutains');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('moutains', { title: 'Search Results Moutains' });
});*/
router.get('/', moutains_controlers.moutains_view_all_Page );

module.exports = router;



