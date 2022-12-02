//OS Module

const { log } = require('console');
const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method that returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

//some other methods

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    hostname : os.hostname(),
};
console.log(currentOS);