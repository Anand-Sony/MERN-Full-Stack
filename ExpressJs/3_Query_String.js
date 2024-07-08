
const { name } = require("ejs");
const express = require("express");
const app = express();
app.get("/users", (req, res)=>{
    res.send("User list");
})
app.get("/users/:userId", (req,res)=>{
    let {userId} = req.params;
    let {name, email} = req.query;
    console.log(name,email);
    res.send("userId = " + userId + " detail.");
})
