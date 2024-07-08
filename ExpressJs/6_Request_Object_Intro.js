const { name } = require("ejs");
const express = require("express");
const app = express();

app.get("/example",(req,res)=>{

    console.log(req.hostname); 
    console.log(req.ip);
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.secure);
    console.log(req.get("Content-Type"));
    console.log(req.get("Content-Length"));

    res.send("Example Route");
});

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});
