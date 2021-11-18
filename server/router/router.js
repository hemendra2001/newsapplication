const router = require("express").Router();
const {postNews,get,getID,deleteUser,registerUser,deleteregisterUser,deleteregisterUserById,getUser,updateUser,loginUser} = require("../controller/controller");
const upload = require("./../controller/multer");
const connection = require('./../model/connection')
const secure = require("./../middleware/secure");


// Here operation on Post
router.post("/postNews",upload,postNews);
router.get("/getNews",get)
router.get("/getNewssingle/:id",getID)
// router.delete("/deleteAll",deleteUser)


// Here operation on user
router.post("/register",registerUser);
// router.delete("/deleteAllUser",secure,deleteregisterUser)
// router.delete("/deleteOneUser/:id",deleteregisterUserById)
// router.get("/getAllUser",getUser)
// router.put("/updateUser/:id",updateUser)
router.post("/login",loginUser)

module.exports = router;