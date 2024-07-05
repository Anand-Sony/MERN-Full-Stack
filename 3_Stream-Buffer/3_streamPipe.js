const fs = require("fs");
const readStream = fs.createReadStream("./text.txt");
const writeStream = fs.createWriteStream("pipeStream.txt");

readStream.pipe(writeStream);