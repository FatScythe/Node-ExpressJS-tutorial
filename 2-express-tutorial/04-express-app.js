const express = require("express");
const app = express();
const path = require("path");

// setup static and middleware
app.use(express.static("./2-express-tutorial/public"));

// if index.html is already in the public folder we no longer need this block of code
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h2>Error 404!, Resources cannot be found</h2>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
