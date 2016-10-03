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