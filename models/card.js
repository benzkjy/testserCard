const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CardSchema = new Schema({
    name:{ 
        type: String,
        required: true
    }, 
    status: {
        type: String,
    }, 
    content: {
        type: String
    }, 
    category:{
        type: String
    },
    author:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("card", CardSchema);