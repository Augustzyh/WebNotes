const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa
const router = new Router

//之前所有进球都能进中间件，选择要控制
/*
* 设计路由
* localhost:3000
* /   ->    index
*
* */
/*
        整个路由就可以理解为一个中间件
* get() 访问根路径只有get能进入中间件
* */
router.get('/',async (ctx, next) => {
    ctx.body = "<h1>index</h1>"
})
router.get('/home',async (ctx, next) => {
    ctx.body = "<h1>hoem</h1>"
})
router.get('/user',async (ctx, next) => {
    ctx.body = "<h1>user</h1>"
})
//router.post('/',async())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001)