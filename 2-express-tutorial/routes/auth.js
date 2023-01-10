const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.send("Please Provide a name");
  }
  res.send(`Welcome ${name}`);
});

module.exports = router;
