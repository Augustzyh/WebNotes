const fs = require('fs');

let p1 = new Promise(function (resolve,reject) { // resolve成功  reject失败
    fs.readFile('./files/abc.txt','utf8',function (err,data) {
        if(err){
            // 失败 ，承诺容器中的任务失败了
            reject(err);
        }else{
            // 成功, 承诺容器中的任务成功了
            resolve(data)
            // 怎么接收到数据？ 要得到一个promise实例
        }
        // 状态要怎么去改变，fn要接收2个参数
    })
})

// p1是实例，就可以调用 then函数
// then的第一个参数是 p1的resolve()调用，第二个失败的reject()的调用
p1.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
