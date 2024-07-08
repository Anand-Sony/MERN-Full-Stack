const { name } = require("ejs");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/example", (req, res) => {
    res.format({
        "text/plain":()=>{
            res.send("Plain Text response");
        },
        "application/json":()=>{
            res.json({name:"Joe" , email:"Joe@gmail.com" , age:22});
        },
        "text/html":()=>{
            res.render("pages/home.ejs");
        },
        default:()=>{
            res.send("Nothing Matched");
        }
    })
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})
