const mongoose = require("mongoose");

// Here our connection

const connection = mongoose.connect("mongodb://localhost:127.0.0.1/news",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection Successfull");
}).catch((err)=>{
    console.log(err);
})