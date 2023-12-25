// Buit-in modules 
// pre-determined modules 
// let's start with os
// for buitin modules we don't need /. we can direct access it.

const os = require('os')

//  info about current user
const user = os.userInfo()
// console.log(user);

// method return the system uptime in seconds.
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);