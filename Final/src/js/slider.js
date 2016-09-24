$(document).ready(function(){
	function htmSlider(){


		var slideWrap1 = $('.slide-wrap1');
		var slideWrap2 = $('.slide-wrap2');
		var slideWrap3 = $('.slide-wrap3');

		var nextLink1 = $('.next-slide1');
		var nextLink2 = $('.next-slide2');
		var nextLink3 = $('.next-slide3');
		var prevLink1 = $('.prev-slide1');
		var prevLink2 = $('.prev-slide2');
		var prevLink3 = $('.prev-slide3');
		
		var is_animate = false;
		
		var slideWidth1 = $('.slide-item1').outerWidth();
		var slideWidth2 = $('.slide-item2').outerWidth();
		var slideWidth3 = $('.slide-item3').outerWidth();
		
		var newLeftPos1 = slideWrap1.position().left - slideWidth1;
		var newLeftPos2 = slideWrap2.position().left - slideWidth2;
		var newLeftPos3 = slideWrap3.position().left - slideWidth3;
		
		nextLink1.click(function(){
			if(!slideWrap1.is(':animated')) {
	
				slideWrap1.animate({left: newLeftPos1}, 200, function(){
					slideWrap1
						.find('.slide-item1:first')
						.appendTo(slideWrap1)
						.parent()
						.css({'left': 0});
				});
			}
		});
		nextLink2.click(function(){
			if(!slideWrap2.is(':animated')) {
	
				slideWrap2.animate({left: newLeftPos2}, 200, function(){
					slideWrap2
						.find('.slide-item2:first')
						.appendTo(slideWrap2)
						.parent()
						.css({'left': 0});
				});
			}
		});
		nextLink3.click(function(){
			if(!slideWrap3.is(':animated')) {
	
				slideWrap3.animate({left: newLeftPos3}, 200, function(){
					slideWrap3
						.find('.slide-item3:first')
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
					.find('.slide-item1:last')
					.prependTo(slideWrap1)
					.parent()
					.animate({left: 0}, 200);
			}
		});
		prevLink2.click(function(){
			if(!slideWrap2.is(':animated')) {
			
				slideWrap2
					.css({'left': newLeftPos2})
					.find('.slide-item2:last')
					.prependTo(slideWrap2)
					.parent()
					.animate({left: 0}, 200);
			}
		});
		prevLink3.click(function(){
			if(!slideWrap3.is(':animated')) {
			
				slideWrap3
					.css({'left': newLeftPos3})
					.find('.slide-item3:last')
					.prependTo(slideWrap3)
					.parent()
					.animate({left: 0}, 200);
			}
		});
	}
	htmSlider();
});