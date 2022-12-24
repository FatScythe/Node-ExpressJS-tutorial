const http = require("http");

// console.log(http);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is the homepage!!!");
    res.end();
    return;
  }

  if (req.url === "/about") {
    // we can also write it like this
    res.end("This is the about page");
    return;
  }

  // we can also add html directly from here ---COOL!!!
  // I'm trying a react router stunt
  // if(req.url === "*")  {
  res.end(
    `<div style ="text-align: center;">
    <h2>Error cannot find this page<h2>
    <button><a href="/">Go back home</a></button>
    </div>`
  );
  // }
});

server.listen("5000");
