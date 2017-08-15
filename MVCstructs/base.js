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