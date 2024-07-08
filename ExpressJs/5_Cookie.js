const { name } = require("ejs");
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/example",(req,res)=>{
    // const {email} = req.cookies;
    // console.log(email);

    // res.cookie("name","joe");
    // res.cookie("age","22");

    res.clearCookie("name");
    res.clearCookie("age");
    res.send("example route");
});

app.listen(8000,()=>{
    console.log("Server is running at port 8000");
});
