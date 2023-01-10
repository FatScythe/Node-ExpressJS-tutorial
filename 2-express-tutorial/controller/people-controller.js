let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please Provide Name" });
  }
  res.status(201).json({
    success: true,
    person: { id: Number(new Date().getTime().toString()), name },
  });
};

const postmanPeople = (req, res) => {
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
};

const putPerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = {
  getPeople,
  postPeople,
  postmanPeople,
  putPerson,
  deletePerson,
};
