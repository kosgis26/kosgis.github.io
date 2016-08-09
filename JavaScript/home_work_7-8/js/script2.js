$(document).ready(function() {
	var tooltips = $("[title]").tooltip({
		position: {
			my: "left top",
			at: "right+30 top-10"
		},
		show: "scale"
	});
	var b = $('#help').button();
	b.on("click", function() {
		tooltips.tooltip( "open" );
	});  
	$('input').addClass("ui-corner-all")
});


//$('#help').tooltips({
//	offset: [10, 0],
//	css: {
//		'padding': '10px',
//		'max-width': '100px',
//		'color': '#303030',
//		'background-color': '#f5f5b5',
//		'border': '1px solid #deca7e',
//		'-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
//		'-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
//		'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
//		'text-shadow': 'none'
//	}
//});
