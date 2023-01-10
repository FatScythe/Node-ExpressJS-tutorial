const express = require("express");
const router = express.Router();

// we can also seperate the functions into a seperate file to make this file less chunky
const {
  getPeople,
  postPeople,
  postmanPeople,
  putPerson,
  deletePerson,
} = require("../controller/people-controller");

// router.get("/", getPeople);
// router.post("/", postPeople);
// router.post("/postman", postmanPeople);
// router.put("/:id", putPerson);
// router.delete("/:id", deletePerson);

// OR
// we can also chain same path using the 'route' method
router.route("/").get(getPeople).post(postPeople);
router.route("/postman").post(postmanPeople);
router.route("/:id").put(putPerson).delete(deletePerson);

module.exports = router;
