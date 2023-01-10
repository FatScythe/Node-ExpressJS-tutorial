const EventEmitter = require("events");

// It is a class
const customEmitter = new EventEmitter();

// the <<on>> property takes in a string, and a callback function
customEmitter.on("request", (name, age) => {
  console.log(`Hi, my name is ${name}, and my age is ${age}`);
});

customEmitter.on("request", () => {
  console.log("Hello world");
});

// NB: the <<emit>> must always be below <<on>> as it is not move to the top like a fn

// the <<emit>> property takes in a string similar to the <<on>> property
// it can alos take argument, for the callback function in <<on>> property
customEmitter.emit("request", "Fahm", 23);
