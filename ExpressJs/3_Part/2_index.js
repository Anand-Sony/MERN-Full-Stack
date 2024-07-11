// 1 : Add to database Paet(1) 
/*
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
*/




// 2 : Add to database "Not changing the data like name,age in the vs code"
/*
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
*/





// 3 : Add to database part(2) using .insertMany
/*
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
*/






// 4 : Find Single Document from database
/*
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
*/






// 5 : Find Multiple Document from database
/*
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
*/





// 5 : Update Single Document : 
/*
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
        .findOneAndUpdate({email:email} , {$set : {dept:dept , age:age}} ,{returnDocument:"after"} ) 
        .then( (data)=> res.status(200).json({message:"Student updated Successfully",updatedStudent:data  }))
        .catch((error)=>res.status(500).json({message:error.message}))

});

app.listen(8008 , ()=>{
    console.log("Server is running on port 8008");
});
*/






// 6 : Update Multiple Document
/*
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
*/







// 7 : Delete Single Document
/*
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

// delete Single document : 
app.delete("/student",(req,res,next)=>{
    const {email} = req.query;
    student
        .findOneAndDelete({email:email})
        .then(()=>res.status(200).json({message:"Student deleted Successfully"}))
        .catch((error)=>res.status(500).json({message:error.message}));
});

app.listen(8008 , ()=>{
    console.log("Server is running on port 8008");
});
*/







// 8 : Delete Multiple Document
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

// delete multi document : 
app.delete("/student",(req,res,next)=>{
    const {email} = req.query;
    student
        .deleteMany({email:email})
        .then((data)=>res.status(200).json({message:"Student deleted Successfully"}))
        .catch((error)=>res.status(500).json({message:error.message}));
})

app.listen(8008 , ()=>{
    console.log("Server is running on port 8008");
});