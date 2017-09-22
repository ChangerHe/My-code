// ;(function($){

// 	var _this

// 	function _setColor(conf) {
// 		_this = this
// 		this.css('color', conf)
// 	}

// 	$.fn.setColor = _setColor

// })(jQuery);

// 第二部,定义模块

define(['jq'], function(z) {

		var _this

		function _setHeight(conf) {
			_this = this
			this.css('height', conf)
			return _this
		}

		$.fn.setHeight = _setHeight

		// return jQuery

})