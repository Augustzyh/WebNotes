const Koa = require("koa")
const views = require("koa-views")
const {join} = require("path")
const Router = require("koa-router")
//  pug 安装就行了 不用导入
const app = new Koa
const router = new Router
//views放模板
app.use(views(join(__dirname,"views"),{ //注册模板引擎，非pug
    extenstion: "pug"                   //指明是pug
}))

//console.log(join(__dirname, "views"));
/*app.use(async ctx => {
    //渲染模板引擎的方法  上面声明了pug可不写后缀 且直接index
    ctx.render('index')
})*/


// pug -P -w index.pug 在pug目录下

app.use(router.routes()).use(router.allowedMethods())
app.listen(3008)
router.get("/", async ctx => {
    await ctx.render("index.pug", {flag: 0})      //都是异步的  flag动态提供
})
