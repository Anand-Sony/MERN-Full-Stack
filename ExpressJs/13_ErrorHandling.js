const { name } = require("ejs");
const express = require("express");
const app = express();

const middleware1 = (req,res,next)=>{
    // throw new Error("error from middleware 1")

    // we can also use next from above case :
    // next("error from middleware 1")

    // but if we keep next() empty then output will be "Middleware 2" and in postman will be "Example Route"
    next();
};
const middleware2 = (req,res,next)=>{
    console.log("Middleware 2");
    next();
};
app.use(middleware1);
app.use(middleware2);

app.get("/example",(req,res,next)=>{
    res.send("Example Route");
});

const errorMiddleware = (error,req,res,next)=>{
    console.log(error);
    res.status(500).send("Response from error Middleware");
};
app.use(errorMiddleware);
app.listen(8001,()=>{
    console.log("Server is running on port 8001");
});
