var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2], 'utf8');
str = buffer.toString();
newLines = str.split('\n');
console.log(newLines.length-1);