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
const student = db.collection("students");

app.post("/student",(req,res,next)=>{
    const{name,email,age,dept} = req.body;
    student
        .insertOne({
            name:name,     // we can also use :-    name:req.body.name,
            email:email,
            age:age,
            dept:dept,
        })
        .then(()=>res.status(201).send("Student added Successfully"))
        .catch((error)=>res.status(500).send(error.message));
});

app.listen(8002 , ()=>{
    console.log("Server is running on port 8002");
});
