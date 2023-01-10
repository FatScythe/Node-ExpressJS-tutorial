// Inbuilt modules - path module
const path = require("path");

console.log(path.sep); // \
// show the system seperator type, if its a forward slash or backward slash

const filePath = path.join("/content", "subFolder", "test.txt");
// shows the path of what as been inputted
console.log(filePath); // \content\subFolder\text.txt

const base = path.basename(filePath);
// shows the final or last file or folder in the current filePath
console.log(base); // test.txt

const absPath = path.resolve(__dirname, "content", "subFolder", "test.txt");
// shows the absolute path with the argument being the current directory
console.log(absPath); // C:\Users\user\Desktop\Fahm\NodeJS-tutorial\content\subFolder\test.txt
