const fs  = require("fs");

fs.writeFile("text.txt" , "hi there" , function (error) {
    if (!error) {
        console.log("File Created Successfully");
    }
})


// now we will append the word in same file
fs.appendFile("./text.txt", " how are you?" , function(error){
    if (!error) {
        console.log("File Appended Successfully");
    }
})

// to read the file : 
fs.readFile("./text.txt" , "utf-8" , function(error , data){
    if (!error) {
        console.log(data);
    }
})

// now delete the file
fs.unlink("./text.txt" , function(error){
    if (!error) {
        console.log("File Deleted Successfully");
    }
})