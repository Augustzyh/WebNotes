const {Readable} = require('stream')
const rd = new Readable()
const fs = require('fs')

rd.setEncoding('utf8')
rd.push('123213123123')
rd.push('5986674')
rd.push(null)  //输入完毕
/*
//控制台输出
rd.pipe(process.stdout)*/
//或者
rd.on('data',chunk => {
    console.log(chunk);
})

//写入文件
const write = fs.createWriteStream('./3.txt')
rd.pipe(write)