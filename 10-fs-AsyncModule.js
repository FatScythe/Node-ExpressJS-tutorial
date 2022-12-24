// Inbuilt modules - FileModule
// Asychronous Method
const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, resolve) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = resolve;
  readFile("./content/second.txt", "utf8", (err, resolve) => {
    console.log("reading");
    if (err) {
      console.log(err);
      return;
    }

    const second = resolve;
    writeFile(
      "./content/result-async.txt",
      `This file was created with the "writeFile" aynsc method, 
Here is the result:
${first} and ${second}`,
      { flag: "a" },
      (err, resolve) => {
        if (err) {
          console.log(err);
          return;
        }

        // console.log(resolve);
      }
    );
  });
});

console.log("done");
