$(document).ready(function () {
	;

	(function () {
		var $article = $('.a321-article'),
			$btn = $('.a321-header__btn'),
			$btnReplay = $('#introReplay'),
			className = 'intro--is-skip';

		$btn.on('click', function () {
			$article.addClass(className);
		});
		$btnReplay.on('click', function () {
			$article.removeClass(className);
		})
	}());


	(function () {
		var $nav = $('.a321-nav__item'),
			navClass = 'a321-nav__item--is-active',
			contentClass = 'a321-contents--is-active';

		$nav.on('click', function (e) {
			//e.preventDefault();
			var _this = $(this),
				hash = $(this.hash),
				$hash = $(hash);

			if (_this.data('open') == false) {
				//return;
			} else {
				_this.addClass(navClass).siblings().removeClass(navClass);
				$hash.addClass(contentClass).siblings().removeClass(contentClass);
				if (_this.index() == 2) {
					$('.a321-service__item-slide').slick('setPosition');
				}
				$('html,body').animate({
					'scrollTop': '117px'
				});
				return false;
			}
		});
	})();


	(function () {
		var $tabBtn = $('.a321-neo__info-tabbtn'),
			tabClass = 'a321-neo__info-tabitem--is-active',
			contentClass = 'a321-neo__info-content--is-active';

		$tabBtn.on('click', function (e) {
			e.preventDefault();
			var _this = $(this),
				hash = $(this.hash),
				$hash = $(hash);
			_this.closest('.a321-neo__info-tabitem').addClass(tabClass).siblings().removeClass(tabClass);
			$hash.addClass(contentClass).siblings().removeClass(contentClass);
			$('.a321-feature').slick('setPosition');
		});
	})();

	(function () {
		var slickOption = {
			arrows: false,
			dots: true,
			lazyLoad: 'ondemand'
		}
		$('.a321-feature').slick(slickOption);

	})();


	(function () {
		//class slick;
		var slickOption = {
			lazyLoad: 'ondemand',
			dots: true,
			arrows:false
		}
		$('.a321-seatmap__class-visual').slick(slickOption);
	})();



	(function () {
		var $layerBtn = $('.a321-layer__btn');

		$layerBtn.on('click', function (e) {
			e.preventDefault();
			var _this = $(this),
				layer = _this.data('layer'),
				$layer = $('#' + layer),
				offsetY = _this.offset().top,
				$layerWrap = $layer.find('.a321-layer__wrap'),
				slickBool = $layer.find('.slick-initialized').length !== 0 ? true : false;


			$layerWrap.css('top', (offsetY + 100) + 'px');
			$layer.addClass('a321-layer--is-active');
			if (slickBool) {
				$('.slick-initialized').slick('setPosition');
			};
		})

	})();
	(function () {
		var $closeLayer = $('.a321-layer__btn-close');
		$closeLayer.on('click', function () {
			var _this = $(this)
			_this.closest('.a321-layer').removeClass('a321-layer--is-active');
		})
	})();

	(function () {
		//vr layer
		var $body = $('body'),
			$btnVr = $('#btnVR'),
			$layerVr = $('#layerVr'),
			$iframe = $layerVr.find('.a321-layer__vr-iframe'),
			vrSrc = $iframe.data('src'),
			$closeVr = $('.a321-layer__vr-close');


		$btnVr.on('click', function () {
			$body.css('overflow', 'hidden');
			$iframe.attr('src', vrSrc);
			$layerVr.addClass('a321-layer--is-active')
		});
		$closeVr.on('click', function () {
			$body.css('overflow', 'visible');
			$layerVr.removeClass('a321-layer--is-active');
		})
	})();

	(function () {
		var slickOption = {
			lazyLoad: 'ondemand',
			infinite: false,
			dots: true
		}
		$('.a321-wireless__list').slick(slickOption);

	})();

	(function () {
		//class tab;
		var $tabBtn = $('.a321-service__nav-item'),
			tabClass = 'a321-service__nav-item--is-active',
			contentClass = 'a321-service__item--is-active';

		$tabBtn.on('click', function (e) {
			e.preventDefault();
			var _this = $(this),
				hash = $(this.hash),
				$hash = $(hash);
			_this.closest('.a321-service__nav-item').addClass(tabClass).siblings().removeClass(tabClass);
			$hash.addClass(contentClass).siblings().removeClass(contentClass);
			$('.a321-service__item-slide').slick('setPosition');
		});
	})();

	(function () {
		//class slick;
		var slickOption = {
			arrows: false,
			dots: true,
			lazyLoad: 'ondemand'
		}
		$('.a321-service__item-slide').slick(slickOption);
	})();

	(function () {
		if (($('.sub').length) == 0) {
			$('.a321-article').addClass('is-app');
		}

	})();

})