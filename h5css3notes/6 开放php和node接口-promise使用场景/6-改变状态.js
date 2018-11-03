const fs = require('fs');

new Promise(function (resolve,reject) { // resolve成功  reject失败
    fs.readFile('./files/a.txt','utf8',function (err,data) {
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