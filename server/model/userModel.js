const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Here our Schema

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});



// Here hash the password
userSchema.pre("save",async function(){
    try{
        if(this.isModified("password")){
            this.password = await bcrypt.hash(this.password,10)
        }
    }
    catch(err){
        console.log(err);
    }
})



// Here our Model

const userModel = mongoose.model("registerUser",userSchema);

module.exports = userModel;