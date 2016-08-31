$(document).ready(function() {

	$.fn.karusel({
		elemenMoov: 135,
		animSpeed: 200,
		elemenNumber: 3
	});
	
	$(function() {
		var html = $('#biography').html(); 
		var user = {
			fullName: 'Кравчук Костянтин Вікторович',
			profession: 'Геодезист, картограф',
			goal: 'Хочю розвиватися та досягти чогось більшого, тому що',
			goalFactor_1: 'Постійні відрядження на об`єкти без результату',
			goalFactor_2: 'Поняд нормова робота, яка не оцінюється',
			goalFactor_3: 'З такими зарплатами зараз не проживеш',
			tellNumber: '+380966071076',
			linkVK: 'http://vk.com/kosgis',
			nik: 'KosGis',
			feedback: 'Життя прекрасне, тільки дуже швидке!!!'
		};		
		var content = tmpl(html, {
			data: user
		});
		
		$('body').append(content);
	});
})
