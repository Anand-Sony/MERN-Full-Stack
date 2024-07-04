const http = require("http");

// create a server :
const server = http.createServer(function(request, response){
    if (request.url === "/") {   // Check if the requested URL is the root URL ("/")
        response.write("This is home page");
        response.write("<p>This is description</p>");
    }
    else if(request.url==="/about"){
        response.write("This is about page");
    }
    else if(request.url==="/contact"){
        response.write("This is contact page");
    }
    else{
        response.write("404 Error Found");
    }
    response.end();   // End the response, indicating that the server is done sending data
}) 

// Listen for "Connection" events on the server, which are emitted when a new connection is established
server.on("Connection" , function(){
    console.log("Connection Successful") //indicating that a connection was successful
})

// listening the server : 
server.listen(3002,function(){
    console.log("Server is running on port 3001");
})