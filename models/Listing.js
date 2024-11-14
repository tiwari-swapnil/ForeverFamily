const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name: String,
    title: String,
    description: String,
    image:{
        url: String,
        filename: String,
    },
    orphanage_name: String,
    age: Number,
    contact: String,
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
})

module.exports = mongoose.model("Listing", listingSchema);