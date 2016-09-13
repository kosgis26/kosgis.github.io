requirejs.config({
	paths: {
		// 'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
		'jquery': 'https://code.jquery.com/jquery-3.1.0'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require(
	[
		'jquery',
		'module1',
		'module2',
		'module3'
	],
	function ($, Modal, View, Controller) {	
		var firstToDoList = ['Lern Html', 'Lern Javascript', 'Sleep'];
		var modal = new Modal(firstToDoList);
		var view = new View(modal);
		var controller = new Controller(modal, view);				
	}
);