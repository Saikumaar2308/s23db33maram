var express = require('express');
const moutains_controlers= require('../controllers/moutains');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

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

/* GET create moutains page */
router.get('/create',secured, moutains_controlers.moutains_create_Page);

/* GET create update page */
router.get('/update',secured, moutains_controlers.moutains_update_Page);

/* GET delete moutains page */
router.get('/delete',secured, moutains_controlers.moutains_delete_Page);


