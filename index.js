
// npm - global command, comes with node
// npm --version

// local dependency - use it only in this perticular project
// npm i <packageName>

// local dependency - use it in any product
// npm install -g <packageName>
// sudo install -g <packageName> 

// package.json - manifest file(stores important info about project/package)
//  mannual approach - (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('loadash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);3
