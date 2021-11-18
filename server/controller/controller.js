const newsModel = require("./../model/model");
const userModel = require("./../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



// Here Our News Post API
const postNews = async (req, res) => {
    const { title, discription} = req.body;
    const file =  req.file ? req.file.path : null;
    if(!title || !discription || !file){
        res.status(400).json({ Error: "Please fill all the details" });
    }
    try {
        const newsDetail = await new newsModel({ title, discription,file });
        const saveDetail = await newsDetail.save();
        res.status(200).json({ Message: "Successfull Added News" });
        if (!saveDetail) {
            res.status(400).json({ Error: "Error is occured during save" });
        }
    }
    catch (err) {
        console.log(error);
        res.status(500).json({ Error: "Internal Error" });
    }
}



// Here get News API
const get = async (req, res) => {
    try{
        const findNews = await newsModel.find();
        res.status(200).json(findNews);
    }
    catch (err) {
        console.log(error);
        res.status(500).json({ Error: "Internal Error" });
    }
}


// Here get news by Id API
const getID = async (req, res) => {
    try{
        const id = req.params.id
        const findNews = await newsModel.findById(id);
        res.status(200).json(findNews); 
    }
    catch (err) {
        console.log(error);
        res.status(500).json({ Error: "Internal Error" });
    }
}


// Here delete All News API
const deleteUser = async(req,res) =>{
    try{
        const deleteAllUsers = await newsModel.deleteMany();
        res.status(200).json({ Error: "All News Deleted" });
    }
    catch (err) {
        console.log(error);
        res.status(500).json({ Error: "Internal Error" });
    }
}

// Here register User API
const registerUser = async(req,res) =>{
    const{username,email,password} = req.body;

  try{
      if(!username || !email || !password){
       res.status(400).json({Message:"Please fill all the detail"});  
      }
      else if(!/^[ a-zA-Z ]*$/.test(username)){
         res.status(400).json({Message:"Please enter valid username"});  
      }
      else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
         res.status(400).json({Message:"Please enter valid email"});  
      }
     else if(username.length < 3){
         res.status(400).json({Message:"Please fill more than 3 Letter in Username"});  
        }
      else if(password.length < 5){
             res.status(400).json({Message:"Please fill more than 4 Letter in Password"});  
            }
         else{
            const searchUser = await userModel.findOne({email});
            if(searchUser){
                 res.json({Message:"Sorry User already Present"});    
            }
            else{
                const getUser = await new userModel({username,email,password});
                const saveUser = await getUser.save();
                res.status(200).json({Message:"User Regsitered Successfull"});
            }     
         }       
  }
  catch(err){
      console.log(err);
      res.status(500).json({Message:"Internal Error"});
  }
}


// Here delete All User API
const deleteregisterUser = async(req,res) =>{
    try{
        const deleteAllUsers = await userModel.deleteMany();
        res.status(200).json({ Message: "All User Deleted" });
    }    catch(err){
        console.log(err);
        res.status(500).json({Message:"Internal Error"});
    }
  
}


// Here delete One User API
const deleteregisterUserById = async(req,res) =>{
    try{
        const id = req.params.id;
        const deleteAllUsers = await userModel.findByIdAndDelete(id);
        res.status(200).json({ Message: "Deleted Successfull" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({Message:"Internal Error"});
    }
  
}

// Here get all User API
const getUser = async(req,res)=>{
    try{
        const users = await userModel.find({});
        res.status(200).json(users);
    }
    catch(err){
        console.log(err);
        res.status(500).json({Message:"Internal Error"});
    }
  
}

// Here update User API
const updateUser = async(req,res)=>{
    try{
        const id = req.params.id
        const getUser = await userModel.findByIdAndUpdate(id,{$set:req.body})
        console.log(getUser);
        res.status(200).json({ Message: "User update Successfull" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({Message:"Internal Error"});
    }
}


// Here login User API
const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try{
        if(!email || !password){
            res.status(400).json({Message:"Please fill all the detail"});  
        }
        else{
            const getUser = await userModel.findOne({email});
            if(getUser){
                const match = await bcrypt.compare(password,getUser.password);
                if(match){
                //  Here generate token
                const token = jwt.sign({_id:getUser._id},"Mysecret");
                res.status(200).json({User:getUser.username,Token:token});
                }
                else{
                    res.status(400).json({Message:"Invalid Credentials"}); 
                }
            }
            else{
                res.status(400).json({Message:"Sorry no User Present"}); 
            }
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({Message:"Internal Error"});
    }  
}








module.exports = { postNews, get, getID, deleteUser,registerUser,deleteregisterUser,deleteregisterUserById,getUser,updateUser,loginUser};
