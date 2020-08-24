
;$(document).ready( function(){
	(function(){
		//tab test
		$tab = $('[class^="c-tab__"]'),
		$tabItem = $tab.find('[class*="item"]');
		$tabItem.on('click', function(){
			var _this = $(this);
				className = _this[0].classList[0],
				activeClass = className+'--is-active';
			_this.addClass(activeClass).siblings().removeClass(activeClass);
		});
	})();


	(function(){
		var $selectCustom = $('.c-select__custom'),
			$selectCustomBtn = $selectCustom.find('.c-select__custom-btn');


		$selectCustomBtn.on('click', function(){
			var _this = $(this),
				$parent = _this.closest('.c-select__custom');
			$parent.toggleClass('c-select__custom--is-open');

		});
	})();

	(function(){
		var $search = $('.c-playersearch'),
			$input = $search.find('.c-playersearch__input-text'),
			$result = $search.find('.c-playerresult'),
			expendClass = 'c-playerresult--is-expend';
		$input.on('focus', function (e) {
			var _this = $(this),
				$thisResult = _this.closest('.c-playersearch').find('.c-playerresult');
				$thisResult.addClass(expendClass);
		});
		$search.on('click', function(e){
			e.stopPropagation();
		});
		$(document).on('click', function(e){
			$result.removeClass(expendClass);
		});


	})();

	(function () {
		$('#btn_test').on('click', function () {
			var _this = $(this);
			id = _this.attr('id'),
				$id = $('[data-layer="' + id + '"]');

			$id.addClass('c-layer--is-active');
		})
		$('.c-layer__btn-close').on('click', function () {
			var _this = $(this);
			_this.closest('.c-layer').removeClass('c-layer--is-active');
		});
	})();

});
