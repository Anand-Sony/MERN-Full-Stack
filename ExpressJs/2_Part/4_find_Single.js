const express = require("express");
const mongodb = require("mongodb");
const app = express();
app.set(express.json());

const connectionUrl = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(connectionUrl);

client.connect().then(()=>console.log("Database connection Successful")).catch((error)=>console.log(error));

const db = client.db("schoolDb");
const student = db.collection("students");

// add a student 
app.post("/student",(req,res,next)=>{
    student
        .insertMany(req.body)
        .then(()=>res.status(201).send("Student added Successfully"))
        .catch((error).status(500).send(error.message));
});

// get student
app.get("/student",(req,res,next)=>{
    // student
    //     .findOne({name:"joe"})
    //     .then((data)=>res.status(200).json(data))
    //     .catch((error)=>res.status(500).send(error.message));

        // also get by request query: go on postman and type ?email=abc@xyz.com
        const {email} = req.query;
        student
        .findOne({email:email})
        .then((data)=>res.status(200).json(data))
        .catch((error)=>res.status(500).send(error.message));

});

app.listen(8003 , ()=>{
    console.log("Server is running on port 8003");
});
