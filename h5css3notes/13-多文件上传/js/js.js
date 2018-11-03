let inp = document.querySelectorAll("input")
let drag = document.getElementById("drag")
let oUl = document.getElementById('oUl')
// 文件数组
let arr = []
// 文件大小
let size = []
// 文件名称
let name = []
inp.forEach(function (val, idx) {
    val.onchange = function () {
        //console.log(this.files);
        if( this.value ){  //有值才预览
            if( this.files.length ) {
                for(let i=0,len = this.files.length;i < len; i++){
                    let files = this.files.item(i)
                    //console.log(files.name);
                    arr.push(files)
                    size.push(files.size)
                    name.push(files.name)
                    reader(files)
                }
            }

            this.value = ''
        }
    }
})

//拖拽
drag.ondragenter = function () {
    this.innerText = "请松手"
}
drag.ondragover = function (e) {
    e.preventDefault();
    e.stopPropagation();
}
drag.ondragleave = function () {
    this.innerText = "请将图片拖到此处"
}
drag.ondrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    for(let i = 0; i < e.dataTransfer.files.length; i++) {
        let files = e.dataTransfer.files.item(i)
        arr.push(files)
        size.push(files.size)
        name.push(files.name)
        reader(files)
    }
    this.innerText = "请将图片拖到此处"
}

// 预览
function reader(files) {
    let blob = new Blob([files]);
    let url = window.URL.createObjectURL(blob)
    let li = document.createElement("li")
    li.innerHTML = `<img src="${url}" width="100%"/><p></p>`
    oUl.appendChild(li)
    /*new FileReader().readAsDataURL(files).onload = function (e) {
        console.log(e.target.result);
    }*///不推荐用file对象读取
    count();
}

//计算大小 个数
function count() {
    let aLi = oUl.getElementsByTagName("li")
    picLen.innerText = arr.length
    let allSize = 0
    picSize.innerText = !aLi.length ? 0 : (eval(size.join("+"))/1024/1024).toFixed(2)//四舍五入至指定小数位
    let aP = oUl.querySelectorAll("p")
    aP.forEach((v,i) => {
        v.innerHTML = name[i] + "<i></i>"
    })
    del();
}

function del() {
    let aLi = oUl.querySelectorAll("li")
    aLi.forEach((val,idx) => {
        val.children[1].children[0].addEventListener("click", function () {
            oUl.removeChild(aLi[idx])
            arr.splice(idx, 1)
            size.splice(idx, 1)
            name.splice(idx, 1)
            count();
        })
    })
}

//上传
/*
btn.addEventListener('click', function (e) {
    arr.forEach((val,idx) => {
        let xhr = new XMLHttpRequest()
        xhr.onload = function () {

            console.log(1);
        }

        xhr.open('post','./upload.php',true)
        let data = new FormData();
        data.append('file', val)
        xhr.send(data)
    })
})*/
btn.addEventListener('click',function () {
    let aLi = oUl.querySelectorAll('li');
    if(arr.length){
        arr.forEach((item,index)=>{
            (function (index) {
                let xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    drag.innerText = '图片已上传成功';
                    oUl.removeChild(aLi[index]);
                    arr.splice(index,1);
                }
                xhr.open('post','./upload.php',true);
                let data = new FormData();
                data.append('file',item)
                xhr.send(data);
            })(index);
        })
    }
})
