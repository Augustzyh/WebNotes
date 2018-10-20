setTimeout(() => {
    console.log(2)
},1000)


setImmediate(() => {
    console.log(1);
});
/*

console.log(2);  //2 1
process.nextTick(() => {
    console.log(1);
});

console.log(1);  //2 1
*/

