const fs = require('fs');
fs.readFile('./files/a.txt','utf8',function (err,data) {
    console.log(err)
    if(err)throw err;

    console.log(data)
    fs.readFile('./files/b.txt','utf8',function (err,data) {
        console.log(err)
        if(err)throw err;
        console.log(data)
        fs.readFile('./files/c.txt','utf8',function (err,data) {
            console.log(err)
            if(err)throw err;

            console.log(data)
        })
    })

})
// 此种方式就能保证代码 的执行顺序
// 问题： 代码很丑 如果业务非常复杂 ，回调嵌套很深 ，根本没办法维护和扩展
// 解决： 使用promise构造函数
// promise是容器 里面放着的将来可能完成 的事情
// pending 状态 一个文件正在读取，那读取成功之后，这个pending要发性变化
// pending的状态执行的结果，要么成功 ，要么失败
// 比例一个事情 ，要么做到了，要么没做到

/*

*   成功  resolve
*
*   失败  reject
*
* */


