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

// add multiple document : 
app.post("/student/multiple" ,async (req,res,next)=>{
    try{
        await Student.insertMany(req.body);
        res.status(200).json({message:"Student added Successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// update single document part
app.put("/student/single" ,async (req,res,next)=>{
    try{
        const {email} = req.query;
        const{dept} = req.body; // you can change 1 or 2 detail of single document
        
        await Student.findOneAndUpdate({email:email}, {$set:{dept:dept}})
        res.status(200).json({message:"Student updated Successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// update Multiple Document
app.put("/student/multiple", async(req,res,next)=>{
    try{
        const {dept} = req.query;
        const {age} = req.body;
        await Student.updateMany({dept:dept} , {age:age});
        // Also use in above code : ({dept:dept} , $set : {age:age})  as we did in earlier code

        res.status(500).json({message:"Student updated Succesfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// find single document : 1 part
app.get("/student/single",async(req,res,next)=>{
    try{
        const {email} = req.query;
        const student = await Student.findOne({email:email});
        res.status(500).json({data:student});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});
// find single document : 2 part
app.get("/student/single/:studentId",async(req,res,next)=>{
    try{
        const {studentId} = req.params;
        const student = await Student.findById(studentId);
        res.status(500).json({data:student});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

//find multiple document : 
app.get("/student/multiple",async (req,res,next)=>{
    try{
        const {dept,age,email} = req.query;
        const student = await Student.find({dept:dept , age:age}); //we want to search both age and dept

        res.status(200).json({data:student});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

// delete single document : part 1 :-
app.delete("/student/single",async(req,res,next)=>{
    try{
        const {email} = req.query;
        await Student.findOneAndDelete({email:email});
        res.status(200).json({message:"Student deleted Successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message});
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
