const fs = require('fs');

new Promise(function () {
    fs.readFile('./files/a.txt','utf8',function (err,data) {
        if(err){
            // 失败 ，承诺容器中的任务失败了
        }else{
            // 成功, 承诺容器中的任务成功了
        }
        // 状态要怎么去改变，fn要接收2个参数
    })
})