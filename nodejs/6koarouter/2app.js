const Koa = require('koa')
const static = require('koa-static')
const router = require('./2router')
const {join} = require('path')
const koaBody = require('koa-body')
const cors = require('@koa/cors')

const app = new Koa

app.use(static(join(__dirname,'static'))).use(koaBody())
app.use(cors())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3001)