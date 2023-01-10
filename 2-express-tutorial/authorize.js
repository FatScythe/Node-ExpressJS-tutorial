const authorize = (req, res, next) => {
  const { name } = req.query;
  //   console.log(name);
  if (name === "fahm") {
    console.log("authorize");
    req.info = { name, id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
