const express =  require("express");
const mongodb = require("mongodb");
const app = express();

const connectionUrl = "mongodb://localhost:27017";

const client = new mongodb.MongoClient(connectionUrl);

client
    .connect()
    .then (()=>console.log("Database connection Successful"))
    .catch((error)=>console.log(error));

const db = client.db("schoolDb");
const student = db.collection("students");
app.post("/student",(req,res,next)=>{
    student
        .insertOne({
            name:"joe",
            email:"joe@gmail.com",
            age:25,
            dept :"CS" 
        })
        .then(()=>res.status(201).send("Student added Succesfully"))
        .catch((error)=>res.status(500).send(error.message))
});

app.listen(8002, ()=>{
    console.log("Server is running on port 8002");
})
