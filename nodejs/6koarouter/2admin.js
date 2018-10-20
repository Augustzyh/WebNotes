const fs = require("fs")

exports.index = async (ctx) => {
    ctx.body = fs.readFileSync('./index.html', 'utf8')
}
exports.home = async (ctx) => {
    ctx.body = '<div>home</div>'
}
exports.user = async (ctx) => {
    ctx.body = '<div>user</div>'
}