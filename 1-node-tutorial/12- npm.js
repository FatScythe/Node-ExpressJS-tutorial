// npm - node package manager
// To get started with npm init or npm init -y (to accept yes as default)

// To install a package look for the package name and input in the terminal
// `npm i <packageName>` or `npm install <packageName>` (only installs inside the project)

// To install globally ` npm install -g <packageName>` (installs on the machine)

// To install as devDependency i.e you need the package to bulid the project but its not needed in production
// `npm i nodemon --save-dev` or `npm i nodemon -D`

// To uninstall `npm uninstall <packageName>` or you can
// delete the dependency in the package.json and node_modules
// and then delete the package-lock.json and npm install the project again

// package-lock.json contains the minor dependencies that major dependencies use

// in package.json version are usually signified as follows
// "version": "1.0.0",
// First number 1 > 2 - rep a big change
// 2nd number 0 > 3 - rep a change but still backward compatible
// 3rd number 0 > 2 - rep a small change e.g patch note, bug fixes

const _ = require("lodash");
console.log(_);
const item = [1, 2, [3, 4, 5, [[6, 7], 8, 9], [10, 11]]];

const newItem = _.flattenDeep(item);
console.log(newItem);
