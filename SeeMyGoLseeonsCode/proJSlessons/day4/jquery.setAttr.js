;(function($){
	var _this
	var _setAttr = function(height, width, bg) {
		_this = this

		$(this).css({
			'height': height,
			'width': width,
			'backgroundColor':bg

		})


		return _this
	}

	jQuery.fn.setAttr = _setAttr
})(jQuery)