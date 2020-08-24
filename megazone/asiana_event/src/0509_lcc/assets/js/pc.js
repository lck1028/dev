
'use strict';
$(document).ready(function () {
	(function () {
		var $aside = $('.lcc-aside'),
			$biz = $('.lcc-aside__biz')


		if ($biz.length != 0) {
			var bizInit = new Waypoint({
				element: $aside[0],
				handler: function (direction) {
					$biz.addClass('lcc-aside__biz--is-active');
				},
				offset: '80%'
			});
		}
	})();

	(function () {
		var $detail = $('.china-map__detail'),
			$btn = $('.china-map__btn'),
			className = 'china-map__btn--is-active',
			detailClassName = 'china-map__detail--is-active';

		$btn.on('click', function () {
			var _this = $(this),
				data = {
					ko: _this.data('ko'),
					ch: _this.data('ch'),
					code: _this.data('code'),
					img: _this.data('img'),
					info: _this.data('info'),
					search: _this.data('search'),
					buy: _this.data('buy')
				}
			//detail.get(data);
			chDetail.init(data);
			_this.siblings().removeClass(className);
			if (_this.hasClass(className)) {
				_this.removeClass(className);
			} else {
				_this.addClass(className);
			}


		});
		var chDetail = {
			set: function (data) {
				var $img = $detail.find('.china-map__detail-inner'),
					$code = $detail.find('.china-map__detail-code'),
					$name = $detail.find('.china-map__detail-name'),
					$info = $detail.find('.china-map__detail-link--type-info'),
					$search = $detail.find('.china-map__detail-link--type-search'),
					$buy = $detail.find('.china-map__detail-link--type-buy');
				$img.css('background-image', 'url(' + data.img + ')');
				$code.text(data.code);
				$name.text(data.ko + '[' + data.ch + ']');
				$info.attr('href', data.info).attr('data-code', data.code);
				$search.attr('href', data.search);
				$buy.attr('href', data.buy);
			},
			init: function (data) {
				this.set(data);
				$detail.addClass(detailClassName);
			}

		}

	})();


	(function () {
		var slickOption = {
			accessibility : false,
			centerMode: true,
			centerPadding: '190px',
			dots : true,
			customPaging: function (slider, i) {
				return $('<button class="china-slider__item-btn china-slider__item-btn--ico-0'+(i+1)+'" type="button" />').text($(slider.$slides[i]).data('nav'));
			},
		}
		$('.china-slider__list').slick(slickOption);
	})();


	(function () {
		var $scheduleNav = $('.japen-schedule__header'),
			$scheduleNavList = $scheduleNav.find('.japen-schedule__nav'),
			stickyClass = {
				top: 'japen-schedule__header--sticky-top',
				bottom: 'japen-schedule__header--sticky-bottom'
			};

		if ($scheduleNav.length != 0) {
			var scheduleNavInit = new Waypoint({
				element: $scheduleNav[0],
				handler: function (direction) {
					$scheduleNav.addClass(stickyClass.top)
				},
				offset: 100
			});
		}

		if ($('.ja-section-01').length !=0 ){
		var scheduleNavChange = new Waypoint.Inview({
				element: $('.ja-section-01')[0],
				enter: function (direction) {
					//console.log('들어옴' + direction);
					if (direction == 'up') {
						$scheduleNav.removeClass(stickyClass.top).addClass(stickyClass.bottom);
					} else {

					}
				},
				entered: function (direction) {
					//console.log('다들어옴' + direction);
					if (direction == 'up') {
						$scheduleNav.removeClass(stickyClass.top);
					} else {
						$scheduleNav.removeClass(stickyClass.top).addClass(stickyClass.bottom);
					}
				},
				exit: function (direction) {
					//console.log('나감' + direction);
					if (direction == 'up') {
						$scheduleNav.removeClass(stickyClass.bottom).addClass(stickyClass.top);
					} else {
					}
				},
				exited: function (direction) {
					//console.log('다나감' + direction);
					if (direction == 'up') {
						$scheduleNav.removeClass(stickyClass.top);
					} else {
						$scheduleNav.removeClass(stickyClass.top).addClass(stickyClass.bottom);
					}
				}
			});
		}
		if ($('.japen-schedule__item').length != 0){
			var scheduleItemInit = $('.japen-schedule__item').waypoint(function (direction) {
				var $ele = $(this.element),
					eleIndex = $ele.index(),
					$navItem = $scheduleNavList.find('.japen-schedule__nav-item');
				$navItem.eq(eleIndex).addClass('japen-schedule__nav-item--is-active').siblings().removeClass('japen-schedule__nav-item--is-active');
			}, {
				offset: '40%'
			});
		}


		$('.japen-schedule__btn').on('click', function(e){
			var _this = $(this),
				thisIndex = _this.closest('.japen-schedule__nav-item').index(),
				windowScrollY = window.scrollY,
				ItemOffset = $('.japen-schedule__item').eq(thisIndex).offset().top;



			$('html, body').animate({
				scrollTop: ItemOffset - Math.floor((window.innerHeight * 0.4) - 1 )
			}, function () {

				_this.closest('.japen-schedule__nav-item').addClass('japen-schedule__nav-item--is-active').siblings().removeClass('japen-schedule__nav-item--is-active')

			})

		})
	})();


	(function () {

		var seasiaTimetable = new Swiper('.seasia-timetable__slider', {
			direction: 'horizontal',
			slidesPerView: 'auto',
			spaceBetween: 0,
			mousewheelControl: true,
			scrollbar: '.swiper-scrollbar',
			scrollbarHide: false,
			scrollbarDraggable: true,

			centeredSlides: true,
			pagination: '.swiper-pagination',

			paginationClickable: true,
			paginationBulletRender: function (swiper, index, className) {
				return '<button type="button" class="' + className + '"><span>' + (index) + 'H<span class="our">OUR</span></span><i class="arrow"><span class="arrow-01"></span><span class="arrow-02"></span><span class="arrow-03"></i></button>';
			},

		});

	})();

	(function () {
	//transition
		var $cloud = $('.lcc-header__cloud');
		$cloud.on('animationend', function () {
			setTimeout(function () {
				$cloud.addClass('lcc-header__cloud--ani-end');
			},1000)
		})

	})();


	(function () {
		var loginBool = false;
		(function () {
			var cookieData = document.cookie.indexOf('UID');
			if (cookieData == -1) {
				loginBool = false;
			} else {
				loginBool = true;
			};
		})();
		var $quizLayer = $('.lcc-module__login'),
			$submitWrap = $('.btn_wrap_ceType1'),
			$submit = $('.btn_wrap_ceType1').find('._btn-save'),
			$radio = $('.lcc-module').find('input[type="radio"]'),
			quizBool = false,
			quizAlert = '';

		if (loginBool) {
			$quizLayer.hide();
		}

		$radio.on('change', function () {
			var _this = $(this),
				quizOK = _this.closest('.lcc-module__quiz-item').data('true');
			if (quizOK) {
				$submitWrap.addClass('btn_wrap_ceType1--ok');
				quizBool = true;
			} else {
				$submitWrap.removeClass('btn_wrap_ceType1--ok');
				quizBool = false;
			}

		});

		if ($submit.length == 0) {
			$submitWrap.addClass('btn_wrap_ceType1--ok');
		} else {

			$submitWrap.on('click', function () {

				if (!quizBool) {
					alert('정답 항목을 다시 한번 고민해 보세요\n'+$('.lcc-module').data('alert'));
				} else {

				}
			});
		}
	})()


})
