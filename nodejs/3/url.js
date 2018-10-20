const {URL} = require('url')
//const url = require('url').URL
const myUrl = new URL("https://www.baidu.com")
console.log(myUrl);
const {resolve} = require('url')
console.log(resolve('/usr/local/', '../node'));
/*
* URL {
  href: 'https://www.baidu.com/',
  origin: 'https://www.baidu.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.baidu.com',
  hostname: 'www.baidu.com',
  port: '',
  pathname: '/',
  search: '',
  searchParams: URLSearchParams {},  //Map对象查询信息解析
  hash: '' }

* */