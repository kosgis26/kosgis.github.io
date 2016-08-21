$(document).ready(function() {
	$(".menudown").hover(
		function(){
			$(this).children(".submenu").slideDown(200);
		},
		function(){
			$(this).children(".submenu").slideUp(400);
		}
	);
});