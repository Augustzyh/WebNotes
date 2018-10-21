//首先传入常用对象 避免引用层数太多
(function (window, document, undefind) {
    // className获取兼容
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (eleName) {
            // 获取所有的标签对象
            var ele = document.getElementsByTagName('*'),
                eleAry = [],
                reg = new RegExp('\\b' + eleName + '\\b');
            for (var i = 0, len = ele.length; i < len; i++) {
                if (reg.test(ele[i].className)) {
                    eleAry.push(ele[i])
                }
            }
            return eleAry;
        }
    }
    // 兼容querySelectAll
    if (!document.querySelectorAll) {
        document.querySelectorAll = function (str) {
            var style = document.createElement('style'),
                elements = [], // 最终返回的集合
                element = null;
            document._zyh = [];
            // head标签
            var head = document.documentElement.firstChild;
            head.appendChild(style);
            style.styleSheet.cssText = str + "{zyh: expression(document._zyh && document._zyh.push(this))}";
            window.scrollBy(0, 0)
            style.parentNode.removeChild(style)
            while (document._zyh.length) {
                element = document._zyh.shift();
                element.style.removeAttribute("zyh");
                elements.push(element)
            }
            document._zyh = null;
            return elements;
        }
    }
    // 兼容trim
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "")
        }
    }


    var Zyh = function (str) {

        return new Zyh.prototype.init(str)
    }
    // 类数组-》数组
    Zyh.toArray = function(o) {
        return Array.prototype.slice.call(o)
    }
    Zyh.prototype = {
        constructor: Zyh,
        init: function (select) {
            var arr = []    //类数组,存储获取到的节点
            select = select.trim()
            //if   //dom html

                //css3选择器 ~+>

                //id #

                //class .

                //tagName

                //this obj

            var o = {
                html: function () {
                    var div = document.createElement(div)
                    div.innerHTML = select
                    return div.children
                },
                id: function () {
                    var obj = document.getElementById(select.slice(1))
                    return obj === null ? [] : [obj]
                },
                className: function () {
                    return document.getElementsByClassName(select.slice(1)) //原生类数组
                },
                tagName: function () {
                    return document.getElementsByTagName(select)
                },
                css3: function () {
                    return document.querySelectorAll(select)
                }
            }
            //获取
            function getEle(select) {
                if(/^</.test(select)){
                    return "html"
                } else if (/[~+>\s]/.test(select)) {
                    return "css3"
                } else if (/^\./.test(select)) {
                    return "className"
                } else if (/^#/.test(select)) {
                    return "id"
                } else if (/^[\w]+/.test(select)) {
                    return "tagName"
                }
            }
            if(typeof select === 'object') {
                arr = [select]
            }else if (typeof select === 'string') {
                arr = Zyh.toArray(o[getEle(select)](select))
            }

            Object.setPrototypeOf(arr, Zyh.prototype)  //改变原型,不支持ie11-
            return arr
        },
        on: function () {
            
        }
    }
    Zyh.prototype.init.prototype = Zyh.prototype   //jq最核心的代码
    window.$h = Zyh;  //挂载到window就是全局的了
})(window, document);//不传undifined 默认un
