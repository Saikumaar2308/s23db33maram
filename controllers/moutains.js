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
exports.moutains_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await moutains.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle moutains create on POST.
exports.moutains_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: moutains create POST');
};
// Handle moutains delete form on DELETE.
exports.moutains_delete = function(req, res) {
res.send('NOT IMPLEMENTED: moutains delete DELETE ' + req.params.id);
};
//Handle moutains update form on PUT.
exports.moutains_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await moutains.findById( req.params.id)
// Do updates of properties
if(req.body.mountainName)
toUpdate.mountainName = req.body.mountainName;
if(req.body.height) toUpdate.height = req.body.height;
if(req.body.place) toUpdate.place = req.body.place;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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