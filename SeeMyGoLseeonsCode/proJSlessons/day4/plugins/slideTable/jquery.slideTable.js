;
(function($) {
    $.fn.extend.slideTable = function(opts) {

        // 传递参数, 及设置默认参数
        /* 
            需要设置的参数有: 头部开始的颜色, 头部鼠标移入的颜色,下方开始的颜色, 下方鼠标移入的颜色,头部的类名, 底部的类名

            预先声明的结构: 头部以ul为父盒子,并有类名为: 
            <ul class="J_slideTable">
                <li>滑动1</li>
                <li>滑动2</li>
                <li>滑动3</li>
            </ul>
            <div class="J_slideTableBox">
                <div>盒子1</div>
                <div>盒子2</div>
                <div>盒子3</div>
            </div>
        */
        var set = {
            headClass: 'J_slideTable',
            headColor: "#ccc",
            headHoverColor: '#900',
            btnClass: 'J_slideTableBox',
            btnColor: '#ccc'
        }

        // 合并输入的设置及默认的设置
        var defSet = $.extend({}, set, opts)


        // 初始化整个ul中的li颜色
        $('.' + defSet.headClass).find('li').css('background', defSet.headColor)

        // 先将所有的div隐藏
        $('.' + defSet.btnClass).find('div').hide()


        // 将第一个li设置为默认激活的状态
        $('.' + defSet.headClass).find('li').first().css('background', defSet.headHoverColor)

        // 将第一个div设置为默认显示的状态
        $('.' + defSet.btnClass).find('div').first().css({
            'display': 'block',
            'background': defSet.btnColor
        })

        // 定义一个index, 存储移入的li的下标
        var index;

        $('.' + defSet.headClass).find('li').hover(function() {
            // 将this的值暂存起来
            _this = this


            // 初始化整个ul中的li颜色
            $('.' + defSet.headClass).find('li').css('background', defSet.headColor)

            // 先将所有的div隐藏,并设置所有div的颜色
            $('.' + defSet.btnClass).find('div').css({
                'display': 'none',
                'background': defSet.btnColor
            })

            // 设置移入的颜色为对应的颜色
            $(this).css('background', defSet.headHoverColor)

            // 将index值存入
            index = $(this).index()

            // 对应index值的div显示
            $('.' + defSet.btnClass).find('div').eq(index).show()

        }, function() {
            // $(this).css('background', '#ccc')
        })

    }
})(jQuery)