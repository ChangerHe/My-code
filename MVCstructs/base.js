/* 
 * @author: ChangerHe
 * @descripe: 以下为对学习工作中需要用到的基础API进行了简单的封装,以达到提升开发效率的目的
 * @version: 0.0.2
 */

/* 
 * API速查表:(做完再更)
 * 
 * 
 */

//前台类库
// 经过测试，发现因为后面所有的属性和方法都是通过一个new出来的对象设置的，而对象的数组elements是没有减少的，只有在后方增加，所以这个时候当我们为另外一个属性标签设置属性的时候，会影响到之前设置的标签属性，所以我们先直接将new出来的属性对象赋值给$符号,每次需要进行new一个新对象的时候,我们就直接调用$符号了
// 为什么$要这样设置,因为我们每次都要新返回一个对象,如果想像jQuery的方法少一个()的话,可能需要写很多的代码才能实现,我们现在将$看做一个函数,每次需要的时候就自己创建一个并且执行它,就可以新new出一个对象了
var $ = function() {
    return new Base();
}

// 基础库总入口
function Base() {
    // 我们现在创建一个节点来保存获取到的节点,并生成一个数组
    this.elements = [];
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
// 现存BUG:代码中传递第二参数的时候,不能同时选到多个className或者name下的对象,只能选择第一个className或name对象
Base.prototype.getClass = function(className, anyName) {
    var allTag = document.getElementsByTagName("*");
    if (arguments.length == 2) {
        if (/^#\w+$/.test(arguments[1])) {
            var arg = arguments[1].match(/^#(\w+)$/)[1]
            for (var j = 0; j < allTag.length; j++) {
                if (document.getElementById(arg)) {
                    allTag = document.getElementById(arg).getElementsByTagName("*");
                }
            }
        } else if (/^\.\w+$/.test(arguments[1])) {
            var arg = arguments[1].match(/^\.(\w+)$/)[1];
            if (document.getElementsByClassName(arg)) {
                for (var k = 0; k < document.getElementsByClassName(arg).length; k++) {
                    allTag = document.getElementsByClassName(arg)[k].getElementsByTagName("*");
                }
            }

        } else if (/^\w+$/.test(arguments[1])) {
            var arg = arguments[1].match(/^(\w+)$/)[1];
            var a = [];
            if (document.getElementsByTagName(arg)) {
                allTag = [];
                for (var k = 0; k < document.getElementsByTagName(arg).length; k++) {
                    allTag = allTag.concat(document.getElementsByTagName(arg)[k].getElementsByTagName("*"));
                }
                console.log(allTag)
            }
        }
    }
    if (arguments.length == 1) {
        for (var i = 0; i < allTag.length; i++) {
            if (allTag[i].className === className) {
                this.elements.push(allTag[i])
            }
        }
    } else if (arguments.length == 2) {
        for (var i = 0; i < allTag.length; i++) {
            for (var j = 0; j < allTag[i].length; j++) {
                if (allTag[i][j].className === className) {
                    this.elements.push(allTag[i][j])
                }
            }

        }
    }
    return this;
}

// 做到这里发现一个问题,当我们不需要设置class或者是tag中所有的属性,而是设置其中某一个的属性时,我们不能够像往常一样直接在后面加上数组索引,因为暂时技术有限,没有办法获得相应我的兼容性写法,我们在这里设置一个新的getElements的API来调取我们需要的数组索引
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
Base.prototype.addClass = function(str) {
    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].className = str;
    }
    return this;
}