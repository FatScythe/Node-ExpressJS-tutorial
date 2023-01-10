// Inbuilt modules - FileModule
// Sychronous Method
const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log("read");
// console.log(first, "and", second);

writeFileSync(
  "./content/result-sync.txt",
  `
This file was created with the "writeFileSync" method, 
Here is the result: ${first} and ${second}`,

  { flag: "a" }
);

// the third argument {flag: "a"}, stops the default of overwriting a file and instead
// adds to it

console.log("done");
