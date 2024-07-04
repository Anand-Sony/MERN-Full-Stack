let xyz = require("path");
let myPath = "C:/Users/hp/OneDrive/Desktop/Coding Area/MERN/2CoreModules/1path.js";

let parsedPath = xyz.parse(myPath);
let dirname = xyz.dirname(myPath); 
let ext = xyz.extname(myPath);
let basename = xyz.basename(myPath);

console.log(parsedPath); // Output: { root: '', dir: '', base: '1path
console.log(dirname); // give the path of the file
console.log(ext);    // give extension of the file
console.log(basename); // Output: 1path.js