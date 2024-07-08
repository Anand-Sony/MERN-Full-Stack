const { name } = require("ejs");
const express = require("express");
const app = express();
app.get("/example",(req,res,next)=>{
    console.log(xyz);
    res.send("Example Route");
});
const errorMiddleware = (error, req,res,next)=>{
    //console.log(error);

    // if we want to get message of error then :
    // console.log(error.message);
    // console.log(error.stack);
    // res.send("custom error handling");

    // now we will use next(): so remove upper console.log code :
    //next(error.stack); 

}
app.use(errorMiddleware);
app.listen(8002, ()=>{
    console.log("Server is running on port 8002");
})
