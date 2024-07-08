const { name } = require("ejs");
const express = require("express");
const app = express();

const fs = require("fs");
app.get("/example",(req,res,next)=>{
    fs.readFile("text.txt",(error,data)=>{
        if (data) {
            res.send(data);
        }
        if (error) {
            next(error);
        }
    });
});

const errorMiddleware = (error,req,res,next)=>{
    next(error.message);
}
app.set(errorMiddleware);
app.listen(8002,()=>{
    console.log("Server is running on port 8002");
});
