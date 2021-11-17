const jwt = require("jsonwebtoken");


const secure = async(req,res,next) =>{
try{
 const token =  req.cookies.userLogin;
 const verifyToken = await jwt.verify(token,"Mysecret")
 if(!verifyToken){
    res.status(400).json("You have no authorization")
 }
 next();
}
catch(err){
    console.log("Error");
    res.status(500).json("Token Failed")
}



}





module.exports = secure