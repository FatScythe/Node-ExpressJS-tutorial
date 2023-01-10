const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./2-express-tutorial/navbar-app/index.html");
const homeStyles = readFileSync("./2-express-tutorial/navbar-app/styles.css");
const homeLogic = readFileSync(
  "./2-express-tutorial/navbar-app/browser-app.js"
);
const Logo = readFileSync("./2-express-tutorial/navbar-app/logo.svg");

// readFileSync is non-blocking because its not in the server function

const server = http.createServer((req, res) => {
  //   console.log(req.method);

  // HomePage
  if (req.url === "/") {
    // writeHead takes in the status code and options
    // e.g MIME types
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // About Page
  else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  // Home CSS
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(homeStyles);
  }
  // LOGIC
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javasript" });
    res.end(homeLogic);
  }
  // LoGO SVG
  else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.end(Logo);
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
