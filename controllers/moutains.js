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

// VIEWS
// Handle a show all view
exports.moutains_view_all_Page = async function(req, res) {
    try{
    themoutains = await moutains.find();
    res.render('moutains', { title: 'moutains Search Results', results: themoutains });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle moutains create on POST.
exports.moutains_create_post = async function(req, res) {
console.log(req.body)
let document = new moutains();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"moutains_type":"goat", "cost":12, "size":"large"}
document.mountainName = req.body.mountainName;
document.Height = req.body.Height;
document.place = req.body.place;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};