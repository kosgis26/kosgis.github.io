(function ($) {
	/*
	* Options:
	* animSpeed - 
	* elemenMoov -
	* elemenNumber -
	*/
	$.fn.karusel = function (options) {
		
		var defaults = {
			elemenMoov: 135,
			animSpeed: 500,
			elemenNumber: 5
		};
		options = $.extend(defaults, options);
		
		var elemenMoov = options.elemenMoov;
		var animSpeed = options.animSpeed;
		var elemenNumber = options.elemenNumber;
		
		var arrowLeft = $('.carousel-arrow-left');
		var arrowRight = $('.carousel-arrow-right');
		var carouselList = $('.carousel-list');
		
		var liCarousel = carouselList.find('li');
		var curentMoov = 0;
		var elementsLi = liCarousel.length;
		var finishMoov = -((elementsLi - elemenNumber) * elemenMoov);
		var startMoov = 0;
		
		arrowLeft.click(function () {
			curentMoov += elemenMoov
			if (curentMoov <= startMoov) {
				carouselList.animate({ left : curentMoov + "px"}, animSpeed);
			} else {
				var el = carouselList[0];
				var childList = el.children;
				var last = childList[childList.length - 1];
				el.removeChild(last);
				carouselList.css({ left :  - elemenMoov + "px"});
				carouselList.prepend(last);
				carouselList.animate({ left :  0 + "px"}, animSpeed);
			};
		});
		arrowRight.click(function () {
			curentMoov -= elemenMoov
			if (finishMoov <= curentMoov) {
				carouselList.animate({ left : curentMoov + "px"}, animSpeed);
			} else {
				curentMoov += elemenMoov
				var el = carouselList[0];
				var childList = el.children;
			//	debugger;
				var first = childList[0];
				el.removeChild(first);
				carouselList.css({ left : curentMoov + elemenMoov + "px"});
				carouselList.append(first);
				carouselList.animate({ left : curentMoov + "px"}, animSpeed);
			};
		});
		return (this);
	}
})(jQuery);