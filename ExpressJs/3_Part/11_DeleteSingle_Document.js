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

app.listen(8008 ,()=>{
    console.log("Server is running on port 8008");
});
