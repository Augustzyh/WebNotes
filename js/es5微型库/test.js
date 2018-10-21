let str=`3 2
a = 0 - b
b = 2 - c
c = 4 - d
b - d
b - c`
let arr = readline().split('\n')  //[ '3 2', 'a = 0 - b', 'b = 2 - c', 'c = 4 - d', 'b - d', 'b - c' ]
// 条件
let condit = arr[0].match(/\w/g) //[ 'n', ' ', 'm' ]
let n = condit[0]
let m = condit[1]

//查询
let search = []      //[ 'b - d', 'b - c' ]
for(let i=1;i<=m;i++) {
    search.push(arr[n*1+i])
}

//算式
let compute = []        //[ 'a = 0 - b', 'b = 2 - c', 'c = 4 - d' ]
for(let i=1;i<=n;i++) {
    compute.push(arr[i])
}
let res = '',
    a = null,
    b = null,
    bool = false;
search.forEach(val => {
    let arr1 = val.match(/\w+/g)
    compute.forEach((val1) => {
        let arr2 = val1.match(/(-)*\w+/g)
        if(arr1[0] === arr2[0] && arr1[1] === arr2[2]){
            res = 'cannot_answer'
            bool = true
        } else if (arr1[0] === arr2[0]){
            a = arr2[1]*1
        } else if (arr1[1] === arr2[2]){
            b = arr2[1]*1
        }
    })

    res = bool ?  'cannot_answer':a-b;
    print(res)
})