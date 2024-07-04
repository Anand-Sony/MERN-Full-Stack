const fs = require("fs");
fs.writeFileSync("text.txt" ,"hello my name is : ")  // create a new file named text.txt and write "hello my name is : " in it

// now we will add a text in same file
fs.appendFileSync("text.txt", "Joe Sharma"); // "Joe Sharma" in the same file after "hello my name is : "


// to read the file in the terminal
let data = fs.readFileSync("./text.txt" , {encoding:"utf-8"});
console.log(data);              // it will print the content of the file in the terminal



fs.unlinkSync("./text.txt");    // it will delete the file named text.txt