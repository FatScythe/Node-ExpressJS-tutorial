const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome to the Homepage");
// });

// OR

// Using Emitter API
// emits request event
// subcribe to it / listen for it / respond to it
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Welcome to the Home");
});

server.listen(5000);
