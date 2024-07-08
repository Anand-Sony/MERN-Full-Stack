const { name } = require("ejs");
const express = require("express");
const app = express();
const admin = express.Router();
const student = express.Router();

app.use("/admin",admin);
app.use("/student",student);

admin.get("/home",(req,res)=>{
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("admin Home Page");
})

student.get("/home",(req,res)=>{
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Student Home Page");
})

app.get("/home",(req,res)=>{
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("common home page");
})

app.listen(8000,()=>{
    console.log("Server is running at port 8000");
})
