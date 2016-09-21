$(document).ready(function(){
	function htmSlider(){

		// обертка слайдера 
		var slideWrap = $('.slide-wrap');
		// ссылки на предудыщий иследующий слайд
		var nextLink = $('.next-slide');
		var prevLink = $('.prev-slide');
		
		var is_animate = false;
		
		// ширина слайда с отступами
		var slideWidth = $('.slide-item').outerWidth();
		
		// смещение слайдера
		var newLeftPos = slideWrap.position().left - slideWidth;
		
		// Клик по ссылке на следующий слайд
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {
	
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});

			}
		});

		// Клик по ссылке на предыдующий слайд
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {
			
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);

			}
		});
	}
	htmSlider();
});