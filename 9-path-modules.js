// path moudles => which allows to interact with file path.

const path = require('path');

console.log(path.sep);
// console.log(path.join());

// to access the file.
const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath);

// to acess the last file of the path.
const base = path.basename(filePath)
console.log(base);

//  return an absolute path

const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);