// node很适合写爬虫
// fanyi 翻译模块
// 模块选择:发起请求的 request  superagent   cheerio把富文本转成dom,删掉了jq的dom操作
const Koa = require('koa')
const request = require('superagent')
const cheerio = require('cheerio')
const fs = require('fs')
const {resolve} = require('url')   //用path的join也可以
//const request = require('request')
const app = new Koa
app.use(async (ctx) => {
    let arr = []
    let url = 'https://www.shiguangkey.com/' + ctx.url
    await new Promise(resolve => {
        request
            .post(url)
            .end((err, res) => {
                // Calling the end function will send the request
                //console.log(res.text);
                const data = res.text;
                const $ = cheerio.load(data);
                //分析原网页dom结构
                //console.log($(".course-item .item-txt").eq(1).text());
                $(".course-item").each((i,v) => {
                    const $v = $(v)
                    const obj = {
                        title: $v.find('a.ictxt').text().trim(),
                        img: $v.find('img').prop("src"),
                        num: $v.find('a.item-txt').text().slice(5).replace("人",''),
                        src: resolve(url, $v.find('a.cimg').prop('href'))
                    }
                    arr.push(obj)
                })
                resolve(arr);
            });
    })
    ctx.body = arr
})
app.listen(3000)

/*
* [
* {
*   img,
*   title,
*   num,
*   src
* }
*]
* */