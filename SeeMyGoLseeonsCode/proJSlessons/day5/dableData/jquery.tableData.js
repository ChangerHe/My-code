;
(function($) {

    var _this;

    var def = {
        url: 'testData.json',
        click: function() {
            $(this).css('background', '#900')
        },
        mouseover: function() {
            $(this).css('background', '#ccc')
        }
    }

    var conf

    function _tableData(set) {

        // 将最开始的this值存储起来
        _this = this

        // 合并传入的值和默认值\
        conf = $.extend({}, def, set)

        // 预先插入iframe
        var iframe = $('<iframe src="./' + conf.url + '" style="display: none;"></iframe>').appendTo($('body'))

        // 预先获取到restData这个JSON的值
        iframe.on('load', function() {

            var data = JSON.parse(this.contentWindow.document.body.innerText)
                // .contentDocument;
            console.dir(this)
            console.dir(data)
                // console.dir(data)
                // console.log()

            $('tbody').html(struct(data))
            onEvent()
        })



    }

    // 添加将数据序列化的操作
    function struct(data) {
        var html = '';
        for (var i in data) {
            html += '<tr>'
            for (var j in data[i]) {
                html += '<td>' + data[i][j] + '</td>'
            }
            html += '<td>删除</td>'
            html += '</tr>'
        }

        return html
    }

    function onEvent() {
        // 先移除url属性
        delete conf.url

        // 做一个循环遍历,将对应的值取出
        for (var i in conf) {
            // console.log(this)
            $(_this).on(i, 'tr', conf[i])
        }
    }

    $.fn.tableData = _tableData

})(jQuery);