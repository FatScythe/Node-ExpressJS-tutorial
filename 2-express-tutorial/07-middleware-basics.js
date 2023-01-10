const express = require("express");
const app = express();

// The middleware allows us to place a function in between the req and res
// request => middleware => response

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log(method, url, time);
  // if we don't provide the next fn or a response it will send any response back
  // res.send("Home");
  next();
};

// The logger fn doesn't need an argument here because express provides 3 arguments
// req, res and next
app.get("/", logger, (req, res) => {
  res.send("Homepage");
});

app.get("/about", logger, (req, res) => {
  res.send("Aboutpage");
});
app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
