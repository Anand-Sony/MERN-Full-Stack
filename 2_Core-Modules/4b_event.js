const events = require("events");

const {EventEmitter} = events;
const eventemitter = new EventEmitter;

// register an event :
eventemitter.on("event-1", function(param1, value , name ){
    console.log("Hi there");
    console.log(param1);
    console.log(value);
    console.log(name);
})

// emit or raise the event : 
eventemitter.emit("event-1");
eventemitter.emit("event-1",{msg:"by there",age:"28",name:"joe"});