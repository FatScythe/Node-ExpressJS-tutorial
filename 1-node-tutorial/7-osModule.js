// Inbuilt modules - os module
const os = require("os");
const uptime = os.uptime(); // how long the device have been ON in seconds
const totalMem = os.totalmem(); // totalmem of the device

const user = {
  name: os.type(),
  freeMem: os.freemem(),
  totalMem,
};

console.log(os.userInfo(), uptime, totalMem);
