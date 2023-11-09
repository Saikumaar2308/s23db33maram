var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var moutains_controller = require('../controllers/moutains');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// moutains ROUTES ///
// POST request for creating a moutains.
router.post('/moutains', moutains_controller.moutains_create_post);
// DELETE request to delete moutains.
router.delete('/moutains/:id', moutains_controller.moutains_delete);
// PUT request to update moutains.
router.put('/moutains/:id', moutains_controller.moutains_update_put);
// GET request for one moutains.
router.get('/moutains/:id', moutains_controller.moutains_detail);
// GET request for list of all moutains items.
router.get('/moutains', moutains_controller.moutains_list);
module.exports = router;