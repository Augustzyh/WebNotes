const fs = require('fs');

function promiseReadFile(filePath) {
    return new Promise(function (resolve,reject) { // resolve成功  reject失败
        fs.readFile(filePath,'utf8',function (err,data) {
            err?reject(err):resolve(data);
        })
    })
}

promiseReadFile('./files/a.txt')
    .then((data)=>{
        console.log(data)
        return promiseReadFile('./files/b.txt');
        // 当return 一个promise对象时。后续的then中的方法第一个参数会作为p2的resolve
    })
    .then((data)=>{
        console.log(data)
        return promiseReadFile('./files/c.txt');
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
