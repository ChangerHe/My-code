;(function($){
	var _this
	var def = {
		'width':'200px', 
		'height':'400px', 
		'backgroundColor':'#f00'
	}
	var _setAttr = function(conf) {
		_this = this

		var config = $.extend({}, def, conf)

		$(this).css({
			'height': config.height,
			'width': config.width,
			'backgroundColor':config.backgroundColor
		})


		return _this
	}

	jQuery.fn.setAttr = _setAttr
})(jQuery)