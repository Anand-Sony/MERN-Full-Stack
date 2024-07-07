const { name } = require("ejs");
const express = require("express");
const app = express();

// 1 ----> 

app.get("/",function(request, response,next){
  response.send("This is Home Page");
})

app.get("/example",function(request, response,next){
  response.send("This is get Page");
})
app.post("/example",function(request, response,next){
  response.send("This is post Page");
})
app.patch("/example",function(request, response,next){
  response.send("This is patch Page");
})
app.delete("/example",function(request, response,next){
  response.send("This is delete Page");
})
