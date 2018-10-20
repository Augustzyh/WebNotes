const Router = require('koa-router')
const admin = require('./2admin')
const router = new Router

router.get('/', admin.index)
router.get('/home', admin.home)
router.get('/user', admin.user)
router.post('/postData', async ctx => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body
})

module.exports = router