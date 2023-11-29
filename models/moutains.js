const mongoose = require("mongoose")
const moutainsSchema = mongoose.Schema({
    mountainName: {type:String, required: 'Moutains name is required'},
    place: String,
    Height: {type:Number, minimum:0, maximum:5000}
})
module.exports = mongoose.model("Moutains",moutainsSchema)

