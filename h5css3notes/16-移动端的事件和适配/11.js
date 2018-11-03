const start = "14:52:11".split(":")
const end = "21:41:14".split(":")

console.log(start, end);
//时
let hour = (end[0] - start[0]) * 30
hour += Math.floor((end[1]-start[1])/2)
let minute = parseInt(hour * 12)
let second = parseInt(minute * 60)
console.log(hour,minute,second);