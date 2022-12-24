const _ = require("lodash");
console.log(_);
const item = [1, 2, [3, 4, 5, [[6, 7], 8, 9], [10, 11]]];

const newItem = _.flattenDeep(item);
console.log(newItem);
