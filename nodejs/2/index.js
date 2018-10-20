
const Koa = require('koa')
const app = new Koa

app.use(async (ctx) => {
    ctx.body = "这是6553端口哦"
})
app.listen(6553)
// module.exports = '这个是个测试包'
/*const events = require('events').EventEmitter
const myEmitter = new events
const path = require('path')

myEmitter.on('newListener',function () {
    console.log("绑定新事件");
})
myEmitter.on('zyh',() => {})
myEmitter.setMaxListeners(20)
console.log(myEmitter.getMaxListeners());

console.log(_dirname);  //绝对路径
console.log(_filename);
console.log(path.join("a", "b", ".."));//a*/

/*setTimeout(() => {

    myEmitter.emit('someEvent')
},2000)

myEmitter.on('someEvent',() => {
    console.log(1);
})

function Fn(name) {
    this.name = name
}
Fn.prototype._proto_ = EventEmitter.prototype
const obj = new Fn('呵呵')
obj.on('zyh',function () {
    console.log(2);
})
setTimeout(() => {
    obj.emit('zyh')
},3000)*/

