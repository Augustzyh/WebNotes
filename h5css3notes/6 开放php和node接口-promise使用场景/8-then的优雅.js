const fs = require('fs');

let p1 = new Promise(function (resolve,reject) { // resolve成功  reject失败
    fs.readFile('./files/a.txt','utf8',function (err,data) {
        err?reject(err):resolve(data);
    })
})

let p2 = new Promise(function (resolve,reject) { // resolve成功  reject失败
    fs.readFile('./files/b.txt','utf8',function (err,data) {
        err?reject(err):resolve(data);
    })
})

let p3 = new Promise(function (resolve,reject) { // resolve成功  reject失败
    fs.readFile('./files/c.txt','utf8',function (err,data) {
        err?reject(err):resolve(data);
    })
})






p1
    .then((data)=>{
        console.log(data)
        return p2;
        // 当return 一个promise对象时。后续的then中的方法第一个参数会作为p2的resolve
    })
    .then((data)=>{
        console.log(data)
        return p3;
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
