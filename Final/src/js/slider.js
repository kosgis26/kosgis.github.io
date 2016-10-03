$(document).ready(function() {
	function htmSlider() {

		var slideWrap1 = $('#wrap1');
		var slideWrap2 = $('#wrap2');
		var slideWrap3 = $('#wrap3');

		var nextLink1 = $('#next-slide1');
		var prevLink1 = $('#prev-slide1');
		var nextLink2 = $('#next-slide2');
		var prevLink2 = $('#prev-slide2');
		var nextLink3 = $('#next-slide3');
		var prevLink3 = $('#prev-slide3');
		
		var is_animate = false;

		var getWrapShift = function() {			
			return $(".slider__wrap").position().left - $('.slider__item').outerWidth();	
		};

		var nextLinkClick = function(sliderWrap) {
			if (!sliderWrap.is(':animated')) {
				sliderWrap.animate({left: getWrapShift()}, 500, function() {
					sliderWrap
						.find('.slider__item:first')
						.appendTo(sliderWrap)
						.parent()
						.css({'left': 0});
				});
			}
		};

		nextLink1.click(function(){
			nextLinkClick(slideWrap1);
		});
		nextLink2.click(function(){			
			nextLinkClick(slideWrap2);
		});
		nextLink3.click(function(){
			nextLinkClick(slideWrap3);
		});

		var prevLinkClick = function(sliderWrap) {
			if(!sliderWrap.is(':animated')) {			
				sliderWrap
					.css({'left': getWrapShift()})
					.find('.slider__item:last')
					.prependTo(sliderWrap)
					.parent()
					.animate({left: 0}, 500);
			}
		};
		prevLink1.click(function(){
			prevLinkClick(slideWrap1)
		});
		prevLink2.click(function(){
			prevLinkClick(slideWrap2)
		});
		prevLink3.click(function(){
			prevLinkClick(slideWrap3)
		});
	}
	htmSlider();
});