const { name } = require("ejs");
const express = require("express");
const app = express();
app.get("/example",(req,res)=>{
    
    // res.status(302);
    // res.send("Example Route");

    // now we will do same above thing in 1 line:
    // res.status(404).send("Example Route");

    // we can also do json as well : 
    // res.status(500).json({name:"Joe" , age:22});

    // now we want direct status in Postman:
    res.sendStatus(401); // output = bad request
    console.log(res.statusCode + " " + res.statusMessage);     // 400 Bad Request
    
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})
