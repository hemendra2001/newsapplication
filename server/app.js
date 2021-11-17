const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
const router = path.join(__dirname,("./router/router"))
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(cookieParser());
app.use(require(router));
app.use(express.static('./public'))

app.get("/",(req,res)=>{
    res.send("Hello")
})




app.listen(PORT,()=>{
    console.log(`Your Port is running on ${PORT}`);
})


 