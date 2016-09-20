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
				s += getImageEl(images[i])
			}
			$(".ideas__img").html(s);			
		});
	};

	var searchRandomFunction = function(count) {		
		$(".ideas__img").html("<div class='loader'>Загрузка...</div>");
		var s = "";
		var p = "";
		
		var searchRandomItem = function(j) {
			var url = "http://api.pixplorer.co.uk/image";		
			$.ajax({url: url}).then(function(data) {						
				s += getImageEl(data.images[0]);			
				if (j < count) {
					searchRandomItem(j + 1)
				} else {
					$(".ideas__img").html(s);		
				}
			});			
		}
		searchRandomItem(1);
	};

	$("#searchButton").on("click", function() {	
		var searchInterests = $("#searchInterests").val();		
		searchFunction(searchInterests);
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