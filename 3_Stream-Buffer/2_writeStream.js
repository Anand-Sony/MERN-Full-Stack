const fs = require("fs");

const readStream = fs.createReadStream("./text.txt");

const write = fs.createWriteStream("./copy.txt"); // by this code nothing is there in copy file

const writestream = fs.createWriteStream("output.txt");

readStream.on("data" , function(buffer){
    writestream.write(buffer);
})
