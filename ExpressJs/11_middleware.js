const { name } = require("ejs");
const express = require("express");
const app = express();
const middleWare1 = (obj)=>{
    return(req,res,next)=>{
        console.log("MiddleWare 1");
        req.name = obj.name;
        req.email = obj.email;
        next();
    }
}
const middleWare2 = (req,res,next)=>{
    console.log("MiddleWare 2");
    next();
}
app.use(middleWare1({name:"joe", email:"joe@gmail.com"}));
app.use(middleWare2);

app.get("/example",(req,res,next)=>{
    console.log(req.name);
    console.log(req.email);
    res.send("Example Route")
})
app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
});
