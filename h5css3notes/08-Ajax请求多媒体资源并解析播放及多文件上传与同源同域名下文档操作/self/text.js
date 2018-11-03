let str = "10 10 10"
let arr = str.split(" ")
for(let i = 0; i<arr.length; i++ ){
    arr[i] = arr[i]*1
}
console.log(arr);
let result = 0
let {min,abs,max} = Math
if(arr[0] === arr[1] === arr[2]) {
    result = 0
}
let arrS = [...new Set(arr)]
let mid = 0;
switch (arrS.length) {
    case 1: result = 0 ; break;
    case 2: result = min(abs(arrS[0]-arrS[1]), abs(arrS[1]-arrS[0])); break;
    case 3: const maxNum = max(arrS[0],arrS[1],arr[2]);
            const minNum = min(arrS[0],arrS[1],arr[2]);
            arrS.forEach(v => {
                if(v !== maxNum && v !== minNum){
                    mid = v
                }
            })
            result = abs(mid - maxNum) + abs(mid - minNum)
        break;
    default: break;
}
console.log(result);