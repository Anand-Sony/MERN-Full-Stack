const express = require("express");
const mongodb = require("mongodb");
const app = express();
app.use(express.json());

const connectionUrl = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(connectionUrl);

client  
    .connect()
    .then(()=>console.log("Database connection Successful"))
    .catch((error)=>console.log(error));

const db = client.db("schoolDb");
const student = db.collection("students");

// add the students : 
app.post("/student", (req, res,next)=>{
  student
    .insertMany(req.body)
    .then(()=>res.status(201).send("Student added successfully"))
    .catch((error)=>res.status(500).send(error.message));
});

// get the students :
app.get("/student", (req, res,next)=>{
    const {dept} = req.query; 
    student
        .find({dept:dept})
        .toArray()
        .then((data)=>res.status(200).json(data))
        .catch((error)=>res.status(500).send(error.message));
});

// update the document : 
app.put("/student", (req, res,next)=>{
    const {email} = req.query;
    const {dept,age} = req.body;
    student
        .updateMany({email:email} , {$set : {dept:dept , age:age}} ,{returnDocument:"after"} ) 
        .then( (data)=> res.status(200).json({message:"Student updated Successfully",updatedStudent:data  }))
        .catch((error)=>res.status(500).json({message:error.message}))

});

app.listen(8008 , ()=>{
    console.log("Server is running on port 8008");
});
