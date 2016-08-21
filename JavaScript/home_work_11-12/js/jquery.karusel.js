(function ($) {
	/*
	* Options:
	* animSpeed - 
	* elemenMoov -
	*/
	$.fn.karusel = function (options) {
		
		var defaults = {
			elemenMoov: 520,
			animSpeed: 800
		};
		options = $.extend(defaults, options);
		
		var elemenMoov = options.elemenMoov;
		var animSpeed = options.animSpeed;
		
		var arrowLeft = $('.carousel-arrow-left');
		var arrowRight = $('.carousel-arrow-right');
		var carouselList = $('.carousel-list');
		carouselList.css({  })
		
		var liCarousel = carouselList.find('li');
		var curentMoov = 0;
		var elementsLi = liCarousel.length;
		var minLength = - ((elementsLi - 1) * elemenMoov);
		var maxLength = 0;
		
		arrowLeft.click(function () {
			if (curentMoov != maxLength) {
				console.log(curentMoov)
				curentMoov += elemenMoov;
				carouselList.animate({ left : curentMoov + "px"}, animSpeed);
			}
		}),
		arrowRight.click(function () {
			if (curentMoov != minLength) {
				curentMoov -= elemenMoov;
				console.log(curentMoov)
				carouselList.animate({ left : curentMoov + "px"}, animSpeed);
			}
		})	
		return (this);
	}
})(jQuery);