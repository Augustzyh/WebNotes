const num = '6' * 1

const days = "1 2".split(" ")

const arr = days.map(v => v*1)

let output = []
let count = 1
for(let i = 0;i<num;i++){
    if(arr[i]+1 === arr[i+1] || arr[i]+1 === 1){
        count++
    }else {
        count = 1
    }
    if(count >= 3){
        output.splice(i-count+1,count,`${arr[i-count+2]}-${arr[i+1]}`)
    }else{
        output.push(arr[i])
    }
}
let str = []
for(let i =0 ;i<output.length;i++){
    if(typeof output[i] === 'string'){
        str.push(output[i])
    }
}
str.forEach(v => {
    let i = output.indexOf(v[2]*1)
    output.splice(i,1)
})
let last = []
output.forEach(v => {
    if(v !== undefined){
        last.push(v)
    }
})
console.log(last);