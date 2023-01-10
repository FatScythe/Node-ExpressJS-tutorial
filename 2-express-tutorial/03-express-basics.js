const express = require("express");

// Initialize Express
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("HomePage");
});

app.get("/about", (req, res) => {
  res.status(200).send("AboutPage");
});

// the method "all" represents the CRUD method i.e get, put, post, delete
app.all("*", (req, res) => {
  res.status(404).send("<h2>Error 404! Resouces cannot be found!!!</h2>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
// app.get
// spp.post
// app.all
// app.put
// app.listen
// app.delete
