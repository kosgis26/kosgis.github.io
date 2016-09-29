$(document).ready(function() {

	var msnry = new Masonry( '.grid', {
		itemSelector: ".grid-item",
		columnWidth: 300,
		initLayout: false,
		resize: false,
		FitWidth: true
	});

	var getImageEl =  function(image) {
		return "<div class='grid-title'><img class='grid-item' src='" + image.imageurl + "'><div class='grid-text'><p>" + image.word + "</p></div></div>";
	}

	var getImageWidth =  function(image) {
		return "<div class='grid-title'><img class='grid-item grid-item--width2' src='" + image.imageurl + "'><div class='grid-text'><p>" + image.word + "</p></div></div>";
	}

	var searchFunction = function(searchInterests) {		
		var url = "http://api.pixplorer.co.uk/image?";
		if (searchInterests) {
			url += "word=" + searchInterests + "&size=tb&";
		}
		url += "amount=7";
		$(".ideas__img").html("<div class='loader'>Загрузка...</div>");
		$.ajax({url: url}).then(function(data) {
			console.log("Data: ", data);
			var s = "";
			var p = "";
			var images = data.images;
			for(var i = 0; i < images.length; i++) {
				if (i == 4 || i == 5)  {
					s += getImageWidth(images[i])
				} else {
					s += getImageEl(images[i])
				}
			}
			$(".ideas__img").html(s);			
		});
	};

	var searchRandomFunction = function(count) {		
		$(".ideas__img").html("<div class='loader'>Загрузка...</div>");
		var s = "";
		var p = "";
		var j = 0;
		var searchRandomItem = function() {
			var url = "http://api.pixplorer.co.uk/image?size=tb&amount=1";
			$.ajax({url: url}).then(function(data) {						
				if (j == 4 || j == 5)  {
					s += getImageWidth(data.images[0])
				} else {
					s += getImageEl(data.images[0]);
				}	
				j++;
				if (j >= count) {
					$(".ideas__img").html(s);		
				}
			});			
		}
		for (var i = 0; i < count; i++) {
			searchRandomItem();
		}
	};

	$("#searchButton").on("click", function() {	
		var searchInterests = $("#searchInterests").val();		
		searchFunction(searchInterests);
		$("#searchInterests").val("");
	});
	$("#searchInterests").on("keypress", function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
		var searchInterests = $("#searchInterests").val();		
		searchFunction(searchInterests);
		}
	});
	searchRandomFunction(7);

})
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
		
		var slideWidth = $('.slider__item').outerWidth();
		
		var newLeftPos1 = slideWrap1.position().left - slideWidth;
		var newLeftPos2 = slideWrap2.position().left - slideWidth;
		var newLeftPos3 = slideWrap3.position().left - slideWidth;

		nextLink1.click(function(){
			if(!slideWrap1.is(':animated')) {
				slideWrap1.animate({left: newLeftPos1}, 500, function(){
					slideWrap1
						.find('.slider__item:first')
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
						.find('slider__item:first')
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
						.find('.slider__item:first')
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
					.find('.slider__item:last')
					.prependTo(slideWrap1)
					.parent()
					.animate({left: 0}, 500);
			}
		});
		prevLink2.click(function(){
			if(!slideWrap2.is(':animated')) {
				slideWrap2
					.css({'left': newLeftPos2})
					.find('.slider__item:last')
					.prependTo(slideWrap2)
					.parent()
					.animate({left: 0}, 500);
			}
		});
		prevLink3.click(function(){
			if(!slideWrap3.is(':animated')) {
				slideWrap3
					.css({'left': newLeftPos3})
					.find('.slider__item:last')
					.prependTo(slideWrap3)
					.parent()
					.animate({left: 0}, 500);
			}
		});
	}
	htmSlider();
});