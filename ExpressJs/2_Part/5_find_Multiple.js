const express = require("express");
const mongodb = require("mongodb")
const app = express();
app.set(express.json());

const connectionUrl = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(connectionUrl);

client
    .connect()
    .then(()=>console.log("Database connection successful"))
    .catch((error)=>console.log(error));

const db = client.db("schoolDb");
const student = db.collection("students");

//add the student
app.post("/student",(req,res,next)=>{
    student
        .insertMany(req.body)
        .then((data)=>res.status(200).send("Student added successfully"))
        .catch((error)=>res.status(500).send(error.message));
})

// get the student
app.get("/student",(req,res,next)=>{
    // const {age} = req.query;
    student
        //.find({email:email})

        // note : if want age : then we have to convert age into integer : because it was in string So use {age : parseInt(22)}
        .find({name :"abc"})
        .toArray()
        .then((data)=>res.status(200).send(data))
        .catch((error)=>res.status(500).send(error.message));
})
app.listen(8008 , ()=>{
    console.log("Server is running on port 8003");
})
// output : 
// Server is running on port 8003
// Database connection successful
// if we send the post request with multiple student data :
// Student added successfully
// if we send the get request :
// [
//     {
//         "_id": "5f5a5a5a5a5a5a
//         "name": "Rahul",
//         "age": 22,
//         "email": "rahul@gmail.com"
//     },
//     {
//         "_id": "5f5a5a5a5a5a5a
//         "name": "Rahul",
//         "age": 22,
//         "email": "rahul@gmail.com"
//     }
// ]
