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
