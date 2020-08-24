;

'use strict';
$(document).ready(function () {

	(function () {
		var slickOption = {
			accessibility: false,
			dots: false,
			slidesToShow: 1,
		}
		$('.lcc-ch__slider01').slick(slickOption);
	})();


	(function () {
		var slickOption = {
			accessibility: false,
			centerMode: true,
			arrows:false,
			dots: true,
			centerPadding: '20px',
			customPaging: function (slider, i) {
				return $('<button type="button" data-icon="' + $(slider.$slides[i]).data('item') + '" >'+(i+1)+'</button>');
			},
		}
		$('.lcc-ch__slider02').slick(slickOption);
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
			$submitWrap = $('.event_box'),
			$submit = $('.event_box').find('._btn-save'),
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
				$submitWrap.addClass('event_box--ok');
				quizBool = true;
			} else {
				$submitWrap.removeClass('event_box--ok');
				quizBool = false;
			}

		});
		function b1() {
			if ($('.event_box').find('._btn-save').length == 0) {
			$submitWrap.addClass('event_box--ok');
		} else {

			$submitWrap.on('click', function () {

				if (!quizBool) {
					alert('정답 항목을 다시 한번 고민해 보세요\n' + $('.lcc-module').data('alert'));
				} else {

				}
			});
			}
		}
		setTimeout(function () {
			b1();
		}, 2000)
	})()


});