/*

const fs = require("fs");
let readStream = fs.createReadStream("./text.txt");
readStream.on("data", function(buffer){
    console.log(buffer.toString());
})

*/

// but if we want to read whole buffer at a time : 
const fs = require("fs");
let readStream = fs.createReadStream("./text.txt");
let content = [];

readStream.on("data", function(buffer){
    content.push(buffer);
})

readStream.on("end" , function(){  // end event is fired when there is no more data to read from the file.
    let actualData = Buffer.concat(content).toString();
    console.log(actualData);
})

