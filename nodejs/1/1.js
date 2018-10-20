let a = 1;  //自动包裹在函数内 其实是局部变量
//module.exports = a;
module.exports = function () {   //多次赋值会覆盖 赋值多个对象就行了
    console.log("导出模块");
};
//对象扩展  比较麻烦
module.exports.num = 123;

exports = module.exports;
exports.num2 = 456;