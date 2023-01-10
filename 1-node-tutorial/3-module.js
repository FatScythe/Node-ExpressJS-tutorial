//===== MODULES===== //

const { Fardah, Furqan } = require("./4.5-names");
const sayHi = require("./4-utils");

sayHi(Fardah);
sayHi(Furqan);

// Mind grenade : you don't need to store require in a variable to use it and also don't need
// export it in the file if its a function you've called in it
require(`./5-mind-grenade`);

// other methods of exporting

const data = require("./6-moduleExports");
console.log(data);
