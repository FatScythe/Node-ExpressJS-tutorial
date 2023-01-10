const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
// request => middleware => response

// if we had about 15+ route path we might not want to physically
// add the middleware fn to each one of them to combat this we use 'use' method

// app.use(logger);
// NB: the middle ware should be initialize before the get or else it won't
// apply to those above it

// we can also specify what paths we want the middleware fn for

// app.use("/api", logger);
// NB: specifying only a base path means all the children path to said base
// path will recieve the middleware fn

// We can also have multiple middleware fn, we need only to place them in an array
// app.use([logger, authorize]);
// The position of each middleware fn determines which would compute first

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
app.get("/api/item", [logger, authorize], (req, res) => {
  res.send("Item");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
