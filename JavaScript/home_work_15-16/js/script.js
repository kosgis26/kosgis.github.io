// https://pixabay.com/api/docs/#default_image_search_response
$(document).ready(function() {

	var onclick = function() {
		var searchText = $("#searchEdit").val();
		var url = "https://pixabay.com/api/";
		url += "?username=kosgis";
		url += "&key=3204085-bf48a7e1c1f4d2fd9d2960119";
		url += "&q=" + searchText;
		$(".foto").html("Загрузка...");
		$.ajax({url: url}).then(function(data) {
			console.log("Data: ", data);
			var s = "";
			for(var i = 0; i < data.hits.length; i++) {
				s += "<img src='" + data.hits[i].userImageURL + "'>";
			}
			$(".foto").html(s)
		})
	};

	$("#searchButton").on("click", onclick);
	$("#searchEdit").on("keypress", function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			onclick();
		}
	});

	var Human = {
		name: 'Artur', 
		age: 25, 
		paul: 'men', 
		growth: 182, 
		weight: 75
	 };

 	function Worker () {
		this.placeOfWork = 'office';
		this.salary = 5000;
		this.work = function () {

		};
 	}
	function Student () {
			this.plaseOfStudy = 'university'; 
			this.scholarship = 1200;
			this.watchSerials = function () {

			};
	 	}
 
 	var n = 4;
 	var newWorker = new Worker;;

 	newWorker.prototype = Human;
	console.log("newWorker", newWorker)

	for (var i = 1; i < n; i++) {
		newWorker '+ i' = newWorker;
		console.log("newWorker '+ i", newWorker '+ i); 
	}

 	
	var newStudent = new Student;

	newStudent.prototype = Human;
	console.log("newStudent", newStudent)

	// for (var i = 1; i < n; i++) {
		// newStudent = new Student;
		// console.log("newStudent", newStudent)
	// }

});