const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log(method, url, time);
  // if we don't provide the next fn or a response it will send any response back
  // res.send("Home");
  next();
};

module.exports = logger;
