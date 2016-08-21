$(document).ready(function() {

	$(function() {
		var html = $('#test').html(); 
		var articles = [
			{
				title: 'Article 1',
				content: '1111111111'
			},
			{
				title: 'Article 2',
				content: '2222222222'
			},
			{
				title: 'Article 3',
				content: '3333333333'
			},
		];
		var content = tmpl(html, {
			data: articles
		});
		
		$('body').append(content);
	});
})
