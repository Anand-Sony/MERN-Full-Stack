const events = require("events");

const {EventEmitter} = events;
const eventemitter = new EventEmitter;

// register an event :
eventemitter.on("event-1", function(){
    console.log("Hi there");
})

// emit or raise the event : 
eventemitter.emit("event-1");
