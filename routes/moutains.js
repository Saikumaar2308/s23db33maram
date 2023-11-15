var express = require('express');
const moutains_controlers= require('../controllers/moutains');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('moutains', { title: 'Search Results Moutains' });
});*/
router.get('/', moutains_controlers.moutains_view_all_Page );

module.exports = router;
// GET request for one moutains.
router.get('/moutains/:id', moutains_controlers.moutains_detail);

/* GET detail moutains page */
router.get('/detail', moutains_controlers.moutains_view_one_Page);

