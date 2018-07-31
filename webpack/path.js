const path = require('path');
// 如该js路径为D: \node\path\path.js

//文件所在文件夹,D:\node\path
console.log(path.resolve(__dirname));

//上级目录D:\node
console.log(path.resolve(__dirname, '../'));
console.log(path.resolve(__dirname,'..'));


//D:\node\b
console.log(path.join(__dirname, '..', 'b'));
console.log(path.join(__dirname, '../', 'b'));
console.log(path.join(__dirname, '..', '/b'));
//  /f00/bar/baz/asdf
console.log(path.join('/foo', 'bar', 'baz/asdf')); 

