const fs = require('fs')
const read = fs.createReadStream('1.txt')
const write = fs.createWriteStream('./2.txt')
//read.pipe(write)
read.setEncoding('utf8')
//read.resume();  //让数据流起来1

//边读编写
let res = ''

//让数据留起来2
read.on('data',(data) => {
    res += data;
    console.log(data);
    console.log(res);
})


read.on('end', () => {
    console.log('读取结束');
})