const mongoose = require('mongoose')
//使用新模式
const db = mongoose.createConnection('mongodb://localhost:27017/zyh',{useNewUrlParser:true})
// 用原生es6的promise取代mongoose自实现的promise
mongoose.Promise = global.Promise

db.on("error", console.log.bind(console, "zyh数据库链接失败"))
db.on("open", () => {
    console.log("链接成功");
})

// 在操作数据库之前，要使用Schema设置的每个字段的数据类型
const Schema = mongoose.Schema
const javaScriptSchema = new Schema({   //这个实例就是用来操作这张表的
    name: String,
    age: Number,
    sex: {
        type: String,
        default: "男"
    }
}, {
    versionKey: false
})

//创建库
const JavaScript = db.model("javascript",javaScriptSchema)
const data1 = {
    name: "octopus",
    age: 21,
    sex: "男"
}
const data2 = {
    name: "zyh",
    age: 22,
    sex: "男"
}
const d1 = new JavaScript(data1)
d1.save((err,res) => {
    console.log(err);
    console.log(res);
})
const d2 = new JavaScript(data2)
d2.save().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})