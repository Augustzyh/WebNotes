let str = "4\n" +
    "20 20 100 60\n" +
    "50 30 80 55\n" +
    "100 60 110 88\n" +
    "5 3 10 6"
let arr = str.split("\n")
const n = arr[0]*1
let obj = {}
let time1 = []
let time2 = []
let score1 = []
let score2 = []
for(let i = 1;i<=n ;i++) {
    obj[i] = arr[i].split(" ")
}
for(var key in obj){
    time1.push(obj[key][0])
    time2.push(obj[key][2])
    score1.push(obj[key][0])
    score2.push(obj[key][2])
}
let flag1 = 0
let flag2 = 0
let sum = []
for(let i = 0;i<=n ;i++) {
    for(let j = 0;j<=n;j++){
        sum.push(i+j)
    }
}
console.log(sum);