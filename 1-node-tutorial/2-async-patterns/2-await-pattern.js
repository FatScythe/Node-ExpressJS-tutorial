const { readFile, writeFile } = require("fs").promises;

// Or we can just attach the method promises on the filesystem module `.promises`
const go = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");

    await writeFile(
      "./content/result-mind-grenade.txt",
      `This is a new file, THIS IS AWESOME : ${first} ${second} 
`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

go();

// We can also use the util module, using the promisify method

// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const go = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf8");
//     const second = await readFilePromise("./content/second.txt", "utf8");

//     await writeFilePromise(
//       "./content/result-mind-grenade.txt",
//       `This is a new file, THIS IS AWESOME : ${first} ${second}
// `,
//       { flag: "a" }
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// go();

// Using promises .then .catch

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

// getText("../content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
