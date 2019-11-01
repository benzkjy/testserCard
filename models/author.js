const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const Author = new Schema({
    name:{
        type:String,
        required: true
    },
    email: {
        type: String,
    }
});

module.exports = mongoose.model("author",Author);