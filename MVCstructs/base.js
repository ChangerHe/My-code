/* 
 * @author: ChangerHe
 * @descripe: 以下为对学习工作中需要用到的基础API进行了简单的封装,以达到提升开发效率的目的
 * @version: 0.0.4
 */

/* 
 * API速查表:(做完再更)
 * 
 * 
 */

/**
 一定注意的地方：因为收到一些反馈说这个库完全无法使用，这里补充说明一下，一定记得使用onload在html文档流加载结束之后再加载我们的类库，或者在文档流的</body>标签前写脚本,否则会报错，方法如下
 方法1：
 window.onload = function(){
     //此处放内容
 }
 方法2：
$().addEvent(window, 'load', function() {
    //此处放内容
})
 */

//前台类库
// 经过测试，发现因为后面所有的属性和方法都是通过一个new出来的对象设置的，而对象的数组elements是没有减少的，只有在后方增加，所以这个时候当我们为另外一个属性标签设置属性的时候，会影响到之前设置的标签属性，所以我们先直接将new出来的属性对象赋值给$符号,每次需要进行new一个新对象的时候,我们就直接调用$符号了
// 为什么$要这样设置,因为我们每次都要新返回一个对象,如果想像jQuery的方法少一个()的话,可能需要写很多的代码才能实现,我们现在将$看做一个函数,每次需要的时候就自己创建一个并且执行它,就可以新new出一个对象了
var $ = function(args) {
    return new Base(args);
}

// 基础库总入口
function Base(args) {
    // 我们现在创建一个节点来保存获取到的节点,并生成一个数组
    this.elements = [];
    // 这个位置还稍稍有些懵逼,不懂
    if (typeof args == 'string') {
        switch (args.charAt(0)) {
            case '#':
                this.getId(args.substring(1));
                break;
            case '.':
                this.getClass(args.substring(1));
                break;
            default:
                this.getTagName(args);
        }
    } else if (typeof args == 'object') {
        if (args != undefined) { //注：这里args是一个对象,undefined也是一个对象,这个时候,应该使用不带引号的undefined
            this.elements[0] = args;
        }
    }
}

//获取元素的id,并将自身返回,以便进行连缀
Base.prototype.getId = function(id) {
    this.elements.push(document.getElementById(id))
    return this;
}

//获取元素的name,并将本身返回
Base.prototype.getName = function(name) {
    var names = document.getElementsByName(name)
    for (var i = 0; i < names.length; i++) {
        this.elements.push(names[i])
    }
    return this;
}

//获取元素tagname并将自身返回
Base.prototype.getTagName = function(tagname) {
    var tags = document.getElementsByTagName(tagname)
    for (var i = 0; i < tags.length; i++) {
        this.elements.push(tags[i])
    }
    return this;
}

// 获取元素className并将自身返回
// 增补内容1：获取元素的className的兼容性写法，其实原理很简单，遍历所有的属性标签，查看属性标签中的className，将需要的标签再push到elements中，即可。
// 增补内容2: 现存一个问题,为了进行兼容,是向全局调取了这个索引,因此在这个时候,就算我在之前加上了getId等的限定,都没有办法达到选取id下的class的目的,那么我现在将getclass再多传一个参数进去,作为相应的限定.
// 现存BUG1:代码中传递第二参数的时候,无法传递class作为第二个参数
// 现存BUG2:代码增加className会覆盖之前设置好的className
// 现存BUG3: 当我们需要对className进行查找的时候,className如果被设置后,className就有两个或者多个,所以会导致后期匹配这个className的时候会失效
// warning:第一个参数是一个纯粹的className,所以我在这么没有设置加点,但是第二个参数是要加上相应的标识的
Base.prototype.getClass = function(className, anyName) {
    var allTag = document.getElementsByTagName("*");
    if (arguments.length == 1) {
        for (var i = 0; i < allTag.length; i++) {
            if (allTag[i].className === className) {
                this.elements.push(allTag[i])
            }
        }
    } else if (arguments.length == 2) {
        if (/^#(\w+)$/.test(arguments[1])) {
            var arg = arguments[1].match(/^#(\w+)$/)[1]
            for (var j = 0; j < allTag.length; j++) {
                console.log(arg)
                if (document.getElementById(arg)) {
                    allTag = document.getElementById(arg).getElementsByTagName("*");
                    console.log(allTag)
                }
            }
            for (var i = 0; i < allTag.length; i++) {
                if (allTag[i].className === className) {
                    this.elements.push(allTag[i])
                }
            }
        } else if (/^\.(\w+)$/.test(arguments[1])) {
            var arg = arguments[1].match(/^\.(\w+)$/)[1];
            // if (document.getElementsByClassName(arg)) {
            //     for (var k = 0; k < document.getElementsByClassName(arg).length; k++) {
            //         allTag = document.getElementsByClassName(arg)[k].getElementsByTagName("*");
            //     }
            // }
            // thisTag = [];
            // for (var j = 0; j < allTag.length; j++) {
            //     console.log(allTag[j].className == arg)
            //     if (allTag[j].className == arg) {
            //         console.log(allTag[j])
            //         allTag = allTag.concat(allTag[j]);
            //     }
            // }
            // console.log(allTag)
            // for (var i = 0; i < allTag.length; i++) {
            //     for (var j = 0; j < allTag[i].length; j++) {
            //         if (allTag[i][j].className === className) {
            //             this.elements.push(allTag[i][j])
            //         }
            //     }

            // }
        } else if (/^(\w+)$/.test(arguments[1])) {
            var arg = arguments[1].match(/^(\w+)$/)[1];
            if (document.getElementsByTagName(arg)) {
                allTag = [];
                for (var k = 0; k < document.getElementsByTagName(arg).length; k++) {
                    allTag = allTag.concat(document.getElementsByTagName(arg)[k].getElementsByTagName("*"));
                }
                console.log(allTag)
            }
            for (var i = 0; i < allTag.length; i++) {
                for (var j = 0; j < allTag[i].length; j++) {
                    if (allTag[i][j].className === className) {
                        this.elements.push(allTag[i][j])
                    }
                }

            }
        }
    }
    return this;
}

// 做到这里发现一个问题,当我们不需要设置class或者是tag中所有的属性,而是设置其中某一个的属性时,我们不能够像往常一样直接在后面加上数组索引,因为暂时技术有限,没有办法获得相应的兼容性写法,我们在这里设置一个新的getElements的API来调取我们需要的数组索引
// 现存BUG1: 当我们前面使用的是class或者tagName等会选择到多个标签的选择器时,getElement现在仅能匹配到第一个选取元素的相应子元素
Base.prototype.getElement = function(num) {
    var thisElement = this.elements[num];
    this.elements = [];
    this.elements.push(thisElement);
    return this;
}

// 获取或设置元素的innerHTML值
// 此时必须要加上循环才可以,因为elements是一个数组,当我们将数组设置innerHTML的时候,其实并不能生效的,这时候相当于是给数组设置了一个之前没有的innerHTML的属性,这个属性时并不能生效的,所以我们必须要将这个innerHTML的属性设置到其数组的元素上
// 增补内容1:当inner没有传值的时候,判定为获取元素节点的innerHTML,这个时候需要做一下判定
Base.prototype.html = function(inner) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 0) {
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML = inner;
    }
    return this;
}

// 设置元素的点击属性,并将传入值设置为一个函数
Base.prototype.click = function(fn) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onclick = fn;
    }
    return this;
}


// 设置之前已经push到数组中的元素,并进行遍历,以设置其css样式,同时返回自身,传入一个参数的时候,为调取相应属性的css样式值
// 增补内容1:当我们对css传入一个值的时候,我们则返回这个标签的相应属性值
// 增补内容2:当我们将css设置到外联css文件中的时候,我们是无法通过正常的方法得到相应的css属性值的,因此需要调用相应的方法,来获取外联样式中的属性值,这样的API需要兼容,分别是W3C的推荐标准:window.getComputedStyle和IE的方法.currentStyle
Base.prototype.css = function(attr, value) {
    for (var i = 0; i < this.elements.length; i++) {
        if (arguments.length == 1) {
            if (typeof window.getComputedStyle != 'undefined') { //w3c的推荐方法
                return window.getComputedStyle(this.elements[i], null)[attr];
            } else if (typeof this.elements[i].currentStyle != 'undefined') { //兼容IE的方法
                return this.elements[i].currentStyle[attr]
            }
            return this.elements[i].style[attr];
        }
        this.elements[i].style[attr] = value;
    }
    return this;
}

// 为元素添加addClass功能,在需要的时候为元素动态添加class
// 增补内容1: 当我们在addClass之后,如果再为内容增加相同的class,这个时候会发生再次添加生效的情况,这里使用正则表达式进行判定,确定之前的className中是否存在要添加的class
Base.prototype.addClass = function(str) {
    for (var i = 0; i < this.elements.length; i++) {
        if (!this.elements[i].className.match(new RegExp('(^|\\s)' + str + '(\\s|$)')))
            this.elements[i].className += " " + str;
    }
    return this;
}

// 为元素移除不需要的className
// 此处精妙之处在于,使用new 出来的regexp对象,替代了之前的简便写法,使我们的参数更方便的传入到了此正则表达式中
Base.prototype.removeClass = function(str) {
    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i].className.match(new RegExp('(^|\\s)' + str + '(\\s|$)')))
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(^|\\s)' + str + '(\\s|$)'), '')
    }
    return this;
}

// 在非行内位置添加需要的css规则
// 用法实例: $().addRule(0, 'body', 'background:green', 0)
Base.prototype.addRule = function(num, selectorText, cssText, position) {
    var sheet = document.styleSheets[num];
    if (typeof sheet.insertRule != 'undefined') {
        sheet.insertRule(selectorText + "{" + cssText + "}", position)
    } else if (typeof sheet.addRule != 'undefined') {
        sheet.addRule(selectorText, cssText, posotion)
    }
    return this;
}

// 移除非行内位置的css规则
Base.prototype.removeRule = function(num, index) {
        var sheet = document.styleSheets[num];
        if (typeof sheet.deleteRule != 'undefined') {
            sheet.deleteRule(index);
        } else if (typeof sheet.removeRule != 'undefined') {
            sheet.removeRule(index);
        }
    }
    //注意:为文档的样式添加样式会破坏css的结构,因此不建议使用,当使用的时候,务必小心.

// 设置移入移除的方法
// 用法实例
/* 
$().getId('container').hover(function() {
    $().getId('aUl').show();
}, function() {
    $().getId('aUl').hide();
}) 
*/
Base.prototype.hover = function(over, out) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onmouseover = over;
        this.elements[i].onmouseout = out;
    }
    return this;
}

// 设置显示
Base.prototype.show = function() {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = "block";
    }
    return this;
}

// 设置隐藏
Base.prototype.hide = function() {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = "none";
    }
    return this;
}

// 设置物体的居中,此方法需要与下方的resize配合使用,否则无法实现元素的实时居中
// 增补内容1: 实现了不需传入宽高值即可居中的方法,当然,前提是你已经设置了元素的position属性.
Base.prototype.center = function() {
    var top = (document.documentElement.clientHeight - this.elements[0].clientHeight) / 2;
    var left = (document.documentElement.clientWidth - this.elements[0].clientWidth) / 2;
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.top = top + 'px';
        this.elements[i].style.left = left + 'px';
    }
    return this;
}

// 触发浏览器窗口事件实现物体的实时居中,而不需要刷新才能居中
// 以下是用法实例
/* 
$().getId('testBox').center().resize(function() {
    $().getId('testBox').center();
})
*/
// 更新内容1: 尝试实现resize功能在小块在下方的时候,重新调整窗口大小会使小块重新居中的问题,但是未实现成功,待再次更新
Base.prototype.resize = function(fn) {
    window.onresize = fn;
    // for (var i = 0; i < this.elements.length; i++) {
    //     var element = this.elements[i];
    //     window.onresize = function() {
    //         var Left = (window.innerWidth || document.documentElement.clientWidth) - this.offsetWidth;
    //         var Top = (window.innerHeight || document.documentElement.clientHeight) - this.offsetHeight
    //         fn();
    //         if (element.offsetLeft > Left) {
    //             element.style.left = Left;
    //         }
    //         if (element.offsetTop > Top) {
    //             element.style.top = Top;
    //         }
    //     }
    // }
    return this;
}

// 添加锁屏遮罩(不是特别建议使用,因为其实可以设置块级元素的position为fixed之后.设置上下左右位置都为0 就可以实现了)
// 为了避免出现浏览器改变窗口大小时出现锁屏区域无法遮盖所有文档区域的问题,以下是建议的写法:
/* 
$().getId('testBox').lock().resize(function() {
    $().getId('testBox').lock()
})
*/
Base.prototype.lock = function() {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.width = (window.innerWidth || document.documentElement.clientWidth) + 'px';
        this.elements[i].style.height = (window.innerHeight || document.documentElement.clientHeight) + 'px';
        this.elements[i].style.display = 'block';
        document.documentElement.style.overflow = 'hidden';
    }
    window.onscroll = function() { //防止锁屏时滚动条可滚动
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
    return this;
}

// 清除锁屏遮罩
Base.prototype.unlock = function() {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.display = 'none';
        document.documentElement.style.overflow = 'auto';
    }
    return this;
}

// 拖拽功能
// 更新内容1: 实现块状元素无法拖动至屏幕外面的功能
// 现存较多BUG,如,可拖动至页面底部,后无法移除mousemove产生的效果,鼠标点击不动之后,如果鼠标走到浏览器外面去了,回来之后就算松开鼠标,方块也会跟着跑等问题,后期解决,现在不建议直接使用
// 注意: 如需实现拖拽,请将块级元素设置为position:absolute或fixed;
Base.prototype.drag = function() {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].onmousedown = function(e) {
            var e = e || window.event;
            var x = e.clientX - this.offsetLeft;
            var y = e.clientY - this.offsetTop;
            console.log(e.clientX - x, e.clientY - y)
            this.onmousemove = function(e) {
                var left = e.clientX - x;
                var top = e.clientY - y;
                if (typeof this.setCapture != 'undefined') { //解决IE下使用鼠标一直拉到最底端超出页面时页面仍然向下滚动的问题
                    this.setCapture();
                }
                if (left <= 0) {
                    left = 0
                } else if (left >= (window.innerWidth || document.documentElement.clientWidth) - this.offsetWidth) {
                    left = (window.innerWidth || document.documentElement.clientWidth) - this.offsetWidth
                }
                if (top <= 0) {
                    top = 0
                } else if (top >= (window.innerHeight || document.documentElement.clientHeight) - this.offsetHeight) {
                    top = (window.innerHeight || document.documentElement.clientHeight) - this.offsetHeight
                }
                this.style.left = left + 'px';
                this.style.top = top + 'px';
            }
            this.onmouseup = function() {
                this.onmousemove = null;
                if (typeof this.releaseCapture != 'undefined') { //解决IE下使用鼠标一直拉到最底端超出页面时页面仍然向下滚动的问题
                    this.releaseCapture();
                }
            }
        }
    }
    return this;
}

/**
 * 解决事件绑定中,IE浏览器的问题(标准的事件监听是使用的addEventListener(),而IE中却使用的是attachEvent(),IE中存在内存泄露问题),因此,我们希望我们的函数能解决以下问题: 
 *          1.支持同一元素的同一事件句柄能够绑定多个监听函数 fixed!
 *          2.如果在同一元素的同一时间句柄上注册同一函数,则第一次注册后的所有函数都将被忽略
 *          3.将事件函数的this指向调用的元素
 *          4.事件监听函数按指定的顺序执行(IE下是按照倒序执行)
 *          5.在函数体内不用再使用event= event || window.event;来标准化event对象
 */
// 以下是使用方式实例
/* 
$().addEvent(window, 'load', function() {
    alert(1)
})
$().addEvent(window, 'load', function() {
    alert(2)
})
*/
Base.prototype.addEvent = function(obj, type, fn) {
    if (typeof addEventListener != 'undefined') {
        obj.addEventListener(type, fn, false)
    } else if (typeof attachEvent != 'undefined') {
        obj.attachEvent('on' + type, function() {
            fn.call(obj, window.event); //修复IE下默认的this指向window的问题
        })
    }
}

// 查找节点下的子节点
Base.prototype.find = function(str) {
    var childElements = []; //我们创建一个临时变量数组,将我们查找到的值作为数组传入此值中,后将此数组再赋值给我们的原始变量存储的数组
    for (var i = 0; i < this.elements.length; i++) {
        switch (str.charAt(0)) {
            case '#': // 当查找的字符串前缀带#,则判定为ID选择器
                childElements.push(document.getElementById(str.substring(1)))
                break;
            case ".": // 当查找的字符串前缀带. ,则判定为类选择器
                var all = this.elements[i].getElementsByTagName('*') // 查找所有的元素
                for (var j = 0; j < all.length; j++) {
                    if (all[j].className == str.substring(1)) { //做一个循环,判定所有数组中的className是否为传值的值
                        childElements.push(all[j]) // 如果是需要的className, 则传值入childElements
                    }
                }
                break;
            default:
                var tags = this.elements[i].getElementsByTagName(str) //当传进来的就是一个单纯的字符串的时候,默认为进行tagName搜索,直接使用tagName进行查找即可
                for (var j = 0; j < tags.length; j++) { //将符合的元素,逐一传入childElements中
                    childElements.push(tags[j])
                }
        }
    }
    this.elements = childElements;
    return this;
}