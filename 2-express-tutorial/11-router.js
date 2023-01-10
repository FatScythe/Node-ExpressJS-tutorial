const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");

// static
app.use(express.static("./2-express-tutorial/methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// Router
// we can also combine our methods into the use method using the route
app.use("/login", auth);

app.use("/api/people", people);

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
