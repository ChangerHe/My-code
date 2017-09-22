/**
 * Created by Administrator on 2017/9/14.
 */

;(function($){

    var _this;


    function _formValidate() {

        _this = this

        this.on('submit', function(e) {

            // 找到所有的需要验证的表单对象
            var checkTag = _this.find('[check]')

            // 定义一个布尔变量,默认为true, 当所有的表单验证正常时,才进行提交
            var bool = true

            // 对所有的表单对象进行循环,从而得到对应的具体对象的具体验证方法
            $.each(checkTag, function(index, target) {

                // 判断在check==='require'的情况下
                if($(this).attr('check') === 'require') {
                    $(this).val() ? bool = true : bool = false
                }
                // $(this).attr('check') === 'require' && $(this).val() ? bool = true : bool = false

                // 判断在check==='password'的情况下
                if($(this).attr('check') === 'password') {
                    $(this).val().length >= 6 ? bool = true : bool = false
                }
                // $(this).attr('check') === 'password' && $(this).val().length >= 6 ? bool = true : bool = false

                // 判断在check==='email'的情况下
                if($(this).attr('check') === 'email') {
                    (/^(.+?)@\w+\.[a-z]+$/i).test($(this).val()) ? bool = true : bool = false
                }
                // $(this).attr('check') === 'email' && (/^(.+?)@\w+\.[a-z]+$/i).test($(this).val()) ? bool = true : bool = false

                // 判断在check==='samePassword'的情况下
                if($(this).attr('check') === 'samePassword') {
                    $(_this).find('[check=password]').val() === $(this).val() ? bool = true : bool = false
                }
                // $(this).attr('check') === 'samePassword' && $(_this).find('[check=password]').val() === $(this).val() ? bool = true : bool = false



            })



            // e.preventDefault()

            return bool

        })

        return _this

    }

    $.fn.formValidate = _formValidate

})(jQuery);


/*
* 插件约定:
*   所有支持的输入框都要都要使用checked属性
*   支持的验证类型
*       非空验证: check='require'
*       邮箱验证: check='mail'
*       密码验证: check= 'password'
*
* 实现功能:
*   预先阻止form提交,当所有验证通过的时候才允许提交
*
* */