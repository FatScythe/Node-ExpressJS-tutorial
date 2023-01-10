// A Big was created in lesson - 15 using for loop
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");
//  { highWaterMark: 20000 } // 20kb

// default 64kb - chunks
// last buffer - remainder
// highWaterMark - control size of the chunks of data
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) 90kb
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
