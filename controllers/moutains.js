var moutains = require('../models/moutains');
// List of all moutainss
exports.moutains_list = async function(req, res) {
    try{
        themoutains = await moutains.find();
        res.send(themoutains);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };

// for a specific moutains.
exports.moutains_detail = function(req, res) {
res.send('NOT IMPLEMENTED: moutains detail: ' + req.params.id);
};
// Handle moutains create on POST.
exports.moutains_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: moutains create POST');
};
// Handle moutains delete form on DELETE.
exports.moutains_delete = function(req, res) {
res.send('NOT IMPLEMENTED: moutains delete DELETE ' + req.params.id);
};
// Handle moutains update form on PUT.
exports.moutains_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: moutains update PUT' + req.params.id);
};
