const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  if (req.url === "/") {
    res.end("HomePage: Hello World");
  } else if (req.url === "/about") {
    // blocking code
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.write("This is the about page");
    res.end();
  } else {
    res.end(`<div style ="text-align: center;">
    <h2>Error cannot find this page<h2>
    <button><a href="/">Go back home</a></button>
    </div>`);
  }
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
