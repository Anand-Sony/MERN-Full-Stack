const os  = require("os");
console.log(typeof os); // object

let archOfOs = os.arch();
console.log(archOfOs); // x64

let hostName = os.hostname();
console.log(hostName); // DESKTOP-MBQD0DO

let platformOfOs = os.platform();
console.log(platformOfOs); // win32

let cpusOfOs = os.cpus();
console.log(cpusOfOs); // returns an array of objects containing information about each CPU/core installed