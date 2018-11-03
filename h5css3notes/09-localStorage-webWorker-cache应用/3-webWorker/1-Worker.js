self.onmessage = function (e) {
    let str = ''
    for(let i = 0;i<e.data;i++){
        str += String.fromCharCode(i)
    }
    self.postMessage(str)
}