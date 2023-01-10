const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
// request => middleware => response

// express middleware
// app.use(express.static('./public'))
// custom middleware
// app.use([logger, authorize]);
// external middleware
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/about", (req, res) => {
  res.send("Aboutpage");
});

app.get("/api/products", (req, res) => {
  console.log(req.info);
  res.send("Products");
});
// you can also use multiple on one get process
app.get("/api/item", (req, res) => {
  res.send("Item");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
