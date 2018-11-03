const fs = require('fs');
fs.readFile('./files/a.txt','utf8',function (err,data) {
    console.log(err)
    if(err)throw err;
        // 抛出异常
        /*
        *   1. 阻止代码往下执行
        *   2. 打印错误信息
        * */

    console.log(data)
})

fs.readFile('./files/b.txt','utf8',function (err,data) {
    console.log(err)
    if(err)throw err;
    // 抛出异常
    /*
    *   1. 阻止代码往下执行
    *   2. 打印错误信息
    * */

    console.log(data)
})

fs.readFile('./files/c.txt','utf8',function (err,data) {
    console.log(err)
    if(err)throw err;
    // 抛出异常
    /*
    *   1. 阻止代码往下执行
    *   2. 打印错误信息
    * */

    console.log(data)
})
// 异步程序  顺序 取决于文件的大小，不是代码 顺序
// 如果你想保证代码 的执行顺序   a b c
// 可以通过回调的形式 来保证执行顺序
