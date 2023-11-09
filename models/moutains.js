const mongoose = require("mongoose")
const moutainsSchema = mongoose.Schema({
    mountainName: String,
    place: String,
    Height: Number
})
module.exports = mongoose.model("moutains",
moutainsSchema)