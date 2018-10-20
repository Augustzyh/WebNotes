const crypto = require('crypto')
//console.log(crypto.getHashes());
const KEY = 'zhangyupwd'
const md5 = crypto.createHash("md5")
md5.update(KEY)
const pwd = md5.digest('hex')
console.log(pwd);