const mongoose = require("mongoose");


// Here our Schema

const newsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true
    },
});


// Here our Model

const newsModel = mongoose.model("singleNews",newsSchema);

module.exports = newsModel;