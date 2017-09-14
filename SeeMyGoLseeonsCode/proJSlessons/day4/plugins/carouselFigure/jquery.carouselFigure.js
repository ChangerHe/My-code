;
(function($) {

    function carouselFigure(conf) {
        // 轮播图需要传递的参数有
        var def = {
            bannerHeight: '300px', // 轮播的高度
            bannerWidth: '800px', // 轮播的宽度
            bannerDotWidth: '20px', // 下方小点的宽度
            bannerDotHeight: '20px', // 下方小点的高度
            bannerDotBottom: '0px', // 下方小点距下方距离
            bannerDotActiveColor: '#f00', // 下方小点激活颜色
            bannerDotNormalColor: '#ff0', // 下方小点普通颜色
            bannerDotRadius: '50%', // 下方小点的弧度
            bannerDotMargin: '4px', // 下方小点的间距
            bannerBottonWidth: '30px', // 两边的按钮宽度
            bannerBottonHeight: '80px', // 两边的按钮高度
            bannerBottonActiveColor: 'rgba(0, 0, 0, .6)', // 两边的按钮激活颜色
            bannerBottonNormalColor: 'rgba(0, 0, 0, .3)', // 两边的按钮普通颜色

        }

        // 合并
        var set = $.extend({}, def, conf)

        // 预先判断一下其img元素的数量
        var imgTotalNum = $('.bannerImg').children().length
        console.log(imgTotalNum)

        // 预先的样式设定
        // $('.banner .bannerImg').css({
        //     'width':
        // })


        // 复制第一个和最后一个元素,并插入到文档流中
        var firstImg = $('.bannerImg img').first().clone()
        var lastImg = $('.bannerImg img').last().clone()
        $('.bannerImg').append(firstImg)
        $('.bannerImg').prepend(lastImg)

        // 定义一个index参数,每次图片位置改变的时候它相应的更改
        var index = 1;

        // 定义函数,由index来操控对应的状态
        function change(index) {

            // 向左移动的值等于下标乘图片的宽度
            $('.bannerImg').css('left', index * (-800))

            // 初始化所有的span的颜色
            $('.bannerDot span').css('backgroundColor', '#ff0')

            // 因为有一次是移动到了第四张,所以在第四张图片的时候,下标为1的颜色应该改变
            if (index == 4) {
                $('.bannerDot span').eq(0).css('backgroundColor', '#900')
            }

            // 再设置对应的激活状态下的spanyanse
            $('.bannerDot span').eq(index - 1).css('backgroundColor', '#900')
        }
        change(index)

        function countAmi() {


            // 对应的下标改变的动画
            $('.bannerImg').animate({
                'left': index * (-800)
            }, 1000, function() {
                // 在回调中进行判断,当index为4,也就是到底的时候,就跳转到第一个页面
                if (index == 4) {
                    index = 1
                    $('.bannerImg').css({
                        'left': index * (-800)
                    })
                } else if (index == 0) {
                    index = 3
                    $('.bannerImg').css({
                        'left': index * (-800)
                    })
                }
                change(index)
            })
        }

        // 设置定时器
        var timer = setInterval(function() {

            // 每运行一次,下标都加一
            index++

            // 在不动的时候,使其自执行
            countAmi()
        }, 2000)

        // 鼠标移入的时候,定时器应该关闭
        $('.banner').hover(function() {
            clearInterval(timer)
        }, function() {
            timer = setInterval(function() {

                // 每运行一次,下标都加一
                index++

                // 在不动的时候,使其自执行
                countAmi()
            }, 2000)
        })

        // 设置左右两侧按钮的点击效果
        $('.bannerBtn').find('div').first().click(function() {
            if (!$('.bannerImg').is(":animated")) {

                // 每运行一次,下标都加一
                index++
                countAmi()
            }
        })
        $('.bannerBtn').find('div').last().click(function() {
            if (!$('.bannerImg').is(":animated")) {
                index--
                countAmi()
            }
        })
    }

    $.fn.extend.carouselFigure = carouselFigure
})(jQuery)