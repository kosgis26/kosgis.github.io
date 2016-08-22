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
		carouselList.css({  })
		
		var liCarousel = carouselList.find('li');
		var curentMoov = 0;
		var elementsLi = liCarousel.length;
		var minLength = - ((elementsLi - elemenNumber) * elemenMoov);
		var maxLength = 0;
		
		arrowRight.click(function () {
			if (curentMoov != maxLength) {
				console.log(curentMoov)
				curentMoov += elemenMoov;
				carouselList.animate({ left : curentMoov + "px"}, animSpeed);
			}
		}),
		arrowLeft.click(function () {
			if (curentMoov != minLength) {
				curentMoov -= elemenMoov;
				console.log(curentMoov)
				carouselList.animate({ left : curentMoov + "px"}, animSpeed);
			}
		})	
		return (this);
	}
})(jQuery);