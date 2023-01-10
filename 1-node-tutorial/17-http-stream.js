const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // This method is very unreliable as the big.txt file is very large
    // And it send it in large instant rather than small chunks
    // const text = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(text);
    // In the network tab the content-length show how large it is

    // This method sends it as chunked file for faster response
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      // pipe method is pushing readStream to the writeStream in chunks
      fileStream.pipe(res);
    });

    // In the network tab the transfer-encoding is chunked
    fileStream.on("error", (err) => {
      console.log(err);
    });
  })
  .listen(5000);
