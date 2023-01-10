const express = require("express");
const app = express();
const { people } = require("./data");

// static
app.use(express.static("./2-express-tutorial/methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.send("Please Provide a name");
  }
  res.send(`Welcome ${name}`);
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please Provide Name" });
  }
  res.status(201).json({
    success: true,
    person: { id: Number(new Date().getTime().toString()), name },
  });
});

// POST using postman
app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide a Name" });
  }

  res.status(201).json({
    success: true,
    data: [...people, { id: new Date().getTime().toString(), name }],
  });
});

// PUT
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  let person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `no person with the id:${id} does not exist on this server`,
    });
  }

  person.name = name;
  res.status(200).json({ success: true, data: [...people] });
});

// DELETE
app.delete("/api/people/:id", (req, res) => {
  let person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `no person with the id:${req.params.id} does not exist on this server`,
    });
  }

  let newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  console.log(newPeople);
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
