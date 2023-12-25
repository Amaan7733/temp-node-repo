//  this is a Syncronous method of the file system

// interacting with file System 
console.log('start');
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
// console.log(first, second)

writeFileSync('./content/result-sync.txt,',`Here is the result : ${first}, ${second}`,{flag: 'a'})
console.log('Done with  the task');
console.log('Starting the next one');




