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

		function _setColor(conf) {
			_this = this
			this.css('color', conf)
			return _this
		}

		$.fn.setColor = _setColor

		// return jQuery

})