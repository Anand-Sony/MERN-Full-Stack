const { name } = require("ejs");
const express = require("express");
const app = express();

app.get("/test",(req, res)=>{
    res.send("Test Response");
})

app.get("/example", (req,res)=>{

    //res.end();// this will end the response;
    // res.send("Example Route");
    res.set("title","express")  // takes 2 parameter : header name and header value
    res.set("age",22)  // takes 2 parameter : header name and header value

    res.json({
        name:"Joe",
        age:30,
        email:"joexyz@gmail.com"
    });

    // res.redirect("/test");

    //res.location("/xyz"); // for this your json should should be work
    const title = res.get("title");
    console.log(title); // express
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});
