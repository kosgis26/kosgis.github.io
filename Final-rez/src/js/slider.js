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
		
		var slideWidth = $('#item').outerWidth();
		
		var newLeftPos1 = slideWrap1.position().left - slideWidth;
		var newLeftPos2 = slideWrap2.position().left - slideWidth;
		var newLeftPos3 = slideWrap3.position().left - slideWidth;

		nextLink1.click(function(){
			if(!slideWrap1.is(':animated')) {
	
				slideWrap1.animate({left: newLeftPos1}, 500, function(){
					slideWrap1
						.find('#item:first')
						.appendTo(slideWrap1)
						.parent()
						.css({'left': 0});
				});
			}
		});
		nextLink2.click(function(){
			if(!slideWrap2.is(':animated')) {
	
				slideWrap2.animate({left: newLeftPos2}, 500, function(){
					slideWrap2
						.find('#item:first')
						.appendTo(slideWrap2)
						.parent()
						.css({'left': 0});
				});
			}
		});
		nextLink3.click(function(){
			if(!slideWrap3.is(':animated')) {
	
				slideWrap3.animate({left: newLeftPos3}, 500, function(){
					slideWrap3
						.find('#item:first')
						.appendTo(slideWrap3)
						.parent()
						.css({'left': 0});
				});
			}
		});

		prevLink1.click(function(){
			if(!slideWrap1.is(':animated')) {
			
				slideWrap1
					.css({'left': newLeftPos1})
					.find('#item:last')
					.prependTo(slideWrap1)
					.parent()
					.animate({left: 0}, 500);
			}
		});
		prevLink2.click(function(){
			if(!slideWrap2.is(':animated')) {
			
				slideWrap2
					.css({'left': newLeftPos2})
					.find('#item:last')
					.prependTo(slideWrap2)
					.parent()
					.animate({left: 0}, 500);
			}
		});
		prevLink3.click(function(){
			if(!slideWrap3.is(':animated')) {
			
				slideWrap3
					.css({'left': newLeftPos3})
					.find('#item:last')
					.prependTo(slideWrap3)
					.parent()
					.animate({left: 0}, 500);
			}
		});
	}
	htmSlider();
});