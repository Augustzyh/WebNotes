const Koa = require('koa')   //导入构造函数

//安装koa模块  npm i -S koa@latest
const app = new Koa   //用于处理请求的函数就是中间件

//node 把一次请求和相应的过程抽象成一个事件，上下文环境ctx（content）：所有的请求信息
//洋葱模型:
//中间件注册push进数组里，若在这个中间件内调用了next，代表将控制权暂时交给下一个中间件，当到最后没有了的时候又返回前一个
//use接受中间件,注册到koa实例下面,可注册无数个   必须异步()
//控制权交出去是自动的 回来是手动的
app.use(async (ctx, next) => {
    //console.log(ctx);

    //状态吗
    ctx.status = 201

    //ctx.type = html   默认强制json
    ctx.type = "text/html"

    //原生的ctx.res.end()封装
    ctx.body = '这就是返回数据'
    ctx.body += '，可以无数次返回'
    ctx.body += '，还不用手动end哦'
    ctx.body = {
        a: 1
    }
    //{"路由":"/user?data=ass","method":"GET","ip":"::ffff:127.0.0.1","path":"/user","query":{"data":"ass"}}
    //request请求数据ctx.request.url
    ctx.body = {
        'router': ctx.url,
        "method": ctx.method,
        "ip": ctx.ip,
        "path": ctx.path,
        "query": ctx.query,   //json
        "querString": ctx.querystring,
        "hash": ctx.hash
    }

    //ctx.request
})
/*
//123321
//中间件1
app.use(async (ctx, next) => {
    console.log('1接受');
    await next()
    console.log('1相应');
})
//中间件2
app.use(async (ctx, next) => {
    console.log('2接受');
    await next()
    console.log('2相应');
})
//中间件3
app.use(async (ctx, next) => {
    console.log('3接受');
    await next()
    console.log('3相应');
})*/
app.listen(3000)
