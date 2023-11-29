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


// Handle moutains delete form on DELETE.
exports.moutains_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await moutains.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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



    // Handle a show one view with id specified by query
exports.moutains_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await moutains.findById( req.query.id)
res.render('moutainsdetail',
{ title: 'moutains Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a moutains.
// No body, no in path parameter, no query.
// Does not need to be async
exports.moutains_create_Page = function(req, res) {
console.log("create view")
try{
res.render('moutainscreate', { title: 'moutains Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for updating a moutains.
// query provides the id
exports.moutains_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await moutains.findById(req.query.id)
    res.render('moutainsupdate', { title: 'moutains Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.moutains_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await moutains.findById(req.query.id)
    res.render('moutainsdelete', { title: 'moutains Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle moutains create on POST.
exports.moutains_create_post = async function(req, res) {
console.log(req.body)
console.log(req.body.moutainsName)
console.log(req.body.height)
console.log(req.body.Place)
let document = new moutains();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"moutains_type":"goat", "cost":12, "size":"large"}
document.mountainName = req.body.moutainsName;
document.Height = req.body.height;
document.place = req.body.Place;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};