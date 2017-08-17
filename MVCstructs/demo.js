// window.onload = function() {
// console.log(base.getId('box'))
// console.log(base.getName('para').elements)
// console.log(base.)
//这个时候,我们使用css方法其实返回的是个字符串,因此无法使用加点的方法,为其添加相应的属性
// console.log(base.getTagName('p').css('color', 'red').html('111'))
// $().getId('box').html('xxxx').click(function() {
//         console.log(this)
//     })
//但是现在存在一个问题是,我们现在写的所有的属性都是基于一个new出来的对象的,所以我们对对象进行更改的时候,它的elements数组都是一样的,只会增加不会减少,所以我们每次对不同的标签样式进行属性设置的时候,都要新new一个对象出来,才能不影响相互之间的设置的值.
// $().getTagName('p').html('aaaa')
// console.log($().getTagName('p').html());
// console.log($().getId('box').css('color'))
// console.log($().getId('box').css('color', 'green'))

// console.log($().getClass("par", '#box').addClass('a'))
//     // console.log($().getClass("par", '.box').addClass('b'))
// console.log($().getClass("par", 'div').addClass('c'))
// $().addRule(0, 'body', 'background:green', 0)

// $().getId('head').hover(function() {
//     $().getId('aUl').show();
//     console.log($(this).css('color', 'green'))
// }, function() {
//     $().getId('aUl').hide();
// })
// $().getId('testBox').center().resize(function() {
//         $().getId('testBox').center();
//     })
// $().getId('container')
// $().getId('testBox').lock().resize(function() {
//     $().getId('testBox').lock()
// })



// var testBox = document.getElementById('testBox');
// testBox.onmousedown = function(e) {
//     var e = e || window.event;
//     var x = e.clientX - this.offsetLeft;
//     var y = e.clientY - this.offsetTop;
//     this.onmousemove = function(e) {
//         this.style.left = e.clientX - x + 'px';
//         this.style.top = e.clientY - y + 'px';
//     }
//     this.onmouseup = function() {
//         this.onmousemove = null;
//     }
// }


// $().getId('testBox').center().drag().resize(function() {
//         $().getId('testBox').center().drag()
//     })
// $().getId('head').drag();



// $().addEvent(window, 'load', function() {
//     alert(2)
// })
// $().addEvent(window, 'load', function() {
//     alert(3)
// })


// $().getId('box').css('color')
// console.log($().getTagName('div'))



// window.onload = function() {
//     $().getId('testBox').center().resize(function() {
//         $().getId('testBox').center();
//     })
// }






// }

$().addEvent(window, 'load', function() {
        // $().getTagName('span').getElement(2).css('color', 'red')
        // $().getId('box').click(function() {
        //     // console.log($(this).css('color', 'orange'))
        // })
        // console.log($('#box').css('color', 'green').click(function() {
        //     console.log($(this).html())
        // }))
        // $('.a').css('color', 'blue')
        // $().getClass('a').css('fontSize', '120px')
        // $('p').find('.a').css('backgroundColor', '#ccc')
        // $('p').find('span').css('backgroundColor', '#ccc')
        // console.log($().getId('box').html())

        // var ua = navigator.userAgent.toLowerCase(); //我们先调取浏览器的版本信息
        // var version = ''; //sersion用于调取浏览器的版本信息
        // console.log(ua)
        //     // 在浏览器类型检测中,可以注意到这个特性:
        //     // 1.IE浏览器是有一个MSIE的标识,后面加上浮点数的版本号的,注意,MSIE后面有一个空格,也就是说我们进行正则表达式匹配的时候,一定要记得加上这个空格      msie 9.0
        //     // 2.谷歌浏览器的特点是含有chrome字符串加斜线加上后面的浮点数版本号,有一点要注意的是,可以看到谷歌浏览器后面还会有一个Safari的标识     chrome/59.0.3071.115
        //     // 3.火狐浏览器的特点是含有Firefox后面加斜线加上浮点数版本号      Firefox/54.0
        // console.log(/msie ([\d.]+)/.test(ua))
        // if (/msie ([\d.]+)/.test(ua)) {
        //     s = ua.match(/msie ([\d.]+)/)[1]
        //     console.log('您的浏览器是IE浏览器,版本号:' + s)
        // } else if (/chrome\/([\d.]+)/.test(ua)) {
        //     s = ua.match(/chrome\/([\d.]+)/)[1]
        //     console.log('您的浏览器是chrome浏览器,版本号' + s)
        // } else if (/firefox\/([\d.]+)/.test(ua)) {
        //     s = ua.match(/firefox\/([\d.]+)/)[1];
        //     console.log('您的浏览器是Firefox浏览器,版本号: ' + s)
        // }



    })
    //进行文档的优先加载
    // 传统的DOM加载方式,当文档中有图片的时候,会等图片完全加载完毕之后,才能够加载我们写的脚本文件
    // 在IE678下进行模拟DOMContentLoaded
    // document.write('<script id="ie_loaded" defer = "defer" src="javascript:void(0)"></script>')
    // var ie_loaded = document.getElementById('ie_loaded')
    // ie_loaded.onreadystatechange = function() {
    //     alert(this.readyState)
    //     if (this.readyState == 'complete') {
    //         var box = document.getElementById('box')
    //         console.log(box.innerHTML)
    //     }
    // }
$().addEvent(window, 'load', function() {
    $('#btn').click(function() {
        console.log(1)
        $('#box').animate('top', 1, 200, 100)
        if ($('#btn').css('top') == "200px") {

            $('#box').animate('left', 2, 200, 100)
        }


    })



})