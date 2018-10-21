const Koa = require('koa');
const app = new Koa;
const cors = require("@koa/cors");
app.use(cors());          //默认跨域允许

app.use(async ctx => {
    ctx.body = {
        "user" : "cao",
        "name" : "gan"
    }
});

app.listen(8000);
console.log("程序已启动，监听端口localhost:8000");