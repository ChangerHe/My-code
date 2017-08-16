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
    $().getId('box').css('color', 'red').css('fontSize', '100px')
})