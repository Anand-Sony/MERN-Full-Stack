const { name } = require("ejs");
const express = require("express");
const app = express();

app.set("view engine","ejs");

app.get("/example",(req,res)=>{
    // res.render("pages/home.ejs");

    res.render("test.ejs" , {name:"Joe" , email:"Joe@gmail.com" , age:22})
});

app.listen(8000 , ()=>{
    console.log("Server is running on port 8000");
});
