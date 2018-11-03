/*
let num = 10
function fibbona(n) {
    let arr = [];
    if(num === 1){
        arr[0] = 0
        return arr
    }else if(num === 2){
        arr = [0,1];
        return arr
    }else{
        arr = [0,1];
        for(var i=2;i<n;i++){
            arr.push(arr[i-2]+arr[i-1]);
        }
        return arr;

    }
}

console.log(fibbona(num));*/
/*
let lines = "range(0,10,2)".match(/\d+/g)
for(let i=0;i<lines.length;i++) {
    lines[i] = lines[i]*1
}
let arr = []
for(let j=lines[0];j<lines[1];j+=lines[2]){
    arr.push(j)
}
console.log(arr);*/
/*
let s ="pwwkew"

function lengthOfLongestSubst(s) {
    let num = 0
    let noRepeat = ''
    for(let i=0;i<s.length;i++){
        if(noRepeat.indexOf(s[i]) === -1){
            noRepeat += s[i]
            num = noRepeat.length > num ? noRepeat.length : num;
            console.log(noRepeat, num);
        }else {
            noRepeat = noRepeat.slice(i + 1) + s[i];
        }
    }
    return num
}

console.log(lengthOfLongestSubst(s));*/
function sum() {
    let sum = 0
    for(var key in arguments){
        let val = arguments[key]
        if(typeof val === 'number') {
            sum += val
        }else if(typeof val === 'string' && typeof (val*1) === 'number' && !isNaN(val*1)){
            console.log(val);
            sum += (val*1)
        }
    }
    return sum < 1 && sum > 0 ? sum.toFixed(1) : sum
}

console.log(typeof "1.0" === 'string',typeof ('A'*1),'A'*1,isNaN(NaN));
console.log(sum(0.2,0.3));
//console.log(eval("ret = sum(1, 2, 3, 4, 5)"));