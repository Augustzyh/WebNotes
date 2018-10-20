const fs = require('fs')
/*
fs.readFile('./abc.txt', "utf8", (err, data) => {
    console.log(err);
    console.log(data);
})*/
/*
const fn = async () => {
    const data = await new Promise((resolve, reject) => {
        fs.readFile('./abc.txt', 'utf8', (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}*/
// 同步
/*
const data = fs.readFileSync("./abc.txt","utf8")
console.log(data);*/
/*
fs.writeFile('./abc.txt', 'abc', function () {
    console.log("写入成功");
})
console.log(fs.existsSync("./1"));
/!*fs.mkdir('./abcd', function (err) {
    if(err) throw err
})*!/
fs.readdir('../3',(err,data) => {
    console.log(data);
    data.forEach(val => {
        let stat = fs.statSync(val)
        if(stat.isDirectory()){
            console.log('我是文件夹'+val);
        }
    })
})*/
