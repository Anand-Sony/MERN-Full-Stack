const express = require ("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const connectionUrl = "mongodb://localhost:27017/school_Db";
mongoose
    .connect(connectionUrl)
    .then(()=>console.log("Database connection successful"))
    .catch((error)=>console.log(error));

app.listen(8009,()=>{
    console.log("Server is running on port 8009");
});
