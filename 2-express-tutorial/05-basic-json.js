const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  // the method 'json' stringify the products array
  // gives it a content type of application/json
  res.json(products);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

// Without Express
// const http = require("http");
// const { products } = require("./data");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(JSON.stringify(products));
//     rs;
//   }
// });

// server.listen(5000, () => {
//   console.log("server is running on port 5000");
// });
