const express = require("express");
const mongoose = require("mongoose");
const app= express();
app.use(express.json());

const connectionUrl = "mongodb://localhost:27017/school_Db";
mongoose
    .connect(connectionUrl)
    .then(()=>console.log("Database connection successful"))
    .catch((error)=>console.log(error));

const studentSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    dept:String,
});
const Student = mongoose.model("student" , studentSchema );

// add Single student :
app.post("/student/single", async(req,res,next)=>{
    try{
        const {name,email,age,dept} = req.body;
        
        const newStudent = new Student({name:name ,email:email ,age:age,dept:dept});
        await newStudent.save()
        
        res.status(200).json({message:"Student added successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
});

// delete single document : part 2 (using id) :-
app.delete("/student/single/:studentId",async(req,res,next)=>{
    try{
        const {studentId} = req.params;
        await Student.findByIdAndDelete(studentId);
        res.status(200).json({message:"Student deleted Successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// delete multiple document : 
app.delete("/student/multiple",async (req,res,next)=>{
    try{
        const {email} = req.query;
        await Student.deleteMany({email:email});

        res.status(200).json({message:"Student deleted Successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

app.listen(8008 ,()=>{
    console.log("Server is running on port 8008");
});
