const express = require("express");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

const connectionUrl = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(connectionUrl);

client
    .connect()
    .then(()=> console.log("database connection successful"))
    .catch((error) => console.log(error));

const db = client.db("schoolDb");
const student = db.collection("student");

app.post("/student",(req,res,next)=>{

    student
        .insertMany(req.body)
        .then(()=>res.status(201).send("Student added Successfully"))
        .catch((error)=>res.status(500).send(error.message));
});

app.listen(8003 , ()=>{
    console.log("Server is running on port 8003");
});
