const http = require("http");
const { readFileSync } = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.method);

  // HomePage
  if (req.url === "/") {
    // writeHead takes in the status code and options
    // e.g MIME types
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>HomePage</h1>`);
    res.end();
  }
  // About Page
  else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  // Error Page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404! Page Not Found</h1>");
    res.end();
  }
});

// The port can be any number but we usually use 5000 for development
// 443 for live server etc...
server.listen(50);
