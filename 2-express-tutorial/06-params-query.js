const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h2>Welcome to the Api</h2> <a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  const singleProduct = products.find((products) => products.id === Number(id));
  if (!singleProduct) {
    return res
      .status(404)
      .send("<h2>Error 404!, This product does not exist</h2>");
  }
  //   console.log(singleProduct);
  return res.json(singleProduct);
});

// Multiple request parameter are also possible
app.get("/api/products/:productId/reviews/:reviewid", (req, res) => {
  console.log(req.params);
  return res.send("multiple params");
});

// Query string parameters are usually written like this
// http://localhost:5000/api/v1/query?limits=8&search=a
// the number of queries can be infinite, just keep adding '& for a new one
app.get("/api/v1/query", (req, res) => {
  // NB : we don't neec to create another url, we can add to the product instead
  // console.log(req.query);
  const { limit, search } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  // When the conditions are met but yields no result
  if (sortedProducts.length < 1) {
    // You can output anything you want
    // res.status(200).send("no products matched your search");
    // industry standard
    return res.json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
