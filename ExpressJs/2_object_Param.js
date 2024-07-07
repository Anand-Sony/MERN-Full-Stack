const { name } = require("ejs");
const express = require("express");
const app = express();

app.use(express.json());
app.post("/example", (request, response, next)=>{
    let data = request.body;
    console.log(data);
    response.send("This is example response");
})
app.listen(8000 , function(){
    console.log("Server is running at port 8000");
})
