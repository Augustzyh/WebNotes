const Koa = require('koa')
const app = new Koa


app.use(async ctx => {
  const callback = ctx.query.cb
  ctx.type = 'text/javascript'
  console.log(callback)
  ctx.body = `${callback}({a:'这是后端朋友传过来的数据'})`
})

app.listen(3000)